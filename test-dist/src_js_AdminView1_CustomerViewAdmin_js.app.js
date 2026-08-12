"use strict";
exports.id = "src_js_AdminView1_CustomerViewAdmin_js";
exports.ids = ["src_js_AdminView1_CustomerViewAdmin_js"];
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

/***/ "./src/js/AdminView1/CustomerViewAdmin.js"
/*!************************************************!*\
  !*** ./src/js/AdminView1/CustomerViewAdmin.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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




































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_ref => {
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
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_ref3 => {
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
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
function CustomerViewAdmin() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_32__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_32__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_33__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_33__.setUser)({
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/grantAccess"));
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
  var customerInfoC = grantAccess.filter(row => row.moduleName === "Customer" && row.access.createM === true);
  var customerInfoV = grantAccess.filter(row => row.moduleName === "Customer" && row.access.viewM === true);
  var customerInfoU = grantAccess.filter(row => row.moduleName === "Customer" && row.access.editM === true);
  var customerInfoD = grantAccess.filter(row => row.moduleName === "Customer" && row.access.deleteM === true);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loadingData = _useState4[0],
    setLoadingData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    customer = _useState6[0],
    setCustomer = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    searchCustomer = _useState8[0],
    setSearchCustomer = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    page = _useState0[0],
    setPage = _useState0[1];
  var limit = 100;
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    searchTerm = _useState10[0],
    setSearchTerm = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    filterField = _useState12[0],
    setFilterField = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    filterValue = _useState14[0],
    setFilterValue = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    totalPage = _useState16[0],
    SetTotalPage = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(searchTerm),
    _useState18 = _slicedToArray(_useState17, 2),
    debouncedSearchTerm = _useState18[0],
    setDebouncedSearchTerm = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    selectedRows = _useState20[0],
    setSelectedRows = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    reason = _useState22[0],
    setReason = _useState22[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    var storedValue = localStorage.getItem('QuickFilterCustomer');
    if (storedValue) {
      setSearchCustomer(storedValue);
    }
  });
  var fetchItems = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (page, searchTerm, filterField, filterValue) {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/customer-Information?page=").concat(page + 1, "&limit=").concat(limit, "&search=").concat(encodeURIComponent(searchTerm.trim()), "&filterField=").concat(encodeURIComponent(filterField.trim()), "&filterValue=").concat(encodeURIComponent(filterValue.trim())));
        var formatDate = res.data.itemI.map(item => _objectSpread(_objectSpread({}, item), {}, {
          id: item._id
        }));
        setCustomer(formatDate);
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
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    loading = _useState24[0],
    setLoading = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    loadingOpenModal = _useState26[0],
    setLoadingOpenModal = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    ErrorOpenModal = _useState28[0],
    setErrorOpenModal = _useState28[1];
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
    var _ref10 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoCustomer) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: ReferenceInfoCustomer,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotificationOffline(_x5, _x6) {
      return _ref10.apply(this, arguments);
    };
  }();
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    open = _useState30[0],
    setOpen = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    openDeleteMultiple = _useState32[0],
    setOpenDeleteMultiple = _useState32[1];
  var handleOpenMultiple = () => {
    setOpenDeleteMultiple(true);
  };
  var handleCloseMultiple = () => {
    setOpenDeleteMultiple(false);
  };
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    openDeleteAll = _useState34[0],
    setOpenDeleteAll = _useState34[1];
  var handleOpenAll = () => {
    setOpenDeleteAll(true);
  };
  var handleCloseAll = () => {
    setOpenDeleteAll(false);
    setSelectedRows([]);
  };
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    openReasonDelete = _useState36[0],
    setOpenReasonDelete = _useState36[1];
  var handleOpenReasonDelete = e => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState38 = _slicedToArray(_useState37, 2),
    DeleteId = _useState38[0],
    setDeleteId = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    modalOpenLoading = _useState40[0],
    setModalOpenLoading = _useState40[1];
  var handleOpen = id => {
    setOpen(true);
    setSelectedRows([id]);
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
    setSelectedRows([]);
  };
  var handleCloseModal = () => {
    setLoadingOpenModal(false);
    setModalOpenLoading(false);
    setOpenDeleteAll(false);
    setOpenDeleteMultiple(false);
    setOpen(false);
    fetchItems(page, searchTerm, filterField, filterValue);
  };
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    CustomerDeleted = _useState42[0],
    setCustomerDeleted = _useState42[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchFunction = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        var deletePromises = selectedRows.map(/*#__PURE__*/function () {
          var _ref12 = _asyncToGenerator(function* (idToDelete) {
            return axios__WEBPACK_IMPORTED_MODULE_28__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/get-customer/").concat(idToDelete));
          });
          return function (_x7) {
            return _ref12.apply(this, arguments);
          };
        }());
        try {
          var res = yield Promise.all(deletePromises);
          setCustomerDeleted(res.map(row => row.data.data.Customer));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchFunction() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchFunction();
  }, [selectedRows]);
  var related = CustomerDeleted.map(row => row);
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
        yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref13.apply(this, arguments);
    };
  }();
  var handleDeleteMany = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var deletePromises = selectedRows.map(/*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator(function* (idToDelete) {
          return axios__WEBPACK_IMPORTED_MODULE_28__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/remove-customer/").concat(idToDelete));
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
        }
      } catch (error) {
        console.log(error);
      }
    });
    return function handleDeleteMany(_x8) {
      return _ref14.apply(this, arguments);
    };
  }();
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_33__.logOut)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
      items: [],
      quickFilterExcludeHiddenColumns: false,
      quickFilterValues: []
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filterModel = _React$useState2[0],
    setFilterModel = _React$useState2[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState44 = _slicedToArray(_useState43, 2),
    columnVisibilityModel = _useState44[0],
    setColumnVisibilityModel = _useState44[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsCustomer', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterCustomerTst', JSON.stringify(newModel));
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
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterCustomerTst'));
    if (storedQuick) {
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsCustomer'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchCustomer]);
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    open1 = _React$useState4[0],
    setOpen1 = _React$useState4[1];
  var toggleDrawer = () => {
    setOpen1(!open1);
  };
  var columns = [{
    field: 'customerType',
    headerName: 'Type',
    minWidth: 80,
    flex: 0.8
  }, {
    field: 'customerFullName',
    headerName: 'Customer Name',
    minWidth: 150,
    flex: 1.5
  }, {
    field: 'companyName',
    headerName: 'Company Name',
    minWidth: 150,
    flex: 1.5
  }, {
    field: 'customer',
    headerName: 'Invoice Name',
    minWidth: 150,
    flex: 1.5,
    valueGetter: params => {
      var _params$row$Customer;
      return (_params$row$Customer = params.row.Customer) === null || _params$row$Customer === void 0 ? void 0 : _params$row$Customer.toUpperCase();
    }
  }, {
    field: 'customerEmail',
    headerName: 'Email',
    minWidth: 100,
    flex: 1
  }, {
    field: 'customerCompanyPhone',
    headerName: 'Phone N',
    minWidth: 100,
    flex: 1
  }, {
    field: 'customerPhone',
    headerName: 'Phone N 2',
    minWidth: 100,
    flex: 1
  }, {
    field: 'billingAddress',
    headerName: 'Address',
    minWidth: 200,
    flex: 2,
    valueGetter: params => params.row.billingAddress.toUpperCase()
  }, {
    field: 'view',
    headerName: 'View',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      disabled: customerInfoV.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/CustomerInformationView/".concat(params.row._id),
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
      disabled: customerInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/CustomerFormUpdate/".concat(params.row._id),
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onClick: () => handleOpen(params.row._id),
      disabled: customerInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_21__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: open1,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_26__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_41__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_40__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_36__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: open1,
    onMouseEnter: () => setOpen1(true),
    onMouseLeave: () => setOpen1(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_27__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_24__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_23__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_25__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_34__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    disabled: customerInfoC.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
    to: '/CustomerForm',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], null))))))), customer.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, customer.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'left',
      margin: '10px'
    }
  }, selectedRows.length > 1 && selectedRows.length < customer.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: user.data.role !== 'CEO',
    onClick: handleOpenAll,
    className: "btnCustomer2"
  }, "Delete multiple"), selectedRows.length === customer.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleOpenAll,
    disabled: user.data.role !== 'CEO',
    className: "btnCustomer2"
  }, "Delete all") : '') : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_38__.DataGrid, {
    rows: customer,
    columns: columns,
    checkboxSelection: true,
    disableDensitySelector: true,
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_39__.GridToolbar
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    rowSelectionModel: selectedRows,
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
    src: _img_no_data_png__WEBPACK_IMPORTED_MODULE_37__,
    style: {
      position: 'relative',
      marginLeft: '19%',
      padding: '25px',
      height: '40%',
      top: '40px',
      width: '55%',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)'
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
    onClick: handleOpenReasonDelete
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseMultiple
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  }, "Note:"), " Selected rows will be deleted"), selectedRows.length > 1 && selectedRows.length < customer.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), selectedRows.length === customer.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: loadingOpenModal,
    onClose: handleCloseModal,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_12__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_34__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_35__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: modalOpenLoading,
    onClose: handleCloseModal,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_12__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_34__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_35__["default"], {
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
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_30__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: ", info, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleDeleteMany
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerViewAdmin);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfQ3VzdG9tZXJWaWV3QWRtaW5fanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMsU0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlYsQ0FBbUQ7QUFDL0I7QUFDK0I7QUFDQztBQUNzQjtBQUN6QztBQUMyQjtBQUNaO0FBQ0k7QUFDVTtBQUN5STtBQUN2STtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDSTtBQUNJO0FBQ1Y7QUFDVTtBQUNjO0FBQ0k7QUFDeEM7QUFDa0I7QUFDQTtBQUNXO0FBQ0Q7QUFDMEI7QUFDdkM7QUFDcUI7QUFDZDtBQUNUO0FBQ2tCO0FBQ1A7QUFDUTtBQUcxRCxJQUFNNkQsYUFBYSxHQUFHOUMsMERBQU0sQ0FBQytDLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNqRGxFLDBEQUFBLENBQUM2Qiw4REFBTyxFQUFBdUMsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPM0MsOERBQWMsQ0FBQzRDLE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLEtBQUs7TUFDdEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzNC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QUksRUFBQyxRQUFRO0lBQUM3VyxTQUFTLEVBQUMsYUFBYTtJQUFDeUIsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRTtJQUFPO0VBQUUsR0FBQyxNQUFZLENBQ2hGLENBQ0YsQ0FDRixDQUVILENBQ0EsQ0FDSixDQUFDO0FBRVY7QUFDQSxpRUFBZStCLGlCQUFpQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BZGQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL0N1c3RvbWVyVmlld0FkbWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCJcbn0pLCAnQWRkJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi92aWV3LmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaCBmcm9tICcuLi9jb21wb25lbnQvU2lkZWJhckRhc2gnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCAnLi9QYWdlVmlldy9DaGFydHZpZXcuY3NzJ1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgTmF2TGluaywganNvbiwgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgVGFibGUsIE1vZGFsLCBJY29uQnV0dG9uLCBzdHlsZWQsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBDaGVja2JveCwgVGFibGVDb250YWluZXIsIFBhcGVyLCBUeXBvZ3JhcGh5LCBCb3gsIEF1dG9jb21wbGV0ZSwgVGV4dEZpZWxkLCBCYWNrZHJvcCwgR3JpZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGl2aWRlcic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IENsb3NlIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEFkZCwgTWFpbE91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9pbWcvbm8tZGF0YS5wbmcnO1xyXG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZFRvb2xiYXIgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5cclxuXHJcbmNvbnN0IERlbGV0ZVRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBFZGl0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gQ3VzdG9tZXJWaWV3QWRtaW4oKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlLCBpZDogcmVzLmRhdGEuZGF0YS5faWQgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgW2dyYW50QWNjZXNzLCBzZXRHcmFudEFjY2Vzc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dyYW50QWNjZXNzYCk7XHJcbiAgICAgICAgcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cudXNlcklEID09PSB1c2VyLmRhdGEuaWQpXHJcbiAgICAgICAgICAubWFwKChyb3cpID0+IHNldEdyYW50QWNjZXNzKHJvdy5tb2R1bGVzKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hOdW1iZXIoKVxyXG4gIH0sIFt1c2VyXSlcclxuICBjb25zdCBjdXN0b21lckluZm9DID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkN1c3RvbWVyXCIgJiYgcm93LmFjY2Vzcy5jcmVhdGVNID09PSB0cnVlKTtcclxuICBjb25zdCBjdXN0b21lckluZm9WID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkN1c3RvbWVyXCIgJiYgcm93LmFjY2Vzcy52aWV3TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgY3VzdG9tZXJJbmZvVSA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJDdXN0b21lclwiICYmIHJvdy5hY2Nlc3MuZWRpdE0gPT09IHRydWUpO1xyXG4gIGNvbnN0IGN1c3RvbWVySW5mb0QgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiQ3VzdG9tZXJcIiAmJiByb3cuYWNjZXNzLmRlbGV0ZU0gPT09IHRydWUpO1xyXG5cclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWFyY2hDdXN0b21lciwgc2V0U2VhcmNoQ3VzdG9tZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgbGltaXQgPSAxMDA7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaWx0ZXJGaWVsZCwgc2V0RmlsdGVyRmllbGRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyVmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0b3RhbFBhZ2UsIFNldFRvdGFsUGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZGVib3VuY2VkU2VhcmNoVGVybSwgc2V0RGVib3VuY2VkU2VhcmNoVGVybV0gPSB1c2VTdGF0ZShzZWFyY2hUZXJtKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RGVib3VuY2VkU2VhcmNoVGVybShzZWFyY2hUZXJtKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQoaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gIH0sIFtzZWFyY2hUZXJtXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUm93cywgc2V0U2VsZWN0ZWRSb3dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1F1aWNrRmlsdGVyQ3VzdG9tZXInKVxyXG4gICAgaWYgKHN0b3JlZFZhbHVlKSB7XHJcbiAgICAgIHNldFNlYXJjaEN1c3RvbWVyKHN0b3JlZFZhbHVlKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gICAgY29uc3QgZmV0Y2hJdGVtcyA9IGFzeW5jIChwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2N1c3RvbWVyLUluZm9ybWF0aW9uP3BhZ2U9JHtwYWdlICsgMX0mbGltaXQ9JHtsaW1pdH0mc2VhcmNoPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlYXJjaFRlcm0udHJpbSgpKX0mZmlsdGVyRmllbGQ9JHtlbmNvZGVVUklDb21wb25lbnQoZmlsdGVyRmllbGQudHJpbSgpKX0mZmlsdGVyVmFsdWU9JHtlbmNvZGVVUklDb21wb25lbnQoZmlsdGVyVmFsdWUudHJpbSgpKX1gKTtcclxuICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IHJlcy5kYXRhLml0ZW1JLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgIGlkOiBpdGVtLl9pZCxcclxuICAgICAgfSkpO1xyXG4gICAgICBzZXRDdXN0b21lcihmb3JtYXREYXRlKTtcclxuICAgICAgU2V0VG90YWxQYWdlKHJlcy5kYXRhLnRvdGFsUGFnZXMpO1xyXG4gICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoSXRlbXMocGFnZSwgZGVib3VuY2VkU2VhcmNoVGVybSwgZmlsdGVyRmllbGQsIGZpbHRlclZhbHVlKTtcclxuICB9LCBbcGFnZSwgZGVib3VuY2VkU2VhcmNoVGVybSwgZmlsdGVyRmllbGQsIGZpbHRlclZhbHVlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAoZXZlbnQsIG5ld1BhZ2UpID0+IHtcclxuICAgIHNldFBhZ2UobmV3UGFnZSAtIDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PZmZsaW5lID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb25PZmZsaW5lID0gYXN5bmMgKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9DdXN0b21lcikgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBSZWZlcmVuY2VJbmZvLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgQ3JlYXRlZCAnLFxyXG4gICAgICByZWFzb246IFJlZmVyZW5jZUluZm9DdXN0b21lcixcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW5EZWxldGVNdWx0aXBsZSwgc2V0T3BlbkRlbGV0ZU11bHRpcGxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk11bHRpcGxlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZU11bHRpcGxlKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNdWx0aXBsZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EZWxldGVNdWx0aXBsZShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbb3BlbkRlbGV0ZUFsbCwgc2V0T3BlbkRlbGV0ZUFsbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5BbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGVsZXRlQWxsKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VBbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGVsZXRlQWxsKGZhbHNlKTtcclxuICAgIHNldFNlbGVjdGVkUm93cyhbXSlcclxuICB9O1xyXG4gIGNvbnN0IFtvcGVuUmVhc29uRGVsZXRlLCBzZXRPcGVuUmVhc29uRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW0RlbGV0ZUlkLCBzZXREZWxldGVJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbW9kYWxPcGVuTG9hZGluZywgc2V0TW9kYWxPcGVuTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICBzZXRTZWxlY3RlZFJvd3MoW2lkXSlcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5Nb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsT3BlbkxvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0U2VsZWN0ZWRSb3dzKFtdKVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgc2V0TW9kYWxPcGVuTG9hZGluZyhmYWxzZSk7XHJcbiAgICBzZXRPcGVuRGVsZXRlQWxsKGZhbHNlKTtcclxuICAgIHNldE9wZW5EZWxldGVNdWx0aXBsZShmYWxzZSk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIGZldGNoSXRlbXMocGFnZSwgc2VhcmNoVGVybSwgZmlsdGVyRmllbGQsIGZpbHRlclZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IFtDdXN0b21lckRlbGV0ZWQsIHNldEN1c3RvbWVyRGVsZXRlZF0gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZGVsZXRlUHJvbWlzZXMgPSBzZWxlY3RlZFJvd3MubWFwKGFzeW5jIChpZFRvRGVsZXRlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1jdXN0b21lci8ke2lkVG9EZWxldGV9YClcclxuICAgICAgfSlcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChkZWxldGVQcm9taXNlcyk7XHJcbiAgICAgICAgc2V0Q3VzdG9tZXJEZWxldGVkKHJlcy5tYXAoKHJvdykgPT4gcm93LmRhdGEuZGF0YS5DdXN0b21lcikpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRnVuY3Rpb24oKVxyXG4gIH0sIFtzZWxlY3RlZFJvd3NdKVxyXG4gIGNvbnN0IHJlbGF0ZWQgPSBDdXN0b21lckRlbGV0ZWQubWFwKHJvdyA9PiByb3cpXHJcbiAgY29uc3QgaW5mbyA9IHJlbGF0ZWQudG9TdHJpbmcoKVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogJycsXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBEZWxldGVkICcgKyBpbmZvLFxyXG4gICAgICByZWFzb24sXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEZWxldGVNYW55ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgZGVsZXRlUHJvbWlzZXMgPSBzZWxlY3RlZFJvd3MubWFwKGFzeW5jIChpZFRvRGVsZXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiBheGlvcy5kZWxldGUoYCR7RU5EUE9JTlRfVVJMfS9yZW1vdmUtY3VzdG9tZXIvJHtpZFRvRGVsZXRlfWApXHJcbiAgICB9KVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwoZGVsZXRlUHJvbWlzZXMpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uKClcclxuICAgICAgICBoYW5kbGVPcGVuTW9kYWwoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtmaWx0ZXJNb2RlbCwgc2V0RmlsdGVyTW9kZWxdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgaXRlbXM6IFtdLFxyXG4gICAgcXVpY2tGaWx0ZXJFeGNsdWRlSGlkZGVuQ29sdW1uczogZmFsc2UsXHJcbiAgICBxdWlja0ZpbHRlclZhbHVlczogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgW2NvbHVtblZpc2liaWxpdHlNb2RlbCwgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgaGFuZGVsSGlkZGVuQ29sdW1uID0gKG5ld0hpZGRlbikgPT4ge1xyXG4gICAgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsKG5ld0hpZGRlbilcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdIaWRkZW5Db2x1bW5zQ3VzdG9tZXInLCBKU09OLnN0cmluZ2lmeShuZXdIaWRkZW4pKVxyXG4gIH1cclxuICAgIGNvbnN0IGhhbmRsZUZpbHRlciA9IChuZXdNb2RlbCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyTW9kZWwobmV3TW9kZWwpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1F1aWNrRmlsdGVyQ3VzdG9tZXJUc3QnLCBKU09OLnN0cmluZ2lmeShuZXdNb2RlbCkpO1xyXG4gICAgaWYgKG5ld01vZGVsLnF1aWNrRmlsdGVyVmFsdWVzICYmIG5ld01vZGVsLnF1aWNrRmlsdGVyVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0U2VhcmNoVGVybShuZXdNb2RlbC5xdWlja0ZpbHRlclZhbHVlcy5qb2luKCcgJykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2VhcmNoVGVybSgnJyk7XHJcbiAgICB9XHJcbiAgICBpZiAobmV3TW9kZWwuaXRlbXMgJiYgbmV3TW9kZWwuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRGaWx0ZXJGaWVsZChuZXdNb2RlbC5pdGVtc1swXS5maWVsZCk7XHJcbiAgICAgIHNldEZpbHRlclZhbHVlKG5ld01vZGVsLml0ZW1zWzBdLnZhbHVlIHx8ICcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEZpbHRlckZpZWxkKCcnKTtcclxuICAgICAgc2V0RmlsdGVyVmFsdWUoJycpO1xyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkUXVpY2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlckN1c3RvbWVyVHN0JykpXHJcbiAgICBpZiAoc3RvcmVkUXVpY2spIHtcclxuICAgICAgc2V0RmlsdGVyTW9kZWwoc3RvcmVkUXVpY2spXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdG9yZWRDb2x1bW5zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnSGlkZGVuQ29sdW1uc0N1c3RvbWVyJykpXHJcbiAgICBpZiAoc3RvcmVkQ29sdW1ucykge1xyXG4gICAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwoc3RvcmVkQ29sdW1ucylcclxuICAgIH1cclxuXHJcbiAgfSwgW3NlYXJjaEN1c3RvbWVyXSlcclxuICBjb25zdCBbb3BlbjEsIHNldE9wZW4xXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKCFvcGVuMSk7XHJcbiAgfTtcclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgeyBmaWVsZDogJ2N1c3RvbWVyVHlwZScsIGhlYWRlck5hbWU6ICdUeXBlJywgbWluV2lkdGg6IDgwLCBmbGV4OiAwLjggfSxcclxuICAgIHsgZmllbGQ6ICdjdXN0b21lckZ1bGxOYW1lJywgaGVhZGVyTmFtZTogJ0N1c3RvbWVyIE5hbWUnLCBtaW5XaWR0aDogMTUwLCBmbGV4OiAxLjUgfSxcclxuICAgIHsgZmllbGQ6ICdjb21wYW55TmFtZScsIGhlYWRlck5hbWU6ICdDb21wYW55IE5hbWUnLCBtaW5XaWR0aDogMTUwLCBmbGV4OiAxLjUgfSxcclxuICAgIHsgZmllbGQ6ICdjdXN0b21lcicsIGhlYWRlck5hbWU6ICdJbnZvaWNlIE5hbWUnLCBtaW5XaWR0aDogMTUwLCBmbGV4OiAxLjUsIHZhbHVlR2V0dGVyOiAocGFyYW1zKSA9PiBwYXJhbXMucm93LkN1c3RvbWVyPy50b1VwcGVyQ2FzZSgpIH0sXHJcbiAgICB7IGZpZWxkOiAnY3VzdG9tZXJFbWFpbCcsIGhlYWRlck5hbWU6ICdFbWFpbCcsIG1pbldpZHRoOiAxMDAsIGZsZXg6IDEgfSxcclxuICAgIHsgZmllbGQ6ICdjdXN0b21lckNvbXBhbnlQaG9uZScsIGhlYWRlck5hbWU6ICdQaG9uZSBOJywgbWluV2lkdGg6IDEwMCwgZmxleDogMSB9LFxyXG4gICAgeyBmaWVsZDogJ2N1c3RvbWVyUGhvbmUnLCBoZWFkZXJOYW1lOiAnUGhvbmUgTiAyJywgbWluV2lkdGg6IDEwMCwgZmxleDogMSB9LFxyXG4gICAgeyBmaWVsZDogJ2JpbGxpbmdBZGRyZXNzJywgaGVhZGVyTmFtZTogJ0FkZHJlc3MnLCBtaW5XaWR0aDogMjAwLCBmbGV4OiAyLCB2YWx1ZUdldHRlcjogKHBhcmFtcykgPT4gcGFyYW1zLnJvdy5iaWxsaW5nQWRkcmVzcy50b1VwcGVyQ2FzZSgpIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAndmlldycsIGhlYWRlck5hbWU6ICdWaWV3Jywgd2lkdGg6IDYwLCBtaW5XaWR0aDogNjAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJWaWV3XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e2N1c3RvbWVySW5mb1YubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvQ3VzdG9tZXJJbmZvcm1hdGlvblZpZXcvJHtwYXJhbXMucm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5SWNvbiBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdlZGl0JywgaGVhZGVyTmFtZTogJ0VkaXQnLCB3aWR0aDogNjAsIG1pbldpZHRoOiA2MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxFZGl0VG9vbHRpcCB0aXRsZT1cIkVkaXRcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17Y3VzdG9tZXJJbmZvVS5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9DdXN0b21lckZvcm1VcGRhdGUvJHtwYXJhbXMucm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgIDxFZGl0SWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9FZGl0VG9vbHRpcD5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdEZWxldGUnLCBoZWFkZXJOYW1lOiAnRGVsZXRlJywgd2lkdGg6IDYwLCBtaW5XaWR0aDogNjAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8RGVsZXRlVG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgPHNwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuKHBhcmFtcy5yb3cuX2lkKX0gZGlzYWJsZWQ9e2N1c3RvbWVySW5mb0QubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0RlbGV0ZVRvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e29wZW4xfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihvcGVuMSAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDdXN0b21lclxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e29wZW4xfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldE9wZW4xKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldE9wZW4xKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAxIH19ID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxvYWRpbmdEYXRhID8gPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBtYXJnaW46ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e2N1c3RvbWVySW5mb0MubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9DdXN0b21lckZvcm0nfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdidG5DdXN0b21lckFkZGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y3VzdG9tZXIubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiA2MDAsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXN0b21lci5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ2xlZnQnLCBtYXJnaW46ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA+IDEgJiYgc2VsZWN0ZWRSb3dzLmxlbmd0aCA8IGN1c3RvbWVyLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfSBvbkNsaWNrPXtoYW5kbGVPcGVuQWxsfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+RGVsZXRlIG11bHRpcGxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPT09IGN1c3RvbWVyLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5BbGx9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJz5EZWxldGUgYWxsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e2N1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRGVuc2l0eVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbk1vZGU9XCJzZXJ2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0NvdW50PXt0b3RhbFBhZ2UgKiBsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17bGltaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2U9eyhuZXdTZWxlY3Rpb24pID0+IHNldFNlbGVjdGVkUm93cyhuZXdTZWxlY3Rpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RzPXt7IHRvb2xiYXI6IEdyaWRUb29sYmFyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dRdWlja0ZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVRvb2xiYXJCdXR0b246IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbk1vZGVsPXtzZWxlY3RlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTW9kZWw9e2ZpbHRlck1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmlsdGVyTW9kZWxDaGFuZ2U9eyhuZXdNb2RlbCkgPT4gaGFuZGxlRmlsdGVyKG5ld01vZGVsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WaXNpYmlsaXR5TW9kZWw9e2NvbHVtblZpc2liaWxpdHlNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZT17aGFuZGVsSGlkZGVuQ29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgcGFkZGluZzogJzEwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICApIDogPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJbWFnZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpbkxlZnQ6ICcxOSUnLCBwYWRkaW5nOiAnMjVweCcsIGhlaWdodDogJzQwJScsIHRvcDogJzQwcHgnLCB3aWR0aDogJzU1JScsIGJveFNoYWRvdzogJzAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgb25DbGljaz17aGFuZGxlT3BlblJlYXNvbkRlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuRGVsZXRlTXVsdGlwbGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNdWx0aXBsZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHNlbGVjdGVkIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJyBvbkNsaWNrPXtoYW5kbGVPcGVuUmVhc29uRGVsZXRlfT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VNdWx0aXBsZX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkRlbGV0ZUFsbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUFsbH1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gU2VsZWN0ZWQgcm93cyB3aWxsIGJlIGRlbGV0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID4gMSAmJiBzZWxlY3RlZFJvd3MubGVuZ3RoIDwgY3VzdG9tZXIubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZTo8L3NwYW4+IEFsbCBzZWxlY3RlZCByb3dzIHdpbGwgYmUgZGVsZXRlZDwvcD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPT09IGN1c3RvbWVyLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPiBBbGwgcm93cyB3aWxsIGJlIGRlbGV0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInIG9uQ2xpY2s9e2hhbmRsZU9wZW5SZWFzb25EZWxldGV9PlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUFsbH0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e21vZGFsT3BlbkxvYWRpbmd9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj4gRGF0YSBzdWNjZXNzZnVsbHkgZGVsZXRlZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlblJlYXNvbkRlbGV0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlUmVhc29uRGVsZXRlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICBXaHkgZG8geW91IHdhbnQgdG8gZGVsZXRlOiB7aW5mb30/XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRGVsZXRlTWFueX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgaWQ9J3JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgbmFtZT0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nUmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJWaWV3QWRtaW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2giLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiVmlzaWJpbGl0eUljb24iLCJFZGl0SWNvbiIsIkRlbGV0ZUljb24iLCJOYXZMaW5rIiwianNvbiIsInVzZU5hdmlnYXRlIiwiVGFibGUiLCJNb2RhbCIsIkljb25CdXR0b24iLCJzdHlsZWQiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIkNoZWNrYm94IiwiVGFibGVDb250YWluZXIiLCJQYXBlciIsIlR5cG9ncmFwaHkiLCJCb3giLCJBdXRvY29tcGxldGUiLCJUZXh0RmllbGQiLCJCYWNrZHJvcCIsIkdyaWQiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJEaXZpZGVyIiwiQ29udGFpbmVyIiwiTGluayIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkNsb3NlIiwiQWRkIiwiTWFpbE91dGxpbmUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9hZGVyIiwiQ2hlY2tDaXJjbGVJY29uIiwiTG9nb3V0IiwiSW1hZ2UiLCJEYXRhR3JpZCIsIkdyaWRUb29sYmFyIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiRGVsZXRlVG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiRWRpdFRvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIlZpZXdUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjciLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjgiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJDdXN0b21lclZpZXdBZG1pbiIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY5IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJpZCIsIl9pZCIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZ3JhbnRBY2Nlc3MiLCJzZXRHcmFudEFjY2VzcyIsImZldGNoTnVtYmVyIiwiX3JlZjAiLCJfcmVzJGRhdGEiLCJmaWx0ZXIiLCJyb3ciLCJ1c2VySUQiLCJtYXAiLCJtb2R1bGVzIiwiY3VzdG9tZXJJbmZvQyIsIm1vZHVsZU5hbWUiLCJhY2Nlc3MiLCJjcmVhdGVNIiwiY3VzdG9tZXJJbmZvViIsInZpZXdNIiwiY3VzdG9tZXJJbmZvVSIsImVkaXRNIiwiY3VzdG9tZXJJbmZvRCIsImRlbGV0ZU0iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInNlYXJjaEN1c3RvbWVyIiwic2V0U2VhcmNoQ3VzdG9tZXIiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsInBhZ2UiLCJzZXRQYWdlIiwibGltaXQiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJmaWx0ZXJGaWVsZCIsInNldEZpbHRlckZpZWxkIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImZpbHRlclZhbHVlIiwic2V0RmlsdGVyVmFsdWUiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwidG90YWxQYWdlIiwiU2V0VG90YWxQYWdlIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsImRlYm91bmNlZFNlYXJjaFRlcm0iLCJzZXREZWJvdW5jZWRTZWFyY2hUZXJtIiwiaGFuZGxlciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwic2VsZWN0ZWRSb3dzIiwic2V0U2VsZWN0ZWRSb3dzIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsInJlYXNvbiIsInNldFJlYXNvbiIsInN0b3JlZFZhbHVlIiwiZmV0Y2hJdGVtcyIsIl9yZWYxIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidHJpbSIsImZvcm1hdERhdGUiLCJpdGVtSSIsIml0ZW0iLCJ0b3RhbFBhZ2VzIiwiX3giLCJfeDIiLCJfeDMiLCJfeDQiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuT2ZmbGluZSIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uT2ZmbGluZSIsIl9yZWYxMCIsIlJlZmVyZW5jZUluZm8iLCJSZWZlcmVuY2VJbmZvQ3VzdG9tZXIiLCJpZEluZm8iLCJwZXJzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwiRGF0ZSIsInBvc3QiLCJsb2ciLCJfeDUiLCJfeDYiLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwic2V0T3BlbiIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJvcGVuRGVsZXRlTXVsdGlwbGUiLCJzZXRPcGVuRGVsZXRlTXVsdGlwbGUiLCJoYW5kbGVPcGVuTXVsdGlwbGUiLCJoYW5kbGVDbG9zZU11bHRpcGxlIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsIm9wZW5EZWxldGVBbGwiLCJzZXRPcGVuRGVsZXRlQWxsIiwiaGFuZGxlT3BlbkFsbCIsImhhbmRsZUNsb3NlQWxsIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsIm9wZW5SZWFzb25EZWxldGUiLCJzZXRPcGVuUmVhc29uRGVsZXRlIiwiaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlUmVhc29uRGVsZXRlIiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsIkRlbGV0ZUlkIiwic2V0RGVsZXRlSWQiLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwibW9kYWxPcGVuTG9hZGluZyIsInNldE1vZGFsT3BlbkxvYWRpbmciLCJoYW5kbGVPcGVuIiwiaGFuZGxlT3Blbk1vZGFsIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbG9zZU1vZGFsIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsIkN1c3RvbWVyRGVsZXRlZCIsInNldEN1c3RvbWVyRGVsZXRlZCIsImZldGNoRnVuY3Rpb24iLCJfcmVmMTEiLCJkZWxldGVQcm9taXNlcyIsIl9yZWYxMiIsImlkVG9EZWxldGUiLCJfeDciLCJQcm9taXNlIiwiYWxsIiwiQ3VzdG9tZXIiLCJyZWxhdGVkIiwiaW5mbyIsInRvU3RyaW5nIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjEzIiwiaGFuZGxlRGVsZXRlTWFueSIsIl9yZWYxNCIsIl9yZWYxNSIsImRlbGV0ZSIsIl94OSIsIl94OCIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfUmVhY3QkdXNlU3RhdGUiLCJpdGVtcyIsInF1aWNrRmlsdGVyRXhjbHVkZUhpZGRlbkNvbHVtbnMiLCJxdWlja0ZpbHRlclZhbHVlcyIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJmaWx0ZXJNb2RlbCIsInNldEZpbHRlck1vZGVsIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsImNvbHVtblZpc2liaWxpdHlNb2RlbCIsInNldENvbHVtblZpc2liaWxpdHlNb2RlbCIsImhhbmRlbEhpZGRlbkNvbHVtbiIsIm5ld0hpZGRlbiIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlRmlsdGVyIiwibmV3TW9kZWwiLCJsZW5ndGgiLCJqb2luIiwiZmllbGQiLCJ2YWx1ZSIsInN0b3JlZFF1aWNrIiwicGFyc2UiLCJzdG9yZWRDb2x1bW5zIiwiX1JlYWN0JHVzZVN0YXRlMyIsIl9SZWFjdCR1c2VTdGF0ZTQiLCJvcGVuMSIsInNldE9wZW4xIiwidG9nZ2xlRHJhd2VyIiwiY29sdW1ucyIsImhlYWRlck5hbWUiLCJtaW5XaWR0aCIsImZsZXgiLCJ2YWx1ZUdldHRlciIsInBhcmFtcyIsIl9wYXJhbXMkcm93JEN1c3RvbWVyIiwidG9VcHBlckNhc2UiLCJiaWxsaW5nQWRkcmVzcyIsInJlbmRlckNlbGwiLCJ0aXRsZSIsImRpc2FibGVkIiwidG8iLCJvbkNsaWNrIiwiY3Vyc29yIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJuYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10IiwiZmxvYXQiLCJtYXJnaW4iLCJyb3dzIiwiY2hlY2tib3hTZWxlY3Rpb24iLCJkaXNhYmxlRGVuc2l0eVNlbGVjdG9yIiwicGFnaW5hdGlvbk1vZGUiLCJyb3dDb3VudCIsInBhZ2luYXRpb24iLCJwYWdlU2l6ZSIsIm9uUGFnZUNoYW5nZSIsIm9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2UiLCJuZXdTZWxlY3Rpb24iLCJzbG90cyIsInRvb2xiYXIiLCJzbG90UHJvcHMiLCJzaG93UXVpY2tGaWx0ZXIiLCJwcmludE9wdGlvbnMiLCJkaXNhYmxlVG9vbGJhckJ1dHRvbiIsInJvd1NlbGVjdGlvbk1vZGVsIiwib25GaWx0ZXJNb2RlbENoYW5nZSIsIm9uQ29sdW1uVmlzaWJpbGl0eU1vZGVsQ2hhbmdlIiwicGFkZGluZyIsInNyYyIsIm9uQ2xvc2UiLCJ0ZXh0QWxpZ24iLCJnYXAiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJwbGFjZW1lbnQiLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInhzIiwicmVxdWlyZWQiLCJtdWx0aWxpbmUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWwiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==