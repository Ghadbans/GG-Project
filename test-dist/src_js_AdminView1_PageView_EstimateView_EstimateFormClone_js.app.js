"use strict";
exports.id = "src_js_AdminView1_PageView_EstimateView_EstimateFormClone_js";
exports.ids = ["src_js_AdminView1_PageView_EstimateView_EstimateFormClone_js"];
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

/***/ "./src/js/AdminView1/PageView/EstimateView/EstimateFormClone.js"
/*!**********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EstimateView/EstimateFormClone.js ***!
  \**********************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../utils/apiCache */ "./src/js/utils/apiCache.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../../../component/ItemThumbnail */ "./src/js/component/ItemThumbnail.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["children"],
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














































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref => {
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
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref3 => {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_24__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref5 => {
  var theme = _ref5.theme,
    open = _ref5.open;
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
})(_ref6 => {
  var theme = _ref6.theme,
    open = _ref6.open;
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
function EstimateFormClone() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_39__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_39__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_50__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_50__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__.setUser)({
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
        return _ref7.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/create-estimation");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("QUOTE VALID FOR 30 DAYS (SUBJECT TO STOCK/MARKET CHANGES). PAYMENT: 40% DEPOSIT / 50% MID-PROJECT / 10% UPON COMPLETION. ALL MATERIAL SALES ARE FINAL. WE ARE NOT RESPONSIBLE FOR LOSS, THEFT, OR DAMAGE CAUSED BY DEFECTIVE PARTS OR EXTERNAL FACTORS."),
    _useState2 = _slicedToArray(_useState, 2),
    terms = _useState2[0],
    setTerms = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return dayjs__WEBPACK_IMPORTED_MODULE_45___default()(date);
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    estimateDate = _useState4[0],
    setEstimateDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    estimateSubject = _useState6[0],
    setEstimateSubject = _useState6[1];
  var status = "Draft";
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    estimateDefect = _useState8[0],
    setEstimateDefect = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("WE LOOK FORWARD TO THE OPPORTUNITY TO DO BUSINESS WITH YOU."),
    _useState0 = _slicedToArray(_useState9, 2),
    note = _useState0[0],
    setNote = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    items = _useState10[0],
    SetItems = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    subTotal = _useState12[0],
    setSubTotal = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    total = _useState14[0],
    setTotal = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    shipping = _useState16[0],
    setShipping = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Adjustment'),
    _useState18 = _slicedToArray(_useState17, 2),
    adjustment = _useState18[0],
    setAdjustment = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    adjustmentNumber = _useState20[0],
    setAdjustmentNumber = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    totalInvoice = _useState22[0],
    setTotalInvoice = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    balanceDue = _useState24[0],
    setBalanceDue = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    totalW = _useState26[0],
    setTotalW = _useState26[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    quotationNumber = _useState28[0],
    setQuotationNumber = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    includeLetter = _useState30[0],
    setIncludeLetter = _useState30[1];
  var PROFESSIONAL_COVER_LETTER = "Dear Valued Customer,\n\nThank you for giving us the opportunity to provide you with this quotation for your upcoming project.\n\nAt GLOBAL GATE SARL, we pride ourselves on delivering high-quality services and materials tailored to meet your specific needs. Our team has carefully reviewed your requirements, and we are confident that the proposed solution offers the best value and technical excellence.\n\nWe remain at your disposal for any further information or clarification you may require. We look forward to the possibility of working together.\n\nBest regards,\n\nThe GLOBAL GATE Team";
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(PROFESSIONAL_COVER_LETTER),
    _useState32 = _slicedToArray(_useState31, 2),
    attachedLetter = _useState32[0],
    setAttachedLetter = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState34 = _slicedToArray(_useState33, 2),
    noteInfo = _useState34[0],
    setNoteInfo = _useState34[1];
  var dateComment = new Date();
  var estimateName = "QUO-" + String(quotationNumber).padStart(6, '0');
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState36 = _slicedToArray(_useState35, 2),
    ItemInformation = _useState36[0],
    setItemInformation = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState38 = _slicedToArray(_useState37, 2),
    customerName = _useState38[0],
    setCustomerName = _useState38[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-last-saved-estimation"));
          setQuotationNumber(parseInt(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.estimateNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.estimateNumber) || 0) + 1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchlastNumber() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchlastNumber();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-estimation/").concat(id));
          setCustomerName(res.data.data.customerName);
          setEstimateDate(res.data.data.estimateDate);
          setEstimateSubject(res.data.data.estimateSubject);
          SetItems(res.data.data.items);
          setSubTotal(res.data.data.subTotal);
          setTotal(res.data.data.total);
          setNote(res.data.data.note);
          setEstimateDefect(res.data.data.estimateDefect);
          setTerms(res.data.data.terms);
          setNoteInfo(res.data.data.noteInfo);
          setIncludeLetter(res.data.data.includeLetter || false);
          setAttachedLetter(res.data.data.attachedLetter || PROFESSIONAL_COVER_LETTER);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchItem = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/item"));
          setItemInformation(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchItem() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchItem();
  }, []);
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
      stock: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemQuantity,
      data: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.data,
      contentType: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.contentType
    }) : row));
  };
  var handleChange = (e, i) => {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var list = [...items];
    list[i][name] = value;
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
  var handleChangeCEO = (e, i) => {
    var _e$target2 = e.target,
      name = _e$target2.name,
      value = _e$target2.value;
    var list = [...items];
    list[i][name] = value;
    list[i]['totalAmount'] = Math.round(list[i]['itemQty'] * list[i]['itemRate'] * 100) / 100;
    list[i]['totalCost'] = Math.round(list[i]['itemQty'] * list[i]['itemCost'] * 100) / 100;
    list[i]['discount'] = list[i]['totalAmount'] * list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount'] / 100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount'] - list[i]['percentage']) * 100) / 100;
    list[i]['totalGenerale'] = Math.round(list[i]['itemCost'] * list[i]['itemBuy'] * 100) / 100;
    SetItems(list);
  };

  //addItem
  var addItem = () => {
    SetItems([...items, {
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
  var deleteItem = idRow => {
    SetItems(items => items.filter(Item => Item.idRow !== idRow));
  };
  var filterItemInformation = ItemInformation.filter(option => !items.find(row => {
    var _row$itemName;
    return option._id === ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName._id) && option.typeItem === "Goods";
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (totalInvoice) {
      var wholePart = Math.floor(totalInvoice);
      var fractionalPart = (totalInvoice % 1).toFixed(2).split('.')[1];
      var wholeWords = number_to_words__WEBPACK_IMPORTED_MODULE_57___default().toWords(wholePart);
      var fractionalWords = number_to_words__WEBPACK_IMPORTED_MODULE_57___default().toWords(fractionalPart);
      setTotalW("".concat(wholeWords, " and ").concat(fractionalWords, " cents"));
    }
  }, [totalInvoice]);
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState40 = _slicedToArray(_useState39, 2),
    customer = _useState40[0],
    setCustomer = _useState40[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCustomer = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/customer"));
          setCustomer(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchCustomer() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchCustomer();
  }, []);
  var handleClearCustomer = () => {
    setCustomerName({
      _id: '',
      customerName: '',
      billingAddress: '',
      billingCity: ''
    });
  };
  var handleChangeCustomer = newValue => {
    var selectedOptions = customer.find(option => option === newValue);
    setCustomerName({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      customerName: (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.customerFullName) || (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.companyName),
      billingAddress: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingAddress,
      billingCity: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingCity
    });
  };
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result1 = items.reduce((sum, row) => sum + row.itemAmount, 0);
    setSubTotal(result1.toFixed(2));
    var newTotal = Math.round((Number(subTotal) + Number(shipping) + Number(adjustmentNumber)) * 100) / 100;
    setTotalInvoice(newTotal);
    var newBalance = Math.round((totalInvoice - total) * 100) / 100;
    setBalanceDue(newBalance);
  });
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    openAutocomplete1 = _useState42[0],
    setOpenAutocomplete1 = _useState42[1];
  var handleOpenOpenAutocomplete1 = e => {
    e.stopPropagation();
    setOpenAutocomplete1(true);
  };
  var handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    openItemUpdate = _useState44[0],
    setOpenItemUpdate = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState46 = _slicedToArray(_useState45, 2),
    idItem = _useState46[0],
    setIdItem = _useState46[1];
  var handleOpenItemUpdate = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (id) {
      setOpenItemUpdate(true);
      setIdItem(id);
    });
    return function handleOpenItemUpdate(_x) {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleCloseItemUpdate = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      setOpenItemUpdate(false);
      if (idItem) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-item/").concat(idItem));
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
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    });
    return function handleCloseItemUpdate() {
      return _ref11.apply(this, arguments);
    };
  }();
  var handleCreateCustomer = newCustomer => {
    setCustomer([newCustomer, ...customer]);
  };
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    openAutocomplete2 = _useState48[0],
    setOpenAutocomplete2 = _useState48[1];
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
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    open1 = _useState50[0],
    setOpen1 = _useState50[1];
  var handleOpenUpdate = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
  };
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState52 = _slicedToArray(_useState51, 2),
    loading = _useState52[0],
    setLoading = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState54 = _slicedToArray(_useState53, 2),
    loadingOpenModal = _useState54[0],
    setLoadingOpenModal = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState56 = _slicedToArray(_useState55, 2),
    ErrorOpenModal = _useState56[0],
    setErrorOpenModal = _useState56[1];
  var handleOpen = () => {
    setOpen1(false);
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleError = () => {
    setOpen1(false);
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
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
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: 'QUO-' + String(ReferenceInfoNumber).padStart(6, '0') + ' For ' + customerName.customerName,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2, _x3) {
      return _ref12.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_38__["default"])(),
        customerName,
        estimateNumber: quotationNumber,
        estimateDate,
        estimateDefect,
        estimateSubject,
        status,
        items,
        subTotal,
        total,
        totalW,
        note,
        estimateName,
        noteInfo,
        terms,
        shipping,
        adjustment,
        adjustmentNumber,
        totalInvoice,
        balanceDue,
        synced: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post(apiUrl, data);
        if (res) {
          (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_40__.invalidateCache)('/estimation');
          // Open Loading View
          handleOpen();
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.estimateNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
          //Reset form
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmit(_x4) {
      return _ref13.apply(this, arguments);
    };
  }();
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__.logOut)());
    navigate('/');
  };
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_30__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Add new quotation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleOpenUpdate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_60__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_59__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_52__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_31__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_29__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
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
  }, customerName.customerName !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    name: "CUstomer Name",
    value: customerName.customerName !== undefined ? customerName.customerName : '',
    sx: {
      width: '100%'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClearCustomer,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    options: customer,
    getOptionLabel: option => option.Customer,
    onChange: (e, newValue) => {
      handleChangeCustomer(newValue);
    },
    PaperComponent: _ref14 => {
      var children = _ref14.children,
        other = _objectWithoutProperties(_ref14, _excluded3);
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
      }, "ADD NEW CUSTOMER")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, params, {
      label: "Customer Name",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "estimateNumber"
  }, "Quotation Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    required: true,
    type: "number",
    id: "estimateNumber",
    label: "Quotation Number",
    value: quotationNumber,
    onChange: e => setQuotationNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "QUO-00")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_42__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_43__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_41__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_44__.DatePicker, {
    required: true,
    name: "estimateDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_45___default()(estimateDate),
    onChange: date => setEstimateDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "estimateSubject",
    name: "estimateSubject",
    label: "Subject",
    value: estimateSubject,
    onChange: e => setEstimateSubject(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "estimateDefect",
    name: "estimateDefect",
    label: "Defect",
    value: estimateDefect,
    onChange: e => setEstimateDefect(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "noteInfo",
    name: "noteInfo",
    multiline: true,
    rows: 3,
    value: noteInfo,
    label: "Note",
    onChange: e => setNoteInfo(e.target.value),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: addItemWhite
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    className: "btn1",
    style: {
      backgroundColor: 'gray',
      fontSize: '40px'
    }
  }))))), user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_58__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_58__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_58__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => {
    var _Item$itemName;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      required: true,
      name: "newDescription",
      id: "newDescription",
      value: Item.newDescription,
      onChange: e => handleChangeCEO(e, i),
      size: "small",
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
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        height: '100px'
      }
    }, Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_61__["default"], {
      itemId: (_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName._id,
      initialData: Item.data,
      initialType: Item.contentType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      onChange: e => handleChangeCEO(e, i),
      size: "small",
      sx: {
        width: '400px',
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
      renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
        sx: {
          backgroundColor: '#f2f2f2'
        }
      }), option.itemName + '/' + option.itemBrand),
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
      filterOptions: (options, _ref15) => {
        var inputValue = _ref15.inputValue;
        return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
      },
      onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
      size: "small",
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      disabled: true,
      name: "stock",
      id: "stock",
      value: Item.stock,
      onChange: e => handleChangeCEO(e, i),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "itemQty",
      id: "itemQty",
      onChange: e => handleChangeCEO(e, i),
      size: "small",
      value: Item.itemQty,
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "itemRate",
      id: "itemRate",
      value: Item.itemRate,
      onChange: e => handleChangeCEO(e, i),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "itemDiscount",
      id: "itemDiscount",
      value: Item.itemDiscount,
      onChange: e => handleChangeCEO(e, i),
      size: "small",
      placeholder: "1 to 5 %",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "amountTotalInvoice"
    }, Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
      title: "Delete",
      sx: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => deleteItem(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))));
  })), provided.placeholder))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_58__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_58__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_58__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => {
    var _Item$itemName2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      required: true,
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
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        height: '100px'
      }
    }, Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_61__["default"], {
      itemId: (_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2._id,
      initialData: Item.data,
      initialType: Item.contentType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      disabled: true,
      sx: {
        width: '400px',
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      disabled: true,
      name: "stock",
      id: "stock",
      value: Item.stock,
      onChange: e => handleChange(e, i),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
      name: "itemRate",
      id: "itemRate",
      value: Item.itemRate,
      disabled: true,
      onChange: e => handleChange(e, i),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "itemDiscount",
      id: "itemDiscount",
      value: Item.itemDiscount,
      onChange: e => handleChange(e, i),
      size: "small",
      placeholder: "1 to 5 %",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "amountTotalInvoice"
    }, Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
      title: "Delete",
      sx: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => deleteItem(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))));
  })), provided.placeholder)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "note",
    name: "note",
    multiline: true,
    rows: 4,
    value: note,
    label: "Quote Note",
    onChange: e => setNote(e.target.value),
    sx: {
      width: '50%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "firstTable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Sub-Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: true,
    type: "number",
    id: "subTotal",
    size: "small",
    name: "subTotal",
    value: subTotal,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: true,
    type: "number",
    id: "totalInvoice",
    size: "small",
    name: "totalInvoice",
    value: totalInvoice,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "number",
    id: "balanceDue",
    size: "small",
    name: "balanceDue",
    value: balanceDue,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Total In Words"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "totalW",
    id: "totalW",
    value: totalW,
    multiline: true,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    maxRows: 3
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "terms",
    name: "terms",
    multiline: true,
    rows: 4,
    value: terms,
    label: "Quote Terms",
    onChange: e => setTerms(e.target.value),
    sx: {
      width: '60%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12,
    sx: {
      mt: 2,
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    orientation: "horizontal",
    flexItem: true,
    sx: {
      fontWeight: 'bold'
    }
  }, " COVER LETTER (Optional) ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      checked: includeLetter,
      onChange: e => setIncludeLetter(e.target.checked),
      sx: {
        color: '#30368a',
        '&.Mui-checked': {
          color: '#30368a'
        }
      }
    }),
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        fontWeight: 'bold',
        color: '#30368a'
      }
    }, "Attach Professional Cover Letter to this Quotation")
  })), includeLetter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "attachedLetter",
    name: "attachedLetter",
    multiline: true,
    rows: 8,
    value: attachedLetter,
    label: "Cover Letter Content",
    onChange: e => setAttachedLetter(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    placeholder: "Write a professional introduction for your quotation..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: open1,
    onClose: handleCloseUpdate,
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
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Do you want to stop creating Quotation ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    onClick: handleCloseUpdate,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_49__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    onClick: () => handleDecision('stay'),
    className: "btnCustomer"
  }, "Add New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDecision('previous'),
    className: "btnCustomer"
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_49__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "Saving Failed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_53__["default"], {
    onCreateOption: handleCreateCustomer,
    onClose: handleCloseOpenAutocomplete1
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_55__["default"], {
    onCreateOption: handleCreateItem,
    onClose: handleCloseOpenAutocomplete2
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_56__["default"], {
    onClose: handleCloseItemUpdate,
    id: idItem
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EstimateFormClone);

/***/ },

