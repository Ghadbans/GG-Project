"use strict";
exports.id = "src_js_AdminView1_ItemOutViewAdmin_js";
exports.ids = ["src_js_AdminView1_ItemOutViewAdmin_js"];
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

/***/ "./src/js/AdminView1/ItemOutViewAdmin.js"
/*!***********************************************!*\
  !*** ./src/js/AdminView1/ItemOutViewAdmin.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _component_SideMaintenance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/SideMaintenance */ "./src/js/component/SideMaintenance.js");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../img/images.png */ "./src/js/img/images.png");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material/LocalPrintshop */ "./node_modules/@mui/icons-material/LocalPrintshop.js");
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











































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_26__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_29__["default"], {
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
function ItemOutViewAdmin() {
  var _itemPurchaseView$ite;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_42__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_42__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.setUser)({
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
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/grantAccess"));
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
  var ItemOInfoC = grantAccess.filter(row => row.moduleName === "Item-Out" && row.access.createM === true);
  var ItemOInfoV = grantAccess.filter(row => row.moduleName === "Item-Out" && row.access.viewM === true);
  var ItemOInfoU = grantAccess.filter(row => row.moduleName === "Item-Out" && row.access.editM === true);
  var ItemOInfoD = grantAccess.filter(row => row.moduleName === "Item-Out" && row.access.deleteM === true);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    itemOut = _useState4[0],
    setItemOut = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loadingData = _useState6[0],
    setLoadingData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedRows = _useState8[0],
    setSelectedRows = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    item = _useState0[0],
    SetItems = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    newPurchase = _useState10[0],
    setNewPurchase = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    page = _useState12[0],
    setPage = _useState12[1]; // Initialize page state to 0 (0-based index)
  var limit = 100;
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    searchTerm = _useState14[0],
    setSearchTerm = _useState14[1]; // Initialize search term state
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    filterField = _useState16[0],
    setFilterField = _useState16[1]; // Initialize filter field state
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    filterValue = _useState18[0],
    setFilterValue = _useState18[1]; // Initialize filter value state
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    totalPage = _useState20[0],
    SetTotalPage = _useState20[1];
  var fetchItems = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (page, searchTerm, filterField, filterValue) {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/itemOut-Information?page=").concat(page + 1, "&limit=").concat(limit, "&search=").concat(encodeURIComponent(searchTerm.trim()), "&filterField=").concat(encodeURIComponent(filterField.trim()), "&filterValue=").concat(encodeURIComponent(filterValue.trim())));
        var formatDate = res.data.itemI.map(item => {
          var _item$reference;
          return _objectSpread(_objectSpread({}, item), {}, {
            id: item._id,
            dataField: dayjs__WEBPACK_IMPORTED_MODULE_39___default()(item.itemOutDate).format('DD/MM/YYYY'),
            referenceInfo: item.reference !== undefined ? (_item$reference = item.reference) === null || _item$reference === void 0 ? void 0 : _item$reference.referenceName : item.description,
            itemInfo: item.itemsQtyArray.filter(row => row.newItemOut > 0).map(row => row.itemName !== undefined ? row.itemName.itemName : ''),
            itemDescriptionInfo: item.itemsQtyArray.filter(row => row.newItemOut > 0).map(row => row.itemDescription !== undefined ? row.itemDescription : '')
          });
        });
        SetTotalPage(Math.ceil(res.data.totalItem / limit)); // Ensure totalPage is correctly calculated
        setItemOut(formatDate);
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
  var handleRefreshSearch = () => {
    fetchItems(page, searchTerm, filterField, filterValue);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchItems(page, searchTerm, filterField, filterValue);
  }, [page, searchTerm, filterField, filterValue]);
  var handlePageChange = (event, newPage) => {
    setPage(newPage - 1); // Update page state (convert to 0-based index)
  };
  var handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };
  var handleFilterFieldChange = event => {
    setFilterField(event.target.value);
  };
  var handleFilterValueChange = event => {
    setFilterValue(event.target.value);
  };
  {/** search start */}
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filterModel = _React$useState2[0],
    setFilterModel = _React$useState2[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState22 = _slicedToArray(_useState21, 2),
    columnVisibilityModel = _useState22[0],
    setColumnVisibilityModel = _useState22[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsItemOut', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    var _newModel$quickFilter;
    var searchTerm = ((_newModel$quickFilter = newModel.quickFilterValues) === null || _newModel$quickFilter === void 0 ? void 0 : _newModel$quickFilter.join(' ')) || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterItemOutTst', JSON.stringify(newModel));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterItemOutTst'));
    if (storedQuick) {
      var _storedQuick$quickFil;
      var _searchTerm = ((_storedQuick$quickFil = storedQuick.quickFilterValues) === null || _storedQuick$quickFil === void 0 ? void 0 : _storedQuick$quickFil.join(' ')) || '';
      setSearchTerm(_searchTerm);
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsItemOut'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, []);
  {/** view start */}
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    openView = _useState24[0],
    setOpenView = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState26 = _slicedToArray(_useState25, 2),
    idView = _useState26[0],
    setIdView = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState28 = _slicedToArray(_useState27, 2),
    itemPurchaseView = _useState28[0],
    setItemPurchaseView = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    reason = _useState30[0],
    setReason = _useState30[1];
  var handleOpenView = id => {
    setOpenView(true);
    setIdView(id);
  };
  var handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
    setItemPurchaseView(null);
    setSelectedRows([]);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        if (idView !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-itemOut/").concat(idView));
            setItemPurchaseView(res.data.data);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchData2() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [idView]);
  {/** view end */}
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    open = _useState32[0],
    setOpen = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState34 = _slicedToArray(_useState33, 2),
    DeleteId = _useState34[0],
    setDeleteId = _useState34[1];
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleClose = () => {
    setOpen(false);
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
  {/** delete multiple && all modal end */}
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    loading = _useState38[0],
    setLoading = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    loadingOpenModal = _useState40[0],
    setLoadingOpenModal = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    modalDeleteOpenLoading = _useState42[0],
    setModalDeleteOpenLoading = _useState42[1];
  {/** Loading Update View Start */}
  var handleOpenLoading = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    handleCloseUpdate();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleCloseLoading = () => {
    window.location.reload();
  };
  {/** Loading Update View End */}
  {/** Loading Delete View Start */}
  var handleDeleteOpenLoading = () => {
    setModalDeleteOpenLoading(true);
    setLoading(true);
    handleClose();
    setTimeout(() => {
      setLoading(false);
      window.location.reload();
    }, 500);
  };
  var handleDeleteCloseLoading = () => {
    window.location.reload();
  };
  {/** getting all info start */}
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState44 = _slicedToArray(_useState43, 2),
    itemsQtyArray = _useState44[0],
    SetItemsQtyArray = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState46 = _slicedToArray(_useState45, 2),
    reference = _useState46[0],
    setReference = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState48 = _slicedToArray(_useState47, 2),
    relatedNumber = _useState48[0],
    setRelatedNumber = _useState48[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchId = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        if (DeleteId !== null) {
          try {
            var _res$data2, _res$data3;
            var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-itemOut/").concat(DeleteId));
            SetItemsQtyArray(res.data.data.itemsQtyArray);
            setReference(res.data.data.reference);
            setRelatedNumber(Number(((_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.outNumber) || ((_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.outNumber) || 0));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchId() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchId();
  }, [DeleteId]);
  //console.log(itemsQtyArray)
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState50 = _slicedToArray(_useState49, 2),
    projects = _useState50[0],
    setProject = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState52 = _slicedToArray(_useState51, 2),
    maintenance = _useState52[0],
    setMaintenance = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState54 = _slicedToArray(_useState53, 2),
    invoice = _useState54[0],
    setInvoice = _useState54[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        try {
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/purchase?summary=true")), axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/maintenance?summary=true")), axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/invoice?summary=true"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3),
            purChaseResponse = _yield$Promise$all2[0],
            maintenanceResponse = _yield$Promise$all2[1],
            invoiceResponse = _yield$Promise$all2[2];
          setProject(purChaseResponse.data.data);
          setMaintenance(maintenanceResponse.data.data);
          setInvoice(invoiceResponse.data.data);
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchData() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState56 = _slicedToArray(_useState55, 2),
    filteredInvoice = _useState56[0],
    setFilteredInvoice = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState58 = _slicedToArray(_useState57, 2),
    invoiceId = _useState58[0],
    setInvoiceId = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState60 = _slicedToArray(_useState59, 2),
    filteredProject = _useState60[0],
    setFilteredProject = _useState60[1];
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState62 = _slicedToArray(_useState61, 2),
    projectId = _useState62[0],
    setProjectId = _useState62[1];
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState64 = _slicedToArray(_useState63, 2),
    filteredMaintenance = _useState64[0],
    setFilteredMaintenance = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState66 = _slicedToArray(_useState65, 2),
    serviceId = _useState66[0],
    setServiceId = _useState66[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setInvoiceId('');
    setProjectId('');
    setServiceId('');
    setFilteredInvoice([]);
    setFilteredProject([]);
    setFilteredMaintenance([]);
    invoice.filter(row => row._id === (reference === null || reference === void 0 ? void 0 : reference._id)).map(row => {
      setFilteredInvoice(row.items);
      setInvoiceId(row._id);
    });
    projects.filter(row => {
      var _row$projectName;
      return ((_row$projectName = row.projectName) === null || _row$projectName === void 0 ? void 0 : _row$projectName._id) === (reference === null || reference === void 0 ? void 0 : reference._id);
    }).map(row => {
      setFilteredProject(row.items);
      setProjectId(row._id);
    });
    maintenance.filter(row => row._id === (reference === null || reference === void 0 ? void 0 : reference._id)).map(row => {
      setFilteredMaintenance(row.items);
      setServiceId(row._id);
    });
  }, [invoice, projects, maintenance, reference]);
  {/** getting all info end */}
  {/** Update Info start */}
  var handleUpdatePurchase = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-purchase/").concat(projectId));
        var currentPurchase = res.data.data;
        var result = currentPurchase.items.map(row => {
          var relatedArray = itemsQtyArray.filter(Item => parseFloat(Item.newItemOut) !== 0).find(Item => {
            var _Item$itemName, _Item$itemName2, _row$itemName;
            return ((_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName._id) && ((_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2._id) === ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName._id);
          });
          if (relatedArray) {
            var infoOut = relatedArray.newItemOut > 0 ? parseFloat(relatedArray.newItemOut) : 0;
            var _itemOut = (parseFloat(row.itemOut) || 0) - infoOut;
            return _objectSpread(_objectSpread({}, row), {}, {
              itemOut: _itemOut
            });
          }
          return row;
        });
        var data = {
          items: result
        };
        return yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/update-purchase/").concat(projectId), data);
      } catch (error) {
        console.error(error);
      }
    });
    return function handleUpdatePurchase() {
      return _ref13.apply(this, arguments);
    };
  }();
  var handleUpdateInvoice = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-invoice/").concat(invoiceId));
        var currentInvoice = res.data.data;
        var result = currentInvoice.items.map(row => {
          var relatedArray = itemsQtyArray.filter(Item => parseFloat(Item.newItemOut) !== 0).find(Item => {
            var _Item$itemName3, _Item$itemName4, _row$itemName2;
            return ((_Item$itemName3 = Item.itemName) === null || _Item$itemName3 === void 0 ? void 0 : _Item$itemName3._id) && ((_Item$itemName4 = Item.itemName) === null || _Item$itemName4 === void 0 ? void 0 : _Item$itemName4._id) === ((_row$itemName2 = row.itemName) === null || _row$itemName2 === void 0 ? void 0 : _row$itemName2._id);
          });
          if (relatedArray) {
            var infoOut = relatedArray.newItemOut > 0 ? parseFloat(relatedArray.newItemOut) : 0;
            var _itemOut2 = (parseFloat(row.itemOut) || 0) - infoOut;
            return _objectSpread(_objectSpread({}, row), {}, {
              itemOut: _itemOut2
            });
          }
          return row;
        });
        var data = {
          items: result
        };
        return yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/update-invoice/").concat(invoiceId), data);
      } catch (error) {
        console.error(error);
      }
    });
    return function handleUpdateInvoice() {
      return _ref14.apply(this, arguments);
    };
  }();
  var handleUpdateMaintenance = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-maintenance/").concat(serviceId));
        var currentMaintenance = res.data.data;
        var result = currentMaintenance.items.map(row => {
          var relatedArray = itemsQtyArray.filter(Item => parseFloat(Item.newItemOut) !== 0).find(Item => {
            var _Item$itemName5, _Item$itemName6, _row$itemName3;
            return ((_Item$itemName5 = Item.itemName) === null || _Item$itemName5 === void 0 ? void 0 : _Item$itemName5._id) && ((_Item$itemName6 = Item.itemName) === null || _Item$itemName6 === void 0 ? void 0 : _Item$itemName6._id) === ((_row$itemName3 = row.itemName) === null || _row$itemName3 === void 0 ? void 0 : _row$itemName3._id);
          });
          if (relatedArray) {
            var infoOut = relatedArray.newItemOut > 0 ? parseFloat(relatedArray.newItemOut) : 0;
            var _itemOut3 = (parseFloat(row.itemOut) || 0) - infoOut;
            return _objectSpread(_objectSpread({}, row), {}, {
              itemOut: _itemOut3
            });
          }
          return row;
        });
        var data = {
          items: result
        };
        return yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/update-maintenance/").concat(serviceId), data);
      } catch (error) {
        console.error(error);
      }
    });
    return function handleUpdateMaintenance() {
      return _ref15.apply(this, arguments);
    };
  }();
  {/** Update Info end */}
  {/** Delete Start */}
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + ' O-' + relatedNumber,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref16.apply(this, arguments);
    };
  }();
  var handleQty = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(function* () {
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/CalculateTotal"));
      } catch (error) {
        console.log(error);
      }
    });
    return function handleQty() {
      return _ref17.apply(this, arguments);
    };
  }();
  var handleDeleteUpdate = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/delete-itemOut/").concat(DeleteId));
        if (res) {
          yield handleCreateNotification();
          yield handleQty();
          if (projectId) {
            yield handleUpdatePurchase();
          } else if (invoiceId) {
            //Update Invoice
            yield handleUpdateInvoice();
          } else if (serviceId) {
            yield handleUpdateMaintenance();
          } else {
            console.log('no related');
          }
          handleCloseReasonDelete();
          handleDeleteOpenLoading();
        }
      } catch (error) {
        console.log('An error as occur in delete');
      }
    });
    return function handleDeleteUpdate(_x5) {
      return _ref18.apply(this, arguments);
    };
  }();
  {/** Delete End */}
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    open1 = _React$useState4[0],
    setOpen1 = _React$useState4[1];
  var toggleDrawer = () => {
    setOpen1(!open1);
  };
  var itemsArray = (itemPurchaseView === null || itemPurchaseView === void 0 || (_itemPurchaseView$ite = itemPurchaseView.itemsQtyArray) === null || _itemPurchaseView$ite === void 0 ? void 0 : _itemPurchaseView$ite.length) < 5 ? [...itemPurchaseView.itemsQtyArray, ...Array(5 - itemPurchaseView.itemsQtyArray.length).fill({
    itemName: '',
    itemDescription: '',
    newItemOut: ''
  })] : itemPurchaseView === null || itemPurchaseView === void 0 ? void 0 : itemPurchaseView.itemsQtyArray;
  var columns = [{
    field: 'outNumber',
    headerName: '#',
    width: 90,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "O-0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, params.row.outNumber), " ")
  }, {
    field: 'itemOutDate',
    headerName: 'Date',
    width: 100,
    type: 'date',
    valueGetter: params => new Date(params.row.itemOutDate),
    renderCell: params => dayjs__WEBPACK_IMPORTED_MODULE_39___default()(params.row.itemOutDate).format('DD/MM/YYYY')
  }, {
    field: 'reason',
    headerName: 'Reason',
    width: 150
  }, {
    field: 'referenceInfo',
    headerName: 'Description',
    width: open1 ? 480 : 550
  }, {
    field: 'itemInfo',
    headerName: 'Item',
    width: open1 ? 80 : 130
  }, {
    field: 'itemDescriptionInfo',
    headerName: 'I-Description',
    width: open1 ? 80 : 130
  }, {
    field: 'view',
    headerName: 'View',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      disabled: ItemOInfoV.length === 0 && user.data.role !== 'CEO',
      onClick: () => handleOpenView(params.row._id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      disabled: ItemOInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/ItemOutViewUpdate/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        color: 'gray'
      }
    })))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onClick: () => handleOpen(params.row._id),
      disabled: ItemOInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_51__.useReactToPrint)({
    content: () => componentRef.current,
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_28__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: open1,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_33__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Item Out"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_50__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_49__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_44__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: open1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_34__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_31__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_30__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SideMaintenance__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_32__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    disabled: ItemOInfoC.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
    to: '/ItemOutViewForm',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleRefreshSearch,
    className: "btnCustomer2"
  }, "Refresh Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_47__.DataGrid, {
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: itemOut,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_48__.GridToolbar
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
    disableDensitySelector: true,
    filterModel: filterModel,
    rowSelectionModel: selectedRows,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    count: totalPage,
    page: page + 1,
    onChange: handlePageChange,
    color: "primary",
    sx: {
      position: 'relative',
      top: '-50px'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Do you Want to delete?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClose,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Cancel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleOpenReasonDelete,
    className: "btnCustomer2",
    style: {
      width: '100%'
    }
  }, "Delete"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: modalDeleteOpenLoading,
    onClose: handleDeleteCloseLoading,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_14__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__["default"], {
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
    onClick: handleDeleteCloseLoading,
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: openView,
    onClose: handleCloseView,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 850
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleCloseView,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Print",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handlePrint,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_52__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), itemPurchaseView !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    hidden: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: componentRef,
    style: {
      width: '100%',
      padding: '20px',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    style: {
      color: 'black',
      justifyContent: 'center',
      left: '40px',
      right: '40px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      padding: '5px'
    }
  }, "Item Out Number: O-0", itemPurchaseView.outNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_images_png__WEBPACK_IMPORTED_MODULE_46__,
    style: {
      height: '60px',
      width: '230px'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      color: 'black'
    },
    spacing: 2
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "secondTable",
    style: {
      fontSize: '70%',
      marginBottom: '5px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, dayjs__WEBPACK_IMPORTED_MODULE_39___default()(itemPurchaseView.itemOutDate).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, itemPurchaseView.reason !== undefined ? itemPurchaseView.reason : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, itemPurchaseView.reference !== undefined ? itemPurchaseView.reference.referenceName : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, itemPurchaseView.description !== undefined ? itemPurchaseView.description : '')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "secondTable",
    style: {
      fontSize: '70%',
      marginBottom: '5px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Qty"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, itemPurchaseView.itemsQtyArray.filter(row => parseFloat(row.newItemOut) > 0).map((row, i) => {
    var relatedUnit = item.find(Item1 => Item1._id === row.itemName._id);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: row.idRow
    }, row.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 4
    }, row.itemName.itemName) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, row.itemName.itemName, " ( ", relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : '', " )"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, row.itemDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, row.newItemOut, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : '')));
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Store Manager Signature"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Customer Signature")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, itemPurchaseView.Create.person, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Create O-0", itemPurchaseView.outNumber), " on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, itemPurchaseView.Create.dateComment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    style: {
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Out Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 3
  }, dayjs__WEBPACK_IMPORTED_MODULE_39___default()(itemPurchaseView.itemOutDate).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 3
  }, itemPurchaseView.reason !== undefined ? itemPurchaseView.reason : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 3
  }, itemPurchaseView.reference !== undefined ? itemPurchaseView.reference.referenceName : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 3
  }, itemPurchaseView.description !== undefined ? itemPurchaseView.description : '')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      maxHeight: 400,
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    "aria-label": "collapsible table",
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Qty"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, itemPurchaseView.itemsQtyArray.filter(row => parseFloat(row.newItemOut) > 0).map((row, i) => {
    var relatedUnit = item.find(Item1 => Item1._id === row.itemName._id);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      key: row.idRow
    }, row.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      colSpan: 4
    }, row.itemName.itemName) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, row.itemName.itemName, " ( ", relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : '', " )"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, row.itemDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, row.newItemOut, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : '')));
  }))))))))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: O-", relatedNumber, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleDeleteUpdate
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemOutViewAdmin);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfSXRlbU91dFZpZXdBZG1pbl9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxTQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlYsQ0FBMEQ7QUFDdkM7QUFDZTtBQUN3QjtBQUNOO0FBQ3NCO0FBQ2Q7QUFDWjtBQUNJO0FBQ0k7QUFDZ047QUFDeE07QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ0k7QUFDSTtBQUNWO0FBQ1U7QUFDYztBQUNJO0FBQ3hDO0FBQ2tCO0FBQ2tCO0FBQ3BDO0FBQ2U7QUFDcUI7QUFDUjtBQUMwQjtBQUNoQztBQUNUO0FBQ0Q7QUFDbUI7QUFDYTtBQUNKO0FBQ0s7QUFDUDtBQUNkO0FBQ1E7QUFFVDtBQUNlO0FBRWhFLElBQU00RSxhQUFhLEdBQUc5RCwwREFBTSxDQUFDK0QsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2pEakYsMERBQUEsQ0FBQ21DLDhEQUFPLEVBQUFnRCxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU9wRCw4REFBYyxDQUFDcUQsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFDZEMs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QixzREFBSTtJQUFDa0wsSUFBSTtJQUFDZ1YsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCM2hCLDBEQUFBLENBQUNnQyxzREFBUztJQUNSd2hCLFFBQVE7SUFDUjFaLEVBQUUsRUFBQyxRQUFRO0lBQ1h3VixJQUFJLEVBQUMsUUFBUTtJQUNibUUsU0FBUztJQUNUbkQsSUFBSSxFQUFFLENBQUU7SUFDUjlQLEtBQUssRUFBRXlDLE1BQU87SUFDZHlRLFdBQVcsRUFBQyxRQUFRO0lBQ3BCbEMsUUFBUSxFQUFHbE4sQ0FBQyxJQUFLcEIsU0FBUyxDQUFDb0IsQ0FBQyxDQUFDL0QsTUFBTSxDQUFDQyxLQUFLLENBQUU7SUFDM0NtVCxLQUFLLEVBQUMsUUFBUTtJQUNkOUUsRUFBRSxFQUFFO01BQUVqWSxLQUFLLEVBQUUsTUFBTTtNQUFFbEIsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNqRCxDQUNHLENBQUMsZUFDUDFGLDBEQUFBLFdBQUssQ0FBQyxlQUNOQSwwREFBQSxDQUFDeUIsc0RBQUk7SUFBQ2tMLElBQUk7SUFBQ2dWLEVBQUUsRUFBRTtFQUFHLGdCQUNoQjNoQiwwREFBQTtJQUFRaWQsSUFBSSxFQUFDLFFBQVE7SUFBQ25ZLFNBQVMsRUFBQyxhQUFhO0lBQUN5QixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFO0lBQU87RUFBRSxHQUFDLE1BQVksQ0FDaEYsQ0FDRixDQUNGLENBRUgsQ0FDQSxDQUNKLENBQUM7QUFFVjtBQUVBLGlFQUFlK0IsZ0JBQWdCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0FkZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvSXRlbU91dFZpZXdBZG1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2elwiXG59KSwgJ0FkZCcpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuL3ZpZXcuY3NzJ1xyXG5pbXBvcnQgJy4vUGFnZVZpZXcvQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTaWRlTWFpbnRlbmFuY2UgZnJvbSAnLi4vY29tcG9uZW50L1NpZGVNYWludGVuYW5jZSdcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgVGFibGUsIEljb25CdXR0b24sIHN0eWxlZCwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlSGVhZCwgVGFibGVSb3csIENoZWNrYm94LCBUYWJsZUNvbnRhaW5lciwgUGFwZXIsIFR5cG9ncmFwaHksIE1vZGFsLCBCb3gsIEdyaWQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIE1lbnVJdGVtLCBCYWNrZHJvcCwgQXV0b2NvbXBsZXRlLCBUZXh0RmllbGQsIENvbGxhcHNlLCBQYWdpbmF0aW9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgQWRkLCBDbG9zZSwgTWFpbE91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9pbWcvbm8tZGF0YS5wbmcnO1xyXG5pbXBvcnQgSW1hZ2UxIGZyb20gJy4uL2ltZy9pbWFnZXMucG5nJ1xyXG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZFRvb2xiYXIgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd24nO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1VwJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciwgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5pbXBvcnQgeyB1c2VSZWFjdFRvUHJpbnQgfSBmcm9tICdyZWFjdC10by1wcmludCc7XHJcbmltcG9ydCBMb2NhbFByaW50c2hvcCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvY2FsUHJpbnRzaG9wJztcclxuXHJcbmNvbnN0IERlbGV0ZVRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBFZGl0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gSXRlbU91dFZpZXdBZG1pbigpIHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUsIGlkOiByZXMuZGF0YS5kYXRhLl9pZCB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBbZ3JhbnRBY2Nlc3MsIHNldEdyYW50QWNjZXNzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hOdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ3JhbnRBY2Nlc3NgKTtcclxuICAgICAgICByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy51c2VySUQgPT09IHVzZXIuZGF0YS5pZClcclxuICAgICAgICAgIC5tYXAoKHJvdykgPT4gc2V0R3JhbnRBY2Nlc3Mocm93Lm1vZHVsZXMpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaE51bWJlcigpXHJcbiAgfSwgW3VzZXJdKVxyXG5cclxuICBjb25zdCBJdGVtT0luZm9DID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkl0ZW0tT3V0XCIgJiYgcm93LmFjY2Vzcy5jcmVhdGVNID09PSB0cnVlKTtcclxuICBjb25zdCBJdGVtT0luZm9WID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkl0ZW0tT3V0XCIgJiYgcm93LmFjY2Vzcy52aWV3TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgSXRlbU9JbmZvVSA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJJdGVtLU91dFwiICYmIHJvdy5hY2Nlc3MuZWRpdE0gPT09IHRydWUpO1xyXG4gIGNvbnN0IEl0ZW1PSW5mb0QgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiSXRlbS1PdXRcIiAmJiByb3cuYWNjZXNzLmRlbGV0ZU0gPT09IHRydWUpO1xyXG5cclxuICBjb25zdCBbaXRlbU91dCwgc2V0SXRlbU91dF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRSb3dzLCBzZXRTZWxlY3RlZFJvd3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpdGVtLCBTZXRJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbmV3UHVyY2hhc2UsIHNldE5ld1B1cmNoYXNlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMCk7IC8vIEluaXRpYWxpemUgcGFnZSBzdGF0ZSB0byAwICgwLWJhc2VkIGluZGV4KVxyXG4gIGNvbnN0IGxpbWl0ID0gMTAwO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTsgLy8gSW5pdGlhbGl6ZSBzZWFyY2ggdGVybSBzdGF0ZVxyXG4gIGNvbnN0IFtmaWx0ZXJGaWVsZCwgc2V0RmlsdGVyRmllbGRdID0gdXNlU3RhdGUoJycpOyAvLyBJbml0aWFsaXplIGZpbHRlciBmaWVsZCBzdGF0ZVxyXG4gIGNvbnN0IFtmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyVmFsdWVdID0gdXNlU3RhdGUoJycpOyAvLyBJbml0aWFsaXplIGZpbHRlciB2YWx1ZSBzdGF0ZVxyXG4gIGNvbnN0IFt0b3RhbFBhZ2UsIFNldFRvdGFsUGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hJdGVtcyA9IGFzeW5jIChwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1PdXQtSW5mb3JtYXRpb24/cGFnZT0ke3BhZ2UgKyAxfSZsaW1pdD0ke2xpbWl0fSZzZWFyY2g9JHtlbmNvZGVVUklDb21wb25lbnQoc2VhcmNoVGVybS50cmltKCkpfSZmaWx0ZXJGaWVsZD0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJGaWVsZC50cmltKCkpfSZmaWx0ZXJWYWx1ZT0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJWYWx1ZS50cmltKCkpfWApO1xyXG4gICAgICBjb25zdCBmb3JtYXREYXRlID0gcmVzLmRhdGEuaXRlbUkubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgaWQ6IGl0ZW0uX2lkLFxyXG4gICAgICAgIGRhdGFGaWVsZDogZGF5anMoaXRlbS5pdGVtT3V0RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyksXHJcbiAgICAgICAgcmVmZXJlbmNlSW5mbzogaXRlbS5yZWZlcmVuY2UgIT09IHVuZGVmaW5lZCA/IGl0ZW0ucmVmZXJlbmNlPy5yZWZlcmVuY2VOYW1lIDogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICBpdGVtSW5mbzogaXRlbS5pdGVtc1F0eUFycmF5LmZpbHRlcigocm93KSA9PiByb3cubmV3SXRlbU91dCA+IDApLm1hcCgocm93KSA9PiByb3cuaXRlbU5hbWUgIT09IHVuZGVmaW5lZCA/IHJvdy5pdGVtTmFtZS5pdGVtTmFtZSA6ICcnKSxcclxuICAgICAgICBpdGVtRGVzY3JpcHRpb25JbmZvOiBpdGVtLml0ZW1zUXR5QXJyYXkuZmlsdGVyKChyb3cpID0+IHJvdy5uZXdJdGVtT3V0ID4gMCkubWFwKChyb3cpID0+IHJvdy5pdGVtRGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IHJvdy5pdGVtRGVzY3JpcHRpb24gOiAnJylcclxuICAgICAgfSkpO1xyXG4gICAgICBTZXRUb3RhbFBhZ2UoTWF0aC5jZWlsKHJlcy5kYXRhLnRvdGFsSXRlbSAvIGxpbWl0KSk7IC8vIEVuc3VyZSB0b3RhbFBhZ2UgaXMgY29ycmVjdGx5IGNhbGN1bGF0ZWRcclxuICAgICAgc2V0SXRlbU91dChmb3JtYXREYXRlKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVJlZnJlc2hTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBmZXRjaEl0ZW1zKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaEl0ZW1zKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSk7XHJcbiAgfSwgW3BhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKGV2ZW50LCBuZXdQYWdlKSA9PiB7XHJcbiAgICBzZXRQYWdlKG5ld1BhZ2UgLSAxKTsgLy8gVXBkYXRlIHBhZ2Ugc3RhdGUgKGNvbnZlcnQgdG8gMC1iYXNlZCBpbmRleClcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWx0ZXJGaWVsZENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyRmllbGQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWx0ZXJWYWx1ZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHsvKiogc2VhcmNoIHN0YXJ0ICovIH1cclxuICBjb25zdCBbZmlsdGVyTW9kZWwsIHNldEZpbHRlck1vZGVsXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIHF1aWNrRmlsdGVyRXhjbHVkZUhpZGRlbkNvbHVtbnM6IHRydWUsXHJcbiAgICBxdWlja0ZpbHRlclZhbHVlczogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgW2NvbHVtblZpc2liaWxpdHlNb2RlbCwgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBoYW5kZWxIaWRkZW5Db2x1bW4gPSAobmV3SGlkZGVuKSA9PiB7XHJcbiAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwobmV3SGlkZGVuKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0hpZGRlbkNvbHVtbnNJdGVtT3V0JywgSlNPTi5zdHJpbmdpZnkobmV3SGlkZGVuKSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRmlsdGVyID0gKG5ld01vZGVsKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gbmV3TW9kZWwucXVpY2tGaWx0ZXJWYWx1ZXM/LmpvaW4oJyAnKSB8fCAnJztcclxuICAgIHNldFNlYXJjaFRlcm0oc2VhcmNoVGVybSk7XHJcbiAgICBzZXRGaWx0ZXJNb2RlbChuZXdNb2RlbClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdRdWlja0ZpbHRlckl0ZW1PdXRUc3QnLCBKU09OLnN0cmluZ2lmeShuZXdNb2RlbCkpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRRdWljayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1F1aWNrRmlsdGVySXRlbU91dFRzdCcpKVxyXG4gICAgaWYgKHN0b3JlZFF1aWNrKSB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBzdG9yZWRRdWljay5xdWlja0ZpbHRlclZhbHVlcz8uam9pbignICcpIHx8ICcnO1xyXG4gICAgICBzZXRTZWFyY2hUZXJtKHNlYXJjaFRlcm0pO1xyXG4gICAgICBzZXRGaWx0ZXJNb2RlbChzdG9yZWRRdWljaylcclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3JlZENvbHVtbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdIaWRkZW5Db2x1bW5zSXRlbU91dCcpKVxyXG4gICAgaWYgKHN0b3JlZENvbHVtbnMpIHtcclxuICAgICAgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsKHN0b3JlZENvbHVtbnMpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgey8qKiB2aWV3IHN0YXJ0ICovIH1cclxuICBjb25zdCBbb3BlblZpZXcsIHNldE9wZW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaWRWaWV3LCBzZXRJZFZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2l0ZW1QdXJjaGFzZVZpZXcsIHNldEl0ZW1QdXJjaGFzZVZpZXddID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaGFuZGxlT3BlblZpZXcgPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW5WaWV3KHRydWUpO1xyXG4gICAgc2V0SWRWaWV3KGlkKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZVZpZXcgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuVmlldyhmYWxzZSk7XHJcbiAgICBzZXRJZFZpZXcobnVsbCk7XHJcbiAgICBzZXRJdGVtUHVyY2hhc2VWaWV3KG51bGwpO1xyXG4gICAgc2V0U2VsZWN0ZWRSb3dzKFtdKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEyID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgaWYgKGlkVmlldyAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbU91dC8ke2lkVmlld31gKVxyXG4gICAgICAgICAgc2V0SXRlbVB1cmNoYXNlVmlldyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YTIoKVxyXG4gIH0sIFtpZFZpZXddKVxyXG4gIHsvKiogdmlldyBlbmQgKi8gfVxyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRGVsZXRlSWQsIHNldERlbGV0ZUlkXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICAgIHNldERlbGV0ZUlkKGlkKVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IFtvcGVuUmVhc29uRGVsZXRlLCBzZXRPcGVuUmVhc29uRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgey8qKiBkZWxldGUgbXVsdGlwbGUgJiYgYWxsIG1vZGFsIGVuZCAqLyB9XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxEZWxldGVPcGVuTG9hZGluZywgc2V0TW9kYWxEZWxldGVPcGVuTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgey8qKiBMb2FkaW5nIFVwZGF0ZSBWaWV3IFN0YXJ0ICovIH1cclxuICBjb25zdCBoYW5kbGVPcGVuTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgaGFuZGxlQ2xvc2VVcGRhdGUoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuICB7LyoqIExvYWRpbmcgVXBkYXRlIFZpZXcgRW5kICovIH1cclxuXHJcbiAgey8qKiBMb2FkaW5nIERlbGV0ZSBWaWV3IFN0YXJ0ICovIH1cclxuICBjb25zdCBoYW5kbGVEZWxldGVPcGVuTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsRGVsZXRlT3BlbkxvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgaGFuZGxlQ2xvc2UoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuICB7LyoqIGdldHRpbmcgYWxsIGluZm8gc3RhcnQgKi8gfVxyXG4gIGNvbnN0IFtpdGVtc1F0eUFycmF5LCBTZXRJdGVtc1F0eUFycmF5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVmZXJlbmNlLCBzZXRSZWZlcmVuY2VdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW3JlbGF0ZWROdW1iZXIsIHNldFJlbGF0ZWROdW1iZXJdID0gdXNlU3RhdGUoMClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hJZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKERlbGV0ZUlkICE9PSBudWxsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtT3V0LyR7RGVsZXRlSWR9YClcclxuICAgICAgICAgIFNldEl0ZW1zUXR5QXJyYXkocmVzLmRhdGEuZGF0YS5pdGVtc1F0eUFycmF5KTtcclxuICAgICAgICAgIHNldFJlZmVyZW5jZShyZXMuZGF0YS5kYXRhLnJlZmVyZW5jZSk7XHJcbiAgICAgICAgICBzZXRSZWxhdGVkTnVtYmVyKE51bWJlcihyZXMuZGF0YT8uZGF0YT8ub3V0TnVtYmVyIHx8IHJlcy5kYXRhPy5vdXROdW1iZXIgfHwgMCkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoSWQoKVxyXG4gIH0sIFtEZWxldGVJZF0pXHJcbiAgLy9jb25zb2xlLmxvZyhpdGVtc1F0eUFycmF5KVxyXG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21haW50ZW5hbmNlLCBzZXRNYWludGVuYW5jZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ludm9pY2UsIHNldEludm9pY2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW3B1ckNoYXNlUmVzcG9uc2UsIG1haW50ZW5hbmNlUmVzcG9uc2UsIGludm9pY2VSZXNwb25zZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wdXJjaGFzZT9zdW1tYXJ5PXRydWVgKSxcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L21haW50ZW5hbmNlP3N1bW1hcnk9dHJ1ZWApLFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaW52b2ljZT9zdW1tYXJ5PXRydWVgKVxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgc2V0UHJvamVjdChwdXJDaGFzZVJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0TWFpbnRlbmFuY2UobWFpbnRlbmFuY2VSZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldEludm9pY2UoaW52b2ljZVJlc3BvbnNlLmRhdGEuZGF0YSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbXSlcclxuICBjb25zdCBbZmlsdGVyZWRJbnZvaWNlLCBzZXRGaWx0ZXJlZEludm9pY2VdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2ludm9pY2VJZCwgc2V0SW52b2ljZUlkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtmaWx0ZXJlZFByb2plY3QsIHNldEZpbHRlcmVkUHJvamVjdF0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbcHJvamVjdElkLCBzZXRQcm9qZWN0SWRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2ZpbHRlcmVkTWFpbnRlbmFuY2UsIHNldEZpbHRlcmVkTWFpbnRlbmFuY2VdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3NlcnZpY2VJZCwgc2V0U2VydmljZUlkXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW52b2ljZUlkKCcnKTtcclxuICAgIHNldFByb2plY3RJZCgnJyk7XHJcbiAgICBzZXRTZXJ2aWNlSWQoJycpO1xyXG4gICAgc2V0RmlsdGVyZWRJbnZvaWNlKFtdKTtcclxuICAgIHNldEZpbHRlcmVkUHJvamVjdChbXSk7XHJcbiAgICBzZXRGaWx0ZXJlZE1haW50ZW5hbmNlKFtdKTtcclxuICAgIFxyXG4gICAgaW52b2ljZS5maWx0ZXIoKHJvdykgPT4gcm93Ll9pZCA9PT0gcmVmZXJlbmNlPy5faWQpLm1hcCgocm93KSA9PiB7XHJcbiAgICAgIHNldEZpbHRlcmVkSW52b2ljZShyb3cuaXRlbXMpO1xyXG4gICAgICBzZXRJbnZvaWNlSWQocm93Ll9pZCk7XHJcbiAgICB9KTtcclxuICAgIHByb2plY3RzLmZpbHRlcigocm93KSA9PiByb3cucHJvamVjdE5hbWU/Ll9pZCA9PT0gcmVmZXJlbmNlPy5faWQpLm1hcCgocm93KSA9PiB7XHJcbiAgICAgIHNldEZpbHRlcmVkUHJvamVjdChyb3cuaXRlbXMpO1xyXG4gICAgICBzZXRQcm9qZWN0SWQocm93Ll9pZCk7XHJcbiAgICB9KTtcclxuICAgIG1haW50ZW5hbmNlLmZpbHRlcigocm93KSA9PiByb3cuX2lkID09PSByZWZlcmVuY2U/Ll9pZCkubWFwKChyb3cpID0+IHtcclxuICAgICAgc2V0RmlsdGVyZWRNYWludGVuYW5jZShyb3cuaXRlbXMpO1xyXG4gICAgICBzZXRTZXJ2aWNlSWQocm93Ll9pZCk7XHJcbiAgICB9KTtcclxuICB9LCBbaW52b2ljZSwgcHJvamVjdHMsIG1haW50ZW5hbmNlLCByZWZlcmVuY2VdKVxyXG5cclxuICB7LyoqIGdldHRpbmcgYWxsIGluZm8gZW5kICovIH1cclxuICB7LyoqIFVwZGF0ZSBJbmZvIHN0YXJ0ICovIH1cclxuICBjb25zdCBoYW5kbGVVcGRhdGVQdXJjaGFzZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1wdXJjaGFzZS8ke3Byb2plY3RJZH1gKTtcclxuICAgICAgY29uc3QgY3VycmVudFB1cmNoYXNlID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gY3VycmVudFB1cmNoYXNlLml0ZW1zLm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVsYXRlZEFycmF5ID0gaXRlbXNRdHlBcnJheS5maWx0ZXIoKEl0ZW0pID0+IHBhcnNlRmxvYXQoSXRlbS5uZXdJdGVtT3V0KSAhPT0gMClcclxuICAgICAgICAgIC5maW5kKChJdGVtKSA9PiBJdGVtLml0ZW1OYW1lPy5faWQgJiYgSXRlbS5pdGVtTmFtZT8uX2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZClcclxuICAgICAgICBpZiAocmVsYXRlZEFycmF5KSB7XHJcbiAgICAgICAgICBjb25zdCBpbmZvT3V0ID0gcmVsYXRlZEFycmF5Lm5ld0l0ZW1PdXQgPiAwID8gcGFyc2VGbG9hdChyZWxhdGVkQXJyYXkubmV3SXRlbU91dCkgOiAwXHJcbiAgICAgICAgICBjb25zdCBpdGVtT3V0ID0gKHBhcnNlRmxvYXQocm93Lml0ZW1PdXQpIHx8IDApIC0gaW5mb091dFxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ucm93LCBpdGVtT3V0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBpdGVtczogcmVzdWx0XHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtcHVyY2hhc2UvJHtwcm9qZWN0SWR9YCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpOyB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZUludm9pY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaW52b2ljZS8ke2ludm9pY2VJZH1gKTtcclxuICAgICAgY29uc3QgY3VycmVudEludm9pY2UgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBjdXJyZW50SW52b2ljZS5pdGVtcy5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlbGF0ZWRBcnJheSA9IGl0ZW1zUXR5QXJyYXkuZmlsdGVyKChJdGVtKSA9PiBwYXJzZUZsb2F0KEl0ZW0ubmV3SXRlbU91dCkgIT09IDApXHJcbiAgICAgICAgICAuZmluZCgoSXRlbSkgPT4gSXRlbS5pdGVtTmFtZT8uX2lkICYmIEl0ZW0uaXRlbU5hbWU/Ll9pZCA9PT0gcm93Lml0ZW1OYW1lPy5faWQpXHJcbiAgICAgICAgaWYgKHJlbGF0ZWRBcnJheSkge1xyXG4gICAgICAgICAgY29uc3QgaW5mb091dCA9IHJlbGF0ZWRBcnJheS5uZXdJdGVtT3V0ID4gMCA/IHBhcnNlRmxvYXQocmVsYXRlZEFycmF5Lm5ld0l0ZW1PdXQpIDogMFxyXG4gICAgICAgICAgY29uc3QgaXRlbU91dCA9IChwYXJzZUZsb2F0KHJvdy5pdGVtT3V0KSB8fCAwKSAtIGluZm9PdXRcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnJvdywgaXRlbU91dFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93XHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgaXRlbXM6IHJlc3VsdFxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLWludm9pY2UvJHtpbnZvaWNlSWR9YCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpOyB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZU1haW50ZW5hbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LW1haW50ZW5hbmNlLyR7c2VydmljZUlkfWApO1xyXG4gICAgICBjb25zdCBjdXJyZW50TWFpbnRlbmFuY2UgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBjdXJyZW50TWFpbnRlbmFuY2UuaXRlbXMubWFwKChyb3cpID0+IHtcclxuICAgICAgICBjb25zdCByZWxhdGVkQXJyYXkgPSBpdGVtc1F0eUFycmF5LmZpbHRlcigoSXRlbSkgPT4gcGFyc2VGbG9hdChJdGVtLm5ld0l0ZW1PdXQpICE9PSAwKVxyXG4gICAgICAgICAgLmZpbmQoKEl0ZW0pID0+IEl0ZW0uaXRlbU5hbWU/Ll9pZCAmJiBJdGVtLml0ZW1OYW1lPy5faWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkKVxyXG4gICAgICAgIGlmIChyZWxhdGVkQXJyYXkpIHtcclxuICAgICAgICAgIGNvbnN0IGluZm9PdXQgPSByZWxhdGVkQXJyYXkubmV3SXRlbU91dCA+IDAgPyBwYXJzZUZsb2F0KHJlbGF0ZWRBcnJheS5uZXdJdGVtT3V0KSA6IDBcclxuICAgICAgICAgIGNvbnN0IGl0ZW1PdXQgPSAocGFyc2VGbG9hdChyb3cuaXRlbU91dCkgfHwgMCkgLSBpbmZvT3V0XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5yb3csIGl0ZW1PdXRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd1xyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGl0ZW1zOiByZXN1bHRcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1tYWludGVuYW5jZS8ke3NlcnZpY2VJZH1gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgY29uc29sZS5lcnJvcihlcnJvcik7IH1cclxuICB9XHJcbiAgey8qKiBVcGRhdGUgSW5mbyBlbmQgKi8gfVxyXG4gIHsvKiogRGVsZXRlIFN0YXJ0ICovIH1cclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86ICcnLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgRGVsZXRlZCAnICsgJyBPLScgKyByZWxhdGVkTnVtYmVyLFxyXG4gICAgICByZWFzb24sXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVRdHkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vQ2FsY3VsYXRlVG90YWxgKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVVwZGF0ZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtFTkRQT0lOVF9VUkx9L2RlbGV0ZS1pdGVtT3V0LyR7RGVsZXRlSWR9YCk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBhd2FpdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oKTtcclxuICAgICAgICBhd2FpdCBoYW5kbGVRdHkoKVxyXG4gICAgICAgIGlmIChwcm9qZWN0SWQpIHtcclxuICAgICAgICAgIGF3YWl0IGhhbmRsZVVwZGF0ZVB1cmNoYXNlKClcclxuICAgICAgICB9IGVsc2UgaWYgKGludm9pY2VJZCkge1xyXG4gICAgICAgICAgLy9VcGRhdGUgSW52b2ljZVxyXG4gICAgICAgICAgYXdhaXQgaGFuZGxlVXBkYXRlSW52b2ljZSgpXHJcbiAgICAgICAgfSBlbHNlIGlmIChzZXJ2aWNlSWQpIHtcclxuICAgICAgICAgIGF3YWl0IGhhbmRsZVVwZGF0ZU1haW50ZW5hbmNlKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ25vIHJlbGF0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUoKTtcclxuICAgICAgICBoYW5kbGVEZWxldGVPcGVuTG9hZGluZygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0FuIGVycm9yIGFzIG9jY3VyIGluIGRlbGV0ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuICB7LyoqIERlbGV0ZSBFbmQgKi8gfVxyXG4gIGNvbnN0IFtvcGVuMSwgc2V0T3BlbjFdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbjEoIW9wZW4xKTtcclxuICB9O1xyXG4gIGNvbnN0IGl0ZW1zQXJyYXkgPSBpdGVtUHVyY2hhc2VWaWV3Py5pdGVtc1F0eUFycmF5Py5sZW5ndGggPCA1ID8gWy4uLml0ZW1QdXJjaGFzZVZpZXcuaXRlbXNRdHlBcnJheSwgLi4uQXJyYXkoNSAtIGl0ZW1QdXJjaGFzZVZpZXcuaXRlbXNRdHlBcnJheS5sZW5ndGgpLmZpbGwoeyBpdGVtTmFtZTogJycsIGl0ZW1EZXNjcmlwdGlvbjogJycsIG5ld0l0ZW1PdXQ6ICcnIH0pXSA6IGl0ZW1QdXJjaGFzZVZpZXc/Lml0ZW1zUXR5QXJyYXlcclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgeyBmaWVsZDogJ291dE51bWJlcicsIGhlYWRlck5hbWU6ICcjJywgd2lkdGg6IDkwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoPGRpdj4gPHNwYW4+Ty0wPC9zcGFuPjxzcGFuPntwYXJhbXMucm93Lm91dE51bWJlcn08L3NwYW4+IDwvZGl2PikgfSxcclxuICAgIHsgZmllbGQ6ICdpdGVtT3V0RGF0ZScsIGhlYWRlck5hbWU6ICdEYXRlJywgd2lkdGg6IDEwMCwgdHlwZTogJ2RhdGUnLCB2YWx1ZUdldHRlcjogKHBhcmFtcykgPT4gbmV3IERhdGUocGFyYW1zLnJvdy5pdGVtT3V0RGF0ZSksIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IGRheWpzKHBhcmFtcy5yb3cuaXRlbU91dERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpIH0sXHJcbiAgICB7IGZpZWxkOiAncmVhc29uJywgaGVhZGVyTmFtZTogJ1JlYXNvbicsIHdpZHRoOiAxNTAgfSxcclxuICAgIHsgZmllbGQ6ICdyZWZlcmVuY2VJbmZvJywgaGVhZGVyTmFtZTogJ0Rlc2NyaXB0aW9uJywgd2lkdGg6IG9wZW4xID8gNDgwIDogNTUwIH0sXHJcbiAgICB7IGZpZWxkOiAnaXRlbUluZm8nLCBoZWFkZXJOYW1lOiAnSXRlbScsIHdpZHRoOiBvcGVuMSA/IDgwIDogMTMwIH0sXHJcbiAgICB7IGZpZWxkOiAnaXRlbURlc2NyaXB0aW9uSW5mbycsIGhlYWRlck5hbWU6ICdJLURlc2NyaXB0aW9uJywgd2lkdGg6IG9wZW4xID8gODAgOiAxMzAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICd2aWV3JywgaGVhZGVyTmFtZTogJ1ZpZXcnLCB3aWR0aDogNTAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJWaWV3XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e0l0ZW1PSW5mb1YubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30gb25DbGljaz17KCkgPT4gaGFuZGxlT3BlblZpZXcocGFyYW1zLnJvdy5faWQpfT5cclxuICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdlZGl0JywgaGVhZGVyTmFtZTogJ0VkaXQnLCB3aWR0aDogNTAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8RWRpdFRvb2x0aXAgdGl0bGU9XCJFZGl0XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e0l0ZW1PSW5mb1UubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvSXRlbU91dFZpZXdVcGRhdGUvJHtwYXJhbXMucm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgIDxFZGl0SWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9FZGl0VG9vbHRpcD5cclxuXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnRGVsZXRlJywgaGVhZGVyTmFtZTogJ0RlbGV0ZScsIHdpZHRoOiA1MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxEZWxldGVUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCI+XHJcbiAgICAgICAgICA8c3Bhbj4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuKHBhcmFtcy5yb3cuX2lkKX0gZGlzYWJsZWQ9e0l0ZW1PSW5mb0QubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0RlbGV0ZVRvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgXVxyXG4gIGNvbnN0IGNvbXBvbmVudFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmludCA9IHVzZVJlYWN0VG9QcmludCh7XHJcbiAgICBjb250ZW50OiAoKSA9PiBjb21wb25lbnRSZWYuY3VycmVudCxcclxuICAgIG9uQmVmb3JlR2V0Q29udGVudDogKCkgPT4ge1xyXG4gICAgICBjb25zdCBQQUdFX0hFSUdIVCA9IDEwNDU7XHJcbiAgICAgIGNvbnN0IHByaW50RWxlbWVudCA9IGNvbXBvbmVudFJlZi5jdXJyZW50O1xyXG4gICAgICBpZiAocHJpbnRFbGVtZW50KSB7XHJcbiAgICAgICAgcHJpbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLWNsYXNzLWZvci1oZWlnaHRcIilcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBwcmludEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZQYWdlID0gTWF0aC5jZWlsKGhlaWdodCAvIFBBR0VfSEVJR0hUKVxyXG4gICAgICAgIGlmIChudW1iZXJPZlBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICBjb25zdCBoZWlnaHRXaXRoU2luZ2xlSGVhZGVyID0gbnVtYmVyT2ZQYWdlICogUEFHRV9IRUlHSFRcclxuICAgICAgICAgIGxldCByZXF1aXJlZEhlaWdodCA9IGhlaWdodFdpdGhTaW5nbGVIZWFkZXJcclxuICAgICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHByaW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRoZWFkXCIpPy5bMF0/LmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgY29uc3QgZm9vdGVySGVpZ2h0ID0gcHJpbnRFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGZvb3RcIik/LlswXT8uY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICByZXF1aXJlZEhlaWdodCAtPSAobnVtYmVyT2ZQYWdlIC0gMSkgKiAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KVxyXG4gICAgICAgICAgcHJpbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke3JlcXVpcmVkSGVpZ2h0fXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZW1wLWNsYXNzLWZvci1oZWlnaHRcIilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQWZ0ZXJQcmludDogKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcmludEVsZW1lbnQgPSBjb21wb25lbnRSZWYuY3VycmVudDtcclxuICAgICAgaWYgKHByaW50RWxlbWVudCkge1xyXG4gICAgICAgIHByaW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgYXV0b2BcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtvcGVuMX0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4ob3BlbjEgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSXRlbSBPdXRcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtvcGVuMX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGVNYWludGVuYW5jZSAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogMSB9fSA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsb2FkaW5nRGF0YSA/IDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgbWFyZ2luOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGRpc2FibGVkPXtJdGVtT0luZm9DLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsnL0l0ZW1PdXRWaWV3Rm9ybSd9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdidG5DdXN0b21lckFkZGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUmVmcmVzaFNlYXJjaH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInPlJlZnJlc2ggU2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiA2MDAsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGFHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbk1vZGU9XCJzZXJ2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0NvdW50PXt0b3RhbFBhZ2UgKiBsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17bGltaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17aXRlbU91dH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzbG90cz17eyB0b29sYmFyOiBHcmlkVG9vbGJhciB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Sb3dTZWxlY3Rpb25Nb2RlbENoYW5nZT17KG5ld1NlbGVjdGlvbikgPT4gc2V0U2VsZWN0ZWRSb3dzKG5ld1NlbGVjdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzbG90UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dRdWlja0ZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVUb29sYmFyQnV0dG9uOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBnZXRSb3dDbGFzc05hbWU9eyhwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1B1cmNoYXNlLmluY2x1ZGVzKHBhcmFtcy5yb3cuX2lkKSA/ICduZXctUHVyY2hhc2UnIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURlbnNpdHlTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTW9kZWw9e2ZpbHRlck1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uTW9kZWw9e3NlbGVjdGVkUm93c31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uRmlsdGVyTW9kZWxDaGFuZ2U9eyhuZXdNb2RlbCkgPT4gaGFuZGxlRmlsdGVyKG5ld01vZGVsKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZpc2liaWxpdHlNb2RlbD17Y29sdW1uVmlzaWJpbGl0eU1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Db2x1bW5WaXNpYmlsaXR5TW9kZWxDaGFuZ2U9e2hhbmRlbEhpZGRlbkNvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgcGFkZGluZzogJzEwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBjb3VudD17dG90YWxQYWdlfSBwYWdlPXtwYWdlICsgMX0gb25DaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9IGNvbG9yPVwicHJpbWFyeVwiIHN4PXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICctNTBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgRG8geW91IFdhbnQgdG8gZGVsZXRlP1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlT3BlblJlYXNvbkRlbGV0ZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bW9kYWxEZWxldGVPcGVuTG9hZGluZ31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVEZWxldGVDbG9zZUxvYWRpbmd9XHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+IERhdGEgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsb3NlTG9hZGluZ30gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlblZpZXd9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VWaWV3fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDg1MCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VWaWV3fSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIlByaW50XCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlUHJpbnR9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8TG9jYWxQcmludHNob3Agc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtUHVyY2hhc2VWaWV3ICE9PSBudWxsID9cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJveCBoaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtjb21wb25lbnRSZWZ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcyMHB4JywgbWFyZ2luOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGxlZnQ6ICc0MHB4JywgcmlnaHQ6ICc0MHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JyB9fT5JdGVtIE91dCBOdW1iZXI6IE8tMHtpdGVtUHVyY2hhc2VWaWV3Lm91dE51bWJlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlMX0gc3R5bGU9e3sgaGVpZ2h0OiAnNjBweCcsIHdpZHRoOiAnMjMwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIGNvbG9yOiAnYmxhY2snIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzcwJScsIG1hcmdpbkJvdHRvbTogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5EYXRlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9PntkYXlqcyhpdGVtUHVyY2hhc2VWaWV3Lml0ZW1PdXREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlJlYXNvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfT57aXRlbVB1cmNoYXNlVmlldy5yZWFzb24gIT09IHVuZGVmaW5lZCA/IGl0ZW1QdXJjaGFzZVZpZXcucmVhc29uIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5SZWZlcmVuY2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30+e2l0ZW1QdXJjaGFzZVZpZXcucmVmZXJlbmNlICE9PSB1bmRlZmluZWQgPyBpdGVtUHVyY2hhc2VWaWV3LnJlZmVyZW5jZS5yZWZlcmVuY2VOYW1lIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5EZXNjcmlwdGlvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfT57aXRlbVB1cmNoYXNlVmlldy5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gaXRlbVB1cmNoYXNlVmlldy5kZXNjcmlwdGlvbiA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzcwJScsIG1hcmdpbkJvdHRvbTogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtUHVyY2hhc2VWaWV3Lml0ZW1zUXR5QXJyYXkuZmlsdGVyKChyb3cpID0+IHBhcnNlRmxvYXQocm93Lm5ld0l0ZW1PdXQpID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGVkVW5pdCA9IGl0ZW0uZmluZCgoSXRlbTEpID0+IEl0ZW0xLl9pZCA9PT0gcm93Lml0ZW1OYW1lLl9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtyb3cuaWRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Lm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs0fT57cm93Lml0ZW1OYW1lLml0ZW1OYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvdy5pdGVtTmFtZS5pdGVtTmFtZX0gKCB7cmVsYXRlZFVuaXQgIT09IHVuZGVmaW5lZCA/IHJlbGF0ZWRVbml0Lml0ZW1CcmFuZC50b1VwcGVyQ2FzZSgpIDogJyd9ICk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyb3cuaXRlbURlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvdy5uZXdJdGVtT3V0fSB7cmVsYXRlZFVuaXQgIT09IHVuZGVmaW5lZCA/IHJlbGF0ZWRVbml0LnVuaXQudG9VcHBlckNhc2UoKSA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN0b3JlIE1hbmFnZXIgU2lnbmF0dXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DdXN0b21lciBTaWduYXR1cmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW1QdXJjaGFzZVZpZXcuQ3JlYXRlLnBlcnNvbn0gPC9zcGFuPjxzcGFuPiBDcmVhdGUgTy0we2l0ZW1QdXJjaGFzZVZpZXcub3V0TnVtYmVyfTwvc3Bhbj4gb24gPHNwYW4+e2l0ZW1QdXJjaGFzZVZpZXcuQ3JlYXRlLmRhdGVDb21tZW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiA2MDAsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+T3V0IERhdGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXszfT57ZGF5anMoaXRlbVB1cmNoYXNlVmlldy5pdGVtT3V0RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlJlYXNvbjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PntpdGVtUHVyY2hhc2VWaWV3LnJlYXNvbiAhPT0gdW5kZWZpbmVkID8gaXRlbVB1cmNoYXNlVmlldy5yZWFzb24gOiAnJ308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UmVmZXJlbmNlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17M30+e2l0ZW1QdXJjaGFzZVZpZXcucmVmZXJlbmNlICE9PSB1bmRlZmluZWQgPyBpdGVtUHVyY2hhc2VWaWV3LnJlZmVyZW5jZS5yZWZlcmVuY2VOYW1lIDogJyd9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkRlc2NyaXB0aW9uPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17M30+e2l0ZW1QdXJjaGFzZVZpZXcuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IGl0ZW1QdXJjaGFzZVZpZXcuZGVzY3JpcHRpb24gOiAnJ308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBzeD17eyBtYXhIZWlnaHQ6IDQwMCwgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgYXJpYS1sYWJlbD1cImNvbGxhcHNpYmxlIHRhYmxlXCIgc3RpY2t5SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+IzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+SXRlbTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGVzY3JpcHRpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlF0eTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVB1cmNoYXNlVmlldy5pdGVtc1F0eUFycmF5LmZpbHRlcigocm93KSA9PiBwYXJzZUZsb2F0KHJvdy5uZXdJdGVtT3V0KSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRlZFVuaXQgPSBpdGVtLmZpbmQoKEl0ZW0xKSA9PiBJdGVtMS5faWQgPT09IHJvdy5pdGVtTmFtZS5faWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93LmlkUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezR9Pntyb3cuaXRlbU5hbWUuaXRlbU5hbWV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntpICsgMX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5pdGVtTmFtZS5pdGVtTmFtZX0gKCB7cmVsYXRlZFVuaXQgIT09IHVuZGVmaW5lZCA/IHJlbGF0ZWRVbml0Lml0ZW1CcmFuZC50b1VwcGVyQ2FzZSgpIDogJyd9ICk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5pdGVtRGVzY3JpcHRpb259PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cubmV3SXRlbU91dH0ge3JlbGF0ZWRVbml0ICE9PSB1bmRlZmluZWQgPyByZWxhdGVkVW5pdC51bml0LnRvVXBwZXJDYXNlKCkgOiAnJ308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VSZWFzb25EZWxldGV9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIFdoeSBkbyB5b3Ugd2FudCB0byBkZWxldGU6IE8te3JlbGF0ZWROdW1iZXJ9P1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZURlbGV0ZVVwZGF0ZX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgaWQ9J3JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgbmFtZT0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nUmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1PdXRWaWV3QWRtaW5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJTaWRlTWFpbnRlbmFuY2UiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiVmlzaWJpbGl0eUljb24iLCJFZGl0SWNvbiIsIkRlbGV0ZUljb24iLCJOYXZMaW5rIiwidXNlTmF2aWdhdGUiLCJUYWJsZSIsIkljb25CdXR0b24iLCJzdHlsZWQiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIkNoZWNrYm94IiwiVGFibGVDb250YWluZXIiLCJQYXBlciIsIlR5cG9ncmFwaHkiLCJNb2RhbCIsIkJveCIsIkdyaWQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJNZW51SXRlbSIsIkJhY2tkcm9wIiwiQXV0b2NvbXBsZXRlIiwiVGV4dEZpZWxkIiwiQ29sbGFwc2UiLCJQYWdpbmF0aW9uIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiRGl2aWRlciIsIkNvbnRhaW5lciIsIkxpbmsiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJBZGQiLCJDbG9zZSIsIk1haWxPdXRsaW5lIiwiZGF5anMiLCJMb2FkZXIiLCJDaGVja0NpcmNsZUljb24iLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiSW1hZ2UiLCJJbWFnZTEiLCJEYXRhR3JpZCIsIkdyaWRUb29sYmFyIiwiS2V5Ym9hcmRBcnJvd0Rvd24iLCJLZXlib2FyZEFycm93VXAiLCJEYXRlUGlja2VyIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJBZGFwdGVyRGF5anMiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJ1c2VSZWFjdFRvUHJpbnQiLCJMb2NhbFByaW50c2hvcCIsIkRlbGV0ZVRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIkVkaXRUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJWaWV3VG9vbHRpcCIsIl9yZWY1IiwiX2V4Y2x1ZGVkMyIsIl9yZWY2Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY3Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWY4Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiSXRlbU91dFZpZXdBZG1pbiIsIl9pdGVtUHVyY2hhc2VWaWV3JGl0ZSIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY5IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJpZCIsIl9pZCIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImdyYW50QWNjZXNzIiwic2V0R3JhbnRBY2Nlc3MiLCJmZXRjaE51bWJlciIsIl9yZWYwIiwiX3JlcyRkYXRhIiwiZmlsdGVyIiwicm93IiwidXNlcklEIiwibWFwIiwibW9kdWxlcyIsIkl0ZW1PSW5mb0MiLCJtb2R1bGVOYW1lIiwiYWNjZXNzIiwiY3JlYXRlTSIsIkl0ZW1PSW5mb1YiLCJ2aWV3TSIsIkl0ZW1PSW5mb1UiLCJlZGl0TSIsIkl0ZW1PSW5mb0QiLCJkZWxldGVNIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJpdGVtT3V0Iiwic2V0SXRlbU91dCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4Iiwic2VsZWN0ZWRSb3dzIiwic2V0U2VsZWN0ZWRSb3dzIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJpdGVtIiwiU2V0SXRlbXMiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJuZXdQdXJjaGFzZSIsInNldE5ld1B1cmNoYXNlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInBhZ2UiLCJzZXRQYWdlIiwibGltaXQiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0Iiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiZmlsdGVyRmllbGQiLCJzZXRGaWx0ZXJGaWVsZCIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJmaWx0ZXJWYWx1ZSIsInNldEZpbHRlclZhbHVlIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsInRvdGFsUGFnZSIsIlNldFRvdGFsUGFnZSIsImZldGNoSXRlbXMiLCJfcmVmMSIsImVuY29kZVVSSUNvbXBvbmVudCIsInRyaW0iLCJmb3JtYXREYXRlIiwiaXRlbUkiLCJfaXRlbSRyZWZlcmVuY2UiLCJkYXRhRmllbGQiLCJpdGVtT3V0RGF0ZSIsImZvcm1hdCIsInJlZmVyZW5jZUluZm8iLCJyZWZlcmVuY2UiLCJ1bmRlZmluZWQiLCJyZWZlcmVuY2VOYW1lIiwiZGVzY3JpcHRpb24iLCJpdGVtSW5mbyIsIml0ZW1zUXR5QXJyYXkiLCJuZXdJdGVtT3V0IiwiaXRlbU5hbWUiLCJpdGVtRGVzY3JpcHRpb25JbmZvIiwiaXRlbURlc2NyaXB0aW9uIiwiTWF0aCIsImNlaWwiLCJ0b3RhbEl0ZW0iLCJfeCIsIl94MiIsIl94MyIsIl94NCIsImhhbmRsZVJlZnJlc2hTZWFyY2giLCJoYW5kbGVQYWdlQ2hhbmdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVGaWx0ZXJGaWVsZENoYW5nZSIsImhhbmRsZUZpbHRlclZhbHVlQ2hhbmdlIiwiX1JlYWN0JHVzZVN0YXRlIiwiaXRlbXMiLCJxdWlja0ZpbHRlckV4Y2x1ZGVIaWRkZW5Db2x1bW5zIiwicXVpY2tGaWx0ZXJWYWx1ZXMiLCJfUmVhY3QkdXNlU3RhdGUyIiwiZmlsdGVyTW9kZWwiLCJzZXRGaWx0ZXJNb2RlbCIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJjb2x1bW5WaXNpYmlsaXR5TW9kZWwiLCJzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwiLCJoYW5kZWxIaWRkZW5Db2x1bW4iLCJuZXdIaWRkZW4iLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZUZpbHRlciIsIm5ld01vZGVsIiwiX25ld01vZGVsJHF1aWNrRmlsdGVyIiwiam9pbiIsInN0b3JlZFF1aWNrIiwicGFyc2UiLCJfc3RvcmVkUXVpY2skcXVpY2tGaWwiLCJzdG9yZWRDb2x1bW5zIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsIm9wZW5WaWV3Iiwic2V0T3BlblZpZXciLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwiaWRWaWV3Iiwic2V0SWRWaWV3IiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsIml0ZW1QdXJjaGFzZVZpZXciLCJzZXRJdGVtUHVyY2hhc2VWaWV3IiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsInJlYXNvbiIsInNldFJlYXNvbiIsImhhbmRsZU9wZW5WaWV3IiwiaGFuZGxlQ2xvc2VWaWV3IiwiZmV0Y2hEYXRhMiIsIl9yZWYxMCIsImxvZyIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJzZXRPcGVuIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsIkRlbGV0ZUlkIiwic2V0RGVsZXRlSWQiLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2Iiwib3BlblJlYXNvbkRlbGV0ZSIsInNldE9wZW5SZWFzb25EZWxldGUiLCJoYW5kbGVPcGVuUmVhc29uRGVsZXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwibW9kYWxEZWxldGVPcGVuTG9hZGluZyIsInNldE1vZGFsRGVsZXRlT3BlbkxvYWRpbmciLCJoYW5kbGVPcGVuTG9hZGluZyIsImhhbmRsZUNsb3NlVXBkYXRlIiwic2V0VGltZW91dCIsImhhbmRsZUNsb3NlTG9hZGluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmciLCJoYW5kbGVEZWxldGVDbG9zZUxvYWRpbmciLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0IiwiU2V0SXRlbXNRdHlBcnJheSIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJzZXRSZWZlcmVuY2UiLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4IiwicmVsYXRlZE51bWJlciIsInNldFJlbGF0ZWROdW1iZXIiLCJmZXRjaElkIiwiX3JlZjExIiwiX3JlcyRkYXRhMiIsIl9yZXMkZGF0YTMiLCJOdW1iZXIiLCJvdXROdW1iZXIiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0IiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsIm1haW50ZW5hbmNlIiwic2V0TWFpbnRlbmFuY2UiLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0IiwiaW52b2ljZSIsInNldEludm9pY2UiLCJmZXRjaERhdGEiLCJfcmVmMTIiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJQcm9taXNlIiwiYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsMiIsInB1ckNoYXNlUmVzcG9uc2UiLCJtYWludGVuYW5jZVJlc3BvbnNlIiwiaW52b2ljZVJlc3BvbnNlIiwiX3VzZVN0YXRlNTUiLCJfdXNlU3RhdGU1NiIsImZpbHRlcmVkSW52b2ljZSIsInNldEZpbHRlcmVkSW52b2ljZSIsIl91c2VTdGF0ZTU3IiwiX3VzZVN0YXRlNTgiLCJpbnZvaWNlSWQiLCJzZXRJbnZvaWNlSWQiLCJfdXNlU3RhdGU1OSIsIl91c2VTdGF0ZTYwIiwiZmlsdGVyZWRQcm9qZWN0Iiwic2V0RmlsdGVyZWRQcm9qZWN0IiwiX3VzZVN0YXRlNjEiLCJfdXNlU3RhdGU2MiIsInByb2plY3RJZCIsInNldFByb2plY3RJZCIsIl91c2VTdGF0ZTYzIiwiX3VzZVN0YXRlNjQiLCJmaWx0ZXJlZE1haW50ZW5hbmNlIiwic2V0RmlsdGVyZWRNYWludGVuYW5jZSIsIl91c2VTdGF0ZTY1IiwiX3VzZVN0YXRlNjYiLCJzZXJ2aWNlSWQiLCJzZXRTZXJ2aWNlSWQiLCJfcm93JHByb2plY3ROYW1lIiwicHJvamVjdE5hbWUiLCJoYW5kbGVVcGRhdGVQdXJjaGFzZSIsIl9yZWYxMyIsImN1cnJlbnRQdXJjaGFzZSIsInJlc3VsdCIsInJlbGF0ZWRBcnJheSIsIkl0ZW0iLCJwYXJzZUZsb2F0IiwiZmluZCIsIl9JdGVtJGl0ZW1OYW1lIiwiX0l0ZW0kaXRlbU5hbWUyIiwiX3JvdyRpdGVtTmFtZSIsImluZm9PdXQiLCJwdXQiLCJoYW5kbGVVcGRhdGVJbnZvaWNlIiwiX3JlZjE0IiwiY3VycmVudEludm9pY2UiLCJfSXRlbSRpdGVtTmFtZTMiLCJfSXRlbSRpdGVtTmFtZTQiLCJfcm93JGl0ZW1OYW1lMiIsImhhbmRsZVVwZGF0ZU1haW50ZW5hbmNlIiwiX3JlZjE1IiwiY3VycmVudE1haW50ZW5hbmNlIiwiX0l0ZW0kaXRlbU5hbWU1IiwiX0l0ZW0kaXRlbU5hbWU2IiwiX3JvdyRpdGVtTmFtZTMiLCJoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24iLCJfcmVmMTYiLCJpZEluZm8iLCJwZXJzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwiRGF0ZSIsInBvc3QiLCJoYW5kbGVRdHkiLCJfcmVmMTciLCJoYW5kbGVEZWxldGVVcGRhdGUiLCJfcmVmMTgiLCJkZWxldGUiLCJfeDUiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsIm9wZW4xIiwic2V0T3BlbjEiLCJ0b2dnbGVEcmF3ZXIiLCJpdGVtc0FycmF5IiwibGVuZ3RoIiwiQXJyYXkiLCJmaWxsIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsInJlbmRlckNlbGwiLCJwYXJhbXMiLCJ0eXBlIiwidmFsdWVHZXR0ZXIiLCJ0aXRsZSIsImRpc2FibGVkIiwib25DbGljayIsInRvIiwiY3Vyc29yIiwiY29tcG9uZW50UmVmIiwiaGFuZGxlUHJpbnQiLCJjb250ZW50IiwiY3VycmVudCIsIm9uQmVmb3JlR2V0Q29udGVudCIsIlBBR0VfSEVJR0hUIiwicHJpbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibnVtYmVyT2ZQYWdlIiwiX3ByaW50RWxlbWVudCRnZXRFbGVtIiwiX3ByaW50RWxlbWVudCRnZXRFbGVtMiIsImhlaWdodFdpdGhTaW5nbGVIZWFkZXIiLCJyZXF1aXJlZEhlaWdodCIsImhlYWRlckhlaWdodCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZm9vdGVySGVpZ2h0IiwicmVtb3ZlIiwib25BZnRlclByaW50Iiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJuYW1lIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10IiwiZmxvYXQiLCJtYXJnaW4iLCJwYWdpbmF0aW9uTW9kZSIsInJvd0NvdW50IiwicGFnaW5hdGlvbiIsInBhZ2VTaXplIiwib25QYWdlQ2hhbmdlIiwicm93cyIsInNsb3RzIiwidG9vbGJhciIsIm9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2UiLCJuZXdTZWxlY3Rpb24iLCJzbG90UHJvcHMiLCJzaG93UXVpY2tGaWx0ZXIiLCJwcmludE9wdGlvbnMiLCJkaXNhYmxlVG9vbGJhckJ1dHRvbiIsImdldFJvd0NsYXNzTmFtZSIsImluY2x1ZGVzIiwiY2hlY2tib3hTZWxlY3Rpb24iLCJkaXNhYmxlRGVuc2l0eVNlbGVjdG9yIiwicm93U2VsZWN0aW9uTW9kZWwiLCJvbkZpbHRlck1vZGVsQ2hhbmdlIiwib25Db2x1bW5WaXNpYmlsaXR5TW9kZWxDaGFuZ2UiLCJwYWRkaW5nIiwiY291bnQiLCJvbkNoYW5nZSIsIm9uQ2xvc2UiLCJjb250YWluZXIiLCJ4cyIsInRleHRBbGlnbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJnYXAiLCJwbGFjZW1lbnQiLCJoaWRkZW4iLCJyZWYiLCJyaWdodCIsImJvcmRlciIsInNyYyIsIm1hcmdpbkJvdHRvbSIsImNvbFNwYW4iLCJpIiwicmVsYXRlZFVuaXQiLCJJdGVtMSIsImtleSIsImlkUm93IiwibmV3RGVzY3JpcHRpb24iLCJGcmFnbWVudCIsIml0ZW1CcmFuZCIsInRvVXBwZXJDYXNlIiwidW5pdCIsIkNyZWF0ZSIsImRhdGVDb21tZW50IiwibWF4SGVpZ2h0Iiwic3RpY2t5SGVhZGVyIiwib25TdWJtaXQiLCJyZXF1aXJlZCIsIm11bHRpbGluZSIsInBsYWNlaG9sZGVyIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9