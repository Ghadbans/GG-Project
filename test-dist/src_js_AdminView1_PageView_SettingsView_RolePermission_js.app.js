"use strict";
exports.id = "src_js_AdminView1_PageView_SettingsView_RolePermission_js";
exports.ids = ["src_js_AdminView1_PageView_SettingsView_RolePermission_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/esm/Add.js"
/*!*****************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Add.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), 'Add'));

/***/ },

/***/ "./node_modules/@mui/icons-material/esm/Delete.js"
/*!********************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Delete.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), 'Delete'));

/***/ },

/***/ "./src/js/AdminView1/PageView/SettingsView/RolePermission.js"
/*!*******************************************************************!*\
  !*** ./src/js/AdminView1/PageView/SettingsView/RolePermission.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/SidebarDashE2 */ "./src/js/component/SidebarDashE2.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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







































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_31__["default"], {
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
function RolePermission() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_25__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_37__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_37__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_38__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_20__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_38__.setUser)({
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_38__.logOut)());
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
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCategory = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_20__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/grantAccess"));
          var data = res.data.data;

          // Patch each access record to ensure Block-Factory is present for the UI list
          data = data.map(item => {
            var modules = item.modules || [];
            if (!modules.find(m => m.moduleName === 'Reports')) {
              modules.push({
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
            if (!modules.find(m => m.moduleName === 'Block-Factory')) {
              modules.push({
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
            if (!modules.find(m => m.moduleName === 'Block-Mixer')) {
              modules.push({
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
            return _objectSpread(_objectSpread({}, item), {}, {
              modules
            });
          });
          setGrantAccess(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchCategory() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchCategory();
  }, []);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    reason = _useState4[0],
    setReason = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    open = _useState6[0],
    setOpen = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    DeleteId = _useState8[0],
    setDeleteId = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    modalOpenLoading = _useState10[0],
    setModalOpenLoading = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loadingOpenModal = _useState12[0],
    setLoadingOpenModal = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loadingOpenModalError = _useState14[0],
    setLoadingOpenModalError = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    openReasonDelete = _useState16[0],
    setOpenReasonDelete = _useState16[1];
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
    setDeleteId(null);
  };
  {/** Loading Update View Start */}
  var handleOpen = id => {
    setOpenReasonDelete(true);
    setDeleteId(id);
  };
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleCloseModal = () => {
    window.location.reload();
  };
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    nameDelete = _useState18[0],
    setNameDelete = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (DeleteId !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_20__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/get-grantAccess/").concat(DeleteId));
            setNameDelete(res.data.data.employeeName);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchData2() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [DeleteId]);
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + nameDelete,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_20__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_20__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/delete-grantAccess/").concat(DeleteId));
        if (res) {
          handleCreateNotification();
          handleOpenModal();
        }
      } catch (error) {
        alert('try again');
      }
    });
    return function handleDelete(_x) {
      return _ref11.apply(this, arguments);
    };
  }();
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    grantID = _useState20[0],
    setGrantID = _useState20[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result = localStorage.getItem('GrantAccessTabId');
    if (result) {
      setGrantID(result);
    }
  });
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState22 = _slicedToArray(_useState21, 2),
    show3 = _useState22[0],
    setShow3 = _useState22[1];
  var handleShow3 = e => {
    setShow3(e);
  };
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var result = localStorage.getItem('GrantAccessTab');
      return result !== null ? parseInt(result) : 0;
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    value = _useState24[0],
    setValue = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    value2 = _useState26[0],
    setValue2 = _useState26[1];
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
  var handleChangeIdIndex = (index, id) => {
    var newIndex = index;
    var newIndexId = id;
    setValue(newIndex);
    setGrantID(id);
    localStorage.setItem('GrantAccessTab', newIndex);
    localStorage.setItem('GrantAccessTabId', newIndexId);
  };
  var handleChangeIdIndex2 = (index, id) => {
    var newIndex = index;
    var newIndexId = id;
    var result = categories.findIndex(row => row._id === id);
    setValue(result);
    setValue2(newIndex);
    setGrantID(id);
    localStorage.setItem('GrantAccessTab', result);
    localStorage.setItem('GrantAccessTabId', newIndexId);
  };
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState28 = _slicedToArray(_useState27, 2),
    search2 = _useState28[0],
    setSearch2 = _useState28[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray2 = search2 !== '' ? grantAccess.filter(Item => Item.employeeName.toLowerCase().includes(search2.toLowerCase())) : grantAccess;
  var filterGrant = grantAccess.filter(item => item._id === grantID);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_30__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_29__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Grant Access"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_45__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_44__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_39__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_29__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_36__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_33__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_32__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_29__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_34__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    item: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 3
  }, show3 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6"
  }, "All User")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__.NavLink, {
    disabled: user.data.role !== 'CEO',
    to: "/GrantAccessFormView",
    className: "ItemsName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: "btnCustomer",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, grantAccess === null || grantAccess === void 0 ? void 0 : grantAccess.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: index,
    label: row.employeeName,
    onClick: () => handleChangeIdIndex(index, row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show3 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "search",
    id: "search",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => handleShow3(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_42__["default"], {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '565px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray2 === null || newArray2 === void 0 ? void 0 : newArray2.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: index,
    label: row.employeeName,
    onClick: () => handleChangeIdIndex2(index, row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer2Head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h5"
  }, "Modules"), filterGrant.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: item._id,
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__.NavLink, {
    disabled: user.data.role !== 'CEO',
    to: "/GrantAccessUpdateView/".concat(item._id),
    className: "ItemsName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_43__["default"], {
    className: "btnCustomer1",
    style: {
      fontSize: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
    title: "Delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => handleOpen(item._id),
    hidden: user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      maxHeight: '580px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    "aria-label": "collapsible table",
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "center"
  }, "Modules Permissions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "center"
  }, "Read"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "center"
  }, "Create"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "center"
  }, "View"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "center"
  }, "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    align: "center"
  }, "Delete"))), filterGrant.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    key: item._id
  }, item.modules.map((row, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    key: row.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, row.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      width: '300px'
    }
  }, row.moduleName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    checked: row.access.readM
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    checked: row.access.createM
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    checked: row.access.viewM
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    checked: row.access.editM
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    checked: row.access.deleteM
  }))))))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleCloseReasonDelete,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_42__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete Access Of ", nameDelete, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    required: true,
    id: "reason",
    name: "reason",
    multiline: true,
    rows: 4,
    value: reason,
    placeholder: "Reason",
    onChange: e => setReason(e.target.value),
    label: "Reason",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: modalOpenLoading,
    onClose: handleCloseModal,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_17__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_41__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data successfully deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseModal,
    className: "btnCustomer"
  }, "Close")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RolePermission);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfU2V0dGluZ3NWaWV3X1JvbGVQZXJtaXNzaW9uX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLFNBQVMsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05WOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLFlBQVksRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOYixDQUFrRDtBQUN6QjtBQUNtQztBQUNSO0FBQ3NCO0FBQ1I7QUFDaU87QUFDdk87QUFDUjtBQUMxQjtBQUN3QjtBQUNhO0FBQ1A7QUFDUTtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDSTtBQUNJO0FBQ1Y7QUFDVTtBQUNjO0FBQ0k7QUFDWDtBQUMrQjtBQUN0QztBQUNjO0FBQ1Y7QUFDTDtBQUNVO0FBQ2I7QUFDRTtBQUNVO0FBQ007QUFDZDtBQUNNO0FBQ1E7QUFHOUQsSUFBTTBFLGFBQWEsR0FBR2hFLDBEQUFNLENBQUNpRSxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDakQvRSwwREFBQSxDQUFDMEMsOERBQU8sRUFBQXVDLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxLQUFBLENBQUxDLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBTzNDLDhE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cyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BZGQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9EZWxldGUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L1NldHRpbmdzVmlldy9Sb2xlUGVybWlzc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2elwiXG59KSwgJ0FkZCcpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTYgMTljMCAxLjEuOSAyIDIgMmg4YzEuMSAwIDItLjkgMi0yVjdINnpNMTkgNGgtMy41bC0xLTFoLTVsLTEgMUg1djJoMTR6XCJcbn0pLCAnRGVsZXRlJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJ1xyXG5pbXBvcnQgU2lkZWJhckRhc2hFMiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2hFMidcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IHsgVGFibGUsIElucHV0QWRvcm5tZW50LCBJY29uQnV0dG9uLCBzdHlsZWQsIE91dGxpbmVkSW5wdXQsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBDaGVja2JveCwgVGFibGVDb250YWluZXIsIFBhcGVyLCBUeXBvZ3JhcGh5LCBNb2RhbCwgQm94LCBHcmlkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBNZW51SXRlbSwgQmFja2Ryb3AsIEF1dG9jb21wbGV0ZSwgVGV4dEZpZWxkLCBJbnB1dCwgVGFicywgVGFiIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBWaXNpYmlsaXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHknO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IEFkZCwgRGVsZXRlLCBNYWlsT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGl2aWRlcic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRUb29sYmFyIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XHJcbmltcG9ydCBFZGl0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IFZpc2liaWxpdHkgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IFZpc2liaWxpdHlPZmYgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5T2ZmJztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5cclxuXHJcbmNvbnN0IERlbGV0ZVRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBFZGl0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuZnVuY3Rpb24gUm9sZVBlcm1pc3Npb24oKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgY29uc3QgW2dyYW50QWNjZXNzLCBzZXRHcmFudEFjY2Vzc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoQ2F0ZWdvcnkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ3JhbnRBY2Nlc3NgKVxyXG4gICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgLy8gUGF0Y2ggZWFjaCBhY2Nlc3MgcmVjb3JkIHRvIGVuc3VyZSBCbG9jay1GYWN0b3J5IGlzIHByZXNlbnQgZm9yIHRoZSBVSSBsaXN0XHJcbiAgICAgICAgZGF0YSA9IGRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgbGV0IG1vZHVsZXMgPSBpdGVtLm1vZHVsZXMgfHwgW107XHJcbiAgICAgICAgICBpZiAoIW1vZHVsZXMuZmluZChtID0+IG0ubW9kdWxlTmFtZSA9PT0gJ1JlcG9ydHMnKSkge1xyXG4gICAgICAgICAgICBtb2R1bGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiAxOSxcclxuICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnUmVwb3J0cycsXHJcbiAgICAgICAgICAgICAgYWNjZXNzOiB7IHJlYWRNOiBmYWxzZSwgY3JlYXRlTTogZmFsc2UsIHZpZXdNOiBmYWxzZSwgZWRpdE06IGZhbHNlLCBkZWxldGVNOiBmYWxzZSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFtb2R1bGVzLmZpbmQobSA9PiBtLm1vZHVsZU5hbWUgPT09ICdCbG9jay1GYWN0b3J5JykpIHtcclxuICAgICAgICAgICAgbW9kdWxlcy5wdXNoKHtcclxuICAgICAgICAgICAgICBpZDogMjAsXHJcbiAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ0Jsb2NrLUZhY3RvcnknLFxyXG4gICAgICAgICAgICAgIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghbW9kdWxlcy5maW5kKG0gPT4gbS5tb2R1bGVOYW1lID09PSAnQmxvY2stTWl4ZXInKSkge1xyXG4gICAgICAgICAgICBtb2R1bGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkOiAyMSxcclxuICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnQmxvY2stTWl4ZXInLFxyXG4gICAgICAgICAgICAgIGFjY2VzczogeyByZWFkTTogZmFsc2UsIGNyZWF0ZU06IGZhbHNlLCB2aWV3TTogZmFsc2UsIGVkaXRNOiBmYWxzZSwgZGVsZXRlTTogZmFsc2UgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIG1vZHVsZXMgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0R3JhbnRBY2Nlc3MoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoQ2F0ZWdvcnkoKVxyXG4gIH0sIFtdKTtcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtEZWxldGVJZCwgc2V0RGVsZXRlSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbE9wZW5Mb2FkaW5nLCBzZXRNb2RhbE9wZW5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWxFcnJvciwgc2V0TG9hZGluZ09wZW5Nb2RhbEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlblJlYXNvbkRlbGV0ZSwgc2V0T3BlblJlYXNvbkRlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlUmVhc29uRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlblJlYXNvbkRlbGV0ZShmYWxzZSk7XHJcbiAgICBzZXREZWxldGVJZChudWxsKVxyXG4gIH07XHJcbiAgey8qKiBMb2FkaW5nIFVwZGF0ZSBWaWV3IFN0YXJ0ICovIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3BlblJlYXNvbkRlbGV0ZSh0cnVlKTtcclxuICAgIHNldERlbGV0ZUlkKGlkKVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlT3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxPcGVuTG9hZGluZyh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfTtcclxuICBjb25zdCBbbmFtZURlbGV0ZSwgc2V0TmFtZURlbGV0ZV0gPSB1c2VTdGF0ZSgnJylcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhMiA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgIGlmIChEZWxldGVJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZ3JhbnRBY2Nlc3MvJHtEZWxldGVJZH1gKVxyXG4gICAgICAgICAgc2V0TmFtZURlbGV0ZShyZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEyKClcclxuICB9LCBbRGVsZXRlSWRdKVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogJycsXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBEZWxldGVkICcgKyBuYW1lRGVsZXRlLFxyXG4gICAgICByZWFzb24sXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5kZWxldGUoYCR7RU5EUE9JTlRfVVJMfS9kZWxldGUtZ3JhbnRBY2Nlc3MvJHtEZWxldGVJZH1gKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbigpXHJcbiAgICAgICAgaGFuZGxlT3Blbk1vZGFsKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KCd0cnkgYWdhaW4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbZ3JhbnRJRCwgc2V0R3JhbnRJRF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdHcmFudEFjY2Vzc1RhYklkJyk7XHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHNldEdyYW50SUQocmVzdWx0KVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgW3Nob3czLCBzZXRTaG93M10gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBoYW5kbGVTaG93MyA9IChlKSA9PiB7XHJcbiAgICBzZXRTaG93MyhlKTtcclxuICB9XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnR3JhbnRBY2Nlc3NUYWInKVxyXG4gICAgcmV0dXJuIHJlc3VsdCAhPT0gbnVsbCA/IHBhcnNlSW50KHJlc3VsdCkgOiAwO1xyXG4gIH0pO1xyXG4gIGNvbnN0IFt2YWx1ZTIsIHNldFZhbHVlMl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UyID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZTIobmV3VmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUlkSW5kZXggPSAoaW5kZXgsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJbmRleCA9IGluZGV4O1xyXG4gICAgY29uc3QgbmV3SW5kZXhJZCA9IGlkO1xyXG4gICAgc2V0VmFsdWUobmV3SW5kZXgpO1xyXG4gICAgc2V0R3JhbnRJRChpZClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdHcmFudEFjY2Vzc1RhYicsIG5ld0luZGV4KVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0dyYW50QWNjZXNzVGFiSWQnLCBuZXdJbmRleElkKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJZEluZGV4MiA9IChpbmRleCwgaWQpID0+IHtcclxuICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXg7XHJcbiAgICBjb25zdCBuZXdJbmRleElkID0gaWQ7XHJcbiAgICBjb25zdCByZXN1bHQgPSBjYXRlZ29yaWVzLmZpbmRJbmRleCgocm93KSA9PiByb3cuX2lkID09PSBpZClcclxuICAgIHNldFZhbHVlKHJlc3VsdCk7XHJcbiAgICBzZXRWYWx1ZTIobmV3SW5kZXgpO1xyXG4gICAgc2V0R3JhbnRJRChpZClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdHcmFudEFjY2Vzc1RhYicsIHJlc3VsdClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdHcmFudEFjY2Vzc1RhYklkJywgbmV3SW5kZXhJZClcclxuICB9XHJcbiAgY29uc3QgW3NlYXJjaDIsIHNldFNlYXJjaDJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaDIgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U2VhcmNoMih2YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgbmV3QXJyYXkyID0gc2VhcmNoMiAhPT0gJycgPyBncmFudEFjY2Vzcy5maWx0ZXIoKEl0ZW0pID0+XHJcbiAgICBJdGVtLmVtcGxveWVlTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDIudG9Mb3dlckNhc2UoKSlcclxuICApIDogZ3JhbnRBY2Nlc3NcclxuICBjb25zdCBmaWx0ZXJHcmFudCA9IGdyYW50QWNjZXNzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5faWQgPT09IGdyYW50SUQpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEdyYW50IEFjY2Vzc1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoRTIgLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDEgfX0gPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgIHtzaG93MyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgcGFkZGluZzogJzVweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz5BbGwgVXNlcjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30gdG89XCIvR3JhbnRBY2Nlc3NGb3JtVmlld1wiIGNsYXNzTmFtZT0nSXRlbXNOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDE3MHB4KScsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2dyYW50QWNjZXNzPy5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jvdy5lbXBsb3llZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZUlkSW5kZXgoaW5kZXgsIHJvdy5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge3Nob3czID09PSAyID9cclxuICAgICAgICAgICAgICAgICAgICAoPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzEwcHgnIH19IHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdzMoMSl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzMwMzY4YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc1NjVweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXdBcnJheTI/Lm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cm93LmVtcGxveWVlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hhbmdlSWRJbmRleDIoaW5kZXgsIHJvdy5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMwMzY4YSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyMic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyMkhlYWQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPk1vZHVsZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckdyYW50Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLl9pZH0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9IHRvPXtgL0dyYW50QWNjZXNzVXBkYXRlVmlldy8ke2l0ZW0uX2lkfWB9IGNsYXNzTmFtZT0nSXRlbXNOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIxJyBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlVG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW4oaXRlbS5faWQpfSBoaWRkZW49e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EZWxldGVUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgc3g9e3sgbWF4SGVpZ2h0OiAnNTgwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGFyaWEtbGFiZWw9XCJjb2xsYXBzaWJsZSB0YWJsZVwiIHN0aWNreUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5JRDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPk1vZHVsZXMgUGVybWlzc2lvbnM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5SZWFkPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+Q3JlYXRlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+VmlldzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkVkaXQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5EZWxldGU8L1RhYmxlQ2VsbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJHcmFudC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHkga2V5PXtpdGVtLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm1vZHVsZXMubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5pZH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyB3aWR0aDogJzMwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93Lm1vZHVsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtyb3cuYWNjZXNzLnJlYWRNfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtyb3cuYWNjZXNzLmNyZWF0ZU19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Jvdy5hY2Nlc3Mudmlld019XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Jvdy5hY2Nlc3MuZWRpdE19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Jvdy5hY2Nlc3MuZGVsZXRlTX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+PC9Cb3g+PC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5SZWFzb25EZWxldGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VSZWFzb25EZWxldGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgV2h5IGRvIHlvdSB3YW50IHRvIGRlbGV0ZSBBY2Nlc3MgT2Yge25hbWVEZWxldGV9P1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZURlbGV0ZX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgaWQ9J3JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgbmFtZT0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nUmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e21vZGFsT3BlbkxvYWRpbmd9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj4gRGF0YSBzdWNjZXNzZnVsbHkgZGVsZXRlZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9sZVBlcm1pc3Npb25cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyRGFzaEUyIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiVGFibGUiLCJJbnB1dEFkb3JubWVudCIsIkljb25CdXR0b24iLCJzdHlsZWQiLCJPdXRsaW5lZElucHV0IiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJDaGVja2JveCIsIlRhYmxlQ29udGFpbmVyIiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiTW9kYWwiLCJCb3giLCJHcmlkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiTWVudUl0ZW0iLCJCYWNrZHJvcCIsIkF1dG9jb21wbGV0ZSIsIlRleHRGaWVsZCIsIklucHV0IiwiVGFicyIsIlRhYiIsIlZpc2liaWxpdHlJY29uIiwiRGVsZXRlSWNvbiIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiQWRkIiwiRGVsZXRlIiwiTWFpbE91dGxpbmUiLCJOYXZMaW5rIiwidXNlTmF2aWdhdGUiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJEaXZpZGVyIiwiQ29udGFpbmVyIiwiTGluayIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkxvYWRlciIsIkRhdGFHcmlkIiwiR3JpZFRvb2xiYXIiLCJFZGl0IiwiQ2xvc2UiLCJWaXNpYmlsaXR5IiwiVmlzaWJpbGl0eU9mZiIsIkVkaXRJY29uIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiRGVsZXRlVG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiRWRpdFRvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIlZpZXdUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjciLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjgiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJSb2xlUGVybWlzc2lvbiIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY5IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzaWRlQmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZURyYXdlciIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJncmFudEFjY2VzcyIsInNldEdyYW50QWNjZXNzIiwiZmV0Y2hDYXRlZ29yeSIsIl9yZWYwIiwibWFwIiwiaXRlbSIsIm1vZHVsZXMiLCJmaW5kIiwibSIsIm1vZHVsZU5hbWUiLCJwdXNoIiwiaWQiLCJhY2Nlc3MiLCJyZWFkTSIsImNyZWF0ZU0iLCJ2aWV3TSIsImVkaXRNIiwiZGVsZXRlTSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicmVhc29uIiwic2V0UmVhc29uIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJzZXRPcGVuIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJEZWxldGVJZCIsInNldERlbGV0ZUlkIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIm1vZGFsT3BlbkxvYWRpbmciLCJzZXRNb2RhbE9wZW5Mb2FkaW5nIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImxvYWRpbmdPcGVuTW9kYWxFcnJvciIsInNldExvYWRpbmdPcGVuTW9kYWxFcnJvciIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJvcGVuUmVhc29uRGVsZXRlIiwic2V0T3BlblJlYXNvbkRlbGV0ZSIsImhhbmRsZUNsb3NlUmVhc29uRGVsZXRlIiwiaGFuZGxlT3BlbiIsImhhbmRsZU9wZW5Nb2RhbCIsInNldFRpbWVvdXQiLCJoYW5kbGVDbG9zZU1vZGFsIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwibmFtZURlbGV0ZSIsInNldE5hbWVEZWxldGUiLCJmZXRjaERhdGEyIiwiX3JlZjEiLCJsb2ciLCJoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24iLCJfcmVmMTAiLCJpZEluZm8iLCJwZXJzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwiRGF0ZSIsInBvc3QiLCJoYW5kbGVEZWxldGUiLCJfcmVmMTEiLCJlIiwicHJldmVudERlZmF1bHQiLCJkZWxldGUiLCJhbGVydCIsIl94IiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsImdyYW50SUQiLCJzZXRHcmFudElEIiwicmVzdWx0IiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsInNob3czIiwic2V0U2hvdzMiLCJoYW5kbGVTaG93MyIsIl91c2VTdGF0ZTIzIiwicGFyc2VJbnQiLCJfdXNlU3RhdGUyNCIsInZhbHVlIiwic2V0VmFsdWUiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwidmFsdWUyIiwic2V0VmFsdWUyIiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJoYW5kbGVDaGFuZ2UyIiwiaGFuZGxlQ2hhbmdlSWRJbmRleCIsImluZGV4IiwibmV3SW5kZXgiLCJuZXdJbmRleElkIiwic2V0SXRlbSIsImhhbmRsZUNoYW5nZUlkSW5kZXgyIiwiY2F0ZWdvcmllcyIsImZpbmRJbmRleCIsInJvdyIsIl9pZCIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJzZWFyY2gyIiwic2V0U2VhcmNoMiIsImhhbmRsZVNlYXJjaDIiLCJ0YXJnZXQiLCJuZXdBcnJheTIiLCJmaWx0ZXIiLCJJdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImZpbHRlckdyYW50Iiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93IiwibmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsImNvbnRhaW5lciIsInhzIiwicGFkZGluZyIsImRpc2FibGVkIiwidG8iLCJvdmVyZmxvd1kiLCJvbkNoYW5nZSIsIm9yaWVudGF0aW9uIiwia2V5IiwibGFiZWwiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsInBsYWNlbWVudCIsImZsb2F0IiwiaGlkZGVuIiwiY3Vyc29yIiwibWF4SGVpZ2h0Iiwic3RpY2t5SGVhZGVyIiwiYWxpZ24iLCJpIiwidGV4dEFsaWduIiwiY2hlY2tlZCIsIm9uQ2xvc2UiLCJvblN1Ym1pdCIsInJlcXVpcmVkIiwibXVsdGlsaW5lIiwicm93cyIsInBsYWNlaG9sZGVyIiwidHlwZSIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJnYXAiXSwic291cmNlUm9vdCI6IiJ9