"use strict";
exports.id = "src_js_AdminView1_PageView_EstimateView_EstimateConvertToMaintenance_js";
exports.ids = ["src_js_AdminView1_PageView_EstimateView_EstimateConvertToMaintenance_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/EstimateView/EstimateConvertToMaintenance.js"
/*!*********************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EstimateView/EstimateConvertToMaintenance.js ***!
  \*********************************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Refresh.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var _uuidWrapper__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../uuidWrapper */ "./src/js/uuidWrapper.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../../../component/ItemThumbnail */ "./src/js/component/ItemThumbnail.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["children"],
  _excluded5 = ["children"];
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













































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__["default"].tooltip)]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__["default"].tooltip)]: {
      backgroundColor: 'black',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_29__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_30__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_31__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
function EstimateConvertToMaintenance() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_47__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_47__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_56__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_56__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_57__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_57__.setUser)({
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
        return _ref9.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_57__.logOut)());
    navigate('/');
  };
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/create-maintenance");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    serviceDate = _useState2[0],
    setServiceDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    visitDate = _useState4[0],
    setVisitDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    itemDescriptionInfo = _useState6[0],
    setItemDescriptionInfo = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    brand = _useState8[0],
    setBrand = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    model = _useState0[0],
    setModel = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    warranty = _useState10[0],
    setWarranty = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    action = _useState12[0],
    setAction = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Labor Fees'),
    _useState14 = _slicedToArray(_useState13, 2),
    adjustment = _useState14[0],
    setAdjustment = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    adjustmentNumber = _useState16[0],
    setAdjustmentNumber = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    laborQty = _useState18[0],
    setLaborQty = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    laborDiscount = _useState20[0],
    setLaborDiscount = _useState20[1];
  var totalLaborFees = adjustmentNumber * laborQty;
  var totalDiscount = isNaN(totalLaborFees * laborDiscount) ? 0 : parseFloat(totalLaborFees * laborDiscount);
  var laborPercentage = totalDiscount / 100;
  var totalLaborFeesGenerale = parseFloat(totalLaborFees) - parseFloat(laborPercentage);
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    defectDescription = _useState22[0],
    setDefectDescription = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    actionTaken = _useState24[0],
    setActionTaken = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    note = _useState26[0],
    setNote = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    serialNo = _useState28[0],
    setSerialNo = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    items = _useState30[0],
    SetItems = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState32 = _slicedToArray(_useState31, 2),
    subTotal = _useState32[0],
    setSubTotal = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    totalInvoice = _useState34[0],
    setTotalInvoice = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    serviceNumber = _useState36[0],
    setServiceNumber = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    customer = _useState38[0],
    setCustomer = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState40 = _slicedToArray(_useState39, 2),
    customerName = _useState40[0],
    setCustomerName = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState42 = _slicedToArray(_useState41, 2),
    quotationNumber = _useState42[0],
    setQuotationNumber = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState44 = _slicedToArray(_useState43, 2),
    ItemInformation = _useState44[0],
    setItemInformation = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState46 = _slicedToArray(_useState45, 2),
    technicianAssign = _useState46[0],
    setTechnicianAssign = _useState46[1];
  var serviceName = "M-".concat(String(serviceNumber).padStart(6, '0'));
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];

  // Side Shop State
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    sideShopOpen = _useState48[0],
    setSideShopOpen = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState50 = _slicedToArray(_useState49, 2),
    shopItems = _useState50[0],
    setShopItems = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState52 = _slicedToArray(_useState51, 2),
    shopPage = _useState52[0],
    setShopPage = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState54 = _slicedToArray(_useState53, 2),
    shopSearch = _useState54[0],
    setShopSearch = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState56 = _slicedToArray(_useState55, 2),
    shopTotalPages = _useState56[0],
    setShopTotalPages = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    shopLoading = _useState58[0],
    setShopLoading = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState60 = _slicedToArray(_useState59, 2),
    rate = _useState60[0],
    setRate = _useState60[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/get-last-saved-maintenance")), axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/rate")), axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/customer")), axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/employee")), axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/item"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 5),
            resLast = _yield$Promise$all2[0],
            resRate = _yield$Promise$all2[1],
            resCustomer = _yield$Promise$all2[2],
            resEmployee = _yield$Promise$all2[3],
            resItem = _yield$Promise$all2[4];
          if (resLast.data && resLast.data.serviceNumber) {
            var _resLast$data;
            setServiceNumber(parseInt(((_resLast$data = resLast.data) === null || _resLast$data === void 0 ? void 0 : _resLast$data.serviceNumber) || 0) + 1);
          } else {
            setServiceNumber(1);
          }
          if (resRate.data.data && resRate.data.data.length > 0) {
            var _resRate$data;
            setRate(((_resRate$data = resRate.data) === null || _resRate$data === void 0 || (_resRate$data = _resRate$data.data) === null || _resRate$data === void 0 || (_resRate$data = _resRate$data[0]) === null || _resRate$data === void 0 ? void 0 : _resRate$data.rate) || 1);
          }
          setCustomer((resCustomer.data.data || []).reverse());
          setEmployee(resEmployee.data.data || []);
          setItemInformation((resItem.data.data || []).reverse());
        } catch (error) {
          console.error('Error fetching initial data:', error);
        }
      });
      return function fetchData() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchEstimateData = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (id) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/get-estimation/").concat(id));
            var estimate = res.data.data;
            setCustomerName(estimate.customerName || {});
            var eNum = estimate.estimateNumber;
            if (eNum === undefined && estimate.estimateName) {
              var match = String(estimate.estimateName).match(/\d+$/);
              if (match) eNum = parseInt(match[0], 10);
            }
            setQuotationNumber(eNum || "");
            setDefectDescription(estimate.quotationSubject || estimate.estimateSubject || estimate.quotationDefect || estimate.estimateDefect || "");
            setNote(estimate.noteInfo || "");
            SetItems(estimate.items || []);
            setSubTotal(estimate.subTotal || 0);
            setTechnicianAssign(estimate.technicianAssign || '');
          } catch (error) {
            console.error('Error fetching estimate:', error);
          }
        }
      });
      return function fetchEstimateData() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchEstimateData();
  }, [id]);

  // Fetch Shop Items & Rate
  var fetchShop = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      setShopLoading(true);
      try {
        var resRate = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/rate"));
        resRate.data.data.map(row => setRate(row.rate));
        var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/item-shop?page=").concat(shopPage, "&limit=20&search=").concat(encodeURIComponent(shopSearch), "&branchId=").concat(localStorage.getItem('selectedBranch') || 'HQ'));
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
    if (sideShopOpen) {
      // Only fetch if side shop is open
      fetchShop();
    }
  }, [shopPage, shopSearch, sideShopOpen]);
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
  var toggleSideShop = () => {
    setSideShopOpen(!sideShopOpen);
  };
  var handleAddToMaintenance = shopItem => {
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
        totalGenerale: Math.round(currentItem.itemCost * currentItem.itemBuy * 100) / 100 // Assuming itemBuy isn't changing for now
      });
      SetItems(updatedItems);
    } else {
      // Item does not exist, add new
      var newItem = {
        idRow: (0,_uuidWrapper__WEBPACK_IMPORTED_MODULE_45__.v4)(),
        itemName: {
          _id: shopItem._id,
          itemName: shopItem.itemName
        },
        itemDescription: shopItem.itemDescription,
        itemDiscount: 0,
        itemQty: 1,
        itemRate: shopItem.itemSellingPrice,
        itemCost: shopItem.itemCostPrice,
        itemAmount: Math.round(1 * shopItem.itemSellingPrice * 100) / 100,
        totalAmount: Math.round(1 * shopItem.itemSellingPrice * 100) / 100,
        discount: 0,
        percentage: 0,
        itemBuy: 1,
        // Assuming 1 buy qty default
        itemWeight: shopItem.weight,
        totalGenerale: Math.round(shopItem.itemCostPrice * 1 * 100) / 100,
        totalCost: Math.round(1 * shopItem.itemCostPrice * 100) / 100,
        stock: shopItem.itemQuantity,
        itemOut: 0,
        newItemOut: 0
      };
      SetItems([...items, newItem]);
    }
  };
  {/** Customer Info start */}
  var handleChangeCustomer = newValue => {
    var selectedOptions = customer.find(option => option === newValue);
    setCustomerName({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      customerName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.Customer,
      address: (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingAddress) + ' ' + (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingCity),
      phone: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.customerCompanyPhone
    });
  };
  var Create = "".concat(dayjs__WEBPACK_IMPORTED_MODULE_59___default()(Date.now()).format('DD/MM/YYYY'), " ").concat(user.data.userName, " Created M-").concat(String(serviceNumber).padStart(6, '0'));

  // Data already fetched in the combined useEffect above.
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState62 = _slicedToArray(_useState61, 2),
    openAutocomplete1 = _useState62[0],
    setOpenAutocomplete1 = _useState62[1];
  var handleOpenOpenAutocomplete1 = e => {
    e.stopPropagation();
    setOpenAutocomplete1(true);
  };
  var handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  var handleCreateCustomer = newCustomer => {
    setCustomer([...customer, newCustomer]);
  };
  {/** Customer info end */}
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState64 = _slicedToArray(_useState63, 2),
    employee = _useState64[0],
    setEmployee = _useState64[1];
  // Data already fetched in the combined useEffect above.

  var filterEmployee = employee.filter(row => row.department === 'TECHNICIAN' && row.status !== 'Fired' || row.status !== 'Resign' || row.status !== 'Suspended');
  var handleChangeEmployee = newValue => {
    var selectedOptions = employee.find(option => option === newValue);
    setTechnicianAssign(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeeName);
  };
  {/** Item start */}
  // Data already fetched in the combined useEffect above.
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
    var newItem = {
      idRow: (0,_uuidWrapper__WEBPACK_IMPORTED_MODULE_45__.v4)(),
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
    SetItems([...items, newItem]);
  };
  var addItemWhite = () => {
    SetItems([...items, {
      newDescription: "",
      idRow: (0,_uuidWrapper__WEBPACK_IMPORTED_MODULE_45__.v4)(),
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
      idRow: (0,_uuidWrapper__WEBPACK_IMPORTED_MODULE_45__.v4)(),
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
      idRow: (0,_uuidWrapper__WEBPACK_IMPORTED_MODULE_45__.v4)(),
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
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    openAutocomplete2 = _useState66[0],
    setOpenAutocomplete2 = _useState66[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
  };
  var handleCreateItem = newItem => {
    setItemInformation([...ItemInformation, newItem]);
  };
  var handleShowAutocomplete = idRow => {
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: null,
        itemName: null
      }
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
    var result1 = (items || []).reduce((sum, row) => sum + parseFloat((row === null || row === void 0 ? void 0 : row.itemAmount) || 0), 0);
    setSubTotal(result1.toFixed(2));
    var newTotal = Number(result1) + Number(totalLaborFeesGenerale || 0);
    setTotalInvoice(newTotal);
  }, [items, totalLaborFeesGenerale]);
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    openItemUpdate = _useState68[0],
    setOpenItemUpdate = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState70 = _slicedToArray(_useState69, 2),
    idItem = _useState70[0],
    setIdItem = _useState70[1];
  var handleOpenItemUpdate = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (id) {
      setOpenItemUpdate(true);
      setIdItem(id);
    });
    return function handleOpenItemUpdate(_x) {
      return _ref11.apply(this, arguments);
    };
  }();
  var handleCloseUpdateItem1 = () => {
    setOpenItemUpdate(false);
  };
  var handleCloseItemUpdate = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      setOpenItemUpdate(false);
      if (idItem) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/get-item/").concat(idItem));
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
  {/** Item InFO End */}
  {/** Item end */}
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState72 = _slicedToArray(_useState71, 2),
    openBack = _useState72[0],
    setOpenBack = _useState72[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState74 = _slicedToArray(_useState73, 2),
    loading = _useState74[0],
    setLoading = _useState74[1];
  var _useState75 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState76 = _slicedToArray(_useState75, 2),
    loadingOpenModal = _useState76[0],
    setLoadingOpenModal = _useState76[1];
  var _useState77 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState78 = _slicedToArray(_useState77, 2),
    loadingOpenNavigateConvertInvoice = _useState78[0],
    setLoadingOpenNavigateConvertInvoice = _useState78[1];
  var _useState79 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState80 = _slicedToArray(_useState79, 2),
    ErrorOpenModal = _useState80[0],
    setErrorOpenModal = _useState80[1];
  var handleOpen = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    if (adjustmentNumber > 0) {
      setLoadingOpenNavigateConvertInvoice(true);
    } else {
      setLoadingOpenModal(true);
    }
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
  var _useState81 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState82 = _slicedToArray(_useState81, 2),
    idRes = _useState82[0],
    setIdRes = _useState82[1];
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: "".concat(quotationNumber ? "QUO-".concat(String(quotationNumber).padStart(6, '0'), " to ") : '', "M-").concat(String(ReferenceInfoNumber).padStart(6, '0'), " For ").concat(customerName === null || customerName === void 0 ? void 0 : customerName.customerName),
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/create-notification"), _objectSpread(_objectSpread({}, data), {}, {
          branchId: localStorage.getItem("selectedBranch") || "HQ"
        }));
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2, _x3) {
      return _ref13.apply(this, arguments);
    };
  }();
  var handleSubmitUpdateStatus = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* (ReferenceInfo2) {
      var updateData = {
        status: 'Converted',
        ReferenceName: ReferenceInfo2
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/update-estimation/").concat(id), _objectSpread(_objectSpread({}, updateData), {}, {
          branchId: localStorage.getItem("selectedBranch") || "HQ"
        }));
      } catch (error) {
        console.error('Error updating estimation status:', error);
      }
    });
    return function handleSubmitUpdateStatus(_x4) {
      return _ref14.apply(this, arguments);
    };
  }();
  var _useState83 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState84 = _slicedToArray(_useState83, 2),
    saving = _useState84[0],
    setSaving = _useState84[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var status = '';
      if (adjustmentNumber > 0) {
        status = 'Close';
      } else if (adjustmentNumber === 0) {
        status = 'Open';
      }
      var data = {
        _id: (0,_uuidWrapper__WEBPACK_IMPORTED_MODULE_45__.v4)(),
        customerName,
        serviceNumber,
        serviceDate,
        actionTaken,
        visitDate,
        itemDescriptionInfo,
        warranty,
        defectDescription,
        technicianAssign,
        brand,
        model,
        serviceName,
        action,
        serialNo,
        status,
        items,
        adjustmentNumber,
        adjustment,
        totalInvoice,
        subTotal,
        note,
        totalLaborFees,
        laborPercentage,
        totalDiscount,
        laborDiscount,
        laborQty,
        totalLaborFeesGenerale,
        synced: false,
        ReferenceName: id
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].post(apiUrl, data);
        if (res) {
          // Open Loading View
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.serviceNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
          yield handleSubmitUpdateStatus(ReferenceInfo);
          //await db.maintenanceSchema.add({...res.data.data,_id:res.data.data._id, synced: true })
          handleOpen();
          setIdRes(res.data.data._id);
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x5) {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_33__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__["default"], {
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
  }, "Add new Maintenance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_52__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_58__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash1__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_35__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_40__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: addItemWhite
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_40__["default"], {
    className: "btn1",
    style: {
      backgroundColor: 'gray',
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "ITEM LIST",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: toggleSideShop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "btn1",
    style: {
      backgroundColor: '#202a5a',
      fontSize: '40px'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 1,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center'
    }
  }, "Job Card Info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disableClearable: true,
    value: customer.length > 0 && customerName !== null && customerName !== void 0 && customerName._id ? customer.find(c => c._id === customerName._id) || null : null,
    options: customer,
    getOptionLabel: option => option.Customer || "",
    onChange: (e, newValue) => {
      handleChangeCustomer(newValue);
    },
    PaperComponent: _ref16 => {
      var children = _ref16.children,
        other = _objectWithoutProperties(_ref16, _excluded4);
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
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    htmlFor: "serviceNumber"
  }, "Service Order Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    type: "number",
    id: "serviceNumber",
    name: "serviceNumber",
    label: "Service Order Number",
    value: serviceNumber,
    onChange: e => setServiceNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "M-")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_49__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_50__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_48__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_51__.DatePicker, {
    required: true,
    name: "serviceDate",
    label: "Service Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_59___default()(serviceDate),
    onChange: date => setServiceDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_49__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_50__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_48__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_51__.DatePicker, {
    required: true,
    name: "visitDate",
    label: "Visit Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_59___default()(visitDate),
    onChange: date => setVisitDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center'
    }
  }, "Appliance Info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "itemDescription",
    name: "itemDescription",
    label: "Item Description",
    value: itemDescriptionInfo,
    onChange: e => setItemDescriptionInfo(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "brand",
    name: "brand",
    label: "Brand",
    value: brand,
    onChange: e => setBrand(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "model",
    name: "model",
    label: "Model",
    value: model,
    onChange: e => setModel(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "serialNo",
    name: "serialNo",
    label: "Serial No",
    value: serialNo,
    onChange: e => setSerialNo(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "defectDescription",
    name: "defectDescription",
    label: "Defect Description",
    value: defectDescription,
    onChange: e => setDefectDescription(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "warranty",
    name: "warranty",
    label: "Warranty Status",
    value: warranty,
    onChange: e => setWarranty(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center'
    }
  }, "Technician Assign")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disableClearable: true,
    options: filterEmployee,
    getOptionLabel: option => option.employeeName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], props, option.employeeName),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, params, {
      label: "Technician",
      required: true
    })),
    onChange: (e, newValue) => handleChangeEmployee(newValue ? newValue : ''),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center'
    }
  }, "Action Taken"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "action"
  }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    required: true,
    id: "action",
    value: action,
    onChange: e => setAction(e.target.value),
    name: "action",
    label: "action",
    defaultValue: "Carry-In"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "Carry-In"
  }, "Carry-In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "In-Home"
  }, "In-Home")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "actionTaken",
    name: "actionTaken",
    label: "Action Taken",
    multiline: true,
    rows: 5,
    value: actionTaken,
    onChange: e => setActionTaken(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "note",
    name: "note",
    label: "Note",
    multiline: true,
    rows: 5,
    value: note,
    onChange: e => setNote(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center'
    }
  }, "Finance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__.Droppable, {
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
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_41__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      required: true,
      name: "newDescription",
      id: "newDescription",
      value: Item.newDescription,
      onChange: e => handleChange(e, i),
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
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_41__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_68__["default"], {
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
        fontSize: '23px'
      }
    }, Item.itemName ? Item.itemName.itemName : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      name: "itemDescription",
      id: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      rows: 3,
      onChange: e => handleChange(e, i),
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_42__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
      disabled: user.data.role !== 'CEO',
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
      type: "number",
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_40__["default"], {
      style: {
        color: '#202a5a'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Blank-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => addItemWhiteRow(i)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_40__["default"], {
      style: {
        color: 'gray'
      }
    })))))));
  })), provided.placeholder)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "adjustment",
    id: "adjustment",
    size: "small",
    value: adjustment,
    onChange: e => setAdjustment(e.target.value),
    sx: {
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "laborQty",
    type: "number",
    size: "small",
    placeholder: "labor QTY",
    name: "laborQty",
    value: laborQty !== undefined ? laborQty : 0,
    onChange: e => setLaborQty(e.target.value),
    sx: {
      width: '150px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "adjustmentNumber",
    size: "small",
    placeholder: "labor fees",
    name: "adjustmentNumber",
    onChange: e => setAdjustmentNumber(e.target.value),
    sx: {
      width: '150px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "laborDiscount",
    id: "laborDiscount",
    size: "small",
    onChange: e => setLaborDiscount(e.target.value),
    placeholder: "Discount",
    sx: {
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalLaborFeesGenerale.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, "Total Generale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_61__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Do you want to stop creating service ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
    onClick: () => navigate('/MaintenanceViewAdmin'),
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
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_55__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_53__["default"], {
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
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    open: loadingOpenNavigateConvertInvoice,
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_55__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_53__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Data Saved successfully,Do you want to convert to an invoice ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " You should convert the service order to invoice when it closed"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDecision('previous'),
    className: "btnCustomer"
  }, "Later")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_46__.NavLink, {
    to: "/MaintenanceConvertToInvoice/".concat(idRes),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer"
  }, "Convert To Invoice"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_55__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_61__["default"], {
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_61__["default"], {
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    open: openItemUpdate,
    onClose: handleCloseUpdateItem1,
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
    onClick: handleCloseUpdateItem1,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_61__["default"], {
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    anchor: "right",
    open: sideShopOpen,
    onClose: toggleSideShop,
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
    onClick: toggleSideShop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_61__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_43__["default"], null))), shopLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_55__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      flexGrow: 1,
      overflowY: 'auto',
      maxHeight: 'calc(100vh - 180px)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 2
  }, shopItems.map(item => {
    var _ref19, _item$itemSellingPric;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      xs: 6,
      key: item._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
      sx: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
      component: "img",
      height: "120",
      image: item.data ? "data:".concat(item.contentType, ";base64,").concat(item.data) : undefined,
      alt: item.itemName,
      sx: {
        objectFit: 'contain',
        padding: '5px'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
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
    }, "FC ", (_ref19 = item.itemSellingPrice * rate) === null || _ref19 === void 0 ? void 0 : _ref19.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "body2",
      color: "primary",
      fontWeight: "bold"
    }, "$ ", (_item$itemSellingPric = item.itemSellingPrice) === null || _item$itemSellingPric === void 0 ? void 0 : _item$itemSellingPric.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "caption",
      display: "block",
      gutterBottom: true
    }, "Stock: ", item.itemQuantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], {
      variant: "contained",
      size: "small",
      fullWidth: true,
      onClick: () => handleAddToMaintenance(item),
      sx: {
        marginTop: '5px'
      }
    }, "Add"))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: "flex",
    justifyContent: "center",
    mt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    count: shopTotalPages,
    page: shopPage,
    onChange: handleShopPageChange,
    size: "small",
    color: "primary"
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EstimateConvertToMaintenance);

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

