"use strict";
exports.id = "src_js_AdminView1_PageView_EstimateView_MakePurchaseConvertToProject_js";
exports.ids = ["src_js_AdminView1_PageView_EstimateView_MakePurchaseConvertToProject_js"];
exports.modules = {

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

/***/ "./node_modules/@mui/icons-material/esm/Edit.js"
/*!******************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Edit.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
}), 'Edit'));

/***/ },

/***/ "./src/js/AdminView1/PageView/EstimateView/MakePurchaseConvertToProject.js"
/*!*********************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EstimateView/MakePurchaseConvertToProject.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SidebarDash1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SidebarDash1 */ "./src/js/component/SidebarDash1.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _ProjectView_ProjectFormView2__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../ProjectView/ProjectFormView2 */ "./src/js/AdminView1/PageView/ProjectView/ProjectFormView2.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["children"],
  _excluded5 = ["children"];
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













































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var DownTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"].tooltip)]: {
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
var style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
function MakePurchaseConvertToProject() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_45__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_45__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_46__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_46__.setUser)({
              userName: Name,
              role: Role
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_46__.logOut)());
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_46__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_38__["default"])(),
      itemName: {},
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemAmount: 0,
      itemCost: 0,
      totalAmount: 0,
      discount: 0,
      percentage: 0,
      itemBuy: 0,
      itemWeight: "",
      totalGenerale: 0,
      totalCost: 0,
      stock: 0
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    SetItems = _useState2[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    inputValue2 = _React$useState4[0],
    setInputValue2 = _React$useState4[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    purchaseAmount1 = _useState4[0],
    setPurchaseAmount1 = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    purchaseAmount2 = _useState6[0],
    setPurchaseAmount2 = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    noteInfo = _useState8[0],
    setNoteInfo = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    estimateDefect = _useState0[0],
    setEstimateDefect = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    estimateSubject = _useState10[0],
    setEstimateSubject = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    projects = _useState12[0],
    setProject = _useState12[1];
  var status = 'Estimated';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchProject = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/projects"));
          if ((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.data) {
            setProject(res.data.data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchProject() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchProject();
  }, []);
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    customerName = _useState14[0],
    setCustomerName = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    customerName1 = _useState16[0],
    setCustomerName1 = _useState16[1];
  var purchaseDate = dayjs__WEBPACK_IMPORTED_MODULE_43___default()(Date.now());
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    projectName = _useState18[0],
    setProjectName = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    purchaseNumber = _useState20[0],
    setPurchaseNumber = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    description = _useState22[0],
    setDescription = _useState22[1];
  var dateComment = new Date();
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    ItemInformation = _useState24[0],
    setItemInformation = _useState24[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var _res$data2, _res$data3;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/get-last-saved-purchase"));
          var num = res.data && res.data.purchaseNumber ? parseInt(((_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.purchaseNumber) || ((_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.purchaseNumber) || 0) : 0;
          setPurchaseNumber(num + 1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchlastNumber() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchlastNumber();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchItem = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/item"));
          setItemInformation(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchItem() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchItem();
  }, []);
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState26 = _slicedToArray(_useState25, 2),
    CustomerNameInfo = _useState26[0],
    setCustomerNameInfo = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState28 = _slicedToArray(_useState27, 2),
    invoiceName = _useState28[0],
    setInvoiceName = _useState28[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var _res$data4;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/get-estimation/").concat(id));
          if ((_res$data4 = res.data) !== null && _res$data4 !== void 0 && _res$data4.data) {
            var _estData$customerName;
            var estData = res.data.data;
            setCustomerNameInfo(((_estData$customerName = estData.customerName) === null || _estData$customerName === void 0 ? void 0 : _estData$customerName.customerName) || '');
            if (estData.items) {
              SetItems(estData.items);
            }
            setInvoiceName(estData.estimateName || '');
            setNoteInfo(estData.noteInfo || '');
            setEstimateSubject(estData.estimateSubject || '');
            setEstimateDefect(estData.estimateDefect || '');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchData();
  }, [id]);
  //addItem
  var addItem = () => {
    SetItems([...items, {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_38__["default"])(),
      itemName: {},
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemAmount: 0,
      itemCost: 0,
      totalAmount: 0,
      discount: 0,
      percentage: 0,
      itemBuy: 0,
      itemWeight: "",
      totalGenerale: 0,
      totalCost: 0,
      stock: 0
    }]);
  };
  var addItemWhite = () => {
    SetItems([...items, {
      newDescription: "",
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_38__["default"])(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemAmount: 0,
      itemCost: 0,
      totalAmount: 0,
      discount: 0,
      percentage: 0,
      itemBuy: 0,
      itemWeight: "",
      totalGenerale: 0,
      totalCost: 0,
      stock: 0,
      itemOut: 0,
      newItemOut: 0
    }]);
  };
  var handleChangeItem = (idRow, newValue) => {
    var selectedOptions = newValue;
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
        itemName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemName
      },
      itemCost: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemCostPrice,
      itemDescription: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemDescription,
      itemRate: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemSellingPrice,
      stock: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemQuantity
    }) : row));
  };
  var handleChange = (e, i) => {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var list = [...items];
    list[i][name] = value.toUpperCase();
    if (list[i]['itemDiscount'] > 5) {
      list[i]['itemDiscount'] = 5;
    }
    list[i]['totalAmount'] = Math.round(list[i]['itemQty'] * list[i]['itemRate'] * 100) / 100;
    list[i]['totalCost'] = Math.round(list[i]['itemQty'] * list[i]['itemCost'] * 100) / 100;
    list[i]['discount'] = list[i]['totalAmount'] * list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount'] / 100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount'] - list[i]['percentage']) * 100) / 100;
    list[i]['totalGenerale'] = Math.round(list[i]['itemCost'] * list[i]['itemBuy'] * 100) / 100;
    SetItems(list);
  };
  {/** Item InFO */}
  var handleShowAutocomplete = idRow => {
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: null,
        itemName: null
      },
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemAmount: 0,
      itemCost: 0,
      totalAmount: 0,
      discount: 0,
      percentage: 0,
      itemBuy: 0,
      itemWeight: "",
      totalGenerale: 0,
      totalCost: 0,
      stock: 0,
      itemOut: 0,
      newItemOut: 0
    }) : row));
  };
  var handleShowAutocompleteDescription = idRow => {
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        itemName: 'empty'
      }
    }) : row));
  };
  var deleteItem = idRow => {
    SetItems(items => items.filter(Item => Item.idRow !== idRow));
  };
  var filterItemInformation = ItemInformation.filter(option => !items.find(row => {
    var _row$itemName;
    return option._id === ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName._id) && option.typeItem === "Goods";
  }));
  var handleDragEnd = result => {
    if (!result.destination) {
      return;
    }
    var newItems = [...items];
    var _newItems$splice = newItems.splice(result.source.index, 1),
      _newItems$splice2 = _slicedToArray(_newItems$splice, 1),
      removed = _newItems$splice2[0];
    newItems.splice(result.destination.index, 0, removed);
    SetItems(newItems);
  };

  //Calculate the total
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result1 = items.reduce((sum, row) => sum + row.totalCost, 0);
    setPurchaseAmount1(result1.toFixed(2));
    var result2 = items.reduce((sum, row) => sum + row.totalGenerale, 0);
    setPurchaseAmount2(result2.toFixed(2));
  }, [items]);
  var handleChangeProject = newValue => {
    var selectedOptions = projects.find(option => option === newValue);
    setProjectName({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      projectName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.projectName
    });
    setDescription(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.description);
    setCustomerName(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.customerName);
    setCustomerName1(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.customerName.customerName);
  };
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    openAutocomplete1 = _useState30[0],
    setOpenAutocomplete1 = _useState30[1];
  var handleOpenOpenAutocomplete1 = e => {
    e.stopPropagation();
    setOpenAutocomplete1(true);
  };
  var handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  {/*** Item Start */}
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    openItemUpdate = _useState32[0],
    setOpenItemUpdate = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState34 = _slicedToArray(_useState33, 2),
    idItem = _useState34[0],
    setIdItem = _useState34[1];
  var handleOpenItemUpdate = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (id) {
      setOpenItemUpdate(true);
      setIdItem(id);
    });
    return function handleOpenItemUpdate(_x) {
      return _ref12.apply(this, arguments);
    };
  }();
  var handleCloseItemUpdate = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* () {
      setOpenItemUpdate(false);
      if (idItem) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/get-item/").concat(idItem));
          SetItems(items => items.map(row => {
            var _row$itemName2;
            return ((_row$itemName2 = row.itemName) === null || _row$itemName2 === void 0 ? void 0 : _row$itemName2._id) === res.data.data._id ? _objectSpread(_objectSpread({}, row), {}, {
              itemName: {
                _id: res.data.data._id,
                itemName: res.data.data.itemName
              },
              itemDescription: res.data.data.itemDescription,
              itemCost: res.data.data.itemCostPrice,
              itemRate: res.data.data.itemSellingPrice,
              stock: res.data.data.itemQuantity,
              totalAmount: row.itemQty * res.data.data.itemSellingPrice,
              discount: row.itemQty * res.data.data.itemSellingPrice * row.itemDiscount,
              percentage: row.itemQty * res.data.data.itemSellingPrice * row.itemDiscount / 100,
              itemAmount: row.itemQty * res.data.data.itemSellingPrice - row.itemQty * res.data.data.itemSellingPrice * row.itemDiscount / 100,
              totalCost: row.itemQty * res.data.data.itemCostPrice,
              totalGenerale: res.data.data.itemCostPrice * row.itemBuy
            }) : row;
          }));
        } catch (error) {}
      }
    });
    return function handleCloseItemUpdate() {
      return _ref13.apply(this, arguments);
    };
  }();
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    openAutocomplete2 = _useState36[0],
    setOpenAutocomplete2 = _useState36[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
  };
  var handleCreateItem = newItem => {
    setItemInformation([newItem, ...ItemInformation]);
  };
  {/*** Item End */}
  var handleCreateProject = newProject => {
    setProject([newProject]);
  };
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    open1 = _useState38[0],
    setOpen1 = _useState38[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseBack = () => {
    setOpen1(false);
  };
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    loading = _useState40[0],
    setLoading = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    loadingOpenModal = _useState42[0],
    setLoadingOpenModal = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    ErrorOpenModal = _useState44[0],
    setErrorOpenModal = _useState44[1];
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
    window.location.reload;
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  var handleDecision = navigate => {
    //Navigate Based on th Decision
    if (navigate === 'previous') {
      window.history.back();
    } else if (navigate === 'stay') {
      handleClose();
    }
  };
  var handleSubmitStatusUpdate = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* (ReferenceInfo) {
      var data = {
        status: 'Converted',
        ReferenceName: ReferenceInfo
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/update-estimation/").concat(id), data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
    return function handleSubmitStatusUpdate(_x2) {
      return _ref14.apply(this, arguments);
    };
  }();
  var purchaseName = "PUR-00" + purchaseNumber;
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState46 = _slicedToArray(_useState45, 2),
    idInvoice = _useState46[0],
    setIdInvoice = _useState46[1];
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: 'Pur-' + ReferenceInfoNumber + ' And ' + projectName.projectName + ' For ' + customerName.customerName,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x3, _x4) {
      return _ref15.apply(this, arguments);
    };
  }();
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState48 = _slicedToArray(_useState47, 2),
    saving = _useState48[0],
    setSaving = _useState48[1];
  var handleConvertInvoiceToPurchase = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var data = {
        customerName,
        projectName,
        purchaseNumber,
        purchaseDate,
        items,
        noteInfo,
        estimateDefect,
        estimateSubject,
        description,
        ReferenceName: id,
        purchaseName,
        Position: 'Second',
        purchaseAmount1,
        purchaseAmount2,
        status
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/create-purchase"), data);
        if (res) {
          // Open Loading View
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.purchaseNumber;
          handleOpen();
          setIdInvoice(res.data.data._id);
          // Status update is critical — await it so quotation shows 'Converted'
          try {
            yield handleSubmitStatusUpdate(ReferenceInfo);
          } catch (e) {
            console.warn('Status update failed:', e);
          }
          // Notification is non-blocking
          try {
            handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
          } catch (e) {
            console.warn('Notification failed:', e);
          }
        } else {
          alert('An Error as Occur');
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleConvertInvoiceToPurchase(_x5) {
      return _ref16.apply(this, arguments);
    };
  }();
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    sideBar = _React$useState6[0],
    setSideBar = _React$useState6[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_24__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_23__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_28__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Convert to Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_44__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_58__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_57__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_23__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_29__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_26__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash1__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_23__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_27__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleConvertInvoiceToPurchase
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_10__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    id: "customerName",
    name: "customerName",
    label: "Customer Name",
    value: CustomerNameInfo,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disableClearable: true,
    options: projects,
    getOptionLabel: option => option.projectName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], props, " ", option.customerName.customerName, " | ", option.projectName, " | ", option.description),
    onChange: (e, newValue) => {
      handleChangeProject(newValue);
    },
    inputValue: inputValue2,
    onInputChange: (event, newInputValue) => {
      setInputValue2(newInputValue);
    },
    filterOptions: (options, _ref17) => {
      var inputValue = _ref17.inputValue;
      return options.filter(option => option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) || option.projectName.toLowerCase().includes(inputValue.toLowerCase()) || option.description.toLowerCase().includes(inputValue.toLowerCase()));
    },
    PaperComponent: _ref18 => {
      var children = _ref18.children,
        other = _objectWithoutProperties(_ref18, _excluded4);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, other, {
        sx: {
          backgroundColor: 'white',
          left: '0',
          marginTop: '10px'
        }
      }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: e => handleOpenOpenAutocomplete1(e),
        disabled: user.data.role === 'User',
        onMouseDown: e => e.preventDefault(),
        className: "btnCustomer7",
        style: {
          width: '100%'
        }
      }, "ADD NEW Project")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, params, {
      label: "Project Name",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_40__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_41__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_39__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_42__.DatePicker, {
    required: true,
    name: "purchaseDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_43___default()(purchaseDate),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "purchaseNumber"
  }, "Purchase Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "number",
    name: "purchaseNumber",
    value: purchaseNumber,
    label: "Purchase Number",
    onChange: e => setPurchaseNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "PUR-00")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    required: true,
    id: "customerName",
    name: "customerName",
    label: "Customer Name",
    value: customerName1,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    id: "description",
    name: "description",
    label: "Description",
    value: description,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'block',
      position: 'fixed',
      zIndex: 1,
      float: 'right',
      right: '-5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: addItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: addItemWhite
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], {
    className: "btn1",
    style: {
      backgroundColor: 'gray',
      fontSize: '40px'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_55__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "center"
  }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "center"
  }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "center"
  }, "Unit Price", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "center"
  }, "Total", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "center"
  }, "Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "center"
  }, "Total", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "center"
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_55__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_55__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
    ref: provided.innerRef
  }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "newDescription",
    id: "newDescription",
    value: Item.newDescription,
    onChange: e => handleChange(e, i),
    size: "small",
    disabled: user.data.role === 'User',
    sx: {
      width: '100%',
      backgroundColor: 'white',
      fontSize: 12
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
    title: "Delete",
    sx: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => deleteItem(Item.idRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      height: '100px'
    }
  }, Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    hidden: Item.itemName ? Item.itemName.itemName === 'empty' : '',
    sx: {
      fontSize: '23px'
    }
  }, Item.itemName ? Item.itemName.itemName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "itemDescription",
    id: "itemDescription",
    value: Item.itemDescription,
    multiline: true,
    rows: 3,
    onChange: e => handleChange(e, i),
    size: "small",
    disabled: user.data.role !== 'CEO',
    sx: {
      width: '440px',
      backgroundColor: 'white',
      fontSize: 12
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => handleShowAutocomplete(Item.idRow),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), Item.itemName._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Edit",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => handleOpenItemUpdate(Item.itemName._id),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disableClearable: true,
    options: filterItemInformation,
    getOptionLabel: option => option.itemName + '/' + option.itemBrand,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], props, option.itemName + '/' + option.itemBrand),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({
      multiline: true,
      rows: 4
    }, params, {
      required: true
    })),
    inputValue: inputValue,
    onInputChange: (event, newInputValue) => {
      setInputValue(newInputValue);
    },
    filterOptions: (options, _ref19) => {
      var inputValue = _ref19.inputValue;
      return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
    },
    onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
    size: "small",
    PaperComponent: _ref20 => {
      var children = _ref20.children,
        other = _objectWithoutProperties(_ref20, _excluded5);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, other, {
        sx: {
          backgroundColor: 'white',
          left: '0',
          marginTop: '10px'
        }
      }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: e => handleOpenOpenAutocomplete2(e),
        disabled: user.data.role === 'User',
        onMouseDown: e => e.preventDefault(),
        className: "btnCustomer7",
        style: {
          width: '100%'
        }
      }, "ADD NEW Item")));
    },
    sx: {
      width: '470px',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => handleShowAutocompleteDescription(Item.idRow),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: Item.itemDescription !== '',
    name: "itemQty",
    id: "itemQty",
    onChange: e => handleChange(e, i),
    size: "small",
    value: Item.itemQty,
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "itemCost",
    id: "itemCost",
    disabled: user.data.role !== 'CEO',
    value: Item.itemCost,
    onChange: e => handleChange(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    id: "totalPurchase",
    style: {
      width: '100px'
    }
  }, Item.totalCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    id: "totalBuy"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "itemBuy",
    id: "itemBuy",
    onChange: e => handleChange(e, i),
    value: Item.itemBuy,
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    id: "totalGeneralPurchase",
    style: {
      width: '100px'
    }
  }, Item.totalGenerale.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
    title: "Delete",
    sx: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => deleteItem(Item.idRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  })))))))), provided.placeholder)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 4,
    style: {
      textAlign: 'center'
    }
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, purchaseAmount1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, purchaseAmount2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: open1,
    onClose: handleCloseBack,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_51__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Do you want to stop creating Invoice ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost")), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate('/EstimateViewAdmin'),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handleCloseBack,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_17__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_36__.NavLink, {
    to: "/PurchasesViewAdminAll/".concat(idInvoice),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_17__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, "Project name can only be created once for purchase")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: openAutocomplete1,
    onClose: handleCloseOpenAutocomplete1,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style2), {}, {
      width: 800
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleCloseOpenAutocomplete1,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_51__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '600px',
      padding: '20px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectView_ProjectFormView2__WEBPACK_IMPORTED_MODULE_56__["default"], {
    onCreateOption: handleCreateProject,
    onEstimate: id,
    onClose: handleCloseOpenAutocomplete1
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: openAutocomplete2,
    onClose: handleCloseOpenAutocomplete2,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style2), {}, {
      width: 800
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleCloseOpenAutocomplete2,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_51__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '600px',
      padding: '20px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_52__["default"], {
    onCreateOption: handleCreateItem,
    onClose: handleCloseOpenAutocomplete2
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: openItemUpdate,
    onClose: handleCloseItemUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style2), {}, {
      width: 800
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleCloseItemUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_51__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '600px',
      padding: '20px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_53__["default"], {
    onClose: handleCloseItemUpdate,
    id: idItem
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MakePurchaseConvertToProject);