/***/ "./src/js/component/ItemThumbnail.js"
/*!*******************************************!*\
  !*** ./src/js/component/ItemThumbnail.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_icons_material_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/ShoppingCartOutlined */ "./node_modules/@mui/icons-material/ShoppingCartOutlined.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;




var ItemThumbnail = _ref => {
  var itemId = _ref.itemId,
    initialData = _ref.initialData,
    initialType = _ref.initialType;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    src = _useState2[0],
    setSrc = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchImage = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* () {
        // 1. Check for initialData (passed from search/shop)
        if (initialData && initialType && initialData !== "undefined" && initialType !== "undefined" && initialData !== "null") {
          if (typeof initialData === 'string' && initialData.length > 50) {
            // Check if it's already a data URL
            if (initialData.startsWith('data:')) {
              setSrc(initialData);
            } else {
              setSrc("data:".concat(initialType, ";base64,").concat(initialData));
            }
            return;
          } else if (initialData.data) {
            // Handle buffer object if it's not converted to string yet
            var buffer = new Uint8Array(initialData.data);
            var blob = new Blob([buffer], {
              type: initialType
            });
            var reader = new FileReader();
            reader.onloadend = () => setSrc(reader.result);
            reader.readAsDataURL(blob);
            return;
          }
        }

        // 2. Fallback to fetch if no initial data or if it was invalid
        if (!itemId || itemId === "undefined" || itemId === "null") {
          setSrc(null);
          return;
        }
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_4__.ENDPOINT_URL, "/get-item/").concat(itemId));
          if (res.data.data && res.data.data.data) {
            var _buffer = new Uint8Array(res.data.data.data.data);
            var _blob = new Blob([_buffer], {
              type: res.data.data.contentType
            });
            var _reader = new FileReader();
            _reader.onloadend = () => setSrc(_reader.result);
            _reader.readAsDataURL(_blob);
          } else {
            setSrc(null);
          }
        } catch (err) {
          console.error("Error fetching online image:", err);
          setSrc(null);
        }
      });
      return function fetchImage() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchImage();
  }, [itemId, initialData, initialType]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "rounded",
    src: src,
    sx: {
      width: 80,
      height: 80,
      backgroundColor: '#f0f0f0',
      border: '1px solid #ddd'
    }
  }, !src && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: 40,
      color: '#999'
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemThumbnail);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRXN0aW1hdGVWaWV3X0VzdGltYXRlRm9ybUNsb25lX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLDBCQUEwQixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjNCOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLFVBQVUsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05YLENBQW1EO0FBQ1E7QUFDbkM7QUFDRTtBQUMwQjtBQUNzQjtBQUNSO0FBQ2Q7QUFDNlA7QUFDalA7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDeEM7QUFDd0I7QUFDOEQ7QUFDdEY7QUFDZ0M7QUFDQTtBQUNTO0FBQ2E7QUFDaEI7QUFDSjtBQUNsQztBQUM0QjtBQUNRO0FBQ1Y7QUFDTDtBQUNRO0FBQytCO0FBQ3RDO0FBQ2tCO0FBQ3BCO0FBQ1E7QUFDSTtBQUNmO0FBQ2lDO0FBQ3RCO0FBQ1E7QUFDRDtBQUc3RCxJQUFNbUYsWUFBWSxHQUFHM0QsMERBQU0sQ0FBQzRELElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNoRHhGLDBEQUFBLENBQUNrQyw4REFBTyxFQUFBd0QsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFB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YTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQyx3RUFBZTtBQUN6QyxjQUFjLG1CQUFPLENBQUMsZ0VBQVc7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRHJhZ0luZGljYXRvclJvdW5kZWQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9FZGl0LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9Fc3RpbWF0ZVZpZXcvRXN0aW1hdGVGb3JtQ2xvbmUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvSXRlbVRodW1ibmFpbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9pc0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvaXNTYWZlTnVtYmVyLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9tYWtlT3JkaW5hbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvbWF4U2FmZUludGVnZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL3RvT3JkaW5hbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvdG9Xb3Jkcy5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvdG9Xb3Jkc09yZGluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTEgMThjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0yLThjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTAtNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJtNiA0YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMm0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTAgNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJcIlxufSksICdEcmFnSW5kaWNhdG9yUm91bmRlZCcpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzV6TTIwLjcxIDcuMDRjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0YS45OTU5Ljk5NTkgMCAwIDAtMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1elwiXG59KSwgJ0VkaXQnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoMSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2gxJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcyc7XHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudENpcmNsZSc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgTWVudUl0ZW0sIEdyaWQsIEljb25CdXR0b24sIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVSb3csIFRhYmxlSGVhZCwgUGFwZXIsIFRhYmxlQ29udGFpbmVyLCBUZXh0RmllbGQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIFR5cG9ncmFwaHksIEF1dG9jb21wbGV0ZSwgc3R5bGVkLCBNb2RhbCwgQmFja2Ryb3AsIEZhZGUsIEJveCwgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIERpdmlkZXIsIEZvcm1Db250cm9sTGFiZWwsIENoZWNrYm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBBZGQsIEFycm93VXB3YXJkT3V0bGluZWQsIERyYWdJbmRpY2F0b3JSb3VuZGVkLCBFZGl0LCBSZW1vdmVDaXJjbGVPdXRsaW5lIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNhY2hlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXBpQ2FjaGUnO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBDdXN0b21lckZvcm1WaWV3MiBmcm9tICcuLi9DdXN0b21lclZJZXcvQ3VzdG9tZXJGb3JtVmlldzInO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBJdGVtRm9ybVZpZXcyIGZyb20gJy4uL0l0ZW1WaWV3L0l0ZW1Gb3JtVmlldzInO1xyXG5pbXBvcnQgSXRlbVVwZGF0ZVZpZXcyIGZyb20gJy4uL0l0ZW1WaWV3L0l0ZW1VcGRhdGVWaWV3Mic7XHJcbmltcG9ydCBudW1iZXJUb1dvcmRzIGZyb20gJ251bWJlci10by13b3JkcydcclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5pbXBvcnQgSXRlbVRodW1ibmFpbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvSXRlbVRodW1ibmFpbCc7XHJcblxyXG5cclxuY29uc3QgTGlnaHRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQmxhY2tUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IHN0eWxlMiA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDgwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcblxyXG5mdW5jdGlvbiBFc3RpbWF0ZUZvcm1DbG9uZSgpIHtcclxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgYXBpVXJsID0gYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtZXN0aW1hdGlvbmA7XHJcbiAgY29uc3QgW3Rlcm1zLCBzZXRUZXJtc10gPSB1c2VTdGF0ZShcIlFVT1RFIFZBTElEIEZPUiAzMCBEQVlTIChTVUJKRUNUIFRPIFNUT0NLL01BUktFVCBDSEFOR0VTKS4gUEFZTUVOVDogNDAlIERFUE9TSVQgLyA1MCUgTUlELVBST0pFQ1QgLyAxMCUgVVBPTiBDT01QTEVUSU9OLiBBTEwgTUFURVJJQUwgU0FMRVMgQVJFIEZJTkFMLiBXRSBBUkUgTk9UIFJFU1BPTlNJQkxFIEZPUiBMT1NTLCBUSEVGVCwgT1IgREFNQUdFIENBVVNFRCBCWSBERUZFQ1RJVkUgUEFSVFMgT1IgRVhURVJOQUwgRkFDVE9SUy5cIik7XHJcbiAgY29uc3QgW2VzdGltYXRlRGF0ZSwgc2V0RXN0aW1hdGVEYXRlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICByZXR1cm4gZGF5anMoZGF0ZSlcclxuICB9KTtcclxuICBjb25zdCBbZXN0aW1hdGVTdWJqZWN0LCBzZXRFc3RpbWF0ZVN1YmplY3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgc3RhdHVzID0gXCJEcmFmdFwiO1xyXG4gIGNvbnN0IFtlc3RpbWF0ZURlZmVjdCwgc2V0RXN0aW1hdGVEZWZlY3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gdXNlU3RhdGUoXCJXRSBMT09LIEZPUldBUkQgVE8gVEhFIE9QUE9SVFVOSVRZIFRPIERPIEJVU0lORVNTIFdJVEggWU9VLlwiKTtcclxuICBjb25zdCBbaXRlbXMsIFNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3ViVG90YWwsIHNldFN1YlRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NoaXBwaW5nLCBzZXRTaGlwcGluZ10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWRqdXN0bWVudCwgc2V0QWRqdXN0bWVudF0gPSB1c2VTdGF0ZSgnQWRqdXN0bWVudCcpXHJcbiAgY29uc3QgW2FkanVzdG1lbnROdW1iZXIsIHNldEFkanVzdG1lbnROdW1iZXJdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbdG90YWxJbnZvaWNlLCBzZXRUb3RhbEludm9pY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2JhbGFuY2VEdWUsIHNldEJhbGFuY2VEdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsVywgc2V0VG90YWxXXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcXVvdGF0aW9uTnVtYmVyLCBzZXRRdW90YXRpb25OdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2luY2x1ZGVMZXR0ZXIsIHNldEluY2x1ZGVMZXR0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFBST0ZFU1NJT05BTF9DT1ZFUl9MRVRURVIgPSBgRGVhciBWYWx1ZWQgQ3VzdG9tZXIsXHJcblxyXG5UaGFuayB5b3UgZm9yIGdpdmluZyB1cyB0aGUgb3Bwb3J0dW5pdHkgdG8gcHJvdmlkZSB5b3Ugd2l0aCB0aGlzIHF1b3RhdGlvbiBmb3IgeW91ciB1cGNvbWluZyBwcm9qZWN0LlxyXG5cclxuQXQgR0xPQkFMIEdBVEUgU0FSTCwgd2UgcHJpZGUgb3Vyc2VsdmVzIG9uIGRlbGl2ZXJpbmcgaGlnaC1xdWFsaXR5IHNlcnZpY2VzIGFuZCBtYXRlcmlhbHMgdGFpbG9yZWQgdG8gbWVldCB5b3VyIHNwZWNpZmljIG5lZWRzLiBPdXIgdGVhbSBoYXMgY2FyZWZ1bGx5IHJldmlld2VkIHlvdXIgcmVxdWlyZW1lbnRzLCBhbmQgd2UgYXJlIGNvbmZpZGVudCB0aGF0IHRoZSBwcm9wb3NlZCBzb2x1dGlvbiBvZmZlcnMgdGhlIGJlc3QgdmFsdWUgYW5kIHRlY2huaWNhbCBleGNlbGxlbmNlLlxyXG5cclxuV2UgcmVtYWluIGF0IHlvdXIgZGlzcG9zYWwgZm9yIGFueSBmdXJ0aGVyIGluZm9ybWF0aW9uIG9yIGNsYXJpZmljYXRpb24geW91IG1heSByZXF1aXJlLiBXZSBsb29rIGZvcndhcmQgdG8gdGhlIHBvc3NpYmlsaXR5IG9mIHdvcmtpbmcgdG9nZXRoZXIuXHJcblxyXG5CZXN0IHJlZ2FyZHMsXHJcblxyXG5UaGUgR0xPQkFMIEdBVEUgVGVhbWA7XHJcbiAgY29uc3QgW2F0dGFjaGVkTGV0dGVyLCBzZXRBdHRhY2hlZExldHRlcl0gPSB1c2VTdGF0ZShQUk9GRVNTSU9OQUxfQ09WRVJfTEVUVEVSKTtcclxuICBjb25zdCBbbm90ZUluZm8sIHNldE5vdGVJbmZvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGRhdGVDb21tZW50ID0gbmV3IERhdGUoKVxyXG4gIGNvbnN0IGVzdGltYXRlTmFtZSA9IFwiUVVPLVwiICsgU3RyaW5nKHF1b3RhdGlvbk51bWJlcikucGFkU3RhcnQoNiwgJzAnKVxyXG4gIGNvbnN0IFtJdGVtSW5mb3JtYXRpb24sIHNldEl0ZW1JbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtjdXN0b21lck5hbWUsIHNldEN1c3RvbWVyTmFtZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNobGFzdE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbGFzdC1zYXZlZC1lc3RpbWF0aW9uYClcclxuICAgICAgICBzZXRRdW90YXRpb25OdW1iZXIoKHBhcnNlSW50KHJlcy5kYXRhPy5kYXRhPy5lc3RpbWF0ZU51bWJlciB8fCByZXMuZGF0YT8uZXN0aW1hdGVOdW1iZXIgfHwgMCkpICsgMSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hsYXN0TnVtYmVyKClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lc3RpbWF0aW9uLyR7aWR9YClcclxuICAgICAgICBzZXRDdXN0b21lck5hbWUocmVzLmRhdGEuZGF0YS5jdXN0b21lck5hbWUpO1xyXG4gICAgICAgIHNldEVzdGltYXRlRGF0ZShyZXMuZGF0YS5kYXRhLmVzdGltYXRlRGF0ZSk7XHJcbiAgICAgICAgc2V0RXN0aW1hdGVTdWJqZWN0KHJlcy5kYXRhLmRhdGEuZXN0aW1hdGVTdWJqZWN0KTtcclxuICAgICAgICBTZXRJdGVtcyhyZXMuZGF0YS5kYXRhLml0ZW1zKTtcclxuICAgICAgICBzZXRTdWJUb3RhbChyZXMuZGF0YS5kYXRhLnN1YlRvdGFsKTtcclxuICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5kYXRhLnRvdGFsKTtcclxuICAgICAgICBzZXROb3RlKHJlcy5kYXRhLmRhdGEubm90ZSk7XHJcbiAgICAgICAgc2V0RXN0aW1hdGVEZWZlY3QocmVzLmRhdGEuZGF0YS5lc3RpbWF0ZURlZmVjdCk7XHJcbiAgICAgICAgc2V0VGVybXMocmVzLmRhdGEuZGF0YS50ZXJtcyk7XHJcbiAgICAgICAgc2V0Tm90ZUluZm8ocmVzLmRhdGEuZGF0YS5ub3RlSW5mbyk7XHJcbiAgICAgICAgc2V0SW5jbHVkZUxldHRlcihyZXMuZGF0YS5kYXRhLmluY2x1ZGVMZXR0ZXIgfHwgZmFsc2UpO1xyXG4gICAgICAgIHNldEF0dGFjaGVkTGV0dGVyKHJlcy5kYXRhLmRhdGEuYXR0YWNoZWRMZXR0ZXIgfHwgUFJPRkVTU0lPTkFMX0NPVkVSX0xFVFRFUik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoSXRlbSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtYClcclxuICAgICAgICBzZXRJdGVtSW5mb3JtYXRpb24ocmVzLmRhdGEuZGF0YS5yZXZlcnNlKCkpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoSXRlbSgpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSXRlbSA9IChpZFJvdywgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IG5ld1ZhbHVlXHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93LmlkUm93ID09PSBpZFJvdyA/IHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogc2VsZWN0ZWRPcHRpb25zPy5faWQsXHJcbiAgICAgICAgaXRlbU5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbU5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1Db3N0OiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogc2VsZWN0ZWRPcHRpb25zPy5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgIGl0ZW1SYXRlOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN0b2NrOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1RdWFudGl0eSxcclxuICAgICAgZGF0YTogc2VsZWN0ZWRPcHRpb25zPy5kYXRhLFxyXG4gICAgICBjb250ZW50VHlwZTogc2VsZWN0ZWRPcHRpb25zPy5jb250ZW50VHlwZSxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgaSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLml0ZW1zXTtcclxuICAgIGxpc3RbaV1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIGlmIChsaXN0W2ldWydpdGVtRGlzY291bnQnXSA+IDUpIHtcclxuICAgICAgbGlzdFtpXVsnaXRlbURpc2NvdW50J10gPSA1XHJcbiAgICB9XHJcbiAgICBsaXN0W2ldWyd0b3RhbEFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbVJhdGUnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxDb3N0J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtQ29zdCddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWydkaXNjb3VudCddID0gbGlzdFtpXVsndG90YWxBbW91bnQnXSAqIGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddO1xyXG4gICAgbGlzdFtpXVsncGVyY2VudGFnZSddID0gbGlzdFtpXVsnZGlzY291bnQnXSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2l0ZW1BbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gLSBsaXN0W2ldWydwZXJjZW50YWdlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsR2VuZXJhbGUnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1Db3N0J10gKiBsaXN0W2ldWydpdGVtQnV5J10pICogMTAwKSAvIDEwMDtcclxuICAgIFNldEl0ZW1zKGxpc3QpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDRU8gPSAoZSwgaSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLml0ZW1zXTtcclxuICAgIGxpc3RbaV1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtUmF0ZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWyd0b3RhbENvc3QnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1RdHknXSAqIGxpc3RbaV1bJ2l0ZW1Db3N0J10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2Rpc2NvdW50J10gPSBsaXN0W2ldWyd0b3RhbEFtb3VudCddICogbGlzdFtpXVsnaXRlbURpc2NvdW50J107XHJcbiAgICBsaXN0W2ldWydwZXJjZW50YWdlJ10gPSBsaXN0W2ldWydkaXNjb3VudCddIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnaXRlbUFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsndG90YWxBbW91bnQnXSAtIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxHZW5lcmFsZSddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbUNvc3QnXSAqIGxpc3RbaV1bJ2l0ZW1CdXknXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgU2V0SXRlbXMobGlzdCk7XHJcbiAgfVxyXG5cclxuICAvL2FkZEl0ZW1cclxuICBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xyXG4gICAgU2V0SXRlbXMoWy4uLml0ZW1zLCB7XHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogXCJcIixcclxuICAgICAgICBpdGVtTmFtZTogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgIGl0ZW1Db3N0OiAwLFxyXG4gICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgIGl0ZW1CdXk6IDAsXHJcbiAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgIHRvdGFsR2VuZXJhbGU6IDAsXHJcbiAgICAgIHRvdGFsQ29zdDogMCxcclxuICAgICAgc3RvY2s6IDAsXHJcbiAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICB9XSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1XaGl0ZSA9ICgpID0+IHtcclxuICAgIFNldEl0ZW1zKFsuLi5pdGVtcywge1xyXG4gICAgICBuZXdEZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH1dKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChyZXN1bHQpID0+IHtcclxuICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0l0ZW1zID0gWy4uLml0ZW1zXTtcclxuICAgIGNvbnN0IFtyZW1vdmVkXSA9IG5ld0l0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcclxuICAgIG5ld0l0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlbW92ZWQpO1xyXG4gICAgU2V0SXRlbXMobmV3SXRlbXMpXHJcbiAgfTtcclxuICBjb25zdCBkZWxldGVJdGVtID0gaWRSb3cgPT4ge1xyXG4gICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMuZmlsdGVyKChJdGVtKSA9PiBJdGVtLmlkUm93ICE9PSBpZFJvdykpO1xyXG4gIH07XHJcbiAgY29uc3QgZmlsdGVySXRlbUluZm9ybWF0aW9uID0gSXRlbUluZm9ybWF0aW9uLmZpbHRlcihvcHRpb24gPT4gIWl0ZW1zLmZpbmQoKHJvdykgPT4gb3B0aW9uLl9pZCA9PT0gcm93Lml0ZW1OYW1lPy5faWQgJiYgb3B0aW9uLnR5cGVJdGVtID09PSBcIkdvb2RzXCIpKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodG90YWxJbnZvaWNlKSB7XHJcbiAgICAgIGNvbnN0IHdob2xlUGFydCA9IE1hdGguZmxvb3IodG90YWxJbnZvaWNlKVxyXG4gICAgICBjb25zdCBmcmFjdGlvbmFsUGFydCA9ICh0b3RhbEludm9pY2UgJSAxKS50b0ZpeGVkKDIpLnNwbGl0KCcuJylbMV07XHJcbiAgICAgIGNvbnN0IHdob2xlV29yZHMgPSBudW1iZXJUb1dvcmRzLnRvV29yZHMod2hvbGVQYXJ0KVxyXG4gICAgICBjb25zdCBmcmFjdGlvbmFsV29yZHMgPSBudW1iZXJUb1dvcmRzLnRvV29yZHMoZnJhY3Rpb25hbFBhcnQpXHJcbiAgICAgIHNldFRvdGFsVyhgJHt3aG9sZVdvcmRzfSBhbmQgJHtmcmFjdGlvbmFsV29yZHN9IGNlbnRzYClcclxuICAgIH1cclxuICB9LCBbdG90YWxJbnZvaWNlXSlcclxuICBjb25zdCBbY3VzdG9tZXIsIHNldEN1c3RvbWVyXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hDdXN0b21lciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9jdXN0b21lcmApXHJcbiAgICAgICAgc2V0Q3VzdG9tZXIocmVzLmRhdGEuZGF0YS5yZXZlcnNlKCkpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaEN1c3RvbWVyKClcclxuICB9LCBbXSlcclxuICBjb25zdCBoYW5kbGVDbGVhckN1c3RvbWVyID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VzdG9tZXJOYW1lKHtcclxuICAgICAgX2lkOiAnJyxcclxuICAgICAgY3VzdG9tZXJOYW1lOiAnJyxcclxuICAgICAgYmlsbGluZ0FkZHJlc3M6ICcnLFxyXG4gICAgICBiaWxsaW5nQ2l0eTogJydcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDdXN0b21lciA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gY3VzdG9tZXIuZmluZCgob3B0aW9uKSA9PiBvcHRpb24gPT09IG5ld1ZhbHVlKVxyXG4gICAgc2V0Q3VzdG9tZXJOYW1lKHtcclxuICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgY3VzdG9tZXJOYW1lOiBzZWxlY3RlZE9wdGlvbnM/LmN1c3RvbWVyRnVsbE5hbWUgfHwgc2VsZWN0ZWRPcHRpb25zPy5jb21wYW55TmFtZSxcclxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHNlbGVjdGVkT3B0aW9ucz8uYmlsbGluZ0FkZHJlc3MsXHJcbiAgICAgIGJpbGxpbmdDaXR5OiBzZWxlY3RlZE9wdGlvbnM/LmJpbGxpbmdDaXR5XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU2hvd0F1dG9jb21wbGV0ZSA9IChpZFJvdykgPT4ge1xyXG4gICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IG51bGwsXHJcbiAgICAgICAgaXRlbU5hbWU6IG51bGxcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQW1vdW50OiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbiA9IChpZFJvdykgPT4ge1xyXG4gICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBpdGVtTmFtZTogJ2VtcHR5J1xyXG4gICAgICB9LFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQxID0gaXRlbXMucmVkdWNlKChzdW0sIHJvdykgPT4gc3VtICsgcm93Lml0ZW1BbW91bnQsIDApXHJcbiAgICBzZXRTdWJUb3RhbChyZXN1bHQxLnRvRml4ZWQoMikpXHJcbiAgICBsZXQgbmV3VG90YWwgPSBNYXRoLnJvdW5kKChOdW1iZXIoc3ViVG90YWwpICsgTnVtYmVyKHNoaXBwaW5nKSArIE51bWJlcihhZGp1c3RtZW50TnVtYmVyKSkgKiAxMDApIC8gMTAwXHJcbiAgICBzZXRUb3RhbEludm9pY2UobmV3VG90YWwpXHJcbiAgICBsZXQgbmV3QmFsYW5jZSA9IE1hdGgucm91bmQoKHRvdGFsSW52b2ljZSAtIHRvdGFsKSAqIDEwMCkgLyAxMDBcclxuICAgIHNldEJhbGFuY2VEdWUobmV3QmFsYW5jZSlcclxuICB9KTtcclxuICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTEsIHNldE9wZW5BdXRvY29tcGxldGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUxID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUxKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUxKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IFtvcGVuSXRlbVVwZGF0ZSwgc2V0T3Blbkl0ZW1VcGRhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpZEl0ZW0sIHNldElkSXRlbV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuSXRlbVVwZGF0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgc2V0T3Blbkl0ZW1VcGRhdGUodHJ1ZSk7XHJcbiAgICBzZXRJZEl0ZW0oaWQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VJdGVtVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0T3Blbkl0ZW1VcGRhdGUoZmFsc2UpO1xyXG4gICAgaWYgKGlkSXRlbSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtLyR7aWRJdGVtfWApXHJcbiAgICAgICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pdGVtTmFtZT8uX2lkID09PSByZXMuZGF0YS5kYXRhLl9pZCA/IHtcclxuICAgICAgICAgIC4uLnJvdyxcclxuICAgICAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgICAgIF9pZDogcmVzLmRhdGEuZGF0YS5faWQsXHJcbiAgICAgICAgICAgIGl0ZW1OYW1lOiByZXMuZGF0YS5kYXRhLml0ZW1OYW1lXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaXRlbURlc2NyaXB0aW9uOiByZXMuZGF0YS5kYXRhLml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgICAgIGl0ZW1Db3N0OiByZXMuZGF0YS5kYXRhLml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgICAgICBpdGVtUmF0ZTogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgc3RvY2s6IHJlcy5kYXRhLmRhdGEuaXRlbVF1YW50aXR5LFxyXG4gICAgICAgICAgdG90YWxBbW91bnQ6IHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgZGlzY291bnQ6IChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50LFxyXG4gICAgICAgICAgcGVyY2VudGFnZTogKChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50KSAvIDEwMCxcclxuICAgICAgICAgIGl0ZW1BbW91bnQ6IChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgLSAoKChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50KSAvIDEwMCksXHJcbiAgICAgICAgICB0b3RhbENvc3Q6IHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgdG90YWxHZW5lcmFsZTogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlICogcm93Lml0ZW1CdXlcclxuICAgICAgICB9IDogcm93KSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQ3VzdG9tZXIgPSAobmV3Q3VzdG9tZXIpID0+IHtcclxuICAgIHNldEN1c3RvbWVyKFtuZXdDdXN0b21lciwgLi4uY3VzdG9tZXJdKVxyXG4gIH1cclxuICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTIsIHNldE9wZW5BdXRvY29tcGxldGUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMiA9ICgpID0+IHtcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUl0ZW0gPSAobmV3SXRlbSkgPT4ge1xyXG4gICAgc2V0SXRlbUluZm9ybWF0aW9uKFtuZXdJdGVtLCAuLi5JdGVtSW5mb3JtYXRpb25dKVxyXG4gIH1cclxuICBjb25zdCBbb3BlbjEsIHNldE9wZW4xXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW4xKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlY2lzaW9uID0gKG5hdmlnYXRlKSA9PiB7XHJcbiAgICAvL05hdmlnYXRlIEJhc2VkIG9uIHRoIERlY2lzaW9uXHJcbiAgICBpZiAobmF2aWdhdGUgPT09ICdwcmV2aW91cycpIHtcclxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0ZSA9PT0gJ3N0YXknKSB7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBDcmVhdGVkICcsXHJcbiAgICAgIHJlYXNvbjogJ1FVTy0nICsgU3RyaW5nKFJlZmVyZW5jZUluZm9OdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIEZvciAnICsgY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZSxcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogZGF0ZUNvbW1lbnRcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgX2lkOiB2NCgpLFxyXG4gICAgICBjdXN0b21lck5hbWUsXHJcbiAgICAgIGVzdGltYXRlTnVtYmVyOiBxdW90YXRpb25OdW1iZXIsXHJcbiAgICAgIGVzdGltYXRlRGF0ZSxcclxuICAgICAgZXN0aW1hdGVEZWZlY3QsXHJcbiAgICAgIGVzdGltYXRlU3ViamVjdCxcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICBpdGVtcyxcclxuICAgICAgc3ViVG90YWwsXHJcbiAgICAgIHRvdGFsLFxyXG4gICAgICB0b3RhbFcsXHJcbiAgICAgIG5vdGUsXHJcbiAgICAgIGVzdGltYXRlTmFtZSwgbm90ZUluZm8sXHJcbiAgICAgIHRlcm1zLCBzaGlwcGluZyxcclxuICAgICAgYWRqdXN0bWVudCwgYWRqdXN0bWVudE51bWJlcixcclxuICAgICAgdG90YWxJbnZvaWNlLCBiYWxhbmNlRHVlLCBzeW5jZWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGFwaVVybCwgZGF0YSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBpbnZhbGlkYXRlQ2FjaGUoJy9lc3RpbWF0aW9uJyk7XHJcbiAgICAgICAgLy8gT3BlbiBMb2FkaW5nIFZpZXdcclxuICAgICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mbyA9IHJlcy5kYXRhLmRhdGEuX2lkXHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mb051bWJlciA9IHJlcy5kYXRhLmRhdGEuZXN0aW1hdGVOdW1iZXJcclxuICAgICAgICBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oUmVmZXJlbmNlSW5mbywgUmVmZXJlbmNlSW5mb051bWJlcilcclxuICAgICAgICAvL1Jlc2V0IGZvcm1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkIG5ldyBxdW90YXRpb25cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuVXBkYXRlfT5cclxuICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRhc2gxIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiA0IH19ID5cclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUgIT09ICcnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nQ1VzdG9tZXIgTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUgIT09IHVuZGVmaW5lZCA/IGN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJDdXN0b21lcn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y3VzdG9tZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLkN1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VDdXN0b21lcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFwZXJDb21wb25lbnQ9eyh7IGNoaWxkcmVuLCAuLi5vdGhlciB9KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5vdGhlcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBsZWZ0OiAnMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUxKGUpfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30gb25Nb3VzZURvd249eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI3JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIENVU1RPTUVSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJDdXN0b21lciBOYW1lXCIgcmVxdWlyZWQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJlc3RpbWF0ZU51bWJlclwiPlF1b3RhdGlvbiBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdlc3RpbWF0ZU51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1F1b3RhdGlvbiBOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdW90YXRpb25OdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVvdGF0aW9uTnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+UVVPLTAwPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZXN0aW1hdGVEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhlc3RpbWF0ZURhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0RXN0aW1hdGVEYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdlc3RpbWF0ZVN1YmplY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlc3RpbWF0ZVN1YmplY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU3ViamVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlc3RpbWF0ZVN1YmplY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVzdGltYXRlU3ViamVjdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdlc3RpbWF0ZURlZmVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VzdGltYXRlRGVmZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RlZmVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlc3RpbWF0ZURlZmVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RXN0aW1hdGVEZWZlY3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbm90ZUluZm8nXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdub3RlSW5mbydcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdOb3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlSW5mbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6IDEsIGZsb2F0OiAncmlnaHQnLCByaWdodDogJy01cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQWRkXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbVdoaXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JywgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZUluZm8xMCcgc3R5bGU9e3sgbWFyZ2luTGVmdDogJy0yMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RvY2stQTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRpc2NvdW50ICU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZHJvcHBhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtJdGVtLmlkUm93fSBkcmFnZ2FibGVJZD17YGRyb3BwYWJsZSR7SXRlbS5pZFJvd31gfSBpbmRleD17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Nn0+PFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduZXdEZXNjcmlwdGlvbicgaWQ9J25ld0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5uZXdEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+PERyYWdJbmRpY2F0b3JSb3VuZGVkIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBoZWlnaHQ6ICcxMDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMzBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtVGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSWQ9e0l0ZW0uaXRlbU5hbWU/Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxEYXRhPXtJdGVtLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVHlwZT17SXRlbS5jb250ZW50VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaGlkZGVuPXtJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JyA6ICcnfSBzeD17eyBmb250U2l6ZTogJzIzcHgnIH19PntJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZS50b1VwcGVyQ2FzZSgpIDogJyd9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGVzY3JpcHRpb24nIGlkPSdpdGVtRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzQwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWUuX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiRWRpdFwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5JdGVtVXBkYXRlKEl0ZW0uaXRlbU5hbWUuX2lkKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdCBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVySXRlbUluZm9ybWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2YyZjJmMicgfX0+e29wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9IHsuLi5wYXJhbXN9IHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9eyhvcHRpb25zLCB7IGlucHV0VmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbUJyYW5kLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VJdGVtKEl0ZW0uaWRSb3csIG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNDcwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbihJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdG9jaycgaWQ9J3N0b2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLnN0b2NrfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUXR5JyBpZD0naXRlbVF0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVJhdGUnIGlkPSdpdGVtUmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUmF0ZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EaXNjb3VudCcgaWQ9J2l0ZW1EaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzEgdG8gNSAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9J2Ftb3VudFRvdGFsSW52b2ljZSc+e0l0ZW0uaXRlbUFtb3VudC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZUluZm8xMCcgc3R5bGU9e3sgbWFyZ2luTGVmdDogJy0yMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdG9jay1BPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGlzY291bnQgJTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRyb3BwYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtJdGVtLmlkUm93fSBkcmFnZ2FibGVJZD17YGRyb3BwYWJsZSR7SXRlbS5pZFJvd31gfSBpbmRleD17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezZ9PjxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduZXdEZXNjcmlwdGlvbicgaWQ9J25ld0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0ubmV3RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+PERyYWdJbmRpY2F0b3JSb3VuZGVkIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICczMHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtVGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkPXtJdGVtLml0ZW1OYW1lPy5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbERhdGE9e0l0ZW0uZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVHlwZT17SXRlbS5jb250ZW50VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaGlkZGVuPXtJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JyA6ICcnfSBzeD17eyBmb250U2l6ZTogJzIzcHgnIH19PntJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZS50b1VwcGVyQ2FzZSgpIDogJyd9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EZXNjcmlwdGlvbicgaWQ9J2l0ZW1EZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzQwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3RvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93QXV0b2NvbXBsZXRlKEl0ZW0uaWRSb3cpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLml0ZW1OYW1lLl9pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJFZGl0XCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5JdGVtVXBkYXRlKEl0ZW0uaXRlbU5hbWUuX2lkKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVySXRlbUluZm9ybWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLml0ZW1OYW1lICsgJy8nICsgb3B0aW9uLml0ZW1CcmFuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfT57b3B0aW9uLml0ZW1OYW1lICsgJy8nICsgb3B0aW9uLml0ZW1CcmFuZH08L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH0gey4uLnBhcmFtc30gcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50LCBuZXdJbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMsIHsgaW5wdXRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbUJyYW5kLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbURlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlSXRlbShJdGVtLmlkUm93LCBuZXdWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5vdGhlcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBsZWZ0OiAnMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyKGUpfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30gb25Nb3VzZURvd249eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI3JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERCBORVcgSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzQ3MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24oSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdG9jaycgaWQ9J3N0b2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5zdG9ja31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUXR5JyBpZD0naXRlbVF0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVJhdGUnIGlkPSdpdGVtUmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVJhdGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EaXNjb3VudCcgaWQ9J2l0ZW1EaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbURpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScxIHRvIDUgJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD0nYW1vdW50VG90YWxJbnZvaWNlJz57SXRlbS5pdGVtQW1vdW50LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcyMHB4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J25vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1F1b3RlIE5vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm90ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNTAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpcnN0VGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlN1Yi1Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzdWJUb3RhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdWJUb3RhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJUb3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0b3RhbEludm9pY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndG90YWxJbnZvaWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsSW52b2ljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PkJhbGFuY2UgRHVlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nYmFsYW5jZUR1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdiYWxhbmNlRHVlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhbGFuY2VEdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+VG90YWwgSW4gV29yZHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvdGFsV1wiIGlkPVwidG90YWxXXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWxXfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0ndGVybXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0ZXJtcydcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXJtc31cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdRdW90ZSBUZXJtcydcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGVybXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc2MCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyBtdDogMiwgbWI6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgZmxleEl0ZW0gc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PiBDT1ZFUiBMRVRURVIgKE9wdGlvbmFsKSA8L0RpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aW5jbHVkZUxldHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEluY2x1ZGVMZXR0ZXIoZS50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgY29sb3I6ICcjMzAzNjhhJywgJyYuTXVpLWNoZWNrZWQnOiB7IGNvbG9yOiAnIzMwMzY4YScgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgY29sb3I6ICcjMzAzNjhhJyB9fT5BdHRhY2ggUHJvZmVzc2lvbmFsIENvdmVyIExldHRlciB0byB0aGlzIFF1b3RhdGlvbjwvVHlwb2dyYXBoeT59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7aW5jbHVkZUxldHRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nYXR0YWNoZWRMZXR0ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2F0dGFjaGVkTGV0dGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17OH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2F0dGFjaGVkTGV0dGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ292ZXIgTGV0dGVyIENvbnRlbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXR0YWNoZWRMZXR0ZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBhIHByb2Zlc3Npb25hbCBpbnRyb2R1Y3Rpb24gZm9yIHlvdXIgcXVvdGF0aW9uLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW4xfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVXBkYXRlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCBjcmVhdGluZyBRdW90YXRpb24gPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlIDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj4gSWYgeW91IHN0b3AgY3JlYXRpbmcgd2l0aG91dCBzYXZpbmcsIGFsbCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvRXN0aW1hdGVWaWV3QWRtaW4nKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VVcGRhdGV9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+Tm88L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNpc2lvbignc3RheScpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQWRkIE5ld1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdwcmV2aW91cycpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgR28gQmFja1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+U2F2aW5nIEZhaWxlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUxfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTF9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTF9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2MDBweCcsIHBhZGRpbmc6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICA8Q3VzdG9tZXJGb3JtVmlldzIgb25DcmVhdGVPcHRpb249e2hhbmRsZUNyZWF0ZUN1c3RvbWVyfSBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2MDBweCcsIHBhZGRpbmc6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICA8SXRlbUZvcm1WaWV3MiBvbkNyZWF0ZU9wdGlvbj17aGFuZGxlQ3JlYXRlSXRlbX0gb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuSXRlbVVwZGF0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUl0ZW1VcGRhdGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlSXRlbVVwZGF0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzYwMHB4JywgcGFkZGluZzogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgIDxJdGVtVXBkYXRlVmlldzIgb25DbG9zZT17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfSBpZD17aWRJdGVtfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVzdGltYXRlRm9ybUNsb25lXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uL2FwaUNvbmZpZyc7XG5cbmNvbnN0IEl0ZW1UaHVtYm5haWwgPSAoeyBpdGVtSWQsIGluaXRpYWxEYXRhLCBpbml0aWFsVHlwZSB9KSA9PiB7XG4gIGNvbnN0IFtzcmMsIHNldFNyY10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoSW1hZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAvLyAxLiBDaGVjayBmb3IgaW5pdGlhbERhdGEgKHBhc3NlZCBmcm9tIHNlYXJjaC9zaG9wKVxuICAgICAgaWYgKGluaXRpYWxEYXRhICYmIGluaXRpYWxUeXBlICYmIGluaXRpYWxEYXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGluaXRpYWxUeXBlICE9PSBcInVuZGVmaW5lZFwiICYmIGluaXRpYWxEYXRhICE9PSBcIm51bGxcIikge1xuICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxEYXRhID09PSAnc3RyaW5nJyAmJiBpbml0aWFsRGF0YS5sZW5ndGggPiA1MCkge1xuICAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGFscmVhZHkgYSBkYXRhIFVSTFxuICAgICAgICAgICBpZiAoaW5pdGlhbERhdGEuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgICBzZXRTcmMoaW5pdGlhbERhdGEpO1xuICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRTcmMoYGRhdGE6JHtpbml0aWFsVHlwZX07YmFzZTY0LCR7aW5pdGlhbERhdGF9YCk7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxEYXRhLmRhdGEpIHtcbiAgICAgICAgICAgLy8gSGFuZGxlIGJ1ZmZlciBvYmplY3QgaWYgaXQncyBub3QgY29udmVydGVkIHRvIHN0cmluZyB5ZXRcbiAgICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoaW5pdGlhbERhdGEuZGF0YSk7XG4gICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBpbml0aWFsVHlwZSB9KTtcbiAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHNldFNyYyhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAyLiBGYWxsYmFjayB0byBmZXRjaCBpZiBubyBpbml0aWFsIGRhdGEgb3IgaWYgaXQgd2FzIGludmFsaWRcbiAgICAgIGlmICghaXRlbUlkIHx8IGl0ZW1JZCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBpdGVtSWQgPT09IFwibnVsbFwiKSB7XG4gICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2l0ZW1JZH1gKTtcbiAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEgJiYgcmVzLmRhdGEuZGF0YS5kYXRhKSB7XG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkocmVzLmRhdGEuZGF0YS5kYXRhLmRhdGEpO1xuICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiByZXMuZGF0YS5kYXRhLmNvbnRlbnRUeXBlIH0pO1xuICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHNldFNyYyhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgb25saW5lIGltYWdlOlwiLCBlcnIpO1xuICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaEltYWdlKCk7XG4gIH0sIFtpdGVtSWQsIGluaXRpYWxEYXRhLCBpbml0aWFsVHlwZV0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8QXZhdGFyXG4gICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICBzcmM9e3NyY31cbiAgICAgIHN4PXt7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MCwgYmFja2dyb3VuZENvbG9yOiAnI2YwZjBmMCcsIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyB9fVxuICAgID5cbiAgICAgIHshc3JjICYmIDxTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gc3g9e3sgZm9udFNpemU6IDQwLCBjb2xvcjogJyM5OTknIH19IC8+fVxuICAgIDwvQXZhdGFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVRodW1ibmFpbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3MvU2lkZWJhck5ldy5zY3NzJ1xyXG5pbXBvcnQgeyBPdXRsZXQsIE5hdkxpbmssIExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IERhc2hib2FyZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgUGVybUlkZW50aXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Blcm1JZGVudGl0eSc7XHJcbmltcG9ydCBMaXN0QWx0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xpc3RBbHQnO1xyXG5pbXBvcnQgRGVzY3JpcHRpb25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgUmVjZWlwdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZWNlaXB0JztcclxuaW1wb3J0IE1vdmluZ0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3ZpbmcnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3MnO1xyXG5pbXBvcnQgSW5zZXJ0RHJpdmVGaWxlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0luc2VydERyaXZlRmlsZSc7XHJcbmltcG9ydCBSZXN0b3JlUGFnZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXN0b3JlUGFnZSc7XHJcbmltcG9ydCBSZXF1ZXN0UXVvdGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUmVxdWVzdFF1b3RlJztcclxuaW1wb3J0IE1vbmV0aXphdGlvbk9uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vbmV0aXphdGlvbk9uJztcclxuaW1wb3J0IEVuZ2luZWVyaW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VuZ2luZWVyaW5nJztcclxuaW1wb3J0IHsgRXhwbGljaXQsIFNob3BwaW5nQmFnT3V0bGluZWQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IFJvb21QcmVmZXJlbmNlc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Sb29tUHJlZmVyZW5jZXMnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbUJ1dHRvbiwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQsIG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFBheW1lbnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGF5bWVudCc7XHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3JlVmVydCc7XHJcbmZ1bmN0aW9uIFNpZGViYXJEYXNoMSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8RGFzaGJvYXJkSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhc2hib2FyZFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UGVybUlkZW50aXR5SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkN1c3RvbWVyXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPExpc3RBbHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiU3RvcmVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlcXVlc3RRdW90ZUljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJRdW90YXRpb25cIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEZXNjcmlwdGlvbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbnZvaWNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9uZXRpemF0aW9uT25JY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGF5bWVudFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFNob3BwaW5nQmFnT3V0bGluZWQgLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEYWlseSBFeHBlbnNlc1wiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ICA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxSb29tUHJlZmVyZW5jZXNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHJvamVjdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlY2VpcHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHVyY2hhc2VzIFJlcXVlc3RcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgPEVuZ2luZWVyaW5nSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk1haW50ZW5hbmNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTW9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJEYXNoMSIsIid1c2Ugc3RyaWN0JzsgXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRvT3JkaW5hbDogcmVxdWlyZSgnLi90b09yZGluYWwnKSxcbiAgICB0b1dvcmRzOiByZXF1aXJlKCcuL3RvV29yZHMnKSxcbiAgICB0b1dvcmRzT3JkaW5hbDogcmVxdWlyZSgnLi90b1dvcmRzT3JkaW5hbCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBTaW1wbGlmaWVkIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL21hcmx1bjc4Lzg4NWViMDAyMWU5ODBjNmNlMGZiXG5mdW5jdGlvbiBpc0Zpbml0ZSh2YWx1ZSkge1xuICAgIHJldHVybiAhKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgdmFsdWUgIT09IHZhbHVlIHx8IHZhbHVlID09PSBJbmZpbml0eSB8fCB2YWx1ZSA9PT0gLUluZmluaXR5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Zpbml0ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSByZXF1aXJlKCcuL21heFNhZmVJbnRlZ2VyJyk7XG5cbmZ1bmN0aW9uIGlzU2FmZU51bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE1hdGguYWJzKHZhbHVlKSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2FmZU51bWJlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVORFNfV0lUSF9ET1VCTEVfWkVST19QQVRURVJOID0gLyhodW5kcmVkfHRob3VzYW5kfChtfGJ8dHJ8cXVhZHIpaWxsaW9uKSQvO1xudmFyIEVORFNfV0lUSF9URUVOX1BBVFRFUk4gPSAvdGVlbiQvO1xudmFyIEVORFNfV0lUSF9ZX1BBVFRFUk4gPSAveSQvO1xudmFyIEVORFNfV0lUSF9aRVJPX1RIUk9VR0hfVFdFTFZFX1BBVFRFUk4gPSAvKHplcm98b25lfHR3b3x0aHJlZXxmb3VyfGZpdmV8c2l4fHNldmVufGVpZ2h0fG5pbmV8dGVufGVsZXZlbnx0d2VsdmUpJC87XG52YXIgb3JkaW5hbExlc3NUaGFuVGhpcnRlZW4gPSB7XG4gICAgemVybzogJ3plcm90aCcsXG4gICAgb25lOiAnZmlyc3QnLFxuICAgIHR3bzogJ3NlY29uZCcsXG4gICAgdGhyZWU6ICd0aGlyZCcsXG4gICAgZm91cjogJ2ZvdXJ0aCcsXG4gICAgZml2ZTogJ2ZpZnRoJyxcbiAgICBzaXg6ICdzaXh0aCcsXG4gICAgc2V2ZW46ICdzZXZlbnRoJyxcbiAgICBlaWdodDogJ2VpZ2h0aCcsXG4gICAgbmluZTogJ25pbnRoJyxcbiAgICB0ZW46ICd0ZW50aCcsXG4gICAgZWxldmVuOiAnZWxldmVudGgnLFxuICAgIHR3ZWx2ZTogJ3R3ZWxmdGgnXG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyLXdvcmQgaW50byBhbiBvcmRpbmFsIG51bWJlci13b3JkLlxuICogQGV4YW1wbGUgbWFrZU9yZGluYWwoJ29uZScpID0+ICdmaXJzdCdcbiAqIEBwYXJhbSB7c3RyaW5nfSB3b3Jkc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbWFrZU9yZGluYWwod29yZHMpIHtcbiAgICAvLyBFbmRzIHdpdGggKjAwICgxMDAsIDEwMDAsIGV0Yy4pIG9yICp0ZWVuICgxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSlcbiAgICBpZiAoRU5EU19XSVRIX0RPVUJMRV9aRVJPX1BBVFRFUk4udGVzdCh3b3JkcykgfHwgRU5EU19XSVRIX1RFRU5fUEFUVEVSTi50ZXN0KHdvcmRzKSkge1xuICAgICAgICByZXR1cm4gd29yZHMgKyAndGgnO1xuICAgIH1cbiAgICAvLyBFbmRzIHdpdGggKnkgKDIwLCAzMCwgNDAsIDUwLCA2MCwgNzAsIDgwLCA5MClcbiAgICBlbHNlIGlmIChFTkRTX1dJVEhfWV9QQVRURVJOLnRlc3Qod29yZHMpKSB7XG4gICAgICAgIHJldHVybiB3b3Jkcy5yZXBsYWNlKEVORFNfV0lUSF9ZX1BBVFRFUk4sICdpZXRoJyk7XG4gICAgfVxuICAgIC8vIEVuZHMgd2l0aCBvbmUgdGhyb3VnaCB0d2VsdmVcbiAgICBlbHNlIGlmIChFTkRTX1dJVEhfWkVST19USFJPVUdIX1RXRUxWRV9QQVRURVJOLnRlc3Qod29yZHMpKSB7XG4gICAgICAgIHJldHVybiB3b3Jkcy5yZXBsYWNlKEVORFNfV0lUSF9aRVJPX1RIUk9VR0hfVFdFTFZFX1BBVFRFUk4sIHJlcGxhY2VXaXRoT3JkaW5hbFZhcmlhbnQpO1xuICAgIH1cbiAgICByZXR1cm4gd29yZHM7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VXaXRoT3JkaW5hbFZhcmlhbnQobWF0Y2gsIG51bWJlcldvcmQpIHtcbiAgICByZXR1cm4gb3JkaW5hbExlc3NUaGFuVGhpcnRlZW5bbnVtYmVyV29yZF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFrZU9yZGluYWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxubW9kdWxlLmV4cG9ydHMgPSBNQVhfU0FGRV9JTlRFR0VSO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNGaW5pdGUgPSByZXF1aXJlKCcuL2lzRmluaXRlJyk7XG52YXIgaXNTYWZlTnVtYmVyID0gcmVxdWlyZSgnLi9pc1NhZmVOdW1iZXInKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBpbnRlZ2VyIGludG8gYSBzdHJpbmcgd2l0aCBhbiBvcmRpbmFsIHBvc3RmaXguXG4gKiBJZiBudW1iZXIgaXMgZGVjaW1hbCwgdGhlIGRlY2ltYWxzIHdpbGwgYmUgcmVtb3ZlZC5cbiAqIEBleGFtcGxlIHRvT3JkaW5hbCgxMikgPT4gJzEydGgnXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9PcmRpbmFsKG51bWJlcikge1xuICAgIHZhciBudW0gPSBwYXJzZUludChudW1iZXIsIDEwKTtcblxuICAgIGlmICghaXNGaW5pdGUobnVtKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ05vdCBhIGZpbml0ZSBudW1iZXI6ICcgKyBudW1iZXIgKyAnICgnICsgdHlwZW9mIG51bWJlciArICcpJ1xuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAoIWlzU2FmZU51bWJlcihudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgJ0lucHV0IGlzIG5vdCBhIHNhZmUgbnVtYmVyLCBpdOKAmXMgZWl0aGVyIHRvbyBsYXJnZSBvciB0b28gc21hbGwuJ1xuICAgICAgICApO1xuICAgIH1cbiAgICB2YXIgc3RyID0gU3RyaW5nKG51bSk7XG4gICAgdmFyIGxhc3RUd29EaWdpdHMgPSBNYXRoLmFicyhudW0gJSAxMDApO1xuICAgIHZhciBiZXR3ZWVuRWxldmVuQW5kVGhpcnRlZW4gPSBsYXN0VHdvRGlnaXRzID49IDExICYmIGxhc3RUd29EaWdpdHMgPD0gMTM7XG4gICAgdmFyIGxhc3RDaGFyID0gc3RyLmNoYXJBdChzdHIubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIHN0ciArIChiZXR3ZWVuRWxldmVuQW5kVGhpcnRlZW4gPyAndGgnXG4gICAgICAgICAgICA6IGxhc3RDaGFyID09PSAnMScgPyAnc3QnXG4gICAgICAgICAgICA6IGxhc3RDaGFyID09PSAnMicgPyAnbmQnXG4gICAgICAgICAgICA6IGxhc3RDaGFyID09PSAnMycgPyAncmQnXG4gICAgICAgICAgICA6ICd0aCcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvT3JkaW5hbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1ha2VPcmRpbmFsID0gcmVxdWlyZSgnLi9tYWtlT3JkaW5hbCcpO1xudmFyIGlzRmluaXRlID0gcmVxdWlyZSgnLi9pc0Zpbml0ZScpO1xudmFyIGlzU2FmZU51bWJlciA9IHJlcXVpcmUoJy4vaXNTYWZlTnVtYmVyJyk7XG5cbnZhciBURU4gPSAxMDtcbnZhciBPTkVfSFVORFJFRCA9IDEwMDtcbnZhciBPTkVfVEhPVVNBTkQgPSAxMDAwO1xudmFyIE9ORV9NSUxMSU9OID0gMTAwMDAwMDtcbnZhciBPTkVfQklMTElPTiA9IDEwMDAwMDAwMDA7ICAgICAgICAgICAvLyAgICAgICAgIDEuMDAwLjAwMC4wMDAgKDkpXG52YXIgT05FX1RSSUxMSU9OID0gMTAwMDAwMDAwMDAwMDsgICAgICAgLy8gICAgIDEuMDAwLjAwMC4wMDAuMDAwICgxMilcbnZhciBPTkVfUVVBRFJJTExJT04gPSAxMDAwMDAwMDAwMDAwMDAwOyAvLyAxLjAwMC4wMDAuMDAwLjAwMC4wMDAgKDE1KVxudmFyIE1BWCA9IDkwMDcxOTkyNTQ3NDA5OTI7ICAgICAgICAgICAgIC8vIDkuMDA3LjE5OS4yNTQuNzQwLjk5MiAoMTUpXG5cbnZhciBMRVNTX1RIQU5fVFdFTlRZID0gW1xuICAgICd6ZXJvJywgJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsICduaW5lJywgJ3RlbicsXG4gICAgJ2VsZXZlbicsICd0d2VsdmUnLCAndGhpcnRlZW4nLCAnZm91cnRlZW4nLCAnZmlmdGVlbicsICdzaXh0ZWVuJywgJ3NldmVudGVlbicsICdlaWdodGVlbicsICduaW5ldGVlbidcbl07XG5cbnZhciBURU5USFNfTEVTU19USEFOX0hVTkRSRUQgPSBbXG4gICAgJ3plcm8nLCAndGVuJywgJ3R3ZW50eScsICd0aGlydHknLCAnZm9ydHknLCAnZmlmdHknLCAnc2l4dHknLCAnc2V2ZW50eScsICdlaWdodHknLCAnbmluZXR5J1xuXTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBpbnRlZ2VyIGludG8gd29yZHMuXG4gKiBJZiBudW1iZXIgaXMgZGVjaW1hbCwgdGhlIGRlY2ltYWxzIHdpbGwgYmUgcmVtb3ZlZC5cbiAqIEBleGFtcGxlIHRvV29yZHMoMTIpID0+ICd0d2VsdmUnXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlclxuICogQHBhcmFtIHtib29sZWFufSBbYXNPcmRpbmFsXSAtIERlcHJlY2F0ZWQsIHVzZSB0b1dvcmRzT3JkaW5hbCgpIGluc3RlYWQhXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1dvcmRzKG51bWJlciwgYXNPcmRpbmFsKSB7XG4gICAgdmFyIHdvcmRzO1xuICAgIHZhciBudW0gPSBwYXJzZUludChudW1iZXIsIDEwKTtcblxuICAgIGlmICghaXNGaW5pdGUobnVtKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ05vdCBhIGZpbml0ZSBudW1iZXI6ICcgKyBudW1iZXIgKyAnICgnICsgdHlwZW9mIG51bWJlciArICcpJ1xuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAoIWlzU2FmZU51bWJlcihudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgJ0lucHV0IGlzIG5vdCBhIHNhZmUgbnVtYmVyLCBpdOKAmXMgZWl0aGVyIHRvbyBsYXJnZSBvciB0b28gc21hbGwuJ1xuICAgICAgICApO1xuICAgIH1cbiAgICB3b3JkcyA9IGdlbmVyYXRlV29yZHMobnVtKTtcbiAgICByZXR1cm4gYXNPcmRpbmFsID8gbWFrZU9yZGluYWwod29yZHMpIDogd29yZHM7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlV29yZHMobnVtYmVyKSB7XG4gICAgdmFyIHJlbWFpbmRlciwgd29yZCxcbiAgICAgICAgd29yZHMgPSBhcmd1bWVudHNbMV07XG5cbiAgICAvLyBXZeKAmXJlIGRvbmVcbiAgICBpZiAobnVtYmVyID09PSAwKSB7XG4gICAgICAgIHJldHVybiAhd29yZHMgPyAnemVybycgOiB3b3Jkcy5qb2luKCcgJykucmVwbGFjZSgvLCQvLCAnJyk7XG4gICAgfVxuICAgIC8vIEZpcnN0IHJ1blxuICAgIGlmICghd29yZHMpIHtcbiAgICAgICAgd29yZHMgPSBbXTtcbiAgICB9XG4gICAgLy8gSWYgbmVnYXRpdmUsIHByZXBlbmQg4oCcbWludXPigJ1cbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICB3b3Jkcy5wdXNoKCdtaW51cycpO1xuICAgICAgICBudW1iZXIgPSBNYXRoLmFicyhudW1iZXIpO1xuICAgIH1cblxuICAgIGlmIChudW1iZXIgPCAyMCkge1xuICAgICAgICByZW1haW5kZXIgPSAwO1xuICAgICAgICB3b3JkID0gTEVTU19USEFOX1RXRU5UWVtudW1iZXJdO1xuXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPCBPTkVfSFVORFJFRCkge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBURU47XG4gICAgICAgIHdvcmQgPSBURU5USFNfTEVTU19USEFOX0hVTkRSRURbTWF0aC5mbG9vcihudW1iZXIgLyBURU4pXTtcbiAgICAgICAgLy8gSW4gY2FzZSBvZiByZW1haW5kZXIsIHdlIG5lZWQgdG8gaGFuZGxlIGl0IGhlcmUgdG8gYmUgYWJsZSB0byBhZGQgdGhlIOKAnC3igJ1cbiAgICAgICAgaWYgKHJlbWFpbmRlcikge1xuICAgICAgICAgICAgd29yZCArPSAnLScgKyBMRVNTX1RIQU5fVFdFTlRZW3JlbWFpbmRlcl07XG4gICAgICAgICAgICByZW1haW5kZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9USE9VU0FORCkge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfSFVORFJFRDtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfSFVORFJFRCkpICsgJyBodW5kcmVkJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX01JTExJT04pIHtcbiAgICAgICAgcmVtYWluZGVyID0gbnVtYmVyICUgT05FX1RIT1VTQU5EO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9USE9VU0FORCkpICsgJyB0aG91c2FuZCwnO1xuXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPCBPTkVfQklMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfTUlMTElPTjtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfTUlMTElPTikpICsgJyBtaWxsaW9uLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9UUklMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfQklMTElPTjtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfQklMTElPTikpICsgJyBiaWxsaW9uLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9RVUFEUklMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfVFJJTExJT047XG4gICAgICAgIHdvcmQgPSBnZW5lcmF0ZVdvcmRzKE1hdGguZmxvb3IobnVtYmVyIC8gT05FX1RSSUxMSU9OKSkgKyAnIHRyaWxsaW9uLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8PSBNQVgpIHtcbiAgICAgICAgcmVtYWluZGVyID0gbnVtYmVyICUgT05FX1FVQURSSUxMSU9OO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9RVUFEUklMTElPTikpICtcbiAgICAgICAgJyBxdWFkcmlsbGlvbiwnO1xuICAgIH1cblxuICAgIHdvcmRzLnB1c2god29yZCk7XG4gICAgcmV0dXJuIGdlbmVyYXRlV29yZHMocmVtYWluZGVyLCB3b3Jkcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Xb3JkcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1ha2VPcmRpbmFsID0gcmVxdWlyZSgnLi9tYWtlT3JkaW5hbCcpO1xudmFyIHRvV29yZHMgPSByZXF1aXJlKCcuL3RvV29yZHMnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIG51bWJlciBpbnRvIG9yZGluYWwgd29yZHMuXG4gKiBAZXhhbXBsZSB0b1dvcmRzT3JkaW5hbCgxMikgPT4gJ3R3ZWxmdGgnXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9Xb3Jkc09yZGluYWwobnVtYmVyKSB7XG4gICAgdmFyIHdvcmRzID0gdG9Xb3JkcyhudW1iZXIpO1xuICAgIHJldHVybiBtYWtlT3JkaW5hbCh3b3Jkcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Xb3Jkc09yZGluYWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoMSIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJBY2NvdW50Q2lyY2xlSWNvbiIsIkRlbGV0ZUljb24iLCJNZW51SXRlbSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZVJvdyIsIlRhYmxlSGVhZCIsIlBhcGVyIiwiVGFibGVDb250YWluZXIiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJUeXBvZ3JhcGh5IiwiQXV0b2NvbXBsZXRlIiwic3R5bGVkIiwiTW9kYWwiLCJCYWNrZHJvcCIsIkZhZGUiLCJCb3giLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJEaXZpZGVyIiwiRm9ybUNvbnRyb2xMYWJlbCIsIkNoZWNrYm94IiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiQWRkIiwiQXJyb3dVcHdhcmRPdXRsaW5lZCIsIkRyYWdJbmRpY2F0b3JSb3VuZGVkIiwiRWRpdCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJ2NCIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwiaW52YWxpZGF0ZUNhY2hlIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImRheWpzIiwiQXJyb3dCYWNrIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkxvYWRlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJDdXN0b21lckZvcm1WaWV3MiIsIkNsb3NlIiwiSXRlbUZvcm1WaWV3MiIsIkl0ZW1VcGRhdGVWaWV3MiIsIm51bWJlclRvV29yZHMiLCJEcmFnRHJvcENvbnRleHQiLCJEcmFnZ2FibGUiLCJEcm9wcGFibGUiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJJdGVtVGh1bWJuYWlsIiwiTGlnaHRUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJCbGFja1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwic3R5bGUyIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNSIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmNiIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkVzdGltYXRlRm9ybUNsb25lIiwiX3VzZVBhcmFtcyIsImlkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjciLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYXBpVXJsIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidGVybXMiLCJzZXRUZXJtcyIsIl91c2VTdGF0ZTMiLCJkYXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTQiLCJlc3RpbWF0ZURhdGUiLCJzZXRFc3RpbWF0ZURhdGUiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImVzdGltYXRlU3ViamVjdCIsInNldEVzdGltYXRlU3ViamVjdCIsInN0YXR1cyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiZXN0aW1hdGVEZWZlY3QiLCJzZXRFc3RpbWF0ZURlZmVjdCIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwibm90ZSIsInNldE5vdGUiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJpdGVtcyIsIlNldEl0ZW1zIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInN1YlRvdGFsIiwic2V0U3ViVG90YWwiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwidG90YWwiLCJzZXRUb3RhbCIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJzaGlwcGluZyIsInNldFNoaXBwaW5nIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsImFkanVzdG1lbnQiLCJzZXRBZGp1c3RtZW50IiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsImFkanVzdG1lbnROdW1iZXIiLCJzZXRBZGp1c3RtZW50TnVtYmVyIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsInRvdGFsSW52b2ljZSIsInNldFRvdGFsSW52b2ljZSIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJiYWxhbmNlRHVlIiwic2V0QmFsYW5jZUR1ZSIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJ0b3RhbFciLCJzZXRUb3RhbFciLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwicXVvdGF0aW9uTnVtYmVyIiwic2V0UXVvdGF0aW9uTnVtYmVyIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsImluY2x1ZGVMZXR0ZXIiLCJzZXRJbmNsdWRlTGV0dGVyIiwiUFJPRkVTU0lPTkFMX0NPVkVSX0xFVFRFUiIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJhdHRhY2hlZExldHRlciIsInNldEF0dGFjaGVkTGV0dGVyIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsIm5vdGVJbmZvIiwic2V0Tm90ZUluZm8iLCJkYXRlQ29tbWVudCIsImVzdGltYXRlTmFtZSIsIlN0cmluZyIsInBhZFN0YXJ0IiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsIkl0ZW1JbmZvcm1hdGlvbiIsInNldEl0ZW1JbmZvcm1hdGlvbiIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJjdXN0b21lck5hbWUiLCJzZXRDdXN0b21lck5hbWUiLCJmZXRjaGxhc3ROdW1iZXIiLCJfcmVmOCIsIl9yZXMkZGF0YSIsIl9yZXMkZGF0YTIiLCJwYXJzZUludCIsImVzdGltYXRlTnVtYmVyIiwiZmV0Y2hEYXRhIiwiX3JlZjkiLCJmZXRjaEl0ZW0iLCJfcmVmMCIsInJldmVyc2UiLCJoYW5kbGVDaGFuZ2VJdGVtIiwiaWRSb3ciLCJuZXdWYWx1ZSIsInNlbGVjdGVkT3B0aW9ucyIsIm1hcCIsInJvdyIsIml0ZW1OYW1lIiwiX2lkIiwiaXRlbUNvc3QiLCJpdGVtQ29zdFByaWNlIiwiaXRlbURlc2NyaXB0aW9uIiwiaXRlbVJhdGUiLCJpdGVtU2VsbGluZ1ByaWNlIiwic3RvY2siLCJpdGVtUXVhbnRpdHkiLCJjb250ZW50VHlwZSIsImhhbmRsZUNoYW5nZSIsImUiLCJpIiwiX2UkdGFyZ2V0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwibGlzdCIsIk1hdGgiLCJyb3VuZCIsImhhbmRsZUNoYW5nZUNFTyIsIl9lJHRhcmdldDIiLCJhZGRJdGVtIiwiaXRlbURpc2NvdW50IiwiaXRlbVF0eSIsIml0ZW1BbW91bnQiLCJ0b3RhbEFtb3VudCIsImRpc2NvdW50IiwicGVyY2VudGFnZSIsIml0ZW1CdXkiLCJpdGVtV2VpZ2h0IiwidG90YWxHZW5lcmFsZSIsInRvdGFsQ29zdCIsIml0ZW1PdXQiLCJuZXdJdGVtT3V0IiwiYWRkSXRlbVdoaXRlIiwibmV3RGVzY3JpcHRpb24iLCJoYW5kbGVEcmFnRW5kIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJuZXdJdGVtcyIsIl9uZXdJdGVtcyRzcGxpY2UiLCJzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsIl9uZXdJdGVtcyRzcGxpY2UyIiwicmVtb3ZlZCIsImRlbGV0ZUl0ZW0iLCJmaWx0ZXIiLCJJdGVtIiwiZmlsdGVySXRlbUluZm9ybWF0aW9uIiwib3B0aW9uIiwiZmluZCIsIl9yb3ckaXRlbU5hbWUiLCJ0eXBlSXRlbSIsIndob2xlUGFydCIsImZsb29yIiwiZnJhY3Rpb25hbFBhcnQiLCJ0b0ZpeGVkIiwic3BsaXQiLCJ3aG9sZVdvcmRzIiwidG9Xb3JkcyIsImZyYWN0aW9uYWxXb3JkcyIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJjdXN0b21lciIsInNldEN1c3RvbWVyIiwiZmV0Y2hDdXN0b21lciIsIl9yZWYxIiwiaGFuZGxlQ2xlYXJDdXN0b21lciIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0NpdHkiLCJoYW5kbGVDaGFuZ2VDdXN0b21lciIsImN1c3RvbWVyRnVsbE5hbWUiLCJjb21wYW55TmFtZSIsImhhbmRsZVNob3dBdXRvY29tcGxldGUiLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24iLCJyZXN1bHQxIiwicmVkdWNlIiwic3VtIiwibmV3VG90YWwiLCJOdW1iZXIiLCJuZXdCYWxhbmNlIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsIm9wZW5BdXRvY29tcGxldGUxIiwic2V0T3BlbkF1dG9jb21wbGV0ZTEiLCJoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTEiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsIm9wZW5JdGVtVXBkYXRlIiwic2V0T3Blbkl0ZW1VcGRhdGUiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2IiwiaWRJdGVtIiwic2V0SWRJdGVtIiwiaGFuZGxlT3Blbkl0ZW1VcGRhdGUiLCJfcmVmMTAiLCJfeCIsImhhbmRsZUNsb3NlSXRlbVVwZGF0ZSIsIl9yZWYxMSIsIl9yb3ckaXRlbU5hbWUyIiwiaGFuZGxlQ3JlYXRlQ3VzdG9tZXIiLCJuZXdDdXN0b21lciIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJvcGVuQXV0b2NvbXBsZXRlMiIsInNldE9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZUNyZWF0ZUl0ZW0iLCJuZXdJdGVtIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsIm9wZW4xIiwic2V0T3BlbjEiLCJoYW5kbGVPcGVuVXBkYXRlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZVVwZGF0ZSIsIl91c2VTdGF0ZTUxIiwiX3VzZVN0YXRlNTIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTU1IiwiX3VzZVN0YXRlNTYiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVDbG9zZUVycm9yIiwiaGFuZGxlRGVjaXNpb24iLCJoaXN0b3J5IiwiYmFjayIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxMiIsIlJlZmVyZW5jZUluZm8iLCJSZWZlcmVuY2VJbmZvTnVtYmVyIiwiaWRJbmZvIiwicGVyc29uIiwicmVhc29uIiwiZGF0ZU5vdGlmaWNhdGlvbiIsInBvc3QiLCJsb2ciLCJfeDIiLCJfeDMiLCJoYW5kbGVTdWJtaXQiLCJfcmVmMTMiLCJzeW5jZWQiLCJfeDQiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX1JlYWN0JHVzZVN0YXRlMyIsIl9SZWFjdCR1c2VTdGF0ZTQiLCJzaWRlQmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZURyYXdlciIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm9uQ2xpY2siLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwicGFkZGluZyIsIml0ZW0iLCJ4cyIsImRpc2FibGVkIiwidW5kZWZpbmVkIiwidGl0bGUiLCJwbGFjZW1lbnQiLCJmbG9hdCIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIkN1c3RvbWVyIiwib25DaGFuZ2UiLCJQYXBlckNvbXBvbmVudCIsIl9yZWYxNCIsImNoaWxkcmVuIiwib3RoZXIiLCJfZXhjbHVkZWQzIiwibWFyZ2luVG9wIiwib25Nb3VzZURvd24iLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsImxhYmVsIiwicmVxdWlyZWQiLCJodG1sRm9yIiwidHlwZSIsInN0YXJ0QWRvcm5tZW50IiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwiZm9ybWF0IiwibXVsdGlsaW5lIiwicm93cyIsInJpZ2h0Iiwib25EcmFnRW5kIiwiZHJvcHBhYmxlSWQiLCJwcm92aWRlZCIsInNuYXBzaG90IiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsImtleSIsImRyYWdnYWJsZUlkIiwiX0l0ZW0kaXRlbU5hbWUiLCJkcmFnZ2FibGVQcm9wcyIsIkZyYWdtZW50IiwiZHJhZ0hhbmRsZVByb3BzIiwiY29sU3BhbiIsInNpemUiLCJjdXJzb3IiLCJnYXAiLCJpdGVtSWQiLCJpbml0aWFsRGF0YSIsImluaXRpYWxUeXBlIiwiaGlkZGVuIiwidG9VcHBlckNhc2UiLCJkaXNhYmxlQ2xlYXJhYmxlIiwiaXRlbUJyYW5kIiwicmVuZGVyT3B0aW9uIiwib25JbnB1dENoYW5nZSIsImV2ZW50IiwibmV3SW5wdXRWYWx1ZSIsImZpbHRlck9wdGlvbnMiLCJfcmVmMTUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiX3JlZjE2IiwiX2V4Y2x1ZGVkNCIsInBsYWNlaG9sZGVyIiwicmVwbGFjZSIsIl9JdGVtJGl0ZW1OYW1lMiIsIl9yZWYxNyIsIl9yZWYxOCIsIl9leGNsdWRlZDUiLCJib3JkZXJCb3R0b20iLCJ0ZXh0QWxpZ24iLCJhbGlnbiIsIm1heFJvd3MiLCJtYiIsIm9yaWVudGF0aW9uIiwiZmxleEl0ZW0iLCJmb250V2VpZ2h0IiwiY29udHJvbCIsImNoZWNrZWQiLCJvbkNsb3NlIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0Iiwib3ZlcmZsb3dZIiwib25DcmVhdGVPcHRpb24iLCJBdmF0YXIiLCJTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24iLCJzcmMiLCJzZXRTcmMiLCJmZXRjaEltYWdlIiwibGVuZ3RoIiwic3RhcnRzV2l0aCIsImJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJibG9iIiwiQmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZWFkQXNEYXRhVVJMIiwiZXJyIiwiYm9yZGVyIiwiT3V0bGV0IiwiTmF2TGluayIsIkxpbmsiLCJ1c2VMb2NhdGlvbiIsIkRhc2hib2FyZEljb24iLCJQZXJtSWRlbnRpdHlJY29uIiwiTGlzdEFsdEljb24iLCJEZXNjcmlwdGlvbkljb24iLCJSZWNlaXB0SWNvbiIsIk1vdmluZ0ljb24iLCJTZXR0aW5nc0ljb24iLCJJbnNlcnREcml2ZUZpbGVJY29uIiwiUmVzdG9yZVBhZ2VJY29uIiwiUmVxdWVzdFF1b3RlSWNvbiIsIk1vbmV0aXphdGlvbk9uSWNvbiIsIkVuZ2luZWVyaW5nSWNvbiIsIkV4cGxpY2l0IiwiU2hvcHBpbmdCYWdPdXRsaW5lZCIsIlJvb21QcmVmZXJlbmNlc0ljb24iLCJMaXN0SXRlbUJ1dHRvbiIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIm1ha2VTdHlsZXMiLCJQYXltZW50SWNvbiIsIk1vcmVWZXJ0SWNvbiIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9