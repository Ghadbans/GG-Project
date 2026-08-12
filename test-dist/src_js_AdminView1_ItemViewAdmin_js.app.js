"use strict";
exports.id = "src_js_AdminView1_ItemViewAdmin_js";
exports.ids = ["src_js_AdminView1_ItemViewAdmin_js"];
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

/***/ "./node_modules/@mui/icons-material/esm/Logout.js"
/*!********************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Logout.js ***!
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
  d: "m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
}), 'Logout'));

/***/ },

/***/ "./src/js/AdminView1/ItemViewAdmin.js"
/*!********************************************!*\
  !*** ./src/js/AdminView1/ItemViewAdmin.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _component_SideMaintenance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/SideMaintenance */ "./src/js/component/SideMaintenance.js");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Badge/Badge.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Logout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabContext/TabContext.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabList/TabList.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabPanel/TabPanel.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/excel.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_48__);
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






























var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
function ItemViewAdmin() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__.setUser)({
              userName: Name,
              role: Role,
              id: res.data.data._id
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
  }, [dispatch, navigate]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/grantAccess"));
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
  var ItemInfoC = grantAccess.filter(row => row.moduleName === "Item" && row.access.createM === true);
  var ItemInfoV = grantAccess.filter(row => row.moduleName === "Item" && row.access.viewM === true);
  var ItemInfoU = grantAccess.filter(row => row.moduleName === "Item" && row.access.editM === true);
  var ItemInfoD = grantAccess.filter(row => row.moduleName === "Item" && row.access.deleteM === true);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    item = _useState4[0],
    SetItems = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loadingData = _useState6[0],
    setLoadingData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    loadingOpenModal = _useState0[0],
    setLoadingOpenModal = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    ErrorOpenModal = _useState10[0],
    setErrorOpenModal = _useState10[1];
  var handleOpenOffline = () => {
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
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    reason = _useState12[0],
    setReason = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    newPurchase = _useState14[0],
    setNewPurchase = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    lowMargin = _useState16[0],
    setLowMargin = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    totalPage = _useState18[0],
    SetTotalPage = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    page = _useState20[0],
    setPage = _useState20[1]; // Initialize page state to 0 (0-based index)
  var limit = 100;
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    searchTerm = _useState22[0],
    setSearchTerm = _useState22[1]; // Initialize search term state
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState24 = _slicedToArray(_useState23, 2),
    debouncedSearchTerm = _useState24[0],
    setDebouncedSearchTerm = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState26 = _slicedToArray(_useState25, 2),
    filterField = _useState26[0],
    setFilterField = _useState26[1]; // Initialize filter field state
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState28 = _slicedToArray(_useState27, 2),
    filterValue = _useState28[0],
    setFilterValue = _useState28[1]; // Initialize filter value state

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);
  var fetchRequestId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var fetchItems = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (page, searchTerm, filterField, filterValue) {
      var currentRequestId = ++fetchRequestId.current;
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/item-Information?page=").concat(page + 1, "&limit=").concat(limit, "&search=").concat(encodeURIComponent(searchTerm.trim()), "&filterField=").concat(encodeURIComponent(filterField.trim()), "&filterValue=").concat(encodeURIComponent(filterValue.trim())));
        if (currentRequestId !== fetchRequestId.current) return;
        setLoadingData(false);
        SetTotalPage(Math.ceil(res.data.totalItem / limit)); // Ensure totalPage is correctly calculated
        var formatDate = res.data.itemI.map(item => _objectSpread(_objectSpread({}, item), {}, {
          id: item._id,
          ItemNumber: item.itemUpc.newCode + '-0' + item.itemUpc.itemNumber
        }));
        SetItems(formatDate);
      } catch (error) {
        if (currentRequestId !== fetchRequestId.current) return;
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    });
    return function fetchItems(_x, _x2, _x3, _x4) {
      return _ref1.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchItems(page, debouncedSearchTerm, filterField, filterValue);
  }, [page, debouncedSearchTerm, filterField, filterValue]);
  //console.log(item)
  var handlePageChange = (event, newPage) => {
    setPage(newPage - 1); // Update page state (convert to 0-based index)
  };
  var handleRefreshSearch = () => {
    fetchItems(page, searchTerm, filterField, filterValue);
  };
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState30 = _slicedToArray(_useState29, 2),
    loadingData1 = _useState30[0],
    setLoadingData1 = _useState30[1];
  var handleLoadMargin = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        var resLow = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/low-margin-item"));
        setLowMargin(resLow.data.data.map(item => _objectSpread(_objectSpread({}, item), {}, {
          id: item._id,
          ItemNumber: item.itemUpc.newCode + '-0' + item.itemUpc.itemNumber
        })));
        setLoadingData1(false);
      } catch (error) {
        console.log('error');
        setLoadingData1(false);
      }
    });
    return function handleLoadMargin(_x5) {
      return _ref10.apply(this, arguments);
    };
  }();
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    openReasonDelete = _useState32[0],
    setOpenReasonDelete = _useState32[1];
  var handleOpenReasonDelete = e => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    open = _useState34[0],
    setOpen = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState36 = _slicedToArray(_useState35, 2),
    DeleteId = _useState36[0],
    setDeleteId = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    modalOpenLoading = _useState38[0],
    setModalOpenLoading = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState40 = _slicedToArray(_useState39, 2),
    selectedRows = _useState40[0],
    setSelectedRows = _useState40[1];
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    openDeleteMultiple = _useState42[0],
    setOpenDeleteMultiple = _useState42[1];
  var handleOpenMultiple = () => {
    setOpenDeleteMultiple(true);
  };
  var handleCloseMultiple = () => {
    setOpenDeleteMultiple(false);
  };
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    openDeleteAll = _useState44[0],
    setOpenDeleteAll = _useState44[1];
  var handleOpenAll = () => {
    setOpenDeleteAll(true);
  };
  var handleCloseAll = () => {
    setOpenDeleteAll(false);
  };
  var handleClose = () => {
    setOpen(false);
  };
  var handleCloseModal = () => {
    setLoadingOpenModal(false);
    setOpenDeleteAll(false);
    setOpenDeleteMultiple(false);
    setOpen(false);
    fetchItems(page, searchTerm, filterField, filterValue); // Refresh data without reload
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/delete-item/").concat(DeleteId));
        if (res) {
          handleOpenModal();
        }
      } catch (error) {
        alert('try again');
      }
    });
    return function handleDelete() {
      return _ref11.apply(this, arguments);
    };
  }();
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState46 = _slicedToArray(_useState45, 2),
    ItemDeleted = _useState46[0],
    setItemDeleted = _useState46[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchFunction = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        var deletePromises = selectedRows.map(/*#__PURE__*/function () {
          var _ref13 = _asyncToGenerator(function* (idToDelete) {
            return axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/get-item/").concat(idToDelete));
          });
          return function (_x6) {
            return _ref13.apply(this, arguments);
          };
        }());
        try {
          var res = yield Promise.all(deletePromises);
          setItemDeleted(res.map(row => row.data.data.itemName));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchFunction() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchFunction();
  }, [selectedRows]);
  var related = ItemDeleted.map(row => row);
  var info = related.toString();
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + info,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref14.apply(this, arguments);
    };
  }();
  var handleDeleteMany = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var deletePromises = selectedRows.map(/*#__PURE__*/function () {
        var _ref16 = _asyncToGenerator(function* (idToDelete) {
          return axios__WEBPACK_IMPORTED_MODULE_31__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/delete-item/").concat(idToDelete));
        });
        return function (_x8) {
          return _ref16.apply(this, arguments);
        };
      }());
      try {
        var res = yield Promise.all(deletePromises);
        if (res) {
          handleCreateNotification();
          handleOpenModal();
        }
      } catch (error) {
        console.log(error);
      }
    });
    return function handleDeleteMany(_x7) {
      return _ref15.apply(this, arguments);
    };
  }();
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('false'),
    _useState48 = _slicedToArray(_useState47, 2),
    synced = _useState48[0],
    setSynced = _useState48[1];
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__.logOut)());
    navigate('/');
  };
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState50 = _slicedToArray(_useState49, 2),
    searchItem = _useState50[0],
    setSearchItem = _useState50[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    var storedValue = localStorage.getItem('QuickFilterItem');
    if (storedValue) {
      setSearchItem(storedValue);
    }
  });
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filterModel = _React$useState2[0],
    setFilterModel = _React$useState2[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState52 = _slicedToArray(_useState51, 2),
    columnVisibilityModel = _useState52[0],
    setColumnVisibilityModel = _useState52[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsItem', JSON.stringify(newHidden));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterItemViewDisplay'));
    if (storedQuick) {
      var _storedQuick$quickFil;
      var _searchTerm = ((_storedQuick$quickFil = storedQuick.quickFilterValues) === null || _storedQuick$quickFil === void 0 ? void 0 : _storedQuick$quickFil.join(' ')) || '';
      setSearchTerm(_searchTerm);
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsItem'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchItem]);
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    open1 = _React$useState4[0],
    setOpen1 = _React$useState4[1];
  var toggleDrawer = () => {
    setOpen1(!open1);
  };
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default().useState('1'),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    value3 = _React$useState6[0],
    setValue3 = _React$useState6[1];
  var handleChange3 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
  };
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState54 = _slicedToArray(_useState53, 2),
    search2 = _useState54[0],
    setSearch2 = _useState54[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var lowerSearch2 = search2.toLowerCase().trim();
    return search2 !== '' ? lowMargin.filter(Item => Item.itemName && Item.itemName.toLowerCase().includes(lowerSearch2) || Item.itemDescription && Item.itemDescription.toLowerCase().includes(lowerSearch2) || Item.itemUpc && (Item.itemUpc.newCode.toLowerCase().includes(lowerSearch2) || Item.itemUpc.itemNumber.toString().includes(lowerSearch2)) || Item.itemCategory && Item.itemCategory.toLowerCase().includes(lowerSearch2) || Item.itemBrand && Item.itemBrand.toLowerCase().includes(lowerSearch2) || Item.itemStore && Item.itemStore.toLowerCase().includes(lowerSearch2)) : lowMargin;
  }, [lowMargin, search2]);
  var columns = [{
    field: 'ItemNumber',
    headerName: 'Item Number',
    minWidth: 90,
    flex: 0.8
  }, {
    field: 'itemName',
    headerName: 'Item Name',
    minWidth: 200,
    flex: 2,
    renderCell: params => params.row.itemName.toUpperCase()
  }, {
    field: 'itemCategory',
    headerName: 'Category',
    minWidth: 100,
    flex: 1
  }, {
    field: 'itemBrand',
    headerName: 'itemBrand',
    minWidth: 100,
    flex: 1
  }, {
    field: 'itemDescription',
    headerName: 'Description',
    minWidth: 200,
    flex: 2,
    renderCell: params => params.row.itemDescription.toUpperCase()
  }, {
    field: 'itemSellingPrice',
    headerName: 'Price',
    minWidth: 100,
    flex: 1,
    renderCell: params => "$".concat(params.row.itemSellingPrice)
  }, {
    field: 'itemQuantity',
    headerName: 'Stock',
    minWidth: 100,
    flex: 1,
    renderCell: params => {
      var _params$row$unit;
      return "".concat(params.row.itemQuantity + ' ' + ((_params$row$unit = params.row.unit) === null || _params$row$unit === void 0 ? void 0 : _params$row$unit.toUpperCase()));
    }
  }, {
    field: 'view',
    headerName: 'View',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      disabled: ItemInfoV.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/ItemInfo/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        color: '#202a5a'
      }
    })))))
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      disabled: ItemInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/ItemFormUpdate/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        color: 'gray'
      }
    })))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onClick: handleOpenAll,
      disabled: ItemInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  var columns2 = [{
    field: 'ItemNumber',
    headerName: 'Item Number',
    minWidth: 90,
    flex: 0.8
  }, {
    field: 'typeItem',
    headerName: 'Type',
    minWidth: 70,
    flex: 0.5
  }, {
    field: 'itemName',
    headerName: 'Item Name',
    minWidth: 200,
    flex: 2,
    renderCell: params => params.row.itemName.toUpperCase()
  }, {
    field: 'itemCategory',
    headerName: 'Category',
    minWidth: 100,
    flex: 1
  }, {
    field: 'itemBrand',
    headerName: 'itemBrand',
    minWidth: 100,
    flex: 1
  }, {
    field: 'itemDescription',
    headerName: 'Description',
    minWidth: 200,
    flex: 2,
    renderCell: params => params.row.itemDescription.toUpperCase()
  }, {
    field: 'itemSellingPrice',
    headerName: 'Price',
    minWidth: 100,
    flex: 1,
    renderCell: params => {
      var _parseFloat;
      (_parseFloat = parseFloat(params.row.itemSellingPrice)) === null || _parseFloat === void 0 || _parseFloat.toFixed(2);
    }
  }, {
    field: 'itemQuantity',
    headerName: 'Stock',
    minWidth: 100,
    flex: 1,
    renderCell: params => {
      var _params$row$unit2;
      return "".concat(params.row.itemQuantity + ' ' + ((_params$row$unit2 = params.row.unit) === null || _params$row$unit2 === void 0 ? void 0 : _params$row$unit2.toUpperCase()));
    }
  }, {
    field: 'view',
    headerName: 'View',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      disabled: ItemInfoV.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/ItemInfo/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        color: '#202a5a'
      }
    })))))
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      disabled: ItemInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/ItemFormUpdate/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        color: 'gray'
      }
    })))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onClick: handleOpenAll,
      disabled: ItemInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  var handleFilterModelChange = newFilterModel => {
    var _newFilterModel$quick;
    var searchTerm = ((_newFilterModel$quick = newFilterModel.quickFilterValues) === null || _newFilterModel$quick === void 0 ? void 0 : _newFilterModel$quick.join(' ')) || '';
    setSearchTerm(searchTerm);
    setPage(0);
    setFilterModel(newFilterModel);
    localStorage.setItem('QuickFilterItemViewDisplay', JSON.stringify(newFilterModel));
  };
  var handleExportToExcel = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(function* () {
      try {
        setLoading(true);
        alert("Preparing Full Catalog Export (All Items). Downloading in batches... Please stay on this screen.");

        // 1. Get the total count of items first
        var countRes = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/item-Information?page=1&limit=1"));
        var totalItems = countRes.data.totalItem || 0;
        if (totalItems === 0) {
          alert("No items found to export.");
          setLoading(false);
          return;
        }
        var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_48___default().Workbook)();
        var worksheet = workbook.addWorksheet('Items');

        // Define columns
        worksheet.columns = [{
          header: 'Item Number',
          key: 'ItemNumber',
          width: 15
        }, {
          header: 'Item Picture',
          key: 'itemPicture',
          width: 35
        },
        // Column B
        {
          header: 'Type',
          key: 'typeItem',
          width: 15
        }, {
          header: 'Item Name',
          key: 'itemName',
          width: 40
        }, {
          header: 'Category',
          key: 'itemCategory',
          width: 20
        }, {
          header: 'Brand',
          key: 'itemBrand',
          width: 15
        }, {
          header: 'Description',
          key: 'itemDescription',
          width: 50
        }, {
          header: 'Cost Price',
          key: 'itemCostPrice',
          width: 15
        }, {
          header: 'Price',
          key: 'itemSellingPrice',
          width: 15
        }, {
          header: 'Stock',
          key: 'itemQuantity',
          width: 15
        }];

        // Style headers
        worksheet.getRow(1).font = {
          bold: true
        };
        worksheet.getRow(1).alignment = {
          vertical: 'middle',
          horizontal: 'center'
        };
        worksheet.getRow(1).height = 30;

        // 2. Fetch all items in batches of 500
        var batchSize = 500;
        for (var _page = 1; _page <= Math.ceil(totalItems / batchSize); _page++) {
          var batchRes = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/item-Information?page=").concat(_page, "&limit=").concat(batchSize, "&search=&filterField=&filterValue="));
          var batchItems = Array.isArray(batchRes.data.itemI) ? batchRes.data.itemI : [];
          for (var itemData of batchItems) {
            var _itemData$itemUpc, _itemData$itemUpc2;
            var formattedItem = _objectSpread(_objectSpread({}, itemData), {}, {
              ItemNumber: ((_itemData$itemUpc = itemData.itemUpc) === null || _itemData$itemUpc === void 0 ? void 0 : _itemData$itemUpc.newCode) + '-0' + ((_itemData$itemUpc2 = itemData.itemUpc) === null || _itemData$itemUpc2 === void 0 ? void 0 : _itemData$itemUpc2.itemNumber),
              itemPicture: ''
            });
            var row = worksheet.addRow(formattedItem);
            var rowIndex = row.number;
            worksheet.getRow(rowIndex).height = 100;
            worksheet.getRow(rowIndex).alignment = {
              vertical: 'middle',
              horizontal: 'left',
              wrapText: true
            };
            if (itemData.data && itemData.contentType) {
              try {
                var base64Image = void 0;
                if (typeof itemData.data === 'string') {
                  base64Image = itemData.data;
                } else if (itemData.data.data) {
                  var uint8Array = new Uint8Array(itemData.data.data);
                  var binary = '';
                  var len = uint8Array.byteLength;
                  for (var j = 0; j < len; j++) binary += String.fromCharCode(uint8Array[j]);
                  base64Image = window.btoa(binary);
                }
                if (base64Image) {
                  var imageId = workbook.addImage({
                    base64: "data:".concat(itemData.contentType, ";base64,").concat(base64Image),
                    extension: itemData.contentType.split('/')[1] || 'png'
                  });

                  // SQUARE RENDERING & CENTERING (Preserves Aspect Ratio)
                  // Row height 100pt ~= 133px. Col width 35 ~= 245px.
                  // Image 120x120px fits neatly centered.
                  worksheet.addImage(imageId, {
                    tl: {
                      col: 1,
                      row: rowIndex - 1,
                      offset: {
                        x: 60,
                        y: 8
                      }
                    },
                    ext: {
                      width: 120,
                      height: 120
                    },
                    editAs: 'oneCell'
                  });
                }
              } catch (err) {
                console.log('Image error');
              }
            }
          }
          console.log("Batched Export: Finished page ".concat(_page, " of ").concat(Math.ceil(totalItems / batchSize)));
        }

        // Format currency columns
        worksheet.eachRow((row, rowNumber) => {
          if (rowNumber > 1) {
            var costCell = row.getCell('itemCostPrice');
            var priceCell = row.getCell('itemSellingPrice');
            if (costCell.value) costCell.numFmt = '"$"#,##0.00';
            if (priceCell.value) priceCell.numFmt = '"$"#,##0.00';
          }
        });
        var buffer = yield workbook.xlsx.writeBuffer();
        var blob = new Blob([buffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = "Global_Gate_Full_Catalog_".concat(new Date().toLocaleDateString(), ".xlsx");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setLoading(false);
        alert("Export Successful!");
      } catch (error) {
        console.error('Export Error:', error);
        alert("An error occurred during export. This usually means the system is very busy. Please try again.");
        setLoading(false);
      }
    });
    return function handleExportToExcel() {
      return _ref17.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: open1,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, open1 && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_29__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_43__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_42__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "body2",
    color: "inherit"
  }, "Online"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: open1,
    onMouseEnter: () => setOpen1(true),
    onMouseLeave: () => setOpen1(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_30__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SideMaintenance__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_37__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_45__["default"], {
    value: value3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_46__["default"], {
    onChange: handleChange3,
    "aria-label": "lab API tabs example",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    label: "Item",
    value: "1",
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: '5px'
      },
      '&:hover': {
        color: 'gray',
        bgcolor: 'white',
        border: '1px solid gray',
        borderRadius: '5px'
      }
    }
  }), user.data.role === 'CEO' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    label: "Low Margin Item",
    value: "2",
    onClick: handleLoadMargin,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      color: "secondary",
      badgeContent: lowMargin.length,
      style: {
        marginTop: '-20px'
      }
    }),
    iconPosition: "end",
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: '5px'
      },
      '&:hover': {
        color: 'gray',
        bgcolor: 'white',
        border: '1px solid gray',
        borderRadius: '5px'
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_47__["default"], {
    value: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      height: 580,
      width: '100%',
      marginTop: '-50px'
    }
  }, item.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'left',
      margin: '10px'
    }
  }, selectedRows.length > 1 && selectedRows.length < item.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: user.data.role !== 'CEO',
    onClick: handleOpenAll,
    className: "btnCustomer2"
  }, "Delete multiple"), selectedRows.length === item.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleOpenAll,
    disabled: user.data.role !== 'CEO',
    className: "btnCustomer2"
  }, "Delete all") : '') : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleExportToExcel,
    className: "btnCustomer"
  }, "Export to Excel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    disabled: ItemInfoC.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
    to: '/ItemForm',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleRefreshSearch,
    className: "btnCustomer2"
  }, "Refresh Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__.DataGrid, {
    filterMode: "server",
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: item,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__.GridToolbar
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    getRowClassName: params => {
      return newPurchase.includes(params.row._id) ? 'new-Purchase' : '';
    },
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    checkboxSelection: true,
    disableColumnFilter: true,
    disableDensitySelector: true,
    rowSelectionModel: selectedRows,
    filterModel: filterModel,
    onFilterModelChange: handleFilterModelChange,
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    count: totalPage,
    page: page + 1,
    onChange: handlePageChange,
    color: "primary"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_47__["default"], {
    value: "2"
  }, loadingData1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_37__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      height: 570,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px',
      marginTop: '-60px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    label: "Search",
    id: "search2",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__.DataGrid, {
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: newArray,
    columns: columns2,
    pageSize: 10,
    rowsPerPageOptions: [10],
    checkboxSelection: true,
    disableSelectionOnClick: true,
    onSelectionModelChange: newSelection => {
      setSelectedRows(newSelection);
    },
    components: {
      Toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__.GridToolbar
    },
    filterModel: filterModel,
    onFilterModelChange: handleFilterModelChange,
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Do you want to Delete ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer2",
    onClick: handleOpenReasonDelete
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleClose
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: openDeleteMultiple,
    onClose: handleCloseMultiple,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Do you want to Delete ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer2",
    onClick: handleDeleteMany
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseMultiple
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: openDeleteAll,
    onClose: handleCloseAll,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Do you want to Delete ?"), selectedRows.length === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " Selected rows will be deleted"), selectedRows.length > 1 && selectedRows.length < item.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), selectedRows.length === item.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All rows will be deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer2",
    onClick: handleOpenReasonDelete
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseAll
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: modalOpenLoading,
    onClose: handleCloseModal,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_37__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), synced === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Synchronized Successfully") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Successfully Deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseModal,
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: loadingOpenModal,
    onClose: handleCloseModal,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_37__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_38__["default"], {
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
    onClick: handleCloseModal,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleCloseReasonDelete,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_44__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: ", info, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleDeleteMany
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemViewAdmin);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfSXRlbVZpZXdBZG1pbl9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxTQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOVjs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxZQUFZLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05iLENBQW9FO0FBQ2hEO0FBQ3VDO0FBQ1A7QUFDc0I7QUFDUjtBQUNoQztBQUMwQjtBQUNaO0FBQ0k7QUFDSTtBQUM2SDtBQUNySDtBQUNuQjtBQUNBO0FBQ0c7QUFDYztBQUNwQztBQUNrQjtBQUNNO0FBQ0s7QUFDeUI7QUFDdkM7QUFDcUI7QUFDdkI7QUFDa0I7QUFDUDtBQUNRO0FBQ2Q7QUFFYTtBQUMzQjtBQUU5QixJQUFNMEQsYUFBYSxHQUFHM0MsMERBQU0sQ0FBQzRDLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNqRC9ELDBEQUFBLENBQUMrQiw4REFBTyxFQUFBa0MsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPdEMsOERBQWMsQ0FBQ3VDLE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLEtBQUs7TUFDdEJDLEtBQUssRUFB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Z2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BZGQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9Mb2dvdXQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL0l0ZW1WaWV3QWRtaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnpcIlxufSksICdBZGQnKTsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIm0xNyA3LTEuNDEgMS40MUwxOC4xNyAxMUg4djJoMTAuMTdsLTIuNTggMi41OEwxNyAxN2w1LTV6TTQgNWg4VjNINGMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmg4di0ySDR6XCJcbn0pLCAnTG9nb3V0Jyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL3ZpZXcuY3NzJztcclxuaW1wb3J0IFNpZGVNYWludGVuYW5jZSBmcm9tICcuLi9jb21wb25lbnQvU2lkZU1haW50ZW5hbmNlJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0ICcuL1BhZ2VWaWV3L0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgc3R5bGVkLCBCb3gsIFRleHRGaWVsZCwgR3JpZCwgVGFiLCBQYWdpbmF0aW9uLCBDb250YWluZXIsIE1vZGFsLCBUb29sYmFyLCBDc3NCYXNlbGluZSwgRGl2aWRlciwgTGlzdCwgQmFkZ2UsIFR5cG9ncmFwaHksIEJhY2tkcm9wLCBQYXBlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IEFkZCwgTG9nb3V0IH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vaW1nL25vLWRhdGEucG5nJztcclxuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRUb29sYmFyIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuaW1wb3J0IHsgQ2xvc2UgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuXHJcbmltcG9ydCB7IFRhYkNvbnRleHQsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSAnQG11aS9sYWInO1xyXG5pbXBvcnQgRXhjZWxKUyBmcm9tICdleGNlbGpzJztcclxuXHJcbmNvbnN0IERlbGV0ZVRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBFZGl0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5cclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcblxyXG5mdW5jdGlvbiBJdGVtVmlld0FkbWluKCkge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKTtcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUsIGlkOiByZXMuZGF0YS5kYXRhLl9pZCB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hVc2VyKCk7XHJcbiAgfSwgW2Rpc3BhdGNoLCBuYXZpZ2F0ZV0pO1xyXG5cclxuICBjb25zdCBbZ3JhbnRBY2Nlc3MsIHNldEdyYW50QWNjZXNzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hOdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ3JhbnRBY2Nlc3NgKTtcclxuICAgICAgICByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy51c2VySUQgPT09IHVzZXIuZGF0YS5pZClcclxuICAgICAgICAgIC5tYXAoKHJvdykgPT4gc2V0R3JhbnRBY2Nlc3Mocm93Lm1vZHVsZXMpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoTnVtYmVyKCk7XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgY29uc3QgSXRlbUluZm9DID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkl0ZW1cIiAmJiByb3cuYWNjZXNzLmNyZWF0ZU0gPT09IHRydWUpO1xyXG4gIGNvbnN0IEl0ZW1JbmZvViA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJJdGVtXCIgJiYgcm93LmFjY2Vzcy52aWV3TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgSXRlbUluZm9VID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkl0ZW1cIiAmJiByb3cuYWNjZXNzLmVkaXRNID09PSB0cnVlKTtcclxuICBjb25zdCBJdGVtSW5mb0QgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiSXRlbVwiICYmIHJvdy5hY2Nlc3MuZGVsZXRlTSA9PT0gdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFtpdGVtLCBTZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuT2ZmbGluZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuZXdQdXJjaGFzZSwgc2V0TmV3UHVyY2hhc2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb3dNYXJnaW4sIHNldExvd01hcmdpbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RvdGFsUGFnZSwgU2V0VG90YWxQYWdlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApOyAvLyBJbml0aWFsaXplIHBhZ2Ugc3RhdGUgdG8gMCAoMC1iYXNlZCBpbmRleClcclxuICBjb25zdCBsaW1pdCA9IDEwMDtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7IC8vIEluaXRpYWxpemUgc2VhcmNoIHRlcm0gc3RhdGVcclxuICBjb25zdCBbZGVib3VuY2VkU2VhcmNoVGVybSwgc2V0RGVib3VuY2VkU2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZpbHRlckZpZWxkLCBzZXRGaWx0ZXJGaWVsZF0gPSB1c2VTdGF0ZSgnJyk7IC8vIEluaXRpYWxpemUgZmlsdGVyIGZpZWxkIHN0YXRlXHJcbiAgY29uc3QgW2ZpbHRlclZhbHVlLCBzZXRGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7IC8vIEluaXRpYWxpemUgZmlsdGVyIHZhbHVlIHN0YXRlXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldERlYm91bmNlZFNlYXJjaFRlcm0oc2VhcmNoVGVybSk7XHJcbiAgICB9LCAzMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChoYW5kbGVyKTtcclxuICB9LCBbc2VhcmNoVGVybV0pO1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IGZldGNoUmVxdWVzdElkID0gdXNlUmVmKDApO1xyXG5cclxuICBjb25zdCBmZXRjaEl0ZW1zID0gYXN5bmMgKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFJlcXVlc3RJZCA9ICsrZmV0Y2hSZXF1ZXN0SWQuY3VycmVudDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW0tSW5mb3JtYXRpb24/cGFnZT0ke3BhZ2UgKyAxfSZsaW1pdD0ke2xpbWl0fSZzZWFyY2g9JHtlbmNvZGVVUklDb21wb25lbnQoc2VhcmNoVGVybS50cmltKCkpfSZmaWx0ZXJGaWVsZD0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJGaWVsZC50cmltKCkpfSZmaWx0ZXJWYWx1ZT0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJWYWx1ZS50cmltKCkpfWApO1xyXG4gICAgICBpZiAoY3VycmVudFJlcXVlc3RJZCAhPT0gZmV0Y2hSZXF1ZXN0SWQuY3VycmVudCkgcmV0dXJuO1xyXG4gICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XHJcbiAgICAgIFNldFRvdGFsUGFnZShNYXRoLmNlaWwocmVzLmRhdGEudG90YWxJdGVtIC8gbGltaXQpKTsgLy8gRW5zdXJlIHRvdGFsUGFnZSBpcyBjb3JyZWN0bHkgY2FsY3VsYXRlZFxyXG4gICAgICBjb25zdCBmb3JtYXREYXRlID0gcmVzLmRhdGEuaXRlbUkubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgaWQ6IGl0ZW0uX2lkLFxyXG4gICAgICAgIEl0ZW1OdW1iZXI6IGl0ZW0uaXRlbVVwYy5uZXdDb2RlICsgJy0wJyArIGl0ZW0uaXRlbVVwYy5pdGVtTnVtYmVyLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIFNldEl0ZW1zKGZvcm1hdERhdGUpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGN1cnJlbnRSZXF1ZXN0SWQgIT09IGZldGNoUmVxdWVzdElkLmN1cnJlbnQpIHJldHVybjtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hJdGVtcyhwYWdlLCBkZWJvdW5jZWRTZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpO1xyXG4gIH0sIFtwYWdlLCBkZWJvdW5jZWRTZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWVdKTtcclxuICAvL2NvbnNvbGUubG9nKGl0ZW0pXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xyXG4gICAgc2V0UGFnZShuZXdQYWdlIC0gMSk7IC8vIFVwZGF0ZSBwYWdlIHN0YXRlIChjb252ZXJ0IHRvIDAtYmFzZWQgaW5kZXgpXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlZnJlc2hTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBmZXRjaEl0ZW1zKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmdEYXRhMSwgc2V0TG9hZGluZ0RhdGExXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGhhbmRsZUxvYWRNYXJnaW4gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzTG93ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vbG93LW1hcmdpbi1pdGVtYCk7XHJcbiAgICAgIHNldExvd01hcmdpbihyZXNMb3cuZGF0YS5kYXRhLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgIGlkOiBpdGVtLl9pZCxcclxuICAgICAgICBJdGVtTnVtYmVyOiBpdGVtLml0ZW1VcGMubmV3Q29kZSArICctMCcgKyBpdGVtLml0ZW1VcGMuaXRlbU51bWJlcixcclxuICAgICAgfSkpKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGExKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xyXG4gICAgICBzZXRMb2FkaW5nRGF0YTEoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuXHJcblxyXG4gIGNvbnN0IFtvcGVuUmVhc29uRGVsZXRlLCBzZXRPcGVuUmVhc29uRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRPcGVuUmVhc29uRGVsZXRlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlUmVhc29uRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlblJlYXNvbkRlbGV0ZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtEZWxldGVJZCwgc2V0RGVsZXRlSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21vZGFsT3BlbkxvYWRpbmcsIHNldE1vZGFsT3BlbkxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFJvd3MsIHNldFNlbGVjdGVkUm93c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICBzZXREZWxldGVJZChpZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxPcGVuTG9hZGluZyh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtvcGVuRGVsZXRlTXVsdGlwbGUsIHNldE9wZW5EZWxldGVNdWx0aXBsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5NdWx0aXBsZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EZWxldGVNdWx0aXBsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZU11bHRpcGxlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZU11bHRpcGxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbb3BlbkRlbGV0ZUFsbCwgc2V0T3BlbkRlbGV0ZUFsbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5BbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGVsZXRlQWxsKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQWxsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZUFsbChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICBzZXRPcGVuRGVsZXRlQWxsKGZhbHNlKTtcclxuICAgIHNldE9wZW5EZWxldGVNdWx0aXBsZShmYWxzZSk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIGZldGNoSXRlbXMocGFnZSwgc2VhcmNoVGVybSwgZmlsdGVyRmllbGQsIGZpbHRlclZhbHVlKTsgLy8gUmVmcmVzaCBkYXRhIHdpdGhvdXQgcmVsb2FkXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLWl0ZW0vJHtEZWxldGVJZH1gKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZU9wZW5Nb2RhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydCgndHJ5IGFnYWluJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW0l0ZW1EZWxldGVkLCBzZXRJdGVtRGVsZXRlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZVByb21pc2VzID0gc2VsZWN0ZWRSb3dzLm1hcChhc3luYyAoaWRUb0RlbGV0ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2lkVG9EZWxldGV9YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKGRlbGV0ZVByb21pc2VzKTtcclxuICAgICAgICBzZXRJdGVtRGVsZXRlZChyZXMubWFwKChyb3cpID0+IHJvdy5kYXRhLmRhdGEuaXRlbU5hbWUpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaEZ1bmN0aW9uKCk7XHJcbiAgfSwgW3NlbGVjdGVkUm93c10pO1xyXG5cclxuICBjb25zdCByZWxhdGVkID0gSXRlbURlbGV0ZWQubWFwKHJvdyA9PiByb3cpO1xyXG4gIGNvbnN0IGluZm8gPSByZWxhdGVkLnRvU3RyaW5nKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogJycsXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBEZWxldGVkICcgKyBpbmZvLFxyXG4gICAgICByZWFzb24sXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZU1hbnkgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGVsZXRlUHJvbWlzZXMgPSBzZWxlY3RlZFJvd3MubWFwKGFzeW5jIChpZFRvRGVsZXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiBheGlvcy5kZWxldGUoYCR7RU5EUE9JTlRfVVJMfS9kZWxldGUtaXRlbS8ke2lkVG9EZWxldGV9YCk7XHJcbiAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKGRlbGV0ZVByb21pc2VzKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbigpO1xyXG4gICAgICAgIGhhbmRsZU9wZW5Nb2RhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3N5bmNlZCwgc2V0U3luY2VkXSA9IHVzZVN0YXRlKCdmYWxzZScpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaEl0ZW0sIHNldFNlYXJjaEl0ZW1dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1F1aWNrRmlsdGVySXRlbScpO1xyXG4gICAgaWYgKHN0b3JlZFZhbHVlKSB7XHJcbiAgICAgIHNldFNlYXJjaEl0ZW0oc3RvcmVkVmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbZmlsdGVyTW9kZWwsIHNldEZpbHRlck1vZGVsXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIHF1aWNrRmlsdGVyRXhjbHVkZUhpZGRlbkNvbHVtbnM6IHRydWUsXHJcbiAgICBxdWlja0ZpbHRlclZhbHVlczogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgW2NvbHVtblZpc2liaWxpdHlNb2RlbCwgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBoYW5kZWxIaWRkZW5Db2x1bW4gPSAobmV3SGlkZGVuKSA9PiB7XHJcbiAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwobmV3SGlkZGVuKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdIaWRkZW5Db2x1bW5zSXRlbScsIEpTT04uc3RyaW5naWZ5KG5ld0hpZGRlbikpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRRdWljayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1F1aWNrRmlsdGVySXRlbVZpZXdEaXNwbGF5JykpO1xyXG4gICAgaWYgKHN0b3JlZFF1aWNrKSB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBzdG9yZWRRdWljay5xdWlja0ZpbHRlclZhbHVlcz8uam9pbignICcpIHx8ICcnO1xyXG4gICAgICBzZXRTZWFyY2hUZXJtKHNlYXJjaFRlcm0pO1xyXG4gICAgICBzZXRGaWx0ZXJNb2RlbChzdG9yZWRRdWljayk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdG9yZWRDb2x1bW5zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnSGlkZGVuQ29sdW1uc0l0ZW0nKSk7XHJcbiAgICBpZiAoc3RvcmVkQ29sdW1ucykge1xyXG4gICAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwoc3RvcmVkQ29sdW1ucyk7XHJcbiAgICB9XHJcbiAgfSwgW3NlYXJjaEl0ZW1dKTtcclxuXHJcbiAgY29uc3QgW29wZW4xLCBzZXRPcGVuMV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMSghb3BlbjEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFt2YWx1ZTMsIHNldFZhbHVlM10gPSBSZWFjdC51c2VTdGF0ZSgnMScpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UzID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgIHNldFZhbHVlMyhjaGFuZ2VWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaDIsIHNldFNlYXJjaDJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaDIgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFNlYXJjaDIodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5ld0FycmF5ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBsb3dlclNlYXJjaDIgPSBzZWFyY2gyLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgcmV0dXJuIHNlYXJjaDIgIT09ICcnID8gbG93TWFyZ2luLmZpbHRlcigoSXRlbSkgPT5cclxuICAgICAgKEl0ZW0uaXRlbU5hbWUgJiYgSXRlbS5pdGVtTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyU2VhcmNoMikpIHx8XHJcbiAgICAgIChJdGVtLml0ZW1EZXNjcmlwdGlvbiAmJiBJdGVtLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyU2VhcmNoMikpIHx8XHJcbiAgICAgIChJdGVtLml0ZW1VcGMgJiYgKEl0ZW0uaXRlbVVwYy5uZXdDb2RlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJTZWFyY2gyKSB8fCBJdGVtLml0ZW1VcGMuaXRlbU51bWJlci50b1N0cmluZygpLmluY2x1ZGVzKGxvd2VyU2VhcmNoMikpKSB8fFxyXG4gICAgICAoSXRlbS5pdGVtQ2F0ZWdvcnkgJiYgSXRlbS5pdGVtQ2F0ZWdvcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclNlYXJjaDIpKSB8fFxyXG4gICAgICAoSXRlbS5pdGVtQnJhbmQgJiYgSXRlbS5pdGVtQnJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclNlYXJjaDIpKSB8fFxyXG4gICAgICAoSXRlbS5pdGVtU3RvcmUgJiYgSXRlbS5pdGVtU3RvcmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclNlYXJjaDIpKVxyXG4gICAgKSA6IGxvd01hcmdpbjtcclxuICB9LCBbbG93TWFyZ2luLCBzZWFyY2gyXSk7XHJcblxyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7IGZpZWxkOiAnSXRlbU51bWJlcicsIGhlYWRlck5hbWU6ICdJdGVtIE51bWJlcicsIG1pbldpZHRoOiA5MCwgZmxleDogMC44IH0sXHJcbiAgICB7IGZpZWxkOiAnaXRlbU5hbWUnLCBoZWFkZXJOYW1lOiAnSXRlbSBOYW1lJywgbWluV2lkdGg6IDIwMCwgZmxleDogMiwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gcGFyYW1zLnJvdy5pdGVtTmFtZS50b1VwcGVyQ2FzZSgpIH0sXHJcbiAgICB7IGZpZWxkOiAnaXRlbUNhdGVnb3J5JywgaGVhZGVyTmFtZTogJ0NhdGVnb3J5JywgbWluV2lkdGg6IDEwMCwgZmxleDogMSB9LFxyXG4gICAgeyBmaWVsZDogJ2l0ZW1CcmFuZCcsIGhlYWRlck5hbWU6ICdpdGVtQnJhbmQnLCBtaW5XaWR0aDogMTAwLCBmbGV4OiAxIH0sXHJcbiAgICB7IGZpZWxkOiAnaXRlbURlc2NyaXB0aW9uJywgaGVhZGVyTmFtZTogJ0Rlc2NyaXB0aW9uJywgbWluV2lkdGg6IDIwMCwgZmxleDogMiwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gcGFyYW1zLnJvdy5pdGVtRGVzY3JpcHRpb24udG9VcHBlckNhc2UoKSB9LFxyXG4gICAgeyBmaWVsZDogJ2l0ZW1TZWxsaW5nUHJpY2UnLCBoZWFkZXJOYW1lOiAnUHJpY2UnLCBtaW5XaWR0aDogMTAwLCBmbGV4OiAxLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiBgJCR7cGFyYW1zLnJvdy5pdGVtU2VsbGluZ1ByaWNlfWAgfSxcclxuICAgIHsgZmllbGQ6ICdpdGVtUXVhbnRpdHknLCBoZWFkZXJOYW1lOiAnU3RvY2snLCBtaW5XaWR0aDogMTAwLCBmbGV4OiAxLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiBgJHtwYXJhbXMucm93Lml0ZW1RdWFudGl0eSArICcgJyArIHBhcmFtcy5yb3cudW5pdD8udG9VcHBlckNhc2UoKX1gIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAndmlldycsIGhlYWRlck5hbWU6ICdWaWV3Jywgd2lkdGg6IDYwLCBtaW5XaWR0aDogNjAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJWaWV3XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e0l0ZW1JbmZvVi5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9JdGVtSW5mby8ke3BhcmFtcy5yb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgPFZpc2liaWxpdHlJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ2VkaXQnLCBoZWFkZXJOYW1lOiAnRWRpdCcsIHdpZHRoOiA2MCwgbWluV2lkdGg6IDYwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPEVkaXRUb29sdGlwIHRpdGxlPVwiRWRpdFwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGRpc2FibGVkPXtJdGVtSW5mb1UubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvSXRlbUZvcm1VcGRhdGUvJHtwYXJhbXMucm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgIDxFZGl0SWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9FZGl0VG9vbHRpcD5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdEZWxldGUnLCBoZWFkZXJOYW1lOiAnRGVsZXRlJywgd2lkdGg6IDYwLCBtaW5XaWR0aDogNjAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8RGVsZXRlVG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5BbGx9IGRpc2FibGVkPXtJdGVtSW5mb0QubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9EZWxldGVUb29sdGlwPlxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGNvbHVtbnMyID0gW1xyXG4gICAgeyBmaWVsZDogJ0l0ZW1OdW1iZXInLCBoZWFkZXJOYW1lOiAnSXRlbSBOdW1iZXInLCBtaW5XaWR0aDogOTAsIGZsZXg6IDAuOCB9LFxyXG4gICAgeyBmaWVsZDogJ3R5cGVJdGVtJywgaGVhZGVyTmFtZTogJ1R5cGUnLCBtaW5XaWR0aDogNzAsIGZsZXg6IDAuNSB9LFxyXG4gICAgeyBmaWVsZDogJ2l0ZW1OYW1lJywgaGVhZGVyTmFtZTogJ0l0ZW0gTmFtZScsIG1pbldpZHRoOiAyMDAsIGZsZXg6IDIsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IHBhcmFtcy5yb3cuaXRlbU5hbWUudG9VcHBlckNhc2UoKSB9LFxyXG4gICAgeyBmaWVsZDogJ2l0ZW1DYXRlZ29yeScsIGhlYWRlck5hbWU6ICdDYXRlZ29yeScsIG1pbldpZHRoOiAxMDAsIGZsZXg6IDEgfSxcclxuICAgIHsgZmllbGQ6ICdpdGVtQnJhbmQnLCBoZWFkZXJOYW1lOiAnaXRlbUJyYW5kJywgbWluV2lkdGg6IDEwMCwgZmxleDogMSB9LFxyXG4gICAgeyBmaWVsZDogJ2l0ZW1EZXNjcmlwdGlvbicsIGhlYWRlck5hbWU6ICdEZXNjcmlwdGlvbicsIG1pbldpZHRoOiAyMDAsIGZsZXg6IDIsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IHBhcmFtcy5yb3cuaXRlbURlc2NyaXB0aW9uLnRvVXBwZXJDYXNlKCkgfSxcclxuICAgIHsgZmllbGQ6ICdpdGVtU2VsbGluZ1ByaWNlJywgaGVhZGVyTmFtZTogJ1ByaWNlJywgbWluV2lkdGg6IDEwMCwgZmxleDogMSwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4geyBwYXJzZUZsb2F0KHBhcmFtcy5yb3cuaXRlbVNlbGxpbmdQcmljZSk/LnRvRml4ZWQoMikgfSB9LFxyXG4gICAgeyBmaWVsZDogJ2l0ZW1RdWFudGl0eScsIGhlYWRlck5hbWU6ICdTdG9jaycsIG1pbldpZHRoOiAxMDAsIGZsZXg6IDEsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IGAke3BhcmFtcy5yb3cuaXRlbVF1YW50aXR5ICsgJyAnICsgcGFyYW1zLnJvdy51bml0Py50b1VwcGVyQ2FzZSgpfWAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICd2aWV3JywgaGVhZGVyTmFtZTogJ1ZpZXcnLCB3aWR0aDogNjAsIG1pbldpZHRoOiA2MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIlZpZXdcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17SXRlbUluZm9WLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0l0ZW1JbmZvLyR7cGFyYW1zLnJvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnZWRpdCcsIGhlYWRlck5hbWU6ICdFZGl0Jywgd2lkdGg6IDYwLCBtaW5XaWR0aDogNjAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8RWRpdFRvb2x0aXAgdGl0bGU9XCJFZGl0XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e0l0ZW1JbmZvVS5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9JdGVtRm9ybVVwZGF0ZS8ke3BhcmFtcy5yb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgPEVkaXRJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0VkaXRUb29sdGlwPlxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ0RlbGV0ZScsIGhlYWRlck5hbWU6ICdEZWxldGUnLCB3aWR0aDogNjAsIG1pbldpZHRoOiA2MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxEZWxldGVUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkFsbH0gZGlzYWJsZWQ9e0l0ZW1JbmZvRC5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0RlbGV0ZVRvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlsdGVyTW9kZWxDaGFuZ2UgPSAobmV3RmlsdGVyTW9kZWwpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBuZXdGaWx0ZXJNb2RlbC5xdWlja0ZpbHRlclZhbHVlcz8uam9pbignICcpIHx8ICcnO1xyXG4gICAgc2V0U2VhcmNoVGVybShzZWFyY2hUZXJtKTtcclxuICAgIHNldFBhZ2UoMCk7XHJcbiAgICBzZXRGaWx0ZXJNb2RlbChuZXdGaWx0ZXJNb2RlbCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUXVpY2tGaWx0ZXJJdGVtVmlld0Rpc3BsYXknLCBKU09OLnN0cmluZ2lmeShuZXdGaWx0ZXJNb2RlbCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUV4cG9ydFRvRXhjZWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBhbGVydChcIlByZXBhcmluZyBGdWxsIENhdGFsb2cgRXhwb3J0IChBbGwgSXRlbXMpLiBEb3dubG9hZGluZyBpbiBiYXRjaGVzLi4uIFBsZWFzZSBzdGF5IG9uIHRoaXMgc2NyZWVuLlwiKTtcclxuXHJcbiAgICAgIC8vIDEuIEdldCB0aGUgdG90YWwgY291bnQgb2YgaXRlbXMgZmlyc3RcclxuICAgICAgY29uc3QgY291bnRSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtLUluZm9ybWF0aW9uP3BhZ2U9MSZsaW1pdD0xYCk7XHJcbiAgICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBjb3VudFJlcy5kYXRhLnRvdGFsSXRlbSB8fCAwO1xyXG5cclxuICAgICAgaWYgKHRvdGFsSXRlbXMgPT09IDApIHtcclxuICAgICAgICBhbGVydChcIk5vIGl0ZW1zIGZvdW5kIHRvIGV4cG9ydC5cIik7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB3b3JrYm9vayA9IG5ldyBFeGNlbEpTLldvcmtib29rKCk7XHJcbiAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHdvcmtib29rLmFkZFdvcmtzaGVldCgnSXRlbXMnKTtcclxuXHJcbiAgICAgIC8vIERlZmluZSBjb2x1bW5zXHJcbiAgICAgIHdvcmtzaGVldC5jb2x1bW5zID0gW1xyXG4gICAgICAgIHsgaGVhZGVyOiAnSXRlbSBOdW1iZXInLCBrZXk6ICdJdGVtTnVtYmVyJywgd2lkdGg6IDE1IH0sXHJcbiAgICAgICAgeyBoZWFkZXI6ICdJdGVtIFBpY3R1cmUnLCBrZXk6ICdpdGVtUGljdHVyZScsIHdpZHRoOiAzNSB9LCAvLyBDb2x1bW4gQlxyXG4gICAgICAgIHsgaGVhZGVyOiAnVHlwZScsIGtleTogJ3R5cGVJdGVtJywgd2lkdGg6IDE1IH0sXHJcbiAgICAgICAgeyBoZWFkZXI6ICdJdGVtIE5hbWUnLCBrZXk6ICdpdGVtTmFtZScsIHdpZHRoOiA0MCB9LFxyXG4gICAgICAgIHsgaGVhZGVyOiAnQ2F0ZWdvcnknLCBrZXk6ICdpdGVtQ2F0ZWdvcnknLCB3aWR0aDogMjAgfSxcclxuICAgICAgICB7IGhlYWRlcjogJ0JyYW5kJywga2V5OiAnaXRlbUJyYW5kJywgd2lkdGg6IDE1IH0sXHJcbiAgICAgICAgeyBoZWFkZXI6ICdEZXNjcmlwdGlvbicsIGtleTogJ2l0ZW1EZXNjcmlwdGlvbicsIHdpZHRoOiA1MCB9LFxyXG4gICAgICAgIHsgaGVhZGVyOiAnQ29zdCBQcmljZScsIGtleTogJ2l0ZW1Db3N0UHJpY2UnLCB3aWR0aDogMTUgfSxcclxuICAgICAgICB7IGhlYWRlcjogJ1ByaWNlJywga2V5OiAnaXRlbVNlbGxpbmdQcmljZScsIHdpZHRoOiAxNSB9LFxyXG4gICAgICAgIHsgaGVhZGVyOiAnU3RvY2snLCBrZXk6ICdpdGVtUXVhbnRpdHknLCB3aWR0aDogMTUgfSxcclxuICAgICAgXTtcclxuXHJcbiAgICAgIC8vIFN0eWxlIGhlYWRlcnNcclxuICAgICAgd29ya3NoZWV0LmdldFJvdygxKS5mb250ID0geyBib2xkOiB0cnVlIH07XHJcbiAgICAgIHdvcmtzaGVldC5nZXRSb3coMSkuYWxpZ25tZW50ID0geyB2ZXJ0aWNhbDogJ21pZGRsZScsIGhvcml6b250YWw6ICdjZW50ZXInIH07XHJcbiAgICAgIHdvcmtzaGVldC5nZXRSb3coMSkuaGVpZ2h0ID0gMzA7XHJcblxyXG4gICAgICAvLyAyLiBGZXRjaCBhbGwgaXRlbXMgaW4gYmF0Y2hlcyBvZiA1MDBcclxuICAgICAgY29uc3QgYmF0Y2hTaXplID0gNTAwO1xyXG5cclxuICAgICAgZm9yIChsZXQgcGFnZSA9IDE7IHBhZ2UgPD0gTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBiYXRjaFNpemUpOyBwYWdlKyspIHtcclxuICAgICAgICBjb25zdCBiYXRjaFJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW0tSW5mb3JtYXRpb24/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7YmF0Y2hTaXplfSZzZWFyY2g9JmZpbHRlckZpZWxkPSZmaWx0ZXJWYWx1ZT1gKTtcclxuICAgICAgICBjb25zdCBiYXRjaEl0ZW1zID0gQXJyYXkuaXNBcnJheShiYXRjaFJlcy5kYXRhLml0ZW1JKSA/IGJhdGNoUmVzLmRhdGEuaXRlbUkgOiBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtRGF0YSBvZiBiYXRjaEl0ZW1zKSB7XHJcbiAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRJdGVtID0ge1xyXG4gICAgICAgICAgICAuLi5pdGVtRGF0YSxcclxuICAgICAgICAgICAgSXRlbU51bWJlcjogaXRlbURhdGEuaXRlbVVwYz8ubmV3Q29kZSArICctMCcgKyBpdGVtRGF0YS5pdGVtVXBjPy5pdGVtTnVtYmVyLFxyXG4gICAgICAgICAgICBpdGVtUGljdHVyZTogJydcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3Qgcm93ID0gd29ya3NoZWV0LmFkZFJvdyhmb3JtYXR0ZWRJdGVtKTtcclxuICAgICAgICAgIGNvbnN0IHJvd0luZGV4ID0gcm93Lm51bWJlcjtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgd29ya3NoZWV0LmdldFJvdyhyb3dJbmRleCkuaGVpZ2h0ID0gMTAwO1xyXG4gICAgICAgICAgd29ya3NoZWV0LmdldFJvdyhyb3dJbmRleCkuYWxpZ25tZW50ID0geyB2ZXJ0aWNhbDogJ21pZGRsZScsIGhvcml6b250YWw6ICdsZWZ0Jywgd3JhcFRleHQ6IHRydWUgfTtcclxuXHJcbiAgICAgICAgICBpZiAoaXRlbURhdGEuZGF0YSAmJiBpdGVtRGF0YS5jb250ZW50VHlwZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGxldCBiYXNlNjRJbWFnZTtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW1EYXRhLmRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlNjRJbWFnZSA9IGl0ZW1EYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtRGF0YS5kYXRhLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheShpdGVtRGF0YS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJpbmFyeSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuID0gdWludDhBcnJheS5ieXRlTGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGorKykgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodWludDhBcnJheVtqXSk7XHJcbiAgICAgICAgICAgICAgICBiYXNlNjRJbWFnZSA9IHdpbmRvdy5idG9hKGJpbmFyeSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAoYmFzZTY0SW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlSWQgPSB3b3JrYm9vay5hZGRJbWFnZSh7XHJcbiAgICAgICAgICAgICAgICAgIGJhc2U2NDogYGRhdGE6JHtpdGVtRGF0YS5jb250ZW50VHlwZX07YmFzZTY0LCR7YmFzZTY0SW1hZ2V9YCxcclxuICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiBpdGVtRGF0YS5jb250ZW50VHlwZS5zcGxpdCgnLycpWzFdIHx8ICdwbmcnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU1FVQVJFIFJFTkRFUklORyAmIENFTlRFUklORyAoUHJlc2VydmVzIEFzcGVjdCBSYXRpbylcclxuICAgICAgICAgICAgICAgIC8vIFJvdyBoZWlnaHQgMTAwcHQgfj0gMTMzcHguIENvbCB3aWR0aCAzNSB+PSAyNDVweC5cclxuICAgICAgICAgICAgICAgIC8vIEltYWdlIDEyMHgxMjBweCBmaXRzIG5lYXRseSBjZW50ZXJlZC5cclxuICAgICAgICAgICAgICAgIHdvcmtzaGVldC5hZGRJbWFnZShpbWFnZUlkLCB7XHJcbiAgICAgICAgICAgICAgICAgIHRsOiB7IGNvbDogMSwgcm93OiByb3dJbmRleCAtIDEsIG9mZnNldDogeyB4OiA2MCwgeTogOCB9IH0sXHJcbiAgICAgICAgICAgICAgICAgIGV4dDogeyB3aWR0aDogMTIwLCBoZWlnaHQ6IDEyMCB9LFxyXG4gICAgICAgICAgICAgICAgICBlZGl0QXM6ICdvbmVDZWxsJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHsgY29uc29sZS5sb2coJ0ltYWdlIGVycm9yJyk7IH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYEJhdGNoZWQgRXhwb3J0OiBGaW5pc2hlZCBwYWdlICR7cGFnZX0gb2YgJHtNYXRoLmNlaWwodG90YWxJdGVtcyAvIGJhdGNoU2l6ZSl9YCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEZvcm1hdCBjdXJyZW5jeSBjb2x1bW5zXHJcbiAgICAgIHdvcmtzaGVldC5lYWNoUm93KChyb3csIHJvd051bWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChyb3dOdW1iZXIgPiAxKSB7XHJcbiAgICAgICAgICBjb25zdCBjb3N0Q2VsbCA9IHJvdy5nZXRDZWxsKCdpdGVtQ29zdFByaWNlJyk7XHJcbiAgICAgICAgICBjb25zdCBwcmljZUNlbGwgPSByb3cuZ2V0Q2VsbCgnaXRlbVNlbGxpbmdQcmljZScpO1xyXG4gICAgICAgICAgaWYgKGNvc3RDZWxsLnZhbHVlKSBjb3N0Q2VsbC5udW1GbXQgPSAnXCIkXCIjLCMjMC4wMCc7XHJcbiAgICAgICAgICBpZiAocHJpY2VDZWxsLnZhbHVlKSBwcmljZUNlbGwubnVtRm10ID0gJ1wiJFwiIywjIzAuMDAnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCB3b3JrYm9vay54bHN4LndyaXRlQnVmZmVyKCk7XHJcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnIH0pO1xyXG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICBsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICBsaW5rLmRvd25sb2FkID0gYEdsb2JhbF9HYXRlX0Z1bGxfQ2F0YWxvZ18ke25ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9Lnhsc3hgO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgIFxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgYWxlcnQoXCJFeHBvcnQgU3VjY2Vzc2Z1bCFcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFeHBvcnQgRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIGR1cmluZyBleHBvcnQuIFRoaXMgdXN1YWxseSBtZWFucyB0aGUgc3lzdGVtIGlzIHZlcnkgYnVzeS4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17b3BlbjF9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKG9wZW4xICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEl0ZW1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgICAgICAgT25saW5lXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtvcGVuMX0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRPcGVuMSh0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRPcGVuMShmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlTWFpbnRlbmFuY2UgLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDEgfX0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsb2FkaW5nRGF0YSA/IDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnMTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxUYWJDb250ZXh0IHZhbHVlPXt2YWx1ZTN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFiTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxhYiBBUEkgdGFicyBleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiSXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMb3cgTWFyZ2luIEl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2FkTWFyZ2lufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8QmFkZ2UgY29sb3I9XCJzZWNvbmRhcnlcIiBiYWRnZUNvbnRlbnQ9e2xvd01hcmdpbi5sZW5ndGh9IHN0eWxlPXt7IG1hcmdpblRvcDogJy0yMHB4JyB9fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPSdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9JzEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDU4MCwgd2lkdGg6ICcxMDAlJywgbWFyZ2luVG9wOiAnLTUwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdsZWZ0JywgbWFyZ2luOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID4gMSAmJiBzZWxlY3RlZFJvd3MubGVuZ3RoIDwgaXRlbS5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfSBvbkNsaWNrPXtoYW5kbGVPcGVuQWxsfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+RGVsZXRlIG11bHRpcGxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID09PSBpdGVtLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlT3BlbkFsbH0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInPkRlbGV0ZSBhbGw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRXhwb3J0VG9FeGNlbH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+RXhwb3J0IHRvIEV4Y2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGRpc2FibGVkPXtJdGVtSW5mb0MubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9JdGVtRm9ybSd9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyQWRkaW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlZnJlc2hTZWFyY2h9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJz5SZWZyZXNoIFNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJNb2RlPVwic2VydmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZT1cInNlcnZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQ9e3RvdGFsUGFnZSAqIGxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RzPXt7IHRvb2xiYXI6IEdyaWRUb29sYmFyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dRdWlja0ZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVUb29sYmFyQnV0dG9uOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRSb3dDbGFzc05hbWU9eyhwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1B1cmNoYXNlLmluY2x1ZGVzKHBhcmFtcy5yb3cuX2lkKSA/ICduZXctUHVyY2hhc2UnIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJvd1NlbGVjdGlvbk1vZGVsQ2hhbmdlPXsobmV3U2VsZWN0aW9uKSA9PiBzZXRTZWxlY3RlZFJvd3MobmV3U2VsZWN0aW9uKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNvbHVtbkZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURlbnNpdHlTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uTW9kZWw9e3NlbGVjdGVkUm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck1vZGVsPXtmaWx0ZXJNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmlsdGVyTW9kZWxDaGFuZ2U9e2hhbmRsZUZpbHRlck1vZGVsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uVmlzaWJpbGl0eU1vZGVsPXtjb2x1bW5WaXNpYmlsaXR5TW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZT17aGFuZGVsSGlkZGVuQ29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBwYWRkaW5nOiAnMTBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIGNvdW50PXt0b3RhbFBhZ2V9IHBhZ2U9e3BhZ2UgKyAxfSBvbkNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX0gY29sb3I9XCJwcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmdEYXRhMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnMTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGhlaWdodDogNTcwLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICctNjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiU2VhcmNoXCIgaWQ9XCJzZWFyY2gyXCIgdmFsdWU9e3NlYXJjaDJ9IHZhcmlhbnQ9XCJzdGFuZGFyZFwiIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2gyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZT1cInNlcnZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQ9e3RvdGFsUGFnZSAqIGxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtuZXdBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnMyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbMTBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVTZWxlY3Rpb25PbkNsaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbk1vZGVsQ2hhbmdlPXsobmV3U2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkUm93cyhuZXdTZWxlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9vbGJhcjogR3JpZFRvb2xiYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTW9kZWw9e2ZpbHRlck1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GaWx0ZXJNb2RlbENoYW5nZT17aGFuZGxlRmlsdGVyTW9kZWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WaXNpYmlsaXR5TW9kZWw9e2NvbHVtblZpc2liaWxpdHlNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29sdW1uVmlzaWJpbGl0eU1vZGVsQ2hhbmdlPXtoYW5kZWxIaWRkZW5Db2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFiQ29udGV4dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgb25DbGljaz17aGFuZGxlT3BlblJlYXNvbkRlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuRGVsZXRlTXVsdGlwbGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNdWx0aXBsZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHNlbGVjdGVkIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJyBvbkNsaWNrPXtoYW5kbGVEZWxldGVNYW55fT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VNdWx0aXBsZX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkRlbGV0ZUFsbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUFsbH1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gU2VsZWN0ZWQgcm93cyB3aWxsIGJlIGRlbGV0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID4gMSAmJiBzZWxlY3RlZFJvd3MubGVuZ3RoIDwgaXRlbS5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHNlbGVjdGVkIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PT0gaXRlbS5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJyBvbkNsaWNrPXtoYW5kbGVPcGVuUmVhc29uRGVsZXRlfT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VBbGx9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e21vZGFsT3BlbkxvYWRpbmd9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgc3luY2VkID09PSAndHJ1ZScgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxoMj4gRGF0YSBTeW5jaHJvbml6ZWQgU3VjY2Vzc2Z1bGx5PC9oMj4gOlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj4gRGF0YSBTdWNjZXNzZnVsbHkgRGVsZXRlZDwvaDI+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VSZWFzb25EZWxldGV9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIFdoeSBkbyB5b3Ugd2FudCB0byBkZWxldGU6IHtpbmZvfT9cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVEZWxldGVNYW55fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBpZD0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlYXNvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdSZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbVZpZXdBZG1pbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwidXNlUmVmIiwiU2lkZU1haW50ZW5hbmNlIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiVmlzaWJpbGl0eUljb24iLCJFZGl0SWNvbiIsIkRlbGV0ZUljb24iLCJOYXZMaW5rIiwidXNlTmF2aWdhdGUiLCJJY29uQnV0dG9uIiwic3R5bGVkIiwiQm94IiwiVGV4dEZpZWxkIiwiR3JpZCIsIlRhYiIsIlBhZ2luYXRpb24iLCJDb250YWluZXIiLCJNb2RhbCIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIkRpdmlkZXIiLCJMaXN0IiwiQmFkZ2UiLCJUeXBvZ3JhcGh5IiwiQmFja2Ryb3AiLCJQYXBlciIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIk11aURyYXdlciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJBZGQiLCJMb2dvdXQiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9hZGVyIiwiQ2hlY2tDaXJjbGVJY29uIiwiSW1hZ2UiLCJEYXRhR3JpZCIsIkdyaWRUb29sYmFyIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiQ2xvc2UiLCJUYWJDb250ZXh0IiwiVGFiTGlzdCIsIlRhYlBhbmVsIiwiRXhjZWxKUyIsIkRlbGV0ZVRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIkVkaXRUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJWaWV3VG9vbHRpcCIsIl9yZWY1IiwiX2V4Y2x1ZGVkMyIsIl9yZWY2Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY3Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWY4Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiSXRlbVZpZXdBZG1pbiIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY5IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJpZCIsIl9pZCIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZ3JhbnRBY2Nlc3MiLCJzZXRHcmFudEFjY2VzcyIsImZldGNoTnVtYmVyIiwiX3JlZjAiLCJfcmVzJGRhdGEiLCJmaWx0ZXIiLCJyb3ciLCJ1c2VySUQiLCJtYXAiLCJtb2R1bGVzIiwiSXRlbUluZm9DIiwibW9kdWxlTmFtZSIsImFjY2VzcyIsImNyZWF0ZU0iLCJJdGVtSW5mb1YiLCJ2aWV3TSIsIkl0ZW1JbmZvVSIsImVkaXRNIiwiSXRlbUluZm9EIiwiZGVsZXRlTSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiaXRlbSIsIlNldEl0ZW1zIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJsb2FkaW5nRGF0YSIsInNldExvYWRpbmdEYXRhIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3Blbk9mZmxpbmUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlRXJyb3IiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwicmVhc29uIiwic2V0UmVhc29uIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsIm5ld1B1cmNoYXNlIiwic2V0TmV3UHVyY2hhc2UiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwibG93TWFyZ2luIiwic2V0TG93TWFyZ2luIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInRvdGFsUGFnZSIsIlNldFRvdGFsUGFnZSIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJwYWdlIiwic2V0UGFnZSIsImxpbWl0IiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImRlYm91bmNlZFNlYXJjaFRlcm0iLCJzZXREZWJvdW5jZWRTZWFyY2hUZXJtIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsImZpbHRlckZpZWxkIiwic2V0RmlsdGVyRmllbGQiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwiZmlsdGVyVmFsdWUiLCJzZXRGaWx0ZXJWYWx1ZSIsImhhbmRsZXIiLCJjbGVhclRpbWVvdXQiLCJmZXRjaFJlcXVlc3RJZCIsImZldGNoSXRlbXMiLCJfcmVmMSIsImN1cnJlbnRSZXF1ZXN0SWQiLCJjdXJyZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidHJpbSIsIk1hdGgiLCJjZWlsIiwidG90YWxJdGVtIiwiZm9ybWF0RGF0ZSIsIml0ZW1JIiwiSXRlbU51bWJlciIsIml0ZW1VcGMiLCJuZXdDb2RlIiwiaXRlbU51bWJlciIsIl94IiwiX3gyIiwiX3gzIiwiX3g0IiwiaGFuZGxlUGFnZUNoYW5nZSIsImV2ZW50IiwibmV3UGFnZSIsImhhbmRsZVJlZnJlc2hTZWFyY2giLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwibG9hZGluZ0RhdGExIiwic2V0TG9hZGluZ0RhdGExIiwiaGFuZGxlTG9hZE1hcmdpbiIsIl9yZWYxMCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc0xvdyIsImxvZyIsIl94NSIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJvcGVuUmVhc29uRGVsZXRlIiwic2V0T3BlblJlYXNvbkRlbGV0ZSIsImhhbmRsZU9wZW5SZWFzb25EZWxldGUiLCJoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJzZXRPcGVuIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsIkRlbGV0ZUlkIiwic2V0RGVsZXRlSWQiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwibW9kYWxPcGVuTG9hZGluZyIsInNldE1vZGFsT3BlbkxvYWRpbmciLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwic2VsZWN0ZWRSb3dzIiwic2V0U2VsZWN0ZWRSb3dzIiwiaGFuZGxlT3BlbiIsImhhbmRsZU9wZW5Nb2RhbCIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJvcGVuRGVsZXRlTXVsdGlwbGUiLCJzZXRPcGVuRGVsZXRlTXVsdGlwbGUiLCJoYW5kbGVPcGVuTXVsdGlwbGUiLCJoYW5kbGVDbG9zZU11bHRpcGxlIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsIm9wZW5EZWxldGVBbGwiLCJzZXRPcGVuRGVsZXRlQWxsIiwiaGFuZGxlT3BlbkFsbCIsImhhbmRsZUNsb3NlQWxsIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlRGVsZXRlIiwiX3JlZjExIiwiZGVsZXRlIiwiYWxlcnQiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2IiwiSXRlbURlbGV0ZWQiLCJzZXRJdGVtRGVsZXRlZCIsImZldGNoRnVuY3Rpb24iLCJfcmVmMTIiLCJkZWxldGVQcm9taXNlcyIsIl9yZWYxMyIsImlkVG9EZWxldGUiLCJfeDYiLCJQcm9taXNlIiwiYWxsIiwiaXRlbU5hbWUiLCJyZWxhdGVkIiwiaW5mbyIsInRvU3RyaW5nIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjE0IiwiaWRJbmZvIiwicGVyc29uIiwiZGF0ZU5vdGlmaWNhdGlvbiIsIkRhdGUiLCJwb3N0IiwiaGFuZGxlRGVsZXRlTWFueSIsIl9yZWYxNSIsIl9yZWYxNiIsIl94OCIsIl94NyIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJzeW5jZWQiLCJzZXRTeW5jZWQiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsInNlYXJjaEl0ZW0iLCJzZXRTZWFyY2hJdGVtIiwic3RvcmVkVmFsdWUiLCJfUmVhY3QkdXNlU3RhdGUiLCJpdGVtcyIsInF1aWNrRmlsdGVyRXhjbHVkZUhpZGRlbkNvbHVtbnMiLCJxdWlja0ZpbHRlclZhbHVlcyIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJmaWx0ZXJNb2RlbCIsInNldEZpbHRlck1vZGVsIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsImNvbHVtblZpc2liaWxpdHlNb2RlbCIsInNldENvbHVtblZpc2liaWxpdHlNb2RlbCIsImhhbmRlbEhpZGRlbkNvbHVtbiIsIm5ld0hpZGRlbiIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwic3RvcmVkUXVpY2siLCJwYXJzZSIsIl9zdG9yZWRRdWljayRxdWlja0ZpbCIsImpvaW4iLCJzdG9yZWRDb2x1bW5zIiwiX1JlYWN0JHVzZVN0YXRlMyIsIl9SZWFjdCR1c2VTdGF0ZTQiLCJvcGVuMSIsInNldE9wZW4xIiwidG9nZ2xlRHJhd2VyIiwiX1JlYWN0JHVzZVN0YXRlNSIsIl9SZWFjdCR1c2VTdGF0ZTYiLCJ2YWx1ZTMiLCJzZXRWYWx1ZTMiLCJoYW5kbGVDaGFuZ2UzIiwibmV3VmFsdWUiLCJjaGFuZ2VWYWx1ZSIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJzZWFyY2gyIiwic2V0U2VhcmNoMiIsImhhbmRsZVNlYXJjaDIiLCJ2YWx1ZSIsInRhcmdldCIsIm5ld0FycmF5IiwibG93ZXJTZWFyY2gyIiwidG9Mb3dlckNhc2UiLCJJdGVtIiwiaW5jbHVkZXMiLCJpdGVtRGVzY3JpcHRpb24iLCJpdGVtQ2F0ZWdvcnkiLCJpdGVtQnJhbmQiLCJpdGVtU3RvcmUiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwibWluV2lkdGgiLCJmbGV4IiwicmVuZGVyQ2VsbCIsInBhcmFtcyIsInRvVXBwZXJDYXNlIiwiaXRlbVNlbGxpbmdQcmljZSIsIl9wYXJhbXMkcm93JHVuaXQiLCJpdGVtUXVhbnRpdHkiLCJ1bml0IiwidGl0bGUiLCJkaXNhYmxlZCIsImxlbmd0aCIsInRvIiwib25DbGljayIsImN1cnNvciIsImNvbHVtbnMyIiwiX3BhcnNlRmxvYXQiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIl9wYXJhbXMkcm93JHVuaXQyIiwiaGFuZGxlRmlsdGVyTW9kZWxDaGFuZ2UiLCJuZXdGaWx0ZXJNb2RlbCIsIl9uZXdGaWx0ZXJNb2RlbCRxdWljayIsImhhbmRsZUV4cG9ydFRvRXhjZWwiLCJfcmVmMTciLCJjb3VudFJlcyIsInRvdGFsSXRlbXMiLCJ3b3JrYm9vayIsIldvcmtib29rIiwid29ya3NoZWV0IiwiYWRkV29ya3NoZWV0IiwiaGVhZGVyIiwia2V5IiwiZ2V0Um93IiwiZm9udCIsImJvbGQiLCJhbGlnbm1lbnQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJoZWlnaHQiLCJiYXRjaFNpemUiLCJiYXRjaFJlcyIsImJhdGNoSXRlbXMiLCJBcnJheSIsImlzQXJyYXkiLCJpdGVtRGF0YSIsIl9pdGVtRGF0YSRpdGVtVXBjIiwiX2l0ZW1EYXRhJGl0ZW1VcGMyIiwiZm9ybWF0dGVkSXRlbSIsIml0ZW1QaWN0dXJlIiwiYWRkUm93Iiwicm93SW5kZXgiLCJudW1iZXIiLCJ3cmFwVGV4dCIsImNvbnRlbnRUeXBlIiwiYmFzZTY0SW1hZ2UiLCJ1aW50OEFycmF5IiwiVWludDhBcnJheSIsImJpbmFyeSIsImxlbiIsImJ5dGVMZW5ndGgiLCJqIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwid2luZG93IiwiYnRvYSIsImltYWdlSWQiLCJhZGRJbWFnZSIsImJhc2U2NCIsImV4dGVuc2lvbiIsInNwbGl0IiwidGwiLCJjb2wiLCJvZmZzZXQiLCJ4IiwieSIsImV4dCIsImVkaXRBcyIsImVyciIsImVhY2hSb3ciLCJyb3dOdW1iZXIiLCJjb3N0Q2VsbCIsImdldENlbGwiLCJwcmljZUNlbGwiLCJudW1GbXQiLCJidWZmZXIiLCJ4bHN4Iiwid3JpdGVCdWZmZXIiLCJibG9iIiwiQmxvYiIsInR5cGUiLCJsaW5rIiwiZG9jdW1lbnQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZG93bmxvYWQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJuYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10Iiwib25DaGFuZ2UiLCJsYWJlbCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImljb24iLCJiYWRnZUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJpY29uUG9zaXRpb24iLCJmbG9hdCIsIm1hcmdpbiIsImZpbHRlck1vZGUiLCJwYWdpbmF0aW9uTW9kZSIsInJvd0NvdW50IiwicGFnaW5hdGlvbiIsInBhZ2VTaXplIiwib25QYWdlQ2hhbmdlIiwicm93cyIsInNsb3RzIiwidG9vbGJhciIsInNsb3RQcm9wcyIsInNob3dRdWlja0ZpbHRlciIsInByaW50T3B0aW9ucyIsImRpc2FibGVUb29sYmFyQnV0dG9uIiwiZ2V0Um93Q2xhc3NOYW1lIiwib25Sb3dTZWxlY3Rpb25Nb2RlbENoYW5nZSIsIm5ld1NlbGVjdGlvbiIsImNoZWNrYm94U2VsZWN0aW9uIiwiZGlzYWJsZUNvbHVtbkZpbHRlciIsImRpc2FibGVEZW5zaXR5U2VsZWN0b3IiLCJyb3dTZWxlY3Rpb25Nb2RlbCIsIm9uRmlsdGVyTW9kZWxDaGFuZ2UiLCJvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZSIsInBhZGRpbmciLCJjb3VudCIsInJvd3NQZXJQYWdlT3B0aW9ucyIsImRpc2FibGVTZWxlY3Rpb25PbkNsaWNrIiwib25TZWxlY3Rpb25Nb2RlbENoYW5nZSIsImNvbXBvbmVudHMiLCJvbkNsb3NlIiwidGV4dEFsaWduIiwiZ2FwIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwicGxhY2VtZW50Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJ4cyIsInJlcXVpcmVkIiwibXVsdGlsaW5lIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9