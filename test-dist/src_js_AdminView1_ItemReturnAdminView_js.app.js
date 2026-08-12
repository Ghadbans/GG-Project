"use strict";
exports.id = "src_js_AdminView1_ItemReturnAdminView_js";
exports.ids = ["src_js_AdminView1_ItemReturnAdminView_js"];
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

/***/ "./src/js/AdminView1/ItemReturnAdminView.js"
/*!**************************************************!*\
  !*** ./src/js/AdminView1/ItemReturnAdminView.js ***!
  \**************************************************/
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
function ItemReturnAdminView() {
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
  var ReturnInfoC = grantAccess.filter(row => row.moduleName === "Item-Return" && row.access.createM === true);
  var ReturnInfoV = grantAccess.filter(row => row.moduleName === "Item-Return" && row.access.viewM === true);
  var ReturnInfoU = grantAccess.filter(row => row.moduleName === "Item-Return" && row.access.editM === true);
  var ReturnInfoD = grantAccess.filter(row => row.moduleName === "Item-Return" && row.access.deleteM === true);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.logOut)());
    navigate('/');
  };
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
        var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/itemReturn-Information?page=").concat(page + 1, "&limit=").concat(limit, "&search=").concat(encodeURIComponent(searchTerm.trim()), "&filterField=").concat(encodeURIComponent(filterField.trim()), "&filterValue=").concat(encodeURIComponent(filterValue.trim())));
        var formatDate = res.data.itemI.map(item => _objectSpread(_objectSpread({}, item), {}, {
          id: item._id,
          dataField: dayjs__WEBPACK_IMPORTED_MODULE_39___default()(item.itemOutDate).format('DD/MM/YYYY'),
          referenceInfo: item.reference !== undefined ? item.reference.referenceName : item.description,
          itemInfo: item.itemsQtyArray.filter(row => row.newItemOut > 0).map(row => row.itemName !== undefined ? row.itemName.itemName : ''),
          itemDescriptionInfo: item.itemsQtyArray.filter(row => row.newItemOut > 0).map(row => row.itemDescription !== undefined ? row.itemDescription : '')
        }));
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
    localStorage.setItem('HiddenColumnsItemReturn', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    var _newModel$quickFilter;
    var searchTerm = ((_newModel$quickFilter = newModel.quickFilterValues) === null || _newModel$quickFilter === void 0 ? void 0 : _newModel$quickFilter.join(' ')) || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterItemReturnTst', JSON.stringify(newModel));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterItemReturnTst'));
    if (storedQuick) {
      var _storedQuick$quickFil;
      var _searchTerm = ((_storedQuick$quickFil = storedQuick.quickFilterValues) === null || _storedQuick$quickFil === void 0 ? void 0 : _storedQuick$quickFil.join(' ')) || '';
      setSearchTerm(_searchTerm);
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsItemReturn'));
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
            var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-itemReturn/").concat(idView));
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
  {/** delete multiple && all modal end */}
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
            var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-itemReturn/").concat(DeleteId));
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
            var _itemOut = (parseFloat(row.itemOut) || 0) + infoOut;
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
            var _itemOut2 = (parseFloat(row.itemOut) || 0) + infoOut;
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
            var _itemOut3 = (parseFloat(row.itemOut) || 0) + infoOut;
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
        person: user.data.userName + ' Deleted ' + ' R-' + relatedNumber,
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
        var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/delete-itemReturn/").concat(DeleteId));
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
  var columns = [{
    field: 'outNumber',
    headerName: '#',
    width: 90,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "R-0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, params.row.outNumber), " ")
  }, {
    field: 'itemOutDate',
    headerName: 'Date',
    width: 100,
    type: 'date',
    valueGetter: params => params.row.itemOutDate ? new Date(params.row.itemOutDate) : null,
    renderCell: params => params.row.itemOutDate ? dayjs__WEBPACK_IMPORTED_MODULE_39___default()(params.row.itemOutDate).format('DD/MM/YYYY') : '—'
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
      onClick: () => handleOpenView(params.row._id),
      disabled: ReturnInfoV.length === 0 && user.data.role !== 'CEO'
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
      disabled: ReturnInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/ItemReturnViewForm/".concat(params.row._id),
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
      disabled: ReturnInfoD.length === 0 && user.data.role !== 'CEO'
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
  }, "Item Return"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_50__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_49__["default"], {
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
    disabled: ReturnInfoC.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
    to: '/ItemReturnUpdateForm',
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
  }, "Item Return Number: R-0", itemPurchaseView.outNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, itemPurchaseView.Create.person, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Create R-0", itemPurchaseView.outNumber), " on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, itemPurchaseView.Create.dateComment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Return Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
  }, "Why do you want to delete: R-", relatedNumber, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemReturnAdminView);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfSXRlbVJldHVybkFkbWluVmlld19qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxTQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlYsQ0FBMEQ7QUFDdkM7QUFDZTtBQUN3QjtBQUNOO0FBQ3NCO0FBQ2Q7QUFDWjtBQUNJO0FBQ0k7QUFDZ047QUFDeE07QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ0k7QUFDSTtBQUNWO0FBQ1U7QUFDYztBQUNJO0FBQ3hDO0FBQ2tCO0FBQ2tCO0FBQ3BDO0FBQ2U7QUFDcUI7QUFDUjtBQUMwQjtBQUNoQztBQUNUO0FBQ0Q7QUFDbUI7QUFDYTtBQUNKO0FBQ0s7QUFDUDtBQUNkO0FBQ1E7QUFFVDtBQUNlO0FBRWhFLElBQU00RSxhQUFhLEdBQUc5RCwwREFBTSxDQUFDK0QsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2pEakYsMERBQUEsQ0FBQ21DLDhEQUFPLEVBQUFnRCxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU9wRCw4REFBYyxDQUFDcUQsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFD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bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0FkZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvSXRlbVJldHVybkFkbWluVmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2elwiXG59KSwgJ0FkZCcpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuL3ZpZXcuY3NzJ1xyXG5pbXBvcnQgJy4vUGFnZVZpZXcvQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTaWRlTWFpbnRlbmFuY2UgZnJvbSAnLi4vY29tcG9uZW50L1NpZGVNYWludGVuYW5jZSdcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgVGFibGUsIEljb25CdXR0b24sIHN0eWxlZCwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlSGVhZCwgVGFibGVSb3csIENoZWNrYm94LCBUYWJsZUNvbnRhaW5lciwgUGFwZXIsIFR5cG9ncmFwaHksIE1vZGFsLCBCb3gsIEdyaWQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIE1lbnVJdGVtLCBCYWNrZHJvcCwgQXV0b2NvbXBsZXRlLCBUZXh0RmllbGQsIENvbGxhcHNlLCBQYWdpbmF0aW9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgQWRkLCBDbG9zZSwgTWFpbE91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9pbWcvbm8tZGF0YS5wbmcnO1xyXG5pbXBvcnQgSW1hZ2UxIGZyb20gJy4uL2ltZy9pbWFnZXMucG5nJ1xyXG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZFRvb2xiYXIgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd24nO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1VwJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciwgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5pbXBvcnQgeyB1c2VSZWFjdFRvUHJpbnQgfSBmcm9tICdyZWFjdC10by1wcmludCc7XHJcbmltcG9ydCBMb2NhbFByaW50c2hvcCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvY2FsUHJpbnRzaG9wJztcclxuXHJcbmNvbnN0IERlbGV0ZVRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBFZGl0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuXHJcbmZ1bmN0aW9uIEl0ZW1SZXR1cm5BZG1pblZpZXcoKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlLCBpZDogcmVzLmRhdGEuZGF0YS5faWQgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgW2dyYW50QWNjZXNzLCBzZXRHcmFudEFjY2Vzc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dyYW50QWNjZXNzYCk7XHJcbiAgICAgICAgcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cudXNlcklEID09PSB1c2VyLmRhdGEuaWQpXHJcbiAgICAgICAgICAubWFwKChyb3cpID0+IHNldEdyYW50QWNjZXNzKHJvdy5tb2R1bGVzKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hOdW1iZXIoKVxyXG4gIH0sIFt1c2VyXSlcclxuXHJcbiAgY29uc3QgUmV0dXJuSW5mb0MgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiSXRlbS1SZXR1cm5cIiAmJiByb3cuYWNjZXNzLmNyZWF0ZU0gPT09IHRydWUpO1xyXG4gIGNvbnN0IFJldHVybkluZm9WID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkl0ZW0tUmV0dXJuXCIgJiYgcm93LmFjY2Vzcy52aWV3TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgUmV0dXJuSW5mb1UgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiSXRlbS1SZXR1cm5cIiAmJiByb3cuYWNjZXNzLmVkaXRNID09PSB0cnVlKTtcclxuICBjb25zdCBSZXR1cm5JbmZvRCA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJJdGVtLVJldHVyblwiICYmIHJvdy5hY2Nlc3MuZGVsZXRlTSA9PT0gdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtpdGVtT3V0LCBzZXRJdGVtT3V0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFJvd3MsIHNldFNlbGVjdGVkUm93c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2l0ZW0sIFNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbmV3UHVyY2hhc2UsIHNldE5ld1B1cmNoYXNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTsgLy8gSW5pdGlhbGl6ZSBwYWdlIHN0YXRlIHRvIDAgKDAtYmFzZWQgaW5kZXgpXHJcbiAgY29uc3QgbGltaXQgPSAxMDA7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpOyAvLyBJbml0aWFsaXplIHNlYXJjaCB0ZXJtIHN0YXRlXHJcbiAgY29uc3QgW2ZpbHRlckZpZWxkLCBzZXRGaWx0ZXJGaWVsZF0gPSB1c2VTdGF0ZSgnJyk7IC8vIEluaXRpYWxpemUgZmlsdGVyIGZpZWxkIHN0YXRlXHJcbiAgY29uc3QgW2ZpbHRlclZhbHVlLCBzZXRGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7IC8vIEluaXRpYWxpemUgZmlsdGVyIHZhbHVlIHN0YXRlXHJcbiAgY29uc3QgW3RvdGFsUGFnZSwgU2V0VG90YWxQYWdlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBmZXRjaEl0ZW1zID0gYXN5bmMgKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbVJldHVybi1JbmZvcm1hdGlvbj9wYWdlPSR7cGFnZSArIDF9JmxpbWl0PSR7bGltaXR9JnNlYXJjaD0ke2VuY29kZVVSSUNvbXBvbmVudChzZWFyY2hUZXJtLnRyaW0oKSl9JmZpbHRlckZpZWxkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZpbHRlckZpZWxkLnRyaW0oKSl9JmZpbHRlclZhbHVlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZpbHRlclZhbHVlLnRyaW0oKSl9YCk7XHJcbiAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSByZXMuZGF0YS5pdGVtSS5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICBpZDogaXRlbS5faWQsXHJcbiAgICAgICAgZGF0YUZpZWxkOiBkYXlqcyhpdGVtLml0ZW1PdXREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSxcclxuICAgICAgICByZWZlcmVuY2VJbmZvOiBpdGVtLnJlZmVyZW5jZSAhPT0gdW5kZWZpbmVkID8gaXRlbS5yZWZlcmVuY2UucmVmZXJlbmNlTmFtZSA6IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaXRlbUluZm86IGl0ZW0uaXRlbXNRdHlBcnJheS5maWx0ZXIoKHJvdykgPT4gcm93Lm5ld0l0ZW1PdXQgPiAwKS5tYXAoKHJvdykgPT4gcm93Lml0ZW1OYW1lICE9PSB1bmRlZmluZWQgPyByb3cuaXRlbU5hbWUuaXRlbU5hbWUgOiAnJyksXHJcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uSW5mbzogaXRlbS5pdGVtc1F0eUFycmF5LmZpbHRlcigocm93KSA9PiByb3cubmV3SXRlbU91dCA+IDApLm1hcCgocm93KSA9PiByb3cuaXRlbURlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgPyByb3cuaXRlbURlc2NyaXB0aW9uIDogJycpXHJcbiAgICAgIH0pKTtcclxuICAgICAgU2V0VG90YWxQYWdlKE1hdGguY2VpbChyZXMuZGF0YS50b3RhbEl0ZW0gLyBsaW1pdCkpOyAvLyBFbnN1cmUgdG90YWxQYWdlIGlzIGNvcnJlY3RseSBjYWxjdWxhdGVkXHJcbiAgICAgIHNldEl0ZW1PdXQoZm9ybWF0RGF0ZSk7XHJcbiAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVSZWZyZXNoU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgZmV0Y2hJdGVtcyhwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpO1xyXG4gIH07XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hJdGVtcyhwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpO1xyXG4gIH0sIFtwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xyXG4gICAgc2V0UGFnZShuZXdQYWdlIC0gMSk7IC8vIFVwZGF0ZSBwYWdlIHN0YXRlIChjb252ZXJ0IHRvIDAtYmFzZWQgaW5kZXgpXHJcbiAgfTtcclxuICB7LyoqIHNlYXJjaCBzdGFydCAqLyB9XHJcbiAgY29uc3QgW2ZpbHRlck1vZGVsLCBzZXRGaWx0ZXJNb2RlbF0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBpdGVtczogW10sXHJcbiAgICBxdWlja0ZpbHRlckV4Y2x1ZGVIaWRkZW5Db2x1bW5zOiB0cnVlLFxyXG4gICAgcXVpY2tGaWx0ZXJWYWx1ZXM6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb2x1bW5WaXNpYmlsaXR5TW9kZWwsIHNldENvbHVtblZpc2liaWxpdHlNb2RlbF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgaGFuZGVsSGlkZGVuQ29sdW1uID0gKG5ld0hpZGRlbikgPT4ge1xyXG4gICAgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsKG5ld0hpZGRlbilcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdIaWRkZW5Db2x1bW5zSXRlbVJldHVybicsIEpTT04uc3RyaW5naWZ5KG5ld0hpZGRlbikpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUZpbHRlciA9IChuZXdNb2RlbCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IG5ld01vZGVsLnF1aWNrRmlsdGVyVmFsdWVzPy5qb2luKCcgJykgfHwgJyc7XHJcbiAgICBzZXRTZWFyY2hUZXJtKHNlYXJjaFRlcm0pO1xyXG4gICAgc2V0RmlsdGVyTW9kZWwobmV3TW9kZWwpXHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1F1aWNrRmlsdGVySXRlbVJldHVyblRzdCcsIEpTT04uc3RyaW5naWZ5KG5ld01vZGVsKSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFF1aWNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUXVpY2tGaWx0ZXJJdGVtUmV0dXJuVHN0JykpXHJcbiAgICBpZiAoc3RvcmVkUXVpY2spIHtcclxuICAgICAgY29uc3Qgc2VhcmNoVGVybSA9IHN0b3JlZFF1aWNrLnF1aWNrRmlsdGVyVmFsdWVzPy5qb2luKCcgJykgfHwgJyc7XHJcbiAgICAgIHNldFNlYXJjaFRlcm0oc2VhcmNoVGVybSk7XHJcbiAgICAgIHNldEZpbHRlck1vZGVsKHN0b3JlZFF1aWNrKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RvcmVkQ29sdW1ucyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0hpZGRlbkNvbHVtbnNJdGVtUmV0dXJuJykpXHJcbiAgICBpZiAoc3RvcmVkQ29sdW1ucykge1xyXG4gICAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwoc3RvcmVkQ29sdW1ucylcclxuICAgIH1cclxuICB9LCBbXSlcclxuICB7LyoqIHZpZXcgc3RhcnQgKi8gfVxyXG4gIGNvbnN0IFtvcGVuVmlldywgc2V0T3BlblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpZFZpZXcsIHNldElkVmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXRlbVB1cmNoYXNlVmlldywgc2V0SXRlbVB1cmNoYXNlVmlld10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblZpZXcgPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW5WaWV3KHRydWUpO1xyXG4gICAgc2V0SWRWaWV3KGlkKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZVZpZXcgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuVmlldyhmYWxzZSk7XHJcbiAgICBzZXRJZFZpZXcobnVsbCk7XHJcbiAgICBzZXRJdGVtUHVyY2hhc2VWaWV3KG51bGwpO1xyXG4gICAgc2V0U2VsZWN0ZWRSb3dzKFtdKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoaWRWaWV3ICE9PSBudWxsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtUmV0dXJuLyR7aWRWaWV3fWApXHJcbiAgICAgICAgICBzZXRJdGVtUHVyY2hhc2VWaWV3KHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhMigpXHJcbiAgfSwgW2lkVmlld10pXHJcbiAgey8qKiB2aWV3IGVuZCAqLyB9XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtEZWxldGVJZCwgc2V0RGVsZXRlSWRdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICAgIHNldERlbGV0ZUlkKGlkKVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIHsvKiogZGVsZXRlIG11bHRpcGxlICYmIGFsbCBtb2RhbCBlbmQgKi8gfVxyXG4gIGNvbnN0IFtvcGVuUmVhc29uRGVsZXRlLCBzZXRPcGVuUmVhc29uRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxEZWxldGVPcGVuTG9hZGluZywgc2V0TW9kYWxEZWxldGVPcGVuTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgey8qKiBMb2FkaW5nIFVwZGF0ZSBWaWV3IFN0YXJ0ICovIH1cclxuICBjb25zdCBoYW5kbGVPcGVuTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgaGFuZGxlQ2xvc2VVcGRhdGUoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuICB7LyoqIExvYWRpbmcgVXBkYXRlIFZpZXcgRW5kICovIH1cclxuXHJcbiAgey8qKiBMb2FkaW5nIERlbGV0ZSBWaWV3IFN0YXJ0ICovIH1cclxuICBjb25zdCBoYW5kbGVEZWxldGVPcGVuTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsRGVsZXRlT3BlbkxvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgaGFuZGxlQ2xvc2UoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuICB7LyoqIGdldHRpbmcgYWxsIGluZm8gc3RhcnQgKi8gfVxyXG4gIGNvbnN0IFtpdGVtc1F0eUFycmF5LCBTZXRJdGVtc1F0eUFycmF5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVmZXJlbmNlLCBzZXRSZWZlcmVuY2VdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtyZWxhdGVkTnVtYmVyLCBzZXRSZWxhdGVkTnVtYmVyXSA9IHVzZVN0YXRlKDApXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoSWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChEZWxldGVJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbVJldHVybi8ke0RlbGV0ZUlkfWApXHJcbiAgICAgICAgICBTZXRJdGVtc1F0eUFycmF5KHJlcy5kYXRhLmRhdGEuaXRlbXNRdHlBcnJheSk7XHJcbiAgICAgICAgICBzZXRSZWZlcmVuY2UocmVzLmRhdGEuZGF0YS5yZWZlcmVuY2UpO1xyXG4gICAgICAgICAgc2V0UmVsYXRlZE51bWJlcihOdW1iZXIocmVzLmRhdGE/LmRhdGE/Lm91dE51bWJlciB8fCByZXMuZGF0YT8ub3V0TnVtYmVyIHx8IDApKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaElkKClcclxuICB9LCBbRGVsZXRlSWRdKVxyXG4gIC8vY29uc29sZS5sb2coaXRlbXNRdHlBcnJheSlcclxuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttYWludGVuYW5jZSwgc2V0TWFpbnRlbmFuY2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbnZvaWNlLCBzZXRJbnZvaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbcHVyQ2hhc2VSZXNwb25zZSwgbWFpbnRlbmFuY2VSZXNwb25zZSwgaW52b2ljZVJlc3BvbnNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3B1cmNoYXNlP3N1bW1hcnk9dHJ1ZWApLFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vbWFpbnRlbmFuY2U/c3VtbWFyeT10cnVlYCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pbnZvaWNlP3N1bW1hcnk9dHJ1ZWApXHJcbiAgICAgICAgXSlcclxuICAgICAgICBzZXRQcm9qZWN0KHB1ckNoYXNlUmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRNYWludGVuYW5jZShtYWludGVuYW5jZVJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0SW52b2ljZShpbnZvaWNlUmVzcG9uc2UuZGF0YS5kYXRhKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBbZmlsdGVyZWRJbnZvaWNlLCBzZXRGaWx0ZXJlZEludm9pY2VdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2ludm9pY2VJZCwgc2V0SW52b2ljZUlkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtmaWx0ZXJlZFByb2plY3QsIHNldEZpbHRlcmVkUHJvamVjdF0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbcHJvamVjdElkLCBzZXRQcm9qZWN0SWRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2ZpbHRlcmVkTWFpbnRlbmFuY2UsIHNldEZpbHRlcmVkTWFpbnRlbmFuY2VdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3NlcnZpY2VJZCwgc2V0U2VydmljZUlkXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW52b2ljZUlkKCcnKTtcclxuICAgIHNldFByb2plY3RJZCgnJyk7XHJcbiAgICBzZXRTZXJ2aWNlSWQoJycpO1xyXG4gICAgc2V0RmlsdGVyZWRJbnZvaWNlKFtdKTtcclxuICAgIHNldEZpbHRlcmVkUHJvamVjdChbXSk7XHJcbiAgICBzZXRGaWx0ZXJlZE1haW50ZW5hbmNlKFtdKTtcclxuICAgIFxyXG4gICAgaW52b2ljZS5maWx0ZXIoKHJvdykgPT4gcm93Ll9pZCA9PT0gcmVmZXJlbmNlPy5faWQpLm1hcCgocm93KSA9PiB7XHJcbiAgICAgIHNldEZpbHRlcmVkSW52b2ljZShyb3cuaXRlbXMpO1xyXG4gICAgICBzZXRJbnZvaWNlSWQocm93Ll9pZCk7XHJcbiAgICB9KTtcclxuICAgIHByb2plY3RzLmZpbHRlcigocm93KSA9PiByb3cucHJvamVjdE5hbWU/Ll9pZCA9PT0gcmVmZXJlbmNlPy5faWQpLm1hcCgocm93KSA9PiB7XHJcbiAgICAgIHNldEZpbHRlcmVkUHJvamVjdChyb3cuaXRlbXMpO1xyXG4gICAgICBzZXRQcm9qZWN0SWQocm93Ll9pZCk7XHJcbiAgICB9KTtcclxuICAgIG1haW50ZW5hbmNlLmZpbHRlcigocm93KSA9PiByb3cuX2lkID09PSByZWZlcmVuY2U/Ll9pZCkubWFwKChyb3cpID0+IHtcclxuICAgICAgc2V0RmlsdGVyZWRNYWludGVuYW5jZShyb3cuaXRlbXMpO1xyXG4gICAgICBzZXRTZXJ2aWNlSWQocm93Ll9pZCk7XHJcbiAgICB9KTtcclxuICB9LCBbaW52b2ljZSwgcHJvamVjdHMsIG1haW50ZW5hbmNlLCByZWZlcmVuY2VdKVxyXG5cclxuICB7LyoqIGdldHRpbmcgYWxsIGluZm8gZW5kICovIH1cclxuICB7LyoqIFVwZGF0ZSBJbmZvIHN0YXJ0ICovIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlUHVyY2hhc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcHVyY2hhc2UvJHtwcm9qZWN0SWR9YCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRQdXJjaGFzZSA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGN1cnJlbnRQdXJjaGFzZS5pdGVtcy5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlbGF0ZWRBcnJheSA9IGl0ZW1zUXR5QXJyYXkuZmlsdGVyKChJdGVtKSA9PiBwYXJzZUZsb2F0KEl0ZW0ubmV3SXRlbU91dCkgIT09IDApXHJcbiAgICAgICAgICAuZmluZCgoSXRlbSkgPT4gSXRlbS5pdGVtTmFtZT8uX2lkICYmIEl0ZW0uaXRlbU5hbWU/Ll9pZCA9PT0gcm93Lml0ZW1OYW1lPy5faWQpXHJcbiAgICAgICAgaWYgKHJlbGF0ZWRBcnJheSkge1xyXG4gICAgICAgICAgY29uc3QgaW5mb091dCA9IHJlbGF0ZWRBcnJheS5uZXdJdGVtT3V0ID4gMCA/IHBhcnNlRmxvYXQocmVsYXRlZEFycmF5Lm5ld0l0ZW1PdXQpIDogMFxyXG4gICAgICAgICAgY29uc3QgaXRlbU91dCA9IChwYXJzZUZsb2F0KHJvdy5pdGVtT3V0KSB8fCAwKSArIGluZm9PdXRcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnJvdywgaXRlbU91dFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93XHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgaXRlbXM6IHJlc3VsdFxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLXB1cmNoYXNlLyR7cHJvamVjdElkfWAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyBjb25zb2xlLmVycm9yKGVycm9yKTsgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVVcGRhdGVJbnZvaWNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWludm9pY2UvJHtpbnZvaWNlSWR9YCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRJbnZvaWNlID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gY3VycmVudEludm9pY2UuaXRlbXMubWFwKChyb3cpID0+IHtcclxuICAgICAgICBjb25zdCByZWxhdGVkQXJyYXkgPSBpdGVtc1F0eUFycmF5LmZpbHRlcigoSXRlbSkgPT4gcGFyc2VGbG9hdChJdGVtLm5ld0l0ZW1PdXQpICE9PSAwKVxyXG4gICAgICAgICAgLmZpbmQoKEl0ZW0pID0+IEl0ZW0uaXRlbU5hbWU/Ll9pZCAmJiBJdGVtLml0ZW1OYW1lPy5faWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkKVxyXG4gICAgICAgIGlmIChyZWxhdGVkQXJyYXkpIHtcclxuICAgICAgICAgIGNvbnN0IGluZm9PdXQgPSByZWxhdGVkQXJyYXkubmV3SXRlbU91dCA+IDAgPyBwYXJzZUZsb2F0KHJlbGF0ZWRBcnJheS5uZXdJdGVtT3V0KSA6IDBcclxuICAgICAgICAgIGNvbnN0IGl0ZW1PdXQgPSAocGFyc2VGbG9hdChyb3cuaXRlbU91dCkgfHwgMCkgKyBpbmZvT3V0XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5yb3csIGl0ZW1PdXRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd1xyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGl0ZW1zOiByZXN1bHRcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1pbnZvaWNlLyR7aW52b2ljZUlkfWAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyBjb25zb2xlLmVycm9yKGVycm9yKTsgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVVcGRhdGVNYWludGVuYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1tYWludGVuYW5jZS8ke3NlcnZpY2VJZH1gKTtcclxuICAgICAgY29uc3QgY3VycmVudE1haW50ZW5hbmNlID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gY3VycmVudE1haW50ZW5hbmNlLml0ZW1zLm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVsYXRlZEFycmF5ID0gaXRlbXNRdHlBcnJheS5maWx0ZXIoKEl0ZW0pID0+IHBhcnNlRmxvYXQoSXRlbS5uZXdJdGVtT3V0KSAhPT0gMClcclxuICAgICAgICAgIC5maW5kKChJdGVtKSA9PiBJdGVtLml0ZW1OYW1lPy5faWQgJiYgSXRlbS5pdGVtTmFtZT8uX2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZClcclxuICAgICAgICBpZiAocmVsYXRlZEFycmF5KSB7XHJcbiAgICAgICAgICBjb25zdCBpbmZvT3V0ID0gcmVsYXRlZEFycmF5Lm5ld0l0ZW1PdXQgPiAwID8gcGFyc2VGbG9hdChyZWxhdGVkQXJyYXkubmV3SXRlbU91dCkgOiAwXHJcbiAgICAgICAgICBjb25zdCBpdGVtT3V0ID0gKHBhcnNlRmxvYXQocm93Lml0ZW1PdXQpIHx8IDApICsgaW5mb091dFxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ucm93LCBpdGVtT3V0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBpdGVtczogcmVzdWx0XHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtbWFpbnRlbmFuY2UvJHtzZXJ2aWNlSWR9YCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpOyB9XHJcbiAgfVxyXG4gIHsvKiogVXBkYXRlIEluZm8gZW5kICovIH1cclxuICB7LyoqIERlbGV0ZSBTdGFydCAqLyB9XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiAnJyxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIERlbGV0ZWQgJyArICcgUi0nICsgcmVsYXRlZE51bWJlcixcclxuICAgICAgcmVhc29uLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlUXR5ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L0NhbGN1bGF0ZVRvdGFsYClcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEZWxldGVVcGRhdGUgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5kZWxldGUoYCR7RU5EUE9JTlRfVVJMfS9kZWxldGUtaXRlbVJldHVybi8ke0RlbGV0ZUlkfWApO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgYXdhaXQgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uKCk7XHJcbiAgICAgICAgYXdhaXQgaGFuZGxlUXR5KCk7XHJcbiAgICAgICAgaWYgKHByb2plY3RJZCkge1xyXG4gICAgICAgICAgYXdhaXQgaGFuZGxlVXBkYXRlUHVyY2hhc2UoKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaW52b2ljZUlkKSB7XHJcbiAgICAgICAgICAvL1VwZGF0ZSBJbnZvaWNlXHJcbiAgICAgICAgICBhd2FpdCBoYW5kbGVVcGRhdGVJbnZvaWNlKClcclxuICAgICAgICB9IGVsc2UgaWYgKHNlcnZpY2VJZCkge1xyXG4gICAgICAgICAgYXdhaXQgaGFuZGxlVXBkYXRlTWFpbnRlbmFuY2UoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbm8gcmVsYXRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSgpO1xyXG4gICAgICAgIGhhbmRsZURlbGV0ZU9wZW5Mb2FkaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnQW4gZXJyb3IgYXMgb2NjdXIgaW4gZGVsZXRlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHsvKiogRGVsZXRlIEVuZCAqLyB9XHJcbiAgY29uc3QgW29wZW4xLCBzZXRPcGVuMV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMSghb3BlbjEpO1xyXG4gIH07XHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHsgZmllbGQ6ICdvdXROdW1iZXInLCBoZWFkZXJOYW1lOiAnIycsIHdpZHRoOiA5MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKDxkaXY+IDxzcGFuPlItMDwvc3Bhbj48c3Bhbj57cGFyYW1zLnJvdy5vdXROdW1iZXJ9PC9zcGFuPiA8L2Rpdj4pIH0sXHJcbiAgICB7IGZpZWxkOiAnaXRlbU91dERhdGUnLCBoZWFkZXJOYW1lOiAnRGF0ZScsIHdpZHRoOiAxMDAsIHR5cGU6ICdkYXRlJywgdmFsdWVHZXR0ZXI6IChwYXJhbXMpID0+IHBhcmFtcy5yb3cuaXRlbU91dERhdGUgPyBuZXcgRGF0ZShwYXJhbXMucm93Lml0ZW1PdXREYXRlKSA6IG51bGwsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IHBhcmFtcy5yb3cuaXRlbU91dERhdGUgPyBkYXlqcyhwYXJhbXMucm93Lml0ZW1PdXREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSA6ICfigJQnIH0sXHJcbiAgICB7IGZpZWxkOiAncmVhc29uJywgaGVhZGVyTmFtZTogJ1JlYXNvbicsIHdpZHRoOiAxNTAgfSxcclxuICAgIHsgZmllbGQ6ICdyZWZlcmVuY2VJbmZvJywgaGVhZGVyTmFtZTogJ0Rlc2NyaXB0aW9uJywgd2lkdGg6IG9wZW4xID8gNDgwIDogNTUwIH0sXHJcbiAgICB7IGZpZWxkOiAnaXRlbUluZm8nLCBoZWFkZXJOYW1lOiAnSXRlbScsIHdpZHRoOiBvcGVuMSA/IDgwIDogMTMwIH0sXHJcbiAgICB7IGZpZWxkOiAnaXRlbURlc2NyaXB0aW9uSW5mbycsIGhlYWRlck5hbWU6ICdJLURlc2NyaXB0aW9uJywgd2lkdGg6IG9wZW4xID8gODAgOiAxMzAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICd2aWV3JywgaGVhZGVyTmFtZTogJ1ZpZXcnLCB3aWR0aDogNTAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJWaWV3XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3BlblZpZXcocGFyYW1zLnJvdy5faWQpfSBkaXNhYmxlZD17UmV0dXJuSW5mb1YubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPFZpc2liaWxpdHlJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnZWRpdCcsIGhlYWRlck5hbWU6ICdFZGl0Jywgd2lkdGg6IDUwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPEVkaXRUb29sdGlwIHRpdGxlPVwiRWRpdFwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGRpc2FibGVkPXtSZXR1cm5JbmZvVS5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9JdGVtUmV0dXJuVmlld0Zvcm0vJHtwYXJhbXMucm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgIDxFZGl0SWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9FZGl0VG9vbHRpcD5cclxuXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnRGVsZXRlJywgaGVhZGVyTmFtZTogJ0RlbGV0ZScsIHdpZHRoOiA1MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxEZWxldGVUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCI+XHJcbiAgICAgICAgICA8c3Bhbj4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuKHBhcmFtcy5yb3cuX2lkKX0gZGlzYWJsZWQ9e1JldHVybkluZm9ELmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9ID5cclxuICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRGVsZXRlVG9vbHRpcD5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICBdXHJcbiAgY29uc3QgY29tcG9uZW50UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByaW50ID0gdXNlUmVhY3RUb1ByaW50KHtcclxuICAgIGNvbnRlbnQ6ICgpID0+IGNvbXBvbmVudFJlZi5jdXJyZW50LFxyXG4gICAgb25CZWZvcmVHZXRDb250ZW50OiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IFBBR0VfSEVJR0hUID0gMTA0NTtcclxuICAgICAgY29uc3QgcHJpbnRFbGVtZW50ID0gY29tcG9uZW50UmVmLmN1cnJlbnQ7XHJcbiAgICAgIGlmIChwcmludEVsZW1lbnQpIHtcclxuICAgICAgICBwcmludEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRlbXAtY2xhc3MtZm9yLWhlaWdodFwiKVxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHByaW50RWxlbWVudC5jbGllbnRIZWlnaHRcclxuICAgICAgICBjb25zdCBudW1iZXJPZlBhZ2UgPSBNYXRoLmNlaWwoaGVpZ2h0IC8gUEFHRV9IRUlHSFQpXHJcbiAgICAgICAgaWYgKG51bWJlck9mUGFnZSA+IDEpIHtcclxuICAgICAgICAgIGNvbnN0IGhlaWdodFdpdGhTaW5nbGVIZWFkZXIgPSBudW1iZXJPZlBhZ2UgKiBQQUdFX0hFSUdIVFxyXG4gICAgICAgICAgbGV0IHJlcXVpcmVkSGVpZ2h0ID0gaGVpZ2h0V2l0aFNpbmdsZUhlYWRlclxyXG4gICAgICAgICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gcHJpbnRFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGhlYWRcIik/LlswXT8uY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICBjb25zdCBmb290ZXJIZWlnaHQgPSBwcmludEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Zm9vdFwiKT8uWzBdPy5jbGllbnRIZWlnaHRcclxuICAgICAgICAgIHJlcXVpcmVkSGVpZ2h0IC09IChudW1iZXJPZlBhZ2UgLSAxKSAqIChoZWFkZXJIZWlnaHQgKyBmb290ZXJIZWlnaHQpXHJcbiAgICAgICAgICBwcmludEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7cmVxdWlyZWRIZWlnaHR9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmludEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRlbXAtY2xhc3MtZm9yLWhlaWdodFwiKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25BZnRlclByaW50OiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByaW50RWxlbWVudCA9IGNvbXBvbmVudFJlZi5jdXJyZW50O1xyXG4gICAgICBpZiAocHJpbnRFbGVtZW50KSB7XHJcbiAgICAgICAgcHJpbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGBhdXRvYFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e29wZW4xfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihvcGVuMSAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBJdGVtIFJldHVyblxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e29wZW4xfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZU1haW50ZW5hbmNlIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAxIH19ID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxvYWRpbmdEYXRhID8gPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJzEyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBtYXJnaW46ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e1JldHVybkluZm9DLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsnL0l0ZW1SZXR1cm5VcGRhdGVGb3JtJ30gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyQWRkaW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZWZyZXNoU2VhcmNofSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+UmVmcmVzaCBTZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDYwMCwgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZT1cInNlcnZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQ9e3RvdGFsUGFnZSAqIGxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXtpdGVtT3V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgIHNsb3RzPXt7IHRvb2xiYXI6IEdyaWRUb29sYmFyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblJvd1NlbGVjdGlvbk1vZGVsQ2hhbmdlPXsobmV3U2VsZWN0aW9uKSA9PiBzZXRTZWxlY3RlZFJvd3MobmV3U2VsZWN0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNsb3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1F1aWNrRmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVRvb2xiYXJCdXR0b246IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGdldFJvd0NsYXNzTmFtZT17KHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3UHVyY2hhc2UuaW5jbHVkZXMocGFyYW1zLnJvdy5faWQpID8gJ25ldy1QdXJjaGFzZScgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94U2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRGVuc2l0eVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJNb2RlbD17ZmlsdGVyTW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb25Nb2RlbD17c2VsZWN0ZWRSb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25GaWx0ZXJNb2RlbENoYW5nZT17KG5ld01vZGVsKSA9PiBoYW5kbGVGaWx0ZXIobmV3TW9kZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uVmlzaWJpbGl0eU1vZGVsPXtjb2x1bW5WaXNpYmlsaXR5TW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZT17aGFuZGVsSGlkZGVuQ29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBwYWRkaW5nOiAnMTBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIGNvdW50PXt0b3RhbFBhZ2V9IHBhZ2U9e3BhZ2UgKyAxfSBvbkNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX0gY29sb3I9XCJwcmltYXJ5XCIgc3g9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJy01MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICBEbyB5b3UgV2FudCB0byBkZWxldGU/XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuUmVhc29uRGVsZXRlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXttb2RhbERlbGV0ZU9wZW5Mb2FkaW5nfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZURlbGV0ZUNsb3NlTG9hZGluZ31cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj4gRGF0YSBzdWNjZXNzZnVsbHkgZGVsZXRlZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuVmlld31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVZpZXd9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogODUwIH19PlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVZpZXd9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiUHJpbnRcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcmludH0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxMb2NhbFByaW50c2hvcCBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW1QdXJjaGFzZVZpZXcgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGhpZGRlbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e2NvbXBvbmVudFJlZn0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzIwcHgnLCBtYXJnaW46ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgbGVmdDogJzQwcHgnLCByaWdodDogJzQwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnIH19Pkl0ZW0gUmV0dXJuIE51bWJlcjogUi0we2l0ZW1QdXJjaGFzZVZpZXcub3V0TnVtYmVyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17SW1hZ2UxfSBzdHlsZT17eyBoZWlnaHQ6ICc2MHB4Jywgd2lkdGg6ICcyMzBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgY29sb3I6ICdibGFjaycgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzZWNvbmRUYWJsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAnNzAlJywgbWFyZ2luQm90dG9tOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRhdGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30+e2RheWpzKGl0ZW1QdXJjaGFzZVZpZXcuaXRlbU91dERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UmVhc29uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9PntpdGVtUHVyY2hhc2VWaWV3LnJlYXNvbiAhPT0gdW5kZWZpbmVkID8gaXRlbVB1cmNoYXNlVmlldy5yZWFzb24gOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlJlZmVyZW5jZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfT57aXRlbVB1cmNoYXNlVmlldy5yZWZlcmVuY2UgIT09IHVuZGVmaW5lZCA/IGl0ZW1QdXJjaGFzZVZpZXcucmVmZXJlbmNlLnJlZmVyZW5jZU5hbWUgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRlc2NyaXB0aW9uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9PntpdGVtUHVyY2hhc2VWaWV3LmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgPyBpdGVtUHVyY2hhc2VWaWV3LmRlc2NyaXB0aW9uIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzZWNvbmRUYWJsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAnNzAlJywgbWFyZ2luQm90dG9tOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1QdXJjaGFzZVZpZXcuaXRlbXNRdHlBcnJheS5maWx0ZXIoKHJvdykgPT4gcGFyc2VGbG9hdChyb3cubmV3SXRlbU91dCkgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRVbml0ID0gaXRlbS5maW5kKChJdGVtMSkgPT4gSXRlbTEuX2lkID09PSByb3cuaXRlbU5hbWUuX2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5pZFJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezR9Pntyb3cuaXRlbU5hbWUuaXRlbU5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cm93Lml0ZW1OYW1lLml0ZW1OYW1lfSAoIHtyZWxhdGVkVW5pdCAhPT0gdW5kZWZpbmVkID8gcmVsYXRlZFVuaXQuaXRlbUJyYW5kLnRvVXBwZXJDYXNlKCkgOiAnJ30gKTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvdy5pdGVtRGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cm93Lm5ld0l0ZW1PdXR9IHtyZWxhdGVkVW5pdCAhPT0gdW5kZWZpbmVkID8gcmVsYXRlZFVuaXQudW5pdC50b1VwcGVyQ2FzZSgpIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3RvcmUgTWFuYWdlciBTaWduYXR1cmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkN1c3RvbWVyIFNpZ25hdHVyZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbVB1cmNoYXNlVmlldy5DcmVhdGUucGVyc29ufSA8L3NwYW4+PHNwYW4+IENyZWF0ZSBSLTB7aXRlbVB1cmNoYXNlVmlldy5vdXROdW1iZXJ9PC9zcGFuPiBvbiA8c3Bhbj57aXRlbVB1cmNoYXNlVmlldy5DcmVhdGUuZGF0ZUNvbW1lbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDYwMCwgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5SZXR1cm4gRGF0ZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PntkYXlqcyhpdGVtUHVyY2hhc2VWaWV3Lml0ZW1PdXREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UmVhc29uPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17M30+e2l0ZW1QdXJjaGFzZVZpZXcucmVhc29uICE9PSB1bmRlZmluZWQgPyBpdGVtUHVyY2hhc2VWaWV3LnJlYXNvbiA6ICcnfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5SZWZlcmVuY2U8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXszfT57aXRlbVB1cmNoYXNlVmlldy5yZWZlcmVuY2UgIT09IHVuZGVmaW5lZCA/IGl0ZW1QdXJjaGFzZVZpZXcucmVmZXJlbmNlLnJlZmVyZW5jZU5hbWUgOiAnJ308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGVzY3JpcHRpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXszfT57aXRlbVB1cmNoYXNlVmlldy5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gaXRlbVB1cmNoYXNlVmlldy5kZXNjcmlwdGlvbiA6ICcnfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIHN4PXt7IG1heEhlaWdodDogNDAwLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBhcmlhLWxhYmVsPVwiY29sbGFwc2libGUgdGFibGVcIiBzdGlja3lIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4jPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5JdGVtPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZXNjcmlwdGlvbjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UXR5PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtUHVyY2hhc2VWaWV3Lml0ZW1zUXR5QXJyYXkuZmlsdGVyKChyb3cpID0+IHBhcnNlRmxvYXQocm93Lm5ld0l0ZW1PdXQpID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGVkVW5pdCA9IGl0ZW0uZmluZCgoSXRlbTEpID0+IEl0ZW0xLl9pZCA9PT0gcm93Lml0ZW1OYW1lLl9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuaWRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs0fT57cm93Lml0ZW1OYW1lLml0ZW1OYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57aSArIDF9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuaXRlbU5hbWUuaXRlbU5hbWV9ICgge3JlbGF0ZWRVbml0ICE9PSB1bmRlZmluZWQgPyByZWxhdGVkVW5pdC5pdGVtQnJhbmQudG9VcHBlckNhc2UoKSA6ICcnfSApPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuaXRlbURlc2NyaXB0aW9ufTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93Lm5ld0l0ZW1PdXR9IHtyZWxhdGVkVW5pdCAhPT0gdW5kZWZpbmVkID8gcmVsYXRlZFVuaXQudW5pdC50b1VwcGVyQ2FzZSgpIDogJyd9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5SZWFzb25EZWxldGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VSZWFzb25EZWxldGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgV2h5IGRvIHlvdSB3YW50IHRvIGRlbGV0ZTogUi17cmVsYXRlZE51bWJlcn0/XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRGVsZXRlVXBkYXRlfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBpZD0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlYXNvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdSZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbVJldHVybkFkbWluVmlld1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlNpZGVNYWludGVuYW5jZSIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJWaXNpYmlsaXR5SWNvbiIsIkVkaXRJY29uIiwiRGVsZXRlSWNvbiIsIk5hdkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsIlRhYmxlIiwiSWNvbkJ1dHRvbiIsInN0eWxlZCIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiQ2hlY2tib3giLCJUYWJsZUNvbnRhaW5lciIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsIk1vZGFsIiwiQm94IiwiR3JpZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIk1lbnVJdGVtIiwiQmFja2Ryb3AiLCJBdXRvY29tcGxldGUiLCJUZXh0RmllbGQiLCJDb2xsYXBzZSIsIlBhZ2luYXRpb24iLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJEaXZpZGVyIiwiQ29udGFpbmVyIiwiTGluayIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkFkZCIsIkNsb3NlIiwiTWFpbE91dGxpbmUiLCJkYXlqcyIsIkxvYWRlciIsIkNoZWNrQ2lyY2xlSWNvbiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJJbWFnZSIsIkltYWdlMSIsIkRhdGFHcmlkIiwiR3JpZFRvb2xiYXIiLCJLZXlib2FyZEFycm93RG93biIsIktleWJvYXJkQXJyb3dVcCIsIkRhdGVQaWNrZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIk1lc3NhZ2VBZG1pblZpZXciLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsInVzZVJlYWN0VG9QcmludCIsIkxvY2FsUHJpbnRzaG9wIiwiRGVsZXRlVG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiRWRpdFRvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIlZpZXdUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjciLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjgiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJJdGVtUmV0dXJuQWRtaW5WaWV3IiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImlkIiwiX2lkIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJncmFudEFjY2VzcyIsInNldEdyYW50QWNjZXNzIiwiZmV0Y2hOdW1iZXIiLCJfcmVmMCIsIl9yZXMkZGF0YSIsImZpbHRlciIsInJvdyIsInVzZXJJRCIsIm1hcCIsIm1vZHVsZXMiLCJSZXR1cm5JbmZvQyIsIm1vZHVsZU5hbWUiLCJhY2Nlc3MiLCJjcmVhdGVNIiwiUmV0dXJuSW5mb1YiLCJ2aWV3TSIsIlJldHVybkluZm9VIiwiZWRpdE0iLCJSZXR1cm5JbmZvRCIsImRlbGV0ZU0iLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJpdGVtT3V0Iiwic2V0SXRlbU91dCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4Iiwic2VsZWN0ZWRSb3dzIiwic2V0U2VsZWN0ZWRSb3dzIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJpdGVtIiwiU2V0SXRlbXMiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJuZXdQdXJjaGFzZSIsInNldE5ld1B1cmNoYXNlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInBhZ2UiLCJzZXRQYWdlIiwibGltaXQiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0Iiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiZmlsdGVyRmllbGQiLCJzZXRGaWx0ZXJGaWVsZCIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJmaWx0ZXJWYWx1ZSIsInNldEZpbHRlclZhbHVlIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsInRvdGFsUGFnZSIsIlNldFRvdGFsUGFnZSIsImZldGNoSXRlbXMiLCJfcmVmMSIsImVuY29kZVVSSUNvbXBvbmVudCIsInRyaW0iLCJmb3JtYXREYXRlIiwiaXRlbUkiLCJkYXRhRmllbGQiLCJpdGVtT3V0RGF0ZSIsImZvcm1hdCIsInJlZmVyZW5jZUluZm8iLCJyZWZlcmVuY2UiLCJ1bmRlZmluZWQiLCJyZWZlcmVuY2VOYW1lIiwiZGVzY3JpcHRpb24iLCJpdGVtSW5mbyIsIml0ZW1zUXR5QXJyYXkiLCJuZXdJdGVtT3V0IiwiaXRlbU5hbWUiLCJpdGVtRGVzY3JpcHRpb25JbmZvIiwiaXRlbURlc2NyaXB0aW9uIiwiTWF0aCIsImNlaWwiLCJ0b3RhbEl0ZW0iLCJfeCIsIl94MiIsIl94MyIsIl94NCIsImhhbmRsZVJlZnJlc2hTZWFyY2giLCJoYW5kbGVQYWdlQ2hhbmdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiX1JlYWN0JHVzZVN0YXRlIiwiaXRlbXMiLCJxdWlja0ZpbHRlckV4Y2x1ZGVIaWRkZW5Db2x1bW5zIiwicXVpY2tGaWx0ZXJWYWx1ZXMiLCJfUmVhY3QkdXNlU3RhdGUyIiwiZmlsdGVyTW9kZWwiLCJzZXRGaWx0ZXJNb2RlbCIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJjb2x1bW5WaXNpYmlsaXR5TW9kZWwiLCJzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwiLCJoYW5kZWxIaWRkZW5Db2x1bW4iLCJuZXdIaWRkZW4iLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZUZpbHRlciIsIm5ld01vZGVsIiwiX25ld01vZGVsJHF1aWNrRmlsdGVyIiwiam9pbiIsInN0b3JlZFF1aWNrIiwicGFyc2UiLCJfc3RvcmVkUXVpY2skcXVpY2tGaWwiLCJzdG9yZWRDb2x1bW5zIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsIm9wZW5WaWV3Iiwic2V0T3BlblZpZXciLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwiaWRWaWV3Iiwic2V0SWRWaWV3IiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsIml0ZW1QdXJjaGFzZVZpZXciLCJzZXRJdGVtUHVyY2hhc2VWaWV3IiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsInJlYXNvbiIsInNldFJlYXNvbiIsImhhbmRsZU9wZW5WaWV3IiwiaGFuZGxlQ2xvc2VWaWV3IiwiZmV0Y2hEYXRhMiIsIl9yZWYxMCIsImxvZyIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJzZXRPcGVuIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsIkRlbGV0ZUlkIiwic2V0RGVsZXRlSWQiLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2Iiwib3BlblJlYXNvbkRlbGV0ZSIsInNldE9wZW5SZWFzb25EZWxldGUiLCJoYW5kbGVPcGVuUmVhc29uRGVsZXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwibW9kYWxEZWxldGVPcGVuTG9hZGluZyIsInNldE1vZGFsRGVsZXRlT3BlbkxvYWRpbmciLCJoYW5kbGVPcGVuTG9hZGluZyIsImhhbmRsZUNsb3NlVXBkYXRlIiwic2V0VGltZW91dCIsImhhbmRsZUNsb3NlTG9hZGluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmciLCJoYW5kbGVEZWxldGVDbG9zZUxvYWRpbmciLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0IiwiU2V0SXRlbXNRdHlBcnJheSIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJzZXRSZWZlcmVuY2UiLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4IiwicmVsYXRlZE51bWJlciIsInNldFJlbGF0ZWROdW1iZXIiLCJmZXRjaElkIiwiX3JlZjExIiwiX3JlcyRkYXRhMiIsIl9yZXMkZGF0YTMiLCJOdW1iZXIiLCJvdXROdW1iZXIiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0IiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsIm1haW50ZW5hbmNlIiwic2V0TWFpbnRlbmFuY2UiLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0IiwiaW52b2ljZSIsInNldEludm9pY2UiLCJmZXRjaERhdGEiLCJfcmVmMTIiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJQcm9taXNlIiwiYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsMiIsInB1ckNoYXNlUmVzcG9uc2UiLCJtYWludGVuYW5jZVJlc3BvbnNlIiwiaW52b2ljZVJlc3BvbnNlIiwiX3VzZVN0YXRlNTUiLCJfdXNlU3RhdGU1NiIsImZpbHRlcmVkSW52b2ljZSIsInNldEZpbHRlcmVkSW52b2ljZSIsIl91c2VTdGF0ZTU3IiwiX3VzZVN0YXRlNTgiLCJpbnZvaWNlSWQiLCJzZXRJbnZvaWNlSWQiLCJfdXNlU3RhdGU1OSIsIl91c2VTdGF0ZTYwIiwiZmlsdGVyZWRQcm9qZWN0Iiwic2V0RmlsdGVyZWRQcm9qZWN0IiwiX3VzZVN0YXRlNjEiLCJfdXNlU3RhdGU2MiIsInByb2plY3RJZCIsInNldFByb2plY3RJZCIsIl91c2VTdGF0ZTYzIiwiX3VzZVN0YXRlNjQiLCJmaWx0ZXJlZE1haW50ZW5hbmNlIiwic2V0RmlsdGVyZWRNYWludGVuYW5jZSIsIl91c2VTdGF0ZTY1IiwiX3VzZVN0YXRlNjYiLCJzZXJ2aWNlSWQiLCJzZXRTZXJ2aWNlSWQiLCJfcm93JHByb2plY3ROYW1lIiwicHJvamVjdE5hbWUiLCJoYW5kbGVVcGRhdGVQdXJjaGFzZSIsIl9yZWYxMyIsImN1cnJlbnRQdXJjaGFzZSIsInJlc3VsdCIsInJlbGF0ZWRBcnJheSIsIkl0ZW0iLCJwYXJzZUZsb2F0IiwiZmluZCIsIl9JdGVtJGl0ZW1OYW1lIiwiX0l0ZW0kaXRlbU5hbWUyIiwiX3JvdyRpdGVtTmFtZSIsImluZm9PdXQiLCJwdXQiLCJoYW5kbGVVcGRhdGVJbnZvaWNlIiwiX3JlZjE0IiwiY3VycmVudEludm9pY2UiLCJfSXRlbSRpdGVtTmFtZTMiLCJfSXRlbSRpdGVtTmFtZTQiLCJfcm93JGl0ZW1OYW1lMiIsImhhbmRsZVVwZGF0ZU1haW50ZW5hbmNlIiwiX3JlZjE1IiwiY3VycmVudE1haW50ZW5hbmNlIiwiX0l0ZW0kaXRlbU5hbWU1IiwiX0l0ZW0kaXRlbU5hbWU2IiwiX3JvdyRpdGVtTmFtZTMiLCJoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24iLCJfcmVmMTYiLCJpZEluZm8iLCJwZXJzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwiRGF0ZSIsInBvc3QiLCJoYW5kbGVRdHkiLCJfcmVmMTciLCJoYW5kbGVEZWxldGVVcGRhdGUiLCJfcmVmMTgiLCJkZWxldGUiLCJfeDUiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsIm9wZW4xIiwic2V0T3BlbjEiLCJ0b2dnbGVEcmF3ZXIiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwicmVuZGVyQ2VsbCIsInBhcmFtcyIsInR5cGUiLCJ2YWx1ZUdldHRlciIsInRpdGxlIiwib25DbGljayIsImRpc2FibGVkIiwibGVuZ3RoIiwidG8iLCJjdXJzb3IiLCJjb21wb25lbnRSZWYiLCJoYW5kbGVQcmludCIsImNvbnRlbnQiLCJjdXJyZW50Iiwib25CZWZvcmVHZXRDb250ZW50IiwiUEFHRV9IRUlHSFQiLCJwcmludEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJudW1iZXJPZlBhZ2UiLCJfcHJpbnRFbGVtZW50JGdldEVsZW0iLCJfcHJpbnRFbGVtZW50JGdldEVsZW0yIiwiaGVpZ2h0V2l0aFNpbmdsZUhlYWRlciIsInJlcXVpcmVkSGVpZ2h0IiwiaGVhZGVySGVpZ2h0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmb290ZXJIZWlnaHQiLCJyZW1vdmUiLCJvbkFmdGVyUHJpbnQiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsIm5hbWUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJmbG9hdCIsIm1hcmdpbiIsInBhZ2luYXRpb25Nb2RlIiwicm93Q291bnQiLCJwYWdpbmF0aW9uIiwicGFnZVNpemUiLCJvblBhZ2VDaGFuZ2UiLCJyb3dzIiwic2xvdHMiLCJ0b29sYmFyIiwib25Sb3dTZWxlY3Rpb25Nb2RlbENoYW5nZSIsIm5ld1NlbGVjdGlvbiIsInNsb3RQcm9wcyIsInNob3dRdWlja0ZpbHRlciIsInByaW50T3B0aW9ucyIsImRpc2FibGVUb29sYmFyQnV0dG9uIiwiZ2V0Um93Q2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJjaGVja2JveFNlbGVjdGlvbiIsImRpc2FibGVEZW5zaXR5U2VsZWN0b3IiLCJyb3dTZWxlY3Rpb25Nb2RlbCIsIm9uRmlsdGVyTW9kZWxDaGFuZ2UiLCJvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZSIsInBhZGRpbmciLCJjb3VudCIsIm9uQ2hhbmdlIiwib25DbG9zZSIsImNvbnRhaW5lciIsInhzIiwidGV4dEFsaWduIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsImdhcCIsInBsYWNlbWVudCIsImhpZGRlbiIsInJlZiIsInJpZ2h0IiwiYm9yZGVyIiwic3JjIiwibWFyZ2luQm90dG9tIiwiY29sU3BhbiIsImkiLCJyZWxhdGVkVW5pdCIsIkl0ZW0xIiwia2V5IiwiaWRSb3ciLCJuZXdEZXNjcmlwdGlvbiIsIkZyYWdtZW50IiwiaXRlbUJyYW5kIiwidG9VcHBlckNhc2UiLCJ1bml0IiwiQ3JlYXRlIiwiZGF0ZUNvbW1lbnQiLCJtYXhIZWlnaHQiLCJzdGlja3lIZWFkZXIiLCJvblN1Ym1pdCIsInJlcXVpcmVkIiwibXVsdGlsaW5lIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsInRhcmdldCIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==