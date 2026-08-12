"use strict";
exports.id = "src_js_AdminView1_PageView_EmployeeView_EmployeeAttendanceForm_js";
exports.ids = ["src_js_AdminView1_PageView_EmployeeView_EmployeeAttendanceForm_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/EmployeeView/EmployeeAttendanceForm.js"
/*!***************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EmployeeView/EmployeeAttendanceForm.js ***!
  \***************************************************************************/
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
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var style__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! style */ "./node_modules/style/style.js");
/* harmony import */ var style__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(style__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/DateTimeField/DateTimeField.js");
var _excluded = ["className"],
  _excluded2 = ["className"];
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









































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_30__["default"], {
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
function EmployeeAttendanceForm() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_46__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_46__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__.setUser)({
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__.logOut)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openBack = _useState2[0],
    setOpenBack = _useState2[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var dateAttendance = new Date();
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    employee = _useState4[0],
    setEmployee = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchEmployee = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/employee"));
          setEmployee((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.filter(row => {
            var _row$department;
            return row.status !== 'Fired' && row.status !== 'Resign' && ((_row$department = row.department) === null || _row$department === void 0 ? void 0 : _row$department.toUpperCase()) !== 'FACTORY';
          }).map(row2 => ({
            id: row2._id,
            name: row2.employeeName,
            timeIn: new Date(),
            timeOut: new Date(),
            observation: '',
            note: '',
            daysWN: 0
          })));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchEmployee() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchEmployee();
  }, []);
  var handleChange = (idRow, key, value) => {
    var list = [...employee];
    var i = employee.findIndex(Item => Item.id === idRow);
    list[i][key] = value;
    if (list[i]['observation'] === 'P') {
      list[i]['daysWN'] = 1;
    } else if (list[i]['observation'] === 'H') {
      list[i]['daysWN'] = 0.5;
    }
    setEmployee(list);
  };
  var deleteItem = idRow => {
    setEmployee(employee => employee.filter(Item => Item.id !== idRow));
  };
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    search2 = _useState6[0],
    setSearch2 = _useState6[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray2 = search2 !== '' ? employee.filter(Item => Item.name && Item.name.toLowerCase().includes(search2.toLowerCase())) : employee;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    loadingOpenModal = _useState0[0],
    setLoadingOpenModal = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    ErrorOpenModal = _useState10[0],
    setErrorOpenModal = _useState10[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
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
    var _ref9 = _asyncToGenerator(function* (ReferenceInfo) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created Attendance',
        reason: 'For ' + dayjs__WEBPACK_IMPORTED_MODULE_41___default()(dateAttendance).format('DD/MM/YYYY'),
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x) {
      return _ref9.apply(this, arguments);
    };
  }();
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    saving = _useState12[0],
    setSaving = _useState12[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var saveAttendance = employee.map(row => {
        return axios__WEBPACK_IMPORTED_MODULE_35__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/create-employeeattendance"), row);
      });
      try {
        var res = yield Promise.all(saveAttendance);
        if (res) {
          // await Promise.all(employee.map(async (item) => {
          //   await db.employeeAttendanceSchema.add({ ...item, synced: true })
          // }))
          handleOpen();
          handleCreateNotification();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x2) {
      return _ref0.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_29__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_33__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Employee Attendance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_42__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_52__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_51__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_48__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_34__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_31__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_32__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_10__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: "Search",
    id: "search2",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, "Employee Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, "Time IN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, "Time Out"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, "Observation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, "Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, newArray2 === null || newArray2 === void 0 ? void 0 : newArray2.map((row, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    key: row.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__.DemoContainer, {
    components: ['DateTimeField']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_53__.DateTimeField, {
    name: "timeIn",
    id: "timeIn",
    format: "DD/MM/YYYY-HH:mm",
    value: dayjs__WEBPACK_IMPORTED_MODULE_41___default()(row.timeIn),
    onChange: time => handleChange(row.id, 'timeIn', time)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__.DemoContainer, {
    components: ['DateTimeField']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_53__.DateTimeField, {
    name: "timeOut",
    id: "timeOut",
    value: dayjs__WEBPACK_IMPORTED_MODULE_41___default()(row.timeOut),
    format: "DD/MM/YYYY-HH:mm",
    onChange: time => handleChange(row.id, 'timeOut', time)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      width: '180px',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    htmlFor: "observation"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    required: true,
    name: "observation",
    id: "observation",
    value: row.observation,
    onChange: e => handleChange(row.id, 'observation', e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "P"
  }, "Present(P)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "A"
  }, "Absent(A)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "S"
  }, "Suspended(S)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "H"
  }, "Half Day(H)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "PH"
  }, "Public-Holiday(PH)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "Stopped"
  }, "Stopped"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "#"
  }, "#")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "note",
    id: "note",
    value: row.note,
    onChange: e => handleChange(row.id, 'note', e.target.value),
    sx: {
      width: '280px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
    title: "Delete",
    sx: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => deleteItem(row.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  })))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, "Saving..."))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: openBack,
    onClose: handleCloseBack,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Do you want to stop creating Attendance ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate('/TewmViewAdmin'),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handleCloseBack,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_22__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_43__["default"], {
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
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_22__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_44__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeAttendanceForm);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRW1wbG95ZWVWaWV3X0VtcGxveWVlQXR0ZW5kYW5jZUZvcm1fanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQW1EO0FBQ1U7QUFDckM7QUFDRTtBQUMwQjtBQUNzQjtBQUNSO0FBQ2Q7QUFDMlE7QUFDL1A7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDeEM7QUFDd0I7QUFDa0M7QUFDMUQ7QUFDcUI7QUFDb0I7QUFDYTtBQUNoQjtBQUNKO0FBQ2xDO0FBQzRCO0FBQ1E7QUFDVjtBQUNMO0FBQ1E7QUFDK0I7QUFDdEM7QUFDRjtBQUNoQjtBQUN3QjtBQUNRO0FBQ2E7QUFHM0UsSUFBTTRFLFlBQVksR0FBR3JELDBEQUFNLENBQUNzRCxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDaERqRiwwREFBQSxDQUFDbUMsOERBQU8sRUFBQWdELFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxLQUFBLENBQUxDLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBT3BELDhEQUFjLENBQUNxRCxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxLQUFLO01BQ3RCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQztNQUMzQkMsUUFBUSxFQUFFO0lB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QkFDcEMzRiwwREFBQSxDQUFDNlQscURBQVk7SUFBQzFELEVBQUUsRUFBRTtNQUFFeEssS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbEMzRiwwREFBQSxDQUFDaVQsMkRBQVUsTUFBRSxDQUNELENBQUMsZUFDZmpULDBEQUFBLENBQUM4VCxzREFBWTtJQUFDRyxPQUFPLEVBQUM7RUFBYyxDQUFFLENBQ3hCLENBQUMsZUFDakJqVSwwREFBQSxDQUFDNFQscURBQWM7SUFBQ3pELEVBQUUsRUFBRTtNQUFFeEssS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEMzRiwwREFBQSxDQUFDNlQscURBQVk7SUFBQzFELEVBQUUsRUFBRTtNQUFFeEssS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbEMzRiwwREFBQSxDQUFDb1QsMkRBQWEsTUFBRSxDQUNKLENBQUMsZUFDZnBULDBEQUFBLENBQUM4VCxzREFBWTtJQUFDRyxPQUFPLEVBQUM7RUFBYyxDQUFFLENBQ3hCLENBQUMsZUFDakJqVSwwREFBQSxDQUFDNFQscURBQWM7SUFBQ3pELEVBQUUsRUFBRTtNQUFFeEssS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEMzRiwwREFBQSxDQUFDNlQscURBQVk7SUFBQzFELEVBQUUsRUFBRTtNQUFFeEssS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbEMzRiwwREFBQSxDQUFDMlQsb0VBQVksTUFBRSxDQUNILENBQUMsZUFDZjNULDBEQUFBLENBQUM4VCxzREFBWTtJQUFDRyxPQUFPLEVBQUM7RUFBUyxDQUFFLENBQ25CLENBYWhCLENBQUM7QUFFUDtBQUVBLGlFQUFlOVQsYUFBYSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0VtcGxveWVlVmlldy9FbXBsb3llZUF0dGVuZGFuY2VGb3JtLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvY29tcG9uZW50L1NpZGViYXJEYXNoRTMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaEUzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaEUzJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcyc7XHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudENpcmNsZSc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgTWVudUl0ZW0sIEdyaWQsIEljb25CdXR0b24sIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVIZWFkLCBQYXBlciwgVGFibGVDb250YWluZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgQXV0b2NvbXBsZXRlLCBzdHlsZWQsIEJveCwgRm9ybUxhYmVsLCBSYWRpb0dyb3VwLCBGb3JtQ29udHJvbExhYmVsLCBSYWRpbywgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIE1vZGFsLCBCYWNrZHJvcCwgRGl2aWRlciwgVGFibGVSb3cgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IEFkZCwgQXJyb3dVcHdhcmRPdXRsaW5lZCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICdzdHlsZSc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5pbXBvcnQgeyBEYXRlVGltZUZpZWxkLCBUaW1lRmllbGQsIFRpbWVQaWNrZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzJztcclxuXHJcblxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcblxyXG5mdW5jdGlvbiBFbXBsb3llZUF0dGVuZGFuY2VGb3JtKCkge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIGNvbnN0IFtvcGVuQmFjaywgc2V0T3BlbkJhY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbkJhY2sodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQmFjayhmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBkYXRlQXR0ZW5kYW5jZSA9IG5ldyBEYXRlKClcclxuICBjb25zdCBbZW1wbG95ZWUsIHNldEVtcGxveWVlXSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEVtcGxveWVlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVlYClcclxuICAgICAgICBzZXRFbXBsb3llZShyZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5zdGF0dXMgIT09ICdGaXJlZCcgJiYgcm93LnN0YXR1cyAhPT0gJ1Jlc2lnbicgJiYgcm93LmRlcGFydG1lbnQ/LnRvVXBwZXJDYXNlKCkgIT09ICdGQUNUT1JZJykubWFwKChyb3cyKSA9PiAoe1xyXG4gICAgICAgICAgaWQ6IHJvdzIuX2lkLFxyXG4gICAgICAgICAgbmFtZTogcm93Mi5lbXBsb3llZU5hbWUsXHJcbiAgICAgICAgICB0aW1lSW46IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICB0aW1lT3V0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgb2JzZXJ2YXRpb246ICcnLFxyXG4gICAgICAgICAgbm90ZTogJycsXHJcbiAgICAgICAgICBkYXlzV046IDBcclxuICAgICAgICB9KSkpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRW1wbG95ZWUoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpZFJvdywga2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5lbXBsb3llZV1cclxuICAgIGNvbnN0IGkgPSBlbXBsb3llZS5maW5kSW5kZXgoSXRlbSA9PiBJdGVtLmlkID09PSBpZFJvdylcclxuICAgIGxpc3RbaV1ba2V5XSA9IHZhbHVlO1xyXG4gICAgaWYgKGxpc3RbaV1bJ29ic2VydmF0aW9uJ10gPT09ICdQJykge1xyXG4gICAgICBsaXN0W2ldWydkYXlzV04nXSA9IDFcclxuICAgIH0gZWxzZSBpZiAobGlzdFtpXVsnb2JzZXJ2YXRpb24nXSA9PT0gJ0gnKSB7XHJcbiAgICAgIGxpc3RbaV1bJ2RheXNXTiddID0gMC41XHJcbiAgICB9XHJcbiAgICBzZXRFbXBsb3llZShsaXN0KVxyXG4gIH1cclxuICBjb25zdCBkZWxldGVJdGVtID0gaWRSb3cgPT4ge1xyXG4gICAgc2V0RW1wbG95ZWUoZW1wbG95ZWUgPT4gZW1wbG95ZWUuZmlsdGVyKChJdGVtKSA9PiBJdGVtLmlkICE9PSBpZFJvdykpO1xyXG4gIH07XHJcbiAgY29uc3QgW3NlYXJjaDIsIHNldFNlYXJjaDJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaDIgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U2VhcmNoMih2YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgbmV3QXJyYXkyID0gc2VhcmNoMiAhPT0gJycgPyBlbXBsb3llZS5maWx0ZXIoKEl0ZW0pID0+XHJcbiAgICBJdGVtLm5hbWUgJiYgSXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoMi50b0xvd2VyQ2FzZSgpKVxyXG4gICkgOiBlbXBsb3llZVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlY2lzaW9uID0gKG5hdmlnYXRlKSA9PiB7XHJcbiAgICAvL05hdmlnYXRlIEJhc2VkIG9uIHRoIERlY2lzaW9uXHJcbiAgICBpZiAobmF2aWdhdGUgPT09ICdwcmV2aW91cycpIHtcclxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0ZSA9PT0gJ3N0YXknKSB7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChSZWZlcmVuY2VJbmZvKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBDcmVhdGVkIEF0dGVuZGFuY2UnLFxyXG4gICAgICByZWFzb246ICdGb3IgJyArIGRheWpzKGRhdGVBdHRlbmRhbmNlKS5mb3JtYXQoJ0REL01NL1lZWVknKSxcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2F2aW5nKCd0cnVlJylcclxuICAgIGNvbnN0IHNhdmVBdHRlbmRhbmNlID0gZW1wbG95ZWUubWFwKChyb3cpID0+IHtcclxuICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtZW1wbG95ZWVhdHRlbmRhbmNlYCwgcm93KVxyXG4gICAgfSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKHNhdmVBdHRlbmRhbmNlKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIC8vIGF3YWl0IFByb21pc2UuYWxsKGVtcGxveWVlLm1hcChhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgICAgIC8vICAgYXdhaXQgZGIuZW1wbG95ZWVBdHRlbmRhbmNlU2NoZW1hLmFkZCh7IC4uLml0ZW0sIHN5bmNlZDogdHJ1ZSB9KVxyXG4gICAgICAgIC8vIH0pKVxyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgc2V0U2F2aW5nKCcnKVxyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEVtcGxveWVlIEF0dGVuZGFuY2VcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQmFja30+XHJcbiAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoRTMgLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDQgfX0gPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RW1wbG95ZWUgTmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+VGltZSBJTjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+VGltZSBPdXQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPk9ic2VydmF0aW9uPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Ob3RlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5BY3Rpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5Mj8ubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5uYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVUaW1lRmllbGQnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlVGltZUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGltZUluJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0aW1lSW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiREQvTU0vWVlZWS1ISDptbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKHJvdy50aW1lSW4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGltZSkgPT4gaGFuZGxlQ2hhbmdlKHJvdy5pZCwgJ3RpbWVJbicsIHRpbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVUaW1lRmllbGQnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlVGltZUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGltZU91dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ndGltZU91dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMocm93LnRpbWVPdXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIkREL01NL1lZWVktSEg6bW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGltZSkgPT4gaGFuZGxlQ2hhbmdlKHJvdy5pZCwgJ3RpbWVPdXQnLCB0aW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxODBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdvYnNlcnZhdGlvbic+PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdvYnNlcnZhdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J29ic2VydmF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm93Lm9ic2VydmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShyb3cuaWQsICdvYnNlcnZhdGlvbicsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUFwiPlByZXNlbnQoUCk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJBXCI+QWJzZW50KEEpPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiU1wiPlN1c3BlbmRlZChTKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkhcIj5IYWxmIERheShIKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlBIXCI+UHVibGljLUhvbGlkYXkoUEgpPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiU3RvcHBlZFwiPlN0b3BwZWQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCIjXCI+IzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdub3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J25vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm93Lm5vdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShyb3cuaWQsICdub3RlJywgZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcyODBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShyb3cuaWQpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2aW5nICE9PSAndHJ1ZScgPyA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPiA6IDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlNhdmluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkJhY2t9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VCYWNrfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkRvIHlvdSB3YW50IHRvIHN0b3AgY3JlYXRpbmcgQXR0ZW5kYW5jZSA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGUgOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiPiBJZiB5b3Ugc3RvcCBjcmVhdGluZyB3aXRob3V0IHNhdmluZywgYWxsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3Q8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9UZXdtVmlld0FkbWluJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+WWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ObzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdzdGF5Jyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBBZGQgTmV3XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3ByZXZpb3VzJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIEZhaWxlZCB0byBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVlQXR0ZW5kYW5jZUZvcm1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Nzcy9TaWRlYmFyTmV3LnNjc3MnXHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyBBY2NvdW50Qm94LCBBbGxJbmNsdXNpdmUsIEhvbWUsIEFzc2lnbm1lbnRJbmQsIFN1cGVydmlzZWRVc2VyQ2lyY2xlLCBDdXJyZW5jeUV4Y2hhbmdlIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5ncyc7XHJcbmltcG9ydCBHcm91cHNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvR3JvdXBzJztcclxuaW1wb3J0IFBheW1lbnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGF5bWVudCc7XHJcbmltcG9ydCBEYXNoYm9hcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGFzaGJvYXJkJztcclxuaW1wb3J0IENvbnRhY3RzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NvbnRhY3RzJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1CdXR0b24sIExpc3RJdGVtSWNvbiwgTGlzdEl0ZW1UZXh0LCBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmZ1bmN0aW9uIFNpZGViYXJEYXNoRTMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxDdXJyZW5jeUV4Y2hhbmdlIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUmF0ZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcblxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPEdyb3Vwc0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJFbXBsb3llZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFBheW1lbnRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGF5Um9sbFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxBY2NvdW50Qm94IC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVXNlciBBY2NvdW50XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxBc3NpZ25tZW50SW5kIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiR3JhbnQgQWNjZXNzXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8Q29udGFjdHNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHJvZmlsZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPSdMaXN0cm93ZGFzaCcgPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvUm9sZVBlcm1pc3Npb25cIiAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246J25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCB3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzQ1cHgnLCBmbGV4V3JhcDogJ25vd3JhcCcsIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgIGZsZXg6ICd3cmFwJyxjb2xvcjogJ3doaXRlJywgYWxpZ25JdGVtczonY2VudGVyJywgbWFyZ2luTGVmdDonMjBweCcsIGdhcDonMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0naWNvbjEnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8U3VwZXJ2aXNlZFVzZXJDaXJjbGUvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3RpdGxlbGlzdCc+IFJvbGVQZXJtaXNzaW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gIDwvbGk+Ki99XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJEYXNoRTMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoRTMiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJEZWxldGVJY29uIiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVIZWFkIiwiUGFwZXIiLCJUYWJsZUNvbnRhaW5lciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJBdXRvY29tcGxldGUiLCJzdHlsZWQiLCJCb3giLCJGb3JtTGFiZWwiLCJSYWRpb0dyb3VwIiwiRm9ybUNvbnRyb2xMYWJlbCIsIlJhZGlvIiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiTW9kYWwiLCJCYWNrZHJvcCIsIkRpdmlkZXIiLCJUYWJsZVJvdyIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkFkZCIsIkFycm93VXB3YXJkT3V0bGluZWQiLCJSZW1vdmVDaXJjbGVPdXRsaW5lIiwidjQiLCJ1c2VOYXZpZ2F0ZSIsIkRlbW9Db250YWluZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIkRhdGVQaWNrZXIiLCJkYXlqcyIsIkFycm93QmFjayIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2FkZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiQ2xvc2UiLCJlcnJvciIsIk1lc3NhZ2VBZG1pblZpZXciLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsIkRhdGVUaW1lRmllbGQiLCJUaW1lRmllbGQiLCJUaW1lUGlja2VyIiwiTGlnaHRUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJCbGFja1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNSIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmNiIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkVtcGxveWVlQXR0ZW5kYW5jZUZvcm0iLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmNyIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl9SZWFjdCR1c2VTdGF0ZSIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIm9wZW5CYWNrIiwic2V0T3BlbkJhY2siLCJoYW5kbGVPcGVuQmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlQmFjayIsImRhdGVBdHRlbmRhbmNlIiwiRGF0ZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZW1wbG95ZWUiLCJzZXRFbXBsb3llZSIsImZldGNoRW1wbG95ZWUiLCJfcmVmOCIsIl9yZXMkZGF0YSIsImZpbHRlciIsInJvdyIsIl9yb3ckZGVwYXJ0bWVudCIsInN0YXR1cyIsImRlcGFydG1lbnQiLCJ0b1VwcGVyQ2FzZSIsIm1hcCIsInJvdzIiLCJpZCIsIl9pZCIsIm5hbWUiLCJ0aW1lSW4iLCJ0aW1lT3V0Iiwib2JzZXJ2YXRpb24iLCJub3RlIiwiZGF5c1dOIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiaWRSb3ciLCJrZXkiLCJ2YWx1ZSIsImxpc3QiLCJpIiwiZmluZEluZGV4IiwiSXRlbSIsImRlbGV0ZUl0ZW0iLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInNlYXJjaDIiLCJzZXRTZWFyY2gyIiwiaGFuZGxlU2VhcmNoMiIsInRhcmdldCIsIm5ld0FycmF5MiIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVEZWNpc2lvbiIsImhpc3RvcnkiLCJiYWNrIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjkiLCJSZWZlcmVuY2VJbmZvIiwiaWRJbmZvIiwicGVyc29uIiwicmVhc29uIiwiZm9ybWF0IiwiZGF0ZU5vdGlmaWNhdGlvbiIsInBvc3QiLCJfeCIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJzYXZpbmciLCJzZXRTYXZpbmciLCJoYW5kbGVTdWJtaXQiLCJfcmVmMCIsInNhdmVBdHRlbmRhbmNlIiwiUHJvbWlzZSIsImFsbCIsIl94MiIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm9uQ2xpY2siLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwicGFkZGluZyIsIml0ZW0iLCJ4cyIsImZsb2F0IiwibGFiZWwiLCJvbkNoYW5nZSIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsInRpbWUiLCJodG1sRm9yIiwicmVxdWlyZWQiLCJ0aXRsZSIsImN1cnNvciIsInR5cGUiLCJ0ZXh0QWxpZ24iLCJvbkNsb3NlIiwicGxhY2VtZW50IiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwiZ2FwIiwiT3V0bGV0IiwiTmF2TGluayIsInVzZUxvY2F0aW9uIiwiQWNjb3VudEJveCIsIkFsbEluY2x1c2l2ZSIsIkhvbWUiLCJBc3NpZ25tZW50SW5kIiwiU3VwZXJ2aXNlZFVzZXJDaXJjbGUiLCJDdXJyZW5jeUV4Y2hhbmdlIiwiU2V0dGluZ3NJY29uIiwiR3JvdXBzSWNvbiIsIlBheW1lbnRJY29uIiwiRGFzaGJvYXJkSWNvbiIsIkNvbnRhY3RzSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsIkZyYWdtZW50IiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=