/***/ "./src/js/uuidWrapper.js"
/*!*******************************!*\
  !*** ./src/js/uuidWrapper.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uuidv4: () => (/* binding */ uuidv4),
/* harmony export */   v4: () => (/* binding */ v4)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");

var v4 = () => {
  var branch = localStorage.getItem('selectedBranch') || 'HQ';
  return "".concat(branch, "_").concat((0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])());
};
var uuidv4 = v4;

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRXN0aW1hdGVWaWV3X0VzdGltYXRlQ29udmVydFRvTWFpbnRlbmFuY2VfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQW1EO0FBQ1E7QUFDbkM7QUFDRTtBQUMwQjtBQUNzQjtBQUN0QjtBQUMyUTtBQUMvUDtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDUTtBQUNBO0FBQ2M7QUFDSTtBQUN4QztBQUN3QjtBQUN1RTtBQUN6QztBQUN0QztBQUN5QjtBQUNBO0FBQ2E7QUFDaEI7QUFDSjtBQUNOO0FBQ1E7QUFDVjtBQUNMO0FBQ1E7QUFDK0I7QUFDdEM7QUFDdEI7QUFDd0M7QUFDcEI7QUFDUTtBQUNJO0FBQ2Y7QUFDaUM7QUFDdEI7QUFDUTtBQUNEO0FBSTdELElBQU1xRixZQUFZLEdBQUdyRSwwREFBTSxDQUFDc0UsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2hEMUYsMERBQUEsQ0FBQ2tDLDhEQUFPLEVBQUEwRCxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU85RCw4REFBYyxDQUFDK0QsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUVILEtBQUssQ0FBQ0ksT0FBTyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7TUFDM0NDLEtB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LE1BQUUsQ0FDSCxDQUFDLGVBQ2Zqc0IsMERBQUEsQ0FBQzhyQixzREFBWTtJQUFDSSxPQUFPLEVBQUM7RUFBTSxDQUFFLENBQ2hCLENBQ2hCLENBQUM7QUFFUDtBQUVBLGlFQUFlL3JCLFlBQVksRTs7Ozs7Ozs7Ozs7Ozs7OztBQzdGYTtBQUVqQyxJQUFNb0QsRUFBRSxHQUFHQSxDQUFBLEtBQU07RUFDcEIsSUFBTTZvQixNQUFNLEdBQUd0aUIsWUFBWSxDQUFDQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxJQUFJO0VBQzdELFVBQUE5RCxNQUFBLENBQVVtbUIsTUFBTSxPQUFBbm1CLE1BQUEsQ0FBSWttQixnREFBVSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVNLElBQU1FLE1BQU0sR0FBRzlvQixFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvRXN0aW1hdGVWaWV3L0VzdGltYXRlQ29udmVydFRvTWFpbnRlbmFuY2UuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvSXRlbVRodW1ibmFpbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy91dWlkV3JhcHBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoMSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2gxJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcyc7XHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgUGFwZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgc3R5bGVkLCBCb3gsIEF1dG9jb21wbGV0ZSwgTW9kYWwsIEJhY2tkcm9wLCBUYWJsZUNvbnRhaW5lciwgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIERpdmlkZXIsIENhcmQsIENhcmRDb250ZW50LCBDYXJkTWVkaWEsIFBhZ2luYXRpb24sIEJ1dHRvbiwgU3dpcGVhYmxlRHJhd2VyLCBEcmF3ZXIgYXMgU2lkZURyYXdlciwgQXZhdGFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkLCBEcmFnSW5kaWNhdG9yUm91bmRlZCwgRWRpdCwgUmVmcmVzaCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJy4uLy4uLy4uL3V1aWRXcmFwcGVyJztcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBDdXN0b21lckZvcm1WaWV3MiBmcm9tICcuLi9DdXN0b21lclZJZXcvQ3VzdG9tZXJGb3JtVmlldzInO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBJdGVtRm9ybVZpZXcyIGZyb20gJy4uL0l0ZW1WaWV3L0l0ZW1Gb3JtVmlldzInO1xyXG5pbXBvcnQgSXRlbVVwZGF0ZVZpZXcyIGZyb20gJy4uL0l0ZW1WaWV3L0l0ZW1VcGRhdGVWaWV3Mic7XHJcbmltcG9ydCBudW1iZXJUb1dvcmRzIGZyb20gJ251bWJlci10by13b3JkcydcclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5pbXBvcnQgSXRlbVRodW1ibmFpbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvSXRlbVRodW1ibmFpbCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IExpZ2h0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQmxhY2tUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlMiA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDgwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIEVzdGltYXRlQ29udmVydFRvTWFpbnRlbmFuY2UoKSB7XHJcbiAgbGV0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBhcGlVcmwgPSBgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1tYWludGVuYW5jZWA7XHJcbiAgY29uc3QgW3NlcnZpY2VEYXRlLCBzZXRTZXJ2aWNlRGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgcmV0dXJuIGRhdGVcclxuICB9KTtcclxuICBjb25zdCBbdmlzaXREYXRlLCBzZXRWaXNpdERhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgY29uc3QgW2l0ZW1EZXNjcmlwdGlvbkluZm8sIHNldEl0ZW1EZXNjcmlwdGlvbkluZm9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2JyYW5kLCBzZXRCcmFuZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbW9kZWwsIHNldE1vZGVsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3YXJyYW50eSwgc2V0V2FycmFudHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FjdGlvbiwgc2V0QWN0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGp1c3RtZW50LCBzZXRBZGp1c3RtZW50XSA9IHVzZVN0YXRlKCdMYWJvciBGZWVzJyk7XHJcbiAgY29uc3QgW2FkanVzdG1lbnROdW1iZXIsIHNldEFkanVzdG1lbnROdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2xhYm9yUXR5LCBzZXRMYWJvclF0eV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbGFib3JEaXNjb3VudCwgc2V0TGFib3JEaXNjb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB0b3RhbExhYm9yRmVlcyA9IGFkanVzdG1lbnROdW1iZXIgKiBsYWJvclF0eVxyXG4gIGNvbnN0IHRvdGFsRGlzY291bnQgPSBpc05hTih0b3RhbExhYm9yRmVlcyAqIGxhYm9yRGlzY291bnQpID8gMCA6IHBhcnNlRmxvYXQodG90YWxMYWJvckZlZXMgKiBsYWJvckRpc2NvdW50KTtcclxuICBjb25zdCBsYWJvclBlcmNlbnRhZ2UgPSB0b3RhbERpc2NvdW50IC8gMTAwO1xyXG4gIGNvbnN0IHRvdGFsTGFib3JGZWVzR2VuZXJhbGUgPSBwYXJzZUZsb2F0KHRvdGFsTGFib3JGZWVzKSAtIHBhcnNlRmxvYXQobGFib3JQZXJjZW50YWdlKTtcclxuICBjb25zdCBbZGVmZWN0RGVzY3JpcHRpb24sIHNldERlZmVjdERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthY3Rpb25UYWtlbiwgc2V0QWN0aW9uVGFrZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlcmlhbE5vLCBzZXRTZXJpYWxOb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXRlbXMsIFNldEl0ZW1zXSA9IHVzZVN0YXRlKFtcclxuICBdKTtcclxuICBjb25zdCBbc3ViVG90YWwsIHNldFN1YlRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbEludm9pY2UsIHNldFRvdGFsSW52b2ljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2VydmljZU51bWJlciwgc2V0U2VydmljZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY3VzdG9tZXIsIHNldEN1c3RvbWVyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3VzdG9tZXJOYW1lLCBzZXRDdXN0b21lck5hbWVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtxdW90YXRpb25OdW1iZXIsIHNldFF1b3RhdGlvbk51bWJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbSXRlbUluZm9ybWF0aW9uLCBzZXRJdGVtSW5mb3JtYXRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0ZWNobmljaWFuQXNzaWduLCBzZXRUZWNobmljaWFuQXNzaWduXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBzZXJ2aWNlTmFtZSA9IGBNLSR7U3RyaW5nKHNlcnZpY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9YDtcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcblxyXG4gIC8vIFNpZGUgU2hvcCBTdGF0ZVxyXG4gIGNvbnN0IFtzaWRlU2hvcE9wZW4sIHNldFNpZGVTaG9wT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3BJdGVtcywgc2V0U2hvcEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2hvcFBhZ2UsIHNldFNob3BQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtzaG9wU2VhcmNoLCBzZXRTaG9wU2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2hvcFRvdGFsUGFnZXMsIHNldFNob3BUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzaG9wTG9hZGluZywgc2V0U2hvcExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW3Jlc0xhc3QsIHJlc1JhdGUsIHJlc0N1c3RvbWVyLCByZXNFbXBsb3llZSwgcmVzSXRlbV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbGFzdC1zYXZlZC1tYWludGVuYW5jZWApLFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcmF0ZWApLFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vY3VzdG9tZXJgKSxcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVlYCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtYClcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc0xhc3QuZGF0YSAmJiByZXNMYXN0LmRhdGEuc2VydmljZU51bWJlcikge1xyXG4gICAgICAgICAgc2V0U2VydmljZU51bWJlcihwYXJzZUludChyZXNMYXN0LmRhdGE/LnNlcnZpY2VOdW1iZXIgfHwgMCkgKyAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0U2VydmljZU51bWJlcigxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXNSYXRlLmRhdGEuZGF0YSAmJiByZXNSYXRlLmRhdGEuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBzZXRSYXRlKHJlc1JhdGUuZGF0YT8uZGF0YT8uWzBdPy5yYXRlIHx8IDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q3VzdG9tZXIoKHJlc0N1c3RvbWVyLmRhdGEuZGF0YSB8fCBbXSkucmV2ZXJzZSgpKTtcclxuICAgICAgICBzZXRFbXBsb3llZShyZXNFbXBsb3llZS5kYXRhLmRhdGEgfHwgW10pO1xyXG4gICAgICAgIHNldEl0ZW1JbmZvcm1hdGlvbigocmVzSXRlbS5kYXRhLmRhdGEgfHwgW10pLnJldmVyc2UoKSk7XHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGluaXRpYWwgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEVzdGltYXRlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lc3RpbWF0aW9uLyR7aWR9YCk7XHJcbiAgICAgICAgICBjb25zdCBlc3RpbWF0ZSA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICBzZXRDdXN0b21lck5hbWUoZXN0aW1hdGUuY3VzdG9tZXJOYW1lIHx8IHt9KTtcclxuICAgICAgICAgIGxldCBlTnVtID0gZXN0aW1hdGUuZXN0aW1hdGVOdW1iZXI7XHJcbiAgICAgICAgICBpZiAoZU51bSA9PT0gdW5kZWZpbmVkICYmIGVzdGltYXRlLmVzdGltYXRlTmFtZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IFN0cmluZyhlc3RpbWF0ZS5lc3RpbWF0ZU5hbWUpLm1hdGNoKC9cXGQrJC8pO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2gpIGVOdW0gPSBwYXJzZUludChtYXRjaFswXSwgMTApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UXVvdGF0aW9uTnVtYmVyKGVOdW0gfHwgXCJcIik7XHJcbiAgICAgICAgICBzZXREZWZlY3REZXNjcmlwdGlvbihlc3RpbWF0ZS5xdW90YXRpb25TdWJqZWN0IHx8IGVzdGltYXRlLmVzdGltYXRlU3ViamVjdCB8fCBlc3RpbWF0ZS5xdW90YXRpb25EZWZlY3QgfHwgZXN0aW1hdGUuZXN0aW1hdGVEZWZlY3QgfHwgXCJcIik7XHJcbiAgICAgICAgICBzZXROb3RlKGVzdGltYXRlLm5vdGVJbmZvIHx8IFwiXCIpO1xyXG4gICAgICAgICAgU2V0SXRlbXMoZXN0aW1hdGUuaXRlbXMgfHwgW10pO1xyXG4gICAgICAgICAgc2V0U3ViVG90YWwoZXN0aW1hdGUuc3ViVG90YWwgfHwgMCk7XHJcbiAgICAgICAgICBzZXRUZWNobmljaWFuQXNzaWduKGVzdGltYXRlLnRlY2huaWNpYW5Bc3NpZ24gfHwgJycpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBlc3RpbWF0ZTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hFc3RpbWF0ZURhdGEoKTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgLy8gRmV0Y2ggU2hvcCBJdGVtcyAmIFJhdGVcclxuICBjb25zdCBmZXRjaFNob3AgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTaG9wTG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc1JhdGUgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9yYXRlYClcclxuICAgICAgcmVzUmF0ZS5kYXRhLmRhdGEubWFwKChyb3cpID0+IHNldFJhdGUocm93LnJhdGUpKVxyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbS1zaG9wP3BhZ2U9JHtzaG9wUGFnZX0mbGltaXQ9MjAmc2VhcmNoPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNob3BTZWFyY2gpfSZicmFuY2hJZD0ke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZEJyYW5jaCcpIHx8ICdIUSd9YClcclxuICAgICAgc2V0U2hvcFRvdGFsUGFnZXMocmVzLmRhdGEudG90YWxQYWdlcylcclxuICAgICAgc2V0U2hvcEl0ZW1zKHJlcy5kYXRhLml0ZW1zLmZpbHRlcigocm93KSA9PiByb3cudHlwZUl0ZW0gPT09IFwiR29vZHNcIikucmV2ZXJzZSgpKVxyXG4gICAgICBzZXRTaG9wTG9hZGluZyhmYWxzZSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICBzZXRTaG9wTG9hZGluZyhmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2lkZVNob3BPcGVuKSB7IC8vIE9ubHkgZmV0Y2ggaWYgc2lkZSBzaG9wIGlzIG9wZW5cclxuICAgICAgZmV0Y2hTaG9wKClcclxuICAgIH1cclxuICB9LCBbc2hvcFBhZ2UsIHNob3BTZWFyY2gsIHNpZGVTaG9wT3Blbl0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlZnJlc2hTaG9wID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvcFNlYXJjaCgnJyk7XHJcbiAgICBzZXRTaG9wUGFnZSgxKTtcclxuICAgIGZldGNoU2hvcCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvcFBhZ2VDaGFuZ2UgPSAoZSwgbmV3UGFnZSkgPT4ge1xyXG4gICAgc2V0U2hvcFBhZ2UobmV3UGFnZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNob3BTZWFyY2hDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvcFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRTaG9wUGFnZSgxKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlU2lkZVNob3AgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlU2hvcE9wZW4oIXNpZGVTaG9wT3Blbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVBZGRUb01haW50ZW5hbmNlID0gKHNob3BJdGVtKSA9PiB7XHJcbiAgICAvLyBDaGVjayBpZiBpdGVtIGFscmVhZHkgZXhpc3RzXHJcbiAgICBjb25zdCBleGlzdGluZ0l0ZW1JbmRleCA9IGl0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaXRlbU5hbWUuX2lkID09PSBzaG9wSXRlbS5faWQpO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0l0ZW1JbmRleCAhPT0gLTEpIHtcclxuICAgICAgLy8gSXRlbSBleGlzdHMsIHVwZGF0ZSBxdWFudGl0eVxyXG4gICAgICBjb25zdCB1cGRhdGVkSXRlbXMgPSBbLi4uaXRlbXNdO1xyXG4gICAgICBjb25zdCBjdXJyZW50SXRlbSA9IHVwZGF0ZWRJdGVtc1tleGlzdGluZ0l0ZW1JbmRleF07XHJcbiAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KGN1cnJlbnRJdGVtLml0ZW1RdHkpICsgMTtcclxuXHJcbiAgICAgIHVwZGF0ZWRJdGVtc1tleGlzdGluZ0l0ZW1JbmRleF0gPSB7XHJcbiAgICAgICAgLi4uY3VycmVudEl0ZW0sXHJcbiAgICAgICAgaXRlbVF0eTogbmV3UXR5LFxyXG4gICAgICAgIGl0ZW1BbW91bnQ6IE1hdGgucm91bmQoKG5ld1F0eSAqIGN1cnJlbnRJdGVtLml0ZW1SYXRlKSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgdG90YWxBbW91bnQ6IE1hdGgucm91bmQoKG5ld1F0eSAqIGN1cnJlbnRJdGVtLml0ZW1SYXRlKSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgZGlzY291bnQ6IE1hdGgucm91bmQoKG5ld1F0eSAqIGN1cnJlbnRJdGVtLml0ZW1SYXRlICogY3VycmVudEl0ZW0uaXRlbURpc2NvdW50KSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgcGVyY2VudGFnZTogKE1hdGgucm91bmQoKG5ld1F0eSAqIGN1cnJlbnRJdGVtLml0ZW1SYXRlICogY3VycmVudEl0ZW0uaXRlbURpc2NvdW50KSAqIDEwMCkgLyAxMDApIC8gMTAwLFxyXG4gICAgICAgIHRvdGFsQ29zdDogTWF0aC5yb3VuZCgobmV3UXR5ICogY3VycmVudEl0ZW0uaXRlbUNvc3QpICogMTAwKSAvIDEwMCxcclxuICAgICAgICB0b3RhbEdlbmVyYWxlOiBNYXRoLnJvdW5kKChjdXJyZW50SXRlbS5pdGVtQ29zdCAqIGN1cnJlbnRJdGVtLml0ZW1CdXkpICogMTAwKSAvIDEwMCwgLy8gQXNzdW1pbmcgaXRlbUJ1eSBpc24ndCBjaGFuZ2luZyBmb3Igbm93XHJcbiAgICAgIH07XHJcbiAgICAgIFNldEl0ZW1zKHVwZGF0ZWRJdGVtcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJdGVtIGRvZXMgbm90IGV4aXN0LCBhZGQgbmV3XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICAgIF9pZDogc2hvcEl0ZW0uX2lkLFxyXG4gICAgICAgICAgaXRlbU5hbWU6IHNob3BJdGVtLml0ZW1OYW1lXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtRGVzY3JpcHRpb246IHNob3BJdGVtLml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgICAgaXRlbVF0eTogMSxcclxuICAgICAgICBpdGVtUmF0ZTogc2hvcEl0ZW0uaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICBpdGVtQ29zdDogc2hvcEl0ZW0uaXRlbUNvc3RQcmljZSxcclxuICAgICAgICBpdGVtQW1vdW50OiBNYXRoLnJvdW5kKCgxICogc2hvcEl0ZW0uaXRlbVNlbGxpbmdQcmljZSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIHRvdGFsQW1vdW50OiBNYXRoLnJvdW5kKCgxICogc2hvcEl0ZW0uaXRlbVNlbGxpbmdQcmljZSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgICAgaXRlbUJ1eTogMSwgLy8gQXNzdW1pbmcgMSBidXkgcXR5IGRlZmF1bHRcclxuICAgICAgICBpdGVtV2VpZ2h0OiBzaG9wSXRlbS53ZWlnaHQsXHJcbiAgICAgICAgdG90YWxHZW5lcmFsZTogTWF0aC5yb3VuZCgoc2hvcEl0ZW0uaXRlbUNvc3RQcmljZSAqIDEpICogMTAwKSAvIDEwMCxcclxuICAgICAgICB0b3RhbENvc3Q6IE1hdGgucm91bmQoKDEgKiBzaG9wSXRlbS5pdGVtQ29zdFByaWNlKSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgc3RvY2s6IHNob3BJdGVtLml0ZW1RdWFudGl0eSxcclxuICAgICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICAgIH1cclxuICAgICAgU2V0SXRlbXMoWy4uLml0ZW1zLCBuZXdJdGVtXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB7LyoqIEN1c3RvbWVyIEluZm8gc3RhcnQgKi8gfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUN1c3RvbWVyID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBjdXN0b21lci5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICBzZXRDdXN0b21lck5hbWUoe1xyXG4gICAgICBfaWQ6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICBjdXN0b21lck5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uQ3VzdG9tZXIsXHJcbiAgICAgIGFkZHJlc3M6IHNlbGVjdGVkT3B0aW9ucz8uYmlsbGluZ0FkZHJlc3MgKyAnICcgKyBzZWxlY3RlZE9wdGlvbnM/LmJpbGxpbmdDaXR5LFxyXG4gICAgICBwaG9uZTogc2VsZWN0ZWRPcHRpb25zPy5jdXN0b21lckNvbXBhbnlQaG9uZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IENyZWF0ZSA9IGAke2RheWpzKERhdGUubm93KCkpLmZvcm1hdCgnREQvTU0vWVlZWScpfSAke3VzZXIuZGF0YS51c2VyTmFtZX0gQ3JlYXRlZCBNLSR7U3RyaW5nKHNlcnZpY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9YDtcclxuXHJcbiAgLy8gRGF0YSBhbHJlYWR5IGZldGNoZWQgaW4gdGhlIGNvbWJpbmVkIHVzZUVmZmVjdCBhYm92ZS5cclxuICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTEsIHNldE9wZW5BdXRvY29tcGxldGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUxID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUxKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUxKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUN1c3RvbWVyID0gKG5ld0N1c3RvbWVyKSA9PiB7XHJcbiAgICBzZXRDdXN0b21lcihbLi4uY3VzdG9tZXIsIG5ld0N1c3RvbWVyXSlcclxuICB9XHJcbiAgey8qKiBDdXN0b21lciBpbmZvIGVuZCAqLyB9XHJcbiAgY29uc3QgW2VtcGxveWVlLCBzZXRFbXBsb3llZV0gPSB1c2VTdGF0ZShbXSlcclxuICAvLyBEYXRhIGFscmVhZHkgZmV0Y2hlZCBpbiB0aGUgY29tYmluZWQgdXNlRWZmZWN0IGFib3ZlLlxyXG5cclxuICBjb25zdCBmaWx0ZXJFbXBsb3llZSA9IGVtcGxveWVlLmZpbHRlcigocm93KSA9PiByb3cuZGVwYXJ0bWVudCA9PT0gJ1RFQ0hOSUNJQU4nICYmIHJvdy5zdGF0dXMgIT09ICdGaXJlZCcgfHwgcm93LnN0YXR1cyAhPT0gJ1Jlc2lnbicgfHwgcm93LnN0YXR1cyAhPT0gJ1N1c3BlbmRlZCcpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUVtcGxveWVlID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBlbXBsb3llZS5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICBzZXRUZWNobmljaWFuQXNzaWduKHNlbGVjdGVkT3B0aW9ucz8uZW1wbG95ZWVOYW1lKVxyXG4gIH1cclxuICB7LyoqIEl0ZW0gc3RhcnQgKi8gfVxyXG4gIC8vIERhdGEgYWxyZWFkeSBmZXRjaGVkIGluIHRoZSBjb21iaW5lZCB1c2VFZmZlY3QgYWJvdmUuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSXRlbSA9IChpZFJvdywgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IG5ld1ZhbHVlXHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93LmlkUm93ID09PSBpZFJvdyA/IHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogc2VsZWN0ZWRPcHRpb25zPy5faWQsXHJcbiAgICAgICAgaXRlbU5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbU5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IHNlbGVjdGVkT3B0aW9ucz8uZGF0YSxcclxuICAgICAgY29udGVudFR5cGU6IHNlbGVjdGVkT3B0aW9ucz8uY29udGVudFR5cGUsXHJcbiAgICAgIGl0ZW1Db3N0OiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogc2VsZWN0ZWRPcHRpb25zPy5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgIGl0ZW1SYXRlOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN0b2NrOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1RdWFudGl0eSxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgaSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLml0ZW1zXTtcclxuICAgIGxpc3RbaV1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtUmF0ZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWyd0b3RhbENvc3QnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1RdHknXSAqIGxpc3RbaV1bJ2l0ZW1Db3N0J10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2Rpc2NvdW50J10gPSBsaXN0W2ldWyd0b3RhbEFtb3VudCddICogbGlzdFtpXVsnaXRlbURpc2NvdW50J107XHJcbiAgICBsaXN0W2ldWydwZXJjZW50YWdlJ10gPSBsaXN0W2ldWydkaXNjb3VudCddIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnaXRlbUFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsndG90YWxBbW91bnQnXSAtIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxHZW5lcmFsZSddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbUNvc3QnXSAqIGxpc3RbaV1bJ2l0ZW1CdXknXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgU2V0SXRlbXMobGlzdCk7XHJcbiAgfVxyXG4gIC8vYWRkSXRlbVxyXG4gIGNvbnN0IGFkZEl0ZW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IFwiXCIsXHJcbiAgICAgICAgaXRlbU5hbWU6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQW1vdW50OiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfVxyXG4gICAgU2V0SXRlbXMoWy4uLml0ZW1zLCBuZXdJdGVtXSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1XaGl0ZSA9ICgpID0+IHtcclxuICAgIFNldEl0ZW1zKFsuLi5pdGVtcywge1xyXG4gICAgICBuZXdEZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH1dKTtcclxuICB9XHJcbiAgY29uc3QgYWRkSXRlbVJvdyA9IChpKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IFwiXCIsXHJcbiAgICAgICAgaXRlbU5hbWU6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlID0gWy4uLml0ZW1zXTtcclxuICAgIHVwZGF0ZS5zcGxpY2UoaSArIDEsIDAsIG5ld0l0ZW0pO1xyXG4gICAgU2V0SXRlbXModXBkYXRlKVxyXG4gIH1cclxuICBjb25zdCBhZGRJdGVtV2hpdGVSb3cgPSAoaSkgPT4ge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgbmV3RGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogXCJcIixcclxuICAgICAgICBpdGVtTmFtZTogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgIGl0ZW1Db3N0OiAwLFxyXG4gICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgIGl0ZW1CdXk6IDAsXHJcbiAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgIHRvdGFsR2VuZXJhbGU6IDAsXHJcbiAgICAgIHRvdGFsQ29zdDogMCxcclxuICAgICAgc3RvY2s6IDAsXHJcbiAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGUgPSBbLi4uaXRlbXNdO1xyXG4gICAgdXBkYXRlLnNwbGljZShpICsgMSwgMCwgbmV3SXRlbSk7XHJcbiAgICBTZXRJdGVtcyh1cGRhdGUpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURyYWdFbmQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdJdGVtcyA9IFsuLi5pdGVtc107XHJcbiAgICBjb25zdCBbcmVtb3ZlZF0gPSBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW1vdmVkKTtcclxuICAgIFNldEl0ZW1zKG5ld0l0ZW1zKVxyXG4gIH07XHJcbiAgY29uc3QgZGVsZXRlSXRlbSA9IGlkUm93ID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLmZpbHRlcigoSXRlbSkgPT4gSXRlbS5pZFJvdyAhPT0gaWRSb3cpKTtcclxuICB9O1xyXG4gIGNvbnN0IGZpbHRlckl0ZW1JbmZvcm1hdGlvbiA9IEl0ZW1JbmZvcm1hdGlvbi5maWx0ZXIob3B0aW9uID0+ICFpdGVtcy5maW5kKChyb3cpID0+IG9wdGlvbi5faWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkICYmIG9wdGlvbi50eXBlSXRlbSA9PT0gXCJHb29kc1wiKSlcclxuICB7LyoqIEl0ZW0gSW5GTyAqLyB9XHJcbiAgY29uc3QgW29wZW5BdXRvY29tcGxldGUyLCBzZXRPcGVuQXV0b2NvbXBsZXRlMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDcmVhdGVJdGVtID0gKG5ld0l0ZW0pID0+IHtcclxuICAgIHNldEl0ZW1JbmZvcm1hdGlvbihbLi4uSXRlbUluZm9ybWF0aW9uLCBuZXdJdGVtXSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU2hvd0F1dG9jb21wbGV0ZSA9IChpZFJvdykgPT4ge1xyXG4gICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IG51bGwsXHJcbiAgICAgICAgaXRlbU5hbWU6IG51bGxcclxuICAgICAgfSxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24gPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgaXRlbU5hbWU6ICdlbXB0eSdcclxuICAgICAgfSxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0MSA9IChpdGVtcyB8fCBbXSkucmVkdWNlKChzdW0sIHJvdykgPT4gc3VtICsgcGFyc2VGbG9hdChyb3c/Lml0ZW1BbW91bnQgfHwgMCksIDApXHJcbiAgICBzZXRTdWJUb3RhbChyZXN1bHQxLnRvRml4ZWQoMikpXHJcbiAgICBsZXQgbmV3VG90YWwgPSBOdW1iZXIocmVzdWx0MSkgKyBOdW1iZXIodG90YWxMYWJvckZlZXNHZW5lcmFsZSB8fCAwKVxyXG4gICAgc2V0VG90YWxJbnZvaWNlKG5ld1RvdGFsKVxyXG4gIH0sIFtpdGVtcywgdG90YWxMYWJvckZlZXNHZW5lcmFsZV0pXHJcblxyXG4gIGNvbnN0IFtvcGVuSXRlbVVwZGF0ZSwgc2V0T3Blbkl0ZW1VcGRhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpZEl0ZW0sIHNldElkSXRlbV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuSXRlbVVwZGF0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgc2V0T3Blbkl0ZW1VcGRhdGUodHJ1ZSk7XHJcbiAgICBzZXRJZEl0ZW0oaWQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGVJdGVtMSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5JdGVtVXBkYXRlKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VJdGVtVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0T3Blbkl0ZW1VcGRhdGUoZmFsc2UpO1xyXG4gICAgaWYgKGlkSXRlbSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtLyR7aWRJdGVtfWApXHJcbiAgICAgICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pdGVtTmFtZT8uX2lkID09PSByZXMuZGF0YS5kYXRhLl9pZCA/IHtcclxuICAgICAgICAgIC4uLnJvdyxcclxuICAgICAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgICAgIF9pZDogcmVzLmRhdGEuZGF0YS5faWQsXHJcbiAgICAgICAgICAgIGl0ZW1OYW1lOiByZXMuZGF0YS5kYXRhLml0ZW1OYW1lXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaXRlbURlc2NyaXB0aW9uOiByZXMuZGF0YS5kYXRhLml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgICAgIGl0ZW1Db3N0OiByZXMuZGF0YS5kYXRhLml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgICAgICBpdGVtUmF0ZTogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgc3RvY2s6IHJlcy5kYXRhLmRhdGEuaXRlbVF1YW50aXR5LFxyXG4gICAgICAgICAgdG90YWxBbW91bnQ6IHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgZGlzY291bnQ6IChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50LFxyXG4gICAgICAgICAgcGVyY2VudGFnZTogKChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50KSAvIDEwMCxcclxuICAgICAgICAgIGl0ZW1BbW91bnQ6IChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgLSAoKChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50KSAvIDEwMCksXHJcbiAgICAgICAgICB0b3RhbENvc3Q6IHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgdG90YWxHZW5lcmFsZTogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlICogcm93Lml0ZW1CdXlcclxuICAgICAgICB9IDogcm93KSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHsvKiogSXRlbSBJbkZPIEVuZCAqLyB9XHJcbiAgey8qKiBJdGVtIGVuZCAqLyB9XHJcbiAgY29uc3QgW29wZW5CYWNrLCBzZXRPcGVuQmFja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbkJhY2sodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQmFjayhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5OYXZpZ2F0ZUNvbnZlcnRJbnZvaWNlLCBzZXRMb2FkaW5nT3Blbk5hdmlnYXRlQ29udmVydEludm9pY2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICAgIGlmIChhZGp1c3RtZW50TnVtYmVyID4gMCkge1xyXG4gICAgICBzZXRMb2FkaW5nT3Blbk5hdmlnYXRlQ29udmVydEludm9pY2UodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlY2lzaW9uID0gKG5hdmlnYXRlKSA9PiB7XHJcbiAgICAvL05hdmlnYXRlIEJhc2VkIG9uIHRoIERlY2lzaW9uXHJcbiAgICBpZiAobmF2aWdhdGUgPT09ICdwcmV2aW91cycpIHtcclxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0ZSA9PT0gJ3N0YXknKSB7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtpZFJlcywgc2V0SWRSZXNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uID0gYXN5bmMgKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OdW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogUmVmZXJlbmNlSW5mbyxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIENyZWF0ZWQgJyxcclxuICAgICAgcmVhc29uOiBgJHtxdW90YXRpb25OdW1iZXIgPyBgUVVPLSR7U3RyaW5nKHF1b3RhdGlvbk51bWJlcikucGFkU3RhcnQoNiwgJzAnKX0gdG8gYCA6ICcnfU0tJHtTdHJpbmcoUmVmZXJlbmNlSW5mb051bWJlcikucGFkU3RhcnQoNiwgJzAnKX0gRm9yICR7Y3VzdG9tZXJOYW1lPy5jdXN0b21lck5hbWV9YCxcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCB7IC4uLmRhdGEsIGJyYW5jaElkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlbGVjdGVkQnJhbmNoXCIpIHx8IFwiSFFcIiB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdFVwZGF0ZVN0YXR1cyA9IGFzeW5jIChSZWZlcmVuY2VJbmZvMikgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IHtcclxuICAgICAgc3RhdHVzOiAnQ29udmVydGVkJyxcclxuICAgICAgUmVmZXJlbmNlTmFtZTogUmVmZXJlbmNlSW5mbzJcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtZXN0aW1hdGlvbi8ke2lkfWAsIHsgLi4udXBkYXRlRGF0YSwgYnJhbmNoSWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VsZWN0ZWRCcmFuY2hcIikgfHwgXCJIUVwiIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBlc3RpbWF0aW9uIHN0YXR1czonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNhdmluZygndHJ1ZScpXHJcbiAgICBsZXQgc3RhdHVzID0gJydcclxuICAgIGlmIChhZGp1c3RtZW50TnVtYmVyID4gMCkge1xyXG4gICAgICBzdGF0dXMgPSAnQ2xvc2UnXHJcbiAgICB9IGVsc2UgaWYgKGFkanVzdG1lbnROdW1iZXIgPT09IDApIHtcclxuICAgICAgc3RhdHVzID0gJ09wZW4nXHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBfaWQ6IHY0KCksXHJcbiAgICAgIGN1c3RvbWVyTmFtZSwgc2VydmljZU51bWJlciwgc2VydmljZURhdGUsIGFjdGlvblRha2VuLCB2aXNpdERhdGUsIGl0ZW1EZXNjcmlwdGlvbkluZm8sXHJcbiAgICAgIHdhcnJhbnR5LCBkZWZlY3REZXNjcmlwdGlvbiwgdGVjaG5pY2lhbkFzc2lnbiwgYnJhbmQsIG1vZGVsLCBzZXJ2aWNlTmFtZSwgYWN0aW9uLFxyXG4gICAgICBzZXJpYWxObywgc3RhdHVzLCBpdGVtcywgYWRqdXN0bWVudE51bWJlciwgYWRqdXN0bWVudCwgdG90YWxJbnZvaWNlLCBzdWJUb3RhbCxcclxuICAgICAgbm90ZSwgdG90YWxMYWJvckZlZXMsIGxhYm9yUGVyY2VudGFnZSwgdG90YWxEaXNjb3VudCwgbGFib3JEaXNjb3VudCwgbGFib3JRdHksIHRvdGFsTGFib3JGZWVzR2VuZXJhbGUsIHN5bmNlZDogZmFsc2UsXHJcbiAgICAgIFJlZmVyZW5jZU5hbWU6IGlkXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChhcGlVcmwsIGRhdGEpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgLy8gT3BlbiBMb2FkaW5nIFZpZXdcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvID0gcmVzLmRhdGEuZGF0YS5faWRcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvTnVtYmVyID0gcmVzLmRhdGEuZGF0YS5zZXJ2aWNlTnVtYmVyXHJcbiAgICAgICAgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OdW1iZXIpXHJcbiAgICAgICAgYXdhaXQgaGFuZGxlU3VibWl0VXBkYXRlU3RhdHVzKFJlZmVyZW5jZUluZm8pO1xyXG4gICAgICAgIC8vYXdhaXQgZGIubWFpbnRlbmFuY2VTY2hlbWEuYWRkKHsuLi5yZXMuZGF0YS5kYXRhLF9pZDpyZXMuZGF0YS5kYXRhLl9pZCwgc3luY2VkOiB0cnVlIH0pXHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICAgIHNldElkUmVzKHJlcy5kYXRhLmRhdGEuX2lkKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBzZXRTYXZpbmcoJycpXHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGQgbmV3IE1haW50ZW5hbmNlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoMSAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogNCB9fSA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6IDEsIGZsb2F0OiAncmlnaHQnLCByaWdodDogJy01cHgnLCB0b3A6ICc0MDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkIGNsYXNzTmFtZT0nYnRuMScgc3R5bGU9e3sgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW1XaGl0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JywgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJJVEVNIExJU1RcIiBwbGFjZW1lbnQ9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaWRlU2hvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT0nYnRuMScgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsIGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsxfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+Sm9iIENhcmQgSW5mbzwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cclxuICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXIubGVuZ3RoID4gMCAmJiBjdXN0b21lck5hbWU/Ll9pZCA/IGN1c3RvbWVyLmZpbmQoYyA9PiBjLl9pZCA9PT0gY3VzdG9tZXJOYW1lLl9pZCkgfHwgbnVsbCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjdXN0b21lcn1cclxuICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uQ3VzdG9tZXIgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlQ3VzdG9tZXIobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgbGVmdDogJzAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMShlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNycgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREIE5FVyBDVVNUT01FUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiQ3VzdG9tZXIgTmFtZVwiIHJlcXVpcmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwic2VydmljZU51bWJlclwiPlNlcnZpY2UgT3JkZXIgTnVtYmVyPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nc2VydmljZU51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc2VydmljZU51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NlcnZpY2UgT3JkZXIgTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VydmljZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZXJ2aWNlTnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+TS08L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzZXJ2aWNlRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU2VydmljZSBEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhzZXJ2aWNlRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRTZXJ2aWNlRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd2aXNpdERhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1Zpc2l0IERhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKHZpc2l0RGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRWaXNpdERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+QXBwbGlhbmNlIEluZm88L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdpdGVtRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSXRlbSBEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtRGVzY3JpcHRpb25JbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtRGVzY3JpcHRpb25JbmZvKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2JyYW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYnJhbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQnJhbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJyYW5kKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J21vZGVsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbW9kZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTW9kZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1vZGVsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J3NlcmlhbE5vJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc2VyaWFsTm8nXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU2VyaWFsIE5vJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlcmlhbE5vfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZXJpYWxObyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZGVmZWN0RGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZWZlY3REZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEZWZlY3QgRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVmZWN0RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlZmVjdERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J3dhcnJhbnR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nd2FycmFudHknXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nV2FycmFudHkgU3RhdHVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dhcnJhbnR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRXYXJyYW50eShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlRlY2huaWNpYW4gQXNzaWduPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtmaWx0ZXJFbXBsb3llZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uZW1wbG95ZWVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfT57b3B0aW9uLmVtcGxveWVlTmFtZX08L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJUZWNobmljaWFuXCIgcmVxdWlyZWQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VFbXBsb3llZShuZXdWYWx1ZSA/IG5ld1ZhbHVlIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5BY3Rpb24gVGFrZW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImFjdGlvblwiPkFjdGlvbjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFjdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkNhcnJ5LUluXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiQ2FycnktSW5cIj5DYXJyeS1JbjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkluLUhvbWVcIj5Jbi1Ib21lPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2FjdGlvblRha2VuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYWN0aW9uVGFrZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQWN0aW9uIFRha2VuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjdGlvblRha2VufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBY3Rpb25UYWtlbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdub3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdOb3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5vdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5GaW5hbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICctMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0b2NrLUE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EaXNjb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BbW91bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkcm9wcGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e0l0ZW0uaWRSb3d9IGRyYWdnYWJsZUlkPXtgZHJvcHBhYmxlJHtJdGVtLmlkUm93fWB9IGluZGV4PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+PERyYWdJbmRpY2F0b3JSb3VuZGVkIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs1fT48VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25ld0Rlc2NyaXB0aW9uJyBpZD0nbmV3RGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLm5ld0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnMTVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSWQ9e0l0ZW0uaXRlbU5hbWU/Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbERhdGE9e0l0ZW0uZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFR5cGU9e0l0ZW0uY29udGVudFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBoaWRkZW49e0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID09PSAnZW1wdHknIDogJyd9IHN4PXt7IGZvbnRTaXplOiAnMjNweCcgfX0+e0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lIDogJyd9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURlc2NyaXB0aW9uJyBpZD0naXRlbURlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICczNTBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93QXV0b2NvbXBsZXRlKEl0ZW0uaWRSb3cpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5faWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJFZGl0XCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3Blbkl0ZW1VcGRhdGUoSXRlbS5pdGVtTmFtZS5faWQpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVySXRlbUluZm9ybWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2YyZjJmMicgfX0+e29wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9IHsuLi5wYXJhbXN9IHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9eyhvcHRpb25zLCB7IGlucHV0VmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbUJyYW5kLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VJdGVtKEl0ZW0uaWRSb3csIG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNDcwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbihJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdG9jaycgaWQ9J3N0b2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLnN0b2NrfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUXR5JyBpZD0naXRlbVF0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVJhdGUnIGlkPSdpdGVtUmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUmF0ZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURpc2NvdW50JyBpZD0naXRlbURpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMSB0byA1ICUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD0nYW1vdW50VG90YWxJbnZvaWNlJz57SXRlbS5pdGVtQW1vdW50LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiTmV3LVJvd1wiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gYWRkSXRlbVJvdyhpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJCbGFuay1Sb3dcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW1XaGl0ZVJvdyhpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2FkanVzdG1lbnQnIGlkPSdhZGp1c3RtZW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGp1c3RtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZGp1c3RtZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nbGFib3JRdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2xhYm9yIFFUWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2xhYm9yUXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhYm9yUXR5ICE9PSB1bmRlZmluZWQgPyBsYWJvclF0eSA6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExhYm9yUXR5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2FkanVzdG1lbnROdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2xhYm9yIGZlZXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhZGp1c3RtZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZGp1c3RtZW50TnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbGFib3JEaXNjb3VudCcgaWQ9J2xhYm9yRGlzY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMYWJvckRpc2NvdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kPC9zcGFuPjxzcGFuPnt0b3RhbExhYm9yRmVlc0dlbmVyYWxlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30+VG90YWwgR2VuZXJhbGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4+JDwvc3Bhbj48c3Bhbj57dG90YWxJbnZvaWNlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzYXZpbmcgIT09ICd0cnVlJyA/IDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+IDogPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+U2F2aW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5CYWNrfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlQmFja31cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzeD17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EbyB5b3Ugd2FudCB0byBzdG9wIGNyZWF0aW5nIHNlcnZpY2UgPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlIDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj4gSWYgeW91IHN0b3AgY3JlYXRpbmcgd2l0aG91dCBzYXZpbmcsIGFsbCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvTWFpbnRlbmFuY2VWaWV3QWRtaW4nKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19Pk5vPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3N0YXknKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIEFkZCBOZXdcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNpc2lvbigncHJldmlvdXMnKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTmF2aWdhdGVDb252ZXJ0SW52b2ljZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RGF0YSBTYXZlZCBzdWNjZXNzZnVsbHksRG8geW91IHdhbnQgdG8gY29udmVydCB0byBhbiBpbnZvaWNlID8gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGUgOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiPiBZb3Ugc2hvdWxkIGNvbnZlcnQgdGhlIHNlcnZpY2Ugb3JkZXIgdG8gaW52b2ljZSB3aGVuIGl0IGNsb3NlZDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdwcmV2aW91cycpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgICBMYXRlclxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9NYWludGVuYW5jZUNvbnZlcnRUb0ludm9pY2UvJHtpZFJlc31gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPkNvbnZlcnQgVG8gSW52b2ljZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e0Vycm9yT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENhbmNlbEljb24gc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlNhdmluZyBGYWlsZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkF1dG9jb21wbGV0ZTF9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUyLCB3aWR0aDogODAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzYwMHB4JywgcGFkZGluZzogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgIDxDdXN0b21lckZvcm1WaWV3MiBvbkNyZWF0ZU9wdGlvbj17aGFuZGxlQ3JlYXRlQ3VzdG9tZXJ9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTF9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUyLCB3aWR0aDogODAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzYwMHB4JywgcGFkZGluZzogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgIDxJdGVtRm9ybVZpZXcyIG9uQ3JlYXRlT3B0aW9uPXtoYW5kbGVDcmVhdGVJdGVtfSBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5JdGVtVXBkYXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVXBkYXRlSXRlbTF9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlSXRlbTF9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2MDBweCcsIHBhZGRpbmc6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICA8SXRlbVVwZGF0ZVZpZXcyIG9uQ2xvc2U9e2hhbmRsZUNsb3NlSXRlbVVwZGF0ZX0gaWQ9e2lkSXRlbX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyoqIFNpZGUgU2hvcCBEcmF3ZXIgKi99XHJcbiAgICAgIDxTaWRlRHJhd2VyXHJcbiAgICAgICAgYW5jaG9yPVwicmlnaHRcIlxyXG4gICAgICAgIG9wZW49e3NpZGVTaG9wT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXt0b2dnbGVTaWRlU2hvcH1cclxuICAgICAgICBQYXBlclByb3BzPXt7XHJcbiAgICAgICAgICBzeDogeyB3aWR0aDogJzUwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNScsIHBhZGRpbmc6ICcyMHB4JyB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG1iPXsyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICBTZWxlY3QgSXRlbSBmcm9tIFNob3BcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNpZGVTaG9wfT5cclxuICAgICAgICAgICAgPENsb3NlIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWI9ezJ9PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2ggU2hvcFwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzaG9wU2VhcmNofVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2hvcFNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZWZyZXNoU2hvcH0gY29sb3I9XCJwcmltYXJ5XCIgc3g9e3sgbWw6IDEgfX0+XHJcbiAgICAgICAgICAgIDxSZWZyZXNoIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIHtzaG9wTG9hZGluZyA/IChcclxuICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgb3ZlcmZsb3dZOiAnYXV0bycsIG1heEhlaWdodDogJ2NhbGMoMTAwdmggLSAxODBweCknIH19PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIHtzaG9wSXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5kYXRhID8gYGRhdGE6JHtpdGVtLmNvbnRlbnRUeXBlfTtiYXNlNjQsJHtpdGVtLmRhdGF9YCA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLml0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBvYmplY3RGaXQ6ICdjb250YWluJywgcGFkZGluZzogJzVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZmxleEdyb3c6IDEsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLml0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBGQyB7KGl0ZW0uaXRlbVNlbGxpbmdQcmljZSAqIHJhdGUpPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJwcmltYXJ5XCIgZm9udFdlaWdodD1cImJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAkIHtpdGVtLml0ZW1TZWxsaW5nUHJpY2U/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGRpc3BsYXk9XCJibG9ja1wiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9jazoge2l0ZW0uaXRlbVF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvTWFpbnRlbmFuY2UoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbWFyZ2luVG9wOiAnNXB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG10PXsyfT5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgY291bnQ9e3Nob3BUb3RhbFBhZ2VzfVxyXG4gICAgICAgICAgICAgICAgcGFnZT17c2hvcFBhZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2hvcFBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2lkZURyYXdlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXN0aW1hdGVDb252ZXJ0VG9NYWludGVuYW5jZVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TaG9wcGluZ0NhcnRPdXRsaW5lZCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vYXBpQ29uZmlnJztcblxuY29uc3QgSXRlbVRodW1ibmFpbCA9ICh7IGl0ZW1JZCwgaW5pdGlhbERhdGEsIGluaXRpYWxUeXBlIH0pID0+IHtcbiAgY29uc3QgW3NyYywgc2V0U3JjXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hJbWFnZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vIDEuIENoZWNrIGZvciBpbml0aWFsRGF0YSAocGFzc2VkIGZyb20gc2VhcmNoL3Nob3ApXG4gICAgICBpZiAoaW5pdGlhbERhdGEgJiYgaW5pdGlhbFR5cGUgJiYgaW5pdGlhbERhdGEgIT09IFwidW5kZWZpbmVkXCIgJiYgaW5pdGlhbFR5cGUgIT09IFwidW5kZWZpbmVkXCIgJiYgaW5pdGlhbERhdGEgIT09IFwibnVsbFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5pdGlhbERhdGEgPT09ICdzdHJpbmcnICYmIGluaXRpYWxEYXRhLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgYWxyZWFkeSBhIGRhdGEgVVJMXG4gICAgICAgICAgIGlmIChpbml0aWFsRGF0YS5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICAgIHNldFNyYyhpbml0aWFsRGF0YSk7XG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldFNyYyhgZGF0YToke2luaXRpYWxUeXBlfTtiYXNlNjQsJHtpbml0aWFsRGF0YX1gKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbERhdGEuZGF0YSkge1xuICAgICAgICAgICAvLyBIYW5kbGUgYnVmZmVyIG9iamVjdCBpZiBpdCdzIG5vdCBjb252ZXJ0ZWQgdG8gc3RyaW5nIHlldFxuICAgICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgVWludDhBcnJheShpbml0aWFsRGF0YS5kYXRhKTtcbiAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6IGluaXRpYWxUeXBlIH0pO1xuICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gc2V0U3JjKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIDIuIEZhbGxiYWNrIHRvIGZldGNoIGlmIG5vIGluaXRpYWwgZGF0YSBvciBpZiBpdCB3YXMgaW52YWxpZFxuICAgICAgaWYgKCFpdGVtSWQgfHwgaXRlbUlkID09PSBcInVuZGVmaW5lZFwiIHx8IGl0ZW1JZCA9PT0gXCJudWxsXCIpIHtcbiAgICAgICAgc2V0U3JjKG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtLyR7aXRlbUlkfWApO1xuICAgICAgICBpZiAocmVzLmRhdGEuZGF0YSAmJiByZXMuZGF0YS5kYXRhLmRhdGEpIHtcbiAgICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgVWludDhBcnJheShyZXMuZGF0YS5kYXRhLmRhdGEuZGF0YSk7XG4gICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6IHJlcy5kYXRhLmRhdGEuY29udGVudFR5cGUgfSk7XG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gc2V0U3JjKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBvbmxpbmUgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoSW1hZ2UoKTtcbiAgfSwgW2l0ZW1JZCwgaW5pdGlhbERhdGEsIGluaXRpYWxUeXBlXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxBdmF0YXJcbiAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgIHNyYz17c3JjfVxuICAgICAgc3g9e3sgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmMGYwJywgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnIH19XG4gICAgPlxuICAgICAgeyFzcmMgJiYgPFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiBzeD17eyBmb250U2l6ZTogNDAsIGNvbG9yOiAnIzk5OScgfX0gLz59XG4gICAgPC9BdmF0YXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtVGh1bWJuYWlsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Nzcy9TaWRlYmFyTmV3LnNjc3MnXHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBQZXJtSWRlbnRpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVybUlkZW50aXR5JztcclxuaW1wb3J0IExpc3RBbHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTGlzdEFsdCc7XHJcbmltcG9ydCBEZXNjcmlwdGlvbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZXNjcmlwdGlvbic7XHJcbmltcG9ydCBSZWNlaXB0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1JlY2VpcHQnO1xyXG5pbXBvcnQgTW92aW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vdmluZyc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5ncyc7XHJcbmltcG9ydCBJbnNlcnREcml2ZUZpbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW5zZXJ0RHJpdmVGaWxlJztcclxuaW1wb3J0IFJlc3RvcmVQYWdlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jlc3RvcmVQYWdlJztcclxuaW1wb3J0IFJlcXVlc3RRdW90ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXF1ZXN0UXVvdGUnO1xyXG5pbXBvcnQgTW9uZXRpemF0aW9uT25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9uZXRpemF0aW9uT24nO1xyXG5pbXBvcnQgRW5naW5lZXJpbmdJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW5naW5lZXJpbmcnO1xyXG5pbXBvcnQgeyBFeHBsaWNpdCwgU2hvcHBpbmdCYWdPdXRsaW5lZCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUm9vbVByZWZlcmVuY2VzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jvb21QcmVmZXJlbmNlcyc7XHJcbmltcG9ydCB7IExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUGF5bWVudEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QYXltZW50JztcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0JztcclxuZnVuY3Rpb24gU2lkZWJhckRhc2gxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEYXNoYm9hcmRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGFzaGJvYXJkXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxQZXJtSWRlbnRpdHlJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ3VzdG9tZXJcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSAgPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TGlzdEFsdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJTdG9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVxdWVzdFF1b3RlSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlF1b3RhdGlvblwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPERlc2NyaXB0aW9uSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkludm9pY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb25ldGl6YXRpb25Pbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQYXltZW50XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8U2hvcHBpbmdCYWdPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhaWx5IEV4cGVuc2VzXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJvb21QcmVmZXJlbmNlc0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQcm9qZWN0XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVjZWlwdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQdXJjaGFzZXMgUmVxdWVzdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8RW5naW5lZXJpbmdJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTWFpbnRlbmFuY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJNb3JlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckRhc2gxIiwiaW1wb3J0IHsgdjQgYXMgb3JpZ2luYWxWNCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgY29uc3QgdjQgPSAoKSA9PiB7XG4gICAgY29uc3QgYnJhbmNoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdGVkQnJhbmNoJykgfHwgJ0hRJztcbiAgICByZXR1cm4gYCR7YnJhbmNofV8ke29yaWdpbmFsVjQoKX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IHV1aWR2NCA9IHY0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyRGFzaDEiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiRGVsZXRlSWNvbiIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJQYXBlciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJzdHlsZWQiLCJCb3giLCJBdXRvY29tcGxldGUiLCJNb2RhbCIsIkJhY2tkcm9wIiwiVGFibGVDb250YWluZXIiLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJEaXZpZGVyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZE1lZGlhIiwiUGFnaW5hdGlvbiIsIkJ1dHRvbiIsIlN3aXBlYWJsZURyYXdlciIsIkRyYXdlciIsIlNpZGVEcmF3ZXIiLCJBdmF0YXIiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJBZGQiLCJBcnJvd1Vwd2FyZE91dGxpbmVkIiwiRHJhZ0luZGljYXRvclJvdW5kZWQiLCJFZGl0IiwiUmVmcmVzaCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24iLCJ2NCIsIk5hdkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsIkRlbW9Db250YWluZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIkRhdGVQaWNrZXIiLCJBcnJvd0JhY2siLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiTG9hZGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsImRheWpzIiwiQ3VzdG9tZXJGb3JtVmlldzIiLCJDbG9zZSIsIkl0ZW1Gb3JtVmlldzIiLCJJdGVtVXBkYXRlVmlldzIiLCJudW1iZXJUb1dvcmRzIiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJhZ2dhYmxlIiwiRHJvcHBhYmxlIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiSXRlbVRodW1ibmFpbCIsIkxpZ2h0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiQmxhY2tUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJWaWV3VG9vbHRpcCIsIl9yZWY1IiwiX2V4Y2x1ZGVkMyIsIl9yZWY2Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJzdHlsZTIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY3Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIl9yZWY4Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiRXN0aW1hdGVDb252ZXJ0VG9NYWludGVuYW5jZSIsIl91c2VQYXJhbXMiLCJpZCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY5IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJhcGlVcmwiLCJfdXNlU3RhdGUiLCJkYXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlcnZpY2VEYXRlIiwic2V0U2VydmljZURhdGUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInZpc2l0RGF0ZSIsInNldFZpc2l0RGF0ZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXRlbURlc2NyaXB0aW9uSW5mbyIsInNldEl0ZW1EZXNjcmlwdGlvbkluZm8iLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImJyYW5kIiwic2V0QnJhbmQiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsIm1vZGVsIiwic2V0TW9kZWwiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJ3YXJyYW50eSIsInNldFdhcnJhbnR5IiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImFjdGlvbiIsInNldEFjdGlvbiIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJhZGp1c3RtZW50Iiwic2V0QWRqdXN0bWVudCIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJhZGp1c3RtZW50TnVtYmVyIiwic2V0QWRqdXN0bWVudE51bWJlciIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJsYWJvclF0eSIsInNldExhYm9yUXR5IiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsImxhYm9yRGlzY291bnQiLCJzZXRMYWJvckRpc2NvdW50IiwidG90YWxMYWJvckZlZXMiLCJ0b3RhbERpc2NvdW50IiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwibGFib3JQZXJjZW50YWdlIiwidG90YWxMYWJvckZlZXNHZW5lcmFsZSIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJkZWZlY3REZXNjcmlwdGlvbiIsInNldERlZmVjdERlc2NyaXB0aW9uIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImFjdGlvblRha2VuIiwic2V0QWN0aW9uVGFrZW4iLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2Iiwibm90ZSIsInNldE5vdGUiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4Iiwic2VyaWFsTm8iLCJzZXRTZXJpYWxObyIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJpdGVtcyIsIlNldEl0ZW1zIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsInN1YlRvdGFsIiwic2V0U3ViVG90YWwiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwidG90YWxJbnZvaWNlIiwic2V0VG90YWxJbnZvaWNlIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsInNlcnZpY2VOdW1iZXIiLCJzZXRTZXJ2aWNlTnVtYmVyIiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwiY3VzdG9tZXJOYW1lIiwic2V0Q3VzdG9tZXJOYW1lIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsInF1b3RhdGlvbk51bWJlciIsInNldFF1b3RhdGlvbk51bWJlciIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJJdGVtSW5mb3JtYXRpb24iLCJzZXRJdGVtSW5mb3JtYXRpb24iLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2IiwidGVjaG5pY2lhbkFzc2lnbiIsInNldFRlY2huaWNpYW5Bc3NpZ24iLCJzZXJ2aWNlTmFtZSIsIlN0cmluZyIsInBhZFN0YXJ0IiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsInNpZGVTaG9wT3BlbiIsInNldFNpZGVTaG9wT3BlbiIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJzaG9wSXRlbXMiLCJzZXRTaG9wSXRlbXMiLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwic2hvcFBhZ2UiLCJzZXRTaG9wUGFnZSIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJzaG9wU2VhcmNoIiwic2V0U2hvcFNlYXJjaCIsIl91c2VTdGF0ZTU1IiwiX3VzZVN0YXRlNTYiLCJzaG9wVG90YWxQYWdlcyIsInNldFNob3BUb3RhbFBhZ2VzIiwiX3VzZVN0YXRlNTciLCJfdXNlU3RhdGU1OCIsInNob3BMb2FkaW5nIiwic2V0U2hvcExvYWRpbmciLCJfdXNlU3RhdGU1OSIsIl91c2VTdGF0ZTYwIiwicmF0ZSIsInNldFJhdGUiLCJmZXRjaERhdGEiLCJfcmVmMCIsIl95aWVsZCRQcm9taXNlJGFsbCIsIlByb21pc2UiLCJhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwicmVzTGFzdCIsInJlc1JhdGUiLCJyZXNDdXN0b21lciIsInJlc0VtcGxveWVlIiwicmVzSXRlbSIsIl9yZXNMYXN0JGRhdGEiLCJwYXJzZUludCIsImxlbmd0aCIsIl9yZXNSYXRlJGRhdGEiLCJyZXZlcnNlIiwic2V0RW1wbG95ZWUiLCJmZXRjaEVzdGltYXRlRGF0YSIsIl9yZWYxIiwiZXN0aW1hdGUiLCJlTnVtIiwiZXN0aW1hdGVOdW1iZXIiLCJ1bmRlZmluZWQiLCJlc3RpbWF0ZU5hbWUiLCJtYXRjaCIsInF1b3RhdGlvblN1YmplY3QiLCJlc3RpbWF0ZVN1YmplY3QiLCJxdW90YXRpb25EZWZlY3QiLCJlc3RpbWF0ZURlZmVjdCIsIm5vdGVJbmZvIiwiZmV0Y2hTaG9wIiwiX3JlZjEwIiwibWFwIiwicm93IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidG90YWxQYWdlcyIsImZpbHRlciIsInR5cGVJdGVtIiwiaGFuZGxlUmVmcmVzaFNob3AiLCJoYW5kbGVTaG9wUGFnZUNoYW5nZSIsImUiLCJuZXdQYWdlIiwiaGFuZGxlU2hvcFNlYXJjaENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidG9nZ2xlU2lkZVNob3AiLCJoYW5kbGVBZGRUb01haW50ZW5hbmNlIiwic2hvcEl0ZW0iLCJleGlzdGluZ0l0ZW1JbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJpdGVtTmFtZSIsIl9pZCIsInVwZGF0ZWRJdGVtcyIsImN1cnJlbnRJdGVtIiwibmV3UXR5IiwiaXRlbVF0eSIsIml0ZW1BbW91bnQiLCJNYXRoIiwicm91bmQiLCJpdGVtUmF0ZSIsInRvdGFsQW1vdW50IiwiZGlzY291bnQiLCJpdGVtRGlzY291bnQiLCJwZXJjZW50YWdlIiwidG90YWxDb3N0IiwiaXRlbUNvc3QiLCJ0b3RhbEdlbmVyYWxlIiwiaXRlbUJ1eSIsIm5ld0l0ZW0iLCJpZFJvdyIsIml0ZW1EZXNjcmlwdGlvbiIsIml0ZW1TZWxsaW5nUHJpY2UiLCJpdGVtQ29zdFByaWNlIiwiaXRlbVdlaWdodCIsIndlaWdodCIsInN0b2NrIiwiaXRlbVF1YW50aXR5IiwiaXRlbU91dCIsIm5ld0l0ZW1PdXQiLCJoYW5kbGVDaGFuZ2VDdXN0b21lciIsIm5ld1ZhbHVlIiwic2VsZWN0ZWRPcHRpb25zIiwiZmluZCIsIm9wdGlvbiIsIkN1c3RvbWVyIiwiYWRkcmVzcyIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0NpdHkiLCJwaG9uZSIsImN1c3RvbWVyQ29tcGFueVBob25lIiwiQ3JlYXRlIiwibm93IiwiZm9ybWF0IiwiX3VzZVN0YXRlNjEiLCJfdXNlU3RhdGU2MiIsIm9wZW5BdXRvY29tcGxldGUxIiwic2V0T3BlbkF1dG9jb21wbGV0ZTEiLCJoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTEiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxIiwiaGFuZGxlQ3JlYXRlQ3VzdG9tZXIiLCJuZXdDdXN0b21lciIsIl91c2VTdGF0ZTYzIiwiX3VzZVN0YXRlNjQiLCJlbXBsb3llZSIsImZpbHRlckVtcGxveWVlIiwiZGVwYXJ0bWVudCIsInN0YXR1cyIsImhhbmRsZUNoYW5nZUVtcGxveWVlIiwiaGFuZGxlQ2hhbmdlSXRlbSIsImNvbnRlbnRUeXBlIiwiaGFuZGxlQ2hhbmdlIiwiaSIsIl9lJHRhcmdldCIsIm5hbWUiLCJsaXN0IiwiYWRkSXRlbSIsImFkZEl0ZW1XaGl0ZSIsIm5ld0Rlc2NyaXB0aW9uIiwiYWRkSXRlbVJvdyIsInVwZGF0ZSIsInNwbGljZSIsImFkZEl0ZW1XaGl0ZVJvdyIsImhhbmRsZURyYWdFbmQiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsIm5ld0l0ZW1zIiwiX25ld0l0ZW1zJHNwbGljZSIsInNvdXJjZSIsImluZGV4IiwiX25ld0l0ZW1zJHNwbGljZTIiLCJyZW1vdmVkIiwiZGVsZXRlSXRlbSIsIkl0ZW0iLCJmaWx0ZXJJdGVtSW5mb3JtYXRpb24iLCJfcm93JGl0ZW1OYW1lIiwiX3VzZVN0YXRlNjUiLCJfdXNlU3RhdGU2NiIsIm9wZW5BdXRvY29tcGxldGUyIiwic2V0T3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlQ3JlYXRlSXRlbSIsImhhbmRsZVNob3dBdXRvY29tcGxldGUiLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24iLCJyZXN1bHQxIiwicmVkdWNlIiwic3VtIiwidG9GaXhlZCIsIm5ld1RvdGFsIiwiTnVtYmVyIiwiX3VzZVN0YXRlNjciLCJfdXNlU3RhdGU2OCIsIm9wZW5JdGVtVXBkYXRlIiwic2V0T3Blbkl0ZW1VcGRhdGUiLCJfdXNlU3RhdGU2OSIsIl91c2VTdGF0ZTcwIiwiaWRJdGVtIiwic2V0SWRJdGVtIiwiaGFuZGxlT3Blbkl0ZW1VcGRhdGUiLCJfcmVmMTEiLCJfeCIsImhhbmRsZUNsb3NlVXBkYXRlSXRlbTEiLCJoYW5kbGVDbG9zZUl0ZW1VcGRhdGUiLCJfcmVmMTIiLCJfcm93JGl0ZW1OYW1lMiIsIl91c2VTdGF0ZTcxIiwiX3VzZVN0YXRlNzIiLCJvcGVuQmFjayIsInNldE9wZW5CYWNrIiwiaGFuZGxlT3BlbkJhY2siLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlQmFjayIsIl91c2VTdGF0ZTczIiwiX3VzZVN0YXRlNzQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTc1IiwiX3VzZVN0YXRlNzYiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTc3IiwiX3VzZVN0YXRlNzgiLCJsb2FkaW5nT3Blbk5hdmlnYXRlQ29udmVydEludm9pY2UiLCJzZXRMb2FkaW5nT3Blbk5hdmlnYXRlQ29udmVydEludm9pY2UiLCJfdXNlU3RhdGU3OSIsIl91c2VTdGF0ZTgwIiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlQ2xvc2VFcnJvciIsImhhbmRsZURlY2lzaW9uIiwiaGlzdG9yeSIsImJhY2siLCJfdXNlU3RhdGU4MSIsIl91c2VTdGF0ZTgyIiwiaWRSZXMiLCJzZXRJZFJlcyIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxMyIsIlJlZmVyZW5jZUluZm8iLCJSZWZlcmVuY2VJbmZvTnVtYmVyIiwiaWRJbmZvIiwicGVyc29uIiwicmVhc29uIiwiZGF0ZU5vdGlmaWNhdGlvbiIsInBvc3QiLCJicmFuY2hJZCIsImxvZyIsIl94MiIsIl94MyIsImhhbmRsZVN1Ym1pdFVwZGF0ZVN0YXR1cyIsIl9yZWYxNCIsIlJlZmVyZW5jZUluZm8yIiwidXBkYXRlRGF0YSIsIlJlZmVyZW5jZU5hbWUiLCJwdXQiLCJfeDQiLCJfdXNlU3RhdGU4MyIsIl91c2VTdGF0ZTg0Iiwic2F2aW5nIiwic2V0U2F2aW5nIiwiaGFuZGxlU3VibWl0IiwiX3JlZjE1Iiwic3luY2VkIiwiX3g1IiwiX1JlYWN0JHVzZVN0YXRlMyIsIl9SZWFjdCR1c2VTdGF0ZTQiLCJzaWRlQmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZURyYXdlciIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm9uQ2xpY2siLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10Iiwib25TdWJtaXQiLCJmbG9hdCIsInJpZ2h0IiwidGl0bGUiLCJwbGFjZW1lbnQiLCJjb250YWluZXIiLCJwYWRkaW5nIiwieHMiLCJ0ZXh0QWxpZ24iLCJkaXNhYmxlQ2xlYXJhYmxlIiwiYyIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIm9uQ2hhbmdlIiwiUGFwZXJDb21wb25lbnQiLCJfcmVmMTYiLCJjaGlsZHJlbiIsIm90aGVyIiwiX2V4Y2x1ZGVkNCIsIm1hcmdpblRvcCIsImRpc2FibGVkIiwib25Nb3VzZURvd24iLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsImxhYmVsIiwicmVxdWlyZWQiLCJodG1sRm9yIiwidHlwZSIsInN0YXJ0QWRvcm5tZW50IiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwicmVuZGVyT3B0aW9uIiwiZGVmYXVsdFZhbHVlIiwibXVsdGlsaW5lIiwicm93cyIsIm9uRHJhZ0VuZCIsImRyb3BwYWJsZUlkIiwicHJvdmlkZWQiLCJzbmFwc2hvdCIsImRyb3BwYWJsZVByb3BzIiwicmVmIiwiaW5uZXJSZWYiLCJrZXkiLCJkcmFnZ2FibGVJZCIsIl9JdGVtJGl0ZW1OYW1lIiwiZHJhZ2dhYmxlUHJvcHMiLCJGcmFnbWVudCIsImRyYWdIYW5kbGVQcm9wcyIsImNvbFNwYW4iLCJzaXplIiwiY3Vyc29yIiwiZ2FwIiwiaXRlbUlkIiwiaW5pdGlhbERhdGEiLCJpbml0aWFsVHlwZSIsImZsZXhEaXJlY3Rpb24iLCJoaWRkZW4iLCJpdGVtQnJhbmQiLCJvbklucHV0Q2hhbmdlIiwiZXZlbnQiLCJuZXdJbnB1dFZhbHVlIiwiZmlsdGVyT3B0aW9ucyIsIl9yZWYxNyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJfcmVmMTgiLCJfZXhjbHVkZWQ1IiwicGxhY2Vob2xkZXIiLCJyZXBsYWNlIiwib25DbG9zZSIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsInRvIiwib3ZlcmZsb3dZIiwib25DcmVhdGVPcHRpb24iLCJhbmNob3IiLCJQYXBlclByb3BzIiwibWIiLCJmdWxsV2lkdGgiLCJtbCIsIm1heEhlaWdodCIsIl9yZWYxOSIsIl9pdGVtJGl0ZW1TZWxsaW5nUHJpYyIsImltYWdlIiwiYWx0Iiwib2JqZWN0Rml0IiwiZm9udFdlaWdodCIsImd1dHRlckJvdHRvbSIsImNvdW50IiwicGFnZSIsInNyYyIsInNldFNyYyIsImZldGNoSW1hZ2UiLCJzdGFydHNXaXRoIiwiYnVmZmVyIiwiVWludDhBcnJheSIsImJsb2IiLCJCbG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlYWRBc0RhdGFVUkwiLCJlcnIiLCJib3JkZXIiLCJPdXRsZXQiLCJMaW5rIiwidXNlTG9jYXRpb24iLCJEYXNoYm9hcmRJY29uIiwiUGVybUlkZW50aXR5SWNvbiIsIkxpc3RBbHRJY29uIiwiRGVzY3JpcHRpb25JY29uIiwiUmVjZWlwdEljb24iLCJNb3ZpbmdJY29uIiwiU2V0dGluZ3NJY29uIiwiSW5zZXJ0RHJpdmVGaWxlSWNvbiIsIlJlc3RvcmVQYWdlSWNvbiIsIlJlcXVlc3RRdW90ZUljb24iLCJNb25ldGl6YXRpb25Pbkljb24iLCJFbmdpbmVlcmluZ0ljb24iLCJFeHBsaWNpdCIsIlNob3BwaW5nQmFnT3V0bGluZWQiLCJSb29tUHJlZmVyZW5jZXNJY29uIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJtYWtlU3R5bGVzIiwiUGF5bWVudEljb24iLCJNb3JlVmVydEljb24iLCJwcmltYXJ5Iiwib3JpZ2luYWxWNCIsImJyYW5jaCIsInV1aWR2NCJdLCJzb3VyY2VSb290IjoiIn0=