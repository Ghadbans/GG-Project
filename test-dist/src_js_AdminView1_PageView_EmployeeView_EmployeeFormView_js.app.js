"use strict";
exports.id = "src_js_AdminView1_PageView_EmployeeView_EmployeeFormView_js";
exports.ids = ["src_js_AdminView1_PageView_EmployeeView_EmployeeFormView_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/EmployeeView/EmployeeFormView.js"
/*!*********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EmployeeView/EmployeeFormView.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SidebarDashE3 */ "./src/js/component/SidebarDashE3.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormLabel/FormLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/RadioGroup/RadioGroup.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Radio/Radio.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var style__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! style */ "./node_modules/style/style.js");
/* harmony import */ var style__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(style__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["children"];
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
function EmployeeFormView() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_47__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_47__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__.setUser)({
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
        return _ref7.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__.logOut)());
    navigate('/');
  };
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/create-employee");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    joinDate = _useState2[0],
    setJoinDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    employeeName = _useState4[0],
    setEmployeeName = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    employeeId = _useState6[0],
    setEmployeeId = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    employeeAddress = _useState8[0],
    setEmployeeAddress = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    employeeEmail = _useState0[0],
    setEmployeeEmail = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    employeePhone = _useState10[0],
    setEmployeePhone = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    employeeRole = _useState12[0],
    setEmployeeRole = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    department = _useState14[0],
    setDepartment = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    departmentInfo = _useState16[0],
    setDepartmentInfo = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    dateOfBirth = _useState18[0],
    setDateOfBirth = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    Gender = _useState20[0],
    setGender = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    statusMarital = _useState22[0],
    setStatusMarital = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState24 = _slicedToArray(_useState23, 2),
    identifier = _useState24[0],
    setIdentifier = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState26 = _slicedToArray(_useState25, 2),
    identifierNumber = _useState26[0],
    setIdentifierNumber = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState28 = _slicedToArray(_useState27, 2),
    expireDate = _useState28[0],
    setExpireDate = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    salary = _useState30[0],
    setSalary = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState32 = _slicedToArray(_useState31, 2),
    description = _useState32[0],
    setDescription = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState34 = _slicedToArray(_useState33, 2),
    images = _useState34[0],
    setImages = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState36 = _slicedToArray(_useState35, 2),
    imagesUrl = _useState36[0],
    setImagesUrl = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    openBack = _useState38[0],
    setOpenBack = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState40 = _slicedToArray(_useState39, 2),
    bankName = _useState40[0],
    setBankName = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState42 = _slicedToArray(_useState41, 2),
    bankAccountNumber = _useState42[0],
    setBankAccountNumber = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState44 = _slicedToArray(_useState43, 2),
    other = _useState44[0],
    setOther = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState46 = _slicedToArray(_useState45, 2),
    bounceAllowances = _useState46[0],
    setBounceAllowances = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState48 = _slicedToArray(_useState47, 2),
    foodBasic = _useState48[0],
    setFoodBasic = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState50 = _slicedToArray(_useState49, 2),
    basicTransport = _useState50[0],
    setBasicTransport = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState52 = _slicedToArray(_useState51, 2),
    status = _useState52[0],
    setStatus = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState54 = _slicedToArray(_useState53, 2),
    reason1 = _useState54[0],
    setReason = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState56 = _slicedToArray(_useState55, 2),
    unitInfo = _useState56[0],
    setUnitInfo = _useState56[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _resItemUnit$data;
          var resItemUnit = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/department"));
          var currentBranch = localStorage.getItem('selectedBranch') || 'HQ';
          var filteredUnits = (((_resItemUnit$data = resItemUnit.data) === null || _resItemUnit$data === void 0 ? void 0 : _resItemUnit$data.data) || []).filter(d => !d.branchId || d.branchId === currentBranch);
          setUnitInfo(filteredUnits);
          var lastEmpRes = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-last-saved-employee"));
          if (lastEmpRes && lastEmpRes.data && lastEmpRes.data.employeeId) {
            var lastIdStr = String(lastEmpRes.data.employeeId);
            var match = lastIdStr.match(/\d+/);
            var nextNum = match ? parseInt(match[0], 10) + 1 : 1;
            setEmployeeId(nextNum.toString());
          } else {
            setEmployeeId("1");
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetch() {
        return _ref8.apply(this, arguments);
      };
    }();
    handleFetch();
  }, []);
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  function handleBase64(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImages(reader.result);
    };
    reader.onerror = error => {
      console.log("error", error);
    };
    setImagesUrl(e.target.files[0]);
  }
  var handleShowInput = () => {
    setImages('');
  };
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    loading = _useState58[0],
    setLoading = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState60 = _slicedToArray(_useState59, 2),
    loadingOpenModal = _useState60[0],
    setLoadingOpenModal = _useState60[1];
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState62 = _slicedToArray(_useState61, 2),
    ErrorOpenModal = _useState62[0],
    setErrorOpenModal = _useState62[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState64 = _slicedToArray(_useState63, 2),
    openReason = _useState64[0],
    setOpenReason = _useState64[1];
  var handleOpenUpdateReasonStatus = () => {
    setOpenReason(true);
  };
  var handleCloseUpdateReasonStatus = () => {
    setOpenReason(false);
  };
  var handleStatus = e => {
    var newValue = e.target.value;
    setStatus(newValue);
    if (newValue) {
      handleOpenUpdateReasonStatus();
    }
  };
  var handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    openAutocomplete2 = _useState66[0],
    setOpenAutocomplete2 = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    modalOpenLoading = _useState68[0],
    setModalOpenLoading = _useState68[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
    setModalOpenLoading(false);
  };
  var handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
    // Reset form
    setEmployeeName('');
    setEmployeeId('');
    setEmployeeAddress('');
    setEmployeeEmail('');
    setEmployeePhone('');
    setEmployeeRole('');
    setDepartment('');
    setSalary(0);
    setDescription('');
    setImages('');
    setBankName('');
    setBankAccountNumber('');
    setOther(0);
    setBounceAllowances(0);
    setFoodBasic(0);
    setBasicTransport(0);
    setStatus('');
    setReason('');
    setSaving('');
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
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var dateComment = new Date();
  var handleSubmitCategory = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        department: departmentInfo,
        branchId: localStorage.getItem('selectedBranch') || 'HQ'
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/create-department"), data);
        if (res) {
          handleOpenModal();
          setUnitInfo([...unitInfo, res.data.data]);
        }
      } catch (error) {
        if (error) {
          alert('An error as Occur');
        }
      }
    });
    return function handleSubmitCategory(_x) {
      return _ref9.apply(this, arguments);
    };
  }();
  var handleImageSubmit = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* () {
      var formData = new FormData();
      formData.append('image', imagesUrl);
      formData.append('employeeName', employeeName);
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/upload-image"), formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        //console.log(res.data.imageUrl)
      } catch (error) {
        console.log('error', error);
      }
    });
    return function handleImageSubmit() {
      return _ref0.apply(this, arguments);
    };
  }();
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (ReferenceInfo) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created EMPLOYEE ',
        reason: 'EMP-' + String(employeeId).padStart(6, '0') + ' ' + employeeName,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2) {
      return _ref1.apply(this, arguments);
    };
  }();
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState70 = _slicedToArray(_useState69, 2),
    saving = _useState70[0],
    setSaving = _useState70[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_36__["default"])(),
        joinDate,
        employeeName,
        employeeAddress,
        employeeEmail,
        employeePhone,
        employeeRole,
        department,
        dateOfBirth,
        Gender,
        status,
        statusMarital,
        identifier,
        identifierNumber,
        expireDate,
        salary,
        reason1,
        description,
        bankAccountNumber,
        bankName,
        employeeId,
        other,
        bounceAllowances,
        foodBasic,
        basicTransport,
        synced: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].post(apiUrl, {
          joinDate,
          employeeName,
          employeeAddress,
          employeeEmail,
          employeePhone,
          employeeRole,
          department,
          dateOfBirth,
          Gender,
          status,
          statusMarital,
          identifier,
          identifierNumber,
          expireDate,
          salary,
          reason1,
          description,
          bankAccountNumber,
          bankName,
          employeeId,
          other,
          bounceAllowances,
          foodBasic,
          basicTransport,
          branchId: localStorage.getItem('selectedBranch') || 'HQ'
        });
        if (res) {
          handleOpen();
          if (imagesUrl) handleImageSubmit(); // only upload if a photo was selected
          var ReferenceInfo = res.data.data._id;
          // await db.employeeSchema.add({ ...res.data.data, _id: res.data.data._id, synced: true })
          handleCreateNotification(ReferenceInfo);
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x3) {
      return _ref10.apply(this, arguments);
    };
  }();
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Add new Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_43__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_53__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_52__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_49__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_29__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h6"
  }, "Employee Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_41__.DatePicker, {
    required: true,
    name: "joinDate",
    label: "Join Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_42___default()(joinDate),
    onChange: date => setJoinDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    required: true,
    id: "employeeId",
    label: "Employee Id",
    value: employeeId,
    onChange: e => setEmployeeId(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "Gender"
  }, "Gender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "Gender",
    row: true,
    onChange: e => setGender(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "Female",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null),
    label: "Female"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "Male",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null),
    label: "Male"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "employeeName",
    label: "Employee Name",
    value: employeeName,
    onChange: e => setEmployeeName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_41__.DatePicker, {
    required: true,
    name: "dateOfBirth",
    label: "Birth Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_42___default()(dateOfBirth),
    onChange: date => setDateOfBirth(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "employeeAddress",
    label: "Employee Address",
    value: employeeAddress,
    onChange: e => setEmployeeAddress(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    required: true,
    id: "employeeEmail",
    label: "Email",
    value: employeeEmail,
    onChange: e => setEmployeeEmail(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "employeePhone",
    label: "Phone Number",
    value: employeePhone,
    onChange: e => setEmployeePhone(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    required: true,
    id: "employeeRole",
    label: "Grade",
    value: employeeRole,
    onChange: e => setEmployeeRole(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "department",
    options: unitInfo,
    getOptionLabel: Option => Option.department.toUpperCase(),
    onChange: (e, newValue) => setDepartment(newValue.department),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    PaperComponent: _ref11 => {
      var children = _ref11.children,
        other = _objectWithoutProperties(_ref11, _excluded3);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, other, {
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
      }, "Add New Department")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, params, {
      label: "Department",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    htmlFor: "status"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    required: true,
    id: "status",
    value: status,
    onChange: e => setStatus(e.target.value),
    label: "Status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "Employed"
  }, "Employed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "Suspended"
  }, "Suspended"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "Fired"
  }, "Fired"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "Resign"
  }, "Resign")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "secondTable",
    style: {
      fontSize: '15px',
      marginBottom: '0px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    colSpan: 5,
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      backgroundColor: '#316FF6',
      color: 'white'
    }
  }, " Salary Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Basic wage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Transport allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Food allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Bounce allowances 3%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Other"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    required: true,
    size: "small",
    id: "salary",
    onChange: e => setSalary(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    required: true,
    size: "small",
    id: "basicTransport",
    onChange: e => setBasicTransport(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    required: true,
    size: "small",
    id: "foodBasic",
    onChange: e => setFoodBasic(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    required: true,
    size: "small",
    id: "bounceAllowances",
    onChange: e => setBounceAllowances(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    required: true,
    size: "small",
    id: "other",
    onChange: e => setOther(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "bankName",
    label: "Bank Name",
    value: bankName,
    onChange: e => setBankName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "bankAccountNumber",
    label: "Bank Account Number",
    value: bankAccountNumber,
    onChange: e => setBankAccountNumber(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    htmlFor: "identifier"
  }, "Identifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "identifier",
    value: identifier,
    onChange: e => setIdentifier(e.target.value),
    label: "Identifier"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "Passport"
  }, "Passport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: "National-ID"
  }, "National-ID")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "identifierNumber",
    label: "Identifier Number",
    value: identifierNumber,
    onChange: e => setIdentifierNumber(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_41__.DatePicker, {
    required: true,
    name: "expireDate",
    label: "Identifier Expire Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_42___default()(expireDate),
    onChange: date => setExpireDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "statusMarital"
  }, "Status Marital"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "statusMarital",
    row: true,
    onChange: e => setStatusMarital(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "Single",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null),
    label: "Single"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "Married",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null),
    label: "Married"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, images ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "left",
    style: {
      position: 'absolute'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleShowInput,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    width: 400,
    height: 200,
    src: images
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    onChange: handleBase64,
    type: "file",
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "description",
    name: "description",
    value: description,
    label: "Description",
    multiline: true,
    rows: 4,
    onChange: e => setDescription(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    open: openBack,
    onClose: handleCloseBack,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Do you want to stop creating employee ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate('/TewmViewAdmin'),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_20__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_46__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_20__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_46__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_45__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: openAutocomplete2,
    onClose: handleCloseOpenAutocomplete2,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleCloseOpenAutocomplete2,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Create Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitCategory
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "department",
    name: "department",
    value: departmentInfo,
    label: "Department",
    onChange: e => setDepartmentInfo(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: modalOpenLoading,
    onClose: handleCloseOpenAutocomplete2,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_20__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_46__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data successfully Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseOpenAutocomplete2,
    className: "btnCustomer"
  }, "Close")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeFormView);

/***/ },

/***/ "./src/js/component/SidebarDashE3.js"
/*!*******************************************!*\
  !*** ./src/js/component/SidebarDashE3.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_SidebarNew_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/SidebarNew.scss */ "./src/js/css/SidebarNew.scss");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/AccountBox.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/AssignmentInd.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/CurrencyExchange.js");
/* harmony import */ var _mui_icons_material_Groups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Groups */ "./node_modules/@mui/icons-material/Groups.js");
/* harmony import */ var _mui_icons_material_Payment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Payment */ "./node_modules/@mui/icons-material/Payment.js");
/* harmony import */ var _mui_icons_material_Contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Contacts */ "./node_modules/@mui/icons-material/Contacts.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");










