"use strict";
exports.id = "src_js_AdminView1_PurchasesViewAdmin_js";
exports.ids = ["src_js_AdminView1_PurchasesViewAdmin_js"];
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

/***/ "./src/js/AdminView1/PurchasesViewAdmin.js"
/*!*************************************************!*\
  !*** ./src/js/AdminView1/PurchasesViewAdmin.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm-debug/index.js");
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






































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
function PurchasesViewAdmin() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_34__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_34__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__.setUser)({
              userName: Name,
              role: Role,
              id: res.data.data._id
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to fetch user data.');
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
          react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to fetch permissions.');
        }
      });
      return function fetchNumber() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var PurchaseInfoC = grantAccess.filter(row => row.moduleName === "Purchase" && row.access.createM === true);
  var PurchaseInfoV = grantAccess.filter(row => row.moduleName === "Purchase" && row.access.viewM === true);
  var PurchaseInfoU = grantAccess.filter(row => row.moduleName === "Purchase" && row.access.editM === true);
  var PurchaseInfoD = grantAccess.filter(row => row.moduleName === "Purchase" && row.access.deleteM === true);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__.logOut)());
    navigate('/');
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    purchase = _useState4[0],
    setPurchase = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    newPurchase = _useState6[0],
    setNewPurchase = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingData = _useState8[0],
    setLoadingData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    reason = _useState0[0],
    setReason = _useState0[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/purchase");
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    page = _useState10[0],
    setPage = _useState10[1];
  var limit = 100;
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    searchTerm = _useState12[0],
    setSearchTerm = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    debouncedSearchTerm = _useState14[0],
    setDebouncedSearchTerm = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    filterField = _useState16[0],
    setFilterField = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    filterValue = _useState18[0],
    setFilterValue = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    totalPage = _useState20[0],
    SetTotalPage = _useState20[1];
  var fetchItems = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (page, searchTerm, filterField, filterValue) {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/purchase-Information?page=").concat(page + 1, "&limit=").concat(limit, "&search=").concat(encodeURIComponent(searchTerm.trim()), "&filterField=").concat(encodeURIComponent(filterField.trim()), "&filterValue=").concat(encodeURIComponent(filterValue.trim())));
        var formatDate = res.data.itemI.map(item => _objectSpread(_objectSpread({}, item), {}, {
          id: item._id
        }));
        setPurchase(formatDate);
        SetTotalPage(res.data.totalPages);
        setLoadingData(false);
      } catch (error) {
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
  var handlePageChange = (event, newPage) => {
    setPage(newPage - 1);
  };
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    loading = _useState22[0],
    setLoading = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    loadingOpenModal = _useState24[0],
    setLoadingOpenModal = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    ErrorOpenModal = _useState26[0],
    setErrorOpenModal = _useState26[1];
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
  var handleCreateNotificationOffline = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber, ReferenceInfoName) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: 'PUR-' + ReferenceInfoNumber + ' For ' + ReferenceInfoName,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.error('Notification error:', error);
      }
    });
    return function handleCreateNotificationOffline(_x5, _x6, _x7) {
      return _ref10.apply(this, arguments);
    };
  }();
  var syncOff = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      fetchItems(page, searchTerm, filterField, filterValue);
    });
    return function syncOff() {
      return _ref11.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchItems(page, searchTerm, filterField, filterValue);
  }, []);
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    open = _useState28[0],
    setOpen = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState30 = _slicedToArray(_useState29, 2),
    DeleteId = _useState30[0],
    setDeleteId = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    modalOpenLoading = _useState32[0],
    setModalOpenLoading = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState34 = _slicedToArray(_useState33, 2),
    selectedRows = _useState34[0],
    setSelectedRows = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    openDeleteMultiple = _useState36[0],
    setOpenDeleteMultiple = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    openReasonDelete = _useState38[0],
    setOpenReasonDelete = _useState38[1];
  var handleOpenReasonDelete = e => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  var handleOpenMultiple = () => {
    setOpenDeleteMultiple(true);
  };
  var handleCloseMultiple = () => {
    setOpenDeleteMultiple(false);
  };
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    openDeleteAll = _useState40[0],
    setOpenDeleteAll = _useState40[1];
  var handleOpenAll = () => {
    setOpenDeleteAll(true);
  };
  var handleCloseAll = () => {
    setOpenDeleteAll(false);
    setSelectedRows([]);
  };
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
  var handleClose = () => {
    setOpen(false);
  };
  var handleCloseModal = () => {
    setModalOpenLoading(false);
    setLoading(false);
    fetchItems(page, searchTerm, filterField, filterValue);
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      setLoading(true);
      setModalOpenLoading(true);
      handleClose();
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/delete-purchase/").concat(DeleteId));
        if (res) {
          handleOpenModal();
        }
      } catch (error) {
        console.error('Delete error:', error);
        setLoading(false);
        setModalOpenLoading(false);
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to delete purchase request.');
        handleError();
      }
    });
    return function handleDelete() {
      return _ref12.apply(this, arguments);
    };
  }();
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    PurchaseDeleted = _useState42[0],
    setPurchaseDeleted = _useState42[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var selectedData = purchase.filter(row => selectedRows.includes(row.id));
    setPurchaseDeleted(selectedData.map(row => 'PUR-' + row.purchaseNumber));
  }, [selectedRows, purchase]);
  var related = PurchaseDeleted.map(row => row);
  var info = related.toString();
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + info,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.error('Notification error:', error);
      }
    });
    return function handleCreateNotification() {
      return _ref13.apply(this, arguments);
    };
  }();
  var handleDeleteMany = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setLoading(true);
      setModalOpenLoading(true);
      handleCloseMultiple();
      handleCloseAll();
      handleCloseReasonDelete();
      var deletePromises = selectedRows.map(/*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator(function* (idToDelete) {
          return axios__WEBPACK_IMPORTED_MODULE_29__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/delete-purchase/").concat(idToDelete));
        });
        return function (_x9) {
          return _ref15.apply(this, arguments);
        };
      }());
      try {
        var res = yield Promise.all(deletePromises);
        if (res) {
          handleCreateNotification();
          handleOpenModal();
          setSelectedRows([]);
        }
      } catch (error) {
        console.error('Delete multiple error:', error);
        setLoading(false);
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to delete multiple purchases.');
        handleError();
      }
    });
    return function handleDeleteMany(_x8) {
      return _ref14.apply(this, arguments);
    };
  }();
  {/** search start */}
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState44 = _slicedToArray(_useState43, 2),
    searchPurchase = _useState44[0],
    setSearchPurchase = _useState44[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    var storedValue = localStorage.getItem('QuickFilterPurchase');
    if (storedValue) {
      setSearchPurchase(storedValue);
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
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState46 = _slicedToArray(_useState45, 2),
    columnVisibilityModel = _useState46[0],
    setColumnVisibilityModel = _useState46[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsPurchase', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterPurchaseTst', JSON.stringify(newModel));
    if (newModel.quickFilterValues && newModel.quickFilterValues.length > 0) {
      setSearchTerm(newModel.quickFilterValues.join(' '));
    } else {
      setSearchTerm('');
    }
    if (newModel.items && newModel.items.length > 0) {
      setFilterField(newModel.items[0].field);
      setFilterValue(newModel.items[0].value || '');
    } else {
      setFilterField('');
      setFilterValue('');
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterPurchaseTst'));
    if (storedQuick) {
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsPurchase'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchPurchase]);
  {/** search end */}
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var columns = [{
    field: 'purchaseNumber',
    headerName: 'P-Number',
    minWidth: 100,
    flex: 1,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "PUR-00", params.row.purchaseNumber), " ")
  }, {
    field: 'projectName',
    headerName: 'Project Name',
    minWidth: 200,
    flex: 2,
    valueGetter: params => params.row.projectName.projectName
  }, {
    field: 'customerName',
    headerName: 'Customer Name',
    minWidth: 150,
    flex: 1.5,
    valueGetter: params => params.row.customerName.customerName
  }, {
    field: 'description',
    headerName: 'Description',
    minWidth: 150,
    flex: 1.5,
    valueGetter: params => params.row.description !== undefined ? params.row.description : ''
  }, {
    field: 'statusInfo',
    headerName: 'Status',
    minWidth: 100,
    flex: 1,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: params.row.statusInfo !== undefined && params.row.statusInfo === "Pending" ? "gray" : params.row.statusInfo !== undefined && params.row.statusInfo === "On-Going" ? "blue" : params.row.statusInfo !== undefined && params.row.statusInfo === "Stopped" ? "red" : params.row.statusInfo !== undefined && params.row.statusInfo === "Pending" ? "Orange" : params.row.statusInfo !== undefined && params.row.statusInfo === "Completed" ? "green" : "black"
    }, params.row.statusInfo !== undefined ? params.row.statusInfo : '')
  }, {
    field: 'purchaseAmount1',
    headerName: 'Amount 1',
    minWidth: 100,
    flex: 1,
    renderCell: params => "$ ".concat(parseFloat(params.row.purchaseAmount1).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))
  }, {
    field: 'view',
    headerName: 'View',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      disabled: PurchaseInfoV.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.NavLink, {
      to: "/PurchasesViewAdminAll/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_24__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      disabled: PurchaseInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.NavLink, {
      to: "/PurchaseFormUpdate/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => handleOpen(params.row._id),
      disabled: PurchaseInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_26__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_22__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Purchase Request"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_43__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_42__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_23__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_20__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_19__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_4__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_21__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_36__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: PurchaseInfoC.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.NavLink, {
    to: '/PurchasesFormView',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_30__["default"], null))))))), purchase.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'left',
      margin: '10px'
    }
  }, selectedRows.length > 1 && selectedRows.length < purchase.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: user.data.role !== 'CEO',
    onClick: handleOpenAll,
    className: "btnCustomer2"
  }, "Delete multiple"), selectedRows.length === purchase.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleOpenAll,
    disabled: user.data.role !== 'CEO',
    className: "btnCustomer2"
  }, "Delete all") : '') : '', purchase.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__.DataGrid, {
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: purchase,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__.GridToolbar
    },
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
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
    checkboxSelection: true,
    rowSelectionModel: selectedRows,
    disableDensitySelector: true,
    filterModel: filterModel,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_no_data_png__WEBPACK_IMPORTED_MODULE_39__,
    style: {
      position: 'relative',
      marginLeft: '19%',
      padding: '25px',
      height: '40%',
      top: '40px',
      width: '55%',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
    onClick: handleDelete
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleClose
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: openDeleteMultiple,
    onClose: handleCloseMultiple,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: openDeleteAll,
    onClose: handleCloseAll,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, "Note:"), " Selected rows will be deleted"), selectedRows.length > 1 && selectedRows.length < purchase.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), selectedRows.length === purchase.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: modalOpenLoading,
    onClose: handleCloseModal,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_8__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_36__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleCloseReasonDelete,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: ", info, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleDeleteMany
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: loadingOpenModal,
    onClose: handleCloseModal,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_8__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_36__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
  }, "Close"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchasesViewAdmin);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUHVyY2hhc2VzVmlld0FkbWluX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLFNBQVMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOVixDQUFrRDtBQUNYO0FBQ3BCO0FBQ2U7QUFDZ0I7QUFDRTtBQUNzQjtBQUM2SDtBQUN2STtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDSTtBQUNJO0FBQ1Y7QUFDVTtBQUNjO0FBQ0k7QUFDTjtBQUNaO0FBQ0k7QUFDSTtBQUMvQjtBQUNxQztBQUNsQjtBQUNsQjtBQUM0QjtBQUMwQjtBQUN2QztBQUNxQjtBQUNkO0FBQ1Q7QUFDa0I7QUFDUDtBQUNRO0FBRXBCO0FBRXRDLElBQU0rRCxhQUFhLEdBQUdyRCwwREFBTSxDQUFDc0QsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2pEcEUsMERBQUEsQ0FBQ3dCLDhEQUFPLEVBQUE4QyxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU9sRCw4REFBYyxDQUFDbUQsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FB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IjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0FkZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUHVyY2hhc2VzVmlld0FkbWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCJcbn0pLCAnQWRkJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAnLi92aWV3LmNzcydcclxuaW1wb3J0ICcuL1BhZ2VWaWV3L0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhckRhc2ggZnJvbSAnLi4vY29tcG9uZW50L1NpZGViYXJEYXNoJ1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCB7IFRhYmxlLCBNb2RhbCwgSWNvbkJ1dHRvbiwgc3R5bGVkLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVIZWFkLCBUYWJsZVJvdywgQ2hlY2tib3gsIFRhYmxlQ29udGFpbmVyLCBQYXBlciwgVHlwb2dyYXBoeSwgQm94LCBBdXRvY29tcGxldGUsIFRleHRGaWVsZCwgQmFja2Ryb3AsIEdyaWQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXInO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBBZGQsIENsb3NlLCBNYWlsT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uL2ltZy9uby1kYXRhLnBuZyc7XHJcbmltcG9ydCB7IERhdGFHcmlkLCBHcmlkVG9vbGJhciB9IGZyb20gJ0BtdWkveC1kYXRhLWdyaWQnO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxuY29uc3QgRGVsZXRlVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEVkaXRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgVmlld1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuZnVuY3Rpb24gUHVyY2hhc2VzVmlld0FkbWluKCkge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSwgaWQ6IHJlcy5kYXRhLmRhdGEuX2lkIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcignRmFpbGVkIHRvIGZldGNoIHVzZXIgZGF0YS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgW2dyYW50QWNjZXNzLCBzZXRHcmFudEFjY2Vzc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dyYW50QWNjZXNzYCk7XHJcbiAgICAgICAgcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cudXNlcklEID09PSB1c2VyLmRhdGEuaWQpXHJcbiAgICAgICAgICAubWFwKChyb3cpID0+IHNldEdyYW50QWNjZXNzKHJvdy5tb2R1bGVzKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB0b2FzdC5lcnJvcignRmFpbGVkIHRvIGZldGNoIHBlcm1pc3Npb25zLicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaE51bWJlcigpXHJcbiAgfSwgW3VzZXJdKVxyXG5cclxuICBjb25zdCBQdXJjaGFzZUluZm9DID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIlB1cmNoYXNlXCIgJiYgcm93LmFjY2Vzcy5jcmVhdGVNID09PSB0cnVlKTtcclxuICBjb25zdCBQdXJjaGFzZUluZm9WID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIlB1cmNoYXNlXCIgJiYgcm93LmFjY2Vzcy52aWV3TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgUHVyY2hhc2VJbmZvVSA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJQdXJjaGFzZVwiICYmIHJvdy5hY2Nlc3MuZWRpdE0gPT09IHRydWUpO1xyXG4gIGNvbnN0IFB1cmNoYXNlSW5mb0QgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiUHVyY2hhc2VcIiAmJiByb3cuYWNjZXNzLmRlbGV0ZU0gPT09IHRydWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFtwdXJjaGFzZSwgc2V0UHVyY2hhc2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdQdXJjaGFzZSwgc2V0TmV3UHVyY2hhc2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGFwaVVybCA9IGAke0VORFBPSU5UX1VSTH0vcHVyY2hhc2VgO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGxpbWl0ID0gMTAwO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZWJvdW5jZWRTZWFyY2hUZXJtLCBzZXREZWJvdW5jZWRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmaWx0ZXJGaWVsZCwgc2V0RmlsdGVyRmllbGRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ZpbHRlclZhbHVlLCBzZXRGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdG90YWxQYWdlLCBTZXRUb3RhbFBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hJdGVtcyA9IGFzeW5jIChwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3B1cmNoYXNlLUluZm9ybWF0aW9uP3BhZ2U9JHtwYWdlICsgMX0mbGltaXQ9JHtsaW1pdH0mc2VhcmNoPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlYXJjaFRlcm0udHJpbSgpKX0mZmlsdGVyRmllbGQ9JHtlbmNvZGVVUklDb21wb25lbnQoZmlsdGVyRmllbGQudHJpbSgpKX0mZmlsdGVyVmFsdWU9JHtlbmNvZGVVUklDb21wb25lbnQoZmlsdGVyVmFsdWUudHJpbSgpKX1gKTtcclxuICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IHJlcy5kYXRhLml0ZW1JLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgIGlkOiBpdGVtLl9pZCxcclxuICAgICAgfSkpO1xyXG4gICAgICBzZXRQdXJjaGFzZShmb3JtYXREYXRlKTtcclxuICAgICAgU2V0VG90YWxQYWdlKHJlcy5kYXRhLnRvdGFsUGFnZXMpO1xyXG4gICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoSXRlbXMocGFnZSwgZGVib3VuY2VkU2VhcmNoVGVybSwgZmlsdGVyRmllbGQsIGZpbHRlclZhbHVlKTtcclxuICB9LCBbcGFnZSwgZGVib3VuY2VkU2VhcmNoVGVybSwgZmlsdGVyRmllbGQsIGZpbHRlclZhbHVlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAoZXZlbnQsIG5ld1BhZ2UpID0+IHtcclxuICAgIHNldFBhZ2UobmV3UGFnZSAtIDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PZmZsaW5lID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb25PZmZsaW5lID0gYXN5bmMgKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OdW1iZXIsIFJlZmVyZW5jZUluZm9OYW1lKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBDcmVhdGVkICcsXHJcbiAgICAgIHJlYXNvbjogJ1BVUi0nICsgUmVmZXJlbmNlSW5mb051bWJlciArICcgRm9yICcgKyBSZWZlcmVuY2VJbmZvTmFtZSxcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignTm90aWZpY2F0aW9uIGVycm9yOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3Qgc3luY09mZiA9IGFzeW5jICgpID0+IHtcclxuICAgIGZldGNoSXRlbXMocGFnZSwgc2VhcmNoVGVybSwgZmlsdGVyRmllbGQsIGZpbHRlclZhbHVlKTtcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoSXRlbXMocGFnZSwgc2VhcmNoVGVybSwgZmlsdGVyRmllbGQsIGZpbHRlclZhbHVlKTtcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtEZWxldGVJZCwgc2V0RGVsZXRlSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21vZGFsT3BlbkxvYWRpbmcsIHNldE1vZGFsT3BlbkxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFJvd3MsIHNldFNlbGVjdGVkUm93c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29wZW5EZWxldGVNdWx0aXBsZSwgc2V0T3BlbkRlbGV0ZU11bHRpcGxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlblJlYXNvbkRlbGV0ZSwgc2V0T3BlblJlYXNvbkRlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5SZWFzb25EZWxldGUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuUmVhc29uRGVsZXRlKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuUmVhc29uRGVsZXRlKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5NdWx0aXBsZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EZWxldGVNdWx0aXBsZSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTXVsdGlwbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGVsZXRlTXVsdGlwbGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW29wZW5EZWxldGVBbGwsIHNldE9wZW5EZWxldGVBbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuQWxsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZUFsbCh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQWxsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZUFsbChmYWxzZSk7XHJcbiAgICBzZXRTZWxlY3RlZFJvd3MoW10pXHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPcGVuID0gKGlkKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgc2V0RGVsZXRlSWQoaWQpXHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbE9wZW5Mb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbE9wZW5Mb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgZmV0Y2hJdGVtcyhwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldE1vZGFsT3BlbkxvYWRpbmcodHJ1ZSk7XHJcbiAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLXB1cmNoYXNlLyR7RGVsZXRlSWR9YCk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBoYW5kbGVPcGVuTW9kYWwoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRGVsZXRlIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldE1vZGFsT3BlbkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB0b2FzdC5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSBwdXJjaGFzZSByZXF1ZXN0LicpO1xyXG4gICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgW1B1cmNoYXNlRGVsZXRlZCwgc2V0UHVyY2hhc2VEZWxldGVkXSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBwdXJjaGFzZS5maWx0ZXIocm93ID0+IHNlbGVjdGVkUm93cy5pbmNsdWRlcyhyb3cuaWQpKTtcclxuICAgIHNldFB1cmNoYXNlRGVsZXRlZChzZWxlY3RlZERhdGEubWFwKHJvdyA9PiAnUFVSLScgKyByb3cucHVyY2hhc2VOdW1iZXIpKTtcclxuICB9LCBbc2VsZWN0ZWRSb3dzLCBwdXJjaGFzZV0pO1xyXG5cclxuICBjb25zdCByZWxhdGVkID0gUHVyY2hhc2VEZWxldGVkLm1hcChyb3cgPT4gcm93KVxyXG4gIGNvbnN0IGluZm8gPSByZWxhdGVkLnRvU3RyaW5nKClcclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86ICcnLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgRGVsZXRlZCAnICsgaW5mbyxcclxuICAgICAgcmVhc29uLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdOb3RpZmljYXRpb24gZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEZWxldGVNYW55ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldE1vZGFsT3BlbkxvYWRpbmcodHJ1ZSk7XHJcbiAgICBoYW5kbGVDbG9zZU11bHRpcGxlKCk7XHJcbiAgICBoYW5kbGVDbG9zZUFsbCgpO1xyXG4gICAgaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUoKTtcclxuICAgIGNvbnN0IGRlbGV0ZVByb21pc2VzID0gc2VsZWN0ZWRSb3dzLm1hcChhc3luYyAoaWRUb0RlbGV0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLXB1cmNoYXNlLyR7aWRUb0RlbGV0ZX1gKVxyXG4gICAgfSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKGRlbGV0ZVByb21pc2VzKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbigpXHJcbiAgICAgICAgaGFuZGxlT3Blbk1vZGFsKClcclxuICAgICAgICBzZXRTZWxlY3RlZFJvd3MoW10pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdEZWxldGUgbXVsdGlwbGUgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgbXVsdGlwbGUgcHVyY2hhc2VzLicpO1xyXG4gICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgey8qKiBzZWFyY2ggc3RhcnQgKi8gfVxyXG4gIGNvbnN0IFtzZWFyY2hQdXJjaGFzZSwgc2V0U2VhcmNoUHVyY2hhc2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUXVpY2tGaWx0ZXJQdXJjaGFzZScpXHJcbiAgICBpZiAoc3RvcmVkVmFsdWUpIHtcclxuICAgICAgc2V0U2VhcmNoUHVyY2hhc2Uoc3RvcmVkVmFsdWUpXHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCBbZmlsdGVyTW9kZWwsIHNldEZpbHRlck1vZGVsXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIHF1aWNrRmlsdGVyRXhjbHVkZUhpZGRlbkNvbHVtbnM6IHRydWUsXHJcbiAgICBxdWlja0ZpbHRlclZhbHVlczogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgW2NvbHVtblZpc2liaWxpdHlNb2RlbCwgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBoYW5kZWxIaWRkZW5Db2x1bW4gPSAobmV3SGlkZGVuKSA9PiB7XHJcbiAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwobmV3SGlkZGVuKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0hpZGRlbkNvbHVtbnNQdXJjaGFzZScsIEpTT04uc3RyaW5naWZ5KG5ld0hpZGRlbikpXHJcbiAgfVxyXG4gICAgY29uc3QgaGFuZGxlRmlsdGVyID0gKG5ld01vZGVsKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJNb2RlbChuZXdNb2RlbCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUXVpY2tGaWx0ZXJQdXJjaGFzZVRzdCcsIEpTT04uc3RyaW5naWZ5KG5ld01vZGVsKSk7XHJcbiAgICBpZiAobmV3TW9kZWwucXVpY2tGaWx0ZXJWYWx1ZXMgJiYgbmV3TW9kZWwucXVpY2tGaWx0ZXJWYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRTZWFyY2hUZXJtKG5ld01vZGVsLnF1aWNrRmlsdGVyVmFsdWVzLmpvaW4oJyAnKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTZWFyY2hUZXJtKCcnKTtcclxuICAgIH1cclxuICAgIGlmIChuZXdNb2RlbC5pdGVtcyAmJiBuZXdNb2RlbC5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldEZpbHRlckZpZWxkKG5ld01vZGVsLml0ZW1zWzBdLmZpZWxkKTtcclxuICAgICAgc2V0RmlsdGVyVmFsdWUobmV3TW9kZWwuaXRlbXNbMF0udmFsdWUgfHwgJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RmlsdGVyRmllbGQoJycpO1xyXG4gICAgICBzZXRGaWx0ZXJWYWx1ZSgnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRRdWljayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1F1aWNrRmlsdGVyUHVyY2hhc2VUc3QnKSlcclxuICAgIGlmIChzdG9yZWRRdWljaykge1xyXG4gICAgICBzZXRGaWx0ZXJNb2RlbChzdG9yZWRRdWljaylcclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3JlZENvbHVtbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdIaWRkZW5Db2x1bW5zUHVyY2hhc2UnKSlcclxuICAgIGlmIChzdG9yZWRDb2x1bW5zKSB7XHJcbiAgICAgIHNldENvbHVtblZpc2liaWxpdHlNb2RlbChzdG9yZWRDb2x1bW5zKVxyXG4gICAgfVxyXG5cclxuICB9LCBbc2VhcmNoUHVyY2hhc2VdKVxyXG4gIHsvKiogc2VhcmNoIGVuZCAqLyB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHsgZmllbGQ6ICdwdXJjaGFzZU51bWJlcicsIGhlYWRlck5hbWU6ICdQLU51bWJlcicsIG1pbldpZHRoOiAxMDAsIGZsZXg6IDEsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+ICg8ZGl2PjxzcGFuPlBVUi0wMHtwYXJhbXMucm93LnB1cmNoYXNlTnVtYmVyfTwvc3Bhbj4gPC9kaXY+KSB9LFxyXG4gICAgeyBmaWVsZDogJ3Byb2plY3ROYW1lJywgaGVhZGVyTmFtZTogJ1Byb2plY3QgTmFtZScsIG1pbldpZHRoOiAyMDAsIGZsZXg6IDIsIHZhbHVlR2V0dGVyOiAocGFyYW1zKSA9PiBwYXJhbXMucm93LnByb2plY3ROYW1lLnByb2plY3ROYW1lIH0sXHJcbiAgICB7IGZpZWxkOiAnY3VzdG9tZXJOYW1lJywgaGVhZGVyTmFtZTogJ0N1c3RvbWVyIE5hbWUnLCBtaW5XaWR0aDogMTUwLCBmbGV4OiAxLjUsIHZhbHVlR2V0dGVyOiAocGFyYW1zKSA9PiBwYXJhbXMucm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUgfSxcclxuICAgIHsgZmllbGQ6ICdkZXNjcmlwdGlvbicsIGhlYWRlck5hbWU6ICdEZXNjcmlwdGlvbicsIG1pbldpZHRoOiAxNTAsIGZsZXg6IDEuNSwgdmFsdWVHZXR0ZXI6IChwYXJhbXMpID0+IHBhcmFtcy5yb3cuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IHBhcmFtcy5yb3cuZGVzY3JpcHRpb24gOiAnJyB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ3N0YXR1c0luZm8nLCBoZWFkZXJOYW1lOiAnU3RhdHVzJywgbWluV2lkdGg6IDEwMCwgZmxleDogMSwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzSW5mbyAhPT0gdW5kZWZpbmVkICYmIHBhcmFtcy5yb3cuc3RhdHVzSW5mbyA9PT0gXCJQZW5kaW5nXCJcclxuICAgICAgICAgICAgICA/IFwiZ3JheVwiIDpcclxuICAgICAgICAgICAgICBwYXJhbXMucm93LnN0YXR1c0luZm8gIT09IHVuZGVmaW5lZCAmJiBwYXJhbXMucm93LnN0YXR1c0luZm8gPT09IFwiT24tR29pbmdcIlxyXG4gICAgICAgICAgICAgICAgPyBcImJsdWVcIiA6XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucm93LnN0YXR1c0luZm8gIT09IHVuZGVmaW5lZCAmJiBwYXJhbXMucm93LnN0YXR1c0luZm8gPT09IFwiU3RvcHBlZFwiXHJcbiAgICAgICAgICAgICAgICAgID8gXCJyZWRcIiA6XHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzSW5mbyAhPT0gdW5kZWZpbmVkICYmIHBhcmFtcy5yb3cuc3RhdHVzSW5mbyA9PT0gXCJQZW5kaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiT3JhbmdlXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzSW5mbyAhPT0gdW5kZWZpbmVkICYmIHBhcmFtcy5yb3cuc3RhdHVzSW5mbyA9PT0gXCJDb21wbGV0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImdyZWVuXCIgOiBcImJsYWNrXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cGFyYW1zLnJvdy5zdGF0dXNJbmZvICE9PSB1bmRlZmluZWQgPyBwYXJhbXMucm93LnN0YXR1c0luZm8gOiAnJ31cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7IGZpZWxkOiAncHVyY2hhc2VBbW91bnQxJywgaGVhZGVyTmFtZTogJ0Ftb3VudCAxJywgbWluV2lkdGg6IDEwMCwgZmxleDogMSwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gYCQgJHtwYXJzZUZsb2F0KHBhcmFtcy5yb3cucHVyY2hhc2VBbW91bnQxKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9YCB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ3ZpZXcnLCBoZWFkZXJOYW1lOiAnVmlldycsIHdpZHRoOiA2MCwgbWluV2lkdGg6IDYwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiVmlld1wiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGRpc2FibGVkPXtQdXJjaGFzZUluZm9WLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL1B1cmNoYXNlc1ZpZXdBZG1pbkFsbC8ke3BhcmFtcy5yb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgPFZpc2liaWxpdHlJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ2VkaXQnLCBoZWFkZXJOYW1lOiAnRWRpdCcsIHdpZHRoOiA2MCwgbWluV2lkdGg6IDYwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPEVkaXRUb29sdGlwIHRpdGxlPVwiRWRpdFwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGRpc2FibGVkPXtQdXJjaGFzZUluZm9VLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9ID5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9QdXJjaGFzZUZvcm1VcGRhdGUvJHtwYXJhbXMucm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgIDxFZGl0SWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9FZGl0VG9vbHRpcD5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdEZWxldGUnLCBoZWFkZXJOYW1lOiAnRGVsZXRlJywgd2lkdGg6IDYwLCBtaW5XaWR0aDogNjAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8RGVsZXRlVG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgPHNwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuKHBhcmFtcy5yb3cuX2lkKX0gZGlzYWJsZWQ9e1B1cmNoYXNlSW5mb0QubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0RlbGV0ZVRvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUHVyY2hhc2UgUmVxdWVzdFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAxIH19ID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxvYWRpbmdEYXRhID8gPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIG1hcmdpbjogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17UHVyY2hhc2VJbmZvQy5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9QdXJjaGFzZXNGb3JtVmlldyd9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdidG5DdXN0b21lckFkZGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtwdXJjaGFzZS5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ2xlZnQnLCBtYXJnaW46ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA+IDEgJiYgc2VsZWN0ZWRSb3dzLmxlbmd0aCA8IHB1cmNoYXNlLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfSBvbkNsaWNrPXtoYW5kbGVPcGVuQWxsfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+RGVsZXRlIG11bHRpcGxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPT09IHB1cmNoYXNlLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5BbGx9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJz5EZWxldGUgYWxsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgIHtwdXJjaGFzZS5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiA2MDAsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZT1cInNlcnZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQ9e3RvdGFsUGFnZSAqIGxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e3B1cmNoYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90cz17eyB0b29sYmFyOiBHcmlkVG9vbGJhciB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJvd1NlbGVjdGlvbk1vZGVsQ2hhbmdlPXsobmV3U2VsZWN0aW9uKSA9PiBzZXRTZWxlY3RlZFJvd3MobmV3U2VsZWN0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1F1aWNrRmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVUb29sYmFyQnV0dG9uOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJvd0NsYXNzTmFtZT17KHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdQdXJjaGFzZS5pbmNsdWRlcyhwYXJhbXMucm93Ll9pZCkgPyAnbmV3LVB1cmNoYXNlJyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94U2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbk1vZGVsPXtzZWxlY3RlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVEZW5zaXR5U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTW9kZWw9e2ZpbHRlck1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkZpbHRlck1vZGVsQ2hhbmdlPXsobmV3TW9kZWwpID0+IGhhbmRsZUZpbHRlcihuZXdNb2RlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZpc2liaWxpdHlNb2RlbD17Y29sdW1uVmlzaWJpbGl0eU1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZT17aGFuZGVsSGlkZGVuQ29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICcxMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgKSA6IDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luTGVmdDogJzE5JScsIHBhZGRpbmc6ICcyNXB4JywgaGVpZ2h0OiAnNDAlJywgdG9wOiAnNDBweCcsIHdpZHRoOiAnNTUlJywgYm94U2hhZG93OiAnMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyknIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8aDI+RG8geW91IHdhbnQgdG8gRGVsZXRlID88L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJyBvbkNsaWNrPXtoYW5kbGVEZWxldGV9PlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkRlbGV0ZU11bHRpcGxlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTXVsdGlwbGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxoMj5EbyB5b3Ugd2FudCB0byBEZWxldGUgPzwvaDI+XHJcbiAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZTo8L3NwYW4+IEFsbCBzZWxlY3RlZCByb3dzIHdpbGwgYmUgZGVsZXRlZDwvcD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgb25DbGljaz17aGFuZGxlRGVsZXRlTWFueX0+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTXVsdGlwbGV9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5EZWxldGVBbGx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VBbGx9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxoMj5EbyB5b3Ugd2FudCB0byBEZWxldGUgPzwvaDI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID09PSAxICYmIChcclxuICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZTo8L3NwYW4+IFNlbGVjdGVkIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA+IDEgJiYgc2VsZWN0ZWRSb3dzLmxlbmd0aCA8IHB1cmNoYXNlLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPiBBbGwgc2VsZWN0ZWQgcm93cyB3aWxsIGJlIGRlbGV0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID09PSBwdXJjaGFzZS5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJyBvbkNsaWNrPXtoYW5kbGVPcGVuUmVhc29uRGVsZXRlfT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VBbGx9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e21vZGFsT3BlbkxvYWRpbmd9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj4gRGF0YSBzdWNjZXNzZnVsbHkgZGVsZXRlZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlblJlYXNvbkRlbGV0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlUmVhc29uRGVsZXRlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICBXaHkgZG8geW91IHdhbnQgdG8gZGVsZXRlOiB7aW5mb30/XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRGVsZXRlTWFueX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgaWQ9J3JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgbmFtZT0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nUmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZXNWaWV3QWRtaW5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsIlNpZGViYXJEYXNoIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIlRhYmxlIiwiTW9kYWwiLCJJY29uQnV0dG9uIiwic3R5bGVkIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJDaGVja2JveCIsIlRhYmxlQ29udGFpbmVyIiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiQm94IiwiQXV0b2NvbXBsZXRlIiwiVGV4dEZpZWxkIiwiQmFja2Ryb3AiLCJHcmlkIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiRGl2aWRlciIsIkNvbnRhaW5lciIsIkxpbmsiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiVmlzaWJpbGl0eUljb24iLCJFZGl0SWNvbiIsIkRlbGV0ZUljb24iLCJOYXZMaW5rIiwidXNlTmF2aWdhdGUiLCJheGlvcyIsIkFkZCIsIkNsb3NlIiwiTWFpbE91dGxpbmUiLCJFTkRQT0lOVF9VUkwiLCJkYXlqcyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2FkZXIiLCJDaGVja0NpcmNsZUljb24iLCJMb2dvdXQiLCJJbWFnZSIsIkRhdGFHcmlkIiwiR3JpZFRvb2xiYXIiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJpbyIsIkRlbGV0ZVRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIkVkaXRUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJWaWV3VG9vbHRpcCIsIl9yZWY1IiwiX2V4Y2x1ZGVkMyIsIl9yZWY2Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY3Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWY4Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiUHVyY2hhc2VzVmlld0FkbWluIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImlkIiwiX2lkIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJncmFudEFjY2VzcyIsInNldEdyYW50QWNjZXNzIiwiZmV0Y2hOdW1iZXIiLCJfcmVmMCIsIl9yZXMkZGF0YSIsImZpbHRlciIsInJvdyIsInVzZXJJRCIsIm1hcCIsIm1vZHVsZXMiLCJQdXJjaGFzZUluZm9DIiwibW9kdWxlTmFtZSIsImFjY2VzcyIsImNyZWF0ZU0iLCJQdXJjaGFzZUluZm9WIiwidmlld00iLCJQdXJjaGFzZUluZm9VIiwiZWRpdE0iLCJQdXJjaGFzZUluZm9EIiwiZGVsZXRlTSIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInB1cmNoYXNlIiwic2V0UHVyY2hhc2UiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIm5ld1B1cmNoYXNlIiwic2V0TmV3UHVyY2hhc2UiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsInJlYXNvbiIsInNldFJlYXNvbiIsImFwaVVybCIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsInBhZ2UiLCJzZXRQYWdlIiwibGltaXQiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiZGVib3VuY2VkU2VhcmNoVGVybSIsInNldERlYm91bmNlZFNlYXJjaFRlcm0iLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiZmlsdGVyRmllbGQiLCJzZXRGaWx0ZXJGaWVsZCIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJmaWx0ZXJWYWx1ZSIsInNldEZpbHRlclZhbHVlIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsInRvdGFsUGFnZSIsIlNldFRvdGFsUGFnZSIsImZldGNoSXRlbXMiLCJfcmVmMSIsImVuY29kZVVSSUNvbXBvbmVudCIsInRyaW0iLCJmb3JtYXREYXRlIiwiaXRlbUkiLCJpdGVtIiwidG90YWxQYWdlcyIsIl94IiwiX3gyIiwiX3gzIiwiX3g0IiwiaGFuZGxlUGFnZUNoYW5nZSIsImV2ZW50IiwibmV3UGFnZSIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3Blbk9mZmxpbmUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDcmVhdGVOb3RpZmljYXRpb25PZmZsaW5lIiwiX3JlZjEwIiwiUmVmZXJlbmNlSW5mbyIsIlJlZmVyZW5jZUluZm9OdW1iZXIiLCJSZWZlcmVuY2VJbmZvTmFtZSIsImlkSW5mbyIsInBlcnNvbiIsImRhdGVOb3RpZmljYXRpb24iLCJEYXRlIiwicG9zdCIsIl94NSIsIl94NiIsIl94NyIsInN5bmNPZmYiLCJfcmVmMTEiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4Iiwic2V0T3BlbiIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJEZWxldGVJZCIsInNldERlbGV0ZUlkIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsIm1vZGFsT3BlbkxvYWRpbmciLCJzZXRNb2RhbE9wZW5Mb2FkaW5nIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsInNlbGVjdGVkUm93cyIsInNldFNlbGVjdGVkUm93cyIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJvcGVuRGVsZXRlTXVsdGlwbGUiLCJzZXRPcGVuRGVsZXRlTXVsdGlwbGUiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4Iiwib3BlblJlYXNvbkRlbGV0ZSIsInNldE9wZW5SZWFzb25EZWxldGUiLCJoYW5kbGVPcGVuUmVhc29uRGVsZXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUiLCJoYW5kbGVPcGVuTXVsdGlwbGUiLCJoYW5kbGVDbG9zZU11bHRpcGxlIiwiX3VzZVN0YXRlMzkiLCJfdXNlU3RhdGU0MCIsIm9wZW5EZWxldGVBbGwiLCJzZXRPcGVuRGVsZXRlQWxsIiwiaGFuZGxlT3BlbkFsbCIsImhhbmRsZUNsb3NlQWxsIiwiaGFuZGxlT3BlbiIsImhhbmRsZU9wZW5Nb2RhbCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xvc2VNb2RhbCIsImhhbmRsZURlbGV0ZSIsIl9yZWYxMiIsImRlbGV0ZSIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJQdXJjaGFzZURlbGV0ZWQiLCJzZXRQdXJjaGFzZURlbGV0ZWQiLCJzZWxlY3RlZERhdGEiLCJpbmNsdWRlcyIsInB1cmNoYXNlTnVtYmVyIiwicmVsYXRlZCIsImluZm8iLCJ0b1N0cmluZyIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxMyIsImhhbmRsZURlbGV0ZU1hbnkiLCJfcmVmMTQiLCJkZWxldGVQcm9taXNlcyIsIl9yZWYxNSIsImlkVG9EZWxldGUiLCJfeDkiLCJQcm9taXNlIiwiYWxsIiwiX3g4IiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsInNlYXJjaFB1cmNoYXNlIiwic2V0U2VhcmNoUHVyY2hhc2UiLCJzdG9yZWRWYWx1ZSIsIl9SZWFjdCR1c2VTdGF0ZSIsIml0ZW1zIiwicXVpY2tGaWx0ZXJFeGNsdWRlSGlkZGVuQ29sdW1ucyIsInF1aWNrRmlsdGVyVmFsdWVzIiwiX1JlYWN0JHVzZVN0YXRlMiIsImZpbHRlck1vZGVsIiwic2V0RmlsdGVyTW9kZWwiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2IiwiY29sdW1uVmlzaWJpbGl0eU1vZGVsIiwic2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsIiwiaGFuZGVsSGlkZGVuQ29sdW1uIiwibmV3SGlkZGVuIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVGaWx0ZXIiLCJuZXdNb2RlbCIsImxlbmd0aCIsImpvaW4iLCJmaWVsZCIsInZhbHVlIiwic3RvcmVkUXVpY2siLCJwYXJzZSIsInN0b3JlZENvbHVtbnMiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiY29sdW1ucyIsImhlYWRlck5hbWUiLCJtaW5XaWR0aCIsImZsZXgiLCJyZW5kZXJDZWxsIiwicGFyYW1zIiwidmFsdWVHZXR0ZXIiLCJwcm9qZWN0TmFtZSIsImN1c3RvbWVyTmFtZSIsImRlc2NyaXB0aW9uIiwidW5kZWZpbmVkIiwic3RhdHVzSW5mbyIsInBhcnNlRmxvYXQiLCJwdXJjaGFzZUFtb3VudDEiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsInRpdGxlIiwiZGlzYWJsZWQiLCJ0byIsIm9uQ2xpY2siLCJjdXJzb3IiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsIm5hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJmbG9hdCIsIm1hcmdpbiIsInBhZ2luYXRpb25Nb2RlIiwicm93Q291bnQiLCJwYWdpbmF0aW9uIiwicGFnZVNpemUiLCJvblBhZ2VDaGFuZ2UiLCJyb3dzIiwic2xvdHMiLCJ0b29sYmFyIiwib25Sb3dTZWxlY3Rpb25Nb2RlbENoYW5nZSIsIm5ld1NlbGVjdGlvbiIsInNsb3RQcm9wcyIsInNob3dRdWlja0ZpbHRlciIsInByaW50T3B0aW9ucyIsImRpc2FibGVUb29sYmFyQnV0dG9uIiwiZ2V0Um93Q2xhc3NOYW1lIiwiY2hlY2tib3hTZWxlY3Rpb24iLCJyb3dTZWxlY3Rpb25Nb2RlbCIsImRpc2FibGVEZW5zaXR5U2VsZWN0b3IiLCJvbkZpbHRlck1vZGVsQ2hhbmdlIiwib25Db2x1bW5WaXNpYmlsaXR5TW9kZWxDaGFuZ2UiLCJwYWRkaW5nIiwic3JjIiwib25DbG9zZSIsInRleHRBbGlnbiIsImdhcCIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJwbGFjZW1lbnQiLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInhzIiwicmVxdWlyZWQiLCJtdWx0aWxpbmUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWwiLCJ0eXBlIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9