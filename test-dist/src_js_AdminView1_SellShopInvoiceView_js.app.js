"use strict";
exports.id = "src_js_AdminView1_SellShopInvoiceView_js";
exports.ids = ["src_js_AdminView1_SellShopInvoiceView_js"];
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

/***/ "./src/js/AdminView1/SellShopInvoiceView.js"
/*!**************************************************!*\
  !*** ./src/js/AdminView1/SellShopInvoiceView.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/PrintHeader */ "./src/js/component/PrintHeader.js");
/* harmony import */ var _component_PrintFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/PrintFooter */ "./src/js/component/PrintFooter.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _component_SideShop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/SideShop */ "./src/js/component/SideShop.js");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Print.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_50__);
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







































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref => {
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
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref3 => {
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
      backgroundColor: 'gray',
      color: 'white',
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
function SellShopInvoiceView() {
  var _posInvoice$customerN, _posInvoice$items, _posInvoice$tax, _posInvoice$totalInvo, _posInvoice$totalFC, _posInvoice$totalUSD, _posInvoice$TotalAmou, _posInvoice$creditFC, _posInvoice$creditUsd;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_42__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_42__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/grantAccess"));
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
  var InvoiceInfoC = grantAccess.filter(row => row.moduleName === "Point-Of-Sell" && row.access.createM === true);
  var InvoiceInfoV = grantAccess.filter(row => row.moduleName === "Point-Of-Sell" && row.access.viewM === true);
  var InvoiceInfoU = grantAccess.filter(row => row.moduleName === "Point-Of-Sell" && row.access.editM === true);
  var InvoiceInfoD = grantAccess.filter(row => row.moduleName === "Point-Of-Sell" && row.access.deleteM === true);
  {/** Get Invoice */}
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    invoice = _useState4[0],
    setInvoice = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    hiddenRow = _useState6[0],
    setHiddenRow = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedRows = _useState0[0],
    setSelectedRows = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
    _useState10 = _slicedToArray(_useState1, 2),
    loadingData = _useState10[0],
    setLoadingData = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    reason = _useState12[0],
    setReason = _useState12[1];
  var fetchData = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/pos?summary=true"));
        var formatDate = res.data.data.map(item => _objectSpread(_objectSpread({}, item), {}, {
          id: item._id,
          dateField: dayjs__WEBPACK_IMPORTED_MODULE_39___default()(item.invoiceDate).format('DD/MM/YYYY'),
          time: dayjs__WEBPACK_IMPORTED_MODULE_39___default()(item.time).format('HH:mm')
        }));
        setInvoice(formatDate);
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
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    ErrorOpenModal = _useState16[0],
    setErrorOpenModal = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    loadingOpenModal = _useState18[0],
    setLoadingOpenModal = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    modalDeleteOpenLoading = _useState20[0],
    setModalDeleteOpenLoading = _useState20[1];
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
    }, 500);
  };
  var handleDeleteCloseLoading = () => {
    window.location.reload();
  };
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
    var _ref10 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber, ReferenceInfoCustomer) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: 'S-' + ReferenceInfoNumber + ' For ' + ReferenceInfoCustomer,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotificationOffline(_x, _x2, _x3) {
      return _ref10.apply(this, arguments);
    };
  }();
  var syncOff = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      // Online-only: syncOff logic removed
    });
    return function syncOff() {
      return _ref11.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchDataHidden = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/hidden"));
          setHiddenRow(res.data.data.map(row => row.idRow));
          setHidden(res.data.data);
          localStorage.removeItem('Hidden');
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchDataHidden() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchDataHidden();
  }, []);
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    openReasonDelete = _useState22[0],
    setOpenReasonDelete = _useState22[1];
  var handleOpenReasonDelete = e => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  {/** End Get Invoice */}
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    open = _useState24[0],
    setOpen = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState26 = _slicedToArray(_useState25, 2),
    DeleteId = _useState26[0],
    setDeleteId = _useState26[1];
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleClose = () => {
    setOpen(false);
  };
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    open1 = _useState28[0],
    setOpen1 = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState30 = _slicedToArray(_useState29, 2),
    updateId = _useState30[0],
    setUpdateId = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    status = _useState32[0],
    setStatus = _useState32[1];
  var handleOpenUpdate = id => {
    setOpen1(true);
    setUpdateId(id);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
    setUpdateId(null);
  };
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_50__.useReactToPrint)({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      var PAGE_HEIGHT = 560; // Adjusted for POS printer roll paper size
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
  {/** delete multiple && all modal start */}
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    openDeleteMultiple = _useState34[0],
    setOpenDeleteMultiple = _useState34[1];
  var handleOpenMultiple = () => {
    setOpenDeleteMultiple(true);
  };
  var handleCloseMultiple = () => {
    setOpenDeleteMultiple(false);
  };
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    openDeleteAll = _useState36[0],
    setOpenDeleteAll = _useState36[1];
  var handleOpenAll = () => {
    setOpenDeleteAll(true);
  };
  var handleCloseAll = () => {
    setOpenDeleteAll(false);
  };
  {/** Delete Function */}
  var handleDelete = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/delete-pos/").concat(DeleteId));
        if (res) {
          handleDeleteOpenLoading();
        }
      } catch (error) {
        console.error(error);
      }
    });
    return function handleDelete() {
      return _ref13.apply(this, arguments);
    };
  }();
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    InvoiceDeleted = _useState38[0],
    setInvoiceDeleted = _useState38[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchFunction = /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator(function* () {
        var deletePromises = selectedRows.map(/*#__PURE__*/function () {
          var _ref15 = _asyncToGenerator(function* (idToDelete) {
            return axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/get-pos/").concat(idToDelete));
          });
          return function (_x4) {
            return _ref15.apply(this, arguments);
          };
        }());
        try {
          var res = yield Promise.all(deletePromises);
          setInvoiceDeleted(res.map(row => 'S-00' + row.data.data.factureNumber));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchFunction() {
        return _ref14.apply(this, arguments);
      };
    }();
    fetchFunction();
  }, [selectedRows]);
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    openView = _useState40[0],
    setOpenView = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState42 = _slicedToArray(_useState41, 2),
    idView = _useState42[0],
    setIdView = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState44 = _slicedToArray(_useState43, 2),
    posInvoice = _useState44[0],
    setPosInvoice = _useState44[1];
  var handleOpenView = id => {
    setOpenView(true);
    setIdView(id);
  };
  var handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
    setPosInvoice(null);
    setSelectedRows([]);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref16 = _asyncToGenerator(function* () {
        if (idView !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/get-pos/").concat(idView));
            setPosInvoice(res.data.data);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchData2() {
        return _ref16.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [idView]);
  var related = InvoiceDeleted.map(row => row);
  var info = related.toString();
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + info,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref17.apply(this, arguments);
    };
  }();
  var handleDeleteMany = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var deletePromises = selectedRows.map(/*#__PURE__*/function () {
        var _ref19 = _asyncToGenerator(function* (idToDelete) {
          return axios__WEBPACK_IMPORTED_MODULE_34__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/delete-pos/").concat(idToDelete));
        });
        return function (_x6) {
          return _ref19.apply(this, arguments);
        };
      }());
      try {
        var res = yield Promise.all(deletePromises);
        if (res) {
          handleCreateNotification();
          handleDeleteOpenLoading();
        }
      } catch (error) {
        console.log(error);
      }
    });
    return function handleDeleteMany(_x5) {
      return _ref18.apply(this, arguments);
    };
  }();
  {/** End Delete Function */}
  {/** Update Invoice Status start */}
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState46 = _slicedToArray(_useState45, 2),
    invoiceN = _useState46[0],
    setInvoiceN = _useState46[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchId = /*#__PURE__*/function () {
      var _ref20 = _asyncToGenerator(function* () {
        if (updateId !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/get-pos/").concat(updateId));
            setStatus(res.data.data.status);
            setInvoiceN(res.data.data.factureNumber);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchId() {
        return _ref20.apply(this, arguments);
      };
    }();
    fetchId();
  }, [updateId]);
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(function* () {
      var data = {
        idInfo: updateId,
        person: user.data.userName,
        reason: status + ' INV-' + invoiceN,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/create-notification/"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateComment() {
      return _ref21.apply(this, arguments);
    };
  }();
  var handleSubmitUpdateStatus = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        status
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/update-pos/").concat(updateId), data);
        if (res) {
          handleCreateComment();
          handleOpenLoading();
        }
      } catch (error) {
        console.error('Error making POST request:', error);
      }
    });
    return function handleSubmitUpdateStatus(_x7) {
      return _ref22.apply(this, arguments);
    };
  }();
  {/** Update Invoice Status End */}
  var handleHideRow = /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator(function* (id) {
      if (user.data.role === 'CEO') {
        try {
          if (hiddenRow.includes(id)) {
            setHiddenRow(hiddenRow.filter(row => row !== id));
            var result = hidden.filter(row => row.idRow === id).map(row => row._id);
            var hiddenId = result.toString();
            yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/delete-hidden/").concat(hiddenId));
          } else {
            setHiddenRow([...hiddenRow, id]);
            yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/create-hidden"), {
              idRow: id,
              hiddenByCEO: true
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
    return function handleHideRow(_x8) {
      return _ref23.apply(this, arguments);
    };
  }();
  var rowRenderer = params => {
    if (hiddenRow.includes(params.row._id) && user.data.role !== 'CEO') {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, params.row[params.field]);
  };
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState48 = _slicedToArray(_useState47, 2),
    filteredRows = _useState48[0],
    setFilteredRows = _useState48[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var Inv = invoice.filter(row => !hiddenRow.includes(row._id));
    setFilteredRows(Inv);
  }, [invoice, hiddenRow]);
  {/** search start */}
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState50 = _slicedToArray(_useState49, 2),
    searchInvoice = _useState50[0],
    setSearchInvoice = _useState50[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(() => {
    var storedValue = localStorage.getItem('QuickFilterInvoice');
    if (storedValue) {
      setSearchInvoice(storedValue);
    }
  });
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filterModel = _React$useState2[0],
    setFilterModel = _React$useState2[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState52 = _slicedToArray(_useState51, 2),
    columnVisibilityModel = _useState52[0],
    setColumnVisibilityModel = _useState52[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsInvoice', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterInvoiceTst', JSON.stringify(newModel));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterInvoiceTst'));
    if (storedQuick) {
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsInvoice'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchInvoice]);
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  {/** search end */}
  var columns = [{
    field: 'factureNumber',
    headerName: 'Invoice#',
    width: 100,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "S-00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, params.row.factureNumber), " ")
  }, {
    field: 'customer',
    headerName: 'Customer Name',
    width: sideBar ? 180 : 300,
    valueGetter: params => params.row.customerName.customerName.toUpperCase()
  }, {
    field: 'status',
    headerName: 'Status',
    width: 100,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      color: params.row.status === "Draft" ? "gray" : params.row.status === "Sent" ? "blue" : params.row.status === "Decline" ? "red" : params.row.status === "Pending" ? "#801313" : params.row.status === "Paid" ? "#4caf50" : params.row.status === "Partially-Paid" ? "#fb8c00" : "black"
    }, params.row.status)
  }, {
    field: 'dateField',
    headerName: 'Date',
    width: 150
  }, {
    field: 'totalInvoice',
    headerName: 'I-Amount',
    width: sideBar ? 150 : 200,
    renderCell: params => "FC".concat(params.row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))
  }, {
    field: 'TotalAmountPaid',
    headerName: 'Total Paid',
    width: sideBar ? 220 : 230,
    renderCell: params => {
      var _params$row$TotalAmou;
      return "FC".concat((_params$row$TotalAmou = params.row.TotalAmountPaid) === null || _params$row$TotalAmou === void 0 ? void 0 : _params$row$TotalAmou.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($").concat((params.row.TotalAmountPaid / params.row.rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")");
    }
  }, {
    field: 'balanceDue',
    headerName: 'B-Due',
    width: sideBar ? 100 : 120,
    renderCell: params => "FC".concat((params.row.balanceDue + (params.row.creditFC + params.row.creditUsd * params.row.rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))
  }, {
    field: 'view',
    headerName: 'View',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onClick: () => handleOpenView(params.row._id),
      hidden: InvoiceInfoV.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      disabled: InvoiceInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
      to: "/ShopPosUpdateForm/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: {
        color: 'gray'
      }
    })))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "                                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onClick: () => handleOpen(params.row._id),
      disabled: InvoiceInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_8__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_32__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Invoicing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_49__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_48__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_33__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_30__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_29__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_SideShop__WEBPACK_IMPORTED_MODULE_5__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_31__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disabled: InvoiceInfoC.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
    to: '/ShopPosForm',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], null))))))), invoice.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, invoice.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'left',
      margin: '10px'
    }
  }, selectedRows.length > 1 && selectedRows.length < invoice.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    hidden: user.data.role !== 'CEO',
    onClick: handleOpenAll,
    className: "btnCustomer2"
  }, "Delete multiple"), selectedRows.length === invoice.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleOpenAll,
    hidden: user.data.role !== 'CEO',
    className: "btnCustomer2"
  }, "Delete all") : '') : '', user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_46__.DataGrid, {
    rows: invoice,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_47__.GridToolbar
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    rowRenderer: rowRenderer,
    checkboxSelection: true,
    disableColumnFilter: true,
    disableDensitySelector: true,
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
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_46__.DataGrid, {
    rows: filteredRows,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_47__.GridToolbar
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    rowRenderer: rowRenderer,
    checkboxSelection: true,
    disableDensitySelector: true,
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
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
    src: _img_no_data_png__WEBPACK_IMPORTED_MODULE_45__,
    style: {
      position: 'relative',
      marginLeft: '19%',
      padding: '25px',
      height: '40%',
      top: '40px',
      width: '55%',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12,
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Do you Want to delete?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleClose,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Cancel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleDelete,
    className: "btnCustomer2",
    style: {
      width: '100%'
    }
  }, "Delete"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Update Estimate Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    onSubmit: handleSubmitUpdateStatus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "status"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    required: true,
    id: "status",
    value: status,
    onChange: e => setStatus(e.target.value),
    name: "status",
    label: "status",
    defaultValue: "Draft"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Draft"
  }, "Draft"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Sent"
  }, "Sent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Decline"
  }, "Decline"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Void"
  }, "Void"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Pending"
  }, "Pending"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    disabled: true,
    value: "Partially-Paid"
  }, "Partially-Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Free of Charge"
  }, "Free of Charge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    disabled: true,
    value: "Paid"
  }, "Paid")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Update")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: loadingOpenModal,
    onClose: handleCloseLoading,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__["default"], {
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
    onClick: handleCloseLoading,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: openDeleteMultiple,
    onClose: handleCloseMultiple,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, "Do you want to Delete ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "btnCustomer2",
    onClick: handleDeleteMany
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseMultiple
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: openDeleteAll,
    onClose: handleCloseAll,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, "Do you want to Delete ?"), selectedRows.length === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " Selected rows will be deleted"), selectedRows.length > 1 && selectedRows.length < invoice.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), selectedRows.length === invoice.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All rows will be deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "btnCustomer2",
    onClick: handleOpenReasonDelete
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseAll
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: modalDeleteOpenLoading,
    onClose: handleDeleteCloseLoading,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Data successfully deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleDeleteCloseLoading,
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: openView,
    onClose: handleCloseView,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500,
      maxHeight: 700,
      overflow: 'hidden',
      overflowY: 'scroll'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
    title: "Print",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handlePrint,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleCloseView,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, posInvoice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
    style: {
      width: '100%',
      marginTop: '-10px',
      fontSize: '12px',
      color: 'black',
      marginTop: '0'
    },
    ref: componentRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    colSpan: 6,
    style: {
      fontWeight: 'bold',
      textAlign: 'center'
    }
  }, "GLOBAL GATE SARL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    colSpan: 6,
    style: {
      fontWeight: 'normal',
      textAlign: 'center'
    }
  }, "RCM CD/KWZ/RCCM/22-B-00317 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), "ID NAT 14-H5300N11179P ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), "AVENUE SALONGO Q/INDUSTRIEL C/MANIKA ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), "KOLWEZI LUALABA ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), "DR CONGO ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, "Invoice"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    colSpan: 1
  }, "Client:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    colSpan: 3
  }, posInvoice === null || posInvoice === void 0 || (_posInvoice$customerN = posInvoice.customerName) === null || _posInvoice$customerN === void 0 ? void 0 : _posInvoice$customerN.customerName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Invoice:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.factureNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Time:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, dayjs__WEBPACK_IMPORTED_MODULE_39___default()(posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.time).format('HH:mm'), " H")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Date:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, dayjs__WEBPACK_IMPORTED_MODULE_39___default()(posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.invoiceDate).format('DD-MM-YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "User:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.Create)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, "Total")), posInvoice === null || posInvoice === void 0 || (_posInvoice$items = posInvoice.items) === null || _posInvoice$items === void 0 ? void 0 : _posInvoice$items.map((row, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
    key: row.idRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, row.itemName.itemName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, row.itemQty, " ", row.unit), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, "FC", parseFloat(row.itemRate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, "FC", row.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD',
      textAlign: 'right'
    },
    colSpan: 3
  }, "FC", posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($", ((posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.subTotal) / (posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    colSpan: 2,
    style: {
      borderBottom: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "Tax Details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'right'
    }
  }, "Gross Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    colSpan: 3,
    style: {
      textAlign: 'right'
    }
  }, "FC", posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($", ((posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.subTotal) / (posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'right'
    }
  }, "TVA @ 16%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    colSpan: 3,
    style: {
      borderBottom: '1px solid #DDD',
      textAlign: 'right'
    }
  }, "FC", posInvoice === null || posInvoice === void 0 || (_posInvoice$tax = posInvoice.tax) === null || _posInvoice$tax === void 0 ? void 0 : _posInvoice$tax.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($", (posInvoice.tax !== undefined ? posInvoice.tax / (posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.rate) : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'right'
    }
  }, "Total General"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    colSpan: 3,
    style: {
      borderBottom: '1px solid #DDD',
      textAlign: 'right'
    }
  }, "FC", posInvoice === null || posInvoice === void 0 || (_posInvoice$totalInvo = posInvoice.totalInvoice) === null || _posInvoice$totalInvo === void 0 ? void 0 : _posInvoice$totalInvo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($", (posInvoice.totalInvoice !== undefined ? posInvoice.totalInvoice / (posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.rate) : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), (posInvoice.totalFC > 0 || posInvoice.totalUSD > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'right'
    }
  }, "Amount Received"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    colSpan: 3,
    style: {
      borderBottom: '1px solid #DDD',
      textAlign: 'right'
    }
  }, posInvoice.totalFC > 0 ? 'FC ' + ((_posInvoice$totalFC = posInvoice.totalFC) === null || _posInvoice$totalFC === void 0 ? void 0 : _posInvoice$totalFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : '', " ", posInvoice.totalFC > 0 && posInvoice.totalUSD > 0 ? ' & ' : '', " ", posInvoice.totalUSD > 0 ? '$ ' + ((_posInvoice$totalUSD = posInvoice.totalUSD) === null || _posInvoice$totalUSD === void 0 ? void 0 : _posInvoice$totalUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : '')), posInvoice.TotalAmountPaid !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'right'
    }
  }, "Amount Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    colSpan: 3,
    style: {
      borderBottom: '1px solid #DDD',
      textAlign: 'right'
    }
  }, "FC", posInvoice === null || posInvoice === void 0 || (_posInvoice$TotalAmou = posInvoice.TotalAmountPaid) === null || _posInvoice$TotalAmou === void 0 ? void 0 : _posInvoice$TotalAmou.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($", (posInvoice.TotalAmountPaid !== undefined ? posInvoice.TotalAmountPaid / (posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.rate) : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), (posInvoice.creditUsd > 0 || posInvoice.creditFC > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'right'
    }
  }, "Amount Return"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    colSpan: 3,
    style: {
      borderBottom: '1px solid #DDD',
      textAlign: 'right'
    }
  }, posInvoice.creditFC > 0 ? 'FC ' + ((_posInvoice$creditFC = posInvoice.creditFC) === null || _posInvoice$creditFC === void 0 ? void 0 : _posInvoice$creditFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : '', " ", posInvoice.creditUsd > 0 && posInvoice.creditFC > 0 ? ' & ' : '', " ", posInvoice.creditUsd > 0 ? '$ ' + ((_posInvoice$creditUsd = posInvoice.creditUsd) === null || _posInvoice$creditUsd === void 0 ? void 0 : _posInvoice$creditUsd.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 5,
    style: {
      borderTop: '1px solid #DDD',
      borderBottom: '1px solid #DDD'
    }
  }, posInvoice === null || posInvoice === void 0 ? void 0 : posInvoice.note))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleCloseReasonDelete,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: ", info, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    onSubmit: handleDeleteMany
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellShopInvoiceView);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfU2VsbFNob3BJbnZvaWNlVmlld19qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxTQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05WLENBQW1EO0FBQ0E7QUFDTztBQUN2QztBQUNlO0FBQ1U7QUFDUTtBQUNzQjtBQUNkO0FBQ1o7QUFDSTtBQUNJO0FBQzBMO0FBQ2xMO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNJO0FBQ0k7QUFDVjtBQUNVO0FBQ2M7QUFDSTtBQUN4QztBQUNrQjtBQUM0RDtBQUM5RTtBQUNlO0FBQ3FCO0FBQ1I7QUFDMEI7QUFDaEM7QUFDVDtBQUNrQjtBQUNQO0FBQ1E7QUFFVDtBQUVqRCxJQUFNd0UsYUFBYSxHQUFHeEQsMERBQU0sQ0FBQ3lELElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNqRDNFLDBEQUFBLENBQUNpQyw4REFBTyxFQUFBNEMsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPaEQsOERBQWMsQ0FBQ2lELE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLEtBQUs7TUFDdEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFD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YXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0FkZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvU2VsbFNob3BJbnZvaWNlVmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2elwiXG59KSwgJ0FkZCcpOyIsImltcG9ydCBQcmludEhlYWRlciBmcm9tICcuLi9jb21wb25lbnQvUHJpbnRIZWFkZXInO1xyXG5pbXBvcnQgUHJpbnRGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50L1ByaW50Rm9vdGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4vdmlldy5jc3MnXHJcbmltcG9ydCAnLi9QYWdlVmlldy9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNpZGVTaG9wIGZyb20gJy4uL2NvbXBvbmVudC9TaWRlU2hvcCdcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgVGFibGUsIEljb25CdXR0b24sIHN0eWxlZCwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlSGVhZCwgVGFibGVSb3csIENoZWNrYm94LCBUYWJsZUNvbnRhaW5lciwgUGFwZXIsIFR5cG9ncmFwaHksIE1vZGFsLCBCb3gsIEdyaWQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIE1lbnVJdGVtLCBCYWNrZHJvcCwgQXV0b2NvbXBsZXRlLCBUZXh0RmllbGQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXInO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBBZGQsIENsb3NlLCBNYWlsT3V0bGluZSwgUGVyc29uMk91dGxpbmVkLCBQZXJzb25PZmZSb3VuZGVkLCBQcmludCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uL2ltZy9uby1kYXRhLnBuZyc7XHJcbmltcG9ydCB7IERhdGFHcmlkLCBHcmlkVG9vbGJhciB9IGZyb20gJ0BtdWkveC1kYXRhLWdyaWQnO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5pbXBvcnQgeyB1c2VSZWFjdFRvUHJpbnQgfSBmcm9tICdyZWFjdC10by1wcmludCc7XHJcblxyXG5jb25zdCBEZWxldGVUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIFNlbGxTaG9wSW52b2ljZVZpZXcoKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUsIGlkOiByZXMuZGF0YS5kYXRhLl9pZCB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtncmFudEFjY2Vzcywgc2V0R3JhbnRBY2Nlc3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ncmFudEFjY2Vzc2ApO1xyXG4gICAgICAgIHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnVzZXJJRCA9PT0gdXNlci5kYXRhLmlkKVxyXG4gICAgICAgICAgLm1hcCgocm93KSA9PiBzZXRHcmFudEFjY2Vzcyhyb3cubW9kdWxlcykpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoTnVtYmVyKClcclxuICB9LCBbdXNlcl0pXHJcblxyXG4gIGNvbnN0IEludm9pY2VJbmZvQyA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJQb2ludC1PZi1TZWxsXCIgJiYgcm93LmFjY2Vzcy5jcmVhdGVNID09PSB0cnVlKTtcclxuICBjb25zdCBJbnZvaWNlSW5mb1YgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiUG9pbnQtT2YtU2VsbFwiICYmIHJvdy5hY2Nlc3Mudmlld00gPT09IHRydWUpO1xyXG4gIGNvbnN0IEludm9pY2VJbmZvVSA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJQb2ludC1PZi1TZWxsXCIgJiYgcm93LmFjY2Vzcy5lZGl0TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgSW52b2ljZUluZm9EID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIlBvaW50LU9mLVNlbGxcIiAmJiByb3cuYWNjZXNzLmRlbGV0ZU0gPT09IHRydWUpO1xyXG5cclxuICB7LyoqIEdldCBJbnZvaWNlICovIH1cclxuICBjb25zdCBbaW52b2ljZSwgc2V0SW52b2ljZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2hpZGRlblJvdywgc2V0SGlkZGVuUm93XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFJvd3MsIHNldFNlbGVjdGVkUm93c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcG9zP3N1bW1hcnk9dHJ1ZWApXHJcbiAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSByZXMuZGF0YS5kYXRhLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgIGlkOiBpdGVtLl9pZCxcclxuICAgICAgICBkYXRlRmllbGQ6IGRheWpzKGl0ZW0uaW52b2ljZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpLFxyXG4gICAgICAgIHRpbWU6IGRheWpzKGl0ZW0udGltZSkuZm9ybWF0KCdISDptbScpLFxyXG4gICAgICB9KSlcclxuICAgICAgc2V0SW52b2ljZShmb3JtYXREYXRlKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbERlbGV0ZU9wZW5Mb2FkaW5nLCBzZXRNb2RhbERlbGV0ZU9wZW5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB7LyoqIExvYWRpbmcgVXBkYXRlIFZpZXcgU3RhcnQgKi8gfVxyXG4gIGNvbnN0IGhhbmRsZU9wZW5Mb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBoYW5kbGVDbG9zZVVwZGF0ZSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG4gIHsvKiogTG9hZGluZyBVcGRhdGUgVmlldyBFbmQgKi8gfVxyXG5cclxuICB7LyoqIExvYWRpbmcgRGVsZXRlIFZpZXcgU3RhcnQgKi8gfVxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZU9wZW5Mb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxEZWxldGVPcGVuTG9hZGluZyh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBoYW5kbGVDbG9zZSgpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk9mZmxpbmUgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbk9mZmxpbmUgPSBhc3luYyAoUmVmZXJlbmNlSW5mbywgUmVmZXJlbmNlSW5mb051bWJlciwgUmVmZXJlbmNlSW5mb0N1c3RvbWVyKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBDcmVhdGVkICcsXHJcbiAgICAgIHJlYXNvbjogJ1MtJyArIFJlZmVyZW5jZUluZm9OdW1iZXIgKyAnIEZvciAnICsgUmVmZXJlbmNlSW5mb0N1c3RvbWVyLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3Qgc3luY09mZiA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIE9ubGluZS1vbmx5OiBzeW5jT2ZmIGxvZ2ljIHJlbW92ZWRcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGFIaWRkZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaGlkZGVuYClcclxuICAgICAgICBzZXRIaWRkZW5Sb3cocmVzLmRhdGEuZGF0YS5tYXAoKHJvdykgPT4gcm93LmlkUm93KSlcclxuICAgICAgICBzZXRIaWRkZW4ocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnSGlkZGVuJylcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhSGlkZGVuKClcclxuICB9LCBbXSlcclxuICBjb25zdCBbb3BlblJlYXNvbkRlbGV0ZSwgc2V0T3BlblJlYXNvbkRlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5SZWFzb25EZWxldGUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuUmVhc29uRGVsZXRlKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuUmVhc29uRGVsZXRlKGZhbHNlKTtcclxuICB9O1xyXG4gIHsvKiogRW5kIEdldCBJbnZvaWNlICovIH1cclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0RlbGV0ZUlkLCBzZXREZWxldGVJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKGlkKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgc2V0RGVsZXRlSWQoaWQpXHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW29wZW4xLCBzZXRPcGVuMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwZGF0ZUlkLCBzZXRVcGRhdGVJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3BlbjEodHJ1ZSk7XHJcbiAgICBzZXRVcGRhdGVJZChpZCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICAgIHNldFVwZGF0ZUlkKG51bGwpO1xyXG4gIH07XHJcbiAgY29uc3QgY29tcG9uZW50UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByaW50ID0gdXNlUmVhY3RUb1ByaW50KHtcclxuICAgIGNvbnRlbnQ6ICgpID0+IGNvbXBvbmVudFJlZi5jdXJyZW50LFxyXG4gICAgb25CZWZvcmVHZXRDb250ZW50OiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IFBBR0VfSEVJR0hUID0gNTYwOyAvLyBBZGp1c3RlZCBmb3IgUE9TIHByaW50ZXIgcm9sbCBwYXBlciBzaXplXHJcbiAgICAgIGNvbnN0IHByaW50RWxlbWVudCA9IGNvbXBvbmVudFJlZi5jdXJyZW50O1xyXG4gICAgICBpZiAocHJpbnRFbGVtZW50KSB7XHJcbiAgICAgICAgcHJpbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLWNsYXNzLWZvci1oZWlnaHRcIilcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBwcmludEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZQYWdlID0gTWF0aC5jZWlsKGhlaWdodCAvIFBBR0VfSEVJR0hUKVxyXG4gICAgICAgIGlmIChudW1iZXJPZlBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICBjb25zdCBoZWlnaHRXaXRoU2luZ2xlSGVhZGVyID0gbnVtYmVyT2ZQYWdlICogUEFHRV9IRUlHSFRcclxuICAgICAgICAgIGxldCByZXF1aXJlZEhlaWdodCA9IGhlaWdodFdpdGhTaW5nbGVIZWFkZXJcclxuICAgICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHByaW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRoZWFkXCIpPy5bMF0/LmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgY29uc3QgZm9vdGVySGVpZ2h0ID0gcHJpbnRFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGZvb3RcIik/LlswXT8uY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICByZXF1aXJlZEhlaWdodCAtPSAobnVtYmVyT2ZQYWdlIC0gMSkgKiAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KVxyXG4gICAgICAgICAgcHJpbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke3JlcXVpcmVkSGVpZ2h0fXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZW1wLWNsYXNzLWZvci1oZWlnaHRcIilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQWZ0ZXJQcmludDogKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcmludEVsZW1lbnQgPSBjb21wb25lbnRSZWYuY3VycmVudDtcclxuICAgICAgaWYgKHByaW50RWxlbWVudCkge1xyXG4gICAgICAgIHByaW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgYXV0b2BcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHsvKiogZGVsZXRlIG11bHRpcGxlICYmIGFsbCBtb2RhbCBzdGFydCAqLyB9XHJcbiAgY29uc3QgW29wZW5EZWxldGVNdWx0aXBsZSwgc2V0T3BlbkRlbGV0ZU11bHRpcGxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk11bHRpcGxlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZU11bHRpcGxlKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNdWx0aXBsZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EZWxldGVNdWx0aXBsZShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbb3BlbkRlbGV0ZUFsbCwgc2V0T3BlbkRlbGV0ZUFsbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5BbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGVsZXRlQWxsKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VBbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGVsZXRlQWxsKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB7LyoqIERlbGV0ZSBGdW5jdGlvbiAqLyB9XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLXBvcy8ke0RlbGV0ZUlkfWApO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBbSW52b2ljZURlbGV0ZWQsIHNldEludm9pY2VEZWxldGVkXSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBkZWxldGVQcm9taXNlcyA9IHNlbGVjdGVkUm93cy5tYXAoYXN5bmMgKGlkVG9EZWxldGUpID0+IHtcclxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LXBvcy8ke2lkVG9EZWxldGV9YClcclxuICAgICAgfSlcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChkZWxldGVQcm9taXNlcyk7XHJcbiAgICAgICAgc2V0SW52b2ljZURlbGV0ZWQocmVzLm1hcCgocm93KSA9PiAnUy0wMCcgKyByb3cuZGF0YS5kYXRhLmZhY3R1cmVOdW1iZXIpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaEZ1bmN0aW9uKClcclxuICB9LCBbc2VsZWN0ZWRSb3dzXSlcclxuICBjb25zdCBbb3BlblZpZXcsIHNldE9wZW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaWRWaWV3LCBzZXRJZFZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Bvc0ludm9pY2UsIHNldFBvc0ludm9pY2VdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBoYW5kbGVPcGVuVmlldyA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3BlblZpZXcodHJ1ZSk7XHJcbiAgICBzZXRJZFZpZXcoaWQpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVmlldyA9ICgpID0+IHtcclxuICAgIHNldE9wZW5WaWV3KGZhbHNlKTtcclxuICAgIHNldElkVmlldyhudWxsKTtcclxuICAgIHNldFBvc0ludm9pY2UobnVsbCk7XHJcbiAgICBzZXRTZWxlY3RlZFJvd3MoW10pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoaWRWaWV3ICE9PSBudWxsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1wb3MvJHtpZFZpZXd9YClcclxuICAgICAgICAgIHNldFBvc0ludm9pY2UocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEyKClcclxuICB9LCBbaWRWaWV3XSlcclxuXHJcbiAgY29uc3QgcmVsYXRlZCA9IEludm9pY2VEZWxldGVkLm1hcChyb3cgPT4gcm93KVxyXG4gIGNvbnN0IGluZm8gPSByZWxhdGVkLnRvU3RyaW5nKClcclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86ICcnLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgRGVsZXRlZCAnICsgaW5mbyxcclxuICAgICAgcmVhc29uLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlTWFueSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGRlbGV0ZVByb21pc2VzID0gc2VsZWN0ZWRSb3dzLm1hcChhc3luYyAoaWRUb0RlbGV0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLXBvcy8ke2lkVG9EZWxldGV9YClcclxuICAgIH0pXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChkZWxldGVQcm9taXNlcyk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oKVxyXG4gICAgICAgIGhhbmRsZURlbGV0ZU9wZW5Mb2FkaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICB7LyoqIEVuZCBEZWxldGUgRnVuY3Rpb24gKi8gfVxyXG4gIHsvKiogVXBkYXRlIEludm9pY2UgU3RhdHVzIHN0YXJ0ICovIH1cclxuICBjb25zdCBbaW52b2ljZU4sIHNldEludm9pY2VOXSA9IHVzZVN0YXRlKDApXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoSWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICh1cGRhdGVJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcG9zLyR7dXBkYXRlSWR9YClcclxuICAgICAgICAgIHNldFN0YXR1cyhyZXMuZGF0YS5kYXRhLnN0YXR1cyk7XHJcbiAgICAgICAgICBzZXRJbnZvaWNlTihyZXMuZGF0YS5kYXRhLmZhY3R1cmVOdW1iZXIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoSWQoKVxyXG4gIH0sIFt1cGRhdGVJZF0pO1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUNvbW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IHVwZGF0ZUlkLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSxcclxuICAgICAgcmVhc29uOiBzdGF0dXMgKyAnIElOVi0nICsgaW52b2ljZU4sXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbi9gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdFVwZGF0ZVN0YXR1cyA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBzdGF0dXNcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtcG9zLyR7dXBkYXRlSWR9YCwgZGF0YSlcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZUNyZWF0ZUNvbW1lbnQoKTtcclxuICAgICAgICBoYW5kbGVPcGVuTG9hZGluZygpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtYWtpbmcgUE9TVCByZXF1ZXN0OicsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgey8qKiBVcGRhdGUgSW52b2ljZSBTdGF0dXMgRW5kICovIH1cclxuXHJcblxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlSGlkZVJvdyA9IGFzeW5jIChpZCkgPT4ge1xyXG5cclxuICAgIGlmICh1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoaGlkZGVuUm93LmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgc2V0SGlkZGVuUm93KGhpZGRlblJvdy5maWx0ZXIoKHJvdykgPT4gcm93ICE9PSBpZCkpO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGlkZGVuLmZpbHRlcigocm93KSA9PiByb3cuaWRSb3cgPT09IGlkKVxyXG4gICAgICAgICAgICAubWFwKChyb3cpID0+IHJvdy5faWQpXHJcbiAgICAgICAgICBjb25zdCBoaWRkZW5JZCA9IHJlc3VsdC50b1N0cmluZygpXHJcblxyXG4gICAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLWhpZGRlbi8ke2hpZGRlbklkfWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRIaWRkZW5Sb3coWy4uLmhpZGRlblJvdywgaWRdKTtcclxuICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtaGlkZGVuYCwge1xyXG4gICAgICAgICAgICBpZFJvdzogaWQsIGhpZGRlbkJ5Q0VPOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgcm93UmVuZGVyZXIgPSAocGFyYW1zKSA9PiB7XHJcbiAgICBpZiAoaGlkZGVuUm93LmluY2x1ZGVzKHBhcmFtcy5yb3cuX2lkKSAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTycpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIHJldHVybiA8ZGl2PntwYXJhbXMucm93W3BhcmFtcy5maWVsZF19PC9kaXY+XHJcbiAgfVxyXG4gIGNvbnN0IFtmaWx0ZXJlZFJvd3MsIHNldEZpbHRlcmVkUm93c10gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgSW52ID0gaW52b2ljZS5maWx0ZXIocm93ID0+ICFoaWRkZW5Sb3cuaW5jbHVkZXMocm93Ll9pZCkpXHJcbiAgICBzZXRGaWx0ZXJlZFJvd3MoSW52KVxyXG4gIH0sIFtpbnZvaWNlLCBoaWRkZW5Sb3ddKVxyXG4gIHsvKiogc2VhcmNoIHN0YXJ0ICovIH1cclxuICBjb25zdCBbc2VhcmNoSW52b2ljZSwgc2V0U2VhcmNoSW52b2ljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlckludm9pY2UnKVxyXG4gICAgaWYgKHN0b3JlZFZhbHVlKSB7XHJcbiAgICAgIHNldFNlYXJjaEludm9pY2Uoc3RvcmVkVmFsdWUpXHJcbiAgICB9XHJcblxyXG4gIH0pXHJcbiAgY29uc3QgW2ZpbHRlck1vZGVsLCBzZXRGaWx0ZXJNb2RlbF0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBpdGVtczogW10sXHJcbiAgICBxdWlja0ZpbHRlckV4Y2x1ZGVIaWRkZW5Db2x1bW5zOiB0cnVlLFxyXG4gICAgcXVpY2tGaWx0ZXJWYWx1ZXM6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb2x1bW5WaXNpYmlsaXR5TW9kZWwsIHNldENvbHVtblZpc2liaWxpdHlNb2RlbF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgaGFuZGVsSGlkZGVuQ29sdW1uID0gKG5ld0hpZGRlbikgPT4ge1xyXG4gICAgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsKG5ld0hpZGRlbilcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdIaWRkZW5Db2x1bW5zSW52b2ljZScsIEpTT04uc3RyaW5naWZ5KG5ld0hpZGRlbikpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUZpbHRlciA9IChuZXdNb2RlbCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyTW9kZWwobmV3TW9kZWwpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUXVpY2tGaWx0ZXJJbnZvaWNlVHN0JywgSlNPTi5zdHJpbmdpZnkobmV3TW9kZWwpKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkUXVpY2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlckludm9pY2VUc3QnKSlcclxuICAgIGlmIChzdG9yZWRRdWljaykge1xyXG4gICAgICBzZXRGaWx0ZXJNb2RlbChzdG9yZWRRdWljaylcclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3JlZENvbHVtbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdIaWRkZW5Db2x1bW5zSW52b2ljZScpKVxyXG4gICAgaWYgKHN0b3JlZENvbHVtbnMpIHtcclxuICAgICAgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsKHN0b3JlZENvbHVtbnMpXHJcbiAgICB9XHJcblxyXG4gIH0sIFtzZWFyY2hJbnZvaWNlXSlcclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIHsvKiogc2VhcmNoIGVuZCAqLyB9XHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHsgZmllbGQ6ICdmYWN0dXJlTnVtYmVyJywgaGVhZGVyTmFtZTogJ0ludm9pY2UjJywgd2lkdGg6IDEwMCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKDxkaXY+IDxzcGFuPlMtMDA8L3NwYW4+PHNwYW4+e3BhcmFtcy5yb3cuZmFjdHVyZU51bWJlcn08L3NwYW4+IDwvZGl2PikgfSxcclxuICAgIHsgZmllbGQ6ICdjdXN0b21lcicsIGhlYWRlck5hbWU6ICdDdXN0b21lciBOYW1lJywgd2lkdGg6IHNpZGVCYXIgPyAxODAgOiAzMDAsIHZhbHVlR2V0dGVyOiAocGFyYW1zKSA9PiBwYXJhbXMucm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9VcHBlckNhc2UoKSB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ3N0YXR1cycsIGhlYWRlck5hbWU6ICdTdGF0dXMnLCB3aWR0aDogMTAwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIGNvbG9yPXtcclxuICAgICAgICAgICAgcGFyYW1zLnJvdy5zdGF0dXMgPT09IFwiRHJhZnRcIlxyXG4gICAgICAgICAgICAgID8gXCJncmF5XCIgOiBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJTZW50XCJcclxuICAgICAgICAgICAgICAgID8gXCJibHVlXCIgOlxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnJvdy5zdGF0dXMgPT09IFwiRGVjbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgID8gXCJyZWRcIiA6XHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIlBlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIjODAxMzEzXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIlBhaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIiM0Y2FmNTBcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJQYXJ0aWFsbHktUGFpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjZmI4YzAwXCIgOiBcImJsYWNrXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cGFyYW1zLnJvdy5zdGF0dXN9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAgeyBmaWVsZDogJ2RhdGVGaWVsZCcsIGhlYWRlck5hbWU6ICdEYXRlJywgd2lkdGg6IDE1MCB9LFxyXG4gICAgeyBmaWVsZDogJ3RvdGFsSW52b2ljZScsIGhlYWRlck5hbWU6ICdJLUFtb3VudCcsIHdpZHRoOiBzaWRlQmFyID8gMTUwIDogMjAwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiBgRkMke3BhcmFtcy5yb3cudG90YWxJbnZvaWNlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gIH0sXHJcbiAgICB7IGZpZWxkOiAnVG90YWxBbW91bnRQYWlkJywgaGVhZGVyTmFtZTogJ1RvdGFsIFBhaWQnLCB3aWR0aDogc2lkZUJhciA/IDIyMCA6IDIzMCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gYEZDJHtwYXJhbXMucm93LlRvdGFsQW1vdW50UGFpZD8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSAoJCR7KHBhcmFtcy5yb3cuVG90YWxBbW91bnRQYWlkIC8gcGFyYW1zLnJvdy5yYXRlKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9KWAgfSxcclxuICAgIHsgZmllbGQ6ICdiYWxhbmNlRHVlJywgaGVhZGVyTmFtZTogJ0ItRHVlJywgd2lkdGg6IHNpZGVCYXIgPyAxMDAgOiAxMjAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IGBGQyR7KHBhcmFtcy5yb3cuYmFsYW5jZUR1ZSArIChwYXJhbXMucm93LmNyZWRpdEZDICsgKHBhcmFtcy5yb3cuY3JlZGl0VXNkICogcGFyYW1zLnJvdy5yYXRlKSkpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAndmlldycsIGhlYWRlck5hbWU6ICdWaWV3Jywgd2lkdGg6IDUwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiVmlld1wiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5WaWV3KHBhcmFtcy5yb3cuX2lkKX0gaGlkZGVuPXtJbnZvaWNlSW5mb1YubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPFZpc2liaWxpdHlJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnZWRpdCcsIGhlYWRlck5hbWU6ICdFZGl0Jywgd2lkdGg6IDUwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPEVkaXRUb29sdGlwIHRpdGxlPVwiRWRpdFwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGRpc2FibGVkPXtJbnZvaWNlSW5mb1UubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvU2hvcFBvc1VwZGF0ZUZvcm0vJHtwYXJhbXMucm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgIDxFZGl0SWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9FZGl0VG9vbHRpcD5cclxuXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnRGVsZXRlJywgaGVhZGVyTmFtZTogJ0RlbGV0ZScsIHdpZHRoOiA1MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxEZWxldGVUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCI+XHJcbiAgICAgICAgICA8c3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW4ocGFyYW1zLnJvdy5faWQpfSBkaXNhYmxlZD17SW52b2ljZUluZm9ELmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9EZWxldGVUb29sdGlwPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgXVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEludm9pY2luZ1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGVTaG9wIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAxIH19ID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxvYWRpbmdEYXRhID8gPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgID5cclxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBtYXJnaW46ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e0ludm9pY2VJbmZvQy5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9TaG9wUG9zRm9ybSd9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdidG5DdXN0b21lckFkZGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtpbnZvaWNlLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDYwMCwgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpbnZvaWNlLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ2xlZnQnLCBtYXJnaW46ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID4gMSAmJiBzZWxlY3RlZFJvd3MubGVuZ3RoIDwgaW52b2ljZS5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGhpZGRlbj17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfSBvbkNsaWNrPXtoYW5kbGVPcGVuQWxsfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+RGVsZXRlIG11bHRpcGxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPT09IGludm9pY2UubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5BbGx9IGhpZGRlbj17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+RGVsZXRlIGFsbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e2ludm9pY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdHM9e3sgdG9vbGJhcjogR3JpZFRvb2xiYXIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1F1aWNrRmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVRvb2xiYXJCdXR0b246IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2U9eyhuZXdTZWxlY3Rpb24pID0+IHNldFNlbGVjdGVkUm93cyhuZXdTZWxlY3Rpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93UmVuZGVyZXI9e3Jvd1JlbmRlcmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDb2x1bW5GaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVEZW5zaXR5U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbk1vZGVsPXtzZWxlY3RlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJNb2RlbD17ZmlsdGVyTW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZpbHRlck1vZGVsQ2hhbmdlPXsobmV3TW9kZWwpID0+IGhhbmRsZUZpbHRlcihuZXdNb2RlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WaXNpYmlsaXR5TW9kZWw9e2NvbHVtblZpc2liaWxpdHlNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29sdW1uVmlzaWJpbGl0eU1vZGVsQ2hhbmdlPXtoYW5kZWxIaWRkZW5Db2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICcxMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtmaWx0ZXJlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdHM9e3sgdG9vbGJhcjogR3JpZFRvb2xiYXIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1F1aWNrRmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVRvb2xiYXJCdXR0b246IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2U9eyhuZXdTZWxlY3Rpb24pID0+IHNldFNlbGVjdGVkUm93cyhuZXdTZWxlY3Rpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93UmVuZGVyZXI9e3Jvd1JlbmRlcmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVEZW5zaXR5U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbk1vZGVsPXtzZWxlY3RlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJNb2RlbD17ZmlsdGVyTW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZpbHRlck1vZGVsQ2hhbmdlPXsobmV3TW9kZWwpID0+IGhhbmRsZUZpbHRlcihuZXdNb2RlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WaXNpYmlsaXR5TW9kZWw9e2NvbHVtblZpc2liaWxpdHlNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29sdW1uVmlzaWJpbGl0eU1vZGVsQ2hhbmdlPXtoYW5kZWxIaWRkZW5Db2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICcxMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgKSA6IDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luTGVmdDogJzE5JScsIHBhZGRpbmc6ICcyNXB4JywgaGVpZ2h0OiAnNDAlJywgdG9wOiAnNDBweCcsIHdpZHRoOiAnNTUlJywgYm94U2hhZG93OiAnMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyknIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgey8qKiBNb2RhbCBmb3IgRGVjaWRpbmcgdG8gRGVsZXRlIEludm9pY2UgU3RhcnQgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgRG8geW91IFdhbnQgdG8gZGVsZXRlP1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyoqIE1vZGFsIGZvciBEZWNpZGluZyB0byBEZWxldGUgSW52b2ljZSBFbmQgKi99XHJcbiAgICAgIHsvKiogTW9kYWwgZm9yIFVwZGF0aW5nIEludm9pY2UgU3RhdHVzIFN0YXJ0ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuMX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVwZGF0ZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICBVcGRhdGUgRXN0aW1hdGUgU3RhdHVzXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0VXBkYXRlU3RhdHVzfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwic3RhdHVzXCI+U3RhdHVzPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXR1cyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkRyYWZ0XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkRyYWZ0XCI+RHJhZnQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlNlbnRcIj5TZW50PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJEZWNsaW5lXCI+RGVjbGluZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiVm9pZFwiPlZvaWQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlBlbmRpbmdcIj5QZW5kaW5nPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQgdmFsdWU9XCJQYXJ0aWFsbHktUGFpZFwiPlBhcnRpYWxseS1QYWlkPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJGcmVlIG9mIENoYXJnZVwiPkZyZWUgb2YgQ2hhcmdlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQgdmFsdWU9XCJQYWlkXCI+UGFpZDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlVwZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyoqIE1vZGFsIGZvciBVcGRhdGluZyBJbnZvaWNlIFN0YXR1cyBFbmQgKi99XHJcbiAgICAgIHsvKiogTW9kYWwgZm9yIGxvYWRpbmcgVXBkYXRlIFN0YXR1cyBTdGFydCAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUxvYWRpbmd9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTG9hZGluZ30gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyoqIE1vZGFsIGZvciBsb2FkaW5nIFVwZGF0ZSBTdGF0dXMgRW5kICovfVxyXG4gICAgICB7LyoqIE1vZGFsIGZvciBsb2FkaW5nIERlbGV0ZSBJbnZvaWNlIFN0YXJ0ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuRGVsZXRlTXVsdGlwbGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNdWx0aXBsZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHNlbGVjdGVkIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJyBvbkNsaWNrPXtoYW5kbGVEZWxldGVNYW55fT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VNdWx0aXBsZX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkRlbGV0ZUFsbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUFsbH1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gU2VsZWN0ZWQgcm93cyB3aWxsIGJlIGRlbGV0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID4gMSAmJiBzZWxlY3RlZFJvd3MubGVuZ3RoIDwgaW52b2ljZS5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHNlbGVjdGVkIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PT0gaW52b2ljZS5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJyBvbkNsaWNrPXtoYW5kbGVPcGVuUmVhc29uRGVsZXRlfT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VBbGx9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e21vZGFsRGVsZXRlT3BlbkxvYWRpbmd9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nfVxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGgyPiBEYXRhIHN1Y2Nlc3NmdWxseSBkZWxldGVkPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGVDbG9zZUxvYWRpbmd9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5WaWV3fVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVmlld31cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAsIG1heEhlaWdodDogNzAwLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJQcmludFwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVByaW50fSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPFByaW50IHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VWaWV3fSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwb3NJbnZvaWNlICYmIChcclxuICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Ub3A6ICctMTBweCcsIGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnYmxhY2snLCBtYXJnaW5Ub3A6ICcwJyB9fSByZWY9e2NvbXBvbmVudFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgIDx0aGVhZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXs2fSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+R0xPQkFMIEdBVEUgU0FSTDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17Nn0gc3R5bGU9e3sgZm9udFdlaWdodDogJ25vcm1hbCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJDTSBDRC9LV1ovUkNDTS8yMi1CLTAwMzE3IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJRCBOQVQgMTQtSDUzMDBOMTExNzlQIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBVkVOVUUgU0FMT05HTyBRL0lORFVTVFJJRUwgQy9NQU5JS0EgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEtPTFdFWkkgTFVBTEFCQSA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRFIgQ09OR08gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5JbnZvaWNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXsxfT5DbGllbnQ6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXszfT57cG9zSW52b2ljZT8uY3VzdG9tZXJOYW1lPy5jdXN0b21lck5hbWV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPkludm9pY2U6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cG9zSW52b2ljZT8uZmFjdHVyZU51bWJlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlRpbWU6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF5anMocG9zSW52b2ljZT8udGltZSkuZm9ybWF0KCdISDptbScpfSBIPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5EYXRlOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RheWpzKHBvc0ludm9pY2U/Lmludm9pY2VEYXRlKS5mb3JtYXQoJ0RELU1NLVlZWVknKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlVzZXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cG9zSW52b2ljZT8uQ3JlYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNEREQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNEREQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNEREQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0+UXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXJUb3A6ICcxcHggc29saWQgI0RERCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT5SYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXJUb3A6ICcxcHggc29saWQgI0RERCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zSW52b2ljZT8uaXRlbXM/Lm1hcCgocm93LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtyb3cuaWRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNEREQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXJUb3A6ICcxcHggc29saWQgI0RERCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT57cm93Lml0ZW1OYW1lLml0ZW1OYW1lLnRvVXBwZXJDYXNlKCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlclRvcDogJzFweCBzb2xpZCAjREREJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cuaXRlbVF0eX0ge3Jvdy51bml0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXJUb3A6ICcxcHggc29saWQgI0RERCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT5GQ3twYXJzZUZsb2F0KHJvdy5pdGVtUmF0ZSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXJUb3A6ICcxcHggc29saWQgI0RERCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT5GQ3tyb3cuaXRlbUFtb3VudC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlclRvcDogJzFweCBzb2xpZCAjREREJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNEREQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0+VG90YWw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlclRvcDogJzFweCBzb2xpZCAjREREJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0gY29sU3Bhbj17M30+RkN7cG9zSW52b2ljZT8udG90YWxJbnZvaWNlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gKCR7KHBvc0ludm9pY2U/LnN1YlRvdGFsIC8gcG9zSW52b2ljZT8ucmF0ZSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5UYXggRGV0YWlsczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19Pkdyb3NzIEFtb3VudDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17M30gc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PkZDe3Bvc0ludm9pY2U/LnN1YlRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gKCR7KHBvc0ludm9pY2U/LnN1YlRvdGFsIC8gcG9zSW52b2ljZT8ucmF0ZSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5UVkEgQCAxNiU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49ezN9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgdGV4dEFsaWduOiAncmlnaHQnIH19PkZDe3Bvc0ludm9pY2U/LnRheD8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSAoJHsocG9zSW52b2ljZS50YXggIT09IHVuZGVmaW5lZCA/IChwb3NJbnZvaWNlLnRheCAvIHBvc0ludm9pY2U/LnJhdGUpIDogMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5Ub3RhbCBHZW5lcmFsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXszfSBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5GQ3twb3NJbnZvaWNlPy50b3RhbEludm9pY2U/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gKCR7KHBvc0ludm9pY2UudG90YWxJbnZvaWNlICE9PSB1bmRlZmluZWQgPyAocG9zSW52b2ljZS50b3RhbEludm9pY2UgLyBwb3NJbnZvaWNlPy5yYXRlKSA6IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHsocG9zSW52b2ljZS50b3RhbEZDID4gMCB8fCBwb3NJbnZvaWNlLnRvdGFsVVNEID4gMCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PkFtb3VudCBSZWNlaXZlZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXszfSBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT57KHBvc0ludm9pY2UudG90YWxGQyA+IDAgPyAoJ0ZDICcgKyBwb3NJbnZvaWNlLnRvdGFsRkM/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSkgOiAnJyl9IHtwb3NJbnZvaWNlLnRvdGFsRkMgPiAwICYmIHBvc0ludm9pY2UudG90YWxVU0QgPiAwID8gJyAmICcgOiAnJ30ge3Bvc0ludm9pY2UudG90YWxVU0QgPiAwID8gJyQgJyArIHBvc0ludm9pY2UudG90YWxVU0Q/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6ICcnfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Bvc0ludm9pY2UuVG90YWxBbW91bnRQYWlkICE9PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5BbW91bnQgUGFpZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXszfSBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5GQ3twb3NJbnZvaWNlPy5Ub3RhbEFtb3VudFBhaWQ/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gKCR7KHBvc0ludm9pY2UuVG90YWxBbW91bnRQYWlkICE9PSB1bmRlZmluZWQgPyAocG9zSW52b2ljZS5Ub3RhbEFtb3VudFBhaWQgLyBwb3NJbnZvaWNlPy5yYXRlKSA6IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB7KHBvc0ludm9pY2UuY3JlZGl0VXNkID4gMCB8fCBwb3NJbnZvaWNlLmNyZWRpdEZDID4gMCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PkFtb3VudCBSZXR1cm48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17M30gc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+eyhwb3NJbnZvaWNlLmNyZWRpdEZDID4gMCA/ICgnRkMgJyArIHBvc0ludm9pY2UuY3JlZGl0RkM/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSkgOiAnJyl9IHtwb3NJbnZvaWNlLmNyZWRpdFVzZCA+IDAgJiYgcG9zSW52b2ljZS5jcmVkaXRGQyA+IDAgPyAnICYgJyA6ICcnfSB7cG9zSW52b2ljZS5jcmVkaXRVc2QgPiAwID8gJyQgJyArIHBvc0ludm9pY2UuY3JlZGl0VXNkPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAnJ308L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs1fSBzdHlsZT17eyBib3JkZXJUb3A6ICcxcHggc29saWQgI0RERCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT57cG9zSW52b2ljZT8ubm90ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiogTW9kYWwgZm9yIGxvYWRpbmcgRGVsZXRlIEludm9pY2UgRW5kICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VSZWFzb25EZWxldGV9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIFdoeSBkbyB5b3Ugd2FudCB0byBkZWxldGU6IHtpbmZvfT9cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVEZWxldGVNYW55fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBpZD0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlYXNvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdSZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsbFNob3BJbnZvaWNlVmlld1xyXG4iXSwibmFtZXMiOlsiUHJpbnRIZWFkZXIiLCJQcmludEZvb3RlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJTaWRlU2hvcCIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJWaXNpYmlsaXR5SWNvbiIsIkVkaXRJY29uIiwiRGVsZXRlSWNvbiIsIk5hdkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsIlRhYmxlIiwiSWNvbkJ1dHRvbiIsInN0eWxlZCIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiQ2hlY2tib3giLCJUYWJsZUNvbnRhaW5lciIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsIk1vZGFsIiwiQm94IiwiR3JpZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIk1lbnVJdGVtIiwiQmFja2Ryb3AiLCJBdXRvY29tcGxldGUiLCJUZXh0RmllbGQiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJEaXZpZGVyIiwiQ29udGFpbmVyIiwiTGluayIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkFkZCIsIkNsb3NlIiwiTWFpbE91dGxpbmUiLCJQZXJzb24yT3V0bGluZWQiLCJQZXJzb25PZmZSb3VuZGVkIiwiUHJpbnQiLCJkYXlqcyIsIkxvYWRlciIsIkNoZWNrQ2lyY2xlSWNvbiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJJbWFnZSIsIkRhdGFHcmlkIiwiR3JpZFRvb2xiYXIiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJ1c2VSZWFjdFRvUHJpbnQiLCJEZWxldGVUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJFZGl0VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIlNlbGxTaG9wSW52b2ljZVZpZXciLCJfcG9zSW52b2ljZSRjdXN0b21lck4iLCJfcG9zSW52b2ljZSRpdGVtcyIsIl9wb3NJbnZvaWNlJHRheCIsIl9wb3NJbnZvaWNlJHRvdGFsSW52byIsIl9wb3NJbnZvaWNlJHRvdGFsRkMiLCJfcG9zSW52b2ljZSR0b3RhbFVTRCIsIl9wb3NJbnZvaWNlJFRvdGFsQW1vdSIsIl9wb3NJbnZvaWNlJGNyZWRpdEZDIiwiX3Bvc0ludm9pY2UkY3JlZGl0VXNkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImlkIiwiX2lkIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZ3JhbnRBY2Nlc3MiLCJzZXRHcmFudEFjY2VzcyIsImZldGNoTnVtYmVyIiwiX3JlZjAiLCJfcmVzJGRhdGEiLCJmaWx0ZXIiLCJyb3ciLCJ1c2VySUQiLCJtYXAiLCJtb2R1bGVzIiwiSW52b2ljZUluZm9DIiwibW9kdWxlTmFtZSIsImFjY2VzcyIsImNyZWF0ZU0iLCJJbnZvaWNlSW5mb1YiLCJ2aWV3TSIsIkludm9pY2VJbmZvVSIsImVkaXRNIiwiSW52b2ljZUluZm9EIiwiZGVsZXRlTSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiaW52b2ljZSIsInNldEludm9pY2UiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImhpZGRlblJvdyIsInNldEhpZGRlblJvdyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiaGlkZGVuIiwic2V0SGlkZGVuIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJzZWxlY3RlZFJvd3MiLCJzZXRTZWxlY3RlZFJvd3MiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJsb2FkaW5nRGF0YSIsInNldExvYWRpbmdEYXRhIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInJlYXNvbiIsInNldFJlYXNvbiIsImZldGNoRGF0YSIsIl9yZWYxIiwiZm9ybWF0RGF0ZSIsIml0ZW0iLCJkYXRlRmllbGQiLCJpbnZvaWNlRGF0ZSIsImZvcm1hdCIsInRpbWUiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJtb2RhbERlbGV0ZU9wZW5Mb2FkaW5nIiwic2V0TW9kYWxEZWxldGVPcGVuTG9hZGluZyIsImhhbmRsZU9wZW5Mb2FkaW5nIiwiaGFuZGxlQ2xvc2VVcGRhdGUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xvc2VMb2FkaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVEZWxldGVPcGVuTG9hZGluZyIsImhhbmRsZUNsb3NlIiwiaGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nIiwiaGFuZGxlT3Blbk9mZmxpbmUiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbk9mZmxpbmUiLCJfcmVmMTAiLCJSZWZlcmVuY2VJbmZvIiwiUmVmZXJlbmNlSW5mb051bWJlciIsIlJlZmVyZW5jZUluZm9DdXN0b21lciIsImlkSW5mbyIsInBlcnNvbiIsImRhdGVOb3RpZmljYXRpb24iLCJEYXRlIiwicG9zdCIsImxvZyIsIl94IiwiX3gyIiwiX3gzIiwic3luY09mZiIsIl9yZWYxMSIsImZldGNoRGF0YUhpZGRlbiIsIl9yZWYxMiIsImlkUm93IiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsIm9wZW5SZWFzb25EZWxldGUiLCJzZXRPcGVuUmVhc29uRGVsZXRlIiwiaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlUmVhc29uRGVsZXRlIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsInNldE9wZW4iLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwiRGVsZXRlSWQiLCJzZXREZWxldGVJZCIsImhhbmRsZU9wZW4iLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4Iiwib3BlbjEiLCJzZXRPcGVuMSIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJ1cGRhdGVJZCIsInNldFVwZGF0ZUlkIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsInN0YXR1cyIsInNldFN0YXR1cyIsImhhbmRsZU9wZW5VcGRhdGUiLCJjb21wb25lbnRSZWYiLCJoYW5kbGVQcmludCIsImNvbnRlbnQiLCJjdXJyZW50Iiwib25CZWZvcmVHZXRDb250ZW50IiwiUEFHRV9IRUlHSFQiLCJwcmludEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJudW1iZXJPZlBhZ2UiLCJNYXRoIiwiY2VpbCIsIl9wcmludEVsZW1lbnQkZ2V0RWxlbSIsIl9wcmludEVsZW1lbnQkZ2V0RWxlbTIiLCJoZWlnaHRXaXRoU2luZ2xlSGVhZGVyIiwicmVxdWlyZWRIZWlnaHQiLCJoZWFkZXJIZWlnaHQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZvb3RlckhlaWdodCIsInJlbW92ZSIsIm9uQWZ0ZXJQcmludCIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJvcGVuRGVsZXRlTXVsdGlwbGUiLCJzZXRPcGVuRGVsZXRlTXVsdGlwbGUiLCJoYW5kbGVPcGVuTXVsdGlwbGUiLCJoYW5kbGVDbG9zZU11bHRpcGxlIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsIm9wZW5EZWxldGVBbGwiLCJzZXRPcGVuRGVsZXRlQWxsIiwiaGFuZGxlT3BlbkFsbCIsImhhbmRsZUNsb3NlQWxsIiwiaGFuZGxlRGVsZXRlIiwiX3JlZjEzIiwiZGVsZXRlIiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsIkludm9pY2VEZWxldGVkIiwic2V0SW52b2ljZURlbGV0ZWQiLCJmZXRjaEZ1bmN0aW9uIiwiX3JlZjE0IiwiZGVsZXRlUHJvbWlzZXMiLCJfcmVmMTUiLCJpZFRvRGVsZXRlIiwiX3g0IiwiUHJvbWlzZSIsImFsbCIsImZhY3R1cmVOdW1iZXIiLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwib3BlblZpZXciLCJzZXRPcGVuVmlldyIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJpZFZpZXciLCJzZXRJZFZpZXciLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0IiwicG9zSW52b2ljZSIsInNldFBvc0ludm9pY2UiLCJoYW5kbGVPcGVuVmlldyIsImhhbmRsZUNsb3NlVmlldyIsImZldGNoRGF0YTIiLCJfcmVmMTYiLCJyZWxhdGVkIiwiaW5mbyIsInRvU3RyaW5nIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjE3IiwiaGFuZGxlRGVsZXRlTWFueSIsIl9yZWYxOCIsIl9yZWYxOSIsIl94NiIsIl94NSIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJpbnZvaWNlTiIsInNldEludm9pY2VOIiwiZmV0Y2hJZCIsIl9yZWYyMCIsImhhbmRsZUNyZWF0ZUNvbW1lbnQiLCJfcmVmMjEiLCJoYW5kbGVTdWJtaXRVcGRhdGVTdGF0dXMiLCJfcmVmMjIiLCJwdXQiLCJfeDciLCJoYW5kbGVIaWRlUm93IiwiX3JlZjIzIiwiaW5jbHVkZXMiLCJyZXN1bHQiLCJoaWRkZW5JZCIsImhpZGRlbkJ5Q0VPIiwiX3g4Iiwicm93UmVuZGVyZXIiLCJwYXJhbXMiLCJmaWVsZCIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJmaWx0ZXJlZFJvd3MiLCJzZXRGaWx0ZXJlZFJvd3MiLCJJbnYiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwic2VhcmNoSW52b2ljZSIsInNldFNlYXJjaEludm9pY2UiLCJzdG9yZWRWYWx1ZSIsIl9SZWFjdCR1c2VTdGF0ZSIsIml0ZW1zIiwicXVpY2tGaWx0ZXJFeGNsdWRlSGlkZGVuQ29sdW1ucyIsInF1aWNrRmlsdGVyVmFsdWVzIiwiX1JlYWN0JHVzZVN0YXRlMiIsImZpbHRlck1vZGVsIiwic2V0RmlsdGVyTW9kZWwiLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwiY29sdW1uVmlzaWJpbGl0eU1vZGVsIiwic2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsIiwiaGFuZGVsSGlkZGVuQ29sdW1uIiwibmV3SGlkZGVuIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVGaWx0ZXIiLCJuZXdNb2RlbCIsInN0b3JlZFF1aWNrIiwicGFyc2UiLCJzdG9yZWRDb2x1bW5zIiwiX1JlYWN0JHVzZVN0YXRlMyIsIl9SZWFjdCR1c2VTdGF0ZTQiLCJzaWRlQmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZURyYXdlciIsImNvbHVtbnMiLCJoZWFkZXJOYW1lIiwicmVuZGVyQ2VsbCIsInZhbHVlR2V0dGVyIiwiY3VzdG9tZXJOYW1lIiwidG9VcHBlckNhc2UiLCJ0b3RhbEludm9pY2UiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsIl9wYXJhbXMkcm93JFRvdGFsQW1vdSIsIlRvdGFsQW1vdW50UGFpZCIsInJhdGUiLCJiYWxhbmNlRHVlIiwiY3JlZGl0RkMiLCJjcmVkaXRVc2QiLCJ0aXRsZSIsIm9uQ2xpY2siLCJsZW5ndGgiLCJkaXNhYmxlZCIsInRvIiwiY3Vyc29yIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJuYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10IiwiZmxvYXQiLCJtYXJnaW4iLCJyb3dzIiwic2xvdHMiLCJ0b29sYmFyIiwic2xvdFByb3BzIiwic2hvd1F1aWNrRmlsdGVyIiwicHJpbnRPcHRpb25zIiwiZGlzYWJsZVRvb2xiYXJCdXR0b24iLCJvblJvd1NlbGVjdGlvbk1vZGVsQ2hhbmdlIiwibmV3U2VsZWN0aW9uIiwiY2hlY2tib3hTZWxlY3Rpb24iLCJkaXNhYmxlQ29sdW1uRmlsdGVyIiwiZGlzYWJsZURlbnNpdHlTZWxlY3RvciIsInJvd1NlbGVjdGlvbk1vZGVsIiwib25GaWx0ZXJNb2RlbENoYW5nZSIsIm9uQ29sdW1uVmlzaWJpbGl0eU1vZGVsQ2hhbmdlIiwicGFkZGluZyIsInNyYyIsIm9uQ2xvc2UiLCJjb250YWluZXIiLCJ4cyIsInRleHRBbGlnbiIsInBsYWNlbWVudCIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWwiLCJkZWZhdWx0VmFsdWUiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJnYXAiLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJtYXJnaW5Ub3AiLCJyZWYiLCJjb2xTcGFuIiwiZm9udFdlaWdodCIsIkNyZWF0ZSIsImJvcmRlclRvcCIsImJvcmRlckJvdHRvbSIsImkiLCJrZXkiLCJpdGVtTmFtZSIsIml0ZW1RdHkiLCJ1bml0IiwicGFyc2VGbG9hdCIsIml0ZW1SYXRlIiwiaXRlbUFtb3VudCIsInN1YlRvdGFsIiwidGF4IiwidW5kZWZpbmVkIiwidG90YWxGQyIsInRvdGFsVVNEIiwibm90ZSIsIm11bHRpbGluZSIsInBsYWNlaG9sZGVyIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=