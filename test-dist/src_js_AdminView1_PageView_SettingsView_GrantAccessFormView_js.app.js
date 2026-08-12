"use strict";
exports.id = "src_js_AdminView1_PageView_SettingsView_GrantAccessFormView_js";
exports.ids = ["src_js_AdminView1_PageView_SettingsView_GrantAccessFormView_js"];
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

/***/ "./src/js/AdminView1/PageView/SettingsView/GrantAccessFormView.js"
/*!************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/SettingsView/GrantAccessFormView.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/SidebarDashE3 */ "./src/js/component/SidebarDashE3.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
var _excluded = ["className"],
  _excluded2 = ["className"];
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


































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
function GrantAccessFormView() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_34__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_34__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_27__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_28__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__.setUser)({
              userName: Name,
              role: Role
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__.logOut)());
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__.logOut)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    account = _useState2[0],
    setAccount = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    userName = _useState4[0],
    setUserName = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    userID = _useState6[0],
    setUserId = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      id: 1,
      moduleName: 'Customer',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 2,
      moduleName: 'Item',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 3,
      moduleName: 'Item-Out',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 4,
      moduleName: 'Item-Return',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 5,
      moduleName: 'Item-Purchase',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 6,
      moduleName: 'Estimate',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 7,
      moduleName: 'Invoice',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 8,
      moduleName: 'Payment',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 9,
      moduleName: 'Project',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 10,
      moduleName: 'Purchase',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 11,
      moduleName: 'Maintenance',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 12,
      moduleName: 'Expenses',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 13,
      moduleName: 'Rate',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 14,
      moduleName: 'Employee',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 15,
      moduleName: 'Pay-Roll',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 16,
      moduleName: 'Grant-Access',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 17,
      moduleName: 'Purchase-Order',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 18,
      moduleName: 'Point-Of-Sell',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 19,
      moduleName: 'Reports',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 20,
      moduleName: 'Block-Factory',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 21,
      moduleName: 'Block-Mixer',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 22,
      moduleName: 'Backup',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }, {
      id: 23,
      moduleName: 'Layout-Print',
      access: {
        readM: false,
        createM: false,
        viewM: false,
        editM: false,
        deleteM: false
      }
    }]),
    _useState8 = _slicedToArray(_useState7, 2),
    modules = _useState8[0],
    setModules = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_27__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_28__.ENDPOINT_URL, "/employeeuser"));
          setAccount(res.data.data.reverse());
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
  var handleChange = newValue => {
    var selectedOptions = account.find(option => option === newValue);
    setUserName(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeeName);
    setUserId(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id);
  };
  var handleCheckBox = (i, type) => {
    var updateModule = [...modules];
    updateModule[i].access[type] = !updateModule[i].access[type];
    setModules(updateModule);
  };
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
    ErrorOpenModal = _useState12[0],
    setErrorOpenModal = _useState12[1];
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
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(function* (ReferenceInfo) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created Access For',
        reason: userName,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_27__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_28__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x) {
      return _ref9.apply(this, arguments);
    };
  }();
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    saving = _useState14[0],
    setSaving = _useState14[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      if (user.data.userName !== 'GG') {
        alert('Only GG can grant access.');
        return;
      }
      var data = {
        employeeName: userName,
        userID,
        modules
      };
      setSaving('true');
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_27__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_28__.ENDPOINT_URL, "/create-grantAccess"), data);
        if (res) {
          // Open Loading View
          var ReferenceInfo = res.data.data._id;
          handleCreateNotification(ReferenceInfo);
          handleOpen();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x2) {
      return _ref0.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_21__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_25__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Grant Access"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => navigate(-1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_29__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_37__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_36__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_26__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_23__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_24__["default"], {
    maxWidth: "lg",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    disableClearable: true,
    options: account,
    getOptionLabel: option => option.employeeName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], props, option.employeeName),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
      required: true
    }, params, {
      label: "User Name"
    })),
    onChange: (e, newValue) => handleChange(newValue ? newValue : ''),
    size: "small",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, modules.map((row, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: row.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, row.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '300px'
    }
  }, row.moduleName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      checked: row.access.readM,
      onChange: () => handleCheckBox(i, 'readM')
    }),
    label: "read"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      checked: row.access.createM,
      onChange: () => handleCheckBox(i, 'createM')
    }),
    label: "Create"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      checked: row.access.viewM,
      onChange: () => handleCheckBox(i, 'viewM')
    }),
    label: "View"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      checked: row.access.editM,
      onChange: () => handleCheckBox(i, 'editM')
    }),
    label: "Edit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      checked: row.access.deleteM,
      onChange: () => handleCheckBox(i, 'deleteM')
    }),
    label: "Delete"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, "Saving..."))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_13__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_32__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_30__["default"], {
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
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_13__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_32__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_31__["default"], {
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
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GrantAccessFormView);

/***/ },