function SidebarDashE3() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Rate"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Groups__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Employee"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Payment__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "PayRoll"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "User Account"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Grant Access"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Contacts__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Profile"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarDashE3);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRW1wbG95ZWVWaWV3X0VtcGxveWVlRm9ybVZpZXdfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFtRDtBQUNVO0FBQ3JDO0FBQ0U7QUFDMEI7QUFDc0I7QUFDUjtBQUNkO0FBQ2lRO0FBQ3JQO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNRO0FBQ0E7QUFDYztBQUNJO0FBQ3hDO0FBQ3dCO0FBQ2tDO0FBQzFEO0FBQ3FCO0FBQ29CO0FBQ2E7QUFDaEI7QUFDSjtBQUNsQztBQUM0QjtBQUNRO0FBQ1Y7QUFDTDtBQUNRO0FBQytCO0FBQ3RDO0FBQ0Y7QUFDaEI7QUFDd0I7QUFDUTtBQUc5RCxJQUFNd0UsWUFBWSxHQUFHakQsMERBQU0sQ0FBQ2tELElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNoRDdFLDBEQUFBLENBQUNrQyw4REFBTyxFQUFBNkMsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPakQsOERBQWMsQ0FBQ2tELE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLEtBQUs7TUFDdEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzNCQyxRQUFRLEVBQUU7SUFDWjtFQUNGLENBQUM7QUFBQSxDQUFDLENBQUM7QUFFSCxJQUFNQyxZQUFZLEdBQUdwRSwwREFBTSxDQUFDcUUsS0FBQTtFQUFBLElBQUdsQixTQUFTLEdBQUFrQixLQUFBLENBQVRsQixTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQWdCLEtBQUEsRUFBQUMsVUFBQTtFQUFBLG9CQUNoRDdGLDBEQUFBLENBQUNrQyw4REFBTyxFQUFBNkMsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNvQixLQUFBO0VBQUEsSUFBR1gsS0FBSyxHQUFBVyxLQUFBLENBQUxYLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBT2pELDhEQUFjLENBQUNrRCxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxTQUFTO01BQzFCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQztNQUMzQkMsUUFBUSxFQUFFO0lBQ1o7RUFDRixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBQ0gsSUFBTUssS0FBSyxHQUFHO0VBQ1pDLFFBQVEsRUFBRSxVQUFVO0VBQ3BCQyxHQUFHLEVBQUUsS0FBSztFQUNWQyxJQUFJLEVBQUUsS0FBSztFQUNYQyxTQUFTLEVBQUUsdUJBQXVCO0VBQ2xDQyxLQUFLLEVBQUUsR0FBRztFQUNWQyxPQUFPLEVBQUUsa0JBQWtCO0VBQzNCYixTQUFTLEVBQUUsRUFBRTtFQUNiYyxFQUFFLEVBQUUsQ0FBQztFQUNMQyxFQUFFLEVBQUUsQ0FBQztFQUNMQyxFQUFFLEVBQUU7QUFDTixDQUFDO0FBQ0QsSUFBTUMsV0FBVyxHQUFHLEdBQUc7QUFDdkIsSUFBTUMsTUFBTSxHQUFHbkYsMERBQU0sQ0FBQ2EsNkRBQVMsRUFBRTtFQUMvQnVFLGlCQUFpQixFQUFHQyxJQUFJLElBQUtBLElBQUksS0FBSztBQUN4QyxDQUFDLENBQUMsQ0FBQ0MsS0FBQTtFQUFBLElBQUcxQixLQUFLLEdBQUEwQixLQUFBLENBQUwxQixLQUFLO0lBQUUyQixJQUFJLEdBQUFELEtBQUEsQ0FBSkMsSUFBSTtFQUFBLE9BQUFDLGFBQUE7SUFDZkMsTUFBTSxFQUFFN0IsS0FBSyxDQUFDNkIsTUFBTSxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUMvQkMsVUFBVSxFQUFFL0IsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUU7TUFDeERDLE1BQU0sRUFBRWxDLEtBQUssQ0FBQ2dDLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO01BQ3RDQyxRQUFRLEVBQUVwQyxLQUFLLENBQUNnQyxXQUFXLENBQUNJLFFBQVEsQ0FBQ0M7SUFDdkMsQ0FBQztFQUFDLEdBQ0VWLElBQUksSUFBSTtJQUNWVyxVQUFVLEVBQUVoQixXQUFXO0lBQ3ZCTCxLQUFLLGlCQUFBaEIsTUFBQSxDQUFpQnFCLFdBQVcsUUFBSztJQUN0Q1MsVUFBVSxFQUFFL0IsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUU7TUFDeERDLE1BQU0sRUFBRWxDLEtBQUssQ0FBQ2dDLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO01BQ3RDQyxRQUFRLEVBQUVwQyxLQUFLLENBQUNnQyxXQUFXLENBQUNJLFFBQVEsQ0FBQ0c7SUFDdkMsQ0FBQztFQUNILENBQUM7QUFBQSxDQUNELENBQUM7QUFDSCxJQUFNQyxNQUFNLEdBQUdwRywwREFBTSxDQUFDZ0IsNkRBQVMsRUFBRTtFQUFFb0UsaUJBQWlCLEVBQUdDLElBQUksSUFBS0EsSUFBSSxLQUFLO0FBQU8sQ0FBQyxDQUFDLENBQ2hGZ0IsS0FBQTtFQUFBLElBQUd6QyxLQUFLLEdBQUF5QyxLQUFBLENBQUx6QyxLQUFLO0lBQUUyQixJQUFJLEdBQUFjLEtBQUEsQ0FBSmQsSUFBSTtFQUFBLE9BQVE7SUFDcEIsb0JBQW9CLEVBQUFDLGFBQUE7TUFDbEJmLFFBQVEsRUFBRSxVQUFVO01BQ3BCNkIsVUFBVSxFQUFFLFFBQVE7TUFDcEJ6QixLQUFLLEVBQUVLLFdBQVc7TUFDbEJTLFVBQVUsRUFBRS9CLEtBQUssQ0FBQ2dDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUM1Q0MsTUFBTSxFQUFFbEMsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7UUFDdENDLFFBQVEsRUFBRXBDLEtBQUssQ0FBQ2dDLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDRztNQUN2QyxDQUFDLENBQUM7TUFDRkksU0FBUyxFQUFFO0lBQVksR0FDbkIsQ0FBQ2hCLElBQUksSUFBSTtNQUNYaUIsU0FBUyxFQUFFLFFBQVE7TUFDbkJiLFVBQVUsRUFBRS9CLEtBQUssQ0FBQ2dDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUM1Q0MsTUFBTSxFQUFFbEMsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7UUFDdENDLFFBQVEsRUFBRXBDLEtBQUssQ0FBQ2dDLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDQztNQUN2QyxDQUFDLENBQUM7TUFDRnBCLEtBQUssRUFBRWpCLEtBQUssQ0FBQzZDLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDdkIsQ0FBQzdDLEtBQUssQ0FBQzhDLFdBQVcsQ0FBQ0MsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHO1FBQzVCOUIsS0FBSyxFQUFFakIsS0FBSyxDQUFDNkMsT0FBTyxDQUFDLENBQUM7TUFDeEI7SUFDRixDQUFDO0VBRUwsQ0FBQztBQUFBLENBQ0gsQ0FBQztBQUNELFNBQVNHLGdCQUFnQkEsQ0FBQSxFQUFHO0VBQzFCLElBQU1DLFFBQVEsR0FBR2hGLDhEQUFXLENBQUMsQ0FBQztFQUM5QixJQUFNaUYsUUFBUSxHQUFHdkUseURBQVcsQ0FBQyxDQUFDO0VBQzlCLElBQU13RSxJQUFJLEdBQUd2RSx5REFBVyxDQUFDRSx3RUFBaUIsQ0FBQztFQUUzQ2hFLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQU1zSSxZQUFZLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNqRCxJQUFNQyxTQUFTO01BQUEsSUFBQUMsS0FBQSxHQUFBQyxpQkFBQSxDQUFHLGFBQVk7UUFDNUIsSUFBSUwsWUFBWSxFQUFFO1VBQ2hCLElBQUk7WUFDRixJQUFNTSxHQUFHLFNBQVMvRiw4Q0FBSyxDQUFDZ0csR0FBRyxJQUFBMUQsTUFBQSxDQUFJckMscURBQVksd0JBQUFxQyxNQUFBLENBQXFCbUQsWUFBWSxDQUFFLENBQUM7WUFDL0UsSUFBTVEsSUFBSSxHQUFHRixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxZQUFZO1lBQ3ZDLElBQU1DLElBQUksR0FBR0wsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ0csSUFBSTtZQUMvQmQsUUFBUSxDQUFDbkUsa0VBQU8sQ0FBQztjQUFFa0YsUUFBUSxFQUFFTCxJQUFJO2NBQUVJLElBQUksRUFBRUQ7WUFBSyxDQUFDLENBQUMsQ0FBQztVQUNuRCxDQUFDLENBQUMsT0FBTzdFLEtBQUssRUFBRTtZQUNkZ0YsT0FBTyxDQUFDaEYsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7VUFDOUM7UUFDRixDQUFDLE1BQU07VUFDTCtELFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDZjtNQUNGLENBQUM7TUFBQSxnQkFiS00sU0FBU0EsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQVcsS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQWFkO0lBQ0RiLFNBQVMsQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxFQUFFLENBQUNMLFFBQVEsQ0FBQyxDQUFDO0VBRWQsSUFBTW1CLFlBQVksR0FBR0EsQ0FBQSxLQUFNO0lBQ3pCaEIsWUFBWSxDQUFDaUIsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQnBCLFFBQVEsQ0FBQ3JFLGlFQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xCb0UsUUFBUSxDQUFDLEdBQUcsQ0FBQztFQUNmLENBQUM7RUFDRCxJQUFNc0IsTUFBTSxNQUFBdEUsTUFBQSxDQUFNckMscURBQVkscUJBQWtCO0VBQ2hELElBQUE0RyxTQUFBLEdBQWdDekosK0NBQVEsQ0FBQyxNQUFNO01BQzdDLElBQU0wSixJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdkIsT0FBT0QsSUFBSTtJQUNiLENBQUMsQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUosU0FBQTtJQUhLSyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBSTVCLElBQUFJLFVBQUEsR0FBd0NoSywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBaUssVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBN0NqQixZQUFZLEdBQUFrQixVQUFBO0lBQUVDLGVBQWUsR0FBQUQsVUFBQTtFQUNwQyxJQUFBRSxVQUFBLEdBQW9DbkssK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQW9LLFVBQUEsR0FBQVAsY0FBQSxDQUFBTSxVQUFBO0lBQXpDRSxVQUFVLEdBQUFELFVBQUE7SUFBRUUsYUFBYSxHQUFBRixVQUFBO0VBQ2hDLElBQUFHLFVBQUEsR0FBOEN2SywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBd0ssVUFBQSxHQUFBWCxjQUFBLENBQUFVLFVBQUE7SUFBbkRFLGVBQWUsR0FBQUQsVUFBQTtJQUFFRSxrQkFBa0IsR0FBQUYsVUFBQTtFQUMxQyxJQUFBRyxVQUFBLEdBQTBDM0ssK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTRLLFVBQUEsR0FBQWYsY0FBQSxDQUFBYyxVQUFBO0lBQS9DRSxhQUFhLEdBQUFELFVBQUE7SUFBRUUsZ0JBQWdCLEdBQUFGLFVBQUE7RUFDdEMsSUFBQUcsVUFBQSxHQUEwQy9LLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFnTCxXQUFBLEdBQUFuQixjQUFBLENBQUFrQixVQUFBO0lBQS9DRSxhQUFhLEdBQUFELFdBQUE7SUFBRUUsZ0JBQWdCLEdBQUFGLFdBQUE7RUFDdEMsSUFBQUcsV0FBQSxHQUF3Q25MLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFvTCxXQUFBLEdBQUF2QixjQUFBLENBQUFzQixXQUFBO0lBQTdDRSxZQUFZLEdBQUFELFdBQUE7SUFBRUUsZUFBZSxHQUFBRixXQUFBO0VBQ3BDLElBQUFHLFdBQUEsR0FBb0N2TCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBd0wsV0FBQSxHQUFBM0IsY0FBQSxDQUFBMEIsV0FBQTtJQUF6Q0UsVUFBVSxHQUFBRCxXQUFBO0lBQUVFLGFBQWEsR0FBQUYsV0FBQTtFQUNoQyxJQUFBRyxXQUFBLEdBQTRDM0wsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTRMLFdBQUEsR0FBQS9CLGNBQUEsQ0FBQThCLFdBQUE7SUFBakRFLGNBQWMsR0FBQUQsV0FBQTtJQUFFRSxpQkFBaUIsR0FBQUYsV0FBQTtFQUN4QyxJQUFBRyxXQUFBLEdBQXNDL0wsK0NBQVEsQ0FBQyxNQUFNO01BQ25ELElBQU0wSixJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdkIsT0FBT0QsSUFBSTtJQUNiLENBQUMsQ0FBQztJQUFBc0MsV0FBQSxHQUFBbkMsY0FBQSxDQUFBa0MsV0FBQTtJQUhLRSxXQUFXLEdBQUFELFdBQUE7SUFBRUUsY0FBYyxHQUFBRixXQUFBO0VBSWxDLElBQUFHLFdBQUEsR0FBNEJuTSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBb00sV0FBQSxHQUFBdkMsY0FBQSxDQUFBc0MsV0FBQTtJQUFqQ0UsTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUN4QixJQUFBRyxXQUFBLEdBQTBDdk0sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXdNLFdBQUEsR0FBQTNDLGNBQUEsQ0FBQTBDLFdBQUE7SUFBL0NFLGFBQWEsR0FBQUQsV0FBQTtJQUFFRSxnQkFBZ0IsR0FBQUYsV0FBQTtFQUN0QyxJQUFBRyxXQUFBLEdBQW9DM00sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTRNLFdBQUEsR0FBQS9DLGNBQUEsQ0FBQThDLFdBQUE7SUFBekNFLFVBQVUsR0FBQUQsV0FBQTtJQUFFRSxhQUFhLEdBQUFGLFdBQUE7RUFDaEMsSUFBQUcsV0FBQSxHQUFnRC9NLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFnTixXQUFBLEdBQUFuRCxjQUFBLENBQUFrRCxXQUFBO0lBQXJERSxnQkFBZ0IsR0FBQUQsV0FBQTtJQUFFRSxtQkFBbUIsR0FBQUYsV0FBQTtFQUM1QyxJQUFBRyxXQUFBLEdBQW9Dbk4sK0NBQVEsQ0FBQyxNQUFNO01BQ2pELElBQU0wSixJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdkIsT0FBT0QsSUFBSTtJQUNiLENBQUMsQ0FBQztJQUFBMEQsV0FBQSxHQUFBdkQsY0FBQSxDQUFBc0QsV0FBQTtJQUhLRSxVQUFVLEdBQUFELFdBQUE7SUFBRUUsYUFBYSxHQUFBRixXQUFBO0VBSWhDLElBQUFHLFdBQUEsR0FBNEJ2TiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBd04sV0FBQSxHQUFBM0QsY0FBQSxDQUFBMEQsV0FBQTtJQUFoQ0UsTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUN4QixJQUFBRyxXQUFBLEdBQXNDM04sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTROLFdBQUEsR0FBQS9ELGNBQUEsQ0FBQThELFdBQUE7SUFBM0NFLFdBQVcsR0FBQUQsV0FBQTtJQUFFRSxjQUFjLEdBQUFGLFdBQUE7RUFDbEMsSUFBQUcsV0FBQSxHQUE0Qi9OLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFnTyxXQUFBLEdBQUFuRSxjQUFBLENBQUFrRSxXQUFBO0lBQWpDRSxNQUFNLEdBQUFELFdBQUE7SUFBRUUsU0FBUyxHQUFBRixXQUFBO0VBQ3hCLElBQUFHLFdBQUEsR0FBa0NuTywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBb08sV0FBQSxHQUFBdkUsY0FBQSxDQUFBc0UsV0FBQTtJQUF2Q0UsU0FBUyxHQUFBRCxXQUFBO0lBQUVFLFlBQVksR0FBQUYsV0FBQTtFQUM5QixJQUFBRyxXQUFBLEdBQWdDdk8sK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQXdPLFdBQUEsR0FBQTNFLGNBQUEsQ0FBQTBFLFdBQUE7SUFBeENFLFFBQVEsR0FBQUQsV0FBQTtJQUFFRSxXQUFXLEdBQUFGLFdBQUE7RUFDNUIsSUFBQUcsV0FBQSxHQUFnQzNPLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE0TyxXQUFBLEdBQUEvRSxjQUFBLENBQUE4RSxXQUFBO0lBQXJDRSxRQUFRLEdBQUFELFdBQUE7SUFBRUUsV0FBVyxHQUFBRixXQUFBO0VBQzVCLElBQUFHLFdBQUEsR0FBa0QvTywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBZ1AsV0FBQSxHQUFBbkYsY0FBQSxDQUFBa0YsV0FBQTtJQUF2REUsaUJBQWlCLEdBQUFELFdBQUE7SUFBRUUsb0JBQW9CLEdBQUFGLFdBQUE7RUFDOUMsSUFBQUcsV0FBQSxHQUEwQm5QLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFvUCxXQUFBLEdBQUF2RixjQUFBLENBQUFzRixXQUFBO0lBQTlCRSxLQUFLLEdBQUFELFdBQUE7SUFBRUUsUUFBUSxHQUFBRixXQUFBO0VBQ3RCLElBQUFHLFdBQUEsR0FBZ0R2UCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBd1AsV0FBQSxHQUFBM0YsY0FBQSxDQUFBMEYsV0FBQTtJQUFwREUsZ0JBQWdCLEdBQUFELFdBQUE7SUFBRUUsbUJBQW1CLEdBQUFGLFdBQUE7RUFDNUMsSUFBQUcsV0FBQSxHQUFrQzNQLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUE0UCxXQUFBLEdBQUEvRixjQUFBLENBQUE4RixXQUFBO0lBQXRDRSxTQUFTLEdBQUFELFdBQUE7SUFBRUUsWUFBWSxHQUFBRixXQUFBO0VBQzlCLElBQUFHLFdBQUEsR0FBNEMvUCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBZ1EsV0FBQSxHQUFBbkcsY0FBQSxDQUFBa0csV0FBQTtJQUFoREUsY0FBYyxHQUFBRCxXQUFBO0lBQUVFLGlCQUFpQixHQUFBRixXQUFBO0VBQ3hDLElBQUFHLFdBQUEsR0FBNEJuUSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBb1EsV0FBQSxHQUFBdkcsY0FBQSxDQUFBc0csV0FBQTtJQUFqQ0UsTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUN4QixJQUFBRyxXQUFBLEdBQTZCdlEsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXdRLFdBQUEsR0FBQTNHLGNBQUEsQ0FBQTBHLFdBQUE7SUFBbENFLE9BQU8sR0FBQUQsV0FBQTtJQUFFRSxTQUFTLEdBQUFGLFdBQUE7RUFDekIsSUFBQUcsV0FBQSxHQUFnQzNRLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE0USxXQUFBLEdBQUEvRyxjQUFBLENBQUE4RyxXQUFBO0lBQXJDRSxRQUFRLEdBQUFELFdBQUE7SUFBRUUsV0FBVyxHQUFBRixXQUFBO0VBRTVCN1EsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBTWdSLFdBQVc7TUFBQSxJQUFBQyxLQUFBLEdBQUF0SSxpQkFBQSxDQUFHLGFBQVk7UUFDOUIsSUFBSTtVQUFBLElBQUF1SSxpQkFBQTtVQUNGLElBQU1DLFdBQVcsU0FBU3RPLDhDQUFLLENBQUNnRyxHQUFHLElBQUExRCxNQUFBLENBQUlyQyxxREFBWSxnQkFBYSxDQUFDO1VBQ2pFLElBQU1zTyxhQUFhLEdBQUc3SSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUk7VUFDcEUsSUFBTTZJLGFBQWEsR0FBRyxDQUFDLEVBQUFILGlCQUFBLEdBQUFDLFdBQVcsQ0FBQ3BJLElBQUksY0FBQW1JLGlCQUFBLHVCQUFoQkEsaUJBQUEsQ0FBa0JuSSxJQUFJLEtBQUksRUFBRSxFQUFFdUksTUFBTSxDQUFDQyxDQUFDLElBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxRQUFRLElBQUlELENBQUMsQ0FBQ0MsUUFBUSxLQUFLSixhQUFhLENBQUM7VUFDN0dMLFdBQVcsQ0FBQ00sYUFBYSxDQUFDO1VBRTFCLElBQU1JLFVBQVUsU0FBUzVPLDhDQUFLLENBQUNnRyxHQUFHLElBQUExRCxNQUFBLENBQUlyQyxxREFBWSw2QkFBMEIsQ0FBQztVQUM3RSxJQUFJMk8sVUFBVSxJQUFJQSxVQUFVLENBQUMxSSxJQUFJLElBQUkwSSxVQUFVLENBQUMxSSxJQUFJLENBQUN1QixVQUFVLEVBQUU7WUFDL0QsSUFBTW9ILFNBQVMsR0FBR0MsTUFBTSxDQUFDRixVQUFVLENBQUMxSSxJQUFJLENBQUN1QixVQUFVLENBQUM7WUFDcEQsSUFBTXNILEtBQUssR0FBR0YsU0FBUyxDQUFDRSxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3BDLElBQU1DLE9BQU8sR0FBR0QsS0FBSyxHQUFHRSxRQUFRLENBQUNGLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUN0RHJILGFBQWEsQ0FBQ3NILE9BQU8sQ0FBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQztVQUNuQyxDQUFDLE1BQU07WUFDTHhILGFBQWEsQ0FBQyxHQUFHLENBQUM7VUFDcEI7UUFDRixDQUFDLENBQUMsT0FBT25HLEtBQUssRUFBRTtVQUNkZ0YsT0FBTyxDQUFDaEYsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7UUFDOUM7TUFDRixDQUFDO01BQUEsZ0JBbkJLNE0sV0FBV0EsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQTVILEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUEsR0FtQmhCO0lBQ0QwSCxXQUFXLENBQUMsQ0FBQztFQUNmLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNZ0IsY0FBYyxHQUFJQyxDQUFDLElBQUs7SUFDNUJBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEJ2RCxXQUFXLENBQUMsSUFBSSxDQUFDO0VBQ25CLENBQUM7RUFDRCxJQUFNd0QsZUFBZSxHQUFHQSxDQUFBLEtBQU07SUFDNUJ4RCxXQUFXLENBQUMsS0FBSyxDQUFDO0VBQ3BCLENBQUM7RUFDRCxTQUFTeUQsWUFBWUEsQ0FBQ0gsQ0FBQyxFQUFFO0lBQ3ZCLElBQUlJLE1BQU0sR0FBRyxJQUFJQyxVQUFVLENBQUMsQ0FBQztJQUM3QkQsTUFBTSxDQUFDRSxhQUFhLENBQUNOLENBQUMsQ0FBQ08sTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkNKLE1BQU0sQ0FBQ0ssTUFBTSxHQUFHLE1BQU07TUFDcEJ2RSxTQUFTLENBQUNrRSxNQUFNLENBQUNNLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBQ0ROLE1BQU0sQ0FBQ08sT0FBTyxHQUFHeE8sS0FBSyxJQUFJO01BQ3hCZ0YsT0FBTyxDQUFDeUosR0FBRyxDQUFDLE9BQU8sRUFBRXpPLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0RtSyxZQUFZLENBQUMwRCxDQUFDLENBQUNPLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2pDO0VBQ0EsSUFBTUssZUFBZSxHQUFHQSxDQUFBLEtBQU07SUFDNUIzRSxTQUFTLENBQUMsRUFBRSxDQUFDO0VBQ2YsQ0FBQztFQUNELElBQUE0RSxXQUFBLEdBQThCOVMsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQStTLFdBQUEsR0FBQWxKLGNBQUEsQ0FBQWlKLFdBQUE7SUFBdENFLE9BQU8sR0FBQUQsV0FBQTtJQUFFRSxVQUFVLEdBQUFGLFdBQUE7RUFDMUIsSUFBQUcsV0FBQSxHQUFnRGxULCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFtVCxXQUFBLEdBQUF0SixjQUFBLENBQUFxSixXQUFBO0lBQXhERSxnQkFBZ0IsR0FBQUQsV0FBQTtJQUFFRSxtQkFBbUIsR0FBQUYsV0FBQTtFQUM1QyxJQUFBRyxXQUFBLEdBQTRDdFQsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQXVULFdBQUEsR0FBQTFKLGNBQUEsQ0FBQXlKLFdBQUE7SUFBcERFLGNBQWMsR0FBQUQsV0FBQTtJQUFFRSxpQkFBaUIsR0FBQUYsV0FBQTtFQUV4QyxJQUFNRyxVQUFVLEdBQUdBLENBQUEsS0FBTTtJQUV2QkwsbUJBQW1CLENBQUMsSUFBSSxDQUFDO0lBQ3pCSixVQUFVLENBQUMsSUFBSSxDQUFDO0lBRWhCVSxVQUFVLENBQUMsTUFBTTtNQUNmVixVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUMsRUFBRSxHQUFHLENBQUM7RUFFVCxDQUFDO0VBQ0QsSUFBQVcsV0FBQSxHQUFvQzVULCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE2VCxXQUFBLEdBQUFoSyxjQUFBLENBQUErSixXQUFBO0lBQTVDRSxVQUFVLEdBQUFELFdBQUE7SUFBRUUsYUFBYSxHQUFBRixXQUFBO0VBRWhDLElBQU1HLDRCQUE0QixHQUFHQSxDQUFBLEtBQU07SUFDekNELGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDckIsQ0FBQztFQUNELElBQU1FLDZCQUE2QixHQUFHQSxDQUFBLEtBQU07SUFDMUNGLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDdEIsQ0FBQztFQUNELElBQU1HLFlBQVksR0FBSWxDLENBQUMsSUFBSztJQUMxQixJQUFNbUMsUUFBUSxHQUFHbkMsQ0FBQyxDQUFDTyxNQUFNLENBQUM2QixLQUFLO0lBQy9COUQsU0FBUyxDQUFDNkQsUUFBUSxDQUFDO0lBQ25CLElBQUlBLFFBQVEsRUFBRTtNQUNaSCw0QkFBNEIsQ0FBQyxDQUFDO0lBQ2hDO0VBQ0YsQ0FBQztFQUNELElBQU1LLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0lBQ3hCWixpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDdkJSLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDaEJVLFVBQVUsQ0FBQyxNQUFNO01BQ2ZWLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNULENBQUM7RUFDRCxJQUFBcUIsV0FBQSxHQUFrRHRVLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUF1VSxXQUFBLEdBQUExSyxjQUFBLENBQUF5SyxXQUFBO0lBQTFERSxpQkFBaUIsR0FBQUQsV0FBQTtJQUFFRSxvQkFBb0IsR0FBQUYsV0FBQTtFQUM5QyxJQUFBRyxXQUFBLEdBQWdEMVUsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTJVLFdBQUEsR0FBQTlLLGNBQUEsQ0FBQTZLLFdBQUE7SUFBeERFLGdCQUFnQixHQUFBRCxXQUFBO0lBQUVFLG1CQUFtQixHQUFBRixXQUFBO0VBQzVDLElBQU1HLDJCQUEyQixHQUFJOUMsQ0FBQyxJQUFLO0lBQ3pDQSxDQUFDLENBQUMrQyxlQUFlLENBQUMsQ0FBQztJQUNuQk4sb0JBQW9CLENBQUMsSUFBSSxDQUFDO0VBQzVCLENBQUM7RUFDRCxJQUFNTyw0QkFBNEIsR0FBR0EsQ0FBQSxLQUFNO0lBQ3pDUCxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7SUFDM0JJLG1CQUFtQixDQUFDLEtBQUssQ0FBQztFQUM1QixDQUFDO0VBRUQsSUFBTUksV0FBVyxHQUFHQSxDQUFBLEtBQU07SUFDeEI1QixtQkFBbUIsQ0FBQyxLQUFLLENBQUM7SUFDMUI2QixNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDeEI7SUFDQWxMLGVBQWUsQ0FBQyxFQUFFLENBQUM7SUFDbkJJLGFBQWEsQ0FBQyxFQUFFLENBQUM7SUFDakJJLGtCQUFrQixDQUFDLEVBQUUsQ0FBQztJQUN0QkksZ0JBQWdCLENBQUMsRUFBRSxDQUFDO0lBQ3BCSSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7SUFDcEJJLGVBQWUsQ0FBQyxFQUFFLENBQUM7SUFDbkJJLGFBQWEsQ0FBQyxFQUFFLENBQUM7SUFDakJnQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ1pJLGNBQWMsQ0FBQyxFQUFFLENBQUM7SUFDbEJJLFNBQVMsQ0FBQyxFQUFFLENBQUM7SUFDYlksV0FBVyxDQUFDLEVBQUUsQ0FBQztJQUNmSSxvQkFBb0IsQ0FBQyxFQUFFLENBQUM7SUFDeEJJLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDWEksbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ3RCSSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2ZJLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNwQkksU0FBUyxDQUFDLEVBQUUsQ0FBQztJQUNiSSxTQUFTLENBQUMsRUFBRSxDQUFDO0lBQ2IyRSxTQUFTLENBQUMsRUFBRSxDQUFDO0VBQ2YsQ0FBQztFQUNELElBQU1DLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07SUFDN0I3QixpQkFBaUIsQ0FBQyxLQUFLLENBQUM7RUFDMUIsQ0FBQztFQUNELElBQU04QixjQUFjLEdBQUlyTixRQUFRLElBQUs7SUFDbkM7SUFDQSxJQUFJQSxRQUFRLEtBQUssVUFBVSxFQUFFO01BQzNCZ04sTUFBTSxDQUFDTSxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsTUFBTSxJQUFJdk4sUUFBUSxLQUFLLE1BQU0sRUFBRTtNQUM5QitNLFdBQVcsQ0FBQyxDQUFDO0lBQ2Y7RUFDRixDQUFDO0VBQ0QsSUFBTVMsZUFBZSxHQUFHQSxDQUFBLEtBQU07SUFDNUJiLG1CQUFtQixDQUFDLElBQUksQ0FBQztJQUN6QjVCLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDaEJVLFVBQVUsQ0FBQyxNQUFNO01BQ2ZWLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNULENBQUM7RUFFRCxJQUFNMEMsV0FBVyxHQUFHLElBQUloTSxJQUFJLENBQUMsQ0FBQztFQUU5QixJQUFNaU0sb0JBQW9CO0lBQUEsSUFBQUMsS0FBQSxHQUFBbk4saUJBQUEsQ0FBRyxXQUFPc0osQ0FBQyxFQUFLO01BQ3hDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ2xCLElBQU1uSixJQUFJLEdBQUc7UUFDWDJDLFVBQVUsRUFBRUksY0FBYztRQUMxQjBGLFFBQVEsRUFBRWpKLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUk7TUFDdEQsQ0FBQztNQUNELElBQUk7UUFDRixJQUFNSSxHQUFHLFNBQVMvRiw4Q0FBSyxDQUFDa1QsSUFBSSxJQUFBNVEsTUFBQSxDQUFJckMscURBQVkseUJBQXNCaUcsSUFBSSxDQUFDO1FBQ3ZFLElBQUlILEdBQUcsRUFBRTtVQUNQK00sZUFBZSxDQUFDLENBQUM7VUFDakI1RSxXQUFXLENBQUMsQ0FBQyxHQUFHRCxRQUFRLEVBQUVsSSxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUM7UUFDM0M7TUFDRixDQUFDLENBQUMsT0FBTzNFLEtBQUssRUFBRTtRQUNkLElBQUlBLEtBQUssRUFBRTtVQUNUNFIsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1FBQzVCO01BQ0Y7SUFDRixDQUFDO0lBQUEsZ0JBakJLSCxvQkFBb0JBLENBQUFJLEVBQUE7TUFBQSxPQUFBSCxLQUFBLENBQUF6TSxLQUFBLE9BQUFDLFNBQUE7SUFBQTtFQUFBLEdBaUJ6QjtFQUVELElBQU00TSxpQkFBaUI7SUFBQSxJQUFBQyxLQUFBLEdBQUF4TixpQkFBQSxDQUFHLGFBQVk7TUFDcEMsSUFBTXlOLFFBQVEsR0FBRyxJQUFJQyxRQUFRLENBQUMsQ0FBQztNQUMvQkQsUUFBUSxDQUFDRSxNQUFNLENBQUMsT0FBTyxFQUFFaEksU0FBUyxDQUFDO01BQ25DOEgsUUFBUSxDQUFDRSxNQUFNLENBQUMsY0FBYyxFQUFFdE4sWUFBWSxDQUFDO01BQzdDLElBQUk7UUFDRixJQUFNSixHQUFHLFNBQVMvRiw4Q0FBSyxDQUFDa1QsSUFBSSxJQUFBNVEsTUFBQSxDQUFJckMscURBQVksb0JBQWlCc1QsUUFBUSxFQUFFO1VBQ3JFRyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUU7VUFDbEI7UUFDRixDQUFDLENBQUM7UUFDRjtNQUNGLENBQUMsQ0FBQyxPQUFPblMsS0FBSyxFQUFFO1FBQ2RnRixPQUFPLENBQUN5SixHQUFHLENBQUMsT0FBTyxFQUFFek8sS0FBSyxDQUFDO01BQzdCO0lBQ0YsQ0FBQztJQUFBLGdCQWRLOFIsaUJBQWlCQSxDQUFBO01BQUEsT0FBQUMsS0FBQSxDQUFBOU0sS0FBQSxPQUFBQyxTQUFBO0lBQUE7RUFBQSxHQWN0QjtFQUNELElBQU1rTix3QkFBd0I7SUFBQSxJQUFBQyxLQUFBLEdBQUE5TixpQkFBQSxDQUFHLFdBQU8rTixhQUFhLEVBQUs7TUFDeEQsSUFBTTNOLElBQUksR0FBRztRQUNYNE4sTUFBTSxFQUFFRCxhQUFhO1FBQ3JCRSxNQUFNLEVBQUV2TyxJQUFJLENBQUNVLElBQUksQ0FBQ0ksUUFBUSxHQUFHLG9CQUFvQjtRQUNqRDBOLE1BQU0sRUFBRSxNQUFNLEdBQUdsRixNQUFNLENBQUNySCxVQUFVLENBQUMsQ0FBQ3dNLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHOU4sWUFBWTtRQUN6RStOLGdCQUFnQixFQUFFbkI7TUFDcEIsQ0FBQztNQUNELElBQUk7UUFDRixNQUFNL1MsOENBQUssQ0FBQ2tULElBQUksSUFBQTVRLE1BQUEsQ0FBSXJDLHFEQUFZLDJCQUF3QmlHLElBQUksQ0FBQztNQUMvRCxDQUFDLENBQUMsT0FBTzNFLEtBQUssRUFBRTtRQUNkZ0YsT0FBTyxDQUFDeUosR0FBRyxDQUFDek8sS0FBSyxDQUFDO01BQ3BCO0lBQ0YsQ0FBQztJQUFBLGdCQVpLb1Msd0JBQXdCQSxDQUFBUSxHQUFBO01BQUEsT0FBQVAsS0FBQSxDQUFBcE4sS0FBQSxPQUFBQyxTQUFBO0lBQUE7RUFBQSxHQVk3QjtFQUNELElBQUEyTixXQUFBLEdBQTRCaFgsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWlYLFdBQUEsR0FBQXBOLGNBQUEsQ0FBQW1OLFdBQUE7SUFBakNFLE1BQU0sR0FBQUQsV0FBQTtJQUFFNUIsU0FBUyxHQUFBNEIsV0FBQTtFQUN4QixJQUFNRSxZQUFZO0lBQUEsSUFBQUMsTUFBQSxHQUFBMU8saUJBQUEsQ0FBRyxXQUFPc0osQ0FBQyxFQUFLO01BQ2hDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ2xCb0QsU0FBUyxDQUFDLE1BQU0sQ0FBQztNQUNqQixJQUFNdk0sSUFBSSxHQUFHO1FBQ1h1TyxHQUFHLEVBQUVwVSxpREFBRSxDQUFDLENBQUM7UUFDVDZHLFFBQVE7UUFDUmYsWUFBWTtRQUNaMEIsZUFBZTtRQUNmSSxhQUFhO1FBQ2JJLGFBQWE7UUFDYkksWUFBWTtRQUNaSSxVQUFVO1FBQ1ZRLFdBQVc7UUFDWEksTUFBTTtRQUNOZ0UsTUFBTTtRQUNONUQsYUFBYTtRQUNiSSxVQUFVO1FBQ1ZJLGdCQUFnQjtRQUNoQkksVUFBVTtRQUNWSSxNQUFNO1FBQ05nRCxPQUFPO1FBQ1A1QyxXQUFXO1FBQUVvQixpQkFBaUI7UUFBRUosUUFBUTtRQUN4Q3hFLFVBQVU7UUFBRWdGLEtBQUs7UUFBRUksZ0JBQWdCO1FBQUVJLFNBQVM7UUFBRUksY0FBYztRQUFFcUgsTUFBTSxFQUFFO01BQzFFLENBQUM7TUFDRCxJQUFJO1FBQ0YsSUFBTTNPLEdBQUcsU0FBUy9GLDhDQUFLLENBQUNrVCxJQUFJLENBQUN0TSxNQUFNLEVBQUU7VUFBRU0sUUFBUTtVQUFFZixZQUFZO1VBQUUwQixlQUFlO1VBQUVJLGFBQWE7VUFBRUksYUFBYTtVQUFFSSxZQUFZO1VBQUVJLFVBQVU7VUFBRVEsV0FBVztVQUFFSSxNQUFNO1VBQUVnRSxNQUFNO1VBQUU1RCxhQUFhO1VBQUVJLFVBQVU7VUFBRUksZ0JBQWdCO1VBQUVJLFVBQVU7VUFBRUksTUFBTTtVQUFFZ0QsT0FBTztVQUFFNUMsV0FBVztVQUFFb0IsaUJBQWlCO1VBQUVKLFFBQVE7VUFBRXhFLFVBQVU7VUFBRWdGLEtBQUs7VUFBRUksZ0JBQWdCO1VBQUVJLFNBQVM7VUFBRUksY0FBYztVQUFFc0IsUUFBUSxFQUFFakosWUFBWSxDQUFDQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSTtRQUFLLENBQUMsQ0FBQztRQUNwWixJQUFJSSxHQUFHLEVBQUU7VUFDUCtLLFVBQVUsQ0FBQyxDQUFDO1VBQ1osSUFBSXJGLFNBQVMsRUFBRTRILGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3BDLElBQU1RLGFBQWEsR0FBRzlOLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUN1TyxHQUFHO1VBQ3ZDO1VBQ0FkLHdCQUF3QixDQUFDRSxhQUFhLENBQUM7UUFDekM7TUFDRixDQUFDLENBQUMsT0FBT3RTLEtBQUssRUFBRTtRQUNkLElBQUlBLEtBQUssRUFBRTtVQUNUa1IsU0FBUyxDQUFDLEVBQUUsQ0FBQztVQUNiaEIsV0FBVyxDQUFDLENBQUM7UUFDZjtNQUNGO0lBRUYsQ0FBQztJQUFBLGdCQXhDSzhDLFlBQVlBLENBQUFJLEdBQUE7TUFBQSxPQUFBSCxNQUFBLENBQUFoTyxLQUFBLE9BQUFDLFNBQUE7SUFBQTtFQUFBLEdBd0NqQjtFQUNELElBQUFtTyxlQUFBLEdBQThCMVgscURBQWMsQ0FBQyxJQUFJLENBQUM7SUFBQTJYLGdCQUFBLEdBQUE1TixjQUFBLENBQUEyTixlQUFBO0lBQTNDRSxPQUFPLEdBQUFELGdCQUFBO0lBQUVFLFVBQVUsR0FBQUYsZ0JBQUE7RUFDMUIsSUFBTUcsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDekJELFVBQVUsQ0FBQyxDQUFDRCxPQUFPLENBQUM7RUFDdEIsQ0FBQztFQUNELG9CQUNFNVgsMERBQUE7SUFBSzBFLFNBQVMsRUFBQztFQUFjLGdCQUMzQjFFLDBEQUFBLENBQUN3QixxREFBRztJQUFDdVcsRUFBRSxFQUFFO01BQUVDLE9BQU8sRUFBRTtJQUFPO0VBQUUsZ0JBQzNCaFksMERBQUEsQ0FBQ3NDLGtFQUFXLE1BQUUsQ0FBQyxlQUNmdEMsMERBQUEsQ0FBQzBHLE1BQU07SUFBQ1YsUUFBUSxFQUFDLFVBQVU7SUFBQ2MsSUFBSSxFQUFFOFEsT0FBUTtJQUFDRyxFQUFFLEVBQUU7TUFBRXpTLGVBQWUsRUFBRTtJQUFVO0VBQUUsZ0JBQzVFdEYsMERBQUEsQ0FBQ3FDLDhEQUFPO0lBQ04wVixFQUFFLEVBQUU7TUFDRkUsRUFBRSxFQUFFLE1BQU0sQ0FBRTtJQUNkO0VBQUUsZ0JBRUZqWSwwREFBQSxDQUFDVSxxREFBVTtJQUNUd1gsSUFBSSxFQUFDLE9BQU87SUFDWjNTLEtBQUssRUFBQyxTQUFTO0lBQ2YsY0FBVyxhQUFhO0lBQ3hCNFMsT0FBTyxFQUFFTCxZQUFhO0lBQ3RCQyxFQUFFLEVBQUFoUixhQUFBO01BQ0FxUixXQUFXLEVBQUU7SUFBTSxHQUNmUixPQUFPLElBQUk7TUFBRUksT0FBTyxFQUFFO0lBQU8sQ0FBQztFQUNsQyxnQkFFRmhZLDBEQUFBLENBQUMyQyxpRUFBUSxNQUFFLENBQ0QsQ0FBQyxlQUNiM0MsMERBQUEsQ0FBQ3FCLHFEQUFVO0lBQ1RnWCxTQUFTLEVBQUMsSUFBSTtJQUNkQyxPQUFPLEVBQUMsSUFBSTtJQUNaL1MsS0FBSyxFQUFDLFNBQVM7SUFDZmdULE1BQU07SUFDTlIsRUFBRSxFQUFFO01BQUVTLFFBQVEsRUFBRTtJQUFFO0VBQUUsR0FDckIsa0JBRVcsQ0FBQyxlQUNieFksMERBQUEsQ0FBQ1UscURBQVU7SUFBQ3lYLE9BQU8sRUFBRWxHO0VBQWUsZ0JBQ2xDalMsMERBQUEsQ0FBQzBELHNFQUFTO0lBQUNxQyxLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFO0lBQVE7RUFBRSxDQUFFLENBQzdCLENBQUMsZUFDYnZGLDBEQUFBLENBQUN1RSw4REFBb0IsTUFBRSxDQUFDLGVBQ3hCdkUsMERBQUEsQ0FBQ3NFLDBEQUFnQjtJQUFDbVUsSUFBSSxFQUFFblEsSUFBSSxDQUFDVSxJQUFJLENBQUNJLFFBQVM7SUFBQ0QsSUFBSSxFQUFFYixJQUFJLENBQUNVLElBQUksQ0FBQ0c7RUFBSyxDQUFFLENBQUMsZUFDcEVuSiwwREFBQSxDQUFDcUIscURBQVU7SUFBQzBXLEVBQUUsRUFBRTtNQUFFdFEsVUFBVSxFQUFFLE1BQU07TUFBRTJRLFdBQVcsRUFBRTtJQUFPO0VBQUUsR0FBRTlQLElBQUksQ0FBQ1UsSUFBSSxDQUFDSSxRQUFxQixDQUFDLGVBQzlGcEosMERBQUEsQ0FBQ1UscURBQVU7SUFBQzZFLEtBQUssRUFBQyxTQUFTO0lBQUM0UyxPQUFPLEVBQUUzTztFQUFhLGdCQUNoRHhKLDBEQUFBLENBQUNtRSxtRUFBTTtJQUFDNEIsS0FBSyxFQUFFO01BQUVSLEtBQUssRUFBRTtJQUFRO0VBQUUsQ0FBRSxDQUMxQixDQUNMLENBQ0gsQ0FBQyxlQUNUdkYsMERBQUEsQ0FBQzJILE1BQU07SUFBQzJRLE9BQU8sRUFBQyxXQUFXO0lBQUN4UixJQUFJLEVBQUU4UTtFQUFRLGdCQUN4QzVYLDBEQUFBLENBQUNxQyw4REFBTztJQUNOMFYsRUFBRSxFQUFFO01BQ0ZDLE9BQU8sRUFBRSxNQUFNO01BQ2ZVLFVBQVUsRUFBRSxRQUFRO01BQ3BCQyxjQUFjLEVBQUUsVUFBVTtNQUMxQnBTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUjtFQUFFLGdCQUVGdkcsMERBQUEsQ0FBQ1UscURBQVU7SUFBQ3lYLE9BQU8sRUFBRUw7RUFBYSxnQkFDaEM5WCwwREFBQSxDQUFDNEMsd0VBQWUsTUFBRSxDQUNSLENBQ0wsQ0FBQyxlQUNWNUMsMERBQUEsQ0FBQ2lDLHFEQUFPLE1BQUUsQ0FBQyxlQUNYakMsMERBQUEsQ0FBQ3dDLDJEQUFJO0lBQUN1VixFQUFFLEVBQUU7TUFBRWEsTUFBTSxFQUFFO0lBQVE7RUFBRSxnQkFDNUI1WSwwREFBQSxDQUFDRyxnRUFBYSxNQUFFLENBQ1osQ0FDQSxDQUFDLGVBQ1RILDBEQUFBLENBQUN3QixxREFBRztJQUNGNlcsU0FBUyxFQUFDLE1BQU07SUFDaEJOLEVBQUUsRUFBRTtNQUNGelMsZUFBZSxFQUFHSCxLQUFLLElBQ3JCQSxLQUFLLENBQUMwVCxPQUFPLENBQUNDLElBQUksS0FBSyxPQUFPLEdBQzFCM1QsS0FBSyxDQUFDMFQsT0FBTyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQ3ZCNVQsS0FBSyxDQUFDMFQsT0FBTyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDO01BQzdCUCxRQUFRLEVBQUUsQ0FBQztNQUNYcFMsS0FBSyxFQUFFLE1BQU07TUFDYndTLE1BQU0sRUFBRSxPQUFPO01BQ2ZJLFFBQVEsRUFBRTtJQUNaO0VBQUUsZ0JBRUZoWiwwREFBQSxDQUFDcUMsOERBQU8sTUFBRSxDQUFDLGVBQ1hyQywwREFBQSxDQUFDMEMsZ0VBQVM7SUFBQ3VXLFFBQVEsRUFBQyxNQUFNO0lBQUNsQixFQUFFLEVBQUU7TUFBRW1CLEVBQUUsRUFBRTtJQUFFO0VBQUUsZ0JBQ3ZDbFosMERBQUEsMkJBQ0VBLDBEQUFBO0lBQU1tWixRQUFRLEVBQUU5QjtFQUFhLGdCQUMzQnJYLDBEQUFBLENBQUNTLHFEQUFJO0lBQUMyWSxTQUFTO0lBQUNyVCxLQUFLLEVBQUU7TUFBRTJTLFVBQVUsRUFBRSxRQUFRO01BQUVXLE9BQU8sRUFBRTtJQUFPLENBQUU7SUFBQ3JSLE9BQU8sRUFBRSxDQUFFO0lBQUNxUSxTQUFTLEVBQUV0WCxxREFBS0E7RUFBQyxnQkFDN0ZmLDBEQUFBLENBQUNTLHFEQUFJO0lBQUM2WSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNoQnZaLDBEQUFBLENBQUNxQixxREFBVTtJQUFDaVgsT0FBTyxFQUFDO0VBQUksR0FBQyxzQkFBZ0MsQ0FDckQsQ0FBQyxlQUNQdFksMERBQUEsQ0FBQ1MscURBQUk7SUFBQzZZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCdlosMERBQUEsQ0FBQ3NELDJGQUFvQjtJQUFDa1csV0FBVyxFQUFFalcsMkVBQVlBO0VBQUMsZ0JBQzlDdkQsMERBQUEsQ0FBQ3FELDhFQUFhO0lBQUNvVyxVQUFVLEVBQUUsQ0FBQyxZQUFZO0VBQUUsZ0JBQ3hDelosMERBQUEsQ0FBQ3dELHVFQUFVO0lBQ1RrVyxRQUFRO0lBQ1JqQixJQUFJLEVBQUMsVUFBVTtJQUNma0IsS0FBSyxFQUFDLFdBQVc7SUFDakJyRixLQUFLLEVBQUU3USw2Q0FBSyxDQUFDdUcsUUFBUSxDQUFFO0lBQ3ZCNFAsUUFBUSxFQUFHaFEsSUFBSSxJQUFLSyxXQUFXLENBQUNMLElBQUksQ0FBRTtJQUN0Q21PLEVBQUUsRUFBRTtNQUFFM1IsS0FBSyxFQUFFLE1BQU07TUFBRWQsZUFBZSxFQUFFO0lBQVEsQ0FBRTtJQUNoRHVVLE1BQU0sRUFBQztFQUFZLENBQ3BCLENBQ1ksQ0FDSyxDQUNsQixDQUFDLGVBQ1A3WiwwREFBQSxDQUFDUyxxREFBSTtJQUFDNlksSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZnZaLDBEQUFBLENBQUNpQixzREFBUztJQUNSeVksUUFBUTtJQUNSSSxFQUFFLEVBQUMsWUFBWTtJQUNmSCxLQUFLLEVBQUMsYUFBYTtJQUNuQnJGLEtBQUssRUFBRS9KLFVBQVc7SUFDbEJxUCxRQUFRLEVBQUcxSCxDQUFDLElBQUsxSCxhQUFhLENBQUMwSCxDQUFDLENBQUNPLE1BQU0sQ0FBQzZCLEtBQUssQ0FBRTtJQUMvQ3lELEVBQUUsRUFBRTtNQUFFM1IsS0FBSyxFQUFFLE1BQU07TUFBRWQsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNqRCxDQUNHLENBQUMsZUFDUHRGLDBEQUFBLENBQUNTLHFEQUFJO0lBQUM2WSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNmdlosMERBQUEsQ0FBQ2tCLHNEQUFXLHFCQUNWbEIsMERBQUEsQ0FBQ3lCLHNEQUFTO0lBQUNxWSxFQUFFLEVBQUM7RUFBUSxHQUFDLFFBQWlCLENBQUMsZUFDekM5WiwwREFBQSxDQUFDMEIsc0RBQVU7SUFDVG9ZLEVBQUUsRUFBQyxRQUFRO0lBQ1hDLEdBQUc7SUFDSEgsUUFBUSxFQUFHMUgsQ0FBQyxJQUFLMUYsU0FBUyxDQUFDMEYsQ0FBQyxDQUFDTyxNQUFNLENBQUM2QixLQUFLO0VBQUUsZ0JBRTNDdFUsMERBQUEsQ0FBQzJCLHNEQUFnQjtJQUFDMlMsS0FBSyxFQUFDLFFBQVE7SUFBQzBGLE9BQU8sZUFBRWhhLDBEQUFBLENBQUM0QixzREFBSyxNQUFFLENBQUU7SUFBQytYLEtBQUssRUFBQztFQUFRLENBQUUsQ0FBQyxlQUN0RTNaLDBEQUFBLENBQUMyQixzREFBZ0I7SUFBQzJTLEtBQUssRUFBQyxNQUFNO0lBQUMwRixPQUFPLGVBQUVoYSwwREFBQSxDQUFDNEIsc0RBQUssTUFBRSxDQUFFO0lBQUMrWCxLQUFLLEVBQUM7RUFBTSxDQUFFLENBQ3ZELENBQ0QsQ0FDVCxDQUFDLGVBQ1AzWiwwREFBQSxDQUFDUyxxREFBSTtJQUFDNlksSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZnZaLDBEQUFBLENBQUNpQixzREFBUztJQUNSNlksRUFBRSxFQUFDLGNBQWM7SUFDakJILEtBQUssRUFBQyxlQUFlO0lBQ3JCckYsS0FBSyxFQUFFckwsWUFBYTtJQUNwQjJRLFFBQVEsRUFBRzFILENBQUMsSUFBSzlILGVBQWUsQ0FBQzhILENBQUMsQ0FBQ08sTUFBTSxDQUFDNkIsS0FBSyxDQUFFO0lBQ2pEeUQsRUFBRSxFQUFFO01BQUUzUixLQUFLLEVBQUUsTUFBTTtNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ0csQ0FBQyxlQUNQdEYsMERBQUEsQ0FBQ1MscURBQUk7SUFBQzZZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Z2WiwwREFBQSxDQUFDc0QsMkZBQW9CO0lBQUNrVyxXQUFXLEVBQUVqVywyRUFBWUE7RUFBQyxnQkFDOUN2RCwwREFBQSxDQUFDcUQsOEVBQWE7SUFBQ29XLFVBQVUsRUFBRSxDQUFDLFlBQVk7RUFBRSxnQkFDeEN6WiwwREFBQSxDQUFDd0QsdUVBQVU7SUFDVGtXLFFBQVE7SUFDUmpCLElBQUksRUFBQyxhQUFhO0lBQ2xCa0IsS0FBSyxFQUFDLFlBQVk7SUFDbEJyRixLQUFLLEVBQUU3USw2Q0FBSyxDQUFDMEksV0FBVyxDQUFFO0lBQzFCeU4sUUFBUSxFQUFHaFEsSUFBSSxJQUFLd0MsY0FBYyxDQUFDeEMsSUFBSSxDQUFFO0lBQ3pDbU8sRUFBRSxFQUFFO01BQUUzUixLQUFLLEVBQUUsTUFBTTtNQUFFZCxlQUFlLEVBQUU7SUFBUSxDQUFFO0lBQ2hEdVUsTUFBTSxFQUFDO0VBQVksQ0FDcEIsQ0FDWSxDQUNLLENBQ2xCLENBQUMsZUFDUDdaLDBEQUFBLENBQUNTLHFEQUFJO0lBQUM2WSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNmdlosMERBQUEsQ0FBQ2lCLHNEQUFTO0lBQ1I2WSxFQUFFLEVBQUMsaUJBQWlCO0lBQ3BCSCxLQUFLLEVBQUMsa0JBQWtCO0lBQ3hCckYsS0FBSyxFQUFFM0osZUFBZ0I7SUFDdkJpUCxRQUFRLEVBQUcxSCxDQUFDLElBQUt0SCxrQkFBa0IsQ0FBQ3NILENBQUMsQ0FBQ08sTUFBTSxDQUFDNkIsS0FBSyxDQUFFO0lBQ3BEeUQsRUFBRSxFQUFFO01BQUUzUixLQUFLLEVBQUUsTUFBTTtNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ0csQ0FBQyxlQUNQdEYsMERBQUEsQ0FBQ1MscURBQUk7SUFBQzZZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Z2WiwwREFBQSxDQUFDaUIsc0RBQVM7SUFDUnlZLFFBQVE7SUFDUkksRUFBRSxFQUFDLGVBQWU7SUFDbEJILEtBQUssRUFBQyxPQUFPO0lBQ2JyRixLQUFLLEVBQUV2SixhQUFjO0lBQ3JCNk8sUUFBUSxFQUFHMUgsQ0FBQyxJQUFLbEgsZ0JBQWdCLENBQUNrSCxDQUFDLENBQUNPLE1BQU0sQ0FBQzZCLEtBQUssQ0FBRTtJQUNsRHlELEVBQUUsRUFBRTtNQUFFM1IsS0FBSyxFQUFFLE1BQU07TUFBRWQsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNqRCxDQUNHLENBQUMsZUFDUHRGLDBEQUFBLENBQUNTLHFEQUFJO0lBQUM2WSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNmdlosMERBQUEsQ0FBQ2lCLHNEQUFTO0lBQ1I2WSxFQUFFLEVBQUMsZUFBZTtJQUNsQkgsS0FBSyxFQUFDLGNBQWM7SUFDcEJyRixLQUFLLEVBQUVuSixhQUFjO0lBQ3JCeU8sUUFBUSxFQUFHMUgsQ0FBQyxJQUFLOUcsZ0JBQWdCLENBQUM4RyxDQUFDLENBQUNPLE1BQU0sQ0FBQzZCLEtBQUssQ0FBRTtJQUNsRHlELEVBQUUsRUFBRTtNQUFFM1IsS0FBSyxFQUFFLE1BQU07TUFBRWQsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNqRCxDQUNHLENBQUMsZUFDUHRGLDBEQUFBLENBQUNTLHFEQUFJO0lBQUM2WSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNmdlosMERBQUEsQ0FBQ2lCLHNEQUFTO0lBQ1J5WSxRQUFRO0lBQ1JJLEVBQUUsRUFBQyxjQUFjO0lBQ2pCSCxLQUFLLEVBQUMsT0FBTztJQUNickYsS0FBSyxFQUFFL0ksWUFBYTtJQUNwQnFPLFFBQVEsRUFBRzFILENBQUMsSUFBSzFHLGVBQWUsQ0FBQzBHLENBQUMsQ0FBQ08sTUFBTSxDQUFDNkIsS0FBSyxDQUFFO0lBQ2pEeUQsRUFBRSxFQUFFO01BQUUzUixLQUFLLEVBQUUsTUFBTTtNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ0csQ0FBQyxlQUNQdEYsMERBQUEsQ0FBQ1MscURBQUk7SUFBQzZZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Z2WiwwREFBQSxDQUFDc0Isc0RBQVk7SUFDWHdZLEVBQUUsRUFBQyxZQUFZO0lBQ2ZHLE9BQU8sRUFBRWxKLFFBQVM7SUFDbEJtSixjQUFjLEVBQUdDLE1BQU0sSUFBS0EsTUFBTSxDQUFDeE8sVUFBVSxDQUFDeU8sV0FBVyxDQUFDLENBQUU7SUFDNURSLFFBQVEsRUFBRUEsQ0FBQzFILENBQUMsRUFBRW1DLFFBQVEsS0FBS3pJLGFBQWEsQ0FBQ3lJLFFBQVEsQ0FBQzFJLFVBQVUsQ0FBRTtJQUM5RG9NLEVBQUUsRUFBRTtNQUFFM1IsS0FBSyxFQUFFLE1BQU07TUFBRWQsZUFBZSxFQUFFO0lBQVEsQ0FBRTtJQUNoRCtVLGNBQWMsRUFBRUMsTUFBQTtNQUFBLElBQUdDLFFBQVEsR0FBQUQsTUFBQSxDQUFSQyxRQUFRO1FBQUtoTCxLQUFLLEdBQUEzSyx3QkFBQSxDQUFBMFYsTUFBQSxFQUFBRSxVQUFBO01BQUEsb0JBRW5DeGEsMERBQUEsQ0FBQ3dCLHFEQUFHLEVBQUF1RCxRQUFBLEtBQUt3SyxLQUFLO1FBQUV3SSxFQUFFLEVBQUU7VUFBRXpTLGVBQWUsRUFBRSxPQUFPO1VBQUVZLElBQUksRUFBRSxHQUFHO1VBQUV1VSxTQUFTLEVBQUU7UUFBTztNQUFFLElBQzVFRixRQUFRLGVBQ1R2YSwwREFBQSwyQkFDRUEsMERBQUE7UUFBUW1ZLE9BQU8sRUFBR2pHLENBQUMsSUFBSzhDLDJCQUEyQixDQUFDOUMsQ0FBQyxDQUFFO1FBQUN3SSxRQUFRLEVBQUVwUyxJQUFJLENBQUNVLElBQUksQ0FBQ0csSUFBSSxLQUFLLE1BQU87UUFBQ3dSLFdBQVcsRUFBR3pJLENBQUMsSUFBS0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBRTtRQUFDek4sU0FBUyxFQUFDLGNBQWM7UUFBQ3FCLEtBQUssRUFBRTtVQUFFSyxLQUFLLEVBQUU7UUFBTztNQUFFLEdBQUMsb0JBRWhMLENBQ0wsQ0FDRixDQUFDO0lBQUEsQ0FDTjtJQUNGd1UsV0FBVyxFQUFHQyxNQUFNLGlCQUFLN2EsMERBQUEsQ0FBQ2lCLHNEQUFTLEVBQUE4RCxRQUFBLEtBQUs4VixNQUFNO01BQUVsQixLQUFLLEVBQUMsWUFBWTtNQUFDRCxRQUFRO0lBQUEsRUFBRTtFQUFFLENBQ2hGLENBQ0csQ0FBQyxlQUNQMVosMERBQUEsQ0FBQ1MscURBQUk7SUFBQzZZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Z2WiwwREFBQSxDQUFDa0Isc0RBQVc7SUFBQzZXLEVBQUUsRUFBRTtNQUFFM1IsS0FBSyxFQUFFLE1BQU07TUFBRWQsZUFBZSxFQUFFO0lBQVE7RUFBRSxnQkFDM0R0RiwwREFBQSxDQUFDbUIsc0RBQVU7SUFBQzJaLE9BQU8sRUFBQztFQUFRLEdBQUMsUUFBa0IsQ0FBQyxlQUNoRDlhLDBEQUFBLENBQUNvQixzREFBTTtJQUNMc1ksUUFBUTtJQUNSSSxFQUFFLEVBQUMsUUFBUTtJQUNYeEYsS0FBSyxFQUFFL0QsTUFBTztJQUNkcUosUUFBUSxFQUFHMUgsQ0FBQyxJQUFLMUIsU0FBUyxDQUFDMEIsQ0FBQyxDQUFDTyxNQUFNLENBQUM2QixLQUFLLENBQUU7SUFDM0NxRixLQUFLLEVBQUM7RUFBUSxnQkFFZDNaLDBEQUFBLENBQUNRLHNEQUFRO0lBQUM4VCxLQUFLLEVBQUM7RUFBVSxHQUFDLFVBQWtCLENBQUMsZUFDOUN0VSwwREFBQSxDQUFDUSxzREFBUTtJQUFDOFQsS0FBSyxFQUFDO0VBQVcsR0FBQyxXQUFtQixDQUFDLGVBQ2hEdFUsMERBQUEsQ0FBQ1Esc0RBQVE7SUFBQzhULEtBQUssRUFBQztFQUFPLEdBQUMsT0FBZSxDQUFDLGVBQ3hDdFUsMERBQUEsQ0FBQ1Esc0RBQVE7SUFBQzhULEtBQUssRUFBQztFQUFRLEdBQUMsUUFBZ0IsQ0FDbkMsQ0FDRyxDQUNULENBQUMsZUFDUHRVLDBEQUFBLENBQUNTLHFEQUFJO0lBQUM2WSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNoQnZaLDBEQUFBO0lBQU8wRSxTQUFTLEVBQUMsYUFBYTtJQUFDcUIsS0FBSyxFQUFFO01BQUVMLFFBQVEsRUFBRSxNQUFNO01BQUVxVixZQUFZLEVBQUUsS0FBSztNQUFFQyxNQUFNLEVBQUU7SUFBaUI7RUFBRSxnQkFDeEdoYiwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO0lBQUlpYixPQUFPLEVBQUUsQ0FBRTtJQUFDbFYsS0FBSyxFQUFFO01BQUVzVCxPQUFPLEVBQUUsS0FBSztNQUFFMkIsTUFBTSxFQUFFLGdCQUFnQjtNQUFFMVYsZUFBZSxFQUFFLFNBQVM7TUFBRUMsS0FBSyxFQUFFO0lBQVE7RUFBRSxHQUFDLHFCQUF1QixDQUN0SSxDQUFDLGVBQ0x2RiwwREFBQSwwQkFDRUEsMERBQUE7SUFBSStGLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFNFUsTUFBTSxFQUFFO0lBQWlCO0VBQUUsR0FBQyxZQUFjLENBQUMsZUFDeEVoYiwwREFBQTtJQUFJK0YsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUU0VSxNQUFNLEVBQUU7SUFBaUI7RUFBRSxHQUFDLHNCQUF3QixDQUFDLGVBQ2xGaGIsMERBQUE7SUFBSStGLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFNFUsTUFBTSxFQUFFO0lBQWlCO0VBQUUsR0FBQyxpQkFBbUIsQ0FBQyxlQUM3RWhiLDBEQUFBO0lBQUkrRixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRTRVLE1BQU0sRUFBRTtJQUFpQjtFQUFFLEdBQUMsc0JBQXdCLENBQUMsZUFDbEZoYiwwREFBQTtJQUFJK0YsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUU0VSxNQUFNLEVBQUU7SUFBaUI7RUFBRSxHQUFDLE9BQVMsQ0FDaEUsQ0FDQyxDQUFDLGVBQ1JoYiwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO0lBQUkrRixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRTRVLE1BQU0sRUFBRTtJQUFpQjtFQUFFLGdCQUN0RGhiLDBEQUFBLENBQUNpQixzREFBUztJQUNSeVksUUFBUTtJQUNSd0IsSUFBSSxFQUFDLE9BQU87SUFDWnBCLEVBQUUsRUFBQyxRQUFRO0lBQ1hGLFFBQVEsRUFBRzFILENBQUMsSUFBS3RFLFNBQVMsQ0FBQ3NFLENBQUMsQ0FBQ08sTUFBTSxDQUFDNkIsS0FBSyxDQUFFO0lBQzNDdk8sS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUVkLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDckQsQ0FBSyxDQUFDLGVBQ1R0RiwwREFBQTtJQUFJK0YsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUU0VSxNQUFNLEVBQUU7SUFBaUI7RUFBRSxnQkFDdERoYiwwREFBQSxDQUFDaUIsc0RBQVM7SUFDUnlZLFFBQVE7SUFDUndCLElBQUksRUFBQyxPQUFPO0lBQ1pwQixFQUFFLEVBQUMsZ0JBQWdCO0lBQ25CRixRQUFRLEVBQUcxSCxDQUFDLElBQUs5QixpQkFBaUIsQ0FBQzhCLENBQUMsQ0FBQ08sTUFBTSxDQUFDNkIsS0FBSyxDQUFFO0lBQ25Edk8sS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUVkLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDckQsQ0FDQyxDQUFDLGVBQ0x0RiwwREFBQTtJQUFJK0YsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUU0VSxNQUFNLEVBQUU7SUFBaUI7RUFBRSxnQkFDdERoYiwwREFBQSxDQUFDaUIsc0RBQVM7SUFDUnlZLFFBQVE7SUFDUndCLElBQUksRUFBQyxPQUFPO0lBQ1pwQixFQUFFLEVBQUMsV0FBVztJQUNkRixRQUFRLEVBQUcxSCxDQUFDLElBQUtsQyxZQUFZLENBQUNrQyxDQUFDLENBQUNPLE1BQU0sQ0FBQzZCLEtBQUssQ0FBRTtJQUM5Q3ZPLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ3JELENBQ0MsQ0FBQyxlQUNMdEYsMERBQUE7SUFBSStGLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFNFUsTUFBTSxFQUFFO0lBQWlCO0VBQUUsZ0JBQ3REaGIsMERBQUEsQ0FBQ2lCLHNEQUFTO0lBQ1J5WSxRQUFRO0lBQ1J3QixJQUFJLEVBQUMsT0FBTztJQUNacEIsRUFBRSxFQUFDLGtCQUFrQjtJQUNyQkYsUUFBUSxFQUFHMUgsQ0FBQyxJQUFLdEMsbUJBQW1CLENBQUNzQyxDQUFDLENBQUNPLE1BQU0sQ0FBQzZCLEtBQUssQ0FBRTtJQUNyRHZPLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ3JELENBQUssQ0FBQyxlQUNUdEYsMERBQUE7SUFBSStGLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFNFUsTUFBTSxFQUFFO0lBQWlCO0VBQUUsZ0JBQ3REaGIsMERBQUEsQ0FBQ2lCLHNEQUFTO0lBQ1J5WSxRQUFRO0lBQ1J3QixJQUFJLEVBQUMsT0FBTztJQUNacEIsRUFBRSxFQUFDLE9BQU87SUFDVkYsUUFBUSxFQUFHMUgsQ0FBQyxJQUFLMUMsUUFBUSxDQUFDMEMsQ0FBQyxDQUFDTyxNQUFNLENBQUM2QixLQUFLLENBQUU7SUFDMUN2TyxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRWQsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNyRCxDQUFLLENBQ04sQ0FDQyxDQUNGLENBQ0gsQ0FBQyxlQUNQdEYsMERBQUEsQ0FBQ1MscURBQUk7SUFBQzZZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Z2WiwwREFBQSxDQUFDaUIsc0RBQVM7SUFDUjZZLEVBQUUsRUFBQyxVQUFVO0lBQ2JILEtBQUssRUFBQyxXQUFXO0lBQ2pCckYsS0FBSyxFQUFFdkYsUUFBUztJQUNoQjZLLFFBQVEsRUFBRzFILENBQUMsSUFBS2xELFdBQVcsQ0FBQ2tELENBQUMsQ0FBQ08sTUFBTSxDQUFDNkIsS0FBSyxDQUFFO0lBQzdDeUQsRUFBRSxFQUFFO01BQUUzUixLQUFLLEVBQUUsTUFBTTtNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ0csQ0FBQyxlQUNQdEYsMERBQUEsQ0FBQ1MscURBQUk7SUFBQzZZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Z2WiwwREFBQSxDQUFDaUIsc0RBQVM7SUFDUjZZLEVBQUUsRUFBQyxtQkFBbUI7SUFDdEJILEtBQUssRUFBQyxxQkFBcUI7SUFDM0JyRixLQUFLLEVBQUVuRixpQkFBa0I7SUFDekJ5SyxRQUFRLEVBQUcxSCxDQUFDLElBQUs5QyxvQkFBb0IsQ0FBQzhDLENBQUMsQ0FBQ08sTUFBTSxDQUFDNkIsS0FBSyxDQUFFO0lBQ3REeUQsRUFBRSxFQUFFO01BQUUzUixLQUFLLEVBQUUsTUFBTTtNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ0csQ0FBQyxlQUNQdEYsMERBQUEsQ0FBQ1MscURBQUk7SUFBQzZZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Z2WiwwREFBQSxDQUFDa0Isc0RBQVc7SUFBQzZXLEVBQUUsRUFBRTtNQUFFM1IsS0FBSyxFQUFFLE1BQU07TUFBRWQsZUFBZSxFQUFFO0lBQVE7RUFBRSxnQkFDM0R0RiwwREFBQSxDQUFDbUIsc0RBQVU7SUFBQzJaLE9BQU8sRUFBQztFQUFZLEdBQUMsWUFBc0IsQ0FBQyxlQUN4RDlhLDBEQUFBLENBQUNvQixzREFBTTtJQUNMMFksRUFBRSxFQUFDLFlBQVk7SUFDZnhGLEtBQUssRUFBRXZILFVBQVc7SUFDbEI2TSxRQUFRLEVBQUcxSCxDQUFDLElBQUtsRixhQUFhLENBQUNrRixDQUFDLENBQUNPLE1BQU0sQ0FBQzZCLEtBQUssQ0FBRTtJQUMvQ3FGLEtBQUssRUFBQztFQUFZLGdCQUVsQjNaLDBEQUFBLENBQUNRLHNEQUFRO0lBQUM4VCxLQUFLLEVBQUM7RUFBVSxHQUFDLFVBQWtCLENBQUMsZUFDOUN0VSwwREFBQSxDQUFDUSxzREFBUTtJQUFDOFQsS0FBSyxFQUFDO0VBQWEsR0FBQyxhQUFxQixDQUM3QyxDQUNHLENBQ1QsQ0FBQyxlQUNQdFUsMERBQUEsQ0FBQ1MscURBQUk7SUFBQzZZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Z2WiwwREFBQSxDQUFDaUIsc0RBQVM7SUFDUjZZLEVBQUUsRUFBQyxrQkFBa0I7SUFDckJILEtBQUssRUFBQyxtQkFBbUI7SUFDekJyRixLQUFLLEVBQUVuSCxnQkFBaUI7SUFDeEJ5TSxRQUFRLEVBQUcxSCxDQUFDLElBQUs5RSxtQkFBbUIsQ0FBQzhFLENBQUMsQ0FBQ08sTUFBTSxDQUFDNkIsS0FBSyxDQUFFO0lBQ3JEeUQsRUFBRSxFQUFFO01BQUUzUixLQUFLLEVBQUUsTUFBTTtNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ0csQ0FBQyxlQUNQdEYsMERBQUEsQ0FBQ1MscURBQUk7SUFBQzZZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Z2WiwwREFBQSxDQUFDc0QsMkZBQW9CO0lBQUNrVyxXQUFXLEVBQUVqVywyRUFBWUE7RUFBQyxnQkFDOUN2RCwwREFBQSxDQUFDcUQsOEVBQWE7SUFBQ29XLFVBQVUsRUFBRSxDQUFDLFlBQVk7RUFBRSxnQkFDeEN6WiwwREFBQSxDQUFDd0QsdUVBQVU7SUFDVGtXLFFBQVE7SUFDUmpCLElBQUksRUFBQyxZQUFZO0lBQ2pCa0IsS0FBSyxFQUFDLHdCQUF3QjtJQUM5QnJGLEtBQUssRUFBRTdRLDZDQUFLLENBQUM4SixVQUFVLENBQUU7SUFDekJxTSxRQUFRLEVBQUdoUSxJQUFJLElBQUs0RCxhQUFhLENBQUM1RCxJQUFJLENBQUU7SUFDeENtTyxFQUFFLEVBQUU7TUFBRTNSLEtBQUssRUFBRSxNQUFNO01BQUVkLGVBQWUsRUFBRTtJQUFRLENBQUU7SUFDaER1VSxNQUFNLEVBQUM7RUFBWSxDQUNwQixDQUNZLENBQ0ssQ0FDbEIsQ0FBQyxlQUNQN1osMERBQUEsQ0FBQ1MscURBQUk7SUFBQzZZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCdlosMERBQUEsQ0FBQ2tCLHNEQUFXLHFCQUNWbEIsMERBQUEsQ0FBQ3lCLHNEQUFTO0lBQUNxWSxFQUFFLEVBQUM7RUFBZSxHQUFDLGdCQUF5QixDQUFDLGVBQ3hEOVosMERBQUEsQ0FBQzBCLHNEQUFVO0lBQ1RvWSxFQUFFLEVBQUMsZUFBZTtJQUNsQkMsR0FBRztJQUNISCxRQUFRLEVBQUcxSCxDQUFDLElBQUt0RixnQkFBZ0IsQ0FBQ3NGLENBQUMsQ0FBQ08sTUFBTSxDQUFDNkIsS0FBSztFQUFFLGdCQUVsRHRVLDBEQUFBLENBQUMyQixzREFBZ0I7SUFBQzJTLEtBQUssRUFBQyxRQUFRO0lBQUMwRixPQUFPLGVBQUVoYSwwREFBQSxDQUFDNEIsc0RBQUssTUFBRSxDQUFFO0lBQUMrWCxLQUFLLEVBQUM7RUFBUSxDQUFFLENBQUMsZUFDdEUzWiwwREFBQSxDQUFDMkIsc0RBQWdCO0lBQUMyUyxLQUFLLEVBQUMsU0FBUztJQUFDMEYsT0FBTyxlQUFFaGEsMERBQUEsQ0FBQzRCLHNEQUFLLE1BQUUsQ0FBRTtJQUFDK1gsS0FBSyxFQUFDO0VBQVMsQ0FBRSxDQUM3RCxDQUNELENBQ1QsQ0FBQyxlQUNQM1osMERBQUEsQ0FBQ1MscURBQUk7SUFBQzZZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsR0FDZnBMLE1BQU0sZ0JBQ0xuTywwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUEsQ0FBQzJGLFlBQVk7SUFBQ3lWLEtBQUssRUFBQyxPQUFPO0lBQUNDLFNBQVMsRUFBQyxNQUFNO0lBQUN0VixLQUFLLEVBQUU7TUFBRUMsUUFBUSxFQUFFO0lBQVc7RUFBRSxnQkFDM0VoRywwREFBQSxDQUFDVSxxREFBVTtJQUFDeVgsT0FBTyxFQUFFcEYsZUFBZ0I7SUFBQ2hOLEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFc1YsS0FBSyxFQUFFO0lBQVE7RUFBRSxnQkFDcEZ0YiwwREFBQSxDQUFDa0QsNERBQW1CO0lBQUM2QyxLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFO0lBQVU7RUFBRSxDQUFFLENBQ3pDLENBQ0EsQ0FBQyxlQUNmdkYsMERBQUE7SUFBSytGLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsTUFBTTtNQUFFNFIsT0FBTyxFQUFFLE1BQU07TUFBRVcsY0FBYyxFQUFFO0lBQWU7RUFBRSxnQkFDN0UzWSwwREFBQTtJQUFLb0csS0FBSyxFQUFFLEdBQUk7SUFBQ3dTLE1BQU0sRUFBRSxHQUFJO0lBQUMyQyxHQUFHLEVBQUVwTjtFQUFPLENBQUUsQ0FDekMsQ0FDTCxDQUFDLGdCQUVEbk8sMERBQUE7SUFBTzRaLFFBQVEsRUFBRXZILFlBQWE7SUFBQ21KLElBQUksRUFBQyxNQUFNO0lBQUN6VixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBR3RFLENBQUMsZUFDUHBHLDBEQUFBLENBQUNTLHFEQUFJO0lBQUM2WSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNoQnZaLDBEQUFBLENBQUNpQixzREFBUztJQUNSNlksRUFBRSxFQUFDLGFBQWE7SUFDaEJyQixJQUFJLEVBQUMsYUFBYTtJQUNsQm5FLEtBQUssRUFBRXZHLFdBQVk7SUFDbkI0TCxLQUFLLEVBQUMsYUFBYTtJQUNuQjhCLFNBQVM7SUFDVEMsSUFBSSxFQUFFLENBQUU7SUFDUjlCLFFBQVEsRUFBRzFILENBQUMsSUFBS2xFLGNBQWMsQ0FBQ2tFLENBQUMsQ0FBQ08sTUFBTSxDQUFDNkIsS0FBSyxDQUFFO0lBQ2hEeUQsRUFBRSxFQUFFO01BQUUzUixLQUFLLEVBQUUsTUFBTTtNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ0csQ0FBQyxlQUNQdEYsMERBQUEsQ0FBQ1MscURBQUk7SUFBQzZZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsR0FFZG5DLE1BQU0sS0FBSyxNQUFNLGdCQUFHcFgsMERBQUE7SUFBUXdiLElBQUksRUFBQyxRQUFRO0lBQUM5VyxTQUFTLEVBQUMsY0FBYztJQUFDcUIsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRTtJQUFPO0VBQUUsR0FBQyxNQUFZLENBQUMsZ0JBQUdwRywwREFBQTtJQUFHMEUsU0FBUyxFQUFDLGNBQWM7SUFBQ3FCLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsTUFBTTtNQUFFdVYsU0FBUyxFQUFFO0lBQVM7RUFBRSxHQUFDLFdBQVksQ0FFbE0sQ0FDRixDQUNGLENBQ0gsQ0FDSSxDQUNSLENBQ0YsQ0FBQyxlQUNOM2IsMERBQUEsQ0FBQytCLHNEQUFLO0lBQ0orRSxJQUFJLEVBQUU2SCxRQUFTO0lBQ2ZpTixPQUFPLEVBQUV4SixlQUFnQjtJQUN6QixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUNwUywwREFBQSxDQUFDd0IscURBQUc7SUFBQ3VXLEVBQUUsRUFBQWhSLGFBQUEsQ0FBQUEsYUFBQSxLQUFPaEIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLGdCQUNoQ3BHLDBEQUFBLENBQUMyRixZQUFZO0lBQUN5VixLQUFLLEVBQUMsT0FBTztJQUFDQyxTQUFTLEVBQUM7RUFBTSxnQkFDMUNyYiwwREFBQSxDQUFDVSxxREFBVTtJQUFDeVgsT0FBTyxFQUFFL0YsZUFBZ0I7SUFBQ3JNLEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFc1YsS0FBSyxFQUFFO0lBQVE7RUFBRSxnQkFDcEZ0YiwwREFBQSxDQUFDb0Usa0VBQUs7SUFBQzJCLEtBQUssRUFBRTtNQUFFUixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDM0IsQ0FDQSxDQUFDLGVBQ2Z2RiwwREFBQSxDQUFDUyxxREFBSTtJQUFDMlksU0FBUztJQUFDckIsRUFBRSxFQUFFO01BQUVXLFVBQVUsRUFBRSxRQUFRO01BQUVXLE9BQU8sRUFBRTtJQUFPLENBQUU7SUFBQ3JSLE9BQU8sRUFBRTtFQUFFLGdCQUN4RWhJLDBEQUFBLENBQUNTLHFEQUFJO0lBQUM2WSxJQUFJO0lBQUNDLEVBQUUsRUFBRSxFQUFHO0lBQUN4QixFQUFFLEVBQUU7TUFBRTRELFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzdDM2IsMERBQUEsQ0FBQ3FCLHFEQUFVLFFBQUMsMENBQW9ELENBQUMsZUFDakVyQiwwREFBQSx5QkFBR0EsMERBQUE7SUFBTTBFLFNBQVMsRUFBQyxNQUFNO0lBQUNxQixLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFO0lBQU07RUFBRSxHQUFDLFFBQVksQ0FBQyxLQUFDLGVBQUF2RiwwREFBQTtJQUFNMEUsU0FBUyxFQUFDO0VBQU0sR0FBQyxxRUFBeUUsQ0FBSSxDQUNqSyxDQUFDLGVBQ1AxRSwwREFBQSxXQUFLLENBQUMsZUFDTkEsMERBQUEsQ0FBQ1MscURBQUk7SUFBQzZZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Z2WiwwREFBQTtJQUFRd2IsSUFBSSxFQUFDLFFBQVE7SUFBQ3JELE9BQU8sRUFBRUEsQ0FBQSxLQUFNL1AsUUFBUSxDQUFDLGdCQUFnQixDQUFFO0lBQUMxRCxTQUFTLEVBQUMsYUFBYTtJQUFDcUIsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRTtJQUFPO0VBQUUsR0FBQyxLQUFXLENBQzFILENBQUMsZUFDUHBHLDBEQUFBLENBQUNTLHFEQUFJO0lBQUM2WSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNmdlosMERBQUE7SUFBUXdiLElBQUksRUFBQyxRQUFRO0lBQUNyRCxPQUFPLEVBQUUvRixlQUFnQjtJQUFDMU4sU0FBUyxFQUFDLGFBQWE7SUFBQ3FCLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUU7SUFBTztFQUFFLEdBQUMsSUFBVSxDQUN4RyxDQUNGLENBQ0gsQ0FDQSxDQUFDLGVBQ1JwRywwREFBQSxDQUFDK0Isc0RBQUs7SUFDSitFLElBQUksRUFBRXdNLGdCQUFpQjtJQUN2QnNJLE9BQU8sRUFBRXpHLFdBQVk7SUFDckIwRyxvQkFBb0I7SUFDcEJDLGlCQUFpQixFQUFFOVosc0RBQVM7SUFDNUIrWixhQUFhLEVBQUU7TUFDYkMsT0FBTyxFQUFFO0lBQ1gsQ0FBRTtJQUNGLG1CQUFnQixtQkFBbUI7SUFDbkMsb0JBQWlCO0VBQXlCLGdCQUUxQ2hjLDBEQUFBLENBQUN3QixxREFBRztJQUFDdVcsRUFBRSxFQUFBaFIsYUFBQSxDQUFBQSxhQUFBLEtBQU9oQixLQUFLO01BQUVLLEtBQUssRUFBRTtJQUFHO0VBQUcsR0FFL0I4TSxPQUFPLGdCQUFJbFQsMERBQUEsQ0FBQzZELDBEQUFNLE1BQUUsQ0FBQyxnQkFFcEI3RCwwREFBQTtJQUFLK0YsS0FBSyxFQUFFO01BQUU0UyxjQUFjLEVBQUUsUUFBUTtNQUFFZ0QsU0FBUyxFQUFFO0lBQVM7RUFBRSxnQkFDNUQzYiwwREFBQSx5QkFBR0EsMERBQUEsQ0FBQzJELHdFQUFlO0lBQUNvQyxLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFLE9BQU87TUFBRXFULE1BQU0sRUFBRSxNQUFNO01BQUV4UyxLQUFLLEVBQUU7SUFBTztFQUFFLENBQUUsQ0FBSSxDQUFDLGVBQ3BGcEcsMERBQUEsYUFBSSwwQkFBNEIsQ0FBQyxlQUNqQ0EsMERBQUE7SUFBSytGLEtBQUssRUFBRTtNQUFFaVMsT0FBTyxFQUFFLE1BQU07TUFBRWlFLEdBQUcsRUFBRSxNQUFNO01BQUV0RCxjQUFjLEVBQUU7SUFBUztFQUFFLGdCQUNyRTNZLDBEQUFBO0lBQVFtWSxPQUFPLEVBQUVBLENBQUEsS0FBTTFDLGNBQWMsQ0FBQyxNQUFNLENBQUU7SUFBQy9RLFNBQVMsRUFBQztFQUFhLEdBQUMsU0FFL0QsQ0FBQyxlQUNUMUUsMERBQUE7SUFBUW1ZLE9BQU8sRUFBRUEsQ0FBQSxLQUFNMUMsY0FBYyxDQUFDLFVBQVUsQ0FBRTtJQUFDL1EsU0FBUyxFQUFDO0VBQWEsR0FBQyxTQUVuRSxDQUNMLENBQ0YsQ0FFSixDQUNBLENBQUMsZUFDUjFFLDBEQUFBLENBQUMrQixzREFBSztJQUNKK0UsSUFBSSxFQUFFNE0sY0FBZTtJQUNyQmtJLE9BQU8sRUFBRXBHLGdCQUFpQjtJQUMxQnFHLG9CQUFvQjtJQUNwQkMsaUJBQWlCLEVBQUU5WixzREFBUztJQUM1QitaLGFBQWEsRUFBRTtNQUNiQyxPQUFPLEVBQUU7SUFDWCxDQUFFO0lBQ0YsbUJBQWdCLG1CQUFtQjtJQUNuQyxvQkFBaUI7RUFBeUIsZ0JBRTFDaGMsMERBQUEsQ0FBQ3dCLHFEQUFHO0lBQUN1VyxFQUFFLEVBQUFoUixhQUFBLENBQUFBLGFBQUEsS0FBT2hCLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxHQUUvQjhNLE9BQU8sZ0JBQUlsVCwwREFBQSxDQUFDNkQsMERBQU0sTUFBRSxDQUFDLGdCQUVwQjdELDBEQUFBO0lBQUsrRixLQUFLLEVBQUU7TUFBRTRTLGNBQWMsRUFBRSxRQUFRO01BQUVnRCxTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUM1RDNiLDBEQUFBLHlCQUFHQSwwREFBQSxDQUFDNEQsbUVBQVU7SUFBQ21DLEtBQUssRUFBRTtNQUFFUixLQUFLLEVBQUUsS0FBSztNQUFFcVQsTUFBTSxFQUFFLE1BQU07TUFBRXhTLEtBQUssRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUFJLENBQUMsZUFDN0VwRywwREFBQSxhQUFJLHVCQUF5QixDQUFDLGVBQzlCQSwwREFBQTtJQUFRMEUsU0FBUyxFQUFDLGFBQWE7SUFBQ3lULE9BQU8sRUFBRTNDO0VBQWlCLEdBQUMsV0FFbkQsQ0FDTCxDQUVKLENBQ0EsQ0FBQyxlQUNSeFYsMERBQUEsQ0FBQytCLHNEQUFLO0lBQ0orRSxJQUFJLEVBQUU0TixpQkFBa0I7SUFDeEJrSCxPQUFPLEVBQUUxRyw0QkFBNkI7SUFDdEMsbUJBQWdCLG1CQUFtQjtJQUNuQyxvQkFBaUI7RUFBeUIsZ0JBRTFDbFYsMERBQUEsQ0FBQ3dCLHFEQUFHO0lBQUN1VyxFQUFFLEVBQUFoUixhQUFBLENBQUFBLGFBQUEsS0FBT2hCLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxnQkFDaENwRywwREFBQSxDQUFDMkYsWUFBWTtJQUFDeVYsS0FBSyxFQUFDLE9BQU87SUFBQ0MsU0FBUyxFQUFDO0VBQU0sZ0JBQzFDcmIsMERBQUEsQ0FBQ1UscURBQVU7SUFBQ3lYLE9BQU8sRUFBRWpELDRCQUE2QjtJQUFDblAsS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUVzVixLQUFLLEVBQUU7SUFBUTtFQUFFLGdCQUNqR3RiLDBEQUFBLENBQUNvRSxrRUFBSztJQUFDMkIsS0FBSyxFQUFFO01BQUVSLEtBQUssRUFBRTtJQUFVO0VBQUUsQ0FBRSxDQUMzQixDQUNBLENBQUMsZUFDZnZGLDBEQUFBLENBQUNxQixxREFBVTtJQUFDeVksRUFBRSxFQUFDLG1CQUFtQjtJQUFDeEIsT0FBTyxFQUFDLElBQUk7SUFBQ0QsU0FBUyxFQUFDO0VBQUksR0FBQyxtQkFFbkQsQ0FBQyxlQUNiclksMERBQUE7SUFBTW1aLFFBQVEsRUFBRXJEO0VBQXFCLGdCQUNuQzlWLDBEQUFBLENBQUNTLHFEQUFJO0lBQUMyWSxTQUFTO0lBQUNyVCxLQUFLLEVBQUU7TUFBRTJTLFVBQVUsRUFBRSxRQUFRO01BQUVXLE9BQU8sRUFBRTtJQUFPLENBQUU7SUFBQ3JSLE9BQU8sRUFBRTtFQUFFLGdCQUMzRWhJLDBEQUFBLENBQUNTLHFEQUFJO0lBQUM2WSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNoQnZaLDBEQUFBLENBQUNpQixzREFBUztJQUNSNlksRUFBRSxFQUFDLFlBQVk7SUFDZnJCLElBQUksRUFBQyxZQUFZO0lBQ2pCbkUsS0FBSyxFQUFFdkksY0FBZTtJQUN0QjROLEtBQUssRUFBQyxZQUFZO0lBQ2xCQyxRQUFRLEVBQUcxSCxDQUFDLElBQUtsRyxpQkFBaUIsQ0FBQ2tHLENBQUMsQ0FBQ08sTUFBTSxDQUFDNkIsS0FBSyxDQUFFO0lBQ25EeUQsRUFBRSxFQUFFO01BQUUzUixLQUFLLEVBQUUsTUFBTTtNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ0csQ0FBQyxlQUNQdEYsMERBQUEsV0FBSyxDQUFDLGVBQ05BLDBEQUFBLENBQUNTLHFEQUFJO0lBQUM2WSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNoQnZaLDBEQUFBO0lBQVEwRSxTQUFTLEVBQUMsY0FBYztJQUFDcUIsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRTtJQUFPO0VBQUUsR0FBQyxNQUFZLENBQ25FLENBQ0YsQ0FDRixDQUNILENBQ0EsQ0FBQyxlQUNScEcsMERBQUEsQ0FBQytCLHNEQUFLO0lBQ0orRSxJQUFJLEVBQUVnTyxnQkFBaUI7SUFDdkI4RyxPQUFPLEVBQUUxRyw0QkFBNkI7SUFDdEM0RyxpQkFBaUIsRUFBRTlaLHNEQUFTO0lBQzVCK1osYUFBYSxFQUFFO01BQ2JDLE9BQU8sRUFBRTtJQUNYLENBQUU7SUFDRixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUNoYywwREFBQSxDQUFDd0IscURBQUc7SUFBQ3VXLEVBQUUsRUFBQWhSLGFBQUEsQ0FBQUEsYUFBQSxLQUFPaEIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLGdCQUNoQ3BHLDBEQUFBLGNBQ0drVCxPQUFPLGdCQUFJbFQsMERBQUEsQ0FBQzZELDBEQUFNLE1BQUUsQ0FBQyxnQkFHbEI3RCwwREFBQTtJQUFLK0YsS0FBSyxFQUFFO01BQUU0UyxjQUFjLEVBQUUsUUFBUTtNQUFFZ0QsU0FBUyxFQUFFO0lBQVM7RUFBRSxnQkFDNUQzYiwwREFBQSx5QkFBR0EsMERBQUEsQ0FBQzJELHdFQUFlO0lBQUNvQyxLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFLE9BQU87TUFBRXFULE1BQU0sRUFBRSxNQUFNO01BQUV4UyxLQUFLLEVBQUU7SUFBTztFQUFFLENBQUUsQ0FBSSxDQUFDLGVBQ3BGcEcsMERBQUEsYUFBSSwwQkFBNEIsQ0FBQyxlQUNqQ0EsMERBQUE7SUFBSytGLEtBQUssRUFBRTtNQUFFaVMsT0FBTyxFQUFFLE1BQU07TUFBRWlFLEdBQUcsRUFBRSxNQUFNO01BQUV0RCxjQUFjLEVBQUU7SUFBUztFQUFFLGdCQUNyRTNZLDBEQUFBO0lBQVFtWSxPQUFPLEVBQUVqRCw0QkFBNkI7SUFBQ3hRLFNBQVMsRUFBQztFQUFhLEdBQUMsT0FFL0QsQ0FDTCxDQUNGLENBRU4sQ0FDRixDQUNBLENBQ0osQ0FBQztBQUVWO0FBRUEsaUVBQWV5RCxnQkFBZ0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3N0JOO0FBQ007QUFDZ0M7QUFDNkQ7QUFDcEU7QUFDSjtBQUNFO0FBQ0k7QUFDRjtBQUMrQjtBQUN2RixTQUFTaEksYUFBYUEsQ0FBQSxFQUFHO0VBQ3ZCLG9CQUNFSCwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUEsQ0FBQ2dkLHFEQUFjO0lBQUNqRixFQUFFLEVBQUU7TUFBRXhTLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3BDdkYsMERBQUEsQ0FBQ2lkLHFEQUFZO0lBQUNsRixFQUFFLEVBQUU7TUFBRXhTLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDdkYsMERBQUEsQ0FBQzBjLDJEQUFnQixNQUFFLENBQ1AsQ0FBQyxlQUNmMWMsMERBQUEsQ0FBQ2tkLHNEQUFZO0lBQUNFLE9BQU8sRUFBQztFQUFNLENBQUUsQ0FDaEIsQ0FBQyxlQUVqQnBkLDBEQUFBLENBQUNnZCxxREFBYztJQUFDakYsRUFBRSxFQUFFO01BQUV4UyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ3ZGLDBEQUFBLENBQUNpZCxxREFBWTtJQUFDbEYsRUFBRSxFQUFFO01BQUV4UyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQ3ZGLDBEQUFBLENBQUM0YyxrRUFBVSxNQUFFLENBQ0QsQ0FBQyxlQUNmNWMsMERBQUEsQ0FBQ2tkLHNEQUFZO0lBQUNFLE9BQU8sRUFBQztFQUFVLENBQUUsQ0FDcEIsQ0FBQyxlQUNqQnBkLDBEQUFBLENBQUNnZCxxREFBYztJQUFDakYsRUFBRSxFQUFFO01BQUV4UyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ3ZGLDBEQUFBLENBQUNpZCxxREFBWTtJQUFDbEYsRUFBRSxFQUFFO01BQUV4UyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQ3ZGLDBEQUFBLENBQUM2YyxtRUFBVyxNQUFFLENBQ0YsQ0FBQyxlQUNmN2MsMERBQUEsQ0FBQ2tkLHNEQUFZO0lBQUNFLE9BQU8sRUFBQztFQUFTLENBQUUsQ0FDbkIsQ0FBQyxlQUNqQnBkLDBEQUFBLENBQUNnZCxxREFBYztJQUFDakYsRUFBRSxFQUFFO01BQUV4UyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ3ZGLDBEQUFBLENBQUNpZCxxREFBWTtJQUFDbEYsRUFBRSxFQUFFO01BQUV4UyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQ3ZGLDBEQUFBLENBQUNxYywyREFBVSxNQUFFLENBQ0QsQ0FBQyxlQUNmcmMsMERBQUEsQ0FBQ2tkLHNEQUFZO0lBQUNFLE9BQU8sRUFBQztFQUFjLENBQUUsQ0FDeEIsQ0FBQyxlQUNqQnBkLDBEQUFBLENBQUNnZCxxREFBYztJQUFDakYsRUFBRSxFQUFFO01BQUV4UyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ3ZGLDBEQUFBLENBQUNpZCxxREFBWTtJQUFDbEYsRUFBRSxFQUFFO01BQUV4UyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQ3ZGLDBEQUFBLENBQUN3YywyREFBYSxNQUFFLENBQ0osQ0FBQyxlQUNmeGMsMERBQUEsQ0FBQ2tkLHNEQUFZO0lBQUNFLE9BQU8sRUFBQztFQUFjLENBQUUsQ0FDeEIsQ0FBQyxlQUNqQnBkLDBEQUFBLENBQUNnZCxxREFBYztJQUFDakYsRUFBRSxFQUFFO01BQUV4UyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ3ZGLDBEQUFBLENBQUNpZCxxREFBWTtJQUFDbEYsRUFBRSxFQUFFO01BQUV4UyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQ3ZGLDBEQUFBLENBQUMrYyxvRUFBWSxNQUFFLENBQ0gsQ0FBQyxlQUNmL2MsMERBQUEsQ0FBQ2tkLHNEQUFZO0lBQUNFLE9BQU8sRUFBQztFQUFTLENBQUUsQ0FDbkIsQ0FhaEIsQ0FBQztBQUVQO0FBRUEsaUVBQWVqZCxhQUFhLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvRW1wbG95ZWVWaWV3L0VtcGxveWVlRm9ybVZpZXcuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvU2lkZWJhckRhc2hFMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoRTMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoRTMnO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUhlYWQsIFBhcGVyLCBUYWJsZUNvbnRhaW5lciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBBdXRvY29tcGxldGUsIHN0eWxlZCwgQm94LCBGb3JtTGFiZWwsIFJhZGlvR3JvdXAsIEZvcm1Db250cm9sTGFiZWwsIFJhZGlvLCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgTW9kYWwsIEJhY2tkcm9wLCBEaXZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBBZGQsIEFycm93VXB3YXJkT3V0bGluZWQsIFJlbW92ZUNpcmNsZU91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgRGVtb0NvbnRhaW5lciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvaW50ZXJuYWxzL2RlbW8nO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvTG9jYWxpemF0aW9uUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBBZGFwdGVyRGF5anMgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0FkYXB0ZXJEYXlqcyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0RhdGVQaWNrZXInO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnc3R5bGUnO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcblxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIEVtcGxveWVlRm9ybVZpZXcoKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IGFwaVVybCA9IGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLWVtcGxveWVlYDtcclxuICBjb25zdCBbam9pbkRhdGUsIHNldEpvaW5EYXRlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICByZXR1cm4gZGF0ZVxyXG4gIH0pO1xyXG4gIGNvbnN0IFtlbXBsb3llZU5hbWUsIHNldEVtcGxveWVlTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtcGxveWVlSWQsIHNldEVtcGxveWVlSWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbXBsb3llZUFkZHJlc3MsIHNldEVtcGxveWVlQWRkcmVzc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtcGxveWVlRW1haWwsIHNldEVtcGxveWVlRW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbXBsb3llZVBob25lLCBzZXRFbXBsb3llZVBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1wbG95ZWVSb2xlLCBzZXRFbXBsb3llZVJvbGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkZXBhcnRtZW50LCBzZXREZXBhcnRtZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGVwYXJ0bWVudEluZm8sIHNldERlcGFydG1lbnRJbmZvXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0ZU9mQmlydGgsIHNldERhdGVPZkJpcnRoXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICByZXR1cm4gZGF0ZVxyXG4gIH0pO1xyXG4gIGNvbnN0IFtHZW5kZXIsIHNldEdlbmRlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N0YXR1c01hcml0YWwsIHNldFN0YXR1c01hcml0YWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpZGVudGlmaWVyLCBzZXRJZGVudGlmaWVyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaWRlbnRpZmllck51bWJlciwgc2V0SWRlbnRpZmllck51bWJlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2V4cGlyZURhdGUsIHNldEV4cGlyZURhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgY29uc3QgW3NhbGFyeSwgc2V0U2FsYXJ5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ltYWdlc1VybCwgc2V0SW1hZ2VzVXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbb3BlbkJhY2ssIHNldE9wZW5CYWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYmFua05hbWUsIHNldEJhbmtOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtiYW5rQWNjb3VudE51bWJlciwgc2V0QmFua0FjY291bnROdW1iZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtvdGhlciwgc2V0T3RoZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2JvdW5jZUFsbG93YW5jZXMsIHNldEJvdW5jZUFsbG93YW5jZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Zvb2RCYXNpYywgc2V0Rm9vZEJhc2ljXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtiYXNpY1RyYW5zcG9ydCwgc2V0QmFzaWNUcmFuc3BvcnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtyZWFzb24xLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3VuaXRJbmZvLCBzZXRVbml0SW5mb10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVGZXRjaCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNJdGVtVW5pdCA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2RlcGFydG1lbnRgKVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCcmFuY2ggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VsZWN0ZWRCcmFuY2gnKSB8fCAnSFEnO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkVW5pdHMgPSAocmVzSXRlbVVuaXQuZGF0YT8uZGF0YSB8fCBbXSkuZmlsdGVyKGQgPT4gIWQuYnJhbmNoSWQgfHwgZC5icmFuY2hJZCA9PT0gY3VycmVudEJyYW5jaCk7XHJcbiAgICAgICAgc2V0VW5pdEluZm8oZmlsdGVyZWRVbml0cyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbGFzdEVtcFJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1sYXN0LXNhdmVkLWVtcGxveWVlYCk7XHJcbiAgICAgICAgaWYgKGxhc3RFbXBSZXMgJiYgbGFzdEVtcFJlcy5kYXRhICYmIGxhc3RFbXBSZXMuZGF0YS5lbXBsb3llZUlkKSB7XHJcbiAgICAgICAgICBjb25zdCBsYXN0SWRTdHIgPSBTdHJpbmcobGFzdEVtcFJlcy5kYXRhLmVtcGxveWVlSWQpO1xyXG4gICAgICAgICAgY29uc3QgbWF0Y2ggPSBsYXN0SWRTdHIubWF0Y2goL1xcZCsvKTtcclxuICAgICAgICAgIGNvbnN0IG5leHROdW0gPSBtYXRjaCA/IHBhcnNlSW50KG1hdGNoWzBdLCAxMCkgKyAxIDogMTtcclxuICAgICAgICAgIHNldEVtcGxveWVlSWQobmV4dE51bS50b1N0cmluZygpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0RW1wbG95ZWVJZChcIjFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVGZXRjaCgpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbkJhY2sodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQmFjayhmYWxzZSk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBoYW5kbGVCYXNlNjQoZSkge1xyXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBzZXRJbWFnZXMocmVhZGVyLnJlc3VsdClcclxuICAgIH1cclxuICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKVxyXG4gICAgfVxyXG4gICAgc2V0SW1hZ2VzVXJsKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU2hvd0lucHV0ID0gKCkgPT4ge1xyXG4gICAgc2V0SW1hZ2VzKCcnKVxyXG4gIH1cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG5cclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuXHJcbiAgfVxyXG4gIGNvbnN0IFtvcGVuUmVhc29uLCBzZXRPcGVuUmVhc29uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZVJlYXNvblN0YXR1cyA9ICgpID0+IHtcclxuICAgIHNldE9wZW5SZWFzb24odHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZVJlYXNvblN0YXR1cyA9ICgpID0+IHtcclxuICAgIHNldE9wZW5SZWFzb24oZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU3RhdHVzID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgIHNldFN0YXR1cyhuZXdWYWx1ZSlcclxuICAgIGlmIChuZXdWYWx1ZSkge1xyXG4gICAgICBoYW5kbGVPcGVuVXBkYXRlUmVhc29uU3RhdHVzKClcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IFtvcGVuQXV0b2NvbXBsZXRlMiwgc2V0T3BlbkF1dG9jb21wbGV0ZTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbE9wZW5Mb2FkaW5nLCBzZXRNb2RhbE9wZW5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIoZmFsc2UpO1xyXG4gICAgc2V0TW9kYWxPcGVuTG9hZGluZyhmYWxzZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgLy8gUmVzZXQgZm9ybVxyXG4gICAgc2V0RW1wbG95ZWVOYW1lKCcnKTtcclxuICAgIHNldEVtcGxveWVlSWQoJycpO1xyXG4gICAgc2V0RW1wbG95ZWVBZGRyZXNzKCcnKTtcclxuICAgIHNldEVtcGxveWVlRW1haWwoJycpO1xyXG4gICAgc2V0RW1wbG95ZWVQaG9uZSgnJyk7XHJcbiAgICBzZXRFbXBsb3llZVJvbGUoJycpO1xyXG4gICAgc2V0RGVwYXJ0bWVudCgnJyk7XHJcbiAgICBzZXRTYWxhcnkoMCk7XHJcbiAgICBzZXREZXNjcmlwdGlvbignJyk7XHJcbiAgICBzZXRJbWFnZXMoJycpO1xyXG4gICAgc2V0QmFua05hbWUoJycpO1xyXG4gICAgc2V0QmFua0FjY291bnROdW1iZXIoJycpO1xyXG4gICAgc2V0T3RoZXIoMCk7XHJcbiAgICBzZXRCb3VuY2VBbGxvd2FuY2VzKDApO1xyXG4gICAgc2V0Rm9vZEJhc2ljKDApO1xyXG4gICAgc2V0QmFzaWNUcmFuc3BvcnQoMCk7XHJcbiAgICBzZXRTdGF0dXMoJycpO1xyXG4gICAgc2V0UmVhc29uKCcnKTtcclxuICAgIHNldFNhdmluZygnJyk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlY2lzaW9uID0gKG5hdmlnYXRlKSA9PiB7XHJcbiAgICAvL05hdmlnYXRlIEJhc2VkIG9uIHRoIERlY2lzaW9uXHJcbiAgICBpZiAobmF2aWdhdGUgPT09ICdwcmV2aW91cycpIHtcclxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0ZSA9PT0gJ3N0YXknKSB7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZU9wZW5Nb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsT3BlbkxvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkYXRlQ29tbWVudCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdENhdGVnb3J5ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRlcGFydG1lbnQ6IGRlcGFydG1lbnRJbmZvLFxyXG4gICAgICBicmFuY2hJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdGVkQnJhbmNoJykgfHwgJ0hRJ1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1kZXBhcnRtZW50YCwgZGF0YSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBoYW5kbGVPcGVuTW9kYWwoKTtcclxuICAgICAgICBzZXRVbml0SW5mbyhbLi4udW5pdEluZm8sIHJlcy5kYXRhLmRhdGFdKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydCgnQW4gZXJyb3IgYXMgT2NjdXInKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2VTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGltYWdlc1VybCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtcGxveWVlTmFtZScsIGVtcGxveWVlTmFtZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vdXBsb2FkLWltYWdlYCwgZm9ybURhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAvL2NvbnNvbGUubG9nKHJlcy5kYXRhLmltYWdlVXJsKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChSZWZlcmVuY2VJbmZvKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBDcmVhdGVkIEVNUExPWUVFICcsXHJcbiAgICAgIHJlYXNvbjogJ0VNUC0nICsgU3RyaW5nKGVtcGxveWVlSWQpLnBhZFN0YXJ0KDYsICcwJykgKyAnICcgKyBlbXBsb3llZU5hbWUsXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IGRhdGVDb21tZW50XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTYXZpbmcoJ3RydWUnKVxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgX2lkOiB2NCgpLFxyXG4gICAgICBqb2luRGF0ZSxcclxuICAgICAgZW1wbG95ZWVOYW1lLFxyXG4gICAgICBlbXBsb3llZUFkZHJlc3MsXHJcbiAgICAgIGVtcGxveWVlRW1haWwsXHJcbiAgICAgIGVtcGxveWVlUGhvbmUsXHJcbiAgICAgIGVtcGxveWVlUm9sZSxcclxuICAgICAgZGVwYXJ0bWVudCxcclxuICAgICAgZGF0ZU9mQmlydGgsXHJcbiAgICAgIEdlbmRlcixcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICBzdGF0dXNNYXJpdGFsLFxyXG4gICAgICBpZGVudGlmaWVyLFxyXG4gICAgICBpZGVudGlmaWVyTnVtYmVyLFxyXG4gICAgICBleHBpcmVEYXRlLFxyXG4gICAgICBzYWxhcnksXHJcbiAgICAgIHJlYXNvbjEsXHJcbiAgICAgIGRlc2NyaXB0aW9uLCBiYW5rQWNjb3VudE51bWJlciwgYmFua05hbWUsXHJcbiAgICAgIGVtcGxveWVlSWQsIG90aGVyLCBib3VuY2VBbGxvd2FuY2VzLCBmb29kQmFzaWMsIGJhc2ljVHJhbnNwb3J0LCBzeW5jZWQ6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChhcGlVcmwsIHsgam9pbkRhdGUsIGVtcGxveWVlTmFtZSwgZW1wbG95ZWVBZGRyZXNzLCBlbXBsb3llZUVtYWlsLCBlbXBsb3llZVBob25lLCBlbXBsb3llZVJvbGUsIGRlcGFydG1lbnQsIGRhdGVPZkJpcnRoLCBHZW5kZXIsIHN0YXR1cywgc3RhdHVzTWFyaXRhbCwgaWRlbnRpZmllciwgaWRlbnRpZmllck51bWJlciwgZXhwaXJlRGF0ZSwgc2FsYXJ5LCByZWFzb24xLCBkZXNjcmlwdGlvbiwgYmFua0FjY291bnROdW1iZXIsIGJhbmtOYW1lLCBlbXBsb3llZUlkLCBvdGhlciwgYm91bmNlQWxsb3dhbmNlcywgZm9vZEJhc2ljLCBiYXNpY1RyYW5zcG9ydCwgYnJhbmNoSWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZEJyYW5jaCcpIHx8ICdIUScgfSlcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICBpZiAoaW1hZ2VzVXJsKSBoYW5kbGVJbWFnZVN1Ym1pdCgpOyAvLyBvbmx5IHVwbG9hZCBpZiBhIHBob3RvIHdhcyBzZWxlY3RlZFxyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm8gPSByZXMuZGF0YS5kYXRhLl9pZFxyXG4gICAgICAgIC8vIGF3YWl0IGRiLmVtcGxveWVlU2NoZW1hLmFkZCh7IC4uLnJlcy5kYXRhLmRhdGEsIF9pZDogcmVzLmRhdGEuZGF0YS5faWQsIHN5bmNlZDogdHJ1ZSB9KVxyXG4gICAgICAgIGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbihSZWZlcmVuY2VJbmZvKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBzZXRTYXZpbmcoJycpXHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9O1xyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCBuZXcgRW1wbG95ZWVcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQmFja30+XHJcbiAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoRTMgLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDQgfX0gPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0gY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+RW1wbG95ZWUgSW5mb3JtYXRpb248L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2pvaW5EYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdKb2luIERhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKGpvaW5EYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldEpvaW5EYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1wbG95ZWVJZCdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbXBsb3llZSBJZCdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbXBsb3llZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbXBsb3llZUlkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBpZD0nR2VuZGVyJz5HZW5kZXI8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdHZW5kZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEdlbmRlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPSdGZW1hbGUnIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9J0ZlbWFsZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9J01hbGUnIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9J01hbGUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1wbG95ZWVOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VtcGxveWVlIE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbXBsb3llZU5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkYXRlT2ZCaXJ0aCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQmlydGggRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoZGF0ZU9mQmlydGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0RGF0ZU9mQmlydGgoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2VtcGxveWVlQWRkcmVzcydcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbXBsb3llZSBBZGRyZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtcGxveWVlQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1wbG95ZWVBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdlbXBsb3llZUVtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtcGxveWVlRW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtcGxveWVlRW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1wbG95ZWVQaG9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdQaG9uZSBOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1wbG95ZWVQaG9uZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1wbG95ZWVSb2xlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0dyYWRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtcGxveWVlUm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1wbG95ZWVSb2xlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXBhcnRtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3VuaXRJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhPcHRpb24pID0+IE9wdGlvbi5kZXBhcnRtZW50LnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBzZXREZXBhcnRtZW50KG5ld1ZhbHVlLmRlcGFydG1lbnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHsgY2hpbGRyZW4sIC4uLm90aGVyIH0pID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBOZXcgRGVwYXJ0bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiRGVwYXJ0bWVudFwiIHJlcXVpcmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdzdGF0dXMnPlN0YXR1czwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3N0YXR1cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU3RhdHVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJFbXBsb3llZFwiPkVtcGxveWVkPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiU3VzcGVuZGVkXCI+U3VzcGVuZGVkPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRmlyZWRcIj5GaXJlZDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlJlc2lnblwiPlJlc2lnbjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBtYXJnaW5Cb3R0b206ICcwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17NX0gc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnIzMxNkZGNicsIGNvbG9yOiAnd2hpdGUnIH19PiBTYWxhcnkgSW5mb3JtYXRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+QmFzaWMgd2FnZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+VHJhbnNwb3J0IGFsbG93YW5jZXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PkZvb2QgYWxsb3dhbmNlczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+Qm91bmNlIGFsbG93YW5jZXMgMyU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19Pk90aGVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzYWxhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2FsYXJ5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2Jhc2ljVHJhbnNwb3J0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJhc2ljVHJhbnNwb3J0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2Zvb2RCYXNpYydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb29kQmFzaWMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nYm91bmNlQWxsb3dhbmNlcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCb3VuY2VBbGxvd2FuY2VzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J290aGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE90aGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdiYW5rTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdCYW5rIE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFua05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJhbmtOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2JhbmtBY2NvdW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0JhbmsgQWNjb3VudCBOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFua0FjY291bnROdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJhbmtBY2NvdW50TnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdpZGVudGlmaWVyJz5JZGVudGlmaWVyPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0naWRlbnRpZmllcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lkZW50aWZpZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWRlbnRpZmllcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdJZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJQYXNzcG9ydFwiPlBhc3Nwb3J0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTmF0aW9uYWwtSURcIj5OYXRpb25hbC1JRDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdpZGVudGlmaWVyTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0lkZW50aWZpZXIgTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lkZW50aWZpZXJOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElkZW50aWZpZXJOdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdleHBpcmVEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdJZGVudGlmaWVyIEV4cGlyZSBEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhleHBpcmVEYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldEV4cGlyZURhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgaWQ9J3N0YXR1c01hcml0YWwnPlN0YXR1cyBNYXJpdGFsPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nc3RhdHVzTWFyaXRhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdHVzTWFyaXRhbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPSdTaW5nbGUnIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9J1NpbmdsZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9J01hcnJpZWQnIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9J01hcnJpZWQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2ltYWdlcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J2xlZnQnIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNob3dJbnB1dH0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD17NDAwfSBoZWlnaHQ9ezIwMH0gc3JjPXtpbWFnZXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgOiA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUJhc2U2NH0gdHlwZT0nZmlsZScgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzYXZpbmcgIT09ICd0cnVlJyA/IDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+IDogPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+U2F2aW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5CYWNrfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlQmFja31cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzeD17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EbyB5b3Ugd2FudCB0byBzdG9wIGNyZWF0aW5nIGVtcGxveWVlID8gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZSA6PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+IElmIHlvdSBzdG9wIGNyZWF0aW5nIHdpdGhvdXQgc2F2aW5nLCBhbGwgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL1Rld21WaWV3QWRtaW4nKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19Pk5vPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3N0YXknKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIEFkZCBOZXdcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNpc2lvbigncHJldmlvdXMnKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e0Vycm9yT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENhbmNlbEljb24gc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgRmFpbGVkIHRvIFNhdmVkPC9oMj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgVHJ5IEFnYWluXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgQ3JlYXRlIERlcGFydG1lbnRcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRDYXRlZ29yeX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgaWQ9J2RlcGFydG1lbnQnXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J2RlcGFydG1lbnQnXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXBhcnRtZW50SW5mb31cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J0RlcGFydG1lbnQnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVwYXJ0bWVudEluZm8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXttb2RhbE9wZW5Mb2FkaW5nfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+IERhdGEgc3VjY2Vzc2Z1bGx5IFNhdmVkPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZUZvcm1WaWV3XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3MvU2lkZWJhck5ldy5zY3NzJ1xyXG5pbXBvcnQgeyBPdXRsZXQsIE5hdkxpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgQWNjb3VudEJveCwgQWxsSW5jbHVzaXZlLCBIb21lLCBBc3NpZ25tZW50SW5kLCBTdXBlcnZpc2VkVXNlckNpcmNsZSwgQ3VycmVuY3lFeGNoYW5nZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3MnO1xyXG5pbXBvcnQgR3JvdXBzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0dyb3Vwcyc7XHJcbmltcG9ydCBQYXltZW50SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1BheW1lbnQnO1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBDb250YWN0c0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Db250YWN0cyc7XHJcbmltcG9ydCB7IExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5mdW5jdGlvbiBTaWRlYmFyRGFzaEUzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8Q3VycmVuY3lFeGNoYW5nZSAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlJhdGVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxHcm91cHNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRW1wbG95ZWVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxQYXltZW50SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlBheVJvbGxcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8QWNjb3VudEJveCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlVzZXIgQWNjb3VudFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8QXNzaWdubWVudEluZCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkdyYW50IEFjY2Vzc1wiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPENvbnRhY3RzSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlByb2ZpbGVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICB7LyogPGxpIGNsYXNzTmFtZT0nTGlzdHJvd2Rhc2gnID5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL1JvbGVQZXJtaXNzaW9uXCIgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOidub25lJyxcclxuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc0NXB4JywgZmxleFdyYXA6ICdub3dyYXAnLCBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICBmbGV4OiAnd3JhcCcsY29sb3I6ICd3aGl0ZScsIGFsaWduSXRlbXM6J2NlbnRlcicsIG1hcmdpbkxlZnQ6JzIwcHgnLCBnYXA6JzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2ljb24xJz5cclxuICAgICAgICAgICAgICAgICAgICAgPFN1cGVydmlzZWRVc2VyQ2lyY2xlLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSd0aXRsZWxpc3QnPiBSb2xlUGVybWlzc2lvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICA8L2xpPiovfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyRGFzaEUzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyRGFzaEUzIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiRGVsZXRlSWNvbiIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlSGVhZCIsIlBhcGVyIiwiVGFibGVDb250YWluZXIiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJUeXBvZ3JhcGh5IiwiQXV0b2NvbXBsZXRlIiwic3R5bGVkIiwiQm94IiwiRm9ybUxhYmVsIiwiUmFkaW9Hcm91cCIsIkZvcm1Db250cm9sTGFiZWwiLCJSYWRpbyIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJEaXZpZGVyIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiQWRkIiwiQXJyb3dVcHdhcmRPdXRsaW5lZCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJ2NCIsInVzZU5hdmlnYXRlIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImRheWpzIiwiQXJyb3dCYWNrIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkxvYWRlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJDbG9zZSIsImVycm9yIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiTGlnaHRUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJCbGFja1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNSIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmNiIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkVtcGxveWVlRm9ybVZpZXciLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmNyIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsImFwaVVybCIsIl91c2VTdGF0ZSIsImRhdGUiLCJEYXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwiam9pbkRhdGUiLCJzZXRKb2luRGF0ZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2V0RW1wbG95ZWVOYW1lIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJlbXBsb3llZUlkIiwic2V0RW1wbG95ZWVJZCIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiZW1wbG95ZWVBZGRyZXNzIiwic2V0RW1wbG95ZWVBZGRyZXNzIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJlbXBsb3llZUVtYWlsIiwic2V0RW1wbG95ZWVFbWFpbCIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImVtcGxveWVlUGhvbmUiLCJzZXRFbXBsb3llZVBob25lIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImVtcGxveWVlUm9sZSIsInNldEVtcGxveWVlUm9sZSIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJkZXBhcnRtZW50Iiwic2V0RGVwYXJ0bWVudCIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJkZXBhcnRtZW50SW5mbyIsInNldERlcGFydG1lbnRJbmZvIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsImRhdGVPZkJpcnRoIiwic2V0RGF0ZU9mQmlydGgiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiR2VuZGVyIiwic2V0R2VuZGVyIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsInN0YXR1c01hcml0YWwiLCJzZXRTdGF0dXNNYXJpdGFsIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImlkZW50aWZpZXIiLCJzZXRJZGVudGlmaWVyIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsImlkZW50aWZpZXJOdW1iZXIiLCJzZXRJZGVudGlmaWVyTnVtYmVyIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsImV4cGlyZURhdGUiLCJzZXRFeHBpcmVEYXRlIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsInNhbGFyeSIsInNldFNhbGFyeSIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsImltYWdlcyIsInNldEltYWdlcyIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJpbWFnZXNVcmwiLCJzZXRJbWFnZXNVcmwiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4Iiwib3BlbkJhY2siLCJzZXRPcGVuQmFjayIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJiYW5rTmFtZSIsInNldEJhbmtOYW1lIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsImJhbmtBY2NvdW50TnVtYmVyIiwic2V0QmFua0FjY291bnROdW1iZXIiLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0Iiwib3RoZXIiLCJzZXRPdGhlciIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJib3VuY2VBbGxvd2FuY2VzIiwic2V0Qm91bmNlQWxsb3dhbmNlcyIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJmb29kQmFzaWMiLCJzZXRGb29kQmFzaWMiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwiYmFzaWNUcmFuc3BvcnQiLCJzZXRCYXNpY1RyYW5zcG9ydCIsIl91c2VTdGF0ZTUxIiwiX3VzZVN0YXRlNTIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0IiwicmVhc29uMSIsInNldFJlYXNvbiIsIl91c2VTdGF0ZTU1IiwiX3VzZVN0YXRlNTYiLCJ1bml0SW5mbyIsInNldFVuaXRJbmZvIiwiaGFuZGxlRmV0Y2giLCJfcmVmOCIsIl9yZXNJdGVtVW5pdCRkYXRhIiwicmVzSXRlbVVuaXQiLCJjdXJyZW50QnJhbmNoIiwiZmlsdGVyZWRVbml0cyIsImZpbHRlciIsImQiLCJicmFuY2hJZCIsImxhc3RFbXBSZXMiLCJsYXN0SWRTdHIiLCJTdHJpbmciLCJtYXRjaCIsIm5leHROdW0iLCJwYXJzZUludCIsInRvU3RyaW5nIiwiaGFuZGxlT3BlbkJhY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZUJhY2siLCJoYW5kbGVCYXNlNjQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsInRhcmdldCIsImZpbGVzIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsImxvZyIsImhhbmRsZVNob3dJbnB1dCIsIl91c2VTdGF0ZTU3IiwiX3VzZVN0YXRlNTgiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTU5IiwiX3VzZVN0YXRlNjAiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTYxIiwiX3VzZVN0YXRlNjIiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJfdXNlU3RhdGU2MyIsIl91c2VTdGF0ZTY0Iiwib3BlblJlYXNvbiIsInNldE9wZW5SZWFzb24iLCJoYW5kbGVPcGVuVXBkYXRlUmVhc29uU3RhdHVzIiwiaGFuZGxlQ2xvc2VVcGRhdGVSZWFzb25TdGF0dXMiLCJoYW5kbGVTdGF0dXMiLCJuZXdWYWx1ZSIsInZhbHVlIiwiaGFuZGxlRXJyb3IiLCJfdXNlU3RhdGU2NSIsIl91c2VTdGF0ZTY2Iiwib3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMiIsIl91c2VTdGF0ZTY3IiwiX3VzZVN0YXRlNjgiLCJtb2RhbE9wZW5Mb2FkaW5nIiwic2V0TW9kYWxPcGVuTG9hZGluZyIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVDbG9zZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic2V0U2F2aW5nIiwiaGFuZGxlQ2xvc2VFcnJvciIsImhhbmRsZURlY2lzaW9uIiwiaGlzdG9yeSIsImJhY2siLCJoYW5kbGVPcGVuTW9kYWwiLCJkYXRlQ29tbWVudCIsImhhbmRsZVN1Ym1pdENhdGVnb3J5IiwiX3JlZjkiLCJwb3N0IiwiYWxlcnQiLCJfeCIsImhhbmRsZUltYWdlU3VibWl0IiwiX3JlZjAiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaGVhZGVycyIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxIiwiUmVmZXJlbmNlSW5mbyIsImlkSW5mbyIsInBlcnNvbiIsInJlYXNvbiIsInBhZFN0YXJ0IiwiZGF0ZU5vdGlmaWNhdGlvbiIsIl94MiIsIl91c2VTdGF0ZTY5IiwiX3VzZVN0YXRlNzAiLCJzYXZpbmciLCJoYW5kbGVTdWJtaXQiLCJfcmVmMTAiLCJfaWQiLCJzeW5jZWQiLCJfeDMiLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJuYW1lIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJwYWRkaW5nIiwiaXRlbSIsInhzIiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwicmVxdWlyZWQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwiZm9ybWF0IiwiaWQiLCJyb3ciLCJjb250cm9sIiwib3B0aW9ucyIsImdldE9wdGlvbkxhYmVsIiwiT3B0aW9uIiwidG9VcHBlckNhc2UiLCJQYXBlckNvbXBvbmVudCIsIl9yZWYxMSIsImNoaWxkcmVuIiwiX2V4Y2x1ZGVkMyIsIm1hcmdpblRvcCIsImRpc2FibGVkIiwib25Nb3VzZURvd24iLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsImh0bWxGb3IiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXIiLCJjb2xTcGFuIiwic2l6ZSIsIkZyYWdtZW50IiwidGl0bGUiLCJwbGFjZW1lbnQiLCJmbG9hdCIsInNyYyIsInR5cGUiLCJtdWx0aWxpbmUiLCJyb3dzIiwidGV4dEFsaWduIiwib25DbG9zZSIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsImdhcCIsIk91dGxldCIsIk5hdkxpbmsiLCJ1c2VMb2NhdGlvbiIsIkFjY291bnRCb3giLCJBbGxJbmNsdXNpdmUiLCJIb21lIiwiQXNzaWdubWVudEluZCIsIlN1cGVydmlzZWRVc2VyQ2lyY2xlIiwiQ3VycmVuY3lFeGNoYW5nZSIsIlNldHRpbmdzSWNvbiIsIkdyb3Vwc0ljb24iLCJQYXltZW50SWNvbiIsIkRhc2hib2FyZEljb24iLCJDb250YWN0c0ljb24iLCJMaXN0SXRlbUJ1dHRvbiIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIm1ha2VTdHlsZXMiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==