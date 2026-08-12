"use strict";
exports.id = "src_js_AdminView1_PageView_MaintenanceView_MaintenanceFormView_js";
exports.ids = ["src_js_AdminView1_PageView_MaintenanceView_MaintenanceFormView_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/MaintenanceView/MaintenanceFormView.js"
/*!***************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/MaintenanceView/MaintenanceFormView.js ***!
  \***************************************************************************/
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
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
      backgroundColor: 'red',
      color: 'white',
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
      backgroundColor: '#202a5a',
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
function MaintenanceFormView() {
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
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    ItemInformation = _useState42[0],
    setItemInformation = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState44 = _slicedToArray(_useState43, 2),
    technicianAssign = _useState44[0],
    setTechnicianAssign = _useState44[1];
  var serviceName = "M-".concat(String(serviceNumber).padStart(6, '0'));
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];

  // Side Shop State
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    sideShopOpen = _useState46[0],
    setSideShopOpen = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState48 = _slicedToArray(_useState47, 2),
    shopItems = _useState48[0],
    setShopItems = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState50 = _slicedToArray(_useState49, 2),
    shopPage = _useState50[0],
    setShopPage = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState52 = _slicedToArray(_useState51, 2),
    shopSearch = _useState52[0],
    setShopSearch = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState54 = _slicedToArray(_useState53, 2),
    shopTotalPages = _useState54[0],
    setShopTotalPages = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState56 = _slicedToArray(_useState55, 2),
    shopLoading = _useState56[0],
    setShopLoading = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState58 = _slicedToArray(_useState57, 2),
    rate = _useState58[0],
    setRate = _useState58[1];
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
            var _resLast$data, _resLast$data2;
            setServiceNumber(parseInt(((_resLast$data = resLast.data) === null || _resLast$data === void 0 || (_resLast$data = _resLast$data.data) === null || _resLast$data === void 0 ? void 0 : _resLast$data.serviceNumber) || ((_resLast$data2 = resLast.data) === null || _resLast$data2 === void 0 ? void 0 : _resLast$data2.serviceNumber) || 0) + 1);
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

  // Fetch Shop Items & Rate
  var fetchShop = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      setShopLoading(true);
      try {
        var resRate = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/rate"));
        resRate.data.data.map(row => setRate(row.rate));
        var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/item-shop?page=").concat(shopPage, "&limit=20&search=").concat(encodeURIComponent(shopSearch)));
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
        idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_45__["default"])(),
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
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState60 = _slicedToArray(_useState59, 2),
    openAutocomplete1 = _useState60[0],
    setOpenAutocomplete1 = _useState60[1];
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
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState62 = _slicedToArray(_useState61, 2),
    employee = _useState62[0],
    setEmployee = _useState62[1];
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
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_45__["default"])(),
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
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_45__["default"])(),
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
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_45__["default"])(),
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
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_45__["default"])(),
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
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    openItemUpdate = _useState66[0],
    setOpenItemUpdate = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState68 = _slicedToArray(_useState67, 2),
    idItem = _useState68[0],
    setIdItem = _useState68[1];
  var handleOpenItemUpdate = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (id) {
      setOpenItemUpdate(true);
      setIdItem(id);
    });
    return function handleOpenItemUpdate(_x) {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleCloseUpdateItem1 = () => {
    setOpenItemUpdate(false);
  };
  var handleCloseItemUpdate = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
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
      return _ref11.apply(this, arguments);
    };
  }();
  {/** Item InFO End */}
  {/** Item end */}
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState70 = _slicedToArray(_useState69, 2),
    openBack = _useState70[0],
    setOpenBack = _useState70[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
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
    loadingOpenNavigateConvertInvoice = _useState76[0],
    setLoadingOpenNavigateConvertInvoice = _useState76[1];
  var _useState77 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState78 = _slicedToArray(_useState77, 2),
    ErrorOpenModal = _useState78[0],
    setErrorOpenModal = _useState78[1];
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
  var _useState79 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState80 = _slicedToArray(_useState79, 2),
    idRes = _useState80[0],
    setIdRes = _useState80[1];
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: "M-".concat(String(ReferenceInfoNumber).padStart(6, '0'), " For ").concat(customerName.customerName),
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2, _x3) {
      return _ref12.apply(this, arguments);
    };
  }();
  var _useState81 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState82 = _slicedToArray(_useState81, 2),
    saving = _useState82[0],
    setSaving = _useState82[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var status = '';
      if (adjustmentNumber > 0) {
        status = 'Close';
      } else if (adjustmentNumber === 0) {
        status = 'Open';
      }
      var itemsWithoutData = items.map(_ref14 => {
        var data = _ref14.data,
          contentType = _ref14.contentType,
          rest = _objectWithoutProperties(_ref14, _excluded4);
        return rest;
      });
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_45__["default"])(),
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
        items: itemsWithoutData,
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
        synced: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].post(apiUrl, data);
        if (res) {
          // Open Loading View
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.serviceNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
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
    options: customer,
    getOptionLabel: option => option.Customer,
    onChange: (e, newValue) => {
      handleChangeCustomer(newValue);
    },
    PaperComponent: _ref15 => {
      var children = _ref15.children,
        other = _objectWithoutProperties(_ref15, _excluded5);
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
      filterOptions: (options, _ref16) => {
        var inputValue = _ref16.inputValue;
        return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
      },
      onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
      size: "small",
      PaperComponent: _ref17 => {
        var children = _ref17.children,
          other = _objectWithoutProperties(_ref17, _excluded6);
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
    var _ref18, _item$itemSellingPric;
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
      image: "data:".concat(item.contentType, ";base64,").concat(item.data),
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
    }, "FC ", (_ref18 = item.itemSellingPrice * rate) === null || _ref18 === void 0 ? void 0 : _ref18.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaintenanceFormView);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfTWFpbnRlbmFuY2VWaWV3X01haW50ZW5hbmNlRm9ybVZpZXdfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFtRDtBQUNRO0FBQ25DO0FBQ0U7QUFDMEI7QUFDc0I7QUFDdEI7QUFDMlE7QUFDL1A7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDeEM7QUFDd0I7QUFDdUU7QUFDekM7QUFDdEQ7QUFDOEI7QUFDVztBQUNhO0FBQ2hCO0FBQ0o7QUFDTjtBQUNRO0FBQ1Y7QUFDTDtBQUNRO0FBQytCO0FBQ3RDO0FBQ3RCO0FBQ3dDO0FBQ3BCO0FBQ1E7QUFDSTtBQUNmO0FBQ2lDO0FBQ3RCO0FBQ1E7QUFDRDtBQUk3RCxJQUFNb0YsWUFBWSxHQUFHcEUsMERBQU0sQ0FBQ3FFLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNoRHpGLDBEQUFBLENBQUNrQyw4REFBTyxFQUFBeUQsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPN0QsOERBQWMsQ0FBQzhELE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLEtBQUs7TUFDdEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFD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RUFBbUIsQ0FBRSxDQUM3QixDQUFDLGVBQ2pCMXFCLDBEQUFBLENBQUNvcUIsc0RBQWM7SUFBQ2pKLEVBQUUsRUFBRTtNQUFFaGIsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcENuRywwREFBQSxDQUFDcXFCLHNEQUFZO0lBQUNsSixFQUFFLEVBQUU7TUFBRWhiLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDbkcsMERBQUEsQ0FBQ2dxQix1RUFBZSxNQUFFLENBQ04sQ0FBQyxlQUNmaHFCLDBEQUFBLENBQUNzcUIsc0RBQVk7SUFBQ0ksT0FBTyxFQUFDO0VBQWEsQ0FBRSxDQUN2QixDQUFDLGVBQ2pCMXFCLDBEQUFBLENBQUNvcUIsc0RBQWM7SUFBQ2pKLEVBQUUsRUFBRTtNQUFFaGIsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcENuRywwREFBQSxDQUFDcXFCLHNEQUFZO0lBQUNsSixFQUFFLEVBQUU7TUFBRWhiLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDbkcsMERBQUEsQ0FBQ3lxQixxRUFBWSxNQUFFLENBQ0gsQ0FBQyxlQUNmenFCLDBEQUFBLENBQUNzcUIsc0RBQVk7SUFBQ0ksT0FBTyxFQUFDO0VBQU0sQ0FBRSxDQUNoQixDQUNoQixDQUFDO0FBRVA7QUFFQSxpRUFBZXZxQixZQUFZLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvTWFpbnRlbmFuY2VWaWV3L01haW50ZW5hbmNlRm9ybVZpZXcuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvSXRlbVRodW1ibmFpbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaDEgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoMSc7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnO1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgTWVudUl0ZW0sIEdyaWQsIEljb25CdXR0b24sIFBhcGVyLCBUZXh0RmllbGQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIFR5cG9ncmFwaHksIHN0eWxlZCwgQm94LCBBdXRvY29tcGxldGUsIE1vZGFsLCBCYWNrZHJvcCwgVGFibGVDb250YWluZXIsIE91dGxpbmVkSW5wdXQsIElucHV0QWRvcm5tZW50LCBEaXZpZGVyLCBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZE1lZGlhLCBQYWdpbmF0aW9uLCBCdXR0b24sIFN3aXBlYWJsZURyYXdlciwgRHJhd2VyIGFzIFNpZGVEcmF3ZXIsIEF2YXRhciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IEFkZCwgQXJyb3dVcHdhcmRPdXRsaW5lZCwgRHJhZ0luZGljYXRvclJvdW5kZWQsIEVkaXQsIFJlZnJlc2gsIFJlbW92ZUNpcmNsZU91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Nob3BwaW5nQ2FydE91dGxpbmVkJztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgRGVtb0NvbnRhaW5lciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvaW50ZXJuYWxzL2RlbW8nO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvTG9jYWxpemF0aW9uUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBBZGFwdGVyRGF5anMgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0FkYXB0ZXJEYXlqcyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0RhdGVQaWNrZXInO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgQ3VzdG9tZXJGb3JtVmlldzIgZnJvbSAnLi4vQ3VzdG9tZXJWSWV3L0N1c3RvbWVyRm9ybVZpZXcyJztcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgSXRlbUZvcm1WaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtRm9ybVZpZXcyJztcclxuaW1wb3J0IEl0ZW1VcGRhdGVWaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtVXBkYXRlVmlldzInO1xyXG5pbXBvcnQgbnVtYmVyVG9Xb3JkcyBmcm9tICdudW1iZXItdG8td29yZHMnXHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuaW1wb3J0IEl0ZW1UaHVtYm5haWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0l0ZW1UaHVtYm5haWwnO1xyXG5cclxuXHJcblxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgVmlld1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZTIgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA4MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5mdW5jdGlvbiBNYWludGVuYW5jZUZvcm1WaWV3KCkge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBhcGlVcmwgPSBgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1tYWludGVuYW5jZWA7XHJcbiAgY29uc3QgW3NlcnZpY2VEYXRlLCBzZXRTZXJ2aWNlRGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgcmV0dXJuIGRhdGVcclxuICB9KTtcclxuICBjb25zdCBbdmlzaXREYXRlLCBzZXRWaXNpdERhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgY29uc3QgW2l0ZW1EZXNjcmlwdGlvbkluZm8sIHNldEl0ZW1EZXNjcmlwdGlvbkluZm9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2JyYW5kLCBzZXRCcmFuZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbW9kZWwsIHNldE1vZGVsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3YXJyYW50eSwgc2V0V2FycmFudHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FjdGlvbiwgc2V0QWN0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGp1c3RtZW50LCBzZXRBZGp1c3RtZW50XSA9IHVzZVN0YXRlKCdMYWJvciBGZWVzJyk7XHJcbiAgY29uc3QgW2FkanVzdG1lbnROdW1iZXIsIHNldEFkanVzdG1lbnROdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2xhYm9yUXR5LCBzZXRMYWJvclF0eV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbGFib3JEaXNjb3VudCwgc2V0TGFib3JEaXNjb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB0b3RhbExhYm9yRmVlcyA9IGFkanVzdG1lbnROdW1iZXIgKiBsYWJvclF0eVxyXG4gIGNvbnN0IHRvdGFsRGlzY291bnQgPSBpc05hTih0b3RhbExhYm9yRmVlcyAqIGxhYm9yRGlzY291bnQpID8gMCA6IHBhcnNlRmxvYXQodG90YWxMYWJvckZlZXMgKiBsYWJvckRpc2NvdW50KTtcclxuICBjb25zdCBsYWJvclBlcmNlbnRhZ2UgPSB0b3RhbERpc2NvdW50IC8gMTAwO1xyXG4gIGNvbnN0IHRvdGFsTGFib3JGZWVzR2VuZXJhbGUgPSBwYXJzZUZsb2F0KHRvdGFsTGFib3JGZWVzKSAtIHBhcnNlRmxvYXQobGFib3JQZXJjZW50YWdlKTtcclxuICBjb25zdCBbZGVmZWN0RGVzY3JpcHRpb24sIHNldERlZmVjdERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthY3Rpb25UYWtlbiwgc2V0QWN0aW9uVGFrZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlcmlhbE5vLCBzZXRTZXJpYWxOb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXRlbXMsIFNldEl0ZW1zXSA9IHVzZVN0YXRlKFtcclxuICBdKTtcclxuICBjb25zdCBbc3ViVG90YWwsIHNldFN1YlRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbEludm9pY2UsIHNldFRvdGFsSW52b2ljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2VydmljZU51bWJlciwgc2V0U2VydmljZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY3VzdG9tZXIsIHNldEN1c3RvbWVyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3VzdG9tZXJOYW1lLCBzZXRDdXN0b21lck5hbWVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtJdGVtSW5mb3JtYXRpb24sIHNldEl0ZW1JbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RlY2huaWNpYW5Bc3NpZ24sIHNldFRlY2huaWNpYW5Bc3NpZ25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHNlcnZpY2VOYW1lID0gYE0tJHtTdHJpbmcoc2VydmljZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1gO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuXHJcbiAgLy8gU2lkZSBTaG9wIFN0YXRlXHJcbiAgY29uc3QgW3NpZGVTaG9wT3Blbiwgc2V0U2lkZVNob3BPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvcEl0ZW1zLCBzZXRTaG9wSXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzaG9wUGFnZSwgc2V0U2hvcFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3Nob3BTZWFyY2gsIHNldFNob3BTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzaG9wVG90YWxQYWdlcywgc2V0U2hvcFRvdGFsUGFnZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Nob3BMb2FkaW5nLCBzZXRTaG9wTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbcmVzTGFzdCwgcmVzUmF0ZSwgcmVzQ3VzdG9tZXIsIHJlc0VtcGxveWVlLCByZXNJdGVtXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1sYXN0LXNhdmVkLW1haW50ZW5hbmNlYCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9yYXRlYCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9jdXN0b21lcmApLFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZW1wbG95ZWVgKSxcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1gKVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBpZiAocmVzTGFzdC5kYXRhICYmIHJlc0xhc3QuZGF0YS5zZXJ2aWNlTnVtYmVyKSB7XHJcbiAgICAgICAgICBzZXRTZXJ2aWNlTnVtYmVyKChwYXJzZUludChyZXNMYXN0LmRhdGE/LmRhdGE/LnNlcnZpY2VOdW1iZXIgfHwgcmVzTGFzdC5kYXRhPy5zZXJ2aWNlTnVtYmVyIHx8IDApKSArIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRTZXJ2aWNlTnVtYmVyKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc1JhdGUuZGF0YS5kYXRhICYmIHJlc1JhdGUuZGF0YS5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHNldFJhdGUocmVzUmF0ZS5kYXRhPy5kYXRhPy5bMF0/LnJhdGUgfHwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDdXN0b21lcigocmVzQ3VzdG9tZXIuZGF0YS5kYXRhIHx8IFtdKS5yZXZlcnNlKCkpO1xyXG4gICAgICAgIHNldEVtcGxveWVlKHJlc0VtcGxveWVlLmRhdGEuZGF0YSB8fCBbXSk7XHJcbiAgICAgICAgc2V0SXRlbUluZm9ybWF0aW9uKChyZXNJdGVtLmRhdGEuZGF0YSB8fCBbXSkucmV2ZXJzZSgpKTtcclxuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaW5pdGlhbCBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gRmV0Y2ggU2hvcCBJdGVtcyAmIFJhdGVcclxuICBjb25zdCBmZXRjaFNob3AgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTaG9wTG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc1JhdGUgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9yYXRlYClcclxuICAgICAgcmVzUmF0ZS5kYXRhLmRhdGEubWFwKChyb3cpID0+IHNldFJhdGUocm93LnJhdGUpKVxyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbS1zaG9wP3BhZ2U9JHtzaG9wUGFnZX0mbGltaXQ9MjAmc2VhcmNoPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNob3BTZWFyY2gpfWApXHJcbiAgICAgIHNldFNob3BUb3RhbFBhZ2VzKHJlcy5kYXRhLnRvdGFsUGFnZXMpXHJcbiAgICAgIHNldFNob3BJdGVtcyhyZXMuZGF0YS5pdGVtcy5maWx0ZXIoKHJvdykgPT4gcm93LnR5cGVJdGVtID09PSBcIkdvb2RzXCIpLnJldmVyc2UoKSlcclxuICAgICAgc2V0U2hvcExvYWRpbmcoZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgc2V0U2hvcExvYWRpbmcoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNpZGVTaG9wT3BlbikgeyAvLyBPbmx5IGZldGNoIGlmIHNpZGUgc2hvcCBpcyBvcGVuXHJcbiAgICAgIGZldGNoU2hvcCgpXHJcbiAgICB9XHJcbiAgfSwgW3Nob3BQYWdlLCBzaG9wU2VhcmNoLCBzaWRlU2hvcE9wZW5dKVxyXG5cclxuICBjb25zdCBoYW5kbGVSZWZyZXNoU2hvcCA9ICgpID0+IHtcclxuICAgIHNldFNob3BTZWFyY2goJycpO1xyXG4gICAgc2V0U2hvcFBhZ2UoMSk7XHJcbiAgICBmZXRjaFNob3AoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3BQYWdlQ2hhbmdlID0gKGUsIG5ld1BhZ2UpID0+IHtcclxuICAgIHNldFNob3BQYWdlKG5ld1BhZ2UpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG9wU2VhcmNoQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFNob3BTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0U2hvcFBhZ2UoMSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNpZGVTaG9wID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZVNob3BPcGVuKCFzaWRlU2hvcE9wZW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkVG9NYWludGVuYW5jZSA9IChzaG9wSXRlbSkgPT4ge1xyXG4gICAgLy8gQ2hlY2sgaWYgaXRlbSBhbHJlYWR5IGV4aXN0c1xyXG4gICAgY29uc3QgZXhpc3RpbmdJdGVtSW5kZXggPSBpdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLml0ZW1OYW1lLl9pZCA9PT0gc2hvcEl0ZW0uX2lkKTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdJdGVtSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIC8vIEl0ZW0gZXhpc3RzLCB1cGRhdGUgcXVhbnRpdHlcclxuICAgICAgY29uc3QgdXBkYXRlZEl0ZW1zID0gWy4uLml0ZW1zXTtcclxuICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSB1cGRhdGVkSXRlbXNbZXhpc3RpbmdJdGVtSW5kZXhdO1xyXG4gICAgICBjb25zdCBuZXdRdHkgPSBwYXJzZUludChjdXJyZW50SXRlbS5pdGVtUXR5KSArIDE7XHJcblxyXG4gICAgICB1cGRhdGVkSXRlbXNbZXhpc3RpbmdJdGVtSW5kZXhdID0ge1xyXG4gICAgICAgIC4uLmN1cnJlbnRJdGVtLFxyXG4gICAgICAgIGl0ZW1RdHk6IG5ld1F0eSxcclxuICAgICAgICBpdGVtQW1vdW50OiBNYXRoLnJvdW5kKChuZXdRdHkgKiBjdXJyZW50SXRlbS5pdGVtUmF0ZSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIHRvdGFsQW1vdW50OiBNYXRoLnJvdW5kKChuZXdRdHkgKiBjdXJyZW50SXRlbS5pdGVtUmF0ZSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIGRpc2NvdW50OiBNYXRoLnJvdW5kKChuZXdRdHkgKiBjdXJyZW50SXRlbS5pdGVtUmF0ZSAqIGN1cnJlbnRJdGVtLml0ZW1EaXNjb3VudCkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IChNYXRoLnJvdW5kKChuZXdRdHkgKiBjdXJyZW50SXRlbS5pdGVtUmF0ZSAqIGN1cnJlbnRJdGVtLml0ZW1EaXNjb3VudCkgKiAxMDApIC8gMTAwKSAvIDEwMCxcclxuICAgICAgICB0b3RhbENvc3Q6IE1hdGgucm91bmQoKG5ld1F0eSAqIGN1cnJlbnRJdGVtLml0ZW1Db3N0KSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgdG90YWxHZW5lcmFsZTogTWF0aC5yb3VuZCgoY3VycmVudEl0ZW0uaXRlbUNvc3QgKiBjdXJyZW50SXRlbS5pdGVtQnV5KSAqIDEwMCkgLyAxMDAsIC8vIEFzc3VtaW5nIGl0ZW1CdXkgaXNuJ3QgY2hhbmdpbmcgZm9yIG5vd1xyXG4gICAgICB9O1xyXG4gICAgICBTZXRJdGVtcyh1cGRhdGVkSXRlbXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSXRlbSBkb2VzIG5vdCBleGlzdCwgYWRkIG5ld1xyXG4gICAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgICBfaWQ6IHNob3BJdGVtLl9pZCxcclxuICAgICAgICAgIGl0ZW1OYW1lOiBzaG9wSXRlbS5pdGVtTmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uOiBzaG9wSXRlbS5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICAgIGl0ZW1RdHk6IDEsXHJcbiAgICAgICAgaXRlbVJhdGU6IHNob3BJdGVtLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgaXRlbUNvc3Q6IHNob3BJdGVtLml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgICAgaXRlbUFtb3VudDogTWF0aC5yb3VuZCgoMSAqIHNob3BJdGVtLml0ZW1TZWxsaW5nUHJpY2UpICogMTAwKSAvIDEwMCxcclxuICAgICAgICB0b3RhbEFtb3VudDogTWF0aC5yb3VuZCgoMSAqIHNob3BJdGVtLml0ZW1TZWxsaW5nUHJpY2UpICogMTAwKSAvIDEwMCxcclxuICAgICAgICBkaXNjb3VudDogMCxcclxuICAgICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICAgIGl0ZW1CdXk6IDEsIC8vIEFzc3VtaW5nIDEgYnV5IHF0eSBkZWZhdWx0XHJcbiAgICAgICAgaXRlbVdlaWdodDogc2hvcEl0ZW0ud2VpZ2h0LFxyXG4gICAgICAgIHRvdGFsR2VuZXJhbGU6IE1hdGgucm91bmQoKHNob3BJdGVtLml0ZW1Db3N0UHJpY2UgKiAxKSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgdG90YWxDb3N0OiBNYXRoLnJvdW5kKCgxICogc2hvcEl0ZW0uaXRlbUNvc3RQcmljZSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIHN0b2NrOiBzaG9wSXRlbS5pdGVtUXVhbnRpdHksXHJcbiAgICAgICAgaXRlbU91dDogMCxcclxuICAgICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgICB9XHJcbiAgICAgIFNldEl0ZW1zKFsuLi5pdGVtcywgbmV3SXRlbV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgey8qKiBDdXN0b21lciBJbmZvIHN0YXJ0ICovIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDdXN0b21lciA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gY3VzdG9tZXIuZmluZCgob3B0aW9uKSA9PiBvcHRpb24gPT09IG5ld1ZhbHVlKVxyXG4gICAgc2V0Q3VzdG9tZXJOYW1lKHtcclxuICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgY3VzdG9tZXJOYW1lOiBzZWxlY3RlZE9wdGlvbnM/LkN1c3RvbWVyLFxyXG4gICAgICBhZGRyZXNzOiBzZWxlY3RlZE9wdGlvbnM/LmJpbGxpbmdBZGRyZXNzICsgJyAnICsgc2VsZWN0ZWRPcHRpb25zPy5iaWxsaW5nQ2l0eSxcclxuICAgICAgcGhvbmU6IHNlbGVjdGVkT3B0aW9ucz8uY3VzdG9tZXJDb21wYW55UGhvbmVcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBDcmVhdGUgPSBgJHtkYXlqcyhEYXRlLm5vdygpKS5mb3JtYXQoJ0REL01NL1lZWVknKX0gJHt1c2VyLmRhdGEudXNlck5hbWV9IENyZWF0ZWQgTS0ke1N0cmluZyhzZXJ2aWNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfWA7XHJcblxyXG4gIC8vIERhdGEgYWxyZWFkeSBmZXRjaGVkIGluIHRoZSBjb21iaW5lZCB1c2VFZmZlY3QgYWJvdmUuXHJcbiAgY29uc3QgW29wZW5BdXRvY29tcGxldGUxLCBzZXRPcGVuQXV0b2NvbXBsZXRlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTEgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDcmVhdGVDdXN0b21lciA9IChuZXdDdXN0b21lcikgPT4ge1xyXG4gICAgc2V0Q3VzdG9tZXIoWy4uLmN1c3RvbWVyLCBuZXdDdXN0b21lcl0pXHJcbiAgfVxyXG4gIHsvKiogQ3VzdG9tZXIgaW5mbyBlbmQgKi8gfVxyXG4gIGNvbnN0IFtlbXBsb3llZSwgc2V0RW1wbG95ZWVdID0gdXNlU3RhdGUoW10pXHJcbiAgLy8gRGF0YSBhbHJlYWR5IGZldGNoZWQgaW4gdGhlIGNvbWJpbmVkIHVzZUVmZmVjdCBhYm92ZS5cclxuXHJcbiAgY29uc3QgZmlsdGVyRW1wbG95ZWUgPSBlbXBsb3llZS5maWx0ZXIoKHJvdykgPT4gcm93LmRlcGFydG1lbnQgPT09ICdURUNITklDSUFOJyAmJiByb3cuc3RhdHVzICE9PSAnRmlyZWQnIHx8IHJvdy5zdGF0dXMgIT09ICdSZXNpZ24nIHx8IHJvdy5zdGF0dXMgIT09ICdTdXNwZW5kZWQnKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VFbXBsb3llZSA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gZW1wbG95ZWUuZmluZCgob3B0aW9uKSA9PiBvcHRpb24gPT09IG5ld1ZhbHVlKVxyXG4gICAgc2V0VGVjaG5pY2lhbkFzc2lnbihzZWxlY3RlZE9wdGlvbnM/LmVtcGxveWVlTmFtZSlcclxuICB9XHJcbiAgey8qKiBJdGVtIHN0YXJ0ICovIH1cclxuICAvLyBEYXRhIGFscmVhZHkgZmV0Y2hlZCBpbiB0aGUgY29tYmluZWQgdXNlRWZmZWN0IGFib3ZlLlxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUl0ZW0gPSAoaWRSb3csIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBuZXdWYWx1ZVxyXG4gICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1OYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhOiBzZWxlY3RlZE9wdGlvbnM/LmRhdGEsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBzZWxlY3RlZE9wdGlvbnM/LmNvbnRlbnRUeXBlLFxyXG4gICAgICBpdGVtQ29zdDogc2VsZWN0ZWRPcHRpb25zPy5pdGVtQ29zdFByaWNlLFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IHNlbGVjdGVkT3B0aW9ucz8uaXRlbURlc2NyaXB0aW9uLFxyXG4gICAgICBpdGVtUmF0ZTogc2VsZWN0ZWRPcHRpb25zPy5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICBzdG9jazogc2VsZWN0ZWRPcHRpb25zPy5pdGVtUXVhbnRpdHksXHJcbiAgICB9IDogcm93KSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIGkpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pdGVtc107XHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWU7XHJcbiAgICBsaXN0W2ldWyd0b3RhbEFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbVJhdGUnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxDb3N0J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtQ29zdCddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWydkaXNjb3VudCddID0gbGlzdFtpXVsndG90YWxBbW91bnQnXSAqIGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddO1xyXG4gICAgbGlzdFtpXVsncGVyY2VudGFnZSddID0gbGlzdFtpXVsnZGlzY291bnQnXSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2l0ZW1BbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gLSBsaXN0W2ldWydwZXJjZW50YWdlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsR2VuZXJhbGUnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1Db3N0J10gKiBsaXN0W2ldWydpdGVtQnV5J10pICogMTAwKSAvIDEwMDtcclxuICAgIFNldEl0ZW1zKGxpc3QpO1xyXG4gIH1cclxuICAvL2FkZEl0ZW1cclxuICBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH1cclxuICAgIFNldEl0ZW1zKFsuLi5pdGVtcywgbmV3SXRlbV0pO1xyXG4gIH1cclxuICBjb25zdCBhZGRJdGVtV2hpdGUgPSAoKSA9PiB7XHJcbiAgICBTZXRJdGVtcyhbLi4uaXRlbXMsIHtcclxuICAgICAgbmV3RGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogXCJcIixcclxuICAgICAgICBpdGVtTmFtZTogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgIGl0ZW1Db3N0OiAwLFxyXG4gICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgIGl0ZW1CdXk6IDAsXHJcbiAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgIHRvdGFsR2VuZXJhbGU6IDAsXHJcbiAgICAgIHRvdGFsQ29zdDogMCxcclxuICAgICAgc3RvY2s6IDAsXHJcbiAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICB9XSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1Sb3cgPSAoaSkgPT4ge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZSA9IFsuLi5pdGVtc107XHJcbiAgICB1cGRhdGUuc3BsaWNlKGkgKyAxLCAwLCBuZXdJdGVtKTtcclxuICAgIFNldEl0ZW1zKHVwZGF0ZSlcclxuICB9XHJcbiAgY29uc3QgYWRkSXRlbVdoaXRlUm93ID0gKGkpID0+IHtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgIG5ld0Rlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IFwiXCIsXHJcbiAgICAgICAgaXRlbU5hbWU6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQW1vdW50OiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlID0gWy4uLml0ZW1zXTtcclxuICAgIHVwZGF0ZS5zcGxpY2UoaSArIDEsIDAsIG5ld0l0ZW0pO1xyXG4gICAgU2V0SXRlbXModXBkYXRlKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3SXRlbXMgPSBbLi4uaXRlbXNdO1xyXG4gICAgY29uc3QgW3JlbW92ZWRdID0gbmV3SXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xyXG4gICAgbmV3SXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVtb3ZlZCk7XHJcbiAgICBTZXRJdGVtcyhuZXdJdGVtcylcclxuICB9O1xyXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZFJvdyA9PiB7XHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5maWx0ZXIoKEl0ZW0pID0+IEl0ZW0uaWRSb3cgIT09IGlkUm93KSk7XHJcbiAgfTtcclxuICBjb25zdCBmaWx0ZXJJdGVtSW5mb3JtYXRpb24gPSBJdGVtSW5mb3JtYXRpb24uZmlsdGVyKG9wdGlvbiA9PiAhaXRlbXMuZmluZCgocm93KSA9PiBvcHRpb24uX2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCAmJiBvcHRpb24udHlwZUl0ZW0gPT09IFwiR29vZHNcIikpXHJcbiAgey8qKiBJdGVtIEluRk8gKi8gfVxyXG4gIGNvbnN0IFtvcGVuQXV0b2NvbXBsZXRlMiwgc2V0T3BlbkF1dG9jb21wbGV0ZTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlSXRlbSA9IChuZXdJdGVtKSA9PiB7XHJcbiAgICBzZXRJdGVtSW5mb3JtYXRpb24oWy4uLkl0ZW1JbmZvcm1hdGlvbiwgbmV3SXRlbV0pXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGUgPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBudWxsLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICB9IDogcm93KSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU2hvd0F1dG9jb21wbGV0ZURlc2NyaXB0aW9uID0gKGlkUm93KSA9PiB7XHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93LmlkUm93ID09PSBpZFJvdyA/IHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIGl0ZW1OYW1lOiAnZW1wdHknXHJcbiAgICAgIH0sXHJcbiAgICB9IDogcm93KSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdDEgPSAoaXRlbXMgfHwgW10pLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHBhcnNlRmxvYXQocm93Py5pdGVtQW1vdW50IHx8IDApLCAwKVxyXG4gICAgc2V0U3ViVG90YWwocmVzdWx0MS50b0ZpeGVkKDIpKVxyXG4gICAgbGV0IG5ld1RvdGFsID0gTnVtYmVyKHJlc3VsdDEpICsgTnVtYmVyKHRvdGFsTGFib3JGZWVzR2VuZXJhbGUgfHwgMClcclxuICAgIHNldFRvdGFsSW52b2ljZShuZXdUb3RhbClcclxuICB9LCBbaXRlbXMsIHRvdGFsTGFib3JGZWVzR2VuZXJhbGVdKVxyXG5cclxuICBjb25zdCBbb3Blbkl0ZW1VcGRhdGUsIHNldE9wZW5JdGVtVXBkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaWRJdGVtLCBzZXRJZEl0ZW1dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbkl0ZW1VcGRhdGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHNldE9wZW5JdGVtVXBkYXRlKHRydWUpO1xyXG4gICAgc2V0SWRJdGVtKGlkKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVXBkYXRlSXRlbTEgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuSXRlbVVwZGF0ZShmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlSXRlbVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldE9wZW5JdGVtVXBkYXRlKGZhbHNlKTtcclxuICAgIGlmIChpZEl0ZW0pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2lkSXRlbX1gKVxyXG4gICAgICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaXRlbU5hbWU/Ll9pZCA9PT0gcmVzLmRhdGEuZGF0YS5faWQgPyB7XHJcbiAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgICAgICBfaWQ6IHJlcy5kYXRhLmRhdGEuX2lkLFxyXG4gICAgICAgICAgICBpdGVtTmFtZTogcmVzLmRhdGEuZGF0YS5pdGVtTmFtZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogcmVzLmRhdGEuZGF0YS5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBpdGVtQ29zdDogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgaXRlbVJhdGU6IHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICAgIHN0b2NrOiByZXMuZGF0YS5kYXRhLml0ZW1RdWFudGl0eSxcclxuICAgICAgICAgIHRvdGFsQW1vdW50OiByb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICAgIGRpc2NvdW50OiAocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCxcclxuICAgICAgICAgIHBlcmNlbnRhZ2U6ICgocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCkgLyAxMDAsXHJcbiAgICAgICAgICBpdGVtQW1vdW50OiAocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpIC0gKCgocm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCkgLyAxMDApLFxyXG4gICAgICAgICAgdG90YWxDb3N0OiByb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSxcclxuICAgICAgICAgIHRvdGFsR2VuZXJhbGU6IHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSAqIHJvdy5pdGVtQnV5XHJcbiAgICAgICAgfSA6IHJvdykpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICB7LyoqIEl0ZW0gSW5GTyBFbmQgKi8gfVxyXG4gIHsvKiogSXRlbSBlbmQgKi8gfVxyXG4gIGNvbnN0IFtvcGVuQmFjaywgc2V0T3BlbkJhY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuQmFjayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5CYWNrKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VCYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkJhY2soZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTmF2aWdhdGVDb252ZXJ0SW52b2ljZSwgc2V0TG9hZGluZ09wZW5OYXZpZ2F0ZUNvbnZlcnRJbnZvaWNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgICBpZiAoYWRqdXN0bWVudE51bWJlciA+IDApIHtcclxuICAgICAgc2V0TG9hZGluZ09wZW5OYXZpZ2F0ZUNvbnZlcnRJbnZvaWNlKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEZWNpc2lvbiA9IChuYXZpZ2F0ZSkgPT4ge1xyXG4gICAgLy9OYXZpZ2F0ZSBCYXNlZCBvbiB0aCBEZWNpc2lvblxyXG4gICAgaWYgKG5hdmlnYXRlID09PSAncHJldmlvdXMnKSB7XHJcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgIH0gZWxzZSBpZiAobmF2aWdhdGUgPT09ICdzdGF5Jykge1xyXG4gICAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbaWRSZXMsIHNldElkUmVzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBDcmVhdGVkICcsXHJcbiAgICAgIHJlYXNvbjogYE0tJHtTdHJpbmcoUmVmZXJlbmNlSW5mb051bWJlcikucGFkU3RhcnQoNiwgJzAnKX0gRm9yICR7Y3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZX1gLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTYXZpbmcoJ3RydWUnKVxyXG4gICAgbGV0IHN0YXR1cyA9ICcnXHJcbiAgICBpZiAoYWRqdXN0bWVudE51bWJlciA+IDApIHtcclxuICAgICAgc3RhdHVzID0gJ0Nsb3NlJ1xyXG4gICAgfSBlbHNlIGlmIChhZGp1c3RtZW50TnVtYmVyID09PSAwKSB7XHJcbiAgICAgIHN0YXR1cyA9ICdPcGVuJ1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXRlbXNXaXRob3V0RGF0YSA9IGl0ZW1zLm1hcCgoeyBkYXRhLCBjb250ZW50VHlwZSwgLi4ucmVzdCB9KSA9PiByZXN0KTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIF9pZDogdjQoKSxcclxuICAgICAgY3VzdG9tZXJOYW1lLCBzZXJ2aWNlTnVtYmVyLCBzZXJ2aWNlRGF0ZSwgYWN0aW9uVGFrZW4sIHZpc2l0RGF0ZSwgaXRlbURlc2NyaXB0aW9uSW5mbyxcclxuICAgICAgd2FycmFudHksIGRlZmVjdERlc2NyaXB0aW9uLCB0ZWNobmljaWFuQXNzaWduLCBicmFuZCwgbW9kZWwsIHNlcnZpY2VOYW1lLCBhY3Rpb24sXHJcbiAgICAgIHNlcmlhbE5vLCBzdGF0dXMsIGl0ZW1zOiBpdGVtc1dpdGhvdXREYXRhLCBhZGp1c3RtZW50TnVtYmVyLCBhZGp1c3RtZW50LCB0b3RhbEludm9pY2UsIHN1YlRvdGFsLFxyXG4gICAgICBub3RlLCB0b3RhbExhYm9yRmVlcywgbGFib3JQZXJjZW50YWdlLCB0b3RhbERpc2NvdW50LCBsYWJvckRpc2NvdW50LCBsYWJvclF0eSwgdG90YWxMYWJvckZlZXNHZW5lcmFsZSwgc3luY2VkOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYXBpVXJsLCBkYXRhKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIC8vIE9wZW4gTG9hZGluZyBWaWV3XHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mbyA9IHJlcy5kYXRhLmRhdGEuX2lkXHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mb051bWJlciA9IHJlcy5kYXRhLmRhdGEuc2VydmljZU51bWJlclxyXG4gICAgICAgIGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbihSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKVxyXG4gICAgICAgIC8vYXdhaXQgZGIubWFpbnRlbmFuY2VTY2hlbWEuYWRkKHsuLi5yZXMuZGF0YS5kYXRhLF9pZDpyZXMuZGF0YS5kYXRhLl9pZCwgc3luY2VkOiB0cnVlIH0pXHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICAgIHNldElkUmVzKHJlcy5kYXRhLmRhdGEuX2lkKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBzZXRTYXZpbmcoJycpXHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGQgbmV3IE1haW50ZW5hbmNlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoMSAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogNCB9fSA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6IDEsIGZsb2F0OiAncmlnaHQnLCByaWdodDogJy01cHgnLCB0b3A6ICc0MDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkIGNsYXNzTmFtZT0nYnRuMScgc3R5bGU9e3sgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW1XaGl0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JywgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJJVEVNIExJU1RcIiBwbGFjZW1lbnQ9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaWRlU2hvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT0nYnRuMScgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsIGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsxfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+Sm9iIENhcmQgSW5mbzwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cclxuICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjdXN0b21lcn1cclxuICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uQ3VzdG9tZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZUN1c3RvbWVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHsgY2hpbGRyZW4sIC4uLm90aGVyIH0pID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTEoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERCBORVcgQ1VTVE9NRVJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkN1c3RvbWVyIE5hbWVcIiByZXF1aXJlZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInNlcnZpY2VOdW1iZXJcIj5TZXJ2aWNlIE9yZGVyIE51bWJlcjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3NlcnZpY2VOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3NlcnZpY2VOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTZXJ2aWNlIE9yZGVyIE51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlcnZpY2VOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VydmljZU51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPk0tPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc2VydmljZURhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NlcnZpY2UgRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoc2VydmljZURhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0U2VydmljZURhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndmlzaXREYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdWaXNpdCBEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyh2aXNpdERhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0VmlzaXREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkFwcGxpYW5jZSBJbmZvPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0naXRlbURlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0l0ZW0gRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbURlc2NyaXB0aW9uSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbURlc2NyaXB0aW9uSW5mbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdicmFuZCdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2JyYW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0JyYW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCcmFuZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdtb2RlbCdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J21vZGVsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J01vZGVsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNb2RlbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZXJpYWxObydcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3NlcmlhbE5vJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NlcmlhbCBObydcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXJpYWxOb31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VyaWFsTm8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2RlZmVjdERlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVmZWN0RGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGVmZWN0IERlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RlZmVjdERlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZWZlY3REZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSd3YXJyYW50eSdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3dhcnJhbnR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1dhcnJhbnR5IFN0YXR1cydcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3YXJyYW50eX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0V2FycmFudHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5UZWNobmljaWFuIEFzc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVyRW1wbG95ZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmVtcGxveWVlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30+e29wdGlvbi5lbXBsb3llZU5hbWV9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiVGVjaG5pY2lhblwiIHJlcXVpcmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlRW1wbG95ZWUobmV3VmFsdWUgPyBuZXdWYWx1ZSA6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+QWN0aW9uIFRha2VuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJhY3Rpb25cIj5BY3Rpb248L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBY3Rpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJhY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJDYXJyeS1JblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkNhcnJ5LUluXCI+Q2FycnktSW48L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJJbi1Ib21lXCI+SW4tSG9tZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdhY3Rpb25UYWtlbidcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2FjdGlvblRha2VuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FjdGlvbiBUYWtlbidcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17NX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3Rpb25UYWtlbn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWN0aW9uVGFrZW4oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17NX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+RmluYW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSW5mbzEwJyBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnLTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdG9jay1BPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGlzY291bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZHJvcHBhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtJdGVtLmlkUm93fSBkcmFnZ2FibGVJZD17YGRyb3BwYWJsZSR7SXRlbS5pZFJvd31gfSBpbmRleD17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NX0+PFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduZXdEZXNjcmlwdGlvbicgaWQ9J25ld0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5uZXdEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGhlaWdodDogJzEwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzE1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UaHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkPXtJdGVtLml0ZW1OYW1lPy5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxEYXRhPXtJdGVtLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUeXBlPXtJdGVtLmNvbnRlbnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaGlkZGVuPXtJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JyA6ICcnfSBzeD17eyBmb250U2l6ZTogJzIzcHgnIH19PntJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA6ICcnfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EZXNjcmlwdGlvbicgaWQ9J2l0ZW1EZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMzUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWUuX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiRWRpdFwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5JdGVtVXBkYXRlKEl0ZW0uaXRlbU5hbWUuX2lkKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdCBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlckl0ZW1JbmZvcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLml0ZW1OYW1lICsgJy8nICsgb3B0aW9uLml0ZW1CcmFuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNmMmYyZjInIH19PntvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fSB7Li4ucGFyYW1zfSByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUobmV3SW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucywgeyBpbnB1dFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1CcmFuZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbURlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlSXRlbShJdGVtLmlkUm93LCBuZXdWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHsgY2hpbGRyZW4sIC4uLm90aGVyIH0pID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5vdGhlcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBsZWZ0OiAnMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyKGUpfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30gb25Nb3VzZURvd249eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI3JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREIE5FVyBJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzQ3MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24oSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RvY2snIGlkPSdzdG9jaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5zdG9ja31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVF0eScgaWQ9J2l0ZW1RdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1SYXRlJyBpZD0naXRlbVJhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVJhdGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EaXNjb3VudCcgaWQ9J2l0ZW1EaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzEgdG8gNSAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9J2Ftb3VudFRvdGFsSW52b2ljZSc+e0l0ZW0uaXRlbUFtb3VudC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIk5ldy1Sb3dcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW1Sb3coaSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQmxhbmstUm93XCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtV2hpdGVSb3coaSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhZGp1c3RtZW50JyBpZD0nYWRqdXN0bWVudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRqdXN0bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRqdXN0bWVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2xhYm9yUXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdsYWJvciBRVFknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdsYWJvclF0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYWJvclF0eSAhPT0gdW5kZWZpbmVkID8gbGFib3JRdHkgOiAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMYWJvclF0eShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzE1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdhZGp1c3RtZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdsYWJvciBmZWVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYWRqdXN0bWVudE51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRqdXN0bWVudE51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzE1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2xhYm9yRGlzY291bnQnIGlkPSdsYWJvckRpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFib3JEaXNjb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGlzY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JDwvc3Bhbj48c3Bhbj57dG90YWxMYWJvckZlZXNHZW5lcmFsZS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9PlRvdGFsIEdlbmVyYWxlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuPiQ8L3NwYW4+PHNwYW4+e3RvdGFsSW52b2ljZS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2F2aW5nICE9PSAndHJ1ZScgPyA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPiA6IDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlNhdmluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQmFja31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUJhY2t9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCBjcmVhdGluZyBzZXJ2aWNlID8gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZSA6PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+IElmIHlvdSBzdG9wIGNyZWF0aW5nIHdpdGhvdXQgc2F2aW5nLCBhbGwgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL01haW50ZW5hbmNlVmlld0FkbWluJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+WWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ObzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdzdGF5Jyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBBZGQgTmV3XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3ByZXZpb3VzJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk5hdmlnYXRlQ29udmVydEludm9pY2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkRhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5LERvIHlvdSB3YW50IHRvIGNvbnZlcnQgdG8gYW4gaW52b2ljZSA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlIDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj4gWW91IHNob3VsZCBjb252ZXJ0IHRoZSBzZXJ2aWNlIG9yZGVyIHRvIGludm9pY2Ugd2hlbiBpdCBjbG9zZWQ8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNpc2lvbigncHJldmlvdXMnKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgTGF0ZXJcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvTWFpbnRlbmFuY2VDb252ZXJ0VG9JbnZvaWNlLyR7aWRSZXN9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5Db252ZXJ0IFRvIEludm9pY2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5TYXZpbmcgRmFpbGVkPC9oMj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgVHJ5IEFnYWluXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUxfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTF9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTF9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2MDBweCcsIHBhZGRpbmc6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICA8Q3VzdG9tZXJGb3JtVmlldzIgb25DcmVhdGVPcHRpb249e2hhbmRsZUNyZWF0ZUN1c3RvbWVyfSBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2MDBweCcsIHBhZGRpbmc6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICA8SXRlbUZvcm1WaWV3MiBvbkNyZWF0ZU9wdGlvbj17aGFuZGxlQ3JlYXRlSXRlbX0gb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuSXRlbVVwZGF0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVwZGF0ZUl0ZW0xfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVVwZGF0ZUl0ZW0xfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBwYWRkaW5nOiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPEl0ZW1VcGRhdGVWaWV3MiBvbkNsb3NlPXtoYW5kbGVDbG9zZUl0ZW1VcGRhdGV9IGlkPXtpZEl0ZW19IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qKiBTaWRlIFNob3AgRHJhd2VyICovfVxyXG4gICAgICA8U2lkZURyYXdlclxyXG4gICAgICAgIGFuY2hvcj1cInJpZ2h0XCJcclxuICAgICAgICBvcGVuPXtzaWRlU2hvcE9wZW59XHJcbiAgICAgICAgb25DbG9zZT17dG9nZ2xlU2lkZVNob3B9XHJcbiAgICAgICAgUGFwZXJQcm9wcz17e1xyXG4gICAgICAgICAgc3g6IHsgd2lkdGg6ICc1MDBweCcsIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjUnLCBwYWRkaW5nOiAnMjBweCcgfSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYj17Mn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgU2VsZWN0IEl0ZW0gZnJvbSBTaG9wXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaWRlU2hvcH0+XHJcbiAgICAgICAgICAgIDxDbG9zZSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG1iPXsyfT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoIFNob3BcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c2hvcFNlYXJjaH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNob3BTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlUmVmcmVzaFNob3B9IGNvbG9yPVwicHJpbWFyeVwiIHN4PXt7IG1sOiAxIH19PlxyXG4gICAgICAgICAgICA8UmVmcmVzaCAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICB7c2hvcExvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsIG92ZXJmbG93WTogJ2F1dG8nLCBtYXhIZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTgwcHgpJyB9fT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICB7c2hvcEl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2BkYXRhOiR7aXRlbS5jb250ZW50VHlwZX07YmFzZTY0LCR7aXRlbS5kYXRhfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5pdGVtTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgb2JqZWN0Rml0OiAnY29udGFpbicsIHBhZGRpbmc6ICc1cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IGZsZXhHcm93OiAxLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pdGVtTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRkMgeyhpdGVtLml0ZW1TZWxsaW5nUHJpY2UgKiByYXRlKT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwicHJpbWFyeVwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCB7aXRlbS5pdGVtU2VsbGluZ1ByaWNlPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBkaXNwbGF5PVwiYmxvY2tcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvY2s6IHtpdGVtLml0ZW1RdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUb01haW50ZW5hbmNlKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogJzVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtdD17Mn0+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgIGNvdW50PXtzaG9wVG90YWxQYWdlc31cclxuICAgICAgICAgICAgICAgIHBhZ2U9e3Nob3BQYWdlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNob3BQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NpZGVEcmF3ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW50ZW5hbmNlRm9ybVZpZXdcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TaG9wcGluZ0NhcnRPdXRsaW5lZCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vYXBpQ29uZmlnJztcblxuY29uc3QgSXRlbVRodW1ibmFpbCA9ICh7IGl0ZW1JZCwgaW5pdGlhbERhdGEsIGluaXRpYWxUeXBlIH0pID0+IHtcbiAgY29uc3QgW3NyYywgc2V0U3JjXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hJbWFnZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vIDEuIENoZWNrIGZvciBpbml0aWFsRGF0YSAocGFzc2VkIGZyb20gc2VhcmNoL3Nob3ApXG4gICAgICBpZiAoaW5pdGlhbERhdGEgJiYgaW5pdGlhbFR5cGUgJiYgaW5pdGlhbERhdGEgIT09IFwidW5kZWZpbmVkXCIgJiYgaW5pdGlhbFR5cGUgIT09IFwidW5kZWZpbmVkXCIgJiYgaW5pdGlhbERhdGEgIT09IFwibnVsbFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5pdGlhbERhdGEgPT09ICdzdHJpbmcnICYmIGluaXRpYWxEYXRhLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgYWxyZWFkeSBhIGRhdGEgVVJMXG4gICAgICAgICAgIGlmIChpbml0aWFsRGF0YS5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICAgIHNldFNyYyhpbml0aWFsRGF0YSk7XG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldFNyYyhgZGF0YToke2luaXRpYWxUeXBlfTtiYXNlNjQsJHtpbml0aWFsRGF0YX1gKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbERhdGEuZGF0YSkge1xuICAgICAgICAgICAvLyBIYW5kbGUgYnVmZmVyIG9iamVjdCBpZiBpdCdzIG5vdCBjb252ZXJ0ZWQgdG8gc3RyaW5nIHlldFxuICAgICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgVWludDhBcnJheShpbml0aWFsRGF0YS5kYXRhKTtcbiAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6IGluaXRpYWxUeXBlIH0pO1xuICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gc2V0U3JjKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIDIuIEZhbGxiYWNrIHRvIGZldGNoIGlmIG5vIGluaXRpYWwgZGF0YSBvciBpZiBpdCB3YXMgaW52YWxpZFxuICAgICAgaWYgKCFpdGVtSWQgfHwgaXRlbUlkID09PSBcInVuZGVmaW5lZFwiIHx8IGl0ZW1JZCA9PT0gXCJudWxsXCIpIHtcbiAgICAgICAgc2V0U3JjKG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtLyR7aXRlbUlkfWApO1xuICAgICAgICBpZiAocmVzLmRhdGEuZGF0YSAmJiByZXMuZGF0YS5kYXRhLmRhdGEpIHtcbiAgICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgVWludDhBcnJheShyZXMuZGF0YS5kYXRhLmRhdGEuZGF0YSk7XG4gICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6IHJlcy5kYXRhLmRhdGEuY29udGVudFR5cGUgfSk7XG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gc2V0U3JjKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBvbmxpbmUgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoSW1hZ2UoKTtcbiAgfSwgW2l0ZW1JZCwgaW5pdGlhbERhdGEsIGluaXRpYWxUeXBlXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxBdmF0YXJcbiAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgIHNyYz17c3JjfVxuICAgICAgc3g9e3sgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmMGYwJywgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnIH19XG4gICAgPlxuICAgICAgeyFzcmMgJiYgPFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiBzeD17eyBmb250U2l6ZTogNDAsIGNvbG9yOiAnIzk5OScgfX0gLz59XG4gICAgPC9BdmF0YXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtVGh1bWJuYWlsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Nzcy9TaWRlYmFyTmV3LnNjc3MnXHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBQZXJtSWRlbnRpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVybUlkZW50aXR5JztcclxuaW1wb3J0IExpc3RBbHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTGlzdEFsdCc7XHJcbmltcG9ydCBEZXNjcmlwdGlvbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZXNjcmlwdGlvbic7XHJcbmltcG9ydCBSZWNlaXB0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1JlY2VpcHQnO1xyXG5pbXBvcnQgTW92aW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vdmluZyc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5ncyc7XHJcbmltcG9ydCBJbnNlcnREcml2ZUZpbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW5zZXJ0RHJpdmVGaWxlJztcclxuaW1wb3J0IFJlc3RvcmVQYWdlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jlc3RvcmVQYWdlJztcclxuaW1wb3J0IFJlcXVlc3RRdW90ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXF1ZXN0UXVvdGUnO1xyXG5pbXBvcnQgTW9uZXRpemF0aW9uT25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9uZXRpemF0aW9uT24nO1xyXG5pbXBvcnQgRW5naW5lZXJpbmdJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW5naW5lZXJpbmcnO1xyXG5pbXBvcnQgeyBFeHBsaWNpdCwgU2hvcHBpbmdCYWdPdXRsaW5lZCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUm9vbVByZWZlcmVuY2VzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jvb21QcmVmZXJlbmNlcyc7XHJcbmltcG9ydCB7IExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUGF5bWVudEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QYXltZW50JztcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0JztcclxuZnVuY3Rpb24gU2lkZWJhckRhc2gxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEYXNoYm9hcmRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGFzaGJvYXJkXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxQZXJtSWRlbnRpdHlJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ3VzdG9tZXJcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSAgPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TGlzdEFsdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJTdG9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVxdWVzdFF1b3RlSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlF1b3RhdGlvblwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPERlc2NyaXB0aW9uSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkludm9pY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb25ldGl6YXRpb25Pbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQYXltZW50XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8U2hvcHBpbmdCYWdPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhaWx5IEV4cGVuc2VzXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJvb21QcmVmZXJlbmNlc0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQcm9qZWN0XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVjZWlwdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQdXJjaGFzZXMgUmVxdWVzdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8RW5naW5lZXJpbmdJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTWFpbnRlbmFuY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJNb3JlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckRhc2gxIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyRGFzaDEiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiRGVsZXRlSWNvbiIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJQYXBlciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJzdHlsZWQiLCJCb3giLCJBdXRvY29tcGxldGUiLCJNb2RhbCIsIkJhY2tkcm9wIiwiVGFibGVDb250YWluZXIiLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJEaXZpZGVyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZE1lZGlhIiwiUGFnaW5hdGlvbiIsIkJ1dHRvbiIsIlN3aXBlYWJsZURyYXdlciIsIkRyYXdlciIsIlNpZGVEcmF3ZXIiLCJBdmF0YXIiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJBZGQiLCJBcnJvd1Vwd2FyZE91dGxpbmVkIiwiRHJhZ0luZGljYXRvclJvdW5kZWQiLCJFZGl0IiwiUmVmcmVzaCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24iLCJ2NCIsIk5hdkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsIkRlbW9Db250YWluZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIkRhdGVQaWNrZXIiLCJBcnJvd0JhY2siLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiTG9hZGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsImRheWpzIiwiQ3VzdG9tZXJGb3JtVmlldzIiLCJDbG9zZSIsIkl0ZW1Gb3JtVmlldzIiLCJJdGVtVXBkYXRlVmlldzIiLCJudW1iZXJUb1dvcmRzIiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJhZ2dhYmxlIiwiRHJvcHBhYmxlIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiSXRlbVRodW1ibmFpbCIsIkxpZ2h0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiQmxhY2tUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJWaWV3VG9vbHRpcCIsIl9yZWY1IiwiX2V4Y2x1ZGVkMyIsIl9yZWY2Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJzdHlsZTIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY3Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIl9yZWY4Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiTWFpbnRlbmFuY2VGb3JtVmlldyIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY5IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJhcGlVcmwiLCJfdXNlU3RhdGUiLCJkYXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlcnZpY2VEYXRlIiwic2V0U2VydmljZURhdGUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInZpc2l0RGF0ZSIsInNldFZpc2l0RGF0ZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXRlbURlc2NyaXB0aW9uSW5mbyIsInNldEl0ZW1EZXNjcmlwdGlvbkluZm8iLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImJyYW5kIiwic2V0QnJhbmQiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsIm1vZGVsIiwic2V0TW9kZWwiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJ3YXJyYW50eSIsInNldFdhcnJhbnR5IiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImFjdGlvbiIsInNldEFjdGlvbiIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJhZGp1c3RtZW50Iiwic2V0QWRqdXN0bWVudCIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJhZGp1c3RtZW50TnVtYmVyIiwic2V0QWRqdXN0bWVudE51bWJlciIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJsYWJvclF0eSIsInNldExhYm9yUXR5IiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsImxhYm9yRGlzY291bnQiLCJzZXRMYWJvckRpc2NvdW50IiwidG90YWxMYWJvckZlZXMiLCJ0b3RhbERpc2NvdW50IiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwibGFib3JQZXJjZW50YWdlIiwidG90YWxMYWJvckZlZXNHZW5lcmFsZSIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJkZWZlY3REZXNjcmlwdGlvbiIsInNldERlZmVjdERlc2NyaXB0aW9uIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImFjdGlvblRha2VuIiwic2V0QWN0aW9uVGFrZW4iLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2Iiwibm90ZSIsInNldE5vdGUiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4Iiwic2VyaWFsTm8iLCJzZXRTZXJpYWxObyIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJpdGVtcyIsIlNldEl0ZW1zIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsInN1YlRvdGFsIiwic2V0U3ViVG90YWwiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwidG90YWxJbnZvaWNlIiwic2V0VG90YWxJbnZvaWNlIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsInNlcnZpY2VOdW1iZXIiLCJzZXRTZXJ2aWNlTnVtYmVyIiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwiY3VzdG9tZXJOYW1lIiwic2V0Q3VzdG9tZXJOYW1lIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsIkl0ZW1JbmZvcm1hdGlvbiIsInNldEl0ZW1JbmZvcm1hdGlvbiIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJ0ZWNobmljaWFuQXNzaWduIiwic2V0VGVjaG5pY2lhbkFzc2lnbiIsInNlcnZpY2VOYW1lIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2Iiwic2lkZVNob3BPcGVuIiwic2V0U2lkZVNob3BPcGVuIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsInNob3BJdGVtcyIsInNldFNob3BJdGVtcyIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJzaG9wUGFnZSIsInNldFNob3BQYWdlIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsInNob3BTZWFyY2giLCJzZXRTaG9wU2VhcmNoIiwiX3VzZVN0YXRlNTMiLCJfdXNlU3RhdGU1NCIsInNob3BUb3RhbFBhZ2VzIiwic2V0U2hvcFRvdGFsUGFnZXMiLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2Iiwic2hvcExvYWRpbmciLCJzZXRTaG9wTG9hZGluZyIsIl91c2VTdGF0ZTU3IiwiX3VzZVN0YXRlNTgiLCJyYXRlIiwic2V0UmF0ZSIsImZldGNoRGF0YSIsIl9yZWYwIiwiX3lpZWxkJFByb21pc2UkYWxsIiwiUHJvbWlzZSIsImFsbCIsIl95aWVsZCRQcm9taXNlJGFsbDIiLCJyZXNMYXN0IiwicmVzUmF0ZSIsInJlc0N1c3RvbWVyIiwicmVzRW1wbG95ZWUiLCJyZXNJdGVtIiwiX3Jlc0xhc3QkZGF0YSIsIl9yZXNMYXN0JGRhdGEyIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJfcmVzUmF0ZSRkYXRhIiwicmV2ZXJzZSIsInNldEVtcGxveWVlIiwiZmV0Y2hTaG9wIiwiX3JlZjEiLCJtYXAiLCJyb3ciLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0b3RhbFBhZ2VzIiwiZmlsdGVyIiwidHlwZUl0ZW0iLCJoYW5kbGVSZWZyZXNoU2hvcCIsImhhbmRsZVNob3BQYWdlQ2hhbmdlIiwiZSIsIm5ld1BhZ2UiLCJoYW5kbGVTaG9wU2VhcmNoQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b2dnbGVTaWRlU2hvcCIsImhhbmRsZUFkZFRvTWFpbnRlbmFuY2UiLCJzaG9wSXRlbSIsImV4aXN0aW5nSXRlbUluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsIml0ZW1OYW1lIiwiX2lkIiwidXBkYXRlZEl0ZW1zIiwiY3VycmVudEl0ZW0iLCJuZXdRdHkiLCJpdGVtUXR5IiwiaXRlbUFtb3VudCIsIk1hdGgiLCJyb3VuZCIsIml0ZW1SYXRlIiwidG90YWxBbW91bnQiLCJkaXNjb3VudCIsIml0ZW1EaXNjb3VudCIsInBlcmNlbnRhZ2UiLCJ0b3RhbENvc3QiLCJpdGVtQ29zdCIsInRvdGFsR2VuZXJhbGUiLCJpdGVtQnV5IiwibmV3SXRlbSIsImlkUm93IiwiaXRlbURlc2NyaXB0aW9uIiwiaXRlbVNlbGxpbmdQcmljZSIsIml0ZW1Db3N0UHJpY2UiLCJpdGVtV2VpZ2h0Iiwid2VpZ2h0Iiwic3RvY2siLCJpdGVtUXVhbnRpdHkiLCJpdGVtT3V0IiwibmV3SXRlbU91dCIsImhhbmRsZUNoYW5nZUN1c3RvbWVyIiwibmV3VmFsdWUiLCJzZWxlY3RlZE9wdGlvbnMiLCJmaW5kIiwib3B0aW9uIiwiQ3VzdG9tZXIiLCJhZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3MiLCJiaWxsaW5nQ2l0eSIsInBob25lIiwiY3VzdG9tZXJDb21wYW55UGhvbmUiLCJDcmVhdGUiLCJub3ciLCJmb3JtYXQiLCJfdXNlU3RhdGU1OSIsIl91c2VTdGF0ZTYwIiwib3BlbkF1dG9jb21wbGV0ZTEiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMSIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTEiLCJoYW5kbGVDcmVhdGVDdXN0b21lciIsIm5ld0N1c3RvbWVyIiwiX3VzZVN0YXRlNjEiLCJfdXNlU3RhdGU2MiIsImVtcGxveWVlIiwiZmlsdGVyRW1wbG95ZWUiLCJkZXBhcnRtZW50Iiwic3RhdHVzIiwiaGFuZGxlQ2hhbmdlRW1wbG95ZWUiLCJoYW5kbGVDaGFuZ2VJdGVtIiwiY29udGVudFR5cGUiLCJoYW5kbGVDaGFuZ2UiLCJpIiwiX2UkdGFyZ2V0IiwibmFtZSIsImxpc3QiLCJhZGRJdGVtIiwiYWRkSXRlbVdoaXRlIiwibmV3RGVzY3JpcHRpb24iLCJhZGRJdGVtUm93IiwidXBkYXRlIiwic3BsaWNlIiwiYWRkSXRlbVdoaXRlUm93IiwiaGFuZGxlRHJhZ0VuZCIsInJlc3VsdCIsImRlc3RpbmF0aW9uIiwibmV3SXRlbXMiLCJfbmV3SXRlbXMkc3BsaWNlIiwic291cmNlIiwiaW5kZXgiLCJfbmV3SXRlbXMkc3BsaWNlMiIsInJlbW92ZWQiLCJkZWxldGVJdGVtIiwiSXRlbSIsImZpbHRlckl0ZW1JbmZvcm1hdGlvbiIsIl9yb3ckaXRlbU5hbWUiLCJfdXNlU3RhdGU2MyIsIl91c2VTdGF0ZTY0Iiwib3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVDcmVhdGVJdGVtIiwiaGFuZGxlU2hvd0F1dG9jb21wbGV0ZSIsImhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbiIsInJlc3VsdDEiLCJyZWR1Y2UiLCJzdW0iLCJ0b0ZpeGVkIiwibmV3VG90YWwiLCJOdW1iZXIiLCJfdXNlU3RhdGU2NSIsIl91c2VTdGF0ZTY2Iiwib3Blbkl0ZW1VcGRhdGUiLCJzZXRPcGVuSXRlbVVwZGF0ZSIsIl91c2VTdGF0ZTY3IiwiX3VzZVN0YXRlNjgiLCJpZEl0ZW0iLCJzZXRJZEl0ZW0iLCJoYW5kbGVPcGVuSXRlbVVwZGF0ZSIsIl9yZWYxMCIsImlkIiwiX3giLCJoYW5kbGVDbG9zZVVwZGF0ZUl0ZW0xIiwiaGFuZGxlQ2xvc2VJdGVtVXBkYXRlIiwiX3JlZjExIiwiX3JvdyRpdGVtTmFtZTIiLCJfdXNlU3RhdGU2OSIsIl91c2VTdGF0ZTcwIiwib3BlbkJhY2siLCJzZXRPcGVuQmFjayIsImhhbmRsZU9wZW5CYWNrIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZUJhY2siLCJfdXNlU3RhdGU3MSIsIl91c2VTdGF0ZTcyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGU3MyIsIl91c2VTdGF0ZTc0IiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU3NSIsIl91c2VTdGF0ZTc2IiwibG9hZGluZ09wZW5OYXZpZ2F0ZUNvbnZlcnRJbnZvaWNlIiwic2V0TG9hZGluZ09wZW5OYXZpZ2F0ZUNvbnZlcnRJbnZvaWNlIiwiX3VzZVN0YXRlNzciLCJfdXNlU3RhdGU3OCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVEZWNpc2lvbiIsImhpc3RvcnkiLCJiYWNrIiwiX3VzZVN0YXRlNzkiLCJfdXNlU3RhdGU4MCIsImlkUmVzIiwic2V0SWRSZXMiLCJoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24iLCJfcmVmMTIiLCJSZWZlcmVuY2VJbmZvIiwiUmVmZXJlbmNlSW5mb051bWJlciIsImlkSW5mbyIsInBlcnNvbiIsInJlYXNvbiIsImRhdGVOb3RpZmljYXRpb24iLCJwb3N0IiwibG9nIiwiX3gyIiwiX3gzIiwiX3VzZVN0YXRlODEiLCJfdXNlU3RhdGU4MiIsInNhdmluZyIsInNldFNhdmluZyIsImhhbmRsZVN1Ym1pdCIsIl9yZWYxMyIsIml0ZW1zV2l0aG91dERhdGEiLCJfcmVmMTQiLCJyZXN0IiwiX2V4Y2x1ZGVkNCIsInN5bmNlZCIsIl94NCIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJvblN1Ym1pdCIsImZsb2F0IiwicmlnaHQiLCJ0aXRsZSIsInBsYWNlbWVudCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJ4cyIsInRleHRBbGlnbiIsImRpc2FibGVDbGVhcmFibGUiLCJvcHRpb25zIiwiZ2V0T3B0aW9uTGFiZWwiLCJvbkNoYW5nZSIsIlBhcGVyQ29tcG9uZW50IiwiX3JlZjE1IiwiY2hpbGRyZW4iLCJvdGhlciIsIl9leGNsdWRlZDUiLCJtYXJnaW5Ub3AiLCJkaXNhYmxlZCIsIm9uTW91c2VEb3duIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJsYWJlbCIsInJlcXVpcmVkIiwiaHRtbEZvciIsInR5cGUiLCJzdGFydEFkb3JubWVudCIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsInJlbmRlck9wdGlvbiIsImRlZmF1bHRWYWx1ZSIsIm11bHRpbGluZSIsInJvd3MiLCJvbkRyYWdFbmQiLCJkcm9wcGFibGVJZCIsInByb3ZpZGVkIiwic25hcHNob3QiLCJkcm9wcGFibGVQcm9wcyIsInJlZiIsImlubmVyUmVmIiwia2V5IiwiZHJhZ2dhYmxlSWQiLCJfSXRlbSRpdGVtTmFtZSIsImRyYWdnYWJsZVByb3BzIiwidW5kZWZpbmVkIiwiRnJhZ21lbnQiLCJkcmFnSGFuZGxlUHJvcHMiLCJjb2xTcGFuIiwic2l6ZSIsImN1cnNvciIsImdhcCIsIml0ZW1JZCIsImluaXRpYWxEYXRhIiwiaW5pdGlhbFR5cGUiLCJmbGV4RGlyZWN0aW9uIiwiaGlkZGVuIiwiaXRlbUJyYW5kIiwib25JbnB1dENoYW5nZSIsImV2ZW50IiwibmV3SW5wdXRWYWx1ZSIsImZpbHRlck9wdGlvbnMiLCJfcmVmMTYiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiX3JlZjE3IiwiX2V4Y2x1ZGVkNiIsInBsYWNlaG9sZGVyIiwicmVwbGFjZSIsIm9uQ2xvc2UiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJ0byIsIm92ZXJmbG93WSIsIm9uQ3JlYXRlT3B0aW9uIiwiYW5jaG9yIiwiUGFwZXJQcm9wcyIsIm1iIiwiZnVsbFdpZHRoIiwibWwiLCJtYXhIZWlnaHQiLCJfcmVmMTgiLCJfaXRlbSRpdGVtU2VsbGluZ1ByaWMiLCJpbWFnZSIsImFsdCIsIm9iamVjdEZpdCIsImZvbnRXZWlnaHQiLCJndXR0ZXJCb3R0b20iLCJjb3VudCIsInBhZ2UiLCJzcmMiLCJzZXRTcmMiLCJmZXRjaEltYWdlIiwic3RhcnRzV2l0aCIsImJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJibG9iIiwiQmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZWFkQXNEYXRhVVJMIiwiZXJyIiwiYm9yZGVyIiwiT3V0bGV0IiwiTGluayIsInVzZUxvY2F0aW9uIiwiRGFzaGJvYXJkSWNvbiIsIlBlcm1JZGVudGl0eUljb24iLCJMaXN0QWx0SWNvbiIsIkRlc2NyaXB0aW9uSWNvbiIsIlJlY2VpcHRJY29uIiwiTW92aW5nSWNvbiIsIlNldHRpbmdzSWNvbiIsIkluc2VydERyaXZlRmlsZUljb24iLCJSZXN0b3JlUGFnZUljb24iLCJSZXF1ZXN0UXVvdGVJY29uIiwiTW9uZXRpemF0aW9uT25JY29uIiwiRW5naW5lZXJpbmdJY29uIiwiRXhwbGljaXQiLCJTaG9wcGluZ0JhZ091dGxpbmVkIiwiUm9vbVByZWZlcmVuY2VzSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsIlBheW1lbnRJY29uIiwiTW9yZVZlcnRJY29uIiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=