/***/ },

/***/ "./src/js/component/SidebarDash1.js"
/*!******************************************!*\
  !*** ./src/js/component/SidebarDash1.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_SidebarNew_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/SidebarNew.scss */ "./src/js/css/SidebarNew.scss");
/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Dashboard */ "./node_modules/@mui/icons-material/Dashboard.js");
/* harmony import */ var _mui_icons_material_PermIdentity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/PermIdentity */ "./node_modules/@mui/icons-material/PermIdentity.js");
/* harmony import */ var _mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ListAlt */ "./node_modules/@mui/icons-material/ListAlt.js");
/* harmony import */ var _mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Description */ "./node_modules/@mui/icons-material/Description.js");
/* harmony import */ var _mui_icons_material_Receipt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Receipt */ "./node_modules/@mui/icons-material/Receipt.js");
/* harmony import */ var _mui_icons_material_RequestQuote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/RequestQuote */ "./node_modules/@mui/icons-material/RequestQuote.js");
/* harmony import */ var _mui_icons_material_MonetizationOn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/MonetizationOn */ "./node_modules/@mui/icons-material/MonetizationOn.js");
/* harmony import */ var _mui_icons_material_Engineering__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Engineering */ "./node_modules/@mui/icons-material/Engineering.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/ShoppingBagOutlined.js");
/* harmony import */ var _mui_icons_material_RoomPreferences__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/RoomPreferences */ "./node_modules/@mui/icons-material/RoomPreferences.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ "./node_modules/@mui/icons-material/MoreVert.js");




















function SidebarDash1() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Dashboard"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_PermIdentity__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Customer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Store"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_RequestQuote__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Quotation"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Invoice"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_MonetizationOn__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Payment"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Daily Expenses"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_RoomPreferences__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Project"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Receipt__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Purchases Request"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Engineering__WEBPACK_IMPORTED_MODULE_9__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Maintenance"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_15__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "More"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarDash1);

/***/ },

/***/ "./node_modules/number-to-words/src/index.js"
/*!***************************************************!*\
  !*** ./node_modules/number-to-words/src/index.js ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

 

module.exports = {
    toOrdinal: __webpack_require__(/*! ./toOrdinal */ "./node_modules/number-to-words/src/toOrdinal.js"),
    toWords: __webpack_require__(/*! ./toWords */ "./node_modules/number-to-words/src/toWords.js"),
    toWordsOrdinal: __webpack_require__(/*! ./toWordsOrdinal */ "./node_modules/number-to-words/src/toWordsOrdinal.js")
};


/***/ },

/***/ "./node_modules/number-to-words/src/isFinite.js"
/*!******************************************************!*\
  !*** ./node_modules/number-to-words/src/isFinite.js ***!
  \******************************************************/
