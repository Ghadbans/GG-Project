"use strict";
exports.id = "src_js_AdminView1_TewmViewAdmin_js";
exports.ids = ["src_js_AdminView1_TewmViewAdmin_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/esm/Add.js"
/*!*****************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Add.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), 'Add'));

/***/ },

/***/ "./src/js/AdminView1/TewmViewAdmin.js"
/*!********************************************!*\
  !*** ./src/js/AdminView1/TewmViewAdmin.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/SidebarDashE2 */ "./src/js/component/SidebarDashE2.js");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _PageView_EmployeeView_EmployeeTodayAttendance__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./PageView/EmployeeView/EmployeeTodayAttendance */ "./src/js/AdminView1/PageView/EmployeeView/EmployeeTodayAttendance.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabContext/TabContext.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabList/TabList.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabPanel/TabPanel.js");
/* harmony import */ var _PageView_EmployeeView_EmployeeAttendanceSheet__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./PageView/EmployeeView/EmployeeAttendanceSheet */ "./src/js/AdminView1/PageView/EmployeeView/EmployeeAttendanceSheet.js");
/* harmony import */ var _PageView_EmployeeView_EmployeePlaningView__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./PageView/EmployeeView/EmployeePlaningView */ "./src/js/AdminView1/PageView/EmployeeView/EmployeePlaningView.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
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








































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
function TewmViewAdmin() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_36__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_36__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_37__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_37__.setUser)({
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
        return _ref9.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var EmployeeInfoC = grantAccess.filter(row => row.moduleName === "Employee" && row.access.createM === true);
  var EmployeeInfoV = grantAccess.filter(row => row.moduleName === "Employee" && row.access.viewM === true);
  var EmployeeInfoU = grantAccess.filter(row => row.moduleName === "Employee" && row.access.editM === true);
  var EmployeeInfoD = grantAccess.filter(row => row.moduleName === "Employee" && row.access.deleteM === true);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_37__.logOut)());
    navigate('/');
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    show = _useState4[0],
    setShow = _useState4[1];
  var handleShow = e => {
    setShow(e);
  };
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    employee = _useState6[0],
    setEmployee = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingData = _useState8[0],
    setLoadingData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    reason = _useState0[0],
    setReason = _useState0[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/employee");
  var fetchData = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/employee"));
        var formatDate = res.data.data.map(item => _objectSpread(_objectSpread({}, item), {}, {
          id: item._id,
          dataField: dayjs__WEBPACK_IMPORTED_MODULE_33___default()(item.joinDate).format('DD/MM/YYYY')
        }));
        setEmployee(formatDate.reverse());
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    });
    return function fetchData() {
      return _ref1.apply(this, arguments);
    };
  }();
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loadingOpenModal = _useState12[0],
    setLoadingOpenModal = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    ErrorOpenModal = _useState14[0],
    setErrorOpenModal = _useState14[1];
  var handleOpenOffline = () => {
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
  var handleCreateNotificationOffline = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoName) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: ReferenceInfoName,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotificationOffline(_x, _x2) {
      return _ref10.apply(this, arguments);
    };
  }();
  var syncOff = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      // Online-only: syncOff logic removed
    });
    return function syncOff() {
      return _ref11.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchData();
  }, []);
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    open = _useState16[0],
    setOpen = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    DeleteId = _useState18[0],
    setDeleteId = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    modalOpenLoading = _useState20[0],
    setModalOpenLoading = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    selectedRows = _useState22[0],
    setSelectedRows = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    openDeleteMultiple = _useState24[0],
    setOpenDeleteMultiple = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    openReasonDelete = _useState26[0],
    setOpenReasonDelete = _useState26[1];
  var handleOpenReasonDelete = e => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  var handleOpenMultiple = () => {
    setOpenDeleteMultiple(true);
  };
  var handleCloseMultiple = () => {
    setOpenDeleteMultiple(false);
  };
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    openDeleteAll = _useState28[0],
    setOpenDeleteAll = _useState28[1];
  var handleOpenAll = () => {
    setOpenDeleteAll(true);
  };
  var handleCloseAll = () => {
    setOpenDeleteAll(false);
  };
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    setOpen(false);
  };
  var handleCloseModal = () => {
    setModalOpenLoading(false);
    setLoading(false);
    setOpen(false);
    setOpenDeleteAll(false);
    setOpenDeleteMultiple(false);
    fetchData();
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/delete-employee/").concat(DeleteId));
        if (res) {
          handleOpenModal();
        }
      } catch (error) {
        alert(error);
      }
    });
    return function handleDelete() {
      return _ref12.apply(this, arguments);
    };
  }();
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    EmployeeDeleted = _useState30[0],
    setEmployeeDeleted = _useState30[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchFunction = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        var deletePromises = selectedRows.map(/*#__PURE__*/function () {
          var _ref14 = _asyncToGenerator(function* (idToDelete) {
            return axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/get-employee/").concat(idToDelete));
          });
          return function (_x3) {
            return _ref14.apply(this, arguments);
          };
        }());
        try {
          var res = yield Promise.all(deletePromises);
          setEmployeeDeleted(res.map(row => row.data.data.employeeName));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchFunction() {
        return _ref13.apply(this, arguments);
      };
    }();
    fetchFunction();
  }, [selectedRows]);
  var related = EmployeeDeleted.map(row => row);
  var info = related.toString();
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + info,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref15.apply(this, arguments);
    };
  }();
  var handleDeleteMany = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var deletePromises = selectedRows.map(/*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator(function* (idToDelete) {
          return axios__WEBPACK_IMPORTED_MODULE_29__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/delete-employee/").concat(idToDelete));
        });
        return function (_x5) {
          return _ref17.apply(this, arguments);
        };
      }());
      try {
        var res = yield Promise.all(deletePromises);
        if (res) {
          handleCreateNotification();
          handleOpenModal();
        }
      } catch (error) {
        console.log(error);
      }
    });
    return function handleDeleteMany(_x4) {
      return _ref16.apply(this, arguments);
    };
  }();
  {/** search start */}
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    searchEmployee = _useState32[0],
    setSearchEmployee = _useState32[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    var storedValue = localStorage.getItem('QuickFilterEmployee');
    if (storedValue) {
      setSearchEmployee(storedValue);
    }
  });
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filterModel = _React$useState2[0],
    setFilterModel = _React$useState2[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState34 = _slicedToArray(_useState33, 2),
    columnVisibilityModel = _useState34[0],
    setColumnVisibilityModel = _useState34[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsEmployee', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterEmployeeTst', JSON.stringify(newModel));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterEmployeeTst'));
    if (storedQuick) {
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsEmployee'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchEmployee]);
  {/** search end */}
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default().useState('1'),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    value3 = _React$useState6[0],
    setValue3 = _React$useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result = localStorage.getItem('SelectEmployeeView');
    if (result) {
      setValue3(result);
    }
  });
  var handleChange3 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('SelectEmployeeView', changeValue);
  };
  var columns = [{
    field: 'dataField',
    headerName: 'Date',
    width: 100
  }, {
    field: 'employeeName',
    headerName: 'EmployeeName',
    width: 170
  }, {
    field: 'employeeAddress',
    headerName: 'Address',
    width: 220
  }, {
    field: 'employeeRole',
    headerName: 'Role',
    width: 120
  }, {
    field: 'department',
    headerName: 'Department',
    width: 190
  }, {
    field: 'view',
    headerName: 'View',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      disabled: EmployeeInfoV.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/EmployeeViewAdminAll/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        color: '#202a5a'
      }
    })))))
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      disabled: EmployeeInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/EmployeeUpdateView/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        color: 'gray'
      }
    })))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onClick: handleOpenAll,
      disabled: EmployeeInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  var columns1 = [{
    field: 'dataField',
    headerName: 'Date',
    width: 100
  }, {
    field: 'employeeName',
    headerName: 'EmployeeName',
    width: 200
  }, {
    field: 'status',
    headerName: 'Address',
    width: 180,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      color: params.row.status === "Resign" ? "#801313" : params.row.status === "Suspended" ? "#fb8c00" : params.row.status === "Fired" ? "red" : params.row.status === "Employed" ? "blue" : "black"
    }, params.row.status !== undefined ? params.row.status : 'Undefined')
  }, {
    field: 'employeeRole',
    headerName: 'Role',
    width: sideBar ? 100 : 200
  }, {
    field: 'salary',
    headerName: 'Salary',
    width: sideBar ? 200 : 240,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC", parseFloat(Number(params.row.salary) + Number(params.row.basicTransport) + Number(params.row.foodBasic) + Number(params.row.bounceAllowances) + Number(params.row.other)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))
  }, {
    field: 'department',
    headerName: 'Department',
    width: 150
  }, {
    field: 'view',
    headerName: 'View',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      disabled: user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/EmployeeViewAdminAll/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        color: '#202a5a'
      }
    })))))
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      disabled: user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/EmployeeUpdateView/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        color: 'gray'
      }
    })))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      disabled: user.data.role !== 'CEO',
      onClick: handleOpenAll
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_22__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_21__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_27__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_44__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_43__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_21__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_28__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_21__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_26__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_34__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_45__["default"], {
    value: value3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_46__["default"], {
    onChange: handleChange3,
    "aria-label": "lab API tabs example",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "Employee",
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "Today's Attendance",
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "Attendance Sheet",
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "Today's Assignment",
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_47__["default"], {
    value: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      marginTop: '-60px',
      height: 580,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, employee.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, selectedRows.length > 1 && selectedRows.length < employee.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: user.data.role !== 'CEO',
    onClick: handleOpenAll,
    className: "btnCustomer2"
  }, "Delete multiple"), selectedRows.length === employee.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleOpenAll,
    disabled: user.data.role !== 'CEO',
    className: "btnCustomer2"
  }, "Delete all") : '') : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: EmployeeInfoC.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
    to: '/EmployeeFormView',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], null)))))))), user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__.DataGrid, {
    rows: employee,
    columns: columns1,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__.GridToolbar
    },
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    checkboxSelection: true,
    disableDensitySelector: true,
    rowSelectionModel: selectedRows,
    filterModel: filterModel,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__.DataGrid, {
    rows: employee,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__.GridToolbar
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    checkboxSelection: true,
    disableDensitySelector: true,
    rowSelectionModel: selectedRows,
    filterModel: filterModel,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_47__["default"], {
    value: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_EmployeeView_EmployeeTodayAttendance__WEBPACK_IMPORTED_MODULE_42__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_47__["default"], {
    value: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      marginLeft: '-35px',
      marginRight: '-35px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
    to: "/EmployeeAttendanceForm",
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer"
  }, "Check-In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
    to: "/EmployeeAttendanceFormOut",
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer"
  }, "Check-Out"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_EmployeeView_EmployeeAttendanceSheet__WEBPACK_IMPORTED_MODULE_48__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_47__["default"], {
    value: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      marginLeft: '-35px',
      marginRight: '-35px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
    to: '/EmployeePlaningForm',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], null))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_EmployeeView_EmployeePlaningView__WEBPACK_IMPORTED_MODULE_49__["default"], {
    user: user
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: loadingOpenModal,
    onClose: handleCloseModal,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_15__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_34__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_35__["default"], {
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
    onClick: handleCloseModal,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Do you want to Delete ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer2",
    onClick: handleDelete
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleClose
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: openDeleteMultiple,
    onClose: handleCloseMultiple,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Do you want to Delete ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer2",
    onClick: handleDeleteMany
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseMultiple
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: openDeleteAll,
    onClose: handleCloseAll,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Do you want to Delete ?"), selectedRows.length === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " Selected rows will be deleted"), selectedRows.length > 1 && selectedRows.length < employee.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), selectedRows.length === employee.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All rows will be deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer2",
    onClick: handleOpenReasonDelete
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseAll
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: modalOpenLoading,
    onClose: handleCloseModal,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_15__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_34__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data successfully deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseModal,
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: handleCloseReasonDelete,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: ", info, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleDeleteMany
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    required: true,
    id: "reason",
    name: "reason",
    multiline: true,
    rows: 4,
    value: reason,
    placeholder: "Reason",
    onChange: e => setReason(e.target.value),
    label: "Reason",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TewmViewAdmin);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfVGV3bVZpZXdBZG1pbl9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxTQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOVixDQUFtRDtBQUMvQjtBQUNtQztBQUNIO0FBQ3NCO0FBQ3hDO0FBQzBCO0FBQ1o7QUFDSTtBQUNJO0FBQ1E7QUFDdUw7QUFDMU07QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ0k7QUFDSTtBQUNWO0FBQ1U7QUFDYztBQUNJO0FBQ3hDO0FBQ2tCO0FBQ2tCO0FBQ3BDO0FBQ2U7QUFDcUI7QUFDUjtBQUMwQjtBQUNoQztBQUNUO0FBQ2tCO0FBQzZCO0FBQ3BDO0FBQ1E7QUFDRDtBQUM2QjtBQUVSO0FBRTlFLElBQU13RSxhQUFhLEdBQUd6RCwwREFBTSxDQUFDMEQsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2pEN0UsMERBQUEsQ0FBQ1csNkRBQU8sRUFBQW9FLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxLQUFBLENBQUxDLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBT3hFLDhEQUFjLENBQUN5RSxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxLQUFLO01BQ3RCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUssQ0FB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RUFBRSxRQUFRO01BQUVnQyxPQUFPLEVBQUU7SUFBTyxDQUFFO0lBQUN2UixPQUFPLEVBQUU7RUFBRSxnQkFDM0VwSSwwREFBQSxDQUFDMEIsc0RBQUk7SUFBQ29MLElBQUk7SUFBQ3VOLEVBQUUsRUFBRTtFQUFHLGdCQUNoQnJhLDBEQUFBLENBQUNpQyxzREFBUztJQUNScVksUUFBUTtJQUNSN1EsRUFBRSxFQUFDLFFBQVE7SUFDWCtOLElBQUksRUFBQyxRQUFRO0lBQ2IrQyxTQUFTO0lBQ1QxQixJQUFJLEVBQUUsQ0FBRTtJQUNSVCxLQUFLLEVBQUU1TCxNQUFPO0lBQ2RnTyxXQUFXLEVBQUMsUUFBUTtJQUNwQm5DLFFBQVEsRUFBR3hNLENBQUMsSUFBS1ksU0FBUyxDQUFDWixDQUFDLENBQUM0TyxNQUFNLENBQUNyQyxLQUFLLENBQUU7SUFDM0NFLEtBQUssRUFBQyxRQUFRO0lBQ2R2QixFQUFFLEVBQUU7TUFBRXZRLEtBQUssRUFBRSxNQUFNO01BQUVsQixlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ0csQ0FBQyxlQUNQdEYsMERBQUEsV0FBSyxDQUFDLGVBQ05BLDBEQUFBLENBQUMwQixzREFBSTtJQUFDb0wsSUFBSTtJQUFDdU4sRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCcmEsMERBQUE7SUFBUTBhLElBQUksRUFBQyxRQUFRO0lBQUNoVyxTQUFTLEVBQUMsYUFBYTtJQUFDeUIsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRTtJQUFPO0VBQUUsR0FBQyxNQUFZLENBQ2hGLENBQ0YsQ0FDRixDQUVILENBQ0EsQ0FDSixDQUFDO0FBRVY7QUFFQSxpRUFBZStCLGFBQWEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vQWRkLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9UZXdtVmlld0FkbWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCJcbn0pLCAnQWRkJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi92aWV3LmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaEUyIGZyb20gJy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaEUyJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgJy4vUGFnZVZpZXcvQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBWaXNpYmlsaXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHknO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0JztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCB7IFRhYmxlLCBJY29uQnV0dG9uLCBzdHlsZWQsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBDaGVja2JveCwgVGFibGVDb250YWluZXIsIFBhcGVyLCBUeXBvZ3JhcGh5LCBNb2RhbCwgQm94LCBHcmlkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBNZW51SXRlbSwgQmFja2Ryb3AsIEF1dG9jb21wbGV0ZSwgVGV4dEZpZWxkLCBUYWIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgQWRkLCBDbG9zZSwgTWFpbE91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9pbWcvbm8tZGF0YS5wbmcnO1xyXG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZFRvb2xiYXIgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuaW1wb3J0IEVtcGxveWVlVG9kYXlBdHRlbmRhbmNlIGZyb20gJy4vUGFnZVZpZXcvRW1wbG95ZWVWaWV3L0VtcGxveWVlVG9kYXlBdHRlbmRhbmNlJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5pbXBvcnQgeyBUYWJDb250ZXh0LCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ0BtdWkvbGFiJztcclxuaW1wb3J0IEVtcGxveWVlQXR0ZW5kYW5jZVNoZWV0IGZyb20gJy4vUGFnZVZpZXcvRW1wbG95ZWVWaWV3L0VtcGxveWVlQXR0ZW5kYW5jZVNoZWV0JztcclxuXHJcbmltcG9ydCBFbXBsb3llZVBsYW5pbmdWaWV3IGZyb20gJy4vUGFnZVZpZXcvRW1wbG95ZWVWaWV3L0VtcGxveWVlUGxhbmluZ1ZpZXcnO1xyXG5cclxuY29uc3QgRGVsZXRlVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEVkaXRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgVmlld1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIFRld21WaWV3QWRtaW4oKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUsIGlkOiByZXMuZGF0YS5kYXRhLl9pZCB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG4gIGNvbnN0IFtncmFudEFjY2Vzcywgc2V0R3JhbnRBY2Nlc3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ncmFudEFjY2Vzc2ApO1xyXG4gICAgICAgIHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnVzZXJJRCA9PT0gdXNlci5kYXRhLmlkKVxyXG4gICAgICAgICAgLm1hcCgocm93KSA9PiBzZXRHcmFudEFjY2Vzcyhyb3cubW9kdWxlcykpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoTnVtYmVyKClcclxuICB9LCBbdXNlcl0pXHJcbiAgY29uc3QgRW1wbG95ZWVJbmZvQyA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJFbXBsb3llZVwiICYmIHJvdy5hY2Nlc3MuY3JlYXRlTSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgRW1wbG95ZWVJbmZvViA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJFbXBsb3llZVwiICYmIHJvdy5hY2Nlc3Mudmlld00gPT09IHRydWUpO1xyXG4gIGNvbnN0IEVtcGxveWVlSW5mb1UgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiRW1wbG95ZWVcIiAmJiByb3cuYWNjZXNzLmVkaXRNID09PSB0cnVlKTtcclxuICBjb25zdCBFbXBsb3llZUluZm9EID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkVtcGxveWVlXCIgJiYgcm93LmFjY2Vzcy5kZWxldGVNID09PSB0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcblxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3cgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvdyhlKTtcclxuICB9XHJcbiAgY29uc3QgW2VtcGxveWVlLCBzZXRFbXBsb3llZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBhcGlVcmwgPSBgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVlYDtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZW1wbG95ZWVgKVxyXG4gICAgICBjb25zdCBmb3JtYXREYXRlID0gcmVzLmRhdGEuZGF0YS5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICBpZDogaXRlbS5faWQsXHJcbiAgICAgICAgZGF0YUZpZWxkOiBkYXlqcyhpdGVtLmpvaW5EYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSxcclxuICAgICAgfSkpXHJcbiAgICAgIHNldEVtcGxveWVlKGZvcm1hdERhdGUucmV2ZXJzZSgpKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuT2ZmbGluZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uT2ZmbGluZSA9IGFzeW5jIChSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTmFtZSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBSZWZlcmVuY2VJbmZvLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgQ3JlYXRlZCAnLFxyXG4gICAgICByZWFzb246IFJlZmVyZW5jZUluZm9OYW1lLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3Qgc3luY09mZiA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIE9ubGluZS1vbmx5OiBzeW5jT2ZmIGxvZ2ljIHJlbW92ZWRcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtEZWxldGVJZCwgc2V0RGVsZXRlSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21vZGFsT3BlbkxvYWRpbmcsIHNldE1vZGFsT3BlbkxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFJvd3MsIHNldFNlbGVjdGVkUm93c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29wZW5EZWxldGVNdWx0aXBsZSwgc2V0T3BlbkRlbGV0ZU11bHRpcGxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlblJlYXNvbkRlbGV0ZSwgc2V0T3BlblJlYXNvbkRlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5SZWFzb25EZWxldGUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuUmVhc29uRGVsZXRlKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuUmVhc29uRGVsZXRlKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5NdWx0aXBsZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EZWxldGVNdWx0aXBsZSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTXVsdGlwbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGVsZXRlTXVsdGlwbGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW29wZW5EZWxldGVBbGwsIHNldE9wZW5EZWxldGVBbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuQWxsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZUFsbCh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQWxsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZUFsbChmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPcGVuID0gKGlkKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgc2V0RGVsZXRlSWQoaWQpXHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbE9wZW5Mb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbE9wZW5Mb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBzZXRPcGVuRGVsZXRlQWxsKGZhbHNlKTtcclxuICAgIHNldE9wZW5EZWxldGVNdWx0aXBsZShmYWxzZSk7XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtFTkRQT0lOVF9VUkx9L2RlbGV0ZS1lbXBsb3llZS8ke0RlbGV0ZUlkfWApO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlT3Blbk1vZGFsKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IFtFbXBsb3llZURlbGV0ZWQsIHNldEVtcGxveWVlRGVsZXRlZF0gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZGVsZXRlUHJvbWlzZXMgPSBzZWxlY3RlZFJvd3MubWFwKGFzeW5jIChpZFRvRGVsZXRlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZS8ke2lkVG9EZWxldGV9YClcclxuICAgICAgfSlcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChkZWxldGVQcm9taXNlcyk7XHJcbiAgICAgICAgc2V0RW1wbG95ZWVEZWxldGVkKHJlcy5tYXAoKHJvdykgPT4gcm93LmRhdGEuZGF0YS5lbXBsb3llZU5hbWUpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaEZ1bmN0aW9uKClcclxuICB9LCBbc2VsZWN0ZWRSb3dzXSlcclxuICBjb25zdCByZWxhdGVkID0gRW1wbG95ZWVEZWxldGVkLm1hcChyb3cgPT4gcm93KVxyXG4gIGNvbnN0IGluZm8gPSByZWxhdGVkLnRvU3RyaW5nKClcclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86ICcnLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgRGVsZXRlZCAnICsgaW5mbyxcclxuICAgICAgcmVhc29uLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlTWFueSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGRlbGV0ZVByb21pc2VzID0gc2VsZWN0ZWRSb3dzLm1hcChhc3luYyAoaWRUb0RlbGV0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLWVtcGxveWVlLyR7aWRUb0RlbGV0ZX1gKVxyXG4gICAgfSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKGRlbGV0ZVByb21pc2VzKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbigpXHJcbiAgICAgICAgaGFuZGxlT3Blbk1vZGFsKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICB7LyoqIHNlYXJjaCBzdGFydCAqLyB9XHJcbiAgY29uc3QgW3NlYXJjaEVtcGxveWVlLCBzZXRTZWFyY2hFbXBsb3llZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlckVtcGxveWVlJylcclxuICAgIGlmIChzdG9yZWRWYWx1ZSkge1xyXG4gICAgICBzZXRTZWFyY2hFbXBsb3llZShzdG9yZWRWYWx1ZSlcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IFtmaWx0ZXJNb2RlbCwgc2V0RmlsdGVyTW9kZWxdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgaXRlbXM6IFtdLFxyXG4gICAgcXVpY2tGaWx0ZXJFeGNsdWRlSGlkZGVuQ29sdW1uczogdHJ1ZSxcclxuICAgIHF1aWNrRmlsdGVyVmFsdWVzOiBbXSxcclxuICB9KTtcclxuICBjb25zdCBbY29sdW1uVmlzaWJpbGl0eU1vZGVsLCBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWxdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IGhhbmRlbEhpZGRlbkNvbHVtbiA9IChuZXdIaWRkZW4pID0+IHtcclxuICAgIHNldENvbHVtblZpc2liaWxpdHlNb2RlbChuZXdIaWRkZW4pXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnSGlkZGVuQ29sdW1uc0VtcGxveWVlJywgSlNPTi5zdHJpbmdpZnkobmV3SGlkZGVuKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbHRlciA9IChuZXdNb2RlbCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyTW9kZWwobmV3TW9kZWwpXHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1F1aWNrRmlsdGVyRW1wbG95ZWVUc3QnLCBKU09OLnN0cmluZ2lmeShuZXdNb2RlbCkpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRRdWljayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1F1aWNrRmlsdGVyRW1wbG95ZWVUc3QnKSlcclxuICAgIGlmIChzdG9yZWRRdWljaykge1xyXG4gICAgICBzZXRGaWx0ZXJNb2RlbChzdG9yZWRRdWljaylcclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3JlZENvbHVtbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdIaWRkZW5Db2x1bW5zRW1wbG95ZWUnKSlcclxuICAgIGlmIChzdG9yZWRDb2x1bW5zKSB7XHJcbiAgICAgIHNldENvbHVtblZpc2liaWxpdHlNb2RlbChzdG9yZWRDb2x1bW5zKVxyXG4gICAgfVxyXG5cclxuICB9LCBbc2VhcmNoRW1wbG95ZWVdKVxyXG4gIHsvKiogc2VhcmNoIGVuZCAqLyB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICBjb25zdCBbdmFsdWUzLCBzZXRWYWx1ZTNdID0gUmVhY3QudXNlU3RhdGUoJzEnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTZWxlY3RFbXBsb3llZVZpZXcnKVxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBzZXRWYWx1ZTMocmVzdWx0KVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlMyA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gbmV3VmFsdWVcclxuICAgIHNldFZhbHVlMyhjaGFuZ2VWYWx1ZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnU2VsZWN0RW1wbG95ZWVWaWV3JywgY2hhbmdlVmFsdWUpXHJcbiAgfTtcclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgeyBmaWVsZDogJ2RhdGFGaWVsZCcsIGhlYWRlck5hbWU6ICdEYXRlJywgd2lkdGg6IDEwMCB9LFxyXG4gICAgeyBmaWVsZDogJ2VtcGxveWVlTmFtZScsIGhlYWRlck5hbWU6ICdFbXBsb3llZU5hbWUnLCB3aWR0aDogMTcwIH0sXHJcbiAgICB7IGZpZWxkOiAnZW1wbG95ZWVBZGRyZXNzJywgaGVhZGVyTmFtZTogJ0FkZHJlc3MnLCB3aWR0aDogMjIwIH0sXHJcbiAgICB7IGZpZWxkOiAnZW1wbG95ZWVSb2xlJywgaGVhZGVyTmFtZTogJ1JvbGUnLCB3aWR0aDogMTIwIH0sXHJcbiAgICB7IGZpZWxkOiAnZGVwYXJ0bWVudCcsIGhlYWRlck5hbWU6ICdEZXBhcnRtZW50Jywgd2lkdGg6IDE5MCB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ3ZpZXcnLCBoZWFkZXJOYW1lOiAnVmlldycsIHdpZHRoOiA1MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIlZpZXdcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17RW1wbG95ZWVJbmZvVi5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9FbXBsb3llZVZpZXdBZG1pbkFsbC8ke3BhcmFtcy5yb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgPFZpc2liaWxpdHlJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdlZGl0JywgaGVhZGVyTmFtZTogJ0VkaXQnLCB3aWR0aDogNTAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8RWRpdFRvb2x0aXAgdGl0bGU9XCJFZGl0XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e0VtcGxveWVlSW5mb1UubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvRW1wbG95ZWVVcGRhdGVWaWV3LyR7cGFyYW1zLnJvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICA8RWRpdEljb24gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRWRpdFRvb2x0aXA+XHJcblxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ0RlbGV0ZScsIGhlYWRlck5hbWU6ICdEZWxldGUnLCB3aWR0aDogNTAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8RGVsZXRlVG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgPHNwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQWxsfSBkaXNhYmxlZD17RW1wbG95ZWVJbmZvRC5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRGVsZXRlVG9vbHRpcD5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICBdXHJcbiAgY29uc3QgY29sdW1uczEgPSBbXHJcbiAgICB7IGZpZWxkOiAnZGF0YUZpZWxkJywgaGVhZGVyTmFtZTogJ0RhdGUnLCB3aWR0aDogMTAwIH0sXHJcbiAgICB7IGZpZWxkOiAnZW1wbG95ZWVOYW1lJywgaGVhZGVyTmFtZTogJ0VtcGxveWVlTmFtZScsIHdpZHRoOiAyMDAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdzdGF0dXMnLCBoZWFkZXJOYW1lOiAnQWRkcmVzcycsIHdpZHRoOiAxODAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIGNvbG9yPXtcclxuICAgICAgICAgICAgcGFyYW1zLnJvdy5zdGF0dXMgPT09IFwiUmVzaWduXCJcclxuICAgICAgICAgICAgICA/IFwiIzgwMTMxM1wiIDpcclxuICAgICAgICAgICAgICBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJTdXNwZW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgPyBcIiNmYjhjMDBcIiA6XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJGaXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgID8gXCJyZWRcIiA6XHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIkVtcGxveWVkXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiYmx1ZVwiIDogXCJibGFja1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3BhcmFtcy5yb3cuc3RhdHVzICE9PSB1bmRlZmluZWQgPyBwYXJhbXMucm93LnN0YXR1cyA6ICdVbmRlZmluZWQnfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIH0sXHJcbiAgICB7IGZpZWxkOiAnZW1wbG95ZWVSb2xlJywgaGVhZGVyTmFtZTogJ1JvbGUnLCB3aWR0aDogc2lkZUJhciA/IDEwMCA6IDIwMCB9LFxyXG4gICAgeyBmaWVsZDogJ3NhbGFyeScsIGhlYWRlck5hbWU6ICdTYWxhcnknLCB3aWR0aDogc2lkZUJhciA/IDIwMCA6IDI0MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gPHNwYW4+RkN7cGFyc2VGbG9hdChOdW1iZXIocGFyYW1zLnJvdy5zYWxhcnkpICsgTnVtYmVyKHBhcmFtcy5yb3cuYmFzaWNUcmFuc3BvcnQpICsgTnVtYmVyKHBhcmFtcy5yb3cuZm9vZEJhc2ljKSArIE51bWJlcihwYXJhbXMucm93LmJvdW5jZUFsbG93YW5jZXMpICsgTnVtYmVyKHBhcmFtcy5yb3cub3RoZXIpKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPiB9LFxyXG4gICAgeyBmaWVsZDogJ2RlcGFydG1lbnQnLCBoZWFkZXJOYW1lOiAnRGVwYXJ0bWVudCcsIHdpZHRoOiAxNTAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICd2aWV3JywgaGVhZGVyTmFtZTogJ1ZpZXcnLCB3aWR0aDogNTAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJWaWV3XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvRW1wbG95ZWVWaWV3QWRtaW5BbGwvJHtwYXJhbXMucm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5SWNvbiBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnZWRpdCcsIGhlYWRlck5hbWU6ICdFZGl0Jywgd2lkdGg6IDUwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPEVkaXRUb29sdGlwIHRpdGxlPVwiRWRpdFwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0VtcGxveWVlVXBkYXRlVmlldy8ke3BhcmFtcy5yb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgPEVkaXRJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0VkaXRUb29sdGlwPlxyXG5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdEZWxldGUnLCBoZWFkZXJOYW1lOiAnRGVsZXRlJywgd2lkdGg6IDUwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPERlbGV0ZVRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIj5cclxuICAgICAgICAgIDxzcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30gb25DbGljaz17aGFuZGxlT3BlbkFsbH0+XHJcbiAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0RlbGV0ZVRvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgXVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuXHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRW1wbG95ZWVcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNpZGVCYXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2lkZUJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaEUyIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAxIH19ID5cclxuICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICB7bG9hZGluZ0RhdGEgPyA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJzEyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IDogKFxyXG4gICAgICAgICAgICAgICAgPFRhYkNvbnRleHQgdmFsdWU9e3ZhbHVlM31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGFiIEFQSSB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtcGxveWVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRvZGF5J3MgQXR0ZW5kYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBdHRlbmRhbmNlIFNoZWV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRvZGF5J3MgQXNzaWdubWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBtYXJnaW5Ub3A6ICctNjBweCcsIGhlaWdodDogNTgwLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIG1hcmdpbjogJzEwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VtcGxveWVlLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPiAxICYmIHNlbGVjdGVkUm93cy5sZW5ndGggPCBlbXBsb3llZS5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30gb25DbGljaz17aGFuZGxlT3BlbkFsbH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInPkRlbGV0ZSBtdWx0aXBsZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID09PSBlbXBsb3llZS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQWxsfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+RGVsZXRlIGFsbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIG1hcmdpbjogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17RW1wbG95ZWVJbmZvQy5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9FbXBsb3llZUZvcm1WaWV3J30gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyQWRkaW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17ZW1wbG95ZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RzPXt7IHRvb2xiYXI6IEdyaWRUb29sYmFyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJvd1NlbGVjdGlvbk1vZGVsQ2hhbmdlPXsobmV3U2VsZWN0aW9uKSA9PiBzZXRTZWxlY3RlZFJvd3MobmV3U2VsZWN0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1F1aWNrRmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVRvb2xiYXJCdXR0b246IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94U2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRGVuc2l0eVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb25Nb2RlbD17c2VsZWN0ZWRSb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTW9kZWw9e2ZpbHRlck1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GaWx0ZXJNb2RlbENoYW5nZT17KG5ld01vZGVsKSA9PiBoYW5kbGVGaWx0ZXIobmV3TW9kZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uVmlzaWJpbGl0eU1vZGVsPXtjb2x1bW5WaXNpYmlsaXR5TW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZT17aGFuZGVsSGlkZGVuQ29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBwYWRkaW5nOiAnMTBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogPERhdGFHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtlbXBsb3llZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90cz17eyB0b29sYmFyOiBHcmlkVG9vbGJhciB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UXVpY2tGaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVG9vbGJhckJ1dHRvbjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVEZW5zaXR5U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbk1vZGVsPXtzZWxlY3RlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJNb2RlbD17ZmlsdGVyTW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZpbHRlck1vZGVsQ2hhbmdlPXsobmV3TW9kZWwpID0+IGhhbmRsZUZpbHRlcihuZXdNb2RlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WaXNpYmlsaXR5TW9kZWw9e2NvbHVtblZpc2liaWxpdHlNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29sdW1uVmlzaWJpbGl0eU1vZGVsQ2hhbmdlPXtoYW5kZWxIaWRkZW5Db2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICcxMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RW1wbG95ZWVUb2RheUF0dGVuZGFuY2UgLz5cclxuICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgbWFyZ2luTGVmdDogJy0zNXB4JywgbWFyZ2luUmlnaHQ6ICctMzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgbWFyZ2luOiAnMTBweCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9FbXBsb3llZUF0dGVuZGFuY2VGb3JtXCIgY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcic+Q2hlY2stSW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvRW1wbG95ZWVBdHRlbmRhbmNlRm9ybU91dFwiIGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPkNoZWNrLU91dDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RW1wbG95ZWVBdHRlbmRhbmNlU2hlZXQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpbkxlZnQ6ICctMzVweCcsIG1hcmdpblJpZ2h0OiAnLTM1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIG1hcmdpbjogJzEwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsnL0VtcGxveWVlUGxhbmluZ0Zvcm0nfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyQWRkaW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxFbXBsb3llZVBsYW5pbmdWaWV3IHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJDb250ZXh0Pil9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgb25DbGljaz17aGFuZGxlRGVsZXRlfT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5EZWxldGVNdWx0aXBsZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU11bHRpcGxlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8aDI+RG8geW91IHdhbnQgdG8gRGVsZXRlID88L2gyPlxyXG4gICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPiBBbGwgc2VsZWN0ZWQgcm93cyB3aWxsIGJlIGRlbGV0ZWQ8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZU1hbnl9PlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZU11bHRpcGxlfT5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuRGVsZXRlQWxsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlQWxsfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8aDI+RG8geW91IHdhbnQgdG8gRGVsZXRlID88L2gyPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPiBTZWxlY3RlZCByb3dzIHdpbGwgYmUgZGVsZXRlZDwvcD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPiAxICYmIHNlbGVjdGVkUm93cy5sZW5ndGggPCBlbXBsb3llZS5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHNlbGVjdGVkIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PT0gZW1wbG95ZWUubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZTo8L3NwYW4+IEFsbCByb3dzIHdpbGwgYmUgZGVsZXRlZDwvcD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgb25DbGljaz17aGFuZGxlT3BlblJlYXNvbkRlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQWxsfT5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXttb2RhbE9wZW5Mb2FkaW5nfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+IERhdGEgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5SZWFzb25EZWxldGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VSZWFzb25EZWxldGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgV2h5IGRvIHlvdSB3YW50IHRvIGRlbGV0ZToge2luZm99P1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZURlbGV0ZU1hbnl9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdSZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J1JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXdtVmlld0FkbWluXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2hFMiIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJWaXNpYmlsaXR5SWNvbiIsIkVkaXRJY29uIiwiRGVsZXRlSWNvbiIsIk5hdkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIlRhYmxlIiwiSWNvbkJ1dHRvbiIsInN0eWxlZCIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiQ2hlY2tib3giLCJUYWJsZUNvbnRhaW5lciIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsIk1vZGFsIiwiQm94IiwiR3JpZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIk1lbnVJdGVtIiwiQmFja2Ryb3AiLCJBdXRvY29tcGxldGUiLCJUZXh0RmllbGQiLCJUYWIiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJEaXZpZGVyIiwiQ29udGFpbmVyIiwiTGluayIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkFkZCIsIkNsb3NlIiwiTWFpbE91dGxpbmUiLCJkYXlqcyIsIkxvYWRlciIsIkNoZWNrQ2lyY2xlSWNvbiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJJbWFnZSIsIkRhdGFHcmlkIiwiR3JpZFRvb2xiYXIiLCJFbXBsb3llZVRvZGF5QXR0ZW5kYW5jZSIsIk1lc3NhZ2VBZG1pblZpZXciLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsIlRhYkNvbnRleHQiLCJUYWJMaXN0IiwiVGFiUGFuZWwiLCJFbXBsb3llZUF0dGVuZGFuY2VTaGVldCIsIkVtcGxveWVlUGxhbmluZ1ZpZXciLCJEZWxldGVUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJFZGl0VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIlRld21WaWV3QWRtaW4iLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmOSIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiaWQiLCJfaWQiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImdyYW50QWNjZXNzIiwic2V0R3JhbnRBY2Nlc3MiLCJmZXRjaE51bWJlciIsIl9yZWYwIiwiX3JlcyRkYXRhIiwiZmlsdGVyIiwicm93IiwidXNlcklEIiwibWFwIiwibW9kdWxlcyIsIkVtcGxveWVlSW5mb0MiLCJtb2R1bGVOYW1lIiwiYWNjZXNzIiwiY3JlYXRlTSIsIkVtcGxveWVlSW5mb1YiLCJ2aWV3TSIsIkVtcGxveWVlSW5mb1UiLCJlZGl0TSIsIkVtcGxveWVlSW5mb0QiLCJkZWxldGVNIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2hvdyIsInNldFNob3ciLCJoYW5kbGVTaG93IiwiZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiZW1wbG95ZWUiLCJzZXRFbXBsb3llZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwicmVhc29uIiwic2V0UmVhc29uIiwiYXBpVXJsIiwiZmV0Y2hEYXRhIiwiX3JlZjEiLCJmb3JtYXREYXRlIiwiaXRlbSIsImRhdGFGaWVsZCIsImpvaW5EYXRlIiwiZm9ybWF0IiwicmV2ZXJzZSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuT2ZmbGluZSIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbk9mZmxpbmUiLCJfcmVmMTAiLCJSZWZlcmVuY2VJbmZvIiwiUmVmZXJlbmNlSW5mb05hbWUiLCJpZEluZm8iLCJwZXJzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwiRGF0ZSIsInBvc3QiLCJsb2ciLCJfeCIsIl94MiIsInN5bmNPZmYiLCJfcmVmMTEiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2Iiwic2V0T3BlbiIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJEZWxldGVJZCIsInNldERlbGV0ZUlkIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsIm1vZGFsT3BlbkxvYWRpbmciLCJzZXRNb2RhbE9wZW5Mb2FkaW5nIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsInNlbGVjdGVkUm93cyIsInNldFNlbGVjdGVkUm93cyIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJvcGVuRGVsZXRlTXVsdGlwbGUiLCJzZXRPcGVuRGVsZXRlTXVsdGlwbGUiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2Iiwib3BlblJlYXNvbkRlbGV0ZSIsInNldE9wZW5SZWFzb25EZWxldGUiLCJoYW5kbGVPcGVuUmVhc29uRGVsZXRlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSIsImhhbmRsZU9wZW5NdWx0aXBsZSIsImhhbmRsZUNsb3NlTXVsdGlwbGUiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4Iiwib3BlbkRlbGV0ZUFsbCIsInNldE9wZW5EZWxldGVBbGwiLCJoYW5kbGVPcGVuQWxsIiwiaGFuZGxlQ2xvc2VBbGwiLCJoYW5kbGVPcGVuIiwiaGFuZGxlT3Blbk1vZGFsIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlRGVsZXRlIiwiX3JlZjEyIiwiZGVsZXRlIiwiYWxlcnQiLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwiRW1wbG95ZWVEZWxldGVkIiwic2V0RW1wbG95ZWVEZWxldGVkIiwiZmV0Y2hGdW5jdGlvbiIsIl9yZWYxMyIsImRlbGV0ZVByb21pc2VzIiwiX3JlZjE0IiwiaWRUb0RlbGV0ZSIsIl94MyIsIlByb21pc2UiLCJhbGwiLCJyZWxhdGVkIiwiaW5mbyIsInRvU3RyaW5nIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjE1IiwiaGFuZGxlRGVsZXRlTWFueSIsIl9yZWYxNiIsIl9yZWYxNyIsIl94NSIsIl94NCIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJzZWFyY2hFbXBsb3llZSIsInNldFNlYXJjaEVtcGxveWVlIiwic3RvcmVkVmFsdWUiLCJfUmVhY3QkdXNlU3RhdGUiLCJpdGVtcyIsInF1aWNrRmlsdGVyRXhjbHVkZUhpZGRlbkNvbHVtbnMiLCJxdWlja0ZpbHRlclZhbHVlcyIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJmaWx0ZXJNb2RlbCIsInNldEZpbHRlck1vZGVsIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsImNvbHVtblZpc2liaWxpdHlNb2RlbCIsInNldENvbHVtblZpc2liaWxpdHlNb2RlbCIsImhhbmRlbEhpZGRlbkNvbHVtbiIsIm5ld0hpZGRlbiIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlRmlsdGVyIiwibmV3TW9kZWwiLCJzdG9yZWRRdWljayIsInBhcnNlIiwic3RvcmVkQ29sdW1ucyIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJfUmVhY3QkdXNlU3RhdGU1IiwiX1JlYWN0JHVzZVN0YXRlNiIsInZhbHVlMyIsInNldFZhbHVlMyIsInJlc3VsdCIsImhhbmRsZUNoYW5nZTMiLCJldmVudCIsIm5ld1ZhbHVlIiwiY2hhbmdlVmFsdWUiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwicmVuZGVyQ2VsbCIsInBhcmFtcyIsInRpdGxlIiwiZGlzYWJsZWQiLCJsZW5ndGgiLCJ0byIsIm9uQ2xpY2siLCJjdXJzb3IiLCJjb2x1bW5zMSIsInN0YXR1cyIsInVuZGVmaW5lZCIsInBhcnNlRmxvYXQiLCJOdW1iZXIiLCJzYWxhcnkiLCJiYXNpY1RyYW5zcG9ydCIsImZvb2RCYXNpYyIsImJvdW5jZUFsbG93YW5jZXMiLCJvdGhlciIsInRvRml4ZWQiLCJyZXBsYWNlIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJuYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10IiwidmFsdWUiLCJvbkNoYW5nZSIsImxhYmVsIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwibWFyZ2luVG9wIiwiZmxvYXQiLCJtYXJnaW4iLCJnYXAiLCJyb3dzIiwic2xvdHMiLCJ0b29sYmFyIiwib25Sb3dTZWxlY3Rpb25Nb2RlbENoYW5nZSIsIm5ld1NlbGVjdGlvbiIsInNsb3RQcm9wcyIsInNob3dRdWlja0ZpbHRlciIsInByaW50T3B0aW9ucyIsImRpc2FibGVUb29sYmFyQnV0dG9uIiwiY2hlY2tib3hTZWxlY3Rpb24iLCJkaXNhYmxlRGVuc2l0eVNlbGVjdG9yIiwicm93U2VsZWN0aW9uTW9kZWwiLCJvbkZpbHRlck1vZGVsQ2hhbmdlIiwib25Db2x1bW5WaXNpYmlsaXR5TW9kZWxDaGFuZ2UiLCJwYWRkaW5nIiwib25DbG9zZSIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsInRleHRBbGlnbiIsInBsYWNlbWVudCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwieHMiLCJyZXF1aXJlZCIsIm11bHRpbGluZSIsInBsYWNlaG9sZGVyIiwidGFyZ2V0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=