"use strict";
exports.id = "src_js_AdminView1_PageView_PurchaseOrder_PurchaseOrderInfoView_js";
exports.ids = ["src_js_AdminView1_PageView_PurchaseOrder_PurchaseOrderInfoView_js"];
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

/***/ "./src/js/AdminView1/PageView/PurchaseOrder/PurchaseOrderInfoView.js"
/*!***************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/PurchaseOrder/PurchaseOrderInfoView.js ***!
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
/* harmony import */ var _component_SideMaintenance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/SideMaintenance */ "./src/js/component/SideMaintenance.js");
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../img/images.png */ "./src/js/img/images.png");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material/LocalPrintshop */ "./node_modules/@mui/icons-material/LocalPrintshop.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/Phone */ "./node_modules/@mui/icons-material/Phone.js");
/* harmony import */ var _mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/Web */ "./node_modules/@mui/icons-material/Web.js");
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/Email */ "./node_modules/@mui/icons-material/Email.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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

















































var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var PrintTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_26__["default"], {
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
function PurchaseOrderInfoView() {
  var _purchase$filter;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_33__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_33__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_39__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_39__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__.setUser)({
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__.logOut)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    purchase = _useState2[0],
    setPurchase = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loadingData = _useState4[0],
    setLoadingData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    item = _useState6[0],
    SetItems = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/purchaseOrder"));
          setPurchase(res.data.data);
          var resItem = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/item"));
          SetItems(resItem.data.data);
          setLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchData() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    purchaseNumber = _useState8[0],
    setPurchaseNumber = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    filteredPurchase = _useState0[0],
    setFilteredPurchase = _useState0[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchDataRelated = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-purchaseOrder/").concat(id));
          setPurchaseNumber(Number(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.outNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.outNumber) || 0));
          setFilteredPurchase(res.data.data.itemsQtyArray);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchDataRelated() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchDataRelated();
  }, [id]);
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    anchorEl = _React$useState4[0],
    setAnchorEl = _React$useState4[1];
  var open = Boolean(anchorEl);
  var handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  var handleCloseMenu = () => {
    setAnchorEl(null);
  };
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var componentRef2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_42__.useReactToPrint)({
    content: () => componentRef.current,
    documentTitle: 'PO-' + String(purchaseNumber).padStart(6, '0'),
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
  var handlePrint2 = (0,react_to_print__WEBPACK_IMPORTED_MODULE_42__.useReactToPrint)({
    content: () => componentRef2.current,
    documentTitle: 'PO-' + String(purchaseNumber).padStart(6, '0'),
    onBeforeGetContent: () => {
      var PAGE_HEIGHT = 1045;
      var printElement = componentRef2.current;
      if (printElement) {
        printElement.classList.add("temp-class-for-height");
        var height = printElement.clientHeight;
        var numberOfPage = Math.ceil(height / PAGE_HEIGHT);
        if (numberOfPage > 1) {
          var _printElement$getElem3, _printElement$getElem4;
          var heightWithSingleHeader = numberOfPage * PAGE_HEIGHT;
          var requiredHeight = heightWithSingleHeader;
          var headerHeight = (_printElement$getElem3 = printElement.getElementsByTagName("thead")) === null || _printElement$getElem3 === void 0 || (_printElement$getElem3 = _printElement$getElem3[0]) === null || _printElement$getElem3 === void 0 ? void 0 : _printElement$getElem3.clientHeight;
          var footerHeight = (_printElement$getElem4 = printElement.getElementsByTagName("tfoot")) === null || _printElement$getElem4 === void 0 || (_printElement$getElem4 = _printElement$getElem4[0]) === null || _printElement$getElem4 === void 0 ? void 0 : _printElement$getElem4.clientHeight;
          requiredHeight -= (numberOfPage - 1) * (headerHeight + footerHeight);
          printElement.style.height = "".concat(requiredHeight, "px");
        }
        printElement.classList.remove("temp-class-for-height");
      }
    },
    onAfterPrint: () => {
      var printElement = componentRef2.current;
      if (printElement) {
        printElement.style.height = "auto";
      }
    }
  });
  var handleOpenPrint = () => {
    handlePrint();
    setAnchorEl(null);
  };
  var handleOpenPrint2 = () => {
    handlePrint2();
    setAnchorEl(null);
  };
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState10 = _slicedToArray(_useState1, 2),
    show = _useState10[0],
    setShow = _useState10[1];
  var handleShow = e => {
    setShow(e);
  };
  {/** Comments starts */}
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState12 = _slicedToArray(_useState11, 2),
    show1 = _useState12[0],
    setShow1 = _useState12[1];
  var handleShow1 = e => {
    setShow1(e);
    setAnchorEl(null);
  };
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    reason = _useState14[0],
    setReason = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    Comments1 = _useState16[0],
    setComments = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    notification = _useState18[0],
    setNotification = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchComment = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var _res$data3, _resNotification$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/comment"));
          var resp = (_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.filter(row => row.CommentInfo.idInfo === id);
          setComments(resp);
          var resNotification = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/notification"));
          setNotification((_resNotification$data = resNotification.data) === null || _resNotification$data === void 0 || (_resNotification$data = _resNotification$data.data) === null || _resNotification$data === void 0 ? void 0 : _resNotification$data.filter(row => row.idInfo === id));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchComment() {
        return _ref10.apply(this, arguments);
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
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    loading = _useState20[0],
    setLoading = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    loadingOpenModal = _useState22[0],
    setLoadingOpenModal = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    ErrorOpenModal = _useState24[0],
    setErrorOpenModal = _useState24[1];
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
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_38___default()(Date.now());
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo,
        dateComment
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/create-comment/"), data);
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
      return _ref11.apply(this, arguments);
    };
  }();
  {/** Comments end */}
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState26 = _slicedToArray(_useState25, 2),
    showRef = _useState26[0],
    setShowRef = _useState26[1];
  var handleShowRef = e => {
    setShowRef(e);
    setAnchorEl(null);
  };
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    value = _useState28[0],
    setValue = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    value2 = _useState30[0],
    setValue2 = _useState30[1];
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
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState32 = _slicedToArray(_useState31, 2),
    search = _useState32[0],
    setSearch = _useState32[1];
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
  };
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState34 = _slicedToArray(_useState33, 2),
    search2 = _useState34[0],
    setSearch2 = _useState34[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray = search !== '' ? purchase.filter(row => row.description && row.description.toLowerCase().includes(search.toLowerCase()) || row.reason.toLowerCase().includes(search.toLowerCase()) || row.reference && row.reference.referenceName.toLowerCase().includes(search.toLowerCase()) || row.itemsQtyArray && row.itemsQtyArray.some(Item => Item.itemName && Item.itemName.itemName.toLowerCase().includes(search.toLowerCase())) || row.itemsQtyArray && row.itemsQtyArray.some(Item => Item.itemDescription && Item.itemDescription.toLowerCase().includes(search.toLowerCase()))) : purchase;
  var newArray2 = search2 !== '' ? filteredPurchase.filter(Item => Item.itemName && Item.itemName.itemName.toLowerCase().includes(search2.toLowerCase()) || Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) || Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase())) : filteredPurchase;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_29__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Purchase Order"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: () => navigate(-1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_45__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_50__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_41__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_30__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_27__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_SideMaintenance__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_28__["default"], {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
    label: 'PO-' + String(row.outNumber).padStart(6, '0'),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Link,
    to: "/PurchaseOrderInfoView/".concat(row._id),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
    label: 'PO-' + String(row.outNumber).padStart(6, '0'),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Link,
    to: "/PurchaseOrderInfoView/".concat(row._id),
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
    var _data, _data2, _data3;
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
    }, "PO-", String(row.outNumber).padStart(6, '0'), " ", row.IpRelated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, " Reference: IP-", String(row.IpRelated.number).padStart(6, '0')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      "aria-controls": open ? 'demo-customized-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open ? 'true' : undefined,
      variant: "contained",
      disableElevation: true,
      onClick: handleClick,
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_49__["default"], null),
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.NavLink, {
      to: "/PurchaseUpdateOrder/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_36__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onClick: handleOpenPrint,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_37__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Print Without All")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onClick: handleOpenPrint2,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_37__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Print With All")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
    }, "History")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, row.Converted && row.Converted === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Converted") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.NavLink, {
      to: "/ConvertPoToIP/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Convert to Item Purchase"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        height: '550px',
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
      className: "invoicehr",
      style: {
        fontSize: '14px'
      }
    }, "Purchase Order"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '13px'
      }
    }, "For"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '13px'
      }
    }, row.reference !== undefined && row.reference !== null ? row.reference.referenceName + ' ' + row.description : row.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '70%',
        left: '83px',
        marginBottom: '10px',
        pageBreakInside: 'auto'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Order #")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "PO-", String(row.outNumber).padStart(6, '0')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.itemOutDate).format('DD/MM/YYYY')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Manufacturer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.manufacturer))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Reference")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.manufacturerNumber))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Subject")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.reason)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
      style: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '70%',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '150px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '400px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Qty Need"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Qty Buy"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, newArray2 === null || newArray2 === void 0 ? void 0 : newArray2.map((Item, i) => {
      var relatedUnit = item.find(Item1 => Item1._id === Item.itemName._id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: Item.idRow
      }, Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        colSpan: 6,
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        },
        align: "center"
      }, Item.newDescription)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center',
          width: '30px'
        }
      }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          width: '200px',
          borderLeft: '1px solid #DDD'
        }
      }, Item.itemName.itemName !== 'empty' ? Item.itemName.itemName : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '250px',
          borderLeft: '1px solid #DDD'
        }
      }, Item.itemDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '30px',
          borderLeft: '1px solid #DDD'
        }
      }, Item.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '30px',
          borderLeft: '1px solid #DDD'
        }
      }, Item.qtyBuy)));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
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
      hidden: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      ref: componentRef2,
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
      className: "invoicehr",
      style: {
        fontSize: '14px'
      }
    }, "Purchase Order"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '13px'
      }
    }, "For"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '13px'
      }
    }, row.reference !== undefined && row.reference !== null ? row.reference.referenceName + ' ' + row.description : row.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '70%',
        left: '83px',
        marginBottom: '10px',
        pageBreakInside: 'auto'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Order #")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "PO-", String(row.outNumber).padStart(6, '0')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.itemOutDate).format('DD/MM/YYYY')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Manufacturer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.manufacturer))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Reference")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.manufacturerNumber))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Subject")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.reason)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
      style: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '70%',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '150px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Qty Need"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Qty Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Price($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '150px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Amount Paid(FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Amount Paid($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '150px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total($)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, newArray2 === null || newArray2 === void 0 ? void 0 : newArray2.map((Item, i) => {
      var relatedUnit = item.find(Item1 => Item1._id === Item.itemName._id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: Item.idRow
      }, Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        colSpan: 6,
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        },
        align: "center"
      }, Item.newDescription)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center',
          width: '30px'
        }
      }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          width: '200px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        hidden: Item.itemName ? Item.itemName.itemName === 'empty' : ''
      }, Item.itemName.itemName ? Item.itemName.itemName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemDescription ? Item.itemDescription.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '30px',
          borderLeft: '1px solid #DDD'
        }
      }, Item.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '30px',
          borderLeft: '1px solid #DDD'
        }
      }, Item.qtyBuy, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '80px',
          borderLeft: '1px solid #DDD'
        }
      }, Item.itemRate !== undefined ? parseFloat(Item.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, "FC", Item.totalAmountFC !== undefined ? parseFloat(Item.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, Item.Taux !== undefined ? parseFloat(Item.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, "$", parseFloat(Item.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, Item.fcConvertToUsdTotal !== undefined ? parseFloat(Item.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 5,
      style: {
        border: '1px solid #DDD'
      }
    }, "Total "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD',
        textAlign: 'right'
      }
    }, "FC", row.totalFC !== undefined ? parseFloat(row.totalFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD',
        textAlign: 'center'
      }
    }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD',
        textAlign: 'right'
      }
    }, "$", row.total !== undefined ? row.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD',
        textAlign: 'right'
      }
    }, "$", row.totalUSD !== undefined ? parseFloat(row.totalUSD).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        position: 'relative',
        marginTop: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintFooter__WEBPACK_IMPORTED_MODULE_1__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.branchId : ""
    }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        padding: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        padding: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.branchId : ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "invoicehr"
    }, "Purchase Order"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
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
        fontSize: '13px'
      }
    }, "For"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '13px'
      }
    }, row.reference !== undefined && row.reference !== null ? row.reference.referenceName + ' ' + row.description : row.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '70%',
        left: '83px',
        marginBottom: '10px',
        pageBreakInside: 'auto'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Order #")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "PO-", String(row.outNumber).padStart(6, '0')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.itemOutDate).format('DD/MM/YYYY')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Manufacturer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.manufacturer))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Reference")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.manufacturerNumber))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Subject")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.reason)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
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
        fontSize: '90%',
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
    }, "Qty Need"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Qty Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Price($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Amount Paid(FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Amount Paid($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total($)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, newArray2 === null || newArray2 === void 0 ? void 0 : newArray2.map((Item, i) => {
      var relatedUnit = item.find(Item1 => Item1._id === Item.itemName._id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: Item.idRow
      }, Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        colSpan: 8,
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        },
        align: "center"
      }, Item.newDescription)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center',
          width: '30px'
        }
      }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          width: '200px',
          borderLeft: '1px solid #DDD'
        }
      }, "                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        hidden: Item.itemName ? Item.itemName.itemName === 'empty' : ''
      }, Item.itemName.itemName ? Item.itemName.itemName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemDescription ? Item.itemDescription.toUpperCase() : '', " ( ", relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : '', " )")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '30px',
          borderLeft: '1px solid #DDD'
        }
      }, Item.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '30px',
          borderLeft: '1px solid #DDD'
        }
      }, Item.qtyBuy, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '80px',
          borderLeft: '1px solid #DDD'
        }
      }, Item.itemRate !== undefined ? parseFloat(Item.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, "FC", Item.totalAmountFC !== undefined ? parseFloat(Item.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, Item.Taux !== undefined ? parseFloat(Item.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, "$", parseFloat(Item.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'right',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, Item.fcConvertToUsdTotal !== undefined ? parseFloat(Item.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 5,
      style: {
        border: '1px solid #DDD'
      }
    }, "Total "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD',
        textAlign: 'right'
      }
    }, "FC", row.totalFC !== undefined ? parseFloat(row.totalFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD',
        textAlign: 'center'
      }
    }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD',
        textAlign: 'right'
      }
    }, "$", row.total !== undefined ? row.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD',
        textAlign: 'right'
      }
    }, "$", row.totalUSD !== undefined ? parseFloat(row.totalUSD).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "footerinvoice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_48__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Contact@GlobalGate.Sarl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_46__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "+243 827 722 222")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_47__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "www.GlobalGate.sarl")))))));
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
  }, Item.dateComment ? dayjs__WEBPACK_IMPORTED_MODULE_38___default()(Item.dateComment).format('DD/MM') : '', " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "", show1 === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.person + ' on ' + dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.dateNotification).format('DD/MMMM'), ": ", row.reason))))))) : ""))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchaseOrderInfoView);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUHVyY2hhc2VPcmRlcl9QdXJjaGFzZU9yZGVySW5mb1ZpZXdfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLGdCOzs7Ozs7Ozs7O0FDWlk7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLHdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsQ0FBeUQ7QUFDQTtBQUNDO0FBQ087QUFDMUM7QUFDRTtBQUNZO0FBQ2U7QUFDc0I7QUFDUjtBQUN5VjtBQUMzVjtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDUTtBQUNBO0FBQ2M7QUFDSTtBQUN6QztBQUNnRDtBQUN2QjtBQUNQO0FBQ0s7QUFDUTtBQUNZO0FBQ1I7QUFDWjtBQUN0QjtBQUM2QjtBQUMrQjtBQUN0QztBQUNlO0FBQ2hCO0FBQ0Q7QUFDZ0I7QUFDVjtBQUNFO0FBQ0Y7QUFDTjtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ3dCO0FBQ3BCO0FBQ1E7QUFHOUQsSUFBTThGLFdBQVcsR0FBR25FLDBEQUFNLENBQUNvRSxJQUFBO0VBQUEs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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNEhBQTRILEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxZQUFZLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksWUFBWSxZQUFZLFFBQVEsS0FBSyxXQUFXLFVBQVUsVUFBVSxRQUFRLFdBQVcsS0FBSyxXQUFXLFFBQVEsTUFBTSxXQUFXLFlBQVksUUFBUSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsUUFBUSxNQUFNLFdBQVcsVUFBVSxVQUFVLFFBQVEsV0FBVyxLQUFLLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxPQUFPLFlBQVksS0FBSyxXQUFXLFVBQVUsVUFBVSxRQUFRLE1BQU0sV0FBVyxVQUFVLFVBQVUsUUFBUSxZQUFZLEtBQUssV0FBVyxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxXQUFXLFdBQVcsUUFBUSxNQUFNLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLFdBQVcsaUVBQWlFLHdCQUF3QixxQkFBcUIsT0FBTyxpQkFBaUIsbUNBQW1DLDhCQUE4QiwyQkFBMkIsa0NBQWtDLE9BQU8sa0NBQWtDLHFCQUFxQix1QkFBdUIsMkJBQTJCLDBCQUEwQiw0QkFBNEIsT0FBTyxlQUFlLHFCQUFxQix1QkFBdUIsMkJBQTJCLDRCQUE0QixPQUFPLHVCQUF1QixrQ0FBa0MsOEJBQThCLDRCQUE0QiwwQkFBMEIsMkJBQTJCLGdDQUFnQyw2QkFBNkIsb0NBQW9DLFNBQVMsb0NBQW9DLDJCQUEyQixPQUFPLGtEQUFrRCxnQkFBZ0IsY0FBYywyQkFBMkIscUJBQXFCLGlCQUFpQixnQkFBZ0IscUJBQXFCLHlCQUF5QixrQkFBa0IsNENBQTRDLHFCQUFxQixrQkFBa0IscUNBQXFDLGFBQWEsZUFBZSxpQkFBaUIsaUVBQWlFLGtCQUFrQixtQkFBbUIscUJBQXFCLHFCQUFxQix3QkFBd0IsYUFBYSxnQkFBZ0IsYUFBYSxvQkFBb0IsNEJBQTRCLGFBQWEsZUFBZSxpQkFBaUIsMkNBQTJDLG9CQUFvQixjQUFjLGNBQWMsMkJBQTJCLDJEQUEyRCxjQUFjLFlBQVksYUFBYSwrQkFBK0IsYUFBYSxlQUFlLGlCQUFpQixvRUFBb0UsYUFBYSw0QkFBNEIsYUFBYSwyQkFBMkIsY0FBYyx1QkFBdUIsa0JBQWtCLHVCQUF1QixvQkFBb0IsNEJBQTRCLDBCQUEwQiwyQkFBMkIsOEJBQThCLDJCQUEyQixrQ0FBa0MsT0FBTyxtQkFBbUI7QUFDdDhHO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0l2QyxNQUEyRztBQUMzRyxNQUFpRztBQUNqRyxNQUF3RztBQUN4RyxNQUEySDtBQUMzSCxNQUFvSDtBQUNwSCxNQUFvSDtBQUNwSCxNQUF1SztBQUN2SztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLCtIQUFPOzs7O0FBSWlIO0FBQ3pJLE9BQU8saUVBQWUsK0hBQU8sSUFBSSwrSEFBTyxVQUFVLCtIQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjay5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd24uanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L1B1cmNoYXNlT3JkZXIvUHVyY2hhc2VPcmRlckluZm9WaWV3LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9JbnZvaWNlVmlldy9BZG1pblZpZXcuY3NzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9JbnZvaWNlVmlldy9BZG1pblZpZXcuY3NzP2ViZWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cInVzZSBjbGllbnRcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTIwIDExSDcuODNsNS41OS01LjU5TDEyIDRsLTggOCA4IDggMS40MS0xLjQxTDcuODMgMTNIMjB6XCJcbn0pLCAnQXJyb3dCYWNrJyk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cInVzZSBjbGllbnRcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTcuNDEgOC41OSAxMiAxMy4xN2w0LjU5LTQuNThMMTggMTBsLTYgNi02LTZ6XCJcbn0pLCAnS2V5Ym9hcmRBcnJvd0Rvd24nKTsiLCJpbXBvcnQgUHJpbnRIZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1ByaW50SGVhZGVyJztcclxuaW1wb3J0IFByaW50Rm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9QcmludEZvb3Rlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNpZGVNYWludGVuYW5jZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZU1haW50ZW5hbmNlJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcydcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJ1xyXG5pbXBvcnQgJy4uL0ludm9pY2VWaWV3L0FkbWluVmlldy5jc3MnXHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudENpcmNsZSc7XHJcbmltcG9ydCB7IENvbGxhcHNlLCBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZVJvdywgVGFibGVIZWFkLCBQYXBlciwgVGFibGVDb250YWluZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgQXV0b2NvbXBsZXRlLCBzdHlsZWQsIE1vZGFsLCBCYWNrZHJvcCwgRmFkZSwgQm94LCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgQ2hlY2tib3gsIExpbmVhclByb2dyZXNzLCBTdGVwcGVyLCBTdGVwLCBTdGVwTGFiZWwsIEJ1dHRvbiwgQWNjb3JkaW9uLCBBY2NvcmRpb25TdW1tYXJ5LCBBY2NvcmRpb25EZXRhaWxzLCBUYWJzLCBUYWIsIE1lbnUsIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgTGluaywgTmF2TGluaywgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vLi4vaW1nL2ltYWdlcy5wbmcnXHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgSW9zU2hhcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW9zU2hhcmUnO1xyXG5pbXBvcnQgTG9jYWxQcmludHNob3BJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9jYWxQcmludHNob3AnO1xyXG5pbXBvcnQgQXR0YWNoRmlsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BdHRhY2hGaWxlJztcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VuZCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBSZWFjdFRvUHJpbnQsIHsgdXNlUmVhY3RUb1ByaW50IH0gZnJvbSAncmVhY3QtdG8tcHJpbnQnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCB7IEVtYWlsT3V0bGluZWQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IFBob25lIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGhvbmUnO1xyXG5pbXBvcnQgV2ViSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1dlYic7XHJcbmltcG9ydCBFbWFpbCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VtYWlsJztcclxuaW1wb3J0IEVtYWlsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VtYWlsJztcclxuaW1wb3J0IFBob25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Bob25lJztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dEb3duJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5cclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBQcmludFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgVmlld1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIFB1cmNoYXNlT3JkZXJJbmZvVmlldygpIHtcclxuICBsZXQgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9XHJcbiAgY29uc3QgW3B1cmNoYXNlLCBzZXRQdXJjaGFzZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpdGVtLCBTZXRJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3B1cmNoYXNlT3JkZXJgKVxyXG4gICAgICAgIHNldFB1cmNoYXNlKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc0l0ZW0gPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtYClcclxuICAgICAgICBTZXRJdGVtcyhyZXNJdGVtLmRhdGEuZGF0YSlcclxuICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbXSlcclxuICBjb25zdCBbcHVyY2hhc2VOdW1iZXIsIHNldFB1cmNoYXNlTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZFB1cmNoYXNlLCBzZXRGaWx0ZXJlZFB1cmNoYXNlXSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGFSZWxhdGVkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1wdXJjaGFzZU9yZGVyLyR7aWR9YClcclxuICAgICAgICBzZXRQdXJjaGFzZU51bWJlcihOdW1iZXIocmVzLmRhdGE/LmRhdGE/Lm91dE51bWJlciB8fCByZXMuZGF0YT8ub3V0TnVtYmVyIHx8IDApKTtcclxuICAgICAgICBzZXRGaWx0ZXJlZFB1cmNoYXNlKHJlcy5kYXRhLmRhdGEuaXRlbXNRdHlBcnJheSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YVJlbGF0ZWQoKVxyXG4gIH0sIFtpZF0pXHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29tcG9uZW50UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY29tcG9uZW50UmVmMiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGhhbmRsZVByaW50ID0gdXNlUmVhY3RUb1ByaW50KHtcclxuICAgIGNvbnRlbnQ6ICgpID0+IGNvbXBvbmVudFJlZi5jdXJyZW50LFxyXG4gICAgZG9jdW1lbnRUaXRsZTogJ1BPLScgKyBTdHJpbmcocHVyY2hhc2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyksXHJcbiAgICBvbkJlZm9yZUdldENvbnRlbnQ6ICgpID0+IHtcclxuICAgICAgY29uc3QgUEFHRV9IRUlHSFQgPSAxMDQ1O1xyXG4gICAgICBjb25zdCBwcmludEVsZW1lbnQgPSBjb21wb25lbnRSZWYuY3VycmVudDtcclxuICAgICAgaWYgKHByaW50RWxlbWVudCkge1xyXG4gICAgICAgIHByaW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGVtcC1jbGFzcy1mb3ItaGVpZ2h0XCIpXHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gcHJpbnRFbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgICAgIGNvbnN0IG51bWJlck9mUGFnZSA9IE1hdGguY2VpbChoZWlnaHQgLyBQQUdFX0hFSUdIVClcclxuICAgICAgICBpZiAobnVtYmVyT2ZQYWdlID4gMSkge1xyXG4gICAgICAgICAgY29uc3QgaGVpZ2h0V2l0aFNpbmdsZUhlYWRlciA9IG51bWJlck9mUGFnZSAqIFBBR0VfSEVJR0hUXHJcbiAgICAgICAgICBsZXQgcmVxdWlyZWRIZWlnaHQgPSBoZWlnaHRXaXRoU2luZ2xlSGVhZGVyXHJcbiAgICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBwcmludEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aGVhZFwiKT8uWzBdPy5jbGllbnRIZWlnaHRcclxuICAgICAgICAgIGNvbnN0IGZvb3RlckhlaWdodCA9IHByaW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRmb290XCIpPy5bMF0/LmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgcmVxdWlyZWRIZWlnaHQgLT0gKG51bWJlck9mUGFnZSAtIDEpICogKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodClcclxuICAgICAgICAgIHByaW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtyZXF1aXJlZEhlaWdodH1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGVtcC1jbGFzcy1mb3ItaGVpZ2h0XCIpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkFmdGVyUHJpbnQ6ICgpID0+IHtcclxuICAgICAgY29uc3QgcHJpbnRFbGVtZW50ID0gY29tcG9uZW50UmVmLmN1cnJlbnQ7XHJcbiAgICAgIGlmIChwcmludEVsZW1lbnQpIHtcclxuICAgICAgICBwcmludEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYGF1dG9gXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IGhhbmRsZVByaW50MiA9IHVzZVJlYWN0VG9QcmludCh7XHJcbiAgICBjb250ZW50OiAoKSA9PiBjb21wb25lbnRSZWYyLmN1cnJlbnQsXHJcbiAgICBkb2N1bWVudFRpdGxlOiAnUE8tJyArIFN0cmluZyhwdXJjaGFzZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKSxcclxuICAgIG9uQmVmb3JlR2V0Q29udGVudDogKCkgPT4ge1xyXG4gICAgICBjb25zdCBQQUdFX0hFSUdIVCA9IDEwNDU7XHJcbiAgICAgIGNvbnN0IHByaW50RWxlbWVudCA9IGNvbXBvbmVudFJlZjIuY3VycmVudDtcclxuICAgICAgaWYgKHByaW50RWxlbWVudCkge1xyXG4gICAgICAgIHByaW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGVtcC1jbGFzcy1mb3ItaGVpZ2h0XCIpXHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gcHJpbnRFbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgICAgIGNvbnN0IG51bWJlck9mUGFnZSA9IE1hdGguY2VpbChoZWlnaHQgLyBQQUdFX0hFSUdIVClcclxuICAgICAgICBpZiAobnVtYmVyT2ZQYWdlID4gMSkge1xyXG4gICAgICAgICAgY29uc3QgaGVpZ2h0V2l0aFNpbmdsZUhlYWRlciA9IG51bWJlck9mUGFnZSAqIFBBR0VfSEVJR0hUXHJcbiAgICAgICAgICBsZXQgcmVxdWlyZWRIZWlnaHQgPSBoZWlnaHRXaXRoU2luZ2xlSGVhZGVyXHJcbiAgICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBwcmludEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aGVhZFwiKT8uWzBdPy5jbGllbnRIZWlnaHRcclxuICAgICAgICAgIGNvbnN0IGZvb3RlckhlaWdodCA9IHByaW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRmb290XCIpPy5bMF0/LmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgcmVxdWlyZWRIZWlnaHQgLT0gKG51bWJlck9mUGFnZSAtIDEpICogKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodClcclxuICAgICAgICAgIHByaW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtyZXF1aXJlZEhlaWdodH1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGVtcC1jbGFzcy1mb3ItaGVpZ2h0XCIpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkFmdGVyUHJpbnQ6ICgpID0+IHtcclxuICAgICAgY29uc3QgcHJpbnRFbGVtZW50ID0gY29tcG9uZW50UmVmMi5jdXJyZW50O1xyXG4gICAgICBpZiAocHJpbnRFbGVtZW50KSB7XHJcbiAgICAgICAgcHJpbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGBhdXRvYFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCBoYW5kbGVPcGVuUHJpbnQgPSAoKSA9PiB7XHJcbiAgICBoYW5kbGVQcmludCgpXHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5QcmludDIgPSAoKSA9PiB7XHJcbiAgICBoYW5kbGVQcmludDIoKVxyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBoYW5kbGVTaG93ID0gKGUpID0+IHtcclxuICAgIHNldFNob3coZSk7XHJcbiAgfVxyXG4gIHsvKiogQ29tbWVudHMgc3RhcnRzICovIH1cclxuICBjb25zdCBbc2hvdzEsIHNldFNob3cxXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3cxID0gKGUpID0+IHtcclxuICAgIHNldFNob3cxKGUpO1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfVxyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbQ29tbWVudHMxLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25vdGlmaWNhdGlvbiwgc2V0Tm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2NvbW1lbnRgKVxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5Db21tZW50SW5mby5pZEluZm8gPT09IGlkKVxyXG4gICAgICAgIHNldENvbW1lbnRzKHJlc3ApXHJcbiAgICAgICAgY29uc3QgcmVzTm90aWZpY2F0aW9uID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vbm90aWZpY2F0aW9uYClcclxuICAgICAgICBzZXROb3RpZmljYXRpb24ocmVzTm90aWZpY2F0aW9uLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuaWRJbmZvID09PSBpZCkpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoQ29tbWVudCgpXHJcbiAgfSwgW2lkXSlcclxuXHJcbiAgY29uc3QgQ29tbWVudEluZm8gPVxyXG4gIHtcclxuICAgIGlkSW5mbzogaWQsXHJcbiAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSxcclxuICAgIHJlYXNvblxyXG4gIH1cclxuICB7LyoqIExvYWRpbmcgU3RhcnQgKi8gfVxyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG5cclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuICB7LyoqIExvYWRpbmcgRW5kICovIH1cclxuICBjb25zdCBkYXRlQ29tbWVudCA9IGRheWpzKERhdGUubm93KCkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRFZGl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIENvbW1lbnRJbmZvLFxyXG4gICAgICBkYXRlQ29tbWVudFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtY29tbWVudC9gLCBkYXRhKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgc2V0UmVhc29uKFwiXCIpO1xyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgIHNldENvbW1lbnRzKFtuZXdEYXRhLCAuLi5Db21tZW50czFdKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHsvKiogQ29tbWVudHMgZW5kICovIH1cclxuICBjb25zdCBbc2hvd1JlZiwgc2V0U2hvd1JlZl0gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IGhhbmRsZVNob3dSZWYgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvd1JlZihlKTtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdmFsdWUyLCBzZXRWYWx1ZTJdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBwdXJjaGFzZS5maW5kSW5kZXgocm93ID0+IHJvdy5faWQgPT09IGlkKTtcclxuICAgIGlmIChzZWxlY3RlZEluZGV4ICE9PSAtMSkge1xyXG4gICAgICBzZXRWYWx1ZShzZWxlY3RlZEluZGV4KVxyXG4gICAgfVxyXG4gIH0sIFtwdXJjaGFzZSwgaWRdKVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZTIgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlMihuZXdWYWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgIHNldFNlYXJjaCh2YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgW3NlYXJjaDIsIHNldFNlYXJjaDJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaDIgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U2VhcmNoMih2YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgbmV3QXJyYXkgPSBzZWFyY2ggIT09ICcnID8gcHVyY2hhc2UuZmlsdGVyKChyb3cpID0+XHJcbiAgICByb3cuZGVzY3JpcHRpb24gJiYgcm93LmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICByb3cucmVhc29uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICByb3cucmVmZXJlbmNlICYmIHJvdy5yZWZlcmVuY2UucmVmZXJlbmNlTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgcm93Lml0ZW1zUXR5QXJyYXkgJiYgcm93Lml0ZW1zUXR5QXJyYXkuc29tZSgoSXRlbSkgPT4gSXRlbS5pdGVtTmFtZSAmJiBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKSB8fFxyXG4gICAgcm93Lml0ZW1zUXR5QXJyYXkgJiYgcm93Lml0ZW1zUXR5QXJyYXkuc29tZSgoSXRlbSkgPT4gSXRlbS5pdGVtRGVzY3JpcHRpb24gJiYgSXRlbS5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkpXHJcbiAgKSA6IHB1cmNoYXNlXHJcblxyXG4gIGNvbnN0IG5ld0FycmF5MiA9IHNlYXJjaDIgIT09ICcnID8gZmlsdGVyZWRQdXJjaGFzZS5maWx0ZXIoKEl0ZW0pID0+XHJcbiAgICBJdGVtLml0ZW1OYW1lICYmIEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICBJdGVtLml0ZW1EZXNjcmlwdGlvbiAmJiBJdGVtLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDIudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIEl0ZW0ubmV3RGVzY3JpcHRpb24gJiYgSXRlbS5uZXdEZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDIudG9Mb3dlckNhc2UoKSlcclxuICApIDogZmlsdGVyZWRQdXJjaGFzZVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQdXJjaGFzZSBPcmRlclxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKC0xKX0+XHJcbiAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaWRlQmFyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNpZGVCYXIoZmFsc2UpfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZU1haW50ZW5hbmNlIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAyIH19ID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxvYWRpbmdEYXRhID8gPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJzEyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3cxID09PSAxID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvdyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgcGFkZGluZzogJzVweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz5BbGwgUHVyY2hhc2U8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMScgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdygyKX0+RmlsdGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTcwcHgpJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHVyY2hhc2U/Lm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J1BPLScgKyBTdHJpbmcocm93Lm91dE51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9QdXJjaGFzZU9yZGVySW5mb1ZpZXcvJHtyb3cuX2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93ID09PSAyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzEwcHgnIH19IHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3coMSl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzMwMzY4YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTI1cHgpJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmIC5NdWlUYWJzLWluZGljYXRvcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld0FycmF5Py5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydQTy0nICsgU3RyaW5nKHJvdy5vdXROdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvUHVyY2hhc2VPcmRlckluZm9WaWV3LyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMwMzY4YSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcjInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmQ6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3B1cmNoYXNlPy5maWx0ZXIocm93ID0+IHJvdy5faWQgPT09IGlkKT8ubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlciBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGZvbnRTaXplOiAnMjBweCcsIHdpZHRoOiAnMTAwJScgfX0+UE8te1N0cmluZyhyb3cub3V0TnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfSB7cm93LklwUmVsYXRlZCAmJiAoPHNwYW4+IFJlZmVyZW5jZTogSVAte1N0cmluZyhyb3cuSXBSZWxhdGVkLm51bWJlcikucGFkU3RhcnQoNiwgJzAnKX08L3NwYW4+KX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyAnZGVtby1jdXN0b21pemVkLW1lbnUnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuID8gJ3RydWUnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVFbGV2YXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXs8S2V5Ym9hcmRBcnJvd0Rvd25JY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnZ3JheScsICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLWN1c3RvbWl6ZWQtbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudUxpc3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6ICdkZW1vLWN1c3RvbWl6ZWQtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtGYWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL1B1cmNoYXNlVXBkYXRlT3JkZXIvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RWRpdDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVPcGVuUHJpbnR9IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxQcmludHNob3BJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QcmludCBXaXRob3V0IEFsbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVPcGVuUHJpbnQyfSBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsUHJpbnRzaG9wSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJpbnQgV2l0aCBBbGw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93MSgyKX0+IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+Q29tbWVudHM8L3NwYW4+IDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cxKDMpfT4gPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT5IaXN0b3J5PC9zcGFuPjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LkNvbnZlcnRlZCAmJiByb3cuQ29udmVydGVkID09PSB0cnVlID8gPHNwYW4+Q29udmVydGVkPC9zcGFuPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0NvbnZlcnRQb1RvSVAvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udmVydCB0byBJdGVtIFB1cmNoYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzU1MHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggaGlkZGVuID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSByZWY9e2NvbXBvbmVudFJlZn0gY2xhc3NOYW1lPSdpbnZvaWNlZGV0YWlscyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnZvaWNlVGVzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaW50SGVhZGVyIGJyYW5jaElkPXt0eXBlb2Ygcm93ICE9PSBcInVuZGVmaW5lZFwiID8gcm93Py5icmFuY2hJZCA6IFwiXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naW52b2ljZWhyJyBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19PlB1cmNoYXNlIE9yZGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50JyBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyMHB4JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsaW5lSGVpZ2h0OiAxLjM1LCB3aWR0aDogJzYwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcxM3B4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcxM3B4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5yZWZlcmVuY2UgIT09IHVuZGVmaW5lZCAmJiByb3cucmVmZXJlbmNlICE9PSBudWxsID8gcm93LnJlZmVyZW5jZS5yZWZlcmVuY2VOYW1lICsgJyAnICsgcm93LmRlc2NyaXB0aW9uIDogcm93LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hZGRyZXNzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpcnN0VGFibGVcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZm9udFNpemU6ICc3MCUnLCBsZWZ0OiAnODNweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnLCBwYWdlQnJlYWtJbnNpZGU6ICdhdXRvJyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPk9yZGVyICM8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT48c3BhbiA+UE8te1N0cmluZyhyb3cub3V0TnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuID5EYXRlPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+PHNwYW4gPntkYXlqcyhyb3cuaXRlbU91dERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuID5NYW51ZmFjdHVyZXI8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT48c3BhbiA+e3Jvdy5tYW51ZmFjdHVyZXJ9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPlJlZmVyZW5jZTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAncmlnaHQnIH19PjxzcGFuID57cm93Lm1hbnVmYWN0dXJlck51bWJlcn08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3BhbiA+U3ViamVjdDwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAncmlnaHQnIH19PjxzcGFuID57cm93LnJlYXNvbn08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzZWNvbmRUYWJsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAnNzAlJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzQwMHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5RdHkgTmVlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5RdHkgQnV5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3QXJyYXkyPy5tYXAoKEl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRlZFVuaXQgPSBpdGVtLmZpbmQoKEl0ZW0xKSA9PiBJdGVtMS5faWQgPT09IEl0ZW0uaXRlbU5hbWUuX2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0l0ZW0uaWRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+PHNwYW4+e2kgKyAxfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezZ9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj0nY2VudGVyJz57SXRlbS5uZXdEZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzMwcHgnIH19PntpICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PntJdGVtLml0ZW1OYW1lLml0ZW1OYW1lICE9PSAnZW1wdHknID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjUwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PntJdGVtLml0ZW1EZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0Jywgd2lkdGg6ICczMHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT57SXRlbS5pdGVtUXR5fSB7cmVsYXRlZFVuaXQgIT09IHVuZGVmaW5lZCA/IHJlbGF0ZWRVbml0LnVuaXQudG9VcHBlckNhc2UoKSA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCB3aWR0aDogJzMwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PntJdGVtLnF0eUJ1eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRmb290PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luVG9wOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaGlkZGVuPi4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBoaWRkZW4+Li4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludEZvb3RlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiB0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIiA/IGRhdGE/LmJyYW5jaElkIDogXCJcIn0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rmb290PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGhpZGRlbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgcmVmPXtjb21wb25lbnRSZWYyfSBjbGFzc05hbWU9J2ludm9pY2VkZXRhaWxzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludm9pY2VUZXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpbnRIZWFkZXIgYnJhbmNoSWQ9e3R5cGVvZiByb3cgIT09IFwidW5kZWZpbmVkXCIgPyByb3c/LmJyYW5jaElkIDogXCJcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbnZvaWNlaHInIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0+UHVyY2hhc2UgT3JkZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFkZHJlc3Mgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxpbmVIZWlnaHQ6IDEuMzUsIHdpZHRoOiAnNjAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogJzEzcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogJzEzcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnJlZmVyZW5jZSAhPT0gdW5kZWZpbmVkICYmIHJvdy5yZWZlcmVuY2UgIT09IG51bGwgPyByb3cucmVmZXJlbmNlLnJlZmVyZW5jZU5hbWUgKyAnICcgKyByb3cuZGVzY3JpcHRpb24gOiByb3cuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlyc3RUYWJsZVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmb250U2l6ZTogJzcwJScsIGxlZnQ6ICc4M3B4JywgbWFyZ2luQm90dG9tOiAnMTBweCcsIHBhZ2VCcmVha0luc2lkZTogJ2F1dG8nIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3BhbiA+T3JkZXIgIzwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAncmlnaHQnIH19PjxzcGFuID5QTy17U3RyaW5nKHJvdy5vdXROdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPkRhdGU8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT48c3BhbiA+e2RheWpzKHJvdy5pdGVtT3V0RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPk1hbnVmYWN0dXJlcjwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAncmlnaHQnIH19PjxzcGFuID57cm93Lm1hbnVmYWN0dXJlcn08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3BhbiA+UmVmZXJlbmNlPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+PHNwYW4gPntyb3cubWFudWZhY3R1cmVyTnVtYmVyfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuID5TdWJqZWN0PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+PHNwYW4gPntyb3cucmVhc29ufTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgZm9udFNpemU6ICc3MCUnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzE1MHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPlF0eSBOZWVkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPlF0eSBCdXk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+UHJpY2UoJCk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+QW1vdW50IFBhaWQoRkMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPlJhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+QW1vdW50IFBhaWQoJCk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+VG90YWwoJCk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXdBcnJheTI/Lm1hcCgoSXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGVkVW5pdCA9IGl0ZW0uZmluZCgoSXRlbTEpID0+IEl0ZW0xLl9pZCA9PT0gSXRlbS5pdGVtTmFtZS5faWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17SXRlbS5pZFJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48c3Bhbj57aSArIDF9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Nn0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPSdjZW50ZXInPntJdGVtLm5ld0Rlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMzBweCcgfX0+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+PHNwYW4gaGlkZGVuPXtJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JyA6ICcnfT57SXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUudG9VcHBlckNhc2UoKSA6ICcnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntJdGVtLml0ZW1EZXNjcmlwdGlvbiA/IEl0ZW0uaXRlbURlc2NyaXB0aW9uLnRvVXBwZXJDYXNlKCkgOiAnJ308L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIHdpZHRoOiAnMzBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+e0l0ZW0uaXRlbVF0eX0ge3JlbGF0ZWRVbml0ICE9PSB1bmRlZmluZWQgPyByZWxhdGVkVW5pdC51bml0LnRvVXBwZXJDYXNlKCkgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0Jywgd2lkdGg6ICczMHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT57SXRlbS5xdHlCdXl9IHtyZWxhdGVkVW5pdCAhPT0gdW5kZWZpbmVkID8gcmVsYXRlZFVuaXQudW5pdC50b1VwcGVyQ2FzZSgpIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIHdpZHRoOiAnODBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+e0l0ZW0uaXRlbVJhdGUgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQoSXRlbS5pdGVtUmF0ZSkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0Jywgd2lkdGg6ICcxMDBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+RkN7SXRlbS50b3RhbEFtb3VudEZDICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KEl0ZW0udG90YWxBbW91bnRGQykudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0Jywgd2lkdGg6ICcxMDBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+e0l0ZW0uVGF1eCAhPT0gdW5kZWZpbmVkID8gcGFyc2VGbG9hdChJdGVtLlRhdXgpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIHdpZHRoOiAnMTAwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PiR7cGFyc2VGbG9hdChJdGVtLnRvdGFsQW1vdW50KS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIHdpZHRoOiAnMTAwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PntJdGVtLmZjQ29udmVydFRvVXNkVG90YWwgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQoSXRlbS5mY0NvbnZlcnRUb1VzZFRvdGFsKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NX0gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19ID5Ub3RhbCA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0gPkZDe3Jvdy50b3RhbEZDICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHJvdy50b3RhbEZDKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gPi08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0gPiR7cm93LnRvdGFsICE9PSB1bmRlZmluZWQgPyByb3cudG90YWwudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0gPiR7cm93LnRvdGFsVVNEICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHJvdy50b3RhbFVTRCkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRmb290PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luVG9wOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaGlkZGVuPi4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBoaWRkZW4+Li4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludEZvb3RlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiB0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIiA/IGRhdGE/LmJyYW5jaElkIDogXCJcIn0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rmb290PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpbnRIZWFkZXIgYnJhbmNoSWQ9e3R5cGVvZiByb3cgIT09IFwidW5kZWZpbmVkXCIgPyByb3c/LmJyYW5jaElkIDogdHlwZW9mIGRhdGEgIT09IFwidW5kZWZpbmVkXCIgPyBkYXRhPy5icmFuY2hJZCA6IFwiXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPjxwIGNsYXNzTmFtZT0naW52b2ljZWhyJz5QdXJjaGFzZSBPcmRlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBtYXJnaW5Ub3A6ICcyNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsaW5lSGVpZ2h0OiAxLjM1LCB3aWR0aDogJzYwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogJzEzcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcxM3B4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cucmVmZXJlbmNlICE9PSB1bmRlZmluZWQgJiYgcm93LnJlZmVyZW5jZSAhPT0gbnVsbCA/IHJvdy5yZWZlcmVuY2UucmVmZXJlbmNlTmFtZSArICcgJyArIHJvdy5kZXNjcmlwdGlvbiA6IHJvdy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlyc3RUYWJsZVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmb250U2l6ZTogJzcwJScsIGxlZnQ6ICc4M3B4JywgbWFyZ2luQm90dG9tOiAnMTBweCcsIHBhZ2VCcmVha0luc2lkZTogJ2F1dG8nIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3BhbiA+T3JkZXIgIzwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT48c3BhbiA+UE8te1N0cmluZyhyb3cub3V0TnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuID5EYXRlPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAncmlnaHQnIH19PjxzcGFuID57ZGF5anMocm93Lml0ZW1PdXREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3BhbiA+TWFudWZhY3R1cmVyPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAncmlnaHQnIH19PjxzcGFuID57cm93Lm1hbnVmYWN0dXJlcn08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3BhbiA+UmVmZXJlbmNlPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAncmlnaHQnIH19PjxzcGFuID57cm93Lm1hbnVmYWN0dXJlck51bWJlcn08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3BhbiA+U3ViamVjdDwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT48c3BhbiA+e3Jvdy5yZWFzb259PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICctNjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzkwJScsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19Pk48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzMwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5RdHkgTmVlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+UXR5IEJ1eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+UHJpY2UoJCk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPkFtb3VudCBQYWlkKEZDKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+UmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+QW1vdW50IFBhaWQoJCk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPlRvdGFsKCQpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXdBcnJheTI/Lm1hcCgoSXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRVbml0ID0gaXRlbS5maW5kKChJdGVtMSkgPT4gSXRlbTEuX2lkID09PSBJdGVtLml0ZW1OYW1lLl9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17SXRlbS5pZFJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PjxzcGFuPntpICsgMX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezh9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj0nY2VudGVyJz57SXRlbS5uZXdEZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMzBweCcgfX0+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT4gICAgICAgICAgICAgICAgPHNwYW4gaGlkZGVuPXtJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JyA6ICcnfT57SXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUudG9VcHBlckNhc2UoKSA6ICcnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57SXRlbS5pdGVtRGVzY3JpcHRpb24gPyBJdGVtLml0ZW1EZXNjcmlwdGlvbi50b1VwcGVyQ2FzZSgpIDogJyd9ICgge3JlbGF0ZWRVbml0ICE9PSB1bmRlZmluZWQgPyByZWxhdGVkVW5pdC5pdGVtQnJhbmQudG9VcHBlckNhc2UoKSA6ICcnfSApPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIHdpZHRoOiAnMzBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+e0l0ZW0uaXRlbVF0eX0ge3JlbGF0ZWRVbml0ICE9PSB1bmRlZmluZWQgPyByZWxhdGVkVW5pdC51bml0LnRvVXBwZXJDYXNlKCkgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCB3aWR0aDogJzMwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PntJdGVtLnF0eUJ1eX0ge3JlbGF0ZWRVbml0ICE9PSB1bmRlZmluZWQgPyByZWxhdGVkVW5pdC51bml0LnRvVXBwZXJDYXNlKCkgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCB3aWR0aDogJzgwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PntJdGVtLml0ZW1SYXRlICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KEl0ZW0uaXRlbVJhdGUpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0Jywgd2lkdGg6ICcxMDBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+RkN7SXRlbS50b3RhbEFtb3VudEZDICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KEl0ZW0udG90YWxBbW91bnRGQykudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCB3aWR0aDogJzEwMHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT57SXRlbS5UYXV4ICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KEl0ZW0uVGF1eCkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCB3aWR0aDogJzEwMHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT4ke3BhcnNlRmxvYXQoSXRlbS50b3RhbEFtb3VudCkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIHdpZHRoOiAnMTAwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PntJdGVtLmZjQ29udmVydFRvVXNkVG90YWwgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQoSXRlbS5mY0NvbnZlcnRUb1VzZFRvdGFsKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NX0gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19ID5Ub3RhbCA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fSA+RkN7cm93LnRvdGFsRkMgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQocm93LnRvdGFsRkMpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19ID4tPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0gPiR7cm93LnRvdGFsICE9PSB1bmRlZmluZWQgPyByb3cudG90YWwudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fSA+JHtyb3cudG90YWxVU0QgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQocm93LnRvdGFsVVNEKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcmludm9pY2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48RW1haWwgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db250YWN0QEdsb2JhbEdhdGUuU2FybDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc1cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxQaG9uZSAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPisyNDMgODI3IDcyMiAyMjI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48V2ViSWNvbiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnd3dy5HbG9iYWxHYXRlLnNhcmw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvdzEgPT09IDIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DT01NRU5UUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cxKDEpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdEVkaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nY29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNic+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMzU1cHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0NvbW1lbnRzMS5tYXAoKEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17SXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0l0ZW0uZGF0ZUNvbW1lbnQgPyBkYXlqcyhJdGVtLmRhdGVDb21tZW50KS5mb3JtYXQoJ0REL01NJykgOiAnJ30ge0l0ZW0uQ29tbWVudEluZm8ucGVyc29uICsgJzogJyArIEl0ZW0uQ29tbWVudEluZm8ucmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3cxID09PSAzID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ISVNUT1JZPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93MSgxKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzUxOHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZS5maWx0ZXIoKHJvdykgPT4gcm93Ll9pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtyb3cuX2lkfT57cm93LkNyZWF0ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cm93LkNyZWF0ZS5kYXRlQ29tbWVudH0ge3Jvdy5DcmVhdGUucGVyc29ufSB7cm93LkNyZWF0ZS5wdXJjaGFzZU51bWJlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24ubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntyb3cucGVyc29uICsgJyBvbiAnICsgZGF5anMocm93LmRhdGVOb3RpZmljYXRpb24pLmZvcm1hdCgnREQvTU1NTScpfToge3Jvdy5yZWFzb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZU9yZGVySW5mb1ZpZXdcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGhlYWRpbmcgKi9cbi5pbnZvaWNlVGVzdCB7XG4gIG1hcmdpbjogMCAwIDNlbTtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuXG5oMSB7XG4gIGZvbnQ6IGJvbGQgMTAwJSBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmludm9pY2VUZXN0IGFkZHJlc3Mge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBtYXJnaW46IDAgMCAxZW0gMWVtO1xufVxuXG5hZGRyZXNzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDc1JTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBtYXJnaW46IDAgMCAxZW0gMWVtO1xufVxuXG4uaW52b2ljZVRlc3QgaDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWNvbG9yOiAjOTk5O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTAlO1xuICBmb250OiBib2xkIDEwMCUgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pbnZvaWNlVGVzdCBhZGRyZXNzIHAge1xuICBtYXJnaW46IDAgMCAwLjI1ZW07XG59XG5cbi5pbnZvaWNlVGVzdCBzcGFuLCAuaW52b2ljZVRlc3QgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaW52b2ljZVRlc3Qgc3BhbiB7XG4gIG1hcmdpbjogMCAxZW0gMWVtIDA7XG4gIG1heC1oZWlnaHQ6IDI1JTtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmludm9pY2VUZXN0IGltZyB7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG4gIG1heC13aWR0aDogdmFyKC0taGVhZGVyLWxvZ28td2lkdGgsIDI0MHB4KTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmludm9pY2VUZXN0OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiBhcnRpY2xlICovXG5hcnRpY2xlLCBhcnRpY2xlIGFkZHJlc3MsIHRhYmxlIHtcbiAgbWFyZ2luOiAwIDAgM2VtO1xufVxuXG5hcnRpY2xlIGgxIHtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5hcnRpY2xlIGFkZHJlc3Mge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cblxuYXJ0aWNsZTphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLyogdGFibGUgKi9cbnRhYmxlIHtcbiAgdGFibGUtbGF5b3V0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4vKiB0YWJsZSBmaXJzdFRhYmxlICovXG50YWJsZS5maXJzdFRhYmxlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbn1cblxudGFibGUuZmlyc3RUYWJsZTphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLyogdGFibGUgZmlyc3RUYWJsZSAqL1xudGFibGUuZmlyc3RUYWJsZSB0aCB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbnRhYmxlLmZpcnN0VGFibGUgdGQge1xuICB3aWR0aDogNjAlO1xufVxuXG5hc2lkZSBoMSNub3RlcyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICBtYXJnaW46IDAgMCAxZW07XG59XG5cbmFzaWRlIGgxI25vdGVzIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTk5O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTAlO1xuICBmb250OiBib2xkIDEwMCUgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9JbnZvaWNlVmlldy9BZG1pblZpZXcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBLFlBQUE7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUc7RUFDQywwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVFO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUFvQiwwQkFBQTtFQUE0Qix3QkFBQTtFQUEwQiwwQkFBQTtFQUMxRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFJTjs7QUFERTtFQUNFLGtCQUFBO0FBSUo7O0FBREU7RUFBc0MsY0FBQTtFQUFnQixXQUFBO0FBTXhEOztBQUxFO0VBQXFCLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsY0FBQTtFQUFnQixrQkFBQTtBQVk3RTs7QUFYRTtFQUFtQixnQkFBQTtFQUFrQiwwQ0FBQTtFQUE0QyxtQkFBQTtFQUFxQixnQkFBQTtBQWtCeEc7O0FBZkU7RUFBcUIsV0FBQTtFQUFhLFdBQUE7RUFBYSxjQUFBO0FBcUJqRDs7QUFuQkUsWUFBQTtBQUNBO0VBQWtDLGVBQUE7QUF1QnBDOztBQXRCRTtFQUFhLG1CQUFBO0VBQXFCLGtCQUFBO0FBMkJwQzs7QUExQkU7RUFBa0IsV0FBQTtFQUFhLGNBQUE7RUFBZ0IsV0FBQTtFQUFhLGlCQUFBO0FBaUM5RDs7QUEvQkU7RUFBZ0IsV0FBQTtFQUFhLFdBQUE7RUFBYSxjQUFBO0FBcUM1Qzs7QUFuQ0UsVUFBQTtBQUVBO0VBQVEsa0JBQUE7RUFBb0IsV0FBQTtBQXVDOUI7O0FBdENFO0VBQVEseUJBQUE7QUEwQ1Y7O0FBekNFLHFCQUFBO0FBRUE7RUFBbUIsWUFBQTtFQUFjLFVBQUE7RUFBWSxXQUFBO0FBOEMvQzs7QUE3Q0U7RUFBeUIsV0FBQTtFQUFhLFdBQUE7RUFBYSxjQUFBO0FBbURyRDs7QUFqREUscUJBQUE7QUFFQTtFQUFzQixVQUFBO0FBb0R4Qjs7QUFuREU7RUFBc0IsVUFBQTtBQXVEeEI7O0FBckRFO0VBQWlCLFlBQUE7RUFBYyxxQkFBQTtFQUF1QixlQUFBO0FBMkR4RDs7QUExREU7RUFBaUIsa0JBQUE7RUFBb0IsMEJBQUE7RUFBNEIsd0JBQUE7RUFBMEIsMEJBQUE7RUFDekYscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBaUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi8qIGhlYWRpbmcgKi9cXHJcXG5cXHJcXG4uaW52b2ljZVRlc3Qge1xcclxcbiAgICBtYXJnaW46IDAgMCAzZW07XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgIGgxIHtcXHJcXG4gICAgZm9udDogYm9sZCAxMDAlIHNhbnMtc2VyaWY7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW52b2ljZVRlc3QgYWRkcmVzcyB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiA3NSU7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxuICAgIG1hcmdpbjogMCAwIDFlbSAxZW07XFxyXFxuICB9XFxyXFxuICBhZGRyZXNzIHtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDc1JTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBtYXJnaW46IDAgMCAxZW0gMWVtO1xcclxcbiAgfVxcclxcbiAgLmludm9pY2VUZXN0IGgxIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgICBib3JkZXItY29sb3I6ICM5OTk7IGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkOyBib3JkZXItYm90dG9tLXdpZHRoOiAxMCU7IGZvbnQ6IGJvbGQgMTAwJSBzYW5zLXNlcmlmO1xcclxcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVlbTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAuaW52b2ljZVRlc3QgYWRkcmVzcyBwIHtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMC4yNWVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW52b2ljZVRlc3Qgc3BhbiwgLmludm9pY2VUZXN0IGltZyB7IGRpc3BsYXk6IGJsb2NrOyBmbG9hdDogbGVmdDsgfVxcclxcbiAgLmludm9pY2VUZXN0IHNwYW4geyAgbWFyZ2luOiAwIDFlbSAxZW0gMDsgbWF4LWhlaWdodDogMjUlOyBtYXgtd2lkdGg6IDkwJTsgcG9zaXRpb246IGFic29sdXRlOyB9XFxyXFxuICAuaW52b2ljZVRlc3QgaW1nIHsgbWF4LWhlaWdodDogODBweDsgbWF4LXdpZHRoOiB2YXIoLS1oZWFkZXItbG9nby13aWR0aCwgMjQwcHgpOyBvYmplY3QtZml0OiBjb250YWluOyBtYXJnaW4tdG9wOiAxMHB4O31cXHJcXG5cXHJcXG4gIFxcclxcbiAgLmludm9pY2VUZXN0OmFmdGVyIHsgY2xlYXI6IGJvdGg7IGNvbnRlbnQ6IFxcXCJcXFwiOyBkaXNwbGF5OiB0YWJsZTsgfVxcclxcbiAgXFxyXFxuICAvKiBhcnRpY2xlICovXFxyXFxuICBhcnRpY2xlLCBhcnRpY2xlIGFkZHJlc3MsIHRhYmxlIHsgbWFyZ2luOiAwIDAgM2VtOyB9XFxyXFxuICBhcnRpY2xlIGgxIHsgY2xpcDogcmVjdCgwIDAgMCAwKTsgcG9zaXRpb246IGFic29sdXRlOyB9XFxyXFxuICBhcnRpY2xlIGFkZHJlc3MgeyBmbG9hdDogbGVmdDsgZm9udC1zaXplOiA5MCU7IGZsb2F0OiBsZWZ0OyBsaW5lLWhlaWdodDogMTBweDsgfVxcclxcbiAgXFxyXFxuICBhcnRpY2xlOmFmdGVyIHsgY2xlYXI6IGJvdGg7IGNvbnRlbnQ6IFxcXCJcXFwiOyBkaXNwbGF5OiB0YWJsZTsgfVxcclxcbiAgXFxyXFxuICAvKiB0YWJsZSAqL1xcclxcbiAgXFxyXFxuICB0YWJsZSB7IHRhYmxlLWxheW91dDogYXV0bzsgd2lkdGg6IDEwMCU7IH1cXHJcXG4gIHRhYmxlIHsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTt9XFxyXFxuICAvKiB0YWJsZSBmaXJzdFRhYmxlICovXFxyXFxuICBcXHJcXG4gIHRhYmxlLmZpcnN0VGFibGUgeyBmbG9hdDogcmlnaHQ7IHdpZHRoOiA1MCU7IGhlaWdodDogNTAlO31cXHJcXG4gIHRhYmxlLmZpcnN0VGFibGU6YWZ0ZXIgeyBjbGVhcjogYm90aDsgY29udGVudDogXFxcIlxcXCI7IGRpc3BsYXk6IHRhYmxlOyB9XFxyXFxuICBcXHJcXG4gIC8qIHRhYmxlIGZpcnN0VGFibGUgKi9cXHJcXG4gIFxcclxcbiAgdGFibGUuZmlyc3RUYWJsZSB0aCB7IHdpZHRoOiA0MCU7IH1cXHJcXG4gIHRhYmxlLmZpcnN0VGFibGUgdGQgeyB3aWR0aDogNjAlOyB9XFxyXFxuXFxyXFxuICBhc2lkZSBoMSNub3RlcyB7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXdpZHRoOiAwIDAgMXB4OyBtYXJnaW46IDAgMCAxZW07IH1cXHJcXG4gIGFzaWRlIGgxI25vdGVzIHsgYm9yZGVyLWNvbG9yOiAjOTk5OyBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDsgYm9yZGVyLWJvdHRvbS13aWR0aDogMTAlOyBmb250OiBib2xkIDEwMCUgc2Fucy1zZXJpZjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNWVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQWRtaW5WaWV3LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FkbWluVmlldy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiUHJpbnRIZWFkZXIiLCJQcmludEZvb3RlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJTaWRlTWFpbnRlbmFuY2UiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJDb2xsYXBzZSIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlUm93IiwiVGFibGVIZWFkIiwiUGFwZXIiLCJUYWJsZUNvbnRhaW5lciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJBdXRvY29tcGxldGUiLCJzdHlsZWQiLCJNb2RhbCIsIkJhY2tkcm9wIiwiRmFkZSIsIkJveCIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIkNoZWNrYm94IiwiTGluZWFyUHJvZ3Jlc3MiLCJTdGVwcGVyIiwiU3RlcCIsIlN0ZXBMYWJlbCIsIkJ1dHRvbiIsIkFjY29yZGlvbiIsIkFjY29yZGlvblN1bW1hcnkiLCJBY2NvcmRpb25EZXRhaWxzIiwiVGFicyIsIlRhYiIsIk1lbnUiLCJEaXZpZGVyIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwiTGluayIsIk5hdkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsIkVORFBPSU5UX1VSTCIsIkltYWdlIiwiRWRpdEljb24iLCJJb3NTaGFyZUljb24iLCJMb2NhbFByaW50c2hvcEljb24iLCJBdHRhY2hGaWxlSWNvbiIsIlNlbmRJY29uIiwiZGF5anMiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiUmVhY3RUb1ByaW50IiwidXNlUmVhY3RUb1ByaW50IiwiTG9hZGVyIiwiQ2xvc2UiLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiQXJyb3dCYWNrIiwiRW1haWxPdXRsaW5lZCIsIlBob25lIiwiV2ViSWNvbiIsIkVtYWlsIiwiRW1haWxJY29uIiwiUGhvbmVJY29uIiwiS2V5Ym9hcmRBcnJvd0Rvd25JY29uIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiRWRpdFRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIlByaW50VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIlB1cmNoYXNlT3JkZXJJbmZvVmlldyIsIl9wdXJjaGFzZSRmaWx0ZXIiLCJfdXNlUGFyYW1zIiwiaWQiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmOSIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwicHVyY2hhc2UiLCJzZXRQdXJjaGFzZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXRlbSIsIlNldEl0ZW1zIiwiZmV0Y2hEYXRhIiwiX3JlZjAiLCJyZXNJdGVtIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJwdXJjaGFzZU51bWJlciIsInNldFB1cmNoYXNlTnVtYmVyIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJmaWx0ZXJlZFB1cmNoYXNlIiwic2V0RmlsdGVyZWRQdXJjaGFzZSIsImZldGNoRGF0YVJlbGF0ZWQiLCJfcmVmMSIsIl9yZXMkZGF0YSIsIl9yZXMkZGF0YTIiLCJOdW1iZXIiLCJvdXROdW1iZXIiLCJpdGVtc1F0eUFycmF5IiwiX1JlYWN0JHVzZVN0YXRlMyIsIl9SZWFjdCR1c2VTdGF0ZTQiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiQm9vbGVhbiIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2VNZW51IiwiY29tcG9uZW50UmVmIiwiY29tcG9uZW50UmVmMiIsImhhbmRsZVByaW50IiwiY29udGVudCIsImN1cnJlbnQiLCJkb2N1bWVudFRpdGxlIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJvbkJlZm9yZUdldENvbnRlbnQiLCJQQUdFX0hFSUdIVCIsInByaW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIm51bWJlck9mUGFnZSIsIk1hdGgiLCJjZWlsIiwiX3ByaW50RWxlbWVudCRnZXRFbGVtIiwiX3ByaW50RWxlbWVudCRnZXRFbGVtMiIsImhlaWdodFdpdGhTaW5nbGVIZWFkZXIiLCJyZXF1aXJlZEhlaWdodCIsImhlYWRlckhlaWdodCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZm9vdGVySGVpZ2h0IiwicmVtb3ZlIiwib25BZnRlclByaW50IiwiaGFuZGxlUHJpbnQyIiwiX3ByaW50RWxlbWVudCRnZXRFbGVtMyIsIl9wcmludEVsZW1lbnQkZ2V0RWxlbTQiLCJoYW5kbGVPcGVuUHJpbnQiLCJoYW5kbGVPcGVuUHJpbnQyIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwic2hvdyIsInNldFNob3ciLCJoYW5kbGVTaG93IiwiZSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJzaG93MSIsInNldFNob3cxIiwiaGFuZGxlU2hvdzEiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwicmVhc29uIiwic2V0UmVhc29uIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsIkNvbW1lbnRzMSIsInNldENvbW1lbnRzIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsIm5vdGlmaWNhdGlvbiIsInNldE5vdGlmaWNhdGlvbiIsImZldGNoQ29tbWVudCIsIl9yZWYxMCIsIl9yZXMkZGF0YTMiLCJfcmVzTm90aWZpY2F0aW9uJGRhdGEiLCJyZXNwIiwiZmlsdGVyIiwicm93IiwiQ29tbWVudEluZm8iLCJpZEluZm8iLCJyZXNOb3RpZmljYXRpb24iLCJwZXJzb24iLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0IiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNsb3NlRXJyb3IiLCJkYXRlQ29tbWVudCIsIkRhdGUiLCJub3ciLCJoYW5kbGVTdWJtaXRFZGl0IiwiX3JlZjExIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwibmV3RGF0YSIsIl94IiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsInNob3dSZWYiLCJzZXRTaG93UmVmIiwiaGFuZGxlU2hvd1JlZiIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJ2YWx1ZSIsInNldFZhbHVlIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsInZhbHVlMiIsInNldFZhbHVlMiIsInNlbGVjdGVkSW5kZXgiLCJmaW5kSW5kZXgiLCJfaWQiLCJoYW5kbGVDaGFuZ2UiLCJuZXdWYWx1ZSIsImhhbmRsZUNoYW5nZTIiLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiaGFuZGxlU2VhcmNoIiwidGFyZ2V0IiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsInNlYXJjaDIiLCJzZXRTZWFyY2gyIiwiaGFuZGxlU2VhcmNoMiIsIm5ld0FycmF5IiwiZGVzY3JpcHRpb24iLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTmFtZSIsInNvbWUiLCJJdGVtIiwiaXRlbU5hbWUiLCJpdGVtRGVzY3JpcHRpb24iLCJuZXdBcnJheTIiLCJuZXdEZXNjcmlwdGlvbiIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm9uQ2xpY2siLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsIm5hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJjb250YWluZXIiLCJ4cyIsInBhZGRpbmciLCJvdmVyZmxvd1kiLCJvbkNoYW5nZSIsIm9yaWVudGF0aW9uIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJsYWJlbCIsInRvIiwiYm9yZGVyUmFkaXVzIiwidGl0bGUiLCJwbGFjZW1lbnQiLCJmbG9hdCIsImJhY2tncm91bmQiLCJfZGF0YSIsIl9kYXRhMiIsIl9kYXRhMyIsImZvbnRXZWlnaHQiLCJJcFJlbGF0ZWQiLCJudW1iZXIiLCJ1bmRlZmluZWQiLCJkaXNhYmxlRWxldmF0aW9uIiwiZW5kSWNvbiIsImJvcmRlciIsIk1lbnVMaXN0UHJvcHMiLCJvbkNsb3NlIiwiVHJhbnNpdGlvbkNvbXBvbmVudCIsImdhcCIsIkNvbnZlcnRlZCIsImhpZGRlbiIsInJlZiIsImJvcmRlckJvdHRvbSIsImJyYW5jaElkIiwibWFyZ2luQm90dG9tIiwibGluZUhlaWdodCIsInBhZ2VCcmVha0luc2lkZSIsInRleHRBbGlnbiIsIml0ZW1PdXREYXRlIiwiZm9ybWF0IiwibWFudWZhY3R1cmVyIiwibWFudWZhY3R1cmVyTnVtYmVyIiwiYWxpZ24iLCJpIiwicmVsYXRlZFVuaXQiLCJmaW5kIiwiSXRlbTEiLCJpZFJvdyIsIkZyYWdtZW50IiwiY29sU3BhbiIsImJvcmRlckxlZnQiLCJpdGVtUXR5IiwidW5pdCIsInRvVXBwZXJDYXNlIiwicXR5QnV5IiwibWFyZ2luVG9wIiwiaXRlbVJhdGUiLCJwYXJzZUZsb2F0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwidG90YWxBbW91bnRGQyIsIlRhdXgiLCJ0b3RhbEFtb3VudCIsImZjQ29udmVydFRvVXNkVG90YWwiLCJ0b3RhbEZDIiwidG90YWwiLCJ0b3RhbFVTRCIsIml0ZW1CcmFuZCIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJtdWx0aWxpbmUiLCJyb3dzIiwidHlwZSIsIkNyZWF0ZSIsImRhdGVOb3RpZmljYXRpb24iXSwic291cmNlUm9vdCI6IiJ9