"use strict";
exports.id = "src_js_AdminView1_PageView_PurchaseOrder_PurchaseUpdateOrder_js";
exports.ids = ["src_js_AdminView1_PageView_PurchaseOrder_PurchaseUpdateOrder_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), 'DragIndicatorRounded'));

/***/ },

/***/ "./src/js/AdminView1/PageView/PurchaseOrder/PurchaseUpdateOrder.js"
/*!*************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/PurchaseOrder/PurchaseUpdateOrder.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SideMaintenance2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SideMaintenance2 */ "./src/js/component/SideMaintenance2.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../../component/ItemThumbnail */ "./src/js/component/ItemThumbnail.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["data", "contentType"];
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













































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"].tooltip)]: {
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
var style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_24__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
function PurchaseUpdateOrder() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_39__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_39__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_49__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_49__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__.setUser)({
              userName: Name,
              role: Role
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__.logOut)());
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    reason = _useState2[0],
    setReason = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    description = _useState4[0],
    setDescription = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    items = _useState6[0],
    SetItems = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    itemsQtyArray = _useState8[0],
    SetItemsQtyArray = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    projects = _useState0[0],
    setProject = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    maintenance = _useState10[0],
    setMaintenance = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    invoice = _useState12[0],
    setInvoice = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    serviceNumber = _useState14[0],
    setServiceNumber = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    projectName = _useState16[0],
    setProjectName = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    invoiceName = _useState18[0],
    setInvoiceName = _useState18[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue2 = _React$useState2[0],
    setInputValue2 = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    inputValueProject = _React$useState4[0],
    setInputValueProject = _React$useState4[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    outNumber = _useState20[0],
    setOutNumber = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    reason2 = _useState22[0],
    setReason2 = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    ItemInformation = _useState24[0],
    setItemInformation = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState26 = _slicedToArray(_useState25, 2),
    reference = _useState26[0],
    setReference = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    rate = _useState28[0],
    setRate = _useState28[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    inputValue = _React$useState6[0],
    setInputValue = _React$useState6[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return dayjs__WEBPACK_IMPORTED_MODULE_44___default()(date);
    }),
    _useState30 = _slicedToArray(_useState29, 2),
    itemOutDate = _useState30[0],
    setItemOutDate = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    manufacturer = _useState32[0],
    setManufacturer = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    manufacturerNumber = _useState34[0],
    setManufacturerNumber = _useState34[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2, _res$data3, _res$data4;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-purchaseOrder/").concat(id));
          setOutNumber(Number(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.outNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.outNumber) || 0));
          setItemOutDate(res.data.data.itemOutDate);
          setReason(res.data.data.reason);
          setDescription(res.data.data.description);
          SetItemsQtyArray(res.data.data.itemsQtyArray);
          setDescription(res.data.data.description);
          setReference(res.data.data.reference);
          setManufacturer(res.data.data.manufacturer);
          setManufacturerNumber(((_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.manufacturerNumber) || ((_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.manufacturerNumber) || "");
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchData();
  }, [id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var _resProject$data, _resMaintenance$data, _resInvoice$data;
          var resItem = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/item"));
          setItemInformation(resItem.data.data.reverse());
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/rate"));
          res.data.data.map(row => setRate(row.rate));
          var resPurchase = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/purchase?summary=true"));
          var resProject = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/projects"));
          setProject((_resProject$data = resProject.data) === null || _resProject$data === void 0 || (_resProject$data = _resProject$data.data) === null || _resProject$data === void 0 ? void 0 : _resProject$data.filter(row => {
            var _resPurchase$data;
            return (_resPurchase$data = resPurchase.data) === null || _resPurchase$data === void 0 || (_resPurchase$data = _resPurchase$data.data) === null || _resPurchase$data === void 0 ? void 0 : _resPurchase$data.find(Item => Item.projectName._id === row._id && Item.items.some(Item1 => Item1.itemQty > Item1.itemOut));
          }).reverse());
          var resMaintenance = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/maintenance?summary=true"));
          setMaintenance((_resMaintenance$data = resMaintenance.data) === null || _resMaintenance$data === void 0 || (_resMaintenance$data = _resMaintenance$data.data) === null || _resMaintenance$data === void 0 ? void 0 : _resMaintenance$data.filter(row => row.items.some(Item => Item.itemQty > Item.itemOut)));
          var resInvoice = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/invoice?summary=true"));
          var newData = (_resInvoice$data = resInvoice.data) === null || _resInvoice$data === void 0 || (_resInvoice$data = _resInvoice$data.data) === null || _resInvoice$data === void 0 ? void 0 : _resInvoice$data.filter(row => row.items.some(Item => Item.itemQty > Item.itemOut) && !resPurchase.data.data.some(Item => Item._id === row.ReferenceName2) && !resMaintenance.data.data.some(Item2 => Item2.ReferenceName === row._id && Item2._id === row.ReferenceName));
          setInvoice(newData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetch() {
        return _ref1.apply(this, arguments);
      };
    }();
    handleFetch();
  }, []);
  var handleClear = () => {
    setReference(null);
    SetItemsQtyArray([]);
  };
  {/** Item Change Start */}
  var handleChange = (e, idRow) => {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var list = [...itemsQtyArray];
    var i = itemsQtyArray.findIndex(Item => Item.idRow === idRow);
    list[i][name] = value;
    list[i]['totalAmountUSD'] = Math.round(list[i]['qtyBuy'] * list[i]['itemRate'] * 100) / 100;
    list[i]['fcConvertToUsd'] = Math.round(list[i]['totalAmountFC'] / list[i]['Taux'] * 100) / 100;
    list[i]['fcConvertToUsdTotal'] = Math.round((parseFloat(list[i]['fcConvertToUsd']) + parseFloat(list[i]['totalAmount'])) * 100) / 100;
    SetItemsQtyArray(list);
  };
  var handleShowAutocomplete = idRow => {
    SetItemsQtyArray(itemsQtyArray => itemsQtyArray.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: null,
        itemName: null
      }
    }) : row));
  };
  var handleShowAutocompleteDescription = idRow => {
    SetItemsQtyArray(itemsQtyArray => itemsQtyArray.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        itemName: 'empty'
      }
    }) : row));
  };
  var addItem = () => {
    SetItemsQtyArray([...itemsQtyArray, {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_37__["default"])(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      qtyBuy: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0,
      stock: 0
    }]);
  };
  var addItemRow = i => {
    var newItem = {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_37__["default"])(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      qtyBuy: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0,
      stock: 0
    };
    var update = [...itemsQtyArray];
    update.splice(i + 1, 0, newItem);
    SetItemsQtyArray(update);
  };
  var addItemWhiteRow = i => {
    var newItem = {
      newDescription: "",
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_37__["default"])(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      qtyBuy: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0,
      stock: 0
    };
    var update = [...itemsQtyArray];
    update.splice(i + 1, 0, newItem);
    SetItemsQtyArray(update);
  };
  var addItemWhite = () => {
    SetItemsQtyArray([...itemsQtyArray, {
      newDescription: "",
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_37__["default"])(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      qtyBuy: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0,
      stock: 0
    }]);
  };
  var handleChangeItem = (idRow, newValue) => {
    var selectedOptions = newValue;
    SetItemsQtyArray(itemsQtyArray => itemsQtyArray.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
        itemName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemName
      },
      data: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.data,
      contentType: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.contentType,
      itemRate: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemCostPrice,
      itemDescription: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemDescription,
      stock: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemQuantity
    }) : row));
  };
  var handleDragEnd = result => {
    if (!result.destination) {
      return;
    }
    var newItems = [...itemsQtyArray];
    var _newItems$splice = newItems.splice(result.source.index, 1),
      _newItems$splice2 = _slicedToArray(_newItems$splice, 1),
      removed = _newItems$splice2[0];
    newItems.splice(result.destination.index, 0, removed);
    SetItemsQtyArray(newItems);
  };
  var deleteItem = idRow => {
    SetItemsQtyArray(itemsQtyArray => itemsQtyArray.filter(Item => Item.idRow !== idRow));
  };
  var filteredArray = itemsQtyArray.filter(row => row.qtyBuy === 0);
  var filterItemInformation = ItemInformation.filter(option => !itemsQtyArray.find(row => {
    var _row$itemName;
    return option._id === ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName._id) && option.typeItem === "Goods";
  }));
  var amount = itemsQtyArray.length > 0 ? itemsQtyArray.reduce((sum, row) => sum + row.total, 0) : 0;
  var totalUSD = itemsQtyArray.length > 0 ? itemsQtyArray.reduce((sum, row) => sum + parseFloat(row.fcConvertToUsdTotal), 0) : 0;
  var total = itemsQtyArray.length > 0 ? itemsQtyArray.reduce((sum, row) => sum + parseFloat(row.totalAmount), 0) : 0;
  var totalFC = itemsQtyArray.length > 0 ? itemsQtyArray.reduce((sum, row) => sum + parseFloat(row.totalAmountFC), 0) : 0;
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    openBack = _useState36[0],
    setOpenBack = _useState36[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    open2 = _useState38[0],
    setOpen2 = _useState38[1];
  var handleOpenUpdateReason = e => {
    e.preventDefault();
    setOpen2(true);
  };
  var handleCloseUpdateReason = () => {
    setOpen2(false);
  };
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    loading = _useState40[0],
    setLoading = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    loadingOpenModal = _useState42[0],
    setLoadingOpenModal = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    loadingOpenModalUpdate = _useState44[0],
    setLoadingOpenModalUpdate = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    ErrorOpenModal = _useState46[0],
    setErrorOpenModal = _useState46[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleOpenUpdate = () => {
    setLoadingOpenModalUpdate(true);
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
    navigate(-1);
  };
  var handleCloseUpdate = () => {
    setLoadingOpenModalUpdate(false);
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
    var _ref10 = _asyncToGenerator(function* () {
      var data = {
        idInfo: id,
        person: user.data.userName + ' Modify ' + ' PO-' + String(outNumber).padStart(6, '0'),
        reason: reason2,
        dateNotification: new Date()
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/create-notification/"), data);
        if (res) {
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleCreateComment() {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var itemsWithoutData = itemsQtyArray.map(_ref12 => {
        var data = _ref12.data,
          contentType = _ref12.contentType,
          rest = _objectWithoutProperties(_ref12, _excluded4);
        return rest;
      });
      var data = {
        itemOutDate,
        reason,
        manufacturer,
        manufacturerNumber,
        description,
        itemsQtyArray: itemsWithoutData,
        reference,
        totalUSD,
        total,
        totalFC
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/update-purchaseOrder/").concat(id), data);
        if (res) {
          // Open Loading View
          handleCreateComment();
          handleOpen();
        } else {
          alert('An Error as Occur');
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmit(_x) {
      return _ref11.apply(this, arguments);
    };
  }();
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState48 = _slicedToArray(_useState47, 2),
    outNumber1 = _useState48[0],
    setOutNumber1 = _useState48[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        try {
          var _resItemOut$data, _resItemOut$data2;
          var resItemOut = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-last-saved-purchaseOrder"));
          setOutNumber1(parseInt(((_resItemOut$data = resItemOut.data) === null || _resItemOut$data === void 0 || (_resItemOut$data = _resItemOut$data.data) === null || _resItemOut$data === void 0 ? void 0 : _resItemOut$data.outNumber) || ((_resItemOut$data2 = resItemOut.data) === null || _resItemOut$data2 === void 0 ? void 0 : _resItemOut$data2.outNumber) || 0) + 1);
        } catch (error) {
          setOutNumber(1);
        }
      });
      return function fetchNumber() {
        return _ref13.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, []);
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: 'PO-' + String(ReferenceInfoNumber).padStart(6, '0') + ' For ' + reference.referenceName,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2, _x3) {
      return _ref14.apply(this, arguments);
    };
  }();
  var handleSubmitClone = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        outNumber: outNumber1,
        status: 'Open',
        itemOutDate: new Date(),
        manufacturer,
        manufacturerNumber,
        Converted: false,
        reason,
        description,
        itemsQtyArray: filteredArray,
        reference,
        Create: {
          person: user.data.userName,
          dateComment: dayjs__WEBPACK_IMPORTED_MODULE_44___default()(itemOutDate).format('DD/MM/YYYY')
        },
        totalUSD,
        total,
        totalFC
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/create-purchaseOrder"), data);
        if (res) {
          // Open Loading View
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.outNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
          navigate("/ConvertPoToIP/".concat(id));
        } else {
          alert('An Error as Occur');
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmitClone(_x4) {
      return _ref15.apply(this, arguments);
    };
  }();
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    sideBar = _React$useState8[0],
    setSideBar = _React$useState8[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState50 = _slicedToArray(_useState49, 2),
    search2 = _useState50[0],
    setSearch2 = _useState50[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => search2 !== '' ? itemsQtyArray.filter(Item => Item.itemName && Item.itemName.itemName.toLowerCase().includes(search2.toLowerCase()) || Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) || Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase())) : itemsQtyArray, [itemsQtyArray, search2]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_26__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_30__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Make Update Purchase Order"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_45__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_56__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_55__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_51__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_31__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_28__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SideMaintenance2__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_29__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleOpenUpdateReason
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_10__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_41__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_42__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_40__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_43__.DatePicker, {
    required: true,
    name: "itemOutDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_44___default()(itemOutDate),
    onChange: date => setItemOutDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "manufacturer",
    name: "manufacturer",
    label: "Manufacturer",
    value: manufacturer !== undefined ? manufacturer : '',
    onChange: e => setManufacturer(e.target.value.toUpperCase()),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "manufacturerNumber",
    name: "manufacturerNumber",
    label: "Reference ",
    value: manufacturerNumber !== undefined ? manufacturerNumber : '',
    onChange: e => setManufacturerNumber(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "reason"
  }, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    id: "reason",
    value: reason,
    name: "reason",
    disabled: true,
    label: "Reason"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Project"
  }, "Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Maintenance"
  }, "Maintenance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Invoice"
  }, "Direct-Invoice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Other"
  }, "Other")))), reason !== 'Project' ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    multiline: true,
    disabled: true,
    label: "Project Name",
    rows: 2,
    value: reference.referenceName,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), reason !== 'Maintenance' ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    multiline: true,
    disabled: true,
    label: "Maintenance Name",
    rows: 2,
    value: reference.referenceName,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), reason !== 'Invoice' ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    multiline: true,
    disabled: true,
    label: "Invoice",
    rows: 2,
    value: reference.referenceName,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "description",
    name: "description",
    value: description,
    label: "Description",
    multiline: true,
    rows: 2,
    onChange: e => setDescription(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: "Search",
    id: "search2",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'block',
      position: 'fixed',
      zIndex: 1,
      float: 'right',
      right: '-5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: addItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: addItemWhite
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
    className: "btn1",
    style: {
      backgroundColor: 'gray',
      fontSize: '40px'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "center"
  }, "itemName"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "center"
  }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "center"
  }, "Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "center"
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), newArray2.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => {
    var _Item$itemName;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      required: true,
      name: "newDescription",
      id: "newDescription",
      value: Item.newDescription,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100%',
        backgroundColor: 'white',
        fontSize: 12
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
      title: "Delete",
      sx: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => deleteItem(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        height: '100px'
      }
    }, Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_58__["default"], {
      itemId: (_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName._id,
      initialData: Item.data,
      initialType: Item.contentType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      hidden: Item.itemName ? Item.itemName.itemName === 'empty' : '',
      sx: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    }, Item.itemName ? Item.itemName.itemName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "itemDescription",
      id: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      rows: 3,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '250px',
        backgroundColor: 'white',
        fontSize: 12
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => handleShowAutocomplete(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      disableClearable: true,
      options: filterItemInformation,
      getOptionLabel: option => option.itemName + '/' + option.itemBrand,
      renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
        sx: {
          backgroundColor: '#f2f2f2'
        }
      }), option.itemName + '/' + option.itemBrand),
      renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({
        multiline: true,
        rows: 4
      }, params, {
        required: true
      })),
      inputValue: inputValue,
      onInputChange: (event, newInputValue) => {
        setInputValue(newInputValue);
      },
      filterOptions: (options, _ref16) => {
        var inputValue = _ref16.inputValue;
        return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
      },
      onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
      size: "small",
      sx: {
        width: '300px',
        backgroundColor: 'white'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => handleShowAutocompleteDescription(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "itemQty",
      id: "itemQty",
      onChange: e => handleChange(e, Item.idRow),
      helperText: 'Stock: ' + Item.stock,
      size: "small",
      value: Item.itemQty,
      sx: {
        width: '100px',
        backgroundColor: 'white',
        marginTop: '22px'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "qtyBuy",
      id: "qtyBuy",
      onChange: e => handleChange(e, Item.idRow),
      value: Item.qtyBuy,
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      required: true,
      name: "itemRate",
      id: "itemRate",
      value: Item.itemRate !== undefined ? Item.itemRate : 0,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      required: true,
      name: "totalAmountFC",
      id: "totalAmountFC",
      value: Item.totalAmountFC !== undefined ? Item.totalAmountFC : 0,
      label: "FC",
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      required: true,
      name: "Taux",
      id: "Taux",
      value: Item.Taux !== undefined ? Item.Taux : 0,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      required: true,
      name: "totalAmount",
      id: "totalAmount",
      value: Item.totalAmount !== undefined ? Item.totalAmount : 0,
      label: "$",
      size: "small",
      onChange: e => handleChange(e, Item.idRow),
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Cost USD: ", Item.totalAmountUSD !== undefined ? Item.totalAmountUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "amountTotalInvoice"
    }, Item.fcConvertToUsdTotal !== undefined ? Item.fcConvertToUsdTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      align: "center"
    }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => deleteItem(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))));
  })), provided.placeholder)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "totalFC",
    size: "small",
    label: "Amount Fc",
    value: totalFC !== undefined ? totalFC : 0,
    sx: {
      width: '150px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, "FC")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "total",
    size: "small",
    label: "Amount $",
    value: total !== undefined ? total : 0,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "totalUSD",
    size: "small",
    label: "Total USD",
    value: totalUSD !== undefined ? totalUSD : 0,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, "$")
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: openBack,
    onClose: handleCloseBack,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Do you want to stop making item out ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop making item out without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate(-1),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handleCloseBack,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 600
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_48__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, filteredArray.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Data Saved successfully,Do you want to convert to an Item Purchase ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " You should convert the PO order to an IP when it is Purchase")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDecision('previous'),
    className: "btnCustomer"
  }, "Later")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_38__.NavLink, {
    to: "/ConvertPoToIP/".concat(id),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer"
  }, "Convert"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleSubmitClone,
    className: "btnCustomer"
  }, "Convert & Clone ")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__["default"], {
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
    onClick: () => navigate(-1),
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_48__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_47__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: 'red'
    }
  }, "Saving Failed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: loadingOpenModalUpdate,
    onClose: handleCloseUpdate,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_48__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__["default"], {
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
    onClick: handleCloseUpdate,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: open2,
    onClose: handleCloseUpdateReason,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleCloseUpdateReason,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Reason Of Updating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    id: "reason",
    name: "reason",
    multiline: true,
    rows: 4,
    value: reason2,
    onChange: e => setReason2(e.target.value),
    label: "Comments",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchaseUpdateOrder);

