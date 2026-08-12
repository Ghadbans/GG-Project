"use strict";
exports.id = "src_js_AdminView1_PurchaseOrderViewAdmin_js";
exports.ids = ["src_js_AdminView1_PurchaseOrderViewAdmin_js"];
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

/***/ "./node_modules/@mui/icons-material/esm/LocalPrintshop.js"
/*!****************************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/LocalPrintshop.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z"
}), 'LocalPrintshop'));

/***/ },

/***/ "./src/js/AdminView1/PurchaseOrderViewAdmin.js"
/*!*****************************************************!*\
  !*** ./src/js/AdminView1/PurchaseOrderViewAdmin.js ***!
  \*****************************************************/
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
/* harmony import */ var _component_SideMaintenance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/SideMaintenance */ "./src/js/component/SideMaintenance.js");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/LocalPrintshop.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../img/images.png */ "./src/js/img/images.png");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_54__);
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"];
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













































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({}, props, {
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
var PrintTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"].tooltip)]: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"])(_ref7 => {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded4);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref8 => {
  var theme = _ref8.theme;
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_28__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref9 => {
  var theme = _ref9.theme,
    open = _ref9.open;
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_31__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref0 => {
  var theme = _ref0.theme,
    open = _ref0.open;
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
      overflowX: 'disabled',
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
function PurchaseOrderViewAdmin() {
  var _row, _data2;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_45__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_45__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_46__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_46__.setUser)({
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
        return _ref1.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_46__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);

  // console.log(grantAccess)

  var InvoiceInfoC = grantAccess.filter(row => row.moduleName === "Purchase-Order" && row.access.createM === true);
  var InvoiceInfoV = grantAccess.filter(row => row.moduleName === "Purchase-Order" && row.access.viewM === true);
  var InvoiceInfoU = grantAccess.filter(row => row.moduleName === "Purchase-Order" && row.access.editM === true);
  var InvoiceInfoD = grantAccess.filter(row => row.moduleName === "Purchase-Order" && row.access.deleteM === true);
  {/** Get Invoice */}
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open1 = _React$useState2[0],
    setOpen1 = _React$useState2[1];
  var toggleDrawer = () => {
    setOpen1(!open1);
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    itemOut = _useState4[0],
    setItemOut = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loadingData = _useState6[0],
    setLoadingData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedRows = _useState8[0],
    setSelectedRows = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    newPurchase = _useState0[0],
    setNewPurchase = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    item = _useState10[0],
    SetItems = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    page = _useState12[0],
    setPage = _useState12[1]; // Initialize page state to 0 (0-based index)
  var limit = 100;
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    searchTerm = _useState14[0],
    setSearchTerm = _useState14[1]; // Initialize search term state
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    filterField = _useState16[0],
    setFilterField = _useState16[1]; // Initialize filter field state
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    filterValue = _useState18[0],
    setFilterValue = _useState18[1]; // Initialize filter value state
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    totalPage = _useState20[0],
    SetTotalPage = _useState20[1];
  var fetchItems = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (page, searchTerm, filterField, filterValue) {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/purchaseOrder-Information?page=").concat(page + 1, "&limit=").concat(limit, "&search=").concat(encodeURIComponent(searchTerm.trim()), "&filterField=").concat(encodeURIComponent(filterField.trim()), "&filterValue=").concat(encodeURIComponent(filterValue.trim())));
        var formatDate = res.data.itemI.map(item => _objectSpread(_objectSpread({}, item), {}, {
          id: item._id,
          dataField: dayjs__WEBPACK_IMPORTED_MODULE_42___default()(item.itemOutDate).format('DD/MM/YYYY'),
          referenceInfo: item.description !== undefined && item.description !== '' ? item.description : item.reference !== undefined && item.reference !== null ? item.reference.referenceName : '',
          itemInfo: item.itemsQtyArray.map(row => row.itemName !== undefined ? row.itemName.itemName : ''),
          itemDescriptionInfo: item.itemsQtyArray.map(row => row.itemDescription !== undefined ? row.itemDescription : '')
        }));
        SetTotalPage(Math.ceil(res.data.totalItem / limit)); // Ensure totalPage is correctly calculated
        setItemOut(formatDate.sort((a, b) => b.outNumber - a.outNumber));
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    });
    return function fetchItems(_x, _x2, _x3, _x4) {
      return _ref11.apply(this, arguments);
    };
  }();
  var fetchAndSaveData = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      // try {
      //   const res = await axios.get(`${ENDPOINT_URL}/purchaseOrder`);
      //   // await db.purchaseOrder.clear(); // REMOVED: Destructive sync
      //   await db.purchaseOrder.bulkPut(res.data.data);
      //   console.log('Data saved to IndexedDB successfully');
      // } catch (error) {
      //   console.error('Error fetching and saving data:', error);
      // }
    });
    return function fetchAndSaveData() {
      return _ref12.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchItems(page, searchTerm, filterField, filterValue);
    fetchAndSaveData();
  }, [page, searchTerm, filterField, filterValue]);
  var handlePageChange = (event, newPage) => {
    setPage(newPage - 1); // Update page state (convert to 0-based index)
  };
  {/** search start */}
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    filterModel = _React$useState4[0],
    setFilterModel = _React$useState4[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState22 = _slicedToArray(_useState21, 2),
    columnVisibilityModel = _useState22[0],
    setColumnVisibilityModel = _useState22[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsPurchaseOrder', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    var _newModel$quickFilter;
    var searchTerm = ((_newModel$quickFilter = newModel.quickFilterValues) === null || _newModel$quickFilter === void 0 ? void 0 : _newModel$quickFilter.join(' ')) || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterPurchaseOrderTst', JSON.stringify(newModel));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterPurchaseOrderTst'));
    if (storedQuick) {
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsPurchaseOrder'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, []);
  {/** view start */}
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    openView = _useState24[0],
    setOpenView = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState26 = _slicedToArray(_useState25, 2),
    idView = _useState26[0],
    setIdView = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState28 = _slicedToArray(_useState27, 2),
    itemPurchaseView = _useState28[0],
    setItemPurchaseView = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
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
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        if (idView !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/get-purchaseOrder/").concat(idView));
            setItemPurchaseView(res.data.data);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchData2() {
        return _ref13.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [idView]);
  {/** view end */}
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    open = _useState32[0],
    setOpen = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState34 = _slicedToArray(_useState33, 2),
    DeleteId = _useState34[0],
    setDeleteId = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    relatedNumber = _useState36[0],
    setRelatedNumber = _useState36[1];
  var handleOpen = (id, number) => {
    setOpen(true);
    setDeleteId(id);
    setRelatedNumber(number);
  };
  var handleClose = () => {
    setOpen(false);
  };
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
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
  {/** delete multiple && all modal end */}
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    loading = _useState40[0],
    setLoading = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    loadingOpenModal = _useState42[0],
    setLoadingOpenModal = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    modalDeleteOpenLoading = _useState44[0],
    setModalDeleteOpenLoading = _useState44[1];
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
    setLoadingOpenModal(false);
    setLoading(false);
    fetchItems(page, searchTerm, filterField, filterValue);
  };
  {/** Loading Update View End */}
  {/** Loading Delete View Start */}
  var handleDeleteOpenLoading = () => {
    setModalDeleteOpenLoading(true);
    setLoading(true);
    handleClose();
    handleCloseReasonDelete();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleDeleteCloseLoading = () => {
    setModalDeleteOpenLoading(false);
    setLoading(false);
    fetchItems(page, searchTerm, filterField, filterValue);
  };
  {/** getting all info start */}
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState46 = _slicedToArray(_useState45, 2),
    itemsQtyArray = _useState46[0],
    SetItemsQtyArray = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState48 = _slicedToArray(_useState47, 2),
    reference = _useState48[0],
    setReference = _useState48[1];
  {/** Delete Start */}
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + ' PO-' + relatedNumber,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref14.apply(this, arguments);
    };
  }();
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    updateS = _useState50[0],
    setUpdateS = _useState50[1];
  var onStatusUpdate = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (e, idInfo) {
      e.preventDefault();
      try {
        var _data = {
          status: 'Purchase'
        };
        var res = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/update-purchaseOrder/").concat(idInfo), _data);
        if (res) {
          setUpdateS(true);
          handleDeleteOpenLoading();
        }
      } catch (error) {
        console.log(error);
      }
    });
    return function onStatusUpdate(_x5, _x6) {
      return _ref15.apply(this, arguments);
    };
  }();
  var handleDeleteUpdate = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/delete-purchaseOrder/").concat(DeleteId));
        if (res) {
          handleDeleteOpenLoading();
          handleCreateNotification();
        }
      } catch (error) {
        console.log('An error as occur in delete');
      }
    });
    return function handleDeleteUpdate(_x7) {
      return _ref16.apply(this, arguments);
    };
  }();
  {/**     {field: 'status', headerName: 'Purchase', width:180, renderCell: (params)=> (<div>{params.row.status === 'Purchase'?<span>{params.row.status}</span>:<button onClick={(e)=>onStatusUpdate(e,params.row._id)} className='btnCustomer'>PURCHASE</button>}  </div>)  }, */}
  var columns = [{
    field: 'outNumber',
    headerName: '#',
    minWidth: 100,
    flex: 0.8,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "PO-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, String(params.row.outNumber).padStart(6, '0')), " ")
  }, {
    field: 'dataField',
    headerName: 'Date',
    minWidth: 100,
    flex: 1
  }, {
    field: 'manufacturer',
    headerName: 'Manufacturer',
    minWidth: 150,
    flex: 1.5
  }, {
    field: 'manufacturerNumber',
    headerName: 'Reference',
    minWidth: 120,
    flex: 1
  }, {
    field: 'reason',
    headerName: 'Reason',
    minWidth: 140,
    flex: 1.2
  }, {
    field: 'referenceInfo',
    headerName: 'Description',
    minWidth: 250,
    flex: 3
  }, {
    field: 'itemInfo',
    headerName: 'Item',
    minWidth: 100,
    flex: 1
  }, {
    field: 'itemDescriptionInfo',
    headerName: 'I-Description',
    minWidth: 120,
    flex: 1.2
  }, {
    field: 'Converted',
    headerName: 'Status',
    minWidth: 130,
    flex: 1,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, params.row.Converted === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      sx: {
        color: '#4caf50'
      }
    }, "Converted") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      sx: {
        color: '#801313'
      }
    }, "Open")), " ")
  }, {
    field: 'view',
    headerName: 'View',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      disabled: InvoiceInfoV.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
      to: "/PurchaseOrderInfoView/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        color: '#202a5a'
      }
    })))))
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      disabled: InvoiceInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
      to: "/PurchaseUpdateOrder/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: {
        color: 'gray'
      }
    })))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "                  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onClick: () => handleOpen(params.row._id, params.row.outNumber),
      disabled: InvoiceInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_8__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_54__.useReactToPrint)({
    content: () => componentRef.current
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_30__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(AppBar, {
    position: "absolute",
    open: open1,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_29__["default"], {
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
    }, open1 && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Purchase Order"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_53__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_52__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_47__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Drawer, {
    variant: "permanent",
    open: open1,
    onMouseEnter: () => setOpen1(true),
    onMouseLeave: () => setOpen1(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_29__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_36__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_33__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_32__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_SideMaintenance__WEBPACK_IMPORTED_MODULE_5__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_29__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_34__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
    to: "/PurchaseForm",
    className: "ItemsName",
    disabled: InvoiceInfoC.length === 0 && user.data.role !== 'CEO',
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
    className: "btnCustomer",
    style: {
      fontSize: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_50__.DataGrid, {
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: itemOut,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_51__.GridToolbar
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    count: totalPage,
    page: page + 1,
    onChange: handlePageChange,
    color: "primary",
    sx: {
      position: 'relative',
      top: '-50px'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  }, "Do you Want to delete?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleClose,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Cancel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleOpenReasonDelete,
    className: "btnCustomer2",
    style: {
      width: '100%'
    }
  }, "Delete"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    open: modalDeleteOpenLoading,
    onClose: handleDeleteCloseLoading,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_16__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), updateS === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Data successfully Updated") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Data successfully deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleDeleteCloseLoading,
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    open: openView,
    onClose: handleCloseView,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 1150
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleCloseView,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_40__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), itemPurchaseView !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
    ref: componentRef,
    className: "invoicedetails"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "invoiceTest"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
    src: _img_images_png__WEBPACK_IMPORTED_MODULE_49__
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("address", {
    style: {
      textAlign: 'right',
      fontSize: '70%',
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    style: {
      fontWeight: 'bold'
    }
  }, "GLOBAL GATE SARL "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    style: {
      fontWeight: 'normal'
    }
  }, "RCM CD/KWZ/RCCM/22-B-00317 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), "ID NAT 14-H5300N11179P ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), "AVENUE SALONGO Q/INDUSTRIEL C/MANIKA ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), "KOLWEZI LUALABA ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), "DR CONGO ")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
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
  }, itemPurchaseView.reference !== undefined && itemPurchaseView.reference !== null ? itemPurchaseView.reference.referenceName : itemPurchaseView.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "PO-0", itemPurchaseView.outNumber))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_42___default()(itemPurchaseView.itemOutDate).format('DD/MM/YYYY')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, itemPurchaseView.reason)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
    style: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
    className: "secondTable",
    style: {
      fontSize: '70%',
      marginBottom: '5px',
      border: '1px solid #DDD',
      maxHeight: '400px',
      overflow: 'auto',
      pageBreakInside: 'auto'
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
  }, "Qty Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      width: '100px',
      borderBottom: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      width: '150px',
      borderBottom: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Total"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, itemPurchaseView.itemsQtyArray.filter(row => parseInt(row.newItemOut) !== 0 || row.newDescription !== undefined).map((row, i) => {
    var relatedUnit = item.find(Item1 => Item1._id === row.itemName._id);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      key: row.idRow
    }, row.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
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
    }, row.newDescription)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'center',
        width: '30px'
      }
    }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        borderLeft: '1px solid #DDD'
      }
    }, row.itemName.itemName !== 'empty' ? row.itemName.itemName : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '250px',
        borderLeft: '1px solid #DDD'
      }
    }, row.itemDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'right',
        width: '30px',
        borderLeft: '1px solid #DDD'
      }
    }, row.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'right',
        width: '30px',
        borderLeft: '1px solid #DDD'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'right',
        width: '80px',
        borderLeft: '1px solid #DDD'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'right',
        width: '100px',
        borderLeft: '1px solid #DDD'
      }
    })));
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      position: 'relative',
      marginTop: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    disabled: true
  }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    disabled: true
  }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintFooter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    branchId: typeof row !== "undefined" ? (_row = row) === null || _row === void 0 ? void 0 : _row.branchId : typeof data !== "undefined" ? (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.branchId : ""
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2",
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, itemPurchaseView.Create.person, " Create PO-0", itemPurchaseView.outNumber, " on ", itemPurchaseView.Create.dateComment), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
    to: "/ConvertPoToIP/".concat(itemPurchaseView._id),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "btnCustomer"
  }, " Convert To I-Purchase"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(PrintTooltip, {
    title: "Print"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handlePrint
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_41__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    style: {
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Purchase Order Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, dayjs__WEBPACK_IMPORTED_MODULE_42___default()(itemPurchaseView.itemOutDate).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, itemPurchaseView.reason !== undefined ? itemPurchaseView.reason : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, itemPurchaseView.reference !== undefined && itemPurchaseView.reference !== null ? itemPurchaseView.reference.referenceName : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, itemPurchaseView.description !== undefined ? itemPurchaseView.description : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Manufacturer Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 3
  }, itemPurchaseView !== undefined ? itemPurchaseView.manufacturer + ' / ' + itemPurchaseView.manufacturerNumber : '')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    sx: {
      maxHeight: 380,
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    "aria-label": "collapsible table",
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Qty Need"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Qty Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Price($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Amount Paid(FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Rate "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Amount Paid($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Total($)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, itemPurchaseView.itemsQtyArray.filter(row => parseInt(row.newItemOut) !== 0 || row.newDescription !== undefined).map((row, i) => {
    var relatedUnit = item.find(Item1 => Item1._id === row.itemName._id);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      key: row.idRow
    }, row.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      colSpan: 9,
      align: "center"
    }, row.newDescription) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, row.itemName.itemName !== 'empty' ? row.itemName.itemName : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, row.itemDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, row.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, row.qtyBuy, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, parseFloat(row.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "FC", row.totalAmountFC !== undefined ? parseFloat(row.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, row.Taux !== undefined ? parseFloat(row.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "$", parseFloat(row.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, row.fcConvertToUsdTotal !== undefined ? parseFloat(row.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "FC", itemPurchaseView.totalFC !== undefined ? parseFloat(itemPurchaseView.totalFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "$", itemPurchaseView.total !== undefined ? itemPurchaseView.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "$", itemPurchaseView.totalUSD !== undefined ? parseFloat(itemPurchaseView.totalUSD).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)))))))))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_40__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: PO-", relatedNumber, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    onSubmit: handleDeleteUpdate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit",
    className: "btnCustomer2",
    style: {
      width: '100%'
    }
  }, "Save")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchaseOrderViewAdmin);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUHVyY2hhc2VPcmRlclZpZXdBZG1pbl9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxTQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOVjs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxvQkFBb0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckIsQ0FBbUQ7QUFDQTtBQUNPO0FBQ3ZDO0FBQ2U7QUFDd0I7QUFDTjtBQUNzQjtBQUNkO0FBQ1o7QUFDSTtBQUNJO0FBQ2dOO0FBQ3hNO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNJO0FBQ0k7QUFDVjtBQUNVO0FBQ2M7QUFDSTtBQUN4QztBQUNrQjtBQUN5QztBQUMzRDtBQUNlO0FBQ3FCO0FBQ1I7QUFDMEI7QUFDaEM7QUFDVDtBQUNBO0FBQ2tCO0FBQ1g7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ1E7QUFFSztBQUUvRCxJQUFNZ0YsYUFBYSxHQUFHaEUsMERBQU0sQ0FBQ2lFLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNqRG5GLDBEQUFBLENBQUNtQyw4REFBTyxFQUFBa0QsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztF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QWUsRUFBRTtJQUFRO0VBQUUsQ0FDakQsQ0FDRyxDQUFDLGVBQ1A1RiwwREFBQSxXQUFLLENBQUMsZUFDTkEsMERBQUEsQ0FBQ3lCLHNEQUFJO0lBQUNpTSxJQUFJO0lBQUMrTyxFQUFFLEVBQUU7RUFBRyxnQkFDaEJ6YywwREFBQTtJQUFRbWdCLElBQUksRUFBQyxRQUFRO0lBQUNuYixTQUFTLEVBQUMsY0FBYztJQUFDNkIsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRTtJQUFPO0VBQUUsR0FBQyxNQUFZLENBQ2pGLENBQ0YsQ0FDRixDQUVILENBQ0EsQ0FDSixDQUFDO0FBRVY7QUFDQSxpRUFBZStCLHNCQUFzQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BZGQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9Mb2NhbFByaW50c2hvcC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUHVyY2hhc2VPcmRlclZpZXdBZG1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2elwiXG59KSwgJ0FkZCcpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDhINWMtMS42NiAwLTMgMS4zNC0zIDN2Nmg0djRoMTJ2LTRoNHYtNmMwLTEuNjYtMS4zNC0zLTMtM20tMyAxMUg4di01aDh6bTMtN2MtLjU1IDAtMS0uNDUtMS0xcy40NS0xIDEtMSAxIC40NSAxIDEtLjQ1IDEtMSAxbS0xLTlINnY0aDEyelwiXG59KSwgJ0xvY2FsUHJpbnRzaG9wJyk7IiwiaW1wb3J0IFByaW50SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudC9QcmludEhlYWRlcic7XHJcbmltcG9ydCBQcmludEZvb3RlciBmcm9tICcuLi9jb21wb25lbnQvUHJpbnRGb290ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi92aWV3LmNzcydcclxuaW1wb3J0ICcuL1BhZ2VWaWV3L0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgU2lkZU1haW50ZW5hbmNlIGZyb20gJy4uL2NvbXBvbmVudC9TaWRlTWFpbnRlbmFuY2UnXHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IFZpc2liaWxpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVmlzaWJpbGl0eSc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IE5hdkxpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IFRhYmxlLCBJY29uQnV0dG9uLCBzdHlsZWQsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBDaGVja2JveCwgVGFibGVDb250YWluZXIsIFBhcGVyLCBUeXBvZ3JhcGh5LCBNb2RhbCwgQm94LCBHcmlkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBNZW51SXRlbSwgQmFja2Ryb3AsIEF1dG9jb21wbGV0ZSwgVGV4dEZpZWxkLCBDb2xsYXBzZSwgUGFnaW5hdGlvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGl2aWRlcic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IEFkZCwgQ2xvc2UsIExvY2FsUHJpbnRzaG9wLCBNYWlsT3V0bGluZSwgUHJpbnQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9pbWcvbm8tZGF0YS5wbmcnO1xyXG5pbXBvcnQgSW1hZ2UyIGZyb20gJy4uL2ltZy9pbWFnZXMucG5nJztcclxuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRUb29sYmFyIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XHJcbmltcG9ydCBQaG9uZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Bob25lJztcclxuaW1wb3J0IFdlYkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9XZWInO1xyXG5pbXBvcnQgRW1haWwgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FbWFpbCc7XHJcbmltcG9ydCBFbWFpbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FbWFpbCc7XHJcbmltcG9ydCBQaG9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QaG9uZSc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcbmltcG9ydCBSZWFjdFRvUHJpbnQsIHsgdXNlUmVhY3RUb1ByaW50IH0gZnJvbSAncmVhY3QtdG8tcHJpbnQnO1xyXG5cclxuY29uc3QgRGVsZXRlVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgUHJpbnRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IEVkaXRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgVmlld1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnZGlzYWJsZWQnLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gUHVyY2hhc2VPcmRlclZpZXdBZG1pbigpIHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBbZ3JhbnRBY2Nlc3MsIHNldEdyYW50QWNjZXNzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hOdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ3JhbnRBY2Nlc3NgKTtcclxuICAgICAgICByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy51c2VySUQgPT09IHVzZXIuZGF0YS5pZClcclxuICAgICAgICAgIC5tYXAoKHJvdykgPT4gc2V0R3JhbnRBY2Nlc3Mocm93Lm1vZHVsZXMpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaE51bWJlcigpXHJcbiAgfSwgW3VzZXJdKVxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhncmFudEFjY2VzcylcclxuXHJcbiAgY29uc3QgSW52b2ljZUluZm9DID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIlB1cmNoYXNlLU9yZGVyXCIgJiYgcm93LmFjY2Vzcy5jcmVhdGVNID09PSB0cnVlKTtcclxuICBjb25zdCBJbnZvaWNlSW5mb1YgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiUHVyY2hhc2UtT3JkZXJcIiAmJiByb3cuYWNjZXNzLnZpZXdNID09PSB0cnVlKTtcclxuICBjb25zdCBJbnZvaWNlSW5mb1UgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiUHVyY2hhc2UtT3JkZXJcIiAmJiByb3cuYWNjZXNzLmVkaXRNID09PSB0cnVlKTtcclxuICBjb25zdCBJbnZvaWNlSW5mb0QgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiUHVyY2hhc2UtT3JkZXJcIiAmJiByb3cuYWNjZXNzLmRlbGV0ZU0gPT09IHRydWUpO1xyXG5cclxuICB7LyoqIEdldCBJbnZvaWNlICovIH1cclxuICBjb25zdCBbb3BlbjEsIHNldE9wZW4xXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKCFvcGVuMSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2l0ZW1PdXQsIHNldEl0ZW1PdXRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUm93cywgc2V0U2VsZWN0ZWRSb3dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbmV3UHVyY2hhc2UsIHNldE5ld1B1cmNoYXNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXRlbSwgU2V0SXRlbXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApOyAvLyBJbml0aWFsaXplIHBhZ2Ugc3RhdGUgdG8gMCAoMC1iYXNlZCBpbmRleClcclxuICBjb25zdCBsaW1pdCA9IDEwMDtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7IC8vIEluaXRpYWxpemUgc2VhcmNoIHRlcm0gc3RhdGVcclxuICBjb25zdCBbZmlsdGVyRmllbGQsIHNldEZpbHRlckZpZWxkXSA9IHVzZVN0YXRlKCcnKTsgLy8gSW5pdGlhbGl6ZSBmaWx0ZXIgZmllbGQgc3RhdGVcclxuICBjb25zdCBbZmlsdGVyVmFsdWUsIHNldEZpbHRlclZhbHVlXSA9IHVzZVN0YXRlKCcnKTsgLy8gSW5pdGlhbGl6ZSBmaWx0ZXIgdmFsdWUgc3RhdGVcclxuICBjb25zdCBbdG90YWxQYWdlLCBTZXRUb3RhbFBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGZldGNoSXRlbXMgPSBhc3luYyAocGFnZSwgc2VhcmNoVGVybSwgZmlsdGVyRmllbGQsIGZpbHRlclZhbHVlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wdXJjaGFzZU9yZGVyLUluZm9ybWF0aW9uP3BhZ2U9JHtwYWdlICsgMX0mbGltaXQ9JHtsaW1pdH0mc2VhcmNoPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlYXJjaFRlcm0udHJpbSgpKX0mZmlsdGVyRmllbGQ9JHtlbmNvZGVVUklDb21wb25lbnQoZmlsdGVyRmllbGQudHJpbSgpKX0mZmlsdGVyVmFsdWU9JHtlbmNvZGVVUklDb21wb25lbnQoZmlsdGVyVmFsdWUudHJpbSgpKX1gKTtcclxuICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IHJlcy5kYXRhLml0ZW1JLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgIGlkOiBpdGVtLl9pZCxcclxuICAgICAgICBkYXRhRmllbGQ6IGRheWpzKGl0ZW0uaXRlbU91dERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpLFxyXG4gICAgICAgIHJlZmVyZW5jZUluZm86IGl0ZW0uZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCAmJiBpdGVtLmRlc2NyaXB0aW9uICE9PSAnJyA/IGl0ZW0uZGVzY3JpcHRpb24gOiAoaXRlbS5yZWZlcmVuY2UgIT09IHVuZGVmaW5lZCAmJiBpdGVtLnJlZmVyZW5jZSAhPT0gbnVsbCA/IGl0ZW0ucmVmZXJlbmNlLnJlZmVyZW5jZU5hbWUgOiAnJyksXHJcbiAgICAgICAgaXRlbUluZm86IGl0ZW0uaXRlbXNRdHlBcnJheS5tYXAoKHJvdykgPT4gcm93Lml0ZW1OYW1lICE9PSB1bmRlZmluZWQgPyByb3cuaXRlbU5hbWUuaXRlbU5hbWUgOiAnJyksXHJcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uSW5mbzogaXRlbS5pdGVtc1F0eUFycmF5Lm1hcCgocm93KSA9PiByb3cuaXRlbURlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgPyByb3cuaXRlbURlc2NyaXB0aW9uIDogJycpXHJcbiAgICAgIH0pKTtcclxuICAgICAgU2V0VG90YWxQYWdlKE1hdGguY2VpbChyZXMuZGF0YS50b3RhbEl0ZW0gLyBsaW1pdCkpOyAvLyBFbnN1cmUgdG90YWxQYWdlIGlzIGNvcnJlY3RseSBjYWxjdWxhdGVkXHJcbiAgICAgIHNldEl0ZW1PdXQoZm9ybWF0RGF0ZS5zb3J0KChhLGIpID0+IGIub3V0TnVtYmVyIC0gYS5vdXROdW1iZXIpKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaEFuZFNhdmVEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gdHJ5IHtcclxuICAgIC8vICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcHVyY2hhc2VPcmRlcmApO1xyXG4gICAgLy8gICAvLyBhd2FpdCBkYi5wdXJjaGFzZU9yZGVyLmNsZWFyKCk7IC8vIFJFTU9WRUQ6IERlc3RydWN0aXZlIHN5bmNcclxuICAgIC8vICAgYXdhaXQgZGIucHVyY2hhc2VPcmRlci5idWxrUHV0KHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygnRGF0YSBzYXZlZCB0byBJbmRleGVkREIgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhbmQgc2F2aW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgLy8gfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaEl0ZW1zKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSk7XHJcbiAgICBmZXRjaEFuZFNhdmVEYXRhKCk7XHJcbiAgfSwgW3BhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKGV2ZW50LCBuZXdQYWdlKSA9PiB7XHJcbiAgICBzZXRQYWdlKG5ld1BhZ2UgLSAxKTsgLy8gVXBkYXRlIHBhZ2Ugc3RhdGUgKGNvbnZlcnQgdG8gMC1iYXNlZCBpbmRleClcclxuICB9O1xyXG4gIHsvKiogc2VhcmNoIHN0YXJ0ICovIH1cclxuICBjb25zdCBbZmlsdGVyTW9kZWwsIHNldEZpbHRlck1vZGVsXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIHF1aWNrRmlsdGVyRXhjbHVkZUhpZGRlbkNvbHVtbnM6IHRydWUsXHJcbiAgICBxdWlja0ZpbHRlclZhbHVlczogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgW2NvbHVtblZpc2liaWxpdHlNb2RlbCwgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBoYW5kZWxIaWRkZW5Db2x1bW4gPSAobmV3SGlkZGVuKSA9PiB7XHJcbiAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwobmV3SGlkZGVuKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0hpZGRlbkNvbHVtbnNQdXJjaGFzZU9yZGVyJywgSlNPTi5zdHJpbmdpZnkobmV3SGlkZGVuKSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRmlsdGVyID0gKG5ld01vZGVsKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gbmV3TW9kZWwucXVpY2tGaWx0ZXJWYWx1ZXM/LmpvaW4oJyAnKSB8fCAnJztcclxuICAgIHNldFNlYXJjaFRlcm0oc2VhcmNoVGVybSk7XHJcbiAgICBzZXRGaWx0ZXJNb2RlbChuZXdNb2RlbClcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUXVpY2tGaWx0ZXJQdXJjaGFzZU9yZGVyVHN0JywgSlNPTi5zdHJpbmdpZnkobmV3TW9kZWwpKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkUXVpY2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlclB1cmNoYXNlT3JkZXJUc3QnKSlcclxuICAgIGlmIChzdG9yZWRRdWljaykge1xyXG4gICAgICBzZXRGaWx0ZXJNb2RlbChzdG9yZWRRdWljaylcclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3JlZENvbHVtbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdIaWRkZW5Db2x1bW5zUHVyY2hhc2VPcmRlcicpKVxyXG4gICAgaWYgKHN0b3JlZENvbHVtbnMpIHtcclxuICAgICAgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsKHN0b3JlZENvbHVtbnMpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgey8qKiB2aWV3IHN0YXJ0ICovIH1cclxuICBjb25zdCBbb3BlblZpZXcsIHNldE9wZW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaWRWaWV3LCBzZXRJZFZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2l0ZW1QdXJjaGFzZVZpZXcsIHNldEl0ZW1QdXJjaGFzZVZpZXddID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaGFuZGxlT3BlblZpZXcgPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW5WaWV3KHRydWUpO1xyXG4gICAgc2V0SWRWaWV3KGlkKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZVZpZXcgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuVmlldyhmYWxzZSk7XHJcbiAgICBzZXRJZFZpZXcobnVsbCk7XHJcbiAgICBzZXRJdGVtUHVyY2hhc2VWaWV3KG51bGwpO1xyXG4gICAgc2V0U2VsZWN0ZWRSb3dzKFtdKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoaWRWaWV3ICE9PSBudWxsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1wdXJjaGFzZU9yZGVyLyR7aWRWaWV3fWApXHJcbiAgICAgICAgICBzZXRJdGVtUHVyY2hhc2VWaWV3KHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhMigpXHJcbiAgfSwgW2lkVmlld10pXHJcbiAgey8qKiB2aWV3IGVuZCAqLyB9XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtEZWxldGVJZCwgc2V0RGVsZXRlSWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcmVsYXRlZE51bWJlciwgc2V0UmVsYXRlZE51bWJlcl0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKGlkLCBudW1iZXIpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICBzZXREZWxldGVJZChpZClcclxuICAgIHNldFJlbGF0ZWROdW1iZXIobnVtYmVyKVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IFtvcGVuUmVhc29uRGVsZXRlLCBzZXRPcGVuUmVhc29uRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgey8qKiBkZWxldGUgbXVsdGlwbGUgJiYgYWxsIG1vZGFsIGVuZCAqLyB9XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxEZWxldGVPcGVuTG9hZGluZywgc2V0TW9kYWxEZWxldGVPcGVuTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgey8qKiBMb2FkaW5nIFVwZGF0ZSBWaWV3IFN0YXJ0ICovIH1cclxuICBjb25zdCBoYW5kbGVPcGVuTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgaGFuZGxlQ2xvc2VVcGRhdGUoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIGZldGNoSXRlbXMocGFnZSwgc2VhcmNoVGVybSwgZmlsdGVyRmllbGQsIGZpbHRlclZhbHVlKTtcclxuICB9XHJcbiAgey8qKiBMb2FkaW5nIFVwZGF0ZSBWaWV3IEVuZCAqLyB9XHJcblxyXG4gIHsvKiogTG9hZGluZyBEZWxldGUgVmlldyBTdGFydCAqLyB9XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbERlbGV0ZU9wZW5Mb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICBoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSgpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxEZWxldGVPcGVuTG9hZGluZyhmYWxzZSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIGZldGNoSXRlbXMocGFnZSwgc2VhcmNoVGVybSwgZmlsdGVyRmllbGQsIGZpbHRlclZhbHVlKTtcclxuICB9XHJcbiAgey8qKiBnZXR0aW5nIGFsbCBpbmZvIHN0YXJ0ICovIH1cclxuICBjb25zdCBbaXRlbXNRdHlBcnJheSwgU2V0SXRlbXNRdHlBcnJheV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlZmVyZW5jZSwgc2V0UmVmZXJlbmNlXSA9IHVzZVN0YXRlKHt9KVxyXG4gIHsvKiogRGVsZXRlIFN0YXJ0ICovIH1cclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86ICcnLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgRGVsZXRlZCAnICsgJyBQTy0nICsgcmVsYXRlZE51bWJlcixcclxuICAgICAgcmVhc29uLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW3VwZGF0ZVMsIHNldFVwZGF0ZVNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvblN0YXR1c1VwZGF0ZSA9IGFzeW5jIChlLCBpZEluZm8pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgc3RhdHVzOiAnUHVyY2hhc2UnXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLXB1cmNoYXNlT3JkZXIvJHtpZEluZm99YCwgZGF0YSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBzZXRVcGRhdGVTKHRydWUpO1xyXG4gICAgICAgIGhhbmRsZURlbGV0ZU9wZW5Mb2FkaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlVXBkYXRlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLXB1cmNoYXNlT3JkZXIvJHtEZWxldGVJZH1gKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZURlbGV0ZU9wZW5Mb2FkaW5nKCk7XHJcbiAgICAgICAgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnQW4gZXJyb3IgYXMgb2NjdXIgaW4gZGVsZXRlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHsvKiogICAgIHtmaWVsZDogJ3N0YXR1cycsIGhlYWRlck5hbWU6ICdQdXJjaGFzZScsIHdpZHRoOjE4MCwgcmVuZGVyQ2VsbDogKHBhcmFtcyk9PiAoPGRpdj57cGFyYW1zLnJvdy5zdGF0dXMgPT09ICdQdXJjaGFzZSc/PHNwYW4+e3BhcmFtcy5yb3cuc3RhdHVzfTwvc3Bhbj46PGJ1dHRvbiBvbkNsaWNrPXsoZSk9Pm9uU3RhdHVzVXBkYXRlKGUscGFyYW1zLnJvdy5faWQpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5QVVJDSEFTRTwvYnV0dG9uPn0gIDwvZGl2PikgIH0sICovIH1cclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHsgZmllbGQ6ICdvdXROdW1iZXInLCBoZWFkZXJOYW1lOiAnIycsIG1pbldpZHRoOiAxMDAsIGZsZXg6IDAuOCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKDxkaXY+IDxzcGFuPlBPLTwvc3Bhbj48c3Bhbj57U3RyaW5nKHBhcmFtcy5yb3cub3V0TnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfTwvc3Bhbj4gPC9kaXY+KSB9LFxyXG4gICAgeyBmaWVsZDogJ2RhdGFGaWVsZCcsIGhlYWRlck5hbWU6ICdEYXRlJywgbWluV2lkdGg6IDEwMCwgZmxleDogMSB9LFxyXG4gICAgeyBmaWVsZDogJ21hbnVmYWN0dXJlcicsIGhlYWRlck5hbWU6ICdNYW51ZmFjdHVyZXInLCBtaW5XaWR0aDogMTUwLCBmbGV4OiAxLjUgfSxcclxuICAgIHsgZmllbGQ6ICdtYW51ZmFjdHVyZXJOdW1iZXInLCBoZWFkZXJOYW1lOiAnUmVmZXJlbmNlJywgbWluV2lkdGg6IDEyMCwgZmxleDogMSB9LFxyXG4gICAgeyBmaWVsZDogJ3JlYXNvbicsIGhlYWRlck5hbWU6ICdSZWFzb24nLCBtaW5XaWR0aDogMTQwLCBmbGV4OiAxLjIgfSxcclxuICAgIHsgZmllbGQ6ICdyZWZlcmVuY2VJbmZvJywgaGVhZGVyTmFtZTogJ0Rlc2NyaXB0aW9uJywgbWluV2lkdGg6IDI1MCwgZmxleDogMyB9LFxyXG4gICAgeyBmaWVsZDogJ2l0ZW1JbmZvJywgaGVhZGVyTmFtZTogJ0l0ZW0nLCBtaW5XaWR0aDogMTAwLCBmbGV4OiAxIH0sXHJcbiAgICB7IGZpZWxkOiAnaXRlbURlc2NyaXB0aW9uSW5mbycsIGhlYWRlck5hbWU6ICdJLURlc2NyaXB0aW9uJywgbWluV2lkdGg6IDEyMCwgZmxleDogMS4yIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnQ29udmVydGVkJywgaGVhZGVyTmFtZTogJ1N0YXR1cycsIG1pbldpZHRoOiAxMzAsIGZsZXg6IDEsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+ICg8ZGl2PiA8c3Bhbj57cGFyYW1zLnJvdy5Db252ZXJ0ZWQgPT09IHRydWUgPyA8VHlwb2dyYXBoeVxyXG4gICAgICAgIHN4PXt7IGNvbG9yOiAnIzRjYWY1MCcgfX1cclxuICAgICAgPlxyXG4gICAgICAgIENvbnZlcnRlZFxyXG4gICAgICA8L1R5cG9ncmFwaHk+IDogPFR5cG9ncmFwaHlcclxuICAgICAgICBzeD17eyBjb2xvcjogJyM4MDEzMTMnIH19XHJcbiAgICAgID5cclxuICAgICAgICBPcGVuXHJcbiAgICAgIDwvVHlwb2dyYXBoeT59PC9zcGFuPiA8L2Rpdj4pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ3ZpZXcnLCBoZWFkZXJOYW1lOiAnVmlldycsIHdpZHRoOiA2MCwgbWluV2lkdGg6IDYwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiVmlld1wiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGRpc2FibGVkPXtJbnZvaWNlSW5mb1YubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvUHVyY2hhc2VPcmRlckluZm9WaWV3LyR7cGFyYW1zLnJvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnZWRpdCcsIGhlYWRlck5hbWU6ICdFZGl0Jywgd2lkdGg6IDYwLCBtaW5XaWR0aDogNjAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8RWRpdFRvb2x0aXAgdGl0bGU9XCJFZGl0XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e0ludm9pY2VJbmZvVS5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9QdXJjaGFzZVVwZGF0ZU9yZGVyLyR7cGFyYW1zLnJvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICA8RWRpdEljb24gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRWRpdFRvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnRGVsZXRlJywgaGVhZGVyTmFtZTogJ0RlbGV0ZScsIHdpZHRoOiA2MCwgbWluV2lkdGg6IDYwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPERlbGV0ZVRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIj5cclxuICAgICAgICAgIDxzcGFuPiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW4ocGFyYW1zLnJvdy5faWQsIHBhcmFtcy5yb3cub3V0TnVtYmVyKX0gZGlzYWJsZWQ9e0ludm9pY2VJbmZvRC5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRGVsZXRlVG9vbHRpcD5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICBdXHJcbiAgY29uc3QgY29tcG9uZW50UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgaGFuZGxlUHJpbnQgPSB1c2VSZWFjdFRvUHJpbnQoe1xyXG4gICAgY29udGVudDogKCkgPT4gY29tcG9uZW50UmVmLmN1cnJlbnRcclxuICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17b3BlbjF9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKG9wZW4xICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFB1cmNoYXNlIE9yZGVyXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17b3BlbjF9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0T3BlbjEodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0T3BlbjEoZmFsc2UpfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZU1haW50ZW5hbmNlIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAxIH19ID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxvYWRpbmdEYXRhID8gPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJzEyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvUHVyY2hhc2VGb3JtXCIgY2xhc3NOYW1lPSdJdGVtc05hbWUnIGRpc2FibGVkPXtJbnZvaWNlSW5mb0MubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBtYXJnaW46ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QWRkIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDYwMCwgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZT1cInNlcnZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQ9e3RvdGFsUGFnZSAqIGxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXtpdGVtT3V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgIHNsb3RzPXt7IHRvb2xiYXI6IEdyaWRUb29sYmFyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblJvd1NlbGVjdGlvbk1vZGVsQ2hhbmdlPXsobmV3U2VsZWN0aW9uKSA9PiBzZXRTZWxlY3RlZFJvd3MobmV3U2VsZWN0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNsb3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1F1aWNrRmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVRvb2xiYXJCdXR0b246IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGdldFJvd0NsYXNzTmFtZT17KHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3UHVyY2hhc2UuaW5jbHVkZXMocGFyYW1zLnJvdy5faWQpID8gJ25ldy1QdXJjaGFzZScgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94U2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRGVuc2l0eVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJNb2RlbD17ZmlsdGVyTW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb25Nb2RlbD17c2VsZWN0ZWRSb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25GaWx0ZXJNb2RlbENoYW5nZT17KG5ld01vZGVsKSA9PiBoYW5kbGVGaWx0ZXIobmV3TW9kZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uVmlzaWJpbGl0eU1vZGVsPXtjb2x1bW5WaXNpYmlsaXR5TW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZT17aGFuZGVsSGlkZGVuQ29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBwYWRkaW5nOiAnMTBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIGNvdW50PXt0b3RhbFBhZ2V9IHBhZ2U9e3BhZ2UgKyAxfSBvbkNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX0gY29sb3I9XCJwcmltYXJ5XCIgc3g9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJy01MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICBEbyB5b3UgV2FudCB0byBkZWxldGU/XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuUmVhc29uRGVsZXRlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXttb2RhbERlbGV0ZU9wZW5Mb2FkaW5nfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZURlbGV0ZUNsb3NlTG9hZGluZ31cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTID09PSB0cnVlID8gPGgyPiBEYXRhIHN1Y2Nlc3NmdWxseSBVcGRhdGVkPC9oMj4gOiA8aDI+IERhdGEgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuVmlld31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVZpZXd9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogMTE1MCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VWaWV3fSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbVB1cmNoYXNlVmlldyAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxCb3ggZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZSByZWY9e2NvbXBvbmVudFJlZn0gY2xhc3NOYW1lPSdpbnZvaWNlZGV0YWlscyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnZvaWNlVGVzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0ltYWdlMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgZm9udFNpemU6ICc3MCUnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkdMT0JBTCBHQVRFIFNBUkwgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiAnbm9ybWFsJyB9fT5SQ00gQ0QvS1daL1JDQ00vMjItQi0wMDMxNyA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJRCBOQVQgMTQtSDUzMDBOMTExNzlQIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFWRU5VRSBTQUxPTkdPIFEvSU5EVVNUUklFTCBDL01BTklLQSA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLT0xXRVpJIExVQUxBQkEgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRFIgQ09OR08gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ludm9pY2Vocicgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fT5QdXJjaGFzZSBPcmRlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50JyBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyMHB4JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YWRkcmVzcyBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGluZUhlaWdodDogMS4zNSwgd2lkdGg6ICc2MCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogJzEzcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGZvbnRTaXplOiAnMTNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1QdXJjaGFzZVZpZXcucmVmZXJlbmNlICE9PSB1bmRlZmluZWQgJiYgaXRlbVB1cmNoYXNlVmlldy5yZWZlcmVuY2UgIT09IG51bGwgPyBpdGVtUHVyY2hhc2VWaWV3LnJlZmVyZW5jZS5yZWZlcmVuY2VOYW1lIDogaXRlbVB1cmNoYXNlVmlldy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpcnN0VGFibGVcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZm9udFNpemU6ICc3MCUnLCBsZWZ0OiAnODNweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnLCBwYWdlQnJlYWtJbnNpZGU6ICdhdXRvJyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPk9yZGVyICM8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAncmlnaHQnIH19PjxzcGFuID5QTy0we2l0ZW1QdXJjaGFzZVZpZXcub3V0TnVtYmVyfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuID5EYXRlPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT48c3BhbiA+e2RheWpzKGl0ZW1QdXJjaGFzZVZpZXcuaXRlbU91dERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuID5TdWJqZWN0PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT48c3BhbiA+e2l0ZW1QdXJjaGFzZVZpZXcucmVhc29ufTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgZm9udFNpemU6ICc3MCUnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIG1heEhlaWdodDogJzQwMHB4Jywgb3ZlcmZsb3c6ICdhdXRvJywgcGFnZUJyZWFrSW5zaWRlOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMTUwcHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzQwMHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPlF0eSBOZWVkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+UXR5IEJ1eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPlJhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzE1MHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVB1cmNoYXNlVmlldy5pdGVtc1F0eUFycmF5LmZpbHRlcigocm93KSA9PiBwYXJzZUludChyb3cubmV3SXRlbU91dCkgIT09IDAgfHwgcm93Lm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRlZFVuaXQgPSBpdGVtLmZpbmQoKEl0ZW0xKSA9PiBJdGVtMS5faWQgPT09IHJvdy5pdGVtTmFtZS5faWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cm93LmlkUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+PHNwYW4+e2kgKyAxfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezZ9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj0nY2VudGVyJz57cm93Lm5ld0Rlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMzBweCcgfX0+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+e3Jvdy5pdGVtTmFtZS5pdGVtTmFtZSAhPT0gJ2VtcHR5JyA/IHJvdy5pdGVtTmFtZS5pdGVtTmFtZSA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjUwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cuaXRlbURlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCB3aWR0aDogJzMwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cuaXRlbVF0eX0ge3JlbGF0ZWRVbml0ICE9PSB1bmRlZmluZWQgPyByZWxhdGVkVW5pdC51bml0LnRvVXBwZXJDYXNlKCkgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0Jywgd2lkdGg6ICczMHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0Jywgd2lkdGg6ICc4MHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0Jywgd2lkdGg6ICcxMDBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW5Ub3A6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRpc2FibGVkPi4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRpc2FibGVkPi4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaW50Rm9vdGVyIGJyYW5jaElkPXt0eXBlb2Ygcm93ICE9PSBcInVuZGVmaW5lZFwiID8gcm93Py5icmFuY2hJZCA6IHR5cGVvZiBkYXRhICE9PSBcInVuZGVmaW5lZFwiID8gZGF0YT8uYnJhbmNoSWQgOiBcIlwifSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiIHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtUHVyY2hhc2VWaWV3LkNyZWF0ZS5wZXJzb259IENyZWF0ZSBQTy0we2l0ZW1QdXJjaGFzZVZpZXcub3V0TnVtYmVyfSBvbiB7aXRlbVB1cmNoYXNlVmlldy5DcmVhdGUuZGF0ZUNvbW1lbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9Db252ZXJ0UG9Ub0lQLyR7aXRlbVB1cmNoYXNlVmlldy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPiBDb252ZXJ0IFRvIEktUHVyY2hhc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPFByaW50VG9vbHRpcCB0aXRsZT1cIlByaW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlUHJpbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExvY2FsUHJpbnRzaG9wIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1ByaW50VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiA2MDAsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UHVyY2hhc2UgT3JkZXIgRGF0ZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PntkYXlqcyhpdGVtUHVyY2hhc2VWaWV3Lml0ZW1PdXREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UmVhc29uPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17M30+e2l0ZW1QdXJjaGFzZVZpZXcucmVhc29uICE9PSB1bmRlZmluZWQgPyBpdGVtUHVyY2hhc2VWaWV3LnJlYXNvbiA6ICcnfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5SZWZlcmVuY2U8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXszfT57aXRlbVB1cmNoYXNlVmlldy5yZWZlcmVuY2UgIT09IHVuZGVmaW5lZCAmJiBpdGVtUHVyY2hhc2VWaWV3LnJlZmVyZW5jZSAhPT0gbnVsbCA/IGl0ZW1QdXJjaGFzZVZpZXcucmVmZXJlbmNlLnJlZmVyZW5jZU5hbWUgOiAnJ308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGVzY3JpcHRpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXszfT57aXRlbVB1cmNoYXNlVmlldy5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gaXRlbVB1cmNoYXNlVmlldy5kZXNjcmlwdGlvbiA6ICcnfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5NYW51ZmFjdHVyZXIgSW5mbzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PntpdGVtUHVyY2hhc2VWaWV3ICE9PSB1bmRlZmluZWQgPyBpdGVtUHVyY2hhc2VWaWV3Lm1hbnVmYWN0dXJlciArICcgLyAnICsgaXRlbVB1cmNoYXNlVmlldy5tYW51ZmFjdHVyZXJOdW1iZXIgOiAnJ308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBzeD17eyBtYXhIZWlnaHQ6IDM4MCwgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgYXJpYS1sYWJlbD1cImNvbGxhcHNpYmxlIHRhYmxlXCIgc3RpY2t5SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+IzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+SXRlbTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGVzY3JpcHRpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlF0eSBOZWVkPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5RdHkgQnV5PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5QcmljZSgkKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+QW1vdW50IFBhaWQoRkMpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5SYXRlIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+QW1vdW50IFBhaWQoJCk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlRvdGFsKCQpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtUHVyY2hhc2VWaWV3Lml0ZW1zUXR5QXJyYXkuZmlsdGVyKChyb3cpID0+IHBhcnNlSW50KHJvdy5uZXdJdGVtT3V0KSAhPT0gMCB8fCByb3cubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGVkVW5pdCA9IGl0ZW0uZmluZCgoSXRlbTEpID0+IEl0ZW0xLl9pZCA9PT0gcm93Lml0ZW1OYW1lLl9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuaWRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Lm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17OX0gYWxpZ249J2NlbnRlcic+e3Jvdy5uZXdEZXNjcmlwdGlvbn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2kgKyAxfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93Lml0ZW1OYW1lLml0ZW1OYW1lICE9PSAnZW1wdHknID8gcm93Lml0ZW1OYW1lLml0ZW1OYW1lIDogJyd9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuaXRlbURlc2NyaXB0aW9ufTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93Lml0ZW1RdHl9IHtyZWxhdGVkVW5pdCAhPT0gdW5kZWZpbmVkID8gcmVsYXRlZFVuaXQudW5pdC50b1VwcGVyQ2FzZSgpIDogJyd9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cucXR5QnV5fSB7cmVsYXRlZFVuaXQgIT09IHVuZGVmaW5lZCA/IHJlbGF0ZWRVbml0LnVuaXQudG9VcHBlckNhc2UoKSA6ICcnfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cGFyc2VGbG9hdChyb3cuaXRlbVJhdGUpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RkN7cm93LnRvdGFsQW1vdW50RkMgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQocm93LnRvdGFsQW1vdW50RkMpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuVGF1eCAhPT0gdW5kZWZpbmVkID8gcGFyc2VGbG9hdChyb3cuVGF1eCkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+JHtwYXJzZUZsb2F0KHJvdy50b3RhbEFtb3VudCkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LmZjQ29udmVydFRvVXNkVG90YWwgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQocm93LmZjQ29udmVydFRvVXNkVG90YWwpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCA+VG90YWw8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezJ9IHN4PXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5GQ3tpdGVtUHVyY2hhc2VWaWV3LnRvdGFsRkMgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQoaXRlbVB1cmNoYXNlVmlldy50b3RhbEZDKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Mn0gc3g9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PiR7aXRlbVB1cmNoYXNlVmlldy50b3RhbCAhPT0gdW5kZWZpbmVkID8gaXRlbVB1cmNoYXNlVmlldy50b3RhbC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Mn0gc3g9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PiR7aXRlbVB1cmNoYXNlVmlldy50b3RhbFVTRCAhPT0gdW5kZWZpbmVkID8gcGFyc2VGbG9hdChpdGVtUHVyY2hhc2VWaWV3LnRvdGFsVVNEKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlblJlYXNvbkRlbGV0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlUmVhc29uRGVsZXRlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICBXaHkgZG8geW91IHdhbnQgdG8gZGVsZXRlOiBQTy17cmVsYXRlZE51bWJlcn0/XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRGVsZXRlVXBkYXRlfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBpZD0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlYXNvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdSZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VPcmRlclZpZXdBZG1pblxyXG4iXSwibmFtZXMiOlsiUHJpbnRIZWFkZXIiLCJQcmludEZvb3RlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJTaWRlTWFpbnRlbmFuY2UiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiVmlzaWJpbGl0eUljb24iLCJFZGl0SWNvbiIsIkRlbGV0ZUljb24iLCJOYXZMaW5rIiwidXNlTmF2aWdhdGUiLCJUYWJsZSIsIkljb25CdXR0b24iLCJzdHlsZWQiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIkNoZWNrYm94IiwiVGFibGVDb250YWluZXIiLCJQYXBlciIsIlR5cG9ncmFwaHkiLCJNb2RhbCIsIkJveCIsIkdyaWQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJNZW51SXRlbSIsIkJhY2tkcm9wIiwiQXV0b2NvbXBsZXRlIiwiVGV4dEZpZWxkIiwiQ29sbGFwc2UiLCJQYWdpbmF0aW9uIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiRGl2aWRlciIsIkNvbnRhaW5lciIsIkxpbmsiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJBZGQiLCJDbG9zZSIsIkxvY2FsUHJpbnRzaG9wIiwiTWFpbE91dGxpbmUiLCJQcmludCIsImRheWpzIiwiTG9hZGVyIiwiQ2hlY2tDaXJjbGVJY29uIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsIkltYWdlIiwiSW1hZ2UyIiwiRGF0YUdyaWQiLCJHcmlkVG9vbGJhciIsIlBob25lIiwiV2ViSWNvbiIsIkVtYWlsIiwiRW1haWxJY29uIiwiUGhvbmVJY29uIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiUmVhY3RUb1ByaW50IiwidXNlUmVhY3RUb1ByaW50IiwiRGVsZXRlVG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiUHJpbnRUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJFZGl0VG9vbHRpcCIsIl9yZWY1IiwiX2V4Y2x1ZGVkMyIsIl9yZWY2IiwiVmlld1Rvb2x0aXAiLCJfcmVmNyIsIl9leGNsdWRlZDQiLCJfcmVmOCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmOSIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmMCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIlB1cmNoYXNlT3JkZXJWaWV3QWRtaW4iLCJfcm93IiwiX2RhdGEyIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjEiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImdyYW50QWNjZXNzIiwic2V0R3JhbnRBY2Nlc3MiLCJmZXRjaE51bWJlciIsIl9yZWYxMCIsIl9yZXMkZGF0YSIsImZpbHRlciIsInJvdyIsInVzZXJJRCIsImlkIiwibWFwIiwibW9kdWxlcyIsIkludm9pY2VJbmZvQyIsIm1vZHVsZU5hbWUiLCJhY2Nlc3MiLCJjcmVhdGVNIiwiSW52b2ljZUluZm9WIiwidmlld00iLCJJbnZvaWNlSW5mb1UiLCJlZGl0TSIsIkludm9pY2VJbmZvRCIsImRlbGV0ZU0iLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwib3BlbjEiLCJzZXRPcGVuMSIsInRvZ2dsZURyYXdlciIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiaXRlbU91dCIsInNldEl0ZW1PdXQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInNlbGVjdGVkUm93cyIsInNldFNlbGVjdGVkUm93cyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwibmV3UHVyY2hhc2UiLCJzZXROZXdQdXJjaGFzZSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIml0ZW0iLCJTZXRJdGVtcyIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJwYWdlIiwic2V0UGFnZSIsImxpbWl0IiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsImZpbHRlckZpZWxkIiwic2V0RmlsdGVyRmllbGQiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwiZmlsdGVyVmFsdWUiLCJzZXRGaWx0ZXJWYWx1ZSIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJ0b3RhbFBhZ2UiLCJTZXRUb3RhbFBhZ2UiLCJmZXRjaEl0ZW1zIiwiX3JlZjExIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidHJpbSIsImZvcm1hdERhdGUiLCJpdGVtSSIsIl9pZCIsImRhdGFGaWVsZCIsIml0ZW1PdXREYXRlIiwiZm9ybWF0IiwicmVmZXJlbmNlSW5mbyIsImRlc2NyaXB0aW9uIiwidW5kZWZpbmVkIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTmFtZSIsIml0ZW1JbmZvIiwiaXRlbXNRdHlBcnJheSIsIml0ZW1OYW1lIiwiaXRlbURlc2NyaXB0aW9uSW5mbyIsIml0ZW1EZXNjcmlwdGlvbiIsIk1hdGgiLCJjZWlsIiwidG90YWxJdGVtIiwic29ydCIsImEiLCJiIiwib3V0TnVtYmVyIiwiX3giLCJfeDIiLCJfeDMiLCJfeDQiLCJmZXRjaEFuZFNhdmVEYXRhIiwiX3JlZjEyIiwiaGFuZGxlUGFnZUNoYW5nZSIsImV2ZW50IiwibmV3UGFnZSIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJpdGVtcyIsInF1aWNrRmlsdGVyRXhjbHVkZUhpZGRlbkNvbHVtbnMiLCJxdWlja0ZpbHRlclZhbHVlcyIsIl9SZWFjdCR1c2VTdGF0ZTQiLCJmaWx0ZXJNb2RlbCIsInNldEZpbHRlck1vZGVsIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsImNvbHVtblZpc2liaWxpdHlNb2RlbCIsInNldENvbHVtblZpc2liaWxpdHlNb2RlbCIsImhhbmRlbEhpZGRlbkNvbHVtbiIsIm5ld0hpZGRlbiIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlRmlsdGVyIiwibmV3TW9kZWwiLCJfbmV3TW9kZWwkcXVpY2tGaWx0ZXIiLCJqb2luIiwic3RvcmVkUXVpY2siLCJwYXJzZSIsInN0b3JlZENvbHVtbnMiLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0Iiwib3BlblZpZXciLCJzZXRPcGVuVmlldyIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJpZFZpZXciLCJzZXRJZFZpZXciLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwiaXRlbVB1cmNoYXNlVmlldyIsInNldEl0ZW1QdXJjaGFzZVZpZXciLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwicmVhc29uIiwic2V0UmVhc29uIiwiaGFuZGxlT3BlblZpZXciLCJoYW5kbGVDbG9zZVZpZXciLCJmZXRjaERhdGEyIiwiX3JlZjEzIiwibG9nIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsInNldE9wZW4iLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwiRGVsZXRlSWQiLCJzZXREZWxldGVJZCIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJyZWxhdGVkTnVtYmVyIiwic2V0UmVsYXRlZE51bWJlciIsImhhbmRsZU9wZW4iLCJudW1iZXIiLCJoYW5kbGVDbG9zZSIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJvcGVuUmVhc29uRGVsZXRlIiwic2V0T3BlblJlYXNvbkRlbGV0ZSIsImhhbmRsZU9wZW5SZWFzb25EZWxldGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJtb2RhbERlbGV0ZU9wZW5Mb2FkaW5nIiwic2V0TW9kYWxEZWxldGVPcGVuTG9hZGluZyIsImhhbmRsZU9wZW5Mb2FkaW5nIiwiaGFuZGxlQ2xvc2VVcGRhdGUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xvc2VMb2FkaW5nIiwiaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmciLCJoYW5kbGVEZWxldGVDbG9zZUxvYWRpbmciLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2IiwiU2V0SXRlbXNRdHlBcnJheSIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJzZXRSZWZlcmVuY2UiLCJoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24iLCJfcmVmMTQiLCJpZEluZm8iLCJwZXJzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwiRGF0ZSIsInBvc3QiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwidXBkYXRlUyIsInNldFVwZGF0ZVMiLCJvblN0YXR1c1VwZGF0ZSIsIl9yZWYxNSIsInN0YXR1cyIsInB1dCIsIl94NSIsIl94NiIsImhhbmRsZURlbGV0ZVVwZGF0ZSIsIl9yZWYxNiIsImRlbGV0ZSIsIl94NyIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJtaW5XaWR0aCIsImZsZXgiLCJyZW5kZXJDZWxsIiwicGFyYW1zIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJDb252ZXJ0ZWQiLCJzeCIsInRpdGxlIiwiZGlzYWJsZWQiLCJsZW5ndGgiLCJ0byIsIm9uQ2xpY2siLCJjdXJzb3IiLCJjb21wb25lbnRSZWYiLCJoYW5kbGVQcmludCIsImNvbnRlbnQiLCJjdXJyZW50IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93IiwibmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsImZsb2F0IiwibWFyZ2luIiwicGFnaW5hdGlvbk1vZGUiLCJyb3dDb3VudCIsInBhZ2luYXRpb24iLCJwYWdlU2l6ZSIsIm9uUGFnZUNoYW5nZSIsInJvd3MiLCJzbG90cyIsInRvb2xiYXIiLCJvblJvd1NlbGVjdGlvbk1vZGVsQ2hhbmdlIiwibmV3U2VsZWN0aW9uIiwic2xvdFByb3BzIiwic2hvd1F1aWNrRmlsdGVyIiwicHJpbnRPcHRpb25zIiwiZGlzYWJsZVRvb2xiYXJCdXR0b24iLCJnZXRSb3dDbGFzc05hbWUiLCJpbmNsdWRlcyIsImNoZWNrYm94U2VsZWN0aW9uIiwiZGlzYWJsZURlbnNpdHlTZWxlY3RvciIsInJvd1NlbGVjdGlvbk1vZGVsIiwib25GaWx0ZXJNb2RlbENoYW5nZSIsIm9uQ29sdW1uVmlzaWJpbGl0eU1vZGVsQ2hhbmdlIiwicGFkZGluZyIsImNvdW50Iiwib25DaGFuZ2UiLCJvbkNsb3NlIiwiY29udGFpbmVyIiwieHMiLCJ0ZXh0QWxpZ24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwiZ2FwIiwicGxhY2VtZW50IiwicmVmIiwiYm9yZGVyQm90dG9tIiwic3JjIiwibWFyZ2luVG9wIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsImxpbmVIZWlnaHQiLCJwYWdlQnJlYWtJbnNpZGUiLCJib3JkZXIiLCJtYXhIZWlnaHQiLCJhbGlnbiIsInBhcnNlSW50IiwibmV3SXRlbU91dCIsIm5ld0Rlc2NyaXB0aW9uIiwiaSIsInJlbGF0ZWRVbml0IiwiZmluZCIsIkl0ZW0xIiwia2V5IiwiaWRSb3ciLCJGcmFnbWVudCIsImNvbFNwYW4iLCJib3JkZXJMZWZ0IiwiaXRlbVF0eSIsInVuaXQiLCJ0b1VwcGVyQ2FzZSIsImJyYW5jaElkIiwiQ3JlYXRlIiwiZGF0ZUNvbW1lbnQiLCJtYW51ZmFjdHVyZXIiLCJtYW51ZmFjdHVyZXJOdW1iZXIiLCJzdGlja3lIZWFkZXIiLCJxdHlCdXkiLCJwYXJzZUZsb2F0IiwiaXRlbVJhdGUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJ0b3RhbEFtb3VudEZDIiwiVGF1eCIsInRvdGFsQW1vdW50IiwiZmNDb252ZXJ0VG9Vc2RUb3RhbCIsInRvdGFsRkMiLCJ0b3RhbCIsInRvdGFsVVNEIiwib25TdWJtaXQiLCJyZXF1aXJlZCIsIm11bHRpbGluZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJ0YXJnZXQiLCJsYWJlbCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9