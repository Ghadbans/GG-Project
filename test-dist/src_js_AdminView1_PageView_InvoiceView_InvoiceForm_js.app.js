"use strict";
exports.id = "src_js_AdminView1_PageView_InvoiceView_InvoiceForm_js";
exports.ids = ["src_js_AdminView1_PageView_InvoiceView_InvoiceForm_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/InvoiceView/InvoiceForm.js"
/*!***************************************************************!*\
  !*** ./src/js/AdminView1/PageView/InvoiceView/InvoiceForm.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _component_SidebarDash1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/SidebarDash1 */ "./src/js/component/SidebarDash1.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
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
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Refresh.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../utils/apiCache */ "./src/js/utils/apiCache.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var _component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../../../component/ItemThumbnail */ "./src/js/component/ItemThumbnail.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _dexieDb__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../../../dexieDb */ "./src/js/dexieDb.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["data", "contentType"],
  _excluded4 = ["children"],
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
function InvoiceForm() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_39__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_51__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_51__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_52__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          if (navigator.onLine) {
            try {
              var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
              var Name = res.data.data.employeeName;
              var Role = res.data.data.role;
              dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_52__.setUser)({
                userName: Name,
                role: Role
              }));
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          } else {
            var resLocalInfo = yield _dexieDb__WEBPACK_IMPORTED_MODULE_68__["default"].employeeUserSchema.get({
              _id: storesUserId
            });
            var _Name = resLocalInfo.employeeName;
            var _Role = resLocalInfo.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_52__.setUser)({
              userName: _Name,
              role: _Role
            }));
          }
        } else {
          navigate('/');
        }
      });
      return function fetchUser() {
        return _ref7.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_52__.logOut)());
    navigate('/');
  };
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/create-invoice");
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
    invoiceDueDate = _useState4[0],
    setInvoiceDueDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    invoiceSubject = _useState6[0],
    setInvoiceSubject = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    invoiceDefect = _useState8[0],
    setInvoiceDefect = _useState8[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    invoiceNumber = _useState0[0],
    setInvoiceNumber = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    items = _useState10[0],
    SetItems = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    subTotal = _useState12[0],
    setSubTotal = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    total = _useState14[0],
    setTotal = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    shipping = _useState16[0],
    setShipping = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Adjustment'),
    _useState18 = _slicedToArray(_useState17, 2),
    adjustment = _useState18[0],
    setAdjustment = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    adjustmentNumber = _useState20[0],
    setAdjustmentNumber = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    totalInvoice = _useState22[0],
    setTotalInvoice = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    balanceDue = _useState24[0],
    setBalanceDue = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    totalW = _useState26[0],
    setTotalW = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    ItemInformation = _useState28[0],
    setItemInformation = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Thanks For your Business."),
    _useState30 = _slicedToArray(_useState29, 2),
    note = _useState30[0],
    setNote = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    noteInfo = _useState32[0],
    setNoteInfo = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    shopOpen = _useState34[0],
    setShopOpen = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState36 = _slicedToArray(_useState35, 2),
    shopItems = _useState36[0],
    setShopItems = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState38 = _slicedToArray(_useState37, 2),
    shopSearch = _useState38[0],
    setShopSearch = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState40 = _slicedToArray(_useState39, 2),
    shopPage = _useState40[0],
    setShopPage = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState42 = _slicedToArray(_useState41, 2),
    shopTotalPages = _useState42[0],
    setShopTotalPages = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState44 = _slicedToArray(_useState43, 2),
    rate = _useState44[0],
    setRate = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    shopLoading = _useState46[0],
    setShopLoading = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("ESTIMATES ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED PARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL. "),
    _useState48 = _slicedToArray(_useState47, 2),
    terms = _useState48[0],
    setTerms = _useState48[1];
  var dateComment = new Date();
  var invoiceName = "INV-" + String(invoiceNumber).padStart(6, '0');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        if (navigator.onLine) {
          try {
            var _res$data, _res$data2;
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/get-last-saved-invoice"));
            setInvoiceNumber(parseInt(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.invoiceNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.invoiceNumber) || 0) + 1);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          var offLineCustomer1 = yield _dexieDb__WEBPACK_IMPORTED_MODULE_68__["default"].invoiceSchema.toArray();
          var latest = offLineCustomer1.reduce((max, row) => row.invoiceNumber > max.invoiceNumber ? row : max, offLineCustomer1[0]);
          setInvoiceNumber(parseInt(latest.invoiceNumber) + 1);
        }
      });
      return function fetchlastNumber() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchlastNumber();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchItem = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (navigator.onLine) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/item"));
            setItemInformation(res.data.data.reverse());
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          var offLineCustomer1 = yield _dexieDb__WEBPACK_IMPORTED_MODULE_68__["default"].itemSchema.toArray();
          setItemInformation(offLineCustomer1.reverse());
        }
      });
      return function fetchItem() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchItem();
  }, []);

  // Fetch Shop Items & Rate
  var fetchShop = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* () {
      setShopLoading(true);
      if (navigator.onLine) {
        try {
          var resRate = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/rate"));
          resRate.data.data.forEach(row => setRate(row.rate));
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/item-shop?page=").concat(shopPage, "&limit=20&search=").concat(encodeURIComponent(shopSearch)));
          setShopTotalPages(res.data.totalPages);
          setShopItems(res.data.items.filter(row => row.typeItem === "Goods").reverse());
          setShopLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setShopLoading(false);
        }
      } else {
        var offLineCustomer1 = yield _dexieDb__WEBPACK_IMPORTED_MODULE_68__["default"].itemSchema.toArray();
        setShopItems(offLineCustomer1.filter(row => row.typeItem === "Goods").reverse());
        setShopLoading(false);
        var offLineRate = yield _dexieDb__WEBPACK_IMPORTED_MODULE_68__["default"].rateSchema.toArray();
        offLineRate.forEach(row => setRate(row.rate));
      }
    });
    return function fetchShop() {
      return _ref0.apply(this, arguments);
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
  var handleAddToInvoice = shopItem => {
    // Check if item already exists
    var existingItemIndex = items.findIndex(item => item.itemName._id === shopItem._id);
    if (existingItemIndex !== -1) {
      // Item exists, update quantity
      var updatedItems = [...items];
      var currentItem = updatedItems[existingItemIndex];
      var newQty = parseInt(currentItem.itemQty) + 1;
      if (newQty > currentItem.stock) {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Stock Exceeded!", {
          position: "top-center"
        });
        return;
      }
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
        idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_38__["default"])(),
        itemName: {
          _id: shopItem._id,
          itemName: shopItem.itemName
        },
        data: shopItem.data,
        contentType: shopItem.contentType,
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
        itemOut: 0,
        newItemOut: 0
      };
      SetItems([...items, newItem]);
    }
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
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_38__["default"])(),
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
  var addItemWhite = () => {
    SetItems([...items, {
      newDescription: "",
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_38__["default"])(),
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
  var addItemRow = i => {
    var newItem = {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_38__["default"])(),
      itemName: {
        _id: "",
        itemName: ""
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
    var update = [...items];
    update.splice(i + 1, 0, newItem);
    SetItems(update);
  };
  var addItemWhiteRow = i => {
    var newItem = {
      newDescription: "",
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_38__["default"])(),
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
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    openItemUpdate = _useState50[0],
    setOpenItemUpdate = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState52 = _slicedToArray(_useState51, 2),
    idItem = _useState52[0],
    setIdItem = _useState52[1];
  var handleOpenItemUpdate = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (id) {
      setOpenItemUpdate(true);
      setIdItem(id);
    });
    return function handleOpenItemUpdate(_x) {
      return _ref1.apply(this, arguments);
    };
  }();
  var handleCloseItemUpdate = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      setOpenItemUpdate(false);
      if (idItem) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/get-item/").concat(idItem));
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
      return _ref10.apply(this, arguments);
    };
  }();
  {/** Item InFO End */}
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState54 = _slicedToArray(_useState53, 2),
    customer = _useState54[0],
    setCustomer = _useState54[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCustomer = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        if (navigator.onLine) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/customer"));
            setCustomer(res.data.data.reverse());
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          var offLineCustomer1 = yield _dexieDb__WEBPACK_IMPORTED_MODULE_68__["default"].customerSchema.toArray();
          setCustomer(offLineCustomer1.reverse());
        }
      });
      return function fetchCustomer() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchCustomer();
  }, []);
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState56 = _slicedToArray(_useState55, 2),
    customerName = _useState56[0],
    setCustomerName = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    openAutocomplete1 = _useState58[0],
    setOpenAutocomplete1 = _useState58[1];
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
      customerName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.Customer,
      billingAddress: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingAddress,
      billingCity: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingCity
    });
    if ((selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.paymentTerms) === "Net 3") {
      var currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 3);
      setInvoiceDueDate(currentDate);
    } else if ((selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.paymentTerms) === "Net 10") {
      var _currentDate = new Date();
      _currentDate.setDate(_currentDate.getDate() + 10);
      setInvoiceDueDate(_currentDate);
    } else if ((selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.paymentTerms) === "Net 15") {
      var _currentDate2 = new Date();
      _currentDate2.setDate(_currentDate2.getDate() + 15);
      setInvoiceDueDate(_currentDate2);
    } else if ((selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.paymentTerms) === "Net 20") {
      var _currentDate3 = new Date();
      _currentDate3.setDate(_currentDate3.getDate() + 20);
      setInvoiceDueDate(_currentDate3);
    } else if ((selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.paymentTerms) === "Net 25") {
      var _currentDate4 = new Date();
      _currentDate4.setDate(_currentDate4.getDate() + 25);
      setInvoiceDueDate(_currentDate4);
    } else if ((selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.paymentTerms) === "Due end of the month") {
      var _currentDate5 = new Date();
      _currentDate5.setDate(_currentDate5.getMonth() + 1);
      _currentDate5.setDate(0);
      setInvoiceDueDate(_currentDate5);
    } else if ((selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.paymentTerms) === "Due on Receipt") {
      var _currentDate6 = new Date();
      setInvoiceDueDate(_currentDate6);
    }
  };
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState60 = _slicedToArray(_useState59, 2),
    openAutocomplete2 = _useState60[0],
    setOpenAutocomplete2 = _useState60[1];
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
    var result1 = items.reduce((sum, row) => sum + (parseFloat(row.itemAmount) || 0), 0);
    var val = isFinite(result1) ? result1 : 0;
    setSubTotal(val.toFixed(2));
    var newTotal = Math.round((Number(val) + Number(shipping) + Number(adjustmentNumber)) * 100) / 100;
    setTotalInvoice(newTotal);
    var newBalance = Math.round((newTotal - total) * 100) / 100;
    setBalanceDue(newBalance);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (totalInvoice) {
      var wholePart = Math.floor(totalInvoice);
      var fractionalPart = (totalInvoice % 1).toFixed(2).split('.')[1];
      var wholeWords = number_to_words__WEBPACK_IMPORTED_MODULE_64___default().toWords(wholePart);
      var fractionalWords = number_to_words__WEBPACK_IMPORTED_MODULE_64___default().toWords(fractionalPart);
      setTotalW("".concat(wholeWords, " and ").concat(fractionalWords, " cents"));
    }
  }, [totalInvoice]);
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState62 = _slicedToArray(_useState61, 2),
    open1 = _useState62[0],
    setOpen1 = _useState62[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseBack = () => {
    setOpen1(false);
  };
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState64 = _slicedToArray(_useState63, 2),
    loading = _useState64[0],
    setLoading = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    loadingOpenModal = _useState66[0],
    setLoadingOpenModal = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    loadingOpenModalUpdate = _useState68[0],
    setLoadingOpenModalUpdate = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState70 = _slicedToArray(_useState69, 2),
    ErrorOpenModal = _useState70[0],
    setErrorOpenModal = _useState70[1];
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
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState72 = _slicedToArray(_useState71, 2),
    referenceInfo = _useState72[0],
    setReferenceInfo = _useState72[1];
  var invoicePurchase = '';
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: 'INV-' + String(ReferenceInfoNumber).padStart(6, '0') + ' For ' + customerName.customerName,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2, _x3) {
      return _ref12.apply(this, arguments);
    };
  }();
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState74 = _slicedToArray(_useState73, 2),
    saving = _useState74[0],
    setSaving = _useState74[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var status = '';
      if (total > 0 && total < totalInvoice) {
        status = 'Partially-Paid';
      } else if (parseFloat(total) === parseFloat(totalInvoice) && parseFloat(total) !== 0) {
        status = 'Paid';
      } else {
        status = 'Draft';
      }
      var itemsWithoutData = items.map(_ref14 => {
        var data = _ref14.data,
          contentType = _ref14.contentType,
          rest = _objectWithoutProperties(_ref14, _excluded3);
        return rest;
      });
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_38__["default"])(),
        customerName,
        invoiceNumber,
        invoiceDate,
        invoiceDueDate,
        invoiceSubject,
        invoicePurchase,
        invoiceDefect,
        status,
        items: itemsWithoutData,
        subTotal,
        noteInfo,
        total,
        balanceDue,
        totalW,
        invoiceName,
        note,
        shipping,
        adjustment,
        adjustmentNumber,
        totalInvoice,
        terms,
        synced: false
      };
      if (navigator.onLine) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/create-invoice"), data);
          if (res) {
            (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_45__.invalidateCache)('/invoice');
            setReferenceInfo(res.data.data.invoiceNumber);
            // Open Loading View
            var ReferenceInfo = res.data.data._id;
            var ReferenceInfoNumber = res.data.data.invoiceNumber;
            handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
            //await db.invoiceSchema.add({...res.data.data,_id:res.data.data._id, synced: true })
            handleOpen();
          }
        } catch (error) {
          if (error) {
            setSaving('');
            handleError();
          }
        }
      } else {
        yield _dexieDb__WEBPACK_IMPORTED_MODULE_68__["default"].invoiceSchema.put(data);
        handleOpen();
      }
    });
    return function handleSubmit(_x4) {
      return _ref13.apply(this, arguments);
    };
  }();
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_30__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Add new invoice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_47__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_67__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_66__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_53__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_31__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_28__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash1__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_12__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disableClearable: true,
    options: customer,
    getOptionLabel: option => option.Customer,
    onChange: (e, newValue) => {
      handleChangeCustomer(newValue);
    },
    PaperComponent: _ref15 => {
      var children = _ref15.children,
        other = _objectWithoutProperties(_ref15, _excluded4);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, other, {
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
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], _extends({}, params, {
      label: "Customer Name",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    htmlFor: "invoiceNumber"
  }, "Invoice Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    type: "number",
    id: "invoiceNumber",
    name: "invoiceNumber",
    label: "Invoice Number",
    value: invoiceNumber,
    onChange: e => setInvoiceNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, "INV-")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_42__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_43__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_41__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_44__.DatePicker, {
    required: true,
    name: "invoiceDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_46___default()(invoiceDate),
    onChange: date => setInvoiceDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_42__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_43__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_41__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_44__.DatePicker, {
    required: true,
    name: "invoiceDueDate",
    label: "Due Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_46___default()(invoiceDueDate),
    onChange: date => setInvoiceDueDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "invoiceSubject",
    name: "invoiceSubject",
    label: "Subject",
    value: invoiceSubject,
    onChange: e => setInvoiceSubject(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "invoiceDefect",
    name: "invoiceDefect",
    label: "Defect",
    value: invoiceDefect,
    onChange: e => setInvoiceDefect(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "noteInfo",
    name: "noteInfo",
    multiline: true,
    rows: 3,
    value: noteInfo,
    label: "Note",
    onChange: e => setNoteInfo(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: addItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: addItemWhite
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
    className: "btn1",
    style: {
      backgroundColor: 'gray',
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "ITEM LIST",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: toggleShop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "btn1",
    style: {
      backgroundColor: '#202a5a',
      fontSize: '40px'
    }
  }))))), user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => {
    var _Item$itemName, _Item$itemName2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
        fontSize: 12
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
      title: "Delete",
      sx: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => deleteItem(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_63__["default"], {
      itemId: (_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName._id,
      initialData: Item.data,
      initialType: Item.contentType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      hidden: Item.itemName ? Item.itemName.itemName === 'empty' : '',
      sx: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    }, Item.itemName ? Item.itemName.itemName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      name: "itemDescription",
      id: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      rows: 3,
      onChange: e => handleChangeCEO(e, i),
      size: "small",
      sx: {
        width: '250px',
        backgroundColor: 'white',
        fontSize: 12
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => handleShowAutocomplete(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
      style: {
        color: '#202a5a'
      }
    }))), ((_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2._id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Edit",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => {
        var _Item$itemName3;
        return handleOpenItemUpdate((_Item$itemName3 = Item.itemName) === null || _Item$itemName3 === void 0 ? void 0 : _Item$itemName3._id);
      },
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      disableClearable: true,
      options: filterItemInformation,
      getOptionLabel: option => option.itemName + '/' + option.itemBrand,
      renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, props, {
        sx: {
          backgroundColor: '#f2f2f2'
        }
      }), option.itemName + '/' + option.itemBrand),
      renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], _extends({
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
      PaperComponent: _ref17 => {
        var children = _ref17.children,
          other = _objectWithoutProperties(_ref17, _excluded5);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, other, {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => handleShowAutocompleteDescription(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      disabled: true,
      name: "stock",
      id: "stock",
      value: Item.stock,
      onChange: e => handleChangeCEO(e, i),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      name: "itemQty",
      id: "itemQty",
      onChange: e => handleChangeCEO(e, i),
      size: "small",
      value: Item.itemQty,
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      name: "itemRate",
      id: "itemRate",
      value: Item.itemRate,
      onChange: e => handleChangeCEO(e, i),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
    }, Number(Item.itemAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
      title: "Delete",
      sx: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => deleteItem(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => addItemRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
      style: {
        color: '#202a5a'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Blank-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => addItemWhiteRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
      style: {
        color: 'gray'
      }
    })))))));
  })), provided.placeholder))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => {
    var _Item$itemName4, _Item$itemName5;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
        fontSize: 12
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
      title: "Delete",
      sx: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => deleteItem(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_63__["default"], {
      itemId: (_Item$itemName4 = Item.itemName) === null || _Item$itemName4 === void 0 ? void 0 : _Item$itemName4._id,
      initialData: Item.data,
      initialType: Item.contentType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      hidden: Item.itemName ? Item.itemName.itemName === 'empty' : '',
      sx: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    }, Item.itemName ? Item.itemName.itemName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      name: "itemDescription",
      id: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      rows: 3,
      onChange: e => handleChange(e, i),
      size: "small",
      disabled: true,
      sx: {
        width: '250px',
        backgroundColor: 'white',
        fontSize: 12
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => handleShowAutocomplete(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
      style: {
        color: '#202a5a'
      }
    }))), ((_Item$itemName5 = Item.itemName) === null || _Item$itemName5 === void 0 ? void 0 : _Item$itemName5._id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Edit",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => {
        var _Item$itemName6;
        return handleOpenItemUpdate((_Item$itemName6 = Item.itemName) === null || _Item$itemName6 === void 0 ? void 0 : _Item$itemName6._id);
      },
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      disableClearable: true,
      options: filterItemInformation,
      getOptionLabel: option => option.itemName + '/' + option.itemBrand,
      renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], props, option.itemName + '/' + option.itemBrand),
      renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], _extends({
        multiline: true,
        rows: 4
      }, params, {
        required: true
      })),
      inputValue: inputValue,
      onInputChange: (event, newInputValue) => {
        setInputValue(newInputValue);
      },
      filterOptions: (options, _ref18) => {
        var inputValue = _ref18.inputValue;
        return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
      },
      onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
      size: "small",
      PaperComponent: _ref19 => {
        var children = _ref19.children,
          other = _objectWithoutProperties(_ref19, _excluded6);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, other, {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => handleShowAutocompleteDescription(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      disabled: true,
      name: "stock",
      id: "stock",
      value: Item.stock,
      onChange: e => handleChange(e, i),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      name: "itemQty",
      id: "itemQty",
      onChange: e => handleChange(e, i),
      size: "small",
      value: Item.itemQty,
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      name: "itemRate",
      id: "itemRate",
      value: Item.itemRate,
      disabled: true,
      onChange: e => handleChange(e, i),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      name: "itemDiscount",
      id: "itemDiscount",
      value: Item.itemDiscount,
      onChange: e => handleChange(e, i),
      size: "small",
      placeholder: "1 to 5 %",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "amountTotalInvoice"
    }, Number(Item.itemAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
      title: "Delete",
      sx: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => deleteItem(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => addItemRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
      style: {
        color: '#202a5a'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Blank-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: () => addItemWhiteRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
      style: {
        color: 'gray'
      }
    })))))));
  })), provided.placeholder)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "note",
    name: "note",
    multiline: true,
    rows: 4,
    value: note,
    label: "Invoice Note",
    onChange: e => setNote(e.target.value),
    sx: {
      width: '50%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "firstTable",
    style: {
      borderCollapse: 'collapse',
      width: '100%'
    }
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    disabled: true,
    type: "number",
    id: "subTotal",
    size: "small",
    name: "subTotal",
    value: subTotal,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
  }, "Shipping Fees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "shipping",
    size: "small",
    name: "shipping",
    value: shipping,
    onChange: e => setShipping(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "      ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    name: "adjustment",
    id: "adjustment",
    size: "small",
    value: adjustment,
    onChange: e => setAdjustment(e.target.value),
    sx: {
      width: '250px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "adjustmentNumber",
    size: "small",
    name: "adjustmentNumber",
    value: adjustmentNumber,
    onChange: e => setAdjustmentNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    disabled: true,
    type: "number",
    id: "totalInvoice",
    size: "small",
    name: "totalInvoice",
    value: totalInvoice,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    type: "number",
    id: "balanceDue",
    size: "small",
    name: "balanceDue",
    value: balanceDue,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Total In Words"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    name: "totalW",
    id: "totalW",
    value: totalW,
    multiline: true,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    maxRows: 3
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "terms",
    name: "terms",
    multiline: true,
    rows: 4,
    value: terms,
    label: "Invoice Terms",
    onChange: e => setTerms(e.target.value),
    sx: {
      width: '60%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: open1,
    onClose: handleCloseBack,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, "Do you want to stop creating Invoice ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost")), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate('/InvoiceViewAdmin'),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_50__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_48__["default"], {
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
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    component: "div"
  }, "Select Item from Shop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: toggleShop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    display: "flex",
    alignItems: "center",
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    fullWidth: true,
    label: "Search Shop",
    variant: "outlined",
    size: "small",
    value: shopSearch,
    onChange: handleShopSearchChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleRefreshShop,
    color: "primary",
    sx: {
      ml: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], null))), shopLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_50__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      flexGrow: 1,
      overflowY: 'auto',
      maxHeight: 'calc(100vh - 180px)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    spacing: 2
  }, shopItems.map(item => {
    var _ref20, _item$itemSellingPric;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "subtitle2",
      component: "div"
    }, item.itemName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "body2",
      color: "text.secondary"
    }, "FC ", (_ref20 = item.itemSellingPrice * rate) === null || _ref20 === void 0 ? void 0 : _ref20.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "body2",
      color: "primary",
      fontWeight: "bold"
    }, "$ ", (_item$itemSellingPric = item.itemSellingPrice) === null || _item$itemSellingPric === void 0 ? void 0 : _item$itemSellingPric.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "caption",
      display: "block",
      gutterBottom: true
    }, "Stock: ", item.itemQuantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_58__["default"], {
      variant: "contained",
      size: "small",
      fullWidth: true,
      onClick: () => handleAddToInvoice(item),
      sx: {
        marginTop: '5px'
      }
    }, "Add"))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    display: "flex",
    justifyContent: "center",
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_59__["default"], {
    count: shopTotalPages,
    page: shopPage,
    onChange: handleShopPageChange,
    size: "small",
    color: "primary"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_50__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_49__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_50__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_48__["default"], {
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
    open: openAutocomplete1,
    onClose: handleCloseOpenAutocomplete1,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style2), {}, {
      width: 800
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: handleCloseOpenAutocomplete1,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_60__["default"], {
    onCreateOption: handleCreateCustomer,
    onClose: handleCloseOpenAutocomplete1
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: openAutocomplete2,
    onClose: handleCloseOpenAutocomplete2,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style2), {}, {
      width: 800
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_61__["default"], {
    onCreateOption: handleCreateItem,
    onClose: handleCloseOpenAutocomplete2
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: openItemUpdate,
    onClose: handleCloseItemUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style2), {}, {
      width: 800
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_62__["default"], {
    onClose: handleCloseItemUpdate,
    id: idItem
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvoiceForm);

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

/***/ },

/***/ "./src/js/dexieDb.js"
/*!***************************!*\
  !*** ./src/js/dexieDb.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/import-wrapper.mjs");

var db = new dexie__WEBPACK_IMPORTED_MODULE_0__["default"]('GlobalGate');
db.version(1).stores({
  customerSchema: '++id,Customer,_id,customerType,designation,customerFirstName, customerLastName,customerFullName,companyName,customerEmail,customerCompanyPhone,customerPhone,currency,paymentTerms, billingAddress,billingCity,credit,shippingAddress,shippingCity,customerDescription,synced,updateS',
  supplierSchema: '++id,_id,supplierName,storeName,customerPhone1,customerPhone2,address,description,synced',
  itemSchema: '++id,itemName,_id,itemUpc,typeItem,itemStore,unit,itemDimension,itemWeight,itemCategory,itemManufacturer,itemBrand,itemCostPrice,itemQuantity,itemSellingPrice,itemDescription,stockOnHand,synced,updateS',
  itemSchemaView: '++id,_id',
  dailyExpenseSchema: '++expenseNumber,_id,expenseCategory,accountName,description,expenseDate,amount,employeeName,rate,total,accountNameInfo,reason,Create,synced,updateS',
  dailyExpenseViewSchema: '++expenseNumber,_id',
  hiddenSchema: '++id,_id,idRow,hiddenByCEO',
  itemCodeSchema: '++id,itemCategory,_id,itemCode',
  itemUnitSchema: '++id,itemUnit,_id',
  departmentSchema: '++id,department,_id',
  estimateSchema: '++estimateNumber,_id,customerName,estimateDate,estimateDefect,estimateSubject,status,items,subTotal,total,totalW,note,estimateName,Create,balanceDue,terms,shipping,noteInfo,adjustment,adjustmentNumber,totalInvoice,Ref,ReferenceName,synced,updateS',
  invoiceSchema: '++invoiceNumber,_id,customerName,invoiceDate,invoiceDueDate,invoiceSubject,invoicePurchase,invoiceDefect,status,items,subTotal,ReferenceName,ReferenceName2,total,noteInfo,balanceDue,totalW,actionTaken,invoiceName,Position,note,Create,shipping,adjustment,adjustmentNumber,totalInvoice,terms,Ref,synced,updateS',
  invoiceViewSchema: '++invoiceNumber,_id',
  posSchema: '++factureNumber,_id,customerName,invoiceDate,time,status,items,subTotal,totalFC,totalUSD,rate,Create,balanceDue,note,totalInvoice,synced,updateS',
  paymentSchema: '++paymentNumber,_id,customerName,amount,bankCharge,modes,paymentDate,referenceNumber,description,remaining,Create,PaymentReceivedFC,PaymentReceivedUSD,TotalAmount,synced,updateS',
  projectSchema: '++projectNumber,_id,customerName,projectName,status,phase,description,startDate,visitDate,synced,updateS',
  purchaseSchema: '++purchaseNumber,_id,customerName,noteInfo,estimateDefect,estimateSubject,purchaseName,projectName,description,Position,purchaseDate,status,statusInfo,items,purchaseAmount1,purchaseAmount2,ReferenceName,ReferenceName2,synced,updateS',
  purchaseSchemaView: '++purchaseNumber,_id',
  maintenanceSchema: '++serviceNumber,customerName,_id,action,serviceName,serviceDate,laborQty,totalLaborFeesGenerale,technicianAssign,note,totalLaborFees,laborPercentage,totalDiscount,laborDiscount,visitDate,status,items,itemDescriptionInfo,brand,actionTaken,model,warranty,serialNo,defectDescription,adjustment,adjustmentNumber,totalInvoice,subTotal,Converted,ReferenceName,synced,updateS',
  maintenanceViewSchema: '++serviceNumber,_id',
  employeeSchema: '++employeeId,_id,joinDate,employeeName,employeeAddress,employeeEmail,employeePhone,employeeRole,department,dateOfBirth,Gender,status,statusMarital,identifier,identifierNumber,expireDate,salary,reason1,description,bankAccountNumber,bankName,other,bounceAllowances,foodBasic,basicTransport,synced,updateS',
  payRollSchema: '++payNumber,_id,payDate,month,daysW,status,daysOpen,Lops,basicSalary,earningSalary,advancedSalary,basicTransport,transportEarning,transportDeduction,foodBasic,foodEarning,itemLost,foodDeduction,bounceAllowances,bounceAllowancesEarning,other,otherEarning,loan,bonus,totalActualSalary,totalActualEarning,totalActualDeduction,totalNet,totalPaid,rate,totalPaidDollars,words,employeeName,amountPayUSD,amountPayFC,CreditFC,CreditUSD,synced,updateS',
  employeeUserSchema: '_id,employeeName,employeeEmail,role,password,verificationCode,codeExpiration,synced,updateS',
  userAccount: 'idInfo,employeeName,password',
  grantAccessSchema: '++id,employeeName,_id,userID,modules',
  cashSchema: '++cashNumber,_id,cashDate,status,totalCash,amount,totalItemPurchaseUSD,totalPayrollUSD,totalExpensesUSD,totalExpensesFC,totalCashUSD,totalCashFC,returnAmountFC,returnAmountUSD,RemainingAmountFC,RemainingAmountUSD,Create,synced,updateS',
  rateSchema: '++id,_id,rate',
  paymentRateSchema: '++id,_id,paymentRate',
  dailyExpensesCategorySchema: '++id,_id,expensesCategory',
  employeeAttendanceSchema: '++idInfo,_id,id,timeIn,timeOut,name,observation,note,daysWN,synced,updateS',
  itemPurchaseSchema: '++itemPurchaseNumber,_id,itemPurchaseDate,manufacturer,manufacturerNumber,description,note,Create,total,totalFC,items,reason,projectName',
  itemPurchaseViewSchema: '++itemPurchaseNumber,_id',
  itemReturn: '++outNumber,_id,itemOutDate,reason,reference,itemsQtyArray,description,Create,synced,updateS',
  itemReturnView: '++outNumber,_id',
  itemOutSchema: '++idInfo,outNumber,_id,itemOutDate,reason,reference,itemsQtyArray,description,Create,synced,updateS',
  itemOutViewSchema: '++idInfo,_id',
  purchaseOrder: '++outNumber,_id,totalUSD,total,totalFC,itemOutDate,reason,reference,itemsQtyArray,manufacturer,status,Converted,manufacturerNumber,description,IpRelated,synced,updateS',
  purchaseOrderView: '++outNumber,_id',
  planingSchema: '++idInfo,planingDate,employeeName,employeeID,projectName,dayPayUSd,workNumber,status,planingDescription,planingTask',
  rateReturnSchema: '++id, _id, rateR',
  // Cache tables for hybrid architecture (v2.4.0)
  // These store full datasets locally for instant queries
  itemPurchaseCache: '_id, itemPurchaseDate, items, manufacturer',
  itemOutCache: '_id, itemOutDate, itemsQtyArray',
  posCache: '_id, invoiceDate, items, customerName',
  itemReturnCache: '_id, itemOutDate, itemsQtyArray',
  invoiceCache: '_id, invoiceNumber, customerName, invoiceDate, items',
  estimateCache: '_id, estimateNumber, customerName, estimateDate, items',
  customerCache: '_id, customerFullName, companyName, customerEmail',
  supplierCache: '_id, supplierName, storeName',
  projectCache: '_id, projectNumber, projectName, customerName',
  maintenanceCache: '_id, serviceNumber, serviceName, customerName, items',
  employeeCache: '_id, employeeName, employeeEmail, employeeRole, department',
  payrollCache: '_id, payNumber, payDate, month, employeeName',
  rateCache: '_id, rate',
  userCache: '_id, employeeName, role',
  grantAccessCache: '_id, userID, employeeName, modules',
  companyProfileCache: '_id',
  purchaseOrderCache: '_id, outNumber, manufacturer, status',
  paymentCache: '_id, paymentNumber, customerName, paymentDate',
  cashCache: '_id, cashNumber, cashDate, status',
  dailyExpenseCache: '_id, expenseNumber, expenseCategory, expenseDate',
  // Sync metadata
  syncMetadata: '++id, tableName, lastSync, recordCount'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfSW52b2ljZVZpZXdfSW52b2ljZUZvcm1fanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFtRDtBQUNaO0FBQ29CO0FBQ25DO0FBQ0U7QUFDMEI7QUFDc0I7QUFDUjtBQUNkO0FBQ3lLO0FBQzdKO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNRO0FBQ0E7QUFDYztBQUNJO0FBQ3pDO0FBQ2dHO0FBQy9GO0FBQ3FCO0FBQ0c7QUFDaUI7QUFDYTtBQUNoQjtBQUNKO0FBQ0Y7QUFDaEM7QUFDNEI7QUFDMEI7QUFDTTtBQUN4QjtBQUNWO0FBQ0w7QUFDUTtBQUMrQjtBQUN0QztBQUNGO0FBQ3lEO0FBQ3JDO0FBQ1o7QUFDSTtBQUE2RDtBQUM1RTtBQUNpQztBQUN0QjtBQUNRO0FBQzVCO0FBRWxDLElBQU1zRixZQUFZLEdBQUdwRSwwREFBTSxDQUFDcUUsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2hEM0YsMERBQUEsQ0FBQzJCLDhEQUFPLEVBQUFrRSxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU90RSw4REFBYyxDQUFDdUUsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFD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RUFBRSxrREFBa0Q7RUFDckU7RUFDQUMsWUFBWSxFQUFFO0FBQ2xCLENBQUMsQ0FBQztBQUVGLGlFQUFlenBCLEVBQUUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9JbnZvaWNlVmlldy9JbnZvaWNlRm9ybS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9JdGVtVGh1bWJuYWlsLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvY29tcG9uZW50L1NpZGViYXJEYXNoMS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2RleGllRGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgU2lkZWJhckRhc2gxIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEnO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgUGFwZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgc3R5bGVkLCBCb3gsIEF1dG9jb21wbGV0ZSwgTW9kYWwsIEJhY2tkcm9wLCBUYWJsZUNvbnRhaW5lciwgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkLCBEcmFnSW5kaWNhdG9yUm91bmRlZCwgRWRpdCwgUmVmcmVzaCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCB7IGludmFsaWRhdGVDYWNoZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2FwaUNhY2hlJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCBTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TaG9wcGluZ0NhcnRPdXRsaW5lZCc7XHJcbmltcG9ydCBBZGRTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BZGRTaG9wcGluZ0NhcnRPdXRsaW5lZCc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgeyBEcmF3ZXIgYXMgU2lkZURyYXdlciwgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRNZWRpYSwgQnV0dG9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBDdXN0b21lckZvcm1WaWV3MiBmcm9tICcuLi9DdXN0b21lclZJZXcvQ3VzdG9tZXJGb3JtVmlldzInO1xyXG5pbXBvcnQgSXRlbUZvcm1WaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtRm9ybVZpZXcyJztcclxuaW1wb3J0IEl0ZW1VcGRhdGVWaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtVXBkYXRlVmlldzInO2ltcG9ydCBJdGVtVGh1bWJuYWlsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9JdGVtVGh1bWJuYWlsJztcclxuaW1wb3J0IG51bWJlclRvV29yZHMgZnJvbSAnbnVtYmVyLXRvLXdvcmRzJ1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIjtcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi9kZXhpZURiJztcclxuXHJcbmNvbnN0IExpZ2h0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3Qgc3R5bGUyID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogODAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gSW52b2ljZUZvcm0oKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCByZXNMb2NhbEluZm8gPSBhd2FpdCBkYi5lbXBsb3llZVVzZXJTY2hlbWEuZ2V0KHsgX2lkOiBzdG9yZXNVc2VySWQgfSlcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXNMb2NhbEluZm8uZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlc0xvY2FsSW5mby5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcblxyXG4gIGNvbnN0IGFwaVVybCA9IGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLWludm9pY2VgO1xyXG4gIGNvbnN0IFtpbnZvaWNlRGF0ZSwgc2V0SW52b2ljZURhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgY29uc3QgW2ludm9pY2VEdWVEYXRlLCBzZXRJbnZvaWNlRHVlRGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgcmV0dXJuIGRhdGVcclxuICB9KTtcclxuICBjb25zdCBbaW52b2ljZVN1YmplY3QsIHNldEludm9pY2VTdWJqZWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbnZvaWNlRGVmZWN0LCBzZXRJbnZvaWNlRGVmZWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaW52b2ljZU51bWJlciwgc2V0SW52b2ljZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXRlbXMsIFNldEl0ZW1zXSA9IHVzZVN0YXRlKFtcclxuICBdKTtcclxuICBjb25zdCBbc3ViVG90YWwsIHNldFN1YlRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NoaXBwaW5nLCBzZXRTaGlwcGluZ10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWRqdXN0bWVudCwgc2V0QWRqdXN0bWVudF0gPSB1c2VTdGF0ZSgnQWRqdXN0bWVudCcpXHJcbiAgY29uc3QgW2FkanVzdG1lbnROdW1iZXIsIHNldEFkanVzdG1lbnROdW1iZXJdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbdG90YWxJbnZvaWNlLCBzZXRUb3RhbEludm9pY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2JhbGFuY2VEdWUsIHNldEJhbGFuY2VEdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsVywgc2V0VG90YWxXXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtJdGVtSW5mb3JtYXRpb24sIHNldEl0ZW1JbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gdXNlU3RhdGUoXCJUaGFua3MgRm9yIHlvdXIgQnVzaW5lc3MuXCIpO1xyXG4gIGNvbnN0IFtub3RlSW5mbywgc2V0Tm90ZUluZm9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Nob3BPcGVuLCBzZXRTaG9wT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3BJdGVtcywgc2V0U2hvcEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2hvcFNlYXJjaCwgc2V0U2hvcFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Nob3BQYWdlLCBzZXRTaG9wUGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc2hvcFRvdGFsUGFnZXMsIHNldFNob3BUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzaG9wTG9hZGluZywgc2V0U2hvcExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0ZXJtcywgc2V0VGVybXNdID0gdXNlU3RhdGUoXCJFU1RJTUFURVMgQVJFIEZPUiBMQUJPUiBBTkQgQURESVRJT05BTCBNQVRFUklBTCBPTkxZLCBNQVRFUklBTFMgU09MRCBBUkUgTkVJVEhFUiBUQUtFTiBCQUNLIE9SIEVYQ0hBTkdFRCBXRSBXSUxMIE5PVCBCRSBSRVNQT05TSUJMRSBGT1IgTE9TUyBPUiBEQU1BR0UgQ0FVU0VEIEJZIEZJUkUsIFRIRUZULCBURVNUSU5HLCBERUZFQ1RFRCBQQVJFIFBBUlRTLCBPUiBBTlkgT1RIRVIgQ0FVU0UgQkVZT05EIE9VUiBDT05UUk9MLiBcIik7XHJcbiAgY29uc3QgZGF0ZUNvbW1lbnQgPSBuZXcgRGF0ZSgpXHJcbiAgY29uc3QgaW52b2ljZU5hbWUgPSBcIklOVi1cIiArIFN0cmluZyhpbnZvaWNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaGxhc3ROdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1sYXN0LXNhdmVkLWludm9pY2VgKVxyXG4gICAgICAgICAgc2V0SW52b2ljZU51bWJlcigocGFyc2VJbnQocmVzLmRhdGE/LmRhdGE/Lmludm9pY2VOdW1iZXIgfHwgcmVzLmRhdGE/Lmludm9pY2VOdW1iZXIgfHwgMCkpICsgMSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG9mZkxpbmVDdXN0b21lcjEgPSBhd2FpdCBkYi5pbnZvaWNlU2NoZW1hLnRvQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBsYXRlc3QgPSBvZmZMaW5lQ3VzdG9tZXIxLnJlZHVjZSgobWF4LCByb3cpID0+IHJvdy5pbnZvaWNlTnVtYmVyID4gbWF4Lmludm9pY2VOdW1iZXIgPyByb3cgOiBtYXgsIG9mZkxpbmVDdXN0b21lcjFbMF0pXHJcbiAgICAgICAgc2V0SW52b2ljZU51bWJlcihwYXJzZUludChsYXRlc3QuaW52b2ljZU51bWJlcikgKyAxKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaGxhc3ROdW1iZXIoKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEl0ZW0gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1gKVxyXG4gICAgICAgICAgc2V0SXRlbUluZm9ybWF0aW9uKHJlcy5kYXRhLmRhdGEucmV2ZXJzZSgpKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgb2ZmTGluZUN1c3RvbWVyMSA9IGF3YWl0IGRiLml0ZW1TY2hlbWEudG9BcnJheSgpO1xyXG4gICAgICAgIHNldEl0ZW1JbmZvcm1hdGlvbihvZmZMaW5lQ3VzdG9tZXIxLnJldmVyc2UoKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hJdGVtKClcclxuICB9LCBbXSlcclxuXHJcbiAgLy8gRmV0Y2ggU2hvcCBJdGVtcyAmIFJhdGVcclxuICBjb25zdCBmZXRjaFNob3AgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTaG9wTG9hZGluZyh0cnVlKTtcclxuICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzUmF0ZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3JhdGVgKVxyXG4gICAgICAgIHJlc1JhdGUuZGF0YS5kYXRhLmZvckVhY2goKHJvdykgPT4gc2V0UmF0ZShyb3cucmF0ZSkpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW0tc2hvcD9wYWdlPSR7c2hvcFBhZ2V9JmxpbWl0PTIwJnNlYXJjaD0ke2VuY29kZVVSSUNvbXBvbmVudChzaG9wU2VhcmNoKX1gKVxyXG4gICAgICAgIHNldFNob3BUb3RhbFBhZ2VzKHJlcy5kYXRhLnRvdGFsUGFnZXMpXHJcbiAgICAgICAgc2V0U2hvcEl0ZW1zKHJlcy5kYXRhLml0ZW1zLmZpbHRlcigocm93KSA9PiByb3cudHlwZUl0ZW0gPT09IFwiR29vZHNcIikucmV2ZXJzZSgpKVxyXG4gICAgICAgIHNldFNob3BMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldFNob3BMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBvZmZMaW5lQ3VzdG9tZXIxID0gYXdhaXQgZGIuaXRlbVNjaGVtYS50b0FycmF5KCk7XHJcbiAgICAgIHNldFNob3BJdGVtcyhvZmZMaW5lQ3VzdG9tZXIxLmZpbHRlcigocm93KSA9PiByb3cudHlwZUl0ZW0gPT09IFwiR29vZHNcIikucmV2ZXJzZSgpKVxyXG4gICAgICBzZXRTaG9wTG9hZGluZyhmYWxzZSlcclxuICAgICAgY29uc3Qgb2ZmTGluZVJhdGUgPSBhd2FpdCBkYi5yYXRlU2NoZW1hLnRvQXJyYXkoKTtcclxuICAgICAgb2ZmTGluZVJhdGUuZm9yRWFjaCgocm93KSA9PiBzZXRSYXRlKHJvdy5yYXRlKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2hvcE9wZW4pIHsgLy8gT25seSBmZXRjaCBpZiBzaWRlIHNob3AgaXMgb3BlblxyXG4gICAgICBmZXRjaFNob3AoKVxyXG4gICAgfVxyXG4gIH0sIFtzaG9wUGFnZSwgc2hvcFNlYXJjaCwgc2hvcE9wZW5dKVxyXG5cclxuICBjb25zdCBoYW5kbGVSZWZyZXNoU2hvcCA9ICgpID0+IHtcclxuICAgIHNldFNob3BTZWFyY2goJycpO1xyXG4gICAgc2V0U2hvcFBhZ2UoMSk7XHJcbiAgICBmZXRjaFNob3AoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3BQYWdlQ2hhbmdlID0gKGUsIG5ld1BhZ2UpID0+IHtcclxuICAgIHNldFNob3BQYWdlKG5ld1BhZ2UpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG9wU2VhcmNoQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFNob3BTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0U2hvcFBhZ2UoMSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNob3AgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG9wT3Blbighc2hvcE9wZW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkVG9JbnZvaWNlID0gKHNob3BJdGVtKSA9PiB7XHJcbiAgICAvLyBDaGVjayBpZiBpdGVtIGFscmVhZHkgZXhpc3RzXHJcbiAgICBjb25zdCBleGlzdGluZ0l0ZW1JbmRleCA9IGl0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaXRlbU5hbWUuX2lkID09PSBzaG9wSXRlbS5faWQpO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0l0ZW1JbmRleCAhPT0gLTEpIHtcclxuICAgICAgLy8gSXRlbSBleGlzdHMsIHVwZGF0ZSBxdWFudGl0eVxyXG4gICAgICBjb25zdCB1cGRhdGVkSXRlbXMgPSBbLi4uaXRlbXNdO1xyXG4gICAgICBjb25zdCBjdXJyZW50SXRlbSA9IHVwZGF0ZWRJdGVtc1tleGlzdGluZ0l0ZW1JbmRleF07XHJcbiAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KGN1cnJlbnRJdGVtLml0ZW1RdHkpICsgMTtcclxuICAgICAgXHJcbiAgICAgIGlmIChuZXdRdHkgPiBjdXJyZW50SXRlbS5zdG9jaykge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiU3RvY2sgRXhjZWVkZWQhXCIsIHsgcG9zaXRpb246IFwidG9wLWNlbnRlclwiIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdXBkYXRlZEl0ZW1zW2V4aXN0aW5nSXRlbUluZGV4XSA9IHtcclxuICAgICAgICAuLi5jdXJyZW50SXRlbSxcclxuICAgICAgICBpdGVtUXR5OiBuZXdRdHksXHJcbiAgICAgICAgaXRlbUFtb3VudDogTWF0aC5yb3VuZCgobmV3UXR5ICogY3VycmVudEl0ZW0uaXRlbVJhdGUpICogMTAwKSAvIDEwMCxcclxuICAgICAgICB0b3RhbEFtb3VudDogTWF0aC5yb3VuZCgobmV3UXR5ICogY3VycmVudEl0ZW0uaXRlbVJhdGUpICogMTAwKSAvIDEwMCxcclxuICAgICAgICBkaXNjb3VudDogTWF0aC5yb3VuZCgobmV3UXR5ICogY3VycmVudEl0ZW0uaXRlbVJhdGUgKiBjdXJyZW50SXRlbS5pdGVtRGlzY291bnQpICogMTAwKSAvIDEwMCxcclxuICAgICAgICBwZXJjZW50YWdlOiAoTWF0aC5yb3VuZCgobmV3UXR5ICogY3VycmVudEl0ZW0uaXRlbVJhdGUgKiBjdXJyZW50SXRlbS5pdGVtRGlzY291bnQpICogMTAwKSAvIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgdG90YWxDb3N0OiBNYXRoLnJvdW5kKChuZXdRdHkgKiBjdXJyZW50SXRlbS5pdGVtQ29zdCkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIHRvdGFsR2VuZXJhbGU6IE1hdGgucm91bmQoKGN1cnJlbnRJdGVtLml0ZW1Db3N0ICogY3VycmVudEl0ZW0uaXRlbUJ1eSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICB9O1xyXG4gICAgICBTZXRJdGVtcyh1cGRhdGVkSXRlbXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSXRlbSBkb2VzIG5vdCBleGlzdCwgYWRkIG5ld1xyXG4gICAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgICBfaWQ6IHNob3BJdGVtLl9pZCxcclxuICAgICAgICAgIGl0ZW1OYW1lOiBzaG9wSXRlbS5pdGVtTmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IHNob3BJdGVtLmRhdGEsXHJcbiAgICAgICAgY29udGVudFR5cGU6IHNob3BJdGVtLmNvbnRlbnRUeXBlLFxyXG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogc2hvcEl0ZW0uaXRlbURlc2NyaXB0aW9uLFxyXG4gICAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgICBpdGVtUXR5OiAxLFxyXG4gICAgICAgIGl0ZW1SYXRlOiBzaG9wSXRlbS5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIGl0ZW1BbW91bnQ6IHNob3BJdGVtLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgaXRlbUNvc3Q6IHNob3BJdGVtLml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgICAgdG90YWxBbW91bnQ6IHNob3BJdGVtLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICAgIGl0ZW1XZWlnaHQ6IHNob3BJdGVtLml0ZW1XZWlnaHQgfHwgXCJcIixcclxuICAgICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICAgIHRvdGFsQ29zdDogc2hvcEl0ZW0uaXRlbUNvc3RQcmljZSxcclxuICAgICAgICBzdG9jazogc2hvcEl0ZW0uaXRlbVF1YW50aXR5LFxyXG4gICAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgICAgfTtcclxuICAgICAgU2V0SXRlbXMoWy4uLml0ZW1zLCBuZXdJdGVtXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJdGVtID0gKGlkUm93LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gbmV3VmFsdWVcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgICBpdGVtTmFtZTogc2VsZWN0ZWRPcHRpb25zPy5pdGVtTmFtZSxcclxuICAgICAgfSxcclxuICAgICAgZGF0YTogc2VsZWN0ZWRPcHRpb25zPy5kYXRhLFxyXG4gICAgICBjb250ZW50VHlwZTogc2VsZWN0ZWRPcHRpb25zPy5jb250ZW50VHlwZSxcclxuICAgICAgaXRlbUNvc3Q6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbUNvc3RQcmljZSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgaXRlbVJhdGU6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgc3RvY2s6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbVF1YW50aXR5LFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBpKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGxpc3QgPSBbLi4uaXRlbXNdO1xyXG4gICAgbGlzdFtpXVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgaWYgKGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddID4gNSkge1xyXG4gICAgICBsaXN0W2ldWydpdGVtRGlzY291bnQnXSA9IDVcclxuICAgIH1cclxuICAgIGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtUmF0ZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWyd0b3RhbENvc3QnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1RdHknXSAqIGxpc3RbaV1bJ2l0ZW1Db3N0J10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2Rpc2NvdW50J10gPSBsaXN0W2ldWyd0b3RhbEFtb3VudCddICogbGlzdFtpXVsnaXRlbURpc2NvdW50J107XHJcbiAgICBsaXN0W2ldWydwZXJjZW50YWdlJ10gPSBsaXN0W2ldWydkaXNjb3VudCddIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnaXRlbUFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsndG90YWxBbW91bnQnXSAtIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxHZW5lcmFsZSddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbUNvc3QnXSAqIGxpc3RbaV1bJ2l0ZW1CdXknXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgU2V0SXRlbXMobGlzdCk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUNFTyA9IChlLCBpKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGxpc3QgPSBbLi4uaXRlbXNdO1xyXG4gICAgbGlzdFtpXVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgbGlzdFtpXVsndG90YWxBbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1RdHknXSAqIGxpc3RbaV1bJ2l0ZW1SYXRlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQ29zdCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbUNvc3QnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnZGlzY291bnQnXSA9IGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gKiBsaXN0W2ldWydpdGVtRGlzY291bnQnXTtcclxuICAgIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSA9IGxpc3RbaV1bJ2Rpc2NvdW50J10gLyAxMDA7XHJcbiAgICBsaXN0W2ldWydpdGVtQW1vdW50J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWyd0b3RhbEFtb3VudCddIC0gbGlzdFtpXVsncGVyY2VudGFnZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWyd0b3RhbEdlbmVyYWxlJ10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtQ29zdCddICogbGlzdFtpXVsnaXRlbUJ1eSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBTZXRJdGVtcyhsaXN0KTtcclxuICB9XHJcbiAgLy9hZGRJdGVtXHJcbiAgY29uc3QgYWRkSXRlbSA9ICgpID0+IHtcclxuICAgIFNldEl0ZW1zKFsuLi5pdGVtcywge1xyXG4gICAgICB0eXBlSXRlbTogJycsXHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogXCJcIixcclxuICAgICAgICBpdGVtTmFtZTogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgIGl0ZW1Db3N0OiAwLFxyXG4gICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgIGl0ZW1CdXk6IDAsXHJcbiAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgIHRvdGFsR2VuZXJhbGU6IDAsXHJcbiAgICAgIHRvdGFsQ29zdDogMCxcclxuICAgICAgc3RvY2s6IDAsXHJcbiAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICB9XSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1XaGl0ZSA9ICgpID0+IHtcclxuICAgIFNldEl0ZW1zKFsuLi5pdGVtcywge1xyXG4gICAgICBuZXdEZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH1dKTtcclxuICB9XHJcbiAgY29uc3QgYWRkSXRlbVJvdyA9IChpKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IFwiXCIsXHJcbiAgICAgICAgaXRlbU5hbWU6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlID0gWy4uLml0ZW1zXTtcclxuICAgIHVwZGF0ZS5zcGxpY2UoaSArIDEsIDAsIG5ld0l0ZW0pO1xyXG4gICAgU2V0SXRlbXModXBkYXRlKVxyXG4gIH1cclxuICBjb25zdCBhZGRJdGVtV2hpdGVSb3cgPSAoaSkgPT4ge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgbmV3RGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogXCJcIixcclxuICAgICAgICBpdGVtTmFtZTogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgIGl0ZW1Db3N0OiAwLFxyXG4gICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgIGl0ZW1CdXk6IDAsXHJcbiAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgIHRvdGFsR2VuZXJhbGU6IDAsXHJcbiAgICAgIHRvdGFsQ29zdDogMCxcclxuICAgICAgc3RvY2s6IDAsXHJcbiAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGUgPSBbLi4uaXRlbXNdO1xyXG4gICAgdXBkYXRlLnNwbGljZShpICsgMSwgMCwgbmV3SXRlbSk7XHJcbiAgICBTZXRJdGVtcyh1cGRhdGUpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURyYWdFbmQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdJdGVtcyA9IFsuLi5pdGVtc107XHJcbiAgICBjb25zdCBbcmVtb3ZlZF0gPSBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW1vdmVkKTtcclxuICAgIFNldEl0ZW1zKG5ld0l0ZW1zKVxyXG4gIH07XHJcbiAgY29uc3QgZGVsZXRlSXRlbSA9IGlkUm93ID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLmZpbHRlcigoSXRlbSkgPT4gSXRlbS5pZFJvdyAhPT0gaWRSb3cpKTtcclxuICB9O1xyXG4gIGNvbnN0IGZpbHRlckl0ZW1JbmZvcm1hdGlvbiA9IEl0ZW1JbmZvcm1hdGlvbi5maWx0ZXIob3B0aW9uID0+ICFpdGVtcy5maW5kKChyb3cpID0+IG9wdGlvbi5faWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkICYmIG9wdGlvbi50eXBlSXRlbSA9PT0gXCJHb29kc1wiKSlcclxuICB7LyoqIEl0ZW0gSW5GTyAqLyB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGUgPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBudWxsLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24gPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgaXRlbU5hbWU6ICdlbXB0eSdcclxuICAgICAgfSxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBbb3Blbkl0ZW1VcGRhdGUsIHNldE9wZW5JdGVtVXBkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaWRJdGVtLCBzZXRJZEl0ZW1dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbkl0ZW1VcGRhdGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHNldE9wZW5JdGVtVXBkYXRlKHRydWUpO1xyXG4gICAgc2V0SWRJdGVtKGlkKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlSXRlbVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldE9wZW5JdGVtVXBkYXRlKGZhbHNlKTtcclxuICAgIGlmIChpZEl0ZW0pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2lkSXRlbX1gKVxyXG4gICAgICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaXRlbU5hbWU/Ll9pZCA9PT0gcmVzLmRhdGEuZGF0YS5faWQgPyB7XHJcbiAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgICAgICBfaWQ6IHJlcy5kYXRhLmRhdGEuX2lkLFxyXG4gICAgICAgICAgICBpdGVtTmFtZTogcmVzLmRhdGEuZGF0YS5pdGVtTmFtZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogcmVzLmRhdGEuZGF0YS5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBpdGVtQ29zdDogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgaXRlbVJhdGU6IHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICAgIHN0b2NrOiByZXMuZGF0YS5kYXRhLml0ZW1RdWFudGl0eSxcclxuICAgICAgICAgIHRvdGFsQW1vdW50OiByb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICAgIGRpc2NvdW50OiAocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCxcclxuICAgICAgICAgIHBlcmNlbnRhZ2U6ICgocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCkgLyAxMDAsXHJcbiAgICAgICAgICBpdGVtQW1vdW50OiAocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpIC0gKCgocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCkgLyAxMDApLFxyXG4gICAgICAgICAgdG90YWxDb3N0OiByb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSxcclxuICAgICAgICAgIHRvdGFsR2VuZXJhbGU6IHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSAqIHJvdy5pdGVtQnV5XHJcbiAgICAgICAgfSA6IHJvdykpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICB7LyoqIEl0ZW0gSW5GTyBFbmQgKi8gfVxyXG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9jdXN0b21lcmApXHJcbiAgICAgICAgICBzZXRDdXN0b21lcihyZXMuZGF0YS5kYXRhLnJldmVyc2UoKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBvZmZMaW5lQ3VzdG9tZXIxID0gYXdhaXQgZGIuY3VzdG9tZXJTY2hlbWEudG9BcnJheSgpO1xyXG4gICAgICAgIHNldEN1c3RvbWVyKG9mZkxpbmVDdXN0b21lcjEucmV2ZXJzZSgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hDdXN0b21lcigpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IFtjdXN0b21lck5hbWUsIHNldEN1c3RvbWVyTmFtZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW29wZW5BdXRvY29tcGxldGUxLCBzZXRPcGVuQXV0b2NvbXBsZXRlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTEgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDcmVhdGVDdXN0b21lciA9IChuZXdDdXN0b21lcikgPT4ge1xyXG4gICAgc2V0Q3VzdG9tZXIoW25ld0N1c3RvbWVyLCAuLi5jdXN0b21lcl0pXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUN1c3RvbWVyID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBjdXN0b21lci5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICBzZXRDdXN0b21lck5hbWUoe1xyXG4gICAgICBfaWQ6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICBjdXN0b21lck5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uQ3VzdG9tZXIsXHJcbiAgICAgIGJpbGxpbmdBZGRyZXNzOiBzZWxlY3RlZE9wdGlvbnM/LmJpbGxpbmdBZGRyZXNzLFxyXG4gICAgICBiaWxsaW5nQ2l0eTogc2VsZWN0ZWRPcHRpb25zPy5iaWxsaW5nQ2l0eVxyXG4gICAgfSk7XHJcbiAgICBpZiAoc2VsZWN0ZWRPcHRpb25zPy5wYXltZW50VGVybXMgPT09IFwiTmV0IDNcIikge1xyXG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGN1cnJlbnREYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMyk7XHJcbiAgICAgIHNldEludm9pY2VEdWVEYXRlKGN1cnJlbnREYXRlKVxyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZE9wdGlvbnM/LnBheW1lbnRUZXJtcyA9PT0gXCJOZXQgMTBcIikge1xyXG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGN1cnJlbnREYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMTApO1xyXG4gICAgICBzZXRJbnZvaWNlRHVlRGF0ZShjdXJyZW50RGF0ZSlcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRPcHRpb25zPy5wYXltZW50VGVybXMgPT09IFwiTmV0IDE1XCIpIHtcclxuICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIDE1KTtcclxuICAgICAgc2V0SW52b2ljZUR1ZURhdGUoY3VycmVudERhdGUpXHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkT3B0aW9ucz8ucGF5bWVudFRlcm1zID09PSBcIk5ldCAyMFwiKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgY3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAyMCk7XHJcbiAgICAgIHNldEludm9pY2VEdWVEYXRlKGN1cnJlbnREYXRlKVxyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZE9wdGlvbnM/LnBheW1lbnRUZXJtcyA9PT0gXCJOZXQgMjVcIikge1xyXG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGN1cnJlbnREYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMjUpO1xyXG4gICAgICBzZXRJbnZvaWNlRHVlRGF0ZShjdXJyZW50RGF0ZSlcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRPcHRpb25zPy5wYXltZW50VGVybXMgPT09IFwiRHVlIGVuZCBvZiB0aGUgbW9udGhcIikge1xyXG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGN1cnJlbnREYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDEpO1xyXG4gICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKDApO1xyXG4gICAgICBzZXRJbnZvaWNlRHVlRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkT3B0aW9ucz8ucGF5bWVudFRlcm1zID09PSBcIkR1ZSBvbiBSZWNlaXB0XCIpIHtcclxuICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBzZXRJbnZvaWNlRHVlRGF0ZShjdXJyZW50RGF0ZSlcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW29wZW5BdXRvY29tcGxldGUyLCBzZXRPcGVuQXV0b2NvbXBsZXRlMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDcmVhdGVJdGVtID0gKG5ld0l0ZW0pID0+IHtcclxuICAgIHNldEl0ZW1JbmZvcm1hdGlvbihbbmV3SXRlbSwgLi4uSXRlbUluZm9ybWF0aW9uXSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdDEgPSBpdGVtcy5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyAocGFyc2VGbG9hdChyb3cuaXRlbUFtb3VudCkgfHwgMCksIDApXHJcbiAgICBjb25zdCB2YWwgPSBpc0Zpbml0ZShyZXN1bHQxKSA/IHJlc3VsdDEgOiAwO1xyXG4gICAgc2V0U3ViVG90YWwodmFsLnRvRml4ZWQoMikpXHJcbiAgICBsZXQgbmV3VG90YWwgPSBNYXRoLnJvdW5kKChOdW1iZXIodmFsKSArIE51bWJlcihzaGlwcGluZykgKyBOdW1iZXIoYWRqdXN0bWVudE51bWJlcikpICogMTAwKSAvIDEwMFxyXG4gICAgc2V0VG90YWxJbnZvaWNlKG5ld1RvdGFsKVxyXG4gICAgbGV0IG5ld0JhbGFuY2UgPSBNYXRoLnJvdW5kKChuZXdUb3RhbCAtIHRvdGFsKSAqIDEwMCkgLyAxMDBcclxuICAgIHNldEJhbGFuY2VEdWUobmV3QmFsYW5jZSlcclxuICB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodG90YWxJbnZvaWNlKSB7XHJcbiAgICAgIGNvbnN0IHdob2xlUGFydCA9IE1hdGguZmxvb3IodG90YWxJbnZvaWNlKVxyXG4gICAgICBjb25zdCBmcmFjdGlvbmFsUGFydCA9ICh0b3RhbEludm9pY2UgJSAxKS50b0ZpeGVkKDIpLnNwbGl0KCcuJylbMV07XHJcbiAgICAgIGNvbnN0IHdob2xlV29yZHMgPSBudW1iZXJUb1dvcmRzLnRvV29yZHMod2hvbGVQYXJ0KVxyXG4gICAgICBjb25zdCBmcmFjdGlvbmFsV29yZHMgPSBudW1iZXJUb1dvcmRzLnRvV29yZHMoZnJhY3Rpb25hbFBhcnQpXHJcbiAgICAgIHNldFRvdGFsVyhgJHt3aG9sZVdvcmRzfSBhbmQgJHtmcmFjdGlvbmFsV29yZHN9IGNlbnRzYClcclxuICAgIH1cclxuICB9LCBbdG90YWxJbnZvaWNlXSlcclxuICBjb25zdCBbb3BlbjEsIHNldE9wZW4xXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkJhY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuMSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQmFjayA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWxVcGRhdGUsIHNldExvYWRpbmdPcGVuTW9kYWxVcGRhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZU9wZW5VcGRhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsVXBkYXRlKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWxVcGRhdGUoZmFsc2UpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEZWNpc2lvbiA9IChuYXZpZ2F0ZSkgPT4ge1xyXG4gICAgLy9OYXZpZ2F0ZSBCYXNlZCBvbiB0aCBEZWNpc2lvblxyXG4gICAgaWYgKG5hdmlnYXRlID09PSAncHJldmlvdXMnKSB7XHJcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgIH0gZWxzZSBpZiAobmF2aWdhdGUgPT09ICdzdGF5Jykge1xyXG4gICAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbcmVmZXJlbmNlSW5mbywgc2V0UmVmZXJlbmNlSW5mb10gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IGludm9pY2VQdXJjaGFzZSA9ICcnXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uID0gYXN5bmMgKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OdW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogUmVmZXJlbmNlSW5mbyxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIENyZWF0ZWQgJyxcclxuICAgICAgcmVhc29uOiAnSU5WLScgKyBTdHJpbmcoUmVmZXJlbmNlSW5mb051bWJlcikucGFkU3RhcnQoNiwgJzAnKSArICcgRm9yICcgKyBjdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBkYXRlQ29tbWVudFxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2F2aW5nKCd0cnVlJyk7XHJcbiAgICBsZXQgc3RhdHVzID0gJydcclxuICAgIGlmICh0b3RhbCA+IDAgJiYgdG90YWwgPCB0b3RhbEludm9pY2UpIHtcclxuICAgICAgc3RhdHVzID0gJ1BhcnRpYWxseS1QYWlkJ1xyXG4gICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KHRvdGFsKSA9PT0gcGFyc2VGbG9hdCh0b3RhbEludm9pY2UpICYmIHBhcnNlRmxvYXQodG90YWwpICE9PSAwKSB7XHJcbiAgICAgIHN0YXR1cyA9ICdQYWlkJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhdHVzID0gJ0RyYWZ0J1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXRlbXNXaXRob3V0RGF0YSA9IGl0ZW1zLm1hcCgoeyBkYXRhLCBjb250ZW50VHlwZSwgLi4ucmVzdCB9KSA9PiByZXN0KTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIF9pZDogdjQoKSxcclxuICAgICAgY3VzdG9tZXJOYW1lLFxyXG4gICAgICBpbnZvaWNlTnVtYmVyLFxyXG4gICAgICBpbnZvaWNlRGF0ZSxcclxuICAgICAgaW52b2ljZUR1ZURhdGUsXHJcbiAgICAgIGludm9pY2VTdWJqZWN0LFxyXG4gICAgICBpbnZvaWNlUHVyY2hhc2UsXHJcbiAgICAgIGludm9pY2VEZWZlY3QsXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgaXRlbXM6IGl0ZW1zV2l0aG91dERhdGEsXHJcbiAgICAgIHN1YlRvdGFsLFxyXG4gICAgICBub3RlSW5mbyxcclxuICAgICAgdG90YWwsXHJcbiAgICAgIGJhbGFuY2VEdWUsXHJcbiAgICAgIHRvdGFsVyxcclxuICAgICAgaW52b2ljZU5hbWUsXHJcbiAgICAgIG5vdGUsIHNoaXBwaW5nLCBhZGp1c3RtZW50LCBhZGp1c3RtZW50TnVtYmVyLCB0b3RhbEludm9pY2UsIHRlcm1zLCBzeW5jZWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtaW52b2ljZWAsIGRhdGEpO1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgIGludmFsaWRhdGVDYWNoZSgnL2ludm9pY2UnKTtcclxuICAgICAgICAgIHNldFJlZmVyZW5jZUluZm8ocmVzLmRhdGEuZGF0YS5pbnZvaWNlTnVtYmVyKVxyXG4gICAgICAgICAgLy8gT3BlbiBMb2FkaW5nIFZpZXdcclxuICAgICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm8gPSByZXMuZGF0YS5kYXRhLl9pZFxyXG4gICAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mb051bWJlciA9IHJlcy5kYXRhLmRhdGEuaW52b2ljZU51bWJlclxyXG4gICAgICAgICAgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OdW1iZXIpXHJcbiAgICAgICAgICAvL2F3YWl0IGRiLmludm9pY2VTY2hlbWEuYWRkKHsuLi5yZXMuZGF0YS5kYXRhLF9pZDpyZXMuZGF0YS5kYXRhLl9pZCwgc3luY2VkOiB0cnVlIH0pXHJcbiAgICAgICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgc2V0U2F2aW5nKCcnKVxyXG4gICAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IGRiLmludm9pY2VTY2hlbWEucHV0KGRhdGEpXHJcbiAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCBuZXcgaW52b2ljZVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5CYWNrfT5cclxuICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRhc2gxIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiA0IH19ID5cclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2N1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5DdXN0b21lcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlQ3VzdG9tZXIobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgbGVmdDogJzAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMShlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNycgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREIE5FVyBDVVNUT01FUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiQ3VzdG9tZXIgTmFtZVwiIHJlcXVpcmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJpbnZvaWNlTnVtYmVyXCI+SW52b2ljZSBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdpbnZvaWNlTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpbnZvaWNlTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSW52b2ljZSBOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnZvaWNlTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEludm9pY2VOdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5JTlYtPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naW52b2ljZURhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKGludm9pY2VEYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldEludm9pY2VEYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2ludm9pY2VEdWVEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEdWUgRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoaW52b2ljZUR1ZURhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0SW52b2ljZUR1ZURhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2ludm9pY2VTdWJqZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0naW52b2ljZVN1YmplY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU3ViamVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnZvaWNlU3ViamVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW52b2ljZVN1YmplY3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0naW52b2ljZURlZmVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2ludm9pY2VEZWZlY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGVmZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ludm9pY2VEZWZlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEludm9pY2VEZWZlY3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbm90ZUluZm8nXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdub3RlSW5mbydcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdOb3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlSW5mbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6IDEsIGZsb2F0OiAncmlnaHQnLCByaWdodDogJy01cHgnLCB0b3A6ICc0MDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkFkZFwiIHBsYWNlbWVudD1cInRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7IGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtV2hpdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2dyYXknLCBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiSVRFTSBMSVNUXCIgcGxhY2VtZW50PVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNob3B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJywgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICctMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RvY2stQTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRpc2NvdW50ICU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkcm9wcGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17SXRlbS5pZFJvd30gZHJhZ2dhYmxlSWQ9e2Bkcm9wcGFibGUke0l0ZW0uaWRSb3d9YH0gaW5kZXg9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs2fT48VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmV3RGVzY3JpcHRpb24nIGlkPSduZXdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLm5ld0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGhlaWdodDogJzEwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UaHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSWQ9e0l0ZW0uaXRlbU5hbWU/Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsRGF0YT17SXRlbS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUeXBlPXtJdGVtLmNvbnRlbnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaGlkZGVuPXtJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JyA6ICcnfSBzeD17eyBmb250U2l6ZTogJzIwcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUudG9VcHBlckNhc2UoKSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGVzY3JpcHRpb24nIGlkPSdpdGVtRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzI1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGUoSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWU/Ll9pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJFZGl0XCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5JdGVtVXBkYXRlKEl0ZW0uaXRlbU5hbWU/Ll9pZCl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlckl0ZW1JbmZvcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2YyZjJmMicgfX0+e29wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9IHsuLi5wYXJhbXN9IHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUobmV3SW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9eyhvcHRpb25zLCB7IGlucHV0VmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1CcmFuZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZUl0ZW0oSXRlbS5pZFJvdywgbmV3VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHsgY2hpbGRyZW4sIC4uLm90aGVyIH0pID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgbGVmdDogJzAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMihlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNycgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NzBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZURlc2NyaXB0aW9uKEl0ZW0uaWRSb3cpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RvY2snIGlkPSdzdG9jaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uc3RvY2t9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVF0eScgaWQ9J2l0ZW1RdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1SYXRlJyBpZD0naXRlbVJhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1SYXRlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGlzY291bnQnIGlkPSdpdGVtRGlzY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMSB0byA1ICUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9J2Ftb3VudFRvdGFsSW52b2ljZSc+e051bWJlcihJdGVtLml0ZW1BbW91bnQgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIk5ldy1Sb3dcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtUm93KGkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJCbGFuay1Sb3dcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtV2hpdGVSb3coaSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZUluZm8xMCcgc3R5bGU9e3sgbWFyZ2luTGVmdDogJy0yMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdG9jay1BPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGlzY291bnQgJTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRyb3BwYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtJdGVtLmlkUm93fSBkcmFnZ2FibGVJZD17YGRyb3BwYWJsZSR7SXRlbS5pZFJvd31gfSBpbmRleD17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezZ9PjxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduZXdEZXNjcmlwdGlvbicgaWQ9J25ld0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0ubmV3RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+PERyYWdJbmRpY2F0b3JSb3VuZGVkIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnMTVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtVGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkPXtJdGVtLml0ZW1OYW1lPy5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbERhdGE9e0l0ZW0uZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVHlwZT17SXRlbS5jb250ZW50VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGhpZGRlbj17SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPT09ICdlbXB0eScgOiAnJ30gc3g9e3sgZm9udFNpemU6ICcyMHB4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvVXBwZXJDYXNlKCkgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURlc2NyaXB0aW9uJyBpZD0naXRlbURlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMjUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZT8uX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkVkaXRcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3Blbkl0ZW1VcGRhdGUoSXRlbS5pdGVtTmFtZT8uX2lkKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlckl0ZW1JbmZvcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30+e29wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9IHsuLi5wYXJhbXN9IHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUobmV3SW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9eyhvcHRpb25zLCB7IGlucHV0VmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1CcmFuZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZUl0ZW0oSXRlbS5pZFJvdywgbmV3VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHsgY2hpbGRyZW4sIC4uLm90aGVyIH0pID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgbGVmdDogJzAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMihlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNycgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NzBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZURlc2NyaXB0aW9uKEl0ZW0uaWRSb3cpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RvY2snIGlkPSdzdG9jaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uc3RvY2t9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVF0eScgaWQ9J2l0ZW1RdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1SYXRlJyBpZD0naXRlbVJhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1SYXRlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGlzY291bnQnIGlkPSdpdGVtRGlzY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMSB0byA1ICUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9J2Ftb3VudFRvdGFsSW52b2ljZSc+e051bWJlcihJdGVtLml0ZW1BbW91bnQgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIk5ldy1Sb3dcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtUm93KGkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJCbGFuay1Sb3dcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtV2hpdGVSb3coaSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdub3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdub3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdJbnZvaWNlIE5vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm90ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNTAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpcnN0VGFibGVcIiBzdHlsZT17eyBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlN1Yi1Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzdWJUb3RhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdWJUb3RhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJUb3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlNoaXBwaW5nIEZlZXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nc2hpcHBpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc2hpcHBpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2hpcHBpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNoaXBwaW5nKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYWRqdXN0bWVudCcgaWQ9J2FkanVzdG1lbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGp1c3RtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFkanVzdG1lbnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzI1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdhZGp1c3RtZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2FkanVzdG1lbnROdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRqdXN0bWVudE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRqdXN0bWVudE51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ndG90YWxJbnZvaWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3RvdGFsSW52b2ljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbEludm9pY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5CYWxhbmNlIER1ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2JhbGFuY2VEdWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYmFsYW5jZUR1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYWxhbmNlRHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlRvdGFsIEluIFdvcmRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3RhbFdcIiBpZD1cInRvdGFsV1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsV31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J3Rlcm1zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGVybXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGVybXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSW52b2ljZSBUZXJtcydcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGVybXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc2MCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzYXZpbmcgIT09ICd0cnVlJyA/IDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+IDogPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+U2F2aW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW4xfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlQmFja31cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzeD17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EbyB5b3Ugd2FudCB0byBzdG9wIGNyZWF0aW5nIEludm9pY2UgPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlIDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj4gSWYgeW91IHN0b3AgY3JlYXRpbmcgd2l0aG91dCBzYXZpbmcsIGFsbCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0PC9zcGFuPjwvcD4gIDwvR3JpZD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL0ludm9pY2VWaWV3QWRtaW4nKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19Pk5vPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3N0YXknKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIEFkZCBOZXdcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNpc2lvbigncHJldmlvdXMnKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiogU2lkZSBTaG9wIERyYXdlciAqL31cclxuICAgICAgPFNpZGVEcmF3ZXJcclxuICAgICAgICBhbmNob3I9XCJyaWdodFwiXHJcbiAgICAgICAgb3Blbj17c2hvcE9wZW59XHJcbiAgICAgICAgb25DbG9zZT17dG9nZ2xlU2hvcH1cclxuICAgICAgICBQYXBlclByb3BzPXt7XHJcbiAgICAgICAgICBzeDogeyB3aWR0aDogJzUwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNScsIHBhZGRpbmc6ICcyMHB4JyB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG1iPXsyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICBTZWxlY3QgSXRlbSBmcm9tIFNob3BcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNob3B9PlxyXG4gICAgICAgICAgICA8Q2xvc2UgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYj17Mn0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBTaG9wXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Nob3BTZWFyY2h9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTaG9wU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlZnJlc2hTaG9wfSBjb2xvcj1cInByaW1hcnlcIiBzeD17eyBtbDogMSB9fT5cclxuICAgICAgICAgICAgPFJlZnJlc2ggLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAge3Nob3BMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxLCBvdmVyZmxvd1k6ICdhdXRvJywgbWF4SGVpZ2h0OiAnY2FsYygxMDB2aCAtIDE4MHB4KScgfX0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAge3Nob3BJdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0ga2V5PXtpdGVtLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtgZGF0YToke2l0ZW0uY29udGVudFR5cGV9O2Jhc2U2NCwke2l0ZW0uZGF0YX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uaXRlbU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG9iamVjdEZpdDogJ2NvbnRhaW4nLCBwYWRkaW5nOiAnNXB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBzeD17eyBmbGV4R3JvdzogMSwgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXRlbU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZDIHsoaXRlbS5pdGVtU2VsbGluZ1ByaWNlICogcmF0ZSk/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInByaW1hcnlcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQge2l0ZW0uaXRlbVNlbGxpbmdQcmljZT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZGlzcGxheT1cImJsb2NrXCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN0b2NrOiB7aXRlbS5pdGVtUXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVG9JbnZvaWNlKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogJzVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtdD17Mn0+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgIGNvdW50PXtzaG9wVG90YWxQYWdlc31cclxuICAgICAgICAgICAgICAgIHBhZ2U9e3Nob3BQYWdlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNob3BQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NpZGVEcmF3ZXI+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e0Vycm9yT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENhbmNlbEljb24gc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlNhdmluZyBGYWlsZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsVXBkYXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVXBkYXRlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVVwZGF0ZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBwYWRkaW5nOiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPEN1c3RvbWVyRm9ybVZpZXcyIG9uQ3JlYXRlT3B0aW9uPXtoYW5kbGVDcmVhdGVDdXN0b21lcn0gb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBwYWRkaW5nOiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPEl0ZW1Gb3JtVmlldzIgb25DcmVhdGVPcHRpb249e2hhbmRsZUNyZWF0ZUl0ZW19IG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbkl0ZW1VcGRhdGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUl0ZW1VcGRhdGV9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2MDBweCcsIHBhZGRpbmc6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICA8SXRlbVVwZGF0ZVZpZXcyIG9uQ2xvc2U9e2hhbmRsZUNsb3NlSXRlbVVwZGF0ZX0gaWQ9e2lkSXRlbX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZvaWNlRm9ybVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Nob3BwaW5nQ2FydE91dGxpbmVkJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi9hcGlDb25maWcnO1xuXG5jb25zdCBJdGVtVGh1bWJuYWlsID0gKHsgaXRlbUlkLCBpbml0aWFsRGF0YSwgaW5pdGlhbFR5cGUgfSkgPT4ge1xuICBjb25zdCBbc3JjLCBzZXRTcmNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEltYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gMS4gQ2hlY2sgZm9yIGluaXRpYWxEYXRhIChwYXNzZWQgZnJvbSBzZWFyY2gvc2hvcClcbiAgICAgIGlmIChpbml0aWFsRGF0YSAmJiBpbml0aWFsVHlwZSAmJiBpbml0aWFsRGF0YSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpbml0aWFsVHlwZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpbml0aWFsRGF0YSAhPT0gXCJudWxsXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbml0aWFsRGF0YSA9PT0gJ3N0cmluZycgJiYgaW5pdGlhbERhdGEubGVuZ3RoID4gNTApIHtcbiAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhbHJlYWR5IGEgZGF0YSBVUkxcbiAgICAgICAgICAgaWYgKGluaXRpYWxEYXRhLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgICAgc2V0U3JjKGluaXRpYWxEYXRhKTtcbiAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0U3JjKGBkYXRhOiR7aW5pdGlhbFR5cGV9O2Jhc2U2NCwke2luaXRpYWxEYXRhfWApO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsRGF0YS5kYXRhKSB7XG4gICAgICAgICAgIC8vIEhhbmRsZSBidWZmZXIgb2JqZWN0IGlmIGl0J3Mgbm90IGNvbnZlcnRlZCB0byBzdHJpbmcgeWV0XG4gICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGluaXRpYWxEYXRhLmRhdGEpO1xuICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHsgdHlwZTogaW5pdGlhbFR5cGUgfSk7XG4gICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiBzZXRTcmMocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gMi4gRmFsbGJhY2sgdG8gZmV0Y2ggaWYgbm8gaW5pdGlhbCBkYXRhIG9yIGlmIGl0IHdhcyBpbnZhbGlkXG4gICAgICBpZiAoIWl0ZW1JZCB8fCBpdGVtSWQgPT09IFwidW5kZWZpbmVkXCIgfHwgaXRlbUlkID09PSBcIm51bGxcIikge1xuICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWl0ZW0vJHtpdGVtSWR9YCk7XG4gICAgICAgIGlmIChyZXMuZGF0YS5kYXRhICYmIHJlcy5kYXRhLmRhdGEuZGF0YSkge1xuICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHJlcy5kYXRhLmRhdGEuZGF0YS5kYXRhKTtcbiAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHsgdHlwZTogcmVzLmRhdGEuZGF0YS5jb250ZW50VHlwZSB9KTtcbiAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiBzZXRTcmMocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0U3JjKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG9ubGluZSBpbWFnZTpcIiwgZXJyKTtcbiAgICAgICAgc2V0U3JjKG51bGwpO1xuICAgICAgfVxuICAgIH07XG4gICAgZmV0Y2hJbWFnZSgpO1xuICB9LCBbaXRlbUlkLCBpbml0aWFsRGF0YSwgaW5pdGlhbFR5cGVdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPEF2YXRhclxuICAgICAgdmFyaWFudD1cInJvdW5kZWRcIlxuICAgICAgc3JjPXtzcmN9XG4gICAgICBzeD17eyB3aWR0aDogODAsIGhlaWdodDogODAsIGJhY2tncm91bmRDb2xvcjogJyNmMGYwZjAnLCBib3JkZXI6ICcxcHggc29saWQgI2RkZCcgfX1cbiAgICA+XG4gICAgICB7IXNyYyAmJiA8U2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIHN4PXt7IGZvbnRTaXplOiA0MCwgY29sb3I6ICcjOTk5JyB9fSAvPn1cbiAgICA8L0F2YXRhcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1UaHVtYm5haWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi4vY3NzL1NpZGViYXJOZXcuc2NzcydcclxuaW1wb3J0IHsgT3V0bGV0LCBOYXZMaW5rLCBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBEYXNoYm9hcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGFzaGJvYXJkJztcclxuaW1wb3J0IFBlcm1JZGVudGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QZXJtSWRlbnRpdHknO1xyXG5pbXBvcnQgTGlzdEFsdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9MaXN0QWx0JztcclxuaW1wb3J0IERlc2NyaXB0aW9uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rlc2NyaXB0aW9uJztcclxuaW1wb3J0IFJlY2VpcHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUmVjZWlwdCc7XHJcbmltcG9ydCBNb3ZpbmdJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW92aW5nJztcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NldHRpbmdzJztcclxuaW1wb3J0IEluc2VydERyaXZlRmlsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9JbnNlcnREcml2ZUZpbGUnO1xyXG5pbXBvcnQgUmVzdG9yZVBhZ2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUmVzdG9yZVBhZ2UnO1xyXG5pbXBvcnQgUmVxdWVzdFF1b3RlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1JlcXVlc3RRdW90ZSc7XHJcbmltcG9ydCBNb25ldGl6YXRpb25Pbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb25ldGl6YXRpb25Pbic7XHJcbmltcG9ydCBFbmdpbmVlcmluZ0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FbmdpbmVlcmluZyc7XHJcbmltcG9ydCB7IEV4cGxpY2l0LCBTaG9wcGluZ0JhZ091dGxpbmVkIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBSb29tUHJlZmVyZW5jZXNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUm9vbVByZWZlcmVuY2VzJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1CdXR0b24sIExpc3RJdGVtSWNvbiwgTGlzdEl0ZW1UZXh0LCBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBQYXltZW50SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1BheW1lbnQnO1xyXG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9yZVZlcnQnO1xyXG5mdW5jdGlvbiBTaWRlYmFyRGFzaDEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPERhc2hib2FyZEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEYXNoYm9hcmRcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFBlcm1JZGVudGl0eUljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDdXN0b21lclwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ICA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxMaXN0QWx0SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlN0b3JlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxSZXF1ZXN0UXVvdGVJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUXVvdGF0aW9uXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8RGVzY3JpcHRpb25JY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSW52b2ljZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPE1vbmV0aXphdGlvbk9uSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlBheW1lbnRcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxTaG9wcGluZ0JhZ091dGxpbmVkIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGFpbHkgRXhwZW5zZXNcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSAgPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8Um9vbVByZWZlcmVuY2VzSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlByb2plY3RcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxSZWNlaXB0SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlB1cmNoYXNlcyBSZXF1ZXN0XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxFbmdpbmVlcmluZ0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJNYWludGVuYW5jZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPE1vcmVWZXJ0SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk1vcmVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyRGFzaDEiLCJpbXBvcnQgRGV4aWUgZnJvbSBcImRleGllXCI7XHJcblxyXG5jb25zdCBkYiA9IG5ldyBEZXhpZSgnR2xvYmFsR2F0ZScpO1xyXG5cclxuZGIudmVyc2lvbigxKS5zdG9yZXMoe1xyXG4gICAgY3VzdG9tZXJTY2hlbWE6ICcrK2lkLEN1c3RvbWVyLF9pZCxjdXN0b21lclR5cGUsZGVzaWduYXRpb24sY3VzdG9tZXJGaXJzdE5hbWUsIGN1c3RvbWVyTGFzdE5hbWUsY3VzdG9tZXJGdWxsTmFtZSxjb21wYW55TmFtZSxjdXN0b21lckVtYWlsLGN1c3RvbWVyQ29tcGFueVBob25lLGN1c3RvbWVyUGhvbmUsY3VycmVuY3kscGF5bWVudFRlcm1zLCBiaWxsaW5nQWRkcmVzcyxiaWxsaW5nQ2l0eSxjcmVkaXQsc2hpcHBpbmdBZGRyZXNzLHNoaXBwaW5nQ2l0eSxjdXN0b21lckRlc2NyaXB0aW9uLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHN1cHBsaWVyU2NoZW1hOiAnKytpZCxfaWQsc3VwcGxpZXJOYW1lLHN0b3JlTmFtZSxjdXN0b21lclBob25lMSxjdXN0b21lclBob25lMixhZGRyZXNzLGRlc2NyaXB0aW9uLHN5bmNlZCcsXHJcbiAgICBpdGVtU2NoZW1hOiAnKytpZCxpdGVtTmFtZSxfaWQsaXRlbVVwYyx0eXBlSXRlbSxpdGVtU3RvcmUsdW5pdCxpdGVtRGltZW5zaW9uLGl0ZW1XZWlnaHQsaXRlbUNhdGVnb3J5LGl0ZW1NYW51ZmFjdHVyZXIsaXRlbUJyYW5kLGl0ZW1Db3N0UHJpY2UsaXRlbVF1YW50aXR5LGl0ZW1TZWxsaW5nUHJpY2UsaXRlbURlc2NyaXB0aW9uLHN0b2NrT25IYW5kLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIGl0ZW1TY2hlbWFWaWV3OiAnKytpZCxfaWQnLFxyXG4gICAgZGFpbHlFeHBlbnNlU2NoZW1hOiAnKytleHBlbnNlTnVtYmVyLF9pZCxleHBlbnNlQ2F0ZWdvcnksYWNjb3VudE5hbWUsZGVzY3JpcHRpb24sZXhwZW5zZURhdGUsYW1vdW50LGVtcGxveWVlTmFtZSxyYXRlLHRvdGFsLGFjY291bnROYW1lSW5mbyxyZWFzb24sQ3JlYXRlLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIGRhaWx5RXhwZW5zZVZpZXdTY2hlbWE6ICcrK2V4cGVuc2VOdW1iZXIsX2lkJyxcclxuICAgIGhpZGRlblNjaGVtYTogJysraWQsX2lkLGlkUm93LGhpZGRlbkJ5Q0VPJyxcclxuICAgIGl0ZW1Db2RlU2NoZW1hOiAnKytpZCxpdGVtQ2F0ZWdvcnksX2lkLGl0ZW1Db2RlJyxcclxuICAgIGl0ZW1Vbml0U2NoZW1hOiAnKytpZCxpdGVtVW5pdCxfaWQnLFxyXG4gICAgZGVwYXJ0bWVudFNjaGVtYTogJysraWQsZGVwYXJ0bWVudCxfaWQnLFxyXG4gICAgZXN0aW1hdGVTY2hlbWE6ICcrK2VzdGltYXRlTnVtYmVyLF9pZCxjdXN0b21lck5hbWUsZXN0aW1hdGVEYXRlLGVzdGltYXRlRGVmZWN0LGVzdGltYXRlU3ViamVjdCxzdGF0dXMsaXRlbXMsc3ViVG90YWwsdG90YWwsdG90YWxXLG5vdGUsZXN0aW1hdGVOYW1lLENyZWF0ZSxiYWxhbmNlRHVlLHRlcm1zLHNoaXBwaW5nLG5vdGVJbmZvLGFkanVzdG1lbnQsYWRqdXN0bWVudE51bWJlcix0b3RhbEludm9pY2UsUmVmLFJlZmVyZW5jZU5hbWUsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgaW52b2ljZVNjaGVtYTogJysraW52b2ljZU51bWJlcixfaWQsY3VzdG9tZXJOYW1lLGludm9pY2VEYXRlLGludm9pY2VEdWVEYXRlLGludm9pY2VTdWJqZWN0LGludm9pY2VQdXJjaGFzZSxpbnZvaWNlRGVmZWN0LHN0YXR1cyxpdGVtcyxzdWJUb3RhbCxSZWZlcmVuY2VOYW1lLFJlZmVyZW5jZU5hbWUyLHRvdGFsLG5vdGVJbmZvLGJhbGFuY2VEdWUsdG90YWxXLGFjdGlvblRha2VuLGludm9pY2VOYW1lLFBvc2l0aW9uLG5vdGUsQ3JlYXRlLHNoaXBwaW5nLGFkanVzdG1lbnQsYWRqdXN0bWVudE51bWJlcix0b3RhbEludm9pY2UsdGVybXMsUmVmLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIGludm9pY2VWaWV3U2NoZW1hOiAnKytpbnZvaWNlTnVtYmVyLF9pZCcsXHJcbiAgICBwb3NTY2hlbWE6ICcrK2ZhY3R1cmVOdW1iZXIsX2lkLGN1c3RvbWVyTmFtZSxpbnZvaWNlRGF0ZSx0aW1lLHN0YXR1cyxpdGVtcyxzdWJUb3RhbCx0b3RhbEZDLHRvdGFsVVNELHJhdGUsQ3JlYXRlLGJhbGFuY2VEdWUsbm90ZSx0b3RhbEludm9pY2Usc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgcGF5bWVudFNjaGVtYTogJysrcGF5bWVudE51bWJlcixfaWQsY3VzdG9tZXJOYW1lLGFtb3VudCxiYW5rQ2hhcmdlLG1vZGVzLHBheW1lbnREYXRlLHJlZmVyZW5jZU51bWJlcixkZXNjcmlwdGlvbixyZW1haW5pbmcsQ3JlYXRlLFBheW1lbnRSZWNlaXZlZEZDLFBheW1lbnRSZWNlaXZlZFVTRCxUb3RhbEFtb3VudCxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBwcm9qZWN0U2NoZW1hOiAnKytwcm9qZWN0TnVtYmVyLF9pZCxjdXN0b21lck5hbWUscHJvamVjdE5hbWUsc3RhdHVzLHBoYXNlLGRlc2NyaXB0aW9uLHN0YXJ0RGF0ZSx2aXNpdERhdGUsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgcHVyY2hhc2VTY2hlbWE6ICcrK3B1cmNoYXNlTnVtYmVyLF9pZCxjdXN0b21lck5hbWUsbm90ZUluZm8sZXN0aW1hdGVEZWZlY3QsZXN0aW1hdGVTdWJqZWN0LHB1cmNoYXNlTmFtZSxwcm9qZWN0TmFtZSxkZXNjcmlwdGlvbixQb3NpdGlvbixwdXJjaGFzZURhdGUsc3RhdHVzLHN0YXR1c0luZm8saXRlbXMscHVyY2hhc2VBbW91bnQxLHB1cmNoYXNlQW1vdW50MixSZWZlcmVuY2VOYW1lLFJlZmVyZW5jZU5hbWUyLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHB1cmNoYXNlU2NoZW1hVmlldzogJysrcHVyY2hhc2VOdW1iZXIsX2lkJyxcclxuICAgIG1haW50ZW5hbmNlU2NoZW1hOiAnKytzZXJ2aWNlTnVtYmVyLGN1c3RvbWVyTmFtZSxfaWQsYWN0aW9uLHNlcnZpY2VOYW1lLHNlcnZpY2VEYXRlLGxhYm9yUXR5LHRvdGFsTGFib3JGZWVzR2VuZXJhbGUsdGVjaG5pY2lhbkFzc2lnbixub3RlLHRvdGFsTGFib3JGZWVzLGxhYm9yUGVyY2VudGFnZSx0b3RhbERpc2NvdW50LGxhYm9yRGlzY291bnQsdmlzaXREYXRlLHN0YXR1cyxpdGVtcyxpdGVtRGVzY3JpcHRpb25JbmZvLGJyYW5kLGFjdGlvblRha2VuLG1vZGVsLHdhcnJhbnR5LHNlcmlhbE5vLGRlZmVjdERlc2NyaXB0aW9uLGFkanVzdG1lbnQsYWRqdXN0bWVudE51bWJlcix0b3RhbEludm9pY2Usc3ViVG90YWwsQ29udmVydGVkLFJlZmVyZW5jZU5hbWUsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgbWFpbnRlbmFuY2VWaWV3U2NoZW1hOiAnKytzZXJ2aWNlTnVtYmVyLF9pZCcsXHJcbiAgICBlbXBsb3llZVNjaGVtYTogJysrZW1wbG95ZWVJZCxfaWQsam9pbkRhdGUsZW1wbG95ZWVOYW1lLGVtcGxveWVlQWRkcmVzcyxlbXBsb3llZUVtYWlsLGVtcGxveWVlUGhvbmUsZW1wbG95ZWVSb2xlLGRlcGFydG1lbnQsZGF0ZU9mQmlydGgsR2VuZGVyLHN0YXR1cyxzdGF0dXNNYXJpdGFsLGlkZW50aWZpZXIsaWRlbnRpZmllck51bWJlcixleHBpcmVEYXRlLHNhbGFyeSxyZWFzb24xLGRlc2NyaXB0aW9uLGJhbmtBY2NvdW50TnVtYmVyLGJhbmtOYW1lLG90aGVyLGJvdW5jZUFsbG93YW5jZXMsZm9vZEJhc2ljLGJhc2ljVHJhbnNwb3J0LHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHBheVJvbGxTY2hlbWE6ICcrK3BheU51bWJlcixfaWQscGF5RGF0ZSxtb250aCxkYXlzVyxzdGF0dXMsZGF5c09wZW4sTG9wcyxiYXNpY1NhbGFyeSxlYXJuaW5nU2FsYXJ5LGFkdmFuY2VkU2FsYXJ5LGJhc2ljVHJhbnNwb3J0LHRyYW5zcG9ydEVhcm5pbmcsdHJhbnNwb3J0RGVkdWN0aW9uLGZvb2RCYXNpYyxmb29kRWFybmluZyxpdGVtTG9zdCxmb29kRGVkdWN0aW9uLGJvdW5jZUFsbG93YW5jZXMsYm91bmNlQWxsb3dhbmNlc0Vhcm5pbmcsb3RoZXIsb3RoZXJFYXJuaW5nLGxvYW4sYm9udXMsdG90YWxBY3R1YWxTYWxhcnksdG90YWxBY3R1YWxFYXJuaW5nLHRvdGFsQWN0dWFsRGVkdWN0aW9uLHRvdGFsTmV0LHRvdGFsUGFpZCxyYXRlLHRvdGFsUGFpZERvbGxhcnMsd29yZHMsZW1wbG95ZWVOYW1lLGFtb3VudFBheVVTRCxhbW91bnRQYXlGQyxDcmVkaXRGQyxDcmVkaXRVU0Qsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgZW1wbG95ZWVVc2VyU2NoZW1hOiAnX2lkLGVtcGxveWVlTmFtZSxlbXBsb3llZUVtYWlsLHJvbGUscGFzc3dvcmQsdmVyaWZpY2F0aW9uQ29kZSxjb2RlRXhwaXJhdGlvbixzeW5jZWQsdXBkYXRlUycsXHJcbiAgICB1c2VyQWNjb3VudDogJ2lkSW5mbyxlbXBsb3llZU5hbWUscGFzc3dvcmQnLFxyXG4gICAgZ3JhbnRBY2Nlc3NTY2hlbWE6ICcrK2lkLGVtcGxveWVlTmFtZSxfaWQsdXNlcklELG1vZHVsZXMnLFxyXG4gICAgY2FzaFNjaGVtYTogJysrY2FzaE51bWJlcixfaWQsY2FzaERhdGUsc3RhdHVzLHRvdGFsQ2FzaCxhbW91bnQsdG90YWxJdGVtUHVyY2hhc2VVU0QsdG90YWxQYXlyb2xsVVNELHRvdGFsRXhwZW5zZXNVU0QsdG90YWxFeHBlbnNlc0ZDLHRvdGFsQ2FzaFVTRCx0b3RhbENhc2hGQyxyZXR1cm5BbW91bnRGQyxyZXR1cm5BbW91bnRVU0QsUmVtYWluaW5nQW1vdW50RkMsUmVtYWluaW5nQW1vdW50VVNELENyZWF0ZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICByYXRlU2NoZW1hOiAnKytpZCxfaWQscmF0ZScsXHJcbiAgICBwYXltZW50UmF0ZVNjaGVtYTogJysraWQsX2lkLHBheW1lbnRSYXRlJyxcclxuICAgIGRhaWx5RXhwZW5zZXNDYXRlZ29yeVNjaGVtYTogJysraWQsX2lkLGV4cGVuc2VzQ2F0ZWdvcnknLFxyXG4gICAgZW1wbG95ZWVBdHRlbmRhbmNlU2NoZW1hOiAnKytpZEluZm8sX2lkLGlkLHRpbWVJbix0aW1lT3V0LG5hbWUsb2JzZXJ2YXRpb24sbm90ZSxkYXlzV04sc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgaXRlbVB1cmNoYXNlU2NoZW1hOiAnKytpdGVtUHVyY2hhc2VOdW1iZXIsX2lkLGl0ZW1QdXJjaGFzZURhdGUsbWFudWZhY3R1cmVyLG1hbnVmYWN0dXJlck51bWJlcixkZXNjcmlwdGlvbixub3RlLENyZWF0ZSx0b3RhbCx0b3RhbEZDLGl0ZW1zLHJlYXNvbixwcm9qZWN0TmFtZScsXHJcbiAgICBpdGVtUHVyY2hhc2VWaWV3U2NoZW1hOiAnKytpdGVtUHVyY2hhc2VOdW1iZXIsX2lkJyxcclxuICAgIGl0ZW1SZXR1cm46ICcrK291dE51bWJlcixfaWQsaXRlbU91dERhdGUscmVhc29uLHJlZmVyZW5jZSxpdGVtc1F0eUFycmF5LGRlc2NyaXB0aW9uLENyZWF0ZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBpdGVtUmV0dXJuVmlldzogJysrb3V0TnVtYmVyLF9pZCcsXHJcbiAgICBpdGVtT3V0U2NoZW1hOiAnKytpZEluZm8sb3V0TnVtYmVyLF9pZCxpdGVtT3V0RGF0ZSxyZWFzb24scmVmZXJlbmNlLGl0ZW1zUXR5QXJyYXksZGVzY3JpcHRpb24sQ3JlYXRlLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIGl0ZW1PdXRWaWV3U2NoZW1hOiAnKytpZEluZm8sX2lkJyxcclxuICAgIHB1cmNoYXNlT3JkZXI6ICcrK291dE51bWJlcixfaWQsdG90YWxVU0QsdG90YWwsdG90YWxGQyxpdGVtT3V0RGF0ZSxyZWFzb24scmVmZXJlbmNlLGl0ZW1zUXR5QXJyYXksbWFudWZhY3R1cmVyLHN0YXR1cyxDb252ZXJ0ZWQsbWFudWZhY3R1cmVyTnVtYmVyLGRlc2NyaXB0aW9uLElwUmVsYXRlZCxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBwdXJjaGFzZU9yZGVyVmlldzogJysrb3V0TnVtYmVyLF9pZCcsXHJcbiAgICBwbGFuaW5nU2NoZW1hOiAnKytpZEluZm8scGxhbmluZ0RhdGUsZW1wbG95ZWVOYW1lLGVtcGxveWVlSUQscHJvamVjdE5hbWUsZGF5UGF5VVNkLHdvcmtOdW1iZXIsc3RhdHVzLHBsYW5pbmdEZXNjcmlwdGlvbixwbGFuaW5nVGFzaycsXHJcbiAgICByYXRlUmV0dXJuU2NoZW1hOiAnKytpZCwgX2lkLCByYXRlUicsXHJcblxyXG4gICAgLy8gQ2FjaGUgdGFibGVzIGZvciBoeWJyaWQgYXJjaGl0ZWN0dXJlICh2Mi40LjApXHJcbiAgICAvLyBUaGVzZSBzdG9yZSBmdWxsIGRhdGFzZXRzIGxvY2FsbHkgZm9yIGluc3RhbnQgcXVlcmllc1xyXG4gICAgaXRlbVB1cmNoYXNlQ2FjaGU6ICdfaWQsIGl0ZW1QdXJjaGFzZURhdGUsIGl0ZW1zLCBtYW51ZmFjdHVyZXInLFxyXG4gICAgaXRlbU91dENhY2hlOiAnX2lkLCBpdGVtT3V0RGF0ZSwgaXRlbXNRdHlBcnJheScsXHJcbiAgICBwb3NDYWNoZTogJ19pZCwgaW52b2ljZURhdGUsIGl0ZW1zLCBjdXN0b21lck5hbWUnLFxyXG4gICAgaXRlbVJldHVybkNhY2hlOiAnX2lkLCBpdGVtT3V0RGF0ZSwgaXRlbXNRdHlBcnJheScsXHJcbiAgICBpbnZvaWNlQ2FjaGU6ICdfaWQsIGludm9pY2VOdW1iZXIsIGN1c3RvbWVyTmFtZSwgaW52b2ljZURhdGUsIGl0ZW1zJyxcclxuICAgIGVzdGltYXRlQ2FjaGU6ICdfaWQsIGVzdGltYXRlTnVtYmVyLCBjdXN0b21lck5hbWUsIGVzdGltYXRlRGF0ZSwgaXRlbXMnLFxyXG4gICAgY3VzdG9tZXJDYWNoZTogJ19pZCwgY3VzdG9tZXJGdWxsTmFtZSwgY29tcGFueU5hbWUsIGN1c3RvbWVyRW1haWwnLFxyXG4gICAgc3VwcGxpZXJDYWNoZTogJ19pZCwgc3VwcGxpZXJOYW1lLCBzdG9yZU5hbWUnLFxyXG4gICAgcHJvamVjdENhY2hlOiAnX2lkLCBwcm9qZWN0TnVtYmVyLCBwcm9qZWN0TmFtZSwgY3VzdG9tZXJOYW1lJyxcclxuICAgIG1haW50ZW5hbmNlQ2FjaGU6ICdfaWQsIHNlcnZpY2VOdW1iZXIsIHNlcnZpY2VOYW1lLCBjdXN0b21lck5hbWUsIGl0ZW1zJyxcclxuICAgIGVtcGxveWVlQ2FjaGU6ICdfaWQsIGVtcGxveWVlTmFtZSwgZW1wbG95ZWVFbWFpbCwgZW1wbG95ZWVSb2xlLCBkZXBhcnRtZW50JyxcclxuICAgIHBheXJvbGxDYWNoZTogJ19pZCwgcGF5TnVtYmVyLCBwYXlEYXRlLCBtb250aCwgZW1wbG95ZWVOYW1lJyxcclxuICAgIHJhdGVDYWNoZTogJ19pZCwgcmF0ZScsXHJcbiAgICB1c2VyQ2FjaGU6ICdfaWQsIGVtcGxveWVlTmFtZSwgcm9sZScsXHJcbiAgICBncmFudEFjY2Vzc0NhY2hlOiAnX2lkLCB1c2VySUQsIGVtcGxveWVlTmFtZSwgbW9kdWxlcycsXHJcbiAgICBjb21wYW55UHJvZmlsZUNhY2hlOiAnX2lkJyxcclxuICAgIHB1cmNoYXNlT3JkZXJDYWNoZTogJ19pZCwgb3V0TnVtYmVyLCBtYW51ZmFjdHVyZXIsIHN0YXR1cycsXHJcbiAgICBwYXltZW50Q2FjaGU6ICdfaWQsIHBheW1lbnROdW1iZXIsIGN1c3RvbWVyTmFtZSwgcGF5bWVudERhdGUnLFxyXG4gICAgY2FzaENhY2hlOiAnX2lkLCBjYXNoTnVtYmVyLCBjYXNoRGF0ZSwgc3RhdHVzJyxcclxuICAgIGRhaWx5RXhwZW5zZUNhY2hlOiAnX2lkLCBleHBlbnNlTnVtYmVyLCBleHBlbnNlQ2F0ZWdvcnksIGV4cGVuc2VEYXRlJyxcclxuICAgIC8vIFN5bmMgbWV0YWRhdGFcclxuICAgIHN5bmNNZXRhZGF0YTogJysraWQsIHRhYmxlTmFtZSwgbGFzdFN5bmMsIHJlY29yZENvdW50J1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidG9hc3QiLCJTaWRlYmFyRGFzaDEiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJEZWxldGVJY29uIiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlBhcGVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkJveCIsIkF1dG9jb21wbGV0ZSIsIk1vZGFsIiwiQmFja2Ryb3AiLCJUYWJsZUNvbnRhaW5lciIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIkRpdmlkZXIiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJBZGQiLCJBcnJvd1Vwd2FyZE91dGxpbmVkIiwiRHJhZ0luZGljYXRvclJvdW5kZWQiLCJFZGl0IiwiUmVmcmVzaCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJ2NCIsInVzZU5hdmlnYXRlIiwiRU5EUE9JTlRfVVJMIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImludmFsaWRhdGVDYWNoZSIsImRheWpzIiwiQXJyb3dCYWNrIiwiU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIiwiQWRkU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkxvYWRlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJDbG9zZSIsIkRyYXdlciIsIlNpZGVEcmF3ZXIiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkTWVkaWEiLCJCdXR0b24iLCJQYWdpbmF0aW9uIiwiQ3VzdG9tZXJGb3JtVmlldzIiLCJJdGVtRm9ybVZpZXcyIiwiSXRlbVVwZGF0ZVZpZXcyIiwiSXRlbVRodW1ibmFpbCIsIm51bWJlclRvV29yZHMiLCJEcmFnRHJvcENvbnRleHQiLCJEcmFnZ2FibGUiLCJEcm9wcGFibGUiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJkYiIsIkxpZ2h0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiQmxhY2tUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsInN0eWxlMiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjUiLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiX3JlZjYiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJJbnZvaWNlRm9ybSIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY3IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJyZXNMb2NhbEluZm8iLCJlbXBsb3llZVVzZXJTY2hlbWEiLCJfaWQiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJhcGlVcmwiLCJfdXNlU3RhdGUiLCJkYXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImludm9pY2VEYXRlIiwic2V0SW52b2ljZURhdGUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImludm9pY2VEdWVEYXRlIiwic2V0SW52b2ljZUR1ZURhdGUiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImludm9pY2VTdWJqZWN0Iiwic2V0SW52b2ljZVN1YmplY3QiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImludm9pY2VEZWZlY3QiLCJzZXRJbnZvaWNlRGVmZWN0IiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJpbnZvaWNlTnVtYmVyIiwic2V0SW52b2ljZU51bWJlciIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIml0ZW1zIiwiU2V0SXRlbXMiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwic3ViVG90YWwiLCJzZXRTdWJUb3RhbCIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJ0b3RhbCIsInNldFRvdGFsIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsInNoaXBwaW5nIiwic2V0U2hpcHBpbmciLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwiYWRqdXN0bWVudCIsInNldEFkanVzdG1lbnQiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiYWRqdXN0bWVudE51bWJlciIsInNldEFkanVzdG1lbnROdW1iZXIiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwidG90YWxJbnZvaWNlIiwic2V0VG90YWxJbnZvaWNlIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImJhbGFuY2VEdWUiLCJzZXRCYWxhbmNlRHVlIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsInRvdGFsVyIsInNldFRvdGFsVyIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJJdGVtSW5mb3JtYXRpb24iLCJzZXRJdGVtSW5mb3JtYXRpb24iLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwibm90ZSIsInNldE5vdGUiLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwibm90ZUluZm8iLCJzZXROb3RlSW5mbyIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJzaG9wT3BlbiIsInNldFNob3BPcGVuIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsInNob3BJdGVtcyIsInNldFNob3BJdGVtcyIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJzaG9wU2VhcmNoIiwic2V0U2hvcFNlYXJjaCIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJzaG9wUGFnZSIsInNldFNob3BQYWdlIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsInNob3BUb3RhbFBhZ2VzIiwic2V0U2hvcFRvdGFsUGFnZXMiLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0IiwicmF0ZSIsInNldFJhdGUiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2Iiwic2hvcExvYWRpbmciLCJzZXRTaG9wTG9hZGluZyIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJ0ZXJtcyIsInNldFRlcm1zIiwiZGF0ZUNvbW1lbnQiLCJpbnZvaWNlTmFtZSIsIlN0cmluZyIsInBhZFN0YXJ0IiwiZmV0Y2hsYXN0TnVtYmVyIiwiX3JlZjgiLCJfcmVzJGRhdGEiLCJfcmVzJGRhdGEyIiwicGFyc2VJbnQiLCJvZmZMaW5lQ3VzdG9tZXIxIiwiaW52b2ljZVNjaGVtYSIsInRvQXJyYXkiLCJsYXRlc3QiLCJyZWR1Y2UiLCJtYXgiLCJyb3ciLCJmZXRjaEl0ZW0iLCJfcmVmOSIsInJldmVyc2UiLCJpdGVtU2NoZW1hIiwiZmV0Y2hTaG9wIiwiX3JlZjAiLCJyZXNSYXRlIiwiZm9yRWFjaCIsImVuY29kZVVSSUNvbXBvbmVudCIsInRvdGFsUGFnZXMiLCJmaWx0ZXIiLCJ0eXBlSXRlbSIsIm9mZkxpbmVSYXRlIiwicmF0ZVNjaGVtYSIsImhhbmRsZVJlZnJlc2hTaG9wIiwiaGFuZGxlU2hvcFBhZ2VDaGFuZ2UiLCJlIiwibmV3UGFnZSIsImhhbmRsZVNob3BTZWFyY2hDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvZ2dsZVNob3AiLCJoYW5kbGVBZGRUb0ludm9pY2UiLCJzaG9wSXRlbSIsImV4aXN0aW5nSXRlbUluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsIml0ZW1OYW1lIiwidXBkYXRlZEl0ZW1zIiwiY3VycmVudEl0ZW0iLCJuZXdRdHkiLCJpdGVtUXR5Iiwic3RvY2siLCJpdGVtQW1vdW50IiwiTWF0aCIsInJvdW5kIiwiaXRlbVJhdGUiLCJ0b3RhbEFtb3VudCIsImRpc2NvdW50IiwiaXRlbURpc2NvdW50IiwicGVyY2VudGFnZSIsInRvdGFsQ29zdCIsIml0ZW1Db3N0IiwidG90YWxHZW5lcmFsZSIsIml0ZW1CdXkiLCJuZXdJdGVtIiwiaWRSb3ciLCJjb250ZW50VHlwZSIsIml0ZW1EZXNjcmlwdGlvbiIsIml0ZW1TZWxsaW5nUHJpY2UiLCJpdGVtQ29zdFByaWNlIiwiaXRlbVdlaWdodCIsIml0ZW1RdWFudGl0eSIsIml0ZW1PdXQiLCJuZXdJdGVtT3V0IiwiaGFuZGxlQ2hhbmdlSXRlbSIsIm5ld1ZhbHVlIiwic2VsZWN0ZWRPcHRpb25zIiwibWFwIiwiaGFuZGxlQ2hhbmdlIiwiaSIsIl9lJHRhcmdldCIsIm5hbWUiLCJsaXN0IiwiaGFuZGxlQ2hhbmdlQ0VPIiwiX2UkdGFyZ2V0MiIsImFkZEl0ZW0iLCJhZGRJdGVtV2hpdGUiLCJuZXdEZXNjcmlwdGlvbiIsImFkZEl0ZW1Sb3ciLCJ1cGRhdGUiLCJzcGxpY2UiLCJhZGRJdGVtV2hpdGVSb3ciLCJoYW5kbGVEcmFnRW5kIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJuZXdJdGVtcyIsIl9uZXdJdGVtcyRzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsIl9uZXdJdGVtcyRzcGxpY2UyIiwicmVtb3ZlZCIsImRlbGV0ZUl0ZW0iLCJJdGVtIiwiZmlsdGVySXRlbUluZm9ybWF0aW9uIiwib3B0aW9uIiwiZmluZCIsIl9yb3ckaXRlbU5hbWUiLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlIiwiaGFuZGxlU2hvd0F1dG9jb21wbGV0ZURlc2NyaXB0aW9uIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsIm9wZW5JdGVtVXBkYXRlIiwic2V0T3Blbkl0ZW1VcGRhdGUiLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwiaWRJdGVtIiwic2V0SWRJdGVtIiwiaGFuZGxlT3Blbkl0ZW1VcGRhdGUiLCJfcmVmMSIsImlkIiwiX3giLCJoYW5kbGVDbG9zZUl0ZW1VcGRhdGUiLCJfcmVmMTAiLCJfcm93JGl0ZW1OYW1lMiIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJjdXN0b21lciIsInNldEN1c3RvbWVyIiwiZmV0Y2hDdXN0b21lciIsIl9yZWYxMSIsImN1c3RvbWVyU2NoZW1hIiwiX3VzZVN0YXRlNTUiLCJfdXNlU3RhdGU1NiIsImN1c3RvbWVyTmFtZSIsInNldEN1c3RvbWVyTmFtZSIsIl91c2VTdGF0ZTU3IiwiX3VzZVN0YXRlNTgiLCJvcGVuQXV0b2NvbXBsZXRlMSIsInNldE9wZW5BdXRvY29tcGxldGUxIiwiaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUxIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMSIsImhhbmRsZUNyZWF0ZUN1c3RvbWVyIiwibmV3Q3VzdG9tZXIiLCJoYW5kbGVDaGFuZ2VDdXN0b21lciIsIkN1c3RvbWVyIiwiYmlsbGluZ0FkZHJlc3MiLCJiaWxsaW5nQ2l0eSIsInBheW1lbnRUZXJtcyIsImN1cnJlbnREYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsIl91c2VTdGF0ZTU5IiwiX3VzZVN0YXRlNjAiLCJvcGVuQXV0b2NvbXBsZXRlMiIsInNldE9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZUNyZWF0ZUl0ZW0iLCJyZXN1bHQxIiwic3VtIiwicGFyc2VGbG9hdCIsInZhbCIsImlzRmluaXRlIiwidG9GaXhlZCIsIm5ld1RvdGFsIiwiTnVtYmVyIiwibmV3QmFsYW5jZSIsIndob2xlUGFydCIsImZsb29yIiwiZnJhY3Rpb25hbFBhcnQiLCJzcGxpdCIsIndob2xlV29yZHMiLCJ0b1dvcmRzIiwiZnJhY3Rpb25hbFdvcmRzIiwiX3VzZVN0YXRlNjEiLCJfdXNlU3RhdGU2MiIsIm9wZW4xIiwic2V0T3BlbjEiLCJoYW5kbGVPcGVuQmFjayIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VCYWNrIiwiX3VzZVN0YXRlNjMiLCJfdXNlU3RhdGU2NCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlNjUiLCJfdXNlU3RhdGU2NiIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlNjciLCJfdXNlU3RhdGU2OCIsImxvYWRpbmdPcGVuTW9kYWxVcGRhdGUiLCJzZXRMb2FkaW5nT3Blbk1vZGFsVXBkYXRlIiwiX3VzZVN0YXRlNjkiLCJfdXNlU3RhdGU3MCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZU9wZW5VcGRhdGUiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVDbG9zZVVwZGF0ZSIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVEZWNpc2lvbiIsImhpc3RvcnkiLCJiYWNrIiwiX3VzZVN0YXRlNzEiLCJfdXNlU3RhdGU3MiIsInJlZmVyZW5jZUluZm8iLCJzZXRSZWZlcmVuY2VJbmZvIiwiaW52b2ljZVB1cmNoYXNlIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjEyIiwiUmVmZXJlbmNlSW5mbyIsIlJlZmVyZW5jZUluZm9OdW1iZXIiLCJpZEluZm8iLCJwZXJzb24iLCJyZWFzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwicG9zdCIsImxvZyIsIl94MiIsIl94MyIsIl91c2VTdGF0ZTczIiwiX3VzZVN0YXRlNzQiLCJzYXZpbmciLCJzZXRTYXZpbmciLCJoYW5kbGVTdWJtaXQiLCJfcmVmMTMiLCJzdGF0dXMiLCJpdGVtc1dpdGhvdXREYXRhIiwiX3JlZjE0IiwicmVzdCIsIl9leGNsdWRlZDMiLCJzeW5jZWQiLCJwdXQiLCJfeDQiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJwYWRkaW5nIiwieHMiLCJkaXNhYmxlQ2xlYXJhYmxlIiwib3B0aW9ucyIsImdldE9wdGlvbkxhYmVsIiwib25DaGFuZ2UiLCJQYXBlckNvbXBvbmVudCIsIl9yZWYxNSIsImNoaWxkcmVuIiwib3RoZXIiLCJfZXhjbHVkZWQ0IiwibWFyZ2luVG9wIiwiZGlzYWJsZWQiLCJvbk1vdXNlRG93biIsInJlbmRlcklucHV0IiwicGFyYW1zIiwibGFiZWwiLCJyZXF1aXJlZCIsImh0bWxGb3IiLCJ0eXBlIiwic3RhcnRBZG9ybm1lbnQiLCJkYXRlQWRhcHRlciIsImNvbXBvbmVudHMiLCJmb3JtYXQiLCJtdWx0aWxpbmUiLCJyb3dzIiwiZmxvYXQiLCJyaWdodCIsInRpdGxlIiwicGxhY2VtZW50Iiwib25EcmFnRW5kIiwiZHJvcHBhYmxlSWQiLCJwcm92aWRlZCIsInNuYXBzaG90IiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsImtleSIsImRyYWdnYWJsZUlkIiwiX0l0ZW0kaXRlbU5hbWUiLCJfSXRlbSRpdGVtTmFtZTIiLCJkcmFnZ2FibGVQcm9wcyIsInVuZGVmaW5lZCIsIkZyYWdtZW50IiwiZHJhZ0hhbmRsZVByb3BzIiwiY29sU3BhbiIsInNpemUiLCJjdXJzb3IiLCJnYXAiLCJpdGVtSWQiLCJpbml0aWFsRGF0YSIsImluaXRpYWxUeXBlIiwiZmxleERpcmVjdGlvbiIsImhpZGRlbiIsImZvbnRXZWlnaHQiLCJ0b1VwcGVyQ2FzZSIsIl9JdGVtJGl0ZW1OYW1lMyIsIml0ZW1CcmFuZCIsInJlbmRlck9wdGlvbiIsIm9uSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5ld0lucHV0VmFsdWUiLCJmaWx0ZXJPcHRpb25zIiwiX3JlZjE2IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIl9yZWYxNyIsIl9leGNsdWRlZDUiLCJwbGFjZWhvbGRlciIsInJlcGxhY2UiLCJfSXRlbSRpdGVtTmFtZTQiLCJfSXRlbSRpdGVtTmFtZTUiLCJfSXRlbSRpdGVtTmFtZTYiLCJfcmVmMTgiLCJfcmVmMTkiLCJfZXhjbHVkZWQ2IiwiYm9yZGVyQ29sbGFwc2UiLCJib3JkZXJCb3R0b20iLCJ0ZXh0QWxpZ24iLCJhbGlnbiIsIm1heFJvd3MiLCJvbkNsb3NlIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwiYW5jaG9yIiwiUGFwZXJQcm9wcyIsIm1iIiwiZnVsbFdpZHRoIiwibWwiLCJvdmVyZmxvd1kiLCJtYXhIZWlnaHQiLCJfcmVmMjAiLCJfaXRlbSRpdGVtU2VsbGluZ1ByaWMiLCJpbWFnZSIsImFsdCIsIm9iamVjdEZpdCIsImd1dHRlckJvdHRvbSIsImNvdW50IiwicGFnZSIsIm9uQ3JlYXRlT3B0aW9uIiwiQXZhdGFyIiwic3JjIiwic2V0U3JjIiwiZmV0Y2hJbWFnZSIsImxlbmd0aCIsInN0YXJ0c1dpdGgiLCJidWZmZXIiLCJVaW50OEFycmF5IiwiYmxvYiIsIkJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVhZEFzRGF0YVVSTCIsImVyciIsImJvcmRlciIsIk91dGxldCIsIk5hdkxpbmsiLCJMaW5rIiwidXNlTG9jYXRpb24iLCJEYXNoYm9hcmRJY29uIiwiUGVybUlkZW50aXR5SWNvbiIsIkxpc3RBbHRJY29uIiwiRGVzY3JpcHRpb25JY29uIiwiUmVjZWlwdEljb24iLCJNb3ZpbmdJY29uIiwiU2V0dGluZ3NJY29uIiwiSW5zZXJ0RHJpdmVGaWxlSWNvbiIsIlJlc3RvcmVQYWdlSWNvbiIsIlJlcXVlc3RRdW90ZUljb24iLCJNb25ldGl6YXRpb25Pbkljb24iLCJFbmdpbmVlcmluZ0ljb24iLCJFeHBsaWNpdCIsIlNob3BwaW5nQmFnT3V0bGluZWQiLCJSb29tUHJlZmVyZW5jZXNJY29uIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJtYWtlU3R5bGVzIiwiUGF5bWVudEljb24iLCJNb3JlVmVydEljb24iLCJwcmltYXJ5IiwiRGV4aWUiLCJ2ZXJzaW9uIiwic3RvcmVzIiwic3VwcGxpZXJTY2hlbWEiLCJpdGVtU2NoZW1hVmlldyIsImRhaWx5RXhwZW5zZVNjaGVtYSIsImRhaWx5RXhwZW5zZVZpZXdTY2hlbWEiLCJoaWRkZW5TY2hlbWEiLCJpdGVtQ29kZVNjaGVtYSIsIml0ZW1Vbml0U2NoZW1hIiwiZGVwYXJ0bWVudFNjaGVtYSIsImVzdGltYXRlU2NoZW1hIiwiaW52b2ljZVZpZXdTY2hlbWEiLCJwb3NTY2hlbWEiLCJwYXltZW50U2NoZW1hIiwicHJvamVjdFNjaGVtYSIsInB1cmNoYXNlU2NoZW1hIiwicHVyY2hhc2VTY2hlbWFWaWV3IiwibWFpbnRlbmFuY2VTY2hlbWEiLCJtYWludGVuYW5jZVZpZXdTY2hlbWEiLCJlbXBsb3llZVNjaGVtYSIsInBheVJvbGxTY2hlbWEiLCJ1c2VyQWNjb3VudCIsImdyYW50QWNjZXNzU2NoZW1hIiwiY2FzaFNjaGVtYSIsInBheW1lbnRSYXRlU2NoZW1hIiwiZGFpbHlFeHBlbnNlc0NhdGVnb3J5U2NoZW1hIiwiZW1wbG95ZWVBdHRlbmRhbmNlU2NoZW1hIiwiaXRlbVB1cmNoYXNlU2NoZW1hIiwiaXRlbVB1cmNoYXNlVmlld1NjaGVtYSIsIml0ZW1SZXR1cm4iLCJpdGVtUmV0dXJuVmlldyIsIml0ZW1PdXRTY2hlbWEiLCJpdGVtT3V0Vmlld1NjaGVtYSIsInB1cmNoYXNlT3JkZXIiLCJwdXJjaGFzZU9yZGVyVmlldyIsInBsYW5pbmdTY2hlbWEiLCJyYXRlUmV0dXJuU2NoZW1hIiwiaXRlbVB1cmNoYXNlQ2FjaGUiLCJpdGVtT3V0Q2FjaGUiLCJwb3NDYWNoZSIsIml0ZW1SZXR1cm5DYWNoZSIsImludm9pY2VDYWNoZSIsImVzdGltYXRlQ2FjaGUiLCJjdXN0b21lckNhY2hlIiwic3VwcGxpZXJDYWNoZSIsInByb2plY3RDYWNoZSIsIm1haW50ZW5hbmNlQ2FjaGUiLCJlbXBsb3llZUNhY2hlIiwicGF5cm9sbENhY2hlIiwicmF0ZUNhY2hlIiwidXNlckNhY2hlIiwiZ3JhbnRBY2Nlc3NDYWNoZSIsImNvbXBhbnlQcm9maWxlQ2FjaGUiLCJwdXJjaGFzZU9yZGVyQ2FjaGUiLCJwYXltZW50Q2FjaGUiLCJjYXNoQ2FjaGUiLCJkYWlseUV4cGVuc2VDYWNoZSIsInN5bmNNZXRhZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=