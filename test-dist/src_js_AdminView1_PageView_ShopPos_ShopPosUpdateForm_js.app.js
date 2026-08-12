"use strict";
exports.id = "src_js_AdminView1_PageView_ShopPos_ShopPosUpdateForm_js";
exports.ids = ["src_js_AdminView1_PageView_ShopPos_ShopPosUpdateForm_js"];
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

/***/ "./src/js/AdminView1/PageView/ShopPos/ShopPosUpdateForm.js"
/*!*****************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ShopPos/ShopPosUpdateForm.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SideShop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SideShop */ "./src/js/component/SideShop.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["children"];
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
function ShopPosUpdateForm() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_39__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_39__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_49__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_49__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__.setUser)({
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
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__.logOut)());
    navigate('/');
  };
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/create-invoice");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    invoiceDate = _useState2[0],
    setInvoiceDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    time = _useState4[0],
    setTime = _useState4[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    factureNumber = _useState6[0],
    setFactureNumber = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    items = _useState8[0],
    SetItems = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    subTotal = _useState0[0],
    setSubTotal = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    totalFC = _useState10[0],
    setTotal = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    totalUSD = _useState12[0],
    setTotalUSD = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    creditFC = _useState14[0],
    setCreditFC = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    creditUsd = _useState16[0],
    setCreditUsd = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    credit = _useState18[0],
    setCredit = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    TotalAmountPaid = _useState20[0],
    setTotalAmountPaid = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    remaining = _useState22[0],
    setRemaining = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    totalInvoice = _useState24[0],
    setTotalInvoice = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    balanceDue = _useState26[0],
    setBalanceDue = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    ItemInformation = _useState28[0],
    setItemInformation = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState30 = _slicedToArray(_useState29, 2),
    customerName = _useState30[0],
    setCustomerName = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Merci pour votre visite. Les Marchandises vendues ne sont ni reprises ni echangees"),
    _useState32 = _slicedToArray(_useState31, 2),
    note = _useState32[0],
    setNote = _useState32[1];
  var dateComment = new Date();
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    rate = _useState34[0],
    setRate = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    tax = _useState36[0],
    setTax = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    CheckTvA = _useState38[0],
    setCheckTvA = _useState38[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/get-pos/").concat(id));
          setCustomerName(res.data.data.customerName);
          setFactureNumber(Number(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.factureNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.factureNumber) || 0));
          setTotal(res.data.data.totalFC);
          SetItems(res.data.data.items);
          setTotalUSD(res.data.data.totalUSD);
          setCreditFC(res.data.data.creditFC);
          setCreditUsd(res.data.data.creditUsd);
          setCredit(res.data.data.credit);
          setTotalAmountPaid(res.data.data.TotalAmountPaid);
          setRemaining(res.data.data.remaining);
          setTotalInvoice(res.data.data.totalInvoice);
          setRate(res.data.data.rate);
          // Robust check for CheckTvA property
          var hasTva = res.data.data.CheckTvA !== undefined ? res.data.data.CheckTvA : res.data.data.checkTvA;
          setCheckTvA(hasTva || false);
          setTax(res.data.data.tax || 0);
          setInvoiceDate(res.data.data.invoiceDate);
          setTime(res.data.data.time);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchItem = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var _res$data3;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/item"));
          setItemInformation((_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.filter(row => row.typeItem === "Goods").map(row => _objectSpread(_objectSpread({}, row), {}, {
            ItemNumber: row.itemUpc.newCode + '-' + String(row.itemUpc.itemNumber).padStart(6, '0')
          })).reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchItem() {
        return _ref9.apply(this, arguments);
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
      itemCost: (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemCostPrice) * rate,
      itemDescription: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemDescription,
      itemRate: (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemSellingPrice) * rate,
      stock: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemQuantity,
      unit: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.unit
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
      typeItem: '',
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
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    openItemUpdate = _useState40[0],
    setOpenItemUpdate = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState42 = _slicedToArray(_useState41, 2),
    idItem = _useState42[0],
    setIdItem = _useState42[1];
  var handleOpenItemUpdate = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* (id) {
      setOpenItemUpdate(true);
      setIdItem(id);
    });
    return function handleOpenItemUpdate(_x) {
      return _ref0.apply(this, arguments);
    };
  }();
  var handleCloseItemUpdate = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      setOpenItemUpdate(false);
      if (idItem) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/get-item/").concat(idItem));
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
      return _ref1.apply(this, arguments);
    };
  }();
  {/** Item InFO End */}
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState44 = _slicedToArray(_useState43, 2),
    customer = _useState44[0],
    setCustomer = _useState44[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCustomer = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/customer"));
          setCustomer(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchCustomer() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchCustomer();
  }, []);
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    openAutocomplete1 = _useState46[0],
    setOpenAutocomplete1 = _useState46[1];
  var handleOpenOpenAutocomplete1 = e => {
    e.stopPropagation();
    setOpenAutocomplete1(true);
  };
  var handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  var handleCreateCustomer = newCustomer => {
    setCustomer([newCustomer, ...customer]);
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
  var handleClearCustomer = () => {
    setCustomerName(null);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (CheckTvA === true) {
      var result1 = items.reduce((sum, row) => sum + row.itemAmount, 0);
      setSubTotal(result1);
      // Add 16% TVA to newTotal
      var tva = Math.round(result1 * 0.16 * 100) / 100;
      setTax(tva);
      var TWTVA = result1 + tva;
      setTotalInvoice(TWTVA);
      var usdConvert = totalUSD * rate;
      var totalPaid = Number(usdConvert) + Number(totalFC);
      var newBalance = Math.round((TWTVA - totalPaid) * 100) / 100;
      var creditI = Math.abs(newBalance);
      setCredit(creditI);
      var usdConvert1 = creditUsd * rate;
      var totalPaid1 = Number(usdConvert1) + Number(creditFC);
      var rest = Math.round((creditI - totalPaid1) * 100) / 100;
      var totalPaidInfo = totalPaid - totalPaid1;
      setTotalAmountPaid(totalPaidInfo);
      setRemaining(rest);
      setBalanceDue(newBalance);
    } else {
      var _result = items.reduce((sum, row) => sum + row.itemAmount, 0);
      setSubTotal(_result);
      // Add 16% TVA to newTotal
      var _tva = Math.round(_result * 0 * 100) / 100;
      setTax(_tva);
      setTotalInvoice(_result);
      var _usdConvert = totalUSD * rate;
      var _totalPaid = Number(_usdConvert) + Number(totalFC);
      var _newBalance = Math.round((_result - _totalPaid) * 100) / 100;
      var _creditI = Math.abs(_newBalance);
      setCredit(_creditI);
      var _usdConvert2 = creditUsd * rate;
      var _totalPaid2 = Number(_usdConvert2) + Number(creditFC);
      var _rest = Math.round((_creditI - _totalPaid2) * 100) / 100;
      var _totalPaidInfo = _totalPaid - _totalPaid2;
      setTotalAmountPaid(_totalPaidInfo);
      setRemaining(_rest);
      setBalanceDue(_newBalance);
    }
  }, [CheckTvA, items, items, rate, totalUSD, totalFC, creditUsd, creditFC]);
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    open1 = _useState50[0],
    setOpen1 = _useState50[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseBack = () => {
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
    loadingOpenModalUpdate = _useState56[0],
    setLoadingOpenModalUpdate = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    ErrorOpenModal = _useState58[0],
    setErrorOpenModal = _useState58[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setOpen1(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleOpenUpdate = () => {
    setLoadingOpenModalUpdate(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleError = () => {
    setErrorOpenModal(true);
    setOpen1(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
  };
  var handleCloseUpdate = () => {
    setLoadingOpenModalUpdate(false);
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
    var _ref11 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Modified ',
        reason: 'S-00' + String(ReferenceInfoNumber).padStart(6, '0') + ' For ' + customerName.customerName,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2, _x3) {
      return _ref11.apply(this, arguments);
    };
  }();
  var status = '';
  if (parseInt(balanceDue) > 0 && balanceDue !== totalInvoice) {
    status = 'Partially-Paid';
  } else if (parseFloat(balanceDue) <= 0) {
    status = 'Paid';
  } else {
    status = 'Draft';
  }
  var itemFilter = items.filter(row => {
    var _row$itemName3;
    return row.itemName.itemName !== '' && ((_row$itemName3 = row.itemName) === null || _row$itemName3 === void 0 ? void 0 : _row$itemName3._id);
  });
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState60 = _slicedToArray(_useState59, 2),
    saving = _useState60[0],
    setSaving = _useState60[1];
  var handleQty = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/CalculateTotal"));
      } catch (error) {
        console.log(error);
      }
    });
    return function handleQty() {
      return _ref12.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var data = {
        customerName,
        factureNumber,
        invoiceDate,
        time,
        TotalAmountPaid,
        remaining,
        credit,
        creditUsd,
        creditFC,
        status,
        items: itemFilter,
        subTotal,
        totalFC,
        totalUSD,
        tax,
        rate,
        balanceDue,
        note,
        totalInvoice,
        updateS: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/update-pos/").concat(id), data);
        if (res) {
          // Open Loading View
          handleQty();
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.factureNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
          handleOpen();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x4) {
      return _ref13.apply(this, arguments);
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
  }, "Add new invoice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_45__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_59__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_58__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_51__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_31__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_28__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SideShop__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      padding: '10px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_10__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, customerName !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, customerName.customerName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClearCustomer,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disableClearable: true,
    options: customer,
    getOptionLabel: option => option.customerFullName ? option.customerFullName : option.companyName,
    onChange: (e, newValue) => {
      handleChangeCustomer(newValue);
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, params, {
      label: "Customer Name",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "factureNumber"
  }, "Invoice Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "number",
    id: "factureNumber",
    name: "factureNumber",
    label: "Invoice Number",
    value: factureNumber,
    onChange: e => setFactureNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "I-")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_41__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_42__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_40__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_43__.DatePicker, {
    required: true,
    name: "invoiceDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_44___default()(invoiceDate),
    onChange: date => setInvoiceDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_41__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_42__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_40__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_43__.DatePicker, {
    required: true,
    name: "time",
    label: "Time",
    value: dayjs__WEBPACK_IMPORTED_MODULE_44___default()(time),
    onChange: date => setTime(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "HH:mm"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  }))))), user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
    ref: provided.innerRef
  }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    required: true,
    name: "newDescription",
    id: "newDescription",
    value: Item.newDescription,
    onChange: e => handleChangeCEO(e, i),
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
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, Item.itemName ? Item.itemName.itemName.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => handleShowAutocomplete(Item.idRow),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disableClearable: true,
    options: filterItemInformation,
    getOptionLabel: option => option.itemUpc.newCode + '-' + String(option.itemUpc.itemNumber).padStart(6, '0') + ' / ' + option.itemName + ' / ' + option.itemBrand,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], props, option.itemUpc.newCode + '-' + String(option.itemUpc.itemNumber).padStart(6, '0') + ' / ' + option.itemName + ' / ' + option.itemBrand),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], params),
    inputValue: inputValue,
    onInputChange: (event, newInputValue) => {
      setInputValue(newInputValue);
    },
    filterOptions: (options, _ref14) => {
      var inputValue = _ref14.inputValue;
      return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.ItemNumber.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
    },
    onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
    size: "small",
    PaperComponent: _ref15 => {
      var children = _ref15.children,
        other = _objectWithoutProperties(_ref15, _excluded3);
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
      width: '300px',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disabled: parseFloat(Item.stock) <= 0,
    name: "itemQty",
    id: "itemQty",
    onChange: e => {
      if (e.target.value <= Item.stock) {
        handleChangeCEO(e, i);
      }
    },
    size: "small",
    value: Item.itemQty,
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "itemRate",
    id: "itemRate",
    value: Item.itemRate,
    onChange: e => handleChangeCEO(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  })))))))), provided.placeholder))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
    ref: provided.innerRef
  }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    hidden: Item.itemName ? Item.itemName.itemName === 'empty' : '',
    sx: {
      fontSize: '23px'
    }
  }, Item.itemName ? Item.itemName.itemName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => handleShowAutocomplete(Item.idRow),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disableClearable: true,
    options: filterItemInformation,
    getOptionLabel: option => option.itemUpc.newCode + '-' + String(option.itemUpc.itemNumber).padStart(6, '0') + ' / ' + option.itemName + ' / ' + option.itemBrand,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], props, option.itemUpc.newCode + '-' + String(option.itemUpc.itemNumber).padStart(6, '0') + ' / ' + option.itemName + ' / ' + option.itemBrand),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], params),
    inputValue: inputValue,
    onInputChange: (event, newInputValue) => {
      setInputValue(newInputValue);
    },
    filterOptions: (options, _ref16) => {
      var inputValue = _ref16.inputValue;
      return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()) || option.ItemNumber.toLowerCase().includes(inputValue.toLowerCase()));
    },
    onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
    size: "small",
    sx: {
      width: '300px',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disabled: parseFloat(Item.stock) <= 0,
    name: "itemQty",
    id: "itemQty",
    onChange: e => {
      if (e.target.value <= Item.stock) {
        handleChange(e, i);
      }
    },
    size: "small",
    value: Item.itemQty,
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    id: "amountTotalInvoice"
  }, Item.itemRate.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  })))))))), provided.placeholder)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "firstTable",
    style: {
      width: '800px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'center'
    },
    colSpan: 2
  }, "Tax Details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Total Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, " FC ", subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (subTotal / rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "TVA @ 16 %", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      checked: CheckTvA,
      onChange: e => setCheckTvA(e.target.checked)
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, "FC ", tax.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (tax / rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Total General"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, "FC ", totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (totalInvoice / rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Cash FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'space-between',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "amountPaidFC",
    value: totalFC,
    onChange: e => setTotal(e.target.value),
    size: "small",
    sx: {
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Cash USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'space-between',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "amountPaidUSD",
    value: totalUSD,
    onChange: e => setTotalUSD(e.target.value),
    size: "small",
    sx: {
      backgroundColor: 'white'
    }
  }))), balanceDue >= 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, "FC ", balanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (balanceDue / rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Amount to Return"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, "FC ", Math.abs(balanceDue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", Math.abs(balanceDue / rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")"))), balanceDue < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Return FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'space-between',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "amountPaidFC",
    value: creditFC,
    onChange: e => setCreditFC(e.target.value),
    size: "small",
    sx: {
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Return USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'space-between',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "amountPaidFC",
    value: creditUsd,
    onChange: e => setCreditUsd(e.target.value),
    size: "small",
    sx: {
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "remaining"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, "FC ", remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (remaining / rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "note",
    name: "note",
    multiline: true,
    rows: 4,
    value: note,
    label: "Invoice Note",
    onChange: e => setNote(e.target.value),
    sx: {
      width: '50%',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__["default"], {
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
    onClick: () => navigate(-1),
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_48__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_48__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_47__["default"], {
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
    open: loadingOpenModalUpdate,
    onClose: handleCloseUpdate,
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_48__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__["default"], {
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
    onClick: handleCloseUpdate,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_52__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_55__["default"], {
    onClose: handleCloseItemUpdate,
    id: idItem
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopPosUpdateForm);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfU2hvcFBvc19TaG9wUG9zVXBkYXRlRm9ybV9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQywwQkFBMEIsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ04zQjs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxVQUFVLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05YLENBQW1EO0FBQ0E7QUFDM0I7QUFDRTtBQUMwQjtBQUNzQjtBQUNSO0FBQ2Q7QUFDcU07QUFDekw7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDekM7QUFDdUY7QUFDOUQ7QUFDeEI7QUFDZ0M7QUFDUztBQUNhO0FBQ2hCO0FBQ0o7QUFDbEM7QUFDNEI7QUFDUTtBQUNWO0FBQ0w7QUFDUTtBQUMrQjtBQUN0QztBQUNrQjtBQUNwQjtBQUNRO0FBQ0k7QUFDZjtBQUNpQztBQUN0QjtBQUNRO0FBRzlELElBQU0yRSxZQUFZLEdBQUcxRCwwREFBTSxDQUFDMkQsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2hEaEYsMERBQUEsQ0FBQzRCLDhEQUFPLEVBQUFzRCxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU8xRCw4REFBYyxDQUFDMkQsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDM0JDLFFBQVEsRUFBRTtJQUNaO0VBQ0YsQ0FBQztBQUFBLENBQUMsQ0FBQztBQUVILElBQU1DLFlBQVksR0FBRzdFLDBEQUFNLENBQUM4RSxLQUFBO0VBQUEsSUFBR2xCLFNBQVMsR0FBQWtCLEtBQUEsQ0FBVGxCLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBZ0IsS0FBQSxFQUFBQyxVQUFBO0VBQUEsb0JBQ2hEaEcsMERBQUEsQ0FBQzRCLDhEQUFPLEVBQUFzRCxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ29CLEtBQUE7RUFBQSxJQUFHWCxLQUFLLEdBQUFXLEtBQUEsQ0FBTFgsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPMUQsOERBQWMsQ0FBQzJELE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLFNBQVM7TUFDMUJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzNCQyxRQUFRLEVBQUU7SUFDWjtFQUNGLENBQUM7QUFBQSxDQUFDLENBQUM7QUFFSCxJQUFNSyxLQUFLLEdBQUc7RUFDWkMsUUFBUSxFQUFFLFVBQVU7RUFDcEJDLEdBQUcsRUFBRSxLQUFLO0VBQ1ZDLElBQUksRUFBRSxLQUFLO0VBQ1hDLFNBQVMsRUFBRSx1QkFBdUI7RUFDbENDLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLE9BQU8sRUFBRSxrQkFBa0I7RUFDM0JiLFNBQVMsRUFBRSxFQUFFO0VBQ2JjLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEVBQUUsRUFBRTtBQUNOLENBQUM7QUFDRCxJQUFNQyxNQUFNLEdBQUc7RUFDYlQsUUFBUSxFQUFFLFVBQVU7RUFDcEJDLEdBQUcsRUFBRSxLQUFLO0VBQ1ZDLElBQUksRUFBRSxLQUFLO0VBQ1hDLFNBQVMsRUFBRSx1QkFBdUI7RUFDbENDLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLE9BQU8sRUFBRSxrQkFBa0I7RUFDM0JiLFNBQVMsRUFBRSxFQUFFO0VBQ2JjLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEVBQUUsRUFBRTtBQUNOLENBQUM7QUFDRCxJQUFNRSxXQUFXLEdBQUcsR0FBRztBQUN2QixJQUFNQyxNQUFNLEdBQUc3RiwwREFBTSxDQUFDYSw2REFBUyxFQUFFO0VBQy9CaUYsaUJBQWlCLEVBQUdDLElBQUksSUFBS0EsSUFBSSxLQUFLO0FBQ3hDLENBQUMsQ0FBQyxDQUFDQyxLQUFBO0VBQUEsSUFBRzNCLEtBQUssR0FBQTJCLEtBQUEsQ0FBTDNCLEtBQUs7SUFBRTRCLElBQUksR0FBQUQsS0FBQSxDQUFKQyxJQUFJO0VBQUEsT0FBQUMsYUFBQTtJQUNmQyxNQUFNLEVBQUU5QixLQUFLLENBQUM4QixNQUFNLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQy9CQyxVQUFVLEVBQUVoQyxLQUFLLENBQUNpQyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRTtNQUN4REMsTUFBTSxFQUFFbkMsS0FBSyxDQUFDaUMsV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7TUFDdENDLFFBQVEsRUFBRXJDLEtBQUssQ0FBQ2lDLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDQztJQUN2QyxDQUFDO0VBQUMsR0FDRVYsSUFBSSxJQUFJO0lBQ1ZXLFVBQVUsRUFBRWhCLFdBQVc7SUFDdkJOLEtBQUssaUJBQUFoQixNQUFBLENBQWlCc0IsV0FBVyxRQUFLO0lBQ3RDUyxVQUFVLEVBQUVoQyxLQUFLLENBQUNpQyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRTtNQUN4REMsTUFBTSxFQUFFbkMsS0FBSyxDQUFDaUMsV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7TUFDdENDLFFBQVEsRUFBRXJDLEtBQUssQ0FBQ2lDLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDRztJQUN2QyxDQUFDO0VBQ0gsQ0FBQztBQUFBLENBQ0QsQ0FBQztBQUNILElBQU1DLE1BQU0sR0FBRzlHLDBEQUFNLENBQUNnQiw2REFBUyxFQUFFO0VBQUU4RSxpQkFBaUIsRUFBR0MsSUFBSSxJQUFLQSxJQUFJLEtBQUs7QUFBTyxDQUFDLENBQUMsQ0FDaEZnQixLQUFBO0VBQUEsSUFBRzFDLEtBQUssR0FBQTBDLEtBQUEsQ0FBTDFDLEtBQUs7SUFBRTRCLElBQUksR0FBQWMsS0FBQSxDQUFKZCxJQUFJO0VBQUEsT0FBUTtJQUNwQixvQkFBb0IsRUFBQUMsYUFBQTtNQUNsQmhCLFFBQVEsRUFBRSxVQUFVO01BQ3BCOEIsVUFBVSxFQUFFLFFBQVE7TUFDcEIxQixLQUFLLEVBQUVNLFdBQVc7TUFDbEJTLFVBQVUsRUFBRWhDLEtBQUssQ0FBQ2lDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUM1Q0MsTUFBTSxFQUFFbkMsS0FBSyxDQUFDaUMsV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7UUFDdENDLFFBQVEsRUFBRXJDLEtBQUssQ0FBQ2lDLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDRztNQUN2QyxDQUFDLENBQUM7TUFDRkksU0FBUyxFQUFFO0lBQVksR0FDbkIsQ0FBQ2hCLElBQUksSUFBSTtNQUNYaUIsU0FBUyxFQUFFLFFBQVE7TUFDbkJiLFVBQVUsRUFBRWhDLEtBQUssQ0FBQ2lDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUM1Q0MsTUFBTSxFQUFFbkMsS0FBSyxDQUFDaUMsV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7UUFDdENDLFFBQVEsRUFBRXJDLEtBQUssQ0FBQ2lDLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDQztNQUN2QyxDQUFDLENBQUM7TUFDRnJCLEtBQUssRUFBRWpCLEtBQUssQ0FBQzhDLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDdkIsQ0FBQzlDLEtBQUssQ0FBQytDLFdBQVcsQ0FBQ0MsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHO1FBQzVCL0IsS0FBSyxFQUFFakIsS0FBSyxDQUFDOEMsT0FBTyxDQUFDLENBQUM7TUFDeEI7SUFDRixDQUFDO0VBRUwsQ0FBQztBQUFBLENBQ0gsQ0FBQztBQUVELFNBQVNHLGlCQUFpQkEsQ0FBQSxFQUFHO0VBQzNCLElBQUFDLFVBQUEsR0FBZXZGLDREQUFTLENBQUMsQ0FBQztJQUFsQndGLEVBQUUsR0FBQUQsVUFBQSxDQUFGQyxFQUFFO0VBQ1YsSUFBTUMsUUFBUSxHQUFHMUYsOERBQVcsQ0FBQyxDQUFDO0VBQzlCLElBQU0yRixRQUFRLEdBQUdoRix5REFBVyxDQUFDLENBQUM7RUFDOUIsSUFBTWlGLElBQUksR0FBR2hGLHlEQUFXLENBQUNFLHdFQUFpQixDQUFDO0VBRTNDN0QsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBTTRJLFlBQVksR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2pELElBQU1DLFNBQVM7TUFBQSxJQUFBQyxLQUFBLEdBQUFDLGlCQUFBLENBQUcsYUFBWTtRQUM1QixJQUFJTCxZQUFZLEVBQUU7VUFDaEIsSUFBSTtZQUNGLElBQU1NLEdBQUcsU0FBUzNHLDhDQUFLLENBQUM0RyxHQUFHLElBQUE3RCxNQUFBLENBQUl6QyxxREFBWSx3QkFBQXlDLE1BQUEsQ0FBcUJzRCxZQUFZLENBQUUsQ0FBQztZQUMvRSxJQUFNUSxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNDLFlBQVk7WUFDdkMsSUFBTUMsSUFBSSxHQUFHTCxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDRyxJQUFJO1lBQy9CZCxRQUFRLENBQUM1RSxrRUFBTyxDQUFDO2NBQUUyRixRQUFRLEVBQUVMLElBQUk7Y0FBRUksSUFBSSxFQUFFRDtZQUFLLENBQUMsQ0FBQyxDQUFDO1VBQ25ELENBQUMsQ0FBQyxPQUFPRyxLQUFLLEVBQUU7WUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQztVQUM5QztRQUNGLENBQUMsTUFBTTtVQUNMakIsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNmO01BQ0YsQ0FBQztNQUFBLGdCQWJLTSxTQUFTQSxDQUFBO1FBQUEsT0FBQUMsS0FBQSxDQUFBWSxLQUFBLE9BQUFDLFNBQUE7TUFBQTtJQUFBLEdBYWQ7SUFDRGQsU0FBUyxDQUFDLENBQUM7RUFDYixDQUFDLEVBQUUsQ0FBQ0wsUUFBUSxDQUFDLENBQUM7RUFFZCxJQUFNb0IsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDekJqQixZQUFZLENBQUNrQixVQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CckIsUUFBUSxDQUFDOUUsaUVBQU0sQ0FBQyxDQUFDLENBQUM7SUFDbEI2RSxRQUFRLENBQUMsR0FBRyxDQUFDO0VBQ2YsQ0FBQztFQUVELElBQU11QixNQUFNLE1BQUExRSxNQUFBLENBQU16QyxxREFBWSxvQkFBaUI7RUFDL0MsSUFBQW9ILFNBQUEsR0FBc0NoSywrQ0FBUSxDQUFDLE1BQU07TUFDbkQsSUFBTWlLLElBQUksR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN2QixPQUFPRCxJQUFJO0lBQ2IsQ0FBQyxDQUFDO0lBQUFFLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBSEtLLFdBQVcsR0FBQUYsVUFBQTtJQUFFRyxjQUFjLEdBQUFILFVBQUE7RUFJbEMsSUFBQUksVUFBQSxHQUF3QnZLLCtDQUFRLENBQUMsTUFBTTtNQUNyQyxJQUFNaUssSUFBSSxHQUFHLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3ZCLE9BQU9ELElBQUk7SUFDYixDQUFDLENBQUM7SUFBQU8sVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFIS0UsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTtFQUlwQixJQUFBRyxlQUFBLEdBQW9DN0sscURBQWMsQ0FBQyxFQUFFLENBQUM7SUFBQThLLGdCQUFBLEdBQUFSLGNBQUEsQ0FBQU8sZUFBQTtJQUEvQ0UsVUFBVSxHQUFBRCxnQkFBQTtJQUFFRSxhQUFhLEdBQUFGLGdCQUFBO0VBQ2hDLElBQUFHLFVBQUEsR0FBMEMvSywrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBZ0wsVUFBQSxHQUFBWixjQUFBLENBQUFXLFVBQUE7SUFBOUNFLGFBQWEsR0FBQUQsVUFBQTtJQUFFRSxnQkFBZ0IsR0FBQUYsVUFBQTtFQUN0QyxJQUFBRyxVQUFBLEdBQTBCbkwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQW9MLFVBQUEsR0FBQWhCLGNBQUEsQ0FBQWUsVUFBQTtJQUEvQkUsS0FBSyxHQUFBRCxVQUFBO0lBQUVFLFFBQVEsR0FBQUYsVUFBQTtFQUN0QixJQUFBRyxVQUFBLEdBQWdDdkwsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQXdMLFVBQUEsR0FBQXBCLGNBQUEsQ0FBQW1CLFVBQUE7SUFBcENFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFDNUIsSUFBQUcsVUFBQSxHQUE0QjNMLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUE0TCxXQUFBLEdBQUF4QixjQUFBLENBQUF1QixVQUFBO0lBQWhDRSxPQUFPLEdBQUFELFdBQUE7SUFBRUUsUUFBUSxHQUFBRixXQUFBO0VBQ3hCLElBQUFHLFdBQUEsR0FBZ0MvTCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBZ00sV0FBQSxHQUFBNUIsY0FBQSxDQUFBMkIsV0FBQTtJQUFwQ0UsUUFBUSxHQUFBRCxXQUFBO0lBQUVFLFdBQVcsR0FBQUYsV0FBQTtFQUM1QixJQUFBRyxXQUFBLEdBQWdDbk0sK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQW9NLFdBQUEsR0FBQWhDLGNBQUEsQ0FBQStCLFdBQUE7SUFBcENFLFFBQVEsR0FBQUQsV0FBQTtJQUFFRSxXQUFXLEdBQUFGLFdBQUE7RUFDNUIsSUFBQUcsV0FBQSxHQUFrQ3ZNLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUF3TSxXQUFBLEdBQUFwQyxjQUFBLENBQUFtQyxXQUFBO0lBQXRDRSxTQUFTLEdBQUFELFdBQUE7SUFBRUUsWUFBWSxHQUFBRixXQUFBO0VBQzlCLElBQUFHLFdBQUEsR0FBNEIzTSwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBNE0sV0FBQSxHQUFBeEMsY0FBQSxDQUFBdUMsV0FBQTtJQUFoQ0UsTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUN4QixJQUFBRyxXQUFBLEdBQThDL00sK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQWdOLFdBQUEsR0FBQTVDLGNBQUEsQ0FBQTJDLFdBQUE7SUFBbERFLGVBQWUsR0FBQUQsV0FBQTtJQUFFRSxrQkFBa0IsR0FBQUYsV0FBQTtFQUMxQyxJQUFBRyxXQUFBLEdBQWtDbk4sK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQW9OLFdBQUEsR0FBQWhELGNBQUEsQ0FBQStDLFdBQUE7SUFBdENFLFNBQVMsR0FBQUQsV0FBQTtJQUFFRSxZQUFZLEdBQUFGLFdBQUE7RUFDOUIsSUFBQUcsV0FBQSxHQUF3Q3ZOLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUF3TixXQUFBLEdBQUFwRCxjQUFBLENBQUFtRCxXQUFBO0lBQTVDRSxZQUFZLEdBQUFELFdBQUE7SUFBRUUsZUFBZSxHQUFBRixXQUFBO0VBQ3BDLElBQUFHLFdBQUEsR0FBb0MzTiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBNE4sV0FBQSxHQUFBeEQsY0FBQSxDQUFBdUQsV0FBQTtJQUF4Q0UsVUFBVSxHQUFBRCxXQUFBO0lBQUVFLGFBQWEsR0FBQUYsV0FBQTtFQUNoQyxJQUFBRyxXQUFBLEdBQThDL04sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWdPLFdBQUEsR0FBQTVELGNBQUEsQ0FBQTJELFdBQUE7SUFBbkRFLGVBQWUsR0FBQUQsV0FBQTtJQUFFRSxrQkFBa0IsR0FBQUYsV0FBQTtFQUMxQyxJQUFBRyxXQUFBLEdBQXdDbk8sK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQW9PLFdBQUEsR0FBQWhFLGNBQUEsQ0FBQStELFdBQUE7SUFBL0NFLFlBQVksR0FBQUQsV0FBQTtJQUFFRSxlQUFlLEdBQUFGLFdBQUE7RUFDcEMsSUFBQUcsV0FBQSxHQUF3QnZPLCtDQUFRLENBQUMsb0ZBQW9GLENBQUM7SUFBQXdPLFdBQUEsR0FBQXBFLGNBQUEsQ0FBQW1FLFdBQUE7SUFBL0dFLElBQUksR0FBQUQsV0FBQTtJQUFFRSxPQUFPLEdBQUFGLFdBQUE7RUFDcEIsSUFBTUcsV0FBVyxHQUFHLElBQUl6RSxJQUFJLENBQUMsQ0FBQztFQUM5QixJQUFBMEUsV0FBQSxHQUF3QjVPLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUE2TyxXQUFBLEdBQUF6RSxjQUFBLENBQUF3RSxXQUFBO0lBQTVCRSxJQUFJLEdBQUFELFdBQUE7SUFBRUUsT0FBTyxHQUFBRixXQUFBO0VBQ3BCLElBQUFHLFdBQUEsR0FBc0JoUCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBaVAsV0FBQSxHQUFBN0UsY0FBQSxDQUFBNEUsV0FBQTtJQUExQkUsR0FBRyxHQUFBRCxXQUFBO0lBQUVFLE1BQU0sR0FBQUYsV0FBQTtFQUNsQixJQUFBRyxXQUFBLEdBQWdDcFAsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQXFQLFdBQUEsR0FBQWpGLGNBQUEsQ0FBQWdGLFdBQUE7SUFBeENFLFFBQVEsR0FBQUQsV0FBQTtJQUFFRSxXQUFXLEdBQUFGLFdBQUE7RUFFNUJ0UCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNeVAsU0FBUztNQUFBLElBQUFDLEtBQUEsR0FBQXpHLGlCQUFBLENBQUcsYUFBWTtRQUM1QixJQUFJO1VBQUEsSUFBQTBHLFNBQUEsRUFBQUMsVUFBQTtVQUNGLElBQU0xRyxHQUFHLFNBQVMzRyw4Q0FBSyxDQUFDNEcsR0FBRyxJQUFBN0QsTUFBQSxDQUFJekMscURBQVksZUFBQXlDLE1BQUEsQ0FBWWtELEVBQUUsQ0FBRSxDQUFDO1VBQzVEK0YsZUFBZSxDQUFDckYsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ2lGLFlBQVksQ0FBQztVQUMzQ25ELGdCQUFnQixDQUFDMEUsTUFBTSxDQUFDLEVBQUFGLFNBQUEsR0FBQXpHLEdBQUcsQ0FBQ0csSUFBSSxjQUFBc0csU0FBQSxnQkFBQUEsU0FBQSxHQUFSQSxTQUFBLENBQVV0RyxJQUFJLGNBQUFzRyxTQUFBLHVCQUFkQSxTQUFBLENBQWdCekUsYUFBYSxPQUFBMEUsVUFBQSxHQUFJMUcsR0FBRyxDQUFDRyxJQUFJLGNBQUF1RyxVQUFBLHVCQUFSQSxVQUFBLENBQVUxRSxhQUFhLEtBQUksQ0FBQyxDQUFDLENBQUM7VUFDdkZhLFFBQVEsQ0FBQzdDLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUN5QyxPQUFPLENBQUM7VUFDL0JQLFFBQVEsQ0FBQ3JDLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNpQyxLQUFLLENBQUM7VUFDN0JhLFdBQVcsQ0FBQ2pELEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUM2QyxRQUFRLENBQUM7VUFDbkNLLFdBQVcsQ0FBQ3JELEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNpRCxRQUFRLENBQUM7VUFDbkNLLFlBQVksQ0FBQ3pELEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNxRCxTQUFTLENBQUM7VUFDckNLLFNBQVMsQ0FBQzdELEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUN5RCxNQUFNLENBQUM7VUFDL0JLLGtCQUFrQixDQUFDakUsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQzZELGVBQWUsQ0FBQztVQUNqREssWUFBWSxDQUFDckUsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ2lFLFNBQVMsQ0FBQztVQUNyQ0ssZUFBZSxDQUFDekUsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ3FFLFlBQVksQ0FBQztVQUMzQ3NCLE9BQU8sQ0FBQzlGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUMwRixJQUFJLENBQUM7VUFDM0I7VUFDQSxJQUFNZSxNQUFNLEdBQUc1RyxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDa0csUUFBUSxLQUFLUSxTQUFTLEdBQUc3RyxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDa0csUUFBUSxHQUFHckcsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQzJHLFFBQVE7VUFDckdSLFdBQVcsQ0FBQ00sTUFBTSxJQUFJLEtBQUssQ0FBQztVQUM1QlYsTUFBTSxDQUFDbEcsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQzhGLEdBQUcsSUFBSSxDQUFDLENBQUM7VUFDOUI1RSxjQUFjLENBQUNyQixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDaUIsV0FBVyxDQUFDO1VBQ3pDSyxPQUFPLENBQUN6QixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDcUIsSUFBSSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxPQUFPaEIsS0FBSyxFQUFFO1VBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7UUFDOUM7TUFDRixDQUFDO01BQUEsZ0JBeEJLK0YsU0FBU0EsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQTlGLEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUEsR0F3QmQ7SUFDRDRGLFNBQVMsQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOelAsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBTWlRLFNBQVM7TUFBQSxJQUFBQyxLQUFBLEdBQUFqSCxpQkFBQSxDQUFHLGFBQVk7UUFDNUIsSUFBSTtVQUFBLElBQUFrSCxVQUFBO1VBQ0YsSUFBTWpILEdBQUcsU0FBUzNHLDhDQUFLLENBQUM0RyxHQUFHLElBQUE3RCxNQUFBLENBQUl6QyxxREFBWSxVQUFPLENBQUM7VUFDbkRzTCxrQkFBa0IsRUFBQWdDLFVBQUEsR0FBQ2pILEdBQUcsQ0FBQ0csSUFBSSxjQUFBOEcsVUFBQSxnQkFBQUEsVUFBQSxHQUFSQSxVQUFBLENBQVU5RyxJQUFJLGNBQUE4RyxVQUFBLHVCQUFkQSxVQUFBLENBQWdCQyxNQUFNLENBQUVDLEdBQUcsSUFBS0EsR0FBRyxDQUFDQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUNDLEdBQUcsQ0FBRUYsR0FBRyxJQUFBbkosYUFBQSxDQUFBQSxhQUFBLEtBQ2hGbUosR0FBRztZQUNORyxVQUFVLEVBQUVILEdBQUcsQ0FBQ0ksT0FBTyxDQUFDQyxPQUFPLEdBQUcsR0FBRyxHQUFHQyxNQUFNLENBQUNOLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDRyxVQUFVLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHO1VBQUMsRUFDdkYsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxPQUFPcEgsS0FBSyxFQUFFO1VBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7UUFDOUM7TUFDRixDQUFDO01BQUEsZ0JBVkt1RyxTQUFTQSxDQUFBO1FBQUEsT0FBQUMsS0FBQSxDQUFBdEcsS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQVVkO0lBQ0RvRyxTQUFTLENBQUMsQ0FBQztFQUNiLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixJQUFNYyxnQkFBZ0IsR0FBR0EsQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLEtBQUs7SUFDNUMsSUFBTUMsZUFBZSxHQUFHRCxRQUFRO0lBQ2hDMUYsUUFBUSxDQUFDRCxLQUFLLElBQUlBLEtBQUssQ0FBQ2lGLEdBQUcsQ0FBRUYsR0FBRyxJQUFLQSxHQUFHLENBQUNXLEtBQUssS0FBS0EsS0FBSyxHQUFBOUosYUFBQSxDQUFBQSxhQUFBLEtBQ25EbUosR0FBRztNQUNOYyxRQUFRLEVBQUU7UUFDUkMsR0FBRyxFQUFFRixlQUFlLGFBQWZBLGVBQWUsdUJBQWZBLGVBQWUsQ0FBRUUsR0FBRztRQUN6QkQsUUFBUSxFQUFFRCxlQUFlLGFBQWZBLGVBQWUsdUJBQWZBLGVBQWUsQ0FBRUM7TUFDN0IsQ0FBQztNQUNERSxRQUFRLEVBQUUsQ0FBQUgsZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUVJLGFBQWEsSUFBR3ZDLElBQUk7TUFDL0N3QyxlQUFlLEVBQUVMLGVBQWUsYUFBZkEsZUFBZSx1QkFBZkEsZUFBZSxDQUFFSyxlQUFlO01BQ2pEQyxRQUFRLEVBQUUsQ0FBQU4sZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUVPLGdCQUFnQixJQUFHMUMsSUFBSTtNQUNsRDJDLEtBQUssRUFBRVIsZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUVTLFlBQVk7TUFDcENDLElBQUksRUFBRVYsZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUVVO0lBQUksS0FDekJ2QixHQUFHLENBQUMsQ0FBQztFQUNYLENBQUM7RUFDRCxJQUFNd0IsWUFBWSxHQUFHQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBSztJQUM3QixJQUFBQyxTQUFBLEdBQXdCRixDQUFDLENBQUNHLE1BQU07TUFBeEJDLElBQUksR0FBQUYsU0FBQSxDQUFKRSxJQUFJO01BQUVDLEtBQUssR0FBQUgsU0FBQSxDQUFMRyxLQUFLO0lBQ25CLElBQU1DLElBQUksR0FBRyxDQUFDLEdBQUc5RyxLQUFLLENBQUM7SUFDdkI4RyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDRyxJQUFJLENBQUMsR0FBR0MsS0FBSztJQUNyQixJQUFJQyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtNQUMvQkssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO0lBQzdCO0lBQ0FLLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFFRixJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUc7SUFDM0ZLLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFFRixJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUc7SUFDekZLLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUdLLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUdLLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO0lBQ3RFSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUc7SUFDakRLLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUNGLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUdLLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRztJQUNoR0ssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsR0FBR00sSUFBSSxDQUFDQyxLQUFLLENBQUVGLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUdLLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUksR0FBRyxDQUFDLEdBQUcsR0FBRztJQUM3RnhHLFFBQVEsQ0FBQzZHLElBQUksQ0FBQztFQUNoQixDQUFDO0VBQ0QsSUFBTUcsZUFBZSxHQUFHQSxDQUFDVCxDQUFDLEVBQUVDLENBQUMsS0FBSztJQUNoQyxJQUFBUyxVQUFBLEdBQXdCVixDQUFDLENBQUNHLE1BQU07TUFBeEJDLElBQUksR0FBQU0sVUFBQSxDQUFKTixJQUFJO01BQUVDLEtBQUssR0FBQUssVUFBQSxDQUFMTCxLQUFLO0lBQ25CLElBQU1DLElBQUksR0FBRyxDQUFDLEdBQUc5RyxLQUFLLENBQUM7SUFDdkI4RyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDRyxJQUFJLENBQUMsR0FBR0MsS0FBSztJQUNyQkMsSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBR00sSUFBSSxDQUFDQyxLQUFLLENBQUVGLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUdLLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUksR0FBRyxDQUFDLEdBQUcsR0FBRztJQUMzRkssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBR00sSUFBSSxDQUFDQyxLQUFLLENBQUVGLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUdLLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUksR0FBRyxDQUFDLEdBQUcsR0FBRztJQUN6RkssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBR0ssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBR0ssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7SUFDdEVLLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUdLLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRztJQUNqREssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBR00sSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQ0YsSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBR0ssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHO0lBQ2hHSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHTSxJQUFJLENBQUNDLEtBQUssQ0FBRUYsSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBR0ssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBSSxHQUFHLENBQUMsR0FBRyxHQUFHO0lBQzdGeEcsUUFBUSxDQUFDNkcsSUFBSSxDQUFDO0VBQ2hCLENBQUM7RUFDRDtFQUNBLElBQU1LLE9BQU8sR0FBR0EsQ0FBQSxLQUFNO0lBQ3BCbEgsUUFBUSxDQUFDLENBQUMsR0FBR0QsS0FBSyxFQUFFO01BQ2xCZ0YsUUFBUSxFQUFFLEVBQUU7TUFDWlUsS0FBSyxFQUFFbE8saURBQUUsQ0FBQyxDQUFDO01BQ1hxTyxRQUFRLEVBQUU7UUFDUkMsR0FBRyxFQUFFLEVBQUU7UUFDUEQsUUFBUSxFQUFFO01BQ1osQ0FBQztNQUNESSxlQUFlLEVBQUUsRUFBRTtNQUNuQm1CLFlBQVksRUFBRSxDQUFDO01BQ2ZDLE9BQU8sRUFBRSxDQUFDO01BQ1ZuQixRQUFRLEVBQUUsQ0FBQztNQUNYb0IsVUFBVSxFQUFFLENBQUM7TUFDYnZCLFFBQVEsRUFBRSxDQUFDO01BQ1h3QixXQUFXLEVBQUUsQ0FBQztNQUNkQyxRQUFRLEVBQUUsQ0FBQztNQUNYQyxVQUFVLEVBQUUsQ0FBQztNQUNiQyxPQUFPLEVBQUUsQ0FBQztNQUNWQyxVQUFVLEVBQUUsRUFBRTtNQUNkQyxhQUFhLEVBQUUsQ0FBQztNQUNoQkMsU0FBUyxFQUFFLENBQUM7TUFDWnpCLEtBQUssRUFBRSxDQUFDO01BQ1IwQixPQUFPLEVBQUUsQ0FBQztNQUNWQyxVQUFVLEVBQUU7SUFDZCxDQUFDLENBQUMsQ0FBQztFQUNMLENBQUM7RUFFRCxJQUFNQyxhQUFhLEdBQUlDLE1BQU0sSUFBSztJQUNoQyxJQUFJLENBQUNBLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFO01BQ3ZCO0lBQ0Y7SUFDQSxJQUFNQyxRQUFRLEdBQUcsQ0FBQyxHQUFHbkksS0FBSyxDQUFDO0lBQzNCLElBQUFvSSxnQkFBQSxHQUFrQkQsUUFBUSxDQUFDRSxNQUFNLENBQUNKLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQUFDLGlCQUFBLEdBQUF6SixjQUFBLENBQUFxSixnQkFBQTtNQUFsREssT0FBTyxHQUFBRCxpQkFBQTtJQUNkTCxRQUFRLENBQUNFLE1BQU0sQ0FBQ0osTUFBTSxDQUFDQyxXQUFXLENBQUNLLEtBQUssRUFBRSxDQUFDLEVBQUVFLE9BQU8sQ0FBQztJQUNyRHhJLFFBQVEsQ0FBQ2tJLFFBQVEsQ0FBQztFQUNwQixDQUFDO0VBQ0QsSUFBTU8sVUFBVSxHQUFHaEQsS0FBSyxJQUFJO0lBQzFCekYsUUFBUSxDQUFDRCxLQUFLLElBQUlBLEtBQUssQ0FBQzhFLE1BQU0sQ0FBRTZELElBQUksSUFBS0EsSUFBSSxDQUFDakQsS0FBSyxLQUFLQSxLQUFLLENBQUMsQ0FBQztFQUNqRSxDQUFDO0VBQ0QsSUFBTWtELHFCQUFxQixHQUFHaEcsZUFBZSxDQUFDa0MsTUFBTSxDQUFDK0QsTUFBTSxJQUFJLENBQUM3SSxLQUFLLENBQUM4SSxJQUFJLENBQUUvRCxHQUFHO0lBQUEsSUFBQWdFLGFBQUE7SUFBQSxPQUFLRixNQUFNLENBQUMvQyxHQUFHLE9BQUFpRCxhQUFBLEdBQUtoRSxHQUFHLENBQUNjLFFBQVEsY0FBQWtELGFBQUEsdUJBQVpBLGFBQUEsQ0FBY2pELEdBQUcsS0FBSStDLE1BQU0sQ0FBQzdELFFBQVEsS0FBSyxPQUFPO0VBQUEsRUFBQyxDQUFDO0VBQ3JKLENBQUM7RUFFRCxJQUFNZ0Usc0JBQXNCLEdBQUl0RCxLQUFLLElBQUs7SUFDeEN6RixRQUFRLENBQUNELEtBQUssSUFBSUEsS0FBSyxDQUFDaUYsR0FBRyxDQUFFRixHQUFHLElBQUtBLEdBQUcsQ0FBQ1csS0FBSyxLQUFLQSxLQUFLLEdBQUE5SixhQUFBLENBQUFBLGFBQUEsS0FDbkRtSixHQUFHO01BQ05jLFFBQVEsRUFBRTtRQUNSQyxHQUFHLEVBQUUsSUFBSTtRQUNURCxRQUFRLEVBQUU7TUFDWixDQUFDO01BQ0RJLGVBQWUsRUFBRSxFQUFFO01BQ25CbUIsWUFBWSxFQUFFLENBQUM7TUFDZkMsT0FBTyxFQUFFLENBQUM7TUFDVm5CLFFBQVEsRUFBRSxDQUFDO01BQ1hvQixVQUFVLEVBQUUsQ0FBQztNQUNidkIsUUFBUSxFQUFFLENBQUM7TUFDWHdCLFdBQVcsRUFBRSxDQUFDO01BQ2RDLFFBQVEsRUFBRSxDQUFDO01BQ1hDLFVBQVUsRUFBRSxDQUFDO01BQ2JDLE9BQU8sRUFBRSxDQUFDO01BQ1ZDLFVBQVUsRUFBRSxFQUFFO01BQ2RDLGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxTQUFTLEVBQUUsQ0FBQztNQUNaekIsS0FBSyxFQUFFLENBQUM7TUFDUjBCLE9BQU8sRUFBRSxDQUFDO01BQ1ZDLFVBQVUsRUFBRTtJQUFDLEtBQ1hoRCxHQUFHLENBQUMsQ0FBQztFQUNYLENBQUM7RUFDRCxJQUFNa0UsaUNBQWlDLEdBQUl2RCxLQUFLLElBQUs7SUFDbkR6RixRQUFRLENBQUNELEtBQUssSUFBSUEsS0FBSyxDQUFDaUYsR0FBRyxDQUFFRixHQUFHLElBQUtBLEdBQUcsQ0FBQ1csS0FBSyxLQUFLQSxLQUFLLEdBQUE5SixhQUFBLENBQUFBLGFBQUEsS0FDbkRtSixHQUFHO01BQ05jLFFBQVEsRUFBRTtRQUNSQSxRQUFRLEVBQUU7TUFDWjtJQUFDLEtBQ0NkLEdBQUcsQ0FBQyxDQUFDO0VBQ1gsQ0FBQztFQUNELElBQUFtRSxXQUFBLEdBQTRDdlUsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQXdVLFdBQUEsR0FBQXBLLGNBQUEsQ0FBQW1LLFdBQUE7SUFBcERFLGNBQWMsR0FBQUQsV0FBQTtJQUFFRSxpQkFBaUIsR0FBQUYsV0FBQTtFQUN4QyxJQUFBRyxXQUFBLEdBQTRCM1UsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTRVLFdBQUEsR0FBQXhLLGNBQUEsQ0FBQXVLLFdBQUE7SUFBbkNFLE1BQU0sR0FBQUQsV0FBQTtJQUFFRSxTQUFTLEdBQUFGLFdBQUE7RUFFeEIsSUFBTUcsb0JBQW9CO0lBQUEsSUFBQUMsS0FBQSxHQUFBaE0saUJBQUEsQ0FBRyxXQUFPVCxFQUFFLEVBQUs7TUFDekNtTSxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7TUFDdkJJLFNBQVMsQ0FBQ3ZNLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFBQSxnQkFIS3dNLG9CQUFvQkEsQ0FBQUUsRUFBQTtNQUFBLE9BQUFELEtBQUEsQ0FBQXJMLEtBQUEsT0FBQUMsU0FBQTtJQUFBO0VBQUEsR0FHekI7RUFDRCxJQUFNc0wscUJBQXFCO0lBQUEsSUFBQUMsS0FBQSxHQUFBbk0saUJBQUEsQ0FBRyxhQUFZO01BQ3hDMEwsaUJBQWlCLENBQUMsS0FBSyxDQUFDO01BQ3hCLElBQUlHLE1BQU0sRUFBRTtRQUNWLElBQUk7VUFDRixJQUFNNUwsR0FBRyxTQUFTM0csOENBQUssQ0FBQzRHLEdBQUcsSUFBQTdELE1BQUEsQ0FBSXpDLHFEQUFZLGdCQUFBeUMsTUFBQSxDQUFhd1AsTUFBTSxDQUFFLENBQUM7VUFDakV2SixRQUFRLENBQUNELEtBQUssSUFBSUEsS0FBSyxDQUFDaUYsR0FBRyxDQUFFRixHQUFHO1lBQUEsSUFBQWdGLGNBQUE7WUFBQSxPQUFLLEVBQUFBLGNBQUEsR0FBQWhGLEdBQUcsQ0FBQ2MsUUFBUSxjQUFBa0UsY0FBQSx1QkFBWkEsY0FBQSxDQUFjakUsR0FBRyxNQUFLbEksR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQytILEdBQUcsR0FBQWxLLGFBQUEsQ0FBQUEsYUFBQSxLQUN2RW1KLEdBQUc7Y0FDTmMsUUFBUSxFQUFFO2dCQUNSQyxHQUFHLEVBQUVsSSxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDK0gsR0FBRztnQkFDdEJELFFBQVEsRUFBRWpJLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUM4SDtjQUMxQixDQUFDO2NBQ0RJLGVBQWUsRUFBRXJJLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNrSSxlQUFlO2NBQzlDRixRQUFRLEVBQUVuSSxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDaUksYUFBYTtjQUNyQ0UsUUFBUSxFQUFFdEksR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ29JLGdCQUFnQjtjQUN4Q0MsS0FBSyxFQUFFeEksR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ3NJLFlBQVk7Y0FDakNrQixXQUFXLEVBQUV4QyxHQUFHLENBQUNzQyxPQUFPLEdBQUd6SixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDb0ksZ0JBQWdCO2NBQ3pEcUIsUUFBUSxFQUFHekMsR0FBRyxDQUFDc0MsT0FBTyxHQUFHekosR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ29JLGdCQUFnQixHQUFJcEIsR0FBRyxDQUFDcUMsWUFBWTtjQUMzRUssVUFBVSxFQUFJMUMsR0FBRyxDQUFDc0MsT0FBTyxHQUFHekosR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ29JLGdCQUFnQixHQUFJcEIsR0FBRyxDQUFDcUMsWUFBWSxHQUFJLEdBQUc7Y0FDckZFLFVBQVUsRUFBR3ZDLEdBQUcsQ0FBQ3NDLE9BQU8sR0FBR3pKLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNvSSxnQkFBZ0IsR0FBT3BCLEdBQUcsQ0FBQ3NDLE9BQU8sR0FBR3pKLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNvSSxnQkFBZ0IsR0FBSXBCLEdBQUcsQ0FBQ3FDLFlBQVksR0FBSSxHQUFJO2NBQ3hJUyxTQUFTLEVBQUU5QyxHQUFHLENBQUNzQyxPQUFPLEdBQUd6SixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDaUksYUFBYTtjQUNwRDRCLGFBQWEsRUFBRWhLLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNpSSxhQUFhLEdBQUdqQixHQUFHLENBQUMyQztZQUFPLEtBQ3REM0MsR0FBRztVQUFBLEVBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxPQUFPM0csS0FBSyxFQUFFLENBRWhCO01BQ0Y7SUFDRixDQUFDO0lBQUEsZ0JBMUJLeUwscUJBQXFCQSxDQUFBO01BQUEsT0FBQUMsS0FBQSxDQUFBeEwsS0FBQSxPQUFBQyxTQUFBO0lBQUE7RUFBQSxHQTBCMUI7RUFDRCxDQUFDO0VBQ0QsSUFBQXlMLFdBQUEsR0FBZ0NyViwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBc1YsV0FBQSxHQUFBbEwsY0FBQSxDQUFBaUwsV0FBQTtJQUFyQ0UsUUFBUSxHQUFBRCxXQUFBO0lBQUVFLFdBQVcsR0FBQUYsV0FBQTtFQUM1QnZWLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQU0wVixhQUFhO01BQUEsSUFBQUMsTUFBQSxHQUFBMU0saUJBQUEsQ0FBRyxhQUFZO1FBQ2hDLElBQUk7VUFDRixJQUFNQyxHQUFHLFNBQVMzRyw4Q0FBSyxDQUFDNEcsR0FBRyxJQUFBN0QsTUFBQSxDQUFJekMscURBQVksY0FBVyxDQUFDO1VBQ3ZENFMsV0FBVyxDQUFDdk0sR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ3lILE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLE9BQU9wSCxLQUFLLEVBQUU7VUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQztRQUM5QztNQUNGLENBQUM7TUFBQSxnQkFQS2dNLGFBQWFBLENBQUE7UUFBQSxPQUFBQyxNQUFBLENBQUEvTCxLQUFBLE9BQUFDLFNBQUE7TUFBQTtJQUFBLEdBT2xCO0lBQ0Q2TCxhQUFhLENBQUMsQ0FBQztFQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBQUUsV0FBQSxHQUFrRDNWLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE0VixXQUFBLEdBQUF4TCxjQUFBLENBQUF1TCxXQUFBO0lBQTFERSxpQkFBaUIsR0FBQUQsV0FBQTtJQUFFRSxvQkFBb0IsR0FBQUYsV0FBQTtFQUU5QyxJQUFNRywyQkFBMkIsR0FBSWxFLENBQUMsSUFBSztJQUN6Q0EsQ0FBQyxDQUFDbUUsZUFBZSxDQUFDLENBQUM7SUFDbkJGLG9CQUFvQixDQUFDLElBQUksQ0FBQztFQUM1QixDQUFDO0VBQ0QsSUFBTUcsNEJBQTRCLEdBQUdBLENBQUEsS0FBTTtJQUN6Q0gsb0JBQW9CLENBQUMsS0FBSyxDQUFDO0VBQzdCLENBQUM7RUFDRCxJQUFNSSxvQkFBb0IsR0FBSUMsV0FBVyxJQUFLO0lBQzVDWCxXQUFXLENBQUMsQ0FBQ1csV0FBVyxFQUFFLEdBQUdaLFFBQVEsQ0FBQyxDQUFDO0VBQ3pDLENBQUM7RUFDRCxJQUFNYSxvQkFBb0IsR0FBSXBGLFFBQVEsSUFBSztJQUN6QyxJQUFNQyxlQUFlLEdBQUdzRSxRQUFRLENBQUNwQixJQUFJLENBQUVELE1BQU0sSUFBS0EsTUFBTSxLQUFLbEQsUUFBUSxDQUFDO0lBQ3RFMUMsZUFBZSxDQUFDO01BQ2Q2QyxHQUFHLEVBQUVGLGVBQWUsYUFBZkEsZUFBZSx1QkFBZkEsZUFBZSxDQUFFRSxHQUFHO01BQ3pCOUMsWUFBWSxFQUFFLENBQUE0QyxlQUFlLGFBQWZBLGVBQWUsdUJBQWZBLGVBQWUsQ0FBRW9GLGdCQUFnQixNQUFJcEYsZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUVxRixXQUFXO01BQy9FQyxjQUFjLEVBQUV0RixlQUFlLGFBQWZBLGVBQWUsdUJBQWZBLGVBQWUsQ0FBRXNGLGNBQWM7TUFDL0NDLFdBQVcsRUFBRXZGLGVBQWUsYUFBZkEsZUFBZSx1QkFBZkEsZUFBZSxDQUFFdUY7SUFDaEMsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUNELElBQU1DLG1CQUFtQixHQUFHQSxDQUFBLEtBQU07SUFDaENuSSxlQUFlLENBQUMsSUFBSSxDQUFDO0VBQ3ZCLENBQUM7RUFDRCxJQUFBb0ksV0FBQSxHQUFrRDFXLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUEyVyxXQUFBLEdBQUF2TSxjQUFBLENBQUFzTSxXQUFBO0lBQTFERSxpQkFBaUIsR0FBQUQsV0FBQTtJQUFFRSxvQkFBb0IsR0FBQUYsV0FBQTtFQUU5QyxJQUFNRywyQkFBMkIsR0FBSWpGLENBQUMsSUFBSztJQUN6Q0EsQ0FBQyxDQUFDbUUsZUFBZSxDQUFDLENBQUM7SUFDbkJhLG9CQUFvQixDQUFDLElBQUksQ0FBQztFQUM1QixDQUFDO0VBQ0QsSUFBTUUsNEJBQTRCLEdBQUdBLENBQUEsS0FBTTtJQUN6Q0Ysb0JBQW9CLENBQUMsS0FBSyxDQUFDO0VBQzdCLENBQUM7RUFDRCxJQUFNRyxnQkFBZ0IsR0FBSUMsT0FBTyxJQUFLO0lBQ3BDL0ksa0JBQWtCLENBQUMsQ0FBQytJLE9BQU8sRUFBRSxHQUFHaEosZUFBZSxDQUFDLENBQUM7RUFDbkQsQ0FBQztFQUNEbE8sZ0RBQVMsQ0FBQyxNQUFNO0lBRWQsSUFBSXVQLFFBQVEsS0FBSyxJQUFJLEVBQUU7TUFDckIsSUFBTTRILE9BQU8sR0FBRzdMLEtBQUssQ0FBQzhMLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVoSCxHQUFHLEtBQUtnSCxHQUFHLEdBQUdoSCxHQUFHLENBQUN1QyxVQUFVLEVBQUUsQ0FBQyxDQUFDO01BQ25FakgsV0FBVyxDQUFDd0wsT0FBTyxDQUFDO01BQ3BCO01BQ0EsSUFBSUcsR0FBRyxHQUFHakYsSUFBSSxDQUFDQyxLQUFLLENBQUU2RSxPQUFPLEdBQUcsSUFBSSxHQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUc7TUFDbEQvSCxNQUFNLENBQUNrSSxHQUFHLENBQUM7TUFDWCxJQUFJQyxLQUFLLEdBQUdKLE9BQU8sR0FBR0csR0FBRztNQUN6QjNKLGVBQWUsQ0FBQzRKLEtBQUssQ0FBQztNQUN0QixJQUFJQyxVQUFVLEdBQUd0TCxRQUFRLEdBQUc2QyxJQUFJO01BQ2hDLElBQUkwSSxTQUFTLEdBQUc1SCxNQUFNLENBQUMySCxVQUFVLENBQUMsR0FBRzNILE1BQU0sQ0FBQy9ELE9BQU8sQ0FBQztNQUNwRCxJQUFJNEwsVUFBVSxHQUFHckYsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQ2lGLEtBQUssR0FBR0UsU0FBUyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUc7TUFDNUQsSUFBSUUsT0FBTyxHQUFHdEYsSUFBSSxDQUFDdUYsR0FBRyxDQUFDRixVQUFVLENBQUM7TUFDbEMzSyxTQUFTLENBQUM0SyxPQUFPLENBQUM7TUFDbEIsSUFBSUUsV0FBVyxHQUFHbkwsU0FBUyxHQUFHcUMsSUFBSTtNQUNsQyxJQUFJK0ksVUFBVSxHQUFHakksTUFBTSxDQUFDZ0ksV0FBVyxDQUFDLEdBQUdoSSxNQUFNLENBQUN2RCxRQUFRLENBQUM7TUFDdkQsSUFBSXlMLElBQUksR0FBRzFGLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUNxRixPQUFPLEdBQUdHLFVBQVUsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHO01BQ3pELElBQUlFLGFBQWEsR0FBR1AsU0FBUyxHQUFHSyxVQUFVO01BQzFDM0ssa0JBQWtCLENBQUM2SyxhQUFhLENBQUM7TUFDakN6SyxZQUFZLENBQUN3SyxJQUFJLENBQUM7TUFDbEJoSyxhQUFhLENBQUMySixVQUFVLENBQUM7SUFDM0IsQ0FBQyxNQUFNO01BQ0wsSUFBTVAsT0FBTyxHQUFHN0wsS0FBSyxDQUFDOEwsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRWhILEdBQUcsS0FBS2dILEdBQUcsR0FBR2hILEdBQUcsQ0FBQ3VDLFVBQVUsRUFBRSxDQUFDLENBQUM7TUFDbkVqSCxXQUFXLENBQUN3TCxPQUFPLENBQUM7TUFDcEI7TUFDQSxJQUFJRyxJQUFHLEdBQUdqRixJQUFJLENBQUNDLEtBQUssQ0FBRTZFLE9BQU8sR0FBRyxDQUFDLEdBQUksR0FBRyxDQUFDLEdBQUcsR0FBRztNQUMvQy9ILE1BQU0sQ0FBQ2tJLElBQUcsQ0FBQztNQUNYM0osZUFBZSxDQUFDd0osT0FBTyxDQUFDO01BQ3hCLElBQUlLLFdBQVUsR0FBR3RMLFFBQVEsR0FBRzZDLElBQUk7TUFDaEMsSUFBSTBJLFVBQVMsR0FBRzVILE1BQU0sQ0FBQzJILFdBQVUsQ0FBQyxHQUFHM0gsTUFBTSxDQUFDL0QsT0FBTyxDQUFDO01BQ3BELElBQUk0TCxXQUFVLEdBQUdyRixJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDNkUsT0FBTyxHQUFHTSxVQUFTLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRztNQUM5RCxJQUFJRSxRQUFPLEdBQUd0RixJQUFJLENBQUN1RixHQUFHLENBQUNGLFdBQVUsQ0FBQztNQUNsQzNLLFNBQVMsQ0FBQzRLLFFBQU8sQ0FBQztNQUNsQixJQUFJRSxZQUFXLEdBQUduTCxTQUFTLEdBQUdxQyxJQUFJO01BQ2xDLElBQUkrSSxXQUFVLEdBQUdqSSxNQUFNLENBQUNnSSxZQUFXLENBQUMsR0FBR2hJLE1BQU0sQ0FBQ3ZELFFBQVEsQ0FBQztNQUN2RCxJQUFJeUwsS0FBSSxHQUFHMUYsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQ3FGLFFBQU8sR0FBR0csV0FBVSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUc7TUFDekQsSUFBSUUsY0FBYSxHQUFHUCxVQUFTLEdBQUdLLFdBQVU7TUFDMUMzSyxrQkFBa0IsQ0FBQzZLLGNBQWEsQ0FBQztNQUNqQ3pLLFlBQVksQ0FBQ3dLLEtBQUksQ0FBQztNQUNsQmhLLGFBQWEsQ0FBQzJKLFdBQVUsQ0FBQztJQUMzQjtFQUVGLENBQUMsRUFBRSxDQUFDbkksUUFBUSxFQUFFakUsS0FBSyxFQUFFQSxLQUFLLEVBQUV5RCxJQUFJLEVBQUU3QyxRQUFRLEVBQUVKLE9BQU8sRUFBRVksU0FBUyxFQUFFSixRQUFRLENBQUMsQ0FBQztFQUUxRSxJQUFBMkwsV0FBQSxHQUEwQmhZLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFpWSxXQUFBLEdBQUE3TixjQUFBLENBQUE0TixXQUFBO0lBQWxDRSxLQUFLLEdBQUFELFdBQUE7SUFBRUUsUUFBUSxHQUFBRixXQUFBO0VBRXRCLElBQU1HLGNBQWMsR0FBSXZHLENBQUMsSUFBSztJQUM1QkEsQ0FBQyxDQUFDd0csY0FBYyxDQUFDLENBQUM7SUFDbEJGLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDaEIsQ0FBQztFQUNELElBQU1HLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0lBQzVCSCxRQUFRLENBQUMsS0FBSyxDQUFDO0VBQ2pCLENBQUM7RUFDRCxJQUFBSSxXQUFBLEdBQThCdlksK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQXdZLFdBQUEsR0FBQXBPLGNBQUEsQ0FBQW1PLFdBQUE7SUFBdENFLE9BQU8sR0FBQUQsV0FBQTtJQUFFRSxVQUFVLEdBQUFGLFdBQUE7RUFDMUIsSUFBQUcsV0FBQSxHQUFnRDNZLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE0WSxXQUFBLEdBQUF4TyxjQUFBLENBQUF1TyxXQUFBO0lBQXhERSxnQkFBZ0IsR0FBQUQsV0FBQTtJQUFFRSxtQkFBbUIsR0FBQUYsV0FBQTtFQUM1QyxJQUFBRyxXQUFBLEdBQTREL1ksK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWdaLFdBQUEsR0FBQTVPLGNBQUEsQ0FBQTJPLFdBQUE7SUFBcEVFLHNCQUFzQixHQUFBRCxXQUFBO0lBQUVFLHlCQUF5QixHQUFBRixXQUFBO0VBQ3hELElBQUFHLFdBQUEsR0FBNENuWiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBb1osV0FBQSxHQUFBaFAsY0FBQSxDQUFBK08sV0FBQTtJQUFwREUsY0FBYyxHQUFBRCxXQUFBO0lBQUVFLGlCQUFpQixHQUFBRixXQUFBO0VBRXhDLElBQU1HLFVBQVUsR0FBR0EsQ0FBQSxLQUFNO0lBQ3ZCVCxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7SUFDekJYLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDZk8sVUFBVSxDQUFDLElBQUksQ0FBQztJQUNoQmMsVUFBVSxDQUFDLE1BQU07TUFDZmQsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1QsQ0FBQztFQUNELElBQU1lLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07SUFDN0JQLHlCQUF5QixDQUFDLElBQUksQ0FBQztJQUMvQlIsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNoQmMsVUFBVSxDQUFDLE1BQU07TUFDZmQsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1QsQ0FBQztFQUNELElBQU1nQixXQUFXLEdBQUdBLENBQUEsS0FBTTtJQUN4QkosaUJBQWlCLENBQUMsSUFBSSxDQUFDO0lBQ3ZCbkIsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUNmTyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2hCYyxVQUFVLENBQUMsTUFBTTtNQUNmZCxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDVCxDQUFDO0VBRUQsSUFBTWlCLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0lBQ3hCYixtQkFBbUIsQ0FBQyxLQUFLLENBQUM7SUFDMUJjLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQztFQUMxQixDQUFDO0VBQ0QsSUFBTUMsaUJBQWlCLEdBQUdBLENBQUEsS0FBTTtJQUM5QmIseUJBQXlCLENBQUMsS0FBSyxDQUFDO0VBQ2xDLENBQUM7RUFDRCxJQUFNYyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNO0lBQzdCVixpQkFBaUIsQ0FBQyxLQUFLLENBQUM7RUFDMUIsQ0FBQztFQUNELElBQU1XLGNBQWMsR0FBSXpSLFFBQVEsSUFBSztJQUNuQztJQUNBLElBQUlBLFFBQVEsS0FBSyxVQUFVLEVBQUU7TUFDM0JvUixNQUFNLENBQUNNLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQyxNQUFNLElBQUkzUixRQUFRLEtBQUssTUFBTSxFQUFFO01BQzlCbVIsV0FBVyxDQUFDLENBQUM7SUFDZjtFQUNGLENBQUM7RUFDRCxJQUFNUyx3QkFBd0I7SUFBQSxJQUFBQyxNQUFBLEdBQUFyUixpQkFBQSxDQUFHLFdBQU9zUixhQUFhLEVBQUVDLG1CQUFtQixFQUFLO01BQzdFLElBQU1uUixJQUFJLEdBQUc7UUFDWG9SLE1BQU0sRUFBRUYsYUFBYTtRQUNyQkcsTUFBTSxFQUFFL1IsSUFBSSxDQUFDVSxJQUFJLENBQUNJLFFBQVEsR0FBRyxZQUFZO1FBQ3pDa1IsTUFBTSxFQUFFLE1BQU0sR0FBR2hLLE1BQU0sQ0FBQzZKLG1CQUFtQixDQUFDLENBQUMzSixRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBR3ZDLFlBQVksQ0FBQ0EsWUFBWTtRQUNuR3NNLGdCQUFnQixFQUFFaE07TUFDcEIsQ0FBQztNQUNELElBQUk7UUFDRixNQUFNck0sOENBQUssQ0FBQ3NZLElBQUksSUFBQXZWLE1BQUEsQ0FBSXpDLHFEQUFZLDJCQUF3QndHLElBQUksQ0FBQztNQUMvRCxDQUFDLENBQUMsT0FBT0ssS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ21SLEdBQUcsQ0FBQ3BSLEtBQUssQ0FBQztNQUNwQjtJQUNGLENBQUM7SUFBQSxnQkFaSzJRLHdCQUF3QkEsQ0FBQVUsR0FBQSxFQUFBQyxHQUFBO01BQUEsT0FBQVYsTUFBQSxDQUFBMVEsS0FBQSxPQUFBQyxTQUFBO0lBQUE7RUFBQSxHQVk3QjtFQUNELElBQUlvUixNQUFNLEdBQUcsRUFBRTtFQUNmLElBQUlDLFFBQVEsQ0FBQ3BOLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSUEsVUFBVSxLQUFLSixZQUFZLEVBQUU7SUFDM0R1TixNQUFNLEdBQUcsZ0JBQWdCO0VBQzNCLENBQUMsTUFBTSxJQUFJRSxVQUFVLENBQUNyTixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDdENtTixNQUFNLEdBQUcsTUFBTTtFQUNqQixDQUFDLE1BQU07SUFDTEEsTUFBTSxHQUFHLE9BQU87RUFDbEI7RUFDQSxJQUFNRyxVQUFVLEdBQUc5UCxLQUFLLENBQUM4RSxNQUFNLENBQUVDLEdBQUc7SUFBQSxJQUFBZ0wsY0FBQTtJQUFBLE9BQUtoTCxHQUFHLENBQUNjLFFBQVEsQ0FBQ0EsUUFBUSxLQUFLLEVBQUUsTUFBQWtLLGNBQUEsR0FBSWhMLEdBQUcsQ0FBQ2MsUUFBUSxjQUFBa0ssY0FBQSx1QkFBWkEsY0FBQSxDQUFjakssR0FBRztFQUFBLEVBQUM7RUFDM0YsSUFBQWtLLFdBQUEsR0FBNEJyYiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBc2IsV0FBQSxHQUFBbFIsY0FBQSxDQUFBaVIsV0FBQTtJQUFqQ0UsTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUN4QixJQUFNRyxTQUFTO0lBQUEsSUFBQUMsTUFBQSxHQUFBMVMsaUJBQUEsQ0FBRyxhQUFZO01BQzVCLElBQUk7UUFDRixNQUFNMUcsOENBQUssQ0FBQ3NZLElBQUksSUFBQXZWLE1BQUEsQ0FBSXpDLHFEQUFZLG9CQUFpQixDQUFDO01BQ3BELENBQUMsQ0FBQyxPQUFPNkcsS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ21SLEdBQUcsQ0FBQ3BSLEtBQUssQ0FBQztNQUNwQjtJQUNGLENBQUM7SUFBQSxnQkFOS2dTLFNBQVNBLENBQUE7TUFBQSxPQUFBQyxNQUFBLENBQUEvUixLQUFBLE9BQUFDLFNBQUE7SUFBQTtFQUFBLEdBTWQ7RUFDRCxJQUFNK1IsWUFBWTtJQUFBLElBQUFDLE1BQUEsR0FBQTVTLGlCQUFBLENBQUcsV0FBTzZJLENBQUMsRUFBSztNQUNoQ0EsQ0FBQyxDQUFDd0csY0FBYyxDQUFDLENBQUM7TUFDbEJtRCxTQUFTLENBQUMsTUFBTSxDQUFDO01BQ2pCLElBQU1wUyxJQUFJLEdBQUc7UUFDWGlGLFlBQVk7UUFDWnBELGFBQWE7UUFDYlosV0FBVztRQUNYSSxJQUFJO1FBQUV3QyxlQUFlO1FBQUVJLFNBQVM7UUFBRVIsTUFBTTtRQUFFSixTQUFTO1FBQUVKLFFBQVE7UUFDN0QyTyxNQUFNO1FBQ04zUCxLQUFLLEVBQUU4UCxVQUFVO1FBQ2pCMVAsUUFBUTtRQUNSSSxPQUFPO1FBQ1BJLFFBQVE7UUFBRWlELEdBQUc7UUFDYkosSUFBSTtRQUNGakIsVUFBVTtRQUNaWSxJQUFJO1FBQ0poQixZQUFZO1FBQUVvTyxPQUFPLEVBQUU7TUFDekIsQ0FBQztNQUNELElBQUk7UUFDRixJQUFNNVMsR0FBRyxTQUFTM0csOENBQUssQ0FBQ3daLEdBQUcsSUFBQXpXLE1BQUEsQ0FBSXpDLHFEQUFZLGtCQUFBeUMsTUFBQSxDQUFla0QsRUFBRSxHQUFJYSxJQUFJLENBQUM7UUFDckUsSUFBSUgsR0FBRyxFQUFFO1VBQ1A7VUFDQXdTLFNBQVMsQ0FBQyxDQUFDO1VBQ1gsSUFBTW5CLGFBQWEsR0FBR3JSLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUMrSCxHQUFHO1VBQ3ZDLElBQU1vSixtQkFBbUIsR0FBR3RSLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUM2QixhQUFhO1VBQ3ZEbVAsd0JBQXdCLENBQUNFLGFBQWEsRUFBRUMsbUJBQW1CLENBQUM7VUFDNURoQixVQUFVLENBQUMsQ0FBQztRQUNkO01BQ0YsQ0FBQyxDQUFDLE9BQU85UCxLQUFLLEVBQUU7UUFDZCxJQUFJQSxLQUFLLEVBQUU7VUFDVCtSLFNBQVMsQ0FBQyxFQUFFLENBQUM7VUFDYjlCLFdBQVcsQ0FBQyxDQUFDO1FBQ2Y7TUFDRjtJQUNGLENBQUM7SUFBQSxnQkFsQ0tpQyxZQUFZQSxDQUFBSSxHQUFBO01BQUEsT0FBQUgsTUFBQSxDQUFBalMsS0FBQSxPQUFBQyxTQUFBO0lBQUE7RUFBQSxHQWtDakI7RUFDRCxJQUFBb1MsZ0JBQUEsR0FBOEJsYyxxREFBYyxDQUFDLElBQUksQ0FBQztJQUFBbWMsZ0JBQUEsR0FBQTdSLGNBQUEsQ0FBQTRSLGdCQUFBO0lBQTNDRSxPQUFPLEdBQUFELGdCQUFBO0lBQUVFLFVBQVUsR0FBQUYsZ0JBQUE7RUFDMUIsSUFBTUcsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDekJELFVBQVUsQ0FBQyxDQUFDRCxPQUFPLENBQUM7RUFDdEIsQ0FBQztFQUNELG9CQUNFcGMsMERBQUE7SUFBSzZFLFNBQVMsRUFBQztFQUFjLGdCQUMzQjdFLDBEQUFBLENBQUNrQixxREFBRztJQUFDcWIsRUFBRSxFQUFFO01BQUVDLE9BQU8sRUFBRTtJQUFPO0VBQUUsZ0JBQzNCeGMsMERBQUEsQ0FBQ2dDLGtFQUFXLE1BQUUsQ0FBQyxlQUNmaEMsMERBQUEsQ0FBQzhHLE1BQU07SUFBQ1gsUUFBUSxFQUFDLFVBQVU7SUFBQ2UsSUFBSSxFQUFFa1YsT0FBUTtJQUFDRyxFQUFFLEVBQUU7TUFBRTlXLGVBQWUsRUFBRTtJQUFVO0VBQUUsZ0JBQzVFekYsMERBQUEsQ0FBQytCLDhEQUFPO0lBQ053YSxFQUFFLEVBQUU7TUFDRkUsRUFBRSxFQUFFLE1BQU0sQ0FBRTtJQUNkO0VBQUUsZ0JBRUZ6YywwREFBQSxDQUFDVSxxREFBVTtJQUNUZ2MsSUFBSSxFQUFDLE9BQU87SUFDWmhYLEtBQUssRUFBQyxTQUFTO0lBQ2YsY0FBVyxhQUFhO0lBQ3hCaVgsT0FBTyxFQUFFTCxZQUFhO0lBQ3RCQyxFQUFFLEVBQUFwVixhQUFBO01BQ0F5VixXQUFXLEVBQUU7SUFBTSxHQUNmUixPQUFPLElBQUk7TUFBRUksT0FBTyxFQUFFO0lBQU8sQ0FBQztFQUNsQyxnQkFFRnhjLDBEQUFBLENBQUNxQyxpRUFBUSxNQUFFLENBQ0QsQ0FBQyxlQUNickMsMERBQUEsQ0FBQ2dCLHFEQUFVO0lBQ1Q2YixTQUFTLEVBQUMsSUFBSTtJQUNkQyxPQUFPLEVBQUMsSUFBSTtJQUNacFgsS0FBSyxFQUFDLFNBQVM7SUFDZnFYLE1BQU07SUFDTlIsRUFBRSxFQUFFO01BQUVTLFFBQVEsRUFBRTtJQUFFO0VBQUUsR0FDckIsaUJBRVcsQ0FBQyxlQUNiaGQsMERBQUEsQ0FBQ1UscURBQVU7SUFBQ2ljLE9BQU8sRUFBRXJFO0VBQWUsZ0JBQ2xDdFksMERBQUEsQ0FBQ3VELHNFQUFTO0lBQUMyQyxLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFO0lBQVE7RUFBRSxDQUFFLENBQzdCLENBQUMsZUFDYjFGLDBEQUFBLENBQUMwRSw4REFBb0IsTUFBRSxDQUFDLGVBQ3hCMUUsMERBQUEsQ0FBQ3lFLDBEQUFnQjtJQUFDME4sSUFBSSxFQUFFdkosSUFBSSxDQUFDVSxJQUFJLENBQUNJLFFBQVM7SUFBQ0QsSUFBSSxFQUFFYixJQUFJLENBQUNVLElBQUksQ0FBQ0c7RUFBSyxDQUFFLENBQUMsZUFDcEV6SiwwREFBQSxDQUFDZ0IscURBQVU7SUFBQ3ViLEVBQUUsRUFBRTtNQUFFMVUsVUFBVSxFQUFFLE1BQU07TUFBRStVLFdBQVcsRUFBRTtJQUFPO0VBQUUsR0FBRWhVLElBQUksQ0FBQ1UsSUFBSSxDQUFDSSxRQUFxQixDQUFDLGVBQzlGMUosMERBQUEsQ0FBQ1UscURBQVU7SUFBQ2dGLEtBQUssRUFBQyxTQUFTO0lBQUNpWCxPQUFPLEVBQUU1UztFQUFhLGdCQUNoRC9KLDBEQUFBLENBQUNnRSxtRUFBTTtJQUFDa0MsS0FBSyxFQUFFO01BQUVSLEtBQUssRUFBRTtJQUFRO0VBQUUsQ0FBRSxDQUMxQixDQUNMLENBQ0gsQ0FBQyxlQUNUMUYsMERBQUEsQ0FBQytILE1BQU07SUFBQytVLE9BQU8sRUFBQyxXQUFXO0lBQUM1VixJQUFJLEVBQUVrVixPQUFRO0lBQUNhLFlBQVksRUFBRUEsQ0FBQSxLQUFNWixVQUFVLENBQUMsSUFBSSxDQUFFO0lBQUNhLFlBQVksRUFBRUEsQ0FBQSxLQUFNYixVQUFVLENBQUMsS0FBSztFQUFFLGdCQUNySHJjLDBEQUFBLENBQUMrQiw4REFBTztJQUNOd2EsRUFBRSxFQUFFO01BQ0ZDLE9BQU8sRUFBRSxNQUFNO01BQ2ZXLFVBQVUsRUFBRSxRQUFRO01BQ3BCQyxjQUFjLEVBQUUsVUFBVTtNQUMxQjFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUjtFQUFFLGdCQUVGMUcsMERBQUEsQ0FBQ1UscURBQVU7SUFBQ2ljLE9BQU8sRUFBRUw7RUFBYSxnQkFDaEN0YywwREFBQSxDQUFDc0Msd0VBQWUsTUFBRSxDQUNSLENBQ0wsQ0FBQyxlQUNWdEMsMERBQUEsQ0FBQ3lCLHFEQUFPLE1BQUUsQ0FBQyxlQUNYekIsMERBQUEsQ0FBQ2tDLDJEQUFJO0lBQUNxYSxFQUFFLEVBQUU7TUFBRWMsTUFBTSxFQUFFO0lBQVE7RUFBRSxnQkFDNUJyZCwwREFBQSxDQUFDRywyREFBUSxNQUFFLENBQ1AsQ0FDQSxDQUFDLGVBQ1RILDBEQUFBLENBQUNrQixxREFBRztJQUNGMmIsU0FBUyxFQUFDLE1BQU07SUFDaEJOLEVBQUUsRUFBRTtNQUNGOVcsZUFBZSxFQUFHSCxLQUFLLElBQ3JCQSxLQUFLLENBQUNnWSxPQUFPLENBQUNDLElBQUksS0FBSyxPQUFPLEdBQzFCalksS0FBSyxDQUFDZ1ksT0FBTyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQ3ZCbFksS0FBSyxDQUFDZ1ksT0FBTyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDO01BQzdCUixRQUFRLEVBQUUsQ0FBQztNQUNYelcsS0FBSyxFQUFFLE1BQU07TUFDYjhXLE1BQU0sRUFBRSxPQUFPO01BQ2ZJLFFBQVEsRUFBRTtJQUNaO0VBQUUsZ0JBRUZ6ZCwwREFBQSxDQUFDK0IsOERBQU8sTUFBRSxDQUFDLGVBQ1gvQiwwREFBQSxDQUFDb0MsZ0VBQVM7SUFBQ3NiLFFBQVEsRUFBQyxNQUFNO0lBQUNuQixFQUFFLEVBQUU7TUFBRW9CLEVBQUUsRUFBRTtJQUFFO0VBQUUsZ0JBQ3ZDM2QsMERBQUEsMkJBQ0VBLDBEQUFBO0lBQU00ZCxRQUFRLEVBQUUvQjtFQUFhLGdCQUMzQjdiLDBEQUFBLENBQUNTLHFEQUFJO0lBQUNvZCxTQUFTO0lBQUMzWCxLQUFLLEVBQUU7TUFBRWlYLFVBQVUsRUFBRSxRQUFRO01BQUVXLE9BQU8sRUFBRTtJQUFPLENBQUU7SUFBQzFWLE9BQU8sRUFBRSxDQUFFO0lBQUN5VSxTQUFTLEVBQUVsYyxzREFBS0E7RUFBQyxnQkFDN0ZYLDBEQUFBLENBQUNTLHFEQUFJO0lBQUNzZCxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLEdBRWR6UCxZQUFZLEtBQUssSUFBSSxnQkFDbkJ2TywwREFBQTtJQUFLa0csS0FBSyxFQUFFO01BQUVzVyxPQUFPLEVBQUUsTUFBTTtNQUFFVyxVQUFVLEVBQUUsUUFBUTtNQUFFQyxjQUFjLEVBQUU7SUFBZ0I7RUFBRSxnQkFDckZwZCwwREFBQSxZQUFJdU8sWUFBWSxDQUFDQSxZQUFnQixDQUFDLGVBQ2xDdk8sMERBQUEsQ0FBQzhGLFlBQVk7SUFBQ21ZLEtBQUssRUFBQyxPQUFPO0lBQUNDLFNBQVMsRUFBQztFQUFLLGdCQUN6Q2xlLDBEQUFBLENBQUNVLHFEQUFVO0lBQUNpYyxPQUFPLEVBQUVoRyxtQkFBb0I7SUFBQ3pRLEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFZ1ksS0FBSyxFQUFFO0lBQVE7RUFBRSxnQkFDeEZuZSwwREFBQSxDQUFDNkMsNERBQW1CO0lBQUNxRCxLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFO0lBQVU7RUFBRSxDQUFFLENBQ3pDLENBQ0EsQ0FDWCxDQUFDLGdCQUdOMUYsMERBQUEsQ0FBQ21CLHNEQUFZO0lBQ1hpZCxnQkFBZ0I7SUFDaEJDLE9BQU8sRUFBRTVJLFFBQVM7SUFDbEI2SSxjQUFjLEVBQUdsSyxNQUFNLElBQUtBLE1BQU0sQ0FBQ21DLGdCQUFnQixHQUFHbkMsTUFBTSxDQUFDbUMsZ0JBQWdCLEdBQUduQyxNQUFNLENBQUNvQyxXQUFZO0lBQ25HK0gsUUFBUSxFQUFFQSxDQUFDeE0sQ0FBQyxFQUFFYixRQUFRLEtBQUs7TUFDekJvRixvQkFBb0IsQ0FBQ3BGLFFBQVEsQ0FBQztJQUNoQyxDQUFFO0lBQ0ZzTixXQUFXLEVBQUdDLE1BQU0saUJBQUt6ZSwwREFBQSxDQUFDWSxzREFBUyxFQUFBc0UsUUFBQSxLQUFLdVosTUFBTTtNQUFFQyxLQUFLLEVBQUMsZUFBZTtNQUFDQyxRQUFRO0lBQUEsRUFBRTtFQUFFLENBQ25GLENBR0QsQ0FBQyxlQUNQM2UsMERBQUEsQ0FBQ1MscURBQUk7SUFBQ3NkLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2ZoZSwwREFBQSxDQUFDYSxzREFBVztJQUFDMGIsRUFBRSxFQUFFO01BQUVoVyxLQUFLLEVBQUUsTUFBTTtNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLGdCQUMzRHpGLDBEQUFBLENBQUNjLHNEQUFVO0lBQUM4ZCxPQUFPLEVBQUM7RUFBZSxHQUFDLGdCQUEwQixDQUFDLGVBQy9ENWUsMERBQUEsQ0FBQ3VCLHNEQUFhO0lBQ1pzZCxJQUFJLEVBQUMsUUFBUTtJQUNicFcsRUFBRSxFQUFDLGVBQWU7SUFDbEIwSixJQUFJLEVBQUMsZUFBZTtJQUNwQnVNLEtBQUssRUFBQyxnQkFBZ0I7SUFDdEJ0TSxLQUFLLEVBQUVqSCxhQUFjO0lBQ3JCb1QsUUFBUSxFQUFHeE0sQ0FBQyxJQUFLM0csZ0JBQWdCLENBQUMyRyxDQUFDLENBQUNHLE1BQU0sQ0FBQ0UsS0FBSyxDQUFFO0lBQ2xEME0sY0FBYyxlQUFFOWUsMERBQUEsQ0FBQ3dCLHNEQUFjO01BQUMyRSxRQUFRLEVBQUM7SUFBTyxHQUFDLElBQWtCO0VBQUUsQ0FDdEUsQ0FDVSxDQUNULENBQUMsZUFDUG5HLDBEQUFBLENBQUNTLHFEQUFJO0lBQUNzZCxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNmaGUsMERBQUEsQ0FBQ21ELDJGQUFvQjtJQUFDNGIsV0FBVyxFQUFFM2IsMkVBQVlBO0VBQUMsZ0JBQzlDcEQsMERBQUEsQ0FBQ2tELDhFQUFhO0lBQUM4YixVQUFVLEVBQUUsQ0FBQyxZQUFZO0VBQUUsZ0JBQ3hDaGYsMERBQUEsQ0FBQ3FELHVFQUFVO0lBQ1RzYixRQUFRO0lBQ1J4TSxJQUFJLEVBQUMsYUFBYTtJQUNsQnVNLEtBQUssRUFBQyxNQUFNO0lBQ1p0TSxLQUFLLEVBQUU5Tyw2Q0FBSyxDQUFDaUgsV0FBVyxDQUFFO0lBQzFCZ1UsUUFBUSxFQUFHcFUsSUFBSSxJQUFLSyxjQUFjLENBQUNMLElBQUksQ0FBRTtJQUN6Q29TLEVBQUUsRUFBRTtNQUFFaFcsS0FBSyxFQUFFLE1BQU07TUFBRWQsZUFBZSxFQUFFO0lBQVEsQ0FBRTtJQUNoRHdaLE1BQU0sRUFBQztFQUFZLENBQ3BCLENBQ1ksQ0FDSyxDQUNsQixDQUFDLGVBQ1BqZiwwREFBQSxDQUFDUyxxREFBSTtJQUFDc2QsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZmhlLDBEQUFBLENBQUNtRCwyRkFBb0I7SUFBQzRiLFdBQVcsRUFBRTNiLDJFQUFZQTtFQUFDLGdCQUM5Q3BELDBEQUFBLENBQUNrRCw4RUFBYTtJQUFDOGIsVUFBVSxFQUFFLENBQUMsWUFBWTtFQUFFLGdCQUN4Q2hmLDBEQUFBLENBQUNxRCx1RUFBVTtJQUNUc2IsUUFBUTtJQUNSeE0sSUFBSSxFQUFDLE1BQU07SUFDWHVNLEtBQUssRUFBQyxNQUFNO0lBQ1p0TSxLQUFLLEVBQUU5Tyw2Q0FBSyxDQUFDcUgsSUFBSSxDQUFFO0lBQ25CNFQsUUFBUSxFQUFHcFUsSUFBSSxJQUFLUyxPQUFPLENBQUNULElBQUksQ0FBRTtJQUNsQ29TLEVBQUUsRUFBRTtNQUFFaFcsS0FBSyxFQUFFLE1BQU07TUFBRWQsZUFBZSxFQUFFO0lBQVEsQ0FBRTtJQUNoRHdaLE1BQU0sRUFBQztFQUFPLENBQ2YsQ0FDWSxDQUNLLENBQ2xCLENBQUMsZUFDUGpmLDBEQUFBLENBQUNTLHFEQUFJO0lBQUNzZCxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNoQmhlLDBEQUFBO0lBQUtrRyxLQUFLLEVBQUU7TUFBRXNXLE9BQU8sRUFBRSxPQUFPO01BQUVyVyxRQUFRLEVBQUUsT0FBTztNQUFFaUIsTUFBTSxFQUFFLENBQUM7TUFBRStXLEtBQUssRUFBRSxPQUFPO01BQUVlLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQzVGbGYsMERBQUEsK0JBQ0VBLDBEQUFBLENBQUM4RixZQUFZO0lBQUNtWSxLQUFLLEVBQUMsS0FBSztJQUFDQyxTQUFTLEVBQUM7RUFBSyxnQkFDdkNsZSwwREFBQSxDQUFDVSxxREFBVTtJQUFDaWMsT0FBTyxFQUFFaks7RUFBUSxnQkFDM0IxUywwREFBQSxDQUFDeUMsNERBQUc7SUFBQ29DLFNBQVMsRUFBQyxNQUFNO0lBQUNxQixLQUFLLEVBQUU7TUFBRUwsUUFBUSxFQUFFO0lBQU87RUFBRSxDQUFFLENBQzFDLENBQ0EsQ0FDUCxDQUVOLENBQUMsRUFFSitDLElBQUksQ0FBQ1UsSUFBSSxDQUFDRyxJQUFJLEtBQUssS0FBSyxnQkFDckJ6SiwwREFBQSwyQkFDQ0EsMERBQUEsQ0FBQ3NFLGlFQUFlO0lBQUM2YSxTQUFTLEVBQUU1TDtFQUFjLGdCQUN4Q3ZULDBEQUFBO0lBQU82RSxTQUFTLEVBQUM7RUFBYSxnQkFDNUI3RSwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO0lBQUlrRyxLQUFLLEVBQUU7TUFBRWtaLFNBQVMsRUFBRTtJQUFPO0VBQUUsR0FBQyxHQUFLLENBQUMsZUFDeENwZiwwREFBQTtJQUFJa0csS0FBSyxFQUFFO01BQUVrWixTQUFTLEVBQUU7SUFBTztFQUFFLEdBQUMsTUFBUSxDQUFDLGVBQzNDcGYsMERBQUE7SUFBSWtHLEtBQUssRUFBRTtNQUFFa1osU0FBUyxFQUFFO0lBQU87RUFBRSxHQUFDLFVBQVksQ0FBQyxlQUMvQ3BmLDBEQUFBO0lBQUlrRyxLQUFLLEVBQUU7TUFBRWtaLFNBQVMsRUFBRTtJQUFPO0VBQUUsR0FBQyxPQUFTLENBQUMsZUFDNUNwZiwwREFBQTtJQUFJa0csS0FBSyxFQUFFO01BQUVrWixTQUFTLEVBQUU7SUFBTztFQUFFLEdBQUMsWUFBYyxDQUFDLGVBQ2pEcGYsMERBQUE7SUFBSWtHLEtBQUssRUFBRTtNQUFFa1osU0FBUyxFQUFFO0lBQU87RUFBRSxHQUFDLFFBQVUsQ0FBQyxlQUM3Q3BmLDBEQUFBO0lBQUlrRyxLQUFLLEVBQUU7TUFBRWtaLFNBQVMsRUFBRTtJQUFPO0VBQUUsR0FBQyxRQUFVLENBQzFDLENBQ0MsQ0FBQyxlQUNScGYsMERBQUEsQ0FBQ3dFLDJEQUFTO0lBQUM2YSxXQUFXLEVBQUM7RUFBVyxHQUMvQixDQUFDQyxRQUFRLEVBQUVDLFFBQVEsa0JBQ2xCdmYsMERBQUEsVUFBQWtGLFFBQUE7SUFDRXVELEVBQUUsRUFBQztFQUFXLEdBQ1Y2VyxRQUFRLENBQUNFLGNBQWM7SUFDM0JDLEdBQUcsRUFBRUgsUUFBUSxDQUFDSTtFQUFTLElBRXRCblUsS0FBSyxDQUFDaUYsR0FBRyxDQUFDLENBQUMwRCxJQUFJLEVBQUVsQyxDQUFDLGtCQUNqQmhTLDBEQUFBLENBQUN1RSwyREFBUztJQUFDb2IsR0FBRyxFQUFFekwsSUFBSSxDQUFDakQsS0FBTTtJQUFDMk8sV0FBVyxjQUFBcmEsTUFBQSxDQUFjMk8sSUFBSSxDQUFDakQsS0FBSyxDQUFHO0lBQUM2QyxLQUFLLEVBQUU5QjtFQUFFLEdBQ3pFLENBQUNzTixRQUFRLEVBQUVDLFFBQVEsa0JBQ2xCdmYsMERBQUEsT0FBQWtGLFFBQUE7SUFDRXVhLEdBQUcsRUFBRUgsUUFBUSxDQUFDSTtFQUFTLEdBQ25CSixRQUFRLENBQUNPLGNBQWMsR0FHekIzTCxJQUFJLENBQUM0TCxjQUFjLEtBQUs5UCxTQUFTLGdCQUMvQmhRLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQSxPQUFRc2YsUUFBUSxDQUFDVSxlQUFlLGVBQUdoZ0IsMERBQUEsQ0FBQzJDLDREQUFvQixNQUFFLENBQUssQ0FBQyxlQUNoRTNDLDBEQUFBO0lBQUlpZ0IsT0FBTyxFQUFFO0VBQUUsZ0JBQUNqZ0IsMERBQUEsQ0FBQ1ksc0RBQVM7SUFDeEIrZCxRQUFRO0lBQ1J4TSxJQUFJLEVBQUMsZ0JBQWdCO0lBQUMxSixFQUFFLEVBQUMsZ0JBQWdCO0lBQ3pDMkosS0FBSyxFQUFFOEIsSUFBSSxDQUFDNEwsY0FBZTtJQUMzQnZCLFFBQVEsRUFBR3hNLENBQUMsSUFBS1MsZUFBZSxDQUFDVCxDQUFDLEVBQUVDLENBQUMsQ0FBRTtJQUN2Q2tPLElBQUksRUFBQyxPQUFPO0lBQ1pDLFFBQVEsRUFBRXZYLElBQUksQ0FBQ1UsSUFBSSxDQUFDRyxJQUFJLEtBQUssTUFBTztJQUNwQzhTLEVBQUUsRUFBRTtNQUFFaFcsS0FBSyxFQUFFLE1BQU07TUFBRWQsZUFBZSxFQUFFLE9BQU87TUFBRUksUUFBUSxFQUFFO0lBQUc7RUFBRSxDQUMvRCxDQUFLLENBQUMsZUFDUDdGLDBEQUFBLDBCQUNFQSwwREFBQSxDQUFDMkUsWUFBWTtJQUFDc1osS0FBSyxFQUFDLFFBQVE7SUFBQzFCLEVBQUUsRUFBRSxDQUFDO0VBQUUsZ0JBQ2xDdmMsMERBQUEsQ0FBQ1UscURBQVU7SUFBQ2ljLE9BQU8sRUFBRUEsQ0FBQSxLQUFNMUksVUFBVSxDQUFDQyxJQUFJLENBQUNqRCxLQUFLO0VBQUUsZ0JBQ2hEalIsMERBQUEsQ0FBQ08sa0VBQVU7SUFBQzJGLEtBQUssRUFBRTtNQUFFa2EsTUFBTSxFQUFFLFNBQVM7TUFBRTFhLEtBQUssRUFBRTtJQUFNO0VBQUUsQ0FBRSxDQUMvQyxDQUNBLENBQ1osQ0FDSixDQUFDLGdCQUVIMUYsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBLE9BQVFzZixRQUFRLENBQUNVLGVBQWUsZUFBR2hnQiwwREFBQSxDQUFDMkMsNERBQW9CLE1BQUUsQ0FBSyxDQUFDLGVBQ2hFM0MsMERBQUEsYUFFSWtVLElBQUksQ0FBQzlDLFFBQVEsQ0FBQ0EsUUFBUSxnQkFFbEJwUiwwREFBQTtJQUFLa0csS0FBSyxFQUFFO01BQUVzVyxPQUFPLEVBQUUsTUFBTTtNQUFFWSxjQUFjLEVBQUUsZUFBZTtNQUFFRCxVQUFVLEVBQUU7SUFBUztFQUFFLGdCQUNyRm5kLDBEQUFBLDJCQUNFQSwwREFBQSxDQUFDZ0IscURBQVU7SUFBQ3FmLE1BQU0sRUFBRW5NLElBQUksQ0FBQzlDLFFBQVEsR0FBRzhDLElBQUksQ0FBQzlDLFFBQVEsQ0FBQ0EsUUFBUSxLQUFLLE9BQU8sR0FBRyxFQUFHO0lBQUNtTCxFQUFFLEVBQUU7TUFBRTFXLFFBQVEsRUFBRTtJQUFPO0VBQUUsR0FBRXFPLElBQUksQ0FBQzlDLFFBQVEsR0FBRzhDLElBQUksQ0FBQzlDLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDa1AsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFlLENBQzNLLENBQUMsZUFDTnRnQiwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQzhGLFlBQVk7SUFBQ21ZLEtBQUssRUFBQyxPQUFPO0lBQUNDLFNBQVMsRUFBQztFQUFLLGdCQUN6Q2xlLDBEQUFBLENBQUNVLHFEQUFVO0lBQUNpYyxPQUFPLEVBQUVBLENBQUEsS0FBTXBJLHNCQUFzQixDQUFDTCxJQUFJLENBQUNqRCxLQUFLLENBQUU7SUFBQy9LLEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFZ1ksS0FBSyxFQUFFO0lBQVE7RUFBRSxnQkFDN0duZSwwREFBQSxDQUFDNkMsNERBQW1CO0lBQUNxRCxLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFO0lBQVU7RUFBRSxDQUFFLENBQ3pDLENBQ0EsQ0FBQyxFQUVid08sSUFBSSxDQUFDOUMsUUFBUSxDQUFDQyxHQUFHLGlCQUNmclIsMERBQUEsQ0FBQzhGLFlBQVk7SUFBQ21ZLEtBQUssRUFBQyxNQUFNO0lBQUNDLFNBQVMsRUFBQztFQUFRLGdCQUMzQ2xlLDBEQUFBLENBQUNVLHFEQUFVO0lBQUNpYyxPQUFPLEVBQUVBLENBQUEsS0FBTTFILG9CQUFvQixDQUFDZixJQUFJLENBQUM5QyxRQUFRLENBQUNDLEdBQUcsQ0FBRTtJQUFDbkwsS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUVnWSxLQUFLLEVBQUU7SUFBUTtFQUFFLGdCQUNsSG5lLDBEQUFBLENBQUM0Qyw0REFBSTtJQUFDc0QsS0FBSyxFQUFFO01BQUVSLEtBQUssRUFBRTtJQUFVO0VBQUUsQ0FBRSxDQUMxQixDQUNBLENBR2YsQ0FDRixDQUFDLGdCQUVSMUYsMERBQUE7SUFBS2tHLEtBQUssRUFBRTtNQUFFc1csT0FBTyxFQUFFLE1BQU07TUFBRVcsVUFBVSxFQUFFO0lBQVM7RUFBRSxnQkFDcERuZCwwREFBQSxDQUFDbUIsc0RBQVk7SUFDWGlkLGdCQUFnQjtJQUNoQkMsT0FBTyxFQUFFbEsscUJBQXNCO0lBQy9CbUssY0FBYyxFQUFHbEssTUFBTSxJQUFLQSxNQUFNLENBQUMxRCxPQUFPLENBQUNDLE9BQU8sR0FBRyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ3dELE1BQU0sQ0FBQzFELE9BQU8sQ0FBQ0csVUFBVSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHc0QsTUFBTSxDQUFDaEQsUUFBUSxHQUFHLEtBQUssR0FBR2dELE1BQU0sQ0FBQ21NLFNBQVU7SUFDbktDLFlBQVksRUFBRUEsQ0FBQzFiLEtBQUssRUFBRXNQLE1BQU0sa0JBQU1wVSwwREFBQSxDQUFDa0IscURBQUcsRUFBSzRELEtBQUssRUFBR3NQLE1BQU0sQ0FBQzFELE9BQU8sQ0FBQ0MsT0FBTyxHQUFHLEdBQUcsR0FBR0MsTUFBTSxDQUFDd0QsTUFBTSxDQUFDMUQsT0FBTyxDQUFDRyxVQUFVLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUdzRCxNQUFNLENBQUNoRCxRQUFRLEdBQUcsS0FBSyxHQUFHZ0QsTUFBTSxDQUFDbU0sU0FBZSxDQUFHO0lBQ2xNL0IsV0FBVyxFQUFHQyxNQUFNLGlCQUNsQnplLDBEQUFBLENBQUNZLHNEQUFTLEVBQUs2ZCxNQUNkLENBQUU7SUFDTDFULFVBQVUsRUFBRUEsVUFBVztJQUN2QjBWLGFBQWEsRUFBRUEsQ0FBQ0MsS0FBSyxFQUFFQyxhQUFhLEtBQUs7TUFDdkMzVixhQUFhLENBQUMyVixhQUFhLENBQUM7SUFDOUIsQ0FBRTtJQUNGQyxhQUFhLEVBQUVBLENBQUN2QyxPQUFPLEVBQUF3QyxNQUFBLEtBQXFCO01BQUEsSUFBakI5VixVQUFVLEdBQUE4VixNQUFBLENBQVY5VixVQUFVO01BQ25DLE9BQU9zVCxPQUFPLENBQUNoTyxNQUFNLENBQ2xCK0QsTUFBTSxJQUNMQSxNQUFNLENBQUNoRCxRQUFRLENBQUMwUCxXQUFXLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUNoVyxVQUFVLENBQUMrVixXQUFXLENBQUMsQ0FBQyxDQUFDLElBQ2hFMU0sTUFBTSxDQUFDbU0sU0FBUyxDQUFDTyxXQUFXLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUNoVyxVQUFVLENBQUMrVixXQUFXLENBQUMsQ0FBQyxDQUFDLElBQ2pFMU0sTUFBTSxDQUFDM0QsVUFBVSxDQUFDcVEsV0FBVyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDaFcsVUFBVSxDQUFDK1YsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUNsRTFNLE1BQU0sQ0FBQzVDLGVBQWUsQ0FBQ3NQLFdBQVcsQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQ2hXLFVBQVUsQ0FBQytWLFdBQVcsQ0FBQyxDQUFDLENBQzFFLENBQUM7SUFDSCxDQUFFO0lBQ0Z2QyxRQUFRLEVBQUVBLENBQUN4TSxDQUFDLEVBQUViLFFBQVEsS0FBS0YsZ0JBQWdCLENBQUNrRCxJQUFJLENBQUNqRCxLQUFLLEVBQUVDLFFBQVEsQ0FBRTtJQUNsRWdQLElBQUksRUFBQyxPQUFPO0lBQ1pjLGNBQWMsRUFBRUMsTUFBQTtNQUFBLElBQUdDLFFBQVEsR0FBQUQsTUFBQSxDQUFSQyxRQUFRO1FBQUtDLEtBQUssR0FBQXBjLHdCQUFBLENBQUFrYyxNQUFBLEVBQUFHLFVBQUE7TUFBQSxvQkFFbkNwaEIsMERBQUEsQ0FBQ2tCLHFEQUFHLEVBQUFnRSxRQUFBLEtBQUtpYyxLQUFLO1FBQUU1RSxFQUFFLEVBQUU7VUFBRTlXLGVBQWUsRUFBRSxPQUFPO1VBQUVZLElBQUksRUFBRSxHQUFHO1VBQUVnYixTQUFTLEVBQUU7UUFBTztNQUFFLElBQzVFSCxRQUFRLGVBQ1RsaEIsMERBQUEsMkJBQ0VBLDBEQUFBO1FBQVEyYyxPQUFPLEVBQUc1SyxDQUFDLElBQUtpRiwyQkFBMkIsQ0FBQ2pGLENBQUMsQ0FBRTtRQUFDb08sUUFBUSxFQUFFdlgsSUFBSSxDQUFDVSxJQUFJLENBQUNHLElBQUksS0FBSyxNQUFPO1FBQUM2WCxXQUFXLEVBQUd2UCxDQUFDLElBQUtBLENBQUMsQ0FBQ3dHLGNBQWMsQ0FBQyxDQUFFO1FBQUMxVCxTQUFTLEVBQUMsY0FBYztRQUFDcUIsS0FBSyxFQUFFO1VBQUVLLEtBQUssRUFBRTtRQUFPO01BQUUsR0FBQyxjQUVoTCxDQUNMLENBQ0YsQ0FBQztJQUFBLENBQ047SUFDRmdXLEVBQUUsRUFBRTtNQUFFaFcsS0FBSyxFQUFFLE9BQU87TUFBRWQsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNsRCxDQUNFLENBSVAsQ0FBQyxlQUNMekYsMERBQUEsMEJBQ0VBLDBEQUFBLENBQUNZLHNEQUFTO0lBQ1J1ZixRQUFRLEVBQUUvRSxVQUFVLENBQUNsSCxJQUFJLENBQUN2QyxLQUFLLENBQUMsSUFBSSxDQUFFO0lBQ3RDUSxJQUFJLEVBQUMsU0FBUztJQUFDMUosRUFBRSxFQUFDLFNBQVM7SUFDM0I4VixRQUFRLEVBQUd4TSxDQUFDLElBQUs7TUFDZixJQUFJQSxDQUFDLENBQUNHLE1BQU0sQ0FBQ0UsS0FBSyxJQUFJOEIsSUFBSSxDQUFDdkMsS0FBSyxFQUFFO1FBQ2hDYSxlQUFlLENBQUNULENBQUMsRUFBRUMsQ0FBQyxDQUFDO01BQ3ZCO0lBQ0YsQ0FBRTtJQUNGa08sSUFBSSxFQUFDLE9BQU87SUFFWjlOLEtBQUssRUFBRThCLElBQUksQ0FBQ3RCLE9BQVE7SUFDcEIySixFQUFFLEVBQUU7TUFBRWhXLEtBQUssRUFBRSxPQUFPO01BQUVkLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDbEQsQ0FDQyxDQUFDLGVBQ0x6RiwwREFBQSwwQkFDRUEsMERBQUEsQ0FBQ1ksc0RBQVM7SUFDUnVSLElBQUksRUFBQyxVQUFVO0lBQUMxSixFQUFFLEVBQUMsVUFBVTtJQUM3QjJKLEtBQUssRUFBRThCLElBQUksQ0FBQ3pDLFFBQVM7SUFFckI4TSxRQUFRLEVBQUd4TSxDQUFDLElBQUtTLGVBQWUsQ0FBQ1QsQ0FBQyxFQUFFQyxDQUFDLENBQUU7SUFDdkNrTyxJQUFJLEVBQUMsT0FBTztJQUNaM0QsRUFBRSxFQUFFO01BQUVoVyxLQUFLLEVBQUUsT0FBTztNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2xELENBQ0MsQ0FBQyxlQUVMekYsMERBQUEsMEJBQ0VBLDBEQUFBLENBQUNZLHNEQUFTO0lBQ1J1UixJQUFJLEVBQUMsY0FBYztJQUFDMUosRUFBRSxFQUFDLGNBQWM7SUFDckMySixLQUFLLEVBQUU4QixJQUFJLENBQUN2QixZQUFhO0lBQ3pCNEwsUUFBUSxFQUFHeE0sQ0FBQyxJQUFLUyxlQUFlLENBQUNULENBQUMsRUFBRUMsQ0FBQyxDQUFFO0lBQ3ZDa08sSUFBSSxFQUFDLE9BQU87SUFFWnFCLFdBQVcsRUFBQyxVQUFVO0lBQ3RCaEYsRUFBRSxFQUFFO01BQUVoVyxLQUFLLEVBQUUsT0FBTztNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2xELENBQ0MsQ0FBQyxlQUNMekYsMERBQUE7SUFBSXlJLEVBQUUsRUFBQztFQUFvQixHQUFFeUwsSUFBSSxDQUFDckIsVUFBVSxDQUFDMk8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFNLENBQUMsZUFDbkd6aEIsMERBQUEsMEJBQ0VBLDBEQUFBLENBQUMyRSxZQUFZO0lBQUNzWixLQUFLLEVBQUMsUUFBUTtJQUFDMUIsRUFBRSxFQUFFLENBQUM7RUFBRSxnQkFDbEN2YywwREFBQSxDQUFDVSxxREFBVTtJQUFDaWMsT0FBTyxFQUFFQSxDQUFBLEtBQU0xSSxVQUFVLENBQUNDLElBQUksQ0FBQ2pELEtBQUs7RUFBRSxnQkFDaERqUiwwREFBQSxDQUFDTyxrRUFBVTtJQUFDMkYsS0FBSyxFQUFFO01BQUVrYSxNQUFNLEVBQUUsU0FBUztNQUFFMWEsS0FBSyxFQUFFO0lBQU07RUFBRSxDQUFFLENBQy9DLENBQ0EsQ0FDWixDQUNKLENBR0osQ0FFRyxDQUNaLENBQUMsRUFDRDRaLFFBQVEsQ0FBQ2lDLFdBQ0wsQ0FFQSxDQUNOLENBQ1EsQ0FDZCxDQUFDLGdCQUdKdmhCLDBEQUFBO0lBQUtrRyxLQUFLLEVBQUU7TUFBRXNXLE9BQU8sRUFBRSxNQUFNO01BQUVXLFVBQVUsRUFBRSxRQUFRO01BQUV1RSxHQUFHLEVBQUU7SUFBTztFQUFFLGdCQUNqRTFoQiwwREFBQSxDQUFDc0UsaUVBQWU7SUFBQzZhLFNBQVMsRUFBRTVMO0VBQWMsZ0JBQ3hDdlQsMERBQUE7SUFBTzZFLFNBQVMsRUFBQztFQUFhLGdCQUM1QjdFLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUE7SUFBSWtHLEtBQUssRUFBRTtNQUFFa1osU0FBUyxFQUFFO0lBQU87RUFBRSxHQUFDLEdBQUssQ0FBQyxlQUN4Q3BmLDBEQUFBO0lBQUlrRyxLQUFLLEVBQUU7TUFBRWtaLFNBQVMsRUFBRTtJQUFPO0VBQUUsR0FBQyxNQUFRLENBQUMsZUFDM0NwZiwwREFBQTtJQUFJa0csS0FBSyxFQUFFO01BQUVrWixTQUFTLEVBQUU7SUFBTztFQUFFLEdBQUMsVUFBWSxDQUFDLGVBQy9DcGYsMERBQUE7SUFBSWtHLEtBQUssRUFBRTtNQUFFa1osU0FBUyxFQUFFO0lBQU87RUFBRSxHQUFDLE9BQVMsQ0FBQyxlQUM1Q3BmLDBEQUFBO0lBQUlrRyxLQUFLLEVBQUU7TUFBRWtaLFNBQVMsRUFBRTtJQUFPO0VBQUUsR0FBQyxZQUFjLENBQUMsZUFDakRwZiwwREFBQTtJQUFJa0csS0FBSyxFQUFFO01BQUVrWixTQUFTLEVBQUU7SUFBTztFQUFFLEdBQUMsUUFBVSxDQUFDLGVBQzdDcGYsMERBQUE7SUFBSWtHLEtBQUssRUFBRTtNQUFFa1osU0FBUyxFQUFFO0lBQU87RUFBRSxHQUFDLFFBQVUsQ0FDMUMsQ0FDQyxDQUFDLGVBQ1JwZiwwREFBQSxDQUFDd0UsMkRBQVM7SUFBQzZhLFdBQVcsRUFBQztFQUFXLEdBQy9CLENBQUNDLFFBQVEsRUFBRUMsUUFBUSxrQkFDbEJ2ZiwwREFBQSxVQUFBa0YsUUFBQTtJQUNFdUQsRUFBRSxFQUFDO0VBQVcsR0FDVjZXLFFBQVEsQ0FBQ0UsY0FBYztJQUMzQkMsR0FBRyxFQUFFSCxRQUFRLENBQUNJO0VBQVMsSUFFdEJuVSxLQUFLLENBQUNpRixHQUFHLENBQUMsQ0FBQzBELElBQUksRUFBRWxDLENBQUMsa0JBQ2pCaFMsMERBQUEsQ0FBQ3VFLDJEQUFTO0lBQUNvYixHQUFHLEVBQUV6TCxJQUFJLENBQUNqRCxLQUFNO0lBQUMyTyxXQUFXLGNBQUFyYSxNQUFBLENBQWMyTyxJQUFJLENBQUNqRCxLQUFLLENBQUc7SUFBQzZDLEtBQUssRUFBRTlCO0VBQUUsR0FDekUsQ0FBQ3NOLFFBQVEsRUFBRUMsUUFBUSxrQkFDbEJ2ZiwwREFBQSxPQUFBa0YsUUFBQTtJQUNFdWEsR0FBRyxFQUFFSCxRQUFRLENBQUNJO0VBQVMsR0FDbkJKLFFBQVEsQ0FBQ08sY0FBYyxHQUd6QjNMLElBQUksQ0FBQzRMLGNBQWMsS0FBSzlQLFNBQVMsZ0JBQy9CaFEsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBLE9BQVFzZixRQUFRLENBQUNVLGVBQWUsZUFBR2hnQiwwREFBQSxDQUFDMkMsNERBQW9CLE1BQUUsQ0FBSyxDQUFDLGVBQ2hFM0MsMERBQUE7SUFBSWlnQixPQUFPLEVBQUU7RUFBRSxnQkFBQ2pnQiwwREFBQSxDQUFDWSxzREFBUztJQUN4QitkLFFBQVE7SUFDUnhNLElBQUksRUFBQyxnQkFBZ0I7SUFBQzFKLEVBQUUsRUFBQyxnQkFBZ0I7SUFDekMySixLQUFLLEVBQUU4QixJQUFJLENBQUM0TCxjQUFlO0lBQzNCdkIsUUFBUSxFQUFHeE0sQ0FBQyxJQUFLRCxZQUFZLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFFO0lBQ3BDa08sSUFBSSxFQUFDLE9BQU87SUFDWkMsUUFBUSxFQUFFdlgsSUFBSSxDQUFDVSxJQUFJLENBQUNHLElBQUksS0FBSyxNQUFPO0lBQ3BDOFMsRUFBRSxFQUFFO01BQUVoVyxLQUFLLEVBQUUsTUFBTTtNQUFFZCxlQUFlLEVBQUUsT0FBTztNQUFFSSxRQUFRLEVBQUU7SUFBRztFQUFFLENBQy9ELENBQUssQ0FBQyxlQUNQN0YsMERBQUEsMEJBQ0VBLDBEQUFBLENBQUMyRSxZQUFZO0lBQUNzWixLQUFLLEVBQUMsUUFBUTtJQUFDMUIsRUFBRSxFQUFFLENBQUM7RUFBRSxnQkFDbEN2YywwREFBQSxDQUFDVSxxREFBVTtJQUFDaWMsT0FBTyxFQUFFQSxDQUFBLEtBQU0xSSxVQUFVLENBQUNDLElBQUksQ0FBQ2pELEtBQUs7RUFBRSxnQkFDaERqUiwwREFBQSxDQUFDTyxrRUFBVTtJQUFDMkYsS0FBSyxFQUFFO01BQUVrYSxNQUFNLEVBQUUsU0FBUztNQUFFMWEsS0FBSyxFQUFFO0lBQU07RUFBRSxDQUFFLENBQy9DLENBQ0EsQ0FDWixDQUNKLENBQUMsZ0JBRUgxRiwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUEsT0FBUXNmLFFBQVEsQ0FBQ1UsZUFBZSxlQUFHaGdCLDBEQUFBLENBQUMyQyw0REFBb0IsTUFBRSxDQUFLLENBQUMsZUFDaEUzQywwREFBQSxhQUVJa1UsSUFBSSxDQUFDOUMsUUFBUSxDQUFDQSxRQUFRLGdCQUVsQnBSLDBEQUFBO0lBQUtrRyxLQUFLLEVBQUU7TUFBRXNXLE9BQU8sRUFBRSxNQUFNO01BQUVZLGNBQWMsRUFBRSxlQUFlO01BQUVELFVBQVUsRUFBRTtJQUFTO0VBQUUsZ0JBQ3JGbmQsMERBQUEsQ0FBQ2dCLHFEQUFVO0lBQUNxZixNQUFNLEVBQUVuTSxJQUFJLENBQUM5QyxRQUFRLEdBQUc4QyxJQUFJLENBQUM5QyxRQUFRLENBQUNBLFFBQVEsS0FBSyxPQUFPLEdBQUcsRUFBRztJQUFDbUwsRUFBRSxFQUFFO01BQUUxVyxRQUFRLEVBQUU7SUFBTztFQUFFLEdBQUVxTyxJQUFJLENBQUM5QyxRQUFRLEdBQUc4QyxJQUFJLENBQUM5QyxRQUFRLENBQUNBLFFBQVEsQ0FBQ2tQLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBZSxDQUFDLGVBQy9LdGdCLDBEQUFBLDJCQUNFQSwwREFBQSxDQUFDOEYsWUFBWTtJQUFDbVksS0FBSyxFQUFDLE9BQU87SUFBQ0MsU0FBUyxFQUFDO0VBQUssZ0JBQ3pDbGUsMERBQUEsQ0FBQ1UscURBQVU7SUFBQ2ljLE9BQU8sRUFBRUEsQ0FBQSxLQUFNcEksc0JBQXNCLENBQUNMLElBQUksQ0FBQ2pELEtBQUssQ0FBRTtJQUFDL0ssS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUVnWSxLQUFLLEVBQUU7SUFBUTtFQUFFLGdCQUM3R25lLDBEQUFBLENBQUM2Qyw0REFBbUI7SUFBQ3FELEtBQUssRUFBRTtNQUFFUixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDekMsQ0FDQSxDQUNYLENBQ0YsQ0FBQyxnQkFFUjFGLDBEQUFBO0lBQUtrRyxLQUFLLEVBQUU7TUFBRXNXLE9BQU8sRUFBRSxNQUFNO01BQUVXLFVBQVUsRUFBRTtJQUFTO0VBQUUsZ0JBQ3BEbmQsMERBQUEsQ0FBQ21CLHNEQUFZO0lBQ1hpZCxnQkFBZ0I7SUFDaEJDLE9BQU8sRUFBRWxLLHFCQUFzQjtJQUMvQm1LLGNBQWMsRUFBR2xLLE1BQU0sSUFBS0EsTUFBTSxDQUFDMUQsT0FBTyxDQUFDQyxPQUFPLEdBQUcsR0FBRyxHQUFHQyxNQUFNLENBQUN3RCxNQUFNLENBQUMxRCxPQUFPLENBQUNHLFVBQVUsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBR3NELE1BQU0sQ0FBQ2hELFFBQVEsR0FBRyxLQUFLLEdBQUdnRCxNQUFNLENBQUNtTSxTQUFVO0lBQ25LQyxZQUFZLEVBQUVBLENBQUMxYixLQUFLLEVBQUVzUCxNQUFNLGtCQUFNcFUsMERBQUEsQ0FBQ2tCLHFEQUFHLEVBQUs0RCxLQUFLLEVBQUdzUCxNQUFNLENBQUMxRCxPQUFPLENBQUNDLE9BQU8sR0FBRyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ3dELE1BQU0sQ0FBQzFELE9BQU8sQ0FBQ0csVUFBVSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHc0QsTUFBTSxDQUFDaEQsUUFBUSxHQUFHLEtBQUssR0FBR2dELE1BQU0sQ0FBQ21NLFNBQWUsQ0FBRztJQUNsTS9CLFdBQVcsRUFBR0MsTUFBTSxpQkFDbEJ6ZSwwREFBQSxDQUFDWSxzREFBUyxFQUFLNmQsTUFDZCxDQUFFO0lBQ0wxVCxVQUFVLEVBQUVBLFVBQVc7SUFDdkIwVixhQUFhLEVBQUVBLENBQUNDLEtBQUssRUFBRUMsYUFBYSxLQUFLO01BQ3ZDM1YsYUFBYSxDQUFDMlYsYUFBYSxDQUFDO0lBQzlCLENBQUU7SUFDRkMsYUFBYSxFQUFFQSxDQUFDdkMsT0FBTyxFQUFBc0QsTUFBQSxLQUFxQjtNQUFBLElBQWpCNVcsVUFBVSxHQUFBNFcsTUFBQSxDQUFWNVcsVUFBVTtNQUNuQyxPQUFPc1QsT0FBTyxDQUFDaE8sTUFBTSxDQUNsQitELE1BQU0sSUFDTEEsTUFBTSxDQUFDaEQsUUFBUSxDQUFDMFAsV0FBVyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDaFcsVUFBVSxDQUFDK1YsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUNoRTFNLE1BQU0sQ0FBQ21NLFNBQVMsQ0FBQ08sV0FBVyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDaFcsVUFBVSxDQUFDK1YsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUNqRTFNLE1BQU0sQ0FBQzVDLGVBQWUsQ0FBQ3NQLFdBQVcsQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQ2hXLFVBQVUsQ0FBQytWLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFDdkUxTSxNQUFNLENBQUMzRCxVQUFVLENBQUNxUSxXQUFXLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUNoVyxVQUFVLENBQUMrVixXQUFXLENBQUMsQ0FBQyxDQUNyRSxDQUFDO0lBQ0gsQ0FBRTtJQUNGdkMsUUFBUSxFQUFFQSxDQUFDeE0sQ0FBQyxFQUFFYixRQUFRLEtBQUtGLGdCQUFnQixDQUFDa0QsSUFBSSxDQUFDakQsS0FBSyxFQUFFQyxRQUFRLENBQUU7SUFDbEVnUCxJQUFJLEVBQUMsT0FBTztJQUNaM0QsRUFBRSxFQUFFO01BQUVoVyxLQUFLLEVBQUUsT0FBTztNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2xELENBQ0UsQ0FJUCxDQUFDLGVBQ0x6RiwwREFBQSwwQkFDRUEsMERBQUEsQ0FBQ1ksc0RBQVM7SUFDUnVmLFFBQVEsRUFBRS9FLFVBQVUsQ0FBQ2xILElBQUksQ0FBQ3ZDLEtBQUssQ0FBQyxJQUFJLENBQUU7SUFDdENRLElBQUksRUFBQyxTQUFTO0lBQUMxSixFQUFFLEVBQUMsU0FBUztJQUMzQjhWLFFBQVEsRUFBR3hNLENBQUMsSUFBSztNQUNmLElBQUlBLENBQUMsQ0FBQ0csTUFBTSxDQUFDRSxLQUFLLElBQUk4QixJQUFJLENBQUN2QyxLQUFLLEVBQUU7UUFDaENHLFlBQVksQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7TUFDcEI7SUFDRixDQUFFO0lBQ0ZrTyxJQUFJLEVBQUMsT0FBTztJQUNaOU4sS0FBSyxFQUFFOEIsSUFBSSxDQUFDdEIsT0FBUTtJQUNwQjJKLEVBQUUsRUFBRTtNQUFFaFcsS0FBSyxFQUFFLE9BQU87TUFBRWQsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNsRCxDQUNDLENBQUMsZUFDTHpGLDBEQUFBO0lBQUl5SSxFQUFFLEVBQUM7RUFBb0IsR0FBRXlMLElBQUksQ0FBQ3pDLFFBQVEsQ0FBQytQLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBTSxDQUFDLGVBQ2pHemhCLDBEQUFBLDBCQUNFQSwwREFBQSxDQUFDWSxzREFBUztJQUNSdVIsSUFBSSxFQUFDLGNBQWM7SUFBQzFKLEVBQUUsRUFBQyxjQUFjO0lBQ3JDMkosS0FBSyxFQUFFOEIsSUFBSSxDQUFDdkIsWUFBYTtJQUN6QjRMLFFBQVEsRUFBR3hNLENBQUMsSUFBS0QsWUFBWSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBRTtJQUNwQ2tPLElBQUksRUFBQyxPQUFPO0lBQ1pxQixXQUFXLEVBQUMsVUFBVTtJQUN0QmhGLEVBQUUsRUFBRTtNQUFFaFcsS0FBSyxFQUFFLE9BQU87TUFBRWQsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNsRCxDQUNDLENBQUMsZUFDTHpGLDBEQUFBO0lBQUl5SSxFQUFFLEVBQUM7RUFBb0IsR0FBRXlMLElBQUksQ0FBQ3JCLFVBQVUsQ0FBQzJPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBTSxDQUFDLGVBQ25HemhCLDBEQUFBLDBCQUNFQSwwREFBQSxDQUFDMkUsWUFBWTtJQUFDc1osS0FBSyxFQUFDLFFBQVE7SUFBQzFCLEVBQUUsRUFBRSxDQUFDO0VBQUUsZ0JBQ2xDdmMsMERBQUEsQ0FBQ1UscURBQVU7SUFBQ2ljLE9BQU8sRUFBRUEsQ0FBQSxLQUFNMUksVUFBVSxDQUFDQyxJQUFJLENBQUNqRCxLQUFLO0VBQUUsZ0JBQ2hEalIsMERBQUEsQ0FBQ08sa0VBQVU7SUFBQzJGLEtBQUssRUFBRTtNQUFFa2EsTUFBTSxFQUFFLFNBQVM7TUFBRTFhLEtBQUssRUFBRTtJQUFNO0VBQUUsQ0FBRSxDQUMvQyxDQUNBLENBQ1osQ0FDSixDQUdKLENBRUcsQ0FDWixDQUFDLEVBQ0Q0WixRQUFRLENBQUNpQyxXQUNMLENBRUEsQ0FDTixDQUNRLENBQ2QsQ0FJUCxDQUFDLGVBQ1B2aEIsMERBQUEsQ0FBQ1MscURBQUk7SUFBQ3NkLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCaGUsMERBQUE7SUFBTzZFLFNBQVMsRUFBQyxZQUFZO0lBQUNxQixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFO0lBQVE7RUFBRSxnQkFDdER2RywwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO0lBQUlrRyxLQUFLLEVBQUU7TUFBRWtaLFNBQVMsRUFBRTtJQUFTLENBQUU7SUFBQ2EsT0FBTyxFQUFFO0VBQUUsR0FBQyxhQUFlLENBQzdELENBQUMsZUF1QkxqZ0IsMERBQUE7SUFBSWtHLEtBQUssRUFBRTtNQUFFMGIsWUFBWSxFQUFFLGlCQUFpQjtNQUFFOUQsT0FBTyxFQUFFO0lBQU87RUFBRSxnQkFDOUQ5ZCwwREFBQTtJQUFJa0csS0FBSyxFQUFFO01BQUVrWixTQUFTLEVBQUU7SUFBTztFQUFFLEdBQUMsY0FBZ0IsQ0FBQyxlQUNuRHBmLDBEQUFBO0lBQUk2aEIsS0FBSyxFQUFDO0VBQVEsZ0JBQ2hCN2hCLDBEQUFBLENBQUNnQixxREFBVSxRQUFDLE1BQUksRUFBQzJLLFFBQVEsQ0FBQzZWLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxFQUFDLE1BQUksRUFBQyxDQUFDOVYsUUFBUSxHQUFHcUQsSUFBSSxFQUFFd1MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsR0FBYSxDQUM5SixDQUNGLENBQUMsZUFDTHpoQiwwREFBQTtJQUFJa0csS0FBSyxFQUFFO01BQUUwYixZQUFZLEVBQUUsaUJBQWlCO01BQUU5RCxPQUFPLEVBQUU7SUFBTztFQUFFLGdCQUM5RDlkLDBEQUFBO0lBQUlrRyxLQUFLLEVBQUU7TUFBRWtaLFNBQVMsRUFBRTtJQUFPO0VBQUUsR0FBQyxZQUNoQyxlQUFBcGYsMERBQUEsQ0FBQzBCLHNEQUFnQjtJQUNmb2dCLE9BQU8sZUFDTDloQiwwREFBQSxDQUFDMkIsc0RBQVE7TUFDUG9nQixPQUFPLEVBQUV2UyxRQUFTO01BQ2xCK08sUUFBUSxFQUFHeE0sQ0FBQyxJQUFLdEMsV0FBVyxDQUFDc0MsQ0FBQyxDQUFDRyxNQUFNLENBQUM2UCxPQUFPO0lBQUUsQ0FDaEQ7RUFDRixDQUNGLENBQ0MsQ0FBQyxlQUNML2hCLDBEQUFBO0lBQUk2aEIsS0FBSyxFQUFDO0VBQVEsR0FBQyxLQUNkLEVBQUN6UyxHQUFHLENBQUNvUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsRUFBQyxNQUFJLEVBQUMsQ0FBQ3JTLEdBQUcsR0FBR0osSUFBSSxFQUFFd1MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsR0FDMUgsQ0FDRixDQUFDLGVBQ0x6aEIsMERBQUE7SUFBSWtHLEtBQUssRUFBRTtNQUFFMGIsWUFBWSxFQUFFLGlCQUFpQjtNQUFFOUQsT0FBTyxFQUFFO0lBQU87RUFBRSxnQkFDOUQ5ZCwwREFBQTtJQUFJa0csS0FBSyxFQUFFO01BQUVrWixTQUFTLEVBQUU7SUFBTztFQUFFLEdBQUMsZUFBaUIsQ0FBQyxlQUNwRHBmLDBEQUFBO0lBQUk2aEIsS0FBSyxFQUFDO0VBQVEsR0FBQyxLQUNkLEVBQUNsVSxZQUFZLENBQUM2VCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsRUFBQyxNQUFJLEVBQUMsQ0FBQzlULFlBQVksR0FBR3FCLElBQUksRUFBRXdTLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxFQUFDLEdBQzVJLENBQ0YsQ0FBQyxlQUNMemhCLDBEQUFBO0lBQUlrRyxLQUFLLEVBQUU7TUFBRTBiLFlBQVksRUFBRSxpQkFBaUI7TUFBRTlELE9BQU8sRUFBRTtJQUFPO0VBQUUsZ0JBQzlEOWQsMERBQUE7SUFBSWtHLEtBQUssRUFBRTtNQUFFa1osU0FBUyxFQUFFO0lBQU87RUFBRSxHQUFDLFNBQVcsQ0FBQyxlQUM5Q3BmLDBEQUFBO0lBQUlrRyxLQUFLLEVBQUU7TUFBRXNXLE9BQU8sRUFBRSxNQUFNO01BQUVXLFVBQVUsRUFBRSxPQUFPO01BQUVDLGNBQWMsRUFBRSxlQUFlO01BQUVzRSxHQUFHLEVBQUU7SUFBTztFQUFFLGdCQUNoRzFoQiwwREFBQSxDQUFDWSxzREFBUztJQUNSdVIsSUFBSSxFQUFDLGNBQWM7SUFDbkJDLEtBQUssRUFBRXJHLE9BQVE7SUFDZndTLFFBQVEsRUFBR3hNLENBQUMsSUFBSy9GLFFBQVEsQ0FBQytGLENBQUMsQ0FBQ0csTUFBTSxDQUFDRSxLQUFLLENBQUU7SUFDMUM4TixJQUFJLEVBQUMsT0FBTztJQUNaM0QsRUFBRSxFQUFFO01BQUU5VyxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2xDLENBQ0MsQ0FDRixDQUFDLGVBQ0x6RiwwREFBQTtJQUFJa0csS0FBSyxFQUFFO01BQUUwYixZQUFZLEVBQUUsaUJBQWlCO01BQUU5RCxPQUFPLEVBQUU7SUFBTztFQUFFLGdCQUM5RDlkLDBEQUFBO0lBQUlrRyxLQUFLLEVBQUU7TUFBRWtaLFNBQVMsRUFBRTtJQUFPO0VBQUUsR0FBQyxVQUFZLENBQUMsZUFDL0NwZiwwREFBQTtJQUFJa0csS0FBSyxFQUFFO01BQUVzVyxPQUFPLEVBQUUsTUFBTTtNQUFFVyxVQUFVLEVBQUUsT0FBTztNQUFFQyxjQUFjLEVBQUUsZUFBZTtNQUFFc0UsR0FBRyxFQUFFO0lBQU87RUFBRSxnQkFDaEcxaEIsMERBQUEsQ0FBQ1ksc0RBQVM7SUFDUnVSLElBQUksRUFBQyxlQUFlO0lBQ3BCQyxLQUFLLEVBQUVqRyxRQUFTO0lBQ2hCb1MsUUFBUSxFQUFHeE0sQ0FBQyxJQUFLM0YsV0FBVyxDQUFDMkYsQ0FBQyxDQUFDRyxNQUFNLENBQUNFLEtBQUssQ0FBRTtJQUM3QzhOLElBQUksRUFBQyxPQUFPO0lBQ1ozRCxFQUFFLEVBQUU7TUFBRTlXLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDbEMsQ0FDQyxDQUNGLENBQUMsRUFFSHNJLFVBQVUsSUFBSSxDQUFDLGdCQUNiL04sMERBQUE7SUFBSWtHLEtBQUssRUFBRTtNQUFFMGIsWUFBWSxFQUFFLGlCQUFpQjtNQUFFOUQsT0FBTyxFQUFFO0lBQU87RUFBRSxnQkFDOUQ5ZCwwREFBQTtJQUFJa0csS0FBSyxFQUFFO01BQUVrWixTQUFTLEVBQUU7SUFBTztFQUFFLEdBQUMsYUFBZSxDQUFDLGVBQ2xEcGYsMERBQUE7SUFBSTZoQixLQUFLLEVBQUM7RUFBUSxHQUFDLEtBQ2QsRUFBQzlULFVBQVUsQ0FBQ3lULE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxFQUFDLE1BQUksRUFBQyxDQUFDMVQsVUFBVSxHQUFHaUIsSUFBSSxFQUFFd1MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsR0FDeEksQ0FDRixDQUFDLGdCQUVMemhCLDBEQUFBO0lBQUlrRyxLQUFLLEVBQUU7TUFBRTBiLFlBQVksRUFBRSxpQkFBaUI7TUFBRTlELE9BQU8sRUFBRTtJQUFPO0VBQUUsZ0JBQzlEOWQsMERBQUE7SUFBSWtHLEtBQUssRUFBRTtNQUFFa1osU0FBUyxFQUFFO0lBQU87RUFBRSxHQUFDLGtCQUFvQixDQUFDLGVBQ3ZEcGYsMERBQUE7SUFBSTZoQixLQUFLLEVBQUM7RUFBUSxHQUFDLEtBQ2QsRUFBQ3ZQLElBQUksQ0FBQ3VGLEdBQUcsQ0FBQzlKLFVBQVUsQ0FBQyxDQUFDeVQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsTUFBSSxFQUFDblAsSUFBSSxDQUFDdUYsR0FBRyxDQUFDOUosVUFBVSxHQUFHaUIsSUFBSSxDQUFDLENBQUN3UyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsRUFBQyxHQUMxSixDQUNGLENBR0gsQ0FBQyxFQUVOMVQsVUFBVSxHQUFHLENBQUMsaUJBQ1ovTiwwREFBQSw2QkFDRUEsMERBQUE7SUFBSWtHLEtBQUssRUFBRTtNQUFFMGIsWUFBWSxFQUFFLGlCQUFpQjtNQUFFOUQsT0FBTyxFQUFFO0lBQU87RUFBRSxnQkFDOUQ5ZCwwREFBQTtJQUFJa0csS0FBSyxFQUFFO01BQUVrWixTQUFTLEVBQUU7SUFBTztFQUFFLEdBQUMsV0FBYSxDQUFDLGVBQ2hEcGYsMERBQUE7SUFBSWtHLEtBQUssRUFBRTtNQUFFc1csT0FBTyxFQUFFLE1BQU07TUFBRVcsVUFBVSxFQUFFLE9BQU87TUFBRUMsY0FBYyxFQUFFLGVBQWU7TUFBRXNFLEdBQUcsRUFBRTtJQUFPO0VBQUUsZ0JBQ2hHMWhCLDBEQUFBLENBQUNZLHNEQUFTO0lBQ1J1UixJQUFJLEVBQUMsY0FBYztJQUNuQkMsS0FBSyxFQUFFN0YsUUFBUztJQUNoQmdTLFFBQVEsRUFBR3hNLENBQUMsSUFBS3ZGLFdBQVcsQ0FBQ3VGLENBQUMsQ0FBQ0csTUFBTSxDQUFDRSxLQUFLLENBQUU7SUFDN0M4TixJQUFJLEVBQUMsT0FBTztJQUNaM0QsRUFBRSxFQUFFO01BQUU5VyxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2xDLENBQ0MsQ0FDRixDQUFDLGVBQ0x6RiwwREFBQTtJQUFJa0csS0FBSyxFQUFFO01BQUUwYixZQUFZLEVBQUUsaUJBQWlCO01BQUU5RCxPQUFPLEVBQUU7SUFBTztFQUFFLGdCQUM5RDlkLDBEQUFBO0lBQUlrRyxLQUFLLEVBQUU7TUFBRWtaLFNBQVMsRUFBRTtJQUFPO0VBQUUsR0FBQyxZQUFjLENBQUMsZUFDakRwZiwwREFBQTtJQUFJa0csS0FBSyxFQUFFO01BQUVzVyxPQUFPLEVBQUUsTUFBTTtNQUFFVyxVQUFVLEVBQUUsT0FBTztNQUFFQyxjQUFjLEVBQUUsZUFBZTtNQUFFc0UsR0FBRyxFQUFFO0lBQU87RUFBRSxnQkFDaEcxaEIsMERBQUEsQ0FBQ1ksc0RBQVM7SUFDUnVSLElBQUksRUFBQyxjQUFjO0lBQ25CQyxLQUFLLEVBQUV6RixTQUFVO0lBQ2pCNFIsUUFBUSxFQUFHeE0sQ0FBQyxJQUFLbkYsWUFBWSxDQUFDbUYsQ0FBQyxDQUFDRyxNQUFNLENBQUNFLEtBQUssQ0FBRTtJQUM5QzhOLElBQUksRUFBQyxPQUFPO0lBQ1ozRCxFQUFFLEVBQUU7TUFBRTlXLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDbEMsQ0FDQyxDQUNGLENBQUMsZUFDTHpGLDBEQUFBO0lBQUlrRyxLQUFLLEVBQUU7TUFBRTBiLFlBQVksRUFBRSxpQkFBaUI7TUFBRTlELE9BQU8sRUFBRTtJQUFPO0VBQUUsZ0JBQzlEOWQsMERBQUE7SUFBSWtHLEtBQUssRUFBRTtNQUFFa1osU0FBUyxFQUFFO0lBQU87RUFBRSxHQUFDLFdBQWEsQ0FBQyxlQUNoRHBmLDBEQUFBO0lBQUk2aEIsS0FBSyxFQUFDO0VBQVEsR0FBQyxLQUNkLEVBQUN0VSxTQUFTLENBQUNpVSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsRUFBQyxNQUFJLEVBQUMsQ0FBQ2xVLFNBQVMsR0FBR3lCLElBQUksRUFBRXdTLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxFQUFDLEdBQ3RJLENBQ0YsQ0FDQyxDQUVOLENBQ0gsQ0FBQyxlQUNQemhCLDBEQUFBLENBQUNTLHFEQUFJO0lBQUNzZCxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNoQmhlLDBEQUFBO0lBQUtrRyxLQUFLLEVBQUU7TUFBRXNXLE9BQU8sRUFBRSxNQUFNO01BQUVrRixHQUFHLEVBQUUsTUFBTTtNQUFFdEUsY0FBYyxFQUFFLGVBQWU7TUFBRUQsVUFBVSxFQUFFO0lBQVM7RUFBRSxnQkFDbEduZCwwREFBQSxDQUFDWSxzREFBUztJQUNSNkgsRUFBRSxFQUFDLE1BQU07SUFDVDBKLElBQUksRUFBQyxNQUFNO0lBQ1g2UCxTQUFTO0lBQ1RDLElBQUksRUFBRSxDQUFFO0lBQ1I3UCxLQUFLLEVBQUV6RCxJQUFLO0lBQ1orUCxLQUFLLEVBQUMsY0FBYztJQUNwQkgsUUFBUSxFQUFHeE0sQ0FBQyxJQUFLbkQsT0FBTyxDQUFDbUQsQ0FBQyxDQUFDRyxNQUFNLENBQUNFLEtBQUssQ0FBRTtJQUN6Q21LLEVBQUUsRUFBRTtNQUFFaFcsS0FBSyxFQUFFLEtBQUs7TUFBRWQsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNoRCxDQUNFLENBQ0QsQ0FBQyxlQUNQekYsMERBQUEsQ0FBQ1MscURBQUk7SUFBQ3NkLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsR0FFZHZDLE1BQU0sS0FBSyxNQUFNLGdCQUFHemIsMERBQUE7SUFBUTZlLElBQUksRUFBQyxRQUFRO0lBQUNoYSxTQUFTLEVBQUMsY0FBYztJQUFDcUIsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRTtJQUFPO0VBQUUsR0FBQyxNQUFZLENBQUMsZ0JBQUd2RywwREFBQTtJQUFHNkUsU0FBUyxFQUFDLGNBQWM7SUFBQ3FCLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsTUFBTTtNQUFFNlksU0FBUyxFQUFFO0lBQVM7RUFBRSxHQUFDLFdBQVksQ0FFbE0sQ0FDRixDQUNGLENBQ0gsQ0FDSSxDQUNSLENBQ0YsQ0FBQyxlQUNOcGYsMERBQUEsQ0FBQ29CLHNEQUFLO0lBQ0o4RixJQUFJLEVBQUVrUixLQUFNO0lBQ1o4SixPQUFPLEVBQUUxSixlQUFnQjtJQUN6QixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUN4WSwwREFBQSxDQUFDa0IscURBQUc7SUFBQ3FiLEVBQUUsRUFBQXBWLGFBQUEsQ0FBQUEsYUFBQSxLQUFPakIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLGdCQUNoQ3ZHLDBEQUFBLENBQUM4RixZQUFZO0lBQUNtWSxLQUFLLEVBQUMsT0FBTztJQUFDQyxTQUFTLEVBQUM7RUFBTSxnQkFDMUNsZSwwREFBQSxDQUFDVSxxREFBVTtJQUFDaWMsT0FBTyxFQUFFbkUsZUFBZ0I7SUFBQ3RTLEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFZ1ksS0FBSyxFQUFFO0lBQVE7RUFBRSxnQkFDcEZuZSwwREFBQSxDQUFDa0Usa0VBQUs7SUFBQ2dDLEtBQUssRUFBRTtNQUFFUixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDM0IsQ0FDQSxDQUFDLGVBQ2YxRiwwREFBQSxDQUFDUyxxREFBSTtJQUFDb2QsU0FBUztJQUFDdEIsRUFBRSxFQUFFO01BQUVZLFVBQVUsRUFBRSxRQUFRO01BQUVXLE9BQU8sRUFBRTtJQUFPLENBQUU7SUFBQzFWLE9BQU8sRUFBRTtFQUFFLGdCQUN4RXBJLDBEQUFBLENBQUNTLHFEQUFJO0lBQUNzZCxJQUFJO0lBQUNDLEVBQUUsRUFBRSxFQUFHO0lBQUN6QixFQUFFLEVBQUU7TUFBRTZDLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzdDcGYsMERBQUEsQ0FBQ2dCLHFEQUFVLFFBQUMseUNBQW1ELENBQUMsZUFDaEVoQiwwREFBQSx5QkFBR0EsMERBQUE7SUFBTTZFLFNBQVMsRUFBQyxNQUFNO0lBQUNxQixLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFO0lBQU07RUFBRSxHQUFDLFFBQVksQ0FBQyxLQUFDLGVBQUExRiwwREFBQTtJQUFNNkUsU0FBUyxFQUFDO0VBQU0sR0FBQyxxRUFBeUUsQ0FBSSxDQUFDLE1BQVEsQ0FBQyxlQUNqTDdFLDBEQUFBLFdBQUssQ0FBQyxlQUNOQSwwREFBQSxDQUFDUyxxREFBSTtJQUFDc2QsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZmhlLDBEQUFBO0lBQVE2ZSxJQUFJLEVBQUMsUUFBUTtJQUFDbEMsT0FBTyxFQUFFQSxDQUFBLEtBQU1qVSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUU7SUFBQzdELFNBQVMsRUFBQyxhQUFhO0lBQUNxQixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFO0lBQU87RUFBRSxHQUFDLEtBQVcsQ0FDNUcsQ0FBQyxlQUNQdkcsMERBQUEsQ0FBQ1MscURBQUk7SUFBQ3NkLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2ZoZSwwREFBQTtJQUFRNmUsSUFBSSxFQUFDLFFBQVE7SUFBQ2xDLE9BQU8sRUFBRW5FLGVBQWdCO0lBQUMzVCxTQUFTLEVBQUMsYUFBYTtJQUFDcUIsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRTtJQUFPO0VBQUUsR0FBQyxJQUFVLENBQ3hHLENBQ0YsQ0FDSCxDQUNBLENBQUMsZUFDUnZHLDBEQUFBLENBQUNvQixzREFBSztJQUNKOEYsSUFBSSxFQUFFNlIsZ0JBQWlCO0lBQ3ZCbUosT0FBTyxFQUFFckksV0FBWTtJQUNyQnNJLG9CQUFvQjtJQUNwQkMsaUJBQWlCLEVBQUUvZ0Isc0RBQVM7SUFDNUJnaEIsYUFBYSxFQUFFO01BQ2JDLE9BQU8sRUFBRTtJQUNYLENBQUU7SUFDRixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUN0aUIsMERBQUEsQ0FBQ2tCLHFEQUFHO0lBQUNxYixFQUFFLEVBQUFwVixhQUFBLENBQUFBLGFBQUEsS0FBT2pCLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxHQUUvQm9TLE9BQU8sZ0JBQUkzWSwwREFBQSxDQUFDMEQsMERBQU0sTUFBRSxDQUFDLGdCQUVwQjFELDBEQUFBO0lBQUtrRyxLQUFLLEVBQUU7TUFBRWtYLGNBQWMsRUFBRSxRQUFRO01BQUVnQyxTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUM1RHBmLDBEQUFBLHlCQUFHQSwwREFBQSxDQUFDd0Qsd0VBQWU7SUFBQzBDLEtBQUssRUFBRTtNQUFFUixLQUFLLEVBQUUsT0FBTztNQUFFMlgsTUFBTSxFQUFFLE1BQU07TUFBRTlXLEtBQUssRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUFJLENBQUMsZUFDcEZ2RywwREFBQSxhQUFJLDBCQUE0QixDQUFDLGVBQ2pDQSwwREFBQTtJQUFLa0csS0FBSyxFQUFFO01BQUVzVyxPQUFPLEVBQUUsTUFBTTtNQUFFa0YsR0FBRyxFQUFFLE1BQU07TUFBRXRFLGNBQWMsRUFBRTtJQUFTO0VBQUUsZ0JBQ3JFcGQsMERBQUE7SUFBUTJjLE9BQU8sRUFBRUEsQ0FBQSxLQUFNeEMsY0FBYyxDQUFDLFVBQVUsQ0FBRTtJQUFDdFYsU0FBUyxFQUFDO0VBQWEsR0FBQyxTQUVuRSxDQUNMLENBQ0YsQ0FFSixDQUNBLENBQUMsZUFDUjdFLDBEQUFBLENBQUNvQixzREFBSztJQUNKOEYsSUFBSSxFQUFFcVMsY0FBZTtJQUNyQjJJLE9BQU8sRUFBRWhJLGdCQUFpQjtJQUMxQmlJLG9CQUFvQjtJQUNwQkMsaUJBQWlCLEVBQUUvZ0Isc0RBQVM7SUFDNUJnaEIsYUFBYSxFQUFFO01BQ2JDLE9BQU8sRUFBRTtJQUNYLENBQUU7SUFDRixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUN0aUIsMERBQUEsQ0FBQ2tCLHFEQUFHO0lBQUNxYixFQUFFLEVBQUFwVixhQUFBLENBQUFBLGFBQUEsS0FBT2pCLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxHQUUvQm9TLE9BQU8sZ0JBQUkzWSwwREFBQSxDQUFDMEQsMERBQU0sTUFBRSxDQUFDLGdCQUVwQjFELDBEQUFBO0lBQUtrRyxLQUFLLEVBQUU7TUFBRWtYLGNBQWMsRUFBRSxRQUFRO01BQUVnQyxTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUM1RHBmLDBEQUFBLHlCQUFHQSwwREFBQSxDQUFDeUQsbUVBQVU7SUFBQ3lDLEtBQUssRUFBRTtNQUFFUixLQUFLLEVBQUUsS0FBSztNQUFFMlgsTUFBTSxFQUFFLE1BQU07TUFBRTlXLEtBQUssRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUFJLENBQUMsZUFDN0V2RywwREFBQTtJQUFJa0csS0FBSyxFQUFFO01BQUVSLEtBQUssRUFBRTtJQUFNO0VBQUUsR0FBQyxlQUFpQixDQUFDLGVBQy9DMUYsMERBQUE7SUFBUTZFLFNBQVMsRUFBQyxhQUFhO0lBQUM4WCxPQUFPLEVBQUV6QztFQUFpQixHQUFDLFdBRW5ELENBQ0wsQ0FFSixDQUNBLENBQUMsZUFDUmxhLDBEQUFBLENBQUNvQixzREFBSztJQUNKOEYsSUFBSSxFQUFFaVMsc0JBQXVCO0lBQzdCK0ksT0FBTyxFQUFFakksaUJBQWtCO0lBQzNCa0ksb0JBQW9CO0lBQ3BCQyxpQkFBaUIsRUFBRS9nQixzREFBUztJQUM1QmdoQixhQUFhLEVBQUU7TUFDYkMsT0FBTyxFQUFFO0lBQ1gsQ0FBRTtJQUNGLG1CQUFnQixtQkFBbUI7SUFDbkMsb0JBQWlCO0VBQXlCLGdCQUUxQ3RpQiwwREFBQSxDQUFDa0IscURBQUc7SUFBQ3FiLEVBQUUsRUFBQXBWLGFBQUEsQ0FBQUEsYUFBQSxLQUFPakIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLEdBRS9Cb1MsT0FBTyxnQkFBSTNZLDBEQUFBLENBQUMwRCwwREFBTSxNQUFFLENBQUMsZ0JBRXBCMUQsMERBQUE7SUFBS2tHLEtBQUssRUFBRTtNQUFFa1gsY0FBYyxFQUFFLFFBQVE7TUFBRWdDLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzVEcGYsMERBQUEseUJBQUdBLDBEQUFBLENBQUN3RCx3RUFBZTtJQUFDMEMsS0FBSyxFQUFFO01BQUVSLEtBQUssRUFBRSxPQUFPO01BQUUyWCxNQUFNLEVBQUUsTUFBTTtNQUFFOVcsS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQUksQ0FBQyxlQUNwRnZHLDBEQUFBLGFBQUksMEJBQTRCLENBQUMsZUFDakNBLDBEQUFBO0lBQUtrRyxLQUFLLEVBQUU7TUFBRXNXLE9BQU8sRUFBRSxNQUFNO01BQUVrRixHQUFHLEVBQUUsTUFBTTtNQUFFdEUsY0FBYyxFQUFFO0lBQVM7RUFBRSxnQkFDckVwZCwwREFBQTtJQUFRMmMsT0FBTyxFQUFFMUMsaUJBQWtCO0lBQUNwVixTQUFTLEVBQUM7RUFBYSxHQUFDLE9BRXBELENBQ0wsQ0FDRixDQUVKLENBQ0EsQ0FBQyxlQUNSN0UsMERBQUEsQ0FBQ29CLHNEQUFLO0lBQ0o4RixJQUFJLEVBQUU2TyxpQkFBa0I7SUFDeEJtTSxPQUFPLEVBQUUvTCw0QkFBNkI7SUFDdEMsbUJBQWdCLG1CQUFtQjtJQUNuQyxvQkFBaUI7RUFBeUIsZ0JBRTFDblcsMERBQUEsQ0FBQ2tCLHFEQUFHO0lBQUNxYixFQUFFLEVBQUFwVixhQUFBLENBQUFBLGFBQUEsS0FBT1AsTUFBTTtNQUFFTCxLQUFLLEVBQUU7SUFBRztFQUFHLGdCQUNqQ3ZHLDBEQUFBLENBQUM4RixZQUFZO0lBQUNtWSxLQUFLLEVBQUMsT0FBTztJQUFDQyxTQUFTLEVBQUM7RUFBTSxnQkFDMUNsZSwwREFBQSxDQUFDVSxxREFBVTtJQUFDaWMsT0FBTyxFQUFFeEcsNEJBQTZCO0lBQUNqUSxLQUFLLEVBQUU7TUFBRUMsUUFBUSxFQUFFLFVBQVU7TUFBRWdZLEtBQUssRUFBRTtJQUFRO0VBQUUsZ0JBQ2pHbmUsMERBQUEsQ0FBQ2tFLGtFQUFLO0lBQUNnQyxLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFO0lBQVU7RUFBRSxDQUFFLENBQzNCLENBQ0EsQ0FBQyxlQUNmMUYsMERBQUEsV0FBSyxDQUFDLGVBQ05BLDBEQUFBO0lBQUtrRyxLQUFLLEVBQUU7TUFBRW1YLE1BQU0sRUFBRSxPQUFPO01BQUVTLE9BQU8sRUFBRSxNQUFNO01BQUVMLFFBQVEsRUFBRSxRQUFRO01BQUU4RSxTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUN4RnZpQiwwREFBQSxDQUFDaUUsd0VBQWlCO0lBQUN1ZSxjQUFjLEVBQUVwTSxvQkFBcUI7SUFBQzhMLE9BQU8sRUFBRS9MO0VBQTZCLENBQUUsQ0FDOUYsQ0FDRixDQUNBLENBQUMsZUFDUm5XLDBEQUFBLENBQUNvQixzREFBSztJQUNKOEYsSUFBSSxFQUFFNFAsaUJBQWtCO0lBQ3hCb0wsT0FBTyxFQUFFakwsNEJBQTZCO0lBQ3RDLG1CQUFnQixtQkFBbUI7SUFDbkMsb0JBQWlCO0VBQXlCLGdCQUUxQ2pYLDBEQUFBLENBQUNrQixxREFBRztJQUFDcWIsRUFBRSxFQUFBcFYsYUFBQSxDQUFBQSxhQUFBLEtBQU9QLE1BQU07TUFBRUwsS0FBSyxFQUFFO0lBQUc7RUFBRyxnQkFDakN2RywwREFBQSxDQUFDOEYsWUFBWTtJQUFDbVksS0FBSyxFQUFDLE9BQU87SUFBQ0MsU0FBUyxFQUFDO0VBQU0sZ0JBQzFDbGUsMERBQUEsQ0FBQ1UscURBQVU7SUFBQ2ljLE9BQU8sRUFBRTFGLDRCQUE2QjtJQUFDL1EsS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUVnWSxLQUFLLEVBQUU7SUFBUTtFQUFFLGdCQUNqR25lLDBEQUFBLENBQUNrRSxrRUFBSztJQUFDZ0MsS0FBSyxFQUFFO01BQUVSLEtBQUssRUFBRTtJQUFVO0VBQUUsQ0FBRSxDQUMzQixDQUNBLENBQUMsZUFDZjFGLDBEQUFBLFdBQUssQ0FBQyxlQUNOQSwwREFBQTtJQUFLa0csS0FBSyxFQUFFO01BQUVtWCxNQUFNLEVBQUUsT0FBTztNQUFFUyxPQUFPLEVBQUUsTUFBTTtNQUFFTCxRQUFRLEVBQUUsUUFBUTtNQUFFOEUsU0FBUyxFQUFFO0lBQVM7RUFBRSxnQkFDeEZ2aUIsMERBQUEsQ0FBQ21FLGdFQUFhO0lBQUNxZSxjQUFjLEVBQUV0TCxnQkFBaUI7SUFBQ2dMLE9BQU8sRUFBRWpMO0VBQTZCLENBQUUsQ0FDdEYsQ0FDRixDQUNBLENBQUMsZUFDUmpYLDBEQUFBLENBQUNvQixzREFBSztJQUNKOEYsSUFBSSxFQUFFeU4sY0FBZTtJQUNyQnVOLE9BQU8sRUFBRTlNLHFCQUFzQjtJQUMvQixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUNwViwwREFBQSxDQUFDa0IscURBQUc7SUFBQ3FiLEVBQUUsRUFBQXBWLGFBQUEsQ0FBQUEsYUFBQSxLQUFPUCxNQUFNO01BQUVMLEtBQUssRUFBRTtJQUFHO0VBQUcsZ0JBQ2pDdkcsMERBQUEsQ0FBQzhGLFlBQVk7SUFBQ21ZLEtBQUssRUFBQyxPQUFPO0lBQUNDLFNBQVMsRUFBQztFQUFNLGdCQUMxQ2xlLDBEQUFBLENBQUNVLHFEQUFVO0lBQUNpYyxPQUFPLEVBQUV2SCxxQkFBc0I7SUFBQ2xQLEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFZ1ksS0FBSyxFQUFFO0lBQVE7RUFBRSxnQkFDMUZuZSwwREFBQSxDQUFDa0Usa0VBQUs7SUFBQ2dDLEtBQUssRUFBRTtNQUFFUixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDM0IsQ0FDQSxDQUFDLGVBQ2YxRiwwREFBQSxXQUFLLENBQUMsZUFDTkEsMERBQUE7SUFBS2tHLEtBQUssRUFBRTtNQUFFbVgsTUFBTSxFQUFFLE9BQU87TUFBRVMsT0FBTyxFQUFFLE1BQU07TUFBRUwsUUFBUSxFQUFFLFFBQVE7TUFBRThFLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQ3hGdmlCLDBEQUFBLENBQUNvRSxrRUFBZTtJQUFDOGQsT0FBTyxFQUFFOU0scUJBQXNCO0lBQUMzTSxFQUFFLEVBQUVzTTtFQUFPLENBQUUsQ0FDM0QsQ0FDRixDQUNBLENBQ0osQ0FBQztBQUVWO0FBRUEsaUVBQWV4TSxpQkFBaUIsRTs7Ozs7Ozs7OztBQ2o1Q25COztBQUViO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLG9FQUFhO0FBQ3BDLGFBQWEsbUJBQU8sQ0FBQyxnRUFBVztBQUNoQyxvQkFBb0IsbUJBQU8sQ0FBQyw4RUFBa0I7QUFDOUM7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDUGE7O0FBRWIsdUJBQXVCLG1CQUFPLENBQUMsOEVBQWtCOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDUmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDaERhOztBQUViOztBQUVBOzs7Ozs7Ozs7OztBQ0phOztBQUViLGVBQWUsbUJBQU8sQ0FBQyxrRUFBWTtBQUNuQyxtQkFBbUIsbUJBQU8sQ0FBQywwRUFBZ0I7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNwQ2E7O0FBRWIsa0JBQWtCLG1CQUFPLENBQUMsd0VBQWU7QUFDekMsZUFBZSxtQkFBTyxDQUFDLGtFQUFZO0FBQ25DLG1CQUFtQixtQkFBTyxDQUFDLDBFQUFnQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4Qyx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDL0dhOztBQUViLGtCQUFrQixtQkFBTyxDQUFDLHdFQUFlO0FBQ3pDLGNBQWMsbUJBQU8sQ0FBQyxnRUFBVzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9EcmFnSW5kaWNhdG9yUm91bmRlZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0VkaXQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L1Nob3BQb3MvU2hvcFBvc1VwZGF0ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9pc0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvaXNTYWZlTnVtYmVyLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9tYWtlT3JkaW5hbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvbWF4U2FmZUludGVnZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL3RvT3JkaW5hbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvdG9Xb3Jkcy5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvdG9Xb3Jkc09yZGluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTEgMThjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0yLThjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTAtNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJtNiA0YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMm0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTAgNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJcIlxufSksICdEcmFnSW5kaWNhdG9yUm91bmRlZCcpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzV6TTIwLjcxIDcuMDRjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0YS45OTU5Ljk5NTkgMCAwIDAtMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1elwiXG59KSwgJ0VkaXQnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGVTaG9wIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlU2hvcCc7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnO1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBQYXBlciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBzdHlsZWQsIEJveCwgQXV0b2NvbXBsZXRlLCBNb2RhbCwgQmFja2Ryb3AsIFRhYmxlQ29udGFpbmVyLCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgRGl2aWRlciwgRm9ybUNvbnRyb2xMYWJlbCwgQ2hlY2tib3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkLCBEcmFnSW5kaWNhdG9yUm91bmRlZCwgRWRpdCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0xvY2FsaXphdGlvblByb3ZpZGVyJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlUGlja2VyJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IEN1c3RvbWVyRm9ybVZpZXcyIGZyb20gJy4uL0N1c3RvbWVyVklldy9DdXN0b21lckZvcm1WaWV3Mic7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IEl0ZW1Gb3JtVmlldzIgZnJvbSAnLi4vSXRlbVZpZXcvSXRlbUZvcm1WaWV3Mic7XHJcbmltcG9ydCBJdGVtVXBkYXRlVmlldzIgZnJvbSAnLi4vSXRlbVZpZXcvSXRlbVVwZGF0ZVZpZXcyJztcclxuaW1wb3J0IG51bWJlclRvV29yZHMgZnJvbSAnbnVtYmVyLXRvLXdvcmRzJ1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIjtcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5cclxuY29uc3QgTGlnaHRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQmxhY2tUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBzdHlsZTIgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA4MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuZnVuY3Rpb24gU2hvcFBvc1VwZGF0ZUZvcm0oKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBhcGlVcmwgPSBgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1pbnZvaWNlYDtcclxuICBjb25zdCBbaW52b2ljZURhdGUsIHNldEludm9pY2VEYXRlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICByZXR1cm4gZGF0ZVxyXG4gIH0pO1xyXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICByZXR1cm4gZGF0ZVxyXG4gIH0pO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmFjdHVyZU51bWJlciwgc2V0RmFjdHVyZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXRlbXMsIFNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3ViVG90YWwsIHNldFN1YlRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbEZDLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG90YWxVU0QsIHNldFRvdGFsVVNEXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjcmVkaXRGQywgc2V0Q3JlZGl0RkNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NyZWRpdFVzZCwgc2V0Q3JlZGl0VXNkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjcmVkaXQsIHNldENyZWRpdF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbVG90YWxBbW91bnRQYWlkLCBzZXRUb3RhbEFtb3VudFBhaWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3JlbWFpbmluZywgc2V0UmVtYWluaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbEludm9pY2UsIHNldFRvdGFsSW52b2ljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYmFsYW5jZUR1ZSwgc2V0QmFsYW5jZUR1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbSXRlbUluZm9ybWF0aW9uLCBzZXRJdGVtSW5mb3JtYXRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXN0b21lck5hbWUsIHNldEN1c3RvbWVyTmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSB1c2VTdGF0ZShcIk1lcmNpIHBvdXIgdm90cmUgdmlzaXRlLiBMZXMgTWFyY2hhbmRpc2VzIHZlbmR1ZXMgbmUgc29udCBuaSByZXByaXNlcyBuaSBlY2hhbmdlZXNcIik7XHJcbiAgY29uc3QgZGF0ZUNvbW1lbnQgPSBuZXcgRGF0ZSgpXHJcbiAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RheCwgc2V0VGF4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtDaGVja1R2QSwgc2V0Q2hlY2tUdkFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1wb3MvJHtpZH1gKVxyXG4gICAgICAgIHNldEN1c3RvbWVyTmFtZShyZXMuZGF0YS5kYXRhLmN1c3RvbWVyTmFtZSk7XHJcbiAgICAgICAgc2V0RmFjdHVyZU51bWJlcihOdW1iZXIocmVzLmRhdGE/LmRhdGE/LmZhY3R1cmVOdW1iZXIgfHwgcmVzLmRhdGE/LmZhY3R1cmVOdW1iZXIgfHwgMCkpO1xyXG4gICAgICAgIHNldFRvdGFsKHJlcy5kYXRhLmRhdGEudG90YWxGQyk7XHJcbiAgICAgICAgU2V0SXRlbXMocmVzLmRhdGEuZGF0YS5pdGVtcyk7XHJcbiAgICAgICAgc2V0VG90YWxVU0QocmVzLmRhdGEuZGF0YS50b3RhbFVTRCk7XHJcbiAgICAgICAgc2V0Q3JlZGl0RkMocmVzLmRhdGEuZGF0YS5jcmVkaXRGQyk7XHJcbiAgICAgICAgc2V0Q3JlZGl0VXNkKHJlcy5kYXRhLmRhdGEuY3JlZGl0VXNkKTtcclxuICAgICAgICBzZXRDcmVkaXQocmVzLmRhdGEuZGF0YS5jcmVkaXQpO1xyXG4gICAgICAgIHNldFRvdGFsQW1vdW50UGFpZChyZXMuZGF0YS5kYXRhLlRvdGFsQW1vdW50UGFpZCk7XHJcbiAgICAgICAgc2V0UmVtYWluaW5nKHJlcy5kYXRhLmRhdGEucmVtYWluaW5nKTtcclxuICAgICAgICBzZXRUb3RhbEludm9pY2UocmVzLmRhdGEuZGF0YS50b3RhbEludm9pY2UpO1xyXG4gICAgICAgIHNldFJhdGUocmVzLmRhdGEuZGF0YS5yYXRlKTtcclxuICAgICAgICAvLyBSb2J1c3QgY2hlY2sgZm9yIENoZWNrVHZBIHByb3BlcnR5XHJcbiAgICAgICAgY29uc3QgaGFzVHZhID0gcmVzLmRhdGEuZGF0YS5DaGVja1R2QSAhPT0gdW5kZWZpbmVkID8gcmVzLmRhdGEuZGF0YS5DaGVja1R2QSA6IHJlcy5kYXRhLmRhdGEuY2hlY2tUdkE7XHJcbiAgICAgICAgc2V0Q2hlY2tUdkEoaGFzVHZhIHx8IGZhbHNlKTtcclxuICAgICAgICBzZXRUYXgocmVzLmRhdGEuZGF0YS50YXggfHwgMCk7XHJcbiAgICAgICAgc2V0SW52b2ljZURhdGUocmVzLmRhdGEuZGF0YS5pbnZvaWNlRGF0ZSk7XHJcbiAgICAgICAgc2V0VGltZShyZXMuZGF0YS5kYXRhLnRpbWUpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hJdGVtID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1gKVxyXG4gICAgICAgIHNldEl0ZW1JbmZvcm1hdGlvbihyZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy50eXBlSXRlbSA9PT0gXCJHb29kc1wiKS5tYXAoKHJvdykgPT4gKHtcclxuICAgICAgICAgIC4uLnJvdyxcclxuICAgICAgICAgIEl0ZW1OdW1iZXI6IHJvdy5pdGVtVXBjLm5ld0NvZGUgKyAnLScgKyBTdHJpbmcocm93Lml0ZW1VcGMuaXRlbU51bWJlcikucGFkU3RhcnQoNiwgJzAnKVxyXG4gICAgICAgIH0pKS5yZXZlcnNlKCkpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoSXRlbSgpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSXRlbSA9IChpZFJvdywgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IG5ld1ZhbHVlXHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93LmlkUm93ID09PSBpZFJvdyA/IHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogc2VsZWN0ZWRPcHRpb25zPy5faWQsXHJcbiAgICAgICAgaXRlbU5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbU5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1Db3N0OiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1Db3N0UHJpY2UgKiByYXRlLFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IHNlbGVjdGVkT3B0aW9ucz8uaXRlbURlc2NyaXB0aW9uLFxyXG4gICAgICBpdGVtUmF0ZTogc2VsZWN0ZWRPcHRpb25zPy5pdGVtU2VsbGluZ1ByaWNlICogcmF0ZSxcclxuICAgICAgc3RvY2s6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbVF1YW50aXR5LFxyXG4gICAgICB1bml0OiBzZWxlY3RlZE9wdGlvbnM/LnVuaXQsXHJcbiAgICB9IDogcm93KSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIGkpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pdGVtc107XHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWU7XHJcbiAgICBpZiAobGlzdFtpXVsnaXRlbURpc2NvdW50J10gPiA1KSB7XHJcbiAgICAgIGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddID0gNVxyXG4gICAgfVxyXG4gICAgbGlzdFtpXVsndG90YWxBbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1RdHknXSAqIGxpc3RbaV1bJ2l0ZW1SYXRlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQ29zdCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbUNvc3QnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnZGlzY291bnQnXSA9IGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gKiBsaXN0W2ldWydpdGVtRGlzY291bnQnXTtcclxuICAgIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSA9IGxpc3RbaV1bJ2Rpc2NvdW50J10gLyAxMDA7XHJcbiAgICBsaXN0W2ldWydpdGVtQW1vdW50J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWyd0b3RhbEFtb3VudCddIC0gbGlzdFtpXVsncGVyY2VudGFnZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWyd0b3RhbEdlbmVyYWxlJ10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtQ29zdCddICogbGlzdFtpXVsnaXRlbUJ1eSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBTZXRJdGVtcyhsaXN0KTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlQ0VPID0gKGUsIGkpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pdGVtc107XHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWU7XHJcbiAgICBsaXN0W2ldWyd0b3RhbEFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbVJhdGUnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxDb3N0J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtQ29zdCddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWydkaXNjb3VudCddID0gbGlzdFtpXVsndG90YWxBbW91bnQnXSAqIGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddO1xyXG4gICAgbGlzdFtpXVsncGVyY2VudGFnZSddID0gbGlzdFtpXVsnZGlzY291bnQnXSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2l0ZW1BbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gLSBsaXN0W2ldWydwZXJjZW50YWdlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsR2VuZXJhbGUnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1Db3N0J10gKiBsaXN0W2ldWydpdGVtQnV5J10pICogMTAwKSAvIDEwMDtcclxuICAgIFNldEl0ZW1zKGxpc3QpO1xyXG4gIH1cclxuICAvL2FkZEl0ZW1cclxuICBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xyXG4gICAgU2V0SXRlbXMoWy4uLml0ZW1zLCB7XHJcbiAgICAgIHR5cGVJdGVtOiAnJyxcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH1dKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdFbmQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdJdGVtcyA9IFsuLi5pdGVtc107XHJcbiAgICBjb25zdCBbcmVtb3ZlZF0gPSBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW1vdmVkKTtcclxuICAgIFNldEl0ZW1zKG5ld0l0ZW1zKVxyXG4gIH07XHJcbiAgY29uc3QgZGVsZXRlSXRlbSA9IGlkUm93ID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLmZpbHRlcigoSXRlbSkgPT4gSXRlbS5pZFJvdyAhPT0gaWRSb3cpKTtcclxuICB9O1xyXG4gIGNvbnN0IGZpbHRlckl0ZW1JbmZvcm1hdGlvbiA9IEl0ZW1JbmZvcm1hdGlvbi5maWx0ZXIob3B0aW9uID0+ICFpdGVtcy5maW5kKChyb3cpID0+IG9wdGlvbi5faWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkICYmIG9wdGlvbi50eXBlSXRlbSA9PT0gXCJHb29kc1wiKSlcclxuICB7LyoqIEl0ZW0gSW5GTyAqLyB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGUgPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBudWxsLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24gPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgaXRlbU5hbWU6ICdlbXB0eSdcclxuICAgICAgfSxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBbb3Blbkl0ZW1VcGRhdGUsIHNldE9wZW5JdGVtVXBkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaWRJdGVtLCBzZXRJZEl0ZW1dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbkl0ZW1VcGRhdGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHNldE9wZW5JdGVtVXBkYXRlKHRydWUpO1xyXG4gICAgc2V0SWRJdGVtKGlkKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlSXRlbVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldE9wZW5JdGVtVXBkYXRlKGZhbHNlKTtcclxuICAgIGlmIChpZEl0ZW0pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2lkSXRlbX1gKVxyXG4gICAgICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaXRlbU5hbWU/Ll9pZCA9PT0gcmVzLmRhdGEuZGF0YS5faWQgPyB7XHJcbiAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgICAgICBfaWQ6IHJlcy5kYXRhLmRhdGEuX2lkLFxyXG4gICAgICAgICAgICBpdGVtTmFtZTogcmVzLmRhdGEuZGF0YS5pdGVtTmFtZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogcmVzLmRhdGEuZGF0YS5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBpdGVtQ29zdDogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgaXRlbVJhdGU6IHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICAgIHN0b2NrOiByZXMuZGF0YS5kYXRhLml0ZW1RdWFudGl0eSxcclxuICAgICAgICAgIHRvdGFsQW1vdW50OiByb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICAgIGRpc2NvdW50OiAocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCxcclxuICAgICAgICAgIHBlcmNlbnRhZ2U6ICgocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCkgLyAxMDAsXHJcbiAgICAgICAgICBpdGVtQW1vdW50OiAocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpIC0gKCgocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCkgLyAxMDApLFxyXG4gICAgICAgICAgdG90YWxDb3N0OiByb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSxcclxuICAgICAgICAgIHRvdGFsR2VuZXJhbGU6IHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSAqIHJvdy5pdGVtQnV5XHJcbiAgICAgICAgfSA6IHJvdykpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICB7LyoqIEl0ZW0gSW5GTyBFbmQgKi8gfVxyXG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2N1c3RvbWVyYClcclxuICAgICAgICBzZXRDdXN0b21lcihyZXMuZGF0YS5kYXRhLnJldmVyc2UoKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoQ3VzdG9tZXIoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTEsIHNldE9wZW5BdXRvY29tcGxldGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUxID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUxKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUxKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUN1c3RvbWVyID0gKG5ld0N1c3RvbWVyKSA9PiB7XHJcbiAgICBzZXRDdXN0b21lcihbbmV3Q3VzdG9tZXIsIC4uLmN1c3RvbWVyXSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlQ3VzdG9tZXIgPSAobmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IGN1c3RvbWVyLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uID09PSBuZXdWYWx1ZSlcclxuICAgIHNldEN1c3RvbWVyTmFtZSh7XHJcbiAgICAgIF9pZDogc2VsZWN0ZWRPcHRpb25zPy5faWQsXHJcbiAgICAgIGN1c3RvbWVyTmFtZTogc2VsZWN0ZWRPcHRpb25zPy5jdXN0b21lckZ1bGxOYW1lIHx8IHNlbGVjdGVkT3B0aW9ucz8uY29tcGFueU5hbWUsXHJcbiAgICAgIGJpbGxpbmdBZGRyZXNzOiBzZWxlY3RlZE9wdGlvbnM/LmJpbGxpbmdBZGRyZXNzLFxyXG4gICAgICBiaWxsaW5nQ2l0eTogc2VsZWN0ZWRPcHRpb25zPy5iaWxsaW5nQ2l0eVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyQ3VzdG9tZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXN0b21lck5hbWUobnVsbClcclxuICB9XHJcbiAgY29uc3QgW29wZW5BdXRvY29tcGxldGUyLCBzZXRPcGVuQXV0b2NvbXBsZXRlMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDcmVhdGVJdGVtID0gKG5ld0l0ZW0pID0+IHtcclxuICAgIHNldEl0ZW1JbmZvcm1hdGlvbihbbmV3SXRlbSwgLi4uSXRlbUluZm9ybWF0aW9uXSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBpZiAoQ2hlY2tUdkEgPT09IHRydWUpIHtcclxuICAgICAgY29uc3QgcmVzdWx0MSA9IGl0ZW1zLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHJvdy5pdGVtQW1vdW50LCAwKVxyXG4gICAgICBzZXRTdWJUb3RhbChyZXN1bHQxKVxyXG4gICAgICAvLyBBZGQgMTYlIFRWQSB0byBuZXdUb3RhbFxyXG4gICAgICBsZXQgdHZhID0gTWF0aC5yb3VuZCgocmVzdWx0MSAqIDAuMTYpICogMTAwKSAvIDEwMDtcclxuICAgICAgc2V0VGF4KHR2YSk7XHJcbiAgICAgIGxldCBUV1RWQSA9IHJlc3VsdDEgKyB0dmFcclxuICAgICAgc2V0VG90YWxJbnZvaWNlKFRXVFZBKVxyXG4gICAgICBsZXQgdXNkQ29udmVydCA9IHRvdGFsVVNEICogcmF0ZVxyXG4gICAgICBsZXQgdG90YWxQYWlkID0gTnVtYmVyKHVzZENvbnZlcnQpICsgTnVtYmVyKHRvdGFsRkMpXHJcbiAgICAgIGxldCBuZXdCYWxhbmNlID0gTWF0aC5yb3VuZCgoVFdUVkEgLSB0b3RhbFBhaWQpICogMTAwKSAvIDEwMFxyXG4gICAgICBsZXQgY3JlZGl0SSA9IE1hdGguYWJzKG5ld0JhbGFuY2UpXHJcbiAgICAgIHNldENyZWRpdChjcmVkaXRJKVxyXG4gICAgICBsZXQgdXNkQ29udmVydDEgPSBjcmVkaXRVc2QgKiByYXRlXHJcbiAgICAgIGxldCB0b3RhbFBhaWQxID0gTnVtYmVyKHVzZENvbnZlcnQxKSArIE51bWJlcihjcmVkaXRGQylcclxuICAgICAgbGV0IHJlc3QgPSBNYXRoLnJvdW5kKChjcmVkaXRJIC0gdG90YWxQYWlkMSkgKiAxMDApIC8gMTAwXHJcbiAgICAgIGxldCB0b3RhbFBhaWRJbmZvID0gdG90YWxQYWlkIC0gdG90YWxQYWlkMVxyXG4gICAgICBzZXRUb3RhbEFtb3VudFBhaWQodG90YWxQYWlkSW5mbylcclxuICAgICAgc2V0UmVtYWluaW5nKHJlc3QpXHJcbiAgICAgIHNldEJhbGFuY2VEdWUobmV3QmFsYW5jZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdDEgPSBpdGVtcy5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyByb3cuaXRlbUFtb3VudCwgMClcclxuICAgICAgc2V0U3ViVG90YWwocmVzdWx0MSlcclxuICAgICAgLy8gQWRkIDE2JSBUVkEgdG8gbmV3VG90YWxcclxuICAgICAgbGV0IHR2YSA9IE1hdGgucm91bmQoKHJlc3VsdDEgKiAwKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgIHNldFRheCh0dmEpO1xyXG4gICAgICBzZXRUb3RhbEludm9pY2UocmVzdWx0MSlcclxuICAgICAgbGV0IHVzZENvbnZlcnQgPSB0b3RhbFVTRCAqIHJhdGVcclxuICAgICAgbGV0IHRvdGFsUGFpZCA9IE51bWJlcih1c2RDb252ZXJ0KSArIE51bWJlcih0b3RhbEZDKVxyXG4gICAgICBsZXQgbmV3QmFsYW5jZSA9IE1hdGgucm91bmQoKHJlc3VsdDEgLSB0b3RhbFBhaWQpICogMTAwKSAvIDEwMFxyXG4gICAgICBsZXQgY3JlZGl0SSA9IE1hdGguYWJzKG5ld0JhbGFuY2UpXHJcbiAgICAgIHNldENyZWRpdChjcmVkaXRJKVxyXG4gICAgICBsZXQgdXNkQ29udmVydDEgPSBjcmVkaXRVc2QgKiByYXRlXHJcbiAgICAgIGxldCB0b3RhbFBhaWQxID0gTnVtYmVyKHVzZENvbnZlcnQxKSArIE51bWJlcihjcmVkaXRGQylcclxuICAgICAgbGV0IHJlc3QgPSBNYXRoLnJvdW5kKChjcmVkaXRJIC0gdG90YWxQYWlkMSkgKiAxMDApIC8gMTAwXHJcbiAgICAgIGxldCB0b3RhbFBhaWRJbmZvID0gdG90YWxQYWlkIC0gdG90YWxQYWlkMVxyXG4gICAgICBzZXRUb3RhbEFtb3VudFBhaWQodG90YWxQYWlkSW5mbylcclxuICAgICAgc2V0UmVtYWluaW5nKHJlc3QpXHJcbiAgICAgIHNldEJhbGFuY2VEdWUobmV3QmFsYW5jZSlcclxuICAgIH1cclxuXHJcbiAgfSwgW0NoZWNrVHZBLCBpdGVtcywgaXRlbXMsIHJhdGUsIHRvdGFsVVNELCB0b3RhbEZDLCBjcmVkaXRVc2QsIGNyZWRpdEZDXSlcclxuXHJcbiAgY29uc3QgW29wZW4xLCBzZXRPcGVuMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbjEodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsVXBkYXRlLCBzZXRMb2FkaW5nT3Blbk1vZGFsVXBkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVPcGVuVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZSh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsVXBkYXRlKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVjaXNpb24gPSAobmF2aWdhdGUpID0+IHtcclxuICAgIC8vTmF2aWdhdGUgQmFzZWQgb24gdGggRGVjaXNpb25cclxuICAgIGlmIChuYXZpZ2F0ZSA9PT0gJ3ByZXZpb3VzJykge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRlID09PSAnc3RheScpIHtcclxuICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uID0gYXN5bmMgKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OdW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogUmVmZXJlbmNlSW5mbyxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIE1vZGlmaWVkICcsXHJcbiAgICAgIHJlYXNvbjogJ1MtMDAnICsgU3RyaW5nKFJlZmVyZW5jZUluZm9OdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIEZvciAnICsgY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZSxcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogZGF0ZUNvbW1lbnRcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgc3RhdHVzID0gJydcclxuICBpZiAocGFyc2VJbnQoYmFsYW5jZUR1ZSkgPiAwICYmIGJhbGFuY2VEdWUgIT09IHRvdGFsSW52b2ljZSkge1xyXG4gICAgc3RhdHVzID0gJ1BhcnRpYWxseS1QYWlkJ1xyXG4gIH0gZWxzZSBpZiAocGFyc2VGbG9hdChiYWxhbmNlRHVlKSA8PSAwKSB7XHJcbiAgICBzdGF0dXMgPSAnUGFpZCdcclxuICB9IGVsc2Uge1xyXG4gICAgc3RhdHVzID0gJ0RyYWZ0J1xyXG4gIH1cclxuICBjb25zdCBpdGVtRmlsdGVyID0gaXRlbXMuZmlsdGVyKChyb3cpID0+IHJvdy5pdGVtTmFtZS5pdGVtTmFtZSAhPT0gJycgJiYgcm93Lml0ZW1OYW1lPy5faWQpXHJcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGhhbmRsZVF0eSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9DYWxjdWxhdGVUb3RhbGApXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNhdmluZygndHJ1ZScpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgY3VzdG9tZXJOYW1lLFxyXG4gICAgICBmYWN0dXJlTnVtYmVyLFxyXG4gICAgICBpbnZvaWNlRGF0ZSxcclxuICAgICAgdGltZSwgVG90YWxBbW91bnRQYWlkLCByZW1haW5pbmcsIGNyZWRpdCwgY3JlZGl0VXNkLCBjcmVkaXRGQyxcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICBpdGVtczogaXRlbUZpbHRlcixcclxuICAgICAgc3ViVG90YWwsXHJcbiAgICAgIHRvdGFsRkMsXHJcbiAgICAgIHRvdGFsVVNELCB0YXgsXHJcbiAgICAgIHJhdGVcclxuICAgICAgLCBiYWxhbmNlRHVlLFxyXG4gICAgICBub3RlLFxyXG4gICAgICB0b3RhbEludm9pY2UsIHVwZGF0ZVM6IGZhbHNlXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtcG9zLyR7aWR9YCwgZGF0YSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAvLyBPcGVuIExvYWRpbmcgVmlld1xyXG4gICAgICAgIGhhbmRsZVF0eSgpXHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mbyA9IHJlcy5kYXRhLmRhdGEuX2lkXHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mb051bWJlciA9IHJlcy5kYXRhLmRhdGEuZmFjdHVyZU51bWJlclxyXG4gICAgICAgIGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbihSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKVxyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgc2V0U2F2aW5nKCcnKVxyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkIG5ldyBpbnZvaWNlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGVTaG9wIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiA0IH19ID5cclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxMHB4JyB9fSBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyTmFtZSAhPT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3RvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGVhckN1c3RvbWVyfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjdXN0b21lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmN1c3RvbWVyRnVsbE5hbWUgPyBvcHRpb24uY3VzdG9tZXJGdWxsTmFtZSA6IG9wdGlvbi5jb21wYW55TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VDdXN0b21lcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkN1c3RvbWVyIE5hbWVcIiByZXF1aXJlZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJmYWN0dXJlTnVtYmVyXCI+SW52b2ljZSBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdmYWN0dXJlTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdmYWN0dXJlTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSW52b2ljZSBOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWN0dXJlTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZhY3R1cmVOdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5JLTwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2ludm9pY2VEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhpbnZvaWNlRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRJbnZvaWNlRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJERC9NTS9ZWVlZXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3RpbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1RpbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKHRpbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0VGltZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJISDptbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBwb3NpdGlvbjogJ2ZpeGVkJywgekluZGV4OiAxLCBmbG9hdDogJ3JpZ2h0JywgcmlnaHQ6ICctNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQWRkXCIgcGxhY2VtZW50PVwidG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkIGNsYXNzTmFtZT0nYnRuMScgc3R5bGU9e3sgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSW5mbzEwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PkRpc2NvdW50ICU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkcm9wcGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17SXRlbS5pZFJvd30gZHJhZ2dhYmxlSWQ9e2Bkcm9wcGFibGUke0l0ZW0uaWRSb3d9YH0gaW5kZXg9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs2fT48VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmV3RGVzY3JpcHRpb24nIGlkPSduZXdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLm5ld0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGhpZGRlbj17SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPT09ICdlbXB0eScgOiAnJ30gc3g9e3sgZm9udFNpemU6ICcyM3B4JyB9fT57SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUudG9VcHBlckNhc2UoKSA6ICcnfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5faWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiRWRpdFwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuSXRlbVVwZGF0ZShJdGVtLml0ZW1OYW1lLl9pZCl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlckl0ZW1JbmZvcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5pdGVtVXBjLm5ld0NvZGUgKyAnLScgKyBTdHJpbmcob3B0aW9uLml0ZW1VcGMuaXRlbU51bWJlcikucGFkU3RhcnQoNiwgJzAnKSArICcgLyAnICsgb3B0aW9uLml0ZW1OYW1lICsgJyAvICcgKyBvcHRpb24uaXRlbUJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9PntvcHRpb24uaXRlbVVwYy5uZXdDb2RlICsgJy0nICsgU3RyaW5nKG9wdGlvbi5pdGVtVXBjLml0ZW1OdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIC8gJyArIG9wdGlvbi5pdGVtTmFtZSArICcgLyAnICsgb3B0aW9uLml0ZW1CcmFuZH08L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUobmV3SW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9eyhvcHRpb25zLCB7IGlucHV0VmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1CcmFuZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLkl0ZW1OdW1iZXIudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VJdGVtKEl0ZW0uaWRSb3csIG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFwZXJDb21wb25lbnQ9eyh7IGNoaWxkcmVuLCAuLi5vdGhlciB9KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREIE5FVyBJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMzAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYXJzZUZsb2F0KEl0ZW0uc3RvY2spIDw9IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1RdHknIGlkPSdpdGVtUXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPD0gSXRlbS5zdG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlQ0VPKGUsIGkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1SYXRlJyBpZD0naXRlbVJhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1SYXRlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURpc2NvdW50JyBpZD0naXRlbURpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzEgdG8gNSAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPSdhbW91bnRUb3RhbEludm9pY2UnPntJdGVtLml0ZW1BbW91bnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5EaXNjb3VudCAlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRyb3BwYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChJdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17SXRlbS5pZFJvd30gZHJhZ2dhYmxlSWQ9e2Bkcm9wcGFibGUke0l0ZW0uaWRSb3d9YH0gaW5kZXg9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezZ9PjxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmV3RGVzY3JpcHRpb24nIGlkPSduZXdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0ubmV3RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBoaWRkZW49e0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID09PSAnZW1wdHknIDogJyd9IHN4PXt7IGZvbnRTaXplOiAnMjNweCcgfX0+e0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvVXBwZXJDYXNlKCkgOiAnJ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlckl0ZW1JbmZvcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLml0ZW1VcGMubmV3Q29kZSArICctJyArIFN0cmluZyhvcHRpb24uaXRlbVVwYy5pdGVtTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyAvICcgKyBvcHRpb24uaXRlbU5hbWUgKyAnIC8gJyArIG9wdGlvbi5pdGVtQnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfT57b3B0aW9uLml0ZW1VcGMubmV3Q29kZSArICctJyArIFN0cmluZyhvcHRpb24uaXRlbVVwYy5pdGVtTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyAvICcgKyBvcHRpb24uaXRlbU5hbWUgKyAnIC8gJyArIG9wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50LCBuZXdJbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMsIHsgaW5wdXRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtQnJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uSXRlbU51bWJlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZUl0ZW0oSXRlbS5pZFJvdywgbmV3VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICczMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYXJzZUZsb2F0KEl0ZW0uc3RvY2spIDw9IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVF0eScgaWQ9J2l0ZW1RdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPD0gSXRlbS5zdG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoZSwgaSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPSdhbW91bnRUb3RhbEludm9pY2UnPntJdGVtLml0ZW1SYXRlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EaXNjb3VudCcgaWQ9J2l0ZW1EaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMSB0byA1ICUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD0nYW1vdW50VG90YWxJbnZvaWNlJz57SXRlbS5pdGVtQW1vdW50LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaXJzdFRhYmxlXCIgc3R5bGU9e3sgd2lkdGg6ICc4MDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0gY29sU3Bhbj17Mn0+VGF4IERldGFpbHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRyIHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+ICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2FkanVzdG1lbnQnIGlkPSdhZGp1c3RtZW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGp1c3RtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRBZGp1c3RtZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzI1MHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdhZGp1c3RtZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdhZGp1c3RtZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YWRqdXN0bWVudE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0QWRqdXN0bWVudE51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlRvdGFsIEFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT4gRkMge3N1YlRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gKCQgeyhzdWJUb3RhbCAvIHJhdGUpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlRWQSBAIDE2ICVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Q2hlY2tUdkF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrVHZBKGUudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZDIHt0YXgudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSAoJCB7KHRheCAvIHJhdGUpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+VG90YWwgR2VuZXJhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGQyB7dG90YWxJbnZvaWNlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gKCQgeyh0b3RhbEludm9pY2UgLyByYXRlKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PkNhc2ggRkM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdyaWdodCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGdhcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnRQYWlkRkMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbEZDfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvdGFsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PkNhc2ggVVNEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAncmlnaHQnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYW1vdW50UGFpZFVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsVVNEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvdGFsVVNEKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlRHVlID49IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJywgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+QmFsYW5jZSBEdWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGQyB7YmFsYW5jZUR1ZS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9ICgkIHsoYmFsYW5jZUR1ZSAvIHJhdGUpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJywgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+QW1vdW50IHRvIFJldHVybjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZDIHtNYXRoLmFicyhiYWxhbmNlRHVlKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9ICgkIHtNYXRoLmFicyhiYWxhbmNlRHVlIC8gcmF0ZSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlRHVlIDwgMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlJldHVybiBGQzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdyaWdodCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGdhcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Ftb3VudFBhaWRGQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjcmVkaXRGQ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlZGl0RkMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlJldHVybiBVU0Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAncmlnaHQnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnRQYWlkRkMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGl0VXNkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDcmVkaXRVc2QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PnJlbWFpbmluZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZDIHtyZW1haW5pbmcudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSAoJCB7KHJlbWFpbmluZyAvIHJhdGUpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J25vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0ludm9pY2UgTm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc1MCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNhdmluZyAhPT0gJ3RydWUnID8gPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj4gOiA8cCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5TYXZpbmcuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbjF9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VCYWNrfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkRvIHlvdSB3YW50IHRvIHN0b3AgY3JlYXRpbmcgSW52b2ljZSA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGUgOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiPiBJZiB5b3Ugc3RvcCBjcmVhdGluZyB3aXRob3V0IHNhdmluZywgYWxsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3Q8L3NwYW4+PC9wPiAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKC0xKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19Pk5vPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3ByZXZpb3VzJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5TYXZpbmcgRmFpbGVkPC9oMj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgVHJ5IEFnYWluXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbFVwZGF0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVwZGF0ZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VVcGRhdGV9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkF1dG9jb21wbGV0ZTF9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUyLCB3aWR0aDogODAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzYwMHB4JywgcGFkZGluZzogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgIDxDdXN0b21lckZvcm1WaWV3MiBvbkNyZWF0ZU9wdGlvbj17aGFuZGxlQ3JlYXRlQ3VzdG9tZXJ9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTF9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUyLCB3aWR0aDogODAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzYwMHB4JywgcGFkZGluZzogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgIDxJdGVtRm9ybVZpZXcyIG9uQ3JlYXRlT3B0aW9uPXtoYW5kbGVDcmVhdGVJdGVtfSBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5JdGVtVXBkYXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlSXRlbVVwZGF0ZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUyLCB3aWR0aDogODAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBwYWRkaW5nOiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPEl0ZW1VcGRhdGVWaWV3MiBvbkNsb3NlPXtoYW5kbGVDbG9zZUl0ZW1VcGRhdGV9IGlkPXtpZEl0ZW19IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcFBvc1VwZGF0ZUZvcm1cclxuIiwiJ3VzZSBzdHJpY3QnOyBcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdG9PcmRpbmFsOiByZXF1aXJlKCcuL3RvT3JkaW5hbCcpLFxuICAgIHRvV29yZHM6IHJlcXVpcmUoJy4vdG9Xb3JkcycpLFxuICAgIHRvV29yZHNPcmRpbmFsOiByZXF1aXJlKCcuL3RvV29yZHNPcmRpbmFsJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFNpbXBsaWZpZWQgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbWFybHVuNzgvODg1ZWIwMDIxZTk4MGM2Y2UwZmJcbmZ1bmN0aW9uIGlzRmluaXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuICEodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCB2YWx1ZSAhPT0gdmFsdWUgfHwgdmFsdWUgPT09IEluZmluaXR5IHx8IHZhbHVlID09PSAtSW5maW5pdHkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRmluaXRlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IHJlcXVpcmUoJy4vbWF4U2FmZUludGVnZXInKTtcblxuZnVuY3Rpb24gaXNTYWZlTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTWF0aC5hYnModmFsdWUpIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTYWZlTnVtYmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRU5EU19XSVRIX0RPVUJMRV9aRVJPX1BBVFRFUk4gPSAvKGh1bmRyZWR8dGhvdXNhbmR8KG18Ynx0cnxxdWFkcilpbGxpb24pJC87XG52YXIgRU5EU19XSVRIX1RFRU5fUEFUVEVSTiA9IC90ZWVuJC87XG52YXIgRU5EU19XSVRIX1lfUEFUVEVSTiA9IC95JC87XG52YXIgRU5EU19XSVRIX1pFUk9fVEhST1VHSF9UV0VMVkVfUEFUVEVSTiA9IC8oemVyb3xvbmV8dHdvfHRocmVlfGZvdXJ8Zml2ZXxzaXh8c2V2ZW58ZWlnaHR8bmluZXx0ZW58ZWxldmVufHR3ZWx2ZSkkLztcbnZhciBvcmRpbmFsTGVzc1RoYW5UaGlydGVlbiA9IHtcbiAgICB6ZXJvOiAnemVyb3RoJyxcbiAgICBvbmU6ICdmaXJzdCcsXG4gICAgdHdvOiAnc2Vjb25kJyxcbiAgICB0aHJlZTogJ3RoaXJkJyxcbiAgICBmb3VyOiAnZm91cnRoJyxcbiAgICBmaXZlOiAnZmlmdGgnLFxuICAgIHNpeDogJ3NpeHRoJyxcbiAgICBzZXZlbjogJ3NldmVudGgnLFxuICAgIGVpZ2h0OiAnZWlnaHRoJyxcbiAgICBuaW5lOiAnbmludGgnLFxuICAgIHRlbjogJ3RlbnRoJyxcbiAgICBlbGV2ZW46ICdlbGV2ZW50aCcsXG4gICAgdHdlbHZlOiAndHdlbGZ0aCdcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBudW1iZXItd29yZCBpbnRvIGFuIG9yZGluYWwgbnVtYmVyLXdvcmQuXG4gKiBAZXhhbXBsZSBtYWtlT3JkaW5hbCgnb25lJykgPT4gJ2ZpcnN0J1xuICogQHBhcmFtIHtzdHJpbmd9IHdvcmRzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBtYWtlT3JkaW5hbCh3b3Jkcykge1xuICAgIC8vIEVuZHMgd2l0aCAqMDAgKDEwMCwgMTAwMCwgZXRjLikgb3IgKnRlZW4gKDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5KVxuICAgIGlmIChFTkRTX1dJVEhfRE9VQkxFX1pFUk9fUEFUVEVSTi50ZXN0KHdvcmRzKSB8fCBFTkRTX1dJVEhfVEVFTl9QQVRURVJOLnRlc3Qod29yZHMpKSB7XG4gICAgICAgIHJldHVybiB3b3JkcyArICd0aCc7XG4gICAgfVxuICAgIC8vIEVuZHMgd2l0aCAqeSAoMjAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgODAsIDkwKVxuICAgIGVsc2UgaWYgKEVORFNfV0lUSF9ZX1BBVFRFUk4udGVzdCh3b3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHdvcmRzLnJlcGxhY2UoRU5EU19XSVRIX1lfUEFUVEVSTiwgJ2lldGgnKTtcbiAgICB9XG4gICAgLy8gRW5kcyB3aXRoIG9uZSB0aHJvdWdoIHR3ZWx2ZVxuICAgIGVsc2UgaWYgKEVORFNfV0lUSF9aRVJPX1RIUk9VR0hfVFdFTFZFX1BBVFRFUk4udGVzdCh3b3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHdvcmRzLnJlcGxhY2UoRU5EU19XSVRIX1pFUk9fVEhST1VHSF9UV0VMVkVfUEFUVEVSTiwgcmVwbGFjZVdpdGhPcmRpbmFsVmFyaWFudCk7XG4gICAgfVxuICAgIHJldHVybiB3b3Jkcztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVdpdGhPcmRpbmFsVmFyaWFudChtYXRjaCwgbnVtYmVyV29yZCkge1xuICAgIHJldHVybiBvcmRpbmFsTGVzc1RoYW5UaGlydGVlbltudW1iZXJXb3JkXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYWtlT3JkaW5hbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1BWF9TQUZFX0lOVEVHRVI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaXNGaW5pdGUnKTtcbnZhciBpc1NhZmVOdW1iZXIgPSByZXF1aXJlKCcuL2lzU2FmZU51bWJlcicpO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGludGVnZXIgaW50byBhIHN0cmluZyB3aXRoIGFuIG9yZGluYWwgcG9zdGZpeC5cbiAqIElmIG51bWJlciBpcyBkZWNpbWFsLCB0aGUgZGVjaW1hbHMgd2lsbCBiZSByZW1vdmVkLlxuICogQGV4YW1wbGUgdG9PcmRpbmFsKDEyKSA9PiAnMTJ0aCdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b09yZGluYWwobnVtYmVyKSB7XG4gICAgdmFyIG51bSA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuXG4gICAgaWYgKCFpc0Zpbml0ZShudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnTm90IGEgZmluaXRlIG51bWJlcjogJyArIG51bWJlciArICcgKCcgKyB0eXBlb2YgbnVtYmVyICsgJyknXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmICghaXNTYWZlTnVtYmVyKG51bSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICAnSW5wdXQgaXMgbm90IGEgc2FmZSBudW1iZXIsIGl04oCZcyBlaXRoZXIgdG9vIGxhcmdlIG9yIHRvbyBzbWFsbC4nXG4gICAgICAgICk7XG4gICAgfVxuICAgIHZhciBzdHIgPSBTdHJpbmcobnVtKTtcbiAgICB2YXIgbGFzdFR3b0RpZ2l0cyA9IE1hdGguYWJzKG51bSAlIDEwMCk7XG4gICAgdmFyIGJldHdlZW5FbGV2ZW5BbmRUaGlydGVlbiA9IGxhc3RUd29EaWdpdHMgPj0gMTEgJiYgbGFzdFR3b0RpZ2l0cyA8PSAxMztcbiAgICB2YXIgbGFzdENoYXIgPSBzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gc3RyICsgKGJldHdlZW5FbGV2ZW5BbmRUaGlydGVlbiA/ICd0aCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICcxJyA/ICdzdCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICcyJyA/ICduZCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICczJyA/ICdyZCdcbiAgICAgICAgICAgIDogJ3RoJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9PcmRpbmFsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWFrZU9yZGluYWwgPSByZXF1aXJlKCcuL21ha2VPcmRpbmFsJyk7XG52YXIgaXNGaW5pdGUgPSByZXF1aXJlKCcuL2lzRmluaXRlJyk7XG52YXIgaXNTYWZlTnVtYmVyID0gcmVxdWlyZSgnLi9pc1NhZmVOdW1iZXInKTtcblxudmFyIFRFTiA9IDEwO1xudmFyIE9ORV9IVU5EUkVEID0gMTAwO1xudmFyIE9ORV9USE9VU0FORCA9IDEwMDA7XG52YXIgT05FX01JTExJT04gPSAxMDAwMDAwO1xudmFyIE9ORV9CSUxMSU9OID0gMTAwMDAwMDAwMDsgICAgICAgICAgIC8vICAgICAgICAgMS4wMDAuMDAwLjAwMCAoOSlcbnZhciBPTkVfVFJJTExJT04gPSAxMDAwMDAwMDAwMDAwOyAgICAgICAvLyAgICAgMS4wMDAuMDAwLjAwMC4wMDAgKDEyKVxudmFyIE9ORV9RVUFEUklMTElPTiA9IDEwMDAwMDAwMDAwMDAwMDA7IC8vIDEuMDAwLjAwMC4wMDAuMDAwLjAwMCAoMTUpXG52YXIgTUFYID0gOTAwNzE5OTI1NDc0MDk5MjsgICAgICAgICAgICAgLy8gOS4wMDcuMTk5LjI1NC43NDAuOTkyICgxNSlcblxudmFyIExFU1NfVEhBTl9UV0VOVFkgPSBbXG4gICAgJ3plcm8nLCAnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJywgJ2ZpdmUnLCAnc2l4JywgJ3NldmVuJywgJ2VpZ2h0JywgJ25pbmUnLCAndGVuJyxcbiAgICAnZWxldmVuJywgJ3R3ZWx2ZScsICd0aGlydGVlbicsICdmb3VydGVlbicsICdmaWZ0ZWVuJywgJ3NpeHRlZW4nLCAnc2V2ZW50ZWVuJywgJ2VpZ2h0ZWVuJywgJ25pbmV0ZWVuJ1xuXTtcblxudmFyIFRFTlRIU19MRVNTX1RIQU5fSFVORFJFRCA9IFtcbiAgICAnemVybycsICd0ZW4nLCAndHdlbnR5JywgJ3RoaXJ0eScsICdmb3J0eScsICdmaWZ0eScsICdzaXh0eScsICdzZXZlbnR5JywgJ2VpZ2h0eScsICduaW5ldHknXG5dO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGludGVnZXIgaW50byB3b3Jkcy5cbiAqIElmIG51bWJlciBpcyBkZWNpbWFsLCB0aGUgZGVjaW1hbHMgd2lsbCBiZSByZW1vdmVkLlxuICogQGV4YW1wbGUgdG9Xb3JkcygxMikgPT4gJ3R3ZWx2ZSdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthc09yZGluYWxdIC0gRGVwcmVjYXRlZCwgdXNlIHRvV29yZHNPcmRpbmFsKCkgaW5zdGVhZCFcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRvV29yZHMobnVtYmVyLCBhc09yZGluYWwpIHtcbiAgICB2YXIgd29yZHM7XG4gICAgdmFyIG51bSA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuXG4gICAgaWYgKCFpc0Zpbml0ZShudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnTm90IGEgZmluaXRlIG51bWJlcjogJyArIG51bWJlciArICcgKCcgKyB0eXBlb2YgbnVtYmVyICsgJyknXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmICghaXNTYWZlTnVtYmVyKG51bSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICAnSW5wdXQgaXMgbm90IGEgc2FmZSBudW1iZXIsIGl04oCZcyBlaXRoZXIgdG9vIGxhcmdlIG9yIHRvbyBzbWFsbC4nXG4gICAgICAgICk7XG4gICAgfVxuICAgIHdvcmRzID0gZ2VuZXJhdGVXb3JkcyhudW0pO1xuICAgIHJldHVybiBhc09yZGluYWwgPyBtYWtlT3JkaW5hbCh3b3JkcykgOiB3b3Jkcztcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVXb3JkcyhudW1iZXIpIHtcbiAgICB2YXIgcmVtYWluZGVyLCB3b3JkLFxuICAgICAgICB3b3JkcyA9IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIFdl4oCZcmUgZG9uZVxuICAgIGlmIChudW1iZXIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICF3b3JkcyA/ICd6ZXJvJyA6IHdvcmRzLmpvaW4oJyAnKS5yZXBsYWNlKC8sJC8sICcnKTtcbiAgICB9XG4gICAgLy8gRmlyc3QgcnVuXG4gICAgaWYgKCF3b3Jkcykge1xuICAgICAgICB3b3JkcyA9IFtdO1xuICAgIH1cbiAgICAvLyBJZiBuZWdhdGl2ZSwgcHJlcGVuZCDigJxtaW51c+KAnVxuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIHdvcmRzLnB1c2goJ21pbnVzJyk7XG4gICAgICAgIG51bWJlciA9IE1hdGguYWJzKG51bWJlcik7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlciA8IDIwKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IDA7XG4gICAgICAgIHdvcmQgPSBMRVNTX1RIQU5fVFdFTlRZW251bWJlcl07XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9IVU5EUkVEKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIFRFTjtcbiAgICAgICAgd29yZCA9IFRFTlRIU19MRVNTX1RIQU5fSFVORFJFRFtNYXRoLmZsb29yKG51bWJlciAvIFRFTildO1xuICAgICAgICAvLyBJbiBjYXNlIG9mIHJlbWFpbmRlciwgd2UgbmVlZCB0byBoYW5kbGUgaXQgaGVyZSB0byBiZSBhYmxlIHRvIGFkZCB0aGUg4oCcLeKAnVxuICAgICAgICBpZiAocmVtYWluZGVyKSB7XG4gICAgICAgICAgICB3b3JkICs9ICctJyArIExFU1NfVEhBTl9UV0VOVFlbcmVtYWluZGVyXTtcbiAgICAgICAgICAgIHJlbWFpbmRlciA9IDA7XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1RIT1VTQU5EKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9IVU5EUkVEO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9IVU5EUkVEKSkgKyAnIGh1bmRyZWQnO1xuXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPCBPTkVfTUlMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfVEhPVVNBTkQ7XG4gICAgICAgIHdvcmQgPSBnZW5lcmF0ZVdvcmRzKE1hdGguZmxvb3IobnVtYmVyIC8gT05FX1RIT1VTQU5EKSkgKyAnIHRob3VzYW5kLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9CSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9NSUxMSU9OO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9NSUxMSU9OKSkgKyAnIG1pbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1RSSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9CSUxMSU9OO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9CSUxMSU9OKSkgKyAnIGJpbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1FVQURSSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9UUklMTElPTjtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfVFJJTExJT04pKSArICcgdHJpbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDw9IE1BWCkge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfUVVBRFJJTExJT047XG4gICAgICAgIHdvcmQgPSBnZW5lcmF0ZVdvcmRzKE1hdGguZmxvb3IobnVtYmVyIC8gT05FX1FVQURSSUxMSU9OKSkgK1xuICAgICAgICAnIHF1YWRyaWxsaW9uLCc7XG4gICAgfVxuXG4gICAgd29yZHMucHVzaCh3b3JkKTtcbiAgICByZXR1cm4gZ2VuZXJhdGVXb3JkcyhyZW1haW5kZXIsIHdvcmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1dvcmRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWFrZU9yZGluYWwgPSByZXF1aXJlKCcuL21ha2VPcmRpbmFsJyk7XG52YXIgdG9Xb3JkcyA9IHJlcXVpcmUoJy4vdG9Xb3JkcycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyIGludG8gb3JkaW5hbCB3b3Jkcy5cbiAqIEBleGFtcGxlIHRvV29yZHNPcmRpbmFsKDEyKSA9PiAndHdlbGZ0aCdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1dvcmRzT3JkaW5hbChudW1iZXIpIHtcbiAgICB2YXIgd29yZHMgPSB0b1dvcmRzKG51bWJlcik7XG4gICAgcmV0dXJuIG1ha2VPcmRpbmFsKHdvcmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1dvcmRzT3JkaW5hbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZVNob3AiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJEZWxldGVJY29uIiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlBhcGVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkJveCIsIkF1dG9jb21wbGV0ZSIsIk1vZGFsIiwiQmFja2Ryb3AiLCJUYWJsZUNvbnRhaW5lciIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIkRpdmlkZXIiLCJGb3JtQ29udHJvbExhYmVsIiwiQ2hlY2tib3giLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJBZGQiLCJBcnJvd1Vwd2FyZE91dGxpbmVkIiwiRHJhZ0luZGljYXRvclJvdW5kZWQiLCJFZGl0IiwiUmVtb3ZlQ2lyY2xlT3V0bGluZSIsIkVORFBPSU5UX1VSTCIsInY0IiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJEZW1vQ29udGFpbmVyIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJBZGFwdGVyRGF5anMiLCJEYXRlUGlja2VyIiwiZGF5anMiLCJBcnJvd0JhY2siLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiTG9hZGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsIkN1c3RvbWVyRm9ybVZpZXcyIiwiQ2xvc2UiLCJJdGVtRm9ybVZpZXcyIiwiSXRlbVVwZGF0ZVZpZXcyIiwibnVtYmVyVG9Xb3JkcyIsIkRyYWdEcm9wQ29udGV4dCIsIkRyYWdnYWJsZSIsIkRyb3BwYWJsZSIsIk1lc3NhZ2VBZG1pblZpZXciLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsIkxpZ2h0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiQmxhY2tUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsInN0eWxlMiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjUiLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjYiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJTaG9wUG9zVXBkYXRlRm9ybSIsIl91c2VQYXJhbXMiLCJpZCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY3IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJhcGlVcmwiLCJfdXNlU3RhdGUiLCJkYXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImludm9pY2VEYXRlIiwic2V0SW52b2ljZURhdGUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInRpbWUiLCJzZXRUaW1lIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJmYWN0dXJlTnVtYmVyIiwic2V0RmFjdHVyZU51bWJlciIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiaXRlbXMiLCJTZXRJdGVtcyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwic3ViVG90YWwiLCJzZXRTdWJUb3RhbCIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsInRvdGFsRkMiLCJzZXRUb3RhbCIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJ0b3RhbFVTRCIsInNldFRvdGFsVVNEIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImNyZWRpdEZDIiwic2V0Q3JlZGl0RkMiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiY3JlZGl0VXNkIiwic2V0Q3JlZGl0VXNkIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsImNyZWRpdCIsInNldENyZWRpdCIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJUb3RhbEFtb3VudFBhaWQiLCJzZXRUb3RhbEFtb3VudFBhaWQiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwicmVtYWluaW5nIiwic2V0UmVtYWluaW5nIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsInRvdGFsSW52b2ljZSIsInNldFRvdGFsSW52b2ljZSIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJiYWxhbmNlRHVlIiwic2V0QmFsYW5jZUR1ZSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJJdGVtSW5mb3JtYXRpb24iLCJzZXRJdGVtSW5mb3JtYXRpb24iLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwiY3VzdG9tZXJOYW1lIiwic2V0Q3VzdG9tZXJOYW1lIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsIm5vdGUiLCJzZXROb3RlIiwiZGF0ZUNvbW1lbnQiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwicmF0ZSIsInNldFJhdGUiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2IiwidGF4Iiwic2V0VGF4IiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsIkNoZWNrVHZBIiwic2V0Q2hlY2tUdkEiLCJmZXRjaERhdGEiLCJfcmVmOCIsIl9yZXMkZGF0YSIsIl9yZXMkZGF0YTIiLCJOdW1iZXIiLCJoYXNUdmEiLCJ1bmRlZmluZWQiLCJjaGVja1R2QSIsImZldGNoSXRlbSIsIl9yZWY5IiwiX3JlcyRkYXRhMyIsImZpbHRlciIsInJvdyIsInR5cGVJdGVtIiwibWFwIiwiSXRlbU51bWJlciIsIml0ZW1VcGMiLCJuZXdDb2RlIiwiU3RyaW5nIiwiaXRlbU51bWJlciIsInBhZFN0YXJ0IiwicmV2ZXJzZSIsImhhbmRsZUNoYW5nZUl0ZW0iLCJpZFJvdyIsIm5ld1ZhbHVlIiwic2VsZWN0ZWRPcHRpb25zIiwiaXRlbU5hbWUiLCJfaWQiLCJpdGVtQ29zdCIsIml0ZW1Db3N0UHJpY2UiLCJpdGVtRGVzY3JpcHRpb24iLCJpdGVtUmF0ZSIsIml0ZW1TZWxsaW5nUHJpY2UiLCJzdG9jayIsIml0ZW1RdWFudGl0eSIsInVuaXQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiaSIsIl9lJHRhcmdldCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImxpc3QiLCJNYXRoIiwicm91bmQiLCJoYW5kbGVDaGFuZ2VDRU8iLCJfZSR0YXJnZXQyIiwiYWRkSXRlbSIsIml0ZW1EaXNjb3VudCIsIml0ZW1RdHkiLCJpdGVtQW1vdW50IiwidG90YWxBbW91bnQiLCJkaXNjb3VudCIsInBlcmNlbnRhZ2UiLCJpdGVtQnV5IiwiaXRlbVdlaWdodCIsInRvdGFsR2VuZXJhbGUiLCJ0b3RhbENvc3QiLCJpdGVtT3V0IiwibmV3SXRlbU91dCIsImhhbmRsZURyYWdFbmQiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsIm5ld0l0ZW1zIiwiX25ld0l0ZW1zJHNwbGljZSIsInNwbGljZSIsInNvdXJjZSIsImluZGV4IiwiX25ld0l0ZW1zJHNwbGljZTIiLCJyZW1vdmVkIiwiZGVsZXRlSXRlbSIsIkl0ZW0iLCJmaWx0ZXJJdGVtSW5mb3JtYXRpb24iLCJvcHRpb24iLCJmaW5kIiwiX3JvdyRpdGVtTmFtZSIsImhhbmRsZVNob3dBdXRvY29tcGxldGUiLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24iLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwib3Blbkl0ZW1VcGRhdGUiLCJzZXRPcGVuSXRlbVVwZGF0ZSIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJpZEl0ZW0iLCJzZXRJZEl0ZW0iLCJoYW5kbGVPcGVuSXRlbVVwZGF0ZSIsIl9yZWYwIiwiX3giLCJoYW5kbGVDbG9zZUl0ZW1VcGRhdGUiLCJfcmVmMSIsIl9yb3ckaXRlbU5hbWUyIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJmZXRjaEN1c3RvbWVyIiwiX3JlZjEwIiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsIm9wZW5BdXRvY29tcGxldGUxIiwic2V0T3BlbkF1dG9jb21wbGV0ZTEiLCJoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTEiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxIiwiaGFuZGxlQ3JlYXRlQ3VzdG9tZXIiLCJuZXdDdXN0b21lciIsImhhbmRsZUNoYW5nZUN1c3RvbWVyIiwiY3VzdG9tZXJGdWxsTmFtZSIsImNvbXBhbnlOYW1lIiwiYmlsbGluZ0FkZHJlc3MiLCJiaWxsaW5nQ2l0eSIsImhhbmRsZUNsZWFyQ3VzdG9tZXIiLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4Iiwib3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVDcmVhdGVJdGVtIiwibmV3SXRlbSIsInJlc3VsdDEiLCJyZWR1Y2UiLCJzdW0iLCJ0dmEiLCJUV1RWQSIsInVzZENvbnZlcnQiLCJ0b3RhbFBhaWQiLCJuZXdCYWxhbmNlIiwiY3JlZGl0SSIsImFicyIsInVzZENvbnZlcnQxIiwidG90YWxQYWlkMSIsInJlc3QiLCJ0b3RhbFBhaWRJbmZvIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsIm9wZW4xIiwic2V0T3BlbjEiLCJoYW5kbGVPcGVuQmFjayIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VCYWNrIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlNTMiLCJfdXNlU3RhdGU1NCIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlNTUiLCJfdXNlU3RhdGU1NiIsImxvYWRpbmdPcGVuTW9kYWxVcGRhdGUiLCJzZXRMb2FkaW5nT3Blbk1vZGFsVXBkYXRlIiwiX3VzZVN0YXRlNTciLCJfdXNlU3RhdGU1OCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZU9wZW5VcGRhdGUiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVDbG9zZVVwZGF0ZSIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVEZWNpc2lvbiIsImhpc3RvcnkiLCJiYWNrIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjExIiwiUmVmZXJlbmNlSW5mbyIsIlJlZmVyZW5jZUluZm9OdW1iZXIiLCJpZEluZm8iLCJwZXJzb24iLCJyZWFzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwicG9zdCIsImxvZyIsIl94MiIsIl94MyIsInN0YXR1cyIsInBhcnNlSW50IiwicGFyc2VGbG9hdCIsIml0ZW1GaWx0ZXIiLCJfcm93JGl0ZW1OYW1lMyIsIl91c2VTdGF0ZTU5IiwiX3VzZVN0YXRlNjAiLCJzYXZpbmciLCJzZXRTYXZpbmciLCJoYW5kbGVRdHkiLCJfcmVmMTIiLCJoYW5kbGVTdWJtaXQiLCJfcmVmMTMiLCJ1cGRhdGVTIiwicHV0IiwiX3g0IiwiX1JlYWN0JHVzZVN0YXRlMyIsIl9SZWFjdCR1c2VTdGF0ZTQiLCJzaWRlQmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZURyYXdlciIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm9uQ2xpY2siLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwicGFkZGluZyIsIml0ZW0iLCJ4cyIsInRpdGxlIiwicGxhY2VtZW50IiwiZmxvYXQiLCJkaXNhYmxlQ2xlYXJhYmxlIiwib3B0aW9ucyIsImdldE9wdGlvbkxhYmVsIiwib25DaGFuZ2UiLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsImxhYmVsIiwicmVxdWlyZWQiLCJodG1sRm9yIiwidHlwZSIsInN0YXJ0QWRvcm5tZW50IiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwiZm9ybWF0IiwicmlnaHQiLCJvbkRyYWdFbmQiLCJ0ZXh0QWxpZ24iLCJkcm9wcGFibGVJZCIsInByb3ZpZGVkIiwic25hcHNob3QiLCJkcm9wcGFibGVQcm9wcyIsInJlZiIsImlubmVyUmVmIiwia2V5IiwiZHJhZ2dhYmxlSWQiLCJkcmFnZ2FibGVQcm9wcyIsIm5ld0Rlc2NyaXB0aW9uIiwiRnJhZ21lbnQiLCJkcmFnSGFuZGxlUHJvcHMiLCJjb2xTcGFuIiwic2l6ZSIsImRpc2FibGVkIiwiY3Vyc29yIiwiaGlkZGVuIiwidG9VcHBlckNhc2UiLCJpdGVtQnJhbmQiLCJyZW5kZXJPcHRpb24iLCJvbklucHV0Q2hhbmdlIiwiZXZlbnQiLCJuZXdJbnB1dFZhbHVlIiwiZmlsdGVyT3B0aW9ucyIsIl9yZWYxNCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJQYXBlckNvbXBvbmVudCIsIl9yZWYxNSIsImNoaWxkcmVuIiwib3RoZXIiLCJfZXhjbHVkZWQzIiwibWFyZ2luVG9wIiwib25Nb3VzZURvd24iLCJwbGFjZWhvbGRlciIsInRvRml4ZWQiLCJyZXBsYWNlIiwiZ2FwIiwiX3JlZjE2IiwiYm9yZGVyQm90dG9tIiwiYWxpZ24iLCJjb250cm9sIiwiY2hlY2tlZCIsIm11bHRpbGluZSIsInJvd3MiLCJvbkNsb3NlIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0Iiwib3ZlcmZsb3dZIiwib25DcmVhdGVPcHRpb24iXSwic291cmNlUm9vdCI6IiJ9