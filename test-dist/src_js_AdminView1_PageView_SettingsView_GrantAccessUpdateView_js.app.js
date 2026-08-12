"use strict";
exports.id = "src_js_AdminView1_PageView_SettingsView_GrantAccessUpdateView_js";
exports.ids = ["src_js_AdminView1_PageView_SettingsView_GrantAccessUpdateView_js"];
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

/***/ "./src/js/AdminView1/PageView/SettingsView/GrantAccessUpdateView.js"
/*!**************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/SettingsView/GrantAccessUpdateView.js ***!
  \**************************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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


































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
function GrantAccessUpdateView() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_33__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_33__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__.setUser)({
              userName: Name,
              role: Role
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__.logOut)());
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__.logOut)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    userName = _useState2[0],
    setUserName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    modules = _useState4[0],
    setModules = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/get-grantAccess/").concat(id));
          setUserName(res.data.data.employeeName);
          var fetchedModules = res.data.data.modules;

          // Ensure Reports module is present even for old records
          if (!fetchedModules.find(m => m.moduleName === 'Reports')) {
            fetchedModules.push({
              id: 19,
              moduleName: 'Reports',
              access: {
                readM: false,
                createM: false,
                viewM: false,
                editM: false,
                deleteM: false
              }
            });
          }
          if (!fetchedModules.find(m => m.moduleName === 'Block-Factory')) {
            fetchedModules.push({
              id: 20,
              moduleName: 'Block-Factory',
              access: {
                readM: false,
                createM: false,
                viewM: false,
                editM: false,
                deleteM: false
              }
            });
          }
          // Ensure Block-Mixer module is present even for old records
          if (!fetchedModules.find(m => m.moduleName === 'Block-Mixer')) {
            fetchedModules.push({
              id: 21,
              moduleName: 'Block-Mixer',
              access: {
                readM: false,
                createM: false,
                viewM: false,
                editM: false,
                deleteM: false
              }
            });
          }
          // Ensure Backup module is present even for old records
          if (!fetchedModules.find(m => m.moduleName === 'Backup')) {
            fetchedModules.push({
              id: 22,
              moduleName: 'Backup',
              access: {
                readM: false,
                createM: false,
                viewM: false,
                editM: false,
                deleteM: false
              }
            });
          }
          // Ensure Layout-Print module is present even for old records
          if (!fetchedModules.find(m => m.moduleName === 'Layout-Print')) {
            fetchedModules.push({
              id: 23,
              moduleName: 'Layout-Print',
              access: {
                readM: false,
                createM: false,
                viewM: false,
                editM: false,
                deleteM: false
              }
            });
          }
          setModules(fetchedModules);
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
  var handleCheckBox = (i, type) => {
    var updateModule = [...modules];
    updateModule[i].access[type] = !updateModule[i].access[type];
    setModules(updateModule);
  };
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingOpenModal = _useState8[0],
    setLoadingOpenModal = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    ErrorOpenModal = _useState0[0],
    setErrorOpenModal = _useState0[1];
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
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(function* () {
      var data = {
        idInfo: id,
        person: user.data.userName + ' Modify',
        reason: 'Access For' + userName,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/create-notification/"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateComment() {
      return _ref9.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      if (user.data.userName !== 'GG') {
        alert('Only GG can modify access.');
        return;
      }
      var data = {
        modules
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/update-grantAccess/").concat(id), data);
        if (res) {
          // Open Loading View
          handleCreateComment();
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmit(_x) {
      return _ref0.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_20__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_24__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Grant Access"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => navigate(-1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_28__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_36__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_35__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_32__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_25__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
    name: "userName",
    label: "User Name",
    value: userName
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      checked: row.access.readM,
      onChange: () => handleCheckBox(i, 'readM')
    }),
    label: "read"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      checked: row.access.createM,
      onChange: () => handleCheckBox(i, 'createM')
    }),
    label: "Create"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      checked: row.access.viewM,
      onChange: () => handleCheckBox(i, 'viewM')
    }),
    label: "View"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      checked: row.access.editM,
      onChange: () => handleCheckBox(i, 'editM')
    }),
    label: "Edit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      checked: row.access.deleteM,
      onChange: () => handleCheckBox(i, 'deleteM')
    }),
    label: "Delete"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_12__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_31__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_29__["default"], {
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
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_12__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_31__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_30__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GrantAccessUpdateView);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfU2V0dGluZ3NWaWV3X0dyYW50QWNjZXNzVXBkYXRlVmlld19qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiOztBQUVBLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUF1QjtBQUMzRSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7QUFDN0MsZUFBZSxrQkFBZTtBQUM5QjtBQUNBLENBQUMsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRCxDQUFrRDtBQUN6QjtBQUNtQztBQUNSO0FBQ3NCO0FBQ1I7QUFDa047QUFDMU47QUFDTTtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDUTtBQUNBO0FBQ2M7QUFDSTtBQUN4QztBQUN3QjtBQUNJO0FBQ0U7QUFDTTtBQUNBO0FBQ1Y7QUFDTDtBQUNDO0FBQ087QUFDK0I7QUFDNUQ7QUFDZ0I7QUFDVTtBQUNFO0FBQ1E7QUFFOUQsSUFBTWdFLFlBQVksR0FBRy9DLDBEQUFNLENBQUNnRCxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDaERyRSwwREFBQSxDQUFDaUMsOERBQU8sRUFBQXNDLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxLQUFBLENBQUxDLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBTzFDLDhEQUFjLENBQUMyQyxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxLQUFLO01BQ3RCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQztNQUMzQkMsUUFBUSxFQUFFO0lBQ1o7RUFDRixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBQ0gsSUFBTUMsWUFBWSxHQUFHbEUsMERBQU0sQ0FBQ21FLEtBQUE7RUFBQSxJQUFHbEIsU0FBUyxHQUFBa0IsS0FBQSxDQUFUbEIsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFnQixLQUFBLEVBQUFDLFVBQUE7RUFBQSxvQkFDaERyRiwwREFBQSxDQUFDaUMsOERBQU8sRUFBQXNDLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDb0IsS0FBQTtFQUFBLElBQUdYLEtBQUssR0FBQVcsS0FBQSxDQUFMWCxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU8xQyw4REFBYyxDQUFDMkMsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsU0FBUztNQUMxQkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDM0JDLFFBQVEsRUFBRTtJQUNaO0VBQ0YsQ0FBQztBQUFBLENBQUMsQ0FBQztBQUNILElBQU1LLEtBQUssR0FBRztFQUNaQyxRQUFRLEVBQUUsVUFBVTtFQUNwQkMsR0FBRyxFQUFFLEtBQUs7RUFDVkMsSUFBSSxFQUFFLEtBQUs7RUFDWEMsU0FBUyxFQUFFLHVCQUF1QjtFQUNsQ0MsS0FBSyxFQUFFLEdBQUc7RUFDVkMsT0FBTyxFQUFFLGtCQUFrQjtFQUMzQmIsU0FBUyxFQUFFLEVBQUU7RUFDYmMsRUFBRSxFQUFFLENBQUM7RUFDTEMsRUFBRSxFQUFFLENBQUM7RUFDTEMsRUFBRSxFQUFFO0FBQ04sQ0FBQztBQUVELElBQU1DLFdBQVcsR0FBRyxHQUFHO0FBQ3ZCLElBQU1DLE1BQU0sR0FBR2pGLDBEQUFNLENBQUNrQiw2REFBUyxFQUFFO0VBQy9CZ0UsaUJBQWlCLEVBQUdDLElBQUksSUFBS0EsSUFBSSxLQUFLO0FBQ3hDLENBQUMsQ0FBQyxDQUFDQyxLQUFBO0VBQUEsSUFBRzFCLEtBQUssR0FBQTBCLEtBQUEsQ0FBTDFCLEtBQUs7SUFBRTJCLElBQUksR0FBQUQsS0FBQSxDQUFKQyxJQUFJO0VBQUEsT0FBQUMsYUFBQTtJQUNmQyxNQUFNLEVBQUU3QixLQUFLLENBQUM2QixNQUFNLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQy9CQyxVQUFVLEVBQUUvQixLQUFLLENBQUNnQyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRTtNQUN4REMsTUFBTSxFQUFFbEMsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7TUFDdENDLFFBQVEsRUFBRXBDLEtBQUssQ0FBQ2dDLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDQztJQUN2QyxDQUFDO0VBQUMsR0FDRVYsSUFBSSxJQUFJO0lBQ1ZXLFVBQVUsRUFBRWhCLFdBQVc7SUFDdkJMLEtBQUssaUJBQUFoQixNQUFBLENBQWlCcUIsV0FBVyxRQUFLO0lBQ3RDUyxVQUFVLEVBQUUvQixLQUFLLENBQUNnQyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRTtNQUN4REMsTUFBTSxFQUFFbEMsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7TUFDdENDLFFBQVEsRUFBRXBDLEtBQUssQ0FBQ2dDLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDRztJQUN2QyxDQUFDO0VBQ0gsQ0FBQztBQUFBLENBQ0QsQ0FBQztBQUNILElBQU1DLE1BQU0sR0FBR2xHLDBEQUFNLENBQUNxQiw2REFBUyxFQUFFO0VBQUU2RCxpQkFBaUIsRUFBR0MsSUFBSSxJQUFLQSxJQUFJLEtBQUs7QUFBTyxDQUFDLENBQUMsQ0FDaEZnQixLQUFBO0VBQUEsSUFBR3pDLEtBQUssR0FBQXlDLEtBQUEsQ0FBTHpDLEtBQUs7SUFBRTJCLElBQUksR0FBQWMsS0FBQSxDQUFKZCxJQUFJO0VBQUEsT0FBUTtJQUNwQixvQkFBb0IsRUFBQUMsYUFBQTtNQUNsQmYsUUFBUSxFQUFFLFVBQVU7TUFDcEI2QixVQUFVLEVBQUUsUUFBUTtNQUNwQnpCLEtBQUssRUFBRUssV0FBVztNQUNsQlMsVUFBVSxFQUFFL0IsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQzVDQyxNQUFNLEVBQUVsQyxLQUFLLENBQUNnQyxXQUFXLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztRQUN0Q0MsUUFBUSxFQUFFcEMsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDSSxRQUFRLENBQUNHO01BQ3ZDLENBQUMsQ0FBQztNQUNGSSxTQUFTLEVBQUU7SUFBWSxHQUNuQixDQUFDaEIsSUFBSSxJQUFJO01BQ1hpQixTQUFTLEVBQUUsUUFBUTtNQUNuQmIsVUFBVSxFQUFFL0IsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQzVDQyxNQUFNLEVBQUVsQyxLQUFLLENBQUNnQyxXQUFXLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztRQUN0Q0MsUUFBUSxFQUFFcEMsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDSSxRQUFRLENBQUNDO01BQ3ZDLENBQUMsQ0FBQztNQUNGcEIsS0FBSyxFQUFFakIsS0FBSyxDQUFDNkMsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUN2QixDQUFDN0MsS0FBSyxDQUFDOEMsV0FBVyxDQUFDQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUc7UUFDNUI5QixLQUFLLEVBQUVqQixLQUFLLENBQUM2QyxPQUFPLENBQUMsQ0FBQztNQUN4QjtJQUNGLENBQUM7RUFFTCxDQUFDO0FBQUEsQ0FDSCxDQUFDO0FBQ0QsU0FBU0cscUJBQXFCQSxDQUFBLEVBQUc7RUFDL0IsSUFBQUMsVUFBQSxHQUFlNUYsNERBQVMsQ0FBQyxDQUFDO0lBQWxCNkYsRUFBRSxHQUFBRCxVQUFBLENBQUZDLEVBQUU7RUFDVixJQUFNQyxRQUFRLEdBQUcvRiw4REFBVyxDQUFDLENBQUM7RUFDOUIsSUFBTWdHLFFBQVEsR0FBR3pFLHlEQUFXLENBQUMsQ0FBQztFQUM5QixJQUFNMEUsSUFBSSxHQUFHekUseURBQVcsQ0FBQ0Usd0VBQWlCLENBQUM7RUFFM0N4RCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNZ0ksWUFBWSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDakQsSUFBTUMsU0FBUztNQUFBLElBQUFDLEtBQUEsR0FBQUMsaUJBQUEsQ0FBRyxhQUFZO1FBQzVCLElBQUlMLFlBQVksRUFBRTtVQUNoQixJQUFJO1lBQ0YsSUFBTU0sR0FBRyxTQUFTMUYsOENBQUssQ0FBQzJGLEdBQUcsSUFBQTVELE1BQUEsQ0FBSTlCLHFEQUFZLHdCQUFBOEIsTUFBQSxDQUFxQnFELFlBQVksQ0FBRSxDQUFDO1lBQy9FLElBQU1RLElBQUksR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsWUFBWTtZQUN2QyxJQUFNQyxJQUFJLEdBQUdMLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNHLElBQUk7WUFDL0JkLFFBQVEsQ0FBQ3JFLGtFQUFPLENBQUM7Y0FBRW9GLFFBQVEsRUFBRUwsSUFBSTtjQUFFSSxJQUFJLEVBQUVEO1lBQUssQ0FBQyxDQUFDLENBQUM7VUFDbkQsQ0FBQyxDQUFDLE9BQU9HLEtBQUssRUFBRTtZQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO1lBQzVDaEIsUUFBUSxDQUFDdkUsaUVBQU0sQ0FBQyxDQUFDLENBQUM7VUFDcEI7UUFDRixDQUFDLE1BQU07VUFDTHNFLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDZjtNQUNGLENBQUM7TUFBQSxnQkFkS00sU0FBU0EsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQVksS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQWNkO0lBQ0RkLFNBQVMsQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxFQUFFLENBQUNMLFFBQVEsQ0FBQyxDQUFDO0VBRWQsSUFBTW9CLFlBQVksR0FBR0EsQ0FBQSxLQUFNO0lBQ3pCakIsWUFBWSxDQUFDa0IsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQnJCLFFBQVEsQ0FBQ3ZFLGlFQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xCc0UsUUFBUSxDQUFDLEdBQUcsQ0FBQztFQUNmLENBQUM7RUFDRCxJQUFBdUIsZUFBQSxHQUE4QnJKLHFEQUFjLENBQUMsSUFBSSxDQUFDO0lBQUFzSixnQkFBQSxHQUFBQyxjQUFBLENBQUFGLGVBQUE7SUFBM0NHLE9BQU8sR0FBQUYsZ0JBQUE7SUFBRUcsVUFBVSxHQUFBSCxnQkFBQTtFQUMxQixJQUFNSSxZQUFZLEdBQUdBLENBQUEsS0FBTTtJQUN6QkQsVUFBVSxDQUFDLENBQUNELE9BQU8sQ0FBQztFQUN0QixDQUFDO0VBQ0QsSUFBQUcsU0FBQSxHQUFnQ3pKLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUEwSixVQUFBLEdBQUFMLGNBQUEsQ0FBQUksU0FBQTtJQUFyQ2IsUUFBUSxHQUFBYyxVQUFBO0lBQUVDLFdBQVcsR0FBQUQsVUFBQTtFQUM1QixJQUFBRSxVQUFBLEdBQThCNUosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTZKLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQW5DRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBQzFCOUosZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBTWlLLFNBQVM7TUFBQSxJQUFBQyxLQUFBLEdBQUE3QixpQkFBQSxDQUFHLGFBQVk7UUFDNUIsSUFBSTtVQUNGLElBQU1DLEdBQUcsU0FBUzFGLDhDQUFLLENBQUMyRixHQUFHLElBQUE1RCxNQUFBLENBQUk5QixxREFBWSx1QkFBQThCLE1BQUEsQ0FBb0JpRCxFQUFFLENBQUUsQ0FBQztVQUNwRWdDLFdBQVcsQ0FBQ3RCLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNDLFlBQVksQ0FBQztVQUN2QyxJQUFJeUIsY0FBYyxHQUFHN0IsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ3NCLE9BQU87O1VBRTFDO1VBQ0EsSUFBSSxDQUFDSSxjQUFjLENBQUNDLElBQUksQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLFVBQVUsS0FBSyxTQUFTLENBQUMsRUFBRTtZQUN6REgsY0FBYyxDQUFDSSxJQUFJLENBQUM7Y0FDbEIzQyxFQUFFLEVBQUUsRUFBRTtjQUNOMEMsVUFBVSxFQUFFLFNBQVM7Y0FDckJFLE1BQU0sRUFBRTtnQkFBRUMsS0FBSyxFQUFFLEtBQUs7Z0JBQUVDLE9BQU8sRUFBRSxLQUFLO2dCQUFFQyxLQUFLLEVBQUUsS0FBSztnQkFBRUMsS0FBSyxFQUFFLEtBQUs7Z0JBQUVDLE9BQU8sRUFBRTtjQUFNO1lBQ3JGLENBQUMsQ0FBQztVQUNKO1VBQ0EsSUFBSSxDQUFDVixjQUFjLENBQUNDLElBQUksQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLFVBQVUsS0FBSyxlQUFlLENBQUMsRUFBRTtZQUMvREgsY0FBYyxDQUFDSSxJQUFJLENBQUM7Y0FDbEIzQyxFQUFFLEVBQUUsRUFBRTtjQUNOMEMsVUFBVSxFQUFFLGVBQWU7Y0FDM0JFLE1BQU0sRUFBRTtnQkFBRUMsS0FBSyxFQUFFLEtBQUs7Z0JBQUVDLE9BQU8sRUFBRSxLQUFLO2dCQUFFQyxLQUFLLEVBQUUsS0FBSztnQkFBRUMsS0FBSyxFQUFFLEtBQUs7Z0JBQUVDLE9BQU8sRUFBRTtjQUFNO1lBQ3JGLENBQUMsQ0FBQztVQUNKO1VBQ0E7VUFDQSxJQUFJLENBQUNWLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsVUFBVSxLQUFLLGFBQWEsQ0FBQyxFQUFFO1lBQzdESCxjQUFjLENBQUNJLElBQUksQ0FBQztjQUNsQjNDLEVBQUUsRUFBRSxFQUFFO2NBQ04wQyxVQUFVLEVBQUUsYUFBYTtjQUN6QkUsTUFBTSxFQUFFO2dCQUFFQyxLQUFLLEVBQUUsS0FBSztnQkFBRUMsT0FBTyxFQUFFLEtBQUs7Z0JBQUVDLEtBQUssRUFBRSxLQUFLO2dCQUFFQyxLQUFLLEVBQUUsS0FBSztnQkFBRUMsT0FBTyxFQUFFO2NBQU07WUFDckYsQ0FBQyxDQUFDO1VBQ0o7VUFDQTtVQUNBLElBQUksQ0FBQ1YsY0FBYyxDQUFDQyxJQUFJLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxVQUFVLEtBQUssUUFBUSxDQUFDLEVBQUU7WUFDeERILGNBQWMsQ0FBQ0ksSUFBSSxDQUFDO2NBQ2xCM0MsRUFBRSxFQUFFLEVBQUU7Y0FDTjBDLFVBQVUsRUFBRSxRQUFRO2NBQ3BCRSxNQUFNLEVBQUU7Z0JBQUVDLEtBQUssRUFBRSxLQUFLO2dCQUFFQyxPQUFPLEVBQUUsS0FBSztnQkFBRUMsS0FBSyxFQUFFLEtBQUs7Z0JBQUVDLEtBQUssRUFBRSxLQUFLO2dCQUFFQyxPQUFPLEVBQUU7Y0FBTTtZQUNyRixDQUFDLENBQUM7VUFDSjtVQUNBO1VBQ0EsSUFBSSxDQUFDVixjQUFjLENBQUNDLElBQUksQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLFVBQVUsS0FBSyxjQUFjLENBQUMsRUFBRTtZQUM5REgsY0FBYyxDQUFDSSxJQUFJLENBQUM7Y0FDbEIzQyxFQUFFLEVBQUUsRUFBRTtjQUNOMEMsVUFBVSxFQUFFLGNBQWM7Y0FDMUJFLE1BQU0sRUFBRTtnQkFBRUMsS0FBSyxFQUFFLEtBQUs7Z0JBQUVDLE9BQU8sRUFBRSxLQUFLO2dCQUFFQyxLQUFLLEVBQUUsS0FBSztnQkFBRUMsS0FBSyxFQUFFLEtBQUs7Z0JBQUVDLE9BQU8sRUFBRTtjQUFNO1lBQ3JGLENBQUMsQ0FBQztVQUNKO1VBRUFiLFVBQVUsQ0FBQ0csY0FBYyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxPQUFPckIsS0FBSyxFQUFFO1VBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7UUFDOUM7TUFDRixDQUFDO01BQUEsZ0JBbERLbUIsU0FBU0EsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQWxCLEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUEsR0FrRGQ7SUFDRGdCLFNBQVMsQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLElBQU1hLGNBQWMsR0FBR0EsQ0FBQ0MsQ0FBQyxFQUFFQyxJQUFJLEtBQUs7SUFDbEMsSUFBTUMsWUFBWSxHQUFHLENBQUMsR0FBR2xCLE9BQU8sQ0FBQztJQUNqQ2tCLFlBQVksQ0FBQ0YsQ0FBQyxDQUFDLENBQUNQLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDLEdBQUcsQ0FBQ0MsWUFBWSxDQUFDRixDQUFDLENBQUMsQ0FBQ1AsTUFBTSxDQUFDUSxJQUFJLENBQUM7SUFDNURoQixVQUFVLENBQUNpQixZQUFZLENBQUM7RUFDMUIsQ0FBQztFQUNELElBQUFDLFVBQUEsR0FBOEJqTCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBa0wsVUFBQSxHQUFBN0IsY0FBQSxDQUFBNEIsVUFBQTtJQUF0Q0UsT0FBTyxHQUFBRCxVQUFBO0lBQUVFLFVBQVUsR0FBQUYsVUFBQTtFQUMxQixJQUFBRyxVQUFBLEdBQWdEckwsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQXNMLFVBQUEsR0FBQWpDLGNBQUEsQ0FBQWdDLFVBQUE7SUFBeERFLGdCQUFnQixHQUFBRCxVQUFBO0lBQUVFLG1CQUFtQixHQUFBRixVQUFBO0VBQzVDLElBQUFHLFVBQUEsR0FBNEN6TCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBMEwsVUFBQSxHQUFBckMsY0FBQSxDQUFBb0MsVUFBQTtJQUFwREUsY0FBYyxHQUFBRCxVQUFBO0lBQUVFLGlCQUFpQixHQUFBRixVQUFBO0VBRXhDLElBQU1HLFVBQVUsR0FBR0EsQ0FBQSxLQUFNO0lBRXZCTCxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7SUFDekJKLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFFaEJVLFVBQVUsQ0FBQyxNQUFNO01BQ2ZWLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUVULENBQUM7RUFDRCxJQUFNVyxXQUFXLEdBQUdBLENBQUEsS0FBTTtJQUN4QkgsaUJBQWlCLENBQUMsSUFBSSxDQUFDO0lBQ3ZCUixVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2hCVSxVQUFVLENBQUMsTUFBTTtNQUNmVixVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDVCxDQUFDO0VBRUQsSUFBTVksV0FBVyxHQUFHQSxDQUFBLEtBQU07SUFDeEJSLG1CQUFtQixDQUFDLEtBQUssQ0FBQztJQUMxQlMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU07RUFDeEIsQ0FBQztFQUNELElBQU1DLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07SUFDN0JSLGlCQUFpQixDQUFDLEtBQUssQ0FBQztFQUMxQixDQUFDO0VBQ0QsSUFBTVMsY0FBYyxHQUFJekUsUUFBUSxJQUFLO0lBQ25DO0lBQ0EsSUFBSUEsUUFBUSxLQUFLLFVBQVUsRUFBRTtNQUMzQnFFLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDLE1BQU0sSUFBSTNFLFFBQVEsS0FBSyxNQUFNLEVBQUU7TUFDOUJvRSxXQUFXLENBQUMsQ0FBQztJQUNmO0VBQ0YsQ0FBQztFQUNELElBQU1RLG1CQUFtQjtJQUFBLElBQUFDLEtBQUEsR0FBQXJFLGlCQUFBLENBQUcsYUFBWTtNQUN0QyxJQUFNSSxJQUFJLEdBQUc7UUFDWGtFLE1BQU0sRUFBRS9FLEVBQUU7UUFDVmdGLE1BQU0sRUFBRTdFLElBQUksQ0FBQ1UsSUFBSSxDQUFDSSxRQUFRLEdBQUcsU0FBUztRQUN0Q2dFLE1BQU0sRUFBRSxZQUFZLEdBQUdoRSxRQUFRO1FBQy9CaUUsZ0JBQWdCLEVBQUUsSUFBSUMsSUFBSSxDQUFDO01BQzdCLENBQUM7TUFDRCxJQUFJO1FBQ0YsTUFBTW5LLDhDQUFLLENBQUNvSyxJQUFJLElBQUFySSxNQUFBLENBQUk5QixxREFBWSw0QkFBeUI0RixJQUFJLENBQUM7TUFFaEUsQ0FBQyxDQUFDLE9BQU9LLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNrRSxHQUFHLENBQUNuRSxLQUFLLENBQUM7TUFDcEI7SUFDRixDQUFDO0lBQUEsZ0JBYksyRCxtQkFBbUJBLENBQUE7TUFBQSxPQUFBQyxLQUFBLENBQUExRCxLQUFBLE9BQUFDLFNBQUE7SUFBQTtFQUFBLEdBYXhCO0VBQ0QsSUFBTWlFLFlBQVk7SUFBQSxJQUFBQyxLQUFBLEdBQUE5RSxpQkFBQSxDQUFHLFdBQU8rRSxDQUFDLEVBQUs7TUFDaENBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDbEIsSUFBSXRGLElBQUksQ0FBQ1UsSUFBSSxDQUFDSSxRQUFRLEtBQUssSUFBSSxFQUFFO1FBQy9CeUUsS0FBSyxDQUFDLDRCQUE0QixDQUFDO1FBQ25DO01BQ0Y7TUFDQSxJQUFNN0UsSUFBSSxHQUFHO1FBQ1hzQjtNQUNGLENBQUM7TUFDRCxJQUFJO1FBQ0YsSUFBTXpCLEdBQUcsU0FBUzFGLDhDQUFLLENBQUMySyxHQUFHLElBQUE1SSxNQUFBLENBQUk5QixxREFBWSwwQkFBQThCLE1BQUEsQ0FBdUJpRCxFQUFFLEdBQUlhLElBQUksQ0FBQztRQUM3RSxJQUFJSCxHQUFHLEVBQUU7VUFDUDtVQUNBbUUsbUJBQW1CLENBQUMsQ0FBQztVQUNyQlgsVUFBVSxDQUFDLENBQUM7UUFFZDtNQUNGLENBQUMsQ0FBQyxPQUFPaEQsS0FBSyxFQUFFO1FBQ2QsSUFBSUEsS0FBSyxFQUFFO1VBQ1RrRCxXQUFXLENBQUMsQ0FBQztRQUNmO01BQ0Y7SUFDRixDQUFDO0lBQUEsZ0JBdEJLa0IsWUFBWUEsQ0FBQU0sRUFBQTtNQUFBLE9BQUFMLEtBQUEsQ0FBQW5FLEtBQUEsT0FBQUMsU0FBQTtJQUFBO0VBQUEsR0FzQmpCO0VBQ0Qsb0JBQ0VsSiwwREFBQTtJQUFLa0UsU0FBUyxFQUFDO0VBQWMsZ0JBQzNCbEUsMERBQUEsQ0FBQ1cscURBQUc7SUFBQytNLEVBQUUsRUFBRTtNQUFFQyxPQUFPLEVBQUU7SUFBTztFQUFFLGdCQUMzQjNOLDBEQUFBLENBQUNxQyxrRUFBVyxNQUFFLENBQUMsZUFDZnJDLDBEQUFBLENBQUNrRyxNQUFNO0lBQUNWLFFBQVEsRUFBQyxVQUFVO0lBQUNjLElBQUksRUFBRWtELE9BQVE7SUFBQ2tFLEVBQUUsRUFBRTtNQUFFNUksZUFBZSxFQUFFO0lBQVU7RUFBRSxnQkFDNUU5RSwwREFBQSxDQUFDb0MsOERBQU87SUFDTnNMLEVBQUUsRUFBRTtNQUNGRSxFQUFFLEVBQUUsTUFBTSxDQUFFO0lBQ2Q7RUFBRSxnQkFFRjVOLDBEQUFBLENBQUNTLHFEQUFVO0lBQ1RvTixJQUFJLEVBQUMsT0FBTztJQUNaOUksS0FBSyxFQUFDLFNBQVM7SUFDZixjQUFXLGFBQWE7SUFDeEIrSSxPQUFPLEVBQUVwRSxZQUFhO0lBQ3RCZ0UsRUFBRSxFQUFBbkgsYUFBQTtNQUNBd0gsV0FBVyxFQUFFO0lBQU0sR0FDZnZFLE9BQU8sSUFBSTtNQUFFbUUsT0FBTyxFQUFFO0lBQU8sQ0FBQztFQUNsQyxnQkFFRjNOLDBEQUFBLENBQUMwQyxpRUFBUSxNQUFFLENBQ0QsQ0FBQyxlQUNiMUMsMERBQUEsQ0FBQ2dCLHFEQUFVO0lBQ1RnTixTQUFTLEVBQUMsSUFBSTtJQUNkQyxPQUFPLEVBQUMsSUFBSTtJQUNabEosS0FBSyxFQUFDLFNBQVM7SUFDZm1KLE1BQU07SUFDTlIsRUFBRSxFQUFFO01BQUVTLFFBQVEsRUFBRTtJQUFFO0VBQUUsR0FDckIsY0FFVyxDQUFDLGVBQ2JuTywwREFBQSxDQUFDUyxxREFBVTtJQUFDcU4sT0FBTyxFQUFFQSxDQUFBLEtBQU1oRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0VBQUUsZ0JBQ3RDOUgsMERBQUEsQ0FBQytDLHNFQUFTO0lBQUN3QyxLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFO0lBQVE7RUFBRSxDQUFFLENBQzdCLENBQUMsZUFDYi9FLDBEQUFBLENBQUMrRCw4REFBb0IsTUFBRSxDQUFDLGVBQ3hCL0QsMERBQUEsQ0FBQzhELDBEQUFnQjtJQUFDc0ssSUFBSSxFQUFFcEcsSUFBSSxDQUFDVSxJQUFJLENBQUNJLFFBQVM7SUFBQ0QsSUFBSSxFQUFFYixJQUFJLENBQUNVLElBQUksQ0FBQ0c7RUFBSyxDQUFFLENBQUMsZUFDcEU3SSwwREFBQSxDQUFDZ0IscURBQVU7SUFBQzBNLEVBQUUsRUFBRTtNQUFFekcsVUFBVSxFQUFFLE1BQU07TUFBRThHLFdBQVcsRUFBRTtJQUFPO0VBQUUsR0FBRS9GLElBQUksQ0FBQ1UsSUFBSSxDQUFDSSxRQUFxQixDQUFDLGVBQzlGOUksMERBQUEsQ0FBQ1MscURBQVU7SUFBQ3NFLEtBQUssRUFBQyxTQUFTO0lBQUMrSSxPQUFPLEVBQUUzRTtFQUFhLGdCQUNoRG5KLDBEQUFBLENBQUNxRCxtRUFBTTtJQUFDa0MsS0FBSyxFQUFFO01BQUVSLEtBQUssRUFBRTtJQUFRO0VBQUUsQ0FBRSxDQUMxQixDQUNMLENBQ0gsQ0FBQyxlQUNUL0UsMERBQUEsQ0FBQ21ILE1BQU07SUFBQzhHLE9BQU8sRUFBQyxXQUFXO0lBQUMzSCxJQUFJLEVBQUVrRCxPQUFRO0lBQUM2RSxZQUFZLEVBQUVBLENBQUEsS0FBTTVFLFVBQVUsQ0FBQyxJQUFJLENBQUU7SUFBQzZFLFlBQVksRUFBRUEsQ0FBQSxLQUFNN0UsVUFBVSxDQUFDLEtBQUs7RUFBRSxnQkFDckh6SiwwREFBQSxDQUFDb0MsOERBQU87SUFDTnNMLEVBQUUsRUFBRTtNQUNGQyxPQUFPLEVBQUUsTUFBTTtNQUNmWSxVQUFVLEVBQUUsUUFBUTtNQUNwQkMsY0FBYyxFQUFFLFVBQVU7TUFDMUJ6SSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1I7RUFBRSxnQkFFRi9GLDBEQUFBLENBQUNTLHFEQUFVO0lBQUNxTixPQUFPLEVBQUVwRTtFQUFhLGdCQUNoQzFKLDBEQUFBLENBQUMyQyx3RUFBZSxNQUFFLENBQ1IsQ0FDTCxDQUFDLGVBQ1YzQywwREFBQSxDQUFDNkIscURBQU8sTUFBRSxDQUFDLGVBQ1g3QiwwREFBQSxDQUFDdUMsMkRBQUk7SUFBQ21MLEVBQUUsRUFBRTtNQUFFZSxNQUFNLEVBQUU7SUFBUTtFQUFFLGdCQUM1QnpPLDBEQUFBLENBQUNHLGdFQUFhLE1BQUUsQ0FDWixDQUNBLENBQUMsZUFDVEgsMERBQUEsQ0FBQ1cscURBQUc7SUFDRnFOLFNBQVMsRUFBQyxNQUFNO0lBQ2hCTixFQUFFLEVBQUU7TUFDRjVJLGVBQWUsRUFBR0gsS0FBSyxJQUNyQkEsS0FBSyxDQUFDK0osT0FBTyxDQUFDQyxJQUFJLEtBQUssT0FBTyxHQUMxQmhLLEtBQUssQ0FBQytKLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUN2QmpLLEtBQUssQ0FBQytKLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQztNQUM3QlQsUUFBUSxFQUFFLENBQUM7TUFDWHZJLEtBQUssRUFBRSxNQUFNO01BQ2I2SSxNQUFNLEVBQUUsT0FBTztNQUNmSSxRQUFRLEVBQUU7SUFDWjtFQUFFLGdCQUVGN08sMERBQUEsQ0FBQ29DLDhEQUFPLE1BQUUsQ0FBQyxlQUNYcEMsMERBQUEsQ0FBQ3lDLGdFQUFTO0lBQUNxTSxRQUFRLEVBQUMsSUFBSTtJQUFDcEIsRUFBRSxFQUFFO01BQUVxQixFQUFFLEVBQUU7SUFBRTtFQUFFLGdCQUNyQy9PLDBEQUFBO0lBQU1nUCxRQUFRLEVBQUU3QjtFQUFhLGdCQUMzQm5OLDBEQUFBLENBQUNRLHFEQUFJO0lBQUN5TyxTQUFTO0lBQUMxSixLQUFLLEVBQUU7TUFBRWdKLFVBQVUsRUFBRSxRQUFRO01BQUVXLE9BQU8sRUFBRTtJQUFPLENBQUU7SUFBQzFILE9BQU8sRUFBRSxDQUFFO0lBQUN3RyxTQUFTLEVBQUV0TixxREFBS0E7RUFBQyxnQkFDN0ZWLDBEQUFBLENBQUNRLHFEQUFJO0lBQUMyTyxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNmcFAsMERBQUEsQ0FBQ1kscURBQVM7SUFDUndOLElBQUksRUFBQyxVQUFVO0lBQ2ZpQixLQUFLLEVBQUMsV0FBVztJQUNqQkMsS0FBSyxFQUFFeEc7RUFBUyxDQUNqQixDQUNHLENBQUMsZUFDUDlJLDBEQUFBLENBQUNRLHFEQUFJO0lBQUMyTyxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNoQnBQLDBEQUFBO0lBQU9rRSxTQUFTLEVBQUM7RUFBYSxnQkFDNUJsRSwwREFBQSxnQkFFSWdLLE9BQU8sQ0FBQ3VGLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUV4RSxDQUFDLGtCQUNqQmhMLDBEQUFBO0lBQUl5UCxHQUFHLEVBQUVELEdBQUcsQ0FBQzNIO0VBQUcsZ0JBQ2Q3SCwwREFBQSxhQUFLd1AsR0FBRyxDQUFDM0gsRUFBTyxDQUFDLGVBQ2pCN0gsMERBQUE7SUFBSXVGLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUU7SUFBUTtFQUFFLEdBQzNCNEosR0FBRyxDQUFDakYsVUFDSCxDQUFDLGVBQ0x2SywwREFBQTtJQUFJdUYsS0FBSyxFQUFFO01BQUVtSyxTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUNqQzFQLDBEQUFBLENBQUNxQixzREFBZ0I7SUFDZnNPLE9BQU8sZUFDTDNQLDBEQUFBLENBQUM4QixzREFBUTtNQUNQOE4sT0FBTyxFQUFFSixHQUFHLENBQUMvRSxNQUFNLENBQUNDLEtBQU07TUFDMUJtRixRQUFRLEVBQUVBLENBQUEsS0FBTTlFLGNBQWMsQ0FBQ0MsQ0FBQyxFQUFFLE9BQU87SUFBRSxDQUM1QyxDQUNGO0lBQ0RxRSxLQUFLLEVBQUM7RUFBTSxDQUNiLENBRUMsQ0FBQyxlQUNMclAsMERBQUE7SUFBSXVGLEtBQUssRUFBRTtNQUFFbUssU0FBUyxFQUFFO0lBQVM7RUFBRSxnQkFDakMxUCwwREFBQSxDQUFDcUIsc0RBQWdCO0lBQ2ZzTyxPQUFPLGVBQ0wzUCwwREFBQSxDQUFDOEIsc0RBQVE7TUFDUDhOLE9BQU8sRUFBRUosR0FBRyxDQUFDL0UsTUFBTSxDQUFDRSxPQUFRO01BQzVCa0YsUUFBUSxFQUFFQSxDQUFBLEtBQU05RSxjQUFjLENBQUNDLENBQUMsRUFBRSxTQUFTO0lBQUUsQ0FDOUMsQ0FDRjtJQUNEcUUsS0FBSyxFQUFDO0VBQVEsQ0FDZixDQUNDLENBQUMsZUFDTHJQLDBEQUFBO0lBQUl1RixLQUFLLEVBQUU7TUFBRW1LLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQ2pDMVAsMERBQUEsQ0FBQ3FCLHNEQUFnQjtJQUNmc08sT0FBTyxlQUNMM1AsMERBQUEsQ0FBQzhCLHNEQUFRO01BQ1A4TixPQUFPLEVBQUVKLEdBQUcsQ0FBQy9FLE1BQU0sQ0FBQ0csS0FBTTtNQUMxQmlGLFFBQVEsRUFBRUEsQ0FBQSxLQUFNOUUsY0FBYyxDQUFDQyxDQUFDLEVBQUUsT0FBTztJQUFFLENBQzVDLENBQ0Y7SUFDRHFFLEtBQUssRUFBQztFQUFNLENBQ2IsQ0FDQyxDQUFDLGVBQ0xyUCwwREFBQTtJQUFJdUYsS0FBSyxFQUFFO01BQUVtSyxTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUNqQzFQLDBEQUFBLENBQUNxQixzREFBZ0I7SUFDZnNPLE9BQU8sZUFDTDNQLDBEQUFBLENBQUM4QixzREFBUTtNQUNQOE4sT0FBTyxFQUFFSixHQUFHLENBQUMvRSxNQUFNLENBQUNJLEtBQU07TUFDMUJnRixRQUFRLEVBQUVBLENBQUEsS0FBTTlFLGNBQWMsQ0FBQ0MsQ0FBQyxFQUFFLE9BQU87SUFBRSxDQUM1QyxDQUNGO0lBQ0RxRSxLQUFLLEVBQUM7RUFBTSxDQUNiLENBQ0MsQ0FBQyxlQUNMclAsMERBQUE7SUFBSXVGLEtBQUssRUFBRTtNQUFFbUssU0FBUyxFQUFFO0lBQVM7RUFBRSxnQkFDakMxUCwwREFBQSxDQUFDcUIsc0RBQWdCO0lBQ2ZzTyxPQUFPLGVBQ0wzUCwwREFBQSxDQUFDOEIsc0RBQVE7TUFDUDhOLE9BQU8sRUFBRUosR0FBRyxDQUFDL0UsTUFBTSxDQUFDSyxPQUFRO01BQzVCK0UsUUFBUSxFQUFFQSxDQUFBLEtBQU05RSxjQUFjLENBQUNDLENBQUMsRUFBRSxTQUFTO0lBQUUsQ0FDOUMsQ0FDRjtJQUNEcUUsS0FBSyxFQUFDO0VBQVEsQ0FDZixDQUNDLENBQ0YsQ0FDTCxDQUVFLENBQ0YsQ0FDSCxDQUFDLGVBQ1ByUCwwREFBQSxDQUFDUSxxREFBSTtJQUFDMk8sSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRyxnQkFDaEJwUCwwREFBQTtJQUFRaUwsSUFBSSxFQUFDLFFBQVE7SUFBQy9HLFNBQVMsRUFBQyxjQUFjO0lBQUNxQixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFO0lBQU87RUFBRSxHQUFDLE1BQVksQ0FDakYsQ0FDRixDQUNGLENBQ0csQ0FDUixDQUNGLENBQUMsZUFDTjVGLDBEQUFBLENBQUN5QixzREFBSztJQUNKNkUsSUFBSSxFQUFFbUYsZ0JBQWlCO0lBQ3ZCcUUsT0FBTyxFQUFFNUQsV0FBWTtJQUNyQjZELG9CQUFvQjtJQUNwQkMsaUJBQWlCLEVBQUV0TyxzREFBUztJQUM1QnVPLGFBQWEsRUFBRTtNQUNiQyxPQUFPLEVBQUU7SUFDWCxDQUFFO0lBQ0YsbUJBQWdCLG1CQUFtQjtJQUNuQyxvQkFBaUI7RUFBeUIsZ0JBRTFDbFEsMERBQUEsQ0FBQ1cscURBQUc7SUFBQytNLEVBQUUsRUFBQW5ILGFBQUEsQ0FBQUEsYUFBQSxLQUFPaEIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLEdBRS9CeUYsT0FBTyxnQkFBSXJMLDBEQUFBLENBQUNvRCwwREFBTSxNQUFFLENBQUMsZ0JBRXBCcEQsMERBQUE7SUFBS3VGLEtBQUssRUFBRTtNQUFFaUosY0FBYyxFQUFFLFFBQVE7TUFBRWtCLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzVEMVAsMERBQUEseUJBQUdBLDBEQUFBLENBQUNrRCx3RUFBZTtJQUFDcUMsS0FBSyxFQUFFO01BQUVSLEtBQUssRUFBRSxPQUFPO01BQUUwSixNQUFNLEVBQUUsTUFBTTtNQUFFN0ksS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQUksQ0FBQyxlQUNwRjVGLDBEQUFBLGFBQUksMEJBQTRCLENBQUMsZUFDakNBLDBEQUFBO0lBQUt1RixLQUFLLEVBQUU7TUFBRW9JLE9BQU8sRUFBRSxNQUFNO01BQUV3QyxHQUFHLEVBQUUsTUFBTTtNQUFFM0IsY0FBYyxFQUFFO0lBQVM7RUFBRSxnQkFDckV4TywwREFBQTtJQUFROE4sT0FBTyxFQUFFQSxDQUFBLEtBQU12QixjQUFjLENBQUMsTUFBTSxDQUFFO0lBQUNySSxTQUFTLEVBQUM7RUFBYSxHQUFDLFNBRS9ELENBQUMsZUFDVGxFLDBEQUFBO0lBQVE4TixPQUFPLEVBQUVBLENBQUEsS0FBTXZCLGNBQWMsQ0FBQyxVQUFVLENBQUU7SUFBQ3JJLFNBQVMsRUFBQztFQUFhLEdBQUMsU0FFbkUsQ0FDTCxDQUNGLENBRUosQ0FDQSxDQUFDLGVBQ1JsRSwwREFBQSxDQUFDeUIsc0RBQUs7SUFDSjZFLElBQUksRUFBRXVGLGNBQWU7SUFDckJpRSxPQUFPLEVBQUV4RCxnQkFBaUI7SUFDMUJ5RCxvQkFBb0I7SUFDcEJDLGlCQUFpQixFQUFFdE8sc0RBQVM7SUFDNUJ1TyxhQUFhLEVBQUU7TUFDYkMsT0FBTyxFQUFFO0lBQ1gsQ0FBRTtJQUNGLG1CQUFnQixtQkFBbUI7SUFDbkMsb0JBQWlCO0VBQXlCLGdCQUUxQ2xRLDBEQUFBLENBQUNXLHFEQUFHO0lBQUMrTSxFQUFFLEVBQUFuSCxhQUFBLENBQUFBLGFBQUEsS0FBT2hCLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxHQUUvQnlGLE9BQU8sZ0JBQUlyTCwwREFBQSxDQUFDb0QsMERBQU0sTUFBRSxDQUFDLGdCQUVwQnBELDBEQUFBO0lBQUt1RixLQUFLLEVBQUU7TUFBRWlKLGNBQWMsRUFBRSxRQUFRO01BQUVrQixTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUM1RDFQLDBEQUFBLHlCQUFHQSwwREFBQSxDQUFDbUQsbUVBQVU7SUFBQ29DLEtBQUssRUFBRTtNQUFFUixLQUFLLEVBQUUsS0FBSztNQUFFMEosTUFBTSxFQUFFLE1BQU07TUFBRTdJLEtBQUssRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUFJLENBQUMsZUFDN0U1RiwwREFBQTtJQUFJdUYsS0FBSyxFQUFFO01BQUVSLEtBQUssRUFBRTtJQUFNO0VBQUUsR0FBQyxlQUFpQixDQUFDLGVBQy9DL0UsMERBQUEseUJBQUdBLDBEQUFBO0lBQU1rRSxTQUFTLEVBQUMsTUFBTTtJQUFDcUIsS0FBSyxFQUFFO01BQUVSLEtBQUssRUFBRTtJQUFNO0VBQUUsR0FBQyxPQUFXLENBQUMsZUFBQS9FLDBEQUFBO0lBQU1rRSxTQUFTLEVBQUM7RUFBTSxHQUFDLG9EQUF3RCxDQUFJLENBQUMsZUFDbkpsRSwwREFBQTtJQUFRa0UsU0FBUyxFQUFDLGFBQWE7SUFBQzRKLE9BQU8sRUFBRXhCO0VBQWlCLEdBQUMsV0FFbkQsQ0FDTCxDQUVKLENBQ0EsQ0FDSixDQUFDO0FBRVY7QUFFQSxpRUFBZTNFLHFCQUFxQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFmWDtBQUNNO0FBQ2dDO0FBQzZEO0FBQ3BFO0FBQ0o7QUFDRTtBQUNJO0FBQ0Y7QUFDK0I7QUFDdkYsU0FBU3hILGFBQWFBLENBQUEsRUFBRztFQUN2QixvQkFDRUgsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBLENBQUNrUixxREFBYztJQUFDeEQsRUFBRSxFQUFFO01BQUUzSSxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQy9FLDBEQUFBLENBQUNtUixxREFBWTtJQUFDekQsRUFBRSxFQUFFO01BQUUzSSxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQy9FLDBEQUFBLENBQUM0USwyREFBZ0IsTUFBRSxDQUNQLENBQUMsZUFDZjVRLDBEQUFBLENBQUNvUixzREFBWTtJQUFDRyxPQUFPLEVBQUM7RUFBTSxDQUFFLENBQ2hCLENBQUMsZUFFakJ2UiwwREFBQSxDQUFDa1IscURBQWM7SUFBQ3hELEVBQUUsRUFBRTtNQUFFM0ksS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEMvRSwwREFBQSxDQUFDbVIscURBQVk7SUFBQ3pELEVBQUUsRUFBRTtNQUFFM0ksS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbEMvRSwwREFBQSxDQUFDOFEsa0VBQVUsTUFBRSxDQUNELENBQUMsZUFDZjlRLDBEQUFBLENBQUNvUixzREFBWTtJQUFDRyxPQUFPLEVBQUM7RUFBVSxDQUFFLENBQ3BCLENBQUMsZUFDakJ2UiwwREFBQSxDQUFDa1IscURBQWM7SUFBQ3hELEVBQUUsRUFBRTtNQUFFM0ksS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEMvRSwwREFBQSxDQUFDbVIscURBQVk7SUFBQ3pELEVBQUUsRUFBRTtNQUFFM0ksS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbEMvRSwwREFBQSxDQUFDK1EsbUVBQVcsTUFBRSxDQUNGLENBQUMsZUFDZi9RLDBEQUFBLENBQUNvUixzREFBWTtJQUFDRyxPQUFPLEVBQUM7RUFBUyxDQUFFLENBQ25CLENBQUMsZUFDakJ2UiwwREFBQSxDQUFDa1IscURBQWM7SUFBQ3hELEVBQUUsRUFBRTtNQUFFM0ksS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEMvRSwwREFBQSxDQUFDbVIscURBQVk7SUFBQ3pELEVBQUUsRUFBRTtNQUFFM0ksS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbEMvRSwwREFBQSxDQUFDdVEsMkRBQVUsTUFBRSxDQUNELENBQUMsZUFDZnZRLDBEQUFBLENBQUNvUixzREFBWTtJQUFDRyxPQUFPLEVBQUM7RUFBYyxDQUFFLENBQ3hCLENBQUMsZUFDakJ2UiwwREFBQSxDQUFDa1IscURBQWM7SUFBQ3hELEVBQUUsRUFBRTtNQUFFM0ksS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEMvRSwwREFBQSxDQUFDbVIscURBQVk7SUFBQ3pELEVBQUUsRUFBRTtNQUFFM0ksS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbEMvRSwwREFBQSxDQUFDMFEsMkRBQWEsTUFBRSxDQUNKLENBQUMsZUFDZjFRLDBEQUFBLENBQUNvUixzREFBWTtJQUFDRyxPQUFPLEVBQUM7RUFBYyxDQUFFLENBQ3hCLENBQUMsZUFDakJ2UiwwREFBQSxDQUFDa1IscURBQWM7SUFBQ3hELEVBQUUsRUFBRTtNQUFFM0ksS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEMvRSwwREFBQSxDQUFDbVIscURBQVk7SUFBQ3pELEVBQUUsRUFBRTtNQUFFM0ksS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbEMvRSwwREFBQSxDQUFDaVIsb0VBQVksTUFBRSxDQUNILENBQUMsZUFDZmpSLDBEQUFBLENBQUNvUixzREFBWTtJQUFDRyxPQUFPLEVBQUM7RUFBUyxDQUFFLENBQ25CLENBYWhCLENBQUM7QUFFUDtBQUVBLGlFQUFlcFIsYUFBYSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjay5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvU2V0dGluZ3NWaWV3L0dyYW50QWNjZXNzVXBkYXRlVmlldy5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9TaWRlYmFyRGFzaEUzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwelwiXG59KSwgJ0Fycm93QmFjaycpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcydcclxuaW1wb3J0IFNpZGViYXJEYXNoRTMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoRTMnXHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudENpcmNsZSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBQYXBlciwgQm94LCBUZXh0RmllbGQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBJbnB1dEFkb3JubWVudCwgVHlwb2dyYXBoeSwgc3R5bGVkLCBTZWxlY3QsIEZvcm1MYWJlbCwgUmFkaW9Hcm91cCwgRm9ybUNvbnRyb2xMYWJlbCwgUmFkaW8sIEF1dG9jb21wbGV0ZSwgT3V0bGluZWRJbnB1dCwgTW9kYWwsIEJhY2tkcm9wLCBGYWRlLCBJbnB1dCwgRGl2aWRlciwgQ2hlY2tib3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCBWaXNpYmlsaXR5IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVmlzaWJpbGl0eSc7XHJcbmltcG9ydCBWaXNpYmlsaXR5T2ZmIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVmlzaWJpbGl0eU9mZic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgQWRkIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIEdyYW50QWNjZXNzVXBkYXRlVmlldygpIHtcclxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKVxyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbW9kdWxlcywgc2V0TW9kdWxlc10gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1ncmFudEFjY2Vzcy8ke2lkfWApXHJcbiAgICAgICAgc2V0VXNlck5hbWUocmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWUpO1xyXG4gICAgICAgIGxldCBmZXRjaGVkTW9kdWxlcyA9IHJlcy5kYXRhLmRhdGEubW9kdWxlcztcclxuXHJcbiAgICAgICAgLy8gRW5zdXJlIFJlcG9ydHMgbW9kdWxlIGlzIHByZXNlbnQgZXZlbiBmb3Igb2xkIHJlY29yZHNcclxuICAgICAgICBpZiAoIWZldGNoZWRNb2R1bGVzLmZpbmQobSA9PiBtLm1vZHVsZU5hbWUgPT09ICdSZXBvcnRzJykpIHtcclxuICAgICAgICAgIGZldGNoZWRNb2R1bGVzLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogMTksXHJcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6ICdSZXBvcnRzJyxcclxuICAgICAgICAgICAgYWNjZXNzOiB7IHJlYWRNOiBmYWxzZSwgY3JlYXRlTTogZmFsc2UsIHZpZXdNOiBmYWxzZSwgZWRpdE06IGZhbHNlLCBkZWxldGVNOiBmYWxzZSB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFmZXRjaGVkTW9kdWxlcy5maW5kKG0gPT4gbS5tb2R1bGVOYW1lID09PSAnQmxvY2stRmFjdG9yeScpKSB7XHJcbiAgICAgICAgICBmZXRjaGVkTW9kdWxlcy5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IDIwLFxyXG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAnQmxvY2stRmFjdG9yeScsXHJcbiAgICAgICAgICAgIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEVuc3VyZSBCbG9jay1NaXhlciBtb2R1bGUgaXMgcHJlc2VudCBldmVuIGZvciBvbGQgcmVjb3Jkc1xyXG4gICAgICAgIGlmICghZmV0Y2hlZE1vZHVsZXMuZmluZChtID0+IG0ubW9kdWxlTmFtZSA9PT0gJ0Jsb2NrLU1peGVyJykpIHtcclxuICAgICAgICAgIGZldGNoZWRNb2R1bGVzLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogMjEsXHJcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6ICdCbG9jay1NaXhlcicsXHJcbiAgICAgICAgICAgIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEVuc3VyZSBCYWNrdXAgbW9kdWxlIGlzIHByZXNlbnQgZXZlbiBmb3Igb2xkIHJlY29yZHNcclxuICAgICAgICBpZiAoIWZldGNoZWRNb2R1bGVzLmZpbmQobSA9PiBtLm1vZHVsZU5hbWUgPT09ICdCYWNrdXAnKSkge1xyXG4gICAgICAgICAgZmV0Y2hlZE1vZHVsZXMucHVzaCh7XHJcbiAgICAgICAgICAgIGlkOiAyMixcclxuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ0JhY2t1cCcsXHJcbiAgICAgICAgICAgIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEVuc3VyZSBMYXlvdXQtUHJpbnQgbW9kdWxlIGlzIHByZXNlbnQgZXZlbiBmb3Igb2xkIHJlY29yZHNcclxuICAgICAgICBpZiAoIWZldGNoZWRNb2R1bGVzLmZpbmQobSA9PiBtLm1vZHVsZU5hbWUgPT09ICdMYXlvdXQtUHJpbnQnKSkge1xyXG4gICAgICAgICAgZmV0Y2hlZE1vZHVsZXMucHVzaCh7XHJcbiAgICAgICAgICAgIGlkOiAyMyxcclxuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ0xheW91dC1QcmludCcsXHJcbiAgICAgICAgICAgIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRNb2R1bGVzKGZldGNoZWRNb2R1bGVzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbXSlcclxuICBjb25zdCBoYW5kbGVDaGVja0JveCA9IChpLCB0eXBlKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVNb2R1bGUgPSBbLi4ubW9kdWxlc11cclxuICAgIHVwZGF0ZU1vZHVsZVtpXS5hY2Nlc3NbdHlwZV0gPSAhdXBkYXRlTW9kdWxlW2ldLmFjY2Vzc1t0eXBlXVxyXG4gICAgc2V0TW9kdWxlcyh1cGRhdGVNb2R1bGUpXHJcbiAgfVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcblxyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG5cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZDtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVjaXNpb24gPSAobmF2aWdhdGUpID0+IHtcclxuICAgIC8vTmF2aWdhdGUgQmFzZWQgb24gdGggRGVjaXNpb25cclxuICAgIGlmIChuYXZpZ2F0ZSA9PT0gJ3ByZXZpb3VzJykge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRlID09PSAnc3RheScpIHtcclxuICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQ29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogaWQsXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBNb2RpZnknLFxyXG4gICAgICByZWFzb246ICdBY2Nlc3MgRm9yJyArIHVzZXJOYW1lLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb24vYCwgZGF0YSlcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh1c2VyLmRhdGEudXNlck5hbWUgIT09ICdHRycpIHtcclxuICAgICAgYWxlcnQoJ09ubHkgR0cgY2FuIG1vZGlmeSBhY2Nlc3MuJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG1vZHVsZXNcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtZ3JhbnRBY2Nlc3MvJHtpZH1gLCBkYXRhKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgLy8gT3BlbiBMb2FkaW5nIFZpZXdcclxuICAgICAgICBoYW5kbGVDcmVhdGVDb21tZW50KClcclxuICAgICAgICBoYW5kbGVPcGVuKCk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR3JhbnQgQWNjZXNzXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gbmF2aWdhdGUoLTEpfT5cclxuICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNpZGVCYXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2lkZUJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaEUzIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBzeD17eyBtdDogNCB9fSA+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9IGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSd1c2VyTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVXNlciBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlcy5tYXAoKHJvdywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvdy5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMzAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93Lm1vZHVsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cm93LmFjY2Vzcy5yZWFkTX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrQm94KGksICdyZWFkTScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J3JlYWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Jvdy5hY2Nlc3MuY3JlYXRlTX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrQm94KGksICdjcmVhdGVNJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ3JlYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Jvdy5hY2Nlc3Mudmlld019XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVja0JveChpLCAndmlld00nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdWaWV3J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Jvdy5hY2Nlc3MuZWRpdE19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGVja0JveChpLCAnZWRpdE0nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFZGl0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Jvdy5hY2Nlc3MuZGVsZXRlTX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrQm94KGksICdkZWxldGVNJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGVsZXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdzdGF5Jyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBBZGQgTmV3XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3ByZXZpb3VzJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5TYXZpbmcgRmFpbGVkPC9oMj5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9J3R4dDEnIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+UHJvamVjdCBuYW1lIGNhbiBvbmx5IGJlIGNyZWF0ZWQgb25jZSBmb3IgcHVyY2hhc2U8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFudEFjY2Vzc1VwZGF0ZVZpZXdcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Nzcy9TaWRlYmFyTmV3LnNjc3MnXHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyBBY2NvdW50Qm94LCBBbGxJbmNsdXNpdmUsIEhvbWUsIEFzc2lnbm1lbnRJbmQsIFN1cGVydmlzZWRVc2VyQ2lyY2xlLCBDdXJyZW5jeUV4Y2hhbmdlIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5ncyc7XHJcbmltcG9ydCBHcm91cHNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvR3JvdXBzJztcclxuaW1wb3J0IFBheW1lbnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGF5bWVudCc7XHJcbmltcG9ydCBEYXNoYm9hcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGFzaGJvYXJkJztcclxuaW1wb3J0IENvbnRhY3RzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NvbnRhY3RzJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1CdXR0b24sIExpc3RJdGVtSWNvbiwgTGlzdEl0ZW1UZXh0LCBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmZ1bmN0aW9uIFNpZGViYXJEYXNoRTMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxDdXJyZW5jeUV4Y2hhbmdlIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUmF0ZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcblxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPEdyb3Vwc0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJFbXBsb3llZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFBheW1lbnRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGF5Um9sbFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxBY2NvdW50Qm94IC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVXNlciBBY2NvdW50XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxBc3NpZ25tZW50SW5kIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiR3JhbnQgQWNjZXNzXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8Q29udGFjdHNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHJvZmlsZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPSdMaXN0cm93ZGFzaCcgPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvUm9sZVBlcm1pc3Npb25cIiAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246J25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCB3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzQ1cHgnLCBmbGV4V3JhcDogJ25vd3JhcCcsIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgIGZsZXg6ICd3cmFwJyxjb2xvcjogJ3doaXRlJywgYWxpZ25JdGVtczonY2VudGVyJywgbWFyZ2luTGVmdDonMjBweCcsIGdhcDonMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0naWNvbjEnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8U3VwZXJ2aXNlZFVzZXJDaXJjbGUvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3RpdGxlbGlzdCc+IFJvbGVQZXJtaXNzaW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gIDwvbGk+Ki99XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJEYXNoRTMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoRTMiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJNZW51SXRlbSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiUGFwZXIiLCJCb3giLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJJbnB1dEFkb3JubWVudCIsIlR5cG9ncmFwaHkiLCJzdHlsZWQiLCJTZWxlY3QiLCJGb3JtTGFiZWwiLCJSYWRpb0dyb3VwIiwiRm9ybUNvbnRyb2xMYWJlbCIsIlJhZGlvIiwiQXV0b2NvbXBsZXRlIiwiT3V0bGluZWRJbnB1dCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJGYWRlIiwiSW5wdXQiLCJEaXZpZGVyIiwiQ2hlY2tib3giLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkFycm93QmFjayIsIlZpc2liaWxpdHkiLCJWaXNpYmlsaXR5T2ZmIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkxvYWRlciIsIkxvZ291dCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJ2NCIsIkFkZCIsIkRlbGV0ZUljb24iLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJMaWdodFRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIkJsYWNrVG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY1Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWY2Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiR3JhbnRBY2Nlc3NVcGRhdGVWaWV3IiwiX3VzZVBhcmFtcyIsImlkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjciLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl9SZWFjdCR1c2VTdGF0ZSIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInNldFVzZXJOYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJtb2R1bGVzIiwic2V0TW9kdWxlcyIsImZldGNoRGF0YSIsIl9yZWY4IiwiZmV0Y2hlZE1vZHVsZXMiLCJmaW5kIiwibSIsIm1vZHVsZU5hbWUiLCJwdXNoIiwiYWNjZXNzIiwicmVhZE0iLCJjcmVhdGVNIiwidmlld00iLCJlZGl0TSIsImRlbGV0ZU0iLCJoYW5kbGVDaGVja0JveCIsImkiLCJ0eXBlIiwidXBkYXRlTW9kdWxlIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVEZWNpc2lvbiIsImhpc3RvcnkiLCJiYWNrIiwiaGFuZGxlQ3JlYXRlQ29tbWVudCIsIl9yZWY5IiwiaWRJbmZvIiwicGVyc29uIiwicmVhc29uIiwiZGF0ZU5vdGlmaWNhdGlvbiIsIkRhdGUiLCJwb3N0IiwibG9nIiwiaGFuZGxlU3VibWl0IiwiX3JlZjAiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInB1dCIsIl94Iiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93IiwibmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwicGFkZGluZyIsIml0ZW0iLCJ4cyIsImxhYmVsIiwidmFsdWUiLCJtYXAiLCJyb3ciLCJrZXkiLCJ0ZXh0QWxpZ24iLCJjb250cm9sIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwib25DbG9zZSIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsImdhcCIsIk91dGxldCIsIk5hdkxpbmsiLCJ1c2VMb2NhdGlvbiIsIkFjY291bnRCb3giLCJBbGxJbmNsdXNpdmUiLCJIb21lIiwiQXNzaWdubWVudEluZCIsIlN1cGVydmlzZWRVc2VyQ2lyY2xlIiwiQ3VycmVuY3lFeGNoYW5nZSIsIlNldHRpbmdzSWNvbiIsIkdyb3Vwc0ljb24iLCJQYXltZW50SWNvbiIsIkRhc2hib2FyZEljb24iLCJDb250YWN0c0ljb24iLCJMaXN0SXRlbUJ1dHRvbiIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIm1ha2VTdHlsZXMiLCJGcmFnbWVudCIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9