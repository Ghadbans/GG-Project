"use strict";
exports.id = "src_js_AdminView1_PageView_ItemPurchase_ItemPurchaseViewForm_js";
exports.ids = ["src_js_AdminView1_PageView_ItemPurchase_ItemPurchaseViewForm_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/ItemPurchase/ItemPurchaseViewForm.js"
/*!*************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ItemPurchase/ItemPurchaseViewForm.js ***!
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
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Refresh.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../utils/apiCache */ "./src/js/utils/apiCache.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _Supplier_SupplierForm2__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../Supplier/SupplierForm2 */ "./src/js/AdminView1/PageView/Supplier/SupplierForm2.js");
/* harmony import */ var _component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../../../component/ItemThumbnail */ "./src/js/component/ItemThumbnail.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["data", "contentType"],
  _excluded5 = ["children"],
  _excluded6 = ["children"],
  _excluded7 = ["children"];
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














































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_29__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_31__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_29__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_31__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_29__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_31__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_29__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_32__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_29__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_35__["default"], {
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
function ItemPurchaseViewForm() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_49__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_59__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_59__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_60__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_60__.setUser)({
              userName: Name,
              role: Role
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_60__.logOut)());
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_60__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openBack = _useState2[0],
    setOpenBack = _useState2[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return dayjs__WEBPACK_IMPORTED_MODULE_54___default()(date);
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    itemPurchaseDate = _useState4[0],
    setItemPurchaseDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    itemPurchaseNumber = _useState6[0],
    setItemPurchaseNumber = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    manufacturer = _useState8[0],
    setManufacturer = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    manufacturerID = _useState0[0],
    setManufacturerID = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    reason = _useState10[0],
    setReason = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    projects = _useState12[0],
    setProject = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    maintenance = _useState14[0],
    setMaintenance = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    note = _useState16[0],
    setNote = _useState16[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue2 = _React$useState2[0],
    setInputValue2 = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    inputValue3 = _React$useState4[0],
    setInputValue3 = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    inputValue4 = _React$useState6[0],
    setInputValue4 = _React$useState6[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    manufacturerNumber = _useState18[0],
    setManufacturerNumber = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    description = _useState20[0],
    setDescription = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    totalUSD = _useState22[0],
    setTotalUSD = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    total = _useState24[0],
    setTotal = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    totalFC = _useState26[0],
    setTotalFC = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    items = _useState28[0],
    setItems = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    supplier = _useState30[0],
    setSupplier = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    CheckTvA = _useState32[0],
    setCheckTvA = _useState32[1];
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_54___default()(Date.now()).format('DD/MM/YYYY-HH-mm');
  var Create = {
    person: user.data.userName + ' CREATED ',
    dateComment
  };
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState34 = _slicedToArray(_useState33, 2),
    projectName = _useState34[0],
    setProjectName = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState36 = _slicedToArray(_useState35, 2),
    purchase = _useState36[0],
    setPurchase = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    maintenanceInfo = _useState38[0],
    setMaintenanceInfo = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState40 = _slicedToArray(_useState39, 2),
    invoiceInfo = _useState40[0],
    setInvoiceInfo = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    itemArray = _useState42[0],
    setItemArray = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState44 = _slicedToArray(_useState43, 2),
    autocompleteOptions = _useState44[0],
    setAutocompleteOptions = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    autocompleteLoading = _useState46[0],
    setAutocompleteLoading = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState48 = _slicedToArray(_useState47, 2),
    autocompleteSearch = _useState48[0],
    setAutocompleteSearch = _useState48[1];
  {/** Item Info Start */}
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState50 = _slicedToArray(_useState49, 2),
    ItemInformation = _useState50[0],
    setItemInformation = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState52 = _slicedToArray(_useState51, 2),
    rate = _useState52[0],
    setRate = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState54 = _slicedToArray(_useState53, 2),
    invoice = _useState54[0],
    setInvoice = _useState54[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _resItemOut$data, _resItemOut$data2, _resSupplier$data, _resItem$data, _resProject$data, _resMaintenance$data, _resRate$data, _resPurchase$data, _resInvoice$data, _resMaintenance$data2;
          var resItemOut = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/get-last-saved-itemPurchase"));
          var num = resItemOut.data && resItemOut.data.itemPurchaseNumber ? parseInt(((_resItemOut$data = resItemOut.data) === null || _resItemOut$data === void 0 || (_resItemOut$data = _resItemOut$data.data) === null || _resItemOut$data === void 0 ? void 0 : _resItemOut$data.itemPurchaseNumber) || ((_resItemOut$data2 = resItemOut.data) === null || _resItemOut$data2 === void 0 ? void 0 : _resItemOut$data2.itemPurchaseNumber) || 0) : 0;
          setItemPurchaseNumber(num + 1);
          var resSupplier = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/Supplier"));
          var supplierData = Array.isArray(resSupplier === null || resSupplier === void 0 || (_resSupplier$data = resSupplier.data) === null || _resSupplier$data === void 0 ? void 0 : _resSupplier$data.data) ? [...resSupplier.data.data].reverse() : [];
          setSupplier(supplierData);
          var resItem = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/item-Information?summary=true&limit=1000"));
          var itemInfo = Array.isArray(resItem === null || resItem === void 0 || (_resItem$data = resItem.data) === null || _resItem$data === void 0 ? void 0 : _resItem$data.itemI) ? [...resItem.data.itemI].reverse() : [];
          setItemInformation(itemInfo);
          var resProject = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/projects"));
          var projectData = Array.isArray(resProject === null || resProject === void 0 || (_resProject$data = resProject.data) === null || _resProject$data === void 0 ? void 0 : _resProject$data.data) ? [...resProject.data.data].reverse() : [];
          setProject(projectData);
          var resMaintenance = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/maintenance?summary=true"));
          var maintenanceDataAll = Array.isArray(resMaintenance === null || resMaintenance === void 0 || (_resMaintenance$data = resMaintenance.data) === null || _resMaintenance$data === void 0 ? void 0 : _resMaintenance$data.data) ? [...resMaintenance.data.data].reverse() : [];
          setMaintenance(maintenanceDataAll);
          var resRate = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/rate"));
          if (Array.isArray(resRate === null || resRate === void 0 || (_resRate$data = resRate.data) === null || _resRate$data === void 0 ? void 0 : _resRate$data.data)) {
            resRate.data.data.forEach(row => setRate(row.rate));
          }
          var resPurchase = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/purchase?summary=true"));
          var resInvoice = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/invoice?summary=true"));
          var purchaseData = Array.isArray(resPurchase === null || resPurchase === void 0 || (_resPurchase$data = resPurchase.data) === null || _resPurchase$data === void 0 ? void 0 : _resPurchase$data.data) ? resPurchase.data.data : [];
          var invoiceData = Array.isArray(resInvoice === null || resInvoice === void 0 || (_resInvoice$data = resInvoice.data) === null || _resInvoice$data === void 0 ? void 0 : _resInvoice$data.data) ? resInvoice.data.data : [];
          var maintenanceData = Array.isArray(resMaintenance === null || resMaintenance === void 0 || (_resMaintenance$data2 = resMaintenance.data) === null || _resMaintenance$data2 === void 0 ? void 0 : _resMaintenance$data2.data) ? resMaintenance.data.data : [];
          var newData = invoiceData.filter(row => !purchaseData.some(Item => Item._id === row.ReferenceName2) && !maintenanceData.some(Item2 => Item2.ReferenceName === row._id && Item2._id === row.ReferenceName));
          setInvoice(newData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetch() {
        return _ref0.apply(this, arguments);
      };
    }();
    handleFetch();
  }, []);

  // Shop States
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState56 = _slicedToArray(_useState55, 2),
    shopOpen = _useState56[0],
    setShopOpen = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState58 = _slicedToArray(_useState57, 2),
    shopItems = _useState58[0],
    setShopItems = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState60 = _slicedToArray(_useState59, 2),
    shopSearch = _useState60[0],
    setShopSearch = _useState60[1];
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState62 = _slicedToArray(_useState61, 2),
    shopPage = _useState62[0],
    setShopPage = _useState62[1];
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState64 = _slicedToArray(_useState63, 2),
    shopTotalPages = _useState64[0],
    setShopTotalPages = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    shopLoading = _useState66[0],
    setShopLoading = _useState66[1];

  // Fetch Shop Items
  var fetchShop = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      setShopLoading(true);
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/item-shop?page=").concat(shopPage, "&limit=20&search=").concat(encodeURIComponent(shopSearch)));
        setShopTotalPages(res.data.totalPages);
        setShopItems(res.data.items.filter(row => row.typeItem === "Goods").reverse());
        setShopLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setShopLoading(false);
      }
    });
    return function fetchShop() {
      return _ref1.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shopOpen) {
      fetchShop();
    }
  }, [shopPage, shopSearch, shopOpen]);
  var handleRefreshShop = () => {
    setShopSearch('');
    setShopPage(1);
    fetchShop();
  };
  var handleShopPageChange = (e, newPage) => {
    setShopPage(newPage);
  };
  var handleShopSearchChange = e => {
    setShopSearch(e.target.value);
    setShopPage(1);
  };
  var toggleShop = () => {
    setShopOpen(!shopOpen);
  };

  // Handle Autocomplete Search
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchAutocompleteItems = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        if (autocompleteSearch.length < 2) {
          setAutocompleteOptions(ItemInformation.slice(0, 50));
          return;
        }
        setAutocompleteLoading(true);
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/item-shop?page=1&limit=50&search=").concat(encodeURIComponent(autocompleteSearch)));
          // Filter out items already in the purchase list
          var searchResults = res.data.items.filter(row => row.typeItem === "Goods");
          setAutocompleteOptions(searchResults);
          setAutocompleteLoading(false);
        } catch (error) {
          console.error('Error searching items:', error);
          setAutocompleteLoading(false);
        }
      });
      return function fetchAutocompleteItems() {
        return _ref10.apply(this, arguments);
      };
    }();
    var timeoutId = setTimeout(fetchAutocompleteItems, 300);
    return () => clearTimeout(timeoutId);
  }, [autocompleteSearch, ItemInformation]);
  var handleAddToItemPurchase = shopItem => {
    // Check if item already exists in items array
    var existingItemIndex = items.findIndex(item => {
      var _item$itemName;
      return ((_item$itemName = item.itemName) === null || _item$itemName === void 0 ? void 0 : _item$itemName._id) === shopItem._id;
    });
    if (existingItemIndex !== -1) {
      // Item exists, update quantity
      var updatedItems = [...items];
      var currentItem = updatedItems[existingItemIndex];
      var newQty = parseInt(currentItem.itemQty) + 1;
      updatedItems[existingItemIndex] = _objectSpread(_objectSpread({}, currentItem), {}, {
        itemQty: newQty,
        totalAmountUSD: Math.round(newQty * currentItem.itemRate * 100) / 100,
        fcConvertToUsdTotal: Math.round((parseFloat(currentItem.totalAmountFC) / currentItem.Taux + newQty * currentItem.itemRate) * 100) / 100
      });
      setItems(updatedItems);
    } else {
      // Item does not exist, add new
      var newItem = {
        idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_48__["default"])(),
        itemName: {
          _id: shopItem._id,
          itemName: shopItem.itemName
        },
        data: shopItem.data,
        contentType: shopItem.contentType,
        itemDescription: shopItem.itemDescription,
        itemQty: 1,
        itemRate: shopItem.itemCostPrice,
        // Use cost price for Item Purchase
        Taux: rate,
        cost: shopItem.itemCostPrice,
        amountFc: 0,
        totalAmountUSD: shopItem.itemCostPrice,
        fcConvertToUsd: 0,
        fcConvertToUsdTotal: shopItem.itemCostPrice,
        totalAmount: 0,
        totalAmountFC: 0
      };
      setItems([...items, newItem]);
    }
  };
  var handleReason = e => {
    setReason(e.target.value);
    setProjectName({});
    setDescription("");
    setItems([]);
  };
  var handleChangeProject = newValue => {
    var selectedOptions = projects.find(option => option === newValue);
    setProjectName({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      name: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.projectName
    });
    setItems([]);
  };
  var handleChangeSupplier = newValue => {
    var selectedOptions = supplier.find(option => option === newValue);
    setManufacturer(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.storeName);
    setManufacturerID(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id);
  };
  var handleChangeService = newValue => {
    var selectedOptions = maintenance.find(option => option === newValue);
    setProjectName({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      name: 'M-' + String(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.serviceNumber).padStart(6, '0') + ' / ' + (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.customerName.customerName)
    });
    setItemArray(selectedOptions.items.filter(row => {
      var _row$itemName, _row$itemName2;
      return ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName.itemName) && ((_row$itemName2 = row.itemName) === null || _row$itemName2 === void 0 ? void 0 : _row$itemName2.itemName) !== '' || row.newDescription && row.newDescription !== '';
    }));
    setItems([]);
  };
  var handleChangeInvoice = newValue => {
    var selectedOptions = invoice.find(option => option === newValue);
    setProjectName({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      name: 'INV-' + String(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.invoiceNumber).padStart(6, '0') + ' / ' + (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.customerName.customerName)
    });
    setItemArray(selectedOptions.items.filter(row => {
      var _row$itemName3, _row$itemName4;
      return ((_row$itemName3 = row.itemName) === null || _row$itemName3 === void 0 ? void 0 : _row$itemName3.itemName) && ((_row$itemName4 = row.itemName) === null || _row$itemName4 === void 0 ? void 0 : _row$itemName4.itemName) !== '' || row.newDescription && row.newDescription !== '';
    }));
    setItems([]);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchPur = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        if (reason === 'Project') {
          try {
            var _resPurchase$data2, _resPurchase$data3;
            var resPurchase = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/purchase?summary=true"));
            setPurchase((_resPurchase$data2 = resPurchase.data) === null || _resPurchase$data2 === void 0 || (_resPurchase$data2 = _resPurchase$data2.data) === null || _resPurchase$data2 === void 0 ? void 0 : _resPurchase$data2.filter(row => row.projectName._id === projectName._id));
            (_resPurchase$data3 = resPurchase.data) === null || _resPurchase$data3 === void 0 || (_resPurchase$data3 = _resPurchase$data3.data) === null || _resPurchase$data3 === void 0 || _resPurchase$data3.filter(row => row.projectName._id === projectName._id).map(row => setItemArray(row.items.filter(row => {
              var _row$itemName5, _row$itemName6;
              return ((_row$itemName5 = row.itemName) === null || _row$itemName5 === void 0 ? void 0 : _row$itemName5.itemName) && ((_row$itemName6 = row.itemName) === null || _row$itemName6 === void 0 ? void 0 : _row$itemName6.itemName) !== '' || row.newDescription && row.newDescription !== '';
            })));
          } catch (error) {
            console.log(error);
          }
        } else if (reason === 'Maintenance') {
          var _resM$data, _resM$data2;
          var resM = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/maintenance?summary=true"));
          setMaintenanceInfo((_resM$data = resM.data) === null || _resM$data === void 0 || (_resM$data = _resM$data.data) === null || _resM$data === void 0 ? void 0 : _resM$data.filter(row => row._id === projectName._id));
          (_resM$data2 = resM.data) === null || _resM$data2 === void 0 || (_resM$data2 = _resM$data2.data) === null || _resM$data2 === void 0 || _resM$data2.filter(row => row._id === projectName._id).map(row => setItemArray(row.items.filter(row => {
            var _row$itemName7, _row$itemName8;
            return ((_row$itemName7 = row.itemName) === null || _row$itemName7 === void 0 ? void 0 : _row$itemName7.itemName) && ((_row$itemName8 = row.itemName) === null || _row$itemName8 === void 0 ? void 0 : _row$itemName8.itemName) !== '' || row.newDescription && row.newDescription !== '';
          })));
        } else if (reason === 'Invoice') {
          var _resM$data3, _resM$data4;
          var _resM = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/invoice?summary=true"));
          setInvoiceInfo((_resM$data3 = _resM.data) === null || _resM$data3 === void 0 || (_resM$data3 = _resM$data3.data) === null || _resM$data3 === void 0 ? void 0 : _resM$data3.filter(row => row._id === projectName._id));
          (_resM$data4 = _resM.data) === null || _resM$data4 === void 0 || (_resM$data4 = _resM$data4.data) === null || _resM$data4 === void 0 || _resM$data4.filter(row => row._id === projectName._id).map(row => setItemArray(row.items.filter(row => {
            var _row$itemName9, _row$itemName0;
            return ((_row$itemName9 = row.itemName) === null || _row$itemName9 === void 0 ? void 0 : _row$itemName9.itemName) && ((_row$itemName0 = row.itemName) === null || _row$itemName0 === void 0 ? void 0 : _row$itemName0.itemName) !== '' || row.newDescription && row.newDescription !== '';
          })));
        }
      });
      return function fetchPur() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchPur();
  }, [reason, projectName]);
  var handleChangeItem = (idRow, newValue) => {
    var selectedOptions = newValue;
    setItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
        itemName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemName
      },
      data: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.data,
      contentType: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.contentType,
      itemDescription: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemDescription,
      itemRate: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemCostPrice,
      cost: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemCostPrice,
      fcConvertToUsdTotal: parseInt(row.itemQty || 0) * ((selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemCostPrice) || 0),
      data: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.data,
      contentType: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.contentType
    }) : row));
  };
  var handleChange = (e, idRow) => {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var list = [...items];
    var i = items.findIndex(Item => Item.idRow === idRow);
    list[i][name] = value;
    list[i]['totalAmountUSD'] = Math.round(list[i]['itemQty'] * list[i]['itemRate'] * 100) / 100;
    list[i]['fcConvertToUsd'] = Math.round(list[i]['totalAmountFC'] / list[i]['Taux'] * 100) / 100;
    list[i]['fcConvertToUsdTotal'] = Math.round((parseFloat(list[i]['fcConvertToUsd']) + parseFloat(list[i]['totalAmount'])) * 100) / 100;
    setItems(list);
  };
  var addItem = () => {
    setItems([...items, {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_48__["default"])(),
      itemName: {},
      itemDescription: "",
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      cost: 0,
      amountFc: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0,
      data: null,
      contentType: null
    }]);
  };
  var addItemRow = i => {
    var newItem = {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_48__["default"])(),
      itemName: {},
      itemDescription: "",
      Taux: rate,
      itemQty: 0,
      itemRate: 0,
      cost: 0,
      amountFc: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0,
      data: null,
      contentType: null
    };
    var update = [...items];
    update.splice(i + 1, 0, newItem);
    setItems(update);
  };
  var handleShowAutocomplete = idRow => {
    setItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: null,
        itemName: null
      },
      newDescription: undefined,
      itemDescription: "",
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      cost: 0,
      amountFc: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0
    }) : row));
  };
  var deleteItem = idRow => {
    setItems(items => items.filter(Item => Item.idRow !== idRow));
  };
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    openAutocomplete1 = _useState68[0],
    setOpenAutocomplete1 = _useState68[1];
  var handleOpenOpenAutocomplete1 = e => {
    e.stopPropagation();
    setOpenAutocomplete1(true);
  };
  var handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  var handleCreateCustomer = newCustomer => {
    setSupplier([newCustomer, ...supplier]);
  };
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState70 = _slicedToArray(_useState69, 2),
    openAutocomplete2 = _useState70[0],
    setOpenAutocomplete2 = _useState70[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
  };
  var handleCreateItem = newItem => {
    setItemInformation([newItem, ...ItemInformation]);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result0 = items.reduce((sum, row) => sum + parseFloat(row.fcConvertToUsdTotal), 0);
    setTotalUSD(result0.toFixed(2));
    var result1 = items.reduce((sum, row) => sum + parseFloat(row.totalAmount), 0);
    setTotal(result1.toFixed(2));
    var result2 = items.reduce((sum, row) => sum + parseFloat(row.totalAmountFC), 0);
    setTotalFC(result2.toFixed(2));
  });
  {/** Item Info End */}
  ;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (itemArray.length > 0) {
      var result = itemArray.map(row => {
        return {
          idRow: row.idRow,
          itemName: row.itemName,
          itemDescription: row.itemDescription,
          itemQty: 0,
          itemRate: 0,
          Taux: rate,
          amountFc: 0,
          cost: row.itemCost,
          fcConvertToUsd: 0,
          fcConvertToUsdTotal: 0,
          newDescription: row.newDescription,
          totalAmountUSD: 0,
          totalAmount: 0,
          totalAmountFC: 0
        };
      });
      setItems(result);
    }
  }, [itemArray, rate]);
  var filterItemInformation = ItemInformation.filter(option => !items.find(row => {
    var _row$itemName1;
    return option._id === ((_row$itemName1 = row.itemName) === null || _row$itemName1 === void 0 ? void 0 : _row$itemName1._id) && option.typeItem === "Goods";
  }));
  {/** purchase start**/}
  // Safe Update Logic: handleUpdatePurchase will now fetch and merge records on-the-fly during submission
  var arrayItemRelated = items.filter(row => row.itemQty !== 0 && row.itemQty !== '');
  var handleUpdatePurchase = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      if (arrayItemRelated.length === 0) return;
      try {
        if (reason === 'Project' && projectName !== null && projectName !== void 0 && projectName._id) {
          var _resPur$data;
          // Fetch latest purchase data for this project to avoid overwriting concurrent changes
          var resPur = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/purchase?summary=true"));
          var relevantPurchases = (_resPur$data = resPur.data) === null || _resPur$data === void 0 || (_resPur$data = _resPur$data.data) === null || _resPur$data === void 0 ? void 0 : _resPur$data.filter(row => {
            var _row$projectName;
            return ((_row$projectName = row.projectName) === null || _row$projectName === void 0 ? void 0 : _row$projectName._id) === projectName._id;
          });
          var _loop = function* _loop() {
            // Fetch the ABSOLUTE latest record for this specific purchase
            var currentRes = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/get-purchase/").concat(purchaseRow._id));
            var currentData = currentRes.data.data;
            var updatedItems = currentData.items.map(Item => {
              var RelatedItem = arrayItemRelated.find(Item2 => Item2.idRow === Item.idRow);
              if (RelatedItem) {
                var itemBuy = parseFloat(Item.itemBuy || 0) + parseFloat(RelatedItem.itemQty || 0);
                var itemCost = parseFloat(RelatedItem.itemRate || 0) !== 0 ? parseFloat(RelatedItem.itemRate) : parseFloat(Item.itemCost || 0);
                var totalGenerale = itemCost * itemBuy;
                return _objectSpread(_objectSpread({}, Item), {}, {
                  itemBuy,
                  itemCost,
                  totalGenerale
                });
              }
              return Item;
            });

            // Append manually added items that were not originally in the purchase order
            var newItems = arrayItemRelated.filter(Item2 => !currentData.items.some(Item => Item.idRow === Item2.idRow));
            newItems.forEach(RelatedItem => {
              var _RelatedItem$itemName, _RelatedItem$itemName2;
              var itemBuy = parseFloat(RelatedItem.itemQty || 0);
              var itemCost = parseFloat(RelatedItem.itemRate || 0) !== 0 ? parseFloat(RelatedItem.itemRate) : parseFloat(RelatedItem.cost || 0);
              var totalGenerale = itemCost * itemBuy;
              updatedItems.push({
                idRow: RelatedItem.idRow,
                itemName: {
                  _id: ((_RelatedItem$itemName = RelatedItem.itemName) === null || _RelatedItem$itemName === void 0 ? void 0 : _RelatedItem$itemName._id) || "",
                  itemName: ((_RelatedItem$itemName2 = RelatedItem.itemName) === null || _RelatedItem$itemName2 === void 0 ? void 0 : _RelatedItem$itemName2.itemName) || ""
                },
                newDescription: RelatedItem.newDescription,
                itemDescription: RelatedItem.itemDescription || "",
                itemDiscount: 0,
                itemQty: 0,
                // Originally requested 0
                itemRate: RelatedItem.itemRate || 0,
                itemCost: itemCost,
                totalAmount: 0,
                discount: 0,
                percentage: 0,
                itemAmount: 0,
                totalCost: 0,
                totalGenerale: totalGenerale,
                itemBuy: itemBuy,
                itemWeight: "",
                stock: RelatedItem.stock || 0,
                itemOut: 0,
                newItemOut: 0
              });
            });
            var purchaseAmount2 = updatedItems.reduce((sum, row) => sum + (parseFloat(row.totalGenerale) || 0), 0);
            yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/update-purchase/").concat(purchaseRow._id), {
              items: updatedItems,
              purchaseAmount2: purchaseAmount2
            });
          };
          for (var purchaseRow of relevantPurchases) {
            yield* _loop();
          }
        } else if (reason === 'Maintenance' && projectName !== null && projectName !== void 0 && projectName._id) {
          var _resM$data5;
          var resM = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/maintenance?summary=true"));
          var relevantMaintenance = (_resM$data5 = resM.data) === null || _resM$data5 === void 0 || (_resM$data5 = _resM$data5.data) === null || _resM$data5 === void 0 ? void 0 : _resM$data5.filter(row => row._id === projectName._id);
          var _loop2 = function* _loop2() {
            var currentRes = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/get-maintenance/").concat(maintenanceRow._id));
            var currentData = currentRes.data.data;
            var updatedItems = currentData.items.map(Item => {
              var RelatedItem = arrayItemRelated.find(Item2 => Item2.idRow === Item.idRow);
              if (RelatedItem) {
                var itemBuy = parseFloat(Item.itemBuy || 0) + parseFloat(RelatedItem.itemQty || 0);
                var totalGenerale = parseFloat(RelatedItem.itemRate || 0) * itemBuy;
                return _objectSpread(_objectSpread({}, Item), {}, {
                  itemBuy,
                  totalGenerale
                });
              }
              return Item;
            });

            // Append manually added items that were not originally in the maintenance request
            var newItems = arrayItemRelated.filter(Item2 => !currentData.items.some(Item => Item.idRow === Item2.idRow));
            newItems.forEach(RelatedItem => {
              var _RelatedItem$itemName3, _RelatedItem$itemName4;
              var itemBuy = parseFloat(RelatedItem.itemQty || 0);
              var totalGenerale = parseFloat(RelatedItem.itemRate || 0) * itemBuy;
              updatedItems.push({
                idRow: RelatedItem.idRow,
                itemName: {
                  _id: ((_RelatedItem$itemName3 = RelatedItem.itemName) === null || _RelatedItem$itemName3 === void 0 ? void 0 : _RelatedItem$itemName3._id) || "",
                  itemName: ((_RelatedItem$itemName4 = RelatedItem.itemName) === null || _RelatedItem$itemName4 === void 0 ? void 0 : _RelatedItem$itemName4.itemName) || ""
                },
                newDescription: RelatedItem.newDescription,
                itemDescription: RelatedItem.itemDescription || "",
                itemDiscount: 0,
                itemQty: 0,
                itemRate: RelatedItem.itemRate || 0,
                itemCost: RelatedItem.itemRate || 0,
                totalAmount: 0,
                discount: 0,
                percentage: 0,
                itemAmount: 0,
                totalCost: 0,
                totalGenerale: totalGenerale,
                itemBuy: itemBuy,
                itemWeight: "",
                stock: RelatedItem.stock || 0,
                itemOut: 0,
                newItemOut: 0
              });
            });
            yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/update-maintenance/").concat(maintenanceRow._id), {
              items: updatedItems
            });
          };
          for (var maintenanceRow of relevantMaintenance) {
            yield* _loop2();
          }
        } else if (reason === 'Invoice' && projectName !== null && projectName !== void 0 && projectName._id) {
          var _resI$data;
          var resI = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/invoice?summary=true"));
          var relevantInvoices = (_resI$data = resI.data) === null || _resI$data === void 0 || (_resI$data = _resI$data.data) === null || _resI$data === void 0 ? void 0 : _resI$data.filter(row => row._id === projectName._id);
          var _loop3 = function* _loop3() {
            var currentRes = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/get-invoice/").concat(invoiceRow._id));
            var currentData = currentRes.data.data;
            var updatedItems = currentData.items.map(Item => {
              var RelatedItem = arrayItemRelated.find(Item2 => Item2.idRow === Item.idRow);
              if (RelatedItem) {
                var itemBuy = parseFloat(Item.itemBuy || 0) + parseFloat(RelatedItem.itemQty || 0);
                var totalGenerale = parseFloat(RelatedItem.itemRate || 0) * itemBuy;
                return _objectSpread(_objectSpread({}, Item), {}, {
                  itemBuy,
                  totalGenerale
                });
              }
              return Item;
            });

            // Append manually added items that were not originally in the invoice request
            var newItems = arrayItemRelated.filter(Item2 => !currentData.items.some(Item => Item.idRow === Item2.idRow));
            newItems.forEach(RelatedItem => {
              var _RelatedItem$itemName5, _RelatedItem$itemName6;
              var itemBuy = parseFloat(RelatedItem.itemQty || 0);
              var totalGenerale = parseFloat(RelatedItem.itemRate || 0) * itemBuy;
              updatedItems.push({
                idRow: RelatedItem.idRow,
                itemName: {
                  _id: ((_RelatedItem$itemName5 = RelatedItem.itemName) === null || _RelatedItem$itemName5 === void 0 ? void 0 : _RelatedItem$itemName5._id) || "",
                  itemName: ((_RelatedItem$itemName6 = RelatedItem.itemName) === null || _RelatedItem$itemName6 === void 0 ? void 0 : _RelatedItem$itemName6.itemName) || ""
                },
                newDescription: RelatedItem.newDescription,
                itemDescription: RelatedItem.itemDescription || "",
                itemDiscount: 0,
                itemQty: 0,
                itemRate: RelatedItem.itemRate || 0,
                itemCost: RelatedItem.itemRate || 0,
                totalAmount: 0,
                discount: 0,
                percentage: 0,
                itemAmount: 0,
                totalCost: 0,
                totalGenerale: totalGenerale,
                itemBuy: itemBuy,
                itemWeight: "",
                stock: RelatedItem.stock || 0,
                itemOut: 0,
                newItemOut: 0
              });
            });
            yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/update-invoice/").concat(invoiceRow._id), {
              items: updatedItems
            });
          };
          for (var invoiceRow of relevantInvoices) {
            yield* _loop3();
          }
        }
      } catch (error) {
        console.error('Error in handleUpdatePurchase (Safe Merge):', error);
        alert('An error occurred while updating linked records. Please check the data integrity.');
      }
    });
    return function handleUpdatePurchase() {
      return _ref12.apply(this, arguments);
    };
  }();
  {/** purchase end */}
  {/** update Item Qty Start */}
  var handleUpdateQty = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* () {
      var initialState = {};
      var QtyUpdate = {};
      //Get Qty Arrays
      var QtyNew = arrayItemRelated.filter(Item => {
        var _Item$itemName;
        return ((_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName._id) !== undefined;
      }).map(Item => Item.itemQty);
      //Get ItemName Id
      arrayItemRelated.filter(Item => {
        var _Item$itemName2;
        return ((_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2._id) !== undefined;
      }).forEach((Item, index) => {
        var _Item$itemName3;
        initialState["id".concat(index + 1)] = {
          ids: (_Item$itemName3 = Item.itemName) === null || _Item$itemName3 === void 0 ? void 0 : _Item$itemName3._id
        };
      });
      // Get Value
      var getRequestId = Object.values(initialState).map(_ref14 => {
        var ids = _ref14.ids;
        return axios__WEBPACK_IMPORTED_MODULE_40__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/get-item/").concat(ids));
      });
      try {
        var res = yield Promise.all(getRequestId);
        res.forEach((resp, index) => {
          var _resp$data, _resp$data2;
          QtyUpdate["id".concat(index + 1)] = {
            ids: resp.data.data._id,
            data: {
              itemQuantity: Number(((_resp$data = resp.data) === null || _resp$data === void 0 || (_resp$data = _resp$data.data) === null || _resp$data === void 0 ? void 0 : _resp$data.itemQuantity) || ((_resp$data2 = resp.data) === null || _resp$data2 === void 0 ? void 0 : _resp$data2.itemQuantity) || 0) + Number(QtyNew[index])
            }
          };
        });
      } catch (error) {
        alert('An error as occur');
      } // Update Value 
      var updateRequest = Object.values(QtyUpdate).map(_ref15 => {
        var ids = _ref15.ids,
          data = _ref15.data;
        return axios__WEBPACK_IMPORTED_MODULE_40__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/update-item/").concat(ids), data);
      });
      try {
        yield Promise.all(updateRequest);
      } catch (error) {
        alert('An error as occur');
      }
    });
    return function handleUpdateQty() {
      return _ref13.apply(this, arguments);
    };
  }();
  {/** update Item Qty End */}
  {/** loading Start */}
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState72 = _slicedToArray(_useState71, 2),
    loading = _useState72[0],
    setLoading = _useState72[1];
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState74 = _slicedToArray(_useState73, 2),
    loadingOpenModal = _useState74[0],
    setLoadingOpenModal = _useState74[1];
  var _useState75 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState76 = _slicedToArray(_useState75, 2),
    loadingOpenModalUpdate = _useState76[0],
    setLoadingOpenModalUpdate = _useState76[1];
  var _useState77 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState78 = _slicedToArray(_useState77, 2),
    ErrorOpenModal = _useState78[0],
    setErrorOpenModal = _useState78[1];
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
    window.location.reload();
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
  var reasonInfo = projectName.name !== undefined ? projectName.name : description;
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ITEM PURCHASE ',
        reason: 'IP-' + String(ReferenceInfoNumber).padStart(6, '0') + ' For ' + reasonInfo,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x, _x2) {
      return _ref16.apply(this, arguments);
    };
  }();
  var handleQty = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(function* () {
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/CalculateTotal"));
      } catch (error) {
        console.log(error);
      }
    });
    return function handleQty() {
      return _ref17.apply(this, arguments);
    };
  }();
  {/** loading End */}
  var _useState79 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState80 = _slicedToArray(_useState79, 2),
    saving = _useState80[0],
    setSaving = _useState80[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var itemsWithoutData = arrayItemRelated.map(_ref19 => {
        var data = _ref19.data,
          contentType = _ref19.contentType,
          rest = _objectWithoutProperties(_ref19, _excluded4);
        return rest;
      });
      var data = {
        itemPurchaseDate,
        itemPurchaseNumber,
        manufacturer,
        status: "UnPaid",
        manufacturerNumber,
        manufacturerID,
        description,
        Create,
        totalUSD,
        total,
        totalFC,
        items: itemsWithoutData,
        reason,
        projectName,
        note
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_40__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_45__.ENDPOINT_URL, "/create-itemPurchase"), data);
        if (res) {
          (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_46__.invalidateCache)('/itemPurchase');
          // Open Loading View
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.itemPurchaseNumber;
          yield handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
          yield handleUpdatePurchase();
          handleOpen();
          handleQty();
          //Update Item Qty
          //handleUpdateQty();
        } else {
          console.log('An Error as Occur');
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x3) {
      return _ref18.apply(this, arguments);
    };
  }();
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    sideBar = _React$useState8[0],
    setSideBar = _React$useState8[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState81 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState82 = _slicedToArray(_useState81, 2),
    search2 = _useState82[0],
    setSearch2 = _useState82[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray2 = search2 !== '' ? items.filter(Item => Item.itemName && Item.itemName.itemName.toLowerCase().includes(search2.toLowerCase()) || Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) || Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase())) : items;
  var tableRows = reason !== 'Other' ? newArray2.map((Item, i) => {
    var _Item$itemName4, _Item$itemName5, _Item$itemName6;
    var related = itemArray.find(row => row.idRow === Item.idRow);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: Item.idRow
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_42__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, (_Item$itemName4 = Item.itemName) !== null && _Item$itemName4 !== void 0 && _Item$itemName4.itemName || Item.newDescription ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_68__["default"], {
      itemId: (_Item$itemName5 = Item.itemName) === null || _Item$itemName5 === void 0 ? void 0 : _Item$itemName5._id,
      initialData: Item.data,
      initialType: Item.contentType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    }, (_Item$itemName6 = Item.itemName) !== null && _Item$itemName6 !== void 0 && _Item$itemName6.itemName ? Item.itemName.itemName : Item.newDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "itemDescription",
      id: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      placeholder: "Description",
      rows: 3,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      disabled: user.data.role === 'User',
      sx: {
        width: '300px',
        backgroundColor: 'white',
        fontSize: 12
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onClick: () => handleShowAutocomplete(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_44__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      disableClearable: true,
      options: autocompleteOptions.filter(option => !items.find(row => {
        var _row$itemName10;
        return option._id === ((_row$itemName10 = row.itemName) === null || _row$itemName10 === void 0 ? void 0 : _row$itemName10._id);
      })),
      getOptionLabel: option => (option.itemName || "") + (option.itemBrand ? '/' + option.itemBrand : ""),
      renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
        sx: {
          backgroundColor: '#f2f2f2'
        }
      }), option.itemName + (option.itemBrand ? '/' + option.itemBrand : "")),
      renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
        multiline: true,
        rows: 4
      }, params, {
        required: true,
        placeholder: "Search Item..."
      })),
      loading: autocompleteLoading,
      onChange: (e, newValue) => {
        handleChangeItem(Item.idRow, newValue);
        setAutocompleteSearch('');
      },
      size: "small",
      onInputChange: (event, newInputValue) => {
        setAutocompleteSearch(newInputValue);
      },
      filterOptions: x => x // Disable built-in filtering since we do it on server
      ,
      PaperComponent: _ref20 => {
        var children = _ref20.children,
          other = _objectWithoutProperties(_ref20, _excluded5);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, other, {
          sx: {
            backgroundColor: 'white',
            left: '0',
            marginTop: '10px'
          }
        }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
          onClick: e => handleOpenOpenAutocomplete2(e),
          disabled: user.data.role === 'User',
          onMouseDown: e => e.preventDefault(),
          className: "btnCustomer7",
          style: {
            width: '100%'
          }
        }, "ADD NEW Item")));
      },
      sx: {
        width: '300px',
        backgroundColor: 'white'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      disabled: true,
      name: "need",
      value: (related === null || related === void 0 ? void 0 : related.itemQty) !== undefined ? related.itemQty : 0,
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "itemQty",
      id: "itemQty",
      label: "Qty",
      helperText: related ? related.itemQty - related.itemBuy : 0,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      required: true,
      name: "itemRate",
      id: "itemRate",
      label: "Price$",
      value: Item.itemRate,
      helperText: 'Purchase Cost: $' + Item.cost,
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      required: true,
      name: "totalAmountFC",
      id: "totalAmountFC",
      value: Item.totalAmountFC,
      label: "FC",
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      required: true,
      name: "Taux",
      id: "Taux",
      value: Item.Taux,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      required: true,
      name: "totalAmount",
      id: "totalAmount",
      value: Item.totalAmount,
      label: "$",
      size: "small",
      onChange: e => handleChange(e, Item.idRow),
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Cost USD: ", Item.totalAmountUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "amountTotalInvoice"
    }, Item.fcConvertToUsdTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
  }) : null;
  var tableRows2 = newArray2.map((Item, i) => {
    var _Item$itemName7, _Item$itemName8, _Item$itemName9;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: Item.idRow
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_42__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, (_Item$itemName7 = Item.itemName) !== null && _Item$itemName7 !== void 0 && _Item$itemName7.itemName || Item.newDescription ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_68__["default"], {
      itemId: (_Item$itemName8 = Item.itemName) === null || _Item$itemName8 === void 0 ? void 0 : _Item$itemName8._id,
      initialData: Item.data,
      initialType: Item.contentType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    }, (_Item$itemName9 = Item.itemName) !== null && _Item$itemName9 !== void 0 && _Item$itemName9.itemName ? Item.itemName.itemName : Item.newDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "itemDescription",
      id: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      placeholder: "Description",
      rows: 3,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      disabled: user.data.role === 'User',
      sx: {
        width: '300px',
        backgroundColor: 'white',
        fontSize: 12
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onClick: () => handleShowAutocomplete(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_44__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      disableClearable: true,
      options: autocompleteOptions.filter(option => !items.find(row => {
        var _row$itemName11;
        return option._id === ((_row$itemName11 = row.itemName) === null || _row$itemName11 === void 0 ? void 0 : _row$itemName11._id);
      })),
      getOptionLabel: option => (option.itemName || "") + (option.itemBrand ? '/' + option.itemBrand : ""),
      renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
        sx: {
          backgroundColor: '#f2f2f2'
        }
      }), option.itemName + (option.itemBrand ? '/' + option.itemBrand : "")),
      renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
        multiline: true,
        rows: 4
      }, params, {
        required: true,
        placeholder: "Search Item..."
      })),
      loading: autocompleteLoading,
      onChange: (e, newValue) => {
        handleChangeItem(Item.idRow, newValue);
        setAutocompleteSearch('');
      },
      size: "small",
      onInputChange: (event, newInputValue) => {
        setAutocompleteSearch(newInputValue);
      },
      filterOptions: x => x // Disable built-in filtering since we do it on server
      ,
      PaperComponent: _ref21 => {
        var children = _ref21.children,
          other = _objectWithoutProperties(_ref21, _excluded6);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, other, {
          sx: {
            backgroundColor: 'white',
            left: '0',
            marginTop: '10px'
          }
        }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
          onClick: e => handleOpenOpenAutocomplete2(e),
          disabled: user.data.role === 'User',
          onMouseDown: e => e.preventDefault(),
          className: "btnCustomer7",
          style: {
            width: '100%'
          }
        }, "ADD NEW Item")));
      },
      sx: {
        width: '300px',
        backgroundColor: 'white'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "itemQty",
      id: "itemQty",
      label: "Qty",
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      required: true,
      name: "itemRate",
      id: "itemRate",
      label: "Price$",
      value: Item.itemRate,
      helperText: 'Purchase Cost: $' + Item.cost,
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      required: true,
      name: "totalAmountFC",
      id: "totalAmountFC",
      value: Item.totalAmountFC,
      label: "FC",
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      required: true,
      name: "Taux",
      id: "Taux",
      value: Item.Taux,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      required: true,
      name: "totalAmount",
      id: "totalAmount",
      value: Item.totalAmount,
      label: "$",
      size: "small",
      onChange: e => handleChange(e, Item.idRow),
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Cost USD: ", Item.totalAmountUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "amountTotalInvoice"
    }, Item.fcConvertToUsdTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
      title: "Delete",
      sx: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onClick: () => deleteItem(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "New-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onClick: () => addItemRow(i),
      disabled: reason === 'Project' || reason === 'Maintenance'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_41__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_34__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_33__["default"], {
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
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_38__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Make new Item Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_55__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_66__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_65__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_61__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_33__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_39__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_36__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SideMaintenance2__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_33__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_37__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_13__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_51__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_52__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_50__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_53__.DatePicker, {
    required: true,
    name: "itemPurchaseDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_54___default()(itemPurchaseDate),
    onChange: date => setItemPurchaseDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    htmlFor: "itemPurchaseNumber"
  }, "Item Purchase Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    disabled: true,
    type: "number",
    id: "itemPurchaseNumber",
    name: "itemPurchaseNumber",
    label: "Item Purchase Number",
    value: '00' + itemPurchaseNumber,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "IP")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disableClearable: true,
    options: supplier,
    getOptionLabel: option => option.supplierName + ' | ' + option.storeName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], props, " ", option.supplierName, " | ", option.storeName, " "),
    onChange: (e, newValue) => {
      handleChangeSupplier(newValue);
    },
    inputValue: inputValue3,
    onInputChange: (event, newInputValue) => {
      setInputValue3(newInputValue);
    },
    filterOptions: (options, _ref22) => {
      var inputValue = _ref22.inputValue;
      return options.filter(option => option.supplierName.toLowerCase().includes(inputValue.toLowerCase()) || option.storeName.toLowerCase().includes(inputValue.toLowerCase()) || option.description.toLowerCase().includes(inputValue.toLowerCase()));
    },
    PaperComponent: _ref23 => {
      var children = _ref23.children,
        other = _objectWithoutProperties(_ref23, _excluded7);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, other, {
        sx: {
          backgroundColor: 'white',
          left: '0',
          marginTop: '10px'
        }
      }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: e => handleOpenOpenAutocomplete1(e),
        disabled: user.data.role === 'User',
        onMouseDown: e => e.preventDefault(),
        className: "btnCustomer7",
        style: {
          width: '100%'
        }
      }, "ADD NEW SUPPLIER")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, params, {
      label: "Manufacturer",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "manufacturerNumber",
    name: "manufacturerNumber",
    label: "Reference ",
    onChange: e => setManufacturerNumber(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "reason"
  }, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    required: true,
    id: "reason",
    value: reason !== undefined ? reason : '',
    onChange: e => handleReason(e),
    name: "reason",
    label: "Reason"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "Project"
  }, "Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "Maintenance"
  }, "Maintenance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "Invoice"
  }, "Invoice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "Other"
  }, "Other")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 12
  }, reason === 'Project' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disableClearable: true,
    options: projects,
    getOptionLabel: option => option.projectName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], props, " ", option.customerName.customerName, " | ", option.projectName, " | ", option.description),
    onChange: (e, newValue) => {
      handleChangeProject(newValue);
    },
    inputValue: inputValue2,
    onInputChange: (event, newInputValue) => {
      setInputValue2(newInputValue);
    },
    filterOptions: (options, _ref24) => {
      var inputValue = _ref24.inputValue;
      return options.filter(option => option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) || option.projectName.toLowerCase().includes(inputValue.toLowerCase()) || option.description.toLowerCase().includes(inputValue.toLowerCase()));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, params, {
      label: "Project Name",
      required: true
    }))
  }), reason === 'Maintenance' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    options: maintenance,
    getOptionLabel: option => option.serviceName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], props, " ", option.customerName.customerName, " | ", option.serviceName),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, params, {
      label: "Maintenance Number"
    })),
    onChange: (e, newValue) => handleChangeService(newValue ? newValue : ''),
    inputValue: inputValue4,
    onInputChange: (event, newInputValue) => {
      setInputValue4(newInputValue);
    },
    filterOptions: (options, _ref25) => {
      var inputValue = _ref25.inputValue;
      return options.filter(option => option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) || option.serviceName.toLowerCase().includes(inputValue.toLowerCase()));
    },
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), reason === 'Invoice' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    options: invoice,
    getOptionLabel: option => 'INV-' + String(option.invoiceNumber).padStart(6, '0'),
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], props, option.customerName.customerName, "/INV-", String(option.invoiceNumber).padStart(6, '0')),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, params, {
      label: "Invoice"
    })),
    onChange: (e, newValue) => handleChangeInvoice(newValue ? newValue : ''),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), reason === 'Other' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "description",
    name: "description",
    label: "Description",
    value: description,
    onChange: e => setDescription(e.target.value.toUpperCase()),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      checked: CheckTvA,
      onChange: e => setCheckTvA(e.target.checked)
    }),
    label: "TVA (16%)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'fixed',
      zIndex: 1,
      float: 'right',
      right: '-6px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: addItem,
    disabled: reason === 'Project' || reason === 'Maintenance'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_41__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })), reason === 'Other' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "ITEM LIST",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: toggleShop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "btn1",
    style: {
      backgroundColor: '#202a5a',
      fontSize: '40px'
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: {
      marginLeft: '-15px'
    }
  }, reason === 'Project' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "Search",
    id: "search2",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Qty Need"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Price$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total Paid"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, tableRows, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "totalFC",
    size: "small",
    label: "Amount Fc",
    value: totalFC,
    sx: {
      width: '150px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "FC")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "total",
    size: "small",
    label: "Amount $",
    value: total,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "totalUSD",
    size: "small",
    label: "Total USD",
    value: totalUSD,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$")
  }))))))), reason === 'Maintenance' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "Search",
    id: "search2",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Qty Need"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Price$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total Paid"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, tableRows, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "totalFC",
    size: "small",
    label: "Amount Fc",
    value: totalFC,
    sx: {
      width: '150px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "FC")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "total",
    size: "small",
    label: "Amount $",
    value: total,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "totalUSD",
    size: "small",
    label: "Total USD",
    value: totalUSD,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$")
  }))))))), reason === 'Invoice' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "Search",
    id: "search2",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Qty Need"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Price$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total Paid"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, tableRows, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "totalFC",
    size: "small",
    label: "Amount Fc",
    value: totalFC,
    sx: {
      width: '150px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "FC")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "total",
    size: "small",
    label: "Amount $",
    value: total,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "totalUSD",
    size: "small",
    label: "Total USD",
    value: totalUSD,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$")
  }))))))), reason === 'Other' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Price$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, tableRows2, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "totalFC",
    size: "small",
    label: "Amount Fc",
    value: totalFC,
    sx: {
      width: '150px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "FC")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "total",
    size: "small",
    label: "Amount $",
    value: total,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "totalUSD",
    size: "small",
    label: "Total USD",
    value: totalUSD,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$")
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "note",
    name: "note",
    multiline: true,
    rows: 4,
    value: note,
    label: "Note",
    onChange: e => setNote(e.target.value),
    sx: {
      width: '60%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 12
  }, saving !== 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer6",
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"], {
    open: openBack,
    onClose: handleCloseBack,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_63__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Do you want to stop creating customer ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate('/ItemPurchaseViewAdmin'),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handleCloseBack,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"], {
    open: openAutocomplete1,
    onClose: handleCloseOpenAutocomplete1,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style2), {}, {
      width: 800
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleCloseOpenAutocomplete1,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_63__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '600px',
      padding: '20px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Supplier_SupplierForm2__WEBPACK_IMPORTED_MODULE_67__["default"], {
    onCreateOption: handleCreateCustomer,
    onClose: handleCloseOpenAutocomplete1
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"], {
    open: openAutocomplete2,
    onClose: handleCloseOpenAutocomplete2,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style2), {}, {
      width: 800
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleCloseOpenAutocomplete2,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_63__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '600px',
      padding: '20px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_64__["default"], {
    onCreateOption: handleCreateItem,
    onClose: handleCloseOpenAutocomplete2
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_23__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_58__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_56__["default"], {
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
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_23__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_58__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_57__["default"], {
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
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"], {
    open: loadingOpenModalUpdate,
    onClose: handleCloseUpdate,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_23__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_58__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_56__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_35__["default"], {
    anchor: "right",
    open: shopOpen,
    onClose: toggleShop,
    PaperProps: {
      sx: {
        width: '500px',
        backgroundColor: '#f5f5f5',
        padding: '20px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6",
    component: "div"
  }, "Select Item from Shop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: toggleShop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_63__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: "flex",
    alignItems: "center",
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    label: "Search Shop",
    variant: "outlined",
    value: shopSearch,
    onChange: handleShopSearchChange,
    size: "small"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleRefreshShop,
    color: "primary",
    sx: {
      ml: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_43__["default"], null))), shopLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_58__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      flexGrow: 1,
      overflowY: 'auto',
      maxHeight: 'calc(100vh - 180px)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    container: true,
    spacing: 2
  }, shopItems.map(item => {
    var _ref26, _item$itemSellingPric;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      item: true,
      xs: 6,
      key: item._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      sx: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], {
      component: "img",
      height: "120",
      image: "data:".concat(item.contentType, ";base64,").concat(item.data),
      alt: item.itemName,
      sx: {
        objectFit: 'contain',
        padding: '5px'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
      sx: {
        flexGrow: 1,
        padding: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "subtitle2",
      component: "div"
    }, item.itemName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "body2",
      color: "text.secondary"
    }, "FC ", (_ref26 = item.itemSellingPrice * rate) === null || _ref26 === void 0 ? void 0 : _ref26.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "body2",
      color: "primary",
      fontWeight: "bold"
    }, "$ ", (_item$itemSellingPric = item.itemSellingPrice) === null || _item$itemSellingPric === void 0 ? void 0 : _item$itemSellingPric.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "caption",
      display: "block",
      gutterBottom: true
    }, "Stock: ", item.itemQuantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_47__["default"], {
      variant: "contained",
      size: "small",
      fullWidth: true,
      onClick: () => handleAddToItemPurchase(item),
      sx: {
        marginTop: '5px'
      }
    }, "Add"))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: "flex",
    justifyContent: "center",
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    count: shopTotalPages,
    page: shopPage,
    onChange: handleShopPageChange,
    size: "small",
    color: "primary"
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemPurchaseViewForm);

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

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfSXRlbVB1cmNoYXNlX0l0ZW1QdXJjaGFzZVZpZXdGb3JtX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBa0Q7QUFDaUI7QUFDM0M7QUFDRTtBQUMwQjtBQUNzQjtBQUNSO0FBQ2Q7QUFDK087QUFDdE87QUFDaEI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDekM7QUFDeUY7QUFDaEU7QUFDUTtBQUNzQjtBQUNuQjtBQUNuQztBQUNzQjtBQUNtQjtBQUNhO0FBQ2hCO0FBQ0o7QUFDbEM7QUFDNEI7QUFDUTtBQUNWO0FBQ0w7QUFDUTtBQUMrQjtBQUN0QztBQUNrQjtBQUNwQjtBQUNRO0FBQ0E7QUFDUTtBQUNSO0FBQ087QUFHN0QsSUFBTWlGLFlBQVksR0FBR2hFLDBEQUFNLENBQUNpRSxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDaER0RiwwREFBQSxDQUFDaUMsOERBQU8sRUFBQXVELFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxLQUFBLENBQUxDLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBTzNELDhEQUFjLENBQUM0RCxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxLQUFLO01BQ3RCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUss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LElBQUksQ0FBQztVQUNkO1FBQ0YsQ0FBQyxDQUFDLE9BQU9XLEdBQUcsRUFBRTtVQUNacGxCLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDhCQUE4QixFQUFFcWxCLEdBQUcsQ0FBQztVQUNsRFgsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkO01BQ0YsQ0FBQztNQUFBLGdCQTNDS0MsVUFBVUEsQ0FBQTtRQUFBLE9BQUFscEIsS0FBQSxDQUFBeUUsS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQTJDZjtJQUNEd2tCLFVBQVUsQ0FBQyxDQUFDO0VBQ2QsQ0FBQyxFQUFFLENBQUNqSCxNQUFNLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxDQUFDLENBQUM7RUFHdEMsb0JBQ0U5bkIsMERBQUEsQ0FBQzhCLHFEQUFNO0lBQ0xvcEIsT0FBTyxFQUFDLFNBQVM7SUFDakJ5RCxHQUFHLEVBQUVBLEdBQUk7SUFDVG5ILEVBQUUsRUFBRTtNQUFFdmdCLEtBQUssRUFBRSxFQUFFO01BQUVxa0IsTUFBTSxFQUFFLEVBQUU7TUFBRXZsQixlQUFlLEVBQUUsU0FBUztNQUFFeXBCLE1BQU0sRUFBRTtJQUFpQjtFQUFFLEdBRW5GLENBQUNiLEdBQUcsaUJBQUkzdUIsMERBQUEsQ0FBQ3FELGdGQUF3QjtJQUFDbWtCLEVBQUUsRUFBRTtNQUFFcmhCLFFBQVEsRUFBRSxFQUFFO01BQUVILEtBQUssRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUNuRSxDQUFDO0FBRWIsQ0FBQztBQUVELGlFQUFlaEIsYUFBYSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0l0ZW1QdXJjaGFzZS9JdGVtUHVyY2hhc2VWaWV3Rm9ybS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9JdGVtVGh1bWJuYWlsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWRlTWFpbnRlbmFuY2UyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlTWFpbnRlbmFuY2UyJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcyc7XHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudENpcmNsZSc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHtNZW51SXRlbSxHcmlkLCBJY29uQnV0dG9uLFBhcGVyLFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSxzdHlsZWQsIEJveCwgQXV0b2NvbXBsZXRlLE1vZGFsLCBCYWNrZHJvcCwgVGFibGVDb250YWluZXIsIE91dGxpbmVkSW5wdXQsIElucHV0QWRvcm5tZW50LERpdmlkZXIsIENhcmQsIENhcmRNZWRpYSwgQ2FyZENvbnRlbnQsIFBhZ2luYXRpb24sIEF2YXRhciwgQ2hlY2tib3gsIEZvcm1Db250cm9sTGFiZWx9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBUb29sdGlwLHt0b29sdGlwQ2xhc3Nlc30gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBBZGQsIEFycm93VXB3YXJkT3V0bGluZWQsIERyYWdJbmRpY2F0b3JSb3VuZGVkLCBSZWZyZXNoLCBSZW1vdmVDaXJjbGVPdXRsaW5lfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNhY2hlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXBpQ2FjaGUnO1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xyXG5pbXBvcnQgeyBEcmF3ZXIgYXMgU2lkZURyYXdlciwgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7ICB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBDdXN0b21lckZvcm1WaWV3MiBmcm9tICcuLi9DdXN0b21lclZJZXcvQ3VzdG9tZXJGb3JtVmlldzInO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBJdGVtRm9ybVZpZXcyIGZyb20gJy4uL0l0ZW1WaWV3L0l0ZW1Gb3JtVmlldzInO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuaW1wb3J0IFN1cHBsaWVyRm9ybTIgZnJvbSAnLi4vU3VwcGxpZXIvU3VwcGxpZXJGb3JtMic7XHJcbmltcG9ydCBJdGVtVGh1bWJuYWlsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9JdGVtVGh1bWJuYWlsJztcclxuXHJcblxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICAgIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4gICkpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgICAgZm9udFNpemU6IDExLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3Qgc3R5bGUyID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogODAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcblxyXG5mdW5jdGlvbiBJdGVtUHVyY2hhc2VWaWV3Rm9ybSgpIHtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHt1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZX0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZmV0Y2hVc2VyKClcclxuICAgIH0sW2Rpc3BhdGNoXSlcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgICB9XHJcbiAgICBjb25zdCBbb3BlbkJhY2ssIHNldE9wZW5CYWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVPcGVuQmFjayA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICBzZXRPcGVuQmFjayh0cnVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHNldE9wZW5CYWNrKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBbaXRlbVB1cmNoYXNlRGF0ZSxzZXRJdGVtUHVyY2hhc2VEYXRlXT11c2VTdGF0ZSgoKT0+e1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICByZXR1cm4gZGF5anMoZGF0ZSlcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2l0ZW1QdXJjaGFzZU51bWJlcixzZXRJdGVtUHVyY2hhc2VOdW1iZXJdPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW21hbnVmYWN0dXJlcixzZXRNYW51ZmFjdHVyZXJdPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW21hbnVmYWN0dXJlcklELHNldE1hbnVmYWN0dXJlcklEXT11c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtyZWFzb24sc2V0UmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Byb2plY3RzLHNldFByb2plY3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW21haW50ZW5hbmNlLHNldE1haW50ZW5hbmNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtub3RlLHNldE5vdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZTIsIHNldElucHV0VmFsdWUyXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlMywgc2V0SW5wdXRWYWx1ZTNdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2lucHV0VmFsdWU0LCBzZXRJbnB1dFZhbHVlNF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbWFudWZhY3R1cmVyTnVtYmVyLHNldE1hbnVmYWN0dXJlck51bWJlcl09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sc2V0RGVzY3JpcHRpb25dPXVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3RvdGFsVVNELHNldFRvdGFsVVNEXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt0b3RhbCxzZXRUb3RhbF09dXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdG90YWxGQyxzZXRUb3RhbEZDXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpdGVtcyxzZXRJdGVtc109dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3N1cHBsaWVyLHNldFN1cHBsaWVyXT11c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbQ2hlY2tUdkEsIHNldENoZWNrVHZBXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRhdGVDb21tZW50ID0gZGF5anMoRGF0ZS5ub3coKSkuZm9ybWF0KCdERC9NTS9ZWVlZLUhILW1tJyk7XHJcbiAgICBjb25zdCBDcmVhdGUgPSB7cGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUrICcgQ1JFQVRFRCAnLFxyXG4gICAgICAgICAgICAgICAgICAgZGF0ZUNvbW1lbnRcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICBjb25zdCBbcHJvamVjdE5hbWUsc2V0UHJvamVjdE5hbWVdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW3B1cmNoYXNlLHNldFB1cmNoYXNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFttYWludGVuYW5jZUluZm8sc2V0TWFpbnRlbmFuY2VJbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtpbnZvaWNlSW5mbyxzZXRJbnZvaWNlSW5mb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaXRlbUFycmF5LHNldEl0ZW1BcnJheV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFthdXRvY29tcGxldGVPcHRpb25zLCBzZXRBdXRvY29tcGxldGVPcHRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFthdXRvY29tcGxldGVMb2FkaW5nLCBzZXRBdXRvY29tcGxldGVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthdXRvY29tcGxldGVTZWFyY2gsIHNldEF1dG9jb21wbGV0ZVNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAgIHsvKiogSXRlbSBJbmZvIFN0YXJ0ICovfVxyXG4gICAgICBjb25zdCBbSXRlbUluZm9ybWF0aW9uLHNldEl0ZW1JbmZvcm1hdGlvbl09IHVzZVN0YXRlKFtdKTtcclxuICAgICAgY29uc3QgW3JhdGUsc2V0UmF0ZV09IHVzZVN0YXRlKDApO1xyXG4gICAgICBjb25zdCBbaW52b2ljZSxzZXRJbnZvaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgaGFuZGxlRmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNJdGVtT3V0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWxhc3Qtc2F2ZWQtaXRlbVB1cmNoYXNlYClcclxuICAgICAgICAgICAgY29uc3QgbnVtID0gcmVzSXRlbU91dC5kYXRhICYmIHJlc0l0ZW1PdXQuZGF0YS5pdGVtUHVyY2hhc2VOdW1iZXIgPyAocGFyc2VJbnQocmVzSXRlbU91dC5kYXRhPy5kYXRhPy5pdGVtUHVyY2hhc2VOdW1iZXIgfHwgcmVzSXRlbU91dC5kYXRhPy5pdGVtUHVyY2hhc2VOdW1iZXIgfHwgMCkpIDogMDtcclxuICAgICAgICAgICAgc2V0SXRlbVB1cmNoYXNlTnVtYmVyKG51bSArIDEpXHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNTdXBwbGllciA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L1N1cHBsaWVyYClcclxuICAgICAgICAgICAgY29uc3Qgc3VwcGxpZXJEYXRhID0gQXJyYXkuaXNBcnJheShyZXNTdXBwbGllcj8uZGF0YT8uZGF0YSkgPyBbLi4ucmVzU3VwcGxpZXIuZGF0YS5kYXRhXS5yZXZlcnNlKCkgOiBbXTtcclxuICAgICAgICAgICAgc2V0U3VwcGxpZXIoc3VwcGxpZXJEYXRhKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzSXRlbSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW0tSW5mb3JtYXRpb24/c3VtbWFyeT10cnVlJmxpbWl0PTEwMDBgKVxyXG4gICAgICAgICAgICBjb25zdCBpdGVtSW5mbyA9IEFycmF5LmlzQXJyYXkocmVzSXRlbT8uZGF0YT8uaXRlbUkpID8gWy4uLnJlc0l0ZW0uZGF0YS5pdGVtSV0ucmV2ZXJzZSgpIDogW107XHJcbiAgICAgICAgICAgIHNldEl0ZW1JbmZvcm1hdGlvbihpdGVtSW5mbylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc1Byb2plY3QgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wcm9qZWN0c2ApXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRhID0gQXJyYXkuaXNBcnJheShyZXNQcm9qZWN0Py5kYXRhPy5kYXRhKSA/IFsuLi5yZXNQcm9qZWN0LmRhdGEuZGF0YV0ucmV2ZXJzZSgpIDogW107XHJcbiAgICAgICAgICAgIHNldFByb2plY3QocHJvamVjdERhdGEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzTWFpbnRlbmFuY2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9tYWludGVuYW5jZT9zdW1tYXJ5PXRydWVgKVxyXG4gICAgICAgICAgICBjb25zdCBtYWludGVuYW5jZURhdGFBbGwgPSBBcnJheS5pc0FycmF5KHJlc01haW50ZW5hbmNlPy5kYXRhPy5kYXRhKSA/IFsuLi5yZXNNYWludGVuYW5jZS5kYXRhLmRhdGFdLnJldmVyc2UoKSA6IFtdO1xyXG4gICAgICAgICAgICBzZXRNYWludGVuYW5jZShtYWludGVuYW5jZURhdGFBbGwpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzUmF0ZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3JhdGVgKVxyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNSYXRlPy5kYXRhPy5kYXRhKSkge1xyXG4gICAgICAgICAgICAgIHJlc1JhdGUuZGF0YS5kYXRhLmZvckVhY2goKHJvdykgPT4gc2V0UmF0ZShyb3cucmF0ZSkpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc1B1cmNoYXNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcHVyY2hhc2U/c3VtbWFyeT10cnVlYClcclxuICAgICAgICAgICAgY29uc3QgcmVzSW52b2ljZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2ludm9pY2U/c3VtbWFyeT10cnVlYClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHB1cmNoYXNlRGF0YSA9IEFycmF5LmlzQXJyYXkocmVzUHVyY2hhc2U/LmRhdGE/LmRhdGEpID8gcmVzUHVyY2hhc2UuZGF0YS5kYXRhIDogW107XHJcbiAgICAgICAgICAgIGNvbnN0IGludm9pY2VEYXRhID0gQXJyYXkuaXNBcnJheShyZXNJbnZvaWNlPy5kYXRhPy5kYXRhKSA/IHJlc0ludm9pY2UuZGF0YS5kYXRhIDogW107XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW50ZW5hbmNlRGF0YSA9IEFycmF5LmlzQXJyYXkocmVzTWFpbnRlbmFuY2U/LmRhdGE/LmRhdGEpID8gcmVzTWFpbnRlbmFuY2UuZGF0YS5kYXRhIDogW107XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gaW52b2ljZURhdGEuZmlsdGVyKChyb3cpID0+XHJcbiAgICAgICAgICAgICAgIXB1cmNoYXNlRGF0YS5zb21lKChJdGVtKSA9PiBJdGVtLl9pZCA9PT0gcm93LlJlZmVyZW5jZU5hbWUyKSAmJlxyXG4gICAgICAgICAgICAgICFtYWludGVuYW5jZURhdGEuc29tZSgoSXRlbTIpID0+IEl0ZW0yLlJlZmVyZW5jZU5hbWUgPT09IHJvdy5faWQgJiYgSXRlbTIuX2lkID09PSByb3cuUmVmZXJlbmNlTmFtZSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBzZXRJbnZvaWNlKG5ld0RhdGEpXHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlRmV0Y2goKVxyXG4gICAgICB9LCBbXSlcclxuXHJcbiAgICAgIC8vIFNob3AgU3RhdGVzXHJcbiAgICAgIGNvbnN0IFtzaG9wT3Blbiwgc2V0U2hvcE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICBjb25zdCBbc2hvcEl0ZW1zLCBzZXRTaG9wSXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgICBjb25zdCBbc2hvcFNlYXJjaCwgc2V0U2hvcFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAgIGNvbnN0IFtzaG9wUGFnZSwgc2V0U2hvcFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgICAgIGNvbnN0IFtzaG9wVG90YWxQYWdlcywgc2V0U2hvcFRvdGFsUGFnZXNdID0gdXNlU3RhdGUoMSk7XHJcbiAgICAgIGNvbnN0IFtzaG9wTG9hZGluZywgc2V0U2hvcExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgICAgLy8gRmV0Y2ggU2hvcCBJdGVtc1xyXG4gICAgICBjb25zdCBmZXRjaFNob3AgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvcExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW0tc2hvcD9wYWdlPSR7c2hvcFBhZ2V9JmxpbWl0PTIwJnNlYXJjaD0ke2VuY29kZVVSSUNvbXBvbmVudChzaG9wU2VhcmNoKX1gKVxyXG4gICAgICAgICAgc2V0U2hvcFRvdGFsUGFnZXMocmVzLmRhdGEudG90YWxQYWdlcylcclxuICAgICAgICAgIHNldFNob3BJdGVtcyhyZXMuZGF0YS5pdGVtcy5maWx0ZXIoKHJvdykgPT4gcm93LnR5cGVJdGVtID09PSBcIkdvb2RzXCIpLnJldmVyc2UoKSlcclxuICAgICAgICAgIHNldFNob3BMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgIHNldFNob3BMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2hvcE9wZW4pIHtcclxuICAgICAgICAgIGZldGNoU2hvcCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBbc2hvcFBhZ2UsIHNob3BTZWFyY2gsIHNob3BPcGVuXSlcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZVJlZnJlc2hTaG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3BTZWFyY2goJycpO1xyXG4gICAgICAgIHNldFNob3BQYWdlKDEpO1xyXG4gICAgICAgIGZldGNoU2hvcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVTaG9wUGFnZUNoYW5nZSA9IChlLCBuZXdQYWdlKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvcFBhZ2UobmV3UGFnZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaGFuZGxlU2hvcFNlYXJjaENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvcFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0U2hvcFBhZ2UoMSlcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdG9nZ2xlU2hvcCA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG9wT3Blbighc2hvcE9wZW4pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBIYW5kbGUgQXV0b2NvbXBsZXRlIFNlYXJjaFxyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoQXV0b2NvbXBsZXRlSXRlbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYXV0b2NvbXBsZXRlU2VhcmNoLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgc2V0QXV0b2NvbXBsZXRlT3B0aW9ucyhJdGVtSW5mb3JtYXRpb24uc2xpY2UoMCwgNTApKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0QXV0b2NvbXBsZXRlTG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW0tc2hvcD9wYWdlPTEmbGltaXQ9NTAmc2VhcmNoPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGF1dG9jb21wbGV0ZVNlYXJjaCl9YCk7XHJcbiAgICAgICAgICAgIC8vIEZpbHRlciBvdXQgaXRlbXMgYWxyZWFkeSBpbiB0aGUgcHVyY2hhc2UgbGlzdFxyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gcmVzLmRhdGEuaXRlbXMuZmlsdGVyKHJvdyA9PiByb3cudHlwZUl0ZW0gPT09IFwiR29vZHNcIik7XHJcbiAgICAgICAgICAgIHNldEF1dG9jb21wbGV0ZU9wdGlvbnMoc2VhcmNoUmVzdWx0cyk7XHJcbiAgICAgICAgICAgIHNldEF1dG9jb21wbGV0ZUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VhcmNoaW5nIGl0ZW1zOicsIGVycm9yKTtcclxuICAgICAgICAgICAgc2V0QXV0b2NvbXBsZXRlTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dChmZXRjaEF1dG9jb21wbGV0ZUl0ZW1zLCAzMDApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgICAgfSwgW2F1dG9jb21wbGV0ZVNlYXJjaCwgSXRlbUluZm9ybWF0aW9uXSk7XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVBZGRUb0l0ZW1QdXJjaGFzZSA9IChzaG9wSXRlbSkgPT4ge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGl0ZW0gYWxyZWFkeSBleGlzdHMgaW4gaXRlbXMgYXJyYXlcclxuICAgICAgICBjb25zdCBleGlzdGluZ0l0ZW1JbmRleCA9IGl0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaXRlbU5hbWU/Ll9pZCA9PT0gc2hvcEl0ZW0uX2lkKTtcclxuXHJcbiAgICAgICAgaWYgKGV4aXN0aW5nSXRlbUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgLy8gSXRlbSBleGlzdHMsIHVwZGF0ZSBxdWFudGl0eVxyXG4gICAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1zID0gWy4uLml0ZW1zXTtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gdXBkYXRlZEl0ZW1zW2V4aXN0aW5nSXRlbUluZGV4XTtcclxuICAgICAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KGN1cnJlbnRJdGVtLml0ZW1RdHkpICsgMTtcclxuXHJcbiAgICAgICAgICB1cGRhdGVkSXRlbXNbZXhpc3RpbmdJdGVtSW5kZXhdID0ge1xyXG4gICAgICAgICAgICAuLi5jdXJyZW50SXRlbSxcclxuICAgICAgICAgICAgaXRlbVF0eTogbmV3UXR5LFxyXG4gICAgICAgICAgICB0b3RhbEFtb3VudFVTRDogTWF0aC5yb3VuZCgobmV3UXR5ICogY3VycmVudEl0ZW0uaXRlbVJhdGUpICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgICAgZmNDb252ZXJ0VG9Vc2RUb3RhbDogTWF0aC5yb3VuZCgoKHBhcnNlRmxvYXQoY3VycmVudEl0ZW0udG90YWxBbW91bnRGQykgLyBjdXJyZW50SXRlbS5UYXV4KSArIChuZXdRdHkgKiBjdXJyZW50SXRlbS5pdGVtUmF0ZSkpICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBzZXRJdGVtcyh1cGRhdGVkSXRlbXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBJdGVtIGRvZXMgbm90IGV4aXN0LCBhZGQgbmV3XHJcbiAgICAgICAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICAgICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICAgICAgICBfaWQ6IHNob3BJdGVtLl9pZCxcclxuICAgICAgICAgICAgICBpdGVtTmFtZTogc2hvcEl0ZW0uaXRlbU5hbWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHNob3BJdGVtLmRhdGEsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBzaG9wSXRlbS5jb250ZW50VHlwZSxcclxuICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uOiBzaG9wSXRlbS5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGl0ZW1RdHk6IDEsXHJcbiAgICAgICAgICAgIGl0ZW1SYXRlOiBzaG9wSXRlbS5pdGVtQ29zdFByaWNlLCAvLyBVc2UgY29zdCBwcmljZSBmb3IgSXRlbSBQdXJjaGFzZVxyXG4gICAgICAgICAgICBUYXV4OiByYXRlLFxyXG4gICAgICAgICAgICBjb3N0OiBzaG9wSXRlbS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgICBhbW91bnRGYzogMCxcclxuICAgICAgICAgICAgdG90YWxBbW91bnRVU0Q6IHNob3BJdGVtLml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgICAgICAgIGZjQ29udmVydFRvVXNkOiAwLFxyXG4gICAgICAgICAgICBmY0NvbnZlcnRUb1VzZFRvdGFsOiBzaG9wSXRlbS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgICAgICAgdG90YWxBbW91bnRGQzogMFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHNldEl0ZW1zKFsuLi5pdGVtcywgbmV3SXRlbV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoYW5kbGVSZWFzb24gPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFJlYXNvbihlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBzZXRQcm9qZWN0TmFtZSh7fSlcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihcIlwiKVxyXG4gICAgICAgIHNldEl0ZW1zKFtdKVxyXG4gICAgICAgfVxyXG4gICAgICAgY29uc3QgaGFuZGxlQ2hhbmdlUHJvamVjdCA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHByb2plY3RzLmZpbmQoKG9wdGlvbik9PiBvcHRpb24gPT09IG5ld1ZhbHVlKVxyXG4gICAgICAgIHNldFByb2plY3ROYW1lKHtcclxuICAgICAgICAgIF9pZDogc2VsZWN0ZWRPcHRpb25zPy5faWQsXHJcbiAgICAgICAgICBuYW1lOiBzZWxlY3RlZE9wdGlvbnM/LnByb2plY3ROYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0SXRlbXMoW10pXHJcbiAgICAgIH1cclxuICAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZVN1cHBsaWVyID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gc3VwcGxpZXIuZmluZCgob3B0aW9uKT0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICAgICAgc2V0TWFudWZhY3R1cmVyKCBzZWxlY3RlZE9wdGlvbnM/LnN0b3JlTmFtZSk7XHJcbiAgICAgICAgc2V0TWFudWZhY3R1cmVySUQoc2VsZWN0ZWRPcHRpb25zPy5faWQpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaGFuZGxlQ2hhbmdlU2VydmljZSA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IG1haW50ZW5hbmNlLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uID09PSBuZXdWYWx1ZSlcclxuICAgICAgICBzZXRQcm9qZWN0TmFtZSh7XHJcbiAgICAgICAgICBfaWQ6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICAgICAgbmFtZTogJ00tJyArIFN0cmluZyhzZWxlY3RlZE9wdGlvbnM/LnNlcnZpY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIC8gJyArIHNlbGVjdGVkT3B0aW9ucz8uY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEl0ZW1BcnJheShzZWxlY3RlZE9wdGlvbnMuaXRlbXMuZmlsdGVyKChyb3cpID0+IChyb3cuaXRlbU5hbWU/Lml0ZW1OYW1lICYmIHJvdy5pdGVtTmFtZT8uaXRlbU5hbWUgIT09ICcnKSB8fCAocm93Lm5ld0Rlc2NyaXB0aW9uICYmIHJvdy5uZXdEZXNjcmlwdGlvbiAhPT0gJycpKSlcclxuICAgICAgICBzZXRJdGVtcyhbXSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoYW5kbGVDaGFuZ2VJbnZvaWNlID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gaW52b2ljZS5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICAgICAgc2V0UHJvamVjdE5hbWUoe1xyXG4gICAgICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgICAgIG5hbWU6ICdJTlYtJyArIFN0cmluZyhzZWxlY3RlZE9wdGlvbnM/Lmludm9pY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIC8gJyArIHNlbGVjdGVkT3B0aW9ucz8uY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEl0ZW1BcnJheShzZWxlY3RlZE9wdGlvbnMuaXRlbXMuZmlsdGVyKChyb3cpID0+IChyb3cuaXRlbU5hbWU/Lml0ZW1OYW1lICYmIHJvdy5pdGVtTmFtZT8uaXRlbU5hbWUgIT09ICcnKSB8fCAocm93Lm5ld0Rlc2NyaXB0aW9uICYmIHJvdy5uZXdEZXNjcmlwdGlvbiAhPT0gJycpKSlcclxuICAgICAgICBzZXRJdGVtcyhbXSlcclxuICAgICAgfVxyXG4gICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgIGNvbnN0IGZldGNoUHVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVhc29uID09PSAnUHJvamVjdCcpIHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzUHVyY2hhc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wdXJjaGFzZT9zdW1tYXJ5PXRydWVgKVxyXG4gICAgICAgICAgICAgICAgc2V0UHVyY2hhc2UocmVzUHVyY2hhc2UuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5wcm9qZWN0TmFtZS5faWQgPT09IHByb2plY3ROYW1lLl9pZCkpO1xyXG4gICAgICAgICAgICAgICAgcmVzUHVyY2hhc2UuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5wcm9qZWN0TmFtZS5faWQgPT09IHByb2plY3ROYW1lLl9pZCkubWFwKChyb3cpID0+IHNldEl0ZW1BcnJheShyb3cuaXRlbXMuZmlsdGVyKChyb3cpID0+IChyb3cuaXRlbU5hbWU/Lml0ZW1OYW1lICYmIHJvdy5pdGVtTmFtZT8uaXRlbU5hbWUgIT09ICcnKSB8fCAocm93Lm5ld0Rlc2NyaXB0aW9uICYmIHJvdy5uZXdEZXNjcmlwdGlvbiAhPT0gJycpKSkpO1xyXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVhc29uID09PSAnTWFpbnRlbmFuY2UnKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzTSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L21haW50ZW5hbmNlP3N1bW1hcnk9dHJ1ZWApXHJcbiAgICAgICAgICAgICAgc2V0TWFpbnRlbmFuY2VJbmZvKHJlc00uZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5faWQgPT09IHByb2plY3ROYW1lLl9pZCkpO1xyXG4gICAgICAgICAgICAgIHJlc00uZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5faWQgPT09IHByb2plY3ROYW1lLl9pZCkubWFwKChyb3cpID0+IHNldEl0ZW1BcnJheShyb3cuaXRlbXMuZmlsdGVyKChyb3cpID0+IChyb3cuaXRlbU5hbWU/Lml0ZW1OYW1lICYmIHJvdy5pdGVtTmFtZT8uaXRlbU5hbWUgIT09ICcnKSB8fCAocm93Lm5ld0Rlc2NyaXB0aW9uICYmIHJvdy5uZXdEZXNjcmlwdGlvbiAhPT0gJycpKSkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlYXNvbiA9PT0gJ0ludm9pY2UnKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzTSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2ludm9pY2U/c3VtbWFyeT10cnVlYClcclxuICAgICAgICAgICAgICBzZXRJbnZvaWNlSW5mbyhyZXNNLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuX2lkID09PSBwcm9qZWN0TmFtZS5faWQpKTtcclxuICAgICAgICAgICAgICByZXNNLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuX2lkID09PSBwcm9qZWN0TmFtZS5faWQpLm1hcCgocm93KSA9PiBzZXRJdGVtQXJyYXkocm93Lml0ZW1zLmZpbHRlcigocm93KSA9PiAocm93Lml0ZW1OYW1lPy5pdGVtTmFtZSAmJiByb3cuaXRlbU5hbWU/Lml0ZW1OYW1lICE9PSAnJykgfHwgKHJvdy5uZXdEZXNjcmlwdGlvbiAmJiByb3cubmV3RGVzY3JpcHRpb24gIT09ICcnKSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBmZXRjaFB1cigpXHJcbiAgICAgIH0sW3JlYXNvbixwcm9qZWN0TmFtZV0pXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVDaGFuZ2VJdGVtID0gKGlkUm93LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IG5ld1ZhbHVlXHJcbiAgICAgICAgc2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7XHJcbiAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgICAgICBfaWQ6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICAgICAgICBpdGVtTmFtZTogc2VsZWN0ZWRPcHRpb25zPy5pdGVtTmFtZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkYXRhOiBzZWxlY3RlZE9wdGlvbnM/LmRhdGEsXHJcbiAgICAgICAgICBjb250ZW50VHlwZTogc2VsZWN0ZWRPcHRpb25zPy5jb250ZW50VHlwZSxcclxuICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogc2VsZWN0ZWRPcHRpb25zPy5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBpdGVtUmF0ZTogc2VsZWN0ZWRPcHRpb25zPy5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgY29zdDogc2VsZWN0ZWRPcHRpb25zPy5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgZmNDb252ZXJ0VG9Vc2RUb3RhbDogKHBhcnNlSW50KHJvdy5pdGVtUXR5IHx8IDApICogKHNlbGVjdGVkT3B0aW9ucz8uaXRlbUNvc3RQcmljZSB8fCAwKSksXHJcbiAgICAgICAgICBkYXRhOiBzZWxlY3RlZE9wdGlvbnM/LmRhdGEsXHJcbiAgICAgICAgICBjb250ZW50VHlwZTogc2VsZWN0ZWRPcHRpb25zPy5jb250ZW50VHlwZSxcclxuICAgICAgICB9IDogcm93KSlcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSxpZFJvdykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdCBsaXN0ID0gWy4uLml0ZW1zXTtcclxuICAgICAgICBjb25zdCBpID0gaXRlbXMuZmluZEluZGV4KEl0ZW09PiBJdGVtLmlkUm93ID09PSBpZFJvdylcclxuICAgICAgICBsaXN0W2ldW25hbWVdID0gdmFsdWVcclxuICAgICAgICBsaXN0W2ldWyd0b3RhbEFtb3VudFVTRCddID0gTWF0aC5yb3VuZCgoIGxpc3RbaV1bJ2l0ZW1RdHknXSpsaXN0W2ldWydpdGVtUmF0ZSddKSoxMDApLzEwMDtcclxuICAgICAgICBsaXN0W2ldWydmY0NvbnZlcnRUb1VzZCddID0gTWF0aC5yb3VuZCgoIGxpc3RbaV1bJ3RvdGFsQW1vdW50RkMnXS9saXN0W2ldWydUYXV4J10pKjEwMCkvMTAwO1xyXG4gICAgICAgIGxpc3RbaV1bJ2ZjQ29udmVydFRvVXNkVG90YWwnXSA9IE1hdGgucm91bmQoKCBwYXJzZUZsb2F0KGxpc3RbaV1bJ2ZjQ29udmVydFRvVXNkJ10pK3BhcnNlRmxvYXQobGlzdFtpXVsndG90YWxBbW91bnQnXSkpKjEwMCkvMTAwO1xyXG4gICAgXHJcbiAgICAgICAgc2V0SXRlbXMobGlzdCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYWRkSXRlbSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJdGVtcyhbLi4uaXRlbXMsIHtcclxuICAgICAgICAgICAgICBpZFJvdzp2NCgpLFxyXG4gICAgICAgICAgICAgIGl0ZW1OYW1lOnt9LFxyXG4gICAgICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICBpdGVtUXR5OjAsXHJcbiAgICAgICAgICAgICAgaXRlbVJhdGU6MCxcclxuICAgICAgICAgICAgICBUYXV4OnJhdGUsXHJcbiAgICAgICAgICAgICAgY29zdDowLFxyXG4gICAgICAgICAgICAgIGFtb3VudEZjOjAsXHJcbiAgICAgICAgICAgICAgdG90YWxBbW91bnRVU0Q6MCxcclxuICAgICAgICAgICAgICBmY0NvbnZlcnRUb1VzZDowLFxyXG4gICAgICAgICAgICAgIGZjQ29udmVydFRvVXNkVG90YWw6MCxcclxuICAgICAgICAgICAgICB0b3RhbEFtb3VudDowLFxyXG4gICAgICAgICAgICAgIHRvdGFsQW1vdW50RkM6MCxcclxuICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYWRkSXRlbVJvdyA9IChpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgICAgIGlkUm93OnY0KCksXHJcbiAgICAgICAgICBpdGVtTmFtZTp7fSxcclxuICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgIFRhdXg6cmF0ZSxcclxuICAgICAgICAgIGl0ZW1RdHk6MCxcclxuICAgICAgICAgIGl0ZW1SYXRlOjAsXHJcbiAgICAgICAgICBjb3N0OjAsXHJcbiAgICAgICAgICBhbW91bnRGYzowLFxyXG4gICAgICAgICAgdG90YWxBbW91bnRVU0Q6MCxcclxuICAgICAgICAgIGZjQ29udmVydFRvVXNkOjAsXHJcbiAgICAgICAgICBmY0NvbnZlcnRUb1VzZFRvdGFsOjAsXHJcbiAgICAgICAgICB0b3RhbEFtb3VudDowLFxyXG4gICAgICAgICAgdG90YWxBbW91bnRGQzowLFxyXG4gICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgIGNvbnRlbnRUeXBlOiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1cGRhdGUgPVsuLi5pdGVtc107XHJcbiAgICAgICAgdXBkYXRlLnNwbGljZShpICsgMSwgMCwgbmV3SXRlbSk7XHJcbiAgICAgICAgc2V0SXRlbXModXBkYXRlKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlID0gKGlkUm93KSA9PiB7XHJcbiAgICAgICAgc2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7XHJcbiAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgICAgICBfaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGl0ZW1OYW1lOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbmV3RGVzY3JpcHRpb246IHVuZGVmaW5lZCxcclxuICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgICAgIFRhdXg6IHJhdGUsXHJcbiAgICAgICAgICBjb3N0OiAwLFxyXG4gICAgICAgICAgYW1vdW50RmM6IDAsXHJcbiAgICAgICAgICB0b3RhbEFtb3VudFVTRDogMCxcclxuICAgICAgICAgIGZjQ29udmVydFRvVXNkOiAwLFxyXG4gICAgICAgICAgZmNDb252ZXJ0VG9Vc2RUb3RhbDogMCxcclxuICAgICAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICAgICAgdG90YWxBbW91bnRGQzogMFxyXG4gICAgICAgIH0gOiByb3cpKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZFJvdyA9PntcclxuICAgICAgICBzZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5maWx0ZXIoKEl0ZW0pPT4gSXRlbS5pZFJvdyAhPT1pZFJvdykpO1xyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTEsIHNldE9wZW5BdXRvY29tcGxldGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbmNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSA9IChlKSA9PiB7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gc2V0T3BlbkF1dG9jb21wbGV0ZTEodHJ1ZSk7XHJcbn07XHJcbmNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTEgPSAoKSA9PiB7XHJcbiAgc2V0T3BlbkF1dG9jb21wbGV0ZTEoZmFsc2UpO1xyXG59O1xyXG5jb25zdCBoYW5kbGVDcmVhdGVDdXN0b21lciA9IChuZXdDdXN0b21lcik9PiB7XHJcbiAgc2V0U3VwcGxpZXIoW25ld0N1c3RvbWVyLC4uLnN1cHBsaWVyXSlcclxufVxyXG5cclxuICAgIGNvbnN0IFtvcGVuQXV0b2NvbXBsZXRlMiwgc2V0T3BlbkF1dG9jb21wbGV0ZTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKHRydWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMihmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlSXRlbSA9IChuZXdJdGVtKT0+IHtcclxuICAgIHNldEl0ZW1JbmZvcm1hdGlvbihbbmV3SXRlbSwuLi5JdGVtSW5mb3JtYXRpb25dKVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0MCA9IGl0ZW1zLnJlZHVjZSgoc3VtLCByb3cpPT4gIHN1bSArIHBhcnNlRmxvYXQocm93LmZjQ29udmVydFRvVXNkVG90YWwpLDApXHJcbiAgICAgICAgc2V0VG90YWxVU0QocmVzdWx0MC50b0ZpeGVkKDIpKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdDEgPSBpdGVtcy5yZWR1Y2UoKHN1bSwgcm93KT0+ICBzdW0gKyBwYXJzZUZsb2F0KHJvdy50b3RhbEFtb3VudCksMClcclxuICAgICAgICBzZXRUb3RhbChyZXN1bHQxLnRvRml4ZWQoMikpXHJcbiAgICAgICAgY29uc3QgcmVzdWx0MiA9IGl0ZW1zLnJlZHVjZSgoc3VtLCByb3cpPT4gIHN1bSArIHBhcnNlRmxvYXQocm93LnRvdGFsQW1vdW50RkMpLDApXHJcbiAgICAgICAgc2V0VG90YWxGQyhyZXN1bHQyLnRvRml4ZWQoMikpXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuIHsvKiogSXRlbSBJbmZvIEVuZCAqL31cclxuXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG5pZiAoaXRlbUFycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9ICBpdGVtQXJyYXkubWFwKChyb3cpPT57XHJcbiAgICAgICByZXR1cm57XHJcbiAgICAgICAgIGlkUm93OiByb3cuaWRSb3csXHJcbiAgICAgICAgIGl0ZW1OYW1lOiByb3cuaXRlbU5hbWUsXHJcbiAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogcm93Lml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgICAgaXRlbVF0eTowLFxyXG4gICAgICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgICAgVGF1eDpyYXRlLFxyXG4gICAgICAgICBhbW91bnRGYzogMCxcclxuICAgICAgICAgY29zdDpyb3cuaXRlbUNvc3QsXHJcbiAgICAgICAgIGZjQ29udmVydFRvVXNkOjAsXHJcbiAgICAgICAgIGZjQ29udmVydFRvVXNkVG90YWw6MCxcclxuICAgICAgICAgbmV3RGVzY3JpcHRpb246IHJvdy5uZXdEZXNjcmlwdGlvbixcclxuICAgICAgICAgdG90YWxBbW91bnRVU0Q6MCxcclxuICAgICAgICAgdG90YWxBbW91bnQ6MCxcclxuICAgICAgICAgdG90YWxBbW91bnRGQzowXHJcbiAgICAgICB9XHJcbiAgICAgfSlcclxuICAgICBzZXRJdGVtcyhyZXN1bHQpXHJcbn1cclxuIH0sW2l0ZW1BcnJheSxyYXRlXSlcclxuXHJcbiBjb25zdCBmaWx0ZXJJdGVtSW5mb3JtYXRpb24gPSBJdGVtSW5mb3JtYXRpb24uZmlsdGVyKG9wdGlvbiA9PiAhaXRlbXMuZmluZCgocm93KSA9PiBvcHRpb24uX2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCAmJiBvcHRpb24udHlwZUl0ZW0gPT09IFwiR29vZHNcIikpXHJcbnsvKiogcHVyY2hhc2Ugc3RhcnQqKi99XHJcbi8vIFNhZmUgVXBkYXRlIExvZ2ljOiBoYW5kbGVVcGRhdGVQdXJjaGFzZSB3aWxsIG5vdyBmZXRjaCBhbmQgbWVyZ2UgcmVjb3JkcyBvbi10aGUtZmx5IGR1cmluZyBzdWJtaXNzaW9uXHJcbmNvbnN0IGFycmF5SXRlbVJlbGF0ZWQgPSBpdGVtcy5maWx0ZXIoKHJvdyk9PnJvdy5pdGVtUXR5ICE9PSAwICYmIHJvdy5pdGVtUXR5ICE9PSAnJylcclxuXHJcbmNvbnN0IGhhbmRsZVVwZGF0ZVB1cmNoYXNlID0gYXN5bmMgKCkgPT4ge1xyXG4gIGlmIChhcnJheUl0ZW1SZWxhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKHJlYXNvbiA9PT0gJ1Byb2plY3QnICYmIHByb2plY3ROYW1lPy5faWQpIHtcclxuICAgICAgLy8gRmV0Y2ggbGF0ZXN0IHB1cmNoYXNlIGRhdGEgZm9yIHRoaXMgcHJvamVjdCB0byBhdm9pZCBvdmVyd3JpdGluZyBjb25jdXJyZW50IGNoYW5nZXNcclxuICAgICAgY29uc3QgcmVzUHVyID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcHVyY2hhc2U/c3VtbWFyeT10cnVlYCk7XHJcbiAgICAgIGNvbnN0IHJlbGV2YW50UHVyY2hhc2VzID0gcmVzUHVyLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cucHJvamVjdE5hbWU/Ll9pZCA9PT0gcHJvamVjdE5hbWUuX2lkKTtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgcHVyY2hhc2VSb3cgb2YgcmVsZXZhbnRQdXJjaGFzZXMpIHtcclxuICAgICAgICAvLyBGZXRjaCB0aGUgQUJTT0xVVEUgbGF0ZXN0IHJlY29yZCBmb3IgdGhpcyBzcGVjaWZpYyBwdXJjaGFzZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcHVyY2hhc2UvJHtwdXJjaGFzZVJvdy5faWR9YCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudERhdGEgPSBjdXJyZW50UmVzLmRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1zID0gY3VycmVudERhdGEuaXRlbXMubWFwKChJdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBSZWxhdGVkSXRlbSA9IGFycmF5SXRlbVJlbGF0ZWQuZmluZCgoSXRlbTIpID0+IEl0ZW0yLmlkUm93ID09PSBJdGVtLmlkUm93KTtcclxuICAgICAgICAgIGlmIChSZWxhdGVkSXRlbSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtQnV5ID0gcGFyc2VGbG9hdChJdGVtLml0ZW1CdXkgfHwgMCkgKyBwYXJzZUZsb2F0KFJlbGF0ZWRJdGVtLml0ZW1RdHkgfHwgMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db3N0ID0gcGFyc2VGbG9hdChSZWxhdGVkSXRlbS5pdGVtUmF0ZSB8fCAwKSAhPT0gMCA/IHBhcnNlRmxvYXQoUmVsYXRlZEl0ZW0uaXRlbVJhdGUpIDogcGFyc2VGbG9hdChJdGVtLml0ZW1Db3N0IHx8IDApO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbEdlbmVyYWxlID0gaXRlbUNvc3QgKiBpdGVtQnV5O1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5JdGVtLCBpdGVtQnV5LCBpdGVtQ29zdCwgdG90YWxHZW5lcmFsZSB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIEl0ZW07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCBtYW51YWxseSBhZGRlZCBpdGVtcyB0aGF0IHdlcmUgbm90IG9yaWdpbmFsbHkgaW4gdGhlIHB1cmNoYXNlIG9yZGVyXHJcbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBhcnJheUl0ZW1SZWxhdGVkLmZpbHRlcigoSXRlbTIpID0+ICFjdXJyZW50RGF0YS5pdGVtcy5zb21lKChJdGVtKSA9PiBJdGVtLmlkUm93ID09PSBJdGVtMi5pZFJvdykpO1xyXG4gICAgICAgIG5ld0l0ZW1zLmZvckVhY2goKFJlbGF0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpdGVtQnV5ID0gcGFyc2VGbG9hdChSZWxhdGVkSXRlbS5pdGVtUXR5IHx8IDApO1xyXG4gICAgICAgICAgY29uc3QgaXRlbUNvc3QgPSBwYXJzZUZsb2F0KFJlbGF0ZWRJdGVtLml0ZW1SYXRlIHx8IDApICE9PSAwID8gcGFyc2VGbG9hdChSZWxhdGVkSXRlbS5pdGVtUmF0ZSkgOiBwYXJzZUZsb2F0KFJlbGF0ZWRJdGVtLmNvc3QgfHwgMCk7XHJcbiAgICAgICAgICBjb25zdCB0b3RhbEdlbmVyYWxlID0gaXRlbUNvc3QgKiBpdGVtQnV5O1xyXG4gICAgICAgICAgdXBkYXRlZEl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBpZFJvdzogUmVsYXRlZEl0ZW0uaWRSb3csXHJcbiAgICAgICAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgICAgICAgX2lkOiBSZWxhdGVkSXRlbS5pdGVtTmFtZT8uX2lkIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgaXRlbU5hbWU6IFJlbGF0ZWRJdGVtLml0ZW1OYW1lPy5pdGVtTmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uOiBSZWxhdGVkSXRlbS5uZXdEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uOiBSZWxhdGVkSXRlbS5pdGVtRGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICAgICAgICBpdGVtUXR5OiAwLCAvLyBPcmlnaW5hbGx5IHJlcXVlc3RlZCAwXHJcbiAgICAgICAgICAgIGl0ZW1SYXRlOiBSZWxhdGVkSXRlbS5pdGVtUmF0ZSB8fCAwLFxyXG4gICAgICAgICAgICBpdGVtQ29zdDogaXRlbUNvc3QsXHJcbiAgICAgICAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICAgICAgICBkaXNjb3VudDogMCxcclxuICAgICAgICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICAgICAgICB0b3RhbEdlbmVyYWxlOiB0b3RhbEdlbmVyYWxlLFxyXG4gICAgICAgICAgICBpdGVtQnV5OiBpdGVtQnV5LFxyXG4gICAgICAgICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICAgICAgICBzdG9jazogUmVsYXRlZEl0ZW0uc3RvY2sgfHwgMCxcclxuICAgICAgICAgICAgaXRlbU91dDogMCxcclxuICAgICAgICAgICAgbmV3SXRlbU91dDogMFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHB1cmNoYXNlQW1vdW50MiA9IHVwZGF0ZWRJdGVtcy5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyAocGFyc2VGbG9hdChyb3cudG90YWxHZW5lcmFsZSkgfHwgMCksIDApO1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1wdXJjaGFzZS8ke3B1cmNoYXNlUm93Ll9pZH1gLCB7XHJcbiAgICAgICAgICBpdGVtczogdXBkYXRlZEl0ZW1zLFxyXG4gICAgICAgICAgcHVyY2hhc2VBbW91bnQyOiBwdXJjaGFzZUFtb3VudDJcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChyZWFzb24gPT09ICdNYWludGVuYW5jZScgJiYgcHJvamVjdE5hbWU/Ll9pZCkge1xyXG4gICAgICBjb25zdCByZXNNID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vbWFpbnRlbmFuY2U/c3VtbWFyeT10cnVlYCk7XHJcbiAgICAgIGNvbnN0IHJlbGV2YW50TWFpbnRlbmFuY2UgPSByZXNNLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuX2lkID09PSBwcm9qZWN0TmFtZS5faWQpO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBtYWludGVuYW5jZVJvdyBvZiByZWxldmFudE1haW50ZW5hbmNlKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1tYWludGVuYW5jZS8ke21haW50ZW5hbmNlUm93Ll9pZH1gKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0YSA9IGN1cnJlbnRSZXMuZGF0YS5kYXRhO1xyXG5cclxuICAgICAgICBjb25zdCB1cGRhdGVkSXRlbXMgPSBjdXJyZW50RGF0YS5pdGVtcy5tYXAoKEl0ZW0pID0+IHtcclxuICAgICAgICAgIGNvbnN0IFJlbGF0ZWRJdGVtID0gYXJyYXlJdGVtUmVsYXRlZC5maW5kKChJdGVtMikgPT4gSXRlbTIuaWRSb3cgPT09IEl0ZW0uaWRSb3cpO1xyXG4gICAgICAgICAgaWYgKFJlbGF0ZWRJdGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1CdXkgPSBwYXJzZUZsb2F0KEl0ZW0uaXRlbUJ1eSB8fCAwKSArIHBhcnNlRmxvYXQoUmVsYXRlZEl0ZW0uaXRlbVF0eSB8fCAwKTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxHZW5lcmFsZSA9IHBhcnNlRmxvYXQoUmVsYXRlZEl0ZW0uaXRlbVJhdGUgfHwgMCkgKiBpdGVtQnV5O1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5JdGVtLCBpdGVtQnV5LCB0b3RhbEdlbmVyYWxlIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gSXRlbTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIG1hbnVhbGx5IGFkZGVkIGl0ZW1zIHRoYXQgd2VyZSBub3Qgb3JpZ2luYWxseSBpbiB0aGUgbWFpbnRlbmFuY2UgcmVxdWVzdFxyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gYXJyYXlJdGVtUmVsYXRlZC5maWx0ZXIoKEl0ZW0yKSA9PiAhY3VycmVudERhdGEuaXRlbXMuc29tZSgoSXRlbSkgPT4gSXRlbS5pZFJvdyA9PT0gSXRlbTIuaWRSb3cpKTtcclxuICAgICAgICBuZXdJdGVtcy5mb3JFYWNoKChSZWxhdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXRlbUJ1eSA9IHBhcnNlRmxvYXQoUmVsYXRlZEl0ZW0uaXRlbVF0eSB8fCAwKTtcclxuICAgICAgICAgIGNvbnN0IHRvdGFsR2VuZXJhbGUgPSBwYXJzZUZsb2F0KFJlbGF0ZWRJdGVtLml0ZW1SYXRlIHx8IDApICogaXRlbUJ1eTtcclxuICAgICAgICAgIHVwZGF0ZWRJdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgaWRSb3c6IFJlbGF0ZWRJdGVtLmlkUm93LFxyXG4gICAgICAgICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgICAgICAgIF9pZDogUmVsYXRlZEl0ZW0uaXRlbU5hbWU/Ll9pZCB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgIGl0ZW1OYW1lOiBSZWxhdGVkSXRlbS5pdGVtTmFtZT8uaXRlbU5hbWUgfHwgXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBuZXdEZXNjcmlwdGlvbjogUmVsYXRlZEl0ZW0ubmV3RGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogUmVsYXRlZEl0ZW0uaXRlbURlc2NyaXB0aW9uIHx8IFwiXCIsXHJcbiAgICAgICAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgICAgICAgaXRlbVJhdGU6IFJlbGF0ZWRJdGVtLml0ZW1SYXRlIHx8IDAsXHJcbiAgICAgICAgICAgIGl0ZW1Db3N0OiBSZWxhdGVkSXRlbS5pdGVtUmF0ZSB8fCAwLFxyXG4gICAgICAgICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgICAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgICAgICAgIHRvdGFsQ29zdDogMCxcclxuICAgICAgICAgICAgdG90YWxHZW5lcmFsZTogdG90YWxHZW5lcmFsZSxcclxuICAgICAgICAgICAgaXRlbUJ1eTogaXRlbUJ1eSxcclxuICAgICAgICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgICAgICAgc3RvY2s6IFJlbGF0ZWRJdGVtLnN0b2NrIHx8IDAsXHJcbiAgICAgICAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgICAgICAgIG5ld0l0ZW1PdXQ6IDBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtbWFpbnRlbmFuY2UvJHttYWludGVuYW5jZVJvdy5faWR9YCwge1xyXG4gICAgICAgICAgaXRlbXM6IHVwZGF0ZWRJdGVtc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHJlYXNvbiA9PT0gJ0ludm9pY2UnICYmIHByb2plY3ROYW1lPy5faWQpIHtcclxuICAgICAgY29uc3QgcmVzSSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2ludm9pY2U/c3VtbWFyeT10cnVlYCk7XHJcbiAgICAgIGNvbnN0IHJlbGV2YW50SW52b2ljZXMgPSByZXNJLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuX2lkID09PSBwcm9qZWN0TmFtZS5faWQpO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBpbnZvaWNlUm93IG9mIHJlbGV2YW50SW52b2ljZXMpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWludm9pY2UvJHtpbnZvaWNlUm93Ll9pZH1gKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0YSA9IGN1cnJlbnRSZXMuZGF0YS5kYXRhO1xyXG5cclxuICAgICAgICBjb25zdCB1cGRhdGVkSXRlbXMgPSBjdXJyZW50RGF0YS5pdGVtcy5tYXAoKEl0ZW0pID0+IHtcclxuICAgICAgICAgIGNvbnN0IFJlbGF0ZWRJdGVtID0gYXJyYXlJdGVtUmVsYXRlZC5maW5kKChJdGVtMikgPT4gSXRlbTIuaWRSb3cgPT09IEl0ZW0uaWRSb3cpO1xyXG4gICAgICAgICAgaWYgKFJlbGF0ZWRJdGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1CdXkgPSBwYXJzZUZsb2F0KEl0ZW0uaXRlbUJ1eSB8fCAwKSArIHBhcnNlRmxvYXQoUmVsYXRlZEl0ZW0uaXRlbVF0eSB8fCAwKTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxHZW5lcmFsZSA9IHBhcnNlRmxvYXQoUmVsYXRlZEl0ZW0uaXRlbVJhdGUgfHwgMCkgKiBpdGVtQnV5O1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5JdGVtLCBpdGVtQnV5LCB0b3RhbEdlbmVyYWxlIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gSXRlbTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIG1hbnVhbGx5IGFkZGVkIGl0ZW1zIHRoYXQgd2VyZSBub3Qgb3JpZ2luYWxseSBpbiB0aGUgaW52b2ljZSByZXF1ZXN0XHJcbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBhcnJheUl0ZW1SZWxhdGVkLmZpbHRlcigoSXRlbTIpID0+ICFjdXJyZW50RGF0YS5pdGVtcy5zb21lKChJdGVtKSA9PiBJdGVtLmlkUm93ID09PSBJdGVtMi5pZFJvdykpO1xyXG4gICAgICAgIG5ld0l0ZW1zLmZvckVhY2goKFJlbGF0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpdGVtQnV5ID0gcGFyc2VGbG9hdChSZWxhdGVkSXRlbS5pdGVtUXR5IHx8IDApO1xyXG4gICAgICAgICAgY29uc3QgdG90YWxHZW5lcmFsZSA9IHBhcnNlRmxvYXQoUmVsYXRlZEl0ZW0uaXRlbVJhdGUgfHwgMCkgKiBpdGVtQnV5O1xyXG4gICAgICAgICAgdXBkYXRlZEl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBpZFJvdzogUmVsYXRlZEl0ZW0uaWRSb3csXHJcbiAgICAgICAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgICAgICAgX2lkOiBSZWxhdGVkSXRlbS5pdGVtTmFtZT8uX2lkIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgaXRlbU5hbWU6IFJlbGF0ZWRJdGVtLml0ZW1OYW1lPy5pdGVtTmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uOiBSZWxhdGVkSXRlbS5uZXdEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uOiBSZWxhdGVkSXRlbS5pdGVtRGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICAgICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICAgICAgICBpdGVtUmF0ZTogUmVsYXRlZEl0ZW0uaXRlbVJhdGUgfHwgMCxcclxuICAgICAgICAgICAgaXRlbUNvc3Q6IFJlbGF0ZWRJdGVtLml0ZW1SYXRlIHx8IDAsXHJcbiAgICAgICAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICAgICAgICBkaXNjb3VudDogMCxcclxuICAgICAgICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICAgICAgICB0b3RhbEdlbmVyYWxlOiB0b3RhbEdlbmVyYWxlLFxyXG4gICAgICAgICAgICBpdGVtQnV5OiBpdGVtQnV5LFxyXG4gICAgICAgICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICAgICAgICBzdG9jazogUmVsYXRlZEl0ZW0uc3RvY2sgfHwgMCxcclxuICAgICAgICAgICAgaXRlbU91dDogMCxcclxuICAgICAgICAgICAgbmV3SXRlbU91dDogMFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1pbnZvaWNlLyR7aW52b2ljZVJvdy5faWR9YCwge1xyXG4gICAgICAgICAgaXRlbXM6IHVwZGF0ZWRJdGVtc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGhhbmRsZVVwZGF0ZVB1cmNoYXNlIChTYWZlIE1lcmdlKTonLCBlcnJvcik7XHJcbiAgICBhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgdXBkYXRpbmcgbGlua2VkIHJlY29yZHMuIFBsZWFzZSBjaGVjayB0aGUgZGF0YSBpbnRlZ3JpdHkuJyk7XHJcbiAgfVxyXG59XHJcbnsvKiogcHVyY2hhc2UgZW5kICovfVxyXG4gICB7LyoqIHVwZGF0ZSBJdGVtIFF0eSBTdGFydCAqL31cclxuICAgY29uc3QgaGFuZGxlVXBkYXRlUXR5ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge31cclxuICAgIGNvbnN0IFF0eVVwZGF0ZSA9IHt9XHJcbiAgICAvL0dldCBRdHkgQXJyYXlzXHJcbiAgICBjb25zdCBRdHlOZXcgPSBhcnJheUl0ZW1SZWxhdGVkLmZpbHRlcigoSXRlbSkgPT4gSXRlbS5pdGVtTmFtZT8uX2lkICE9PSB1bmRlZmluZWQpLm1hcCgoSXRlbSkgPT4gSXRlbS5pdGVtUXR5KVxyXG4gICAgLy9HZXQgSXRlbU5hbWUgSWRcclxuICAgIGFycmF5SXRlbVJlbGF0ZWQuZmlsdGVyKChJdGVtKSA9PiBJdGVtLml0ZW1OYW1lPy5faWQgIT09IHVuZGVmaW5lZCkuZm9yRWFjaCgoSXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgaW5pdGlhbFN0YXRlW2BpZCR7aW5kZXggKyAxfWBdID0geyBpZHM6IEl0ZW0uaXRlbU5hbWU/Ll9pZCB9XHJcbiAgICB9KVxyXG4gICAgICAvLyBHZXQgVmFsdWVcclxuICAgICBjb25zdCBnZXRSZXF1ZXN0SWQgPSBPYmplY3QudmFsdWVzKGluaXRpYWxTdGF0ZSkubWFwKCh7aWRzfSk9PntcclxuICAgICAgcmV0dXJuIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtLyR7aWRzfWApXHJcbiAgICB9KVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwoZ2V0UmVxdWVzdElkKTtcclxuICAgICAgcmVzLmZvckVhY2goKHJlc3AsIGluZGV4KT0+IHsgUXR5VXBkYXRlW2BpZCR7aW5kZXgrMX1gXSA9IHtpZHM6IHJlc3AuZGF0YS5kYXRhLl9pZCAsZGF0YSA6IHsgaXRlbVF1YW50aXR5OiAoTnVtYmVyKHJlc3AuZGF0YT8uZGF0YT8uaXRlbVF1YW50aXR5IHx8IHJlc3AuZGF0YT8uaXRlbVF1YW50aXR5IHx8IDApKSArIE51bWJlcihRdHlOZXdbaW5kZXhdKX19fSlcclxuICAgICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KCdBbiBlcnJvciBhcyBvY2N1cicpO1xyXG4gICAgfS8vIFVwZGF0ZSBWYWx1ZSBcclxuICAgIGNvbnN0IHVwZGF0ZVJlcXVlc3QgPSBPYmplY3QudmFsdWVzKFF0eVVwZGF0ZSkubWFwKCh7aWRzLCBkYXRhfSk9PntcclxuICAgICAgcmV0dXJuIGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1pdGVtLyR7aWRzfWAsZGF0YSlcclxuICAgICB9KSBcclxuICAgICB0cnkge1xyXG4gICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodXBkYXRlUmVxdWVzdCk7XHJcbiAgICAgfWNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydCgnQW4gZXJyb3IgYXMgb2NjdXInKTtcclxuICAgIH1cclxuICB9IFxyXG4gIHsvKiogdXBkYXRlIEl0ZW0gUXR5IEVuZCAqL31cclxuICB7LyoqIGxvYWRpbmcgU3RhcnQgKi99XHJcbmNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddPSB1c2VTdGF0ZShmYWxzZSk7XHJcbmNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5jb25zdCBbbG9hZGluZ09wZW5Nb2RhbFVwZGF0ZSxzZXRMb2FkaW5nT3Blbk1vZGFsVXBkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuY29uc3QgW0Vycm9yT3Blbk1vZGFsLHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbmNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9LCA1MDApXHJcbn1cclxuY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9ICgpID0+IHtcclxuICBzZXRMb2FkaW5nT3Blbk1vZGFsVXBkYXRlKHRydWUpO1xyXG4gIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH0sIDUwMClcclxufVxyXG5jb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuIH0sIDUwMClcclxufVxyXG5cclxuY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59XHJcbmNvbnN0IGhhbmRsZUNsb3NlVXBkYXRlID0gKCkgPT4ge1xyXG4gIHNldExvYWRpbmdPcGVuTW9kYWxVcGRhdGUoZmFsc2UpO1xyXG59XHJcbmNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgc2V0RXJyb3JPcGVuTW9kYWwoZmFsc2UpO1xyXG59XHJcbmNvbnN0IGhhbmRsZURlY2lzaW9uID0gKG5hdmlnYXRlKSA9PiB7XHJcbiAgLy9OYXZpZ2F0ZSBCYXNlZCBvbiB0aCBEZWNpc2lvblxyXG4gIGlmIChuYXZpZ2F0ZSA9PT0gJ3ByZXZpb3VzJykge1xyXG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gIH0gZWxzZSBpZiAobmF2aWdhdGUgPT09ICdzdGF5Jykge1xyXG4gICBoYW5kbGVDbG9zZSgpO1xyXG4gIH0gXHJcbn1cclxuY29uc3QgcmVhc29uSW5mbyA9IHByb2plY3ROYW1lLm5hbWUgIT09dW5kZWZpbmVkICA/IHByb2plY3ROYW1lLm5hbWU6ZGVzY3JpcHRpb25cclxuY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uID0gYXN5bmMgKFJlZmVyZW5jZUluZm8sUmVmZXJlbmNlSW5mb051bWJlcikgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICBwZXJzb246dXNlci5kYXRhLnVzZXJOYW1lICsgJyBDcmVhdGVkIElURU0gUFVSQ0hBU0UgJyxcclxuICAgIHJlYXNvbjogICdJUC0nICsgU3RyaW5nKFJlZmVyZW5jZUluZm9OdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIEZvciAnICsgcmVhc29uSW5mbyxcclxuICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgfVxyXG59XHJcbmNvbnN0IGhhbmRsZVF0eSA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L0NhbGN1bGF0ZVRvdGFsYClcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgfVxyXG59XHJcbiAgey8qKiBsb2FkaW5nIEVuZCAqL31cclxuICBjb25zdCBbc2F2aW5nLHNldFNhdmluZ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSk9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNhdmluZygndHJ1ZScpXHJcbiAgICBjb25zdCBpdGVtc1dpdGhvdXREYXRhID0gYXJyYXlJdGVtUmVsYXRlZC5tYXAoKHsgZGF0YSwgY29udGVudFR5cGUsIC4uLnJlc3QgfSkgPT4gcmVzdCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpdGVtUHVyY2hhc2VEYXRlLFxyXG4gICAgICBpdGVtUHVyY2hhc2VOdW1iZXIsXHJcbiAgICAgIG1hbnVmYWN0dXJlcixzdGF0dXM6XCJVblBhaWRcIixcclxuICAgICAgbWFudWZhY3R1cmVyTnVtYmVyLG1hbnVmYWN0dXJlcklELFxyXG4gICAgICBkZXNjcmlwdGlvbixDcmVhdGUsdG90YWxVU0QsdG90YWwsdG90YWxGQyxpdGVtczppdGVtc1dpdGhvdXREYXRhLHJlYXNvbixwcm9qZWN0TmFtZSxub3RlXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLWl0ZW1QdXJjaGFzZWAsIGRhdGEpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaW52YWxpZGF0ZUNhY2hlKCcvaXRlbVB1cmNoYXNlJyk7XHJcbiAgICAgICAgLy8gT3BlbiBMb2FkaW5nIFZpZXdcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvID0gcmVzLmRhdGEuZGF0YS5faWRcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvTnVtYmVyID0gcmVzLmRhdGEuZGF0YS5pdGVtUHVyY2hhc2VOdW1iZXJcclxuICAgICAgICBhd2FpdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oUmVmZXJlbmNlSW5mbywgUmVmZXJlbmNlSW5mb051bWJlcilcclxuICAgICAgICBhd2FpdCBoYW5kbGVVcGRhdGVQdXJjaGFzZSgpXHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICAgIGhhbmRsZVF0eSgpO1xyXG4gICAgICAgIC8vVXBkYXRlIEl0ZW0gUXR5XHJcbiAgICAgICAgLy9oYW5kbGVVcGRhdGVRdHkoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQW4gRXJyb3IgYXMgT2NjdXInKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgc2V0U2F2aW5nKCcnKVxyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIGNvbnN0IFtzZWFyY2gyLHNldFNlYXJjaDJdID11c2VTdGF0ZSgnJyk7XHJcbmNvbnN0IGhhbmRsZVNlYXJjaDIgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICBzZXRTZWFyY2gyKHZhbHVlKVxyXG59XHJcbiAgY29uc3QgbmV3QXJyYXkyID0gc2VhcmNoMiAhPT0gJycgPyBpdGVtcy5maWx0ZXIoKEl0ZW0pID0+XHJcbiAgICAoSXRlbS5pdGVtTmFtZSAmJiBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoMi50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgIChJdGVtLml0ZW1EZXNjcmlwdGlvbiAmJiBJdGVtLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDIudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICAoSXRlbS5uZXdEZXNjcmlwdGlvbiAmJiBJdGVtLm5ld0Rlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoMi50b0xvd2VyQ2FzZSgpKSlcclxuICApIDogaXRlbXNcclxuXHJcbiAgICBjb25zdCB0YWJsZVJvd3MgPSByZWFzb24gIT09ICdPdGhlcicgPyBuZXdBcnJheTIubWFwKChJdGVtLCBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlbGF0ZWQgPSBpdGVtQXJyYXkuZmluZCgocm93KSA9PiByb3cuaWRSb3cgPT09IEl0ZW0uaWRSb3cpXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRyIGtleT17SXRlbS5pZFJvd30+XHJcbiAgICAgICAgICA8dGQgPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICA8dGQgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIChJdGVtLml0ZW1OYW1lPy5pdGVtTmFtZSB8fCBJdGVtLm5ld0Rlc2NyaXB0aW9uKSA/IChcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzMwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8SXRlbVRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbUlkPXtJdGVtLml0ZW1OYW1lPy5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsRGF0YT17SXRlbS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFR5cGU9e0l0ZW0uY29udGVudFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogJzIwcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e0l0ZW0uaXRlbU5hbWU/Lml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA6IEl0ZW0ubmV3RGVzY3JpcHRpb259PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGVzY3JpcHRpb24nIGlkPSdpdGVtRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzMwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PilcclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2F1dG9jb21wbGV0ZU9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiAhaXRlbXMuZmluZCgocm93KSA9PiBvcHRpb24uX2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCkpfVxyXG4gICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiAob3B0aW9uLml0ZW1OYW1lIHx8IFwiXCIpICsgKG9wdGlvbi5pdGVtQnJhbmQgPyAnLycgKyBvcHRpb24uaXRlbUJyYW5kIDogXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjJmMmYyJyB9fT57b3B0aW9uLml0ZW1OYW1lICsgKG9wdGlvbi5pdGVtQnJhbmQgPyAnLycgKyBvcHRpb24uaXRlbUJyYW5kIDogXCJcIil9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9IHsuLi5wYXJhbXN9IHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEl0ZW0uLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17YXV0b2NvbXBsZXRlTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VJdGVtKEl0ZW0uaWRSb3csIG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldEF1dG9jb21wbGV0ZVNlYXJjaCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0QXV0b2NvbXBsZXRlU2VhcmNoKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KHgpID0+IHh9IC8vIERpc2FibGUgYnVpbHQtaW4gZmlsdGVyaW5nIHNpbmNlIHdlIGRvIGl0IG9uIHNlcnZlclxyXG4gICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMzAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgbmFtZT0nbmVlZCdcclxuICAgICAgICAgICAgICB2YWx1ZT17cmVsYXRlZD8uaXRlbVF0eSAhPT0gdW5kZWZpbmVkID8gcmVsYXRlZC5pdGVtUXR5IDogMH1cclxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgbmFtZT0naXRlbVF0eScgaWQ9J2l0ZW1RdHknXHJcbiAgICAgICAgICAgICAgbGFiZWw9J1F0eSdcclxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtyZWxhdGVkID8gKHJlbGF0ZWQuaXRlbVF0eSAtIHJlbGF0ZWQuaXRlbUJ1eSkgOiAwfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPSdpdGVtUmF0ZScgaWQ9J2l0ZW1SYXRlJ1xyXG4gICAgICAgICAgICAgIGxhYmVsPSdQcmljZSQnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVJhdGV9XHJcbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17J1B1cmNoYXNlIENvc3Q6ICQnICsgSXRlbS5jb3N0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzEwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIG5hbWU9J3RvdGFsQW1vdW50RkMnIGlkPSd0b3RhbEFtb3VudEZDJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0udG90YWxBbW91bnRGQ31cclxuICAgICAgICAgICAgICAgIGxhYmVsPSdGQydcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdUYXV4JyBpZD0nVGF1eCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLlRhdXh9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0ndG90YWxBbW91bnQnIGlkPSd0b3RhbEFtb3VudCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLnRvdGFsQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9JyQnXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5Ub3RhbCBDb3N0IFVTRDoge0l0ZW0udG90YWxBbW91bnRVU0QudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQgaWQ9J2Ftb3VudFRvdGFsSW52b2ljZSc+e0l0ZW0uZmNDb252ZXJ0VG9Vc2RUb3RhbC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICApXHJcbiAgICB9KSA6IG51bGxcclxuICAgIGNvbnN0IHRhYmxlUm93czIgPSBuZXdBcnJheTIubWFwKChJdGVtLCBpKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRyIGtleT17SXRlbS5pZFJvd30+XHJcbiAgICAgICAgICA8dGQgPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICA8dGQgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIChJdGVtLml0ZW1OYW1lPy5pdGVtTmFtZSB8fCBJdGVtLm5ld0Rlc2NyaXB0aW9uKSA/IChcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzMwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8SXRlbVRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbUlkPXtJdGVtLml0ZW1OYW1lPy5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsRGF0YT17SXRlbS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFR5cGU9e0l0ZW0uY29udGVudFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogJzIwcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e0l0ZW0uaXRlbU5hbWU/Lml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA6IEl0ZW0ubmV3RGVzY3JpcHRpb259PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGVzY3JpcHRpb24nIGlkPSdpdGVtRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzMwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PilcclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2F1dG9jb21wbGV0ZU9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiAhaXRlbXMuZmluZCgocm93KSA9PiBvcHRpb24uX2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCkpfVxyXG4gICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiAob3B0aW9uLml0ZW1OYW1lIHx8IFwiXCIpICsgKG9wdGlvbi5pdGVtQnJhbmQgPyAnLycgKyBvcHRpb24uaXRlbUJyYW5kIDogXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjJmMmYyJyB9fT57b3B0aW9uLml0ZW1OYW1lICsgKG9wdGlvbi5pdGVtQnJhbmQgPyAnLycgKyBvcHRpb24uaXRlbUJyYW5kIDogXCJcIil9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9IHsuLi5wYXJhbXN9IHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEl0ZW0uLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17YXV0b2NvbXBsZXRlTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VJdGVtKEl0ZW0uaWRSb3csIG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldEF1dG9jb21wbGV0ZVNlYXJjaCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0QXV0b2NvbXBsZXRlU2VhcmNoKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KHgpID0+IHh9IC8vIERpc2FibGUgYnVpbHQtaW4gZmlsdGVyaW5nIHNpbmNlIHdlIGRvIGl0IG9uIHNlcnZlclxyXG4gICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMzAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIG5hbWU9J2l0ZW1RdHknIGlkPSdpdGVtUXR5J1xyXG4gICAgICAgICAgICAgIGxhYmVsPSdRdHknXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG5hbWU9J2l0ZW1SYXRlJyBpZD0naXRlbVJhdGUnXHJcbiAgICAgICAgICAgICAgbGFiZWw9J1ByaWNlJCdcclxuICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUmF0ZX1cclxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXsnUHVyY2hhc2UgQ29zdDogJCcgKyBJdGVtLmNvc3R9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0ndG90YWxBbW91bnRGQycgaWQ9J3RvdGFsQW1vdW50RkMnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS50b3RhbEFtb3VudEZDfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9J0ZDJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIG5hbWU9J1RhdXgnIGlkPSdUYXV4J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uVGF1eH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSd0b3RhbEFtb3VudCcgaWQ9J3RvdGFsQW1vdW50J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0udG90YWxBbW91bnR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nJCdcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPlRvdGFsIENvc3QgVVNEOiB7SXRlbS50b3RhbEFtb3VudFVTRC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBpZD0nYW1vdW50VG90YWxJbnZvaWNlJz57SXRlbS5mY0NvbnZlcnRUb1VzZFRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCIgPlxyXG4gICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIk5ldy1Sb3dcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW1Sb3coaSl9IGRpc2FibGVkPXtyZWFzb24gPT09ICdQcm9qZWN0JyB8fCByZWFzb24gPT09ICdNYWludGVuYW5jZSd9PlxyXG4gICAgICAgICAgICAgICAgICA8QWRkIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICApXHJcbiAgICB9KTtcclxuXHJcbiAgICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG5cclxuPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7YmFja2dyb3VuZENvbG9yOicjMzAzNjhhJ319PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTWFrZSBuZXcgSXRlbSBQdXJjaGFzZSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgPEFycm93QmFjayBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8vPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfS8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7bWFyZ2luTGVmdDonMTBweCcsbWFyZ2luUmlnaHQ6JzEwcHgnfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3tjb2xvcjond2hpdGUnfX0gLz4gXHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3toZWlnaHQ6JzcwMHB4J319PlxyXG4gICAgICAgICAgPFNpZGVNYWludGVuYW5jZTIvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyLz5cclxuICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogNH19ID5cclxuIDxkaXY+XHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e2FsaWduSXRlbXM6J2NlbnRlcicscGFkZGluZzonMTVweCd9fSBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1QdXJjaGFzZURhdGUnIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhpdGVtUHVyY2hhc2VEYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpPT4gc2V0SXRlbVB1cmNoYXNlRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWScgICAgICAgXHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cIml0ZW1QdXJjaGFzZU51bWJlclwiPkl0ZW0gUHVyY2hhc2UgTnVtYmVyPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICBpZD0naXRlbVB1cmNoYXNlTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0naXRlbVB1cmNoYXNlTnVtYmVyJyBcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdJdGVtIFB1cmNoYXNlIE51bWJlcidcclxuICAgICAgICAgICAgICAgIHZhbHVlPXsnMDAnK2l0ZW1QdXJjaGFzZU51bWJlcn1cclxuICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPklQPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT4gXHJcbiAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17c3VwcGxpZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pPT5vcHRpb24uc3VwcGxpZXJOYW1lICsnIHwgJyArIG9wdGlvbi5zdG9yZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsb3B0aW9uKT0+ICg8Qm94IHsuLi5wcm9wc30+IHtvcHRpb24uc3VwcGxpZXJOYW1lfSB8IHtvcHRpb24uc3RvcmVOYW1lfSA8L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSxuZXdWYWx1ZSk9PiB7aGFuZGxlQ2hhbmdlU3VwcGxpZXIobmV3VmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlM31cclxuICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUzKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMse2lucHV0VmFsdWV9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zdXBwbGllck5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zdG9yZU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoe2NoaWxkcmVuLCAuLi5vdGhlcn0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7YmFja2dyb3VuZENvbG9yOid3aGl0ZScsIGxlZnQ6JzAnLG1hcmdpblRvcDonMTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9PmhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMShlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSk9PmUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREIE5FVyBTVVBQTElFUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIk1hbnVmYWN0dXJlclwiIHJlcXVpcmVkLz59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+IFxyXG4gICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICBpZD0nbWFudWZhY3R1cmVyTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdtYW51ZmFjdHVyZXJOdW1iZXInIFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nUmVmZXJlbmNlICdcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0TWFudWZhY3R1cmVyTnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PiBcclxuICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJyZWFzb25cIj5SZWFzb248L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVhc29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbiAhPT0gdW5kZWZpbmVkID9yZWFzb246Jyd9IFxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5oYW5kbGVSZWFzb24oZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUHJvamVjdFwiPlByb2plY3Q8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJNYWludGVuYW5jZVwiPk1haW50ZW5hbmNlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiSW52b2ljZVwiPkludm9pY2U8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJPdGhlclwiPk90aGVyPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD4gXHJcbiAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PiBcclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVhc29uID09PSAnUHJvamVjdCcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9qZWN0c31cclxuICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbik9PiBvcHRpb24ucHJvamVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsb3B0aW9uKT0+ICg8Qm94IHsuLi5wcm9wc30+IHtvcHRpb24uY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZX0gfCB7b3B0aW9uLnByb2plY3ROYW1lfSB8IHtvcHRpb24uZGVzY3JpcHRpb259PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsbmV3VmFsdWUpPT4ge2hhbmRsZUNoYW5nZVByb2plY3QobmV3VmFsdWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlMn1cclxuICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUyKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMse2lucHV0VmFsdWV9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJQcm9qZWN0IE5hbWVcIiByZXF1aXJlZC8+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWFzb24gPT09ICdNYWludGVuYW5jZScgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXttYWludGVuYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5zZXJ2aWNlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsb3B0aW9uKT0+ICg8Qm94IHsuLi5wcm9wc30+IHtvcHRpb24uY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZX0gfCB7b3B0aW9uLnNlcnZpY2VOYW1lfTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiTWFpbnRlbmFuY2UgTnVtYmVyXCIvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLG5ld1ZhbHVlKT0+IGhhbmRsZUNoYW5nZVNlcnZpY2UobmV3VmFsdWU/IG5ld1ZhbHVlIDonJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWU0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlNChuZXdJbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMse2lucHV0VmFsdWV9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlcnZpY2VOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyAgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlYXNvbiA9PT0gJ0ludm9pY2UnICYmIChcclxuICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZSAgICAgICBcclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17aW52b2ljZX1cclxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+ICdJTlYtJyArIFN0cmluZyhvcHRpb24uaW52b2ljZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1cclxuICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsb3B0aW9uKT0+ICg8Qm94IHsuLi5wcm9wc30+e29wdGlvbi5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lfS9JTlYte1N0cmluZyhvcHRpb24uaW52b2ljZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkludm9pY2VcIi8+fVxyXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLG5ld1ZhbHVlKT0+IGhhbmRsZUNoYW5nZUludm9pY2UobmV3VmFsdWU/IG5ld1ZhbHVlIDonJyl9XHJcbiAgICAgICAgICAgICAgICAgICBzeD17eyAgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlYXNvbiA9PT0gJ090aGVyJyAmJiAoIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgaWQ9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJyBcclxuICAgICAgICAgICAgICAgICBsYWJlbD0nRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkpfVxyXG4gICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19ICAgICAgIFxyXG4gICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLCBwYWRkaW5nUmlnaHQ6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIGNvbnRyb2w9ezxDaGVja2JveCBjaGVja2VkPXtDaGVja1R2QX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVja1R2QShlLnRhcmdldC5jaGVja2VkKX0gLz59IGxhYmVsPVwiVFZBICgxNiUpXCIgLz5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOidmaXhlZCcsekluZGV4OjEsZmxvYXQ6J3JpZ2h0JyxyaWdodDonLTZweCd9fT5cclxuICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbX0gZGlzYWJsZWQ9e3JlYXNvbiA9PT0gJ1Byb2plY3QnIHx8IHJlYXNvbiA9PT0gJ01haW50ZW5hbmNlJ30+XHJcbiAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7IGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVhc29uID09PSAnT3RoZXInICYmIChcclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiSVRFTSBMSVNUXCIgcGxhY2VtZW50PVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNob3B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJywgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8VGFibGVDb250YWluZXIgc3g9e3ttYXJnaW5MZWZ0OictMTVweCd9fT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlYXNvbiA9PT0gJ1Byb2plY3QnICYmKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZScsIGZsb2F0OidyaWdodCcsIHBhZGRpbmc6JzEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J1NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgaWQ9J3NlYXJjaDInXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2gyfVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gXHJcbiAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdHkgTmVlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2UkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50IFBhaWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBQYWlkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgIHt0YWJsZVJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30+VG90YWw8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sID5cclxuICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgaWQ9J3RvdGFsRkMnXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPSdBbW91bnQgRmMnIFxyXG4gICAgICAgICAgICB2YWx1ZT17dG90YWxGQ31cclxuICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxNTBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19XHJcbiAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPkZDPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17MX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICBpZD0ndG90YWwnXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPSdBbW91bnQgJCcgXHJcbiAgICAgICAgICAgIHZhbHVlPXt0b3RhbH1cclxuICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMjBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19XHJcbiAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICBpZD0ndG90YWxVU0QnXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPSdUb3RhbCBVU0QnIFxyXG4gICAgICAgICAgICB2YWx1ZT17dG90YWxVU0R9XHJcbiAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTIwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyB9fVxyXG4gICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVhc29uID09PSAnTWFpbnRlbmFuY2UnICYmKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZScsIGZsb2F0OidyaWdodCcsIHBhZGRpbmc6JzEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J1NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgaWQ9J3NlYXJjaDInXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2gyfVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gXHJcbiAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdHkgTmVlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2UkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50IFBhaWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBQYWlkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgIHt0YWJsZVJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30+VG90YWw8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sID5cclxuICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgaWQ9J3RvdGFsRkMnXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPSdBbW91bnQgRmMnIFxyXG4gICAgICAgICAgICB2YWx1ZT17dG90YWxGQ31cclxuICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxNTBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19XHJcbiAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPkZDPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17MX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICBpZD0ndG90YWwnXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPSdBbW91bnQgJCcgXHJcbiAgICAgICAgICAgIHZhbHVlPXt0b3RhbH1cclxuICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMjBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19XHJcbiAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICBpZD0ndG90YWxVU0QnXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPSdUb3RhbCBVU0QnIFxyXG4gICAgICAgICAgICB2YWx1ZT17dG90YWxVU0R9XHJcbiAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTIwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyB9fVxyXG4gICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVhc29uID09PSAnSW52b2ljZScgJiYoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7cG9zaXRpb246J3JlbGF0aXZlJywgZmxvYXQ6J3JpZ2h0JywgcGFkZGluZzonMTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nU2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICBpZD0nc2VhcmNoMidcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaDJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2gyfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPiBcclxuICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZUluZm8xMCc+XHJcbiAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF0eSBOZWVkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZSQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BbW91bnQgUGFpZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIFBhaWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAge3RhYmxlUm93c31cclxuICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfT5Ub3RhbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICBpZD0ndG90YWxGQydcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgbGFiZWw9J0Ftb3VudCBGYycgXHJcbiAgICAgICAgICAgIHZhbHVlPXt0b3RhbEZDfVxyXG4gICAgICAgICAgICBzeD17eyB3aWR0aDogJzE1MHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX1cclxuICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+RkM8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsxfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCA+XHJcbiAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgIGlkPSd0b3RhbCdcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgbGFiZWw9J0Ftb3VudCAkJyBcclxuICAgICAgICAgICAgdmFsdWU9e3RvdGFsfVxyXG4gICAgICAgICAgICBzeD17eyB3aWR0aDogJzEyMHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX1cclxuICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCA+XHJcbiAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgIGlkPSd0b3RhbFVTRCdcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgbGFiZWw9J1RvdGFsIFVTRCcgXHJcbiAgICAgICAgICAgIHZhbHVlPXt0b3RhbFVTRH1cclxuICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMjBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19XHJcbiAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlYXNvbiA9PT0gJ090aGVyJyAmJihcclxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZUluZm8xMCc+XHJcbiAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZSQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BbW91bnQgUGFpZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIFBhaWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAge3RhYmxlUm93czJ9XHJcbiAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0+VG90YWw8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sID5cclxuICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgaWQ9J3RvdGFsRkMnXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPSdBbW91bnQgRmMnIFxyXG4gICAgICAgICAgICB2YWx1ZT17dG90YWxGQ31cclxuICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxNTBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19XHJcbiAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPkZDPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17MX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICBpZD0ndG90YWwnXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPSdBbW91bnQgJCcgXHJcbiAgICAgICAgICAgIHZhbHVlPXt0b3RhbH1cclxuICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMjBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19XHJcbiAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICBpZD0ndG90YWxVU0QnXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPSdUb3RhbCBVU0QnIFxyXG4gICAgICAgICAgICB2YWx1ZT17dG90YWxVU0R9XHJcbiAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTIwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyB9fVxyXG4gICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICBpZD0nbm90ZSdcclxuICAgICAgICAgICAgICAgICAgbmFtZT0nbm90ZScgXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bm90ZX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J05vdGUnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldE5vdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzYwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19ICAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICBzYXZpbmcgIT09ICd0cnVlJyA/IDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5TYXZlPC9idXR0b24+IDogPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCB0ZXh0QWxpZ246J2NlbnRlcid9fT5TYXZpbmcuLi48L3A+XHJcbiAgICAgIH1cclxuICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD4gXHJcbiAgICA8L2Zvcm0+XHJcbiA8L2Rpdj5cclxuIDwvQ29udGFpbmVyPlxyXG4gIDwvQm94PlxyXG4gIDwvQm94PlxyXG4gPE1vZGFsICBcclxuICAgICAgICBvcGVuPXtvcGVuQmFja31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUJhY2t9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IHN0eWxlPXt7IHBvc2l0aW9uOidyZWxhdGl2ZScsIGZsb2F0OidyaWdodCd9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3tjb2xvcjonIzIwMmE1YSd9fS8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvQmxhY2tUb29sdGlwPiAgXHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7YWxpZ25JdGVtczonY2VudGVyJyxwYWRkaW5nOicxNXB4J319IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCBjcmVhdGluZyBjdXN0b21lciA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3tjb2xvcjoncmVkJ319Pk5vdGUgOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiPiBJZiB5b3Ugc3RvcCBjcmVhdGluZyB3aXRob3V0IHNhdmluZywgYWxsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3Q8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgPC9HcmlkPiBcclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL0l0ZW1QdXJjaGFzZVZpZXdBZG1pbicpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+Tm88L2J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+IFxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgb3Blbj17b3BlbkF1dG9jb21wbGV0ZTF9XHJcbiAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTF9XHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgID5cclxuICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX0gc3R5bGU9e3sgcG9zaXRpb246J3JlbGF0aXZlJywgZmxvYXQ6J3JpZ2h0J319PiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17e2NvbG9yOicjMjAyYTVhJ319Lz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0Oic2MDBweCcsIHBhZGRpbmc6JzIwcHgnLG92ZXJmbG93OidoaWRkZW4nLG92ZXJmbG93WTonc2Nyb2xsJ319PlxyXG4gICAgICAgICAgICA8U3VwcGxpZXJGb3JtMiBvbkNyZWF0ZU9wdGlvbj17aGFuZGxlQ3JlYXRlQ3VzdG9tZXJ9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTF9Lz4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgPlxyXG4gICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSBzdHlsZT17eyBwb3NpdGlvbjoncmVsYXRpdmUnLCBmbG9hdDoncmlnaHQnfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7Y29sb3I6JyMyMDJhNWEnfX0vPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzYwMHB4JywgcGFkZGluZzonMjBweCcsb3ZlcmZsb3c6J2hpZGRlbicsb3ZlcmZsb3dZOidzY3JvbGwnfX0+XHJcbiAgICAgICAgICAgIDxJdGVtRm9ybVZpZXcyIG9uQ3JlYXRlT3B0aW9uPXtoYW5kbGVDcmVhdGVJdGVtfSBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfS8+ICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L01vZGFsPlxyXG4gICAgXHJcbiA8TW9kYWwgXHJcbiAgICAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICAgICB9fVxyXG4gICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bG9hZGluZz8oPExvYWRlci8+XHJcbiAgICAgICAgICAgICAgICApOihcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3tjb2xvcjonZ3JlZW4nLGhlaWdodDonNDBweCcsIHdpZHRoOic0MHB4J319Lz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGdhcDonNjBweCcsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gaGFuZGxlRGVjaXNpb24oJ3N0YXknKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICBBZGQgTmV3XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGhhbmRsZURlY2lzaW9uKCdwcmV2aW91cycpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgIG9wZW49e0Vycm9yT3Blbk1vZGFsfVxyXG4gICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgICAgfX1cclxuICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xvYWRpbmc/KDxMb2FkZXIvPlxyXG4gICAgICAgICAgICAgICAgKTooXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJyx0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgPHA+PENhbmNlbEljb24gc3R5bGU9e3tjb2xvcjoncmVkJyxoZWlnaHQ6JzQwcHgnLCB3aWR0aDonNDBweCd9fS8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3tjb2xvcjoncmVkJ319PlNhdmluZyBGYWlsZWQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgIDxNb2RhbCBcclxuICAgICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsVXBkYXRlfVxyXG4gICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVXBkYXRlfVxyXG4gICAgICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgICAgIH19XHJcbiAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nPyg8TG9hZGVyLz5cclxuICAgICAgICAgICAgICAgICk6KFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJyx0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17e2NvbG9yOidncmVlbicsaGVpZ2h0Oic0MHB4Jywgd2lkdGg6JzQwcHgnfX0vPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZ2FwOic2MHB4JyxqdXN0aWZ5Q29udGVudDonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VVcGRhdGV9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiogU2lkZSBTaG9wIERyYXdlciAqL31cclxuICAgICAgPFNpZGVEcmF3ZXJcclxuICAgICAgICBhbmNob3I9XCJyaWdodFwiXHJcbiAgICAgICAgb3Blbj17c2hvcE9wZW59XHJcbiAgICAgICAgb25DbG9zZT17dG9nZ2xlU2hvcH1cclxuICAgICAgICBQYXBlclByb3BzPXt7XHJcbiAgICAgICAgICBzeDogeyB3aWR0aDogJzUwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNScsIHBhZGRpbmc6ICcyMHB4JyB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG1iPXsyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICBTZWxlY3QgSXRlbSBmcm9tIFNob3BcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNob3B9PlxyXG4gICAgICAgICAgICA8Q2xvc2UgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYj17Mn0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBTaG9wXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Nob3BTZWFyY2h9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTaG9wU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlZnJlc2hTaG9wfSBjb2xvcj1cInByaW1hcnlcIiBzeD17eyBtbDogMSB9fT5cclxuICAgICAgICAgICAgPFJlZnJlc2ggLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAge3Nob3BMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxLCBvdmVyZmxvd1k6ICdhdXRvJywgbWF4SGVpZ2h0OiAnY2FsYygxMDB2aCAtIDE4MHB4KScgfX0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAge3Nob3BJdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0ga2V5PXtpdGVtLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtgZGF0YToke2l0ZW0uY29udGVudFR5cGV9O2Jhc2U2NCwke2l0ZW0uZGF0YX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uaXRlbU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG9iamVjdEZpdDogJ2NvbnRhaW4nLCBwYWRkaW5nOiAnNXB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBzeD17eyBmbGV4R3JvdzogMSwgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXRlbU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZDIHsoaXRlbS5pdGVtU2VsbGluZ1ByaWNlICogcmF0ZSk/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInByaW1hcnlcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQge2l0ZW0uaXRlbVNlbGxpbmdQcmljZT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZGlzcGxheT1cImJsb2NrXCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN0b2NrOiB7aXRlbS5pdGVtUXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVG9JdGVtUHVyY2hhc2UoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiAnNXB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG10PXsyfT5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgY291bnQ9e3Nob3BUb3RhbFBhZ2VzfVxyXG4gICAgICAgICAgICAgICAgcGFnZT17c2hvcFBhZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2hvcFBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2lkZURyYXdlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbVB1cmNoYXNlVmlld0Zvcm1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TaG9wcGluZ0NhcnRPdXRsaW5lZCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vYXBpQ29uZmlnJztcblxuY29uc3QgSXRlbVRodW1ibmFpbCA9ICh7IGl0ZW1JZCwgaW5pdGlhbERhdGEsIGluaXRpYWxUeXBlIH0pID0+IHtcbiAgY29uc3QgW3NyYywgc2V0U3JjXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hJbWFnZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vIDEuIENoZWNrIGZvciBpbml0aWFsRGF0YSAocGFzc2VkIGZyb20gc2VhcmNoL3Nob3ApXG4gICAgICBpZiAoaW5pdGlhbERhdGEgJiYgaW5pdGlhbFR5cGUgJiYgaW5pdGlhbERhdGEgIT09IFwidW5kZWZpbmVkXCIgJiYgaW5pdGlhbFR5cGUgIT09IFwidW5kZWZpbmVkXCIgJiYgaW5pdGlhbERhdGEgIT09IFwibnVsbFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5pdGlhbERhdGEgPT09ICdzdHJpbmcnICYmIGluaXRpYWxEYXRhLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgYWxyZWFkeSBhIGRhdGEgVVJMXG4gICAgICAgICAgIGlmIChpbml0aWFsRGF0YS5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICAgIHNldFNyYyhpbml0aWFsRGF0YSk7XG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldFNyYyhgZGF0YToke2luaXRpYWxUeXBlfTtiYXNlNjQsJHtpbml0aWFsRGF0YX1gKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbERhdGEuZGF0YSkge1xuICAgICAgICAgICAvLyBIYW5kbGUgYnVmZmVyIG9iamVjdCBpZiBpdCdzIG5vdCBjb252ZXJ0ZWQgdG8gc3RyaW5nIHlldFxuICAgICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgVWludDhBcnJheShpbml0aWFsRGF0YS5kYXRhKTtcbiAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6IGluaXRpYWxUeXBlIH0pO1xuICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gc2V0U3JjKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIDIuIEZhbGxiYWNrIHRvIGZldGNoIGlmIG5vIGluaXRpYWwgZGF0YSBvciBpZiBpdCB3YXMgaW52YWxpZFxuICAgICAgaWYgKCFpdGVtSWQgfHwgaXRlbUlkID09PSBcInVuZGVmaW5lZFwiIHx8IGl0ZW1JZCA9PT0gXCJudWxsXCIpIHtcbiAgICAgICAgc2V0U3JjKG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtLyR7aXRlbUlkfWApO1xuICAgICAgICBpZiAocmVzLmRhdGEuZGF0YSAmJiByZXMuZGF0YS5kYXRhLmRhdGEpIHtcbiAgICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgVWludDhBcnJheShyZXMuZGF0YS5kYXRhLmRhdGEuZGF0YSk7XG4gICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6IHJlcy5kYXRhLmRhdGEuY29udGVudFR5cGUgfSk7XG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gc2V0U3JjKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBvbmxpbmUgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoSW1hZ2UoKTtcbiAgfSwgW2l0ZW1JZCwgaW5pdGlhbERhdGEsIGluaXRpYWxUeXBlXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxBdmF0YXJcbiAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgIHNyYz17c3JjfVxuICAgICAgc3g9e3sgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmMGYwJywgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnIH19XG4gICAgPlxuICAgICAgeyFzcmMgJiYgPFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiBzeD17eyBmb250U2l6ZTogNDAsIGNvbG9yOiAnIzk5OScgfX0gLz59XG4gICAgPC9BdmF0YXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtVGh1bWJuYWlsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlTWFpbnRlbmFuY2UyIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiRGVsZXRlSWNvbiIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJQYXBlciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJzdHlsZWQiLCJCb3giLCJBdXRvY29tcGxldGUiLCJNb2RhbCIsIkJhY2tkcm9wIiwiVGFibGVDb250YWluZXIiLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJEaXZpZGVyIiwiQ2FyZCIsIkNhcmRNZWRpYSIsIkNhcmRDb250ZW50IiwiUGFnaW5hdGlvbiIsIkF2YXRhciIsIkNoZWNrYm94IiwiRm9ybUNvbnRyb2xMYWJlbCIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkFkZCIsIkFycm93VXB3YXJkT3V0bGluZWQiLCJEcmFnSW5kaWNhdG9yUm91bmRlZCIsIlJlZnJlc2giLCJSZW1vdmVDaXJjbGVPdXRsaW5lIiwiRU5EUE9JTlRfVVJMIiwiaW52YWxpZGF0ZUNhY2hlIiwiU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIiwiRHJhd2VyIiwiU2lkZURyYXdlciIsIkJ1dHRvbiIsInY0IiwidXNlTmF2aWdhdGUiLCJEZW1vQ29udGFpbmVyIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJBZGFwdGVyRGF5anMiLCJEYXRlUGlja2VyIiwiZGF5anMiLCJBcnJvd0JhY2siLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiTG9hZGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsIkN1c3RvbWVyRm9ybVZpZXcyIiwiQ2xvc2UiLCJJdGVtRm9ybVZpZXcyIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiU3VwcGxpZXJGb3JtMiIsIkl0ZW1UaHVtYm5haWwiLCJMaWdodFRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIkJsYWNrVG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwic3R5bGUyIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkl0ZW1QdXJjaGFzZVZpZXdGb3JtIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm9wZW5CYWNrIiwic2V0T3BlbkJhY2siLCJoYW5kbGVPcGVuQmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlQmFjayIsIl91c2VTdGF0ZTMiLCJkYXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTQiLCJpdGVtUHVyY2hhc2VEYXRlIiwic2V0SXRlbVB1cmNoYXNlRGF0ZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXRlbVB1cmNoYXNlTnVtYmVyIiwic2V0SXRlbVB1cmNoYXNlTnVtYmVyIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJtYW51ZmFjdHVyZXIiLCJzZXRNYW51ZmFjdHVyZXIiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsIm1hbnVmYWN0dXJlcklEIiwic2V0TWFudWZhY3R1cmVySUQiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0IiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsIm1haW50ZW5hbmNlIiwic2V0TWFpbnRlbmFuY2UiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2Iiwibm90ZSIsInNldE5vdGUiLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiaW5wdXRWYWx1ZTIiLCJzZXRJbnB1dFZhbHVlMiIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0IiwiaW5wdXRWYWx1ZTMiLCJzZXRJbnB1dFZhbHVlMyIsIl9SZWFjdCR1c2VTdGF0ZTUiLCJfUmVhY3QkdXNlU3RhdGU2IiwiaW5wdXRWYWx1ZTQiLCJzZXRJbnB1dFZhbHVlNCIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJtYW51ZmFjdHVyZXJOdW1iZXIiLCJzZXRNYW51ZmFjdHVyZXJOdW1iZXIiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJ0b3RhbFVTRCIsInNldFRvdGFsVVNEIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsInRvdGFsIiwic2V0VG90YWwiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwidG90YWxGQyIsInNldFRvdGFsRkMiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwiaXRlbXMiLCJzZXRJdGVtcyIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJzdXBwbGllciIsInNldFN1cHBsaWVyIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsIkNoZWNrVHZBIiwic2V0Q2hlY2tUdkEiLCJkYXRlQ29tbWVudCIsIm5vdyIsImZvcm1hdCIsIkNyZWF0ZSIsInBlcnNvbiIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJwcm9qZWN0TmFtZSIsInNldFByb2plY3ROYW1lIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsInB1cmNoYXNlIiwic2V0UHVyY2hhc2UiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwibWFpbnRlbmFuY2VJbmZvIiwic2V0TWFpbnRlbmFuY2VJbmZvIiwiX3VzZVN0YXRlMzkiLCJfdXNlU3RhdGU0MCIsImludm9pY2VJbmZvIiwic2V0SW52b2ljZUluZm8iLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwiaXRlbUFycmF5Iiwic2V0SXRlbUFycmF5IiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsImF1dG9jb21wbGV0ZU9wdGlvbnMiLCJzZXRBdXRvY29tcGxldGVPcHRpb25zIiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsImF1dG9jb21wbGV0ZUxvYWRpbmciLCJzZXRBdXRvY29tcGxldGVMb2FkaW5nIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsImF1dG9jb21wbGV0ZVNlYXJjaCIsInNldEF1dG9jb21wbGV0ZVNlYXJjaCIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJJdGVtSW5mb3JtYXRpb24iLCJzZXRJdGVtSW5mb3JtYXRpb24iLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwicmF0ZSIsInNldFJhdGUiLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0IiwiaW52b2ljZSIsInNldEludm9pY2UiLCJoYW5kbGVGZXRjaCIsIl9yZWYwIiwiX3Jlc0l0ZW1PdXQkZGF0YSIsIl9yZXNJdGVtT3V0JGRhdGEyIiwiX3Jlc1N1cHBsaWVyJGRhdGEiLCJfcmVzSXRlbSRkYXRhIiwiX3Jlc1Byb2plY3QkZGF0YSIsIl9yZXNNYWludGVuYW5jZSRkYXRhIiwiX3Jlc1JhdGUkZGF0YSIsIl9yZXNQdXJjaGFzZSRkYXRhIiwiX3Jlc0ludm9pY2UkZGF0YSIsIl9yZXNNYWludGVuYW5jZSRkYXRhMiIsInJlc0l0ZW1PdXQiLCJudW0iLCJwYXJzZUludCIsInJlc1N1cHBsaWVyIiwic3VwcGxpZXJEYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwicmV2ZXJzZSIsInJlc0l0ZW0iLCJpdGVtSW5mbyIsIml0ZW1JIiwicmVzUHJvamVjdCIsInByb2plY3REYXRhIiwicmVzTWFpbnRlbmFuY2UiLCJtYWludGVuYW5jZURhdGFBbGwiLCJyZXNSYXRlIiwiZm9yRWFjaCIsInJvdyIsInJlc1B1cmNoYXNlIiwicmVzSW52b2ljZSIsInB1cmNoYXNlRGF0YSIsImludm9pY2VEYXRhIiwibWFpbnRlbmFuY2VEYXRhIiwibmV3RGF0YSIsImZpbHRlciIsInNvbWUiLCJJdGVtIiwiX2lkIiwiUmVmZXJlbmNlTmFtZTIiLCJJdGVtMiIsIlJlZmVyZW5jZU5hbWUiLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2Iiwic2hvcE9wZW4iLCJzZXRTaG9wT3BlbiIsIl91c2VTdGF0ZTU3IiwiX3VzZVN0YXRlNTgiLCJzaG9wSXRlbXMiLCJzZXRTaG9wSXRlbXMiLCJfdXNlU3RhdGU1OSIsIl91c2VTdGF0ZTYwIiwic2hvcFNlYXJjaCIsInNldFNob3BTZWFyY2giLCJfdXNlU3RhdGU2MSIsIl91c2VTdGF0ZTYyIiwic2hvcFBhZ2UiLCJzZXRTaG9wUGFnZSIsIl91c2VTdGF0ZTYzIiwiX3VzZVN0YXRlNjQiLCJzaG9wVG90YWxQYWdlcyIsInNldFNob3BUb3RhbFBhZ2VzIiwiX3VzZVN0YXRlNjUiLCJfdXNlU3RhdGU2NiIsInNob3BMb2FkaW5nIiwic2V0U2hvcExvYWRpbmciLCJmZXRjaFNob3AiLCJfcmVmMSIsImVuY29kZVVSSUNvbXBvbmVudCIsInRvdGFsUGFnZXMiLCJ0eXBlSXRlbSIsImhhbmRsZVJlZnJlc2hTaG9wIiwiaGFuZGxlU2hvcFBhZ2VDaGFuZ2UiLCJuZXdQYWdlIiwiaGFuZGxlU2hvcFNlYXJjaENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidG9nZ2xlU2hvcCIsImZldGNoQXV0b2NvbXBsZXRlSXRlbXMiLCJfcmVmMTAiLCJsZW5ndGgiLCJzbGljZSIsInNlYXJjaFJlc3VsdHMiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaGFuZGxlQWRkVG9JdGVtUHVyY2hhc2UiLCJzaG9wSXRlbSIsImV4aXN0aW5nSXRlbUluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsIl9pdGVtJGl0ZW1OYW1lIiwiaXRlbU5hbWUiLCJ1cGRhdGVkSXRlbXMiLCJjdXJyZW50SXRlbSIsIm5ld1F0eSIsIml0ZW1RdHkiLCJ0b3RhbEFtb3VudFVTRCIsIk1hdGgiLCJyb3VuZCIsIml0ZW1SYXRlIiwiZmNDb252ZXJ0VG9Vc2RUb3RhbCIsInBhcnNlRmxvYXQiLCJ0b3RhbEFtb3VudEZDIiwiVGF1eCIsIm5ld0l0ZW0iLCJpZFJvdyIsImNvbnRlbnRUeXBlIiwiaXRlbURlc2NyaXB0aW9uIiwiaXRlbUNvc3RQcmljZSIsImNvc3QiLCJhbW91bnRGYyIsImZjQ29udmVydFRvVXNkIiwidG90YWxBbW91bnQiLCJoYW5kbGVSZWFzb24iLCJoYW5kbGVDaGFuZ2VQcm9qZWN0IiwibmV3VmFsdWUiLCJzZWxlY3RlZE9wdGlvbnMiLCJmaW5kIiwib3B0aW9uIiwibmFtZSIsImhhbmRsZUNoYW5nZVN1cHBsaWVyIiwic3RvcmVOYW1lIiwiaGFuZGxlQ2hhbmdlU2VydmljZSIsIlN0cmluZyIsInNlcnZpY2VOdW1iZXIiLCJwYWRTdGFydCIsImN1c3RvbWVyTmFtZSIsIl9yb3ckaXRlbU5hbWUiLCJfcm93JGl0ZW1OYW1lMiIsIm5ld0Rlc2NyaXB0aW9uIiwiaGFuZGxlQ2hhbmdlSW52b2ljZSIsImludm9pY2VOdW1iZXIiLCJfcm93JGl0ZW1OYW1lMyIsIl9yb3ckaXRlbU5hbWU0IiwiZmV0Y2hQdXIiLCJfcmVmMTEiLCJfcmVzUHVyY2hhc2UkZGF0YTIiLCJfcmVzUHVyY2hhc2UkZGF0YTMiLCJtYXAiLCJfcm93JGl0ZW1OYW1lNSIsIl9yb3ckaXRlbU5hbWU2IiwibG9nIiwiX3Jlc00kZGF0YSIsIl9yZXNNJGRhdGEyIiwicmVzTSIsIl9yb3ckaXRlbU5hbWU3IiwiX3JvdyRpdGVtTmFtZTgiLCJfcmVzTSRkYXRhMyIsIl9yZXNNJGRhdGE0IiwiX3JvdyRpdGVtTmFtZTkiLCJfcm93JGl0ZW1OYW1lMCIsImhhbmRsZUNoYW5nZUl0ZW0iLCJoYW5kbGVDaGFuZ2UiLCJfZSR0YXJnZXQiLCJsaXN0IiwiaSIsImFkZEl0ZW0iLCJhZGRJdGVtUm93IiwidXBkYXRlIiwic3BsaWNlIiwiaGFuZGxlU2hvd0F1dG9jb21wbGV0ZSIsInVuZGVmaW5lZCIsImRlbGV0ZUl0ZW0iLCJfdXNlU3RhdGU2NyIsIl91c2VTdGF0ZTY4Iiwib3BlbkF1dG9jb21wbGV0ZTEiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMSIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTEiLCJoYW5kbGVDcmVhdGVDdXN0b21lciIsIm5ld0N1c3RvbWVyIiwiX3VzZVN0YXRlNjkiLCJfdXNlU3RhdGU3MCIsIm9wZW5BdXRvY29tcGxldGUyIiwic2V0T3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlQ3JlYXRlSXRlbSIsInJlc3VsdDAiLCJyZWR1Y2UiLCJzdW0iLCJ0b0ZpeGVkIiwicmVzdWx0MSIsInJlc3VsdDIiLCJyZXN1bHQiLCJpdGVtQ29zdCIsImZpbHRlckl0ZW1JbmZvcm1hdGlvbiIsIl9yb3ckaXRlbU5hbWUxIiwiYXJyYXlJdGVtUmVsYXRlZCIsImhhbmRsZVVwZGF0ZVB1cmNoYXNlIiwiX3JlZjEyIiwiX3Jlc1B1ciRkYXRhIiwicmVzUHVyIiwicmVsZXZhbnRQdXJjaGFzZXMiLCJfcm93JHByb2plY3ROYW1lIiwiX2xvb3AiLCJjdXJyZW50UmVzIiwicHVyY2hhc2VSb3ciLCJjdXJyZW50RGF0YSIsIlJlbGF0ZWRJdGVtIiwiaXRlbUJ1eSIsInRvdGFsR2VuZXJhbGUiLCJuZXdJdGVtcyIsIl9SZWxhdGVkSXRlbSRpdGVtTmFtZSIsIl9SZWxhdGVkSXRlbSRpdGVtTmFtZTIiLCJwdXNoIiwiaXRlbURpc2NvdW50IiwiZGlzY291bnQiLCJwZXJjZW50YWdlIiwiaXRlbUFtb3VudCIsInRvdGFsQ29zdCIsIml0ZW1XZWlnaHQiLCJzdG9jayIsIml0ZW1PdXQiLCJuZXdJdGVtT3V0IiwicHVyY2hhc2VBbW91bnQyIiwicHV0IiwiX3Jlc00kZGF0YTUiLCJyZWxldmFudE1haW50ZW5hbmNlIiwiX2xvb3AyIiwibWFpbnRlbmFuY2VSb3ciLCJfUmVsYXRlZEl0ZW0kaXRlbU5hbWUzIiwiX1JlbGF0ZWRJdGVtJGl0ZW1OYW1lNCIsIl9yZXNJJGRhdGEiLCJyZXNJIiwicmVsZXZhbnRJbnZvaWNlcyIsIl9sb29wMyIsImludm9pY2VSb3ciLCJfUmVsYXRlZEl0ZW0kaXRlbU5hbWU1IiwiX1JlbGF0ZWRJdGVtJGl0ZW1OYW1lNiIsImFsZXJ0IiwiaGFuZGxlVXBkYXRlUXR5IiwiX3JlZjEzIiwiaW5pdGlhbFN0YXRlIiwiUXR5VXBkYXRlIiwiUXR5TmV3IiwiX0l0ZW0kaXRlbU5hbWUiLCJfSXRlbSRpdGVtTmFtZTIiLCJpbmRleCIsIl9JdGVtJGl0ZW1OYW1lMyIsImlkcyIsImdldFJlcXVlc3RJZCIsIk9iamVjdCIsInZhbHVlcyIsIl9yZWYxNCIsIlByb21pc2UiLCJhbGwiLCJyZXNwIiwiX3Jlc3AkZGF0YSIsIl9yZXNwJGRhdGEyIiwiaXRlbVF1YW50aXR5IiwiTnVtYmVyIiwidXBkYXRlUmVxdWVzdCIsIl9yZWYxNSIsIl91c2VTdGF0ZTcxIiwiX3VzZVN0YXRlNzIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTczIiwiX3VzZVN0YXRlNzQiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTc1IiwiX3VzZVN0YXRlNzYiLCJsb2FkaW5nT3Blbk1vZGFsVXBkYXRlIiwic2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZSIsIl91c2VTdGF0ZTc3IiwiX3VzZVN0YXRlNzgiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsImhhbmRsZU9wZW5VcGRhdGUiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVDbG9zZVVwZGF0ZSIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVEZWNpc2lvbiIsImhpc3RvcnkiLCJiYWNrIiwicmVhc29uSW5mbyIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxNiIsIlJlZmVyZW5jZUluZm8iLCJSZWZlcmVuY2VJbmZvTnVtYmVyIiwiaWRJbmZvIiwiZGF0ZU5vdGlmaWNhdGlvbiIsInBvc3QiLCJfeCIsIl94MiIsImhhbmRsZVF0eSIsIl9yZWYxNyIsIl91c2VTdGF0ZTc5IiwiX3VzZVN0YXRlODAiLCJzYXZpbmciLCJzZXRTYXZpbmciLCJoYW5kbGVTdWJtaXQiLCJfcmVmMTgiLCJpdGVtc1dpdGhvdXREYXRhIiwiX3JlZjE5IiwicmVzdCIsIl9leGNsdWRlZDQiLCJzdGF0dXMiLCJfeDMiLCJfUmVhY3QkdXNlU3RhdGU3IiwiX1JlYWN0JHVzZVN0YXRlOCIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiX3VzZVN0YXRlODEiLCJfdXNlU3RhdGU4MiIsInNlYXJjaDIiLCJzZXRTZWFyY2gyIiwiaGFuZGxlU2VhcmNoMiIsIm5ld0FycmF5MiIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0YWJsZVJvd3MiLCJfSXRlbSRpdGVtTmFtZTQiLCJfSXRlbSRpdGVtTmFtZTUiLCJfSXRlbSRpdGVtTmFtZTYiLCJyZWxhdGVkIiwia2V5Iiwic3giLCJkaXNwbGF5IiwiZ2FwIiwiYWxpZ25JdGVtcyIsIml0ZW1JZCIsImluaXRpYWxEYXRhIiwiaW5pdGlhbFR5cGUiLCJmbGV4RGlyZWN0aW9uIiwiZm9udFdlaWdodCIsImlkIiwibXVsdGlsaW5lIiwicGxhY2Vob2xkZXIiLCJyb3dzIiwib25DaGFuZ2UiLCJzaXplIiwiZGlzYWJsZWQiLCJ0aXRsZSIsInBsYWNlbWVudCIsIm9uQ2xpY2siLCJmbG9hdCIsImRpc2FibGVDbGVhcmFibGUiLCJvcHRpb25zIiwiX3JvdyRpdGVtTmFtZTEwIiwiZ2V0T3B0aW9uTGFiZWwiLCJpdGVtQnJhbmQiLCJyZW5kZXJPcHRpb24iLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsInJlcXVpcmVkIiwib25JbnB1dENoYW5nZSIsImV2ZW50IiwibmV3SW5wdXRWYWx1ZSIsImZpbHRlck9wdGlvbnMiLCJ4IiwiUGFwZXJDb21wb25lbnQiLCJfcmVmMjAiLCJjaGlsZHJlbiIsIm90aGVyIiwiX2V4Y2x1ZGVkNSIsIm1hcmdpblRvcCIsIm9uTW91c2VEb3duIiwibGFiZWwiLCJoZWxwZXJUZXh0IiwidGV4dEFsaWduIiwicmVwbGFjZSIsInRhYmxlUm93czIiLCJfSXRlbSRpdGVtTmFtZTciLCJfSXRlbSRpdGVtTmFtZTgiLCJfSXRlbSRpdGVtTmFtZTkiLCJfcm93JGl0ZW1OYW1lMTEiLCJfcmVmMjEiLCJfZXhjbHVkZWQ2IiwiYWxpZ24iLCJjdXJzb3IiLCJwciIsImVkZ2UiLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJwYWRkaW5nIiwieHMiLCJkYXRlQWRhcHRlciIsImNvbXBvbmVudHMiLCJodG1sRm9yIiwidHlwZSIsInN0YXJ0QWRvcm5tZW50Iiwic3VwcGxpZXJOYW1lIiwiaW5wdXRWYWx1ZSIsIl9yZWYyMiIsIl9yZWYyMyIsIl9leGNsdWRlZDciLCJfcmVmMjQiLCJzZXJ2aWNlTmFtZSIsIl9yZWYyNSIsInRvVXBwZXJDYXNlIiwicGFkZGluZ1JpZ2h0IiwiY29udHJvbCIsImNoZWNrZWQiLCJyaWdodCIsIkZyYWdtZW50IiwiY29sU3BhbiIsIm9uQ2xvc2UiLCJvdmVyZmxvd1kiLCJvbkNyZWF0ZU9wdGlvbiIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsImFuY2hvciIsIlBhcGVyUHJvcHMiLCJtYiIsImZ1bGxXaWR0aCIsIm1sIiwibWF4SGVpZ2h0IiwiX3JlZjI2IiwiX2l0ZW0kaXRlbVNlbGxpbmdQcmljIiwiaW1hZ2UiLCJhbHQiLCJvYmplY3RGaXQiLCJpdGVtU2VsbGluZ1ByaWNlIiwiZ3V0dGVyQm90dG9tIiwiY291bnQiLCJwYWdlIiwic3JjIiwic2V0U3JjIiwiZmV0Y2hJbWFnZSIsInN0YXJ0c1dpdGgiLCJidWZmZXIiLCJVaW50OEFycmF5IiwiYmxvYiIsIkJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVhZEFzRGF0YVVSTCIsImVyciIsImJvcmRlciJdLCJzb3VyY2VSb290IjoiIn0=