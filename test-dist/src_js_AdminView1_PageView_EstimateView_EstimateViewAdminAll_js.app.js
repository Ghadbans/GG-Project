"use strict";
exports.id = "src_js_AdminView1_PageView_EstimateView_EstimateViewAdminAll_js";
exports.ids = ["src_js_AdminView1_PageView_EstimateView_EstimateViewAdminAll_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/ArrowBack.js"
/*!*******************************************************!*\
  !*** ./node_modules/@mui/icons-material/ArrowBack.js ***!
  \*******************************************************/
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
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
}), 'ArrowBack');

/***/ },

/***/ "./node_modules/@mui/icons-material/KeyboardArrowDown.js"
/*!***************************************************************!*\
  !*** ./node_modules/@mui/icons-material/KeyboardArrowDown.js ***!
  \***************************************************************/
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
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
}), 'KeyboardArrowDown');

/***/ },

/***/ "./node_modules/@mui/icons-material/esm/FileCopy.js"
/*!**********************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/FileCopy.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2zm-1 7h5.5L14 6.5z"
}), 'FileCopy'));

/***/ },

/***/ "./src/js/AdminView1/PageView/EstimateView/EstimateViewAdminAll.js"
/*!*************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EstimateView/EstimateViewAdminAll.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLayoutConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useLayoutConfig */ "./src/js/hooks/useLayoutConfig.js");
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _component_PrintHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/PrintHeader */ "./src/js/component/PrintHeader.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _InvoiceView_AdminView_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InvoiceView/AdminView.css */ "./src/js/AdminView1/PageView/InvoiceView/AdminView.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/icons-material/LocalPrintshop */ "./node_modules/@mui/icons-material/LocalPrintshop.js");
/* harmony import */ var _EstimateInformation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./EstimateInformation */ "./src/js/AdminView1/PageView/EstimateView/EstimateInformation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../utils/apiCache */ "./src/js/utils/apiCache.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material/Email */ "./node_modules/@mui/icons-material/Email.js");
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/Phone */ "./node_modules/@mui/icons-material/Phone.js");
/* harmony import */ var _mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/Web */ "./node_modules/@mui/icons-material/Web.js");
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../img/images.png */ "./src/js/img/images.png");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/FileCopy.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/excel.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Explicit.js");
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






















































var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_32__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_33__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var PrintTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_32__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_33__["default"].tooltip)]: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_32__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_33__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
function EstimateViewAdminAll() {
  var _estimate$filter;
  var _useLayoutConfig = (0,_hooks_useLayoutConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    config = _useLayoutConfig.config;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_44__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_44__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.setUser)({
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/grantAccess"));
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
  var estimationInfoU = grantAccess.filter(row => row.moduleName === "Estimate" && row.access.editM === true);
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
    item = _useState8[0],
    SetItems = _useState8[1];
  // Store all invoices so the third useEffect reuses them without a second API call
  var allInvoicesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/estimation");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          // Run both fetches IN PARALLEL instead of sequentially
          var _yield$Promise$all = yield Promise.all([(0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__.cachedGet)(apiUrl), (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/item"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2),
            res = _yield$Promise$all2[0],
            resItem = _yield$Promise$all2[1];
          setEstimate(res.data.data);
          SetItems(resItem.data.data);
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
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    invoice = _useState0[0],
    setInvoice = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    invoice2 = _useState10[0],
    setInvoice2 = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    purchase = _useState12[0],
    setPurchase = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    maintenance = _useState14[0],
    setMaintenance = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    customerName1 = _useState16[0],
    setCustomerName1 = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    estimateNumber = _useState18[0],
    setEstimateNumber1 = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    items = _useState20[0],
    setItems = _useState20[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var _invoiceResponse$data, _purchaseResponse$dat, _maintenanceResponse$;
          // All 3 requests now run IN PARALLEL (invoice, purchase, and this specific estimation)
          var _yield$Promise$all3 = yield Promise.all([(0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/invoice?summary=true")), (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/purchase")), (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/maintenance")), axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/get-estimation/").concat(id)) // always fresh — no cache for specific record
            ]),
            _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 4),
            invoiceResponse = _yield$Promise$all4[0],
            purchaseResponse = _yield$Promise$all4[1],
            maintenanceResponse = _yield$Promise$all4[2],
            resEst = _yield$Promise$all4[3];
          // Store all invoices in ref so the next useEffect can reuse them without fetching again
          allInvoicesRef.current = ((_invoiceResponse$data = invoiceResponse.data) === null || _invoiceResponse$data === void 0 ? void 0 : _invoiceResponse$data.data) || [];
          setCustomerName1(resEst.data.data.customerName.customerName.replace(/\s+/g, '_').replace(/\./g, ''));
          setEstimateNumber1(resEst.data.data.estimateNumber);
          setItems(resEst.data.data.items);
          var estRef = resEst.data.data.ReferenceName;
          var validEstRef = estRef && typeof estRef === 'string' && estRef.trim() !== '';
          setInvoice(allInvoicesRef.current.filter(row => row.ReferenceName === id || validEstRef && row.ReferenceName === estRef));
          setPurchase((_purchaseResponse$dat = purchaseResponse.data) === null || _purchaseResponse$dat === void 0 || (_purchaseResponse$dat = _purchaseResponse$dat.data) === null || _purchaseResponse$dat === void 0 ? void 0 : _purchaseResponse$dat.filter(row => row.ReferenceName === id || validEstRef && row.ReferenceName === estRef));
          setMaintenance((_maintenanceResponse$ = maintenanceResponse.data) === null || _maintenanceResponse$ === void 0 || (_maintenanceResponse$ = _maintenanceResponse$.data) === null || _maintenanceResponse$ === void 0 ? void 0 : _maintenanceResponse$.filter(row => row.ReferenceName === id || validEstRef && row._id === estRef));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchData() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchData();
  }, [id]);
  var showDiscount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return items.some(item => item.itemDiscount > 0);
  }, [items]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Reuse already-fetched invoice data from allInvoicesRef — NO second API call needed
    if (purchase.length > 0 && allInvoicesRef.current.length > 0) {
      var filteredInvoice = allInvoicesRef.current.filter(row => purchase.find(Item => row._id === Item.ReferenceName2));
      setInvoice2(filteredInvoice);
    }
  }, [purchase]);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    anchorEl = _React$useState2[0],
    setAnchorEl = _React$useState2[1];
  var open = Boolean(anchorEl);
  var handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  var handleCloseMenu = () => {
    setAnchorEl(null);
  };
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_43__.useReactToPrint)({
    content: () => componentRef.current,
    documentTitle: 'Q-00' + estimateNumber + ' For ' + customerName1,
    onBeforeGetContent: () => {
      var PAGE_HEIGHT = 1045;
      var printElement = componentRef.current;
      if (printElement) {
        printElement.classList.add("temp-class-for-height");
        var height = printElement.clientHeight;
        var numberOfPage = Math.ceil(height / PAGE_HEIGHT);
        if (numberOfPage > 1) {
          var _printElement$getElem, _printElement$getElem2;
          var heightWithSingleHeader = numberOfPage * PAGE_HEIGHT;
          var requiredHeight = heightWithSingleHeader;
          var headerHeight = (_printElement$getElem = printElement.getElementsByTagName("thead")) === null || _printElement$getElem === void 0 || (_printElement$getElem = _printElement$getElem[0]) === null || _printElement$getElem === void 0 ? void 0 : _printElement$getElem.clientHeight;
          var footerHeight = (_printElement$getElem2 = printElement.getElementsByTagName("tfoot")) === null || _printElement$getElem2 === void 0 || (_printElement$getElem2 = _printElement$getElem2[0]) === null || _printElement$getElem2 === void 0 ? void 0 : _printElement$getElem2.clientHeight;
          requiredHeight -= (numberOfPage - 1) * (headerHeight + footerHeight);
          printElement.style.height = "".concat(requiredHeight, "px");
        }
        printElement.classList.remove("temp-class-for-height");
      }
    },
    onAfterPrint: () => {
      var printElement = componentRef.current;
      if (printElement) {
        printElement.style.height = "auto";
      }
    }
  });
  var handleOpenPrint = () => {
    handlePrint();
    setAnchorEl(null);
  };
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState22 = _slicedToArray(_useState21, 2),
    show1 = _useState22[0],
    setShow1 = _useState22[1];
  var handleShow1 = e => {
    setShow1(e);
    setAnchorEl(null);
  };
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    reason = _useState24[0],
    setReason = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    Comments1 = _useState26[0],
    setComments = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    notification = _useState28[0],
    setNotification = _useState28[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchComment = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var _resComment$data, _resNotification$data;
          // Fetch comment and notification IN PARALLEL instead of sequentially
          var _yield$Promise$all5 = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/comment")), axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/notification"))]),
            _yield$Promise$all6 = _slicedToArray(_yield$Promise$all5, 2),
            resComment = _yield$Promise$all6[0],
            resNotification = _yield$Promise$all6[1];
          setComments((_resComment$data = resComment.data) === null || _resComment$data === void 0 || (_resComment$data = _resComment$data.data) === null || _resComment$data === void 0 ? void 0 : _resComment$data.filter(row => row.CommentInfo.idInfo === id).reverse());
          setNotification((_resNotification$data = resNotification.data) === null || _resNotification$data === void 0 || (_resNotification$data = _resNotification$data.data) === null || _resNotification$data === void 0 ? void 0 : _resNotification$data.filter(row => row.idInfo === id));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchComment() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchComment();
  }, [id]);
  var CommentInfo = {
    idInfo: id,
    person: user.data.userName,
    reason
  };
  {/** Loading Start */}
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    loading = _useState30[0],
    setLoading = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    loadingOpenModal = _useState32[0],
    setLoadingOpenModal = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    ErrorOpenModal = _useState34[0],
    setErrorOpenModal = _useState34[1];
  var handleOpen = () => {
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
  var handleClose = () => {
    setLoadingOpenModal(false);
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  {/** Loading End */}
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_42___default()(Date.now());
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo,
        dateComment
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/create-comment/"), data);
        if (res) {
          setReason("");
          handleOpen();
          var newData = res.data.data;
          setComments([newData, ...Comments1]);
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmitEdit(_x) {
      return _ref12.apply(this, arguments);
    };
  }();
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.logOut)());
    navigate('/');
  };
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState36 = _slicedToArray(_useState35, 2),
    showRef = _useState36[0],
    setShowRef = _useState36[1];
  var handleShowRef = e => {
    setShowRef(e);
    setAnchorEl(null);
  };
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var data0 = estimate.filter(row => row._id === id).map(row => ({
    number: 'Q-' + String(row.estimateNumber).padStart(6, '0'),
    invoiceDate: dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.estimateDate).format('DD/MM/YYYY'),
    customerName: row.customerName.customerName,
    Address: row.customerName.billingAddress.toUpperCase() + row.customerName.billingCity.toUpperCase(),
    status: row.status
  }));
  var data2 = estimate.filter(row => row._id === id).map(row => ({
    no: '',
    invoiceDate: "",
    invoiceSubject: row.estimateSubject,
    invoiceDefect: row.estimateDefect
  }));
  var data5 = items.map((Item, i) => {
    return {
      no: i + 1,
      item: Item.itemName.itemName,
      itemDescription: Item.itemDescription,
      itemQty: Item.itemQty,
      itemRate: '$' + Item.itemRate,
      itemDiscount: '%' + Item.itemDiscount,
      itemAmount: '$' + Item.itemAmount
    };
  });
  var data6 = estimate.filter(row => row._id === id).map((row, i) => {
    return {
      no: '',
      item: "",
      itemDescription: "",
      itemQty: "",
      itemRate: "",
      itemDiscount: "Sub Total (Tax Inclusive)",
      itemAmount: '$' + row.subTotal
    };
  });
  var data9 = estimate.filter(row => row._id === id).map((row, i) => {
    return {
      no: '',
      item: "",
      itemDescription: "",
      itemQty: "",
      itemRate: "",
      itemDiscount: "Total",
      itemAmount: '$' + row.totalInvoice
    };
  });
  var data4 = estimate.filter(row => row._id === id).map(row => ({
    noteInfo: 'Note ' + row.noteInfo
  }));
  var data11 = estimate.filter(row => row._id === id).map((row, i) => {
    return {
      no: '',
      item: "",
      itemDescription: "",
      itemQty: "",
      itemRate: "",
      itemDiscount: "Balance Due",
      itemAmount: '$' + row.balanceDue
    };
  });
  var data12 = estimate.filter(row => row._id === id).map((row, i) => {
    return {
      no: '',
      item: "",
      itemDescription: "",
      itemQty: "",
      itemRate: "",
      itemDiscount: "Total In Words",
      itemAmount: '$' + row.totalW
    };
  });
  var exportToExcel = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* () {
      var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_56___default().Workbook)();
      var workSheet = workbook.addWorksheet('Sheet1');
      var columns1 = [{
        header: "#",
        key: 'number',
        width: 20
      }, {
        header: "Date",
        key: 'invoiceDate',
        width: 20
      }, {
        header: "Customer",
        key: 'customerName',
        width: 20
      }, {
        header: "Address",
        key: 'Address',
        width: 20
      }, {
        header: "Status",
        key: 'status',
        width: 20
      }];
      var columns2 = [{
        header: "",
        key: 'no',
        width: 20
      }, {
        header: "",
        key: 'invoiceDate',
        width: 20
      }, {
        header: "Subject",
        key: 'invoiceSubject',
        width: 20
      }, {
        header: "Defect",
        key: 'invoiceDefect',
        width: 20
      }];
      var columns5 = [{
        header: "#",
        key: 'no',
        width: 20
      }, {
        header: "Item",
        key: 'item',
        width: 20
      }, {
        header: "Item Description",
        key: 'itemDescription',
        width: 20
      }, {
        header: "Qty",
        key: 'itemQty',
        width: 20
      }, {
        header: "Rate",
        key: 'itemRate',
        width: 20
      }, {
        header: "Discount",
        key: 'itemDiscount',
        width: 20
      }, {
        header: "Amount",
        key: 'itemAmount',
        width: 20
      }];
      workSheet.addRow(columns1.map(col => col.header));
      data0.forEach(item => {
        workSheet.addRow([item.number, item.invoiceDate, item.customerName, item.Address, item.status]);
      });
      workSheet.addRow([]);
      workSheet.addRow(columns2.map(col => col.header));
      data2.forEach(item => {
        workSheet.addRow([item.no, item.invoiceDate, item.invoiceSubject, item.invoiceDefect]);
      });
      workSheet.addRow([]);
      workSheet.mergeCells('A8,E8');
      data4.forEach(item => {
        workSheet.addRow([item.noteInfo]);
      });
      workSheet.addRow([]);
      workSheet.addRow(['Item']);
      workSheet.addRow(columns5.map(col => col.header));
      data5.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount]);
      });
      data6.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount]);
      });
      data9.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount]);
      });
      data11.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount]);
      });
      data12.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount]);
      });
      var buffer = yield workbook.xlsx.writeBuffer();
      var bold = new Blob([buffer], {
        type: 'application/octet-stream'
      });
      (0,file_saver__WEBPACK_IMPORTED_MODULE_57__.saveAs)(bold, "".concat('Q-' + String(estimateNumber).padStart(6, '0') + ' for ' + customerName1, ".xlsx"));
    });
    return function exportToExcel() {
      return _ref13.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_36__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_35__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_40__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Quotation Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: () => navigate('/EstimateViewAdmin')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_51__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_54__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_53__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_35__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_41__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_38__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_35__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_39__["default"], {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_47__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    spacing: 2
  }, show1 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EstimateInformation__WEBPACK_IMPORTED_MODULE_22__["default"], {
    onId: id
  })) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer2",
    id: "myModal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%'
    }
  }, estimate === null || estimate === void 0 || (_estimate$filter = estimate.filter(row => row._id === id)) === null || _estimate$filter === void 0 ? void 0 : _estimate$filter.map(row => {
    var _ref14, _data, _row$items, _data2, _data3, _row$items2, _data4;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
      style: {
        display: 'block',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      sx: {
        fontWeight: 'bold',
        fontSize: '20px'
      }
    }, row.customerName.customerName.toUpperCase(), " | ", (_ref14 = row.estimateName || row.invoiceName) === null || _ref14 === void 0 ? void 0 : _ref14.replace(/EST\s*-?/i, 'QUO-'), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: row.status === "Draft" ? "gray" : row.status === "Sent" ? "blue" : row.status === "Decline" ? "red" : row.status === "Approved" ? "#339ba5" : row.status === "Invoiced" ? "#6a1b9a" : "black"
    }, row.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      "aria-controls": open ? 'demo-customized-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open ? 'true' : undefined,
      variant: "contained",
      disableElevation: true,
      onClick: handleClick,
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_52__["default"], null),
      sx: {
        bgcolor: 'gray',
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray'
        }
      }
    }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      id: "demo-customized-menu",
      MenuListProps: {
        'aria-labelledby': 'demo-customized-button'
      },
      anchorEl: anchorEl,
      open: open,
      onClose: handleCloseMenu,
      TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_14__["default"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      disabled: row.status !== 'Draft' && estimationInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.NavLink, {
      to: "/EstimateInvoiceFormUpdate/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_20__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.NavLink, {
      to: "/EstimateFormClone/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_55__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, "Clone"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onClick: handleOpenPrint,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_21__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Print")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onClick: exportToExcel,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_58__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Export to Excel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onClick: () => handleShow1(2)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "Comments"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onClick: () => handleShow1(3)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "History")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, row.ReferenceName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        color: 'gray'
      },
      onClick: () => handleShowRef(2)
    }, "Reference") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      onClick: handleCloseMenu,
      style: {
        color: 'gray'
      }
    }, "No Related Reference")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, row.status !== 'Converted' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.NavLink, {
      to: "/EstimateViewConvertToInvoice/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Convert To Invoice")), row.status === 'Converted' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.NavLink, {
      to: "/EstimateViewConvertToInvoice/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Convert To Invoice (Again)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, row.status !== 'Converted' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.NavLink, {
      to: "/MakePurchaseConvertToProject/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Convert to Project")), row.status === 'Converted' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.NavLink, {
      to: "/MakePurchaseConvertToProject/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Convert to Project (Again)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, row.status !== 'Converted' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.NavLink, {
      to: "/EstimateConvertToMaintenance/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Convert To Maintenance")), row.status === 'Converted' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.NavLink, {
      to: "/EstimateConvertToMaintenance/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Convert To Maintenance (Again)")))))), showRef === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, purchase ? purchase.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: row._id
    }, " | ", row.purchaseName, ", ", row.projectName.projectName)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, invoice2 ? invoice2.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: row._id
    }, " | ", row.invoiceName)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, invoice ? invoice.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: row._id
    }, " | ", row.invoiceName)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, maintenance ? maintenance.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: row._id
    }, " | M-", String(row.serviceNumber).padStart(6, '0'))) : null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      style: {
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center'
      }
    }, showRef === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '80%',
        marginBottom: '5px'
      }
    }, invoice && invoice.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, invoice.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Invoice # ", row.invoiceName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Amount  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), " ", row.totalInvoice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Paid  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), " ", row.total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Balance  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), " ", row.balanceDue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.NavLink, {
      to: "/InvoiceViewAdminAll/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: '12px'
      }
    }, "View"))))))))), invoice2 && invoice2.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, invoice2.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Invoice # ", row.invoiceName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Amount  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), " ", row.totalInvoice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Paid  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), " ", row.total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Balance  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), " ", row.balanceDue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.NavLink, {
      to: "/InvoiceViewAdminAll/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: '12px'
      }
    }, "View"))))))))), purchase && purchase.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, purchase.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.purchaseDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Purchase # ", row.purchaseName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Purchase Cost  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), " ", row.purchaseAmount1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.NavLink, {
      to: "/PurchasesViewAdminAll/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: '12px'
      }
    }, "View"))))))))), maintenance && maintenance.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, maintenance.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.serviceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Maintenance # M-", String(row.serviceNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Amount  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), " ", row.totalInvoice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.NavLink, {
      to: "/MaintenanceViewInformation/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: '12px'
      }
    }, "View")))))))))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "Close",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => handleShowRef(1),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        height: '500px',
        overflow: 'hidden',
        overflowY: 'scroll',
        width: '100%',
        background: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      hidden: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      ref: componentRef,
      className: "invoicedetails"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "invoiceTest"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data = data) === null || _data === void 0 ? void 0 : _data.branchId : ""
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "invoicehr"
    }, "QUOTATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "content",
      style: {
        marginBottom: '20px',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        padding: '0px',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("address", {
      style: {
        marginLeft: config['--client-block-left-offset'] || '0px',
        position: 'relative',
        lineHeight: 1.35,
        width: 'fit-content',
        minWidth: '200px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: '10px'
      }
    }, "Quotation For"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '15px'
      }
    }, row.customerName.customerName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: '10px'
      }
    }, row.customerName.billingAddress.toUpperCase(), ",", row.customerName.billingCity.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginLeft: 'auto',
        marginRight: config['--metadata-block-right-offset'] || '0px',
        width: 'fit-content',
        display: 'block',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: '24px',
        rowGap: '6px',
        fontSize: '80%',
        alignContent: 'start',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Quotation #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, "Q-", String(row.estimateNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.estimateDate).format('DD/MM/YYYY')), row.estimateSubject !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Subject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        textAlign: 'left',
        wordBreak: 'break-word',
        maxWidth: '400px'
      }
    }, row.estimateSubject.toUpperCase())), row.estimateDefect !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Defect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        textAlign: 'left',
        wordBreak: 'break-word',
        maxWidth: '400px'
      }
    }, row.estimateDefect.toUpperCase()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      style: {}
    }, row.noteInfo !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      style: {
        position: 'relative',
        fontSize: '70%',
        float: 'left',
        left: '0',
        width: '50%',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, row.noteInfo !== undefined ? row.noteInfo : '')))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "secondTable",
      style: {
        width: '100%',
        clear: 'both',
        fontSize: '80%',
        marginBottom: '5px',
        border: '1px solid #DDD',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Rate"), showDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Total"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, (_row$items = row.items) === null || _row$items === void 0 ? void 0 : _row$items.map((Item, i) => {
      var relatedUnit = item.find(Item1 => Item1._id === Item.itemName._id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        key: Item.idRow
      }, Item.itemDescription !== 'Labor Fees' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        },
        colSpan: 6
      }, Item.newDescription)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'center',
          width: '30px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          width: '200px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        hidden: Item.itemName ? Item.itemName.itemName === 'empty' : ''
      }, Item.itemName.itemName.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '250px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemDescription.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '30px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '80px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemRate)), showDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'right',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        "data-prefix": true
      }, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemDiscount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'center',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        },
        colSpan: showDiscount ? 5 : 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemAmount))));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      style: {
        width: '100%',
        clear: 'both',
        fontSize: '80%',
        pageBreakInside: 'avoid'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }, row.note), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Sub Total", row.CheckTvA ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "(Tax Inclusive)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.subTotal))), row.shipping ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Shipping")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.shipping.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.adjustmentNumber ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.adjustment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.adjustmentNumber.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.CheckTvA ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "TVA @ 16%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.tax ? row.tax.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0.00'))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.totalInvoice ? row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''))), row.total ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Amount Paid")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD',
        color: '#093170',
        fontWeight: 'bold'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Balance Due")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD',
        color: '#093170',
        fontWeight: 'bold'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.balanceDue !== undefined ? row.balanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'center'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total In Words")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '150px'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.totalW))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("address", {
      style: {
        float: 'left',
        fontSize: '70%',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        lineHeight: '14px',
        fontWeight: 'bold'
      }
    }, "Bank: SOFIBANQUE SA ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Entitled: GLOBAL GATE SARL", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Bank Account: 00023233330214247020073", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Code Swift: SFBXCDKIXXX"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontWeight: 'bold'
      }
    }, "Terms & Conditions "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, row.terms.toUpperCase())))))))), row.includeLetter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
      style: {
        pageBreakBefore: 'always'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        padding: '5px 40px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        borderBottom: '2px solid #30368a',
        paddingBottom: '15px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.branchId : ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        textAlign: 'right',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontSize: '110%',
        margin: 0
      }
    }, "Kolwezi, le ", dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.estimateDate).format('DD MMMM YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontSize: '110%',
        fontWeight: 'bold',
        margin: '0 0 2px'
      }
    }, "To: ", row.customerName.customerName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontSize: '110%',
        margin: 0
      }
    }, row.customerName.billingAddress.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontSize: '110%',
        margin: 0
      }
    }, row.customerName.billingCity.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontSize: '115%',
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#30368a',
        margin: 0
      }
    }, "Subject: Quotation Q-", String(row.estimateNumber).padStart(6, '0'), " - ", row.estimateSubject.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        whiteSpace: 'pre-wrap',
        lineHeight: '1.4',
        fontSize: '110%',
        color: '#333',
        textAlign: 'justify',
        fontFamily: 'serif'
      }
    }, row.attachedLetter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginTop: 'auto',
        paddingTop: '5px',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontWeight: 'bold',
        fontSize: '110%'
      }
    }, "The Management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        color: '#30368a',
        fontWeight: 'bold'
      }
    }, "GLOBAL GATE SARL")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        position: 'relative',
        marginTop: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      style: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_28__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "contact@globalgate.sarl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_29__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "+243 827 722 222")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_30__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "www.GlobalGate.sarl"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "invoicedetails"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
      className: "invoiceTest"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.branchId : ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "invoicehr"
    }, "QUOTATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        padding: '0px',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("address", {
      style: {
        marginLeft: config['--client-block-left-offset'] || '0px',
        lineHeight: 1.35,
        width: 'fit-content',
        minWidth: '200px',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Bill To", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, row.customerName.customerName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), row.customerName.billingAddress.toUpperCase(), ",", row.customerName.billingCity.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginLeft: 'auto',
        marginRight: config['--metadata-block-right-offset'] || '0px',
        width: 'fit-content',
        display: 'block',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: '24px',
        rowGap: '6px',
        fontSize: '70%',
        alignContent: 'start',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Quotation #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, "Q-", String(row.estimateNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.estimateDate).format('DD/MM/YYYY')), row.estimateSubject !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Subject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        textAlign: 'left',
        wordBreak: 'break-word',
        maxWidth: '400px'
      }
    }, row.estimateSubject.toUpperCase())), row.estimateDefect !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Defect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        textAlign: 'left',
        wordBreak: 'break-word',
        maxWidth: '400px'
      }
    }, row.estimateDefect.toUpperCase()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, row.noteInfo !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      style: {
        position: 'relative',
        fontSize: '70%',
        float: 'left',
        left: '0',
        width: '50%',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'left',
        width: '30px'
      }
    }, "Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left'
      }
    }, row.noteInfo)))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '70%',
        marginBottom: '5px',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Rate"), showDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Total"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, (_row$items2 = row.items) === null || _row$items2 === void 0 ? void 0 : _row$items2.map((Item, i) => {
      var relatedUnit = item.find(Item1 => Item1._id === Item.itemName._id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        key: Item.idRow
      }, Item.itemDescription !== 'Labor Fees' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        },
        colSpan: 6
      }, Item.newDescription)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'center',
          width: '30px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          width: '200px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        hidden: Item.itemName ? Item.itemName.itemName === 'empty' : ''
      }, Item.itemName.itemName.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '250px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemDescription.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '30px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '80px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemRate)), showDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'right',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        "data-prefix": true
      }, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemDiscount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'center',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        },
        colSpan: showDiscount ? 5 : 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemAmount))));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      style: {
        fontSize: '70%',
        pageBreakInside: 'avoid',
        pageBreakInside: 'avoid'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }, row.note), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Sub Total", row.CheckTvA ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "(Tax Inclusive)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.subTotal))), row.shipping ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Shipping")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.shipping.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.adjustmentNumber ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.adjustment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.adjustmentNumber.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.CheckTvA ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "TVA @ 16%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.tax ? row.tax.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0.00'))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.totalInvoice ? row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''))), row.total ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Amount Paid")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD',
        color: '#093170',
        fontWeight: 'bold'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Balance Due")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'right',
        borderBottom: '1px solid #DDD',
        color: '#093170',
        fontWeight: 'bold'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.balanceDue !== undefined ? row.balanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'center'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total In Words")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '150px'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.totalW))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      style: {
        position: 'relative',
        marginTop: '-50px',
        fontSize: '80%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Bank"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "SOFIBANQUE SA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Entitled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "GLOBAL GATE SARL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        width: '100px',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Bank Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "00023233330214247020073")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Code Swift"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "SFBXCDKIXXX")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      style: {
        fontSize: '80%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Terms & Conditions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, row.terms.toUpperCase())))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "footerinvoice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_28__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "contact@globalgate.sarl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_29__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "+243 827722222")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_30__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "www.GlobalGate.sarl"))), row.includeLetter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginTop: '50px',
        borderTop: '1px dashed #ccc',
        paddingTop: '50px',
        backgroundColor: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        padding: '20px',
        border: '1px solid #eee',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        borderBottom: '2px solid #30368a',
        paddingBottom: '10px',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data4 = data) === null || _data4 === void 0 ? void 0 : _data4.branchId : ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        textAlign: 'right',
        marginBottom: '30px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Kolwezi, le ", dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.estimateDate).format('DD MMMM YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginBottom: '30px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontWeight: 'bold'
      }
    }, "To: ", row.customerName.customerName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, row.customerName.billingAddress.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, row.customerName.billingCity.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginBottom: '30px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#30368a'
      }
    }, "Subject: Quotation Q-", String(row.estimateNumber).padStart(6, '0'), " - ", row.estimateSubject.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        whiteSpace: 'pre-wrap',
        lineHeight: '1.6',
        color: '#333',
        textAlign: 'justify'
      }
    }, row.attachedLetter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginTop: '40px',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontWeight: 'bold'
      }
    }, "The Management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        color: '#30368a',
        fontWeight: 'bold'
      }
    }, "GLOBAL GATE SARL")))))));
  })))), show1 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "COMMENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    required: true,
    id: "comments",
    name: "comments",
    multiline: true,
    rows: 4,
    value: reason,
    onChange: e => setReason(e.target.value.toUpperCase()),
    label: "Comments",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    style: {
      width: '100%'
    },
    className: "btnCustomer6"
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '355px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, Comments1.map(Item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: Item._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '100%',
      borderBottom: '1px solid black'
    }
  }, Item.dateComment ? dayjs__WEBPACK_IMPORTED_MODULE_42___default()(Item.dateComment).format('DD/MM') : '', " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "", show1 === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "HISTORY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '518px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, notification.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.person + ' on ' + dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.dateNotification).format('DD/MMMM'), ": ", row.reason))))))) : "")), " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_17__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_47__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_48__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_17__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_47__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_49__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EstimateViewAdminAll);

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/js/AdminView1/PageView/InvoiceView/AdminView.css"
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/js/AdminView1/PageView/InvoiceView/AdminView.css ***!
  \*******************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* heading */
.invoiceTest {
  margin: 0 0 3em;
  height: 75px;
}

h1 {
  font: bold 100% sans-serif;
  letter-spacing: 0.5em;
  text-align: center;
  text-transform: uppercase;
}

.invoiceTest address {
  float: right;
  font-size: 75%;
  font-style: normal;
  line-height: 1.25;
  margin: 0 0 1em 1em;
}

address {
  float: right;
  font-size: 75%;
  font-style: normal;
  margin: 0 0 1em 1em;
}

.invoiceTest h1 {
  background-color: black;
  border-color: #999;
  border-bottom-style: solid;
  border-bottom-width: 10%;
  font: bold 100% sans-serif;
  letter-spacing: 0.5em;
  text-align: center;
  text-transform: uppercase;
}

.invoiceTest address p {
  margin: 0 0 0.25em;
}

.invoiceTest span, .invoiceTest img {
  display: block;
  float: left;
}

.invoiceTest span {
  margin: 0 1em 1em 0;
  max-height: 25%;
  max-width: 90%;
  position: absolute;
}

.invoiceTest img {
  max-height: 80px;
  max-width: var(--header-logo-width, 240px);
  object-fit: contain;
  margin-top: 10px;
}

.invoiceTest:after {
  clear: both;
  content: "";
  display: table;
}

/* article */
article, article address, table {
  margin: 0 0 3em;
}

article h1 {
  clip: rect(0 0 0 0);
  position: absolute;
}

article address {
  float: left;
  font-size: 90%;
  float: left;
  line-height: 10px;
}

article:after {
  clear: both;
  content: "";
  display: table;
}

/* table */
table {
  table-layout: auto;
  width: 100%;
}

table {
  border-collapse: collapse;
}

/* table firstTable */
table.firstTable {
  float: right;
  width: 50%;
  height: 50%;
}

table.firstTable:after {
  clear: both;
  content: "";
  display: table;
}

/* table firstTable */
table.firstTable th {
  width: 40%;
}

table.firstTable td {
  width: 60%;
}

aside h1#notes {
  border: none;
  border-width: 0 0 1px;
  margin: 0 0 1em;
}

