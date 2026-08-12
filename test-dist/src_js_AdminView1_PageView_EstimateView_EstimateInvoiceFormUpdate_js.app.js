"use strict";
exports.id = "src_js_AdminView1_PageView_EstimateView_EstimateInvoiceFormUpdate_js";
exports.ids = ["src_js_AdminView1_PageView_EstimateView_EstimateInvoiceFormUpdate_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/EstimateView/EstimateInvoiceFormUpdate.js"
/*!******************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EstimateView/EstimateInvoiceFormUpdate.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SidebarDash1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SidebarDash1 */ "./src/js/component/SidebarDash1.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Refresh.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../../../component/ItemThumbnail */ "./src/js/component/ItemThumbnail.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["data", "contentType"],
  _excluded5 = ["children"],
  _excluded6 = ["children"];
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














































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({}, props, {
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
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var DownTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({}, props, {
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
function EstimateInvoiceFormUpdate() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_40__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_40__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_48__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_48__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_49__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
          var Name = res.data.data.employeeName;
          var Role = res.data.data.role;
          dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_49__.setUser)({
            userName: Name,
            role: Role
          }));
        } catch (error) {
          console.error('Error fetching data:', error);
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_49__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    customerName = _useState2[0],
    setCustomerName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    customer = _useState4[0],
    setCustomer = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    quotationNumber = _useState6[0],
    setQuotationNumber = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    estimateStatus = _useState8[0],
    setEstimateStatus = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    estimateDate = _useState0[0],
    setEstimateDate = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    noteInfo = _useState10[0],
    setNoteInfo = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    estimateDefect = _useState12[0],
    setEstimateDefect = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    estimateSubject = _useState14[0],
    setEstimateSubject = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    items = _useState16[0],
    SetItems = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    subTotal = _useState18[0],
    setSubTotal = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    total = _useState20[0],
    setTotal = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    shipping = _useState22[0],
    setShipping = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Adjustment'),
    _useState24 = _slicedToArray(_useState23, 2),
    adjustment = _useState24[0],
    setAdjustment = _useState24[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    adjustmentNumber = _useState26[0],
    setAdjustmentNumber = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    totalInvoice = _useState28[0],
    setTotalInvoice = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    balanceDue = _useState30[0],
    setBalanceDue = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    totalW = _useState32[0],
    setTotalW = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    CheckTvA = _useState34[0],
    setCheckTvA = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    tax = _useState36[0],
    setTax = _useState36[1];
  var TAX_RATE = 0.16;
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState38 = _slicedToArray(_useState37, 2),
    note = _useState38[0],
    setNote = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState40 = _slicedToArray(_useState39, 2),
    terms = _useState40[0],
    setTerms = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    includeLetter = _useState42[0],
    setIncludeLetter = _useState42[1];
  var PROFESSIONAL_COVER_LETTER = "Dear Valued Customer,\n\nThank you for giving us the opportunity to provide you with this quotation for your upcoming project.\n\nAt GLOBAL GATE SARL, we pride ourselves on delivering high-quality services and materials tailored to meet your specific needs. Our team has carefully reviewed your requirements, and we are confident that the proposed solution offers the best value and technical excellence.\n\nWe remain at your disposal for any further information or clarification you may require. We look forward to the possibility of working together.\n\nBest regards,\n\nThe GLOBAL GATE Team";
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(PROFESSIONAL_COVER_LETTER),
    _useState44 = _slicedToArray(_useState43, 2),
    attachedLetter = _useState44[0],
    setAttachedLetter = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState46 = _slicedToArray(_useState45, 2),
    itemNewQty = _useState46[0],
    setItemNewQty = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState48 = _slicedToArray(_useState47, 2),
    ItemInformation = _useState48[0],
    setItemInformation = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    shopOpen = _useState50[0],
    setShopOpen = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState52 = _slicedToArray(_useState51, 2),
    shopItems = _useState52[0],
    setShopItems = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState54 = _slicedToArray(_useState53, 2),
    shopSearch = _useState54[0],
    setShopSearch = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState56 = _slicedToArray(_useState55, 2),
    shopPage = _useState56[0],
    setShopPage = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState58 = _slicedToArray(_useState57, 2),
    shopTotalPages = _useState58[0],
    setShopTotalPages = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState60 = _slicedToArray(_useState59, 2),
    rate = _useState60[0],
    setRate = _useState60[1];
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState62 = _slicedToArray(_useState61, 2),
    shopLoading = _useState62[0],
    setShopLoading = _useState62[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2, _res$data3, _res$data4;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-estimation/").concat(id));
          setCustomerName(res.data.data.customerName);
          setQuotationNumber(Number(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.estimateNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.estimateNumber) || 0));
          setEstimateStatus(res.data.data.estimateStatus);
          setEstimateDate(res.data.data.estimateDate);
          setEstimateSubject(res.data.data.estimateSubject);
          SetItems(res.data.data.items);
          setSubTotal(res.data.data.subTotal);
          setTotal(res.data.data.total);
          setNote(res.data.data.note);
          setEstimateDefect(res.data.data.estimateDefect);
          setShipping(res.data.data.shipping);
          setAdjustment(res.data.data.adjustment);
          setAdjustmentNumber(Number(((_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.adjustmentNumber) || ((_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.adjustmentNumber) || 0));
          setTerms(res.data.data.terms);
          setNoteInfo(res.data.data.noteInfo);
          setCheckTvA(res.data.data.CheckTvA || false);
          setTerms(res.data.data.terms);
          setIncludeLetter(res.data.data.includeLetter || false);
          setAttachedLetter(res.data.data.attachedLetter || PROFESSIONAL_COVER_LETTER);
          setNote(res.data.data.note);
          setTax(res.data.data.tax || 0);
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
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState64 = _slicedToArray(_useState63, 2),
    openAutocomplete2 = _useState64[0],
    setOpenAutocomplete2 = _useState64[1];
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
    var fetchItem = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/item"));
          setItemInformation(res.data.data.reverse());
          var resC = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/customer"));
          setCustomer(resC.data.data.reverse());
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

  // Fetch Shop Items & Rate
  var fetchShop = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      setShopLoading(true);
      try {
        var resRate = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/rate"));
        resRate.data.data.forEach(row => setRate(row.rate));
        var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/item-shop?page=").concat(shopPage, "&limit=20&search=").concat(encodeURIComponent(shopSearch)));
        setShopTotalPages(res.data.totalPages);
        setShopItems(res.data.items.filter(row => row.typeItem === "Goods").reverse());
        setShopLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setShopLoading(false);
      }
    });
    return function fetchShop() {
      return _ref10.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shopOpen) {
      // Only fetch if side shop is open
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
  var handleAddToEstimateUpdate = shopItem => {
    // Check if item already exists
    var existingItemIndex = items.findIndex(item => item.itemName._id === shopItem._id);
    if (existingItemIndex !== -1) {
      // Item exists, update quantity
      var updatedItems = [...items];
      var currentItem = updatedItems[existingItemIndex];
      var newQty = parseInt(currentItem.itemQty) + 1;
      updatedItems[existingItemIndex] = _objectSpread(_objectSpread({}, currentItem), {}, {
        itemQty: newQty,
        itemAmount: Math.round(newQty * currentItem.itemRate * 100) / 100,
        totalAmount: Math.round(newQty * currentItem.itemRate * 100) / 100,
        discount: Math.round(newQty * currentItem.itemRate * currentItem.itemDiscount * 100) / 100,
        percentage: Math.round(newQty * currentItem.itemRate * currentItem.itemDiscount * 100) / 100 / 100,
        totalCost: Math.round(newQty * currentItem.itemCost * 100) / 100,
        totalGenerale: Math.round(currentItem.itemCost * currentItem.itemBuy * 100) / 100
      });
      SetItems(updatedItems);
    } else {
      // Item does not exist, add new
      var newItem = {
        idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_41__["default"])(),
        itemName: {
          _id: shopItem._id,
          itemName: shopItem.itemName
        },
        itemDescription: shopItem.itemDescription,
        itemDiscount: 0,
        itemQty: 1,
        itemRate: shopItem.itemSellingPrice,
        itemAmount: shopItem.itemSellingPrice,
        itemCost: shopItem.itemCostPrice,
        totalAmount: shopItem.itemSellingPrice,
        discount: 0,
        percentage: 0,
        itemBuy: 0,
        itemWeight: shopItem.itemWeight || "",
        totalGenerale: 0,
        totalCost: shopItem.itemCostPrice,
        stock: shopItem.itemQuantity,
        data: shopItem.data,
        contentType: shopItem.contentType,
        itemOut: 0,
        newItemOut: 0
      };
      SetItems([...items, newItem]);
    }
  };

  //addItem
  var addItem = () => {
    var newItems = {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_41__["default"])(),
      itemName: {
        _id: '',
        itemName: ''
      },
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemCost: 0,
      itemAmount: 0,
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
    };
    SetItems([...items, newItems]);
  };
  var addItemRow = i => {
    var newItem = {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_41__["default"])(),
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
    };
    var update = [...items];
    update.splice(i + 1, 0, newItem);
    SetItems(update);
  };
  var addItemWhiteRow = i => {
    var newItem = {
      newDescription: "",
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_41__["default"])(),
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
    };
    var update = [...items];
    update.splice(i + 1, 0, newItem);
    SetItems(update);
  };
  var addItemWhite = () => {
    SetItems([...items, {
      newDescription: "",
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_41__["default"])(),
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
      newItemOut: 0,
      data: null,
      contentType: null
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
  var handleChangeItem = (idRow, newValue) => {
    var selectedOptions = newValue;
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
        itemName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemName
      },
      data: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.data,
      contentType: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.contentType,
      itemCost: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemCostPrice,
      itemDescription: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemDescription,
      itemRate: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemSellingPrice,
      stock: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemQuantity
    }) : row));
  };
  var handleChange = (e, idRow) => {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var list = [...items];
    var i = items.findIndex(Item => Item.idRow === idRow);
    list[i][name] = value;
    list[i]['totalAmount'] = Math.round(list[i]['itemQty'] * list[i]['itemRate'] * 100) / 100;
    list[i]['totalCost'] = Math.round(list[i]['itemQty'] * list[i]['itemCost'] * 100) / 100;
    list[i]['discount'] = list[i]['totalAmount'] * list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount'] / 100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount'] - list[i]['percentage']) * 100) / 100;
    list[i]['totalGenerale'] = Math.round(list[i]['itemCost'] * list[i]['itemBuy'] * 100) / 100;
    SetItems(list);
  };
  var handleChangeCEO = (e, idRow) => {
    var _e$target2 = e.target,
      name = _e$target2.name,
      value = _e$target2.value;
    var list = [...items];
    var i = items.findIndex(Item => Item.idRow === idRow);
    list[i][name] = value;
    list[i]['totalAmount'] = Math.round(list[i]['itemQty'] * list[i]['itemRate'] * 100) / 100;
    list[i]['totalCost'] = Math.round(list[i]['itemQty'] * list[i]['itemCost'] * 100) / 100;
    list[i]['discount'] = list[i]['totalAmount'] * list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount'] / 100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount'] - list[i]['percentage']) * 100) / 100;
    list[i]['totalGenerale'] = Math.round(list[i]['itemCost'] * list[i]['itemBuy'] * 100) / 100;
    SetItems(list);
  };
  var handleChangeCustomer = newValue => {
    var selectedOptions = customer.find(option => option === newValue);
    setCustomerName({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      customerName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.Customer,
      billingAddress: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingAddress,
      billingCity: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingCity
    });
  };
  var handleClearCustomer = () => {
    setCustomerName(null);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (totalInvoice) {
      var wholePart = Math.floor(totalInvoice);
      var fractionalPart = (totalInvoice % 1).toFixed(2).split('.')[1];
      var wholeWords = number_to_words__WEBPACK_IMPORTED_MODULE_62___default().toWords(wholePart);
      var fractionalWords = number_to_words__WEBPACK_IMPORTED_MODULE_62___default().toWords(fractionalPart);
      setTotalW("".concat(wholeWords, " and ").concat(fractionalWords, " cents"));
    }
  }, [totalInvoice]);
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    open1 = _useState66[0],
    setOpen1 = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState68 = _slicedToArray(_useState67, 2),
    updateIdItemRow = _useState68[0],
    setUpdateIdItemRow = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState70 = _slicedToArray(_useState69, 2),
    stockOnHand = _useState70[0],
    setStockOnHand = _useState70[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result1 = items.reduce((sum, row) => sum + (parseFloat(row.itemAmount) || 0), 0);
    var val = isFinite(result1) ? result1 : 0;
    setSubTotal(val.toFixed(2));
    var calculatedTax = CheckTvA ? Math.round(Number(val) * TAX_RATE * 100) / 100 : 0;
    setTax(calculatedTax);
    var newTotal = Math.round((Number(val) + Number(calculatedTax) + Number(shipping) + Number(adjustmentNumber)) * 100) / 100;
    setTotalInvoice(newTotal);
    var newBalance = Math.round((newTotal - total) * 100) / 100;
    setBalanceDue(newBalance);
  }, [items, CheckTvA, shipping, adjustmentNumber, total]);
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState72 = _slicedToArray(_useState71, 2),
    open2 = _useState72[0],
    setOpen2 = _useState72[1];
  var handleOpenUpdateReason = e => {
    e.preventDefault();
    setOpen2(true);
  };
  var handleCloseUpdateReason = () => {
    setOpen2(false);
  };
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState74 = _slicedToArray(_useState73, 2),
    openBack = _useState74[0],
    setOpenBack = _useState74[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  {/** Loading Start */}
  var _useState75 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState76 = _slicedToArray(_useState75, 2),
    loading = _useState76[0],
    setLoading = _useState76[1];
  var _useState77 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState78 = _slicedToArray(_useState77, 2),
    loadingOpenModal = _useState78[0],
    setLoadingOpenModal = _useState78[1];
  var _useState79 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState80 = _slicedToArray(_useState79, 2),
    loadingUpdateItemOpenModal = _useState80[0],
    setLoadingUpdateItemOpenModal = _useState80[1];
  var _useState81 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState82 = _slicedToArray(_useState81, 2),
    ErrorOpenModal = _useState82[0],
    setErrorOpenModal = _useState82[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setOpen2(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleOpenUpdateItem = () => {
    setOpen1(false);
    setLoadingUpdateItemOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleError = () => {
    setOpen2(false);
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    navigate(-1);
  };
  var handleCloseUpdateItem = () => {
    setOpen1(false);
    setLoadingUpdateItemOpenModal(false);
    setItemNewQty(0);
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  {/** Loading End */}
  {/** item start */}
  var handleShowAutocomplete = idRow => {
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: null,
        itemName: row.itemName.itemName
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
  var _useState83 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState84 = _slicedToArray(_useState83, 2),
    openItemUpdate = _useState84[0],
    setOpenItemUpdate = _useState84[1];
  var _useState85 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState86 = _slicedToArray(_useState85, 2),
    idItem = _useState86[0],
    setIdItem = _useState86[1];
  var handleOpenItemUpdate = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (id) {
      setOpenItemUpdate(true);
      setIdItem(id);
    });
    return function handleOpenItemUpdate(_x) {
      return _ref11.apply(this, arguments);
    };
  }();
  var handleCloseItemUpdate = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      setOpenItemUpdate(false);
      if (idItem) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-item/").concat(idItem));
          SetItems(items => items.map(row => {
            var _row$itemName;
            return ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName._id) === res.data.data._id ? _objectSpread(_objectSpread({}, row), {}, {
              itemName: {
                _id: res.data.data._id,
                itemName: res.data.data.itemName
              },
              itemDescription: res.data.data.itemDescription,
              itemCost: res.data.data.itemCostPrice,
              itemRate: res.data.data.itemSellingPrice,
              stock: res.data.data.itemQuantity,
              data: res.data.data.data,
              contentType: res.data.data.contentType,
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
      return _ref12.apply(this, arguments);
    };
  }();
  {/** item End */}
  {/** Delete Row && Update Item Start */}
  var deleteItem = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (idRow) {
      SetItems(items => items.filter(Item => Item.idRow !== idRow));
    });
    return function deleteItem(_x2) {
      return _ref13.apply(this, arguments);
    };
  }();
  var filterItemInformation = ItemInformation.filter(option => !items.find(row => {
    var _row$itemName2;
    return option._id === ((_row$itemName2 = row.itemName) === null || _row$itemName2 === void 0 ? void 0 : _row$itemName2._id) && option.typeItem === "Goods";
  }));
  {/** Delete Row && Update Item End */}
  var _useState87 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState88 = _slicedToArray(_useState87, 2),
    reason = _useState88[0],
    setReason = _useState88[1];
  var dateComment = new Date();
  var _useState89 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState90 = _slicedToArray(_useState89, 2),
    hideBack = _useState90[0],
    setHideBack = _useState90[1];
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* () {
      var data = {
        idInfo: id,
        person: user.data.userName + ' Modify QUOTATION ',
        reason: 'Q-' + String(quotationNumber).padStart(6, '0') + ' ' + reason,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/create-notification/"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateComment() {
      return _ref14.apply(this, arguments);
    };
  }();
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var itemsWithoutData = items.map(_ref16 => {
        var data = _ref16.data,
          contentType = _ref16.contentType,
          rest = _objectWithoutProperties(_ref16, _excluded4);
        return rest;
      });
      var data = {
        customerName,
        estimateNumber: quotationNumber,
        estimateSubject,
        estimateDefect,
        items: itemsWithoutData,
        subTotal,
        total,
        totalW,
        note,
        shipping,
        adjustment,
        adjustmentNumber,
        totalInvoice,
        terms,
        noteInfo,
        balanceDue,
        tax,
        CheckTvA,
        updateS: false,
        includeLetter,
        attachedLetter
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/update-estimation/").concat(id), data);
        if (res) {
          handleCreateComment();
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmitEdit(_x3) {
      return _ref15.apply(this, arguments);
    };
  }();
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState91 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState92 = _slicedToArray(_useState91, 2),
    search2 = _useState92[0],
    setSearch2 = _useState92[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray2 = search2 !== '' ? items.filter(Item => Item.itemName && Item.itemName.itemName.toLowerCase().includes(search2.toLowerCase()) || Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) || Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase())) : items;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_27__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "UPDATE QUOTATION"), hideBack === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_47__["default"], {
    style: {
      color: 'white'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_47__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_53__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_29__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash1__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_30__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleOpenUpdateReason
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 2,
    style: {
      backgroundColor: 'white',
      padding: '10px'
    },
    component: _mui_material__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, customerName !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, customerName.customerName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleClearCustomer,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disableClearable: true,
    options: customer,
    getOptionLabel: option => option.Customer,
    onChange: (e, newValue) => {
      handleChangeCustomer(newValue);
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, params, {
      label: "Customer Name",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    htmlFor: "estimateNumber"
  }, "Quotation Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    disabled: user.data.role !== 'CEO',
    type: "number",
    id: "estimateNumber",
    label: "Quotation Number",
    value: quotationNumber,
    onChange: e => setQuotationNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "Q-00")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_43__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_44__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_42__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_45__.DatePicker, {
    disabled: user.data.role !== 'CEO',
    name: "estimateDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_46___default()(estimateDate),
    onChange: date => setEstimateDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "estimateDefect",
    name: "estimateDefect",
    label: "Defect",
    value: estimateDefect,
    onChange: e => setEstimateDefect(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "estimateSubject",
    name: "estimateSubject",
    label: "Subject",
    value: estimateSubject,
    onChange: e => setEstimateSubject(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "noteInfo",
    name: "noteInfo",
    multiline: true,
    rows: 3,
    value: noteInfo !== undefined ? noteInfo : '',
    label: "Note",
    onChange: e => setNoteInfo(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: "Search",
    id: "search2",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'block',
      position: 'fixed',
      zIndex: 1,
      float: 'right',
      right: '-5px',
      top: '400px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: addItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: addItemWhite
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    className: "btn1",
    style: {
      backgroundColor: 'gray',
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "ITEM LIST",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: toggleShop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "btn1",
    style: {
      backgroundColor: '#202a5a',
      fontSize: '40px'
    }
  }))))), user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_63__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_63__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), newArray2.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_63__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => {
    var _Item$itemName;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      required: true,
      name: "newDescription",
      id: "newDescription",
      value: Item.newDescription,
      onChange: e => handleChangeCEO(e, Item.idRow),
      size: "small",
      sx: {
        width: '100%',
        backgroundColor: 'white',
        fontSize: 12
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
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        height: '100px'
      }
    }, Item.itemName._id || Item.itemName.itemName === 'empty' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_66__["default"], {
      itemId: (_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName._id,
      initialData: Item.data,
      initialType: Item.contentType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      hidden: Item.itemName ? Item.itemName.itemName === 'empty' : '',
      sx: {
        fontSize: '23px'
      }
    }, Item.itemName ? Item.itemName.itemName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      name: "itemDescription",
      id: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      rows: 3,
      onChange: e => handleChangeCEO(e, Item.idRow),
      size: "small",
      sx: {
        width: '350px',
        backgroundColor: 'white',
        fontSize: 12
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => handleShowAutocomplete(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
      getOptionLabel: option => option.itemName + '/' + option.itemBrand,
      renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
        sx: {
          backgroundColor: '#f2f2f2'
        }
      }), option.itemName + '/' + option.itemBrand),
      renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({
        multiline: true,
        rows: 4
      }, params, {
        required: true
      })),
      inputValue: inputValue,
      onInputChange: (event, newInputValue) => {
        setInputValue(newInputValue);
      },
      filterOptions: (options, _ref17) => {
        var inputValue = _ref17.inputValue;
        return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
      },
      onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
      size: "small",
      PaperComponent: _ref18 => {
        var children = _ref18.children,
          other = _objectWithoutProperties(_ref18, _excluded5);
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
        width: '470px',
        backgroundColor: 'white'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => handleShowAutocompleteDescription(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      disabled: true,
      name: "stock",
      id: "stock",
      value: Item.stock,
      onChange: e => handleChangeCEO(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      name: "itemQty",
      id: "itemQty",
      onChange: e => handleChangeCEO(e, Item.idRow),
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
      onChange: e => handleChangeCEO(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      name: "itemDiscount",
      id: "itemDiscount",
      value: Item.itemDiscount,
      onChange: e => handleChangeCEO(e, Item.idRow),
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
    }))))));
  })), provided.placeholder))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_63__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_63__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), newArray2.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_63__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => {
    var _Item$itemName2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      required: true,
      name: "newDescription",
      id: "newDescription",
      value: Item.newDescription,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      disabled: user.data.role === 'User',
      sx: {
        width: '100%',
        backgroundColor: 'white',
        fontSize: 12
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
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "New-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => addItemRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
      style: {
        color: '#202a5a'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Blank-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => addItemWhiteRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
      style: {
        color: 'gray'
      }
    })))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        height: '100px'
      }
    }, Item.itemName._id || Item.itemName.itemName === 'empty' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_66__["default"], {
      itemId: (_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2._id,
      initialData: Item.data,
      initialType: Item.contentType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      hidden: Item.itemName ? Item.itemName.itemName === 'empty' : '',
      sx: {
        fontSize: '23px'
      }
    }, Item.itemName ? Item.itemName.itemName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      name: "itemDescription",
      id: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      rows: 3,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '300px',
        backgroundColor: 'white',
        fontSize: 12
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => handleShowAutocomplete(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
      getOptionLabel: option => option.itemName + '/' + option.itemBrand,
      renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], props, option.itemName + '/' + option.itemBrand),
      renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({
        multiline: true,
        rows: 4
      }, params)),
      inputValue: inputValue,
      onInputChange: (event, newInputValue) => {
        setInputValue(newInputValue);
      },
      filterOptions: (options, _ref19) => {
        var inputValue = _ref19.inputValue;
        return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
      },
      onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
      size: "small",
      PaperComponent: _ref20 => {
        var children = _ref20.children,
          other = _objectWithoutProperties(_ref20, _excluded6);
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
        width: '470px',
        backgroundColor: 'white'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => handleShowAutocompleteDescription(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      disabled: true,
      name: "stock",
      id: "stock",
      value: Item.stock,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      name: "itemQty",
      id: "itemQty",
      onChange: e => handleChange(e, Item.idRow),
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
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      name: "itemDiscount",
      id: "itemDiscount",
      value: Item.itemDiscount,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      placeholder: "1 to 5 %",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "amountTotalInvoice"
    }, (Number(Item.itemAmount) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
      title: "Delete",
      sx: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => deleteItem(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "New-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => addItemRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
      style: {
        color: '#202a5a'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Blank-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => addItemWhiteRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
      style: {
        color: 'gray'
      }
    })))))));
  })), provided.placeholder)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "note",
    name: "note",
    multiline: true,
    rows: 4,
    value: note,
    label: "Quote Note",
    onChange: e => setNote(e.target.value),
    sx: {
      width: '50%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "firstTable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Sub-Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    disabled: true,
    type: "number",
    id: "subTotal",
    size: "small",
    name: "subTotal",
    value: subTotal,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "TVA @ 16% ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    checked: CheckTvA,
    onChange: e => setCheckTvA(e.target.checked)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    disabled: true,
    type: "number",
    id: "tax",
    size: "small",
    name: "tax",
    value: tax,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    disabled: true,
    type: "number",
    id: "totalInvoice",
    size: "small",
    name: "totalInvoice",
    value: totalInvoice,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    type: "number",
    id: "balanceDue",
    size: "small",
    name: "balanceDue",
    value: balanceDue,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Total In Words"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "totalW",
    id: "totalW",
    value: totalW,
    multiline: true,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    maxRows: 3
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    sx: {
      mt: 2,
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    orientation: "horizontal",
    flexItem: true,
    sx: {
      fontWeight: 'bold'
    }
  }, " COVER LETTER (Optional) ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      checked: includeLetter,
      onChange: e => setIncludeLetter(e.target.checked),
      sx: {
        color: '#30368a',
        '&.Mui-checked': {
          color: '#30368a'
        }
      }
    }),
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      sx: {
        fontWeight: 'bold',
        color: '#30368a'
      }
    }, "Attach Professional Cover Letter to this Quotation")
  })), includeLetter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "attachedLetter",
    name: "attachedLetter",
    multiline: true,
    rows: 8,
    value: attachedLetter,
    label: "Cover Letter Content",
    onChange: e => setAttachedLetter(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    placeholder: "Write a professional introduction for your quotation..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "terms",
    name: "terms",
    multiline: true,
    rows: 4,
    value: terms,
    label: "Quote Terms",
    onChange: e => setTerms(e.target.value),
    sx: {
      width: '60%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Do you want to stop Updating Quotation ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop updating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate('/EstimateViewAdmin'),
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
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: open2,
    onClose: handleCloseUpdateReason,
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
    onClick: handleCloseUpdateReason,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Reason Of Updating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    required: true,
    id: "reason",
    name: "reason",
    multiline: true,
    rows: 4,
    value: reason,
    onChange: e => setReason(e.target.value),
    label: "Comments",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_20__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_50__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_51__["default"], {
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
    onClick: handleClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h6",
    component: "div"
  }, "Select Item from Shop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: toggleShop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: "flex",
    alignItems: "center",
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    fullWidth: true,
    label: "Search Shop",
    variant: "outlined",
    value: shopSearch,
    onChange: handleShopSearchChange,
    size: "small"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleRefreshShop,
    color: "primary",
    sx: {
      ml: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], null))), shopLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_50__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      flexGrow: 1,
      overflowY: 'auto',
      maxHeight: 'calc(100vh - 180px)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 2
  }, shopItems.map(item => {
    var _ref21, _item$itemSellingPric;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      xs: 6,
      key: item._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_55__["default"], {
      sx: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_56__["default"], {
      component: "img",
      height: "120",
      image: "data:".concat(item.contentType, ";base64,").concat(item.data),
      alt: item.itemName,
      sx: {
        objectFit: 'contain',
        padding: '5px'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_57__["default"], {
      sx: {
        flexGrow: 1,
        padding: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "subtitle2",
      component: "div"
    }, item.itemName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "body2",
      color: "text.secondary"
    }, "FC ", (_ref21 = item.itemSellingPrice * rate) === null || _ref21 === void 0 ? void 0 : _ref21.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "body2",
      color: "primary",
      fontWeight: "bold"
    }, "$ ", (_item$itemSellingPric = item.itemSellingPrice) === null || _item$itemSellingPric === void 0 ? void 0 : _item$itemSellingPric.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "caption",
      display: "block",
      gutterBottom: true
    }, "Stock: ", item.itemQuantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_58__["default"], {
      variant: "contained",
      size: "small",
      fullWidth: true,
      onClick: () => handleAddToEstimateUpdate(item),
      sx: {
        marginTop: '5px'
      }
    }, "Add"))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: "flex",
    justifyContent: "center",
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_59__["default"], {
    count: shopTotalPages,
    page: shopPage,
    onChange: handleShopPageChange,
    size: "small",
    color: "primary"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_20__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_50__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_52__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: loadingUpdateItemOpenModal,
    onClose: handleCloseUpdateItem,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_20__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_50__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_51__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Update successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseUpdateItem
  }, "Close")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EstimateInvoiceFormUpdate);

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

