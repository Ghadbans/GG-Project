"use strict";
exports.id = "src_js_AdminView1_PageView_EstimateView_EstimateInvoiceForm_js";
exports.ids = ["src_js_AdminView1_PageView_EstimateView_EstimateInvoiceForm_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/EstimateView/EstimateInvoiceForm.js"
/*!************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EstimateView/EstimateInvoiceForm.js ***!
  \************************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Refresh.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../utils/apiCache */ "./src/js/utils/apiCache.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _dexieDb__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../../../dexieDb */ "./src/js/dexieDb.js");
/* harmony import */ var _component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../../../component/ItemThumbnail */ "./src/js/component/ItemThumbnail.js");
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
function EstimateInvoiceForm() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_40__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_52__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_52__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_53__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          if (navigator.onLine) {
            try {
              var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
              var Name = res.data.data.employeeName;
              var Role = res.data.data.role;
              dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_53__.setUser)({
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
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_53__.setUser)({
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
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/create-estimation");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("QUOTE VALID FOR 30 DAYS (SUBJECT TO STOCK/MARKET CHANGES). PAYMENT: 40% DEPOSIT / 50% MID-PROJECT / 10% UPON COMPLETION. ALL MATERIAL SALES ARE FINAL. WE ARE NOT RESPONSIBLE FOR LOSS, THEFT, OR DAMAGE CAUSED BY DEFECTIVE PARTS OR EXTERNAL FACTORS."),
    _useState2 = _slicedToArray(_useState, 2),
    terms = _useState2[0],
    setTerms = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    estimateDate = _useState4[0],
    setEstimateDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    estimateSubject = _useState6[0],
    setEstimateSubject = _useState6[1];
  var status = "Draft";
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    estimateDefect = _useState8[0],
    setEstimateDefect = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("WE LOOK FORWARD TO THE OPPORTUNITY TO DO BUSINESS WITH YOU."),
    _useState0 = _slicedToArray(_useState9, 2),
    note = _useState0[0],
    setNote = _useState0[1];
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
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    estimateNumber = _useState28[0],
    setEstimateNumber = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    noteInfo = _useState30[0],
    setNoteInfo = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    shopOpen = _useState32[0],
    setShopOpen = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState34 = _slicedToArray(_useState33, 2),
    shopItems = _useState34[0],
    setShopItems = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState36 = _slicedToArray(_useState35, 2),
    shopSearch = _useState36[0],
    setShopSearch = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState38 = _slicedToArray(_useState37, 2),
    shopPage = _useState38[0],
    setShopPage = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState40 = _slicedToArray(_useState39, 2),
    shopTotalPages = _useState40[0],
    setShopTotalPages = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState42 = _slicedToArray(_useState41, 2),
    rate = _useState42[0],
    setRate = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    shopLoading = _useState44[0],
    setShopLoading = _useState44[1];
  var dateComment = new Date();
  var estimateName = "QUO-" + String(estimateNumber).padStart(6, '0');
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState46 = _slicedToArray(_useState45, 2),
    ItemInformation = _useState46[0],
    setItemInformation = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    includeLetter = _useState48[0],
    setIncludeLetter = _useState48[1];
  var PROFESSIONAL_COVER_LETTER = "Dear Valued Customer,\n\nThank you for giving us the opportunity to provide you with this quotation for your upcoming project.\n\nAt GLOBAL GATE SARL, we pride ourselves on delivering high-quality services and materials tailored to meet your specific needs. Our team has carefully reviewed your requirements, and we are confident that the proposed solution offers the best value and technical excellence.\n\nWe remain at your disposal for any further information or clarification you may require. We look forward to the possibility of working together.\n\nBest regards,\n\nThe GLOBAL GATE Team";
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(PROFESSIONAL_COVER_LETTER),
    _useState50 = _slicedToArray(_useState49, 2),
    attachedLetter = _useState50[0],
    setAttachedLetter = _useState50[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        if (navigator.onLine) {
          try {
            var _res$data, _res$data2;
            var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/get-last-saved-estimation"));
            var num = res.data ? parseInt(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.estimateNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.estimateNumber) || 0) : 0;
            setEstimateNumber(num + 1);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          var offLineCustomer1 = yield _dexieDb__WEBPACK_IMPORTED_MODULE_68__["default"].estimateSchema.toArray();
          var latest = offLineCustomer1.reduce((max, row) => row.estimateNumber > max.estimateNumber ? row : max, offLineCustomer1[0]);
          setEstimateNumber(parseInt(latest.estimateNumber) + 1);
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
            var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/item"));
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
          var resRate = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/rate"));
          resRate.data.data.forEach(row => setRate(row.rate));
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/item-shop?page=").concat(shopPage, "&limit=20&search=").concat(encodeURIComponent(shopSearch)));
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
  var handleAddToEstimate = shopItem => {
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
        idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_39__["default"])(),
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
  var handleChangeItem = (idRow, newValue) => {
    var selectedOptions = newValue;
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
        itemName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemName
      },
      itemCost: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemCostPrice,
      itemDescription: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemDescription,
      itemRate: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemSellingPrice,
      stock: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemQuantity,
      data: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.data,
      contentType: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.contentType
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
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_39__["default"])(),
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
  var addItemWhite = () => {
    SetItems([...items, {
      newDescription: "",
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_39__["default"])(),
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
  var addItemRow = i => {
    var newItem = {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_39__["default"])(),
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
      newItemOut: 0,
      data: null,
      contentType: null
    };
    var update = [...items];
    update.splice(i + 1, 0, newItem);
    SetItems(update);
  };
  var addItemWhiteRow = i => {
    var newItem = {
      newDescription: "",
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_39__["default"])(),
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (totalInvoice) {
      var wholePart = Math.floor(totalInvoice);
      var fractionalPart = (totalInvoice % 1).toFixed(2).split('.')[1];
      var wholeWords = number_to_words__WEBPACK_IMPORTED_MODULE_64___default().toWords(wholePart);
      var fractionalWords = number_to_words__WEBPACK_IMPORTED_MODULE_64___default().toWords(fractionalPart);
      setTotalW("".concat(wholeWords, " and ").concat(fractionalWords, " cents"));
    }
  }, [totalInvoice]);
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState52 = _slicedToArray(_useState51, 2),
    customer = _useState52[0],
    setCustomer = _useState52[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCustomer = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (navigator.onLine) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/customer"));
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
        return _ref1.apply(this, arguments);
      };
    }();
    fetchCustomer();
  }, []);
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState54 = _slicedToArray(_useState53, 2),
    customerName = _useState54[0],
    setCustomerName = _useState54[1];
  var handleChangeCustomer = newValue => {
    var selectedOptions = customer.find(option => option === newValue);
    setCustomerName({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      customerName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.Customer,
      billingAddress: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingAddress,
      billingCity: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingCity
    });
  };
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result1 = items.reduce((sum, row) => sum + row.itemAmount, 0);
    setSubTotal(result1.toFixed(2));
    var newTotal = Math.round((Number(subTotal) + Number(shipping) + Number(adjustmentNumber)) * 100) / 100;
    setTotalInvoice(newTotal);
    var newBalance = Math.round((totalInvoice - total) * 100) / 100;
    setBalanceDue(newBalance);
  });
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState56 = _slicedToArray(_useState55, 2),
    openAutocomplete1 = _useState56[0],
    setOpenAutocomplete1 = _useState56[1];
  var handleOpenOpenAutocomplete1 = e => {
    e.stopPropagation();
    setOpenAutocomplete1(true);
  };
  var handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    openItemUpdate = _useState58[0],
    setOpenItemUpdate = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState60 = _slicedToArray(_useState59, 2),
    idItem = _useState60[0],
    setIdItem = _useState60[1];
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/get-item/").concat(idItem));
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
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    });
    return function handleCloseItemUpdate() {
      return _ref11.apply(this, arguments);
    };
  }();
  var handleCreateCustomer = newCustomer => {
    setCustomer([newCustomer, ...customer]);
  };
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState62 = _slicedToArray(_useState61, 2),
    openAutocomplete2 = _useState62[0],
    setOpenAutocomplete2 = _useState62[1];
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
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState64 = _slicedToArray(_useState63, 2),
    open1 = _useState64[0],
    setOpen1 = _useState64[1];
  var handleOpenUpdate = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
  };
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    loading = _useState66[0],
    setLoading = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    loadingOpenModal = _useState68[0],
    setLoadingOpenModal = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState70 = _slicedToArray(_useState69, 2),
    ErrorOpenModal = _useState70[0],
    setErrorOpenModal = _useState70[1];
  var handleOpen = () => {
    setOpen1(false);
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleError = () => {
    setOpen1(false);
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
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: 'QUO-' + String(ReferenceInfoNumber).padStart(6, '0') + ' For ' + customerName.customerName,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_41__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2, _x3) {
      return _ref12.apply(this, arguments);
    };
  }();
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState72 = _slicedToArray(_useState71, 2),
    saving = _useState72[0],
    setSaving = _useState72[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var itemsWithoutData = items.map(_ref14 => {
        var data = _ref14.data,
          contentType = _ref14.contentType,
          rest = _objectWithoutProperties(_ref14, _excluded3);
        return rest;
      });
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_39__["default"])(),
        customerName,
        estimateNumber,
        estimateDate,
        estimateDefect,
        estimateSubject,
        status,
        items: itemsWithoutData,
        subTotal,
        total,
        totalW,
        note,
        estimateName,
        noteInfo,
        terms,
        shipping,
        adjustment,
        adjustmentNumber,
        totalInvoice,
        balanceDue,
        synced: false,
        includeLetter,
        attachedLetter
      };
      if (navigator.onLine) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].post(apiUrl, data);
          if (res) {
            (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_42__.invalidateCache)('/estimation');
            // Open Loading View
            handleOpen();
            var ReferenceInfo = res.data.data._id;
            var ReferenceInfoNumber = res.data.data.estimateNumber;
            handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
            yield _dexieDb__WEBPACK_IMPORTED_MODULE_68__["default"].estimateSchema.put(_objectSpread(_objectSpread({}, res.data.data), {}, {
              synced: true
            }));
            //Reset form
          }
        } catch (error) {
          if (error) {
            setSaving('');
            handleError();
          }
        }
      } else {
        yield _dexieDb__WEBPACK_IMPORTED_MODULE_68__["default"].estimateSchema.put(data);
        handleOpen();
      }
    });
    return function handleSubmit(_x4) {
      return _ref13.apply(this, arguments);
    };
  }();
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_53__.logOut)());
    navigate('/');
  };
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
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
  }, "ADD NEW QUOTATION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleOpenUpdate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_48__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_67__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_66__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
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
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    options: customer,
    getOptionLabel: option => option.Customer,
    onChange: (e, newValue) => {
      handleChangeCustomer(newValue);
    },
    PaperComponent: _ref15 => {
      var children = _ref15.children,
        other = _objectWithoutProperties(_ref15, _excluded4);
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
  }, "Estimate Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    required: true,
    type: "number",
    id: "estimateNumber",
    label: "Estimate Number",
    value: estimateNumber,
    onChange: e => setEstimateNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "QUO-00")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_44__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_45__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_43__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_46__.DatePicker, {
    required: true,
    name: "estimateDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_47___default()(estimateDate),
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: addItemWhite
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
    var _Item$itemName;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      required: true,
      name: "newDescription",
      id: "newDescription",
      value: Item.newDescription,
      onChange: e => handleChangeCEO(e, i),
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
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        height: '100px'
      }
    }, Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_69__["default"], {
      itemId: (_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName._id,
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
    }, Item.itemName ? Item.itemName.itemName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      name: "itemDescription",
      id: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      rows: 3,
      onChange: e => handleChangeCEO(e, i),
      size: "small",
      sx: {
        width: '300px',
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
      filterOptions: (options, _ref16) => {
        var inputValue = _ref16.inputValue;
        return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
      },
      onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
      size: "small",
      PaperComponent: _ref17 => {
        var children = _ref17.children,
          other = _objectWithoutProperties(_ref17, _excluded5);
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      name: "itemQty",
      id: "itemQty",
      onChange: e => handleChangeCEO(e, i),
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
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "New-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => addItemRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
      style: {
        color: '#202a5a'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Blank-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => addItemWhiteRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
    var _Item$itemName2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 6
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
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        height: '100px'
      }
    }, Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_69__["default"], {
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
      onChange: e => handleChange(e, i),
      size: "small",
      disabled: true,
      sx: {
        width: '400px',
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      name: "itemQty",
      id: "itemQty",
      onChange: e => handleChange(e, i),
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
      disabled: true,
      onChange: e => handleChange(e, i),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "New-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => addItemRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
      style: {
        color: '#202a5a'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Blank-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => addItemWhiteRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: open1,
    onClose: handleCloseUpdate,
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
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_55__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Do you want to stop creating Quotation ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    onClick: handleCloseUpdate,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_51__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_49__["default"], {
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
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_55__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], null))), shopLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_51__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      flexGrow: 1,
      overflowY: 'auto',
      maxHeight: 'calc(100vh - 180px)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 2
  }, shopItems.map(item => {
    var _ref20, _item$itemSellingPric;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      xs: 6,
      key: item._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_56__["default"], {
      sx: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_57__["default"], {
      component: "img",
      height: "120",
      image: "data:".concat(item.contentType, ";base64,").concat(item.data),
      alt: item.itemName,
      sx: {
        objectFit: 'contain',
        padding: '5px'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_58__["default"], {
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
    }, "FC ", (_ref20 = item.itemSellingPrice * rate) === null || _ref20 === void 0 ? void 0 : _ref20.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "body2",
      color: "primary",
      fontWeight: "bold"
    }, "$ ", (_item$itemSellingPric = item.itemSellingPrice) === null || _item$itemSellingPric === void 0 ? void 0 : _item$itemSellingPric.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "caption",
      display: "block",
      gutterBottom: true
    }, "Stock: ", item.itemQuantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_59__["default"], {
      variant: "contained",
      size: "small",
      fullWidth: true,
      onClick: () => handleAddToEstimate(item),
      sx: {
        marginTop: '5px'
      }
    }, "Add"))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: "flex",
    justifyContent: "center",
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_60__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_51__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_50__["default"], {
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
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_55__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_61__["default"], {
    onCreateOption: handleCreateCustomer,
    onClose: handleCloseOpenAutocomplete1
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_55__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_62__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_55__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_63__["default"], {
    onClose: handleCloseItemUpdate,
    id: idItem
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EstimateInvoiceForm);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRXN0aW1hdGVWaWV3X0VzdGltYXRlSW52b2ljZUZvcm1fanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBbUQ7QUFDUTtBQUNuQztBQUNFO0FBQzBCO0FBQ3NCO0FBQ1I7QUFDZDtBQUM2UDtBQUNqUDtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDUTtBQUNBO0FBQ2M7QUFDSTtBQUN4QztBQUMrRjtBQUMvRjtBQUNxQjtBQUNHO0FBQ1E7QUFDUztBQUNhO0FBQ2hCO0FBQ0o7QUFDbEM7QUFDNEI7QUFDMEI7QUFDTTtBQUN4QjtBQUNWO0FBQ0w7QUFDUTtBQUMrQjtBQUN0QztBQUNGO0FBQ3lEO0FBQ3JDO0FBQ1o7QUFDSTtBQUNmO0FBQ2lDO0FBQ3RCO0FBQ1E7QUFDNUI7QUFDMkI7QUFFN0QsSUFBTTZGLFlBQVksR0FBR3JFLDBEQUFNLENBQUNzRSxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDaERsRywwREFBQSxDQUFDa0MsOERBQU8sRUFBQWtFLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxLQUFBLENBQUxDLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBT3RFLDhEQUFjLENBQUN1RSxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxLQUFLO01BQ3RCQyxLQUFLLEVBQUUsT0FBTztN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OEM7RUFDNURDLFNBQVMsRUFBRSxXQUFXO0VBQ3RCQyxTQUFTLEVBQUUseUJBQXlCO0VBQ3BDQyxnQkFBZ0IsRUFBRSxvQ0FBb0M7RUFDdERDLG1CQUFtQixFQUFFLEtBQUs7RUFDMUJDLGtCQUFrQixFQUFFLHNDQUFzQztFQUMxREMsWUFBWSxFQUFFLCtDQUErQztFQUM3REMsU0FBUyxFQUFFLG1DQUFtQztFQUM5Q0MsaUJBQWlCLEVBQUUsa0RBQWtEO0VBQ3JFO0VBQ0FDLFlBQVksRUFBRTtBQUNsQixDQUFDLENBQUM7QUFFRixpRUFBZTVvQixFQUFFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvRXN0aW1hdGVWaWV3L0VzdGltYXRlSW52b2ljZUZvcm0uanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvSXRlbVRodW1ibmFpbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9kZXhpZURiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2lkZWJhckRhc2gxIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEnO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZVJvdywgVGFibGVIZWFkLCBQYXBlciwgVGFibGVDb250YWluZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgQXV0b2NvbXBsZXRlLCBzdHlsZWQsIE1vZGFsLCBCYWNrZHJvcCwgRmFkZSwgQm94LCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgRGl2aWRlciwgQ2hlY2tib3gsIEZvcm1Db250cm9sTGFiZWwgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFkZCwgQXJyb3dVcHdhcmRPdXRsaW5lZCwgRHJhZ0luZGljYXRvclJvdW5kZWQsIEVkaXQsIFJlZnJlc2gsIFJlbW92ZUNpcmNsZU91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNhY2hlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXBpQ2FjaGUnO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xyXG5pbXBvcnQgQWRkU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IHsgRHJhd2VyIGFzIFNpZGVEcmF3ZXIsIENhcmQsIENhcmRDb250ZW50LCBDYXJkTWVkaWEsIEJ1dHRvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgQ3VzdG9tZXJGb3JtVmlldzIgZnJvbSAnLi4vQ3VzdG9tZXJWSWV3L0N1c3RvbWVyRm9ybVZpZXcyJztcclxuaW1wb3J0IEl0ZW1Gb3JtVmlldzIgZnJvbSAnLi4vSXRlbVZpZXcvSXRlbUZvcm1WaWV3Mic7XHJcbmltcG9ydCBJdGVtVXBkYXRlVmlldzIgZnJvbSAnLi4vSXRlbVZpZXcvSXRlbVVwZGF0ZVZpZXcyJztcclxuaW1wb3J0IG51bWJlclRvV29yZHMgZnJvbSAnbnVtYmVyLXRvLXdvcmRzJ1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIjtcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi9kZXhpZURiJztcclxuaW1wb3J0IEl0ZW1UaHVtYm5haWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0l0ZW1UaHVtYm5haWwnO1xyXG5cclxuY29uc3QgTGlnaHRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQmxhY2tUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IHN0eWxlMiA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDgwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIEVzdGltYXRlSW52b2ljZUZvcm0oKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCByZXNMb2NhbEluZm8gPSBhd2FpdCBkYi5lbXBsb3llZVVzZXJTY2hlbWEuZ2V0KHsgX2lkOiBzdG9yZXNVc2VySWQgfSlcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXNMb2NhbEluZm8uZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlc0xvY2FsSW5mby5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgYXBpVXJsID0gYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtZXN0aW1hdGlvbmA7XHJcbiAgY29uc3QgW3Rlcm1zLCBzZXRUZXJtc10gPSB1c2VTdGF0ZShcIlFVT1RFIFZBTElEIEZPUiAzMCBEQVlTIChTVUJKRUNUIFRPIFNUT0NLL01BUktFVCBDSEFOR0VTKS4gUEFZTUVOVDogNDAlIERFUE9TSVQgLyA1MCUgTUlELVBST0pFQ1QgLyAxMCUgVVBPTiBDT01QTEVUSU9OLiBBTEwgTUFURVJJQUwgU0FMRVMgQVJFIEZJTkFMLiBXRSBBUkUgTk9UIFJFU1BPTlNJQkxFIEZPUiBMT1NTLCBUSEVGVCwgT1IgREFNQUdFIENBVVNFRCBCWSBERUZFQ1RJVkUgUEFSVFMgT1IgRVhURVJOQUwgRkFDVE9SUy5cIik7XHJcbiAgY29uc3QgW2VzdGltYXRlRGF0ZSwgc2V0RXN0aW1hdGVEYXRlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICByZXR1cm4gZGF0ZVxyXG4gIH0pO1xyXG4gIGNvbnN0IFtlc3RpbWF0ZVN1YmplY3QsIHNldEVzdGltYXRlU3ViamVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBzdGF0dXMgPSBcIkRyYWZ0XCI7XHJcbiAgY29uc3QgW2VzdGltYXRlRGVmZWN0LCBzZXRFc3RpbWF0ZURlZmVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSB1c2VTdGF0ZShcIldFIExPT0sgRk9SV0FSRCBUTyBUSEUgT1BQT1JUVU5JVFkgVE8gRE8gQlVTSU5FU1MgV0lUSCBZT1UuXCIpO1xyXG4gIGNvbnN0IFtpdGVtcywgU2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzdWJUb3RhbCwgc2V0U3ViVG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hpcHBpbmcsIHNldFNoaXBwaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthZGp1c3RtZW50LCBzZXRBZGp1c3RtZW50XSA9IHVzZVN0YXRlKCdBZGp1c3RtZW50JylcclxuICBjb25zdCBbYWRqdXN0bWVudE51bWJlciwgc2V0QWRqdXN0bWVudE51bWJlcl0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt0b3RhbEludm9pY2UsIHNldFRvdGFsSW52b2ljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYmFsYW5jZUR1ZSwgc2V0QmFsYW5jZUR1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG90YWxXLCBzZXRUb3RhbFddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlc3RpbWF0ZU51bWJlciwgc2V0RXN0aW1hdGVOdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW25vdGVJbmZvLCBzZXROb3RlSW5mb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2hvcE9wZW4sIHNldFNob3BPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvcEl0ZW1zLCBzZXRTaG9wSXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzaG9wU2VhcmNoLCBzZXRTaG9wU2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2hvcFBhZ2UsIHNldFNob3BQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtzaG9wVG90YWxQYWdlcywgc2V0U2hvcFRvdGFsUGFnZXNdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Nob3BMb2FkaW5nLCBzZXRTaG9wTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZGF0ZUNvbW1lbnQgPSBuZXcgRGF0ZSgpXHJcbiAgY29uc3QgZXN0aW1hdGVOYW1lID0gXCJRVU8tXCIgKyBTdHJpbmcoZXN0aW1hdGVOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJylcclxuICBjb25zdCBbSXRlbUluZm9ybWF0aW9uLCBzZXRJdGVtSW5mb3JtYXRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbmNsdWRlTGV0dGVyLCBzZXRJbmNsdWRlTGV0dGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBQUk9GRVNTSU9OQUxfQ09WRVJfTEVUVEVSID0gYERlYXIgVmFsdWVkIEN1c3RvbWVyLFxyXG5cclxuVGhhbmsgeW91IGZvciBnaXZpbmcgdXMgdGhlIG9wcG9ydHVuaXR5IHRvIHByb3ZpZGUgeW91IHdpdGggdGhpcyBxdW90YXRpb24gZm9yIHlvdXIgdXBjb21pbmcgcHJvamVjdC5cclxuXHJcbkF0IEdMT0JBTCBHQVRFIFNBUkwsIHdlIHByaWRlIG91cnNlbHZlcyBvbiBkZWxpdmVyaW5nIGhpZ2gtcXVhbGl0eSBzZXJ2aWNlcyBhbmQgbWF0ZXJpYWxzIHRhaWxvcmVkIHRvIG1lZXQgeW91ciBzcGVjaWZpYyBuZWVkcy4gT3VyIHRlYW0gaGFzIGNhcmVmdWxseSByZXZpZXdlZCB5b3VyIHJlcXVpcmVtZW50cywgYW5kIHdlIGFyZSBjb25maWRlbnQgdGhhdCB0aGUgcHJvcG9zZWQgc29sdXRpb24gb2ZmZXJzIHRoZSBiZXN0IHZhbHVlIGFuZCB0ZWNobmljYWwgZXhjZWxsZW5jZS5cclxuXHJcbldlIHJlbWFpbiBhdCB5b3VyIGRpc3Bvc2FsIGZvciBhbnkgZnVydGhlciBpbmZvcm1hdGlvbiBvciBjbGFyaWZpY2F0aW9uIHlvdSBtYXkgcmVxdWlyZS4gV2UgbG9vayBmb3J3YXJkIHRvIHRoZSBwb3NzaWJpbGl0eSBvZiB3b3JraW5nIHRvZ2V0aGVyLlxyXG5cclxuQmVzdCByZWdhcmRzLFxyXG5cclxuVGhlIEdMT0JBTCBHQVRFIFRlYW1gO1xyXG4gIGNvbnN0IFthdHRhY2hlZExldHRlciwgc2V0QXR0YWNoZWRMZXR0ZXJdID0gdXNlU3RhdGUoUFJPRkVTU0lPTkFMX0NPVkVSX0xFVFRFUik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNobGFzdE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKG5hdmlnYXRvci5vbkxpbmUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWxhc3Qtc2F2ZWQtZXN0aW1hdGlvbmApXHJcbiAgICAgICAgICBjb25zdCBudW0gPSByZXMuZGF0YSA/IChwYXJzZUludChyZXMuZGF0YT8uZGF0YT8uZXN0aW1hdGVOdW1iZXIgfHwgcmVzLmRhdGE/LmVzdGltYXRlTnVtYmVyIHx8IDApKSA6IDA7XHJcbiAgICAgICAgICBzZXRFc3RpbWF0ZU51bWJlcihudW0gKyAxKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgb2ZmTGluZUN1c3RvbWVyMSA9IGF3YWl0IGRiLmVzdGltYXRlU2NoZW1hLnRvQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBsYXRlc3QgPSBvZmZMaW5lQ3VzdG9tZXIxLnJlZHVjZSgobWF4LCByb3cpID0+IHJvdy5lc3RpbWF0ZU51bWJlciA+IG1heC5lc3RpbWF0ZU51bWJlciA/IHJvdyA6IG1heCwgb2ZmTGluZUN1c3RvbWVyMVswXSlcclxuICAgICAgICBzZXRFc3RpbWF0ZU51bWJlcihwYXJzZUludChsYXRlc3QuZXN0aW1hdGVOdW1iZXIpICsgMSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hsYXN0TnVtYmVyKClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hJdGVtID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtYClcclxuICAgICAgICAgIHNldEl0ZW1JbmZvcm1hdGlvbihyZXMuZGF0YS5kYXRhLnJldmVyc2UoKSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG9mZkxpbmVDdXN0b21lcjEgPSBhd2FpdCBkYi5pdGVtU2NoZW1hLnRvQXJyYXkoKTtcclxuICAgICAgICBzZXRJdGVtSW5mb3JtYXRpb24ob2ZmTGluZUN1c3RvbWVyMS5yZXZlcnNlKCkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoSXRlbSgpXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIEZldGNoIFNob3AgSXRlbXMgJiBSYXRlXHJcbiAgY29uc3QgZmV0Y2hTaG9wID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0U2hvcExvYWRpbmcodHJ1ZSk7XHJcbiAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc1JhdGUgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9yYXRlYClcclxuICAgICAgICByZXNSYXRlLmRhdGEuZGF0YS5mb3JFYWNoKChyb3cpID0+IHNldFJhdGUocm93LnJhdGUpKVxyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtLXNob3A/cGFnZT0ke3Nob3BQYWdlfSZsaW1pdD0yMCZzZWFyY2g9JHtlbmNvZGVVUklDb21wb25lbnQoc2hvcFNlYXJjaCl9YClcclxuICAgICAgICBzZXRTaG9wVG90YWxQYWdlcyhyZXMuZGF0YS50b3RhbFBhZ2VzKVxyXG4gICAgICAgIHNldFNob3BJdGVtcyhyZXMuZGF0YS5pdGVtcy5maWx0ZXIoKHJvdykgPT4gcm93LnR5cGVJdGVtID09PSBcIkdvb2RzXCIpLnJldmVyc2UoKSlcclxuICAgICAgICBzZXRTaG9wTG9hZGluZyhmYWxzZSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICBzZXRTaG9wTG9hZGluZyhmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgb2ZmTGluZUN1c3RvbWVyMSA9IGF3YWl0IGRiLml0ZW1TY2hlbWEudG9BcnJheSgpO1xyXG4gICAgICBzZXRTaG9wSXRlbXMob2ZmTGluZUN1c3RvbWVyMS5maWx0ZXIoKHJvdykgPT4gcm93LnR5cGVJdGVtID09PSBcIkdvb2RzXCIpLnJldmVyc2UoKSlcclxuICAgICAgc2V0U2hvcExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIGNvbnN0IG9mZkxpbmVSYXRlID0gYXdhaXQgZGIucmF0ZVNjaGVtYS50b0FycmF5KCk7XHJcbiAgICAgIG9mZkxpbmVSYXRlLmZvckVhY2goKHJvdykgPT4gc2V0UmF0ZShyb3cucmF0ZSkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNob3BPcGVuKSB7IC8vIE9ubHkgZmV0Y2ggaWYgc2lkZSBzaG9wIGlzIG9wZW5cclxuICAgICAgZmV0Y2hTaG9wKClcclxuICAgIH1cclxuICB9LCBbc2hvcFBhZ2UsIHNob3BTZWFyY2gsIHNob3BPcGVuXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVmcmVzaFNob3AgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG9wU2VhcmNoKCcnKTtcclxuICAgIHNldFNob3BQYWdlKDEpO1xyXG4gICAgZmV0Y2hTaG9wKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTaG9wUGFnZUNoYW5nZSA9IChlLCBuZXdQYWdlKSA9PiB7XHJcbiAgICBzZXRTaG9wUGFnZShuZXdQYWdlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU2hvcFNlYXJjaENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTaG9wU2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldFNob3BQYWdlKDEpXHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVTaG9wID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvcE9wZW4oIXNob3BPcGVuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFRvRXN0aW1hdGUgPSAoc2hvcEl0ZW0pID0+IHtcclxuICAgIC8vIENoZWNrIGlmIGl0ZW0gYWxyZWFkeSBleGlzdHNcclxuICAgIGNvbnN0IGV4aXN0aW5nSXRlbUluZGV4ID0gaXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pdGVtTmFtZS5faWQgPT09IHNob3BJdGVtLl9pZCk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nSXRlbUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAvLyBJdGVtIGV4aXN0cywgdXBkYXRlIHF1YW50aXR5XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtcyA9IFsuLi5pdGVtc107XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gdXBkYXRlZEl0ZW1zW2V4aXN0aW5nSXRlbUluZGV4XTtcclxuICAgICAgY29uc3QgbmV3UXR5ID0gcGFyc2VJbnQoY3VycmVudEl0ZW0uaXRlbVF0eSkgKyAxO1xyXG5cclxuICAgICAgdXBkYXRlZEl0ZW1zW2V4aXN0aW5nSXRlbUluZGV4XSA9IHtcclxuICAgICAgICAuLi5jdXJyZW50SXRlbSxcclxuICAgICAgICBpdGVtUXR5OiBuZXdRdHksXHJcbiAgICAgICAgaXRlbUFtb3VudDogTWF0aC5yb3VuZCgobmV3UXR5ICogY3VycmVudEl0ZW0uaXRlbVJhdGUpICogMTAwKSAvIDEwMCxcclxuICAgICAgICB0b3RhbEFtb3VudDogTWF0aC5yb3VuZCgobmV3UXR5ICogY3VycmVudEl0ZW0uaXRlbVJhdGUpICogMTAwKSAvIDEwMCxcclxuICAgICAgICBkaXNjb3VudDogTWF0aC5yb3VuZCgobmV3UXR5ICogY3VycmVudEl0ZW0uaXRlbVJhdGUgKiBjdXJyZW50SXRlbS5pdGVtRGlzY291bnQpICogMTAwKSAvIDEwMCxcclxuICAgICAgICBwZXJjZW50YWdlOiAoTWF0aC5yb3VuZCgobmV3UXR5ICogY3VycmVudEl0ZW0uaXRlbVJhdGUgKiBjdXJyZW50SXRlbS5pdGVtRGlzY291bnQpICogMTAwKSAvIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgdG90YWxDb3N0OiBNYXRoLnJvdW5kKChuZXdRdHkgKiBjdXJyZW50SXRlbS5pdGVtQ29zdCkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIHRvdGFsR2VuZXJhbGU6IE1hdGgucm91bmQoKGN1cnJlbnRJdGVtLml0ZW1Db3N0ICogY3VycmVudEl0ZW0uaXRlbUJ1eSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICB9O1xyXG4gICAgICBTZXRJdGVtcyh1cGRhdGVkSXRlbXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSXRlbSBkb2VzIG5vdCBleGlzdCwgYWRkIG5ld1xyXG4gICAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgICBfaWQ6IHNob3BJdGVtLl9pZCxcclxuICAgICAgICAgIGl0ZW1OYW1lOiBzaG9wSXRlbS5pdGVtTmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogc2hvcEl0ZW0uaXRlbURlc2NyaXB0aW9uLFxyXG4gICAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgICBpdGVtUXR5OiAxLFxyXG4gICAgICAgIGl0ZW1SYXRlOiBzaG9wSXRlbS5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIGl0ZW1BbW91bnQ6IHNob3BJdGVtLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgaXRlbUNvc3Q6IHNob3BJdGVtLml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgICAgdG90YWxBbW91bnQ6IHNob3BJdGVtLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICAgIGl0ZW1XZWlnaHQ6IHNob3BJdGVtLml0ZW1XZWlnaHQgfHwgXCJcIixcclxuICAgICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICAgIHRvdGFsQ29zdDogc2hvcEl0ZW0uaXRlbUNvc3RQcmljZSxcclxuICAgICAgICBzdG9jazogc2hvcEl0ZW0uaXRlbVF1YW50aXR5LFxyXG4gICAgICAgIGRhdGE6IHNob3BJdGVtLmRhdGEsXHJcbiAgICAgICAgY29udGVudFR5cGU6IHNob3BJdGVtLmNvbnRlbnRUeXBlLFxyXG4gICAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgICAgfTtcclxuICAgICAgU2V0SXRlbXMoWy4uLml0ZW1zLCBuZXdJdGVtXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJdGVtID0gKGlkUm93LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gbmV3VmFsdWVcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgICBpdGVtTmFtZTogc2VsZWN0ZWRPcHRpb25zPy5pdGVtTmFtZSxcclxuICAgICAgfSxcclxuICAgICAgaXRlbUNvc3Q6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbUNvc3RQcmljZSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgaXRlbVJhdGU6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgc3RvY2s6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbVF1YW50aXR5LFxyXG4gICAgICBkYXRhOiBzZWxlY3RlZE9wdGlvbnM/LmRhdGEsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBzZWxlY3RlZE9wdGlvbnM/LmNvbnRlbnRUeXBlLFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBpKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGxpc3QgPSBbLi4uaXRlbXNdO1xyXG4gICAgbGlzdFtpXVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgaWYgKGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddID4gNSkge1xyXG4gICAgICBsaXN0W2ldWydpdGVtRGlzY291bnQnXSA9IDVcclxuICAgIH1cclxuICAgIGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtUmF0ZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWyd0b3RhbENvc3QnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1RdHknXSAqIGxpc3RbaV1bJ2l0ZW1Db3N0J10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2Rpc2NvdW50J10gPSBsaXN0W2ldWyd0b3RhbEFtb3VudCddICogbGlzdFtpXVsnaXRlbURpc2NvdW50J107XHJcbiAgICBsaXN0W2ldWydwZXJjZW50YWdlJ10gPSBsaXN0W2ldWydkaXNjb3VudCddIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnaXRlbUFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsndG90YWxBbW91bnQnXSAtIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxHZW5lcmFsZSddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbUNvc3QnXSAqIGxpc3RbaV1bJ2l0ZW1CdXknXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgU2V0SXRlbXMobGlzdCk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUNFTyA9IChlLCBpKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGxpc3QgPSBbLi4uaXRlbXNdO1xyXG4gICAgbGlzdFtpXVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgbGlzdFtpXVsndG90YWxBbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1RdHknXSAqIGxpc3RbaV1bJ2l0ZW1SYXRlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQ29zdCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbUNvc3QnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnZGlzY291bnQnXSA9IGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gKiBsaXN0W2ldWydpdGVtRGlzY291bnQnXTtcclxuICAgIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSA9IGxpc3RbaV1bJ2Rpc2NvdW50J10gLyAxMDA7XHJcbiAgICBsaXN0W2ldWydpdGVtQW1vdW50J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWyd0b3RhbEFtb3VudCddIC0gbGlzdFtpXVsncGVyY2VudGFnZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWyd0b3RhbEdlbmVyYWxlJ10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtQ29zdCddICogbGlzdFtpXVsnaXRlbUJ1eSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBTZXRJdGVtcyhsaXN0KTtcclxuICB9XHJcblxyXG4gIC8vYWRkSXRlbVxyXG4gIGNvbnN0IGFkZEl0ZW0gPSAoKSA9PiB7XHJcbiAgICBTZXRJdGVtcyhbLi4uaXRlbXMsIHtcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgY29udGVudFR5cGU6IG51bGwsXHJcbiAgICB9XSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1XaGl0ZSA9ICgpID0+IHtcclxuICAgIFNldEl0ZW1zKFsuLi5pdGVtcywge1xyXG4gICAgICBuZXdEZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgY29udGVudFR5cGU6IG51bGwsXHJcbiAgICB9XSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1Sb3cgPSAoaSkgPT4ge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgY29udGVudFR5cGU6IG51bGwsXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGUgPSBbLi4uaXRlbXNdO1xyXG4gICAgdXBkYXRlLnNwbGljZShpICsgMSwgMCwgbmV3SXRlbSk7XHJcbiAgICBTZXRJdGVtcyh1cGRhdGUpXHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1XaGl0ZVJvdyA9IChpKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICBuZXdEZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgY29udGVudFR5cGU6IG51bGwsXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGUgPSBbLi4uaXRlbXNdO1xyXG4gICAgdXBkYXRlLnNwbGljZShpICsgMSwgMCwgbmV3SXRlbSk7XHJcbiAgICBTZXRJdGVtcyh1cGRhdGUpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURyYWdFbmQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdJdGVtcyA9IFsuLi5pdGVtc107XHJcbiAgICBjb25zdCBbcmVtb3ZlZF0gPSBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW1vdmVkKTtcclxuICAgIFNldEl0ZW1zKG5ld0l0ZW1zKVxyXG4gIH07XHJcbiAgY29uc3QgZGVsZXRlSXRlbSA9IGlkUm93ID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLmZpbHRlcigoSXRlbSkgPT4gSXRlbS5pZFJvdyAhPT0gaWRSb3cpKTtcclxuICB9O1xyXG4gIGNvbnN0IGZpbHRlckl0ZW1JbmZvcm1hdGlvbiA9IEl0ZW1JbmZvcm1hdGlvbi5maWx0ZXIob3B0aW9uID0+ICFpdGVtcy5maW5kKChyb3cpID0+IG9wdGlvbi5faWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkICYmIG9wdGlvbi50eXBlSXRlbSA9PT0gXCJHb29kc1wiKSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRvdGFsSW52b2ljZSkge1xyXG4gICAgICBjb25zdCB3aG9sZVBhcnQgPSBNYXRoLmZsb29yKHRvdGFsSW52b2ljZSlcclxuICAgICAgY29uc3QgZnJhY3Rpb25hbFBhcnQgPSAodG90YWxJbnZvaWNlICUgMSkudG9GaXhlZCgyKS5zcGxpdCgnLicpWzFdO1xyXG4gICAgICBjb25zdCB3aG9sZVdvcmRzID0gbnVtYmVyVG9Xb3Jkcy50b1dvcmRzKHdob2xlUGFydClcclxuICAgICAgY29uc3QgZnJhY3Rpb25hbFdvcmRzID0gbnVtYmVyVG9Xb3Jkcy50b1dvcmRzKGZyYWN0aW9uYWxQYXJ0KVxyXG4gICAgICBzZXRUb3RhbFcoYCR7d2hvbGVXb3Jkc30gYW5kICR7ZnJhY3Rpb25hbFdvcmRzfSBjZW50c2ApXHJcbiAgICB9XHJcbiAgfSwgW3RvdGFsSW52b2ljZV0pXHJcbiAgY29uc3QgW2N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoQ3VzdG9tZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2N1c3RvbWVyYClcclxuICAgICAgICAgIHNldEN1c3RvbWVyKHJlcy5kYXRhLmRhdGEucmV2ZXJzZSgpKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG9mZkxpbmVDdXN0b21lcjEgPSBhd2FpdCBkYi5jdXN0b21lclNjaGVtYS50b0FycmF5KCk7XHJcbiAgICAgICAgc2V0Q3VzdG9tZXIob2ZmTGluZUN1c3RvbWVyMS5yZXZlcnNlKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaEN1c3RvbWVyKClcclxuICB9LCBbXSlcclxuICBjb25zdCBbY3VzdG9tZXJOYW1lLCBzZXRDdXN0b21lck5hbWVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUN1c3RvbWVyID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBjdXN0b21lci5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICBzZXRDdXN0b21lck5hbWUoe1xyXG4gICAgICBfaWQ6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICBjdXN0b21lck5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uQ3VzdG9tZXIsXHJcbiAgICAgIGJpbGxpbmdBZGRyZXNzOiBzZWxlY3RlZE9wdGlvbnM/LmJpbGxpbmdBZGRyZXNzLFxyXG4gICAgICBiaWxsaW5nQ2l0eTogc2VsZWN0ZWRPcHRpb25zPy5iaWxsaW5nQ2l0eVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGUgPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBudWxsLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24gPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgaXRlbU5hbWU6ICdlbXB0eSdcclxuICAgICAgfSxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0MSA9IGl0ZW1zLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHJvdy5pdGVtQW1vdW50LCAwKVxyXG4gICAgc2V0U3ViVG90YWwocmVzdWx0MS50b0ZpeGVkKDIpKVxyXG4gICAgbGV0IG5ld1RvdGFsID0gTWF0aC5yb3VuZCgoTnVtYmVyKHN1YlRvdGFsKSArIE51bWJlcihzaGlwcGluZykgKyBOdW1iZXIoYWRqdXN0bWVudE51bWJlcikpICogMTAwKSAvIDEwMFxyXG4gICAgc2V0VG90YWxJbnZvaWNlKG5ld1RvdGFsKVxyXG4gICAgbGV0IG5ld0JhbGFuY2UgPSBNYXRoLnJvdW5kKCh0b3RhbEludm9pY2UgLSB0b3RhbCkgKiAxMDApIC8gMTAwXHJcbiAgICBzZXRCYWxhbmNlRHVlKG5ld0JhbGFuY2UpXHJcbiAgfSk7XHJcbiAgY29uc3QgW29wZW5BdXRvY29tcGxldGUxLCBzZXRPcGVuQXV0b2NvbXBsZXRlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTEgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbb3Blbkl0ZW1VcGRhdGUsIHNldE9wZW5JdGVtVXBkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaWRJdGVtLCBzZXRJZEl0ZW1dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbkl0ZW1VcGRhdGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHNldE9wZW5JdGVtVXBkYXRlKHRydWUpO1xyXG4gICAgc2V0SWRJdGVtKGlkKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlSXRlbVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldE9wZW5JdGVtVXBkYXRlKGZhbHNlKTtcclxuICAgIGlmIChpZEl0ZW0pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2lkSXRlbX1gKVxyXG4gICAgICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaXRlbU5hbWU/Ll9pZCA9PT0gcmVzLmRhdGEuZGF0YS5faWQgPyB7XHJcbiAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgICAgICBfaWQ6IHJlcy5kYXRhLmRhdGEuX2lkLFxyXG4gICAgICAgICAgICBpdGVtTmFtZTogcmVzLmRhdGEuZGF0YS5pdGVtTmFtZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogcmVzLmRhdGEuZGF0YS5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBpdGVtQ29zdDogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgaXRlbVJhdGU6IHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICAgIHN0b2NrOiByZXMuZGF0YS5kYXRhLml0ZW1RdWFudGl0eSxcclxuICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLmRhdGEuZGF0YSxcclxuICAgICAgICAgIGNvbnRlbnRUeXBlOiByZXMuZGF0YS5kYXRhLmNvbnRlbnRUeXBlLFxyXG4gICAgICAgICAgdG90YWxBbW91bnQ6IHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgZGlzY291bnQ6IChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50LFxyXG4gICAgICAgICAgcGVyY2VudGFnZTogKChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50KSAvIDEwMCxcclxuICAgICAgICAgIGl0ZW1BbW91bnQ6IChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgLSAoKChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50KSAvIDEwMCksXHJcbiAgICAgICAgICB0b3RhbENvc3Q6IHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgdG90YWxHZW5lcmFsZTogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlICogcm93Lml0ZW1CdXlcclxuICAgICAgICB9IDogcm93KSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQ3VzdG9tZXIgPSAobmV3Q3VzdG9tZXIpID0+IHtcclxuICAgIHNldEN1c3RvbWVyKFtuZXdDdXN0b21lciwgLi4uY3VzdG9tZXJdKVxyXG4gIH1cclxuICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTIsIHNldE9wZW5BdXRvY29tcGxldGUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMiA9ICgpID0+IHtcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUl0ZW0gPSAobmV3SXRlbSkgPT4ge1xyXG4gICAgc2V0SXRlbUluZm9ybWF0aW9uKFtuZXdJdGVtLCAuLi5JdGVtSW5mb3JtYXRpb25dKVxyXG4gIH1cclxuICBjb25zdCBbb3BlbjEsIHNldE9wZW4xXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW4xKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlY2lzaW9uID0gKG5hdmlnYXRlKSA9PiB7XHJcbiAgICAvL05hdmlnYXRlIEJhc2VkIG9uIHRoIERlY2lzaW9uXHJcbiAgICBpZiAobmF2aWdhdGUgPT09ICdwcmV2aW91cycpIHtcclxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0ZSA9PT0gJ3N0YXknKSB7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBDcmVhdGVkICcsXHJcbiAgICAgIHJlYXNvbjogJ1FVTy0nICsgU3RyaW5nKFJlZmVyZW5jZUluZm9OdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIEZvciAnICsgY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZSxcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogZGF0ZUNvbW1lbnRcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNhdmluZygndHJ1ZScpO1xyXG4gICAgY29uc3QgaXRlbXNXaXRob3V0RGF0YSA9IGl0ZW1zLm1hcCgoeyBkYXRhLCBjb250ZW50VHlwZSwgLi4ucmVzdCB9KSA9PiByZXN0KTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIF9pZDogdjQoKSxcclxuICAgICAgY3VzdG9tZXJOYW1lLFxyXG4gICAgICBlc3RpbWF0ZU51bWJlcixcclxuICAgICAgZXN0aW1hdGVEYXRlLFxyXG4gICAgICBlc3RpbWF0ZURlZmVjdCxcclxuICAgICAgZXN0aW1hdGVTdWJqZWN0LFxyXG4gICAgICBzdGF0dXMsXHJcbiAgICAgIGl0ZW1zOiBpdGVtc1dpdGhvdXREYXRhLFxyXG4gICAgICBzdWJUb3RhbCxcclxuICAgICAgdG90YWwsXHJcbiAgICAgIHRvdGFsVyxcclxuICAgICAgbm90ZSxcclxuICAgICAgZXN0aW1hdGVOYW1lLCBub3RlSW5mbyxcclxuICAgICAgdGVybXMsIHNoaXBwaW5nLFxyXG4gICAgICBhZGp1c3RtZW50LCBhZGp1c3RtZW50TnVtYmVyLFxyXG4gICAgICB0b3RhbEludm9pY2UsIGJhbGFuY2VEdWUsIHN5bmNlZDogZmFsc2UsXHJcbiAgICAgIGluY2x1ZGVMZXR0ZXIsIGF0dGFjaGVkTGV0dGVyXHJcbiAgICB9XHJcbiAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYXBpVXJsLCBkYXRhKTtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICBpbnZhbGlkYXRlQ2FjaGUoJy9lc3RpbWF0aW9uJyk7XHJcbiAgICAgICAgICAvLyBPcGVuIExvYWRpbmcgVmlld1xyXG4gICAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mbyA9IHJlcy5kYXRhLmRhdGEuX2lkXHJcbiAgICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvTnVtYmVyID0gcmVzLmRhdGEuZGF0YS5lc3RpbWF0ZU51bWJlclxyXG4gICAgICAgICAgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OdW1iZXIpXHJcbiAgICAgICAgICBhd2FpdCBkYi5lc3RpbWF0ZVNjaGVtYS5wdXQoeyAuLi5yZXMuZGF0YS5kYXRhLCBzeW5jZWQ6IHRydWUgfSlcclxuICAgICAgICAgIC8vUmVzZXQgZm9ybVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgIHNldFNhdmluZygnJyk7XHJcbiAgICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgZGIuZXN0aW1hdGVTY2hlbWEucHV0KGRhdGEpXHJcbiAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFERCBORVcgUVVPVEFUSU9OXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlblVwZGF0ZX0+XHJcbiAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoMSAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogNCB9fSA+XHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0gY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjdXN0b21lcn1cclxuICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uQ3VzdG9tZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZUN1c3RvbWVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHsgY2hpbGRyZW4sIC4uLm90aGVyIH0pID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTEoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERCBORVcgQ1VTVE9NRVJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkN1c3RvbWVyIE5hbWVcIiByZXF1aXJlZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiZXN0aW1hdGVOdW1iZXJcIj5Fc3RpbWF0ZSBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdlc3RpbWF0ZU51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VzdGltYXRlIE51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VzdGltYXRlTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVzdGltYXRlTnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+UVVPLTAwPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZXN0aW1hdGVEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhlc3RpbWF0ZURhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0RXN0aW1hdGVEYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdlc3RpbWF0ZVN1YmplY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlc3RpbWF0ZVN1YmplY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU3ViamVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlc3RpbWF0ZVN1YmplY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVzdGltYXRlU3ViamVjdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdlc3RpbWF0ZURlZmVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VzdGltYXRlRGVmZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RlZmVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlc3RpbWF0ZURlZmVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RXN0aW1hdGVEZWZlY3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbm90ZUluZm8nXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdub3RlSW5mbydcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdOb3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlSW5mbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6IDEsIGZsb2F0OiAncmlnaHQnLCByaWdodDogJy01cHgnLCB0b3A6ICc0MDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkFkZFwiIHBsYWNlbWVudD1cInRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7IGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtV2hpdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2dyYXknLCBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiSVRFTSBMSVNUXCIgcGxhY2VtZW50PVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNob3B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJywgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSW5mbzEwJyBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnLTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdG9jay1BPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGlzY291bnQgJTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkcm9wcGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e0l0ZW0uaWRSb3d9IGRyYWdnYWJsZUlkPXtgZHJvcHBhYmxlJHtJdGVtLmlkUm93fWB9IGluZGV4PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+PERyYWdJbmRpY2F0b3JSb3VuZGVkIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs2fT48VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25ld0Rlc2NyaXB0aW9uJyBpZD0nbmV3RGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLm5ld0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGhlaWdodDogJzEwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzE1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UaHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkPXtJdGVtLml0ZW1OYW1lPy5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxEYXRhPXtJdGVtLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUeXBlPXtJdGVtLmNvbnRlbnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaGlkZGVuPXtJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JyA6ICcnfSBzeD17eyBmb250U2l6ZTogJzIwcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvVXBwZXJDYXNlKCkgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURlc2NyaXB0aW9uJyBpZD0naXRlbURlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICczMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93QXV0b2NvbXBsZXRlKEl0ZW0uaWRSb3cpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5faWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJFZGl0XCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3Blbkl0ZW1VcGRhdGUoSXRlbS5pdGVtTmFtZS5faWQpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtmaWx0ZXJJdGVtSW5mb3JtYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjJmMmYyJyB9fT57b3B0aW9uLml0ZW1OYW1lICsgJy8nICsgb3B0aW9uLml0ZW1CcmFuZH08L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH0gey4uLnBhcmFtc30gcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50LCBuZXdJbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMsIHsgaW5wdXRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtQnJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZUl0ZW0oSXRlbS5pZFJvdywgbmV3VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFwZXJDb21wb25lbnQ9eyh7IGNoaWxkcmVuLCAuLi5vdGhlciB9KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgbGVmdDogJzAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMihlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNycgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERCBORVcgSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NzBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3RvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZURlc2NyaXB0aW9uKEl0ZW0uaWRSb3cpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0b2NrJyBpZD0nc3RvY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uc3RvY2t9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1RdHknIGlkPSdpdGVtUXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1RdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUmF0ZScgaWQ9J2l0ZW1SYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1SYXRlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURpc2NvdW50JyBpZD0naXRlbURpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMSB0byA1ICUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD0nYW1vdW50VG90YWxJbnZvaWNlJz57SXRlbS5pdGVtQW1vdW50LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiTmV3LVJvd1wiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gYWRkSXRlbVJvdyhpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJCbGFuay1Sb3dcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW1XaGl0ZVJvdyhpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSW5mbzEwJyBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnLTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0b2NrLUE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EaXNjb3VudCAlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZHJvcHBhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChJdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e0l0ZW0uaWRSb3d9IGRyYWdnYWJsZUlkPXtgZHJvcHBhYmxlJHtJdGVtLmlkUm93fWB9IGluZGV4PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+PERyYWdJbmRpY2F0b3JSb3VuZGVkIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Nn0+PFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25ld0Rlc2NyaXB0aW9uJyBpZD0nbmV3RGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5uZXdEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBoZWlnaHQ6ICcxMDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzMwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UaHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSWQ9e0l0ZW0uaXRlbU5hbWU/Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsRGF0YT17SXRlbS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUeXBlPXtJdGVtLmNvbnRlbnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBoaWRkZW49e0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID09PSAnZW1wdHknIDogJyd9IHN4PXt7IGZvbnRTaXplOiAnMjNweCcgfX0+e0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvVXBwZXJDYXNlKCkgOiAnJ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURlc2NyaXB0aW9uJyBpZD0naXRlbURlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNDAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGUoSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWUuX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkVkaXRcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3Blbkl0ZW1VcGRhdGUoSXRlbS5pdGVtTmFtZS5faWQpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdCBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtmaWx0ZXJJdGVtSW5mb3JtYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9PntvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fSB7Li4ucGFyYW1zfSByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucywgeyBpbnB1dFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtQnJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VJdGVtKEl0ZW0uaWRSb3csIG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFwZXJDb21wb25lbnQ9eyh7IGNoaWxkcmVuLCAuLi5vdGhlciB9KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREIE5FVyBJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNDcwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3RvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbihJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0b2NrJyBpZD0nc3RvY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLnN0b2NrfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1RdHknIGlkPSdpdGVtUXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1RdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUmF0ZScgaWQ9J2l0ZW1SYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUmF0ZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURpc2NvdW50JyBpZD0naXRlbURpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzEgdG8gNSAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPSdhbW91bnRUb3RhbEludm9pY2UnPntJdGVtLml0ZW1BbW91bnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIk5ldy1Sb3dcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtUm93KGkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJCbGFuay1Sb3dcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtV2hpdGVSb3coaSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nbm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUXVvdGUgTm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc1MCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlyc3RUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+U3ViLVRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3N1YlRvdGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N1YlRvdGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1YlRvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3RvdGFsSW52b2ljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0b3RhbEludm9pY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWxJbnZvaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+QmFsYW5jZSBEdWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdiYWxhbmNlRHVlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2JhbGFuY2VEdWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFsYW5jZUR1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5Ub3RhbCBJbiBXb3JkczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG90YWxXXCIgaWQ9XCJ0b3RhbFdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbFd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Um93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSd0ZXJtcydcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Rlcm1zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rlcm1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1F1b3RlIFRlcm1zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXJtcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzYwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IG10OiAyLCBtYjogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBmbGV4SXRlbSBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+IENPVkVSIExFVFRFUiAoT3B0aW9uYWwpIDwvRGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpbmNsdWRlTGV0dGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5jbHVkZUxldHRlcihlLnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBjb2xvcjogJyMzMDM2OGEnLCAnJi5NdWktY2hlY2tlZCc6IHsgY29sb3I6ICcjMzAzNjhhJyB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBjb2xvcjogJyMzMDM2OGEnIH19PkF0dGFjaCBQcm9mZXNzaW9uYWwgQ292ZXIgTGV0dGVyIHRvIHRoaXMgUXVvdGF0aW9uPC9UeXBvZ3JhcGh5Pn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHtpbmNsdWRlTGV0dGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdhdHRhY2hlZExldHRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYXR0YWNoZWRMZXR0ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXR0YWNoZWRMZXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb3ZlciBMZXR0ZXIgQ29udGVudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBdHRhY2hlZExldHRlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgcHJvZmVzc2lvbmFsIGludHJvZHVjdGlvbiBmb3IgeW91ciBxdW90YXRpb24uLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzYXZpbmcgIT09ICd0cnVlJyA/IDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+IDogPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+U2F2aW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW4xfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVXBkYXRlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCBjcmVhdGluZyBRdW90YXRpb24gPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlIDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj4gSWYgeW91IHN0b3AgY3JlYXRpbmcgd2l0aG91dCBzYXZpbmcsIGFsbCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvRXN0aW1hdGVWaWV3QWRtaW4nKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VVcGRhdGV9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+Tm88L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNpc2lvbignc3RheScpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQWRkIE5ld1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdwcmV2aW91cycpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgR28gQmFja1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qKiBTaWRlIFNob3AgRHJhd2VyICovfVxyXG4gICAgICA8U2lkZURyYXdlclxyXG4gICAgICAgIGFuY2hvcj1cInJpZ2h0XCJcclxuICAgICAgICBvcGVuPXtzaG9wT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXt0b2dnbGVTaG9wfVxyXG4gICAgICAgIFBhcGVyUHJvcHM9e3tcclxuICAgICAgICAgIHN4OiB7IHdpZHRoOiAnNTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1JywgcGFkZGluZzogJzIwcHgnIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWI9ezJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgIFNlbGVjdCBJdGVtIGZyb20gU2hvcFxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlU2hvcH0+XHJcbiAgICAgICAgICAgIDxDbG9zZSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG1iPXsyfT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoIFNob3BcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c2hvcFNlYXJjaH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNob3BTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlUmVmcmVzaFNob3B9IGNvbG9yPVwicHJpbWFyeVwiIHN4PXt7IG1sOiAxIH19PlxyXG4gICAgICAgICAgICA8UmVmcmVzaCAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICB7c2hvcExvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsIG92ZXJmbG93WTogJ2F1dG8nLCBtYXhIZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTgwcHgpJyB9fT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICB7c2hvcEl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2BkYXRhOiR7aXRlbS5jb250ZW50VHlwZX07YmFzZTY0LCR7aXRlbS5kYXRhfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5pdGVtTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgb2JqZWN0Rml0OiAnY29udGFpbicsIHBhZGRpbmc6ICc1cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IGZsZXhHcm93OiAxLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pdGVtTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRkMgeyhpdGVtLml0ZW1TZWxsaW5nUHJpY2UgKiByYXRlKT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwicHJpbWFyeVwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCB7aXRlbS5pdGVtU2VsbGluZ1ByaWNlPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBkaXNwbGF5PVwiYmxvY2tcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvY2s6IHtpdGVtLml0ZW1RdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUb0VzdGltYXRlKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogJzVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtdD17Mn0+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgIGNvdW50PXtzaG9wVG90YWxQYWdlc31cclxuICAgICAgICAgICAgICAgIHBhZ2U9e3Nob3BQYWdlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNob3BQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NpZGVEcmF3ZXI+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e0Vycm9yT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENhbmNlbEljb24gc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlNhdmluZyBGYWlsZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBwYWRkaW5nOiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPEN1c3RvbWVyRm9ybVZpZXcyIG9uQ3JlYXRlT3B0aW9uPXtoYW5kbGVDcmVhdGVDdXN0b21lcn0gb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBwYWRkaW5nOiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPEl0ZW1Gb3JtVmlldzIgb25DcmVhdGVPcHRpb249e2hhbmRsZUNyZWF0ZUl0ZW19IG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbkl0ZW1VcGRhdGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUl0ZW1VcGRhdGV9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2MDBweCcsIHBhZGRpbmc6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICA8SXRlbVVwZGF0ZVZpZXcyIG9uQ2xvc2U9e2hhbmRsZUNsb3NlSXRlbVVwZGF0ZX0gaWQ9e2lkSXRlbX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFc3RpbWF0ZUludm9pY2VGb3JtXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uL2FwaUNvbmZpZyc7XG5cbmNvbnN0IEl0ZW1UaHVtYm5haWwgPSAoeyBpdGVtSWQsIGluaXRpYWxEYXRhLCBpbml0aWFsVHlwZSB9KSA9PiB7XG4gIGNvbnN0IFtzcmMsIHNldFNyY10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoSW1hZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAvLyAxLiBDaGVjayBmb3IgaW5pdGlhbERhdGEgKHBhc3NlZCBmcm9tIHNlYXJjaC9zaG9wKVxuICAgICAgaWYgKGluaXRpYWxEYXRhICYmIGluaXRpYWxUeXBlICYmIGluaXRpYWxEYXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGluaXRpYWxUeXBlICE9PSBcInVuZGVmaW5lZFwiICYmIGluaXRpYWxEYXRhICE9PSBcIm51bGxcIikge1xuICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxEYXRhID09PSAnc3RyaW5nJyAmJiBpbml0aWFsRGF0YS5sZW5ndGggPiA1MCkge1xuICAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGFscmVhZHkgYSBkYXRhIFVSTFxuICAgICAgICAgICBpZiAoaW5pdGlhbERhdGEuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgICBzZXRTcmMoaW5pdGlhbERhdGEpO1xuICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRTcmMoYGRhdGE6JHtpbml0aWFsVHlwZX07YmFzZTY0LCR7aW5pdGlhbERhdGF9YCk7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxEYXRhLmRhdGEpIHtcbiAgICAgICAgICAgLy8gSGFuZGxlIGJ1ZmZlciBvYmplY3QgaWYgaXQncyBub3QgY29udmVydGVkIHRvIHN0cmluZyB5ZXRcbiAgICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoaW5pdGlhbERhdGEuZGF0YSk7XG4gICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBpbml0aWFsVHlwZSB9KTtcbiAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHNldFNyYyhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAyLiBGYWxsYmFjayB0byBmZXRjaCBpZiBubyBpbml0aWFsIGRhdGEgb3IgaWYgaXQgd2FzIGludmFsaWRcbiAgICAgIGlmICghaXRlbUlkIHx8IGl0ZW1JZCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBpdGVtSWQgPT09IFwibnVsbFwiKSB7XG4gICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2l0ZW1JZH1gKTtcbiAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEgJiYgcmVzLmRhdGEuZGF0YS5kYXRhKSB7XG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkocmVzLmRhdGEuZGF0YS5kYXRhLmRhdGEpO1xuICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiByZXMuZGF0YS5kYXRhLmNvbnRlbnRUeXBlIH0pO1xuICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHNldFNyYyhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgb25saW5lIGltYWdlOlwiLCBlcnIpO1xuICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaEltYWdlKCk7XG4gIH0sIFtpdGVtSWQsIGluaXRpYWxEYXRhLCBpbml0aWFsVHlwZV0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8QXZhdGFyXG4gICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICBzcmM9e3NyY31cbiAgICAgIHN4PXt7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MCwgYmFja2dyb3VuZENvbG9yOiAnI2YwZjBmMCcsIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyB9fVxuICAgID5cbiAgICAgIHshc3JjICYmIDxTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gc3g9e3sgZm9udFNpemU6IDQwLCBjb2xvcjogJyM5OTknIH19IC8+fVxuICAgIDwvQXZhdGFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVRodW1ibmFpbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3MvU2lkZWJhck5ldy5zY3NzJ1xyXG5pbXBvcnQgeyBPdXRsZXQsIE5hdkxpbmssIExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IERhc2hib2FyZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgUGVybUlkZW50aXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Blcm1JZGVudGl0eSc7XHJcbmltcG9ydCBMaXN0QWx0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xpc3RBbHQnO1xyXG5pbXBvcnQgRGVzY3JpcHRpb25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgUmVjZWlwdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZWNlaXB0JztcclxuaW1wb3J0IE1vdmluZ0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3ZpbmcnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3MnO1xyXG5pbXBvcnQgSW5zZXJ0RHJpdmVGaWxlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0luc2VydERyaXZlRmlsZSc7XHJcbmltcG9ydCBSZXN0b3JlUGFnZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXN0b3JlUGFnZSc7XHJcbmltcG9ydCBSZXF1ZXN0UXVvdGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUmVxdWVzdFF1b3RlJztcclxuaW1wb3J0IE1vbmV0aXphdGlvbk9uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vbmV0aXphdGlvbk9uJztcclxuaW1wb3J0IEVuZ2luZWVyaW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VuZ2luZWVyaW5nJztcclxuaW1wb3J0IHsgRXhwbGljaXQsIFNob3BwaW5nQmFnT3V0bGluZWQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IFJvb21QcmVmZXJlbmNlc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Sb29tUHJlZmVyZW5jZXMnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbUJ1dHRvbiwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQsIG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFBheW1lbnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGF5bWVudCc7XHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3JlVmVydCc7XHJcbmZ1bmN0aW9uIFNpZGViYXJEYXNoMSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8RGFzaGJvYXJkSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhc2hib2FyZFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UGVybUlkZW50aXR5SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkN1c3RvbWVyXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPExpc3RBbHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiU3RvcmVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlcXVlc3RRdW90ZUljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJRdW90YXRpb25cIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEZXNjcmlwdGlvbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbnZvaWNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9uZXRpemF0aW9uT25JY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGF5bWVudFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFNob3BwaW5nQmFnT3V0bGluZWQgLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEYWlseSBFeHBlbnNlc1wiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ICA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxSb29tUHJlZmVyZW5jZXNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHJvamVjdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlY2VpcHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHVyY2hhc2VzIFJlcXVlc3RcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgPEVuZ2luZWVyaW5nSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk1haW50ZW5hbmNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTW9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJEYXNoMSIsImltcG9ydCBEZXhpZSBmcm9tIFwiZGV4aWVcIjtcclxuXHJcbmNvbnN0IGRiID0gbmV3IERleGllKCdHbG9iYWxHYXRlJyk7XHJcblxyXG5kYi52ZXJzaW9uKDEpLnN0b3Jlcyh7XHJcbiAgICBjdXN0b21lclNjaGVtYTogJysraWQsQ3VzdG9tZXIsX2lkLGN1c3RvbWVyVHlwZSxkZXNpZ25hdGlvbixjdXN0b21lckZpcnN0TmFtZSwgY3VzdG9tZXJMYXN0TmFtZSxjdXN0b21lckZ1bGxOYW1lLGNvbXBhbnlOYW1lLGN1c3RvbWVyRW1haWwsY3VzdG9tZXJDb21wYW55UGhvbmUsY3VzdG9tZXJQaG9uZSxjdXJyZW5jeSxwYXltZW50VGVybXMsIGJpbGxpbmdBZGRyZXNzLGJpbGxpbmdDaXR5LGNyZWRpdCxzaGlwcGluZ0FkZHJlc3Msc2hpcHBpbmdDaXR5LGN1c3RvbWVyRGVzY3JpcHRpb24sc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgc3VwcGxpZXJTY2hlbWE6ICcrK2lkLF9pZCxzdXBwbGllck5hbWUsc3RvcmVOYW1lLGN1c3RvbWVyUGhvbmUxLGN1c3RvbWVyUGhvbmUyLGFkZHJlc3MsZGVzY3JpcHRpb24sc3luY2VkJyxcclxuICAgIGl0ZW1TY2hlbWE6ICcrK2lkLGl0ZW1OYW1lLF9pZCxpdGVtVXBjLHR5cGVJdGVtLGl0ZW1TdG9yZSx1bml0LGl0ZW1EaW1lbnNpb24saXRlbVdlaWdodCxpdGVtQ2F0ZWdvcnksaXRlbU1hbnVmYWN0dXJlcixpdGVtQnJhbmQsaXRlbUNvc3RQcmljZSxpdGVtUXVhbnRpdHksaXRlbVNlbGxpbmdQcmljZSxpdGVtRGVzY3JpcHRpb24sc3RvY2tPbkhhbmQsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgaXRlbVNjaGVtYVZpZXc6ICcrK2lkLF9pZCcsXHJcbiAgICBkYWlseUV4cGVuc2VTY2hlbWE6ICcrK2V4cGVuc2VOdW1iZXIsX2lkLGV4cGVuc2VDYXRlZ29yeSxhY2NvdW50TmFtZSxkZXNjcmlwdGlvbixleHBlbnNlRGF0ZSxhbW91bnQsZW1wbG95ZWVOYW1lLHJhdGUsdG90YWwsYWNjb3VudE5hbWVJbmZvLHJlYXNvbixDcmVhdGUsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgZGFpbHlFeHBlbnNlVmlld1NjaGVtYTogJysrZXhwZW5zZU51bWJlcixfaWQnLFxyXG4gICAgaGlkZGVuU2NoZW1hOiAnKytpZCxfaWQsaWRSb3csaGlkZGVuQnlDRU8nLFxyXG4gICAgaXRlbUNvZGVTY2hlbWE6ICcrK2lkLGl0ZW1DYXRlZ29yeSxfaWQsaXRlbUNvZGUnLFxyXG4gICAgaXRlbVVuaXRTY2hlbWE6ICcrK2lkLGl0ZW1Vbml0LF9pZCcsXHJcbiAgICBkZXBhcnRtZW50U2NoZW1hOiAnKytpZCxkZXBhcnRtZW50LF9pZCcsXHJcbiAgICBlc3RpbWF0ZVNjaGVtYTogJysrZXN0aW1hdGVOdW1iZXIsX2lkLGN1c3RvbWVyTmFtZSxlc3RpbWF0ZURhdGUsZXN0aW1hdGVEZWZlY3QsZXN0aW1hdGVTdWJqZWN0LHN0YXR1cyxpdGVtcyxzdWJUb3RhbCx0b3RhbCx0b3RhbFcsbm90ZSxlc3RpbWF0ZU5hbWUsQ3JlYXRlLGJhbGFuY2VEdWUsdGVybXMsc2hpcHBpbmcsbm90ZUluZm8sYWRqdXN0bWVudCxhZGp1c3RtZW50TnVtYmVyLHRvdGFsSW52b2ljZSxSZWYsUmVmZXJlbmNlTmFtZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBpbnZvaWNlU2NoZW1hOiAnKytpbnZvaWNlTnVtYmVyLF9pZCxjdXN0b21lck5hbWUsaW52b2ljZURhdGUsaW52b2ljZUR1ZURhdGUsaW52b2ljZVN1YmplY3QsaW52b2ljZVB1cmNoYXNlLGludm9pY2VEZWZlY3Qsc3RhdHVzLGl0ZW1zLHN1YlRvdGFsLFJlZmVyZW5jZU5hbWUsUmVmZXJlbmNlTmFtZTIsdG90YWwsbm90ZUluZm8sYmFsYW5jZUR1ZSx0b3RhbFcsYWN0aW9uVGFrZW4saW52b2ljZU5hbWUsUG9zaXRpb24sbm90ZSxDcmVhdGUsc2hpcHBpbmcsYWRqdXN0bWVudCxhZGp1c3RtZW50TnVtYmVyLHRvdGFsSW52b2ljZSx0ZXJtcyxSZWYsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgaW52b2ljZVZpZXdTY2hlbWE6ICcrK2ludm9pY2VOdW1iZXIsX2lkJyxcclxuICAgIHBvc1NjaGVtYTogJysrZmFjdHVyZU51bWJlcixfaWQsY3VzdG9tZXJOYW1lLGludm9pY2VEYXRlLHRpbWUsc3RhdHVzLGl0ZW1zLHN1YlRvdGFsLHRvdGFsRkMsdG90YWxVU0QscmF0ZSxDcmVhdGUsYmFsYW5jZUR1ZSxub3RlLHRvdGFsSW52b2ljZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBwYXltZW50U2NoZW1hOiAnKytwYXltZW50TnVtYmVyLF9pZCxjdXN0b21lck5hbWUsYW1vdW50LGJhbmtDaGFyZ2UsbW9kZXMscGF5bWVudERhdGUscmVmZXJlbmNlTnVtYmVyLGRlc2NyaXB0aW9uLHJlbWFpbmluZyxDcmVhdGUsUGF5bWVudFJlY2VpdmVkRkMsUGF5bWVudFJlY2VpdmVkVVNELFRvdGFsQW1vdW50LHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHByb2plY3RTY2hlbWE6ICcrK3Byb2plY3ROdW1iZXIsX2lkLGN1c3RvbWVyTmFtZSxwcm9qZWN0TmFtZSxzdGF0dXMscGhhc2UsZGVzY3JpcHRpb24sc3RhcnREYXRlLHZpc2l0RGF0ZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBwdXJjaGFzZVNjaGVtYTogJysrcHVyY2hhc2VOdW1iZXIsX2lkLGN1c3RvbWVyTmFtZSxub3RlSW5mbyxlc3RpbWF0ZURlZmVjdCxlc3RpbWF0ZVN1YmplY3QscHVyY2hhc2VOYW1lLHByb2plY3ROYW1lLGRlc2NyaXB0aW9uLFBvc2l0aW9uLHB1cmNoYXNlRGF0ZSxzdGF0dXMsc3RhdHVzSW5mbyxpdGVtcyxwdXJjaGFzZUFtb3VudDEscHVyY2hhc2VBbW91bnQyLFJlZmVyZW5jZU5hbWUsUmVmZXJlbmNlTmFtZTIsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgcHVyY2hhc2VTY2hlbWFWaWV3OiAnKytwdXJjaGFzZU51bWJlcixfaWQnLFxyXG4gICAgbWFpbnRlbmFuY2VTY2hlbWE6ICcrK3NlcnZpY2VOdW1iZXIsY3VzdG9tZXJOYW1lLF9pZCxhY3Rpb24sc2VydmljZU5hbWUsc2VydmljZURhdGUsbGFib3JRdHksdG90YWxMYWJvckZlZXNHZW5lcmFsZSx0ZWNobmljaWFuQXNzaWduLG5vdGUsdG90YWxMYWJvckZlZXMsbGFib3JQZXJjZW50YWdlLHRvdGFsRGlzY291bnQsbGFib3JEaXNjb3VudCx2aXNpdERhdGUsc3RhdHVzLGl0ZW1zLGl0ZW1EZXNjcmlwdGlvbkluZm8sYnJhbmQsYWN0aW9uVGFrZW4sbW9kZWwsd2FycmFudHksc2VyaWFsTm8sZGVmZWN0RGVzY3JpcHRpb24sYWRqdXN0bWVudCxhZGp1c3RtZW50TnVtYmVyLHRvdGFsSW52b2ljZSxzdWJUb3RhbCxDb252ZXJ0ZWQsUmVmZXJlbmNlTmFtZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBtYWludGVuYW5jZVZpZXdTY2hlbWE6ICcrK3NlcnZpY2VOdW1iZXIsX2lkJyxcclxuICAgIGVtcGxveWVlU2NoZW1hOiAnKytlbXBsb3llZUlkLF9pZCxqb2luRGF0ZSxlbXBsb3llZU5hbWUsZW1wbG95ZWVBZGRyZXNzLGVtcGxveWVlRW1haWwsZW1wbG95ZWVQaG9uZSxlbXBsb3llZVJvbGUsZGVwYXJ0bWVudCxkYXRlT2ZCaXJ0aCxHZW5kZXIsc3RhdHVzLHN0YXR1c01hcml0YWwsaWRlbnRpZmllcixpZGVudGlmaWVyTnVtYmVyLGV4cGlyZURhdGUsc2FsYXJ5LHJlYXNvbjEsZGVzY3JpcHRpb24sYmFua0FjY291bnROdW1iZXIsYmFua05hbWUsb3RoZXIsYm91bmNlQWxsb3dhbmNlcyxmb29kQmFzaWMsYmFzaWNUcmFuc3BvcnQsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgcGF5Um9sbFNjaGVtYTogJysrcGF5TnVtYmVyLF9pZCxwYXlEYXRlLG1vbnRoLGRheXNXLHN0YXR1cyxkYXlzT3BlbixMb3BzLGJhc2ljU2FsYXJ5LGVhcm5pbmdTYWxhcnksYWR2YW5jZWRTYWxhcnksYmFzaWNUcmFuc3BvcnQsdHJhbnNwb3J0RWFybmluZyx0cmFuc3BvcnREZWR1Y3Rpb24sZm9vZEJhc2ljLGZvb2RFYXJuaW5nLGl0ZW1Mb3N0LGZvb2REZWR1Y3Rpb24sYm91bmNlQWxsb3dhbmNlcyxib3VuY2VBbGxvd2FuY2VzRWFybmluZyxvdGhlcixvdGhlckVhcm5pbmcsbG9hbixib251cyx0b3RhbEFjdHVhbFNhbGFyeSx0b3RhbEFjdHVhbEVhcm5pbmcsdG90YWxBY3R1YWxEZWR1Y3Rpb24sdG90YWxOZXQsdG90YWxQYWlkLHJhdGUsdG90YWxQYWlkRG9sbGFycyx3b3JkcyxlbXBsb3llZU5hbWUsYW1vdW50UGF5VVNELGFtb3VudFBheUZDLENyZWRpdEZDLENyZWRpdFVTRCxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBlbXBsb3llZVVzZXJTY2hlbWE6ICdfaWQsZW1wbG95ZWVOYW1lLGVtcGxveWVlRW1haWwscm9sZSxwYXNzd29yZCx2ZXJpZmljYXRpb25Db2RlLGNvZGVFeHBpcmF0aW9uLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHVzZXJBY2NvdW50OiAnaWRJbmZvLGVtcGxveWVlTmFtZSxwYXNzd29yZCcsXHJcbiAgICBncmFudEFjY2Vzc1NjaGVtYTogJysraWQsZW1wbG95ZWVOYW1lLF9pZCx1c2VySUQsbW9kdWxlcycsXHJcbiAgICBjYXNoU2NoZW1hOiAnKytjYXNoTnVtYmVyLF9pZCxjYXNoRGF0ZSxzdGF0dXMsdG90YWxDYXNoLGFtb3VudCx0b3RhbEl0ZW1QdXJjaGFzZVVTRCx0b3RhbFBheXJvbGxVU0QsdG90YWxFeHBlbnNlc1VTRCx0b3RhbEV4cGVuc2VzRkMsdG90YWxDYXNoVVNELHRvdGFsQ2FzaEZDLHJldHVybkFtb3VudEZDLHJldHVybkFtb3VudFVTRCxSZW1haW5pbmdBbW91bnRGQyxSZW1haW5pbmdBbW91bnRVU0QsQ3JlYXRlLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHJhdGVTY2hlbWE6ICcrK2lkLF9pZCxyYXRlJyxcclxuICAgIHBheW1lbnRSYXRlU2NoZW1hOiAnKytpZCxfaWQscGF5bWVudFJhdGUnLFxyXG4gICAgZGFpbHlFeHBlbnNlc0NhdGVnb3J5U2NoZW1hOiAnKytpZCxfaWQsZXhwZW5zZXNDYXRlZ29yeScsXHJcbiAgICBlbXBsb3llZUF0dGVuZGFuY2VTY2hlbWE6ICcrK2lkSW5mbyxfaWQsaWQsdGltZUluLHRpbWVPdXQsbmFtZSxvYnNlcnZhdGlvbixub3RlLGRheXNXTixzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBpdGVtUHVyY2hhc2VTY2hlbWE6ICcrK2l0ZW1QdXJjaGFzZU51bWJlcixfaWQsaXRlbVB1cmNoYXNlRGF0ZSxtYW51ZmFjdHVyZXIsbWFudWZhY3R1cmVyTnVtYmVyLGRlc2NyaXB0aW9uLG5vdGUsQ3JlYXRlLHRvdGFsLHRvdGFsRkMsaXRlbXMscmVhc29uLHByb2plY3ROYW1lJyxcclxuICAgIGl0ZW1QdXJjaGFzZVZpZXdTY2hlbWE6ICcrK2l0ZW1QdXJjaGFzZU51bWJlcixfaWQnLFxyXG4gICAgaXRlbVJldHVybjogJysrb3V0TnVtYmVyLF9pZCxpdGVtT3V0RGF0ZSxyZWFzb24scmVmZXJlbmNlLGl0ZW1zUXR5QXJyYXksZGVzY3JpcHRpb24sQ3JlYXRlLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIGl0ZW1SZXR1cm5WaWV3OiAnKytvdXROdW1iZXIsX2lkJyxcclxuICAgIGl0ZW1PdXRTY2hlbWE6ICcrK2lkSW5mbyxvdXROdW1iZXIsX2lkLGl0ZW1PdXREYXRlLHJlYXNvbixyZWZlcmVuY2UsaXRlbXNRdHlBcnJheSxkZXNjcmlwdGlvbixDcmVhdGUsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgaXRlbU91dFZpZXdTY2hlbWE6ICcrK2lkSW5mbyxfaWQnLFxyXG4gICAgcHVyY2hhc2VPcmRlcjogJysrb3V0TnVtYmVyLF9pZCx0b3RhbFVTRCx0b3RhbCx0b3RhbEZDLGl0ZW1PdXREYXRlLHJlYXNvbixyZWZlcmVuY2UsaXRlbXNRdHlBcnJheSxtYW51ZmFjdHVyZXIsc3RhdHVzLENvbnZlcnRlZCxtYW51ZmFjdHVyZXJOdW1iZXIsZGVzY3JpcHRpb24sSXBSZWxhdGVkLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHB1cmNoYXNlT3JkZXJWaWV3OiAnKytvdXROdW1iZXIsX2lkJyxcclxuICAgIHBsYW5pbmdTY2hlbWE6ICcrK2lkSW5mbyxwbGFuaW5nRGF0ZSxlbXBsb3llZU5hbWUsZW1wbG95ZWVJRCxwcm9qZWN0TmFtZSxkYXlQYXlVU2Qsd29ya051bWJlcixzdGF0dXMscGxhbmluZ0Rlc2NyaXB0aW9uLHBsYW5pbmdUYXNrJyxcclxuICAgIHJhdGVSZXR1cm5TY2hlbWE6ICcrK2lkLCBfaWQsIHJhdGVSJyxcclxuXHJcbiAgICAvLyBDYWNoZSB0YWJsZXMgZm9yIGh5YnJpZCBhcmNoaXRlY3R1cmUgKHYyLjQuMClcclxuICAgIC8vIFRoZXNlIHN0b3JlIGZ1bGwgZGF0YXNldHMgbG9jYWxseSBmb3IgaW5zdGFudCBxdWVyaWVzXHJcbiAgICBpdGVtUHVyY2hhc2VDYWNoZTogJ19pZCwgaXRlbVB1cmNoYXNlRGF0ZSwgaXRlbXMsIG1hbnVmYWN0dXJlcicsXHJcbiAgICBpdGVtT3V0Q2FjaGU6ICdfaWQsIGl0ZW1PdXREYXRlLCBpdGVtc1F0eUFycmF5JyxcclxuICAgIHBvc0NhY2hlOiAnX2lkLCBpbnZvaWNlRGF0ZSwgaXRlbXMsIGN1c3RvbWVyTmFtZScsXHJcbiAgICBpdGVtUmV0dXJuQ2FjaGU6ICdfaWQsIGl0ZW1PdXREYXRlLCBpdGVtc1F0eUFycmF5JyxcclxuICAgIGludm9pY2VDYWNoZTogJ19pZCwgaW52b2ljZU51bWJlciwgY3VzdG9tZXJOYW1lLCBpbnZvaWNlRGF0ZSwgaXRlbXMnLFxyXG4gICAgZXN0aW1hdGVDYWNoZTogJ19pZCwgZXN0aW1hdGVOdW1iZXIsIGN1c3RvbWVyTmFtZSwgZXN0aW1hdGVEYXRlLCBpdGVtcycsXHJcbiAgICBjdXN0b21lckNhY2hlOiAnX2lkLCBjdXN0b21lckZ1bGxOYW1lLCBjb21wYW55TmFtZSwgY3VzdG9tZXJFbWFpbCcsXHJcbiAgICBzdXBwbGllckNhY2hlOiAnX2lkLCBzdXBwbGllck5hbWUsIHN0b3JlTmFtZScsXHJcbiAgICBwcm9qZWN0Q2FjaGU6ICdfaWQsIHByb2plY3ROdW1iZXIsIHByb2plY3ROYW1lLCBjdXN0b21lck5hbWUnLFxyXG4gICAgbWFpbnRlbmFuY2VDYWNoZTogJ19pZCwgc2VydmljZU51bWJlciwgc2VydmljZU5hbWUsIGN1c3RvbWVyTmFtZSwgaXRlbXMnLFxyXG4gICAgZW1wbG95ZWVDYWNoZTogJ19pZCwgZW1wbG95ZWVOYW1lLCBlbXBsb3llZUVtYWlsLCBlbXBsb3llZVJvbGUsIGRlcGFydG1lbnQnLFxyXG4gICAgcGF5cm9sbENhY2hlOiAnX2lkLCBwYXlOdW1iZXIsIHBheURhdGUsIG1vbnRoLCBlbXBsb3llZU5hbWUnLFxyXG4gICAgcmF0ZUNhY2hlOiAnX2lkLCByYXRlJyxcclxuICAgIHVzZXJDYWNoZTogJ19pZCwgZW1wbG95ZWVOYW1lLCByb2xlJyxcclxuICAgIGdyYW50QWNjZXNzQ2FjaGU6ICdfaWQsIHVzZXJJRCwgZW1wbG95ZWVOYW1lLCBtb2R1bGVzJyxcclxuICAgIGNvbXBhbnlQcm9maWxlQ2FjaGU6ICdfaWQnLFxyXG4gICAgcHVyY2hhc2VPcmRlckNhY2hlOiAnX2lkLCBvdXROdW1iZXIsIG1hbnVmYWN0dXJlciwgc3RhdHVzJyxcclxuICAgIHBheW1lbnRDYWNoZTogJ19pZCwgcGF5bWVudE51bWJlciwgY3VzdG9tZXJOYW1lLCBwYXltZW50RGF0ZScsXHJcbiAgICBjYXNoQ2FjaGU6ICdfaWQsIGNhc2hOdW1iZXIsIGNhc2hEYXRlLCBzdGF0dXMnLFxyXG4gICAgZGFpbHlFeHBlbnNlQ2FjaGU6ICdfaWQsIGV4cGVuc2VOdW1iZXIsIGV4cGVuc2VDYXRlZ29yeSwgZXhwZW5zZURhdGUnLFxyXG4gICAgLy8gU3luYyBtZXRhZGF0YVxyXG4gICAgc3luY01ldGFkYXRhOiAnKytpZCwgdGFibGVOYW1lLCBsYXN0U3luYywgcmVjb3JkQ291bnQnXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyRGFzaDEiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJEZWxldGVJY29uIiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVSb3ciLCJUYWJsZUhlYWQiLCJQYXBlciIsIlRhYmxlQ29udGFpbmVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsIkF1dG9jb21wbGV0ZSIsInN0eWxlZCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJGYWRlIiwiQm94IiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiRGl2aWRlciIsIkNoZWNrYm94IiwiRm9ybUNvbnRyb2xMYWJlbCIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkFkZCIsIkFycm93VXB3YXJkT3V0bGluZWQiLCJEcmFnSW5kaWNhdG9yUm91bmRlZCIsIkVkaXQiLCJSZWZyZXNoIiwiUmVtb3ZlQ2lyY2xlT3V0bGluZSIsInY0IiwidXNlTmF2aWdhdGUiLCJFTkRQT0lOVF9VUkwiLCJpbnZhbGlkYXRlQ2FjaGUiLCJEZW1vQ29udGFpbmVyIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJBZGFwdGVyRGF5anMiLCJEYXRlUGlja2VyIiwiZGF5anMiLCJBcnJvd0JhY2siLCJTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24iLCJBZGRTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24iLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiTG9hZGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsIkNsb3NlIiwiRHJhd2VyIiwiU2lkZURyYXdlciIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIkJ1dHRvbiIsIlBhZ2luYXRpb24iLCJDdXN0b21lckZvcm1WaWV3MiIsIkl0ZW1Gb3JtVmlldzIiLCJJdGVtVXBkYXRlVmlldzIiLCJudW1iZXJUb1dvcmRzIiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJhZ2dhYmxlIiwiRHJvcHBhYmxlIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiZGIiLCJJdGVtVGh1bWJuYWlsIiwiTGlnaHRUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJCbGFja1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwic3R5bGUyIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNSIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJfcmVmNiIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkVzdGltYXRlSW52b2ljZUZvcm0iLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmNyIsIl9hc3luY1RvR2VuZXJhdG9yIiwibmF2aWdhdG9yIiwib25MaW5lIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwicmVzTG9jYWxJbmZvIiwiZW1wbG95ZWVVc2VyU2NoZW1hIiwiX2lkIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJhcGlVcmwiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0ZXJtcyIsInNldFRlcm1zIiwiX3VzZVN0YXRlMyIsImRhdGUiLCJEYXRlIiwiX3VzZVN0YXRlNCIsImVzdGltYXRlRGF0ZSIsInNldEVzdGltYXRlRGF0ZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiZXN0aW1hdGVTdWJqZWN0Iiwic2V0RXN0aW1hdGVTdWJqZWN0Iiwic3RhdHVzIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJlc3RpbWF0ZURlZmVjdCIsInNldEVzdGltYXRlRGVmZWN0IiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJub3RlIiwic2V0Tm90ZSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIml0ZW1zIiwiU2V0SXRlbXMiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwic3ViVG90YWwiLCJzZXRTdWJUb3RhbCIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJ0b3RhbCIsInNldFRvdGFsIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsInNoaXBwaW5nIiwic2V0U2hpcHBpbmciLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwiYWRqdXN0bWVudCIsInNldEFkanVzdG1lbnQiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiYWRqdXN0bWVudE51bWJlciIsInNldEFkanVzdG1lbnROdW1iZXIiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwidG90YWxJbnZvaWNlIiwic2V0VG90YWxJbnZvaWNlIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImJhbGFuY2VEdWUiLCJzZXRCYWxhbmNlRHVlIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsInRvdGFsVyIsInNldFRvdGFsVyIsIl9SZWFjdCR1c2VTdGF0ZSIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJlc3RpbWF0ZU51bWJlciIsInNldEVzdGltYXRlTnVtYmVyIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsIm5vdGVJbmZvIiwic2V0Tm90ZUluZm8iLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwic2hvcE9wZW4iLCJzZXRTaG9wT3BlbiIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJzaG9wSXRlbXMiLCJzZXRTaG9wSXRlbXMiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2Iiwic2hvcFNlYXJjaCIsInNldFNob3BTZWFyY2giLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4Iiwic2hvcFBhZ2UiLCJzZXRTaG9wUGFnZSIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJzaG9wVG90YWxQYWdlcyIsInNldFNob3BUb3RhbFBhZ2VzIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsInJhdGUiLCJzZXRSYXRlIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsInNob3BMb2FkaW5nIiwic2V0U2hvcExvYWRpbmciLCJkYXRlQ29tbWVudCIsImVzdGltYXRlTmFtZSIsIlN0cmluZyIsInBhZFN0YXJ0IiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsIkl0ZW1JbmZvcm1hdGlvbiIsInNldEl0ZW1JbmZvcm1hdGlvbiIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJpbmNsdWRlTGV0dGVyIiwic2V0SW5jbHVkZUxldHRlciIsIlBST0ZFU1NJT05BTF9DT1ZFUl9MRVRURVIiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwiYXR0YWNoZWRMZXR0ZXIiLCJzZXRBdHRhY2hlZExldHRlciIsImZldGNobGFzdE51bWJlciIsIl9yZWY4IiwiX3JlcyRkYXRhIiwiX3JlcyRkYXRhMiIsIm51bSIsInBhcnNlSW50Iiwib2ZmTGluZUN1c3RvbWVyMSIsImVzdGltYXRlU2NoZW1hIiwidG9BcnJheSIsImxhdGVzdCIsInJlZHVjZSIsIm1heCIsInJvdyIsImZldGNoSXRlbSIsIl9yZWY5IiwicmV2ZXJzZSIsIml0ZW1TY2hlbWEiLCJmZXRjaFNob3AiLCJfcmVmMCIsInJlc1JhdGUiLCJmb3JFYWNoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidG90YWxQYWdlcyIsImZpbHRlciIsInR5cGVJdGVtIiwib2ZmTGluZVJhdGUiLCJyYXRlU2NoZW1hIiwiaGFuZGxlUmVmcmVzaFNob3AiLCJoYW5kbGVTaG9wUGFnZUNoYW5nZSIsImUiLCJuZXdQYWdlIiwiaGFuZGxlU2hvcFNlYXJjaENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidG9nZ2xlU2hvcCIsImhhbmRsZUFkZFRvRXN0aW1hdGUiLCJzaG9wSXRlbSIsImV4aXN0aW5nSXRlbUluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsIml0ZW1OYW1lIiwidXBkYXRlZEl0ZW1zIiwiY3VycmVudEl0ZW0iLCJuZXdRdHkiLCJpdGVtUXR5IiwiaXRlbUFtb3VudCIsIk1hdGgiLCJyb3VuZCIsIml0ZW1SYXRlIiwidG90YWxBbW91bnQiLCJkaXNjb3VudCIsIml0ZW1EaXNjb3VudCIsInBlcmNlbnRhZ2UiLCJ0b3RhbENvc3QiLCJpdGVtQ29zdCIsInRvdGFsR2VuZXJhbGUiLCJpdGVtQnV5IiwibmV3SXRlbSIsImlkUm93IiwiaXRlbURlc2NyaXB0aW9uIiwiaXRlbVNlbGxpbmdQcmljZSIsIml0ZW1Db3N0UHJpY2UiLCJpdGVtV2VpZ2h0Iiwic3RvY2siLCJpdGVtUXVhbnRpdHkiLCJjb250ZW50VHlwZSIsIml0ZW1PdXQiLCJuZXdJdGVtT3V0IiwiaGFuZGxlQ2hhbmdlSXRlbSIsIm5ld1ZhbHVlIiwic2VsZWN0ZWRPcHRpb25zIiwibWFwIiwiaGFuZGxlQ2hhbmdlIiwiaSIsIl9lJHRhcmdldCIsIm5hbWUiLCJsaXN0IiwiaGFuZGxlQ2hhbmdlQ0VPIiwiX2UkdGFyZ2V0MiIsImFkZEl0ZW0iLCJhZGRJdGVtV2hpdGUiLCJuZXdEZXNjcmlwdGlvbiIsImFkZEl0ZW1Sb3ciLCJ1cGRhdGUiLCJzcGxpY2UiLCJhZGRJdGVtV2hpdGVSb3ciLCJoYW5kbGVEcmFnRW5kIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJuZXdJdGVtcyIsIl9uZXdJdGVtcyRzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsIl9uZXdJdGVtcyRzcGxpY2UyIiwicmVtb3ZlZCIsImRlbGV0ZUl0ZW0iLCJJdGVtIiwiZmlsdGVySXRlbUluZm9ybWF0aW9uIiwib3B0aW9uIiwiZmluZCIsIl9yb3ckaXRlbU5hbWUiLCJ3aG9sZVBhcnQiLCJmbG9vciIsImZyYWN0aW9uYWxQYXJ0IiwidG9GaXhlZCIsInNwbGl0Iiwid2hvbGVXb3JkcyIsInRvV29yZHMiLCJmcmFjdGlvbmFsV29yZHMiLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsImZldGNoQ3VzdG9tZXIiLCJfcmVmMSIsImN1c3RvbWVyU2NoZW1hIiwiX3VzZVN0YXRlNTMiLCJfdXNlU3RhdGU1NCIsImN1c3RvbWVyTmFtZSIsInNldEN1c3RvbWVyTmFtZSIsImhhbmRsZUNoYW5nZUN1c3RvbWVyIiwiQ3VzdG9tZXIiLCJiaWxsaW5nQWRkcmVzcyIsImJpbGxpbmdDaXR5IiwiaGFuZGxlU2hvd0F1dG9jb21wbGV0ZSIsImhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbiIsInJlc3VsdDEiLCJzdW0iLCJuZXdUb3RhbCIsIk51bWJlciIsIm5ld0JhbGFuY2UiLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2Iiwib3BlbkF1dG9jb21wbGV0ZTEiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMSIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTEiLCJfdXNlU3RhdGU1NyIsIl91c2VTdGF0ZTU4Iiwib3Blbkl0ZW1VcGRhdGUiLCJzZXRPcGVuSXRlbVVwZGF0ZSIsIl91c2VTdGF0ZTU5IiwiX3VzZVN0YXRlNjAiLCJpZEl0ZW0iLCJzZXRJZEl0ZW0iLCJoYW5kbGVPcGVuSXRlbVVwZGF0ZSIsIl9yZWYxMCIsImlkIiwiX3giLCJoYW5kbGVDbG9zZUl0ZW1VcGRhdGUiLCJfcmVmMTEiLCJfcm93JGl0ZW1OYW1lMiIsImhhbmRsZUNyZWF0ZUN1c3RvbWVyIiwibmV3Q3VzdG9tZXIiLCJfdXNlU3RhdGU2MSIsIl91c2VTdGF0ZTYyIiwib3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVDcmVhdGVJdGVtIiwiX3VzZVN0YXRlNjMiLCJfdXNlU3RhdGU2NCIsIm9wZW4xIiwic2V0T3BlbjEiLCJoYW5kbGVPcGVuVXBkYXRlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZVVwZGF0ZSIsIl91c2VTdGF0ZTY1IiwiX3VzZVN0YXRlNjYiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTY3IiwiX3VzZVN0YXRlNjgiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTY5IiwiX3VzZVN0YXRlNzAiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVDbG9zZUVycm9yIiwiaGFuZGxlRGVjaXNpb24iLCJoaXN0b3J5IiwiYmFjayIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxMiIsIlJlZmVyZW5jZUluZm8iLCJSZWZlcmVuY2VJbmZvTnVtYmVyIiwiaWRJbmZvIiwicGVyc29uIiwicmVhc29uIiwiZGF0ZU5vdGlmaWNhdGlvbiIsInBvc3QiLCJsb2ciLCJfeDIiLCJfeDMiLCJfdXNlU3RhdGU3MSIsIl91c2VTdGF0ZTcyIiwic2F2aW5nIiwic2V0U2F2aW5nIiwiaGFuZGxlU3VibWl0IiwiX3JlZjEzIiwiaXRlbXNXaXRob3V0RGF0YSIsIl9yZWYxNCIsInJlc3QiLCJfZXhjbHVkZWQzIiwic3luY2VkIiwicHV0IiwiX3g0IiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJ4cyIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIm9uQ2hhbmdlIiwiUGFwZXJDb21wb25lbnQiLCJfcmVmMTUiLCJjaGlsZHJlbiIsIm90aGVyIiwiX2V4Y2x1ZGVkNCIsIm1hcmdpblRvcCIsImRpc2FibGVkIiwib25Nb3VzZURvd24iLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsImxhYmVsIiwicmVxdWlyZWQiLCJodG1sRm9yIiwidHlwZSIsInN0YXJ0QWRvcm5tZW50IiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwiZm9ybWF0IiwibXVsdGlsaW5lIiwicm93cyIsImZsb2F0IiwicmlnaHQiLCJ0aXRsZSIsInBsYWNlbWVudCIsIm9uRHJhZ0VuZCIsImRyb3BwYWJsZUlkIiwicHJvdmlkZWQiLCJzbmFwc2hvdCIsImRyb3BwYWJsZVByb3BzIiwicmVmIiwiaW5uZXJSZWYiLCJrZXkiLCJkcmFnZ2FibGVJZCIsIl9JdGVtJGl0ZW1OYW1lIiwiZHJhZ2dhYmxlUHJvcHMiLCJ1bmRlZmluZWQiLCJGcmFnbWVudCIsImRyYWdIYW5kbGVQcm9wcyIsImNvbFNwYW4iLCJzaXplIiwiY3Vyc29yIiwiZ2FwIiwiaXRlbUlkIiwiaW5pdGlhbERhdGEiLCJpbml0aWFsVHlwZSIsImZsZXhEaXJlY3Rpb24iLCJoaWRkZW4iLCJmb250V2VpZ2h0IiwidG9VcHBlckNhc2UiLCJkaXNhYmxlQ2xlYXJhYmxlIiwiaXRlbUJyYW5kIiwicmVuZGVyT3B0aW9uIiwib25JbnB1dENoYW5nZSIsImV2ZW50IiwibmV3SW5wdXRWYWx1ZSIsImZpbHRlck9wdGlvbnMiLCJfcmVmMTYiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiX3JlZjE3IiwiX2V4Y2x1ZGVkNSIsInBsYWNlaG9sZGVyIiwicmVwbGFjZSIsIl9JdGVtJGl0ZW1OYW1lMiIsIl9yZWYxOCIsIl9yZWYxOSIsIl9leGNsdWRlZDYiLCJib3JkZXJCb3R0b20iLCJ0ZXh0QWxpZ24iLCJhbGlnbiIsIm1heFJvd3MiLCJtYiIsIm9yaWVudGF0aW9uIiwiZmxleEl0ZW0iLCJjb250cm9sIiwiY2hlY2tlZCIsIm9uQ2xvc2UiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJhbmNob3IiLCJQYXBlclByb3BzIiwiZnVsbFdpZHRoIiwibWwiLCJvdmVyZmxvd1kiLCJtYXhIZWlnaHQiLCJfcmVmMjAiLCJfaXRlbSRpdGVtU2VsbGluZ1ByaWMiLCJpbWFnZSIsImFsdCIsIm9iamVjdEZpdCIsImd1dHRlckJvdHRvbSIsImNvdW50IiwicGFnZSIsIm9uQ3JlYXRlT3B0aW9uIiwiQXZhdGFyIiwic3JjIiwic2V0U3JjIiwiZmV0Y2hJbWFnZSIsImxlbmd0aCIsInN0YXJ0c1dpdGgiLCJidWZmZXIiLCJVaW50OEFycmF5IiwiYmxvYiIsIkJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVhZEFzRGF0YVVSTCIsImVyciIsImJvcmRlciIsIk91dGxldCIsIk5hdkxpbmsiLCJMaW5rIiwidXNlTG9jYXRpb24iLCJEYXNoYm9hcmRJY29uIiwiUGVybUlkZW50aXR5SWNvbiIsIkxpc3RBbHRJY29uIiwiRGVzY3JpcHRpb25JY29uIiwiUmVjZWlwdEljb24iLCJNb3ZpbmdJY29uIiwiU2V0dGluZ3NJY29uIiwiSW5zZXJ0RHJpdmVGaWxlSWNvbiIsIlJlc3RvcmVQYWdlSWNvbiIsIlJlcXVlc3RRdW90ZUljb24iLCJNb25ldGl6YXRpb25Pbkljb24iLCJFbmdpbmVlcmluZ0ljb24iLCJFeHBsaWNpdCIsIlNob3BwaW5nQmFnT3V0bGluZWQiLCJSb29tUHJlZmVyZW5jZXNJY29uIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJtYWtlU3R5bGVzIiwiUGF5bWVudEljb24iLCJNb3JlVmVydEljb24iLCJwcmltYXJ5IiwiRGV4aWUiLCJ2ZXJzaW9uIiwic3RvcmVzIiwic3VwcGxpZXJTY2hlbWEiLCJpdGVtU2NoZW1hVmlldyIsImRhaWx5RXhwZW5zZVNjaGVtYSIsImRhaWx5RXhwZW5zZVZpZXdTY2hlbWEiLCJoaWRkZW5TY2hlbWEiLCJpdGVtQ29kZVNjaGVtYSIsIml0ZW1Vbml0U2NoZW1hIiwiZGVwYXJ0bWVudFNjaGVtYSIsImludm9pY2VTY2hlbWEiLCJpbnZvaWNlVmlld1NjaGVtYSIsInBvc1NjaGVtYSIsInBheW1lbnRTY2hlbWEiLCJwcm9qZWN0U2NoZW1hIiwicHVyY2hhc2VTY2hlbWEiLCJwdXJjaGFzZVNjaGVtYVZpZXciLCJtYWludGVuYW5jZVNjaGVtYSIsIm1haW50ZW5hbmNlVmlld1NjaGVtYSIsImVtcGxveWVlU2NoZW1hIiwicGF5Um9sbFNjaGVtYSIsInVzZXJBY2NvdW50IiwiZ3JhbnRBY2Nlc3NTY2hlbWEiLCJjYXNoU2NoZW1hIiwicGF5bWVudFJhdGVTY2hlbWEiLCJkYWlseUV4cGVuc2VzQ2F0ZWdvcnlTY2hlbWEiLCJlbXBsb3llZUF0dGVuZGFuY2VTY2hlbWEiLCJpdGVtUHVyY2hhc2VTY2hlbWEiLCJpdGVtUHVyY2hhc2VWaWV3U2NoZW1hIiwiaXRlbVJldHVybiIsIml0ZW1SZXR1cm5WaWV3IiwiaXRlbU91dFNjaGVtYSIsIml0ZW1PdXRWaWV3U2NoZW1hIiwicHVyY2hhc2VPcmRlciIsInB1cmNoYXNlT3JkZXJWaWV3IiwicGxhbmluZ1NjaGVtYSIsInJhdGVSZXR1cm5TY2hlbWEiLCJpdGVtUHVyY2hhc2VDYWNoZSIsIml0ZW1PdXRDYWNoZSIsInBvc0NhY2hlIiwiaXRlbVJldHVybkNhY2hlIiwiaW52b2ljZUNhY2hlIiwiZXN0aW1hdGVDYWNoZSIsImN1c3RvbWVyQ2FjaGUiLCJzdXBwbGllckNhY2hlIiwicHJvamVjdENhY2hlIiwibWFpbnRlbmFuY2VDYWNoZSIsImVtcGxveWVlQ2FjaGUiLCJwYXlyb2xsQ2FjaGUiLCJyYXRlQ2FjaGUiLCJ1c2VyQ2FjaGUiLCJncmFudEFjY2Vzc0NhY2hlIiwiY29tcGFueVByb2ZpbGVDYWNoZSIsInB1cmNoYXNlT3JkZXJDYWNoZSIsInBheW1lbnRDYWNoZSIsImNhc2hDYWNoZSIsImRhaWx5RXhwZW5zZUNhY2hlIiwic3luY01ldGFkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==