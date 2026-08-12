"use strict";
exports.id = "src_js_AdminView1_DailyExpenses_js";
exports.ids = ["src_js_AdminView1_DailyExpenses_js"];
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

/***/ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), 'DragIndicatorRounded'));

/***/ },

/***/ "./src/js/AdminView1/DailyExpenses.js"
/*!********************************************!*\
  !*** ./src/js/AdminView1/DailyExpenses.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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










































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref7 => {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded4);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref8 => {
  var theme = _ref8.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_30__["default"], {
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
function DailyExpenses() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.selectCurrentUser);
  var hasTvaValue = item => {
    return !!(item.CheckTvA || item.checkTvA || item.CheckTva || item.hasTVA || item.tva || item.TVA);
  };
  var getTaxValue = item => {
    var tax = item.tax || item.taxAmount || item.vatAmount || item.TvaAmount || item.taxUSD || 0;
    if (tax > 0) return tax;
    if (hasTvaValue(item)) {
      return Number(item.total || item.amount || 0) * 0.16;
    }
    return 0;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_36__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.setUser)({
              userName: Name,
              role: Role,
              id: res.data.data._id
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to fetch user data.');
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
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_36__["default"].get(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL + '/grantAccess');
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var DailyEInfoC = grantAccess.filter(row => row.moduleName === "Expenses" && row.access.createM === true);
  var DailyEInfoV = grantAccess.filter(row => row.moduleName === "Expenses" && row.access.viewM === true);
  var DailyEInfoU = grantAccess.filter(row => row.moduleName === "Expenses" && row.access.editM === true);
  var DailyEInfoD = grantAccess.filter(row => row.moduleName === "Expenses" && row.access.deleteM === true);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    expenses = _useState4[0],
    setExpenses = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loadingData = _useState6[0],
    setLoadingData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedRows = _useState8[0],
    setSelectedRows = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    loadingOpenModal = _useState10[0],
    setLoadingOpenModal = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    open1 = _useState12[0],
    setOpen1 = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    open2 = _useState14[0],
    setOpen2 = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    expensesCategory = _useState16[0],
    setExpensesCategory = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    cashDate = _useState18[0],
    setCashDate = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    relatedDate = _useState20[0],
    setRelatedDate = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    cashNumber = _useState22[0],
    setCashNumber = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    rate = _useState24[0],
    setRate = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    totalCash = _useState26[0],
    setTotalCash = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    amount = _useState28[0],
    setAmount = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    reason = _useState30[0],
    setReason = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState32 = _slicedToArray(_useState31, 2),
    newPurchase = _useState32[0],
    setNewPurchase = _useState32[1];
  var handleOpenOffline = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    page = _useState34[0],
    setPage = _useState34[1]; // Initialize page state to 0 (0-based index)
  var limit = 100;
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState36 = _slicedToArray(_useState35, 2),
    searchTerm = _useState36[0],
    setSearchTerm = _useState36[1]; // Initialize search term state
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState38 = _slicedToArray(_useState37, 2),
    filterField = _useState38[0],
    setFilterField = _useState38[1]; // Initialize filter field state
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState40 = _slicedToArray(_useState39, 2),
    filterValue = _useState40[0],
    setFilterValue = _useState40[1]; // Initialize filter value state
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState42 = _slicedToArray(_useState41, 2),
    totalPage = _useState42[0],
    SetTotalPage = _useState42[1];
  var fetchItems = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (page, searchTerm, filterField, filterValue) {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_36__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/expense-Information?page=").concat(page + 1, "&limit=").concat(limit, "&search=").concat(encodeURIComponent(searchTerm.trim()), "&filterField=").concat(encodeURIComponent(filterField.trim()), "&filterValue=").concat(encodeURIComponent(filterValue.trim())));
        var formatDate = res.data.itemI.map(item => {
          var _item$expenseCategory, _item$accountNameInfo;
          return _objectSpread(_objectSpread({}, item), {}, {
            id: item._id,
            dataField: dayjs__WEBPACK_IMPORTED_MODULE_46___default()(item.expenseDate).format('DD/MM/YYYY'),
            category: ((_item$expenseCategory = item.expenseCategory) === null || _item$expenseCategory === void 0 ? void 0 : _item$expenseCategory.expensesCategory) || item.expenseCategory || '',
            name: ((_item$accountNameInfo = item.accountNameInfo) === null || _item$accountNameInfo === void 0 ? void 0 : _item$accountNameInfo.name) || '',
            employee: Array.isArray(item.employeeName) ? item.employeeName.map(row => row.employee || row) : []
          });
        });
        SetTotalPage(Math.ceil(res.data.totalItem / limit)); // Ensure totalPage is correctly calculated
        setExpenses(formatDate);
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to fetch expenses.');
        setLoadingData(false);
      }
    });
    return function fetchItems(_x, _x2, _x3, _x4) {
      return _ref11.apply(this, arguments);
    };
  }();
  var handleRefreshSearch = () => {
    fetchItems(page, searchTerm, filterField, filterValue);
  };
  var fetchAndSaveData = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      try {
        var resRate = yield axios__WEBPACK_IMPORTED_MODULE_36__["default"].get(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL + '/rate');
        resRate.data.data.map(row => setRate(row.rate));
      } catch (error) {
        console.error('Error fetching data:', error);
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to fetch daily rate.');
      }
    });
    return function fetchAndSaveData() {
      return _ref12.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchItems(page, searchTerm, filterField, filterValue);
    fetchAndSaveData();
  }, [page, searchTerm, filterField, filterValue]);
  var handlePageChange = (event, newPage) => {
    setPage(newPage - 1); // Update page state (convert to 0-based index)
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCash = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        try {
          var _resCash$data;
          var resCash = yield axios__WEBPACK_IMPORTED_MODULE_36__["default"].get(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL + '/cash');
          (_resCash$data = resCash.data) === null || _resCash$data === void 0 || (_resCash$data = _resCash$data.data) === null || _resCash$data === void 0 || _resCash$data.filter(row => dayjs__WEBPACK_IMPORTED_MODULE_46___default()(row.cashDate).format('DD/MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_46___default()(cashDate).format('DD/MM/YYYY')).map(row => setRelatedDate(row.cashDate));
        } catch (error) {
          console.error('Connection error:', error);
        }
      });
      return function fetchCash() {
        return _ref13.apply(this, arguments);
      };
    }();
    fetchCash();
  }, [cashDate]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator(function* () {
        try {
          var _res$data2, _res$data3;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_36__["default"].get(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL + '/get-last-saved-cash');
          var num = res.data && res.data.cashNumber ? parseInt(((_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.cashNumber) || ((_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.cashNumber) || 0) : 0;
          setCashNumber(num + 1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref14.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [cashDate]);
  var Create = {
    person: user.data.userName,
    cashNumber: "C-00" + cashNumber,
    dateComment: dayjs__WEBPACK_IMPORTED_MODULE_46___default()(cashDate).format('DD/MM/YYYY')
  };
  {/** Cash start */}
  var addItem = () => {
    setAmount([...amount, {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_54__["default"])(),
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
    list[i]['total'] = Math.round((parseFloat(list[i]['amountFC']) / list[i]['rate'] + parseFloat(list[i]['amountUsd'])) * 100) / 100;
    setAmount(list);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var sum = 0;
    amount.forEach(item => {
      sum += parseFloat(item.total) || 0;
    });
    setTotalCash(Math.round(sum * 100) / 100);
  }, [amount]);
  {/** Cash end */}
  var handleOpenUpdate = () => {
    setOpen1(true);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
  };
  var handleOpenCash = () => {
    setOpen2(true);
  };
  var handleCloseCash = () => {
    setOpen2(false);
  };
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
    setSelectedRows([]);
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
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    open = _useState50[0],
    setOpen = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState52 = _slicedToArray(_useState51, 2),
    DeleteId = _useState52[0],
    setDeleteId = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState54 = _slicedToArray(_useState53, 2),
    modalOpenLoading = _useState54[0],
    setModalOpenLoading = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState56 = _slicedToArray(_useState55, 2),
    ErrorOpenModal = _useState56[0],
    setErrorOpenModal = _useState56[1];
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    handleCloseReasonDelete();
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
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  var handleClose = () => {
    setOpen(false);
  };
  var handleCloseModal = () => {
    window.location.reload();
    setModalOpenLoading(false);
    // Assuming setLoadingOpenModal is a state setter for a loading modal
    // If it doesn't exist, this line will cause an error.
    // I'm adding it based on the provided snippet, assuming it's defined elsewhere.
    // If not, it should be removed.
    // setLoadingOpenModal(false);
    setOpen1(false);
    setOpen2(false);
    setOpen(false);
    fetchItems(page, searchTerm, filterField, filterValue);
    fetchAndSaveData();
  };
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState58 = _slicedToArray(_useState57, 2),
    saving = _useState58[0],
    setSaving = _useState58[1];
  var handleSubmitCategory = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var data = {
        expensesCategory
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_36__["default"].post(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL + '/create-expensesCategory', data);
        if (res) {
          handleOpenModal();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmitCategory(_x5) {
      return _ref15.apply(this, arguments);
    };
  }();
  var handleCreateNotification1 = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: 'Todays Cash' + ' / Cash-' + ReferenceInfoNumber,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_36__["default"].post(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL + '/create-notification', data);
      } catch (error) {
        console.error('Notification error:', error);
      }
    });
    return function handleCreateNotification1(_x6, _x7) {
      return _ref16.apply(this, arguments);
    };
  }();
  var handleSubmitCash = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var data = {
        cashDate,
        cashNumber,
        rate,
        totalCash,
        amount,
        Create,
        synced: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_36__["default"].post(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL + '/create-cash', data);
        if (res) {
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.cashNumber;
          handleCreateNotification1(ReferenceInfo, ReferenceInfoNumber);
          handleOpenModal();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmitCash(_x8) {
      return _ref17.apply(this, arguments);
    };
  }();
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState60 = _slicedToArray(_useState59, 2),
    PurchaseDeleted = _useState60[0],
    setPurchaseDeleted = _useState60[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchFunction = /*#__PURE__*/function () {
      var _ref18 = _asyncToGenerator(function* () {
        var deletePromises = selectedRows.map(/*#__PURE__*/function () {
          var _ref19 = _asyncToGenerator(function* (idToDelete) {
            return axios__WEBPACK_IMPORTED_MODULE_36__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/get-expense/").concat(idToDelete));
          });
          return function (_x9) {
            return _ref19.apply(this, arguments);
          };
        }());
        try {
          var res = yield Promise.all(deletePromises);
          setPurchaseDeleted(res.map(row => 'D-' + row.data.data.expenseNumber));
        } catch (error) {
          console.error('Fetch error:', error);
        }
      });
      return function fetchFunction() {
        return _ref18.apply(this, arguments);
      };
    }();
    fetchFunction();
  }, [selectedRows]);
  var related = PurchaseDeleted.map(row => row);
  var info = related.toString();
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + info,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_36__["default"].post(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL + '/create-notification', data);
      } catch (error) {
        console.error('Notification error:', error);
      }
    });
    return function handleCreateNotification() {
      return _ref20.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_36__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/delete-expense/").concat(DeleteId));
        if (res) {
          // Optimistic UI: Remove from local state immediately
          setExpenses(prev => prev.filter(item => item._id !== DeleteId));
          setOpen(false);
          handleOpenModal();
          window.location.reload(); // Removed to support instant responsiveness
        }
      } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Delete failed. Please try again.');
      }
    });
    return function handleDelete() {
      return _ref21.apply(this, arguments);
    };
  }();
  var handleDeleteMany = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var deletePromises = selectedRows.map(/*#__PURE__*/function () {
        var _ref23 = _asyncToGenerator(function* (idToDelete) {
          return axios__WEBPACK_IMPORTED_MODULE_36__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/delete-expense/").concat(idToDelete));
        });
        return function (_x1) {
          return _ref23.apply(this, arguments);
        };
      }());
      try {
        var res = yield Promise.all(deletePromises);
        if (res) {
          // Optimistic UI: Remove all selected rows from state
          setExpenses(prev => prev.filter(item => !selectedRows.includes(item._id)));
          handleCreateNotification();
          handleCloseAll();
          handleCloseMultiple();
          handleOpenModal();
          // setSelectedRows([]); // Important to clear selection after bulk action
        }
      } catch (error) {
        console.error('Delete Many error:', error);
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Delete failed.');
      }
    });
    return function handleDeleteMany(_x0) {
      return _ref22.apply(this, arguments);
    };
  }();
  {/** search start */}
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState62 = _slicedToArray(_useState61, 2),
    searchDailyExpenses = _useState62[0],
    setSearchDailyExpenses = _useState62[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    var storedValue = localStorage.getItem('QuickFilterDailyExpenses');
    if (storedValue) {
      setSearchDailyExpenses(storedValue);
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
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState64 = _slicedToArray(_useState63, 2),
    columnVisibilityModel = _useState64[0],
    setColumnVisibilityModel = _useState64[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsDailyExpenses', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    var _newModel$quickFilter;
    var searchTerm = ((_newModel$quickFilter = newModel.quickFilterValues) === null || _newModel$quickFilter === void 0 ? void 0 : _newModel$quickFilter.join(' ')) || '';
    setSearchTerm(searchTerm);
    setPage(0);
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterDailyExpensesTst', JSON.stringify(newModel));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterDailyExpensesTst'));
    if (storedQuick) {
      var _storedQuick$quickFil;
      var _searchTerm = ((_storedQuick$quickFil = storedQuick.quickFilterValues) === null || _storedQuick$quickFil === void 0 ? void 0 : _storedQuick$quickFil.join(' ')) || '';
      setSearchTerm(_searchTerm);
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsDailyExpenses'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchDailyExpenses]);
  {/** search end */}
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    openView = _useState66[0],
    setOpenView = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState68 = _slicedToArray(_useState67, 2),
    idView = _useState68[0],
    setIdView = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState70 = _slicedToArray(_useState69, 2),
    expensesView = _useState70[0],
    setExpensesView = _useState70[1];
  var handleOpenView = id => {
    setOpenView(true);
    setIdView(id);
  };
  var handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
    setExpensesView(null);
    setSelectedRows([]);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref24 = _asyncToGenerator(function* () {
        if (idView !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_36__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/get-expense/").concat(idView));
            setExpensesView(res.data.data);
          } catch (error) {
            console.error('Fetch detail error:', error);
          }
        }
      });
      return function fetchData2() {
        return _ref24.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [idView]);
  var columns = [{
    field: 'expenseNumber',
    headerName: 'E-Number',
    width: 140,
    renderCell: params => ' D-' + String(params.row.expenseNumber).padStart(6, '0')
  }, {
    field: 'dataField',
    headerName: 'Date',
    width: 80
  }, {
    field: 'category',
    headerName: 'Category',
    width: 60
  }, {
    field: 'description',
    headerName: 'Description',
    width: sideBar ? 120 : 150
  }, {
    field: 'name',
    headerName: 'Project Name',
    width: sideBar ? 230 : 300
  }, {
    field: 'employee',
    headerName: 'Employee Name',
    width: sideBar ? 200 : 250
  }, {
    field: 'amount',
    headerName: 'TotalFC',
    width: 100,
    renderCell: params => "FC".concat((params.row.amount || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
  }, {
    field: 'total',
    headerName: 'Total$',
    width: 100,
    renderCell: params => "$".concat((params.row.total || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
  }, {
    field: 'view',
    headerName: 'View',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      disabled: DailyEInfoV.length === 0 && user.data.role !== 'CEO',
      onClick: () => handleOpenView(params.row._id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, {
      to: "/DailyExpenseUpdate/".concat(params.row._id),
      className: "LinkName",
      disabled: DailyEInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onClick: () => handleOpen(params.row._id),
      disabled: DailyEInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_29__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Daily Expenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_57__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_56__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_45__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_35__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_32__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_31__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_33__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '150px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'absolute',
      right: '10px',
      display: 'flex',
      alignItems: 'center',
      top: '60px'
    }
  }, expenses.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'left',
      margin: '10px'
    }
  }, selectedRows.length > 1 && selectedRows.length < expenses.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: user.data.role !== 'CEO',
    onClick: handleOpenAll,
    className: "btnCustomer2"
  }, "Delete multiple"), selectedRows.length === expenses.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
    disabled: DailyEInfoC.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, {
    to: '/DailyExpenseForm',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleRefreshSearch,
    className: "btnCustomer2"
  }, "Refresh Search"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, {
    to: '/DailyExpenseAdminView',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    disabled: user.data.role !== 'CEO'
  }, "Monthly Expenses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleOpenUpdate,
    disabled: user.data.role !== 'CEO'
  }, "Add Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleOpenCash,
    disabled: user.data.role !== 'CEO'
  }, "Daily Cash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, {
    to: '/CategoryViewDailyExpenses',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer"
  }, " View by Category"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_48__.DataGrid, {
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: expenses,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_49__.GridToolbar
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
    filterModel: filterModel,
    rowSelectionModel: selectedRows,
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
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
  }, "Note:"), " Selected rows will be deleted"), selectedRows.length > 1 && selectedRows.length < expenses.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), selectedRows.length === expenses.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: modalOpenLoading,
    onClose: handleCloseModal,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_14__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Operation completed successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseModal,
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: open1,
    onClose: handleCloseUpdate,
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
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Create Expenses Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitCategory
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "expensesCategory",
    name: "expensesCategory",
    value: expensesCategory,
    label: "Expenses Category",
    onChange: e => setExpensesCategory(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12
  }, saving !== 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer6",
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "Saving...")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: openView,
    onClose: handleCloseView,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 850
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleCloseView,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), expensesView !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "EXPENSE D-", String(expensesView.expenseNumber).padStart(6, '0'), " CREATED BY ", expensesView.Create !== undefined ? expensesView.Create.person : '', " on ", expensesView.Create.dateComment), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, expensesView.accountName === 'Employee' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    style: {
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      textAlign: 'center'
    },
    colSpan: 4
  }, expensesView.reason === 'Project' ? expensesView.accountNameInfo.name : 'EMPLOYEE EXPENSE INFORMATION')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, expensesView.expenseCategory.expensesCategory)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Expense Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, dayjs__WEBPACK_IMPORTED_MODULE_46___default()(expensesView.expenseDate).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, expensesView.description)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    sx: {
      maxHeight: 400
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    "aria-label": "collapsible table",
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Amount (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Amount ($)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, expensesView.employeeName.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    key: row.idInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, row.employee), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "FC", row.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, row.rate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "$", row.total))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "TVA (16%)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, hasTvaValue(expensesView) ? 'Yes' : 'No'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Tax"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "$", getTaxValue(expensesView).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "FC", expensesView.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "$", expensesView.total)))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    style: {
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Expense Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, dayjs__WEBPACK_IMPORTED_MODULE_46___default()(expensesView.expenseDate).format('DD/MM/YYYY')))), expensesView.accountName === 'Office' || expensesView.accountName === 'Home' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, expensesView.expenseCategory.expensesCategory)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, expensesView.accountName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, expensesView.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "TVA (16%)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, hasTvaValue(expensesView) ? 'Yes' : 'No'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Tax"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "$", getTaxValue(expensesView).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "FC", expensesView.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, expensesView.rate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "$", expensesView.total))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, expensesView.expenseCategory.expensesCategory)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, expensesView.accountName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, expensesView.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Project Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, expensesView.accountNameInfo.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "TVA (16%)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, hasTvaValue(expensesView) ? 'Yes' : 'No'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Tax"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "$", getTaxValue(expensesView).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "FC", expensesView.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, expensesView.rate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "$", expensesView.total))))))))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_14__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_55__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: 'red'
    }
  }, "Saving Failed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt1",
    style: {
      color: 'red'
    }
  }, "Note:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, "Today's cash already being given")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: open2,
    onClose: handleCloseCash,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 1000
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleCloseCash,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Today's Cash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitCash
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_50__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_53__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_52__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_51__.DatePicker, {
    name: "cashDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_46___default()(cashDate),
    onChange: date => setCashDate(date),
    format: "DD/MM/YYYY",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    sx: {
      height: 200,
      width: '100%',
      padding: '10px',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total $"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, amount ? amount.map((row, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: row.idRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_40__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    required: true,
    name: "amountFC",
    id: "amountFC",
    onChange: e => handleChangeAmount(e, i),
    size: "small",
    sx: {
      width: '130px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
  }, row.total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    name: "note",
    id: "note",
    value: row.note,
    required: true,
    onChange: e => handleChangeAmount(e, i),
    size: "small",
    placeholder: "Please write \"\"POS\"\" for all cash in related to POS ",
    sx: {
      width: '300px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
    title: "Delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => deleteItem(row.idRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  })))))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), totalCash)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: addItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), dayjs__WEBPACK_IMPORTED_MODULE_46___default()(relatedDate).format('DD/MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_46___default()(cashDate).format('DD/MM/YYYY') ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12
  }, saving !== 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer6",
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "Saving...")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: loadingOpenModal,
    onClose: handleCloseModal,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_14__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: ", info, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleDeleteMany
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyExpenses);

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/native.js"
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/native.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID: (crypto__WEBPACK_IMPORTED_MODULE_0___default().randomUUID)
});

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/regex.js"
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/regex.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/rng.js"
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/rng.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/stringify.js"
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/stringify.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/v4.js"
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v4.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-node/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/validate.js"
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/validate.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-node/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfRGFpbHlFeHBlbnNlc19qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxTQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOVjs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQywwQkFBMEIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04zQixDQUFtRDtBQUNaO0FBQ25CO0FBQytCO0FBQ0M7QUFDc0I7QUFDekM7QUFDMkI7QUFDWjtBQUNJO0FBQ0k7QUFDMko7QUFDbko7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ0k7QUFDSTtBQUNWO0FBQ1U7QUFDYztBQUNJO0FBQ3hDO0FBQ2tCO0FBQ3dDO0FBQzlCO0FBQzBCO0FBQ3ZDO0FBQ3FCO0FBQ2Q7QUFDdEI7QUFDYTtBQUNrQjtBQUNjO0FBQ0o7QUFDSDtBQUN0QztBQUMwQjtBQUNGO0FBQ1E7QUFHMUQsSUFBTXNFLGFBQWEsR0FBR3ZELDBEQUFNLENBQUN3RCxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDakQzRSwwREFBQSxDQUFDOEIsOERBQU8sRUFBQStDLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxLQUFBLENBQUxDLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9B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QVM7QUFDekI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sd0RBQVE7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDUztBQUNOO0FBQ3NCOztBQUVqRDtBQUNBLE1BQU0sa0RBQU07QUFDWixXQUFXLGtEQUFNO0FBQ2pCOztBQUVBO0FBQ0EsaURBQWlELCtDQUFHLEtBQUs7O0FBRXpEO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTLDhEQUFlO0FBQ3hCOztBQUVBLGlFQUFlLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJjOztBQUUvQjtBQUNBLHFDQUFxQyxpREFBSztBQUMxQzs7QUFFQSxpRUFBZSxRQUFRLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0FkZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0RyYWdJbmRpY2F0b3JSb3VuZGVkLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9EYWlseUV4cGVuc2VzLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9yZWdleC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9ybmcuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLW5vZGUvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL3Y0LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL3ZhbGlkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCJcbn0pLCAnQWRkJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTEgMThjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0yLThjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTAtNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJtNiA0YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMm0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTAgNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJcIlxufSksICdEcmFnSW5kaWNhdG9yUm91bmRlZCcpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICcuL3ZpZXcuY3NzJztcclxuaW1wb3J0IFNpZGViYXJEYXNoIGZyb20gJy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaCc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0ICcuL1BhZ2VWaWV3L0NoYXJ0dmlldy5jc3MnXHJcbmltcG9ydCBWaXNpYmlsaXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHknO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0JztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBUYWJsZSwgTW9kYWwsIEljb25CdXR0b24sIHN0eWxlZCwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlSGVhZCwgVGFibGVSb3csIENoZWNrYm94LCBUYWJsZUNvbnRhaW5lciwgUGFwZXIsIFR5cG9ncmFwaHksIEJveCwgQXV0b2NvbXBsZXRlLCBUZXh0RmllbGQsIEJhY2tkcm9wLCBHcmlkLCBQYWdpbmF0aW9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgQWRkLCBDbG9zZSwgRHJhZ0luZGljYXRvclJvdW5kZWQsIE1haWxPdXRsaW5lIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vaW1nL25vLWRhdGEucG5nJztcclxuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRUb29sYmFyIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycyc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcblxyXG5jb25zdCBEZWxldGVUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBMaWdodFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gRGFpbHlFeHBlbnNlcygpIHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcbiAgY29uc3QgaGFzVHZhVmFsdWUgPSAoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuICEhKGl0ZW0uQ2hlY2tUdkEgfHwgaXRlbS5jaGVja1R2QSB8fCBpdGVtLkNoZWNrVHZhIHx8IGl0ZW0uaGFzVFZBIHx8IGl0ZW0udHZhIHx8IGl0ZW0uVFZBKTtcclxuICB9O1xyXG4gIGNvbnN0IGdldFRheFZhbHVlID0gKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IHRheCA9IGl0ZW0udGF4IHx8IGl0ZW0udGF4QW1vdW50IHx8IGl0ZW0udmF0QW1vdW50IHx8IGl0ZW0uVHZhQW1vdW50IHx8IGl0ZW0udGF4VVNEIHx8IDA7XHJcbiAgICBpZiAodGF4ID4gMCkgcmV0dXJuIHRheDtcclxuICAgIGlmIChoYXNUdmFWYWx1ZShpdGVtKSkge1xyXG4gICAgICByZXR1cm4gKE51bWJlcihpdGVtLnRvdGFsIHx8IGl0ZW0uYW1vdW50IHx8IDApICogMC4xNik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlLCBpZDogcmVzLmRhdGEuZGF0YS5faWQgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdXNlciBkYXRhLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBbZ3JhbnRBY2Nlc3MsIHNldEdyYW50QWNjZXNzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hOdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KEVORFBPSU5UX1VSTCArICcvZ3JhbnRBY2Nlc3MnKTtcclxuICAgICAgICByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy51c2VySUQgPT09IHVzZXIuZGF0YS5pZClcclxuICAgICAgICAgIC5tYXAoKHJvdykgPT4gc2V0R3JhbnRBY2Nlc3Mocm93Lm1vZHVsZXMpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaE51bWJlcigpXHJcbiAgfSwgW3VzZXJdKVxyXG4gIGNvbnN0IERhaWx5RUluZm9DID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkV4cGVuc2VzXCIgJiYgcm93LmFjY2Vzcy5jcmVhdGVNID09PSB0cnVlKTtcclxuICBjb25zdCBEYWlseUVJbmZvViA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJFeHBlbnNlc1wiICYmIHJvdy5hY2Nlc3Mudmlld00gPT09IHRydWUpO1xyXG4gIGNvbnN0IERhaWx5RUluZm9VID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkV4cGVuc2VzXCIgJiYgcm93LmFjY2Vzcy5lZGl0TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgRGFpbHlFSW5mb0QgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiRXhwZW5zZXNcIiAmJiByb3cuYWNjZXNzLmRlbGV0ZU0gPT09IHRydWUpO1xyXG5cclxuICBjb25zdCBbZXhwZW5zZXMsIHNldEV4cGVuc2VzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUm93cywgc2V0U2VsZWN0ZWRSb3dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuMSwgc2V0T3BlbjFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuMiwgc2V0T3BlbjJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtleHBlbnNlc0NhdGVnb3J5LCBzZXRFeHBlbnNlc0NhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXNoRGF0ZSwgc2V0Q2FzaERhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgY29uc3QgW3JlbGF0ZWREYXRlLCBzZXRSZWxhdGVkRGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtjYXNoTnVtYmVyLCBzZXRDYXNoTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3RvdGFsQ2FzaCwgc2V0VG90YWxDYXNoXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuZXdQdXJjaGFzZSwgc2V0TmV3UHVyY2hhc2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5PZmZsaW5lID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApOyAvLyBJbml0aWFsaXplIHBhZ2Ugc3RhdGUgdG8gMCAoMC1iYXNlZCBpbmRleClcclxuICBjb25zdCBsaW1pdCA9IDEwMDtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7IC8vIEluaXRpYWxpemUgc2VhcmNoIHRlcm0gc3RhdGVcclxuICBjb25zdCBbZmlsdGVyRmllbGQsIHNldEZpbHRlckZpZWxkXSA9IHVzZVN0YXRlKCcnKTsgLy8gSW5pdGlhbGl6ZSBmaWx0ZXIgZmllbGQgc3RhdGVcclxuICBjb25zdCBbZmlsdGVyVmFsdWUsIHNldEZpbHRlclZhbHVlXSA9IHVzZVN0YXRlKCcnKTsgLy8gSW5pdGlhbGl6ZSBmaWx0ZXIgdmFsdWUgc3RhdGVcclxuICBjb25zdCBbdG90YWxQYWdlLCBTZXRUb3RhbFBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgZmV0Y2hJdGVtcyA9IGFzeW5jIChwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2V4cGVuc2UtSW5mb3JtYXRpb24/cGFnZT0ke3BhZ2UgKyAxfSZsaW1pdD0ke2xpbWl0fSZzZWFyY2g9JHtlbmNvZGVVUklDb21wb25lbnQoc2VhcmNoVGVybS50cmltKCkpfSZmaWx0ZXJGaWVsZD0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJGaWVsZC50cmltKCkpfSZmaWx0ZXJWYWx1ZT0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJWYWx1ZS50cmltKCkpfWApO1xyXG4gICAgICBjb25zdCBmb3JtYXREYXRlID0gcmVzLmRhdGEuaXRlbUkubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgaWQ6IGl0ZW0uX2lkLFxyXG4gICAgICAgIGRhdGFGaWVsZDogZGF5anMoaXRlbS5leHBlbnNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyksXHJcbiAgICAgICAgY2F0ZWdvcnk6IGl0ZW0uZXhwZW5zZUNhdGVnb3J5Py5leHBlbnNlc0NhdGVnb3J5IHx8IGl0ZW0uZXhwZW5zZUNhdGVnb3J5IHx8ICcnLFxyXG4gICAgICAgIG5hbWU6IGl0ZW0uYWNjb3VudE5hbWVJbmZvPy5uYW1lIHx8ICcnLFxyXG4gICAgICAgIGVtcGxveWVlOiBBcnJheS5pc0FycmF5KGl0ZW0uZW1wbG95ZWVOYW1lKSA/IGl0ZW0uZW1wbG95ZWVOYW1lLm1hcCgocm93KSA9PiByb3cuZW1wbG95ZWUgfHwgcm93KSA6IFtdXHJcbiAgICAgIH0pKTtcclxuICAgICAgU2V0VG90YWxQYWdlKE1hdGguY2VpbChyZXMuZGF0YS50b3RhbEl0ZW0gLyBsaW1pdCkpOyAvLyBFbnN1cmUgdG90YWxQYWdlIGlzIGNvcnJlY3RseSBjYWxjdWxhdGVkXHJcbiAgICAgIHNldEV4cGVuc2VzKGZvcm1hdERhdGUpO1xyXG4gICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBleHBlbnNlcy4nKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlZnJlc2hTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBmZXRjaEl0ZW1zKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBmZXRjaEFuZFNhdmVEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzUmF0ZSA9IGF3YWl0IGF4aW9zLmdldChFTkRQT0lOVF9VUkwgKyAnL3JhdGUnKVxyXG4gICAgICByZXNSYXRlLmRhdGEuZGF0YS5tYXAoKHJvdykgPT4gc2V0UmF0ZShyb3cucmF0ZSkpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBkYWlseSByYXRlLicpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaEl0ZW1zKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSk7XHJcbiAgICBmZXRjaEFuZFNhdmVEYXRhKCk7XHJcbiAgfSwgW3BhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKGV2ZW50LCBuZXdQYWdlKSA9PiB7XHJcbiAgICBzZXRQYWdlKG5ld1BhZ2UgLSAxKTsgLy8gVXBkYXRlIHBhZ2Ugc3RhdGUgKGNvbnZlcnQgdG8gMC1iYXNlZCBpbmRleClcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hDYXNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc0Nhc2ggPSBhd2FpdCBheGlvcy5nZXQoRU5EUE9JTlRfVVJMICsgJy9jYXNoJylcclxuICAgICAgICByZXNDYXNoLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiBkYXlqcyhyb3cuY2FzaERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpID09PSBkYXlqcyhjYXNoRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJykpXHJcbiAgICAgICAgICAubWFwKChyb3cpID0+IHNldFJlbGF0ZWREYXRlKHJvdy5jYXNoRGF0ZSkpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQ29ubmVjdGlvbiBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoQ2FzaCgpXHJcbiAgfSwgW2Nhc2hEYXRlXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hOdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KEVORFBPSU5UX1VSTCArICcvZ2V0LWxhc3Qtc2F2ZWQtY2FzaCcpXHJcbiAgICAgICAgY29uc3QgbnVtID0gcmVzLmRhdGEgJiYgcmVzLmRhdGEuY2FzaE51bWJlciA/IChwYXJzZUludChyZXMuZGF0YT8uZGF0YT8uY2FzaE51bWJlciB8fCByZXMuZGF0YT8uY2FzaE51bWJlciB8fCAwKSkgOiAwO1xyXG4gICAgICAgIHNldENhc2hOdW1iZXIobnVtICsgMSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hOdW1iZXIoKVxyXG4gIH0sIFtjYXNoRGF0ZV0pXHJcbiAgY29uc3QgQ3JlYXRlID0ge1xyXG4gICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUsXHJcbiAgICBjYXNoTnVtYmVyOiBcIkMtMDBcIiArIGNhc2hOdW1iZXIsXHJcbiAgICBkYXRlQ29tbWVudDogZGF5anMoY2FzaERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpXHJcbiAgfVxyXG4gIHsvKiogQ2FzaCBzdGFydCAqLyB9XHJcbiAgY29uc3QgYWRkSXRlbSA9ICgpID0+IHtcclxuICAgIHNldEFtb3VudChbLi4uYW1vdW50LCB7XHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBhbW91bnRGQzogMCxcclxuICAgICAgYW1vdW50VXNkOiAwLFxyXG4gICAgICByYXRlOiAwLFxyXG4gICAgICB0b3RhbDogMCxcclxuICAgICAgbm90ZTogJydcclxuICAgIH1dKTtcclxuICB9XHJcbiAgY29uc3QgZGVsZXRlSXRlbSA9IGlkUm93ID0+IHtcclxuICAgIHNldEFtb3VudChhbW91bnQgPT4gYW1vdW50LmZpbHRlcigoSXRlbSkgPT4gSXRlbS5pZFJvdyAhPT0gaWRSb3cpKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUFtb3VudCA9IChlLCBpKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGxpc3QgPSBbLi4uYW1vdW50XTtcclxuICAgIGxpc3RbaV1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIGxpc3RbaV1bJ3JhdGUnXSA9IHJhdGVcclxuICAgIGxpc3RbaV1bJ3RvdGFsJ10gPSBNYXRoLnJvdW5kKCgocGFyc2VGbG9hdChsaXN0W2ldWydhbW91bnRGQyddKSAvIGxpc3RbaV1bJ3JhdGUnXSkgKyBwYXJzZUZsb2F0KGxpc3RbaV1bJ2Ftb3VudFVzZCddKSkgKiAxMDApIC8gMTAwXHJcbiAgICBzZXRBbW91bnQobGlzdClcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBzdW0gPSAwO1xyXG4gICAgYW1vdW50LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgc3VtICs9IHBhcnNlRmxvYXQoaXRlbS50b3RhbCkgfHwgMDtcclxuICAgIH0pO1xyXG4gICAgc2V0VG90YWxDYXNoKE1hdGgucm91bmQoc3VtICogMTAwKSAvIDEwMCk7XHJcbn0sIFthbW91bnRdKTtcclxuey8qKiBDYXNoIGVuZCAqLyB9XHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPcGVuQ2FzaCA9ICgpID0+IHtcclxuICAgIHNldE9wZW4yKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VDYXNoID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbjIoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW29wZW5EZWxldGVNdWx0aXBsZSwgc2V0T3BlbkRlbGV0ZU11bHRpcGxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk11bHRpcGxlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZU11bHRpcGxlKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNdWx0aXBsZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EZWxldGVNdWx0aXBsZShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbb3BlbkRlbGV0ZUFsbCwgc2V0T3BlbkRlbGV0ZUFsbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5BbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGVsZXRlQWxsKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VBbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGVsZXRlQWxsKGZhbHNlKTtcclxuICAgIHNldFNlbGVjdGVkUm93cyhbXSlcclxuICB9O1xyXG4gIGNvbnN0IFtvcGVuUmVhc29uRGVsZXRlLCBzZXRPcGVuUmVhc29uRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRGVsZXRlSWQsIHNldERlbGV0ZUlkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttb2RhbE9wZW5Mb2FkaW5nLCBzZXRNb2RhbE9wZW5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVPcGVuID0gKGlkKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgc2V0RGVsZXRlSWQoaWQpXHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbE9wZW5Mb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGhhbmRsZUNsb3NlUmVhc29uRGVsZXRlKClcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICBzZXRNb2RhbE9wZW5Mb2FkaW5nKGZhbHNlKTtcclxuICAgIC8vIEFzc3VtaW5nIHNldExvYWRpbmdPcGVuTW9kYWwgaXMgYSBzdGF0ZSBzZXR0ZXIgZm9yIGEgbG9hZGluZyBtb2RhbFxyXG4gICAgLy8gSWYgaXQgZG9lc24ndCBleGlzdCwgdGhpcyBsaW5lIHdpbGwgY2F1c2UgYW4gZXJyb3IuXHJcbiAgICAvLyBJJ20gYWRkaW5nIGl0IGJhc2VkIG9uIHRoZSBwcm92aWRlZCBzbmlwcGV0LCBhc3N1bWluZyBpdCdzIGRlZmluZWQgZWxzZXdoZXJlLlxyXG4gICAgLy8gSWYgbm90LCBpdCBzaG91bGQgYmUgcmVtb3ZlZC5cclxuICAgIC8vIHNldExvYWRpbmdPcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gICAgc2V0T3BlbjIoZmFsc2UpO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBmZXRjaEl0ZW1zKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSk7XHJcbiAgICBmZXRjaEFuZFNhdmVEYXRhKCk7XHJcbiAgfTtcclxuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0Q2F0ZWdvcnkgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2F2aW5nKCd0cnVlJylcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGV4cGVuc2VzQ2F0ZWdvcnlcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoRU5EUE9JTlRfVVJMICsgJy9jcmVhdGUtZXhwZW5zZXNDYXRlZ29yeScsIGRhdGEpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlT3Blbk1vZGFsKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHNldFNhdmluZygnJylcclxuICAgICAgICBoYW5kbGVFcnJvcigpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uMSA9IGFzeW5jIChSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBDcmVhdGVkICcsXHJcbiAgICAgIHJlYXNvbjogJ1RvZGF5cyBDYXNoJyArICcgLyBDYXNoLScgKyBSZWZlcmVuY2VJbmZvTnVtYmVyLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KEVORFBPSU5UX1VSTCArICcvY3JlYXRlLW5vdGlmaWNhdGlvbicsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdOb3RpZmljYXRpb24gZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTdWJtaXRDYXNoID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNhdmluZygndHJ1ZScpXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBjYXNoRGF0ZSwgY2FzaE51bWJlciwgcmF0ZSwgdG90YWxDYXNoLCBhbW91bnQsIENyZWF0ZSwgc3luY2VkOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChFTkRQT0lOVF9VUkwgKyAnL2NyZWF0ZS1jYXNoJywgZGF0YSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvID0gcmVzLmRhdGEuZGF0YS5faWRcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvTnVtYmVyID0gcmVzLmRhdGEuZGF0YS5jYXNoTnVtYmVyXHJcbiAgICAgICAgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uMShSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKVxyXG4gICAgICAgIGhhbmRsZU9wZW5Nb2RhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBzZXRTYXZpbmcoJycpXHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtQdXJjaGFzZURlbGV0ZWQsIHNldFB1cmNoYXNlRGVsZXRlZF0gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZGVsZXRlUHJvbWlzZXMgPSBzZWxlY3RlZFJvd3MubWFwKGFzeW5jIChpZFRvRGVsZXRlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1leHBlbnNlLyR7aWRUb0RlbGV0ZX1gKVxyXG4gICAgICB9KVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKGRlbGV0ZVByb21pc2VzKTtcclxuICAgICAgICBzZXRQdXJjaGFzZURlbGV0ZWQocmVzLm1hcCgocm93KSA9PiAnRC0nICsgcm93LmRhdGEuZGF0YS5leHBlbnNlTnVtYmVyKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGZXRjaCBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRnVuY3Rpb24oKVxyXG4gIH0sIFtzZWxlY3RlZFJvd3NdKVxyXG4gIGNvbnN0IHJlbGF0ZWQgPSBQdXJjaGFzZURlbGV0ZWQubWFwKHJvdyA9PiByb3cpXHJcbiAgY29uc3QgaW5mbyA9IHJlbGF0ZWQudG9TdHJpbmcoKVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogJycsXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBEZWxldGVkICcgKyBpbmZvLFxyXG4gICAgICByZWFzb24sXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoRU5EUE9JTlRfVVJMICsgJy9jcmVhdGUtbm90aWZpY2F0aW9uJywgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vdGlmaWNhdGlvbiBlcnJvcjonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5kZWxldGUoYCR7RU5EUE9JTlRfVVJMfS9kZWxldGUtZXhwZW5zZS8ke0RlbGV0ZUlkfWApO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgLy8gT3B0aW1pc3RpYyBVSTogUmVtb3ZlIGZyb20gbG9jYWwgc3RhdGUgaW1tZWRpYXRlbHlcclxuICAgICAgICBzZXRFeHBlbnNlcyhwcmV2ID0+IHByZXYuZmlsdGVyKGl0ZW0gPT4gaXRlbS5faWQgIT09IERlbGV0ZUlkKSk7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgaGFuZGxlT3Blbk1vZGFsKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyAvLyBSZW1vdmVkIHRvIHN1cHBvcnQgaW5zdGFudCByZXNwb25zaXZlbmVzc1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdC5lcnJvcignRGVsZXRlIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgIH1cclxuICB9O1xyXG4gICBjb25zdCBoYW5kbGVEZWxldGVNYW55ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRlbGV0ZVByb21pc2VzID0gc2VsZWN0ZWRSb3dzLm1hcChhc3luYyAoaWRUb0RlbGV0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLWV4cGVuc2UvJHtpZFRvRGVsZXRlfWApO1xyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChkZWxldGVQcm9taXNlcyk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAvLyBPcHRpbWlzdGljIFVJOiBSZW1vdmUgYWxsIHNlbGVjdGVkIHJvd3MgZnJvbSBzdGF0ZVxyXG4gICAgICAgIHNldEV4cGVuc2VzKHByZXYgPT4gcHJldi5maWx0ZXIoaXRlbSA9PiAhc2VsZWN0ZWRSb3dzLmluY2x1ZGVzKGl0ZW0uX2lkKSkpO1xyXG4gICAgICAgIGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbigpO1xyXG4gICAgICAgIGhhbmRsZUNsb3NlQWxsKCk7XHJcbiAgICAgICAgaGFuZGxlQ2xvc2VNdWx0aXBsZSgpO1xyXG4gICAgICAgIGhhbmRsZU9wZW5Nb2RhbCgpO1xyXG4gICAgICAgIC8vIHNldFNlbGVjdGVkUm93cyhbXSk7IC8vIEltcG9ydGFudCB0byBjbGVhciBzZWxlY3Rpb24gYWZ0ZXIgYnVsayBhY3Rpb25cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRGVsZXRlIE1hbnkgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB0b2FzdC5lcnJvcignRGVsZXRlIGZhaWxlZC4nKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHsvKiogc2VhcmNoIHN0YXJ0ICovIH1cclxuICBjb25zdCBbc2VhcmNoRGFpbHlFeHBlbnNlcywgc2V0U2VhcmNoRGFpbHlFeHBlbnNlc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlckRhaWx5RXhwZW5zZXMnKVxyXG4gICAgaWYgKHN0b3JlZFZhbHVlKSB7XHJcbiAgICAgIHNldFNlYXJjaERhaWx5RXhwZW5zZXMoc3RvcmVkVmFsdWUpXHJcbiAgICB9XHJcblxyXG4gIH0pXHJcbiAgY29uc3QgW2ZpbHRlck1vZGVsLCBzZXRGaWx0ZXJNb2RlbF0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBpdGVtczogW10sXHJcbiAgICBxdWlja0ZpbHRlckV4Y2x1ZGVIaWRkZW5Db2x1bW5zOiB0cnVlLFxyXG4gICAgcXVpY2tGaWx0ZXJWYWx1ZXM6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb2x1bW5WaXNpYmlsaXR5TW9kZWwsIHNldENvbHVtblZpc2liaWxpdHlNb2RlbF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgaGFuZGVsSGlkZGVuQ29sdW1uID0gKG5ld0hpZGRlbikgPT4ge1xyXG4gICAgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsKG5ld0hpZGRlbilcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdIaWRkZW5Db2x1bW5zRGFpbHlFeHBlbnNlcycsIEpTT04uc3RyaW5naWZ5KG5ld0hpZGRlbikpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUZpbHRlciA9IChuZXdNb2RlbCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IG5ld01vZGVsLnF1aWNrRmlsdGVyVmFsdWVzPy5qb2luKCcgJykgfHwgJyc7XHJcbiAgICBzZXRTZWFyY2hUZXJtKHNlYXJjaFRlcm0pO1xyXG4gICAgc2V0UGFnZSgwKTtcclxuICAgIHNldEZpbHRlck1vZGVsKG5ld01vZGVsKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1F1aWNrRmlsdGVyRGFpbHlFeHBlbnNlc1RzdCcsIEpTT04uc3RyaW5naWZ5KG5ld01vZGVsKSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFF1aWNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUXVpY2tGaWx0ZXJEYWlseUV4cGVuc2VzVHN0JykpXHJcbiAgICBpZiAoc3RvcmVkUXVpY2spIHtcclxuICAgICAgY29uc3Qgc2VhcmNoVGVybSA9IHN0b3JlZFF1aWNrLnF1aWNrRmlsdGVyVmFsdWVzPy5qb2luKCcgJykgfHwgJyc7XHJcbiAgICAgIHNldFNlYXJjaFRlcm0oc2VhcmNoVGVybSk7XHJcbiAgICAgIHNldEZpbHRlck1vZGVsKHN0b3JlZFF1aWNrKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RvcmVkQ29sdW1ucyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0hpZGRlbkNvbHVtbnNEYWlseUV4cGVuc2VzJykpXHJcbiAgICBpZiAoc3RvcmVkQ29sdW1ucykge1xyXG4gICAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwoc3RvcmVkQ29sdW1ucylcclxuICAgIH1cclxuXHJcbiAgfSwgW3NlYXJjaERhaWx5RXhwZW5zZXNdKVxyXG4gIHsvKiogc2VhcmNoIGVuZCAqLyB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICBjb25zdCBbb3BlblZpZXcsIHNldE9wZW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaWRWaWV3LCBzZXRJZFZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2V4cGVuc2VzVmlldywgc2V0RXhwZW5zZXNWaWV3XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgaGFuZGxlT3BlblZpZXcgPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW5WaWV3KHRydWUpO1xyXG4gICAgc2V0SWRWaWV3KGlkKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZVZpZXcgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuVmlldyhmYWxzZSk7XHJcbiAgICBzZXRJZFZpZXcobnVsbCk7XHJcbiAgICBzZXRFeHBlbnNlc1ZpZXcobnVsbCk7XHJcbiAgICBzZXRTZWxlY3RlZFJvd3MoW10pO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YTIgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICBpZiAoaWRWaWV3ICE9PSBudWxsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1leHBlbnNlLyR7aWRWaWV3fWApXHJcbiAgICAgICAgICBzZXRFeHBlbnNlc1ZpZXcocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmV0Y2ggZGV0YWlsIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YTIoKVxyXG4gIH0sIFtpZFZpZXddKVxyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7IGZpZWxkOiAnZXhwZW5zZU51bWJlcicsIGhlYWRlck5hbWU6ICdFLU51bWJlcicsIHdpZHRoOiAxNDAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+ICcgRC0nICsgU3RyaW5nKHBhcmFtcy5yb3cuZXhwZW5zZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKSB9LFxyXG4gICAgeyBmaWVsZDogJ2RhdGFGaWVsZCcsIGhlYWRlck5hbWU6ICdEYXRlJywgd2lkdGg6IDgwIH0sXHJcbiAgICB7IGZpZWxkOiAnY2F0ZWdvcnknLCBoZWFkZXJOYW1lOiAnQ2F0ZWdvcnknLCB3aWR0aDogNjAgfSxcclxuICAgIHsgZmllbGQ6ICdkZXNjcmlwdGlvbicsIGhlYWRlck5hbWU6ICdEZXNjcmlwdGlvbicsIHdpZHRoOiBzaWRlQmFyID8gMTIwIDogMTUwIH0sXHJcbiAgICB7IGZpZWxkOiAnbmFtZScsIGhlYWRlck5hbWU6ICdQcm9qZWN0IE5hbWUnLCB3aWR0aDogc2lkZUJhciA/IDIzMCA6IDMwMCB9LFxyXG4gICAgeyBmaWVsZDogJ2VtcGxveWVlJywgaGVhZGVyTmFtZTogJ0VtcGxveWVlIE5hbWUnLCB3aWR0aDogc2lkZUJhciA/IDIwMCA6IDI1MCB9LFxyXG4gICAgeyBmaWVsZDogJ2Ftb3VudCcsIGhlYWRlck5hbWU6ICdUb3RhbEZDJywgd2lkdGg6IDEwMCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gYEZDJHsocGFyYW1zLnJvdy5hbW91bnQgfHwgMCkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWAgfSxcclxuICAgIHsgZmllbGQ6ICd0b3RhbCcsIGhlYWRlck5hbWU6ICdUb3RhbCQnLCB3aWR0aDogMTAwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiBgJCR7KHBhcmFtcy5yb3cudG90YWwgfHwgMCkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICd2aWV3JywgaGVhZGVyTmFtZTogJ1ZpZXcnLCB3aWR0aDogNTAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJWaWV3XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e0RhaWx5RUluZm9WLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9IG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5WaWV3KHBhcmFtcy5yb3cuX2lkKX0+XHJcbiAgICAgICAgICAgICAgPFZpc2liaWxpdHlJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnZWRpdCcsIGhlYWRlck5hbWU6ICdFZGl0Jywgd2lkdGg6IDUwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPEVkaXRUb29sdGlwIHRpdGxlPVwiRWRpdFwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0RhaWx5RXhwZW5zZVVwZGF0ZS8ke3BhcmFtcy5yb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnIGRpc2FibGVkPXtEYWlseUVJbmZvVS5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICAgIDxFZGl0SWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9FZGl0VG9vbHRpcD5cclxuXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnRGVsZXRlJywgaGVhZGVyTmFtZTogJ0RlbGV0ZScsIHdpZHRoOiA1MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxEZWxldGVUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCI+XHJcbiAgICAgICAgICA8c3Bhbj4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuKHBhcmFtcy5yb3cuX2lkKX0gZGlzYWJsZWQ9e0RhaWx5RUluZm9ELmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9ID5cclxuICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRGVsZXRlVG9vbHRpcD4pXHJcbiAgICB9LFxyXG4gIF1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRGFpbHkgRXhwZW5zZXNcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNpZGVCYXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2lkZUJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaCAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogMSB9fSA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsb2FkaW5nRGF0YSA/IDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxNTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzEwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCB0b3A6ICc2MHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7ZXhwZW5zZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ2xlZnQnLCBtYXJnaW46ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPiAxICYmIHNlbGVjdGVkUm93cy5sZW5ndGggPCBleHBlbnNlcy5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfSBvbkNsaWNrPXtoYW5kbGVPcGVuQWxsfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+RGVsZXRlIG11bHRpcGxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PT0gZXhwZW5zZXMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQWxsfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+RGVsZXRlIGFsbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIG1hcmdpbjogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17RGFpbHlFSW5mb0MubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9EYWlseUV4cGVuc2VGb3JtJ30gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXJBZGRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUmVmcmVzaFNlYXJjaH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInPlJlZnJlc2ggU2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9EYWlseUV4cGVuc2VBZG1pblZpZXcnfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+TW9udGhseSBFeHBlbnNlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZU9wZW5VcGRhdGV9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgQWRkIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVPcGVuQ2FzaH0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEYWlseSBDYXNoXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89eycvQ2F0ZWdvcnlWaWV3RGFpbHlFeHBlbnNlcyd9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz4gVmlldyBieSBDYXRlZ29yeTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDYwMCwgd2lkdGg6ICcxMDAlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGFHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbk1vZGU9XCJzZXJ2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0NvdW50PXt0b3RhbFBhZ2UgKiBsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17bGltaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17ZXhwZW5zZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2xvdHM9e3sgdG9vbGJhcjogR3JpZFRvb2xiYXIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2U9eyhuZXdTZWxlY3Rpb24pID0+IHNldFNlbGVjdGVkUm93cyhuZXdTZWxlY3Rpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2xvdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UXVpY2tGaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVG9vbGJhckJ1dHRvbjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Um93Q2xhc3NOYW1lPXsocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdQdXJjaGFzZS5pbmNsdWRlcyhwYXJhbXMucm93Ll9pZCkgPyAnbmV3LVB1cmNoYXNlJyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVEZW5zaXR5U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck1vZGVsPXtmaWx0ZXJNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbk1vZGVsPXtzZWxlY3RlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkZpbHRlck1vZGVsQ2hhbmdlPXsobmV3TW9kZWwpID0+IGhhbmRsZUZpbHRlcihuZXdNb2RlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WaXNpYmlsaXR5TW9kZWw9e2NvbHVtblZpc2liaWxpdHlNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ29sdW1uVmlzaWJpbGl0eU1vZGVsQ2hhbmdlPXtoYW5kZWxIaWRkZW5Db2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICcxMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gY291bnQ9e3RvdGFsUGFnZX0gcGFnZT17cGFnZSArIDF9IG9uQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfSBjb2xvcj1cInByaW1hcnlcIiBzeD17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnLTUwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9Db250YWluZXI+PC9Cb3g+PC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxoMj5EbyB5b3Ugd2FudCB0byBEZWxldGUgPzwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuRGVsZXRlTXVsdGlwbGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNdWx0aXBsZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHNlbGVjdGVkIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJyBvbkNsaWNrPXtoYW5kbGVEZWxldGVNYW55fT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VNdWx0aXBsZX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkRlbGV0ZUFsbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUFsbH1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gU2VsZWN0ZWQgcm93cyB3aWxsIGJlIGRlbGV0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID4gMSAmJiBzZWxlY3RlZFJvd3MubGVuZ3RoIDwgZXhwZW5zZXMubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZTo8L3NwYW4+IEFsbCBzZWxlY3RlZCByb3dzIHdpbGwgYmUgZGVsZXRlZDwvcD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPT09IGV4cGVuc2VzLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPiBBbGwgcm93cyB3aWxsIGJlIGRlbGV0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInIG9uQ2xpY2s9e2hhbmRsZU9wZW5SZWFzb25EZWxldGV9PlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUFsbH0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bW9kYWxPcGVuTG9hZGluZ31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGgyPiBPcGVyYXRpb24gY29tcGxldGVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbjF9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VVcGRhdGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVVwZGF0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgQ3JlYXRlIEV4cGVuc2VzIENhdGVnb3J5XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0Q2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdleHBlbnNlc0NhdGVnb3J5J1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdleHBlbnNlc0NhdGVnb3J5J1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZXhwZW5zZXNDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J0V4cGVuc2VzIENhdGVnb3J5J1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEV4cGVuc2VzQ2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgc2F2aW5nICE9PSAndHJ1ZScgPyA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPiA6IDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlNhdmluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlblZpZXd9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VWaWV3fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDg1MCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VWaWV3fSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZXhwZW5zZXNWaWV3ICE9PSBudWxsID9cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgIEVYUEVOU0UgRC17U3RyaW5nKGV4cGVuc2VzVmlldy5leHBlbnNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfSBDUkVBVEVEIEJZIHtleHBlbnNlc1ZpZXcuQ3JlYXRlICE9PSB1bmRlZmluZWQgPyBleHBlbnNlc1ZpZXcuQ3JlYXRlLnBlcnNvbiA6ICcnfSBvbiB7ZXhwZW5zZXNWaWV3LkNyZWF0ZS5kYXRlQ29tbWVudH1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZW5zZXNWaWV3LmFjY291bnROYW1lID09PSAnRW1wbG95ZWUnID9cclxuICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiA2MDAsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBjb2xTcGFuPXs0fT57ZXhwZW5zZXNWaWV3LnJlYXNvbiA9PT0gJ1Byb2plY3QnID8gZXhwZW5zZXNWaWV3LmFjY291bnROYW1lSW5mby5uYW1lIDogJ0VNUExPWUVFIEVYUEVOU0UgSU5GT1JNQVRJT04nfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5DYXRlZ29yeTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PntleHBlbnNlc1ZpZXcuZXhwZW5zZUNhdGVnb3J5LmV4cGVuc2VzQ2F0ZWdvcnl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkV4cGVuc2UgRGF0ZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PntkYXlqcyhleHBlbnNlc1ZpZXcuZXhwZW5zZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZXNjcmlwdGlvbjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PntleHBlbnNlc1ZpZXcuZGVzY3JpcHRpb259PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgc3g9e3sgbWF4SGVpZ2h0OiA0MDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGFyaWEtbGFiZWw9XCJjb2xsYXBzaWJsZSB0YWJsZVwiIHN0aWNreUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkVtcGxveWVlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5BbW91bnQgKEZDKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UmF0ZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+QW1vdW50ICgkKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZW5zZXNWaWV3LmVtcGxveWVlTmFtZS5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93LmlkSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5lbXBsb3llZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5GQ3tyb3cuYW1vdW50fTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cucmF0ZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4ke3Jvdy50b3RhbH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5UVkEgKDE2JSk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntoYXNUdmFWYWx1ZShleHBlbnNlc1ZpZXcpID8gJ1llcycgOiAnTm8nfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+VGF4PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4ke2dldFRheFZhbHVlKGV4cGVuc2VzVmlldykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Ub3RhbDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RkN7ZXhwZW5zZXNWaWV3LmFtb3VudH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPi08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPiR7ZXhwZW5zZXNWaWV3LnRvdGFsfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDYwMCwgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5FeHBlbnNlIERhdGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXszfT57ZGF5anMoZXhwZW5zZXNWaWV3LmV4cGVuc2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZW5zZXNWaWV3LmFjY291bnROYW1lID09PSAnT2ZmaWNlJyB8fCBleHBlbnNlc1ZpZXcuYWNjb3VudE5hbWUgPT09ICdIb21lJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+Q2F0ZWdvcnk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17M30+e2V4cGVuc2VzVmlldy5leHBlbnNlQ2F0ZWdvcnkuZXhwZW5zZXNDYXRlZ29yeX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+QWNjb3VudDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXszfT57ZXhwZW5zZXNWaWV3LmFjY291bnROYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZXNjcmlwdGlvbjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXszfT57ZXhwZW5zZXNWaWV3LmRlc2NyaXB0aW9ufTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5UVkEgKDE2JSk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2hhc1R2YVZhbHVlKGV4cGVuc2VzVmlldykgPyAnWWVzJyA6ICdObyd9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlRheDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4ke2dldFRheFZhbHVlKGV4cGVuc2VzVmlldykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5BbW91bnQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RkN7ZXhwZW5zZXNWaWV3LmFtb3VudH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2V4cGVuc2VzVmlldy5yYXRlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4ke2V4cGVuc2VzVmlldy50b3RhbH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5DYXRlZ29yeTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXszfT57ZXhwZW5zZXNWaWV3LmV4cGVuc2VDYXRlZ29yeS5leHBlbnNlc0NhdGVnb3J5fTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5BY2NvdW50PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PntleHBlbnNlc1ZpZXcuYWNjb3VudE5hbWV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkRlc2NyaXB0aW9uPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PntleHBlbnNlc1ZpZXcuZGVzY3JpcHRpb259PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlByb2plY3QgTmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXszfT57ZXhwZW5zZXNWaWV3LmFjY291bnROYW1lSW5mby5uYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5UVkEgKDE2JSk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2hhc1R2YVZhbHVlKGV4cGVuc2VzVmlldykgPyAnWWVzJyA6ICdObyd9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlRheDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4ke2dldFRheFZhbHVlKGV4cGVuc2VzVmlldykudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5BbW91bnQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RkN7ZXhwZW5zZXNWaWV3LmFtb3VudH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2V4cGVuc2VzVmlldy5yYXRlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4ke2V4cGVuc2VzVmlldy50b3RhbH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5TYXZpbmcgRmFpbGVkPC9oMj5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9J3R4dDEnIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+VG9kYXkncyBjYXNoIGFscmVhZHkgYmVpbmcgZ2l2ZW48L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuMn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUNhc2h9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogMTAwMCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VDYXNofSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICBUb2RheSdzIENhc2hcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRDYXNofT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Nhc2hEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoY2FzaERhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRDYXNoRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBzeD17eyBoZWlnaHQ6IDIwMCwgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzEwcHgnLCBvdmVyZmxvd1g6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZUluZm8xMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BbW91bnQgRkM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCAkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5vdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50Lm1hcCgocm93LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtyb3cuaWRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PERyYWdJbmRpY2F0b3JSb3VuZGVkIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnRGQycgaWQ9J2Ftb3VudEZDJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VBbW91bnQoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMzBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncmF0ZScgaWQ9J3JhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm93LnJhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUFtb3VudChlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnRVc2QnIGlkPSdhbW91bnRVc2QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm93LmFtb3VudFVzZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQW1vdW50KGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaGlkZGVuIGlkPSdhbW91bnRUb3RhbEludm9pY2UnPntyb3cudG90YWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25vdGUnIGlkPSdub3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvdy5ub3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQW1vdW50KGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQbGVhc2Ugd3JpdGUgXCJcIlBPU1wiXCIgZm9yIGFsbCBjYXNoIGluIHJlbGF0ZWQgdG8gUE9TICdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMzAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShyb3cuaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4+JDwvc3Bhbj57dG90YWxDYXNofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRheWpzKHJlbGF0ZWREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSA9PT0gZGF5anMoY2FzaERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpID8gJycgOlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2F2aW5nICE9PSAndHJ1ZScgPyA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPiA6IDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlNhdmluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5SZWFzb25EZWxldGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VSZWFzb25EZWxldGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgV2h5IGRvIHlvdSB3YW50IHRvIGRlbGV0ZToge2luZm99P1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZURlbGV0ZU1hbnl9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdSZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J1JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYWlseUV4cGVuc2VzXHJcbiIsImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRDogY3J5cHRvLnJhbmRvbVVVSURcbn07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmNvbnN0IHJuZHM4UG9vbCA9IG5ldyBVaW50OEFycmF5KDI1Nik7IC8vICMgb2YgcmFuZG9tIHZhbHVlcyB0byBwcmUtYWxsb2NhdGVcblxubGV0IHBvb2xQdHIgPSBybmRzOFBvb2wubGVuZ3RoO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICBpZiAocG9vbFB0ciA+IHJuZHM4UG9vbC5sZW5ndGggLSAxNikge1xuICAgIGNyeXB0by5yYW5kb21GaWxsU3luYyhybmRzOFBvb2wpO1xuICAgIHBvb2xQdHIgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHJuZHM4UG9vbC5zbGljZShwb29sUHRyLCBwb29sUHRyICs9IDE2KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRvYXN0IiwiU2lkZWJhckRhc2giLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiVmlzaWJpbGl0eUljb24iLCJFZGl0SWNvbiIsIkRlbGV0ZUljb24iLCJOYXZMaW5rIiwidXNlTmF2aWdhdGUiLCJUYWJsZSIsIk1vZGFsIiwiSWNvbkJ1dHRvbiIsInN0eWxlZCIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiQ2hlY2tib3giLCJUYWJsZUNvbnRhaW5lciIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsIkJveCIsIkF1dG9jb21wbGV0ZSIsIlRleHRGaWVsZCIsIkJhY2tkcm9wIiwiR3JpZCIsIlBhZ2luYXRpb24iLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJEaXZpZGVyIiwiQ29udGFpbmVyIiwiTGluayIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkFkZCIsIkNsb3NlIiwiRHJhZ0luZGljYXRvclJvdW5kZWQiLCJNYWlsT3V0bGluZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2FkZXIiLCJDaGVja0NpcmNsZUljb24iLCJMb2dvdXQiLCJkYXlqcyIsIkltYWdlIiwiRGF0YUdyaWQiLCJHcmlkVG9vbGJhciIsIkRhdGVQaWNrZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkRlbW9Db250YWluZXIiLCJBZGFwdGVyRGF5anMiLCJ2NCIsIkNhbmNlbEljb24iLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJEZWxldGVUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJFZGl0VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiTGlnaHRUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJWaWV3VG9vbHRpcCIsIl9yZWY3IiwiX2V4Y2x1ZGVkNCIsIl9yZWY4Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY5Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWYwIiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiRGFpbHlFeHBlbnNlcyIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwiaGFzVHZhVmFsdWUiLCJpdGVtIiwiQ2hlY2tUdkEiLCJjaGVja1R2QSIsIkNoZWNrVHZhIiwiaGFzVFZBIiwidHZhIiwiVFZBIiwiZ2V0VGF4VmFsdWUiLCJ0YXgiLCJ0YXhBbW91bnQiLCJ2YXRBbW91bnQiLCJUdmFBbW91bnQiLCJ0YXhVU0QiLCJOdW1iZXIiLCJ0b3RhbCIsImFtb3VudCIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmMSIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiaWQiLCJfaWQiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJncmFudEFjY2VzcyIsInNldEdyYW50QWNjZXNzIiwiZmV0Y2hOdW1iZXIiLCJfcmVmMTAiLCJfcmVzJGRhdGEiLCJmaWx0ZXIiLCJyb3ciLCJ1c2VySUQiLCJtYXAiLCJtb2R1bGVzIiwiRGFpbHlFSW5mb0MiLCJtb2R1bGVOYW1lIiwiYWNjZXNzIiwiY3JlYXRlTSIsIkRhaWx5RUluZm9WIiwidmlld00iLCJEYWlseUVJbmZvVSIsImVkaXRNIiwiRGFpbHlFSW5mb0QiLCJkZWxldGVNIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJleHBlbnNlcyIsInNldEV4cGVuc2VzIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJsb2FkaW5nRGF0YSIsInNldExvYWRpbmdEYXRhIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJzZWxlY3RlZFJvd3MiLCJzZXRTZWxlY3RlZFJvd3MiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwib3BlbjEiLCJzZXRPcGVuMSIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJvcGVuMiIsInNldE9wZW4yIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsImV4cGVuc2VzQ2F0ZWdvcnkiLCJzZXRFeHBlbnNlc0NhdGVnb3J5IiwiX3VzZVN0YXRlMTciLCJkYXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTE4IiwiY2FzaERhdGUiLCJzZXRDYXNoRGF0ZSIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJyZWxhdGVkRGF0ZSIsInNldFJlbGF0ZWREYXRlIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsImNhc2hOdW1iZXIiLCJzZXRDYXNoTnVtYmVyIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsInJhdGUiLCJzZXRSYXRlIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsInRvdGFsQ2FzaCIsInNldFRvdGFsQ2FzaCIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJzZXRBbW91bnQiLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwicmVhc29uIiwic2V0UmVhc29uIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsIm5ld1B1cmNoYXNlIiwic2V0TmV3UHVyY2hhc2UiLCJoYW5kbGVPcGVuT2ZmbGluZSIsInNldFRpbWVvdXQiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwicGFnZSIsInNldFBhZ2UiLCJsaW1pdCIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJmaWx0ZXJGaWVsZCIsInNldEZpbHRlckZpZWxkIiwiX3VzZVN0YXRlMzkiLCJfdXNlU3RhdGU0MCIsImZpbHRlclZhbHVlIiwic2V0RmlsdGVyVmFsdWUiLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwidG90YWxQYWdlIiwiU2V0VG90YWxQYWdlIiwiZmV0Y2hJdGVtcyIsIl9yZWYxMSIsImVuY29kZVVSSUNvbXBvbmVudCIsInRyaW0iLCJmb3JtYXREYXRlIiwiaXRlbUkiLCJfaXRlbSRleHBlbnNlQ2F0ZWdvcnkiLCJfaXRlbSRhY2NvdW50TmFtZUluZm8iLCJkYXRhRmllbGQiLCJleHBlbnNlRGF0ZSIsImZvcm1hdCIsImNhdGVnb3J5IiwiZXhwZW5zZUNhdGVnb3J5IiwibmFtZSIsImFjY291bnROYW1lSW5mbyIsImVtcGxveWVlIiwiQXJyYXkiLCJpc0FycmF5IiwiTWF0aCIsImNlaWwiLCJ0b3RhbEl0ZW0iLCJfeCIsIl94MiIsIl94MyIsIl94NCIsImhhbmRsZVJlZnJlc2hTZWFyY2giLCJmZXRjaEFuZFNhdmVEYXRhIiwiX3JlZjEyIiwicmVzUmF0ZSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJldmVudCIsIm5ld1BhZ2UiLCJmZXRjaENhc2giLCJfcmVmMTMiLCJfcmVzQ2FzaCRkYXRhIiwicmVzQ2FzaCIsIl9yZWYxNCIsIl9yZXMkZGF0YTIiLCJfcmVzJGRhdGEzIiwibnVtIiwicGFyc2VJbnQiLCJDcmVhdGUiLCJwZXJzb24iLCJkYXRlQ29tbWVudCIsImFkZEl0ZW0iLCJpZFJvdyIsImFtb3VudEZDIiwiYW1vdW50VXNkIiwibm90ZSIsImRlbGV0ZUl0ZW0iLCJJdGVtIiwiaGFuZGxlQ2hhbmdlQW1vdW50IiwiZSIsImkiLCJfZSR0YXJnZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxpc3QiLCJyb3VuZCIsInBhcnNlRmxvYXQiLCJzdW0iLCJmb3JFYWNoIiwiaGFuZGxlT3BlblVwZGF0ZSIsImhhbmRsZUNsb3NlVXBkYXRlIiwiaGFuZGxlT3BlbkNhc2giLCJoYW5kbGVDbG9zZUNhc2giLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0Iiwib3BlbkRlbGV0ZU11bHRpcGxlIiwic2V0T3BlbkRlbGV0ZU11bHRpcGxlIiwiaGFuZGxlT3Blbk11bHRpcGxlIiwiaGFuZGxlQ2xvc2VNdWx0aXBsZSIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJvcGVuRGVsZXRlQWxsIiwic2V0T3BlbkRlbGV0ZUFsbCIsImhhbmRsZU9wZW5BbGwiLCJoYW5kbGVDbG9zZUFsbCIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJvcGVuUmVhc29uRGVsZXRlIiwic2V0T3BlblJlYXNvbkRlbGV0ZSIsImhhbmRsZU9wZW5SZWFzb25EZWxldGUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlUmVhc29uRGVsZXRlIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsInNldE9wZW4iLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwiRGVsZXRlSWQiLCJzZXREZWxldGVJZCIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJtb2RhbE9wZW5Mb2FkaW5nIiwic2V0TW9kYWxPcGVuTG9hZGluZyIsIl91c2VTdGF0ZTU1IiwiX3VzZVN0YXRlNTYiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsImhhbmRsZU9wZW5Nb2RhbCIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2VFcnJvciIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xvc2VNb2RhbCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiX3VzZVN0YXRlNTciLCJfdXNlU3RhdGU1OCIsInNhdmluZyIsInNldFNhdmluZyIsImhhbmRsZVN1Ym1pdENhdGVnb3J5IiwiX3JlZjE1IiwicG9zdCIsIl94NSIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbjEiLCJfcmVmMTYiLCJSZWZlcmVuY2VJbmZvIiwiUmVmZXJlbmNlSW5mb051bWJlciIsImlkSW5mbyIsImRhdGVOb3RpZmljYXRpb24iLCJfeDYiLCJfeDciLCJoYW5kbGVTdWJtaXRDYXNoIiwiX3JlZjE3Iiwic3luY2VkIiwiX3g4IiwiX3VzZVN0YXRlNTkiLCJfdXNlU3RhdGU2MCIsIlB1cmNoYXNlRGVsZXRlZCIsInNldFB1cmNoYXNlRGVsZXRlZCIsImZldGNoRnVuY3Rpb24iLCJfcmVmMTgiLCJkZWxldGVQcm9taXNlcyIsIl9yZWYxOSIsImlkVG9EZWxldGUiLCJfeDkiLCJQcm9taXNlIiwiYWxsIiwiZXhwZW5zZU51bWJlciIsInJlbGF0ZWQiLCJpbmZvIiwidG9TdHJpbmciLCJoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24iLCJfcmVmMjAiLCJoYW5kbGVEZWxldGUiLCJfcmVmMjEiLCJkZWxldGUiLCJwcmV2IiwiaGFuZGxlRGVsZXRlTWFueSIsIl9yZWYyMiIsIl9yZWYyMyIsIl94MSIsImluY2x1ZGVzIiwiX3gwIiwiX3VzZVN0YXRlNjEiLCJfdXNlU3RhdGU2MiIsInNlYXJjaERhaWx5RXhwZW5zZXMiLCJzZXRTZWFyY2hEYWlseUV4cGVuc2VzIiwic3RvcmVkVmFsdWUiLCJfUmVhY3QkdXNlU3RhdGUiLCJpdGVtcyIsInF1aWNrRmlsdGVyRXhjbHVkZUhpZGRlbkNvbHVtbnMiLCJxdWlja0ZpbHRlclZhbHVlcyIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJmaWx0ZXJNb2RlbCIsInNldEZpbHRlck1vZGVsIiwiX3VzZVN0YXRlNjMiLCJfdXNlU3RhdGU2NCIsImNvbHVtblZpc2liaWxpdHlNb2RlbCIsInNldENvbHVtblZpc2liaWxpdHlNb2RlbCIsImhhbmRlbEhpZGRlbkNvbHVtbiIsIm5ld0hpZGRlbiIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlRmlsdGVyIiwibmV3TW9kZWwiLCJfbmV3TW9kZWwkcXVpY2tGaWx0ZXIiLCJqb2luIiwic3RvcmVkUXVpY2siLCJwYXJzZSIsIl9zdG9yZWRRdWljayRxdWlja0ZpbCIsInN0b3JlZENvbHVtbnMiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiX3VzZVN0YXRlNjUiLCJfdXNlU3RhdGU2NiIsIm9wZW5WaWV3Iiwic2V0T3BlblZpZXciLCJfdXNlU3RhdGU2NyIsIl91c2VTdGF0ZTY4IiwiaWRWaWV3Iiwic2V0SWRWaWV3IiwiX3VzZVN0YXRlNjkiLCJfdXNlU3RhdGU3MCIsImV4cGVuc2VzVmlldyIsInNldEV4cGVuc2VzVmlldyIsImhhbmRsZU9wZW5WaWV3IiwiaGFuZGxlQ2xvc2VWaWV3IiwiZmV0Y2hEYXRhMiIsIl9yZWYyNCIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJyZW5kZXJDZWxsIiwicGFyYW1zIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJyZXBsYWNlIiwidGl0bGUiLCJkaXNhYmxlZCIsImxlbmd0aCIsIm9uQ2xpY2siLCJ0byIsImN1cnNvciIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10IiwicmlnaHQiLCJmbG9hdCIsIm1hcmdpbiIsImdhcCIsInBhZ2luYXRpb25Nb2RlIiwicm93Q291bnQiLCJwYWdpbmF0aW9uIiwicGFnZVNpemUiLCJvblBhZ2VDaGFuZ2UiLCJyb3dzIiwic2xvdHMiLCJ0b29sYmFyIiwib25Sb3dTZWxlY3Rpb25Nb2RlbENoYW5nZSIsIm5ld1NlbGVjdGlvbiIsInNsb3RQcm9wcyIsInNob3dRdWlja0ZpbHRlciIsInByaW50T3B0aW9ucyIsImRpc2FibGVUb29sYmFyQnV0dG9uIiwiZ2V0Um93Q2xhc3NOYW1lIiwiY2hlY2tib3hTZWxlY3Rpb24iLCJkaXNhYmxlRGVuc2l0eVNlbGVjdG9yIiwicm93U2VsZWN0aW9uTW9kZWwiLCJvbkZpbHRlck1vZGVsQ2hhbmdlIiwib25Db2x1bW5WaXNpYmlsaXR5TW9kZWxDaGFuZ2UiLCJwYWRkaW5nIiwiY291bnQiLCJvbkNoYW5nZSIsIm9uQ2xvc2UiLCJ0ZXh0QWxpZ24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwicGxhY2VtZW50Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJ4cyIsImxhYmVsIiwidHlwZSIsInVuZGVmaW5lZCIsImFjY291bnROYW1lIiwibWFyZ2luQm90dG9tIiwiY29sU3BhbiIsImRlc2NyaXB0aW9uIiwibWF4SGVpZ2h0Iiwic3RpY2t5SGVhZGVyIiwia2V5IiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsInJlcXVpcmVkIiwic2l6ZSIsImhpZGRlbiIsInBsYWNlaG9sZGVyIiwibXVsdGlsaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==