(module) {



// Simplified https://gist.github.com/marlun78/885eb0021e980c6ce0fb
function isFinite(value) {
    return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
}

module.exports = isFinite;


/***/ },

/***/ "./node_modules/number-to-words/src/isSafeNumber.js"
/*!**********************************************************!*\
  !*** ./node_modules/number-to-words/src/isSafeNumber.js ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var MAX_SAFE_INTEGER = __webpack_require__(/*! ./maxSafeInteger */ "./node_modules/number-to-words/src/maxSafeInteger.js");

function isSafeNumber(value) {
    return typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER;
}

module.exports = isSafeNumber;


/***/ },

/***/ "./node_modules/number-to-words/src/makeOrdinal.js"
/*!*********************************************************!*\
  !*** ./node_modules/number-to-words/src/makeOrdinal.js ***!
  \*********************************************************/
(module) {



var ENDS_WITH_DOUBLE_ZERO_PATTERN = /(hundred|thousand|(m|b|tr|quadr)illion)$/;
var ENDS_WITH_TEEN_PATTERN = /teen$/;
var ENDS_WITH_Y_PATTERN = /y$/;
var ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN = /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/;
var ordinalLessThanThirteen = {
    zero: 'zeroth',
    one: 'first',
    two: 'second',
    three: 'third',
    four: 'fourth',
    five: 'fifth',
    six: 'sixth',
    seven: 'seventh',
    eight: 'eighth',
    nine: 'ninth',
    ten: 'tenth',
    eleven: 'eleventh',
    twelve: 'twelfth'
};

/**
 * Converts a number-word into an ordinal number-word.
 * @example makeOrdinal('one') => 'first'
 * @param {string} words
 * @returns {string}
 */
function makeOrdinal(words) {
    // Ends with *00 (100, 1000, etc.) or *teen (13, 14, 15, 16, 17, 18, 19)
    if (ENDS_WITH_DOUBLE_ZERO_PATTERN.test(words) || ENDS_WITH_TEEN_PATTERN.test(words)) {
        return words + 'th';
    }
    // Ends with *y (20, 30, 40, 50, 60, 70, 80, 90)
    else if (ENDS_WITH_Y_PATTERN.test(words)) {
        return words.replace(ENDS_WITH_Y_PATTERN, 'ieth');
    }
    // Ends with one through twelve
    else if (ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN.test(words)) {
        return words.replace(ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN, replaceWithOrdinalVariant);
    }
    return words;
}

function replaceWithOrdinalVariant(match, numberWord) {
    return ordinalLessThanThirteen[numberWord];
}

module.exports = makeOrdinal;


/***/ },

/***/ "./node_modules/number-to-words/src/maxSafeInteger.js"
/*!************************************************************!*\
  !*** ./node_modules/number-to-words/src/maxSafeInteger.js ***!
  \************************************************************/
(module) {



var MAX_SAFE_INTEGER = 9007199254740991;

module.exports = MAX_SAFE_INTEGER;


/***/ },

/***/ "./node_modules/number-to-words/src/toOrdinal.js"
/*!*******************************************************!*\
  !*** ./node_modules/number-to-words/src/toOrdinal.js ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var isFinite = __webpack_require__(/*! ./isFinite */ "./node_modules/number-to-words/src/isFinite.js");
var isSafeNumber = __webpack_require__(/*! ./isSafeNumber */ "./node_modules/number-to-words/src/isSafeNumber.js");

/**
 * Converts an integer into a string with an ordinal postfix.
 * If number is decimal, the decimals will be removed.
 * @example toOrdinal(12) => '12th'
 * @param {number|string} number
 * @returns {string}
 */
function toOrdinal(number) {
    var num = parseInt(number, 10);

    if (!isFinite(num)) {
        throw new TypeError(
            'Not a finite number: ' + number + ' (' + typeof number + ')'
        );
    }
    if (!isSafeNumber(num)) {
        throw new RangeError(
            'Input is not a safe number, it’s either too large or too small.'
        );
    }
    var str = String(num);
    var lastTwoDigits = Math.abs(num % 100);
    var betweenElevenAndThirteen = lastTwoDigits >= 11 && lastTwoDigits <= 13;
    var lastChar = str.charAt(str.length - 1);
    return str + (betweenElevenAndThirteen ? 'th'
            : lastChar === '1' ? 'st'
            : lastChar === '2' ? 'nd'
            : lastChar === '3' ? 'rd'
            : 'th');
}

module.exports = toOrdinal;


/***/ },

/***/ "./node_modules/number-to-words/src/toWords.js"
/*!*****************************************************!*\
  !*** ./node_modules/number-to-words/src/toWords.js ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var makeOrdinal = __webpack_require__(/*! ./makeOrdinal */ "./node_modules/number-to-words/src/makeOrdinal.js");
var isFinite = __webpack_require__(/*! ./isFinite */ "./node_modules/number-to-words/src/isFinite.js");
var isSafeNumber = __webpack_require__(/*! ./isSafeNumber */ "./node_modules/number-to-words/src/isSafeNumber.js");

var TEN = 10;
var ONE_HUNDRED = 100;
var ONE_THOUSAND = 1000;
var ONE_MILLION = 1000000;
var ONE_BILLION = 1000000000;           //         1.000.000.000 (9)
var ONE_TRILLION = 1000000000000;       //     1.000.000.000.000 (12)
var ONE_QUADRILLION = 1000000000000000; // 1.000.000.000.000.000 (15)
var MAX = 9007199254740992;             // 9.007.199.254.740.992 (15)

var LESS_THAN_TWENTY = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

var TENTHS_LESS_THAN_HUNDRED = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

/**
 * Converts an integer into words.
 * If number is decimal, the decimals will be removed.
 * @example toWords(12) => 'twelve'
 * @param {number|string} number
 * @param {boolean} [asOrdinal] - Deprecated, use toWordsOrdinal() instead!
 * @returns {string}
 */
function toWords(number, asOrdinal) {
    var words;
    var num = parseInt(number, 10);

    if (!isFinite(num)) {
        throw new TypeError(
            'Not a finite number: ' + number + ' (' + typeof number + ')'
        );
    }
    if (!isSafeNumber(num)) {
        throw new RangeError(
            'Input is not a safe number, it’s either too large or too small.'
        );
    }
    words = generateWords(num);
    return asOrdinal ? makeOrdinal(words) : words;
}

function generateWords(number) {
    var remainder, word,
        words = arguments[1];

    // We’re done
    if (number === 0) {
        return !words ? 'zero' : words.join(' ').replace(/,$/, '');
    }
    // First run
    if (!words) {
        words = [];
    }
    // If negative, prepend “minus”
    if (number < 0) {
        words.push('minus');
        number = Math.abs(number);
    }

    if (number < 20) {
        remainder = 0;
        word = LESS_THAN_TWENTY[number];

    } else if (number < ONE_HUNDRED) {
        remainder = number % TEN;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
            word += '-' + LESS_THAN_TWENTY[remainder];
            remainder = 0;
        }

    } else if (number < ONE_THOUSAND) {
        remainder = number % ONE_HUNDRED;
        word = generateWords(Math.floor(number / ONE_HUNDRED)) + ' hundred';

    } else if (number < ONE_MILLION) {
        remainder = number % ONE_THOUSAND;
        word = generateWords(Math.floor(number / ONE_THOUSAND)) + ' thousand,';

    } else if (number < ONE_BILLION) {
        remainder = number % ONE_MILLION;
        word = generateWords(Math.floor(number / ONE_MILLION)) + ' million,';

    } else if (number < ONE_TRILLION) {
        remainder = number % ONE_BILLION;
        word = generateWords(Math.floor(number / ONE_BILLION)) + ' billion,';

    } else if (number < ONE_QUADRILLION) {
        remainder = number % ONE_TRILLION;
        word = generateWords(Math.floor(number / ONE_TRILLION)) + ' trillion,';

    } else if (number <= MAX) {
        remainder = number % ONE_QUADRILLION;
        word = generateWords(Math.floor(number / ONE_QUADRILLION)) +
        ' quadrillion,';
    }

    words.push(word);
    return generateWords(remainder, words);
}

module.exports = toWords;


/***/ },

/***/ "./node_modules/number-to-words/src/toWordsOrdinal.js"
/*!************************************************************!*\
  !*** ./node_modules/number-to-words/src/toWordsOrdinal.js ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var makeOrdinal = __webpack_require__(/*! ./makeOrdinal */ "./node_modules/number-to-words/src/makeOrdinal.js");
var toWords = __webpack_require__(/*! ./toWords */ "./node_modules/number-to-words/src/toWords.js");

/**
 * Converts a number into ordinal words.
 * @example toWordsOrdinal(12) => 'twelfth'
 * @param {number|string} number
 * @returns {string}
 */
function toWordsOrdinal(number) {
    var words = toWords(number);
    return makeOrdinal(words);
}

module.exports = toWordsOrdinal;


