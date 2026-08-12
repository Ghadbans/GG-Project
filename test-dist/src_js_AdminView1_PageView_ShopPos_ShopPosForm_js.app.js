"use strict";
exports.id = "src_js_AdminView1_PageView_ShopPos_ShopPosForm_js";
exports.ids = ["src_js_AdminView1_PageView_ShopPos_ShopPosForm_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/ShopPos/ShopPosForm.js"
/*!***********************************************************!*\
  !*** ./src/js/AdminView1/PageView/ShopPos/ShopPosForm.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _component_SideShop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/SideShop */ "./src/js/component/SideShop.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../utils/apiCache */ "./src/js/utils/apiCache.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../../../img/no-data.png */ "./src/js/img/no-data.png");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["children"],
  _excluded4 = ["children"];
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
















































var TAX_RATE = 0.16;
var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__["default"].tooltip)]: {
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
var drawerWidth = 200;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_30__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref5 => {
  var theme = _ref5.theme,
    open = _ref5.open;
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_33__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref6 => {
  var theme = _ref6.theme,
    open = _ref6.open;
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
function ShopPosForm() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_45__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_55__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_55__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_56__.selectCurrentUser);
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_45__.useLocation)();
  var _ref7 = location.state || {
      cart: []
    },
    cart = _ref7.cart;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_56__.setUser)({
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
        return _ref8.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_56__.logOut)());
    navigate('/');
  };
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/create-invoice");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    invoiceDate = _useState2[0],
    setInvoiceDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    time = _useState4[0],
    setTime = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    inputValue = _useState6[0],
    setInputValue = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    CheckTvA = _useState8[0],
    setCheckTvA = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    factureNumber = _useState0[0],
    setFactureNumber = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    items = _useState10[0],
    SetItems = _useState10[1];
  // Inputs
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    totalFC = _useState12[0],
    setTotal = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    totalUSD = _useState14[0],
    setTotalUSD = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    creditFC = _useState16[0],
    setCreditFC = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    creditUsd = _useState18[0],
    setCreditUsd = _useState18[1];

  // Redesign State: Item Grid
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    itemsList = _useState20[0],
    setItemsList = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    totalPages = _useState22[0],
    setTotalPages = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState24 = _slicedToArray(_useState23, 2),
    page = _useState24[0],
    setPage = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState26 = _slicedToArray(_useState25, 2),
    search = _useState26[0],
    setSearch = _useState26[1];
  // const [loadingData, setLoadingData] = useState(true); // Already defined later in file, reusing or creating new unique one? 
  // checking existing loadingData at line 178 of ItemViewAdmin... wait this is ShopPosForm.
  // ShopPosForm doesn't seem to have loadingData at top level scope... let's check. 
  // It has `const [loading, setLoading] = useState(false);` later. 
  // `loadingData` is used in the JSX later? 
  // Let's check original file again. Line 369 uses `loadingData?`. 
  // But where is it defined? 
  // Ah, I missed where it was defined in my previous reads. It's likely defined.
  // I will use a specific name to avoid collision: `loadingItems`
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState28 = _slicedToArray(_useState27, 2),
    loadingItems = _useState28[0],
    setLoadingItems = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    allItems = _useState30[0],
    setAllItems = _useState30[1]; // Store all fetched items

  // Fetch Logic for Item Grid
  var handlePageChange = (event, value) => {
    setPage(value);
  };
  var handleSearchChange = event => {
    setSearch(event.target.value);
    setPage(1);
  };
  var fetchItems = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(function* () {
      setLoadingItems(true);
      setLoadingItems(true);
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/item-shop?page=").concat(page, "&limit=48&search=").concat(search, "&sort=-_id"));
        setTotalPages(res.data.totalPages);
        setItemsList(res.data.items ? res.data.items.filter(item => item.typeItem === 'Goods') : []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoadingItems(false);
    });
    return function fetchItems() {
      return _ref9.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchItems();
  }, [page, search]);

  // Client-side filtering removed in favor of server-side fetch

  var handleRefreshSearch = () => {
    fetchItems();
    setSearch('');
    setPage(1);
  };
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState32 = _slicedToArray(_useState31, 2),
    ItemInformation = _useState32[0],
    setItemInformation = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Thank you for your visit. Goods sold are neither returned or exchanged."),
    _useState34 = _slicedToArray(_useState33, 2),
    note = _useState34[0],
    setNote = _useState34[1];
  var dateComment = new Date();
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    rate = _useState36[0],
    setRate = _useState36[1];
  var Create = user.data.userName;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var resRate = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/rateReturn"));
          resRate.data.data.map(row => setRate(row.rateR));
          var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/get-last-saved-pos"));
          setFactureNumber(parseInt(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.factureNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.factureNumber) || 0) + 1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchlastNumber() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchlastNumber();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchItem = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var _res$data3;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/item"));
          setItemInformation((_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.filter(row => row.typeItem === "Goods").map(row => _objectSpread(_objectSpread({}, row), {}, {
            ItemNumber: row.itemUpc.newCode + '-' + String(row.itemUpc.itemNumber).padStart(6, '0')
          })).reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchItem() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchItem();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (cart.length > 0) {
      SetItems(cart.map(item => ({
        idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_44__["default"])(),
        itemName: {
          _id: item._id,
          itemName: item.itemName
        },
        itemDescription: item.itemDescription,
        itemDiscount: 0,
        itemQty: 1,
        itemRate: Math.round(item.itemSellingPrice * rate * 100) / 100,
        itemAmount: Math.round(item.itemSellingPrice * rate * 100) / 100,
        itemCost: Math.round(item.itemCostPrice * rate * 100) / 100,
        totalAmount: Math.round(item.itemSellingPrice * rate * 100) / 100,
        discount: 0,
        percentage: 0,
        itemBuy: 0,
        itemWeight: item.itemWeight,
        totalGenerale: Math.round(item.itemCostPrice * rate * 100) / 100,
        totalCost: Math.round(item.itemCostPrice * rate * 100) / 100,
        stock: item.itemQuantity,
        itemOut: 0,
        newItemOut: 0
      })));
    }
  }, [cart, rate]);
  var handleChangeItem = (idRow, newValue) => {
    var selectedOptions = newValue;
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
        itemName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemName
      },
      itemCost: (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemCostPrice) * rate,
      itemDescription: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemDescription,
      itemRate: (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemSellingPrice) * rate,
      stock: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemQuantity,
      unit: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.unit
    }) : row));
  };
  var handleChange = (e, i) => {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var list = [...items];
    list[i][name] = value;
    if (list[i]['itemDiscount'] > 5) {
      list[i]['itemDiscount'] = 5;
    }
    list[i]['totalAmount'] = Math.round(list[i]['itemQty'] * list[i]['itemRate'] * 100) / 100;
    list[i]['totalCost'] = Math.round(list[i]['itemQty'] * list[i]['itemCost'] * 100) / 100;
    list[i]['discount'] = list[i]['totalAmount'] * list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount'] / 100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount'] - list[i]['percentage']) * 100) / 100;
    list[i]['totalGenerale'] = Math.round(list[i]['itemCost'] * list[i]['itemBuy'] * 100) / 100;
    SetItems(list);
  };
  var handleChangeCEO = (e, i) => {
    var _e$target2 = e.target,
      name = _e$target2.name,
      value = _e$target2.value;
    var list = [...items];
    list[i][name] = value;
    list[i]['totalAmount'] = Math.round(list[i]['itemQty'] * list[i]['itemRate'] * 100) / 100;
    list[i]['totalCost'] = Math.round(list[i]['itemQty'] * list[i]['itemCost'] * 100) / 100;
    list[i]['discount'] = list[i]['totalAmount'] * list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount'] / 100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount'] - list[i]['percentage']) * 100) / 100;
    list[i]['totalGenerale'] = Math.round(list[i]['itemCost'] * list[i]['itemBuy'] * 100) / 100;
    SetItems(list);
  };
  //addItem
  var addItem = () => {
    SetItems([...items, {
      typeItem: '',
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_44__["default"])(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemAmount: 0,
      itemCost: 0,
      totalAmount: 0,
      discount: 0,
      percentage: 0,
      itemBuy: 0,
      itemWeight: "",
      totalGenerale: 0,
      totalCost: 0,
      stock: 0,
      itemOut: 0,
      newItemOut: 0
    }]);
  };
  var handleDragEnd = result => {
    if (!result.destination) {
      return;
    }
    var newItems = [...items];
    var _newItems$splice = newItems.splice(result.source.index, 1),
      _newItems$splice2 = _slicedToArray(_newItems$splice, 1),
      removed = _newItems$splice2[0];
    newItems.splice(result.destination.index, 0, removed);
    SetItems(newItems);
  };
  var deleteItem = idRow => {
    SetItems(items => items.filter(Item => Item.idRow !== idRow));
  };
  var filterItemInformation = ItemInformation.filter(option => !items.find(row => {
    var _row$itemName;
    return option._id === ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName._id) && option.typeItem === "Goods";
  }));
  {/** Item InFO */}
  var handleShowAutocomplete = idRow => {
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: null,
        itemName: null
      },
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemAmount: 0,
      itemCost: 0,
      totalAmount: 0,
      discount: 0,
      percentage: 0,
      itemBuy: 0,
      itemWeight: "",
      totalGenerale: 0,
      totalCost: 0,
      stock: 0,
      itemOut: 0,
      newItemOut: 0
    }) : row));
  };
  var handleShowAutocompleteDescription = idRow => {
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        itemName: 'empty'
      }
    }) : row));
  };
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    openItemUpdate = _useState38[0],
    setOpenItemUpdate = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState40 = _slicedToArray(_useState39, 2),
    idItem = _useState40[0],
    setIdItem = _useState40[1];
  var handleOpenItemUpdate = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (id) {
      setOpenItemUpdate(true);
      setIdItem(id);
    });
    return function handleOpenItemUpdate(_x) {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleCloseItemUpdate = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      setOpenItemUpdate(false);
      if (idItem) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/get-item/").concat(idItem));
          SetItems(items => items.map(row => {
            var _row$itemName2;
            return ((_row$itemName2 = row.itemName) === null || _row$itemName2 === void 0 ? void 0 : _row$itemName2._id) === res.data.data._id ? _objectSpread(_objectSpread({}, row), {}, {
              itemName: {
                _id: res.data.data._id,
                itemName: res.data.data.itemName
              },
              itemDescription: res.data.data.itemDescription,
              itemCost: res.data.data.itemCostPrice,
              itemRate: res.data.data.itemSellingPrice,
              stock: res.data.data.itemQuantity,
              totalAmount: row.itemQty * res.data.data.itemSellingPrice,
              discount: row.itemQty * res.data.data.itemSellingPrice * row.itemDiscount,
              percentage: row.itemQty * res.data.data.itemSellingPrice * row.itemDiscount / 100,
              itemAmount: row.itemQty * res.data.data.itemSellingPrice - row.itemQty * res.data.data.itemSellingPrice * row.itemDiscount / 100,
              totalCost: row.itemQty * res.data.data.itemCostPrice,
              totalGenerale: res.data.data.itemCostPrice * row.itemBuy
            }) : row;
          }));
        } catch (error) {}
      }
    });
    return function handleCloseItemUpdate() {
      return _ref11.apply(this, arguments);
    };
  }();
  {/** Item InFO End */}
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    customer = _useState42[0],
    setCustomer = _useState42[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCustomer = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/customer"));
          setCustomer(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchCustomer() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchCustomer();
  }, []);
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState44 = _slicedToArray(_useState43, 2),
    customerName = _useState44[0],
    setCustomerName = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    openAutocomplete1 = _useState46[0],
    setOpenAutocomplete1 = _useState46[1];
  var handleOpenOpenAutocomplete1 = e => {
    e.stopPropagation();
    setOpenAutocomplete1(true);
  };
  var handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  var handleCreateCustomer = newCustomer => {
    setCustomer([newCustomer, ...customer]);
  };
  var handleChangeCustomer = newValue => {
    var selectedOptions = customer.find(option => option === newValue);
    setCustomerName({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      customerName: (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.customerFullName) || (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.companyName),
      billingAddress: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingAddress,
      billingCity: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingCity
    });
  };
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    openAutocomplete2 = _useState48[0],
    setOpenAutocomplete2 = _useState48[1];
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

  // Redesign Action: Add to Invoice from Grid
  var handleAddToInvoice = selectedItem => {
    if (!selectedItem) return;
    SetItems(prevItems => {
      var existingItemIndex = prevItems.findIndex(item => item.itemName._id === selectedItem._id);
      if (existingItemIndex >= 0) {
        var updatedItems = [...prevItems];
        var item = _objectSpread({}, updatedItems[existingItemIndex]);
        var newQty = (parseInt(item.itemQty, 10) || 0) + 1;
        if (newQty > item.stock) {
          react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Stock Exceeded!", {
            position: "top-center"
          });
          return prevItems;
        }
        item.itemQty = newQty;
        item.totalAmount = Math.round(item.itemQty * item.itemRate * 100) / 100;
        item.totalCost = Math.round(item.itemQty * item.itemCost * 100) / 100;
        item.discount = item.totalAmount * item.itemDiscount;
        item.percentage = item.discount / 100;
        item.itemAmount = Math.round((item.totalAmount - item.percentage) * 100) / 100;
        // Updating totalGenerale to reflect cost increases, though usage is inconsistent in legacy code.
        item.totalGenerale = item.totalCost;
        updatedItems[existingItemIndex] = item;
        return updatedItems;
      } else {
        var newRate = selectedItem.itemSellingPrice * rate;
        var newCost = selectedItem.itemCostPrice * rate;
        var newItemRow = {
          typeItem: 'Goods',
          idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_44__["default"])(),
          itemName: {
            _id: selectedItem._id,
            itemName: selectedItem.itemName
          },
          itemDescription: selectedItem.itemDescription,
          itemDiscount: 0,
          itemQty: 1,
          itemRate: newRate,
          itemAmount: newRate,
          itemCost: newCost,
          totalAmount: newRate,
          discount: 0,
          percentage: 0,
          itemBuy: 0,
          itemWeight: selectedItem.weight,
          totalGenerale: newCost,
          totalCost: newCost,
          stock: selectedItem.itemQuantity,
          unit: selectedItem.unit,
          itemOut: 0,
          newItemOut: 0
        };
        return [...prevItems, newItemRow];
      }
    });
  };

  // Derived State Calculations
  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
      var result1 = items.reduce((sum, row) => sum + row.itemAmount, 0);
      var tva = 0;
      var TWTVA = result1;
      if (CheckTvA) {
        tva = Math.round(result1 * TAX_RATE * 100) / 100;
        TWTVA = result1 + tva;
      }
      var usdConvert = totalUSD * rate;
      var totalPaid = Number(usdConvert) + Number(totalFC);
      var newBalance = Math.round((TWTVA - totalPaid) * 100) / 100;

      // Credit Logic
      var creditI = Math.abs(newBalance);
      var usdConvert1 = creditUsd * rate;
      var totalPaid1 = Number(usdConvert1) + Number(creditFC);
      var rest = Math.round((creditI - totalPaid1) * 100) / 100;
      var totalPaidInfo = totalPaid - totalPaid1;
      return {
        subTotal: result1,
        tax: tva,
        totalInvoice: TWTVA,
        balanceDue: newBalance,
        credit: creditI,
        TotalAmountPaid: totalPaidInfo,
        remaining: rest
      };
    }, [CheckTvA, items, rate, totalUSD, totalFC, creditUsd, creditFC]),
    subTotal = _useMemo.subTotal,
    tax = _useMemo.tax,
    totalInvoice = _useMemo.totalInvoice,
    balanceDue = _useMemo.balanceDue,
    credit = _useMemo.credit,
    TotalAmountPaid = _useMemo.TotalAmountPaid,
    remaining = _useMemo.remaining;
  var resetForm = () => {
    setTotal(0);
    setTotalUSD(0);
    setCreditFC(0);
    setCreditUsd(0);
    SetItems([]);
    setCheckTvA(false);
    setCustomerName({});
    setNote("Thank you for your visit. Goods sold are neither returned or exchanged.");
    setLoadingOpenModal(false);
    setLoadingOpenModalUpdate(false);
    setErrorOpenModal(false);
  };
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    open1 = _useState50[0],
    setOpen1 = _useState50[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseBack = () => {
    setOpen1(false);
  };
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState52 = _slicedToArray(_useState51, 2),
    loading = _useState52[0],
    setLoading = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState54 = _slicedToArray(_useState53, 2),
    loadingOpenModal = _useState54[0],
    setLoadingOpenModal = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState56 = _slicedToArray(_useState55, 2),
    loadingOpenModalUpdate = _useState56[0],
    setLoadingOpenModalUpdate = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    ErrorOpenModal = _useState58[0],
    setErrorOpenModal = _useState58[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setOpen1(false);
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
    setOpen1(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    resetForm();
    window.location.reload(); // Removed hard reload
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
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState60 = _slicedToArray(_useState59, 2),
    referenceInfo = _useState60[0],
    setReferenceInfo = _useState60[1];
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: 'S-00' + String(ReferenceInfoNumber).padStart(6, '0') + ' For ' + customerName.customerName,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2, _x3) {
      return _ref13.apply(this, arguments);
    };
  }();
  var status = '';
  if (parseInt(balanceDue) > 0 && balanceDue !== totalInvoice) {
    status = 'Partially-Paid';
  } else if (parseFloat(balanceDue) <= 0) {
    status = 'Paid';
  } else {
    status = 'Draft';
  }
  var itemFilter = items.filter(row => {
    var _row$itemName3;
    return row.itemName.itemName !== '' && ((_row$itemName3 = row.itemName) === null || _row$itemName3 === void 0 ? void 0 : _row$itemName3._id);
  });
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState62 = _slicedToArray(_useState61, 2),
    saving = _useState62[0],
    setSaving = _useState62[1];
  var handleQty = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* () {
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/CalculateTotal"));
      } catch (error) {
        console.log(error);
      }
    });
    return function handleQty() {
      return _ref14.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_44__["default"])(),
        customerName,
        factureNumber,
        invoiceDate,
        time,
        TotalAmountPaid,
        remaining,
        credit,
        creditUsd,
        creditFC,
        status,
        items: itemFilter,
        subTotal,
        totalFC,
        totalUSD,
        tax,
        rate,
        Create,
        balanceDue,
        note,
        totalInvoice,
        synced: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_42__.ENDPOINT_URL, "/create-pos"), data);
        if (res) {
          setReferenceInfo(res.data.data.factureNumber);
          handleQty();
          (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_43__.invalidateCache)('/pos');
          // Open Loading View
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.factureNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
          handleOpen();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x4) {
      return _ref15.apply(this, arguments);
    };
  }();
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_32__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_31__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_36__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Add new invoice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_51__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_65__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_64__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_57__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_31__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_37__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_34__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SideShop__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_31__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_35__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    md: 7,
    sx: {
      height: '85vh',
      overflowY: 'auto',
      overflowX: 'hidden',
      pr: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disableClearable: true,
    options: customer,
    getOptionLabel: option => option.customerFullName ? option.customerFullName : option.companyName,
    onChange: (e, newValue) => {
      handleChangeCustomer(newValue);
    },
    PaperComponent: _ref16 => {
      var children = _ref16.children,
        other = _objectWithoutProperties(_ref16, _excluded3);
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
      }, "ADD NEW CUSTOMER")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, params, {
      label: "Customer Name",
      required: true,
      sx: {
        '& .MuiInputBase-input': {
          fontSize: '15px'
        },
        '& .MuiInputLabel-root': {
          fontSize: '15px'
        }
      }
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    htmlFor: "factureNumber"
  }, "Invoice Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    type: "number",
    id: "factureNumber",
    name: "factureNumber",
    label: "Invoice Number",
    value: factureNumber,
    onChange: e => setFactureNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "I-"),
    sx: {
      fontSize: '15px'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_47__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_48__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_46__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_49__.DatePicker, {
    required: true,
    name: "invoiceDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_50___default()(invoiceDate),
    onChange: date => setInvoiceDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    slotProps: {
      textField: {
        sx: {
          '& .MuiInputBase-input': {
            fontSize: '15px'
          },
          '& .MuiInputLabel-root': {
            fontSize: '15px'
          }
        }
      }
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_47__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_48__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_46__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_49__.DatePicker, {
    required: true,
    name: "time",
    label: "Time",
    value: dayjs__WEBPACK_IMPORTED_MODULE_50___default()(time),
    onChange: date => setTime(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    slotProps: {
      textField: {
        sx: {
          '& .MuiInputBase-input': {
            fontSize: '15px'
          },
          '& .MuiInputLabel-root': {
            fontSize: '15px'
          }
        }
      }
    },
    format: "HH:mm"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: addItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  }))))), user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_63__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_63__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_63__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
    ref: provided.innerRef
  }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", _extends({}, provided.dragHandleProps, {
    style: {
      textAlign: 'center',
      cursor: 'grab',
      fontSize: '15px',
      fontWeight: 'bold'
    }
  }), i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    required: true,
    name: "newDescription",
    id: "newDescription",
    value: Item.newDescription,
    onChange: e => handleChangeCEO(e, i),
    size: "small",
    disabled: user.data.role === 'User',
    sx: {
      width: '100%',
      backgroundColor: 'white',
      fontSize: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
    title: "Delete",
    sx: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => deleteItem(Item.idRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", _extends({}, provided.dragHandleProps, {
    style: {
      textAlign: 'center',
      cursor: 'grab',
      fontSize: '15px',
      fontWeight: 'bold'
    }
  }), i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: '15px',
      fontWeight: 'bold',
      display: 'block',
      lineHeight: '1'
    }
  }, Item.itemName ? Item.itemName.itemName.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => handleShowAutocomplete(Item.idRow),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_41__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), Item.itemName._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Edit",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => handleOpenItemUpdate(Item.itemName._id),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_40__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disableClearable: true,
    options: filterItemInformation,
    getOptionLabel: option => option.itemUpc.newCode + '-' + String(option.itemUpc.itemNumber).padStart(6, '0') + ' / ' + option.itemName + ' / ' + option.itemBrand,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], props, option.itemUpc.newCode + '-' + String(option.itemUpc.itemNumber).padStart(6, '0') + ' / ' + option.itemName + ' / ' + option.itemBrand),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], params),
    inputValue: inputValue,
    onInputChange: (event, newInputValue) => {
      setInputValue(newInputValue);
    },
    filterOptions: (options, _ref17) => {
      var inputValue = _ref17.inputValue;
      return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.ItemNumber.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
    },
    onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
    size: "small",
    PaperComponent: _ref18 => {
      var children = _ref18.children,
        other = _objectWithoutProperties(_ref18, _excluded4);
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
      backgroundColor: 'white',
      '& .MuiInputBase-input': {
        fontSize: '15px'
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disabled: parseFloat(Item.stock) <= 0,
    name: "itemQty",
    id: "itemQty",
    onChange: e => {
      if (e.target.value <= Item.stock) {
        handleChangeCEO(e, i);
      }
    },
    size: "small",
    value: Item.itemQty,
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "itemRate",
    id: "itemRate",
    value: Item.itemRate,
    onChange: e => handleChangeCEO(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "itemDiscount",
    id: "itemDiscount",
    value: Item.itemDiscount,
    onChange: e => handleChangeCEO(e, i),
    size: "small",
    placeholder: "1 to 5 %",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    id: "amountTotalInvoice"
  }, Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
    title: "Delete",
    sx: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => deleteItem(Item.idRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  })))))))), provided.placeholder))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      overflowX: 'auto',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_63__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_63__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_63__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
    ref: provided.innerRef
  }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", _extends({}, provided.dragHandleProps, {
    style: {
      textAlign: 'center',
      cursor: 'grab',
      fontSize: '15px',
      fontWeight: 'bold'
    }
  }), i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    required: true,
    name: "newDescription",
    id: "newDescription",
    value: Item.newDescription,
    onChange: e => handleChange(e, i),
    size: "small",
    disabled: user.data.role === 'User',
    sx: {
      width: '100%',
      backgroundColor: 'white',
      '& .MuiInputBase-input': {
        fontSize: '15px'
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
    title: "Delete",
    sx: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => deleteItem(Item.idRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", _extends({}, provided.dragHandleProps, {
    style: {
      textAlign: 'center',
      cursor: 'grab',
      fontSize: '15px',
      fontWeight: 'bold'
    }
  }), i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: '15px',
      fontWeight: 'bold',
      display: 'block',
      lineHeight: '1'
    }
  }, Item.itemName ? Item.itemName.itemName.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => handleShowAutocomplete(Item.idRow),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_41__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disableClearable: true,
    options: filterItemInformation,
    getOptionLabel: option => option.itemUpc.newCode + '-' + String(option.itemUpc.itemNumber).padStart(6, '0') + ' / ' + option.itemName + ' / ' + option.itemBrand,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], props, option.itemUpc.newCode + '-' + String(option.itemUpc.itemNumber).padStart(6, '0') + ' / ' + option.itemName + ' / ' + option.itemBrand),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], params),
    inputValue: inputValue,
    onInputChange: (event, newInputValue) => {
      setInputValue(newInputValue);
    },
    filterOptions: (options, _ref19) => {
      var inputValue = _ref19.inputValue;
      return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()) || option.ItemNumber.toLowerCase().includes(inputValue.toLowerCase()));
    },
    onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
    size: "small",
    sx: {
      width: '300px',
      backgroundColor: 'white',
      '& .MuiInputBase-input': {
        fontSize: '15px'
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disabled: parseFloat(Item.stock) <= 0,
    name: "itemQty",
    id: "itemQty",
    onChange: e => {
      if (e.target.value <= Item.stock) {
        handleChange(e, i);
      }
    },
    size: "small",
    value: Item.itemQty,
    sx: {
      width: '100px',
      backgroundColor: 'white',
      '& .MuiInputBase-input': {
        fontSize: '15px'
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    id: "amountTotalInvoice",
    style: {
      fontSize: '15px'
    }
  }, Item.itemRate.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "itemDiscount",
    id: "itemDiscount",
    value: Item.itemDiscount,
    onChange: e => handleChange(e, i),
    size: "small",
    placeholder: "1 to 5 %",
    sx: {
      width: 100,
      backgroundColor: 'white',
      '& .MuiInputBase-input': {
        fontSize: '15px'
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    id: "amountTotalInvoice",
    style: {
      fontSize: '15px'
    }
  }, Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
    title: "Delete",
    sx: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => deleteItem(Item.idRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  })))))))), provided.placeholder)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "firstTable",
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'center'
    },
    colSpan: 2
  }, "Tax Details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Total Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, " FC ", subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (subTotal / rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "TVA @ 16 %", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      checked: CheckTvA,
      onChange: e => setCheckTvA(e.target.checked)
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, "FC ", tax.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (tax / rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Total General"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, "FC ", totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (totalInvoice / rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Cash FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'space-between',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "amountPaidFC",
    value: totalFC,
    onChange: e => setTotal(e.target.value),
    size: "small",
    sx: {
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Cash USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'space-between',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "amountPaidUSD",
    value: totalUSD,
    onChange: e => setTotalUSD(e.target.value),
    size: "small",
    sx: {
      backgroundColor: 'white'
    }
  }))), balanceDue >= 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, "FC ", balanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (balanceDue / rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Amount to Return"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, "FC ", Math.abs(balanceDue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", Math.abs(balanceDue / rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")"))), balanceDue < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Return FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'space-between',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "amountPaidFC",
    value: creditFC,
    onChange: e => setCreditFC(e.target.value),
    size: "small",
    sx: {
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Return USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'space-between',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "amountPaidFC",
    value: creditUsd,
    onChange: e => setCreditUsd(e.target.value),
    size: "small",
    sx: {
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "remaining"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, "FC ", remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", (remaining / rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "note",
    name: "note",
    multiline: true,
    rows: 4,
    value: note,
    label: "Invoice Note",
    onChange: e => setNote(e.target.value),
    sx: {
      width: '50%',
      backgroundColor: 'white',
      '& .MuiInputBase-input': {
        fontSize: '15px'
      },
      '& .MuiInputLabel-root': {
        fontSize: '15px'
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, "Saving...")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    md: 5,
    sx: {
      height: '85vh',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      padding: '10px',
      minHeight: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      display: 'flex',
      gap: 2,
      mb: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: "Search Item",
    variant: "outlined",
    fullWidth: true,
    value: search,
    onChange: handleSearchChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    variant: "contained",
    size: "small",
    onClick: handleRefreshSearch,
    sx: {
      whiteSpace: 'nowrap',
      minWidth: 'auto',
      px: 2
    }
  }, "Refresh")), loadingItems ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_54__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 2
  }, itemsList.map(item => {
    var _ref20;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
      key: item._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sx: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
      component: "img",
      height: "140",
      image: item.data ? "data:".concat(item.contentType, ";base64,").concat(item.data) : _img_no_data_png__WEBPACK_IMPORTED_MODULE_66__,
      alt: item.itemName,
      sx: {
        objectFit: 'contain',
        p: 1
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
      sx: {
        flexGrow: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      gutterBottom: true,
      variant: "subtitle2",
      component: "div"
    }, item.itemName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "body2",
      color: "text.secondary"
    }, "FC ", (_ref20 = item.itemSellingPrice * rate) === null || _ref20 === void 0 ? void 0 : _ref20.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "caption",
      display: "block"
    }, "Stock: ", item.itemQuantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      variant: "contained",
      size: "small",
      color: "primary",
      fullWidth: true,
      sx: {
        mt: 1
      },
      onClick: () => handleAddToInvoice(item),
      disabled: item.itemQuantity <= 0
    }, "ADD TO INV"))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      mt: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    count: totalPages,
    page: page,
    onChange: handlePageChange
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    open: open1,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_59__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Do you want to stop creating Invoice ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost")), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate(-1),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handleCloseBack,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_25__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_54__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_52__["default"], {
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
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_25__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_54__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_53__["default"], {
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
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    open: loadingOpenModalUpdate,
    onClose: handleCloseUpdate,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_25__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_54__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_52__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleCloseOpenAutocomplete1,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_59__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_58__["default"], {
    onCreateOption: handleCreateCustomer,
    onClose: handleCloseOpenAutocomplete1
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleCloseOpenAutocomplete2,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_59__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_60__["default"], {
    onCreateOption: handleCreateItem,
    onClose: handleCloseOpenAutocomplete2
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    open: openItemUpdate,
    onClose: handleCloseItemUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style2), {}, {
      width: 800
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleCloseItemUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_59__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_61__["default"], {
    onClose: handleCloseItemUpdate,
    id: idItem
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopPosForm);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfU2hvcFBvc19TaG9wUG9zRm9ybV9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBNEQ7QUFDckI7QUFDWTtBQUMzQjtBQUNFO0FBQzBCO0FBQ3NCO0FBQ1I7QUFDZDtBQUN1UDtBQUMzTztBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDUTtBQUNBO0FBQ2M7QUFDSTtBQUN6QztBQUN1RjtBQUM5RDtBQUNRO0FBQ2hDO0FBQ2tDO0FBQ087QUFDYTtBQUNoQjtBQUNKO0FBQ2xDO0FBQzRCO0FBQ1E7QUFDVjtBQUNMO0FBQ1E7QUFDK0I7QUFDdEM7QUFDa0I7QUFDcEI7QUFDUTtBQUNJO0FBQ2Y7QUFDaUM7QUFDdEI7QUFDUTtBQUVFO0FBQ2pCO0FBRy9DLElBQU1xRixRQUFRLEdBQUcsSUFBSTtBQUVyQixJQUFNQyxZQUFZLEdBQUduRSwwREFBTSxDQUFDb0UsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2hEM0YsMERBQUEsQ0FBQ21DLDhEQUFPLEVBQUEwRCxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU85RCw4REFBYyxDQUFDK0QsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFD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QUFFN047RUFBNkIsQ0FBRSxDQUN0RixDQUNGLENBQ0EsQ0FBQyxlQUNSbFksMERBQUEsQ0FBQ3NCLHNEQUFLO0lBQ0p1RyxJQUFJLEVBQUUyTixjQUFlO0lBQ3JCdVEsT0FBTyxFQUFFN1AscUJBQXNCO0lBQy9CLG1CQUFnQixtQkFBbUI7SUFDbkMsb0JBQWlCO0VBQXlCLGdCQUUxQ2xXLDBEQUFBLENBQUNvQixxREFBRztJQUFDMGQsRUFBRSxFQUFBaFgsYUFBQSxDQUFBQSxhQUFBLEtBQU9QLE1BQU07TUFBRUwsS0FBSyxFQUFFO0lBQUc7RUFBRyxnQkFDakNsSCwwREFBQSxDQUFDeUcsWUFBWTtJQUFDMmIsS0FBSyxFQUFDLE9BQU87SUFBQ0MsU0FBUyxFQUFDO0VBQU0sZ0JBQzFDcmlCLDBEQUFBLENBQUNZLHFEQUFVO0lBQUNzZSxPQUFPLEVBQUVoSixxQkFBc0I7SUFBQ3JQLEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFb2IsS0FBSyxFQUFFO0lBQVE7RUFBRSxnQkFDMUZsaUIsMERBQUEsQ0FBQzBFLGtFQUFLO0lBQUNtQyxLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFO0lBQVU7RUFBRSxDQUFFLENBQzNCLENBQ0EsQ0FBQyxlQUNmckcsMERBQUEsV0FBSyxDQUFDLGVBQ05BLDBEQUFBO0lBQUs2RyxLQUFLLEVBQUU7TUFBRStZLE1BQU0sRUFBRSxPQUFPO01BQUVZLE9BQU8sRUFBRSxNQUFNO01BQUVSLFFBQVEsRUFBRSxRQUFRO01BQUVNLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQ3hGdGdCLDBEQUFBLENBQUM0RSxrRUFBZTtJQUFDbWhCLE9BQU8sRUFBRTdQLHFCQUFzQjtJQUFDRixFQUFFLEVBQUVKO0VBQU8sQ0FBRSxDQUMzRCxDQUNGLENBQ0EsQ0FDSCxDQUFDO0FBRVg7QUFFQSxpRUFBZTFNLFdBQVcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9TaG9wUG9zL1Nob3BQb3NGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IFNpZGVTaG9wIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlU2hvcCc7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnO1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBQYXBlciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBzdHlsZWQsIEJveCwgQXV0b2NvbXBsZXRlLCBNb2RhbCwgQmFja2Ryb3AsIFRhYmxlQ29udGFpbmVyLCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgRGl2aWRlciwgQ2hlY2tib3gsIEZvcm1Db250cm9sTGFiZWwsIENhcmQsIENhcmRNZWRpYSwgQ2FyZENvbnRlbnQsIFBhZ2luYXRpb24sIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBBZGQsIEFycm93VXB3YXJkT3V0bGluZWQsIERyYWdJbmRpY2F0b3JSb3VuZGVkLCBFZGl0LCBSZW1vdmVDaXJjbGVPdXRsaW5lIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IGludmFsaWRhdGVDYWNoZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2FwaUNhY2hlJztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0xvY2FsaXphdGlvblByb3ZpZGVyJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlUGlja2VyJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IEN1c3RvbWVyRm9ybVZpZXcyIGZyb20gJy4uL0N1c3RvbWVyVklldy9DdXN0b21lckZvcm1WaWV3Mic7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IEl0ZW1Gb3JtVmlldzIgZnJvbSAnLi4vSXRlbVZpZXcvSXRlbUZvcm1WaWV3Mic7XHJcbmltcG9ydCBJdGVtVXBkYXRlVmlldzIgZnJvbSAnLi4vSXRlbVZpZXcvSXRlbVVwZGF0ZVZpZXcyJztcclxuaW1wb3J0IG51bWJlclRvV29yZHMgZnJvbSAnbnVtYmVyLXRvLXdvcmRzJ1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIjtcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Nob3BwaW5nQ2FydCc7XHJcbmltcG9ydCBOb0ltYWdlIGZyb20gJy4uLy4uLy4uL2ltZy9uby1kYXRhLnBuZyc7XHJcblxyXG5cclxuY29uc3QgVEFYX1JBVEUgPSAwLjE2O1xyXG5cclxuY29uc3QgTGlnaHRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQmxhY2tUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBzdHlsZTIgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA4MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjAwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuZnVuY3Rpb24gU2hvcFBvc0Zvcm0oKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCB7IGNhcnQgfSA9IGxvY2F0aW9uLnN0YXRlIHx8IHsgY2FydDogW10gfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcblxyXG4gIGNvbnN0IGFwaVVybCA9IGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLWludm9pY2VgO1xyXG4gIGNvbnN0IFtpbnZvaWNlRGF0ZSwgc2V0SW52b2ljZURhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtDaGVja1R2QSwgc2V0Q2hlY2tUdkFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmYWN0dXJlTnVtYmVyLCBzZXRGYWN0dXJlTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpdGVtcywgU2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIElucHV0c1xyXG4gIGNvbnN0IFt0b3RhbEZDLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG90YWxVU0QsIHNldFRvdGFsVVNEXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjcmVkaXRGQywgc2V0Q3JlZGl0RkNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NyZWRpdFVzZCwgc2V0Q3JlZGl0VXNkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHJcblxyXG4gIC8vIFJlZGVzaWduIFN0YXRlOiBJdGVtIEdyaWRcclxuICBjb25zdCBbaXRlbXNMaXN0LCBzZXRJdGVtc0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0b3RhbFBhZ2VzLCBzZXRUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgLy8gY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gQWxyZWFkeSBkZWZpbmVkIGxhdGVyIGluIGZpbGUsIHJldXNpbmcgb3IgY3JlYXRpbmcgbmV3IHVuaXF1ZSBvbmU/IFxyXG4gIC8vIGNoZWNraW5nIGV4aXN0aW5nIGxvYWRpbmdEYXRhIGF0IGxpbmUgMTc4IG9mIEl0ZW1WaWV3QWRtaW4uLi4gd2FpdCB0aGlzIGlzIFNob3BQb3NGb3JtLlxyXG4gIC8vIFNob3BQb3NGb3JtIGRvZXNuJ3Qgc2VlbSB0byBoYXZlIGxvYWRpbmdEYXRhIGF0IHRvcCBsZXZlbCBzY29wZS4uLiBsZXQncyBjaGVjay4gXHJcbiAgLy8gSXQgaGFzIGBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7YCBsYXRlci4gXHJcbiAgLy8gYGxvYWRpbmdEYXRhYCBpcyB1c2VkIGluIHRoZSBKU1ggbGF0ZXI/IFxyXG4gIC8vIExldCdzIGNoZWNrIG9yaWdpbmFsIGZpbGUgYWdhaW4uIExpbmUgMzY5IHVzZXMgYGxvYWRpbmdEYXRhP2AuIFxyXG4gIC8vIEJ1dCB3aGVyZSBpcyBpdCBkZWZpbmVkPyBcclxuICAvLyBBaCwgSSBtaXNzZWQgd2hlcmUgaXQgd2FzIGRlZmluZWQgaW4gbXkgcHJldmlvdXMgcmVhZHMuIEl0J3MgbGlrZWx5IGRlZmluZWQuXHJcbiAgLy8gSSB3aWxsIHVzZSBhIHNwZWNpZmljIG5hbWUgdG8gYXZvaWQgY29sbGlzaW9uOiBgbG9hZGluZ0l0ZW1zYFxyXG4gIGNvbnN0IFtsb2FkaW5nSXRlbXMsIHNldExvYWRpbmdJdGVtc10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbYWxsSXRlbXMsIHNldEFsbEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTsgLy8gU3RvcmUgYWxsIGZldGNoZWQgaXRlbXNcclxuXHJcbiAgLy8gRmV0Y2ggTG9naWMgZm9yIEl0ZW0gR3JpZFxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAoZXZlbnQsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRQYWdlKHZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRQYWdlKDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoSXRlbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nSXRlbXModHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nSXRlbXModHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtLXNob3A/cGFnZT0ke3BhZ2V9JmxpbWl0PTQ4JnNlYXJjaD0ke3NlYXJjaH0mc29ydD0tX2lkYCk7XHJcbiAgICAgIHNldFRvdGFsUGFnZXMocmVzLmRhdGEudG90YWxQYWdlcyk7XHJcbiAgICAgIHNldEl0ZW1zTGlzdChyZXMuZGF0YS5pdGVtcyA/IHJlcy5kYXRhLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZUl0ZW0gPT09ICdHb29kcycpIDogW10pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nSXRlbXMoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoSXRlbXMoKTtcclxuICB9LCBbcGFnZSwgc2VhcmNoXSk7XHJcblxyXG4gIC8vIENsaWVudC1zaWRlIGZpbHRlcmluZyByZW1vdmVkIGluIGZhdm9yIG9mIHNlcnZlci1zaWRlIGZldGNoXHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVSZWZyZXNoU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgZmV0Y2hJdGVtcygpO1xyXG4gICAgc2V0U2VhcmNoKCcnKTtcclxuICAgIHNldFBhZ2UoMSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbSXRlbUluZm9ybWF0aW9uLCBzZXRJdGVtSW5mb3JtYXRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IHVzZVN0YXRlKFwiVGhhbmsgeW91IGZvciB5b3VyIHZpc2l0LiBHb29kcyBzb2xkIGFyZSBuZWl0aGVyIHJldHVybmVkIG9yIGV4Y2hhbmdlZC5cIik7XHJcbiAgY29uc3QgZGF0ZUNvbW1lbnQgPSBuZXcgRGF0ZSgpXHJcbiAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IENyZWF0ZSA9IHVzZXIuZGF0YS51c2VyTmFtZVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hsYXN0TnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc1JhdGUgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9yYXRlUmV0dXJuYClcclxuICAgICAgICByZXNSYXRlLmRhdGEuZGF0YS5tYXAoKHJvdykgPT4gc2V0UmF0ZShyb3cucmF0ZVIpKVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1sYXN0LXNhdmVkLXBvc2ApXHJcbiAgICAgICAgc2V0RmFjdHVyZU51bWJlcigocGFyc2VJbnQocmVzLmRhdGE/LmRhdGE/LmZhY3R1cmVOdW1iZXIgfHwgcmVzLmRhdGE/LmZhY3R1cmVOdW1iZXIgfHwgMCkpICsgMSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hsYXN0TnVtYmVyKClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hJdGVtID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1gKVxyXG4gICAgICAgIHNldEl0ZW1JbmZvcm1hdGlvbihyZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy50eXBlSXRlbSA9PT0gXCJHb29kc1wiKS5tYXAoKHJvdykgPT4gKHtcclxuICAgICAgICAgIC4uLnJvdyxcclxuICAgICAgICAgIEl0ZW1OdW1iZXI6IHJvdy5pdGVtVXBjLm5ld0NvZGUgKyAnLScgKyBTdHJpbmcocm93Lml0ZW1VcGMuaXRlbU51bWJlcikucGFkU3RhcnQoNiwgJzAnKVxyXG4gICAgICAgIH0pKS5yZXZlcnNlKCkpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoSXRlbSgpXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYXJ0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgU2V0SXRlbXMoY2FydC5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgICBfaWQ6IGl0ZW0uX2lkLFxyXG4gICAgICAgICAgaXRlbU5hbWU6IGl0ZW0uaXRlbU5hbWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogaXRlbS5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICAgIGl0ZW1RdHk6IDEsXHJcbiAgICAgICAgaXRlbVJhdGU6IE1hdGgucm91bmQoKGl0ZW0uaXRlbVNlbGxpbmdQcmljZSAqIHJhdGUpICogMTAwKSAvIDEwMCxcclxuICAgICAgICBpdGVtQW1vdW50OiBNYXRoLnJvdW5kKChpdGVtLml0ZW1TZWxsaW5nUHJpY2UgKiByYXRlKSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgaXRlbUNvc3Q6IE1hdGgucm91bmQoKGl0ZW0uaXRlbUNvc3RQcmljZSAqIHJhdGUpICogMTAwKSAvIDEwMCxcclxuICAgICAgICB0b3RhbEFtb3VudDogTWF0aC5yb3VuZCgoaXRlbS5pdGVtU2VsbGluZ1ByaWNlICogcmF0ZSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgICBpdGVtV2VpZ2h0OiBpdGVtLml0ZW1XZWlnaHQsXHJcbiAgICAgICAgdG90YWxHZW5lcmFsZTogTWF0aC5yb3VuZCgoaXRlbS5pdGVtQ29zdFByaWNlICogcmF0ZSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIHRvdGFsQ29zdDogTWF0aC5yb3VuZCgoaXRlbS5pdGVtQ29zdFByaWNlICogcmF0ZSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIHN0b2NrOiBpdGVtLml0ZW1RdWFudGl0eSxcclxuICAgICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICAgIH0pKSk7XHJcbiAgICB9XHJcbiAgfSwgW2NhcnQsIHJhdGVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSXRlbSA9IChpZFJvdywgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IG5ld1ZhbHVlXHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93LmlkUm93ID09PSBpZFJvdyA/IHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogc2VsZWN0ZWRPcHRpb25zPy5faWQsXHJcbiAgICAgICAgaXRlbU5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbU5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1Db3N0OiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1Db3N0UHJpY2UgKiByYXRlLFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IHNlbGVjdGVkT3B0aW9ucz8uaXRlbURlc2NyaXB0aW9uLFxyXG4gICAgICBpdGVtUmF0ZTogc2VsZWN0ZWRPcHRpb25zPy5pdGVtU2VsbGluZ1ByaWNlICogcmF0ZSxcclxuICAgICAgc3RvY2s6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbVF1YW50aXR5LFxyXG4gICAgICB1bml0OiBzZWxlY3RlZE9wdGlvbnM/LnVuaXQsXHJcbiAgICB9IDogcm93KSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIGkpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pdGVtc107XHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWU7XHJcbiAgICBpZiAobGlzdFtpXVsnaXRlbURpc2NvdW50J10gPiA1KSB7XHJcbiAgICAgIGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddID0gNVxyXG4gICAgfVxyXG4gICAgbGlzdFtpXVsndG90YWxBbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1RdHknXSAqIGxpc3RbaV1bJ2l0ZW1SYXRlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQ29zdCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbUNvc3QnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnZGlzY291bnQnXSA9IGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gKiBsaXN0W2ldWydpdGVtRGlzY291bnQnXTtcclxuICAgIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSA9IGxpc3RbaV1bJ2Rpc2NvdW50J10gLyAxMDA7XHJcbiAgICBsaXN0W2ldWydpdGVtQW1vdW50J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWyd0b3RhbEFtb3VudCddIC0gbGlzdFtpXVsncGVyY2VudGFnZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWyd0b3RhbEdlbmVyYWxlJ10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtQ29zdCddICogbGlzdFtpXVsnaXRlbUJ1eSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBTZXRJdGVtcyhsaXN0KTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlQ0VPID0gKGUsIGkpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pdGVtc107XHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWU7XHJcbiAgICBsaXN0W2ldWyd0b3RhbEFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbVJhdGUnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxDb3N0J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtQ29zdCddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWydkaXNjb3VudCddID0gbGlzdFtpXVsndG90YWxBbW91bnQnXSAqIGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddO1xyXG4gICAgbGlzdFtpXVsncGVyY2VudGFnZSddID0gbGlzdFtpXVsnZGlzY291bnQnXSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2l0ZW1BbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gLSBsaXN0W2ldWydwZXJjZW50YWdlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsR2VuZXJhbGUnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1Db3N0J10gKiBsaXN0W2ldWydpdGVtQnV5J10pICogMTAwKSAvIDEwMDtcclxuICAgIFNldEl0ZW1zKGxpc3QpO1xyXG4gIH1cclxuICAvL2FkZEl0ZW1cclxuICBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xyXG4gICAgU2V0SXRlbXMoWy4uLml0ZW1zLCB7XHJcbiAgICAgIHR5cGVJdGVtOiAnJyxcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH1dKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdFbmQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdJdGVtcyA9IFsuLi5pdGVtc107XHJcbiAgICBjb25zdCBbcmVtb3ZlZF0gPSBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW1vdmVkKTtcclxuICAgIFNldEl0ZW1zKG5ld0l0ZW1zKVxyXG4gIH07XHJcbiAgY29uc3QgZGVsZXRlSXRlbSA9IGlkUm93ID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLmZpbHRlcigoSXRlbSkgPT4gSXRlbS5pZFJvdyAhPT0gaWRSb3cpKTtcclxuICB9O1xyXG4gIGNvbnN0IGZpbHRlckl0ZW1JbmZvcm1hdGlvbiA9IEl0ZW1JbmZvcm1hdGlvbi5maWx0ZXIob3B0aW9uID0+ICFpdGVtcy5maW5kKChyb3cpID0+IG9wdGlvbi5faWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkICYmIG9wdGlvbi50eXBlSXRlbSA9PT0gXCJHb29kc1wiKSlcclxuICB7LyoqIEl0ZW0gSW5GTyAqLyB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGUgPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBudWxsLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24gPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgaXRlbU5hbWU6ICdlbXB0eSdcclxuICAgICAgfSxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBbb3Blbkl0ZW1VcGRhdGUsIHNldE9wZW5JdGVtVXBkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaWRJdGVtLCBzZXRJZEl0ZW1dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbkl0ZW1VcGRhdGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHNldE9wZW5JdGVtVXBkYXRlKHRydWUpO1xyXG4gICAgc2V0SWRJdGVtKGlkKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlSXRlbVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldE9wZW5JdGVtVXBkYXRlKGZhbHNlKTtcclxuICAgIGlmIChpZEl0ZW0pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2lkSXRlbX1gKVxyXG4gICAgICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaXRlbU5hbWU/Ll9pZCA9PT0gcmVzLmRhdGEuZGF0YS5faWQgPyB7XHJcbiAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgICAgICBfaWQ6IHJlcy5kYXRhLmRhdGEuX2lkLFxyXG4gICAgICAgICAgICBpdGVtTmFtZTogcmVzLmRhdGEuZGF0YS5pdGVtTmFtZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogcmVzLmRhdGEuZGF0YS5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBpdGVtQ29zdDogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgaXRlbVJhdGU6IHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICAgIHN0b2NrOiByZXMuZGF0YS5kYXRhLml0ZW1RdWFudGl0eSxcclxuICAgICAgICAgIHRvdGFsQW1vdW50OiByb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICAgIGRpc2NvdW50OiAocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCxcclxuICAgICAgICAgIHBlcmNlbnRhZ2U6ICgocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCkgLyAxMDAsXHJcbiAgICAgICAgICBpdGVtQW1vdW50OiAocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpIC0gKCgocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCkgLyAxMDApLFxyXG4gICAgICAgICAgdG90YWxDb3N0OiByb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSxcclxuICAgICAgICAgIHRvdGFsR2VuZXJhbGU6IHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSAqIHJvdy5pdGVtQnV5XHJcbiAgICAgICAgfSA6IHJvdykpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICB7LyoqIEl0ZW0gSW5GTyBFbmQgKi8gfVxyXG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2N1c3RvbWVyYClcclxuICAgICAgICBzZXRDdXN0b21lcihyZXMuZGF0YS5kYXRhLnJldmVyc2UoKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoQ3VzdG9tZXIoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBbY3VzdG9tZXJOYW1lLCBzZXRDdXN0b21lck5hbWVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtvcGVuQXV0b2NvbXBsZXRlMSwgc2V0T3BlbkF1dG9jb21wbGV0ZTFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTEgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTEodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTEoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQ3VzdG9tZXIgPSAobmV3Q3VzdG9tZXIpID0+IHtcclxuICAgIHNldEN1c3RvbWVyKFtuZXdDdXN0b21lciwgLi4uY3VzdG9tZXJdKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDdXN0b21lciA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gY3VzdG9tZXIuZmluZCgob3B0aW9uKSA9PiBvcHRpb24gPT09IG5ld1ZhbHVlKVxyXG4gICAgc2V0Q3VzdG9tZXJOYW1lKHtcclxuICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgY3VzdG9tZXJOYW1lOiBzZWxlY3RlZE9wdGlvbnM/LmN1c3RvbWVyRnVsbE5hbWUgfHwgc2VsZWN0ZWRPcHRpb25zPy5jb21wYW55TmFtZSxcclxuICAgICAgYmlsbGluZ0FkZHJlc3M6IHNlbGVjdGVkT3B0aW9ucz8uYmlsbGluZ0FkZHJlc3MsXHJcbiAgICAgIGJpbGxpbmdDaXR5OiBzZWxlY3RlZE9wdGlvbnM/LmJpbGxpbmdDaXR5XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgW29wZW5BdXRvY29tcGxldGUyLCBzZXRPcGVuQXV0b2NvbXBsZXRlMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDcmVhdGVJdGVtID0gKG5ld0l0ZW0pID0+IHtcclxuICAgIHNldEl0ZW1JbmZvcm1hdGlvbihbbmV3SXRlbSwgLi4uSXRlbUluZm9ybWF0aW9uXSlcclxuICB9XHJcblxyXG4gIC8vIFJlZGVzaWduIEFjdGlvbjogQWRkIHRvIEludm9pY2UgZnJvbSBHcmlkXHJcbiAgY29uc3QgaGFuZGxlQWRkVG9JbnZvaWNlID0gKHNlbGVjdGVkSXRlbSkgPT4ge1xyXG4gICAgaWYgKCFzZWxlY3RlZEl0ZW0pIHJldHVybjtcclxuXHJcbiAgICBTZXRJdGVtcyhwcmV2SXRlbXMgPT4ge1xyXG4gICAgICBjb25zdCBleGlzdGluZ0l0ZW1JbmRleCA9IHByZXZJdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLml0ZW1OYW1lLl9pZCA9PT0gc2VsZWN0ZWRJdGVtLl9pZCk7XHJcblxyXG4gICAgICBpZiAoZXhpc3RpbmdJdGVtSW5kZXggPj0gMCkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtcyA9IFsuLi5wcmV2SXRlbXNdO1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB7IC4uLnVwZGF0ZWRJdGVtc1tleGlzdGluZ0l0ZW1JbmRleF0gfTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gKHBhcnNlSW50KGl0ZW0uaXRlbVF0eSwgMTApIHx8IDApICsgMTtcclxuICAgICAgICBpZiAobmV3UXR5ID4gaXRlbS5zdG9jaykge1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoXCJTdG9jayBFeGNlZWRlZCFcIiwgeyBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIgfSk7XHJcbiAgICAgICAgICByZXR1cm4gcHJldkl0ZW1zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXRlbS5pdGVtUXR5ID0gbmV3UXR5O1xyXG4gICAgICAgIGl0ZW0udG90YWxBbW91bnQgPSBNYXRoLnJvdW5kKChpdGVtLml0ZW1RdHkgKiBpdGVtLml0ZW1SYXRlKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgaXRlbS50b3RhbENvc3QgPSBNYXRoLnJvdW5kKChpdGVtLml0ZW1RdHkgKiBpdGVtLml0ZW1Db3N0KSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgaXRlbS5kaXNjb3VudCA9IGl0ZW0udG90YWxBbW91bnQgKiBpdGVtLml0ZW1EaXNjb3VudDtcclxuICAgICAgICBpdGVtLnBlcmNlbnRhZ2UgPSBpdGVtLmRpc2NvdW50IC8gMTAwO1xyXG4gICAgICAgIGl0ZW0uaXRlbUFtb3VudCA9IE1hdGgucm91bmQoKGl0ZW0udG90YWxBbW91bnQgLSBpdGVtLnBlcmNlbnRhZ2UpICogMTAwKSAvIDEwMDtcclxuICAgICAgICAvLyBVcGRhdGluZyB0b3RhbEdlbmVyYWxlIHRvIHJlZmxlY3QgY29zdCBpbmNyZWFzZXMsIHRob3VnaCB1c2FnZSBpcyBpbmNvbnNpc3RlbnQgaW4gbGVnYWN5IGNvZGUuXHJcbiAgICAgICAgaXRlbS50b3RhbEdlbmVyYWxlID0gaXRlbS50b3RhbENvc3Q7XHJcblxyXG4gICAgICAgIHVwZGF0ZWRJdGVtc1tleGlzdGluZ0l0ZW1JbmRleF0gPSBpdGVtO1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVkSXRlbXM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbmV3UmF0ZSA9IHNlbGVjdGVkSXRlbS5pdGVtU2VsbGluZ1ByaWNlICogcmF0ZTtcclxuICAgICAgICBjb25zdCBuZXdDb3N0ID0gc2VsZWN0ZWRJdGVtLml0ZW1Db3N0UHJpY2UgKiByYXRlO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdJdGVtUm93ID0ge1xyXG4gICAgICAgICAgdHlwZUl0ZW06ICdHb29kcycsXHJcbiAgICAgICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgICAgIF9pZDogc2VsZWN0ZWRJdGVtLl9pZCxcclxuICAgICAgICAgICAgaXRlbU5hbWU6IHNlbGVjdGVkSXRlbS5pdGVtTmFtZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogc2VsZWN0ZWRJdGVtLml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgICAgIGl0ZW1RdHk6IDEsXHJcbiAgICAgICAgICBpdGVtUmF0ZTogbmV3UmF0ZSxcclxuICAgICAgICAgIGl0ZW1BbW91bnQ6IG5ld1JhdGUsXHJcbiAgICAgICAgICBpdGVtQ29zdDogbmV3Q29zdCxcclxuICAgICAgICAgIHRvdGFsQW1vdW50OiBuZXdSYXRlLFxyXG4gICAgICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgICAgIGl0ZW1XZWlnaHQ6IHNlbGVjdGVkSXRlbS53ZWlnaHQsXHJcbiAgICAgICAgICB0b3RhbEdlbmVyYWxlOiBuZXdDb3N0LFxyXG4gICAgICAgICAgdG90YWxDb3N0OiBuZXdDb3N0LFxyXG4gICAgICAgICAgc3RvY2s6IHNlbGVjdGVkSXRlbS5pdGVtUXVhbnRpdHksXHJcbiAgICAgICAgICB1bml0OiBzZWxlY3RlZEl0ZW0udW5pdCxcclxuICAgICAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgICAgICBuZXdJdGVtT3V0OiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gWy4uLnByZXZJdGVtcywgbmV3SXRlbVJvd107XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIERlcml2ZWQgU3RhdGUgQ2FsY3VsYXRpb25zXHJcbiAgY29uc3QgeyBzdWJUb3RhbCwgdGF4LCB0b3RhbEludm9pY2UsIGJhbGFuY2VEdWUsIGNyZWRpdCwgVG90YWxBbW91bnRQYWlkLCByZW1haW5pbmcgfSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0MSA9IGl0ZW1zLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHJvdy5pdGVtQW1vdW50LCAwKTtcclxuICAgIGxldCB0dmEgPSAwO1xyXG4gICAgbGV0IFRXVFZBID0gcmVzdWx0MTtcclxuXHJcbiAgICBpZiAoQ2hlY2tUdkEpIHtcclxuICAgICAgdHZhID0gTWF0aC5yb3VuZCgocmVzdWx0MSAqIFRBWF9SQVRFKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgIFRXVFZBID0gcmVzdWx0MSArIHR2YTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2RDb252ZXJ0ID0gdG90YWxVU0QgKiByYXRlO1xyXG4gICAgY29uc3QgdG90YWxQYWlkID0gTnVtYmVyKHVzZENvbnZlcnQpICsgTnVtYmVyKHRvdGFsRkMpO1xyXG4gICAgY29uc3QgbmV3QmFsYW5jZSA9IE1hdGgucm91bmQoKFRXVFZBIC0gdG90YWxQYWlkKSAqIDEwMCkgLyAxMDA7XHJcblxyXG4gICAgLy8gQ3JlZGl0IExvZ2ljXHJcbiAgICBjb25zdCBjcmVkaXRJID0gTWF0aC5hYnMobmV3QmFsYW5jZSk7XHJcbiAgICBjb25zdCB1c2RDb252ZXJ0MSA9IGNyZWRpdFVzZCAqIHJhdGU7XHJcbiAgICBjb25zdCB0b3RhbFBhaWQxID0gTnVtYmVyKHVzZENvbnZlcnQxKSArIE51bWJlcihjcmVkaXRGQyk7XHJcbiAgICBjb25zdCByZXN0ID0gTWF0aC5yb3VuZCgoY3JlZGl0SSAtIHRvdGFsUGFpZDEpICogMTAwKSAvIDEwMDtcclxuICAgIGNvbnN0IHRvdGFsUGFpZEluZm8gPSB0b3RhbFBhaWQgLSB0b3RhbFBhaWQxO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1YlRvdGFsOiByZXN1bHQxLFxyXG4gICAgICB0YXg6IHR2YSxcclxuICAgICAgdG90YWxJbnZvaWNlOiBUV1RWQSxcclxuICAgICAgYmFsYW5jZUR1ZTogbmV3QmFsYW5jZSxcclxuICAgICAgY3JlZGl0OiBjcmVkaXRJLFxyXG4gICAgICBUb3RhbEFtb3VudFBhaWQ6IHRvdGFsUGFpZEluZm8sXHJcbiAgICAgIHJlbWFpbmluZzogcmVzdFxyXG4gICAgfTtcclxuICB9LCBbQ2hlY2tUdkEsIGl0ZW1zLCByYXRlLCB0b3RhbFVTRCwgdG90YWxGQywgY3JlZGl0VXNkLCBjcmVkaXRGQ10pO1xyXG5cclxuICBjb25zdCByZXNldEZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRUb3RhbCgwKTtcclxuICAgIHNldFRvdGFsVVNEKDApO1xyXG4gICAgc2V0Q3JlZGl0RkMoMCk7XHJcbiAgICBzZXRDcmVkaXRVc2QoMCk7XHJcbiAgICBTZXRJdGVtcyhbXSk7XHJcbiAgICBzZXRDaGVja1R2QShmYWxzZSk7XHJcbiAgICBzZXRDdXN0b21lck5hbWUoe30pO1xyXG4gICAgc2V0Tm90ZShcIlRoYW5rIHlvdSBmb3IgeW91ciB2aXNpdC4gR29vZHMgc29sZCBhcmUgbmVpdGhlciByZXR1cm5lZCBvciBleGNoYW5nZWQuXCIpO1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsVXBkYXRlKGZhbHNlKTtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFtvcGVuMSwgc2V0T3BlbjFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuQmFjayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW4xKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VCYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbFVwZGF0ZSwgc2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWxVcGRhdGUodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgcmVzZXRGb3JtKCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IC8vIFJlbW92ZWQgaGFyZCByZWxvYWRcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsVXBkYXRlKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVjaXNpb24gPSAobmF2aWdhdGUpID0+IHtcclxuICAgIC8vTmF2aWdhdGUgQmFzZWQgb24gdGggRGVjaXNpb25cclxuICAgIGlmIChuYXZpZ2F0ZSA9PT0gJ3ByZXZpb3VzJykge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRlID09PSAnc3RheScpIHtcclxuICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW3JlZmVyZW5jZUluZm8sIHNldFJlZmVyZW5jZUluZm9dID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoUmVmZXJlbmNlSW5mbywgUmVmZXJlbmNlSW5mb051bWJlcikgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBSZWZlcmVuY2VJbmZvLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgQ3JlYXRlZCAnLFxyXG4gICAgICByZWFzb246ICdTLTAwJyArIFN0cmluZyhSZWZlcmVuY2VJbmZvTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyBGb3IgJyArIGN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUsXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IGRhdGVDb21tZW50XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHN0YXR1cyA9ICcnXHJcbiAgaWYgKHBhcnNlSW50KGJhbGFuY2VEdWUpID4gMCAmJiBiYWxhbmNlRHVlICE9PSB0b3RhbEludm9pY2UpIHtcclxuICAgIHN0YXR1cyA9ICdQYXJ0aWFsbHktUGFpZCdcclxuICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQoYmFsYW5jZUR1ZSkgPD0gMCkge1xyXG4gICAgc3RhdHVzID0gJ1BhaWQnXHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXR1cyA9ICdEcmFmdCdcclxuICB9XHJcbiAgY29uc3QgaXRlbUZpbHRlciA9IGl0ZW1zLmZpbHRlcigocm93KSA9PiByb3cuaXRlbU5hbWUuaXRlbU5hbWUgIT09ICcnICYmIHJvdy5pdGVtTmFtZT8uX2lkKVxyXG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBoYW5kbGVRdHkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vQ2FsY3VsYXRlVG90YWxgKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2F2aW5nKCd0cnVlJyk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBfaWQ6IHY0KCksXHJcbiAgICAgIGN1c3RvbWVyTmFtZSxcclxuICAgICAgZmFjdHVyZU51bWJlcixcclxuICAgICAgaW52b2ljZURhdGUsXHJcbiAgICAgIHRpbWUsIFRvdGFsQW1vdW50UGFpZCwgcmVtYWluaW5nLCBjcmVkaXQsIGNyZWRpdFVzZCwgY3JlZGl0RkMsXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgaXRlbXM6IGl0ZW1GaWx0ZXIsXHJcbiAgICAgIHN1YlRvdGFsLFxyXG4gICAgICB0b3RhbEZDLFxyXG4gICAgICB0b3RhbFVTRCwgdGF4LFxyXG4gICAgICByYXRlLFxyXG4gICAgICBDcmVhdGVcclxuICAgICAgLCBiYWxhbmNlRHVlLFxyXG4gICAgICBub3RlLFxyXG4gICAgICB0b3RhbEludm9pY2UsIHN5bmNlZDogZmFsc2VcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtcG9zYCwgZGF0YSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBzZXRSZWZlcmVuY2VJbmZvKHJlcy5kYXRhLmRhdGEuZmFjdHVyZU51bWJlcilcclxuICAgICAgICBoYW5kbGVRdHkoKVxyXG4gICAgICAgIGludmFsaWRhdGVDYWNoZSgnL3BvcycpO1xyXG4gICAgICAgIC8vIE9wZW4gTG9hZGluZyBWaWV3XHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mbyA9IHJlcy5kYXRhLmRhdGEuX2lkXHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mb051bWJlciA9IHJlcy5kYXRhLmRhdGEuZmFjdHVyZU51bWJlclxyXG4gICAgICAgIGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbihSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKVxyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgc2V0U2F2aW5nKCcnKVxyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCBuZXcgaW52b2ljZVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5CYWNrfT5cclxuICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNpZGVCYXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2lkZUJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlU2hvcCAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogNCB9fSA+XHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIHsvKiBMRUZUIFNJREU6IElOVk9JQ0UgRk9STSAqL31cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17N30gc3g9e3sgaGVpZ2h0OiAnODV2aCcsIG92ZXJmbG93WTogJ2F1dG8nLCBvdmVyZmxvd1g6ICdoaWRkZW4nLCBwcjogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIHN4PXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2N1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5jdXN0b21lckZ1bGxOYW1lID8gb3B0aW9uLmN1c3RvbWVyRnVsbE5hbWUgOiBvcHRpb24uY29tcGFueU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZUN1c3RvbWVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHsgY2hpbGRyZW4sIC4uLm90aGVyIH0pID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTEoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERCBORVcgQ1VTVE9NRVJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkN1c3RvbWVyIE5hbWVcIiByZXF1aXJlZCBzeD17eyAnJiAuTXVpSW5wdXRCYXNlLWlucHV0JzogeyBmb250U2l6ZTogJzE1cHgnIH0sICcmIC5NdWlJbnB1dExhYmVsLXJvb3QnOiB7IGZvbnRTaXplOiAnMTVweCcgfSB9fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJmYWN0dXJlTnVtYmVyXCI+SW52b2ljZSBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdmYWN0dXJlTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdmYWN0dXJlTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSW52b2ljZSBOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWN0dXJlTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZhY3R1cmVOdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5JLTwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBmb250U2l6ZTogJzE1cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpbnZvaWNlRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoaW52b2ljZURhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0SW52b2ljZURhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFByb3BzPXt7IHRleHRGaWVsZDogeyBzeDogeyAnJiAuTXVpSW5wdXRCYXNlLWlucHV0JzogeyBmb250U2l6ZTogJzE1cHgnIH0sICcmIC5NdWlJbnB1dExhYmVsLXJvb3QnOiB7IGZvbnRTaXplOiAnMTVweCcgfSB9IH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJERC9NTS9ZWVlZXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGltZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVGltZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anModGltZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRUaW1lKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RQcm9wcz17eyB0ZXh0RmllbGQ6IHsgc3g6IHsgJyYgLk11aUlucHV0QmFzZS1pbnB1dCc6IHsgZm9udFNpemU6ICcxNXB4JyB9LCAnJiAuTXVpSW5wdXRMYWJlbC1yb290JzogeyBmb250U2l6ZTogJzE1cHgnIH0gfSB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiSEg6bW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgcG9zaXRpb246ICdmaXhlZCcsIHpJbmRleDogMSwgZmxvYXQ6ICdyaWdodCcsIHJpZ2h0OiAnLTVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkFkZFwiIHBsYWNlbWVudD1cInRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7IGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZUluZm8xMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5EaXNjb3VudCAlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5BbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZHJvcHBhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChJdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e0l0ZW0uaWRSb3d9IGRyYWdnYWJsZUlkPXtgZHJvcHBhYmxlJHtJdGVtLmlkUm93fWB9IGluZGV4PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBjdXJzb3I6ICdncmFiJywgZm9udFNpemU6ICcxNXB4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PntpICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs2fT48VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmV3RGVzY3JpcHRpb24nIGlkPSduZXdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLm5ld0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxNSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgY3Vyc29yOiAnZ3JhYicsIGZvbnRTaXplOiAnMTVweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgZm9udFdlaWdodDogJ2JvbGQnLCBkaXNwbGF5OiAnYmxvY2snLCBsaW5lSGVpZ2h0OiAnMScgfX0+e0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvVXBwZXJDYXNlKCkgOiAnJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGUoSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWUuX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkVkaXRcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3Blbkl0ZW1VcGRhdGUoSXRlbS5pdGVtTmFtZS5faWQpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdCBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtmaWx0ZXJJdGVtSW5mb3JtYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uaXRlbVVwYy5uZXdDb2RlICsgJy0nICsgU3RyaW5nKG9wdGlvbi5pdGVtVXBjLml0ZW1OdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIC8gJyArIG9wdGlvbi5pdGVtTmFtZSArICcgLyAnICsgb3B0aW9uLml0ZW1CcmFuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfT57b3B0aW9uLml0ZW1VcGMubmV3Q29kZSArICctJyArIFN0cmluZyhvcHRpb24uaXRlbVVwYy5pdGVtTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyAvICcgKyBvcHRpb24uaXRlbU5hbWUgKyAnIC8gJyArIG9wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucywgeyBpbnB1dFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtQnJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5JdGVtTnVtYmVyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbURlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlSXRlbShJdGVtLmlkUm93LCBuZXdWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5vdGhlcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBsZWZ0OiAnMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyKGUpfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30gb25Nb3VzZURvd249eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI3JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERCBORVcgSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzMwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCAnJiAuTXVpSW5wdXRCYXNlLWlucHV0JzogeyBmb250U2l6ZTogJzE1cHgnIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYXJzZUZsb2F0KEl0ZW0uc3RvY2spIDw9IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1RdHknIGlkPSdpdGVtUXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPD0gSXRlbS5zdG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlQ0VPKGUsIGkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1SYXRlJyBpZD0naXRlbVJhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1SYXRlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURpc2NvdW50JyBpZD0naXRlbURpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzEgdG8gNSAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPSdhbW91bnRUb3RhbEludm9pY2UnPntJdGVtLml0ZW1BbW91bnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcyMHB4Jywgb3ZlcmZsb3dYOiAnYXV0bycsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSW5mbzEwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19Pkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+RGlzY291bnQgJTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5BbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkcm9wcGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e0l0ZW0uaWRSb3d9IGRyYWdnYWJsZUlkPXtgZHJvcHBhYmxlJHtJdGVtLmlkUm93fWB9IGluZGV4PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBjdXJzb3I6ICdncmFiJywgZm9udFNpemU6ICcxNXB4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PntpICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezV9PjxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmV3RGVzY3JpcHRpb24nIGlkPSduZXdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0ubmV3RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCAnJiAuTXVpSW5wdXRCYXNlLWlucHV0JzogeyBmb250U2l6ZTogJzE1cHgnIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGN1cnNvcjogJ2dyYWInLCBmb250U2l6ZTogJzE1cHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgZm9udFdlaWdodDogJ2JvbGQnLCBkaXNwbGF5OiAnYmxvY2snLCBsaW5lSGVpZ2h0OiAnMScgfX0+e0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvVXBwZXJDYXNlKCkgOiAnJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlckl0ZW1JbmZvcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLml0ZW1VcGMubmV3Q29kZSArICctJyArIFN0cmluZyhvcHRpb24uaXRlbVVwYy5pdGVtTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyAvICcgKyBvcHRpb24uaXRlbU5hbWUgKyAnIC8gJyArIG9wdGlvbi5pdGVtQnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfT57b3B0aW9uLml0ZW1VcGMubmV3Q29kZSArICctJyArIFN0cmluZyhvcHRpb24uaXRlbVVwYy5pdGVtTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyAvICcgKyBvcHRpb24uaXRlbU5hbWUgKyAnIC8gJyArIG9wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50LCBuZXdJbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMsIHsgaW5wdXRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtQnJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uSXRlbU51bWJlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZUl0ZW0oSXRlbS5pZFJvdywgbmV3VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICczMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgJyYgLk11aUlucHV0QmFzZS1pbnB1dCc6IHsgZm9udFNpemU6ICcxNXB4JyB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhcnNlRmxvYXQoSXRlbS5zdG9jaykgPD0gMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUXR5JyBpZD0naXRlbVF0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA8PSBJdGVtLnN0b2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShlLCBpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsICcmIC5NdWlJbnB1dEJhc2UtaW5wdXQnOiB7IGZvbnRTaXplOiAnMTVweCcgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD0nYW1vdW50VG90YWxJbnZvaWNlJyBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnIH19PntJdGVtLml0ZW1SYXRlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EaXNjb3VudCcgaWQ9J2l0ZW1EaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMSB0byA1ICUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6IDEwMCwgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCAnJiAuTXVpSW5wdXRCYXNlLWlucHV0JzogeyBmb250U2l6ZTogJzE1cHgnIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9J2Ftb3VudFRvdGFsSW52b2ljZScgc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JyB9fT57SXRlbS5pdGVtQW1vdW50LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaXJzdFRhYmxlXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0gY29sU3Bhbj17Mn0+VGF4IERldGFpbHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRyIHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+ICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2FkanVzdG1lbnQnIGlkPSdhZGp1c3RtZW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGp1c3RtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRBZGp1c3RtZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzI1MHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdhZGp1c3RtZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdhZGp1c3RtZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YWRqdXN0bWVudE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0QWRqdXN0bWVudE51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlRvdGFsIEFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT4gRkMge3N1YlRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gKCQgeyhzdWJUb3RhbCAvIHJhdGUpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlRWQSBAIDE2ICVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Q2hlY2tUdkF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrVHZBKGUudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZDIHt0YXgudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSAoJCB7KHRheCAvIHJhdGUpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+VG90YWwgR2VuZXJhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGQyB7dG90YWxJbnZvaWNlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gKCQgeyh0b3RhbEludm9pY2UgLyByYXRlKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PkNhc2ggRkM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdyaWdodCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGdhcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnRQYWlkRkMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbEZDfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvdGFsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PkNhc2ggVVNEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAncmlnaHQnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYW1vdW50UGFpZFVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsVVNEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvdGFsVVNEKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlRHVlID49IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJywgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+QmFsYW5jZSBEdWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGQyB7YmFsYW5jZUR1ZS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9ICgkIHsoYmFsYW5jZUR1ZSAvIHJhdGUpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJywgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+QW1vdW50IHRvIFJldHVybjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZDIHtNYXRoLmFicyhiYWxhbmNlRHVlKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9ICgkIHtNYXRoLmFicyhiYWxhbmNlRHVlIC8gcmF0ZSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlRHVlIDwgMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlJldHVybiBGQzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdyaWdodCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGdhcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Ftb3VudFBhaWRGQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjcmVkaXRGQ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlZGl0RkMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlJldHVybiBVU0Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAncmlnaHQnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnRQYWlkRkMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGl0VXNkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDcmVkaXRVc2QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PnJlbWFpbmluZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZDIHtyZW1haW5pbmcudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSAoJCB7KHJlbWFpbmluZyAvIHJhdGUpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J25vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0ludm9pY2UgTm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc1MCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsICcmIC5NdWlJbnB1dEJhc2UtaW5wdXQnOiB7IGZvbnRTaXplOiAnMTVweCcgfSwgJyYgLk11aUlucHV0TGFiZWwtcm9vdCc6IHsgZm9udFNpemU6ICcxNXB4JyB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZpbmcgIT09ICd0cnVlJyA/IDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+IDogPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+U2F2aW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFJJR0hUIFNJREU6IElURU0gR1JJRCAqL31cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NX0gc3g9e3sgaGVpZ2h0OiAnODV2aCcsIG92ZXJmbG93WTogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICAgICAgICA8UGFwZXIgc3g9e3sgcGFkZGluZzogJzEwcHgnLCBtaW5IZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAyLCBtYjogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2ggSXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9e2hhbmRsZVJlZnJlc2hTZWFyY2h9IHN4PXt7IHdoaXRlU3BhY2U6ICdub3dyYXAnLCBtaW5XaWR0aDogJ2F1dG8nLCBweDogMiB9fT5SZWZyZXNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nSXRlbXMgPyA8TG9hZGVyIC8+IDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXNMaXN0Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9IGxnPXszfSBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmRhdGEgPyBgZGF0YToke2l0ZW0uY29udGVudFR5cGV9O2Jhc2U2NCwke2l0ZW0uZGF0YX1gIDogTm9JbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uaXRlbU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgb2JqZWN0Rml0OiAnY29udGFpbicsIHA6IDEgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IGZsZXhHcm93OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pdGVtTmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGQyB7KGl0ZW0uaXRlbVNlbGxpbmdQcmljZSAqIHJhdGUpPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZGlzcGxheT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9jazoge2l0ZW0uaXRlbVF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtdDogMSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVG9JbnZvaWNlKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2l0ZW0uaXRlbVF1YW50aXR5IDw9IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREIFRPIElOVlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBtdDogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIGNvdW50PXt0b3RhbFBhZ2VzfSBwYWdlPXtwYWdlfSBvbkNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94ID5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbjF9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VCYWNrfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkRvIHlvdSB3YW50IHRvIHN0b3AgY3JlYXRpbmcgSW52b2ljZSA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGUgOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiPiBJZiB5b3Ugc3RvcCBjcmVhdGluZyB3aXRob3V0IHNhdmluZywgYWxsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3Q8L3NwYW4+PC9wPiAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKC0xKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19Pk5vPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3N0YXknKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIEFkZCBOZXdcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNpc2lvbigncHJldmlvdXMnKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e0Vycm9yT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENhbmNlbEljb24gc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlNhdmluZyBGYWlsZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsVXBkYXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVXBkYXRlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVVwZGF0ZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBwYWRkaW5nOiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPEN1c3RvbWVyRm9ybVZpZXcyIG9uQ3JlYXRlT3B0aW9uPXtoYW5kbGVDcmVhdGVDdXN0b21lcn0gb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBwYWRkaW5nOiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPEl0ZW1Gb3JtVmlldzIgb25DcmVhdGVPcHRpb249e2hhbmRsZUNyZWF0ZUl0ZW19IG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbkl0ZW1VcGRhdGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUl0ZW1VcGRhdGV9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2MDBweCcsIHBhZGRpbmc6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICA8SXRlbVVwZGF0ZVZpZXcyIG9uQ2xvc2U9e2hhbmRsZUNsb3NlSXRlbVVwZGF0ZX0gaWQ9e2lkSXRlbX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXYgPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcFBvc0Zvcm1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwidG9hc3QiLCJTaWRlU2hvcCIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJBY2NvdW50Q2lyY2xlSWNvbiIsIkRlbGV0ZUljb24iLCJNZW51SXRlbSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiUGFwZXIiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJUeXBvZ3JhcGh5Iiwic3R5bGVkIiwiQm94IiwiQXV0b2NvbXBsZXRlIiwiTW9kYWwiLCJCYWNrZHJvcCIsIlRhYmxlQ29udGFpbmVyIiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiRGl2aWRlciIsIkNoZWNrYm94IiwiRm9ybUNvbnRyb2xMYWJlbCIsIkNhcmQiLCJDYXJkTWVkaWEiLCJDYXJkQ29udGVudCIsIlBhZ2luYXRpb24iLCJCdXR0b24iLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJBZGQiLCJBcnJvd1Vwd2FyZE91dGxpbmVkIiwiRHJhZ0luZGljYXRvclJvdW5kZWQiLCJFZGl0IiwiUmVtb3ZlQ2lyY2xlT3V0bGluZSIsIkVORFBPSU5UX1VSTCIsImludmFsaWRhdGVDYWNoZSIsInY0IiwidXNlTmF2aWdhdGUiLCJ1c2VMb2NhdGlvbiIsIkRlbW9Db250YWluZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIkRhdGVQaWNrZXIiLCJkYXlqcyIsIkFycm93QmFjayIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2FkZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiQ3VzdG9tZXJGb3JtVmlldzIiLCJDbG9zZSIsIkl0ZW1Gb3JtVmlldzIiLCJJdGVtVXBkYXRlVmlldzIiLCJudW1iZXJUb1dvcmRzIiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJhZ2dhYmxlIiwiRHJvcHBhYmxlIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiU2hvcHBpbmdDYXJ0SWNvbiIsIk5vSW1hZ2UiLCJUQVhfUkFURSIsIkxpZ2h0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiQmxhY2tUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsInN0eWxlMiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjUiLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjYiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJTaG9wUG9zRm9ybSIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwibG9jYXRpb24iLCJfcmVmNyIsInN0YXRlIiwiY2FydCIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmOCIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiYXBpVXJsIiwiX3VzZVN0YXRlIiwiZGF0ZSIsIkRhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpbnZvaWNlRGF0ZSIsInNldEludm9pY2VEYXRlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJ0aW1lIiwic2V0VGltZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIkNoZWNrVHZBIiwic2V0Q2hlY2tUdkEiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsImZhY3R1cmVOdW1iZXIiLCJzZXRGYWN0dXJlTnVtYmVyIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwiaXRlbXMiLCJTZXRJdGVtcyIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJ0b3RhbEZDIiwic2V0VG90YWwiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwidG90YWxVU0QiLCJzZXRUb3RhbFVTRCIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJjcmVkaXRGQyIsInNldENyZWRpdEZDIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsImNyZWRpdFVzZCIsInNldENyZWRpdFVzZCIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJpdGVtc0xpc3QiLCJzZXRJdGVtc0xpc3QiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwidG90YWxQYWdlcyIsInNldFRvdGFsUGFnZXMiLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0IiwicGFnZSIsInNldFBhZ2UiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsImxvYWRpbmdJdGVtcyIsInNldExvYWRpbmdJdGVtcyIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJhbGxJdGVtcyIsInNldEFsbEl0ZW1zIiwiaGFuZGxlUGFnZUNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJ0YXJnZXQiLCJmZXRjaEl0ZW1zIiwiX3JlZjkiLCJmaWx0ZXIiLCJpdGVtIiwidHlwZUl0ZW0iLCJoYW5kbGVSZWZyZXNoU2VhcmNoIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsIkl0ZW1JbmZvcm1hdGlvbiIsInNldEl0ZW1JbmZvcm1hdGlvbiIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJub3RlIiwic2V0Tm90ZSIsImRhdGVDb21tZW50IiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsInJhdGUiLCJzZXRSYXRlIiwiQ3JlYXRlIiwiZmV0Y2hsYXN0TnVtYmVyIiwiX3JlZjAiLCJfcmVzJGRhdGEiLCJfcmVzJGRhdGEyIiwicmVzUmF0ZSIsIm1hcCIsInJvdyIsInJhdGVSIiwicGFyc2VJbnQiLCJmZXRjaEl0ZW0iLCJfcmVmMSIsIl9yZXMkZGF0YTMiLCJJdGVtTnVtYmVyIiwiaXRlbVVwYyIsIm5ld0NvZGUiLCJTdHJpbmciLCJpdGVtTnVtYmVyIiwicGFkU3RhcnQiLCJyZXZlcnNlIiwibGVuZ3RoIiwiaWRSb3ciLCJpdGVtTmFtZSIsIl9pZCIsIml0ZW1EZXNjcmlwdGlvbiIsIml0ZW1EaXNjb3VudCIsIml0ZW1RdHkiLCJpdGVtUmF0ZSIsIk1hdGgiLCJyb3VuZCIsIml0ZW1TZWxsaW5nUHJpY2UiLCJpdGVtQW1vdW50IiwiaXRlbUNvc3QiLCJpdGVtQ29zdFByaWNlIiwidG90YWxBbW91bnQiLCJkaXNjb3VudCIsInBlcmNlbnRhZ2UiLCJpdGVtQnV5IiwiaXRlbVdlaWdodCIsInRvdGFsR2VuZXJhbGUiLCJ0b3RhbENvc3QiLCJzdG9jayIsIml0ZW1RdWFudGl0eSIsIml0ZW1PdXQiLCJuZXdJdGVtT3V0IiwiaGFuZGxlQ2hhbmdlSXRlbSIsIm5ld1ZhbHVlIiwic2VsZWN0ZWRPcHRpb25zIiwidW5pdCIsImhhbmRsZUNoYW5nZSIsImUiLCJpIiwiX2UkdGFyZ2V0IiwibmFtZSIsImxpc3QiLCJoYW5kbGVDaGFuZ2VDRU8iLCJfZSR0YXJnZXQyIiwiYWRkSXRlbSIsImhhbmRsZURyYWdFbmQiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsIm5ld0l0ZW1zIiwiX25ld0l0ZW1zJHNwbGljZSIsInNwbGljZSIsInNvdXJjZSIsImluZGV4IiwiX25ld0l0ZW1zJHNwbGljZTIiLCJyZW1vdmVkIiwiZGVsZXRlSXRlbSIsIkl0ZW0iLCJmaWx0ZXJJdGVtSW5mb3JtYXRpb24iLCJvcHRpb24iLCJmaW5kIiwiX3JvdyRpdGVtTmFtZSIsImhhbmRsZVNob3dBdXRvY29tcGxldGUiLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24iLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4Iiwib3Blbkl0ZW1VcGRhdGUiLCJzZXRPcGVuSXRlbVVwZGF0ZSIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJpZEl0ZW0iLCJzZXRJZEl0ZW0iLCJoYW5kbGVPcGVuSXRlbVVwZGF0ZSIsIl9yZWYxMCIsImlkIiwiX3giLCJoYW5kbGVDbG9zZUl0ZW1VcGRhdGUiLCJfcmVmMTEiLCJfcm93JGl0ZW1OYW1lMiIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJjdXN0b21lciIsInNldEN1c3RvbWVyIiwiZmV0Y2hDdXN0b21lciIsIl9yZWYxMiIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJjdXN0b21lck5hbWUiLCJzZXRDdXN0b21lck5hbWUiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2Iiwib3BlbkF1dG9jb21wbGV0ZTEiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMSIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTEiLCJoYW5kbGVDcmVhdGVDdXN0b21lciIsIm5ld0N1c3RvbWVyIiwiaGFuZGxlQ2hhbmdlQ3VzdG9tZXIiLCJjdXN0b21lckZ1bGxOYW1lIiwiY29tcGFueU5hbWUiLCJiaWxsaW5nQWRkcmVzcyIsImJpbGxpbmdDaXR5IiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsIm9wZW5BdXRvY29tcGxldGUyIiwic2V0T3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlQ3JlYXRlSXRlbSIsIm5ld0l0ZW0iLCJoYW5kbGVBZGRUb0ludm9pY2UiLCJzZWxlY3RlZEl0ZW0iLCJwcmV2SXRlbXMiLCJleGlzdGluZ0l0ZW1JbmRleCIsImZpbmRJbmRleCIsInVwZGF0ZWRJdGVtcyIsIm5ld1F0eSIsIm5ld1JhdGUiLCJuZXdDb3N0IiwibmV3SXRlbVJvdyIsIndlaWdodCIsIl91c2VNZW1vIiwicmVzdWx0MSIsInJlZHVjZSIsInN1bSIsInR2YSIsIlRXVFZBIiwidXNkQ29udmVydCIsInRvdGFsUGFpZCIsIk51bWJlciIsIm5ld0JhbGFuY2UiLCJjcmVkaXRJIiwiYWJzIiwidXNkQ29udmVydDEiLCJ0b3RhbFBhaWQxIiwicmVzdCIsInRvdGFsUGFpZEluZm8iLCJzdWJUb3RhbCIsInRheCIsInRvdGFsSW52b2ljZSIsImJhbGFuY2VEdWUiLCJjcmVkaXQiLCJUb3RhbEFtb3VudFBhaWQiLCJyZW1haW5pbmciLCJyZXNldEZvcm0iLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZSIsInNldEVycm9yT3Blbk1vZGFsIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsIm9wZW4xIiwic2V0T3BlbjEiLCJoYW5kbGVPcGVuQmFjayIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VCYWNrIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlNTMiLCJfdXNlU3RhdGU1NCIsImxvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2IiwibG9hZGluZ09wZW5Nb2RhbFVwZGF0ZSIsIl91c2VTdGF0ZTU3IiwiX3VzZVN0YXRlNTgiLCJFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlT3BlblVwZGF0ZSIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2UiLCJ3aW5kb3ciLCJyZWxvYWQiLCJoYW5kbGVDbG9zZVVwZGF0ZSIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVEZWNpc2lvbiIsImhpc3RvcnkiLCJiYWNrIiwiX3VzZVN0YXRlNTkiLCJfdXNlU3RhdGU2MCIsInJlZmVyZW5jZUluZm8iLCJzZXRSZWZlcmVuY2VJbmZvIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjEzIiwiUmVmZXJlbmNlSW5mbyIsIlJlZmVyZW5jZUluZm9OdW1iZXIiLCJpZEluZm8iLCJwZXJzb24iLCJyZWFzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwicG9zdCIsImxvZyIsIl94MiIsIl94MyIsInN0YXR1cyIsInBhcnNlRmxvYXQiLCJpdGVtRmlsdGVyIiwiX3JvdyRpdGVtTmFtZTMiLCJfdXNlU3RhdGU2MSIsIl91c2VTdGF0ZTYyIiwic2F2aW5nIiwic2V0U2F2aW5nIiwiaGFuZGxlUXR5IiwiX3JlZjE0IiwiaGFuZGxlU3VibWl0IiwiX3JlZjE1Iiwic3luY2VkIiwiX3g0IiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10IiwiY29udGFpbmVyIiwieHMiLCJtZCIsIm92ZXJmbG93WSIsIm9uU3VibWl0IiwicGFkZGluZyIsImRpc2FibGVDbGVhcmFibGUiLCJvcHRpb25zIiwiZ2V0T3B0aW9uTGFiZWwiLCJvbkNoYW5nZSIsIlBhcGVyQ29tcG9uZW50IiwiX3JlZjE2IiwiY2hpbGRyZW4iLCJvdGhlciIsIl9leGNsdWRlZDMiLCJtYXJnaW5Ub3AiLCJkaXNhYmxlZCIsIm9uTW91c2VEb3duIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJsYWJlbCIsInJlcXVpcmVkIiwic20iLCJodG1sRm9yIiwidHlwZSIsInN0YXJ0QWRvcm5tZW50IiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwic2xvdFByb3BzIiwidGV4dEZpZWxkIiwiZm9ybWF0IiwiZmxvYXQiLCJyaWdodCIsInRpdGxlIiwicGxhY2VtZW50Iiwib25EcmFnRW5kIiwidGV4dEFsaWduIiwiZHJvcHBhYmxlSWQiLCJwcm92aWRlZCIsInNuYXBzaG90IiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsImtleSIsImRyYWdnYWJsZUlkIiwiZHJhZ2dhYmxlUHJvcHMiLCJuZXdEZXNjcmlwdGlvbiIsInVuZGVmaW5lZCIsIkZyYWdtZW50IiwiZHJhZ0hhbmRsZVByb3BzIiwiY3Vyc29yIiwiZm9udFdlaWdodCIsImNvbFNwYW4iLCJzaXplIiwibGluZUhlaWdodCIsInRvVXBwZXJDYXNlIiwiaXRlbUJyYW5kIiwicmVuZGVyT3B0aW9uIiwib25JbnB1dENoYW5nZSIsIm5ld0lucHV0VmFsdWUiLCJmaWx0ZXJPcHRpb25zIiwiX3JlZjE3IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIl9yZWYxOCIsIl9leGNsdWRlZDQiLCJwbGFjZWhvbGRlciIsInRvRml4ZWQiLCJyZXBsYWNlIiwiZ2FwIiwiX3JlZjE5IiwiYm9yZGVyQ29sbGFwc2UiLCJib3JkZXJCb3R0b20iLCJhbGlnbiIsImNvbnRyb2wiLCJjaGVja2VkIiwibXVsdGlsaW5lIiwicm93cyIsIm1pbkhlaWdodCIsIm1iIiwiZnVsbFdpZHRoIiwibWluV2lkdGgiLCJfcmVmMjAiLCJsZyIsImZsZXhEaXJlY3Rpb24iLCJpbWFnZSIsImNvbnRlbnRUeXBlIiwiYWx0Iiwib2JqZWN0Rml0IiwicCIsImd1dHRlckJvdHRvbSIsImNvdW50Iiwib25DbG9zZSIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsIm9uQ3JlYXRlT3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==