"use strict";
exports.id = "src_js_AdminView1_PageView_InvoiceView_MakePurchase_js";
exports.ids = ["src_js_AdminView1_PageView_InvoiceView_MakePurchase_js"];
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

/***/ "./src/js/AdminView1/PageView/InvoiceView/MakePurchase.js"
/*!****************************************************************!*\
  !*** ./src/js/AdminView1/PageView/InvoiceView/MakePurchase.js ***!
  \****************************************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _ProjectView_ProjectFormView2__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../ProjectView/ProjectFormView2 */ "./src/js/AdminView1/PageView/ProjectView/ProjectFormView2.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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
function MakePurchase() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_36__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_36__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_44__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_44__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.setUser)({
              userName: Name,
              role: Role
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.logOut)());
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_37__["default"])(),
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    purchaseAmount1 = _useState4[0],
    setPurchaseAmount1 = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    purchaseAmount2 = _useState6[0],
    setPurchaseAmount2 = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    projects = _useState8[0],
    setProject = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    description = _useState0[0],
    setDescription = _useState0[1];
  var status = 'Make';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchProject = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/projects"));
          setProject(res.data.data);
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
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState10 = _slicedToArray(_useState1, 2),
    customerName = _useState10[0],
    setCustomerName = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    customerName1 = _useState12[0],
    setCustomerName1 = _useState12[1];
  var purchaseDate = dayjs__WEBPACK_IMPORTED_MODULE_42___default()(Date.now());
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    projectName = _useState14[0],
    setProjectName = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    purchaseNumber = _useState16[0],
    setPurchaseNumber = _useState16[1];
  var dateComment = new Date();
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    ItemInformation = _useState18[0],
    setItemInformation = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/get-last-saved-purchase"));
          var num = res.data && res.data.purchaseNumber ? parseInt(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.purchaseNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.purchaseNumber) || 0) : 0;
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
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    CustomerNameInfo = _useState20[0],
    setCustomerNameInfo = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    invoiceName = _useState22[0],
    setInvoiceName = _useState22[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/get-invoice/").concat(id));
          setCustomerNameInfo(res.data.data.customerName.customerName);
          SetItems(res.data.data.items);
          setInvoiceName(res.data.data.invoiceName);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  //addItem
  var addItem = () => {
    SetItems([...items, {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_37__["default"])(),
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
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_37__["default"])(),
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
    var selectedOptions = ItemInformation.find(option => option === newValue);
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
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    openAutocomplete1 = _useState24[0],
    setOpenAutocomplete1 = _useState24[1];
  var handleOpenOpenAutocomplete1 = e => {
    e.stopPropagation();
    setOpenAutocomplete1(true);
  };
  var handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  {/*** Item Start */}
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    openItemUpdate = _useState26[0],
    setOpenItemUpdate = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState28 = _slicedToArray(_useState27, 2),
    idItem = _useState28[0],
    setIdItem = _useState28[1];
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
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    openAutocomplete2 = _useState30[0],
    setOpenAutocomplete2 = _useState30[1];
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
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    open1 = _useState32[0],
    setOpen1 = _useState32[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseBack = () => {
    setOpen1(false);
  };
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    loading = _useState34[0],
    setLoading = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    loadingOpenModal = _useState36[0],
    setLoadingOpenModal = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    ErrorOpenModal = _useState38[0],
    setErrorOpenModal = _useState38[1];
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
  var invoicePurchase = 'Make';
  var handleSubmitStatusUpdate = ReferenceInfo => {
    var data = {
      invoicePurchase,
      ReferenceName2: ReferenceInfo
    };
    axios__WEBPACK_IMPORTED_MODULE_30__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/update-invoice/").concat(id), data);
  };
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
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
    return function handleCreateNotification(_x2, _x3) {
      return _ref14.apply(this, arguments);
    };
  }();
  var purchaseName = "PUR-00" + purchaseNumber;
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState40 = _slicedToArray(_useState39, 2),
    saving = _useState40[0],
    setSaving = _useState40[1];
  var handleConvertInvoiceToPurchase = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var data = {
        customerName,
        projectName,
        purchaseNumber,
        purchaseDate,
        items,
        description,
        ReferenceName2: id,
        purchaseName,
        Position: 'Last',
        purchaseAmount1,
        purchaseAmount2,
        status
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/create-purchase"), data);
        if (res) {
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.purchaseNumber;
          // Open Loading View
          handleOpen();
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
    return function handleConvertInvoiceToPurchase(_x4) {
      return _ref15.apply(this, arguments);
    };
  }();
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_43__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_57__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_56__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_49__["default"], {
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
    onChange: (e, newValue) => {
      handleChangeProject(newValue);
    },
    PaperComponent: _ref16 => {
      var children = _ref16.children,
        other = _objectWithoutProperties(_ref16, _excluded4);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_41__.DatePicker, {
    required: true,
    name: "purchaseDate",
    label: "Date",
    value: purchaseDate,
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
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_54__.DragDropContext, {
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
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_54__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_54__.Draggable, {
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
    filterOptions: (options, _ref17) => {
      var inputValue = _ref17.inputValue;
      return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
    },
    onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
    size: "small",
    PaperComponent: _ref18 => {
      var children = _ref18.children,
        other = _objectWithoutProperties(_ref18, _excluded5);
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
    type: "number",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "itemCost",
    id: "itemCost",
    disabled: user.data.role !== 'CEO',
    value: Item.itemCost,
    type: "number",
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
    type: "number",
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__["default"], {
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
    onClick: () => navigate('/InvoiceViewAdmin'),
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_46__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_47__["default"], {
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
    onClick: () => handleDecision('previous'),
    className: "btnCustomer"
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_46__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_48__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectView_ProjectFormView2__WEBPACK_IMPORTED_MODULE_55__["default"], {
    onCreateOption: handleCreateProject,
    onId: id,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_51__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_52__["default"], {
    onClose: handleCloseItemUpdate,
    id: idItem
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MakePurchase);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfSW52b2ljZVZpZXdfTWFrZVB1cmNoYXNlX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLDBCQUEwQixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjNCOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLFVBQVUsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlgsQ0FBaUQ7QUFDVTtBQUNwQztBQUNFO0FBQzJCO0FBQ3NCO0FBQ3RCO0FBQ2tLO0FBQ3pKO0FBQ2hCO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNRO0FBQ0E7QUFDYztBQUNJO0FBQ3hDO0FBQ3dCO0FBQ3dDO0FBQ2Y7QUFDakQ7QUFDeUM7QUFDYTtBQUNoQjtBQUNKO0FBQ2xDO0FBQzRCO0FBQzBCO0FBQ007QUFDL0I7QUFDK0I7QUFDdkM7QUFDZTtBQUNWO0FBQ0o7QUFDRjtBQUNRO0FBQ0k7QUFDZjtBQUNpQztBQUNiO0FBQ1Q7QUFDUTtBQUU5RCxJQUFNMkUsWUFBWSxHQUFHdEQsMERBQU0sQ0FBQ3VELElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNoRGhGLDBEQUFBLENBQUN5Qiw4REFBTyxFQUFBeUQsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdB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Qyx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDL0dhOztBQUViLGtCQUFrQixtQkFBTyxDQUFDLHdFQUFlO0FBQ3pDLGNBQWMsbUJBQU8sQ0FBQyxnRUFBVzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9EcmFnSW5kaWNhdG9yUm91bmRlZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0VkaXQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0ludm9pY2VWaWV3L01ha2VQdXJjaGFzZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9pc0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvaXNTYWZlTnVtYmVyLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9tYWtlT3JkaW5hbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvbWF4U2FmZUludGVnZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL3RvT3JkaW5hbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvdG9Xb3Jkcy5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvdG9Xb3Jkc09yZGluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTEgMThjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0yLThjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTAtNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJtNiA0YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMm0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTAgNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJcIlxufSksICdEcmFnSW5kaWNhdG9yUm91bmRlZCcpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzV6TTIwLjcxIDcuMDRjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0YS45OTU5Ljk5NTkgMCAwIDAtMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1elwiXG59KSwgJ0VkaXQnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaWRlYmFyRGFzaDEgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoMSc7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnXHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcydcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7QmFja2Ryb3AsIE1lbnVJdGVtLEdyaWQsIEljb25CdXR0b24sUGFwZXIsVGFibGVDb250YWluZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSxBdXRvY29tcGxldGUsTW9kYWwsIEJveCxzdHlsZWQsIE91dGxpbmVkSW5wdXQsIElucHV0QWRvcm5tZW50LERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFRvb2x0aXAse3Rvb2x0aXBDbGFzc2VzfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBBZGQsIERyYWdJbmRpY2F0b3JSb3VuZGVkLCBFZGl0LCBSZW1vdmVDaXJjbGVPdXRsaW5lfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyxOYXZpZ2F0ZSxOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0xvY2FsaXphdGlvblByb3ZpZGVyJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlUGlja2VyJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCBTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TaG9wcGluZ0NhcnRPdXRsaW5lZCc7XHJcbmltcG9ydCBBZGRTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BZGRTaG9wcGluZ0NhcnRPdXRsaW5lZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgSXRlbUZvcm1WaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtRm9ybVZpZXcyJztcclxuaW1wb3J0IEl0ZW1VcGRhdGVWaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtVXBkYXRlVmlldzInO1xyXG5pbXBvcnQgbnVtYmVyVG9Xb3JkcyBmcm9tICdudW1iZXItdG8td29yZHMnXHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5pbXBvcnQgUHJvamVjdEZvcm1WaWV3MiBmcm9tICcuLi9Qcm9qZWN0Vmlldy9Qcm9qZWN0Rm9ybVZpZXcyJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IERvd25Ub29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IHN0eWxlMiA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDgwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcblxyXG5mdW5jdGlvbiBNYWtlUHVyY2hhc2UoKSB7XHJcbiAgICBsZXQge2lkfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2g9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoe3VzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmZXRjaFVzZXIoKVxyXG4gICAgfSxbZGlzcGF0Y2hdKTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgICB9XHJcbiAgICBjb25zdCBbaXRlbXMsIFNldEl0ZW1zXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZFJvdzp2NCgpLFxyXG4gICAgICAgICAgaXRlbU5hbWU6e30sXHJcbiAgICAgICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICBpdGVtRGlzY291bnQ6MCxcclxuICAgICAgICAgIGl0ZW1RdHk6MCxcclxuICAgICAgICAgIGl0ZW1SYXRlOjAsXHJcbiAgICAgICAgICBpdGVtQW1vdW50OjAsXHJcbiAgICAgICAgICBpdGVtQ29zdDowLFxyXG4gICAgICAgICAgdG90YWxBbW91bnQ6MCxcclxuICAgICAgICAgIGRpc2NvdW50OjAsXHJcbiAgICAgICAgICBwZXJjZW50YWdlOjAsXHJcbiAgICAgICAgICBpdGVtQnV5OjAsXHJcbiAgICAgICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICAgICAgdG90YWxHZW5lcmFsZTowLFxyXG4gICAgICAgICAgdG90YWxDb3N0OjAsXHJcbiAgICAgICAgICBzdG9jazogMCxcclxuICAgICAgfVxyXG4gICAgICAgXSk7XHJcbiAgICAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICAgICBjb25zdCBbcHVyY2hhc2VBbW91bnQxLCBzZXRQdXJjaGFzZUFtb3VudDFdID0gdXNlU3RhdGUoMCk7XHJcbiAgICAgICBjb25zdCBbcHVyY2hhc2VBbW91bnQyLCBzZXRQdXJjaGFzZUFtb3VudDJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICAgICBjb25zdCBbcHJvamVjdHMsc2V0UHJvamVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAgICBjb25zdCBbZGVzY3JpcHRpb24sc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgICAgY29uc3Qgc3RhdHVzID0nTWFrZSdcclxuICAgICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaFByb2plY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wcm9qZWN0c2ApIFxyXG4gICAgICAgICAgICBzZXRQcm9qZWN0KHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoUHJvamVjdCgpXHJcbiAgICAgIH0sW10pXHJcbiAgICBjb25zdCBbY3VzdG9tZXJOYW1lLHNldEN1c3RvbWVyTmFtZV09IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtjdXN0b21lck5hbWUxLHNldEN1c3RvbWVyTmFtZTFdPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBwdXJjaGFzZURhdGUgPSBkYXlqcyhEYXRlLm5vdygpKTtcclxuICAgIGNvbnN0IFtwcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWVdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW3B1cmNoYXNlTnVtYmVyLHNldFB1cmNoYXNlTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgZGF0ZUNvbW1lbnQgPSBuZXcgRGF0ZSgpXHJcbiAgICBjb25zdCBbSXRlbUluZm9ybWF0aW9uLHNldEl0ZW1JbmZvcm1hdGlvbl09IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgY29uc3QgZmV0Y2hsYXN0TnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbGFzdC1zYXZlZC1wdXJjaGFzZWApXHJcbiAgICAgICAgY29uc3QgbnVtID0gcmVzLmRhdGEgJiYgcmVzLmRhdGEucHVyY2hhc2VOdW1iZXIgPyAocGFyc2VJbnQocmVzLmRhdGE/LmRhdGE/LnB1cmNoYXNlTnVtYmVyIHx8IHJlcy5kYXRhPy5wdXJjaGFzZU51bWJlciB8fCAwKSkgOiAwO1xyXG4gICAgICAgIHNldFB1cmNoYXNlTnVtYmVyKG51bSArIDEpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZmV0Y2hsYXN0TnVtYmVyKClcclxuICAgICAgICAgICAgICAgICAgfSxbXSlcclxuICAgICAgICAgICAgICAgICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmV0Y2hJdGVtID0gYXN5bmMoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0ICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUluZm9ybWF0aW9uKHJlcy5kYXRhLmRhdGEucmV2ZXJzZSgpKSBcclxuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmZXRjaEl0ZW0oKVxyXG4gICAgICAgICAgICAgICAgICB9LFtdKVxyXG4gIGNvbnN0IFtDdXN0b21lck5hbWVJbmZvLHNldEN1c3RvbWVyTmFtZUluZm9dPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbaW52b2ljZU5hbWUsc2V0SW52b2ljZU5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWludm9pY2UvJHtpZH1gKVxyXG4gICAgICAgIHNldEN1c3RvbWVyTmFtZUluZm8ocmVzLmRhdGEuZGF0YS5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lKTtcclxuICAgICAgICBTZXRJdGVtcyhyZXMuZGF0YS5kYXRhLml0ZW1zKTtcclxuICAgICAgICBzZXRJbnZvaWNlTmFtZShyZXMuZGF0YS5kYXRhLmludm9pY2VOYW1lKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICAgIH0sW10pXHJcbiAgIC8vYWRkSXRlbVxyXG4gICBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xyXG4gICAgU2V0SXRlbXMoWy4uLml0ZW1zLCB7XHJcbiAgICAgIGlkUm93OnY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOnt9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDowLFxyXG4gICAgICBpdGVtUXR5OjAsXHJcbiAgICAgIGl0ZW1SYXRlOjAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6MCxcclxuICAgICAgaXRlbUNvc3Q6MCxcclxuICAgICAgdG90YWxBbW91bnQ6MCxcclxuICAgICAgZGlzY291bnQ6MCxcclxuICAgICAgcGVyY2VudGFnZTowLFxyXG4gICAgICBpdGVtQnV5OjAsXHJcbiAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgIHRvdGFsR2VuZXJhbGU6MCxcclxuICAgICAgdG90YWxDb3N0OjAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gIH1dKVxyXG4gIH1cclxuICBjb25zdCBhZGRJdGVtV2hpdGUgPSAoKSA9PiB7XHJcbiAgICBTZXRJdGVtcyhbLi4uaXRlbXMsIHtcclxuICAgICAgbmV3RGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGlkUm93OnY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOntcclxuICAgICAgICBfaWQ6XCJcIixcclxuICAgICAgICBpdGVtTmFtZTpcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OjAsXHJcbiAgICAgIGl0ZW1RdHk6MCxcclxuICAgICAgaXRlbVJhdGU6MCxcclxuICAgICAgaXRlbUFtb3VudDowLFxyXG4gICAgICBpdGVtQ29zdDowLFxyXG4gICAgICB0b3RhbEFtb3VudDowLFxyXG4gICAgICBkaXNjb3VudDowLFxyXG4gICAgICBwZXJjZW50YWdlOjAsXHJcbiAgICAgIGl0ZW1CdXk6MCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTowLFxyXG4gICAgICB0b3RhbENvc3Q6MCxcclxuICAgICAgc3RvY2s6IDAsXHJcbiAgICAgIGl0ZW1PdXQ6MCxcclxuICAgICAgbmV3SXRlbU91dDowLFxyXG4gICAgICB9XSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUl0ZW0gPSAoaWRSb3csIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBJdGVtSW5mb3JtYXRpb24uZmluZCgob3B0aW9uKT0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICBTZXRJdGVtcyhpdGVtcz0+IGl0ZW1zLm1hcCgocm93KT0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7Li4ucm93LCBcclxuICAgICAgaXRlbU5hbWU6e1xyXG4gICAgICAgIF9pZDpzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgICBpdGVtTmFtZTpzZWxlY3RlZE9wdGlvbnM/Lml0ZW1OYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtQ29zdDogc2VsZWN0ZWRPcHRpb25zPy5pdGVtQ29zdFByaWNlLFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246c2VsZWN0ZWRPcHRpb25zPy5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgIGl0ZW1SYXRlOnNlbGVjdGVkT3B0aW9ucz8uaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgc3RvY2s6c2VsZWN0ZWRPcHRpb25zPy5pdGVtUXVhbnRpdHksXHJcbiAgICAgfTogcm93KSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsaSkgPT4ge1xyXG4gICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pdGVtc107XHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGlmICggbGlzdFtpXVsnaXRlbURpc2NvdW50J10gPiA1KSB7XHJcbiAgICAgIGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddID0gNVxyXG4gICAgfVxyXG4gICAgbGlzdFtpXVsndG90YWxBbW91bnQnXSA9IE1hdGgucm91bmQoKCAgbGlzdFtpXVsnaXRlbVF0eSddKmxpc3RbaV1bJ2l0ZW1SYXRlJ10pKjEwMCkvMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxDb3N0J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10qbGlzdFtpXVsnaXRlbUNvc3QnXSkqMTAwKS8xMDA7XHJcbiAgICBsaXN0W2ldWydkaXNjb3VudCddID0gbGlzdFtpXVsndG90YWxBbW91bnQnXSpsaXN0W2ldWydpdGVtRGlzY291bnQnXTtcclxuICAgIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSA9IGxpc3RbaV1bJ2Rpc2NvdW50J10vMTAwO1xyXG4gICAgbGlzdFtpXVsnaXRlbUFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsndG90YWxBbW91bnQnXS1saXN0W2ldWydwZXJjZW50YWdlJ10pKjEwMCkvMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxHZW5lcmFsZSddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbUNvc3QnXSpsaXN0W2ldWydpdGVtQnV5J10pKjEwMCkvMTAwO1xyXG4gICAgU2V0SXRlbXMobGlzdCk7XHJcbiAgfVxyXG4gIHsvKiogSXRlbSBJbkZPICovfVxyXG5cclxuY29uc3QgaGFuZGxlU2hvd0F1dG9jb21wbGV0ZSA9IChpZFJvdykgPT4ge1xyXG4gIFNldEl0ZW1zKGl0ZW1zPT4gaXRlbXMubWFwKChyb3cpPT4gcm93LmlkUm93ID09PSBpZFJvdyA/ey4uLnJvdywgXHJcbiAgICBpdGVtTmFtZTp7XHJcbiAgICAgIF9pZDpudWxsLFxyXG4gICAgICBpdGVtTmFtZTpudWxsXHJcbiAgIH0sIFxyXG4gICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgIGl0ZW1EaXNjb3VudDowLFxyXG4gICBpdGVtUXR5OjAsXHJcbiAgIGl0ZW1SYXRlOjAsXHJcbiAgIGl0ZW1BbW91bnQ6MCxcclxuICAgaXRlbUNvc3Q6MCxcclxuICAgdG90YWxBbW91bnQ6MCxcclxuICAgZGlzY291bnQ6MCxcclxuICAgcGVyY2VudGFnZTowLFxyXG4gICBpdGVtQnV5OjAsXHJcbiAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgIHRvdGFsR2VuZXJhbGU6MCxcclxuICAgdG90YWxDb3N0OjAsXHJcbiAgIHN0b2NrOiAwLFxyXG4gICBpdGVtT3V0OjAsXHJcbiAgIG5ld0l0ZW1PdXQ6MCxcclxuICAgfTogcm93KSlcclxufVxyXG5jb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24gPSAoaWRSb3cpID0+IHtcclxuICBTZXRJdGVtcyhpdGVtcz0+IGl0ZW1zLm1hcCgocm93KT0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgP3suLi5yb3csIFxyXG4gICAgaXRlbU5hbWU6e1xyXG4gICAgICBpdGVtTmFtZTogJ2VtcHR5J1xyXG4gICB9LCBcclxuICAgfTogcm93KSlcclxufVxyXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZFJvdyA9PntcclxuICAgIFNldEl0ZW1zIChpdGVtcyA9PiBpdGVtcy5maWx0ZXIoKEl0ZW0pPT4gSXRlbS5pZFJvdyAhPT1pZFJvdykpO1xyXG4gIH07XHJcbiAgY29uc3QgZmlsdGVySXRlbUluZm9ybWF0aW9uID0gSXRlbUluZm9ybWF0aW9uLmZpbHRlcihvcHRpb249PiAhaXRlbXMuZmluZCgocm93KT0+IG9wdGlvbi5faWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkICYmIG9wdGlvbi50eXBlSXRlbSA9PT0gXCJHb29kc1wiKSlcclxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCBuZXdJdGVtcyA9IFsuLi5pdGVtc107XHJcbiAgY29uc3QgW3JlbW92ZWRdID0gbmV3SXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xyXG4gIG5ld0l0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlbW92ZWQpO1xyXG4gIFNldEl0ZW1zKG5ld0l0ZW1zKVxyXG4gIH07XHJcblxyXG4gIC8vQ2FsY3VsYXRlIHRoZSB0b3RhbFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQxID0gaXRlbXMucmVkdWNlKChzdW0sIHJvdyk9PiAgc3VtICsgcm93LnRvdGFsQ29zdCwwKVxyXG4gICAgc2V0UHVyY2hhc2VBbW91bnQxKHJlc3VsdDEudG9GaXhlZCgyKSkgICAgXHJcbiAgICBjb25zdCByZXN1bHQyID0gaXRlbXMucmVkdWNlKChzdW0sIHJvdyk9PiAgc3VtICsgcm93LnRvdGFsR2VuZXJhbGUsMClcclxuICAgIHNldFB1cmNoYXNlQW1vdW50MihyZXN1bHQyLnRvRml4ZWQoMikpICAgIFxyXG4gICB9LFtpdGVtc10pXHJcbiAgICAgICBjb25zdCBoYW5kbGVDaGFuZ2VQcm9qZWN0ID0gKCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBwcm9qZWN0cy5maW5kKChvcHRpb24pPT4gb3B0aW9uID09PSBuZXdWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvamVjdE5hbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogc2VsZWN0ZWRPcHRpb25zPy5faWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHNlbGVjdGVkT3B0aW9ucz8ucHJvamVjdE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlc2NyaXB0aW9uKHNlbGVjdGVkT3B0aW9ucz8uZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbWVyTmFtZShzZWxlY3RlZE9wdGlvbnM/LmN1c3RvbWVyTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tZXJOYW1lMShzZWxlY3RlZE9wdGlvbnM/LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTEsIHNldE9wZW5BdXRvY29tcGxldGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3BlbkF1dG9jb21wbGV0ZTEodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3BlbkF1dG9jb21wbGV0ZTEoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgey8qKiogSXRlbSBTdGFydCAqL31cclxuICAgIGNvbnN0IFtvcGVuSXRlbVVwZGF0ZSwgc2V0T3Blbkl0ZW1VcGRhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5jb25zdCBbaWRJdGVtLHNldElkSXRlbV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuY29uc3QgaGFuZGxlT3Blbkl0ZW1VcGRhdGUgPSBhc3luYyhpZCkgPT4ge1xyXG4gIHNldE9wZW5JdGVtVXBkYXRlKHRydWUpO1xyXG4gIHNldElkSXRlbShpZCk7XHJcbn07XHJcbmNvbnN0IGhhbmRsZUNsb3NlSXRlbVVwZGF0ZSA9IGFzeW5jKCkgPT4ge1xyXG4gIHNldE9wZW5JdGVtVXBkYXRlKGZhbHNlKTtcclxuICBpZiAoaWRJdGVtKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2lkSXRlbX1gKVxyXG4gICAgICBTZXRJdGVtcyhpdGVtcz0+IGl0ZW1zLm1hcCgocm93KT0+IHJvdy5pdGVtTmFtZT8uX2lkID09PSByZXMuZGF0YS5kYXRhLl9pZCA/IHsuLi5yb3csIFxyXG4gICAgICAgIGl0ZW1OYW1lOntcclxuICAgICAgICAgIF9pZDpyZXMuZGF0YS5kYXRhLl9pZCxcclxuICAgICAgICAgIGl0ZW1OYW1lOnJlcy5kYXRhLmRhdGEuaXRlbU5hbWVcclxuICAgICAgICB9LFxyXG4gICAgICAgICBpdGVtRGVzY3JpcHRpb246cmVzLmRhdGEuZGF0YS5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBpdGVtQ29zdDogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgaXRlbVJhdGU6IHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICAgIHN0b2NrOiByZXMuZGF0YS5kYXRhLml0ZW1RdWFudGl0eSxcclxuICAgICAgICB0b3RhbEFtb3VudDogcm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgZGlzY291bnQ6IChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50LFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6ICgocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCkvMTAwLFxyXG4gICAgICAgIGl0ZW1BbW91bnQ6IChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgLSAoKChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50KS8xMDApLFxyXG4gICAgICAgIHRvdGFsQ29zdDogcm93Lml0ZW1RdHkqcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgIHRvdGFsR2VuZXJhbGU6IHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSpyb3cuaXRlbUJ1eVxyXG4gICAgICAgIH06IHJvdykpIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgXHJcbiAgICB9fVxyXG59O1xyXG5jb25zdCBbb3BlbkF1dG9jb21wbGV0ZTIsIHNldE9wZW5BdXRvY29tcGxldGUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbmNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiA9IChlKSA9PiB7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gc2V0T3BlbkF1dG9jb21wbGV0ZTIodHJ1ZSk7XHJcbn07XHJcbmNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIgPSAoKSA9PiB7XHJcbiAgc2V0T3BlbkF1dG9jb21wbGV0ZTIoZmFsc2UpO1xyXG59O1xyXG5jb25zdCBoYW5kbGVDcmVhdGVJdGVtID0gKG5ld0l0ZW0pPT4ge1xyXG4gIHNldEl0ZW1JbmZvcm1hdGlvbihbbmV3SXRlbSwuLi5JdGVtSW5mb3JtYXRpb25dKVxyXG59XHJcblxyXG4gICAgey8qKiogSXRlbSBFbmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZUNyZWF0ZVByb2plY3QgPSAobmV3UHJvamVjdCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvamVjdChbIG5ld1Byb2plY3QgXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbb3BlbjEsIHNldE9wZW4xXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuMSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlQ2xvc2VCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXT0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCxzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICBcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gIFxyXG4gICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgIH0sIDUwMClcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQ7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlY2lzaW9uID0gKG5hdmlnYXRlKSA9PiB7XHJcbiAgICAvL05hdmlnYXRlIEJhc2VkIG9uIHRoIERlY2lzaW9uXHJcbiAgICBpZiAobmF2aWdhdGUgPT09ICdwcmV2aW91cycpIHtcclxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0ZSA9PT0gJ3N0YXknKSB7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICB9IFxyXG4gIH0gICAgICBcclxuICBjb25zdCBpbnZvaWNlUHVyY2hhc2UgPSAnTWFrZSdcclxuICBjb25zdCBoYW5kbGVTdWJtaXRTdGF0dXNVcGRhdGUgPSAoUmVmZXJlbmNlSW5mbykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGludm9pY2VQdXJjaGFzZSxcclxuICAgICAgICBSZWZlcmVuY2VOYW1lMjpSZWZlcmVuY2VJbmZvXHJcbiAgICAgIH07IFxyXG4gICAgICBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtaW52b2ljZS8ke2lkfWAsZGF0YSlcclxuICAgfVxyXG4gICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoUmVmZXJlbmNlSW5mbyxSZWZlcmVuY2VJbmZvTnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICAgIHBlcnNvbjp1c2VyLmRhdGEudXNlck5hbWUgKyAnIENyZWF0ZWQgJyxcclxuICAgICAgcmVhc29uOiAgJ1B1ci0nK1JlZmVyZW5jZUluZm9OdW1iZXIrICcgQW5kICcrIHByb2plY3ROYW1lLnByb2plY3ROYW1lICsgJyBGb3IgJyArIGN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUsXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246ZGF0ZUNvbW1lbnRcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCxkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgY29uc3QgcHVyY2hhc2VOYW1lID0gXCJQVVItMDBcIitwdXJjaGFzZU51bWJlclxyXG4gICBjb25zdCBbc2F2aW5nLHNldFNhdmluZ10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IGhhbmRsZUNvbnZlcnRJbnZvaWNlVG9QdXJjaGFzZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2V0U2F2aW5nKCd0cnVlJylcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBjdXN0b21lck5hbWUsXHJcbiAgICAgICAgcHJvamVjdE5hbWUsXHJcbiAgICAgICAgcHVyY2hhc2VOdW1iZXIsXHJcbiAgICAgICAgcHVyY2hhc2VEYXRlLFxyXG4gICAgICAgIGl0ZW1zLGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIFJlZmVyZW5jZU5hbWUyOmlkLFxyXG4gICAgICAgIHB1cmNoYXNlTmFtZSxcclxuICAgICAgICBQb3NpdGlvbjonTGFzdCcsXHJcbiAgICAgICAgcHVyY2hhc2VBbW91bnQxLFxyXG4gICAgICAgIHB1cmNoYXNlQW1vdW50MixcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgIH07IFxyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1wdXJjaGFzZWAsZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mbyA9IHJlcy5kYXRhLmRhdGEuX2lkXHJcbiAgICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvTnVtYmVyID0gcmVzLmRhdGEuZGF0YS5wdXJjaGFzZU51bWJlclxyXG4gICAgICAgICAgLy8gT3BlbiBMb2FkaW5nIFZpZXdcclxuICAgICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICAgIC8vIFN0YXR1cyB1cGRhdGUgaXMgY3JpdGljYWwg4oCUIGF3YWl0IGl0IHNvIHF1b3RhdGlvbiBzaG93cyAnQ29udmVydGVkJ1xyXG4gICAgICAgICAgdHJ5IHsgYXdhaXQgaGFuZGxlU3VibWl0U3RhdHVzVXBkYXRlKFJlZmVyZW5jZUluZm8pOyB9IGNhdGNoIChlKSB7IGNvbnNvbGUud2FybignU3RhdHVzIHVwZGF0ZSBmYWlsZWQ6JywgZSk7IH1cclxuICAgICAgICAgIC8vIE5vdGlmaWNhdGlvbiBpcyBub24tYmxvY2tpbmdcclxuICAgICAgICAgIHRyeSB7IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbihSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKTsgfSBjYXRjaCAoZSkgeyBjb25zb2xlLndhcm4oJ05vdGlmaWNhdGlvbiBmYWlsZWQ6JywgZSk7IH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoJ0FuIEVycm9yIGFzIE9jY3VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoKGVycm9yKXtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgIHNldFNhdmluZygnJylcclxuICAgICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfTtcclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG48Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3tiYWNrZ3JvdW5kQ29sb3I6JyMzMDM2OGEnfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgIENvbnZlcnQgdG8gUHVyY2hhc2UgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgPEFycm93QmFjayBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8vPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfS8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7bWFyZ2luTGVmdDonMTBweCcsbWFyZ2luUmlnaHQ6JzEwcHgnfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3tjb2xvcjond2hpdGUnfX0gLz4gXHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3toZWlnaHQ6JzcwMHB4J319PlxyXG4gICAgICAgICAgPFNpZGViYXJEYXNoMS8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDonMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIvPlxyXG4gICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiA0fX0gPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVDb252ZXJ0SW52b2ljZVRvUHVyY2hhc2V9PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e2FsaWduSXRlbXM6J2NlbnRlcicscGFkZGluZzonMTVweCd9fSBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSA+XHJcbiAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgaWQ9J2N1c3RvbWVyTmFtZSdcclxuICAgICAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tZXJOYW1lJyBcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J0N1c3RvbWVyIE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtDdXN0b21lck5hbWVJbmZvfVxyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyB9fSAgICAgICBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSA+XHJcbiAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9qZWN0c31cclxuICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKT0+IG9wdGlvbi5wcm9qZWN0TmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VQcm9qZWN0KG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoe2NoaWxkcmVuLCAuLi5vdGhlcn0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Qm94IHsuLi5vdGhlcn0gc3g9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJywgbGVmdDonMCcsbWFyZ2luVG9wOicxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpPT5oYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTEoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpPT5lLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI3JyBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIFByb2plY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJQcm9qZWN0IE5hbWVcIiByZXF1aXJlZC8+fVxyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgbmFtZT0ncHVyY2hhc2VEYXRlJyBcclxuICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9e3B1cmNoYXNlRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19IFxyXG4gICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJyAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0ncHVyY2hhc2VOdW1iZXInPlB1cmNoYXNlIE51bWJlcjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICBuYW1lPSdwdXJjaGFzZU51bWJlcidcclxuICAgICAgICAgICB2YWx1ZT17cHVyY2hhc2VOdW1iZXJ9XHJcbiAgICAgICAgICAgbGFiZWw9J1B1cmNoYXNlIE51bWJlcidcclxuICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gc2V0UHVyY2hhc2VOdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249J3N0YXJ0Jz5QVVItMDA8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICBpZD0nY3VzdG9tZXJOYW1lJ1xyXG4gICAgICAgICAgICAgICAgIG5hbWU9J2N1c3RvbWVyTmFtZScgXHJcbiAgICAgICAgICAgICAgICAgbGFiZWw9J0N1c3RvbWVyIE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyTmFtZTF9XHJcbiAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICBpZD0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJyBcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19ICAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonYmxvY2snLHBvc2l0aW9uOidmaXhlZCcsekluZGV4OjEsZmxvYXQ6J3JpZ2h0JyxyaWdodDonLTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbX0+XHJcbiAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17e2ZvbnRTaXplOic0MHB4J319Lz4gIFxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbVdoaXRlfT5cclxuICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidncmF5Jyxmb250U2l6ZTonNDBweCd9fS8+ICBcclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSW5mbzEwJyBzdHlsZT17e21hcmdpbkxlZnQ6Jy0yMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggYWxpZ249XCJjZW50ZXJcIj5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj1cImNlbnRlclwiPlF0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj1cImNlbnRlclwiPlVuaXQgUHJpY2U8c3Bhbj4kPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj1cImNlbnRlclwiPlRvdGFsPHNwYW4+JDwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggYWxpZ249XCJjZW50ZXJcIj5CdXk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggYWxpZ249XCJjZW50ZXJcIj5Ub3RhbDxzcGFuPiQ8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoIGFsaWduPVwiY2VudGVyXCI+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiID4gIFxyXG4gICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+ICggIFxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keSAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkcm9wcGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gIFxyXG4gICAgICAgICAgICAgICAgICAgID4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChJdGVtLCBpKSA9PiAoICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtJdGVtLmlkUm93fSBkcmFnZ2FibGVJZD17YGRyb3BwYWJsZSR7SXRlbS5pZFJvd31gfSBpbmRleD17aX0+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc30gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs2fT48VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nbmV3RGVzY3JpcHRpb24nIGlkPSduZXdEZXNjcmlwdGlvbicgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5uZXdEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsaSl9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9XHJcbiAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJywgZm9udFNpemU6MTJ9fSAgICAgICBcclxuICAgICAgLz48L3RkPlxyXG4gICAgICAgICA8dGQgPlxyXG4gICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCk9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICA8RGVsZXRlSWNvbiAgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInLGNvbG9yOidyZWQnfX0vPiBcclxuICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+PERyYWdJbmRpY2F0b3JSb3VuZGVkLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3toZWlnaHQ6JzEwMHB4J319PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWU/IChcclxuICAgICAgICAgICAgKCAgXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsYWxpZ25JdGVtczonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGhpZGRlbiA9IHsgSXRlbS5pdGVtTmFtZT9JdGVtLml0ZW1OYW1lLml0ZW1OYW1lID09PSAnZW1wdHknOicnfSBzeD17e2ZvbnRTaXplOicyM3B4J319PntJdGVtLml0ZW1OYW1lP0l0ZW0uaXRlbU5hbWUuaXRlbU5hbWUudG9VcHBlckNhc2UoKTonJ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EZXNjcmlwdGlvbicgaWQ9J2l0ZW1EZXNjcmlwdGlvbicgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLGkpfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9XHJcbiAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzQ0MHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScsIGZvbnRTaXplOjEyfX0gICAgICAgXHJcbiAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3RvcCc+XHJcbiAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCk9PmhhbmRsZVNob3dBdXRvY29tcGxldGUoSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOidyZWxhdGl2ZScsIGZsb2F0OidyaWdodCd9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17e2NvbG9yOicjMjAyYTVhJ319Lz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgSXRlbS5pdGVtTmFtZS5faWQgJiYgKFxyXG4gICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiRWRpdFwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKT0+aGFuZGxlT3Blbkl0ZW1VcGRhdGUoSXRlbS5pdGVtTmFtZS5faWQpfSBzdHlsZT17eyBwb3NpdGlvbjoncmVsYXRpdmUnLCBmbG9hdDoncmlnaHQnfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEVkaXQgc3R5bGU9e3tjb2xvcjonIzIwMmE1YSd9fS8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICApOihcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgIDxBdXRvY29tcGxldGVcclxuICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVySXRlbUluZm9ybWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5pdGVtTmFtZSsnLycrb3B0aW9uLml0ZW1CcmFuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLG9wdGlvbik9PiAoPEJveCB7Li4ucHJvcHN9PntvcHRpb24uaXRlbU5hbWUrJy8nK29wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH0gey4uLnBhcmFtc30gcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucyx7aW5wdXRWYWx1ZX0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbik9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1CcmFuZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsbmV3VmFsdWUpPT5oYW5kbGVDaGFuZ2VJdGVtKEl0ZW0uaWRSb3csIG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHtjaGlsZHJlbiwgLi4ub3RoZXJ9KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17e2JhY2tncm91bmRDb2xvcjond2hpdGUnLCBsZWZ0OicwJyxtYXJnaW5Ub3A6JzEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9PmhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMihlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSk9PmUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREIE5FVyBJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NzBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpPT5oYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24oSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOidyZWxhdGl2ZScsIGZsb2F0OidyaWdodCd9fT4gXHJcbiAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17e2NvbG9yOicjMjAyYTVhJ319Lz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCA+XHJcbiAgIDxUZXh0RmllbGQgXHJcbiAgcmVxdWlyZWQgPSB7SXRlbS5pdGVtRGVzY3JpcHRpb24gIT09ICcnfVxyXG4gICAgICAgICAgICAgIG5hbWU9J2l0ZW1RdHknIGlkPSdpdGVtUXR5JyBcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLGkpfVxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVF0eX1cclxuICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgLz5cclxuPC90ZD5cclxuICAgPHRkID4gIFxyXG4gICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1Db3N0JyBpZD0naXRlbUNvc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ31cclxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtQ29zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSxpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyB9fSAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC8+XHJcbjwvdGQ+XHJcbiAgIDx0ZCBpZD0ndG90YWxQdXJjaGFzZScgc3R5bGU9e3t3aWR0aDonMTAwcHgnfX0+e0l0ZW0udG90YWxDb3N0LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywnLCcpfTwvdGQ+XHJcbiAgIDx0ZCBpZD0ndG90YWxCdXknPlxyXG4gICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1CdXknIGlkPSdpdGVtQnV5JyBcclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1CdXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgLz5cclxuPC90ZD5cclxuICAgPHRkIGlkPSd0b3RhbEdlbmVyYWxQdXJjaGFzZScgc3R5bGU9e3t3aWR0aDonMTAwcHgnfX0+e0l0ZW0udG90YWxHZW5lcmFsZS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiID4gIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCk9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInLGNvbG9yOidyZWQnfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PiAgXHJcbiAgICAgICAgICAgICAgICApfSAgXHJcbiAgICAgICAgICAgIDwvRHJvcHBhYmxlPiBcclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NH0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5Ub3RhbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3B1cmNoYXNlQW1vdW50MS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPi08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntwdXJjaGFzZUFtb3VudDIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PiBcclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD4gXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgIHNhdmluZyAhPT0gJ3RydWUnID8gPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17e3dpZHRoOicxMDAlJ319PlNhdmU8L2J1dHRvbj4gOiA8cCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3t3aWR0aDonMTAwJScsIHRleHRBbGlnbjonY2VudGVyJ319PlNhdmluZy4uLjwvcD5cclxuICAgICAgfVxyXG4gICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICBcclxuICA8L2Zvcm0+XHJcbiAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgPC9Cb3g+XHJcbiAgPC9Cb3g+XHJcbiAgICAgICAgPE1vZGFsICBcclxuICAgICAgICBvcGVuPXtvcGVuMX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUJhY2t9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IHN0eWxlPXt7IHBvc2l0aW9uOidyZWxhdGl2ZScsIGZsb2F0OidyaWdodCd9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3tjb2xvcjonIzIwMmE1YSd9fS8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvQmxhY2tUb29sdGlwPiAgXHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7YWxpZ25JdGVtczonY2VudGVyJyxwYWRkaW5nOicxNXB4J319IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCBjcmVhdGluZyBJbnZvaWNlID8gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17e2NvbG9yOidyZWQnfX0+Tm90ZSA6PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+IElmIHlvdSBzdG9wIGNyZWF0aW5nIHdpdGhvdXQgc2F2aW5nLCBhbGwgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdDwvc3Bhbj48L3A+ICA8L0dyaWQ+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9JbnZvaWNlVmlld0FkbWluJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319PlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5ObzwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgPlxyXG4gICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAgIHtsb2FkaW5nPyg8TG9hZGVyLz5cclxuICAgICAgICAgICAgICAgKTooXHJcbiAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17e2NvbG9yOidncmVlbicsaGVpZ2h0Oic0MHB4Jywgd2lkdGg6JzQwcHgnfX0vPjwvcD5cclxuICAgICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGdhcDonNjBweCcsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBoYW5kbGVEZWNpc2lvbigncHJldmlvdXMnKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgPlxyXG4gICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAgIHtsb2FkaW5nPyg8TG9hZGVyLz5cclxuICAgICAgICAgICAgICAgKTooXHJcbiAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2p1c3RpZnlDb250ZW50OidjZW50ZXInLHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7Y29sb3I6J3JlZCcsaGVpZ2h0Oic0MHB4Jywgd2lkdGg6JzQwcHgnfX0vPjwvcD5cclxuICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3tjb2xvcjoncmVkJ319PlNhdmluZyBGYWlsZWQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT0ndHh0MScgc3R5bGU9e3tjb2xvcjoncmVkJ319Pk5vdGU6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj5Qcm9qZWN0IG5hbWUgY2FuIG9ubHkgYmUgY3JlYXRlZCBvbmNlIGZvciBwdXJjaGFzZTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgIDxNb2RhbFxyXG4gICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMX1cclxuICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX1cclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgPlxyXG4gICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfSBzdHlsZT17eyBwb3NpdGlvbjoncmVsYXRpdmUnLCBmbG9hdDoncmlnaHQnfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7Y29sb3I6JyMyMDJhNWEnfX0vPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzYwMHB4JywgcGFkZGluZzonMjBweCcsb3ZlcmZsb3c6J2hpZGRlbicsb3ZlcmZsb3dZOidzY3JvbGwnfX0+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0Rm9ybVZpZXcyIG9uQ3JlYXRlT3B0aW9uPXtoYW5kbGVDcmVhdGVQcm9qZWN0fSBvbklkPXtpZH0gb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX0vPiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgPlxyXG4gICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSBzdHlsZT17eyBwb3NpdGlvbjoncmVsYXRpdmUnLCBmbG9hdDoncmlnaHQnfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7Y29sb3I6JyMyMDJhNWEnfX0vPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzYwMHB4JywgcGFkZGluZzonMjBweCcsb3ZlcmZsb3c6J2hpZGRlbicsb3ZlcmZsb3dZOidzY3JvbGwnfX0+XHJcbiAgICAgICAgICAgIDxJdGVtRm9ybVZpZXcyIG9uQ3JlYXRlT3B0aW9uPXtoYW5kbGVDcmVhdGVJdGVtfSBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfS8+ICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L01vZGFsPlxyXG4gICAgPE1vZGFsXHJcbiAgICAgIG9wZW49e29wZW5JdGVtVXBkYXRlfVxyXG4gICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUl0ZW1VcGRhdGV9XHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgID5cclxuICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfSBzdHlsZT17eyBwb3NpdGlvbjoncmVsYXRpdmUnLCBmbG9hdDoncmlnaHQnfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7Y29sb3I6JyMyMDJhNWEnfX0vPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzYwMHB4JywgcGFkZGluZzonMjBweCcsb3ZlcmZsb3c6J2hpZGRlbicsb3ZlcmZsb3dZOidzY3JvbGwnfX0+XHJcbiAgICAgICAgICA8SXRlbVVwZGF0ZVZpZXcyIG9uQ2xvc2U9e2hhbmRsZUNsb3NlSXRlbVVwZGF0ZX0gaWQ9e2lkSXRlbX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvTW9kYWw+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFrZVB1cmNoYXNlXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3MvU2lkZWJhck5ldy5zY3NzJ1xyXG5pbXBvcnQgeyBPdXRsZXQsIE5hdkxpbmssIExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IERhc2hib2FyZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgUGVybUlkZW50aXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Blcm1JZGVudGl0eSc7XHJcbmltcG9ydCBMaXN0QWx0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xpc3RBbHQnO1xyXG5pbXBvcnQgRGVzY3JpcHRpb25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgUmVjZWlwdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZWNlaXB0JztcclxuaW1wb3J0IE1vdmluZ0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3ZpbmcnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3MnO1xyXG5pbXBvcnQgSW5zZXJ0RHJpdmVGaWxlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0luc2VydERyaXZlRmlsZSc7XHJcbmltcG9ydCBSZXN0b3JlUGFnZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXN0b3JlUGFnZSc7XHJcbmltcG9ydCBSZXF1ZXN0UXVvdGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUmVxdWVzdFF1b3RlJztcclxuaW1wb3J0IE1vbmV0aXphdGlvbk9uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vbmV0aXphdGlvbk9uJztcclxuaW1wb3J0IEVuZ2luZWVyaW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VuZ2luZWVyaW5nJztcclxuaW1wb3J0IHsgRXhwbGljaXQsIFNob3BwaW5nQmFnT3V0bGluZWQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IFJvb21QcmVmZXJlbmNlc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Sb29tUHJlZmVyZW5jZXMnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbUJ1dHRvbiwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQsIG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFBheW1lbnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGF5bWVudCc7XHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3JlVmVydCc7XHJcbmZ1bmN0aW9uIFNpZGViYXJEYXNoMSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8RGFzaGJvYXJkSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhc2hib2FyZFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UGVybUlkZW50aXR5SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkN1c3RvbWVyXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPExpc3RBbHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiU3RvcmVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlcXVlc3RRdW90ZUljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJRdW90YXRpb25cIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEZXNjcmlwdGlvbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbnZvaWNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9uZXRpemF0aW9uT25JY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGF5bWVudFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFNob3BwaW5nQmFnT3V0bGluZWQgLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEYWlseSBFeHBlbnNlc1wiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ICA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxSb29tUHJlZmVyZW5jZXNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHJvamVjdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlY2VpcHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHVyY2hhc2VzIFJlcXVlc3RcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgPEVuZ2luZWVyaW5nSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk1haW50ZW5hbmNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTW9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJEYXNoMSIsIid1c2Ugc3RyaWN0JzsgXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRvT3JkaW5hbDogcmVxdWlyZSgnLi90b09yZGluYWwnKSxcbiAgICB0b1dvcmRzOiByZXF1aXJlKCcuL3RvV29yZHMnKSxcbiAgICB0b1dvcmRzT3JkaW5hbDogcmVxdWlyZSgnLi90b1dvcmRzT3JkaW5hbCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBTaW1wbGlmaWVkIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL21hcmx1bjc4Lzg4NWViMDAyMWU5ODBjNmNlMGZiXG5mdW5jdGlvbiBpc0Zpbml0ZSh2YWx1ZSkge1xuICAgIHJldHVybiAhKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgdmFsdWUgIT09IHZhbHVlIHx8IHZhbHVlID09PSBJbmZpbml0eSB8fCB2YWx1ZSA9PT0gLUluZmluaXR5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Zpbml0ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSByZXF1aXJlKCcuL21heFNhZmVJbnRlZ2VyJyk7XG5cbmZ1bmN0aW9uIGlzU2FmZU51bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE1hdGguYWJzKHZhbHVlKSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2FmZU51bWJlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVORFNfV0lUSF9ET1VCTEVfWkVST19QQVRURVJOID0gLyhodW5kcmVkfHRob3VzYW5kfChtfGJ8dHJ8cXVhZHIpaWxsaW9uKSQvO1xudmFyIEVORFNfV0lUSF9URUVOX1BBVFRFUk4gPSAvdGVlbiQvO1xudmFyIEVORFNfV0lUSF9ZX1BBVFRFUk4gPSAveSQvO1xudmFyIEVORFNfV0lUSF9aRVJPX1RIUk9VR0hfVFdFTFZFX1BBVFRFUk4gPSAvKHplcm98b25lfHR3b3x0aHJlZXxmb3VyfGZpdmV8c2l4fHNldmVufGVpZ2h0fG5pbmV8dGVufGVsZXZlbnx0d2VsdmUpJC87XG52YXIgb3JkaW5hbExlc3NUaGFuVGhpcnRlZW4gPSB7XG4gICAgemVybzogJ3plcm90aCcsXG4gICAgb25lOiAnZmlyc3QnLFxuICAgIHR3bzogJ3NlY29uZCcsXG4gICAgdGhyZWU6ICd0aGlyZCcsXG4gICAgZm91cjogJ2ZvdXJ0aCcsXG4gICAgZml2ZTogJ2ZpZnRoJyxcbiAgICBzaXg6ICdzaXh0aCcsXG4gICAgc2V2ZW46ICdzZXZlbnRoJyxcbiAgICBlaWdodDogJ2VpZ2h0aCcsXG4gICAgbmluZTogJ25pbnRoJyxcbiAgICB0ZW46ICd0ZW50aCcsXG4gICAgZWxldmVuOiAnZWxldmVudGgnLFxuICAgIHR3ZWx2ZTogJ3R3ZWxmdGgnXG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyLXdvcmQgaW50byBhbiBvcmRpbmFsIG51bWJlci13b3JkLlxuICogQGV4YW1wbGUgbWFrZU9yZGluYWwoJ29uZScpID0+ICdmaXJzdCdcbiAqIEBwYXJhbSB7c3RyaW5nfSB3b3Jkc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbWFrZU9yZGluYWwod29yZHMpIHtcbiAgICAvLyBFbmRzIHdpdGggKjAwICgxMDAsIDEwMDAsIGV0Yy4pIG9yICp0ZWVuICgxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSlcbiAgICBpZiAoRU5EU19XSVRIX0RPVUJMRV9aRVJPX1BBVFRFUk4udGVzdCh3b3JkcykgfHwgRU5EU19XSVRIX1RFRU5fUEFUVEVSTi50ZXN0KHdvcmRzKSkge1xuICAgICAgICByZXR1cm4gd29yZHMgKyAndGgnO1xuICAgIH1cbiAgICAvLyBFbmRzIHdpdGggKnkgKDIwLCAzMCwgNDAsIDUwLCA2MCwgNzAsIDgwLCA5MClcbiAgICBlbHNlIGlmIChFTkRTX1dJVEhfWV9QQVRURVJOLnRlc3Qod29yZHMpKSB7XG4gICAgICAgIHJldHVybiB3b3Jkcy5yZXBsYWNlKEVORFNfV0lUSF9ZX1BBVFRFUk4sICdpZXRoJyk7XG4gICAgfVxuICAgIC8vIEVuZHMgd2l0aCBvbmUgdGhyb3VnaCB0d2VsdmVcbiAgICBlbHNlIGlmIChFTkRTX1dJVEhfWkVST19USFJPVUdIX1RXRUxWRV9QQVRURVJOLnRlc3Qod29yZHMpKSB7XG4gICAgICAgIHJldHVybiB3b3Jkcy5yZXBsYWNlKEVORFNfV0lUSF9aRVJPX1RIUk9VR0hfVFdFTFZFX1BBVFRFUk4sIHJlcGxhY2VXaXRoT3JkaW5hbFZhcmlhbnQpO1xuICAgIH1cbiAgICByZXR1cm4gd29yZHM7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VXaXRoT3JkaW5hbFZhcmlhbnQobWF0Y2gsIG51bWJlcldvcmQpIHtcbiAgICByZXR1cm4gb3JkaW5hbExlc3NUaGFuVGhpcnRlZW5bbnVtYmVyV29yZF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFrZU9yZGluYWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxubW9kdWxlLmV4cG9ydHMgPSBNQVhfU0FGRV9JTlRFR0VSO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNGaW5pdGUgPSByZXF1aXJlKCcuL2lzRmluaXRlJyk7XG52YXIgaXNTYWZlTnVtYmVyID0gcmVxdWlyZSgnLi9pc1NhZmVOdW1iZXInKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBpbnRlZ2VyIGludG8gYSBzdHJpbmcgd2l0aCBhbiBvcmRpbmFsIHBvc3RmaXguXG4gKiBJZiBudW1iZXIgaXMgZGVjaW1hbCwgdGhlIGRlY2ltYWxzIHdpbGwgYmUgcmVtb3ZlZC5cbiAqIEBleGFtcGxlIHRvT3JkaW5hbCgxMikgPT4gJzEydGgnXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9PcmRpbmFsKG51bWJlcikge1xuICAgIHZhciBudW0gPSBwYXJzZUludChudW1iZXIsIDEwKTtcblxuICAgIGlmICghaXNGaW5pdGUobnVtKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ05vdCBhIGZpbml0ZSBudW1iZXI6ICcgKyBudW1iZXIgKyAnICgnICsgdHlwZW9mIG51bWJlciArICcpJ1xuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAoIWlzU2FmZU51bWJlcihudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgJ0lucHV0IGlzIG5vdCBhIHNhZmUgbnVtYmVyLCBpdOKAmXMgZWl0aGVyIHRvbyBsYXJnZSBvciB0b28gc21hbGwuJ1xuICAgICAgICApO1xuICAgIH1cbiAgICB2YXIgc3RyID0gU3RyaW5nKG51bSk7XG4gICAgdmFyIGxhc3RUd29EaWdpdHMgPSBNYXRoLmFicyhudW0gJSAxMDApO1xuICAgIHZhciBiZXR3ZWVuRWxldmVuQW5kVGhpcnRlZW4gPSBsYXN0VHdvRGlnaXRzID49IDExICYmIGxhc3RUd29EaWdpdHMgPD0gMTM7XG4gICAgdmFyIGxhc3RDaGFyID0gc3RyLmNoYXJBdChzdHIubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIHN0ciArIChiZXR3ZWVuRWxldmVuQW5kVGhpcnRlZW4gPyAndGgnXG4gICAgICAgICAgICA6IGxhc3RDaGFyID09PSAnMScgPyAnc3QnXG4gICAgICAgICAgICA6IGxhc3RDaGFyID09PSAnMicgPyAnbmQnXG4gICAgICAgICAgICA6IGxhc3RDaGFyID09PSAnMycgPyAncmQnXG4gICAgICAgICAgICA6ICd0aCcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvT3JkaW5hbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1ha2VPcmRpbmFsID0gcmVxdWlyZSgnLi9tYWtlT3JkaW5hbCcpO1xudmFyIGlzRmluaXRlID0gcmVxdWlyZSgnLi9pc0Zpbml0ZScpO1xudmFyIGlzU2FmZU51bWJlciA9IHJlcXVpcmUoJy4vaXNTYWZlTnVtYmVyJyk7XG5cbnZhciBURU4gPSAxMDtcbnZhciBPTkVfSFVORFJFRCA9IDEwMDtcbnZhciBPTkVfVEhPVVNBTkQgPSAxMDAwO1xudmFyIE9ORV9NSUxMSU9OID0gMTAwMDAwMDtcbnZhciBPTkVfQklMTElPTiA9IDEwMDAwMDAwMDA7ICAgICAgICAgICAvLyAgICAgICAgIDEuMDAwLjAwMC4wMDAgKDkpXG52YXIgT05FX1RSSUxMSU9OID0gMTAwMDAwMDAwMDAwMDsgICAgICAgLy8gICAgIDEuMDAwLjAwMC4wMDAuMDAwICgxMilcbnZhciBPTkVfUVVBRFJJTExJT04gPSAxMDAwMDAwMDAwMDAwMDAwOyAvLyAxLjAwMC4wMDAuMDAwLjAwMC4wMDAgKDE1KVxudmFyIE1BWCA9IDkwMDcxOTkyNTQ3NDA5OTI7ICAgICAgICAgICAgIC8vIDkuMDA3LjE5OS4yNTQuNzQwLjk5MiAoMTUpXG5cbnZhciBMRVNTX1RIQU5fVFdFTlRZID0gW1xuICAgICd6ZXJvJywgJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsICduaW5lJywgJ3RlbicsXG4gICAgJ2VsZXZlbicsICd0d2VsdmUnLCAndGhpcnRlZW4nLCAnZm91cnRlZW4nLCAnZmlmdGVlbicsICdzaXh0ZWVuJywgJ3NldmVudGVlbicsICdlaWdodGVlbicsICduaW5ldGVlbidcbl07XG5cbnZhciBURU5USFNfTEVTU19USEFOX0hVTkRSRUQgPSBbXG4gICAgJ3plcm8nLCAndGVuJywgJ3R3ZW50eScsICd0aGlydHknLCAnZm9ydHknLCAnZmlmdHknLCAnc2l4dHknLCAnc2V2ZW50eScsICdlaWdodHknLCAnbmluZXR5J1xuXTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBpbnRlZ2VyIGludG8gd29yZHMuXG4gKiBJZiBudW1iZXIgaXMgZGVjaW1hbCwgdGhlIGRlY2ltYWxzIHdpbGwgYmUgcmVtb3ZlZC5cbiAqIEBleGFtcGxlIHRvV29yZHMoMTIpID0+ICd0d2VsdmUnXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlclxuICogQHBhcmFtIHtib29sZWFufSBbYXNPcmRpbmFsXSAtIERlcHJlY2F0ZWQsIHVzZSB0b1dvcmRzT3JkaW5hbCgpIGluc3RlYWQhXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1dvcmRzKG51bWJlciwgYXNPcmRpbmFsKSB7XG4gICAgdmFyIHdvcmRzO1xuICAgIHZhciBudW0gPSBwYXJzZUludChudW1iZXIsIDEwKTtcblxuICAgIGlmICghaXNGaW5pdGUobnVtKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ05vdCBhIGZpbml0ZSBudW1iZXI6ICcgKyBudW1iZXIgKyAnICgnICsgdHlwZW9mIG51bWJlciArICcpJ1xuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAoIWlzU2FmZU51bWJlcihudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgJ0lucHV0IGlzIG5vdCBhIHNhZmUgbnVtYmVyLCBpdOKAmXMgZWl0aGVyIHRvbyBsYXJnZSBvciB0b28gc21hbGwuJ1xuICAgICAgICApO1xuICAgIH1cbiAgICB3b3JkcyA9IGdlbmVyYXRlV29yZHMobnVtKTtcbiAgICByZXR1cm4gYXNPcmRpbmFsID8gbWFrZU9yZGluYWwod29yZHMpIDogd29yZHM7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlV29yZHMobnVtYmVyKSB7XG4gICAgdmFyIHJlbWFpbmRlciwgd29yZCxcbiAgICAgICAgd29yZHMgPSBhcmd1bWVudHNbMV07XG5cbiAgICAvLyBXZeKAmXJlIGRvbmVcbiAgICBpZiAobnVtYmVyID09PSAwKSB7XG4gICAgICAgIHJldHVybiAhd29yZHMgPyAnemVybycgOiB3b3Jkcy5qb2luKCcgJykucmVwbGFjZSgvLCQvLCAnJyk7XG4gICAgfVxuICAgIC8vIEZpcnN0IHJ1blxuICAgIGlmICghd29yZHMpIHtcbiAgICAgICAgd29yZHMgPSBbXTtcbiAgICB9XG4gICAgLy8gSWYgbmVnYXRpdmUsIHByZXBlbmQg4oCcbWludXPigJ1cbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICB3b3Jkcy5wdXNoKCdtaW51cycpO1xuICAgICAgICBudW1iZXIgPSBNYXRoLmFicyhudW1iZXIpO1xuICAgIH1cblxuICAgIGlmIChudW1iZXIgPCAyMCkge1xuICAgICAgICByZW1haW5kZXIgPSAwO1xuICAgICAgICB3b3JkID0gTEVTU19USEFOX1RXRU5UWVtudW1iZXJdO1xuXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPCBPTkVfSFVORFJFRCkge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBURU47XG4gICAgICAgIHdvcmQgPSBURU5USFNfTEVTU19USEFOX0hVTkRSRURbTWF0aC5mbG9vcihudW1iZXIgLyBURU4pXTtcbiAgICAgICAgLy8gSW4gY2FzZSBvZiByZW1haW5kZXIsIHdlIG5lZWQgdG8gaGFuZGxlIGl0IGhlcmUgdG8gYmUgYWJsZSB0byBhZGQgdGhlIOKAnC3igJ1cbiAgICAgICAgaWYgKHJlbWFpbmRlcikge1xuICAgICAgICAgICAgd29yZCArPSAnLScgKyBMRVNTX1RIQU5fVFdFTlRZW3JlbWFpbmRlcl07XG4gICAgICAgICAgICByZW1haW5kZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9USE9VU0FORCkge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfSFVORFJFRDtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfSFVORFJFRCkpICsgJyBodW5kcmVkJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX01JTExJT04pIHtcbiAgICAgICAgcmVtYWluZGVyID0gbnVtYmVyICUgT05FX1RIT1VTQU5EO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9USE9VU0FORCkpICsgJyB0aG91c2FuZCwnO1xuXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPCBPTkVfQklMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfTUlMTElPTjtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfTUlMTElPTikpICsgJyBtaWxsaW9uLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9UUklMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfQklMTElPTjtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfQklMTElPTikpICsgJyBiaWxsaW9uLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9RVUFEUklMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfVFJJTExJT047XG4gICAgICAgIHdvcmQgPSBnZW5lcmF0ZVdvcmRzKE1hdGguZmxvb3IobnVtYmVyIC8gT05FX1RSSUxMSU9OKSkgKyAnIHRyaWxsaW9uLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8PSBNQVgpIHtcbiAgICAgICAgcmVtYWluZGVyID0gbnVtYmVyICUgT05FX1FVQURSSUxMSU9OO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9RVUFEUklMTElPTikpICtcbiAgICAgICAgJyBxdWFkcmlsbGlvbiwnO1xuICAgIH1cblxuICAgIHdvcmRzLnB1c2god29yZCk7XG4gICAgcmV0dXJuIGdlbmVyYXRlV29yZHMocmVtYWluZGVyLCB3b3Jkcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Xb3JkcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1ha2VPcmRpbmFsID0gcmVxdWlyZSgnLi9tYWtlT3JkaW5hbCcpO1xudmFyIHRvV29yZHMgPSByZXF1aXJlKCcuL3RvV29yZHMnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIG51bWJlciBpbnRvIG9yZGluYWwgd29yZHMuXG4gKiBAZXhhbXBsZSB0b1dvcmRzT3JkaW5hbCgxMikgPT4gJ3R3ZWxmdGgnXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9Xb3Jkc09yZGluYWwobnVtYmVyKSB7XG4gICAgdmFyIHdvcmRzID0gdG9Xb3JkcyhudW1iZXIpO1xuICAgIHJldHVybiBtYWtlT3JkaW5hbCh3b3Jkcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Xb3Jkc09yZGluYWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoMSIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJEZWxldGVJY29uIiwiQmFja2Ryb3AiLCJNZW51SXRlbSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiUGFwZXIiLCJUYWJsZUNvbnRhaW5lciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJBdXRvY29tcGxldGUiLCJNb2RhbCIsIkJveCIsInN0eWxlZCIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIkRpdmlkZXIiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJBZGQiLCJEcmFnSW5kaWNhdG9yUm91bmRlZCIsIkVkaXQiLCJSZW1vdmVDaXJjbGVPdXRsaW5lIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJOYXZpZ2F0ZSIsIk5hdkxpbmsiLCJ2NCIsIkRlbW9Db250YWluZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIkRhdGVQaWNrZXIiLCJkYXlqcyIsIkFycm93QmFjayIsIlNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiIsIkFkZFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2FkZXIiLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiTG9nb3V0IiwiQ2xvc2UiLCJJdGVtRm9ybVZpZXcyIiwiSXRlbVVwZGF0ZVZpZXcyIiwibnVtYmVyVG9Xb3JkcyIsIkRyYWdEcm9wQ29udGV4dCIsIkRyYWdnYWJsZSIsIkRyb3BwYWJsZSIsIlByb2plY3RGb3JtVmlldzIiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJMaWdodFRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIkJsYWNrVG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiRG93blRvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwic3R5bGUyIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIk1ha2VQdXJjaGFzZSIsIl91c2VQYXJhbXMiLCJpZCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY5IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfdXNlU3RhdGUiLCJpZFJvdyIsIml0ZW1OYW1lIiwiaXRlbURlc2NyaXB0aW9uIiwiaXRlbURpc2NvdW50IiwiaXRlbVF0eSIsIml0ZW1SYXRlIiwiaXRlbUFtb3VudCIsIml0ZW1Db3N0IiwidG90YWxBbW91bnQiLCJkaXNjb3VudCIsInBlcmNlbnRhZ2UiLCJpdGVtQnV5IiwiaXRlbVdlaWdodCIsInRvdGFsR2VuZXJhbGUiLCJ0b3RhbENvc3QiLCJzdG9jayIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIml0ZW1zIiwiU2V0SXRlbXMiLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInB1cmNoYXNlQW1vdW50MSIsInNldFB1cmNoYXNlQW1vdW50MSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwicHVyY2hhc2VBbW91bnQyIiwic2V0UHVyY2hhc2VBbW91bnQyIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJwcm9qZWN0cyIsInNldFByb2plY3QiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJzdGF0dXMiLCJmZXRjaFByb2plY3QiLCJfcmVmMCIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImN1c3RvbWVyTmFtZSIsInNldEN1c3RvbWVyTmFtZSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJjdXN0b21lck5hbWUxIiwic2V0Q3VzdG9tZXJOYW1lMSIsInB1cmNoYXNlRGF0ZSIsIkRhdGUiLCJub3ciLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwicHJvamVjdE5hbWUiLCJzZXRQcm9qZWN0TmFtZSIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJwdXJjaGFzZU51bWJlciIsInNldFB1cmNoYXNlTnVtYmVyIiwiZGF0ZUNvbW1lbnQiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwiSXRlbUluZm9ybWF0aW9uIiwic2V0SXRlbUluZm9ybWF0aW9uIiwiZmV0Y2hsYXN0TnVtYmVyIiwiX3JlZjEiLCJfcmVzJGRhdGEiLCJfcmVzJGRhdGEyIiwibnVtIiwicGFyc2VJbnQiLCJmZXRjaEl0ZW0iLCJfcmVmMTAiLCJyZXZlcnNlIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsIkN1c3RvbWVyTmFtZUluZm8iLCJzZXRDdXN0b21lck5hbWVJbmZvIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsImludm9pY2VOYW1lIiwic2V0SW52b2ljZU5hbWUiLCJmZXRjaERhdGEiLCJfcmVmMTEiLCJhZGRJdGVtIiwiYWRkSXRlbVdoaXRlIiwibmV3RGVzY3JpcHRpb24iLCJfaWQiLCJpdGVtT3V0IiwibmV3SXRlbU91dCIsImhhbmRsZUNoYW5nZUl0ZW0iLCJuZXdWYWx1ZSIsInNlbGVjdGVkT3B0aW9ucyIsImZpbmQiLCJvcHRpb24iLCJtYXAiLCJyb3ciLCJpdGVtQ29zdFByaWNlIiwiaXRlbVNlbGxpbmdQcmljZSIsIml0ZW1RdWFudGl0eSIsImhhbmRsZUNoYW5nZSIsImUiLCJpIiwiX2UkdGFyZ2V0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwibGlzdCIsInRvVXBwZXJDYXNlIiwiTWF0aCIsInJvdW5kIiwiaGFuZGxlU2hvd0F1dG9jb21wbGV0ZSIsImhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbiIsImRlbGV0ZUl0ZW0iLCJmaWx0ZXIiLCJJdGVtIiwiZmlsdGVySXRlbUluZm9ybWF0aW9uIiwiX3JvdyRpdGVtTmFtZSIsInR5cGVJdGVtIiwiaGFuZGxlRHJhZ0VuZCIsInJlc3VsdCIsImRlc3RpbmF0aW9uIiwibmV3SXRlbXMiLCJfbmV3SXRlbXMkc3BsaWNlIiwic3BsaWNlIiwic291cmNlIiwiaW5kZXgiLCJfbmV3SXRlbXMkc3BsaWNlMiIsInJlbW92ZWQiLCJyZXN1bHQxIiwicmVkdWNlIiwic3VtIiwidG9GaXhlZCIsInJlc3VsdDIiLCJoYW5kbGVDaGFuZ2VQcm9qZWN0IiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsIm9wZW5BdXRvY29tcGxldGUxIiwic2V0T3BlbkF1dG9jb21wbGV0ZTEiLCJoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTEiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsIm9wZW5JdGVtVXBkYXRlIiwic2V0T3Blbkl0ZW1VcGRhdGUiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwiaWRJdGVtIiwic2V0SWRJdGVtIiwiaGFuZGxlT3Blbkl0ZW1VcGRhdGUiLCJfcmVmMTIiLCJfeCIsImhhbmRsZUNsb3NlSXRlbVVwZGF0ZSIsIl9yZWYxMyIsIl9yb3ckaXRlbU5hbWUyIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsIm9wZW5BdXRvY29tcGxldGUyIiwic2V0T3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlQ3JlYXRlSXRlbSIsIm5ld0l0ZW0iLCJoYW5kbGVDcmVhdGVQcm9qZWN0IiwibmV3UHJvamVjdCIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJvcGVuMSIsInNldE9wZW4xIiwiaGFuZGxlT3BlbkJhY2siLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlQmFjayIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVDbG9zZUVycm9yIiwiaGFuZGxlRGVjaXNpb24iLCJoaXN0b3J5IiwiYmFjayIsImludm9pY2VQdXJjaGFzZSIsImhhbmRsZVN1Ym1pdFN0YXR1c1VwZGF0ZSIsIlJlZmVyZW5jZUluZm8iLCJSZWZlcmVuY2VOYW1lMiIsInB1dCIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxNCIsIlJlZmVyZW5jZUluZm9OdW1iZXIiLCJpZEluZm8iLCJwZXJzb24iLCJyZWFzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwicG9zdCIsImxvZyIsIl94MiIsIl94MyIsInB1cmNoYXNlTmFtZSIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJzYXZpbmciLCJzZXRTYXZpbmciLCJoYW5kbGVDb252ZXJ0SW52b2ljZVRvUHVyY2hhc2UiLCJfcmVmMTUiLCJQb3NpdGlvbiIsIndhcm4iLCJhbGVydCIsIl94NCIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJpdGVtIiwieHMiLCJkaXNhYmxlZCIsImxhYmVsIiwiZGlzYWJsZUNsZWFyYWJsZSIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIm9uQ2hhbmdlIiwiUGFwZXJDb21wb25lbnQiLCJfcmVmMTYiLCJjaGlsZHJlbiIsIm90aGVyIiwiX2V4Y2x1ZGVkNCIsIm1hcmdpblRvcCIsIm9uTW91c2VEb3duIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJyZXF1aXJlZCIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsImZvcm1hdCIsImh0bWxGb3IiLCJ0eXBlIiwic3RhcnRBZG9ybm1lbnQiLCJmbG9hdCIsInJpZ2h0IiwidGl0bGUiLCJwbGFjZW1lbnQiLCJvbkRyYWdFbmQiLCJhbGlnbiIsImRyb3BwYWJsZUlkIiwicHJvdmlkZWQiLCJzbmFwc2hvdCIsImRyb3BwYWJsZVByb3BzIiwicmVmIiwiaW5uZXJSZWYiLCJrZXkiLCJkcmFnZ2FibGVJZCIsImRyYWdnYWJsZVByb3BzIiwidW5kZWZpbmVkIiwiRnJhZ21lbnQiLCJkcmFnSGFuZGxlUHJvcHMiLCJjb2xTcGFuIiwic2l6ZSIsImN1cnNvciIsImhpZGRlbiIsIm11bHRpbGluZSIsInJvd3MiLCJpdGVtQnJhbmQiLCJyZW5kZXJPcHRpb24iLCJvbklucHV0Q2hhbmdlIiwiZXZlbnQiLCJuZXdJbnB1dFZhbHVlIiwiZmlsdGVyT3B0aW9ucyIsIl9yZWYxNyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJfcmVmMTgiLCJfZXhjbHVkZWQ1IiwicmVwbGFjZSIsInBsYWNlaG9sZGVyIiwidGV4dEFsaWduIiwidG9TdHJpbmciLCJvbkNsb3NlIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwiZ2FwIiwib3ZlcmZsb3dZIiwib25DcmVhdGVPcHRpb24iLCJvbklkIiwiT3V0bGV0IiwiTGluayIsInVzZUxvY2F0aW9uIiwiRGFzaGJvYXJkSWNvbiIsIlBlcm1JZGVudGl0eUljb24iLCJMaXN0QWx0SWNvbiIsIkRlc2NyaXB0aW9uSWNvbiIsIlJlY2VpcHRJY29uIiwiTW92aW5nSWNvbiIsIlNldHRpbmdzSWNvbiIsIkluc2VydERyaXZlRmlsZUljb24iLCJSZXN0b3JlUGFnZUljb24iLCJSZXF1ZXN0UXVvdGVJY29uIiwiTW9uZXRpemF0aW9uT25JY29uIiwiRW5naW5lZXJpbmdJY29uIiwiRXhwbGljaXQiLCJTaG9wcGluZ0JhZ091dGxpbmVkIiwiUm9vbVByZWZlcmVuY2VzSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsIlBheW1lbnRJY29uIiwiTW9yZVZlcnRJY29uIiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=