/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRXN0aW1hdGVWaWV3X01ha2VQdXJjaGFzZUNvbnZlcnRUb1Byb2plY3RfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMsMEJBQTBCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOM0I7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMsVUFBVSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlgsQ0FBa0Q7QUFDUztBQUNwQztBQUNFO0FBQzJCO0FBQ3NCO0FBQ3RCO0FBQzBLO0FBQzlKO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNRO0FBQ0E7QUFDYztBQUNJO0FBQ3hDO0FBQ3dCO0FBQ3lDO0FBQ2Q7QUFDbkQ7QUFDeUM7QUFDYTtBQUNoQjtBQUNKO0FBQ2xDO0FBQzRCO0FBQzBCO0FBQ007QUFDL0I7QUFDK0I7QUFDdkM7QUFDZTtBQUNWO0FBQ0o7QUFDRjtBQUNRO0FBQ0k7QUFDZjtBQUNpQztBQUNiO0FBQ1Q7QUFDUTtBQUU5RCxJQUFNMkUsWUFBWSxHQUFHdEQsMERBQU0sQ0FBQ3VELElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNoRGhGLDBEQUFBLENBQUN5Qiw4REFBTyxFQUFBeUQsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUMvR2E7O0FBRWIsa0JBQWtCLG1CQUFPLENBQUMsd0VBQWU7QUFDekMsY0FBYyxtQkFBTyxDQUFDLGdFQUFXOztBQUVqQztBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0RyYWdJbmRpY2F0b3JSb3VuZGVkLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRWRpdC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvRXN0aW1hdGVWaWV3L01ha2VQdXJjaGFzZUNvbnZlcnRUb1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvU2lkZWJhckRhc2gxLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvaXNGaW5pdGUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL2lzU2FmZU51bWJlci5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvbWFrZU9yZGluYWwuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL21heFNhZmVJbnRlZ2VyLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy90b09yZGluYWwuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL3RvV29yZHMuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL3RvV29yZHNPcmRpbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTExIDE4YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tMi04Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMm0wLTZjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTYgNGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJtMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMm0wIDZjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yXCJcbn0pLCAnRHJhZ0luZGljYXRvclJvdW5kZWQnKTsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0zIDE3LjI1VjIxaDMuNzVMMTcuODEgOS45NGwtMy43NS0zLjc1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGEuOTk1OS45OTU5IDAgMCAwLTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NXpcIlxufSksICdFZGl0Jyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNpZGViYXJEYXNoMSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2gxJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcydcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJ1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgQmFja2Ryb3AsIE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBQYXBlciwgVGFibGVDb250YWluZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgQXV0b2NvbXBsZXRlLCBNb2RhbCwgQm94LCBzdHlsZWQsIE91dGxpbmVkSW5wdXQsIElucHV0QWRvcm5tZW50LCBEaXZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgQWRkLCBEcmFnSW5kaWNhdG9yUm91bmRlZCwgRWRpdCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zLCBOYXZpZ2F0ZSwgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xyXG5pbXBvcnQgQWRkU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IEl0ZW1Gb3JtVmlldzIgZnJvbSAnLi4vSXRlbVZpZXcvSXRlbUZvcm1WaWV3Mic7XHJcbmltcG9ydCBJdGVtVXBkYXRlVmlldzIgZnJvbSAnLi4vSXRlbVZpZXcvSXRlbVVwZGF0ZVZpZXcyJztcclxuaW1wb3J0IG51bWJlclRvV29yZHMgZnJvbSAnbnVtYmVyLXRvLXdvcmRzJ1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIjtcclxuaW1wb3J0IFByb2plY3RGb3JtVmlldzIgZnJvbSAnLi4vUHJvamVjdFZpZXcvUHJvamVjdEZvcm1WaWV3Mic7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5cclxuY29uc3QgTGlnaHRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBEb3duVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBzdHlsZTIgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA4MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5mdW5jdGlvbiBNYWtlUHVyY2hhc2VDb252ZXJ0VG9Qcm9qZWN0KCkge1xyXG4gIGxldCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBbaXRlbXMsIFNldEl0ZW1zXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7fSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQW1vdW50OiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgfVxyXG4gIF0pO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZTIsIHNldElucHV0VmFsdWUyXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcHVyY2hhc2VBbW91bnQxLCBzZXRQdXJjaGFzZUFtb3VudDFdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3B1cmNoYXNlQW1vdW50Miwgc2V0UHVyY2hhc2VBbW91bnQyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtub3RlSW5mbywgc2V0Tm90ZUluZm9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VzdGltYXRlRGVmZWN0LCBzZXRFc3RpbWF0ZURlZmVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXN0aW1hdGVTdWJqZWN0LCBzZXRFc3RpbWF0ZVN1YmplY3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBzdGF0dXMgPSAnRXN0aW1hdGVkJ1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFByb2plY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcHJvamVjdHNgKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YT8uZGF0YSkge1xyXG4gICAgICAgICAgc2V0UHJvamVjdChyZXMuZGF0YS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoUHJvamVjdCgpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgW2N1c3RvbWVyTmFtZSwgc2V0Q3VzdG9tZXJOYW1lXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbY3VzdG9tZXJOYW1lMSwgc2V0Q3VzdG9tZXJOYW1lMV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgcHVyY2hhc2VEYXRlID0gZGF5anMoRGF0ZS5ub3coKSk7XHJcbiAgY29uc3QgW3Byb2plY3ROYW1lLCBzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3B1cmNoYXNlTnVtYmVyLCBzZXRQdXJjaGFzZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBkYXRlQ29tbWVudCA9IG5ldyBEYXRlKClcclxuICBjb25zdCBbSXRlbUluZm9ybWF0aW9uLCBzZXRJdGVtSW5mb3JtYXRpb25dID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hsYXN0TnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1sYXN0LXNhdmVkLXB1cmNoYXNlYClcclxuICAgICAgICBjb25zdCBudW0gPSByZXMuZGF0YSAmJiByZXMuZGF0YS5wdXJjaGFzZU51bWJlciA/IChwYXJzZUludChyZXMuZGF0YT8uZGF0YT8ucHVyY2hhc2VOdW1iZXIgfHwgcmVzLmRhdGE/LnB1cmNoYXNlTnVtYmVyIHx8IDApKSA6IDA7XHJcbiAgICAgICAgc2V0UHVyY2hhc2VOdW1iZXIobnVtICsgMSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hsYXN0TnVtYmVyKClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hJdGVtID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1gKVxyXG4gICAgICAgIHNldEl0ZW1JbmZvcm1hdGlvbihyZXMuZGF0YS5kYXRhLnJldmVyc2UoKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hJdGVtKClcclxuICB9LCBbXSlcclxuICBjb25zdCBbQ3VzdG9tZXJOYW1lSW5mbywgc2V0Q3VzdG9tZXJOYW1lSW5mb10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbaW52b2ljZU5hbWUsIHNldEludm9pY2VOYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVzdGltYXRpb24vJHtpZH1gKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YT8uZGF0YSkge1xyXG4gICAgICAgICAgY29uc3QgZXN0RGF0YSA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICBzZXRDdXN0b21lck5hbWVJbmZvKGVzdERhdGEuY3VzdG9tZXJOYW1lPy5jdXN0b21lck5hbWUgfHwgJycpO1xyXG4gICAgICAgICAgaWYgKGVzdERhdGEuaXRlbXMpIHtcclxuICAgICAgICAgICAgU2V0SXRlbXMoZXN0RGF0YS5pdGVtcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRJbnZvaWNlTmFtZShlc3REYXRhLmVzdGltYXRlTmFtZSB8fCAnJyk7XHJcbiAgICAgICAgICBzZXROb3RlSW5mbyhlc3REYXRhLm5vdGVJbmZvIHx8ICcnKTtcclxuICAgICAgICAgIHNldEVzdGltYXRlU3ViamVjdChlc3REYXRhLmVzdGltYXRlU3ViamVjdCB8fCAnJyk7XHJcbiAgICAgICAgICBzZXRFc3RpbWF0ZURlZmVjdChlc3REYXRhLmVzdGltYXRlRGVmZWN0IHx8ICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW2lkXSlcclxuICAvL2FkZEl0ZW1cclxuICBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xyXG4gICAgU2V0SXRlbXMoWy4uLml0ZW1zLCB7XHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBpdGVtTmFtZToge30sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgIH1dKVxyXG4gIH1cclxuICBjb25zdCBhZGRJdGVtV2hpdGUgPSAoKSA9PiB7XHJcbiAgICBTZXRJdGVtcyhbLi4uaXRlbXMsIHtcclxuICAgICAgbmV3RGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogXCJcIixcclxuICAgICAgICBpdGVtTmFtZTogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgIGl0ZW1Db3N0OiAwLFxyXG4gICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgIGl0ZW1CdXk6IDAsXHJcbiAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgIHRvdGFsR2VuZXJhbGU6IDAsXHJcbiAgICAgIHRvdGFsQ29zdDogMCxcclxuICAgICAgc3RvY2s6IDAsXHJcbiAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICB9XSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUl0ZW0gPSAoaWRSb3csIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBuZXdWYWx1ZVxyXG4gICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1OYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtQ29zdDogc2VsZWN0ZWRPcHRpb25zPy5pdGVtQ29zdFByaWNlLFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IHNlbGVjdGVkT3B0aW9ucz8uaXRlbURlc2NyaXB0aW9uLFxyXG4gICAgICBpdGVtUmF0ZTogc2VsZWN0ZWRPcHRpb25zPy5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICBzdG9jazogc2VsZWN0ZWRPcHRpb25zPy5pdGVtUXVhbnRpdHksXHJcbiAgICB9IDogcm93KSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIGkpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pdGVtc107XHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGlmIChsaXN0W2ldWydpdGVtRGlzY291bnQnXSA+IDUpIHtcclxuICAgICAgbGlzdFtpXVsnaXRlbURpc2NvdW50J10gPSA1XHJcbiAgICB9XHJcbiAgICBsaXN0W2ldWyd0b3RhbEFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbVJhdGUnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxDb3N0J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtQ29zdCddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWydkaXNjb3VudCddID0gbGlzdFtpXVsndG90YWxBbW91bnQnXSAqIGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddO1xyXG4gICAgbGlzdFtpXVsncGVyY2VudGFnZSddID0gbGlzdFtpXVsnZGlzY291bnQnXSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2l0ZW1BbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gLSBsaXN0W2ldWydwZXJjZW50YWdlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsR2VuZXJhbGUnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1Db3N0J10gKiBsaXN0W2ldWydpdGVtQnV5J10pICogMTAwKSAvIDEwMDtcclxuICAgIFNldEl0ZW1zKGxpc3QpO1xyXG4gIH1cclxuICB7LyoqIEl0ZW0gSW5GTyAqLyB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGUgPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBudWxsLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24gPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgaXRlbU5hbWU6ICdlbXB0eSdcclxuICAgICAgfSxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBkZWxldGVJdGVtID0gaWRSb3cgPT4ge1xyXG4gICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMuZmlsdGVyKChJdGVtKSA9PiBJdGVtLmlkUm93ICE9PSBpZFJvdykpO1xyXG4gIH07XHJcbiAgY29uc3QgZmlsdGVySXRlbUluZm9ybWF0aW9uID0gSXRlbUluZm9ybWF0aW9uLmZpbHRlcihvcHRpb24gPT4gIWl0ZW1zLmZpbmQoKHJvdykgPT4gb3B0aW9uLl9pZCA9PT0gcm93Lml0ZW1OYW1lPy5faWQgJiYgb3B0aW9uLnR5cGVJdGVtID09PSBcIkdvb2RzXCIpKVxyXG4gIGNvbnN0IGhhbmRsZURyYWdFbmQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdJdGVtcyA9IFsuLi5pdGVtc107XHJcbiAgICBjb25zdCBbcmVtb3ZlZF0gPSBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW1vdmVkKTtcclxuICAgIFNldEl0ZW1zKG5ld0l0ZW1zKVxyXG4gIH07XHJcblxyXG4gIC8vQ2FsY3VsYXRlIHRoZSB0b3RhbFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQxID0gaXRlbXMucmVkdWNlKChzdW0sIHJvdykgPT4gc3VtICsgcm93LnRvdGFsQ29zdCwgMClcclxuICAgIHNldFB1cmNoYXNlQW1vdW50MShyZXN1bHQxLnRvRml4ZWQoMikpXHJcbiAgICBjb25zdCByZXN1bHQyID0gaXRlbXMucmVkdWNlKChzdW0sIHJvdykgPT4gc3VtICsgcm93LnRvdGFsR2VuZXJhbGUsIDApXHJcbiAgICBzZXRQdXJjaGFzZUFtb3VudDIocmVzdWx0Mi50b0ZpeGVkKDIpKVxyXG4gIH0sIFtpdGVtc10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVByb2plY3QgPSAobmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHByb2plY3RzLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uID09PSBuZXdWYWx1ZSlcclxuICAgIHNldFByb2plY3ROYW1lKHtcclxuICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgcHJvamVjdE5hbWU6IHNlbGVjdGVkT3B0aW9ucz8ucHJvamVjdE5hbWVcclxuICAgIH0pO1xyXG4gICAgc2V0RGVzY3JpcHRpb24oc2VsZWN0ZWRPcHRpb25zPy5kZXNjcmlwdGlvbilcclxuICAgIHNldEN1c3RvbWVyTmFtZShzZWxlY3RlZE9wdGlvbnM/LmN1c3RvbWVyTmFtZSlcclxuICAgIHNldEN1c3RvbWVyTmFtZTEoc2VsZWN0ZWRPcHRpb25zPy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lKVxyXG4gIH1cclxuICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTEsIHNldE9wZW5BdXRvY29tcGxldGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTEgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTEodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTEoZmFsc2UpO1xyXG4gIH07XHJcbiAgey8qKiogSXRlbSBTdGFydCAqLyB9XHJcbiAgY29uc3QgW29wZW5JdGVtVXBkYXRlLCBzZXRPcGVuSXRlbVVwZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lkSXRlbSwgc2V0SWRJdGVtXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5JdGVtVXBkYXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBzZXRPcGVuSXRlbVVwZGF0ZSh0cnVlKTtcclxuICAgIHNldElkSXRlbShpZCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUl0ZW1VcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRPcGVuSXRlbVVwZGF0ZShmYWxzZSk7XHJcbiAgICBpZiAoaWRJdGVtKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWl0ZW0vJHtpZEl0ZW19YClcclxuICAgICAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93Lml0ZW1OYW1lPy5faWQgPT09IHJlcy5kYXRhLmRhdGEuX2lkID8ge1xyXG4gICAgICAgICAgLi4ucm93LFxyXG4gICAgICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICAgICAgX2lkOiByZXMuZGF0YS5kYXRhLl9pZCxcclxuICAgICAgICAgICAgaXRlbU5hbWU6IHJlcy5kYXRhLmRhdGEuaXRlbU5hbWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpdGVtRGVzY3JpcHRpb246IHJlcy5kYXRhLmRhdGEuaXRlbURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgaXRlbUNvc3Q6IHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSxcclxuICAgICAgICAgIGl0ZW1SYXRlOiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogcmVzLmRhdGEuZGF0YS5pdGVtUXVhbnRpdHksXHJcbiAgICAgICAgICB0b3RhbEFtb3VudDogcm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBkaXNjb3VudDogKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQsXHJcbiAgICAgICAgICBwZXJjZW50YWdlOiAoKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQpIC8gMTAwLFxyXG4gICAgICAgICAgaXRlbUFtb3VudDogKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAtICgoKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQpIC8gMTAwKSxcclxuICAgICAgICAgIHRvdGFsQ29zdDogcm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgICAgICB0b3RhbEdlbmVyYWxlOiByZXMuZGF0YS5kYXRhLml0ZW1Db3N0UHJpY2UgKiByb3cuaXRlbUJ1eVxyXG4gICAgICAgIH0gOiByb3cpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgW29wZW5BdXRvY29tcGxldGUyLCBzZXRPcGVuQXV0b2NvbXBsZXRlMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDcmVhdGVJdGVtID0gKG5ld0l0ZW0pID0+IHtcclxuICAgIHNldEl0ZW1JbmZvcm1hdGlvbihbbmV3SXRlbSwgLi4uSXRlbUluZm9ybWF0aW9uXSlcclxuICB9XHJcblxyXG4gIHsvKioqIEl0ZW0gRW5kICovIH1cclxuICBjb25zdCBoYW5kbGVDcmVhdGVQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcclxuICAgIHNldFByb2plY3QoW25ld1Byb2plY3RdKVxyXG4gIH1cclxuICBjb25zdCBbb3BlbjEsIHNldE9wZW4xXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkJhY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuMSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQmFjayA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcblxyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG5cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZDtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVjaXNpb24gPSAobmF2aWdhdGUpID0+IHtcclxuICAgIC8vTmF2aWdhdGUgQmFzZWQgb24gdGggRGVjaXNpb25cclxuICAgIGlmIChuYXZpZ2F0ZSA9PT0gJ3ByZXZpb3VzJykge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRlID09PSAnc3RheScpIHtcclxuICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0U3RhdHVzVXBkYXRlID0gYXN5bmMgKFJlZmVyZW5jZUluZm8pID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHN0YXR1czogJ0NvbnZlcnRlZCcsXHJcbiAgICAgIFJlZmVyZW5jZU5hbWU6IFJlZmVyZW5jZUluZm9cclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtZXN0aW1hdGlvbi8ke2lkfWAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgcHVyY2hhc2VOYW1lID0gXCJQVVItMDBcIiArIHB1cmNoYXNlTnVtYmVyXHJcbiAgY29uc3QgW2lkSW52b2ljZSwgc2V0SWRJbnZvaWNlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoUmVmZXJlbmNlSW5mbywgUmVmZXJlbmNlSW5mb051bWJlcikgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBSZWZlcmVuY2VJbmZvLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgQ3JlYXRlZCAnLFxyXG4gICAgICByZWFzb246ICdQdXItJyArIFJlZmVyZW5jZUluZm9OdW1iZXIgKyAnIEFuZCAnICsgcHJvamVjdE5hbWUucHJvamVjdE5hbWUgKyAnIEZvciAnICsgY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZSxcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogZGF0ZUNvbW1lbnRcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgaGFuZGxlQ29udmVydEludm9pY2VUb1B1cmNoYXNlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNhdmluZygndHJ1ZScpXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBjdXN0b21lck5hbWUsXHJcbiAgICAgIHByb2plY3ROYW1lLFxyXG4gICAgICBwdXJjaGFzZU51bWJlcixcclxuICAgICAgcHVyY2hhc2VEYXRlLFxyXG4gICAgICBpdGVtcywgbm90ZUluZm8sIGVzdGltYXRlRGVmZWN0LCBlc3RpbWF0ZVN1YmplY3QsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBSZWZlcmVuY2VOYW1lOiBpZCxcclxuICAgICAgcHVyY2hhc2VOYW1lLFxyXG4gICAgICBQb3NpdGlvbjogJ1NlY29uZCcsXHJcbiAgICAgIHB1cmNoYXNlQW1vdW50MSxcclxuICAgICAgcHVyY2hhc2VBbW91bnQyLFxyXG4gICAgICBzdGF0dXNcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLXB1cmNoYXNlYCwgZGF0YSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAvLyBPcGVuIExvYWRpbmcgVmlld1xyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm8gPSByZXMuZGF0YS5kYXRhLl9pZFxyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm9OdW1iZXIgPSByZXMuZGF0YS5kYXRhLnB1cmNoYXNlTnVtYmVyXHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICAgIHNldElkSW52b2ljZShyZXMuZGF0YS5kYXRhLl9pZClcclxuICAgICAgICAvLyBTdGF0dXMgdXBkYXRlIGlzIGNyaXRpY2FsIOKAlCBhd2FpdCBpdCBzbyBxdW90YXRpb24gc2hvd3MgJ0NvbnZlcnRlZCdcclxuICAgICAgICB0cnkgeyBhd2FpdCBoYW5kbGVTdWJtaXRTdGF0dXNVcGRhdGUoUmVmZXJlbmNlSW5mbyk7IH0gY2F0Y2ggKGUpIHsgY29uc29sZS53YXJuKCdTdGF0dXMgdXBkYXRlIGZhaWxlZDonLCBlKTsgfVxyXG4gICAgICAgIC8vIE5vdGlmaWNhdGlvbiBpcyBub24tYmxvY2tpbmdcclxuICAgICAgICB0cnkgeyBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oUmVmZXJlbmNlSW5mbywgUmVmZXJlbmNlSW5mb051bWJlcik7IH0gY2F0Y2ggKGUpIHsgY29uc29sZS53YXJuKCdOb3RpZmljYXRpb24gZmFpbGVkOicsIGUpOyB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ0FuIEVycm9yIGFzIE9jY3VyJyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHNldFNhdmluZygnJylcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb252ZXJ0IHRvIFB1cmNoYXNlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaDEgLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDQgfX0gPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVDb252ZXJ0SW52b2ljZVRvUHVyY2hhc2V9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9IGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nY3VzdG9tZXJOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tZXJOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0N1c3RvbWVyIE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Q3VzdG9tZXJOYW1lSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9ID5cclxuICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9qZWN0c31cclxuICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24ucHJvamVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9PiB7b3B0aW9uLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWV9IHwge29wdGlvbi5wcm9qZWN0TmFtZX0gfCB7b3B0aW9uLmRlc2NyaXB0aW9ufTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZVByb2plY3QobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50LCBuZXdJbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUyKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9eyhvcHRpb25zLCB7IGlucHV0VmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgUGFwZXJDb21wb25lbnQ9eyh7IGNoaWxkcmVuLCAuLi5vdGhlciB9KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5vdGhlcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBsZWZ0OiAnMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUxKGUpfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30gb25Nb3VzZURvd249eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI3JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIFByb2plY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIlByb2plY3QgTmFtZVwiIHJlcXVpcmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3B1cmNoYXNlRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMocHVyY2hhc2VEYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9J3B1cmNoYXNlTnVtYmVyJz5QdXJjaGFzZSBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3B1cmNoYXNlTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHVyY2hhc2VOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdQdXJjaGFzZSBOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHVyY2hhc2VOdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPSdzdGFydCc+UFVSLTAwPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2N1c3RvbWVyTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2N1c3RvbWVyTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDdXN0b21lciBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyTmFtZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6IDEsIGZsb2F0OiAncmlnaHQnLCByaWdodDogJy01cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQWRkXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbVdoaXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JywgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSW5mbzEwJyBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnLTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249XCJjZW50ZXJcIj5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj1cImNlbnRlclwiPlF0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj1cImNlbnRlclwiPlVuaXQgUHJpY2U8c3Bhbj4kPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj1cImNlbnRlclwiPlRvdGFsPHNwYW4+JDwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249XCJjZW50ZXJcIj5CdXk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249XCJjZW50ZXJcIj5Ub3RhbDxzcGFuPiQ8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGFsaWduPVwiY2VudGVyXCI+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkcm9wcGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e0l0ZW0uaWRSb3d9IGRyYWdnYWJsZUlkPXtgZHJvcHBhYmxlJHtJdGVtLmlkUm93fWB9IGluZGV4PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+PERyYWdJbmRpY2F0b3JSb3VuZGVkIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs2fT48VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25ld0Rlc2NyaXB0aW9uJyBpZD0nbmV3RGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLm5ld0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+PERyYWdJbmRpY2F0b3JSb3VuZGVkIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBoZWlnaHQ6ICcxMDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBoaWRkZW49e0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID09PSAnZW1wdHknIDogJyd9IHN4PXt7IGZvbnRTaXplOiAnMjNweCcgfX0+e0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvVXBwZXJDYXNlKCkgOiAnJ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EZXNjcmlwdGlvbicgaWQ9J2l0ZW1EZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNDQwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93QXV0b2NvbXBsZXRlKEl0ZW0uaWRSb3cpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5faWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJFZGl0XCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3Blbkl0ZW1VcGRhdGUoSXRlbS5pdGVtTmFtZS5faWQpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVySXRlbUluZm9ybWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30+e29wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9IHsuLi5wYXJhbXN9IHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9eyhvcHRpb25zLCB7IGlucHV0VmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbUJyYW5kLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VJdGVtKEl0ZW0uaWRSb3csIG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNDcwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbihJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtJdGVtLml0ZW1EZXNjcmlwdGlvbiAhPT0gJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVF0eScgaWQ9J2l0ZW1RdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUXR5fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1Db3N0JyBpZD0naXRlbUNvc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtQ29zdH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPSd0b3RhbFB1cmNoYXNlJyBzdHlsZT17eyB3aWR0aDogJzEwMHB4JyB9fT57SXRlbS50b3RhbENvc3QudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9J3RvdGFsQnV5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1CdXknIGlkPSdpdGVtQnV5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1CdXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD0ndG90YWxHZW5lcmFsUHVyY2hhc2UnIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19PntJdGVtLnRvdGFsR2VuZXJhbGUudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiA+ICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs0fSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlRvdGFsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwdXJjaGFzZUFtb3VudDEudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4tPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwdXJjaGFzZUFtb3VudDIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2F2aW5nICE9PSAndHJ1ZScgPyA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPiA6IDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlNhdmluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW4xfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlQmFja31cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzeD17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EbyB5b3Ugd2FudCB0byBzdG9wIGNyZWF0aW5nIEludm9pY2UgPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlIDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj4gSWYgeW91IHN0b3AgY3JlYXRpbmcgd2l0aG91dCBzYXZpbmcsIGFsbCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0PC9zcGFuPjwvcD4gIDwvR3JpZD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL0VzdGltYXRlVmlld0FkbWluJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+WWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ObzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9QdXJjaGFzZXNWaWV3QWRtaW5BbGwvJHtpZEludm9pY2V9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5TYXZpbmcgRmFpbGVkPC9oMj5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9J3R4dDEnIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+UHJvamVjdCBuYW1lIGNhbiBvbmx5IGJlIGNyZWF0ZWQgb25jZSBmb3IgcHVyY2hhc2U8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBwYWRkaW5nOiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPFByb2plY3RGb3JtVmlldzIgb25DcmVhdGVPcHRpb249e2hhbmRsZUNyZWF0ZVByb2plY3R9IG9uRXN0aW1hdGU9e2lkfSBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2MDBweCcsIHBhZGRpbmc6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICA8SXRlbUZvcm1WaWV3MiBvbkNyZWF0ZU9wdGlvbj17aGFuZGxlQ3JlYXRlSXRlbX0gb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuSXRlbVVwZGF0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUl0ZW1VcGRhdGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlSXRlbVVwZGF0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzYwMHB4JywgcGFkZGluZzogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgIDxJdGVtVXBkYXRlVmlldzIgb25DbG9zZT17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfSBpZD17aWRJdGVtfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ha2VQdXJjaGFzZUNvbnZlcnRUb1Byb2plY3RcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Nzcy9TaWRlYmFyTmV3LnNjc3MnXHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBQZXJtSWRlbnRpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVybUlkZW50aXR5JztcclxuaW1wb3J0IExpc3RBbHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTGlzdEFsdCc7XHJcbmltcG9ydCBEZXNjcmlwdGlvbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZXNjcmlwdGlvbic7XHJcbmltcG9ydCBSZWNlaXB0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1JlY2VpcHQnO1xyXG5pbXBvcnQgTW92aW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vdmluZyc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5ncyc7XHJcbmltcG9ydCBJbnNlcnREcml2ZUZpbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW5zZXJ0RHJpdmVGaWxlJztcclxuaW1wb3J0IFJlc3RvcmVQYWdlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jlc3RvcmVQYWdlJztcclxuaW1wb3J0IFJlcXVlc3RRdW90ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXF1ZXN0UXVvdGUnO1xyXG5pbXBvcnQgTW9uZXRpemF0aW9uT25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9uZXRpemF0aW9uT24nO1xyXG5pbXBvcnQgRW5naW5lZXJpbmdJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW5naW5lZXJpbmcnO1xyXG5pbXBvcnQgeyBFeHBsaWNpdCwgU2hvcHBpbmdCYWdPdXRsaW5lZCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUm9vbVByZWZlcmVuY2VzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jvb21QcmVmZXJlbmNlcyc7XHJcbmltcG9ydCB7IExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUGF5bWVudEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QYXltZW50JztcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0JztcclxuZnVuY3Rpb24gU2lkZWJhckRhc2gxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEYXNoYm9hcmRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGFzaGJvYXJkXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxQZXJtSWRlbnRpdHlJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ3VzdG9tZXJcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSAgPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TGlzdEFsdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJTdG9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVxdWVzdFF1b3RlSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlF1b3RhdGlvblwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPERlc2NyaXB0aW9uSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkludm9pY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb25ldGl6YXRpb25Pbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQYXltZW50XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8U2hvcHBpbmdCYWdPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhaWx5IEV4cGVuc2VzXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJvb21QcmVmZXJlbmNlc0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQcm9qZWN0XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVjZWlwdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQdXJjaGFzZXMgUmVxdWVzdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8RW5naW5lZXJpbmdJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTWFpbnRlbmFuY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJNb3JlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckRhc2gxIiwiJ3VzZSBzdHJpY3QnOyBcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdG9PcmRpbmFsOiByZXF1aXJlKCcuL3RvT3JkaW5hbCcpLFxuICAgIHRvV29yZHM6IHJlcXVpcmUoJy4vdG9Xb3JkcycpLFxuICAgIHRvV29yZHNPcmRpbmFsOiByZXF1aXJlKCcuL3RvV29yZHNPcmRpbmFsJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFNpbXBsaWZpZWQgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbWFybHVuNzgvODg1ZWIwMDIxZTk4MGM2Y2UwZmJcbmZ1bmN0aW9uIGlzRmluaXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuICEodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCB2YWx1ZSAhPT0gdmFsdWUgfHwgdmFsdWUgPT09IEluZmluaXR5IHx8IHZhbHVlID09PSAtSW5maW5pdHkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRmluaXRlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IHJlcXVpcmUoJy4vbWF4U2FmZUludGVnZXInKTtcblxuZnVuY3Rpb24gaXNTYWZlTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTWF0aC5hYnModmFsdWUpIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTYWZlTnVtYmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRU5EU19XSVRIX0RPVUJMRV9aRVJPX1BBVFRFUk4gPSAvKGh1bmRyZWR8dGhvdXNhbmR8KG18Ynx0cnxxdWFkcilpbGxpb24pJC87XG52YXIgRU5EU19XSVRIX1RFRU5fUEFUVEVSTiA9IC90ZWVuJC87XG52YXIgRU5EU19XSVRIX1lfUEFUVEVSTiA9IC95JC87XG52YXIgRU5EU19XSVRIX1pFUk9fVEhST1VHSF9UV0VMVkVfUEFUVEVSTiA9IC8oemVyb3xvbmV8dHdvfHRocmVlfGZvdXJ8Zml2ZXxzaXh8c2V2ZW58ZWlnaHR8bmluZXx0ZW58ZWxldmVufHR3ZWx2ZSkkLztcbnZhciBvcmRpbmFsTGVzc1RoYW5UaGlydGVlbiA9IHtcbiAgICB6ZXJvOiAnemVyb3RoJyxcbiAgICBvbmU6ICdmaXJzdCcsXG4gICAgdHdvOiAnc2Vjb25kJyxcbiAgICB0aHJlZTogJ3RoaXJkJyxcbiAgICBmb3VyOiAnZm91cnRoJyxcbiAgICBmaXZlOiAnZmlmdGgnLFxuICAgIHNpeDogJ3NpeHRoJyxcbiAgICBzZXZlbjogJ3NldmVudGgnLFxuICAgIGVpZ2h0OiAnZWlnaHRoJyxcbiAgICBuaW5lOiAnbmludGgnLFxuICAgIHRlbjogJ3RlbnRoJyxcbiAgICBlbGV2ZW46ICdlbGV2ZW50aCcsXG4gICAgdHdlbHZlOiAndHdlbGZ0aCdcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBudW1iZXItd29yZCBpbnRvIGFuIG9yZGluYWwgbnVtYmVyLXdvcmQuXG4gKiBAZXhhbXBsZSBtYWtlT3JkaW5hbCgnb25lJykgPT4gJ2ZpcnN0J1xuICogQHBhcmFtIHtzdHJpbmd9IHdvcmRzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBtYWtlT3JkaW5hbCh3b3Jkcykge1xuICAgIC8vIEVuZHMgd2l0aCAqMDAgKDEwMCwgMTAwMCwgZXRjLikgb3IgKnRlZW4gKDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5KVxuICAgIGlmIChFTkRTX1dJVEhfRE9VQkxFX1pFUk9fUEFUVEVSTi50ZXN0KHdvcmRzKSB8fCBFTkRTX1dJVEhfVEVFTl9QQVRURVJOLnRlc3Qod29yZHMpKSB7XG4gICAgICAgIHJldHVybiB3b3JkcyArICd0aCc7XG4gICAgfVxuICAgIC8vIEVuZHMgd2l0aCAqeSAoMjAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgODAsIDkwKVxuICAgIGVsc2UgaWYgKEVORFNfV0lUSF9ZX1BBVFRFUk4udGVzdCh3b3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHdvcmRzLnJlcGxhY2UoRU5EU19XSVRIX1lfUEFUVEVSTiwgJ2lldGgnKTtcbiAgICB9XG4gICAgLy8gRW5kcyB3aXRoIG9uZSB0aHJvdWdoIHR3ZWx2ZVxuICAgIGVsc2UgaWYgKEVORFNfV0lUSF9aRVJPX1RIUk9VR0hfVFdFTFZFX1BBVFRFUk4udGVzdCh3b3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHdvcmRzLnJlcGxhY2UoRU5EU19XSVRIX1pFUk9fVEhST1VHSF9UV0VMVkVfUEFUVEVSTiwgcmVwbGFjZVdpdGhPcmRpbmFsVmFyaWFudCk7XG4gICAgfVxuICAgIHJldHVybiB3b3Jkcztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVdpdGhPcmRpbmFsVmFyaWFudChtYXRjaCwgbnVtYmVyV29yZCkge1xuICAgIHJldHVybiBvcmRpbmFsTGVzc1RoYW5UaGlydGVlbltudW1iZXJXb3JkXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYWtlT3JkaW5hbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1BWF9TQUZFX0lOVEVHRVI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaXNGaW5pdGUnKTtcbnZhciBpc1NhZmVOdW1iZXIgPSByZXF1aXJlKCcuL2lzU2FmZU51bWJlcicpO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGludGVnZXIgaW50byBhIHN0cmluZyB3aXRoIGFuIG9yZGluYWwgcG9zdGZpeC5cbiAqIElmIG51bWJlciBpcyBkZWNpbWFsLCB0aGUgZGVjaW1hbHMgd2lsbCBiZSByZW1vdmVkLlxuICogQGV4YW1wbGUgdG9PcmRpbmFsKDEyKSA9PiAnMTJ0aCdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b09yZGluYWwobnVtYmVyKSB7XG4gICAgdmFyIG51bSA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuXG4gICAgaWYgKCFpc0Zpbml0ZShudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnTm90IGEgZmluaXRlIG51bWJlcjogJyArIG51bWJlciArICcgKCcgKyB0eXBlb2YgbnVtYmVyICsgJyknXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmICghaXNTYWZlTnVtYmVyKG51bSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICAnSW5wdXQgaXMgbm90IGEgc2FmZSBudW1iZXIsIGl04oCZcyBlaXRoZXIgdG9vIGxhcmdlIG9yIHRvbyBzbWFsbC4nXG4gICAgICAgICk7XG4gICAgfVxuICAgIHZhciBzdHIgPSBTdHJpbmcobnVtKTtcbiAgICB2YXIgbGFzdFR3b0RpZ2l0cyA9IE1hdGguYWJzKG51bSAlIDEwMCk7XG4gICAgdmFyIGJldHdlZW5FbGV2ZW5BbmRUaGlydGVlbiA9IGxhc3RUd29EaWdpdHMgPj0gMTEgJiYgbGFzdFR3b0RpZ2l0cyA8PSAxMztcbiAgICB2YXIgbGFzdENoYXIgPSBzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gc3RyICsgKGJldHdlZW5FbGV2ZW5BbmRUaGlydGVlbiA/ICd0aCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICcxJyA/ICdzdCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICcyJyA/ICduZCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICczJyA/ICdyZCdcbiAgICAgICAgICAgIDogJ3RoJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9PcmRpbmFsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWFrZU9yZGluYWwgPSByZXF1aXJlKCcuL21ha2VPcmRpbmFsJyk7XG52YXIgaXNGaW5pdGUgPSByZXF1aXJlKCcuL2lzRmluaXRlJyk7XG52YXIgaXNTYWZlTnVtYmVyID0gcmVxdWlyZSgnLi9pc1NhZmVOdW1iZXInKTtcblxudmFyIFRFTiA9IDEwO1xudmFyIE9ORV9IVU5EUkVEID0gMTAwO1xudmFyIE9ORV9USE9VU0FORCA9IDEwMDA7XG52YXIgT05FX01JTExJT04gPSAxMDAwMDAwO1xudmFyIE9ORV9CSUxMSU9OID0gMTAwMDAwMDAwMDsgICAgICAgICAgIC8vICAgICAgICAgMS4wMDAuMDAwLjAwMCAoOSlcbnZhciBPTkVfVFJJTExJT04gPSAxMDAwMDAwMDAwMDAwOyAgICAgICAvLyAgICAgMS4wMDAuMDAwLjAwMC4wMDAgKDEyKVxudmFyIE9ORV9RVUFEUklMTElPTiA9IDEwMDAwMDAwMDAwMDAwMDA7IC8vIDEuMDAwLjAwMC4wMDAuMDAwLjAwMCAoMTUpXG52YXIgTUFYID0gOTAwNzE5OTI1NDc0MDk5MjsgICAgICAgICAgICAgLy8gOS4wMDcuMTk5LjI1NC43NDAuOTkyICgxNSlcblxudmFyIExFU1NfVEhBTl9UV0VOVFkgPSBbXG4gICAgJ3plcm8nLCAnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJywgJ2ZpdmUnLCAnc2l4JywgJ3NldmVuJywgJ2VpZ2h0JywgJ25pbmUnLCAndGVuJyxcbiAgICAnZWxldmVuJywgJ3R3ZWx2ZScsICd0aGlydGVlbicsICdmb3VydGVlbicsICdmaWZ0ZWVuJywgJ3NpeHRlZW4nLCAnc2V2ZW50ZWVuJywgJ2VpZ2h0ZWVuJywgJ25pbmV0ZWVuJ1xuXTtcblxudmFyIFRFTlRIU19MRVNTX1RIQU5fSFVORFJFRCA9IFtcbiAgICAnemVybycsICd0ZW4nLCAndHdlbnR5JywgJ3RoaXJ0eScsICdmb3J0eScsICdmaWZ0eScsICdzaXh0eScsICdzZXZlbnR5JywgJ2VpZ2h0eScsICduaW5ldHknXG5dO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGludGVnZXIgaW50byB3b3Jkcy5cbiAqIElmIG51bWJlciBpcyBkZWNpbWFsLCB0aGUgZGVjaW1hbHMgd2lsbCBiZSByZW1vdmVkLlxuICogQGV4YW1wbGUgdG9Xb3JkcygxMikgPT4gJ3R3ZWx2ZSdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthc09yZGluYWxdIC0gRGVwcmVjYXRlZCwgdXNlIHRvV29yZHNPcmRpbmFsKCkgaW5zdGVhZCFcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRvV29yZHMobnVtYmVyLCBhc09yZGluYWwpIHtcbiAgICB2YXIgd29yZHM7XG4gICAgdmFyIG51bSA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuXG4gICAgaWYgKCFpc0Zpbml0ZShudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnTm90IGEgZmluaXRlIG51bWJlcjogJyArIG51bWJlciArICcgKCcgKyB0eXBlb2YgbnVtYmVyICsgJyknXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmICghaXNTYWZlTnVtYmVyKG51bSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICAnSW5wdXQgaXMgbm90IGEgc2FmZSBudW1iZXIsIGl04oCZcyBlaXRoZXIgdG9vIGxhcmdlIG9yIHRvbyBzbWFsbC4nXG4gICAgICAgICk7XG4gICAgfVxuICAgIHdvcmRzID0gZ2VuZXJhdGVXb3JkcyhudW0pO1xuICAgIHJldHVybiBhc09yZGluYWwgPyBtYWtlT3JkaW5hbCh3b3JkcykgOiB3b3Jkcztcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVXb3JkcyhudW1iZXIpIHtcbiAgICB2YXIgcmVtYWluZGVyLCB3b3JkLFxuICAgICAgICB3b3JkcyA9IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIFdl4oCZcmUgZG9uZVxuICAgIGlmIChudW1iZXIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICF3b3JkcyA/ICd6ZXJvJyA6IHdvcmRzLmpvaW4oJyAnKS5yZXBsYWNlKC8sJC8sICcnKTtcbiAgICB9XG4gICAgLy8gRmlyc3QgcnVuXG4gICAgaWYgKCF3b3Jkcykge1xuICAgICAgICB3b3JkcyA9IFtdO1xuICAgIH1cbiAgICAvLyBJZiBuZWdhdGl2ZSwgcHJlcGVuZCDigJxtaW51c+KAnVxuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIHdvcmRzLnB1c2goJ21pbnVzJyk7XG4gICAgICAgIG51bWJlciA9IE1hdGguYWJzKG51bWJlcik7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlciA8IDIwKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IDA7XG4gICAgICAgIHdvcmQgPSBMRVNTX1RIQU5fVFdFTlRZW251bWJlcl07XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9IVU5EUkVEKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIFRFTjtcbiAgICAgICAgd29yZCA9IFRFTlRIU19MRVNTX1RIQU5fSFVORFJFRFtNYXRoLmZsb29yKG51bWJlciAvIFRFTildO1xuICAgICAgICAvLyBJbiBjYXNlIG9mIHJlbWFpbmRlciwgd2UgbmVlZCB0byBoYW5kbGUgaXQgaGVyZSB0byBiZSBhYmxlIHRvIGFkZCB0aGUg4oCcLeKAnVxuICAgICAgICBpZiAocmVtYWluZGVyKSB7XG4gICAgICAgICAgICB3b3JkICs9ICctJyArIExFU1NfVEhBTl9UV0VOVFlbcmVtYWluZGVyXTtcbiAgICAgICAgICAgIHJlbWFpbmRlciA9IDA7XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1RIT1VTQU5EKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9IVU5EUkVEO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9IVU5EUkVEKSkgKyAnIGh1bmRyZWQnO1xuXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPCBPTkVfTUlMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfVEhPVVNBTkQ7XG4gICAgICAgIHdvcmQgPSBnZW5lcmF0ZVdvcmRzKE1hdGguZmxvb3IobnVtYmVyIC8gT05FX1RIT1VTQU5EKSkgKyAnIHRob3VzYW5kLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9CSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9NSUxMSU9OO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9NSUxMSU9OKSkgKyAnIG1pbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1RSSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9CSUxMSU9OO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9CSUxMSU9OKSkgKyAnIGJpbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1FVQURSSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9UUklMTElPTjtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfVFJJTExJT04pKSArICcgdHJpbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDw9IE1BWCkge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfUVVBRFJJTExJT047XG4gICAgICAgIHdvcmQgPSBnZW5lcmF0ZVdvcmRzKE1hdGguZmxvb3IobnVtYmVyIC8gT05FX1FVQURSSUxMSU9OKSkgK1xuICAgICAgICAnIHF1YWRyaWxsaW9uLCc7XG4gICAgfVxuXG4gICAgd29yZHMucHVzaCh3b3JkKTtcbiAgICByZXR1cm4gZ2VuZXJhdGVXb3JkcyhyZW1haW5kZXIsIHdvcmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1dvcmRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWFrZU9yZGluYWwgPSByZXF1aXJlKCcuL21ha2VPcmRpbmFsJyk7XG52YXIgdG9Xb3JkcyA9IHJlcXVpcmUoJy4vdG9Xb3JkcycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyIGludG8gb3JkaW5hbCB3b3Jkcy5cbiAqIEBleGFtcGxlIHRvV29yZHNPcmRpbmFsKDEyKSA9PiAndHdlbGZ0aCdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1dvcmRzT3JkaW5hbChudW1iZXIpIHtcbiAgICB2YXIgd29yZHMgPSB0b1dvcmRzKG51bWJlcik7XG4gICAgcmV0dXJuIG1ha2VPcmRpbmFsKHdvcmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1dvcmRzT3JkaW5hbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2gxIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkRlbGV0ZUljb24iLCJCYWNrZHJvcCIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJQYXBlciIsIlRhYmxlQ29udGFpbmVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsIkF1dG9jb21wbGV0ZSIsIk1vZGFsIiwiQm94Iiwic3R5bGVkIiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiRGl2aWRlciIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkFkZCIsIkRyYWdJbmRpY2F0b3JSb3VuZGVkIiwiRWRpdCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsIk5hdmlnYXRlIiwiTmF2TGluayIsInY0IiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImRheWpzIiwiQXJyb3dCYWNrIiwiU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIiwiQWRkU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvYWRlciIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2dvdXQiLCJDbG9zZSIsIkl0ZW1Gb3JtVmlldzIiLCJJdGVtVXBkYXRlVmlldzIiLCJudW1iZXJUb1dvcmRzIiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJhZ2dhYmxlIiwiRHJvcHBhYmxlIiwiUHJvamVjdEZvcm1WaWV3MiIsIk1lc3NhZ2VBZG1pblZpZXciLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsIkxpZ2h0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiQmxhY2tUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJEb3duVG9vbHRpcCIsIl9yZWY1IiwiX2V4Y2x1ZGVkMyIsIl9yZWY2Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJzdHlsZTIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY3Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWY4Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiTWFrZVB1cmNoYXNlQ29udmVydFRvUHJvamVjdCIsIl91c2VQYXJhbXMiLCJpZCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY5IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfdXNlU3RhdGUiLCJpZFJvdyIsIml0ZW1OYW1lIiwiaXRlbURlc2NyaXB0aW9uIiwiaXRlbURpc2NvdW50IiwiaXRlbVF0eSIsIml0ZW1SYXRlIiwiaXRlbUFtb3VudCIsIml0ZW1Db3N0IiwidG90YWxBbW91bnQiLCJkaXNjb3VudCIsInBlcmNlbnRhZ2UiLCJpdGVtQnV5IiwiaXRlbVdlaWdodCIsInRvdGFsR2VuZXJhbGUiLCJ0b3RhbENvc3QiLCJzdG9jayIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIml0ZW1zIiwiU2V0SXRlbXMiLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsImlucHV0VmFsdWUyIiwic2V0SW5wdXRWYWx1ZTIiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInB1cmNoYXNlQW1vdW50MSIsInNldFB1cmNoYXNlQW1vdW50MSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwicHVyY2hhc2VBbW91bnQyIiwic2V0UHVyY2hhc2VBbW91bnQyIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJub3RlSW5mbyIsInNldE5vdGVJbmZvIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJlc3RpbWF0ZURlZmVjdCIsInNldEVzdGltYXRlRGVmZWN0IiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwiZXN0aW1hdGVTdWJqZWN0Iiwic2V0RXN0aW1hdGVTdWJqZWN0IiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInByb2plY3RzIiwic2V0UHJvamVjdCIsInN0YXR1cyIsImZldGNoUHJvamVjdCIsIl9yZWYwIiwiX3JlcyRkYXRhIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImN1c3RvbWVyTmFtZSIsInNldEN1c3RvbWVyTmFtZSIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJjdXN0b21lck5hbWUxIiwic2V0Q3VzdG9tZXJOYW1lMSIsInB1cmNoYXNlRGF0ZSIsIkRhdGUiLCJub3ciLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwicHJvamVjdE5hbWUiLCJzZXRQcm9qZWN0TmFtZSIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJwdXJjaGFzZU51bWJlciIsInNldFB1cmNoYXNlTnVtYmVyIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJkYXRlQ29tbWVudCIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJJdGVtSW5mb3JtYXRpb24iLCJzZXRJdGVtSW5mb3JtYXRpb24iLCJmZXRjaGxhc3ROdW1iZXIiLCJfcmVmMSIsIl9yZXMkZGF0YTIiLCJfcmVzJGRhdGEzIiwibnVtIiwicGFyc2VJbnQiLCJmZXRjaEl0ZW0iLCJfcmVmMTAiLCJyZXZlcnNlIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsIkN1c3RvbWVyTmFtZUluZm8iLCJzZXRDdXN0b21lck5hbWVJbmZvIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsImludm9pY2VOYW1lIiwic2V0SW52b2ljZU5hbWUiLCJmZXRjaERhdGEiLCJfcmVmMTEiLCJfcmVzJGRhdGE0IiwiX2VzdERhdGEkY3VzdG9tZXJOYW1lIiwiZXN0RGF0YSIsImVzdGltYXRlTmFtZSIsImFkZEl0ZW0iLCJhZGRJdGVtV2hpdGUiLCJuZXdEZXNjcmlwdGlvbiIsIl9pZCIsIml0ZW1PdXQiLCJuZXdJdGVtT3V0IiwiaGFuZGxlQ2hhbmdlSXRlbSIsIm5ld1ZhbHVlIiwic2VsZWN0ZWRPcHRpb25zIiwibWFwIiwicm93IiwiaXRlbUNvc3RQcmljZSIsIml0ZW1TZWxsaW5nUHJpY2UiLCJpdGVtUXVhbnRpdHkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiaSIsIl9lJHRhcmdldCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImxpc3QiLCJ0b1VwcGVyQ2FzZSIsIk1hdGgiLCJyb3VuZCIsImhhbmRsZVNob3dBdXRvY29tcGxldGUiLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24iLCJkZWxldGVJdGVtIiwiZmlsdGVyIiwiSXRlbSIsImZpbHRlckl0ZW1JbmZvcm1hdGlvbiIsIm9wdGlvbiIsImZpbmQiLCJfcm93JGl0ZW1OYW1lIiwidHlwZUl0ZW0iLCJoYW5kbGVEcmFnRW5kIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJuZXdJdGVtcyIsIl9uZXdJdGVtcyRzcGxpY2UiLCJzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsIl9uZXdJdGVtcyRzcGxpY2UyIiwicmVtb3ZlZCIsInJlc3VsdDEiLCJyZWR1Y2UiLCJzdW0iLCJ0b0ZpeGVkIiwicmVzdWx0MiIsImhhbmRsZUNoYW5nZVByb2plY3QiLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwib3BlbkF1dG9jb21wbGV0ZTEiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMSIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTEiLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwib3Blbkl0ZW1VcGRhdGUiLCJzZXRPcGVuSXRlbVVwZGF0ZSIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJpZEl0ZW0iLCJzZXRJZEl0ZW0iLCJoYW5kbGVPcGVuSXRlbVVwZGF0ZSIsIl9yZWYxMiIsIl94IiwiaGFuZGxlQ2xvc2VJdGVtVXBkYXRlIiwiX3JlZjEzIiwiX3JvdyRpdGVtTmFtZTIiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2Iiwib3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVDcmVhdGVJdGVtIiwibmV3SXRlbSIsImhhbmRsZUNyZWF0ZVByb2plY3QiLCJuZXdQcm9qZWN0IiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsIm9wZW4xIiwic2V0T3BlbjEiLCJoYW5kbGVPcGVuQmFjayIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VCYWNrIiwiX3VzZVN0YXRlMzkiLCJfdXNlU3RhdGU0MCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVEZWNpc2lvbiIsImhpc3RvcnkiLCJiYWNrIiwiaGFuZGxlU3VibWl0U3RhdHVzVXBkYXRlIiwiX3JlZjE0IiwiUmVmZXJlbmNlSW5mbyIsIlJlZmVyZW5jZU5hbWUiLCJwdXQiLCJfeDIiLCJwdXJjaGFzZU5hbWUiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2IiwiaWRJbnZvaWNlIiwic2V0SWRJbnZvaWNlIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjE1IiwiUmVmZXJlbmNlSW5mb051bWJlciIsImlkSW5mbyIsInBlcnNvbiIsInJlYXNvbiIsImRhdGVOb3RpZmljYXRpb24iLCJwb3N0IiwibG9nIiwiX3gzIiwiX3g0IiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsInNhdmluZyIsInNldFNhdmluZyIsImhhbmRsZUNvbnZlcnRJbnZvaWNlVG9QdXJjaGFzZSIsIl9yZWYxNiIsIlBvc2l0aW9uIiwid2FybiIsImFsZXJ0IiwiX3g1IiwiX1JlYWN0JHVzZVN0YXRlNSIsIl9SZWFjdCR1c2VTdGF0ZTYiLCJzaWRlQmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZURyYXdlciIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm9uQ2xpY2siLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwicGFkZGluZyIsIml0ZW0iLCJ4cyIsImRpc2FibGVkIiwibGFiZWwiLCJkaXNhYmxlQ2xlYXJhYmxlIiwib3B0aW9ucyIsImdldE9wdGlvbkxhYmVsIiwicmVuZGVyT3B0aW9uIiwib25DaGFuZ2UiLCJvbklucHV0Q2hhbmdlIiwiZXZlbnQiLCJuZXdJbnB1dFZhbHVlIiwiZmlsdGVyT3B0aW9ucyIsIl9yZWYxNyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJQYXBlckNvbXBvbmVudCIsIl9yZWYxOCIsImNoaWxkcmVuIiwib3RoZXIiLCJfZXhjbHVkZWQ0IiwibWFyZ2luVG9wIiwib25Nb3VzZURvd24iLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsInJlcXVpcmVkIiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwiZm9ybWF0IiwiaHRtbEZvciIsInR5cGUiLCJzdGFydEFkb3JubWVudCIsImZsb2F0IiwicmlnaHQiLCJ0aXRsZSIsInBsYWNlbWVudCIsIm9uRHJhZ0VuZCIsImFsaWduIiwiZHJvcHBhYmxlSWQiLCJwcm92aWRlZCIsInNuYXBzaG90IiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsImtleSIsImRyYWdnYWJsZUlkIiwiZHJhZ2dhYmxlUHJvcHMiLCJ1bmRlZmluZWQiLCJGcmFnbWVudCIsImRyYWdIYW5kbGVQcm9wcyIsImNvbFNwYW4iLCJzaXplIiwiY3Vyc29yIiwiaGlkZGVuIiwibXVsdGlsaW5lIiwicm93cyIsIml0ZW1CcmFuZCIsIl9yZWYxOSIsIl9yZWYyMCIsIl9leGNsdWRlZDUiLCJyZXBsYWNlIiwicGxhY2Vob2xkZXIiLCJ0ZXh0QWxpZ24iLCJ0b1N0cmluZyIsIm9uQ2xvc2UiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJnYXAiLCJ0byIsIm92ZXJmbG93WSIsIm9uQ3JlYXRlT3B0aW9uIiwib25Fc3RpbWF0ZSIsIk91dGxldCIsIkxpbmsiLCJ1c2VMb2NhdGlvbiIsIkRhc2hib2FyZEljb24iLCJQZXJtSWRlbnRpdHlJY29uIiwiTGlzdEFsdEljb24iLCJEZXNjcmlwdGlvbkljb24iLCJSZWNlaXB0SWNvbiIsIk1vdmluZ0ljb24iLCJTZXR0aW5nc0ljb24iLCJJbnNlcnREcml2ZUZpbGVJY29uIiwiUmVzdG9yZVBhZ2VJY29uIiwiUmVxdWVzdFF1b3RlSWNvbiIsIk1vbmV0aXphdGlvbk9uSWNvbiIsIkVuZ2luZWVyaW5nSWNvbiIsIkV4cGxpY2l0IiwiU2hvcHBpbmdCYWdPdXRsaW5lZCIsIlJvb21QcmVmZXJlbmNlc0ljb24iLCJMaXN0SXRlbUJ1dHRvbiIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIm1ha2VTdHlsZXMiLCJQYXltZW50SWNvbiIsIk1vcmVWZXJ0SWNvbiIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9