/***/ "./src/js/component/SidebarDash1.js"
/*!******************************************!*\
  !*** ./src/js/component/SidebarDash1.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_SidebarNew_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/SidebarNew.scss */ "./src/js/css/SidebarNew.scss");
/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Dashboard */ "./node_modules/@mui/icons-material/Dashboard.js");
/* harmony import */ var _mui_icons_material_PermIdentity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/PermIdentity */ "./node_modules/@mui/icons-material/PermIdentity.js");
/* harmony import */ var _mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ListAlt */ "./node_modules/@mui/icons-material/ListAlt.js");
/* harmony import */ var _mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Description */ "./node_modules/@mui/icons-material/Description.js");
/* harmony import */ var _mui_icons_material_Receipt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Receipt */ "./node_modules/@mui/icons-material/Receipt.js");
/* harmony import */ var _mui_icons_material_RequestQuote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/RequestQuote */ "./node_modules/@mui/icons-material/RequestQuote.js");
/* harmony import */ var _mui_icons_material_MonetizationOn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/MonetizationOn */ "./node_modules/@mui/icons-material/MonetizationOn.js");
/* harmony import */ var _mui_icons_material_Engineering__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Engineering */ "./node_modules/@mui/icons-material/Engineering.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/ShoppingBagOutlined.js");
/* harmony import */ var _mui_icons_material_RoomPreferences__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/RoomPreferences */ "./node_modules/@mui/icons-material/RoomPreferences.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ "./node_modules/@mui/icons-material/MoreVert.js");




















