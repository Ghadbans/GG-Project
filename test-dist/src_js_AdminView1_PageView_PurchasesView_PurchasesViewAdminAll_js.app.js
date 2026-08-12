"use strict";
exports.id = "src_js_AdminView1_PageView_PurchasesView_PurchasesViewAdminAll_js";
exports.ids = ["src_js_AdminView1_PageView_PurchasesView_PurchasesViewAdminAll_js"];
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

/***/ "./src/js/AdminView1/PageView/PurchasesView/PurchasesViewAdminAll.js"
/*!***************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/PurchasesView/PurchasesViewAdminAll.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/PrintHeader */ "./src/js/component/PrintHeader.js");
/* harmony import */ var _component_PrintFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/PrintFooter */ "./src/js/component/PrintFooter.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _InvoiceView_AdminView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InvoiceView/AdminView.css */ "./src/js/AdminView1/PageView/InvoiceView/AdminView.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../img/images.png */ "./src/js/img/images.png");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material/LocalPrintshop */ "./node_modules/@mui/icons-material/LocalPrintshop.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material/Phone */ "./node_modules/@mui/icons-material/Phone.js");
/* harmony import */ var _mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/Web */ "./node_modules/@mui/icons-material/Web.js");
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material/Email */ "./node_modules/@mui/icons-material/Email.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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




















































