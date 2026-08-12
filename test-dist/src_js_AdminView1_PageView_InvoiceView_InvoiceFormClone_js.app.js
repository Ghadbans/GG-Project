"use strict";
exports.id = "src_js_AdminView1_PageView_InvoiceView_InvoiceFormClone_js";
exports.ids = ["src_js_AdminView1_PageView_InvoiceView_InvoiceFormClone_js"];
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

/***/ "./src/js/AdminView1/PageView/InvoiceView/InvoiceFormClone.js"
/*!********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/InvoiceView/InvoiceFormClone.js ***!
  \********************************************************************/
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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _dexieDb__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../../dexieDb */ "./src/js/dexieDb.js");
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
function InvoiceFormClone() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_36__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_36__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_46__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_46__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          if (navigator.onLine) {
            try {
              var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("https://gg-project-production.up.railway.app/endpoint/get-employeeuser/".concat(storesUserId));
              var Name = res.data.data.employeeName;
              var Role = res.data.data.role;
              dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__.setUser)({
                userName: Name,
                role: Role
              }));
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          } else {
            var resLocalInfo = yield _dexieDb__WEBPACK_IMPORTED_MODULE_57__["default"].employeeUserSchema.get({
              _id: storesUserId
            });
            var _Name = resLocalInfo.employeeName;
            var _Role = resLocalInfo.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__.setUser)({
              userName: _Name,
              role: _Role
            }));
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__.logOut)());
    navigate('/');
  };
  var apiUrl = 'https://gg-project-production.up.railway.app/endpoint/create-invoice';
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
    invoiceDueDate = _useState4[0],
    setInvoiceDueDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    invoiceSubject = _useState6[0],
    setInvoiceSubject = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    invoiceDefect = _useState8[0],
    setInvoiceDefect = _useState8[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    invoiceNumber = _useState0[0],
    setInvoiceNumber = _useState0[1];
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
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    ItemInformation = _useState28[0],
    setItemInformation = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Thanks For your Business."),
    _useState30 = _slicedToArray(_useState29, 2),
    note = _useState30[0],
    setNote = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    noteInfo = _useState32[0],
    setNoteInfo = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState34 = _slicedToArray(_useState33, 2),
    actionTaken = _useState34[0],
    setActionTaken = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("ESTIMATES ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED PARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL. "),
    _useState36 = _slicedToArray(_useState35, 2),
    terms = _useState36[0],
    setTerms = _useState36[1];
  var dateComment = new Date();
  var invoiceName = "INV-".concat(String(invoiceNumber).padStart(6, '0'));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        if (navigator.onLine) {
          try {
            var _res$data, _res$data2;
            var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get('https://gg-project-production.up.railway.app/endpoint/get-last-saved-invoice');
            setInvoiceNumber(parseInt(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.invoiceNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.invoiceNumber) || 0) + 1);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          var offLineCustomer1 = yield _dexieDb__WEBPACK_IMPORTED_MODULE_57__["default"].invoiceSchema.toArray();
          var latest = offLineCustomer1.reduce((max, row) => row.invoiceNumber > max.invoiceNumber ? row : max, offLineCustomer1[0]);
          setInvoiceNumber(parseInt(latest.invoiceNumber) + 1);
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
        if (navigator.onLine) {
          try {
            var _res$data3, _res$data4;
            var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("https://gg-project-production.up.railway.app/endpoint/get-invoice/".concat(id));
            setCustomerName(res.data.data.customerName);
            setInvoiceSubject(res.data.data.invoiceSubject);
            setInvoiceDefect(res.data.data.invoiceDefect);
            SetItems(res.data.data.items.map(row => _objectSpread(_objectSpread({}, row), {}, {
              itemOut: 0
            })));
            setSubTotal(res.data.data.subTotal);
            setNote(res.data.data.note);
            setShipping(res.data.data.shipping);
            setAdjustment(res.data.data.adjustment);
            setAdjustmentNumber(Number(((_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.adjustmentNumber) || ((_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.adjustmentNumber) || 0));
            setTerms(res.data.data.terms);
            setNoteInfo(res.data.data.noteInfo);
            setActionTaken(res.data.data.actionTaken);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          var resLocal = yield _dexieDb__WEBPACK_IMPORTED_MODULE_57__["default"].invoiceSchema.get({
            _id: id
          });
          setCustomerName(resLocal.customerName);
          setInvoiceNumber(resLocal.invoiceNumber);
          setInvoiceDefect(resLocal.invoiceDefect);
          SetItems(resLocal.map(row => _objectSpread(_objectSpread({}, row), {}, {
            itemOut: 0
          })));
          setSubTotal(resLocal.subTotal);
          setNote(resLocal.note);
          setShipping(resLocal.shipping);
          setAdjustment(resLocal.adjustment);
          setAdjustmentNumber(resLocal.adjustmentNumber);
          setTerms(resLocal.terms);
          setNoteInfo(resLocal.noteInfo);
          setActionTaken(resLocal.actionTaken);
        }
      });
      return function fetchData() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        if (navigator.onLine) {
          try {
            var _res$data5, _res$data6;
            var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get('https://gg-project-production.up.railway.app/endpoint/get-last-saved-invoice');
            setInvoiceNumber(parseInt(((_res$data5 = res.data) === null || _res$data5 === void 0 || (_res$data5 = _res$data5.data) === null || _res$data5 === void 0 ? void 0 : _res$data5.invoiceNumber) || ((_res$data6 = res.data) === null || _res$data6 === void 0 ? void 0 : _res$data6.invoiceNumber) || 0) + 1);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          var offLineCustomer1 = yield _dexieDb__WEBPACK_IMPORTED_MODULE_57__["default"].invoiceSchema.toArray();
          var latest = offLineCustomer1.reduce((max, row) => row.invoiceNumber > max.invoiceNumber ? row : max, offLineCustomer1[0]);
          setInvoiceNumber(parseInt(latest.invoiceNumber) + 1);
        }
      });
      return function fetchlastNumber() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchlastNumber();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchItem = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (navigator.onLine) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get('https://gg-project-production.up.railway.app/endpoint/item');
            setItemInformation(res.data.data.reverse());
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          var offLineCustomer1 = yield _dexieDb__WEBPACK_IMPORTED_MODULE_57__["default"].itemSchema.toArray();
          setItemInformation(offLineCustomer1.reverse());
        }
      });
      return function fetchItem() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchItem();
  }, []);
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
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_35__["default"])(),
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
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_35__["default"])(),
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
  var addItemRow = i => {
    var newItem = {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_35__["default"])(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemCost: 0,
      itemAmount: 0,
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
    };
    var update = [...items];
    update.splice(i + 1, 0, newItem);
    SetItems(update);
  };
  var addItemWhiteRow = i => {
    var newItem = {
      newDescription: "",
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_35__["default"])(),
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
    };
    var update = [...items];
    update.splice(i + 1, 0, newItem);
    SetItems(update);
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
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    openItemUpdate = _useState38[0],
    setOpenItemUpdate = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState40 = _slicedToArray(_useState39, 2),
    idItem = _useState40[0],
    setIdItem = _useState40[1];
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("https://gg-project-production.up.railway.app/endpoint/get-item/".concat(idItem));
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
      return _ref11.apply(this, arguments);
    };
  }();
  {/** Item InFO End */}
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    customer = _useState42[0],
    setCustomer = _useState42[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCustomer = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        if (navigator.onLine) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get('https://gg-project-production.up.railway.app/endpoint/customer');
            setCustomer(res.data.data.reverse());
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          var offLineCustomer1 = yield _dexieDb__WEBPACK_IMPORTED_MODULE_57__["default"].customerSchema.toArray();
          setCustomer(offLineCustomer1.reverse());
        }
      });
      return function fetchCustomer() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchCustomer();
  }, []);
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState44 = _slicedToArray(_useState43, 2),
    customerName = _useState44[0],
    setCustomerName = _useState44[1];
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
      customerName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.Customer,
      billingAddress: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingAddress,
      billingCity: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingCity
    });
  };
  var handleClearCustomer = () => {
    setCustomerName({
      _id: '',
      customerName: '',
      billingAddress: '',
      billingCity: ''
    });
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
    var result1 = items.reduce((sum, row) => sum + row.itemAmount, 0);
    setSubTotal(result1.toFixed(2));
    var newTotal = Math.round((Number(subTotal) + Number(shipping) + Number(adjustmentNumber)) * 100) / 100;
    setTotalInvoice(newTotal);
    var newBalance = Math.round((totalInvoice - total) * 100) / 100;
    setBalanceDue(newBalance);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (totalInvoice) {
      var wholePart = Math.floor(totalInvoice);
      var fractionalPart = (totalInvoice % 1).toFixed(2).split('.')[1];
      var wholeWords = number_to_words__WEBPACK_IMPORTED_MODULE_53___default().toWords(wholePart);
      var fractionalWords = number_to_words__WEBPACK_IMPORTED_MODULE_53___default().toWords(fractionalPart);
      setTotalW("".concat(wholeWords, " and ").concat(fractionalWords, " cents"));
    }
  }, [totalInvoice]);
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
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState60 = _slicedToArray(_useState59, 2),
    referenceInfo = _useState60[0],
    setReferenceInfo = _useState60[1];
  var invoicePurchase = '';
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: "INV-".concat(String(ReferenceInfoNumber).padStart(6, '0'), " For ").concat(customerName.customerName),
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].post('https://gg-project-production.up.railway.app/endpoint/create-notification', data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2, _x3) {
      return _ref13.apply(this, arguments);
    };
  }();
  var status = '';
  if (total > 0 && total < totalInvoice) {
    status = 'Partially-Paid';
  } else if (parseFloat(total) === parseFloat(totalInvoice) && parseFloat(total) !== 0) {
    status = 'Paid';
  } else {
    status = 'Draft';
  }
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState62 = _slicedToArray(_useState61, 2),
    saving = _useState62[0],
    setSaving = _useState62[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var data = {
        customerName,
        invoiceNumber,
        invoiceDate,
        invoiceDueDate,
        invoiceSubject,
        invoicePurchase,
        invoiceDefect,
        status,
        items,
        subTotal,
        noteInfo,
        actionTaken,
        total,
        balanceDue,
        totalW,
        invoiceName,
        note,
        shipping,
        adjustment,
        adjustmentNumber,
        totalInvoice,
        terms,
        synced: false
      };
      if (navigator.onLine) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].post(apiUrl, data);
          if (res) {
            setReferenceInfo(res.data.data.invoiceNumber);
            // Open Loading View
            var ReferenceInfo = res.data.data._id;
            var ReferenceInfoNumber = res.data.data.invoiceNumber;
            handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
            handleOpen();
          }
        } catch (error) {
          if (error) {
            handleError();
          }
        }
      } else {
        yield _dexieDb__WEBPACK_IMPORTED_MODULE_57__["default"].invoiceSchema.put(data);
        handleOpen();
      }
    });
    return function handleSubmit(_x4) {
      return _ref14.apply(this, arguments);
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
  }, "Add new invoice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_42__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_56__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_55__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_48__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    options: customer,
    getOptionLabel: option => option.Customer,
    onChange: (e, newValue) => {
      handleChangeCustomer(newValue);
    },
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
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "invoiceNumber"
  }, "Invoice Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "number",
    id: "invoiceNumber",
    name: "invoiceNumber",
    label: "Invoice Number",
    value: invoiceNumber,
    onChange: e => setInvoiceNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "INV-")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_38__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_39__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_37__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__.DatePicker, {
    required: true,
    name: "invoiceDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_41___default()(invoiceDate),
    onChange: date => setInvoiceDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_38__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_39__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_37__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__.DatePicker, {
    required: true,
    name: "invoiceDueDate",
    label: "Due Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_41___default()(invoiceDueDate),
    onChange: date => setInvoiceDueDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "invoiceSubject",
    name: "invoiceSubject",
    label: "Subject",
    value: invoiceSubject,
    onChange: e => setInvoiceSubject(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "invoiceDefect",
    name: "invoiceDefect",
    label: "Defect",
    value: invoiceDefect,
    onChange: e => setInvoiceDefect(e.target.value),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: addItemWhite
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: "btn1",
    style: {
      backgroundColor: 'gray',
      fontSize: '40px'
    }
  }))))), user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_54__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_54__.Droppable, {
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
  }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
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
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
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
    onChange: e => handleChangeCEO(e, i),
    size: "small",
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
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
    filterOptions: (options, _ref16) => {
      var inputValue = _ref16.inputValue;
      return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
    },
    onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
    size: "small",
    PaperComponent: _ref17 => {
      var children = _ref17.children,
        other = _objectWithoutProperties(_ref17, _excluded4);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "New-Row",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => addItemRow(i)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Blank-Row",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => addItemWhiteRow(i)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], {
    style: {
      color: 'gray'
    }
  }))))))))), provided.placeholder))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_54__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_54__.Droppable, {
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
  }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
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
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
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
    disabled: true,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
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
    filterOptions: (options, _ref18) => {
      var inputValue = _ref18.inputValue;
      return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
    },
    onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
    size: "small",
    PaperComponent: _ref19 => {
      var children = _ref19.children,
        other = _objectWithoutProperties(_ref19, _excluded5);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "New-Row",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => addItemRow(i)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Blank-Row",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => addItemWhiteRow(i)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], {
    style: {
      color: 'gray'
    }
  }))))))))), provided.placeholder)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    label: "Invoice Note",
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
  }, "Shipping Fees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "shipping",
    size: "small",
    name: "shipping",
    value: shipping,
    onChange: e => setShipping(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "      ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "adjustment",
    id: "adjustment",
    size: "small",
    value: adjustment,
    onChange: e => setAdjustment(e.target.value),
    sx: {
      width: '250px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "adjustmentNumber",
    size: "small",
    name: "adjustmentNumber",
    value: adjustmentNumber,
    onChange: e => setAdjustmentNumber(e.target.value),
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
    label: "Invoice Terms",
    onChange: e => setTerms(e.target.value),
    sx: {
      width: '60%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_43__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: loadingOpenModalUpdate,
    onClose: handleCloseUpdate,
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_43__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_49__["default"], {
    onCreateOption: handleCreateCustomer,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvoiceFormClone);

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

/***/ "./src/js/dexieDb.js"
/*!***************************!*\
  !*** ./src/js/dexieDb.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/import-wrapper.mjs");

var db = new dexie__WEBPACK_IMPORTED_MODULE_0__["default"]('GlobalGate');
db.version(1).stores({
  customerSchema: '++id,Customer,_id,customerType,designation,customerFirstName, customerLastName,customerFullName,companyName,customerEmail,customerCompanyPhone,customerPhone,currency,paymentTerms, billingAddress,billingCity,credit,shippingAddress,shippingCity,customerDescription,synced,updateS',
  supplierSchema: '++id,_id,supplierName,storeName,customerPhone1,customerPhone2,address,description,synced',
  itemSchema: '++id,itemName,_id,itemUpc,typeItem,itemStore,unit,itemDimension,itemWeight,itemCategory,itemManufacturer,itemBrand,itemCostPrice,itemQuantity,itemSellingPrice,itemDescription,stockOnHand,synced,updateS',
  itemSchemaView: '++id,_id',
  dailyExpenseSchema: '++expenseNumber,_id,expenseCategory,accountName,description,expenseDate,amount,employeeName,rate,total,accountNameInfo,reason,Create,synced,updateS',
  dailyExpenseViewSchema: '++expenseNumber,_id',
  hiddenSchema: '++id,_id,idRow,hiddenByCEO',
  itemCodeSchema: '++id,itemCategory,_id,itemCode',
  itemUnitSchema: '++id,itemUnit,_id',
  departmentSchema: '++id,department,_id',
  estimateSchema: '++estimateNumber,_id,customerName,estimateDate,estimateDefect,estimateSubject,status,items,subTotal,total,totalW,note,estimateName,Create,balanceDue,terms,shipping,noteInfo,adjustment,adjustmentNumber,totalInvoice,Ref,ReferenceName,synced,updateS',
  invoiceSchema: '++invoiceNumber,_id,customerName,invoiceDate,invoiceDueDate,invoiceSubject,invoicePurchase,invoiceDefect,status,items,subTotal,ReferenceName,ReferenceName2,total,noteInfo,balanceDue,totalW,actionTaken,invoiceName,Position,note,Create,shipping,adjustment,adjustmentNumber,totalInvoice,terms,Ref,synced,updateS',
  invoiceViewSchema: '++invoiceNumber,_id',
  posSchema: '++factureNumber,_id,customerName,invoiceDate,time,status,items,subTotal,totalFC,totalUSD,rate,Create,balanceDue,note,totalInvoice,synced,updateS',
  paymentSchema: '++paymentNumber,_id,customerName,amount,bankCharge,modes,paymentDate,referenceNumber,description,remaining,Create,PaymentReceivedFC,PaymentReceivedUSD,TotalAmount,synced,updateS',
  projectSchema: '++projectNumber,_id,customerName,projectName,status,phase,description,startDate,visitDate,synced,updateS',
  purchaseSchema: '++purchaseNumber,_id,customerName,noteInfo,estimateDefect,estimateSubject,purchaseName,projectName,description,Position,purchaseDate,status,statusInfo,items,purchaseAmount1,purchaseAmount2,ReferenceName,ReferenceName2,synced,updateS',
  purchaseSchemaView: '++purchaseNumber,_id',
  maintenanceSchema: '++serviceNumber,customerName,_id,action,serviceName,serviceDate,laborQty,totalLaborFeesGenerale,technicianAssign,note,totalLaborFees,laborPercentage,totalDiscount,laborDiscount,visitDate,status,items,itemDescriptionInfo,brand,actionTaken,model,warranty,serialNo,defectDescription,adjustment,adjustmentNumber,totalInvoice,subTotal,Converted,ReferenceName,synced,updateS',
  maintenanceViewSchema: '++serviceNumber,_id',
  employeeSchema: '++employeeId,_id,joinDate,employeeName,employeeAddress,employeeEmail,employeePhone,employeeRole,department,dateOfBirth,Gender,status,statusMarital,identifier,identifierNumber,expireDate,salary,reason1,description,bankAccountNumber,bankName,other,bounceAllowances,foodBasic,basicTransport,synced,updateS',
  payRollSchema: '++payNumber,_id,payDate,month,daysW,status,daysOpen,Lops,basicSalary,earningSalary,advancedSalary,basicTransport,transportEarning,transportDeduction,foodBasic,foodEarning,itemLost,foodDeduction,bounceAllowances,bounceAllowancesEarning,other,otherEarning,loan,bonus,totalActualSalary,totalActualEarning,totalActualDeduction,totalNet,totalPaid,rate,totalPaidDollars,words,employeeName,amountPayUSD,amountPayFC,CreditFC,CreditUSD,synced,updateS',
  employeeUserSchema: '_id,employeeName,employeeEmail,role,password,verificationCode,codeExpiration,synced,updateS',
  userAccount: 'idInfo,employeeName,password',
  grantAccessSchema: '++id,employeeName,_id,userID,modules',
  cashSchema: '++cashNumber,_id,cashDate,status,totalCash,amount,totalItemPurchaseUSD,totalPayrollUSD,totalExpensesUSD,totalExpensesFC,totalCashUSD,totalCashFC,returnAmountFC,returnAmountUSD,RemainingAmountFC,RemainingAmountUSD,Create,synced,updateS',
  rateSchema: '++id,_id,rate',
  paymentRateSchema: '++id,_id,paymentRate',
  dailyExpensesCategorySchema: '++id,_id,expensesCategory',
  employeeAttendanceSchema: '++idInfo,_id,id,timeIn,timeOut,name,observation,note,daysWN,synced,updateS',
  itemPurchaseSchema: '++itemPurchaseNumber,_id,itemPurchaseDate,manufacturer,manufacturerNumber,description,note,Create,total,totalFC,items,reason,projectName',
  itemPurchaseViewSchema: '++itemPurchaseNumber,_id',
  itemReturn: '++outNumber,_id,itemOutDate,reason,reference,itemsQtyArray,description,Create,synced,updateS',
  itemReturnView: '++outNumber,_id',
  itemOutSchema: '++idInfo,outNumber,_id,itemOutDate,reason,reference,itemsQtyArray,description,Create,synced,updateS',
  itemOutViewSchema: '++idInfo,_id',
  purchaseOrder: '++outNumber,_id,totalUSD,total,totalFC,itemOutDate,reason,reference,itemsQtyArray,manufacturer,status,Converted,manufacturerNumber,description,IpRelated,synced,updateS',
  purchaseOrderView: '++outNumber,_id',
  planingSchema: '++idInfo,planingDate,employeeName,employeeID,projectName,dayPayUSd,workNumber,status,planingDescription,planingTask',
  rateReturnSchema: '++id, _id, rateR',
  // Cache tables for hybrid architecture (v2.4.0)
  // These store full datasets locally for instant queries
  itemPurchaseCache: '_id, itemPurchaseDate, items, manufacturer',
  itemOutCache: '_id, itemOutDate, itemsQtyArray',
  posCache: '_id, invoiceDate, items, customerName',
  itemReturnCache: '_id, itemOutDate, itemsQtyArray',
  invoiceCache: '_id, invoiceNumber, customerName, invoiceDate, items',
  estimateCache: '_id, estimateNumber, customerName, estimateDate, items',
  customerCache: '_id, customerFullName, companyName, customerEmail',
  supplierCache: '_id, supplierName, storeName',
  projectCache: '_id, projectNumber, projectName, customerName',
  maintenanceCache: '_id, serviceNumber, serviceName, customerName, items',
  employeeCache: '_id, employeeName, employeeEmail, employeeRole, department',
  payrollCache: '_id, payNumber, payDate, month, employeeName',
  rateCache: '_id, rate',
  userCache: '_id, employeeName, role',
  grantAccessCache: '_id, userID, employeeName, modules',
  companyProfileCache: '_id',
  purchaseOrderCache: '_id, outNumber, manufacturer, status',
  paymentCache: '_id, paymentNumber, customerName, paymentDate',
  cashCache: '_id, cashNumber, cashDate, status',
  dailyExpenseCache: '_id, expenseNumber, expenseCategory, expenseDate',
  // Sync metadata
  syncMetadata: '++id, tableName, lastSync, recordCount'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfSW52b2ljZVZpZXdfSW52b2ljZUZvcm1DbG9uZV9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQywwQkFBMEIsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ04zQjs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxVQUFVLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05YLENBQWtEO0FBQ1M7QUFDbkM7QUFDRTtBQUMwQjtBQUNzQjtBQUNSO0FBQ2Q7QUFDbUs7QUFDMUo7QUFDaEI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDekM7QUFDc0Y7QUFDckY7QUFDaUM7QUFDUTtBQUNhO0FBQ2hCO0FBQ0o7QUFDbEM7QUFDNEI7QUFDUTtBQUNWO0FBQ0w7QUFDUTtBQUMrQjtBQUN0QztBQUNrQjtBQUNwQjtBQUNRO0FBQ0k7QUFDZjtBQUNpQztBQUN0QjtBQUNRO0FBQzVCO0FBRWxDLElBQU15RSxZQUFZLEdBQUd4RCwwREFBTSxDQUFDeUQsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2hEOUUsMERBQUEsQ0FBQzBCLDhEQUFPLEVBQUFzRCxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FB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QUMxQixXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDL0dhOztBQUViLGtCQUFrQixtQkFBTyxDQUFDLHdFQUFlO0FBQ3pDLGNBQWMsbUJBQU8sQ0FBQyxnRUFBVzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9EcmFnSW5kaWNhdG9yUm91bmRlZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0VkaXQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0ludm9pY2VWaWV3L0ludm9pY2VGb3JtQ2xvbmUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvU2lkZWJhckRhc2gxLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvZGV4aWVEYi5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL2lzRmluaXRlLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9pc1NhZmVOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL21ha2VPcmRpbmFsLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9tYXhTYWZlSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvdG9PcmRpbmFsLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy90b1dvcmRzLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy90b1dvcmRzT3JkaW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xMSAxOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtLTItOGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJtMC02Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMm02IDRjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAybTAgMmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJtMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMlwiXG59KSwgJ0RyYWdJbmRpY2F0b3JSb3VuZGVkJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRhLjk5NTkuOTk1OSAwIDAgMC0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzV6XCJcbn0pLCAnRWRpdCcpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaDEgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoMSc7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnO1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7TWVudUl0ZW0sR3JpZCwgSWNvbkJ1dHRvbixQYXBlcixUZXh0RmllbGQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIFR5cG9ncmFwaHksc3R5bGVkLCBCb3gsIEF1dG9jb21wbGV0ZSxNb2RhbCwgQmFja2Ryb3AsIFRhYmxlQ29udGFpbmVyLCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCxEaXZpZGVyICB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBUb29sdGlwLHt0b29sdGlwQ2xhc3Nlc30gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBBZGQsIEFycm93VXB3YXJkT3V0bGluZWQsIERyYWdJbmRpY2F0b3JSb3VuZGVkLCBFZGl0LCBSZW1vdmVDaXJjbGVPdXRsaW5lfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgIHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgRGVtb0NvbnRhaW5lciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvaW50ZXJuYWxzL2RlbW8nO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvTG9jYWxpemF0aW9uUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBBZGFwdGVyRGF5anMgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0FkYXB0ZXJEYXlqcyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0RhdGVQaWNrZXInO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgQ3VzdG9tZXJGb3JtVmlldzIgZnJvbSAnLi4vQ3VzdG9tZXJWSWV3L0N1c3RvbWVyRm9ybVZpZXcyJztcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgSXRlbUZvcm1WaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtRm9ybVZpZXcyJztcclxuaW1wb3J0IEl0ZW1VcGRhdGVWaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtVXBkYXRlVmlldzInO1xyXG5pbXBvcnQgbnVtYmVyVG9Xb3JkcyBmcm9tICdudW1iZXItdG8td29yZHMnXHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuaW1wb3J0IGRiIGZyb20gJy4uLy4uLy4uL2RleGllRGInO1xyXG5cclxuY29uc3QgTGlnaHRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQmxhY2tUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBzdHlsZTIgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA4MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gICk7XHJcbmZ1bmN0aW9uIEludm9pY2VGb3JtQ2xvbmUoKSB7XHJcbiAgICBjb25zdCB7aWR9PSB1c2VQYXJhbXMoKVxyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2g9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgaWYgKG5hdmlnYXRvci5vbkxpbmUpIHtcclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCAgYXhpb3MuZ2V0KGBodHRwczovL2dnLXByb2plY3QtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9lbmRwb2ludC9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7dXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGV9KSk7XHJcbiAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgIH1cclxuICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzTG9jYWxJbmZvID0gYXdhaXQgZGIuZW1wbG95ZWVVc2VyU2NoZW1hLmdldCh7X2lkOnN0b3Jlc1VzZXJJZH0pXHJcbiAgICAgICAgY29uc3QgTmFtZSA9IHJlc0xvY2FsSW5mby5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgY29uc3QgUm9sZSA9IHJlc0xvY2FsSW5mby5yb2xlO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldFVzZXIoe3VzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlfSkpO1xyXG4gICAgICAgfVxyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZldGNoVXNlcigpXHJcbiAgICB9LFtkaXNwYXRjaF0pO1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICAgIG5hdmlnYXRlKCcvJylcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGFwaVVybCA9ICdodHRwczovL2dnLXByb2plY3QtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9lbmRwb2ludC9jcmVhdGUtaW52b2ljZSc7XHJcbiAgIGNvbnN0IFtpbnZvaWNlRGF0ZSxzZXRJbnZvaWNlRGF0ZV0gPXVzZVN0YXRlKCgpPT57XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgIHJldHVybiBkYXRlXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtpbnZvaWNlRHVlRGF0ZSxzZXRJbnZvaWNlRHVlRGF0ZV0gPSB1c2VTdGF0ZSgoKT0+e1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICByZXR1cm4gZGF0ZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbaW52b2ljZVN1YmplY3Qsc2V0SW52b2ljZVN1YmplY3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaW52b2ljZURlZmVjdCxzZXRJbnZvaWNlRGVmZWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2ludm9pY2VOdW1iZXIsc2V0SW52b2ljZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpdGVtcywgU2V0SXRlbXNdID0gdXNlU3RhdGUoW1xyXG4gICAgICBdKTtcclxuICAgICAgY29uc3QgW3N1YlRvdGFsLCBzZXRTdWJUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgICAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgICAgY29uc3QgW3NoaXBwaW5nLCBzZXRTaGlwcGluZ109IHVzZVN0YXRlKDApO1xyXG4gICAgICBjb25zdCBbYWRqdXN0bWVudCxzZXRBZGp1c3RtZW50XT11c2VTdGF0ZSgnQWRqdXN0bWVudCcpXHJcbiAgICAgIGNvbnN0IFthZGp1c3RtZW50TnVtYmVyLHNldEFkanVzdG1lbnROdW1iZXJdPXVzZVN0YXRlKDApXHJcbiAgICAgIGNvbnN0IFt0b3RhbEludm9pY2UsIHNldFRvdGFsSW52b2ljZV09IHVzZVN0YXRlKDApO1xyXG4gICAgICBjb25zdCBbYmFsYW5jZUR1ZSwgc2V0QmFsYW5jZUR1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgICAgY29uc3QgW3RvdGFsVyxzZXRUb3RhbFddID11c2VTdGF0ZShcIlwiKTtcclxuICAgICAgY29uc3QgW0l0ZW1JbmZvcm1hdGlvbixzZXRJdGVtSW5mb3JtYXRpb25dPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAgIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IHVzZVN0YXRlKFwiVGhhbmtzIEZvciB5b3VyIEJ1c2luZXNzLlwiKTtcclxuICAgICAgIGNvbnN0IFtub3RlSW5mbywgc2V0Tm90ZUluZm9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICAgIGNvbnN0IFthY3Rpb25UYWtlbiwgc2V0QWN0aW9uVGFrZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICAgIGNvbnN0IFt0ZXJtcywgc2V0VGVybXNdID0gdXNlU3RhdGUoXCJFU1RJTUFURVMgQVJFIEZPUiBMQUJPUiBBTkQgQURESVRJT05BTCBNQVRFUklBTCBPTkxZLCBNQVRFUklBTFMgU09MRCBBUkUgTkVJVEhFUiBUQUtFTiBCQUNLIE9SIEVYQ0hBTkdFRCBXRSBXSUxMIE5PVCBCRSBSRVNQT05TSUJMRSBGT1IgTE9TUyBPUiBEQU1BR0UgQ0FVU0VEIEJZIEZJUkUsIFRIRUZULCBURVNUSU5HLCBERUZFQ1RFRCBQQVJFIFBBUlRTLCBPUiBBTlkgT1RIRVIgQ0FVU0UgQkVZT05EIE9VUiBDT05UUk9MLiBcIik7XHJcbiAgICAgIGNvbnN0IGRhdGVDb21tZW50ID0gbmV3IERhdGUoKVxyXG4gICAgICBjb25zdCBpbnZvaWNlTmFtZSA9ICBgSU5WLSR7U3RyaW5nKGludm9pY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9YFxyXG4gIFxyXG4gICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBmZXRjaGxhc3ROdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9nZy1wcm9qZWN0LXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvZW5kcG9pbnQvZ2V0LWxhc3Qtc2F2ZWQtaW52b2ljZScpXHJcbiAgICAgICAgICAgICBzZXRJbnZvaWNlTnVtYmVyKChwYXJzZUludChyZXMuZGF0YT8uZGF0YT8uaW52b2ljZU51bWJlciB8fCByZXMuZGF0YT8uaW52b2ljZU51bWJlciB8fCAwKSkgKyAxKVxyXG4gICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgY29uc3Qgb2ZmTGluZUN1c3RvbWVyMSA9IGF3YWl0IGRiLmludm9pY2VTY2hlbWEudG9BcnJheSgpO1xyXG4gICAgICAgICAgY29uc3QgbGF0ZXN0ID0gb2ZmTGluZUN1c3RvbWVyMS5yZWR1Y2UoKG1heCwgcm93KT0+IHJvdy5pbnZvaWNlTnVtYmVyID4gbWF4Lmludm9pY2VOdW1iZXI/IHJvdyA6IG1heCxvZmZMaW5lQ3VzdG9tZXIxWzBdIClcclxuICAgICAgICAgIHNldEludm9pY2VOdW1iZXIocGFyc2VJbnQobGF0ZXN0Lmludm9pY2VOdW1iZXIpICsgMSlcclxuICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaGxhc3ROdW1iZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sW10pXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2dnLXByb2plY3QtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9lbmRwb2ludC9nZXQtaW52b2ljZS8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tZXJOYW1lKHJlcy5kYXRhLmRhdGEuY3VzdG9tZXJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnZvaWNlU3ViamVjdChyZXMuZGF0YS5kYXRhLmludm9pY2VTdWJqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnZvaWNlRGVmZWN0KHJlcy5kYXRhLmRhdGEuaW52b2ljZURlZmVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0SXRlbXMocmVzLmRhdGEuZGF0YS5pdGVtcy5tYXAoKHJvdyk9Pih7Li4ucm93LCBpdGVtT3V0OjB9KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1YlRvdGFsKHJlcy5kYXRhLmRhdGEuc3ViVG90YWwpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROb3RlKHJlcy5kYXRhLmRhdGEubm90ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hpcHBpbmcocmVzLmRhdGEuZGF0YS5zaGlwcGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWRqdXN0bWVudChyZXMuZGF0YS5kYXRhLmFkanVzdG1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFkanVzdG1lbnROdW1iZXIoTnVtYmVyKHJlcy5kYXRhPy5kYXRhPy5hZGp1c3RtZW50TnVtYmVyIHx8IHJlcy5kYXRhPy5hZGp1c3RtZW50TnVtYmVyIHx8IDApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUZXJtcyhyZXMuZGF0YS5kYXRhLnRlcm1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROb3RlSW5mbyhyZXMuZGF0YS5kYXRhLm5vdGVJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3Rpb25UYWtlbihyZXMuZGF0YS5kYXRhLmFjdGlvblRha2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNMb2NhbCA9IGF3YWl0IGRiLmludm9pY2VTY2hlbWEuZ2V0KHtfaWQ6aWR9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbWVyTmFtZShyZXNMb2NhbC5jdXN0b21lck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEludm9pY2VOdW1iZXIocmVzTG9jYWwuaW52b2ljZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW52b2ljZURlZmVjdChyZXNMb2NhbC5pbnZvaWNlRGVmZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTZXRJdGVtcyhyZXNMb2NhbC5tYXAoKHJvdyk9Pih7Li4ucm93LCBpdGVtT3V0OjB9KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1YlRvdGFsKHJlc0xvY2FsLnN1YlRvdGFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROb3RlKHJlc0xvY2FsLm5vdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNoaXBwaW5nKHJlc0xvY2FsLnNoaXBwaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBZGp1c3RtZW50KHJlc0xvY2FsLmFkanVzdG1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFkanVzdG1lbnROdW1iZXIocmVzTG9jYWwuYWRqdXN0bWVudE51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGVybXMocmVzTG9jYWwudGVybXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5vdGVJbmZvKHJlc0xvY2FsLm5vdGVJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3Rpb25UYWtlbihyZXNMb2NhbC5hY3Rpb25UYWtlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hEYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxbXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmV0Y2hsYXN0TnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vZ2ctcHJvamVjdC1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL2VuZHBvaW50L2dldC1sYXN0LXNhdmVkLWludm9pY2UnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW52b2ljZU51bWJlcigocGFyc2VJbnQocmVzLmRhdGE/LmRhdGE/Lmludm9pY2VOdW1iZXIgfHwgcmVzLmRhdGE/Lmludm9pY2VOdW1iZXIgfHwgMCkpICsgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZkxpbmVDdXN0b21lcjEgPSBhd2FpdCBkYi5pbnZvaWNlU2NoZW1hLnRvQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVzdCA9IG9mZkxpbmVDdXN0b21lcjEucmVkdWNlKChtYXgsIHJvdyk9PiByb3cuaW52b2ljZU51bWJlciA+IG1heC5pbnZvaWNlTnVtYmVyPyByb3cgOiBtYXgsb2ZmTGluZUN1c3RvbWVyMVswXSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnZvaWNlTnVtYmVyKHBhcnNlSW50KGxhdGVzdC5pbnZvaWNlTnVtYmVyKSArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hsYXN0TnVtYmVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFtdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmZXRjaEl0ZW0gPSBhc3luYygpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgIGF4aW9zLmdldCgnaHR0cHM6Ly9nZy1wcm9qZWN0LXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvZW5kcG9pbnQvaXRlbScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUluZm9ybWF0aW9uKHJlcy5kYXRhLmRhdGEucmV2ZXJzZSgpKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2ZmTGluZUN1c3RvbWVyMSA9IGF3YWl0IGRiLml0ZW1TY2hlbWEudG9BcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUluZm9ybWF0aW9uKG9mZkxpbmVDdXN0b21lcjEucmV2ZXJzZSgpKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoSXRlbSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sW10pXHJcbiAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZUl0ZW0gPSAoaWRSb3csIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gSXRlbUluZm9ybWF0aW9uLmZpbmQoKG9wdGlvbik9PiBvcHRpb24gPT09IG5ld1ZhbHVlKVxyXG4gICAgICAgIFNldEl0ZW1zKGl0ZW1zPT4gaXRlbXMubWFwKChyb3cpPT4gcm93LmlkUm93ID09PSBpZFJvdyA/IHsuLi5yb3csIFxyXG4gICAgICAgICAgaXRlbU5hbWU6e1xyXG4gICAgICAgICAgICBfaWQ6c2VsZWN0ZWRPcHRpb25zPy5faWQsXHJcbiAgICAgICAgICAgIGl0ZW1OYW1lOnNlbGVjdGVkT3B0aW9ucz8uaXRlbU5hbWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaXRlbUNvc3Q6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbUNvc3RQcmljZSxcclxuICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjpzZWxlY3RlZE9wdGlvbnM/Lml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgICAgIGl0ZW1SYXRlOnNlbGVjdGVkT3B0aW9ucz8uaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICAgIHN0b2NrOnNlbGVjdGVkT3B0aW9ucz8uaXRlbVF1YW50aXR5LFxyXG4gICAgICAgICB9OiByb3cpKVxyXG4gICAgICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsaSkgPT4ge1xyXG4gICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pdGVtc107XHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWU7XHJcbiAgICBpZiAoIGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddID4gNSkge1xyXG4gICAgICBsaXN0W2ldWydpdGVtRGlzY291bnQnXSA9IDVcclxuICAgIH1cclxuICAgIGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gPSBNYXRoLnJvdW5kKCggIGxpc3RbaV1bJ2l0ZW1RdHknXSpsaXN0W2ldWydpdGVtUmF0ZSddKSoxMDApLzEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQ29zdCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddKmxpc3RbaV1bJ2l0ZW1Db3N0J10pKjEwMCkvMTAwO1xyXG4gICAgbGlzdFtpXVsnZGlzY291bnQnXSA9IGxpc3RbaV1bJ3RvdGFsQW1vdW50J10qbGlzdFtpXVsnaXRlbURpc2NvdW50J107XHJcbiAgICBsaXN0W2ldWydwZXJjZW50YWdlJ10gPSBsaXN0W2ldWydkaXNjb3VudCddLzEwMDtcclxuICAgIGxpc3RbaV1bJ2l0ZW1BbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ3RvdGFsQW1vdW50J10tbGlzdFtpXVsncGVyY2VudGFnZSddKSoxMDApLzEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsR2VuZXJhbGUnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1Db3N0J10qbGlzdFtpXVsnaXRlbUJ1eSddKSoxMDApLzEwMDtcclxuICAgIFNldEl0ZW1zKGxpc3QpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDRU8gPSAoZSxpKSA9PiB7XHJcbiAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLml0ZW1zXTtcclxuICAgIGxpc3RbaV1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gPSBNYXRoLnJvdW5kKCggIGxpc3RbaV1bJ2l0ZW1RdHknXSpsaXN0W2ldWydpdGVtUmF0ZSddKSoxMDApLzEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQ29zdCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddKmxpc3RbaV1bJ2l0ZW1Db3N0J10pKjEwMCkvMTAwO1xyXG4gICAgbGlzdFtpXVsnZGlzY291bnQnXSA9IGxpc3RbaV1bJ3RvdGFsQW1vdW50J10qbGlzdFtpXVsnaXRlbURpc2NvdW50J107XHJcbiAgICBsaXN0W2ldWydwZXJjZW50YWdlJ10gPSBsaXN0W2ldWydkaXNjb3VudCddLzEwMDtcclxuICAgIGxpc3RbaV1bJ2l0ZW1BbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ3RvdGFsQW1vdW50J10tbGlzdFtpXVsncGVyY2VudGFnZSddKSoxMDApLzEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsR2VuZXJhbGUnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1Db3N0J10qbGlzdFtpXVsnaXRlbUJ1eSddKSoxMDApLzEwMDtcclxuICAgIFNldEl0ZW1zKGxpc3QpO1xyXG4gIH1cclxuICAgLy9hZGRJdGVtXHJcbiAgIGNvbnN0IGFkZEl0ZW0gPSAoKSA9PiB7XHJcbiAgICBTZXRJdGVtcyhbLi4uaXRlbXMsIHtcclxuICAgICAgICAgIHR5cGVJdGVtOicnLFxyXG4gICAgICAgICAgaWRSb3c6djQoKSxcclxuICAgICAgICAgIGl0ZW1OYW1lOntcclxuICAgICAgICAgICAgX2lkOlwiXCIsXHJcbiAgICAgICAgICAgIGl0ZW1OYW1lOlwiXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICBpdGVtRGlzY291bnQ6MCxcclxuICAgICAgICAgIGl0ZW1RdHk6MCxcclxuICAgICAgICAgIGl0ZW1SYXRlOjAsXHJcbiAgICAgICAgICBpdGVtQW1vdW50OjAsXHJcbiAgICAgICAgICBpdGVtQ29zdDowLFxyXG4gICAgICAgICAgdG90YWxBbW91bnQ6MCxcclxuICAgICAgICAgIGRpc2NvdW50OjAsXHJcbiAgICAgICAgICBwZXJjZW50YWdlOjAsXHJcbiAgICAgICAgICBpdGVtQnV5OjAsXHJcbiAgICAgICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICAgICAgdG90YWxHZW5lcmFsZTowLFxyXG4gICAgICAgICAgdG90YWxDb3N0OjAsXHJcbiAgICAgICAgICBzdG9jazogMCxcclxuICAgICAgICAgIGl0ZW1PdXQ6MCxcclxuICAgICAgICAgIG5ld0l0ZW1PdXQ6MCxcclxuICAgICAgICB9XSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1XaGl0ZSA9ICgpID0+IHtcclxuICAgIFNldEl0ZW1zKFsuLi5pdGVtcywge1xyXG4gICAgICBuZXdEZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaWRSb3c6djQoKSxcclxuICAgICAgaXRlbU5hbWU6e1xyXG4gICAgICAgIF9pZDpcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOlwiXCJcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6MCxcclxuICAgICAgaXRlbVF0eTowLFxyXG4gICAgICBpdGVtUmF0ZTowLFxyXG4gICAgICBpdGVtQW1vdW50OjAsXHJcbiAgICAgIGl0ZW1Db3N0OjAsXHJcbiAgICAgIHRvdGFsQW1vdW50OjAsXHJcbiAgICAgIGRpc2NvdW50OjAsXHJcbiAgICAgIHBlcmNlbnRhZ2U6MCxcclxuICAgICAgaXRlbUJ1eTowLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOjAsXHJcbiAgICAgIHRvdGFsQ29zdDowLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDowLFxyXG4gICAgICBuZXdJdGVtT3V0OjAsXHJcbiAgICAgIH1dKTtcclxuICB9XHJcbiAgY29uc3QgYWRkSXRlbVJvdyA9IChpKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICBpZFJvdzp2NCgpLFxyXG4gICAgICBpdGVtTmFtZTp7XHJcbiAgICAgICAgX2lkOlwiXCIsXHJcbiAgICAgICAgaXRlbU5hbWU6XCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDowLFxyXG4gICAgICBpdGVtUXR5OjAsXHJcbiAgICAgIGl0ZW1SYXRlOjAsXHJcbiAgICAgIGl0ZW1Db3N0OjAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6MCxcclxuICAgICAgdG90YWxBbW91bnQ6MCxcclxuICAgICAgZGlzY291bnQ6MCxcclxuICAgICAgcGVyY2VudGFnZTowLFxyXG4gICAgICBpdGVtQnV5OjAsXHJcbiAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgIHRvdGFsR2VuZXJhbGU6MCxcclxuICAgICAgdG90YWxDb3N0OjAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OjAsXHJcbiAgICAgIG5ld0l0ZW1PdXQ6MCxcclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZSA9Wy4uLml0ZW1zXTtcclxuICAgIHVwZGF0ZS5zcGxpY2UoaSArIDEsIDAsIG5ld0l0ZW0pO1xyXG4gICAgU2V0SXRlbXModXBkYXRlKVxyXG4gIH1cclxuICBjb25zdCBhZGRJdGVtV2hpdGVSb3cgPSAoaSkgPT4ge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgbmV3RGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGlkUm93OnY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOntcclxuICAgICAgICBfaWQ6XCJcIixcclxuICAgICAgICBpdGVtTmFtZTpcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OjAsXHJcbiAgICAgIGl0ZW1RdHk6MCxcclxuICAgICAgaXRlbVJhdGU6MCxcclxuICAgICAgaXRlbUFtb3VudDowLFxyXG4gICAgICBpdGVtQ29zdDowLFxyXG4gICAgICB0b3RhbEFtb3VudDowLFxyXG4gICAgICBkaXNjb3VudDowLFxyXG4gICAgICBwZXJjZW50YWdlOjAsXHJcbiAgICAgIGl0ZW1CdXk6MCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTowLFxyXG4gICAgICB0b3RhbENvc3Q6MCxcclxuICAgICAgc3RvY2s6IDAsXHJcbiAgICAgIGl0ZW1PdXQ6MCxcclxuICAgICAgbmV3SXRlbU91dDowLFxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlID1bLi4uaXRlbXNdO1xyXG4gICAgdXBkYXRlLnNwbGljZShpICsgMSwgMCwgbmV3SXRlbSk7XHJcbiAgICBTZXRJdGVtcyh1cGRhdGUpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURyYWdFbmQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNvbnN0IG5ld0l0ZW1zID0gWy4uLml0ZW1zXTtcclxuICBjb25zdCBbcmVtb3ZlZF0gPSBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgbmV3SXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVtb3ZlZCk7XHJcbiAgU2V0SXRlbXMobmV3SXRlbXMpXHJcbiAgfTtcclxuICBjb25zdCBkZWxldGVJdGVtID0gaWRSb3cgPT57XHJcbiAgICBTZXRJdGVtcyAoaXRlbXMgPT4gaXRlbXMuZmlsdGVyKChJdGVtKT0+IEl0ZW0uaWRSb3cgIT09aWRSb3cpKTtcclxuICB9O1xyXG4gIGNvbnN0IGZpbHRlckl0ZW1JbmZvcm1hdGlvbiA9IEl0ZW1JbmZvcm1hdGlvbi5maWx0ZXIob3B0aW9uPT4gIWl0ZW1zLmZpbmQoKHJvdyk9PiBvcHRpb24uX2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCAmJiBvcHRpb24udHlwZUl0ZW0gPT09IFwiR29vZHNcIikpXHJcbiAgey8qKiBJdGVtIEluRk8gKi99XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlU2hvd0F1dG9jb21wbGV0ZSA9IChpZFJvdykgPT4ge1xyXG4gICAgU2V0SXRlbXMoaXRlbXM9PiBpdGVtcy5tYXAoKHJvdyk9PiByb3cuaWRSb3cgPT09IGlkUm93ID97Li4ucm93LCBcclxuICAgICAgaXRlbU5hbWU6e1xyXG4gICAgICAgIF9pZDpudWxsLFxyXG4gICAgICAgIGl0ZW1OYW1lOm51bGxcclxuICAgICB9LCBcclxuICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgaXRlbURpc2NvdW50OjAsXHJcbiAgICAgaXRlbVF0eTowLFxyXG4gICAgIGl0ZW1SYXRlOjAsXHJcbiAgICAgaXRlbUFtb3VudDowLFxyXG4gICAgIGl0ZW1Db3N0OjAsXHJcbiAgICAgdG90YWxBbW91bnQ6MCxcclxuICAgICBkaXNjb3VudDowLFxyXG4gICAgIHBlcmNlbnRhZ2U6MCxcclxuICAgICBpdGVtQnV5OjAsXHJcbiAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICB0b3RhbEdlbmVyYWxlOjAsXHJcbiAgICAgdG90YWxDb3N0OjAsXHJcbiAgICAgc3RvY2s6IDAsXHJcbiAgICAgaXRlbU91dDowLFxyXG4gICAgIG5ld0l0ZW1PdXQ6MCxcclxuICAgICB9OiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24gPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zPT4gaXRlbXMubWFwKChyb3cpPT4gcm93LmlkUm93ID09PSBpZFJvdyA/ey4uLnJvdywgXHJcbiAgICAgIGl0ZW1OYW1lOntcclxuICAgICAgICBpdGVtTmFtZTogJ2VtcHR5J1xyXG4gICAgIH0sIFxyXG4gICAgIH06IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IFtvcGVuSXRlbVVwZGF0ZSwgc2V0T3Blbkl0ZW1VcGRhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpZEl0ZW0sc2V0SWRJdGVtXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlT3Blbkl0ZW1VcGRhdGUgPSBhc3luYyhpZCkgPT4ge1xyXG4gICAgc2V0T3Blbkl0ZW1VcGRhdGUodHJ1ZSk7XHJcbiAgICBzZXRJZEl0ZW0oaWQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VJdGVtVXBkYXRlID0gYXN5bmMoKSA9PiB7XHJcbiAgICBzZXRPcGVuSXRlbVVwZGF0ZShmYWxzZSk7XHJcbiAgICBpZiAoaWRJdGVtKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2dnLXByb2plY3QtcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9lbmRwb2ludC9nZXQtaXRlbS8ke2lkSXRlbX1gKVxyXG4gICAgICAgIFNldEl0ZW1zKGl0ZW1zPT4gaXRlbXMubWFwKChyb3cpPT4gcm93Lml0ZW1OYW1lPy5faWQgPT09IHJlcy5kYXRhLmRhdGEuX2lkID8gey4uLnJvdywgXHJcbiAgICAgICAgICBpdGVtTmFtZTp7XHJcbiAgICAgICAgICAgIF9pZDpyZXMuZGF0YS5kYXRhLl9pZCxcclxuICAgICAgICAgICAgaXRlbU5hbWU6cmVzLmRhdGEuZGF0YS5pdGVtTmFtZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICBpdGVtRGVzY3JpcHRpb246cmVzLmRhdGEuZGF0YS5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGl0ZW1Db3N0OiByZXMuZGF0YS5kYXRhLml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgICAgICAgIGl0ZW1SYXRlOiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICAgIHN0b2NrOiByZXMuZGF0YS5kYXRhLml0ZW1RdWFudGl0eSxcclxuICAgICAgICAgIHRvdGFsQW1vdW50OiByb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICAgIGRpc2NvdW50OiAocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCxcclxuICAgICAgICAgIHBlcmNlbnRhZ2U6ICgocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCkvMTAwLFxyXG4gICAgICAgICAgaXRlbUFtb3VudDogKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAtICgoKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQpLzEwMCksXHJcbiAgICAgICAgICB0b3RhbENvc3Q6IHJvdy5pdGVtUXR5KnJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSxcclxuICAgICAgICAgIHRvdGFsR2VuZXJhbGU6IHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSpyb3cuaXRlbUJ1eVxyXG4gICAgICAgICAgfTogcm93KSkgXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgXHJcbiAgICAgIH19XHJcbiAgfTtcclxuICB7LyoqIEl0ZW0gSW5GTyBFbmQgKi99XHJcbiAgY29uc3QgW2N1c3RvbWVyLHNldEN1c3RvbWVyXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBjb25zdCBmZXRjaEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCAgIGF4aW9zLmdldCgnaHR0cHM6Ly9nZy1wcm9qZWN0LXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvZW5kcG9pbnQvY3VzdG9tZXInKVxyXG4gICAgICAgICAgc2V0Q3VzdG9tZXIocmVzLmRhdGEuZGF0YS5yZXZlcnNlKCkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IG9mZkxpbmVDdXN0b21lcjEgPSBhd2FpdCBkYi5jdXN0b21lclNjaGVtYS50b0FycmF5KCk7XHJcbiAgICAgICAgc2V0Q3VzdG9tZXIob2ZmTGluZUN1c3RvbWVyMS5yZXZlcnNlKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaEN1c3RvbWVyKClcclxuICB9LFtdKVxyXG4gIFxyXG4gIGNvbnN0IFtjdXN0b21lck5hbWUsc2V0Q3VzdG9tZXJOYW1lXT0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtvcGVuQXV0b2NvbXBsZXRlMSwgc2V0T3BlbkF1dG9jb21wbGV0ZTFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgIHNldE9wZW5BdXRvY29tcGxldGUxKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUxKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUN1c3RvbWVyID0gKG5ld0N1c3RvbWVyKT0+IHtcclxuICAgIHNldEN1c3RvbWVyKFtuZXdDdXN0b21lciwuLi5jdXN0b21lcl0pXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUN1c3RvbWVyID0gKCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gY3VzdG9tZXIuZmluZCgob3B0aW9uKT0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICBzZXRDdXN0b21lck5hbWUoe1xyXG4gICAgICBfaWQ6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICBjdXN0b21lck5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uQ3VzdG9tZXIsXHJcbiAgICAgIGJpbGxpbmdBZGRyZXNzOiBzZWxlY3RlZE9wdGlvbnM/LmJpbGxpbmdBZGRyZXNzLFxyXG4gICAgICBiaWxsaW5nQ2l0eTogc2VsZWN0ZWRPcHRpb25zPy5iaWxsaW5nQ2l0eVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyQ3VzdG9tZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXN0b21lck5hbWUoe1xyXG4gICAgICAgIF9pZDogJycsXHJcbiAgICAgICAgY3VzdG9tZXJOYW1lOiAnJyxcclxuICAgICAgICBiaWxsaW5nQWRkcmVzczogJycsXHJcbiAgICAgICAgYmlsbGluZ0NpdHk6ICcnXHJcbiAgICAgIH0pO1xyXG59IFxyXG4gIGNvbnN0IFtvcGVuQXV0b2NvbXBsZXRlMiwgc2V0T3BlbkF1dG9jb21wbGV0ZTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgIHNldE9wZW5BdXRvY29tcGxldGUyKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMiA9ICgpID0+IHtcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUl0ZW0gPSAobmV3SXRlbSk9PiB7XHJcbiAgICBzZXRJdGVtSW5mb3JtYXRpb24oW25ld0l0ZW0sLi4uSXRlbUluZm9ybWF0aW9uXSlcclxuICB9XHJcbiAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQxID0gaXRlbXMucmVkdWNlKChzdW0sIHJvdyk9PiAgc3VtICsgcm93Lml0ZW1BbW91bnQsMClcclxuICAgIHNldFN1YlRvdGFsKHJlc3VsdDEudG9GaXhlZCgyKSlcclxuICAgIGxldCBuZXdUb3RhbCA9IE1hdGgucm91bmQoKE51bWJlcihzdWJUb3RhbCkgKyBOdW1iZXIoc2hpcHBpbmcpICsgTnVtYmVyKGFkanVzdG1lbnROdW1iZXIpKSoxMDApLzEwMFxyXG4gICAgc2V0VG90YWxJbnZvaWNlKG5ld1RvdGFsKVxyXG4gICAgbGV0IG5ld0JhbGFuY2UgPSBNYXRoLnJvdW5kKCh0b3RhbEludm9pY2UtdG90YWwpKjEwMCkvMTAwXHJcbiAgICBzZXRCYWxhbmNlRHVlKG5ld0JhbGFuY2UpXHJcbiAgfSlcclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBpZiAodG90YWxJbnZvaWNlKSB7XHJcbiAgICAgIGNvbnN0IHdob2xlUGFydCA9IE1hdGguZmxvb3IodG90YWxJbnZvaWNlKVxyXG4gICAgICBjb25zdCBmcmFjdGlvbmFsUGFydCA9ICh0b3RhbEludm9pY2UgJSAxKS50b0ZpeGVkKDIpLnNwbGl0KCcuJylbMV07XHJcbiAgICAgIGNvbnN0IHdob2xlV29yZHMgPSBudW1iZXJUb1dvcmRzLnRvV29yZHMod2hvbGVQYXJ0KVxyXG4gICAgICBjb25zdCBmcmFjdGlvbmFsV29yZHMgPSBudW1iZXJUb1dvcmRzLnRvV29yZHMoZnJhY3Rpb25hbFBhcnQpXHJcbiAgICAgIHNldFRvdGFsVyhgJHt3aG9sZVdvcmRzfSBhbmQgJHtmcmFjdGlvbmFsV29yZHN9IGNlbnRzYClcclxuICAgIH1cclxuICB9LFt0b3RhbEludm9pY2VdKVxyXG4gIGNvbnN0IFtvcGVuMSwgc2V0T3BlbjFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbjEodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXT0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsVXBkYXRlLHNldExvYWRpbmdPcGVuTW9kYWxVcGRhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCxzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZU9wZW5VcGRhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsVXBkYXRlKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICB9LCA1MDApXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZShmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlY2lzaW9uID0gKG5hdmlnYXRlKSA9PiB7XHJcbiAgICAvL05hdmlnYXRlIEJhc2VkIG9uIHRoIERlY2lzaW9uXHJcbiAgICBpZiAobmF2aWdhdGUgPT09ICdwcmV2aW91cycpIHtcclxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0ZSA9PT0gJ3N0YXknKSB7XHJcbiAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIH0gXHJcbiAgfVxyXG4gICAgY29uc3QgW3JlZmVyZW5jZUluZm8sc2V0UmVmZXJlbmNlSW5mb10gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgaW52b2ljZVB1cmNoYXNlID0gJydcclxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChSZWZlcmVuY2VJbmZvLFJlZmVyZW5jZUluZm9OdW1iZXIpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICAgICAgcGVyc29uOnVzZXIuZGF0YS51c2VyTmFtZSArICcgQ3JlYXRlZCAnLFxyXG4gICAgICAgIHJlYXNvbjogIGBJTlYtJHtTdHJpbmcoUmVmZXJlbmNlSW5mb051bWJlcikucGFkU3RhcnQoNiwgJzAnKX0gRm9yICR7Y3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZX1gLFxyXG4gICAgICAgIGRhdGVOb3RpZmljYXRpb246ZGF0ZUNvbW1lbnRcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vZ2ctcHJvamVjdC1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL2VuZHBvaW50L2NyZWF0ZS1ub3RpZmljYXRpb24nLGRhdGEpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBzdGF0dXMgPSAnJ1xyXG4gICAgaWYgKHRvdGFsID4gMCAmJiB0b3RhbCA8IHRvdGFsSW52b2ljZSkge1xyXG4gICAgICBzdGF0dXM9J1BhcnRpYWxseS1QYWlkJ1xyXG4gICAgfWVsc2UgaWYgKHBhcnNlRmxvYXQodG90YWwpID09PSBwYXJzZUZsb2F0KHRvdGFsSW52b2ljZSkgJiYgcGFyc2VGbG9hdCh0b3RhbCkgIT09IDAgICkge1xyXG4gICAgICBzdGF0dXMgPSAnUGFpZCdcclxuICAgIH1lbHNle1xyXG4gICAgc3RhdHVzID0gJ0RyYWZ0J1xyXG4gIH1cclxuICBjb25zdCBbc2F2aW5nLHNldFNhdmluZ10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9YXN5bmMgKGUpPT57XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNhdmluZygndHJ1ZScpO1xyXG4gICAgICBjb25zdCBkYXRhID0ge2N1c3RvbWVyTmFtZSxpbnZvaWNlTnVtYmVyLGludm9pY2VEYXRlLGludm9pY2VEdWVEYXRlLGludm9pY2VTdWJqZWN0LGludm9pY2VQdXJjaGFzZSxpbnZvaWNlRGVmZWN0LFxyXG4gICAgICAgIHN0YXR1cyxpdGVtcywgc3ViVG90YWwsIG5vdGVJbmZvLCBhY3Rpb25UYWtlbiwgdG90YWwsIGJhbGFuY2VEdWUsIHRvdGFsVyxcclxuICAgICAgICBpbnZvaWNlTmFtZSxub3RlLHNoaXBwaW5nLGFkanVzdG1lbnQsYWRqdXN0bWVudE51bWJlcix0b3RhbEludm9pY2UsdGVybXMsc3luY2VkOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGFwaVVybCxkYXRhKTtcclxuICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgc2V0UmVmZXJlbmNlSW5mbyhyZXMuZGF0YS5kYXRhLmludm9pY2VOdW1iZXIpXHJcbiAgICAgICAgICAgIC8vIE9wZW4gTG9hZGluZyBWaWV3XHJcbiAgICAgICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm8gPSByZXMuZGF0YS5kYXRhLl9pZFxyXG4gICAgICAgICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm9OdW1iZXIgPSByZXMuZGF0YS5kYXRhLmludm9pY2VOdW1iZXJcclxuICAgICAgICAgICAgICBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oUmVmZXJlbmNlSW5mbyxSZWZlcmVuY2VJbmZvTnVtYmVyKVxyXG4gICAgICAgICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IGRiLmludm9pY2VTY2hlbWEucHV0KGRhdGEpXHJcbiAgaGFuZGxlT3BlbigpO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3tiYWNrZ3JvdW5kQ29sb3I6JyMzMDM2OGEnfX0+XHJcbiAgICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEFkZCBuZXcgaW52b2ljZSAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQmFja30+XHJcbiAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3tjb2xvcjond2hpdGUnfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mby8+XHJcbiAgICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0vPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7bWFyZ2luTGVmdDonMTBweCcsbWFyZ2luUmlnaHQ6JzEwcHgnfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7Y29sb3I6J3doaXRlJ319IC8+IFxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfT5cclxuICAgICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDxMaXN0IHN4PXt7aGVpZ2h0Oic3MDBweCd9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoMS8+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VG9vbGJhci8+XHJcbiAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogNH19ID5cclxuICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3thbGlnbkl0ZW1zOidjZW50ZXInLHBhZGRpbmc6JzE1cHgnfX0gc3BhY2luZz17Mn0gY29tcG9uZW50PXtQYXBlcn0+IFxyXG4gICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUgIT09ICcnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdDVXN0b21lciBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lICE9PSB1bmRlZmluZWQ/IGN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWU6Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3t3aWR0aDonMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJDdXN0b21lcn0gc3R5bGU9e3sgcG9zaXRpb246J3JlbGF0aXZlJywgZmxvYXQ6J3JpZ2h0J319PiBcclxuICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17e2NvbG9yOicjMjAyYTVhJ319Lz5cclxuICAgPC9JY29uQnV0dG9uPlxyXG4gICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2N1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pPT4gb3B0aW9uLkN1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VDdXN0b21lcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHtjaGlsZHJlbiwgLi4ub3RoZXJ9KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7YmFja2dyb3VuZENvbG9yOid3aGl0ZScsIGxlZnQ6JzAnLG1hcmdpblRvcDonMTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9PmhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMShlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSk9PmUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIENVU1RPTUVSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJDdXN0b21lciBOYW1lXCIgcmVxdWlyZWQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgIC8+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT4gXHJcbiAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiaW52b2ljZU51bWJlclwiPkludm9pY2UgTnVtYmVyPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdpbnZvaWNlTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdpbnZvaWNlTnVtYmVyJyBcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J0ludm9pY2UgTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW52b2ljZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0SW52b2ljZU51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPklOVi08L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT4gXHJcbiAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2ludm9pY2VEYXRlJyBcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKGludm9pY2VEYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSk9PiBzZXRJbnZvaWNlRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknICAgIFxyXG4gICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PiBcclxuICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2ludm9pY2VEdWVEYXRlJyBcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEdWUgRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhpbnZvaWNlRHVlRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpPT4gc2V0SW52b2ljZUR1ZURhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyB9fSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknICAgICBcclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT4gXHJcbiAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICBpZD0naW52b2ljZVN1YmplY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0naW52b2ljZVN1YmplY3QnIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTdWJqZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnZvaWNlU3ViamVjdH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRJbnZvaWNlU3ViamVjdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT4gXHJcbiAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICBpZD0naW52b2ljZURlZmVjdCdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdpbnZvaWNlRGVmZWN0JyBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGVmZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnZvaWNlRGVmZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldEludm9pY2VEZWZlY3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9J25vdGVJbmZvJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J25vdGVJbmZvJyBcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlSW5mb31cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTm90ZSdcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXROb3RlSW5mbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidibG9jaycscG9zaXRpb246J2ZpeGVkJyx6SW5kZXg6MSxmbG9hdDoncmlnaHQnLHJpZ2h0OictNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtfT5cclxuICAgICAgICAgICAgICA8QWRkIGNsYXNzTmFtZT0nYnRuMScgc3R5bGU9e3tmb250U2l6ZTonNDBweCd9fS8+ICBcclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkFkZFwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW1XaGl0ZX0+XHJcbiAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidncmF5Jyxmb250U2l6ZTonNDBweCd9fS8+ICBcclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nP1xyXG4gICAgICAgICAgICggICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZUluZm8xMCcgc3R5bGU9e3ttYXJnaW5MZWZ0OictMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RvY2stQTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRpc2NvdW50ICU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCIgPiAgXHJcbiAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoICBcclxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImRyb3BwYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoSXRlbSwgaSkgPT4gKCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtJdGVtLmlkUm93fSBkcmFnZ2FibGVJZD17YGRyb3BwYWJsZSR7SXRlbS5pZFJvd31gfSBpbmRleD17aX0+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezZ9PjxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPSduZXdEZXNjcmlwdGlvbicgaWQ9J25ld0Rlc2NyaXB0aW9uJyBcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0ubmV3RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsaSl9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnLCBmb250U2l6ZToxMn19ICAgICAgIFxyXG4gICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInLGNvbG9yOidyZWQnfX0vPiBcclxuICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTooXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7aGVpZ2h0OicxMDBweCd9fT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5pdGVtTmFtZT8gKFxyXG4gICAgICAgICAgICAgICggIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsYWxpZ25JdGVtczonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBoaWRkZW4gPSB7IEl0ZW0uaXRlbU5hbWU/SXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JzonJ30gc3g9e3tmb250U2l6ZTonMjNweCd9fT57SXRlbS5pdGVtTmFtZT9JdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvVXBwZXJDYXNlKCk6Jyd9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURlc2NyaXB0aW9uJyBpZD0naXRlbURlc2NyaXB0aW9uJyBcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSxpKX1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NDBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnLCBmb250U2l6ZToxMn19ICAgICAgIFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3RvcCc+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKT0+aGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246J3JlbGF0aXZlJywgZmxvYXQ6J3JpZ2h0J319PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3tjb2xvcjonIzIwMmE1YSd9fS8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5faWQgJiYgKFxyXG4gICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJFZGl0XCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCk9PmhhbmRsZU9wZW5JdGVtVXBkYXRlKEl0ZW0uaXRlbU5hbWUuX2lkKX0gc3R5bGU9e3sgcG9zaXRpb246J3JlbGF0aXZlJywgZmxvYXQ6J3JpZ2h0J319PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgc3R5bGU9e3tjb2xvcjonIzIwMmE1YSd9fS8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICApOihcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcid9fT5cclxuICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtmaWx0ZXJJdGVtSW5mb3JtYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uaXRlbU5hbWUrJy8nK29wdGlvbi5pdGVtQnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLG9wdGlvbik9PiAoPEJveCB7Li4ucHJvcHN9IHN4PXt7YmFja2dyb3VuZENvbG9yOicjZjJmMmYyJ319PntvcHRpb24uaXRlbU5hbWUrJy8nK29wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH0gey4uLnBhcmFtc30gcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucyx7aW5wdXRWYWx1ZX0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbUJyYW5kLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbURlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLG5ld1ZhbHVlKT0+aGFuZGxlQ2hhbmdlSXRlbShJdGVtLmlkUm93LCBuZXdWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoe2NoaWxkcmVuLCAuLi5vdGhlcn0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17e2JhY2tncm91bmRDb2xvcjond2hpdGUnLCBsZWZ0OicwJyxtYXJnaW5Ub3A6JzEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9PmhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMihlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSk9PmUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NzBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpPT5oYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24oSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOidyZWxhdGl2ZScsIGZsb2F0OidyaWdodCd9fT4gXHJcbiAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7Y29sb3I6JyMyMDJhNWEnfX0vPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RvY2snIGlkPSdzdG9jaycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5zdG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSxpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVF0eScgaWQ9J2l0ZW1RdHknIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSxpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1RdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1SYXRlJyBpZD0naXRlbVJhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUmF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSxpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EaXNjb3VudCcgaWQ9J2l0ZW1EaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMSB0byA1ICUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkIGlkPSdhbW91bnRUb3RhbEludm9pY2UnPntJdGVtLml0ZW1BbW91bnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCcsJyl9PC90ZD5cclxuICAgICAgIDx0ZCA+XHJcbiAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCk9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgIDxEZWxldGVJY29uICBzdHlsZT17e2N1cnNvcjoncG9pbnRlcicsY29sb3I6J3JlZCd9fS8+IFxyXG4gICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTonZmxleCd9fT5cclxuPEJsYWNrVG9vbHRpcCB0aXRsZT1cIk5ldy1Sb3dcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuPEljb25CdXR0b24gb25DbGljaz17KCk9PmFkZEl0ZW1Sb3coaSl9PlxyXG48QWRkICBzdHlsZT17e2NvbG9yOicjMjAyYTVhJ319Lz4gIFxyXG48L0ljb25CdXR0b24+XHJcbjwvQmxhY2tUb29sdGlwPiAgIFxyXG48QmxhY2tUb29sdGlwIHRpdGxlPVwiQmxhbmstUm93XCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbjxJY29uQnV0dG9uIG9uQ2xpY2s9eygpPT5hZGRJdGVtV2hpdGVSb3coaSl9PlxyXG48QWRkICBzdHlsZT17e2NvbG9yOidncmF5J319Lz4gIFxyXG48L0ljb25CdXR0b24+XHJcbjwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PiAgXHJcbiAgICAgICAgICAgICAgICAgICl9ICBcclxuICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT4gIFxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAoPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnIHN0eWxlPXt7bWFyZ2luTGVmdDonLTIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0b2NrLUE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EaXNjb3VudCAlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiID4gIFxyXG4gICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkcm9wcGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9ICBcclxuICAgICAgICAgICAgICAgICAgICAgID4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKEl0ZW0sIGkpID0+ICggIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17SXRlbS5pZFJvd30gZHJhZ2dhYmxlSWQ9e2Bkcm9wcGFibGUke0l0ZW0uaWRSb3d9YH0gaW5kZXg9e2l9PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc30gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs2fT48VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgbmFtZT0nbmV3RGVzY3JpcHRpb24nIGlkPSduZXdEZXNjcmlwdGlvbicgXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLm5ld0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLGkpfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ31cclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScsIGZvbnRTaXplOjEyfX0gICAgICAgXHJcbiAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCk9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgIDxEZWxldGVJY29uICBzdHlsZT17e2N1cnNvcjoncG9pbnRlcicsY29sb3I6J3JlZCd9fS8+IFxyXG4gICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3toZWlnaHQ6JzEwMHB4J319PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lPyAoXHJcbiAgICAgICAgICAgICAgKCAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxhbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGhpZGRlbiA9IHsgSXRlbS5pdGVtTmFtZT9JdGVtLml0ZW1OYW1lLml0ZW1OYW1lID09PSAnZW1wdHknOicnfSBzeD17e2ZvbnRTaXplOicyM3B4J319PntJdGVtLml0ZW1OYW1lP0l0ZW0uaXRlbU5hbWUuaXRlbU5hbWUudG9VcHBlckNhc2UoKTonJ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGVzY3JpcHRpb24nIGlkPSdpdGVtRGVzY3JpcHRpb24nIFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLGkpfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzQ0MHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScsIGZvbnRTaXplOjEyfX0gICAgICAgXHJcbiAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpPT5oYW5kbGVTaG93QXV0b2NvbXBsZXRlKEl0ZW0uaWRSb3cpfSBzdHlsZT17eyBwb3NpdGlvbjoncmVsYXRpdmUnLCBmbG9hdDoncmlnaHQnfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17e2NvbG9yOicjMjAyYTVhJ319Lz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBJdGVtLml0ZW1OYW1lLl9pZCAmJiAoXHJcbiAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkVkaXRcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKT0+aGFuZGxlT3Blbkl0ZW1VcGRhdGUoSXRlbS5pdGVtTmFtZS5faWQpfSBzdHlsZT17eyBwb3NpdGlvbjoncmVsYXRpdmUnLCBmbG9hdDoncmlnaHQnfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdCBzdHlsZT17e2NvbG9yOicjMjAyYTVhJ319Lz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICApOihcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcid9fT5cclxuICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtmaWx0ZXJJdGVtSW5mb3JtYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uaXRlbU5hbWUrJy8nK29wdGlvbi5pdGVtQnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLG9wdGlvbik9PiAoPEJveCB7Li4ucHJvcHN9PntvcHRpb24uaXRlbU5hbWUrJy8nK29wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH0gey4uLnBhcmFtc30gcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucyx7aW5wdXRWYWx1ZX0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbUJyYW5kLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbURlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLG5ld1ZhbHVlKT0+aGFuZGxlQ2hhbmdlSXRlbShJdGVtLmlkUm93LCBuZXdWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoe2NoaWxkcmVuLCAuLi5vdGhlcn0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17e2JhY2tncm91bmRDb2xvcjond2hpdGUnLCBsZWZ0OicwJyxtYXJnaW5Ub3A6JzEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9PmhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMihlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSk9PmUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NzBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpPT5oYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24oSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOidyZWxhdGl2ZScsIGZsb2F0OidyaWdodCd9fT4gXHJcbiAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7Y29sb3I6JyMyMDJhNWEnfX0vPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RvY2snIGlkPSdzdG9jaycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5zdG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSxpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVF0eScgaWQ9J2l0ZW1RdHknIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSxpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1RdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1SYXRlJyBpZD0naXRlbVJhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUmF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGlzY291bnQnIGlkPSdpdGVtRGlzY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzEgdG8gNSAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCBpZD0nYW1vdW50VG90YWxJbnZvaWNlJz57SXRlbS5pdGVtQW1vdW50LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywnLCcpfTwvdGQ+XHJcbiAgICAgICA8dGQgPlxyXG4gICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInLGNvbG9yOidyZWQnfX0vPiBcclxuICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnfX0+XHJcbjxCbGFja1Rvb2x0aXAgdGl0bGU9XCJOZXctUm93XCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbjxJY29uQnV0dG9uIG9uQ2xpY2s9eygpPT5hZGRJdGVtUm93KGkpfT5cclxuPEFkZCAgc3R5bGU9e3tjb2xvcjonIzIwMmE1YSd9fS8+ICBcclxuPC9JY29uQnV0dG9uPlxyXG48L0JsYWNrVG9vbHRpcD4gICBcclxuPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkJsYW5rLVJvd1wiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG48SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKT0+YWRkSXRlbVdoaXRlUm93KGkpfT5cclxuPEFkZCAgc3R5bGU9e3tjb2xvcjonZ3JheSd9fS8+ICBcclxuPC9JY29uQnV0dG9uPlxyXG48L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT4gIFxyXG4gICAgICAgICAgICAgICAgICApfSAgXHJcbiAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+ICBcclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+IFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZ2FwOicyMHB4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbid9fT5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICBpZD0nbm90ZSdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdub3RlJyBcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdJbnZvaWNlIE5vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0Tm90ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc1MCUnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyB9fSAgICAgICBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgPHRhYmxlIGNsYXNzTmFtZT1cImZpcnN0VGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e2JvcmRlckJvdHRvbTonMXB4IHNvbGlkIGJsYWNrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0J319PlN1Yi1Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgaWQ9J3N1YlRvdGFsJ1xyXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdzdWJUb3RhbCcgXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJUb3RhbH1cclxuICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3tib3JkZXJCb3R0b206JzFweCBzb2xpZCBibGFjayd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5TaGlwcGluZyBGZWVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCAgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBpZD0nc2hpcHBpbmcnXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3NoaXBwaW5nJyBcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NoaXBwaW5nfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRTaGlwcGluZyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+ICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2FkanVzdG1lbnQnIGlkPSdhZGp1c3RtZW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGp1c3RtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRBZGp1c3RtZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzI1MHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdhZGp1c3RtZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdhZGp1c3RtZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YWRqdXN0bWVudE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0QWRqdXN0bWVudE51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkICBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgaWQ9J3RvdGFsSW52b2ljZSdcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT0ndG90YWxJbnZvaWNlJyBcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsSW52b2ljZX1cclxuICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e2JvcmRlckJvdHRvbTonMXB4IHNvbGlkIGJsYWNrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5CYWxhbmNlIER1ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHRkICBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICBpZD0nYmFsYW5jZUR1ZSdcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT0nYmFsYW5jZUR1ZScgXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYWxhbmNlRHVlfVxyXG4gICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5Ub3RhbCBJbiBXb3JkczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3RhbFdcIiBpZD1cInRvdGFsV1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWxXfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICBpZD0ndGVybXMnXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGVybXMnIFxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rlcm1zfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdJbnZvaWNlIFRlcm1zJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldFRlcm1zKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzYwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgIHNhdmluZyAhPT0gJ3RydWUnID8gPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17e3dpZHRoOicxMDAlJ319PlNhdmU8L2J1dHRvbj4gOiA8cCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3t3aWR0aDonMTAwJScsIHRleHRBbGlnbjonY2VudGVyJ319PlNhdmluZy4uLjwvcD5cclxuICAgICAgfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICAgICAgICAgPE1vZGFsICBcclxuICAgICAgICAgIG9wZW49e29wZW4xfVxyXG4gICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VCYWNrfVxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICA+XHJcbiAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBzdHlsZT17eyBwb3NpdGlvbjoncmVsYXRpdmUnLCBmbG9hdDoncmlnaHQnfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3tjb2xvcjonIzIwMmE1YSd9fS8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD4gIFxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7YWxpZ25JdGVtczonY2VudGVyJyxwYWRkaW5nOicxNXB4J319IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkRvIHlvdSB3YW50IHRvIHN0b3AgY3JlYXRpbmcgSW52b2ljZSA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17e2NvbG9yOidyZWQnfX0+Tm90ZSA6PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+IElmIHlvdSBzdG9wIGNyZWF0aW5nIHdpdGhvdXQgc2F2aW5nLCBhbGwgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdDwvc3Bhbj48L3A+ICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9JbnZvaWNlVmlld0FkbWluJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319PlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5ObzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nPyg8TG9hZGVyLz5cclxuICAgICAgICAgICAgICAgICAgKTooXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17e2NvbG9yOidncmVlbicsaGVpZ2h0Oic0MHB4Jywgd2lkdGg6JzQwcHgnfX0vPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGdhcDonNjBweCcsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBoYW5kbGVEZWNpc2lvbignc3RheScpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQWRkIE5ld1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gaGFuZGxlRGVjaXNpb24oJ3ByZXZpb3VzJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZz8oPExvYWRlci8+XHJcbiAgICAgICAgICAgICAgICAgICk6KFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJyx0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17e2NvbG9yOidyZWQnLGhlaWdodDonNDBweCcsIHdpZHRoOic0MHB4J319Lz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7Y29sb3I6J3JlZCd9fT5TYXZpbmcgRmFpbGVkPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgVHJ5IEFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbFVwZGF0ZX1cclxuICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVXBkYXRlfVxyXG4gICAgICAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZz8oPExvYWRlci8+XHJcbiAgICAgICAgICAgICAgICAgICk6KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2p1c3RpZnlDb250ZW50OidjZW50ZXInLHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3tjb2xvcjonZ3JlZW4nLGhlaWdodDonNDBweCcsIHdpZHRoOic0MHB4J319Lz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBnYXA6JzYwcHgnLGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUxfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTF9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX0gc3R5bGU9e3sgcG9zaXRpb246J3JlbGF0aXZlJywgZmxvYXQ6J3JpZ2h0J319PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7Y29sb3I6JyMyMDJhNWEnfX0vPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonNjAwcHgnLCBwYWRkaW5nOicyMHB4JyxvdmVyZmxvdzonaGlkZGVuJyxvdmVyZmxvd1k6J3Njcm9sbCd9fT5cclxuICAgICAgICAgICAgICA8Q3VzdG9tZXJGb3JtVmlldzIgb25DcmVhdGVPcHRpb249e2hhbmRsZUNyZWF0ZUN1c3RvbWVyfSBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfS8+ICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9IHN0eWxlPXt7IHBvc2l0aW9uOidyZWxhdGl2ZScsIGZsb2F0OidyaWdodCd9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17e2NvbG9yOicjMjAyYTVhJ319Lz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzYwMHB4JywgcGFkZGluZzonMjBweCcsb3ZlcmZsb3c6J2hpZGRlbicsb3ZlcmZsb3dZOidzY3JvbGwnfX0+XHJcbiAgICAgICAgICAgICAgPEl0ZW1Gb3JtVmlldzIgb25DcmVhdGVPcHRpb249e2hhbmRsZUNyZWF0ZUl0ZW19IG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9Lz4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5JdGVtVXBkYXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlSXRlbVVwZGF0ZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUyLCB3aWR0aDogODAwIH19PlxyXG4gICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUl0ZW1VcGRhdGV9IHN0eWxlPXt7IHBvc2l0aW9uOidyZWxhdGl2ZScsIGZsb2F0OidyaWdodCd9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17e2NvbG9yOicjMjAyYTVhJ319Lz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzYwMHB4JywgcGFkZGluZzonMjBweCcsb3ZlcmZsb3c6J2hpZGRlbicsb3ZlcmZsb3dZOidzY3JvbGwnfX0+XHJcbiAgICAgICAgICAgIDxJdGVtVXBkYXRlVmlldzIgb25DbG9zZT17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfSBpZD17aWRJdGVtfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZvaWNlRm9ybUNsb25lXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3MvU2lkZWJhck5ldy5zY3NzJ1xyXG5pbXBvcnQgeyBPdXRsZXQsIE5hdkxpbmssIExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IERhc2hib2FyZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgUGVybUlkZW50aXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Blcm1JZGVudGl0eSc7XHJcbmltcG9ydCBMaXN0QWx0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xpc3RBbHQnO1xyXG5pbXBvcnQgRGVzY3JpcHRpb25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgUmVjZWlwdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZWNlaXB0JztcclxuaW1wb3J0IE1vdmluZ0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3ZpbmcnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3MnO1xyXG5pbXBvcnQgSW5zZXJ0RHJpdmVGaWxlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0luc2VydERyaXZlRmlsZSc7XHJcbmltcG9ydCBSZXN0b3JlUGFnZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXN0b3JlUGFnZSc7XHJcbmltcG9ydCBSZXF1ZXN0UXVvdGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUmVxdWVzdFF1b3RlJztcclxuaW1wb3J0IE1vbmV0aXphdGlvbk9uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vbmV0aXphdGlvbk9uJztcclxuaW1wb3J0IEVuZ2luZWVyaW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VuZ2luZWVyaW5nJztcclxuaW1wb3J0IHsgRXhwbGljaXQsIFNob3BwaW5nQmFnT3V0bGluZWQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IFJvb21QcmVmZXJlbmNlc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Sb29tUHJlZmVyZW5jZXMnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbUJ1dHRvbiwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQsIG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFBheW1lbnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGF5bWVudCc7XHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3JlVmVydCc7XHJcbmZ1bmN0aW9uIFNpZGViYXJEYXNoMSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8RGFzaGJvYXJkSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhc2hib2FyZFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UGVybUlkZW50aXR5SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkN1c3RvbWVyXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPExpc3RBbHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiU3RvcmVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlcXVlc3RRdW90ZUljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJRdW90YXRpb25cIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEZXNjcmlwdGlvbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbnZvaWNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9uZXRpemF0aW9uT25JY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGF5bWVudFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFNob3BwaW5nQmFnT3V0bGluZWQgLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEYWlseSBFeHBlbnNlc1wiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ICA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxSb29tUHJlZmVyZW5jZXNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHJvamVjdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlY2VpcHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHVyY2hhc2VzIFJlcXVlc3RcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgPEVuZ2luZWVyaW5nSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk1haW50ZW5hbmNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTW9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJEYXNoMSIsImltcG9ydCBEZXhpZSBmcm9tIFwiZGV4aWVcIjtcclxuXHJcbmNvbnN0IGRiID0gbmV3IERleGllKCdHbG9iYWxHYXRlJyk7XHJcblxyXG5kYi52ZXJzaW9uKDEpLnN0b3Jlcyh7XHJcbiAgICBjdXN0b21lclNjaGVtYTogJysraWQsQ3VzdG9tZXIsX2lkLGN1c3RvbWVyVHlwZSxkZXNpZ25hdGlvbixjdXN0b21lckZpcnN0TmFtZSwgY3VzdG9tZXJMYXN0TmFtZSxjdXN0b21lckZ1bGxOYW1lLGNvbXBhbnlOYW1lLGN1c3RvbWVyRW1haWwsY3VzdG9tZXJDb21wYW55UGhvbmUsY3VzdG9tZXJQaG9uZSxjdXJyZW5jeSxwYXltZW50VGVybXMsIGJpbGxpbmdBZGRyZXNzLGJpbGxpbmdDaXR5LGNyZWRpdCxzaGlwcGluZ0FkZHJlc3Msc2hpcHBpbmdDaXR5LGN1c3RvbWVyRGVzY3JpcHRpb24sc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgc3VwcGxpZXJTY2hlbWE6ICcrK2lkLF9pZCxzdXBwbGllck5hbWUsc3RvcmVOYW1lLGN1c3RvbWVyUGhvbmUxLGN1c3RvbWVyUGhvbmUyLGFkZHJlc3MsZGVzY3JpcHRpb24sc3luY2VkJyxcclxuICAgIGl0ZW1TY2hlbWE6ICcrK2lkLGl0ZW1OYW1lLF9pZCxpdGVtVXBjLHR5cGVJdGVtLGl0ZW1TdG9yZSx1bml0LGl0ZW1EaW1lbnNpb24saXRlbVdlaWdodCxpdGVtQ2F0ZWdvcnksaXRlbU1hbnVmYWN0dXJlcixpdGVtQnJhbmQsaXRlbUNvc3RQcmljZSxpdGVtUXVhbnRpdHksaXRlbVNlbGxpbmdQcmljZSxpdGVtRGVzY3JpcHRpb24sc3RvY2tPbkhhbmQsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgaXRlbVNjaGVtYVZpZXc6ICcrK2lkLF9pZCcsXHJcbiAgICBkYWlseUV4cGVuc2VTY2hlbWE6ICcrK2V4cGVuc2VOdW1iZXIsX2lkLGV4cGVuc2VDYXRlZ29yeSxhY2NvdW50TmFtZSxkZXNjcmlwdGlvbixleHBlbnNlRGF0ZSxhbW91bnQsZW1wbG95ZWVOYW1lLHJhdGUsdG90YWwsYWNjb3VudE5hbWVJbmZvLHJlYXNvbixDcmVhdGUsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgZGFpbHlFeHBlbnNlVmlld1NjaGVtYTogJysrZXhwZW5zZU51bWJlcixfaWQnLFxyXG4gICAgaGlkZGVuU2NoZW1hOiAnKytpZCxfaWQsaWRSb3csaGlkZGVuQnlDRU8nLFxyXG4gICAgaXRlbUNvZGVTY2hlbWE6ICcrK2lkLGl0ZW1DYXRlZ29yeSxfaWQsaXRlbUNvZGUnLFxyXG4gICAgaXRlbVVuaXRTY2hlbWE6ICcrK2lkLGl0ZW1Vbml0LF9pZCcsXHJcbiAgICBkZXBhcnRtZW50U2NoZW1hOiAnKytpZCxkZXBhcnRtZW50LF9pZCcsXHJcbiAgICBlc3RpbWF0ZVNjaGVtYTogJysrZXN0aW1hdGVOdW1iZXIsX2lkLGN1c3RvbWVyTmFtZSxlc3RpbWF0ZURhdGUsZXN0aW1hdGVEZWZlY3QsZXN0aW1hdGVTdWJqZWN0LHN0YXR1cyxpdGVtcyxzdWJUb3RhbCx0b3RhbCx0b3RhbFcsbm90ZSxlc3RpbWF0ZU5hbWUsQ3JlYXRlLGJhbGFuY2VEdWUsdGVybXMsc2hpcHBpbmcsbm90ZUluZm8sYWRqdXN0bWVudCxhZGp1c3RtZW50TnVtYmVyLHRvdGFsSW52b2ljZSxSZWYsUmVmZXJlbmNlTmFtZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBpbnZvaWNlU2NoZW1hOiAnKytpbnZvaWNlTnVtYmVyLF9pZCxjdXN0b21lck5hbWUsaW52b2ljZURhdGUsaW52b2ljZUR1ZURhdGUsaW52b2ljZVN1YmplY3QsaW52b2ljZVB1cmNoYXNlLGludm9pY2VEZWZlY3Qsc3RhdHVzLGl0ZW1zLHN1YlRvdGFsLFJlZmVyZW5jZU5hbWUsUmVmZXJlbmNlTmFtZTIsdG90YWwsbm90ZUluZm8sYmFsYW5jZUR1ZSx0b3RhbFcsYWN0aW9uVGFrZW4saW52b2ljZU5hbWUsUG9zaXRpb24sbm90ZSxDcmVhdGUsc2hpcHBpbmcsYWRqdXN0bWVudCxhZGp1c3RtZW50TnVtYmVyLHRvdGFsSW52b2ljZSx0ZXJtcyxSZWYsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgaW52b2ljZVZpZXdTY2hlbWE6ICcrK2ludm9pY2VOdW1iZXIsX2lkJyxcclxuICAgIHBvc1NjaGVtYTogJysrZmFjdHVyZU51bWJlcixfaWQsY3VzdG9tZXJOYW1lLGludm9pY2VEYXRlLHRpbWUsc3RhdHVzLGl0ZW1zLHN1YlRvdGFsLHRvdGFsRkMsdG90YWxVU0QscmF0ZSxDcmVhdGUsYmFsYW5jZUR1ZSxub3RlLHRvdGFsSW52b2ljZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBwYXltZW50U2NoZW1hOiAnKytwYXltZW50TnVtYmVyLF9pZCxjdXN0b21lck5hbWUsYW1vdW50LGJhbmtDaGFyZ2UsbW9kZXMscGF5bWVudERhdGUscmVmZXJlbmNlTnVtYmVyLGRlc2NyaXB0aW9uLHJlbWFpbmluZyxDcmVhdGUsUGF5bWVudFJlY2VpdmVkRkMsUGF5bWVudFJlY2VpdmVkVVNELFRvdGFsQW1vdW50LHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHByb2plY3RTY2hlbWE6ICcrK3Byb2plY3ROdW1iZXIsX2lkLGN1c3RvbWVyTmFtZSxwcm9qZWN0TmFtZSxzdGF0dXMscGhhc2UsZGVzY3JpcHRpb24sc3RhcnREYXRlLHZpc2l0RGF0ZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBwdXJjaGFzZVNjaGVtYTogJysrcHVyY2hhc2VOdW1iZXIsX2lkLGN1c3RvbWVyTmFtZSxub3RlSW5mbyxlc3RpbWF0ZURlZmVjdCxlc3RpbWF0ZVN1YmplY3QscHVyY2hhc2VOYW1lLHByb2plY3ROYW1lLGRlc2NyaXB0aW9uLFBvc2l0aW9uLHB1cmNoYXNlRGF0ZSxzdGF0dXMsc3RhdHVzSW5mbyxpdGVtcyxwdXJjaGFzZUFtb3VudDEscHVyY2hhc2VBbW91bnQyLFJlZmVyZW5jZU5hbWUsUmVmZXJlbmNlTmFtZTIsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgcHVyY2hhc2VTY2hlbWFWaWV3OiAnKytwdXJjaGFzZU51bWJlcixfaWQnLFxyXG4gICAgbWFpbnRlbmFuY2VTY2hlbWE6ICcrK3NlcnZpY2VOdW1iZXIsY3VzdG9tZXJOYW1lLF9pZCxhY3Rpb24sc2VydmljZU5hbWUsc2VydmljZURhdGUsbGFib3JRdHksdG90YWxMYWJvckZlZXNHZW5lcmFsZSx0ZWNobmljaWFuQXNzaWduLG5vdGUsdG90YWxMYWJvckZlZXMsbGFib3JQZXJjZW50YWdlLHRvdGFsRGlzY291bnQsbGFib3JEaXNjb3VudCx2aXNpdERhdGUsc3RhdHVzLGl0ZW1zLGl0ZW1EZXNjcmlwdGlvbkluZm8sYnJhbmQsYWN0aW9uVGFrZW4sbW9kZWwsd2FycmFudHksc2VyaWFsTm8sZGVmZWN0RGVzY3JpcHRpb24sYWRqdXN0bWVudCxhZGp1c3RtZW50TnVtYmVyLHRvdGFsSW52b2ljZSxzdWJUb3RhbCxDb252ZXJ0ZWQsUmVmZXJlbmNlTmFtZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBtYWludGVuYW5jZVZpZXdTY2hlbWE6ICcrK3NlcnZpY2VOdW1iZXIsX2lkJyxcclxuICAgIGVtcGxveWVlU2NoZW1hOiAnKytlbXBsb3llZUlkLF9pZCxqb2luRGF0ZSxlbXBsb3llZU5hbWUsZW1wbG95ZWVBZGRyZXNzLGVtcGxveWVlRW1haWwsZW1wbG95ZWVQaG9uZSxlbXBsb3llZVJvbGUsZGVwYXJ0bWVudCxkYXRlT2ZCaXJ0aCxHZW5kZXIsc3RhdHVzLHN0YXR1c01hcml0YWwsaWRlbnRpZmllcixpZGVudGlmaWVyTnVtYmVyLGV4cGlyZURhdGUsc2FsYXJ5LHJlYXNvbjEsZGVzY3JpcHRpb24sYmFua0FjY291bnROdW1iZXIsYmFua05hbWUsb3RoZXIsYm91bmNlQWxsb3dhbmNlcyxmb29kQmFzaWMsYmFzaWNUcmFuc3BvcnQsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgcGF5Um9sbFNjaGVtYTogJysrcGF5TnVtYmVyLF9pZCxwYXlEYXRlLG1vbnRoLGRheXNXLHN0YXR1cyxkYXlzT3BlbixMb3BzLGJhc2ljU2FsYXJ5LGVhcm5pbmdTYWxhcnksYWR2YW5jZWRTYWxhcnksYmFzaWNUcmFuc3BvcnQsdHJhbnNwb3J0RWFybmluZyx0cmFuc3BvcnREZWR1Y3Rpb24sZm9vZEJhc2ljLGZvb2RFYXJuaW5nLGl0ZW1Mb3N0LGZvb2REZWR1Y3Rpb24sYm91bmNlQWxsb3dhbmNlcyxib3VuY2VBbGxvd2FuY2VzRWFybmluZyxvdGhlcixvdGhlckVhcm5pbmcsbG9hbixib251cyx0b3RhbEFjdHVhbFNhbGFyeSx0b3RhbEFjdHVhbEVhcm5pbmcsdG90YWxBY3R1YWxEZWR1Y3Rpb24sdG90YWxOZXQsdG90YWxQYWlkLHJhdGUsdG90YWxQYWlkRG9sbGFycyx3b3JkcyxlbXBsb3llZU5hbWUsYW1vdW50UGF5VVNELGFtb3VudFBheUZDLENyZWRpdEZDLENyZWRpdFVTRCxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBlbXBsb3llZVVzZXJTY2hlbWE6ICdfaWQsZW1wbG95ZWVOYW1lLGVtcGxveWVlRW1haWwscm9sZSxwYXNzd29yZCx2ZXJpZmljYXRpb25Db2RlLGNvZGVFeHBpcmF0aW9uLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHVzZXJBY2NvdW50OiAnaWRJbmZvLGVtcGxveWVlTmFtZSxwYXNzd29yZCcsXHJcbiAgICBncmFudEFjY2Vzc1NjaGVtYTogJysraWQsZW1wbG95ZWVOYW1lLF9pZCx1c2VySUQsbW9kdWxlcycsXHJcbiAgICBjYXNoU2NoZW1hOiAnKytjYXNoTnVtYmVyLF9pZCxjYXNoRGF0ZSxzdGF0dXMsdG90YWxDYXNoLGFtb3VudCx0b3RhbEl0ZW1QdXJjaGFzZVVTRCx0b3RhbFBheXJvbGxVU0QsdG90YWxFeHBlbnNlc1VTRCx0b3RhbEV4cGVuc2VzRkMsdG90YWxDYXNoVVNELHRvdGFsQ2FzaEZDLHJldHVybkFtb3VudEZDLHJldHVybkFtb3VudFVTRCxSZW1haW5pbmdBbW91bnRGQyxSZW1haW5pbmdBbW91bnRVU0QsQ3JlYXRlLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHJhdGVTY2hlbWE6ICcrK2lkLF9pZCxyYXRlJyxcclxuICAgIHBheW1lbnRSYXRlU2NoZW1hOiAnKytpZCxfaWQscGF5bWVudFJhdGUnLFxyXG4gICAgZGFpbHlFeHBlbnNlc0NhdGVnb3J5U2NoZW1hOiAnKytpZCxfaWQsZXhwZW5zZXNDYXRlZ29yeScsXHJcbiAgICBlbXBsb3llZUF0dGVuZGFuY2VTY2hlbWE6ICcrK2lkSW5mbyxfaWQsaWQsdGltZUluLHRpbWVPdXQsbmFtZSxvYnNlcnZhdGlvbixub3RlLGRheXNXTixzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBpdGVtUHVyY2hhc2VTY2hlbWE6ICcrK2l0ZW1QdXJjaGFzZU51bWJlcixfaWQsaXRlbVB1cmNoYXNlRGF0ZSxtYW51ZmFjdHVyZXIsbWFudWZhY3R1cmVyTnVtYmVyLGRlc2NyaXB0aW9uLG5vdGUsQ3JlYXRlLHRvdGFsLHRvdGFsRkMsaXRlbXMscmVhc29uLHByb2plY3ROYW1lJyxcclxuICAgIGl0ZW1QdXJjaGFzZVZpZXdTY2hlbWE6ICcrK2l0ZW1QdXJjaGFzZU51bWJlcixfaWQnLFxyXG4gICAgaXRlbVJldHVybjogJysrb3V0TnVtYmVyLF9pZCxpdGVtT3V0RGF0ZSxyZWFzb24scmVmZXJlbmNlLGl0ZW1zUXR5QXJyYXksZGVzY3JpcHRpb24sQ3JlYXRlLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIGl0ZW1SZXR1cm5WaWV3OiAnKytvdXROdW1iZXIsX2lkJyxcclxuICAgIGl0ZW1PdXRTY2hlbWE6ICcrK2lkSW5mbyxvdXROdW1iZXIsX2lkLGl0ZW1PdXREYXRlLHJlYXNvbixyZWZlcmVuY2UsaXRlbXNRdHlBcnJheSxkZXNjcmlwdGlvbixDcmVhdGUsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgaXRlbU91dFZpZXdTY2hlbWE6ICcrK2lkSW5mbyxfaWQnLFxyXG4gICAgcHVyY2hhc2VPcmRlcjogJysrb3V0TnVtYmVyLF9pZCx0b3RhbFVTRCx0b3RhbCx0b3RhbEZDLGl0ZW1PdXREYXRlLHJlYXNvbixyZWZlcmVuY2UsaXRlbXNRdHlBcnJheSxtYW51ZmFjdHVyZXIsc3RhdHVzLENvbnZlcnRlZCxtYW51ZmFjdHVyZXJOdW1iZXIsZGVzY3JpcHRpb24sSXBSZWxhdGVkLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHB1cmNoYXNlT3JkZXJWaWV3OiAnKytvdXROdW1iZXIsX2lkJyxcclxuICAgIHBsYW5pbmdTY2hlbWE6ICcrK2lkSW5mbyxwbGFuaW5nRGF0ZSxlbXBsb3llZU5hbWUsZW1wbG95ZWVJRCxwcm9qZWN0TmFtZSxkYXlQYXlVU2Qsd29ya051bWJlcixzdGF0dXMscGxhbmluZ0Rlc2NyaXB0aW9uLHBsYW5pbmdUYXNrJyxcclxuICAgIHJhdGVSZXR1cm5TY2hlbWE6ICcrK2lkLCBfaWQsIHJhdGVSJyxcclxuXHJcbiAgICAvLyBDYWNoZSB0YWJsZXMgZm9yIGh5YnJpZCBhcmNoaXRlY3R1cmUgKHYyLjQuMClcclxuICAgIC8vIFRoZXNlIHN0b3JlIGZ1bGwgZGF0YXNldHMgbG9jYWxseSBmb3IgaW5zdGFudCBxdWVyaWVzXHJcbiAgICBpdGVtUHVyY2hhc2VDYWNoZTogJ19pZCwgaXRlbVB1cmNoYXNlRGF0ZSwgaXRlbXMsIG1hbnVmYWN0dXJlcicsXHJcbiAgICBpdGVtT3V0Q2FjaGU6ICdfaWQsIGl0ZW1PdXREYXRlLCBpdGVtc1F0eUFycmF5JyxcclxuICAgIHBvc0NhY2hlOiAnX2lkLCBpbnZvaWNlRGF0ZSwgaXRlbXMsIGN1c3RvbWVyTmFtZScsXHJcbiAgICBpdGVtUmV0dXJuQ2FjaGU6ICdfaWQsIGl0ZW1PdXREYXRlLCBpdGVtc1F0eUFycmF5JyxcclxuICAgIGludm9pY2VDYWNoZTogJ19pZCwgaW52b2ljZU51bWJlciwgY3VzdG9tZXJOYW1lLCBpbnZvaWNlRGF0ZSwgaXRlbXMnLFxyXG4gICAgZXN0aW1hdGVDYWNoZTogJ19pZCwgZXN0aW1hdGVOdW1iZXIsIGN1c3RvbWVyTmFtZSwgZXN0aW1hdGVEYXRlLCBpdGVtcycsXHJcbiAgICBjdXN0b21lckNhY2hlOiAnX2lkLCBjdXN0b21lckZ1bGxOYW1lLCBjb21wYW55TmFtZSwgY3VzdG9tZXJFbWFpbCcsXHJcbiAgICBzdXBwbGllckNhY2hlOiAnX2lkLCBzdXBwbGllck5hbWUsIHN0b3JlTmFtZScsXHJcbiAgICBwcm9qZWN0Q2FjaGU6ICdfaWQsIHByb2plY3ROdW1iZXIsIHByb2plY3ROYW1lLCBjdXN0b21lck5hbWUnLFxyXG4gICAgbWFpbnRlbmFuY2VDYWNoZTogJ19pZCwgc2VydmljZU51bWJlciwgc2VydmljZU5hbWUsIGN1c3RvbWVyTmFtZSwgaXRlbXMnLFxyXG4gICAgZW1wbG95ZWVDYWNoZTogJ19pZCwgZW1wbG95ZWVOYW1lLCBlbXBsb3llZUVtYWlsLCBlbXBsb3llZVJvbGUsIGRlcGFydG1lbnQnLFxyXG4gICAgcGF5cm9sbENhY2hlOiAnX2lkLCBwYXlOdW1iZXIsIHBheURhdGUsIG1vbnRoLCBlbXBsb3llZU5hbWUnLFxyXG4gICAgcmF0ZUNhY2hlOiAnX2lkLCByYXRlJyxcclxuICAgIHVzZXJDYWNoZTogJ19pZCwgZW1wbG95ZWVOYW1lLCByb2xlJyxcclxuICAgIGdyYW50QWNjZXNzQ2FjaGU6ICdfaWQsIHVzZXJJRCwgZW1wbG95ZWVOYW1lLCBtb2R1bGVzJyxcclxuICAgIGNvbXBhbnlQcm9maWxlQ2FjaGU6ICdfaWQnLFxyXG4gICAgcHVyY2hhc2VPcmRlckNhY2hlOiAnX2lkLCBvdXROdW1iZXIsIG1hbnVmYWN0dXJlciwgc3RhdHVzJyxcclxuICAgIHBheW1lbnRDYWNoZTogJ19pZCwgcGF5bWVudE51bWJlciwgY3VzdG9tZXJOYW1lLCBwYXltZW50RGF0ZScsXHJcbiAgICBjYXNoQ2FjaGU6ICdfaWQsIGNhc2hOdW1iZXIsIGNhc2hEYXRlLCBzdGF0dXMnLFxyXG4gICAgZGFpbHlFeHBlbnNlQ2FjaGU6ICdfaWQsIGV4cGVuc2VOdW1iZXIsIGV4cGVuc2VDYXRlZ29yeSwgZXhwZW5zZURhdGUnLFxyXG4gICAgLy8gU3luYyBtZXRhZGF0YVxyXG4gICAgc3luY01ldGFkYXRhOiAnKytpZCwgdGFibGVOYW1lLCBsYXN0U3luYywgcmVjb3JkQ291bnQnXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuIiwiJ3VzZSBzdHJpY3QnOyBcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdG9PcmRpbmFsOiByZXF1aXJlKCcuL3RvT3JkaW5hbCcpLFxuICAgIHRvV29yZHM6IHJlcXVpcmUoJy4vdG9Xb3JkcycpLFxuICAgIHRvV29yZHNPcmRpbmFsOiByZXF1aXJlKCcuL3RvV29yZHNPcmRpbmFsJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFNpbXBsaWZpZWQgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbWFybHVuNzgvODg1ZWIwMDIxZTk4MGM2Y2UwZmJcbmZ1bmN0aW9uIGlzRmluaXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuICEodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCB2YWx1ZSAhPT0gdmFsdWUgfHwgdmFsdWUgPT09IEluZmluaXR5IHx8IHZhbHVlID09PSAtSW5maW5pdHkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRmluaXRlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IHJlcXVpcmUoJy4vbWF4U2FmZUludGVnZXInKTtcblxuZnVuY3Rpb24gaXNTYWZlTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTWF0aC5hYnModmFsdWUpIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTYWZlTnVtYmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRU5EU19XSVRIX0RPVUJMRV9aRVJPX1BBVFRFUk4gPSAvKGh1bmRyZWR8dGhvdXNhbmR8KG18Ynx0cnxxdWFkcilpbGxpb24pJC87XG52YXIgRU5EU19XSVRIX1RFRU5fUEFUVEVSTiA9IC90ZWVuJC87XG52YXIgRU5EU19XSVRIX1lfUEFUVEVSTiA9IC95JC87XG52YXIgRU5EU19XSVRIX1pFUk9fVEhST1VHSF9UV0VMVkVfUEFUVEVSTiA9IC8oemVyb3xvbmV8dHdvfHRocmVlfGZvdXJ8Zml2ZXxzaXh8c2V2ZW58ZWlnaHR8bmluZXx0ZW58ZWxldmVufHR3ZWx2ZSkkLztcbnZhciBvcmRpbmFsTGVzc1RoYW5UaGlydGVlbiA9IHtcbiAgICB6ZXJvOiAnemVyb3RoJyxcbiAgICBvbmU6ICdmaXJzdCcsXG4gICAgdHdvOiAnc2Vjb25kJyxcbiAgICB0aHJlZTogJ3RoaXJkJyxcbiAgICBmb3VyOiAnZm91cnRoJyxcbiAgICBmaXZlOiAnZmlmdGgnLFxuICAgIHNpeDogJ3NpeHRoJyxcbiAgICBzZXZlbjogJ3NldmVudGgnLFxuICAgIGVpZ2h0OiAnZWlnaHRoJyxcbiAgICBuaW5lOiAnbmludGgnLFxuICAgIHRlbjogJ3RlbnRoJyxcbiAgICBlbGV2ZW46ICdlbGV2ZW50aCcsXG4gICAgdHdlbHZlOiAndHdlbGZ0aCdcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBudW1iZXItd29yZCBpbnRvIGFuIG9yZGluYWwgbnVtYmVyLXdvcmQuXG4gKiBAZXhhbXBsZSBtYWtlT3JkaW5hbCgnb25lJykgPT4gJ2ZpcnN0J1xuICogQHBhcmFtIHtzdHJpbmd9IHdvcmRzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBtYWtlT3JkaW5hbCh3b3Jkcykge1xuICAgIC8vIEVuZHMgd2l0aCAqMDAgKDEwMCwgMTAwMCwgZXRjLikgb3IgKnRlZW4gKDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5KVxuICAgIGlmIChFTkRTX1dJVEhfRE9VQkxFX1pFUk9fUEFUVEVSTi50ZXN0KHdvcmRzKSB8fCBFTkRTX1dJVEhfVEVFTl9QQVRURVJOLnRlc3Qod29yZHMpKSB7XG4gICAgICAgIHJldHVybiB3b3JkcyArICd0aCc7XG4gICAgfVxuICAgIC8vIEVuZHMgd2l0aCAqeSAoMjAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgODAsIDkwKVxuICAgIGVsc2UgaWYgKEVORFNfV0lUSF9ZX1BBVFRFUk4udGVzdCh3b3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHdvcmRzLnJlcGxhY2UoRU5EU19XSVRIX1lfUEFUVEVSTiwgJ2lldGgnKTtcbiAgICB9XG4gICAgLy8gRW5kcyB3aXRoIG9uZSB0aHJvdWdoIHR3ZWx2ZVxuICAgIGVsc2UgaWYgKEVORFNfV0lUSF9aRVJPX1RIUk9VR0hfVFdFTFZFX1BBVFRFUk4udGVzdCh3b3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHdvcmRzLnJlcGxhY2UoRU5EU19XSVRIX1pFUk9fVEhST1VHSF9UV0VMVkVfUEFUVEVSTiwgcmVwbGFjZVdpdGhPcmRpbmFsVmFyaWFudCk7XG4gICAgfVxuICAgIHJldHVybiB3b3Jkcztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVdpdGhPcmRpbmFsVmFyaWFudChtYXRjaCwgbnVtYmVyV29yZCkge1xuICAgIHJldHVybiBvcmRpbmFsTGVzc1RoYW5UaGlydGVlbltudW1iZXJXb3JkXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYWtlT3JkaW5hbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1BWF9TQUZFX0lOVEVHRVI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaXNGaW5pdGUnKTtcbnZhciBpc1NhZmVOdW1iZXIgPSByZXF1aXJlKCcuL2lzU2FmZU51bWJlcicpO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGludGVnZXIgaW50byBhIHN0cmluZyB3aXRoIGFuIG9yZGluYWwgcG9zdGZpeC5cbiAqIElmIG51bWJlciBpcyBkZWNpbWFsLCB0aGUgZGVjaW1hbHMgd2lsbCBiZSByZW1vdmVkLlxuICogQGV4YW1wbGUgdG9PcmRpbmFsKDEyKSA9PiAnMTJ0aCdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b09yZGluYWwobnVtYmVyKSB7XG4gICAgdmFyIG51bSA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuXG4gICAgaWYgKCFpc0Zpbml0ZShudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnTm90IGEgZmluaXRlIG51bWJlcjogJyArIG51bWJlciArICcgKCcgKyB0eXBlb2YgbnVtYmVyICsgJyknXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmICghaXNTYWZlTnVtYmVyKG51bSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICAnSW5wdXQgaXMgbm90IGEgc2FmZSBudW1iZXIsIGl04oCZcyBlaXRoZXIgdG9vIGxhcmdlIG9yIHRvbyBzbWFsbC4nXG4gICAgICAgICk7XG4gICAgfVxuICAgIHZhciBzdHIgPSBTdHJpbmcobnVtKTtcbiAgICB2YXIgbGFzdFR3b0RpZ2l0cyA9IE1hdGguYWJzKG51bSAlIDEwMCk7XG4gICAgdmFyIGJldHdlZW5FbGV2ZW5BbmRUaGlydGVlbiA9IGxhc3RUd29EaWdpdHMgPj0gMTEgJiYgbGFzdFR3b0RpZ2l0cyA8PSAxMztcbiAgICB2YXIgbGFzdENoYXIgPSBzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gc3RyICsgKGJldHdlZW5FbGV2ZW5BbmRUaGlydGVlbiA/ICd0aCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICcxJyA/ICdzdCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICcyJyA/ICduZCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICczJyA/ICdyZCdcbiAgICAgICAgICAgIDogJ3RoJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9PcmRpbmFsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWFrZU9yZGluYWwgPSByZXF1aXJlKCcuL21ha2VPcmRpbmFsJyk7XG52YXIgaXNGaW5pdGUgPSByZXF1aXJlKCcuL2lzRmluaXRlJyk7XG52YXIgaXNTYWZlTnVtYmVyID0gcmVxdWlyZSgnLi9pc1NhZmVOdW1iZXInKTtcblxudmFyIFRFTiA9IDEwO1xudmFyIE9ORV9IVU5EUkVEID0gMTAwO1xudmFyIE9ORV9USE9VU0FORCA9IDEwMDA7XG52YXIgT05FX01JTExJT04gPSAxMDAwMDAwO1xudmFyIE9ORV9CSUxMSU9OID0gMTAwMDAwMDAwMDsgICAgICAgICAgIC8vICAgICAgICAgMS4wMDAuMDAwLjAwMCAoOSlcbnZhciBPTkVfVFJJTExJT04gPSAxMDAwMDAwMDAwMDAwOyAgICAgICAvLyAgICAgMS4wMDAuMDAwLjAwMC4wMDAgKDEyKVxudmFyIE9ORV9RVUFEUklMTElPTiA9IDEwMDAwMDAwMDAwMDAwMDA7IC8vIDEuMDAwLjAwMC4wMDAuMDAwLjAwMCAoMTUpXG52YXIgTUFYID0gOTAwNzE5OTI1NDc0MDk5MjsgICAgICAgICAgICAgLy8gOS4wMDcuMTk5LjI1NC43NDAuOTkyICgxNSlcblxudmFyIExFU1NfVEhBTl9UV0VOVFkgPSBbXG4gICAgJ3plcm8nLCAnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJywgJ2ZpdmUnLCAnc2l4JywgJ3NldmVuJywgJ2VpZ2h0JywgJ25pbmUnLCAndGVuJyxcbiAgICAnZWxldmVuJywgJ3R3ZWx2ZScsICd0aGlydGVlbicsICdmb3VydGVlbicsICdmaWZ0ZWVuJywgJ3NpeHRlZW4nLCAnc2V2ZW50ZWVuJywgJ2VpZ2h0ZWVuJywgJ25pbmV0ZWVuJ1xuXTtcblxudmFyIFRFTlRIU19MRVNTX1RIQU5fSFVORFJFRCA9IFtcbiAgICAnemVybycsICd0ZW4nLCAndHdlbnR5JywgJ3RoaXJ0eScsICdmb3J0eScsICdmaWZ0eScsICdzaXh0eScsICdzZXZlbnR5JywgJ2VpZ2h0eScsICduaW5ldHknXG5dO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGludGVnZXIgaW50byB3b3Jkcy5cbiAqIElmIG51bWJlciBpcyBkZWNpbWFsLCB0aGUgZGVjaW1hbHMgd2lsbCBiZSByZW1vdmVkLlxuICogQGV4YW1wbGUgdG9Xb3JkcygxMikgPT4gJ3R3ZWx2ZSdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthc09yZGluYWxdIC0gRGVwcmVjYXRlZCwgdXNlIHRvV29yZHNPcmRpbmFsKCkgaW5zdGVhZCFcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRvV29yZHMobnVtYmVyLCBhc09yZGluYWwpIHtcbiAgICB2YXIgd29yZHM7XG4gICAgdmFyIG51bSA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuXG4gICAgaWYgKCFpc0Zpbml0ZShudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnTm90IGEgZmluaXRlIG51bWJlcjogJyArIG51bWJlciArICcgKCcgKyB0eXBlb2YgbnVtYmVyICsgJyknXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmICghaXNTYWZlTnVtYmVyKG51bSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICAnSW5wdXQgaXMgbm90IGEgc2FmZSBudW1iZXIsIGl04oCZcyBlaXRoZXIgdG9vIGxhcmdlIG9yIHRvbyBzbWFsbC4nXG4gICAgICAgICk7XG4gICAgfVxuICAgIHdvcmRzID0gZ2VuZXJhdGVXb3JkcyhudW0pO1xuICAgIHJldHVybiBhc09yZGluYWwgPyBtYWtlT3JkaW5hbCh3b3JkcykgOiB3b3Jkcztcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVXb3JkcyhudW1iZXIpIHtcbiAgICB2YXIgcmVtYWluZGVyLCB3b3JkLFxuICAgICAgICB3b3JkcyA9IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIFdl4oCZcmUgZG9uZVxuICAgIGlmIChudW1iZXIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICF3b3JkcyA/ICd6ZXJvJyA6IHdvcmRzLmpvaW4oJyAnKS5yZXBsYWNlKC8sJC8sICcnKTtcbiAgICB9XG4gICAgLy8gRmlyc3QgcnVuXG4gICAgaWYgKCF3b3Jkcykge1xuICAgICAgICB3b3JkcyA9IFtdO1xuICAgIH1cbiAgICAvLyBJZiBuZWdhdGl2ZSwgcHJlcGVuZCDigJxtaW51c+KAnVxuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIHdvcmRzLnB1c2goJ21pbnVzJyk7XG4gICAgICAgIG51bWJlciA9IE1hdGguYWJzKG51bWJlcik7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlciA8IDIwKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IDA7XG4gICAgICAgIHdvcmQgPSBMRVNTX1RIQU5fVFdFTlRZW251bWJlcl07XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9IVU5EUkVEKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIFRFTjtcbiAgICAgICAgd29yZCA9IFRFTlRIU19MRVNTX1RIQU5fSFVORFJFRFtNYXRoLmZsb29yKG51bWJlciAvIFRFTildO1xuICAgICAgICAvLyBJbiBjYXNlIG9mIHJlbWFpbmRlciwgd2UgbmVlZCB0byBoYW5kbGUgaXQgaGVyZSB0byBiZSBhYmxlIHRvIGFkZCB0aGUg4oCcLeKAnVxuICAgICAgICBpZiAocmVtYWluZGVyKSB7XG4gICAgICAgICAgICB3b3JkICs9ICctJyArIExFU1NfVEhBTl9UV0VOVFlbcmVtYWluZGVyXTtcbiAgICAgICAgICAgIHJlbWFpbmRlciA9IDA7XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1RIT1VTQU5EKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9IVU5EUkVEO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9IVU5EUkVEKSkgKyAnIGh1bmRyZWQnO1xuXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPCBPTkVfTUlMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfVEhPVVNBTkQ7XG4gICAgICAgIHdvcmQgPSBnZW5lcmF0ZVdvcmRzKE1hdGguZmxvb3IobnVtYmVyIC8gT05FX1RIT1VTQU5EKSkgKyAnIHRob3VzYW5kLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9CSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9NSUxMSU9OO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9NSUxMSU9OKSkgKyAnIG1pbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1RSSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9CSUxMSU9OO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9CSUxMSU9OKSkgKyAnIGJpbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1FVQURSSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9UUklMTElPTjtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfVFJJTExJT04pKSArICcgdHJpbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDw9IE1BWCkge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfUVVBRFJJTExJT047XG4gICAgICAgIHdvcmQgPSBnZW5lcmF0ZVdvcmRzKE1hdGguZmxvb3IobnVtYmVyIC8gT05FX1FVQURSSUxMSU9OKSkgK1xuICAgICAgICAnIHF1YWRyaWxsaW9uLCc7XG4gICAgfVxuXG4gICAgd29yZHMucHVzaCh3b3JkKTtcbiAgICByZXR1cm4gZ2VuZXJhdGVXb3JkcyhyZW1haW5kZXIsIHdvcmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1dvcmRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWFrZU9yZGluYWwgPSByZXF1aXJlKCcuL21ha2VPcmRpbmFsJyk7XG52YXIgdG9Xb3JkcyA9IHJlcXVpcmUoJy4vdG9Xb3JkcycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyIGludG8gb3JkaW5hbCB3b3Jkcy5cbiAqIEBleGFtcGxlIHRvV29yZHNPcmRpbmFsKDEyKSA9PiAndHdlbGZ0aCdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1dvcmRzT3JkaW5hbChudW1iZXIpIHtcbiAgICB2YXIgd29yZHMgPSB0b1dvcmRzKG51bWJlcik7XG4gICAgcmV0dXJuIG1ha2VPcmRpbmFsKHdvcmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1dvcmRzT3JkaW5hbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2gxIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiRGVsZXRlSWNvbiIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJQYXBlciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJzdHlsZWQiLCJCb3giLCJBdXRvY29tcGxldGUiLCJNb2RhbCIsIkJhY2tkcm9wIiwiVGFibGVDb250YWluZXIiLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJEaXZpZGVyIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwiQWRkIiwiQXJyb3dVcHdhcmRPdXRsaW5lZCIsIkRyYWdJbmRpY2F0b3JSb3VuZGVkIiwiRWRpdCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJ2NCIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImRheWpzIiwiQXJyb3dCYWNrIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkxvYWRlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJDdXN0b21lckZvcm1WaWV3MiIsIkNsb3NlIiwiSXRlbUZvcm1WaWV3MiIsIkl0ZW1VcGRhdGVWaWV3MiIsIm51bWJlclRvV29yZHMiLCJEcmFnRHJvcENvbnRleHQiLCJEcmFnZ2FibGUiLCJEcm9wcGFibGUiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJkYiIsIkxpZ2h0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiQmxhY2tUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsInN0eWxlMiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjUiLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjYiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJJbnZvaWNlRm9ybUNsb25lIiwiX3VzZVBhcmFtcyIsImlkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjciLCJfYXN5bmNUb0dlbmVyYXRvciIsIm5hdmlnYXRvciIsIm9uTGluZSIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsInJlc0xvY2FsSW5mbyIsImVtcGxveWVlVXNlclNjaGVtYSIsIl9pZCIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsImFwaVVybCIsIl91c2VTdGF0ZSIsImRhdGUiLCJEYXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaW52b2ljZURhdGUiLCJzZXRJbnZvaWNlRGF0ZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiaW52b2ljZUR1ZURhdGUiLCJzZXRJbnZvaWNlRHVlRGF0ZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaW52b2ljZVN1YmplY3QiLCJzZXRJbnZvaWNlU3ViamVjdCIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiaW52b2ljZURlZmVjdCIsInNldEludm9pY2VEZWZlY3QiLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsImludm9pY2VOdW1iZXIiLCJzZXRJbnZvaWNlTnVtYmVyIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwiaXRlbXMiLCJTZXRJdGVtcyIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJzdWJUb3RhbCIsInNldFN1YlRvdGFsIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInRvdGFsIiwic2V0VG90YWwiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2Iiwic2hpcHBpbmciLCJzZXRTaGlwcGluZyIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJhZGp1c3RtZW50Iiwic2V0QWRqdXN0bWVudCIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJhZGp1c3RtZW50TnVtYmVyIiwic2V0QWRqdXN0bWVudE51bWJlciIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJ0b3RhbEludm9pY2UiLCJzZXRUb3RhbEludm9pY2UiLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0IiwiYmFsYW5jZUR1ZSIsInNldEJhbGFuY2VEdWUiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwidG90YWxXIiwic2V0VG90YWxXIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsIkl0ZW1JbmZvcm1hdGlvbiIsInNldEl0ZW1JbmZvcm1hdGlvbiIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJub3RlIiwic2V0Tm90ZSIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJub3RlSW5mbyIsInNldE5vdGVJbmZvIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsImFjdGlvblRha2VuIiwic2V0QWN0aW9uVGFrZW4iLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2IiwidGVybXMiLCJzZXRUZXJtcyIsImRhdGVDb21tZW50IiwiaW52b2ljZU5hbWUiLCJTdHJpbmciLCJwYWRTdGFydCIsImZldGNobGFzdE51bWJlciIsIl9yZWY4IiwiX3JlcyRkYXRhIiwiX3JlcyRkYXRhMiIsInBhcnNlSW50Iiwib2ZmTGluZUN1c3RvbWVyMSIsImludm9pY2VTY2hlbWEiLCJ0b0FycmF5IiwibGF0ZXN0IiwicmVkdWNlIiwibWF4Iiwicm93IiwiZmV0Y2hEYXRhIiwiX3JlZjkiLCJfcmVzJGRhdGEzIiwiX3JlcyRkYXRhNCIsInNldEN1c3RvbWVyTmFtZSIsImN1c3RvbWVyTmFtZSIsIm1hcCIsIml0ZW1PdXQiLCJOdW1iZXIiLCJyZXNMb2NhbCIsIl9yZWYwIiwiX3JlcyRkYXRhNSIsIl9yZXMkZGF0YTYiLCJmZXRjaEl0ZW0iLCJfcmVmMSIsInJldmVyc2UiLCJpdGVtU2NoZW1hIiwiaGFuZGxlQ2hhbmdlSXRlbSIsImlkUm93IiwibmV3VmFsdWUiLCJzZWxlY3RlZE9wdGlvbnMiLCJmaW5kIiwib3B0aW9uIiwiaXRlbU5hbWUiLCJpdGVtQ29zdCIsIml0ZW1Db3N0UHJpY2UiLCJpdGVtRGVzY3JpcHRpb24iLCJpdGVtUmF0ZSIsIml0ZW1TZWxsaW5nUHJpY2UiLCJzdG9jayIsIml0ZW1RdWFudGl0eSIsImhhbmRsZUNoYW5nZSIsImUiLCJpIiwiX2UkdGFyZ2V0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwibGlzdCIsIk1hdGgiLCJyb3VuZCIsImhhbmRsZUNoYW5nZUNFTyIsIl9lJHRhcmdldDIiLCJhZGRJdGVtIiwidHlwZUl0ZW0iLCJpdGVtRGlzY291bnQiLCJpdGVtUXR5IiwiaXRlbUFtb3VudCIsInRvdGFsQW1vdW50IiwiZGlzY291bnQiLCJwZXJjZW50YWdlIiwiaXRlbUJ1eSIsIml0ZW1XZWlnaHQiLCJ0b3RhbEdlbmVyYWxlIiwidG90YWxDb3N0IiwibmV3SXRlbU91dCIsImFkZEl0ZW1XaGl0ZSIsIm5ld0Rlc2NyaXB0aW9uIiwiYWRkSXRlbVJvdyIsIm5ld0l0ZW0iLCJ1cGRhdGUiLCJzcGxpY2UiLCJhZGRJdGVtV2hpdGVSb3ciLCJoYW5kbGVEcmFnRW5kIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJuZXdJdGVtcyIsIl9uZXdJdGVtcyRzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsIl9uZXdJdGVtcyRzcGxpY2UyIiwicmVtb3ZlZCIsImRlbGV0ZUl0ZW0iLCJmaWx0ZXIiLCJJdGVtIiwiZmlsdGVySXRlbUluZm9ybWF0aW9uIiwiX3JvdyRpdGVtTmFtZSIsImhhbmRsZVNob3dBdXRvY29tcGxldGUiLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24iLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4Iiwib3Blbkl0ZW1VcGRhdGUiLCJzZXRPcGVuSXRlbVVwZGF0ZSIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJpZEl0ZW0iLCJzZXRJZEl0ZW0iLCJoYW5kbGVPcGVuSXRlbVVwZGF0ZSIsIl9yZWYxMCIsIl94IiwiaGFuZGxlQ2xvc2VJdGVtVXBkYXRlIiwiX3JlZjExIiwiX3JvdyRpdGVtTmFtZTIiLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsImZldGNoQ3VzdG9tZXIiLCJfcmVmMTIiLCJjdXN0b21lclNjaGVtYSIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2Iiwib3BlbkF1dG9jb21wbGV0ZTEiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMSIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTEiLCJoYW5kbGVDcmVhdGVDdXN0b21lciIsIm5ld0N1c3RvbWVyIiwiaGFuZGxlQ2hhbmdlQ3VzdG9tZXIiLCJDdXN0b21lciIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0NpdHkiLCJoYW5kbGVDbGVhckN1c3RvbWVyIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsIm9wZW5BdXRvY29tcGxldGUyIiwic2V0T3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlQ3JlYXRlSXRlbSIsInJlc3VsdDEiLCJzdW0iLCJ0b0ZpeGVkIiwibmV3VG90YWwiLCJuZXdCYWxhbmNlIiwid2hvbGVQYXJ0IiwiZmxvb3IiLCJmcmFjdGlvbmFsUGFydCIsInNwbGl0Iiwid2hvbGVXb3JkcyIsInRvV29yZHMiLCJmcmFjdGlvbmFsV29yZHMiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwib3BlbjEiLCJzZXRPcGVuMSIsImhhbmRsZU9wZW5CYWNrIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZUJhY2siLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0IiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2IiwibG9hZGluZ09wZW5Nb2RhbFVwZGF0ZSIsInNldExvYWRpbmdPcGVuTW9kYWxVcGRhdGUiLCJfdXNlU3RhdGU1NyIsIl91c2VTdGF0ZTU4IiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlT3BlblVwZGF0ZSIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZUNsb3NlVXBkYXRlIiwiaGFuZGxlQ2xvc2VFcnJvciIsImhhbmRsZURlY2lzaW9uIiwiaGlzdG9yeSIsImJhY2siLCJfdXNlU3RhdGU1OSIsIl91c2VTdGF0ZTYwIiwicmVmZXJlbmNlSW5mbyIsInNldFJlZmVyZW5jZUluZm8iLCJpbnZvaWNlUHVyY2hhc2UiLCJoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24iLCJfcmVmMTMiLCJSZWZlcmVuY2VJbmZvIiwiUmVmZXJlbmNlSW5mb051bWJlciIsImlkSW5mbyIsInBlcnNvbiIsInJlYXNvbiIsImRhdGVOb3RpZmljYXRpb24iLCJwb3N0IiwibG9nIiwiX3gyIiwiX3gzIiwic3RhdHVzIiwicGFyc2VGbG9hdCIsIl91c2VTdGF0ZTYxIiwiX3VzZVN0YXRlNjIiLCJzYXZpbmciLCJzZXRTYXZpbmciLCJoYW5kbGVTdWJtaXQiLCJfcmVmMTQiLCJzeW5jZWQiLCJwdXQiLCJfeDQiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJwYWRkaW5nIiwiaXRlbSIsInhzIiwiZGlzYWJsZWQiLCJ1bmRlZmluZWQiLCJ0aXRsZSIsInBsYWNlbWVudCIsImZsb2F0Iiwib3B0aW9ucyIsImdldE9wdGlvbkxhYmVsIiwib25DaGFuZ2UiLCJQYXBlckNvbXBvbmVudCIsIl9yZWYxNSIsImNoaWxkcmVuIiwib3RoZXIiLCJfZXhjbHVkZWQzIiwibWFyZ2luVG9wIiwib25Nb3VzZURvd24iLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsImxhYmVsIiwicmVxdWlyZWQiLCJodG1sRm9yIiwidHlwZSIsInN0YXJ0QWRvcm5tZW50IiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwiZm9ybWF0IiwibXVsdGlsaW5lIiwicm93cyIsInJpZ2h0Iiwib25EcmFnRW5kIiwiZHJvcHBhYmxlSWQiLCJwcm92aWRlZCIsInNuYXBzaG90IiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsImtleSIsImRyYWdnYWJsZUlkIiwiZHJhZ2dhYmxlUHJvcHMiLCJGcmFnbWVudCIsImRyYWdIYW5kbGVQcm9wcyIsImNvbFNwYW4iLCJzaXplIiwiY3Vyc29yIiwiaGlkZGVuIiwidG9VcHBlckNhc2UiLCJkaXNhYmxlQ2xlYXJhYmxlIiwiaXRlbUJyYW5kIiwicmVuZGVyT3B0aW9uIiwib25JbnB1dENoYW5nZSIsImV2ZW50IiwibmV3SW5wdXRWYWx1ZSIsImZpbHRlck9wdGlvbnMiLCJfcmVmMTYiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiX3JlZjE3IiwiX2V4Y2x1ZGVkNCIsInBsYWNlaG9sZGVyIiwicmVwbGFjZSIsIl9yZWYxOCIsIl9yZWYxOSIsIl9leGNsdWRlZDUiLCJnYXAiLCJib3JkZXJCb3R0b20iLCJ0ZXh0QWxpZ24iLCJhbGlnbiIsIm1heFJvd3MiLCJvbkNsb3NlIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0Iiwib3ZlcmZsb3dZIiwib25DcmVhdGVPcHRpb24iLCJPdXRsZXQiLCJOYXZMaW5rIiwiTGluayIsInVzZUxvY2F0aW9uIiwiRGFzaGJvYXJkSWNvbiIsIlBlcm1JZGVudGl0eUljb24iLCJMaXN0QWx0SWNvbiIsIkRlc2NyaXB0aW9uSWNvbiIsIlJlY2VpcHRJY29uIiwiTW92aW5nSWNvbiIsIlNldHRpbmdzSWNvbiIsIkluc2VydERyaXZlRmlsZUljb24iLCJSZXN0b3JlUGFnZUljb24iLCJSZXF1ZXN0UXVvdGVJY29uIiwiTW9uZXRpemF0aW9uT25JY29uIiwiRW5naW5lZXJpbmdJY29uIiwiRXhwbGljaXQiLCJTaG9wcGluZ0JhZ091dGxpbmVkIiwiUm9vbVByZWZlcmVuY2VzSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsIlBheW1lbnRJY29uIiwiTW9yZVZlcnRJY29uIiwicHJpbWFyeSIsIkRleGllIiwidmVyc2lvbiIsInN0b3JlcyIsInN1cHBsaWVyU2NoZW1hIiwiaXRlbVNjaGVtYVZpZXciLCJkYWlseUV4cGVuc2VTY2hlbWEiLCJkYWlseUV4cGVuc2VWaWV3U2NoZW1hIiwiaGlkZGVuU2NoZW1hIiwiaXRlbUNvZGVTY2hlbWEiLCJpdGVtVW5pdFNjaGVtYSIsImRlcGFydG1lbnRTY2hlbWEiLCJlc3RpbWF0ZVNjaGVtYSIsImludm9pY2VWaWV3U2NoZW1hIiwicG9zU2NoZW1hIiwicGF5bWVudFNjaGVtYSIsInByb2plY3RTY2hlbWEiLCJwdXJjaGFzZVNjaGVtYSIsInB1cmNoYXNlU2NoZW1hVmlldyIsIm1haW50ZW5hbmNlU2NoZW1hIiwibWFpbnRlbmFuY2VWaWV3U2NoZW1hIiwiZW1wbG95ZWVTY2hlbWEiLCJwYXlSb2xsU2NoZW1hIiwidXNlckFjY291bnQiLCJncmFudEFjY2Vzc1NjaGVtYSIsImNhc2hTY2hlbWEiLCJyYXRlU2NoZW1hIiwicGF5bWVudFJhdGVTY2hlbWEiLCJkYWlseUV4cGVuc2VzQ2F0ZWdvcnlTY2hlbWEiLCJlbXBsb3llZUF0dGVuZGFuY2VTY2hlbWEiLCJpdGVtUHVyY2hhc2VTY2hlbWEiLCJpdGVtUHVyY2hhc2VWaWV3U2NoZW1hIiwiaXRlbVJldHVybiIsIml0ZW1SZXR1cm5WaWV3IiwiaXRlbU91dFNjaGVtYSIsIml0ZW1PdXRWaWV3U2NoZW1hIiwicHVyY2hhc2VPcmRlciIsInB1cmNoYXNlT3JkZXJWaWV3IiwicGxhbmluZ1NjaGVtYSIsInJhdGVSZXR1cm5TY2hlbWEiLCJpdGVtUHVyY2hhc2VDYWNoZSIsIml0ZW1PdXRDYWNoZSIsInBvc0NhY2hlIiwiaXRlbVJldHVybkNhY2hlIiwiaW52b2ljZUNhY2hlIiwiZXN0aW1hdGVDYWNoZSIsImN1c3RvbWVyQ2FjaGUiLCJzdXBwbGllckNhY2hlIiwicHJvamVjdENhY2hlIiwibWFpbnRlbmFuY2VDYWNoZSIsImVtcGxveWVlQ2FjaGUiLCJwYXlyb2xsQ2FjaGUiLCJyYXRlQ2FjaGUiLCJ1c2VyQ2FjaGUiLCJncmFudEFjY2Vzc0NhY2hlIiwiY29tcGFueVByb2ZpbGVDYWNoZSIsInB1cmNoYXNlT3JkZXJDYWNoZSIsInBheW1lbnRDYWNoZSIsImNhc2hDYWNoZSIsImRhaWx5RXhwZW5zZUNhY2hlIiwic3luY01ldGFkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==