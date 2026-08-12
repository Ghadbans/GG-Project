"use strict";
exports.id = "src_js_AdminView1_PageView_MaintenanceView_MaintenanceUpdateView_js";
exports.ids = ["src_js_AdminView1_PageView_MaintenanceView_MaintenanceUpdateView_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/MaintenanceView/MaintenanceUpdateView.js"
/*!*****************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/MaintenanceView/MaintenanceUpdateView.js ***!
  \*****************************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/SwipeableDrawer/SwipeableDrawer.js");
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
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Check.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Refresh.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../../../component/ItemThumbnail */ "./src/js/component/ItemThumbnail.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["data", "contentType"],
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
function MaintenanceUpdateView() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_49__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_49__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_58__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_58__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_59__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_46__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_59__.setUser)({
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_59__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    serviceDate = _useState2[0],
    setServiceDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
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
    statusInfo = _useState10[0],
    setStatusInfo = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    warranty = _useState12[0],
    setWarranty = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    defectDescription = _useState14[0],
    setDefectDescription = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    actionTaken = _useState16[0],
    setActionTaken = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    action = _useState18[0],
    setAction = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    serialNo = _useState20[0],
    setSerialNo = _useState20[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    ItemInformation = _useState22[0],
    setItemInformation = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    subTotal = _useState24[0],
    setSubTotal = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    totalInvoice = _useState26[0],
    setTotalInvoice = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Labor Fees'),
    _useState28 = _slicedToArray(_useState27, 2),
    adjustment = _useState28[0],
    setAdjustment = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    adjustmentNumber = _useState30[0],
    setAdjustmentNumber = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState32 = _slicedToArray(_useState31, 2),
    laborQty = _useState32[0],
    setLaborQty = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    laborDiscount = _useState34[0],
    setLaborDiscount = _useState34[1];
  var totalLaborFees = adjustmentNumber * laborQty;
  var totalDiscount = isNaN(totalLaborFees * laborDiscount) ? 0 : parseFloat(totalLaborFees * laborDiscount);
  var laborPercentage = totalDiscount / 100;
  var totalLaborFeesGenerale = parseFloat(totalLaborFees) - parseFloat(laborPercentage);
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    serviceNumber = _useState36[0],
    setServiceNumber = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    items = _useState38[0],
    SetItems = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState40 = _slicedToArray(_useState39, 2),
    note = _useState40[0],
    setNote = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState42 = _slicedToArray(_useState41, 2),
    technicianAssign = _useState42[0],
    setTechnicianAssign = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState44 = _slicedToArray(_useState43, 2),
    customerName = _useState44[0],
    setCustomerName = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState46 = _slicedToArray(_useState45, 2),
    customer = _useState46[0],
    setCustomer = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState48 = _slicedToArray(_useState47, 2),
    reason = _useState48[0],
    setReason = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState50 = _slicedToArray(_useState49, 2),
    converted = _useState50[0],
    setConverted = _useState50[1];

  // Side Shop State
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState52 = _slicedToArray(_useState51, 2),
    sideShopOpen = _useState52[0],
    setSideShopOpen = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState54 = _slicedToArray(_useState53, 2),
    shopItems = _useState54[0],
    setShopItems = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState56 = _slicedToArray(_useState55, 2),
    shopPage = _useState56[0],
    setShopPage = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState58 = _slicedToArray(_useState57, 2),
    shopSearch = _useState58[0],
    setShopSearch = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState60 = _slicedToArray(_useState59, 2),
    shopTotalPages = _useState60[0],
    setShopTotalPages = _useState60[1];
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState62 = _slicedToArray(_useState61, 2),
    shopLoading = _useState62[0],
    setShopLoading = _useState62[1];
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState64 = _slicedToArray(_useState63, 2),
    rate = _useState64[0],
    setRate = _useState64[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_46__.ENDPOINT_URL, "/get-maintenance/").concat(id)), axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_46__.ENDPOINT_URL, "/item")), axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_46__.ENDPOINT_URL, "/customer")), axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_46__.ENDPOINT_URL, "/employee")), axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_46__.ENDPOINT_URL, "/rate"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 5),
            resMaintenance = _yield$Promise$all2[0],
            resItem = _yield$Promise$all2[1],
            resCustomer = _yield$Promise$all2[2],
            resEmployee = _yield$Promise$all2[3],
            resRate = _yield$Promise$all2[4];
          var mData = resMaintenance.data.data;
          if (mData) {
            setServiceDate(mData.serviceDate || "");
            setVisitDate(mData.visitDate || "");
            setItemDescriptionInfo(mData.itemDescriptionInfo || "");
            setBrand(mData.brand || "");
            setModel(mData.model || "");
            setWarranty(mData.warranty || "");
            setDefectDescription(mData.defectDescription || "");
            setActionTaken(mData.actionTaken || "");
            setSerialNo(mData.serialNo || "");
            setServiceNumber(mData.serviceNumber || 0);
            setTechnicianAssign(mData.technicianAssign || '');
            setCustomerName(mData.customerName || {});
            SetItems(mData.items || []);
            setConverted(mData.Converted || "");
            setAdjustmentNumber(mData.adjustmentNumber || 0);
            setNote(mData.note || "");
            setLaborDiscount(mData.laborDiscount || 0);
            setStatusInfo(mData.status || "");
            setLaborQty(mData.laborQty || 0);
            setAction(mData.action || "");
          }
          setItemInformation((resItem.data.data || []).reverse());
          setCustomer((resCustomer.data.data || []).reverse());
          setEmployee(resEmployee.data.data || []);
          if (resRate.data.data && resRate.data.data.length > 0) {
            var _resRate$data;
            setRate(((_resRate$data = resRate.data) === null || _resRate$data === void 0 || (_resRate$data = _resRate$data.data) === null || _resRate$data === void 0 || (_resRate$data = _resRate$data[0]) === null || _resRate$data === void 0 ? void 0 : _resRate$data.rate) || 1);
          }
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

  // Fetch Shop Items & Rate
  var fetchShop = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      setShopLoading(true);
      try {
        var resRate = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_46__.ENDPOINT_URL, "/rate"));
        resRate.data.data.map(row => setRate(row.rate));
        var res = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_46__.ENDPOINT_URL, "/item-shop?page=").concat(shopPage, "&limit=20&search=").concat(encodeURIComponent(shopSearch)));
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
  var toggleSideShop = () => {
    setSideShopOpen(!sideShopOpen);
  };
  var handleShopPageChange = (e, value) => {
    setShopPage(value);
  };
  var handleShopSearchChange = e => {
    setShopSearch(e.target.value);
    setShopPage(1);
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
        totalGenerale: Math.round(currentItem.itemCost * currentItem.itemBuy * 100) / 100
      });
      SetItems(updatedItems);
    } else {
      // Item does not exist, add new
      var newItem = {
        idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_47__["default"])(),
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
  var CommentInfo = {
    idInfo: id,
    person: user.data.userName + ' Modified',
    reason
  };
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_61___default()(Date.now());
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    open1 = _useState66[0],
    setOpen1 = _useState66[1];
  var handleOpenUpdate = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
  };
  {/** Item start */}
  // Data already fetched in the combined useEffect above.
  var serviceItem = (ItemInformation || []).filter(row => row.typeItem === 'Services');
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
      address: (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingAddress) + ' ' + (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingCity),
      phone: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.customerCompanyPhone
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
  //addItem
  var addItem = () => {
    SetItems([...items, {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_47__["default"])(),
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
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_47__["default"])(),
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
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_47__["default"])(),
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
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_47__["default"])(),
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
  var handleShowAutocompleteDescription = idRow => {
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        itemName: 'empty'
      }
    }) : row));
  };
  var onServiceHandle = idInfo => {
    SetItems(items => items.map(row => row.idRow === idInfo ? _objectSpread(_objectSpread({}, row), {}, {
      itemOut: row.itemQty
    }) : row));
  };
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState68 = _slicedToArray(_useState67, 2),
    employee = _useState68[0],
    setEmployee = _useState68[1];
  // Data already fetched in the combined useEffect above.
  var handleClearTech = () => {
    setTechnicianAssign('');
  };
  var filterEmployee = employee.filter(row => row.department === 'TECHNICIAN' && row.Status !== 'Fired' || row.Status !== 'Resign' || row.Status !== 'Suspended');
  var handleChangeEmployee = newValue => {
    var selectedOptions = employee.find(option => option === newValue);
    setTechnicianAssign(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeeName);
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
    setItemInformation([...ItemInformation, newItem]);
  };
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result1 = (items || []).reduce((sum, row) => sum + parseFloat((row === null || row === void 0 ? void 0 : row.itemAmount) || 0), 0);
    setSubTotal(result1.toFixed(2));
    var newTotal = Number(result1) + Number(totalLaborFeesGenerale || 0);
    setTotalInvoice(newTotal);
  }, [items, totalLaborFeesGenerale]);
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState72 = _slicedToArray(_useState71, 2),
    openItemUpdate = _useState72[0],
    setOpenItemUpdate = _useState72[1];
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState74 = _slicedToArray(_useState73, 2),
    idItem = _useState74[0],
    setIdItem = _useState74[1];
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_46__.ENDPOINT_URL, "/get-item/").concat(idItem));
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
  var _useState75 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState76 = _slicedToArray(_useState75, 2),
    openBack = _useState76[0],
    setOpenBack = _useState76[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  {/** Loading Start */}
  var _useState77 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState78 = _slicedToArray(_useState77, 2),
    loading = _useState78[0],
    setLoading = _useState78[1];
  var _useState79 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState80 = _slicedToArray(_useState79, 2),
    loadingOpenModal = _useState80[0],
    setLoadingOpenModal = _useState80[1];
  var _useState81 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState82 = _slicedToArray(_useState81, 2),
    loadingOpenNavigateConvertInvoice = _useState82[0],
    setLoadingOpenNavigateConvertInvoice = _useState82[1];
  var _useState83 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState84 = _slicedToArray(_useState83, 2),
    ErrorOpenModal = _useState84[0],
    setErrorOpenModal = _useState84[1];
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
    setOpen1(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    navigate(-1);
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
  {/** Loading End */}
  var status = '';
  if (statusInfo === 'Close') {
    if (adjustmentNumber > 0) {
      status = 'Close';
    } else {
      status = 'Pending';
    }
  } else {
    if (adjustmentNumber > 0) {
      status = 'Close';
    } else {
      status = statusInfo;
    }
  }
  var serviceName = "M-".concat(String(serviceNumber).padStart(6, '0'));
  var _useState85 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState86 = _slicedToArray(_useState85, 2),
    hideBack = _useState86[0],
    setHideBack = _useState86[1];
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      var data = {
        idInfo: id,
        person: "".concat(user.data.userName, " Modify M-").concat(String(serviceNumber).padStart(6, '0')),
        reason,
        dateNotification: dateComment
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_46__.ENDPOINT_URL, "/create-notification/"), data);
        if (res) {
          setReason("");
        }
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateComment() {
      return _ref12.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var itemsWithoutData = items.map(_ref14 => {
        var data = _ref14.data,
          contentType = _ref14.contentType,
          rest = _objectWithoutProperties(_ref14, _excluded4);
        return rest;
      });
      var data = {
        customerName,
        serviceDate,
        actionTaken,
        itemDescriptionInfo,
        warranty,
        defectDescription,
        brand,
        model,
        technicianAssign,
        serviceNumber,
        serviceName,
        serialNo,
        status,
        action,
        items: itemsWithoutData,
        adjustmentNumber,
        totalInvoice,
        subTotal,
        note,
        totalLaborFees,
        laborPercentage,
        totalDiscount,
        laborDiscount,
        laborQty,
        totalLaborFeesGenerale,
        updateS: false
      };
      try {
        // Fetch fresh state from server
        var currentRes = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_46__.ENDPOINT_URL, "/get-maintenance/").concat(id));
        var currentMaintenance = currentRes.data.data;

        // Merge local changes with server state
        var updatedData = _objectSpread(_objectSpread(_objectSpread({}, currentMaintenance), data), {}, {
          updateS: false
        });
        var res = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_46__.ENDPOINT_URL, "/update-maintenance/").concat(id), updatedData);
        if (res) {
          handleCreateComment();
          handleOpen();
        }
      } catch (error) {
        console.error("Error updating maintenance:", error);
        handleError();
      }
    });
    return function handleSubmit(_x2) {
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
  var _useState87 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState88 = _slicedToArray(_useState87, 2),
    search2 = _useState88[0],
    setSearch2 = _useState88[1];
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_37__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "update maintenance"), hideBack === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_54__["default"], {
    style: {
      color: 'white'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_60__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_38__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_35__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_32__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_36__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleOpenUpdate
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
    spacing: 2,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_45__["default"], {
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
    htmlFor: "serviceNumber"
  }, "Service Order Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    disabled: user.data.role !== 'CEO',
    id: "serviceNumber",
    name: "serviceNumber",
    label: "Service Order Number",
    value: serviceNumber,
    onChange: e => setServiceNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "M")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_51__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_52__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_50__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_53__.DatePicker, {
    required: true,
    name: "serviceDate",
    label: "Service Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_61___default()(serviceDate),
    onChange: date => setServiceDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_51__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_52__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_50__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_53__.DatePicker, {
    required: true,
    name: "visitDate",
    label: "Visit Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_61___default()(visitDate),
    disabled: true,
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
    xs: 3
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
    xs: 3
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
    xs: 3
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
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center'
    }
  }, "Technician Assign")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, technicianAssign !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disabled: true,
    label: "Technician",
    value: technicianAssign,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleClearTech,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_45__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
    value: action !== undefined ? action : '',
    onChange: e => setAction(e.target.value),
    name: "action",
    label: "action",
    defaultValue: "Carry-In"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "Carry-In"
  }, "Carry-In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "Carry-Out"
  }, "Carry-Out"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "In-Home",
    disabled: action === 'Carry-In' || action === 'Carry-Out'
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), newArray2.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_65__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => {
    var _Item$itemName;
    var related = serviceItem.find(row1 => row1._id === Item.itemName._id);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_42__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => deleteItem(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_42__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        height: '100px'
      }
    }, Item.itemName._id || Item.itemName.itemName === 'empty' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_68__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_45__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_43__["default"], {
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
      filterOptions: (options, _ref15) => {
        var inputValue = _ref15.inputValue;
        return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
      },
      onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
      size: "small",
      PaperComponent: _ref16 => {
        var children = _ref16.children,
          other = _objectWithoutProperties(_ref16, _excluded5);
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_45__["default"], {
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
      disabled: user.data.role !== 'CEO',
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
    }, Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
      title: "Delete",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => deleteItem(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))), related && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Completed",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      hidden: parseFloat(Item.itemOut) === parseFloat(Item.itemQty)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => onServiceHandle(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_41__["default"], {
      style: {
        color: 'green'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
    disabled: action === undefined || action === 'Carry-In',
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
    disabled: action === undefined || action === 'Carry-In',
    size: "small",
    placeholder: "labor fees",
    name: "adjustmentNumber",
    value: adjustmentNumber,
    onChange: e => setAdjustmentNumber(e.target.value),
    sx: {
      width: '150px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disabled: action === undefined || action === 'Carry-In',
    name: "laborDiscount",
    id: "laborDiscount",
    size: "small",
    value: laborDiscount,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_62__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Do you want to stop updating service ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_57__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_57__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_62__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Reason Of Updating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
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
    id: "comments",
    name: "comments",
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
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_57__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, converted === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    onClick: () => handleDecision('previous'),
    className: "btnCustomer"
  }, "Close"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_55__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_48__.NavLink, {
    to: "/MaintenanceConvertToInvoice/".concat(id),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer"
  }, "Convert To Invoice"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_62__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_63__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_62__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_64__["default"], {
    onClose: handleCloseItemUpdate,
    id: idItem
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    anchor: "right",
    open: sideShopOpen,
    onClose: toggleSideShop,
    onOpen: () => setSideShopOpen(true),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_62__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: "flex",
    alignItems: "center",
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    fullWidth: true,
    label: "Search Shop",
    variant: "outlined",
    size: "small",
    value: shopSearch,
    onChange: handleShopSearchChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleRefreshShop,
    color: "primary",
    sx: {
      ml: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_44__["default"], null))), shopLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_57__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      flexGrow: 1,
      overflowY: 'auto',
      maxHeight: 'calc(100vh - 180px)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 2
  }, shopItems.map(item => {
    var _ref17, _item$itemSellingPric;
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
    }, "FC ", (_ref17 = item.itemSellingPrice * rate) === null || _ref17 === void 0 ? void 0 : _ref17.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaintenanceUpdateView);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfTWFpbnRlbmFuY2VWaWV3X01haW50ZW5hbmNlVXBkYXRlVmlld19qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFtRDtBQUNRO0FBQ25DO0FBQ0U7QUFDMEI7QUFDc0I7QUFDdEI7QUFDb1A7QUFDeE87QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDekM7QUFDdUc7QUFDOUU7QUFDOEI7QUFDdEQ7QUFDeUM7QUFDQTtBQUNhO0FBQ2hCO0FBQ0o7QUFDTjtBQUNRO0FBQ1Y7QUFDTDtBQUNRO0FBQytCO0FBQ3RDO0FBQ0E7QUFDdEI7QUFDa0I7QUFDVTtBQUNJO0FBQ2tCO0FBQ3RCO0FBQ1E7QUFDRDtBQUk3RCxJQUFNbUYsWUFBWSxHQUFHbkUsMERBQU0sQ0FBQ29FLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNoRHhGLDBEQUFBLENBQUNnQyw4REFBTyxFQUFBMEQsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPOUQsOERBQWMsQ0FBQytELE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLEtBQUs7TUFDdEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFP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RSxFQUFFO01BQUUvYixLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ2xHLDBEQUFBLENBQUNxckIsc0RBQVk7SUFBQ3BKLEVBQUUsRUFBRTtNQUFFL2IsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbENsRywwREFBQSxDQUFDeXJCLHFFQUFZLE1BQUUsQ0FDSCxDQUFDLGVBQ2Z6ckIsMERBQUEsQ0FBQ3NyQixzREFBWTtJQUFDSSxPQUFPLEVBQUM7RUFBTSxDQUFFLENBQ2hCLENBQ2hCLENBQUM7QUFFUDtBQUVBLGlFQUFldnJCLFlBQVksRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9NYWludGVuYW5jZVZpZXcvTWFpbnRlbmFuY2VVcGRhdGVWaWV3LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvY29tcG9uZW50L0l0ZW1UaHVtYm5haWwuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvU2lkZWJhckRhc2gxLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2lkZWJhckRhc2gxIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEnO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBQYXBlciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBzdHlsZWQsIEJveCwgQXV0b2NvbXBsZXRlLCBNb2RhbCwgQmFja2Ryb3AsIFRhYmxlQ29udGFpbmVyLCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgRGl2aWRlciwgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRNZWRpYSwgUGFnaW5hdGlvbiwgQnV0dG9uLCBTd2lwZWFibGVEcmF3ZXIsIEF2YXRhciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBBZGQsIEFycm93VXB3YXJkT3V0bGluZWQsIENoZWNrLCBEcmFnSW5kaWNhdG9yUm91bmRlZCwgRWRpdCwgUmVmcmVzaCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0xvY2FsaXphdGlvblByb3ZpZGVyJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlUGlja2VyJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IERlbGV0ZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCB7IENsb3NlIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBJdGVtRm9ybVZpZXcyIGZyb20gJy4uL0l0ZW1WaWV3L0l0ZW1Gb3JtVmlldzInO1xyXG5pbXBvcnQgSXRlbVVwZGF0ZVZpZXcyIGZyb20gJy4uL0l0ZW1WaWV3L0l0ZW1VcGRhdGVWaWV3Mic7XHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuaW1wb3J0IEl0ZW1UaHVtYm5haWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0l0ZW1UaHVtYm5haWwnO1xyXG5cclxuXHJcblxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgVmlld1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IHN0eWxlMiA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDgwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIE1haW50ZW5hbmNlVXBkYXRlVmlldygpIHtcclxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW3NlcnZpY2VEYXRlLCBzZXRTZXJ2aWNlRGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdmlzaXREYXRlLCBzZXRWaXNpdERhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2l0ZW1EZXNjcmlwdGlvbkluZm8sIHNldEl0ZW1EZXNjcmlwdGlvbkluZm9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2JyYW5kLCBzZXRCcmFuZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbW9kZWwsIHNldE1vZGVsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdGF0dXNJbmZvLCBzZXRTdGF0dXNJbmZvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3YXJyYW50eSwgc2V0V2FycmFudHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RlZmVjdERlc2NyaXB0aW9uLCBzZXREZWZlY3REZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWN0aW9uVGFrZW4sIHNldEFjdGlvblRha2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthY3Rpb24sIHNldEFjdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VyaWFsTm8sIHNldFNlcmlhbE5vXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbSXRlbUluZm9ybWF0aW9uLCBzZXRJdGVtSW5mb3JtYXRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzdWJUb3RhbCwgc2V0U3ViVG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsSW52b2ljZSwgc2V0VG90YWxJbnZvaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthZGp1c3RtZW50LCBzZXRBZGp1c3RtZW50XSA9IHVzZVN0YXRlKCdMYWJvciBGZWVzJyk7XHJcbiAgY29uc3QgW2FkanVzdG1lbnROdW1iZXIsIHNldEFkanVzdG1lbnROdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2xhYm9yUXR5LCBzZXRMYWJvclF0eV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbGFib3JEaXNjb3VudCwgc2V0TGFib3JEaXNjb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB0b3RhbExhYm9yRmVlcyA9IGFkanVzdG1lbnROdW1iZXIgKiBsYWJvclF0eVxyXG4gIGNvbnN0IHRvdGFsRGlzY291bnQgPSBpc05hTih0b3RhbExhYm9yRmVlcyAqIGxhYm9yRGlzY291bnQpID8gMCA6IHBhcnNlRmxvYXQodG90YWxMYWJvckZlZXMgKiBsYWJvckRpc2NvdW50KTtcclxuICBjb25zdCBsYWJvclBlcmNlbnRhZ2UgPSB0b3RhbERpc2NvdW50IC8gMTAwO1xyXG4gIGNvbnN0IHRvdGFsTGFib3JGZWVzR2VuZXJhbGUgPSBwYXJzZUZsb2F0KHRvdGFsTGFib3JGZWVzKSAtIHBhcnNlRmxvYXQobGFib3JQZXJjZW50YWdlKTtcclxuICBjb25zdCBbc2VydmljZU51bWJlciwgc2V0U2VydmljZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXRlbXMsIFNldEl0ZW1zXSA9IHVzZVN0YXRlKFtcclxuICBdKTtcclxuICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGVjaG5pY2lhbkFzc2lnbiwgc2V0VGVjaG5pY2lhbkFzc2lnbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2N1c3RvbWVyTmFtZSwgc2V0Q3VzdG9tZXJOYW1lXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbY3VzdG9tZXIsIHNldEN1c3RvbWVyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbnZlcnRlZCwgc2V0Q29udmVydGVkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvLyBTaWRlIFNob3AgU3RhdGVcclxuICBjb25zdCBbc2lkZVNob3BPcGVuLCBzZXRTaWRlU2hvcE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG9wSXRlbXMsIHNldFNob3BJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Nob3BQYWdlLCBzZXRTaG9wUGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc2hvcFNlYXJjaCwgc2V0U2hvcFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Nob3BUb3RhbFBhZ2VzLCBzZXRTaG9wVG90YWxQYWdlc10gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc2hvcExvYWRpbmcsIHNldFNob3BMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IFtyZXNNYWludGVuYW5jZSwgcmVzSXRlbSwgcmVzQ3VzdG9tZXIsIHJlc0VtcGxveWVlLCByZXNSYXRlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1tYWludGVuYW5jZS8ke2lkfWApLFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbWApLFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vY3VzdG9tZXJgKSxcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVlYCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9yYXRlYClcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgY29uc3QgbURhdGEgPSByZXNNYWludGVuYW5jZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgaWYgKG1EYXRhKSB7XHJcbiAgICAgICAgICBzZXRTZXJ2aWNlRGF0ZShtRGF0YS5zZXJ2aWNlRGF0ZSB8fCBcIlwiKTtcclxuICAgICAgICAgIHNldFZpc2l0RGF0ZShtRGF0YS52aXNpdERhdGUgfHwgXCJcIik7XHJcbiAgICAgICAgICBzZXRJdGVtRGVzY3JpcHRpb25JbmZvKG1EYXRhLml0ZW1EZXNjcmlwdGlvbkluZm8gfHwgXCJcIik7XHJcbiAgICAgICAgICBzZXRCcmFuZChtRGF0YS5icmFuZCB8fCBcIlwiKTtcclxuICAgICAgICAgIHNldE1vZGVsKG1EYXRhLm1vZGVsIHx8IFwiXCIpO1xyXG4gICAgICAgICAgc2V0V2FycmFudHkobURhdGEud2FycmFudHkgfHwgXCJcIik7XHJcbiAgICAgICAgICBzZXREZWZlY3REZXNjcmlwdGlvbihtRGF0YS5kZWZlY3REZXNjcmlwdGlvbiB8fCBcIlwiKTtcclxuICAgICAgICAgIHNldEFjdGlvblRha2VuKG1EYXRhLmFjdGlvblRha2VuIHx8IFwiXCIpO1xyXG4gICAgICAgICAgc2V0U2VyaWFsTm8obURhdGEuc2VyaWFsTm8gfHwgXCJcIik7XHJcbiAgICAgICAgICBzZXRTZXJ2aWNlTnVtYmVyKG1EYXRhLnNlcnZpY2VOdW1iZXIgfHwgMCk7XHJcbiAgICAgICAgICBzZXRUZWNobmljaWFuQXNzaWduKG1EYXRhLnRlY2huaWNpYW5Bc3NpZ24gfHwgJycpO1xyXG4gICAgICAgICAgc2V0Q3VzdG9tZXJOYW1lKG1EYXRhLmN1c3RvbWVyTmFtZSB8fCB7fSk7XHJcbiAgICAgICAgICBTZXRJdGVtcyhtRGF0YS5pdGVtcyB8fCBbXSk7XHJcbiAgICAgICAgICBzZXRDb252ZXJ0ZWQobURhdGEuQ29udmVydGVkIHx8IFwiXCIpO1xyXG4gICAgICAgICAgc2V0QWRqdXN0bWVudE51bWJlcihtRGF0YS5hZGp1c3RtZW50TnVtYmVyIHx8IDApO1xyXG4gICAgICAgICAgc2V0Tm90ZShtRGF0YS5ub3RlIHx8IFwiXCIpO1xyXG4gICAgICAgICAgc2V0TGFib3JEaXNjb3VudChtRGF0YS5sYWJvckRpc2NvdW50IHx8IDApO1xyXG4gICAgICAgICAgc2V0U3RhdHVzSW5mbyhtRGF0YS5zdGF0dXMgfHwgXCJcIik7XHJcbiAgICAgICAgICBzZXRMYWJvclF0eShtRGF0YS5sYWJvclF0eSB8fCAwKTtcclxuICAgICAgICAgIHNldEFjdGlvbihtRGF0YS5hY3Rpb24gfHwgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRJdGVtSW5mb3JtYXRpb24oKHJlc0l0ZW0uZGF0YS5kYXRhIHx8IFtdKS5yZXZlcnNlKCkpO1xyXG4gICAgICAgIHNldEN1c3RvbWVyKChyZXNDdXN0b21lci5kYXRhLmRhdGEgfHwgW10pLnJldmVyc2UoKSk7XHJcbiAgICAgICAgc2V0RW1wbG95ZWUocmVzRW1wbG95ZWUuZGF0YS5kYXRhIHx8IFtdKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc1JhdGUuZGF0YS5kYXRhICYmIHJlc1JhdGUuZGF0YS5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHNldFJhdGUocmVzUmF0ZS5kYXRhPy5kYXRhPy5bMF0/LnJhdGUgfHwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICAvLyBGZXRjaCBTaG9wIEl0ZW1zICYgUmF0ZVxyXG4gIGNvbnN0IGZldGNoU2hvcCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFNob3BMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzUmF0ZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3JhdGVgKVxyXG4gICAgICByZXNSYXRlLmRhdGEuZGF0YS5tYXAoKHJvdykgPT4gc2V0UmF0ZShyb3cucmF0ZSkpXHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtLXNob3A/cGFnZT0ke3Nob3BQYWdlfSZsaW1pdD0yMCZzZWFyY2g9JHtlbmNvZGVVUklDb21wb25lbnQoc2hvcFNlYXJjaCl9YClcclxuICAgICAgc2V0U2hvcFRvdGFsUGFnZXMocmVzLmRhdGEudG90YWxQYWdlcylcclxuICAgICAgc2V0U2hvcEl0ZW1zKHJlcy5kYXRhLml0ZW1zLmZpbHRlcigocm93KSA9PiByb3cudHlwZUl0ZW0gPT09IFwiR29vZHNcIikucmV2ZXJzZSgpKVxyXG4gICAgICBzZXRTaG9wTG9hZGluZyhmYWxzZSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICBzZXRTaG9wTG9hZGluZyhmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2lkZVNob3BPcGVuKSB7IC8vIE9ubHkgZmV0Y2ggaWYgc2lkZSBzaG9wIGlzIG9wZW5cclxuICAgICAgZmV0Y2hTaG9wKClcclxuICAgIH1cclxuICB9LCBbc2hvcFBhZ2UsIHNob3BTZWFyY2gsIHNpZGVTaG9wT3Blbl0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlZnJlc2hTaG9wID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvcFNlYXJjaCgnJyk7XHJcbiAgICBzZXRTaG9wUGFnZSgxKTtcclxuICAgIGZldGNoU2hvcCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlU2lkZVNob3AgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlU2hvcE9wZW4oIXNpZGVTaG9wT3Blbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTaG9wUGFnZUNoYW5nZSA9IChlLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2hvcFBhZ2UodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvcFNlYXJjaENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTaG9wU2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldFNob3BQYWdlKDEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkVG9NYWludGVuYW5jZSA9IChzaG9wSXRlbSkgPT4ge1xyXG4gICAgLy8gQ2hlY2sgaWYgaXRlbSBhbHJlYWR5IGV4aXN0c1xyXG4gICAgY29uc3QgZXhpc3RpbmdJdGVtSW5kZXggPSBpdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLml0ZW1OYW1lLl9pZCA9PT0gc2hvcEl0ZW0uX2lkKTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdJdGVtSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIC8vIEl0ZW0gZXhpc3RzLCB1cGRhdGUgcXVhbnRpdHlcclxuICAgICAgY29uc3QgdXBkYXRlZEl0ZW1zID0gWy4uLml0ZW1zXTtcclxuICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSB1cGRhdGVkSXRlbXNbZXhpc3RpbmdJdGVtSW5kZXhdO1xyXG4gICAgICBjb25zdCBuZXdRdHkgPSBwYXJzZUludChjdXJyZW50SXRlbS5pdGVtUXR5KSArIDE7XHJcblxyXG4gICAgICB1cGRhdGVkSXRlbXNbZXhpc3RpbmdJdGVtSW5kZXhdID0ge1xyXG4gICAgICAgIC4uLmN1cnJlbnRJdGVtLFxyXG4gICAgICAgIGl0ZW1RdHk6IG5ld1F0eSxcclxuICAgICAgICBpdGVtQW1vdW50OiBNYXRoLnJvdW5kKChuZXdRdHkgKiBjdXJyZW50SXRlbS5pdGVtUmF0ZSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIHRvdGFsQW1vdW50OiBNYXRoLnJvdW5kKChuZXdRdHkgKiBjdXJyZW50SXRlbS5pdGVtUmF0ZSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIGRpc2NvdW50OiBNYXRoLnJvdW5kKChuZXdRdHkgKiBjdXJyZW50SXRlbS5pdGVtUmF0ZSAqIGN1cnJlbnRJdGVtLml0ZW1EaXNjb3VudCkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IChNYXRoLnJvdW5kKChuZXdRdHkgKiBjdXJyZW50SXRlbS5pdGVtUmF0ZSAqIGN1cnJlbnRJdGVtLml0ZW1EaXNjb3VudCkgKiAxMDApIC8gMTAwKSAvIDEwMCxcclxuICAgICAgICB0b3RhbENvc3Q6IE1hdGgucm91bmQoKG5ld1F0eSAqIGN1cnJlbnRJdGVtLml0ZW1Db3N0KSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgdG90YWxHZW5lcmFsZTogTWF0aC5yb3VuZCgoY3VycmVudEl0ZW0uaXRlbUNvc3QgKiBjdXJyZW50SXRlbS5pdGVtQnV5KSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgIH07XHJcbiAgICAgIFNldEl0ZW1zKHVwZGF0ZWRJdGVtcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJdGVtIGRvZXMgbm90IGV4aXN0LCBhZGQgbmV3XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICAgIF9pZDogc2hvcEl0ZW0uX2lkLFxyXG4gICAgICAgICAgaXRlbU5hbWU6IHNob3BJdGVtLml0ZW1OYW1lXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtRGVzY3JpcHRpb246IHNob3BJdGVtLml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgICAgaXRlbVF0eTogMSxcclxuICAgICAgICBpdGVtUmF0ZTogc2hvcEl0ZW0uaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgICBpdGVtQ29zdDogc2hvcEl0ZW0uaXRlbUNvc3RQcmljZSxcclxuICAgICAgICBpdGVtQW1vdW50OiBNYXRoLnJvdW5kKCgxICogc2hvcEl0ZW0uaXRlbVNlbGxpbmdQcmljZSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIHRvdGFsQW1vdW50OiBNYXRoLnJvdW5kKCgxICogc2hvcEl0ZW0uaXRlbVNlbGxpbmdQcmljZSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgICAgaXRlbUJ1eTogMSxcclxuICAgICAgICBpdGVtV2VpZ2h0OiBzaG9wSXRlbS53ZWlnaHQsXHJcbiAgICAgICAgdG90YWxHZW5lcmFsZTogTWF0aC5yb3VuZCgoc2hvcEl0ZW0uaXRlbUNvc3RQcmljZSAqIDEpICogMTAwKSAvIDEwMCxcclxuICAgICAgICB0b3RhbENvc3Q6IE1hdGgucm91bmQoKDEgKiBzaG9wSXRlbS5pdGVtQ29zdFByaWNlKSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgc3RvY2s6IHNob3BJdGVtLml0ZW1RdWFudGl0eSxcclxuICAgICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICAgIH1cclxuICAgICAgU2V0SXRlbXMoWy4uLml0ZW1zLCBuZXdJdGVtXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IENvbW1lbnRJbmZvID1cclxuICB7XHJcbiAgICBpZEluZm86IGlkLFxyXG4gICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIE1vZGlmaWVkJyxcclxuICAgIHJlYXNvblxyXG4gIH1cclxuICBjb25zdCBkYXRlQ29tbWVudCA9IGRheWpzKERhdGUubm93KCkpXHJcblxyXG4gIGNvbnN0IFtvcGVuMSwgc2V0T3BlbjFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuVXBkYXRlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbjEodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB7LyoqIEl0ZW0gc3RhcnQgKi8gfVxyXG4gIC8vIERhdGEgYWxyZWFkeSBmZXRjaGVkIGluIHRoZSBjb21iaW5lZCB1c2VFZmZlY3QgYWJvdmUuXHJcbiAgY29uc3Qgc2VydmljZUl0ZW0gPSAoSXRlbUluZm9ybWF0aW9uIHx8IFtdKS5maWx0ZXIoKHJvdykgPT4gcm93LnR5cGVJdGVtID09PSAnU2VydmljZXMnKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJdGVtID0gKGlkUm93LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gbmV3VmFsdWVcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgICBpdGVtTmFtZTogc2VsZWN0ZWRPcHRpb25zPy5pdGVtTmFtZSxcclxuICAgICAgfSxcclxuICAgICAgZGF0YTogc2VsZWN0ZWRPcHRpb25zPy5kYXRhLFxyXG4gICAgICBjb250ZW50VHlwZTogc2VsZWN0ZWRPcHRpb25zPy5jb250ZW50VHlwZSxcclxuICAgICAgaXRlbUNvc3Q6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbUNvc3RQcmljZSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgaXRlbVJhdGU6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgc3RvY2s6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbVF1YW50aXR5LFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUN1c3RvbWVyID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBjdXN0b21lci5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICBzZXRDdXN0b21lck5hbWUoe1xyXG4gICAgICBfaWQ6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICBjdXN0b21lck5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uQ3VzdG9tZXIsXHJcbiAgICAgIGFkZHJlc3M6IHNlbGVjdGVkT3B0aW9ucz8uYmlsbGluZ0FkZHJlc3MgKyAnICcgKyBzZWxlY3RlZE9wdGlvbnM/LmJpbGxpbmdDaXR5LFxyXG4gICAgICBwaG9uZTogc2VsZWN0ZWRPcHRpb25zPy5jdXN0b21lckNvbXBhbnlQaG9uZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyQ3VzdG9tZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXN0b21lck5hbWUobnVsbClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIGlkUm93KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGxpc3QgPSBbLi4uaXRlbXNdO1xyXG4gICAgY29uc3QgaSA9IGl0ZW1zLmZpbmRJbmRleChJdGVtID0+IEl0ZW0uaWRSb3cgPT09IGlkUm93KVxyXG4gICAgbGlzdFtpXVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgbGlzdFtpXVsndG90YWxBbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1RdHknXSAqIGxpc3RbaV1bJ2l0ZW1SYXRlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQ29zdCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbUNvc3QnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnZGlzY291bnQnXSA9IGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gKiBsaXN0W2ldWydpdGVtRGlzY291bnQnXTtcclxuICAgIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSA9IGxpc3RbaV1bJ2Rpc2NvdW50J10gLyAxMDA7XHJcbiAgICBsaXN0W2ldWydpdGVtQW1vdW50J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWyd0b3RhbEFtb3VudCddIC0gbGlzdFtpXVsncGVyY2VudGFnZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWyd0b3RhbEdlbmVyYWxlJ10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtQ29zdCddICogbGlzdFtpXVsnaXRlbUJ1eSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBTZXRJdGVtcyhsaXN0KTtcclxuICB9XHJcbiAgLy9hZGRJdGVtXHJcbiAgY29uc3QgYWRkSXRlbSA9ICgpID0+IHtcclxuICAgIFNldEl0ZW1zKFsuLi5pdGVtcywge1xyXG4gICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IFwiXCIsXHJcbiAgICAgICAgaXRlbU5hbWU6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQW1vdW50OiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfV0pO1xyXG4gIH1cclxuICBjb25zdCBhZGRJdGVtUm93ID0gKGkpID0+IHtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSB7XHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogXCJcIixcclxuICAgICAgICBpdGVtTmFtZTogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgIGl0ZW1Db3N0OiAwLFxyXG4gICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgIGl0ZW1CdXk6IDAsXHJcbiAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgIHRvdGFsR2VuZXJhbGU6IDAsXHJcbiAgICAgIHRvdGFsQ29zdDogMCxcclxuICAgICAgc3RvY2s6IDAsXHJcbiAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGUgPSBbLi4uaXRlbXNdO1xyXG4gICAgdXBkYXRlLnNwbGljZShpICsgMSwgMCwgbmV3SXRlbSk7XHJcbiAgICBTZXRJdGVtcyh1cGRhdGUpXHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1XaGl0ZVJvdyA9IChpKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICBuZXdEZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZSA9IFsuLi5pdGVtc107XHJcbiAgICB1cGRhdGUuc3BsaWNlKGkgKyAxLCAwLCBuZXdJdGVtKTtcclxuICAgIFNldEl0ZW1zKHVwZGF0ZSlcclxuICB9XHJcbiAgY29uc3QgYWRkSXRlbVdoaXRlID0gKCkgPT4ge1xyXG4gICAgU2V0SXRlbXMoWy4uLml0ZW1zLCB7XHJcbiAgICAgIG5ld0Rlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IFwiXCIsXHJcbiAgICAgICAgaXRlbU5hbWU6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQW1vdW50OiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfV0pO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24gPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgaXRlbU5hbWU6ICdlbXB0eSdcclxuICAgICAgfSxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBvblNlcnZpY2VIYW5kbGUgPSAoaWRJbmZvKSA9PiB7XHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93LmlkUm93ID09PSBpZEluZm8gPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaXRlbU91dDogcm93Lml0ZW1RdHlcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBbZW1wbG95ZWUsIHNldEVtcGxveWVlXSA9IHVzZVN0YXRlKFtdKVxyXG4gIC8vIERhdGEgYWxyZWFkeSBmZXRjaGVkIGluIHRoZSBjb21iaW5lZCB1c2VFZmZlY3QgYWJvdmUuXHJcbiAgY29uc3QgaGFuZGxlQ2xlYXJUZWNoID0gKCkgPT4ge1xyXG4gICAgc2V0VGVjaG5pY2lhbkFzc2lnbignJylcclxuICB9XHJcbiAgY29uc3QgZmlsdGVyRW1wbG95ZWUgPSBlbXBsb3llZS5maWx0ZXIoKHJvdykgPT4gcm93LmRlcGFydG1lbnQgPT09ICdURUNITklDSUFOJyAmJiByb3cuU3RhdHVzICE9PSAnRmlyZWQnIHx8IHJvdy5TdGF0dXMgIT09ICdSZXNpZ24nIHx8IHJvdy5TdGF0dXMgIT09ICdTdXNwZW5kZWQnKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VFbXBsb3llZSA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gZW1wbG95ZWUuZmluZCgob3B0aW9uKSA9PiBvcHRpb24gPT09IG5ld1ZhbHVlKVxyXG4gICAgc2V0VGVjaG5pY2lhbkFzc2lnbihzZWxlY3RlZE9wdGlvbnM/LmVtcGxveWVlTmFtZSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChyZXN1bHQpID0+IHtcclxuICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0l0ZW1zID0gWy4uLml0ZW1zXTtcclxuICAgIGNvbnN0IFtyZW1vdmVkXSA9IG5ld0l0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcclxuICAgIG5ld0l0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlbW92ZWQpO1xyXG4gICAgU2V0SXRlbXMobmV3SXRlbXMpXHJcbiAgfTtcclxuICBjb25zdCBkZWxldGVJdGVtID0gaWRSb3cgPT4ge1xyXG4gICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMuZmlsdGVyKChJdGVtKSA9PiBJdGVtLmlkUm93ICE9PSBpZFJvdykpO1xyXG4gIH07XHJcbiAgY29uc3QgZmlsdGVySXRlbUluZm9ybWF0aW9uID0gSXRlbUluZm9ybWF0aW9uLmZpbHRlcihvcHRpb24gPT4gIWl0ZW1zLmZpbmQoKHJvdykgPT4gb3B0aW9uLl9pZCA9PT0gcm93Lml0ZW1OYW1lPy5faWQgJiYgb3B0aW9uLnR5cGVJdGVtID09PSBcIkdvb2RzXCIpKVxyXG4gIHsvKiogSXRlbSBJbkZPICovIH1cclxuXHJcbiAgY29uc3QgW29wZW5BdXRvY29tcGxldGUyLCBzZXRPcGVuQXV0b2NvbXBsZXRlMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDcmVhdGVJdGVtID0gKG5ld0l0ZW0pID0+IHtcclxuICAgIHNldEl0ZW1JbmZvcm1hdGlvbihbLi4uSXRlbUluZm9ybWF0aW9uLCBuZXdJdGVtXSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU2hvd0F1dG9jb21wbGV0ZSA9IChpZFJvdykgPT4ge1xyXG4gICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IG51bGwsXHJcbiAgICAgICAgaXRlbU5hbWU6IHJvdy5pdGVtTmFtZS5pdGVtTmFtZVxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgIGl0ZW1Db3N0OiAwLFxyXG4gICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgIGl0ZW1CdXk6IDAsXHJcbiAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgIHRvdGFsR2VuZXJhbGU6IDAsXHJcbiAgICAgIHRvdGFsQ29zdDogMCxcclxuICAgICAgc3RvY2s6IDAsXHJcbiAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICB9IDogcm93KSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQxID0gKGl0ZW1zIHx8IFtdKS5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyBwYXJzZUZsb2F0KHJvdz8uaXRlbUFtb3VudCB8fCAwKSwgMClcclxuICAgIHNldFN1YlRvdGFsKHJlc3VsdDEudG9GaXhlZCgyKSlcclxuICAgIGxldCBuZXdUb3RhbCA9IE51bWJlcihyZXN1bHQxKSArIE51bWJlcih0b3RhbExhYm9yRmVlc0dlbmVyYWxlIHx8IDApXHJcbiAgICBzZXRUb3RhbEludm9pY2UobmV3VG90YWwpXHJcbiAgfSwgW2l0ZW1zLCB0b3RhbExhYm9yRmVlc0dlbmVyYWxlXSlcclxuXHJcbiAgY29uc3QgW29wZW5JdGVtVXBkYXRlLCBzZXRPcGVuSXRlbVVwZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lkSXRlbSwgc2V0SWRJdGVtXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5JdGVtVXBkYXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBzZXRPcGVuSXRlbVVwZGF0ZSh0cnVlKTtcclxuICAgIHNldElkSXRlbShpZCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZUl0ZW0xID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbkl0ZW1VcGRhdGUoZmFsc2UpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUl0ZW1VcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRPcGVuSXRlbVVwZGF0ZShmYWxzZSk7XHJcbiAgICBpZiAoaWRJdGVtKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWl0ZW0vJHtpZEl0ZW19YClcclxuICAgICAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93Lml0ZW1OYW1lPy5faWQgPT09IHJlcy5kYXRhLmRhdGEuX2lkID8ge1xyXG4gICAgICAgICAgLi4ucm93LFxyXG4gICAgICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICAgICAgX2lkOiByZXMuZGF0YS5kYXRhLl9pZCxcclxuICAgICAgICAgICAgaXRlbU5hbWU6IHJlcy5kYXRhLmRhdGEuaXRlbU5hbWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpdGVtRGVzY3JpcHRpb246IHJlcy5kYXRhLmRhdGEuaXRlbURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgaXRlbUNvc3Q6IHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSxcclxuICAgICAgICAgIGl0ZW1SYXRlOiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogcmVzLmRhdGEuZGF0YS5pdGVtUXVhbnRpdHksXHJcbiAgICAgICAgICB0b3RhbEFtb3VudDogcm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBkaXNjb3VudDogKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQsXHJcbiAgICAgICAgICBwZXJjZW50YWdlOiAoKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQpIC8gMTAwLFxyXG4gICAgICAgICAgaXRlbUFtb3VudDogKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAtICgoKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQpIC8gMTAwKSxcclxuICAgICAgICAgIHRvdGFsQ29zdDogcm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgICAgICB0b3RhbEdlbmVyYWxlOiByZXMuZGF0YS5kYXRhLml0ZW1Db3N0UHJpY2UgKiByb3cuaXRlbUJ1eVxyXG4gICAgICAgIH0gOiByb3cpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgey8qKiBJdGVtIEluRk8gRW5kICovIH1cclxuICBjb25zdCBbb3BlbkJhY2ssIHNldE9wZW5CYWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkJhY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuQmFjayh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQmFjayA9ICgpID0+IHtcclxuICAgIHNldE9wZW5CYWNrKGZhbHNlKTtcclxuICB9O1xyXG4gIHsvKiogTG9hZGluZyBTdGFydCAqLyB9XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTmF2aWdhdGVDb252ZXJ0SW52b2ljZSwgc2V0TG9hZGluZ09wZW5OYXZpZ2F0ZUNvbnZlcnRJbnZvaWNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgICBpZiAoYWRqdXN0bWVudE51bWJlciA+IDApIHtcclxuICAgICAgc2V0TG9hZGluZ09wZW5OYXZpZ2F0ZUNvbnZlcnRJbnZvaWNlKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgbmF2aWdhdGUoLTEpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEZWNpc2lvbiA9IChuYXZpZ2F0ZSkgPT4ge1xyXG4gICAgLy9OYXZpZ2F0ZSBCYXNlZCBvbiB0aCBEZWNpc2lvblxyXG4gICAgaWYgKG5hdmlnYXRlID09PSAncHJldmlvdXMnKSB7XHJcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgIH0gZWxzZSBpZiAobmF2aWdhdGUgPT09ICdzdGF5Jykge1xyXG4gICAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICB7LyoqIExvYWRpbmcgRW5kICovIH1cclxuXHJcbiAgbGV0IHN0YXR1cyA9ICcnXHJcbiAgaWYgKHN0YXR1c0luZm8gPT09ICdDbG9zZScpIHtcclxuICAgIGlmIChhZGp1c3RtZW50TnVtYmVyID4gMCkge1xyXG4gICAgICBzdGF0dXMgPSAnQ2xvc2UnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0dXMgPSAnUGVuZGluZydcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBpZiAoYWRqdXN0bWVudE51bWJlciA+IDApIHtcclxuICAgICAgc3RhdHVzID0gJ0Nsb3NlJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhdHVzID0gc3RhdHVzSW5mb1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBzZXJ2aWNlTmFtZSA9IGBNLSR7U3RyaW5nKHNlcnZpY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9YDtcclxuXHJcbiAgY29uc3QgW2hpZGVCYWNrLCBzZXRIaWRlQmFja10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQ29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogaWQsXHJcbiAgICAgIHBlcnNvbjogYCR7dXNlci5kYXRhLnVzZXJOYW1lfSBNb2RpZnkgTS0ke1N0cmluZyhzZXJ2aWNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfWAsXHJcbiAgICAgIHJlYXNvbixcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogZGF0ZUNvbW1lbnRcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbi9gLCBkYXRhKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgc2V0UmVhc29uKFwiXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGl0ZW1zV2l0aG91dERhdGEgPSBpdGVtcy5tYXAoKHsgZGF0YSwgY29udGVudFR5cGUsIC4uLnJlc3QgfSkgPT4gcmVzdCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBjdXN0b21lck5hbWUsXHJcbiAgICAgIHNlcnZpY2VEYXRlLFxyXG4gICAgICBhY3Rpb25UYWtlbixcclxuICAgICAgaXRlbURlc2NyaXB0aW9uSW5mbyxcclxuICAgICAgd2FycmFudHksXHJcbiAgICAgIGRlZmVjdERlc2NyaXB0aW9uLFxyXG4gICAgICBicmFuZCxcclxuICAgICAgbW9kZWwsIHRlY2huaWNpYW5Bc3NpZ24sXHJcbiAgICAgIHNlcnZpY2VOdW1iZXIsXHJcbiAgICAgIHNlcnZpY2VOYW1lLFxyXG4gICAgICBzZXJpYWxObyxcclxuICAgICAgc3RhdHVzLCBhY3Rpb24sXHJcbiAgICAgIGl0ZW1zOiBpdGVtc1dpdGhvdXREYXRhLCBhZGp1c3RtZW50TnVtYmVyLCB0b3RhbEludm9pY2UsIHN1YlRvdGFsLFxyXG4gICAgICBub3RlLCB0b3RhbExhYm9yRmVlcywgbGFib3JQZXJjZW50YWdlLCB0b3RhbERpc2NvdW50LCBsYWJvckRpc2NvdW50LCBsYWJvclF0eSwgdG90YWxMYWJvckZlZXNHZW5lcmFsZSwgdXBkYXRlUzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gRmV0Y2ggZnJlc2ggc3RhdGUgZnJvbSBzZXJ2ZXJcclxuICAgICAgY29uc3QgY3VycmVudFJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1tYWludGVuYW5jZS8ke2lkfWApO1xyXG4gICAgICBjb25zdCBjdXJyZW50TWFpbnRlbmFuY2UgPSBjdXJyZW50UmVzLmRhdGEuZGF0YTtcclxuXHJcbiAgICAgIC8vIE1lcmdlIGxvY2FsIGNoYW5nZXMgd2l0aCBzZXJ2ZXIgc3RhdGVcclxuICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSB7XHJcbiAgICAgICAgLi4uY3VycmVudE1haW50ZW5hbmNlLFxyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgdXBkYXRlUzogZmFsc2VcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1tYWludGVuYW5jZS8ke2lkfWAsIHVwZGF0ZWREYXRhKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZUNyZWF0ZUNvbW1lbnQoKTtcclxuICAgICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBtYWludGVuYW5jZTpcIiwgZXJyb3IpO1xyXG4gICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIGNvbnN0IFtzZWFyY2gyLCBzZXRTZWFyY2gyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2gyID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgIHNldFNlYXJjaDIodmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IG5ld0FycmF5MiA9IHNlYXJjaDIgIT09ICcnID8gaXRlbXMuZmlsdGVyKChJdGVtKSA9PlxyXG4gICAgSXRlbS5pdGVtTmFtZSAmJiBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoMi50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgSXRlbS5pdGVtRGVzY3JpcHRpb24gJiYgSXRlbS5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICYmIEl0ZW0ubmV3RGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpXHJcbiAgKSA6IGl0ZW1zXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHVwZGF0ZSBtYWludGVuYW5jZVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBoaWRlQmFjayA9PT0gJ3RydWUnID9cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+IDpcclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5CYWNrfT5cclxuICAgICAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPn1cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNpZGVCYXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2lkZUJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaDEgLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDQgfX0gPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPcGVuVXBkYXRlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgcG9zaXRpb246ICdmaXhlZCcsIHpJbmRleDogMSwgZmxvYXQ6ICdyaWdodCcsIHJpZ2h0OiAnLTVweCcsIHRvcDogJzQwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkFkZFwiIHBsYWNlbWVudD1cInRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkFkZFwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbVdoaXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2dyYXknLCBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIklURU0gTElTVFwiIHBsYWNlbWVudD1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNpZGVTaG9wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJywgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9IGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5Kb2IgQ2FyZCBJbmZvPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyTmFtZSAhPT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3RvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGVhckN1c3RvbWVyfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjdXN0b21lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLkN1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZUN1c3RvbWVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiQ3VzdG9tZXIgTmFtZVwiIHJlcXVpcmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzZXJ2aWNlTnVtYmVyXCI+U2VydmljZSBPcmRlciBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3NlcnZpY2VOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3NlcnZpY2VOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTZXJ2aWNlIE9yZGVyIE51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlcnZpY2VOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VydmljZU51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPk08L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzZXJ2aWNlRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU2VydmljZSBEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhzZXJ2aWNlRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRTZXJ2aWNlRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd2aXNpdERhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1Zpc2l0IERhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKHZpc2l0RGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5BcHBsaWFuY2UgSW5mbzwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2l0ZW1EZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdJdGVtIERlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1EZXNjcmlwdGlvbkluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1EZXNjcmlwdGlvbkluZm8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nYnJhbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdicmFuZCdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdCcmFuZCdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXticmFuZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QnJhbmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbW9kZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdtb2RlbCdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdNb2RlbCdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TW9kZWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nc2VyaWFsTm8nXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzZXJpYWxObydcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTZXJpYWwgTm8nXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VyaWFsTm99XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlcmlhbE5vKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J3dhcnJhbnR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nd2FycmFudHknXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nV2FycmFudHkgU3RhdHVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dhcnJhbnR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRXYXJyYW50eShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdkZWZlY3REZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2RlZmVjdERlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RlZmVjdCBEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZWZlY3REZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVmZWN0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5UZWNobmljaWFuIEFzc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGVjaG5pY2lhbkFzc2lnbiAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1RlY2huaWNpYW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGVjaG5pY2lhbkFzc2lnbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGVhclRlY2h9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVyRW1wbG95ZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5lbXBsb3llZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfT57b3B0aW9uLmVtcGxveWVlTmFtZX08L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiVGVjaG5pY2lhblwiIHJlcXVpcmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZUVtcGxveWVlKG5ld1ZhbHVlID8gbmV3VmFsdWUgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5BY3Rpb24gVGFrZW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImFjdGlvblwiPkFjdGlvbjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0aW9uICE9PSB1bmRlZmluZWQgPyBhY3Rpb24gOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBY3Rpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJhY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJDYXJyeS1JblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkNhcnJ5LUluXCI+Q2FycnktSW48L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJDYXJyeS1PdXRcIj5DYXJyeS1PdXQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJJbi1Ib21lXCIgZGlzYWJsZWQ9e2FjdGlvbiA9PT0gJ0NhcnJ5LUluJyB8fCBhY3Rpb24gPT09ICdDYXJyeS1PdXQnfT5Jbi1Ib21lPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2FjdGlvblRha2VuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYWN0aW9uVGFrZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQWN0aW9uIFRha2VuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjdGlvblRha2VufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBY3Rpb25UYWtlbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdub3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdOb3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5vdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5GaW5hbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3NlYXJjaDInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2gyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZUluZm8xMCcgc3R5bGU9e3sgbWFyZ2luTGVmdDogJy0zMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RvY2stQTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRpc2NvdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRyb3BwYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3QXJyYXkyLm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e0l0ZW0uaWRSb3d9IGRyYWdnYWJsZUlkPXtgZHJvcHBhYmxlJHtJdGVtLmlkUm93fWB9IGluZGV4PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGVkID0gc2VydmljZUl0ZW0uZmluZCgocm93MSkgPT4gcm93MS5faWQgPT09IEl0ZW0uaXRlbU5hbWUuX2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NX0+PFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25ld0Rlc2NyaXB0aW9uJyBpZD0nbmV3RGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0ubmV3RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBoZWlnaHQ6ICcxMDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5faWQgfHwgSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICczMHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSWQ9e0l0ZW0uaXRlbU5hbWU/Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbERhdGE9e0l0ZW0uZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFR5cGU9e0l0ZW0uY29udGVudFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGhpZGRlbj17SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPT09ICdlbXB0eScgOiAnJ30gc3g9e3sgZm9udFNpemU6ICcyM3B4JyB9fT57SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUudG9VcHBlckNhc2UoKSA6ICcnfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EZXNjcmlwdGlvbicgaWQ9J2l0ZW1EZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMzAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3RvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLml0ZW1OYW1lLl9pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiRWRpdFwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3Blbkl0ZW1VcGRhdGUoSXRlbS5pdGVtTmFtZS5faWQpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVySXRlbUluZm9ybWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNmMmYyZjInIH19PntvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fSB7Li4ucGFyYW1zfSByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucywgeyBpbnB1dFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbUJyYW5kLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZUl0ZW0oSXRlbS5pZFJvdywgbmV3VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgbGVmdDogJzAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMihlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNycgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREIE5FVyBJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NzBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZURlc2NyaXB0aW9uKEl0ZW0uaWRSb3cpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0b2NrJyBpZD0nc3RvY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5zdG9ja31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1RdHknIGlkPSdpdGVtUXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1RdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUmF0ZScgaWQ9J2l0ZW1SYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVJhdGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EaXNjb3VudCcgaWQ9J2l0ZW1EaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMSB0byA1ICUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPSdhbW91bnRUb3RhbEludm9pY2UnPntJdGVtLml0ZW1BbW91bnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNvbXBsZXRlZFwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaGlkZGVuPXtwYXJzZUZsb2F0KEl0ZW0uaXRlbU91dCkgPT09IHBhcnNlRmxvYXQoSXRlbS5pdGVtUXR5KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2VydmljZUhhbmRsZShJdGVtLmlkUm93KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIk5ldy1Sb3dcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gYWRkSXRlbVJvdyhpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkJsYW5rLVJvd1wiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtV2hpdGVSb3coaSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2FkanVzdG1lbnQnIGlkPSdhZGp1c3RtZW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGp1c3RtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZGp1c3RtZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nbGFib3JRdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aW9uID09PSB1bmRlZmluZWQgfHwgYWN0aW9uID09PSAnQ2FycnktSW4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdsYWJvciBRVFknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdsYWJvclF0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYWJvclF0eSAhPT0gdW5kZWZpbmVkID8gbGFib3JRdHkgOiAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMYWJvclF0eShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzE1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdhZGp1c3RtZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGlvbiA9PT0gdW5kZWZpbmVkIHx8IGFjdGlvbiA9PT0gJ0NhcnJ5LUluJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nbGFib3IgZmVlcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2FkanVzdG1lbnROdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRqdXN0bWVudE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRqdXN0bWVudE51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzE1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3Rpb24gPT09IHVuZGVmaW5lZCB8fCBhY3Rpb24gPT09ICdDYXJyeS1Jbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdsYWJvckRpc2NvdW50JyBpZD0nbGFib3JEaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFib3JEaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFib3JEaXNjb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGlzY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JDwvc3Bhbj48c3Bhbj57dG90YWxMYWJvckZlZXNHZW5lcmFsZS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9PlRvdGFsIEdlbmVyYWxlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuPiQ8L3NwYW4+PHNwYW4+e3RvdGFsSW52b2ljZS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5CYWNrfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlQmFja31cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzeD17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EbyB5b3Ugd2FudCB0byBzdG9wIHVwZGF0aW5nIHNlcnZpY2UgPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlIDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj4gSWYgeW91IHN0b3AgdXBkYXRpbmcgd2l0aG91dCBzYXZpbmcsIGFsbCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvTWFpbnRlbmFuY2VWaWV3QWRtaW4nKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19Pk5vPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBGYWlsZWQgdG8gU2F2ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuMX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVwZGF0ZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICBSZWFzb24gT2YgVXBkYXRpbmdcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdjb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgbmFtZT0nY29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlYXNvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk5hdmlnYXRlQ29udmVydEludm9pY2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udmVydGVkID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3ByZXZpb3VzJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkRhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5LERvIHlvdSB3YW50IHRvIGNvbnZlcnQgdG8gYW4gaW52b2ljZSA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZSA6PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+IFlvdSBzaG91bGQgY29udmVydCB0aGUgc2VydmljZSBvcmRlciB0byBpbnZvaWNlIHdoZW4gaXQgY2xvc2VkPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdwcmV2aW91cycpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL01haW50ZW5hbmNlQ29udmVydFRvSW52b2ljZS8ke2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPkNvbnZlcnQgVG8gSW52b2ljZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBwYWRkaW5nOiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPEl0ZW1Gb3JtVmlldzIgb25DcmVhdGVPcHRpb249e2hhbmRsZUNyZWF0ZUl0ZW19IG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbkl0ZW1VcGRhdGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VVcGRhdGVJdGVtMX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUyLCB3aWR0aDogODAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VVcGRhdGVJdGVtMX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzYwMHB4JywgcGFkZGluZzogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgIDxJdGVtVXBkYXRlVmlldzIgb25DbG9zZT17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfSBpZD17aWRJdGVtfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiogU2lkZSBTaG9wIERyYXdlciAqL31cclxuICAgICAgPFN3aXBlYWJsZURyYXdlclxyXG4gICAgICAgIGFuY2hvcj1cInJpZ2h0XCJcclxuICAgICAgICBvcGVuPXtzaWRlU2hvcE9wZW59XHJcbiAgICAgICAgb25DbG9zZT17dG9nZ2xlU2lkZVNob3B9XHJcbiAgICAgICAgb25PcGVuPXsoKSA9PiBzZXRTaWRlU2hvcE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgUGFwZXJQcm9wcz17e1xyXG4gICAgICAgICAgc3g6IHsgd2lkdGg6ICc1MDBweCcsIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjUnLCBwYWRkaW5nOiAnMjBweCcgfSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYj17Mn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgU2VsZWN0IEl0ZW0gZnJvbSBTaG9wXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaWRlU2hvcH0+XHJcbiAgICAgICAgICAgIDxDbG9zZSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG1iPXsyfT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoIFNob3BcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c2hvcFNlYXJjaH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNob3BTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlUmVmcmVzaFNob3B9IGNvbG9yPVwicHJpbWFyeVwiIHN4PXt7IG1sOiAxIH19PlxyXG4gICAgICAgICAgICA8UmVmcmVzaCAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICB7c2hvcExvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsIG92ZXJmbG93WTogJ2F1dG8nLCBtYXhIZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTgwcHgpJyB9fT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICB7c2hvcEl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2BkYXRhOiR7aXRlbS5jb250ZW50VHlwZX07YmFzZTY0LCR7aXRlbS5kYXRhfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5pdGVtTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgb2JqZWN0Rml0OiAnY29udGFpbicsIHBhZGRpbmc6ICc1cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IGZsZXhHcm93OiAxLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pdGVtTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRkMgeyhpdGVtLml0ZW1TZWxsaW5nUHJpY2UgKiByYXRlKT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwicHJpbWFyeVwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCB7aXRlbS5pdGVtU2VsbGluZ1ByaWNlPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBkaXNwbGF5PVwiYmxvY2tcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvY2s6IHtpdGVtLml0ZW1RdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUb01haW50ZW5hbmNlKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogJzVweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtdD17Mn0+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgIGNvdW50PXtzaG9wVG90YWxQYWdlc31cclxuICAgICAgICAgICAgICAgIHBhZ2U9e3Nob3BQYWdlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNob3BQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1N3aXBlYWJsZURyYXdlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbnRlbmFuY2VVcGRhdGVWaWV3XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uL2FwaUNvbmZpZyc7XG5cbmNvbnN0IEl0ZW1UaHVtYm5haWwgPSAoeyBpdGVtSWQsIGluaXRpYWxEYXRhLCBpbml0aWFsVHlwZSB9KSA9PiB7XG4gIGNvbnN0IFtzcmMsIHNldFNyY10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoSW1hZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAvLyAxLiBDaGVjayBmb3IgaW5pdGlhbERhdGEgKHBhc3NlZCBmcm9tIHNlYXJjaC9zaG9wKVxuICAgICAgaWYgKGluaXRpYWxEYXRhICYmIGluaXRpYWxUeXBlICYmIGluaXRpYWxEYXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGluaXRpYWxUeXBlICE9PSBcInVuZGVmaW5lZFwiICYmIGluaXRpYWxEYXRhICE9PSBcIm51bGxcIikge1xuICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxEYXRhID09PSAnc3RyaW5nJyAmJiBpbml0aWFsRGF0YS5sZW5ndGggPiA1MCkge1xuICAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGFscmVhZHkgYSBkYXRhIFVSTFxuICAgICAgICAgICBpZiAoaW5pdGlhbERhdGEuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgICBzZXRTcmMoaW5pdGlhbERhdGEpO1xuICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRTcmMoYGRhdGE6JHtpbml0aWFsVHlwZX07YmFzZTY0LCR7aW5pdGlhbERhdGF9YCk7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxEYXRhLmRhdGEpIHtcbiAgICAgICAgICAgLy8gSGFuZGxlIGJ1ZmZlciBvYmplY3QgaWYgaXQncyBub3QgY29udmVydGVkIHRvIHN0cmluZyB5ZXRcbiAgICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoaW5pdGlhbERhdGEuZGF0YSk7XG4gICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBpbml0aWFsVHlwZSB9KTtcbiAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHNldFNyYyhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAyLiBGYWxsYmFjayB0byBmZXRjaCBpZiBubyBpbml0aWFsIGRhdGEgb3IgaWYgaXQgd2FzIGludmFsaWRcbiAgICAgIGlmICghaXRlbUlkIHx8IGl0ZW1JZCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBpdGVtSWQgPT09IFwibnVsbFwiKSB7XG4gICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2l0ZW1JZH1gKTtcbiAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEgJiYgcmVzLmRhdGEuZGF0YS5kYXRhKSB7XG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkocmVzLmRhdGEuZGF0YS5kYXRhLmRhdGEpO1xuICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiByZXMuZGF0YS5kYXRhLmNvbnRlbnRUeXBlIH0pO1xuICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHNldFNyYyhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgb25saW5lIGltYWdlOlwiLCBlcnIpO1xuICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaEltYWdlKCk7XG4gIH0sIFtpdGVtSWQsIGluaXRpYWxEYXRhLCBpbml0aWFsVHlwZV0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8QXZhdGFyXG4gICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICBzcmM9e3NyY31cbiAgICAgIHN4PXt7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MCwgYmFja2dyb3VuZENvbG9yOiAnI2YwZjBmMCcsIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyB9fVxuICAgID5cbiAgICAgIHshc3JjICYmIDxTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gc3g9e3sgZm9udFNpemU6IDQwLCBjb2xvcjogJyM5OTknIH19IC8+fVxuICAgIDwvQXZhdGFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVRodW1ibmFpbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3MvU2lkZWJhck5ldy5zY3NzJ1xyXG5pbXBvcnQgeyBPdXRsZXQsIE5hdkxpbmssIExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IERhc2hib2FyZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgUGVybUlkZW50aXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Blcm1JZGVudGl0eSc7XHJcbmltcG9ydCBMaXN0QWx0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xpc3RBbHQnO1xyXG5pbXBvcnQgRGVzY3JpcHRpb25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgUmVjZWlwdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZWNlaXB0JztcclxuaW1wb3J0IE1vdmluZ0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3ZpbmcnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3MnO1xyXG5pbXBvcnQgSW5zZXJ0RHJpdmVGaWxlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0luc2VydERyaXZlRmlsZSc7XHJcbmltcG9ydCBSZXN0b3JlUGFnZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXN0b3JlUGFnZSc7XHJcbmltcG9ydCBSZXF1ZXN0UXVvdGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUmVxdWVzdFF1b3RlJztcclxuaW1wb3J0IE1vbmV0aXphdGlvbk9uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vbmV0aXphdGlvbk9uJztcclxuaW1wb3J0IEVuZ2luZWVyaW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VuZ2luZWVyaW5nJztcclxuaW1wb3J0IHsgRXhwbGljaXQsIFNob3BwaW5nQmFnT3V0bGluZWQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IFJvb21QcmVmZXJlbmNlc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Sb29tUHJlZmVyZW5jZXMnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbUJ1dHRvbiwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQsIG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFBheW1lbnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGF5bWVudCc7XHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3JlVmVydCc7XHJcbmZ1bmN0aW9uIFNpZGViYXJEYXNoMSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8RGFzaGJvYXJkSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhc2hib2FyZFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UGVybUlkZW50aXR5SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkN1c3RvbWVyXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPExpc3RBbHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiU3RvcmVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlcXVlc3RRdW90ZUljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJRdW90YXRpb25cIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEZXNjcmlwdGlvbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbnZvaWNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9uZXRpemF0aW9uT25JY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGF5bWVudFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFNob3BwaW5nQmFnT3V0bGluZWQgLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEYWlseSBFeHBlbnNlc1wiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ICA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxSb29tUHJlZmVyZW5jZXNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHJvamVjdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlY2VpcHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHVyY2hhc2VzIFJlcXVlc3RcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgPEVuZ2luZWVyaW5nSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk1haW50ZW5hbmNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTW9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJEYXNoMSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2gxIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkRlbGV0ZUljb24iLCJNZW51SXRlbSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiUGFwZXIiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJUeXBvZ3JhcGh5Iiwic3R5bGVkIiwiQm94IiwiQXV0b2NvbXBsZXRlIiwiTW9kYWwiLCJCYWNrZHJvcCIsIlRhYmxlQ29udGFpbmVyIiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiRGl2aWRlciIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIlBhZ2luYXRpb24iLCJCdXR0b24iLCJTd2lwZWFibGVEcmF3ZXIiLCJBdmF0YXIiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJBZGQiLCJBcnJvd1Vwd2FyZE91dGxpbmVkIiwiQ2hlY2siLCJEcmFnSW5kaWNhdG9yUm91bmRlZCIsIkVkaXQiLCJSZWZyZXNoIiwiUmVtb3ZlQ2lyY2xlT3V0bGluZSIsIkVORFBPSU5UX1VSTCIsIlNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiIsInY0IiwiTmF2TGluayIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsIkFycm93QmFjayIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2FkZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiRGVsZXRlIiwiZGF5anMiLCJDbG9zZSIsIkl0ZW1Gb3JtVmlldzIiLCJJdGVtVXBkYXRlVmlldzIiLCJEcmFnRHJvcENvbnRleHQiLCJEcmFnZ2FibGUiLCJEcm9wcGFibGUiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJJdGVtVGh1bWJuYWlsIiwiTGlnaHRUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJCbGFja1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIlZpZXdUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY3Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjgiLCJwb3NpdGlvbiIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsInN0eWxlIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJzdHlsZTIiLCJNYWludGVuYW5jZVVwZGF0ZVZpZXciLCJfdXNlUGFyYW1zIiwiaWQiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmOSIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VydmljZURhdGUiLCJzZXRTZXJ2aWNlRGF0ZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidmlzaXREYXRlIiwic2V0VmlzaXREYXRlIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJpdGVtRGVzY3JpcHRpb25JbmZvIiwic2V0SXRlbURlc2NyaXB0aW9uSW5mbyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiYnJhbmQiLCJzZXRCcmFuZCIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwibW9kZWwiLCJzZXRNb2RlbCIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsInN0YXR1c0luZm8iLCJzZXRTdGF0dXNJbmZvIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsIndhcnJhbnR5Iiwic2V0V2FycmFudHkiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiZGVmZWN0RGVzY3JpcHRpb24iLCJzZXREZWZlY3REZXNjcmlwdGlvbiIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJhY3Rpb25UYWtlbiIsInNldEFjdGlvblRha2VuIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsImFjdGlvbiIsInNldEFjdGlvbiIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJzZXJpYWxObyIsInNldFNlcmlhbE5vIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsIkl0ZW1JbmZvcm1hdGlvbiIsInNldEl0ZW1JbmZvcm1hdGlvbiIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJzdWJUb3RhbCIsInNldFN1YlRvdGFsIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsInRvdGFsSW52b2ljZSIsInNldFRvdGFsSW52b2ljZSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJhZGp1c3RtZW50Iiwic2V0QWRqdXN0bWVudCIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJhZGp1c3RtZW50TnVtYmVyIiwic2V0QWRqdXN0bWVudE51bWJlciIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJsYWJvclF0eSIsInNldExhYm9yUXR5IiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsImxhYm9yRGlzY291bnQiLCJzZXRMYWJvckRpc2NvdW50IiwidG90YWxMYWJvckZlZXMiLCJ0b3RhbERpc2NvdW50IiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwibGFib3JQZXJjZW50YWdlIiwidG90YWxMYWJvckZlZXNHZW5lcmFsZSIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJzZXJ2aWNlTnVtYmVyIiwic2V0U2VydmljZU51bWJlciIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJpdGVtcyIsIlNldEl0ZW1zIiwiX3VzZVN0YXRlMzkiLCJfdXNlU3RhdGU0MCIsIm5vdGUiLCJzZXROb3RlIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsInRlY2huaWNpYW5Bc3NpZ24iLCJzZXRUZWNobmljaWFuQXNzaWduIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsImN1c3RvbWVyTmFtZSIsInNldEN1c3RvbWVyTmFtZSIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJjdXN0b21lciIsInNldEN1c3RvbWVyIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsInJlYXNvbiIsInNldFJlYXNvbiIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJjb252ZXJ0ZWQiLCJzZXRDb252ZXJ0ZWQiLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwic2lkZVNob3BPcGVuIiwic2V0U2lkZVNob3BPcGVuIiwiX3VzZVN0YXRlNTMiLCJfdXNlU3RhdGU1NCIsInNob3BJdGVtcyIsInNldFNob3BJdGVtcyIsIl91c2VTdGF0ZTU1IiwiX3VzZVN0YXRlNTYiLCJzaG9wUGFnZSIsInNldFNob3BQYWdlIiwiX3VzZVN0YXRlNTciLCJfdXNlU3RhdGU1OCIsInNob3BTZWFyY2giLCJzZXRTaG9wU2VhcmNoIiwiX3VzZVN0YXRlNTkiLCJfdXNlU3RhdGU2MCIsInNob3BUb3RhbFBhZ2VzIiwic2V0U2hvcFRvdGFsUGFnZXMiLCJfdXNlU3RhdGU2MSIsIl91c2VTdGF0ZTYyIiwic2hvcExvYWRpbmciLCJzZXRTaG9wTG9hZGluZyIsIl91c2VTdGF0ZTYzIiwiX3VzZVN0YXRlNjQiLCJyYXRlIiwic2V0UmF0ZSIsImZldGNoRGF0YSIsIl9yZWYwIiwiX3lpZWxkJFByb21pc2UkYWxsIiwiUHJvbWlzZSIsImFsbCIsIl95aWVsZCRQcm9taXNlJGFsbDIiLCJyZXNNYWludGVuYW5jZSIsInJlc0l0ZW0iLCJyZXNDdXN0b21lciIsInJlc0VtcGxveWVlIiwicmVzUmF0ZSIsIm1EYXRhIiwiQ29udmVydGVkIiwic3RhdHVzIiwicmV2ZXJzZSIsInNldEVtcGxveWVlIiwibGVuZ3RoIiwiX3Jlc1JhdGUkZGF0YSIsImZldGNoU2hvcCIsIl9yZWYxIiwibWFwIiwicm93IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidG90YWxQYWdlcyIsImZpbHRlciIsInR5cGVJdGVtIiwiaGFuZGxlUmVmcmVzaFNob3AiLCJ0b2dnbGVTaWRlU2hvcCIsImhhbmRsZVNob3BQYWdlQ2hhbmdlIiwiZSIsInZhbHVlIiwiaGFuZGxlU2hvcFNlYXJjaENoYW5nZSIsInRhcmdldCIsImhhbmRsZUFkZFRvTWFpbnRlbmFuY2UiLCJzaG9wSXRlbSIsImV4aXN0aW5nSXRlbUluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsIml0ZW1OYW1lIiwiX2lkIiwidXBkYXRlZEl0ZW1zIiwiY3VycmVudEl0ZW0iLCJuZXdRdHkiLCJwYXJzZUludCIsIml0ZW1RdHkiLCJpdGVtQW1vdW50IiwiTWF0aCIsInJvdW5kIiwiaXRlbVJhdGUiLCJ0b3RhbEFtb3VudCIsImRpc2NvdW50IiwiaXRlbURpc2NvdW50IiwicGVyY2VudGFnZSIsInRvdGFsQ29zdCIsIml0ZW1Db3N0IiwidG90YWxHZW5lcmFsZSIsIml0ZW1CdXkiLCJuZXdJdGVtIiwiaWRSb3ciLCJpdGVtRGVzY3JpcHRpb24iLCJpdGVtU2VsbGluZ1ByaWNlIiwiaXRlbUNvc3RQcmljZSIsIml0ZW1XZWlnaHQiLCJ3ZWlnaHQiLCJzdG9jayIsIml0ZW1RdWFudGl0eSIsIml0ZW1PdXQiLCJuZXdJdGVtT3V0IiwiQ29tbWVudEluZm8iLCJpZEluZm8iLCJwZXJzb24iLCJkYXRlQ29tbWVudCIsIkRhdGUiLCJub3ciLCJfdXNlU3RhdGU2NSIsIl91c2VTdGF0ZTY2Iiwib3BlbjEiLCJzZXRPcGVuMSIsImhhbmRsZU9wZW5VcGRhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlVXBkYXRlIiwic2VydmljZUl0ZW0iLCJoYW5kbGVDaGFuZ2VJdGVtIiwibmV3VmFsdWUiLCJzZWxlY3RlZE9wdGlvbnMiLCJjb250ZW50VHlwZSIsImhhbmRsZUNoYW5nZUN1c3RvbWVyIiwiZmluZCIsIm9wdGlvbiIsIkN1c3RvbWVyIiwiYWRkcmVzcyIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0NpdHkiLCJwaG9uZSIsImN1c3RvbWVyQ29tcGFueVBob25lIiwiaGFuZGxlQ2xlYXJDdXN0b21lciIsImhhbmRsZUNoYW5nZSIsIl9lJHRhcmdldCIsIm5hbWUiLCJsaXN0IiwiaSIsIkl0ZW0iLCJhZGRJdGVtIiwiYWRkSXRlbVJvdyIsInVwZGF0ZSIsInNwbGljZSIsImFkZEl0ZW1XaGl0ZVJvdyIsIm5ld0Rlc2NyaXB0aW9uIiwiYWRkSXRlbVdoaXRlIiwiaGFuZGxlU2hvd0F1dG9jb21wbGV0ZURlc2NyaXB0aW9uIiwib25TZXJ2aWNlSGFuZGxlIiwiX3VzZVN0YXRlNjciLCJfdXNlU3RhdGU2OCIsImVtcGxveWVlIiwiaGFuZGxlQ2xlYXJUZWNoIiwiZmlsdGVyRW1wbG95ZWUiLCJkZXBhcnRtZW50IiwiU3RhdHVzIiwiaGFuZGxlQ2hhbmdlRW1wbG95ZWUiLCJoYW5kbGVEcmFnRW5kIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJuZXdJdGVtcyIsIl9uZXdJdGVtcyRzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsIl9uZXdJdGVtcyRzcGxpY2UyIiwicmVtb3ZlZCIsImRlbGV0ZUl0ZW0iLCJmaWx0ZXJJdGVtSW5mb3JtYXRpb24iLCJfcm93JGl0ZW1OYW1lIiwiX3VzZVN0YXRlNjkiLCJfdXNlU3RhdGU3MCIsIm9wZW5BdXRvY29tcGxldGUyIiwic2V0T3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlQ3JlYXRlSXRlbSIsImhhbmRsZVNob3dBdXRvY29tcGxldGUiLCJyZXN1bHQxIiwicmVkdWNlIiwic3VtIiwidG9GaXhlZCIsIm5ld1RvdGFsIiwiTnVtYmVyIiwiX3VzZVN0YXRlNzEiLCJfdXNlU3RhdGU3MiIsIm9wZW5JdGVtVXBkYXRlIiwic2V0T3Blbkl0ZW1VcGRhdGUiLCJfdXNlU3RhdGU3MyIsIl91c2VTdGF0ZTc0IiwiaWRJdGVtIiwic2V0SWRJdGVtIiwiaGFuZGxlT3Blbkl0ZW1VcGRhdGUiLCJfcmVmMTAiLCJfeCIsImhhbmRsZUNsb3NlVXBkYXRlSXRlbTEiLCJoYW5kbGVDbG9zZUl0ZW1VcGRhdGUiLCJfcmVmMTEiLCJfcm93JGl0ZW1OYW1lMiIsIl91c2VTdGF0ZTc1IiwiX3VzZVN0YXRlNzYiLCJvcGVuQmFjayIsInNldE9wZW5CYWNrIiwiaGFuZGxlT3BlbkJhY2siLCJoYW5kbGVDbG9zZUJhY2siLCJfdXNlU3RhdGU3NyIsIl91c2VTdGF0ZTc4IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGU3OSIsIl91c2VTdGF0ZTgwIiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU4MSIsIl91c2VTdGF0ZTgyIiwibG9hZGluZ09wZW5OYXZpZ2F0ZUNvbnZlcnRJbnZvaWNlIiwic2V0TG9hZGluZ09wZW5OYXZpZ2F0ZUNvbnZlcnRJbnZvaWNlIiwiX3VzZVN0YXRlODMiLCJfdXNlU3RhdGU4NCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbG9zZUVycm9yIiwiaGFuZGxlRGVjaXNpb24iLCJ3aW5kb3ciLCJoaXN0b3J5IiwiYmFjayIsInNlcnZpY2VOYW1lIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJfdXNlU3RhdGU4NSIsIl91c2VTdGF0ZTg2IiwiaGlkZUJhY2siLCJzZXRIaWRlQmFjayIsImhhbmRsZUNyZWF0ZUNvbW1lbnQiLCJfcmVmMTIiLCJkYXRlTm90aWZpY2F0aW9uIiwicG9zdCIsImxvZyIsImhhbmRsZVN1Ym1pdCIsIl9yZWYxMyIsIml0ZW1zV2l0aG91dERhdGEiLCJfcmVmMTQiLCJyZXN0IiwiX2V4Y2x1ZGVkNCIsInVwZGF0ZVMiLCJjdXJyZW50UmVzIiwiY3VycmVudE1haW50ZW5hbmNlIiwidXBkYXRlZERhdGEiLCJwdXQiLCJfeDIiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiX3VzZVN0YXRlODciLCJfdXNlU3RhdGU4OCIsInNlYXJjaDIiLCJzZXRTZWFyY2gyIiwiaGFuZGxlU2VhcmNoMiIsIm5ld0FycmF5MiIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJvblN1Ym1pdCIsImZsb2F0IiwicmlnaHQiLCJ0aXRsZSIsInBsYWNlbWVudCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJ4cyIsInRleHRBbGlnbiIsImRpc2FibGVDbGVhcmFibGUiLCJvcHRpb25zIiwiZ2V0T3B0aW9uTGFiZWwiLCJvbkNoYW5nZSIsInJlbmRlcklucHV0IiwicGFyYW1zIiwibGFiZWwiLCJyZXF1aXJlZCIsImh0bWxGb3IiLCJkaXNhYmxlZCIsInN0YXJ0QWRvcm5tZW50IiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwiZGF0ZSIsImZvcm1hdCIsInJlbmRlck9wdGlvbiIsInVuZGVmaW5lZCIsImRlZmF1bHRWYWx1ZSIsIm11bHRpbGluZSIsInJvd3MiLCJvbkRyYWdFbmQiLCJkcm9wcGFibGVJZCIsInByb3ZpZGVkIiwic25hcHNob3QiLCJkcm9wcGFibGVQcm9wcyIsInJlZiIsImlubmVyUmVmIiwia2V5IiwiZHJhZ2dhYmxlSWQiLCJfSXRlbSRpdGVtTmFtZSIsInJlbGF0ZWQiLCJyb3cxIiwiZHJhZ2dhYmxlUHJvcHMiLCJGcmFnbWVudCIsImRyYWdIYW5kbGVQcm9wcyIsImNvbFNwYW4iLCJzaXplIiwiY3Vyc29yIiwiZ2FwIiwiaXRlbUlkIiwiaW5pdGlhbERhdGEiLCJpbml0aWFsVHlwZSIsImhpZGRlbiIsInRvVXBwZXJDYXNlIiwiaXRlbUJyYW5kIiwib25JbnB1dENoYW5nZSIsImV2ZW50IiwibmV3SW5wdXRWYWx1ZSIsImZpbHRlck9wdGlvbnMiLCJfcmVmMTUiLCJQYXBlckNvbXBvbmVudCIsIl9yZWYxNiIsImNoaWxkcmVuIiwib3RoZXIiLCJfZXhjbHVkZWQ1IiwibWFyZ2luVG9wIiwib25Nb3VzZURvd24iLCJwbGFjZWhvbGRlciIsInJlcGxhY2UiLCJ0eXBlIiwib25DbG9zZSIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsInRvIiwib3ZlcmZsb3dZIiwib25DcmVhdGVPcHRpb24iLCJhbmNob3IiLCJvbk9wZW4iLCJQYXBlclByb3BzIiwibWIiLCJmdWxsV2lkdGgiLCJtbCIsIm1heEhlaWdodCIsIl9yZWYxNyIsIl9pdGVtJGl0ZW1TZWxsaW5nUHJpYyIsImZsZXhEaXJlY3Rpb24iLCJpbWFnZSIsImFsdCIsIm9iamVjdEZpdCIsImZvbnRXZWlnaHQiLCJndXR0ZXJCb3R0b20iLCJjb3VudCIsInBhZ2UiLCJzcmMiLCJzZXRTcmMiLCJmZXRjaEltYWdlIiwic3RhcnRzV2l0aCIsImJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJibG9iIiwiQmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZWFkQXNEYXRhVVJMIiwiZXJyIiwiYm9yZGVyIiwiT3V0bGV0IiwiTGluayIsInVzZUxvY2F0aW9uIiwiRGFzaGJvYXJkSWNvbiIsIlBlcm1JZGVudGl0eUljb24iLCJMaXN0QWx0SWNvbiIsIkRlc2NyaXB0aW9uSWNvbiIsIlJlY2VpcHRJY29uIiwiTW92aW5nSWNvbiIsIlNldHRpbmdzSWNvbiIsIkluc2VydERyaXZlRmlsZUljb24iLCJSZXN0b3JlUGFnZUljb24iLCJSZXF1ZXN0UXVvdGVJY29uIiwiTW9uZXRpemF0aW9uT25JY29uIiwiRW5naW5lZXJpbmdJY29uIiwiRXhwbGljaXQiLCJTaG9wcGluZ0JhZ091dGxpbmVkIiwiUm9vbVByZWZlcmVuY2VzSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsIlBheW1lbnRJY29uIiwiTW9yZVZlcnRJY29uIiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=