/***/ },

/***/ "./src/js/component/ItemThumbnail.js"
/*!*******************************************!*\
  !*** ./src/js/component/ItemThumbnail.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_icons_material_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/ShoppingCartOutlined */ "./node_modules/@mui/icons-material/ShoppingCartOutlined.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;




var ItemThumbnail = _ref => {
  var itemId = _ref.itemId,
    initialData = _ref.initialData,
    initialType = _ref.initialType;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    src = _useState2[0],
    setSrc = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchImage = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* () {
        // 1. Check for initialData (passed from search/shop)
        if (initialData && initialType && initialData !== "undefined" && initialType !== "undefined" && initialData !== "null") {
          if (typeof initialData === 'string' && initialData.length > 50) {
            // Check if it's already a data URL
            if (initialData.startsWith('data:')) {
              setSrc(initialData);
            } else {
              setSrc("data:".concat(initialType, ";base64,").concat(initialData));
            }
            return;
          } else if (initialData.data) {
            // Handle buffer object if it's not converted to string yet
            var buffer = new Uint8Array(initialData.data);
            var blob = new Blob([buffer], {
              type: initialType
            });
            var reader = new FileReader();
            reader.onloadend = () => setSrc(reader.result);
            reader.readAsDataURL(blob);
            return;
          }
        }

        // 2. Fallback to fetch if no initial data or if it was invalid
        if (!itemId || itemId === "undefined" || itemId === "null") {
          setSrc(null);
          return;
        }
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_4__.ENDPOINT_URL, "/get-item/").concat(itemId));
          if (res.data.data && res.data.data.data) {
            var _buffer = new Uint8Array(res.data.data.data.data);
            var _blob = new Blob([_buffer], {
              type: res.data.data.contentType
            });
            var _reader = new FileReader();
            _reader.onloadend = () => setSrc(_reader.result);
            _reader.readAsDataURL(_blob);
          } else {
            setSrc(null);
          }
        } catch (err) {
          console.error("Error fetching online image:", err);
          setSrc(null);
        }
      });
      return function fetchImage() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchImage();
  }, [itemId, initialData, initialType]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "rounded",
    src: src,
    sx: {
      width: 80,
      height: 80,
      backgroundColor: '#f0f0f0',
      border: '1px solid #ddd'
    }
  }, !src && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: 40,
      color: '#999'
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemThumbnail);

