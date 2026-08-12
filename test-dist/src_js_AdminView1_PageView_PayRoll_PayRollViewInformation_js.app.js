"use strict";
exports.id = "src_js_AdminView1_PageView_PayRoll_PayRollViewInformation_js";
exports.ids = ["src_js_AdminView1_PageView_PayRoll_PayRollViewInformation_js"];
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

/***/ "./src/js/AdminView1/PageView/PayRoll/PayRollViewInformation.js"
/*!**********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/PayRoll/PayRollViewInformation.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SidebarDashE2 */ "./src/js/component/SidebarDashE2.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/icons-material/LocalPrintshop */ "./node_modules/@mui/icons-material/LocalPrintshop.js");
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
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../img/images.png */ "./src/js/img/images.png");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _PrintPayRoll__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./PrintPayRoll */ "./src/js/AdminView1/PageView/PayRoll/PrintPayRoll.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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
























































var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref => {
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
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref3 => {
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
var PrintTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"].tooltip)]: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref7 => {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded4);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref8 => {
  var theme = _ref8.theme;
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
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_24__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
function PayRollViewInformation() {
  var _payRoll$filter;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__.setUser)({
              userName: Name,
              role: Role
            }));
          } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_33__.toast.error('Error fetching user data.');
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__.logOut)());
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          react_toastify__WEBPACK_IMPORTED_MODULE_33__.toast.error('Error fetching access details.');
        }
      });
      return function fetchNumber() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var PRollInfoU = grantAccess.filter(row => row.moduleName === "Pay-Roll" && row.access.editM === true);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    payRoll = _useState4[0],
    setPayRoll = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    employee = _useState6[0],
    setEmployee = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingData = _useState8[0],
    setLoadingData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState0 = _slicedToArray(_useState9, 2),
    employeeName = _useState0[0],
    setEmployeeName = _useState0[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchPayRoll = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/payRoll"));
          setPayRoll(res.data.data.reverse());
          (_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 || _res$data2.filter(row => row._id === id).map(row => setEmployeeName(row.employeeName));
          setLoadingData(false);
        } catch (error) {
          react_toastify__WEBPACK_IMPORTED_MODULE_33__.toast.error('Error fetching payroll information.');
          setLoadingData(false);
        }
      });
      return function fetchPayRoll() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchPayRoll();
  }, [id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/employee"));
          setEmployee(res.data.data);
        } catch (error) {
          react_toastify__WEBPACK_IMPORTED_MODULE_33__.toast.error('Error fetching employee list.');
          setLoadingData(false);
        }
      });
      return function fetchData() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var relatedEmployee = employee.filter(Item => Item._id === employeeName.id);
  var employeePhone = relatedEmployee ? relatedEmployee.map(row => row.employeePhone) : '';
  var employeeId = relatedEmployee ? relatedEmployee.map(row => row.employeeId) : '';
  var bankName = relatedEmployee ? relatedEmployee.map(row => row.bankName) : '';
  var bankAccountNumber = relatedEmployee ? relatedEmployee.map(row => row.bankAccountNumber) : '';
  var department = relatedEmployee ? relatedEmployee.map(row => row.department) : '';
  var employeeRole = relatedEmployee ? relatedEmployee.map(row => row.employeeRole) : '';
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
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState10 = _slicedToArray(_useState1, 2),
    show = _useState10[0],
    setShow = _useState10[1];
  var handleShow = e => {
    setShow(e);
    setAnchorEl(null);
  };
  var componentRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_46__.useReactToPrint)({
    content: () => componentRef.current
  });
  var handleOpenPrint = () => {
    handlePrint();
    setAnchorEl(null);
  };
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    reason = _useState12[0],
    setReason = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    Comments1 = _useState14[0],
    setComments = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchComment = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        try {
          var _res$data3;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/comment"));
          var resp = (_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.filter(row => row.CommentInfo.idInfo === id);
          setComments(resp.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchComment() {
        return _ref13.apply(this, arguments);
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
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    loading = _useState16[0],
    setLoading = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    loadingOpenModal = _useState18[0],
    setLoadingOpenModal = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    ErrorOpenModal = _useState20[0],
    setErrorOpenModal = _useState20[1];
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
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/create-comment/"), data);
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
      return _ref14.apply(this, arguments);
    };
  }();
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState22 = _slicedToArray(_useState21, 2),
    show2 = _useState22[0],
    setShow2 = _useState22[1];
  var handleShow2 = e => {
    setShow2(e);
  };
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState24 = _slicedToArray(_useState23, 2),
    showRef = _useState24[0],
    setShowRef = _useState24[1];
  var handleShowRef = e => {
    setShowRef(e);
    setAnchorEl(null);
  };
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    value = _useState26[0],
    setValue = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    value2 = _useState28[0],
    setValue2 = _useState28[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var selectedIndex = payRoll.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [payRoll, id]);
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState30 = _slicedToArray(_useState29, 2),
    search = _useState30[0],
    setSearch = _useState30[1];
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
  };
  var newArray = search !== '' ? payRoll.filter(row => row.employeeName.name.toLowerCase().includes(search.toLowerCase())) : payRoll;
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState('1'),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    value3 = _React$useState4[0],
    setValue3 = _React$useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result = localStorage.getItem('TabPayRollView');
    if (result) {
      setValue3(result);
    }
  }, []);
  var handleChange3 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('TabPayRollView', changeValue);
  };
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    sideBar = _React$useState6[0],
    setSideBar = _React$useState6[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_30__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "PayRoll Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: () => navigate('/PayRollViewAdmin')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_39__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_52__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_51__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_31__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_28__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_42__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    spacing: 2
  }, show === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 3
  }, show2 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      padding: '5px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h6"
  }, "All PayRoll")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow2(2)
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, payRoll === null || payRoll === void 0 ? void 0 : payRoll.map((row, index) => {
    var periodStr = row.weekFrom && row.weekTo ? " | ".concat(dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.weekFrom).format('DD/MM'), " - ").concat(dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.weekTo).format('DD/MM')) : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: index,
      label: row.employeeName.name + ' | ' + row.payNumber + periodStr,
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_36__.Link,
      to: "/PayRollViewInformation/".concat(row._id),
      sx: {
        '&.Mui-selected': {
          color: 'white',
          backgroundColor: '#30368a',
          borderRadius: '10px'
        }
      }
    });
  })))) : '', show2 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: () => handleShow2(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_48__["default"], {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: 'calc(100vh - 125px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, index) => {
    var periodStr = row.weekFrom && row.weekTo ? " | ".concat(dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.weekFrom).format('DD/MM'), " - ").concat(dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.weekTo).format('DD/MM')) : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: index,
      label: row.employeeName.name + ' | ' + row.payNumber + periodStr,
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_36__.Link,
      to: "/PayRollViewInformation/".concat(row._id),
      sx: {
        '&.Mui-selected': {
          color: '#30368a'
        }
      }
    });
  })))) : '') : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      background: 'white'
    }
  }, payRoll === null || payRoll === void 0 || (_payRoll$filter = payRoll.filter(row => row._id === id)) === null || _payRoll$filter === void 0 ? void 0 : _payRoll$filter.map(row => {
    var _row$basicSalary, _ref15, _row$earningSalary, _ref16, _row$advancedSalary, _ref17, _row$basicTransport, _ref18, _row$transportEarning, _ref19, _row$transportDeducti, _ref20, _row$foodBasic, _ref21, _row$foodEarning, _ref22, _row$foodDeduction, _ref23, _row$bounceAllowances, _ref24, _row$bounceAllowances2, _ref25, _row$loan, _ref26, _row$other, _ref27, _row$otherEarning, _ref28, _row$itemLost, _ref29, _row$totalActualSalar, _ref30, _row$totalActualEarni, _ref31, _row$totalActualDeduc, _ref32, _row$totalNet, _row$totalPaidDollars, _row$totalActualDeduc2, _ref33, _row$bonus, _ref34, _row$totalPaid, _ref35, _row$totalNet2, _row$totalPaidDollars2, _row$CreditFC, _row$CreditUSD;
    var related = relatedEmployee.find(Item => Item._id === row.employeeName.id);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: row._id,
      style: {
        padding: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
      style: {
        display: 'block'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "h5"
    }, row.employeeName.name, " | ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "  PR-00", row.payNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: row.status === "UnPaid" ? "blue" : row.status === "Paid" ? "#4caf50" : "black"
    }, row.status !== undefined ? row.status : 'Undefined')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      "aria-controls": open ? 'demo-customized-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open ? 'true' : undefined,
      variant: "contained",
      disableElevation: true,
      onClick: handleClick,
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_49__["default"], null),
      sx: {
        bgcolor: 'gray',
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray'
        }
      }
    }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      id: "demo-customized-menu",
      MenuListProps: {
        'aria-labelledby': 'demo-customized-button'
      },
      anchorEl: anchorEl,
      open: open,
      onClose: handleCloseMenu,
      TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_15__["default"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      disabled: PRollInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_36__.NavLink, {
      to: "/PayRollUpdateFormView/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_20__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      onClick: handleOpenPrint,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray',
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_21__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Print")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        height: '550px',
        overflow: 'hidden',
        overflowY: 'scroll',
        width: '100%',
        background: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      ref: componentRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '80%',
        marginBottom: '0px',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      colSpan: 5,
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        backgroundColor: '#316FF6',
        color: 'white'
      }
    }, "Global Gate")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        backgroundColor: '#e8f7fe'
      },
      colSpan: 5
    }, row.weekFrom && row.weekTo ? "Salary Slip for Period: ".concat(dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.weekFrom).format('DD/MM/YYYY'), " to ").concat(dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.weekTo).format('DD/MM/YYYY')) : "Salary Slip for the month Of: ".concat(dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.month).format('MMMM-YYYY'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Employee Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, row.employeeName.name ? row.employeeName.name : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Total Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, " ", row.daysOpen)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Employee Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, employeePhone !== undefined ? employeePhone : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "LOPs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.Lops)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Employee Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, employeeId !== undefined ? employeeId : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Paid Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.daysW)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Grade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, employeeRole !== undefined ? employeeRole : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Bank Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, bankName !== undefined ? bankName : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.payDate).format('DD-MMMM-YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "A/C No."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, bankAccountNumber !== undefined ? bankAccountNumber : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '400px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, "Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '400px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 3
    }, department !== undefined ? department : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        backgroundColor: '#e8f7fe'
      }
    }, "Earning (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        backgroundColor: '#e8f7fe'
      }
    }, "Actual Salary (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        backgroundColor: '#e8f7fe'
      }
    }, "Earnings (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        backgroundColor: '#e8f7fe'
      },
      colSpan: 2
    }, "Deductions (FC)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Basic wage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_row$basicSalary = row.basicSalary) === null || _row$basicSalary === void 0 ? void 0 : _row$basicSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref15 = row.basicSalary / row.rate) === null || _ref15 === void 0 ? void 0 : _ref15.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.earningSalary !== undefined ? (_row$earningSalary = row.earningSalary) === null || _row$earningSalary === void 0 ? void 0 : _row$earningSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref16 = row.earningSalary !== undefined ? row.earningSalary / row.rate : 0) === null || _ref16 === void 0 ? void 0 : _ref16.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "In advanced allowances "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_row$advancedSalary = row.advancedSalary) === null || _row$advancedSalary === void 0 ? void 0 : _row$advancedSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref17 = row.advancedSalary / row.rate) === null || _ref17 === void 0 ? void 0 : _ref17.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Transport allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_row$basicTransport = row.basicTransport) === null || _row$basicTransport === void 0 ? void 0 : _row$basicTransport.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref18 = row.basicTransport / row.rate) === null || _ref18 === void 0 ? void 0 : _ref18.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_row$transportEarning = row.transportEarning) === null || _row$transportEarning === void 0 ? void 0 : _row$transportEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref19 = row.transportEarning / row.rate) === null || _ref19 === void 0 ? void 0 : _ref19.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Transport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_row$transportDeducti = row.transportDeduction) === null || _row$transportDeducti === void 0 ? void 0 : _row$transportDeducti.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref20 = row.transportDeduction / row.rate) === null || _ref20 === void 0 ? void 0 : _ref20.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Food allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.foodBasic !== undefined ? (_row$foodBasic = row.foodBasic) === null || _row$foodBasic === void 0 ? void 0 : _row$foodBasic.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref21 = row.foodBasic !== undefined ? row.foodBasic / row.rate : 0) === null || _ref21 === void 0 ? void 0 : _ref21.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_row$foodEarning = row.foodEarning) === null || _row$foodEarning === void 0 ? void 0 : _row$foodEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref22 = row.foodEarning / row.rate) === null || _ref22 === void 0 ? void 0 : _ref22.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Food"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_row$foodDeduction = row.foodDeduction) === null || _row$foodDeduction === void 0 ? void 0 : _row$foodDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref23 = row.foodDeduction / row.rate) === null || _ref23 === void 0 ? void 0 : _ref23.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Bounce allowances 3%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_row$bounceAllowances = row.bounceAllowances) === null || _row$bounceAllowances === void 0 ? void 0 : _row$bounceAllowances.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref24 = row.bounceAllowances / row.rate) === null || _ref24 === void 0 ? void 0 : _ref24.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.bounceAllowancesEarning !== undefined ? (_row$bounceAllowances2 = row.bounceAllowancesEarning) === null || _row$bounceAllowances2 === void 0 ? void 0 : _row$bounceAllowances2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref25 = row.bounceAllowancesEarning !== undefined ? row.bounceAllowancesEarning / row.rate : 0) === null || _ref25 === void 0 ? void 0 : _ref25.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Loan recovery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_row$loan = row.loan) === null || _row$loan === void 0 ? void 0 : _row$loan.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref26 = row.loan / row.rate) === null || _ref26 === void 0 ? void 0 : _ref26.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Other"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.other !== undefined ? (_row$other = row.other) === null || _row$other === void 0 ? void 0 : _row$other.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref27 = row.other !== undefined ? row.other / row.rate : 0) === null || _ref27 === void 0 ? void 0 : _ref27.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_row$otherEarning = row.otherEarning) === null || _row$otherEarning === void 0 ? void 0 : _row$otherEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref28 = row.otherEarning / row.rate) === null || _ref28 === void 0 ? void 0 : _ref28.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Item lost recovery / Deduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_row$itemLost = row.itemLost) === null || _row$itemLost === void 0 ? void 0 : _row$itemLost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref29 = row.itemLost / row.rate) === null || _ref29 === void 0 ? void 0 : _ref29.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '80%',
        marginBottom: '5px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        textAlign: 'center'
      },
      colSpan: 6
    }, "Total (Basic, Earning & Deduction)")), row.weekFrom && row.weekTo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: '#1a237e',
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#f1f8e9'
      },
      colSpan: 6
    }, "PERIOD: ", dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.weekFrom).format('DD/MM/YYYY'), " TO ", dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.weekTo).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Basic:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " FC ", (_row$totalActualSalar = row.totalActualSalary) === null || _row$totalActualSalar === void 0 ? void 0 : _row$totalActualSalar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref30 = row.totalActualSalary / row.rate) === null || _ref30 === void 0 ? void 0 : _ref30.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Earning:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " FC ", (_row$totalActualEarni = row.totalActualEarning) === null || _row$totalActualEarni === void 0 ? void 0 : _row$totalActualEarni.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref31 = row.totalActualEarning / row.rate) === null || _ref31 === void 0 ? void 0 : _ref31.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Deduction:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " FC ", (_row$totalActualDeduc = row.totalActualDeduction) === null || _row$totalActualDeduc === void 0 ? void 0 : _row$totalActualDeduc.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref32 = row.totalActualDeduction / row.rate) === null || _ref32 === void 0 ? void 0 : _ref32.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        textAlign: 'center'
      },
      colSpan: 6
    }, "Total (Paid)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, "Net payable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 4
    }, "FC ", (_row$totalNet = row.totalNet) === null || _row$totalNet === void 0 ? void 0 : _row$totalNet.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_row$totalPaidDollars = row.totalPaidDollars) === null || _row$totalPaidDollars === void 0 ? void 0 : _row$totalPaidDollars.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, "Deduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 4
    }, "FC ", (_row$totalActualDeduc2 = row.totalActualDeduction) === null || _row$totalActualDeduc2 === void 0 ? void 0 : _row$totalActualDeduc2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref33 = row.totalActualDeduction / row.rate) === null || _ref33 === void 0 ? void 0 : _ref33.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, "Overtime & Bonus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 4
    }, "FC ", (_row$bonus = row.bonus) === null || _row$bonus === void 0 ? void 0 : _row$bonus.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref34 = row.bonus / row.rate) === null || _ref34 === void 0 ? void 0 : _ref34.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, "Total Generale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 4
    }, "FC ", (_row$totalPaid = row.totalPaid) === null || _row$totalPaid === void 0 ? void 0 : _row$totalPaid.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_ref35 = row.totalPaid / row.rate) === null || _ref35 === void 0 ? void 0 : _ref35.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        textAlign: 'center'
      },
      colSpan: 6
    }, "Total (Net)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black',
        color: 'black'
      },
      colSpan: 2
    }, "Net payable(FC): FC", (_row$totalNet2 = row.totalNet) === null || _row$totalNet2 === void 0 ? void 0 : _row$totalNet2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "rate"), ": ", row.rate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        color: 'black',
        textAlign: 'center'
      },
      colSpan: 2
    }, "Net payable($): $", (_row$totalPaidDollars2 = row.totalPaidDollars) === null || _row$totalPaidDollars2 === void 0 ? void 0 : _row$totalPaidDollars2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black',
        color: 'black'
      },
      colSpan: 2
    }, "Amount Paid(FC): FC", row.amountPayFC !== undefined ? row.amountPayFC.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        textAlign: 'center'
      }
    }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        color: 'black',
        textAlign: 'center'
      },
      colSpan: 2
    }, "Amount Paid($): $", row.amountPayUSD !== undefined ? row.amountPayUSD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black',
        color: 'black'
      },
      colSpan: 2
    }, "Credit(FC): FC", row.CreditFC !== undefined ? (_row$CreditFC = row.CreditFC) === null || _row$CreditFC === void 0 ? void 0 : _row$CreditFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        textAlign: 'center'
      }
    }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        color: 'black',
        textAlign: 'center'
      },
      colSpan: 2
    }, "Credit($): $", row.CreditUSD !== undefined ? (_row$CreditUSD = row.CreditUSD) === null || _row$CreditUSD === void 0 ? void 0 : _row$CreditUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, "Net Words"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 4
    }, row.words, " Franc Congolais.")))))));
  })))), show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Comments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow(1)
  }, "Close")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    required: true,
    id: "comments",
    name: "comments",
    multiline: true,
    rows: 4,
    value: reason,
    onChange: e => setReason(e.target.value),
    label: "Comments",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      height: '333px',
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
  }, dayjs__WEBPACK_IMPORTED_MODULE_38___default()(Item.dateComment).format('DD/MM'), " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "", show === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "HISTORY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_48__["default"], {
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
  }, maintenance.filter(row => row._id === id).map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    key: row._id
  }, row.Create ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.Create) : '')))))) : ""))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_17__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_42__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_42__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_41__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayRollViewInformation);

