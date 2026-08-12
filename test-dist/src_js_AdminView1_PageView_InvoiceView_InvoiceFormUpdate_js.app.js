"use strict";
exports.id = "src_js_AdminView1_PageView_InvoiceView_InvoiceFormUpdate_js";
exports.ids = ["src_js_AdminView1_PageView_InvoiceView_InvoiceFormUpdate_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/InvoiceView/InvoiceFormUpdate.js"
/*!*********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/InvoiceView/InvoiceFormUpdate.js ***!
  \*********************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Refresh.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../../../component/ItemThumbnail */ "./src/js/component/ItemThumbnail.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _dexieDb__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../../../dexieDb */ "./src/js/dexieDb.js");
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















































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref => {
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
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref3 => {
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
var DownTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
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
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_30__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
function InvoiceFormUpdate() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_42__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_42__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_51__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_51__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_52__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          if (navigator.onLine) {
            try {
              var res = yield axios__WEBPACK_IMPORTED_MODULE_21__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_43__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
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
            var resLocalInfo = yield _dexieDb__WEBPACK_IMPORTED_MODULE_65__["default"].employeeUserSchema.get({
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
        return _ref9.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_52__.logOut)());
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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    invoiceDate = _useState6[0],
    setInvoiceDate = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    invoiceDueDate = _useState8[0],
    setInvoiceDueDate = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    invoiceNumber = _useState0[0],
    setInvoiceNumber = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    invoiceSubject = _useState10[0],
    setInvoiceSubject = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    invoiceDefect = _useState12[0],
    setInvoiceDefect = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    note = _useState14[0],
    setNote = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    noteInfo = _useState16[0],
    setNoteInfo = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    statusInfo = _useState18[0],
    setStatusInfo = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    shopOpen = _useState20[0],
    setShopOpen = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    shopItems = _useState22[0],
    setShopItems = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState24 = _slicedToArray(_useState23, 2),
    shopSearch = _useState24[0],
    setShopSearch = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState26 = _slicedToArray(_useState25, 2),
    shopPage = _useState26[0],
    setShopPage = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState28 = _slicedToArray(_useState27, 2),
    shopTotalPages = _useState28[0],
    setShopTotalPages = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    rate = _useState30[0],
    setRate = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    shopLoading = _useState32[0],
    setShopLoading = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState34 = _slicedToArray(_useState33, 2),
    items = _useState34[0],
    SetItems = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState36 = _slicedToArray(_useState35, 2),
    actionTaken = _useState36[0],
    setActionTaken = _useState36[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState38 = _slicedToArray(_useState37, 2),
    subTotal = _useState38[0],
    setSubTotal = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState40 = _slicedToArray(_useState39, 2),
    total = _useState40[0],
    setTotal = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState42 = _slicedToArray(_useState41, 2),
    shipping = _useState42[0],
    setShipping = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Adjustment'),
    _useState44 = _slicedToArray(_useState43, 2),
    adjustment = _useState44[0],
    setAdjustment = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState46 = _slicedToArray(_useState45, 2),
    adjustmentNumber = _useState46[0],
    setAdjustmentNumber = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState48 = _slicedToArray(_useState47, 2),
    totalInvoice = _useState48[0],
    setTotalInvoice = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState50 = _slicedToArray(_useState49, 2),
    terms = _useState50[0],
    setTerms = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState52 = _slicedToArray(_useState51, 2),
    balanceDue = _useState52[0],
    setBalanceDue = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState54 = _slicedToArray(_useState53, 2),
    totalW = _useState54[0],
    setTotalW = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState56 = _slicedToArray(_useState55, 2),
    ItemInformation = _useState56[0],
    setItemInformation = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState58 = _slicedToArray(_useState57, 2),
    itemNewQty = _useState58[0],
    setItemNewQty = _useState58[1];
  var fetchData = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* () {
      if (navigator.onLine) {
        try {
          var _res$data, _res$data2, _res$data3, _res$data4;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_21__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_43__.ENDPOINT_URL, "/get-invoice/").concat(id));
          setCustomerName(res.data.data.customerName);
          setInvoiceDate(res.data.data.invoiceDate);
          setInvoiceDueDate(res.data.data.invoiceDueDate);
          setInvoiceNumber(Number(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.invoiceNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.invoiceNumber) || 0));
          setInvoiceSubject(res.data.data.invoiceSubject);
          setInvoiceDefect(res.data.data.invoiceDefect);
          SetItems(res.data.data.items);
          setSubTotal(res.data.data.subTotal);
          setStatusInfo(res.data.data.status);
          setTotal(res.data.data.total);
          setNote(res.data.data.note);
          setShipping(res.data.data.shipping);
          setAdjustment(res.data.data.adjustment);
          setAdjustmentNumber(Number(((_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.adjustmentNumber) || ((_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.adjustmentNumber) || 0));
          setTerms(res.data.data.terms);
          setNoteInfo(res.data.data.noteInfo);
          setActionTaken(res.data.data.actionTaken);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        var resLocal = yield _dexieDb__WEBPACK_IMPORTED_MODULE_65__["default"].invoiceSchema.get({
          _id: id
        });
        setCustomerName(resLocal.customerName);
        setInvoiceDate(resLocal.invoiceDate);
        setInvoiceDueDate(resLocal.invoiceDueDate);
        setInvoiceNumber(resLocal.invoiceNumber);
        setInvoiceSubject(resLocal.invoiceSubject);
        setInvoiceDefect(resLocal.invoiceDefect);
        SetItems(resLocal.items);
        setSubTotal(resLocal.subTotal);
        setStatusInfo(resLocal.status);
        setTotal(resLocal.total);
        setNote(resLocal.note);
        setShipping(resLocal.shipping);
        setAdjustment(resLocal.adjustment);
        setAdjustmentNumber(resLocal.adjustmentNumber);
        setTerms(resLocal.terms);
        setNoteInfo(resLocal.noteInfo);
        setActionTaken(resLocal.actionTaken);
      }
    });
    return function fetchData() {
      return _ref0.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchData();
  }, [id]);
  var fetchItem = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      if (navigator.onLine) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_21__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_43__.ENDPOINT_URL, "/item"));
          setItemInformation(res.data.data.reverse());
          var resC = yield axios__WEBPACK_IMPORTED_MODULE_21__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_43__.ENDPOINT_URL, "/customer"));
          setCustomer(resC.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        var offLineCustomer1 = yield _dexieDb__WEBPACK_IMPORTED_MODULE_65__["default"].itemSchema.toArray();
        setItemInformation(offLineCustomer1.reverse());
        var offLineCustomer = yield _dexieDb__WEBPACK_IMPORTED_MODULE_65__["default"].customerSchema.toArray();
        setCustomer(offLineCustomer.reverse());
      }
    });
    return function fetchItem() {
      return _ref1.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchItem();
  }, []);

  // Fetch Shop Items & Rate
  var fetchShop = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      setShopLoading(true);
      if (navigator.onLine) {
        try {
          var resRate = yield axios__WEBPACK_IMPORTED_MODULE_21__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_43__.ENDPOINT_URL, "/rate"));
          resRate.data.data.forEach(row => setRate(row.rate));
          var res = yield axios__WEBPACK_IMPORTED_MODULE_21__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_43__.ENDPOINT_URL, "/item-shop?page=").concat(shopPage, "&limit=20&search=").concat(encodeURIComponent(shopSearch)));
          setShopTotalPages(res.data.totalPages);
          setShopItems(res.data.items.filter(row => row.typeItem === "Goods").reverse());
          setShopLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setShopLoading(false);
        }
      } else {
        var offLineCustomer1 = yield _dexieDb__WEBPACK_IMPORTED_MODULE_65__["default"].itemSchema.toArray();
        setShopItems(offLineCustomer1.filter(row => row.typeItem === "Goods").reverse());
        setShopLoading(false);
        var offLineRate = yield _dexieDb__WEBPACK_IMPORTED_MODULE_65__["default"].rateSchema.toArray();
        offLineRate.forEach(row => setRate(row.rate));
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
  var handleAddToInvoiceUpdate = shopItem => {
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
        idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_44__["default"])(),
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
  //addItem
  var addItem = () => {
    SetItems([...items, {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_44__["default"])(),
      itemName: {},
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
    }]);
  };
  var addItemWhite = () => {
    SetItems([...items, {
      newDescription: "",
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
  var addItemRow = i => {
    var newItem = {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_44__["default"])(),
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
  var filterItemInformation = ItemInformation.filter(option => !items.find(row => {
    var _row$itemName;
    return option._id === ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName._id) && option.typeItem === "Goods";
  }));
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
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState62 = _slicedToArray(_useState61, 2),
    openBack = _useState62[0],
    setOpenBack = _useState62[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  {/** item start */}
  var status = '';
  var diffStatus = Math.round((parseFloat(totalInvoice) - parseFloat(total || 0)) * 100) / 100;
  if (statusInfo === 'Paid' || statusInfo === 'Partially-Paid' || statusInfo === 'Sent') {
    if (diffStatus <= 0 && parseFloat(totalInvoice) !== 0) {
      status = 'Paid';
    } else if (parseFloat(total || 0) > 0 && diffStatus > 0) {
      status = 'Partially-Paid';
    } else {
      status = 'Sent';
    }
  } else if (statusInfo === 'Draft') {
    if (diffStatus <= 0 && parseFloat(totalInvoice) !== 0) {
      status = 'Paid';
    } else if (parseFloat(total || 0) > 0 && diffStatus > 0) {
      status = 'Partially-Paid';
    } else {
      status = 'Draft';
    }
  } else if (statusInfo === 'Pending') {
    if (diffStatus <= 0 && parseFloat(totalInvoice) !== 0) {
      status = 'Paid';
    } else if (parseFloat(total || 0) > 0 && diffStatus > 0) {
      status = 'Partially-Paid';
    } else {
      status = 'Pending';
    }
  }
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
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState64 = _slicedToArray(_useState63, 2),
    openItemUpdate = _useState64[0],
    setOpenItemUpdate = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState66 = _slicedToArray(_useState65, 2),
    idItem = _useState66[0],
    setIdItem = _useState66[1];
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_21__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_43__.ENDPOINT_URL, "/get-item/").concat(idItem));
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
      return _ref12.apply(this, arguments);
    };
  }();
  {/** item End */}
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    open2 = _useState68[0],
    setOpen2 = _useState68[1];
  var handleOpenUpdateReason = e => {
    e.preventDefault();
    setOpen2(true);
  };
  var handleCloseUpdateReason = () => {
    setOpen2(false);
  };
  {/** Loading Start */}
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState70 = _slicedToArray(_useState69, 2),
    loading = _useState70[0],
    setLoading = _useState70[1];
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState72 = _slicedToArray(_useState71, 2),
    loadingOpenModal = _useState72[0],
    setLoadingOpenModal = _useState72[1];
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState74 = _slicedToArray(_useState73, 2),
    loadingUpdateItemOpenModal = _useState74[0],
    setLoadingUpdateItemOpenModal = _useState74[1];
  var _useState75 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState76 = _slicedToArray(_useState75, 2),
    ErrorOpenModal = _useState76[0],
    setErrorOpenModal = _useState76[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setOpen2(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setOpen2(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    navigate(-1);
  };
  var handleCloseUpdateItem = () => {
    setLoadingUpdateItemOpenModal(false);
    setItemNewQty(0);
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  {/** Loading End */}
  {/** Delete Row && Update Item Start */}
  var deleteItem = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (idRow) {
      SetItems(items => items.filter(Item => Item.idRow !== idRow));
    });
    return function deleteItem(_x2) {
      return _ref13.apply(this, arguments);
    };
  }();
  {/** Delete Row && Update Item End */}
  {/** Update Existing row start */}
  {/** Update Existing row End */}
  {/**Update New Row End*/}
  ;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result1 = items.reduce((sum, row) => sum + (parseFloat(row.itemAmount) || 0), 0);
    setSubTotal(result1.toFixed(2));
    var newTotal = Math.round((parseFloat(result1) + parseFloat(shipping || 0) + parseFloat(adjustmentNumber || 0)) * 100) / 100;
    setTotalInvoice(newTotal);
    var newBalance = Math.round((newTotal - (parseFloat(total) || 0)) * 100) / 100;
    setBalanceDue(newBalance);
  }, [items, shipping, adjustmentNumber, total]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (totalInvoice) {
      var wholePart = Math.floor(totalInvoice);
      var fractionalPart = (totalInvoice % 1).toFixed(2).split('.')[1];
      var wholeWords = number_to_words__WEBPACK_IMPORTED_MODULE_60___default().toWords(wholePart);
      var fractionalWords = number_to_words__WEBPACK_IMPORTED_MODULE_60___default().toWords(fractionalPart);
      setTotalW("".concat(wholeWords, " and ").concat(fractionalWords, " cents"));
    }
  }, [totalInvoice]);
  var _useState77 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState78 = _slicedToArray(_useState77, 2),
    reason = _useState78[0],
    setReason = _useState78[1];
  var dateComment = new Date();
  var _useState79 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState80 = _slicedToArray(_useState79, 2),
    hideBack = _useState80[0],
    setHideBack = _useState80[1];
  var invoiceName = "INV-" + String(invoiceNumber).padStart(6, '0');
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* () {
      var data = {
        idInfo: id,
        person: user.data.userName + ' Modify INVOICE ',
        reason: 'INV-' + String(invoiceNumber).padStart(6, '0') + ' ' + reason,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_21__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_43__.ENDPOINT_URL, "/create-notification/"), data);
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
        invoiceNumber,
        invoiceSubject,
        invoiceDefect,
        items: itemsWithoutData,
        subTotal,
        total,
        status,
        invoiceDate,
        invoiceDueDate,
        balanceDue,
        totalW,
        invoiceName,
        noteInfo,
        actionTaken,
        note,
        shipping,
        adjustment,
        adjustmentNumber,
        totalInvoice,
        terms,
        updateS: false
      };
      if (navigator.onLine) {
        try {
          // Fetch current state from server
          var currentRes = yield axios__WEBPACK_IMPORTED_MODULE_21__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_43__.ENDPOINT_URL, "/get-invoice/").concat(id));
          var currentInvoice = currentRes.data.data;

          // Merge local changes with server state
          var updatedData = _objectSpread(_objectSpread(_objectSpread({}, currentInvoice), data), {}, {
            updateS: false
          });
          var res = yield axios__WEBPACK_IMPORTED_MODULE_21__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_43__.ENDPOINT_URL, "/update-invoice/").concat(id), updatedData);
          if (res) {
            handleCreateComment();
            yield _dexieDb__WEBPACK_IMPORTED_MODULE_65__["default"].invoiceSchema.update(data.invoiceNumber, _objectSpread(_objectSpread({}, updatedData), {}, {
              updateS: true
            }));
            handleOpen();
          }
        } catch (error) {
          console.error("Error updating invoice:", error);
          handleError();
        }
      } else {
        try {
          yield _dexieDb__WEBPACK_IMPORTED_MODULE_65__["default"].invoiceSchema.update(data.invoiceNumber, _objectSpread(_objectSpread({}, data), {}, {
            updateS: false
          }));
          handleOpen();
        } catch (error) {
          console.error("Error updating local invoice:", error);
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
  var _useState81 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState82 = _slicedToArray(_useState81, 2),
    search2 = _useState82[0],
    setSearch2 = _useState82[1];
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "update invoice"), hideBack === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: 'white'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_64__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_63__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_31__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_36__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_33__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_31__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_34__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleOpenUpdateReason
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 3
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_41__["default"], {
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
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    htmlFor: "invoiceNumber"
  }, "Invoice Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    disabled: user.data.role !== 'CEO',
    type: "number",
    id: "invoiceNumber",
    name: "invoiceNumber",
    label: "Invoice Number",
    value: invoiceNumber,
    onChange: e => setInvoiceNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "INV-")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_46__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_47__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_45__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_48__.DatePicker, {
    disabled: user.data.role !== 'CEO',
    id: "invoiceDate",
    name: "invoiceDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_49___default()(invoiceDate),
    onChange: date => setInvoiceDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_46__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_47__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_45__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_48__.DatePicker, {
    disabled: user.data.role !== 'CEO',
    id: "invoiceDueDate",
    name: "invoiceDueDate",
    label: "Due Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_49___default()(invoiceDueDate),
    onChange: date => invoiceDueDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "invoiceSubject",
    name: "invoiceSubject",
    label: "Subject",
    value: invoiceSubject !== undefined ? invoiceSubject : '',
    onChange: e => setInvoiceSubject(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "invoiceDefect",
    name: "invoiceDefect",
    label: "Defect",
    value: invoiceDefect !== undefined ? invoiceDefect : '',
    onChange: e => setInvoiceDefect(e.target.value),
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
  })), actionTaken !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "actionTaken",
    name: "actionTaken",
    multiline: true,
    rows: 3,
    value: actionTaken !== undefined ? actionTaken : '',
    label: "Action",
    onChange: e => setActionTaken(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: addItemWhite
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
  }))))), user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_61__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_61__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), newArray2.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_61__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => {
    var _Item$itemName, _Item$itemName2, _Item$itemName3, _Item$itemName4;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
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
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        height: '100px'
      }
    }, (_Item$itemName = Item.itemName) !== null && _Item$itemName !== void 0 && _Item$itemName._id || ((_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2.itemName) === 'empty' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_62__["default"], {
      itemId: (_Item$itemName3 = Item.itemName) === null || _Item$itemName3 === void 0 ? void 0 : _Item$itemName3._id,
      initialData: Item.data,
      initialType: Item.contentType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      hidden: Item.itemName ? Item.itemName.itemName === 'empty' : '',
      sx: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    }, ((_Item$itemName4 = Item.itemName) === null || _Item$itemName4 === void 0 || (_Item$itemName4 = _Item$itemName4.itemName) === null || _Item$itemName4 === void 0 ? void 0 : _Item$itemName4.toUpperCase()) || ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      name: "itemDescription",
      id: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      rows: 3,
      onChange: e => handleChangeCEO(e, Item.idRow),
      size: "small",
      sx: {
        width: '250px',
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_41__["default"], {
      style: {
        color: '#202a5a'
      }
    }))), Item.itemName._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Edit",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => {
        var _Item$itemName5;
        return handleOpenItemUpdate((_Item$itemName5 = Item.itemName) === null || _Item$itemName5 === void 0 ? void 0 : _Item$itemName5._id);
      },
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_41__["default"], {
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
    }, (parseFloat(Item.itemAmount) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
      style: {
        color: '#202a5a'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Blank-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => addItemWhiteRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
      style: {
        color: 'gray'
      }
    })))))));
  })), provided.placeholder))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_61__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_61__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), newArray2.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_61__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => {
    var _Item$itemName6, _Item$itemName7, _Item$itemName8, _Item$itemName9;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
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
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        height: '100px'
      }
    }, (_Item$itemName6 = Item.itemName) !== null && _Item$itemName6 !== void 0 && _Item$itemName6._id || ((_Item$itemName7 = Item.itemName) === null || _Item$itemName7 === void 0 ? void 0 : _Item$itemName7.itemName) === 'empty' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_62__["default"], {
      itemId: (_Item$itemName8 = Item.itemName) === null || _Item$itemName8 === void 0 ? void 0 : _Item$itemName8._id,
      initialData: Item.data,
      initialType: Item.contentType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      hidden: Item.itemName ? Item.itemName.itemName === 'empty' : '',
      sx: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    }, ((_Item$itemName9 = Item.itemName) === null || _Item$itemName9 === void 0 || (_Item$itemName9 = _Item$itemName9.itemName) === null || _Item$itemName9 === void 0 ? void 0 : _Item$itemName9.toUpperCase()) || ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
      onClick: () => {
        var _Item$itemName0;
        return handleOpenItemUpdate((_Item$itemName0 = Item.itemName) === null || _Item$itemName0 === void 0 ? void 0 : _Item$itemName0._id);
      },
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_41__["default"], {
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
    }, (parseFloat(Item.itemAmount) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
      style: {
        color: '#202a5a'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Blank-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => addItemWhiteRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
  }, "Shipping Fees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "shipping",
    size: "small",
    value: shipping,
    name: "shipping",
    onChange: e => setShipping(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "      ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "adjustmentNumber",
    size: "small",
    value: adjustmentNumber,
    name: "adjustmentNumber",
    onChange: e => setAdjustmentNumber(e.target.value),
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
    required: true,
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
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_57__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Do you want to stop Updating invoice ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop updating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate('/InvoiceViewAdmin'),
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
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_57__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_18__["default"],
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_55__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_57__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_40__["default"], null))), shopLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_54__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
      sx: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      component: "img",
      height: "120",
      image: "data:".concat(item.contentType, ";base64,").concat(item.data),
      alt: item.itemName,
      sx: {
        objectFit: 'contain',
        padding: '5px'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
    }, "Stock: ", item.itemQuantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
      variant: "contained",
      size: "small",
      fullWidth: true,
      onClick: () => handleAddToInvoiceUpdate(item),
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_18__["default"],
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_56__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    open: loadingUpdateItemOpenModal,
    onClose: handleCloseUpdateItem,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_18__["default"],
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_55__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseUpdateItem
  }, "Close")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_57__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_58__["default"], {
    onCreateOption: handleCreateItem,
    onClose: handleCloseOpenAutocomplete2
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_57__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_59__["default"], {
    onClose: handleCloseItemUpdate,
    id: idItem
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvoiceFormUpdate);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfSW52b2ljZVZpZXdfSW52b2ljZUZvcm1VcGRhdGVfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFrRDtBQUNTO0FBQ3BDO0FBQ0U7QUFDMkI7QUFDc0I7QUFDdEI7QUFDeUs7QUFDbk07QUFDNkU7QUFDdkM7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDa0M7QUFDMUM7QUFDUjtBQUM4QjtBQUNNO0FBQzVEO0FBQ3lDO0FBQ2E7QUFDaEI7QUFDSjtBQUNsQztBQUM0QjtBQUNDO0FBQytCO0FBQ3RDO0FBQ0Q7QUFDZTtBQUNWO0FBQ047QUFDUTtBQUNJO0FBQ2Y7QUFDaUM7QUFBNkQ7QUFDbkY7QUFDUTtBQUM1QjtBQUVsQyxJQUFNa0YsWUFBWSxHQUFHakUsMERBQU0sQ0FBQ2tFLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNoRHZGLDBEQUFBLENBQUNpQyw4REFBTyxFQUFBd0QsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPNUQsOERBQWMsQ0FBQzZELE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLEtBQUs7TUFDdEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxD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QUFtQixFQUFFLEtBQUs7RUFDMUJDLGtCQUFrQixFQUFFLHNDQUFzQztFQUMxREMsWUFBWSxFQUFFLCtDQUErQztFQUM3REMsU0FBUyxFQUFFLG1DQUFtQztFQUM5Q0MsaUJBQWlCLEVBQUUsa0RBQWtEO0VBQ3JFO0VBQ0FDLFlBQVksRUFBRTtBQUNsQixDQUFDLENBQUM7QUFFRixpRUFBZW5xQixFQUFFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvSW52b2ljZVZpZXcvSW52b2ljZUZvcm1VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvSXRlbVRodW1ibmFpbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9kZXhpZURiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaWRlYmFyRGFzaDEgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoMSc7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnXHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcydcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBQYXBlciwgVGFibGVDb250YWluZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgc3R5bGVkLCBBdXRvY29tcGxldGUsIEJveCwgTW9kYWwsIEJhY2tkcm9wLCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgRGl2aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IERyYXdlciBhcyBTaWRlRHJhd2VyLCBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZE1lZGlhLCBCdXR0b24sIFBhZ2luYXRpb24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBBZGQsIERyYWdJbmRpY2F0b3JSb3VuZGVkLCBFZGl0LCBSZWZyZXNoLCBSZW1vdmVDaXJjbGVPdXRsaW5lIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Nob3BwaW5nQ2FydE91dGxpbmVkJztcclxuaW1wb3J0IEFkZFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FkZFNob3BwaW5nQ2FydE91dGxpbmVkJztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgRGVtb0NvbnRhaW5lciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvaW50ZXJuYWxzL2RlbW8nO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvTG9jYWxpemF0aW9uUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBBZGFwdGVyRGF5anMgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0FkYXB0ZXJEYXlqcyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0RhdGVQaWNrZXInO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBJdGVtRm9ybVZpZXcyIGZyb20gJy4uL0l0ZW1WaWV3L0l0ZW1Gb3JtVmlldzInO1xyXG5pbXBvcnQgSXRlbVVwZGF0ZVZpZXcyIGZyb20gJy4uL0l0ZW1WaWV3L0l0ZW1VcGRhdGVWaWV3Mic7XHJcbmltcG9ydCBudW1iZXJUb1dvcmRzIGZyb20gJ251bWJlci10by13b3JkcydcclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7aW1wb3J0IEl0ZW1UaHVtYm5haWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0l0ZW1UaHVtYm5haWwnO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuaW1wb3J0IGRiIGZyb20gJy4uLy4uLy4uL2RleGllRGInO1xyXG5cclxuY29uc3QgTGlnaHRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQmxhY2tUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgRG93blRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3Qgc3R5bGUyID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogODAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuXHJcbmZ1bmN0aW9uIEludm9pY2VGb3JtVXBkYXRlKCkge1xyXG5cclxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgaWYgKG5hdmlnYXRvci5vbkxpbmUpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHJlc0xvY2FsSW5mbyA9IGF3YWl0IGRiLmVtcGxveWVlVXNlclNjaGVtYS5nZXQoeyBfaWQ6IHN0b3Jlc1VzZXJJZCB9KVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlc0xvY2FsSW5mby5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzTG9jYWxJbmZvLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2N1c3RvbWVyTmFtZSwgc2V0Q3VzdG9tZXJOYW1lXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbY3VzdG9tZXIsIHNldEN1c3RvbWVyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW52b2ljZURhdGUsIHNldEludm9pY2VEYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbnZvaWNlRHVlRGF0ZSwgc2V0SW52b2ljZUR1ZURhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ludm9pY2VOdW1iZXIsIHNldEludm9pY2VOdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ludm9pY2VTdWJqZWN0LCBzZXRJbnZvaWNlU3ViamVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW52b2ljZURlZmVjdCwgc2V0SW52b2ljZURlZmVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbm90ZUluZm8sIHNldE5vdGVJbmZvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdGF0dXNJbmZvLCBzZXRTdGF0dXNJbmZvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzaG9wT3Blbiwgc2V0U2hvcE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG9wSXRlbXMsIHNldFNob3BJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Nob3BTZWFyY2gsIHNldFNob3BTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzaG9wUGFnZSwgc2V0U2hvcFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3Nob3BUb3RhbFBhZ2VzLCBzZXRTaG9wVG90YWxQYWdlc10gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hvcExvYWRpbmcsIHNldFNob3BMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXRlbXMsIFNldEl0ZW1zXSA9IHVzZVN0YXRlKFtcclxuICBdKTtcclxuICBjb25zdCBbYWN0aW9uVGFrZW4sIHNldEFjdGlvblRha2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3ViVG90YWwsIHNldFN1YlRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NoaXBwaW5nLCBzZXRTaGlwcGluZ10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWRqdXN0bWVudCwgc2V0QWRqdXN0bWVudF0gPSB1c2VTdGF0ZSgnQWRqdXN0bWVudCcpXHJcbiAgY29uc3QgW2FkanVzdG1lbnROdW1iZXIsIHNldEFkanVzdG1lbnROdW1iZXJdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbdG90YWxJbnZvaWNlLCBzZXRUb3RhbEludm9pY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Rlcm1zLCBzZXRUZXJtc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2JhbGFuY2VEdWUsIHNldEJhbGFuY2VEdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsVywgc2V0VG90YWxXXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtJdGVtSW5mb3JtYXRpb24sIHNldEl0ZW1JbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2l0ZW1OZXdRdHksIHNldEl0ZW1OZXdRdHldID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pbnZvaWNlLyR7aWR9YClcclxuICAgICAgICBzZXRDdXN0b21lck5hbWUocmVzLmRhdGEuZGF0YS5jdXN0b21lck5hbWUpO1xyXG4gICAgICAgIHNldEludm9pY2VEYXRlKHJlcy5kYXRhLmRhdGEuaW52b2ljZURhdGUpO1xyXG4gICAgICAgIHNldEludm9pY2VEdWVEYXRlKHJlcy5kYXRhLmRhdGEuaW52b2ljZUR1ZURhdGUpO1xyXG4gICAgICAgIHNldEludm9pY2VOdW1iZXIoTnVtYmVyKHJlcy5kYXRhPy5kYXRhPy5pbnZvaWNlTnVtYmVyIHx8IHJlcy5kYXRhPy5pbnZvaWNlTnVtYmVyIHx8IDApKTtcclxuICAgICAgICBzZXRJbnZvaWNlU3ViamVjdChyZXMuZGF0YS5kYXRhLmludm9pY2VTdWJqZWN0KTtcclxuICAgICAgICBzZXRJbnZvaWNlRGVmZWN0KHJlcy5kYXRhLmRhdGEuaW52b2ljZURlZmVjdCk7XHJcbiAgICAgICAgU2V0SXRlbXMocmVzLmRhdGEuZGF0YS5pdGVtcyk7XHJcbiAgICAgICAgc2V0U3ViVG90YWwocmVzLmRhdGEuZGF0YS5zdWJUb3RhbCk7XHJcbiAgICAgICAgc2V0U3RhdHVzSW5mbyhyZXMuZGF0YS5kYXRhLnN0YXR1cyk7XHJcbiAgICAgICAgc2V0VG90YWwocmVzLmRhdGEuZGF0YS50b3RhbCk7XHJcbiAgICAgICAgc2V0Tm90ZShyZXMuZGF0YS5kYXRhLm5vdGUpO1xyXG4gICAgICAgIHNldFNoaXBwaW5nKHJlcy5kYXRhLmRhdGEuc2hpcHBpbmcpO1xyXG4gICAgICAgIHNldEFkanVzdG1lbnQocmVzLmRhdGEuZGF0YS5hZGp1c3RtZW50KTtcclxuICAgICAgICBzZXRBZGp1c3RtZW50TnVtYmVyKE51bWJlcihyZXMuZGF0YT8uZGF0YT8uYWRqdXN0bWVudE51bWJlciB8fCByZXMuZGF0YT8uYWRqdXN0bWVudE51bWJlciB8fCAwKSk7XHJcbiAgICAgICAgc2V0VGVybXMocmVzLmRhdGEuZGF0YS50ZXJtcyk7XHJcbiAgICAgICAgc2V0Tm90ZUluZm8ocmVzLmRhdGEuZGF0YS5ub3RlSW5mbyk7XHJcbiAgICAgICAgc2V0QWN0aW9uVGFrZW4ocmVzLmRhdGEuZGF0YS5hY3Rpb25UYWtlbik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlc0xvY2FsID0gYXdhaXQgZGIuaW52b2ljZVNjaGVtYS5nZXQoeyBfaWQ6IGlkIH0pXHJcbiAgICAgIHNldEN1c3RvbWVyTmFtZShyZXNMb2NhbC5jdXN0b21lck5hbWUpO1xyXG4gICAgICBzZXRJbnZvaWNlRGF0ZShyZXNMb2NhbC5pbnZvaWNlRGF0ZSk7XHJcbiAgICAgIHNldEludm9pY2VEdWVEYXRlKHJlc0xvY2FsLmludm9pY2VEdWVEYXRlKTtcclxuICAgICAgc2V0SW52b2ljZU51bWJlcihyZXNMb2NhbC5pbnZvaWNlTnVtYmVyKTtcclxuICAgICAgc2V0SW52b2ljZVN1YmplY3QocmVzTG9jYWwuaW52b2ljZVN1YmplY3QpO1xyXG4gICAgICBzZXRJbnZvaWNlRGVmZWN0KHJlc0xvY2FsLmludm9pY2VEZWZlY3QpO1xyXG4gICAgICBTZXRJdGVtcyhyZXNMb2NhbC5pdGVtcyk7XHJcbiAgICAgIHNldFN1YlRvdGFsKHJlc0xvY2FsLnN1YlRvdGFsKTtcclxuICAgICAgc2V0U3RhdHVzSW5mbyhyZXNMb2NhbC5zdGF0dXMpO1xyXG4gICAgICBzZXRUb3RhbChyZXNMb2NhbC50b3RhbCk7XHJcbiAgICAgIHNldE5vdGUocmVzTG9jYWwubm90ZSk7XHJcbiAgICAgIHNldFNoaXBwaW5nKHJlc0xvY2FsLnNoaXBwaW5nKTtcclxuICAgICAgc2V0QWRqdXN0bWVudChyZXNMb2NhbC5hZGp1c3RtZW50KTtcclxuICAgICAgc2V0QWRqdXN0bWVudE51bWJlcihyZXNMb2NhbC5hZGp1c3RtZW50TnVtYmVyKTtcclxuICAgICAgc2V0VGVybXMocmVzTG9jYWwudGVybXMpO1xyXG4gICAgICBzZXROb3RlSW5mbyhyZXNMb2NhbC5ub3RlSW5mbyk7XHJcbiAgICAgIHNldEFjdGlvblRha2VuKHJlc0xvY2FsLmFjdGlvblRha2VuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtpZF0pXHJcblxyXG4gIGNvbnN0IGZldGNoSXRlbSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbWApXHJcbiAgICAgICAgc2V0SXRlbUluZm9ybWF0aW9uKHJlcy5kYXRhLmRhdGEucmV2ZXJzZSgpKVxyXG4gICAgICAgIGNvbnN0IHJlc0MgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9jdXN0b21lcmApXHJcbiAgICAgICAgc2V0Q3VzdG9tZXIocmVzQy5kYXRhLmRhdGEucmV2ZXJzZSgpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgb2ZmTGluZUN1c3RvbWVyMSA9IGF3YWl0IGRiLml0ZW1TY2hlbWEudG9BcnJheSgpO1xyXG4gICAgICBzZXRJdGVtSW5mb3JtYXRpb24ob2ZmTGluZUN1c3RvbWVyMS5yZXZlcnNlKCkpXHJcbiAgICAgIGNvbnN0IG9mZkxpbmVDdXN0b21lciA9IGF3YWl0IGRiLmN1c3RvbWVyU2NoZW1hLnRvQXJyYXkoKTtcclxuICAgICAgc2V0Q3VzdG9tZXIob2ZmTGluZUN1c3RvbWVyLnJldmVyc2UoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hJdGVtKClcclxuICB9LCBbXSlcclxuXHJcbiAgLy8gRmV0Y2ggU2hvcCBJdGVtcyAmIFJhdGVcclxuICBjb25zdCBmZXRjaFNob3AgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTaG9wTG9hZGluZyh0cnVlKTtcclxuICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzUmF0ZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3JhdGVgKVxyXG4gICAgICAgIHJlc1JhdGUuZGF0YS5kYXRhLmZvckVhY2goKHJvdykgPT4gc2V0UmF0ZShyb3cucmF0ZSkpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW0tc2hvcD9wYWdlPSR7c2hvcFBhZ2V9JmxpbWl0PTIwJnNlYXJjaD0ke2VuY29kZVVSSUNvbXBvbmVudChzaG9wU2VhcmNoKX1gKVxyXG4gICAgICAgIHNldFNob3BUb3RhbFBhZ2VzKHJlcy5kYXRhLnRvdGFsUGFnZXMpXHJcbiAgICAgICAgc2V0U2hvcEl0ZW1zKHJlcy5kYXRhLml0ZW1zLmZpbHRlcigocm93KSA9PiByb3cudHlwZUl0ZW0gPT09IFwiR29vZHNcIikucmV2ZXJzZSgpKVxyXG4gICAgICAgIHNldFNob3BMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldFNob3BMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBvZmZMaW5lQ3VzdG9tZXIxID0gYXdhaXQgZGIuaXRlbVNjaGVtYS50b0FycmF5KCk7XHJcbiAgICAgIHNldFNob3BJdGVtcyhvZmZMaW5lQ3VzdG9tZXIxLmZpbHRlcigocm93KSA9PiByb3cudHlwZUl0ZW0gPT09IFwiR29vZHNcIikucmV2ZXJzZSgpKVxyXG4gICAgICBzZXRTaG9wTG9hZGluZyhmYWxzZSlcclxuICAgICAgY29uc3Qgb2ZmTGluZVJhdGUgPSBhd2FpdCBkYi5yYXRlU2NoZW1hLnRvQXJyYXkoKTtcclxuICAgICAgb2ZmTGluZVJhdGUuZm9yRWFjaCgocm93KSA9PiBzZXRSYXRlKHJvdy5yYXRlKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2hvcE9wZW4pIHsgLy8gT25seSBmZXRjaCBpZiBzaWRlIHNob3AgaXMgb3BlblxyXG4gICAgICBmZXRjaFNob3AoKVxyXG4gICAgfVxyXG4gIH0sIFtzaG9wUGFnZSwgc2hvcFNlYXJjaCwgc2hvcE9wZW5dKVxyXG5cclxuICBjb25zdCBoYW5kbGVSZWZyZXNoU2hvcCA9ICgpID0+IHtcclxuICAgIHNldFNob3BTZWFyY2goJycpO1xyXG4gICAgc2V0U2hvcFBhZ2UoMSk7XHJcbiAgICBmZXRjaFNob3AoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3BQYWdlQ2hhbmdlID0gKGUsIG5ld1BhZ2UpID0+IHtcclxuICAgIHNldFNob3BQYWdlKG5ld1BhZ2UpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG9wU2VhcmNoQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFNob3BTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0U2hvcFBhZ2UoMSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNob3AgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG9wT3Blbighc2hvcE9wZW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkVG9JbnZvaWNlVXBkYXRlID0gKHNob3BJdGVtKSA9PiB7XHJcbiAgICAvLyBDaGVjayBpZiBpdGVtIGFscmVhZHkgZXhpc3RzXHJcbiAgICBjb25zdCBleGlzdGluZ0l0ZW1JbmRleCA9IGl0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaXRlbU5hbWUuX2lkID09PSBzaG9wSXRlbS5faWQpO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0l0ZW1JbmRleCAhPT0gLTEpIHtcclxuICAgICAgLy8gSXRlbSBleGlzdHMsIHVwZGF0ZSBxdWFudGl0eVxyXG4gICAgICBjb25zdCB1cGRhdGVkSXRlbXMgPSBbLi4uaXRlbXNdO1xyXG4gICAgICBjb25zdCBjdXJyZW50SXRlbSA9IHVwZGF0ZWRJdGVtc1tleGlzdGluZ0l0ZW1JbmRleF07XHJcbiAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KGN1cnJlbnRJdGVtLml0ZW1RdHkpICsgMTtcclxuXHJcbiAgICAgIHVwZGF0ZWRJdGVtc1tleGlzdGluZ0l0ZW1JbmRleF0gPSB7XHJcbiAgICAgICAgLi4uY3VycmVudEl0ZW0sXHJcbiAgICAgICAgaXRlbVF0eTogbmV3UXR5LFxyXG4gICAgICAgIGl0ZW1BbW91bnQ6IE1hdGgucm91bmQoKG5ld1F0eSAqIGN1cnJlbnRJdGVtLml0ZW1SYXRlKSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgdG90YWxBbW91bnQ6IE1hdGgucm91bmQoKG5ld1F0eSAqIGN1cnJlbnRJdGVtLml0ZW1SYXRlKSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgZGlzY291bnQ6IE1hdGgucm91bmQoKG5ld1F0eSAqIGN1cnJlbnRJdGVtLml0ZW1SYXRlICogY3VycmVudEl0ZW0uaXRlbURpc2NvdW50KSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgcGVyY2VudGFnZTogKE1hdGgucm91bmQoKG5ld1F0eSAqIGN1cnJlbnRJdGVtLml0ZW1SYXRlICogY3VycmVudEl0ZW0uaXRlbURpc2NvdW50KSAqIDEwMCkgLyAxMDApIC8gMTAwLFxyXG4gICAgICAgIHRvdGFsQ29zdDogTWF0aC5yb3VuZCgobmV3UXR5ICogY3VycmVudEl0ZW0uaXRlbUNvc3QpICogMTAwKSAvIDEwMCxcclxuICAgICAgICB0b3RhbEdlbmVyYWxlOiBNYXRoLnJvdW5kKChjdXJyZW50SXRlbS5pdGVtQ29zdCAqIGN1cnJlbnRJdGVtLml0ZW1CdXkpICogMTAwKSAvIDEwMCxcclxuICAgICAgfTtcclxuICAgICAgU2V0SXRlbXModXBkYXRlZEl0ZW1zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEl0ZW0gZG9lcyBub3QgZXhpc3QsIGFkZCBuZXdcclxuICAgICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgICAgX2lkOiBzaG9wSXRlbS5faWQsXHJcbiAgICAgICAgICBpdGVtTmFtZTogc2hvcEl0ZW0uaXRlbU5hbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBzaG9wSXRlbS5kYXRhLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBzaG9wSXRlbS5jb250ZW50VHlwZSxcclxuICAgICAgICBpdGVtRGVzY3JpcHRpb246IHNob3BJdGVtLml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgICAgaXRlbVF0eTogMSxcclxuICAgICAgICBpdGVtUmF0ZTogc2hvcEl0ZW0uaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICBpdGVtQW1vdW50OiBzaG9wSXRlbS5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIGl0ZW1Db3N0OiBzaG9wSXRlbS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgIHRvdGFsQW1vdW50OiBzaG9wSXRlbS5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgICBpdGVtV2VpZ2h0OiBzaG9wSXRlbS5pdGVtV2VpZ2h0IHx8IFwiXCIsXHJcbiAgICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgICB0b3RhbENvc3Q6IHNob3BJdGVtLml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgICAgc3RvY2s6IHNob3BJdGVtLml0ZW1RdWFudGl0eSxcclxuICAgICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICAgIH07XHJcbiAgICAgIFNldEl0ZW1zKFsuLi5pdGVtcywgbmV3SXRlbV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSXRlbSA9IChpZFJvdywgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IG5ld1ZhbHVlXHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93LmlkUm93ID09PSBpZFJvdyA/IHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogc2VsZWN0ZWRPcHRpb25zPy5faWQsXHJcbiAgICAgICAgaXRlbU5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbU5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IHNlbGVjdGVkT3B0aW9ucz8uZGF0YSxcclxuICAgICAgY29udGVudFR5cGU6IHNlbGVjdGVkT3B0aW9ucz8uY29udGVudFR5cGUsXHJcbiAgICAgIGl0ZW1Db3N0OiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogc2VsZWN0ZWRPcHRpb25zPy5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgIGl0ZW1SYXRlOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN0b2NrOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1RdWFudGl0eSxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDdXN0b21lciA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gY3VzdG9tZXIuZmluZCgob3B0aW9uKSA9PiBvcHRpb24gPT09IG5ld1ZhbHVlKVxyXG4gICAgc2V0Q3VzdG9tZXJOYW1lKHtcclxuICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgY3VzdG9tZXJOYW1lOiBzZWxlY3RlZE9wdGlvbnM/LkN1c3RvbWVyLFxyXG4gICAgICBiaWxsaW5nQWRkcmVzczogc2VsZWN0ZWRPcHRpb25zPy5iaWxsaW5nQWRkcmVzcyxcclxuICAgICAgYmlsbGluZ0NpdHk6IHNlbGVjdGVkT3B0aW9ucz8uYmlsbGluZ0NpdHlcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbGVhckN1c3RvbWVyID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VzdG9tZXJOYW1lKG51bGwpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBpZFJvdykgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLml0ZW1zXTtcclxuICAgIGNvbnN0IGkgPSBpdGVtcy5maW5kSW5kZXgoSXRlbSA9PiBJdGVtLmlkUm93ID09PSBpZFJvdylcclxuICAgIGxpc3RbaV1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtUmF0ZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWyd0b3RhbENvc3QnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1RdHknXSAqIGxpc3RbaV1bJ2l0ZW1Db3N0J10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2Rpc2NvdW50J10gPSBsaXN0W2ldWyd0b3RhbEFtb3VudCddICogbGlzdFtpXVsnaXRlbURpc2NvdW50J107XHJcbiAgICBsaXN0W2ldWydwZXJjZW50YWdlJ10gPSBsaXN0W2ldWydkaXNjb3VudCddIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnaXRlbUFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsndG90YWxBbW91bnQnXSAtIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxHZW5lcmFsZSddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbUNvc3QnXSAqIGxpc3RbaV1bJ2l0ZW1CdXknXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgU2V0SXRlbXMobGlzdCk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUNFTyA9IChlLCBpZFJvdykgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLml0ZW1zXTtcclxuICAgIGNvbnN0IGkgPSBpdGVtcy5maW5kSW5kZXgoSXRlbSA9PiBJdGVtLmlkUm93ID09PSBpZFJvdylcclxuICAgIGxpc3RbaV1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtUmF0ZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWyd0b3RhbENvc3QnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1RdHknXSAqIGxpc3RbaV1bJ2l0ZW1Db3N0J10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2Rpc2NvdW50J10gPSBsaXN0W2ldWyd0b3RhbEFtb3VudCddICogbGlzdFtpXVsnaXRlbURpc2NvdW50J107XHJcbiAgICBsaXN0W2ldWydwZXJjZW50YWdlJ10gPSBsaXN0W2ldWydkaXNjb3VudCddIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnaXRlbUFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsndG90YWxBbW91bnQnXSAtIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxHZW5lcmFsZSddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbUNvc3QnXSAqIGxpc3RbaV1bJ2l0ZW1CdXknXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgU2V0SXRlbXMobGlzdCk7XHJcbiAgfVxyXG4gIC8vYWRkSXRlbVxyXG4gIGNvbnN0IGFkZEl0ZW0gPSAoKSA9PiB7XHJcbiAgICBTZXRJdGVtcyhbLi4uaXRlbXMsIHtcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7fSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfV0pO1xyXG4gIH1cclxuICBjb25zdCBhZGRJdGVtV2hpdGUgPSAoKSA9PiB7XHJcbiAgICBTZXRJdGVtcyhbLi4uaXRlbXMsIHtcclxuICAgICAgbmV3RGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogXCJcIixcclxuICAgICAgICBpdGVtTmFtZTogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgIGl0ZW1Db3N0OiAwLFxyXG4gICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgIGl0ZW1CdXk6IDAsXHJcbiAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgIHRvdGFsR2VuZXJhbGU6IDAsXHJcbiAgICAgIHRvdGFsQ29zdDogMCxcclxuICAgICAgc3RvY2s6IDAsXHJcbiAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICB9XSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1Sb3cgPSAoaSkgPT4ge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZSA9IFsuLi5pdGVtc107XHJcbiAgICB1cGRhdGUuc3BsaWNlKGkgKyAxLCAwLCBuZXdJdGVtKTtcclxuICAgIFNldEl0ZW1zKHVwZGF0ZSlcclxuICB9XHJcbiAgY29uc3QgYWRkSXRlbVdoaXRlUm93ID0gKGkpID0+IHtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgIG5ld0Rlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IFwiXCIsXHJcbiAgICAgICAgaXRlbU5hbWU6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQW1vdW50OiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlID0gWy4uLml0ZW1zXTtcclxuICAgIHVwZGF0ZS5zcGxpY2UoaSArIDEsIDAsIG5ld0l0ZW0pO1xyXG4gICAgU2V0SXRlbXModXBkYXRlKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3SXRlbXMgPSBbLi4uaXRlbXNdO1xyXG4gICAgY29uc3QgW3JlbW92ZWRdID0gbmV3SXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xyXG4gICAgbmV3SXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVtb3ZlZCk7XHJcbiAgICBTZXRJdGVtcyhuZXdJdGVtcylcclxuICB9O1xyXG4gIGNvbnN0IGZpbHRlckl0ZW1JbmZvcm1hdGlvbiA9IEl0ZW1JbmZvcm1hdGlvbi5maWx0ZXIob3B0aW9uID0+ICFpdGVtcy5maW5kKChyb3cpID0+IG9wdGlvbi5faWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkICYmIG9wdGlvbi50eXBlSXRlbSA9PT0gXCJHb29kc1wiKSlcclxuICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTIsIHNldE9wZW5BdXRvY29tcGxldGUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlSXRlbSA9IChuZXdJdGVtKSA9PiB7XHJcbiAgICBzZXRJdGVtSW5mb3JtYXRpb24oW25ld0l0ZW0sIC4uLkl0ZW1JbmZvcm1hdGlvbl0pXHJcbiAgfVxyXG4gIGNvbnN0IFtvcGVuQmFjaywgc2V0T3BlbkJhY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuQmFjayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5CYWNrKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VCYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkJhY2soZmFsc2UpO1xyXG4gIH07XHJcbiAgey8qKiBpdGVtIHN0YXJ0ICovIH1cclxuICBsZXQgc3RhdHVzID0gJydcclxuICBjb25zdCBkaWZmU3RhdHVzID0gTWF0aC5yb3VuZCgocGFyc2VGbG9hdCh0b3RhbEludm9pY2UpIC0gcGFyc2VGbG9hdCh0b3RhbCB8fCAwKSkgKiAxMDApIC8gMTAwO1xyXG4gIGlmIChzdGF0dXNJbmZvID09PSAnUGFpZCcgfHwgc3RhdHVzSW5mbyA9PT0gJ1BhcnRpYWxseS1QYWlkJyB8fCBzdGF0dXNJbmZvID09PSAnU2VudCcpIHtcclxuICAgIGlmIChkaWZmU3RhdHVzIDw9IDAgJiYgcGFyc2VGbG9hdCh0b3RhbEludm9pY2UpICE9PSAwKSB7XHJcbiAgICAgIHN0YXR1cyA9ICdQYWlkJ1xyXG4gICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KHRvdGFsIHx8IDApID4gMCAmJiBkaWZmU3RhdHVzID4gMCkge1xyXG4gICAgICBzdGF0dXMgPSAnUGFydGlhbGx5LVBhaWQnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0dXMgPSAnU2VudCdcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSBpZiAoc3RhdHVzSW5mbyA9PT0gJ0RyYWZ0Jykge1xyXG4gICAgaWYgKGRpZmZTdGF0dXMgPD0gMCAmJiBwYXJzZUZsb2F0KHRvdGFsSW52b2ljZSkgIT09IDApIHtcclxuICAgICAgc3RhdHVzID0gJ1BhaWQnXHJcbiAgICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQodG90YWwgfHwgMCkgPiAwICYmIGRpZmZTdGF0dXMgPiAwKSB7XHJcbiAgICAgIHN0YXR1cyA9ICdQYXJ0aWFsbHktUGFpZCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXR1cyA9ICdEcmFmdCdcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSBpZiAoc3RhdHVzSW5mbyA9PT0gJ1BlbmRpbmcnKSB7XHJcbiAgICBpZiAoZGlmZlN0YXR1cyA8PSAwICYmIHBhcnNlRmxvYXQodG90YWxJbnZvaWNlKSAhPT0gMCkge1xyXG4gICAgICBzdGF0dXMgPSAnUGFpZCdcclxuICAgIH0gZWxzZSBpZiAocGFyc2VGbG9hdCh0b3RhbCB8fCAwKSA+IDAgJiYgZGlmZlN0YXR1cyA+IDApIHtcclxuICAgICAgc3RhdHVzID0gJ1BhcnRpYWxseS1QYWlkJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhdHVzID0gJ1BlbmRpbmcnXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGUgPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBudWxsLFxyXG4gICAgICAgIGl0ZW1OYW1lOiByb3cuaXRlbU5hbWUuaXRlbU5hbWVcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQW1vdW50OiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbiA9IChpZFJvdykgPT4ge1xyXG4gICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBpdGVtTmFtZTogJ2VtcHR5J1xyXG4gICAgICB9LFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbb3Blbkl0ZW1VcGRhdGUsIHNldE9wZW5JdGVtVXBkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaWRJdGVtLCBzZXRJZEl0ZW1dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbkl0ZW1VcGRhdGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHNldE9wZW5JdGVtVXBkYXRlKHRydWUpO1xyXG4gICAgc2V0SWRJdGVtKGlkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZUl0ZW1VcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRPcGVuSXRlbVVwZGF0ZShmYWxzZSk7XHJcbiAgICBpZiAoaWRJdGVtKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWl0ZW0vJHtpZEl0ZW19YClcclxuICAgICAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93Lml0ZW1OYW1lPy5faWQgPT09IHJlcy5kYXRhLmRhdGEuX2lkID9cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLi4ucm93LFxyXG4gICAgICAgICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgICAgICAgIF9pZDogcmVzLmRhdGEuZGF0YS5faWQsXHJcbiAgICAgICAgICAgICAgaXRlbU5hbWU6IHJlcy5kYXRhLmRhdGEuaXRlbU5hbWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uOiByZXMuZGF0YS5kYXRhLml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgaXRlbUNvc3Q6IHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSxcclxuICAgICAgICAgICAgaXRlbVJhdGU6IHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICAgICAgc3RvY2s6IHJlcy5kYXRhLmRhdGEuaXRlbVF1YW50aXR5LFxyXG4gICAgICAgICAgICB0b3RhbEFtb3VudDogcm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICAgIGRpc2NvdW50OiAocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCxcclxuICAgICAgICAgICAgcGVyY2VudGFnZTogKChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50KSAvIDEwMCxcclxuICAgICAgICAgICAgaXRlbUFtb3VudDogKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAtICgoKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQpIC8gMTAwKSxcclxuICAgICAgICAgICAgdG90YWxDb3N0OiByb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSxcclxuICAgICAgICAgICAgdG90YWxHZW5lcmFsZTogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlICogcm93Lml0ZW1CdXlcclxuICAgICAgICAgIH0gOiByb3cpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgey8qKiBpdGVtIEVuZCAqLyB9XHJcbiAgY29uc3QgW29wZW4yLCBzZXRPcGVuMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5VcGRhdGVSZWFzb24gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuMih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVXBkYXRlUmVhc29uID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbjIoZmFsc2UpO1xyXG4gIH07XHJcbiAgey8qKiBMb2FkaW5nIFN0YXJ0ICovIH1cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nVXBkYXRlSXRlbU9wZW5Nb2RhbCwgc2V0TG9hZGluZ1VwZGF0ZUl0ZW1PcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRPcGVuMihmYWxzZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0T3BlbjIoZmFsc2UpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIG5hdmlnYXRlKC0xKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGVJdGVtID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ1VwZGF0ZUl0ZW1PcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgc2V0SXRlbU5ld1F0eSgwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuICB7LyoqIExvYWRpbmcgRW5kICovIH1cclxuXHJcbiAgey8qKiBEZWxldGUgUm93ICYmIFVwZGF0ZSBJdGVtIFN0YXJ0ICovIH1cclxuICBjb25zdCBkZWxldGVJdGVtID0gYXN5bmMgKGlkUm93KSA9PiB7XHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5maWx0ZXIoKEl0ZW0pID0+IEl0ZW0uaWRSb3cgIT09IGlkUm93KSk7XHJcbiAgfTtcclxuICB7LyoqIERlbGV0ZSBSb3cgJiYgVXBkYXRlIEl0ZW0gRW5kICovIH1cclxuXHJcbiAgey8qKiBVcGRhdGUgRXhpc3Rpbmcgcm93IHN0YXJ0ICovIH1cclxuICB7LyoqIFVwZGF0ZSBFeGlzdGluZyByb3cgRW5kICovIH1cclxuICB7LyoqVXBkYXRlIE5ldyBSb3cgRW5kKi8gfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0MSA9IGl0ZW1zLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIChwYXJzZUZsb2F0KHJvdy5pdGVtQW1vdW50KSB8fCAwKSwgMClcclxuICAgIHNldFN1YlRvdGFsKHJlc3VsdDEudG9GaXhlZCgyKSlcclxuICAgIGxldCBuZXdUb3RhbCA9IE1hdGgucm91bmQoKHBhcnNlRmxvYXQocmVzdWx0MSkgKyBwYXJzZUZsb2F0KHNoaXBwaW5nIHx8IDApICsgcGFyc2VGbG9hdChhZGp1c3RtZW50TnVtYmVyIHx8IDApKSAqIDEwMCkgLyAxMDBcclxuICAgIHNldFRvdGFsSW52b2ljZShuZXdUb3RhbClcclxuICAgIGxldCBuZXdCYWxhbmNlID0gTWF0aC5yb3VuZCgobmV3VG90YWwgLSAocGFyc2VGbG9hdCh0b3RhbCkgfHwgMCkpICogMTAwKSAvIDEwMFxyXG4gICAgc2V0QmFsYW5jZUR1ZShuZXdCYWxhbmNlKVxyXG4gIH0sIFtpdGVtcywgc2hpcHBpbmcsIGFkanVzdG1lbnROdW1iZXIsIHRvdGFsXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRvdGFsSW52b2ljZSkge1xyXG4gICAgICBjb25zdCB3aG9sZVBhcnQgPSBNYXRoLmZsb29yKHRvdGFsSW52b2ljZSlcclxuICAgICAgY29uc3QgZnJhY3Rpb25hbFBhcnQgPSAodG90YWxJbnZvaWNlICUgMSkudG9GaXhlZCgyKS5zcGxpdCgnLicpWzFdO1xyXG4gICAgICBjb25zdCB3aG9sZVdvcmRzID0gbnVtYmVyVG9Xb3Jkcy50b1dvcmRzKHdob2xlUGFydClcclxuICAgICAgY29uc3QgZnJhY3Rpb25hbFdvcmRzID0gbnVtYmVyVG9Xb3Jkcy50b1dvcmRzKGZyYWN0aW9uYWxQYXJ0KVxyXG4gICAgICBzZXRUb3RhbFcoYCR7d2hvbGVXb3Jkc30gYW5kICR7ZnJhY3Rpb25hbFdvcmRzfSBjZW50c2ApXHJcbiAgICB9XHJcbiAgfSwgW3RvdGFsSW52b2ljZV0pXHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGRhdGVDb21tZW50ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBbaGlkZUJhY2ssIHNldEhpZGVCYWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBpbnZvaWNlTmFtZSA9IFwiSU5WLVwiICsgU3RyaW5nKGludm9pY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJylcclxuICBjb25zdCBoYW5kbGVDcmVhdGVDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBpZCxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIE1vZGlmeSBJTlZPSUNFICcsXHJcbiAgICAgIHJlYXNvbjogJ0lOVi0nICsgU3RyaW5nKGludm9pY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnICcgKyByZWFzb24sXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IGRhdGVDb21tZW50XHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb24vYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0RWRpdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpdGVtc1dpdGhvdXREYXRhID0gaXRlbXMubWFwKCh7IGRhdGEsIGNvbnRlbnRUeXBlLCAuLi5yZXN0IH0pID0+IHJlc3QpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgY3VzdG9tZXJOYW1lLFxyXG4gICAgICBpbnZvaWNlTnVtYmVyLFxyXG4gICAgICBpbnZvaWNlU3ViamVjdCxcclxuICAgICAgaW52b2ljZURlZmVjdCxcclxuICAgICAgaXRlbXM6IGl0ZW1zV2l0aG91dERhdGEsXHJcbiAgICAgIHN1YlRvdGFsLFxyXG4gICAgICB0b3RhbCwgc3RhdHVzLCBpbnZvaWNlRGF0ZSwgaW52b2ljZUR1ZURhdGUsXHJcbiAgICAgIGJhbGFuY2VEdWUsXHJcbiAgICAgIHRvdGFsVywgaW52b2ljZU5hbWUsXHJcbiAgICAgIG5vdGVJbmZvLCBhY3Rpb25UYWtlbixcclxuICAgICAgbm90ZSwgc2hpcHBpbmcsIGFkanVzdG1lbnQsIGFkanVzdG1lbnROdW1iZXIsIHRvdGFsSW52b2ljZSwgdGVybXMsIHVwZGF0ZVM6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gRmV0Y2ggY3VycmVudCBzdGF0ZSBmcm9tIHNlcnZlclxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaW52b2ljZS8ke2lkfWApO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbnZvaWNlID0gY3VycmVudFJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgIC8vIE1lcmdlIGxvY2FsIGNoYW5nZXMgd2l0aCBzZXJ2ZXIgc3RhdGVcclxuICAgICAgICBjb25zdCB1cGRhdGVkRGF0YSA9IHtcclxuICAgICAgICAgIC4uLmN1cnJlbnRJbnZvaWNlLFxyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIHVwZGF0ZVM6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLWludm9pY2UvJHtpZH1gLCB1cGRhdGVkRGF0YSk7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgaGFuZGxlQ3JlYXRlQ29tbWVudCgpO1xyXG4gICAgICAgICAgYXdhaXQgZGIuaW52b2ljZVNjaGVtYS51cGRhdGUoZGF0YS5pbnZvaWNlTnVtYmVyLCB7XHJcbiAgICAgICAgICAgIC4uLnVwZGF0ZWREYXRhLFxyXG4gICAgICAgICAgICB1cGRhdGVTOiB0cnVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGludm9pY2U6XCIsIGVycm9yKTtcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLmludm9pY2VTY2hlbWEudXBkYXRlKGRhdGEuaW52b2ljZU51bWJlciwge1xyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIHVwZGF0ZVM6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBsb2NhbCBpbnZvaWNlOlwiLCBlcnJvcik7XHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIGNvbnN0IFtzZWFyY2gyLCBzZXRTZWFyY2gyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2gyID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgIHNldFNlYXJjaDIodmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IG5ld0FycmF5MiA9IHNlYXJjaDIgIT09ICcnID8gaXRlbXMuZmlsdGVyKChJdGVtKSA9PlxyXG4gICAgSXRlbS5pdGVtTmFtZSAmJiBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoMi50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgSXRlbS5pdGVtRGVzY3JpcHRpb24gJiYgSXRlbS5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICYmIEl0ZW0ubmV3RGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpXHJcbiAgKSA6IGl0ZW1zXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHVwZGF0ZSBpbnZvaWNlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhpZGVCYWNrID09PSAndHJ1ZScgP1xyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gOlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+fVxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaDEgLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDQgfX0gPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPcGVuVXBkYXRlUmVhc29ufT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9IGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lck5hbWUgIT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJDdXN0b21lcn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y3VzdG9tZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5DdXN0b21lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VDdXN0b21lcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkN1c3RvbWVyIE5hbWVcIiByZXF1aXJlZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJpbnZvaWNlTnVtYmVyXCI+SW52b2ljZSBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdpbnZvaWNlTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpbnZvaWNlTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSW52b2ljZSBOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnZvaWNlTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEludm9pY2VOdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5JTlYtPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2ludm9pY2VEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2ludm9pY2VEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhpbnZvaWNlRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRJbnZvaWNlRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0naW52b2ljZUR1ZURhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naW52b2ljZUR1ZURhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0R1ZSBEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhpbnZvaWNlRHVlRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBpbnZvaWNlRHVlRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0naW52b2ljZVN1YmplY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpbnZvaWNlU3ViamVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTdWJqZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ludm9pY2VTdWJqZWN0ICE9PSB1bmRlZmluZWQgPyBpbnZvaWNlU3ViamVjdCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnZvaWNlU3ViamVjdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdpbnZvaWNlRGVmZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0naW52b2ljZURlZmVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEZWZlY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW52b2ljZURlZmVjdCAhPT0gdW5kZWZpbmVkID8gaW52b2ljZURlZmVjdCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnZvaWNlRGVmZWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J25vdGVJbmZvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbm90ZUluZm8nXHJcbiAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm90ZUluZm8gIT09IHVuZGVmaW5lZCA/IG5vdGVJbmZvIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm90ZUluZm8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uVGFrZW4gIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdhY3Rpb25UYWtlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhY3Rpb25UYWtlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3Rpb25UYWtlbiAhPT0gdW5kZWZpbmVkID8gYWN0aW9uVGFrZW4gOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQWN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWN0aW9uVGFrZW4oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBwb3NpdGlvbjogJ2ZpeGVkJywgekluZGV4OiAxLCBmbG9hdDogJ3JpZ2h0JywgcmlnaHQ6ICctNXB4JywgdG9wOiAnNDAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQWRkXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbVdoaXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JywgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIklURU0gTElTVFwiIHBsYWNlbWVudD1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaG9wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT0nYnRuMScgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsIGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSW5mbzEwJyBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnLTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0b2NrLUE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EaXNjb3VudCAlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZHJvcHBhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3QXJyYXkyLm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtJdGVtLmlkUm93fSBkcmFnZ2FibGVJZD17YGRyb3BwYWJsZSR7SXRlbS5pZFJvd31gfSBpbmRleD17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezZ9PjxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduZXdEZXNjcmlwdGlvbicgaWQ9J25ld0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0ubmV3RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGhlaWdodDogJzEwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZT8uX2lkIHx8IEl0ZW0uaXRlbU5hbWU/Lml0ZW1OYW1lID09PSAnZW1wdHknID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkPXtJdGVtLml0ZW1OYW1lPy5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsRGF0YT17SXRlbS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFR5cGU9e0l0ZW0uY29udGVudFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBoaWRkZW49e0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID09PSAnZW1wdHknIDogJyd9IHN4PXt7IGZvbnRTaXplOiAnMjBweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0l0ZW0uaXRlbU5hbWU/Lml0ZW1OYW1lPy50b1VwcGVyQ2FzZSgpIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGVzY3JpcHRpb24nIGlkPSdpdGVtRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzI1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGUoSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWUuX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkVkaXRcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3Blbkl0ZW1VcGRhdGUoSXRlbS5pdGVtTmFtZT8uX2lkKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlckl0ZW1JbmZvcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2YyZjJmMicgfX0+e29wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9IHsuLi5wYXJhbXN9IHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUobmV3SW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9eyhvcHRpb25zLCB7IGlucHV0VmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1CcmFuZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZUl0ZW0oSXRlbS5pZFJvdywgbmV3VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHsgY2hpbGRyZW4sIC4uLm90aGVyIH0pID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgbGVmdDogJzAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMihlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNycgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NzBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZURlc2NyaXB0aW9uKEl0ZW0uaWRSb3cpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RvY2snIGlkPSdzdG9jaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uc3RvY2t9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVF0eScgaWQ9J2l0ZW1RdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1SYXRlJyBpZD0naXRlbVJhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1SYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EaXNjb3VudCcgaWQ9J2l0ZW1EaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbURpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScxIHRvIDUgJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD0nYW1vdW50VG90YWxJbnZvaWNlJz57KHBhcnNlRmxvYXQoSXRlbS5pdGVtQW1vdW50KSB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiTmV3LVJvd1wiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW1Sb3coaSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkJsYW5rLVJvd1wiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW1XaGl0ZVJvdyhpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSW5mbzEwJyBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnLTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0b2NrLUE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EaXNjb3VudCAlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZHJvcHBhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3QXJyYXkyLm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtJdGVtLmlkUm93fSBkcmFnZ2FibGVJZD17YGRyb3BwYWJsZSR7SXRlbS5pZFJvd31gfSBpbmRleD17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezZ9PjxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduZXdEZXNjcmlwdGlvbicgaWQ9J25ld0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0ubmV3RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+PERyYWdJbmRpY2F0b3JSb3VuZGVkIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLml0ZW1OYW1lPy5faWQgfHwgSXRlbS5pdGVtTmFtZT8uaXRlbU5hbWUgPT09ICdlbXB0eScgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzE1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtVGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSWQ9e0l0ZW0uaXRlbU5hbWU/Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxEYXRhPXtJdGVtLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVHlwZT17SXRlbS5jb250ZW50VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGhpZGRlbj17SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPT09ICdlbXB0eScgOiAnJ30gc3g9e3sgZm9udFNpemU6ICcyMHB4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7SXRlbS5pdGVtTmFtZT8uaXRlbU5hbWU/LnRvVXBwZXJDYXNlKCkgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EZXNjcmlwdGlvbicgaWQ9J2l0ZW1EZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMjUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5faWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiRWRpdFwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuSXRlbVVwZGF0ZShJdGVtLml0ZW1OYW1lPy5faWQpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdCBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVySXRlbUluZm9ybWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLml0ZW1OYW1lICsgJy8nICsgb3B0aW9uLml0ZW1CcmFuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfT57b3B0aW9uLml0ZW1OYW1lICsgJy8nICsgb3B0aW9uLml0ZW1CcmFuZH08L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH0gey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50LCBuZXdJbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMsIHsgaW5wdXRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbUJyYW5kLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbURlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlSXRlbShJdGVtLmlkUm93LCBuZXdWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5vdGhlcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBsZWZ0OiAnMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyKGUpfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30gb25Nb3VzZURvd249eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI3JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERCBORVcgSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzQ3MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24oSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdG9jaycgaWQ9J3N0b2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5zdG9ja31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUXR5JyBpZD0naXRlbVF0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVJhdGUnIGlkPSdpdGVtUmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVJhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURpc2NvdW50JyBpZD0naXRlbURpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzEgdG8gNSAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPSdhbW91bnRUb3RhbEludm9pY2UnPnsocGFyc2VGbG9hdChJdGVtLml0ZW1BbW91bnQpIHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJOZXctUm93XCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gYWRkSXRlbVJvdyhpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQmxhbmstUm93XCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gYWRkSXRlbVdoaXRlUm93KGkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdub3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdub3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdJbnZvaWNlIE5vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm90ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNTAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpcnN0VGFibGVcIiBzdHlsZT17eyBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlN1Yi1Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzdWJUb3RhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdWJUb3RhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJUb3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlNoaXBwaW5nIEZlZXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzaGlwcGluZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2hpcHBpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzaGlwcGluZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2hpcHBpbmcoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+ICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhZGp1c3RtZW50JyBpZD0nYWRqdXN0bWVudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FkanVzdG1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRqdXN0bWVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMjUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nYWRqdXN0bWVudE51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRqdXN0bWVudE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2FkanVzdG1lbnROdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFkanVzdG1lbnROdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3RvdGFsSW52b2ljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0b3RhbEludm9pY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWxJbnZvaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+QmFsYW5jZSBEdWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdiYWxhbmNlRHVlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2JhbGFuY2VEdWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFsYW5jZUR1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5Ub3RhbCBJbiBXb3JkczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3RhbFdcIiBpZD1cInRvdGFsV1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsV31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J3Rlcm1zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGVybXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGVybXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSW52b2ljZSBUZXJtcydcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGVybXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc2MCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5CYWNrfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlQmFja31cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzeD17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EbyB5b3Ugd2FudCB0byBzdG9wIFVwZGF0aW5nIGludm9pY2UgPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlIDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj4gSWYgeW91IHN0b3AgdXBkYXRpbmcgd2l0aG91dCBzYXZpbmcsIGFsbCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvSW52b2ljZVZpZXdBZG1pbicpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+Tm88L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuMn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVwZGF0ZVJlYXNvbn1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVVwZGF0ZVJlYXNvbn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIFJlYXNvbiBPZiBVcGRhdGluZ1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdEVkaXR9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J0NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyoqIFNpZGUgU2hvcCBEcmF3ZXIgKi99XHJcbiAgICAgIDxTaWRlRHJhd2VyXHJcbiAgICAgICAgYW5jaG9yPVwicmlnaHRcIlxyXG4gICAgICAgIG9wZW49e3Nob3BPcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e3RvZ2dsZVNob3B9XHJcbiAgICAgICAgUGFwZXJQcm9wcz17e1xyXG4gICAgICAgICAgc3g6IHsgd2lkdGg6ICc1MDBweCcsIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjUnLCBwYWRkaW5nOiAnMjBweCcgfSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYj17Mn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgU2VsZWN0IEl0ZW0gZnJvbSBTaG9wXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaG9wfT5cclxuICAgICAgICAgICAgPENsb3NlIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWI9ezJ9PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2ggU2hvcFwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzaG9wU2VhcmNofVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2hvcFNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZWZyZXNoU2hvcH0gY29sb3I9XCJwcmltYXJ5XCIgc3g9e3sgbWw6IDEgfX0+XHJcbiAgICAgICAgICAgIDxSZWZyZXNoIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIHtzaG9wTG9hZGluZyA/IChcclxuICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgb3ZlcmZsb3dZOiAnYXV0bycsIG1heEhlaWdodDogJ2NhbGMoMTAwdmggLSAxODBweCknIH19PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIHtzaG9wSXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17YGRhdGE6JHtpdGVtLmNvbnRlbnRUeXBlfTtiYXNlNjQsJHtpdGVtLmRhdGF9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLml0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBvYmplY3RGaXQ6ICdjb250YWluJywgcGFkZGluZzogJzVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZmxleEdyb3c6IDEsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLml0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBGQyB7KGl0ZW0uaXRlbVNlbGxpbmdQcmljZSAqIHJhdGUpPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJwcmltYXJ5XCIgZm9udFdlaWdodD1cImJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAkIHtpdGVtLml0ZW1TZWxsaW5nUHJpY2U/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGRpc3BsYXk9XCJibG9ja1wiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9jazoge2l0ZW0uaXRlbVF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvSW52b2ljZVVwZGF0ZShpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtYXJnaW5Ub3A6ICc1cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbXQ9ezJ9PlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICBjb3VudD17c2hvcFRvdGFsUGFnZXN9XHJcbiAgICAgICAgICAgICAgICBwYWdlPXtzaG9wUGFnZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTaG9wUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TaWRlRHJhd2VyPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIEZhaWxlZCB0byBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdVcGRhdGVJdGVtT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVXBkYXRlSXRlbX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlSXRlbX0+XHJcbiAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2MDBweCcsIHBhZGRpbmc6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICA8SXRlbUZvcm1WaWV3MiBvbkNyZWF0ZU9wdGlvbj17aGFuZGxlQ3JlYXRlSXRlbX0gb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuSXRlbVVwZGF0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUl0ZW1VcGRhdGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlSXRlbVVwZGF0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzYwMHB4JywgcGFkZGluZzogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgIDxJdGVtVXBkYXRlVmlldzIgb25DbG9zZT17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfSBpZD17aWRJdGVtfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludm9pY2VGb3JtVXBkYXRlXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uL2FwaUNvbmZpZyc7XG5cbmNvbnN0IEl0ZW1UaHVtYm5haWwgPSAoeyBpdGVtSWQsIGluaXRpYWxEYXRhLCBpbml0aWFsVHlwZSB9KSA9PiB7XG4gIGNvbnN0IFtzcmMsIHNldFNyY10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoSW1hZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAvLyAxLiBDaGVjayBmb3IgaW5pdGlhbERhdGEgKHBhc3NlZCBmcm9tIHNlYXJjaC9zaG9wKVxuICAgICAgaWYgKGluaXRpYWxEYXRhICYmIGluaXRpYWxUeXBlICYmIGluaXRpYWxEYXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGluaXRpYWxUeXBlICE9PSBcInVuZGVmaW5lZFwiICYmIGluaXRpYWxEYXRhICE9PSBcIm51bGxcIikge1xuICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxEYXRhID09PSAnc3RyaW5nJyAmJiBpbml0aWFsRGF0YS5sZW5ndGggPiA1MCkge1xuICAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGFscmVhZHkgYSBkYXRhIFVSTFxuICAgICAgICAgICBpZiAoaW5pdGlhbERhdGEuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgICBzZXRTcmMoaW5pdGlhbERhdGEpO1xuICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRTcmMoYGRhdGE6JHtpbml0aWFsVHlwZX07YmFzZTY0LCR7aW5pdGlhbERhdGF9YCk7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxEYXRhLmRhdGEpIHtcbiAgICAgICAgICAgLy8gSGFuZGxlIGJ1ZmZlciBvYmplY3QgaWYgaXQncyBub3QgY29udmVydGVkIHRvIHN0cmluZyB5ZXRcbiAgICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoaW5pdGlhbERhdGEuZGF0YSk7XG4gICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBpbml0aWFsVHlwZSB9KTtcbiAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHNldFNyYyhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAyLiBGYWxsYmFjayB0byBmZXRjaCBpZiBubyBpbml0aWFsIGRhdGEgb3IgaWYgaXQgd2FzIGludmFsaWRcbiAgICAgIGlmICghaXRlbUlkIHx8IGl0ZW1JZCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBpdGVtSWQgPT09IFwibnVsbFwiKSB7XG4gICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2l0ZW1JZH1gKTtcbiAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEgJiYgcmVzLmRhdGEuZGF0YS5kYXRhKSB7XG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkocmVzLmRhdGEuZGF0YS5kYXRhLmRhdGEpO1xuICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiByZXMuZGF0YS5kYXRhLmNvbnRlbnRUeXBlIH0pO1xuICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHNldFNyYyhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgb25saW5lIGltYWdlOlwiLCBlcnIpO1xuICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaEltYWdlKCk7XG4gIH0sIFtpdGVtSWQsIGluaXRpYWxEYXRhLCBpbml0aWFsVHlwZV0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8QXZhdGFyXG4gICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICBzcmM9e3NyY31cbiAgICAgIHN4PXt7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MCwgYmFja2dyb3VuZENvbG9yOiAnI2YwZjBmMCcsIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyB9fVxuICAgID5cbiAgICAgIHshc3JjICYmIDxTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gc3g9e3sgZm9udFNpemU6IDQwLCBjb2xvcjogJyM5OTknIH19IC8+fVxuICAgIDwvQXZhdGFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVRodW1ibmFpbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3MvU2lkZWJhck5ldy5zY3NzJ1xyXG5pbXBvcnQgeyBPdXRsZXQsIE5hdkxpbmssIExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IERhc2hib2FyZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgUGVybUlkZW50aXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Blcm1JZGVudGl0eSc7XHJcbmltcG9ydCBMaXN0QWx0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xpc3RBbHQnO1xyXG5pbXBvcnQgRGVzY3JpcHRpb25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgUmVjZWlwdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZWNlaXB0JztcclxuaW1wb3J0IE1vdmluZ0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3ZpbmcnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3MnO1xyXG5pbXBvcnQgSW5zZXJ0RHJpdmVGaWxlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0luc2VydERyaXZlRmlsZSc7XHJcbmltcG9ydCBSZXN0b3JlUGFnZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXN0b3JlUGFnZSc7XHJcbmltcG9ydCBSZXF1ZXN0UXVvdGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUmVxdWVzdFF1b3RlJztcclxuaW1wb3J0IE1vbmV0aXphdGlvbk9uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vbmV0aXphdGlvbk9uJztcclxuaW1wb3J0IEVuZ2luZWVyaW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VuZ2luZWVyaW5nJztcclxuaW1wb3J0IHsgRXhwbGljaXQsIFNob3BwaW5nQmFnT3V0bGluZWQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IFJvb21QcmVmZXJlbmNlc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Sb29tUHJlZmVyZW5jZXMnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbUJ1dHRvbiwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQsIG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFBheW1lbnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGF5bWVudCc7XHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3JlVmVydCc7XHJcbmZ1bmN0aW9uIFNpZGViYXJEYXNoMSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8RGFzaGJvYXJkSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhc2hib2FyZFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UGVybUlkZW50aXR5SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkN1c3RvbWVyXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPExpc3RBbHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiU3RvcmVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlcXVlc3RRdW90ZUljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJRdW90YXRpb25cIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEZXNjcmlwdGlvbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbnZvaWNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9uZXRpemF0aW9uT25JY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGF5bWVudFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFNob3BwaW5nQmFnT3V0bGluZWQgLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEYWlseSBFeHBlbnNlc1wiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ICA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxSb29tUHJlZmVyZW5jZXNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHJvamVjdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlY2VpcHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHVyY2hhc2VzIFJlcXVlc3RcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgPEVuZ2luZWVyaW5nSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk1haW50ZW5hbmNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTW9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJEYXNoMSIsImltcG9ydCBEZXhpZSBmcm9tIFwiZGV4aWVcIjtcclxuXHJcbmNvbnN0IGRiID0gbmV3IERleGllKCdHbG9iYWxHYXRlJyk7XHJcblxyXG5kYi52ZXJzaW9uKDEpLnN0b3Jlcyh7XHJcbiAgICBjdXN0b21lclNjaGVtYTogJysraWQsQ3VzdG9tZXIsX2lkLGN1c3RvbWVyVHlwZSxkZXNpZ25hdGlvbixjdXN0b21lckZpcnN0TmFtZSwgY3VzdG9tZXJMYXN0TmFtZSxjdXN0b21lckZ1bGxOYW1lLGNvbXBhbnlOYW1lLGN1c3RvbWVyRW1haWwsY3VzdG9tZXJDb21wYW55UGhvbmUsY3VzdG9tZXJQaG9uZSxjdXJyZW5jeSxwYXltZW50VGVybXMsIGJpbGxpbmdBZGRyZXNzLGJpbGxpbmdDaXR5LGNyZWRpdCxzaGlwcGluZ0FkZHJlc3Msc2hpcHBpbmdDaXR5LGN1c3RvbWVyRGVzY3JpcHRpb24sc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgc3VwcGxpZXJTY2hlbWE6ICcrK2lkLF9pZCxzdXBwbGllck5hbWUsc3RvcmVOYW1lLGN1c3RvbWVyUGhvbmUxLGN1c3RvbWVyUGhvbmUyLGFkZHJlc3MsZGVzY3JpcHRpb24sc3luY2VkJyxcclxuICAgIGl0ZW1TY2hlbWE6ICcrK2lkLGl0ZW1OYW1lLF9pZCxpdGVtVXBjLHR5cGVJdGVtLGl0ZW1TdG9yZSx1bml0LGl0ZW1EaW1lbnNpb24saXRlbVdlaWdodCxpdGVtQ2F0ZWdvcnksaXRlbU1hbnVmYWN0dXJlcixpdGVtQnJhbmQsaXRlbUNvc3RQcmljZSxpdGVtUXVhbnRpdHksaXRlbVNlbGxpbmdQcmljZSxpdGVtRGVzY3JpcHRpb24sc3RvY2tPbkhhbmQsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgaXRlbVNjaGVtYVZpZXc6ICcrK2lkLF9pZCcsXHJcbiAgICBkYWlseUV4cGVuc2VTY2hlbWE6ICcrK2V4cGVuc2VOdW1iZXIsX2lkLGV4cGVuc2VDYXRlZ29yeSxhY2NvdW50TmFtZSxkZXNjcmlwdGlvbixleHBlbnNlRGF0ZSxhbW91bnQsZW1wbG95ZWVOYW1lLHJhdGUsdG90YWwsYWNjb3VudE5hbWVJbmZvLHJlYXNvbixDcmVhdGUsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgZGFpbHlFeHBlbnNlVmlld1NjaGVtYTogJysrZXhwZW5zZU51bWJlcixfaWQnLFxyXG4gICAgaGlkZGVuU2NoZW1hOiAnKytpZCxfaWQsaWRSb3csaGlkZGVuQnlDRU8nLFxyXG4gICAgaXRlbUNvZGVTY2hlbWE6ICcrK2lkLGl0ZW1DYXRlZ29yeSxfaWQsaXRlbUNvZGUnLFxyXG4gICAgaXRlbVVuaXRTY2hlbWE6ICcrK2lkLGl0ZW1Vbml0LF9pZCcsXHJcbiAgICBkZXBhcnRtZW50U2NoZW1hOiAnKytpZCxkZXBhcnRtZW50LF9pZCcsXHJcbiAgICBlc3RpbWF0ZVNjaGVtYTogJysrZXN0aW1hdGVOdW1iZXIsX2lkLGN1c3RvbWVyTmFtZSxlc3RpbWF0ZURhdGUsZXN0aW1hdGVEZWZlY3QsZXN0aW1hdGVTdWJqZWN0LHN0YXR1cyxpdGVtcyxzdWJUb3RhbCx0b3RhbCx0b3RhbFcsbm90ZSxlc3RpbWF0ZU5hbWUsQ3JlYXRlLGJhbGFuY2VEdWUsdGVybXMsc2hpcHBpbmcsbm90ZUluZm8sYWRqdXN0bWVudCxhZGp1c3RtZW50TnVtYmVyLHRvdGFsSW52b2ljZSxSZWYsUmVmZXJlbmNlTmFtZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBpbnZvaWNlU2NoZW1hOiAnKytpbnZvaWNlTnVtYmVyLF9pZCxjdXN0b21lck5hbWUsaW52b2ljZURhdGUsaW52b2ljZUR1ZURhdGUsaW52b2ljZVN1YmplY3QsaW52b2ljZVB1cmNoYXNlLGludm9pY2VEZWZlY3Qsc3RhdHVzLGl0ZW1zLHN1YlRvdGFsLFJlZmVyZW5jZU5hbWUsUmVmZXJlbmNlTmFtZTIsdG90YWwsbm90ZUluZm8sYmFsYW5jZUR1ZSx0b3RhbFcsYWN0aW9uVGFrZW4saW52b2ljZU5hbWUsUG9zaXRpb24sbm90ZSxDcmVhdGUsc2hpcHBpbmcsYWRqdXN0bWVudCxhZGp1c3RtZW50TnVtYmVyLHRvdGFsSW52b2ljZSx0ZXJtcyxSZWYsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgaW52b2ljZVZpZXdTY2hlbWE6ICcrK2ludm9pY2VOdW1iZXIsX2lkJyxcclxuICAgIHBvc1NjaGVtYTogJysrZmFjdHVyZU51bWJlcixfaWQsY3VzdG9tZXJOYW1lLGludm9pY2VEYXRlLHRpbWUsc3RhdHVzLGl0ZW1zLHN1YlRvdGFsLHRvdGFsRkMsdG90YWxVU0QscmF0ZSxDcmVhdGUsYmFsYW5jZUR1ZSxub3RlLHRvdGFsSW52b2ljZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBwYXltZW50U2NoZW1hOiAnKytwYXltZW50TnVtYmVyLF9pZCxjdXN0b21lck5hbWUsYW1vdW50LGJhbmtDaGFyZ2UsbW9kZXMscGF5bWVudERhdGUscmVmZXJlbmNlTnVtYmVyLGRlc2NyaXB0aW9uLHJlbWFpbmluZyxDcmVhdGUsUGF5bWVudFJlY2VpdmVkRkMsUGF5bWVudFJlY2VpdmVkVVNELFRvdGFsQW1vdW50LHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHByb2plY3RTY2hlbWE6ICcrK3Byb2plY3ROdW1iZXIsX2lkLGN1c3RvbWVyTmFtZSxwcm9qZWN0TmFtZSxzdGF0dXMscGhhc2UsZGVzY3JpcHRpb24sc3RhcnREYXRlLHZpc2l0RGF0ZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBwdXJjaGFzZVNjaGVtYTogJysrcHVyY2hhc2VOdW1iZXIsX2lkLGN1c3RvbWVyTmFtZSxub3RlSW5mbyxlc3RpbWF0ZURlZmVjdCxlc3RpbWF0ZVN1YmplY3QscHVyY2hhc2VOYW1lLHByb2plY3ROYW1lLGRlc2NyaXB0aW9uLFBvc2l0aW9uLHB1cmNoYXNlRGF0ZSxzdGF0dXMsc3RhdHVzSW5mbyxpdGVtcyxwdXJjaGFzZUFtb3VudDEscHVyY2hhc2VBbW91bnQyLFJlZmVyZW5jZU5hbWUsUmVmZXJlbmNlTmFtZTIsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgcHVyY2hhc2VTY2hlbWFWaWV3OiAnKytwdXJjaGFzZU51bWJlcixfaWQnLFxyXG4gICAgbWFpbnRlbmFuY2VTY2hlbWE6ICcrK3NlcnZpY2VOdW1iZXIsY3VzdG9tZXJOYW1lLF9pZCxhY3Rpb24sc2VydmljZU5hbWUsc2VydmljZURhdGUsbGFib3JRdHksdG90YWxMYWJvckZlZXNHZW5lcmFsZSx0ZWNobmljaWFuQXNzaWduLG5vdGUsdG90YWxMYWJvckZlZXMsbGFib3JQZXJjZW50YWdlLHRvdGFsRGlzY291bnQsbGFib3JEaXNjb3VudCx2aXNpdERhdGUsc3RhdHVzLGl0ZW1zLGl0ZW1EZXNjcmlwdGlvbkluZm8sYnJhbmQsYWN0aW9uVGFrZW4sbW9kZWwsd2FycmFudHksc2VyaWFsTm8sZGVmZWN0RGVzY3JpcHRpb24sYWRqdXN0bWVudCxhZGp1c3RtZW50TnVtYmVyLHRvdGFsSW52b2ljZSxzdWJUb3RhbCxDb252ZXJ0ZWQsUmVmZXJlbmNlTmFtZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBtYWludGVuYW5jZVZpZXdTY2hlbWE6ICcrK3NlcnZpY2VOdW1iZXIsX2lkJyxcclxuICAgIGVtcGxveWVlU2NoZW1hOiAnKytlbXBsb3llZUlkLF9pZCxqb2luRGF0ZSxlbXBsb3llZU5hbWUsZW1wbG95ZWVBZGRyZXNzLGVtcGxveWVlRW1haWwsZW1wbG95ZWVQaG9uZSxlbXBsb3llZVJvbGUsZGVwYXJ0bWVudCxkYXRlT2ZCaXJ0aCxHZW5kZXIsc3RhdHVzLHN0YXR1c01hcml0YWwsaWRlbnRpZmllcixpZGVudGlmaWVyTnVtYmVyLGV4cGlyZURhdGUsc2FsYXJ5LHJlYXNvbjEsZGVzY3JpcHRpb24sYmFua0FjY291bnROdW1iZXIsYmFua05hbWUsb3RoZXIsYm91bmNlQWxsb3dhbmNlcyxmb29kQmFzaWMsYmFzaWNUcmFuc3BvcnQsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgcGF5Um9sbFNjaGVtYTogJysrcGF5TnVtYmVyLF9pZCxwYXlEYXRlLG1vbnRoLGRheXNXLHN0YXR1cyxkYXlzT3BlbixMb3BzLGJhc2ljU2FsYXJ5LGVhcm5pbmdTYWxhcnksYWR2YW5jZWRTYWxhcnksYmFzaWNUcmFuc3BvcnQsdHJhbnNwb3J0RWFybmluZyx0cmFuc3BvcnREZWR1Y3Rpb24sZm9vZEJhc2ljLGZvb2RFYXJuaW5nLGl0ZW1Mb3N0LGZvb2REZWR1Y3Rpb24sYm91bmNlQWxsb3dhbmNlcyxib3VuY2VBbGxvd2FuY2VzRWFybmluZyxvdGhlcixvdGhlckVhcm5pbmcsbG9hbixib251cyx0b3RhbEFjdHVhbFNhbGFyeSx0b3RhbEFjdHVhbEVhcm5pbmcsdG90YWxBY3R1YWxEZWR1Y3Rpb24sdG90YWxOZXQsdG90YWxQYWlkLHJhdGUsdG90YWxQYWlkRG9sbGFycyx3b3JkcyxlbXBsb3llZU5hbWUsYW1vdW50UGF5VVNELGFtb3VudFBheUZDLENyZWRpdEZDLENyZWRpdFVTRCxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBlbXBsb3llZVVzZXJTY2hlbWE6ICdfaWQsZW1wbG95ZWVOYW1lLGVtcGxveWVlRW1haWwscm9sZSxwYXNzd29yZCx2ZXJpZmljYXRpb25Db2RlLGNvZGVFeHBpcmF0aW9uLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHVzZXJBY2NvdW50OiAnaWRJbmZvLGVtcGxveWVlTmFtZSxwYXNzd29yZCcsXHJcbiAgICBncmFudEFjY2Vzc1NjaGVtYTogJysraWQsZW1wbG95ZWVOYW1lLF9pZCx1c2VySUQsbW9kdWxlcycsXHJcbiAgICBjYXNoU2NoZW1hOiAnKytjYXNoTnVtYmVyLF9pZCxjYXNoRGF0ZSxzdGF0dXMsdG90YWxDYXNoLGFtb3VudCx0b3RhbEl0ZW1QdXJjaGFzZVVTRCx0b3RhbFBheXJvbGxVU0QsdG90YWxFeHBlbnNlc1VTRCx0b3RhbEV4cGVuc2VzRkMsdG90YWxDYXNoVVNELHRvdGFsQ2FzaEZDLHJldHVybkFtb3VudEZDLHJldHVybkFtb3VudFVTRCxSZW1haW5pbmdBbW91bnRGQyxSZW1haW5pbmdBbW91bnRVU0QsQ3JlYXRlLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHJhdGVTY2hlbWE6ICcrK2lkLF9pZCxyYXRlJyxcclxuICAgIHBheW1lbnRSYXRlU2NoZW1hOiAnKytpZCxfaWQscGF5bWVudFJhdGUnLFxyXG4gICAgZGFpbHlFeHBlbnNlc0NhdGVnb3J5U2NoZW1hOiAnKytpZCxfaWQsZXhwZW5zZXNDYXRlZ29yeScsXHJcbiAgICBlbXBsb3llZUF0dGVuZGFuY2VTY2hlbWE6ICcrK2lkSW5mbyxfaWQsaWQsdGltZUluLHRpbWVPdXQsbmFtZSxvYnNlcnZhdGlvbixub3RlLGRheXNXTixzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBpdGVtUHVyY2hhc2VTY2hlbWE6ICcrK2l0ZW1QdXJjaGFzZU51bWJlcixfaWQsaXRlbVB1cmNoYXNlRGF0ZSxtYW51ZmFjdHVyZXIsbWFudWZhY3R1cmVyTnVtYmVyLGRlc2NyaXB0aW9uLG5vdGUsQ3JlYXRlLHRvdGFsLHRvdGFsRkMsaXRlbXMscmVhc29uLHByb2plY3ROYW1lJyxcclxuICAgIGl0ZW1QdXJjaGFzZVZpZXdTY2hlbWE6ICcrK2l0ZW1QdXJjaGFzZU51bWJlcixfaWQnLFxyXG4gICAgaXRlbVJldHVybjogJysrb3V0TnVtYmVyLF9pZCxpdGVtT3V0RGF0ZSxyZWFzb24scmVmZXJlbmNlLGl0ZW1zUXR5QXJyYXksZGVzY3JpcHRpb24sQ3JlYXRlLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIGl0ZW1SZXR1cm5WaWV3OiAnKytvdXROdW1iZXIsX2lkJyxcclxuICAgIGl0ZW1PdXRTY2hlbWE6ICcrK2lkSW5mbyxvdXROdW1iZXIsX2lkLGl0ZW1PdXREYXRlLHJlYXNvbixyZWZlcmVuY2UsaXRlbXNRdHlBcnJheSxkZXNjcmlwdGlvbixDcmVhdGUsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgaXRlbU91dFZpZXdTY2hlbWE6ICcrK2lkSW5mbyxfaWQnLFxyXG4gICAgcHVyY2hhc2VPcmRlcjogJysrb3V0TnVtYmVyLF9pZCx0b3RhbFVTRCx0b3RhbCx0b3RhbEZDLGl0ZW1PdXREYXRlLHJlYXNvbixyZWZlcmVuY2UsaXRlbXNRdHlBcnJheSxtYW51ZmFjdHVyZXIsc3RhdHVzLENvbnZlcnRlZCxtYW51ZmFjdHVyZXJOdW1iZXIsZGVzY3JpcHRpb24sSXBSZWxhdGVkLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHB1cmNoYXNlT3JkZXJWaWV3OiAnKytvdXROdW1iZXIsX2lkJyxcclxuICAgIHBsYW5pbmdTY2hlbWE6ICcrK2lkSW5mbyxwbGFuaW5nRGF0ZSxlbXBsb3llZU5hbWUsZW1wbG95ZWVJRCxwcm9qZWN0TmFtZSxkYXlQYXlVU2Qsd29ya051bWJlcixzdGF0dXMscGxhbmluZ0Rlc2NyaXB0aW9uLHBsYW5pbmdUYXNrJyxcclxuICAgIHJhdGVSZXR1cm5TY2hlbWE6ICcrK2lkLCBfaWQsIHJhdGVSJyxcclxuXHJcbiAgICAvLyBDYWNoZSB0YWJsZXMgZm9yIGh5YnJpZCBhcmNoaXRlY3R1cmUgKHYyLjQuMClcclxuICAgIC8vIFRoZXNlIHN0b3JlIGZ1bGwgZGF0YXNldHMgbG9jYWxseSBmb3IgaW5zdGFudCBxdWVyaWVzXHJcbiAgICBpdGVtUHVyY2hhc2VDYWNoZTogJ19pZCwgaXRlbVB1cmNoYXNlRGF0ZSwgaXRlbXMsIG1hbnVmYWN0dXJlcicsXHJcbiAgICBpdGVtT3V0Q2FjaGU6ICdfaWQsIGl0ZW1PdXREYXRlLCBpdGVtc1F0eUFycmF5JyxcclxuICAgIHBvc0NhY2hlOiAnX2lkLCBpbnZvaWNlRGF0ZSwgaXRlbXMsIGN1c3RvbWVyTmFtZScsXHJcbiAgICBpdGVtUmV0dXJuQ2FjaGU6ICdfaWQsIGl0ZW1PdXREYXRlLCBpdGVtc1F0eUFycmF5JyxcclxuICAgIGludm9pY2VDYWNoZTogJ19pZCwgaW52b2ljZU51bWJlciwgY3VzdG9tZXJOYW1lLCBpbnZvaWNlRGF0ZSwgaXRlbXMnLFxyXG4gICAgZXN0aW1hdGVDYWNoZTogJ19pZCwgZXN0aW1hdGVOdW1iZXIsIGN1c3RvbWVyTmFtZSwgZXN0aW1hdGVEYXRlLCBpdGVtcycsXHJcbiAgICBjdXN0b21lckNhY2hlOiAnX2lkLCBjdXN0b21lckZ1bGxOYW1lLCBjb21wYW55TmFtZSwgY3VzdG9tZXJFbWFpbCcsXHJcbiAgICBzdXBwbGllckNhY2hlOiAnX2lkLCBzdXBwbGllck5hbWUsIHN0b3JlTmFtZScsXHJcbiAgICBwcm9qZWN0Q2FjaGU6ICdfaWQsIHByb2plY3ROdW1iZXIsIHByb2plY3ROYW1lLCBjdXN0b21lck5hbWUnLFxyXG4gICAgbWFpbnRlbmFuY2VDYWNoZTogJ19pZCwgc2VydmljZU51bWJlciwgc2VydmljZU5hbWUsIGN1c3RvbWVyTmFtZSwgaXRlbXMnLFxyXG4gICAgZW1wbG95ZWVDYWNoZTogJ19pZCwgZW1wbG95ZWVOYW1lLCBlbXBsb3llZUVtYWlsLCBlbXBsb3llZVJvbGUsIGRlcGFydG1lbnQnLFxyXG4gICAgcGF5cm9sbENhY2hlOiAnX2lkLCBwYXlOdW1iZXIsIHBheURhdGUsIG1vbnRoLCBlbXBsb3llZU5hbWUnLFxyXG4gICAgcmF0ZUNhY2hlOiAnX2lkLCByYXRlJyxcclxuICAgIHVzZXJDYWNoZTogJ19pZCwgZW1wbG95ZWVOYW1lLCByb2xlJyxcclxuICAgIGdyYW50QWNjZXNzQ2FjaGU6ICdfaWQsIHVzZXJJRCwgZW1wbG95ZWVOYW1lLCBtb2R1bGVzJyxcclxuICAgIGNvbXBhbnlQcm9maWxlQ2FjaGU6ICdfaWQnLFxyXG4gICAgcHVyY2hhc2VPcmRlckNhY2hlOiAnX2lkLCBvdXROdW1iZXIsIG1hbnVmYWN0dXJlciwgc3RhdHVzJyxcclxuICAgIHBheW1lbnRDYWNoZTogJ19pZCwgcGF5bWVudE51bWJlciwgY3VzdG9tZXJOYW1lLCBwYXltZW50RGF0ZScsXHJcbiAgICBjYXNoQ2FjaGU6ICdfaWQsIGNhc2hOdW1iZXIsIGNhc2hEYXRlLCBzdGF0dXMnLFxyXG4gICAgZGFpbHlFeHBlbnNlQ2FjaGU6ICdfaWQsIGV4cGVuc2VOdW1iZXIsIGV4cGVuc2VDYXRlZ29yeSwgZXhwZW5zZURhdGUnLFxyXG4gICAgLy8gU3luYyBtZXRhZGF0YVxyXG4gICAgc3luY01ldGFkYXRhOiAnKytpZCwgdGFibGVOYW1lLCBsYXN0U3luYywgcmVjb3JkQ291bnQnXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyRGFzaDEiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiRGVsZXRlSWNvbiIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJQYXBlciIsIlRhYmxlQ29udGFpbmVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkF1dG9jb21wbGV0ZSIsIkJveCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJEaXZpZGVyIiwiYXhpb3MiLCJEcmF3ZXIiLCJTaWRlRHJhd2VyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZE1lZGlhIiwiQnV0dG9uIiwiUGFnaW5hdGlvbiIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJBZGQiLCJEcmFnSW5kaWNhdG9yUm91bmRlZCIsIkVkaXQiLCJSZWZyZXNoIiwiUmVtb3ZlQ2lyY2xlT3V0bGluZSIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwiRU5EUE9JTlRfVVJMIiwiU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIiwiQWRkU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIiwidjQiLCJEZW1vQ29udGFpbmVyIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJBZGFwdGVyRGF5anMiLCJEYXRlUGlja2VyIiwiZGF5anMiLCJBcnJvd0JhY2siLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiTG9hZGVyIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkNsb3NlIiwiSXRlbUZvcm1WaWV3MiIsIkl0ZW1VcGRhdGVWaWV3MiIsIm51bWJlclRvV29yZHMiLCJEcmFnRHJvcENvbnRleHQiLCJEcmFnZ2FibGUiLCJEcm9wcGFibGUiLCJJdGVtVGh1bWJuYWlsIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiZGIiLCJMaWdodFRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIkJsYWNrVG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiRG93blRvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwic3R5bGUyIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkludm9pY2VGb3JtVXBkYXRlIiwiX3VzZVBhcmFtcyIsImlkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsIm5hdmlnYXRvciIsIm9uTGluZSIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsInJlc0xvY2FsSW5mbyIsImVtcGxveWVlVXNlclNjaGVtYSIsIl9pZCIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImN1c3RvbWVyTmFtZSIsInNldEN1c3RvbWVyTmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaW52b2ljZURhdGUiLCJzZXRJbnZvaWNlRGF0ZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiaW52b2ljZUR1ZURhdGUiLCJzZXRJbnZvaWNlRHVlRGF0ZSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwiaW52b2ljZU51bWJlciIsInNldEludm9pY2VOdW1iZXIiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJpbnZvaWNlU3ViamVjdCIsInNldEludm9pY2VTdWJqZWN0IiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImludm9pY2VEZWZlY3QiLCJzZXRJbnZvaWNlRGVmZWN0IiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsIm5vdGUiLCJzZXROb3RlIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsIm5vdGVJbmZvIiwic2V0Tm90ZUluZm8iLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4Iiwic3RhdHVzSW5mbyIsInNldFN0YXR1c0luZm8iLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwic2hvcE9wZW4iLCJzZXRTaG9wT3BlbiIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJzaG9wSXRlbXMiLCJzZXRTaG9wSXRlbXMiLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0Iiwic2hvcFNlYXJjaCIsInNldFNob3BTZWFyY2giLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2Iiwic2hvcFBhZ2UiLCJzZXRTaG9wUGFnZSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJzaG9wVG90YWxQYWdlcyIsInNldFNob3BUb3RhbFBhZ2VzIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsInJhdGUiLCJzZXRSYXRlIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsInNob3BMb2FkaW5nIiwic2V0U2hvcExvYWRpbmciLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwiaXRlbXMiLCJTZXRJdGVtcyIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJhY3Rpb25UYWtlbiIsInNldEFjdGlvblRha2VuIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsInN1YlRvdGFsIiwic2V0U3ViVG90YWwiLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwidG90YWwiLCJzZXRUb3RhbCIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJzaGlwcGluZyIsInNldFNoaXBwaW5nIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsImFkanVzdG1lbnQiLCJzZXRBZGp1c3RtZW50IiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsImFkanVzdG1lbnROdW1iZXIiLCJzZXRBZGp1c3RtZW50TnVtYmVyIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsInRvdGFsSW52b2ljZSIsInNldFRvdGFsSW52b2ljZSIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJ0ZXJtcyIsInNldFRlcm1zIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsImJhbGFuY2VEdWUiLCJzZXRCYWxhbmNlRHVlIiwiX3VzZVN0YXRlNTMiLCJfdXNlU3RhdGU1NCIsInRvdGFsVyIsInNldFRvdGFsVyIsIl91c2VTdGF0ZTU1IiwiX3VzZVN0YXRlNTYiLCJJdGVtSW5mb3JtYXRpb24iLCJzZXRJdGVtSW5mb3JtYXRpb24iLCJfdXNlU3RhdGU1NyIsIl91c2VTdGF0ZTU4IiwiaXRlbU5ld1F0eSIsInNldEl0ZW1OZXdRdHkiLCJmZXRjaERhdGEiLCJfcmVmMCIsIl9yZXMkZGF0YSIsIl9yZXMkZGF0YTIiLCJfcmVzJGRhdGEzIiwiX3JlcyRkYXRhNCIsIk51bWJlciIsInN0YXR1cyIsInJlc0xvY2FsIiwiaW52b2ljZVNjaGVtYSIsImZldGNoSXRlbSIsIl9yZWYxIiwicmV2ZXJzZSIsInJlc0MiLCJvZmZMaW5lQ3VzdG9tZXIxIiwiaXRlbVNjaGVtYSIsInRvQXJyYXkiLCJvZmZMaW5lQ3VzdG9tZXIiLCJjdXN0b21lclNjaGVtYSIsImZldGNoU2hvcCIsIl9yZWYxMCIsInJlc1JhdGUiLCJmb3JFYWNoIiwicm93IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidG90YWxQYWdlcyIsImZpbHRlciIsInR5cGVJdGVtIiwib2ZmTGluZVJhdGUiLCJyYXRlU2NoZW1hIiwiaGFuZGxlUmVmcmVzaFNob3AiLCJoYW5kbGVTaG9wUGFnZUNoYW5nZSIsImUiLCJuZXdQYWdlIiwiaGFuZGxlU2hvcFNlYXJjaENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidG9nZ2xlU2hvcCIsImhhbmRsZUFkZFRvSW52b2ljZVVwZGF0ZSIsInNob3BJdGVtIiwiZXhpc3RpbmdJdGVtSW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaXRlbU5hbWUiLCJ1cGRhdGVkSXRlbXMiLCJjdXJyZW50SXRlbSIsIm5ld1F0eSIsInBhcnNlSW50IiwiaXRlbVF0eSIsIml0ZW1BbW91bnQiLCJNYXRoIiwicm91bmQiLCJpdGVtUmF0ZSIsInRvdGFsQW1vdW50IiwiZGlzY291bnQiLCJpdGVtRGlzY291bnQiLCJwZXJjZW50YWdlIiwidG90YWxDb3N0IiwiaXRlbUNvc3QiLCJ0b3RhbEdlbmVyYWxlIiwiaXRlbUJ1eSIsIm5ld0l0ZW0iLCJpZFJvdyIsImNvbnRlbnRUeXBlIiwiaXRlbURlc2NyaXB0aW9uIiwiaXRlbVNlbGxpbmdQcmljZSIsIml0ZW1Db3N0UHJpY2UiLCJpdGVtV2VpZ2h0Iiwic3RvY2siLCJpdGVtUXVhbnRpdHkiLCJpdGVtT3V0IiwibmV3SXRlbU91dCIsImhhbmRsZUNoYW5nZUl0ZW0iLCJuZXdWYWx1ZSIsInNlbGVjdGVkT3B0aW9ucyIsIm1hcCIsImhhbmRsZUNoYW5nZUN1c3RvbWVyIiwiZmluZCIsIm9wdGlvbiIsIkN1c3RvbWVyIiwiYmlsbGluZ0FkZHJlc3MiLCJiaWxsaW5nQ2l0eSIsImhhbmRsZUNsZWFyQ3VzdG9tZXIiLCJoYW5kbGVDaGFuZ2UiLCJfZSR0YXJnZXQiLCJuYW1lIiwibGlzdCIsImkiLCJJdGVtIiwiaGFuZGxlQ2hhbmdlQ0VPIiwiX2UkdGFyZ2V0MiIsImFkZEl0ZW0iLCJhZGRJdGVtV2hpdGUiLCJuZXdEZXNjcmlwdGlvbiIsImFkZEl0ZW1Sb3ciLCJ1cGRhdGUiLCJzcGxpY2UiLCJhZGRJdGVtV2hpdGVSb3ciLCJoYW5kbGVEcmFnRW5kIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJuZXdJdGVtcyIsIl9uZXdJdGVtcyRzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsIl9uZXdJdGVtcyRzcGxpY2UyIiwicmVtb3ZlZCIsImZpbHRlckl0ZW1JbmZvcm1hdGlvbiIsIl9yb3ckaXRlbU5hbWUiLCJfdXNlU3RhdGU1OSIsIl91c2VTdGF0ZTYwIiwib3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVDcmVhdGVJdGVtIiwiX3VzZVN0YXRlNjEiLCJfdXNlU3RhdGU2MiIsIm9wZW5CYWNrIiwic2V0T3BlbkJhY2siLCJoYW5kbGVPcGVuQmFjayIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VCYWNrIiwiZGlmZlN0YXR1cyIsInBhcnNlRmxvYXQiLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlIiwiaGFuZGxlU2hvd0F1dG9jb21wbGV0ZURlc2NyaXB0aW9uIiwiX3VzZVN0YXRlNjMiLCJfdXNlU3RhdGU2NCIsIm9wZW5JdGVtVXBkYXRlIiwic2V0T3Blbkl0ZW1VcGRhdGUiLCJfdXNlU3RhdGU2NSIsIl91c2VTdGF0ZTY2IiwiaWRJdGVtIiwic2V0SWRJdGVtIiwiaGFuZGxlT3Blbkl0ZW1VcGRhdGUiLCJfcmVmMTEiLCJfeCIsImhhbmRsZUNsb3NlSXRlbVVwZGF0ZSIsIl9yZWYxMiIsIl9yb3ckaXRlbU5hbWUyIiwiX3VzZVN0YXRlNjciLCJfdXNlU3RhdGU2OCIsIm9wZW4yIiwic2V0T3BlbjIiLCJoYW5kbGVPcGVuVXBkYXRlUmVhc29uIiwiaGFuZGxlQ2xvc2VVcGRhdGVSZWFzb24iLCJfdXNlU3RhdGU2OSIsIl91c2VTdGF0ZTcwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGU3MSIsIl91c2VTdGF0ZTcyIiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU3MyIsIl91c2VTdGF0ZTc0IiwibG9hZGluZ1VwZGF0ZUl0ZW1PcGVuTW9kYWwiLCJzZXRMb2FkaW5nVXBkYXRlSXRlbU9wZW5Nb2RhbCIsIl91c2VTdGF0ZTc1IiwiX3VzZVN0YXRlNzYiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xvc2VVcGRhdGVJdGVtIiwiaGFuZGxlQ2xvc2VFcnJvciIsImRlbGV0ZUl0ZW0iLCJfcmVmMTMiLCJfeDIiLCJyZXN1bHQxIiwicmVkdWNlIiwic3VtIiwidG9GaXhlZCIsIm5ld1RvdGFsIiwibmV3QmFsYW5jZSIsIndob2xlUGFydCIsImZsb29yIiwiZnJhY3Rpb25hbFBhcnQiLCJzcGxpdCIsIndob2xlV29yZHMiLCJ0b1dvcmRzIiwiZnJhY3Rpb25hbFdvcmRzIiwiX3VzZVN0YXRlNzciLCJfdXNlU3RhdGU3OCIsInJlYXNvbiIsInNldFJlYXNvbiIsImRhdGVDb21tZW50IiwiRGF0ZSIsIl91c2VTdGF0ZTc5IiwiX3VzZVN0YXRlODAiLCJoaWRlQmFjayIsInNldEhpZGVCYWNrIiwiaW52b2ljZU5hbWUiLCJTdHJpbmciLCJwYWRTdGFydCIsImhhbmRsZUNyZWF0ZUNvbW1lbnQiLCJfcmVmMTQiLCJpZEluZm8iLCJwZXJzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwicG9zdCIsImxvZyIsImhhbmRsZVN1Ym1pdEVkaXQiLCJfcmVmMTUiLCJpdGVtc1dpdGhvdXREYXRhIiwiX3JlZjE2IiwicmVzdCIsIl9leGNsdWRlZDQiLCJ1cGRhdGVTIiwiY3VycmVudFJlcyIsImN1cnJlbnRJbnZvaWNlIiwidXBkYXRlZERhdGEiLCJwdXQiLCJfeDMiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiX3VzZVN0YXRlODEiLCJfdXNlU3RhdGU4MiIsInNlYXJjaDIiLCJzZXRTZWFyY2gyIiwiaGFuZGxlU2VhcmNoMiIsIm5ld0FycmF5MiIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJ4cyIsInRpdGxlIiwicGxhY2VtZW50IiwiZmxvYXQiLCJkaXNhYmxlQ2xlYXJhYmxlIiwib3B0aW9ucyIsImdldE9wdGlvbkxhYmVsIiwib25DaGFuZ2UiLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsImxhYmVsIiwicmVxdWlyZWQiLCJodG1sRm9yIiwiZGlzYWJsZWQiLCJ0eXBlIiwic3RhcnRBZG9ybm1lbnQiLCJkYXRlQWRhcHRlciIsImNvbXBvbmVudHMiLCJkYXRlIiwiZm9ybWF0IiwidW5kZWZpbmVkIiwibXVsdGlsaW5lIiwicm93cyIsInJpZ2h0Iiwib25EcmFnRW5kIiwiZHJvcHBhYmxlSWQiLCJwcm92aWRlZCIsInNuYXBzaG90IiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsImtleSIsImRyYWdnYWJsZUlkIiwiX0l0ZW0kaXRlbU5hbWUiLCJfSXRlbSRpdGVtTmFtZTIiLCJfSXRlbSRpdGVtTmFtZTMiLCJfSXRlbSRpdGVtTmFtZTQiLCJkcmFnZ2FibGVQcm9wcyIsIkZyYWdtZW50IiwiZHJhZ0hhbmRsZVByb3BzIiwiY29sU3BhbiIsInNpemUiLCJjdXJzb3IiLCJnYXAiLCJpdGVtSWQiLCJpbml0aWFsRGF0YSIsImluaXRpYWxUeXBlIiwiZmxleERpcmVjdGlvbiIsImhpZGRlbiIsImZvbnRXZWlnaHQiLCJ0b1VwcGVyQ2FzZSIsIl9JdGVtJGl0ZW1OYW1lNSIsIml0ZW1CcmFuZCIsInJlbmRlck9wdGlvbiIsIm9uSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5ld0lucHV0VmFsdWUiLCJmaWx0ZXJPcHRpb25zIiwiX3JlZjE3IiwiUGFwZXJDb21wb25lbnQiLCJfcmVmMTgiLCJjaGlsZHJlbiIsIm90aGVyIiwiX2V4Y2x1ZGVkNSIsIm1hcmdpblRvcCIsIm9uTW91c2VEb3duIiwicGxhY2Vob2xkZXIiLCJyZXBsYWNlIiwiX0l0ZW0kaXRlbU5hbWU2IiwiX0l0ZW0kaXRlbU5hbWU3IiwiX0l0ZW0kaXRlbU5hbWU4IiwiX0l0ZW0kaXRlbU5hbWU5IiwiX0l0ZW0kaXRlbU5hbWUwIiwiX3JlZjE5IiwiX3JlZjIwIiwiX2V4Y2x1ZGVkNiIsImJvcmRlckNvbGxhcHNlIiwiYm9yZGVyQm90dG9tIiwidGV4dEFsaWduIiwiYWxpZ24iLCJtYXhSb3dzIiwib25DbG9zZSIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsImFuY2hvciIsIlBhcGVyUHJvcHMiLCJtYiIsImZ1bGxXaWR0aCIsIm1sIiwib3ZlcmZsb3dZIiwibWF4SGVpZ2h0IiwiX3JlZjIxIiwiX2l0ZW0kaXRlbVNlbGxpbmdQcmljIiwiaW1hZ2UiLCJhbHQiLCJvYmplY3RGaXQiLCJndXR0ZXJCb3R0b20iLCJjb3VudCIsInBhZ2UiLCJvbkNyZWF0ZU9wdGlvbiIsIkF2YXRhciIsInNyYyIsInNldFNyYyIsImZldGNoSW1hZ2UiLCJsZW5ndGgiLCJzdGFydHNXaXRoIiwiYnVmZmVyIiwiVWludDhBcnJheSIsImJsb2IiLCJCbG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlYWRBc0RhdGFVUkwiLCJlcnIiLCJib3JkZXIiLCJPdXRsZXQiLCJOYXZMaW5rIiwiTGluayIsInVzZUxvY2F0aW9uIiwiRGFzaGJvYXJkSWNvbiIsIlBlcm1JZGVudGl0eUljb24iLCJMaXN0QWx0SWNvbiIsIkRlc2NyaXB0aW9uSWNvbiIsIlJlY2VpcHRJY29uIiwiTW92aW5nSWNvbiIsIlNldHRpbmdzSWNvbiIsIkluc2VydERyaXZlRmlsZUljb24iLCJSZXN0b3JlUGFnZUljb24iLCJSZXF1ZXN0UXVvdGVJY29uIiwiTW9uZXRpemF0aW9uT25JY29uIiwiRW5naW5lZXJpbmdJY29uIiwiRXhwbGljaXQiLCJTaG9wcGluZ0JhZ091dGxpbmVkIiwiUm9vbVByZWZlcmVuY2VzSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsIlBheW1lbnRJY29uIiwiTW9yZVZlcnRJY29uIiwicHJpbWFyeSIsIkRleGllIiwidmVyc2lvbiIsInN0b3JlcyIsInN1cHBsaWVyU2NoZW1hIiwiaXRlbVNjaGVtYVZpZXciLCJkYWlseUV4cGVuc2VTY2hlbWEiLCJkYWlseUV4cGVuc2VWaWV3U2NoZW1hIiwiaGlkZGVuU2NoZW1hIiwiaXRlbUNvZGVTY2hlbWEiLCJpdGVtVW5pdFNjaGVtYSIsImRlcGFydG1lbnRTY2hlbWEiLCJlc3RpbWF0ZVNjaGVtYSIsImludm9pY2VWaWV3U2NoZW1hIiwicG9zU2NoZW1hIiwicGF5bWVudFNjaGVtYSIsInByb2plY3RTY2hlbWEiLCJwdXJjaGFzZVNjaGVtYSIsInB1cmNoYXNlU2NoZW1hVmlldyIsIm1haW50ZW5hbmNlU2NoZW1hIiwibWFpbnRlbmFuY2VWaWV3U2NoZW1hIiwiZW1wbG95ZWVTY2hlbWEiLCJwYXlSb2xsU2NoZW1hIiwidXNlckFjY291bnQiLCJncmFudEFjY2Vzc1NjaGVtYSIsImNhc2hTY2hlbWEiLCJwYXltZW50UmF0ZVNjaGVtYSIsImRhaWx5RXhwZW5zZXNDYXRlZ29yeVNjaGVtYSIsImVtcGxveWVlQXR0ZW5kYW5jZVNjaGVtYSIsIml0ZW1QdXJjaGFzZVNjaGVtYSIsIml0ZW1QdXJjaGFzZVZpZXdTY2hlbWEiLCJpdGVtUmV0dXJuIiwiaXRlbVJldHVyblZpZXciLCJpdGVtT3V0U2NoZW1hIiwiaXRlbU91dFZpZXdTY2hlbWEiLCJwdXJjaGFzZU9yZGVyIiwicHVyY2hhc2VPcmRlclZpZXciLCJwbGFuaW5nU2NoZW1hIiwicmF0ZVJldHVyblNjaGVtYSIsIml0ZW1QdXJjaGFzZUNhY2hlIiwiaXRlbU91dENhY2hlIiwicG9zQ2FjaGUiLCJpdGVtUmV0dXJuQ2FjaGUiLCJpbnZvaWNlQ2FjaGUiLCJlc3RpbWF0ZUNhY2hlIiwiY3VzdG9tZXJDYWNoZSIsInN1cHBsaWVyQ2FjaGUiLCJwcm9qZWN0Q2FjaGUiLCJtYWludGVuYW5jZUNhY2hlIiwiZW1wbG95ZWVDYWNoZSIsInBheXJvbGxDYWNoZSIsInJhdGVDYWNoZSIsInVzZXJDYWNoZSIsImdyYW50QWNjZXNzQ2FjaGUiLCJjb21wYW55UHJvZmlsZUNhY2hlIiwicHVyY2hhc2VPcmRlckNhY2hlIiwicGF5bWVudENhY2hlIiwiY2FzaENhY2hlIiwiZGFpbHlFeHBlbnNlQ2FjaGUiLCJzeW5jTWV0YWRhdGEiXSwic291cmNlUm9vdCI6IiJ9