function SidebarDash1() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Dashboard"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_PermIdentity__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Customer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Store"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_RequestQuote__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Quotation"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Invoice"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_MonetizationOn__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Payment"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Daily Expenses"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_RoomPreferences__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Project"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Receipt__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Purchases Request"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Engineering__WEBPACK_IMPORTED_MODULE_9__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Maintenance"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_15__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "More"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarDash1);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRXN0aW1hdGVWaWV3X0VzdGltYXRlSW52b2ljZUZvcm1VcGRhdGVfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBa0Q7QUFDUztBQUNwQztBQUNFO0FBQzJCO0FBQ3NCO0FBQ3RCO0FBQzhNO0FBQ2xNO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNRO0FBQ0E7QUFDYztBQUNJO0FBQ3hDO0FBQ3dCO0FBQ2tEO0FBQzFDO0FBQ2hDO0FBQ3lDO0FBQ2E7QUFDaEI7QUFDSjtBQUNsQztBQUM0QjtBQUMwQjtBQUNNO0FBQy9CO0FBQytCO0FBQ3ZDO0FBQ2U7QUFDVjtBQUNKO0FBQ0Y7QUFDeUQ7QUFDakQ7QUFDSTtBQUNmO0FBQ2lDO0FBQ3RCO0FBQ1E7QUFDRDtBQUc3RCxJQUFNb0YsWUFBWSxHQUFHL0QsMERBQU0sQ0FBQ2dFLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNoRHpGLDBEQUFBLENBQUM0Qiw4REFBTyxFQUFBK0QsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPbkUsOERBQWMsQ0FBQ29FLE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLEtBQUs7TUFDdEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUws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QUEsQ0FBQ3dyQixzREFBWTtJQUFDMUosRUFBRSxFQUFFO01BQUUzYixLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQ25HLDBEQUFBLENBQUM0ckIscUVBQVksTUFBRSxDQUNILENBQUMsZUFDZjVyQiwwREFBQSxDQUFDeXJCLHNEQUFZO0lBQUNJLE9BQU8sRUFBQztFQUFNLENBQUUsQ0FDaEIsQ0FDaEIsQ0FBQztBQUVQO0FBRUEsaUVBQWUxckIsWUFBWSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0VzdGltYXRlVmlldy9Fc3RpbWF0ZUludm9pY2VGb3JtVXBkYXRlLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvY29tcG9uZW50L0l0ZW1UaHVtYm5haWwuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvU2lkZWJhckRhc2gxLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaWRlYmFyRGFzaDEgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoMSc7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnXHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcydcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IEJhY2tkcm9wLCBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgUGFwZXIsIFRhYmxlQ29udGFpbmVyLCBUZXh0RmllbGQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIFR5cG9ncmFwaHksIEF1dG9jb21wbGV0ZSwgTW9kYWwsIEJveCwgc3R5bGVkLCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgRGl2aWRlciwgQXZhdGFyLCBDaGVja2JveCwgRm9ybUNvbnRyb2xMYWJlbCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IEFkZCwgRHJhZ0luZGljYXRvclJvdW5kZWQsIEVkaXQsIFJlZnJlc2gsIFJlbW92ZUNpcmNsZU91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xyXG5pbXBvcnQgQWRkU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IHsgRHJhd2VyIGFzIFNpZGVEcmF3ZXIsIENhcmQsIENhcmRDb250ZW50LCBDYXJkTWVkaWEsIEJ1dHRvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgSXRlbUZvcm1WaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtRm9ybVZpZXcyJztcclxuaW1wb3J0IEl0ZW1VcGRhdGVWaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtVXBkYXRlVmlldzInO1xyXG5pbXBvcnQgbnVtYmVyVG9Xb3JkcyBmcm9tICdudW1iZXItdG8td29yZHMnXHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuaW1wb3J0IEl0ZW1UaHVtYm5haWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0l0ZW1UaHVtYm5haWwnO1xyXG5cclxuXHJcbmNvbnN0IExpZ2h0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBEb3duVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3Qgc3R5bGUyID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogODAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gRXN0aW1hdGVJbnZvaWNlRm9ybVVwZGF0ZSgpIHtcclxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBbY3VzdG9tZXJOYW1lLCBzZXRDdXN0b21lck5hbWVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtxdW90YXRpb25OdW1iZXIsIHNldFF1b3RhdGlvbk51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZXN0aW1hdGVTdGF0dXMsIHNldEVzdGltYXRlU3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlc3RpbWF0ZURhdGUsIHNldEVzdGltYXRlRGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbm90ZUluZm8sIHNldE5vdGVJbmZvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlc3RpbWF0ZURlZmVjdCwgc2V0RXN0aW1hdGVEZWZlY3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VzdGltYXRlU3ViamVjdCwgc2V0RXN0aW1hdGVTdWJqZWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtcywgU2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzdWJUb3RhbCwgc2V0U3ViVG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hpcHBpbmcsIHNldFNoaXBwaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthZGp1c3RtZW50LCBzZXRBZGp1c3RtZW50XSA9IHVzZVN0YXRlKCdBZGp1c3RtZW50JylcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2FkanVzdG1lbnROdW1iZXIsIHNldEFkanVzdG1lbnROdW1iZXJdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbdG90YWxJbnZvaWNlLCBzZXRUb3RhbEludm9pY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2JhbGFuY2VEdWUsIHNldEJhbGFuY2VEdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsVywgc2V0VG90YWxXXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtDaGVja1R2QSwgc2V0Q2hlY2tUdkFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0YXgsIHNldFRheF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBUQVhfUkFURSA9IDAuMTY7XHJcbiAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZXJtcywgc2V0VGVybXNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpbmNsdWRlTGV0dGVyLCBzZXRJbmNsdWRlTGV0dGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBQUk9GRVNTSU9OQUxfQ09WRVJfTEVUVEVSID0gYERlYXIgVmFsdWVkIEN1c3RvbWVyLFxyXG5cclxuVGhhbmsgeW91IGZvciBnaXZpbmcgdXMgdGhlIG9wcG9ydHVuaXR5IHRvIHByb3ZpZGUgeW91IHdpdGggdGhpcyBxdW90YXRpb24gZm9yIHlvdXIgdXBjb21pbmcgcHJvamVjdC5cclxuXHJcbkF0IEdMT0JBTCBHQVRFIFNBUkwsIHdlIHByaWRlIG91cnNlbHZlcyBvbiBkZWxpdmVyaW5nIGhpZ2gtcXVhbGl0eSBzZXJ2aWNlcyBhbmQgbWF0ZXJpYWxzIHRhaWxvcmVkIHRvIG1lZXQgeW91ciBzcGVjaWZpYyBuZWVkcy4gT3VyIHRlYW0gaGFzIGNhcmVmdWxseSByZXZpZXdlZCB5b3VyIHJlcXVpcmVtZW50cywgYW5kIHdlIGFyZSBjb25maWRlbnQgdGhhdCB0aGUgcHJvcG9zZWQgc29sdXRpb24gb2ZmZXJzIHRoZSBiZXN0IHZhbHVlIGFuZCB0ZWNobmljYWwgZXhjZWxsZW5jZS5cclxuXHJcbldlIHJlbWFpbiBhdCB5b3VyIGRpc3Bvc2FsIGZvciBhbnkgZnVydGhlciBpbmZvcm1hdGlvbiBvciBjbGFyaWZpY2F0aW9uIHlvdSBtYXkgcmVxdWlyZS4gV2UgbG9vayBmb3J3YXJkIHRvIHRoZSBwb3NzaWJpbGl0eSBvZiB3b3JraW5nIHRvZ2V0aGVyLlxyXG5cclxuQmVzdCByZWdhcmRzLFxyXG5cclxuVGhlIEdMT0JBTCBHQVRFIFRlYW1gO1xyXG4gIGNvbnN0IFthdHRhY2hlZExldHRlciwgc2V0QXR0YWNoZWRMZXR0ZXJdID0gdXNlU3RhdGUoUFJPRkVTU0lPTkFMX0NPVkVSX0xFVFRFUik7XHJcbiAgY29uc3QgW2l0ZW1OZXdRdHksIHNldEl0ZW1OZXdRdHldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW0l0ZW1JbmZvcm1hdGlvbiwgc2V0SXRlbUluZm9ybWF0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2hvcE9wZW4sIHNldFNob3BPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvcEl0ZW1zLCBzZXRTaG9wSXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzaG9wU2VhcmNoLCBzZXRTaG9wU2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2hvcFBhZ2UsIHNldFNob3BQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtzaG9wVG90YWxQYWdlcywgc2V0U2hvcFRvdGFsUGFnZXNdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Nob3BMb2FkaW5nLCBzZXRTaG9wTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVzdGltYXRpb24vJHtpZH1gKVxyXG4gICAgICAgIHNldEN1c3RvbWVyTmFtZShyZXMuZGF0YS5kYXRhLmN1c3RvbWVyTmFtZSk7XHJcbiAgICAgICAgc2V0UXVvdGF0aW9uTnVtYmVyKE51bWJlcihyZXMuZGF0YT8uZGF0YT8uZXN0aW1hdGVOdW1iZXIgfHwgcmVzLmRhdGE/LmVzdGltYXRlTnVtYmVyIHx8IDApKTtcclxuICAgICAgICBzZXRFc3RpbWF0ZVN0YXR1cyhyZXMuZGF0YS5kYXRhLmVzdGltYXRlU3RhdHVzKTtcclxuICAgICAgICBzZXRFc3RpbWF0ZURhdGUocmVzLmRhdGEuZGF0YS5lc3RpbWF0ZURhdGUpO1xyXG4gICAgICAgIHNldEVzdGltYXRlU3ViamVjdChyZXMuZGF0YS5kYXRhLmVzdGltYXRlU3ViamVjdCk7XHJcbiAgICAgICAgU2V0SXRlbXMocmVzLmRhdGEuZGF0YS5pdGVtcyk7XHJcbiAgICAgICAgc2V0U3ViVG90YWwocmVzLmRhdGEuZGF0YS5zdWJUb3RhbCk7XHJcbiAgICAgICAgc2V0VG90YWwocmVzLmRhdGEuZGF0YS50b3RhbCk7XHJcbiAgICAgICAgc2V0Tm90ZShyZXMuZGF0YS5kYXRhLm5vdGUpO1xyXG4gICAgICAgIHNldEVzdGltYXRlRGVmZWN0KHJlcy5kYXRhLmRhdGEuZXN0aW1hdGVEZWZlY3QpO1xyXG4gICAgICAgIHNldFNoaXBwaW5nKHJlcy5kYXRhLmRhdGEuc2hpcHBpbmcpO1xyXG4gICAgICAgIHNldEFkanVzdG1lbnQocmVzLmRhdGEuZGF0YS5hZGp1c3RtZW50KTtcclxuICAgICAgICBzZXRBZGp1c3RtZW50TnVtYmVyKE51bWJlcihyZXMuZGF0YT8uZGF0YT8uYWRqdXN0bWVudE51bWJlciB8fCByZXMuZGF0YT8uYWRqdXN0bWVudE51bWJlciB8fCAwKSk7XHJcbiAgICAgICAgc2V0VGVybXMocmVzLmRhdGEuZGF0YS50ZXJtcyk7XHJcbiAgICAgICAgc2V0Tm90ZUluZm8ocmVzLmRhdGEuZGF0YS5ub3RlSW5mbyk7XHJcbiAgICAgICAgc2V0Q2hlY2tUdkEocmVzLmRhdGEuZGF0YS5DaGVja1R2QSB8fCBmYWxzZSk7XHJcbiAgICAgICAgc2V0VGVybXMocmVzLmRhdGEuZGF0YS50ZXJtcyk7XHJcbiAgICAgICAgc2V0SW5jbHVkZUxldHRlcihyZXMuZGF0YS5kYXRhLmluY2x1ZGVMZXR0ZXIgfHwgZmFsc2UpO1xyXG4gICAgICAgIHNldEF0dGFjaGVkTGV0dGVyKHJlcy5kYXRhLmRhdGEuYXR0YWNoZWRMZXR0ZXIgfHwgUFJPRkVTU0lPTkFMX0NPVkVSX0xFVFRFUik7XHJcbiAgICAgICAgc2V0Tm90ZShyZXMuZGF0YS5kYXRhLm5vdGUpO1xyXG4gICAgICAgIHNldFRheChyZXMuZGF0YS5kYXRhLnRheCB8fCAwKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbaWRdKVxyXG4gIGNvbnN0IFtvcGVuQXV0b2NvbXBsZXRlMiwgc2V0T3BlbkF1dG9jb21wbGV0ZTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlSXRlbSA9IChuZXdJdGVtKSA9PiB7XHJcbiAgICBzZXRJdGVtSW5mb3JtYXRpb24oW25ld0l0ZW0sIC4uLkl0ZW1JbmZvcm1hdGlvbl0pXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEl0ZW0gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbWApXHJcbiAgICAgICAgc2V0SXRlbUluZm9ybWF0aW9uKHJlcy5kYXRhLmRhdGEucmV2ZXJzZSgpKVxyXG4gICAgICAgIGNvbnN0IHJlc0MgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9jdXN0b21lcmApXHJcbiAgICAgICAgc2V0Q3VzdG9tZXIocmVzQy5kYXRhLmRhdGEucmV2ZXJzZSgpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hJdGVtKClcclxuICB9LCBbXSlcclxuXHJcbiAgLy8gRmV0Y2ggU2hvcCBJdGVtcyAmIFJhdGVcclxuICBjb25zdCBmZXRjaFNob3AgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTaG9wTG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc1JhdGUgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9yYXRlYClcclxuICAgICAgcmVzUmF0ZS5kYXRhLmRhdGEuZm9yRWFjaCgocm93KSA9PiBzZXRSYXRlKHJvdy5yYXRlKSlcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW0tc2hvcD9wYWdlPSR7c2hvcFBhZ2V9JmxpbWl0PTIwJnNlYXJjaD0ke2VuY29kZVVSSUNvbXBvbmVudChzaG9wU2VhcmNoKX1gKVxyXG4gICAgICBzZXRTaG9wVG90YWxQYWdlcyhyZXMuZGF0YS50b3RhbFBhZ2VzKVxyXG4gICAgICBzZXRTaG9wSXRlbXMocmVzLmRhdGEuaXRlbXMuZmlsdGVyKChyb3cpID0+IHJvdy50eXBlSXRlbSA9PT0gXCJHb29kc1wiKS5yZXZlcnNlKCkpXHJcbiAgICAgIHNldFNob3BMb2FkaW5nKGZhbHNlKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIHNldFNob3BMb2FkaW5nKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaG9wT3BlbikgeyAvLyBPbmx5IGZldGNoIGlmIHNpZGUgc2hvcCBpcyBvcGVuXHJcbiAgICAgIGZldGNoU2hvcCgpXHJcbiAgICB9XHJcbiAgfSwgW3Nob3BQYWdlLCBzaG9wU2VhcmNoLCBzaG9wT3Blbl0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlZnJlc2hTaG9wID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvcFNlYXJjaCgnJyk7XHJcbiAgICBzZXRTaG9wUGFnZSgxKTtcclxuICAgIGZldGNoU2hvcCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvcFBhZ2VDaGFuZ2UgPSAoZSwgbmV3UGFnZSkgPT4ge1xyXG4gICAgc2V0U2hvcFBhZ2UobmV3UGFnZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNob3BTZWFyY2hDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvcFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRTaG9wUGFnZSgxKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlU2hvcCA9ICgpID0+IHtcclxuICAgIHNldFNob3BPcGVuKCFzaG9wT3Blbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVBZGRUb0VzdGltYXRlVXBkYXRlID0gKHNob3BJdGVtKSA9PiB7XHJcbiAgICAvLyBDaGVjayBpZiBpdGVtIGFscmVhZHkgZXhpc3RzXHJcbiAgICBjb25zdCBleGlzdGluZ0l0ZW1JbmRleCA9IGl0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaXRlbU5hbWUuX2lkID09PSBzaG9wSXRlbS5faWQpO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0l0ZW1JbmRleCAhPT0gLTEpIHtcclxuICAgICAgLy8gSXRlbSBleGlzdHMsIHVwZGF0ZSBxdWFudGl0eVxyXG4gICAgICBjb25zdCB1cGRhdGVkSXRlbXMgPSBbLi4uaXRlbXNdO1xyXG4gICAgICBjb25zdCBjdXJyZW50SXRlbSA9IHVwZGF0ZWRJdGVtc1tleGlzdGluZ0l0ZW1JbmRleF07XHJcbiAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KGN1cnJlbnRJdGVtLml0ZW1RdHkpICsgMTtcclxuXHJcbiAgICAgIHVwZGF0ZWRJdGVtc1tleGlzdGluZ0l0ZW1JbmRleF0gPSB7XHJcbiAgICAgICAgLi4uY3VycmVudEl0ZW0sXHJcbiAgICAgICAgaXRlbVF0eTogbmV3UXR5LFxyXG4gICAgICAgIGl0ZW1BbW91bnQ6IE1hdGgucm91bmQoKG5ld1F0eSAqIGN1cnJlbnRJdGVtLml0ZW1SYXRlKSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgdG90YWxBbW91bnQ6IE1hdGgucm91bmQoKG5ld1F0eSAqIGN1cnJlbnRJdGVtLml0ZW1SYXRlKSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgZGlzY291bnQ6IE1hdGgucm91bmQoKG5ld1F0eSAqIGN1cnJlbnRJdGVtLml0ZW1SYXRlICogY3VycmVudEl0ZW0uaXRlbURpc2NvdW50KSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgcGVyY2VudGFnZTogKE1hdGgucm91bmQoKG5ld1F0eSAqIGN1cnJlbnRJdGVtLml0ZW1SYXRlICogY3VycmVudEl0ZW0uaXRlbURpc2NvdW50KSAqIDEwMCkgLyAxMDApIC8gMTAwLFxyXG4gICAgICAgIHRvdGFsQ29zdDogTWF0aC5yb3VuZCgobmV3UXR5ICogY3VycmVudEl0ZW0uaXRlbUNvc3QpICogMTAwKSAvIDEwMCxcclxuICAgICAgICB0b3RhbEdlbmVyYWxlOiBNYXRoLnJvdW5kKChjdXJyZW50SXRlbS5pdGVtQ29zdCAqIGN1cnJlbnRJdGVtLml0ZW1CdXkpICogMTAwKSAvIDEwMCxcclxuICAgICAgfTtcclxuICAgICAgU2V0SXRlbXModXBkYXRlZEl0ZW1zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEl0ZW0gZG9lcyBub3QgZXhpc3QsIGFkZCBuZXdcclxuICAgICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgICAgX2lkOiBzaG9wSXRlbS5faWQsXHJcbiAgICAgICAgICBpdGVtTmFtZTogc2hvcEl0ZW0uaXRlbU5hbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtRGVzY3JpcHRpb246IHNob3BJdGVtLml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgICAgaXRlbVF0eTogMSxcclxuICAgICAgICBpdGVtUmF0ZTogc2hvcEl0ZW0uaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICBpdGVtQW1vdW50OiBzaG9wSXRlbS5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIGl0ZW1Db3N0OiBzaG9wSXRlbS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgIHRvdGFsQW1vdW50OiBzaG9wSXRlbS5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgICBpdGVtV2VpZ2h0OiBzaG9wSXRlbS5pdGVtV2VpZ2h0IHx8IFwiXCIsXHJcbiAgICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgICB0b3RhbENvc3Q6IHNob3BJdGVtLml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgICAgc3RvY2s6IHNob3BJdGVtLml0ZW1RdWFudGl0eSxcclxuICAgICAgICBkYXRhOiBzaG9wSXRlbS5kYXRhLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBzaG9wSXRlbS5jb250ZW50VHlwZSxcclxuICAgICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICAgIH07XHJcbiAgICAgIFNldEl0ZW1zKFsuLi5pdGVtcywgbmV3SXRlbV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9hZGRJdGVtXHJcbiAgY29uc3QgYWRkSXRlbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0l0ZW1zID0ge1xyXG4gICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6ICcnLFxyXG4gICAgICAgIGl0ZW1OYW1lOiAnJyxcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfVxyXG4gICAgU2V0SXRlbXMoWy4uLml0ZW1zLCBuZXdJdGVtc10pXHJcbiAgfTtcclxuICBjb25zdCBhZGRJdGVtUm93ID0gKGkpID0+IHtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogXCJcIixcclxuICAgICAgICBpdGVtTmFtZTogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgIGl0ZW1Db3N0OiAwLFxyXG4gICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgIGl0ZW1CdXk6IDAsXHJcbiAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgIHRvdGFsR2VuZXJhbGU6IDAsXHJcbiAgICAgIHRvdGFsQ29zdDogMCxcclxuICAgICAgc3RvY2s6IDAsXHJcbiAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGUgPSBbLi4uaXRlbXNdO1xyXG4gICAgdXBkYXRlLnNwbGljZShpICsgMSwgMCwgbmV3SXRlbSk7XHJcbiAgICBTZXRJdGVtcyh1cGRhdGUpXHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1XaGl0ZVJvdyA9IChpKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICBuZXdEZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZSA9IFsuLi5pdGVtc107XHJcbiAgICB1cGRhdGUuc3BsaWNlKGkgKyAxLCAwLCBuZXdJdGVtKTtcclxuICAgIFNldEl0ZW1zKHVwZGF0ZSlcclxuICB9XHJcbiAgY29uc3QgYWRkSXRlbVdoaXRlID0gKCkgPT4ge1xyXG4gICAgU2V0SXRlbXMoWy4uLml0ZW1zLCB7XHJcbiAgICAgIG5ld0Rlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IFwiXCIsXHJcbiAgICAgICAgaXRlbU5hbWU6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQW1vdW50OiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBjb250ZW50VHlwZTogbnVsbCxcclxuICAgIH1dKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChyZXN1bHQpID0+IHtcclxuICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0l0ZW1zID0gWy4uLml0ZW1zXTtcclxuICAgIGNvbnN0IFtyZW1vdmVkXSA9IG5ld0l0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcclxuICAgIG5ld0l0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlbW92ZWQpO1xyXG4gICAgU2V0SXRlbXMobmV3SXRlbXMpXHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJdGVtID0gKGlkUm93LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gbmV3VmFsdWVcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgICBpdGVtTmFtZTogc2VsZWN0ZWRPcHRpb25zPy5pdGVtTmFtZSxcclxuICAgICAgfSxcclxuICAgICAgZGF0YTogc2VsZWN0ZWRPcHRpb25zPy5kYXRhLFxyXG4gICAgICBjb250ZW50VHlwZTogc2VsZWN0ZWRPcHRpb25zPy5jb250ZW50VHlwZSxcclxuICAgICAgaXRlbUNvc3Q6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbUNvc3RQcmljZSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgaXRlbVJhdGU6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgc3RvY2s6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbVF1YW50aXR5LFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBpZFJvdykgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLml0ZW1zXTtcclxuICAgIGNvbnN0IGkgPSBpdGVtcy5maW5kSW5kZXgoSXRlbSA9PiBJdGVtLmlkUm93ID09PSBpZFJvdylcclxuICAgIGxpc3RbaV1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtUmF0ZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWyd0b3RhbENvc3QnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1RdHknXSAqIGxpc3RbaV1bJ2l0ZW1Db3N0J10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2Rpc2NvdW50J10gPSBsaXN0W2ldWyd0b3RhbEFtb3VudCddICogbGlzdFtpXVsnaXRlbURpc2NvdW50J107XHJcbiAgICBsaXN0W2ldWydwZXJjZW50YWdlJ10gPSBsaXN0W2ldWydkaXNjb3VudCddIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnaXRlbUFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsndG90YWxBbW91bnQnXSAtIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxHZW5lcmFsZSddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbUNvc3QnXSAqIGxpc3RbaV1bJ2l0ZW1CdXknXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgU2V0SXRlbXMobGlzdCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDRU8gPSAoZSwgaWRSb3cpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pdGVtc107XHJcbiAgICBjb25zdCBpID0gaXRlbXMuZmluZEluZGV4KEl0ZW0gPT4gSXRlbS5pZFJvdyA9PT0gaWRSb3cpXHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWU7XHJcbiAgICBsaXN0W2ldWyd0b3RhbEFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbVJhdGUnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxDb3N0J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtQ29zdCddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWydkaXNjb3VudCddID0gbGlzdFtpXVsndG90YWxBbW91bnQnXSAqIGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddO1xyXG4gICAgbGlzdFtpXVsncGVyY2VudGFnZSddID0gbGlzdFtpXVsnZGlzY291bnQnXSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2l0ZW1BbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gLSBsaXN0W2ldWydwZXJjZW50YWdlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsR2VuZXJhbGUnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1Db3N0J10gKiBsaXN0W2ldWydpdGVtQnV5J10pICogMTAwKSAvIDEwMDtcclxuICAgIFNldEl0ZW1zKGxpc3QpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDdXN0b21lciA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gY3VzdG9tZXIuZmluZCgob3B0aW9uKSA9PiBvcHRpb24gPT09IG5ld1ZhbHVlKVxyXG4gICAgc2V0Q3VzdG9tZXJOYW1lKHtcclxuICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgY3VzdG9tZXJOYW1lOiBzZWxlY3RlZE9wdGlvbnM/LkN1c3RvbWVyLFxyXG4gICAgICBiaWxsaW5nQWRkcmVzczogc2VsZWN0ZWRPcHRpb25zPy5iaWxsaW5nQWRkcmVzcyxcclxuICAgICAgYmlsbGluZ0NpdHk6IHNlbGVjdGVkT3B0aW9ucz8uYmlsbGluZ0NpdHlcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbGVhckN1c3RvbWVyID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VzdG9tZXJOYW1lKG51bGwpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRvdGFsSW52b2ljZSkge1xyXG4gICAgICBjb25zdCB3aG9sZVBhcnQgPSBNYXRoLmZsb29yKHRvdGFsSW52b2ljZSlcclxuICAgICAgY29uc3QgZnJhY3Rpb25hbFBhcnQgPSAodG90YWxJbnZvaWNlICUgMSkudG9GaXhlZCgyKS5zcGxpdCgnLicpWzFdO1xyXG4gICAgICBjb25zdCB3aG9sZVdvcmRzID0gbnVtYmVyVG9Xb3Jkcy50b1dvcmRzKHdob2xlUGFydClcclxuICAgICAgY29uc3QgZnJhY3Rpb25hbFdvcmRzID0gbnVtYmVyVG9Xb3Jkcy50b1dvcmRzKGZyYWN0aW9uYWxQYXJ0KVxyXG4gICAgICBzZXRUb3RhbFcoYCR7d2hvbGVXb3Jkc30gYW5kICR7ZnJhY3Rpb25hbFdvcmRzfSBjZW50c2ApXHJcbiAgICB9XHJcbiAgfSwgW3RvdGFsSW52b2ljZV0pXHJcbiAgY29uc3QgW29wZW4xLCBzZXRPcGVuMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwZGF0ZUlkSXRlbVJvdywgc2V0VXBkYXRlSWRJdGVtUm93XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3N0b2NrT25IYW5kLCBzZXRTdG9ja09uSGFuZF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdDEgPSBpdGVtcy5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyAocGFyc2VGbG9hdChyb3cuaXRlbUFtb3VudCkgfHwgMCksIDApXHJcbiAgICBjb25zdCB2YWwgPSBpc0Zpbml0ZShyZXN1bHQxKSA/IHJlc3VsdDEgOiAwO1xyXG4gICAgc2V0U3ViVG90YWwodmFsLnRvRml4ZWQoMikpXHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXRlZFRheCA9IENoZWNrVHZBID8gTWF0aC5yb3VuZCgoTnVtYmVyKHZhbCkgKiBUQVhfUkFURSkgKiAxMDApIC8gMTAwIDogMDtcclxuICAgIHNldFRheChjYWxjdWxhdGVkVGF4KTtcclxuXHJcbiAgICBsZXQgbmV3VG90YWwgPSBNYXRoLnJvdW5kKChOdW1iZXIodmFsKSArIE51bWJlcihjYWxjdWxhdGVkVGF4KSArIE51bWJlcihzaGlwcGluZykgKyBOdW1iZXIoYWRqdXN0bWVudE51bWJlcikpICogMTAwKSAvIDEwMFxyXG4gICAgc2V0VG90YWxJbnZvaWNlKG5ld1RvdGFsKVxyXG5cclxuICAgIGxldCBuZXdCYWxhbmNlID0gTWF0aC5yb3VuZCgobmV3VG90YWwgLSB0b3RhbCkgKiAxMDApIC8gMTAwXHJcbiAgICBzZXRCYWxhbmNlRHVlKG5ld0JhbGFuY2UpXHJcbiAgfSwgW2l0ZW1zLCBDaGVja1R2QSwgc2hpcHBpbmcsIGFkanVzdG1lbnROdW1iZXIsIHRvdGFsXSk7XHJcblxyXG4gIGNvbnN0IFtvcGVuMiwgc2V0T3BlbjJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuVXBkYXRlUmVhc29uID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbjIodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZVJlYXNvbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4yKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IFtvcGVuQmFjaywgc2V0T3BlbkJhY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuQmFjayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5CYWNrKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VCYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkJhY2soZmFsc2UpO1xyXG4gIH07XHJcbiAgey8qKiBMb2FkaW5nIFN0YXJ0ICovIH1cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nVXBkYXRlSXRlbU9wZW5Nb2RhbCwgc2V0TG9hZGluZ1VwZGF0ZUl0ZW1PcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldE9wZW4yKGZhbHNlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZUl0ZW0gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgICBzZXRMb2FkaW5nVXBkYXRlSXRlbU9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbjIoZmFsc2UpO1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIG5hdmlnYXRlKC0xKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGVJdGVtID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gICAgc2V0TG9hZGluZ1VwZGF0ZUl0ZW1PcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgc2V0SXRlbU5ld1F0eSgwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuICB7LyoqIExvYWRpbmcgRW5kICovIH1cclxuICB7LyoqIGl0ZW0gc3RhcnQgKi8gfVxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGUgPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBudWxsLFxyXG4gICAgICAgIGl0ZW1OYW1lOiByb3cuaXRlbU5hbWUuaXRlbU5hbWVcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQW1vdW50OiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbiA9IChpZFJvdykgPT4ge1xyXG4gICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBpdGVtTmFtZTogJ2VtcHR5J1xyXG4gICAgICB9LFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IFtvcGVuSXRlbVVwZGF0ZSwgc2V0T3Blbkl0ZW1VcGRhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpZEl0ZW0sIHNldElkSXRlbV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuSXRlbVVwZGF0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgc2V0T3Blbkl0ZW1VcGRhdGUodHJ1ZSk7XHJcbiAgICBzZXRJZEl0ZW0oaWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlSXRlbVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldE9wZW5JdGVtVXBkYXRlKGZhbHNlKTtcclxuICAgIGlmIChpZEl0ZW0pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2lkSXRlbX1gKVxyXG4gICAgICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaXRlbU5hbWU/Ll9pZCA9PT0gcmVzLmRhdGEuZGF0YS5faWQgPyB7XHJcbiAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgICAgICBfaWQ6IHJlcy5kYXRhLmRhdGEuX2lkLFxyXG4gICAgICAgICAgICBpdGVtTmFtZTogcmVzLmRhdGEuZGF0YS5pdGVtTmFtZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogcmVzLmRhdGEuZGF0YS5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBpdGVtQ29zdDogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgaXRlbVJhdGU6IHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICAgIHN0b2NrOiByZXMuZGF0YS5kYXRhLml0ZW1RdWFudGl0eSxcclxuICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLmRhdGEuZGF0YSxcclxuICAgICAgICAgIGNvbnRlbnRUeXBlOiByZXMuZGF0YS5kYXRhLmNvbnRlbnRUeXBlLFxyXG4gICAgICAgICAgdG90YWxBbW91bnQ6IHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgZGlzY291bnQ6IChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50LFxyXG4gICAgICAgICAgcGVyY2VudGFnZTogKChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50KSAvIDEwMCxcclxuICAgICAgICAgIGl0ZW1BbW91bnQ6IChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgLSAoKChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50KSAvIDEwMCksXHJcbiAgICAgICAgICB0b3RhbENvc3Q6IHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgdG90YWxHZW5lcmFsZTogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlICogcm93Lml0ZW1CdXlcclxuICAgICAgICB9IDogcm93KSlcclxuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICB7LyoqIGl0ZW0gRW5kICovIH1cclxuXHJcbiAgey8qKiBEZWxldGUgUm93ICYmIFVwZGF0ZSBJdGVtIFN0YXJ0ICovIH1cclxuICBjb25zdCBkZWxldGVJdGVtID0gYXN5bmMgKGlkUm93KSA9PiB7XHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5maWx0ZXIoKEl0ZW0pID0+IEl0ZW0uaWRSb3cgIT09IGlkUm93KSk7XHJcbiAgfTtcclxuICBjb25zdCBmaWx0ZXJJdGVtSW5mb3JtYXRpb24gPSBJdGVtSW5mb3JtYXRpb24uZmlsdGVyKG9wdGlvbiA9PiAhaXRlbXMuZmluZCgocm93KSA9PiBvcHRpb24uX2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCAmJiBvcHRpb24udHlwZUl0ZW0gPT09IFwiR29vZHNcIikpXHJcbiAgey8qKiBEZWxldGUgUm93ICYmIFVwZGF0ZSBJdGVtIEVuZCAqLyB9XHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGRhdGVDb21tZW50ID0gbmV3IERhdGUoKVxyXG4gIGNvbnN0IFtoaWRlQmFjaywgc2V0SGlkZUJhY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUNvbW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IGlkLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgTW9kaWZ5IFFVT1RBVElPTiAnLFxyXG4gICAgICByZWFzb246ICdRLScgKyBTdHJpbmcocXVvdGF0aW9uTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyAnICsgcmVhc29uLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBkYXRlQ29tbWVudFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uL2AsIGRhdGEpXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRFZGl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGl0ZW1zV2l0aG91dERhdGEgPSBpdGVtcy5tYXAoKHsgZGF0YSwgY29udGVudFR5cGUsIC4uLnJlc3QgfSkgPT4gcmVzdCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBjdXN0b21lck5hbWUsXHJcbiAgICAgIGVzdGltYXRlTnVtYmVyOiBxdW90YXRpb25OdW1iZXIsXHJcbiAgICAgIGVzdGltYXRlU3ViamVjdCwgZXN0aW1hdGVEZWZlY3QsXHJcbiAgICAgIGl0ZW1zOiBpdGVtc1dpdGhvdXREYXRhLCBzdWJUb3RhbCwgdG90YWwsIHRvdGFsVywgbm90ZSwgc2hpcHBpbmcsIGFkanVzdG1lbnQsIGFkanVzdG1lbnROdW1iZXIsIHRvdGFsSW52b2ljZSwgdGVybXMsIG5vdGVJbmZvLCBiYWxhbmNlRHVlLCB0YXgsIENoZWNrVHZBLCB1cGRhdGVTOiBmYWxzZSxcclxuICAgICAgaW5jbHVkZUxldHRlciwgYXR0YWNoZWRMZXR0ZXJcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtZXN0aW1hdGlvbi8ke2lkfWAsIGRhdGEpXHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBoYW5kbGVDcmVhdGVDb21tZW50KCk7XHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzZWFyY2gyLCBzZXRTZWFyY2gyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2gyID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgIHNldFNlYXJjaDIodmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IG5ld0FycmF5MiA9IHNlYXJjaDIgIT09ICcnID8gaXRlbXMuZmlsdGVyKChJdGVtKSA9PlxyXG4gICAgSXRlbS5pdGVtTmFtZSAmJiBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoMi50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgSXRlbS5pdGVtRGVzY3JpcHRpb24gJiYgSXRlbS5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICYmIEl0ZW0ubmV3RGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpXHJcbiAgKSA6IGl0ZW1zXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBVUERBVEUgUVVPVEFUSU9OXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAge2hpZGVCYWNrID09PSAndHJ1ZScgPyAoXHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQmFja30+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaDEgLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiA0IH19PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPcGVuVXBkYXRlUmVhc29ufT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgcGFkZGluZzogJzEwcHgnIH19IGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjdXN0b21lck5hbWUgIT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PVwidG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGVhckN1c3RvbWVyfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2N1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uQ3VzdG9tZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlQ3VzdG9tZXIobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJDdXN0b21lciBOYW1lXCIgcmVxdWlyZWQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJlc3RpbWF0ZU51bWJlclwiPlF1b3RhdGlvbiBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVzdGltYXRlTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlF1b3RhdGlvbiBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdW90YXRpb25OdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdW90YXRpb25OdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlEtMDA8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXN0aW1hdGVEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoZXN0aW1hdGVEYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0RXN0aW1hdGVEYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJERC9NTS9ZWVlZXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlc3RpbWF0ZURlZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlc3RpbWF0ZURlZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVmZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VzdGltYXRlRGVmZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVzdGltYXRlRGVmZWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlc3RpbWF0ZVN1YmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXN0aW1hdGVTdWJqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdWJqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VzdGltYXRlU3ViamVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFc3RpbWF0ZVN1YmplY3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vdGVJbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vdGVJbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlSW5mbyAhPT0gdW5kZWZpbmVkID8gbm90ZUluZm8gOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlSW5mbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2gyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2gyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6IDEsIGZsb2F0OiAncmlnaHQnLCByaWdodDogJy01cHgnLCB0b3A6ICc0MDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkIGNsYXNzTmFtZT1cImJ0bjFcIiBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkFkZFwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbVdoaXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9XCJidG4xXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsIGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiSVRFTSBMSVNUXCIgcGxhY2VtZW50PVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlU2hvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImJ0bjFcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJywgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlSW5mbzEwXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJy0yMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdG9jay1BPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGlzY291bnQgJTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGlkPVwiZHJvcHBhYmxlXCIgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld0FycmF5Mi5tYXAoKEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17SXRlbS5pZFJvd30gZHJhZ2dhYmxlSWQ9e2Bkcm9wcGFibGUke0l0ZW0uaWRSb3d9YH0gaW5kZXg9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0l0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0luZGljYXRvclJvdW5kZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV3RGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuZXdEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5uZXdEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdJbmRpY2F0b3JSb3VuZGVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBoZWlnaHQ6ICcxMDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0l0ZW0uaXRlbU5hbWUuX2lkIHx8IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPT09ICdlbXB0eScgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnMTVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UaHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JZD17SXRlbS5pdGVtTmFtZT8uX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbERhdGE9e0l0ZW0uZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUeXBlPXtJdGVtLmNvbnRlbnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPT09ICdlbXB0eScgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgZm9udFNpemU6ICcyM3B4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUudG9VcHBlckNhc2UoKSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaXRlbURlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpdGVtRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICczNTBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGUoSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0l0ZW0uaXRlbU5hbWUuX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJFZGl0XCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlT3Blbkl0ZW1VcGRhdGUoSXRlbS5pdGVtTmFtZS5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVySXRlbUluZm9ybWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLnByb3BzfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjJmMmYyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIG11bHRpbGluZSByb3dzPXs0fSB7Li4ucGFyYW1zfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUobmV3SW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucywgeyBpbnB1dFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1CcmFuZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbURlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZUl0ZW0oSXRlbS5pZFJvdywgbmV3VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFwZXJDb21wb25lbnQ9eyh7IGNoaWxkcmVuLCAuLi5vdGhlciB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5vdGhlcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBsZWZ0OiAnMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMihlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5DdXN0b21lcjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERCBORVcgSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NzBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZURlc2NyaXB0aW9uKEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0b2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLnN0b2NrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaXRlbVF0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIml0ZW1RdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIml0ZW1SYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaXRlbVJhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVJhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpdGVtRGlzY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpdGVtRGlzY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbURpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxIHRvIDUgJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPVwiYW1vdW50VG90YWxJbnZvaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0l0ZW0uaXRlbUFtb3VudC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlSW5mbzEwXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJy0yMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdG9jay1BPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGlzY291bnQgJTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGlkPVwiZHJvcHBhYmxlXCIgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld0FycmF5Mi5tYXAoKEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17SXRlbS5pZFJvd30gZHJhZ2dhYmxlSWQ9e2Bkcm9wcGFibGUke0l0ZW0uaWRSb3d9YH0gaW5kZXg9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0l0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0luZGljYXRvclJvdW5kZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV3RGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuZXdEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5uZXdEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJOZXctUm93XCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW1Sb3coaSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJCbGFuay1Sb3dcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gYWRkSXRlbVdoaXRlUm93KGkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0luZGljYXRvclJvdW5kZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGhlaWdodDogJzEwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7SXRlbS5pdGVtTmFtZS5faWQgfHwgSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAnMzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtVGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkPXtJdGVtLml0ZW1OYW1lPy5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbERhdGE9e0l0ZW0uZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVHlwZT17SXRlbS5jb250ZW50VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXtJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgZm9udFNpemU6ICcyM3B4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZS50b1VwcGVyQ2FzZSgpIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpdGVtRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpdGVtRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICczMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PVwidG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93QXV0b2NvbXBsZXRlKEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtJdGVtLml0ZW1OYW1lLl9pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiRWRpdFwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5JdGVtVXBkYXRlKEl0ZW0uaXRlbU5hbWUuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlckl0ZW1JbmZvcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLml0ZW1OYW1lICsgJy8nICsgb3B0aW9uLml0ZW1CcmFuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5wcm9wc30+e29wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBtdWx0aWxpbmUgcm93cz17NH0gey4uLnBhcmFtc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50LCBuZXdJbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMsIHsgaW5wdXRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtQnJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VJdGVtKEl0ZW0uaWRSb3csIG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgbGVmdDogJzAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuQ3VzdG9tZXI3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNDcwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PVwidG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbihJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5zdG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIml0ZW1RdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpdGVtUXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1RdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpdGVtUmF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIml0ZW1SYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1SYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaXRlbURpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaXRlbURpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMSB0byA1ICVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD1cImFtb3VudFRvdGFsSW52b2ljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoTnVtYmVyKEl0ZW0uaXRlbUFtb3VudCkgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJOZXctUm93XCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW1Sb3coaSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJCbGFuay1Sb3dcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gYWRkSXRlbVdoaXRlUm93KGkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm90ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlF1b3RlIE5vdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm90ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc1MCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpcnN0VGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlN1Yi1Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdWJUb3RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdWJUb3RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJUb3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+VFZBIEAgMTYlIDxDaGVja2JveCBjaGVja2VkPXtDaGVja1R2QX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVja1R2QShlLnRhcmdldC5jaGVja2VkKX0gLz48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGF4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRheFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvdGFsSW52b2ljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3RhbEludm9pY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWxJbnZvaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5CYWxhbmNlIER1ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYWxhbmNlRHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhbGFuY2VEdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFsYW5jZUR1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlRvdGFsIEluIFdvcmRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3RhbFdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b3RhbFdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsV31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IG10OiAyLCBtYjogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGZsZXhJdGVtIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT4gQ09WRVIgTEVUVEVSIChPcHRpb25hbCkgPC9EaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2luY2x1ZGVMZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEluY2x1ZGVMZXR0ZXIoZS50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBjb2xvcjogJyMzMDM2OGEnLCAnJi5NdWktY2hlY2tlZCc6IHsgY29sb3I6ICcjMzAzNjhhJyB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBjb2xvcjogJyMzMDM2OGEnIH19PkF0dGFjaCBQcm9mZXNzaW9uYWwgQ292ZXIgTGV0dGVyIHRvIHRoaXMgUXVvdGF0aW9uPC9UeXBvZ3JhcGh5Pn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmNsdWRlTGV0dGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdhdHRhY2hlZExldHRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhdHRhY2hlZExldHRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthdHRhY2hlZExldHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ292ZXIgTGV0dGVyIENvbnRlbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBdHRhY2hlZExldHRlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBhIHByb2Zlc3Npb25hbCBpbnRyb2R1Y3Rpb24gZm9yIHlvdXIgcXVvdGF0aW9uLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZXJtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZXJtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGVybXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUXVvdGUgVGVybXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRlcm1zKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc2MCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0bkN1c3RvbWVyNlwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkJhY2t9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VCYWNrfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD1cImxlZnRcIj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCBVcGRhdGluZyBRdW90YXRpb24gPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxyXG4gICAgICAgICAgICAgICAgICBOb3RlIDpcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiPiBJZiB5b3Ugc3RvcCB1cGRhdGluZyB3aXRob3V0IHNhdmluZywgYWxsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL0VzdGltYXRlVmlld0FkbWluJyl9IGNsYXNzTmFtZT1cImJ0bkN1c3RvbWVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIFllc1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gY2xhc3NOYW1lPVwiYnRuQ3VzdG9tZXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgTm9cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuMn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVwZGF0ZVJlYXNvbn1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlUmVhc29ufSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgUmVhc29uIE9mIFVwZGF0aW5nXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0RWRpdH0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJyZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmVhc29uXCJcclxuICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuQ3VzdG9tZXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNsYXNzTmFtZT1cImJ0bkN1c3RvbWVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyoqIFNpZGUgU2hvcCBEcmF3ZXIgKi99XHJcbiAgICAgIDxTaWRlRHJhd2VyXHJcbiAgICAgICAgYW5jaG9yPVwicmlnaHRcIlxyXG4gICAgICAgIG9wZW49e3Nob3BPcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e3RvZ2dsZVNob3B9XHJcbiAgICAgICAgUGFwZXJQcm9wcz17e1xyXG4gICAgICAgICAgc3g6IHsgd2lkdGg6ICc1MDBweCcsIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjUnLCBwYWRkaW5nOiAnMjBweCcgfSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYj17Mn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgU2VsZWN0IEl0ZW0gZnJvbSBTaG9wXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaG9wfT5cclxuICAgICAgICAgICAgPENsb3NlIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWI9ezJ9PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2ggU2hvcFwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzaG9wU2VhcmNofVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2hvcFNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZWZyZXNoU2hvcH0gY29sb3I9XCJwcmltYXJ5XCIgc3g9e3sgbWw6IDEgfX0+XHJcbiAgICAgICAgICAgIDxSZWZyZXNoIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIHtzaG9wTG9hZGluZyA/IChcclxuICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgb3ZlcmZsb3dZOiAnYXV0bycsIG1heEhlaWdodDogJ2NhbGMoMTAwdmggLSAxODBweCknIH19PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIHtzaG9wSXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17YGRhdGE6JHtpdGVtLmNvbnRlbnRUeXBlfTtiYXNlNjQsJHtpdGVtLmRhdGF9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLml0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBvYmplY3RGaXQ6ICdjb250YWluJywgcGFkZGluZzogJzVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZmxleEdyb3c6IDEsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLml0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBGQyB7KGl0ZW0uaXRlbVNlbGxpbmdQcmljZSAqIHJhdGUpPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJwcmltYXJ5XCIgZm9udFdlaWdodD1cImJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAkIHtpdGVtLml0ZW1TZWxsaW5nUHJpY2U/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGRpc3BsYXk9XCJibG9ja1wiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9jazoge2l0ZW0uaXRlbVF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvRXN0aW1hdGVVcGRhdGUoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiAnNXB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG10PXsyfT5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgY291bnQ9e3Nob3BUb3RhbFBhZ2VzfVxyXG4gICAgICAgICAgICAgICAgcGFnZT17c2hvcFBhZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2hvcFBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2lkZURyYXdlcj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBGYWlsZWQgdG8gU2F2ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQ3VzdG9tZXJcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdVcGRhdGVJdGVtT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVXBkYXRlSXRlbX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgVXBkYXRlIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5DdXN0b21lclwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlSXRlbX0+XHJcbiAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2MDBweCcsIHBhZGRpbmc6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICA8SXRlbUZvcm1WaWV3MiBvbkNyZWF0ZU9wdGlvbj17aGFuZGxlQ3JlYXRlSXRlbX0gb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuSXRlbVVwZGF0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUl0ZW1VcGRhdGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlSXRlbVVwZGF0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzYwMHB4JywgcGFkZGluZzogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgIDxJdGVtVXBkYXRlVmlldzIgb25DbG9zZT17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfSBpZD17aWRJdGVtfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2RpdiA+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFc3RpbWF0ZUludm9pY2VGb3JtVXBkYXRlXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uL2FwaUNvbmZpZyc7XG5cbmNvbnN0IEl0ZW1UaHVtYm5haWwgPSAoeyBpdGVtSWQsIGluaXRpYWxEYXRhLCBpbml0aWFsVHlwZSB9KSA9PiB7XG4gIGNvbnN0IFtzcmMsIHNldFNyY10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoSW1hZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAvLyAxLiBDaGVjayBmb3IgaW5pdGlhbERhdGEgKHBhc3NlZCBmcm9tIHNlYXJjaC9zaG9wKVxuICAgICAgaWYgKGluaXRpYWxEYXRhICYmIGluaXRpYWxUeXBlICYmIGluaXRpYWxEYXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGluaXRpYWxUeXBlICE9PSBcInVuZGVmaW5lZFwiICYmIGluaXRpYWxEYXRhICE9PSBcIm51bGxcIikge1xuICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxEYXRhID09PSAnc3RyaW5nJyAmJiBpbml0aWFsRGF0YS5sZW5ndGggPiA1MCkge1xuICAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGFscmVhZHkgYSBkYXRhIFVSTFxuICAgICAgICAgICBpZiAoaW5pdGlhbERhdGEuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgICBzZXRTcmMoaW5pdGlhbERhdGEpO1xuICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRTcmMoYGRhdGE6JHtpbml0aWFsVHlwZX07YmFzZTY0LCR7aW5pdGlhbERhdGF9YCk7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxEYXRhLmRhdGEpIHtcbiAgICAgICAgICAgLy8gSGFuZGxlIGJ1ZmZlciBvYmplY3QgaWYgaXQncyBub3QgY29udmVydGVkIHRvIHN0cmluZyB5ZXRcbiAgICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoaW5pdGlhbERhdGEuZGF0YSk7XG4gICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBpbml0aWFsVHlwZSB9KTtcbiAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHNldFNyYyhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAyLiBGYWxsYmFjayB0byBmZXRjaCBpZiBubyBpbml0aWFsIGRhdGEgb3IgaWYgaXQgd2FzIGludmFsaWRcbiAgICAgIGlmICghaXRlbUlkIHx8IGl0ZW1JZCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBpdGVtSWQgPT09IFwibnVsbFwiKSB7XG4gICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2l0ZW1JZH1gKTtcbiAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEgJiYgcmVzLmRhdGEuZGF0YS5kYXRhKSB7XG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkocmVzLmRhdGEuZGF0YS5kYXRhLmRhdGEpO1xuICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiByZXMuZGF0YS5kYXRhLmNvbnRlbnRUeXBlIH0pO1xuICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHNldFNyYyhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgb25saW5lIGltYWdlOlwiLCBlcnIpO1xuICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaEltYWdlKCk7XG4gIH0sIFtpdGVtSWQsIGluaXRpYWxEYXRhLCBpbml0aWFsVHlwZV0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8QXZhdGFyXG4gICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICBzcmM9e3NyY31cbiAgICAgIHN4PXt7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MCwgYmFja2dyb3VuZENvbG9yOiAnI2YwZjBmMCcsIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyB9fVxuICAgID5cbiAgICAgIHshc3JjICYmIDxTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gc3g9e3sgZm9udFNpemU6IDQwLCBjb2xvcjogJyM5OTknIH19IC8+fVxuICAgIDwvQXZhdGFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVRodW1ibmFpbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3MvU2lkZWJhck5ldy5zY3NzJ1xyXG5pbXBvcnQgeyBPdXRsZXQsIE5hdkxpbmssIExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IERhc2hib2FyZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgUGVybUlkZW50aXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Blcm1JZGVudGl0eSc7XHJcbmltcG9ydCBMaXN0QWx0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xpc3RBbHQnO1xyXG5pbXBvcnQgRGVzY3JpcHRpb25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgUmVjZWlwdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZWNlaXB0JztcclxuaW1wb3J0IE1vdmluZ0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3ZpbmcnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3MnO1xyXG5pbXBvcnQgSW5zZXJ0RHJpdmVGaWxlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0luc2VydERyaXZlRmlsZSc7XHJcbmltcG9ydCBSZXN0b3JlUGFnZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXN0b3JlUGFnZSc7XHJcbmltcG9ydCBSZXF1ZXN0UXVvdGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUmVxdWVzdFF1b3RlJztcclxuaW1wb3J0IE1vbmV0aXphdGlvbk9uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vbmV0aXphdGlvbk9uJztcclxuaW1wb3J0IEVuZ2luZWVyaW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VuZ2luZWVyaW5nJztcclxuaW1wb3J0IHsgRXhwbGljaXQsIFNob3BwaW5nQmFnT3V0bGluZWQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IFJvb21QcmVmZXJlbmNlc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Sb29tUHJlZmVyZW5jZXMnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbUJ1dHRvbiwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQsIG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFBheW1lbnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGF5bWVudCc7XHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3JlVmVydCc7XHJcbmZ1bmN0aW9uIFNpZGViYXJEYXNoMSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8RGFzaGJvYXJkSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhc2hib2FyZFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UGVybUlkZW50aXR5SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkN1c3RvbWVyXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPExpc3RBbHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiU3RvcmVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlcXVlc3RRdW90ZUljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJRdW90YXRpb25cIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEZXNjcmlwdGlvbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbnZvaWNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9uZXRpemF0aW9uT25JY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGF5bWVudFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFNob3BwaW5nQmFnT3V0bGluZWQgLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEYWlseSBFeHBlbnNlc1wiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ICA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxSb29tUHJlZmVyZW5jZXNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHJvamVjdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlY2VpcHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHVyY2hhc2VzIFJlcXVlc3RcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgPEVuZ2luZWVyaW5nSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk1haW50ZW5hbmNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTW9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJEYXNoMSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2gxIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkRlbGV0ZUljb24iLCJCYWNrZHJvcCIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJQYXBlciIsIlRhYmxlQ29udGFpbmVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsIkF1dG9jb21wbGV0ZSIsIk1vZGFsIiwiQm94Iiwic3R5bGVkIiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiRGl2aWRlciIsIkF2YXRhciIsIkNoZWNrYm94IiwiRm9ybUNvbnRyb2xMYWJlbCIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkFkZCIsIkRyYWdJbmRpY2F0b3JSb3VuZGVkIiwiRWRpdCIsIlJlZnJlc2giLCJSZW1vdmVDaXJjbGVPdXRsaW5lIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJ2NCIsIkRlbW9Db250YWluZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIkRhdGVQaWNrZXIiLCJkYXlqcyIsIkFycm93QmFjayIsIlNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiIsIkFkZFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2FkZXIiLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiTG9nb3V0IiwiQ2xvc2UiLCJEcmF3ZXIiLCJTaWRlRHJhd2VyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZE1lZGlhIiwiQnV0dG9uIiwiUGFnaW5hdGlvbiIsIkl0ZW1Gb3JtVmlldzIiLCJJdGVtVXBkYXRlVmlldzIiLCJudW1iZXJUb1dvcmRzIiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJhZ2dhYmxlIiwiRHJvcHBhYmxlIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiSXRlbVRodW1ibmFpbCIsIkxpZ2h0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiQmxhY2tUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJEb3duVG9vbHRpcCIsIl9yZWY1IiwiX2V4Y2x1ZGVkMyIsIl9yZWY2Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJzdHlsZTIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY3Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIl9yZWY4Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiRXN0aW1hdGVJbnZvaWNlRm9ybVVwZGF0ZSIsIl91c2VQYXJhbXMiLCJpZCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY5IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjdXN0b21lck5hbWUiLCJzZXRDdXN0b21lck5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInF1b3RhdGlvbk51bWJlciIsInNldFF1b3RhdGlvbk51bWJlciIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiZXN0aW1hdGVTdGF0dXMiLCJzZXRFc3RpbWF0ZVN0YXR1cyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwiZXN0aW1hdGVEYXRlIiwic2V0RXN0aW1hdGVEYXRlIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwibm90ZUluZm8iLCJzZXROb3RlSW5mbyIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJlc3RpbWF0ZURlZmVjdCIsInNldEVzdGltYXRlRGVmZWN0IiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImVzdGltYXRlU3ViamVjdCIsInNldEVzdGltYXRlU3ViamVjdCIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJpdGVtcyIsIlNldEl0ZW1zIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInN1YlRvdGFsIiwic2V0U3ViVG90YWwiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwidG90YWwiLCJzZXRUb3RhbCIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJzaGlwcGluZyIsInNldFNoaXBwaW5nIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImFkanVzdG1lbnQiLCJzZXRBZGp1c3RtZW50IiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsImFkanVzdG1lbnROdW1iZXIiLCJzZXRBZGp1c3RtZW50TnVtYmVyIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsInRvdGFsSW52b2ljZSIsInNldFRvdGFsSW52b2ljZSIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJiYWxhbmNlRHVlIiwic2V0QmFsYW5jZUR1ZSIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJ0b3RhbFciLCJzZXRUb3RhbFciLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwiQ2hlY2tUdkEiLCJzZXRDaGVja1R2QSIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJ0YXgiLCJzZXRUYXgiLCJUQVhfUkFURSIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJub3RlIiwic2V0Tm90ZSIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJ0ZXJtcyIsInNldFRlcm1zIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsImluY2x1ZGVMZXR0ZXIiLCJzZXRJbmNsdWRlTGV0dGVyIiwiUFJPRkVTU0lPTkFMX0NPVkVSX0xFVFRFUiIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJhdHRhY2hlZExldHRlciIsInNldEF0dGFjaGVkTGV0dGVyIiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsIml0ZW1OZXdRdHkiLCJzZXRJdGVtTmV3UXR5IiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsIkl0ZW1JbmZvcm1hdGlvbiIsInNldEl0ZW1JbmZvcm1hdGlvbiIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJzaG9wT3BlbiIsInNldFNob3BPcGVuIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsInNob3BJdGVtcyIsInNldFNob3BJdGVtcyIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJzaG9wU2VhcmNoIiwic2V0U2hvcFNlYXJjaCIsIl91c2VTdGF0ZTU1IiwiX3VzZVN0YXRlNTYiLCJzaG9wUGFnZSIsInNldFNob3BQYWdlIiwiX3VzZVN0YXRlNTciLCJfdXNlU3RhdGU1OCIsInNob3BUb3RhbFBhZ2VzIiwic2V0U2hvcFRvdGFsUGFnZXMiLCJfdXNlU3RhdGU1OSIsIl91c2VTdGF0ZTYwIiwicmF0ZSIsInNldFJhdGUiLCJfdXNlU3RhdGU2MSIsIl91c2VTdGF0ZTYyIiwic2hvcExvYWRpbmciLCJzZXRTaG9wTG9hZGluZyIsImZldGNoRGF0YSIsIl9yZWYwIiwiX3JlcyRkYXRhIiwiX3JlcyRkYXRhMiIsIl9yZXMkZGF0YTMiLCJfcmVzJGRhdGE0IiwiTnVtYmVyIiwiZXN0aW1hdGVOdW1iZXIiLCJfdXNlU3RhdGU2MyIsIl91c2VTdGF0ZTY0Iiwib3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlQ3JlYXRlSXRlbSIsIm5ld0l0ZW0iLCJmZXRjaEl0ZW0iLCJfcmVmMSIsInJldmVyc2UiLCJyZXNDIiwiZmV0Y2hTaG9wIiwiX3JlZjEwIiwicmVzUmF0ZSIsImZvckVhY2giLCJyb3ciLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0b3RhbFBhZ2VzIiwiZmlsdGVyIiwidHlwZUl0ZW0iLCJoYW5kbGVSZWZyZXNoU2hvcCIsImhhbmRsZVNob3BQYWdlQ2hhbmdlIiwibmV3UGFnZSIsImhhbmRsZVNob3BTZWFyY2hDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvZ2dsZVNob3AiLCJoYW5kbGVBZGRUb0VzdGltYXRlVXBkYXRlIiwic2hvcEl0ZW0iLCJleGlzdGluZ0l0ZW1JbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJpdGVtTmFtZSIsIl9pZCIsInVwZGF0ZWRJdGVtcyIsImN1cnJlbnRJdGVtIiwibmV3UXR5IiwicGFyc2VJbnQiLCJpdGVtUXR5IiwiaXRlbUFtb3VudCIsIk1hdGgiLCJyb3VuZCIsIml0ZW1SYXRlIiwidG90YWxBbW91bnQiLCJkaXNjb3VudCIsIml0ZW1EaXNjb3VudCIsInBlcmNlbnRhZ2UiLCJ0b3RhbENvc3QiLCJpdGVtQ29zdCIsInRvdGFsR2VuZXJhbGUiLCJpdGVtQnV5IiwiaWRSb3ciLCJpdGVtRGVzY3JpcHRpb24iLCJpdGVtU2VsbGluZ1ByaWNlIiwiaXRlbUNvc3RQcmljZSIsIml0ZW1XZWlnaHQiLCJzdG9jayIsIml0ZW1RdWFudGl0eSIsImNvbnRlbnRUeXBlIiwiaXRlbU91dCIsIm5ld0l0ZW1PdXQiLCJhZGRJdGVtIiwibmV3SXRlbXMiLCJhZGRJdGVtUm93IiwiaSIsInVwZGF0ZSIsInNwbGljZSIsImFkZEl0ZW1XaGl0ZVJvdyIsIm5ld0Rlc2NyaXB0aW9uIiwiYWRkSXRlbVdoaXRlIiwiaGFuZGxlRHJhZ0VuZCIsInJlc3VsdCIsImRlc3RpbmF0aW9uIiwiX25ld0l0ZW1zJHNwbGljZSIsInNvdXJjZSIsImluZGV4IiwiX25ld0l0ZW1zJHNwbGljZTIiLCJyZW1vdmVkIiwiaGFuZGxlQ2hhbmdlSXRlbSIsIm5ld1ZhbHVlIiwic2VsZWN0ZWRPcHRpb25zIiwibWFwIiwiaGFuZGxlQ2hhbmdlIiwiX2UkdGFyZ2V0IiwibmFtZSIsImxpc3QiLCJJdGVtIiwiaGFuZGxlQ2hhbmdlQ0VPIiwiX2UkdGFyZ2V0MiIsImhhbmRsZUNoYW5nZUN1c3RvbWVyIiwiZmluZCIsIm9wdGlvbiIsIkN1c3RvbWVyIiwiYmlsbGluZ0FkZHJlc3MiLCJiaWxsaW5nQ2l0eSIsImhhbmRsZUNsZWFyQ3VzdG9tZXIiLCJ3aG9sZVBhcnQiLCJmbG9vciIsImZyYWN0aW9uYWxQYXJ0IiwidG9GaXhlZCIsInNwbGl0Iiwid2hvbGVXb3JkcyIsInRvV29yZHMiLCJmcmFjdGlvbmFsV29yZHMiLCJfdXNlU3RhdGU2NSIsIl91c2VTdGF0ZTY2Iiwib3BlbjEiLCJzZXRPcGVuMSIsIl91c2VTdGF0ZTY3IiwiX3VzZVN0YXRlNjgiLCJ1cGRhdGVJZEl0ZW1Sb3ciLCJzZXRVcGRhdGVJZEl0ZW1Sb3ciLCJfdXNlU3RhdGU2OSIsIl91c2VTdGF0ZTcwIiwic3RvY2tPbkhhbmQiLCJzZXRTdG9ja09uSGFuZCIsInJlc3VsdDEiLCJyZWR1Y2UiLCJzdW0iLCJwYXJzZUZsb2F0IiwidmFsIiwiaXNGaW5pdGUiLCJjYWxjdWxhdGVkVGF4IiwibmV3VG90YWwiLCJuZXdCYWxhbmNlIiwiX3VzZVN0YXRlNzEiLCJfdXNlU3RhdGU3MiIsIm9wZW4yIiwic2V0T3BlbjIiLCJoYW5kbGVPcGVuVXBkYXRlUmVhc29uIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZVVwZGF0ZVJlYXNvbiIsIl91c2VTdGF0ZTczIiwiX3VzZVN0YXRlNzQiLCJvcGVuQmFjayIsInNldE9wZW5CYWNrIiwiaGFuZGxlT3BlbkJhY2siLCJoYW5kbGVDbG9zZUJhY2siLCJfdXNlU3RhdGU3NSIsIl91c2VTdGF0ZTc2IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGU3NyIsIl91c2VTdGF0ZTc4IiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU3OSIsIl91c2VTdGF0ZTgwIiwibG9hZGluZ1VwZGF0ZUl0ZW1PcGVuTW9kYWwiLCJzZXRMb2FkaW5nVXBkYXRlSXRlbU9wZW5Nb2RhbCIsIl91c2VTdGF0ZTgxIiwiX3VzZVN0YXRlODIiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVPcGVuVXBkYXRlSXRlbSIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbG9zZVVwZGF0ZUl0ZW0iLCJoYW5kbGVDbG9zZUVycm9yIiwiaGFuZGxlU2hvd0F1dG9jb21wbGV0ZSIsImhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbiIsIl91c2VTdGF0ZTgzIiwiX3VzZVN0YXRlODQiLCJvcGVuSXRlbVVwZGF0ZSIsInNldE9wZW5JdGVtVXBkYXRlIiwiX3VzZVN0YXRlODUiLCJfdXNlU3RhdGU4NiIsImlkSXRlbSIsInNldElkSXRlbSIsImhhbmRsZU9wZW5JdGVtVXBkYXRlIiwiX3JlZjExIiwiX3giLCJoYW5kbGVDbG9zZUl0ZW1VcGRhdGUiLCJfcmVmMTIiLCJfcm93JGl0ZW1OYW1lIiwiZGVsZXRlSXRlbSIsIl9yZWYxMyIsIl94MiIsImZpbHRlckl0ZW1JbmZvcm1hdGlvbiIsIl9yb3ckaXRlbU5hbWUyIiwiX3VzZVN0YXRlODciLCJfdXNlU3RhdGU4OCIsInJlYXNvbiIsInNldFJlYXNvbiIsImRhdGVDb21tZW50IiwiRGF0ZSIsIl91c2VTdGF0ZTg5IiwiX3VzZVN0YXRlOTAiLCJoaWRlQmFjayIsInNldEhpZGVCYWNrIiwiaGFuZGxlQ3JlYXRlQ29tbWVudCIsIl9yZWYxNCIsImlkSW5mbyIsInBlcnNvbiIsIlN0cmluZyIsInBhZFN0YXJ0IiwiZGF0ZU5vdGlmaWNhdGlvbiIsInBvc3QiLCJsb2ciLCJoYW5kbGVTdWJtaXRFZGl0IiwiX3JlZjE1IiwiaXRlbXNXaXRob3V0RGF0YSIsIl9yZWYxNiIsInJlc3QiLCJfZXhjbHVkZWQ0IiwidXBkYXRlUyIsInB1dCIsIl94MyIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJfdXNlU3RhdGU5MSIsIl91c2VTdGF0ZTkyIiwic2VhcmNoMiIsInNldFNlYXJjaDIiLCJoYW5kbGVTZWFyY2gyIiwibmV3QXJyYXkyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm9uQ2xpY2siLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwicGFkZGluZyIsInhzIiwidGl0bGUiLCJwbGFjZW1lbnQiLCJmbG9hdCIsImRpc2FibGVDbGVhcmFibGUiLCJvcHRpb25zIiwiZ2V0T3B0aW9uTGFiZWwiLCJvbkNoYW5nZSIsInJlbmRlcklucHV0IiwicGFyYW1zIiwibGFiZWwiLCJyZXF1aXJlZCIsImh0bWxGb3IiLCJkaXNhYmxlZCIsInR5cGUiLCJzdGFydEFkb3JubWVudCIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsImRhdGUiLCJmb3JtYXQiLCJtdWx0aWxpbmUiLCJyb3dzIiwidW5kZWZpbmVkIiwicmlnaHQiLCJvbkRyYWdFbmQiLCJkcm9wcGFibGVJZCIsInByb3ZpZGVkIiwic25hcHNob3QiLCJkcm9wcGFibGVQcm9wcyIsInJlZiIsImlubmVyUmVmIiwia2V5IiwiZHJhZ2dhYmxlSWQiLCJfSXRlbSRpdGVtTmFtZSIsImRyYWdnYWJsZVByb3BzIiwiRnJhZ21lbnQiLCJkcmFnSGFuZGxlUHJvcHMiLCJjb2xTcGFuIiwic2l6ZSIsImN1cnNvciIsImdhcCIsIml0ZW1JZCIsImluaXRpYWxEYXRhIiwiaW5pdGlhbFR5cGUiLCJoaWRkZW4iLCJ0b1VwcGVyQ2FzZSIsIml0ZW1CcmFuZCIsInJlbmRlck9wdGlvbiIsIm9uSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5ld0lucHV0VmFsdWUiLCJmaWx0ZXJPcHRpb25zIiwiX3JlZjE3IiwiUGFwZXJDb21wb25lbnQiLCJfcmVmMTgiLCJjaGlsZHJlbiIsIm90aGVyIiwiX2V4Y2x1ZGVkNSIsIm1hcmdpblRvcCIsIm9uTW91c2VEb3duIiwicGxhY2Vob2xkZXIiLCJyZXBsYWNlIiwiX0l0ZW0kaXRlbU5hbWUyIiwiX3JlZjE5IiwiX3JlZjIwIiwiX2V4Y2x1ZGVkNiIsImJvcmRlckJvdHRvbSIsInRleHRBbGlnbiIsImFsaWduIiwiY2hlY2tlZCIsIm1heFJvd3MiLCJtYiIsIm9yaWVudGF0aW9uIiwiZmxleEl0ZW0iLCJmb250V2VpZ2h0IiwiY29udHJvbCIsIm9uQ2xvc2UiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJhbmNob3IiLCJQYXBlclByb3BzIiwiZnVsbFdpZHRoIiwibWwiLCJvdmVyZmxvd1kiLCJtYXhIZWlnaHQiLCJfcmVmMjEiLCJfaXRlbSRpdGVtU2VsbGluZ1ByaWMiLCJmbGV4RGlyZWN0aW9uIiwiaW1hZ2UiLCJhbHQiLCJvYmplY3RGaXQiLCJndXR0ZXJCb3R0b20iLCJjb3VudCIsInBhZ2UiLCJvbkNyZWF0ZU9wdGlvbiIsInNyYyIsInNldFNyYyIsImZldGNoSW1hZ2UiLCJsZW5ndGgiLCJzdGFydHNXaXRoIiwiYnVmZmVyIiwiVWludDhBcnJheSIsImJsb2IiLCJCbG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlYWRBc0RhdGFVUkwiLCJlcnIiLCJib3JkZXIiLCJPdXRsZXQiLCJOYXZMaW5rIiwiTGluayIsInVzZUxvY2F0aW9uIiwiRGFzaGJvYXJkSWNvbiIsIlBlcm1JZGVudGl0eUljb24iLCJMaXN0QWx0SWNvbiIsIkRlc2NyaXB0aW9uSWNvbiIsIlJlY2VpcHRJY29uIiwiTW92aW5nSWNvbiIsIlNldHRpbmdzSWNvbiIsIkluc2VydERyaXZlRmlsZUljb24iLCJSZXN0b3JlUGFnZUljb24iLCJSZXF1ZXN0UXVvdGVJY29uIiwiTW9uZXRpemF0aW9uT25JY29uIiwiRW5naW5lZXJpbmdJY29uIiwiRXhwbGljaXQiLCJTaG9wcGluZ0JhZ091dGxpbmVkIiwiUm9vbVByZWZlcmVuY2VzSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsIlBheW1lbnRJY29uIiwiTW9yZVZlcnRJY29uIiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=