/***/ },

/***/ "./src/js/component/SideMaintenance2.js"
/*!**********************************************!*\
  !*** ./src/js/component/SideMaintenance2.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_SidebarNew_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/SidebarNew.scss */ "./src/js/css/SidebarNew.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/InventoryOutlined.js");
/* harmony import */ var _mui_icons_material_Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Store */ "./node_modules/@mui/icons-material/Store.js");
/* harmony import */ var _mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ListAlt */ "./node_modules/@mui/icons-material/ListAlt.js");
/* harmony import */ var _mui_icons_material_PostAdd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/PostAdd */ "./node_modules/@mui/icons-material/PostAdd.js");
/* harmony import */ var _mui_icons_material_ContentPasteGo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ContentPasteGo */ "./node_modules/@mui/icons-material/ContentPasteGo.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");














function SideMaintenance2() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Item"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ContentPasteGo__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Item Out"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_PostAdd__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Item Return"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Store__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Item Purchase"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Purchase Order"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideMaintenance2);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUHVyY2hhc2VPcmRlcl9QdXJjaGFzZVVwZGF0ZU9yZGVyX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLDBCQUEwQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04zQixDQUE0RDtBQUNPO0FBQzNDO0FBQ0U7QUFDMEI7QUFDc0I7QUFDUjtBQUNkO0FBQ3VQO0FBQzNPO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNRO0FBQ0E7QUFDYztBQUNJO0FBQ3pDO0FBQ2lGO0FBQ3hEO0FBQ1c7QUFDbkM7QUFDeUM7QUFDQTtBQUNhO0FBQ2hCO0FBQ0o7QUFDbEM7QUFDNEI7QUFDUTtBQUNWO0FBQ0w7QUFDUTtBQUMrQjtBQUN0QztBQUNrQjtBQUNwQjtBQUNRO0FBQ0E7QUFDUTtBQUNjO0FBRUk7QUFDbkI7QUFFN0QsSUFBTW9GLFlBQVksR0FBR2xFLDBEQUFNLENBQUNtRSxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDaER6RiwwREFBQSxDQUFDa0MsOERBQU8sRUFBQXlELFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxLQUFBLENBQUxDLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBTzdELDhEQUFjLENBQUM4RCxPQUFPLElBQUs7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VyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ25HLDBEQUFBLENBQUM2akIscURBQVk7SUFBQ3pILEVBQUUsRUFBRTtNQUFFalcsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbENuRywwREFBQSxDQUFDaWpCLDJEQUFpQixNQUFFLENBQ1IsQ0FBQyxlQUNmampCLDBEQUFBLENBQUM4akIsc0RBQVk7SUFBQ0UsT0FBTyxFQUFDO0VBQWdCLENBQUUsQ0FDMUIsQ0FBQyxlQUNqQmhrQiwwREFBQSxDQUFDNGlCLG9EQUFNLE1BQVMsQ0FDaEIsQ0FBQztBQUVQO0FBRUEsaUVBQWV4aUIsZ0JBQWdCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0RyYWdJbmRpY2F0b3JSb3VuZGVkLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9QdXJjaGFzZU9yZGVyL1B1cmNoYXNlVXBkYXRlT3JkZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvSXRlbVRodW1ibmFpbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9TaWRlTWFpbnRlbmFuY2UyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTExIDE4YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tMi04Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMm0wLTZjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTYgNGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJtMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMm0wIDZjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yXCJcbn0pLCAnRHJhZ0luZGljYXRvclJvdW5kZWQnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGVNYWludGVuYW5jZTIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGVNYWludGVuYW5jZTInO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgUGFwZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgc3R5bGVkLCBCb3gsIEF1dG9jb21wbGV0ZSwgTW9kYWwsIEJhY2tkcm9wLCBUYWJsZUNvbnRhaW5lciwgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIERpdmlkZXIsIENoZWNrYm94LCBGb3JtQ29udHJvbExhYmVsLCBDYXJkLCBDYXJkTWVkaWEsIENhcmRDb250ZW50LCBQYWdpbmF0aW9uLCBBdmF0YXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkLCBEcmFnSW5kaWNhdG9yUm91bmRlZCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBEcmF3ZXIgYXMgU2lkZURyYXdlciwgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IE5hdkxpbmssIHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgRGVtb0NvbnRhaW5lciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvaW50ZXJuYWxzL2RlbW8nO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvTG9jYWxpemF0aW9uUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBBZGFwdGVyRGF5anMgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0FkYXB0ZXJEYXlqcyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0RhdGVQaWNrZXInO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgQ3VzdG9tZXJGb3JtVmlldzIgZnJvbSAnLi4vQ3VzdG9tZXJWSWV3L0N1c3RvbWVyRm9ybVZpZXcyJztcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgSXRlbUZvcm1WaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtRm9ybVZpZXcyJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5cclxuaW1wb3J0IFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Nob3BwaW5nQ2FydE91dGxpbmVkJztcclxuaW1wb3J0IEl0ZW1UaHVtYm5haWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0l0ZW1UaHVtYm5haWwnO1xyXG5cclxuY29uc3QgTGlnaHRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQmxhY2tUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgVmlld1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IHN0eWxlMiA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDgwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcblxyXG5mdW5jdGlvbiBQdXJjaGFzZVVwZGF0ZU9yZGVyKCkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtcywgU2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpdGVtc1F0eUFycmF5LCBTZXRJdGVtc1F0eUFycmF5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttYWludGVuYW5jZSwgc2V0TWFpbnRlbmFuY2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbnZvaWNlLCBzZXRJbnZvaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VydmljZU51bWJlciwgc2V0U2VydmljZU51bWJlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3Byb2plY3ROYW1lLCBzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2ludm9pY2VOYW1lLCBzZXRJbnZvaWNlTmFtZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2lucHV0VmFsdWUyLCBzZXRJbnB1dFZhbHVlMl0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lucHV0VmFsdWVQcm9qZWN0LCBzZXRJbnB1dFZhbHVlUHJvamVjdF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW291dE51bWJlciwgc2V0T3V0TnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyZWFzb24yLCBzZXRSZWFzb24yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtJdGVtSW5mb3JtYXRpb24sIHNldEl0ZW1JbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlZmVyZW5jZSwgc2V0UmVmZXJlbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXRlbU91dERhdGUsIHNldEl0ZW1PdXREYXRlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICByZXR1cm4gZGF5anMoZGF0ZSlcclxuICB9KTtcclxuICBjb25zdCBbbWFudWZhY3R1cmVyLCBzZXRNYW51ZmFjdHVyZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21hbnVmYWN0dXJlck51bWJlciwgc2V0TWFudWZhY3R1cmVyTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LXB1cmNoYXNlT3JkZXIvJHtpZH1gKVxyXG4gICAgICAgIHNldE91dE51bWJlcihOdW1iZXIocmVzLmRhdGE/LmRhdGE/Lm91dE51bWJlciB8fCByZXMuZGF0YT8ub3V0TnVtYmVyIHx8IDApKTtcclxuICAgICAgICBzZXRJdGVtT3V0RGF0ZShyZXMuZGF0YS5kYXRhLml0ZW1PdXREYXRlKTtcclxuICAgICAgICBzZXRSZWFzb24ocmVzLmRhdGEuZGF0YS5yZWFzb24pO1xyXG4gICAgICAgIHNldERlc2NyaXB0aW9uKHJlcy5kYXRhLmRhdGEuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIFNldEl0ZW1zUXR5QXJyYXkocmVzLmRhdGEuZGF0YS5pdGVtc1F0eUFycmF5KTtcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihyZXMuZGF0YS5kYXRhLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICBzZXRSZWZlcmVuY2UocmVzLmRhdGEuZGF0YS5yZWZlcmVuY2UpO1xyXG4gICAgICAgIHNldE1hbnVmYWN0dXJlcihyZXMuZGF0YS5kYXRhLm1hbnVmYWN0dXJlcik7XHJcbiAgICAgICAgc2V0TWFudWZhY3R1cmVyTnVtYmVyKHJlcy5kYXRhPy5kYXRhPy5tYW51ZmFjdHVyZXJOdW1iZXIgfHwgcmVzLmRhdGE/Lm1hbnVmYWN0dXJlck51bWJlciB8fCBcIlwiKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbaWRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlRmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzSXRlbSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1gKVxyXG4gICAgICAgIHNldEl0ZW1JbmZvcm1hdGlvbihyZXNJdGVtLmRhdGEuZGF0YS5yZXZlcnNlKCkpXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcmF0ZWApXHJcbiAgICAgICAgcmVzLmRhdGEuZGF0YS5tYXAoKHJvdykgPT4gc2V0UmF0ZShyb3cucmF0ZSkpXHJcbiAgICAgICAgY29uc3QgcmVzUHVyY2hhc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wdXJjaGFzZT9zdW1tYXJ5PXRydWVgKVxyXG4gICAgICAgIGNvbnN0IHJlc1Byb2plY3QgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wcm9qZWN0c2ApXHJcbiAgICAgICAgc2V0UHJvamVjdChyZXNQcm9qZWN0LmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByZXNQdXJjaGFzZS5kYXRhPy5kYXRhPy5maW5kKChJdGVtKSA9PiBJdGVtLnByb2plY3ROYW1lLl9pZCA9PT0gcm93Ll9pZCAmJiBJdGVtLml0ZW1zLnNvbWUoKEl0ZW0xKSA9PiBJdGVtMS5pdGVtUXR5ID4gSXRlbTEuaXRlbU91dCkpKS5yZXZlcnNlKCkpO1xyXG4gICAgICAgIGNvbnN0IHJlc01haW50ZW5hbmNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vbWFpbnRlbmFuY2U/c3VtbWFyeT10cnVlYClcclxuICAgICAgICBzZXRNYWludGVuYW5jZShyZXNNYWludGVuYW5jZS5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93Lml0ZW1zLnNvbWUoKEl0ZW0pID0+IEl0ZW0uaXRlbVF0eSA+IEl0ZW0uaXRlbU91dCkpKTtcclxuICAgICAgICBjb25zdCByZXNJbnZvaWNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaW52b2ljZT9zdW1tYXJ5PXRydWVgKVxyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXNJbnZvaWNlLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuaXRlbXMuc29tZSgoSXRlbSkgPT4gSXRlbS5pdGVtUXR5ID4gSXRlbS5pdGVtT3V0KSAmJiAhcmVzUHVyY2hhc2UuZGF0YS5kYXRhLnNvbWUoKEl0ZW0pID0+IEl0ZW0uX2lkID09PSByb3cuUmVmZXJlbmNlTmFtZTIpICYmICFyZXNNYWludGVuYW5jZS5kYXRhLmRhdGEuc29tZSgoSXRlbTIpID0+IEl0ZW0yLlJlZmVyZW5jZU5hbWUgPT09IHJvdy5faWQgJiYgSXRlbTIuX2lkID09PSByb3cuUmVmZXJlbmNlTmFtZSkpXHJcbiAgICAgICAgc2V0SW52b2ljZShuZXdEYXRhKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVGZXRjaCgpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgc2V0UmVmZXJlbmNlKG51bGwpO1xyXG4gICAgU2V0SXRlbXNRdHlBcnJheShbXSlcclxuICB9XHJcbiAgey8qKiBJdGVtIENoYW5nZSBTdGFydCAqLyB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIGlkUm93KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGxpc3QgPSBbLi4uaXRlbXNRdHlBcnJheV1cclxuICAgIGNvbnN0IGkgPSBpdGVtc1F0eUFycmF5LmZpbmRJbmRleChJdGVtID0+IEl0ZW0uaWRSb3cgPT09IGlkUm93KVxyXG4gICAgbGlzdFtpXVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgbGlzdFtpXVsndG90YWxBbW91bnRVU0QnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ3F0eUJ1eSddICogbGlzdFtpXVsnaXRlbVJhdGUnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnZmNDb252ZXJ0VG9Vc2QnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ3RvdGFsQW1vdW50RkMnXSAvIGxpc3RbaV1bJ1RhdXgnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnZmNDb252ZXJ0VG9Vc2RUb3RhbCddID0gTWF0aC5yb3VuZCgocGFyc2VGbG9hdChsaXN0W2ldWydmY0NvbnZlcnRUb1VzZCddKSArIHBhcnNlRmxvYXQobGlzdFtpXVsndG90YWxBbW91bnQnXSkpICogMTAwKSAvIDEwMDtcclxuICAgIFNldEl0ZW1zUXR5QXJyYXkobGlzdCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlID0gKGlkUm93KSA9PiB7XHJcbiAgICBTZXRJdGVtc1F0eUFycmF5KGl0ZW1zUXR5QXJyYXkgPT4gaXRlbXNRdHlBcnJheS5tYXAoKHJvdykgPT4gcm93LmlkUm93ID09PSBpZFJvdyA/IHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogbnVsbCxcclxuICAgICAgICBpdGVtTmFtZTogbnVsbFxyXG4gICAgICB9LFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbiA9IChpZFJvdykgPT4ge1xyXG4gICAgU2V0SXRlbXNRdHlBcnJheShpdGVtc1F0eUFycmF5ID0+IGl0ZW1zUXR5QXJyYXkubWFwKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBpdGVtTmFtZTogJ2VtcHR5J1xyXG4gICAgICB9LFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW0gPSAoKSA9PiB7XHJcbiAgICBTZXRJdGVtc1F0eUFycmF5KFsuLi5pdGVtc1F0eUFycmF5LCB7XHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogXCJcIixcclxuICAgICAgICBpdGVtTmFtZTogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBUYXV4OiByYXRlLFxyXG4gICAgICBxdHlCdXk6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50VVNEOiAwLFxyXG4gICAgICBmY0NvbnZlcnRUb1VzZDogMCxcclxuICAgICAgZmNDb252ZXJ0VG9Vc2RUb3RhbDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50RkM6IDAsXHJcbiAgICAgIHN0b2NrOiAwXHJcbiAgICB9XSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1Sb3cgPSAoaSkgPT4ge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIFRhdXg6IHJhdGUsXHJcbiAgICAgIHF0eUJ1eTogMCxcclxuICAgICAgdG90YWxBbW91bnRVU0Q6IDAsXHJcbiAgICAgIGZjQ29udmVydFRvVXNkOiAwLFxyXG4gICAgICBmY0NvbnZlcnRUb1VzZFRvdGFsOiAwLFxyXG4gICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgdG90YWxBbW91bnRGQzogMCxcclxuICAgICAgc3RvY2s6IDBcclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZSA9IFsuLi5pdGVtc1F0eUFycmF5XTtcclxuICAgIHVwZGF0ZS5zcGxpY2UoaSArIDEsIDAsIG5ld0l0ZW0pO1xyXG4gICAgU2V0SXRlbXNRdHlBcnJheSh1cGRhdGUpXHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1XaGl0ZVJvdyA9IChpKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICBuZXdEZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIFRhdXg6IHJhdGUsXHJcbiAgICAgIHF0eUJ1eTogMCxcclxuICAgICAgdG90YWxBbW91bnRVU0Q6IDAsXHJcbiAgICAgIGZjQ29udmVydFRvVXNkOiAwLFxyXG4gICAgICBmY0NvbnZlcnRUb1VzZFRvdGFsOiAwLFxyXG4gICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgdG90YWxBbW91bnRGQzogMCxcclxuICAgICAgc3RvY2s6IDBcclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZSA9IFsuLi5pdGVtc1F0eUFycmF5XTtcclxuICAgIHVwZGF0ZS5zcGxpY2UoaSArIDEsIDAsIG5ld0l0ZW0pO1xyXG4gICAgU2V0SXRlbXNRdHlBcnJheSh1cGRhdGUpXHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1XaGl0ZSA9ICgpID0+IHtcclxuICAgIFNldEl0ZW1zUXR5QXJyYXkoWy4uLml0ZW1zUXR5QXJyYXksIHtcclxuICAgICAgbmV3RGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogXCJcIixcclxuICAgICAgICBpdGVtTmFtZTogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBUYXV4OiByYXRlLFxyXG4gICAgICBxdHlCdXk6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50VVNEOiAwLFxyXG4gICAgICBmY0NvbnZlcnRUb1VzZDogMCxcclxuICAgICAgZmNDb252ZXJ0VG9Vc2RUb3RhbDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50RkM6IDAsXHJcbiAgICAgIHN0b2NrOiAwXHJcbiAgICB9XSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUl0ZW0gPSAoaWRSb3csIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBuZXdWYWx1ZVxyXG4gICAgU2V0SXRlbXNRdHlBcnJheShpdGVtc1F0eUFycmF5ID0+IGl0ZW1zUXR5QXJyYXkubWFwKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1OYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhOiBzZWxlY3RlZE9wdGlvbnM/LmRhdGEsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBzZWxlY3RlZE9wdGlvbnM/LmNvbnRlbnRUeXBlLFxyXG4gICAgICBpdGVtUmF0ZTogc2VsZWN0ZWRPcHRpb25zPy5pdGVtQ29zdFByaWNlLFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IHNlbGVjdGVkT3B0aW9ucz8uaXRlbURlc2NyaXB0aW9uLFxyXG4gICAgICBzdG9jazogc2VsZWN0ZWRPcHRpb25zPy5pdGVtUXVhbnRpdHksXHJcbiAgICB9IDogcm93KSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChyZXN1bHQpID0+IHtcclxuICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0l0ZW1zID0gWy4uLml0ZW1zUXR5QXJyYXldO1xyXG4gICAgY29uc3QgW3JlbW92ZWRdID0gbmV3SXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xyXG4gICAgbmV3SXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVtb3ZlZCk7XHJcbiAgICBTZXRJdGVtc1F0eUFycmF5KG5ld0l0ZW1zKVxyXG4gIH07XHJcbiAgY29uc3QgZGVsZXRlSXRlbSA9IGlkUm93ID0+IHtcclxuICAgIFNldEl0ZW1zUXR5QXJyYXkoaXRlbXNRdHlBcnJheSA9PiBpdGVtc1F0eUFycmF5LmZpbHRlcigoSXRlbSkgPT4gSXRlbS5pZFJvdyAhPT0gaWRSb3cpKTtcclxuICB9O1xyXG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBpdGVtc1F0eUFycmF5LmZpbHRlcigocm93KSA9PiByb3cucXR5QnV5ID09PSAwKVxyXG5cclxuICBjb25zdCBmaWx0ZXJJdGVtSW5mb3JtYXRpb24gPSBJdGVtSW5mb3JtYXRpb24uZmlsdGVyKG9wdGlvbiA9PiAhaXRlbXNRdHlBcnJheS5maW5kKChyb3cpID0+IG9wdGlvbi5faWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkICYmIG9wdGlvbi50eXBlSXRlbSA9PT0gXCJHb29kc1wiKSlcclxuXHJcbiAgY29uc3QgYW1vdW50ID0gaXRlbXNRdHlBcnJheS5sZW5ndGggPiAwID8gaXRlbXNRdHlBcnJheS5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyByb3cudG90YWwsIDApIDogMFxyXG5cclxuICBjb25zdCB0b3RhbFVTRCA9IGl0ZW1zUXR5QXJyYXkubGVuZ3RoID4gMCA/IGl0ZW1zUXR5QXJyYXkucmVkdWNlKChzdW0sIHJvdykgPT4gc3VtICsgcGFyc2VGbG9hdChyb3cuZmNDb252ZXJ0VG9Vc2RUb3RhbCksIDApIDogMFxyXG4gIGNvbnN0IHRvdGFsID0gaXRlbXNRdHlBcnJheS5sZW5ndGggPiAwID8gaXRlbXNRdHlBcnJheS5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyBwYXJzZUZsb2F0KHJvdy50b3RhbEFtb3VudCksIDApIDogMFxyXG4gIGNvbnN0IHRvdGFsRkMgPSBpdGVtc1F0eUFycmF5Lmxlbmd0aCA+IDAgPyBpdGVtc1F0eUFycmF5LnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHBhcnNlRmxvYXQocm93LnRvdGFsQW1vdW50RkMpLCAwKSA6IDBcclxuXHJcbiAgY29uc3QgW29wZW5CYWNrLCBzZXRPcGVuQmFja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbkJhY2sodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQmFjayhmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbb3BlbjIsIHNldE9wZW4yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZVJlYXNvbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW4yKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGVSZWFzb24gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbFVwZGF0ZSwgc2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWxVcGRhdGUodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICBuYXZpZ2F0ZSgtMSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZShmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlY2lzaW9uID0gKG5hdmlnYXRlKSA9PiB7XHJcbiAgICAvL05hdmlnYXRlIEJhc2VkIG9uIHRoIERlY2lzaW9uXHJcbiAgICBpZiAobmF2aWdhdGUgPT09ICdwcmV2aW91cycpIHtcclxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0ZSA9PT0gJ3N0YXknKSB7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBpZCxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIE1vZGlmeSAnICsgJyBQTy0nICsgU3RyaW5nKG91dE51bWJlcikucGFkU3RhcnQoNiwgJzAnKSxcclxuICAgICAgcmVhc29uOiByZWFzb24yLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb24vYCwgZGF0YSlcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGl0ZW1zV2l0aG91dERhdGEgPSBpdGVtc1F0eUFycmF5Lm1hcCgoeyBkYXRhLCBjb250ZW50VHlwZSwgLi4ucmVzdCB9KSA9PiByZXN0KTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGl0ZW1PdXREYXRlLFxyXG4gICAgICByZWFzb24sXHJcbiAgICAgIG1hbnVmYWN0dXJlcixcclxuICAgICAgbWFudWZhY3R1cmVyTnVtYmVyLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgaXRlbXNRdHlBcnJheTogaXRlbXNXaXRob3V0RGF0YSxcclxuICAgICAgcmVmZXJlbmNlLCB0b3RhbFVTRCwgdG90YWwsIHRvdGFsRkNcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtcHVyY2hhc2VPcmRlci8ke2lkfWAsIGRhdGEpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgLy8gT3BlbiBMb2FkaW5nIFZpZXdcclxuICAgICAgICBoYW5kbGVDcmVhdGVDb21tZW50KClcclxuICAgICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ0FuIEVycm9yIGFzIE9jY3VyJyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW291dE51bWJlcjEsIHNldE91dE51bWJlcjFdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc0l0ZW1PdXQgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbGFzdC1zYXZlZC1wdXJjaGFzZU9yZGVyYClcclxuICAgICAgICBzZXRPdXROdW1iZXIxKChwYXJzZUludChyZXNJdGVtT3V0LmRhdGE/LmRhdGE/Lm91dE51bWJlciB8fCByZXNJdGVtT3V0LmRhdGE/Lm91dE51bWJlciB8fCAwKSkgKyAxKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHNldE91dE51bWJlcigxKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaE51bWJlcigpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uID0gYXN5bmMgKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OdW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogUmVmZXJlbmNlSW5mbyxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIENyZWF0ZWQgJyxcclxuICAgICAgcmVhc29uOiAnUE8tJyArIFN0cmluZyhSZWZlcmVuY2VJbmZvTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyBGb3IgJyArIHJlZmVyZW5jZS5yZWZlcmVuY2VOYW1lLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0Q2xvbmUgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgb3V0TnVtYmVyOiBvdXROdW1iZXIxLFxyXG4gICAgICBzdGF0dXM6ICdPcGVuJyxcclxuICAgICAgaXRlbU91dERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgIG1hbnVmYWN0dXJlcixcclxuICAgICAgbWFudWZhY3R1cmVyTnVtYmVyLFxyXG4gICAgICBDb252ZXJ0ZWQ6IGZhbHNlLFxyXG4gICAgICByZWFzb24sXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBpdGVtc1F0eUFycmF5OiBmaWx0ZXJlZEFycmF5LFxyXG4gICAgICByZWZlcmVuY2UsIENyZWF0ZToge1xyXG4gICAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lLFxyXG4gICAgICAgIGRhdGVDb21tZW50OiBkYXlqcyhpdGVtT3V0RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJylcclxuICAgICAgfSwgdG90YWxVU0QsIHRvdGFsLCB0b3RhbEZDXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1wdXJjaGFzZU9yZGVyYCwgZGF0YSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAvLyBPcGVuIExvYWRpbmcgVmlld1xyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm8gPSByZXMuZGF0YS5kYXRhLl9pZFxyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm9OdW1iZXIgPSByZXMuZGF0YS5kYXRhLm91dE51bWJlclxyXG4gICAgICAgIGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbihSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKVxyXG4gICAgICAgIG5hdmlnYXRlKGAvQ29udmVydFBvVG9JUC8ke2lkfWApXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ0FuIEVycm9yIGFzIE9jY3VyJyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICBjb25zdCBbc2VhcmNoMiwgc2V0U2VhcmNoMl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoMiA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRTZWFyY2gyKHZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBuZXdBcnJheTIgPSB1c2VNZW1vKCgpID0+IHNlYXJjaDIgIT09ICcnID8gaXRlbXNRdHlBcnJheS5maWx0ZXIoKEl0ZW0pID0+XHJcbiAgICBJdGVtLml0ZW1OYW1lICYmIEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICBJdGVtLml0ZW1EZXNjcmlwdGlvbiAmJiBJdGVtLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDIudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIEl0ZW0ubmV3RGVzY3JpcHRpb24gJiYgSXRlbS5uZXdEZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDIudG9Mb3dlckNhc2UoKSlcclxuICApIDogaXRlbXNRdHlBcnJheSwgW2l0ZW1zUXR5QXJyYXksIHNlYXJjaDJdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuXHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTWFrZSBVcGRhdGUgUHVyY2hhc2UgT3JkZXJcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQmFja30+XHJcbiAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaWRlQmFyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNpZGVCYXIoZmFsc2UpfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZU1haW50ZW5hbmNlMiAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogNCB9fSA+XHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPcGVuVXBkYXRlUmVhc29ufT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9IGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbU91dERhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKGl0ZW1PdXREYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldEl0ZW1PdXREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdtYW51ZmFjdHVyZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdtYW51ZmFjdHVyZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTWFudWZhY3R1cmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21hbnVmYWN0dXJlciAhPT0gdW5kZWZpbmVkID8gbWFudWZhY3R1cmVyIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1hbnVmYWN0dXJlcihlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J21hbnVmYWN0dXJlck51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J21hbnVmYWN0dXJlck51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdSZWZlcmVuY2UgJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21hbnVmYWN0dXJlck51bWJlciAhPT0gdW5kZWZpbmVkID8gbWFudWZhY3R1cmVyTnVtYmVyIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1hbnVmYWN0dXJlck51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwicmVhc29uXCI+UmVhc29uPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlByb2plY3RcIj5Qcm9qZWN0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTWFpbnRlbmFuY2VcIj5NYWludGVuYW5jZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkludm9pY2VcIj5EaXJlY3QtSW52b2ljZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIk90aGVyXCI+T3RoZXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uICE9PSAnUHJvamVjdCcgPyAnJyA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1Byb2plY3QgTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWZlcmVuY2UucmVmZXJlbmNlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbiAhPT0gJ01haW50ZW5hbmNlJyA/ICcnIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdNYWludGVuYW5jZSBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlZmVyZW5jZS5yZWZlcmVuY2VOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uICE9PSAnSW52b2ljZScgPyAnJyA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSW52b2ljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWZlcmVuY2UucmVmZXJlbmNlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3NlYXJjaDInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2gyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6IDEsIGZsb2F0OiAncmlnaHQnLCByaWdodDogJy01cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkIGNsYXNzTmFtZT0nYnRuMScgc3R5bGU9e3sgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkFkZFwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW1XaGl0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkIGNsYXNzTmFtZT0nYnRuMScgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsIGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSW5mbzEwJyBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnLTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249XCJjZW50ZXJcIj5pdGVtTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj1cImNlbnRlclwiPlF0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj1cImNlbnRlclwiPkJ1eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SYXRlJDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BbW91bnQgUGFpZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBQYWlkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGFsaWduPVwiY2VudGVyXCI+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkcm9wcGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld0FycmF5Mi5tYXAoKEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtJdGVtLmlkUm93fSBkcmFnZ2FibGVJZD17YGRyb3BwYWJsZSR7SXRlbS5pZFJvd31gfSBpbmRleD17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Nn0+PFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduZXdEZXNjcmlwdGlvbicgaWQ9J25ld0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5uZXdEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+PERyYWdJbmRpY2F0b3JSb3VuZGVkIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBoZWlnaHQ6ICcxMDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtVGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JZD17SXRlbS5pdGVtTmFtZT8uX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsRGF0YT17SXRlbS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVHlwZT17SXRlbS5jb250ZW50VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGhpZGRlbj17SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPT09ICdlbXB0eScgOiAnJ30gc3g9e3sgZm9udFNpemU6ICcyMHB4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZS50b1VwcGVyQ2FzZSgpIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EZXNjcmlwdGlvbicgaWQ9J2l0ZW1EZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMjUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlckl0ZW1JbmZvcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLml0ZW1OYW1lICsgJy8nICsgb3B0aW9uLml0ZW1CcmFuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNmMmYyZjInIH19PntvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fSB7Li4ucGFyYW1zfSByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUobmV3SW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucywgeyBpbnB1dFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1CcmFuZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbURlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlSXRlbShJdGVtLmlkUm93LCBuZXdWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzMwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24oSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUXR5JyBpZD0naXRlbVF0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXsnU3RvY2s6ICcgKyBJdGVtLnN0b2NrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBtYXJnaW5Ub3A6ICcyMnB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdxdHlCdXknIGlkPSdxdHlCdXknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0ucXR5QnV5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1SYXRlJyBpZD0naXRlbVJhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVJhdGUgIT09IHVuZGVmaW5lZCA/IEl0ZW0uaXRlbVJhdGUgOiAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzEwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3RvdGFsQW1vdW50RkMnIGlkPSd0b3RhbEFtb3VudEZDJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0udG90YWxBbW91bnRGQyAhPT0gdW5kZWZpbmVkID8gSXRlbS50b3RhbEFtb3VudEZDIDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdGQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdUYXV4JyBpZD0nVGF1eCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLlRhdXggIT09IHVuZGVmaW5lZCA/IEl0ZW0uVGF1eCA6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndG90YWxBbW91bnQnIGlkPSd0b3RhbEFtb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLnRvdGFsQW1vdW50ICE9PSB1bmRlZmluZWQgPyBJdGVtLnRvdGFsQW1vdW50IDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSckJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VG90YWwgQ29zdCBVU0Q6IHtJdGVtLnRvdGFsQW1vdW50VVNEICE9PSB1bmRlZmluZWQgPyBJdGVtLnRvdGFsQW1vdW50VVNELnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD0nYW1vdW50VG90YWxJbnZvaWNlJz57SXRlbS5mY0NvbnZlcnRUb1VzZFRvdGFsICE9PSB1bmRlZmluZWQgPyBJdGVtLmZjQ29udmVydFRvVXNkVG90YWwudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgPiAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfT5Ub3RhbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3RvdGFsRkMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBbW91bnQgRmMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbEZDICE9PSB1bmRlZmluZWQgPyB0b3RhbEZDIDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxNTBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5GQzwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0b3RhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Ftb3VudCAkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWwgIT09IHVuZGVmaW5lZCA/IHRvdGFsIDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMjBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0b3RhbFVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1RvdGFsIFVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsVVNEICE9PSB1bmRlZmluZWQgPyB0b3RhbFVTRCA6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTIwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQmFja31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUJhY2t9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCBtYWtpbmcgaXRlbSBvdXQgPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlIDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj4gSWYgeW91IHN0b3AgbWFraW5nIGl0ZW0gb3V0IHdpdGhvdXQgc2F2aW5nLCBhbGwgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgtMSl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+WWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ObzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNjAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRBcnJheS5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgPGRpdiBpdGVtIHhzPXsxMn0gc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseSxEbyB5b3Ugd2FudCB0byBjb252ZXJ0IHRvIGFuIEl0ZW0gUHVyY2hhc2UgPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlIDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj4gWW91IHNob3VsZCBjb252ZXJ0IHRoZSBQTyBvcmRlciB0byBhbiBJUCB3aGVuIGl0IGlzIFB1cmNoYXNlPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNpc2lvbigncHJldmlvdXMnKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTGF0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0NvbnZlcnRQb1RvSVAvJHtpZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPkNvbnZlcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0Q2xvbmV9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPkNvbnZlcnQgJiBDbG9uZSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA6IDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKC0xKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5TYXZpbmcgRmFpbGVkPC9oMj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgVHJ5IEFnYWluXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbFVwZGF0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVwZGF0ZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW4yfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVXBkYXRlUmVhc29ufVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlUmVhc29ufSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgUmVhc29uIE9mIFVwZGF0aW5nXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBpZD0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29uMn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24yKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J0NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlVXBkYXRlT3JkZXJcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TaG9wcGluZ0NhcnRPdXRsaW5lZCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vYXBpQ29uZmlnJztcblxuY29uc3QgSXRlbVRodW1ibmFpbCA9ICh7IGl0ZW1JZCwgaW5pdGlhbERhdGEsIGluaXRpYWxUeXBlIH0pID0+IHtcbiAgY29uc3QgW3NyYywgc2V0U3JjXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hJbWFnZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vIDEuIENoZWNrIGZvciBpbml0aWFsRGF0YSAocGFzc2VkIGZyb20gc2VhcmNoL3Nob3ApXG4gICAgICBpZiAoaW5pdGlhbERhdGEgJiYgaW5pdGlhbFR5cGUgJiYgaW5pdGlhbERhdGEgIT09IFwidW5kZWZpbmVkXCIgJiYgaW5pdGlhbFR5cGUgIT09IFwidW5kZWZpbmVkXCIgJiYgaW5pdGlhbERhdGEgIT09IFwibnVsbFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5pdGlhbERhdGEgPT09ICdzdHJpbmcnICYmIGluaXRpYWxEYXRhLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgYWxyZWFkeSBhIGRhdGEgVVJMXG4gICAgICAgICAgIGlmIChpbml0aWFsRGF0YS5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICAgIHNldFNyYyhpbml0aWFsRGF0YSk7XG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldFNyYyhgZGF0YToke2luaXRpYWxUeXBlfTtiYXNlNjQsJHtpbml0aWFsRGF0YX1gKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbERhdGEuZGF0YSkge1xuICAgICAgICAgICAvLyBIYW5kbGUgYnVmZmVyIG9iamVjdCBpZiBpdCdzIG5vdCBjb252ZXJ0ZWQgdG8gc3RyaW5nIHlldFxuICAgICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgVWludDhBcnJheShpbml0aWFsRGF0YS5kYXRhKTtcbiAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6IGluaXRpYWxUeXBlIH0pO1xuICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gc2V0U3JjKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIDIuIEZhbGxiYWNrIHRvIGZldGNoIGlmIG5vIGluaXRpYWwgZGF0YSBvciBpZiBpdCB3YXMgaW52YWxpZFxuICAgICAgaWYgKCFpdGVtSWQgfHwgaXRlbUlkID09PSBcInVuZGVmaW5lZFwiIHx8IGl0ZW1JZCA9PT0gXCJudWxsXCIpIHtcbiAgICAgICAgc2V0U3JjKG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtLyR7aXRlbUlkfWApO1xuICAgICAgICBpZiAocmVzLmRhdGEuZGF0YSAmJiByZXMuZGF0YS5kYXRhLmRhdGEpIHtcbiAgICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgVWludDhBcnJheShyZXMuZGF0YS5kYXRhLmRhdGEuZGF0YSk7XG4gICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6IHJlcy5kYXRhLmRhdGEuY29udGVudFR5cGUgfSk7XG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gc2V0U3JjKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBvbmxpbmUgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoSW1hZ2UoKTtcbiAgfSwgW2l0ZW1JZCwgaW5pdGlhbERhdGEsIGluaXRpYWxUeXBlXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxBdmF0YXJcbiAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgIHNyYz17c3JjfVxuICAgICAgc3g9e3sgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmMGYwJywgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnIH19XG4gICAgPlxuICAgICAgeyFzcmMgJiYgPFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiBzeD17eyBmb250U2l6ZTogNDAsIGNvbG9yOiAnIzk5OScgfX0gLz59XG4gICAgPC9BdmF0YXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtVGh1bWJuYWlsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Nzcy9TaWRlYmFyTmV3LnNjc3MnXHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IEFjY291bnRCb3gsIEFsbEluY2x1c2l2ZSwgSG9tZSwgSW52ZW50b3J5T3V0bGluZWQsIFN1cGVydmlzZWRVc2VyQ2lyY2xlIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5ncyc7XHJcbmltcG9ydCBFbmdpbmVlcmluZ0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FbmdpbmVlcmluZyc7XHJcbmltcG9ydCBSb29tUHJlZmVyZW5jZXNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUm9vbVByZWZlcmVuY2VzJztcclxuaW1wb3J0IENhdGVnb3J5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhdGVnb3J5JztcclxuaW1wb3J0IFN0b3JlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1N0b3JlJztcclxuaW1wb3J0IExpc3RBbHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTGlzdEFsdCc7XHJcbmltcG9ydCBEYXNoYm9hcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGFzaGJvYXJkJztcclxuaW1wb3J0IFBvc3RBZGRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUG9zdEFkZCc7XHJcbmltcG9ydCBDb250ZW50UGFzdGVHb0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Db250ZW50UGFzdGVHbyc7XHJcbmltcG9ydCB7IExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5mdW5jdGlvbiBTaWRlTWFpbnRlbmFuY2UyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxMaXN0QWx0SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkl0ZW1cIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxDb250ZW50UGFzdGVHb0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJdGVtIE91dFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFBvc3RBZGRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSXRlbSBSZXR1cm5cIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxTdG9yZUljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJdGVtIFB1cmNoYXNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxJbnZlbnRvcnlPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlB1cmNoYXNlIE9yZGVyXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPE91dGxldD48L091dGxldD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZU1haW50ZW5hbmNlMiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIlNpZGVNYWludGVuYW5jZTIiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJEZWxldGVJY29uIiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlBhcGVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkJveCIsIkF1dG9jb21wbGV0ZSIsIk1vZGFsIiwiQmFja2Ryb3AiLCJUYWJsZUNvbnRhaW5lciIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIkRpdmlkZXIiLCJDaGVja2JveCIsIkZvcm1Db250cm9sTGFiZWwiLCJDYXJkIiwiQ2FyZE1lZGlhIiwiQ2FyZENvbnRlbnQiLCJQYWdpbmF0aW9uIiwiQXZhdGFyIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwiQWRkIiwiQXJyb3dVcHdhcmRPdXRsaW5lZCIsIkRyYWdJbmRpY2F0b3JSb3VuZGVkIiwiUmVtb3ZlQ2lyY2xlT3V0bGluZSIsIkVORFBPSU5UX1VSTCIsIkRyYXdlciIsIlNpZGVEcmF3ZXIiLCJCdXR0b24iLCJ2NCIsIk5hdkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsIkRlbW9Db250YWluZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIkRhdGVQaWNrZXIiLCJkYXlqcyIsIkFycm93QmFjayIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2FkZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiQ3VzdG9tZXJGb3JtVmlldzIiLCJDbG9zZSIsIkl0ZW1Gb3JtVmlldzIiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJEcmFnRHJvcENvbnRleHQiLCJEcmFnZ2FibGUiLCJEcm9wcGFibGUiLCJTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24iLCJJdGVtVGh1bWJuYWlsIiwiTGlnaHRUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJCbGFja1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIlZpZXdUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsInN0eWxlMiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjciLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiX3JlZjgiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJQdXJjaGFzZVVwZGF0ZU9yZGVyIiwiX3VzZVBhcmFtcyIsImlkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInJlYXNvbiIsInNldFJlYXNvbiIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXRlbXMiLCJTZXRJdGVtcyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiaXRlbXNRdHlBcnJheSIsIlNldEl0ZW1zUXR5QXJyYXkiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsInByb2plY3RzIiwic2V0UHJvamVjdCIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIm1haW50ZW5hbmNlIiwic2V0TWFpbnRlbmFuY2UiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiaW52b2ljZSIsInNldEludm9pY2UiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0Iiwic2VydmljZU51bWJlciIsInNldFNlcnZpY2VOdW1iZXIiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwicHJvamVjdE5hbWUiLCJzZXRQcm9qZWN0TmFtZSIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJpbnZvaWNlTmFtZSIsInNldEludm9pY2VOYW1lIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsImlucHV0VmFsdWUyIiwic2V0SW5wdXRWYWx1ZTIiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsImlucHV0VmFsdWVQcm9qZWN0Iiwic2V0SW5wdXRWYWx1ZVByb2plY3QiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwib3V0TnVtYmVyIiwic2V0T3V0TnVtYmVyIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsInJlYXNvbjIiLCJzZXRSZWFzb24yIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsIkl0ZW1JbmZvcm1hdGlvbiIsInNldEl0ZW1JbmZvcm1hdGlvbiIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJyZWZlcmVuY2UiLCJzZXRSZWZlcmVuY2UiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwicmF0ZSIsInNldFJhdGUiLCJfUmVhY3QkdXNlU3RhdGU1IiwiX1JlYWN0JHVzZVN0YXRlNiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiX3VzZVN0YXRlMjkiLCJkYXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTMwIiwiaXRlbU91dERhdGUiLCJzZXRJdGVtT3V0RGF0ZSIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJtYW51ZmFjdHVyZXIiLCJzZXRNYW51ZmFjdHVyZXIiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwibWFudWZhY3R1cmVyTnVtYmVyIiwic2V0TWFudWZhY3R1cmVyTnVtYmVyIiwiZmV0Y2hEYXRhIiwiX3JlZjAiLCJfcmVzJGRhdGEiLCJfcmVzJGRhdGEyIiwiX3JlcyRkYXRhMyIsIl9yZXMkZGF0YTQiLCJOdW1iZXIiLCJoYW5kbGVGZXRjaCIsIl9yZWYxIiwiX3Jlc1Byb2plY3QkZGF0YSIsIl9yZXNNYWludGVuYW5jZSRkYXRhIiwiX3Jlc0ludm9pY2UkZGF0YSIsInJlc0l0ZW0iLCJyZXZlcnNlIiwibWFwIiwicm93IiwicmVzUHVyY2hhc2UiLCJyZXNQcm9qZWN0IiwiZmlsdGVyIiwiX3Jlc1B1cmNoYXNlJGRhdGEiLCJmaW5kIiwiSXRlbSIsIl9pZCIsInNvbWUiLCJJdGVtMSIsIml0ZW1RdHkiLCJpdGVtT3V0IiwicmVzTWFpbnRlbmFuY2UiLCJyZXNJbnZvaWNlIiwibmV3RGF0YSIsIlJlZmVyZW5jZU5hbWUyIiwiSXRlbTIiLCJSZWZlcmVuY2VOYW1lIiwiaGFuZGxlQ2xlYXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiaWRSb3ciLCJfZSR0YXJnZXQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsaXN0IiwiaSIsImZpbmRJbmRleCIsIk1hdGgiLCJyb3VuZCIsInBhcnNlRmxvYXQiLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlIiwiaXRlbU5hbWUiLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24iLCJhZGRJdGVtIiwiaXRlbURlc2NyaXB0aW9uIiwiaXRlbVJhdGUiLCJUYXV4IiwicXR5QnV5IiwidG90YWxBbW91bnRVU0QiLCJmY0NvbnZlcnRUb1VzZCIsImZjQ29udmVydFRvVXNkVG90YWwiLCJ0b3RhbEFtb3VudCIsInRvdGFsQW1vdW50RkMiLCJzdG9jayIsImFkZEl0ZW1Sb3ciLCJuZXdJdGVtIiwidXBkYXRlIiwic3BsaWNlIiwiYWRkSXRlbVdoaXRlUm93IiwibmV3RGVzY3JpcHRpb24iLCJhZGRJdGVtV2hpdGUiLCJoYW5kbGVDaGFuZ2VJdGVtIiwibmV3VmFsdWUiLCJzZWxlY3RlZE9wdGlvbnMiLCJjb250ZW50VHlwZSIsIml0ZW1Db3N0UHJpY2UiLCJpdGVtUXVhbnRpdHkiLCJoYW5kbGVEcmFnRW5kIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJuZXdJdGVtcyIsIl9uZXdJdGVtcyRzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsIl9uZXdJdGVtcyRzcGxpY2UyIiwicmVtb3ZlZCIsImRlbGV0ZUl0ZW0iLCJmaWx0ZXJlZEFycmF5IiwiZmlsdGVySXRlbUluZm9ybWF0aW9uIiwib3B0aW9uIiwiX3JvdyRpdGVtTmFtZSIsInR5cGVJdGVtIiwiYW1vdW50IiwibGVuZ3RoIiwicmVkdWNlIiwic3VtIiwidG90YWwiLCJ0b3RhbFVTRCIsInRvdGFsRkMiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2Iiwib3BlbkJhY2siLCJzZXRPcGVuQmFjayIsImhhbmRsZU9wZW5CYWNrIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZUJhY2siLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4Iiwib3BlbjIiLCJzZXRPcGVuMiIsImhhbmRsZU9wZW5VcGRhdGVSZWFzb24iLCJoYW5kbGVDbG9zZVVwZGF0ZVJlYXNvbiIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJsb2FkaW5nT3Blbk1vZGFsVXBkYXRlIiwic2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZSIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVPcGVuVXBkYXRlIiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNsb3NlVXBkYXRlIiwiaGFuZGxlQ2xvc2VFcnJvciIsImhhbmRsZURlY2lzaW9uIiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJoYW5kbGVDcmVhdGVDb21tZW50IiwiX3JlZjEwIiwiaWRJbmZvIiwicGVyc29uIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJkYXRlTm90aWZpY2F0aW9uIiwicG9zdCIsImhhbmRsZVN1Ym1pdCIsIl9yZWYxMSIsIml0ZW1zV2l0aG91dERhdGEiLCJfcmVmMTIiLCJyZXN0IiwiX2V4Y2x1ZGVkNCIsInB1dCIsImFsZXJ0IiwiX3giLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4Iiwib3V0TnVtYmVyMSIsInNldE91dE51bWJlcjEiLCJmZXRjaE51bWJlciIsIl9yZWYxMyIsIl9yZXNJdGVtT3V0JGRhdGEiLCJfcmVzSXRlbU91dCRkYXRhMiIsInJlc0l0ZW1PdXQiLCJwYXJzZUludCIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxNCIsIlJlZmVyZW5jZUluZm8iLCJSZWZlcmVuY2VJbmZvTnVtYmVyIiwicmVmZXJlbmNlTmFtZSIsImxvZyIsIl94MiIsIl94MyIsImhhbmRsZVN1Ym1pdENsb25lIiwiX3JlZjE1Iiwic3RhdHVzIiwiQ29udmVydGVkIiwiQ3JlYXRlIiwiZGF0ZUNvbW1lbnQiLCJmb3JtYXQiLCJfeDQiLCJfUmVhY3QkdXNlU3RhdGU3IiwiX1JlYWN0JHVzZVN0YXRlOCIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsInNlYXJjaDIiLCJzZXRTZWFyY2gyIiwiaGFuZGxlU2VhcmNoMiIsIm5ld0FycmF5MiIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJpdGVtIiwieHMiLCJkYXRlQWRhcHRlciIsImNvbXBvbmVudHMiLCJyZXF1aXJlZCIsImxhYmVsIiwib25DaGFuZ2UiLCJ1bmRlZmluZWQiLCJ0b1VwcGVyQ2FzZSIsImRpc2FibGVkIiwibXVsdGlsaW5lIiwicm93cyIsImZsb2F0IiwicmlnaHQiLCJ0aXRsZSIsInBsYWNlbWVudCIsIm9uRHJhZ0VuZCIsImFsaWduIiwiZHJvcHBhYmxlSWQiLCJwcm92aWRlZCIsInNuYXBzaG90IiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsImtleSIsImRyYWdnYWJsZUlkIiwiX0l0ZW0kaXRlbU5hbWUiLCJkcmFnZ2FibGVQcm9wcyIsIkZyYWdtZW50IiwiZHJhZ0hhbmRsZVByb3BzIiwiY29sU3BhbiIsInNpemUiLCJjdXJzb3IiLCJnYXAiLCJpdGVtSWQiLCJpbml0aWFsRGF0YSIsImluaXRpYWxUeXBlIiwiZmxleERpcmVjdGlvbiIsImhpZGRlbiIsImZvbnRXZWlnaHQiLCJkaXNhYmxlQ2xlYXJhYmxlIiwib3B0aW9ucyIsImdldE9wdGlvbkxhYmVsIiwiaXRlbUJyYW5kIiwicmVuZGVyT3B0aW9uIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJvbklucHV0Q2hhbmdlIiwiZXZlbnQiLCJuZXdJbnB1dFZhbHVlIiwiZmlsdGVyT3B0aW9ucyIsIl9yZWYxNiIsImhlbHBlclRleHQiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJ0b0ZpeGVkIiwicmVwbGFjZSIsInBsYWNlaG9sZGVyIiwic3RhcnRBZG9ybm1lbnQiLCJ0eXBlIiwib25DbG9zZSIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsInRvIiwic3JjIiwic2V0U3JjIiwiZmV0Y2hJbWFnZSIsInN0YXJ0c1dpdGgiLCJidWZmZXIiLCJVaW50OEFycmF5IiwiYmxvYiIsIkJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVhZEFzRGF0YVVSTCIsImVyciIsImJvcmRlciIsIk91dGxldCIsIkxpbmsiLCJBY2NvdW50Qm94IiwiQWxsSW5jbHVzaXZlIiwiSG9tZSIsIkludmVudG9yeU91dGxpbmVkIiwiU3VwZXJ2aXNlZFVzZXJDaXJjbGUiLCJTZXR0aW5nc0ljb24iLCJFbmdpbmVlcmluZ0ljb24iLCJSb29tUHJlZmVyZW5jZXNJY29uIiwiQ2F0ZWdvcnlJY29uIiwiU3RvcmVJY29uIiwiTGlzdEFsdEljb24iLCJEYXNoYm9hcmRJY29uIiwiUG9zdEFkZEljb24iLCJDb250ZW50UGFzdGVHb0ljb24iLCJMaXN0SXRlbUJ1dHRvbiIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIm1ha2VTdHlsZXMiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==