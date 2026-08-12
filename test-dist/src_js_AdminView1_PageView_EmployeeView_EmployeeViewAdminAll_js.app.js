"use strict";
exports.id = "src_js_AdminView1_PageView_EmployeeView_EmployeeViewAdminAll_js";
exports.ids = ["src_js_AdminView1_PageView_EmployeeView_EmployeeViewAdminAll_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/KeyboardArrowDown.js"
/*!***************************************************************!*\
  !*** ./node_modules/@mui/icons-material/KeyboardArrowDown.js ***!
  \***************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


"use client";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));
var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _default = exports["default"] = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
}), 'KeyboardArrowDown');

/***/ },

/***/ "./src/js/AdminView1/PageView/EmployeeView/EmployeeViewAdminAll.js"
/*!*************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EmployeeView/EmployeeViewAdminAll.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/PrintHeader */ "./src/js/component/PrintHeader.js");
/* harmony import */ var _component_PrintFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/PrintFooter */ "./src/js/component/PrintFooter.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/SidebarDashE2 */ "./src/js/component/SidebarDashE2.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/KeyboardArrowDownOutlined.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/KeyboardArrowUpOutlined.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var _EmployeeFormView__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./EmployeeFormView */ "./src/js/AdminView1/PageView/EmployeeView/EmployeeFormView.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabContext/TabContext.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabList/TabList.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabPanel/TabPanel.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../../../img/images.png */ "./src/js/img/images.png");
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @mui/icons-material/Phone */ "./node_modules/@mui/icons-material/Phone.js");
/* harmony import */ var _mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @mui/icons-material/Web */ "./node_modules/@mui/icons-material/Web.js");
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @mui/icons-material/Email */ "./node_modules/@mui/icons-material/Email.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"];
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






















