/***/ "./src/js/component/SidebarDashE3.js"
/*!*******************************************!*\
  !*** ./src/js/component/SidebarDashE3.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_SidebarNew_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/SidebarNew.scss */ "./src/js/css/SidebarNew.scss");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/AccountBox.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/AssignmentInd.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/CurrencyExchange.js");
/* harmony import */ var _mui_icons_material_Groups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Groups */ "./node_modules/@mui/icons-material/Groups.js");
/* harmony import */ var _mui_icons_material_Payment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Payment */ "./node_modules/@mui/icons-material/Payment.js");
/* harmony import */ var _mui_icons_material_Contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Contacts */ "./node_modules/@mui/icons-material/Contacts.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");










function SidebarDashE3() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Rate"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Groups__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Employee"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Payment__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "PayRoll"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "User Account"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Grant Access"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Contacts__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Profile"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarDashE3);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfU2V0dGluZ3NWaWV3X0dyYW50QWNjZXNzRm9ybVZpZXdfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pELENBQWtEO0FBQ3pCO0FBQ21DO0FBQ1I7QUFDc0I7QUFDUjtBQUNrTjtBQUNyTztBQUNpQjtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDUTtBQUNBO0FBQ2M7QUFDSTtBQUN4QztBQUN3QjtBQUNJO0FBQ0U7QUFDTTtBQUNBO0FBQ1Y7QUFDTDtBQUNDO0FBQ087QUFDK0I7QUFDNUQ7QUFDZ0I7QUFDVTtBQUNFO0FBQ1E7QUFFOUQsSUFBTStELFlBQVksR0FBRzlDLDBEQUFNLENBQUMrQyxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDaERwRSwwREFBQSxDQUFDZ0MsOERBQU8sRUFBQXNDLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxLQUFBLENBQUxDLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBTzFDLDhEQUFj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SztRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUU7TUFBTTtJQUFFLENBQUMsRUFDdkg7TUFBRVAsRUFBRSxFQUFFLENBQUM7TUFBRUMsVUFBVSxFQUFFLE1BQU07TUFBRUMsTUFBTSxFQUFFO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRTtNQUFNO0lBQUUsQ0FBQyxFQUNuSDtNQUFFUCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxVQUFVLEVBQUUsVUFBVTtNQUFFQyxNQUFNLEVBQUU7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFO01BQU07SUFBRSxDQUFDLEVBQ3ZIO01BQUVQLEVBQUUsRUFBRSxDQUFDO01BQUVDLFVBQVUsRUFBRSxhQUFhO01BQUVDLE1BQU0sRUFBRTtRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUU7TUFBTTtJQUFFLENBQUMsRUFDMUg7TUFBRVAsRUFBRSxFQUFFLENBQUM7TUFBRUMsVUFBVSxFQUFFLGVBQWU7TUFBRUMsTUFBTSxFQUFFO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRTtNQUFNO0lBQUUsQ0FBQyxFQUM1SDtNQUFFUCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxVQUFVLEVBQUUsVUFBVTtNQUFFQyxNQUFNLEVBQUU7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFO01BQU07SUFBRSxDQUFDLEVBQ3ZIO01BQUVQLEVBQUUsRUFBRSxDQUFDO01BQUVDLFVBQVUsRUFBRSxTQUFTO01BQUVDLE1BQU0sRUFBRTtRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUU7TUFBTTtJQUFFLENBQUMsRUFDdEg7TUFBRVAsRUFBRSxFQUFFLENBQUM7TUFBRUMsVUFBVSxFQUFFLFNBQVM7TUFBRUMsTUFBTSxFQUFFO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRTtNQUFNO0lBQUUsQ0FBQyxFQUN0SDtNQUFFUCxFQUFFLEVBQUUsQ0FBQztNQUFFQyxVQUFVLEVBQUUsU0FBUztNQUFFQyxNQUFNLEVBQUU7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFO01BQU07SUFBRSxDQUFDLEVBQ3RIO01BQUVQLEVBQUUsRUFBRSxFQUFFO01BQUVDLFVBQVUsRUFBRSxVQUFVO01BQUVDLE1BQU0sRUFBRTtRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUU7TUFBTTtJQUFFLENBQUMsRUFDeEg7TUFBRVAsRUFBRSxFQUFFLEVBQUU7TUFBRUMsVUFBVSxFQUFFLGFBQWE7TUFBRUMsTUFBTSxFQUFFO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRTtNQUFNO0lBQUUsQ0FBQyxFQUMzSDtNQUFFUCxFQUFFLEVBQUUsRUFBRTtNQUFFQyxVQUFVLEVBQUUsVUFBVTtNQUFFQyxNQUFNLEVBQUU7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFO01BQU07SUFBRSxDQUFDLEVBQ3hIO01BQUVQLEVBQUUsRUFBRSxFQUFFO01BQUVDLFVBQVUsRUFBRSxNQUFNO01BQUVDLE1BQU0sRUFBRTtRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUU7TUFBTTtJQUFFLENBQUMsRUFDcEg7TUFBRVAsRUFBRSxFQUFFLEVBQUU7TUFBRUMsVUFBVSxFQUFFLFVBQVU7TUFBRUMsTUFBTSxFQUFFO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRTtNQUFNO0lBQUUsQ0FBQyxFQUN4SDtNQUFFUCxFQUFFLEVBQUUsRUFBRTtNQUFFQyxVQUFVLEVBQUUsVUFBVTtNQUFFQyxNQUFNLEVBQUU7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFO01BQU07SUFBRSxDQUFDLEVBQ3hIO01BQUVQLEVBQUUsRUFBRSxFQUFFO01BQUVDLFVBQVUsRUFBRSxjQUFjO01BQUVDLE1BQU0sRUFBRTtRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUU7TUFBTTtJQUFFLENBQUMsRUFDNUg7TUFBRVAsRUFBRSxFQUFFLEVBQUU7TUFBRUMsVUFBVSxFQUFFLGdCQUFnQjtNQUFFQyxNQUFNLEVBQUU7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFO01BQU07SUFBRSxDQUFDLEVBQzlIO01BQUVQLEVBQUUsRUFBRSxFQUFFO01BQUVDLFVBQVUsRUFBRSxlQUFlO01BQUVDLE1BQU0sRUFBRTtRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUU7TUFBTTtJQUFFLENBQUMsRUFDN0g7TUFBRVAsRUFBRSxFQUFFLEVBQUU7TUFBRUMsVUFBVSxFQUFFLFNBQVM7TUFBRUMsTUFBTSxFQUFFO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRTtNQUFNO0lBQUUsQ0FBQyxFQUN2SDtNQUFFUCxFQUFFLEVBQUUsRUFBRTtNQUFFQyxVQUFVLEVBQUUsZUFBZTtNQUFFQyxNQUFNLEVBQUU7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFO01BQU07SUFBRSxDQUFDLEVBQzdIO01BQUVQLEVBQUUsRUFBRSxFQUFFO01BQUVDLFVBQVUsRUFBRSxhQUFhO01BQUVDLE1BQU0sRUFBRTtRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUs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REFBWTtJQUFDaEUsRUFBRSxFQUFFO01BQUUxSixLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQzlFLDBEQUFBLENBQUNzUyxvRUFBWSxNQUFFLENBQ0gsQ0FBQyxlQUNmdFMsMERBQUEsQ0FBQ3lTLHNEQUFZO0lBQUNHLE9BQU8sRUFBQztFQUFTLENBQUUsQ0FDbkIsQ0FhaEIsQ0FBQztBQUVQO0FBRUEsaUVBQWV6UyxhQUFhLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9TZXR0aW5nc1ZpZXcvR3JhbnRBY2Nlc3NGb3JtVmlldy5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9TaWRlYmFyRGFzaEUzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwelwiXG59KSwgJ0Fycm93QmFjaycpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcydcclxuaW1wb3J0IFNpZGViYXJEYXNoRTMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoRTMnXHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudENpcmNsZSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBQYXBlciwgQm94LCBUZXh0RmllbGQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBJbnB1dEFkb3JubWVudCwgVHlwb2dyYXBoeSwgc3R5bGVkLCBTZWxlY3QsIEZvcm1MYWJlbCwgUmFkaW9Hcm91cCwgRm9ybUNvbnRyb2xMYWJlbCwgUmFkaW8sIEF1dG9jb21wbGV0ZSwgT3V0bGluZWRJbnB1dCwgTW9kYWwsIEJhY2tkcm9wLCBGYWRlLCBJbnB1dCwgRGl2aWRlciwgQ2hlY2tib3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgVmlzaWJpbGl0eSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHknO1xyXG5pbXBvcnQgVmlzaWJpbGl0eU9mZiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHlPZmYnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IEFkZCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5cclxuY29uc3QgTGlnaHRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5mdW5jdGlvbiBHcmFudEFjY2Vzc0Zvcm1WaWV3KCkge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3VzZXJJRCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbW9kdWxlcywgc2V0TW9kdWxlc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7IGlkOiAxLCBtb2R1bGVOYW1lOiAnQ3VzdG9tZXInLCBhY2Nlc3M6IHsgcmVhZE06IGZhbHNlLCBjcmVhdGVNOiBmYWxzZSwgdmlld006IGZhbHNlLCBlZGl0TTogZmFsc2UsIGRlbGV0ZU06IGZhbHNlIH0gfSxcclxuICAgIHsgaWQ6IDIsIG1vZHVsZU5hbWU6ICdJdGVtJywgYWNjZXNzOiB7IHJlYWRNOiBmYWxzZSwgY3JlYXRlTTogZmFsc2UsIHZpZXdNOiBmYWxzZSwgZWRpdE06IGZhbHNlLCBkZWxldGVNOiBmYWxzZSB9IH0sXHJcbiAgICB7IGlkOiAzLCBtb2R1bGVOYW1lOiAnSXRlbS1PdXQnLCBhY2Nlc3M6IHsgcmVhZE06IGZhbHNlLCBjcmVhdGVNOiBmYWxzZSwgdmlld006IGZhbHNlLCBlZGl0TTogZmFsc2UsIGRlbGV0ZU06IGZhbHNlIH0gfSxcclxuICAgIHsgaWQ6IDQsIG1vZHVsZU5hbWU6ICdJdGVtLVJldHVybicsIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfSB9LFxyXG4gICAgeyBpZDogNSwgbW9kdWxlTmFtZTogJ0l0ZW0tUHVyY2hhc2UnLCBhY2Nlc3M6IHsgcmVhZE06IGZhbHNlLCBjcmVhdGVNOiBmYWxzZSwgdmlld006IGZhbHNlLCBlZGl0TTogZmFsc2UsIGRlbGV0ZU06IGZhbHNlIH0gfSxcclxuICAgIHsgaWQ6IDYsIG1vZHVsZU5hbWU6ICdFc3RpbWF0ZScsIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfSB9LFxyXG4gICAgeyBpZDogNywgbW9kdWxlTmFtZTogJ0ludm9pY2UnLCBhY2Nlc3M6IHsgcmVhZE06IGZhbHNlLCBjcmVhdGVNOiBmYWxzZSwgdmlld006IGZhbHNlLCBlZGl0TTogZmFsc2UsIGRlbGV0ZU06IGZhbHNlIH0gfSxcclxuICAgIHsgaWQ6IDgsIG1vZHVsZU5hbWU6ICdQYXltZW50JywgYWNjZXNzOiB7IHJlYWRNOiBmYWxzZSwgY3JlYXRlTTogZmFsc2UsIHZpZXdNOiBmYWxzZSwgZWRpdE06IGZhbHNlLCBkZWxldGVNOiBmYWxzZSB9IH0sXHJcbiAgICB7IGlkOiA5LCBtb2R1bGVOYW1lOiAnUHJvamVjdCcsIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfSB9LFxyXG4gICAgeyBpZDogMTAsIG1vZHVsZU5hbWU6ICdQdXJjaGFzZScsIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfSB9LFxyXG4gICAgeyBpZDogMTEsIG1vZHVsZU5hbWU6ICdNYWludGVuYW5jZScsIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfSB9LFxyXG4gICAgeyBpZDogMTIsIG1vZHVsZU5hbWU6ICdFeHBlbnNlcycsIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfSB9LFxyXG4gICAgeyBpZDogMTMsIG1vZHVsZU5hbWU6ICdSYXRlJywgYWNjZXNzOiB7IHJlYWRNOiBmYWxzZSwgY3JlYXRlTTogZmFsc2UsIHZpZXdNOiBmYWxzZSwgZWRpdE06IGZhbHNlLCBkZWxldGVNOiBmYWxzZSB9IH0sXHJcbiAgICB7IGlkOiAxNCwgbW9kdWxlTmFtZTogJ0VtcGxveWVlJywgYWNjZXNzOiB7IHJlYWRNOiBmYWxzZSwgY3JlYXRlTTogZmFsc2UsIHZpZXdNOiBmYWxzZSwgZWRpdE06IGZhbHNlLCBkZWxldGVNOiBmYWxzZSB9IH0sXHJcbiAgICB7IGlkOiAxNSwgbW9kdWxlTmFtZTogJ1BheS1Sb2xsJywgYWNjZXNzOiB7IHJlYWRNOiBmYWxzZSwgY3JlYXRlTTogZmFsc2UsIHZpZXdNOiBmYWxzZSwgZWRpdE06IGZhbHNlLCBkZWxldGVNOiBmYWxzZSB9IH0sXHJcbiAgICB7IGlkOiAxNiwgbW9kdWxlTmFtZTogJ0dyYW50LUFjY2VzcycsIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfSB9LFxyXG4gICAgeyBpZDogMTcsIG1vZHVsZU5hbWU6ICdQdXJjaGFzZS1PcmRlcicsIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfSB9LFxyXG4gICAgeyBpZDogMTgsIG1vZHVsZU5hbWU6ICdQb2ludC1PZi1TZWxsJywgYWNjZXNzOiB7IHJlYWRNOiBmYWxzZSwgY3JlYXRlTTogZmFsc2UsIHZpZXdNOiBmYWxzZSwgZWRpdE06IGZhbHNlLCBkZWxldGVNOiBmYWxzZSB9IH0sXHJcbiAgICB7IGlkOiAxOSwgbW9kdWxlTmFtZTogJ1JlcG9ydHMnLCBhY2Nlc3M6IHsgcmVhZE06IGZhbHNlLCBjcmVhdGVNOiBmYWxzZSwgdmlld006IGZhbHNlLCBlZGl0TTogZmFsc2UsIGRlbGV0ZU06IGZhbHNlIH0gfSxcclxuICAgIHsgaWQ6IDIwLCBtb2R1bGVOYW1lOiAnQmxvY2stRmFjdG9yeScsIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfSB9LFxyXG4gICAgeyBpZDogMjEsIG1vZHVsZU5hbWU6ICdCbG9jay1NaXhlcicsIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfSB9LFxyXG4gICAgeyBpZDogMjIsIG1vZHVsZU5hbWU6ICdCYWNrdXAnLCBhY2Nlc3M6IHsgcmVhZE06IGZhbHNlLCBjcmVhdGVNOiBmYWxzZSwgdmlld006IGZhbHNlLCBlZGl0TTogZmFsc2UsIGRlbGV0ZU06IGZhbHNlIH0gfSxcclxuICAgIHsgaWQ6IDIzLCBtb2R1bGVOYW1lOiAnTGF5b3V0LVByaW50JywgYWNjZXNzOiB7IHJlYWRNOiBmYWxzZSwgY3JlYXRlTTogZmFsc2UsIHZpZXdNOiBmYWxzZSwgZWRpdE06IGZhbHNlLCBkZWxldGVNOiBmYWxzZSB9IH0sXHJcbiAgXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVldXNlcmApXHJcbiAgICAgICAgc2V0QWNjb3VudChyZXMuZGF0YS5kYXRhLnJldmVyc2UoKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBhY2NvdW50LmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uID09PSBuZXdWYWx1ZSlcclxuICAgIHNldFVzZXJOYW1lKHNlbGVjdGVkT3B0aW9ucz8uZW1wbG95ZWVOYW1lKTtcclxuICAgIHNldFVzZXJJZChzZWxlY3RlZE9wdGlvbnM/Ll9pZCk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrQm94ID0gKGksIHR5cGUpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZU1vZHVsZSA9IFsuLi5tb2R1bGVzXVxyXG4gICAgdXBkYXRlTW9kdWxlW2ldLmFjY2Vzc1t0eXBlXSA9ICF1cGRhdGVNb2R1bGVbaV0uYWNjZXNzW3R5cGVdXHJcbiAgICBzZXRNb2R1bGVzKHVwZGF0ZU1vZHVsZSlcclxuICB9XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuXHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcblxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEZWNpc2lvbiA9IChuYXZpZ2F0ZSkgPT4ge1xyXG4gICAgLy9OYXZpZ2F0ZSBCYXNlZCBvbiB0aCBEZWNpc2lvblxyXG4gICAgaWYgKG5hdmlnYXRlID09PSAncHJldmlvdXMnKSB7XHJcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgIH0gZWxzZSBpZiAobmF2aWdhdGUgPT09ICdzdGF5Jykge1xyXG4gICAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoUmVmZXJlbmNlSW5mbykgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBSZWZlcmVuY2VJbmZvLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgQ3JlYXRlZCBBY2Nlc3MgRm9yJyxcclxuICAgICAgcmVhc29uOiB1c2VyTmFtZSxcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHVzZXIuZGF0YS51c2VyTmFtZSAhPT0gJ0dHJykge1xyXG4gICAgICBhbGVydCgnT25seSBHRyBjYW4gZ3JhbnQgYWNjZXNzLicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBlbXBsb3llZU5hbWU6IHVzZXJOYW1lLFxyXG4gICAgICB1c2VySUQsXHJcbiAgICAgIG1vZHVsZXNcclxuICAgIH07XHJcbiAgICBzZXRTYXZpbmcoJ3RydWUnKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ncmFudEFjY2Vzc2AsIGRhdGEpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgLy8gT3BlbiBMb2FkaW5nIFZpZXdcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvID0gcmVzLmRhdGEuZGF0YS5faWRcclxuICAgICAgICBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oUmVmZXJlbmNlSW5mbylcclxuICAgICAgICBoYW5kbGVPcGVuKCk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBzZXRTYXZpbmcoJycpXHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEdyYW50IEFjY2Vzc1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKC0xKX0+XHJcbiAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaWRlQmFyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNpZGVCYXIoZmFsc2UpfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRhc2hFMyAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3g9e3sgbXQ6IDQgfX0gPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2FjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5lbXBsb3llZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfT57b3B0aW9uLmVtcGxveWVlTmFtZX08L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHJlcXVpcmVkIHsuLi5wYXJhbXN9IGxhYmVsPVwiVXNlciBOYW1lXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKG5ld1ZhbHVlID8gbmV3VmFsdWUgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlcy5tYXAoKHJvdywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvdy5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMzAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93Lm1vZHVsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cm93LmFjY2Vzcy5yZWFkTX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrQm94KGksICdyZWFkTScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J3JlYWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Jvdy5hY2Nlc3MuY3JlYXRlTX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrQm94KGksICdjcmVhdGVNJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ3JlYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Jvdy5hY2Nlc3Mudmlld019XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVja0JveChpLCAndmlld00nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdWaWV3J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Jvdy5hY2Nlc3MuZWRpdE19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVja0JveChpLCAnZWRpdE0nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFZGl0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Jvdy5hY2Nlc3MuZGVsZXRlTX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrQm94KGksICdkZWxldGVNJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGVsZXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzYXZpbmcgIT09ICd0cnVlJyA/IDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+IDogPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+U2F2aW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdzdGF5Jyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBBZGQgTmV3XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3ByZXZpb3VzJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5TYXZpbmcgRmFpbGVkPC9oMj5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9J3R4dDEnIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+UHJvamVjdCBuYW1lIGNhbiBvbmx5IGJlIGNyZWF0ZWQgb25jZSBmb3IgcHVyY2hhc2U8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFudEFjY2Vzc0Zvcm1WaWV3XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3MvU2lkZWJhck5ldy5zY3NzJ1xyXG5pbXBvcnQgeyBPdXRsZXQsIE5hdkxpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgQWNjb3VudEJveCwgQWxsSW5jbHVzaXZlLCBIb21lLCBBc3NpZ25tZW50SW5kLCBTdXBlcnZpc2VkVXNlckNpcmNsZSwgQ3VycmVuY3lFeGNoYW5nZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3MnO1xyXG5pbXBvcnQgR3JvdXBzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0dyb3Vwcyc7XHJcbmltcG9ydCBQYXltZW50SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1BheW1lbnQnO1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBDb250YWN0c0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Db250YWN0cyc7XHJcbmltcG9ydCB7IExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5mdW5jdGlvbiBTaWRlYmFyRGFzaEUzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8Q3VycmVuY3lFeGNoYW5nZSAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlJhdGVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxHcm91cHNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRW1wbG95ZWVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxQYXltZW50SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlBheVJvbGxcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8QWNjb3VudEJveCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlVzZXIgQWNjb3VudFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8QXNzaWdubWVudEluZCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkdyYW50IEFjY2Vzc1wiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPENvbnRhY3RzSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlByb2ZpbGVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICB7LyogPGxpIGNsYXNzTmFtZT0nTGlzdHJvd2Rhc2gnID5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL1JvbGVQZXJtaXNzaW9uXCIgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOidub25lJyxcclxuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc0NXB4JywgZmxleFdyYXA6ICdub3dyYXAnLCBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICBmbGV4OiAnd3JhcCcsY29sb3I6ICd3aGl0ZScsIGFsaWduSXRlbXM6J2NlbnRlcicsIG1hcmdpbkxlZnQ6JzIwcHgnLCBnYXA6JzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2ljb24xJz5cclxuICAgICAgICAgICAgICAgICAgICAgPFN1cGVydmlzZWRVc2VyQ2lyY2xlLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSd0aXRsZWxpc3QnPiBSb2xlUGVybWlzc2lvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICA8L2xpPiovfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyRGFzaEUzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyRGFzaEUzIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlBhcGVyIiwiQm94IiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiSW5wdXRBZG9ybm1lbnQiLCJUeXBvZ3JhcGh5Iiwic3R5bGVkIiwiU2VsZWN0IiwiRm9ybUxhYmVsIiwiUmFkaW9Hcm91cCIsIkZvcm1Db250cm9sTGFiZWwiLCJSYWRpbyIsIkF1dG9jb21wbGV0ZSIsIk91dGxpbmVkSW5wdXQiLCJNb2RhbCIsIkJhY2tkcm9wIiwiRmFkZSIsIklucHV0IiwiRGl2aWRlciIsIkNoZWNrYm94IiwidXNlTmF2aWdhdGUiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJBcnJvd0JhY2siLCJWaXNpYmlsaXR5IiwiVmlzaWJpbGl0eU9mZiIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2FkZXIiLCJMb2dvdXQiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwidjQiLCJBZGQiLCJEZWxldGVJY29uIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiTGlnaHRUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJCbGFja1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNSIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmNiIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkdyYW50QWNjZXNzRm9ybVZpZXciLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmNyIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInNldFVzZXJOYW1lIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJ1c2VySUQiLCJzZXRVc2VySWQiLCJfdXNlU3RhdGU3IiwiaWQiLCJtb2R1bGVOYW1lIiwiYWNjZXNzIiwicmVhZE0iLCJjcmVhdGVNIiwidmlld00iLCJlZGl0TSIsImRlbGV0ZU0iLCJfdXNlU3RhdGU4IiwibW9kdWxlcyIsInNldE1vZHVsZXMiLCJmZXRjaERhdGEiLCJfcmVmOCIsInJldmVyc2UiLCJoYW5kbGVDaGFuZ2UiLCJuZXdWYWx1ZSIsInNlbGVjdGVkT3B0aW9ucyIsImZpbmQiLCJvcHRpb24iLCJfaWQiLCJoYW5kbGVDaGVja0JveCIsImkiLCJ0eXBlIiwidXBkYXRlTW9kdWxlIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVEZWNpc2lvbiIsImhpc3RvcnkiLCJiYWNrIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjkiLCJSZWZlcmVuY2VJbmZvIiwiaWRJbmZvIiwicGVyc29uIiwicmVhc29uIiwiZGF0ZU5vdGlmaWNhdGlvbiIsIkRhdGUiLCJwb3N0IiwibG9nIiwiX3giLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0Iiwic2F2aW5nIiwic2V0U2F2aW5nIiwiaGFuZGxlU3VibWl0IiwiX3JlZjAiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsIl94MiIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm9uQ2xpY2siLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsIm5hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJpdGVtIiwieHMiLCJkaXNhYmxlQ2xlYXJhYmxlIiwib3B0aW9ucyIsImdldE9wdGlvbkxhYmVsIiwicmVuZGVyT3B0aW9uIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJyZXF1aXJlZCIsImxhYmVsIiwib25DaGFuZ2UiLCJzaXplIiwibWFwIiwicm93Iiwia2V5IiwidGV4dEFsaWduIiwiY29udHJvbCIsImNoZWNrZWQiLCJvbkNsb3NlIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwiZ2FwIiwiT3V0bGV0IiwiTmF2TGluayIsInVzZUxvY2F0aW9uIiwiQWNjb3VudEJveCIsIkFsbEluY2x1c2l2ZSIsIkhvbWUiLCJBc3NpZ25tZW50SW5kIiwiU3VwZXJ2aXNlZFVzZXJDaXJjbGUiLCJDdXJyZW5jeUV4Y2hhbmdlIiwiU2V0dGluZ3NJY29uIiwiR3JvdXBzSWNvbiIsIlBheW1lbnRJY29uIiwiRGFzaGJvYXJkSWNvbiIsIkNvbnRhY3RzSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsIkZyYWdtZW50IiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=