var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var PrintTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"].tooltip)]: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
function PurchasesViewAdminAll() {
  var _purchase$filter;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_35__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_35__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.setUser)({
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
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/grantAccess"));
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
  var PurchaseInfoU = grantAccess.filter(row => row.moduleName === "Purchase" && row.access.editM === true);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    purchase = _useState4[0],
    setPurchase = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    purchase2 = _useState6[0],
    setPurchase2 = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingData = _useState8[0],
    setLoadingData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    item = _useState0[0],
    SetItems = _useState0[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/purchase");
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get(apiUrl);
          setPurchase(res.data.data);
          var resItem = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/item"));
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
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    estimate = _useState10[0],
    setEstimate = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    invoice = _useState12[0],
    setInvoice = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    customerName = _useState14[0],
    setCustomerName = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    purchaseNumber = _useState16[0],
    setPurchaseNumber = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    items = _useState18[0],
    setItems = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    purchaseAmount1 = _useState20[0],
    setPurchaseAmount1 = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    purchaseAmount2 = _useState22[0],
    setPurchaseAmount2 = _useState22[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchDataRelated = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var _resEstimate$data, _resInvoice$data;
          var resEstimate = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/estimation?summary=true"));
          var filteredEstimate = (_resEstimate$data = resEstimate.data) === null || _resEstimate$data === void 0 || (_resEstimate$data = _resEstimate$data.data) === null || _resEstimate$data === void 0 ? void 0 : _resEstimate$data.filter(row => row.ReferenceName === id);
          setEstimate(filteredEstimate);
          var resInvoice = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/invoice?summary=true"));
          var filteredInvoice = (_resInvoice$data = resInvoice.data) === null || _resInvoice$data === void 0 || (_resInvoice$data = _resInvoice$data.data) === null || _resInvoice$data === void 0 ? void 0 : _resInvoice$data.filter(row => row.ReferenceName2 === id);
          setInvoice(filteredInvoice);
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-purchase/").concat(id));
          var currentPurchase = res.data.data;
          setItems(currentPurchase.items);
          setCustomerName(currentPurchase.customerName.customerName.replace(/\s+/g, '_').replace(/\./g, ''));
          setPurchaseNumber(Number(currentPurchase.purchaseNumber || 0));

          // Store amounts from the full fetch — the summary list may omit these fields
          setPurchaseAmount1(parseFloat(currentPurchase.purchaseAmount1 || 0));
          setPurchaseAmount2(parseFloat(currentPurchase.purchaseAmount2 || 0));
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchDataRelated() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchDataRelated();
  }, [id]);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null),
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
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_44__.useReactToPrint)({
    content: () => componentRef.current,
    documentTitle: 'PUR-' + String(purchaseNumber).padStart(6, '0') + ' For ' + customerName,
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
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState24 = _slicedToArray(_useState23, 2),
    show = _useState24[0],
    setShow = _useState24[1];
  var handleShow = e => {
    setShow(e);
  };
  {/** Comments starts */}
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState26 = _slicedToArray(_useState25, 2),
    show1 = _useState26[0],
    setShow1 = _useState26[1];
  var handleShow1 = e => {
    setShow1(e);
    setAnchorEl(null);
  };
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    reason = _useState28[0],
    setReason = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    Comments1 = _useState30[0],
    setComments = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState32 = _slicedToArray(_useState31, 2),
    notification = _useState32[0],
    setNotification = _useState32[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchComment = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var _res$data2, _resNotification$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/comment"));
          var resp = (_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.filter(row => row.CommentInfo.idInfo === id);
          setComments(resp);
          var resNotification = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/notification"));
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
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    loading = _useState34[0],
    setLoading = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    loadingOpenModal = _useState36[0],
    setLoadingOpenModal = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
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
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  {/** Loading End */}
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_40___default()(Date.now());
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo,
        dateComment
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/create-comment/"), data);
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
  {/** Comments end */}
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState40 = _slicedToArray(_useState39, 2),
    showRef = _useState40[0],
    setShowRef = _useState40[1];
  var handleShowRef = e => {
    setShowRef(e);
    setAnchorEl(null);
  };
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState42 = _slicedToArray(_useState41, 2),
    value = _useState42[0],
    setValue = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState44 = _slicedToArray(_useState43, 2),
    value2 = _useState44[0],
    setValue2 = _useState44[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var selectedIndex = purchase.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [purchase, id]);
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState46 = _slicedToArray(_useState45, 2),
    search = _useState46[0],
    setSearch = _useState46[1];
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
  };
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState48 = _slicedToArray(_useState47, 2),
    search2 = _useState48[0],
    setSearch2 = _useState48[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray = search !== '' ? purchase.filter(row => {
    var _row$customerName, _row$projectName;
    return row.purchaseName.toLowerCase().includes(search.toLowerCase()) || row.description && row.description.toLowerCase().includes(search.toLowerCase()) || ((_row$customerName = row.customerName) === null || _row$customerName === void 0 ? void 0 : _row$customerName.customerName) && row.customerName.customerName.toLowerCase().includes(search.toLowerCase()) || ((_row$projectName = row.projectName) === null || _row$projectName === void 0 ? void 0 : _row$projectName.projectName) && row.projectName.projectName.toLowerCase().includes(search.toLowerCase()) || row.items && row.items.some(Item => {
      var _Item$itemName;
      var nameToCheck = typeof Item.itemName === 'string' ? Item.itemName : ((_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName.itemName) || '';
      return nameToCheck.toLowerCase().includes(search.toLowerCase());
    }) || row.items && row.items.some(Item => Item.itemDescription && Item.itemDescription.toLowerCase().includes(search.toLowerCase()));
  }) : purchase;
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState50 = _slicedToArray(_useState49, 2),
    filteredPurchase = _useState50[0],
    setFilteredPurchase = _useState50[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fecthItemPurchase = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-purchase/").concat(id));
          setFilteredPurchase(res.data.data.items);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fecthItemPurchase() {
        return _ref13.apply(this, arguments);
      };
    }();
    fecthItemPurchase();
  }, [id]);
  var newArray2 = search2 !== '' ? filteredPurchase.filter(Item => {
    var _Item$itemName2;
    var nameToCheck = typeof Item.itemName === 'string' ? Item.itemName : ((_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2.itemName) || '';
    return nameToCheck.toLowerCase().includes(search2.toLowerCase()) || Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) || Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase());
  }) : filteredPurchase;
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var data1 = purchase.filter(row => row._id === id).map(row => ({
    number: 'PUR-' + String(row.purchaseNumber).padStart(6, '0'),
    customer: row.customerName.customerName,
    projectName: row.projectName.projectName,
    purchaseDate: dayjs__WEBPACK_IMPORTED_MODULE_40___default()(row.purchaseDate).format('DD/MM/YYYY')
  }));
  var data5 = items.map((Item, i) => {
    var _Item$itemName3;
    return {
      no: i + 1,
      item: (typeof Item.itemName === 'string' ? Item.itemName : (_Item$itemName3 = Item.itemName) === null || _Item$itemName3 === void 0 ? void 0 : _Item$itemName3.itemName) || Item.newDescription || '',
      itemDescription: Item.itemDescription,
      itemQty: Item.itemQty,
      itemCost: '$' + Item.itemCost,
      totalCost: '$' + Item.totalCost,
      itemBuy: Item.itemBuy,
      totalGenerale: '$' + Item.totalGenerale,
      itemOut: Item.itemOut
    };
  });
  var data7 = purchase.filter(row => row._id === id).map(row => ({
    no: '',
    no1: 'SubTotal',
    description: '',
    laborQty: '',
    adjustmentNumber: '',
    purchaseAmount1: '$' + row.purchaseAmount1,
    purchaseAmount2: '$' + row.purchaseAmount2
  }));
  var exportToExcel = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* () {
      var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_56___default().Workbook)();
      var workSheet = workbook.addWorksheet('Sheet1');
      var columns1 = [{
        header: "#",
        key: 'number',
        width: 20
      }, {
        header: "Customer Name",
        key: 'customer',
        width: 20
      }, {
        header: "Project Name",
        key: 'projectName',
        width: 20
      }, {
        header: "Date",
        key: 'purchaseDate',
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
        key: 'itemCost',
        width: 20
      }, {
        header: "Total Cost",
        key: 'totalCost',
        width: 20
      }, {
        header: "Buy",
        key: 'itemBuy',
        width: 20
      }, {
        header: "Total Buy",
        key: 'totalGenerale',
        width: 20
      }, {
        header: "Qty Out",
        key: 'itemOut',
        width: 20
      }];
      workSheet.addRow([]);
      workSheet.addRow(columns1.map(col => col.header));
      data1.forEach(item => {
        workSheet.addRow([item.number, item.customer, item.projectName, item.purchaseDate]);
      });
      workSheet.addRow([]);
      workSheet.addRow(['Item']);
      workSheet.addRow(columns5.map(col => col.header));
      data5.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemCost, item.totalCost, item.itemBuy, item.totalGenerale, item.itemOut]);
      });
      data7.forEach(item => {
        workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.purchaseAmount1, item.purchaseAmount2]);
      });
      var buffer = yield workbook.xlsx.writeBuffer();
      var bold = new Blob([buffer], {
        type: 'application/octet-stream'
      });
      (0,file_saver__WEBPACK_IMPORTED_MODULE_57__.saveAs)(bold, "".concat('PUR-' + String(purchaseNumber).padStart(6, '0') + ' for ' + customerName, ".xlsx"));
    });
    return function exportToExcel() {
      return _ref14.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_27__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Purchase Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: () => navigate(-1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_49__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_55__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_54__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_43__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_29__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_30__["default"], {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    spacing: 2
  }, show1 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 3
  }, show === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      padding: '5px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6"
  }, "All Purchase")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow(2)
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, purchase === null || purchase === void 0 ? void 0 : purchase.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    key: index,
    label: row.customerName.customerName + ' | ' + row.purchaseName,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_34__.Link,
    to: "/PurchasesViewAdminAll/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      height: 'calc(100vh - 125px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    key: index,
    label: row.customerName.customerName + ' | ' + row.purchaseName,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_34__.Link,
    to: "/PurchasesViewAdminAll/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : '') : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      width: '100%',
      background: 'white'
    }
  }, purchase === null || purchase === void 0 || (_purchase$filter = purchase.filter(row => row._id === id)) === null || _purchase$filter === void 0 ? void 0 : _purchase$filter.map(row => {
    var _ref15, _data, _data2, _ref16;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("header", {
      style: {
        display: 'block',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      sx: {
        fontWeight: 'bold',
        fontSize: '20px',
        width: '100%'
      }
    }, "PUR-", String(row.purchaseNumber).padStart(6, '0'), " | ", row.projectName.projectName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: row.statusInfo !== undefined && row.statusInfo === "Pending" ? "gray" : row.statusInfo !== undefined && row.statusInfo === "On-Going" ? "blue" : row.statusInfo !== undefined && row.statusInfo === "Stopped" ? "red" : row.statusInfo !== undefined && row.statusInfo === "Pending" ? "Orange" : row.statusInfo !== undefined && row.statusInfo === "Completed" ? "green" : "black"
    }, row.statusInfo !== undefined ? row.statusInfo : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      "aria-controls": open ? 'demo-customized-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open ? 'true' : undefined,
      variant: "contained",
      disableElevation: true,
      onClick: handleClick,
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_53__["default"], null),
      sx: {
        bgcolor: 'gray',
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray'
        }
      }
    }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      id: "demo-customized-menu",
      MenuListProps: {
        'aria-labelledby': 'demo-customized-button'
      },
      anchorEl: anchorEl,
      open: open,
      onClose: handleCloseMenu,
      TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_18__["default"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      disabled: row.statusInfo !== undefined && row.statusInfo === "Completed" && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
      to: "/PurchaseFormUpdate/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_38__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onClick: handleOpenPrint,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_39__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Print")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onClick: exportToExcel,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_58__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Export to Excel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onClick: () => handleShow1(2)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "Comments"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onClick: () => handleShow1(3)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "History")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, row.ReferenceName || row.ReferenceName2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        color: 'gray'
      },
      onClick: () => handleShowRef(2)
    }, "Reference") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      onClick: handleCloseMenu,
      style: {
        color: 'gray'
      }
    }, "No Related Reference"))))), showRef === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h4", null, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, invoice ? invoice.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      key: row._id
    }, row.invoiceName)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, estimate ? estimate.map(row => {
      var _row$estimateName;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        key: row._id
      }, " | ", (_row$estimateName = row.estimateName) === null || _row$estimateName === void 0 ? void 0 : _row$estimateName.replace('EST-', 'QUO-'));
    }) : null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
      style: {
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center'
      }
    }, showRef === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '80%',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, estimate ? estimate.map(row => {
      var _row$estimateName2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: row._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_40___default()(row.estimateDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Quotation # ", (_row$estimateName2 = row.estimateName) === null || _row$estimateName2 === void 0 ? void 0 : _row$estimateName2.replace('EST-', 'QUO-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Amount  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), " ", row.totalInvoice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
        to: "/EstimateViewAdminAll/".concat(row._id),
        className: "LinkName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        style: {
          fontSize: '12px'
        }
      }, "View")))))));
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, invoice ? invoice.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_40___default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Invoice # ", row.invoiceName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Amount  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), " ", row.totalInvoice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Paid  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), " ", row.total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, " Balance  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), " ", row.balanceDue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
      to: "/InvoiceViewAdminAll/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontSize: '12px'
      }
    }, "View")))))))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
      title: "Close",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => handleShowRef(1),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        height: '450px',
        overflow: 'hidden',
        overflowY: 'scroll',
        width: '100%',
        background: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      hidden: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      ref: componentRef,
      className: "invoicedetails"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "invoiceTest"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : ""
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "invoicehr"
    }, "Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "content",
      style: {
        marginBottom: '20px',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("address", {
      style: {
        position: 'relative',
        lineHeight: 1.35,
        width: '60%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, row.projectName.projectName.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '70%',
        left: '83px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Pur #")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "PUR-", String(row.purchaseNumber).padStart(6, '0')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_40___default()(row.purchaseDate).format('DD/MM/YYYY'))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
      style: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '70%',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "N"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '300px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Brand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "I-Out"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, (_ref15 = search2 !== '' ? filteredPurchase.filter(Item => {
      var _Item$itemName4;
      var nameToCheck = typeof Item.itemName === 'string' ? Item.itemName : ((_Item$itemName4 = Item.itemName) === null || _Item$itemName4 === void 0 ? void 0 : _Item$itemName4.itemName) || '';
      return nameToCheck.toLowerCase().includes(search2.toLowerCase()) || Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) || Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase());
    }) : filteredPurchase) === null || _ref15 === void 0 ? void 0 : _ref15.map((Item, i) => {
      var _Item$itemName6, _Item$itemName7;
      var relatedUnit = item.find(Item1 => {
        var _Item$itemName5;
        return Item1._id === ((_Item$itemName5 = Item.itemName) === null || _Item$itemName5 === void 0 ? void 0 : _Item$itemName5._id);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: Item.idRow || i
      }, Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        },
        colSpan: 6
      }, Item.newDescription)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          width: '10px',
          border: '1px solid #DDD'
        }
      }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          width: '300px',
          textAlign: 'left',
          border: '1px solid #DDD'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        hidden: (typeof Item.itemName === 'string' ? Item.itemName : (_Item$itemName6 = Item.itemName) === null || _Item$itemName6 === void 0 ? void 0 : _Item$itemName6.itemName) === 'empty'
      }, typeof Item.itemName === 'string' ? Item.itemName.toUpperCase() : ((_Item$itemName7 = Item.itemName) === null || _Item$itemName7 === void 0 || (_Item$itemName7 = _Item$itemName7.itemName) === null || _Item$itemName7 === void 0 ? void 0 : _Item$itemName7.toUpperCase()) || ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemDescription ? Item.itemDescription.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, Item.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, Item.itemCost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Number(Item.totalCost || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, Item.itemBuy), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Number(Item.totalGenerale || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemOut, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''))));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, "SubTotal "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, purchaseAmount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, purchaseAmount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("address", {
      style: {
        float: 'left',
        fontSize: '70%',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        lineHeight: '14px',
        fontWeight: 'bold'
      }
    }, "Bank: SOFIBANQUE SA ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), "Entitled: GLOBAL GATE SARL", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), "Bank Account: 00023233330214247020073", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), "Code Swift: SFBXCDKIXXX"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        fontWeight: 'bold'
      }
    }, "Terms & Conditions "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "     ESTIMATES ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED PARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL.")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        position: 'relative',
        marginTop: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintFooter__WEBPACK_IMPORTED_MODULE_1__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data = data) === null || _data === void 0 ? void 0 : _data.branchId : ""
    }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        padding: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        padding: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.branchId : ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "invoicehr"
    }, "Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '25px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("address", {
      style: {
        position: 'relative',
        lineHeight: 1.35,
        width: '60%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '18px'
      }
    }, row.projectName.projectName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontSize: '13px'
      }
    }, row.description !== undefined ? row.description.toUpperCase() : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '80%',
        left: '83px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Pur #")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "PUR-", String(row.purchaseNumber).padStart(6, '0')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_40___default()(row.purchaseDate).format('DD/MM/YYYY'))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
      style: {
        position: 'relative',
        float: 'right',
        padding: '10px',
        marginTop: '-60px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      label: "Search",
      id: "search2",
      value: search2,
      variant: "standard",
      onChange: handleSearch2
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '90%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "N"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '300px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Brand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "I-Out"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, (_ref16 = search2 !== '' ? filteredPurchase.filter(Item => {
      var _Item$itemName8;
      var nameToCheck = typeof Item.itemName === 'string' ? Item.itemName : ((_Item$itemName8 = Item.itemName) === null || _Item$itemName8 === void 0 ? void 0 : _Item$itemName8.itemName) || '';
      return nameToCheck.toLowerCase().includes(search2.toLowerCase()) || Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) || Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase());
    }) : filteredPurchase) === null || _ref16 === void 0 ? void 0 : _ref16.map((Item, i) => {
      var _Item$itemName0, _Item$itemName1;
      var relatedUnit = item.find(Item1 => {
        var _Item$itemName9;
        return Item1._id === ((_Item$itemName9 = Item.itemName) === null || _Item$itemName9 === void 0 ? void 0 : _Item$itemName9._id);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: Item.idRow || i
      }, Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        },
        colSpan: 6
      }, Item.newDescription)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          width: '10px',
          border: '1px solid #DDD'
        }
      }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          width: '300px',
          textAlign: 'left',
          border: '1px solid #DDD'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        hidden: (typeof Item.itemName === 'string' ? Item.itemName : (_Item$itemName0 = Item.itemName) === null || _Item$itemName0 === void 0 ? void 0 : _Item$itemName0.itemName) === 'empty'
      }, typeof Item.itemName === 'string' ? Item.itemName.toUpperCase() : ((_Item$itemName1 = Item.itemName) === null || _Item$itemName1 === void 0 || (_Item$itemName1 = _Item$itemName1.itemName) === null || _Item$itemName1 === void 0 ? void 0 : _Item$itemName1.toUpperCase()) || ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemDescription ? Item.itemDescription.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, Item.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, Item.itemCost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Number(Item.totalCost || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, Item.itemBuy), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Number(Item.totalGenerale || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemOut, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''))));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, "SubTotal "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, purchaseAmount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, purchaseAmount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "footerinvoice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_52__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Contact@GlobalGate.Sarl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_50__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "+243 827 722 222")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_51__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "www.GlobalGate.sarl")))))));
  })))), show1 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "COMMENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit",
    style: {
      width: '100%'
    },
    className: "btnCustomer6"
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      height: '355px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, Comments1.map(Item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
    key: Item._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      width: '100%',
      borderBottom: '1px solid black'
    }
  }, Item.dateComment ? dayjs__WEBPACK_IMPORTED_MODULE_40___default()(Item.dateComment).format('DD/MM') : '', " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "", show1 === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "HISTORY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      height: '518px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, purchase.filter(row => row._id === id).map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    key: row._id
  }, row.Create ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.Create.dateComment, " ", row.Create.person, " ", row.Create.purchaseNumber) : '')), notification.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.person + ' on ' + dayjs__WEBPACK_IMPORTED_MODULE_40___default()(row.dateNotification).format('DD/MMMM'), ": ", row.reason))))))) : ""))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_20__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_47__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_20__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_48__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchasesViewAdminAll);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUHVyY2hhc2VzVmlld19QdXJjaGFzZXNWaWV3QWRtaW5BbGxfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLGdCOzs7Ozs7Ozs7O0FDWlk7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLHdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsQ0FBeUQ7QUFDQTtBQUNDO0FBQ0Q7QUFDbEM7QUFDRTtBQUNZO0FBQ2U7QUFDc0I7QUFDUjtBQUN5VjtBQUMzVjtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDUTtBQUNBO0FBQ2M7QUFDSTtBQUN6QztBQUNnRDtBQUN2QjtBQUNQO0FBQ0s7QUFDUTtBQUNZO0FBQ1I7QUFDWjtBQUN0QjtBQUM2QjtBQUMrQjtBQUN0QztBQUNlO0FBQ2hCO0FBQ0Q7QUFDZ0I7QUFDVjtBQUNFO0FBQ0Y7QUFDTjtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ3dCO0FBQ3BCO0FBQ1E7QUFFakM7QUFDTztBQUNXO0FBRS9DLElBQU1pRyxXQUFXLEdBQUd0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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRIQUE0SCxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLFlBQVksWUFBWSxRQUFRLEtBQUssV0FBVyxVQUFVLFVBQVUsUUFBUSxXQUFXLEtBQUssV0FBVyxRQUFRLE1BQU0sV0FBVyxZQUFZLFFBQVEsTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLFVBQVUsVUFBVSxRQUFRLFdBQVcsS0FBSyxXQUFXLFdBQVcsUUFBUSxNQUFNLFdBQVcsT0FBTyxZQUFZLEtBQUssV0FBVyxVQUFVLFVBQVUsUUFBUSxNQUFNLFdBQVcsVUFBVSxVQUFVLFFBQVEsWUFBWSxLQUFLLFdBQVcsUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsV0FBVyxXQUFXLFFBQVEsTUFBTSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksV0FBVyxXQUFXLGlFQUFpRSx3QkFBd0IscUJBQXFCLE9BQU8saUJBQWlCLG1DQUFtQyw4QkFBOEIsMkJBQTJCLGtDQUFrQyxPQUFPLGtDQUFrQyxxQkFBcUIsdUJBQXVCLDJCQUEyQiwwQkFBMEIsNEJBQTRCLE9BQU8sZUFBZSxxQkFBcUIsdUJBQXVCLDJCQUEyQiw0QkFBNEIsT0FBTyx1QkFBdUIsa0NBQWtDLDhCQUE4Qiw0QkFBNEIsMEJBQTBCLDJCQUEyQixnQ0FBZ0MsNkJBQTZCLG9DQUFvQyxTQUFTLG9DQUFvQywyQkFBMkIsT0FBTyxrREFBa0QsZ0JBQWdCLGNBQWMsMkJBQTJCLHFCQUFxQixpQkFBaUIsZ0JBQWdCLHFCQUFxQix5QkFBeUIsa0JBQWtCLDRDQUE0QyxxQkFBcUIsa0JBQWtCLHFDQUFxQyxhQUFhLGVBQWUsaUJBQWlCLGlFQUFpRSxrQkFBa0IsbUJBQW1CLHFCQUFxQixxQkFBcUIsd0JBQXdCLGFBQWEsZ0JBQWdCLGFBQWEsb0JBQW9CLDRCQUE0QixhQUFhLGVBQWUsaUJBQWlCLDJDQUEyQyxvQkFBb0IsY0FBYyxjQUFjLDJCQUEyQiwyREFBMkQsY0FBYyxZQUFZLGFBQWEsK0JBQStCLGFBQWEsZUFBZSxpQkFBaUIsb0VBQW9FLGFBQWEsNEJBQTRCLGFBQWEsMkJBQTJCLGNBQWMsdUJBQXVCLGtCQUFrQix1QkFBdUIsb0JBQW9CLDRCQUE0QiwwQkFBMEIsMkJBQTJCLDhCQUE4QiwyQkFBMkIsa0NBQWtDLE9BQU8sbUJBQW1CO0FBQ3Q4RztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9JdkMsTUFBMkc7QUFDM0csTUFBaUc7QUFDakcsTUFBd0c7QUFDeEcsTUFBMkg7QUFDM0gsTUFBb0g7QUFDcEgsTUFBb0g7QUFDcEgsTUFBdUs7QUFDdks7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywrSEFBTzs7OztBQUlpSDtBQUN6SSxPQUFPLGlFQUFlLCtIQUFPLElBQUksK0hBQU8sVUFBVSwrSEFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2suanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dEb3duLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9QdXJjaGFzZXNWaWV3L1B1cmNoYXNlc1ZpZXdBZG1pbkFsbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvSW52b2ljZVZpZXcvQWRtaW5WaWV3LmNzcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvSW52b2ljZVZpZXcvQWRtaW5WaWV3LmNzcz9lYmVjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwelwiXG59KSwgJ0Fycm93QmFjaycpOyIsIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk03LjQxIDguNTkgMTIgMTMuMTdsNC41OS00LjU4TDE4IDEwbC02IDYtNi02elwiXG59KSwgJ0tleWJvYXJkQXJyb3dEb3duJyk7IiwiaW1wb3J0IFByaW50SGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9QcmludEhlYWRlcic7XHJcbmltcG9ydCBQcmludEZvb3RlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvUHJpbnRGb290ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaWRlYmFyRGFzaCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2gnO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJ1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnXHJcbmltcG9ydCAnLi4vSW52b2ljZVZpZXcvQWRtaW5WaWV3LmNzcydcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IHsgQ29sbGFwc2UsIE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlUm93LCBUYWJsZUhlYWQsIFBhcGVyLCBUYWJsZUNvbnRhaW5lciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBBdXRvY29tcGxldGUsIHN0eWxlZCwgTW9kYWwsIEJhY2tkcm9wLCBGYWRlLCBCb3gsIE91dGxpbmVkSW5wdXQsIElucHV0QWRvcm5tZW50LCBDaGVja2JveCwgTGluZWFyUHJvZ3Jlc3MsIFN0ZXBwZXIsIFN0ZXAsIFN0ZXBMYWJlbCwgQnV0dG9uLCBBY2NvcmRpb24sIEFjY29yZGlvblN1bW1hcnksIEFjY29yZGlvbkRldGFpbHMsIFRhYnMsIFRhYiwgTWVudSwgRGl2aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBMaW5rLCBOYXZMaW5rLCB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi8uLi9pbWcvaW1hZ2VzLnBuZydcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBJb3NTaGFyZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Jb3NTaGFyZSc7XHJcbmltcG9ydCBMb2NhbFByaW50c2hvcEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2NhbFByaW50c2hvcCc7XHJcbmltcG9ydCBBdHRhY2hGaWxlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0F0dGFjaEZpbGUnO1xyXG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZW5kJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IFJlYWN0VG9QcmludCwgeyB1c2VSZWFjdFRvUHJpbnQgfSBmcm9tICdyZWFjdC10by1wcmludCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IHsgRW1haWxPdXRsaW5lZCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUGhvbmUgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QaG9uZSc7XHJcbmltcG9ydCBXZWJJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvV2ViJztcclxuaW1wb3J0IEVtYWlsIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW1haWwnO1xyXG5pbXBvcnQgRW1haWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW1haWwnO1xyXG5pbXBvcnQgUGhvbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGhvbmUnO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd24nO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcbmltcG9ydCBFeGNlbEpTIGZyb20gJ2V4Y2VsanMnXHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyBFeHBsaWNpdCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5cclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBQcmludFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgVmlld1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIFB1cmNoYXNlc1ZpZXdBZG1pbkFsbCgpIHtcclxuICBsZXQgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBbZ3JhbnRBY2Nlc3MsIHNldEdyYW50QWNjZXNzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hOdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ3JhbnRBY2Nlc3NgKTtcclxuICAgICAgICByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy51c2VySUQgPT09IHVzZXIuZGF0YS5pZClcclxuICAgICAgICAgIC5tYXAoKHJvdykgPT4gc2V0R3JhbnRBY2Nlc3Mocm93Lm1vZHVsZXMpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaE51bWJlcigpXHJcbiAgfSwgW3VzZXJdKVxyXG5cclxuICBjb25zdCBQdXJjaGFzZUluZm9VID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIlB1cmNoYXNlXCIgJiYgcm93LmFjY2Vzcy5lZGl0TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgW3B1cmNoYXNlLCBzZXRQdXJjaGFzZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbcHVyY2hhc2UyLCBzZXRQdXJjaGFzZTJdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXRlbSwgU2V0SXRlbXNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgYXBpVXJsID0gYCR7RU5EUE9JTlRfVVJMfS9wdXJjaGFzZWA7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYXBpVXJsKVxyXG4gICAgICAgIHNldFB1cmNoYXNlKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc0l0ZW0gPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtYClcclxuICAgICAgICBTZXRJdGVtcyhyZXNJdGVtLmRhdGEuZGF0YSlcclxuICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbXSlcclxuICBjb25zdCBbZXN0aW1hdGUsIHNldEVzdGltYXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW52b2ljZSwgc2V0SW52b2ljZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2N1c3RvbWVyTmFtZSwgc2V0Q3VzdG9tZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwdXJjaGFzZU51bWJlciwgc2V0UHVyY2hhc2VOdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3B1cmNoYXNlQW1vdW50MSwgc2V0UHVyY2hhc2VBbW91bnQxXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtwdXJjaGFzZUFtb3VudDIsIHNldFB1cmNoYXNlQW1vdW50Ml0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhUmVsYXRlZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNFc3RpbWF0ZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VzdGltYXRpb24/c3VtbWFyeT10cnVlYClcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZEVzdGltYXRlID0gcmVzRXN0aW1hdGUuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5SZWZlcmVuY2VOYW1lID09PSBpZClcclxuICAgICAgICBzZXRFc3RpbWF0ZShmaWx0ZXJlZEVzdGltYXRlKTtcclxuICAgICAgICBjb25zdCByZXNJbnZvaWNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaW52b2ljZT9zdW1tYXJ5PXRydWVgKVxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkSW52b2ljZSA9IHJlc0ludm9pY2UuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5SZWZlcmVuY2VOYW1lMiA9PT0gaWQpXHJcbiAgICAgICAgc2V0SW52b2ljZShmaWx0ZXJlZEludm9pY2UpO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcHVyY2hhc2UvJHtpZH1gKVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQdXJjaGFzZSA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0SXRlbXMoY3VycmVudFB1cmNoYXNlLml0ZW1zKTtcclxuXHJcbiAgICAgICAgc2V0Q3VzdG9tZXJOYW1lKGN1cnJlbnRQdXJjaGFzZS5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnJlcGxhY2UoL1xccysvZywgJ18nKS5yZXBsYWNlKC9cXC4vZywgJycpKTtcclxuICAgICAgICBzZXRQdXJjaGFzZU51bWJlcihOdW1iZXIoY3VycmVudFB1cmNoYXNlLnB1cmNoYXNlTnVtYmVyIHx8IDApKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTdG9yZSBhbW91bnRzIGZyb20gdGhlIGZ1bGwgZmV0Y2gg4oCUIHRoZSBzdW1tYXJ5IGxpc3QgbWF5IG9taXQgdGhlc2UgZmllbGRzXHJcbiAgICAgICAgc2V0UHVyY2hhc2VBbW91bnQxKHBhcnNlRmxvYXQoY3VycmVudFB1cmNoYXNlLnB1cmNoYXNlQW1vdW50MSB8fCAwKSk7XHJcbiAgICAgICAgc2V0UHVyY2hhc2VBbW91bnQyKHBhcnNlRmxvYXQoY3VycmVudFB1cmNoYXNlLnB1cmNoYXNlQW1vdW50MiB8fCAwKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YVJlbGF0ZWQoKVxyXG4gIH0sIFtpZF0pXHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29tcG9uZW50UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgaGFuZGxlUHJpbnQgPSB1c2VSZWFjdFRvUHJpbnQoe1xyXG4gICAgY29udGVudDogKCkgPT4gY29tcG9uZW50UmVmLmN1cnJlbnQsXHJcbiAgICBkb2N1bWVudFRpdGxlOiAnUFVSLScgKyBTdHJpbmcocHVyY2hhc2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIEZvciAnICsgY3VzdG9tZXJOYW1lLFxyXG4gICAgb25CZWZvcmVHZXRDb250ZW50OiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IFBBR0VfSEVJR0hUID0gMTA0NTtcclxuICAgICAgY29uc3QgcHJpbnRFbGVtZW50ID0gY29tcG9uZW50UmVmLmN1cnJlbnQ7XHJcbiAgICAgIGlmIChwcmludEVsZW1lbnQpIHtcclxuICAgICAgICBwcmludEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRlbXAtY2xhc3MtZm9yLWhlaWdodFwiKVxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHByaW50RWxlbWVudC5jbGllbnRIZWlnaHRcclxuICAgICAgICBjb25zdCBudW1iZXJPZlBhZ2UgPSBNYXRoLmNlaWwoaGVpZ2h0IC8gUEFHRV9IRUlHSFQpXHJcbiAgICAgICAgaWYgKG51bWJlck9mUGFnZSA+IDEpIHtcclxuICAgICAgICAgIGNvbnN0IGhlaWdodFdpdGhTaW5nbGVIZWFkZXIgPSBudW1iZXJPZlBhZ2UgKiBQQUdFX0hFSUdIVFxyXG4gICAgICAgICAgbGV0IHJlcXVpcmVkSGVpZ2h0ID0gaGVpZ2h0V2l0aFNpbmdsZUhlYWRlclxyXG4gICAgICAgICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gcHJpbnRFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGhlYWRcIik/LlswXT8uY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICBjb25zdCBmb290ZXJIZWlnaHQgPSBwcmludEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Zm9vdFwiKT8uWzBdPy5jbGllbnRIZWlnaHRcclxuICAgICAgICAgIHJlcXVpcmVkSGVpZ2h0IC09IChudW1iZXJPZlBhZ2UgLSAxKSAqIChoZWFkZXJIZWlnaHQgKyBmb290ZXJIZWlnaHQpXHJcbiAgICAgICAgICBwcmludEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7cmVxdWlyZWRIZWlnaHR9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmludEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRlbXAtY2xhc3MtZm9yLWhlaWdodFwiKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25BZnRlclByaW50OiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByaW50RWxlbWVudCA9IGNvbXBvbmVudFJlZi5jdXJyZW50O1xyXG4gICAgICBpZiAocHJpbnRFbGVtZW50KSB7XHJcbiAgICAgICAgcHJpbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGBhdXRvYFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCBoYW5kbGVPcGVuUHJpbnQgPSAoKSA9PiB7XHJcbiAgICBoYW5kbGVQcmludCgpXHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3cgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvdyhlKTtcclxuICB9XHJcbiAgey8qKiBDb21tZW50cyBzdGFydHMgKi8gfVxyXG4gIGNvbnN0IFtzaG93MSwgc2V0U2hvdzFdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgaGFuZGxlU2hvdzEgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvdzEoZSk7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9XHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtDb21tZW50czEsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbm90aWZpY2F0aW9uLCBzZXROb3RpZmljYXRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaENvbW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vY29tbWVudGApXHJcbiAgICAgICAgY29uc3QgcmVzcCA9IHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LkNvbW1lbnRJbmZvLmlkSW5mbyA9PT0gaWQpXHJcbiAgICAgICAgc2V0Q29tbWVudHMocmVzcClcclxuICAgICAgICBjb25zdCByZXNOb3RpZmljYXRpb24gPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ub3RpZmljYXRpb25gKVxyXG4gICAgICAgIHNldE5vdGlmaWNhdGlvbihyZXNOb3RpZmljYXRpb24uZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5pZEluZm8gPT09IGlkKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hDb21tZW50KClcclxuICB9LCBbaWRdKVxyXG5cclxuICBjb25zdCBDb21tZW50SW5mbyA9XHJcbiAge1xyXG4gICAgaWRJbmZvOiBpZCxcclxuICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lLFxyXG4gICAgcmVhc29uXHJcbiAgfVxyXG4gIHsvKiogTG9hZGluZyBTdGFydCAqLyB9XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcblxyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG5cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIHsvKiogTG9hZGluZyBFbmQgKi8gfVxyXG4gIGNvbnN0IGRhdGVDb21tZW50ID0gZGF5anMoRGF0ZS5ub3coKSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEVkaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgQ29tbWVudEluZm8sXHJcbiAgICAgIGRhdGVDb21tZW50XHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1jb21tZW50L2AsIGRhdGEpXHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBzZXRSZWFzb24oXCJcIik7XHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgc2V0Q29tbWVudHMoW25ld0RhdGEsIC4uLkNvbW1lbnRzMV0pXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgey8qKiBDb21tZW50cyBlbmQgKi8gfVxyXG4gIGNvbnN0IFtzaG93UmVmLCBzZXRTaG93UmVmXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgaGFuZGxlU2hvd1JlZiA9IChlKSA9PiB7XHJcbiAgICBzZXRTaG93UmVmKGUpO1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt2YWx1ZTIsIHNldFZhbHVlMl0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHB1cmNoYXNlLmZpbmRJbmRleChyb3cgPT4gcm93Ll9pZCA9PT0gaWQpO1xyXG4gICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHNldFZhbHVlKHNlbGVjdGVkSW5kZXgpXHJcbiAgICB9XHJcbiAgfSwgW3B1cmNoYXNlLCBpZF0pXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlMiA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUyKG5ld1ZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U2VhcmNoKHZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBbc2VhcmNoMiwgc2V0U2VhcmNoMl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoMiA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRTZWFyY2gyKHZhbHVlKVxyXG4gIH1cclxuICAgIGNvbnN0IG5ld0FycmF5ID0gc2VhcmNoICE9PSAnJyA/IHB1cmNoYXNlLmZpbHRlcigocm93KSA9PlxyXG4gICAgICByb3cucHVyY2hhc2VOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgIChyb3cuZGVzY3JpcHRpb24gJiYgcm93LmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKSB8fFxyXG4gICAgICAocm93LmN1c3RvbWVyTmFtZT8uY3VzdG9tZXJOYW1lICYmIHJvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKSB8fFxyXG4gICAgICAocm93LnByb2plY3ROYW1lPy5wcm9qZWN0TmFtZSAmJiByb3cucHJvamVjdE5hbWUucHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICAgIChyb3cuaXRlbXMgJiYgcm93Lml0ZW1zLnNvbWUoKEl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBuYW1lVG9DaGVjayA9IHR5cGVvZiBJdGVtLml0ZW1OYW1lID09PSAnc3RyaW5nJyA/IEl0ZW0uaXRlbU5hbWUgOiBJdGVtLml0ZW1OYW1lPy5pdGVtTmFtZSB8fCAnJztcclxuICAgICAgICByZXR1cm4gbmFtZVRvQ2hlY2sudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIH0pKSB8fFxyXG4gICAgICAocm93Lml0ZW1zICYmIHJvdy5pdGVtcy5zb21lKChJdGVtKSA9PiBJdGVtLml0ZW1EZXNjcmlwdGlvbiAmJiBJdGVtLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSkpXHJcbiAgICApIDogcHVyY2hhc2VcclxuICBjb25zdCBbZmlsdGVyZWRQdXJjaGFzZSwgc2V0RmlsdGVyZWRQdXJjaGFzZV0gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmVjdGhJdGVtUHVyY2hhc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LXB1cmNoYXNlLyR7aWR9YClcclxuICAgICAgICBzZXRGaWx0ZXJlZFB1cmNoYXNlKHJlcy5kYXRhLmRhdGEuaXRlbXMpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZWN0aEl0ZW1QdXJjaGFzZSgpXHJcbiAgfSwgW2lkXSlcclxuICAgIGNvbnN0IG5ld0FycmF5MiA9IHNlYXJjaDIgIT09ICcnID8gZmlsdGVyZWRQdXJjaGFzZS5maWx0ZXIoKEl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgbmFtZVRvQ2hlY2sgPSB0eXBlb2YgSXRlbS5pdGVtTmFtZSA9PT0gJ3N0cmluZycgPyBJdGVtLml0ZW1OYW1lIDogSXRlbS5pdGVtTmFtZT8uaXRlbU5hbWUgfHwgJyc7XHJcbiAgICAgIHJldHVybiBuYW1lVG9DaGVjay50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDIudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgKEl0ZW0uaXRlbURlc2NyaXB0aW9uICYmIEl0ZW0uaXRlbURlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoMi50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgICAgKEl0ZW0ubmV3RGVzY3JpcHRpb24gJiYgSXRlbS5uZXdEZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDIudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgfSkgOiBmaWx0ZXJlZFB1cmNoYXNlXHJcblxyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH1cclxuICBjb25zdCBkYXRhMSA9IHB1cmNoYXNlLmZpbHRlcihyb3cgPT4gcm93Ll9pZCA9PT0gaWQpLm1hcCgocm93KSA9PiAoe1xyXG4gICAgbnVtYmVyOiAnUFVSLScgKyBTdHJpbmcocm93LnB1cmNoYXNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpLFxyXG4gICAgY3VzdG9tZXI6IHJvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLFxyXG4gICAgcHJvamVjdE5hbWU6IHJvdy5wcm9qZWN0TmFtZS5wcm9qZWN0TmFtZSxcclxuICAgIHB1cmNoYXNlRGF0ZTogZGF5anMocm93LnB1cmNoYXNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyksXHJcbiAgfSkpXHJcbiAgY29uc3QgZGF0YTUgPSBpdGVtcy5tYXAoKEl0ZW0sIGkpID0+IHtcclxuICAgIHJldHVybiAoe1xyXG4gICAgICBubzogaSArIDEsXHJcbiAgICAgIGl0ZW06ICh0eXBlb2YgSXRlbS5pdGVtTmFtZSA9PT0gJ3N0cmluZycgPyBJdGVtLml0ZW1OYW1lIDogSXRlbS5pdGVtTmFtZT8uaXRlbU5hbWUpIHx8IEl0ZW0ubmV3RGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogSXRlbS5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgIGl0ZW1RdHk6IEl0ZW0uaXRlbVF0eSxcclxuICAgICAgaXRlbUNvc3Q6ICckJyArIEl0ZW0uaXRlbUNvc3QsXHJcbiAgICAgIHRvdGFsQ29zdDogJyQnICsgSXRlbS50b3RhbENvc3QsXHJcbiAgICAgIGl0ZW1CdXk6IEl0ZW0uaXRlbUJ1eSxcclxuICAgICAgdG90YWxHZW5lcmFsZTogJyQnICsgSXRlbS50b3RhbEdlbmVyYWxlLFxyXG4gICAgICBpdGVtT3V0OiBJdGVtLml0ZW1PdXQsXHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgY29uc3QgZGF0YTcgPSBwdXJjaGFzZS5maWx0ZXIocm93ID0+IHJvdy5faWQgPT09IGlkKS5tYXAoKHJvdykgPT4gKHtcclxuICAgIG5vOiAnJyxcclxuICAgIG5vMTogJ1N1YlRvdGFsJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgIGxhYm9yUXR5OiAnJyxcclxuICAgIGFkanVzdG1lbnROdW1iZXI6ICcnLFxyXG4gICAgcHVyY2hhc2VBbW91bnQxOiAnJCcgKyByb3cucHVyY2hhc2VBbW91bnQxLFxyXG4gICAgcHVyY2hhc2VBbW91bnQyOiAnJCcgKyByb3cucHVyY2hhc2VBbW91bnQyLFxyXG4gIH0pKVxyXG5cclxuICBjb25zdCBleHBvcnRUb0V4Y2VsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgd29ya2Jvb2sgPSBuZXcgRXhjZWxKUy5Xb3JrYm9vaygpO1xyXG4gICAgY29uc3Qgd29ya1NoZWV0ID0gd29ya2Jvb2suYWRkV29ya3NoZWV0KCdTaGVldDEnKTtcclxuICAgIGNvbnN0IGNvbHVtbnMxID0gW1xyXG4gICAgICB7IGhlYWRlcjogXCIjXCIsIGtleTogJ251bWJlcicsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJDdXN0b21lciBOYW1lXCIsIGtleTogJ2N1c3RvbWVyJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIlByb2plY3QgTmFtZVwiLCBrZXk6ICdwcm9qZWN0TmFtZScsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJEYXRlXCIsIGtleTogJ3B1cmNoYXNlRGF0ZScsIHdpZHRoOiAyMCB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGNvbHVtbnM1ID0gW1xyXG4gICAgICB7IGhlYWRlcjogXCIjXCIsIGtleTogJ25vJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIkl0ZW1cIiwga2V5OiAnaXRlbScsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJJdGVtIERlc2NyaXB0aW9uXCIsIGtleTogJ2l0ZW1EZXNjcmlwdGlvbicsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJRdHlcIiwga2V5OiAnaXRlbVF0eScsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJSYXRlXCIsIGtleTogJ2l0ZW1Db3N0Jywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIlRvdGFsIENvc3RcIiwga2V5OiAndG90YWxDb3N0Jywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIkJ1eVwiLCBrZXk6ICdpdGVtQnV5Jywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIlRvdGFsIEJ1eVwiLCBrZXk6ICd0b3RhbEdlbmVyYWxlJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIlF0eSBPdXRcIiwga2V5OiAnaXRlbU91dCcsIHdpZHRoOiAyMCB9LFxyXG4gICAgXTtcclxuXHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFtdKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coY29sdW1uczEubWFwKGNvbCA9PiBjb2wuaGVhZGVyKSk7XHJcbiAgICBkYXRhMS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB3b3JrU2hlZXQuYWRkUm93KFtpdGVtLm51bWJlciwgaXRlbS5jdXN0b21lciwgaXRlbS5wcm9qZWN0TmFtZSwgaXRlbS5wdXJjaGFzZURhdGVdKVxyXG4gICAgfSk7XHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFtdKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coWydJdGVtJ10pO1xyXG4gICAgd29ya1NoZWV0LmFkZFJvdyhjb2x1bW5zNS5tYXAoY29sID0+IGNvbC5oZWFkZXIpKVxyXG4gICAgZGF0YTUuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgd29ya1NoZWV0LmFkZFJvdyhbaXRlbS5ubywgaXRlbS5pdGVtLCBpdGVtLml0ZW1EZXNjcmlwdGlvbiwgaXRlbS5pdGVtUXR5LCBpdGVtLml0ZW1Db3N0LCBpdGVtLnRvdGFsQ29zdCwgaXRlbS5pdGVtQnV5LCBpdGVtLnRvdGFsR2VuZXJhbGUsIGl0ZW0uaXRlbU91dF0pXHJcbiAgICB9KTtcclxuICAgIGRhdGE3LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHdvcmtTaGVldC5hZGRSb3coW2l0ZW0ubm8sIGl0ZW0ubm8xLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLmxhYm9yUXR5LCBpdGVtLmFkanVzdG1lbnROdW1iZXIsIGl0ZW0ucHVyY2hhc2VBbW91bnQxLCBpdGVtLnB1cmNoYXNlQW1vdW50Ml0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCB3b3JrYm9vay54bHN4LndyaXRlQnVmZmVyKCk7XHJcbiAgICBjb25zdCBib2xkID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgfSk7XHJcbiAgICBzYXZlQXMoYm9sZCwgYCR7J1BVUi0nICsgU3RyaW5nKHB1cmNoYXNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyBmb3IgJyArIGN1c3RvbWVyTmFtZX0ueGxzeGApXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQdXJjaGFzZSBJbmZvcm1hdGlvblxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKC0xKX0+XHJcbiAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaWRlQmFyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNpZGVCYXIoZmFsc2UpfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRhc2ggLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDIgfX0gPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbG9hZGluZ0RhdGEgPyA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnMTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9ID5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvdzEgPT09IDEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93ID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBwYWRkaW5nOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPkFsbCBQdXJjaGFzZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIxJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93KDIpfT5GaWx0ZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJ2NhbGMoMTAwdmggLSAxNzBweCknLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmIC5NdWlUYWJzLWluZGljYXRvcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwdXJjaGFzZT8ubWFwKChyb3csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtyb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZSArICcgfCAnICsgcm93LnB1cmNoYXNlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9QdXJjaGFzZXNWaWV3QWRtaW5BbGwvJHtyb3cuX2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93ID09PSAyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzEwcHgnIH19IHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3coMSl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzMwMzY4YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTI1cHgpJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmIC5NdWlUYWJzLWluZGljYXRvcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld0FycmF5Py5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lICsgJyB8ICcgKyByb3cucHVyY2hhc2VOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL1B1cmNoYXNlc1ZpZXdBZG1pbkFsbC8ke3Jvdy5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMzMDM2OGEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXIyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwdXJjaGFzZT8uZmlsdGVyKHJvdyA9PiByb3cuX2lkID09PSBpZCk/Lm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXIgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogJzIwcHgnLCB3aWR0aDogJzEwMCUnIH19PlBVUi17U3RyaW5nKHJvdy5wdXJjaGFzZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX0gfCB7cm93LnByb2plY3ROYW1lLnByb2plY3ROYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzSW5mbyAhPT0gdW5kZWZpbmVkICYmIHJvdy5zdGF0dXNJbmZvID09PSBcIlBlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyYXlcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzSW5mbyAhPT0gdW5kZWZpbmVkICYmIHJvdy5zdGF0dXNJbmZvID09PSBcIk9uLUdvaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0dXNJbmZvICE9PSB1bmRlZmluZWQgJiYgcm93LnN0YXR1c0luZm8gPT09IFwiU3RvcHBlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJlZFwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzSW5mbyAhPT0gdW5kZWZpbmVkICYmIHJvdy5zdGF0dXNJbmZvID09PSBcIlBlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk9yYW5nZVwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0dXNJbmZvICE9PSB1bmRlZmluZWQgJiYgcm93LnN0YXR1c0luZm8gPT09IFwiQ29tcGxldGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyZWVuXCIgOiBcImJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnN0YXR1c0luZm8gIT09IHVuZGVmaW5lZCA/IHJvdy5zdGF0dXNJbmZvIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyAnZGVtby1jdXN0b21pemVkLW1lbnUnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuID8gJ3RydWUnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVFbGV2YXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXs8S2V5Ym9hcmRBcnJvd0Rvd25JY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnZ3JheScsICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLWN1c3RvbWl6ZWQtbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudUxpc3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6ICdkZW1vLWN1c3RvbWl6ZWQtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtGYWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpc2FibGVkPXtyb3cuc3RhdHVzSW5mbyAhPT0gdW5kZWZpbmVkICYmIHJvdy5zdGF0dXNJbmZvID09PSBcIkNvbXBsZXRlZFwiICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9QdXJjaGFzZUZvcm1VcGRhdGUvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RWRpdDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVPcGVuUHJpbnR9IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxQcmludHNob3BJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QcmludDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtleHBvcnRUb0V4Y2VsfSBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGxpY2l0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FeHBvcnQgdG8gRXhjZWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93MSgyKX0+IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+Q29tbWVudHM8L3NwYW4+IDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cxKDMpfT4gPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT5IaXN0b3J5PC9zcGFuPjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuUmVmZXJlbmNlTmFtZSB8fCByb3cuUmVmZXJlbmNlTmFtZTIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93UmVmKDIpfT5SZWZlcmVuY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiA8c3BhbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU1lbnV9IHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+Tm8gUmVsYXRlZCBSZWZlcmVuY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93UmVmID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzEwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlJlZmVyZW5jZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludm9pY2UgPyBpbnZvaWNlLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17cm93Ll9pZH0+e3Jvdy5pbnZvaWNlTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0aW1hdGUgPyBlc3RpbWF0ZS5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3Jvdy5faWR9PiB8IHtyb3cuZXN0aW1hdGVOYW1lPy5yZXBsYWNlKCdFU1QtJywgJ1FVTy0nKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dSZWYgPT09IDIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgZm9udFNpemU6ICc4MCUnLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0aW1hdGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc3RpbWF0ZS5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IERhdGUge2RheWpzKHJvdy5lc3RpbWF0ZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT4gUXVvdGF0aW9uICMge3Jvdy5lc3RpbWF0ZU5hbWU/LnJlcGxhY2UoJ0VTVC0nLCAnUVVPLScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT4gQW1vdW50ICA8c3Bhbj4kPC9zcGFuPiB7cm93LnRvdGFsSW52b2ljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9Fc3RpbWF0ZVZpZXdBZG1pbkFsbC8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fT5WaWV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZvaWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52b2ljZS5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IERhdGUge2RheWpzKHJvdy5pbnZvaWNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiBJbnZvaWNlICMge3Jvdy5pbnZvaWNlTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IEFtb3VudCAgPHNwYW4+JDwvc3Bhbj4ge3Jvdy50b3RhbEludm9pY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiBQYWlkICA8c3Bhbj4kPC9zcGFuPiB7cm93LnRvdGFsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT4gQmFsYW5jZSAgPHNwYW4+JDwvc3Bhbj4ge3Jvdy5iYWxhbmNlRHVlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0ludm9pY2VWaWV3QWRtaW5BbGwvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX0+Vmlldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd1JlZigxKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc0NTBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZDogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGhpZGRlbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgcmVmPXtjb21wb25lbnRSZWZ9IGNsYXNzTmFtZT0naW52b2ljZWRldGFpbHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW52b2ljZVRlc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludEhlYWRlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiBcIlwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ludm9pY2Vocic+UHVyY2hhc2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFkZHJlc3Mgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxpbmVIZWlnaHQ6IDEuMzUsIHdpZHRoOiAnNjAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e3Jvdy5wcm9qZWN0TmFtZS5wcm9qZWN0TmFtZS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hZGRyZXNzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpcnN0VGFibGVcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZm9udFNpemU6ICc3MCUnLCBsZWZ0OiAnODNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPlB1ciAjPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnIH19PjxzcGFuID5QVVIte1N0cmluZyhyb3cucHVyY2hhc2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPkRhdGU8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScgfX0+PHNwYW4gPntkYXlqcyhyb3cucHVyY2hhc2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzZWNvbmRUYWJsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAnNzAlJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+TjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzMwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+QnJhbmQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5RdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5Vbml0IFByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5CdXk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPkktT3V0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHNlYXJjaDIgIT09ICcnID8gZmlsdGVyZWRQdXJjaGFzZS5maWx0ZXIoKEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZVRvQ2hlY2sgPSB0eXBlb2YgSXRlbS5pdGVtTmFtZSA9PT0gJ3N0cmluZycgPyBJdGVtLml0ZW1OYW1lIDogSXRlbS5pdGVtTmFtZT8uaXRlbU5hbWUgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lVG9DaGVjay50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDIudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEl0ZW0uaXRlbURlc2NyaXB0aW9uICYmIEl0ZW0uaXRlbURlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoMi50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEl0ZW0ubmV3RGVzY3JpcHRpb24gJiYgSXRlbS5uZXdEZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDIudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBmaWx0ZXJlZFB1cmNoYXNlKT8ubWFwKChJdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRVbml0ID0gaXRlbS5maW5kKChJdGVtMSkgPT4gSXRlbTEuX2lkID09PSBJdGVtLml0ZW1OYW1lPy5faWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17SXRlbS5pZFJvdyB8fCBpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PjxzcGFuPntpICsgMX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXs2fT57SXRlbS5uZXdEZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19ID57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMzAwcHgnLCB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGhpZGRlbj17KHR5cGVvZiBJdGVtLml0ZW1OYW1lID09PSAnc3RyaW5nJyA/IEl0ZW0uaXRlbU5hbWUgOiBJdGVtLml0ZW1OYW1lPy5pdGVtTmFtZSkgPT09ICdlbXB0eSd9Pnt0eXBlb2YgSXRlbS5pdGVtTmFtZSA9PT0gJ3N0cmluZycgPyBJdGVtLml0ZW1OYW1lLnRvVXBwZXJDYXNlKCkgOiAoSXRlbS5pdGVtTmFtZT8uaXRlbU5hbWU/LnRvVXBwZXJDYXNlKCkgfHwgJycpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57SXRlbS5pdGVtRGVzY3JpcHRpb24gPyBJdGVtLml0ZW1EZXNjcmlwdGlvbi50b1VwcGVyQ2FzZSgpIDogJyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPntyZWxhdGVkVW5pdCAhPT0gdW5kZWZpbmVkID8gcmVsYXRlZFVuaXQuaXRlbUJyYW5kLnRvVXBwZXJDYXNlKCkgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPntJdGVtLml0ZW1RdHl9IHtyZWxhdGVkVW5pdCAhPT0gdW5kZWZpbmVkID8gcmVsYXRlZFVuaXQudW5pdC50b1VwcGVyQ2FzZSgpIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj1cImxlZnRcIj57SXRlbS5pdGVtQ29zdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPiQ8L3NwYW4+PHNwYW4+e051bWJlcihJdGVtLnRvdGFsQ29zdCB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+e0l0ZW0uaXRlbUJ1eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPiQ8L3NwYW4+PHNwYW4+e051bWJlcihJdGVtLnRvdGFsR2VuZXJhbGUgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPntJdGVtLml0ZW1PdXR9IHtyZWxhdGVkVW5pdCAhPT0gdW5kZWZpbmVkID8gcmVsYXRlZFVuaXQudW5pdC50b1VwcGVyQ2FzZSgpIDogJyd9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+U3ViVG90YWwgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj1cImxlZnRcIj48c3Bhbj4kPC9zcGFuPjxzcGFuPntwdXJjaGFzZUFtb3VudDEudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPiQ8L3NwYW4+PHNwYW4+e3B1cmNoYXNlQW1vdW50Mi50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzIHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIGZvbnRTaXplOiAnNzAlJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbGluZUhlaWdodDogJzE0cHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYW5rOiBTT0ZJQkFOUVVFIFNBIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50aXRsZWQ6IEdMT0JBTCBHQVRFIFNBUkw8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhbmsgQWNjb3VudDogMDAwMjMyMzMzMzAyMTQyNDcwMjAwNzM8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvZGUgU3dpZnQ6IFNGQlhDREtJWFhYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5UZXJtcyAmIENvbmRpdGlvbnMgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiAgICAgRVNUSU1BVEVTIEFSRSBGT1IgTEFCT1IgQU5EIEFERElUSU9OQUwgTUFURVJJQUwgT05MWSwgTUFURVJJQUxTIFNPTEQgQVJFIE5FSVRIRVIgVEFLRU4gQkFDSyBPUiBFWENIQU5HRUQgV0UgV0lMTCBOT1QgQkUgUkVTUE9OU0lCTEUgRk9SIExPU1MgT1IgREFNQUdFIENBVVNFRCBCWSBGSVJFLCBUSEVGVCwgVEVTVElORywgREVGRUNURUQgUEFSRSBQQVJUUywgT1IgQU5ZIE9USEVSIENBVVNFIEJFWU9ORCBPVVIgQ09OVFJPTC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpblRvcDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGhpZGRlbj4uLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaGlkZGVuPi4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpbnRGb290ZXIgYnJhbmNoSWQ9e3R5cGVvZiByb3cgIT09IFwidW5kZWZpbmVkXCIgPyByb3c/LmJyYW5jaElkIDogdHlwZW9mIGRhdGEgIT09IFwidW5kZWZpbmVkXCIgPyBkYXRhPy5icmFuY2hJZCA6IFwiXCJ9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaW50SGVhZGVyIGJyYW5jaElkPXt0eXBlb2Ygcm93ICE9PSBcInVuZGVmaW5lZFwiID8gcm93Py5icmFuY2hJZCA6IHR5cGVvZiBkYXRhICE9PSBcInVuZGVmaW5lZFwiID8gZGF0YT8uYnJhbmNoSWQgOiBcIlwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz48cCBjbGFzc05hbWU9J2ludm9pY2Vocic+UHVyY2hhc2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luVG9wOiAnMjVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YWRkcmVzcyBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGluZUhlaWdodDogMS4zNSwgd2lkdGg6ICc2MCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcxOHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cucHJvamVjdE5hbWUucHJvamVjdE5hbWUudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IHJvdy5kZXNjcmlwdGlvbi50b1VwcGVyQ2FzZSgpIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlyc3RUYWJsZVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmb250U2l6ZTogJzgwJScsIGxlZnQ6ICc4M3B4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3BhbiA+UHVyICM8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnIH19PjxzcGFuID5QVVIte1N0cmluZyhyb3cucHVyY2hhc2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPkRhdGU8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnIH19PjxzcGFuID57ZGF5anMocm93LnB1cmNoYXNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICctNjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzkwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5OPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICczMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+QnJhbmQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPlF0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+VW5pdCBQcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPkJ1eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPkktT3V0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoc2VhcmNoMiAhPT0gJycgPyBmaWx0ZXJlZFB1cmNoYXNlLmZpbHRlcigoSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVUb0NoZWNrID0gdHlwZW9mIEl0ZW0uaXRlbU5hbWUgPT09ICdzdHJpbmcnID8gSXRlbS5pdGVtTmFtZSA6IEl0ZW0uaXRlbU5hbWU/Lml0ZW1OYW1lIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lVG9DaGVjay50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDIudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoSXRlbS5pdGVtRGVzY3JpcHRpb24gJiYgSXRlbS5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChJdGVtLm5ld0Rlc2NyaXB0aW9uICYmIEl0ZW0ubmV3RGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBmaWx0ZXJlZFB1cmNoYXNlKT8ubWFwKChJdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRlZFVuaXQgPSBpdGVtLmZpbmQoKEl0ZW0xKSA9PiBJdGVtMS5faWQgPT09IEl0ZW0uaXRlbU5hbWU/Ll9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17SXRlbS5pZFJvdyB8fCBpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT48c3Bhbj57aSArIDF9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXs2fT57SXRlbS5uZXdEZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19ID57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICczMDBweCcsIHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGhpZGRlbj17KHR5cGVvZiBJdGVtLml0ZW1OYW1lID09PSAnc3RyaW5nJyA/IEl0ZW0uaXRlbU5hbWUgOiBJdGVtLml0ZW1OYW1lPy5pdGVtTmFtZSkgPT09ICdlbXB0eSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgSXRlbS5pdGVtTmFtZSA9PT0gJ3N0cmluZycgPyBJdGVtLml0ZW1OYW1lLnRvVXBwZXJDYXNlKCkgOiAoSXRlbS5pdGVtTmFtZT8uaXRlbU5hbWU/LnRvVXBwZXJDYXNlKCkgfHwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntJdGVtLml0ZW1EZXNjcmlwdGlvbiA/IEl0ZW0uaXRlbURlc2NyaXB0aW9uLnRvVXBwZXJDYXNlKCkgOiAnJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPntyZWxhdGVkVW5pdCAhPT0gdW5kZWZpbmVkID8gcmVsYXRlZFVuaXQuaXRlbUJyYW5kLnRvVXBwZXJDYXNlKCkgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+e0l0ZW0uaXRlbVF0eX0ge3JlbGF0ZWRVbml0ICE9PSB1bmRlZmluZWQgPyByZWxhdGVkVW5pdC51bml0LnRvVXBwZXJDYXNlKCkgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+e0l0ZW0uaXRlbUNvc3R9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPiQ8L3NwYW4+PHNwYW4+e051bWJlcihJdGVtLnRvdGFsQ29zdCB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj1cImxlZnRcIj57SXRlbS5pdGVtQnV5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj1cImxlZnRcIj48c3Bhbj4kPC9zcGFuPjxzcGFuPntOdW1iZXIoSXRlbS50b3RhbEdlbmVyYWxlIHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPntJdGVtLml0ZW1PdXR9IHtyZWxhdGVkVW5pdCAhPT0gdW5kZWZpbmVkID8gcmVsYXRlZFVuaXQudW5pdC50b1VwcGVyQ2FzZSgpIDogJyd9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj1cImxlZnRcIj5TdWJUb3RhbCA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+PHNwYW4+JDwvc3Bhbj48c3Bhbj57cHVyY2hhc2VBbW91bnQxLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPiQ8L3NwYW4+PHNwYW4+e3B1cmNoYXNlQW1vdW50Mi50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcmludm9pY2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48RW1haWwgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db250YWN0QEdsb2JhbEdhdGUuU2FybDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc1cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxQaG9uZSAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPisyNDMgODI3IDcyMiAyMjI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48V2ViSWNvbiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnd3dy5HbG9iYWxHYXRlLnNhcmw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvdzEgPT09IDIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DT01NRU5UUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cxKDEpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdEVkaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nY29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNic+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMzU1cHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0NvbW1lbnRzMS5tYXAoKEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17SXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0l0ZW0uZGF0ZUNvbW1lbnQgPyBkYXlqcyhJdGVtLmRhdGVDb21tZW50KS5mb3JtYXQoJ0REL01NJykgOiAnJ30ge0l0ZW0uQ29tbWVudEluZm8ucGVyc29uICsgJzogJyArIEl0ZW0uQ29tbWVudEluZm8ucmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3cxID09PSAzID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ISVNUT1JZPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93MSgxKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzUxOHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZS5maWx0ZXIoKHJvdykgPT4gcm93Ll9pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtyb3cuX2lkfT57cm93LkNyZWF0ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cm93LkNyZWF0ZS5kYXRlQ29tbWVudH0ge3Jvdy5DcmVhdGUucGVyc29ufSB7cm93LkNyZWF0ZS5wdXJjaGFzZU51bWJlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24ubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntyb3cucGVyc29uICsgJyBvbiAnICsgZGF5anMocm93LmRhdGVOb3RpZmljYXRpb24pLmZvcm1hdCgnREQvTU1NTScpfToge3Jvdy5yZWFzb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIEZhaWxlZCB0byBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlc1ZpZXdBZG1pbkFsbFxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaGVhZGluZyAqL1xuLmludm9pY2VUZXN0IHtcbiAgbWFyZ2luOiAwIDAgM2VtO1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbmgxIHtcbiAgZm9udDogYm9sZCAxMDAlIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaW52b2ljZVRlc3QgYWRkcmVzcyB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIG1hcmdpbjogMCAwIDFlbSAxZW07XG59XG5cbmFkZHJlc3Mge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDFlbSAxZW07XG59XG5cbi5pbnZvaWNlVGVzdCBoMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItY29sb3I6ICM5OTk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxMCU7XG4gIGZvbnQ6IGJvbGQgMTAwJSBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmludm9pY2VUZXN0IGFkZHJlc3MgcCB7XG4gIG1hcmdpbjogMCAwIDAuMjVlbTtcbn1cblxuLmludm9pY2VUZXN0IHNwYW4sIC5pbnZvaWNlVGVzdCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pbnZvaWNlVGVzdCBzcGFuIHtcbiAgbWFyZ2luOiAwIDFlbSAxZW0gMDtcbiAgbWF4LWhlaWdodDogMjUlO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaW52b2ljZVRlc3QgaW1nIHtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgbWF4LXdpZHRoOiB2YXIoLS1oZWFkZXItbG9nby13aWR0aCwgMjQwcHgpO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW52b2ljZVRlc3Q6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi8qIGFydGljbGUgKi9cbmFydGljbGUsIGFydGljbGUgYWRkcmVzcywgdGFibGUge1xuICBtYXJnaW46IDAgMCAzZW07XG59XG5cbmFydGljbGUgaDEge1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmFydGljbGUgYWRkcmVzcyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDkwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuXG5hcnRpY2xlOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiB0YWJsZSAqL1xudGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi8qIHRhYmxlIGZpcnN0VGFibGUgKi9cbnRhYmxlLmZpcnN0VGFibGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG50YWJsZS5maXJzdFRhYmxlOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiB0YWJsZSBmaXJzdFRhYmxlICovXG50YWJsZS5maXJzdFRhYmxlIHRoIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxudGFibGUuZmlyc3RUYWJsZSB0ZCB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbmFzaWRlIGgxI25vdGVzIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG4gIG1hcmdpbjogMCAwIDFlbTtcbn1cblxuYXNpZGUgaDEjbm90ZXMge1xuICBib3JkZXItY29sb3I6ICM5OTk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxMCU7XG4gIGZvbnQ6IGJvbGQgMTAwJSBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0ludm9pY2VWaWV3L0FkbWluVmlldy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0EsWUFBQTtBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJRztFQUNDLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUU7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQW9CLDBCQUFBO0VBQTRCLHdCQUFBO0VBQTBCLDBCQUFBO0VBQzFFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUlOOztBQURFO0VBQ0Usa0JBQUE7QUFJSjs7QUFERTtFQUFzQyxjQUFBO0VBQWdCLFdBQUE7QUFNeEQ7O0FBTEU7RUFBcUIsbUJBQUE7RUFBcUIsZUFBQTtFQUFpQixjQUFBO0VBQWdCLGtCQUFBO0FBWTdFOztBQVhFO0VBQW1CLGdCQUFBO0VBQWtCLDBDQUFBO0VBQTRDLG1CQUFBO0VBQXFCLGdCQUFBO0FBa0J4Rzs7QUFmRTtFQUFxQixXQUFBO0VBQWEsV0FBQTtFQUFhLGNBQUE7QUFxQmpEOztBQW5CRSxZQUFBO0FBQ0E7RUFBa0MsZUFBQTtBQXVCcEM7O0FBdEJFO0VBQWEsbUJBQUE7RUFBcUIsa0JBQUE7QUEyQnBDOztBQTFCRTtFQUFrQixXQUFBO0VBQWEsY0FBQTtFQUFnQixXQUFBO0VBQWEsaUJBQUE7QUFpQzlEOztBQS9CRTtFQUFnQixXQUFBO0VBQWEsV0FBQTtFQUFhLGNBQUE7QUFxQzVDOztBQW5DRSxVQUFBO0FBRUE7RUFBUSxrQkFBQTtFQUFvQixXQUFBO0FBdUM5Qjs7QUF0Q0U7RUFBUSx5QkFBQTtBQTBDVjs7QUF6Q0UscUJBQUE7QUFFQTtFQUFtQixZQUFBO0VBQWMsVUFBQTtFQUFZLFdBQUE7QUE4Qy9DOztBQTdDRTtFQUF5QixXQUFBO0VBQWEsV0FBQTtFQUFhLGNBQUE7QUFtRHJEOztBQWpERSxxQkFBQTtBQUVBO0VBQXNCLFVBQUE7QUFvRHhCOztBQW5ERTtFQUFzQixVQUFBO0FBdUR4Qjs7QUFyREU7RUFBaUIsWUFBQTtFQUFjLHFCQUFBO0VBQXVCLGVBQUE7QUEyRHhEOztBQTFERTtFQUFpQixrQkFBQTtFQUFvQiwwQkFBQTtFQUE0Qix3QkFBQTtFQUEwQiwwQkFBQTtFQUN6RixxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFpRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLyogaGVhZGluZyAqL1xcclxcblxcclxcbi5pbnZvaWNlVGVzdCB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDNlbTtcXHJcXG4gICAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAgaDEge1xcclxcbiAgICBmb250OiBib2xkIDEwMCUgc2Fucy1zZXJpZjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNWVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbnZvaWNlVGVzdCBhZGRyZXNzIHtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDc1JTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMWVtIDFlbTtcXHJcXG4gIH1cXHJcXG4gIGFkZHJlc3Mge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIG1hcmdpbjogMCAwIDFlbSAxZW07XFxyXFxuICB9XFxyXFxuICAuaW52b2ljZVRlc3QgaDEge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICAgIGJvcmRlci1jb2xvcjogIzk5OTsgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7IGJvcmRlci1ib3R0b20td2lkdGg6IDEwJTsgZm9udDogYm9sZCAxMDAlIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNWVtO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gIC5pbnZvaWNlVGVzdCBhZGRyZXNzIHAge1xcclxcbiAgICBtYXJnaW46IDAgMCAwLjI1ZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbnZvaWNlVGVzdCBzcGFuLCAuaW52b2ljZVRlc3QgaW1nIHsgZGlzcGxheTogYmxvY2s7IGZsb2F0OiBsZWZ0OyB9XFxyXFxuICAuaW52b2ljZVRlc3Qgc3BhbiB7ICBtYXJnaW46IDAgMWVtIDFlbSAwOyBtYXgtaGVpZ2h0OiAyNSU7IG1heC13aWR0aDogOTAlOyBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXHJcXG4gIC5pbnZvaWNlVGVzdCBpbWcgeyBtYXgtaGVpZ2h0OiA4MHB4OyBtYXgtd2lkdGg6IHZhcigtLWhlYWRlci1sb2dvLXdpZHRoLCAyNDBweCk7IG9iamVjdC1maXQ6IGNvbnRhaW47IG1hcmdpbi10b3A6IDEwcHg7fVxcclxcblxcclxcbiAgXFxyXFxuICAuaW52b2ljZVRlc3Q6YWZ0ZXIgeyBjbGVhcjogYm90aDsgY29udGVudDogXFxcIlxcXCI7IGRpc3BsYXk6IHRhYmxlOyB9XFxyXFxuICBcXHJcXG4gIC8qIGFydGljbGUgKi9cXHJcXG4gIGFydGljbGUsIGFydGljbGUgYWRkcmVzcywgdGFibGUgeyBtYXJnaW46IDAgMCAzZW07IH1cXHJcXG4gIGFydGljbGUgaDEgeyBjbGlwOiByZWN0KDAgMCAwIDApOyBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXHJcXG4gIGFydGljbGUgYWRkcmVzcyB7IGZsb2F0OiBsZWZ0OyBmb250LXNpemU6IDkwJTsgZmxvYXQ6IGxlZnQ7IGxpbmUtaGVpZ2h0OiAxMHB4OyB9XFxyXFxuICBcXHJcXG4gIGFydGljbGU6YWZ0ZXIgeyBjbGVhcjogYm90aDsgY29udGVudDogXFxcIlxcXCI7IGRpc3BsYXk6IHRhYmxlOyB9XFxyXFxuICBcXHJcXG4gIC8qIHRhYmxlICovXFxyXFxuICBcXHJcXG4gIHRhYmxlIHsgdGFibGUtbGF5b3V0OiBhdXRvOyB3aWR0aDogMTAwJTsgfVxcclxcbiAgdGFibGUgeyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO31cXHJcXG4gIC8qIHRhYmxlIGZpcnN0VGFibGUgKi9cXHJcXG4gIFxcclxcbiAgdGFibGUuZmlyc3RUYWJsZSB7IGZsb2F0OiByaWdodDsgd2lkdGg6IDUwJTsgaGVpZ2h0OiA1MCU7fVxcclxcbiAgdGFibGUuZmlyc3RUYWJsZTphZnRlciB7IGNsZWFyOiBib3RoOyBjb250ZW50OiBcXFwiXFxcIjsgZGlzcGxheTogdGFibGU7IH1cXHJcXG4gIFxcclxcbiAgLyogdGFibGUgZmlyc3RUYWJsZSAqL1xcclxcbiAgXFxyXFxuICB0YWJsZS5maXJzdFRhYmxlIHRoIHsgd2lkdGg6IDQwJTsgfVxcclxcbiAgdGFibGUuZmlyc3RUYWJsZSB0ZCB7IHdpZHRoOiA2MCU7IH1cXHJcXG5cXHJcXG4gIGFzaWRlIGgxI25vdGVzIHsgYm9yZGVyOiBub25lOyBib3JkZXItd2lkdGg6IDAgMCAxcHg7IG1hcmdpbjogMCAwIDFlbTsgfVxcclxcbiAgYXNpZGUgaDEjbm90ZXMgeyBib3JkZXItY29sb3I6ICM5OTk7IGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkOyBib3JkZXItYm90dG9tLXdpZHRoOiAxMCU7IGZvbnQ6IGJvbGQgMTAwJSBzYW5zLXNlcmlmO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41ZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BZG1pblZpZXcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQWRtaW5WaWV3LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJQcmludEhlYWRlciIsIlByaW50Rm9vdGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlNpZGViYXJEYXNoIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiQ29sbGFwc2UiLCJNZW51SXRlbSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZVJvdyIsIlRhYmxlSGVhZCIsIlBhcGVyIiwiVGFibGVDb250YWluZXIiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJUeXBvZ3JhcGh5IiwiQXV0b2NvbXBsZXRlIiwic3R5bGVkIiwiTW9kYWwiLCJCYWNrZHJvcCIsIkZhZGUiLCJCb3giLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJDaGVja2JveCIsIkxpbmVhclByb2dyZXNzIiwiU3RlcHBlciIsIlN0ZXAiLCJTdGVwTGFiZWwiLCJCdXR0b24iLCJBY2NvcmRpb24iLCJBY2NvcmRpb25TdW1tYXJ5IiwiQWNjb3JkaW9uRGV0YWlscyIsIlRhYnMiLCJUYWIiLCJNZW51IiwiRGl2aWRlciIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkxpbmsiLCJOYXZMaW5rIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJFTkRQT0lOVF9VUkwiLCJJbWFnZSIsIkVkaXRJY29uIiwiSW9zU2hhcmVJY29uIiwiTG9jYWxQcmludHNob3BJY29uIiwiQXR0YWNoRmlsZUljb24iLCJTZW5kSWNvbiIsImRheWpzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsIlJlYWN0VG9QcmludCIsInVzZVJlYWN0VG9QcmludCIsIkxvYWRlciIsIkNsb3NlIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkFycm93QmFjayIsIkVtYWlsT3V0bGluZWQiLCJQaG9uZSIsIldlYkljb24iLCJFbWFpbCIsIkVtYWlsSWNvbiIsIlBob25lSWNvbiIsIktleWJvYXJkQXJyb3dEb3duSWNvbiIsIk1lc3NhZ2VBZG1pblZpZXciLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsIkV4Y2VsSlMiLCJzYXZlQXMiLCJFeHBsaWNpdCIsIkVkaXRUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJQcmludFRvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIlZpZXdUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjciLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjgiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJQdXJjaGFzZXNWaWV3QWRtaW5BbGwiLCJfcHVyY2hhc2UkZmlsdGVyIiwiX3VzZVBhcmFtcyIsImlkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImdyYW50QWNjZXNzIiwic2V0R3JhbnRBY2Nlc3MiLCJmZXRjaE51bWJlciIsIl9yZWYwIiwiX3JlcyRkYXRhIiwiZmlsdGVyIiwicm93IiwidXNlcklEIiwibWFwIiwibW9kdWxlcyIsIlB1cmNoYXNlSW5mb1UiLCJtb2R1bGVOYW1lIiwiYWNjZXNzIiwiZWRpdE0iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInB1cmNoYXNlIiwic2V0UHVyY2hhc2UiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInB1cmNoYXNlMiIsInNldFB1cmNoYXNlMiIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwiaXRlbSIsIlNldEl0ZW1zIiwiYXBpVXJsIiwiZmV0Y2hEYXRhIiwiX3JlZjEiLCJyZXNJdGVtIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwiZXN0aW1hdGUiLCJzZXRFc3RpbWF0ZSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJpbnZvaWNlIiwic2V0SW52b2ljZSIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJjdXN0b21lck5hbWUiLCJzZXRDdXN0b21lck5hbWUiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwicHVyY2hhc2VOdW1iZXIiLCJzZXRQdXJjaGFzZU51bWJlciIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJpdGVtcyIsInNldEl0ZW1zIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsInB1cmNoYXNlQW1vdW50MSIsInNldFB1cmNoYXNlQW1vdW50MSIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJwdXJjaGFzZUFtb3VudDIiLCJzZXRQdXJjaGFzZUFtb3VudDIiLCJmZXRjaERhdGFSZWxhdGVkIiwiX3JlZjEwIiwiX3Jlc0VzdGltYXRlJGRhdGEiLCJfcmVzSW52b2ljZSRkYXRhIiwicmVzRXN0aW1hdGUiLCJmaWx0ZXJlZEVzdGltYXRlIiwiUmVmZXJlbmNlTmFtZSIsInJlc0ludm9pY2UiLCJmaWx0ZXJlZEludm9pY2UiLCJSZWZlcmVuY2VOYW1lMiIsImN1cnJlbnRQdXJjaGFzZSIsInJlcGxhY2UiLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJCb29sZWFuIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZU1lbnUiLCJjb21wb25lbnRSZWYiLCJoYW5kbGVQcmludCIsImNvbnRlbnQiLCJjdXJyZW50IiwiZG9jdW1lbnRUaXRsZSIsIlN0cmluZyIsInBhZFN0YXJ0Iiwib25CZWZvcmVHZXRDb250ZW50IiwiUEFHRV9IRUlHSFQiLCJwcmludEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJudW1iZXJPZlBhZ2UiLCJNYXRoIiwiY2VpbCIsIl9wcmludEVsZW1lbnQkZ2V0RWxlbSIsIl9wcmludEVsZW1lbnQkZ2V0RWxlbTIiLCJoZWlnaHRXaXRoU2luZ2xlSGVhZGVyIiwicmVxdWlyZWRIZWlnaHQiLCJoZWFkZXJIZWlnaHQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZvb3RlckhlaWdodCIsInJlbW92ZSIsIm9uQWZ0ZXJQcmludCIsImhhbmRsZU9wZW5QcmludCIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJzaG93Iiwic2V0U2hvdyIsImhhbmRsZVNob3ciLCJlIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsInNob3cxIiwic2V0U2hvdzEiLCJoYW5kbGVTaG93MSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwiQ29tbWVudHMxIiwic2V0Q29tbWVudHMiLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwibm90aWZpY2F0aW9uIiwic2V0Tm90aWZpY2F0aW9uIiwiZmV0Y2hDb21tZW50IiwiX3JlZjExIiwiX3JlcyRkYXRhMiIsIl9yZXNOb3RpZmljYXRpb24kZGF0YSIsInJlc3AiLCJDb21tZW50SW5mbyIsImlkSW5mbyIsInJlc05vdGlmaWNhdGlvbiIsInBlcnNvbiIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xvc2VFcnJvciIsImRhdGVDb21tZW50IiwiRGF0ZSIsIm5vdyIsImhhbmRsZVN1Ym1pdEVkaXQiLCJfcmVmMTIiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJuZXdEYXRhIiwiX3giLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwic2hvd1JlZiIsInNldFNob3dSZWYiLCJoYW5kbGVTaG93UmVmIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsInZhbHVlIiwic2V0VmFsdWUiLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0IiwidmFsdWUyIiwic2V0VmFsdWUyIiwic2VsZWN0ZWRJbmRleCIsImZpbmRJbmRleCIsIl9pZCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlIiwiaGFuZGxlQ2hhbmdlMiIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJoYW5kbGVTZWFyY2giLCJ0YXJnZXQiLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4Iiwic2VhcmNoMiIsInNldFNlYXJjaDIiLCJoYW5kbGVTZWFyY2gyIiwibmV3QXJyYXkiLCJfcm93JGN1c3RvbWVyTmFtZSIsIl9yb3ckcHJvamVjdE5hbWUiLCJwdXJjaGFzZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGVzY3JpcHRpb24iLCJwcm9qZWN0TmFtZSIsInNvbWUiLCJJdGVtIiwiX0l0ZW0kaXRlbU5hbWUiLCJuYW1lVG9DaGVjayIsIml0ZW1OYW1lIiwiaXRlbURlc2NyaXB0aW9uIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsImZpbHRlcmVkUHVyY2hhc2UiLCJzZXRGaWx0ZXJlZFB1cmNoYXNlIiwiZmVjdGhJdGVtUHVyY2hhc2UiLCJfcmVmMTMiLCJuZXdBcnJheTIiLCJfSXRlbSRpdGVtTmFtZTIiLCJuZXdEZXNjcmlwdGlvbiIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJkYXRhMSIsIm51bWJlciIsImN1c3RvbWVyIiwicHVyY2hhc2VEYXRlIiwiZm9ybWF0IiwiZGF0YTUiLCJpIiwiX0l0ZW0kaXRlbU5hbWUzIiwibm8iLCJpdGVtUXR5IiwiaXRlbUNvc3QiLCJ0b3RhbENvc3QiLCJpdGVtQnV5IiwidG90YWxHZW5lcmFsZSIsIml0ZW1PdXQiLCJkYXRhNyIsIm5vMSIsImxhYm9yUXR5IiwiYWRqdXN0bWVudE51bWJlciIsImV4cG9ydFRvRXhjZWwiLCJfcmVmMTQiLCJ3b3JrYm9vayIsIldvcmtib29rIiwid29ya1NoZWV0IiwiYWRkV29ya3NoZWV0IiwiY29sdW1uczEiLCJoZWFkZXIiLCJrZXkiLCJjb2x1bW5zNSIsImFkZFJvdyIsImNvbCIsImZvckVhY2giLCJidWZmZXIiLCJ4bHN4Iiwid3JpdGVCdWZmZXIiLCJib2xkIiwiQmxvYiIsInR5cGUiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJuYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10IiwiY29udGFpbmVyIiwieHMiLCJwYWRkaW5nIiwib3ZlcmZsb3dZIiwib25DaGFuZ2UiLCJvcmllbnRhdGlvbiIsImluZGV4IiwibGFiZWwiLCJ0byIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwicGxhY2VtZW50IiwiZmxvYXQiLCJiYWNrZ3JvdW5kIiwiX3JlZjE1IiwiX2RhdGEiLCJfZGF0YTIiLCJfcmVmMTYiLCJmb250V2VpZ2h0Iiwic3RhdHVzSW5mbyIsInVuZGVmaW5lZCIsImRpc2FibGVFbGV2YXRpb24iLCJlbmRJY29uIiwiYm9yZGVyIiwiTWVudUxpc3RQcm9wcyIsIm9uQ2xvc2UiLCJUcmFuc2l0aW9uQ29tcG9uZW50IiwiZGlzYWJsZWQiLCJnYXAiLCJpbnZvaWNlTmFtZSIsIl9yb3ckZXN0aW1hdGVOYW1lIiwiZXN0aW1hdGVOYW1lIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiX3JvdyRlc3RpbWF0ZU5hbWUyIiwidGV4dEFsaWduIiwiZXN0aW1hdGVEYXRlIiwidG90YWxJbnZvaWNlIiwiaW52b2ljZURhdGUiLCJ0b3RhbCIsImJhbGFuY2VEdWUiLCJoaWRkZW4iLCJyZWYiLCJib3JkZXJCb3R0b20iLCJicmFuY2hJZCIsImxpbmVIZWlnaHQiLCJ0b1VwcGVyQ2FzZSIsImFsaWduIiwiX0l0ZW0kaXRlbU5hbWU0IiwiX0l0ZW0kaXRlbU5hbWU2IiwiX0l0ZW0kaXRlbU5hbWU3IiwicmVsYXRlZFVuaXQiLCJmaW5kIiwiSXRlbTEiLCJfSXRlbSRpdGVtTmFtZTUiLCJpZFJvdyIsIkZyYWdtZW50IiwiY29sU3BhbiIsIml0ZW1CcmFuZCIsInVuaXQiLCJ0b0ZpeGVkIiwiX0l0ZW0kaXRlbU5hbWU4IiwiX0l0ZW0kaXRlbU5hbWUwIiwiX0l0ZW0kaXRlbU5hbWUxIiwiX0l0ZW0kaXRlbU5hbWU5Iiwib25TdWJtaXQiLCJyZXF1aXJlZCIsIm11bHRpbGluZSIsInJvd3MiLCJDcmVhdGUiLCJkYXRlTm90aWZpY2F0aW9uIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==