/***/ },

/***/ "./src/js/AdminView1/PageView/PayRoll/PrintPayRoll.js"
/*!************************************************************!*\
  !*** ./src/js/AdminView1/PageView/PayRoll/PrintPayRoll.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;







var PrintPayRoll = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((_ref, ref) => {
  var _payRoll$filter;
  var id = _ref.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    payRoll = _useState2[0],
    setPayRoll = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    employee = _useState4[0],
    setEmployee = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_5__.ENDPOINT_URL, "/payRoll")).then(res => {
      // Handle the response data here
      setPayRoll(res.data.data.reverse());
    }).catch(error => {
      react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('Error fetching payroll data for printing.');
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_5__.ENDPOINT_URL, "/employee")).then(res => {
      // Handle the response data here
      var formatDate = res.data.data;
      setEmployee(formatDate);
    }).catch(error => {
      react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('Error fetching employee data for printing.');
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, payRoll === null || payRoll === void 0 || (_payRoll$filter = payRoll.filter(row => row._id === id)) === null || _payRoll$filter === void 0 ? void 0 : _payRoll$filter.map(row => {
    var related = employee.find(Item => Item._id === row.employeeName.id);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: row._id,
      ref: ref,
      style: {
        fontSize: '12px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '80%',
        marginBottom: '0px',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      colSpan: 5,
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        backgroundColor: '#316FF6',
        color: 'white'
      }
    }, "Global Gate")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe',
        color: 'black'
      },
      colSpan: 5
    }, row.weekFrom && row.weekTo ? "Salary Slip for Period: ".concat(dayjs__WEBPACK_IMPORTED_MODULE_2___default()(row.weekFrom).format('DD/MM/YYYY'), " to ").concat(dayjs__WEBPACK_IMPORTED_MODULE_2___default()(row.weekTo).format('DD/MM/YYYY')) : "Salary Slip for the month Of: ".concat(dayjs__WEBPACK_IMPORTED_MODULE_2___default()(row.month).format('MMMM-YYYY'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, "Employee Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, row.employeeName.name ? row.employeeName.name : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, "Total Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, " ", row.daysOpen)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, "Employee Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, related.employeePhone !== undefined ? related.employeePhone : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, "LOPs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, row.Lops)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, "Employee Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, related.employeeId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, "Paid Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, row.daysW)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, "Grade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, related.employeeRole), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, "Bank Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, related.bankName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, dayjs__WEBPACK_IMPORTED_MODULE_2___default()(row.payDate).format('DD-MMMM-YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, "A/C No."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD'
      }
    }, related.bankAccountNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '400px',
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, "Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '400px',
        border: '1px solid #DDD'
      },
      colSpan: 3
    }, related.department))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        backgroundColor: '#e8f7fe'
      }
    }, "Earning (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        backgroundColor: '#e8f7fe'
      }
    }, "Actual Salary (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        backgroundColor: '#e8f7fe'
      }
    }, "Earnings (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        backgroundColor: '#e8f7fe'
      },
      colSpan: 2
    }, "Deductions (FC)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Basic wage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.basicSalary), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.earningSalary), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "In advanced allowances "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.advancedSalary)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Transport allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.basicTransport), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.transportEarning), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Transport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.transportDeduction)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Food allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.foodBasic), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.foodEarning), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Food"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.foodDeduction)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Bounce allowances 3%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.bounceAllowances), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, " ", row.bounceAllowancesEarning), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Loan recovery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.loan)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Other"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, " ", row.otherEarning), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Item lost recovery / Deduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, row.itemLost)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '80%',
        marginBottom: '5px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        textAlign: 'center'
      },
      colSpan: 6
    }, "Total(FC)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Basic:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Fc ", row.totalActualSalary.toFixed(2)), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Earning:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Fc ", row.totalActualEarning.toFixed(2)), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Deduction:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Fc ", row.totalActualDeduction.toFixed(2)), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, "Net payable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 4
    }, "FC ", row.totalNet.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, "Net Words"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 4
    }, row.words, " Franc Congolais.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, "Overtime"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 4
    }, "FC ", row.bonus.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, "Total Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 4
    }, "FC ", row.totalPaid.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        textAlign: 'center'
      },
      colSpan: 6
    }, "Total($)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, "Net payable(FC): FC", row.totalNet.toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        textAlign: 'center'
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "rate"), ": ", row.rate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        textAlign: 'center'
      },
      colSpan: 2
    }, "Net payable($): $", row.totalPaidDollars.toFixed(2))))));
  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrintPayRoll);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUGF5Um9sbF9QYXlSb2xsVmlld0luZm9ybWF0aW9uX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyxnQjs7Ozs7Ozs7OztBQ1pZO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyx3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsQ0FBMkQ7QUFDRTtBQUNyQztBQUNFO0FBQzBCO0FBQ3NCO0FBQ1I7QUFDZDtBQUNrVTtBQUN0VTtBQUNRO0FBQ1k7QUFDUjtBQUNaO0FBQ2dCO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNRO0FBQ0E7QUFDYztBQUNJO0FBQ3hDO0FBQ2E7QUFDUTtBQUNHO0FBRXdCO0FBQ2hEO0FBQytDO0FBQ047QUFDYTtBQUNoQjtBQUNKO0FBQ2xDO0FBQzRCO0FBQ1E7QUFDVjtBQUNMO0FBQ1E7QUFDK0I7QUFDdEM7QUFDb0I7QUFDSjtBQUNwQjtBQUNtQjtBQUNwQjtBQUNHO0FBQ0Q7QUFDNkI7QUFDakI7QUFDbUI7QUFDbEM7QUFDWTtBQUNRO0FBRzlELElB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Q0FBQyxDQUFNLENBQ3ZKLENBQ0MsQ0FDRixDQUNBLENBQUM7RUFBQyxDQUFDLENBQ0MsQ0FBQztBQUVyQixDQUFDLENBQUM7QUFFRixpRUFBZXhXLFlBQVksRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2suanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dEb3duLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9QYXlSb2xsL1BheVJvbGxWaWV3SW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L1BheVJvbGwvUHJpbnRQYXlSb2xsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwelwiXG59KSwgJ0Fycm93QmFjaycpOyIsIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk03LjQxIDguNTkgMTIgMTMuMTdsNC41OS00LjU4TDE4IDEwbC02IDYtNi02elwiXG59KSwgJ0tleWJvYXJkQXJyb3dEb3duJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoRTIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoRTInO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZVJvdywgVGFibGVIZWFkLCBQYXBlciwgVGFibGVDb250YWluZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgQXV0b2NvbXBsZXRlLCBzdHlsZWQsIE1vZGFsLCBCYWNrZHJvcCwgRmFkZSwgQm94LCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgQ2hlY2tib3gsIExpbmVhclByb2dyZXNzLCBTdGVwcGVyLCBTdGVwLCBTdGVwTGFiZWwsIEJ1dHRvbiwgVGFicywgVGFiLCBNZW51LCBEaXZpZGVyLCBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0JztcclxuaW1wb3J0IElvc1NoYXJlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0lvc1NoYXJlJztcclxuaW1wb3J0IExvY2FsUHJpbnRzaG9wSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvY2FsUHJpbnRzaG9wJztcclxuaW1wb3J0IEF0dGFjaEZpbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXR0YWNoRmlsZSc7XHJcbmltcG9ydCBTZW5kSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlbmQnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5cclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkLCBFeGl0VG9BcHAgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIE5hdkxpbmssIHVzZVBhcmFtcywgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBDdXJyZW5jeUV4Y2hhbmdlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ3VycmVuY3lFeGNoYW5nZSc7XHJcbmltcG9ydCBNb25ldGl6YXRpb25PbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vbmV0aXphdGlvbk9uJztcclxuaW1wb3J0IHsgRGF0YUdyaWQgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuaW1wb3J0IFJlYWN0VG9QcmludCwgeyB1c2VSZWFjdFRvUHJpbnQgfSBmcm9tICdyZWFjdC10by1wcmludCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi8uLi9pbWcvaW1hZ2VzLnBuZydcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgeyBhbHBoYSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dEb3duJztcclxuaW1wb3J0IHsgVGFiQ29udGV4dCwgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tICdAbXVpL2xhYic7XHJcbmltcG9ydCB7IFBpZSwgUGllQ2hhcnQsIFJlc3BvbnNpdmVDb250YWluZXIsIENlbGwsIFNlY3RvciB9IGZyb20gJ3JlY2hhcnRzJztcclxuaW1wb3J0IFByaW50UGF5Um9sbCBmcm9tICcuL1ByaW50UGF5Um9sbCc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5cclxuXHJcbmNvbnN0IEVkaXRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgQmxhY2tUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgUHJpbnRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuZnVuY3Rpb24gUGF5Um9sbFZpZXdJbmZvcm1hdGlvbigpIHtcclxuICBsZXQgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgZGF0YS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBbZ3JhbnRBY2Nlc3MsIHNldEdyYW50QWNjZXNzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hOdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ3JhbnRBY2Nlc3NgKTtcclxuICAgICAgICByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy51c2VySUQgPT09IHVzZXIuZGF0YS5pZClcclxuICAgICAgICAgIC5tYXAoKHJvdykgPT4gc2V0R3JhbnRBY2Nlc3Mocm93Lm1vZHVsZXMpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKCdFcnJvciBmZXRjaGluZyBhY2Nlc3MgZGV0YWlscy4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hOdW1iZXIoKVxyXG4gIH0sIFt1c2VyXSlcclxuXHJcbiAgY29uc3QgUFJvbGxJbmZvVSA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJQYXktUm9sbFwiICYmIHJvdy5hY2Nlc3MuZWRpdE0gPT09IHRydWUpO1xyXG5cclxuICBjb25zdCBbcGF5Um9sbCwgc2V0UGF5Um9sbF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2VtcGxveWVlLCBzZXRFbXBsb3llZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZW1wbG95ZWVOYW1lLCBzZXRFbXBsb3llZU5hbWVdID0gdXNlU3RhdGUoe30pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFBheVJvbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcGF5Um9sbGApXHJcbiAgICAgICAgc2V0UGF5Um9sbChyZXMuZGF0YS5kYXRhLnJldmVyc2UoKSk7XHJcbiAgICAgICAgcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuX2lkID09PSBpZCkubWFwKChyb3cpID0+IHNldEVtcGxveWVlTmFtZShyb3cuZW1wbG95ZWVOYW1lKSlcclxuICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0b2FzdC5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcGF5cm9sbCBpbmZvcm1hdGlvbi4nKTtcclxuICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hQYXlSb2xsKClcclxuICB9LCBbaWRdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZW1wbG95ZWVgKVxyXG4gICAgICAgIHNldEVtcGxveWVlKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKCdFcnJvciBmZXRjaGluZyBlbXBsb3llZSBsaXN0LicpO1xyXG4gICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IHJlbGF0ZWRFbXBsb3llZSA9IGVtcGxveWVlLmZpbHRlcigoSXRlbSkgPT4gSXRlbS5faWQgPT09IGVtcGxveWVlTmFtZS5pZClcclxuICBjb25zdCBlbXBsb3llZVBob25lID0gcmVsYXRlZEVtcGxveWVlID8gcmVsYXRlZEVtcGxveWVlLm1hcCgocm93KSA9PiByb3cuZW1wbG95ZWVQaG9uZSkgOiAnJ1xyXG4gIGNvbnN0IGVtcGxveWVlSWQgPSByZWxhdGVkRW1wbG95ZWUgPyByZWxhdGVkRW1wbG95ZWUubWFwKChyb3cpID0+IHJvdy5lbXBsb3llZUlkKSA6ICcnXHJcbiAgY29uc3QgYmFua05hbWUgPSByZWxhdGVkRW1wbG95ZWUgPyByZWxhdGVkRW1wbG95ZWUubWFwKChyb3cpID0+IHJvdy5iYW5rTmFtZSkgOiAnJ1xyXG4gIGNvbnN0IGJhbmtBY2NvdW50TnVtYmVyID0gcmVsYXRlZEVtcGxveWVlID8gcmVsYXRlZEVtcGxveWVlLm1hcCgocm93KSA9PiByb3cuYmFua0FjY291bnROdW1iZXIpIDogJydcclxuICBjb25zdCBkZXBhcnRtZW50ID0gcmVsYXRlZEVtcGxveWVlID8gcmVsYXRlZEVtcGxveWVlLm1hcCgocm93KSA9PiByb3cuZGVwYXJ0bWVudCkgOiAnJ1xyXG4gIGNvbnN0IGVtcGxveWVlUm9sZSA9IHJlbGF0ZWRFbXBsb3llZSA/IHJlbGF0ZWRFbXBsb3llZS5tYXAoKHJvdykgPT4gcm93LmVtcGxveWVlUm9sZSkgOiAnJ1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTWVudSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3cgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvdyhlKTtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH1cclxuICBjb25zdCBjb21wb25lbnRSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJpbnQgPSB1c2VSZWFjdFRvUHJpbnQoe1xyXG4gICAgY29udGVudDogKCkgPT4gY29tcG9uZW50UmVmLmN1cnJlbnRcclxuICB9KVxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblByaW50ID0gKCkgPT4ge1xyXG4gICAgaGFuZGxlUHJpbnQoKVxyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtDb21tZW50czEsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoQ29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9jb21tZW50YClcclxuICAgICAgICBjb25zdCByZXNwID0gcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuQ29tbWVudEluZm8uaWRJbmZvID09PSBpZClcclxuICAgICAgICBzZXRDb21tZW50cyhyZXNwLnJldmVyc2UoKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hDb21tZW50KClcclxuICB9LCBbaWRdKVxyXG5cclxuICBjb25zdCBDb21tZW50SW5mbyA9XHJcbiAge1xyXG4gICAgaWRJbmZvOiBpZCxcclxuICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lLFxyXG4gICAgcmVhc29uXHJcbiAgfVxyXG5cclxuICB7LyoqIExvYWRpbmcgU3RhcnQgKi8gfVxyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcblxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgey8qKiBMb2FkaW5nIEVuZCAqLyB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEVkaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgQ29tbWVudEluZm9cclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLWNvbW1lbnQvYCwgZGF0YSlcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHNldFJlYXNvbihcIlwiKTtcclxuICAgICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICBzZXRDb21tZW50cyhbbmV3RGF0YSwgLi4uQ29tbWVudHMxXSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2hvdzIsIHNldFNob3cyXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3cyID0gKGUpID0+IHtcclxuICAgIHNldFNob3cyKGUpO1xyXG4gIH1cclxuICBjb25zdCBbc2hvd1JlZiwgc2V0U2hvd1JlZl0gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IGhhbmRsZVNob3dSZWYgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvd1JlZihlKTtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH1cclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt2YWx1ZTIsIHNldFZhbHVlMl0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHBheVJvbGwuZmluZEluZGV4KHJvdyA9PiByb3cuX2lkID09PSBpZCk7XHJcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgc2V0VmFsdWUoc2VsZWN0ZWRJbmRleClcclxuICAgIH1cclxuICB9LCBbcGF5Um9sbCwgaWRdKVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZTIgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlMihuZXdWYWx1ZSlcclxuICB9XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U2VhcmNoKHZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBuZXdBcnJheSA9IHNlYXJjaCAhPT0gJycgPyBwYXlSb2xsLmZpbHRlcigocm93KSA9PlxyXG4gICAgcm93LmVtcGxveWVlTmFtZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXHJcbiAgKSA6IHBheVJvbGxcclxuICBjb25zdCBbdmFsdWUzLCBzZXRWYWx1ZTNdID0gUmVhY3QudXNlU3RhdGUoJzEnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUYWJQYXlSb2xsVmlldycpXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHNldFZhbHVlMyhyZXN1bHQpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlMyA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gbmV3VmFsdWVcclxuICAgIHNldFZhbHVlMyhjaGFuZ2VWYWx1ZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVGFiUGF5Um9sbFZpZXcnLCBjaGFuZ2VWYWx1ZSlcclxuICB9O1xyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFBheVJvbGwgSW5mb3JtYXRpb25cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL1BheVJvbGxWaWV3QWRtaW4nKX0+XHJcbiAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaWRlQmFyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNpZGVCYXIoZmFsc2UpfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRhc2hFMiAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogMiB9fSA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsb2FkaW5nRGF0YSA/IDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnMTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3cgPT09IDEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93MiA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgcGFkZGluZzogJzVweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+QWxsIFBheVJvbGw8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMScgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdzIoMil9PkZpbHRlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDE3MHB4KScsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BheVJvbGw/Lm1hcCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJpb2RTdHIgPSByb3cud2Vla0Zyb20gJiYgcm93LndlZWtUbyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAgfCAke2RheWpzKHJvdy53ZWVrRnJvbSkuZm9ybWF0KCdERC9NTScpfSAtICR7ZGF5anMocm93LndlZWtUbykuZm9ybWF0KCdERC9NTScpfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cm93LmVtcGxveWVlTmFtZS5uYW1lICsgJyB8ICcgKyByb3cucGF5TnVtYmVyICsgcGVyaW9kU3RyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvUGF5Um9sbFZpZXdJbmZvcm1hdGlvbi8ke3Jvdy5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cyID09PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTBweCcgfX0gc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdzIoMSl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMzAzNjhhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJ2NhbGMoMTAwdmggLSAxMjVweCknLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld0FycmF5Py5tYXAoKHJvdywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyaW9kU3RyID0gcm93LndlZWtGcm9tICYmIHJvdy53ZWVrVG8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgIHwgJHtkYXlqcyhyb3cud2Vla0Zyb20pLmZvcm1hdCgnREQvTU0nKX0gLSAke2RheWpzKHJvdy53ZWVrVG8pLmZvcm1hdCgnREQvTU0nKX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jvdy5lbXBsb3llZU5hbWUubmFtZSArICcgfCAnICsgcm93LnBheU51bWJlciArIHBlcmlvZFN0cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL1BheVJvbGxWaWV3SW5mb3JtYXRpb24vJHtyb3cuX2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMzAzNjhhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXIyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheVJvbGw/LmZpbHRlcihyb3cgPT4gcm93Ll9pZCA9PT0gaWQpPy5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGVkID0gcmVsYXRlZEVtcGxveWVlLmZpbmQoKEl0ZW0pID0+IEl0ZW0uX2lkID09PSByb3cuZW1wbG95ZWVOYW1lLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyb3cuX2lkfSBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPntyb3cuZW1wbG95ZWVOYW1lLm5hbWV9IHwgPHNwYW4+ICBQUi0wMHtyb3cucGF5TnVtYmVyfTwvc3Bhbj48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIlVuUGFpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmx1ZVwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0dXMgPT09IFwiUGFpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjNGNhZjUwXCIgOiBcImJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnN0YXR1cyAhPT0gdW5kZWZpbmVkID8gcm93LnN0YXR1cyA6ICdVbmRlZmluZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyAnZGVtby1jdXN0b21pemVkLW1lbnUnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e29wZW4gPyAndHJ1ZScgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRWxldmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXs8S2V5Ym9hcmRBcnJvd0Rvd25JY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICdncmF5JywgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLWN1c3RvbWl6ZWQtbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnVMaXN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogJ2RlbW8tY3VzdG9taXplZC1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17RmFkZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpc2FibGVkPXtQUm9sbEluZm9VLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL1BheVJvbGxVcGRhdGVGb3JtVmlldy8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZScgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcyMHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkVkaXQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlT3BlblByaW50fSBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBjb2xvcjogJ2dyYXknLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbFByaW50c2hvcEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QcmludDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3sgaGVpZ2h0OiAnNTUwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmQ6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtjb21wb25lbnRSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzZWNvbmRUYWJsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAnODAlJywgbWFyZ2luQm90dG9tOiAnMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49ezV9IHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyMzMTZGRjYnLCBjb2xvcjogJ3doaXRlJyB9fT5HbG9iYWwgR2F0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGNvbFNwYW49ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy53ZWVrRnJvbSAmJiByb3cud2Vla1RvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGBTYWxhcnkgU2xpcCBmb3IgUGVyaW9kOiAke2RheWpzKHJvdy53ZWVrRnJvbSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9IHRvICR7ZGF5anMocm93LndlZWtUbykuZm9ybWF0KCdERC9NTS9ZWVlZJyl9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGBTYWxhcnkgU2xpcCBmb3IgdGhlIG1vbnRoIE9mOiAke2RheWpzKHJvdy5tb250aCkuZm9ybWF0KCdNTU1NLVlZWVknKX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+RW1wbG95ZWUgTmFtZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19IGNvbFNwYW49ezJ9Pntyb3cuZW1wbG95ZWVOYW1lLm5hbWUgPyByb3cuZW1wbG95ZWVOYW1lLm5hbWUgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5Ub3RhbCBEYXlzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+IHtyb3cuZGF5c09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5FbXBsb3llZSBEZXRhaWxzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0gY29sU3Bhbj17Mn0+e2VtcGxveWVlUGhvbmUgIT09IHVuZGVmaW5lZCA/IGVtcGxveWVlUGhvbmUgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5MT1BzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LkxvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5FbXBsb3llZSBJZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19IGNvbFNwYW49ezJ9PntlbXBsb3llZUlkICE9PSB1bmRlZmluZWQgPyBlbXBsb3llZUlkIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+UGFpZCBEYXlzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmRheXNXfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+R3JhZGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fSBjb2xTcGFuPXsyfT57ZW1wbG95ZWVSb2xlICE9PSB1bmRlZmluZWQgPyBlbXBsb3llZVJvbGUgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5CYW5rIE5hbWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT57YmFua05hbWUgIT09IHVuZGVmaW5lZCA/IGJhbmtOYW1lIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5EYXRlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0gY29sU3Bhbj17Mn0+e2RheWpzKHJvdy5wYXlEYXRlKS5mb3JtYXQoJ0RELU1NTU0tWVlZWScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PkEvQyBOby48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT57YmFua0FjY291bnROdW1iZXIgIT09IHVuZGVmaW5lZCA/IGJhbmtBY2NvdW50TnVtYmVyIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzQwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fSBjb2xTcGFuPXsyfT5EZXBhcnRtZW50PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICc0MDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0gY29sU3Bhbj17M30+e2RlcGFydG1lbnQgIT09IHVuZGVmaW5lZCA/IGRlcGFydG1lbnQgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+RWFybmluZyAoRkMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PkFjdHVhbCBTYWxhcnkgKEZDKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5FYXJuaW5ncyAoRkMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGNvbFNwYW49ezJ9PkRlZHVjdGlvbnMgKEZDKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PkJhc2ljIHdhZ2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntyb3cuYmFzaWNTYWxhcnk/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gPC9zcGFuPiA8c3Bhbj4oJDxzcGFuPnsocm93LmJhc2ljU2FsYXJ5IC8gcm93LnJhdGUpPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cm93LmVhcm5pbmdTYWxhcnkgIT09IHVuZGVmaW5lZCA/IHJvdy5lYXJuaW5nU2FsYXJ5Py50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57KHJvdy5lYXJuaW5nU2FsYXJ5ICE9PSB1bmRlZmluZWQgPyByb3cuZWFybmluZ1NhbGFyeSAvIHJvdy5yYXRlIDogMCk/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5JbiBhZHZhbmNlZCBhbGxvd2FuY2VzIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Jvdy5hZHZhbmNlZFNhbGFyeT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSA8L3NwYW4+IDxzcGFuPigkPHNwYW4+eyhyb3cuYWR2YW5jZWRTYWxhcnkgLyByb3cucmF0ZSk/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PlRyYW5zcG9ydCBhbGxvd2FuY2VzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cm93LmJhc2ljVHJhbnNwb3J0Py50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57KHJvdy5iYXNpY1RyYW5zcG9ydCAvIHJvdy5yYXRlKT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Jvdy50cmFuc3BvcnRFYXJuaW5nPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57KHJvdy50cmFuc3BvcnRFYXJuaW5nIC8gcm93LnJhdGUpPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+VHJhbnNwb3J0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cm93LnRyYW5zcG9ydERlZHVjdGlvbj8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSA8L3NwYW4+IDxzcGFuPigkPHNwYW4+eyhyb3cudHJhbnNwb3J0RGVkdWN0aW9uIC8gcm93LnJhdGUpPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5Gb29kIGFsbG93YW5jZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntyb3cuZm9vZEJhc2ljICE9PSB1bmRlZmluZWQgPyByb3cuZm9vZEJhc2ljPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57KHJvdy5mb29kQmFzaWMgIT09IHVuZGVmaW5lZCA/IHJvdy5mb29kQmFzaWMgLyByb3cucmF0ZSA6IDApPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cm93LmZvb2RFYXJuaW5nPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57KHJvdy5mb29kRWFybmluZyAvIHJvdy5yYXRlKT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PkZvb2Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntyb3cuZm9vZERlZHVjdGlvbj8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSA8L3NwYW4+IDxzcGFuPigkPHNwYW4+eyhyb3cuZm9vZERlZHVjdGlvbiAvIHJvdy5yYXRlKT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+Qm91bmNlIGFsbG93YW5jZXMgMyU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntyb3cuYm91bmNlQWxsb3dhbmNlcz8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSA8L3NwYW4+IDxzcGFuPigkPHNwYW4+eyhyb3cuYm91bmNlQWxsb3dhbmNlcyAvIHJvdy5yYXRlKT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Jvdy5ib3VuY2VBbGxvd2FuY2VzRWFybmluZyAhPT0gdW5kZWZpbmVkID8gcm93LmJvdW5jZUFsbG93YW5jZXNFYXJuaW5nPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57KHJvdy5ib3VuY2VBbGxvd2FuY2VzRWFybmluZyAhPT0gdW5kZWZpbmVkID8gcm93LmJvdW5jZUFsbG93YW5jZXNFYXJuaW5nIC8gcm93LnJhdGUgOiAwKT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PkxvYW4gcmVjb3Zlcnk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cm93LmxvYW4/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gPC9zcGFuPiA8c3Bhbj4oJDxzcGFuPnsocm93LmxvYW4gLyByb3cucmF0ZSk/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19Pk90aGVyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cm93Lm90aGVyICE9PSB1bmRlZmluZWQgPyByb3cub3RoZXI/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9zcGFuPiA8c3Bhbj4oJDxzcGFuPnsocm93Lm90aGVyICE9PSB1bmRlZmluZWQgPyByb3cub3RoZXIgLyByb3cucmF0ZSA6IDApPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cm93Lm90aGVyRWFybmluZz8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSA8L3NwYW4+IDxzcGFuPigkPHNwYW4+eyhyb3cub3RoZXJFYXJuaW5nIC8gcm93LnJhdGUpPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+SXRlbSBsb3N0IHJlY292ZXJ5IC8gRGVkdWN0aW9uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cm93Lml0ZW1Mb3N0Py50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57KHJvdy5pdGVtTG9zdCAvIHJvdy5yYXRlKT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgZm9udFNpemU6ICc4MCUnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGNvbFNwYW49ezZ9PlRvdGFsIChCYXNpYywgRWFybmluZyAmIERlZHVjdGlvbik8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LndlZWtGcm9tICYmIHJvdy53ZWVrVG8gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJyMxYTIzN2UnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250V2VpZ2h0OiAnYm9sZCcsIGJhY2tncm91bmRDb2xvcjogJyNmMWY4ZTknIH19IGNvbFNwYW49ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQRVJJT0Q6IHtkYXlqcyhyb3cud2Vla0Zyb20pLmZvcm1hdCgnREQvTU0vWVlZWScpfSBUTyB7ZGF5anMocm93LndlZWtUbykuZm9ybWF0KCdERC9NTS9ZWVlZJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5Ub3RhbCBCYXNpYzo8L3NwYW4+IDxzcGFuPiBGQyB7cm93LnRvdGFsQWN0dWFsU2FsYXJ5Py50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPiA8c3Bhbj4oJDxzcGFuPnsocm93LnRvdGFsQWN0dWFsU2FsYXJ5IC8gcm93LnJhdGUpPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0gY29sU3Bhbj17Mn0+PHNwYW4+VG90YWwgRWFybmluZzo8L3NwYW4+IDxzcGFuPiBGQyB7cm93LnRvdGFsQWN0dWFsRWFybmluZz8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57KHJvdy50b3RhbEFjdHVhbEVhcm5pbmcgLyByb3cucmF0ZSk/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+KTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5Ub3RhbCBEZWR1Y3Rpb246PC9zcGFuPiA8c3Bhbj4gRkMge3Jvdy50b3RhbEFjdHVhbERlZHVjdGlvbj8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57KHJvdy50b3RhbEFjdHVhbERlZHVjdGlvbiAvIHJvdy5yYXRlKT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4pPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gY29sU3Bhbj17Nn0+VG90YWwgKFBhaWQpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+TmV0IHBheWFibGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fSBjb2xTcGFuPXs0fT5GQyB7cm93LnRvdGFsTmV0Py50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDxzcGFuPigkPHNwYW4+e3Jvdy50b3RhbFBhaWREb2xsYXJzPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+RGVkdWN0aW9uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0gY29sU3Bhbj17NH0+RkMge3Jvdy50b3RhbEFjdHVhbERlZHVjdGlvbj8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSA8c3Bhbj4oJDxzcGFuPnsocm93LnRvdGFsQWN0dWFsRGVkdWN0aW9uIC8gcm93LnJhdGUpPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+T3ZlcnRpbWUgJiBCb251czwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19IGNvbFNwYW49ezR9PkZDIHtyb3cuYm9udXM/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gPHNwYW4+KCQ8c3Bhbj57KHJvdy5ib251cyAvIHJvdy5yYXRlKT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4pPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PlRvdGFsIEdlbmVyYWxlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0gY29sU3Bhbj17NH0+RkMge3Jvdy50b3RhbFBhaWQ/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gPHNwYW4+KCQ8c3Bhbj57KHJvdy50b3RhbFBhaWQgLyByb3cucmF0ZSk/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+KTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGNvbFNwYW49ezZ9PlRvdGFsIChOZXQpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJywgY29sb3I6ICdibGFjaycgfX0gY29sU3Bhbj17Mn0+TmV0IHBheWFibGUoRkMpOiBGQ3tyb3cudG90YWxOZXQ/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48c3Bhbj5yYXRlPC9zcGFuPjoge3Jvdy5yYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snLCBjb2xvcjogJ2JsYWNrJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBjb2xTcGFuPXsyfT5OZXQgcGF5YWJsZSgkKTogJHtyb3cudG90YWxQYWlkRG9sbGFycz8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycsIGNvbG9yOiAnYmxhY2snIH19IGNvbFNwYW49ezJ9PkFtb3VudCBQYWlkKEZDKTogRkN7cm93LmFtb3VudFBheUZDICE9PSB1bmRlZmluZWQgPyByb3cuYW1vdW50UGF5RkMudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT4tPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycsIGNvbG9yOiAnYmxhY2snLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGNvbFNwYW49ezJ9PkFtb3VudCBQYWlkKCQpOiAke3Jvdy5hbW91bnRQYXlVU0QgIT09IHVuZGVmaW5lZCA/IHJvdy5hbW91bnRQYXlVU0QudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snLCBjb2xvcjogJ2JsYWNrJyB9fSBjb2xTcGFuPXsyfT5DcmVkaXQoRkMpOiBGQ3tyb3cuQ3JlZGl0RkMgIT09IHVuZGVmaW5lZCA/IHJvdy5DcmVkaXRGQz8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT4tPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycsIGNvbG9yOiAnYmxhY2snLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGNvbFNwYW49ezJ9PkNyZWRpdCgkKTogJHtyb3cuQ3JlZGl0VVNEICE9PSB1bmRlZmluZWQgPyByb3cuQ3JlZGl0VVNEPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9Pk5ldCBXb3JkczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19IGNvbFNwYW49ezR9Pntyb3cud29yZHN9IEZyYW5jIENvbmdvbGFpcy48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3cgPT09IDIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbW1lbnRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMScgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdygxKX0+Q2xvc2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRFZGl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInIH19IHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdjb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2Jz5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICczMzNweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q29tbWVudHMxLm1hcCgoSXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtJdGVtLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF5anMoSXRlbS5kYXRlQ29tbWVudCkuZm9ybWF0KCdERC9NTScpfSB7SXRlbS5Db21tZW50SW5mby5wZXJzb24gKyAnOiAnICsgSXRlbS5Db21tZW50SW5mby5yZWFzb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICB7c2hvdyA9PT0gMyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SElTVE9SWTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3coMSl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNTE4cHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW50ZW5hbmNlLmZpbHRlcigocm93KSA9PiByb3cuX2lkID09PSBpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e3Jvdy5faWR9Pntyb3cuQ3JlYXRlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntyb3cuQ3JlYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIEZhaWxlZCB0byBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBheVJvbGxWaWV3SW5mb3JtYXRpb25cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSx1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQ3VycmVuY3lFeGNoYW5nZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuXHJcblxyXG5jb25zdCBQcmludFBheVJvbGwgPSBSZWFjdC5mb3J3YXJkUmVmKCh7aWR9LHJlZikgPT4ge1xyXG4gICAgY29uc3QgW3BheVJvbGwsc2V0UGF5Um9sbF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZW1wbG95ZWUsc2V0RW1wbG95ZWVdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3BheVJvbGxgKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGEgaGVyZVxyXG4gICAgICAgICAgc2V0UGF5Um9sbChyZXMuZGF0YS5kYXRhLnJldmVyc2UoKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHBheXJvbGwgZGF0YSBmb3IgcHJpbnRpbmcuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sW10pXHJcbiAgICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9lbXBsb3llZWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGEgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFbXBsb3llZShmb3JtYXREYXRlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZW1wbG95ZWUgZGF0YSBmb3IgcHJpbnRpbmcuJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgfSxbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICAgICB7cGF5Um9sbD8uZmlsdGVyKHJvdz0+IHJvdy5faWQgPT09IGlkKT8ubWFwKChyb3cpPT57XHJcbiAgICAgICAgICAgY29uc3QgcmVsYXRlZCA9IGVtcGxveWVlLmZpbmQoKEl0ZW0pPT5JdGVtLl9pZCA9PT0gcm93LmVtcGxveWVlTmFtZS5pZCkgXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICA8ZGl2IGtleT17cm93Ll9pZH0gcmVmPXtyZWZ9IHN0eWxlPXt7Zm9udFNpemU6JzEycHgnfX0+XHJcbiAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17e2ZvbnRTaXplOic4MCUnLG1hcmdpbkJvdHRvbTonMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJ319PlxyXG4gICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49ezV9ICBzdHlsZT17e3BhZGRpbmc6JzVweCcsYm9yZGVyOicxcHggc29saWQgI0RERCcsYmFja2dyb3VuZENvbG9yOicjMzE2RkY2JywgY29sb3I6J3doaXRlJ319Pkdsb2JhbCBHYXRlPC90aD5cclxuICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgIDx0aCAgc3R5bGU9e3twYWRkaW5nOic1cHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLGJhY2tncm91bmRDb2xvcjonI2U4ZjdmZScsIGNvbG9yOidibGFjayd9fSBjb2xTcGFuPXs1fT5cclxuICAgICAgICAgICAgICAgICB7cm93LndlZWtGcm9tICYmIHJvdy53ZWVrVG8gXHJcbiAgICAgICAgICAgICAgICAgICA/IGBTYWxhcnkgU2xpcCBmb3IgUGVyaW9kOiAke2RheWpzKHJvdy53ZWVrRnJvbSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9IHRvICR7ZGF5anMocm93LndlZWtUbykuZm9ybWF0KCdERC9NTS9ZWVlZJyl9YFxyXG4gICAgICAgICAgICAgICAgICAgOiBgU2FsYXJ5IFNsaXAgZm9yIHRoZSBtb250aCBPZjogJHtkYXlqcyhyb3cubW9udGgpLmZvcm1hdCgnTU1NTS1ZWVlZJyl9YFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCd9fT5FbXBsb3llZSBOYW1lPC90ZD5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJ319IGNvbFNwYW49ezJ9Pntyb3cuZW1wbG95ZWVOYW1lLm5hbWU/cm93LmVtcGxveWVlTmFtZS5uYW1lOicnfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCd9fT5Ub3RhbCBEYXlzPC90ZD5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJ319PiB7cm93LmRheXNPcGVufSAgXHJcbiAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJ319PkVtcGxveWVlIERldGFpbHM8L3RkPlxyXG4gICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnfX0gY29sU3Bhbj17Mn0+e3JlbGF0ZWQuZW1wbG95ZWVQaG9uZSAhPT11bmRlZmluZWQ/cmVsYXRlZC5lbXBsb3llZVBob25lOicnfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCd9fT5MT1BzPC90ZD5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJ319PiAgIFxyXG4gICAgICAgICAgICB7cm93LkxvcHN9IFxyXG4gICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCd9fT5FbXBsb3llZSBJZDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCd9fSBjb2xTcGFuPXsyfT57cmVsYXRlZC5lbXBsb3llZUlkfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCd9fT5QYWlkIERheXM8L3RkPlxyXG4gICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnfX0+ICAgXHJcbiAgICAgICAgICAgIHtyb3cuZGF5c1d9IFxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnfX0+R3JhZGU8L3RkPlxyXG4gICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnfX0gY29sU3Bhbj17Mn0+e3JlbGF0ZWQuZW1wbG95ZWVSb2xlfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCd9fT5CYW5rIE5hbWU8L3RkPlxyXG4gICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnfX0+e3JlbGF0ZWQuYmFua05hbWV9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCd9fT5EYXRlPC90ZD5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJ319IGNvbFNwYW49ezJ9PntkYXlqcyhyb3cucGF5RGF0ZSkuZm9ybWF0KCdERC1NTU1NLVlZWVknKX08L3RkPlxyXG4gICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnfX0+QS9DIE5vLjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCd9fT57cmVsYXRlZC5iYW5rQWNjb3VudE51bWJlcn08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzQwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJ319IGNvbFNwYW49ezJ9PkRlcGFydG1lbnQ8L3RkPlxyXG4gICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonNDAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnfX0gY29sU3Bhbj17M30+e3JlbGF0ZWQuZGVwYXJ0bWVudH08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7cGFkZGluZzonNXB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJyxiYWNrZ3JvdW5kQ29sb3I6JyNlOGY3ZmUnfX0+RWFybmluZyAoRkMpPC90aD5cclxuICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7cGFkZGluZzonNXB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJyxiYWNrZ3JvdW5kQ29sb3I6JyNlOGY3ZmUnfX0+QWN0dWFsIFNhbGFyeSAoRkMpPC90aD5cclxuICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7cGFkZGluZzonNXB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJyxiYWNrZ3JvdW5kQ29sb3I6JyNlOGY3ZmUnfX0+RWFybmluZ3MgKEZDKTwvdGg+XHJcbiAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3BhZGRpbmc6JzVweCcsYm9yZGVyOicxcHggc29saWQgI0RERCcsIGNvbG9yOidibGFjaycsYmFja2dyb3VuZENvbG9yOicjZThmN2ZlJ319IGNvbFNwYW49ezJ9PkRlZHVjdGlvbnMgKEZDKTwvdGg+XHJcbiAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snfX0+QmFzaWMgd2FnZTwvdGQ+XHJcbiAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCcsIGNvbG9yOidibGFjayd9fT5cclxuICAgICAgICAgICAgICAgICB7cm93LmJhc2ljU2FsYXJ5fVxyXG4gICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCcsIGNvbG9yOidibGFjayd9fT57cm93LmVhcm5pbmdTYWxhcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319PkluIGFkdmFuY2VkIGFsbG93YW5jZXMgPC90ZD5cclxuICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319Pntyb3cuYWR2YW5jZWRTYWxhcnl9PC90ZD5cclxuICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCcsIGNvbG9yOidibGFjayd9fT5UcmFuc3BvcnQgYWxsb3dhbmNlczwvdGQ+XHJcbiAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCcsIGNvbG9yOidibGFjayd9fT4gXHJcbiAgICAgICAgICAgICAgIHtyb3cuYmFzaWNUcmFuc3BvcnR9XHJcbiAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319PlxyXG4gICAgICAgICAgICAgICAgIHtyb3cudHJhbnNwb3J0RWFybmluZ31cclxuICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snfX0+VHJhbnNwb3J0PC90ZD5cclxuICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319PlxyXG4gICAgICAgICAgICAgICAgIHtyb3cudHJhbnNwb3J0RGVkdWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCcsIGNvbG9yOidibGFjayd9fT5Gb29kIGFsbG93YW5jZXM8L3RkPlxyXG4gICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snfX0+IFxyXG4gICAgICAgICAgICAgICB7cm93LmZvb2RCYXNpY31cclxuICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319PiBcclxuICAgICAgICAgICAgIHtyb3cuZm9vZEVhcm5pbmd9XHJcbiAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319PkZvb2Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCcsIGNvbG9yOidibGFjayd9fT4gXHJcbiAgICAgICAgICAgICAgICAge3Jvdy5mb29kRGVkdWN0aW9ufVxyXG4gICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319PkJvdW5jZSBhbGxvd2FuY2VzIDMlPC90ZD5cclxuICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319PiBcclxuICAgICAgICAgICAgICAge3Jvdy5ib3VuY2VBbGxvd2FuY2VzfVxyXG4gICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snfX0+IHtyb3cuYm91bmNlQWxsb3dhbmNlc0Vhcm5pbmd9PC90ZD5cclxuICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319PkxvYW4gcmVjb3Zlcnk8L3RkPlxyXG4gICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snfX0+e3Jvdy5sb2FufTwvdGQ+XHJcbiAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snfX0+T3RoZXI8L3RkPlxyXG4gICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snfX0+e3Jvdy5vdGhlcn08L3RkPlxyXG4gICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snfX0+IHtyb3cub3RoZXJFYXJuaW5nfTwvdGQ+XHJcbiAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCcsIGNvbG9yOidibGFjayd9fT5JdGVtIGxvc3QgcmVjb3ZlcnkgLyBEZWR1Y3Rpb248L3RkPlxyXG4gICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snfX0+e3Jvdy5pdGVtTG9zdH08L3RkPlxyXG4gICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzZWNvbmRUYWJsZVwiIHN0eWxlPXt7Zm9udFNpemU6JzgwJScsbWFyZ2luQm90dG9tOic1cHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snfX0+XHJcbiAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICA8dGQgIHN0eWxlPXt7cGFkZGluZzonNXB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJyx0ZXh0QWxpZ246J2NlbnRlcid9fSBjb2xTcGFuPXs2fT5Ub3RhbChGQyk8L3RkPlxyXG4gICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319IGNvbFNwYW49ezJ9PjxzcGFuPlRvdGFsIEJhc2ljOjwvc3Bhbj4gPHNwYW4+IEZjIHtyb3cudG90YWxBY3R1YWxTYWxhcnkudG9GaXhlZCgyKX08L3NwYW4+IDwvdGQ+XHJcbiAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCcsIGNvbG9yOidibGFjayd9fSBjb2xTcGFuPXsyfT48c3Bhbj5Ub3RhbCBFYXJuaW5nOjwvc3Bhbj4gPHNwYW4+IEZjIHtyb3cudG90YWxBY3R1YWxFYXJuaW5nLnRvRml4ZWQoMil9PC9zcGFuPiA8L3RkPlxyXG4gICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snfX0gY29sU3Bhbj17Mn0+PHNwYW4+VG90YWwgRGVkdWN0aW9uOjwvc3Bhbj4gPHNwYW4+IEZjIHtyb3cudG90YWxBY3R1YWxEZWR1Y3Rpb24udG9GaXhlZCgyKX08L3NwYW4+IDwvdGQ+XHJcbiAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICA8dGQgc3R5bGU9e3tib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319IGNvbFNwYW49ezJ9Pk5ldCBwYXlhYmxlPC90ZD5cclxuICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319IGNvbFNwYW49ezR9PkZDIHtyb3cudG90YWxOZXQudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7Ym9yZGVyOicxcHggc29saWQgI0RERCcsIGNvbG9yOidibGFjayd9fSBjb2xTcGFuPXsyfT5OZXQgV29yZHM8L3RkPlxyXG4gICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDonMjAwcHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snfX0gY29sU3Bhbj17NH0+e3Jvdy53b3Jkc30gRnJhbmMgQ29uZ29sYWlzLjwvdGQ+XHJcbiAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICA8dGQgc3R5bGU9e3tib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319IGNvbFNwYW49ezJ9Pk92ZXJ0aW1lPC90ZD5cclxuICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319IGNvbFNwYW49ezR9PkZDIHtyb3cuYm9udXMudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7Ym9yZGVyOicxcHggc29saWQgI0RERCcsIGNvbG9yOidibGFjayd9fSBjb2xTcGFuPXsyfT5Ub3RhbCBQYWlkPC90ZD5cclxuICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6JzIwMHB4Jyxib3JkZXI6JzFweCBzb2xpZCAjREREJywgY29sb3I6J2JsYWNrJ319IGNvbFNwYW49ezR9PkZDIHtyb3cudG90YWxQYWlkLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgIDx0ZCAgc3R5bGU9e3twYWRkaW5nOic1cHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snLHRleHRBbGlnbjonY2VudGVyJ319IGNvbFNwYW49ezZ9PlRvdGFsKCQpPC90ZD5cclxuICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOicyMDBweCcsYm9yZGVyOicxcHggc29saWQgI0RERCcsIGNvbG9yOidibGFjayd9fSBjb2xTcGFuPXsyfT5OZXQgcGF5YWJsZShGQyk6IEZDe3Jvdy50b3RhbE5ldC50b0ZpeGVkKDIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgIDx0ZCAgc3R5bGU9e3twYWRkaW5nOic1cHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snLHRleHRBbGlnbjonY2VudGVyJ319PiA8c3Bhbj5yYXRlPC9zcGFuPjoge3Jvdy5yYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgIDx0ZCAgc3R5bGU9e3twYWRkaW5nOic1cHgnLGJvcmRlcjonMXB4IHNvbGlkICNEREQnLCBjb2xvcjonYmxhY2snLHRleHRBbGlnbjonY2VudGVyJ319IGNvbFNwYW49ezJ9Pk5ldCBwYXlhYmxlKCQpOiAke3Jvdy50b3RhbFBhaWREb2xsYXJzLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICA8L2Rpdj4pfSl9XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaW50UGF5Um9sbFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlNpZGViYXJEYXNoRTIiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJEZWxldGVJY29uIiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVSb3ciLCJUYWJsZUhlYWQiLCJQYXBlciIsIlRhYmxlQ29udGFpbmVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsIkF1dG9jb21wbGV0ZSIsInN0eWxlZCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJGYWRlIiwiQm94IiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiQ2hlY2tib3giLCJMaW5lYXJQcm9ncmVzcyIsIlN0ZXBwZXIiLCJTdGVwIiwiU3RlcExhYmVsIiwiQnV0dG9uIiwiVGFicyIsIlRhYiIsIk1lbnUiLCJEaXZpZGVyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiRWRpdEljb24iLCJJb3NTaGFyZUljb24iLCJMb2NhbFByaW50c2hvcEljb24iLCJBdHRhY2hGaWxlSWNvbiIsIlNlbmRJY29uIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwidG9hc3QiLCJFTkRQT0lOVF9VUkwiLCJBZGQiLCJBcnJvd1Vwd2FyZE91dGxpbmVkIiwiRXhpdFRvQXBwIiwidjQiLCJ1c2VOYXZpZ2F0ZSIsIk5hdkxpbmsiLCJ1c2VQYXJhbXMiLCJMaW5rIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImRheWpzIiwiQXJyb3dCYWNrIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkxvYWRlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJDdXJyZW5jeUV4Y2hhbmdlIiwiTW9uZXRpemF0aW9uT24iLCJEYXRhR3JpZCIsIlJlYWN0VG9QcmludCIsInVzZVJlYWN0VG9QcmludCIsIkltYWdlIiwiQ2xvc2UiLCJhbHBoYSIsIktleWJvYXJkQXJyb3dEb3duSWNvbiIsIlRhYkNvbnRleHQiLCJUYWJMaXN0IiwiVGFiUGFuZWwiLCJQaWUiLCJQaWVDaGFydCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJDZWxsIiwiU2VjdG9yIiwiUHJpbnRQYXlSb2xsIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiRWRpdFRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIkJsYWNrVG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiUHJpbnRUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJWaWV3VG9vbHRpcCIsIl9yZWY3IiwiX2V4Y2x1ZGVkNCIsIl9yZWY4Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY5Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWYwIiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiUGF5Um9sbFZpZXdJbmZvcm1hdGlvbiIsIl9wYXlSb2xsJGZpbHRlciIsIl91c2VQYXJhbXMiLCJpZCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWYxIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJlcnJvciIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImdyYW50QWNjZXNzIiwic2V0R3JhbnRBY2Nlc3MiLCJmZXRjaE51bWJlciIsIl9yZWYxMCIsIl9yZXMkZGF0YSIsImZpbHRlciIsInJvdyIsInVzZXJJRCIsIm1hcCIsIm1vZHVsZXMiLCJQUm9sbEluZm9VIiwibW9kdWxlTmFtZSIsImFjY2VzcyIsImVkaXRNIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXlSb2xsIiwic2V0UGF5Um9sbCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiZW1wbG95ZWUiLCJzZXRFbXBsb3llZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwic2V0RW1wbG95ZWVOYW1lIiwiZmV0Y2hQYXlSb2xsIiwiX3JlZjExIiwiX3JlcyRkYXRhMiIsInJldmVyc2UiLCJfaWQiLCJmZXRjaERhdGEiLCJfcmVmMTIiLCJyZWxhdGVkRW1wbG95ZWUiLCJJdGVtIiwiZW1wbG95ZWVQaG9uZSIsImVtcGxveWVlSWQiLCJiYW5rTmFtZSIsImJhbmtBY2NvdW50TnVtYmVyIiwiZGVwYXJ0bWVudCIsImVtcGxveWVlUm9sZSIsIl9SZWFjdCR1c2VTdGF0ZSIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiQm9vbGVhbiIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2VNZW51IiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwic2hvdyIsInNldFNob3ciLCJoYW5kbGVTaG93IiwiZSIsImNvbXBvbmVudFJlZiIsImhhbmRsZVByaW50IiwiY29udGVudCIsImN1cnJlbnQiLCJoYW5kbGVPcGVuUHJpbnQiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwicmVhc29uIiwic2V0UmVhc29uIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsIkNvbW1lbnRzMSIsInNldENvbW1lbnRzIiwiZmV0Y2hDb21tZW50IiwiX3JlZjEzIiwiX3JlcyRkYXRhMyIsInJlc3AiLCJDb21tZW50SW5mbyIsImlkSW5mbyIsImNvbnNvbGUiLCJwZXJzb24iLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVTdWJtaXRFZGl0IiwiX3JlZjE0IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwibmV3RGF0YSIsIl94IiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsInNob3cyIiwic2V0U2hvdzIiLCJoYW5kbGVTaG93MiIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJzaG93UmVmIiwic2V0U2hvd1JlZiIsImhhbmRsZVNob3dSZWYiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwidmFsdWUiLCJzZXRWYWx1ZSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJ2YWx1ZTIiLCJzZXRWYWx1ZTIiLCJzZWxlY3RlZEluZGV4IiwiZmluZEluZGV4IiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJoYW5kbGVDaGFuZ2UyIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsInNlYXJjaCIsInNldFNlYXJjaCIsImhhbmRsZVNlYXJjaCIsInRhcmdldCIsIm5ld0FycmF5IiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInZhbHVlMyIsInNldFZhbHVlMyIsInJlc3VsdCIsImhhbmRsZUNoYW5nZTMiLCJjaGFuZ2VWYWx1ZSIsInNldEl0ZW0iLCJfUmVhY3QkdXNlU3RhdGU1IiwiX1JlYWN0JHVzZVN0YXRlNiIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10IiwiY29udGFpbmVyIiwiaXRlbSIsInhzIiwicGFkZGluZyIsIm92ZXJmbG93WSIsIm9uQ2hhbmdlIiwib3JpZW50YXRpb24iLCJpbmRleCIsInBlcmlvZFN0ciIsIndlZWtGcm9tIiwid2Vla1RvIiwiZm9ybWF0Iiwia2V5IiwibGFiZWwiLCJwYXlOdW1iZXIiLCJ0byIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwicGxhY2VtZW50IiwiZmxvYXQiLCJiYWNrZ3JvdW5kIiwiX3JvdyRiYXNpY1NhbGFyeSIsIl9yZWYxNSIsIl9yb3ckZWFybmluZ1NhbGFyeSIsIl9yZWYxNiIsIl9yb3ckYWR2YW5jZWRTYWxhcnkiLCJfcmVmMTciLCJfcm93JGJhc2ljVHJhbnNwb3J0IiwiX3JlZjE4IiwiX3JvdyR0cmFuc3BvcnRFYXJuaW5nIiwiX3JlZjE5IiwiX3JvdyR0cmFuc3BvcnREZWR1Y3RpIiwiX3JlZjIwIiwiX3JvdyRmb29kQmFzaWMiLCJfcmVmMjEiLCJfcm93JGZvb2RFYXJuaW5nIiwiX3JlZjIyIiwiX3JvdyRmb29kRGVkdWN0aW9uIiwiX3JlZjIzIiwiX3JvdyRib3VuY2VBbGxvd2FuY2VzIiwiX3JlZjI0IiwiX3JvdyRib3VuY2VBbGxvd2FuY2VzMiIsIl9yZWYyNSIsIl9yb3ckbG9hbiIsIl9yZWYyNiIsIl9yb3ckb3RoZXIiLCJfcmVmMjciLCJfcm93JG90aGVyRWFybmluZyIsIl9yZWYyOCIsIl9yb3ckaXRlbUxvc3QiLCJfcmVmMjkiLCJfcm93JHRvdGFsQWN0dWFsU2FsYXIiLCJfcmVmMzAiLCJfcm93JHRvdGFsQWN0dWFsRWFybmkiLCJfcmVmMzEiLCJfcm93JHRvdGFsQWN0dWFsRGVkdWMiLCJfcmVmMzIiLCJfcm93JHRvdGFsTmV0IiwiX3JvdyR0b3RhbFBhaWREb2xsYXJzIiwiX3JvdyR0b3RhbEFjdHVhbERlZHVjMiIsIl9yZWYzMyIsIl9yb3ckYm9udXMiLCJfcmVmMzQiLCJfcm93JHRvdGFsUGFpZCIsIl9yZWYzNSIsIl9yb3ckdG90YWxOZXQyIiwiX3JvdyR0b3RhbFBhaWREb2xsYXJzMiIsIl9yb3ckQ3JlZGl0RkMiLCJfcm93JENyZWRpdFVTRCIsInJlbGF0ZWQiLCJmaW5kIiwibWFyZ2luQm90dG9tIiwic3RhdHVzIiwidW5kZWZpbmVkIiwiZGlzYWJsZUVsZXZhdGlvbiIsImVuZEljb24iLCJib3JkZXIiLCJNZW51TGlzdFByb3BzIiwib25DbG9zZSIsIlRyYW5zaXRpb25Db21wb25lbnQiLCJkaXNhYmxlZCIsImxlbmd0aCIsImdhcCIsInJlZiIsImNvbFNwYW4iLCJtb250aCIsImRheXNPcGVuIiwiTG9wcyIsImRheXNXIiwicGF5RGF0ZSIsImJhc2ljU2FsYXJ5IiwidG9GaXhlZCIsInJlcGxhY2UiLCJyYXRlIiwiZWFybmluZ1NhbGFyeSIsImFkdmFuY2VkU2FsYXJ5IiwiYmFzaWNUcmFuc3BvcnQiLCJ0cmFuc3BvcnRFYXJuaW5nIiwidHJhbnNwb3J0RGVkdWN0aW9uIiwiZm9vZEJhc2ljIiwiZm9vZEVhcm5pbmciLCJmb29kRGVkdWN0aW9uIiwiYm91bmNlQWxsb3dhbmNlcyIsImJvdW5jZUFsbG93YW5jZXNFYXJuaW5nIiwibG9hbiIsIm90aGVyIiwib3RoZXJFYXJuaW5nIiwiaXRlbUxvc3QiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwidG90YWxBY3R1YWxTYWxhcnkiLCJ0b3RhbEFjdHVhbEVhcm5pbmciLCJ0b3RhbEFjdHVhbERlZHVjdGlvbiIsInRvdGFsTmV0IiwidG90YWxQYWlkRG9sbGFycyIsImJvbnVzIiwidG90YWxQYWlkIiwiYW1vdW50UGF5RkMiLCJ0b1N0cmluZyIsImFtb3VudFBheVVTRCIsIkNyZWRpdEZDIiwiQ3JlZGl0VVNEIiwid29yZHMiLCJvblN1Ym1pdCIsInJlcXVpcmVkIiwibXVsdGlsaW5lIiwicm93cyIsInR5cGUiLCJib3JkZXJCb3R0b20iLCJkYXRlQ29tbWVudCIsIm1haW50ZW5hbmNlIiwiQ3JlYXRlIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwiZm9yd2FyZFJlZiIsInRoZW4iLCJjYXRjaCIsImZvcm1hdERhdGUiXSwic291cmNlUm9vdCI6IiJ9