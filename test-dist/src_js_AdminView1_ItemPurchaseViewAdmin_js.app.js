"use strict";
exports.id = "src_js_AdminView1_ItemPurchaseViewAdmin_js";
exports.ids = ["src_js_AdminView1_ItemPurchaseViewAdmin_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/VisibilityOutlined.js"
/*!****************************************************************!*\
  !*** ./node_modules/@mui/icons-material/VisibilityOutlined.js ***!
  \****************************************************************/
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
  d: "M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7"
}), 'VisibilityOutlined');

/***/ },

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

/***/ "./src/js/AdminView1/ItemPurchaseViewAdmin.js"
/*!****************************************************!*\
  !*** ./src/js/AdminView1/ItemPurchaseViewAdmin.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/ConfirmDeleteModal */ "./src/js/component/ConfirmDeleteModal.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _component_SideMaintenance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/SideMaintenance */ "./src/js/component/SideMaintenance.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../utils/apiCache */ "./src/js/utils/apiCache.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../img/images.png */ "./src/js/img/images.png");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _component_PrintHeader__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../component/PrintHeader */ "./src/js/component/PrintHeader.js");
/* harmony import */ var _component_PrintFooter__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../component/PrintFooter */ "./src/js/component/PrintFooter.js");
/* harmony import */ var _mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @mui/icons-material/LocalPrintshop */ "./node_modules/@mui/icons-material/LocalPrintshop.js");
/* harmony import */ var _mui_icons_material_VisibilityOutlined__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @mui/icons-material/VisibilityOutlined */ "./node_modules/@mui/icons-material/VisibilityOutlined.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["_id"],
  _excluded5 = ["_id"];
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









































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_31__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
function ItemPurchaseViewAdmin() {
  var _user$data, _itemPurchase$find;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_50__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_50__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__.selectCurrentUser);
  var hasTvaValue = item => {
    return !!(item.CheckTvA || item.checkTvA || item.CheckTva || item.hasTVA || item.tva || item.TVA);
  };
  var getTaxValue = item => {
    var tax = item.tax || item.taxAmount || item.vatAmount || item.TvaAmount || item.taxUSD || 0;
    if (tax > 0) return tax;
    if (hasTvaValue(item)) {
      return Number(item.totalUSD || item.total || item.amount || 0) * 0.16;
    }
    return 0;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__.setUser)({
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/grantAccess"));
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
  var PurchaseInfoC = grantAccess.filter(row => row.moduleName === "Item-Purchase" && row.access.createM === true);
  var PurchaseInfoV = grantAccess.filter(row => row.moduleName === "Item-Purchase" && row.access.viewM === true);
  var PurchaseInfoU = grantAccess.filter(row => row.moduleName === "Item-Purchase" && row.access.editM === true);
  var PurchaseInfoD = grantAccess.filter(row => row.moduleName === "Item-Purchase" && row.access.deleteM === true);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__.logOut)());
    navigate('/');
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    itemPurchase = _useState4[0],
    setItemPurchase = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    newPurchase = _useState6[0],
    setNewPurchase = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingData = _useState8[0],
    setLoadingData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedRows = _useState0[0],
    setSelectedRows = _useState0[1];

  // --- Partial Payment States ---
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    openAddPayment = _useState10[0],
    setOpenAddPayment = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    openPaymentHistory = _useState12[0],
    setOpenPaymentHistory = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedPurchase = _useState14[0],
    setSelectedPurchase = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      amount: '',
      amountFC: '',
      rate: '',
      date: dayjs__WEBPACK_IMPORTED_MODULE_47___default()().format('YYYY-MM-DD'),
      mode: 'Cash',
      reference: '',
      note: ''
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    paymentForm = _useState16[0],
    setPaymentForm = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    expenseNumber = _useState18[0],
    setExpenseNumber = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    categories = _useState20[0],
    setCategories = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    systemRate = _useState22[0],
    setSystemRate = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    page = _useState24[0],
    setPage = _useState24[1];
  var limit = 100;
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState26 = _slicedToArray(_useState25, 2),
    searchTerm = _useState26[0],
    setSearchTerm = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState28 = _slicedToArray(_useState27, 2),
    filterField = _useState28[0],
    setFilterField = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState30 = _slicedToArray(_useState29, 2),
    filterValue = _useState30[0],
    setFilterValue = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState32 = _slicedToArray(_useState31, 2),
    totalPage = _useState32[0],
    SetTotalPage = _useState32[1];
  var fetchItems = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (page, searchTerm, filterField, filterValue) {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/itemPurchase-Information?page=").concat(page + 1, "&limit=").concat(limit, "&search=").concat(encodeURIComponent(searchTerm.trim()), "&filterField=").concat(encodeURIComponent(filterField.trim()), "&filterValue=").concat(encodeURIComponent(filterValue.trim())));
        var formatDate = res.data.itemI.map(item => _objectSpread(_objectSpread({}, item), {}, {
          id: item._id,
          dataField: dayjs__WEBPACK_IMPORTED_MODULE_47___default()(item.itemPurchaseDate).format('DD/MM/YYYY'),
          Account: item.projectName !== undefined ? item.projectName.name : item.description,
          referenceInfo: item.manufacturer + ' / ' + item.manufacturerNumber,
          itemInfo: (item.items || []).filter(row => parseFloat(row.itemQty) > 0 || row.newDescription !== undefined).map(row => {
            var _row$itemName;
            return ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName.itemName) || row.newDescription || '';
          }),
          itemDescriptionInfo: (item.items || []).filter(row => parseFloat(row.itemQty) > 0 || row.newDescription !== undefined).map(row => row.itemDescription || '')
        }));
        SetTotalPage(Math.ceil(res.data.totalItem / limit));
        setItemPurchase(formatDate);
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

  // Fetch expense categories and last expense number for integration
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchExpenseInfo = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var _lastExpRes$data, _rateRes$data;
          var catRes = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/expensesCategory"));
          setCategories(catRes.data.data);
          var lastExpRes = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/get-last-saved-expense"));
          setExpenseNumber(parseInt(((_lastExpRes$data = lastExpRes.data) === null || _lastExpRes$data === void 0 ? void 0 : _lastExpRes$data.expenseNumber) || 0) + 1);

          // Fetch current exchange rate
          var rateRes = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/rate"));
          if (Array.isArray(rateRes === null || rateRes === void 0 || (_rateRes$data = rateRes.data) === null || _rateRes$data === void 0 ? void 0 : _rateRes$data.data) && rateRes.data.data.length > 0) {
            var _rateRes$data2;
            setSystemRate((_rateRes$data2 = rateRes.data) === null || _rateRes$data2 === void 0 || (_rateRes$data2 = _rateRes$data2.data) === null || _rateRes$data2 === void 0 || (_rateRes$data2 = _rateRes$data2[0]) === null || _rateRes$data2 === void 0 ? void 0 : _rateRes$data2.rate);
          }
        } catch (error) {
          console.error('Error fetching additional info:', error);
        }
      });
      return function fetchExpenseInfo() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchExpenseInfo();
  }, []);
  var handlePageChange = (event, newPage) => {
    setPage(newPage - 1);
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filterModel = _React$useState2[0],
    setFilterModel = _React$useState2[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState34 = _slicedToArray(_useState33, 2),
    columnVisibilityModel = _useState34[0],
    setColumnVisibilityModel = _useState34[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsItemPurchase', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    var _newModel$quickFilter;
    var searchTerm = ((_newModel$quickFilter = newModel.quickFilterValues) === null || _newModel$quickFilter === void 0 ? void 0 : _newModel$quickFilter.join(' ')) || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterItemPurchaseTst', JSON.stringify(newModel));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterItemPurchaseTst'));
    if (storedQuick) {
      var _storedQuick$quickFil;
      var _searchTerm = ((_storedQuick$quickFil = storedQuick.quickFilterValues) === null || _storedQuick$quickFil === void 0 ? void 0 : _storedQuick$quickFil.join(' ')) || '';
      setSearchTerm(_searchTerm);
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsItemPurchase'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, []);
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    openView = _useState36[0],
    setOpenView = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState38 = _slicedToArray(_useState37, 2),
    idView = _useState38[0],
    setIdView = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState40 = _slicedToArray(_useState39, 2),
    itemPurchaseView = _useState40[0],
    setItemPurchaseView = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    item = _useState42[0],
    SetItems = _useState42[1];
  var handleOpenView = id => {
    setOpenView(true);
    setIdView(id);
  };
  var handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
    setItemPurchaseView(null);
    setSelectedRows([]);
  };
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    openReasonDelete = _useState44[0],
    setOpenReasonDelete = _useState44[1];
  var handleOpenReasonDelete = e => {
    if (e && e.preventDefault) e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        if (idView !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/get-itemPurchase/").concat(idView));
            setItemPurchaseView(res.data.data);
            var resItem = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/item-Information?summary=true&limit=1000"));
            SetItems(resItem.data.itemI);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchData2() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [idView]);
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    open = _useState46[0],
    setOpen = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState48 = _slicedToArray(_useState47, 2),
    DeleteId = _useState48[0],
    setDeleteId = _useState48[1];
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleClose = () => {
    setOpen(false);
    setSelectedRows([]);
  };
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState50 = _slicedToArray(_useState49, 2),
    projectName = _useState50[0],
    setProjectName = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState52 = _slicedToArray(_useState51, 2),
    items = _useState52[0],
    setItems = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState54 = _slicedToArray(_useState53, 2),
    reason = _useState54[0],
    setReason = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState56 = _slicedToArray(_useState55, 2),
    reason1 = _useState56[0],
    setReason1 = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState58 = _slicedToArray(_useState57, 2),
    relatedNumber = _useState58[0],
    setRelatedNumber = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState60 = _slicedToArray(_useState59, 2),
    purChaseOrderId = _useState60[0],
    setPurchaseOrderId = _useState60[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchId = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        if (DeleteId) {
          try {
            var _res$data2;
            var res = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/get-itemPurchase/").concat(DeleteId));
            if (res !== null && res !== void 0 && (_res$data2 = res.data) !== null && _res$data2 !== void 0 && _res$data2.data) {
              var _res$data3, _res$data4;
              setProjectName(res.data.data.projectName);
              setItems(res.data.data.items);
              setReason(res.data.data.reason);
              setRelatedNumber(Number(((_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.itemPurchaseNumber) || ((_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.itemPurchaseNumber) || 0));
              setPurchaseOrderId(res.data.data.POID);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchId() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchId();
  }, [DeleteId]);
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState62 = _slicedToArray(_useState61, 2),
    purchase = _useState62[0],
    setPurchase = _useState62[1];
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState64 = _slicedToArray(_useState63, 2),
    maintenance = _useState64[0],
    setMaintenance = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState66 = _slicedToArray(_useState65, 2),
    invoice = _useState66[0],
    setInvoice = _useState66[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        try {
          if (projectName && projectName._id) {
            var _res$data5, _resMaintenance$data, _resInvoice$data;
            var res = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/purchase?summary=true"));
            setPurchase((_res$data5 = res.data) === null || _res$data5 === void 0 || (_res$data5 = _res$data5.data) === null || _res$data5 === void 0 ? void 0 : _res$data5.filter(row => {
              var _row$projectName;
              return ((_row$projectName = row.projectName) === null || _row$projectName === void 0 ? void 0 : _row$projectName._id) === projectName._id;
            }));
            var resMaintenance = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/maintenance?summary=true"));
            setMaintenance((_resMaintenance$data = resMaintenance.data) === null || _resMaintenance$data === void 0 || (_resMaintenance$data = _resMaintenance$data.data) === null || _resMaintenance$data === void 0 ? void 0 : _resMaintenance$data.filter(row => row._id === projectName._id));
            var resInvoice = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/invoice?summary=true"));
            setInvoice((_resInvoice$data = resInvoice.data) === null || _resInvoice$data === void 0 || (_resInvoice$data = _resInvoice$data.data) === null || _resInvoice$data === void 0 ? void 0 : _resInvoice$data.filter(row => row._id === projectName._id));
          }
        } catch (error) {
          console.error('Error fetching related modules');
        }
      });
      return function fetchData2() {
        return _ref13.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [projectName]);
  var handleUpdatePurchase = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* () {
      if (!(projectName !== null && projectName !== void 0 && projectName._id)) return;
      try {
        if (reason === 'Project') {
          var _resPur$data;
          var resPur = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/purchase?summary=true"));
          var relevantPurchases = (_resPur$data = resPur.data) === null || _resPur$data === void 0 || (_resPur$data = _resPur$data.data) === null || _resPur$data === void 0 ? void 0 : _resPur$data.filter(row => {
            var _row$projectName2;
            return ((_row$projectName2 = row.projectName) === null || _row$projectName2 === void 0 ? void 0 : _row$projectName2._id) === projectName._id;
          });
          for (var purchaseRow of relevantPurchases) {
            var currentRes = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/get-purchase/").concat(purchaseRow._id));
            var currentData = currentRes.data.data;
            var updatedItems = currentData.items.map(Item => {
              var RelatedItem = items.find(Item2 => {
                var _Item$itemName, _Item$itemName2, _Item2$itemName;
                return ((_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName._id) !== undefined && ((_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2._id) === ((_Item2$itemName = Item2.itemName) === null || _Item2$itemName === void 0 ? void 0 : _Item2$itemName._id) || Item2.itemDescription === Item.itemDescription;
              });
              if (RelatedItem) {
                var itemBuy = parseFloat(Item.itemBuy || 0) - parseFloat(RelatedItem.itemQty || 0);
                var totalGenerale = (parseFloat(Item.itemCost) || 0) * itemBuy;
                return _objectSpread(_objectSpread({}, Item), {}, {
                  itemBuy,
                  totalGenerale
                });
              }
              return Item;
            });
            var purchaseAmount2 = updatedItems.reduce((sum, row) => sum + (parseFloat(row.totalGenerale) || 0), 0);
            yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/update-purchase/").concat(purchaseRow._id), {
              items: updatedItems,
              purchaseAmount2
            });
          }
        } else if (reason === 'Maintenance') {
          var _resM$data;
          var resM = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/maintenance?summary=true"));
          var relevantMaintenance = (_resM$data = resM.data) === null || _resM$data === void 0 || (_resM$data = _resM$data.data) === null || _resM$data === void 0 ? void 0 : _resM$data.filter(row => row._id === projectName._id);
          for (var maintenanceRow of relevantMaintenance) {
            var _currentRes = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/get-maintenance/").concat(maintenanceRow._id));
            var _currentData = _currentRes.data.data;
            var _updatedItems = _currentData.items.map(Item => {
              var RelatedItem = items.find(Item2 => {
                var _Item$itemName3, _Item$itemName4, _Item2$itemName2;
                return ((_Item$itemName3 = Item.itemName) === null || _Item$itemName3 === void 0 ? void 0 : _Item$itemName3._id) !== undefined && ((_Item$itemName4 = Item.itemName) === null || _Item$itemName4 === void 0 ? void 0 : _Item$itemName4._id) === ((_Item2$itemName2 = Item2.itemName) === null || _Item2$itemName2 === void 0 ? void 0 : _Item2$itemName2._id) || Item2.itemDescription === Item.itemDescription;
              });
              if (RelatedItem) {
                var itemBuy = parseFloat(Item.itemBuy || 0) - parseFloat(RelatedItem.itemQty || 0);
                var totalGenerale = (parseFloat(Item.itemCost) || 0) * itemBuy;
                return _objectSpread(_objectSpread({}, Item), {}, {
                  itemBuy,
                  totalGenerale
                });
              }
              return Item;
            });
            yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/update-maintenance/").concat(maintenanceRow._id), {
              items: _updatedItems
            });
          }
        } else if (reason === 'Invoice') {
          var _resI$data;
          var resI = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/invoice?summary=true"));
          var relevantInvoices = (_resI$data = resI.data) === null || _resI$data === void 0 || (_resI$data = _resI$data.data) === null || _resI$data === void 0 ? void 0 : _resI$data.filter(row => row._id === projectName._id);
          for (var invoiceRow of relevantInvoices) {
            var _currentRes2 = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/get-invoice/").concat(invoiceRow._id));
            var _currentData2 = _currentRes2.data.data;
            var _updatedItems2 = _currentData2.items.map(Item => {
              var RelatedItem = items.find(Item2 => {
                var _Item$itemName5, _Item$itemName6, _Item2$itemName3;
                return ((_Item$itemName5 = Item.itemName) === null || _Item$itemName5 === void 0 ? void 0 : _Item$itemName5._id) !== undefined && ((_Item$itemName6 = Item.itemName) === null || _Item$itemName6 === void 0 ? void 0 : _Item$itemName6._id) === ((_Item2$itemName3 = Item2.itemName) === null || _Item2$itemName3 === void 0 ? void 0 : _Item2$itemName3._id) || Item2.itemDescription === Item.itemDescription;
              });
              if (RelatedItem) {
                var itemBuy = parseFloat(Item.itemBuy || 0) - parseFloat(RelatedItem.itemQty || 0);
                var totalGenerale = (parseFloat(Item.itemCost) || 0) * itemBuy;
                return _objectSpread(_objectSpread({}, Item), {}, {
                  itemBuy,
                  totalGenerale
                });
              }
              return Item;
            });
            yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/update-invoice/").concat(invoiceRow._id), {
              items: _updatedItems2
            });
          }
        }
      } catch (error) {
        console.error('Error in handleUpdatePurchase (Deletion Safe Merge):', error);
      }
    });
    return function handleUpdatePurchase() {
      return _ref14.apply(this, arguments);
    };
  }();
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    loading = _useState68[0],
    setLoading = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState70 = _slicedToArray(_useState69, 2),
    modalDeleteOpenLoading = _useState70[0],
    setModalDeleteOpenLoading = _useState70[1];
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
    handleDeleteOpenLoading(); // Permanently disabled for instant responsiveness
  };
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* () {
      var data = {
        person: user.data.userName + ' Deleted IP-' + relatedNumber,
        reason: reason1,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref15.apply(this, arguments);
    };
  }();
  var onStatusUpdate = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* () {
      if (purChaseOrderId && purChaseOrderId !== "undefined") {
        try {
          yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/update-purchaseOrder/").concat(purChaseOrderId), {
            Converted: false,
            IpRelated: {}
          });
        } catch (error) {}
      }
    });
    return function onStatusUpdate() {
      return _ref16.apply(this, arguments);
    };
  }();
  var handleQty = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(function* () {
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/CalculateTotal"));
      } catch (error) {}
    });
    return function handleQty() {
      return _ref17.apply(this, arguments);
    };
  }();
  var handleDeleteUpdate = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        // Switched to POST and sending ID in body to match new backend pattern
        var res = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/delete-itemPurchase"), {
          id: DeleteId
        });
        if (res) {
          // Optimistic UI: Remove the deleted row from state instantly (BEFORE long-running background tasks)
          setItemPurchase(prev => prev.filter(item => item._id !== DeleteId));
          setSelectedRows(prev => prev.filter(id => id !== DeleteId));
          handleDeleteOpenLoading();

          // These tasks update secondary state or trigger calculations in background
          yield onStatusUpdate();
          yield handleQty();
          yield handleUpdatePurchase();
          yield handleCreateNotification();
        }
      } catch (error) {
        console.error('Error deleting item purchase:', error);
        alert('Failed to delete item purchase. Please check the console for details.');
      } finally {
        handleCloseReasonDelete();
      }
    });
    return function handleDeleteUpdate(_x5) {
      return _ref18.apply(this, arguments);
    };
  }();
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState72 = _slicedToArray(_useState71, 2),
    updateS = _useState72[0],
    setUpdateS = _useState72[1];
  var handleOpenAddPayment = purchase => {
    setSelectedPurchase(purchase);
    var totalWithTax = parseFloat(purchase.totalUSD || purchase.total || 0);

    // Calculate current total paid in USD (including converted FC payments)
    var currentPaidUSD = (purchase.payments || []).reduce((sum, p) => {
      var pUSD = parseFloat(p.amount || 0);
      var pFC = parseFloat(p.amountFC || 0);
      var pRate = parseFloat(p.rate || systemRate || 1);
      return sum + pUSD + pFC / pRate;
    }, 0);
    var remaining = Math.max(0, totalWithTax - currentPaidUSD);
    setPaymentForm({
      amount: remaining.toFixed(2),
      amountFC: '0',
      rate: systemRate.toString(),
      date: dayjs__WEBPACK_IMPORTED_MODULE_47___default()().format('YYYY-MM-DD'),
      mode: 'Cash',
      reference: "Payment for IP-".concat(purchase.itemPurchaseNumber),
      note: ''
    });
    setOpenAddPayment(true);
  };
  var handleOpenPaymentHistory = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(function* (purchase) {
      setSelectedPurchase(purchase);
      setOpenPaymentHistory(true);
      // Fetch full record to get payments[] which paginated endpoint may omit
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/get-itemPurchase/").concat(purchase._id));
        var fullData = res.data.data;
        setSelectedPurchase(prev => _objectSpread(_objectSpread(_objectSpread({}, prev), fullData), {}, {
          id: prev.id
        }));
      } catch (e) {
        // keep original data if fetch fails
      }
    });
    return function handleOpenPaymentHistory(_x6) {
      return _ref19.apply(this, arguments);
    };
  }();
  var handleSavePayment = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      if (!selectedPurchase) return;
      setLoading(true);
      var amountUSD = parseFloat(paymentForm.amount || 0);
      var amountFC = parseFloat(paymentForm.amountFC || 0);
      var rate = parseFloat(paymentForm.rate || systemRate || 1);

      // Total value of THIS payment in USD
      var thisPaymentTotalUSD = amountUSD + amountFC / rate;
      var newPayment = _objectSpread(_objectSpread({}, paymentForm), {}, {
        reference: paymentForm.note ? paymentForm.reference ? "".concat(paymentForm.reference, " | Note: ").concat(paymentForm.note) : "Note: ".concat(paymentForm.note) : paymentForm.reference,
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        amount: amountUSD,
        amountFC: amountFC,
        rate: rate,
        totalUSD: thisPaymentTotalUSD // Store the converted total for easy calculation
      });
      try {
        // Fetch latest Item Purchase to avoid overwriting concurrent payments
        var currentIPRes = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/get-itemPurchase/").concat(selectedPurchase._id));
        var latestIPData = currentIPRes.data.data;
        var updatedPayments = [...(latestIPData.payments || []), newPayment];
        var totalWithTax = parseFloat(latestIPData.totalUSD || latestIPData.total || 0);

        // Calculate current total paid BEFORE this new payment
        var currentPaidUSD = (latestIPData.payments || []).reduce((sum, p) => {
          if (p.totalUSD !== undefined) return sum + p.totalUSD;
          return sum + (parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1));
        }, 0);

        // VALIDATION: Prevent payment from exceeding total amount (allow $0.05 float tolerance)
        if (currentPaidUSD + thisPaymentTotalUSD > totalWithTax + 0.05) {
          alert("Error: Payment amount cannot exceed the remaining balance of this Item Purchase.");
          setLoading(false);
          return;
        }

        // Recalculate total paid across ALL payments using latest data
        var totalPaidUSD = updatedPayments.reduce((sum, p) => {
          if (p.totalUSD !== undefined) return sum + p.totalUSD;
          return sum + (parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1));
        }, 0);
        var newStatus = 'UnPaid';
        if (totalPaidUSD >= totalWithTax - 0.01) newStatus = 'Paid';else if (totalPaidUSD > 0) newStatus = 'Partially-Paid';

        // 1. Update Item Purchase
        var _id = latestIPData._id,
          restData = _objectWithoutProperties(latestIPData, _excluded4);
        yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/update-itemPurchase/").concat(selectedPurchase._id), _objectSpread(_objectSpread({}, restData), {}, {
          payments: updatedPayments,
          status: newStatus
        }));

        // Clear cache so Expenses Daily Information will fetch fresh data
        (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_37__.invalidateCache)('/itemPurchase');

        // 2. Update Local State
        setItemPurchase(prev => prev.map(item => item._id === selectedPurchase._id ? _objectSpread(_objectSpread({}, item), {}, {
          status: newStatus,
          payments: updatedPayments
        }) : item));
        setOpenAddPayment(false);
        setUpdateS(true);
        handleDeleteOpenLoading();
      } catch (error) {
        console.error('Error saving payment:', error);
        alert('Failed to save payment.');
      } finally {
        setLoading(false);
      }
    });
    return function handleSavePayment(_x7) {
      return _ref20.apply(this, arguments);
    };
  }();
  var handleDeletePayment = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(function* (paymentId) {
      if (!window.confirm('Are you sure you want to delete this payment record?')) return;
      setLoading(true);
      try {
        // Fetch latest Item Purchase
        var currentIPRes = yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/get-itemPurchase/").concat(selectedPurchase._id));
        var latestIPData = currentIPRes.data.data;
        var updatedPayments = (latestIPData.payments || []).filter(p => p.id !== paymentId);
        var totalWithTax = parseFloat(latestIPData.totalUSD || latestIPData.total || 0);
        var totalPaidUSD = updatedPayments.reduce((sum, p) => {
          return sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1));
        }, 0);
        var newStatus = 'UnPaid';
        if (totalPaidUSD >= totalWithTax - 0.01) newStatus = 'Paid';else if (totalPaidUSD > 0) newStatus = 'Partially-Paid';
        var _id = latestIPData._id,
          restData = _objectWithoutProperties(latestIPData, _excluded5);
        yield axios__WEBPACK_IMPORTED_MODULE_43__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_44__.ENDPOINT_URL, "/update-itemPurchase/").concat(selectedPurchase._id), _objectSpread(_objectSpread({}, restData), {}, {
          payments: updatedPayments,
          status: newStatus
        }));
        setItemPurchase(prev => prev.map(item => item._id === selectedPurchase._id ? _objectSpread(_objectSpread({}, item), {}, {
          status: newStatus,
          payments: updatedPayments
        }) : item));
        setSelectedPurchase(_objectSpread(_objectSpread({}, selectedPurchase), {}, {
          payments: updatedPayments,
          status: newStatus
        }));
        setUpdateS(true);
        handleDeleteOpenLoading();
      } catch (error) {
        console.error('Error deleting payment:', error);
      } finally {
        setLoading(false);
      }
    });
    return function handleDeletePayment(_x8) {
      return _ref21.apply(this, arguments);
    };
  }();
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    open1 = _React$useState4[0],
    setOpen1 = _React$useState4[1];
  var toggleDrawer = () => {
    setOpen1(!open1);
  };
  var columns = [{
    field: 'itemPurchaseNumber',
    headerName: '#',
    minWidth: 90,
    flex: 0.8,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "IP-0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, params.row.itemPurchaseNumber), " ")
  }, {
    field: 'itemPurchaseDate',
    headerName: 'Date',
    minWidth: 100,
    flex: 1,
    type: 'date',
    valueGetter: params => new Date(params.row.itemPurchaseDate),
    renderCell: params => dayjs__WEBPACK_IMPORTED_MODULE_47___default()(params.row.itemPurchaseDate).format('DD/MM/YYYY')
  }, {
    field: 'Account',
    headerName: 'Description',
    minWidth: 200,
    flex: 2
  }, {
    field: 'referenceInfo',
    headerName: 'Account',
    minWidth: 150,
    flex: 1.5
  }, {
    field: 'status',
    headerName: 'Action',
    minWidth: 200,
    flex: 1.5,
    renderCell: params => {
      var totalWithTax = parseFloat(params.row.totalUSD || params.row.total || 0);
      // Robust calculation of total paid in USD equivalent
      var totalPaid = (params.row.payments || []).reduce((sum, p) => {
        return sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1));
      }, 0);
      var isFullyPaid = totalPaid >= totalWithTax - 0.01;
      // Also treat status='Paid' as fully paid — covers case where payments[] is stale or missing
      var statusIsPaid = (params.row.status || '').toLowerCase() === 'paid';
      var effectivelyPaid = isFullyPaid || statusIsPaid;
      // hasPayments: true if payments array has items OR status indicates payment was made
      // (paginated endpoint may not return payments[] — use status as reliable fallback)
      var hasPayments = (params.row.payments || []).length > 0 || params.row.status === 'Paid' || params.row.status === 'Partially-Paid';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          display: 'flex',
          gap: '5px',
          alignItems: 'center'
        }
      }, !effectivelyPaid && totalWithTax > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: () => handleOpenAddPayment(params.row),
        className: "btnCustomer2"
      }, "Click To Pay"), hasPayments && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: () => handleOpenPaymentHistory(params.row),
        className: "btnCustomer",
        style: {
          backgroundColor: '#202a5a'
        }
      }, "History"), (totalWithTax === 0 || effectivelyPaid) && !hasPayments && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        style: {
          color: 'blue',
          fontWeight: 'bold',
          fontSize: '0.85rem'
        }
      }, "PAID"), isFullyPaid && hasPayments && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        style: {
          color: 'blue',
          fontWeight: 'bold',
          fontSize: '0.85rem'
        }
      }, "FULL PAID"));
    }
  }, {
    field: 'paymentStatusText',
    headerName: 'Status',
    minWidth: 120,
    flex: 1,
    renderCell: params => {
      var totalWithTax = parseFloat(params.row.totalUSD || params.row.total || 0);
      var status = params.row.status || 'UnPaid';

      // Auto-detect Paid status for zero-balance items if not explicitly set
      if (totalWithTax === 0 && status === 'UnPaid') {
        status = 'Paid';
      }
      var color = 'red';
      if (status === 'Paid') color = 'blue';else if (status === 'Partially-Paid') color = 'orange';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        style: {
          color,
          fontWeight: 'bold'
        }
      }, status.toUpperCase());
    }
  }, {
    field: 'itemDescriptionInfo',
    headerName: 'I-Description',
    minWidth: 120,
    flex: 1.2
  }, {
    field: 'totalFC',
    headerName: 'TotalFC',
    minWidth: 120,
    flex: 1,
    renderCell: params => {
      var _params$row$totalFC;
      return "FC".concat((_params$row$totalFC = params.row.totalFC) === null || _params$row$totalFC === void 0 ? void 0 : _params$row$totalFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, {
    field: 'total',
    headerName: 'Total',
    minWidth: 100,
    flex: 1,
    renderCell: params => {
      var total = parseFloat(params.row.totalUSD || params.row.total || 0);
      var totalPaid = (params.row.payments || []).reduce((sum, p) => sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)), 0);
      var rest = total - totalPaid;
      return "$".concat(rest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, {
    field: 'view',
    headerName: 'View',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onClick: () => handleOpenView(params.row._id),
      disabled: PurchaseInfoV.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_VisibilityOutlined__WEBPACK_IMPORTED_MODULE_60__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      disabled: PurchaseInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, {
      to: "/ItemPurchaseUpdateForm/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onClick: () => handleOpen(params.row._id),
      disabled: PurchaseInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_56__.useReactToPrint)({
    content: () => componentRef.current
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_33__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: open1,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__["default"], {
    sx: {
      pr: '24px'
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_41__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Item Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_55__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_54__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_52__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: open1,
    onMouseEnter: () => setOpen1(true),
    onMouseLeave: () => setOpen1(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_42__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_36__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_35__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SideMaintenance__WEBPACK_IMPORTED_MODULE_5__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_38__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_48__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disabled: ((PurchaseInfoC === null || PurchaseInfoC === void 0 ? void 0 : PurchaseInfoC.length) === 0 || 0) && (user === null || user === void 0 || (_user$data = user.data) === null || _user$data === void 0 ? void 0 : _user$data.role) !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, {
    to: '/ItemPurchaseViewForm',
    title: "Add Item Purchase"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_45__["default"], null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleRefreshSearch,
    className: "btnCustomer2"
  }, "Refresh Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_39__.DataGrid, {
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: itemPurchase,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__.GridToolbar
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
    getRowClassName: params => newPurchase.includes(params.row._id) ? 'new-Purchase' : '',
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
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    open: open,
    handleClose: handleClose,
    handleDelete: handleOpenReasonDelete,
    itemName: (_itemPurchase$find = itemPurchase.find(i => i._id === DeleteId)) !== null && _itemPurchase$find !== void 0 && _itemPurchase$find.itemPurchaseNumber ? "IP-0".concat(itemPurchase.find(i => i._id === DeleteId).itemPurchaseNumber) : "this item purchase"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    open: modalDeleteOpenLoading,
    onClose: handleDeleteCloseLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_48__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_49__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Data successfully ", updateS ? 'Updated' : 'deleted'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleDeleteCloseLoading,
    className: "btnCustomer"
  }, "Close")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    open: openView,
    onClose: handleCloseView,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: {
        xs: '100%',
        md: 950
      },
      maxHeight: '90vh',
      overflowY: 'auto',
      '@media print': {
        width: '100%',
        height: 'auto',
        maxHeight: 'none',
        overflow: 'visible',
        boxShadow: 'none',
        border: 'none'
      }
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      mb: 1,
      position: 'relative',
      zIndex: 1000,
      '@media print': {
        display: 'none'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Print",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handlePrint,
    style: {
      zIndex: 1000
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_59__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleCloseView,
    style: {
      zIndex: 1000
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), itemPurchaseView !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: componentRef,
    style: {
      padding: '0px 20px 0px 20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      display: 'none',
      '@media print': {
        display: 'block',
        marginBottom: '20px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_57__["default"], {
    branchId: itemPurchaseView.branchId || ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2",
    sx: {
      fontWeight: 'bold'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: '13px'
    }
  }, "IP-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, itemPurchaseView.itemPurchaseNumber), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, "Date: "), "  ", dayjs__WEBPACK_IMPORTED_MODULE_47___default()(itemPurchaseView.itemPurchaseDate).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, "Supplier: "), " ", itemPurchaseView.manufacturer !== undefined ? itemPurchaseView.manufacturer : null), itemPurchaseView.manufacturerNumber !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, "REFERENCE: "), " ", itemPurchaseView.manufacturerNumber) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
  }, "Description: "), " ", itemPurchaseView.projectName !== undefined ? itemPurchaseView.projectName.name : itemPurchaseView.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      height: '',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_16__["default"],
    sx: {
      overflowX: 'visible',
      '@media print': {
        overflow: 'visible'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      minWidth: 650
    },
    size: "small",
    "aria-label": "a dense table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Information Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Item Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Rate(USD)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Taux(Exchange Rate)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Total(USD)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Total(FC)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, itemPurchaseView.items.map((row, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, row.itemDescription !== undefined ? row.itemDescription : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, row.itemName !== undefined ? row.itemName.itemName : row.newDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, row.itemQty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "$", row.itemRate != null ? parseFloat(row.itemRate).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) : '0.00'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, row.Taux != null ? parseFloat(row.Taux).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) : '0.00'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "$", row.totalAmount != null ? parseFloat(row.totalAmount).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) : row.totalAmountUSD != null ? parseFloat(row.totalAmountUSD).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) : '0.00'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, itemPurchaseView.currency === 'FC' && row.fcConvertToUsdTotal != null && !isNaN(row.fcConvertToUsdTotal) ? parseFloat(row.fcConvertToUsdTotal).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) : '0.00'));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 2
  }, "TVA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, hasTvaValue(itemPurchaseView) ? 'Yes' : 'No'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "Tax Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "$", getTaxValue(itemPurchaseView).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 2
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "FC", itemPurchaseView.totalFC !== undefined && itemPurchaseView.totalFC !== null ? parseFloat(itemPurchaseView.totalFC).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "$", itemPurchaseView.total !== undefined && itemPurchaseView.total !== null ? itemPurchaseView.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "$", itemPurchaseView.totalUSD !== undefined && itemPurchaseView.totalUSD !== null ? parseFloat(itemPurchaseView.totalUSD).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h6",
    sx: {
      fontWeight: 'normal',
      mb: 1,
      color: '#30368a'
    }
  }, "Payment History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_16__["default"],
    variant: "outlined",
    sx: {
      overflowX: 'visible',
      '@media print': {
        overflow: 'visible'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      backgroundColor: '#f5f5f5'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      fontWeight: 'normal'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      fontWeight: 'normal'
    }
  }, "Amount (USD)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      fontWeight: 'normal'
    }
  }, "Amount (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      fontWeight: 'normal'
    }
  }, "Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      fontWeight: 'normal'
    }
  }, "Note / Ref"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, (itemPurchaseView.payments || []).map((p, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    key: idx
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, dayjs__WEBPACK_IMPORTED_MODULE_47___default()(p.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "$", parseFloat(p.amount || 0).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "FC ", parseFloat(p.amountFC || 0).toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, p.mode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, p.note || p.reference))), (!itemPurchaseView.payments || itemPurchaseView.payments.length === 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 5,
    align: "center"
  }, "No payments recorded"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      mt: 2,
      p: 2,
      backgroundColor: '#f9f9f9',
      borderRadius: '4px',
      border: '1px solid #ddd'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "Total Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h6",
    sx: {
      fontWeight: 'normal'
    }
  }, "$", parseFloat(itemPurchaseView.totalUSD || itemPurchaseView.total || 0).toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "Total Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h6",
    sx: {
      fontWeight: 'normal'
    }
  }, "$", (itemPurchaseView.payments || []).reduce((sum, p) => sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)), 0).toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "Rest Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h6",
    sx: {
      fontWeight: 'normal'
    }
  }, "$", (parseFloat(itemPurchaseView.totalUSD || itemPurchaseView.total || 0) - (itemPurchaseView.payments || []).reduce((sum, p) => sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)), 0)).toFixed(2)))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      display: 'none',
      '@media print': {
        display: 'block',
        marginTop: '20px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_PrintFooter__WEBPACK_IMPORTED_MODULE_58__["default"], {
    branchId: itemPurchaseView.branchId || ""
  }))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2",
    sx: {
      textAlign: 'center'
    }
  }, "Why do you want to delete IP-", relatedNumber, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleDeleteUpdate
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    required: true,
    id: "reason1",
    name: "reason1",
    multiline: true,
    rows: 2,
    value: reason1,
    placeholder: "Reason",
    onChange: e => setReason1(e.target.value),
    label: "Reason",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body2",
    sx: {
      mb: 1,
      mt: 1
    }
  }, "Type ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'red',
      fontWeight: 'bold'
    }
  }, "DELETE"), " to confirm final action:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    fullWidth: true,
    size: "small",
    placeholder: "Type DELETE here",
    id: "confirmDeleteIP",
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    },
    onClick: e => {
      var input = document.getElementById('confirmDeleteIP');
      if (input && input.value !== 'DELETE') {
        e.preventDefault();
        alert('Please type DELETE to confirm');
      }
    }
  }, "Confirm Delete Irreversibly")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    open: openAddPayment,
    onClose: () => setOpenAddPayment(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h6",
    sx: {
      mb: 2,
      fontWeight: 'bold'
    }
  }, "Record Payment for IP-", selectedPurchase === null || selectedPurchase === void 0 ? void 0 : selectedPurchase.itemPurchaseNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSavePayment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    fullWidth: true,
    label: "Amount (USD)",
    type: "number",
    value: paymentForm.amount,
    onChange: e => setPaymentForm(_objectSpread(_objectSpread({}, paymentForm), {}, {
      amount: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    fullWidth: true,
    label: "Amount (FC)",
    type: "number",
    value: paymentForm.amountFC,
    onChange: e => setPaymentForm(_objectSpread(_objectSpread({}, paymentForm), {}, {
      amountFC: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    fullWidth: true,
    label: "Rate (Taux)",
    type: "number",
    value: paymentForm.rate,
    onChange: e => setPaymentForm(_objectSpread(_objectSpread({}, paymentForm), {}, {
      rate: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      p: 1,
      backgroundColor: '#f0f4ff',
      borderRadius: '4px',
      border: '1px dashed #30368a',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "body2",
    sx: {
      fontWeight: 'bold',
      color: '#30368a'
    }
  }, "Total This Payment: $", (parseFloat(paymentForm.amount || 0) + parseFloat(paymentForm.amountFC || 0) / parseFloat(paymentForm.rate || 1)).toFixed(2), " USD"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    fullWidth: true,
    label: "Date",
    type: "date",
    required: true,
    value: paymentForm.date,
    onChange: e => setPaymentForm(_objectSpread(_objectSpread({}, paymentForm), {}, {
      date: e.target.value
    })),
    InputLabelProps: {
      shrink: true
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, "Payment Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], {
    value: paymentForm.mode,
    label: "Payment Mode",
    onChange: e => setPaymentForm(_objectSpread(_objectSpread({}, paymentForm), {}, {
      mode: e.target.value
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    value: "Cash"
  }, "Cash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    value: "Bank Transfer"
  }, "Bank Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    value: "Check"
  }, "Check")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    fullWidth: true,
    label: "Reference / Check #",
    value: paymentForm.reference,
    onChange: e => setPaymentForm(_objectSpread(_objectSpread({}, paymentForm), {}, {
      reference: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    fullWidth: true,
    label: "Note",
    multiline: true,
    rows: 2,
    value: paymentForm.note,
    onChange: e => setPaymentForm(_objectSpread(_objectSpread({}, paymentForm), {}, {
      note: e.target.value
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer2",
    style: {
      width: '100%'
    }
  }, "Save Payment")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    open: openPaymentHistory,
    onClose: () => setOpenPaymentHistory(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 700,
      maxHeight: '80vh',
      overflowY: 'auto'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h6",
    sx: {
      mb: 2,
      fontWeight: 'normal'
    }
  }, "Payment History - IP-", selectedPurchase === null || selectedPurchase === void 0 ? void 0 : selectedPurchase.itemPurchaseNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_16__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      backgroundColor: '#f5f5f5'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      fontWeight: 'normal'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      fontWeight: 'normal'
    }
  }, "Amount (USD)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      fontWeight: 'normal'
    }
  }, "Amount (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      fontWeight: 'normal'
    }
  }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      fontWeight: 'normal'
    }
  }, "Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    align: "right",
    sx: {
      fontWeight: 'normal'
    }
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, ((selectedPurchase === null || selectedPurchase === void 0 ? void 0 : selectedPurchase.payments) || []).map(p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    key: p.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, dayjs__WEBPACK_IMPORTED_MODULE_47___default()(p.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "$", parseFloat(p.amount || 0).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "FC ", parseFloat(p.amountFC || 0).toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, p.rate || '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, p.mode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    align: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    size: "small",
    onClick: () => handleDeletePayment(p.id),
    color: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fontSize: "small"
  }))))), (!(selectedPurchase !== null && selectedPurchase !== void 0 && selectedPurchase.payments) || selectedPurchase.payments.length === 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 6,
    align: "center"
  }, "No payments recorded"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      mt: 2,
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 'normal',
      backgroundColor: '#f0f4ff',
      p: 1.5,
      borderRadius: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      fontWeight: 'normal'
    }
  }, "Total Paid: $", ((selectedPurchase === null || selectedPurchase === void 0 ? void 0 : selectedPurchase.payments) || []).reduce((sum, p) => sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)), 0).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      fontWeight: 'normal'
    }
  }, "Rest: $", (parseFloat((selectedPurchase === null || selectedPurchase === void 0 ? void 0 : selectedPurchase.totalUSD) || (selectedPurchase === null || selectedPurchase === void 0 ? void 0 : selectedPurchase.total) || 0) - ((selectedPurchase === null || selectedPurchase === void 0 ? void 0 : selectedPurchase.payments) || []).reduce((sum, p) => sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || systemRate || 1)), 0)).toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setOpenPaymentHistory(false),
    className: "btnCustomer",
    style: {
      width: '100%',
      marginTop: '16px'
    }
  }, "Close"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemPurchaseViewAdmin);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfSXRlbVB1cmNoYXNlVmlld0FkbWluX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyx5Qjs7Ozs7Ozs7OztBQ1pZO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQyx5Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ2REOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLFNBQVMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlYsQ0FBMEQ7QUFDTztBQUN2QztBQUNQO0FBQ2U7QUFDd0I7QUFDTjtBQUNzQjtBQUNkO0FBQ1o7QUFDSTtBQUNJO0FBQ2dOO0FBQ3hNO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDTTtBQUNRO0FBQ0o7QUFDUztBQUNUO0FBQ2M7QUFDcEM7QUFDa0I7QUFDSztBQUN2QjtBQUNlO0FBQ3FCO0FBQ1I7QUFDMEI7QUFDaEM7QUFDVjtBQUNZO0FBQ1E7QUFDVDtBQUNFO0FBQ0E7QUFDYTtBQUNZO0FBRTVF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TCxxQkFFTyxDQUNOLENBQ0osQ0FDTCxDQUNGLENBQUM7QUFFaEIsQ0FBQztBQUVELGlFQUFlbkYsa0JBQWtCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSEw7QUFDNUIsaUVBQWU7QUFDZixjQUFjLDBEQUFpQjtBQUMvQixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7O0FDSEQsaUVBQWUsY0FBYyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhHO0FBQzVCLHVDQUF1Qzs7QUFFdkM7QUFDZTtBQUNmO0FBQ0EsSUFBSSw0REFBcUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sd0RBQVE7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDUztBQUNOO0FBQ3NCOztBQUVqRDtBQUNBLE1BQU0sa0RBQU07QUFDWixXQUFXLGtEQUFNO0FBQ2pCOztBQUVBO0FBQ0EsaURBQWlELCtDQUFHLEtBQUs7O0FBRXpEO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTLDhEQUFlO0FBQ3hCOztBQUVBLGlFQUFlLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJjOztBQUUvQjtBQUNBLHFDQUFxQyxpREFBSztBQUMxQzs7QUFFQSxpRUFBZSxRQUFRLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvVmlzaWJpbGl0eU91dGxpbmVkLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9XYXJuaW5nQW1iZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BZGQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL0l0ZW1QdXJjaGFzZVZpZXdBZG1pbi5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9Db25maXJtRGVsZXRlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLW5vZGUvbmF0aXZlLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL3JlZ2V4LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL3JuZy5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLW5vZGUvdjQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLW5vZGUvdmFsaWRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cInVzZSBjbGllbnRcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyIDZjMy43OSAwIDcuMTcgMi4xMyA4LjgyIDUuNUMxOS4xNyAxNC44NyAxNS43OSAxNyAxMiAxN3MtNy4xNy0yLjEzLTguODItNS41QzQuODMgOC4xMyA4LjIxIDYgMTIgNm0wLTJDNyA0IDIuNzMgNy4xMSAxIDExLjUgMi43MyAxNS44OSA3IDE5IDEyIDE5czkuMjctMy4xMSAxMS03LjVDMjEuMjcgNy4xMSAxNyA0IDEyIDRtMCA1YzEuMzggMCAyLjUgMS4xMiAyLjUgMi41UzEzLjM4IDE0IDEyIDE0cy0yLjUtMS4xMi0yLjUtMi41UzEwLjYyIDkgMTIgOW0wLTJjLTIuNDggMC00LjUgMi4wMi00LjUgNC41UzkuNTIgMTYgMTIgMTZzNC41LTIuMDIgNC41LTQuNVMxNC40OCA3IDEyIDdcIlxufSksICdWaXNpYmlsaXR5T3V0bGluZWQnKTsiLCJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKFsvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgNS45OSAxOS41MyAxOUg0LjQ3ek0xMiAyIDEgMjFoMjJ6XCJcbn0sIFwiMFwiKSwgLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEzIDE2aC0ydjJoMnptMC02aC0ydjVoMnpcIlxufSwgXCIxXCIpXSwgJ1dhcm5pbmdBbWJlcicpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCJcbn0pLCAnQWRkJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29uZmlybURlbGV0ZU1vZGFsIGZyb20gJy4uL2NvbXBvbmVudC9Db25maXJtRGVsZXRlTW9kYWwnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgJy4vdmlldy5jc3MnXHJcbmltcG9ydCAnLi9QYWdlVmlldy9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNpZGVNYWludGVuYW5jZSBmcm9tICcuLi9jb21wb25lbnQvU2lkZU1haW50ZW5hbmNlJ1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBWaXNpYmlsaXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHknO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0JztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBUYWJsZSwgSWNvbkJ1dHRvbiwgc3R5bGVkLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVIZWFkLCBUYWJsZVJvdywgQ2hlY2tib3gsIFRhYmxlQ29udGFpbmVyLCBQYXBlciwgVHlwb2dyYXBoeSwgTW9kYWwsIEJveCwgR3JpZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgTWVudUl0ZW0sIEJhY2tkcm9wLCBBdXRvY29tcGxldGUsIFRleHRGaWVsZCwgQ29sbGFwc2UsIFBhZ2luYXRpb24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNhY2hlIH0gZnJvbSAnLi4vdXRpbHMvYXBpQ2FjaGUnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRUb29sYmFyIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBBZGQsIENsb3NlIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgSW1hZ2UxIGZyb20gJy4uL2ltZy9pbWFnZXMucG5nJ1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcbmltcG9ydCB7IHVzZVJlYWN0VG9QcmludCB9IGZyb20gJ3JlYWN0LXRvLXByaW50JztcclxuaW1wb3J0IFByaW50SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudC9QcmludEhlYWRlcic7XHJcbmltcG9ydCBQcmludEZvb3RlciBmcm9tICcuLi9jb21wb25lbnQvUHJpbnRGb290ZXInO1xyXG5pbXBvcnQgTG9jYWxQcmludHNob3AgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2NhbFByaW50c2hvcCc7XHJcbmltcG9ydCBWaXNpYmlsaXR5T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVmlzaWJpbGl0eU91dGxpbmVkJztcclxuXHJcbmNvbnN0IERlbGV0ZVRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBFZGl0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuXHJcbmZ1bmN0aW9uIEl0ZW1QdXJjaGFzZVZpZXdBZG1pbigpIHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIGNvbnN0IGhhc1R2YVZhbHVlID0gKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiAhIShpdGVtLkNoZWNrVHZBIHx8IGl0ZW0uY2hlY2tUdkEgfHwgaXRlbS5DaGVja1R2YSB8fCBpdGVtLmhhc1RWQSB8fCBpdGVtLnR2YSB8fCBpdGVtLlRWQSk7XHJcbiAgfTtcclxuICBjb25zdCBnZXRUYXhWYWx1ZSA9IChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCB0YXggPSBpdGVtLnRheCB8fCBpdGVtLnRheEFtb3VudCB8fCBpdGVtLnZhdEFtb3VudCB8fCBpdGVtLlR2YUFtb3VudCB8fCBpdGVtLnRheFVTRCB8fCAwO1xyXG4gICAgaWYgKHRheCA+IDApIHJldHVybiB0YXg7XHJcbiAgICBpZiAoaGFzVHZhVmFsdWUoaXRlbSkpIHtcclxuICAgICAgcmV0dXJuIChOdW1iZXIoaXRlbS50b3RhbFVTRCB8fCBpdGVtLnRvdGFsIHx8IGl0ZW0uYW1vdW50IHx8IDApICogMC4xNik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlLCBpZDogcmVzLmRhdGEuZGF0YS5faWQgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcblxyXG4gIGNvbnN0IFtncmFudEFjY2Vzcywgc2V0R3JhbnRBY2Nlc3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ncmFudEFjY2Vzc2ApO1xyXG4gICAgICAgIHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnVzZXJJRCA9PT0gdXNlci5kYXRhLmlkKVxyXG4gICAgICAgICAgLm1hcCgocm93KSA9PiBzZXRHcmFudEFjY2Vzcyhyb3cubW9kdWxlcykpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoTnVtYmVyKClcclxuICB9LCBbdXNlcl0pXHJcblxyXG4gIGNvbnN0IFB1cmNoYXNlSW5mb0MgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiSXRlbS1QdXJjaGFzZVwiICYmIHJvdy5hY2Nlc3MuY3JlYXRlTSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgUHVyY2hhc2VJbmZvViA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJJdGVtLVB1cmNoYXNlXCIgJiYgcm93LmFjY2Vzcy52aWV3TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgUHVyY2hhc2VJbmZvVSA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJJdGVtLVB1cmNoYXNlXCIgJiYgcm93LmFjY2Vzcy5lZGl0TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgUHVyY2hhc2VJbmZvRCA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJJdGVtLVB1cmNoYXNlXCIgJiYgcm93LmFjY2Vzcy5kZWxldGVNID09PSB0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgW2l0ZW1QdXJjaGFzZSwgc2V0SXRlbVB1cmNoYXNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbmV3UHVyY2hhc2UsIHNldE5ld1B1cmNoYXNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFJvd3MsIHNldFNlbGVjdGVkUm93c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIC0tLSBQYXJ0aWFsIFBheW1lbnQgU3RhdGVzIC0tLVxyXG4gIGNvbnN0IFtvcGVuQWRkUGF5bWVudCwgc2V0T3BlbkFkZFBheW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuUGF5bWVudEhpc3RvcnksIHNldE9wZW5QYXltZW50SGlzdG9yeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUHVyY2hhc2UsIHNldFNlbGVjdGVkUHVyY2hhc2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BheW1lbnRGb3JtLCBzZXRQYXltZW50Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBhbW91bnQ6ICcnLFxyXG4gICAgYW1vdW50RkM6ICcnLFxyXG4gICAgcmF0ZTogJycsXHJcbiAgICBkYXRlOiBkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxyXG4gICAgbW9kZTogJ0Nhc2gnLFxyXG4gICAgcmVmZXJlbmNlOiAnJyxcclxuICAgIG5vdGU6ICcnXHJcbiAgfSk7XHJcbiAgY29uc3QgW2V4cGVuc2VOdW1iZXIsIHNldEV4cGVuc2VOdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzeXN0ZW1SYXRlLCBzZXRTeXN0ZW1SYXRlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTsgXHJcbiAgY29uc3QgbGltaXQgPSAxMDA7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpOyBcclxuICBjb25zdCBbZmlsdGVyRmllbGQsIHNldEZpbHRlckZpZWxkXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgY29uc3QgW2ZpbHRlclZhbHVlLCBzZXRGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7IFxyXG4gIGNvbnN0IFt0b3RhbFBhZ2UsIFNldFRvdGFsUGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hJdGVtcyA9IGFzeW5jIChwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1QdXJjaGFzZS1JbmZvcm1hdGlvbj9wYWdlPSR7cGFnZSArIDF9JmxpbWl0PSR7bGltaXR9JnNlYXJjaD0ke2VuY29kZVVSSUNvbXBvbmVudChzZWFyY2hUZXJtLnRyaW0oKSl9JmZpbHRlckZpZWxkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZpbHRlckZpZWxkLnRyaW0oKSl9JmZpbHRlclZhbHVlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZpbHRlclZhbHVlLnRyaW0oKSl9YCk7XHJcbiAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSByZXMuZGF0YS5pdGVtSS5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICBpZDogaXRlbS5faWQsXHJcbiAgICAgICAgZGF0YUZpZWxkOiBkYXlqcyhpdGVtLml0ZW1QdXJjaGFzZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpLFxyXG4gICAgICAgIEFjY291bnQ6IGl0ZW0ucHJvamVjdE5hbWUgIT09IHVuZGVmaW5lZCA/IGl0ZW0ucHJvamVjdE5hbWUubmFtZSA6IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcmVmZXJlbmNlSW5mbzogaXRlbS5tYW51ZmFjdHVyZXIgKyAnIC8gJyArIGl0ZW0ubWFudWZhY3R1cmVyTnVtYmVyLFxyXG4gICAgICAgIGl0ZW1JbmZvOiAoaXRlbS5pdGVtcyB8fCBbXSkuZmlsdGVyKHJvdyA9PiBwYXJzZUZsb2F0KHJvdy5pdGVtUXR5KSA+IDAgfHwgcm93Lm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpLm1hcCgocm93KSA9PiByb3cuaXRlbU5hbWU/Lml0ZW1OYW1lIHx8IHJvdy5uZXdEZXNjcmlwdGlvbiB8fCAnJyksXHJcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uSW5mbzogKGl0ZW0uaXRlbXMgfHwgW10pLmZpbHRlcihyb3cgPT4gcGFyc2VGbG9hdChyb3cuaXRlbVF0eSkgPiAwIHx8IHJvdy5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKS5tYXAoKHJvdykgPT4gcm93Lml0ZW1EZXNjcmlwdGlvbiB8fCAnJylcclxuICAgICAgfSkpO1xyXG4gICAgICBTZXRUb3RhbFBhZ2UoTWF0aC5jZWlsKHJlcy5kYXRhLnRvdGFsSXRlbSAvIGxpbWl0KSk7IFxyXG4gICAgICBzZXRJdGVtUHVyY2hhc2UoZm9ybWF0RGF0ZSk7XHJcbiAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVmcmVzaFNlYXJjaCA9ICgpID0+IHtcclxuICAgIGZldGNoSXRlbXMocGFnZSwgc2VhcmNoVGVybSwgZmlsdGVyRmllbGQsIGZpbHRlclZhbHVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hJdGVtcyhwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpO1xyXG4gIH0sIFtwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWVdKTtcclxuXHJcbiAgLy8gRmV0Y2ggZXhwZW5zZSBjYXRlZ29yaWVzIGFuZCBsYXN0IGV4cGVuc2UgbnVtYmVyIGZvciBpbnRlZ3JhdGlvblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEV4cGVuc2VJbmZvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNhdFJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2V4cGVuc2VzQ2F0ZWdvcnlgKTtcclxuICAgICAgICBzZXRDYXRlZ29yaWVzKGNhdFJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxhc3RFeHBSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbGFzdC1zYXZlZC1leHBlbnNlYCk7XHJcbiAgICAgICAgc2V0RXhwZW5zZU51bWJlcihwYXJzZUludChsYXN0RXhwUmVzLmRhdGE/LmV4cGVuc2VOdW1iZXIgfHwgMCkgKyAxKTtcclxuXHJcbiAgICAgICAgLy8gRmV0Y2ggY3VycmVudCBleGNoYW5nZSByYXRlXHJcbiAgICAgICAgY29uc3QgcmF0ZVJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3JhdGVgKTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyYXRlUmVzPy5kYXRhPy5kYXRhKSAmJiByYXRlUmVzLmRhdGEuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBzZXRTeXN0ZW1SYXRlKHJhdGVSZXMuZGF0YT8uZGF0YT8uWzBdPy5yYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWRkaXRpb25hbCBpbmZvOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRXhwZW5zZUluZm8oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAoZXZlbnQsIG5ld1BhZ2UpID0+IHtcclxuICAgIHNldFBhZ2UobmV3UGFnZSAtIDEpOyBcclxuICB9O1xyXG5cclxuICBjb25zdCBbZmlsdGVyTW9kZWwsIHNldEZpbHRlck1vZGVsXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIHF1aWNrRmlsdGVyRXhjbHVkZUhpZGRlbkNvbHVtbnM6IHRydWUsXHJcbiAgICBxdWlja0ZpbHRlclZhbHVlczogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgW2NvbHVtblZpc2liaWxpdHlNb2RlbCwgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBoYW5kZWxIaWRkZW5Db2x1bW4gPSAobmV3SGlkZGVuKSA9PiB7XHJcbiAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwobmV3SGlkZGVuKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0hpZGRlbkNvbHVtbnNJdGVtUHVyY2hhc2UnLCBKU09OLnN0cmluZ2lmeShuZXdIaWRkZW4pKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVGaWx0ZXIgPSAobmV3TW9kZWwpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBuZXdNb2RlbC5xdWlja0ZpbHRlclZhbHVlcz8uam9pbignICcpIHx8ICcnO1xyXG4gICAgc2V0U2VhcmNoVGVybShzZWFyY2hUZXJtKTtcclxuICAgIHNldEZpbHRlck1vZGVsKG5ld01vZGVsKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1F1aWNrRmlsdGVySXRlbVB1cmNoYXNlVHN0JywgSlNPTi5zdHJpbmdpZnkobmV3TW9kZWwpKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkUXVpY2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlckl0ZW1QdXJjaGFzZVRzdCcpKVxyXG4gICAgaWYgKHN0b3JlZFF1aWNrKSB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBzdG9yZWRRdWljay5xdWlja0ZpbHRlclZhbHVlcz8uam9pbignICcpIHx8ICcnO1xyXG4gICAgICBzZXRTZWFyY2hUZXJtKHNlYXJjaFRlcm0pO1xyXG4gICAgICBzZXRGaWx0ZXJNb2RlbChzdG9yZWRRdWljaylcclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3JlZENvbHVtbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdIaWRkZW5Db2x1bW5zSXRlbVB1cmNoYXNlJykpXHJcbiAgICBpZiAoc3RvcmVkQ29sdW1ucykge1xyXG4gICAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwoc3RvcmVkQ29sdW1ucylcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgW29wZW5WaWV3LCBzZXRPcGVuVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lkVmlldywgc2V0SWRWaWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpdGVtUHVyY2hhc2VWaWV3LCBzZXRJdGVtUHVyY2hhc2VWaWV3XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2l0ZW0sIFNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuVmlldyA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3BlblZpZXcodHJ1ZSk7XHJcbiAgICBzZXRJZFZpZXcoaWQpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVmlldyA9ICgpID0+IHtcclxuICAgIHNldE9wZW5WaWV3KGZhbHNlKTtcclxuICAgIHNldElkVmlldyhudWxsKTtcclxuICAgIHNldEl0ZW1QdXJjaGFzZVZpZXcobnVsbCk7XHJcbiAgICBzZXRTZWxlY3RlZFJvd3MoW10pO1xyXG4gIH07XHJcbiAgY29uc3QgW29wZW5SZWFzb25EZWxldGUsIHNldE9wZW5SZWFzb25EZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuUmVhc29uRGVsZXRlID0gKGUpID0+IHtcclxuICAgIGlmIChlICYmIGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlblJlYXNvbkRlbGV0ZSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlUmVhc29uRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlblJlYXNvbkRlbGV0ZShmYWxzZSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhMiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKGlkVmlldyAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbVB1cmNoYXNlLyR7aWRWaWV3fWApXHJcbiAgICAgICAgICBzZXRJdGVtUHVyY2hhc2VWaWV3KHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgICBjb25zdCByZXNJdGVtID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbS1JbmZvcm1hdGlvbj9zdW1tYXJ5PXRydWUmbGltaXQ9MTAwMGApXHJcbiAgICAgICAgICBTZXRJdGVtcyhyZXNJdGVtLmRhdGEuaXRlbUkpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhMigpXHJcbiAgfSwgW2lkVmlld10pXHJcblxyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRGVsZXRlSWQsIHNldERlbGV0ZUlkXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICBzZXREZWxldGVJZChpZClcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBzZXRTZWxlY3RlZFJvd3MoW10pXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3Byb2plY3ROYW1lLCBzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcmVhc29uMSwgc2V0UmVhc29uMV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVsYXRlZE51bWJlciwgc2V0UmVsYXRlZE51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcHVyQ2hhc2VPcmRlcklkLCBzZXRQdXJjaGFzZU9yZGVySWRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hJZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKERlbGV0ZUlkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtUHVyY2hhc2UvJHtEZWxldGVJZH1gKVxyXG4gICAgICAgICAgaWYgKHJlcz8uZGF0YT8uZGF0YSkge1xyXG4gICAgICAgICAgICBzZXRQcm9qZWN0TmFtZShyZXMuZGF0YS5kYXRhLnByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgc2V0SXRlbXMocmVzLmRhdGEuZGF0YS5pdGVtcyk7XHJcbiAgICAgICAgICAgIHNldFJlYXNvbihyZXMuZGF0YS5kYXRhLnJlYXNvbilcclxuICAgICAgICAgICAgc2V0UmVsYXRlZE51bWJlcihOdW1iZXIocmVzLmRhdGE/LmRhdGE/Lml0ZW1QdXJjaGFzZU51bWJlciB8fCByZXMuZGF0YT8uaXRlbVB1cmNoYXNlTnVtYmVyIHx8IDApKTtcclxuICAgICAgICAgICAgc2V0UHVyY2hhc2VPcmRlcklkKHJlcy5kYXRhLmRhdGEuUE9JRClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaElkKClcclxuICB9LCBbRGVsZXRlSWRdKVxyXG5cclxuICBjb25zdCBbcHVyY2hhc2UsIHNldFB1cmNoYXNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbWFpbnRlbmFuY2UsIHNldE1haW50ZW5hbmNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW52b2ljZSwgc2V0SW52b2ljZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YTIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHByb2plY3ROYW1lICYmIHByb2plY3ROYW1lLl9pZCkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcHVyY2hhc2U/c3VtbWFyeT10cnVlYClcclxuICAgICAgICAgIHNldFB1cmNoYXNlKHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnByb2plY3ROYW1lPy5faWQgPT09IHByb2plY3ROYW1lLl9pZCkpO1xyXG4gICAgICAgICAgY29uc3QgcmVzTWFpbnRlbmFuY2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9tYWludGVuYW5jZT9zdW1tYXJ5PXRydWVgKVxyXG4gICAgICAgICAgc2V0TWFpbnRlbmFuY2UocmVzTWFpbnRlbmFuY2UuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5faWQgPT09IHByb2plY3ROYW1lLl9pZCkpO1xyXG4gICAgICAgICAgY29uc3QgcmVzSW52b2ljZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2ludm9pY2U/c3VtbWFyeT10cnVlYClcclxuICAgICAgICAgIHNldEludm9pY2UocmVzSW52b2ljZS5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93Ll9pZCA9PT0gcHJvamVjdE5hbWUuX2lkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHJlbGF0ZWQgbW9kdWxlcycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEyKClcclxuICB9LCBbcHJvamVjdE5hbWVdKVxyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGVQdXJjaGFzZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghcHJvamVjdE5hbWU/Ll9pZCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAocmVhc29uID09PSAnUHJvamVjdCcpIHtcclxuICAgICAgICBjb25zdCByZXNQdXIgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wdXJjaGFzZT9zdW1tYXJ5PXRydWVgKTtcclxuICAgICAgICBjb25zdCByZWxldmFudFB1cmNoYXNlcyA9IHJlc1B1ci5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnByb2plY3ROYW1lPy5faWQgPT09IHByb2plY3ROYW1lLl9pZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChjb25zdCBwdXJjaGFzZVJvdyBvZiByZWxldmFudFB1cmNoYXNlcykge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudFJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1wdXJjaGFzZS8ke3B1cmNoYXNlUm93Ll9pZH1gKTtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gY3VycmVudFJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtcyA9IGN1cnJlbnREYXRhLml0ZW1zLm1hcCgoSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBSZWxhdGVkSXRlbSA9IGl0ZW1zLmZpbmQoKEl0ZW0yKSA9PiAoSXRlbS5pdGVtTmFtZT8uX2lkICE9PSB1bmRlZmluZWQgJiYgSXRlbS5pdGVtTmFtZT8uX2lkID09PSBJdGVtMi5pdGVtTmFtZT8uX2lkKSB8fCAoSXRlbTIuaXRlbURlc2NyaXB0aW9uID09PSBJdGVtLml0ZW1EZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICBpZiAoUmVsYXRlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICBjb25zdCBpdGVtQnV5ID0gcGFyc2VGbG9hdChJdGVtLml0ZW1CdXkgfHwgMCkgLSBwYXJzZUZsb2F0KFJlbGF0ZWRJdGVtLml0ZW1RdHkgfHwgMCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgdG90YWxHZW5lcmFsZSA9IChwYXJzZUZsb2F0KEl0ZW0uaXRlbUNvc3QpIHx8IDApICogaXRlbUJ1eTtcclxuICAgICAgICAgICAgICByZXR1cm4geyAuLi5JdGVtLCBpdGVtQnV5LCB0b3RhbEdlbmVyYWxlIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIEl0ZW07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgcHVyY2hhc2VBbW91bnQyID0gdXBkYXRlZEl0ZW1zLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIChwYXJzZUZsb2F0KHJvdy50b3RhbEdlbmVyYWxlKSB8fCAwKSwgMCk7XHJcbiAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtcHVyY2hhc2UvJHtwdXJjaGFzZVJvdy5faWR9YCwgeyBpdGVtczogdXBkYXRlZEl0ZW1zLCBwdXJjaGFzZUFtb3VudDIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHJlYXNvbiA9PT0gJ01haW50ZW5hbmNlJykge1xyXG4gICAgICAgIGNvbnN0IHJlc00gPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9tYWludGVuYW5jZT9zdW1tYXJ5PXRydWVgKTtcclxuICAgICAgICBjb25zdCByZWxldmFudE1haW50ZW5hbmNlID0gcmVzTS5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93Ll9pZCA9PT0gcHJvamVjdE5hbWUuX2lkKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IG1haW50ZW5hbmNlUm93IG9mIHJlbGV2YW50TWFpbnRlbmFuY2UpIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbWFpbnRlbmFuY2UvJHttYWludGVuYW5jZVJvdy5faWR9YCk7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50RGF0YSA9IGN1cnJlbnRSZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVkSXRlbXMgPSBjdXJyZW50RGF0YS5pdGVtcy5tYXAoKEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgUmVsYXRlZEl0ZW0gPSBpdGVtcy5maW5kKChJdGVtMikgPT4gKEl0ZW0uaXRlbU5hbWU/Ll9pZCAhPT0gdW5kZWZpbmVkICYmIEl0ZW0uaXRlbU5hbWU/Ll9pZCA9PT0gSXRlbTIuaXRlbU5hbWU/Ll9pZCkgfHwgKEl0ZW0yLml0ZW1EZXNjcmlwdGlvbiA9PT0gSXRlbS5pdGVtRGVzY3JpcHRpb24pKTtcclxuICAgICAgICAgICAgaWYgKFJlbGF0ZWRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaXRlbUJ1eSA9IHBhcnNlRmxvYXQoSXRlbS5pdGVtQnV5IHx8IDApIC0gcGFyc2VGbG9hdChSZWxhdGVkSXRlbS5pdGVtUXR5IHx8IDApO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRvdGFsR2VuZXJhbGUgPSAocGFyc2VGbG9hdChJdGVtLml0ZW1Db3N0KSB8fCAwKSAqIGl0ZW1CdXk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uSXRlbSwgaXRlbUJ1eSwgdG90YWxHZW5lcmFsZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBJdGVtO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1tYWludGVuYW5jZS8ke21haW50ZW5hbmNlUm93Ll9pZH1gLCB7IGl0ZW1zOiB1cGRhdGVkSXRlbXMgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHJlYXNvbiA9PT0gJ0ludm9pY2UnKSB7XHJcbiAgICAgICAgY29uc3QgcmVzSSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2ludm9pY2U/c3VtbWFyeT10cnVlYCk7XHJcbiAgICAgICAgY29uc3QgcmVsZXZhbnRJbnZvaWNlcyA9IHJlc0kuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5faWQgPT09IHByb2plY3ROYW1lLl9pZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChjb25zdCBpbnZvaWNlUm93IG9mIHJlbGV2YW50SW52b2ljZXMpIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaW52b2ljZS8ke2ludm9pY2VSb3cuX2lkfWApO1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudERhdGEgPSBjdXJyZW50UmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1zID0gY3VycmVudERhdGEuaXRlbXMubWFwKChJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFJlbGF0ZWRJdGVtID0gaXRlbXMuZmluZCgoSXRlbTIpID0+IChJdGVtLml0ZW1OYW1lPy5faWQgIT09IHVuZGVmaW5lZCAmJiBJdGVtLml0ZW1OYW1lPy5faWQgPT09IEl0ZW0yLml0ZW1OYW1lPy5faWQpIHx8IChJdGVtMi5pdGVtRGVzY3JpcHRpb24gPT09IEl0ZW0uaXRlbURlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgICAgIGlmIChSZWxhdGVkSXRlbSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW1CdXkgPSBwYXJzZUZsb2F0KEl0ZW0uaXRlbUJ1eSB8fCAwKSAtIHBhcnNlRmxvYXQoUmVsYXRlZEl0ZW0uaXRlbVF0eSB8fCAwKTtcclxuICAgICAgICAgICAgICBjb25zdCB0b3RhbEdlbmVyYWxlID0gKHBhcnNlRmxvYXQoSXRlbS5pdGVtQ29zdCkgfHwgMCkgKiBpdGVtQnV5O1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLkl0ZW0sIGl0ZW1CdXksIHRvdGFsR2VuZXJhbGUgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gSXRlbTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtaW52b2ljZS8ke2ludm9pY2VSb3cuX2lkfWAsIHsgaXRlbXM6IHVwZGF0ZWRJdGVtcyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7IFxyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBoYW5kbGVVcGRhdGVQdXJjaGFzZSAoRGVsZXRpb24gU2FmZSBNZXJnZSk6JywgZXJyb3IpOyBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxEZWxldGVPcGVuTG9hZGluZywgc2V0TW9kYWxEZWxldGVPcGVuTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZU9wZW5Mb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxEZWxldGVPcGVuTG9hZGluZyh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHNldExvYWRpbmcoZmFsc2UpOyB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsb3NlTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsRGVsZXRlT3BlbkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmcoKTsgLy8gUGVybWFuZW50bHkgZGlzYWJsZWQgZm9yIGluc3RhbnQgcmVzcG9uc2l2ZW5lc3NcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7IHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBEZWxldGVkIElQLScgKyByZWxhdGVkTnVtYmVyLCByZWFzb246IHJlYXNvbjEsIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKCkgfVxyXG4gICAgdHJ5IHsgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKSB9IGNhdGNoIChlcnJvcikgeyBjb25zb2xlLmxvZyhlcnJvcikgfVxyXG4gIH1cclxuICBjb25zdCBvblN0YXR1c1VwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChwdXJDaGFzZU9yZGVySWQgJiYgcHVyQ2hhc2VPcmRlcklkICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHRyeSB7IGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1wdXJjaGFzZU9yZGVyLyR7cHVyQ2hhc2VPcmRlcklkfWAsIHsgQ29udmVydGVkOiBmYWxzZSwgSXBSZWxhdGVkOiB7fSB9KTsgfSBjYXRjaCAoZXJyb3IpIHsgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVRdHkgPSBhc3luYyAoKSA9PiB7IHRyeSB7IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9DYWxjdWxhdGVUb3RhbGApIH0gY2F0Y2ggKGVycm9yKSB7IH0gfVxyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVVcGRhdGUgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBTd2l0Y2hlZCB0byBQT1NUIGFuZCBzZW5kaW5nIElEIGluIGJvZHkgdG8gbWF0Y2ggbmV3IGJhY2tlbmQgcGF0dGVyblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLWl0ZW1QdXJjaGFzZWAsIHsgaWQ6IERlbGV0ZUlkIH0pO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgLy8gT3B0aW1pc3RpYyBVSTogUmVtb3ZlIHRoZSBkZWxldGVkIHJvdyBmcm9tIHN0YXRlIGluc3RhbnRseSAoQkVGT1JFIGxvbmctcnVubmluZyBiYWNrZ3JvdW5kIHRhc2tzKVxyXG4gICAgICAgIHNldEl0ZW1QdXJjaGFzZShwcmV2ID0+IHByZXYuZmlsdGVyKGl0ZW0gPT4gaXRlbS5faWQgIT09IERlbGV0ZUlkKSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRSb3dzKHByZXYgPT4gcHJldi5maWx0ZXIoaWQgPT4gaWQgIT09IERlbGV0ZUlkKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gVGhlc2UgdGFza3MgdXBkYXRlIHNlY29uZGFyeSBzdGF0ZSBvciB0cmlnZ2VyIGNhbGN1bGF0aW9ucyBpbiBiYWNrZ3JvdW5kXHJcbiAgICAgICAgYXdhaXQgb25TdGF0dXNVcGRhdGUoKTtcclxuICAgICAgICBhd2FpdCBoYW5kbGVRdHkoKTtcclxuICAgICAgICBhd2FpdCBoYW5kbGVVcGRhdGVQdXJjaGFzZSgpO1xyXG4gICAgICAgIGF3YWl0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBpdGVtIHB1cmNoYXNlOicsIGVycm9yKTtcclxuICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBkZWxldGUgaXRlbSBwdXJjaGFzZS4gUGxlYXNlIGNoZWNrIHRoZSBjb25zb2xlIGZvciBkZXRhaWxzLicpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFt1cGRhdGVTLCBzZXRVcGRhdGVTXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkFkZFBheW1lbnQgPSAocHVyY2hhc2UpID0+IHtcclxuICAgIHNldFNlbGVjdGVkUHVyY2hhc2UocHVyY2hhc2UpO1xyXG4gICAgY29uc3QgdG90YWxXaXRoVGF4ID0gcGFyc2VGbG9hdChwdXJjaGFzZS50b3RhbFVTRCB8fCBwdXJjaGFzZS50b3RhbCB8fCAwKTtcclxuICAgIFxyXG4gICAgLy8gQ2FsY3VsYXRlIGN1cnJlbnQgdG90YWwgcGFpZCBpbiBVU0QgKGluY2x1ZGluZyBjb252ZXJ0ZWQgRkMgcGF5bWVudHMpXHJcbiAgICBjb25zdCBjdXJyZW50UGFpZFVTRCA9IChwdXJjaGFzZS5wYXltZW50cyB8fCBbXSkucmVkdWNlKChzdW0sIHApID0+IHtcclxuICAgICAgY29uc3QgcFVTRCA9IHBhcnNlRmxvYXQocC5hbW91bnQgfHwgMCk7XHJcbiAgICAgIGNvbnN0IHBGQyA9IHBhcnNlRmxvYXQocC5hbW91bnRGQyB8fCAwKTtcclxuICAgICAgY29uc3QgcFJhdGUgPSBwYXJzZUZsb2F0KHAucmF0ZSB8fCBzeXN0ZW1SYXRlIHx8IDEpO1xyXG4gICAgICByZXR1cm4gc3VtICsgcFVTRCArIChwRkMgLyBwUmF0ZSk7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICBjb25zdCByZW1haW5pbmcgPSBNYXRoLm1heCgwLCB0b3RhbFdpdGhUYXggLSBjdXJyZW50UGFpZFVTRCk7XHJcbiAgICBcclxuICAgIHNldFBheW1lbnRGb3JtKHtcclxuICAgICAgYW1vdW50OiByZW1haW5pbmcudG9GaXhlZCgyKSxcclxuICAgICAgYW1vdW50RkM6ICcwJyxcclxuICAgICAgcmF0ZTogc3lzdGVtUmF0ZS50b1N0cmluZygpLFxyXG4gICAgICBkYXRlOiBkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxyXG4gICAgICBtb2RlOiAnQ2FzaCcsXHJcbiAgICAgIHJlZmVyZW5jZTogYFBheW1lbnQgZm9yIElQLSR7cHVyY2hhc2UuaXRlbVB1cmNoYXNlTnVtYmVyfWAsXHJcbiAgICAgIG5vdGU6ICcnXHJcbiAgICB9KTtcclxuICAgIHNldE9wZW5BZGRQYXltZW50KHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5QYXltZW50SGlzdG9yeSA9IGFzeW5jIChwdXJjaGFzZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRQdXJjaGFzZShwdXJjaGFzZSk7XHJcbiAgICBzZXRPcGVuUGF5bWVudEhpc3RvcnkodHJ1ZSk7XHJcbiAgICAvLyBGZXRjaCBmdWxsIHJlY29yZCB0byBnZXQgcGF5bWVudHNbXSB3aGljaCBwYWdpbmF0ZWQgZW5kcG9pbnQgbWF5IG9taXRcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtUHVyY2hhc2UvJHtwdXJjaGFzZS5faWR9YCk7XHJcbiAgICAgIGNvbnN0IGZ1bGxEYXRhID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgc2V0U2VsZWN0ZWRQdXJjaGFzZShwcmV2ID0+ICh7IC4uLnByZXYsIC4uLmZ1bGxEYXRhLCBpZDogcHJldi5pZCB9KSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vIGtlZXAgb3JpZ2luYWwgZGF0YSBpZiBmZXRjaCBmYWlsc1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVQYXltZW50ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghc2VsZWN0ZWRQdXJjaGFzZSkgcmV0dXJuO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBhbW91bnRVU0QgPSBwYXJzZUZsb2F0KHBheW1lbnRGb3JtLmFtb3VudCB8fCAwKTtcclxuICAgIGNvbnN0IGFtb3VudEZDID0gcGFyc2VGbG9hdChwYXltZW50Rm9ybS5hbW91bnRGQyB8fCAwKTtcclxuICAgIGNvbnN0IHJhdGUgPSBwYXJzZUZsb2F0KHBheW1lbnRGb3JtLnJhdGUgfHwgc3lzdGVtUmF0ZSB8fCAxKTtcclxuICAgIFxyXG4gICAgLy8gVG90YWwgdmFsdWUgb2YgVEhJUyBwYXltZW50IGluIFVTRFxyXG4gICAgY29uc3QgdGhpc1BheW1lbnRUb3RhbFVTRCA9IGFtb3VudFVTRCArIChhbW91bnRGQyAvIHJhdGUpO1xyXG5cclxuICAgIGNvbnN0IG5ld1BheW1lbnQgPSB7XHJcbiAgICAgIC4uLnBheW1lbnRGb3JtLFxyXG4gICAgICByZWZlcmVuY2U6IHBheW1lbnRGb3JtLm5vdGUgPyAocGF5bWVudEZvcm0ucmVmZXJlbmNlID8gYCR7cGF5bWVudEZvcm0ucmVmZXJlbmNlfSB8IE5vdGU6ICR7cGF5bWVudEZvcm0ubm90ZX1gIDogYE5vdGU6ICR7cGF5bWVudEZvcm0ubm90ZX1gKSA6IHBheW1lbnRGb3JtLnJlZmVyZW5jZSxcclxuICAgICAgaWQ6IHY0KCksXHJcbiAgICAgIGFtb3VudDogYW1vdW50VVNELFxyXG4gICAgICBhbW91bnRGQzogYW1vdW50RkMsXHJcbiAgICAgIHJhdGU6IHJhdGUsXHJcbiAgICAgIHRvdGFsVVNEOiB0aGlzUGF5bWVudFRvdGFsVVNEIC8vIFN0b3JlIHRoZSBjb252ZXJ0ZWQgdG90YWwgZm9yIGVhc3kgY2FsY3VsYXRpb25cclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gRmV0Y2ggbGF0ZXN0IEl0ZW0gUHVyY2hhc2UgdG8gYXZvaWQgb3ZlcndyaXRpbmcgY29uY3VycmVudCBwYXltZW50c1xyXG4gICAgICBjb25zdCBjdXJyZW50SVBSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbVB1cmNoYXNlLyR7c2VsZWN0ZWRQdXJjaGFzZS5faWR9YCk7XHJcbiAgICAgIGNvbnN0IGxhdGVzdElQRGF0YSA9IGN1cnJlbnRJUFJlcy5kYXRhLmRhdGE7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCB1cGRhdGVkUGF5bWVudHMgPSBbLi4uKGxhdGVzdElQRGF0YS5wYXltZW50cyB8fCBbXSksIG5ld1BheW1lbnRdO1xyXG4gICAgICBjb25zdCB0b3RhbFdpdGhUYXggPSBwYXJzZUZsb2F0KGxhdGVzdElQRGF0YS50b3RhbFVTRCB8fCBsYXRlc3RJUERhdGEudG90YWwgfHwgMCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDYWxjdWxhdGUgY3VycmVudCB0b3RhbCBwYWlkIEJFRk9SRSB0aGlzIG5ldyBwYXltZW50XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRQYWlkVVNEID0gKGxhdGVzdElQRGF0YS5wYXltZW50cyB8fCBbXSkucmVkdWNlKChzdW0sIHApID0+IHtcclxuICAgICAgICBpZiAocC50b3RhbFVTRCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gc3VtICsgcC50b3RhbFVTRDtcclxuICAgICAgICByZXR1cm4gc3VtICsgKHBhcnNlRmxvYXQocC5hbW91bnQgfHwgMCkgKyAocGFyc2VGbG9hdChwLmFtb3VudEZDIHx8IDApIC8gcGFyc2VGbG9hdChwLnJhdGUgfHwgc3lzdGVtUmF0ZSB8fCAxKSkpO1xyXG4gICAgICB9LCAwKTtcclxuXHJcbiAgICAgIC8vIFZBTElEQVRJT046IFByZXZlbnQgcGF5bWVudCBmcm9tIGV4Y2VlZGluZyB0b3RhbCBhbW91bnQgKGFsbG93ICQwLjA1IGZsb2F0IHRvbGVyYW5jZSlcclxuICAgICAgaWYgKGN1cnJlbnRQYWlkVVNEICsgdGhpc1BheW1lbnRUb3RhbFVTRCA+IHRvdGFsV2l0aFRheCArIDAuMDUpIHtcclxuICAgICAgICBhbGVydChcIkVycm9yOiBQYXltZW50IGFtb3VudCBjYW5ub3QgZXhjZWVkIHRoZSByZW1haW5pbmcgYmFsYW5jZSBvZiB0aGlzIEl0ZW0gUHVyY2hhc2UuXCIpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gUmVjYWxjdWxhdGUgdG90YWwgcGFpZCBhY3Jvc3MgQUxMIHBheW1lbnRzIHVzaW5nIGxhdGVzdCBkYXRhXHJcbiAgICAgIGNvbnN0IHRvdGFsUGFpZFVTRCA9IHVwZGF0ZWRQYXltZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4ge1xyXG4gICAgICAgIGlmIChwLnRvdGFsVVNEICE9PSB1bmRlZmluZWQpIHJldHVybiBzdW0gKyBwLnRvdGFsVVNEO1xyXG4gICAgICAgIHJldHVybiBzdW0gKyAocGFyc2VGbG9hdChwLmFtb3VudCB8fCAwKSArIChwYXJzZUZsb2F0KHAuYW1vdW50RkMgfHwgMCkgLyBwYXJzZUZsb2F0KHAucmF0ZSB8fCBzeXN0ZW1SYXRlIHx8IDEpKSk7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgICBcclxuICAgICAgbGV0IG5ld1N0YXR1cyA9ICdVblBhaWQnO1xyXG4gICAgICBpZiAodG90YWxQYWlkVVNEID49IHRvdGFsV2l0aFRheCAtIDAuMDEpIG5ld1N0YXR1cyA9ICdQYWlkJztcclxuICAgICAgZWxzZSBpZiAodG90YWxQYWlkVVNEID4gMCkgbmV3U3RhdHVzID0gJ1BhcnRpYWxseS1QYWlkJztcclxuXHJcbiAgICAgIC8vIDEuIFVwZGF0ZSBJdGVtIFB1cmNoYXNlXHJcbiAgICAgIGNvbnN0IHsgX2lkLCAuLi5yZXN0RGF0YSB9ID0gbGF0ZXN0SVBEYXRhO1xyXG4gICAgICBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtaXRlbVB1cmNoYXNlLyR7c2VsZWN0ZWRQdXJjaGFzZS5faWR9YCwge1xyXG4gICAgICAgIC4uLnJlc3REYXRhLFxyXG4gICAgICAgIHBheW1lbnRzOiB1cGRhdGVkUGF5bWVudHMsXHJcbiAgICAgICAgc3RhdHVzOiBuZXdTdGF0dXNcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBDbGVhciBjYWNoZSBzbyBFeHBlbnNlcyBEYWlseSBJbmZvcm1hdGlvbiB3aWxsIGZldGNoIGZyZXNoIGRhdGFcclxuICAgICAgaW52YWxpZGF0ZUNhY2hlKCcvaXRlbVB1cmNoYXNlJyk7XHJcblxyXG4gICAgICAvLyAyLiBVcGRhdGUgTG9jYWwgU3RhdGVcclxuICAgICAgc2V0SXRlbVB1cmNoYXNlKHByZXYgPT4gcHJldi5tYXAoaXRlbSA9PiBpdGVtLl9pZCA9PT0gc2VsZWN0ZWRQdXJjaGFzZS5faWQgPyB7IC4uLml0ZW0sIHN0YXR1czogbmV3U3RhdHVzLCBwYXltZW50czogdXBkYXRlZFBheW1lbnRzIH0gOiBpdGVtKSk7XHJcbiAgICAgIFxyXG4gICAgICBzZXRPcGVuQWRkUGF5bWVudChmYWxzZSk7XHJcbiAgICAgIHNldFVwZGF0ZVModHJ1ZSk7XHJcbiAgICAgIGhhbmRsZURlbGV0ZU9wZW5Mb2FkaW5nKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgcGF5bWVudDonLCBlcnJvcik7XHJcbiAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gc2F2ZSBwYXltZW50LicpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlUGF5bWVudCA9IGFzeW5jIChwYXltZW50SWQpID0+IHtcclxuICAgIGlmICghd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwYXltZW50IHJlY29yZD8nKSkgcmV0dXJuO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBGZXRjaCBsYXRlc3QgSXRlbSBQdXJjaGFzZVxyXG4gICAgICBjb25zdCBjdXJyZW50SVBSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbVB1cmNoYXNlLyR7c2VsZWN0ZWRQdXJjaGFzZS5faWR9YCk7XHJcbiAgICAgIGNvbnN0IGxhdGVzdElQRGF0YSA9IGN1cnJlbnRJUFJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICBjb25zdCB1cGRhdGVkUGF5bWVudHMgPSAobGF0ZXN0SVBEYXRhLnBheW1lbnRzIHx8IFtdKS5maWx0ZXIocCA9PiBwLmlkICE9PSBwYXltZW50SWQpO1xyXG4gICAgICBjb25zdCB0b3RhbFdpdGhUYXggPSBwYXJzZUZsb2F0KGxhdGVzdElQRGF0YS50b3RhbFVTRCB8fCBsYXRlc3RJUERhdGEudG90YWwgfHwgMCk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCB0b3RhbFBhaWRVU0QgPSB1cGRhdGVkUGF5bWVudHMucmVkdWNlKChzdW0sIHApID0+IHtcclxuICAgICAgICByZXR1cm4gc3VtICsgKHAudG90YWxVU0QgfHwgKHBhcnNlRmxvYXQocC5hbW91bnQgfHwgMCkgKyAocGFyc2VGbG9hdChwLmFtb3VudEZDIHx8IDApIC8gcGFyc2VGbG9hdChwLnJhdGUgfHwgc3lzdGVtUmF0ZSB8fCAxKSkpKTtcclxuICAgICAgfSwgMCk7XHJcblxyXG4gICAgICBsZXQgbmV3U3RhdHVzID0gJ1VuUGFpZCc7XHJcbiAgICAgIGlmICh0b3RhbFBhaWRVU0QgPj0gdG90YWxXaXRoVGF4IC0gMC4wMSkgbmV3U3RhdHVzID0gJ1BhaWQnO1xyXG4gICAgICBlbHNlIGlmICh0b3RhbFBhaWRVU0QgPiAwKSBuZXdTdGF0dXMgPSAnUGFydGlhbGx5LVBhaWQnO1xyXG5cclxuICAgICAgY29uc3QgeyBfaWQsIC4uLnJlc3REYXRhIH0gPSBsYXRlc3RJUERhdGE7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1pdGVtUHVyY2hhc2UvJHtzZWxlY3RlZFB1cmNoYXNlLl9pZH1gLCB7XHJcbiAgICAgICAgLi4ucmVzdERhdGEsXHJcbiAgICAgICAgcGF5bWVudHM6IHVwZGF0ZWRQYXltZW50cyxcclxuICAgICAgICBzdGF0dXM6IG5ld1N0YXR1c1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldEl0ZW1QdXJjaGFzZShwcmV2ID0+IHByZXYubWFwKGl0ZW0gPT4gaXRlbS5faWQgPT09IHNlbGVjdGVkUHVyY2hhc2UuX2lkID8geyAuLi5pdGVtLCBzdGF0dXM6IG5ld1N0YXR1cywgcGF5bWVudHM6IHVwZGF0ZWRQYXltZW50cyB9IDogaXRlbSkpO1xyXG4gICAgICBzZXRTZWxlY3RlZFB1cmNoYXNlKHsgLi4uc2VsZWN0ZWRQdXJjaGFzZSwgcGF5bWVudHM6IHVwZGF0ZWRQYXltZW50cywgc3RhdHVzOiBuZXdTdGF0dXMgfSk7XHJcbiAgICAgIFxyXG4gICAgICBzZXRVcGRhdGVTKHRydWUpO1xyXG4gICAgICBoYW5kbGVEZWxldGVPcGVuTG9hZGluZygpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgcGF5bWVudDonLCBlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbb3BlbjEsIHNldE9wZW4xXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHsgc2V0T3BlbjEoIW9wZW4xKTsgfTtcclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHsgZmllbGQ6ICdpdGVtUHVyY2hhc2VOdW1iZXInLCBoZWFkZXJOYW1lOiAnIycsIG1pbldpZHRoOiA5MCwgZmxleDogMC44LCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoPGRpdj4gPHNwYW4+SVAtMDwvc3Bhbj48c3Bhbj57cGFyYW1zLnJvdy5pdGVtUHVyY2hhc2VOdW1iZXJ9PC9zcGFuPiA8L2Rpdj4pIH0sXHJcbiAgICB7IGZpZWxkOiAnaXRlbVB1cmNoYXNlRGF0ZScsIGhlYWRlck5hbWU6ICdEYXRlJywgbWluV2lkdGg6IDEwMCwgZmxleDogMSwgdHlwZTogJ2RhdGUnLCB2YWx1ZUdldHRlcjogKHBhcmFtcykgPT4gbmV3IERhdGUocGFyYW1zLnJvdy5pdGVtUHVyY2hhc2VEYXRlKSwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gZGF5anMocGFyYW1zLnJvdy5pdGVtUHVyY2hhc2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSB9LFxyXG4gICAgeyBmaWVsZDogJ0FjY291bnQnLCBoZWFkZXJOYW1lOiAnRGVzY3JpcHRpb24nLCBtaW5XaWR0aDogMjAwLCBmbGV4OiAyIH0sXHJcbiAgICB7IGZpZWxkOiAncmVmZXJlbmNlSW5mbycsIGhlYWRlck5hbWU6ICdBY2NvdW50JywgbWluV2lkdGg6IDE1MCwgZmxleDogMS41IH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnc3RhdHVzJywgaGVhZGVyTmFtZTogJ0FjdGlvbicsIG1pbldpZHRoOiAyMDAsIGZsZXg6IDEuNSwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsV2l0aFRheCA9IHBhcnNlRmxvYXQocGFyYW1zLnJvdy50b3RhbFVTRCB8fCBwYXJhbXMucm93LnRvdGFsIHx8IDApO1xyXG4gICAgICAgIC8vIFJvYnVzdCBjYWxjdWxhdGlvbiBvZiB0b3RhbCBwYWlkIGluIFVTRCBlcXVpdmFsZW50XHJcbiAgICAgICAgY29uc3QgdG90YWxQYWlkID0gKHBhcmFtcy5yb3cucGF5bWVudHMgfHwgW10pLnJlZHVjZSgoc3VtLCBwKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gc3VtICsgKHAudG90YWxVU0QgfHwgKHBhcnNlRmxvYXQocC5hbW91bnQgfHwgMCkgKyAocGFyc2VGbG9hdChwLmFtb3VudEZDIHx8IDApIC8gcGFyc2VGbG9hdChwLnJhdGUgfHwgc3lzdGVtUmF0ZSB8fCAxKSkpKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICBjb25zdCBpc0Z1bGx5UGFpZCA9IHRvdGFsUGFpZCA+PSB0b3RhbFdpdGhUYXggLSAwLjAxO1xyXG4gICAgICAgIC8vIEFsc28gdHJlYXQgc3RhdHVzPSdQYWlkJyBhcyBmdWxseSBwYWlkIOKAlCBjb3ZlcnMgY2FzZSB3aGVyZSBwYXltZW50c1tdIGlzIHN0YWxlIG9yIG1pc3NpbmdcclxuICAgICAgICBjb25zdCBzdGF0dXNJc1BhaWQgPSAocGFyYW1zLnJvdy5zdGF0dXMgfHwgJycpLnRvTG93ZXJDYXNlKCkgPT09ICdwYWlkJztcclxuICAgICAgICBjb25zdCBlZmZlY3RpdmVseVBhaWQgPSBpc0Z1bGx5UGFpZCB8fCBzdGF0dXNJc1BhaWQ7XHJcbiAgICAgICAgLy8gaGFzUGF5bWVudHM6IHRydWUgaWYgcGF5bWVudHMgYXJyYXkgaGFzIGl0ZW1zIE9SIHN0YXR1cyBpbmRpY2F0ZXMgcGF5bWVudCB3YXMgbWFkZVxyXG4gICAgICAgIC8vIChwYWdpbmF0ZWQgZW5kcG9pbnQgbWF5IG5vdCByZXR1cm4gcGF5bWVudHNbXSDigJQgdXNlIHN0YXR1cyBhcyByZWxpYWJsZSBmYWxsYmFjaylcclxuICAgICAgICBjb25zdCBoYXNQYXltZW50cyA9IChwYXJhbXMucm93LnBheW1lbnRzIHx8IFtdKS5sZW5ndGggPiAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucm93LnN0YXR1cyA9PT0gJ1BhaWQnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucm93LnN0YXR1cyA9PT0gJ1BhcnRpYWxseS1QYWlkJztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc1cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgey8qIE9ubHkgc2hvdyBcIkNsaWNrIFRvIFBheVwiIHdoZW4gTk9UIGZ1bGx5IHBhaWQgYnkgY2FsY3VsYXRpb24gQU5EIHN0YXR1cyBpcyBub3QgJ1BhaWQnICovfVxyXG4gICAgICAgICAgICB7IWVmZmVjdGl2ZWx5UGFpZCAmJiB0b3RhbFdpdGhUYXggPiAwICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5BZGRQYXltZW50KHBhcmFtcy5yb3cpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+Q2xpY2sgVG8gUGF5PC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiBIaXN0b3J5IGJ1dHRvbjogc2hvdyB3aGVuIGFueSBwYXltZW50cyB3ZXJlIHJlY29yZGVkIChiYXNlZCBvbiBzdGF0dXMgb3IgcGF5bWVudHMgYXJyYXkpICovfVxyXG4gICAgICAgICAgICB7aGFzUGF5bWVudHMgJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3BlblBheW1lbnRIaXN0b3J5KHBhcmFtcy5yb3cpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyB9fT5IaXN0b3J5PC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiBQQUlEIGJhZGdlOiBzaG93IHdoZW4gZWZmZWN0aXZlbHkgcGFpZCBidXQgbm8gcGF5bWVudHMgaW4gYXJyYXkgKHN0YXR1cy1iYXNlZCBwYXltZW50KSAqL31cclxuICAgICAgICAgICAgeyh0b3RhbFdpdGhUYXggPT09IDAgfHwgZWZmZWN0aXZlbHlQYWlkKSAmJiAhaGFzUGF5bWVudHMgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnYmx1ZScsIGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcwLjg1cmVtJyB9fT5QQUlEPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7LyogRlVMTFkgUEFJRCBiYWRnZTogc2hvdyB3aGVuIHBhaWQgYW5kIGhhcyBwYXltZW50IGhpc3RvcnkgcmVjb3JkcyAqL31cclxuICAgICAgICAgICAge2lzRnVsbHlQYWlkICYmIGhhc1BheW1lbnRzICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnLCBmb250V2VpZ2h0OiAnYm9sZCcsIGZvbnRTaXplOiAnMC44NXJlbScgfX0+RlVMTCBQQUlEPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdwYXltZW50U3RhdHVzVGV4dCcsIGhlYWRlck5hbWU6ICdTdGF0dXMnLCBtaW5XaWR0aDogMTIwLCBmbGV4OiAxLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG90YWxXaXRoVGF4ID0gcGFyc2VGbG9hdChwYXJhbXMucm93LnRvdGFsVVNEIHx8IHBhcmFtcy5yb3cudG90YWwgfHwgMCk7XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IHBhcmFtcy5yb3cuc3RhdHVzIHx8ICdVblBhaWQnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEF1dG8tZGV0ZWN0IFBhaWQgc3RhdHVzIGZvciB6ZXJvLWJhbGFuY2UgaXRlbXMgaWYgbm90IGV4cGxpY2l0bHkgc2V0XHJcbiAgICAgICAgaWYgKHRvdGFsV2l0aFRheCA9PT0gMCAmJiBzdGF0dXMgPT09ICdVblBhaWQnKSB7XHJcbiAgICAgICAgICBzdGF0dXMgPSAnUGFpZCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29sb3IgPSAncmVkJztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAnUGFpZCcpIGNvbG9yID0gJ2JsdWUnO1xyXG4gICAgICAgIGVsc2UgaWYgKHN0YXR1cyA9PT0gJ1BhcnRpYWxseS1QYWlkJykgY29sb3IgPSAnb3JhbmdlJztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XHJcbiAgICAgICAgICAgIHtzdGF0dXMudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgeyBmaWVsZDogJ2l0ZW1EZXNjcmlwdGlvbkluZm8nLCBoZWFkZXJOYW1lOiAnSS1EZXNjcmlwdGlvbicsIG1pbldpZHRoOiAxMjAsIGZsZXg6IDEuMiB9LFxyXG4gICAgeyBmaWVsZDogJ3RvdGFsRkMnLCBoZWFkZXJOYW1lOiAnVG90YWxGQycsIG1pbldpZHRoOiAxMjAsIGZsZXg6IDEsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IGBGQyR7cGFyYW1zLnJvdy50b3RhbEZDPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9YCB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ3RvdGFsJywgaGVhZGVyTmFtZTogJ1RvdGFsJywgbWluV2lkdGg6IDEwMCwgZmxleDogMSwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gcGFyc2VGbG9hdChwYXJhbXMucm93LnRvdGFsVVNEIHx8IHBhcmFtcy5yb3cudG90YWwgfHwgMCk7XHJcbiAgICAgICAgY29uc3QgdG90YWxQYWlkID0gKHBhcmFtcy5yb3cucGF5bWVudHMgfHwgW10pLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyAocC50b3RhbFVTRCB8fCAocGFyc2VGbG9hdChwLmFtb3VudCB8fCAwKSArIChwYXJzZUZsb2F0KHAuYW1vdW50RkMgfHwgMCkgLyBwYXJzZUZsb2F0KHAucmF0ZSB8fCBzeXN0ZW1SYXRlIHx8IDEpKSkpLCAwKTtcclxuICAgICAgICBjb25zdCByZXN0ID0gdG90YWwgLSB0b3RhbFBhaWQ7XHJcbiAgICAgICAgcmV0dXJuIGAkJHtyZXN0LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ3ZpZXcnLCBoZWFkZXJOYW1lOiAnVmlldycsIHdpZHRoOiA2MCwgbWluV2lkdGg6IDYwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiVmlld1wiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5WaWV3KHBhcmFtcy5yb3cuX2lkKX0gZGlzYWJsZWQ9e1B1cmNoYXNlSW5mb1YubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPFZpc2liaWxpdHlPdXRsaW5lZEljb24gc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdlZGl0JywgaGVhZGVyTmFtZTogJ0VkaXQnLCB3aWR0aDogNjAsIG1pbldpZHRoOiA2MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxFZGl0VG9vbHRpcCB0aXRsZT1cIkVkaXRcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17UHVyY2hhc2VJbmZvVS5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9JdGVtUHVyY2hhc2VVcGRhdGVGb3JtLyR7cGFyYW1zLnJvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICA8RWRpdEljb24gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRWRpdFRvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnRGVsZXRlJywgaGVhZGVyTmFtZTogJ0RlbGV0ZScsIHdpZHRoOiA2MCwgbWluV2lkdGg6IDYwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPERlbGV0ZVRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuKHBhcmFtcy5yb3cuX2lkKX0gZGlzYWJsZWQ9e1B1cmNoYXNlSW5mb0QubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30gPlxyXG4gICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRGVsZXRlVG9vbHRpcD5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICBdXHJcbiAgY29uc3QgY29tcG9uZW50UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgaGFuZGxlUHJpbnQgPSB1c2VSZWFjdFRvUHJpbnQoeyBjb250ZW50OiAoKSA9PiBjb21wb25lbnRSZWYuY3VycmVudCB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtvcGVuMX0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhciBzeD17eyBwcjogJzI0cHgnIH19PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9IHN4PXt7IG1hcmdpblJpZ2h0OiAnMzZweCcsIC4uLihvcGVuMSAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSB9fT5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIG5vV3JhcCBzeD17eyBmbGV4R3JvdzogMSB9fT5JdGVtIFB1cmNoYXNlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT48TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+PC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e29wZW4xfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldE9wZW4xKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldE9wZW4xKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhciBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJywgcHg6IFsxXSB9fT48SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PjxDaGV2cm9uTGVmdEljb24gLz48L0ljb25CdXR0b24+PC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT48U2lkZU1haW50ZW5hbmNlIC8+PC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3ggY29tcG9uZW50PVwibWFpblwiIHN4PXt7IGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLCBmbGV4R3JvdzogMSwgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwdmgnLCBvdmVyZmxvdzogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDEgfX0gPlxyXG4gICAgICAgICAgICB7bG9hZGluZ0RhdGEgPyA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxMjBweCcgfX0+PExvYWRlciAvPjwvZGl2PiA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgbWFyZ2luOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwPjxzcGFuPjxJY29uQnV0dG9uIGRpc2FibGVkPXsoUHVyY2hhc2VJbmZvQz8ubGVuZ3RoID09PSAwIHx8IDApICYmIHVzZXI/LmRhdGE/LnJvbGUgIT09ICdDRU8nfT48TmF2TGluayB0bz17Jy9JdGVtUHVyY2hhc2VWaWV3Rm9ybSd9IHRpdGxlPVwiQWRkIEl0ZW0gUHVyY2hhc2VcIj48c3BhbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyQWRkaW5nJz48QWRkIC8+PC9zcGFuPjwvTmF2TGluaz48L0ljb25CdXR0b24+PC9zcGFuPjwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZWZyZXNoU2VhcmNofSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+UmVmcmVzaCBTZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGhlaWdodDogNjAwLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRhR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25Nb2RlPVwic2VydmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dDb3VudD17dG90YWxQYWdlICogbGltaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e2xpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e2l0ZW1QdXJjaGFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzbG90cz17eyB0b29sYmFyOiBHcmlkVG9vbGJhciB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Sb3dTZWxlY3Rpb25Nb2RlbENoYW5nZT17KG5ld1NlbGVjdGlvbikgPT4gc2V0U2VsZWN0ZWRSb3dzKG5ld1NlbGVjdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzbG90UHJvcHM9e3sgdG9vbGJhcjogeyBzaG93UXVpY2tGaWx0ZXI6IHRydWUsIHByaW50T3B0aW9uczogeyBkaXNhYmxlVG9vbGJhckJ1dHRvbjogdHJ1ZSB9IH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGdldFJvd0NsYXNzTmFtZT17KHBhcmFtcykgPT4gbmV3UHVyY2hhc2UuaW5jbHVkZXMocGFyYW1zLnJvdy5faWQpID8gJ25ldy1QdXJjaGFzZScgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94U2VsZWN0aW9uIGRpc2FibGVEZW5zaXR5U2VsZWN0b3IgZmlsdGVyTW9kZWw9e2ZpbHRlck1vZGVsfSByb3dTZWxlY3Rpb25Nb2RlbD17c2VsZWN0ZWRSb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25GaWx0ZXJNb2RlbENoYW5nZT17KG5ld01vZGVsKSA9PiBoYW5kbGVGaWx0ZXIobmV3TW9kZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uVmlzaWJpbGl0eU1vZGVsPXtjb2x1bW5WaXNpYmlsaXR5TW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZT17aGFuZGVsSGlkZGVuQ29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBwYWRkaW5nOiAnMTBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIGNvdW50PXt0b3RhbFBhZ2V9IHBhZ2U9e3BhZ2UgKyAxfSBvbkNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX0gY29sb3I9XCJwcmltYXJ5XCIgc3g9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJy01MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxDb25maXJtRGVsZXRlTW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBoYW5kbGVEZWxldGU9e2hhbmRsZU9wZW5SZWFzb25EZWxldGV9XHJcbiAgICAgICAgaXRlbU5hbWU9e1xyXG4gICAgICAgICAgaXRlbVB1cmNoYXNlLmZpbmQoKGkpID0+IGkuX2lkID09PSBEZWxldGVJZCk/Lml0ZW1QdXJjaGFzZU51bWJlclxyXG4gICAgICAgICAgICA/IGBJUC0wJHtpdGVtUHVyY2hhc2UuZmluZCgoaSkgPT4gaS5faWQgPT09IERlbGV0ZUlkKS5pdGVtUHVyY2hhc2VOdW1iZXJ9YFxyXG4gICAgICAgICAgICA6IFwidGhpcyBpdGVtIHB1cmNoYXNlXCJcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxNb2RhbCBvcGVuPXttb2RhbERlbGV0ZU9wZW5Mb2FkaW5nfSBvbkNsb3NlPXtoYW5kbGVEZWxldGVDbG9zZUxvYWRpbmd9PjxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+e2xvYWRpbmcgPyA8TG9hZGVyIC8+IDogKDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOidjZW50ZXInIH19PjxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPjxoMj5EYXRhIHN1Y2Nlc3NmdWxseSB7dXBkYXRlUyA/ICdVcGRhdGVkJyA6ICdkZWxldGVkJ308L2gyPjxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5DbG9zZTwvYnV0dG9uPjwvZGl2Pil9PC9Cb3g+PC9Nb2RhbD5cclxuICAgICAgPE1vZGFsIG9wZW49e29wZW5WaWV3fSBvbkNsb3NlPXtoYW5kbGVDbG9zZVZpZXd9IGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IHsgeHM6ICcxMDAlJywgbWQ6IDk1MCB9LCBtYXhIZWlnaHQ6ICc5MHZoJywgb3ZlcmZsb3dZOiAnYXV0bycsICdAbWVkaWEgcHJpbnQnOiB7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2F1dG8nLCBtYXhIZWlnaHQ6ICdub25lJywgb3ZlcmZsb3c6ICd2aXNpYmxlJywgYm94U2hhZG93OiAnbm9uZScsIGJvcmRlcjogJ25vbmUnIH0gfX0+XHJcbiAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsIHdpZHRoOiAnMTAwJScsIG1iOiAxLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgekluZGV4OiAxMDAwLCAnQG1lZGlhIHByaW50JzogeyBkaXNwbGF5OiAnbm9uZScgfSB9fT5cclxuICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiUHJpbnRcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlUHJpbnR9IHN0eWxlPXt7IHpJbmRleDogMTAwMCB9fT5cclxuICAgICAgICAgICAgICAgIDxMb2NhbFByaW50c2hvcCBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVZpZXd9IHN0eWxlPXt7IHpJbmRleDogMTAwMCB9fT5cclxuICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW1QdXJjaGFzZVZpZXcgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtjb21wb25lbnRSZWZ9IHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMjBweCAwcHggMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdub25lJywgJ0BtZWRpYSBwcmludCc6IHsgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luQm90dG9tOiAnMjBweCcgfSB9fT5cclxuICAgICAgICAgICAgICAgICAgPFByaW50SGVhZGVyIGJyYW5jaElkPXtpdGVtUHVyY2hhc2VWaWV3LmJyYW5jaElkIHx8IFwiXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcgfX0+SVAtPC9zcGFuPjxzcGFuPntpdGVtUHVyY2hhc2VWaWV3Lml0ZW1QdXJjaGFzZU51bWJlcn08L3NwYW4+IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5EYXRlOiA8L3NwYW4+ICB7ZGF5anMoaXRlbVB1cmNoYXNlVmlldy5pdGVtUHVyY2hhc2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlN1cHBsaWVyOiA8L3NwYW4+IHtpdGVtUHVyY2hhc2VWaWV3Lm1hbnVmYWN0dXJlciAhPT0gdW5kZWZpbmVkID8gaXRlbVB1cmNoYXNlVmlldy5tYW51ZmFjdHVyZXIgOiBudWxsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtUHVyY2hhc2VWaWV3Lm1hbnVmYWN0dXJlck51bWJlciAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlJFRkVSRU5DRTogPC9zcGFuPiB7aXRlbVB1cmNoYXNlVmlldy5tYW51ZmFjdHVyZXJOdW1iZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyB9fT5EZXNjcmlwdGlvbjogPC9zcGFuPiB7aXRlbVB1cmNoYXNlVmlldy5wcm9qZWN0TmFtZSAhPT0gdW5kZWZpbmVkID8gaXRlbVB1cmNoYXNlVmlldy5wcm9qZWN0TmFtZS5uYW1lIDogaXRlbVB1cmNoYXNlVmlldy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGhlaWdodDogJycsIHdpZHRoOiAnMTAwJScsIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0gc3g9e3sgb3ZlcmZsb3dYOiAndmlzaWJsZScsICdAbWVkaWEgcHJpbnQnOiB7IG92ZXJmbG93OiAndmlzaWJsZScgfSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3g9e3sgbWluV2lkdGg6IDY1MCwgfX0gc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cImEgZGVuc2UgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkluZm9ybWF0aW9uIERlc2NyaXB0aW9uPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5JdGVtIE5hbWU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlF0eTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UmF0ZShVU0QpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5UYXV4KEV4Y2hhbmdlIFJhdGUpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Ub3RhbChVU0QpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Ub3RhbChGQyk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1QdXJjaGFzZVZpZXcuaXRlbXMubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5pdGVtRGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IHJvdy5pdGVtRGVzY3JpcHRpb24gOiBudWxsfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5pdGVtTmFtZSAhPT0gdW5kZWZpbmVkID8gcm93Lml0ZW1OYW1lLml0ZW1OYW1lIDogcm93Lm5ld0Rlc2NyaXB0aW9ufTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5pdGVtUXR5fTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+JHtyb3cuaXRlbVJhdGUgIT0gbnVsbCA/IHBhcnNlRmxvYXQocm93Lml0ZW1SYXRlKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgOiAnMC4wMCd9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LlRhdXggIT0gbnVsbCA/IHBhcnNlRmxvYXQocm93LlRhdXgpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSA6ICcwLjAwJ308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPiR7cm93LnRvdGFsQW1vdW50ICE9IG51bGwgPyBwYXJzZUZsb2F0KHJvdy50b3RhbEFtb3VudCkudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pIDogKHJvdy50b3RhbEFtb3VudFVTRCAhPSBudWxsID8gcGFyc2VGbG9hdChyb3cudG90YWxBbW91bnRVU0QpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9KSA6ICcwLjAwJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57aXRlbVB1cmNoYXNlVmlldy5jdXJyZW5jeSA9PT0gJ0ZDJyAmJiByb3cuZmNDb252ZXJ0VG9Vc2RUb3RhbCAhPSBudWxsICYmICFpc05hTihyb3cuZmNDb252ZXJ0VG9Vc2RUb3RhbCkgPyBwYXJzZUZsb2F0KHJvdy5mY0NvbnZlcnRUb1VzZFRvdGFsKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgOiAnMC4wMCd9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Mn0+VFZBPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Mn0gc3g9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PntoYXNUdmFWYWx1ZShpdGVtUHVyY2hhc2VWaWV3KSA/ICdZZXMnIDogJ05vJ308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXsyfSBzeD17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+VGF4IEFtb3VudDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezJ9IHN4PXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT4ke2dldFRheFZhbHVlKGl0ZW1QdXJjaGFzZVZpZXcpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Mn0+VG90YWw8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXsyfSBzeD17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+RkN7aXRlbVB1cmNoYXNlVmlldy50b3RhbEZDICE9PSB1bmRlZmluZWQgJiYgaXRlbVB1cmNoYXNlVmlldy50b3RhbEZDICE9PSBudWxsID8gcGFyc2VGbG9hdChpdGVtUHVyY2hhc2VWaWV3LnRvdGFsRkMpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Mn0gc3g9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PiR7aXRlbVB1cmNoYXNlVmlldy50b3RhbCAhPT0gdW5kZWZpbmVkICYmIGl0ZW1QdXJjaGFzZVZpZXcudG90YWwgIT09IG51bGwgPyBpdGVtUHVyY2hhc2VWaWV3LnRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Mn0gc3g9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PiR7aXRlbVB1cmNoYXNlVmlldy50b3RhbFVTRCAhPT0gdW5kZWZpbmVkICYmIGl0ZW1QdXJjaGFzZVZpZXcudG90YWxVU0QgIT09IG51bGwgPyBwYXJzZUZsb2F0KGl0ZW1QdXJjaGFzZVZpZXcudG90YWxVU0QpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIC0tLSBQYXltZW50IEhpc3RvcnkgaW4gVmlldyAtLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3sgZm9udFdlaWdodDogJ25vcm1hbCcsIG1iOiAxLCBjb2xvcjogJyMzMDM2OGEnIH19PlBheW1lbnQgSGlzdG9yeTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0gdmFyaWFudD1cIm91dGxpbmVkXCIgc3g9e3sgb3ZlcmZsb3dYOiAndmlzaWJsZScsICdAbWVkaWEgcHJpbnQnOiB7IG92ZXJmbG93OiAndmlzaWJsZScgfSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdub3JtYWwnIH19PkRhdGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ25vcm1hbCcgfX0+QW1vdW50IChVU0QpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdub3JtYWwnIH19PkFtb3VudCAoRkMpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdub3JtYWwnIH19Pk1vZGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgZm9udFdlaWdodDogJ25vcm1hbCcgfX0+Tm90ZSAvIFJlZjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoaXRlbVB1cmNoYXNlVmlldy5wYXltZW50cyB8fCBbXSkubWFwKChwLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2RheWpzKHAuZGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+JHtwYXJzZUZsb2F0KHAuYW1vdW50IHx8IDApLnRvRml4ZWQoMil9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RkMge3BhcnNlRmxvYXQocC5hbW91bnRGQyB8fCAwKS50b0xvY2FsZVN0cmluZygpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntwLm1vZGV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Aubm90ZSB8fCBwLnJlZmVyZW5jZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyghaXRlbVB1cmNoYXNlVmlldy5wYXltZW50cyB8fCBpdGVtUHVyY2hhc2VWaWV3LnBheW1lbnRzLmxlbmd0aCA9PT0gMCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezV9IGFsaWduPVwiY2VudGVyXCI+Tm8gcGF5bWVudHMgcmVjb3JkZWQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBtdDogMiwgcDogMiwgYmFja2dyb3VuZENvbG9yOiAnI2Y5ZjlmOScsIGJvcmRlclJhZGl1czogJzRweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3g9e3sgY29sb3I6ICd0ZXh0LnNlY29uZGFyeScgfX0+VG90YWwgQW1vdW50PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdub3JtYWwnIH19PiR7cGFyc2VGbG9hdChpdGVtUHVyY2hhc2VWaWV3LnRvdGFsVVNEIHx8IGl0ZW1QdXJjaGFzZVZpZXcudG90YWwgfHwgMCkudG9GaXhlZCgyKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3g9e3sgY29sb3I6ICd0ZXh0LnNlY29uZGFyeScgfX0+VG90YWwgUGFpZDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzeD17eyBmb250V2VpZ2h0OiAnbm9ybWFsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7KGl0ZW1QdXJjaGFzZVZpZXcucGF5bWVudHMgfHwgW10pLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyAocC50b3RhbFVTRCB8fCAocGFyc2VGbG9hdChwLmFtb3VudCB8fCAwKSArIChwYXJzZUZsb2F0KHAuYW1vdW50RkMgfHwgMCkgLyBwYXJzZUZsb2F0KHAucmF0ZSB8fCBzeXN0ZW1SYXRlIHx8IDEpKSkpLCAwKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBzeD17eyBjb2xvcjogJ3RleHQuc2Vjb25kYXJ5JyB9fT5SZXN0IEFtb3VudDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzeD17eyBmb250V2VpZ2h0OiAnbm9ybWFsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7KHBhcnNlRmxvYXQoaXRlbVB1cmNoYXNlVmlldy50b3RhbFVTRCB8fCBpdGVtUHVyY2hhc2VWaWV3LnRvdGFsIHx8IDApIC0gKGl0ZW1QdXJjaGFzZVZpZXcucGF5bWVudHMgfHwgW10pLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyAocC50b3RhbFVTRCB8fCAocGFyc2VGbG9hdChwLmFtb3VudCB8fCAwKSArIChwYXJzZUZsb2F0KHAuYW1vdW50RkMgfHwgMCkgLyBwYXJzZUZsb2F0KHAucmF0ZSB8fCBzeXN0ZW1SYXRlIHx8IDEpKSkpLCAwKSkudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ25vbmUnLCAnQG1lZGlhIHByaW50JzogeyBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW5Ub3A6ICcyMHB4JyB9IH19PlxyXG4gICAgICAgICAgICAgICAgICA8UHJpbnRGb290ZXIgYnJhbmNoSWQ9e2l0ZW1QdXJjaGFzZVZpZXcuYnJhbmNoSWQgfHwgXCJcIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PVwibGVmdFwiPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIiBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICBXaHkgZG8geW91IHdhbnQgdG8gZGVsZXRlIElQLXtyZWxhdGVkTnVtYmVyfT9cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVEZWxldGVVcGRhdGV9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwicmVhc29uMVwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWFzb24xXCJcclxuICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb24xfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uMShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVhc29uXCJcclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBzeD17eyBtYjogMSwgbXQ6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgIFR5cGUgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+REVMRVRFPC9zcGFuPiB0byBjb25maXJtIGZpbmFsIGFjdGlvbjpcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHNpemU9XCJzbWFsbFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBERUxFVEUgaGVyZVwiIGlkPVwiY29uZmlybURlbGV0ZUlQXCIgYXV0b0ZvY3VzIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bkN1c3RvbWVyXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1EZWxldGVJUCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC52YWx1ZSAhPT0gJ0RFTEVURScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgdHlwZSBERUxFVEUgdG8gY29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgSXJyZXZlcnNpYmx5XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIHsvKiAtLS0gQWRkIFBheW1lbnQgTW9kYWwgLS0tICovfVxyXG4gICAgICA8TW9kYWwgb3Blbj17b3BlbkFkZFBheW1lbnR9IG9uQ2xvc2U9eygpID0+IHNldE9wZW5BZGRQYXltZW50KGZhbHNlKX0+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7IG1iOiAyLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+UmVjb3JkIFBheW1lbnQgZm9yIElQLXtzZWxlY3RlZFB1cmNoYXNlPy5pdGVtUHVyY2hhc2VOdW1iZXJ9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNhdmVQYXltZW50fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggbGFiZWw9XCJBbW91bnQgKFVTRClcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3BheW1lbnRGb3JtLmFtb3VudH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXltZW50Rm9ybSh7IC4uLnBheW1lbnRGb3JtLCBhbW91bnQ6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIGxhYmVsPVwiQW1vdW50IChGQylcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3BheW1lbnRGb3JtLmFtb3VudEZDfSBvbkNoYW5nZT17KGUpID0+IHNldFBheW1lbnRGb3JtKHsgLi4ucGF5bWVudEZvcm0sIGFtb3VudEZDOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBsYWJlbD1cIlJhdGUgKFRhdXgpXCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtwYXltZW50Rm9ybS5yYXRlfSBvbkNoYW5nZT17KGUpID0+IHNldFBheW1lbnRGb3JtKHsgLi4ucGF5bWVudEZvcm0sIHJhdGU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHA6IDEsIGJhY2tncm91bmRDb2xvcjogJyNmMGY0ZmYnLCBib3JkZXJSYWRpdXM6ICc0cHgnLCBib3JkZXI6ICcxcHggZGFzaGVkICMzMDM2OGEnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGNvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgVG90YWwgVGhpcyBQYXltZW50OiAkeyhwYXJzZUZsb2F0KHBheW1lbnRGb3JtLmFtb3VudCB8fCAwKSArIChwYXJzZUZsb2F0KHBheW1lbnRGb3JtLmFtb3VudEZDIHx8IDApIC8gcGFyc2VGbG9hdChwYXltZW50Rm9ybS5yYXRlIHx8IDEpKSkudG9GaXhlZCgyKX0gVVNEXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBsYWJlbD1cIkRhdGVcIiB0eXBlPVwiZGF0ZVwiIHJlcXVpcmVkIHZhbHVlPXtwYXltZW50Rm9ybS5kYXRlfSBvbkNoYW5nZT17KGUpID0+IHNldFBheW1lbnRGb3JtKHsgLi4ucGF5bWVudEZvcm0sIGRhdGU6IGUudGFyZ2V0LnZhbHVlIH0pfSBJbnB1dExhYmVsUHJvcHM9e3sgc2hyaW5rOiB0cnVlIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsPlBheW1lbnQgTW9kZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdCB2YWx1ZT17cGF5bWVudEZvcm0ubW9kZX0gbGFiZWw9XCJQYXltZW50IE1vZGVcIiBvbkNoYW5nZT17KGUpID0+IHNldFBheW1lbnRGb3JtKHsgLi4ucGF5bWVudEZvcm0sIG1vZGU6IGUudGFyZ2V0LnZhbHVlIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJDYXNoXCI+Q2FzaDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiQmFuayBUcmFuc2ZlclwiPkJhbmsgVHJhbnNmZXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkNoZWNrXCI+Q2hlY2s8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIGxhYmVsPVwiUmVmZXJlbmNlIC8gQ2hlY2sgI1wiIHZhbHVlPXtwYXltZW50Rm9ybS5yZWZlcmVuY2V9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGF5bWVudEZvcm0oeyAuLi5wYXltZW50Rm9ybSwgcmVmZXJlbmNlOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggbGFiZWw9XCJOb3RlXCIgbXVsdGlsaW5lIHJvd3M9ezJ9IHZhbHVlPXtwYXltZW50Rm9ybS5ub3RlfSBvbkNoYW5nZT17KGUpID0+IHNldFBheW1lbnRGb3JtKHsgLi4ucGF5bWVudEZvcm0sIG5vdGU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG5DdXN0b21lcjJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmUgUGF5bWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgey8qIC0tLSBQYXltZW50IEhpc3RvcnkgTW9kYWwgLS0tICovfVxyXG4gICAgICA8TW9kYWwgb3Blbj17b3BlblBheW1lbnRIaXN0b3J5fSBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuUGF5bWVudEhpc3RvcnkoZmFsc2UpfT5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNzAwLCBtYXhIZWlnaHQ6ICc4MHZoJywgb3ZlcmZsb3dZOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzeD17eyBtYjogMiwgZm9udFdlaWdodDogJ25vcm1hbCcgfX0+UGF5bWVudCBIaXN0b3J5IC0gSVAte3NlbGVjdGVkUHVyY2hhc2U/Lml0ZW1QdXJjaGFzZU51bWJlcn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgICAgIDxUYWJsZSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICA8VGFibGVIZWFkIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjUnIH19PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdub3JtYWwnIH19PkRhdGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBmb250V2VpZ2h0OiAnbm9ybWFsJyB9fT5BbW91bnQgKFVTRCk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBmb250V2VpZ2h0OiAnbm9ybWFsJyB9fT5BbW91bnQgKEZDKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IGZvbnRXZWlnaHQ6ICdub3JtYWwnIH19PlJhdGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBmb250V2VpZ2h0OiAnbm9ybWFsJyB9fT5Nb2RlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdub3JtYWwnIH19PkFjdGlvbjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgeyhzZWxlY3RlZFB1cmNoYXNlPy5wYXltZW50cyB8fCBbXSkubWFwKChwKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3AuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2RheWpzKHAuZGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4ke3BhcnNlRmxvYXQocC5hbW91bnQgfHwgMCkudG9GaXhlZCgyKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkZDIHtwYXJzZUZsb2F0KHAuYW1vdW50RkMgfHwgMCkudG9Mb2NhbGVTdHJpbmcoKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntwLnJhdGUgfHwgJy0nfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3AubW9kZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVBheW1lbnQocC5pZCl9IGNvbG9yPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIHsoIXNlbGVjdGVkUHVyY2hhc2U/LnBheW1lbnRzIHx8IHNlbGVjdGVkUHVyY2hhc2UucGF5bWVudHMubGVuZ3RoID09PSAwKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz48VGFibGVDZWxsIGNvbFNwYW49ezZ9IGFsaWduPVwiY2VudGVyXCI+Tm8gcGF5bWVudHMgcmVjb3JkZWQ8L1RhYmxlQ2VsbD48L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICA8Qm94IHN4PXt7IG10OiAyLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGZvbnRXZWlnaHQ6ICdub3JtYWwnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmNGZmJywgcDogMS41LCBib3JkZXJSYWRpdXM6IDEgfX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRXZWlnaHQ6ICdub3JtYWwnIH19PlRvdGFsIFBhaWQ6ICR7KHNlbGVjdGVkUHVyY2hhc2U/LnBheW1lbnRzIHx8IFtdKS5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgKHAudG90YWxVU0QgfHwgKHBhcnNlRmxvYXQocC5hbW91bnQgfHwgMCkgKyAocGFyc2VGbG9hdChwLmFtb3VudEZDIHx8IDApIC8gcGFyc2VGbG9hdChwLnJhdGUgfHwgc3lzdGVtUmF0ZSB8fCAxKSkpKSwgMCkudG9GaXhlZCgyKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRXZWlnaHQ6ICdub3JtYWwnIH19PlJlc3Q6ICR7KHBhcnNlRmxvYXQoc2VsZWN0ZWRQdXJjaGFzZT8udG90YWxVU0QgfHwgc2VsZWN0ZWRQdXJjaGFzZT8udG90YWwgfHwgMCkgLSAoc2VsZWN0ZWRQdXJjaGFzZT8ucGF5bWVudHMgfHwgW10pLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyAocC50b3RhbFVTRCB8fCAocGFyc2VGbG9hdChwLmFtb3VudCB8fCAwKSArIChwYXJzZUZsb2F0KHAuYW1vdW50RkMgfHwgMCkgLyBwYXJzZUZsb2F0KHAucmF0ZSB8fCBzeXN0ZW1SYXRlIHx8IDEpKSkpLCAwKSkudG9GaXhlZCgyKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T3BlblBheW1lbnRIaXN0b3J5KGZhbHNlKX0gY2xhc3NOYW1lPVwiYnRuQ3VzdG9tZXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Ub3A6ICcxNnB4JyB9fT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1QdXJjaGFzZVZpZXdBZG1pblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCwgQm94LCBUeXBvZ3JhcGh5LCBUZXh0RmllbGQsIEJ1dHRvbiwgR3JpZCwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IFdhcm5pbmdBbWJlckljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9XYXJuaW5nQW1iZXInO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcblxuY29uc3Qgc3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIHdpZHRoOiA0NTAsXG4gICAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxuICAgIGJveFNoYWRvdzogMjQsXG4gICAgcDogNCxcbiAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxuICAgIGJvcmRlclRvcDogJzhweCBzb2xpZCAjZDMyZjJmJyAvLyBSZWQgd2FybmluZyBib3JkZXJcbn07XG5cbmNvbnN0IENvbmZpcm1EZWxldGVNb2RhbCA9ICh7IG9wZW4sIGhhbmRsZUNsb3NlLCBoYW5kbGVEZWxldGUsIGl0ZW1OYW1lIH0pID0+IHtcbiAgICBjb25zdCBbY29uZmlybVRleHQsIHNldENvbmZpcm1UZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaXNEaXNhYmxlZCwgc2V0SXNEaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjb25maXJtVGV4dCA9PT0gJ0RFTEVURScpIHtcbiAgICAgICAgICAgIHNldElzRGlzYWJsZWQoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0SXNEaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtjb25maXJtVGV4dF0pO1xuXG4gICAgY29uc3Qgb25Db25maXJtID0gKCkgPT4ge1xuICAgICAgICBoYW5kbGVEZWxldGUoKTtcbiAgICAgICAgc2V0Q29uZmlybVRleHQoJycpO1xuICAgICAgICBoYW5kbGVDbG9zZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkNsb3NlID0gKCkgPT4ge1xuICAgICAgICBzZXRDb25maXJtVGV4dCgnJyk7XG4gICAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb25maXJtLWRlbGV0ZS10aXRsZVwiXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY29uZmlybS1kZWxldGUtZGVzY3JpcHRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cImNvbmZpcm0tZGVsZXRlLXRpdGxlXCIgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIiBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJyNkMzJmMmYnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdhcm5pbmdBbWJlckljb24gc3g9e3sgbXI6IDEgfX0gLz4gQ29uZmlybSBEZWxldGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN4PXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHN4PXt7IG10OiAyLCBtYjogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIDxzdHJvbmc+e2l0ZW1OYW1lIHx8ICd0aGlzIHJlY29yZCd9PC9zdHJvbmc+P1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IG1iOiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgYWN0aW9uIGlzIGlycmV2ZXJzaWJsZSBhbmQgbWF5IGFmZmVjdCBsaW5rZWQgZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN4PXt7IG1iOiAxLCBmb250V2VpZ2h0OiAnbWVkaXVtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgdHlwZSA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyNkMzJmMmYnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+REVMRVRFPC9zcGFuPiB0byBjb25maXJtOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgREVMRVRFIGhlcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25maXJtVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbmZpcm1UZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Y29uZmlybVRleHQgIT09ICcnICYmIGNvbmZpcm1UZXh0ICE9PSAnREVMRVRFJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgbXQ6IDMsIGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAyLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgY29sb3I6ICdncmF5JywgYm9yZGVyQ29sb3I6ICdncmF5JywgJyY6aG92ZXInOiB7IGJvcmRlckNvbG9yOiAnIzIwMmE1YScsIGNvbG9yOiAnIzIwMmE1YScgfSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29uZmlybX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnI2QzMmYyZicsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHsgYmdjb2xvcjogJyNiNzFjMWMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmRpc2FibGVkJzogeyBiZ2NvbG9yOiAnI2VmOWE5YScsIGNvbG9yOiAnd2hpdGUnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBJcnJldmVyc2libHlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1EZWxldGVNb2RhbDtcblxyXG4iLCJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSUQ6IGNyeXB0by5yYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5jb25zdCBybmRzOFBvb2wgPSBuZXcgVWludDhBcnJheSgyNTYpOyAvLyAjIG9mIHJhbmRvbSB2YWx1ZXMgdG8gcHJlLWFsbG9jYXRlXG5cbmxldCBwb29sUHRyID0gcm5kczhQb29sLmxlbmd0aDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgaWYgKHBvb2xQdHIgPiBybmRzOFBvb2wubGVuZ3RoIC0gMTYpIHtcbiAgICBjcnlwdG8ucmFuZG9tRmlsbFN5bmMocm5kczhQb29sKTtcbiAgICBwb29sUHRyID0gMDtcbiAgfVxuXG4gIHJldHVybiBybmRzOFBvb2wuc2xpY2UocG9vbFB0ciwgcG9vbFB0ciArPSAxNik7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV07XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDb25maXJtRGVsZXRlTW9kYWwiLCJ2NCIsIlNpZGVNYWludGVuYW5jZSIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJWaXNpYmlsaXR5SWNvbiIsIkVkaXRJY29uIiwiRGVsZXRlSWNvbiIsIk5hdkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsIlRhYmxlIiwiSWNvbkJ1dHRvbiIsInN0eWxlZCIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiQ2hlY2tib3giLCJUYWJsZUNvbnRhaW5lciIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsIk1vZGFsIiwiQm94IiwiR3JpZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIk1lbnVJdGVtIiwiQmFja2Ryb3AiLCJBdXRvY29tcGxldGUiLCJUZXh0RmllbGQiLCJDb2xsYXBzZSIsIlBhZ2luYXRpb24iLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiRGl2aWRlciIsImludmFsaWRhdGVDYWNoZSIsIkNvbnRhaW5lciIsIkRhdGFHcmlkIiwiR3JpZFRvb2xiYXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiQWRkIiwiQ2xvc2UiLCJkYXlqcyIsIkxvYWRlciIsIkNoZWNrQ2lyY2xlSWNvbiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJJbWFnZTEiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJ1c2VSZWFjdFRvUHJpbnQiLCJQcmludEhlYWRlciIsIlByaW50Rm9vdGVyIiwiTG9jYWxQcmludHNob3AiLCJWaXNpYmlsaXR5T3V0bGluZWRJY29uIiwiRGVsZXRlVG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiRWRpdFRvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIlZpZXdUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjciLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjgiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJJdGVtUHVyY2hhc2VWaWV3QWRtaW4iLCJfdXNlciRkYXRhIiwiX2l0ZW1QdXJjaGFzZSRmaW5kIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJoYXNUdmFWYWx1ZSIsIml0ZW0iLCJDaGVja1R2QSIsImNoZWNrVHZBIiwiQ2hlY2tUdmEiLCJoYXNUVkEiLCJ0dmEiLCJUVkEiLCJnZXRUYXhWYWx1ZSIsInRheCIsInRheEFtb3VudCIsInZhdEFtb3VudCIsIlR2YUFtb3VudCIsInRheFVTRCIsIk51bWJlciIsInRvdGFsVVNEIiwidG90YWwiLCJhbW91bnQiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImlkIiwiX2lkIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJncmFudEFjY2VzcyIsInNldEdyYW50QWNjZXNzIiwiZmV0Y2hOdW1iZXIiLCJfcmVmMCIsIl9yZXMkZGF0YSIsImZpbHRlciIsInJvdyIsInVzZXJJRCIsIm1hcCIsIm1vZHVsZXMiLCJQdXJjaGFzZUluZm9DIiwibW9kdWxlTmFtZSIsImFjY2VzcyIsImNyZWF0ZU0iLCJQdXJjaGFzZUluZm9WIiwidmlld00iLCJQdXJjaGFzZUluZm9VIiwiZWRpdE0iLCJQdXJjaGFzZUluZm9EIiwiZGVsZXRlTSIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIml0ZW1QdXJjaGFzZSIsInNldEl0ZW1QdXJjaGFzZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibmV3UHVyY2hhc2UiLCJzZXROZXdQdXJjaGFzZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwic2VsZWN0ZWRSb3dzIiwic2V0U2VsZWN0ZWRSb3dzIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwib3BlbkFkZFBheW1lbnQiLCJzZXRPcGVuQWRkUGF5bWVudCIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJvcGVuUGF5bWVudEhpc3RvcnkiLCJzZXRPcGVuUGF5bWVudEhpc3RvcnkiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0Iiwic2VsZWN0ZWRQdXJjaGFzZSIsInNldFNlbGVjdGVkUHVyY2hhc2UiLCJfdXNlU3RhdGUxNSIsImFtb3VudEZDIiwicmF0ZSIsImRhdGUiLCJmb3JtYXQiLCJtb2RlIiwicmVmZXJlbmNlIiwibm90ZSIsIl91c2VTdGF0ZTE2IiwicGF5bWVudEZvcm0iLCJzZXRQYXltZW50Rm9ybSIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJleHBlbnNlTnVtYmVyIiwic2V0RXhwZW5zZU51bWJlciIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJzeXN0ZW1SYXRlIiwic2V0U3lzdGVtUmF0ZSIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJwYWdlIiwic2V0UGFnZSIsImxpbWl0IiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsImZpbHRlckZpZWxkIiwic2V0RmlsdGVyRmllbGQiLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwiZmlsdGVyVmFsdWUiLCJzZXRGaWx0ZXJWYWx1ZSIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJ0b3RhbFBhZ2UiLCJTZXRUb3RhbFBhZ2UiLCJmZXRjaEl0ZW1zIiwiX3JlZjEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0cmltIiwiZm9ybWF0RGF0ZSIsIml0ZW1JIiwiZGF0YUZpZWxkIiwiaXRlbVB1cmNoYXNlRGF0ZSIsIkFjY291bnQiLCJwcm9qZWN0TmFtZSIsInVuZGVmaW5lZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInJlZmVyZW5jZUluZm8iLCJtYW51ZmFjdHVyZXIiLCJtYW51ZmFjdHVyZXJOdW1iZXIiLCJpdGVtSW5mbyIsIml0ZW1zIiwicGFyc2VGbG9hdCIsIml0ZW1RdHkiLCJuZXdEZXNjcmlwdGlvbiIsIl9yb3ckaXRlbU5hbWUiLCJpdGVtTmFtZSIsIml0ZW1EZXNjcmlwdGlvbkluZm8iLCJpdGVtRGVzY3JpcHRpb24iLCJNYXRoIiwiY2VpbCIsInRvdGFsSXRlbSIsIl94IiwiX3gyIiwiX3gzIiwiX3g0IiwiaGFuZGxlUmVmcmVzaFNlYXJjaCIsImZldGNoRXhwZW5zZUluZm8iLCJfcmVmMTAiLCJfbGFzdEV4cFJlcyRkYXRhIiwiX3JhdGVSZXMkZGF0YSIsImNhdFJlcyIsImxhc3RFeHBSZXMiLCJwYXJzZUludCIsInJhdGVSZXMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJfcmF0ZVJlcyRkYXRhMiIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJldmVudCIsIm5ld1BhZ2UiLCJfUmVhY3QkdXNlU3RhdGUiLCJxdWlja0ZpbHRlckV4Y2x1ZGVIaWRkZW5Db2x1bW5zIiwicXVpY2tGaWx0ZXJWYWx1ZXMiLCJfUmVhY3QkdXNlU3RhdGUyIiwiZmlsdGVyTW9kZWwiLCJzZXRGaWx0ZXJNb2RlbCIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJjb2x1bW5WaXNpYmlsaXR5TW9kZWwiLCJzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwiLCJoYW5kZWxIaWRkZW5Db2x1bW4iLCJuZXdIaWRkZW4iLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZUZpbHRlciIsIm5ld01vZGVsIiwiX25ld01vZGVsJHF1aWNrRmlsdGVyIiwiam9pbiIsInN0b3JlZFF1aWNrIiwicGFyc2UiLCJfc3RvcmVkUXVpY2skcXVpY2tGaWwiLCJzdG9yZWRDb2x1bW5zIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsIm9wZW5WaWV3Iiwic2V0T3BlblZpZXciLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwiaWRWaWV3Iiwic2V0SWRWaWV3IiwiX3VzZVN0YXRlMzkiLCJfdXNlU3RhdGU0MCIsIml0ZW1QdXJjaGFzZVZpZXciLCJzZXRJdGVtUHVyY2hhc2VWaWV3IiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsIlNldEl0ZW1zIiwiaGFuZGxlT3BlblZpZXciLCJoYW5kbGVDbG9zZVZpZXciLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0Iiwib3BlblJlYXNvbkRlbGV0ZSIsInNldE9wZW5SZWFzb25EZWxldGUiLCJoYW5kbGVPcGVuUmVhc29uRGVsZXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUiLCJmZXRjaERhdGEyIiwiX3JlZjExIiwicmVzSXRlbSIsImxvZyIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJzZXRPcGVuIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsIkRlbGV0ZUlkIiwic2V0RGVsZXRlSWQiLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwic2V0UHJvamVjdE5hbWUiLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwic2V0SXRlbXMiLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0IiwicmVhc29uIiwic2V0UmVhc29uIiwiX3VzZVN0YXRlNTUiLCJfdXNlU3RhdGU1NiIsInJlYXNvbjEiLCJzZXRSZWFzb24xIiwiX3VzZVN0YXRlNTciLCJfdXNlU3RhdGU1OCIsInJlbGF0ZWROdW1iZXIiLCJzZXRSZWxhdGVkTnVtYmVyIiwiX3VzZVN0YXRlNTkiLCJfdXNlU3RhdGU2MCIsInB1ckNoYXNlT3JkZXJJZCIsInNldFB1cmNoYXNlT3JkZXJJZCIsImZldGNoSWQiLCJfcmVmMTIiLCJfcmVzJGRhdGEyIiwiX3JlcyRkYXRhMyIsIl9yZXMkZGF0YTQiLCJpdGVtUHVyY2hhc2VOdW1iZXIiLCJQT0lEIiwiX3VzZVN0YXRlNjEiLCJfdXNlU3RhdGU2MiIsInB1cmNoYXNlIiwic2V0UHVyY2hhc2UiLCJfdXNlU3RhdGU2MyIsIl91c2VTdGF0ZTY0IiwibWFpbnRlbmFuY2UiLCJzZXRNYWludGVuYW5jZSIsIl91c2VTdGF0ZTY1IiwiX3VzZVN0YXRlNjYiLCJpbnZvaWNlIiwic2V0SW52b2ljZSIsIl9yZWYxMyIsIl9yZXMkZGF0YTUiLCJfcmVzTWFpbnRlbmFuY2UkZGF0YSIsIl9yZXNJbnZvaWNlJGRhdGEiLCJfcm93JHByb2plY3ROYW1lIiwicmVzTWFpbnRlbmFuY2UiLCJyZXNJbnZvaWNlIiwiaGFuZGxlVXBkYXRlUHVyY2hhc2UiLCJfcmVmMTQiLCJfcmVzUHVyJGRhdGEiLCJyZXNQdXIiLCJyZWxldmFudFB1cmNoYXNlcyIsIl9yb3ckcHJvamVjdE5hbWUyIiwicHVyY2hhc2VSb3ciLCJjdXJyZW50UmVzIiwiY3VycmVudERhdGEiLCJ1cGRhdGVkSXRlbXMiLCJJdGVtIiwiUmVsYXRlZEl0ZW0iLCJmaW5kIiwiSXRlbTIiLCJfSXRlbSRpdGVtTmFtZSIsIl9JdGVtJGl0ZW1OYW1lMiIsIl9JdGVtMiRpdGVtTmFtZSIsIml0ZW1CdXkiLCJ0b3RhbEdlbmVyYWxlIiwiaXRlbUNvc3QiLCJwdXJjaGFzZUFtb3VudDIiLCJyZWR1Y2UiLCJzdW0iLCJwdXQiLCJfcmVzTSRkYXRhIiwicmVzTSIsInJlbGV2YW50TWFpbnRlbmFuY2UiLCJtYWludGVuYW5jZVJvdyIsIl9JdGVtJGl0ZW1OYW1lMyIsIl9JdGVtJGl0ZW1OYW1lNCIsIl9JdGVtMiRpdGVtTmFtZTIiLCJfcmVzSSRkYXRhIiwicmVzSSIsInJlbGV2YW50SW52b2ljZXMiLCJpbnZvaWNlUm93IiwiX0l0ZW0kaXRlbU5hbWU1IiwiX0l0ZW0kaXRlbU5hbWU2IiwiX0l0ZW0yJGl0ZW1OYW1lMyIsIl91c2VTdGF0ZTY3IiwiX3VzZVN0YXRlNjgiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTY5IiwiX3VzZVN0YXRlNzAiLCJtb2RhbERlbGV0ZU9wZW5Mb2FkaW5nIiwic2V0TW9kYWxEZWxldGVPcGVuTG9hZGluZyIsImhhbmRsZURlbGV0ZU9wZW5Mb2FkaW5nIiwic2V0VGltZW91dCIsImhhbmRsZURlbGV0ZUNsb3NlTG9hZGluZyIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxNSIsInBlcnNvbiIsImRhdGVOb3RpZmljYXRpb24iLCJEYXRlIiwicG9zdCIsIm9uU3RhdHVzVXBkYXRlIiwiX3JlZjE2IiwiQ29udmVydGVkIiwiSXBSZWxhdGVkIiwiaGFuZGxlUXR5IiwiX3JlZjE3IiwiaGFuZGxlRGVsZXRlVXBkYXRlIiwiX3JlZjE4IiwicHJldiIsImFsZXJ0IiwiX3g1IiwiX3VzZVN0YXRlNzEiLCJfdXNlU3RhdGU3MiIsInVwZGF0ZVMiLCJzZXRVcGRhdGVTIiwiaGFuZGxlT3BlbkFkZFBheW1lbnQiLCJ0b3RhbFdpdGhUYXgiLCJjdXJyZW50UGFpZFVTRCIsInBheW1lbnRzIiwicCIsInBVU0QiLCJwRkMiLCJwUmF0ZSIsInJlbWFpbmluZyIsIm1heCIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImhhbmRsZU9wZW5QYXltZW50SGlzdG9yeSIsIl9yZWYxOSIsImZ1bGxEYXRhIiwiX3g2IiwiaGFuZGxlU2F2ZVBheW1lbnQiLCJfcmVmMjAiLCJhbW91bnRVU0QiLCJ0aGlzUGF5bWVudFRvdGFsVVNEIiwibmV3UGF5bWVudCIsImN1cnJlbnRJUFJlcyIsImxhdGVzdElQRGF0YSIsInVwZGF0ZWRQYXltZW50cyIsInRvdGFsUGFpZFVTRCIsIm5ld1N0YXR1cyIsInJlc3REYXRhIiwiX2V4Y2x1ZGVkNCIsInN0YXR1cyIsIl94NyIsImhhbmRsZURlbGV0ZVBheW1lbnQiLCJfcmVmMjEiLCJwYXltZW50SWQiLCJ3aW5kb3ciLCJjb25maXJtIiwiX2V4Y2x1ZGVkNSIsIl94OCIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0Iiwib3BlbjEiLCJzZXRPcGVuMSIsInRvZ2dsZURyYXdlciIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJtaW5XaWR0aCIsImZsZXgiLCJyZW5kZXJDZWxsIiwicGFyYW1zIiwidHlwZSIsInZhbHVlR2V0dGVyIiwidG90YWxQYWlkIiwiaXNGdWxseVBhaWQiLCJzdGF0dXNJc1BhaWQiLCJ0b0xvd2VyQ2FzZSIsImVmZmVjdGl2ZWx5UGFpZCIsImhhc1BheW1lbnRzIiwiZGlzcGxheSIsImdhcCIsImFsaWduSXRlbXMiLCJvbkNsaWNrIiwiZm9udFdlaWdodCIsInRvVXBwZXJDYXNlIiwiX3BhcmFtcyRyb3ckdG90YWxGQyIsInRvdGFsRkMiLCJyZXBsYWNlIiwicmVzdCIsInRpdGxlIiwiZGlzYWJsZWQiLCJ0byIsImN1cnNvciIsImNvbXBvbmVudFJlZiIsImhhbmRsZVByaW50IiwiY29udGVudCIsImN1cnJlbnQiLCJzeCIsInByIiwiZWRnZSIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsImZsb2F0IiwibWFyZ2luIiwicGFnaW5hdGlvbk1vZGUiLCJyb3dDb3VudCIsInBhZ2luYXRpb24iLCJwYWdlU2l6ZSIsIm9uUGFnZUNoYW5nZSIsInJvd3MiLCJzbG90cyIsInRvb2xiYXIiLCJvblJvd1NlbGVjdGlvbk1vZGVsQ2hhbmdlIiwibmV3U2VsZWN0aW9uIiwic2xvdFByb3BzIiwic2hvd1F1aWNrRmlsdGVyIiwicHJpbnRPcHRpb25zIiwiZGlzYWJsZVRvb2xiYXJCdXR0b24iLCJnZXRSb3dDbGFzc05hbWUiLCJpbmNsdWRlcyIsImNoZWNrYm94U2VsZWN0aW9uIiwiZGlzYWJsZURlbnNpdHlTZWxlY3RvciIsInJvd1NlbGVjdGlvbk1vZGVsIiwib25GaWx0ZXJNb2RlbENoYW5nZSIsIm9uQ29sdW1uVmlzaWJpbGl0eU1vZGVsQ2hhbmdlIiwicGFkZGluZyIsImNvdW50Iiwib25DaGFuZ2UiLCJoYW5kbGVEZWxldGUiLCJpIiwib25DbG9zZSIsInRleHRBbGlnbiIsInhzIiwibWQiLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJib3JkZXIiLCJtYiIsInBsYWNlbWVudCIsInJlZiIsIm1hcmdpbkJvdHRvbSIsImJyYW5jaElkIiwiY29udGFpbmVyIiwidGV4dFRyYW5zZm9ybSIsInNpemUiLCJrZXkiLCJpdGVtUmF0ZSIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiVGF1eCIsInRvdGFsQW1vdW50IiwidG90YWxBbW91bnRVU0QiLCJjdXJyZW5jeSIsImZjQ29udmVydFRvVXNkVG90YWwiLCJpc05hTiIsImNvbFNwYW4iLCJtYXJnaW5Ub3AiLCJpZHgiLCJhbGlnbiIsImJvcmRlclJhZGl1cyIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJtdWx0aWxpbmUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwidGFyZ2V0IiwibGFiZWwiLCJmdWxsV2lkdGgiLCJhdXRvRm9jdXMiLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJJbnB1dExhYmVsUHJvcHMiLCJzaHJpbmsiLCJCdXR0b24iLCJXYXJuaW5nQW1iZXJJY29uIiwiQ2xvc2VJY29uIiwiYm9yZGVyVG9wIiwiY29uZmlybVRleHQiLCJzZXRDb25maXJtVGV4dCIsImlzRGlzYWJsZWQiLCJzZXRJc0Rpc2FibGVkIiwib25Db25maXJtIiwibXIiLCJib3JkZXJDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=