aside h1#notes {
  border-color: #999;
  border-bottom-style: solid;
  border-bottom-width: 10%;
  font: bold 100% sans-serif;
  letter-spacing: 0.5em;
  text-align: center;
  text-transform: uppercase;
}`, "",{"version":3,"sources":["webpack://./src/js/AdminView1/PageView/InvoiceView/AdminView.css"],"names":[],"mappings":"AACA,YAAA;AAEA;EACI,eAAA;EACA,YAAA;AADJ;;AAIG;EACC,0BAAA;EACA,qBAAA;EACA,kBAAA;EACA,yBAAA;AADJ;;AAIE;EACE,YAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;AADJ;;AAGE;EACE,YAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;AAAJ;;AAEE;EACI,uBAAA;EACA,kBAAA;EAAoB,0BAAA;EAA4B,wBAAA;EAA0B,0BAAA;EAC1E,qBAAA;EACA,kBAAA;EACA,yBAAA;AAIN;;AADE;EACE,kBAAA;AAIJ;;AADE;EAAsC,cAAA;EAAgB,WAAA;AAMxD;;AALE;EAAqB,mBAAA;EAAqB,eAAA;EAAiB,cAAA;EAAgB,kBAAA;AAY7E;;AAXE;EAAmB,gBAAA;EAAkB,0CAAA;EAA4C,mBAAA;EAAqB,gBAAA;AAkBxG;;AAfE;EAAqB,WAAA;EAAa,WAAA;EAAa,cAAA;AAqBjD;;AAnBE,YAAA;AACA;EAAkC,eAAA;AAuBpC;;AAtBE;EAAa,mBAAA;EAAqB,kBAAA;AA2BpC;;AA1BE;EAAkB,WAAA;EAAa,cAAA;EAAgB,WAAA;EAAa,iBAAA;AAiC9D;;AA/BE;EAAgB,WAAA;EAAa,WAAA;EAAa,cAAA;AAqC5C;;AAnCE,UAAA;AAEA;EAAQ,kBAAA;EAAoB,WAAA;AAuC9B;;AAtCE;EAAQ,yBAAA;AA0CV;;AAzCE,qBAAA;AAEA;EAAmB,YAAA;EAAc,UAAA;EAAY,WAAA;AA8C/C;;AA7CE;EAAyB,WAAA;EAAa,WAAA;EAAa,cAAA;AAmDrD;;AAjDE,qBAAA;AAEA;EAAsB,UAAA;AAoDxB;;AAnDE;EAAsB,UAAA;AAuDxB;;AArDE;EAAiB,YAAA;EAAc,qBAAA;EAAuB,eAAA;AA2DxD;;AA1DE;EAAiB,kBAAA;EAAoB,0BAAA;EAA4B,wBAAA;EAA0B,0BAAA;EACzF,qBAAA;EACA,kBAAA;EACA,yBAAA;AAiEJ","sourcesContent":["\r\n/* heading */\r\n\r\n.invoiceTest {\r\n    margin: 0 0 3em;\r\n    height: 75px;\r\n  }\r\n  \r\n   h1 {\r\n    font: bold 100% sans-serif;\r\n    letter-spacing: 0.5em;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .invoiceTest address {\r\n    float: right;\r\n    font-size: 75%;\r\n    font-style: normal;\r\n    line-height: 1.25;\r\n    margin: 0 0 1em 1em;\r\n  }\r\n  address {\r\n    float: right;\r\n    font-size: 75%;\r\n    font-style: normal;\r\n    margin: 0 0 1em 1em;\r\n  }\r\n  .invoiceTest h1 {\r\n      background-color: black;\r\n      border-color: #999; border-bottom-style: solid; border-bottom-width: 10%; font: bold 100% sans-serif;\r\n      letter-spacing: 0.5em;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n    }\r\n  \r\n  .invoiceTest address p {\r\n    margin: 0 0 0.25em;\r\n  }\r\n  \r\n  .invoiceTest span, .invoiceTest img { display: block; float: left; }\r\n  .invoiceTest span {  margin: 0 1em 1em 0; max-height: 25%; max-width: 90%; position: absolute; }\r\n  .invoiceTest img { max-height: 80px; max-width: var(--header-logo-width, 240px); object-fit: contain; margin-top: 10px;}\r\n\r\n  \r\n  .invoiceTest:after { clear: both; content: \"\"; display: table; }\r\n  \r\n  /* article */\r\n  article, article address, table { margin: 0 0 3em; }\r\n  article h1 { clip: rect(0 0 0 0); position: absolute; }\r\n  article address { float: left; font-size: 90%; float: left; line-height: 10px; }\r\n  \r\n  article:after { clear: both; content: \"\"; display: table; }\r\n  \r\n  /* table */\r\n  \r\n  table { table-layout: auto; width: 100%; }\r\n  table { border-collapse: collapse;}\r\n  /* table firstTable */\r\n  \r\n  table.firstTable { float: right; width: 50%; height: 50%;}\r\n  table.firstTable:after { clear: both; content: \"\"; display: table; }\r\n  \r\n  /* table firstTable */\r\n  \r\n  table.firstTable th { width: 40%; }\r\n  table.firstTable td { width: 60%; }\r\n\r\n  aside h1#notes { border: none; border-width: 0 0 1px; margin: 0 0 1em; }\r\n  aside h1#notes { border-color: #999; border-bottom-style: solid; border-bottom-width: 10%; font: bold 100% sans-serif;\r\n    letter-spacing: 0.5em;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./src/js/AdminView1/PageView/InvoiceView/AdminView.css"
/*!**************************************************************!*\
  !*** ./src/js/AdminView1/PageView/InvoiceView/AdminView.css ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./AdminView.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/js/AdminView1/PageView/InvoiceView/AdminView.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRXN0aW1hdGVWaWV3X0VzdGltYXRlVmlld0FkbWluQWxsX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyxnQjs7Ozs7Ozs7OztBQ1pZO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyx3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ1pEOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLGNBQWMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05mLENBQW1FO0FBQ047QUFDSjtBQUNBO0FBQ2pDO0FBQ2E7QUFDWDtBQUMwQjtBQUNzQjtBQUNSO0FBQ21TO0FBQ3JUO0FBQ1E7QUFDWTtBQUNSO0FBQ1o7QUFDUTtBQUNXO0FBQ3pDO0FBQzBCO0FBQ0Y7QUFDTTtBQUNOO0FBQ0E7QUFDSjtBQUNIO0FBQ3FCO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNRO0FBQ1Y7QUFDVTtBQUNjO0FBQ0k7QUFDeEM7QUFDcUM7QUFDUjtBQUMrQjtBQUN0QztBQUNEO0FBQ2U7QUFDVjtBQUNOO0FBQ1E7QUFDZ0I7QUFDaEI7QUFDUTtBQUNmO0FBRWxCO0FBQ087QUFDVztBQUUvQyxJQUFNOEYsV0FBVyxHQUFHeEUsMERBQU0sQ0FBQ3lFLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUMvQ25HLDBEQUFBLENBQUM0RCw4REFBTyxFQUFBeUMsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPN0MsOERBQWMsQ0FBQzhDLE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLE1BQU07TUFDdkJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzNCQyxRQUFRLEVBQUU7SUFDWjtFQUNGLENBQUM7QUFBQSxDQUFDLENBQUM7QUFDSCxJQUFNQyxZQUFZLEdBQUczRiwwREFBTSxDQUFDNEYsS0FBQTtFQUFBLElBQUdsQixTQUFTLEdBQUFrQixLQUFBLENBQVRsQixTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQWdCLEtBQUEsRUFBQUMsVUFBQTtFQUFBLG9CQUNoRG5ILDBEQUFBLENBQUM0RCw4REFBTyxFQUFBeUMsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNvQixLQUFBO0VBQUEsSUFBR1gsS0FBSyxHQUFBVyxLQUFBLENBQUxYLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBTzdDLDhEQUFjLENBQUM4QyxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxPQUFPO01BQ3hCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQztNQUMzQkMsUUFBUSxFQUFFO0lBQ1o7RUFDRixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBQ0gsSUFBTUssV0FBVyxHQUFHL0YsMERBQU0sQ0FBQ2dHLEtBQUE7RUFBQSxJQUFHdEIsU0FBUyxHQUFBc0IsS0FBQSxDQUFUdEIsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFvQixLQUFBLEVBQUFDLFVBQUE7RUFBQSxvQkFDL0N2SCwwREFBQSxDQUFDNEQsOERBQU8sRUFBQXlDLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDd0IsS0FBQTtFQUFBLElBQUdmLEtBQUssR0FBQWUsS0FBQSxDQUFMZixLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU83Qyw4REFBYyxDQUFDOEMsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsU0FBUztNQUMxQkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDM0JDLFFBQVEsRUFBRTtJQUNaO0VBQ0YsQ0FBQztBQUFBLENBQUMsQ0FBQztBQUFFLElBQU1TLEtBQUssR0FBRztFQUNqQkMsUUFBUSxFQUFFLFVBQVU7RUFDcEJDLEdBQUcsRUFBRSxLQUFLO0VBQ1ZDLElBQUksRUFBRSxLQUFLO0VBQ1hDLFNBQVMsRUFBRSx1QkFBdUI7RUFDbENDLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLE9BQU8sRUFBRSxrQkFBa0I7RUFDM0JqQixTQUFTLEVBQUUsRUFBRTtFQUNia0IsRUFBRSxFQUFFLENBQUM7RUFDTEMsRUFBRSxFQUFFLENBQUM7RUFDTEMsRUFBRSxFQUFFO0FBQ04sQ0FBQztBQUNELElBQU1DLFdBQVcsR0FBRyxHQUFHO0FBQ3ZCLElBQU1DLE1BQU0sR0FBRzlHLDBEQUFNLENBQUN3Qyw2REFBUyxFQUFFO0VBQy9CdUUsaUJBQWlCLEVBQUdDLElBQUksSUFBS0EsSUFBSSxLQUFLO0FBQ3hDLENBQUMsQ0FBQyxDQUFDQyxLQUFBO0VBQUEsSUFBRzlCLEtBQUssR0FBQThCLEtBQUEsQ0FBTDlCLEtBQUs7SUFBRStCLElBQUksR0FBQUQsS0FBQSxDQUFKQyxJQUFJO0VBQUEsT0FBQUMsYUFBQTtJQUNmQyxNQUFNLEVBQUVqQyxLQUFLLENBQUNpQyxNQUFNLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQy9CQyxVQUFVLEVBQUVuQyxLQUFLLENBQUNvQyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRTtNQUN4REMsTUFBTSxFQUFFdEMsS0FBSyxDQUFDb0MsV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7TUFDdENDLFFBQVEsRUFBRXhDLEtBQUssQ0FBQ29DLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDQztJQUN2QyxDQUFDO0VBQUMsR0FDRVYsSUFBSSxJQUFJO0lBQ1ZXLFVBQVUsRUFBRWhCLFdBQVc7SUFDdkJMLEtBQUssaUJBQUFwQixNQUFBLENBQWlCeUIsV0FBVyxRQUFLO0lBQ3RDUyxVQUFVLEVBQUVuQyxLQUFLLENBQUNvQyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRTtNQUN4REMsTUFBTSxFQUFFdEMsS0FBSyxDQUFDb0MsV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7TUFDdENDLFFBQVEsRUFBRXhDLEtBQUssQ0FBQ29DLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDRztJQUN2QyxDQUFDO0VBQ0gsQ0FBQztBQUFBLENBQ0QsQ0FBQztBQUNILElBQU1DLE1BQU0sR0FBRy9ILDBEQUFNLENBQUMyQyw2REFBUyxFQUFFO0VBQUVvRSxpQkFBaUIsRUFBR0MsSUFBSSxJQUFLQSxJQUFJLEtBQUs7QUFBTyxDQUFDLENBQUMsQ0FDaEZnQixLQUFBO0VBQUEsSUFBRzdDLEtBQUssR0FBQTZDLEtBQUEsQ0FBTDdDLEtBQUs7SUFBRStCLElBQUksR0FBQWMsS0FBQSxDQUFKZCxJQUFJO0VBQUEsT0FBUTtJQUNwQixvQkFBb0IsRUFBQUMsYUFBQTtNQUNsQmYsUUFBUSxFQUFFLFVBQVU7TUFDcEI2QixVQUFVLEVBQUUsUUFBUTtNQUNwQnpCLEtBQUssRUFBRUssV0FBVztNQUNsQlMsVUFBVSxFQUFFbkMsS0FBSyxDQUFDb0MsV0FBVyxDQUFDQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQzVDQyxNQUFNLEVBQUV0QyxLQUFLLENBQUNvQyxXQUFXLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztRQUN0Q0MsUUFBUSxFQUFFeEMsS0FBSyxDQUFDb0MsV0FBVyxDQUFDSSxRQUFRLENBQUNHO01BQ3ZDLENBQUMsQ0FBQztNQUNGSSxTQUFTLEVBQUU7SUFBWSxHQUNuQixDQUFDaEIsSUFBSSxJQUFJO01BQ1hpQixTQUFTLEVBQUUsUUFBUTtNQUNuQmIsVUFBVSxFQUFFbkMsS0FBSyxDQUFDb0MsV0FBVyxDQUFDQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQzVDQyxNQUFNLEVBQUV0QyxLQUFLLENBQUNvQyxXQUFXLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztRQUN0Q0MsUUFBUSxFQUFFeEMsS0FBSyxDQUFDb0MsV0FBVyxDQUFDSSxRQUFRLENBQUNDO01BQ3ZDLENBQUMsQ0FBQztNQUNGcEIsS0FBSyxFQUFFckIsS0FBSyxDQUFDaUQsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUN2QixDQUFDakQsS0FBSyxDQUFDa0QsV0FBVyxDQUFDQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUc7UUFDNUI5QixLQUFLLEVBQUVyQixLQUFLLENBQUNpRCxPQUFPLENBQUMsQ0FBQztNQUN4QjtJQUNGLENBQUM7RUFFTCxDQUFDO0FBQUEsQ0FDSCxDQUFDO0FBR0QsU0FBU0csb0JBQW9CQSxDQUFBLEVBQUc7RUFBQSxJQUFBQyxnQkFBQTtFQUM5QixJQUFBQyxnQkFBQSxHQUFtQjFKLGtFQUFlLENBQUMsQ0FBQztJQUE1QjJKLE1BQU0sR0FBQUQsZ0JBQUEsQ0FBTkMsTUFBTTtFQUNkLElBQUFDLFVBQUEsR0FBYTlHLDREQUFTLENBQUMsQ0FBQztJQUFsQitHLEVBQUUsR0FBQUQsVUFBQSxDQUFGQyxFQUFFO0VBQ1IsSUFBTUMsUUFBUSxHQUFHakgsOERBQVcsQ0FBQyxDQUFDO0VBQzlCLElBQU1rSCxRQUFRLEdBQUd4Rix5REFBVyxDQUFDLENBQUM7RUFDOUIsSUFBTXlGLElBQUksR0FBR3hGLHlEQUFXLENBQUNFLHdFQUFpQixDQUFDO0VBQzNDOUUsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBTXFLLFlBQVksR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2pELElBQU1DLFNBQVM7TUFBQSxJQUFBQyxLQUFBLEdBQUFDLGlCQUFBLENBQUcsYUFBWTtRQUM1QixJQUFJTCxZQUFZLEVBQUU7VUFDaEIsSUFBSTtZQUNGLElBQU1NLEdBQUcsU0FBU3hILDhDQUFLLENBQUN5SCxHQUFHLElBQUFuRSxNQUFBLENBQUlwRCxxREFBWSx3QkFBQW9ELE1BQUEsQ0FBcUI0RCxZQUFZLENBQUUsQ0FBQztZQUMvRSxJQUFNUSxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNDLFlBQVk7WUFDdkMsSUFBTUMsSUFBSSxHQUFHTCxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDRyxJQUFJO1lBQy9CZCxRQUFRLENBQUNwRixrRUFBTyxDQUFDO2NBQUVtRyxRQUFRLEVBQUVMLElBQUk7Y0FBRUksSUFBSSxFQUFFRDtZQUFLLENBQUMsQ0FBQyxDQUFDO1VBQ25ELENBQUMsQ0FBQyxPQUFPRyxLQUFLLEVBQUU7WUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQztVQUM5QztRQUNGLENBQUMsTUFBTTtVQUNMakIsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNmO01BQ0YsQ0FBQztNQUFBLGdCQWJLTSxTQUFTQSxDQUFBO1FBQUEsT0FBQUMsS0FBQSxDQUFBWSxLQUFBLE9BQUFDLFNBQUE7TUFBQTtJQUFBLEdBYWQ7SUFDRGQsU0FBUyxDQUFDLENBQUM7RUFDYixDQUFDLEVBQUUsQ0FBQ0wsUUFBUSxDQUFDLENBQUM7RUFFZCxJQUFBb0IsU0FBQSxHQUFzQ3RMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUF1TCxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEzQ0csV0FBVyxHQUFBRixVQUFBO0lBQUVHLGNBQWMsR0FBQUgsVUFBQTtFQUNsQ3hMLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQU00TCxXQUFXO01BQUEsSUFBQUMsS0FBQSxHQUFBbkIsaUJBQUEsQ0FBRyxhQUFZO1FBQzlCLElBQUk7VUFBQSxJQUFBb0IsU0FBQTtVQUNGLElBQU1uQixHQUFHLFNBQVN4SCw4Q0FBSyxDQUFDeUgsR0FBRyxJQUFBbkUsTUFBQSxDQUFJcEQscURBQVksaUJBQWMsQ0FBQztVQUMxRCxDQUFBeUksU0FBQSxHQUFBbkIsR0FBRyxDQUFDRyxJQUFJLGNBQUFnQixTQUFBLGdCQUFBQSxTQUFBLEdBQVJBLFNBQUEsQ0FBVWhCLElBQUksY0FBQWdCLFNBQUEsZUFBZEEsU0FBQSxDQUFnQkMsTUFBTSxDQUFFQyxHQUFHLElBQUtBLEdBQUcsQ0FBQ0MsTUFBTSxLQUFLN0IsSUFBSSxDQUFDVSxJQUFJLENBQUNiLEVBQUUsQ0FBQyxDQUN6RGlDLEdBQUcsQ0FBRUYsR0FBRyxJQUFLTCxjQUFjLENBQUNLLEdBQUcsQ0FBQ0csT0FBTyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLE9BQU9oQixLQUFLLEVBQUU7VUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQztRQUM5QztNQUNGLENBQUM7TUFBQSxnQkFSS1MsV0FBV0EsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQVIsS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQVFoQjtJQUNETSxXQUFXLENBQUMsQ0FBQztFQUNmLENBQUMsRUFBRSxDQUFDeEIsSUFBSSxDQUFDLENBQUM7RUFFVixJQUFNZ0MsZUFBZSxHQUFHVixXQUFXLENBQUNLLE1BQU0sQ0FBRUMsR0FBRyxJQUFLQSxHQUFHLENBQUNLLFVBQVUsS0FBSyxVQUFVLElBQUlMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDQyxLQUFLLEtBQUssSUFBSSxDQUFDO0VBRS9HLElBQUFDLFVBQUEsR0FBZ0N2TSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBd00sVUFBQSxHQUFBaEIsY0FBQSxDQUFBZSxVQUFBO0lBQXJDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBO0VBQzVCLElBQUFHLFVBQUEsR0FBc0MzTSwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBNE0sVUFBQSxHQUFBcEIsY0FBQSxDQUFBbUIsVUFBQTtJQUE3Q0UsV0FBVyxHQUFBRCxVQUFBO0lBQUVFLGNBQWMsR0FBQUYsVUFBQTtFQUVsQyxJQUFBRyxVQUFBLEdBQXlCL00sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWdOLFVBQUEsR0FBQXhCLGNBQUEsQ0FBQXVCLFVBQUE7SUFBOUJFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxRQUFRLEdBQUFGLFVBQUE7RUFDckI7RUFDQSxJQUFNRyxjQUFjLEdBQUdsTiw2Q0FBTSxDQUFDLEVBQUUsQ0FBQztFQUVqQyxJQUFNbU4sTUFBTSxNQUFBNUcsTUFBQSxDQUFNcEQscURBQVksZ0JBQWE7RUFDM0NyRCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNc04sU0FBUztNQUFBLElBQUFDLEtBQUEsR0FBQTdDLGlCQUFBLENBQUcsYUFBWTtRQUM1QixJQUFJO1VBQ0Y7VUFDQSxJQUFBOEMsa0JBQUEsU0FBNkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQ3ZDdEssMkRBQVMsQ0FBQ2lLLE1BQU0sQ0FBQyxFQUNqQmpLLDJEQUFTLElBQUFxRCxNQUFBLENBQUlwRCxxREFBWSxVQUFPLENBQUMsQ0FDbEMsQ0FBQztZQUFBc0ssbUJBQUEsR0FBQWxDLGNBQUEsQ0FBQStCLGtCQUFBO1lBSEs3QyxHQUFHLEdBQUFnRCxtQkFBQTtZQUFFQyxPQUFPLEdBQUFELG1CQUFBO1VBSW5CaEIsV0FBVyxDQUFDaEMsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQztVQUMxQnFDLFFBQVEsQ0FBQ1MsT0FBTyxDQUFDOUMsSUFBSSxDQUFDQSxJQUFJLENBQUM7VUFDM0JpQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxPQUFPNUIsS0FBSyxFQUFFO1VBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7VUFDNUM0QixjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3ZCO01BQ0YsQ0FBQztNQUFBLGdCQWRLTyxTQUFTQSxDQUFBO1FBQUEsT0FBQUMsS0FBQSxDQUFBbEMsS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQWNkO0lBQ0RnQyxTQUFTLENBQUMsQ0FBQztFQUNiLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixJQUFBTyxVQUFBLEdBQThCNU4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTZOLFVBQUEsR0FBQXJDLGNBQUEsQ0FBQW9DLFVBQUE7SUFBbkNFLE9BQU8sR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFDMUIsSUFBQUcsVUFBQSxHQUFnQ2hPLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFpTyxXQUFBLEdBQUF6QyxjQUFBLENBQUF3QyxVQUFBO0lBQXJDRSxRQUFRLEdBQUFELFdBQUE7SUFBRUUsV0FBVyxHQUFBRixXQUFBO0VBQzVCLElBQUFHLFdBQUEsR0FBZ0NwTywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBcU8sV0FBQSxHQUFBN0MsY0FBQSxDQUFBNEMsV0FBQTtJQUFyQ0UsUUFBUSxHQUFBRCxXQUFBO0lBQUVFLFdBQVcsR0FBQUYsV0FBQTtFQUM1QixJQUFBRyxXQUFBLEdBQXNDeE8sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXlPLFdBQUEsR0FBQWpELGNBQUEsQ0FBQWdELFdBQUE7SUFBM0NFLFdBQVcsR0FBQUQsV0FBQTtJQUFFRSxjQUFjLEdBQUFGLFdBQUE7RUFDbEMsSUFBQUcsV0FBQSxHQUEwQzVPLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE2TyxXQUFBLEdBQUFyRCxjQUFBLENBQUFvRCxXQUFBO0lBQS9DRSxhQUFhLEdBQUFELFdBQUE7SUFBRUUsZ0JBQWdCLEdBQUFGLFdBQUE7RUFDdEMsSUFBQUcsV0FBQSxHQUE2Q2hQLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFpUCxXQUFBLEdBQUF6RCxjQUFBLENBQUF3RCxXQUFBO0lBQWpERSxjQUFjLEdBQUFELFdBQUE7SUFBRUUsa0JBQWtCLEdBQUFGLFdBQUE7RUFDekMsSUFBQUcsV0FBQSxHQUEwQnBQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFxUCxXQUFBLEdBQUE3RCxjQUFBLENBQUE0RCxXQUFBO0lBQS9CRSxLQUFLLEdBQUFELFdBQUE7SUFBRUUsUUFBUSxHQUFBRixXQUFBO0VBRXRCdFAsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBTXNOLFNBQVM7TUFBQSxJQUFBbUMsTUFBQSxHQUFBL0UsaUJBQUEsQ0FBRyxhQUFZO1FBQzVCLElBQUk7VUFBQSxJQUFBZ0YscUJBQUEsRUFBQUMscUJBQUEsRUFBQUMscUJBQUE7VUFDRjtVQUNBLElBQUFDLG1CQUFBLFNBQStFcEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FDekZ0SywyREFBUyxJQUFBcUQsTUFBQSxDQUFJcEQscURBQVksMEJBQXVCLENBQUMsRUFDakRELDJEQUFTLElBQUFxRCxNQUFBLENBQUlwRCxxREFBWSxjQUFXLENBQUMsRUFDckNELDJEQUFTLElBQUFxRCxNQUFBLENBQUlwRCxxREFBWSxpQkFBYyxDQUFDLEVBQ3hDRiw4Q0FBSyxDQUFDeUgsR0FBRyxJQUFBbkUsTUFBQSxDQUFJcEQscURBQVksc0JBQUFvRCxNQUFBLENBQW1Cd0QsRUFBRSxDQUFFLENBQUMsQ0FBQztZQUFBLENBQ25ELENBQUM7WUFBQTZGLG1CQUFBLEdBQUFyRSxjQUFBLENBQUFvRSxtQkFBQTtZQUxLRSxlQUFlLEdBQUFELG1CQUFBO1lBQUVFLGdCQUFnQixHQUFBRixtQkFBQTtZQUFFRyxtQkFBbUIsR0FBQUgsbUJBQUE7WUFBRUksTUFBTSxHQUFBSixtQkFBQTtVQU1yRTtVQUNBMUMsY0FBYyxDQUFDK0MsT0FBTyxHQUFHLEVBQUFULHFCQUFBLEdBQUFLLGVBQWUsQ0FBQ2pGLElBQUksY0FBQTRFLHFCQUFBLHVCQUFwQkEscUJBQUEsQ0FBc0I1RSxJQUFJLEtBQUksRUFBRTtVQUN6RGtFLGdCQUFnQixDQUFDa0IsTUFBTSxDQUFDcEYsSUFBSSxDQUFDQSxJQUFJLENBQUNzRixZQUFZLENBQUNBLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztVQUNwR2pCLGtCQUFrQixDQUFDYyxNQUFNLENBQUNwRixJQUFJLENBQUNBLElBQUksQ0FBQ3FFLGNBQWMsQ0FBQztVQUNuREssUUFBUSxDQUFDVSxNQUFNLENBQUNwRixJQUFJLENBQUNBLElBQUksQ0FBQ3lFLEtBQUssQ0FBQztVQUNoQyxJQUFNZSxNQUFNLEdBQUdKLE1BQU0sQ0FBQ3BGLElBQUksQ0FBQ0EsSUFBSSxDQUFDeUYsYUFBYTtVQUM3QyxJQUFNQyxXQUFXLEdBQUdGLE1BQU0sSUFBSSxPQUFPQSxNQUFNLEtBQUssUUFBUSxJQUFJQSxNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRTtVQUVoRnpDLFVBQVUsQ0FBQ1osY0FBYyxDQUFDK0MsT0FBTyxDQUFDcEUsTUFBTSxDQUFFQyxHQUFHLElBQUtBLEdBQUcsQ0FBQ3VFLGFBQWEsS0FBS3RHLEVBQUUsSUFBS3VHLFdBQVcsSUFBSXhFLEdBQUcsQ0FBQ3VFLGFBQWEsS0FBS0QsTUFBTyxDQUFDLENBQUM7VUFDN0g5QixXQUFXLEVBQUFtQixxQkFBQSxHQUFDSyxnQkFBZ0IsQ0FBQ2xGLElBQUksY0FBQTZFLHFCQUFBLGdCQUFBQSxxQkFBQSxHQUFyQkEscUJBQUEsQ0FBdUI3RSxJQUFJLGNBQUE2RSxxQkFBQSx1QkFBM0JBLHFCQUFBLENBQTZCNUQsTUFBTSxDQUFFQyxHQUFHLElBQUtBLEdBQUcsQ0FBQ3VFLGFBQWEsS0FBS3RHLEVBQUUsSUFBS3VHLFdBQVcsSUFBSXhFLEdBQUcsQ0FBQ3VFLGFBQWEsS0FBS0QsTUFBTyxDQUFDLENBQUM7VUFDcEkxQixjQUFjLEVBQUFnQixxQkFBQSxHQUFDSyxtQkFBbUIsQ0FBQ25GLElBQUksY0FBQThFLHFCQUFBLGdCQUFBQSxxQkFBQSxHQUF4QkEscUJBQUEsQ0FBMEI5RSxJQUFJLGNBQUE4RSxxQkFBQSx1QkFBOUJBLHFCQUFBLENBQWdDN0QsTUFBTSxDQUFFQyxHQUFHLElBQUtBLEdBQUcsQ0FBQ3VFLGFBQWEsS0FBS3RHLEVBQUUsSUFBS3VHLFdBQVcsSUFBSXhFLEdBQUcsQ0FBQzBFLEdBQUcsS0FBS0osTUFBTyxDQUFDLENBQUM7UUFDbEksQ0FBQyxDQUFDLE9BQU9uRixLQUFLLEVBQUU7VUFDZEMsT0FBTyxDQUFDdUYsR0FBRyxDQUFDeEYsS0FBSyxDQUFDO1FBQ3BCO01BQ0YsQ0FBQztNQUFBLGdCQXZCS21DLFNBQVNBLENBQUE7UUFBQSxPQUFBbUMsTUFBQSxDQUFBcEUsS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQXVCZDtJQUNEZ0MsU0FBUyxDQUFDLENBQUM7RUFDYixDQUFDLEVBQUUsQ0FBQ3JELEVBQUUsQ0FBQyxDQUFDO0VBQ1IsSUFBTTJHLFlBQVksR0FBR3pRLDhDQUFPLENBQUMsTUFBTTtJQUNqQyxPQUFPb1AsS0FBSyxDQUFDc0IsSUFBSSxDQUFDM0QsSUFBSSxJQUFJQSxJQUFJLENBQUM0RCxZQUFZLEdBQUcsQ0FBQyxDQUFDO0VBQ2xELENBQUMsRUFBRSxDQUFDdkIsS0FBSyxDQUFDLENBQUM7RUFDWHZQLGdEQUFTLENBQUMsTUFBTTtJQUNkO0lBQ0EsSUFBSXVPLFFBQVEsQ0FBQ3dDLE1BQU0sR0FBRyxDQUFDLElBQUkzRCxjQUFjLENBQUMrQyxPQUFPLENBQUNZLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDNUQsSUFBTUMsZUFBZSxHQUFHNUQsY0FBYyxDQUFDK0MsT0FBTyxDQUFDcEUsTUFBTSxDQUFFQyxHQUFHLElBQ3hEdUMsUUFBUSxDQUFDMEMsSUFBSSxDQUFFQyxJQUFJLElBQUtsRixHQUFHLENBQUMwRSxHQUFHLEtBQUtRLElBQUksQ0FBQ0MsY0FBYyxDQUN6RCxDQUFDO01BQ0QvQyxXQUFXLENBQUM0QyxlQUFlLENBQUM7SUFDOUI7RUFDRixDQUFDLEVBQUUsQ0FBQ3pDLFFBQVEsQ0FBQyxDQUFDO0VBRWQsSUFBQTZDLGVBQUEsR0FBZ0NyUixxREFBYyxDQUFDLElBQUksQ0FBQztJQUFBc1IsZ0JBQUEsR0FBQTVGLGNBQUEsQ0FBQTJGLGVBQUE7SUFBN0NFLFFBQVEsR0FBQUQsZ0JBQUE7SUFBRUUsV0FBVyxHQUFBRixnQkFBQTtFQUM1QixJQUFNOUksSUFBSSxHQUFHaUosT0FBTyxDQUFDRixRQUFRLENBQUM7RUFDOUIsSUFBTUcsV0FBVyxHQUFJQyxLQUFLLElBQUs7SUFDN0JILFdBQVcsQ0FBQ0csS0FBSyxDQUFDQyxhQUFhLENBQUM7RUFDbEMsQ0FBQztFQUNELElBQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0lBQzVCTCxXQUFXLENBQUMsSUFBSSxDQUFDO0VBQ25CLENBQUM7RUFFRCxJQUFNTSxZQUFZLEdBQUczUiw2Q0FBTSxDQUFDLENBQUM7RUFDN0IsSUFBTTRSLFdBQVcsR0FBR3BOLGdFQUFlLENBQUM7SUFDbENxTixPQUFPLEVBQUVBLENBQUEsS0FBTUYsWUFBWSxDQUFDMUIsT0FBTztJQUNuQzZCLGFBQWEsRUFBRSxNQUFNLEdBQUc3QyxjQUFjLEdBQUcsT0FBTyxHQUFHSixhQUFhO0lBQ2hFa0Qsa0JBQWtCLEVBQUVBLENBQUEsS0FBTTtNQUN4QixJQUFNQyxXQUFXLEdBQUcsSUFBSTtNQUN4QixJQUFNQyxZQUFZLEdBQUdOLFlBQVksQ0FBQzFCLE9BQU87TUFDekMsSUFBSWdDLFlBQVksRUFBRTtRQUNoQkEsWUFBWSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztRQUNuRCxJQUFNQyxNQUFNLEdBQUdILFlBQVksQ0FBQ0ksWUFBWTtRQUN4QyxJQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsSUFBSSxDQUFDSixNQUFNLEdBQUdKLFdBQVcsQ0FBQztRQUNwRCxJQUFJTSxZQUFZLEdBQUcsQ0FBQyxFQUFFO1VBQUEsSUFBQUcscUJBQUEsRUFBQUMsc0JBQUE7VUFDcEIsSUFBTUMsc0JBQXNCLEdBQUdMLFlBQVksR0FBR04sV0FBVztVQUN6RCxJQUFJWSxjQUFjLEdBQUdELHNCQUFzQjtVQUMzQyxJQUFNRSxZQUFZLElBQUFKLHFCQUFBLEdBQUdSLFlBQVksQ0FBQ2Esb0JBQW9CLENBQUMsT0FBTyxDQUFDLGNBQUFMLHFCQUFBLGdCQUFBQSxxQkFBQSxHQUExQ0EscUJBQUEsQ0FBNkMsQ0FBQyxDQUFDLGNBQUFBLHFCQUFBLHVCQUEvQ0EscUJBQUEsQ0FBaURKLFlBQVk7VUFDbEYsSUFBTVUsWUFBWSxJQUFBTCxzQkFBQSxHQUFHVCxZQUFZLENBQUNhLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxjQUFBSixzQkFBQSxnQkFBQUEsc0JBQUEsR0FBMUNBLHNCQUFBLENBQTZDLENBQUMsQ0FBQyxjQUFBQSxzQkFBQSx1QkFBL0NBLHNCQUFBLENBQWlETCxZQUFZO1VBQ2xGTyxjQUFjLElBQUksQ0FBQ04sWUFBWSxHQUFHLENBQUMsS0FBS08sWUFBWSxHQUFHRSxZQUFZLENBQUM7VUFDcEVkLFlBQVksQ0FBQzNLLEtBQUssQ0FBQzhLLE1BQU0sTUFBQTdMLE1BQUEsQ0FBTXFNLGNBQWMsT0FBSTtRQUNuRDtRQUNBWCxZQUFZLENBQUNDLFNBQVMsQ0FBQ2MsTUFBTSxDQUFDLHVCQUF1QixDQUFDO01BQ3hEO0lBQ0YsQ0FBQztJQUNEQyxZQUFZLEVBQUVBLENBQUEsS0FBTTtNQUNsQixJQUFNaEIsWUFBWSxHQUFHTixZQUFZLENBQUMxQixPQUFPO01BQ3pDLElBQUlnQyxZQUFZLEVBQUU7UUFDaEJBLFlBQVksQ0FBQzNLLEtBQUssQ0FBQzhLLE1BQU0sU0FBUztNQUNwQztJQUNGO0VBQ0YsQ0FBQyxDQUFDO0VBQ0YsSUFBTWMsZUFBZSxHQUFHQSxDQUFBLEtBQU07SUFDNUJ0QixXQUFXLENBQUMsQ0FBQztJQUNiUCxXQUFXLENBQUMsSUFBSSxDQUFDO0VBQ25CLENBQUM7RUFDRCxJQUFBOEIsV0FBQSxHQUEwQnBULCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFxVCxXQUFBLEdBQUE3SCxjQUFBLENBQUE0SCxXQUFBO0lBQTlCRSxLQUFLLEdBQUFELFdBQUE7SUFBRUUsUUFBUSxHQUFBRixXQUFBO0VBQ3RCLElBQU1HLFdBQVcsR0FBSUMsQ0FBQyxJQUFLO0lBQ3pCRixRQUFRLENBQUNFLENBQUMsQ0FBQztJQUNYbkMsV0FBVyxDQUFDLElBQUksQ0FBQztFQUNuQixDQUFDO0VBQ0QsSUFBQW9DLFdBQUEsR0FBNEIxVCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBMlQsV0FBQSxHQUFBbkksY0FBQSxDQUFBa0ksV0FBQTtJQUFqQ0UsTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUN4QixJQUFBRyxXQUFBLEdBQWlDOVQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQStULFdBQUEsR0FBQXZJLGNBQUEsQ0FBQXNJLFdBQUE7SUFBdENFLFNBQVMsR0FBQUQsV0FBQTtJQUFFRSxXQUFXLEdBQUFGLFdBQUE7RUFDN0IsSUFBQUcsV0FBQSxHQUF3Q2xVLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFtVSxXQUFBLEdBQUEzSSxjQUFBLENBQUEwSSxXQUFBO0lBQTdDRSxZQUFZLEdBQUFELFdBQUE7SUFBRUUsZUFBZSxHQUFBRixXQUFBO0VBQ3BDcFUsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBTXVVLFlBQVk7TUFBQSxJQUFBQyxNQUFBLEdBQUE5SixpQkFBQSxDQUFHLGFBQVk7UUFDL0IsSUFBSTtVQUFBLElBQUErSixnQkFBQSxFQUFBQyxxQkFBQTtVQUNGO1VBQ0EsSUFBQUMsbUJBQUEsU0FBNENsSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUN0RHZLLDhDQUFLLENBQUN5SCxHQUFHLElBQUFuRSxNQUFBLENBQUlwRCxxREFBWSxhQUFVLENBQUMsRUFDcENGLDhDQUFLLENBQUN5SCxHQUFHLElBQUFuRSxNQUFBLENBQUlwRCxxREFBWSxrQkFBZSxDQUFDLENBQzFDLENBQUM7WUFBQXVSLG1CQUFBLEdBQUFuSixjQUFBLENBQUFrSixtQkFBQTtZQUhLRSxVQUFVLEdBQUFELG1CQUFBO1lBQUVFLGVBQWUsR0FBQUYsbUJBQUE7VUFJbENWLFdBQVcsRUFBQU8sZ0JBQUEsR0FBQ0ksVUFBVSxDQUFDL0osSUFBSSxjQUFBMkosZ0JBQUEsZ0JBQUFBLGdCQUFBLEdBQWZBLGdCQUFBLENBQWlCM0osSUFBSSxjQUFBMkosZ0JBQUEsdUJBQXJCQSxnQkFBQSxDQUF1QjFJLE1BQU0sQ0FBRUMsR0FBRyxJQUFLQSxHQUFHLENBQUMrSSxXQUFXLENBQUNDLE1BQU0sS0FBSy9LLEVBQUUsQ0FBQyxDQUFDZ0wsT0FBTyxDQUFDLENBQUMsQ0FBQztVQUM1RlgsZUFBZSxFQUFBSSxxQkFBQSxHQUFDSSxlQUFlLENBQUNoSyxJQUFJLGNBQUE0SixxQkFBQSxnQkFBQUEscUJBQUEsR0FBcEJBLHFCQUFBLENBQXNCNUosSUFBSSxjQUFBNEoscUJBQUEsdUJBQTFCQSxxQkFBQSxDQUE0QjNJLE1BQU0sQ0FBRUMsR0FBRyxJQUFLQSxHQUFHLENBQUNnSixNQUFNLEtBQUsvSyxFQUFFLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUMsT0FBT2tCLEtBQUssRUFBRTtVQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO1FBQzlDO01BQ0YsQ0FBQztNQUFBLGdCQVpLb0osWUFBWUEsQ0FBQTtRQUFBLE9BQUFDLE1BQUEsQ0FBQW5KLEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUEsR0FZakI7SUFDRGlKLFlBQVksQ0FBQyxDQUFDO0VBQ2hCLENBQUMsRUFBRSxDQUFDdEssRUFBRSxDQUFDLENBQUM7RUFFUixJQUFNOEssV0FBVyxHQUNqQjtJQUNFQyxNQUFNLEVBQUUvSyxFQUFFO0lBQ1ZpTCxNQUFNLEVBQUU5SyxJQUFJLENBQUNVLElBQUksQ0FBQ0ksUUFBUTtJQUMxQjJJO0VBQ0YsQ0FBQztFQUVELENBQUM7RUFFRCxJQUFBc0IsV0FBQSxHQUE4QmxWLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFtVixXQUFBLEdBQUEzSixjQUFBLENBQUEwSixXQUFBO0lBQXRDRSxPQUFPLEdBQUFELFdBQUE7SUFBRUUsVUFBVSxHQUFBRixXQUFBO0VBQzFCLElBQUFHLFdBQUEsR0FBZ0R0ViwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBdVYsV0FBQSxHQUFBL0osY0FBQSxDQUFBOEosV0FBQTtJQUF4REUsZ0JBQWdCLEdBQUFELFdBQUE7SUFBRUUsbUJBQW1CLEdBQUFGLFdBQUE7RUFDNUMsSUFBQUcsV0FBQSxHQUE0QzFWLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUEyVixXQUFBLEdBQUFuSyxjQUFBLENBQUFrSyxXQUFBO0lBQXBERSxjQUFjLEdBQUFELFdBQUE7SUFBRUUsaUJBQWlCLEdBQUFGLFdBQUE7RUFFeEMsSUFBTUcsVUFBVSxHQUFHQSxDQUFBLEtBQU07SUFFdkJMLG1CQUFtQixDQUFDLElBQUksQ0FBQztJQUN6QkosVUFBVSxDQUFDLElBQUksQ0FBQztJQUVoQlUsVUFBVSxDQUFDLE1BQU07TUFDZlYsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDLEVBQUUsR0FBRyxDQUFDO0VBRVQsQ0FBQztFQUNELElBQU1XLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0lBQ3hCSCxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDdkJSLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDaEJVLFVBQVUsQ0FBQyxNQUFNO01BQ2ZWLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNULENBQUM7RUFDRCxJQUFNWSxXQUFXLEdBQUdBLENBQUEsS0FBTTtJQUN4QlIsbUJBQW1CLENBQUMsS0FBSyxDQUFDO0VBQzVCLENBQUM7RUFDRCxJQUFNUyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNO0lBQzdCTCxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7RUFDMUIsQ0FBQztFQUNELENBQUM7RUFDRCxJQUFNTSxXQUFXLEdBQUc1Uiw2Q0FBSyxDQUFDNlIsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBRXJDLElBQU1DLGdCQUFnQjtJQUFBLElBQUFDLE1BQUEsR0FBQTlMLGlCQUFBLENBQUcsV0FBT2dKLENBQUMsRUFBSztNQUNwQ0EsQ0FBQyxDQUFDK0MsY0FBYyxDQUFDLENBQUM7TUFDbEIsSUFBTTNMLElBQUksR0FBRztRQUNYaUssV0FBVztRQUNYcUI7TUFDRixDQUFDO01BQ0QsSUFBSTtRQUNGLElBQU16TCxHQUFHLFNBQVN4SCw4Q0FBSyxDQUFDdVQsSUFBSSxJQUFBalEsTUFBQSxDQUFJcEQscURBQVksdUJBQW9CeUgsSUFBSSxDQUFDO1FBQ3JFLElBQUlILEdBQUcsRUFBRTtVQUNQbUosU0FBUyxDQUFDLEVBQUUsQ0FBQztVQUNiaUMsVUFBVSxDQUFDLENBQUM7VUFDWixJQUFNWSxPQUFPLEdBQUdoTSxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSTtVQUM3Qm9KLFdBQVcsQ0FBQyxDQUFDeUMsT0FBTyxFQUFFLEdBQUcxQyxTQUFTLENBQUMsQ0FBQztRQUN0QztNQUNGLENBQUMsQ0FBQyxPQUFPOUksS0FBSyxFQUFFO1FBQ2QsSUFBSUEsS0FBSyxFQUFFO1VBQ1Q4SyxXQUFXLENBQUMsQ0FBQztRQUNmO01BQ0Y7SUFDRixDQUFDO0lBQUEsZ0JBbkJLTSxnQkFBZ0JBLENBQUFLLEVBQUE7TUFBQSxPQUFBSixNQUFBLENBQUFuTCxLQUFBLE9BQUFDLFNBQUE7SUFBQTtFQUFBLEdBbUJyQjtFQUNELElBQU11TCxZQUFZLEdBQUdBLENBQUEsS0FBTTtJQUN6QnZNLFlBQVksQ0FBQ3dNLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0IzTSxRQUFRLENBQUN0RixpRUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsQnFGLFFBQVEsQ0FBQyxHQUFHLENBQUM7RUFDZixDQUFDO0VBQ0QsSUFBQTZNLFdBQUEsR0FBOEI5VywrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBK1csV0FBQSxHQUFBdkwsY0FBQSxDQUFBc0wsV0FBQTtJQUFsQ0UsT0FBTyxHQUFBRCxXQUFBO0lBQUVFLFVBQVUsR0FBQUYsV0FBQTtFQUMxQixJQUFNRyxhQUFhLEdBQUl6RCxDQUFDLElBQUs7SUFDM0J3RCxVQUFVLENBQUN4RCxDQUFDLENBQUM7SUFDYm5DLFdBQVcsQ0FBQyxJQUFJLENBQUM7RUFDbkIsQ0FBQztFQUNELElBQUE2RixnQkFBQSxHQUE4QnJYLHFEQUFjLENBQUMsSUFBSSxDQUFDO0lBQUFzWCxnQkFBQSxHQUFBNUwsY0FBQSxDQUFBMkwsZ0JBQUE7SUFBM0NFLE9BQU8sR0FBQUQsZ0JBQUE7SUFBRUUsVUFBVSxHQUFBRixnQkFBQTtFQUMxQixJQUFNRyxZQUFZLEdBQUdBLENBQUEsS0FBTTtJQUN6QkQsVUFBVSxDQUFDLENBQUNELE9BQU8sQ0FBQztFQUN0QixDQUFDO0VBQ0QsSUFBTUcsS0FBSyxHQUFHL0ssUUFBUSxDQUFDWCxNQUFNLENBQUNDLEdBQUcsSUFBSUEsR0FBRyxDQUFDMEUsR0FBRyxLQUFLekcsRUFBRSxDQUFDLENBQUNpQyxHQUFHLENBQUVGLEdBQUcsS0FBTTtJQUNqRTBMLE1BQU0sRUFBRSxJQUFJLEdBQUdDLE1BQU0sQ0FBQzNMLEdBQUcsQ0FBQ21ELGNBQWMsQ0FBQyxDQUFDeUksUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDMURDLFdBQVcsRUFBRXJULDZDQUFLLENBQUN3SCxHQUFHLENBQUM4TCxZQUFZLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN6RDNILFlBQVksRUFBRXBFLEdBQUcsQ0FBQ29FLFlBQVksQ0FBQ0EsWUFBWTtJQUMzQzRILE9BQU8sRUFBRWhNLEdBQUcsQ0FBQ29FLFlBQVksQ0FBQzZILGNBQWMsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsR0FBR2xNLEdBQUcsQ0FBQ29FLFlBQVksQ0FBQytILFdBQVcsQ0FBQ0QsV0FBVyxDQUFDLENBQUM7SUFDbkdFLE1BQU0sRUFBRXBNLEdBQUcsQ0FBQ29NO0VBQ2QsQ0FBQyxDQUFDLENBQUM7RUFDSCxJQUFNQyxLQUFLLEdBQUczTCxRQUFRLENBQUNYLE1BQU0sQ0FBQ0MsR0FBRyxJQUFJQSxHQUFHLENBQUMwRSxHQUFHLEtBQUt6RyxFQUFFLENBQUMsQ0FBQ2lDLEdBQUcsQ0FBRUYsR0FBRyxLQUFNO0lBQ2pFc00sRUFBRSxFQUFFLEVBQUU7SUFDTlQsV0FBVyxFQUFFLEVBQUU7SUFDZlUsY0FBYyxFQUFFdk0sR0FBRyxDQUFDd00sZUFBZTtJQUNuQ0MsYUFBYSxFQUFFek0sR0FBRyxDQUFDME07RUFDckIsQ0FBQyxDQUFDLENBQUM7RUFDSCxJQUFNQyxLQUFLLEdBQUdwSixLQUFLLENBQUNyRCxHQUFHLENBQUMsQ0FBQ2dGLElBQUksRUFBRTBILENBQUMsS0FBSztJQUNuQyxPQUFRO01BQ05OLEVBQUUsRUFBRU0sQ0FBQyxHQUFHLENBQUM7TUFDVDFMLElBQUksRUFBRWdFLElBQUksQ0FBQzJILFFBQVEsQ0FBQ0EsUUFBUTtNQUM1QkMsZUFBZSxFQUFFNUgsSUFBSSxDQUFDNEgsZUFBZTtNQUNyQ0MsT0FBTyxFQUFFN0gsSUFBSSxDQUFDNkgsT0FBTztNQUNyQkMsUUFBUSxFQUFFLEdBQUcsR0FBRzlILElBQUksQ0FBQzhILFFBQVE7TUFDN0JsSSxZQUFZLEVBQUUsR0FBRyxHQUFHSSxJQUFJLENBQUNKLFlBQVk7TUFDckNtSSxVQUFVLEVBQUUsR0FBRyxHQUFHL0gsSUFBSSxDQUFDK0g7SUFDekIsQ0FBQztFQUNILENBQUMsQ0FBQztFQUNGLElBQU1DLEtBQUssR0FBR3hNLFFBQVEsQ0FBQ1gsTUFBTSxDQUFDQyxHQUFHLElBQUlBLEdBQUcsQ0FBQzBFLEdBQUcsS0FBS3pHLEVBQUUsQ0FBQyxDQUFDaUMsR0FBRyxDQUFDLENBQUNGLEdBQUcsRUFBRTRNLENBQUMsS0FBSztJQUNuRSxPQUFRO01BQ05OLEVBQUUsRUFBRSxFQUFFO01BQ05wTCxJQUFJLEVBQUUsRUFBRTtNQUNSNEwsZUFBZSxFQUFFLEVBQUU7TUFDbkJDLE9BQU8sRUFBRSxFQUFFO01BQ1hDLFFBQVEsRUFBRSxFQUFFO01BQ1psSSxZQUFZLEVBQUUsMkJBQTJCO01BQ3pDbUksVUFBVSxFQUFFLEdBQUcsR0FBR2pOLEdBQUcsQ0FBQ21OO0lBQ3hCLENBQUM7RUFDSCxDQUFDLENBQUM7RUFDRixJQUFNQyxLQUFLLEdBQUcxTSxRQUFRLENBQUNYLE1BQU0sQ0FBQ0MsR0FBRyxJQUFJQSxHQUFHLENBQUMwRSxHQUFHLEtBQUt6RyxFQUFFLENBQUMsQ0FBQ2lDLEdBQUcsQ0FBQyxDQUFDRixHQUFHLEVBQUU0TSxDQUFDLEtBQUs7SUFDbkUsT0FBUTtNQUNOTixFQUFFLEVBQUUsRUFBRTtNQUNOcEwsSUFBSSxFQUFFLEVBQUU7TUFDUjRMLGVBQWUsRUFBRSxFQUFFO01BQ25CQyxPQUFPLEVBQUUsRUFBRTtNQUNYQyxRQUFRLEVBQUUsRUFBRTtNQUNabEksWUFBWSxFQUFFLE9BQU87TUFDckJtSSxVQUFVLEVBQUUsR0FBRyxHQUFHak4sR0FBRyxDQUFDcU47SUFDeEIsQ0FBQztFQUNILENBQUMsQ0FBQztFQUNGLElBQU1DLEtBQUssR0FBRzVNLFFBQVEsQ0FBQ1gsTUFBTSxDQUFDQyxHQUFHLElBQUlBLEdBQUcsQ0FBQzBFLEdBQUcsS0FBS3pHLEVBQUUsQ0FBQyxDQUFDaUMsR0FBRyxDQUFFRixHQUFHLEtBQU07SUFDakV1TixRQUFRLEVBQUUsT0FBTyxHQUFHdk4sR0FBRyxDQUFDdU47RUFDMUIsQ0FBQyxDQUFDLENBQUM7RUFDSCxJQUFNQyxNQUFNLEdBQUc5TSxRQUFRLENBQUNYLE1BQU0sQ0FBQ0MsR0FBRyxJQUFJQSxHQUFHLENBQUMwRSxHQUFHLEtBQUt6RyxFQUFFLENBQUMsQ0FBQ2lDLEdBQUcsQ0FBQyxDQUFDRixHQUFHLEVBQUU0TSxDQUFDLEtBQUs7SUFDcEUsT0FBUTtNQUNOTixFQUFFLEVBQUUsRUFBRTtNQUNOcEwsSUFBSSxFQUFFLEVBQUU7TUFDUjRMLGVBQWUsRUFBRSxFQUFFO01BQ25CQyxPQUFPLEVBQUUsRUFBRTtNQUNYQyxRQUFRLEVBQUUsRUFBRTtNQUNabEksWUFBWSxFQUFFLGFBQWE7TUFDM0JtSSxVQUFVLEVBQUUsR0FBRyxHQUFHak4sR0FBRyxDQUFDeU47SUFDeEIsQ0FBQztFQUNILENBQUMsQ0FBQztFQUNGLElBQU1DLE1BQU0sR0FBR2hOLFFBQVEsQ0FBQ1gsTUFBTSxDQUFDQyxHQUFHLElBQUlBLEdBQUcsQ0FBQzBFLEdBQUcsS0FBS3pHLEVBQUUsQ0FBQyxDQUFDaUMsR0FBRyxDQUFDLENBQUNGLEdBQUcsRUFBRTRNLENBQUMsS0FBSztJQUNwRSxPQUFRO01BQ05OLEVBQUUsRUFBRSxFQUFFO01BQ05wTCxJQUFJLEVBQUUsRUFBRTtNQUNSNEwsZUFBZSxFQUFFLEVBQUU7TUFDbkJDLE9BQU8sRUFBRSxFQUFFO01BQ1hDLFFBQVEsRUFBRSxFQUFFO01BQ1psSSxZQUFZLEVBQUUsZ0JBQWdCO01BQzlCbUksVUFBVSxFQUFFLEdBQUcsR0FBR2pOLEdBQUcsQ0FBQzJOO0lBQ3hCLENBQUM7RUFDSCxDQUFDLENBQUM7RUFDRixJQUFNQyxhQUFhO0lBQUEsSUFBQUMsTUFBQSxHQUFBblAsaUJBQUEsQ0FBRyxhQUFZO01BQ2hDLElBQU1vUCxRQUFRLEdBQUcsSUFBSXBVLDBEQUFnQixDQUFDLENBQUM7TUFDdkMsSUFBTXNVLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxZQUFZLENBQUMsUUFBUSxDQUFDO01BQ2pELElBQU1DLFFBQVEsR0FBRyxDQUNmO1FBQUVDLE1BQU0sRUFBRSxHQUFHO1FBQUVDLEdBQUcsRUFBRSxRQUFRO1FBQUV2UyxLQUFLLEVBQUU7TUFBRyxDQUFDLEVBQ3pDO1FBQUVzUyxNQUFNLEVBQUUsTUFBTTtRQUFFQyxHQUFHLEVBQUUsYUFBYTtRQUFFdlMsS0FBSyxFQUFFO01BQUcsQ0FBQyxFQUNqRDtRQUFFc1MsTUFBTSxFQUFFLFVBQVU7UUFBRUMsR0FBRyxFQUFFLGNBQWM7UUFBRXZTLEtBQUssRUFBRTtNQUFHLENBQUMsRUFDdEQ7UUFBRXNTLE1BQU0sRUFBRSxTQUFTO1FBQUVDLEdBQUcsRUFBRSxTQUFTO1FBQUV2UyxLQUFLLEVBQUU7TUFBRyxDQUFDLEVBQ2hEO1FBQUVzUyxNQUFNLEVBQUUsUUFBUTtRQUFFQyxHQUFHLEVBQUUsUUFBUTtRQUFFdlMsS0FBSyxFQUFFO01BQUcsQ0FBQyxDQUMvQztNQUNELElBQU13UyxRQUFRLEdBQUcsQ0FDZjtRQUFFRixNQUFNLEVBQUUsRUFBRTtRQUFFQyxHQUFHLEVBQUUsSUFBSTtRQUFFdlMsS0FBSyxFQUFFO01BQUcsQ0FBQyxFQUNwQztRQUFFc1MsTUFBTSxFQUFFLEVBQUU7UUFBRUMsR0FBRyxFQUFFLGFBQWE7UUFBRXZTLEtBQUssRUFBRTtNQUFHLENBQUMsRUFDN0M7UUFBRXNTLE1BQU0sRUFBRSxTQUFTO1FBQUVDLEdBQUcsRUFBRSxnQkFBZ0I7UUFBRXZTLEtBQUssRUFBRTtNQUFHLENBQUMsRUFDdkQ7UUFBRXNTLE1BQU0sRUFBRSxRQUFRO1FBQUVDLEdBQUcsRUFBRSxlQUFlO1FBQUV2UyxLQUFLLEVBQUU7TUFBRyxDQUFDLENBQ3REO01BQ0QsSUFBTXlTLFFBQVEsR0FBRyxDQUNmO1FBQUVILE1BQU0sRUFBRSxHQUFHO1FBQUVDLEdBQUcsRUFBRSxJQUFJO1FBQUV2UyxLQUFLLEVBQUU7TUFBRyxDQUFDLEVBQ3JDO1FBQUVzUyxNQUFNLEVBQUUsTUFBTTtRQUFFQyxHQUFHLEVBQUUsTUFBTTtRQUFFdlMsS0FBSyxFQUFFO01BQUcsQ0FBQyxFQUMxQztRQUFFc1MsTUFBTSxFQUFFLGtCQUFrQjtRQUFFQyxHQUFHLEVBQUUsaUJBQWlCO1FBQUV2UyxLQUFLLEVBQUU7TUFBRyxDQUFDLEVBQ2pFO1FBQUVzUyxNQUFNLEVBQUUsS0FBSztRQUFFQyxHQUFHLEVBQUUsU0FBUztRQUFFdlMsS0FBSyxFQUFFO01BQUcsQ0FBQyxFQUM1QztRQUFFc1MsTUFBTSxFQUFFLE1BQU07UUFBRUMsR0FBRyxFQUFFLFVBQVU7UUFBRXZTLEtBQUssRUFBRTtNQUFHLENBQUMsRUFDOUM7UUFBRXNTLE1BQU0sRUFBRSxVQUFVO1FBQUVDLEdBQUcsRUFBRSxjQUFjO1FBQUV2UyxLQUFLLEVBQUU7TUFBRyxDQUFDLEVBQ3REO1FBQUVzUyxNQUFNLEVBQUUsUUFBUTtRQUFFQyxHQUFHLEVBQUUsWUFBWTtRQUFFdlMsS0FBSyxFQUFFO01BQUcsQ0FBQyxDQUNuRDtNQUVEbVMsU0FBUyxDQUFDTyxNQUFNLENBQUNMLFFBQVEsQ0FBQ2hPLEdBQUcsQ0FBQ3NPLEdBQUcsSUFBSUEsR0FBRyxDQUFDTCxNQUFNLENBQUMsQ0FBQztNQUNqRDFDLEtBQUssQ0FBQ2dELE9BQU8sQ0FBQ3ZOLElBQUksSUFBSTtRQUNwQjhNLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLENBQUNyTixJQUFJLENBQUN3SyxNQUFNLEVBQUV4SyxJQUFJLENBQUMySyxXQUFXLEVBQUUzSyxJQUFJLENBQUNrRCxZQUFZLEVBQUVsRCxJQUFJLENBQUM4SyxPQUFPLEVBQUU5SyxJQUFJLENBQUNrTCxNQUFNLENBQUMsQ0FBQztNQUNqRyxDQUFDLENBQUM7TUFDRjRCLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLEVBQUUsQ0FBQztNQUNwQlAsU0FBUyxDQUFDTyxNQUFNLENBQUNGLFFBQVEsQ0FBQ25PLEdBQUcsQ0FBQ3NPLEdBQUcsSUFBSUEsR0FBRyxDQUFDTCxNQUFNLENBQUMsQ0FBQztNQUNqRDlCLEtBQUssQ0FBQ29DLE9BQU8sQ0FBQ3ZOLElBQUksSUFBSTtRQUNwQjhNLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLENBQUNyTixJQUFJLENBQUNvTCxFQUFFLEVBQUVwTCxJQUFJLENBQUMySyxXQUFXLEVBQUUzSyxJQUFJLENBQUNxTCxjQUFjLEVBQUVyTCxJQUFJLENBQUN1TCxhQUFhLENBQUMsQ0FBQztNQUN4RixDQUFDLENBQUM7TUFDRnVCLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLEVBQUUsQ0FBQztNQUNwQlAsU0FBUyxDQUFDVSxVQUFVLENBQUMsT0FBTyxDQUFDO01BQzdCcEIsS0FBSyxDQUFDbUIsT0FBTyxDQUFDdk4sSUFBSSxJQUFJO1FBQ3BCOE0sU0FBUyxDQUFDTyxNQUFNLENBQUMsQ0FBQ3JOLElBQUksQ0FBQ3FNLFFBQVEsQ0FBQyxDQUFDO01BQ25DLENBQUMsQ0FBQztNQUNGUyxTQUFTLENBQUNPLE1BQU0sQ0FBQyxFQUFFLENBQUM7TUFDcEJQLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDMUJQLFNBQVMsQ0FBQ08sTUFBTSxDQUFDRCxRQUFRLENBQUNwTyxHQUFHLENBQUNzTyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0wsTUFBTSxDQUFDLENBQUM7TUFDakR4QixLQUFLLENBQUM4QixPQUFPLENBQUN2TixJQUFJLElBQUk7UUFDcEI4TSxTQUFTLENBQUNPLE1BQU0sQ0FBQyxDQUFDck4sSUFBSSxDQUFDb0wsRUFBRSxFQUFFcEwsSUFBSSxDQUFDQSxJQUFJLEVBQUVBLElBQUksQ0FBQzRMLGVBQWUsRUFBRTVMLElBQUksQ0FBQzZMLE9BQU8sRUFBRTdMLElBQUksQ0FBQzhMLFFBQVEsRUFBRTlMLElBQUksQ0FBQzRELFlBQVksRUFBRTVELElBQUksQ0FBQytMLFVBQVUsQ0FBQyxDQUFDO01BQy9ILENBQUMsQ0FBQztNQUNGQyxLQUFLLENBQUN1QixPQUFPLENBQUN2TixJQUFJLElBQUk7UUFDcEI4TSxTQUFTLENBQUNPLE1BQU0sQ0FBQyxDQUFDck4sSUFBSSxDQUFDb0wsRUFBRSxFQUFFcEwsSUFBSSxDQUFDQSxJQUFJLEVBQUVBLElBQUksQ0FBQzRMLGVBQWUsRUFBRTVMLElBQUksQ0FBQzZMLE9BQU8sRUFBRTdMLElBQUksQ0FBQzhMLFFBQVEsRUFBRTlMLElBQUksQ0FBQzRELFlBQVksRUFBRTVELElBQUksQ0FBQytMLFVBQVUsQ0FBQyxDQUFDO01BQy9ILENBQUMsQ0FBQztNQUNGRyxLQUFLLENBQUNxQixPQUFPLENBQUN2TixJQUFJLElBQUk7UUFDcEI4TSxTQUFTLENBQUNPLE1BQU0sQ0FBQyxDQUFDck4sSUFBSSxDQUFDb0wsRUFBRSxFQUFFcEwsSUFBSSxDQUFDQSxJQUFJLEVBQUVBLElBQUksQ0FBQzRMLGVBQWUsRUFBRTVMLElBQUksQ0FBQzZMLE9BQU8sRUFBRTdMLElBQUksQ0FBQzhMLFFBQVEsRUFBRTlMLElBQUksQ0FBQzRELFlBQVksRUFBRTVELElBQUksQ0FBQytMLFVBQVUsQ0FBQyxDQUFDO01BQy9ILENBQUMsQ0FBQztNQUNGTyxNQUFNLENBQUNpQixPQUFPLENBQUN2TixJQUFJLElBQUk7UUFDckI4TSxTQUFTLENBQUNPLE1BQU0sQ0FBQyxDQUFDck4sSUFBSSxDQUFDb0wsRUFBRSxFQUFFcEwsSUFBSSxDQUFDQSxJQUFJLEVBQUVBLElBQUksQ0FBQzRMLGVBQWUsRUFBRTVMLElBQUksQ0FBQzZMLE9BQU8sRUFBRTdMLElBQUksQ0FBQzhMLFFBQVEsRUFBRTlMLElBQUksQ0FBQzRELFlBQVksRUFBRTVELElBQUksQ0FBQytMLFVBQVUsQ0FBQyxDQUFDO01BQy9ILENBQUMsQ0FBQztNQUNGUyxNQUFNLENBQUNlLE9BQU8sQ0FBQ3ZOLElBQUksSUFBSTtRQUNyQjhNLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLENBQUNyTixJQUFJLENBQUNvTCxFQUFFLEVBQUVwTCxJQUFJLENBQUNBLElBQUksRUFBRUEsSUFBSSxDQUFDNEwsZUFBZSxFQUFFNUwsSUFBSSxDQUFDNkwsT0FBTyxFQUFFN0wsSUFBSSxDQUFDOEwsUUFBUSxFQUFFOUwsSUFBSSxDQUFDNEQsWUFBWSxFQUFFNUQsSUFBSSxDQUFDK0wsVUFBVSxDQUFDLENBQUM7TUFDL0gsQ0FBQyxDQUFDO01BRUYsSUFBTTBCLE1BQU0sU0FBU2IsUUFBUSxDQUFDYyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO01BQ2hELElBQU1DLElBQUksR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQ0osTUFBTSxDQUFDLEVBQUU7UUFBRUssSUFBSSxFQUFFO01BQTJCLENBQUMsQ0FBQztNQUNyRXJWLG1EQUFNLENBQUNtVixJQUFJLEtBQUFyVSxNQUFBLENBQUssSUFBSSxHQUFHa1IsTUFBTSxDQUFDeEksY0FBYyxDQUFDLENBQUN5SSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRzdJLGFBQWEsVUFBTyxDQUFDO0lBQ2xHLENBQUM7SUFBQSxnQkE5REs2SyxhQUFhQSxDQUFBO01BQUEsT0FBQUMsTUFBQSxDQUFBeE8sS0FBQSxPQUFBQyxTQUFBO0lBQUE7RUFBQSxHQThEbEI7RUFDRCxvQkFDRXZMLDBEQUFBO0lBQUtnRyxTQUFTLEVBQUM7RUFBYyxnQkFDM0JoRywwREFBQSxDQUFDaUMscURBQUc7SUFBQ2laLEVBQUUsRUFBRTtNQUFFQyxPQUFPLEVBQUU7SUFBTztFQUFFLGdCQUMzQm5iLDBEQUFBLENBQUNnRSxrRUFBVyxNQUFFLENBQUMsZUFDZmhFLDBEQUFBLENBQUNvSSxNQUFNO0lBQUNWLFFBQVEsRUFBQyxVQUFVO0lBQUNjLElBQUksRUFBRStPLE9BQVE7SUFBQzJELEVBQUUsRUFBRTtNQUFFdFUsZUFBZSxFQUFFO0lBQVU7RUFBRSxnQkFDNUU1RywwREFBQSxDQUFDK0QsOERBQU87SUFDTm1YLEVBQUUsRUFBRTtNQUNGRSxFQUFFLEVBQUUsTUFBTSxDQUFFO0lBQ2Q7RUFBRSxnQkFFRnBiLDBEQUFBLENBQUNlLHFEQUFVO0lBQ1RzYSxJQUFJLEVBQUMsT0FBTztJQUNaeFUsS0FBSyxFQUFDLFNBQVM7SUFDZixjQUFXLGFBQWE7SUFDeEJ5VSxPQUFPLEVBQUU3RCxZQUFhO0lBQ3RCeUQsRUFBRSxFQUFBelMsYUFBQTtNQUNBOFMsV0FBVyxFQUFFO0lBQU0sR0FDZmhFLE9BQU8sSUFBSTtNQUFFNEQsT0FBTyxFQUFFO0lBQU8sQ0FBQztFQUNsQyxnQkFFRm5iLDBEQUFBLENBQUNzRSxpRUFBUSxNQUFFLENBQ0QsQ0FBQyxlQUNidEUsMERBQUEsQ0FBQ3FCLHFEQUFVO0lBQ1RtYSxTQUFTLEVBQUMsSUFBSTtJQUNkQyxPQUFPLEVBQUMsSUFBSTtJQUNaNVUsS0FBSyxFQUFDLFNBQVM7SUFDZjZVLE1BQU07SUFDTlIsRUFBRSxFQUFFO01BQUVTLFFBQVEsRUFBRTtJQUFFO0VBQUUsR0FDckIsdUJBRVcsQ0FBQyxlQUNiM2IsMERBQUEsQ0FBQ2UscURBQVU7SUFBQ3VhLE9BQU8sRUFBRUEsQ0FBQSxLQUFNblIsUUFBUSxDQUFDLG9CQUFvQjtFQUFFLGdCQUN4RG5LLDBEQUFBLENBQUNzRixzRUFBUztJQUFDbUMsS0FBSyxFQUFFO01BQUVaLEtBQUssRUFBRTtJQUFRO0VBQUUsQ0FBRSxDQUM3QixDQUFDLGVBQ2I3RywwREFBQSxDQUFDeUYsOERBQW9CLE1BQUUsQ0FBQyxlQUN4QnpGLDBEQUFBLENBQUN3RiwwREFBZ0I7SUFBQ29XLElBQUksRUFBRXZSLElBQUksQ0FBQ1UsSUFBSSxDQUFDSSxRQUFTO0lBQUNELElBQUksRUFBRWIsSUFBSSxDQUFDVSxJQUFJLENBQUNHO0VBQUssQ0FBRSxDQUFDLGVBQ3BFbEwsMERBQUEsQ0FBQ3FCLHFEQUFVO0lBQUM2WixFQUFFLEVBQUU7TUFBRS9SLFVBQVUsRUFBRSxNQUFNO01BQUVvUyxXQUFXLEVBQUU7SUFBTztFQUFFLEdBQUVsUixJQUFJLENBQUNVLElBQUksQ0FBQ0ksUUFBcUIsQ0FBQyxlQUM5Rm5MLDBEQUFBLENBQUNlLHFEQUFVO0lBQUM4RixLQUFLLEVBQUMsU0FBUztJQUFDeVUsT0FBTyxFQUFFeEU7RUFBYSxnQkFDaEQ5VywwREFBQSxDQUFDaUYsbUVBQU07SUFBQ3dDLEtBQUssRUFBRTtNQUFFWixLQUFLLEVBQUU7SUFBUTtFQUFFLENBQUUsQ0FDMUIsQ0FDTCxDQUNILENBQUMsZUFDVDdHLDBEQUFBLENBQUNxSixNQUFNO0lBQUNvUyxPQUFPLEVBQUMsV0FBVztJQUFDalQsSUFBSSxFQUFFK087RUFBUSxnQkFDeEN2WCwwREFBQSxDQUFDK0QsOERBQU87SUFDTm1YLEVBQUUsRUFBRTtNQUNGQyxPQUFPLEVBQUUsTUFBTTtNQUNmVSxVQUFVLEVBQUUsUUFBUTtNQUNwQkMsY0FBYyxFQUFFLFVBQVU7TUFDMUI3VCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1I7RUFBRSxnQkFFRmpJLDBEQUFBLENBQUNlLHFEQUFVO0lBQUN1YSxPQUFPLEVBQUU3RDtFQUFhLGdCQUNoQ3pYLDBEQUFBLENBQUN1RSx3RUFBZSxNQUFFLENBQ1IsQ0FDTCxDQUFDLGVBQ1Z2RSwwREFBQSxDQUFDMEMsc0RBQU8sTUFBRSxDQUFDLGVBQ1gxQywwREFBQSxDQUFDa0UsMkRBQUk7SUFBQ2dYLEVBQUUsRUFBRTtNQUFFM0ksTUFBTSxFQUFFO0lBQVE7RUFBRSxnQkFDNUJ2UywwREFBQSxDQUFDTSw4REFBVyxNQUFFLENBQ1YsQ0FDQSxDQUFDLGVBQ1ROLDBEQUFBLENBQUNpQyxxREFBRztJQUNGdVosU0FBUyxFQUFDLE1BQU07SUFDaEJOLEVBQUUsRUFBRTtNQUNGdFUsZUFBZSxFQUFHSCxLQUFLLElBQ3JCQSxLQUFLLENBQUNzVixPQUFPLENBQUNDLElBQUksS0FBSyxPQUFPLEdBQzFCdlYsS0FBSyxDQUFDc1YsT0FBTyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQ3ZCeFYsS0FBSyxDQUFDc1YsT0FBTyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDO01BQzdCTixRQUFRLEVBQUUsQ0FBQztNQUNYN1QsS0FBSyxFQUFFLE1BQU07TUFDYnlLLE1BQU0sRUFBRSxPQUFPO01BQ2YySixRQUFRLEVBQUU7SUFDWjtFQUFFLGdCQUVGbGMsMERBQUEsQ0FBQytELDhEQUFPLE1BQUUsQ0FBQyxlQUNYL0QsMERBQUEsQ0FBQ29FLGdFQUFTO0lBQUMrWCxRQUFRLEVBQUMsTUFBTTtJQUFDakIsRUFBRSxFQUFFO01BQUVrQixFQUFFLEVBQUU7SUFBRTtFQUFFLEdBRXJDclAsV0FBVyxnQkFBRy9NLDBEQUFBLDJCQUNaQSwwREFBQTtJQUFLeUgsS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUVDLEdBQUcsRUFBRTtJQUFRO0VBQUUsZ0JBQ2pEM0gsMERBQUEsQ0FBQ2tGLDBEQUFNLE1BQUUsQ0FDTixDQUNGLENBQUMsZ0JBQ0psRiwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ2Msc0RBQUk7SUFBQ3ViLFNBQVM7SUFBQzNTLE9BQU8sRUFBRTtFQUFFLEdBQ3hCOEosS0FBSyxLQUFLLENBQUMsZ0JBQ1R4VCwwREFBQSxDQUFDYyxzREFBSTtJQUFDcU0sSUFBSTtJQUFDbVAsRUFBRSxFQUFFO0VBQUUsZ0JBQ2hCdGMsMERBQUEsQ0FBQ2dELDZEQUFtQjtJQUFDdVosSUFBSSxFQUFFclM7RUFBRyxDQUFFLENBQzVCLENBQUMsR0FBSSxFQUFFLGVBQ2ZsSywwREFBQSxDQUFDYyxzREFBSTtJQUFDcU0sSUFBSTtJQUFDbVAsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Z0YywwREFBQTtJQUFLZ0csU0FBUyxFQUFDLG9CQUFvQjtJQUFDa0UsRUFBRSxFQUFDO0VBQVMsZ0JBQzlDbEssMERBQUE7SUFBS3lILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUU7SUFBTztFQUFFLEdBRTNCNkUsUUFBUSxhQUFSQSxRQUFRLGdCQUFBN0MsZ0JBQUEsR0FBUjZDLFFBQVEsQ0FBRVgsTUFBTSxDQUFDQyxHQUFHLElBQUlBLEdBQUcsQ0FBQzBFLEdBQUcsS0FBS3pHLEVBQUUsQ0FBQyxjQUFBSixnQkFBQSx1QkFBdkNBLGdCQUFBLENBQXlDcUMsR0FBRyxDQUFFRixHQUFHO0lBQUEsSUFBQXVRLE1BQUEsRUFBQUMsS0FBQSxFQUFBQyxVQUFBLEVBQUFDLE1BQUEsRUFBQUMsTUFBQSxFQUFBQyxXQUFBLEVBQUFDLE1BQUE7SUFBQSxvQkFDaEQ5YywwREFBQTtNQUFLcWEsR0FBRyxFQUFFcE8sR0FBRyxDQUFDMEU7SUFBSSxnQkFFaEIzUSwwREFBQTtNQUFReUgsS0FBSyxFQUFFO1FBQUUwVCxPQUFPLEVBQUUsT0FBTztRQUFFVSxVQUFVLEVBQUUsUUFBUTtRQUFFQyxjQUFjLEVBQUU7TUFBZ0I7SUFBRSxnQkFDekY5YiwwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUUwVCxPQUFPLEVBQUUsTUFBTTtRQUFFVyxjQUFjLEVBQUU7TUFBZ0I7SUFBRSxnQkFDL0Q5YiwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ3FCLHFEQUFVO01BQUM2WixFQUFFLEVBQUU7UUFBRTZCLFVBQVUsRUFBRSxNQUFNO1FBQUUvVixRQUFRLEVBQUU7TUFBTztJQUFFLEdBQUVpRixHQUFHLENBQUNvRSxZQUFZLENBQUNBLFlBQVksQ0FBQzhILFdBQVcsQ0FBQyxDQUFDLEVBQUMsS0FBRyxHQUFBcUUsTUFBQSxHQUFFdlEsR0FBRyxDQUFDK1EsWUFBWSxJQUFJL1EsR0FBRyxDQUFDZ1IsV0FBVyxjQUFBVCxNQUFBLHVCQUFwQ0EsTUFBQSxDQUF1Q2xNLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLEVBQUMsR0FBYSxDQUN6TCxDQUFDLGVBQ050USwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ3FCLHFEQUFVO01BQ1R3RixLQUFLLEVBQ0hvRixHQUFHLENBQUNvTSxNQUFNLEtBQUssT0FBTyxHQUNsQixNQUFNLEdBQUdwTSxHQUFHLENBQUNvTSxNQUFNLEtBQUssTUFBTSxHQUM1QixNQUFNLEdBQ1JwTSxHQUFHLENBQUNvTSxNQUFNLEtBQUssU0FBUyxHQUNwQixLQUFLLEdBQ1BwTSxHQUFHLENBQUNvTSxNQUFNLEtBQUssVUFBVSxHQUNyQixTQUFTLEdBQ1hwTSxHQUFHLENBQUNvTSxNQUFNLEtBQUssVUFBVSxHQUNyQixTQUFTLEdBQUc7SUFDekIsR0FFQXBNLEdBQUcsQ0FBQ29NLE1BQ0ssQ0FDVCxDQUFDLGVBQ05yWSwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ3dDLHNEQUFNO01BQ0wsaUJBQWVnRyxJQUFJLEdBQUcsc0JBQXNCLEdBQUcwVSxTQUFVO01BQ3pELGlCQUFjLE1BQU07TUFDcEIsaUJBQWUxVSxJQUFJLEdBQUcsTUFBTSxHQUFHMFUsU0FBVTtNQUN6Q3pCLE9BQU8sRUFBQyxXQUFXO01BQ25CMEIsZ0JBQWdCO01BQ2hCN0IsT0FBTyxFQUFFNUosV0FBWTtNQUNyQjBMLE9BQU8sZUFBRXBkLDBEQUFBLENBQUN1Riw4RUFBaUIsTUFBRSxDQUFFO01BQy9CMlYsRUFBRSxFQUFFO1FBQ0ZuVCxPQUFPLEVBQUUsTUFBTTtRQUFFLFNBQVMsRUFBRTtVQUMxQmxCLEtBQUssRUFBRSxNQUFNO1VBQ2JrQixPQUFPLEVBQUUsT0FBTztVQUNoQnNWLE1BQU0sRUFBRTtRQUNWO01BQ0Y7SUFBRSxHQUNILFNBRU8sQ0FBQyxlQUNUcmQsMERBQUEsQ0FBQ3lDLHNEQUFJO01BQ0h5SCxFQUFFLEVBQUMsc0JBQXNCO01BQ3pCb1QsYUFBYSxFQUFFO1FBQ2IsaUJBQWlCLEVBQUU7TUFDckIsQ0FBRTtNQUNGL0wsUUFBUSxFQUFFQSxRQUFTO01BQ25CL0ksSUFBSSxFQUFFQSxJQUFLO01BQ1grVSxPQUFPLEVBQUUxTCxlQUFnQjtNQUN6QjJMLG1CQUFtQixFQUFFeGIsc0RBQUlBO0lBQUMsZ0JBRTFCaEMsMERBQUEsQ0FBQ2Esc0RBQVE7TUFBQzRjLFFBQVEsRUFBRXhSLEdBQUcsQ0FBQ29NLE1BQU0sS0FBSyxPQUFPLElBQUloTSxlQUFlLENBQUMyRSxNQUFNLEtBQUssQ0FBQyxJQUFJM0csSUFBSSxDQUFDVSxJQUFJLENBQUNHLElBQUksS0FBSztJQUFNLGdCQUNyR2xMLDBEQUFBLENBQUNpRCxzREFBTztNQUFDeWEsRUFBRSxnQ0FBQWhYLE1BQUEsQ0FBZ0N1RixHQUFHLENBQUMwRSxHQUFHLENBQUc7TUFBQzNLLFNBQVMsRUFBQyxVQUFVO01BQUN5QixLQUFLLEVBQUU7UUFBRTBULE9BQU8sRUFBRSxNQUFNO1FBQUV3QyxHQUFHLEVBQUUsTUFBTTtRQUFFOUIsVUFBVSxFQUFFLFFBQVE7UUFBRWhWLEtBQUssRUFBRTtNQUFPO0lBQUUsZ0JBQ3RKN0csMERBQUEsQ0FBQzJDLGlFQUFRLE1BQUUsQ0FBQyxlQUNaM0MsMERBQUEsQ0FBQ3FCLHFEQUFVLFFBQUMsTUFBZ0IsQ0FDckIsQ0FDRCxDQUFDLGVBQ1hyQiwwREFBQSxDQUFDMEMsc0RBQU8sTUFBRSxDQUFDLGVBQ1gxQywwREFBQSxDQUFDYSxzREFBUSxxQkFDUGIsMERBQUEsQ0FBQ2lELHNEQUFPO01BQUN5YSxFQUFFLHdCQUFBaFgsTUFBQSxDQUF3QnVGLEdBQUcsQ0FBQzBFLEdBQUcsQ0FBRztNQUFDM0ssU0FBUyxFQUFDLFVBQVU7TUFBQ3lCLEtBQUssRUFBRTtRQUFFMFQsT0FBTyxFQUFFLE1BQU07UUFBRXdDLEdBQUcsRUFBRSxNQUFNO1FBQUU5QixVQUFVLEVBQUUsUUFBUTtRQUFFaFYsS0FBSyxFQUFFO01BQU87SUFBRSxnQkFDOUk3RywwREFBQSxDQUFDMEYsNERBQVEsTUFBRSxDQUFDLGVBQ1oxRiwwREFBQSxDQUFDcUIscURBQVUsUUFBQyxPQUFpQixDQUN0QixDQUNELENBQUMsZUFDWHJCLDBEQUFBLENBQUMwQyxzREFBTyxNQUFFLENBQUMsZUFDWDFDLDBEQUFBLENBQUNhLHNEQUFRO01BQUN5YSxPQUFPLEVBQUVqSSxlQUFnQjtNQUFDNkgsRUFBRSxFQUFFO1FBQUVDLE9BQU8sRUFBRSxNQUFNO1FBQUV3QyxHQUFHLEVBQUUsTUFBTTtRQUFFOVcsS0FBSyxFQUFFO01BQU87SUFBRSxnQkFDdEY3RywwREFBQSxDQUFDNkMsMkVBQWtCLE1BQUUsQ0FBQyxlQUN0QjdDLDBEQUFBLGVBQU0sT0FBVyxDQUNULENBQUMsZUFDWEEsMERBQUEsQ0FBQ2Esc0RBQVE7TUFBQ3lhLE9BQU8sRUFBRXpCLGFBQWM7TUFBQ3FCLEVBQUUsRUFBRTtRQUFFQyxPQUFPLEVBQUUsTUFBTTtRQUFFd0MsR0FBRyxFQUFFLE1BQU07UUFBRTlXLEtBQUssRUFBRTtNQUFPO0lBQUUsZ0JBQ3BGN0csMERBQUEsQ0FBQzZGLDREQUFRLE1BQUUsQ0FBQyxlQUNaN0YsMERBQUEsZUFBTSxpQkFBcUIsQ0FDbkIsQ0FBQyxlQUNYQSwwREFBQSxDQUFDMEMsc0RBQU8sTUFBRSxDQUFDLGVBQ1gxQywwREFBQSxDQUFDYSxzREFBUTtNQUFDeWEsT0FBTyxFQUFFQSxDQUFBLEtBQU01SCxXQUFXLENBQUMsQ0FBQztJQUFFLEdBQUMsR0FBQyxlQUFBMVQsMERBQUE7TUFBTXlILEtBQUssRUFBRTtRQUFFWixLQUFLLEVBQUU7TUFBTztJQUFFLEdBQUMsVUFBYyxDQUFDLEtBQVcsQ0FBQyxlQUNyRzdHLDBEQUFBLENBQUNhLHNEQUFRO01BQUN5YSxPQUFPLEVBQUVBLENBQUEsS0FBTTVILFdBQVcsQ0FBQyxDQUFDO0lBQUUsR0FBQyxHQUFDLGVBQUExVCwwREFBQTtNQUFNeUgsS0FBSyxFQUFFO1FBQUVaLEtBQUssRUFBRTtNQUFPO0lBQUUsR0FBQyxTQUFhLENBQVcsQ0FBQyxlQUNuRzdHLDBEQUFBLENBQUNhLHNEQUFRLFFBRUxvTCxHQUFHLENBQUN1RSxhQUFhLGdCQUNmeFEsMERBQUE7TUFBTXlILEtBQUssRUFBRTtRQUFFWixLQUFLLEVBQUU7TUFBTyxDQUFFO01BQUN5VSxPQUFPLEVBQUVBLENBQUEsS0FBTWxFLGFBQWEsQ0FBQyxDQUFDO0lBQUUsR0FBQyxXQUFlLENBQUMsZ0JBQy9FcFgsMERBQUE7TUFBTXNiLE9BQU8sRUFBRXpKLGVBQWdCO01BQUNwSyxLQUFLLEVBQUU7UUFBRVosS0FBSyxFQUFFO01BQU87SUFBRSxHQUFDLHNCQUEwQixDQUVsRixDQUFDLGVBQ1g3RywwREFBQSxDQUFDMEMsc0RBQU8sTUFBRSxDQUFDLGVBQ1gxQywwREFBQSxDQUFDYSxzREFBUSxRQUVIb0wsR0FBRyxDQUFDb00sTUFBTSxLQUFLLFdBQVcsaUJBQ3hCclksMERBQUEsQ0FBQ2lELHNEQUFPO01BQUN5YSxFQUFFLG1DQUFBaFgsTUFBQSxDQUFtQ3VGLEdBQUcsQ0FBQzBFLEdBQUcsQ0FBRztNQUFDM0ssU0FBUyxFQUFDLFVBQVU7TUFBQ3lCLEtBQUssRUFBRTtRQUFFWixLQUFLLEVBQUU7TUFBTztJQUFFLGdCQUNyRzdHLDBEQUFBLGVBQU0sb0JBQXdCLENBQ3ZCLENBQ1YsRUFHRGlNLEdBQUcsQ0FBQ29NLE1BQU0sS0FBSyxXQUFXLGlCQUN4QnJZLDBEQUFBLENBQUNpRCxzREFBTztNQUFDeWEsRUFBRSxtQ0FBQWhYLE1BQUEsQ0FBbUN1RixHQUFHLENBQUMwRSxHQUFHLENBQUc7TUFBQzNLLFNBQVMsRUFBQyxVQUFVO01BQUN5QixLQUFLLEVBQUU7UUFBRVosS0FBSyxFQUFFO01BQU87SUFBRSxnQkFDckc3RywwREFBQSxlQUFNLDRCQUFnQyxDQUMvQixDQUdMLENBQUMsZUFDWEEsMERBQUEsQ0FBQ2Esc0RBQVEsUUFFTG9MLEdBQUcsQ0FBQ29NLE1BQU0sS0FBSyxXQUFXLGlCQUN4QnJZLDBEQUFBLENBQUNpRCxzREFBTztNQUFDeWEsRUFBRSxtQ0FBQWhYLE1BQUEsQ0FBbUN1RixHQUFHLENBQUMwRSxHQUFHLENBQUc7TUFBQzNLLFNBQVMsRUFBQyxVQUFVO01BQUN5QixLQUFLLEVBQUU7UUFBRVosS0FBSyxFQUFFO01BQU87SUFBRSxnQkFDckc3RywwREFBQSxlQUFNLG9CQUF3QixDQUN2QixDQUNWLEVBR0RpTSxHQUFHLENBQUNvTSxNQUFNLEtBQUssV0FBVyxpQkFDeEJyWSwwREFBQSxDQUFDaUQsc0RBQU87TUFBQ3lhLEVBQUUsbUNBQUFoWCxNQUFBLENBQW1DdUYsR0FBRyxDQUFDMEUsR0FBRyxDQUFHO01BQUMzSyxTQUFTLEVBQUMsVUFBVTtNQUFDeUIsS0FBSyxFQUFFO1FBQUVaLEtBQUssRUFBRTtNQUFPO0lBQUUsZ0JBQ3JHN0csMERBQUEsZUFBTSw0QkFBZ0MsQ0FDL0IsQ0FHUCxDQUFDLGVBQ1hBLDBEQUFBLENBQUNhLHNEQUFRLFFBRUxvTCxHQUFHLENBQUNvTSxNQUFNLEtBQUssV0FBVyxpQkFDeEJyWSwwREFBQSxDQUFDaUQsc0RBQU87TUFBQ3lhLEVBQUUsbUNBQUFoWCxNQUFBLENBQW1DdUYsR0FBRyxDQUFDMEUsR0FBRyxDQUFHO01BQUMzSyxTQUFTLEVBQUMsVUFBVTtNQUFDeUIsS0FBSyxFQUFFO1FBQUVaLEtBQUssRUFBRTtNQUFPO0lBQUUsZ0JBQ3JHN0csMERBQUEsZUFBTSx3QkFBNEIsQ0FDM0IsQ0FDVixFQUdEaU0sR0FBRyxDQUFDb00sTUFBTSxLQUFLLFdBQVcsaUJBQ3hCclksMERBQUEsQ0FBQ2lELHNEQUFPO01BQUN5YSxFQUFFLG1DQUFBaFgsTUFBQSxDQUFtQ3VGLEdBQUcsQ0FBQzBFLEdBQUcsQ0FBRztNQUFDM0ssU0FBUyxFQUFDLFVBQVU7TUFBQ3lCLEtBQUssRUFBRTtRQUFFWixLQUFLLEVBQUU7TUFBTztJQUFFLGdCQUNyRzdHLDBEQUFBLGVBQU0sZ0NBQW9DLENBQ25DLENBR0wsQ0FDTixDQUNILENBQ0YsQ0FBQyxFQUVKa1gsT0FBTyxLQUFLLENBQUMsZ0JBQ1hsWCwwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUUwVCxPQUFPLEVBQUUsTUFBTTtRQUFFVSxVQUFVLEVBQUUsUUFBUTtRQUFFOEIsR0FBRyxFQUFFLE1BQU07UUFBRTdWLEtBQUssRUFBRTtNQUFPO0lBQUUsZ0JBQ2hGOUgsMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFMFQsT0FBTyxFQUFFLE1BQU07UUFBRXdDLEdBQUcsRUFBRSxNQUFNO1FBQUU5QixVQUFVLEVBQUU7TUFBUztJQUFFLGdCQUNqRTdiLDBEQUFBLGFBQUksV0FBYSxDQUFDLGVBQ2xCQSwwREFBQSxZQUVJd08sUUFBUSxHQUFHQSxRQUFRLENBQUNyQyxHQUFHLENBQUVGLEdBQUcsaUJBQzFCak0sMERBQUE7TUFBTXFhLEdBQUcsRUFBRXBPLEdBQUcsQ0FBQzBFO0lBQUksR0FBQyxLQUFHLEVBQUMxRSxHQUFHLENBQUMyUixZQUFZLEVBQUMsSUFBRSxFQUFDM1IsR0FBRyxDQUFDNFIsV0FBVyxDQUFDQSxXQUFrQixDQUMvRSxDQUFDLEdBQUcsSUFFTixDQUFDLGVBQ0o3ZCwwREFBQSxZQUVJb08sUUFBUSxHQUFHQSxRQUFRLENBQUNqQyxHQUFHLENBQUVGLEdBQUcsaUJBQzFCak0sMERBQUE7TUFBTXFhLEdBQUcsRUFBRXBPLEdBQUcsQ0FBQzBFO0lBQUksR0FBQyxLQUFHLEVBQUMxRSxHQUFHLENBQUNnUixXQUFrQixDQUMvQyxDQUFDLEdBQUcsSUFFTixDQUFDLGVBQ0pqZCwwREFBQSxZQUVJZ08sT0FBTyxHQUFHQSxPQUFPLENBQUM3QixHQUFHLENBQUVGLEdBQUcsaUJBQ3hCak0sMERBQUE7TUFBTXFhLEdBQUcsRUFBRXBPLEdBQUcsQ0FBQzBFO0lBQUksR0FBQyxLQUFHLEVBQUMxRSxHQUFHLENBQUNnUixXQUFrQixDQUMvQyxDQUFDLEdBQUcsSUFFTixDQUFDLGVBQ0pqZCwwREFBQSxZQUVJNE8sV0FBVyxHQUFHQSxXQUFXLENBQUN6QyxHQUFHLENBQUVGLEdBQUcsaUJBQ2hDak0sMERBQUE7TUFBTXFhLEdBQUcsRUFBRXBPLEdBQUcsQ0FBQzBFO0lBQUksR0FBQyxPQUFLLEVBQUNpSCxNQUFNLENBQUMzTCxHQUFHLENBQUM2UixhQUFhLENBQUMsQ0FBQ2pHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFRLENBQzVFLENBQUMsR0FBRyxJQUVOLENBQ0EsQ0FDRixDQUFDLGdCQUVON1gsMERBQUE7TUFBU3lILEtBQUssRUFBRTtRQUFFc1csU0FBUyxFQUFFLE1BQU07UUFBRTVDLE9BQU8sRUFBRSxNQUFNO1FBQUVVLFVBQVUsRUFBRTtNQUFTO0lBQUUsR0FFekUzRSxPQUFPLEtBQUssQ0FBQyxnQkFDWGxYLDBEQUFBO01BQU9nRyxTQUFTLEVBQUMsYUFBYTtNQUFDeUIsS0FBSyxFQUFFO1FBQUVULFFBQVEsRUFBRSxLQUFLO1FBQUVnWCxZQUFZLEVBQUU7TUFBTTtJQUFFLEdBQzVFaFEsT0FBTyxJQUFJQSxPQUFPLENBQUNnRCxNQUFNLEdBQUcsQ0FBQyxpQkFDNUJoUiwwREFBQSxnQkFDR2dPLE9BQU8sQ0FBQzdCLEdBQUcsQ0FBRUYsR0FBRyxpQkFDZmpNLDBEQUFBO01BQUlxYSxHQUFHLEVBQUVwTyxHQUFHLENBQUMwRTtJQUFJLGdCQUNmM1EsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE1BQU07UUFBRVosTUFBTSxFQUFFO01BQWlCO0lBQUUsR0FBQyxRQUFNLEVBQUM1WSw2Q0FBSyxDQUFDd0gsR0FBRyxDQUFDNkwsV0FBVyxDQUFDLENBQUNFLE1BQU0sQ0FBQyxZQUFZLENBQU0sQ0FBQyxlQUNwSGhZLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxNQUFNO1FBQUVaLE1BQU0sRUFBRTtNQUFpQjtJQUFFLEdBQUMsYUFBVyxFQUFDcFIsR0FBRyxDQUFDZ1IsV0FBZ0IsQ0FBQyxlQUM3RmpkLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxNQUFNO1FBQUVaLE1BQU0sRUFBRTtNQUFpQjtJQUFFLEdBQUMsV0FBUyxlQUFBcmQsMERBQUEsZUFBTSxHQUFPLENBQUMsS0FBQyxFQUFDaU0sR0FBRyxDQUFDcU4sWUFBaUIsQ0FBQyxlQUMzR3RaLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxNQUFNO1FBQUVaLE1BQU0sRUFBRTtNQUFpQjtJQUFFLEdBQUMsU0FBTyxlQUFBcmQsMERBQUEsZUFBTSxHQUFPLENBQUMsS0FBQyxFQUFDaU0sR0FBRyxDQUFDaVMsS0FBVSxDQUFDLGVBQ2xHbGUsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE1BQU07UUFBRVosTUFBTSxFQUFFO01BQWlCO0lBQUUsR0FBQyxZQUFVLGVBQUFyZCwwREFBQSxlQUFNLEdBQU8sQ0FBQyxLQUFDLEVBQUNpTSxHQUFHLENBQUN5TixVQUFlLENBQUMsZUFDMUcxWiwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsUUFBUTtRQUFFWixNQUFNLEVBQUU7TUFBaUI7SUFBRSxnQkFDM0RyZCwwREFBQSxDQUFDcUgsV0FBVyxxQkFDVnJILDBEQUFBLDRCQUNFQSwwREFBQSxDQUFDZSxxREFBVSxxQkFDVGYsMERBQUEsQ0FBQ2lELHNEQUFPO01BQUN5YSxFQUFFLDBCQUFBaFgsTUFBQSxDQUEwQnVGLEdBQUcsQ0FBQzBFLEdBQUcsQ0FBRztNQUFDM0ssU0FBUyxFQUFDO0lBQVUsZ0JBQ2xFaEcsMERBQUE7TUFBTXlILEtBQUssRUFBRTtRQUFFVCxRQUFRLEVBQUU7TUFBTztJQUFFLEdBQUMsTUFBVSxDQUN0QyxDQUNDLENBQ1IsQ0FDSyxDQUNYLENBQ0YsQ0FDTCxDQUNJLENBQ1IsRUFDQW9ILFFBQVEsSUFBSUEsUUFBUSxDQUFDNEMsTUFBTSxHQUFHLENBQUMsaUJBQzlCaFIsMERBQUEsZ0JBQ0dvTyxRQUFRLENBQUNqQyxHQUFHLENBQUVGLEdBQUcsaUJBQ2hCak0sMERBQUE7TUFBSXFhLEdBQUcsRUFBRXBPLEdBQUcsQ0FBQzBFO0lBQUksZ0JBQ2YzUSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsTUFBTTtRQUFFWixNQUFNLEVBQUU7TUFBaUI7SUFBRSxHQUFDLFFBQU0sRUFBQzVZLDZDQUFLLENBQUN3SCxHQUFHLENBQUM2TCxXQUFXLENBQUMsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBTSxDQUFDLGVBQ3BIaFksMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE1BQU07UUFBRVosTUFBTSxFQUFFO01BQWlCO0lBQUUsR0FBQyxhQUFXLEVBQUNwUixHQUFHLENBQUNnUixXQUFnQixDQUFDLGVBQzdGamQsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE1BQU07UUFBRVosTUFBTSxFQUFFO01BQWlCO0lBQUUsR0FBQyxXQUFTLGVBQUFyZCwwREFBQSxlQUFNLEdBQU8sQ0FBQyxLQUFDLEVBQUNpTSxHQUFHLENBQUNxTixZQUFpQixDQUFDLGVBQzNHdFosMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE1BQU07UUFBRVosTUFBTSxFQUFFO01BQWlCO0lBQUUsR0FBQyxTQUFPLGVBQUFyZCwwREFBQSxlQUFNLEdBQU8sQ0FBQyxLQUFDLEVBQUNpTSxHQUFHLENBQUNpUyxLQUFVLENBQUMsZUFDbEdsZSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsTUFBTTtRQUFFWixNQUFNLEVBQUU7TUFBaUI7SUFBRSxHQUFDLFlBQVUsZUFBQXJkLDBEQUFBLGVBQU0sR0FBTyxDQUFDLEtBQUMsRUFBQ2lNLEdBQUcsQ0FBQ3lOLFVBQWUsQ0FBQyxlQUMxRzFaLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxRQUFRO1FBQUVaLE1BQU0sRUFBRTtNQUFpQjtJQUFFLGdCQUMzRHJkLDBEQUFBLENBQUNxSCxXQUFXLHFCQUNWckgsMERBQUEsNEJBQ0VBLDBEQUFBLENBQUNlLHFEQUFVLHFCQUNUZiwwREFBQSxDQUFDaUQsc0RBQU87TUFBQ3lhLEVBQUUsMEJBQUFoWCxNQUFBLENBQTBCdUYsR0FBRyxDQUFDMEUsR0FBRyxDQUFHO01BQUMzSyxTQUFTLEVBQUM7SUFBVSxnQkFDbEVoRywwREFBQTtNQUFNeUgsS0FBSyxFQUFFO1FBQUVULFFBQVEsRUFBRTtNQUFPO0lBQUUsR0FBQyxNQUFVLENBQ3RDLENBQ0MsQ0FDUixDQUNLLENBQ1gsQ0FDRixDQUNMLENBQ0ksQ0FDUixFQUNBd0gsUUFBUSxJQUFJQSxRQUFRLENBQUN3QyxNQUFNLEdBQUcsQ0FBQyxpQkFDOUJoUiwwREFBQSxnQkFDR3dPLFFBQVEsQ0FBQ3JDLEdBQUcsQ0FBRUYsR0FBRyxpQkFDaEJqTSwwREFBQTtNQUFJcWEsR0FBRyxFQUFFcE8sR0FBRyxDQUFDMEU7SUFBSSxnQkFDZjNRLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxNQUFNO1FBQUVaLE1BQU0sRUFBRTtNQUFpQjtJQUFFLEdBQUMsUUFBTSxFQUFDNVksNkNBQUssQ0FBQ3dILEdBQUcsQ0FBQ2tTLFlBQVksQ0FBQyxDQUFDbkcsTUFBTSxDQUFDLFlBQVksQ0FBTSxDQUFDLGVBQ3JIaFksMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE1BQU07UUFBRVosTUFBTSxFQUFFO01BQWlCO0lBQUUsR0FBQyxjQUFZLEVBQUNwUixHQUFHLENBQUMyUixZQUFpQixDQUFDLGVBQy9GNWQsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE1BQU07UUFBRVosTUFBTSxFQUFFO01BQWlCO0lBQUUsR0FBQyxrQkFBZ0IsZUFBQXJkLDBEQUFBLGVBQU0sR0FBTyxDQUFDLEtBQUMsRUFBQ2lNLEdBQUcsQ0FBQ21TLGVBQW9CLENBQUMsZUFDckhwZSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsUUFBUTtRQUFFWixNQUFNLEVBQUU7TUFBaUI7SUFBRSxnQkFDM0RyZCwwREFBQSxDQUFDcUgsV0FBVyxxQkFDVnJILDBEQUFBLDRCQUNFQSwwREFBQSxDQUFDZSxxREFBVSxxQkFDVGYsMERBQUEsQ0FBQ2lELHNEQUFPO01BQUN5YSxFQUFFLDRCQUFBaFgsTUFBQSxDQUE0QnVGLEdBQUcsQ0FBQzBFLEdBQUcsQ0FBRztNQUFDM0ssU0FBUyxFQUFDO0lBQVUsZ0JBQ3BFaEcsMERBQUE7TUFBTXlILEtBQUssRUFBRTtRQUFFVCxRQUFRLEVBQUU7TUFBTztJQUFFLEdBQUMsTUFBVSxDQUN0QyxDQUNDLENBQ1IsQ0FDSyxDQUNYLENBQ0YsQ0FDTCxDQUNJLENBQ1IsRUFDQTRILFdBQVcsSUFBSUEsV0FBVyxDQUFDb0MsTUFBTSxHQUFHLENBQUMsaUJBQ3BDaFIsMERBQUEsZ0JBQ0c0TyxXQUFXLENBQUN6QyxHQUFHLENBQUVGLEdBQUcsaUJBQ25Cak0sMERBQUE7TUFBSXFhLEdBQUcsRUFBRXBPLEdBQUcsQ0FBQzBFO0lBQUksZ0JBQ2YzUSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsTUFBTTtRQUFFWixNQUFNLEVBQUU7TUFBaUI7SUFBRSxHQUFDLFFBQU0sRUFBQzVZLDZDQUFLLENBQUN3SCxHQUFHLENBQUNvUyxXQUFXLENBQUMsQ0FBQ3JHLE1BQU0sQ0FBQyxZQUFZLENBQU0sQ0FBQyxlQUNwSGhZLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxNQUFNO1FBQUVaLE1BQU0sRUFBRTtNQUFpQjtJQUFFLEdBQUMsbUJBQWlCLEVBQUN6RixNQUFNLENBQUMzTCxHQUFHLENBQUM2UixhQUFhLENBQUMsQ0FBQ2pHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFNLENBQUMsZUFDOUg3WCwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsTUFBTTtRQUFFWixNQUFNLEVBQUU7TUFBaUI7SUFBRSxHQUFDLFdBQVMsZUFBQXJkLDBEQUFBLGVBQU0sR0FBTyxDQUFDLEtBQUMsRUFBQ2lNLEdBQUcsQ0FBQ3FOLFlBQWlCLENBQUMsZUFDM0d0WiwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsUUFBUTtRQUFFWixNQUFNLEVBQUU7TUFBaUI7SUFBRSxnQkFDM0RyZCwwREFBQSxDQUFDcUgsV0FBVyxxQkFDVnJILDBEQUFBLDRCQUNFQSwwREFBQSxDQUFDZSxxREFBVSxxQkFDVGYsMERBQUEsQ0FBQ2lELHNEQUFPO01BQUN5YSxFQUFFLGlDQUFBaFgsTUFBQSxDQUFpQ3VGLEdBQUcsQ0FBQzBFLEdBQUcsQ0FBRztNQUFDM0ssU0FBUyxFQUFDO0lBQVUsZ0JBQ3pFaEcsMERBQUE7TUFBTXlILEtBQUssRUFBRTtRQUFFVCxRQUFRLEVBQUU7TUFBTztJQUFFLEdBQUMsTUFBVSxDQUN0QyxDQUNDLENBQ1IsQ0FDSyxDQUNYLENBQ0YsQ0FDTCxDQUNJLENBRUosQ0FBQyxHQUNOLElBQUksZUFFVmhILDBEQUFBLENBQUNxSCxXQUFXO01BQUNpWCxLQUFLLEVBQUMsT0FBTztNQUFDQyxTQUFTLEVBQUM7SUFBUSxnQkFDM0N2ZSwwREFBQSxDQUFDZSxxREFBVTtNQUFDdWEsT0FBTyxFQUFFQSxDQUFBLEtBQU1sRSxhQUFhLENBQUMsQ0FBQyxDQUFFO01BQUMzUCxLQUFLLEVBQUU7UUFBRUMsUUFBUSxFQUFFLFVBQVU7UUFBRThXLEtBQUssRUFBRTtNQUFRO0lBQUUsZ0JBQzNGeGUsMERBQUEsQ0FBQ3FGLGtFQUFLO01BQUNvQyxLQUFLLEVBQUU7UUFBRVosS0FBSyxFQUFFO01BQVU7SUFBRSxDQUFFLENBQzNCLENBQ0QsQ0FDTixDQUdQLENBQUMsZUFDVDdHLDBEQUFBLFdBQUssQ0FBQyxlQUVOQSwwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUU4SyxNQUFNLEVBQUUsT0FBTztRQUFFMkosUUFBUSxFQUFFLFFBQVE7UUFBRXVDLFNBQVMsRUFBRSxRQUFRO1FBQUUzVyxLQUFLLEVBQUUsTUFBTTtRQUFFNFcsVUFBVSxFQUFFO01BQVE7SUFBRSxnQkFDM0cxZSwwREFBQSxDQUFDaUMscURBQUc7TUFBQzBjLE1BQU07SUFBQSxnQkFDVDNlLDBEQUFBO01BQU80ZSxHQUFHLEVBQUU5TSxZQUFhO01BQUM5TCxTQUFTLEVBQUM7SUFBZ0IsZ0JBQ2xEaEcsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQSxXQUFRLENBQ04sQ0FDQyxDQUFDLGVBQ1JBLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFb1gsWUFBWSxFQUFFO01BQWtCO0lBQUUsZ0JBQzdDN2UsMERBQUE7TUFBS2dHLFNBQVMsRUFBQztJQUFhLGdCQUMxQmhHLDBEQUFBLENBQUNPLDhEQUFXO01BQUN1ZSxRQUFRLEVBQUUsT0FBTzdTLEdBQUcsS0FBSyxXQUFXLEdBQUdBLEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFNlMsUUFBUSxHQUFHLE9BQU8vVCxJQUFJLEtBQUssV0FBVyxJQUFBMFIsS0FBQSxHQUFHMVIsSUFBSSxjQUFBMFIsS0FBQSx1QkFBSkEsS0FBQSxDQUFNcUMsUUFBUSxHQUFHO0lBQUcsQ0FBRSxDQUNySCxDQUNILENBQ0YsQ0FDQyxDQUFDLGVBQ1I5ZSwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQSwyQkFDRUEsMERBQUE7TUFBR2dHLFNBQVMsRUFBQztJQUFXLEdBQUMsV0FBWSxDQUFDLGVBQ3RDaEcsMERBQUE7TUFBS2dHLFNBQVMsRUFBQyxTQUFTO01BQUN5QixLQUFLLEVBQUU7UUFBRXVXLFlBQVksRUFBRSxNQUFNO1FBQUV0VyxRQUFRLEVBQUU7TUFBVztJQUFFLGdCQUM3RTFILDBEQUFBO01BQVN5SCxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE1BQU07UUFBRXFULE9BQU8sRUFBRSxNQUFNO1FBQUVXLGNBQWMsRUFBRSxlQUFlO1FBQUVELFVBQVUsRUFBRSxZQUFZO1FBQUVyUyxTQUFTLEVBQUUsWUFBWTtRQUFFdVYsT0FBTyxFQUFFLEtBQUs7UUFBRWYsWUFBWSxFQUFFO01BQU87SUFBRSxnQkFDM0toZSwwREFBQTtNQUFTeUgsS0FBSyxFQUFFO1FBQUUwQixVQUFVLEVBQUVhLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLEtBQUs7UUFBRXRDLFFBQVEsRUFBRSxVQUFVO1FBQUVzWCxVQUFVLEVBQUUsSUFBSTtRQUFFbFgsS0FBSyxFQUFFLGFBQWE7UUFBRW1YLFFBQVEsRUFBRTtNQUFRO0lBQUUsZ0JBQzdKamYsMERBQUEseUJBQ0VBLDBEQUFBO01BQU15SCxLQUFLLEVBQUU7UUFBRVQsUUFBUSxFQUFFO01BQU87SUFBRSxHQUFDLGVBQW1CLENBQUMsS0FBQyxlQUFBaEgsMERBQUEsV0FBSyxDQUFDLGVBQzlEQSwwREFBQTtNQUFNeUgsS0FBSyxFQUFFO1FBQUVzVixVQUFVLEVBQUUsTUFBTTtRQUFFL1YsUUFBUSxFQUFFO01BQU87SUFBRSxHQUFFaUYsR0FBRyxDQUFDb0UsWUFBWSxDQUFDQSxZQUFZLENBQUM4SCxXQUFXLENBQUMsQ0FBUSxDQUFDLGVBQzNHblksMERBQUEsV0FBSyxDQUFDLGVBQ05BLDBEQUFBO01BQU15SCxLQUFLLEVBQUU7UUFBRVQsUUFBUSxFQUFFO01BQU87SUFBRSxHQUFFaUYsR0FBRyxDQUFDb0UsWUFBWSxDQUFDNkgsY0FBYyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxFQUFDLEdBQUMsRUFBQ2xNLEdBQUcsQ0FBQ29FLFlBQVksQ0FBQytILFdBQVcsQ0FBQ0QsV0FBVyxDQUFDLENBQVEsQ0FDcEksQ0FFSSxDQUFDLGVBRVZuWSwwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUUwQixVQUFVLEVBQUUsTUFBTTtRQUFFb1MsV0FBVyxFQUFFdlIsTUFBTSxDQUFDLCtCQUErQixDQUFDLElBQUksS0FBSztRQUFFbEMsS0FBSyxFQUFFLGFBQWE7UUFBRXFULE9BQU8sRUFBRSxPQUFPO1FBQUU2QyxZQUFZLEVBQUU7TUFBTTtJQUFFLGdCQUM3SmhlLDBEQUFBO01BQUt5SCxLQUFLLEVBQUU7UUFBRTBULE9BQU8sRUFBRSxNQUFNO1FBQUUrRCxtQkFBbUIsRUFBRSxVQUFVO1FBQUVDLFNBQVMsRUFBRSxNQUFNO1FBQUVDLE1BQU0sRUFBRSxLQUFLO1FBQUVwWSxRQUFRLEVBQUUsS0FBSztRQUFFcVksWUFBWSxFQUFFLE9BQU87UUFBRTNYLFFBQVEsRUFBRTtNQUFXO0lBQUUsZ0JBQy9KMUgsMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFc1YsVUFBVSxFQUFFLE1BQU07UUFBRWtCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxhQUFnQixDQUFDLGVBQ3hFamUsMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFO01BQU87SUFBRSxHQUFDLElBQUUsRUFBQ3JHLE1BQU0sQ0FBQzNMLEdBQUcsQ0FBQ21ELGNBQWMsQ0FBQyxDQUFDeUksUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQU8sQ0FBQyxlQUUxRjdYLDBEQUFBO01BQUt5SCxLQUFLLEVBQUU7UUFBRXNWLFVBQVUsRUFBRSxNQUFNO1FBQUVrQixTQUFTLEVBQUU7TUFBTztJQUFFLEdBQUMsTUFBUyxDQUFDLGVBQ2pFamUsMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFO01BQU87SUFBRSxHQUFFeFosNkNBQUssQ0FBQ3dILEdBQUcsQ0FBQzhMLFlBQVksQ0FBQyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFPLENBQUMsRUFFdEYvTCxHQUFHLENBQUN3TSxlQUFlLEtBQUssRUFBRSxpQkFDekJ6WSwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFc1YsVUFBVSxFQUFFLE1BQU07UUFBRWtCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxTQUFZLENBQUMsZUFDcEVqZSwwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsTUFBTTtRQUFFc0IsU0FBUyxFQUFFLFlBQVk7UUFBRXBELFFBQVEsRUFBRTtNQUFRO0lBQUUsR0FBRWxRLEdBQUcsQ0FBQ3dNLGVBQWUsQ0FBQ04sV0FBVyxDQUFDLENBQU8sQ0FDdkgsQ0FDSCxFQUVBbE0sR0FBRyxDQUFDME0sY0FBYyxLQUFLLEVBQUUsaUJBQ3hCM1ksMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBO01BQUt5SCxLQUFLLEVBQUU7UUFBRXNWLFVBQVUsRUFBRSxNQUFNO1FBQUVrQixTQUFTLEVBQUU7TUFBTztJQUFFLEdBQUMsUUFBVyxDQUFDLGVBQ25FamUsMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE1BQU07UUFBRXNCLFNBQVMsRUFBRSxZQUFZO1FBQUVwRCxRQUFRLEVBQUU7TUFBUTtJQUFFLEdBQUVsUSxHQUFHLENBQUMwTSxjQUFjLENBQUNSLFdBQVcsQ0FBQyxDQUFPLENBQ3RILENBRUMsQ0FDRixDQUNFLENBQUMsZUFDVm5ZLDBEQUFBO01BQVN5SCxLQUFLLEVBQUUsQ0FBQztJQUFFLEdBRWZ3RSxHQUFHLENBQUN1TixRQUFRLEtBQUswRCxTQUFTLGdCQUN4QmxkLDBEQUFBO01BQU95SCxLQUFLLEVBQUU7UUFBRUMsUUFBUSxFQUFFLFVBQVU7UUFBRVYsUUFBUSxFQUFFLEtBQUs7UUFBRXdYLEtBQUssRUFBRSxNQUFNO1FBQUU1VyxJQUFJLEVBQUUsR0FBRztRQUFFRSxLQUFLLEVBQUUsS0FBSztRQUFFa1csWUFBWSxFQUFFO01BQU07SUFBRSxnQkFDbkhoZSwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBLGFBQUksTUFBUSxDQUFDLGVBQ2JBLDBEQUFBLGFBQUtpTSxHQUFHLENBQUN1TixRQUFRLEtBQUswRCxTQUFTLEdBQUdqUixHQUFHLENBQUN1TixRQUFRLEdBQUcsRUFBTyxDQUN0RCxDQUNDLENBQ0YsQ0FBQyxHQUNOLEVBQUUsZUFFUnhaLDBEQUFBO01BQU9nRyxTQUFTLEVBQUMsYUFBYTtNQUFDeUIsS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxNQUFNO1FBQUUwWCxLQUFLLEVBQUUsTUFBTTtRQUFFeFksUUFBUSxFQUFFLEtBQUs7UUFBRWdYLFlBQVksRUFBRSxLQUFLO1FBQUVYLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRW9DLGNBQWMsRUFBRTtNQUFXO0lBQUUsZ0JBQ2pLemYsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUU0VixNQUFNLEVBQUUsZ0JBQWdCO1FBQUV6VyxlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUMsR0FBSyxDQUFDLGVBQzNFNUcsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLFFBQVE7UUFBRVosTUFBTSxFQUFFLGdCQUFnQjtRQUFFelcsZUFBZSxFQUFFO01BQVU7SUFBRSxHQUFDLE1BQVEsQ0FBQyxlQUNuRzVHLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRTRWLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRXpXLGVBQWUsRUFBRTtNQUFVO0lBQUUsR0FBQyxhQUFlLENBQUMsZUFDckY1RywwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsT0FBTztRQUFFWixNQUFNLEVBQUUsZ0JBQWdCO1FBQUV6VyxlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUMsS0FBTyxDQUFDLGVBQ2pHNUcsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVosTUFBTSxFQUFFLGdCQUFnQjtRQUFFelcsZUFBZSxFQUFFO01BQVU7SUFBRSxHQUFDLE1BQVEsQ0FBQyxFQUNqR2lLLFlBQVksaUJBQUk3USwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsT0FBTztRQUFFWixNQUFNLEVBQUUsZ0JBQWdCO1FBQUV6VyxlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUMsVUFBWSxDQUFDLGVBQ3ZINUcsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVosTUFBTSxFQUFFLGdCQUFnQjtRQUFFelcsZUFBZSxFQUFFO01BQVU7SUFBRSxHQUFDLE9BQVMsQ0FDaEcsQ0FDQyxDQUFDLGVBQ1I1RywwREFBQSxpQkFBQTBjLFVBQUEsR0FDR3pRLEdBQUcsQ0FBQ3VELEtBQUssY0FBQWtOLFVBQUEsdUJBQVRBLFVBQUEsQ0FBV3ZRLEdBQUcsQ0FBQyxDQUFDZ0YsSUFBSSxFQUFFMEgsQ0FBQyxLQUFLO01BQzNCLElBQU02RyxXQUFXLEdBQUd2UyxJQUFJLENBQUMrRCxJQUFJLENBQUV5TyxLQUFLLElBQUtBLEtBQUssQ0FBQ2hQLEdBQUcsS0FBS1EsSUFBSSxDQUFDMkgsUUFBUSxDQUFDbkksR0FBRyxDQUFDO01BQ3pFLG9CQUNFM1EsMERBQUE7UUFBSXFhLEdBQUcsRUFBRWxKLElBQUksQ0FBQ3lPO01BQU0sR0FFaEJ6TyxJQUFJLENBQUM0SCxlQUFlLEtBQUssWUFBWSxnQkFDbkMvWSwwREFBQSxDQUFBQSx1REFBQSxRQUVJbVIsSUFBSSxDQUFDME8sY0FBYyxLQUFLM0MsU0FBUyxnQkFFN0JsZCwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUE7UUFBSXlILEtBQUssRUFBRTtVQUFFd1csU0FBUyxFQUFFO1FBQVM7TUFBRSxnQkFBQ2plLDBEQUFBLGVBQU82WSxDQUFDLEdBQUcsQ0FBUSxDQUFLLENBQUMsZUFDN0Q3WSwwREFBQTtRQUFJeUgsS0FBSyxFQUFFO1VBQUV3VyxTQUFTLEVBQUUsUUFBUTtVQUFFWixNQUFNLEVBQUU7UUFBaUIsQ0FBRTtRQUFDeUMsT0FBTyxFQUFFO01BQUUsR0FBRTNPLElBQUksQ0FBQzBPLGNBQW1CLENBQ25HLENBQUMsZ0JBSUg3ZiwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUE7UUFBSXlILEtBQUssRUFBRTtVQUFFd1csU0FBUyxFQUFFLFFBQVE7VUFBRW5XLEtBQUssRUFBRTtRQUFPO01BQUUsZ0JBQUM5SCwwREFBQSxlQUFPNlksQ0FBQyxHQUFHLENBQVEsQ0FBSyxDQUFDLGVBQzVFN1ksMERBQUE7UUFBSXlILEtBQUssRUFBRTtVQUFFSyxLQUFLLEVBQUUsT0FBTztVQUFFaVksVUFBVSxFQUFFO1FBQWlCO01BQUUsZ0JBQUUvZiwwREFBQTtRQUFNMmUsTUFBTSxFQUFFeE4sSUFBSSxDQUFDMkgsUUFBUSxHQUFHM0gsSUFBSSxDQUFDMkgsUUFBUSxDQUFDQSxRQUFRLEtBQUssT0FBTyxHQUFHO01BQUcsR0FBRTNILElBQUksQ0FBQzJILFFBQVEsQ0FBQ0EsUUFBUSxDQUFDWCxXQUFXLENBQUMsQ0FBUSxDQUFLLENBQUMsZUFDdkxuWSwwREFBQTtRQUFJeUgsS0FBSyxFQUFFO1VBQUV3VyxTQUFTLEVBQUUsTUFBTTtVQUFFblcsS0FBSyxFQUFFLE9BQU87VUFBRWlZLFVBQVUsRUFBRTtRQUFpQjtNQUFFLGdCQUFDL2YsMERBQUEsZUFBT21SLElBQUksQ0FBQzRILGVBQWUsQ0FBQ1osV0FBVyxDQUFDLENBQVEsQ0FBSyxDQUFDLGVBQ3RJblksMERBQUE7UUFBSXlILEtBQUssRUFBRTtVQUFFd1csU0FBUyxFQUFFLE9BQU87VUFBRW5XLEtBQUssRUFBRSxNQUFNO1VBQUVpWSxVQUFVLEVBQUU7UUFBaUI7TUFBRSxnQkFBQy9mLDBEQUFBLGVBQU9tUixJQUFJLENBQUM2SCxPQUFPLEVBQUMsR0FBQyxFQUFDMEcsV0FBVyxLQUFLeEMsU0FBUyxHQUFHd0MsV0FBVyxDQUFDTSxJQUFJLENBQUM3SCxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQVMsQ0FBSyxDQUFDLGVBQ2xMblksMERBQUE7UUFBSXlILEtBQUssRUFBRTtVQUFFd1csU0FBUyxFQUFFLE9BQU87VUFBRW5XLEtBQUssRUFBRSxNQUFNO1VBQUVpWSxVQUFVLEVBQUU7UUFBaUI7TUFBRSxnQkFBQy9mLDBEQUFBO1FBQU07TUFBVyxHQUFDLEdBQU8sQ0FBQyxlQUFBQSwwREFBQSxlQUFPbVIsSUFBSSxDQUFDOEgsUUFBZSxDQUFLLENBQUMsRUFDMUlwSSxZQUFZLGlCQUFJN1EsMERBQUE7UUFBSXlILEtBQUssRUFBRTtVQUFFd1csU0FBUyxFQUFFLE9BQU87VUFBRThCLFVBQVUsRUFBRTtRQUFpQjtNQUFFLGdCQUFDL2YsMERBQUE7UUFBTTtNQUFXLEdBQUMsR0FBTyxDQUFDLGVBQUFBLDBEQUFBLGVBQU9tUixJQUFJLENBQUNKLFlBQW1CLENBQUssQ0FBQyxlQUNqSi9RLDBEQUFBO1FBQUl5SCxLQUFLLEVBQUU7VUFBRXdXLFNBQVMsRUFBRSxPQUFPO1VBQUVuVyxLQUFLLEVBQUUsT0FBTztVQUFFaVksVUFBVSxFQUFFO1FBQWlCO01BQUUsZ0JBQUMvZiwwREFBQTtRQUFNO01BQVcsR0FBQyxHQUFPLENBQUMsZUFBQUEsMERBQUEsZUFBT21SLElBQUksQ0FBQytILFVBQVUsQ0FBQytHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzNQLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBSyxDQUM5TCxDQUdSLENBQUMsZ0JBQ0R0USwwREFBQSxDQUFBQSx1REFBQSxxQkFDRkEsMERBQUE7UUFBSXlILEtBQUssRUFBRTtVQUFFd1csU0FBUyxFQUFFLFFBQVE7VUFBRThCLFVBQVUsRUFBRTtRQUFpQjtNQUFFLGdCQUFDL2YsMERBQUEsZUFBTzZZLENBQUMsR0FBRyxDQUFRLENBQUssQ0FBQyxlQUMzRjdZLDBEQUFBO1FBQUl5SCxLQUFLLEVBQUU7VUFBRXdXLFNBQVMsRUFBRSxNQUFNO1VBQUVaLE1BQU0sRUFBRTtRQUFpQixDQUFFO1FBQUN5QyxPQUFPLEVBQUVqUCxZQUFZLEdBQUcsQ0FBQyxHQUFHO01BQUUsZ0JBQUM3USwwREFBQSxlQUFPbVIsSUFBSSxDQUFDNEgsZUFBc0IsQ0FBSyxDQUFDLGVBQ25JL1ksMERBQUE7UUFBSXlILEtBQUssRUFBRTtVQUFFd1csU0FBUyxFQUFFLE9BQU87VUFBRVosTUFBTSxFQUFFO1FBQWlCO01BQUUsZ0JBQUNyZCwwREFBQTtRQUFNO01BQVcsR0FBQyxHQUFPLENBQUMsZUFBQUEsMERBQUEsZUFBT21SLElBQUksQ0FBQytILFVBQWlCLENBQUssQ0FDekgsQ0FFRixDQUFDO0lBRVQsQ0FDQSxDQUNLLENBQ0YsQ0FBQyxlQUNSbFosMERBQUE7TUFBT3lILEtBQUssRUFBRTtRQUFFSyxLQUFLLEVBQUUsTUFBTTtRQUFFMFgsS0FBSyxFQUFFLE1BQU07UUFBRXhZLFFBQVEsRUFBRSxLQUFLO1FBQUVrWixlQUFlLEVBQUU7TUFBUTtJQUFFLGdCQUN4RmxnQiwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBLFdBQVEsQ0FBQyxlQUNUQSwwREFBQSxXQUFRLENBQUMsZUFDVEEsMERBQUEsV0FBUSxDQUFDLGVBQ1RBLDBEQUFBLFdBQVEsQ0FBQyxlQUNUQSwwREFBQSxXQUFRLENBQUMsZUFDVEEsMERBQUEsV0FBUSxDQUNOLENBQ0MsQ0FBQyxlQUNSQSwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxNQUFNO1FBQUVuVyxLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUNnWSxPQUFPLEVBQUU7SUFBRSxHQUFFN1QsR0FBRyxDQUFDa1UsSUFBUyxDQUFDLGVBQzdFbmdCLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxPQUFPO1FBQUVZLFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNpQixPQUFPLEVBQUU7SUFBRSxnQkFDNUU5ZiwwREFBQSxlQUFNLFdBRUosRUFBQ2lNLEdBQUcsQ0FBQ21VLFFBQVEsR0FBRyxFQUFFLGdCQUFHcGdCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUFFQSwwREFBQSxXQUFLLENBQUMsZUFBQUEsMERBQUE7TUFBTXlILEtBQUssRUFBRTtRQUFFWixLQUFLLEVBQUU7TUFBTztJQUFFLEdBQUMsaUJBQXFCLENBQUcsQ0FDakYsQ0FDSixDQUFDLGVBQ0w3RywwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsT0FBTztRQUFFWSxZQUFZLEVBQUU7TUFBaUIsQ0FBRTtNQUFDaUIsT0FBTyxFQUFFO0lBQUUsZ0JBQUM5ZiwwREFBQTtNQUFNO0lBQVcsR0FBQyxHQUFPLENBQUMsZUFBQUEsMERBQUEsZUFBT2lNLEdBQUcsQ0FBQ21OLFFBQWUsQ0FBSyxDQUN0SSxDQUFDLEVBRUhuTixHQUFHLENBQUNvVSxRQUFRLGdCQUVScmdCLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsTUFBTTtRQUFFblcsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDZ1ksT0FBTyxFQUFFO0lBQUUsQ0FBSyxDQUFDLGVBQ25FOWYsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2lCLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUEsZUFBTSxVQUFjLENBQUssQ0FBQyxlQUN6R0EsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2lCLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUE7TUFBTTtJQUFXLEdBQUMsR0FBTyxDQUFDLGVBQUFBLDBEQUFBLGVBQU9pTSxHQUFHLENBQUNvVSxRQUFRLENBQUNKLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzNQLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBSyxDQUN2TCxDQUFDLEdBRUwsRUFBRSxFQUdOckUsR0FBRyxDQUFDcVUsZ0JBQWdCLGdCQUVoQnRnQiwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE1BQU07UUFBRW5XLEtBQUssRUFBRTtNQUFRLENBQUU7TUFBQ2dZLE9BQU8sRUFBRTtJQUFFLENBQUssQ0FBQyxlQUNuRTlmLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxPQUFPO1FBQUVZLFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNpQixPQUFPLEVBQUU7SUFBRSxnQkFBQzlmLDBEQUFBLGVBQU9pTSxHQUFHLENBQUNzVSxVQUFpQixDQUFLLENBQUMsZUFDakh2Z0IsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2lCLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUE7TUFBTTtJQUFXLEdBQUMsR0FBTyxDQUFDLGVBQUFBLDBEQUFBLGVBQU9pTSxHQUFHLENBQUNxVSxnQkFBZ0IsQ0FBQ0wsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDM1AsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFLLENBQy9MLENBQUMsR0FFTCxFQUFFLEVBR05yRSxHQUFHLENBQUNtVSxRQUFRLGdCQUVScGdCLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsTUFBTTtRQUFFblcsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDZ1ksT0FBTyxFQUFFO0lBQUUsQ0FBSyxDQUFDLGVBQ25FOWYsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2lCLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUEsZUFBTSxXQUFlLENBQUssQ0FBQyxlQUMxR0EsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2lCLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUE7TUFBTTtJQUFXLEdBQUMsR0FBTyxDQUFDLGVBQUFBLDBEQUFBLGVBQU9pTSxHQUFHLENBQUN1VSxHQUFHLEdBQUd2VSxHQUFHLENBQUN1VSxHQUFHLENBQUNQLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzNQLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFhLENBQUssQ0FDck0sQ0FBQyxHQUVMLEVBQUUsZUFFUnRRLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsTUFBTTtRQUFFblcsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDZ1ksT0FBTyxFQUFFO0lBQUUsQ0FBSyxDQUFDLGVBQ25FOWYsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2lCLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUEsZUFBTSxPQUFXLENBQUssQ0FBQyxlQUN0R0EsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2lCLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUE7TUFBTTtJQUFXLEdBQUMsR0FBTyxDQUFDLGVBQUFBLDBEQUFBLGVBQU9pTSxHQUFHLENBQUNxTixZQUFZLEdBQUdyTixHQUFHLENBQUNxTixZQUFZLENBQUMyRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMzUCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBUyxDQUFLLENBQ25OLENBQUMsRUFFSHJFLEdBQUcsQ0FBQ2lTLEtBQUssZ0JBRUxsZSwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE1BQU07UUFBRW5XLEtBQUssRUFBRTtNQUFRLENBQUU7TUFBQ2dZLE9BQU8sRUFBRTtJQUFFLENBQUssQ0FBQyxlQUNuRTlmLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxPQUFPO1FBQUVZLFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNpQixPQUFPLEVBQUU7SUFBRSxnQkFBQzlmLDBEQUFBLGVBQU0sYUFBaUIsQ0FBSyxDQUFDLGVBQzVHQSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsT0FBTztRQUFFWSxZQUFZLEVBQUU7TUFBaUIsQ0FBRTtNQUFDaUIsT0FBTyxFQUFFO0lBQUUsZ0JBQUM5ZiwwREFBQTtNQUFNO0lBQVcsR0FBQyxHQUFPLENBQUMsZUFBQUEsMERBQUEsZUFBT2lNLEdBQUcsQ0FBQ2lTLEtBQUssQ0FBQytCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzNQLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBSyxDQUNwTCxDQUFDLEdBRUwsRUFBRSxlQUVSdFEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxNQUFNO1FBQUVuVyxLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUNnWSxPQUFPLEVBQUU7SUFBRSxDQUFLLENBQUMsZUFDbkU5ZiwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsT0FBTztRQUFFWSxZQUFZLEVBQUUsZ0JBQWdCO1FBQUVoWSxLQUFLLEVBQUUsU0FBUztRQUFFa1csVUFBVSxFQUFFO01BQU8sQ0FBRTtNQUFDK0MsT0FBTyxFQUFFO0lBQUUsZ0JBQUM5ZiwwREFBQSxlQUFNLGFBQWlCLENBQUssQ0FBQyxlQUNsSkEsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFLGdCQUFnQjtRQUFFaFksS0FBSyxFQUFFLFNBQVM7UUFBRWtXLFVBQVUsRUFBRTtNQUFPLENBQUU7TUFBQytDLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUE7TUFBTTtJQUFXLEdBQUMsR0FBTyxDQUFDLGVBQUFBLDBEQUFBLGVBQU9pTSxHQUFHLENBQUN5TixVQUFVLEtBQUt3RCxTQUFTLEdBQUdqUixHQUFHLENBQUN5TixVQUFVLENBQUN1RyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMzUCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBUyxDQUFLLENBQ25RLENBQUMsZUFDTHRRLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsTUFBTTtRQUFFblcsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDZ1ksT0FBTyxFQUFFO0lBQUUsQ0FBSyxDQUFDLGVBQ25FOWYsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFO01BQVMsQ0FBRTtNQUFDNkIsT0FBTyxFQUFFO0lBQUUsZ0JBQUM5ZiwwREFBQSxlQUFNLGdCQUFvQixDQUFLLENBQUMsZUFDaEZBLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxNQUFNO1FBQUVuVyxLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUNnWSxPQUFPLEVBQUU7SUFBRSxnQkFBQzlmLDBEQUFBLGVBQU9pTSxHQUFHLENBQUMyTixNQUFhLENBQUssQ0FDekYsQ0FDQyxDQUNGLENBQUMsZUFDUjVaLDBEQUFBO01BQVN5SCxLQUFLLEVBQUU7UUFBRStXLEtBQUssRUFBRSxNQUFNO1FBQUV4WCxRQUFRLEVBQUUsS0FBSztRQUFFaVgsU0FBUyxFQUFFO01BQU87SUFBRSxnQkFDcEVqZSwwREFBQTtNQUFHeUgsS0FBSyxFQUFFO1FBQUV1WCxVQUFVLEVBQUUsTUFBTTtRQUFFakMsVUFBVSxFQUFFO01BQU87SUFBRSxHQUFDLHNCQUNoQyxlQUFBL2MsMERBQUEsV0FBSyxDQUFDLDhCQUNBLGVBQUFBLDBEQUFBLFdBQUssQ0FBQyx5Q0FDSyxlQUFBQSwwREFBQSxXQUFLLENBQUMsMkJBRTFDLENBQUMsZUFDSkEsMERBQUE7TUFBR3lILEtBQUssRUFBRTtRQUFFc1YsVUFBVSxFQUFFO01BQU87SUFBRSxHQUFDLHFCQUFzQixDQUFDLGVBQ3pEL2MsMERBQUEsWUFBSWlNLEdBQUcsQ0FBQ3dVLEtBQUssQ0FBQ3RJLFdBQVcsQ0FBQyxDQUFLLENBQ3hCLENBQ0YsQ0FDTixDQUNGLENBQ0gsQ0FDRixDQUNDLENBQUMsRUFDUGxNLEdBQUcsQ0FBQ3lVLGFBQWEsaUJBQ2hCMWdCLDBEQUFBO01BQU95SCxLQUFLLEVBQUU7UUFBRWtaLGVBQWUsRUFBRTtNQUFTO0lBQUUsZ0JBQzFDM2dCLDBEQUFBLDBCQUNFQSwwREFBQSwwQkFDRUEsMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFc1gsT0FBTyxFQUFFLFVBQVU7UUFBRTVELE9BQU8sRUFBRSxNQUFNO1FBQUV5RixhQUFhLEVBQUUsUUFBUTtRQUFFaGEsZUFBZSxFQUFFO01BQVE7SUFBRSxnQkFFdEc1RywwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUVvWCxZQUFZLEVBQUUsbUJBQW1CO1FBQUVnQyxhQUFhLEVBQUUsTUFBTTtRQUFFN0MsWUFBWSxFQUFFLE1BQU07UUFBRTdDLE9BQU8sRUFBRSxNQUFNO1FBQUVXLGNBQWMsRUFBRSxlQUFlO1FBQUVELFVBQVUsRUFBRTtNQUFTO0lBQUUsZ0JBQ3JLN2IsMERBQUEsQ0FBQ08sOERBQVc7TUFBQ3VlLFFBQVEsRUFBRSxPQUFPN1MsR0FBRyxLQUFLLFdBQVcsR0FBR0EsR0FBRyxhQUFIQSxHQUFHLHVCQUFIQSxHQUFHLENBQUU2UyxRQUFRLEdBQUcsT0FBTy9ULElBQUksS0FBSyxXQUFXLElBQUE0UixNQUFBLEdBQUc1UixJQUFJLGNBQUE0UixNQUFBLHVCQUFKQSxNQUFBLENBQU1tQyxRQUFRLEdBQUc7SUFBRyxDQUFFLENBQ3JILENBQUMsZUFHTjllLDBEQUFBO01BQUt5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxPQUFPO1FBQUVELFlBQVksRUFBRTtNQUFNO0lBQUUsZ0JBQ3REaGUsMERBQUE7TUFBR3lILEtBQUssRUFBRTtRQUFFVCxRQUFRLEVBQUUsTUFBTTtRQUFFOFosTUFBTSxFQUFFO01BQUU7SUFBRSxHQUFDLGNBQVksRUFBQ3JjLDZDQUFLLENBQUN3SCxHQUFHLENBQUM4TCxZQUFZLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBSyxDQUN2RyxDQUFDLGVBR05oWSwwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUV1VyxZQUFZLEVBQUU7TUFBTTtJQUFFLGdCQUNsQ2hlLDBEQUFBO01BQUd5SCxLQUFLLEVBQUU7UUFBRVQsUUFBUSxFQUFFLE1BQU07UUFBRStWLFVBQVUsRUFBRSxNQUFNO1FBQUUrRCxNQUFNLEVBQUU7TUFBVTtJQUFFLEdBQUMsTUFBSSxFQUFDN1UsR0FBRyxDQUFDb0UsWUFBWSxDQUFDQSxZQUFZLENBQUM4SCxXQUFXLENBQUMsQ0FBSyxDQUFDLGVBQzVIblksMERBQUE7TUFBR3lILEtBQUssRUFBRTtRQUFFVCxRQUFRLEVBQUUsTUFBTTtRQUFFOFosTUFBTSxFQUFFO01BQUU7SUFBRSxHQUFFN1UsR0FBRyxDQUFDb0UsWUFBWSxDQUFDNkgsY0FBYyxDQUFDQyxXQUFXLENBQUMsQ0FBSyxDQUFDLGVBQzlGblksMERBQUE7TUFBR3lILEtBQUssRUFBRTtRQUFFVCxRQUFRLEVBQUUsTUFBTTtRQUFFOFosTUFBTSxFQUFFO01BQUU7SUFBRSxHQUFFN1UsR0FBRyxDQUFDb0UsWUFBWSxDQUFDK0gsV0FBVyxDQUFDRCxXQUFXLENBQUMsQ0FBSyxDQUN2RixDQUFDLGVBR05uWSwwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUV1VyxZQUFZLEVBQUU7TUFBTTtJQUFFLGdCQUNsQ2hlLDBEQUFBO01BQUd5SCxLQUFLLEVBQUU7UUFBRVQsUUFBUSxFQUFFLE1BQU07UUFBRStWLFVBQVUsRUFBRSxNQUFNO1FBQUVnRSxjQUFjLEVBQUUsV0FBVztRQUFFbGEsS0FBSyxFQUFFLFNBQVM7UUFBRWlhLE1BQU0sRUFBRTtNQUFFO0lBQUUsR0FBQyx1QkFDdkYsRUFBQ2xKLE1BQU0sQ0FBQzNMLEdBQUcsQ0FBQ21ELGNBQWMsQ0FBQyxDQUFDeUksUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBQyxLQUFHLEVBQUM1TCxHQUFHLENBQUN3TSxlQUFlLENBQUNOLFdBQVcsQ0FBQyxDQUNyRyxDQUNBLENBQUMsZUFHTm5ZLDBEQUFBO01BQUt5SCxLQUFLLEVBQUU7UUFDVjhCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCeVYsVUFBVSxFQUFFLEtBQUs7UUFDakJoWSxRQUFRLEVBQUUsTUFBTTtRQUNoQkgsS0FBSyxFQUFFLE1BQU07UUFDYm9YLFNBQVMsRUFBRSxTQUFTO1FBQ3BCK0MsVUFBVSxFQUFFO01BQ2Q7SUFBRSxHQUNDL1UsR0FBRyxDQUFDZ1YsY0FDRixDQUFDLGVBR05qaEIsMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFc1csU0FBUyxFQUFFLE1BQU07UUFBRW1ELFVBQVUsRUFBRSxLQUFLO1FBQUVqRCxTQUFTLEVBQUU7TUFBUTtJQUFFLGdCQUN2RWplLDBEQUFBO01BQUd5SCxLQUFLLEVBQUU7UUFBRXNWLFVBQVUsRUFBRSxNQUFNO1FBQUUvVixRQUFRLEVBQUU7TUFBTztJQUFFLEdBQUMsZ0JBQWlCLENBQUMsZUFDdEVoSCwwREFBQTtNQUFHeUgsS0FBSyxFQUFFO1FBQUVaLEtBQUssRUFBRSxTQUFTO1FBQUVrVyxVQUFVLEVBQUU7TUFBTztJQUFFLEdBQUMsa0JBQW1CLENBQ3BFLENBQ0YsQ0FDSCxDQUNGLENBQ0MsQ0FDUixlQUNEL2MsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQSwwQkFDRUEsMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFQyxRQUFRLEVBQUUsVUFBVTtRQUFFcVcsU0FBUyxFQUFFO01BQU87SUFBRSxnQkFDdEQvZCwwREFBQTtNQUFHMmUsTUFBTTtJQUFBLEdBQUMsS0FBTSxDQUFDLGVBQ2pCM2UsMERBQUE7TUFBRzJlLE1BQU07SUFBQSxHQUFDLEtBQU0sQ0FBQyxlQUNqQjNlLDBEQUFBLFdBQUssQ0FBQyxlQUNOQSwwREFBQTtNQUFTeUgsS0FBSyxFQUFFO1FBQUVDLFFBQVEsRUFBRSxPQUFPO1FBQUV5WixNQUFNLEVBQUUsQ0FBQztRQUFFdlosSUFBSSxFQUFFLENBQUM7UUFBRXdaLEtBQUssRUFBRSxDQUFDO1FBQUV0RixjQUFjLEVBQUUsUUFBUTtRQUFFWCxPQUFPLEVBQUUsTUFBTTtRQUFFVSxVQUFVLEVBQUUsUUFBUTtRQUFFOEIsR0FBRyxFQUFFO01BQU87SUFBRSxnQkFDaEozZCwwREFBQTtNQUFHeUgsS0FBSyxFQUFFO1FBQUUwVCxPQUFPLEVBQUUsTUFBTTtRQUFFd0MsR0FBRyxFQUFFLEtBQUs7UUFBRTlCLFVBQVUsRUFBRTtNQUFTO0lBQUUsZ0JBQzlEN2IsMERBQUEsNEJBQU1BLDBEQUFBLENBQUN3RCxrRUFBUyxNQUFFLENBQU8sQ0FBQyxlQUMxQnhELDBEQUFBLGVBQU0seUJBQTZCLENBQ2xDLENBQUMsZUFDSkEsMERBQUE7TUFBR3lILEtBQUssRUFBRTtRQUFFMFQsT0FBTyxFQUFFLE1BQU07UUFBRXdDLEdBQUcsRUFBRSxLQUFLO1FBQUU5QixVQUFVLEVBQUU7TUFBUztJQUFFLGdCQUM5RDdiLDBEQUFBLDRCQUFNQSwwREFBQSxDQUFDeUQsa0VBQVMsTUFBRSxDQUFPLENBQUMsZUFDMUJ6RCwwREFBQSxlQUFNLGtCQUFzQixDQUMzQixDQUFDLGVBQ0pBLDBEQUFBO01BQUd5SCxLQUFLLEVBQUU7UUFBRTBULE9BQU8sRUFBRSxNQUFNO1FBQUV3QyxHQUFHLEVBQUUsS0FBSztRQUFFOUIsVUFBVSxFQUFFO01BQVM7SUFBRSxnQkFDOUQ3YiwwREFBQSw0QkFBTUEsMERBQUEsQ0FBQzBELGdFQUFPLE1BQUUsQ0FBTyxDQUFDLGVBQ3hCMUQsMERBQUEsZUFBTSxxQkFBeUIsQ0FDOUIsQ0FDSSxDQUVOLENBQ0gsQ0FDRixDQUNDLENBQ0YsQ0FDSixDQUFDLGVBQ05BLDBEQUFBO01BQUtnRyxTQUFTLEVBQUM7SUFBZ0IsZ0JBQzdCaEcsMERBQUE7TUFBUWdHLFNBQVMsRUFBQztJQUFhLGdCQUM3QmhHLDBEQUFBLENBQUNPLDhEQUFXO01BQUN1ZSxRQUFRLEVBQUUsT0FBTzdTLEdBQUcsS0FBSyxXQUFXLEdBQUdBLEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFNlMsUUFBUSxHQUFHLE9BQU8vVCxJQUFJLEtBQUssV0FBVyxJQUFBNlIsTUFBQSxHQUFHN1IsSUFBSSxjQUFBNlIsTUFBQSx1QkFBSkEsTUFBQSxDQUFNa0MsUUFBUSxHQUFHO0lBQUcsQ0FBRSxDQUNsSCxDQUFDLGVBQ1Q5ZSwwREFBQSxXQUFLLENBQUMsZUFBQUEsMERBQUE7TUFBR2dHLFNBQVMsRUFBQztJQUFXLEdBQUMsV0FBWSxDQUFDLGVBQzVDaEcsMERBQUEsK0JBQ0VBLDBEQUFBO01BQVN5SCxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE1BQU07UUFBRXFULE9BQU8sRUFBRSxNQUFNO1FBQUVXLGNBQWMsRUFBRSxlQUFlO1FBQUVELFVBQVUsRUFBRSxZQUFZO1FBQUVyUyxTQUFTLEVBQUUsWUFBWTtRQUFFdVYsT0FBTyxFQUFFLEtBQUs7UUFBRWYsWUFBWSxFQUFFO01BQU87SUFBRSxnQkFDM0toZSwwREFBQTtNQUFTeUgsS0FBSyxFQUFFO1FBQUUwQixVQUFVLEVBQUVhLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLEtBQUs7UUFBRWdWLFVBQVUsRUFBRSxJQUFJO1FBQUVsWCxLQUFLLEVBQUUsYUFBYTtRQUFFbVgsUUFBUSxFQUFFLE9BQU87UUFBRWpCLFlBQVksRUFBRTtNQUFNO0lBQUUsZ0JBQzVKaGUsMERBQUEsWUFBSSxTQUFPLGVBQUFBLDBEQUFBLFdBQUssQ0FBQyxlQUNmQSwwREFBQTtNQUFNeUgsS0FBSyxFQUFFO1FBQUVzVixVQUFVLEVBQUU7TUFBTztJQUFFLEdBQUU5USxHQUFHLENBQUNvRSxZQUFZLENBQUNBLFlBQVksQ0FBQzhILFdBQVcsQ0FBQyxDQUFRLENBQUMsZUFDekZuWSwwREFBQSxXQUFLLENBQUMsRUFDTGlNLEdBQUcsQ0FBQ29FLFlBQVksQ0FBQzZILGNBQWMsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsRUFBQyxHQUFDLEVBQUNsTSxHQUFHLENBQUNvRSxZQUFZLENBQUMrSCxXQUFXLENBQUNELFdBQVcsQ0FBQyxDQUN6RixDQUNJLENBQUMsZUFFVm5ZLDBEQUFBO01BQUt5SCxLQUFLLEVBQUU7UUFBRTBCLFVBQVUsRUFBRSxNQUFNO1FBQUVvUyxXQUFXLEVBQUV2UixNQUFNLENBQUMsK0JBQStCLENBQUMsSUFBSSxLQUFLO1FBQUVsQyxLQUFLLEVBQUUsYUFBYTtRQUFFcVQsT0FBTyxFQUFFLE9BQU87UUFBRTZDLFlBQVksRUFBRTtNQUFNO0lBQUUsZ0JBQzdKaGUsMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFMFQsT0FBTyxFQUFFLE1BQU07UUFBRStELG1CQUFtQixFQUFFLFVBQVU7UUFBRUMsU0FBUyxFQUFFLE1BQU07UUFBRUMsTUFBTSxFQUFFLEtBQUs7UUFBRXBZLFFBQVEsRUFBRSxLQUFLO1FBQUVxWSxZQUFZLEVBQUUsT0FBTztRQUFFM1gsUUFBUSxFQUFFO01BQVc7SUFBRSxnQkFDL0oxSCwwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUVzVixVQUFVLEVBQUUsTUFBTTtRQUFFa0IsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFDLGFBQWdCLENBQUMsZUFDeEVqZSwwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUU7TUFBTztJQUFFLEdBQUMsSUFBRSxFQUFDckcsTUFBTSxDQUFDM0wsR0FBRyxDQUFDbUQsY0FBYyxDQUFDLENBQUN5SSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBTyxDQUFDLGVBRTFGN1gsMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFc1YsVUFBVSxFQUFFLE1BQU07UUFBRWtCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxNQUFTLENBQUMsZUFDakVqZSwwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUU7TUFBTztJQUFFLEdBQUV4Wiw2Q0FBSyxDQUFDd0gsR0FBRyxDQUFDOEwsWUFBWSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQU8sQ0FBQyxFQUV0Ri9MLEdBQUcsQ0FBQ3dNLGVBQWUsS0FBSyxFQUFFLGlCQUN6QnpZLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUVzVixVQUFVLEVBQUUsTUFBTTtRQUFFa0IsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFDLFNBQVksQ0FBQyxlQUNwRWplLDBEQUFBO01BQUt5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxNQUFNO1FBQUVzQixTQUFTLEVBQUUsWUFBWTtRQUFFcEQsUUFBUSxFQUFFO01BQVE7SUFBRSxHQUFFbFEsR0FBRyxDQUFDd00sZUFBZSxDQUFDTixXQUFXLENBQUMsQ0FBTyxDQUN2SCxDQUNILEVBRUFsTSxHQUFHLENBQUMwTSxjQUFjLEtBQUssRUFBRSxpQkFDeEIzWSwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFc1YsVUFBVSxFQUFFLE1BQU07UUFBRWtCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxRQUFXLENBQUMsZUFDbkVqZSwwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsTUFBTTtRQUFFc0IsU0FBUyxFQUFFLFlBQVk7UUFBRXBELFFBQVEsRUFBRTtNQUFRO0lBQUUsR0FBRWxRLEdBQUcsQ0FBQzBNLGNBQWMsQ0FBQ1IsV0FBVyxDQUFDLENBQU8sQ0FDdEgsQ0FFRCxDQUNGLENBQ0ksQ0FBQyxlQUNWblksMERBQUEsa0JBRUlpTSxHQUFHLENBQUN1TixRQUFRLEtBQUswRCxTQUFTLGdCQUN4QmxkLDBEQUFBO01BQU95SCxLQUFLLEVBQUU7UUFBRUMsUUFBUSxFQUFFLFVBQVU7UUFBRVYsUUFBUSxFQUFFLEtBQUs7UUFBRXdYLEtBQUssRUFBRSxNQUFNO1FBQUU1VyxJQUFJLEVBQUUsR0FBRztRQUFFRSxLQUFLLEVBQUUsS0FBSztRQUFFa1csWUFBWSxFQUFFO01BQU07SUFBRSxnQkFDbkhoZSwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxNQUFNO1FBQUVuVyxLQUFLLEVBQUU7TUFBTztJQUFFLEdBQUMsTUFBUSxDQUFDLGVBQzFEOUgsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFO01BQU87SUFBRSxHQUFFaFMsR0FBRyxDQUFDdU4sUUFBYSxDQUNsRCxDQUNDLENBQ0YsQ0FBQyxHQUNOLEVBQUUsZUFFUnhaLDBEQUFBO01BQU9nRyxTQUFTLEVBQUMsYUFBYTtNQUFDeUIsS0FBSyxFQUFFO1FBQUVULFFBQVEsRUFBRSxLQUFLO1FBQUVnWCxZQUFZLEVBQUUsS0FBSztRQUFFWCxNQUFNLEVBQUU7TUFBaUI7SUFBRSxnQkFDdkdyZCwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRTRWLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRXpXLGVBQWUsRUFBRTtNQUFVO0lBQUUsR0FBQyxHQUFLLENBQUMsZUFDM0U1RywwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsUUFBUTtRQUFFWixNQUFNLEVBQUUsZ0JBQWdCO1FBQUV6VyxlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUMsTUFBUSxDQUFDLGVBQ25HNUcsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFNFYsTUFBTSxFQUFFLGdCQUFnQjtRQUFFelcsZUFBZSxFQUFFO01BQVU7SUFBRSxHQUFDLGFBQWUsQ0FBQyxlQUNyRjVHLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxPQUFPO1FBQUVaLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRXpXLGVBQWUsRUFBRTtNQUFVO0lBQUUsR0FBQyxLQUFPLENBQUMsZUFDakc1RywwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsT0FBTztRQUFFWixNQUFNLEVBQUUsZ0JBQWdCO1FBQUV6VyxlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUMsTUFBUSxDQUFDLEVBQ2pHaUssWUFBWSxpQkFBSTdRLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxPQUFPO1FBQUVaLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRXpXLGVBQWUsRUFBRTtNQUFVO0lBQUUsR0FBQyxVQUFZLENBQUMsZUFDdkg1RywwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsT0FBTztRQUFFWixNQUFNLEVBQUUsZ0JBQWdCO1FBQUV6VyxlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUMsT0FBUyxDQUNoRyxDQUNDLENBQUMsZUFDUjVHLDBEQUFBLGlCQUFBNmMsV0FBQSxHQUNHNVEsR0FBRyxDQUFDdUQsS0FBSyxjQUFBcU4sV0FBQSx1QkFBVEEsV0FBQSxDQUFXMVEsR0FBRyxDQUFDLENBQUNnRixJQUFJLEVBQUUwSCxDQUFDLEtBQUs7TUFDM0IsSUFBTTZHLFdBQVcsR0FBR3ZTLElBQUksQ0FBQytELElBQUksQ0FBRXlPLEtBQUssSUFBS0EsS0FBSyxDQUFDaFAsR0FBRyxLQUFLUSxJQUFJLENBQUMySCxRQUFRLENBQUNuSSxHQUFHLENBQUM7TUFDekUsb0JBQ0UzUSwwREFBQTtRQUFJcWEsR0FBRyxFQUFFbEosSUFBSSxDQUFDeU87TUFBTSxHQUVoQnpPLElBQUksQ0FBQzRILGVBQWUsS0FBSyxZQUFZLGdCQUNuQy9ZLDBEQUFBLENBQUFBLHVEQUFBLFFBRUltUixJQUFJLENBQUMwTyxjQUFjLEtBQUszQyxTQUFTLGdCQUU3QmxkLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQTtRQUFJeUgsS0FBSyxFQUFFO1VBQUV3VyxTQUFTLEVBQUU7UUFBUztNQUFFLGdCQUFDamUsMERBQUEsZUFBTzZZLENBQUMsR0FBRyxDQUFRLENBQUssQ0FBQyxlQUM3RDdZLDBEQUFBO1FBQUl5SCxLQUFLLEVBQUU7VUFBRXdXLFNBQVMsRUFBRSxRQUFRO1VBQUVaLE1BQU0sRUFBRTtRQUFpQixDQUFFO1FBQUN5QyxPQUFPLEVBQUU7TUFBRSxHQUFFM08sSUFBSSxDQUFDME8sY0FBbUIsQ0FDbkcsQ0FBQyxnQkFJSDdmLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQTtRQUFJeUgsS0FBSyxFQUFFO1VBQUV3VyxTQUFTLEVBQUUsUUFBUTtVQUFFblcsS0FBSyxFQUFFO1FBQU87TUFBRSxnQkFBQzlILDBEQUFBLGVBQU82WSxDQUFDLEdBQUcsQ0FBUSxDQUFLLENBQUMsZUFDNUU3WSwwREFBQTtRQUFJeUgsS0FBSyxFQUFFO1VBQUVLLEtBQUssRUFBRSxPQUFPO1VBQUVpWSxVQUFVLEVBQUU7UUFBaUI7TUFBRSxnQkFBRS9mLDBEQUFBO1FBQU0yZSxNQUFNLEVBQUV4TixJQUFJLENBQUMySCxRQUFRLEdBQUczSCxJQUFJLENBQUMySCxRQUFRLENBQUNBLFFBQVEsS0FBSyxPQUFPLEdBQUc7TUFBRyxHQUFFM0gsSUFBSSxDQUFDMkgsUUFBUSxDQUFDQSxRQUFRLENBQUNYLFdBQVcsQ0FBQyxDQUFRLENBQUssQ0FBQyxlQUN2TG5ZLDBEQUFBO1FBQUl5SCxLQUFLLEVBQUU7VUFBRXdXLFNBQVMsRUFBRSxNQUFNO1VBQUVuVyxLQUFLLEVBQUUsT0FBTztVQUFFaVksVUFBVSxFQUFFO1FBQWlCO01BQUUsZ0JBQUMvZiwwREFBQSxlQUFPbVIsSUFBSSxDQUFDNEgsZUFBZSxDQUFDWixXQUFXLENBQUMsQ0FBUSxDQUFLLENBQUMsZUFDdEluWSwwREFBQTtRQUFJeUgsS0FBSyxFQUFFO1VBQUV3VyxTQUFTLEVBQUUsT0FBTztVQUFFblcsS0FBSyxFQUFFLE1BQU07VUFBRWlZLFVBQVUsRUFBRTtRQUFpQjtNQUFFLGdCQUFDL2YsMERBQUEsZUFBT21SLElBQUksQ0FBQzZILE9BQU8sRUFBQyxHQUFDLEVBQUMwRyxXQUFXLEtBQUt4QyxTQUFTLEdBQUd3QyxXQUFXLENBQUNNLElBQUksQ0FBQzdILFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBUyxDQUFLLENBQUMsZUFDbExuWSwwREFBQTtRQUFJeUgsS0FBSyxFQUFFO1VBQUV3VyxTQUFTLEVBQUUsT0FBTztVQUFFblcsS0FBSyxFQUFFLE1BQU07VUFBRWlZLFVBQVUsRUFBRTtRQUFpQjtNQUFFLGdCQUFDL2YsMERBQUE7UUFBTTtNQUFXLEdBQUMsR0FBTyxDQUFDLGVBQUFBLDBEQUFBLGVBQU9tUixJQUFJLENBQUM4SCxRQUFlLENBQUssQ0FBQyxFQUMxSXBJLFlBQVksaUJBQUk3USwwREFBQTtRQUFJeUgsS0FBSyxFQUFFO1VBQUV3VyxTQUFTLEVBQUUsT0FBTztVQUFFOEIsVUFBVSxFQUFFO1FBQWlCO01BQUUsZ0JBQUMvZiwwREFBQTtRQUFNO01BQVcsR0FBQyxHQUFPLENBQUMsZUFBQUEsMERBQUEsZUFBT21SLElBQUksQ0FBQ0osWUFBbUIsQ0FBSyxDQUFDLGVBQ2pKL1EsMERBQUE7UUFBSXlILEtBQUssRUFBRTtVQUFFd1csU0FBUyxFQUFFLE9BQU87VUFBRW5XLEtBQUssRUFBRSxPQUFPO1VBQUVpWSxVQUFVLEVBQUU7UUFBaUI7TUFBRSxnQkFBQy9mLDBEQUFBO1FBQU07TUFBVyxHQUFDLEdBQU8sQ0FBQyxlQUFBQSwwREFBQSxlQUFPbVIsSUFBSSxDQUFDK0gsVUFBVSxDQUFDK0csT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDM1AsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFLLENBQzlMLENBR1IsQ0FBQyxnQkFDRHRRLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNGQSwwREFBQTtRQUFJeUgsS0FBSyxFQUFFO1VBQUV3VyxTQUFTLEVBQUUsUUFBUTtVQUFFOEIsVUFBVSxFQUFFO1FBQWlCO01BQUUsZ0JBQUMvZiwwREFBQSxlQUFPNlksQ0FBQyxHQUFHLENBQVEsQ0FBSyxDQUFDLGVBQzNGN1ksMERBQUE7UUFBSXlILEtBQUssRUFBRTtVQUFFd1csU0FBUyxFQUFFLE1BQU07VUFBRVosTUFBTSxFQUFFO1FBQWlCLENBQUU7UUFBQ3lDLE9BQU8sRUFBRWpQLFlBQVksR0FBRyxDQUFDLEdBQUc7TUFBRSxnQkFBQzdRLDBEQUFBLGVBQU9tUixJQUFJLENBQUM0SCxlQUFzQixDQUFLLENBQUMsZUFDbkkvWSwwREFBQTtRQUFJeUgsS0FBSyxFQUFFO1VBQUV3VyxTQUFTLEVBQUUsT0FBTztVQUFFWixNQUFNLEVBQUU7UUFBaUI7TUFBRSxnQkFBQ3JkLDBEQUFBO1FBQU07TUFBVyxHQUFDLEdBQU8sQ0FBQyxlQUFBQSwwREFBQSxlQUFPbVIsSUFBSSxDQUFDK0gsVUFBaUIsQ0FBSyxDQUN6SCxDQUVGLENBQUM7SUFFVCxDQUNBLENBQ0ssQ0FDRixDQUFDLGVBQ1JsWiwwREFBQTtNQUFPeUgsS0FBSyxFQUFFO1FBQUVULFFBQVEsRUFBRSxLQUFLO1FBQUVrWixlQUFlLEVBQUUsT0FBTztRQUFFQSxlQUFlLEVBQUU7TUFBUTtJQUFFLGdCQUNwRmxnQiwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBLFdBQVEsQ0FBQyxlQUNUQSwwREFBQSxXQUFRLENBQUMsZUFDVEEsMERBQUEsV0FBUSxDQUFDLGVBQ1RBLDBEQUFBLFdBQVEsQ0FBQyxlQUNUQSwwREFBQSxXQUFRLENBQUMsZUFDVEEsMERBQUEsV0FBUSxDQUNOLENBQ0MsQ0FBQyxlQUNSQSwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxNQUFNO1FBQUVuVyxLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUNnWSxPQUFPLEVBQUU7SUFBRSxHQUFFN1QsR0FBRyxDQUFDa1UsSUFBUyxDQUFDLGVBQzdFbmdCLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxPQUFPO1FBQUVZLFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNpQixPQUFPLEVBQUU7SUFBRSxnQkFDNUU5ZiwwREFBQSxlQUFNLFdBRUosRUFBQ2lNLEdBQUcsQ0FBQ21VLFFBQVEsR0FBRyxFQUFFLGdCQUFHcGdCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUFFQSwwREFBQSxXQUFLLENBQUMsZUFBQUEsMERBQUE7TUFBTXlILEtBQUssRUFBRTtRQUFFWixLQUFLLEVBQUU7TUFBTztJQUFFLEdBQUMsaUJBQXFCLENBQUcsQ0FDakYsQ0FDSixDQUFDLGVBQ0w3RywwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsT0FBTztRQUFFWSxZQUFZLEVBQUU7TUFBaUIsQ0FBRTtNQUFDaUIsT0FBTyxFQUFFO0lBQUUsZ0JBQUM5ZiwwREFBQTtNQUFNO0lBQVcsR0FBQyxHQUFPLENBQUMsZUFBQUEsMERBQUEsZUFBT2lNLEdBQUcsQ0FBQ21OLFFBQWUsQ0FBSyxDQUN0SSxDQUFDLEVBRUhuTixHQUFHLENBQUNvVSxRQUFRLGdCQUVScmdCLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsTUFBTTtRQUFFblcsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDZ1ksT0FBTyxFQUFFO0lBQUUsQ0FBSyxDQUFDLGVBQ25FOWYsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2lCLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUEsZUFBTSxVQUFjLENBQUssQ0FBQyxlQUN6R0EsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2lCLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUE7TUFBTTtJQUFXLEdBQUMsR0FBTyxDQUFDLGVBQUFBLDBEQUFBLGVBQU9pTSxHQUFHLENBQUNvVSxRQUFRLENBQUNKLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzNQLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBSyxDQUN2TCxDQUFDLEdBRUwsRUFBRSxFQUdOckUsR0FBRyxDQUFDcVUsZ0JBQWdCLGdCQUVoQnRnQiwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE1BQU07UUFBRW5XLEtBQUssRUFBRTtNQUFRLENBQUU7TUFBQ2dZLE9BQU8sRUFBRTtJQUFFLENBQUssQ0FBQyxlQUNuRTlmLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxPQUFPO1FBQUVZLFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNpQixPQUFPLEVBQUU7SUFBRSxnQkFBQzlmLDBEQUFBLGVBQU9pTSxHQUFHLENBQUNzVSxVQUFpQixDQUFLLENBQUMsZUFDakh2Z0IsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2lCLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUE7TUFBTTtJQUFXLEdBQUMsR0FBTyxDQUFDLGVBQUFBLDBEQUFBLGVBQU9pTSxHQUFHLENBQUNxVSxnQkFBZ0IsQ0FBQ0wsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDM1AsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFLLENBQy9MLENBQUMsR0FFTCxFQUFFLEVBR05yRSxHQUFHLENBQUNtVSxRQUFRLGdCQUVScGdCLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsTUFBTTtRQUFFblcsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDZ1ksT0FBTyxFQUFFO0lBQUUsQ0FBSyxDQUFDLGVBQ25FOWYsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2lCLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUEsZUFBTSxXQUFlLENBQUssQ0FBQyxlQUMxR0EsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2lCLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUE7TUFBTTtJQUFXLEdBQUMsR0FBTyxDQUFDLGVBQUFBLDBEQUFBLGVBQU9pTSxHQUFHLENBQUN1VSxHQUFHLEdBQUd2VSxHQUFHLENBQUN1VSxHQUFHLENBQUNQLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzNQLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFhLENBQUssQ0FDck0sQ0FBQyxHQUVMLEVBQUUsZUFFUnRRLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsTUFBTTtRQUFFblcsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDZ1ksT0FBTyxFQUFFO0lBQUUsQ0FBSyxDQUFDLGVBQ25FOWYsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2lCLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUEsZUFBTSxPQUFXLENBQUssQ0FBQyxlQUN0R0EsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2lCLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUE7TUFBTTtJQUFXLEdBQUMsR0FBTyxDQUFDLGVBQUFBLDBEQUFBLGVBQU9pTSxHQUFHLENBQUNxTixZQUFZLEdBQUdyTixHQUFHLENBQUNxTixZQUFZLENBQUMyRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMzUCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBUyxDQUFLLENBQ25OLENBQUMsRUFFSHJFLEdBQUcsQ0FBQ2lTLEtBQUssZ0JBRUxsZSwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE1BQU07UUFBRW5XLEtBQUssRUFBRTtNQUFRLENBQUU7TUFBQ2dZLE9BQU8sRUFBRTtJQUFFLENBQUssQ0FBQyxlQUNuRTlmLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxPQUFPO1FBQUVZLFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNpQixPQUFPLEVBQUU7SUFBRSxnQkFBQzlmLDBEQUFBLGVBQU0sYUFBaUIsQ0FBSyxDQUFDLGVBQzVHQSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsT0FBTztRQUFFWSxZQUFZLEVBQUU7TUFBaUIsQ0FBRTtNQUFDaUIsT0FBTyxFQUFFO0lBQUUsZ0JBQUM5ZiwwREFBQTtNQUFNO0lBQVcsR0FBQyxHQUFPLENBQUMsZUFBQUEsMERBQUEsZUFBT2lNLEdBQUcsQ0FBQ2lTLEtBQUssQ0FBQytCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzNQLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBSyxDQUNwTCxDQUFDLEdBRUwsRUFBRSxlQUVSdFEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxNQUFNO1FBQUVuVyxLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUNnWSxPQUFPLEVBQUU7SUFBRSxDQUFLLENBQUMsZUFDbkU5ZiwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsT0FBTztRQUFFWSxZQUFZLEVBQUUsZ0JBQWdCO1FBQUVoWSxLQUFLLEVBQUUsU0FBUztRQUFFa1csVUFBVSxFQUFFO01BQU8sQ0FBRTtNQUFDK0MsT0FBTyxFQUFFO0lBQUUsZ0JBQUM5ZiwwREFBQSxlQUFNLGFBQWlCLENBQUssQ0FBQyxlQUNsSkEsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRVksWUFBWSxFQUFFLGdCQUFnQjtRQUFFaFksS0FBSyxFQUFFLFNBQVM7UUFBRWtXLFVBQVUsRUFBRTtNQUFPLENBQUU7TUFBQytDLE9BQU8sRUFBRTtJQUFFLGdCQUFDOWYsMERBQUE7TUFBTTtJQUFXLEdBQUMsR0FBTyxDQUFDLGVBQUFBLDBEQUFBLGVBQU9pTSxHQUFHLENBQUN5TixVQUFVLEtBQUt3RCxTQUFTLEdBQUdqUixHQUFHLENBQUN5TixVQUFVLENBQUN1RyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMzUCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBUyxDQUFLLENBQ25RLENBQUMsZUFDTHRRLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUV3VyxTQUFTLEVBQUUsTUFBTTtRQUFFblcsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDZ1ksT0FBTyxFQUFFO0lBQUUsQ0FBSyxDQUFDLGVBQ25FOWYsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFO01BQVMsQ0FBRTtNQUFDNkIsT0FBTyxFQUFFO0lBQUUsZ0JBQUM5ZiwwREFBQSxlQUFNLGdCQUFvQixDQUFLLENBQUMsZUFDaEZBLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRXdXLFNBQVMsRUFBRSxNQUFNO1FBQUVuVyxLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUNnWSxPQUFPLEVBQUU7SUFBRSxnQkFBQzlmLDBEQUFBLGVBQU9pTSxHQUFHLENBQUMyTixNQUFhLENBQUssQ0FDekYsQ0FDQyxDQUNGLENBQUMsZUFDUjVaLDBEQUFBO01BQU95SCxLQUFLLEVBQUU7UUFBRUMsUUFBUSxFQUFFLFVBQVU7UUFBRXFXLFNBQVMsRUFBRSxPQUFPO1FBQUUvVyxRQUFRLEVBQUU7TUFBTTtJQUFFLGdCQUMxRWhILDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFYixlQUFlLEVBQUUsT0FBTztRQUFFeVcsTUFBTSxFQUFFLE1BQU07UUFBRU4sVUFBVSxFQUFFLE1BQU07UUFBRWtCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxNQUU1RixDQUFDLGVBQ0xqZSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUViLGVBQWUsRUFBRSxPQUFPO1FBQUV5VyxNQUFNLEVBQUUsTUFBTTtRQUFFTixVQUFVLEVBQUUsTUFBTTtRQUFFa0IsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFDLGVBRTVGLENBQ0YsQ0FBQyxlQUNMamUsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRWIsZUFBZSxFQUFFLE9BQU87UUFBRXlXLE1BQU0sRUFBRSxNQUFNO1FBQUVOLFVBQVUsRUFBRSxNQUFNO1FBQUVrQixTQUFTLEVBQUU7TUFBTztJQUFFLEdBQUMsVUFFNUYsQ0FBQyxlQUNMamUsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFYixlQUFlLEVBQUUsT0FBTztRQUFFeVcsTUFBTSxFQUFFLE1BQU07UUFBRU4sVUFBVSxFQUFFLE1BQU07UUFBRWtCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxrQkFFNUYsQ0FDRixDQUFDLGVBQ0xqZSwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFYixlQUFlLEVBQUUsT0FBTztRQUFFa0IsS0FBSyxFQUFFLE9BQU87UUFBRXVWLE1BQU0sRUFBRSxNQUFNO1FBQUVOLFVBQVUsRUFBRSxNQUFNO1FBQUVrQixTQUFTLEVBQUU7TUFBTztJQUFFLEdBQUMsY0FFNUcsQ0FBQyxlQUNMamUsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFYixlQUFlLEVBQUUsT0FBTztRQUFFeVcsTUFBTSxFQUFFLE1BQU07UUFBRU4sVUFBVSxFQUFFLE1BQU07UUFBRWtCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyx5QkFFNUYsQ0FDRixDQUFDLGVBQ0xqZSwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXlILEtBQUssRUFBRTtRQUFFYixlQUFlLEVBQUUsT0FBTztRQUFFeVcsTUFBTSxFQUFFLE1BQU07UUFBRU4sVUFBVSxFQUFFLE1BQU07UUFBRWtCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxZQUU1RixDQUFDLGVBQ0xqZSwwREFBQTtNQUFJeUgsS0FBSyxFQUFFO1FBQUViLGVBQWUsRUFBRSxPQUFPO1FBQUV5VyxNQUFNLEVBQUUsTUFBTTtRQUFFTixVQUFVLEVBQUUsTUFBTTtRQUFFa0IsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFDLGFBRTVGLENBQ0YsQ0FDQyxDQUNGLENBQUMsZUFDUmplLDBEQUFBO01BQU95SCxLQUFLLEVBQUU7UUFBRVQsUUFBUSxFQUFFO01BQU07SUFBRSxnQkFDaENoSCwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRWIsZUFBZSxFQUFFLE9BQU87UUFBRXlXLE1BQU0sRUFBRSxNQUFNO1FBQUVOLFVBQVUsRUFBRSxNQUFNO1FBQUVrQixTQUFTLEVBQUU7TUFBTztJQUFFLEdBQUMsb0JBRTVGLENBQ0YsQ0FBQyxlQUNMamUsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl5SCxLQUFLLEVBQUU7UUFBRWIsZUFBZSxFQUFFLE9BQU87UUFBRXlXLE1BQU0sRUFBRSxNQUFNO1FBQUVZLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FFdkVoUyxHQUFHLENBQUN3VSxLQUFLLENBQUN0SSxXQUFXLENBQUMsQ0FFdEIsQ0FDRixDQUNDLENBQ0YsQ0FDQSxDQUNGLENBQUMsZUFDVm5ZLDBEQUFBO01BQU1nRyxTQUFTLEVBQUM7SUFBZSxnQkFDN0JoRywwREFBQTtNQUFHeUgsS0FBSyxFQUFFO1FBQUUwVCxPQUFPLEVBQUUsTUFBTTtRQUFFd0MsR0FBRyxFQUFFLEtBQUs7UUFBRTlCLFVBQVUsRUFBRTtNQUFTO0lBQUUsZ0JBQzlEN2IsMERBQUEsNEJBQU1BLDBEQUFBLENBQUN3RCxrRUFBUyxNQUFFLENBQU8sQ0FBQyxlQUMxQnhELDBEQUFBLGVBQU0seUJBQTZCLENBQ2xDLENBQUMsZUFDSkEsMERBQUE7TUFBR3lILEtBQUssRUFBRTtRQUFFMFQsT0FBTyxFQUFFLE1BQU07UUFBRXdDLEdBQUcsRUFBRSxLQUFLO1FBQUU5QixVQUFVLEVBQUU7TUFBUztJQUFFLGdCQUM5RDdiLDBEQUFBLDRCQUFNQSwwREFBQSxDQUFDeUQsa0VBQVMsTUFBRSxDQUFPLENBQUMsZUFDMUJ6RCwwREFBQSxlQUFNLGdCQUFvQixDQUN6QixDQUFDLGVBQ0pBLDBEQUFBO01BQUd5SCxLQUFLLEVBQUU7UUFBRTBULE9BQU8sRUFBRSxNQUFNO1FBQUV3QyxHQUFHLEVBQUUsS0FBSztRQUFFOUIsVUFBVSxFQUFFO01BQVM7SUFBRSxnQkFDOUQ3YiwwREFBQSw0QkFBTUEsMERBQUEsQ0FBQzBELGdFQUFPLE1BQUUsQ0FBTyxDQUFDLGVBQ3hCMUQsMERBQUEsZUFBTSxxQkFBeUIsQ0FDOUIsQ0FDQyxDQUFDLEVBRU5pTSxHQUFHLENBQUN5VSxhQUFhLGlCQUNoQjFnQiwwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUVzVyxTQUFTLEVBQUUsTUFBTTtRQUFFc0QsU0FBUyxFQUFFLGlCQUFpQjtRQUFFSCxVQUFVLEVBQUUsTUFBTTtRQUFFdGEsZUFBZSxFQUFFO01BQVE7SUFBRSxnQkFFNUc1RywwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUVzWCxPQUFPLEVBQUUsTUFBTTtRQUFFMUIsTUFBTSxFQUFFLGdCQUFnQjtRQUFFaUUsWUFBWSxFQUFFLEtBQUs7UUFBRXhhLFNBQVMsRUFBRTtNQUE4QjtJQUFFLGdCQUN2SDlHLDBEQUFBO01BQUt5SCxLQUFLLEVBQUU7UUFBRW9YLFlBQVksRUFBRSxtQkFBbUI7UUFBRWdDLGFBQWEsRUFBRSxNQUFNO1FBQUU3QyxZQUFZLEVBQUUsTUFBTTtRQUFFN0MsT0FBTyxFQUFFLE1BQU07UUFBRVcsY0FBYyxFQUFFLGVBQWU7UUFBRUQsVUFBVSxFQUFFO01BQVM7SUFBRSxnQkFDcks3YiwwREFBQSxDQUFDTyw4REFBVztNQUFDdWUsUUFBUSxFQUFFLE9BQU83UyxHQUFHLEtBQUssV0FBVyxHQUFHQSxHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRTZTLFFBQVEsR0FBRyxPQUFPL1QsSUFBSSxLQUFLLFdBQVcsSUFBQStSLE1BQUEsR0FBRy9SLElBQUksY0FBQStSLE1BQUEsdUJBQUpBLE1BQUEsQ0FBTWdDLFFBQVEsR0FBRztJQUFHLENBQUUsQ0FDckgsQ0FBQyxlQUVOOWUsMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFd1csU0FBUyxFQUFFLE9BQU87UUFBRUQsWUFBWSxFQUFFO01BQU87SUFBRSxnQkFDdkRoZSwwREFBQSxZQUFHLGNBQVksRUFBQ3lFLDZDQUFLLENBQUN3SCxHQUFHLENBQUM4TCxZQUFZLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBSyxDQUMvRCxDQUFDLGVBRU5oWSwwREFBQTtNQUFLeUgsS0FBSyxFQUFFO1FBQUV1VyxZQUFZLEVBQUU7TUFBTztJQUFFLGdCQUNuQ2hlLDBEQUFBO01BQUd5SCxLQUFLLEVBQUU7UUFBRXNWLFVBQVUsRUFBRTtNQUFPO0lBQUUsR0FBQyxNQUFJLEVBQUM5USxHQUFHLENBQUNvRSxZQUFZLENBQUNBLFlBQVksQ0FBQzhILFdBQVcsQ0FBQyxDQUFLLENBQUMsZUFDdkZuWSwwREFBQSxZQUFJaU0sR0FBRyxDQUFDb0UsWUFBWSxDQUFDNkgsY0FBYyxDQUFDQyxXQUFXLENBQUMsQ0FBSyxDQUFDLGVBQ3REblksMERBQUEsWUFBSWlNLEdBQUcsQ0FBQ29FLFlBQVksQ0FBQytILFdBQVcsQ0FBQ0QsV0FBVyxDQUFDLENBQUssQ0FDL0MsQ0FBQyxlQUVOblksMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFdVcsWUFBWSxFQUFFO01BQU87SUFBRSxnQkFDbkNoZSwwREFBQTtNQUFHeUgsS0FBSyxFQUFFO1FBQUVzVixVQUFVLEVBQUUsTUFBTTtRQUFFZ0UsY0FBYyxFQUFFLFdBQVc7UUFBRWxhLEtBQUssRUFBRTtNQUFVO0lBQUUsR0FBQyx1QkFDMUQsRUFBQytRLE1BQU0sQ0FBQzNMLEdBQUcsQ0FBQ21ELGNBQWMsQ0FBQyxDQUFDeUksUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBQyxLQUFHLEVBQUM1TCxHQUFHLENBQUN3TSxlQUFlLENBQUNOLFdBQVcsQ0FBQyxDQUNyRyxDQUNBLENBQUMsZUFFTm5ZLDBEQUFBO01BQUt5SCxLQUFLLEVBQUU7UUFDVjhCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCeVYsVUFBVSxFQUFFLEtBQUs7UUFDakJuWSxLQUFLLEVBQUUsTUFBTTtRQUNib1gsU0FBUyxFQUFFO01BQ2I7SUFBRSxHQUNDaFMsR0FBRyxDQUFDZ1YsY0FDRixDQUFDLGVBRU5qaEIsMERBQUE7TUFBS3lILEtBQUssRUFBRTtRQUFFc1csU0FBUyxFQUFFLE1BQU07UUFBRUUsU0FBUyxFQUFFO01BQVE7SUFBRSxnQkFDcERqZSwwREFBQTtNQUFHeUgsS0FBSyxFQUFFO1FBQUVzVixVQUFVLEVBQUU7TUFBTztJQUFFLEdBQUMsZ0JBQWlCLENBQUMsZUFDcEQvYywwREFBQTtNQUFHeUgsS0FBSyxFQUFFO1FBQUVaLEtBQUssRUFBRSxTQUFTO1FBQUVrVyxVQUFVLEVBQUU7TUFBTztJQUFFLEdBQUMsa0JBQW1CLENBQ3BFLENBQ0YsQ0FDRixDQUVKLENBQ0YsQ0FDRixDQUFDO0VBQUEsQ0FDUCxDQUVFLENBQ0YsQ0FDRCxDQUFDLEVBQ052SixLQUFLLEtBQUssQ0FBQyxnQkFDVnhULDBEQUFBLENBQUNjLHNEQUFJO0lBQUNxTSxJQUFJO0lBQUNtUCxFQUFFLEVBQUU7RUFBRSxnQkFDZnRjLDBEQUFBO0lBQUtnRyxTQUFTLEVBQUM7RUFBbUIsZ0JBQ2hDaEcsMERBQUE7SUFBS3lILEtBQUssRUFBRTtNQUFFc1gsT0FBTyxFQUFFO0lBQU87RUFBRSxnQkFDOUIvZSwwREFBQTtJQUFLeUgsS0FBSyxFQUFFO01BQUUwVCxPQUFPLEVBQUUsTUFBTTtNQUFFVSxVQUFVLEVBQUUsUUFBUTtNQUFFQyxjQUFjLEVBQUUsZUFBZTtNQUFFaFUsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEc5SCwwREFBQSxZQUFHLFVBQVcsQ0FBQyxlQUNmQSwwREFBQSxDQUFDcUgsV0FBVztJQUFDaVgsS0FBSyxFQUFDLE9BQU87SUFBQ0MsU0FBUyxFQUFDO0VBQU0sZ0JBQ3pDdmUsMERBQUEsQ0FBQ2UscURBQVU7SUFBQ3VhLE9BQU8sRUFBRUEsQ0FBQSxLQUFNNUgsV0FBVyxDQUFDLENBQUMsQ0FBRTtJQUFDak0sS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUU4VyxLQUFLLEVBQUU7SUFBUTtFQUFFLGdCQUN6RnhlLDBEQUFBLENBQUNxRixrRUFBSztJQUFDb0MsS0FBSyxFQUFFO01BQUVaLEtBQUssRUFBRTtJQUFVO0VBQUUsQ0FBRSxDQUMzQixDQUNELENBQ1YsQ0FBQyxlQUNON0csMERBQUE7SUFBTXVoQixRQUFRLEVBQUUvSztFQUFpQixnQkFDL0J4VywwREFBQSxDQUFDYyxzREFBSTtJQUFDdWIsU0FBUztJQUFDNVUsS0FBSyxFQUFFO01BQUVvVSxVQUFVLEVBQUU7SUFBUyxDQUFFO0lBQUNuUyxPQUFPLEVBQUU7RUFBRSxnQkFDMUQxSiwwREFBQSxDQUFDYyxzREFBSTtJQUFDcU0sSUFBSTtJQUFDbVAsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCdGMsMERBQUEsQ0FBQ2lCLHNEQUFTO0lBQ1J1Z0IsUUFBUTtJQUNSdFgsRUFBRSxFQUFDLFVBQVU7SUFDYjBSLElBQUksRUFBQyxVQUFVO0lBQ2Y2RixTQUFTO0lBQ1RDLElBQUksRUFBRSxDQUFFO0lBQ1JDLEtBQUssRUFBRTdOLE1BQU87SUFDZDhOLFFBQVEsRUFBR2pPLENBQUMsSUFBS0ksU0FBUyxDQUFDSixDQUFDLENBQUNrTyxNQUFNLENBQUNGLEtBQUssQ0FBQ3hKLFdBQVcsQ0FBQyxDQUFDLENBQUU7SUFDekQySixLQUFLLEVBQUMsVUFBVTtJQUNoQjVHLEVBQUUsRUFBRTtNQUFFcFQsS0FBSyxFQUFFLE1BQU07TUFBRWxCLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDakQsQ0FDRyxDQUFDLGVBQ1A1RywwREFBQSxDQUFDYyxzREFBSTtJQUFDcU0sSUFBSTtJQUFDbVAsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCdGMsMERBQUE7SUFBUWliLElBQUksRUFBQyxRQUFRO0lBQUN4VCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFO0lBQU8sQ0FBRTtJQUFDOUIsU0FBUyxFQUFDO0VBQWMsR0FBQyxNQUFZLENBQ2pGLENBQ0YsQ0FFRixDQUFDLGVBQ1BoRywwREFBQSxXQUFLLENBQ0YsQ0FBQyxlQUNOQSwwREFBQTtJQUFLeUgsS0FBSyxFQUFFO01BQUU4SyxNQUFNLEVBQUUsT0FBTztNQUFFMkosUUFBUSxFQUFFLFFBQVE7TUFBRXVDLFNBQVMsRUFBRSxRQUFRO01BQUUzVyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUN0RjlILDBEQUFBO0lBQUt5SCxLQUFLLEVBQUU7TUFBRXNYLE9BQU8sRUFBRTtJQUFPO0VBQUUsZ0JBQzlCL2UsMERBQUE7SUFBT3lILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUM5QjlILDBEQUFBLGdCQUNHa1UsU0FBUyxDQUFDL0gsR0FBRyxDQUFFZ0YsSUFBSSxpQkFDbEJuUiwwREFBQTtJQUFJcWEsR0FBRyxFQUFFbEosSUFBSSxDQUFDUjtFQUFJLGdCQUNoQjNRLDBEQUFBO0lBQUl5SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE1BQU07TUFBRStXLFlBQVksRUFBRTtJQUFrQjtFQUFFLEdBQzNEMU4sSUFBSSxDQUFDa0YsV0FBVyxHQUFHNVIsNkNBQUssQ0FBQzBNLElBQUksQ0FBQ2tGLFdBQVcsQ0FBQyxDQUFDMkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFDLEVBQUM3RyxJQUFJLENBQUM2RCxXQUFXLENBQUNHLE1BQU0sR0FBRyxJQUFJLEdBQUdoRSxJQUFJLENBQUM2RCxXQUFXLENBQUNsQixNQUNuSCxDQUNGLENBQ0wsQ0FDSSxDQUNGLENBQ0osQ0FDRixDQUNGLENBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFDYk4sS0FBSyxLQUFLLENBQUMsZ0JBQ1Z4VCwwREFBQSxDQUFDYyxzREFBSTtJQUFDcU0sSUFBSTtJQUFDbVAsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Z0YywwREFBQTtJQUFLZ0csU0FBUyxFQUFDO0VBQW1CLGdCQUNoQ2hHLDBEQUFBO0lBQUt5SCxLQUFLLEVBQUU7TUFBRXNYLE9BQU8sRUFBRTtJQUFPO0VBQUUsZ0JBQzlCL2UsMERBQUE7SUFBS3lILEtBQUssRUFBRTtNQUFFMFQsT0FBTyxFQUFFLE1BQU07TUFBRVUsVUFBVSxFQUFFLFFBQVE7TUFBRUMsY0FBYyxFQUFFLGVBQWU7TUFBRWhVLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3BHOUgsMERBQUEsWUFBRyxTQUFVLENBQUMsZUFDZEEsMERBQUEsQ0FBQ3FILFdBQVc7SUFBQ2lYLEtBQUssRUFBQyxPQUFPO0lBQUNDLFNBQVMsRUFBQztFQUFRLGdCQUMzQ3ZlLDBEQUFBLENBQUNlLHFEQUFVO0lBQUN1YSxPQUFPLEVBQUVBLENBQUEsS0FBTTVILFdBQVcsQ0FBQyxDQUFDLENBQUU7SUFBQ2pNLEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFOFcsS0FBSyxFQUFFO0lBQVE7RUFBRSxnQkFDekZ4ZSwwREFBQSxDQUFDcUYsa0VBQUs7SUFBQ29DLEtBQUssRUFBRTtNQUFFWixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDM0IsQ0FDRCxDQUNWLENBQUMsZUFDTjdHLDBEQUFBLFdBQUssQ0FFRixDQUFDLGVBQ05BLDBEQUFBO0lBQUt5SCxLQUFLLEVBQUU7TUFBRThLLE1BQU0sRUFBRSxPQUFPO01BQUUySixRQUFRLEVBQUUsUUFBUTtNQUFFdUMsU0FBUyxFQUFFLFFBQVE7TUFBRTNXLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3RGOUgsMERBQUE7SUFBS3lILEtBQUssRUFBRTtNQUFFc1gsT0FBTyxFQUFFO0lBQU87RUFBRSxHQUU1QnpLLFlBQVksQ0FBQ25JLEdBQUcsQ0FBRUYsR0FBRyxpQkFDbkJqTSwwREFBQTtJQUFHcWEsR0FBRyxFQUFFcE8sR0FBRyxDQUFDMEU7RUFBSSxnQkFDZDNRLDBEQUFBLGVBQU9pTSxHQUFHLENBQUNrSixNQUFNLEdBQUcsTUFBTSxHQUFHMVEsNkNBQUssQ0FBQ3dILEdBQUcsQ0FBQzhWLGdCQUFnQixDQUFDLENBQUMvSixNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUMsSUFBRSxFQUFDL0wsR0FBRyxDQUFDNkgsTUFBYSxDQUM5RixDQUNKLENBRUEsQ0FDRixDQUNGLENBQ0QsQ0FBQyxHQUFHLEVBQ1IsQ0FDSCxDQUNOLEVBQUMsR0FBWSxDQUNmLENBQ0YsQ0FBQyxlQUNOOVQsMERBQUEsQ0FBQzhCLHNEQUFLO0lBQ0owRyxJQUFJLEVBQUVrTixnQkFBaUI7SUFDdkI2SCxPQUFPLEVBQUVwSCxXQUFZO0lBQ3JCNkwsb0JBQW9CO0lBQ3BCQyxpQkFBaUIsRUFBRWxnQixzREFBUztJQUM1Qm1nQixhQUFhLEVBQUU7TUFDYkMsT0FBTyxFQUFFO0lBQ1gsQ0FBRTtJQUNGLG1CQUFnQixtQkFBbUI7SUFDbkMsb0JBQWlCO0VBQXlCLGdCQUUxQ25pQiwwREFBQSxDQUFDaUMscURBQUc7SUFBQ2laLEVBQUUsRUFBQXpTLGFBQUEsQ0FBQUEsYUFBQSxLQUFPaEIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLEdBRS9Cd04sT0FBTyxnQkFBSXRWLDBEQUFBLENBQUNrRiwwREFBTSxNQUFFLENBQUMsZ0JBRXBCbEYsMERBQUE7SUFBS3lILEtBQUssRUFBRTtNQUFFcVUsY0FBYyxFQUFFLFFBQVE7TUFBRW1DLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzVEamUsMERBQUEseUJBQUdBLDBEQUFBLENBQUNtRix3RUFBZTtJQUFDc0MsS0FBSyxFQUFFO01BQUVaLEtBQUssRUFBRSxPQUFPO01BQUUwTCxNQUFNLEVBQUUsTUFBTTtNQUFFekssS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQUksQ0FBQyxlQUNwRjlILDBEQUFBLGFBQUksMEJBQTRCLENBQUMsZUFDakNBLDBEQUFBO0lBQUt5SCxLQUFLLEVBQUU7TUFBRTBULE9BQU8sRUFBRSxNQUFNO01BQUV3QyxHQUFHLEVBQUUsTUFBTTtNQUFFN0IsY0FBYyxFQUFFO0lBQVM7RUFBRSxnQkFDckU5YiwwREFBQTtJQUFRc2IsT0FBTyxFQUFFbkYsV0FBWTtJQUFDblEsU0FBUyxFQUFDO0VBQWEsR0FBQyxPQUU5QyxDQUNMLENBQ0YsQ0FFSixDQUNBLENBQUMsZUFDUmhHLDBEQUFBLENBQUM4QixzREFBSztJQUNKMEcsSUFBSSxFQUFFc04sY0FBZTtJQUNyQnlILE9BQU8sRUFBRW5ILGdCQUFpQjtJQUMxQjRMLG9CQUFvQjtJQUNwQkMsaUJBQWlCLEVBQUVsZ0Isc0RBQVM7SUFDNUJtZ0IsYUFBYSxFQUFFO01BQ2JDLE9BQU8sRUFBRTtJQUNYLENBQUU7SUFDRixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUNuaUIsMERBQUEsQ0FBQ2lDLHFEQUFHO0lBQUNpWixFQUFFLEVBQUF6UyxhQUFBLENBQUFBLGFBQUEsS0FBT2hCLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxHQUUvQndOLE9BQU8sZ0JBQUl0ViwwREFBQSxDQUFDa0YsMERBQU0sTUFBRSxDQUFDLGdCQUVwQmxGLDBEQUFBO0lBQUt5SCxLQUFLLEVBQUU7TUFBRXFVLGNBQWMsRUFBRSxRQUFRO01BQUVtQyxTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUM1RGplLDBEQUFBLHlCQUFHQSwwREFBQSxDQUFDb0YsbUVBQVU7SUFBQ3FDLEtBQUssRUFBRTtNQUFFWixLQUFLLEVBQUUsS0FBSztNQUFFMEwsTUFBTSxFQUFFLE1BQU07TUFBRXpLLEtBQUssRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUFJLENBQUMsZUFDN0U5SCwwREFBQSxhQUFJLHVCQUF5QixDQUFDLGVBQzlCQSwwREFBQTtJQUFRZ0csU0FBUyxFQUFDLGFBQWE7SUFBQ3NWLE9BQU8sRUFBRWxGO0VBQWlCLEdBQUMsV0FFbkQsQ0FDTCxDQUVKLENBQ0EsQ0FDSixDQUFDO0FBRVY7QUFFQSxpRUFBZXZNLG9CQUFvQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6bkRuQztBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0SEFBNEgsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFlBQVksWUFBWSxZQUFZLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxZQUFZLFlBQVksUUFBUSxLQUFLLFdBQVcsVUFBVSxVQUFVLFFBQVEsV0FBVyxLQUFLLFdBQVcsUUFBUSxNQUFNLFdBQVcsWUFBWSxRQUFRLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxVQUFVLFVBQVUsUUFBUSxXQUFXLEtBQUssV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLE9BQU8sWUFBWSxLQUFLLFdBQVcsVUFBVSxVQUFVLFFBQVEsTUFBTSxXQUFXLFVBQVUsVUFBVSxRQUFRLFlBQVksS0FBSyxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsV0FBVyxRQUFRLE1BQU0sWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxpRUFBaUUsd0JBQXdCLHFCQUFxQixPQUFPLGlCQUFpQixtQ0FBbUMsOEJBQThCLDJCQUEyQixrQ0FBa0MsT0FBTyxrQ0FBa0MscUJBQXFCLHVCQUF1QiwyQkFBMkIsMEJBQTBCLDRCQUE0QixPQUFPLGVBQWUscUJBQXFCLHVCQUF1QiwyQkFBMkIsNEJBQTRCLE9BQU8sdUJBQXVCLGtDQUFrQyw4QkFBOEIsNEJBQTRCLDBCQUEwQiwyQkFBMkIsZ0NBQWdDLDZCQUE2QixvQ0FBb0MsU0FBUyxvQ0FBb0MsMkJBQTJCLE9BQU8sa0RBQWtELGdCQUFnQixjQUFjLDJCQUEyQixxQkFBcUIsaUJBQWlCLGdCQUFnQixxQkFBcUIseUJBQXlCLGtCQUFrQiw0Q0FBNEMscUJBQXFCLGtCQUFrQixxQ0FBcUMsYUFBYSxlQUFlLGlCQUFpQixpRUFBaUUsa0JBQWtCLG1CQUFtQixxQkFBcUIscUJBQXFCLHdCQUF3QixhQUFhLGdCQUFnQixhQUFhLG9CQUFvQiw0QkFBNEIsYUFBYSxlQUFlLGlCQUFpQiwyQ0FBMkMsb0JBQW9CLGNBQWMsY0FBYywyQkFBMkIsMkRBQTJELGNBQWMsWUFBWSxhQUFhLCtCQUErQixhQUFhLGVBQWUsaUJBQWlCLG9FQUFvRSxhQUFhLDRCQUE0QixhQUFhLDJCQUEyQixjQUFjLHVCQUF1QixrQkFBa0IsdUJBQXVCLG9CQUFvQiw0QkFBNEIsMEJBQTBCLDJCQUEyQiw4QkFBOEIsMkJBQTJCLGtDQUFrQyxPQUFPLG1CQUFtQjtBQUN0OEc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSXZDLE1BQTJHO0FBQzNHLE1BQWlHO0FBQ2pHLE1BQXdHO0FBQ3hHLE1BQTJIO0FBQzNILE1BQW9IO0FBQ3BILE1BQW9IO0FBQ3BILE1BQXVLO0FBQ3ZLO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsK0hBQU87Ozs7QUFJaUg7QUFDekksT0FBTyxpRUFBZSwrSEFBTyxJQUFJLCtIQUFPLFVBQVUsK0hBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93bi5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0ZpbGVDb3B5LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9Fc3RpbWF0ZVZpZXcvRXN0aW1hdGVWaWV3QWRtaW5BbGwuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0ludm9pY2VWaWV3L0FkbWluVmlldy5jc3MiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0ludm9pY2VWaWV3L0FkbWluVmlldy5jc3M/ZWJlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHpcIlxufSksICdBcnJvd0JhY2snKTsiLCJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNNy40MSA4LjU5IDEyIDEzLjE3bDQuNTktNC41OEwxOCAxMGwtNiA2LTYtNnpcIlxufSksICdLZXlib2FyZEFycm93RG93bicpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE2IDFINGMtMS4xIDAtMiAuOS0yIDJ2MTRoMlYzaDEyem0tMSA0IDYgNnYxMGMwIDEuMS0uOSAyLTIgMkg3Ljk5QzYuODkgMjMgNiAyMi4xIDYgMjFsLjAxLTE0YzAtMS4xLjg5LTIgMS45OS0yem0tMSA3aDUuNUwxNCA2LjV6XCJcbn0pLCAnRmlsZUNvcHknKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB1c2VMYXlvdXRDb25maWcgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlTGF5b3V0Q29uZmlnJztcclxuaW1wb3J0IFNpZGViYXJEYXNoIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaCc7XHJcbmltcG9ydCBQcmludEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvUHJpbnRIZWFkZXInO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9JbnZvaWNlVmlldy9BZG1pblZpZXcuY3NzJ1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbnRhaW5lciwgQ2hlY2tib3gsIE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBQYXBlciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBzdHlsZWQsIEZvcm1MYWJlbCwgUmFkaW9Hcm91cCwgRm9ybUNvbnRyb2xMYWJlbCwgUmFkaW8sIElucHV0LCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgTW9kYWwsIEJhY2tkcm9wLCBGYWRlLCBCb3gsIEF1dG9jb21wbGV0ZSwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZVJvdywgVGFibGVIZWFkLCBCdXR0b24sIE1lbnUsIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBJb3NTaGFyZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Jb3NTaGFyZSc7XHJcbmltcG9ydCBMb2NhbFByaW50c2hvcEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2NhbFByaW50c2hvcCc7XHJcbmltcG9ydCBBdHRhY2hGaWxlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0F0dGFjaEZpbGUnO1xyXG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZW5kJztcclxuaW1wb3J0IEVzdGltYXRlSW5mb3JtYXRpb24gZnJvbSAnLi9Fc3RpbWF0ZUluZm9ybWF0aW9uJztcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBjYWNoZWRHZXQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9hcGlDYWNoZSc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCBMYW5ndWFnZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9MYW5ndWFnZSc7XHJcbmltcG9ydCBFbWFpbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FbWFpbCc7XHJcbmltcG9ydCBQaG9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QaG9uZSc7XHJcbmltcG9ydCBXZWJJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvV2ViJztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uLy4uL2ltZy9pbWFnZXMucG5nJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBSZWFjdFRvUHJpbnQsIHsgdXNlUmVhY3RUb1ByaW50IH0gZnJvbSAncmVhY3QtdG8tcHJpbnQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCBLZXlib2FyZEFycm93RG93biBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dEb3duJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcbmltcG9ydCB7IEZpbGVDb3B5IH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcblxyXG5pbXBvcnQgRXhjZWxKUyBmcm9tICdleGNlbGpzJ1xyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IHsgRXhwbGljaXQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuXHJcbmNvbnN0IEVkaXRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgUHJpbnRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTsgY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEVzdGltYXRlVmlld0FkbWluQWxsKCkge1xyXG4gIGNvbnN0IHsgY29uZmlnIH0gPSB1c2VMYXlvdXRDb25maWcoKTtcclxuICBsZXQgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgW2dyYW50QWNjZXNzLCBzZXRHcmFudEFjY2Vzc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dyYW50QWNjZXNzYCk7XHJcbiAgICAgICAgcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cudXNlcklEID09PSB1c2VyLmRhdGEuaWQpXHJcbiAgICAgICAgICAubWFwKChyb3cpID0+IHNldEdyYW50QWNjZXNzKHJvdy5tb2R1bGVzKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hOdW1iZXIoKVxyXG4gIH0sIFt1c2VyXSlcclxuXHJcbiAgY29uc3QgZXN0aW1hdGlvbkluZm9VID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkVzdGltYXRlXCIgJiYgcm93LmFjY2Vzcy5lZGl0TSA9PT0gdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFtlc3RpbWF0ZSwgc2V0RXN0aW1hdGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFtpdGVtLCBTZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gU3RvcmUgYWxsIGludm9pY2VzIHNvIHRoZSB0aGlyZCB1c2VFZmZlY3QgcmV1c2VzIHRoZW0gd2l0aG91dCBhIHNlY29uZCBBUEkgY2FsbFxyXG4gIGNvbnN0IGFsbEludm9pY2VzUmVmID0gdXNlUmVmKFtdKTtcclxuXHJcbiAgY29uc3QgYXBpVXJsID0gYCR7RU5EUE9JTlRfVVJMfS9lc3RpbWF0aW9uYDtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFJ1biBib3RoIGZldGNoZXMgSU4gUEFSQUxMRUwgaW5zdGVhZCBvZiBzZXF1ZW50aWFsbHlcclxuICAgICAgICBjb25zdCBbcmVzLCByZXNJdGVtXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgIGNhY2hlZEdldChhcGlVcmwpLFxyXG4gICAgICAgICAgY2FjaGVkR2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbWApXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgc2V0RXN0aW1hdGUocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgU2V0SXRlbXMocmVzSXRlbS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgW2ludm9pY2UsIHNldEludm9pY2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbnZvaWNlMiwgc2V0SW52b2ljZTJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwdXJjaGFzZSwgc2V0UHVyY2hhc2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttYWludGVuYW5jZSwgc2V0TWFpbnRlbmFuY2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXN0b21lck5hbWUxLCBzZXRDdXN0b21lck5hbWUxXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlc3RpbWF0ZU51bWJlciwgc2V0RXN0aW1hdGVOdW1iZXIxXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIEFsbCAzIHJlcXVlc3RzIG5vdyBydW4gSU4gUEFSQUxMRUwgKGludm9pY2UsIHB1cmNoYXNlLCBhbmQgdGhpcyBzcGVjaWZpYyBlc3RpbWF0aW9uKVxyXG4gICAgICAgIGNvbnN0IFtpbnZvaWNlUmVzcG9uc2UsIHB1cmNoYXNlUmVzcG9uc2UsIG1haW50ZW5hbmNlUmVzcG9uc2UsIHJlc0VzdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICBjYWNoZWRHZXQoYCR7RU5EUE9JTlRfVVJMfS9pbnZvaWNlP3N1bW1hcnk9dHJ1ZWApLFxyXG4gICAgICAgICAgY2FjaGVkR2V0KGAke0VORFBPSU5UX1VSTH0vcHVyY2hhc2VgKSxcclxuICAgICAgICAgIGNhY2hlZEdldChgJHtFTkRQT0lOVF9VUkx9L21haW50ZW5hbmNlYCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZXN0aW1hdGlvbi8ke2lkfWApIC8vIGFsd2F5cyBmcmVzaCDigJQgbm8gY2FjaGUgZm9yIHNwZWNpZmljIHJlY29yZFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIC8vIFN0b3JlIGFsbCBpbnZvaWNlcyBpbiByZWYgc28gdGhlIG5leHQgdXNlRWZmZWN0IGNhbiByZXVzZSB0aGVtIHdpdGhvdXQgZmV0Y2hpbmcgYWdhaW5cclxuICAgICAgICBhbGxJbnZvaWNlc1JlZi5jdXJyZW50ID0gaW52b2ljZVJlc3BvbnNlLmRhdGE/LmRhdGEgfHwgW107XHJcbiAgICAgICAgc2V0Q3VzdG9tZXJOYW1lMShyZXNFc3QuZGF0YS5kYXRhLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUucmVwbGFjZSgvXFxzKy9nLCAnXycpLnJlcGxhY2UoL1xcLi9nLCAnJykpO1xyXG4gICAgICAgIHNldEVzdGltYXRlTnVtYmVyMShyZXNFc3QuZGF0YS5kYXRhLmVzdGltYXRlTnVtYmVyKTtcclxuICAgICAgICBzZXRJdGVtcyhyZXNFc3QuZGF0YS5kYXRhLml0ZW1zKTtcclxuICAgICAgICBjb25zdCBlc3RSZWYgPSByZXNFc3QuZGF0YS5kYXRhLlJlZmVyZW5jZU5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsaWRFc3RSZWYgPSBlc3RSZWYgJiYgdHlwZW9mIGVzdFJlZiA9PT0gJ3N0cmluZycgJiYgZXN0UmVmLnRyaW0oKSAhPT0gJyc7XHJcblxyXG4gICAgICAgIHNldEludm9pY2UoYWxsSW52b2ljZXNSZWYuY3VycmVudC5maWx0ZXIoKHJvdykgPT4gcm93LlJlZmVyZW5jZU5hbWUgPT09IGlkIHx8ICh2YWxpZEVzdFJlZiAmJiByb3cuUmVmZXJlbmNlTmFtZSA9PT0gZXN0UmVmKSkpO1xyXG4gICAgICAgIHNldFB1cmNoYXNlKHB1cmNoYXNlUmVzcG9uc2UuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5SZWZlcmVuY2VOYW1lID09PSBpZCB8fCAodmFsaWRFc3RSZWYgJiYgcm93LlJlZmVyZW5jZU5hbWUgPT09IGVzdFJlZikpKTtcclxuICAgICAgICBzZXRNYWludGVuYW5jZShtYWludGVuYW5jZVJlc3BvbnNlLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuUmVmZXJlbmNlTmFtZSA9PT0gaWQgfHwgKHZhbGlkRXN0UmVmICYmIHJvdy5faWQgPT09IGVzdFJlZikpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbaWRdKVxyXG4gIGNvbnN0IHNob3dEaXNjb3VudCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIGl0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLml0ZW1EaXNjb3VudCA+IDApXHJcbiAgfSwgW2l0ZW1zXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gUmV1c2UgYWxyZWFkeS1mZXRjaGVkIGludm9pY2UgZGF0YSBmcm9tIGFsbEludm9pY2VzUmVmIOKAlCBOTyBzZWNvbmQgQVBJIGNhbGwgbmVlZGVkXHJcbiAgICBpZiAocHVyY2hhc2UubGVuZ3RoID4gMCAmJiBhbGxJbnZvaWNlc1JlZi5jdXJyZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgZmlsdGVyZWRJbnZvaWNlID0gYWxsSW52b2ljZXNSZWYuY3VycmVudC5maWx0ZXIoKHJvdykgPT5cclxuICAgICAgICBwdXJjaGFzZS5maW5kKChJdGVtKSA9PiByb3cuX2lkID09PSBJdGVtLlJlZmVyZW5jZU5hbWUyKVxyXG4gICAgICApO1xyXG4gICAgICBzZXRJbnZvaWNlMihmaWx0ZXJlZEludm9pY2UpO1xyXG4gICAgfVxyXG4gIH0sIFtwdXJjaGFzZV0pXHJcblxyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTWVudSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbXBvbmVudFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGhhbmRsZVByaW50ID0gdXNlUmVhY3RUb1ByaW50KHtcclxuICAgIGNvbnRlbnQ6ICgpID0+IGNvbXBvbmVudFJlZi5jdXJyZW50LFxyXG4gICAgZG9jdW1lbnRUaXRsZTogJ1EtMDAnICsgZXN0aW1hdGVOdW1iZXIgKyAnIEZvciAnICsgY3VzdG9tZXJOYW1lMSxcclxuICAgIG9uQmVmb3JlR2V0Q29udGVudDogKCkgPT4ge1xyXG4gICAgICBjb25zdCBQQUdFX0hFSUdIVCA9IDEwNDU7XHJcbiAgICAgIGNvbnN0IHByaW50RWxlbWVudCA9IGNvbXBvbmVudFJlZi5jdXJyZW50O1xyXG4gICAgICBpZiAocHJpbnRFbGVtZW50KSB7XHJcbiAgICAgICAgcHJpbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLWNsYXNzLWZvci1oZWlnaHRcIilcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBwcmludEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZQYWdlID0gTWF0aC5jZWlsKGhlaWdodCAvIFBBR0VfSEVJR0hUKVxyXG4gICAgICAgIGlmIChudW1iZXJPZlBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICBjb25zdCBoZWlnaHRXaXRoU2luZ2xlSGVhZGVyID0gbnVtYmVyT2ZQYWdlICogUEFHRV9IRUlHSFRcclxuICAgICAgICAgIGxldCByZXF1aXJlZEhlaWdodCA9IGhlaWdodFdpdGhTaW5nbGVIZWFkZXJcclxuICAgICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHByaW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRoZWFkXCIpPy5bMF0/LmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgY29uc3QgZm9vdGVySGVpZ2h0ID0gcHJpbnRFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGZvb3RcIik/LlswXT8uY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICByZXF1aXJlZEhlaWdodCAtPSAobnVtYmVyT2ZQYWdlIC0gMSkgKiAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KVxyXG4gICAgICAgICAgcHJpbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke3JlcXVpcmVkSGVpZ2h0fXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZW1wLWNsYXNzLWZvci1oZWlnaHRcIilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQWZ0ZXJQcmludDogKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcmludEVsZW1lbnQgPSBjb21wb25lbnRSZWYuY3VycmVudDtcclxuICAgICAgaWYgKHByaW50RWxlbWVudCkge1xyXG4gICAgICAgIHByaW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgYXV0b2BcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgaGFuZGxlT3BlblByaW50ID0gKCkgPT4ge1xyXG4gICAgaGFuZGxlUHJpbnQoKVxyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuICBjb25zdCBbc2hvdzEsIHNldFNob3cxXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3cxID0gKGUpID0+IHtcclxuICAgIHNldFNob3cxKGUpO1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfVxyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbQ29tbWVudHMxLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25vdGlmaWNhdGlvbiwgc2V0Tm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIEZldGNoIGNvbW1lbnQgYW5kIG5vdGlmaWNhdGlvbiBJTiBQQVJBTExFTCBpbnN0ZWFkIG9mIHNlcXVlbnRpYWxseVxyXG4gICAgICAgIGNvbnN0IFtyZXNDb21tZW50LCByZXNOb3RpZmljYXRpb25dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vY29tbWVudGApLFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vbm90aWZpY2F0aW9uYClcclxuICAgICAgICBdKTtcclxuICAgICAgICBzZXRDb21tZW50cyhyZXNDb21tZW50LmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuQ29tbWVudEluZm8uaWRJbmZvID09PSBpZCkucmV2ZXJzZSgpKTtcclxuICAgICAgICBzZXROb3RpZmljYXRpb24ocmVzTm90aWZpY2F0aW9uLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuaWRJbmZvID09PSBpZCkpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaENvbW1lbnQoKVxyXG4gIH0sIFtpZF0pXHJcblxyXG4gIGNvbnN0IENvbW1lbnRJbmZvID1cclxuICB7XHJcbiAgICBpZEluZm86IGlkLFxyXG4gICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUsXHJcbiAgICByZWFzb25cclxuICB9XHJcblxyXG4gIHsvKiogTG9hZGluZyBTdGFydCAqLyB9XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcblxyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG5cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIHsvKiogTG9hZGluZyBFbmQgKi8gfVxyXG4gIGNvbnN0IGRhdGVDb21tZW50ID0gZGF5anMoRGF0ZS5ub3coKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEVkaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgQ29tbWVudEluZm8sXHJcbiAgICAgIGRhdGVDb21tZW50XHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1jb21tZW50L2AsIGRhdGEpXHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBzZXRSZWFzb24oXCJcIik7XHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgc2V0Q29tbWVudHMoW25ld0RhdGEsIC4uLkNvbW1lbnRzMV0pXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW3Nob3dSZWYsIHNldFNob3dSZWZdID0gdXNlU3RhdGUoMSlcclxuICBjb25zdCBoYW5kbGVTaG93UmVmID0gKGUpID0+IHtcclxuICAgIHNldFNob3dSZWYoZSk7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICBjb25zdCBkYXRhMCA9IGVzdGltYXRlLmZpbHRlcihyb3cgPT4gcm93Ll9pZCA9PT0gaWQpLm1hcCgocm93KSA9PiAoe1xyXG4gICAgbnVtYmVyOiAnUS0nICsgU3RyaW5nKHJvdy5lc3RpbWF0ZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKSxcclxuICAgIGludm9pY2VEYXRlOiBkYXlqcyhyb3cuZXN0aW1hdGVEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSxcclxuICAgIGN1c3RvbWVyTmFtZTogcm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUsXHJcbiAgICBBZGRyZXNzOiByb3cuY3VzdG9tZXJOYW1lLmJpbGxpbmdBZGRyZXNzLnRvVXBwZXJDYXNlKCkgKyByb3cuY3VzdG9tZXJOYW1lLmJpbGxpbmdDaXR5LnRvVXBwZXJDYXNlKCksXHJcbiAgICBzdGF0dXM6IHJvdy5zdGF0dXMsXHJcbiAgfSkpXHJcbiAgY29uc3QgZGF0YTIgPSBlc3RpbWF0ZS5maWx0ZXIocm93ID0+IHJvdy5faWQgPT09IGlkKS5tYXAoKHJvdykgPT4gKHtcclxuICAgIG5vOiAnJyxcclxuICAgIGludm9pY2VEYXRlOiBcIlwiLFxyXG4gICAgaW52b2ljZVN1YmplY3Q6IHJvdy5lc3RpbWF0ZVN1YmplY3QsXHJcbiAgICBpbnZvaWNlRGVmZWN0OiByb3cuZXN0aW1hdGVEZWZlY3RcclxuICB9KSlcclxuICBjb25zdCBkYXRhNSA9IGl0ZW1zLm1hcCgoSXRlbSwgaSkgPT4ge1xyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIG5vOiBpICsgMSxcclxuICAgICAgaXRlbTogSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBJdGVtLml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgaXRlbVF0eTogSXRlbS5pdGVtUXR5LFxyXG4gICAgICBpdGVtUmF0ZTogJyQnICsgSXRlbS5pdGVtUmF0ZSxcclxuICAgICAgaXRlbURpc2NvdW50OiAnJScgKyBJdGVtLml0ZW1EaXNjb3VudCxcclxuICAgICAgaXRlbUFtb3VudDogJyQnICsgSXRlbS5pdGVtQW1vdW50XHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgY29uc3QgZGF0YTYgPSBlc3RpbWF0ZS5maWx0ZXIocm93ID0+IHJvdy5faWQgPT09IGlkKS5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIG5vOiAnJyxcclxuICAgICAgaXRlbTogXCJcIixcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtUXR5OiBcIlwiLFxyXG4gICAgICBpdGVtUmF0ZTogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiBcIlN1YiBUb3RhbCAoVGF4IEluY2x1c2l2ZSlcIixcclxuICAgICAgaXRlbUFtb3VudDogJyQnICsgcm93LnN1YlRvdGFsXHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgY29uc3QgZGF0YTkgPSBlc3RpbWF0ZS5maWx0ZXIocm93ID0+IHJvdy5faWQgPT09IGlkKS5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIG5vOiAnJyxcclxuICAgICAgaXRlbTogXCJcIixcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtUXR5OiBcIlwiLFxyXG4gICAgICBpdGVtUmF0ZTogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiBcIlRvdGFsXCIsXHJcbiAgICAgIGl0ZW1BbW91bnQ6ICckJyArIHJvdy50b3RhbEludm9pY2VcclxuICAgIH0pXHJcbiAgfSlcclxuICBjb25zdCBkYXRhNCA9IGVzdGltYXRlLmZpbHRlcihyb3cgPT4gcm93Ll9pZCA9PT0gaWQpLm1hcCgocm93KSA9PiAoe1xyXG4gICAgbm90ZUluZm86ICdOb3RlICcgKyByb3cubm90ZUluZm8sXHJcbiAgfSkpXHJcbiAgY29uc3QgZGF0YTExID0gZXN0aW1hdGUuZmlsdGVyKHJvdyA9PiByb3cuX2lkID09PSBpZCkubWFwKChyb3csIGkpID0+IHtcclxuICAgIHJldHVybiAoe1xyXG4gICAgICBubzogJycsXHJcbiAgICAgIGl0ZW06IFwiXCIsXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbVF0eTogXCJcIixcclxuICAgICAgaXRlbVJhdGU6IFwiXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDogXCJCYWxhbmNlIER1ZVwiLFxyXG4gICAgICBpdGVtQW1vdW50OiAnJCcgKyByb3cuYmFsYW5jZUR1ZVxyXG4gICAgfSlcclxuICB9KVxyXG4gIGNvbnN0IGRhdGExMiA9IGVzdGltYXRlLmZpbHRlcihyb3cgPT4gcm93Ll9pZCA9PT0gaWQpLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgbm86ICcnLFxyXG4gICAgICBpdGVtOiBcIlwiLFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1RdHk6IFwiXCIsXHJcbiAgICAgIGl0ZW1SYXRlOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IFwiVG90YWwgSW4gV29yZHNcIixcclxuICAgICAgaXRlbUFtb3VudDogJyQnICsgcm93LnRvdGFsV1xyXG4gICAgfSlcclxuICB9KVxyXG4gIGNvbnN0IGV4cG9ydFRvRXhjZWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB3b3JrYm9vayA9IG5ldyBFeGNlbEpTLldvcmtib29rKCk7XHJcbiAgICBjb25zdCB3b3JrU2hlZXQgPSB3b3JrYm9vay5hZGRXb3Jrc2hlZXQoJ1NoZWV0MScpO1xyXG4gICAgY29uc3QgY29sdW1uczEgPSBbXHJcbiAgICAgIHsgaGVhZGVyOiBcIiNcIiwga2V5OiAnbnVtYmVyJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIkRhdGVcIiwga2V5OiAnaW52b2ljZURhdGUnLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiQ3VzdG9tZXJcIiwga2V5OiAnY3VzdG9tZXJOYW1lJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIkFkZHJlc3NcIiwga2V5OiAnQWRkcmVzcycsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJTdGF0dXNcIiwga2V5OiAnc3RhdHVzJywgd2lkdGg6IDIwIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgY29sdW1uczIgPSBbXHJcbiAgICAgIHsgaGVhZGVyOiBcIlwiLCBrZXk6ICdubycsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJcIiwga2V5OiAnaW52b2ljZURhdGUnLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiU3ViamVjdFwiLCBrZXk6ICdpbnZvaWNlU3ViamVjdCcsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJEZWZlY3RcIiwga2V5OiAnaW52b2ljZURlZmVjdCcsIHdpZHRoOiAyMCB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGNvbHVtbnM1ID0gW1xyXG4gICAgICB7IGhlYWRlcjogXCIjXCIsIGtleTogJ25vJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIkl0ZW1cIiwga2V5OiAnaXRlbScsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJJdGVtIERlc2NyaXB0aW9uXCIsIGtleTogJ2l0ZW1EZXNjcmlwdGlvbicsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJRdHlcIiwga2V5OiAnaXRlbVF0eScsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJSYXRlXCIsIGtleTogJ2l0ZW1SYXRlJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIkRpc2NvdW50XCIsIGtleTogJ2l0ZW1EaXNjb3VudCcsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJBbW91bnRcIiwga2V5OiAnaXRlbUFtb3VudCcsIHdpZHRoOiAyMCB9XHJcbiAgICBdO1xyXG5cclxuICAgIHdvcmtTaGVldC5hZGRSb3coY29sdW1uczEubWFwKGNvbCA9PiBjb2wuaGVhZGVyKSk7XHJcbiAgICBkYXRhMC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB3b3JrU2hlZXQuYWRkUm93KFtpdGVtLm51bWJlciwgaXRlbS5pbnZvaWNlRGF0ZSwgaXRlbS5jdXN0b21lck5hbWUsIGl0ZW0uQWRkcmVzcywgaXRlbS5zdGF0dXNdKVxyXG4gICAgfSk7XHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFtdKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coY29sdW1uczIubWFwKGNvbCA9PiBjb2wuaGVhZGVyKSlcclxuICAgIGRhdGEyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHdvcmtTaGVldC5hZGRSb3coW2l0ZW0ubm8sIGl0ZW0uaW52b2ljZURhdGUsIGl0ZW0uaW52b2ljZVN1YmplY3QsIGl0ZW0uaW52b2ljZURlZmVjdF0pXHJcbiAgICB9KTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coW10pO1xyXG4gICAgd29ya1NoZWV0Lm1lcmdlQ2VsbHMoJ0E4LEU4JylcclxuICAgIGRhdGE0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHdvcmtTaGVldC5hZGRSb3coW2l0ZW0ubm90ZUluZm9dKVxyXG4gICAgfSk7XHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFtdKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coWydJdGVtJ10pO1xyXG4gICAgd29ya1NoZWV0LmFkZFJvdyhjb2x1bW5zNS5tYXAoY29sID0+IGNvbC5oZWFkZXIpKVxyXG4gICAgZGF0YTUuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgd29ya1NoZWV0LmFkZFJvdyhbaXRlbS5ubywgaXRlbS5pdGVtLCBpdGVtLml0ZW1EZXNjcmlwdGlvbiwgaXRlbS5pdGVtUXR5LCBpdGVtLml0ZW1SYXRlLCBpdGVtLml0ZW1EaXNjb3VudCwgaXRlbS5pdGVtQW1vdW50XSlcclxuICAgIH0pO1xyXG4gICAgZGF0YTYuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgd29ya1NoZWV0LmFkZFJvdyhbaXRlbS5ubywgaXRlbS5pdGVtLCBpdGVtLml0ZW1EZXNjcmlwdGlvbiwgaXRlbS5pdGVtUXR5LCBpdGVtLml0ZW1SYXRlLCBpdGVtLml0ZW1EaXNjb3VudCwgaXRlbS5pdGVtQW1vdW50XSlcclxuICAgIH0pO1xyXG4gICAgZGF0YTkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgd29ya1NoZWV0LmFkZFJvdyhbaXRlbS5ubywgaXRlbS5pdGVtLCBpdGVtLml0ZW1EZXNjcmlwdGlvbiwgaXRlbS5pdGVtUXR5LCBpdGVtLml0ZW1SYXRlLCBpdGVtLml0ZW1EaXNjb3VudCwgaXRlbS5pdGVtQW1vdW50XSlcclxuICAgIH0pO1xyXG4gICAgZGF0YTExLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHdvcmtTaGVldC5hZGRSb3coW2l0ZW0ubm8sIGl0ZW0uaXRlbSwgaXRlbS5pdGVtRGVzY3JpcHRpb24sIGl0ZW0uaXRlbVF0eSwgaXRlbS5pdGVtUmF0ZSwgaXRlbS5pdGVtRGlzY291bnQsIGl0ZW0uaXRlbUFtb3VudF0pXHJcbiAgICB9KTtcclxuICAgIGRhdGExMi5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB3b3JrU2hlZXQuYWRkUm93KFtpdGVtLm5vLCBpdGVtLml0ZW0sIGl0ZW0uaXRlbURlc2NyaXB0aW9uLCBpdGVtLml0ZW1RdHksIGl0ZW0uaXRlbVJhdGUsIGl0ZW0uaXRlbURpc2NvdW50LCBpdGVtLml0ZW1BbW91bnRdKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYnVmZmVyID0gYXdhaXQgd29ya2Jvb2sueGxzeC53cml0ZUJ1ZmZlcigpO1xyXG4gICAgY29uc3QgYm9sZCA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nIH0pO1xyXG4gICAgc2F2ZUFzKGJvbGQsIGAkeydRLScgKyBTdHJpbmcoZXN0aW1hdGVOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIGZvciAnICsgY3VzdG9tZXJOYW1lMX0ueGxzeGApXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBRdW90YXRpb24gSW5mb3JtYXRpb25cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL0VzdGltYXRlVmlld0FkbWluJyl9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaCAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogMiB9fSA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsb2FkaW5nRGF0YSA/IDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvdzEgPT09IDEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgKDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXN0aW1hdGVJbmZvcm1hdGlvbiBvbklkPXtpZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4pIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXIyJyBpZD1cIm15TW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXN0aW1hdGU/LmZpbHRlcihyb3cgPT4gcm93Ll9pZCA9PT0gaWQpPy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Jvdy5faWR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlciBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcyMHB4JyB9fT57cm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9VcHBlckNhc2UoKX0gfCB7KHJvdy5lc3RpbWF0ZU5hbWUgfHwgcm93Lmludm9pY2VOYW1lKT8ucmVwbGFjZSgvRVNUXFxzKi0/L2ksICdRVU8tJyl9IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIkRyYWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyYXlcIiA6IHJvdy5zdGF0dXMgPT09IFwiU2VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyA9PT0gXCJEZWNsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZWRcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIkFwcHJvdmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiMzMzliYTVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0dXMgPT09IFwiSW52b2ljZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjNmExYjlhXCIgOiBcImJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17b3BlbiA/ICdkZW1vLWN1c3RvbWl6ZWQtbWVudScgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e29wZW4gPyAndHJ1ZScgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUVsZXZhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxLZXlib2FyZEFycm93RG93biAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ2dyYXknLCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1jdXN0b21pemVkLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnVMaXN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiAnZGVtby1jdXN0b21pemVkLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17RmFkZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17cm93LnN0YXR1cyAhPT0gJ0RyYWZ0JyAmJiBlc3RpbWF0aW9uSW5mb1UubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9Fc3RpbWF0ZUludm9pY2VGb3JtVXBkYXRlLyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkVkaXQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0VzdGltYXRlRm9ybUNsb25lLyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGVDb3B5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkNsb25lPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlT3BlblByaW50fSBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsUHJpbnRzaG9wSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJpbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17ZXhwb3J0VG9FeGNlbH0gc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcyMHB4JywgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBsaWNpdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RXhwb3J0IHRvIEV4Y2VsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdzEoMil9PiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19PkNvbW1lbnRzPC9zcGFuPiA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93MSgzKX0+IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+SGlzdG9yeTwvc3Bhbj48L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LlJlZmVyZW5jZU5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93UmVmKDIpfT5SZWZlcmVuY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiA8c3BhbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU1lbnV9IHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+Tm8gUmVsYXRlZCBSZWZlcmVuY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzICE9PSAnQ29udmVydGVkJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9Fc3RpbWF0ZVZpZXdDb252ZXJ0VG9JbnZvaWNlLyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJyBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db252ZXJ0IFRvIEludm9pY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSAnQ29udmVydGVkJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9Fc3RpbWF0ZVZpZXdDb252ZXJ0VG9JbnZvaWNlLyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJyBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db252ZXJ0IFRvIEludm9pY2UgKEFnYWluKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzICE9PSAnQ29udmVydGVkJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9NYWtlUHVyY2hhc2VDb252ZXJ0VG9Qcm9qZWN0LyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJyBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db252ZXJ0IHRvIFByb2plY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSAnQ29udmVydGVkJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9NYWtlUHVyY2hhc2VDb252ZXJ0VG9Qcm9qZWN0LyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJyBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db252ZXJ0IHRvIFByb2plY3QgKEFnYWluKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyAhPT0gJ0NvbnZlcnRlZCcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0VzdGltYXRlQ29udmVydFRvTWFpbnRlbmFuY2UvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db252ZXJ0IFRvIE1haW50ZW5hbmNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSAnQ29udmVydGVkJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvRXN0aW1hdGVDb252ZXJ0VG9NYWludGVuYW5jZS8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZScgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbnZlcnQgVG8gTWFpbnRlbmFuY2UgKEFnYWluKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UmVmID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxMHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UmVmZXJlbmNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2UgPyBwdXJjaGFzZS5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtyb3cuX2lkfT4gfCB7cm93LnB1cmNoYXNlTmFtZX0sIHtyb3cucHJvamVjdE5hbWUucHJvamVjdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludm9pY2UyID8gaW52b2ljZTIubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17cm93Ll9pZH0+IHwge3Jvdy5pbnZvaWNlTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52b2ljZSA/IGludm9pY2UubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17cm93Ll9pZH0+IHwge3Jvdy5pbnZvaWNlTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbnRlbmFuY2UgPyBtYWludGVuYW5jZS5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtyb3cuX2lkfT4gfCBNLXtTdHJpbmcocm93LnNlcnZpY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1JlZiA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgZm9udFNpemU6ICc4MCUnLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZvaWNlICYmIGludm9pY2UubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZvaWNlLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT4gRGF0ZSB7ZGF5anMocm93Lmludm9pY2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IEludm9pY2UgIyB7cm93Lmludm9pY2VOYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT4gQW1vdW50ICA8c3Bhbj4kPC9zcGFuPiB7cm93LnRvdGFsSW52b2ljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IFBhaWQgIDxzcGFuPiQ8L3NwYW4+IHtyb3cudG90YWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiBCYWxhbmNlICA8c3Bhbj4kPC9zcGFuPiB7cm93LmJhbGFuY2VEdWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvSW52b2ljZVZpZXdBZG1pbkFsbC8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fT5WaWV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW52b2ljZTIgJiYgaW52b2ljZTIubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZvaWNlMi5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IERhdGUge2RheWpzKHJvdy5pbnZvaWNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiBJbnZvaWNlICMge3Jvdy5pbnZvaWNlTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IEFtb3VudCAgPHNwYW4+JDwvc3Bhbj4ge3Jvdy50b3RhbEludm9pY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiBQYWlkICA8c3Bhbj4kPC9zcGFuPiB7cm93LnRvdGFsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT4gQmFsYW5jZSAgPHNwYW4+JDwvc3Bhbj4ge3Jvdy5iYWxhbmNlRHVlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0ludm9pY2VWaWV3QWRtaW5BbGwvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX0+Vmlldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3B1cmNoYXNlICYmIHB1cmNoYXNlLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHVyY2hhc2UubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiBEYXRlIHtkYXlqcyhyb3cucHVyY2hhc2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IFB1cmNoYXNlICMge3Jvdy5wdXJjaGFzZU5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiBQdXJjaGFzZSBDb3N0ICA8c3Bhbj4kPC9zcGFuPiB7cm93LnB1cmNoYXNlQW1vdW50MX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9QdXJjaGFzZXNWaWV3QWRtaW5BbGwvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX0+Vmlldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21haW50ZW5hbmNlICYmIG1haW50ZW5hbmNlLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWFpbnRlbmFuY2UubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiBEYXRlIHtkYXlqcyhyb3cuc2VydmljZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT4gTWFpbnRlbmFuY2UgIyBNLXtTdHJpbmcocm93LnNlcnZpY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiBBbW91bnQgIDxzcGFuPiQ8L3NwYW4+IHtyb3cudG90YWxJbnZvaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL01haW50ZW5hbmNlVmlld0luZm9ybWF0aW9uLyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19PlZpZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93UmVmKDEpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypTdGFydCBJbnZvaWNlIGRldGFpbHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNTAwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmQ6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBoaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgcmVmPXtjb21wb25lbnRSZWZ9IGNsYXNzTmFtZT0naW52b2ljZWRldGFpbHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW52b2ljZVRlc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludEhlYWRlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiB0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIiA/IGRhdGE/LmJyYW5jaElkIDogXCJcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbnZvaWNlaHInPlFVT1RBVElPTjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCcgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMjBweCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nOiAnMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IGNvbmZpZ1snLS1jbGllbnQtYmxvY2stbGVmdC1vZmZzZXQnXSB8fCAnMHB4JywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxpbmVIZWlnaHQ6IDEuMzUsIHdpZHRoOiAnZml0LWNvbnRlbnQnLCBtaW5XaWR0aDogJzIwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzEwcHgnIH19PlF1b3RhdGlvbiBGb3I8L3NwYW4+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogJzE1cHgnIH19Pntyb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxMHB4JyB9fT57cm93LmN1c3RvbWVyTmFtZS5iaWxsaW5nQWRkcmVzcy50b1VwcGVyQ2FzZSgpfSx7cm93LmN1c3RvbWVyTmFtZS5iaWxsaW5nQ2l0eS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICdhdXRvJywgbWFyZ2luUmlnaHQ6IGNvbmZpZ1snLS1tZXRhZGF0YS1ibG9jay1yaWdodC1vZmZzZXQnXSB8fCAnMHB4Jywgd2lkdGg6ICdmaXQtY29udGVudCcsIGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdhdXRvIDFmcicsIGNvbHVtbkdhcDogJzI0cHgnLCByb3dHYXA6ICc2cHgnLCBmb250U2l6ZTogJzgwJScsIGFsaWduQ29udGVudDogJ3N0YXJ0JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+UXVvdGF0aW9uICM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+US17U3RyaW5nKHJvdy5lc3RpbWF0ZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+RGF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+e2RheWpzKHJvdy5lc3RpbWF0ZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuZXN0aW1hdGVTdWJqZWN0ICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+U3ViamVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3b3JkQnJlYWs6ICdicmVhay13b3JkJywgbWF4V2lkdGg6ICc0MDBweCcgfX0+e3Jvdy5lc3RpbWF0ZVN1YmplY3QudG9VcHBlckNhc2UoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5lc3RpbWF0ZURlZmVjdCAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19PkRlZmVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3b3JkQnJlYWs6ICdicmVhay13b3JkJywgbWF4V2lkdGg6ICc0MDBweCcgfX0+e3Jvdy5lc3RpbWF0ZURlZmVjdC50b1VwcGVyQ2FzZSgpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Lm5vdGVJbmZvICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmb250U2l6ZTogJzcwJScsIGZsb2F0OiAnbGVmdCcsIGxlZnQ6ICcwJywgd2lkdGg6ICc1MCUnLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5vdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyb3cubm90ZUluZm8gIT09IHVuZGVmaW5lZCA/IHJvdy5ub3RlSW5mbyA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgY2xlYXI6ICdib3RoJywgZm9udFNpemU6ICc4MCUnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19Pkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+UXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5SYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dEaXNjb3VudCAmJiA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PkRpc2NvdW50PC90aD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXRlbXM/Lm1hcCgoSXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGVkVW5pdCA9IGl0ZW0uZmluZCgoSXRlbTEpID0+IEl0ZW0xLl9pZCA9PT0gSXRlbS5pdGVtTmFtZS5faWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17SXRlbS5pZFJvd30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLml0ZW1EZXNjcmlwdGlvbiAhPT0gJ0xhYm9yIEZlZXMnID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+PHNwYW4+e2kgKyAxfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezZ9PntJdGVtLm5ld0Rlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzMwcHgnIH19PjxzcGFuPntpICsgMX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19ID48c3BhbiBoaWRkZW49e0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID09PSAnZW1wdHknIDogJyd9PntJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvVXBwZXJDYXNlKCl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICcyNTBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+PHNwYW4+e0l0ZW0uaXRlbURlc2NyaXB0aW9uLnRvVXBwZXJDYXNlKCl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIHdpZHRoOiAnMzBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+PHNwYW4+e0l0ZW0uaXRlbVF0eX0ge3JlbGF0ZWRVbml0ICE9PSB1bmRlZmluZWQgPyByZWxhdGVkVW5pdC51bml0LnRvVXBwZXJDYXNlKCkgOiAnJ308L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0Jywgd2lkdGg6ICc4MHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntJdGVtLml0ZW1SYXRlfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0Rpc2NvdW50ICYmIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+PHNwYW4gZGF0YS1wcmVmaXg+JTwvc3Bhbj48c3Bhbj57SXRlbS5pdGVtRGlzY291bnR9PC9zcGFuPjwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCB3aWR0aDogJzEwMHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntJdGVtLml0ZW1BbW91bnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT48c3Bhbj57aSArIDF9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17c2hvd0Rpc2NvdW50ID8gNSA6IDR9PjxzcGFuPntJdGVtLml0ZW1EZXNjcmlwdGlvbn08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3Bhbj57SXRlbS5pdGVtQW1vdW50fTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBjbGVhcjogJ2JvdGgnLCBmb250U2l6ZTogJzgwJScsIHBhZ2VCcmVha0luc2lkZTogJ2F2b2lkJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19IGNvbFNwYW49ezN9Pntyb3cubm90ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWIgVG90YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuQ2hlY2tUdkEgPyAnJyA6IDw+PGJyIC8+PHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT4oVGF4IEluY2x1c2l2ZSk8L3NwYW4+PC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+PHNwYW4+e3Jvdy5zdWJUb3RhbH08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zaGlwcGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19IGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5TaGlwcGluZzwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3Bhbj57cm93LnNoaXBwaW5nLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFkanVzdG1lbnROdW1iZXIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JyB9fSBjb2xTcGFuPXszfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4+e3Jvdy5hZGp1c3RtZW50fTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3Bhbj57cm93LmFkanVzdG1lbnROdW1iZXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuQ2hlY2tUdkEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JyB9fSBjb2xTcGFuPXszfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4+VFZBIEAgMTYlPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntyb3cudGF4ID8gcm93LnRheC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAnMC4wMCd9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICcyMDBweCcgfX0gY29sU3Bhbj17M30+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PjxzcGFuPlRvdGFsPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntyb3cudG90YWxJbnZvaWNlID8gcm93LnRvdGFsSW52b2ljZS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAnJ308L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy50b3RhbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19IGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5BbW91bnQgUGFpZDwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3Bhbj57cm93LnRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JyB9fSBjb2xTcGFuPXszfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnIzA5MzE3MCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5CYWxhbmNlIER1ZTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnIzA5MzE3MCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fSBjb2xTcGFuPXsyfT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntyb3cuYmFsYW5jZUR1ZSAhPT0gdW5kZWZpbmVkID8gcm93LmJhbGFuY2VEdWUudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogJyd9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19IGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGNvbFNwYW49ezJ9PjxzcGFuPlRvdGFsIEluIFdvcmRzPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICcxNTBweCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4+e3Jvdy50b3RhbFd9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzIHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIGZvbnRTaXplOiAnNzAlJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbGluZUhlaWdodDogJzE0cHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYW5rOiBTT0ZJQkFOUVVFIFNBIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50aXRsZWQ6IEdMT0JBTCBHQVRFIFNBUkw8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhbmsgQWNjb3VudDogMDAwMjMyMzMzMzAyMTQyNDcwMjAwNzM8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvZGUgU3dpZnQ6IFNGQlhDREtJWFhYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5UZXJtcyAmIENvbmRpdGlvbnMgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntyb3cudGVybXMudG9VcHBlckNhc2UoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaW5jbHVkZUxldHRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IHN0eWxlPXt7IHBhZ2VCcmVha0JlZm9yZTogJ2Fsd2F5cycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggNDBweCcsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBIZWFkZXIgZm9yIFNlY29uZCBQYWdlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXJCb3R0b206ICcycHggc29saWQgIzMwMzY4YScsIHBhZGRpbmdCb3R0b206ICcxNXB4JywgbWFyZ2luQm90dG9tOiAnMTBweCcsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludEhlYWRlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiB0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIiA/IGRhdGE/LmJyYW5jaElkIDogXCJcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEYXRlIGFuZCBMb2NhdGlvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzExMCUnLCBtYXJnaW46IDAgfX0+S29sd2V6aSwgbGUge2RheWpzKHJvdy5lc3RpbWF0ZURhdGUpLmZvcm1hdCgnREQgTU1NTSBZWVlZJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFJlY2lwaWVudCBJbmZvICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzExMCUnLCBmb250V2VpZ2h0OiAnYm9sZCcsIG1hcmdpbjogJzAgMCAycHgnIH19PlRvOiB7cm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9VcHBlckNhc2UoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMTEwJScsIG1hcmdpbjogMCB9fT57cm93LmN1c3RvbWVyTmFtZS5iaWxsaW5nQWRkcmVzcy50b1VwcGVyQ2FzZSgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxMTAlJywgbWFyZ2luOiAwIH19Pntyb3cuY3VzdG9tZXJOYW1lLmJpbGxpbmdDaXR5LnRvVXBwZXJDYXNlKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFN1YmplY3QgTGluZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxMTUlJywgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsIGNvbG9yOiAnIzMwMzY4YScsIG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJqZWN0OiBRdW90YXRpb24gUS17U3RyaW5nKHJvdy5lc3RpbWF0ZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX0gLSB7cm93LmVzdGltYXRlU3ViamVjdC50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTGV0dGVyIEJvZHkgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzEuNCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzExMCUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMzMzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnanVzdGlmeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzZXJpZicgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5hdHRhY2hlZExldHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTaWduYXR1cmUgQXJlYSAoT3B0aW9uYWwsIGJ1dCBwcm9mZXNzaW9uYWwpICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICdhdXRvJywgcGFkZGluZ1RvcDogJzVweCcsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogJzExMCUnIH19PlRoZSBNYW5hZ2VtZW50PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMzMDM2OGEnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+R0xPQkFMIEdBVEUgU0FSTDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW5Ub3A6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBoaWRkZW4+Li4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGhpZGRlbj4uLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIGJvdHRvbTogMCwgbGVmdDogMCwgcmlnaHQ6IDAsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzhweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48RW1haWxJY29uIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5jb250YWN0QGdsb2JhbGdhdGUuc2FybDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnOHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxQaG9uZUljb24gLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPisyNDMgODI3IDcyMiAyMjI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzhweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48V2ViSWNvbiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+d3d3Lkdsb2JhbEdhdGUuc2FybDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludm9pY2VkZXRhaWxzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdpbnZvaWNlVGVzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludEhlYWRlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiB0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIiA/IGRhdGE/LmJyYW5jaElkIDogXCJcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+PHAgY2xhc3NOYW1lPSdpbnZvaWNlaHInPlFVT1RBVElPTjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmc6ICcwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YWRkcmVzcyBzdHlsZT17eyBtYXJnaW5MZWZ0OiBjb25maWdbJy0tY2xpZW50LWJsb2NrLWxlZnQtb2Zmc2V0J10gfHwgJzBweCcsIGxpbmVIZWlnaHQ6IDEuMzUsIHdpZHRoOiAnZml0LWNvbnRlbnQnLCBtaW5XaWR0aDogJzIwMHB4JywgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwID5CaWxsIFRvPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT57cm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9VcHBlckNhc2UoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmN1c3RvbWVyTmFtZS5iaWxsaW5nQWRkcmVzcy50b1VwcGVyQ2FzZSgpfSx7cm93LmN1c3RvbWVyTmFtZS5iaWxsaW5nQ2l0eS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIG1hcmdpblJpZ2h0OiBjb25maWdbJy0tbWV0YWRhdGEtYmxvY2stcmlnaHQtb2Zmc2V0J10gfHwgJzBweCcsIHdpZHRoOiAnZml0LWNvbnRlbnQnLCBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdhdXRvIDFmcicsIGNvbHVtbkdhcDogJzI0cHgnLCByb3dHYXA6ICc2cHgnLCBmb250U2l6ZTogJzcwJScsIGFsaWduQ29udGVudDogJ3N0YXJ0JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5RdW90YXRpb24gIzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlEte1N0cmluZyhyb3cuZXN0aW1hdGVOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5EYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PntkYXlqcyhyb3cuZXN0aW1hdGVEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5lc3RpbWF0ZVN1YmplY3QgIT09ICcnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+U3ViamVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLCBtYXhXaWR0aDogJzQwMHB4JyB9fT57cm93LmVzdGltYXRlU3ViamVjdC50b1VwcGVyQ2FzZSgpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuZXN0aW1hdGVEZWZlY3QgIT09ICcnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+RGVmZWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0Jywgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsIG1heFdpZHRoOiAnNDAwcHgnIH19Pntyb3cuZXN0aW1hdGVEZWZlY3QudG9VcHBlckNhc2UoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cubm90ZUluZm8gIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZm9udFNpemU6ICc3MCUnLCBmbG9hdDogJ2xlZnQnLCBsZWZ0OiAnMCcsIHdpZHRoOiAnNTAlJywgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICczMHB4JyB9fT5Ob3RlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19Pntyb3cubm90ZUluZm99PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzcwJScsIG1hcmdpbkJvdHRvbTogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19Pkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PlF0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5SYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0Rpc2NvdW50ICYmIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+RGlzY291bnQ8L3RoPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PlRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXRlbXM/Lm1hcCgoSXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRVbml0ID0gaXRlbS5maW5kKChJdGVtMSkgPT4gSXRlbTEuX2lkID09PSBJdGVtLml0ZW1OYW1lLl9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17SXRlbS5pZFJvd30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtRGVzY3JpcHRpb24gIT09ICdMYWJvciBGZWVzJyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PjxzcGFuPntpICsgMX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezZ9PntJdGVtLm5ld0Rlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzMwcHgnIH19PjxzcGFuPntpICsgMX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0gPjxzcGFuIGhpZGRlbj17SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPT09ICdlbXB0eScgOiAnJ30+e0l0ZW0uaXRlbU5hbWUuaXRlbU5hbWUudG9VcHBlckNhc2UoKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjUwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PjxzcGFuPntJdGVtLml0ZW1EZXNjcmlwdGlvbi50b1VwcGVyQ2FzZSgpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIHdpZHRoOiAnMzBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+PHNwYW4+e0l0ZW0uaXRlbVF0eX0ge3JlbGF0ZWRVbml0ICE9PSB1bmRlZmluZWQgPyByZWxhdGVkVW5pdC51bml0LnRvVXBwZXJDYXNlKCkgOiAnJ308L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCB3aWR0aDogJzgwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+PHNwYW4+e0l0ZW0uaXRlbVJhdGV9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dEaXNjb3VudCAmJiA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PjxzcGFuIGRhdGEtcHJlZml4PiU8L3NwYW4+PHNwYW4+e0l0ZW0uaXRlbURpc2NvdW50fTwvc3Bhbj48L3RkPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCB3aWR0aDogJzEwMHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntJdGVtLml0ZW1BbW91bnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT48c3Bhbj57aSArIDF9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXtzaG93RGlzY291bnQgPyA1IDogNH0+PHNwYW4+e0l0ZW0uaXRlbURlc2NyaXB0aW9ufTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+PHNwYW4+e0l0ZW0uaXRlbUFtb3VudH08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgZm9udFNpemU6ICc3MCUnLCBwYWdlQnJlYWtJbnNpZGU6ICdhdm9pZCcsIHBhZ2VCcmVha0luc2lkZTogJ2F2b2lkJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICcyMDBweCcgfX0gY29sU3Bhbj17M30+e3Jvdy5ub3RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1YiBUb3RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LkNoZWNrVHZBID8gJycgOiA8PjxiciAvPjxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+KFRheCBJbmNsdXNpdmUpPC9zcGFuPjwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntyb3cuc3ViVG90YWx9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc2hpcHBpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JyB9fSBjb2xTcGFuPXszfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5TaGlwcGluZzwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntyb3cuc2hpcHBpbmcudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYWRqdXN0bWVudE51bWJlciA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19IGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PjxzcGFuPntyb3cuYWRqdXN0bWVudH08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3Bhbj57cm93LmFkanVzdG1lbnROdW1iZXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuQ2hlY2tUdkEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JyB9fSBjb2xTcGFuPXszfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5UVkEgQCAxNiU8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3Bhbj57cm93LnRheCA/IHJvdy50YXgudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogJzAuMDAnfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19IGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PjxzcGFuPlRvdGFsPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+PHNwYW4+e3Jvdy50b3RhbEludm9pY2UgPyByb3cudG90YWxJbnZvaWNlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6ICcnfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnRvdGFsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICcyMDBweCcgfX0gY29sU3Bhbj17M30+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4+QW1vdW50IFBhaWQ8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3Bhbj57cm93LnRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JyB9fSBjb2xTcGFuPXszfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICcjMDkzMTcwJywgZm9udFdlaWdodDogJ2JvbGQnIH19IGNvbFNwYW49ezJ9PjxzcGFuPkJhbGFuY2UgRHVlPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJyMwOTMxNzAnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3Bhbj57cm93LmJhbGFuY2VEdWUgIT09IHVuZGVmaW5lZCA/IHJvdy5iYWxhbmNlRHVlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6ICcnfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JyB9fSBjb2xTcGFuPXszfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGNvbFNwYW49ezJ9PjxzcGFuPlRvdGFsIEluIFdvcmRzPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzE1MHB4JyB9fSBjb2xTcGFuPXsyfT48c3Bhbj57cm93LnRvdGFsV308L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpblRvcDogJy01MHB4JywgZm9udFNpemU6ICc4MCUnIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTT0ZJQkFOUVVFIFNBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50aXRsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR0xPQkFMIEdBVEUgU0FSTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCB3aWR0aDogJzEwMHB4JywgYm9yZGVyOiAnbm9uZScsIGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYW5rIEFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMjMyMzMzMzAyMTQyNDcwMjAwNzNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2RlIFN3aWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNGQlhDREtJWFhYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgZm9udFNpemU6ICc4MCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXJtcyAmIENvbmRpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cudGVybXMudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9vdGVyaW52b2ljZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEVtYWlsSWNvbiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5jb250YWN0QGdsb2JhbGdhdGUuc2FybDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzVweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxQaG9uZUljb24gLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KzI0MyA4Mjc3MjIyMjI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc1cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48V2ViSWNvbiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj53d3cuR2xvYmFsR2F0ZS5zYXJsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pbmNsdWRlTGV0dGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc1MHB4JywgYm9yZGVyVG9wOiAnMXB4IGRhc2hlZCAjY2NjJywgcGFkZGluZ1RvcDogJzUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFZpc2libGUgUHJldmlldyBvZiBTZWNvbmQgUGFnZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLCBib3JkZXJSYWRpdXM6ICc4cHgnLCBib3hTaGFkb3c6ICcwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4wNSknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXJCb3R0b206ICcycHggc29saWQgIzMwMzY4YScsIHBhZGRpbmdCb3R0b206ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnMzBweCcsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludEhlYWRlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiB0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIiA/IGRhdGE/LmJyYW5jaElkIDogXCJcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBtYXJnaW5Cb3R0b206ICczMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+S29sd2V6aSwgbGUge2RheWpzKHJvdy5lc3RpbWF0ZURhdGUpLmZvcm1hdCgnREQgTU1NTSBZWVlZJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICczMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlRvOiB7cm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9VcHBlckNhc2UoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntyb3cuY3VzdG9tZXJOYW1lLmJpbGxpbmdBZGRyZXNzLnRvVXBwZXJDYXNlKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cm93LmN1c3RvbWVyTmFtZS5iaWxsaW5nQ2l0eS50b1VwcGVyQ2FzZSgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLCBjb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1YmplY3Q6IFF1b3RhdGlvbiBRLXtTdHJpbmcocm93LmVzdGltYXRlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfSAtIHtyb3cuZXN0aW1hdGVTdWJqZWN0LnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS42JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMzMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2p1c3RpZnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5hdHRhY2hlZExldHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNDBweCcsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlRoZSBNYW5hZ2VtZW50PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMzMDM2OGEnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+R0xPQkFMIEdBVEUgU0FSTDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvdzEgPT09IDIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNPTU1FTlRTPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdzEoMSl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0RWRpdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fSBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdjb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nY29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlYXNvbihlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2Jz5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICczNTVweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q29tbWVudHMxLm1hcCgoSXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtJdGVtLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7SXRlbS5kYXRlQ29tbWVudCA/IGRheWpzKEl0ZW0uZGF0ZUNvbW1lbnQpLmZvcm1hdCgnREQvTU0nKSA6ICcnfSB7SXRlbS5Db21tZW50SW5mby5wZXJzb24gKyAnOiAnICsgSXRlbS5Db21tZW50SW5mby5yZWFzb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICB7c2hvdzEgPT09IDMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhJU1RPUlk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cxKDEpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNTE4cHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Jvdy5wZXJzb24gKyAnIG9uICcgKyBkYXlqcyhyb3cuZGF0ZU5vdGlmaWNhdGlvbikuZm9ybWF0KCdERC9NTU1NJyl9OiB7cm93LnJlYXNvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9IDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBGYWlsZWQgdG8gU2F2ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFc3RpbWF0ZVZpZXdBZG1pbkFsbFxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaGVhZGluZyAqL1xuLmludm9pY2VUZXN0IHtcbiAgbWFyZ2luOiAwIDAgM2VtO1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbmgxIHtcbiAgZm9udDogYm9sZCAxMDAlIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaW52b2ljZVRlc3QgYWRkcmVzcyB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIG1hcmdpbjogMCAwIDFlbSAxZW07XG59XG5cbmFkZHJlc3Mge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDFlbSAxZW07XG59XG5cbi5pbnZvaWNlVGVzdCBoMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItY29sb3I6ICM5OTk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxMCU7XG4gIGZvbnQ6IGJvbGQgMTAwJSBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmludm9pY2VUZXN0IGFkZHJlc3MgcCB7XG4gIG1hcmdpbjogMCAwIDAuMjVlbTtcbn1cblxuLmludm9pY2VUZXN0IHNwYW4sIC5pbnZvaWNlVGVzdCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pbnZvaWNlVGVzdCBzcGFuIHtcbiAgbWFyZ2luOiAwIDFlbSAxZW0gMDtcbiAgbWF4LWhlaWdodDogMjUlO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaW52b2ljZVRlc3QgaW1nIHtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgbWF4LXdpZHRoOiB2YXIoLS1oZWFkZXItbG9nby13aWR0aCwgMjQwcHgpO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW52b2ljZVRlc3Q6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi8qIGFydGljbGUgKi9cbmFydGljbGUsIGFydGljbGUgYWRkcmVzcywgdGFibGUge1xuICBtYXJnaW46IDAgMCAzZW07XG59XG5cbmFydGljbGUgaDEge1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmFydGljbGUgYWRkcmVzcyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDkwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuXG5hcnRpY2xlOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiB0YWJsZSAqL1xudGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi8qIHRhYmxlIGZpcnN0VGFibGUgKi9cbnRhYmxlLmZpcnN0VGFibGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG50YWJsZS5maXJzdFRhYmxlOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiB0YWJsZSBmaXJzdFRhYmxlICovXG50YWJsZS5maXJzdFRhYmxlIHRoIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxudGFibGUuZmlyc3RUYWJsZSB0ZCB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbmFzaWRlIGgxI25vdGVzIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG4gIG1hcmdpbjogMCAwIDFlbTtcbn1cblxuYXNpZGUgaDEjbm90ZXMge1xuICBib3JkZXItY29sb3I6ICM5OTk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxMCU7XG4gIGZvbnQ6IGJvbGQgMTAwJSBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0ludm9pY2VWaWV3L0FkbWluVmlldy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0EsWUFBQTtBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJRztFQUNDLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUU7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQW9CLDBCQUFBO0VBQTRCLHdCQUFBO0VBQTBCLDBCQUFBO0VBQzFFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUlOOztBQURFO0VBQ0Usa0JBQUE7QUFJSjs7QUFERTtFQUFzQyxjQUFBO0VBQWdCLFdBQUE7QUFNeEQ7O0FBTEU7RUFBcUIsbUJBQUE7RUFBcUIsZUFBQTtFQUFpQixjQUFBO0VBQWdCLGtCQUFBO0FBWTdFOztBQVhFO0VBQW1CLGdCQUFBO0VBQWtCLDBDQUFBO0VBQTRDLG1CQUFBO0VBQXFCLGdCQUFBO0FBa0J4Rzs7QUFmRTtFQUFxQixXQUFBO0VBQWEsV0FBQTtFQUFhLGNBQUE7QUFxQmpEOztBQW5CRSxZQUFBO0FBQ0E7RUFBa0MsZUFBQTtBQXVCcEM7O0FBdEJFO0VBQWEsbUJBQUE7RUFBcUIsa0JBQUE7QUEyQnBDOztBQTFCRTtFQUFrQixXQUFBO0VBQWEsY0FBQTtFQUFnQixXQUFBO0VBQWEsaUJBQUE7QUFpQzlEOztBQS9CRTtFQUFnQixXQUFBO0VBQWEsV0FBQTtFQUFhLGNBQUE7QUFxQzVDOztBQW5DRSxVQUFBO0FBRUE7RUFBUSxrQkFBQTtFQUFvQixXQUFBO0FBdUM5Qjs7QUF0Q0U7RUFBUSx5QkFBQTtBQTBDVjs7QUF6Q0UscUJBQUE7QUFFQTtFQUFtQixZQUFBO0VBQWMsVUFBQTtFQUFZLFdBQUE7QUE4Qy9DOztBQTdDRTtFQUF5QixXQUFBO0VBQWEsV0FBQTtFQUFhLGNBQUE7QUFtRHJEOztBQWpERSxxQkFBQTtBQUVBO0VBQXNCLFVBQUE7QUFvRHhCOztBQW5ERTtFQUFzQixVQUFBO0FBdUR4Qjs7QUFyREU7RUFBaUIsWUFBQTtFQUFjLHFCQUFBO0VBQXVCLGVBQUE7QUEyRHhEOztBQTFERTtFQUFpQixrQkFBQTtFQUFvQiwwQkFBQTtFQUE0Qix3QkFBQTtFQUEwQiwwQkFBQTtFQUN6RixxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFpRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLyogaGVhZGluZyAqL1xcclxcblxcclxcbi5pbnZvaWNlVGVzdCB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDNlbTtcXHJcXG4gICAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAgaDEge1xcclxcbiAgICBmb250OiBib2xkIDEwMCUgc2Fucy1zZXJpZjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNWVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbnZvaWNlVGVzdCBhZGRyZXNzIHtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDc1JTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMWVtIDFlbTtcXHJcXG4gIH1cXHJcXG4gIGFkZHJlc3Mge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIG1hcmdpbjogMCAwIDFlbSAxZW07XFxyXFxuICB9XFxyXFxuICAuaW52b2ljZVRlc3QgaDEge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICAgIGJvcmRlci1jb2xvcjogIzk5OTsgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7IGJvcmRlci1ib3R0b20td2lkdGg6IDEwJTsgZm9udDogYm9sZCAxMDAlIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNWVtO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gIC5pbnZvaWNlVGVzdCBhZGRyZXNzIHAge1xcclxcbiAgICBtYXJnaW46IDAgMCAwLjI1ZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbnZvaWNlVGVzdCBzcGFuLCAuaW52b2ljZVRlc3QgaW1nIHsgZGlzcGxheTogYmxvY2s7IGZsb2F0OiBsZWZ0OyB9XFxyXFxuICAuaW52b2ljZVRlc3Qgc3BhbiB7ICBtYXJnaW46IDAgMWVtIDFlbSAwOyBtYXgtaGVpZ2h0OiAyNSU7IG1heC13aWR0aDogOTAlOyBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXHJcXG4gIC5pbnZvaWNlVGVzdCBpbWcgeyBtYXgtaGVpZ2h0OiA4MHB4OyBtYXgtd2lkdGg6IHZhcigtLWhlYWRlci1sb2dvLXdpZHRoLCAyNDBweCk7IG9iamVjdC1maXQ6IGNvbnRhaW47IG1hcmdpbi10b3A6IDEwcHg7fVxcclxcblxcclxcbiAgXFxyXFxuICAuaW52b2ljZVRlc3Q6YWZ0ZXIgeyBjbGVhcjogYm90aDsgY29udGVudDogXFxcIlxcXCI7IGRpc3BsYXk6IHRhYmxlOyB9XFxyXFxuICBcXHJcXG4gIC8qIGFydGljbGUgKi9cXHJcXG4gIGFydGljbGUsIGFydGljbGUgYWRkcmVzcywgdGFibGUgeyBtYXJnaW46IDAgMCAzZW07IH1cXHJcXG4gIGFydGljbGUgaDEgeyBjbGlwOiByZWN0KDAgMCAwIDApOyBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXHJcXG4gIGFydGljbGUgYWRkcmVzcyB7IGZsb2F0OiBsZWZ0OyBmb250LXNpemU6IDkwJTsgZmxvYXQ6IGxlZnQ7IGxpbmUtaGVpZ2h0OiAxMHB4OyB9XFxyXFxuICBcXHJcXG4gIGFydGljbGU6YWZ0ZXIgeyBjbGVhcjogYm90aDsgY29udGVudDogXFxcIlxcXCI7IGRpc3BsYXk6IHRhYmxlOyB9XFxyXFxuICBcXHJcXG4gIC8qIHRhYmxlICovXFxyXFxuICBcXHJcXG4gIHRhYmxlIHsgdGFibGUtbGF5b3V0OiBhdXRvOyB3aWR0aDogMTAwJTsgfVxcclxcbiAgdGFibGUgeyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO31cXHJcXG4gIC8qIHRhYmxlIGZpcnN0VGFibGUgKi9cXHJcXG4gIFxcclxcbiAgdGFibGUuZmlyc3RUYWJsZSB7IGZsb2F0OiByaWdodDsgd2lkdGg6IDUwJTsgaGVpZ2h0OiA1MCU7fVxcclxcbiAgdGFibGUuZmlyc3RUYWJsZTphZnRlciB7IGNsZWFyOiBib3RoOyBjb250ZW50OiBcXFwiXFxcIjsgZGlzcGxheTogdGFibGU7IH1cXHJcXG4gIFxcclxcbiAgLyogdGFibGUgZmlyc3RUYWJsZSAqL1xcclxcbiAgXFxyXFxuICB0YWJsZS5maXJzdFRhYmxlIHRoIHsgd2lkdGg6IDQwJTsgfVxcclxcbiAgdGFibGUuZmlyc3RUYWJsZSB0ZCB7IHdpZHRoOiA2MCU7IH1cXHJcXG5cXHJcXG4gIGFzaWRlIGgxI25vdGVzIHsgYm9yZGVyOiBub25lOyBib3JkZXItd2lkdGg6IDAgMCAxcHg7IG1hcmdpbjogMCAwIDFlbTsgfVxcclxcbiAgYXNpZGUgaDEjbm90ZXMgeyBib3JkZXItY29sb3I6ICM5OTk7IGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkOyBib3JkZXItYm90dG9tLXdpZHRoOiAxMCU7IGZvbnQ6IGJvbGQgMTAwJSBzYW5zLXNlcmlmO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41ZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BZG1pblZpZXcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQWRtaW5WaWV3LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlTWVtbyIsInVzZUxheW91dENvbmZpZyIsIlNpZGViYXJEYXNoIiwiUHJpbnRIZWFkZXIiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJUYWJsZUNvbnRhaW5lciIsIkNoZWNrYm94IiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlBhcGVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkZvcm1MYWJlbCIsIlJhZGlvR3JvdXAiLCJGb3JtQ29udHJvbExhYmVsIiwiUmFkaW8iLCJJbnB1dCIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJGYWRlIiwiQm94IiwiQXV0b2NvbXBsZXRlIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZVJvdyIsIlRhYmxlSGVhZCIsIkJ1dHRvbiIsIk1lbnUiLCJEaXZpZGVyIiwiRWRpdEljb24iLCJJb3NTaGFyZUljb24iLCJMb2NhbFByaW50c2hvcEljb24iLCJBdHRhY2hGaWxlSWNvbiIsIlNlbmRJY29uIiwiRXN0aW1hdGVJbmZvcm1hdGlvbiIsIk5hdkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsImF4aW9zIiwiY2FjaGVkR2V0IiwiRU5EUE9JTlRfVVJMIiwiTGFuZ3VhZ2VJY29uIiwiRW1haWxJY29uIiwiUGhvbmVJY29uIiwiV2ViSWNvbiIsIkltYWdlIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTGluayIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJkYXlqcyIsIlJlYWN0VG9QcmludCIsInVzZVJlYWN0VG9QcmludCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJMb2FkZXIiLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiQ2xvc2UiLCJBcnJvd0JhY2siLCJLZXlib2FyZEFycm93RG93biIsIk1lc3NhZ2VBZG1pblZpZXciLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsIkZpbGVDb3B5IiwiRXhjZWxKUyIsInNhdmVBcyIsIkV4cGxpY2l0IiwiRWRpdFRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIlByaW50VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkVzdGltYXRlVmlld0FkbWluQWxsIiwiX2VzdGltYXRlJGZpbHRlciIsIl91c2VMYXlvdXRDb25maWciLCJjb25maWciLCJfdXNlUGFyYW1zIiwiaWQiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmOSIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJncmFudEFjY2VzcyIsInNldEdyYW50QWNjZXNzIiwiZmV0Y2hOdW1iZXIiLCJfcmVmMCIsIl9yZXMkZGF0YSIsImZpbHRlciIsInJvdyIsInVzZXJJRCIsIm1hcCIsIm1vZHVsZXMiLCJlc3RpbWF0aW9uSW5mb1UiLCJtb2R1bGVOYW1lIiwiYWNjZXNzIiwiZWRpdE0iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImVzdGltYXRlIiwic2V0RXN0aW1hdGUiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIml0ZW0iLCJTZXRJdGVtcyIsImFsbEludm9pY2VzUmVmIiwiYXBpVXJsIiwiZmV0Y2hEYXRhIiwiX3JlZjEiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJQcm9taXNlIiwiYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsMiIsInJlc0l0ZW0iLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsImludm9pY2UiLCJzZXRJbnZvaWNlIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwiaW52b2ljZTIiLCJzZXRJbnZvaWNlMiIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJwdXJjaGFzZSIsInNldFB1cmNoYXNlIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsIm1haW50ZW5hbmNlIiwic2V0TWFpbnRlbmFuY2UiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiY3VzdG9tZXJOYW1lMSIsInNldEN1c3RvbWVyTmFtZTEiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwiZXN0aW1hdGVOdW1iZXIiLCJzZXRFc3RpbWF0ZU51bWJlcjEiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiaXRlbXMiLCJzZXRJdGVtcyIsIl9yZWYxMCIsIl9pbnZvaWNlUmVzcG9uc2UkZGF0YSIsIl9wdXJjaGFzZVJlc3BvbnNlJGRhdCIsIl9tYWludGVuYW5jZVJlc3BvbnNlJCIsIl95aWVsZCRQcm9taXNlJGFsbDMiLCJfeWllbGQkUHJvbWlzZSRhbGw0IiwiaW52b2ljZVJlc3BvbnNlIiwicHVyY2hhc2VSZXNwb25zZSIsIm1haW50ZW5hbmNlUmVzcG9uc2UiLCJyZXNFc3QiLCJjdXJyZW50IiwiY3VzdG9tZXJOYW1lIiwicmVwbGFjZSIsImVzdFJlZiIsIlJlZmVyZW5jZU5hbWUiLCJ2YWxpZEVzdFJlZiIsInRyaW0iLCJfaWQiLCJsb2ciLCJzaG93RGlzY291bnQiLCJzb21lIiwiaXRlbURpc2NvdW50IiwibGVuZ3RoIiwiZmlsdGVyZWRJbnZvaWNlIiwiZmluZCIsIkl0ZW0iLCJSZWZlcmVuY2VOYW1lMiIsIl9SZWFjdCR1c2VTdGF0ZSIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiQm9vbGVhbiIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2VNZW51IiwiY29tcG9uZW50UmVmIiwiaGFuZGxlUHJpbnQiLCJjb250ZW50IiwiZG9jdW1lbnRUaXRsZSIsIm9uQmVmb3JlR2V0Q29udGVudCIsIlBBR0VfSEVJR0hUIiwicHJpbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibnVtYmVyT2ZQYWdlIiwiTWF0aCIsImNlaWwiLCJfcHJpbnRFbGVtZW50JGdldEVsZW0iLCJfcHJpbnRFbGVtZW50JGdldEVsZW0yIiwiaGVpZ2h0V2l0aFNpbmdsZUhlYWRlciIsInJlcXVpcmVkSGVpZ2h0IiwiaGVhZGVySGVpZ2h0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmb290ZXJIZWlnaHQiLCJyZW1vdmUiLCJvbkFmdGVyUHJpbnQiLCJoYW5kbGVPcGVuUHJpbnQiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwic2hvdzEiLCJzZXRTaG93MSIsImhhbmRsZVNob3cxIiwiZSIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwiQ29tbWVudHMxIiwic2V0Q29tbWVudHMiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4Iiwibm90aWZpY2F0aW9uIiwic2V0Tm90aWZpY2F0aW9uIiwiZmV0Y2hDb21tZW50IiwiX3JlZjExIiwiX3Jlc0NvbW1lbnQkZGF0YSIsIl9yZXNOb3RpZmljYXRpb24kZGF0YSIsIl95aWVsZCRQcm9taXNlJGFsbDUiLCJfeWllbGQkUHJvbWlzZSRhbGw2IiwicmVzQ29tbWVudCIsInJlc05vdGlmaWNhdGlvbiIsIkNvbW1lbnRJbmZvIiwiaWRJbmZvIiwicmV2ZXJzZSIsInBlcnNvbiIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xvc2VFcnJvciIsImRhdGVDb21tZW50IiwiRGF0ZSIsIm5vdyIsImhhbmRsZVN1Ym1pdEVkaXQiLCJfcmVmMTIiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJuZXdEYXRhIiwiX3giLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsInNob3dSZWYiLCJzZXRTaG93UmVmIiwiaGFuZGxlU2hvd1JlZiIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJkYXRhMCIsIm51bWJlciIsIlN0cmluZyIsInBhZFN0YXJ0IiwiaW52b2ljZURhdGUiLCJlc3RpbWF0ZURhdGUiLCJmb3JtYXQiLCJBZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3MiLCJ0b1VwcGVyQ2FzZSIsImJpbGxpbmdDaXR5Iiwic3RhdHVzIiwiZGF0YTIiLCJubyIsImludm9pY2VTdWJqZWN0IiwiZXN0aW1hdGVTdWJqZWN0IiwiaW52b2ljZURlZmVjdCIsImVzdGltYXRlRGVmZWN0IiwiZGF0YTUiLCJpIiwiaXRlbU5hbWUiLCJpdGVtRGVzY3JpcHRpb24iLCJpdGVtUXR5IiwiaXRlbVJhdGUiLCJpdGVtQW1vdW50IiwiZGF0YTYiLCJzdWJUb3RhbCIsImRhdGE5IiwidG90YWxJbnZvaWNlIiwiZGF0YTQiLCJub3RlSW5mbyIsImRhdGExMSIsImJhbGFuY2VEdWUiLCJkYXRhMTIiLCJ0b3RhbFciLCJleHBvcnRUb0V4Y2VsIiwiX3JlZjEzIiwid29ya2Jvb2siLCJXb3JrYm9vayIsIndvcmtTaGVldCIsImFkZFdvcmtzaGVldCIsImNvbHVtbnMxIiwiaGVhZGVyIiwia2V5IiwiY29sdW1uczIiLCJjb2x1bW5zNSIsImFkZFJvdyIsImNvbCIsImZvckVhY2giLCJtZXJnZUNlbGxzIiwiYnVmZmVyIiwieGxzeCIsIndyaXRlQnVmZmVyIiwiYm9sZCIsIkJsb2IiLCJ0eXBlIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93IiwibmFtZSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsImNvbnRhaW5lciIsInhzIiwib25JZCIsIl9yZWYxNCIsIl9kYXRhIiwiX3JvdyRpdGVtcyIsIl9kYXRhMiIsIl9kYXRhMyIsIl9yb3ckaXRlbXMyIiwiX2RhdGE0IiwiZm9udFdlaWdodCIsImVzdGltYXRlTmFtZSIsImludm9pY2VOYW1lIiwidW5kZWZpbmVkIiwiZGlzYWJsZUVsZXZhdGlvbiIsImVuZEljb24iLCJib3JkZXIiLCJNZW51TGlzdFByb3BzIiwib25DbG9zZSIsIlRyYW5zaXRpb25Db21wb25lbnQiLCJkaXNhYmxlZCIsInRvIiwiZ2FwIiwicHVyY2hhc2VOYW1lIiwicHJvamVjdE5hbWUiLCJzZXJ2aWNlTnVtYmVyIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwidG90YWwiLCJwdXJjaGFzZURhdGUiLCJwdXJjaGFzZUFtb3VudDEiLCJzZXJ2aWNlRGF0ZSIsInRpdGxlIiwicGxhY2VtZW50IiwiZmxvYXQiLCJvdmVyZmxvd1kiLCJiYWNrZ3JvdW5kIiwiaGlkZGVuIiwicmVmIiwiYm9yZGVyQm90dG9tIiwiYnJhbmNoSWQiLCJwYWRkaW5nIiwibGluZUhlaWdodCIsIm1pbldpZHRoIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImNvbHVtbkdhcCIsInJvd0dhcCIsImFsaWduQ29udGVudCIsIkZyYWdtZW50Iiwid29yZEJyZWFrIiwiY2xlYXIiLCJib3JkZXJDb2xsYXBzZSIsInJlbGF0ZWRVbml0IiwiSXRlbTEiLCJpZFJvdyIsIm5ld0Rlc2NyaXB0aW9uIiwiY29sU3BhbiIsImJvcmRlckxlZnQiLCJ1bml0IiwidG9GaXhlZCIsInBhZ2VCcmVha0luc2lkZSIsIm5vdGUiLCJDaGVja1R2QSIsInNoaXBwaW5nIiwiYWRqdXN0bWVudE51bWJlciIsImFkanVzdG1lbnQiLCJ0YXgiLCJ0ZXJtcyIsImluY2x1ZGVMZXR0ZXIiLCJwYWdlQnJlYWtCZWZvcmUiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbiIsInRleHREZWNvcmF0aW9uIiwiZm9udEZhbWlseSIsImF0dGFjaGVkTGV0dGVyIiwicGFkZGluZ1RvcCIsImJvdHRvbSIsInJpZ2h0IiwiYm9yZGVyVG9wIiwiYm9yZGVyUmFkaXVzIiwib25TdWJtaXQiLCJyZXF1aXJlZCIsIm11bHRpbGluZSIsInJvd3MiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWwiLCJkYXRlTm90aWZpY2F0aW9uIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==