var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_36__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_37__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_36__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_37__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_36__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_37__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_ref7 => {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded4);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_36__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref8 => {
  var theme = _ref8.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_37__["default"].tooltip)]: {
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
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_38__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref9 => {
  var theme = _ref9.theme,
    open = _ref9.open;
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_41__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref0 => {
  var theme = _ref0.theme,
    open = _ref0.open;
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
function EmployeeViewAdminAll() {
  var _employee$filter;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_47__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_47__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_55__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_55__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_56__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_48__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_49__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_56__.setUser)({
              userName: Name,
              role: Role,
              id: res.data.data._id
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          navigate('/');
        }
      });
      return function fetchUser() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_56__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    employee = _useState2[0],
    setEmployee = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    payRoll = _useState4[0],
    setPayRoll = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    expenses = _useState6[0],
    setExpenses = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    planing = _useState8[0],
    setPlaning = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    rate = _useState0[0],
    setRate = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
    _useState10 = _slicedToArray(_useState1, 2),
    loadingData = _useState10[0],
    setLoadingData = _useState10[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_49__.ENDPOINT_URL, "/employee");
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchE = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var _resPRate$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_48__["default"].get(apiUrl);
          var resPRate = yield axios__WEBPACK_IMPORTED_MODULE_48__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_49__.ENDPOINT_URL, "/paymentRate"));
          (((_resPRate$data = resPRate.data) === null || _resPRate$data === void 0 ? void 0 : _resPRate$data.data) || []).map(row => setRate(row.paymentRate));
          if (res) {
            var _res$data;
            setEmployee((((_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data) || []).reverse());
            setLoadingData(false);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchE() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchE();
  }, []);
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    employeeName = _useState12[0],
    setEmployeeName = _useState12[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    anchorEl = _React$useState2[0],
    setAnchorEl = _React$useState2[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    itemOut = _useState14[0],
    setItemOut = _useState14[1];
  var open = Boolean(anchorEl);
  var handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  var handleCloseMenu = () => {
    setAnchorEl(null);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchEId = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var _res$data2, _resPayRoll$data, _resPlaning$data, _resDE$data, _resItemOut$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_48__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_49__.ENDPOINT_URL, "/get-employee/").concat(id));
          setEmployeeName(((_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.employeeName) || null);
          var resPayRoll = yield axios__WEBPACK_IMPORTED_MODULE_48__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_49__.ENDPOINT_URL, "/payRoll"));
          var payRollData = Array.isArray((_resPayRoll$data = resPayRoll.data) === null || _resPayRoll$data === void 0 ? void 0 : _resPayRoll$data.data) ? resPayRoll.data.data : [];
          setPayRoll(payRollData.filter(row => {
            var _row$employeeName;
            return ((_row$employeeName = row.employeeName) === null || _row$employeeName === void 0 ? void 0 : _row$employeeName.id) === id;
          }));
          var resPlaning = yield axios__WEBPACK_IMPORTED_MODULE_48__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_49__.ENDPOINT_URL, "/planing"));
          var planningData = Array.isArray((_resPlaning$data = resPlaning.data) === null || _resPlaning$data === void 0 ? void 0 : _resPlaning$data.data) ? resPlaning.data.data : [];
          setPlaning(planningData.filter(row => row.employeeID === id).map(row => _objectSpread(_objectSpread({}, row), {}, {
            totalWorkDay: parseFloat((row.dayPayUSd || 0) * (row.workNumber || 0)).toFixed(2)
          })));
          var resDE = yield axios__WEBPACK_IMPORTED_MODULE_48__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_49__.ENDPOINT_URL, "/expense?summary=true"));
          var expenseData = Array.isArray((_resDE$data = resDE.data) === null || _resDE$data === void 0 ? void 0 : _resDE$data.data) ? resDE.data.data : [];
          setExpenses(expenseData.filter(row => row.accountName === 'Employee' && Array.isArray(row.employeeName) && row.employeeName.find(Item => Item.idRow === id)).map(row => {
            var _row$employeeName2, _row$employeeName3;
            return _objectSpread(_objectSpread({}, row), {}, {
              amountFC: (_row$employeeName2 = row.employeeName) === null || _row$employeeName2 === void 0 ? void 0 : _row$employeeName2.filter(Item => Item.idRow === id).reduce((sum, acc) => sum + parseFloat(acc.amount || 0), 0),
              amountUSD: (_row$employeeName3 = row.employeeName) === null || _row$employeeName3 === void 0 ? void 0 : _row$employeeName3.filter(Item => Item.idRow === id).reduce((sum, acc) => sum + parseFloat(acc.total || 0), 0)
            });
          }));
          var resItemOut = yield axios__WEBPACK_IMPORTED_MODULE_48__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_49__.ENDPOINT_URL, "/itemOut"));
          var itemOutData = Array.isArray((_resItemOut$data = resItemOut.data) === null || _resItemOut$data === void 0 ? void 0 : _resItemOut$data.data) ? resItemOut.data.data : [];
          var formatDate1 = itemOutData.filter(row => {
            var _row$reference;
            return ((_row$reference = row.reference) === null || _row$reference === void 0 ? void 0 : _row$reference._id) === id;
          });
          setItemOut(formatDate1.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchEId() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchEId();
  }, [id]);
  var planingObject = Array.isArray(planing) ? planing === null || planing === void 0 ? void 0 : planing.reduce((acc, item) => {
    var _item$projectName, _item$projectName2;
    var projId = (_item$projectName = item.projectName) === null || _item$projectName === void 0 ? void 0 : _item$projectName._id;
    var name = (_item$projectName2 = item.projectName) === null || _item$projectName2 === void 0 ? void 0 : _item$projectName2.name;
    var dayPay = item.dayPayUSd;
    if (projId) {
      if (!acc[projId]) {
        acc[projId] = {
          id: projId,
          name,
          dayPay,
          workD: 0,
          total: 0
        };
      }
      acc[projId].total += parseFloat(item.totalWorkDay || 0);
      acc[projId].workD += parseFloat(item.workNumber || 0);
    }
    return acc;
  }, {}) : {};
  var planingArray = planingObject ? Object.keys(planingObject).map(row => planingObject[row]) : [];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    images = _useState16[0],
    setImages = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    imagesURL = _useState18[0],
    setImagesURL = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchImages = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        if (employeeName !== null) {
          try {
            var resp = yield axios__WEBPACK_IMPORTED_MODULE_48__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_49__.ENDPOINT_URL, "/get-image/").concat(employeeName));
            if (resp && resp.data) {
              var _resp$data, _resp$data2, _resp$data3;
              setImages((_resp$data = resp.data) === null || _resp$data === void 0 ? void 0 : _resp$data.data);
              if ((_resp$data2 = resp.data) !== null && _resp$data2 !== void 0 && _resp$data2.data && (_resp$data3 = resp.data) !== null && _resp$data3 !== void 0 && (_resp$data3 = _resp$data3.data) !== null && _resp$data3 !== void 0 && _resp$data3.data) {
                var _resp$data4, _resp$data5;
                var buffer = new Uint8Array((_resp$data4 = resp.data) === null || _resp$data4 === void 0 || (_resp$data4 = _resp$data4.data) === null || _resp$data4 === void 0 || (_resp$data4 = _resp$data4.data) === null || _resp$data4 === void 0 ? void 0 : _resp$data4.data);
                var bold = new Blob([buffer], {
                  type: "".concat((_resp$data5 = resp.data) === null || _resp$data5 === void 0 || (_resp$data5 = _resp$data5.data) === null || _resp$data5 === void 0 ? void 0 : _resp$data5.contentType)
                });
                var reader = new FileReader();
                reader.readAsDataURL(bold);
                reader.onloadend = () => {
                  setImagesURL(reader.result);
                };
              }
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchImages() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchImages();
  }, [employeeName]);
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState20 = _slicedToArray(_useState19, 2),
    show = _useState20[0],
    setShow = _useState20[1];
  var handleShow = e => {
    setShow(e);
  };
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    expanded = _React$useState4[0],
    setExpanded = _React$useState4[1];
  var handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  {/** Filter VIew Start */}
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState22 = _slicedToArray(_useState21, 2),
    show2 = _useState22[0],
    setShow2 = _useState22[1];
  var handleShow2 = e => {
    setShow2(e);
  };
  {/** search && Tab */}
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    value = _useState24[0],
    setValue = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    value2 = _useState26[0],
    setValue2 = _useState26[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var selectedIndex = employee.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [employee, id]);
  var handleChange3 = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState28 = _slicedToArray(_useState27, 2),
    search = _useState28[0],
    setSearch = _useState28[1];
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
  };
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default().useState('1'),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    value3 = _React$useState6[0],
    setValue3 = _React$useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var result = localStorage.getItem('TabEmployee');
    if (result) {
      setValue3(result);
    }
  });
  var handleChange4 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('TabEmployee', changeValue);
  };
  var newArray = search !== '' ? employee.filter(row => row.employeeName.toLowerCase().includes(search.toLowerCase()) || row.department && row.department.toLowerCase().includes(search.toLowerCase()) || row.employeeRole && row.employeeRole.toLowerCase().includes(search.toLowerCase()) || row.employeeAddress && row.employeeAddress.toLowerCase().includes(search.toLowerCase())) : employee;
  {/** search && Tab End */}
  {/** Filter VIew End */}
  {/** Comments starts */}
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState30 = _slicedToArray(_useState29, 2),
    show1 = _useState30[0],
    setShow1 = _useState30[1];
  var handleShow1 = e => {
    setShow1(e);
    setAnchorEl(null);
  };
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    reason = _useState32[0],
    setReason = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState34 = _slicedToArray(_useState33, 2),
    Comments1 = _useState34[0],
    setComments = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState36 = _slicedToArray(_useState35, 2),
    notification = _useState36[0],
    setNotification = _useState36[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchComment = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        try {
          var _res$data3, _resNotification$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_48__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_49__.ENDPOINT_URL, "/comment"));
          var resp = (_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.filter(row => row.CommentInfo.idInfo === id);
          setComments(resp.reverse());
          var resNotification = yield axios__WEBPACK_IMPORTED_MODULE_48__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_49__.ENDPOINT_URL, "/notification"));
          setNotification((_resNotification$data = resNotification.data) === null || _resNotification$data === void 0 || (_resNotification$data = _resNotification$data.data) === null || _resNotification$data === void 0 ? void 0 : _resNotification$data.filter(row => row.idInfo === id));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchComment() {
        return _ref13.apply(this, arguments);
      };
    }();
    fetchComment();
  }, [id]);
  var CommentInfo = {
    idInfo: id,
    person: user.data.userName,
    reason
  };
  {/** Loading Start */}
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    loading = _useState38[0],
    setLoading = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    loadingOpenModal = _useState40[0],
    setLoadingOpenModal = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    loadingOpenModalPicture = _useState42[0],
    setLoadingOpenModalPicture = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    loadingOpenModalDelete = _useState44[0],
    setLoadingOpenModalDelete = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
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
  var handleOpenPicture = () => {
    setLoadingOpenModalPicture(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleOpenDelete = () => {
    setLoadingOpenModalDelete(true);
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
  };
  var handleClosePicture = () => {
    window.location.reload();
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  {/** Loading End */}
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState48 = _slicedToArray(_useState47, 2),
    uploadedImage = _useState48[0],
    setUploadedImage = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState50 = _slicedToArray(_useState49, 2),
    uploadedImageURL = _useState50[0],
    setUploadedImageURL = _useState50[1];
  function handleBase64(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.onerror = error => {
      console.log("error", error);
    };
    setUploadedImageURL(e.target.files[0]);
  }
  var handleShowInput = () => {
    setUploadedImage('');
  };
  var handleImageSubmit = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var formData = new FormData();
      formData.append('image', uploadedImageURL);
      formData.append('employeeName', employeeName);
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_48__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_49__.ENDPOINT_URL, "/upload-image"), formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        handleOpenPicture();
      } catch (error) {
        handleError();
      }
    });
    return function handleImageSubmit(_x) {
      return _ref14.apply(this, arguments);
    };
  }();
  var handleDeleteImage = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      if (images !== null) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_48__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_49__.ENDPOINT_URL, "/delete-image/").concat(images._id));
          if (res) {
            handleOpenDelete();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
    return function handleDeleteImage(_x2) {
      return _ref15.apply(this, arguments);
    };
  }();
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_51___default()(Date.now());
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo,
        dateComment
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_48__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_49__.ENDPOINT_URL, "/create-comment/"), data);
        if (res) {
          setReason("");
          handleOpen();
          var newData = res.data.data;
          setComments([newData, ...Comments1]);
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmitEdit(_x3) {
      return _ref16.apply(this, arguments);
    };
  }();
  var allTransaction = [];
  payRoll.forEach(row => {
    allTransaction.push({
      type: 'PaySlip',
      month: row.month,
      date: row.payDate,
      number: row.payNumber,
      description: 'Net Payable',
      amountFC: row.totalNet,
      amountUSD: row.totalPaidDollars
    });
  });
  expenses.forEach(row => {
    var _row$expenseCategory;
    allTransaction.push({
      type: 'Expenses',
      month: row.expenseDate,
      date: row.expenseDate,
      number: row.expenseNumber,
      description: (((_row$expenseCategory = row.expenseCategory) === null || _row$expenseCategory === void 0 ? void 0 : _row$expenseCategory.expensesCategory) || 'N/A') + ' / ' + (row.description || ''),
      amountFC: row.amountFC || 0,
      amountUSD: row.amountUSD || 0
    });
  });
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState52 = _slicedToArray(_useState51, 2),
    selectOptions = _useState52[0],
    setSelectOptions = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState54 = _slicedToArray(_useState53, 2),
    startDate = _useState54[0],
    setStartDate = _useState54[1];
  var totalFC = 0;
  var totalUSD = 0;
  var filterTransanction = allTransaction === null || allTransaction === void 0 ? void 0 : allTransaction.filter(row => dayjs__WEBPACK_IMPORTED_MODULE_51___default()(row.month).format('MMMM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_51___default()(startDate).format('MMMM/YYYY'));
  var totalGFC = filterTransanction.length > 0 ? filterTransanction.reduce((sum, row) => sum + parseFloat(row.amountFC), 0) : 0;
  var totalGUSD = filterTransanction.length > 0 ? filterTransanction.reduce((sum, row) => sum + parseFloat(row.amountUSD), 0) : 0;
  var monthRow = allTransaction.filter(row => dayjs__WEBPACK_IMPORTED_MODULE_51___default()(row.month).format('MMMM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_51___default()(startDate).format('MMMM/YYYY')).sort((a, b) => new Date(a.date) - new Date(b.date)).map((row, i) => {
    if (row.type === 'PaySlip') {
      totalFC += parseFloat(row.amountFC);
      totalUSD += parseFloat(row.amountUSD);
    } else if (row.type === 'Expenses') {
      totalFC += parseFloat(row.amountFC);
      totalUSD += parseFloat(row.amountUSD);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_51___default()(row.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'PaySlip' && row.description + ' REf PAY-0' + row.number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'Expenses' && 'Ref D-0' + row.number + ' / ' + row.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'PaySlip' ? "FC ".concat(parseFloat(row.amountFC || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) + " ($".concat(parseFloat(row.amountUSD || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")") : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Expenses' ? "FC ".concat(parseFloat(row.amountFC || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) + " ($".concat(parseFloat(row.amountUSD || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")") : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, "FC ".concat(parseFloat(totalFC || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) + " ($".concat(parseFloat(totalUSD || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")));
  });
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState56 = _slicedToArray(_useState55, 2),
    search3 = _useState56[0],
    setSearch3 = _useState56[1];
  var handleSearch3 = e => {
    var value = e.target.value;
    setSearch3(value);
  };
  var newArray3 = search3 !== '' ? itemOut.filter(row => row.reason.toLowerCase().includes(search3.toLowerCase()) || row.reference.referenceName.toLowerCase().includes(search3.toLowerCase()) || row.itemsQtyArray.some(Item => Item.itemName.itemName.toLowerCase().includes(search3.toLowerCase())) || row.itemsQtyArray.some(Item => Item.itemDescription.toLowerCase().includes(search3.toLowerCase())) || dayjs__WEBPACK_IMPORTED_MODULE_51___default()(row.itemOutDate).format('DD/MM/YYYY').includes(search3)) : itemOut;
  var totalReturnTotal = newArray3.length > 0 ? newArray3.reduce((acc, row) => {
    return acc + row.itemsQtyArray.reduce((sum, item) => sum + parseFloat(item.newItemOut), 0);
  }, 0) : 0;
  {/** Comments end */}
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    sideBar = _React$useState8[0],
    setSideBar = _React$useState8[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  function Row(props) {
    var row = props.row;
    var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
      _React$useState0 = _slicedToArray(_React$useState9, 2),
      open = _React$useState0[0],
      setOpen = _React$useState0[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        '& > *': {
          borderBottom: 'unset'
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "aria-label": "expand row",
      size: "small",
      onClick: () => setOpen(!open)
    }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "th",
      scope: "row"
    }, "Salary Slip for the month Of: ", dayjs__WEBPACK_IMPORTED_MODULE_51___default()(row.month).format('MMMM-YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "right"
    }, row.daysW, " Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "right"
    }, "FC ", parseFloat(row.totalPaid || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.totalPaid || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: {
        paddingBottom: 0,
        paddingTop: 0
      },
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      in: open,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        margin: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      variant: "h6",
      gutterBottom: true,
      component: "div"
    }, "History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '80%',
        marginBottom: '0px',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        backgroundColor: '#e8f7fe'
      }
    }, "Earning (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        backgroundColor: '#e8f7fe'
      }
    }, "Actual Salary (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        backgroundColor: '#e8f7fe'
      }
    }, "Earnings (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        backgroundColor: '#e8f7fe'
      },
      colSpan: 2
    }, "Deductions (FC)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Basic wage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.basicSalary || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.basicSalary || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.earningSalary || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.earningSalary || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "In advanced allowances "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.advancedSalary || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.advancedSalary || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Transport allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.basicTransport || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.basicTransport || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.transportEarning || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.transportEarning || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Transport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.transportDeduction || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.transportDeduction || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Food allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.foodBasic || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.foodBasic || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.foodEarning || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.foodEarning || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Food"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.foodDeduction || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.foodDeduction || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Bounce allowances 3%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.bounceAllowances || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.bounceAllowances || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.bounceAllowancesEarning || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.bounceAllowancesEarning || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Loan recovery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.loan || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.loan || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Other"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.other || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.other || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.otherEarning || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.otherEarning || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, "Item lost recovery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.itemLost || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.itemLost || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '80%',
        marginBottom: '5px',
        border: '1px solid #DDD',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        textAlign: 'center'
      },
      colSpan: 6
    }, "Total (Basic, Earning & Deduction)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Total Basic:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, " FC ", parseFloat(row.totalActualSalary || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.totalActualSalary || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Total Earning:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, " FC ", parseFloat(row.totalActualEarning || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.totalActualEarning || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Total Deduction:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, " FC ", parseFloat(row.totalActualDeduction || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.totalActualDeduction || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        padding: '5px',
        border: '1px solid #DDD',
        color: 'black',
        textAlign: 'center'
      },
      colSpan: 6
    }, "Total (Paid)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, "Net payable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 4
    }, "FC ", parseFloat(row.totalNet || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.totalPaidDollars || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, "Deduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 4
    }, "FC ", parseFloat(row.totalActualDeduction || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.totalActualDeduction || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, "Overtime & Bonus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 4
    }, "FC ", parseFloat(row.bonus || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.bonus || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      colSpan: 2
    }, "Total Generale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '200px',
        border: '1px solid #DDD',
        color: 'black'
      },
      colSpan: 4
    }, "FC ", parseFloat(row.totalPaid || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "($", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat((row.totalPaid || 0) / (row.rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), ")"))))))))));
  }
  function Row2(props) {
    var _planing$filter;
    var row = props.row;
    var index = props.index;
    var _React$useState1 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
      _React$useState10 = _slicedToArray(_React$useState1, 2),
      open = _React$useState10[0],
      setOpen = _React$useState10[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        '& > *': {
          borderBottom: 'unset'
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "aria-label": "expand row",
      size: "small",
      onClick: () => setOpen(!open)
    }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "th",
      scope: "row"
    }, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "center"
    }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "center"
    }, row.workD), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "center"
    }, "$", row.dayPay), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "right"
    }, "$", parseFloat(row.total || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: {
        paddingBottom: 0,
        paddingTop: 0
      },
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      in: open,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        margin: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      variant: "h6",
      gutterBottom: true,
      component: "div"
    }, "History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Description"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, planing === null || planing === void 0 || (_planing$filter = planing.filter(row1 => {
      var _row1$projectName;
      return ((_row1$projectName = row1.projectName) === null || _row1$projectName === void 0 ? void 0 : _row1$projectName._id) === row.id;
    })) === null || _planing$filter === void 0 ? void 0 : _planing$filter.map(row1 => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      key: row1._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, " ", dayjs__WEBPACK_IMPORTED_MODULE_51___default()(row1.planingDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, " ", row1.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, " ", row1.planingTask), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, " ", row1.planingDescription))))))))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_40__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_39__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_44__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Employee Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: () => navigate('/TewmViewAdmin')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_63__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_66__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_65__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_57__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_39__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_45__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_42__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_39__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_43__["default"], {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_58__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    spacing: 2
  }, show1 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 3
  }, show2 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      padding: '5px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6",
    sx: {
      fontWeight: 'bold',
      fontSize: '20px'
    }
  }, "All Employee")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow2(2)
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      height: '555px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: value,
    onChange: handleChange3,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, employee === null || employee === void 0 ? void 0 : employee.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    key: index,
    label: row.employeeName ? row.employeeName : '',
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_50__.Link,
    to: "/EmployeeViewAdminAll/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show2 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: () => handleShow2(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_59__["default"], {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      height: '580px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    key: index,
    label: row.employeeName ? row.employeeName : '',
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_50__.Link,
    to: "/EmployeeViewAdminAll/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : '') : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer2"
  }, employee === null || employee === void 0 || (_employee$filter = employee.filter(row => row._id === id)) === null || _employee$filter === void 0 ? void 0 : _employee$filter.map(row => {
    var _data, _totalFC, _totalUSD;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "itemInfoContainer2Head"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      style: {
        fontWeight: 'bold',
        fontSize: '20px'
      }
    }, (row.employeeName || "").toUpperCase(), " ", row.employeeId !== undefined ? "/" + row.employeeId : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      color: row.status === "Resign" ? "#801313" : row.status === "Suspended" ? "#fb8c00" : row.status === "Fired" ? "red" : row.status === "Employed" ? "blue" : "black"
    }, row.status !== undefined ? row.status : 'Undefined'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      "aria-controls": open ? 'demo-customized-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open ? 'true' : undefined,
      variant: "contained",
      disableElevation: true,
      onClick: handleClick,
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_64__["default"], null),
      sx: {
        bgcolor: 'gray',
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray'
        }
      }
    }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      id: "demo-customized-menu",
      MenuListProps: {
        'aria-labelledby': 'demo-customized-button'
      },
      anchorEl: anchorEl,
      open: open,
      onClose: handleCloseMenu,
      TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_20__["default"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sx: {
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_50__.NavLink, {
      to: "/EmployeeUpdateView/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_32__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      onClick: () => handleShow1(2)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "Comments"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      onClick: () => handleShow1(3)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "History"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_52__["default"], {
      value: value3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        borderBottom: 1,
        borderColor: 'divider'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_53__["default"], {
      onChange: handleChange4,
      "aria-label": "lab API tabs example",
      sx: {
        '& .MuiTabs-indicator': {
          backgroundColor: 'white',
          height: '0px'
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      label: "Overview",
      value: "1",
      sx: {
        '&.Mui-selected': {
          color: 'white',
          backgroundColor: 'gray',
          borderRadius: '10px'
        },
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray',
          borderRadius: '10px'
        }
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      label: "Personal",
      value: "2",
      sx: {
        '&.Mui-selected': {
          color: 'white',
          backgroundColor: 'gray',
          borderRadius: '10px'
        },
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray',
          borderRadius: '10px'
        }
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      label: "Planing",
      value: "5",
      sx: {
        '&.Mui-selected': {
          color: 'white',
          backgroundColor: 'gray',
          borderRadius: '10px'
        },
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray',
          borderRadius: '10px'
        }
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      label: "PayRoll",
      value: "3",
      sx: {
        '&.Mui-selected': {
          color: 'white',
          backgroundColor: 'gray',
          borderRadius: '10px'
        },
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray',
          borderRadius: '10px'
        }
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      label: "Report",
      value: "4",
      sx: {
        '&.Mui-selected': {
          color: 'white',
          backgroundColor: 'gray',
          borderRadius: '10px'
        },
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray',
          borderRadius: '10px'
        }
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      label: "Tools",
      value: "6",
      sx: {
        '&.Mui-selected': {
          color: 'white',
          backgroundColor: 'gray',
          borderRadius: '10px'
        },
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray',
          borderRadius: '10px'
        }
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_54__["default"], {
      value: "1",
      sx: {
        height: '520px',
        overflow: 'hidden',
        overflowY: 'scroll'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
      sx: {
        width: '100%',
        fontSize: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, (row.employeeName || "").toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Join Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, dayjs__WEBPACK_IMPORTED_MODULE_51___default()(row.joinDate).format('DD/MMMM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      color: row.status === "Resign" ? "#801313" : row.status === "Suspended" ? "#fb8c00" : row.status === "Fired" ? "red" : row.status === "Employed" ? "blue" : "black"
    }, row.status !== undefined ? row.status : 'Undefined', row.reason1 !== undefined ? ': ' + row.reason1 : '')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        textAlign: 'center'
      }
    }, "Department & Grade")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, row.department)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Grade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, row.employeeRole))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        textAlign: 'center'
      }
    }, "Employee Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, row.employeeEmail)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, row.employeePhone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, row.employeeAddress))), user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        textAlign: 'center'
      }
    }, "Salary Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Basic wage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "FC ", parseFloat(row.salary || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Transport allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "FC ", parseFloat(row.basicTransport || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Food allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "FC ", parseFloat(row.foodBasic || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Bounce allowances 3%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "FC ", parseFloat(row.bounceAllowances || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "other"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "FC ", parseFloat(row.other || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Total Salary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "FC ", parseFloat(Number(row.salary || 0) + Number(row.basicTransport || 0) + Number(row.foodBasic || 0) + Number(row.bounceAllowances || 0) + Number(row.other || 0)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", parseFloat((Number(row.salary || 0) + Number(row.basicTransport || 0) + Number(row.foodBasic || 0) + Number(row.bounceAllowances || 0) + Number(row.other || 0)) / (rate || 1)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      style: {
        marginBottom: '5px'
      }
    }, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'center'
      }
    }, "Description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("pre", {
      style: {
        fontFamily: 'system-ui',
        color: 'black',
        fontSize: '15px'
      }
    }, row.description))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_54__["default"], {
      value: "2",
      sx: {
        height: '520px',
        overflow: 'hidden',
        overflowY: 'scroll'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
      sx: {
        width: '100%',
        fontSize: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        textAlign: 'center'
      }
    }, "Personal Information"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Date of Birth"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, dayjs__WEBPACK_IMPORTED_MODULE_51___default()(row.dateOfBirth).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Gender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, row.Gender)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, row.statusMarital))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, row.identifier)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Id N"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, row.identifierNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "EXP Id Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, dayjs__WEBPACK_IMPORTED_MODULE_51___default()(row.expireDate).format('DD/MM/YYYY'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "customerDetails1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        width: '100%',
        position: 'relative',
        padding: '20px'
      }
    }, images !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(DeleteTooltip, {
      title: "Delete-Image"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "                  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: handleDeleteImage
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_33__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
      style: {
        marginLeft: '11%',
        width: '600px',
        height: '300px'
      },
      src: imagesURL,
      alt: images.fileName
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, uploadedImage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
      width: 400,
      height: 200,
      src: uploadedImage
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "left",
      style: {
        position: 'absolute'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: handleShowInput,
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_60__["default"], {
      style: {
        color: '#202a5a'
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
      type: "submit",
      className: "btnCustomer6",
      style: {
        marginLeft: '14%',
        width: '60%'
      },
      onClick: handleImageSubmit
    }, "Upload")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
      onChange: handleBase64,
      type: "file",
      style: {
        marginLeft: '14%',
        width: '60%'
      }
    }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_54__["default"], {
      value: "5",
      sx: {
        height: '520px',
        overflow: 'hidden',
        overflowY: 'scroll'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      component: _mui_material__WEBPACK_IMPORTED_MODULE_25__["default"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
      "aria-label": "collapsible table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "center"
    }, "Project Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "center"
    }, "Day Work"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "center"
    }, "Pay Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "right"
    }, "Total Pay"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"], null, planingArray === null || planingArray === void 0 ? void 0 : planingArray.map((row, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Row2, {
      key: row.id,
      row: row,
      index: i
    }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_54__["default"], {
      value: "3",
      sx: {
        height: '520px',
        overflow: 'hidden',
        overflowY: 'scroll'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      component: _mui_material__WEBPACK_IMPORTED_MODULE_25__["default"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
      "aria-label": "collapsible table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "right"
    }, "Day Work"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "right"
    }, "Total Paid"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"], null, payRoll === null || payRoll === void 0 ? void 0 : payRoll.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Row, {
      key: row._id,
      row: row
    }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_54__["default"], {
      value: "4",
      sx: {
        height: '520px',
        overflow: 'hidden',
        overflowY: 'scroll'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        marginBottom: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_67__.LocalizationProvider, {
      dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_69__.AdapterDayjs
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_70__.DemoContainer, {
      components: ['DatePicker', 'DatePicker']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_68__.DatePicker, {
      required: true,
      name: "startDate",
      value: dayjs__WEBPACK_IMPORTED_MODULE_51___default()(startDate),
      onChange: date => setStartDate(date),
      format: "MMMM/YYYY",
      label: '"month" "&" "year"',
      views: ['month', 'year']
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        padding: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        padding: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data = data) === null || _data === void 0 ? void 0 : _data.branchId : ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "invoicehr"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '25px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("address", {
      style: {
        position: 'relative',
        lineHeight: 1.35,
        width: '60%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '13px'
      }
    }, (row.employeeName || "").toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '70%',
        left: '83px',
        marginBottom: '10px',
        pageBreakInside: 'auto'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      colSpan: 2,
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'left'
      }
    }, "Statement of Accounts"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "For ", dayjs__WEBPACK_IMPORTED_MODULE_51___default()(startDate).format('MMMM/YYYY'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        backgroundColor: '#e8f7fe',
        border: 'none',
        textAlign: 'left'
      }
    }, "Account Summary")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Total Cost")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        width: '200px'
      }
    }, "FC ".concat(parseFloat(totalGFC || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) + " ($".concat(parseFloat(totalGUSD || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '70%',
        marginBottom: '5px',
        border: '1px solid #DDD',
        maxHeight: '400px',
        overflow: 'auto',
        pageBreakInside: 'auto'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '150px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Transaction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '300px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '150px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Payments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '150px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '150px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, monthRow, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Total Cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2
    }, "FC ".concat((_totalFC = totalFC) === null || _totalFC === void 0 ? void 0 : _totalFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) + " ($".concat((_totalUSD = totalUSD) === null || _totalUSD === void 0 ? void 0 : _totalUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "footerinvoice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_74__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Contact@GlobalGate.Sarl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_72__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "+243 827 722 222")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_73__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "www.GlobalGate.sarl")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_54__["default"], {
      value: "6",
      sx: {
        height: '520px',
        overflow: 'hidden',
        overflowY: 'scroll'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
      style: {
        position: 'relative',
        float: 'right',
        padding: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      label: "search",
      id: "search2",
      value: search3,
      variant: "standard",
      onChange: handleSearch3
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '80%',
        marginBottom: '5px',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Item Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, " Qty"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, newArray3.map(row => {
      var _row$itemsQtyArray, _row$itemsQtyArray2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: row._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '60px'
        }
      }, row.outNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '30px',
          borderLeft: '1px solid #DDD'
        }
      }, dayjs__WEBPACK_IMPORTED_MODULE_51___default()(row.itemOutDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, row.reason), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '200px',
          borderLeft: '1px solid #DDD'
        }
      }, " ", (_row$itemsQtyArray = row.itemsQtyArray) === null || _row$itemsQtyArray === void 0 ? void 0 : _row$itemsQtyArray.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemName.itemName))), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '40px',
          borderLeft: '1px solid #DDD'
        }
      }, (_row$itemsQtyArray2 = row.itemsQtyArray) === null || _row$itemsQtyArray2 === void 0 ? void 0 : _row$itemsQtyArray2.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.newItemOut)))));
    })))))))));
  }))), show1 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "COMMENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_59__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    required: true,
    id: "comments",
    name: "comments",
    multiline: true,
    rows: 4,
    value: reason,
    onChange: e => setReason(e.target.value.toUpperCase()),
    label: "Comments",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit",
    style: {
      width: '100%'
    },
    className: "btnCustomer6"
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      height: '355px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, Comments1.map(Item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
    key: Item._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      width: '100%',
      borderBottom: '1px solid black'
    }
  }, Item.dateComment ? dayjs__WEBPACK_IMPORTED_MODULE_51___default()(Item.dateComment).format('DD/MM') : '', " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "", show1 === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "HISTORY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_59__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      height: '518px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, notification.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.person + ' on ' + dayjs__WEBPACK_IMPORTED_MODULE_51___default()(row.dateNotification).format('DD/MMMM'), ": ", row.reason))))))) : ""))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_30__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_29__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_58__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_61__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_30__["default"], {
    open: loadingOpenModalPicture,
    onClose: handleClosePicture,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_29__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_58__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_61__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Image Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleClosePicture,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_30__["default"], {
    open: loadingOpenModalDelete,
    onClose: handleClosePicture,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_29__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_58__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_61__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Image Deleted successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleClosePicture,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_30__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_29__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_58__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_62__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeViewAdminAll);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRW1wbG95ZWVWaWV3X0VtcGxveWVlVmlld0FkbWluQWxsX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyx3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsQ0FBeUQ7QUFDQTtBQUNOO0FBQ1U7QUFDdEM7QUFDRTtBQUMyQjtBQUNjO0FBQ1E7QUFDb1c7QUFDOVg7QUFDSTtBQUNRO0FBQ21GO0FBQ2hDO0FBQy9DO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNRO0FBQ0E7QUFDYztBQUNJO0FBQ2hCO0FBQ0E7QUFDTDtBQUNuQjtBQUN3QjtBQUNZO0FBQ3BDO0FBQytCO0FBQ0Y7QUFDK0I7QUFDdEM7QUFDRDtBQUNEO0FBQ1k7QUFDSTtBQUNWO0FBQ0U7QUFDZ0I7QUFDaEI7QUFDUTtBQUVTO0FBQ1A7QUFDRztBQUN2QjtBQUNFO0FBQ0E7QUFDQTtBQUNJO0FBQ0E7QUFFbEQsSUFBTStHLFdBQVcsR0FBR3JGLDBEQUFNLENBQUNzRixJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDL0NsSCwwREFBQSxDQUFDNEQsOERBQU8sRUFBQXdELFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxLQUFBLENBQUxDLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBTzVELDhEQUFjLENBQUM2RCxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxNQUFNO01BQ3ZCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQztNQUMzQkMsUUFBUSxFQUFFO0lBQ1o7RUFDRixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBQ0gsSUFBTUMsYUFBYSxHQUFHeEcsMERBQU0sQ0FBQ3lHLEtBQUE7RUFBQSxJQUFHbEIsU0FBUyxHQUFBa0IsS0FBQSxDQUFUbEIsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFnQixLQUFBLEVBQUFDLFVBQUE7RUFBQSxvQkFDakRsSSwwREFBQSxDQUFDNEQsOERBQU8sRUFBQXdELFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDb0IsS0FBQTtFQUFBLElBQUdYLEtBQUssR0FBQVcsS0FBQSxDQUFMWCxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU81RCw4REFBYyxDQUFDNkQsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDM0JDLFFBQVEsRUFBRTtJQUNaO0VBQ0YsQ0FBQztBQUFBLENBQUMsQ0FBQztBQUNILElBQU1LLFlBQVksR0FBRzVHLDBEQUFNLENBQUM2RyxLQUFBO0VBQUEsSUFBR3RCLFNBQVMsR0FBQXNCLEtBQUEsQ0FBVHRCLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBb0IsS0FBQSxFQUFBQyxVQUFBO0VBQUEsb0JBQ2hEdEksMERBQUEsQ0FBQzRELDhEQUFPLEVBQUF3RCxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ3dCLEtBQUE7RUFBQSxJQUFHZixLQUFLLEdBQUFlLEtBQUEsQ0FBTGYsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPNUQsOERBQWMsQ0FBQzZELE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLFNBQVM7TUFDMUJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzNCQyxRQUFRLEVBQUU7SUFDWjtFQUNGLENBQUM7QUFBQSxDQUFDLENBQUM7QUFDSCxJQUFNUyxXQUFXLEdBQUdoSCwwREFBTSxDQUFDaUgsS0FBQTtFQUFBLElBQUcxQixTQUFTLEdBQUEwQixLQUFBLENBQVQxQixTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQXdCLEtBQUEsRUFBQUMsVUFBQTtFQUFBLG9CQUMvQzFJLDBEQUFBLENBQUM0RCw4REFBTyxFQUFBd0QsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUM0QixLQUFBO0VBQUEsSUFBR25CLEtBQUssR0FBQW1CLEtBQUEsQ0FBTG5CLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBTzVELDhEQUFjLENBQUM2RCxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxTQUFTO01BQzFCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQztNQUMzQkMsUUFBUSxFQUFFO0lBQ1o7RUFDRixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBQ0gsSUFBTWEsS0FBSyxHQUFHO0VBQ1pDLFFBQVEsRUFBRSxVQUFVO0VBQ3BCQyxHQUFHLEVBQUUsS0FBSztFQUNWQyxJQUFJLEVBQUUsS0FBSztFQUNYQyxTQUFTLEVBQUUsdUJBQXVCO0VBQ2xDQyxLQUFLLEVBQUUsR0FBRztFQUNWQyxPQUFPLEVBQUUsa0JBQWtCO0VBQzNCckIsU0FBUyxFQUFFLEVBQUU7RUFDYnNCLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEVBQUUsRUFBRTtBQUNOLENBQUM7QUFDRCxJQUFNQyxXQUFXLEdBQUcsR0FBRztBQUN2QixJQUFNQyxNQUFNLEdBQUcvSCwwREFBTSxDQUFDc0MsNkRBQVMsRUFBRTtFQUMvQjBGLGlCQUFpQixFQUFHQyxJQUFJLElBQUtBLElBQUksS0FBSztBQUN4QyxDQUFDLENBQUMsQ0FBQ0MsS0FBQTtFQUFBLElBQUdsQyxLQUFLLEdBQUFrQyxLQUFBLENBQUxsQyxLQUFLO0lBQUVtQyxJQUFJLEdBQUFELEtBQUEsQ0FBSkMsSUFBSTtFQUFBLE9BQUFDLGFBQUE7SUFDZkMsTUFBTSxFQUFFckMsS0FBSyxDQUFDcUMsTUFBTSxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUMvQkMsVUFBVSxFQUFFdkMsS0FBSyxDQUFDd0MsV0FBVyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUU7TUFDeERDLE1BQU0sRUFBRTFDLEtBQUssQ0FBQ3dDLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO01BQ3RDQyxRQUFRLEVBQUU1QyxLQUFLLENBQUN3QyxXQUFXLENBQUNJLFFBQVEsQ0FBQ0M7SUFDdkMsQ0FBQztFQUFDLEdBQ0VWLElBQUksSUFBSTtJQUNWVyxVQUFVLEVBQUVoQixXQUFXO0lBQ3ZCTCxLQUFLLGlCQUFBeEIsTUFBQSxDQUFpQjZCLFdBQVcsUUFBSztJQUN0Q1MsVUFBVSxFQUFFdkMsS0FBSyxDQUFDd0MsV0FBVyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUU7TUFDeERDLE1BQU0sRUFBRTFDLEtBQUssQ0FBQ3dDLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO01BQ3RDQyxRQUFRLEVBQUU1QyxLQUFLLENBQUN3QyxXQUFXLENBQUNJLFFBQVEsQ0FBQ0c7SUFDdkMsQ0FBQztFQUNILENBQUM7QUFBQSxDQUNELENBQUM7QUFDSCxJQUFNQyxNQUFNLEdBQUdoSiwwREFBTSxDQUFDeUMsNkRBQVMsRUFBRTtFQUFFdUYsaUJBQWlCLEVBQUdDLElBQUksSUFBS0EsSUFBSSxLQUFLO0FBQU8sQ0FBQyxDQUFDLENBQ2hGZ0IsS0FBQTtFQUFBLElBQUdqRCxLQUFLLEdBQUFpRCxLQUFBLENBQUxqRCxLQUFLO0lBQUVtQyxJQUFJLEdBQUFjLEtBQUEsQ0FBSmQsSUFBSTtFQUFBLE9BQVE7SUFDcEIsb0JBQW9CLEVBQUFDLGFBQUE7TUFDbEJmLFFBQVEsRUFBRSxVQUFVO01BQ3BCNkIsVUFBVSxFQUFFLFFBQVE7TUFDcEJ6QixLQUFLLEVBQUVLLFdBQVc7TUFDbEJTLFVBQVUsRUFBRXZDLEtBQUssQ0FBQ3dDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUM1Q0MsTUFBTSxFQUFFMUMsS0FBSyxDQUFDd0MsV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7UUFDdENDLFFBQVEsRUFBRTVDLEtBQUssQ0FBQ3dDLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDRztNQUN2QyxDQUFDLENBQUM7TUFDRkksU0FBUyxFQUFFO0lBQVksR0FDbkIsQ0FBQ2hCLElBQUksSUFBSTtNQUNYaUIsU0FBUyxFQUFFLFFBQVE7TUFDbkJiLFVBQVUsRUFBRXZDLEtBQUssQ0FBQ3dDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUM1Q0MsTUFBTSxFQUFFMUMsS0FBSyxDQUFDd0MsV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7UUFDdENDLFFBQVEsRUFBRTVDLEtBQUssQ0FBQ3dDLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDQztNQUN2QyxDQUFDLENBQUM7TUFDRnBCLEtBQUssRUFBRXpCLEtBQUssQ0FBQ3FELE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDdkIsQ0FBQ3JELEtBQUssQ0FBQ3NELFdBQVcsQ0FBQ0MsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHO1FBQzVCOUIsS0FBSyxFQUFFekIsS0FBSyxDQUFDcUQsT0FBTyxDQUFDLENBQUM7TUFDeEI7SUFDRixDQUFDO0VBRUwsQ0FBQztBQUFBLENBQ0gsQ0FBQztBQUNELFNBQVNHLG9CQUFvQkEsQ0FBQSxFQUFHO0VBQUEsSUFBQUMsZ0JBQUE7RUFDOUIsSUFBQUMsVUFBQSxHQUFheEcsNERBQVMsQ0FBQyxDQUFDO0lBQWxCeUcsRUFBRSxHQUFBRCxVQUFBLENBQUZDLEVBQUU7RUFDUixJQUFNQyxRQUFRLEdBQUd2Ryw4REFBVyxDQUFDLENBQUM7RUFDOUIsSUFBTXdHLFFBQVEsR0FBR2pHLHlEQUFXLENBQUMsQ0FBQztFQUM5QixJQUFNa0csSUFBSSxHQUFHakcseURBQVcsQ0FBQ0Usd0VBQWlCLENBQUM7RUFDM0N0RixnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNc0wsWUFBWSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDakQsSUFBTUMsU0FBUztNQUFBLElBQUFDLEtBQUEsR0FBQUMsaUJBQUEsQ0FBRyxhQUFZO1FBQzVCLElBQUlMLFlBQVksRUFBRTtVQUNoQixJQUFJO1lBQ0YsSUFBTU0sR0FBRyxTQUFTbEgsOENBQUssQ0FBQ21ILEdBQUcsSUFBQXJFLE1BQUEsQ0FBSTdDLHFEQUFZLHdCQUFBNkMsTUFBQSxDQUFxQjhELFlBQVksQ0FBRSxDQUFDO1lBQy9FLElBQU1RLElBQUksR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsWUFBWTtZQUN2QyxJQUFNQyxJQUFJLEdBQUdMLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNHLElBQUk7WUFDL0JkLFFBQVEsQ0FBQzdGLGtFQUFPLENBQUM7Y0FBRTRHLFFBQVEsRUFBRUwsSUFBSTtjQUFFSSxJQUFJLEVBQUVELElBQUk7Y0FBRWYsRUFBRSxFQUFFVSxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDSztZQUFJLENBQUMsQ0FBQyxDQUFDO1VBQzFFLENBQUMsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7WUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQztVQUM5QztRQUNGLENBQUMsTUFBTTtVQUNMbEIsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNmO01BQ0YsQ0FBQztNQUFBLGdCQWJLTSxTQUFTQSxDQUFBO1FBQUEsT0FBQUMsS0FBQSxDQUFBYSxLQUFBLE9BQUFDLFNBQUE7TUFBQTtJQUFBLEdBYWQ7SUFDRGYsU0FBUyxDQUFDLENBQUM7RUFDYixDQUFDLEVBQUUsQ0FBQ0wsUUFBUSxDQUFDLENBQUM7RUFDZCxJQUFNcUIsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDekJsQixZQUFZLENBQUNtQixVQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CdEIsUUFBUSxDQUFDL0YsaUVBQU0sQ0FBQyxDQUFDLENBQUM7SUFDbEI4RixRQUFRLENBQUMsR0FBRyxDQUFDO0VBQ2YsQ0FBQztFQUVELElBQUF3QixTQUFBLEdBQWdDMU0sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTJNLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXJDRyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBQzVCLElBQUFJLFVBQUEsR0FBOEIvTSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBZ04sVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBbkNFLE9BQU8sR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFDMUIsSUFBQUcsVUFBQSxHQUFnQ25OLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFvTixVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUFyQ0UsUUFBUSxHQUFBRCxVQUFBO0lBQUVFLFdBQVcsR0FBQUYsVUFBQTtFQUM1QixJQUFBRyxVQUFBLEdBQThCdk4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXdOLFVBQUEsR0FBQVosY0FBQSxDQUFBVyxVQUFBO0lBQW5DRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBQzFCLElBQUFHLFVBQUEsR0FBd0IzTiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBNE4sVUFBQSxHQUFBaEIsY0FBQSxDQUFBZSxVQUFBO0lBQTVCRSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBc0MvTiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBZ08sV0FBQSxHQUFBcEIsY0FBQSxDQUFBbUIsVUFBQTtJQUE3Q0UsV0FBVyxHQUFBRCxXQUFBO0lBQUVFLGNBQWMsR0FBQUYsV0FBQTtFQUNsQyxJQUFNRyxNQUFNLE1BQUE1RyxNQUFBLENBQU03QyxxREFBWSxjQUFXO0VBRXpDM0UsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBTXFPLE1BQU07TUFBQSxJQUFBQyxNQUFBLEdBQUEzQyxpQkFBQSxDQUFHLGFBQVk7UUFDekIsSUFBSTtVQUFBLElBQUE0QyxjQUFBO1VBQ0YsSUFBTTNDLEdBQUcsU0FBU2xILDhDQUFLLENBQUNtSCxHQUFHLENBQUN1QyxNQUFNLENBQUM7VUFDbkMsSUFBTUksUUFBUSxTQUFTOUosOENBQUssQ0FBQ21ILEdBQUcsSUFBQXJFLE1BQUEsQ0FBSTdDLHFEQUFZLGlCQUFjLENBQUM7VUFDL0QsQ0FBQyxFQUFBNEosY0FBQSxHQUFBQyxRQUFRLENBQUN6QyxJQUFJLGNBQUF3QyxjQUFBLHVCQUFiQSxjQUFBLENBQWV4QyxJQUFJLEtBQUksRUFBRSxFQUFFMEMsR0FBRyxDQUFFQyxHQUFHLElBQUtYLE9BQU8sQ0FBQ1csR0FBRyxDQUFDQyxXQUFXLENBQUMsQ0FBQztVQUNsRSxJQUFJL0MsR0FBRyxFQUFFO1lBQUEsSUFBQWdELFNBQUE7WUFDUDdCLFdBQVcsQ0FBQyxDQUFDLEVBQUE2QixTQUFBLEdBQUFoRCxHQUFHLENBQUNHLElBQUksY0FBQTZDLFNBQUEsdUJBQVJBLFNBQUEsQ0FBVTdDLElBQUksS0FBSSxFQUFFLEVBQUU4QyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzdDVixjQUFjLENBQUMsS0FBSyxDQUFDO1VBQ3ZCO1FBQ0YsQ0FBQyxDQUFDLE9BQU85QixLQUFLLEVBQUU7VUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQztVQUM1QzhCLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDdkI7TUFDRixDQUFDO01BQUEsZ0JBYktFLE1BQU1BLENBQUE7UUFBQSxPQUFBQyxNQUFBLENBQUEvQixLQUFBLE9BQUFDLFNBQUE7TUFBQTtJQUFBLEdBYVg7SUFDRDZCLE1BQU0sQ0FBQyxDQUFDO0VBQ1YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQUFTLFdBQUEsR0FBd0M3TywrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBOE8sV0FBQSxHQUFBbEMsY0FBQSxDQUFBaUMsV0FBQTtJQUEvQzlDLFlBQVksR0FBQStDLFdBQUE7SUFBRUMsZUFBZSxHQUFBRCxXQUFBO0VBQ3BDLElBQUFFLGVBQUEsR0FBZ0NsUCxxREFBYyxDQUFDLElBQUksQ0FBQztJQUFBbVAsZ0JBQUEsR0FBQXJDLGNBQUEsQ0FBQW9DLGVBQUE7SUFBN0NFLFFBQVEsR0FBQUQsZ0JBQUE7SUFBRUUsV0FBVyxHQUFBRixnQkFBQTtFQUM1QixJQUFBRyxXQUFBLEdBQThCcFAsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXFQLFdBQUEsR0FBQXpDLGNBQUEsQ0FBQXdDLFdBQUE7SUFBbkNFLE9BQU8sR0FBQUQsV0FBQTtJQUFFRSxVQUFVLEdBQUFGLFdBQUE7RUFDMUIsSUFBTTVGLElBQUksR0FBRytGLE9BQU8sQ0FBQ04sUUFBUSxDQUFDO0VBQzlCLElBQU1PLFdBQVcsR0FBSUMsS0FBSyxJQUFLO0lBQzdCUCxXQUFXLENBQUNPLEtBQUssQ0FBQ0MsYUFBYSxDQUFDO0VBQ2xDLENBQUM7RUFDRCxJQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBTTtJQUM1QlQsV0FBVyxDQUFDLElBQUksQ0FBQztFQUNuQixDQUFDO0VBRURwUCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNOFAsUUFBUTtNQUFBLElBQUFDLE1BQUEsR0FBQXBFLGlCQUFBLENBQUcsYUFBWTtRQUMzQixJQUFJO1VBQUEsSUFBQXFFLFVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsV0FBQSxFQUFBQyxnQkFBQTtVQUNGLElBQU14RSxHQUFHLFNBQVNsSCw4Q0FBSyxDQUFDbUgsR0FBRyxJQUFBckUsTUFBQSxDQUFJN0MscURBQVksb0JBQUE2QyxNQUFBLENBQWlCMEQsRUFBRSxDQUFFLENBQUM7VUFDakU4RCxlQUFlLENBQUMsRUFBQWdCLFVBQUEsR0FBQXBFLEdBQUcsQ0FBQ0csSUFBSSxjQUFBaUUsVUFBQSxnQkFBQUEsVUFBQSxHQUFSQSxVQUFBLENBQVVqRSxJQUFJLGNBQUFpRSxVQUFBLHVCQUFkQSxVQUFBLENBQWdCaEUsWUFBWSxLQUFJLElBQUksQ0FBQztVQUNyRCxJQUFNcUUsVUFBVSxTQUFTM0wsOENBQUssQ0FBQ21ILEdBQUcsSUFBQXJFLE1BQUEsQ0FBSTdDLHFEQUFZLGFBQVUsQ0FBQztVQUM3RCxJQUFNMkwsV0FBVyxHQUFHQyxLQUFLLENBQUNDLE9BQU8sRUFBQVAsZ0JBQUEsR0FBQ0ksVUFBVSxDQUFDdEUsSUFBSSxjQUFBa0UsZ0JBQUEsdUJBQWZBLGdCQUFBLENBQWlCbEUsSUFBSSxDQUFDLEdBQUdzRSxVQUFVLENBQUN0RSxJQUFJLENBQUNBLElBQUksR0FBRyxFQUFFO1VBQ3BGb0IsVUFBVSxDQUFDbUQsV0FBVyxDQUFDRyxNQUFNLENBQUUvQixHQUFHO1lBQUEsSUFBQWdDLGlCQUFBO1lBQUEsT0FBSyxFQUFBQSxpQkFBQSxHQUFBaEMsR0FBRyxDQUFDMUMsWUFBWSxjQUFBMEUsaUJBQUEsdUJBQWhCQSxpQkFBQSxDQUFrQnhGLEVBQUUsTUFBS0EsRUFBRTtVQUFBLEVBQUMsQ0FBQztVQUNwRSxJQUFNeUYsVUFBVSxTQUFTak0sOENBQUssQ0FBQ21ILEdBQUcsSUFBQXJFLE1BQUEsQ0FBSTdDLHFEQUFZLGFBQVUsQ0FBQztVQUM3RCxJQUFNaU0sWUFBWSxHQUFHTCxLQUFLLENBQUNDLE9BQU8sRUFBQU4sZ0JBQUEsR0FBQ1MsVUFBVSxDQUFDNUUsSUFBSSxjQUFBbUUsZ0JBQUEsdUJBQWZBLGdCQUFBLENBQWlCbkUsSUFBSSxDQUFDLEdBQUc0RSxVQUFVLENBQUM1RSxJQUFJLENBQUNBLElBQUksR0FBRyxFQUFFO1VBQ3JGNEIsVUFBVSxDQUFDaUQsWUFBWSxDQUFDSCxNQUFNLENBQUUvQixHQUFHLElBQUtBLEdBQUcsQ0FBQ21DLFVBQVUsS0FBSzNGLEVBQUUsQ0FBQyxDQUFDdUQsR0FBRyxDQUFFQyxHQUFHLElBQUEvRSxhQUFBLENBQUFBLGFBQUEsS0FDbEUrRSxHQUFHO1lBQ05vQyxZQUFZLEVBQUVDLFVBQVUsQ0FBQyxDQUFDckMsR0FBRyxDQUFDc0MsU0FBUyxJQUFJLENBQUMsS0FBS3RDLEdBQUcsQ0FBQ3VDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQztVQUFDLEVBQ2pGLENBQUMsQ0FBQztVQUNKLElBQU1DLEtBQUssU0FBU3pNLDhDQUFLLENBQUNtSCxHQUFHLElBQUFyRSxNQUFBLENBQUk3QyxxREFBWSwwQkFBdUIsQ0FBQztVQUNyRSxJQUFNeU0sV0FBVyxHQUFHYixLQUFLLENBQUNDLE9BQU8sRUFBQUwsV0FBQSxHQUFDZ0IsS0FBSyxDQUFDcEYsSUFBSSxjQUFBb0UsV0FBQSx1QkFBVkEsV0FBQSxDQUFZcEUsSUFBSSxDQUFDLEdBQUdvRixLQUFLLENBQUNwRixJQUFJLENBQUNBLElBQUksR0FBRyxFQUFFO1VBQzFFd0IsV0FBVyxDQUFDNkQsV0FBVyxDQUFDWCxNQUFNLENBQUUvQixHQUFHLElBQUtBLEdBQUcsQ0FBQzJDLFdBQVcsS0FBSyxVQUFVLElBQUlkLEtBQUssQ0FBQ0MsT0FBTyxDQUFDOUIsR0FBRyxDQUFDMUMsWUFBWSxDQUFDLElBQUkwQyxHQUFHLENBQUMxQyxZQUFZLENBQUNzRixJQUFJLENBQUVDLElBQUksSUFBS0EsSUFBSSxDQUFDQyxLQUFLLEtBQUt0RyxFQUFFLENBQUMsQ0FBQyxDQUM3SnVELEdBQUcsQ0FBRUMsR0FBRztZQUFBLElBQUErQyxrQkFBQSxFQUFBQyxrQkFBQTtZQUFBLE9BQUEvSCxhQUFBLENBQUFBLGFBQUEsS0FDSitFLEdBQUc7Y0FDTmlELFFBQVEsR0FBQUYsa0JBQUEsR0FBRS9DLEdBQUcsQ0FBQzFDLFlBQVksY0FBQXlGLGtCQUFBLHVCQUFoQkEsa0JBQUEsQ0FBa0JoQixNQUFNLENBQUVjLElBQUksSUFBS0EsSUFBSSxDQUFDQyxLQUFLLEtBQUt0RyxFQUFFLENBQUMsQ0FBQzBHLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsS0FBS0QsR0FBRyxHQUFHZCxVQUFVLENBQUNlLEdBQUcsQ0FBQ0MsTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztjQUMxSEMsU0FBUyxHQUFBTixrQkFBQSxHQUFFaEQsR0FBRyxDQUFDMUMsWUFBWSxjQUFBMEYsa0JBQUEsdUJBQWhCQSxrQkFBQSxDQUFrQmpCLE1BQU0sQ0FBRWMsSUFBSSxJQUFLQSxJQUFJLENBQUNDLEtBQUssS0FBS3RHLEVBQUUsQ0FBQyxDQUFDMEcsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxLQUFLRCxHQUFHLEdBQUdkLFVBQVUsQ0FBQ2UsR0FBRyxDQUFDRyxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUFDO1VBQUEsQ0FDMUgsQ0FBQyxDQUFDO1VBQ04sSUFBTUMsVUFBVSxTQUFTeE4sOENBQUssQ0FBQ21ILEdBQUcsSUFBQXJFLE1BQUEsQ0FBSTdDLHFEQUFZLGFBQVUsQ0FBQztVQUM3RCxJQUFNd04sV0FBVyxHQUFHNUIsS0FBSyxDQUFDQyxPQUFPLEVBQUFKLGdCQUFBLEdBQUM4QixVQUFVLENBQUNuRyxJQUFJLGNBQUFxRSxnQkFBQSx1QkFBZkEsZ0JBQUEsQ0FBaUJyRSxJQUFJLENBQUMsR0FBR21HLFVBQVUsQ0FBQ25HLElBQUksQ0FBQ0EsSUFBSSxHQUFHLEVBQUU7VUFDcEYsSUFBTXFHLFdBQVcsR0FBR0QsV0FBVyxDQUFDMUIsTUFBTSxDQUFFL0IsR0FBRztZQUFBLElBQUEyRCxjQUFBO1lBQUEsT0FBSyxFQUFBQSxjQUFBLEdBQUEzRCxHQUFHLENBQUM0RCxTQUFTLGNBQUFELGNBQUEsdUJBQWJBLGNBQUEsQ0FBZWpHLEdBQUcsTUFBS2xCLEVBQUU7VUFBQSxFQUFDO1VBQzFFc0UsVUFBVSxDQUFDNEMsV0FBVyxDQUFDdkQsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsT0FBT3hDLEtBQUssRUFBRTtVQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO1VBQzVDOEIsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUN2QjtNQUNGLENBQUM7TUFBQSxnQkE3QksyQixRQUFRQSxDQUFBO1FBQUEsT0FBQUMsTUFBQSxDQUFBeEQsS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQTZCYjtJQUNEc0QsUUFBUSxDQUFDLENBQUM7RUFDWixDQUFDLEVBQUUsQ0FBQzVFLEVBQUUsQ0FBQyxDQUFDO0VBR1IsSUFBTXFILGFBQWEsR0FBR2hDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDOUMsT0FBTyxDQUFDLEdBQUdBLE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFa0UsTUFBTSxDQUFDLENBQUNFLEdBQUcsRUFBRVUsSUFBSSxLQUFLO0lBQUEsSUFBQUMsaUJBQUEsRUFBQUMsa0JBQUE7SUFDNUUsSUFBTUMsTUFBTSxJQUFBRixpQkFBQSxHQUFHRCxJQUFJLENBQUNJLFdBQVcsY0FBQUgsaUJBQUEsdUJBQWhCQSxpQkFBQSxDQUFrQnJHLEdBQUc7SUFDcEMsSUFBTXlHLElBQUksSUFBQUgsa0JBQUEsR0FBR0YsSUFBSSxDQUFDSSxXQUFXLGNBQUFGLGtCQUFBLHVCQUFoQkEsa0JBQUEsQ0FBa0JHLElBQUk7SUFDbkMsSUFBTUMsTUFBTSxHQUFHTixJQUFJLENBQUN4QixTQUFTO0lBQzdCLElBQUkyQixNQUFNLEVBQUU7TUFDVixJQUFJLENBQUNiLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEVBQUU7UUFDaEJiLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUc7VUFBRXpILEVBQUUsRUFBRXlILE1BQU07VUFBRUUsSUFBSTtVQUFFQyxNQUFNO1VBQUVDLEtBQUssRUFBRSxDQUFDO1VBQUVkLEtBQUssRUFBRTtRQUFFLENBQUM7TUFDaEU7TUFDQUgsR0FBRyxDQUFDYSxNQUFNLENBQUMsQ0FBQ1YsS0FBSyxJQUFJbEIsVUFBVSxDQUFDeUIsSUFBSSxDQUFDMUIsWUFBWSxJQUFJLENBQUMsQ0FBQztNQUN2RGdCLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLENBQUNJLEtBQUssSUFBSWhDLFVBQVUsQ0FBQ3lCLElBQUksQ0FBQ3ZCLFVBQVUsSUFBSSxDQUFDLENBQUM7SUFDdkQ7SUFDQSxPQUFPYSxHQUFHO0VBQ1osQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBRVgsSUFBTWtCLFlBQVksR0FBR1QsYUFBYSxHQUFHVSxNQUFNLENBQUNDLElBQUksQ0FBQ1gsYUFBYSxDQUFDLENBQUM5RCxHQUFHLENBQUVDLEdBQUcsSUFBSzZELGFBQWEsQ0FBQzdELEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtFQUdyRyxJQUFBeUUsV0FBQSxHQUE0QmxULCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFtVCxXQUFBLEdBQUF2RyxjQUFBLENBQUFzRyxXQUFBO0lBQW5DRSxNQUFNLEdBQUFELFdBQUE7SUFBRUUsU0FBUyxHQUFBRixXQUFBO0VBQ3hCLElBQUFHLFdBQUEsR0FBa0N0VCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBdVQsV0FBQSxHQUFBM0csY0FBQSxDQUFBMEcsV0FBQTtJQUF2Q0UsU0FBUyxHQUFBRCxXQUFBO0lBQUVFLFlBQVksR0FBQUYsV0FBQTtFQUM5QnhULGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQU0yVCxXQUFXO01BQUEsSUFBQUMsTUFBQSxHQUFBakksaUJBQUEsQ0FBRyxhQUFZO1FBQzlCLElBQUlLLFlBQVksS0FBSyxJQUFJLEVBQUU7VUFDekIsSUFBSTtZQUNGLElBQU02SCxJQUFJLFNBQVNuUCw4Q0FBSyxDQUFDbUgsR0FBRyxJQUFBckUsTUFBQSxDQUFJN0MscURBQVksaUJBQUE2QyxNQUFBLENBQWN3RSxZQUFZLENBQUUsQ0FBQztZQUN6RSxJQUFJNkgsSUFBSSxJQUFJQSxJQUFJLENBQUM5SCxJQUFJLEVBQUU7Y0FBQSxJQUFBK0gsVUFBQSxFQUFBQyxXQUFBLEVBQUFDLFdBQUE7Y0FDckJWLFNBQVMsRUFBQVEsVUFBQSxHQUFDRCxJQUFJLENBQUM5SCxJQUFJLGNBQUErSCxVQUFBLHVCQUFUQSxVQUFBLENBQVcvSCxJQUFJLENBQUM7Y0FDMUIsSUFBSSxDQUFBZ0ksV0FBQSxHQUFBRixJQUFJLENBQUM5SCxJQUFJLGNBQUFnSSxXQUFBLGVBQVRBLFdBQUEsQ0FBV2hJLElBQUksS0FBQWlJLFdBQUEsR0FBSUgsSUFBSSxDQUFDOUgsSUFBSSxjQUFBaUksV0FBQSxnQkFBQUEsV0FBQSxHQUFUQSxXQUFBLENBQVdqSSxJQUFJLGNBQUFpSSxXQUFBLGVBQWZBLFdBQUEsQ0FBaUJqSSxJQUFJLEVBQUU7Z0JBQUEsSUFBQWtJLFdBQUEsRUFBQUMsV0FBQTtnQkFDNUMsSUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQVUsRUFBQUgsV0FBQSxHQUFDSixJQUFJLENBQUM5SCxJQUFJLGNBQUFrSSxXQUFBLGdCQUFBQSxXQUFBLEdBQVRBLFdBQUEsQ0FBV2xJLElBQUksY0FBQWtJLFdBQUEsZ0JBQUFBLFdBQUEsR0FBZkEsV0FBQSxDQUFpQmxJLElBQUksY0FBQWtJLFdBQUEsdUJBQXJCQSxXQUFBLENBQXVCbEksSUFBSSxDQUFDO2dCQUMxRCxJQUFNc0ksSUFBSSxHQUFHLElBQUlDLElBQUksQ0FBQyxDQUFDSCxNQUFNLENBQUMsRUFBRTtrQkFBRUksSUFBSSxLQUFBL00sTUFBQSxFQUFBME0sV0FBQSxHQUFLTCxJQUFJLENBQUM5SCxJQUFJLGNBQUFtSSxXQUFBLGdCQUFBQSxXQUFBLEdBQVRBLFdBQUEsQ0FBV25JLElBQUksY0FBQW1JLFdBQUEsdUJBQWZBLFdBQUEsQ0FBaUJNLFdBQVc7Z0JBQUcsQ0FBQyxDQUFDO2dCQUM1RSxJQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBVSxDQUFDLENBQUM7Z0JBQy9CRCxNQUFNLENBQUNFLGFBQWEsQ0FBQ04sSUFBSSxDQUFDO2dCQUMxQkksTUFBTSxDQUFDRyxTQUFTLEdBQUcsTUFBTTtrQkFDdkJsQixZQUFZLENBQUNlLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDO2dCQUM3QixDQUFDO2NBQ0g7WUFDRjtVQUNGLENBQUMsQ0FBQyxPQUFPeEksS0FBSyxFQUFFO1lBQ2RDLE9BQU8sQ0FBQ3dJLEdBQUcsQ0FBQ3pJLEtBQUssQ0FBQztVQUNwQjtRQUNGO01BQ0YsQ0FBQztNQUFBLGdCQXBCS3NILFdBQVdBLENBQUE7UUFBQSxPQUFBQyxNQUFBLENBQUFySCxLQUFBLE9BQUFDLFNBQUE7TUFBQTtJQUFBLEdBb0JoQjtJQUNEbUgsV0FBVyxDQUFDLENBQUM7RUFDZixDQUFDLEVBQUUsQ0FBQzNILFlBQVksQ0FBQyxDQUFDO0VBRWxCLElBQUErSSxXQUFBLEdBQXdCOVUsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQStVLFdBQUEsR0FBQW5JLGNBQUEsQ0FBQWtJLFdBQUE7SUFBNUJFLElBQUksR0FBQUQsV0FBQTtJQUFFRSxPQUFPLEdBQUFGLFdBQUE7RUFDcEIsSUFBTUcsVUFBVSxHQUFJQyxDQUFDLElBQUs7SUFDeEJGLE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDO0VBQ1osQ0FBQztFQUNELElBQUFDLGdCQUFBLEdBQWdDdFYscURBQWMsQ0FBQyxLQUFLLENBQUM7SUFBQXVWLGdCQUFBLEdBQUF6SSxjQUFBLENBQUF3SSxnQkFBQTtJQUE5Q0UsUUFBUSxHQUFBRCxnQkFBQTtJQUFFRSxXQUFXLEdBQUFGLGdCQUFBO0VBRTVCLElBQU1HLFlBQVksR0FBSUMsS0FBSyxJQUFLLENBQUMvRixLQUFLLEVBQUVnRyxVQUFVLEtBQUs7SUFDckRILFdBQVcsQ0FBQ0csVUFBVSxHQUFHRCxLQUFLLEdBQUcsS0FBSyxDQUFDO0VBQ3pDLENBQUM7RUFDRCxDQUFDO0VBQ0QsSUFBQUUsV0FBQSxHQUEwQjNWLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUE0VixXQUFBLEdBQUFoSixjQUFBLENBQUErSSxXQUFBO0lBQTlCRSxLQUFLLEdBQUFELFdBQUE7SUFBRUUsUUFBUSxHQUFBRixXQUFBO0VBQ3RCLElBQU1HLFdBQVcsR0FBSVosQ0FBQyxJQUFLO0lBQ3pCVyxRQUFRLENBQUNYLENBQUMsQ0FBQztFQUNiLENBQUM7RUFFRCxDQUFDO0VBQ0QsSUFBQWEsV0FBQSxHQUEwQmhXLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFpVyxXQUFBLEdBQUFySixjQUFBLENBQUFvSixXQUFBO0lBQTlCRSxLQUFLLEdBQUFELFdBQUE7SUFBRUUsUUFBUSxHQUFBRixXQUFBO0VBQ3RCLElBQUFHLFdBQUEsR0FBNEJwVywrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBcVcsV0FBQSxHQUFBekosY0FBQSxDQUFBd0osV0FBQTtJQUFoQ0UsTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUN4QnRXLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQU15VyxhQUFhLEdBQUczSixRQUFRLENBQUM0SixTQUFTLENBQUNoSSxHQUFHLElBQUlBLEdBQUcsQ0FBQ3RDLEdBQUcsS0FBS2xCLEVBQUUsQ0FBQztJQUMvRCxJQUFJdUwsYUFBYSxLQUFLLENBQUMsQ0FBQyxFQUFFO01BQ3hCTCxRQUFRLENBQUNLLGFBQWEsQ0FBQztJQUN6QjtFQUNGLENBQUMsRUFBRSxDQUFDM0osUUFBUSxFQUFFNUIsRUFBRSxDQUFDLENBQUM7RUFDbEIsSUFBTXlMLGFBQWEsR0FBR0EsQ0FBQ3ZCLENBQUMsRUFBRXdCLFFBQVEsS0FBSztJQUNyQ1IsUUFBUSxDQUFDUSxRQUFRLENBQUM7RUFDcEIsQ0FBQztFQUNELElBQU1DLGFBQWEsR0FBR0EsQ0FBQ3pCLENBQUMsRUFBRXdCLFFBQVEsS0FBSztJQUNyQ0osU0FBUyxDQUFDSSxRQUFRLENBQUM7RUFDckIsQ0FBQztFQUNELElBQUFFLFdBQUEsR0FBNEI3VywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBOFcsV0FBQSxHQUFBbEssY0FBQSxDQUFBaUssV0FBQTtJQUFqQ0UsTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUN4QixJQUFNRyxZQUFZLEdBQUk5QixDQUFDLElBQUs7SUFDMUIsSUFBTWUsS0FBSyxHQUFHZixDQUFDLENBQUMrQixNQUFNLENBQUNoQixLQUFLO0lBQzVCYyxTQUFTLENBQUNkLEtBQUssQ0FBQztFQUNsQixDQUFDO0VBQ0QsSUFBQWlCLGdCQUFBLEdBQTRCclgscURBQWMsQ0FBQyxHQUFHLENBQUM7SUFBQXNYLGdCQUFBLEdBQUF4SyxjQUFBLENBQUF1SyxnQkFBQTtJQUF4Q0UsTUFBTSxHQUFBRCxnQkFBQTtJQUFFRSxTQUFTLEdBQUFGLGdCQUFBO0VBRXhCclgsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBTTZVLE1BQU0sR0FBR3RKLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNsRCxJQUFJcUosTUFBTSxFQUFFO01BQ1YwQyxTQUFTLENBQUMxQyxNQUFNLENBQUM7SUFDbkI7RUFDRixDQUFDLENBQUM7RUFDRixJQUFNMkMsYUFBYSxHQUFHQSxDQUFDN0gsS0FBSyxFQUFFaUgsUUFBUSxLQUFLO0lBQ3pDLElBQU1hLFdBQVcsR0FBR2IsUUFBUTtJQUM1QlcsU0FBUyxDQUFDRSxXQUFXLENBQUM7SUFDdEJsTSxZQUFZLENBQUNtTSxPQUFPLENBQUMsYUFBYSxFQUFFRCxXQUFXLENBQUM7RUFDbEQsQ0FBQztFQUNELElBQU1FLFFBQVEsR0FBR1gsTUFBTSxLQUFLLEVBQUUsR0FBR2xLLFFBQVEsQ0FBQzJELE1BQU0sQ0FBRS9CLEdBQUcsSUFDbkRBLEdBQUcsQ0FBQzFDLFlBQVksQ0FBQzRMLFdBQVcsQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQ2IsTUFBTSxDQUFDWSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQzdEbEosR0FBRyxDQUFDb0osVUFBVSxJQUFJcEosR0FBRyxDQUFDb0osVUFBVSxDQUFDRixXQUFXLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUNiLE1BQU0sQ0FBQ1ksV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUM3RWxKLEdBQUcsQ0FBQ3FKLFlBQVksSUFBSXJKLEdBQUcsQ0FBQ3FKLFlBQVksQ0FBQ0gsV0FBVyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDYixNQUFNLENBQUNZLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFDakZsSixHQUFHLENBQUNzSixlQUFlLElBQUl0SixHQUFHLENBQUNzSixlQUFlLENBQUNKLFdBQVcsQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQ2IsTUFBTSxDQUFDWSxXQUFXLENBQUMsQ0FBQyxDQUN4RixDQUFDLEdBQUc5SyxRQUFRO0VBQ1osQ0FBQztFQUNELENBQUM7RUFDRCxDQUFDO0VBQ0QsSUFBQW1MLFdBQUEsR0FBMEJoWSwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBaVksV0FBQSxHQUFBckwsY0FBQSxDQUFBb0wsV0FBQTtJQUE5QkUsS0FBSyxHQUFBRCxXQUFBO0lBQUVFLFFBQVEsR0FBQUYsV0FBQTtFQUN0QixJQUFNRyxXQUFXLEdBQUlqRCxDQUFDLElBQUs7SUFDekJnRCxRQUFRLENBQUNoRCxDQUFDLENBQUM7SUFDWGhHLFdBQVcsQ0FBQyxJQUFJLENBQUM7RUFDbkIsQ0FBQztFQUNELElBQUFrSixXQUFBLEdBQTRCclksK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXNZLFdBQUEsR0FBQTFMLGNBQUEsQ0FBQXlMLFdBQUE7SUFBakNFLE1BQU0sR0FBQUQsV0FBQTtJQUFFRSxTQUFTLEdBQUFGLFdBQUE7RUFDeEIsSUFBQUcsV0FBQSxHQUFpQ3pZLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUEwWSxXQUFBLEdBQUE5TCxjQUFBLENBQUE2TCxXQUFBO0lBQXRDRSxTQUFTLEdBQUFELFdBQUE7SUFBRUUsV0FBVyxHQUFBRixXQUFBO0VBQzdCLElBQUFHLFdBQUEsR0FBd0M3WSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBOFksV0FBQSxHQUFBbE0sY0FBQSxDQUFBaU0sV0FBQTtJQUE3Q0UsWUFBWSxHQUFBRCxXQUFBO0lBQUVFLGVBQWUsR0FBQUYsV0FBQTtFQUVwQy9ZLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQU1rWixZQUFZO01BQUEsSUFBQUMsTUFBQSxHQUFBeE4saUJBQUEsQ0FBRyxhQUFZO1FBQy9CLElBQUk7VUFBQSxJQUFBeU4sVUFBQSxFQUFBQyxxQkFBQTtVQUNGLElBQU16TixHQUFHLFNBQVNsSCw4Q0FBSyxDQUFDbUgsR0FBRyxJQUFBckUsTUFBQSxDQUFJN0MscURBQVksYUFBVSxDQUFDO1VBQ3RELElBQU1rUCxJQUFJLElBQUF1RixVQUFBLEdBQUd4TixHQUFHLENBQUNHLElBQUksY0FBQXFOLFVBQUEsZ0JBQUFBLFVBQUEsR0FBUkEsVUFBQSxDQUFVck4sSUFBSSxjQUFBcU4sVUFBQSx1QkFBZEEsVUFBQSxDQUFnQjNJLE1BQU0sQ0FBRS9CLEdBQUcsSUFBS0EsR0FBRyxDQUFDNEssV0FBVyxDQUFDQyxNQUFNLEtBQUtyTyxFQUFFLENBQUM7VUFDM0UyTixXQUFXLENBQUNoRixJQUFJLENBQUNoRixPQUFPLENBQUMsQ0FBQyxDQUFDO1VBQzNCLElBQU0ySyxlQUFlLFNBQVM5VSw4Q0FBSyxDQUFDbUgsR0FBRyxJQUFBckUsTUFBQSxDQUFJN0MscURBQVksa0JBQWUsQ0FBQztVQUN2RXNVLGVBQWUsRUFBQUkscUJBQUEsR0FBQ0csZUFBZSxDQUFDek4sSUFBSSxjQUFBc04scUJBQUEsZ0JBQUFBLHFCQUFBLEdBQXBCQSxxQkFBQSxDQUFzQnROLElBQUksY0FBQXNOLHFCQUFBLHVCQUExQkEscUJBQUEsQ0FBNEI1SSxNQUFNLENBQUUvQixHQUFHLElBQUtBLEdBQUcsQ0FBQzZLLE1BQU0sS0FBS3JPLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLENBQUMsQ0FBQyxPQUFPbUIsS0FBSyxFQUFFO1VBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7UUFDOUM7TUFDRixDQUFDO01BQUEsZ0JBVks2TSxZQUFZQSxDQUFBO1FBQUEsT0FBQUMsTUFBQSxDQUFBNU0sS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQVVqQjtJQUNEME0sWUFBWSxDQUFDLENBQUM7RUFDaEIsQ0FBQyxFQUFFLENBQUNoTyxFQUFFLENBQUMsQ0FBQztFQUVSLElBQU1vTyxXQUFXLEdBQ2pCO0lBQ0VDLE1BQU0sRUFBRXJPLEVBQUU7SUFDVnVPLE1BQU0sRUFBRXBPLElBQUksQ0FBQ1UsSUFBSSxDQUFDSSxRQUFRO0lBQzFCcU07RUFDRixDQUFDO0VBQ0QsQ0FBQztFQUVELElBQUFrQixXQUFBLEdBQThCelosK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTBaLFdBQUEsR0FBQTlNLGNBQUEsQ0FBQTZNLFdBQUE7SUFBdENFLE9BQU8sR0FBQUQsV0FBQTtJQUFFRSxVQUFVLEdBQUFGLFdBQUE7RUFDMUIsSUFBQUcsV0FBQSxHQUFnRDdaLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE4WixXQUFBLEdBQUFsTixjQUFBLENBQUFpTixXQUFBO0lBQXhERSxnQkFBZ0IsR0FBQUQsV0FBQTtJQUFFRSxtQkFBbUIsR0FBQUYsV0FBQTtFQUM1QyxJQUFBRyxXQUFBLEdBQThEamEsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWthLFdBQUEsR0FBQXROLGNBQUEsQ0FBQXFOLFdBQUE7SUFBdEVFLHVCQUF1QixHQUFBRCxXQUFBO0lBQUVFLDBCQUEwQixHQUFBRixXQUFBO0VBQzFELElBQUFHLFdBQUEsR0FBNERyYSwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBc2EsV0FBQSxHQUFBMU4sY0FBQSxDQUFBeU4sV0FBQTtJQUFwRUUsc0JBQXNCLEdBQUFELFdBQUE7SUFBRUUseUJBQXlCLEdBQUFGLFdBQUE7RUFDeEQsSUFBQUcsV0FBQSxHQUE0Q3phLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUEwYSxXQUFBLEdBQUE5TixjQUFBLENBQUE2TixXQUFBO0lBQXBERSxjQUFjLEdBQUFELFdBQUE7SUFBRUUsaUJBQWlCLEdBQUFGLFdBQUE7RUFFeEMsSUFBTUcsVUFBVSxHQUFHQSxDQUFBLEtBQU07SUFDdkJiLG1CQUFtQixDQUFDLElBQUksQ0FBQztJQUN6QkosVUFBVSxDQUFDLElBQUksQ0FBQztJQUNoQmtCLFVBQVUsQ0FBQyxNQUFNO01BQ2ZsQixVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDVCxDQUFDO0VBQ0QsSUFBTW1CLGlCQUFpQixHQUFHQSxDQUFBLEtBQU07SUFDOUJYLDBCQUEwQixDQUFDLElBQUksQ0FBQztJQUNoQ1IsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNoQmtCLFVBQVUsQ0FBQyxNQUFNO01BQ2ZsQixVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDVCxDQUFDO0VBQ0QsSUFBTW9CLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07SUFDN0JSLHlCQUF5QixDQUFDLElBQUksQ0FBQztJQUMvQlosVUFBVSxDQUFDLElBQUksQ0FBQztJQUNoQmtCLFVBQVUsQ0FBQyxNQUFNO01BQ2ZsQixVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDVCxDQUFDO0VBRUQsSUFBTXFCLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0lBQ3hCTCxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDdkJoQixVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2hCa0IsVUFBVSxDQUFDLE1BQU07TUFDZmxCLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNULENBQUM7RUFDRCxJQUFNc0IsV0FBVyxHQUFHQSxDQUFBLEtBQU07SUFDeEJsQixtQkFBbUIsQ0FBQyxLQUFLLENBQUM7RUFDNUIsQ0FBQztFQUNELElBQU1tQixrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNO0lBQy9CQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7RUFDMUIsQ0FBQztFQUNELElBQU1DLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07SUFDN0JYLGlCQUFpQixDQUFDLEtBQUssQ0FBQztFQUMxQixDQUFDO0VBQ0QsQ0FBQztFQUNELElBQUFZLFdBQUEsR0FBMEN4YiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBeWIsV0FBQSxHQUFBN08sY0FBQSxDQUFBNE8sV0FBQTtJQUEvQ0UsYUFBYSxHQUFBRCxXQUFBO0lBQUVFLGdCQUFnQixHQUFBRixXQUFBO0VBQ3RDLElBQUFHLFdBQUEsR0FBZ0Q1YiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBNmIsV0FBQSxHQUFBalAsY0FBQSxDQUFBZ1AsV0FBQTtJQUFyREUsZ0JBQWdCLEdBQUFELFdBQUE7SUFBRUUsbUJBQW1CLEdBQUFGLFdBQUE7RUFDNUMsU0FBU0csWUFBWUEsQ0FBQzdHLENBQUMsRUFBRTtJQUN2QixJQUFJWCxNQUFNLEdBQUcsSUFBSUMsVUFBVSxDQUFDLENBQUM7SUFDN0JELE1BQU0sQ0FBQ0UsYUFBYSxDQUFDUyxDQUFDLENBQUMrQixNQUFNLENBQUMrRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkN6SCxNQUFNLENBQUMwSCxNQUFNLEdBQUcsTUFBTTtNQUNwQlAsZ0JBQWdCLENBQUNuSCxNQUFNLENBQUNJLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBQ0RKLE1BQU0sQ0FBQzJILE9BQU8sR0FBRy9QLEtBQUssSUFBSTtNQUN4QkMsT0FBTyxDQUFDd0ksR0FBRyxDQUFDLE9BQU8sRUFBRXpJLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0QyUCxtQkFBbUIsQ0FBQzVHLENBQUMsQ0FBQytCLE1BQU0sQ0FBQytFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN4QztFQUNBLElBQU1HLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0lBQzVCVCxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7RUFDdEIsQ0FBQztFQUNELElBQU1VLGlCQUFpQjtJQUFBLElBQUFDLE1BQUEsR0FBQTVRLGlCQUFBLENBQUcsV0FBT3lKLENBQUMsRUFBSztNQUNyQ0EsQ0FBQyxDQUFDb0gsY0FBYyxDQUFDLENBQUM7TUFDbEIsSUFBTUMsUUFBUSxHQUFHLElBQUlDLFFBQVEsQ0FBQyxDQUFDO01BQy9CRCxRQUFRLENBQUNFLE1BQU0sQ0FBQyxPQUFPLEVBQUVaLGdCQUFnQixDQUFDO01BQzFDVSxRQUFRLENBQUNFLE1BQU0sQ0FBQyxjQUFjLEVBQUUzUSxZQUFZLENBQUM7TUFDN0MsSUFBSTtRQUNGLE1BQU10SCw4Q0FBSyxDQUFDa1ksSUFBSSxJQUFBcFYsTUFBQSxDQUFJN0MscURBQVksb0JBQWlCOFgsUUFBUSxFQUFFO1VBQ3pESSxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUU7VUFDbEI7UUFDRixDQUFDLENBQUM7UUFDRjdCLGlCQUFpQixDQUFDLENBQUM7TUFDckIsQ0FBQyxDQUFDLE9BQU8zTyxLQUFLLEVBQUU7UUFDZDZPLFdBQVcsQ0FBQyxDQUFDO01BQ2Y7SUFDRixDQUFDO0lBQUEsZ0JBZktvQixpQkFBaUJBLENBQUFRLEVBQUE7TUFBQSxPQUFBUCxNQUFBLENBQUFoUSxLQUFBLE9BQUFDLFNBQUE7SUFBQTtFQUFBLEdBZXRCO0VBQ0QsSUFBTXVRLGlCQUFpQjtJQUFBLElBQUFDLE1BQUEsR0FBQXJSLGlCQUFBLENBQUcsV0FBT3lKLENBQUMsRUFBSztNQUNyQ0EsQ0FBQyxDQUFDb0gsY0FBYyxDQUFDLENBQUM7TUFDbEIsSUFBSW5KLE1BQU0sS0FBSyxJQUFJLEVBQUU7UUFDbkIsSUFBSTtVQUNGLElBQU16SCxHQUFHLFNBQVNsSCw4Q0FBSyxDQUFDdVksTUFBTSxJQUFBelYsTUFBQSxDQUFJN0MscURBQVksb0JBQUE2QyxNQUFBLENBQWlCNkwsTUFBTSxDQUFDakgsR0FBRyxDQUFFLENBQUM7VUFDNUUsSUFBSVIsR0FBRyxFQUFFO1lBQ1BxUCxnQkFBZ0IsQ0FBQyxDQUFDO1VBQ3BCO1FBQ0YsQ0FBQyxDQUFDLE9BQU81TyxLQUFLLEVBQUU7VUFDZEMsT0FBTyxDQUFDd0ksR0FBRyxDQUFDekksS0FBSyxDQUFDO1FBQ3BCO01BQ0Y7SUFFRixDQUFDO0lBQUEsZ0JBYkswUSxpQkFBaUJBLENBQUFHLEdBQUE7TUFBQSxPQUFBRixNQUFBLENBQUF6USxLQUFBLE9BQUFDLFNBQUE7SUFBQTtFQUFBLEdBYXRCO0VBQ0QsSUFBTTJRLFdBQVcsR0FBR3BZLDZDQUFLLENBQUNxWSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDckMsSUFBTUMsZ0JBQWdCO0lBQUEsSUFBQUMsTUFBQSxHQUFBNVIsaUJBQUEsQ0FBRyxXQUFPeUosQ0FBQyxFQUFLO01BQ3BDQSxDQUFDLENBQUNvSCxjQUFjLENBQUMsQ0FBQztNQUNsQixJQUFNelEsSUFBSSxHQUFHO1FBQ1h1TixXQUFXO1FBQ1g2RDtNQUNGLENBQUM7TUFDRCxJQUFJO1FBQ0YsSUFBTXZSLEdBQUcsU0FBU2xILDhDQUFLLENBQUNrWSxJQUFJLElBQUFwVixNQUFBLENBQUk3QyxxREFBWSx1QkFBb0JvSCxJQUFJLENBQUM7UUFDckUsSUFBSUgsR0FBRyxFQUFFO1VBQ1A2TSxTQUFTLENBQUMsRUFBRSxDQUFDO1VBQ2JxQyxVQUFVLENBQUMsQ0FBQztVQUNaLElBQU0wQyxPQUFPLEdBQUc1UixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSTtVQUM3QjhNLFdBQVcsQ0FBQyxDQUFDMkUsT0FBTyxFQUFFLEdBQUc1RSxTQUFTLENBQUMsQ0FBQztRQUN0QztNQUNGLENBQUMsQ0FBQyxPQUFPdk0sS0FBSyxFQUFFO1FBQ2QsSUFBSUEsS0FBSyxFQUFFO1VBQ1Q2TyxXQUFXLENBQUMsQ0FBQztRQUNmO01BQ0Y7SUFDRixDQUFDO0lBQUEsZ0JBbkJLb0MsZ0JBQWdCQSxDQUFBRyxHQUFBO01BQUEsT0FBQUYsTUFBQSxDQUFBaFIsS0FBQSxPQUFBQyxTQUFBO0lBQUE7RUFBQSxHQW1CckI7RUFDRCxJQUFNa1IsY0FBYyxHQUFHLEVBQUU7RUFFekJ4USxPQUFPLENBQUN5USxPQUFPLENBQUNqUCxHQUFHLElBQUk7SUFDckJnUCxjQUFjLENBQUNFLElBQUksQ0FBQztNQUNsQnJKLElBQUksRUFBRSxTQUFTO01BQ2ZzSixLQUFLLEVBQUVuUCxHQUFHLENBQUNtUCxLQUFLO01BQ2hCQyxJQUFJLEVBQUVwUCxHQUFHLENBQUNxUCxPQUFPO01BQ2pCQyxNQUFNLEVBQUV0UCxHQUFHLENBQUN1UCxTQUFTO01BQ3JCQyxXQUFXLEVBQUUsYUFBYTtNQUMxQnZNLFFBQVEsRUFBRWpELEdBQUcsQ0FBQ3lQLFFBQVE7TUFDdEJuTSxTQUFTLEVBQUV0RCxHQUFHLENBQUMwUDtJQUNqQixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7RUFDRjlRLFFBQVEsQ0FBQ3FRLE9BQU8sQ0FBQ2pQLEdBQUcsSUFBSTtJQUFBLElBQUEyUCxvQkFBQTtJQUN0QlgsY0FBYyxDQUFDRSxJQUFJLENBQUM7TUFDbEJySixJQUFJLEVBQUUsVUFBVTtNQUNoQnNKLEtBQUssRUFBRW5QLEdBQUcsQ0FBQzRQLFdBQVc7TUFDdEJSLElBQUksRUFBRXBQLEdBQUcsQ0FBQzRQLFdBQVc7TUFDckJOLE1BQU0sRUFBRXRQLEdBQUcsQ0FBQzZQLGFBQWE7TUFDekJMLFdBQVcsRUFBRSxDQUFDLEVBQUFHLG9CQUFBLEdBQUEzUCxHQUFHLENBQUM4UCxlQUFlLGNBQUFILG9CQUFBLHVCQUFuQkEsb0JBQUEsQ0FBcUJJLGdCQUFnQixLQUFJLEtBQUssSUFBSSxLQUFLLElBQUkvUCxHQUFHLENBQUN3UCxXQUFXLElBQUksRUFBRSxDQUFDO01BQy9Gdk0sUUFBUSxFQUFFakQsR0FBRyxDQUFDaUQsUUFBUSxJQUFJLENBQUM7TUFDM0JLLFNBQVMsRUFBRXRELEdBQUcsQ0FBQ3NELFNBQVMsSUFBSTtJQUM5QixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7RUFDRixJQUFBME0sV0FBQSxHQUEwQ3plLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUEwZSxXQUFBLEdBQUE5UixjQUFBLENBQUE2UixXQUFBO0lBQS9DRSxhQUFhLEdBQUFELFdBQUE7SUFBRUUsZ0JBQWdCLEdBQUFGLFdBQUE7RUFDdEMsSUFBQUcsV0FBQSxHQUFrQzdlLCtDQUFRLENBQUMsTUFBTTtNQUMvQyxJQUFNNmQsSUFBSSxHQUFHLElBQUlWLElBQUksQ0FBQyxDQUFDO01BQ3ZCLE9BQU9VLElBQUk7SUFDYixDQUFDLENBQUM7SUFBQWlCLFdBQUEsR0FBQWxTLGNBQUEsQ0FBQWlTLFdBQUE7SUFIS0UsU0FBUyxHQUFBRCxXQUFBO0lBQUVFLFlBQVksR0FBQUYsV0FBQTtFQUs5QixJQUFJRyxPQUFPLEdBQUcsQ0FBQztFQUNmLElBQUlDLFFBQVEsR0FBRyxDQUFDO0VBQ2hCLElBQU1DLGtCQUFrQixHQUFHMUIsY0FBYyxhQUFkQSxjQUFjLHVCQUFkQSxjQUFjLENBQUVqTixNQUFNLENBQUUvQixHQUFHLElBQUszSiw2Q0FBSyxDQUFDMkosR0FBRyxDQUFDbVAsS0FBSyxDQUFDLENBQUN3QixNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUt0YSw2Q0FBSyxDQUFDaWEsU0FBUyxDQUFDLENBQUNLLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztFQUN6SSxJQUFNQyxRQUFRLEdBQUdGLGtCQUFrQixDQUFDRyxNQUFNLEdBQUcsQ0FBQyxHQUFHSCxrQkFBa0IsQ0FBQ3hOLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVuRCxHQUFHLEtBQUttRCxHQUFHLEdBQUdkLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ2lELFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDL0gsSUFBTTZOLFNBQVMsR0FBR0osa0JBQWtCLENBQUNHLE1BQU0sR0FBRyxDQUFDLEdBQUdILGtCQUFrQixDQUFDeE4sTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRW5ELEdBQUcsS0FBS21ELEdBQUcsR0FBR2QsVUFBVSxDQUFDckMsR0FBRyxDQUFDc0QsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUNqSSxJQUFNeU4sUUFBUSxHQUFHL0IsY0FBYyxDQUFDak4sTUFBTSxDQUFFL0IsR0FBRyxJQUFLM0osNkNBQUssQ0FBQzJKLEdBQUcsQ0FBQ21QLEtBQUssQ0FBQyxDQUFDd0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLdGEsNkNBQUssQ0FBQ2lhLFNBQVMsQ0FBQyxDQUFDSyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLLElBQUl4QyxJQUFJLENBQUN1QyxDQUFDLENBQUM3QixJQUFJLENBQUMsR0FBRyxJQUFJVixJQUFJLENBQUN3QyxDQUFDLENBQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDclAsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRW1SLENBQUMsS0FBSztJQUNqTSxJQUFJblIsR0FBRyxDQUFDNkYsSUFBSSxLQUFLLFNBQVMsRUFBRTtNQUMxQjJLLE9BQU8sSUFBSW5PLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ2lELFFBQVEsQ0FBQztNQUNuQ3dOLFFBQVEsSUFBSXBPLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ3NELFNBQVMsQ0FBQztJQUN2QyxDQUFDLE1BQU0sSUFBSXRELEdBQUcsQ0FBQzZGLElBQUksS0FBSyxVQUFVLEVBQUU7TUFDbEMySyxPQUFPLElBQUluTyxVQUFVLENBQUNyQyxHQUFHLENBQUNpRCxRQUFRLENBQUM7TUFDbkN3TixRQUFRLElBQUlwTyxVQUFVLENBQUNyQyxHQUFHLENBQUNzRCxTQUFTLENBQUM7SUFDdkM7SUFDQSxvQkFDRWpTLDBEQUFBO01BQUkrZixHQUFHLEVBQUVEO0lBQUUsZ0JBQ1Q5ZiwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVvWCxTQUFTLEVBQUUsTUFBTTtRQUFFQyxZQUFZLEVBQUU7TUFBaUI7SUFBRSxHQUFFamIsNkNBQUssQ0FBQzJKLEdBQUcsQ0FBQ29QLElBQUksQ0FBQyxDQUFDdUIsTUFBTSxDQUFDLFlBQVksQ0FBTSxDQUFDLGVBQzdHdGYsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFb1gsU0FBUyxFQUFFLE1BQU07UUFBRUMsWUFBWSxFQUFFO01BQWlCO0lBQUUsR0FBRXRSLEdBQUcsQ0FBQzZGLElBQVMsQ0FBQyxlQUNqRnhVLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRW9YLFNBQVMsRUFBRSxNQUFNO1FBQUVDLFlBQVksRUFBRTtNQUFpQjtJQUFFLGdCQUMvRGpnQiwwREFBQSxlQUFPMk8sR0FBRyxDQUFDNkYsSUFBSSxLQUFLLFNBQVMsSUFBSzdGLEdBQUcsQ0FBQ3dQLFdBQVcsR0FBRyxZQUFZLEdBQUd4UCxHQUFHLENBQUNzUCxNQUFjLENBQUMsZUFDdEZqZSwwREFBQSxlQUFPMk8sR0FBRyxDQUFDNkYsSUFBSSxLQUFLLFVBQVUsSUFBSyxTQUFTLEdBQUc3RixHQUFHLENBQUNzUCxNQUFNLEdBQUcsS0FBSyxHQUFHdFAsR0FBRyxDQUFDd1AsV0FBbUIsQ0FDekYsQ0FBQyxlQUNMbmUsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFb1gsU0FBUyxFQUFFLE1BQU07UUFBRUMsWUFBWSxFQUFFO01BQWlCO0lBQUUsR0FBRXRSLEdBQUcsQ0FBQzZGLElBQUksS0FBSyxTQUFTLEdBQUcsTUFBQS9NLE1BQUEsQ0FBTXVKLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ2lELFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQ1QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxVQUFBelksTUFBQSxDQUFXdUosVUFBVSxDQUFDckMsR0FBRyxDQUFDc0QsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDZCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLE1BQUcsR0FBRyxFQUFPLENBQUMsZUFDeFJsZ0IsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFb1gsU0FBUyxFQUFFLE1BQU07UUFBRUMsWUFBWSxFQUFFO01BQWlCO0lBQUUsR0FBRXRSLEdBQUcsQ0FBQzZGLElBQUksS0FBSyxVQUFVLEdBQUcsTUFBQS9NLE1BQUEsQ0FBTXVKLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ2lELFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQ1QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxVQUFBelksTUFBQSxDQUFXdUosVUFBVSxDQUFDckMsR0FBRyxDQUFDc0QsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDZCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLE1BQUcsR0FBRyxFQUFPLENBQUMsZUFDelJsZ0IsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFb1gsU0FBUyxFQUFFLE1BQU07UUFBRUMsWUFBWSxFQUFFO01BQWlCO0lBQUUsR0FBRSxNQUFBeFksTUFBQSxDQUFNdUosVUFBVSxDQUFDbU8sT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDaE8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxVQUFBelksTUFBQSxDQUFXdUosVUFBVSxDQUFDb08sUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDak8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxNQUFRLENBQzdPLENBQUM7RUFFVCxDQUFDLENBQUM7RUFDRixJQUFBQyxXQUFBLEdBQThCamdCLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFrZ0IsV0FBQSxHQUFBdFQsY0FBQSxDQUFBcVQsV0FBQTtJQUFuQ0UsT0FBTyxHQUFBRCxXQUFBO0lBQUVFLFVBQVUsR0FBQUYsV0FBQTtFQUUxQixJQUFNRyxhQUFhLEdBQUlsTCxDQUFDLElBQUs7SUFDM0IsSUFBTWUsS0FBSyxHQUFHZixDQUFDLENBQUMrQixNQUFNLENBQUNoQixLQUFLO0lBQzVCa0ssVUFBVSxDQUFDbEssS0FBSyxDQUFDO0VBQ25CLENBQUM7RUFDRCxJQUFNb0ssU0FBUyxHQUFHSCxPQUFPLEtBQUssRUFBRSxHQUFHN1EsT0FBTyxDQUFDa0IsTUFBTSxDQUFFL0IsR0FBRyxJQUNwREEsR0FBRyxDQUFDOEosTUFBTSxDQUFDWixXQUFXLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUN1SSxPQUFPLENBQUN4SSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQ3hEbEosR0FBRyxDQUFDNEQsU0FBUyxDQUFDa08sYUFBYSxDQUFDNUksV0FBVyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDdUksT0FBTyxDQUFDeEksV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUN6RWxKLEdBQUcsQ0FBQytSLGFBQWEsQ0FBQ0MsSUFBSSxDQUFFblAsSUFBSSxJQUFLQSxJQUFJLENBQUNvUCxRQUFRLENBQUNBLFFBQVEsQ0FBQy9JLFdBQVcsQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQ3VJLE9BQU8sQ0FBQ3hJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUN0R2xKLEdBQUcsQ0FBQytSLGFBQWEsQ0FBQ0MsSUFBSSxDQUFFblAsSUFBSSxJQUFLQSxJQUFJLENBQUNxUCxlQUFlLENBQUNoSixXQUFXLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUN1SSxPQUFPLENBQUN4SSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFDcEc3Uyw2Q0FBSyxDQUFDMkosR0FBRyxDQUFDbVMsV0FBVyxDQUFDLENBQUN4QixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUN4SCxRQUFRLENBQUN1SSxPQUFPLENBQzlELENBQUMsR0FBRzdRLE9BQU87RUFDWCxJQUFNdVIsZ0JBQWdCLEdBQUdQLFNBQVMsQ0FBQ2hCLE1BQU0sR0FBRyxDQUFDLEdBQUdnQixTQUFTLENBQUMzTyxNQUFNLENBQUMsQ0FBQ0UsR0FBRyxFQUFFcEQsR0FBRyxLQUFLO0lBQUUsT0FBT29ELEdBQUcsR0FBR3BELEdBQUcsQ0FBQytSLGFBQWEsQ0FBQzdPLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVXLElBQUksS0FBS1gsR0FBRyxHQUFHZCxVQUFVLENBQUN5QixJQUFJLENBQUN1TyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7RUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUVyTCxDQUFDO0VBQ0QsSUFBQUMsZ0JBQUEsR0FBOEJqaEIscURBQWMsQ0FBQyxJQUFJLENBQUM7SUFBQWtoQixnQkFBQSxHQUFBcFUsY0FBQSxDQUFBbVUsZ0JBQUE7SUFBM0NFLE9BQU8sR0FBQUQsZ0JBQUE7SUFBRUUsVUFBVSxHQUFBRixnQkFBQTtFQUMxQixJQUFNRyxZQUFZLEdBQUdBLENBQUEsS0FBTTtJQUN6QkQsVUFBVSxDQUFDLENBQUNELE9BQU8sQ0FBQztFQUN0QixDQUFDO0VBRUQsU0FBU0csR0FBR0EsQ0FBQ3RhLEtBQUssRUFBRTtJQUNsQixJQUFRMkgsR0FBRyxHQUFLM0gsS0FBSyxDQUFiMkgsR0FBRztJQUNYLElBQUE0UyxnQkFBQSxHQUF3QnZoQixxREFBYyxDQUFDLEtBQUssQ0FBQztNQUFBd2hCLGdCQUFBLEdBQUExVSxjQUFBLENBQUF5VSxnQkFBQTtNQUF0QzVYLElBQUksR0FBQTZYLGdCQUFBO01BQUVDLE9BQU8sR0FBQUQsZ0JBQUE7SUFFcEIsb0JBQ0V4aEIsMERBQUEsQ0FBQ0EsdURBQWMscUJBQ2JBLDBEQUFBLENBQUNjLHFEQUFRO01BQUM2Z0IsRUFBRSxFQUFFO1FBQUUsT0FBTyxFQUFFO1VBQUUxQixZQUFZLEVBQUU7UUFBUTtNQUFFO0lBQUUsZ0JBQ25EamdCLDBEQUFBLENBQUNhLHFEQUFTLHFCQUNSYiwwREFBQSxDQUFDVSxxREFBVTtNQUNULGNBQVcsWUFBWTtNQUN2QmtoQixJQUFJLEVBQUMsT0FBTztNQUNaQyxPQUFPLEVBQUVBLENBQUEsS0FBTUosT0FBTyxDQUFDLENBQUM5WCxJQUFJO0lBQUUsR0FFN0JBLElBQUksZ0JBQUczSiwwREFBQSxDQUFDMkQsNERBQXVCLE1BQUUsQ0FBQyxnQkFBRzNELDBEQUFBLENBQUN5RCw0REFBeUIsTUFBRSxDQUN4RCxDQUNILENBQUMsZUFDWnpELDBEQUFBLENBQUNhLHFEQUFTO01BQUNpaEIsU0FBUyxFQUFDLElBQUk7TUFBQ0MsS0FBSyxFQUFDO0lBQUssR0FBQyxnQ0FDTixFQUFDL2MsNkNBQUssQ0FBQzJKLEdBQUcsQ0FBQ21QLEtBQUssQ0FBQyxDQUFDd0IsTUFBTSxDQUFDLFdBQVcsQ0FDekQsQ0FBQyxlQUNadGYsMERBQUEsQ0FBQ2EscURBQVM7TUFBQ21oQixLQUFLLEVBQUM7SUFBTyxHQUFFclQsR0FBRyxDQUFDc1QsS0FBSyxFQUFDLE9BQWdCLENBQUMsZUFDckRqaUIsMERBQUEsQ0FBQ2EscURBQVM7TUFBQ21oQixLQUFLLEVBQUM7SUFBTyxHQUFDLEtBQUcsRUFBQ2hSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ3VULFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQy9RLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsRUFBQyxHQUFDLGVBQUFsZ0IsMERBQUEsZUFBTSxJQUFFLGVBQUFBLDBEQUFBLGVBQU9nUixVQUFVLENBQUMsQ0FBQ3JDLEdBQUcsQ0FBQ3VULFNBQVMsSUFBSSxDQUFDLEtBQUt2VCxHQUFHLENBQUNaLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDb0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFDLEtBQU8sQ0FBWSxDQUNuUCxDQUFDLGVBQ1hsZ0IsMERBQUEsQ0FBQ2MscURBQVEscUJBQ1BkLDBEQUFBLENBQUNhLHFEQUFTO01BQUMrSCxLQUFLLEVBQUU7UUFBRXVaLGFBQWEsRUFBRSxDQUFDO1FBQUVDLFVBQVUsRUFBRTtNQUFFLENBQUU7TUFBQ0MsT0FBTyxFQUFFO0lBQUUsZ0JBQ2hFcmlCLDBEQUFBLENBQUNPLHFEQUFRO01BQUMraEIsRUFBRSxFQUFFM1ksSUFBSztNQUFDNFksT0FBTyxFQUFDLE1BQU07TUFBQ0MsYUFBYTtJQUFBLGdCQUM5Q3hpQiwwREFBQSxDQUFDNEIsc0RBQUc7TUFBQytmLEVBQUUsRUFBRTtRQUFFYyxNQUFNLEVBQUU7TUFBRTtJQUFFLGdCQUNyQnppQiwwREFBQSxDQUFDc0Isc0RBQVU7TUFBQ29oQixPQUFPLEVBQUMsSUFBSTtNQUFDQyxZQUFZO01BQUNiLFNBQVMsRUFBQztJQUFLLEdBQUMsU0FFMUMsQ0FBQyxlQUNiOWhCLDBEQUFBO01BQU8rRyxTQUFTLEVBQUMsYUFBYTtNQUFDNkIsS0FBSyxFQUFFO1FBQUViLFFBQVEsRUFBRSxLQUFLO1FBQUU2YSxZQUFZLEVBQUUsS0FBSztRQUFFQyxNQUFNLEVBQUU7TUFBaUI7SUFBRSxnQkFDdkc3aUIsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVrYSxPQUFPLEVBQUUsS0FBSztRQUFFRCxNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUUsT0FBTztRQUFFRCxlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUMsY0FBZ0IsQ0FBQyxlQUN0SDNILDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRWthLE9BQU8sRUFBRSxLQUFLO1FBQUVELE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWpiLEtBQUssRUFBRSxPQUFPO1FBQUVELGVBQWUsRUFBRTtNQUFVO0lBQUUsR0FBQyxvQkFBc0IsQ0FBQyxlQUM1SDNILDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRWthLE9BQU8sRUFBRSxLQUFLO1FBQUVELE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWpiLEtBQUssRUFBRSxPQUFPO1FBQUVELGVBQWUsRUFBRTtNQUFVO0lBQUUsR0FBQyxlQUFpQixDQUFDLGVBQ3ZIM0gsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFa2EsT0FBTyxFQUFFLEtBQUs7UUFBRUQsTUFBTSxFQUFFLGdCQUFnQjtRQUFFamIsS0FBSyxFQUFFLE9BQU87UUFBRUQsZUFBZSxFQUFFO01BQVUsQ0FBRTtNQUFDMGEsT0FBTyxFQUFFO0lBQUUsR0FBQyxpQkFBbUIsQ0FDbEksQ0FDQyxDQUFDLGVBQ1JyaUIsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUTtJQUFFLEdBQUMsWUFBYyxDQUFDLGVBQ3hGNUgsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFSyxLQUFLLEVBQUUsT0FBTztRQUFFNFosTUFBTSxFQUFFLGdCQUFnQjtRQUFFamIsS0FBSyxFQUFFO01BQVE7SUFBRSxnQkFDdEU1SCwwREFBQSxlQUFPZ1IsVUFBVSxDQUFDckMsR0FBRyxDQUFDb1UsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDNVIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxFQUFDLEdBQU8sQ0FBQyxLQUFDLGVBQUFsZ0IsMERBQUEsZUFBTSxJQUFFLGVBQUFBLDBEQUFBLGVBQU9nUixVQUFVLENBQUMsQ0FBQ3JDLEdBQUcsQ0FBQ29VLFdBQVcsSUFBSSxDQUFDLEtBQUtwVSxHQUFHLENBQUNaLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDb0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFDLEtBQU8sQ0FDbk8sQ0FBQyxlQUNMbGdCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRTRaLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWpiLEtBQUssRUFBRTtNQUFRO0lBQUUsZ0JBQ3RFNUgsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ3FVLGFBQWEsSUFBSSxDQUFDLENBQUMsQ0FBQzdSLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFDLGVBQUFsZ0IsMERBQUEsZUFBTSxJQUFFLGVBQUFBLDBEQUFBLGVBQU9nUixVQUFVLENBQUMsQ0FBQ3JDLEdBQUcsQ0FBQ3FVLGFBQWEsSUFBSSxDQUFDLEtBQUtyVSxHQUFHLENBQUNaLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDb0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFDLEtBQU8sQ0FDdE8sQ0FBQyxlQUNMbGdCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRTRaLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWpiLEtBQUssRUFBRTtNQUFRO0lBQUUsR0FBQyx5QkFBMkIsQ0FBQyxlQUNyRzVILDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRTRaLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWpiLEtBQUssRUFBRTtNQUFRO0lBQUUsZ0JBQ3RFNUgsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ3NVLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQzlSLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsRUFBQyxHQUFPLENBQUMsS0FBQyxlQUFBbGdCLDBEQUFBLGVBQU0sSUFBRSxlQUFBQSwwREFBQSxlQUFPZ1IsVUFBVSxDQUFDLENBQUNyQyxHQUFHLENBQUNzVSxjQUFjLElBQUksQ0FBQyxLQUFLdFUsR0FBRyxDQUFDWixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ29ELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFPLENBQ3pPLENBQ0YsQ0FBQyxlQUNMbGdCLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUTtJQUFFLEdBQUMsc0JBQXdCLENBQUMsZUFDbEc1SCwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUTtJQUFFLGdCQUN0RTVILDBEQUFBLGVBQU9nUixVQUFVLENBQUNyQyxHQUFHLENBQUN1VSxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMvUixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsR0FBTyxDQUFDLEtBQUMsZUFBQWxnQiwwREFBQSxlQUFNLElBQUUsZUFBQUEsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQyxDQUFDckMsR0FBRyxDQUFDdVUsY0FBYyxJQUFJLENBQUMsS0FBS3ZVLEdBQUcsQ0FBQ1osSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNvRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFRLENBQUMsS0FBTyxDQUN6TyxDQUFDLGVBQ0xsZ0IsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFSyxLQUFLLEVBQUUsT0FBTztRQUFFNFosTUFBTSxFQUFFLGdCQUFnQjtRQUFFamIsS0FBSyxFQUFFO01BQVE7SUFBRSxnQkFDdEU1SCwwREFBQSxlQUFPZ1IsVUFBVSxDQUFDckMsR0FBRyxDQUFDd1UsZ0JBQWdCLElBQUksQ0FBQyxDQUFDLENBQUNoUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsR0FBTyxDQUFDLEtBQUMsZUFBQWxnQiwwREFBQSxlQUFNLElBQUUsZUFBQUEsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQyxDQUFDckMsR0FBRyxDQUFDd1UsZ0JBQWdCLElBQUksQ0FBQyxLQUFLeFUsR0FBRyxDQUFDWixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ29ELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFPLENBQzdPLENBQUMsZUFDTGxnQiwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUTtJQUFFLEdBQUMsV0FBYSxDQUFDLGVBQ3ZGNUgsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFSyxLQUFLLEVBQUUsT0FBTztRQUFFNFosTUFBTSxFQUFFLGdCQUFnQjtRQUFFamIsS0FBSyxFQUFFO01BQVE7SUFBRSxnQkFDdEU1SCwwREFBQSxlQUFPZ1IsVUFBVSxDQUFDckMsR0FBRyxDQUFDeVUsa0JBQWtCLElBQUksQ0FBQyxDQUFDLENBQUNqUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsR0FBTyxDQUFDLEtBQUMsZUFBQWxnQiwwREFBQSxlQUFNLElBQUUsZUFBQUEsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQyxDQUFDckMsR0FBRyxDQUFDeVUsa0JBQWtCLElBQUksQ0FBQyxLQUFLelUsR0FBRyxDQUFDWixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ29ELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFPLENBQ2pQLENBQ0YsQ0FBQyxlQUNMbGdCLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUTtJQUFFLEdBQUMsaUJBQW1CLENBQUMsZUFDN0Y1SCwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUTtJQUFFLGdCQUN0RTVILDBEQUFBLGVBQU9nUixVQUFVLENBQUNyQyxHQUFHLENBQUMwVSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUNsUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFRLENBQUMsS0FBQyxlQUFBbGdCLDBEQUFBLGVBQU0sSUFBRSxlQUFBQSwwREFBQSxlQUFPZ1IsVUFBVSxDQUFDLENBQUNyQyxHQUFHLENBQUMwVSxTQUFTLElBQUksQ0FBQyxLQUFLMVUsR0FBRyxDQUFDWixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ29ELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFPLENBQzlOLENBQUMsZUFDTGxnQiwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUTtJQUFFLGdCQUN0RTVILDBEQUFBLGVBQU9nUixVQUFVLENBQUNyQyxHQUFHLENBQUMyVSxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUNuUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsR0FBTyxDQUFDLEtBQUMsZUFBQWxnQiwwREFBQSxlQUFNLElBQUUsZUFBQUEsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQyxDQUFDckMsR0FBRyxDQUFDMlUsV0FBVyxJQUFJLENBQUMsS0FBSzNVLEdBQUcsQ0FBQ1osSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNvRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFRLENBQUMsS0FBTyxDQUNuTyxDQUFDLGVBQ0xsZ0IsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFSyxLQUFLLEVBQUUsT0FBTztRQUFFNFosTUFBTSxFQUFFLGdCQUFnQjtRQUFFamIsS0FBSyxFQUFFO01BQVE7SUFBRSxHQUFDLE1BQVEsQ0FBQyxlQUNsRjVILDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRTRaLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWpiLEtBQUssRUFBRTtNQUFRO0lBQUUsZ0JBQ3RFNUgsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQzRVLGFBQWEsSUFBSSxDQUFDLENBQUMsQ0FBQ3BTLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsRUFBQyxHQUFPLENBQUMsS0FBQyxlQUFBbGdCLDBEQUFBLGVBQU0sSUFBRSxlQUFBQSwwREFBQSxlQUFPZ1IsVUFBVSxDQUFDLENBQUNyQyxHQUFHLENBQUM0VSxhQUFhLElBQUksQ0FBQyxLQUFLNVUsR0FBRyxDQUFDWixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ29ELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFPLENBQ3ZPLENBQ0YsQ0FBQyxlQUNMbGdCLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUTtJQUFFLEdBQUMsc0JBQXdCLENBQUMsZUFDbEc1SCwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUTtJQUFFLGdCQUN0RTVILDBEQUFBLGVBQU9nUixVQUFVLENBQUNyQyxHQUFHLENBQUM2VSxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsQ0FBQ3JTLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsRUFBQyxHQUFPLENBQUMsS0FBQyxlQUFBbGdCLDBEQUFBLGVBQU0sSUFBRSxlQUFBQSwwREFBQSxlQUFPZ1IsVUFBVSxDQUFDLENBQUNyQyxHQUFHLENBQUM2VSxnQkFBZ0IsSUFBSSxDQUFDLEtBQUs3VSxHQUFHLENBQUNaLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDb0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFDLEtBQU8sQ0FDN08sQ0FBQyxlQUNMbGdCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRTRaLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWpiLEtBQUssRUFBRTtNQUFRO0lBQUUsZ0JBQ3RFNUgsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQzhVLHVCQUF1QixJQUFJLENBQUMsQ0FBQyxDQUFDdFMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFDLEtBQUMsZUFBQWxnQiwwREFBQSxlQUFNLElBQUUsZUFBQUEsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQyxDQUFDckMsR0FBRyxDQUFDOFUsdUJBQXVCLElBQUksQ0FBQyxLQUFLOVUsR0FBRyxDQUFDWixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ29ELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFPLENBQzFQLENBQUMsZUFDTGxnQiwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUTtJQUFFLEdBQUMsZUFBaUIsQ0FBQyxlQUMzRjVILDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRTRaLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWpiLEtBQUssRUFBRTtNQUFRO0lBQUUsZ0JBRXRFNUgsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQytVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQ3ZTLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsRUFBQyxHQUFPLENBQUMsS0FBQyxlQUFBbGdCLDBEQUFBLGVBQU0sSUFBRSxlQUFBQSwwREFBQSxlQUFPZ1IsVUFBVSxDQUFDLENBQUNyQyxHQUFHLENBQUMrVSxJQUFJLElBQUksQ0FBQyxLQUFLL1UsR0FBRyxDQUFDWixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ29ELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFPLENBQ3JOLENBQ0YsQ0FBQyxlQUNMbGdCLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUTtJQUFFLEdBQUMsT0FBUyxDQUFDLGVBQ25GNUgsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFSyxLQUFLLEVBQUUsT0FBTztRQUFFNFosTUFBTSxFQUFFLGdCQUFnQjtRQUFFamIsS0FBSyxFQUFFO01BQVE7SUFBRSxnQkFDdEU1SCwwREFBQSxlQUFPZ1IsVUFBVSxDQUFDckMsR0FBRyxDQUFDZ1YsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDeFMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFDLEtBQUMsZUFBQWxnQiwwREFBQSxlQUFNLElBQUUsZUFBQUEsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQyxDQUFDckMsR0FBRyxDQUFDZ1YsS0FBSyxJQUFJLENBQUMsS0FBS2hWLEdBQUcsQ0FBQ1osSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNvRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFRLENBQUMsS0FBTyxDQUN0TixDQUFDLGVBQ0xsZ0IsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFSyxLQUFLLEVBQUUsT0FBTztRQUFFNFosTUFBTSxFQUFFLGdCQUFnQjtRQUFFamIsS0FBSyxFQUFFO01BQVE7SUFBRSxnQkFDdEU1SCwwREFBQSxlQUFPZ1IsVUFBVSxDQUFDckMsR0FBRyxDQUFDaVYsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDelMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxFQUFDLEdBQU8sQ0FBQyxLQUFDLGVBQUFsZ0IsMERBQUEsZUFBTSxJQUFFLGVBQUFBLDBEQUFBLGVBQU9nUixVQUFVLENBQUMsQ0FBQ3JDLEdBQUcsQ0FBQ2lWLFlBQVksSUFBSSxDQUFDLEtBQUtqVixHQUFHLENBQUNaLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDb0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFDLEtBQU8sQ0FDck8sQ0FBQyxlQUNMbGdCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRTRaLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWpiLEtBQUssRUFBRTtNQUFRO0lBQUUsR0FBQyxvQkFBc0IsQ0FBQyxlQUNoRzVILDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRTRaLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWpiLEtBQUssRUFBRTtNQUFRO0lBQUUsZ0JBQ3RFNUgsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ2tWLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQzFTLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsRUFBQyxHQUFPLENBQUMsS0FBQyxlQUFBbGdCLDBEQUFBLGVBQU0sSUFBRSxlQUFBQSwwREFBQSxlQUFPZ1IsVUFBVSxDQUFDLENBQUNyQyxHQUFHLENBQUNrVixRQUFRLElBQUksQ0FBQyxLQUFLbFYsR0FBRyxDQUFDWixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ29ELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFPLENBQzdOLENBQ0YsQ0FDQyxDQUNGLENBQUMsZUFDUmxnQiwwREFBQTtNQUFPK0csU0FBUyxFQUFDLGFBQWE7TUFBQzZCLEtBQUssRUFBRTtRQUFFYixRQUFRLEVBQUUsS0FBSztRQUFFNmEsWUFBWSxFQUFFLEtBQUs7UUFBRUMsTUFBTSxFQUFFLGdCQUFnQjtRQUFFamIsS0FBSyxFQUFFO01BQVE7SUFBRSxnQkFDdkg1SCwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRWthLE9BQU8sRUFBRSxLQUFLO1FBQUVELE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWpiLEtBQUssRUFBRSxPQUFPO1FBQUVvWSxTQUFTLEVBQUU7TUFBUyxDQUFFO01BQUNxQyxPQUFPLEVBQUU7SUFBRSxHQUFDLG9DQUFzQyxDQUM5SSxDQUFDLGVBQ0xyaUIsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRTRaLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWpiLEtBQUssRUFBRTtNQUFRLENBQUU7TUFBQ3lhLE9BQU8sRUFBRTtJQUFFLGdCQUFDcmlCLDBEQUFBLGVBQU0sY0FBa0IsQ0FBQyxLQUFDLGVBQUFBLDBEQUFBLGVBQU0sTUFBSSxFQUFDZ1IsVUFBVSxDQUFDckMsR0FBRyxDQUFDbVYsaUJBQWlCLElBQUksQ0FBQyxDQUFDLENBQUMzUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFRLENBQUMsS0FBQyxlQUFBbGdCLDBEQUFBLGVBQU0sSUFBRSxlQUFBQSwwREFBQSxlQUFPZ1IsVUFBVSxDQUFDLENBQUNyQyxHQUFHLENBQUNtVixpQkFBaUIsSUFBSSxDQUFDLEtBQUtuVixHQUFHLENBQUNaLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDb0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFDLEtBQU8sQ0FBSyxDQUFDLGVBQ3pXbGdCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRTRaLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWpiLEtBQUssRUFBRTtNQUFRLENBQUU7TUFBQ3lhLE9BQU8sRUFBRTtJQUFFLGdCQUFDcmlCLDBEQUFBLGVBQU0sZ0JBQW9CLENBQUMsS0FBQyxlQUFBQSwwREFBQSxlQUFNLE1BQUksRUFBQ2dSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ29WLGtCQUFrQixJQUFJLENBQUMsQ0FBQyxDQUFDNVMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFDLEtBQUMsZUFBQWxnQiwwREFBQSxlQUFNLElBQUUsZUFBQUEsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQyxDQUFDckMsR0FBRyxDQUFDb1Ysa0JBQWtCLElBQUksQ0FBQyxLQUFLcFYsR0FBRyxDQUFDWixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ29ELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFPLENBQUssQ0FBQyxlQUM3V2xnQiwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUN5YSxPQUFPLEVBQUU7SUFBRSxnQkFBQ3JpQiwwREFBQSxlQUFNLGtCQUFzQixDQUFDLEtBQUMsZUFBQUEsMERBQUEsZUFBTSxNQUFJLEVBQUNnUixVQUFVLENBQUNyQyxHQUFHLENBQUNxVixvQkFBb0IsSUFBSSxDQUFDLENBQUMsQ0FBQzdTLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFDLGVBQUFsZ0IsMERBQUEsZUFBTSxJQUFFLGVBQUFBLDBEQUFBLGVBQU9nUixVQUFVLENBQUMsQ0FBQ3JDLEdBQUcsQ0FBQ3FWLG9CQUFvQixJQUFJLENBQUMsS0FBS3JWLEdBQUcsQ0FBQ1osSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNvRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFRLENBQUMsS0FBTyxDQUFLLENBQ2hYLENBQUMsZUFDTGxnQiwwREFBQSwwQkFDRUEsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFa2EsT0FBTyxFQUFFLEtBQUs7UUFBRUQsTUFBTSxFQUFFLGdCQUFnQjtRQUFFamIsS0FBSyxFQUFFLE9BQU87UUFBRW9ZLFNBQVMsRUFBRTtNQUFTLENBQUU7TUFBQ3FDLE9BQU8sRUFBRTtJQUFFLEdBQUMsY0FBZ0IsQ0FDeEgsQ0FBQyxlQUNMcmlCLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVpYSxNQUFNLEVBQUU7TUFBaUIsQ0FBRTtNQUFDUixPQUFPLEVBQUU7SUFBRSxHQUFDLGFBQWUsQ0FBQyxlQUNyRXJpQiwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUN5YSxPQUFPLEVBQUU7SUFBRSxHQUFDLEtBQUcsRUFBQ3JSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ3lQLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQ2pOLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsRUFBQyxHQUFDLGVBQUFsZ0IsMERBQUEsZUFBTSxJQUFFLGVBQUFBLDBEQUFBLGVBQU9nUixVQUFVLENBQUNyQyxHQUFHLENBQUMwUCxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsQ0FBQ2xOLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFPLENBQUssQ0FDaFMsQ0FBQyxlQUNMbGdCLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVpYSxNQUFNLEVBQUU7TUFBaUIsQ0FBRTtNQUFDUixPQUFPLEVBQUU7SUFBRSxHQUFDLFdBQWEsQ0FBQyxlQUNuRXJpQiwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUN5YSxPQUFPLEVBQUU7SUFBRSxHQUFDLEtBQUcsRUFBQ3JSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ3FWLG9CQUFvQixJQUFJLENBQUMsQ0FBQyxDQUFDN1MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxFQUFDLEdBQUMsZUFBQWxnQiwwREFBQSxlQUFNLElBQUUsZUFBQUEsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQyxDQUFDckMsR0FBRyxDQUFDcVYsb0JBQW9CLElBQUksQ0FBQyxLQUFLclYsR0FBRyxDQUFDWixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ29ELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFPLENBQUssQ0FDcFUsQ0FBQyxlQUNMbGdCLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVpYSxNQUFNLEVBQUU7TUFBaUIsQ0FBRTtNQUFDUixPQUFPLEVBQUU7SUFBRSxHQUFDLGtCQUFvQixDQUFDLGVBQzFFcmlCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRTRaLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWpiLEtBQUssRUFBRTtNQUFRLENBQUU7TUFBQ3lhLE9BQU8sRUFBRTtJQUFFLEdBQUMsS0FBRyxFQUFDclIsVUFBVSxDQUFDckMsR0FBRyxDQUFDc1YsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDOVMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxFQUFDLEdBQUMsZUFBQWxnQiwwREFBQSxlQUFNLElBQUUsZUFBQUEsMERBQUEsZUFBT2dSLFVBQVUsQ0FBQyxDQUFDckMsR0FBRyxDQUFDc1YsS0FBSyxJQUFJLENBQUMsS0FBS3RWLEdBQUcsQ0FBQ1osSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNvRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFRLENBQUMsS0FBTyxDQUFLLENBQ3RTLENBQUMsZUFDTGxnQiwwREFBQSwwQkFDRUEsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFaWEsTUFBTSxFQUFFO01BQWlCLENBQUU7TUFBQ1IsT0FBTyxFQUFFO0lBQUUsR0FBQyxnQkFBa0IsQ0FBQyxlQUN4RXJpQiwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVLLEtBQUssRUFBRSxPQUFPO1FBQUU0WixNQUFNLEVBQUUsZ0JBQWdCO1FBQUVqYixLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUN5YSxPQUFPLEVBQUU7SUFBRSxHQUFDLEtBQUcsRUFBQ3JSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ3VULFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQy9RLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsRUFBQyxHQUFDLGVBQUFsZ0IsMERBQUEsZUFBTSxJQUFFLGVBQUFBLDBEQUFBLGVBQU9nUixVQUFVLENBQUMsQ0FBQ3JDLEdBQUcsQ0FBQ3VULFNBQVMsSUFBSSxDQUFDLEtBQUt2VCxHQUFHLENBQUNaLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDb0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFDLEtBQU8sQ0FBSyxDQUM5UyxDQUNDLENBQ0YsQ0FDSixDQUNHLENBQ0QsQ0FDSCxDQUNJLENBQUM7RUFFckI7RUFDQSxTQUFTZ0UsSUFBSUEsQ0FBQ2xkLEtBQUssRUFBRTtJQUFBLElBQUFtZCxlQUFBO0lBQ25CLElBQVF4VixHQUFHLEdBQUszSCxLQUFLLENBQWIySCxHQUFHO0lBQ1gsSUFBUXlWLEtBQUssR0FBS3BkLEtBQUssQ0FBZm9kLEtBQUs7SUFDYixJQUFBQyxnQkFBQSxHQUF3QnJrQixxREFBYyxDQUFDLEtBQUssQ0FBQztNQUFBc2tCLGlCQUFBLEdBQUF4WCxjQUFBLENBQUF1WCxnQkFBQTtNQUF0QzFhLElBQUksR0FBQTJhLGlCQUFBO01BQUU3QyxPQUFPLEdBQUE2QyxpQkFBQTtJQUVwQixvQkFDRXRrQiwwREFBQSxDQUFDQSx1REFBYyxxQkFDYkEsMERBQUEsQ0FBQ2MscURBQVE7TUFBQzZnQixFQUFFLEVBQUU7UUFBRSxPQUFPLEVBQUU7VUFBRTFCLFlBQVksRUFBRTtRQUFRO01BQUU7SUFBRSxnQkFDbkRqZ0IsMERBQUEsQ0FBQ2EscURBQVMscUJBQ1JiLDBEQUFBLENBQUNVLHFEQUFVO01BQ1QsY0FBVyxZQUFZO01BQ3ZCa2hCLElBQUksRUFBQyxPQUFPO01BQ1pDLE9BQU8sRUFBRUEsQ0FBQSxLQUFNSixPQUFPLENBQUMsQ0FBQzlYLElBQUk7SUFBRSxHQUU3QkEsSUFBSSxnQkFBRzNKLDBEQUFBLENBQUMyRCw0REFBdUIsTUFBRSxDQUFDLGdCQUFHM0QsMERBQUEsQ0FBQ3lELDREQUF5QixNQUFFLENBQ3hELENBQ0gsQ0FBQyxlQUNaekQsMERBQUEsQ0FBQ2EscURBQVM7TUFBQ2loQixTQUFTLEVBQUMsSUFBSTtNQUFDQyxLQUFLLEVBQUM7SUFBSyxHQUFFcUMsS0FBSyxHQUFHLENBQWEsQ0FBQyxlQUM3RHBrQiwwREFBQSxDQUFDYSxxREFBUztNQUFDbWhCLEtBQUssRUFBQztJQUFRLEdBQUVyVCxHQUFHLENBQUNtRSxJQUFnQixDQUFDLGVBQ2hEOVMsMERBQUEsQ0FBQ2EscURBQVM7TUFBQ21oQixLQUFLLEVBQUM7SUFBUSxHQUFFclQsR0FBRyxDQUFDcUUsS0FBaUIsQ0FBQyxlQUNqRGhULDBEQUFBLENBQUNhLHFEQUFTO01BQUNtaEIsS0FBSyxFQUFDO0lBQVEsR0FBQyxHQUFDLEVBQUNyVCxHQUFHLENBQUNvRSxNQUFrQixDQUFDLGVBQ25EL1MsMERBQUEsQ0FBQ2EscURBQVM7TUFBQ21oQixLQUFLLEVBQUM7SUFBTyxHQUFDLEdBQUMsRUFBQ2hSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ3VELEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBYSxDQUMxRyxDQUFDLGVBQ1hsZ0IsMERBQUEsQ0FBQ2MscURBQVEscUJBQ1BkLDBEQUFBLENBQUNhLHFEQUFTO01BQUMrSCxLQUFLLEVBQUU7UUFBRXVaLGFBQWEsRUFBRSxDQUFDO1FBQUVDLFVBQVUsRUFBRTtNQUFFLENBQUU7TUFBQ0MsT0FBTyxFQUFFO0lBQUUsZ0JBQ2hFcmlCLDBEQUFBLENBQUNPLHFEQUFRO01BQUMraEIsRUFBRSxFQUFFM1ksSUFBSztNQUFDNFksT0FBTyxFQUFDLE1BQU07TUFBQ0MsYUFBYTtJQUFBLGdCQUM5Q3hpQiwwREFBQSxDQUFDNEIsc0RBQUc7TUFBQytmLEVBQUUsRUFBRTtRQUFFYyxNQUFNLEVBQUU7TUFBRTtJQUFFLGdCQUNyQnppQiwwREFBQSxDQUFDc0Isc0RBQVU7TUFBQ29oQixPQUFPLEVBQUMsSUFBSTtNQUFDQyxZQUFZO01BQUNiLFNBQVMsRUFBQztJQUFLLEdBQUMsU0FFMUMsQ0FBQyxlQUNiOWhCLDBEQUFBLDZCQUNFQSwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRWlhLE1BQU0sRUFBRTtNQUFpQjtJQUFFLEdBQUMsTUFBUSxDQUFDLGVBQ2xEN2lCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRWlhLE1BQU0sRUFBRTtNQUFpQjtJQUFFLEdBQUMsUUFBVSxDQUFDLGVBQ3BEN2lCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRWlhLE1BQU0sRUFBRTtNQUFpQjtJQUFFLEdBQUMsTUFBUSxDQUFDLGVBQ2xEN2lCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRWlhLE1BQU0sRUFBRTtNQUFpQjtJQUFFLEdBQUMsYUFBZSxDQUN0RCxDQUNDLENBQUMsZUFDUjdpQiwwREFBQSxnQkFFSTJOLE9BQU8sYUFBUEEsT0FBTyxnQkFBQXdXLGVBQUEsR0FBUHhXLE9BQU8sQ0FBRStDLE1BQU0sQ0FBRTZULElBQUk7TUFBQSxJQUFBQyxpQkFBQTtNQUFBLE9BQUssRUFBQUEsaUJBQUEsR0FBQUQsSUFBSSxDQUFDMVIsV0FBVyxjQUFBMlIsaUJBQUEsdUJBQWhCQSxpQkFBQSxDQUFrQm5ZLEdBQUcsTUFBS3NDLEdBQUcsQ0FBQ3hELEVBQUU7SUFBQSxFQUFDLGNBQUFnWixlQUFBLHVCQUEzREEsZUFBQSxDQUE2RHpWLEdBQUcsQ0FBRTZWLElBQUksaUJBQ3BFdmtCLDBEQUFBO01BQUkrZixHQUFHLEVBQUV3RSxJQUFJLENBQUNsWTtJQUFJLGdCQUNoQnJNLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRWlhLE1BQU0sRUFBRTtNQUFpQjtJQUFFLEdBQUMsR0FBQyxFQUFDN2QsNkNBQUssQ0FBQ3VmLElBQUksQ0FBQ0UsV0FBVyxDQUFDLENBQUNuRixNQUFNLENBQUMsWUFBWSxDQUFNLENBQUMsZUFDN0Z0ZiwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVpYSxNQUFNLEVBQUU7TUFBaUI7SUFBRSxHQUFDLEdBQUMsRUFBQzBCLElBQUksQ0FBQ0csTUFBVyxDQUFDLGVBQzVEMWtCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRWlhLE1BQU0sRUFBRTtNQUFpQjtJQUFFLEdBQUMsR0FBQyxFQUFDMEIsSUFBSSxDQUFDSSxXQUFnQixDQUFDLGVBQ2pFM2tCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRWlhLE1BQU0sRUFBRTtNQUFpQjtJQUFFLEdBQUMsR0FBQyxFQUFDMEIsSUFBSSxDQUFDSyxrQkFBdUIsQ0FDckUsQ0FDTCxDQUVFLENBQ0YsQ0FDSixDQUNHLENBQ0QsQ0FDSCxDQUNJLENBQUM7RUFFckI7RUFFQSxvQkFDRTVrQiwwREFBQTtJQUFLK0csU0FBUyxFQUFDO0VBQWMsZ0JBQzNCL0csMERBQUEsQ0FBQzRCLHNEQUFHO0lBQUMrZixFQUFFLEVBQUU7TUFBRWtELE9BQU8sRUFBRTtJQUFPO0VBQUUsZ0JBQzNCN2tCLDBEQUFBLENBQUNnRSxrRUFBVyxNQUFFLENBQUMsZUFDZmhFLDBEQUFBLENBQUN1SixNQUFNO0lBQUNWLFFBQVEsRUFBQyxVQUFVO0lBQUNjLElBQUksRUFBRXdYLE9BQVE7SUFBQ1EsRUFBRSxFQUFFO01BQUVoYSxlQUFlLEVBQUU7SUFBVTtFQUFFLGdCQUM1RTNILDBEQUFBLENBQUMrRCw4REFBTztJQUNONGQsRUFBRSxFQUFFO01BQ0ZtRCxFQUFFLEVBQUUsTUFBTSxDQUFFO0lBQ2Q7RUFBRSxnQkFFRjlrQiwwREFBQSxDQUFDVSxxREFBVTtJQUNUcWtCLElBQUksRUFBQyxPQUFPO0lBQ1puZCxLQUFLLEVBQUMsU0FBUztJQUNmLGNBQVcsYUFBYTtJQUN4QmlhLE9BQU8sRUFBRVIsWUFBYTtJQUN0Qk0sRUFBRSxFQUFBL1gsYUFBQTtNQUNBb2IsV0FBVyxFQUFFO0lBQU0sR0FDZjdELE9BQU8sSUFBSTtNQUFFMEQsT0FBTyxFQUFFO0lBQU8sQ0FBQztFQUNsQyxnQkFFRjdrQiwwREFBQSxDQUFDcUUsaUVBQVEsTUFBRSxDQUNELENBQUMsZUFDYnJFLDBEQUFBLENBQUNzQixzREFBVTtJQUNUd2dCLFNBQVMsRUFBQyxJQUFJO0lBQ2RZLE9BQU8sRUFBQyxJQUFJO0lBQ1o5YSxLQUFLLEVBQUMsU0FBUztJQUNmcWQsTUFBTTtJQUNOdEQsRUFBRSxFQUFFO01BQUV1RCxRQUFRLEVBQUU7SUFBRTtFQUFFLEdBQ3JCLHNCQUVXLENBQUMsZUFDYmxsQiwwREFBQSxDQUFDVSxxREFBVTtJQUFDbWhCLE9BQU8sRUFBRUEsQ0FBQSxLQUFNelcsUUFBUSxDQUFDLGdCQUFnQjtFQUFFLGdCQUNwRHBMLDBEQUFBLENBQUMrRixzRUFBUztJQUFDNkMsS0FBSyxFQUFFO01BQUVoQixLQUFLLEVBQUU7SUFBUTtFQUFFLENBQUUsQ0FDN0IsQ0FBQyxlQUNiNUgsMERBQUEsQ0FBQ2tHLDhEQUFvQixNQUFFLENBQUMsZUFDeEJsRywwREFBQSxDQUFDaUcsMERBQWdCO0lBQUM2TSxJQUFJLEVBQUV4SCxJQUFJLENBQUNVLElBQUksQ0FBQ0ksUUFBUztJQUFDRCxJQUFJLEVBQUViLElBQUksQ0FBQ1UsSUFBSSxDQUFDRztFQUFLLENBQUUsQ0FBQyxlQUNwRW5NLDBEQUFBLENBQUNzQixzREFBVTtJQUFDcWdCLEVBQUUsRUFBRTtNQUFFclgsVUFBVSxFQUFFLE1BQU07TUFBRTBhLFdBQVcsRUFBRTtJQUFPO0VBQUUsR0FBRTFaLElBQUksQ0FBQ1UsSUFBSSxDQUFDSSxRQUFxQixDQUFDLGVBQzlGcE0sMERBQUEsQ0FBQ1UscURBQVU7SUFBQ2tILEtBQUssRUFBQyxTQUFTO0lBQUNpYSxPQUFPLEVBQUVuVjtFQUFhLGdCQUNoRDFNLDBEQUFBLENBQUN5RixtRUFBTTtJQUFDbUQsS0FBSyxFQUFFO01BQUVoQixLQUFLLEVBQUU7SUFBUTtFQUFFLENBQUUsQ0FDMUIsQ0FDTCxDQUNILENBQUMsZUFDVDVILDBEQUFBLENBQUN3SyxNQUFNO0lBQUNrWSxPQUFPLEVBQUMsV0FBVztJQUFDL1ksSUFBSSxFQUFFd1g7RUFBUSxnQkFDeENuaEIsMERBQUEsQ0FBQytELDhEQUFPO0lBQ040ZCxFQUFFLEVBQUU7TUFDRmtELE9BQU8sRUFBRSxNQUFNO01BQ2ZNLFVBQVUsRUFBRSxRQUFRO01BQ3BCQyxjQUFjLEVBQUUsVUFBVTtNQUMxQmhjLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUjtFQUFFLGdCQUVGcEosMERBQUEsQ0FBQ1UscURBQVU7SUFBQ21oQixPQUFPLEVBQUVSO0VBQWEsZ0JBQ2hDcmhCLDBEQUFBLENBQUNzRSx3RUFBZSxNQUFFLENBQ1IsQ0FDTCxDQUFDLGVBQ1Z0RSwwREFBQSxDQUFDd0Msc0RBQU8sTUFBRSxDQUFDLGVBQ1h4QywwREFBQSxDQUFDa0UsMkRBQUk7SUFBQ3lkLEVBQUUsRUFBRTtNQUFFMEQsTUFBTSxFQUFFO0lBQVE7RUFBRSxnQkFDNUJybEIsMERBQUEsQ0FBQ0csZ0VBQWEsTUFBRSxDQUNaLENBQ0EsQ0FBQyxlQUNUSCwwREFBQSxDQUFDNEIsc0RBQUc7SUFDRmtnQixTQUFTLEVBQUMsTUFBTTtJQUNoQkgsRUFBRSxFQUFFO01BQ0ZoYSxlQUFlLEVBQUdILEtBQUssSUFDckJBLEtBQUssQ0FBQzhkLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLLE9BQU8sR0FDMUIvZCxLQUFLLENBQUM4ZCxPQUFPLENBQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FDdkJoZSxLQUFLLENBQUM4ZCxPQUFPLENBQUNFLElBQUksQ0FBQyxHQUFHLENBQUM7TUFDN0JOLFFBQVEsRUFBRSxDQUFDO01BQ1hqYyxLQUFLLEVBQUUsTUFBTTtNQUNib2MsTUFBTSxFQUFFLE9BQU87TUFDZkksUUFBUSxFQUFFO0lBQ1o7RUFBRSxnQkFFRnpsQiwwREFBQSxDQUFDK0QsOERBQU8sTUFBRSxDQUFDLGVBQ1gvRCwwREFBQSxDQUFDb0UsZ0VBQVM7SUFBQ3NoQixRQUFRLEVBQUMsTUFBTTtJQUFDL0QsRUFBRSxFQUFFO01BQUVnRSxFQUFFLEVBQUU7SUFBRTtFQUFFLEdBRXJDeFgsV0FBVyxnQkFBR25PLDBEQUFBLDJCQUNaQSwwREFBQTtJQUFLNEksS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUVDLEdBQUcsRUFBRTtJQUFRO0VBQUUsZ0JBQ2pEOUksMERBQUEsQ0FBQzBGLDBEQUFNLE1BQUUsQ0FDTixDQUNGLENBQUMsZ0JBQ0oxRiwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ1Msc0RBQUk7SUFBQ21sQixTQUFTO0lBQUMvYSxPQUFPLEVBQUU7RUFBRSxHQUV4QnVOLEtBQUssS0FBSyxDQUFDLGdCQUNWcFksMERBQUEsQ0FBQ1Msc0RBQUk7SUFBQ2dTLElBQUk7SUFBQ29ULEVBQUUsRUFBRTtFQUFFLEdBRWI5UCxLQUFLLEtBQUssQ0FBQyxnQkFDVC9WLDBEQUFBO0lBQUsrRyxTQUFTLEVBQUM7RUFBbUIsZ0JBQ2hDL0csMERBQUE7SUFBSzRJLEtBQUssRUFBRTtNQUFFaWMsT0FBTyxFQUFFLE1BQU07TUFBRU8sY0FBYyxFQUFFLGVBQWU7TUFBRUQsVUFBVSxFQUFFO0lBQVM7RUFBRSxnQkFDckZubEIsMERBQUE7SUFBSzRJLEtBQUssRUFBRTtNQUFFaWMsT0FBTyxFQUFFLE1BQU07TUFBRS9CLE9BQU8sRUFBRSxLQUFLO01BQUVxQyxVQUFVLEVBQUU7SUFBUztFQUFFLGdCQUNwRW5sQiwwREFBQSxDQUFDK0Isc0RBQVEsTUFBRSxDQUFDLGVBQ1ovQiwwREFBQSxDQUFDc0Isc0RBQVU7SUFBQ29oQixPQUFPLEVBQUMsSUFBSTtJQUFDZixFQUFFLEVBQUU7TUFBRW1FLFVBQVUsRUFBRSxNQUFNO01BQUUvZCxRQUFRLEVBQUU7SUFBTztFQUFFLEdBQUMsY0FBd0IsQ0FDNUYsQ0FBQyxlQUNOL0gsMERBQUE7SUFBSzRJLEtBQUssRUFBRTtNQUFFa2EsT0FBTyxFQUFFO0lBQU87RUFBRSxnQkFDOUI5aUIsMERBQUE7SUFBRytHLFNBQVMsRUFBQyxjQUFjO0lBQUM4YSxPQUFPLEVBQUVBLENBQUEsS0FBTTVMLFdBQVcsQ0FBQyxDQUFDO0VBQUUsR0FBQyxRQUFTLENBQ2pFLENBQ0YsQ0FBQyxlQUNOalcsMERBQUE7SUFBSzRJLEtBQUssRUFBRTtNQUFFeWMsTUFBTSxFQUFFLE9BQU87TUFBRUksUUFBUSxFQUFFLFFBQVE7TUFBRU0sU0FBUyxFQUFFLFFBQVE7TUFBRTljLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3RGakosMERBQUEsQ0FBQ3lDLHNEQUFJO0lBQ0gyVCxLQUFLLEVBQUVBLEtBQU07SUFDYjRQLFFBQVEsRUFBRXBQLGFBQWM7SUFDeEJxUCxXQUFXLEVBQUMsVUFBVTtJQUN0QnRFLEVBQUUsRUFBRTtNQUNGLHNCQUFzQixFQUFFO1FBQ3RCaGEsZUFBZSxFQUFFLE9BQU87UUFDeEIwZCxNQUFNLEVBQUU7TUFDVjtJQUNGO0VBQUUsR0FFRHRZLFFBQVEsYUFBUkEsUUFBUSx1QkFBUkEsUUFBUSxDQUFFMkIsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRXlWLEtBQUssa0JBQ3hCcGtCLDBEQUFBLENBQUMwQyxzREFBRztJQUNGcWQsR0FBRyxFQUFFcUUsS0FBTTtJQUNYOEIsS0FBSyxFQUFFdlgsR0FBRyxDQUFDMUMsWUFBWSxHQUFHMEMsR0FBRyxDQUFDMUMsWUFBWSxHQUFHLEVBQUc7SUFDaEQ2VixTQUFTLEVBQUUvYyxtREFBSztJQUNoQm9oQixFQUFFLDJCQUFBMWUsTUFBQSxDQUEyQmtILEdBQUcsQ0FBQ3RDLEdBQUcsQ0FBRztJQUN2Q3NWLEVBQUUsRUFBRTtNQUNGLGdCQUFnQixFQUFFO1FBQ2hCL1osS0FBSyxFQUFFLE9BQU87UUFDZEQsZUFBZSxFQUFFLFNBQVM7UUFDMUJ5ZSxZQUFZLEVBQUU7TUFDaEI7SUFDRjtFQUFFLENBQ0gsQ0FDRixDQUNHLENBQ0gsQ0FDRixDQUFDLEdBQ0osRUFBRSxFQUdOclEsS0FBSyxLQUFLLENBQUMsZ0JBQ1QvViwwREFBQTtJQUFLK0csU0FBUyxFQUFDO0VBQW1CLGdCQUNoQy9HLDBEQUFBLENBQUNTLHNEQUFJO0lBQUNtbEIsU0FBUztJQUFDaGQsS0FBSyxFQUFFO01BQUV1YyxVQUFVLEVBQUUsUUFBUTtNQUFFckMsT0FBTyxFQUFFO0lBQU8sQ0FBRTtJQUFDalksT0FBTyxFQUFFO0VBQUUsZ0JBQzNFN0ssMERBQUEsQ0FBQ1Msc0RBQUk7SUFBQ2dTLElBQUk7SUFBQ29ULEVBQUUsRUFBRTtFQUFHLGdCQUNoQjdsQiwwREFBQSxDQUFDa0Isc0RBQVM7SUFDUmdsQixLQUFLLEVBQUMsUUFBUTtJQUNkL2EsRUFBRSxFQUFDLFFBQVE7SUFDWGlMLEtBQUssRUFBRWEsTUFBTztJQUNkeUwsT0FBTyxFQUFDLFVBQVU7SUFDbEJzRCxRQUFRLEVBQUU3TztFQUFhLENBQ3hCLENBQ0csQ0FBQyxlQUNQblgsMERBQUEsQ0FBQ1Msc0RBQUk7SUFBQ2dTLElBQUk7SUFBQ29ULEVBQUUsRUFBRTtFQUFFLGdCQUNmN2xCLDBEQUFBLENBQUN3SSxXQUFXO0lBQUM2ZCxLQUFLLEVBQUMsT0FBTztJQUFDQyxTQUFTLEVBQUM7RUFBUSxnQkFDM0N0bUIsMERBQUEsQ0FBQ1UscURBQVU7SUFBQ21oQixPQUFPLEVBQUVBLENBQUEsS0FBTTVMLFdBQVcsQ0FBQyxDQUFDLENBQUU7SUFBQ3JOLEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFMGQsS0FBSyxFQUFFO0lBQVE7RUFBRSxnQkFDekZ2bUIsMERBQUEsQ0FBQzJGLGtFQUFLO0lBQUNpRCxLQUFLLEVBQUU7TUFBRWhCLEtBQUssRUFBRTtJQUFVO0VBQUUsQ0FBRSxDQUMzQixDQUNELENBQ1QsQ0FDRixDQUFDLGVBRVA1SCwwREFBQTtJQUFLNEksS0FBSyxFQUFFO01BQUV5YyxNQUFNLEVBQUUsT0FBTztNQUFFSSxRQUFRLEVBQUUsUUFBUTtNQUFFTSxTQUFTLEVBQUUsUUFBUTtNQUFFOWMsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDdEZqSiwwREFBQSxDQUFDeUMsc0RBQUk7SUFDSDJULEtBQUssRUFBRUksTUFBTztJQUNkd1AsUUFBUSxFQUFFbFAsYUFBYztJQUN4Qm1QLFdBQVcsRUFBQyxVQUFVO0lBQ3RCdEUsRUFBRSxFQUFFO01BQ0Ysc0JBQXNCLEVBQUU7UUFDdEJoYSxlQUFlLEVBQUU7TUFDbkI7SUFDRjtFQUFFLEdBRURpUSxRQUFRLGFBQVJBLFFBQVEsdUJBQVJBLFFBQVEsQ0FBRWxKLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUV5VixLQUFLLGtCQUN4QnBrQiwwREFBQSxDQUFDMEMsc0RBQUc7SUFDRnFkLEdBQUcsRUFBRXFFLEtBQU07SUFDWDhCLEtBQUssRUFBRXZYLEdBQUcsQ0FBQzFDLFlBQVksR0FBRzBDLEdBQUcsQ0FBQzFDLFlBQVksR0FBRyxFQUFHO0lBQ2hENlYsU0FBUyxFQUFFL2MsbURBQUs7SUFDaEJvaEIsRUFBRSwyQkFBQTFlLE1BQUEsQ0FBMkJrSCxHQUFHLENBQUN0QyxHQUFHLENBQUc7SUFDdkNzVixFQUFFLEVBQUU7TUFDRixnQkFBZ0IsRUFBRTtRQUNoQi9aLEtBQUssRUFBRTtNQUNUO0lBQ0Y7RUFBRSxDQUNILENBQ0YsQ0FDRyxDQUNILENBQ0YsQ0FBQyxHQUNKLEVBR0YsQ0FBQyxHQUNQLEVBQUUsZUFDSjVILDBEQUFBLENBQUNTLHNEQUFJO0lBQUNnUyxJQUFJO0lBQUNvVCxFQUFFLEVBQUU7RUFBRSxnQkFDZjdsQiwwREFBQTtJQUFLK0csU0FBUyxFQUFDO0VBQW9CLEdBQ2hDZ0csUUFBUSxhQUFSQSxRQUFRLGdCQUFBOUIsZ0JBQUEsR0FBUjhCLFFBQVEsQ0FBRTJELE1BQU0sQ0FBQy9CLEdBQUcsSUFBSUEsR0FBRyxDQUFDdEMsR0FBRyxLQUFLbEIsRUFBRSxDQUFDLGNBQUFGLGdCQUFBLHVCQUF2Q0EsZ0JBQUEsQ0FBeUN5RCxHQUFHLENBQUVDLEdBQUc7SUFBQSxJQUFBNlgsS0FBQSxFQUFBQyxRQUFBLEVBQUFDLFNBQUE7SUFBQSxvQkFDaEQxbUIsMERBQUE7TUFBSytmLEdBQUcsRUFBRXBSLEdBQUcsQ0FBQ3RDO0lBQUksZ0JBQ2hCck0sMERBQUE7TUFBSytHLFNBQVMsRUFBQztJQUF3QixnQkFDckMvRywwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ3NCLHNEQUFVO01BQUNzSCxLQUFLLEVBQUU7UUFBRWtkLFVBQVUsRUFBRSxNQUFNO1FBQUUvZCxRQUFRLEVBQUU7TUFBTztJQUFFLEdBQUUsQ0FBQzRHLEdBQUcsQ0FBQzFDLFlBQVksSUFBSSxFQUFFLEVBQUUwYSxXQUFXLENBQUMsQ0FBQyxFQUFDLEdBQUMsRUFBQ2hZLEdBQUcsQ0FBQ2lZLFVBQVUsS0FBS0MsU0FBUyxHQUFHLEdBQUcsR0FBR2xZLEdBQUcsQ0FBQ2lZLFVBQVUsR0FBRyxFQUFlLENBQ3pLLENBQUMsZUFDTjVtQiwwREFBQSxDQUFDc0Isc0RBQVU7TUFDVHNHLEtBQUssRUFDSCtHLEdBQUcsQ0FBQytWLE1BQU0sS0FBSyxRQUFRLEdBQ25CLFNBQVMsR0FDWC9WLEdBQUcsQ0FBQytWLE1BQU0sS0FBSyxXQUFXLEdBQ3RCLFNBQVMsR0FDWC9WLEdBQUcsQ0FBQytWLE1BQU0sS0FBSyxPQUFPLEdBQ2xCLEtBQUssR0FDUC9WLEdBQUcsQ0FBQytWLE1BQU0sS0FBSyxVQUFVLEdBQ3JCLE1BQU0sR0FBRztJQUNwQixHQUVBL1YsR0FBRyxDQUFDK1YsTUFBTSxLQUFLbUMsU0FBUyxHQUFHbFksR0FBRyxDQUFDK1YsTUFBTSxHQUFHLFdBQy9CLENBQUMsZUFDYjFrQiwwREFBQTtNQUFLNEksS0FBSyxFQUFFO1FBQUVpYyxPQUFPLEVBQUUsTUFBTTtRQUFFaUMsR0FBRyxFQUFFLE1BQU07UUFBRTNCLFVBQVUsRUFBRTtNQUFTO0lBQUUsZ0JBQ2pFbmxCLDBEQUFBLENBQUNvQyxzREFBTTtNQUNMLGlCQUFldUgsSUFBSSxHQUFHLHNCQUFzQixHQUFHa2QsU0FBVTtNQUN6RCxpQkFBYyxNQUFNO01BQ3BCLGlCQUFlbGQsSUFBSSxHQUFHLE1BQU0sR0FBR2tkLFNBQVU7TUFDekNuRSxPQUFPLEVBQUMsV0FBVztNQUNuQnFFLGdCQUFnQjtNQUNoQmxGLE9BQU8sRUFBRWxTLFdBQVk7TUFDckJxWCxPQUFPLGVBQUVobkIsMERBQUEsQ0FBQ2dHLDhFQUFpQixNQUFFLENBQUU7TUFDL0IyYixFQUFFLEVBQUU7UUFDRnpZLE9BQU8sRUFBRSxNQUFNO1FBQUUsU0FBUyxFQUFFO1VBQzFCdEIsS0FBSyxFQUFFLE1BQU07VUFDYnNCLE9BQU8sRUFBRSxPQUFPO1VBQ2hCMlosTUFBTSxFQUFFO1FBQ1Y7TUFDRjtJQUFFLEdBQ0gsU0FFTyxDQUFDLGVBQ1Q3aUIsMERBQUEsQ0FBQzJDLHNEQUFJO01BQ0h3SSxFQUFFLEVBQUMsc0JBQXNCO01BQ3pCOGIsYUFBYSxFQUFFO1FBQ2IsaUJBQWlCLEVBQUU7TUFDckIsQ0FBRTtNQUNGN1gsUUFBUSxFQUFFQSxRQUFTO01BQ25CekYsSUFBSSxFQUFFQSxJQUFLO01BQ1h1ZCxPQUFPLEVBQUVwWCxlQUFnQjtNQUN6QnFYLG1CQUFtQixFQUFFeGxCLHNEQUFJQTtJQUFDLGdCQUUxQjNCLDBEQUFBLENBQUNRLHNEQUFRO01BQUNtaEIsRUFBRSxFQUFFO1FBQUUxWSxLQUFLLEVBQUU7TUFBTztJQUFFLGdCQUM5QmpKLDBEQUFBLENBQUM4RSxzREFBTztNQUFDcWhCLEVBQUUseUJBQUExZSxNQUFBLENBQXlCa0gsR0FBRyxDQUFDdEMsR0FBRyxDQUFHO01BQUN0RixTQUFTLEVBQUMsVUFBVTtNQUFDNkIsS0FBSyxFQUFFO1FBQUVpYyxPQUFPLEVBQUUsTUFBTTtRQUFFaUMsR0FBRyxFQUFFLE1BQU07UUFBRTNCLFVBQVUsRUFBRSxRQUFRO1FBQUV2ZCxLQUFLLEVBQUU7TUFBTztJQUFFLGdCQUMvSTVILDBEQUFBLENBQUM4QyxpRUFBUSxNQUFFLENBQUMsZUFDWjlDLDBEQUFBLENBQUNzQixzREFBVSxRQUFDLE1BQWdCLENBQ3JCLENBQ0QsQ0FBQyxlQUNYdEIsMERBQUEsQ0FBQ3dDLHNEQUFPLE1BQUUsQ0FBQyxlQUNYeEMsMERBQUEsQ0FBQ1Esc0RBQVE7TUFBQ3FoQixPQUFPLEVBQUVBLENBQUEsS0FBTXZKLFdBQVcsQ0FBQyxDQUFDO0lBQUUsR0FBQyxHQUFDLGVBQUF0WSwwREFBQTtNQUFNNEksS0FBSyxFQUFFO1FBQUVoQixLQUFLLEVBQUU7TUFBTztJQUFFLEdBQUMsVUFBYyxDQUFDLEtBQVcsQ0FBQyxlQUNyRzVILDBEQUFBLENBQUNRLHNEQUFRO01BQUNxaEIsT0FBTyxFQUFFQSxDQUFBLEtBQU12SixXQUFXLENBQUMsQ0FBQztJQUFFLEdBQUMsR0FBQyxlQUFBdFksMERBQUE7TUFBTTRJLEtBQUssRUFBRTtRQUFFaEIsS0FBSyxFQUFFO01BQU87SUFBRSxHQUFDLFNBQWEsQ0FBVyxDQUM5RixDQUNILENBQ0YsQ0FBQyxlQUNONUgsMERBQUEsQ0FBQzRCLHNEQUFHLHFCQUNGNUIsMERBQUEsQ0FBQ2lGLGlEQUFVO01BQ1RtUixLQUFLLEVBQUVtQjtJQUFPLGdCQUVkdlgsMERBQUEsQ0FBQzRCLHNEQUFHO01BQUMrZixFQUFFLEVBQUU7UUFBRTFCLFlBQVksRUFBRSxDQUFDO1FBQUVtSCxXQUFXLEVBQUU7TUFBVTtJQUFFLGdCQUNuRHBuQiwwREFBQSxDQUFDa0YsaURBQU87TUFDTjhnQixRQUFRLEVBQUV2TyxhQUFjO01BQ3hCLGNBQVcsc0JBQXNCO01BQ2pDa0ssRUFBRSxFQUFFO1FBQ0Ysc0JBQXNCLEVBQUU7VUFDdEJoYSxlQUFlLEVBQUUsT0FBTztVQUN4QjBkLE1BQU0sRUFBRTtRQUNWO01BQ0Y7SUFBRSxnQkFFRnJsQiwwREFBQSxDQUFDMEMsc0RBQUc7TUFDRndqQixLQUFLLEVBQUMsVUFBVTtNQUNoQjlQLEtBQUssRUFBQyxHQUFHO01BQ1R1TCxFQUFFLEVBQUU7UUFDRixnQkFBZ0IsRUFBRTtVQUNoQi9aLEtBQUssRUFBRSxPQUFPO1VBQ2RELGVBQWUsRUFBRSxNQUFNO1VBQ3ZCeWUsWUFBWSxFQUFFO1FBQ2hCLENBQUM7UUFBRSxTQUFTLEVBQUU7VUFDWnhlLEtBQUssRUFBRSxNQUFNO1VBQ2JzQixPQUFPLEVBQUUsT0FBTztVQUNoQjJaLE1BQU0sRUFBRSxnQkFBZ0I7VUFDeEJ1RCxZQUFZLEVBQUU7UUFDaEI7TUFDRjtJQUFFLENBQ0gsQ0FBQyxlQUNGcG1CLDBEQUFBLENBQUMwQyxzREFBRztNQUNGd2pCLEtBQUssRUFBQyxVQUFVO01BQ2hCOVAsS0FBSyxFQUFDLEdBQUc7TUFDVHVMLEVBQUUsRUFBRTtRQUNGLGdCQUFnQixFQUFFO1VBQ2hCL1osS0FBSyxFQUFFLE9BQU87VUFDZEQsZUFBZSxFQUFFLE1BQU07VUFDdkJ5ZSxZQUFZLEVBQUU7UUFDaEIsQ0FBQztRQUFFLFNBQVMsRUFBRTtVQUNaeGUsS0FBSyxFQUFFLE1BQU07VUFDYnNCLE9BQU8sRUFBRSxPQUFPO1VBQ2hCMlosTUFBTSxFQUFFLGdCQUFnQjtVQUN4QnVELFlBQVksRUFBRTtRQUNoQjtNQUNGO0lBQUUsQ0FDSCxDQUFDLGVBQ0ZwbUIsMERBQUEsQ0FBQzBDLHNEQUFHO01BQ0Z3akIsS0FBSyxFQUFDLFNBQVM7TUFDZjlQLEtBQUssRUFBQyxHQUFHO01BQ1R1TCxFQUFFLEVBQUU7UUFDRixnQkFBZ0IsRUFBRTtVQUNoQi9aLEtBQUssRUFBRSxPQUFPO1VBQ2RELGVBQWUsRUFBRSxNQUFNO1VBQ3ZCeWUsWUFBWSxFQUFFO1FBQ2hCLENBQUM7UUFBRSxTQUFTLEVBQUU7VUFDWnhlLEtBQUssRUFBRSxNQUFNO1VBQ2JzQixPQUFPLEVBQUUsT0FBTztVQUNoQjJaLE1BQU0sRUFBRSxnQkFBZ0I7VUFDeEJ1RCxZQUFZLEVBQUU7UUFDaEI7TUFDRjtJQUFFLENBQ0gsQ0FBQyxlQUNGcG1CLDBEQUFBLENBQUMwQyxzREFBRztNQUNGd2pCLEtBQUssRUFBQyxTQUFTO01BQ2Y5UCxLQUFLLEVBQUMsR0FBRztNQUNUdUwsRUFBRSxFQUFFO1FBQ0YsZ0JBQWdCLEVBQUU7VUFDaEIvWixLQUFLLEVBQUUsT0FBTztVQUNkRCxlQUFlLEVBQUUsTUFBTTtVQUN2QnllLFlBQVksRUFBRTtRQUNoQixDQUFDO1FBQUUsU0FBUyxFQUFFO1VBQ1p4ZSxLQUFLLEVBQUUsTUFBTTtVQUNic0IsT0FBTyxFQUFFLE9BQU87VUFDaEIyWixNQUFNLEVBQUUsZ0JBQWdCO1VBQ3hCdUQsWUFBWSxFQUFFO1FBQ2hCO01BQ0Y7SUFBRSxDQUNILENBQUMsZUFDRnBtQiwwREFBQSxDQUFDMEMsc0RBQUc7TUFDRndqQixLQUFLLEVBQUMsUUFBUTtNQUNkOVAsS0FBSyxFQUFDLEdBQUc7TUFDVHVMLEVBQUUsRUFBRTtRQUNGLGdCQUFnQixFQUFFO1VBQ2hCL1osS0FBSyxFQUFFLE9BQU87VUFDZEQsZUFBZSxFQUFFLE1BQU07VUFDdkJ5ZSxZQUFZLEVBQUU7UUFDaEIsQ0FBQztRQUFFLFNBQVMsRUFBRTtVQUNaeGUsS0FBSyxFQUFFLE1BQU07VUFDYnNCLE9BQU8sRUFBRSxPQUFPO1VBQ2hCMlosTUFBTSxFQUFFLGdCQUFnQjtVQUN4QnVELFlBQVksRUFBRTtRQUNoQjtNQUNGO0lBQUUsQ0FDSCxDQUFDLGVBQ0ZwbUIsMERBQUEsQ0FBQzBDLHNEQUFHO01BQ0Z3akIsS0FBSyxFQUFDLE9BQU87TUFDYjlQLEtBQUssRUFBQyxHQUFHO01BQ1R1TCxFQUFFLEVBQUU7UUFDRixnQkFBZ0IsRUFBRTtVQUNoQi9aLEtBQUssRUFBRSxPQUFPO1VBQ2RELGVBQWUsRUFBRSxNQUFNO1VBQ3ZCeWUsWUFBWSxFQUFFO1FBQ2hCLENBQUM7UUFBRSxTQUFTLEVBQUU7VUFDWnhlLEtBQUssRUFBRSxNQUFNO1VBQ2JzQixPQUFPLEVBQUUsT0FBTztVQUNoQjJaLE1BQU0sRUFBRSxnQkFBZ0I7VUFDeEJ1RCxZQUFZLEVBQUU7UUFDaEI7TUFDRjtJQUFFLENBQ0gsQ0FDTSxDQUNOLENBQUMsZUFDTnBtQiwwREFBQSxDQUFDbUYsaURBQVE7TUFBQ2lSLEtBQUssRUFBQyxHQUFHO01BQUN1TCxFQUFFLEVBQUU7UUFBRTBELE1BQU0sRUFBRSxPQUFPO1FBQUVJLFFBQVEsRUFBRSxRQUFRO1FBQUVNLFNBQVMsRUFBRTtNQUFTO0lBQUUsZ0JBRW5GL2xCLDBEQUFBLENBQUM0QyxzREFBSTtNQUFDK2UsRUFBRSxFQUFFO1FBQUUxWSxLQUFLLEVBQUUsTUFBTTtRQUFFbEIsUUFBUSxFQUFFO01BQU87SUFBRSxnQkFDNUMvSCwwREFBQSxDQUFDNkMsc0RBQVcscUJBQ1Y3QywwREFBQSw2QkFDRUEsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFJLE1BQVEsQ0FBQyxlQUNiQSwwREFBQSxhQUFLLENBQUMyTyxHQUFHLENBQUMxQyxZQUFZLElBQUksRUFBRSxFQUFFMGEsV0FBVyxDQUFDLENBQU0sQ0FDOUMsQ0FBQyxlQUNMM21CLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFJLFdBQWEsQ0FBQyxlQUNsQkEsMERBQUEsYUFBS2dGLDZDQUFLLENBQUMySixHQUFHLENBQUMwWSxRQUFRLENBQUMsQ0FBQy9ILE1BQU0sQ0FBQyxjQUFjLENBQU0sQ0FDbEQsQ0FBQyxlQUNMdGYsMERBQUEsMEJBQ0VBLDBEQUFBLGFBQUksUUFBVSxDQUFDLGVBQ2ZBLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDc0Isc0RBQVU7TUFDYnNHLEtBQUssRUFDSCtHLEdBQUcsQ0FBQytWLE1BQU0sS0FBSyxRQUFRLEdBQ25CLFNBQVMsR0FDWC9WLEdBQUcsQ0FBQytWLE1BQU0sS0FBSyxXQUFXLEdBQ3RCLFNBQVMsR0FDWC9WLEdBQUcsQ0FBQytWLE1BQU0sS0FBSyxPQUFPLEdBQ2xCLEtBQUssR0FDUC9WLEdBQUcsQ0FBQytWLE1BQU0sS0FBSyxVQUFVLEdBQ3JCLE1BQU0sR0FBRztJQUNwQixHQUVBL1YsR0FBRyxDQUFDK1YsTUFBTSxLQUFLbUMsU0FBUyxHQUFHbFksR0FBRyxDQUFDK1YsTUFBTSxHQUFHLFdBQVcsRUFBRS9WLEdBQUcsQ0FBQzJZLE9BQU8sS0FBS1QsU0FBUyxHQUFHLElBQUksR0FBR2xZLEdBQUcsQ0FBQzJZLE9BQU8sR0FBRyxFQUM3RixDQUNSLENBQ0YsQ0FDQyxDQUFDLGVBQ1J0bkIsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJcWlCLE9BQU8sRUFBRSxDQUFFO01BQUN6WixLQUFLLEVBQUU7UUFBRW9YLFNBQVMsRUFBRTtNQUFTO0lBQUUsR0FBQyxvQkFBc0IsQ0FDcEUsQ0FBQyxlQUNMaGdCLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFJLFlBQWMsQ0FBQyxlQUNuQkEsMERBQUEsYUFBSzJPLEdBQUcsQ0FBQ29KLFVBQWUsQ0FDdEIsQ0FBQyxlQUNML1gsMERBQUEsMEJBQ0VBLDBEQUFBLGFBQUksT0FBUyxDQUFDLGVBQ2RBLDBEQUFBLGFBQUsyTyxHQUFHLENBQUNxSixZQUFpQixDQUN4QixDQUNDLENBQUMsZUFDUmhZLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXFpQixPQUFPLEVBQUUsQ0FBRTtNQUFDelosS0FBSyxFQUFFO1FBQUVvWCxTQUFTLEVBQUU7TUFBUztJQUFFLEdBQUMsa0JBQW9CLENBQ2xFLENBQUMsZUFDTGhnQiwwREFBQSwwQkFDRUEsMERBQUEsYUFBSSxPQUFTLENBQUMsZUFDZEEsMERBQUEsYUFBSzJPLEdBQUcsQ0FBQzRZLGFBQWtCLENBQ3pCLENBQUMsZUFDTHZuQiwwREFBQSwwQkFDRUEsMERBQUEsYUFBSSxPQUFTLENBQUMsZUFDZEEsMERBQUEsYUFBSzJPLEdBQUcsQ0FBQzZZLGFBQWtCLENBQ3pCLENBQUMsZUFDTHhuQiwwREFBQSwwQkFDRUEsMERBQUEsYUFBSSxTQUFXLENBQUMsZUFDaEJBLDBEQUFBLGFBQUsyTyxHQUFHLENBQUNzSixlQUFvQixDQUMzQixDQUNDLENBQUMsRUFFTjNNLElBQUksQ0FBQ1UsSUFBSSxDQUFDRyxJQUFJLEtBQUssS0FBSyxnQkFDdEJuTSwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUlxaUIsT0FBTyxFQUFFLENBQUU7TUFBQ3paLEtBQUssRUFBRTtRQUFFb1gsU0FBUyxFQUFFO01BQVM7SUFBRSxHQUFDLG9CQUFzQixDQUNwRSxDQUFDLGVBQ0xoZ0IsMERBQUEsMEJBQ0VBLDBEQUFBLGFBQUksWUFBYyxDQUFDLGVBQ25CQSwwREFBQSxhQUFJLEtBQUcsRUFBQ2dSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQzhZLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQ3RXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQU0sQ0FDdkYsQ0FBQyxlQUNMbGdCLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFJLHNCQUF3QixDQUFDLGVBQzdCQSwwREFBQSxhQUFJLEtBQUcsRUFBQ2dSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQ3VVLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQy9SLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQU0sQ0FDL0YsQ0FBQyxlQUNMbGdCLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFJLGlCQUFtQixDQUFDLGVBQ3hCQSwwREFBQSxhQUFJLEtBQUcsRUFBQ2dSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQzBVLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQ2xTLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQytPLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQU0sQ0FDMUYsQ0FBQyxlQUNMbGdCLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFJLHNCQUF3QixDQUFDLGVBQzdCQSwwREFBQSxhQUFJLEtBQUcsRUFBQ2dSLFVBQVUsQ0FBQ3JDLEdBQUcsQ0FBQzZVLGdCQUFnQixJQUFJLENBQUMsQ0FBQyxDQUFDclMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBTSxDQUNqRyxDQUFDLGVBQ0xsZ0IsMERBQUEsMEJBQ0VBLDBEQUFBLGFBQUksT0FBUyxDQUFDLGVBQ2RBLDBEQUFBLGFBQUksS0FBRyxFQUFDZ1IsVUFBVSxDQUFDckMsR0FBRyxDQUFDZ1YsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDeFMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDK08sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBTSxDQUN0RixDQUFDLGVBQ0xsZ0IsMERBQUEsMEJBQ0VBLDBEQUFBLGFBQUksY0FBZ0IsQ0FBQyxlQUNyQkEsMERBQUEsYUFBSSxLQUFHLEVBQUNnUixVQUFVLENBQUMwVyxNQUFNLENBQUMvWSxHQUFHLENBQUM4WSxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQy9ZLEdBQUcsQ0FBQ3VVLGNBQWMsSUFBSSxDQUFDLENBQUMsR0FBR3dFLE1BQU0sQ0FBQy9ZLEdBQUcsQ0FBQzBVLFNBQVMsSUFBSSxDQUFDLENBQUMsR0FBR3FFLE1BQU0sQ0FBQy9ZLEdBQUcsQ0FBQzZVLGdCQUFnQixJQUFJLENBQUMsQ0FBQyxHQUFHa0UsTUFBTSxDQUFDL1ksR0FBRyxDQUFDZ1YsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUN4UyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsTUFBSSxFQUFDbFAsVUFBVSxDQUFDLENBQUMwVyxNQUFNLENBQUMvWSxHQUFHLENBQUM4WSxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQy9ZLEdBQUcsQ0FBQ3VVLGNBQWMsSUFBSSxDQUFDLENBQUMsR0FBR3dFLE1BQU0sQ0FBQy9ZLEdBQUcsQ0FBQzBVLFNBQVMsSUFBSSxDQUFDLENBQUMsR0FBR3FFLE1BQU0sQ0FBQy9ZLEdBQUcsQ0FBQzZVLGdCQUFnQixJQUFJLENBQUMsQ0FBQyxHQUFHa0UsTUFBTSxDQUFDL1ksR0FBRyxDQUFDZ1YsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLNVYsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNvRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsR0FBSyxDQUNsYyxDQUNDLENBQUMsZ0JBQUdsZ0IsMERBQUEsY0FBYyxDQUV4QixDQUFDLGVBQ1JBLDBEQUFBO01BQU80SSxLQUFLLEVBQUU7UUFBRWdhLFlBQVksRUFBRTtNQUFNO0lBQUUsR0FFbEN0WCxJQUFJLENBQUNVLElBQUksQ0FBQ0csSUFBSSxLQUFLLEtBQUssZ0JBQ3RCbk0sMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVvWCxTQUFTLEVBQUU7TUFBUztJQUFFLEdBQUMsYUFBZSxDQUNqRCxDQUFDLGVBQ0xoZ0IsMERBQUEsMEJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQSw0QkFDRUEsMERBQUE7TUFBSzRJLEtBQUssRUFBRTtRQUFFK2UsVUFBVSxFQUFFLFdBQVc7UUFBRS9mLEtBQUssRUFBRSxPQUFPO1FBQUVHLFFBQVEsRUFBRTtNQUFPO0lBQUUsR0FBRTRHLEdBQUcsQ0FBQ3dQLFdBQWlCLENBQzdGLENBQ0osQ0FDRixDQUNDLENBQUMsZ0JBQUduZSwwREFBQSxjQUFjLENBRXhCLENBRUksQ0FDVCxDQUNFLENBQUMsZUFDWEEsMERBQUEsQ0FBQ21GLGlEQUFRO01BQUNpUixLQUFLLEVBQUMsR0FBRztNQUFDdUwsRUFBRSxFQUFFO1FBQUUwRCxNQUFNLEVBQUUsT0FBTztRQUFFSSxRQUFRLEVBQUUsUUFBUTtRQUFFTSxTQUFTLEVBQUU7TUFBUztJQUFFLGdCQUNuRi9sQiwwREFBQSxDQUFDNEMsc0RBQUk7TUFBQytlLEVBQUUsRUFBRTtRQUFFMVksS0FBSyxFQUFFLE1BQU07UUFBRWxCLFFBQVEsRUFBRTtNQUFPO0lBQUUsZ0JBQzVDL0gsMERBQUEsQ0FBQzZDLHNEQUFXLHFCQUNWN0MsMERBQUEsNkJBQ0VBLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXFpQixPQUFPLEVBQUUsQ0FBRTtNQUFDelosS0FBSyxFQUFFO1FBQUVvWCxTQUFTLEVBQUU7TUFBUztJQUFFLEdBQUMsc0JBQXdCLENBQ3RFLENBQ0MsQ0FBQyxlQUNSaGdCLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUEsYUFBSSxlQUFpQixDQUFDLGVBQ3RCQSwwREFBQSxhQUFLZ0YsNkNBQUssQ0FBQzJKLEdBQUcsQ0FBQ2laLFdBQVcsQ0FBQyxDQUFDdEksTUFBTSxDQUFDLFlBQVksQ0FBTSxDQUNuRCxDQUFDLGVBQ0x0ZiwwREFBQSwwQkFDRUEsMERBQUEsYUFBSSxRQUFVLENBQUMsZUFDZkEsMERBQUEsYUFBSzJPLEdBQUcsQ0FBQ2taLE1BQVcsQ0FDbEIsQ0FBQyxlQUNMN25CLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFJLFFBQVUsQ0FBQyxlQUNmQSwwREFBQSxhQUFLMk8sR0FBRyxDQUFDbVosYUFBa0IsQ0FDekIsQ0FDQyxDQUFDLGVBQ1I5bkIsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFJLElBQU0sQ0FBQyxlQUNYQSwwREFBQSxhQUFLMk8sR0FBRyxDQUFDb1osVUFBZSxDQUN0QixDQUFDLGVBQ0wvbkIsMERBQUEsMEJBQ0VBLDBEQUFBLGFBQUksTUFBUSxDQUFDLGVBQ2JBLDBEQUFBLGFBQUsyTyxHQUFHLENBQUNxWixnQkFBcUIsQ0FDNUIsQ0FBQyxlQUNMaG9CLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFJLGFBQWUsQ0FBQyxlQUNwQkEsMERBQUEsYUFBS2dGLDZDQUFLLENBQUMySixHQUFHLENBQUNzWixVQUFVLENBQUMsQ0FBQzNJLE1BQU0sQ0FBQyxZQUFZLENBQU0sQ0FDbEQsQ0FDQyxDQUNGLENBQUMsZUFDUnRmLDBEQUFBO01BQUsrRyxTQUFTLEVBQUM7SUFBa0IsZ0JBQy9CL0csMERBQUE7TUFBSzRJLEtBQUssRUFBRTtRQUFFSyxLQUFLLEVBQUUsTUFBTTtRQUFFSixRQUFRLEVBQUUsVUFBVTtRQUFFaWEsT0FBTyxFQUFFO01BQU87SUFBRSxHQUVqRXhQLE1BQU0sS0FBSyxJQUFJLGdCQUVYdFQsMERBQUEsMkJBQ0VBLDBEQUFBLCtCQUNFQSwwREFBQSxDQUFDZ0ksYUFBYTtNQUFDcWUsS0FBSyxFQUFDO0lBQWMsZ0JBQ2pDcm1CLDBEQUFBLGVBQU0sb0JBQWtCLGVBQUFBLDBEQUFBLENBQUNVLHFEQUFVO01BQUNtaEIsT0FBTyxFQUFFN0U7SUFBa0IsZ0JBQzdEaGQsMERBQUEsQ0FBQytDLG1FQUFVO01BQUM2RixLQUFLLEVBQUU7UUFBRXNmLE1BQU0sRUFBRSxTQUFTO1FBQUV0Z0IsS0FBSyxFQUFFO01BQU07SUFBRSxDQUFFLENBQy9DLENBQ04sQ0FDTyxDQUNSLENBQUMsZUFDVjVILDBEQUFBLCtCQUNFQSwwREFBQTtNQUFLNEksS0FBSyxFQUFFO1FBQUUwQixVQUFVLEVBQUUsS0FBSztRQUFFckIsS0FBSyxFQUFFLE9BQU87UUFBRW9jLE1BQU0sRUFBRTtNQUFRLENBQUU7TUFBQzhDLEdBQUcsRUFBRXpVLFNBQVU7TUFBQzBVLEdBQUcsRUFBRTlVLE1BQU0sQ0FBQytVO0lBQVMsQ0FBRSxDQUNwRyxDQUNOLENBQUMsZ0JBRU5yb0IsMERBQUEsY0FDRzRiLGFBQWEsZ0JBQ1o1YiwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUE7TUFBSzRJLEtBQUssRUFBRTtRQUFFSyxLQUFLLEVBQUUsTUFBTTtRQUFFNGIsT0FBTyxFQUFFLE1BQU07UUFBRU8sY0FBYyxFQUFFO01BQWU7SUFBRSxnQkFDN0VwbEIsMERBQUE7TUFBS2lKLEtBQUssRUFBRSxHQUFJO01BQUNvYyxNQUFNLEVBQUUsR0FBSTtNQUFDOEMsR0FBRyxFQUFFdk07SUFBYyxDQUFFLENBQUMsZUFDcEQ1YiwwREFBQSxDQUFDb0ksWUFBWTtNQUFDaWUsS0FBSyxFQUFDLE9BQU87TUFBQ0MsU0FBUyxFQUFDLE1BQU07TUFBQzFkLEtBQUssRUFBRTtRQUFFQyxRQUFRLEVBQUU7TUFBVztJQUFFLGdCQUMzRTdJLDBEQUFBLENBQUNVLHFEQUFVO01BQUNtaEIsT0FBTyxFQUFFdkYsZUFBZ0I7TUFBQzFULEtBQUssRUFBRTtRQUFFQyxRQUFRLEVBQUUsVUFBVTtRQUFFMGQsS0FBSyxFQUFFO01BQVE7SUFBRSxnQkFDcEZ2bUIsMERBQUEsQ0FBQzRGLDREQUFtQjtNQUFDZ0QsS0FBSyxFQUFFO1FBQUVoQixLQUFLLEVBQUU7TUFBVTtJQUFFLENBQUUsQ0FDekMsQ0FDQSxDQUNYLENBQUMsZUFDTjVILDBEQUFBLFdBQUssQ0FBQyxlQUNOQSwwREFBQTtNQUFRd1UsSUFBSSxFQUFDLFFBQVE7TUFBQ3pOLFNBQVMsRUFBQyxjQUFjO01BQUM2QixLQUFLLEVBQUU7UUFBRTBCLFVBQVUsRUFBRSxLQUFLO1FBQUVyQixLQUFLLEVBQUU7TUFBTSxDQUFFO01BQUM0WSxPQUFPLEVBQUV0RjtJQUFrQixHQUFDLFFBQWMsQ0FDckksQ0FBQyxnQkFFRHZjLDBEQUFBO01BQU9nbUIsUUFBUSxFQUFFOUosWUFBYTtNQUFDMUgsSUFBSSxFQUFDLE1BQU07TUFBQzVMLEtBQUssRUFBRTtRQUFFMEIsVUFBVSxFQUFFLEtBQUs7UUFBRXJCLEtBQUssRUFBRTtNQUFNO0lBQUUsQ0FBRSxDQUV6RixDQUdSLENBQ0YsQ0FDTSxDQUNULENBQ0UsQ0FBQyxlQUNYakosMERBQUEsQ0FBQ21GLGlEQUFRO01BQUNpUixLQUFLLEVBQUMsR0FBRztNQUFDdUwsRUFBRSxFQUFFO1FBQUUwRCxNQUFNLEVBQUUsT0FBTztRQUFFSSxRQUFRLEVBQUUsUUFBUTtRQUFFTSxTQUFTLEVBQUU7TUFBUztJQUFFLGdCQUNuRi9sQiwwREFBQSxDQUFDaUIsc0RBQWMscUJBQ2JqQiwwREFBQSxDQUFDaUIsc0RBQWM7TUFBQzZnQixTQUFTLEVBQUU5Z0Isc0RBQUtBO0lBQUMsZ0JBQy9CaEIsMERBQUEsQ0FBQ1csc0RBQUs7TUFBQyxjQUFXO0lBQW1CLGdCQUNuQ1gsMERBQUEsQ0FBQ2Usc0RBQVMscUJBQ1JmLDBEQUFBLENBQUNjLHFEQUFRLHFCQUNQZCwwREFBQSxDQUFDYSxxREFBUyxNQUFFLENBQUMsZUFDYmIsMERBQUEsQ0FBQ2EscURBQVMsUUFBQyxHQUFZLENBQUMsZUFDeEJiLDBEQUFBLENBQUNhLHFEQUFTO01BQUNtaEIsS0FBSyxFQUFDO0lBQVEsR0FBQyxjQUF1QixDQUFDLGVBQ2xEaGlCLDBEQUFBLENBQUNhLHFEQUFTO01BQUNtaEIsS0FBSyxFQUFDO0lBQVEsR0FBQyxVQUFtQixDQUFDLGVBQzlDaGlCLDBEQUFBLENBQUNhLHFEQUFTO01BQUNtaEIsS0FBSyxFQUFDO0lBQVEsR0FBQyxTQUFrQixDQUFDLGVBQzdDaGlCLDBEQUFBLENBQUNhLHFEQUFTO01BQUNtaEIsS0FBSyxFQUFDO0lBQU8sR0FBQyxXQUFvQixDQUNyQyxDQUNELENBQUMsZUFDWmhpQiwwREFBQSxDQUFDWSxzREFBUyxRQUVOcVMsWUFBWSxhQUFaQSxZQUFZLHVCQUFaQSxZQUFZLENBQUV2RSxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFbVIsQ0FBQyxrQkFDdkI5ZiwwREFBQSxDQUFDa2tCLElBQUk7TUFBQ25FLEdBQUcsRUFBRXBSLEdBQUcsQ0FBQ3hELEVBQUc7TUFBQ3dELEdBQUcsRUFBRUEsR0FBSTtNQUFDeVYsS0FBSyxFQUFFdEU7SUFBRSxDQUFFLENBQ3pDLENBQ00sQ0FDTixDQUNPLENBQ0YsQ0FDUixDQUFDLGVBQ1g5ZiwwREFBQSxDQUFDbUYsaURBQVE7TUFBQ2lSLEtBQUssRUFBQyxHQUFHO01BQUN1TCxFQUFFLEVBQUU7UUFBRTBELE1BQU0sRUFBRSxPQUFPO1FBQUVJLFFBQVEsRUFBRSxRQUFRO1FBQUVNLFNBQVMsRUFBRTtNQUFTO0lBQUUsZ0JBQ25GL2xCLDBEQUFBLENBQUNpQixzREFBYyxxQkFDYmpCLDBEQUFBLENBQUNpQixzREFBYztNQUFDNmdCLFNBQVMsRUFBRTlnQixzREFBS0E7SUFBQyxnQkFDL0JoQiwwREFBQSxDQUFDVyxzREFBSztNQUFDLGNBQVc7SUFBbUIsZ0JBQ25DWCwwREFBQSxDQUFDZSxzREFBUyxxQkFDUmYsMERBQUEsQ0FBQ2MscURBQVEscUJBQ1BkLDBEQUFBLENBQUNhLHFEQUFTLE1BQUUsQ0FBQyxlQUNiYiwwREFBQSxDQUFDYSxxREFBUyxRQUFDLE9BQWdCLENBQUMsZUFDNUJiLDBEQUFBLENBQUNhLHFEQUFTO01BQUNtaEIsS0FBSyxFQUFDO0lBQU8sR0FBQyxVQUFtQixDQUFDLGVBQzdDaGlCLDBEQUFBLENBQUNhLHFEQUFTO01BQUNtaEIsS0FBSyxFQUFDO0lBQU8sR0FBQyxZQUFxQixDQUN0QyxDQUNELENBQUMsZUFDWmhpQiwwREFBQSxDQUFDWSxzREFBUyxRQUNQdU0sT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUV1QixHQUFHLENBQUVDLEdBQUcsaUJBQ2hCM08sMERBQUEsQ0FBQ3NoQixHQUFHO01BQUN2QixHQUFHLEVBQUVwUixHQUFHLENBQUN0QyxHQUFJO01BQUNzQyxHQUFHLEVBQUVBO0lBQUksQ0FBRSxDQUMvQixDQUNRLENBQ04sQ0FDTyxDQUNGLENBQ1IsQ0FBQyxlQUNYM08sMERBQUEsQ0FBQ21GLGlEQUFRO01BQUNpUixLQUFLLEVBQUMsR0FBRztNQUFDdUwsRUFBRSxFQUFFO1FBQUUwRCxNQUFNLEVBQUUsT0FBTztRQUFFSSxRQUFRLEVBQUUsUUFBUTtRQUFFTSxTQUFTLEVBQUU7TUFBUztJQUFFLGdCQUNuRi9sQiwwREFBQTtNQUFLNEksS0FBSyxFQUFFO1FBQUVnYSxZQUFZLEVBQUUsS0FBSztRQUFFaUMsT0FBTyxFQUFFLE1BQU07UUFBRU8sY0FBYyxFQUFFLGVBQWU7UUFBRUQsVUFBVSxFQUFFLFFBQVE7UUFBRXZDLFlBQVksRUFBRTtNQUFNO0lBQUUsZ0JBQy9INWlCLDBEQUFBLENBQUNvRyxzRUFBb0I7TUFBQ2tpQixXQUFXLEVBQUVqaUIsMkVBQVlBO0lBQUMsZ0JBQzlDckcsMERBQUEsQ0FBQ3NHLDhFQUFhO01BQUNpaUIsVUFBVSxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVk7SUFBRSxnQkFDdER2b0IsMERBQUEsQ0FBQ21HLDREQUFVO01BQ1RxaUIsUUFBUTtNQUNSMVYsSUFBSSxFQUFDLFdBQVc7TUFDaEJzRCxLQUFLLEVBQUVwUiw2Q0FBSyxDQUFDaWEsU0FBUyxDQUFFO01BQ3hCK0csUUFBUSxFQUFHakksSUFBSSxJQUFLbUIsWUFBWSxDQUFDbkIsSUFBSSxDQUFFO01BQ3ZDdUIsTUFBTSxFQUFDLFdBQVc7TUFDbEI0RyxLQUFLLEVBQUUsb0JBQXFCO01BQUN1QyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTTtJQUFFLENBQ3ZELENBQ1ksQ0FDSyxDQUNuQixDQUFDLGVBQ056b0IsMERBQUEsQ0FBQzRCLHNEQUFHO01BQUMrZixFQUFFLEVBQUU7UUFBRW1CLE9BQU8sRUFBRTtNQUFPO0lBQUUsZ0JBQzNCOWlCLDBEQUFBO01BQUs0SSxLQUFLLEVBQUU7UUFBRWthLE9BQU8sRUFBRTtNQUFPO0lBQUUsZ0JBQzlCOWlCLDBEQUFBLENBQUNGLDhEQUFXO01BQUM0b0IsUUFBUSxFQUFFLE9BQU8vWixHQUFHLEtBQUssV0FBVyxHQUFHQSxHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRStaLFFBQVEsR0FBRyxPQUFPMWMsSUFBSSxLQUFLLFdBQVcsSUFBQXdhLEtBQUEsR0FBR3hhLElBQUksY0FBQXdhLEtBQUEsdUJBQUpBLEtBQUEsQ0FBTWtDLFFBQVEsR0FBRztJQUFHLENBQUUsQ0FBQyxlQUN6SDFvQiwwREFBQSxXQUFLLENBQUMsZUFBQUEsMERBQUE7TUFBRytHLFNBQVMsRUFBQztJQUFXLENBQUksQ0FBQyxlQUNuQy9HLDBEQUFBLCtCQUNFQSwwREFBQTtNQUFTNEksS0FBSyxFQUFFO1FBQUVpYyxPQUFPLEVBQUUsTUFBTTtRQUFFTyxjQUFjLEVBQUUsZUFBZTtRQUFFdUQsU0FBUyxFQUFFO01BQU87SUFBRSxnQkFDdEYzb0IsMERBQUE7TUFBUzRJLEtBQUssRUFBRTtRQUFFQyxRQUFRLEVBQUUsVUFBVTtRQUFFK2YsVUFBVSxFQUFFLElBQUk7UUFBRTNmLEtBQUssRUFBRTtNQUFNO0lBQUUsZ0JBQ3ZFakosMERBQUE7TUFBRzRJLEtBQUssRUFBRSxDQUFDO0lBQUUsZ0JBQ1g1SSwwREFBQSxXQUFLLENBQUMsZUFDTkEsMERBQUE7TUFBTTRJLEtBQUssRUFBRTtRQUFFa2QsVUFBVSxFQUFFLE1BQU07UUFBRS9kLFFBQVEsRUFBRTtNQUFPO0lBQUUsR0FDbkQsQ0FBQzRHLEdBQUcsQ0FBQzFDLFlBQVksSUFBSSxFQUFFLEVBQUUwYSxXQUFXLENBQUMsQ0FDbEMsQ0FBQyxlQUNQM21CLDBEQUFBLFdBQUssQ0FDSixDQUNJLENBQUMsZUFDVkEsMERBQUE7TUFBTytHLFNBQVMsRUFBQyxZQUFZO01BQUM2QixLQUFLLEVBQUU7UUFBRUMsUUFBUSxFQUFFLFVBQVU7UUFBRWQsUUFBUSxFQUFFLEtBQUs7UUFBRWdCLElBQUksRUFBRSxNQUFNO1FBQUU2WixZQUFZLEVBQUUsTUFBTTtRQUFFaUcsZUFBZSxFQUFFO01BQU87SUFBRSxnQkFDMUk3b0IsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJcWlCLE9BQU8sRUFBRSxDQUFFO01BQUN6WixLQUFLLEVBQUU7UUFBRWpCLGVBQWUsRUFBRSxPQUFPO1FBQUVzWSxZQUFZLEVBQUUsaUJBQWlCO1FBQUVELFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyx1QkFBeUIsQ0FDaEksQ0FDQyxDQUFDLGVBQ1JoZ0IsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJcWlCLE9BQU8sRUFBRSxDQUFFO01BQUN6WixLQUFLLEVBQUU7UUFBRWpCLGVBQWUsRUFBRSxPQUFPO1FBQUVzWSxZQUFZLEVBQUUsaUJBQWlCO1FBQUVELFNBQVMsRUFBRTtNQUFRO0lBQUUsZ0JBQ3ZHaGdCLDBEQUFBLGVBQU0sTUFDQSxFQUFDZ0YsNkNBQUssQ0FBQ2lhLFNBQVMsQ0FBQyxDQUFDSyxNQUFNLENBQUMsV0FBVyxDQUNwQyxDQUNKLENBQ0YsQ0FDQyxDQUFDLGVBQ1J0ZiwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUlxaUIsT0FBTyxFQUFFLENBQUU7TUFBQ3paLEtBQUssRUFBRTtRQUFFakIsZUFBZSxFQUFFLFNBQVM7UUFBRWtiLE1BQU0sRUFBRSxNQUFNO1FBQUU3QyxTQUFTLEVBQUU7TUFBTztJQUFFLEdBQUMsaUJBQW1CLENBQzNHLENBQUMsZUFDTGhnQiwwREFBQSwwQkFDRUEsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFakIsZUFBZSxFQUFFLE9BQU87UUFBRWtiLE1BQU0sRUFBRSxNQUFNO1FBQUU3QyxTQUFTLEVBQUU7TUFBTztJQUFFLGdCQUFDaGdCLDBEQUFBLGVBQU8sWUFBZ0IsQ0FBSyxDQUFDLGVBQ3pHQSwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVvWCxTQUFTLEVBQUUsTUFBTTtRQUFFL1csS0FBSyxFQUFFO01BQVE7SUFBRSxHQUFFLE1BQUF4QixNQUFBLENBQU11SixVQUFVLENBQUN1TyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUNwTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLFVBQUF6WSxNQUFBLENBQVd1SixVQUFVLENBQUN5TyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUN0TyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLE1BQVEsQ0FDL04sQ0FDQyxDQUNGLENBQ0EsQ0FBQyxlQUNWbGdCLDBEQUFBO01BQU8rRyxTQUFTLEVBQUMsYUFBYTtNQUFDNkIsS0FBSyxFQUFFO1FBQUViLFFBQVEsRUFBRSxLQUFLO1FBQUU2YSxZQUFZLEVBQUUsS0FBSztRQUFFQyxNQUFNLEVBQUUsZ0JBQWdCO1FBQUVpRyxTQUFTLEVBQUUsT0FBTztRQUFFckQsUUFBUSxFQUFFLE1BQU07UUFBRW9ELGVBQWUsRUFBRTtNQUFPO0lBQUUsZ0JBQ3RLN29CLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFSyxLQUFLLEVBQUUsT0FBTztRQUFFZ1gsWUFBWSxFQUFFLGdCQUFnQjtRQUFFdFksZUFBZSxFQUFFO01BQVU7SUFBRSxHQUFDLE1BQVEsQ0FBQyxlQUNwRzNILDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRWdYLFlBQVksRUFBRSxnQkFBZ0I7UUFBRXRZLGVBQWUsRUFBRTtNQUFVLENBQUU7TUFBQ3FhLEtBQUssRUFBQztJQUFNLEdBQUMsYUFBZSxDQUFDLGVBQ3hIaGlCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRWdYLFlBQVksRUFBRSxnQkFBZ0I7UUFBRXRZLGVBQWUsRUFBRTtNQUFVLENBQUU7TUFBQ3FhLEtBQUssRUFBQztJQUFNLEdBQUMsU0FBVyxDQUFDLGVBQ3BIaGlCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRWdYLFlBQVksRUFBRSxnQkFBZ0I7UUFBRXRZLGVBQWUsRUFBRTtNQUFVLENBQUU7TUFBQ3FhLEtBQUssRUFBQztJQUFNLEdBQUMsVUFBWSxDQUFDLGVBQ3JIaGlCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRWdYLFlBQVksRUFBRSxnQkFBZ0I7UUFBRXRZLGVBQWUsRUFBRTtNQUFVLENBQUU7TUFBQ3FhLEtBQUssRUFBQztJQUFNLEdBQUMsUUFBVSxDQUFDLGVBQ25IaGlCLDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRUssS0FBSyxFQUFFLE9BQU87UUFBRWdYLFlBQVksRUFBRSxnQkFBZ0I7UUFBRXRZLGVBQWUsRUFBRTtNQUFVLENBQUU7TUFBQ3FhLEtBQUssRUFBQztJQUFNLEdBQUMsT0FBUyxDQUMvRyxDQUNDLENBQUMsZUFFUmhpQiwwREFBQSxnQkFDRzBmLFFBQVEsZUFDVDFmLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJcWlCLE9BQU8sRUFBRTtJQUFFLENBQUssQ0FBQyxlQUNyQnJpQiwwREFBQSxhQUFLLFlBQWMsQ0FBQyxlQUNwQkEsMERBQUE7TUFBSXFpQixPQUFPLEVBQUU7SUFBRSxHQUFFLE1BQUE1YSxNQUFBLEVBQUFnZixRQUFBLEdBQU10SCxPQUFPLGNBQUFzSCxRQUFBLHVCQUFQQSxRQUFBLENBQVN0VixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLFVBQUF6WSxNQUFBLEVBQUFpZixTQUFBLEdBQVd0SCxRQUFRLGNBQUFzSCxTQUFBLHVCQUFSQSxTQUFBLENBQVV2VixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMrTyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLE1BQVEsQ0FDM0osQ0FDQyxDQUNGLENBQ0EsQ0FBQyxlQUNWbGdCLDBEQUFBO01BQUsrRyxTQUFTLEVBQUM7SUFBZSxnQkFDNUIvRywwREFBQTtNQUFHNEksS0FBSyxFQUFFO1FBQUVpYyxPQUFPLEVBQUUsTUFBTTtRQUFFaUMsR0FBRyxFQUFFLEtBQUs7UUFBRTNCLFVBQVUsRUFBRTtNQUFTO0lBQUUsZ0JBQzlEbmxCLDBEQUFBLDRCQUFNQSwwREFBQSxDQUFDMEcsa0VBQUssTUFBRSxDQUFPLENBQUMsZUFDdEIxRywwREFBQSxlQUFNLHlCQUE2QixDQUNsQyxDQUFDLGVBQ0pBLDBEQUFBO01BQUc0SSxLQUFLLEVBQUU7UUFBRWljLE9BQU8sRUFBRSxNQUFNO1FBQUVpQyxHQUFHLEVBQUUsS0FBSztRQUFFM0IsVUFBVSxFQUFFO01BQVM7SUFBRSxnQkFDOURubEIsMERBQUEsNEJBQU1BLDBEQUFBLENBQUN3RyxrRUFBSyxNQUFFLENBQU8sQ0FBQyxlQUN0QnhHLDBEQUFBLGVBQU0sa0JBQXNCLENBQzNCLENBQUMsZUFDSkEsMERBQUE7TUFBRzRJLEtBQUssRUFBRTtRQUFFaWMsT0FBTyxFQUFFLE1BQU07UUFBRWlDLEdBQUcsRUFBRSxLQUFLO1FBQUUzQixVQUFVLEVBQUU7TUFBUztJQUFFLGdCQUM5RG5sQiwwREFBQSw0QkFBTUEsMERBQUEsQ0FBQ3lHLGdFQUFPLE1BQUUsQ0FBTyxDQUFDLGVBQ3hCekcsMERBQUEsZUFBTSxxQkFBeUIsQ0FDOUIsQ0FDQSxDQUNGLENBQ0YsQ0FDRyxDQUFDLGVBQ1hBLDBEQUFBLENBQUNtRixpREFBUTtNQUFDaVIsS0FBSyxFQUFDLEdBQUc7TUFBQ3VMLEVBQUUsRUFBRTtRQUFFMEQsTUFBTSxFQUFFLE9BQU87UUFBRUksUUFBUSxFQUFFLFFBQVE7UUFBRU0sU0FBUyxFQUFFO01BQVM7SUFBRSxnQkFDbkYvbEIsMERBQUEsQ0FBQzRDLHNEQUFJLHFCQUNINUMsMERBQUEsQ0FBQzZDLHNEQUFXLHFCQUNWN0MsMERBQUE7TUFBUzRJLEtBQUssRUFBRTtRQUFFQyxRQUFRLEVBQUUsVUFBVTtRQUFFMGQsS0FBSyxFQUFFLE9BQU87UUFBRXpELE9BQU8sRUFBRTtNQUFPO0lBQUUsZ0JBQ3hFOWlCLDBEQUFBLENBQUNrQixzREFBUztNQUNSZ2xCLEtBQUssRUFBQyxRQUFRO01BQ2QvYSxFQUFFLEVBQUMsU0FBUztNQUNaaUwsS0FBSyxFQUFFaUssT0FBUTtNQUNmcUMsT0FBTyxFQUFDLFVBQVU7TUFDbEJzRCxRQUFRLEVBQUV6RjtJQUFjLENBQ3pCLENBQ00sQ0FBQyxlQUNWdmdCLDBEQUFBO01BQU8rRyxTQUFTLEVBQUMsYUFBYTtNQUFDNkIsS0FBSyxFQUFFO1FBQUViLFFBQVEsRUFBRSxLQUFLO1FBQUU2YSxZQUFZLEVBQUUsS0FBSztRQUFFQyxNQUFNLEVBQUU7TUFBaUI7SUFBRSxnQkFDdkc3aUIsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVrYSxPQUFPLEVBQUUsTUFBTTtRQUFFRCxNQUFNLEVBQUUsZ0JBQWdCO1FBQUVsYixlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUMsR0FBSyxDQUFDLGVBQzVGM0gsMERBQUE7TUFBSTRJLEtBQUssRUFBRTtRQUFFa2EsT0FBTyxFQUFFLE1BQU07UUFBRUQsTUFBTSxFQUFFLGdCQUFnQjtRQUFFbGIsZUFBZSxFQUFFO01BQVU7SUFBRSxHQUFDLE1BQVEsQ0FBQyxlQUMvRjNILDBEQUFBO01BQUk0SSxLQUFLLEVBQUU7UUFBRWthLE9BQU8sRUFBRSxNQUFNO1FBQUVELE1BQU0sRUFBRSxnQkFBZ0I7UUFBRWxiLGVBQWUsRUFBRTtNQUFVO0lBQUUsR0FBQyxRQUFVLENBQUMsZUFDakczSCwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVrYSxPQUFPLEVBQUUsTUFBTTtRQUFFRCxNQUFNLEVBQUUsZ0JBQWdCO1FBQUVsYixlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUMsa0JBQW9CLENBQUMsZUFDM0czSCwwREFBQTtNQUFJNEksS0FBSyxFQUFFO1FBQUVrYSxPQUFPLEVBQUUsTUFBTTtRQUFFRCxNQUFNLEVBQUUsZ0JBQWdCO1FBQUVsYixlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUMsTUFBUSxDQUM1RixDQUNDLENBQUMsZUFDUjNILDBEQUFBLGdCQUVJd2dCLFNBQVMsQ0FBQzlSLEdBQUcsQ0FBRUMsR0FBRztNQUFBLElBQUFvYSxrQkFBQSxFQUFBQyxtQkFBQTtNQUFBLG9CQUNoQmhwQiwwREFBQTtRQUFJK2YsR0FBRyxFQUFFcFIsR0FBRyxDQUFDdEM7TUFBSSxnQkFDZnJNLDBEQUFBO1FBQUk0SSxLQUFLLEVBQUU7VUFBRW9YLFNBQVMsRUFBRSxNQUFNO1VBQUUvVyxLQUFLLEVBQUU7UUFBTztNQUFFLEdBQUUwRixHQUFHLENBQUNzYSxTQUFjLENBQUMsZUFDckVqcEIsMERBQUE7UUFBSTRJLEtBQUssRUFBRTtVQUFFb1gsU0FBUyxFQUFFLE1BQU07VUFBRS9XLEtBQUssRUFBRSxNQUFNO1VBQUVpZ0IsVUFBVSxFQUFFO1FBQWlCO01BQUUsR0FBRWxrQiw2Q0FBSyxDQUFDMkosR0FBRyxDQUFDbVMsV0FBVyxDQUFDLENBQUN4QixNQUFNLENBQUMsWUFBWSxDQUFNLENBQUMsZUFDakl0ZiwwREFBQTtRQUFJNEksS0FBSyxFQUFFO1VBQUVvWCxTQUFTLEVBQUUsTUFBTTtVQUFFL1csS0FBSyxFQUFFLE9BQU87VUFBRWlnQixVQUFVLEVBQUU7UUFBaUI7TUFBRSxHQUFFdmEsR0FBRyxDQUFDOEosTUFBVyxDQUFDLGVBQ2pHelksMERBQUE7UUFBSTRJLEtBQUssRUFBRTtVQUFFb1gsU0FBUyxFQUFFLE1BQU07VUFBRS9XLEtBQUssRUFBRSxPQUFPO1VBQUVpZ0IsVUFBVSxFQUFFO1FBQWlCO01BQUUsR0FBQyxHQUFDLEdBQUFILGtCQUFBLEdBQUNwYSxHQUFHLENBQUMrUixhQUFhLGNBQUFxSSxrQkFBQSx1QkFBakJBLGtCQUFBLENBQW1CcmEsR0FBRyxDQUFDLENBQUM4QyxJQUFJLEVBQUVzTyxDQUFDLGtCQUMvRzlmLDBEQUFBO1FBQUcrZixHQUFHLEVBQUVEO01BQUUsZ0JBQ1I5ZiwwREFBQSxlQUFPd1IsSUFBSSxDQUFDb1AsUUFBUSxDQUFDQSxRQUFlLENBQ25DLENBQ0osQ0FBQyxFQUFDLEdBQUssQ0FBQyxlQUNUNWdCLDBEQUFBO1FBQUk0SSxLQUFLLEVBQUU7VUFBRW9YLFNBQVMsRUFBRSxNQUFNO1VBQUUvVyxLQUFLLEVBQUUsTUFBTTtVQUFFaWdCLFVBQVUsRUFBRTtRQUFpQjtNQUFFLElBQUFGLG1CQUFBLEdBQzNFcmEsR0FBRyxDQUFDK1IsYUFBYSxjQUFBc0ksbUJBQUEsdUJBQWpCQSxtQkFBQSxDQUFtQnRhLEdBQUcsQ0FBQyxDQUFDOEMsSUFBSSxFQUFFc08sQ0FBQyxrQkFDOUI5ZiwwREFBQTtRQUFHK2YsR0FBRyxFQUFFRDtNQUFFLGdCQUNSOWYsMERBQUEsZUFBT3dSLElBQUksQ0FBQ3dQLFVBQWlCLENBQzVCLENBQ0osQ0FDQyxDQUNGLENBQUM7SUFBQSxDQUNOLENBRUUsQ0FDRixDQUNJLENBQ1QsQ0FDRSxDQUNBLENBQ1QsQ0FDRixDQUFDO0VBQUEsQ0FDUCxDQUVFLENBQ0QsQ0FBQyxFQUNONUksS0FBSyxLQUFLLENBQUMsZ0JBQ1ZwWSwwREFBQSxDQUFDUyxzREFBSTtJQUFDZ1MsSUFBSTtJQUFDb1QsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Y3bEIsMERBQUE7SUFBSytHLFNBQVMsRUFBQztFQUFtQixnQkFDaEMvRywwREFBQTtJQUFLNEksS0FBSyxFQUFFO01BQUVrYSxPQUFPLEVBQUU7SUFBTztFQUFFLGdCQUM5QjlpQiwwREFBQTtJQUFLNEksS0FBSyxFQUFFO01BQUVpYyxPQUFPLEVBQUUsTUFBTTtNQUFFTSxVQUFVLEVBQUUsUUFBUTtNQUFFQyxjQUFjLEVBQUUsZUFBZTtNQUFFbmMsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEdqSiwwREFBQSxZQUFHLFVBQVcsQ0FBQyxlQUNmQSwwREFBQSxDQUFDd0ksV0FBVztJQUFDNmQsS0FBSyxFQUFDLE9BQU87SUFBQ0MsU0FBUyxFQUFDO0VBQU0sZ0JBQ3pDdG1CLDBEQUFBLENBQUNVLHFEQUFVO0lBQUNtaEIsT0FBTyxFQUFFQSxDQUFBLEtBQU12SixXQUFXLENBQUMsQ0FBQyxDQUFFO0lBQUMxUCxLQUFLLEVBQUU7TUFBRUMsUUFBUSxFQUFFLFVBQVU7TUFBRTBkLEtBQUssRUFBRTtJQUFRO0VBQUUsZ0JBQ3pGdm1CLDBEQUFBLENBQUMyRixrRUFBSztJQUFDaUQsS0FBSyxFQUFFO01BQUVoQixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDM0IsQ0FDRCxDQUNWLENBQUMsZUFDTjVILDBEQUFBO0lBQU1tcEIsUUFBUSxFQUFFNUw7RUFBaUIsZ0JBQy9CdmQsMERBQUEsQ0FBQ1Msc0RBQUk7SUFBQ21sQixTQUFTO0lBQUNoZCxLQUFLLEVBQUU7TUFBRXVjLFVBQVUsRUFBRTtJQUFTLENBQUU7SUFBQ3RhLE9BQU8sRUFBRTtFQUFFLGdCQUMxRDdLLDBEQUFBLENBQUNTLHNEQUFJO0lBQUNnUyxJQUFJO0lBQUNvVCxFQUFFLEVBQUU7RUFBRyxnQkFDaEI3bEIsMERBQUEsQ0FBQ2tCLHNEQUFTO0lBQ1JzbkIsUUFBUTtJQUNScmQsRUFBRSxFQUFDLFVBQVU7SUFDYjJILElBQUksRUFBQyxVQUFVO0lBQ2ZzVyxTQUFTO0lBQ1RDLElBQUksRUFBRSxDQUFFO0lBQ1JqVCxLQUFLLEVBQUVxQyxNQUFPO0lBQ2R1TixRQUFRLEVBQUczUSxDQUFDLElBQUtxRCxTQUFTLENBQUNyRCxDQUFDLENBQUMrQixNQUFNLENBQUNoQixLQUFLLENBQUN1USxXQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ3pEVCxLQUFLLEVBQUMsVUFBVTtJQUNoQnZFLEVBQUUsRUFBRTtNQUFFMVksS0FBSyxFQUFFLE1BQU07TUFBRXRCLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDakQsQ0FDRyxDQUFDLGVBQ1AzSCwwREFBQSxDQUFDUyxzREFBSTtJQUFDZ1MsSUFBSTtJQUFDb1QsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCN2xCLDBEQUFBO0lBQVF3VSxJQUFJLEVBQUMsUUFBUTtJQUFDNUwsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRTtJQUFPLENBQUU7SUFBQ2xDLFNBQVMsRUFBQztFQUFjLEdBQUMsTUFBWSxDQUNqRixDQUNGLENBRUYsQ0FBQyxlQUNQL0csMERBQUEsV0FBSyxDQUNGLENBQUMsZUFDTkEsMERBQUE7SUFBSzRJLEtBQUssRUFBRTtNQUFFeWMsTUFBTSxFQUFFLE9BQU87TUFBRUksUUFBUSxFQUFFLFFBQVE7TUFBRU0sU0FBUyxFQUFFLFFBQVE7TUFBRTljLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3RGakosMERBQUE7SUFBSzRJLEtBQUssRUFBRTtNQUFFa2EsT0FBTyxFQUFFO0lBQU87RUFBRSxnQkFDOUI5aUIsMERBQUE7SUFBTzRJLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUM5QmpKLDBEQUFBLGdCQUNHNlksU0FBUyxDQUFDbkssR0FBRyxDQUFFOEMsSUFBSSxpQkFDbEJ4UiwwREFBQTtJQUFJK2YsR0FBRyxFQUFFdk8sSUFBSSxDQUFDbkY7RUFBSSxnQkFDaEJyTSwwREFBQTtJQUFJNEksS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxNQUFNO01BQUVnWCxZQUFZLEVBQUU7SUFBa0I7RUFBRSxHQUMzRHpPLElBQUksQ0FBQzRMLFdBQVcsR0FBR3BZLDZDQUFLLENBQUN3TSxJQUFJLENBQUM0TCxXQUFXLENBQUMsQ0FBQ2tDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUMsR0FBQyxFQUFDOU4sSUFBSSxDQUFDK0gsV0FBVyxDQUFDRyxNQUFNLEdBQUcsSUFBSSxHQUFHbEksSUFBSSxDQUFDK0gsV0FBVyxDQUFDZCxNQUNuSCxDQUNGLENBQ0wsQ0FDSSxDQUNGLENBQ0osQ0FDRixDQUNGLENBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFDYkwsS0FBSyxLQUFLLENBQUMsZ0JBQ1ZwWSwwREFBQSxDQUFDUyxzREFBSTtJQUFDZ1MsSUFBSTtJQUFDb1QsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Y3bEIsMERBQUE7SUFBSytHLFNBQVMsRUFBQztFQUFtQixnQkFDaEMvRywwREFBQTtJQUFLNEksS0FBSyxFQUFFO01BQUVrYSxPQUFPLEVBQUU7SUFBTztFQUFFLGdCQUM5QjlpQiwwREFBQTtJQUFLNEksS0FBSyxFQUFFO01BQUVpYyxPQUFPLEVBQUUsTUFBTTtNQUFFTSxVQUFVLEVBQUUsUUFBUTtNQUFFQyxjQUFjLEVBQUUsZUFBZTtNQUFFbmMsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEdqSiwwREFBQSxZQUFHLFNBQVUsQ0FBQyxlQUNkQSwwREFBQSxDQUFDd0ksV0FBVztJQUFDNmQsS0FBSyxFQUFDLE9BQU87SUFBQ0MsU0FBUyxFQUFDO0VBQVEsZ0JBQzNDdG1CLDBEQUFBLENBQUNVLHFEQUFVO0lBQUNtaEIsT0FBTyxFQUFFQSxDQUFBLEtBQU12SixXQUFXLENBQUMsQ0FBQyxDQUFFO0lBQUMxUCxLQUFLLEVBQUU7TUFBRUMsUUFBUSxFQUFFLFVBQVU7TUFBRTBkLEtBQUssRUFBRTtJQUFRO0VBQUUsZ0JBQ3pGdm1CLDBEQUFBLENBQUMyRixrRUFBSztJQUFDaUQsS0FBSyxFQUFFO01BQUVoQixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDM0IsQ0FDRCxDQUNWLENBQUMsZUFDTjVILDBEQUFBLFdBQUssQ0FFRixDQUFDLGVBQ05BLDBEQUFBO0lBQUs0SSxLQUFLLEVBQUU7TUFBRXljLE1BQU0sRUFBRSxPQUFPO01BQUVJLFFBQVEsRUFBRSxRQUFRO01BQUVNLFNBQVMsRUFBRSxRQUFRO01BQUU5YyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUN0RmpKLDBEQUFBO0lBQUs0SSxLQUFLLEVBQUU7TUFBRWthLE9BQU8sRUFBRTtJQUFPO0VBQUUsR0FFNUI3SixZQUFZLENBQUN2SyxHQUFHLENBQUVDLEdBQUcsaUJBQ25CM08sMERBQUE7SUFBRytmLEdBQUcsRUFBRXBSLEdBQUcsQ0FBQ3RDO0VBQUksZ0JBQ2RyTSwwREFBQSxlQUFPMk8sR0FBRyxDQUFDK0ssTUFBTSxHQUFHLE1BQU0sR0FBRzFVLDZDQUFLLENBQUMySixHQUFHLENBQUMyYSxnQkFBZ0IsQ0FBQyxDQUFDaEssTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUUsRUFBQzNRLEdBQUcsQ0FBQzhKLE1BQWEsQ0FDOUYsQ0FDSixDQUVBLENBQ0YsQ0FDRixDQUNELENBQUMsR0FBRyxFQUNSLENBQ0gsQ0FDQSxDQUNSLENBQ0YsQ0FBQyxlQUNOelksMERBQUEsQ0FBQ3lCLHNEQUFLO0lBQ0prSSxJQUFJLEVBQUVzUSxnQkFBaUI7SUFDdkJpTixPQUFPLEVBQUU5TCxXQUFZO0lBQ3JCbU8sb0JBQW9CO0lBQ3BCQyxpQkFBaUIsRUFBRTluQixzREFBUztJQUM1QituQixhQUFhLEVBQUU7TUFDYmxILE9BQU8sRUFBRTtJQUNYLENBQUU7SUFDRixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUN2aUIsMERBQUEsQ0FBQzRCLHNEQUFHO0lBQUMrZixFQUFFLEVBQUEvWCxhQUFBLENBQUFBLGFBQUEsS0FBT2hCLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxHQUUvQjRRLE9BQU8sZ0JBQUk3WiwwREFBQSxDQUFDMEYsMERBQU0sTUFBRSxDQUFDLGdCQUVwQjFGLDBEQUFBO0lBQUs0SSxLQUFLLEVBQUU7TUFBRXdjLGNBQWMsRUFBRSxRQUFRO01BQUVwRixTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUM1RGhnQiwwREFBQSx5QkFBR0EsMERBQUEsQ0FBQzZGLHdFQUFlO0lBQUMrQyxLQUFLLEVBQUU7TUFBRWhCLEtBQUssRUFBRSxPQUFPO01BQUV5ZCxNQUFNLEVBQUUsTUFBTTtNQUFFcGMsS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQUksQ0FBQyxlQUNwRmpKLDBEQUFBLGFBQUksMEJBQTRCLENBQUMsZUFDakNBLDBEQUFBO0lBQUs0SSxLQUFLLEVBQUU7TUFBRWljLE9BQU8sRUFBRSxNQUFNO01BQUVpQyxHQUFHLEVBQUUsTUFBTTtNQUFFMUIsY0FBYyxFQUFFO0lBQVM7RUFBRSxnQkFDckVwbEIsMERBQUE7SUFBUTZoQixPQUFPLEVBQUV6RyxXQUFZO0lBQUNyVSxTQUFTLEVBQUM7RUFBYSxHQUFDLE9BRTlDLENBQ0wsQ0FDRixDQUVKLENBQ0EsQ0FBQyxlQUNSL0csMERBQUEsQ0FBQ3lCLHNEQUFLO0lBQ0prSSxJQUFJLEVBQUUwUSx1QkFBd0I7SUFDOUI2TSxPQUFPLEVBQUU3TCxrQkFBbUI7SUFDNUJrTyxvQkFBb0I7SUFDcEJDLGlCQUFpQixFQUFFOW5CLHNEQUFTO0lBQzVCK25CLGFBQWEsRUFBRTtNQUNibEgsT0FBTyxFQUFFO0lBQ1gsQ0FBRTtJQUNGLG1CQUFnQixtQkFBbUI7SUFDbkMsb0JBQWlCO0VBQXlCLGdCQUUxQ3ZpQiwwREFBQSxDQUFDNEIsc0RBQUc7SUFBQytmLEVBQUUsRUFBQS9YLGFBQUEsQ0FBQUEsYUFBQSxLQUFPaEIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLEdBRS9CNFEsT0FBTyxnQkFBSTdaLDBEQUFBLENBQUMwRiwwREFBTSxNQUFFLENBQUMsZ0JBRXBCMUYsMERBQUE7SUFBSzRJLEtBQUssRUFBRTtNQUFFd2MsY0FBYyxFQUFFLFFBQVE7TUFBRXBGLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzVEaGdCLDBEQUFBLHlCQUFHQSwwREFBQSxDQUFDNkYsd0VBQWU7SUFBQytDLEtBQUssRUFBRTtNQUFFaEIsS0FBSyxFQUFFLE9BQU87TUFBRXlkLE1BQU0sRUFBRSxNQUFNO01BQUVwYyxLQUFLLEVBQUU7SUFBTztFQUFFLENBQUUsQ0FBSSxDQUFDLGVBQ3BGakosMERBQUEsYUFBSSwyQkFBNkIsQ0FBQyxlQUNsQ0EsMERBQUE7SUFBSzRJLEtBQUssRUFBRTtNQUFFaWMsT0FBTyxFQUFFLE1BQU07TUFBRWlDLEdBQUcsRUFBRSxNQUFNO01BQUUxQixjQUFjLEVBQUU7SUFBUztFQUFFLGdCQUNyRXBsQiwwREFBQTtJQUFRNmhCLE9BQU8sRUFBRXhHLGtCQUFtQjtJQUFDdFUsU0FBUyxFQUFDO0VBQWEsR0FBQyxPQUVyRCxDQUNMLENBQ0YsQ0FFSixDQUNBLENBQUMsZUFDUi9HLDBEQUFBLENBQUN5QixzREFBSztJQUNKa0ksSUFBSSxFQUFFOFEsc0JBQXVCO0lBQzdCeU0sT0FBTyxFQUFFN0wsa0JBQW1CO0lBQzVCa08sb0JBQW9CO0lBQ3BCQyxpQkFBaUIsRUFBRTluQixzREFBUztJQUM1QituQixhQUFhLEVBQUU7TUFDYmxILE9BQU8sRUFBRTtJQUNYLENBQUU7SUFDRixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUN2aUIsMERBQUEsQ0FBQzRCLHNEQUFHO0lBQUMrZixFQUFFLEVBQUEvWCxhQUFBLENBQUFBLGFBQUEsS0FBT2hCLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxHQUUvQjRRLE9BQU8sZ0JBQUk3WiwwREFBQSxDQUFDMEYsMERBQU0sTUFBRSxDQUFDLGdCQUVwQjFGLDBEQUFBO0lBQUs0SSxLQUFLLEVBQUU7TUFBRXdjLGNBQWMsRUFBRSxRQUFRO01BQUVwRixTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUM1RGhnQiwwREFBQSx5QkFBR0EsMERBQUEsQ0FBQzZGLHdFQUFlO0lBQUMrQyxLQUFLLEVBQUU7TUFBRWhCLEtBQUssRUFBRSxPQUFPO01BQUV5ZCxNQUFNLEVBQUUsTUFBTTtNQUFFcGMsS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQUksQ0FBQyxlQUNwRmpKLDBEQUFBLGFBQUksNkJBQStCLENBQUMsZUFDcENBLDBEQUFBO0lBQUs0SSxLQUFLLEVBQUU7TUFBRWljLE9BQU8sRUFBRSxNQUFNO01BQUVpQyxHQUFHLEVBQUUsTUFBTTtNQUFFMUIsY0FBYyxFQUFFO0lBQVM7RUFBRSxnQkFDckVwbEIsMERBQUE7SUFBUTZoQixPQUFPLEVBQUV4RyxrQkFBbUI7SUFBQ3RVLFNBQVMsRUFBQztFQUFhLEdBQUMsT0FFckQsQ0FDTCxDQUNGLENBRUosQ0FDQSxDQUFDLGVBQ1IvRywwREFBQSxDQUFDeUIsc0RBQUs7SUFDSmtJLElBQUksRUFBRWtSLGNBQWU7SUFDckJxTSxPQUFPLEVBQUV6TCxnQkFBaUI7SUFDMUI4TixvQkFBb0I7SUFDcEJDLGlCQUFpQixFQUFFOW5CLHNEQUFTO0lBQzVCK25CLGFBQWEsRUFBRTtNQUNibEgsT0FBTyxFQUFFO0lBQ1gsQ0FBRTtJQUNGLG1CQUFnQixtQkFBbUI7SUFDbkMsb0JBQWlCO0VBQXlCLGdCQUUxQ3ZpQiwwREFBQSxDQUFDNEIsc0RBQUc7SUFBQytmLEVBQUUsRUFBQS9YLGFBQUEsQ0FBQUEsYUFBQSxLQUFPaEIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLEdBRS9CNFEsT0FBTyxnQkFBSTdaLDBEQUFBLENBQUMwRiwwREFBTSxNQUFFLENBQUMsZ0JBRXBCMUYsMERBQUE7SUFBSzRJLEtBQUssRUFBRTtNQUFFd2MsY0FBYyxFQUFFLFFBQVE7TUFBRXBGLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzVEaGdCLDBEQUFBLHlCQUFHQSwwREFBQSxDQUFDOEYsbUVBQVU7SUFBQzhDLEtBQUssRUFBRTtNQUFFaEIsS0FBSyxFQUFFLEtBQUs7TUFBRXlkLE1BQU0sRUFBRSxNQUFNO01BQUVwYyxLQUFLLEVBQUU7SUFBTztFQUFFLENBQUUsQ0FBSSxDQUFDLGVBQzdFakosMERBQUEsYUFBSSx1QkFBeUIsQ0FBQyxlQUM5QkEsMERBQUE7SUFBUStHLFNBQVMsRUFBQyxhQUFhO0lBQUM4YSxPQUFPLEVBQUVwRztFQUFpQixHQUFDLFdBRW5ELENBQ0wsQ0FFSixDQUNBLENBQ0osQ0FBQztBQUVWO0FBRUEsaUVBQWV6USxvQkFBb0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93bi5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvRW1wbG95ZWVWaWV3L0VtcGxveWVlVmlld0FkbWluQWxsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk03LjQxIDguNTkgMTIgMTMuMTdsNC41OS00LjU4TDE4IDEwbC02IDYtNi02elwiXG59KSwgJ0tleWJvYXJkQXJyb3dEb3duJyk7IiwiaW1wb3J0IFByaW50SGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9QcmludEhlYWRlcic7XHJcbmltcG9ydCBQcmludEZvb3RlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvUHJpbnRGb290ZXInO1xyXG7vu79pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2lkZWJhckRhc2hFMiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2hFMic7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnXHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcydcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IHsgQ29sbGFwc2UsIE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlUm93LCBUYWJsZUhlYWQsIFBhcGVyLCBUYWJsZUNvbnRhaW5lciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBBdXRvY29tcGxldGUsIHN0eWxlZCwgTW9kYWwsIEJhY2tkcm9wLCBGYWRlLCBCb3gsIE91dGxpbmVkSW5wdXQsIElucHV0QWRvcm5tZW50LCBDaGVja2JveCwgTGluZWFyUHJvZ3Jlc3MsIFN0ZXBwZXIsIFN0ZXAsIFN0ZXBMYWJlbCwgQnV0dG9uLCBBY2NvcmRpb24sIEFjY29yZGlvblN1bW1hcnksIEFjY29yZGlvbkRldGFpbHMsIERpdmlkZXIsIFRhYnMsIFRhYiwgTWVudSwgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0JztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FeHBhbmRNb3JlJztcclxuaW1wb3J0IHsgVGltZWxpbmUsIFRpbWVsaW5lSXRlbSwgVGltZWxpbmVTZXBhcmF0b3IsIFRpbWVsaW5lQ29ubmVjdG9yLCBUaW1lbGluZUNvbnRlbnQsIFRpbWVsaW5lRG90LCBUaW1lbGluZU9wcG9zaXRlQ29udGVudCB9IGZyb20gJ0BtdWkvbGFiJztcclxuaW1wb3J0IHsgQWRkLCBLZXlib2FyZEFycm93RG93bk91dGxpbmVkLCBLZXlib2FyZEFycm93VXAsIEtleWJvYXJkQXJyb3dVcE91dGxpbmVkIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IEVtcGxveWVlRm9ybVZpZXcgZnJvbSAnLi9FbXBsb3llZUZvcm1WaWV3JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCBOYXZMaW5rLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCB7IFRhYkNvbnRleHQsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSAnQG11aS9sYWInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCB7IFJlbW92ZUNpcmNsZU91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd24nO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycyc7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGVtb0NvbnRhaW5lciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvaW50ZXJuYWxzL2RlbW8nO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vLi4vaW1nL2ltYWdlcy5wbmcnO1xyXG5pbXBvcnQgUGhvbmUgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QaG9uZSc7XHJcbmltcG9ydCBXZWJJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvV2ViJztcclxuaW1wb3J0IEVtYWlsIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW1haWwnO1xyXG5pbXBvcnQgRW1haWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW1haWwnO1xyXG5pbXBvcnQgUGhvbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGhvbmUnO1xyXG5cclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBEZWxldGVUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gRW1wbG95ZWVWaWV3QWRtaW5BbGwoKSB7XHJcbiAgbGV0IHsgaWQgfSA9IHVzZVBhcmFtcygpXHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUsIGlkOiByZXMuZGF0YS5kYXRhLl9pZCB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbZW1wbG95ZWUsIHNldEVtcGxveWVlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGF5Um9sbCwgc2V0UGF5Um9sbF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2V4cGVuc2VzLCBzZXRFeHBlbnNlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BsYW5pbmcsIHNldFBsYW5pbmddID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBhcGlVcmwgPSBgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVlYDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYXBpVXJsKVxyXG4gICAgICAgIGNvbnN0IHJlc1BSYXRlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcGF5bWVudFJhdGVgKTtcclxuICAgICAgICAocmVzUFJhdGUuZGF0YT8uZGF0YSB8fCBbXSkubWFwKChyb3cpID0+IHNldFJhdGUocm93LnBheW1lbnRSYXRlKSk7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgc2V0RW1wbG95ZWUoKHJlcy5kYXRhPy5kYXRhIHx8IFtdKS5yZXZlcnNlKCkpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaEUoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBbZW1wbG95ZWVOYW1lLCBzZXRFbXBsb3llZU5hbWVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXRlbU91dCwgc2V0SXRlbU91dF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTWVudSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEVJZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWUvJHtpZH1gKVxyXG4gICAgICAgIHNldEVtcGxveWVlTmFtZShyZXMuZGF0YT8uZGF0YT8uZW1wbG95ZWVOYW1lIHx8IG51bGwpXHJcbiAgICAgICAgY29uc3QgcmVzUGF5Um9sbCA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3BheVJvbGxgKVxyXG4gICAgICAgIGNvbnN0IHBheVJvbGxEYXRhID0gQXJyYXkuaXNBcnJheShyZXNQYXlSb2xsLmRhdGE/LmRhdGEpID8gcmVzUGF5Um9sbC5kYXRhLmRhdGEgOiBbXTtcclxuICAgICAgICBzZXRQYXlSb2xsKHBheVJvbGxEYXRhLmZpbHRlcigocm93KSA9PiByb3cuZW1wbG95ZWVOYW1lPy5pZCA9PT0gaWQpKVxyXG4gICAgICAgIGNvbnN0IHJlc1BsYW5pbmcgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wbGFuaW5nYClcclxuICAgICAgICBjb25zdCBwbGFubmluZ0RhdGEgPSBBcnJheS5pc0FycmF5KHJlc1BsYW5pbmcuZGF0YT8uZGF0YSkgPyByZXNQbGFuaW5nLmRhdGEuZGF0YSA6IFtdO1xyXG4gICAgICAgIHNldFBsYW5pbmcocGxhbm5pbmdEYXRhLmZpbHRlcigocm93KSA9PiByb3cuZW1wbG95ZWVJRCA9PT0gaWQpLm1hcCgocm93KSA9PiAoe1xyXG4gICAgICAgICAgLi4ucm93LFxyXG4gICAgICAgICAgdG90YWxXb3JrRGF5OiBwYXJzZUZsb2F0KChyb3cuZGF5UGF5VVNkIHx8IDApICogKHJvdy53b3JrTnVtYmVyIHx8IDApKS50b0ZpeGVkKDIpXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICBjb25zdCByZXNERSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2V4cGVuc2U/c3VtbWFyeT10cnVlYClcclxuICAgICAgICBjb25zdCBleHBlbnNlRGF0YSA9IEFycmF5LmlzQXJyYXkocmVzREUuZGF0YT8uZGF0YSkgPyByZXNERS5kYXRhLmRhdGEgOiBbXTtcclxuICAgICAgICBzZXRFeHBlbnNlcyhleHBlbnNlRGF0YS5maWx0ZXIoKHJvdykgPT4gcm93LmFjY291bnROYW1lID09PSAnRW1wbG95ZWUnICYmIEFycmF5LmlzQXJyYXkocm93LmVtcGxveWVlTmFtZSkgJiYgcm93LmVtcGxveWVlTmFtZS5maW5kKChJdGVtKSA9PiBJdGVtLmlkUm93ID09PSBpZCkpXHJcbiAgICAgICAgICAubWFwKChyb3cpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnJvdyxcclxuICAgICAgICAgICAgYW1vdW50RkM6IHJvdy5lbXBsb3llZU5hbWU/LmZpbHRlcigoSXRlbSkgPT4gSXRlbS5pZFJvdyA9PT0gaWQpLnJlZHVjZSgoc3VtLCBhY2MpID0+IHN1bSArIHBhcnNlRmxvYXQoYWNjLmFtb3VudCB8fCAwKSwgMCksXHJcbiAgICAgICAgICAgIGFtb3VudFVTRDogcm93LmVtcGxveWVlTmFtZT8uZmlsdGVyKChJdGVtKSA9PiBJdGVtLmlkUm93ID09PSBpZCkucmVkdWNlKChzdW0sIGFjYykgPT4gc3VtICsgcGFyc2VGbG9hdChhY2MudG90YWwgfHwgMCksIDApLFxyXG4gICAgICAgICAgfSkpKVxyXG4gICAgICAgIGNvbnN0IHJlc0l0ZW1PdXQgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtT3V0YClcclxuICAgICAgICBjb25zdCBpdGVtT3V0RGF0YSA9IEFycmF5LmlzQXJyYXkocmVzSXRlbU91dC5kYXRhPy5kYXRhKSA/IHJlc0l0ZW1PdXQuZGF0YS5kYXRhIDogW107XHJcbiAgICAgICAgY29uc3QgZm9ybWF0RGF0ZTEgPSBpdGVtT3V0RGF0YS5maWx0ZXIoKHJvdykgPT4gcm93LnJlZmVyZW5jZT8uX2lkID09PSBpZClcclxuICAgICAgICBzZXRJdGVtT3V0KGZvcm1hdERhdGUxLnJldmVyc2UoKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRUlkKClcclxuICB9LCBbaWRdKVxyXG5cclxuXHJcbiAgY29uc3QgcGxhbmluZ09iamVjdCA9IEFycmF5LmlzQXJyYXkocGxhbmluZykgPyBwbGFuaW5nPy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgcHJvaklkID0gaXRlbS5wcm9qZWN0TmFtZT8uX2lkO1xyXG4gICAgY29uc3QgbmFtZSA9IGl0ZW0ucHJvamVjdE5hbWU/Lm5hbWU7XHJcbiAgICBjb25zdCBkYXlQYXkgPSBpdGVtLmRheVBheVVTZDtcclxuICAgIGlmIChwcm9qSWQpIHtcclxuICAgICAgaWYgKCFhY2NbcHJvaklkXSkge1xyXG4gICAgICAgIGFjY1twcm9qSWRdID0geyBpZDogcHJvaklkLCBuYW1lLCBkYXlQYXksIHdvcmtEOiAwLCB0b3RhbDogMCB9XHJcbiAgICAgIH1cclxuICAgICAgYWNjW3Byb2pJZF0udG90YWwgKz0gcGFyc2VGbG9hdChpdGVtLnRvdGFsV29ya0RheSB8fCAwKVxyXG4gICAgICBhY2NbcHJvaklkXS53b3JrRCArPSBwYXJzZUZsb2F0KGl0ZW0ud29ya051bWJlciB8fCAwKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjY1xyXG4gIH0sIHt9KSA6IHt9O1xyXG5cclxuICBjb25zdCBwbGFuaW5nQXJyYXkgPSBwbGFuaW5nT2JqZWN0ID8gT2JqZWN0LmtleXMocGxhbmluZ09iamVjdCkubWFwKChyb3cpID0+IHBsYW5pbmdPYmplY3Rbcm93XSkgOiBbXTtcclxuXHJcblxyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW1hZ2VzVVJMLCBzZXRJbWFnZXNVUkxdID0gdXNlU3RhdGUoJycpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEltYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKGVtcGxveWVlTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWltYWdlLyR7ZW1wbG95ZWVOYW1lfWApO1xyXG4gICAgICAgICAgaWYgKHJlc3AgJiYgcmVzcC5kYXRhKSB7XHJcbiAgICAgICAgICAgIHNldEltYWdlcyhyZXNwLmRhdGE/LmRhdGEpO1xyXG4gICAgICAgICAgICBpZiAocmVzcC5kYXRhPy5kYXRhICYmIHJlc3AuZGF0YT8uZGF0YT8uZGF0YSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHJlc3AuZGF0YT8uZGF0YT8uZGF0YT8uZGF0YSlcclxuICAgICAgICAgICAgICBjb25zdCBib2xkID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHsgdHlwZTogYCR7cmVzcC5kYXRhPy5kYXRhPy5jb250ZW50VHlwZX1gIH0pXHJcbiAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChib2xkKVxyXG4gICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJbWFnZXNVUkwocmVhZGVyLnJlc3VsdClcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hJbWFnZXMoKVxyXG4gIH0sIFtlbXBsb3llZU5hbWVdKVxyXG5cclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBoYW5kbGVTaG93ID0gKGUpID0+IHtcclxuICAgIHNldFNob3coZSk7XHJcbiAgfVxyXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAocGFuZWwpID0+IChldmVudCwgaXNFeHBhbmRlZCkgPT4ge1xyXG4gICAgc2V0RXhwYW5kZWQoaXNFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpO1xyXG4gIH07XHJcbiAgey8qKiBGaWx0ZXIgVklldyBTdGFydCAqLyB9XHJcbiAgY29uc3QgW3Nob3cyLCBzZXRTaG93Ml0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBoYW5kbGVTaG93MiA9IChlKSA9PiB7XHJcbiAgICBzZXRTaG93MihlKTtcclxuICB9XHJcblxyXG4gIHsvKiogc2VhcmNoICYmIFRhYiAqLyB9XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdmFsdWUyLCBzZXRWYWx1ZTJdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBlbXBsb3llZS5maW5kSW5kZXgocm93ID0+IHJvdy5faWQgPT09IGlkKTtcclxuICAgIGlmIChzZWxlY3RlZEluZGV4ICE9PSAtMSkge1xyXG4gICAgICBzZXRWYWx1ZShzZWxlY3RlZEluZGV4KVxyXG4gICAgfVxyXG4gIH0sIFtlbXBsb3llZSwgaWRdKVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZTMgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UyID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZTIobmV3VmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgIHNldFNlYXJjaCh2YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgW3ZhbHVlMywgc2V0VmFsdWUzXSA9IFJlYWN0LnVzZVN0YXRlKCcxJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFiRW1wbG95ZWUnKVxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBzZXRWYWx1ZTMocmVzdWx0KVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlNCA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gbmV3VmFsdWVcclxuICAgIHNldFZhbHVlMyhjaGFuZ2VWYWx1ZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVGFiRW1wbG95ZWUnLCBjaGFuZ2VWYWx1ZSlcclxuICB9O1xyXG4gIGNvbnN0IG5ld0FycmF5ID0gc2VhcmNoICE9PSAnJyA/IGVtcGxveWVlLmZpbHRlcigocm93KSA9PlxyXG4gICAgcm93LmVtcGxveWVlTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgcm93LmRlcGFydG1lbnQgJiYgcm93LmRlcGFydG1lbnQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIHJvdy5lbXBsb3llZVJvbGUgJiYgcm93LmVtcGxveWVlUm9sZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgcm93LmVtcGxveWVlQWRkcmVzcyAmJiByb3cuZW1wbG95ZWVBZGRyZXNzLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXHJcbiAgKSA6IGVtcGxveWVlXHJcbiAgey8qKiBzZWFyY2ggJiYgVGFiIEVuZCAqLyB9XHJcbiAgey8qKiBGaWx0ZXIgVklldyBFbmQgKi8gfVxyXG4gIHsvKiogQ29tbWVudHMgc3RhcnRzICovIH1cclxuICBjb25zdCBbc2hvdzEsIHNldFNob3cxXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3cxID0gKGUpID0+IHtcclxuICAgIHNldFNob3cxKGUpO1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfVxyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbQ29tbWVudHMxLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25vdGlmaWNhdGlvbiwgc2V0Tm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoQ29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9jb21tZW50YClcclxuICAgICAgICBjb25zdCByZXNwID0gcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuQ29tbWVudEluZm8uaWRJbmZvID09PSBpZClcclxuICAgICAgICBzZXRDb21tZW50cyhyZXNwLnJldmVyc2UoKSlcclxuICAgICAgICBjb25zdCByZXNOb3RpZmljYXRpb24gPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ub3RpZmljYXRpb25gKVxyXG4gICAgICAgIHNldE5vdGlmaWNhdGlvbihyZXNOb3RpZmljYXRpb24uZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5pZEluZm8gPT09IGlkKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hDb21tZW50KClcclxuICB9LCBbaWRdKVxyXG5cclxuICBjb25zdCBDb21tZW50SW5mbyA9XHJcbiAge1xyXG4gICAgaWRJbmZvOiBpZCxcclxuICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lLFxyXG4gICAgcmVhc29uXHJcbiAgfVxyXG4gIHsvKiogTG9hZGluZyBTdGFydCAqLyB9XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWxQaWN0dXJlLCBzZXRMb2FkaW5nT3Blbk1vZGFsUGljdHVyZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWxEZWxldGUsIHNldExvYWRpbmdPcGVuTW9kYWxEZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZU9wZW5QaWN0dXJlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbFBpY3R1cmUodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVPcGVuRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbERlbGV0ZSh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VQaWN0dXJlID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuICB7LyoqIExvYWRpbmcgRW5kICovIH1cclxuICBjb25zdCBbdXBsb2FkZWRJbWFnZSwgc2V0VXBsb2FkZWRJbWFnZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbdXBsb2FkZWRJbWFnZVVSTCwgc2V0VXBsb2FkZWRJbWFnZVVSTF0gPSB1c2VTdGF0ZSgnJylcclxuICBmdW5jdGlvbiBoYW5kbGVCYXNlNjQoZSkge1xyXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBzZXRVcGxvYWRlZEltYWdlKHJlYWRlci5yZXN1bHQpXHJcbiAgICB9XHJcbiAgICByZWFkZXIub25lcnJvciA9IGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcilcclxuICAgIH1cclxuICAgIHNldFVwbG9hZGVkSW1hZ2VVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG93SW5wdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRVcGxvYWRlZEltYWdlKCcnKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVJbWFnZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgdXBsb2FkZWRJbWFnZVVSTCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtcGxveWVlTmFtZScsIGVtcGxveWVlTmFtZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vdXBsb2FkLWltYWdlYCwgZm9ybURhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBoYW5kbGVPcGVuUGljdHVyZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlSW1hZ2UgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpZiAoaW1hZ2VzICE9PSBudWxsKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLWltYWdlLyR7aW1hZ2VzLl9pZH1gKVxyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgIGhhbmRsZU9wZW5EZWxldGUoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgY29uc3QgZGF0ZUNvbW1lbnQgPSBkYXlqcyhEYXRlLm5vdygpKTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXRFZGl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIENvbW1lbnRJbmZvLFxyXG4gICAgICBkYXRlQ29tbWVudFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtY29tbWVudC9gLCBkYXRhKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgc2V0UmVhc29uKFwiXCIpO1xyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgIHNldENvbW1lbnRzKFtuZXdEYXRhLCAuLi5Db21tZW50czFdKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGFsbFRyYW5zYWN0aW9uID0gW107XHJcblxyXG4gIHBheVJvbGwuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgYWxsVHJhbnNhY3Rpb24ucHVzaCh7XHJcbiAgICAgIHR5cGU6ICdQYXlTbGlwJyxcclxuICAgICAgbW9udGg6IHJvdy5tb250aCxcclxuICAgICAgZGF0ZTogcm93LnBheURhdGUsXHJcbiAgICAgIG51bWJlcjogcm93LnBheU51bWJlcixcclxuICAgICAgZGVzY3JpcHRpb246ICdOZXQgUGF5YWJsZScsXHJcbiAgICAgIGFtb3VudEZDOiByb3cudG90YWxOZXQsXHJcbiAgICAgIGFtb3VudFVTRDogcm93LnRvdGFsUGFpZERvbGxhcnMsXHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgZXhwZW5zZXMuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgYWxsVHJhbnNhY3Rpb24ucHVzaCh7XHJcbiAgICAgIHR5cGU6ICdFeHBlbnNlcycsXHJcbiAgICAgIG1vbnRoOiByb3cuZXhwZW5zZURhdGUsXHJcbiAgICAgIGRhdGU6IHJvdy5leHBlbnNlRGF0ZSxcclxuICAgICAgbnVtYmVyOiByb3cuZXhwZW5zZU51bWJlcixcclxuICAgICAgZGVzY3JpcHRpb246IChyb3cuZXhwZW5zZUNhdGVnb3J5Py5leHBlbnNlc0NhdGVnb3J5IHx8ICdOL0EnKSArICcgLyAnICsgKHJvdy5kZXNjcmlwdGlvbiB8fCAnJyksXHJcbiAgICAgIGFtb3VudEZDOiByb3cuYW1vdW50RkMgfHwgMCxcclxuICAgICAgYW1vdW50VVNEOiByb3cuYW1vdW50VVNEIHx8IDAsXHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgY29uc3QgW3NlbGVjdE9wdGlvbnMsIHNldFNlbGVjdE9wdGlvbnNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgcmV0dXJuIGRhdGVcclxuICB9KTtcclxuXHJcbiAgbGV0IHRvdGFsRkMgPSAwXHJcbiAgbGV0IHRvdGFsVVNEID0gMFxyXG4gIGNvbnN0IGZpbHRlclRyYW5zYW5jdGlvbiA9IGFsbFRyYW5zYWN0aW9uPy5maWx0ZXIoKHJvdykgPT4gZGF5anMocm93Lm1vbnRoKS5mb3JtYXQoJ01NTU0vWVlZWScpID09PSBkYXlqcyhzdGFydERhdGUpLmZvcm1hdCgnTU1NTS9ZWVlZJykpXHJcbiAgY29uc3QgdG90YWxHRkMgPSBmaWx0ZXJUcmFuc2FuY3Rpb24ubGVuZ3RoID4gMCA/IGZpbHRlclRyYW5zYW5jdGlvbi5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyBwYXJzZUZsb2F0KHJvdy5hbW91bnRGQyksIDApIDogMFxyXG4gIGNvbnN0IHRvdGFsR1VTRCA9IGZpbHRlclRyYW5zYW5jdGlvbi5sZW5ndGggPiAwID8gZmlsdGVyVHJhbnNhbmN0aW9uLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHBhcnNlRmxvYXQocm93LmFtb3VudFVTRCksIDApIDogMFxyXG4gIGNvbnN0IG1vbnRoUm93ID0gYWxsVHJhbnNhY3Rpb24uZmlsdGVyKChyb3cpID0+IGRheWpzKHJvdy5tb250aCkuZm9ybWF0KCdNTU1NL1lZWVknKSA9PT0gZGF5anMoc3RhcnREYXRlKS5mb3JtYXQoJ01NTU0vWVlZWScpKS5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmRhdGUpIC0gbmV3IERhdGUoYi5kYXRlKSkubWFwKChyb3csIGkpID0+IHtcclxuICAgIGlmIChyb3cudHlwZSA9PT0gJ1BheVNsaXAnKSB7XHJcbiAgICAgIHRvdGFsRkMgKz0gcGFyc2VGbG9hdChyb3cuYW1vdW50RkMpXHJcbiAgICAgIHRvdGFsVVNEICs9IHBhcnNlRmxvYXQocm93LmFtb3VudFVTRClcclxuICAgIH0gZWxzZSBpZiAocm93LnR5cGUgPT09ICdFeHBlbnNlcycpIHtcclxuICAgICAgdG90YWxGQyArPSBwYXJzZUZsb2F0KHJvdy5hbW91bnRGQylcclxuICAgICAgdG90YWxVU0QgKz0gcGFyc2VGbG9hdChyb3cuYW1vdW50VVNEKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0+e2RheWpzKHJvdy5kYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cudHlwZX08L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgPHNwYW4+e3Jvdy50eXBlID09PSAnUGF5U2xpcCcgJiYgKHJvdy5kZXNjcmlwdGlvbiArICcgUkVmIFBBWS0wJyArIHJvdy5udW1iZXIpfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntyb3cudHlwZSA9PT0gJ0V4cGVuc2VzJyAmJiAoJ1JlZiBELTAnICsgcm93Lm51bWJlciArICcgLyAnICsgcm93LmRlc2NyaXB0aW9uKX08L3NwYW4+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT57cm93LnR5cGUgPT09ICdQYXlTbGlwJyA/IGBGQyAke3BhcnNlRmxvYXQocm93LmFtb3VudEZDIHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gICsgYCAoJCR7cGFyc2VGbG9hdChyb3cuYW1vdW50VVNEIHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pYCA6ICcnfTwvdGQ+XHJcbiAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0+e3Jvdy50eXBlID09PSAnRXhwZW5zZXMnID8gYEZDICR7cGFyc2VGbG9hdChyb3cuYW1vdW50RkMgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWAgKyBgICgkJHtwYXJzZUZsb2F0KHJvdy5hbW91bnRVU0QgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSlgIDogJyd9PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT57YEZDICR7cGFyc2VGbG9hdCh0b3RhbEZDIHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gICsgYCAoJCR7cGFyc2VGbG9hdCh0b3RhbFVTRCB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9KWB9PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIClcclxuICB9KVxyXG4gIGNvbnN0IFtzZWFyY2gzLCBzZXRTZWFyY2gzXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoMyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRTZWFyY2gzKHZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBuZXdBcnJheTMgPSBzZWFyY2gzICE9PSAnJyA/IGl0ZW1PdXQuZmlsdGVyKChyb3cpID0+XHJcbiAgICByb3cucmVhc29uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoMy50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgcm93LnJlZmVyZW5jZS5yZWZlcmVuY2VOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoMy50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgcm93Lml0ZW1zUXR5QXJyYXkuc29tZSgoSXRlbSkgPT4gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDMudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICByb3cuaXRlbXNRdHlBcnJheS5zb21lKChJdGVtKSA9PiBJdGVtLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDMudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICBkYXlqcyhyb3cuaXRlbU91dERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpLmluY2x1ZGVzKHNlYXJjaDMpXHJcbiAgKSA6IGl0ZW1PdXRcclxuICBjb25zdCB0b3RhbFJldHVyblRvdGFsID0gbmV3QXJyYXkzLmxlbmd0aCA+IDAgPyBuZXdBcnJheTMucmVkdWNlKChhY2MsIHJvdykgPT4geyByZXR1cm4gYWNjICsgcm93Lml0ZW1zUXR5QXJyYXkucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIHBhcnNlRmxvYXQoaXRlbS5uZXdJdGVtT3V0KSwgMCkgfSwgMCkgOiAwXHJcblxyXG4gIHsvKiogQ29tbWVudHMgZW5kICovIH1cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBSb3cocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgcm93IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPFRhYmxlUm93IHN4PXt7ICcmID4gKic6IHsgYm9yZGVyQm90dG9tOiAndW5zZXQnIH0gfX0+XHJcbiAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJleHBhbmQgcm93XCJcclxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge29wZW4gPyA8S2V5Ym9hcmRBcnJvd1VwT3V0bGluZWQgLz4gOiA8S2V5Ym9hcmRBcnJvd0Rvd25PdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgU2FsYXJ5IFNsaXAgZm9yIHRoZSBtb250aCBPZjoge2RheWpzKHJvdy5tb250aCkuZm9ybWF0KCdNTU1NLVlZWVknKX1cclxuICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5kYXlzV30gRGF5czwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+RkMge3BhcnNlRmxvYXQocm93LnRvdGFsUGFpZCB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDxzcGFuPigkPHNwYW4+e3BhcnNlRmxvYXQoKHJvdy50b3RhbFBhaWQgfHwgMCkgLyAocm93LnJhdGUgfHwgMSkpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+KTwvc3Bhbj48L1RhYmxlQ2VsbD5cclxuICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMCwgcGFkZGluZ1RvcDogMCB9fSBjb2xTcGFuPXs2fT5cclxuICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVufSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17eyBtYXJnaW46IDEgfX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBndXR0ZXJCb3R0b20gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgIEhpc3RvcnlcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzZWNvbmRUYWJsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAnODAlJywgbWFyZ2luQm90dG9tOiAnMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5FYXJuaW5nIChGQyk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5BY3R1YWwgU2FsYXJ5IChGQyk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5FYXJuaW5ncyAoRkMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gY29sU3Bhbj17Mn0+RGVkdWN0aW9ucyAoRkMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PkJhc2ljIHdhZ2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGFyc2VGbG9hdChyb3cuYmFzaWNTYWxhcnkgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSA8L3NwYW4+IDxzcGFuPigkPHNwYW4+e3BhcnNlRmxvYXQoKHJvdy5iYXNpY1NhbGFyeSB8fCAwKSAvIChyb3cucmF0ZSB8fCAxKSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3BhcnNlRmxvYXQocm93LmVhcm5pbmdTYWxhcnkgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57cGFyc2VGbG9hdCgocm93LmVhcm5pbmdTYWxhcnkgfHwgMCkgLyAocm93LnJhdGUgfHwgMSkpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+SW4gYWR2YW5jZWQgYWxsb3dhbmNlcyA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGFyc2VGbG9hdChyb3cuYWR2YW5jZWRTYWxhcnkgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSA8L3NwYW4+IDxzcGFuPigkPHNwYW4+e3BhcnNlRmxvYXQoKHJvdy5hZHZhbmNlZFNhbGFyeSB8fCAwKSAvIChyb3cucmF0ZSB8fCAxKSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5UcmFuc3BvcnQgYWxsb3dhbmNlczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwYXJzZUZsb2F0KHJvdy5iYXNpY1RyYW5zcG9ydCB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57cGFyc2VGbG9hdCgocm93LmJhc2ljVHJhbnNwb3J0IHx8IDApIC8gKHJvdy5yYXRlIHx8IDEpKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGFyc2VGbG9hdChyb3cudHJhbnNwb3J0RWFybmluZyB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57cGFyc2VGbG9hdCgocm93LnRyYW5zcG9ydEVhcm5pbmcgfHwgMCkgLyAocm93LnJhdGUgfHwgMSkpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+VHJhbnNwb3J0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3BhcnNlRmxvYXQocm93LnRyYW5zcG9ydERlZHVjdGlvbiB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57cGFyc2VGbG9hdCgocm93LnRyYW5zcG9ydERlZHVjdGlvbiB8fCAwKSAvIChyb3cucmF0ZSB8fCAxKSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fT5Gb29kIGFsbG93YW5jZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGFyc2VGbG9hdChyb3cuZm9vZEJhc2ljIHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+IDxzcGFuPigkPHNwYW4+e3BhcnNlRmxvYXQoKHJvdy5mb29kQmFzaWMgfHwgMCkgLyAocm93LnJhdGUgfHwgMSkpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwYXJzZUZsb2F0KHJvdy5mb29kRWFybmluZyB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57cGFyc2VGbG9hdCgocm93LmZvb2RFYXJuaW5nIHx8IDApIC8gKHJvdy5yYXRlIHx8IDEpKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PkZvb2Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGFyc2VGbG9hdChyb3cuZm9vZERlZHVjdGlvbiB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57cGFyc2VGbG9hdCgocm93LmZvb2REZWR1Y3Rpb24gfHwgMCkgLyAocm93LnJhdGUgfHwgMSkpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+Qm91bmNlIGFsbG93YW5jZXMgMyU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGFyc2VGbG9hdChyb3cuYm91bmNlQWxsb3dhbmNlcyB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57cGFyc2VGbG9hdCgocm93LmJvdW5jZUFsbG93YW5jZXMgfHwgMCkgLyAocm93LnJhdGUgfHwgMSkpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwYXJzZUZsb2F0KHJvdy5ib3VuY2VBbGxvd2FuY2VzRWFybmluZyB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPiA8c3Bhbj4oJDxzcGFuPntwYXJzZUZsb2F0KChyb3cuYm91bmNlQWxsb3dhbmNlc0Vhcm5pbmcgfHwgMCkgLyAocm93LnJhdGUgfHwgMSkpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+TG9hbiByZWNvdmVyeTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGFyc2VGbG9hdChyb3cubG9hbiB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57cGFyc2VGbG9hdCgocm93LmxvYW4gfHwgMCkgLyAocm93LnJhdGUgfHwgMSkpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+T3RoZXI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGFyc2VGbG9hdChyb3cub3RoZXIgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57cGFyc2VGbG9hdCgocm93Lm90aGVyIHx8IDApIC8gKHJvdy5yYXRlIHx8IDEpKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGFyc2VGbG9hdChyb3cub3RoZXJFYXJuaW5nIHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gPC9zcGFuPiA8c3Bhbj4oJDxzcGFuPntwYXJzZUZsb2F0KChyb3cub3RoZXJFYXJuaW5nIHx8IDApIC8gKHJvdy5yYXRlIHx8IDEpKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19Pkl0ZW0gbG9zdCByZWNvdmVyeTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwYXJzZUZsb2F0KHJvdy5pdGVtTG9zdCB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDwvc3Bhbj4gPHNwYW4+KCQ8c3Bhbj57cGFyc2VGbG9hdCgocm93Lml0ZW1Mb3N0IHx8IDApIC8gKHJvdy5yYXRlIHx8IDEpKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgZm9udFNpemU6ICc4MCUnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGNvbFNwYW49ezZ9PlRvdGFsIChCYXNpYywgRWFybmluZyAmIERlZHVjdGlvbik8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19IGNvbFNwYW49ezJ9PjxzcGFuPlRvdGFsIEJhc2ljOjwvc3Bhbj4gPHNwYW4+IEZDIHtwYXJzZUZsb2F0KHJvdy50b3RhbEFjdHVhbFNhbGFyeSB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPiA8c3Bhbj4oJDxzcGFuPntwYXJzZUZsb2F0KChyb3cudG90YWxBY3R1YWxTYWxhcnkgfHwgMCkgLyAocm93LnJhdGUgfHwgMSkpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+KTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19IGNvbFNwYW49ezJ9PjxzcGFuPlRvdGFsIEVhcm5pbmc6PC9zcGFuPiA8c3Bhbj4gRkMge3BhcnNlRmxvYXQocm93LnRvdGFsQWN0dWFsRWFybmluZyB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPiA8c3Bhbj4oJDxzcGFuPntwYXJzZUZsb2F0KChyb3cudG90YWxBY3R1YWxFYXJuaW5nIHx8IDApIC8gKHJvdy5yYXRlIHx8IDEpKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjb2xvcjogJ2JsYWNrJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5Ub3RhbCBEZWR1Y3Rpb246PC9zcGFuPiA8c3Bhbj4gRkMge3BhcnNlRmxvYXQocm93LnRvdGFsQWN0dWFsRGVkdWN0aW9uIHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+IDxzcGFuPigkPHNwYW4+e3BhcnNlRmxvYXQoKHJvdy50b3RhbEFjdHVhbERlZHVjdGlvbiB8fCAwKSAvIChyb3cucmF0ZSB8fCAxKSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4pPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gY29sU3Bhbj17Nn0+VG90YWwgKFBhaWQpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+TmV0IHBheWFibGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19IGNvbFNwYW49ezR9PkZDIHtwYXJzZUZsb2F0KHJvdy50b3RhbE5ldCB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDxzcGFuPigkPHNwYW4+e3BhcnNlRmxvYXQocm93LnRvdGFsUGFpZERvbGxhcnMgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4pPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PkRlZHVjdGlvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0gY29sU3Bhbj17NH0+RkMge3BhcnNlRmxvYXQocm93LnRvdGFsQWN0dWFsRGVkdWN0aW9uIHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gPHNwYW4+KCQ8c3Bhbj57cGFyc2VGbG9hdCgocm93LnRvdGFsQWN0dWFsRGVkdWN0aW9uIHx8IDApIC8gKHJvdy5yYXRlIHx8IDEpKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+T3ZlcnRpbWUgJiBCb251czwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY29sb3I6ICdibGFjaycgfX0gY29sU3Bhbj17NH0+RkMge3BhcnNlRmxvYXQocm93LmJvbnVzIHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gPHNwYW4+KCQ8c3Bhbj57cGFyc2VGbG9hdCgocm93LmJvbnVzIHx8IDApIC8gKHJvdy5yYXRlIHx8IDEpKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+VG90YWwgR2VuZXJhbGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGNvbG9yOiAnYmxhY2snIH19IGNvbFNwYW49ezR9PkZDIHtwYXJzZUZsb2F0KHJvdy50b3RhbFBhaWQgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSA8c3Bhbj4oJDxzcGFuPntwYXJzZUZsb2F0KChyb3cudG90YWxQYWlkIHx8IDApIC8gKHJvdy5yYXRlIHx8IDEpKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPik8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxuICBmdW5jdGlvbiBSb3cyKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IHJvdyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7IGluZGV4IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPFRhYmxlUm93IHN4PXt7ICcmID4gKic6IHsgYm9yZGVyQm90dG9tOiAndW5zZXQnIH0gfX0+XHJcbiAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJleHBhbmQgcm93XCJcclxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge29wZW4gPyA8S2V5Ym9hcmRBcnJvd1VwT3V0bGluZWQgLz4gOiA8S2V5Ym9hcmRBcnJvd0Rvd25PdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj57aW5kZXggKyAxfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntyb3cubmFtZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cm93LndvcmtEfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPiR7cm93LmRheVBheX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPiR7cGFyc2VGbG9hdChyb3cudG90YWwgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAwLCBwYWRkaW5nVG9wOiAwIH19IGNvbFNwYW49ezZ9PlxyXG4gICAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpbjogMSB9fT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgSGlzdG9yeVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+VGFzazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhbmluZz8uZmlsdGVyKChyb3cxKSA9PiByb3cxLnByb2plY3ROYW1lPy5faWQgPT09IHJvdy5pZCk/Lm1hcCgocm93MSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtyb3cxLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT4ge2RheWpzKHJvdzEucGxhbmluZ0RhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT4ge3JvdzEuc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT4ge3JvdzEucGxhbmluZ1Rhc2t9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PiB7cm93MS5wbGFuaW5nRGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEVtcGxveWVlIEluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9UZXdtVmlld0FkbWluJyl9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaEUyIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAyIH19ID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxvYWRpbmdEYXRhID8gPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93MSA9PT0gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cyID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBwYWRkaW5nOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGZvbnRTaXplOiAnMjBweCcgfX0+QWxsIEVtcGxveWVlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjEnIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cyKDIpfT5GaWx0ZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzU1NXB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VtcGxveWVlPy5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jvdy5lbXBsb3llZU5hbWUgPyByb3cuZW1wbG95ZWVOYW1lIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL0VtcGxveWVlVmlld0FkbWluQWxsLyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93MiA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzEwcHgnIH19IHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cyKDEpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzMwMzY4YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNTgwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld0FycmF5Py5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jvdy5lbXBsb3llZU5hbWUgPyByb3cuZW1wbG95ZWVOYW1lIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL0VtcGxveWVlVmlld0FkbWluQWxsLyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMwMzY4YSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbXBsb3llZT8uZmlsdGVyKHJvdyA9PiByb3cuX2lkID09PSBpZCk/Lm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyMkhlYWQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcyMHB4JyB9fT57KHJvdy5lbXBsb3llZU5hbWUgfHwgXCJcIikudG9VcHBlckNhc2UoKX0ge3Jvdy5lbXBsb3llZUlkICE9PSB1bmRlZmluZWQgPyBcIi9cIiArIHJvdy5lbXBsb3llZUlkIDogJyd9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIlJlc2lnblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjODAxMzEzXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIlN1c3BlbmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiNmYjhjMDBcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyA9PT0gXCJGaXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmVkXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyA9PT0gXCJFbXBsb3llZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJibHVlXCIgOiBcImJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnN0YXR1cyAhPT0gdW5kZWZpbmVkID8gcm93LnN0YXR1cyA6ICdVbmRlZmluZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxMHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17b3BlbiA/ICdkZW1vLWN1c3RvbWl6ZWQtbWVudScgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuID8gJ3RydWUnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRWxldmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxLZXlib2FyZEFycm93RG93biAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICdncmF5JywgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1jdXN0b21pemVkLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudUxpc3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogJ2RlbW8tY3VzdG9taXplZC1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtGYWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9FbXBsb3llZVVwZGF0ZVZpZXcvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkVkaXQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cxKDIpfT4gPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT5Db21tZW50czwvc3Bhbj4gPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93MSgzKX0+IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+SGlzdG9yeTwvc3Bhbj48L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJDb250ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgYm9yZGVyQm90dG9tOiAxLCBib3JkZXJDb2xvcjogJ2RpdmlkZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsYWIgQVBJIHRhYnMgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT3ZlcnZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQZXJzb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsYW5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXlSb2xsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVwb3J0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVG9vbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjFcIiBzeD17eyBoZWlnaHQ6ICc1MjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyB3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk5hbWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57KHJvdy5lbXBsb3llZU5hbWUgfHwgXCJcIikudG9VcHBlckNhc2UoKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkpvaW4gRGF0ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXlqcyhyb3cuam9pbkRhdGUpLmZvcm1hdCgnREQvTU1NTS9ZWVlZJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TdGF0dXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIlJlc2lnblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiM4MDEzMTNcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyA9PT0gXCJTdXNwZW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiNmYjhjMDBcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIkZpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJlZFwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyA9PT0gXCJFbXBsb3llZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIiA6IFwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuc3RhdHVzICE9PSB1bmRlZmluZWQgPyByb3cuc3RhdHVzIDogJ1VuZGVmaW5lZCd9e3Jvdy5yZWFzb24xICE9PSB1bmRlZmluZWQgPyAnOiAnICsgcm93LnJlYXNvbjEgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5EZXBhcnRtZW50ICYgR3JhZGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRlcGFydG1lbnQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cm93LmRlcGFydG1lbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5HcmFkZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyb3cuZW1wbG95ZWVSb2xlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+RW1wbG95ZWUgQ29udGFjdDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RW1haWw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cm93LmVtcGxveWVlRW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5QaG9uZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyb3cuZW1wbG95ZWVQaG9uZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFkZHJlc3M8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cm93LmVtcGxveWVlQWRkcmVzc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlNhbGFyeSBJbmZvcm1hdGlvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QmFzaWMgd2FnZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5GQyB7cGFyc2VGbG9hdChyb3cuc2FsYXJ5IHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRyYW5zcG9ydCBhbGxvd2FuY2VzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkZDIHtwYXJzZUZsb2F0KHJvdy5iYXNpY1RyYW5zcG9ydCB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Gb29kIGFsbG93YW5jZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RkMge3BhcnNlRmxvYXQocm93LmZvb2RCYXNpYyB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Cb3VuY2UgYWxsb3dhbmNlcyAzJTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5GQyB7cGFyc2VGbG9hdChyb3cuYm91bmNlQWxsb3dhbmNlcyB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5vdGhlcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5GQyB7cGFyc2VGbG9hdChyb3cub3RoZXIgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VG90YWwgU2FsYXJ5PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkZDIHtwYXJzZUZsb2F0KE51bWJlcihyb3cuc2FsYXJ5IHx8IDApICsgTnVtYmVyKHJvdy5iYXNpY1RyYW5zcG9ydCB8fCAwKSArIE51bWJlcihyb3cuZm9vZEJhc2ljIHx8IDApICsgTnVtYmVyKHJvdy5ib3VuY2VBbGxvd2FuY2VzIHx8IDApICsgTnVtYmVyKHJvdy5vdGhlciB8fCAwKSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSAoJCB7cGFyc2VGbG9hdCgoTnVtYmVyKHJvdy5zYWxhcnkgfHwgMCkgKyBOdW1iZXIocm93LmJhc2ljVHJhbnNwb3J0IHx8IDApICsgTnVtYmVyKHJvdy5mb29kQmFzaWMgfHwgMCkgKyBOdW1iZXIocm93LmJvdW5jZUFsbG93YW5jZXMgfHwgMCkgKyBOdW1iZXIocm93Lm90aGVyIHx8IDApKSAvIChyYXRlIHx8IDEpKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9KTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+IDogPHRib2R5PjwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkRlc2NyaXB0aW9uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcmUgc3R5bGU9e3sgZm9udEZhbWlseTogJ3N5c3RlbS11aScsIGNvbG9yOiAnYmxhY2snLCBmb250U2l6ZTogJzE1cHgnIH19Pntyb3cuZGVzY3JpcHRpb259PC9wcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PiA6IDx0Ym9keT48L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiMlwiIHN4PXt7IGhlaWdodDogJzUyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgd2lkdGg6ICcxMDAlJywgZm9udFNpemU6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5QZXJzb25hbCBJbmZvcm1hdGlvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRhdGUgb2YgQmlydGg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF5anMocm93LmRhdGVPZkJpcnRoKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkdlbmRlcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyb3cuR2VuZGVyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U3RhdHVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvdy5zdGF0dXNNYXJpdGFsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPklkPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvdy5pZGVudGlmaWVyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+SWQgTjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyb3cuaWRlbnRpZmllck51bWJlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkVYUCBJZCBEYXRlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RheWpzKHJvdy5leHBpcmVEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjdXN0b21lckRldGFpbHMxJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZScsIHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlVG9vbHRpcCB0aXRsZT1cIkRlbGV0ZS1JbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGVJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVsZXRlVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMSUnLCB3aWR0aDogJzYwMHB4JywgaGVpZ2h0OiAnMzAwcHgnIH19IHNyYz17aW1hZ2VzVVJMfSBhbHQ9e2ltYWdlcy5maWxlTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXBsb2FkZWRJbWFnZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9ezQwMH0gaGVpZ2h0PXsyMDB9IHNyYz17dXBsb2FkZWRJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J2xlZnQnIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlU2hvd0lucHV0fSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxNCUnLCB3aWR0aDogJzYwJScgfX0gb25DbGljaz17aGFuZGxlSW1hZ2VTdWJtaXR9PlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUJhc2U2NH0gdHlwZT0nZmlsZScgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE0JScsIHdpZHRoOiAnNjAlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiNVwiIHN4PXt7IGhlaWdodDogJzUyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGFyaWEtbGFiZWw9XCJjb2xsYXBzaWJsZSB0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPiM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+UHJvamVjdCBOYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkRheSBXb3JrPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlBheSBEYXk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5Ub3RhbCBQYXk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5pbmdBcnJheT8ubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cyIGtleT17cm93LmlkfSByb3c9e3Jvd30gaW5kZXg9e2l9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjNcIiBzeD17eyBoZWlnaHQ6ICc1MjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBhcmlhLWxhYmVsPVwiY29sbGFwc2libGUgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Nb250aDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkRheSBXb3JrPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+VG90YWwgUGFpZDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF5Um9sbD8ubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IGtleT17cm93Ll9pZH0gcm93PXtyb3d9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9XCI0XCIgc3g9e3sgaGVpZ2h0OiAnNTIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVweCcsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInLCAnRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0YXJ0RGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKHN0YXJ0RGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0U3RhcnREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J01NTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydcIm1vbnRoXCIgXCImXCIgXCJ5ZWFyXCInfSB2aWV3cz17Wydtb250aCcsICd5ZWFyJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludEhlYWRlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiB0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIiA/IGRhdGE/LmJyYW5jaElkIDogXCJcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz48cCBjbGFzc05hbWU9J2ludm9pY2Vocic+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBtYXJnaW5Ub3A6ICcyNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFkZHJlc3Mgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxpbmVIZWlnaHQ6IDEuMzUsIHdpZHRoOiAnNjAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGZvbnRTaXplOiAnMTNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocm93LmVtcGxveWVlTmFtZSB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaXJzdFRhYmxlXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZvbnRTaXplOiAnNzAlJywgbGVmdDogJzgzcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgcGFnZUJyZWFrSW5zaWRlOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17Mn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5TdGF0ZW1lbnQgb2YgQWNjb3VudHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJywgdGV4dEFsaWduOiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yIHtkYXlqcyhzdGFydERhdGUpLmZvcm1hdCgnTU1NTS9ZWVlZJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+QWNjb3VudCBTdW1tYXJ5PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3BhbiA+VG90YWwgQ29zdDwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19PntgRkMgJHtwYXJzZUZsb2F0KHRvdGFsR0ZDIHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gICsgYCAoJCR7cGFyc2VGbG9hdCh0b3RhbEdVU0QgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSlgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzcwJScsIG1hcmdpbkJvdHRvbTogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbWF4SGVpZ2h0OiAnNDAwcHgnLCBvdmVyZmxvdzogJ2F1dG8nLCBwYWdlQnJlYWtJbnNpZGU6ICdhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzE1MHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5UcmFuc2FjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICczMDBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+RGV0YWlsczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+UGF5bWVudHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMTUwcHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vbnRoUm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5Ub3RhbCBDb3N0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfT57YEZDICR7dG90YWxGQz8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWAgKyBgICgkJHt0b3RhbFVTRD8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSlgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJpbnZvaWNlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxFbWFpbCAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29udGFjdEBHbG9iYWxHYXRlLlNhcmw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzVweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48UGhvbmUgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPisyNDMgODI3IDcyMiAyMjI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzVweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48V2ViSWNvbiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+d3d3Lkdsb2JhbEdhdGUuc2FybDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjZcIiBzeD17eyBoZWlnaHQ6ICc1MjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaDN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzgwJScsIG1hcmdpbkJvdHRvbTogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PnJlYXNvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5JdGVtIERlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PiBRdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5My5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICc2MHB4JyB9fT57cm93Lm91dE51bWJlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMzBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+e2RheWpzKHJvdy5pdGVtT3V0RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzEwMHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT57cm93LnJlYXNvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PiB7cm93Lml0ZW1zUXR5QXJyYXk/Lm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57SXRlbS5pdGVtTmFtZS5pdGVtTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX0gPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzQwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXRlbXNRdHlBcnJheT8ubWFwKChJdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57SXRlbS5uZXdJdGVtT3V0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiQ29udGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3cxID09PSAyID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DT01NRU5UUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cxKDEpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdEVkaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nY29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNic+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMzU1cHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0NvbW1lbnRzMS5tYXAoKEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17SXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0l0ZW0uZGF0ZUNvbW1lbnQgPyBkYXlqcyhJdGVtLmRhdGVDb21tZW50KS5mb3JtYXQoJ0REL01NJykgOiAnJ30ge0l0ZW0uQ29tbWVudEluZm8ucGVyc29uICsgJzogJyArIEl0ZW0uQ29tbWVudEluZm8ucmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3cxID09PSAzID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ISVNUT1JZPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93MSgxKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzUxOHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24ubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntyb3cucGVyc29uICsgJyBvbiAnICsgZGF5anMocm93LmRhdGVOb3RpZmljYXRpb24pLmZvcm1hdCgnREQvTU1NTScpfToge3Jvdy5yZWFzb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsUGljdHVyZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVBpY3R1cmV9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBJbWFnZSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVBpY3R1cmV9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbERlbGV0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVBpY3R1cmV9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBJbWFnZSBEZWxldGVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlUGljdHVyZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIEZhaWxlZCB0byBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVlVmlld0FkbWluQWxsXHJcbiJdLCJuYW1lcyI6WyJQcmludEhlYWRlciIsIlByaW50Rm9vdGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoRTIiLCJTZWFyY2hJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJDb2xsYXBzZSIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlUm93IiwiVGFibGVIZWFkIiwiUGFwZXIiLCJUYWJsZUNvbnRhaW5lciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJBdXRvY29tcGxldGUiLCJzdHlsZWQiLCJNb2RhbCIsIkJhY2tkcm9wIiwiRmFkZSIsIkJveCIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIkNoZWNrYm94IiwiTGluZWFyUHJvZ3Jlc3MiLCJTdGVwcGVyIiwiU3RlcCIsIlN0ZXBMYWJlbCIsIkJ1dHRvbiIsIkFjY29yZGlvbiIsIkFjY29yZGlvblN1bW1hcnkiLCJBY2NvcmRpb25EZXRhaWxzIiwiRGl2aWRlciIsIlRhYnMiLCJUYWIiLCJNZW51IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiRWRpdEljb24iLCJEZWxldGVJY29uIiwiRXhwYW5kTW9yZUljb24iLCJUaW1lbGluZSIsIlRpbWVsaW5lSXRlbSIsIlRpbWVsaW5lU2VwYXJhdG9yIiwiVGltZWxpbmVDb25uZWN0b3IiLCJUaW1lbGluZUNvbnRlbnQiLCJUaW1lbGluZURvdCIsIlRpbWVsaW5lT3Bwb3NpdGVDb250ZW50IiwiQWRkIiwiS2V5Ym9hcmRBcnJvd0Rvd25PdXRsaW5lZCIsIktleWJvYXJkQXJyb3dVcCIsIktleWJvYXJkQXJyb3dVcE91dGxpbmVkIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsIkNsb3NlSWNvbiIsIkVtcGxveWVlRm9ybVZpZXciLCJ1c2VQYXJhbXMiLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsInVzZU5hdmlnYXRlIiwiTmF2TGluayIsIkxpbmsiLCJkYXlqcyIsIlRhYkNvbnRleHQiLCJUYWJMaXN0IiwiVGFiUGFuZWwiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiTG9hZGVyIiwiQ2xvc2UiLCJSZW1vdmVDaXJjbGVPdXRsaW5lIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkFycm93QmFjayIsIktleWJvYXJkQXJyb3dEb3duIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiRGF0ZVBpY2tlciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGVtb0NvbnRhaW5lciIsIkltYWdlIiwiUGhvbmUiLCJXZWJJY29uIiwiRW1haWwiLCJFbWFpbEljb24iLCJQaG9uZUljb24iLCJFZGl0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiRGVsZXRlVG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiQmxhY2tUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJWaWV3VG9vbHRpcCIsIl9yZWY3IiwiX2V4Y2x1ZGVkNCIsIl9yZWY4Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY5Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWYwIiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiRW1wbG95ZWVWaWV3QWRtaW5BbGwiLCJfZW1wbG95ZWUkZmlsdGVyIiwiX3VzZVBhcmFtcyIsImlkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjEiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsIl9pZCIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImVtcGxveWVlIiwic2V0RW1wbG95ZWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBheVJvbGwiLCJzZXRQYXlSb2xsIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJleHBlbnNlcyIsInNldEV4cGVuc2VzIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJwbGFuaW5nIiwic2V0UGxhbmluZyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwicmF0ZSIsInNldFJhdGUiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJsb2FkaW5nRGF0YSIsInNldExvYWRpbmdEYXRhIiwiYXBpVXJsIiwiZmV0Y2hFIiwiX3JlZjEwIiwiX3Jlc1BSYXRlJGRhdGEiLCJyZXNQUmF0ZSIsIm1hcCIsInJvdyIsInBheW1lbnRSYXRlIiwiX3JlcyRkYXRhIiwicmV2ZXJzZSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJzZXRFbXBsb3llZU5hbWUiLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJpdGVtT3V0Iiwic2V0SXRlbU91dCIsIkJvb2xlYW4iLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlTWVudSIsImZldGNoRUlkIiwiX3JlZjExIiwiX3JlcyRkYXRhMiIsIl9yZXNQYXlSb2xsJGRhdGEiLCJfcmVzUGxhbmluZyRkYXRhIiwiX3Jlc0RFJGRhdGEiLCJfcmVzSXRlbU91dCRkYXRhIiwicmVzUGF5Um9sbCIsInBheVJvbGxEYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIiwiX3JvdyRlbXBsb3llZU5hbWUiLCJyZXNQbGFuaW5nIiwicGxhbm5pbmdEYXRhIiwiZW1wbG95ZWVJRCIsInRvdGFsV29ya0RheSIsInBhcnNlRmxvYXQiLCJkYXlQYXlVU2QiLCJ3b3JrTnVtYmVyIiwidG9GaXhlZCIsInJlc0RFIiwiZXhwZW5zZURhdGEiLCJhY2NvdW50TmFtZSIsImZpbmQiLCJJdGVtIiwiaWRSb3ciLCJfcm93JGVtcGxveWVlTmFtZTIiLCJfcm93JGVtcGxveWVlTmFtZTMiLCJhbW91bnRGQyIsInJlZHVjZSIsInN1bSIsImFjYyIsImFtb3VudCIsImFtb3VudFVTRCIsInRvdGFsIiwicmVzSXRlbU91dCIsIml0ZW1PdXREYXRhIiwiZm9ybWF0RGF0ZTEiLCJfcm93JHJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInBsYW5pbmdPYmplY3QiLCJpdGVtIiwiX2l0ZW0kcHJvamVjdE5hbWUiLCJfaXRlbSRwcm9qZWN0TmFtZTIiLCJwcm9qSWQiLCJwcm9qZWN0TmFtZSIsIm5hbWUiLCJkYXlQYXkiLCJ3b3JrRCIsInBsYW5pbmdBcnJheSIsIk9iamVjdCIsImtleXMiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsImltYWdlc1VSTCIsInNldEltYWdlc1VSTCIsImZldGNoSW1hZ2VzIiwiX3JlZjEyIiwicmVzcCIsIl9yZXNwJGRhdGEiLCJfcmVzcCRkYXRhMiIsIl9yZXNwJGRhdGEzIiwiX3Jlc3AkZGF0YTQiLCJfcmVzcCRkYXRhNSIsImJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJib2xkIiwiQmxvYiIsInR5cGUiLCJjb250ZW50VHlwZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkZW5kIiwicmVzdWx0IiwibG9nIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlU2hvdyIsImUiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJoYW5kbGVDaGFuZ2UiLCJwYW5lbCIsImlzRXhwYW5kZWQiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwic2hvdzIiLCJzZXRTaG93MiIsImhhbmRsZVNob3cyIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsInZhbHVlIiwic2V0VmFsdWUiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwidmFsdWUyIiwic2V0VmFsdWUyIiwic2VsZWN0ZWRJbmRleCIsImZpbmRJbmRleCIsImhhbmRsZUNoYW5nZTMiLCJuZXdWYWx1ZSIsImhhbmRsZUNoYW5nZTIiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwiaGFuZGxlU2VhcmNoIiwidGFyZ2V0IiwiX1JlYWN0JHVzZVN0YXRlNSIsIl9SZWFjdCR1c2VTdGF0ZTYiLCJ2YWx1ZTMiLCJzZXRWYWx1ZTMiLCJoYW5kbGVDaGFuZ2U0IiwiY2hhbmdlVmFsdWUiLCJzZXRJdGVtIiwibmV3QXJyYXkiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGVwYXJ0bWVudCIsImVtcGxveWVlUm9sZSIsImVtcGxveWVlQWRkcmVzcyIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJzaG93MSIsInNldFNob3cxIiwiaGFuZGxlU2hvdzEiLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwicmVhc29uIiwic2V0UmVhc29uIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsIkNvbW1lbnRzMSIsInNldENvbW1lbnRzIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsIm5vdGlmaWNhdGlvbiIsInNldE5vdGlmaWNhdGlvbiIsImZldGNoQ29tbWVudCIsIl9yZWYxMyIsIl9yZXMkZGF0YTMiLCJfcmVzTm90aWZpY2F0aW9uJGRhdGEiLCJDb21tZW50SW5mbyIsImlkSW5mbyIsInJlc05vdGlmaWNhdGlvbiIsInBlcnNvbiIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJsb2FkaW5nT3Blbk1vZGFsUGljdHVyZSIsInNldExvYWRpbmdPcGVuTW9kYWxQaWN0dXJlIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsImxvYWRpbmdPcGVuTW9kYWxEZWxldGUiLCJzZXRMb2FkaW5nT3Blbk1vZGFsRGVsZXRlIiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZU9wZW5QaWN0dXJlIiwiaGFuZGxlT3BlbkRlbGV0ZSIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbG9zZVBpY3R1cmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZUNsb3NlRXJyb3IiLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4IiwidXBsb2FkZWRJbWFnZSIsInNldFVwbG9hZGVkSW1hZ2UiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwidXBsb2FkZWRJbWFnZVVSTCIsInNldFVwbG9hZGVkSW1hZ2VVUkwiLCJoYW5kbGVCYXNlNjQiLCJmaWxlcyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoYW5kbGVTaG93SW5wdXQiLCJoYW5kbGVJbWFnZVN1Ym1pdCIsIl9yZWYxNCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJoZWFkZXJzIiwiX3giLCJoYW5kbGVEZWxldGVJbWFnZSIsIl9yZWYxNSIsImRlbGV0ZSIsIl94MiIsImRhdGVDb21tZW50IiwiRGF0ZSIsIm5vdyIsImhhbmRsZVN1Ym1pdEVkaXQiLCJfcmVmMTYiLCJuZXdEYXRhIiwiX3gzIiwiYWxsVHJhbnNhY3Rpb24iLCJmb3JFYWNoIiwicHVzaCIsIm1vbnRoIiwiZGF0ZSIsInBheURhdGUiLCJudW1iZXIiLCJwYXlOdW1iZXIiLCJkZXNjcmlwdGlvbiIsInRvdGFsTmV0IiwidG90YWxQYWlkRG9sbGFycyIsIl9yb3ckZXhwZW5zZUNhdGVnb3J5IiwiZXhwZW5zZURhdGUiLCJleHBlbnNlTnVtYmVyIiwiZXhwZW5zZUNhdGVnb3J5IiwiZXhwZW5zZXNDYXRlZ29yeSIsIl91c2VTdGF0ZTUxIiwiX3VzZVN0YXRlNTIiLCJzZWxlY3RPcHRpb25zIiwic2V0U2VsZWN0T3B0aW9ucyIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJ0b3RhbEZDIiwidG90YWxVU0QiLCJmaWx0ZXJUcmFuc2FuY3Rpb24iLCJmb3JtYXQiLCJ0b3RhbEdGQyIsImxlbmd0aCIsInRvdGFsR1VTRCIsIm1vbnRoUm93Iiwic29ydCIsImEiLCJiIiwiaSIsImtleSIsInRleHRBbGlnbiIsImJvcmRlckJvdHRvbSIsInJlcGxhY2UiLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2Iiwic2VhcmNoMyIsInNldFNlYXJjaDMiLCJoYW5kbGVTZWFyY2gzIiwibmV3QXJyYXkzIiwicmVmZXJlbmNlTmFtZSIsIml0ZW1zUXR5QXJyYXkiLCJzb21lIiwiaXRlbU5hbWUiLCJpdGVtRGVzY3JpcHRpb24iLCJpdGVtT3V0RGF0ZSIsInRvdGFsUmV0dXJuVG90YWwiLCJuZXdJdGVtT3V0IiwiX1JlYWN0JHVzZVN0YXRlNyIsIl9SZWFjdCR1c2VTdGF0ZTgiLCJzaWRlQmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZURyYXdlciIsIlJvdyIsIl9SZWFjdCR1c2VTdGF0ZTkiLCJfUmVhY3QkdXNlU3RhdGUwIiwic2V0T3BlbiIsIkZyYWdtZW50Iiwic3giLCJzaXplIiwib25DbGljayIsImNvbXBvbmVudCIsInNjb3BlIiwiYWxpZ24iLCJkYXlzVyIsInRvdGFsUGFpZCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwiY29sU3BhbiIsImluIiwidGltZW91dCIsInVubW91bnRPbkV4aXQiLCJtYXJnaW4iLCJ2YXJpYW50IiwiZ3V0dGVyQm90dG9tIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwicGFkZGluZyIsImJhc2ljU2FsYXJ5IiwiZWFybmluZ1NhbGFyeSIsImFkdmFuY2VkU2FsYXJ5IiwiYmFzaWNUcmFuc3BvcnQiLCJ0cmFuc3BvcnRFYXJuaW5nIiwidHJhbnNwb3J0RGVkdWN0aW9uIiwiZm9vZEJhc2ljIiwiZm9vZEVhcm5pbmciLCJmb29kRGVkdWN0aW9uIiwiYm91bmNlQWxsb3dhbmNlcyIsImJvdW5jZUFsbG93YW5jZXNFYXJuaW5nIiwibG9hbiIsIm90aGVyIiwib3RoZXJFYXJuaW5nIiwiaXRlbUxvc3QiLCJ0b3RhbEFjdHVhbFNhbGFyeSIsInRvdGFsQWN0dWFsRWFybmluZyIsInRvdGFsQWN0dWFsRGVkdWN0aW9uIiwiYm9udXMiLCJSb3cyIiwiX3BsYW5pbmckZmlsdGVyIiwiaW5kZXgiLCJfUmVhY3QkdXNlU3RhdGUxIiwiX1JlYWN0JHVzZVN0YXRlMTAiLCJyb3cxIiwiX3JvdzEkcHJvamVjdE5hbWUiLCJwbGFuaW5nRGF0ZSIsInN0YXR1cyIsInBsYW5pbmdUYXNrIiwicGxhbmluZ0Rlc2NyaXB0aW9uIiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm1hcmdpblJpZ2h0Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJjb250YWluZXIiLCJ4cyIsImZvbnRXZWlnaHQiLCJvdmVyZmxvd1kiLCJvbkNoYW5nZSIsIm9yaWVudGF0aW9uIiwibGFiZWwiLCJ0byIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwicGxhY2VtZW50IiwiZmxvYXQiLCJfZGF0YSIsIl90b3RhbEZDIiwiX3RvdGFsVVNEIiwidG9VcHBlckNhc2UiLCJlbXBsb3llZUlkIiwidW5kZWZpbmVkIiwiZ2FwIiwiZGlzYWJsZUVsZXZhdGlvbiIsImVuZEljb24iLCJNZW51TGlzdFByb3BzIiwib25DbG9zZSIsIlRyYW5zaXRpb25Db21wb25lbnQiLCJib3JkZXJDb2xvciIsImpvaW5EYXRlIiwicmVhc29uMSIsImVtcGxveWVlRW1haWwiLCJlbXBsb3llZVBob25lIiwic2FsYXJ5IiwiTnVtYmVyIiwiZm9udEZhbWlseSIsImRhdGVPZkJpcnRoIiwiR2VuZGVyIiwic3RhdHVzTWFyaXRhbCIsImlkZW50aWZpZXIiLCJpZGVudGlmaWVyTnVtYmVyIiwiZXhwaXJlRGF0ZSIsImN1cnNvciIsInNyYyIsImFsdCIsImZpbGVOYW1lIiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwicmVxdWlyZWQiLCJ2aWV3cyIsImJyYW5jaElkIiwibWFyZ2luVG9wIiwibGluZUhlaWdodCIsInBhZ2VCcmVha0luc2lkZSIsIm1heEhlaWdodCIsIl9yb3ckaXRlbXNRdHlBcnJheSIsIl9yb3ckaXRlbXNRdHlBcnJheTIiLCJvdXROdW1iZXIiLCJib3JkZXJMZWZ0Iiwib25TdWJtaXQiLCJtdWx0aWxpbmUiLCJyb3dzIiwiZGF0ZU5vdGlmaWNhdGlvbiIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==