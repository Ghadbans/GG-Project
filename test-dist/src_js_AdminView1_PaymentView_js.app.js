"use strict";
exports.id = "src_js_AdminView1_PaymentView_js";
exports.ids = ["src_js_AdminView1_PaymentView_js"];
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

/***/ "./src/js/AdminView1/PaymentView.js"
/*!******************************************!*\
  !*** ./src/js/AdminView1/PaymentView.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../utils/apiCache */ "./src/js/utils/apiCache.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabContext/TabContext.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabList/TabList.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabPanel/TabPanel.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _dexieDb__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../dexieDb */ "./src/js/dexieDb.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
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








































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
function PaymentView() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_33__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_33__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          if (navigator.onLine) {
            try {
              var res = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
              var Name = res.data.data.employeeName;
              var Role = res.data.data.role;
              dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__.setUser)({
                userName: Name,
                role: Role,
                id: res.data.data._id
              }));
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          } else {
            var resLocalInfo = yield _dexieDb__WEBPACK_IMPORTED_MODULE_47__["default"].employeeUserSchema.get({
              _id: storesUserId
            });
            var _Name = resLocalInfo.employeeName;
            var _Role = resLocalInfo.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__.setUser)({
              userName: _Name,
              role: _Role,
              id: resLocalInfo._id
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        if (navigator.onLine) {
          try {
            var _res$data;
            var res = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/grantAccess"));
            (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          var offLineCustomer1 = yield _dexieDb__WEBPACK_IMPORTED_MODULE_47__["default"].grantAccessSchema.toArray();
          offLineCustomer1.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        }
      });
      return function fetchNumber() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var PaymentInfoC = grantAccess.filter(row => row.moduleName === "Payment" && row.access.createM === true);
  var PaymentInfoV = grantAccess.filter(row => row.moduleName === "Payment" && row.access.viewM === true);
  var PaymentInfoU = grantAccess.filter(row => row.moduleName === "Payment" && row.access.editM === true);
  var PaymentInfoD = grantAccess.filter(row => row.moduleName === "Payment" && row.access.deleteM === true);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__.logOut)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState('1'),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    value3 = _React$useState2[0],
    setValue3 = _React$useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result = localStorage.getItem('SelectPaymentView');
    if (result) {
      setValue3(result);
    }
  }, []);
  var handleChange3 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('SelectPaymentView', changeValue);
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    payment = _useState4[0],
    setPayment = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    customer = _useState6[0],
    setCustomer = _useState6[1];
  var fetchData = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      if (navigator.onLine) {
        try {
          var res = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/payment"));
          var formatDate = res.data.data.map(item => {
            var _item$referenceNumber;
            return _objectSpread(_objectSpread({}, item), {}, {
              id: item._id,
              dateField: dayjs__WEBPACK_IMPORTED_MODULE_38___default()(item.paymentDate).format('DD/MM/YYYY'),
              reference: item.TotalAmount && item.TotalAmount.length > 0 ? item.TotalAmount.map(row1 => (row1.prefix ? row1.prefix.replace('00', '') : item.reason === "Project" ? "P-" : "INV-") + String(row1.Ref).padStart(6, '0')) : (_item$referenceNumber = item.referenceNumber) === null || _item$referenceNumber === void 0 ? void 0 : _item$referenceNumber.map(row1 => (item.reason === "Project" ? "P-" : "INV-") + String(row1).padStart(6, '0'))
            });
          });
          setPayment(formatDate.reverse());
          // Use bulkPut instead of 1031 individual puts — major perf fix
          // Filter out items without paymentNumber to prevent Dexie DataError
          var validItems = res.data.data.filter(item => item.paymentNumber).map(item => _objectSpread(_objectSpread({}, item), {}, {
            synced: true,
            updateS: true
          }));
          yield _dexieDb__WEBPACK_IMPORTED_MODULE_47__["default"].paymentSchema.clear();
          yield _dexieDb__WEBPACK_IMPORTED_MODULE_47__["default"].paymentSchema.bulkPut(validItems);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      } else {
        var offLineCustomer1 = yield _dexieDb__WEBPACK_IMPORTED_MODULE_47__["default"].paymentSchema.toArray();
        var _formatDate = offLineCustomer1.map(item => {
          var _item$referenceNumber2;
          return _objectSpread(_objectSpread({}, item), {}, {
            id: item._id,
            dateField: dayjs__WEBPACK_IMPORTED_MODULE_38___default()(item.paymentDate).format('DD/MM/YYYY'),
            reference: (_item$referenceNumber2 = item.referenceNumber) === null || _item$referenceNumber2 === void 0 ? void 0 : _item$referenceNumber2.map(row1 => 'INV-' + String(row1).padStart(6, '0'))
          });
        });
        setPayment(_formatDate.reverse());
        setLoadingData(false);
      }
    });
    return function fetchData() {
      return _ref1.apply(this, arguments);
    };
  }();
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
  var handleCloseModal = () => {
    fetchData();
  };
  var handleCreateNotificationOffline = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber, ReferenceInfoName) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: "PAY-".concat(String(ReferenceInfoNumber).padStart(6, '0'), " For ").concat(ReferenceInfoName),
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotificationOffline(_x, _x2, _x3) {
      return _ref10.apply(this, arguments);
    };
  }();
  var syncOff = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      if (navigator.onLine) {
        var syncedPayment = yield _dexieDb__WEBPACK_IMPORTED_MODULE_47__["default"].paymentSchema.toArray();
        var paymentToSynced = syncedPayment.filter(row => row.synced === false);
        for (var paymentInfo of paymentToSynced) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/create-payment"), paymentInfo);
            if (res) {
              var ReferenceInfo = res.data.data._id;
              var ReferenceInfoNumber = res.data.data.paymentNumber;
              var ReferenceInfoName = res.data.data.customerName.customerName;
              handleCreateNotificationOffline(ReferenceInfo, ReferenceInfoNumber, ReferenceInfoName);
              handleOpenOffline();
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
      fetchData();
    });
    return function syncOff() {
      return _ref11.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchData();
    window.addEventListener('online', syncOff);
    if (navigator.onLine) {
      syncOff();
    }
    return () => {
      window.removeEventListener('online', syncOff);
    };
  }, []);
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState12 = _slicedToArray(_useState11, 2),
    loadingData = _useState12[0],
    setLoadingData = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    invoice = _useState14[0],
    setInvoice = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    hidden = _useState16[0],
    setHidden = _useState16[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        try {
          var res = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/customer"));
          var CustomerInfo = res.data.data.map(item => _objectSpread(_objectSpread({}, item), {}, {
            id: item._id
          }));
          setCustomer(CustomerInfo.filter(row => row.credit !== undefined && row.credit > 0));
          // Stop loading spinner immediately after customer loads — don't block on invoice-Overdue
          setLoadingData(false);
          // Load overdue invoices in background — if this endpoint is slow/missing it won't freeze the UI
          try {
            var resOverdue = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/invoice-Overdue"));
            setInvoice(resOverdue.data);
            localStorage.setItem('InvoiceOverdue', JSON.stringify(resOverdue.data));
          } catch (_) {
            var storedCustomer = JSON.parse(localStorage.getItem('InvoiceOverdue')) || [];
            if (Array.isArray(storedCustomer)) setInvoice(storedCustomer.reverse());
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          var _storedCustomer = JSON.parse(localStorage.getItem('InvoiceOverdue')) || [];
          if (Array.isArray(_storedCustomer)) {
            setInvoice(_storedCustomer.reverse());
          } else {
            setInvoice([]);
          }
          setLoadingData(false);
        }
      });
      return function fetchData() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchDataHidden = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        if (navigator.onLine) {
          try {
            var res = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/hidden"));
            setHidden(res.data.data);
            localStorage.removeItem('Hidden');
            yield _dexieDb__WEBPACK_IMPORTED_MODULE_47__["default"].hiddenSchema.clear();
            var validItems = res.data.data.filter(item => item.hiddenNumber).map(item => _objectSpread(_objectSpread({}, item), {}, {
              synced: true,
              updateS: true
            }));
            yield _dexieDb__WEBPACK_IMPORTED_MODULE_47__["default"].hiddenSchema.bulkPut(validItems);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          var offLineCustomer1 = yield _dexieDb__WEBPACK_IMPORTED_MODULE_47__["default"].hiddenSchema.toArray();
          setHidden(offLineCustomer1);
        }
      });
      return function fetchDataHidden() {
        return _ref13.apply(this, arguments);
      };
    }();
    fetchDataHidden();
  }, []);
  var invoicePaymentRow = invoice.filter(row => row.status === "Sent" || row.status === "Partially-Paid").map(row => _objectSpread(_objectSpread({}, row), {}, {
    id: row._id,
    invoiceNumber: "INV-".concat(String(row.invoiceNumber).padStart(6, '0')),
    dateField: dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.invoiceDate).format('DD/MM/YYYY'),
    dueDateField: dayjs__WEBPACK_IMPORTED_MODULE_38___default()(row.invoiceDueDate).format('DD/MM/YYYY')
  }));
  {/** search start */}
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    searchInvoice = _useState18[0],
    setSearchInvoice = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    var storedValue = localStorage.getItem('QuickFilterInvoicePayment');
    if (storedValue) {
      setSearchInvoice(storedValue);
    }
  });
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    filterModel = _React$useState4[0],
    setFilterModel = _React$useState4[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState20 = _slicedToArray(_useState19, 2),
    columnVisibilityModel = _useState20[0],
    setColumnVisibilityModel = _useState20[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsInvoicePayment', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterInvoicePaymentTst', JSON.stringify(newModel));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterInvoicePaymentTst'));
    if (storedQuick) {
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsInvoicePayment'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchInvoice]);
  {/** search end */}
  {/** Payment Received start */}
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    searchPayment = _useState22[0],
    setPaymentInfo = _useState22[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    var storedValue = localStorage.getItem('QuickFilterPayment');
    if (storedValue) {
      setPaymentInfo(storedValue);
    }
  });
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    filterModelPayment = _React$useState6[0],
    setFilterModelPayment = _React$useState6[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState24 = _slicedToArray(_useState23, 2),
    columnVisibilityModelPayment = _useState24[0],
    setColumnVisibilityModelPayment = _useState24[1];
  var handelHiddenColumnPayment = newHidden => {
    setColumnVisibilityModelPayment(newHidden);
    localStorage.setItem('HiddenColumnsPayment', JSON.stringify(newHidden));
  };
  var handleFilterPayment = newModel => {
    setFilterModelPayment(newModel);
    localStorage.setItem('QuickFilterPaymentInfo1Tst', JSON.stringify(newModel));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterPaymentInfo1Tst'));
    if (storedQuick) {
      setFilterModelPayment(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsPayment'));
    if (storedColumns) {
      setColumnVisibilityModelPayment(storedColumns);
    }
  }, []);
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
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    open = _useState28[0],
    setOpen = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState30 = _slicedToArray(_useState29, 2),
    DeleteId = _useState30[0],
    setDeleteId = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState32 = _slicedToArray(_useState31, 2),
    relatedInvoice = _useState32[0],
    setRelatedInvoice = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    relatedCredit = _useState34[0],
    setRelatedCredit = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    modes = _useState36[0],
    setModes = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState38 = _slicedToArray(_useState37, 2),
    amount = _useState38[0],
    setAmount = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState40 = _slicedToArray(_useState39, 2),
    relatedCustomerID = _useState40[0],
    setRelatedCustomerID = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState42 = _slicedToArray(_useState41, 2),
    reason = _useState42[0],
    setReason = _useState42[1];
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleClose = () => {
    setOpen(false);
    setRelatedInvoice([]);
  };
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState44 = _slicedToArray(_useState43, 2),
    relatedNumber = _useState44[0],
    setRelatedNumber = _useState44[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchId = /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator(function* () {
        if (DeleteId) {
          if (navigator.onLine) {
            try {
              var _res$data2, _res$data3;
              var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/get-payment/").concat(DeleteId));
              setRelatedInvoice(res.data.data.TotalAmount);
              setRelatedCredit(res.data.data.remaining);
              setModes(res.data.data.modes);
              setAmount(res.data.data.amount);
              setRelatedCustomerID(res.data.data.customerName._id);
              setRelatedNumber(Number(((_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.paymentNumber) || ((_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.paymentNumber) || 0));
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          } else {
            var resLocal = yield _dexieDb__WEBPACK_IMPORTED_MODULE_47__["default"].paymentSchema.get({
              _id: DeleteId
            });
            setRelatedInvoice(resLocal.TotalAmount);
            setRelatedCredit(resLocal.remaining);
            setRelatedCustomerID(resLocal.customerName._id);
            setRelatedNumber(resLocal.paymentNumber);
            setModes(resLocal.modes);
            setAmount(resLocal.amount);
          }
        }
      });
      return function fetchId() {
        return _ref14.apply(this, arguments);
      };
    }();
    fetchId();
  }, [DeleteId]);
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState46 = _slicedToArray(_useState45, 2),
    invoiceInfo = _useState46[0],
    setInvoiceInfo = _useState46[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchInvoice = /*#__PURE__*/function () {
      var _ref15 = _asyncToGenerator(function* () {
        if (relatedInvoice.length > 0) {
          if (navigator.onLine) {
            var getInvoice = relatedInvoice.map(row => {
              return axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/get-invoice/").concat(row.id));
            });
            try {
              var res = yield Promise.all(getInvoice);
              setInvoiceInfo(res.map(row => row.data.data));
            } catch (error) {
              console.log('An error as occur');
            }
          } else {
            var _getInvoice = relatedInvoice.map(row => {
              return _dexieDb__WEBPACK_IMPORTED_MODULE_47__["default"].invoiceSchema.get({
                _id: row.id
              });
            });
            var _res = yield Promise.all(_getInvoice);
            setInvoiceInfo(_res);
          }
        }
      });
      return function fetchInvoice() {
        return _ref15.apply(this, arguments);
      };
    }();
    fetchInvoice();
  }, [relatedInvoice]);
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState48 = _slicedToArray(_useState47, 2),
    oldCredit = _useState48[0],
    setOldCredit = _useState48[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCustomer = /*#__PURE__*/function () {
      var _ref16 = _asyncToGenerator(function* () {
        if (relatedCustomerID) {
          if (navigator.onLine) {
            try {
              var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/get-customer/").concat(relatedCustomerID));
              setOldCredit(res.data.data.credit !== null || res.data.data.credit !== undefined ? res.data.data.credit : 0);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          } else {
            var resLocal = yield _dexieDb__WEBPACK_IMPORTED_MODULE_47__["default"].customerSchema.get({
              _id: relatedCustomerID
            });
            setOldCredit(resLocal.credit !== null || resLocal.credit !== undefined ? resLocal.credit : 0);
          }
        }
      });
      return function fetchCustomer() {
        return _ref16.apply(this, arguments);
      };
    }();
    fetchCustomer();
  }, [relatedCustomerID]);
  var totalR = modes === 'Credit-Account' ? parseFloat(oldCredit + amount) : parseFloat(oldCredit - relatedCredit);
  var updateInvoiceAmount = relatedInvoice ? relatedInvoice.map(row => {
    var status = '';
    var relatedI = invoiceInfo === null || invoiceInfo === void 0 ? void 0 : invoiceInfo.find(row2 => (row2 === null || row2 === void 0 ? void 0 : row2._id) === row.id);
    if (relatedI) {
      var rawTotal = parseFloat(relatedI.total) - parseFloat(row.total);
      var total = Math.round(rawTotal * 100) / 100;
      var balanceDueRaw = parseFloat(relatedI.totalInvoice) - total;
      var balanceDue = Math.round(balanceDueRaw * 100) / 100;
      if (total > 0) {
        status = 'Partially-Paid';
      } else {
        status = 'Sent';
      }
      return {
        id: row.id,
        number: relatedI.invoiceNumber,
        data: {
          total: total <= 0 ? "0" : total,
          balanceDue,
          status
        }
      };
    }
  }) : null;
  var handleUpdateInvoice = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(function* () {
      if (!navigator.onLine) return;
      if (!relatedInvoice || relatedInvoice.length === 0) return;
      try {
        var _allPaymentsRes$data;
        // Fetch ALL remaining payments and each invoice's current state
        var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/payment")), ...relatedInvoice.map(row => axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/get-invoice/").concat(row.id)))]),
          _yield$Promise$all2 = _toArray(_yield$Promise$all),
          allPaymentsRes = _yield$Promise$all2[0],
          freshInvoiceResponses = _arrayLikeToArray(_yield$Promise$all2).slice(1);
        var allPayments = ((_allPaymentsRes$data = allPaymentsRes.data) === null || _allPaymentsRes$data === void 0 ? void 0 : _allPaymentsRes$data.data) || [];
        var updates = relatedInvoice.map((row, idx) => {
          var _freshInvoiceResponse;
          var invoice = (_freshInvoiceResponse = freshInvoiceResponses[idx]) === null || _freshInvoiceResponse === void 0 || (_freshInvoiceResponse = _freshInvoiceResponse.data) === null || _freshInvoiceResponse === void 0 ? void 0 : _freshInvoiceResponse.data;
          if (!invoice) return null;

          // Sum all remaining payments still linked to this invoice
          var totalPaid = 0;
          allPayments.forEach(payment => {
            if (payment.TotalAmount && Array.isArray(payment.TotalAmount)) {
              payment.TotalAmount.forEach(ta => {
                if (ta.id === row.id) {
                  totalPaid += parseFloat(ta.total || 0);
                }
              });
            }
          });
          totalPaid = Math.round(totalPaid * 100) / 100;
          var invoiceTotal = parseFloat(invoice.totalInvoice || 0);
          var balanceDue = Math.round((invoiceTotal - totalPaid) * 100) / 100;
          var status = totalPaid <= 0 ? 'Sent' : totalPaid >= invoiceTotal ? 'Paid' : 'Partially-Paid';
          return {
            id: row.id,
            data: {
              total: totalPaid,
              balanceDue,
              status
            }
          };
        }).filter(Boolean);
        yield Promise.all(updates.map(_ref18 => {
          var id = _ref18.id,
            data = _ref18.data;
          return axios__WEBPACK_IMPORTED_MODULE_30__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/update-invoice/").concat(id), data);
        }));
        yield Promise.all(updates.map(/*#__PURE__*/function () {
          var _ref20 = _asyncToGenerator(function* (_ref19) {
            var id = _ref19.id,
              data = _ref19.data;
            yield _dexieDb__WEBPACK_IMPORTED_MODULE_47__["default"].invoiceSchema.update(id, _objectSpread(_objectSpread({}, data), {}, {
              updateS: true
            }));
          });
          return function (_x4) {
            return _ref20.apply(this, arguments);
          };
        }()));
        (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__.invalidateCache)('/invoice');
      } catch (error) {
        console.log('An error occurred during invoice update:', error);
      }
    });
    return function handleUpdateInvoice() {
      return _ref17.apply(this, arguments);
    };
  }();
  var handleUpdateCredit = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(function* () {
      var data = {
        credit: totalR
      };
      if (navigator.onLine) {
        try {
          yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/update-customer/").concat(relatedCustomerID), data);
          yield _dexieDb__WEBPACK_IMPORTED_MODULE_47__["default"].customerSchema.update(relatedCustomerID, _objectSpread(_objectSpread({}, data), {}, {
            updateS: true
          }));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    });
    return function handleUpdateCredit() {
      return _ref21.apply(this, arguments);
    };
  }();
  {/** delete multiple && all modal end */}
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    modalDeleteOpenLoading = _useState50[0],
    setModalDeleteOpenLoading = _useState50[1];
  {/** Loading Delete View Start */}
  var handleDeleteOpenLoading = () => {
    setModalDeleteOpenLoading(true);
    setLoading(true);
    handleClose();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleDeleteCloseLoading = () => {
    fetchData();
  };
  {/** Loading Delete View End */}
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + "PAY-".concat(String(relatedNumber).padStart(6, '0')),
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref22.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      if (navigator.onLine) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_48__.ENDPOINT_URL, "/delete-payment/").concat(DeleteId));
          if (res) {
            yield handleUpdateInvoice();
            yield handleUpdateCredit();
            yield handleCreateNotification();
            (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_26__.invalidateCache)('/payment');
            handleDeleteOpenLoading();
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
    return function handleDelete(_x5) {
      return _ref23.apply(this, arguments);
    };
  }();
  {/** search end */}
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    sideBar = _React$useState8[0],
    setSideBar = _React$useState8[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var filteredRows = invoicePaymentRow.filter(row => !hidden.some(row2 => row2.idRow === row._id));
  var columns = [{
    field: 'invoiceNumber',
    headerName: 'Invoice#',
    width: 140
  }, {
    field: 'customer',
    headerName: 'Customer Name',
    width: sideBar ? 240 : 350,
    valueGetter: params => params.row.customerName.customerName.toUpperCase()
  }, {
    field: 'status',
    headerName: 'Status',
    width: 140,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: params.row.status === "Draft" ? "gray" : params.row.status === "Sent" ? "blue" : params.row.status === "Decline" ? "red" : params.row.status === "Pending" ? "#801313" : params.row.status === "Paid" ? "#339ba5" : params.row.status === "Partially-Paid" ? "#fb8c00" : "black"
    }, params.row.status)
  }, {
    field: 'daysPastDue',
    headerName: 'Period',
    width: 240,
    renderCell: params => params.row.overdue === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: params.row.daysPastDue > 0 ? "red" : "black"
    }, "Overdue: ", params.row.daysPastDue, " Days Past Due") : 'ON TIME'
  }, {
    field: 'subTotal',
    headerName: 'I-Amount',
    width: 120,
    renderCell: params => {
      var _params$row$subTotal;
      return "$".concat((_params$row$subTotal = params.row.subTotal) === null || _params$row$subTotal === void 0 ? void 0 : _params$row$subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, {
    field: 'total',
    headerName: 'A-Paid',
    width: 120,
    renderCell: params => {
      var _params$row$total;
      return "$".concat((_params$row$total = params.row.total) === null || _params$row$total === void 0 ? void 0 : _params$row$total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, {
    field: 'balanceDue',
    headerName: 'B-Due',
    width: 120,
    renderCell: params => {
      var _params$row$balanceDu;
      return "$".concat((_params$row$balanceDu = params.row.balanceDue) === null || _params$row$balanceDu === void 0 ? void 0 : _params$row$balanceDu.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }];
  var columnsPayment = [{
    field: 'paymentNumber',
    headerName: 'Payment#',
    width: 130,
    renderCell: params => "PAY-".concat(String(params.row.paymentNumber).padStart(6, '0'))
  }, {
    field: 'customer',
    headerName: 'Customer Name',
    width: sideBar ? 360 : 460,
    valueGetter: params => params.row.customerName.customerName !== undefined ? params.row.customerName.customerName.toUpperCase() : null
  }, {
    field: 'description',
    headerName: 'Description',
    width: sideBar ? 200 : 250
  }, {
    field: 'dateField',
    headerName: 'Date',
    width: 140
  }, {
    field: 'amount',
    headerName: 'A-Paid',
    width: 130,
    renderCell: params => {
      var _params$row$amount;
      return "$".concat((_params$row$amount = params.row.amount) === null || _params$row$amount === void 0 ? void 0 : _params$row$amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, {
    field: 'view',
    headerName: 'View',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      disabled: PaymentInfoV.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/PaymentInformationView/".concat(params.row._id),
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      disabled: PaymentInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/PaymentInformationUpdate/".concat(params.row._id),
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onClick: () => handleOpen(params.row._id),
      hidden: PaymentInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  var columnCustomer = [{
    field: 'customer',
    headerName: 'Customer Name',
    width: open ? 600 : 700,
    valueGetter: params => params.row.Customer
  }, {
    field: 'credit',
    headerName: 'Credit',
    width: 300,
    renderCell: params => {
      var _params$row$credit;
      return "$".concat((_params$row$credit = params.row.credit) === null || _params$row$credit === void 0 ? void 0 : _params$row$credit.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, {
    field: 'view',
    headerName: 'View',
    width: 40,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      disabled: user.data.role === 'User'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/CustomerInformationView/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        color: '#202a5a'
      }
    })))))
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_28__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_46__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_42__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_37__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_21__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_29__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_21__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_27__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_35__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_43__["default"], {
    value: value3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_44__["default"], {
    onChange: handleChange3,
    "aria-label": "lab API tabs example",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "Payment",
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "Payment Received",
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
  }), user.data.role === 'CEO' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "Credit",
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_45__["default"], {
    value: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '-40px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    hidden: PaymentInfoC.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
    to: '/PaymentInformationForm',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], null))))))), invoicePaymentRow.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      height: 560,
      width: '100%'
    }
  }, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__.DataGrid, {
    rows: invoicePaymentRow,
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
    rows: filteredRows,
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
    filterModel: filterModel,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_no_data_png__WEBPACK_IMPORTED_MODULE_39__,
    style: {
      position: 'relative',
      marginLeft: '19%',
      padding: '25px',
      height: '35%',
      top: '40px',
      width: '50%',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_45__["default"], {
    value: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, payment.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      height: 630,
      width: '100%',
      marginTop: '-40px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__.DataGrid, {
    rows: payment,
    columns: columnsPayment,
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
    filterModel: filterModelPayment,
    onFilterModelChange: newModel => handleFilterPayment(newModel),
    columnVisibilityModel: columnVisibilityModelPayment,
    onColumnVisibilityModelChange: handelHiddenColumnPayment,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_no_data_png__WEBPACK_IMPORTED_MODULE_39__,
    style: {
      position: 'relative',
      marginLeft: '19%',
      padding: '25px',
      height: '35%',
      top: '40px',
      width: '50%',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_45__["default"], {
    value: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, payment.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      height: 630,
      width: '100%',
      marginTop: '-40px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__.DataGrid, {
    rows: customer,
    columns: columnCustomer,
    sx: {
      borderRadius: '5px',
      backgroundColor: '#fff'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_no_data_png__WEBPACK_IMPORTED_MODULE_39__,
    style: {
      position: 'relative',
      marginLeft: '19%',
      padding: '25px',
      height: '35%',
      top: '40px',
      width: '50%',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)'
    }
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, updateInvoiceAmount !== null || relatedCustomerID !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12,
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Do you Want to delete?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClose,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Cancel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleOpenReasonDelete,
    className: "btnCustomer2",
    style: {
      width: '100%'
    }
  }, "Delete"))) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    open: modalDeleteOpenLoading,
    onClose: handleDeleteCloseLoading,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_14__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_35__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
    onClick: handleDeleteCloseLoading,
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleCloseReasonDelete,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: PAY-", relatedNumber, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    open: loadingOpenModal,
    onClose: handleCloseModal,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_14__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_35__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
  }, "Close"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentView);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGF5bWVudFZpZXdfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMsU0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05WLENBQW1EO0FBQy9CO0FBQytCO0FBQ0M7QUFDc0I7QUFDekM7QUFDMkI7QUFDWjtBQUNJO0FBQ0k7QUFDMkk7QUFDdEk7QUFDaEI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ0k7QUFDUTtBQUNKO0FBQ1Y7QUFDVTtBQUNjO0FBQ0k7QUFDeEM7QUFDb0M7QUFDUjtBQUMwQjtBQUN2QztBQUNLO0FBQ2dCO0FBQ2Q7QUFDdEI7QUFDYTtBQUNrQjtBQUNQO0FBQ087QUFDQztBQUM5QjtBQUNnQjtBQUU1QyxJQUFNb0UsYUFBYSxHQUFHdEQsMERBQU0sQ0FBQ3VELElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNqRHpFLDBEQUFBLENBQUM2Qiw4REFBTyxFQUFBOEMsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPbEQsOERBQWMsQ0FBQ21ELE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLEtBQUs7TUFDdEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFD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K0NBQStDO0VBQzdEQyxnQkFBZ0IsRUFBRSxzREFBc0Q7RUFDeEVDLGFBQWEsRUFBRSw0REFBNEQ7RUFDM0VDLFlBQVksRUFBRSw4Q0FBOEM7RUFDNURDLFNBQVMsRUFBRSxXQUFXO0VBQ3RCQyxTQUFTLEVBQUUseUJBQXlCO0VBQ3BDQyxnQkFBZ0IsRUFBRSxvQ0FBb0M7RUFDdERDLG1CQUFtQixFQUFFLEtBQUs7RUFDMUJDLGtCQUFrQixFQUFFLHNDQUFzQztFQUMxREMsWUFBWSxFQUFFLCtDQUErQztFQUM3REMsU0FBUyxFQUFFLG1DQUFtQztFQUM5Q0MsaUJBQWlCLEVBQUUsa0RBQWtEO0VBQ3JFO0VBQ0FDLFlBQVksRUFBRTtBQUNsQixDQUFDLENBQUM7QUFFRixpRUFBZS9oQixFQUFFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0FkZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGF5bWVudFZpZXcuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9kZXhpZURiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCJcbn0pLCAnQWRkJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSB9ICBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi92aWV3LmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaCBmcm9tICcuLi9jb21wb25lbnQvU2lkZWJhckRhc2gnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCAnLi9QYWdlVmlldy9DaGFydHZpZXcuY3NzJ1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHtUYWJsZSxNb2RhbCwgSWNvbkJ1dHRvbixzdHlsZWQsIFRhYmxlQm9keSxUYWJsZUNlbGwsVGFibGVIZWFkLFRhYmxlUm93LENoZWNrYm94LCBUYWJsZUNvbnRhaW5lciwgUGFwZXIsIFR5cG9ncmFwaHksIEJveCwgQXV0b2NvbXBsZXRlLFRleHRGaWVsZCxCYWNrZHJvcCxHcmlkLCBUYWIgfSAgZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBUb29sdGlwLHt0b29sdGlwQ2xhc3Nlc30gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNhY2hlIH0gZnJvbSAnLi4vdXRpbHMvYXBpQ2FjaGUnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBZGQsIENsb3NlLCBNYWlsT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgeyBjYWNoZWRHZXQgfSBmcm9tICcuLi91dGlscy9hcGlDYWNoZSc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vaW1nL25vLWRhdGEucG5nJztcclxuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRUb29sYmFyIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCB7IFRhYkNvbnRleHQsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSAnQG11aS9sYWInO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi9kZXhpZURiJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vYXBpQ29uZmlnJztcclxuXHJcbmNvbnN0IERlbGV0ZVRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IEVkaXRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcblxyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gUGF5bWVudFZpZXcoKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgdHJ5IHtcclxuICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgIGNhY2hlZEdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHt1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSwgaWQ6cmVzLmRhdGEuZGF0YS5faWR9KSk7XHJcbiAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgIH1cclxuICAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZXNMb2NhbEluZm8gPSBhd2FpdCBkYi5lbXBsb3llZVVzZXJTY2hlbWEuZ2V0KHtfaWQ6c3RvcmVzVXNlcklkfSlcclxuICAgICAgY29uc3QgTmFtZSA9IHJlc0xvY2FsSW5mby5lbXBsb3llZU5hbWU7XHJcbiAgICAgIGNvbnN0IFJvbGUgPSByZXNMb2NhbEluZm8ucm9sZTtcclxuICAgICAgZGlzcGF0Y2goc2V0VXNlcih7dXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUsIGlkOnJlc0xvY2FsSW5mby5faWR9KSk7XHJcbiAgICAgfVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LFtkaXNwYXRjaF0pO1xyXG4gIGNvbnN0IFtncmFudEFjY2VzcyxzZXRHcmFudEFjY2Vzc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgIGNvbnN0IGZldGNoTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2FjaGVkR2V0KGAke0VORFBPSU5UX1VSTH0vZ3JhbnRBY2Nlc3NgKTtcclxuICAgICAgICAgICByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpPT4gcm93LnVzZXJJRCA9PT0gdXNlci5kYXRhLmlkIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocm93KT0+c2V0R3JhbnRBY2Nlc3Mocm93Lm1vZHVsZXMpKVxyXG4gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICB9XHJcbiAgICAgfWVsc2V7XHJcbiAgIGNvbnN0IG9mZkxpbmVDdXN0b21lcjEgPSBhd2FpdCBkYi5ncmFudEFjY2Vzc1NjaGVtYS50b0FycmF5KCk7IFxyXG4gb2ZmTGluZUN1c3RvbWVyMS5maWx0ZXIoKHJvdyk9PiByb3cudXNlcklEID09PSB1c2VyLmRhdGEuaWQgKVxyXG4gICAubWFwKChyb3cpPT5zZXRHcmFudEFjY2Vzcyhyb3cubW9kdWxlcykpXHJcbiB9XHJcbiAgIH1cclxuICAgZmV0Y2hOdW1iZXIoKVxyXG4gfSxbdXNlcl0pXHJcbiBjb25zdCBQYXltZW50SW5mb0MgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdyk9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJQYXltZW50XCIgJiYgcm93LmFjY2Vzcy5jcmVhdGVNID09PSB0cnVlKTtcclxuIGNvbnN0IFBheW1lbnRJbmZvViA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KT0+IHJvdy5tb2R1bGVOYW1lID09PSBcIlBheW1lbnRcIiAmJiByb3cuYWNjZXNzLnZpZXdNID09PSB0cnVlKTtcclxuIGNvbnN0IFBheW1lbnRJbmZvVSA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KT0+IHJvdy5tb2R1bGVOYW1lID09PSBcIlBheW1lbnRcIiAmJiByb3cuYWNjZXNzLmVkaXRNID09PSB0cnVlKTtcclxuIGNvbnN0IFBheW1lbnRJbmZvRCA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KT0+IHJvdy5tb2R1bGVOYW1lID09PSBcIlBheW1lbnRcIiAmJiByb3cuYWNjZXNzLmRlbGV0ZU0gPT09IHRydWUpO1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFt2YWx1ZTMsIHNldFZhbHVlM10gPSBSZWFjdC51c2VTdGF0ZSgnMScpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICBjb25zdCByZXN1bHQgPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTZWxlY3RQYXltZW50VmlldycpXHJcbiAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgc2V0VmFsdWUzKHJlc3VsdClcclxuICAgICB9XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZTMgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgY29uc3QgY2hhbmdlVmFsdWUgPSBuZXdWYWx1ZVxyXG4gICAgICBzZXRWYWx1ZTMoY2hhbmdlVmFsdWUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnU2VsZWN0UGF5bWVudFZpZXcnLGNoYW5nZVZhbHVlKVxyXG4gICAgfTtcclxuICAgICAgY29uc3QgW3BheW1lbnQsIHNldFBheW1lbnRdID0gdXNlU3RhdGUoW10pXHJcbiAgICAgICAgY29uc3QgW2N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG5hdmlnYXRvci5vbkxpbmUpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNhY2hlZEdldChgJHtFTkRQT0lOVF9VUkx9L3BheW1lbnRgKVxyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gcmVzLmRhdGEuZGF0YS5tYXAoKGl0ZW0pPT4oe1xyXG4gICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uX2lkLFxyXG4gICAgICAgICAgICAgIGRhdGVGaWVsZDogZGF5anMoaXRlbS5wYXltZW50RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyksXHJcbiAgICAgICAgICAgICAgcmVmZXJlbmNlOiBpdGVtLlRvdGFsQW1vdW50ICYmIGl0ZW0uVG90YWxBbW91bnQubGVuZ3RoID4gMFxyXG4gICAgICAgICAgPyBpdGVtLlRvdGFsQW1vdW50Lm1hcCgocm93MSkgPT4gKHJvdzEucHJlZml4ID8gcm93MS5wcmVmaXgucmVwbGFjZSgnMDAnLCAnJykgOiAoaXRlbS5yZWFzb24gPT09IFwiUHJvamVjdFwiID8gXCJQLVwiIDogXCJJTlYtXCIpKSArIFN0cmluZyhyb3cxLlJlZikucGFkU3RhcnQoNiwgJzAnKSlcclxuICAgICAgICAgIDogaXRlbS5yZWZlcmVuY2VOdW1iZXI/Lm1hcCgocm93MSkgPT4gKGl0ZW0ucmVhc29uID09PSBcIlByb2plY3RcIiA/IFwiUC1cIiA6IFwiSU5WLVwiKSArIFN0cmluZyhyb3cxKS5wYWRTdGFydCg2LCAnMCcpKVxyXG4gICAgICAgICAgICB9KSkgXHJcbiAgICAgICAgICAgIHNldFBheW1lbnQoZm9ybWF0RGF0ZS5yZXZlcnNlKCkpO1xyXG4gICAgICAgICAgICAvLyBVc2UgYnVsa1B1dCBpbnN0ZWFkIG9mIDEwMzEgaW5kaXZpZHVhbCBwdXRzIOKAlCBtYWpvciBwZXJmIGZpeFxyXG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IGl0ZW1zIHdpdGhvdXQgcGF5bWVudE51bWJlciB0byBwcmV2ZW50IERleGllIERhdGFFcnJvclxyXG4gICAgICAgICAgICBjb25zdCB2YWxpZEl0ZW1zID0gcmVzLmRhdGEuZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLnBheW1lbnROdW1iZXIpLm1hcChpdGVtID0+ICh7Li4uaXRlbSwgc3luY2VkOnRydWUsIHVwZGF0ZVM6dHJ1ZX0pKTtcclxuICAgICAgICAgICAgYXdhaXQgZGIucGF5bWVudFNjaGVtYS5jbGVhcigpO1xyXG4gICAgICAgICAgICBhd2FpdCBkYi5wYXltZW50U2NoZW1hLmJ1bGtQdXQodmFsaWRJdGVtcyk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG9mZkxpbmVDdXN0b21lcjEgPSBhd2FpdCBkYi5wYXltZW50U2NoZW1hLnRvQXJyYXkoKTtcclxuICAgICBjb25zdCBmb3JtYXREYXRlID0gb2ZmTGluZUN1c3RvbWVyMS5tYXAoKGl0ZW0pPT4oe1xyXG4gICAgICAuLi5pdGVtLFxyXG4gICAgICBpZDogaXRlbS5faWQsXHJcbiAgICAgIGRhdGVGaWVsZDogZGF5anMoaXRlbS5wYXltZW50RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyksXHJcbiAgICAgIHJlZmVyZW5jZTogaXRlbS5yZWZlcmVuY2VOdW1iZXI/Lm1hcCgocm93MSk9PiAnSU5WLScrIFN0cmluZyhyb3cxKS5wYWRTdGFydCg2LCAnMCcpKVxyXG4gICAgIH0pKSBcclxuICAgICBzZXRQYXltZW50KGZvcm1hdERhdGUucmV2ZXJzZSgpKVxyXG4gICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXT0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCxzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgXHJcbiAgICAgIGNvbnN0IGhhbmRsZU9wZW5PZmZsaW5lID0gKCkgPT4ge1xyXG4gICAgICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgIH0sIDUwMClcclxuICAgICB9XHJcbiAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSwgNTAwKVxyXG4gICAgIH1cclxuICAgICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICBmZXRjaERhdGEoKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbk9mZmxpbmUgPSBhc3luYyAoUmVmZXJlbmNlSW5mbyxSZWZlcmVuY2VJbmZvTnVtYmVyLFJlZmVyZW5jZUluZm9OYW1lKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICAgIHBlcnNvbjp1c2VyLmRhdGEudXNlck5hbWUgKyAnIENyZWF0ZWQgJyxcclxuICAgICAgcmVhc29uOiAgYFBBWS0ke1N0cmluZyhSZWZlcmVuY2VJbmZvTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfSBGb3IgJHtSZWZlcmVuY2VJbmZvTmFtZX1gLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOm5ldyBEYXRlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCxkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gICAgICBjb25zdCBzeW5jT2ZmID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICBjb25zdCBzeW5jZWRQYXltZW50ID0gYXdhaXQgZGIucGF5bWVudFNjaGVtYS50b0FycmF5KCk7XHJcbiAgICAgICAgICBjb25zdCBwYXltZW50VG9TeW5jZWQgPSBzeW5jZWRQYXltZW50LmZpbHRlcigocm93KT0+cm93LnN5bmNlZCA9PT0gZmFsc2UpXHJcbiAgICAgICAgIGZvcihjb25zdCBwYXltZW50SW5mbyBvZiBwYXltZW50VG9TeW5jZWQpe1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtcGF5bWVudGAscGF5bWVudEluZm8pXHJcbiAgICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mbyA9IHJlcy5kYXRhLmRhdGEuX2lkXHJcbiAgICAgICAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mb051bWJlciA9IHJlcy5kYXRhLmRhdGEucGF5bWVudE51bWJlclxyXG4gICAgICAgICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm9OYW1lID0gcmVzLmRhdGEuZGF0YS5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lXHJcbiAgICAgICAgICAgICAgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uT2ZmbGluZShSZWZlcmVuY2VJbmZvLFJlZmVyZW5jZUluZm9OdW1iZXIsUmVmZXJlbmNlSW5mb05hbWUpXHJcbiAgICAgICAgICAgICAgaGFuZGxlT3Blbk9mZmxpbmUoKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaERhdGEoKVxyXG4gICAgICB9XHJcbiAgICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBmZXRjaERhdGEoKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBzeW5jT2ZmKVxyXG4gICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICBzeW5jT2ZmKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBzeW5jT2ZmKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxbXSlcclxuICAgIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbaW52b2ljZSxzZXRJbnZvaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2FjaGVkR2V0KGAke0VORFBPSU5UX1VSTH0vY3VzdG9tZXJgKVxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBDdXN0b21lckluZm8gPSByZXMuZGF0YS5kYXRhLm1hcCgoaXRlbSk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5faWQsXHJcbiAgICAgICAgICAgICAgICAgIH0pKSBcclxuICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tZXIoQ3VzdG9tZXJJbmZvLmZpbHRlcigocm93KT0+IHJvdy5jcmVkaXQgIT09IHVuZGVmaW5lZCAmJiByb3cuY3JlZGl0ID4gMCkpXHJcbiAgICAgICAgLy8gU3RvcCBsb2FkaW5nIHNwaW5uZXIgaW1tZWRpYXRlbHkgYWZ0ZXIgY3VzdG9tZXIgbG9hZHMg4oCUIGRvbid0IGJsb2NrIG9uIGludm9pY2UtT3ZlcmR1ZVxyXG4gICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxyXG4gICAgICAgIC8vIExvYWQgb3ZlcmR1ZSBpbnZvaWNlcyBpbiBiYWNrZ3JvdW5kIOKAlCBpZiB0aGlzIGVuZHBvaW50IGlzIHNsb3cvbWlzc2luZyBpdCB3b24ndCBmcmVlemUgdGhlIFVJXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc092ZXJkdWUgPSBhd2FpdCBjYWNoZWRHZXQoYCR7RU5EUE9JTlRfVVJMfS9pbnZvaWNlLU92ZXJkdWVgKVxyXG4gICAgICAgICAgc2V0SW52b2ljZShyZXNPdmVyZHVlLmRhdGEpXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnSW52b2ljZU92ZXJkdWUnLCBKU09OLnN0cmluZ2lmeShyZXNPdmVyZHVlLmRhdGEpKVxyXG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcclxuICAgICAgICAgIGNvbnN0IHN0b3JlZEN1c3RvbWVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnSW52b2ljZU92ZXJkdWUnKSkgfHwgW11cclxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0b3JlZEN1c3RvbWVyKSkgc2V0SW52b2ljZShzdG9yZWRDdXN0b21lci5yZXZlcnNlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICBjb25zdCBzdG9yZWRDdXN0b21lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0ludm9pY2VPdmVyZHVlJykpIHx8IFtdXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3RvcmVkQ3VzdG9tZXIpKSB7XHJcbiAgICAgICAgICBzZXRJbnZvaWNlKHN0b3JlZEN1c3RvbWVyLnJldmVyc2UoKSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBzZXRJbnZvaWNlKFtdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LFtdKVxyXG4gIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YUhpZGRlbiA9IGFzeW5jICgpID0+IHtcclxuICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgdHJ5IHtcclxuICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2FjaGVkR2V0KGAke0VORFBPSU5UX1VSTH0vaGlkZGVuYClcclxuICAgICAgICAgIHNldEhpZGRlbihyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ0hpZGRlbicpXHJcbiAgICAgICAgICBhd2FpdCBkYi5oaWRkZW5TY2hlbWEuY2xlYXIoKVxyXG4gICAgICAgICAgY29uc3QgdmFsaWRJdGVtcyA9IHJlcy5kYXRhLmRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5oaWRkZW5OdW1iZXIpLm1hcChpdGVtID0+ICh7Li4uaXRlbSwgc3luY2VkOnRydWUsdXBkYXRlUzp0cnVlfSkpO1xyXG4gICAgICAgICAgYXdhaXQgZGIuaGlkZGVuU2NoZW1hLmJ1bGtQdXQodmFsaWRJdGVtcyk7XHJcbiAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgIH1cclxuICAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBvZmZMaW5lQ3VzdG9tZXIxID0gYXdhaXQgZGIuaGlkZGVuU2NoZW1hLnRvQXJyYXkoKTtcclxuICAgICAgc2V0SGlkZGVuKG9mZkxpbmVDdXN0b21lcjEpXHJcbiAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhSGlkZGVuKClcclxuICB9LFtdKVxyXG4gXHJcbiAgY29uc3QgaW52b2ljZVBheW1lbnRSb3cgPSBpbnZvaWNlLmZpbHRlcigocm93KT0+IHJvdy5zdGF0dXMgPT09IFwiU2VudFwiIHx8IHJvdy5zdGF0dXMgPT09IFwiUGFydGlhbGx5LVBhaWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyb3cpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcm93Ll9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZvaWNlTnVtYmVyOiBgSU5WLSR7U3RyaW5nKHJvdy5pbnZvaWNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZpZWxkOiBkYXlqcyhyb3cuaW52b2ljZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGVGaWVsZDogZGF5anMocm93Lmludm9pY2VEdWVEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gIHsvKiogc2VhcmNoIHN0YXJ0ICovfVxyXG5jb25zdCBbc2VhcmNoSW52b2ljZSwgc2V0U2VhcmNoSW52b2ljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxudXNlU3RhdGUoKCk9PntcclxuICBjb25zdCBzdG9yZWRWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlckludm9pY2VQYXltZW50JylcclxuICBpZiAoc3RvcmVkVmFsdWUpIHtcclxuICAgIHNldFNlYXJjaEludm9pY2Uoc3RvcmVkVmFsdWUpXHJcbiAgfVxyXG4gIFxyXG59KVxyXG5jb25zdCBbZmlsdGVyTW9kZWwsIHNldEZpbHRlck1vZGVsXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICBpdGVtczogW10sXHJcbiAgcXVpY2tGaWx0ZXJFeGNsdWRlSGlkZGVuQ29sdW1uczogdHJ1ZSxcclxuICBxdWlja0ZpbHRlclZhbHVlczogW10sXHJcbn0pO1xyXG4gIGNvbnN0IFtjb2x1bW5WaXNpYmlsaXR5TW9kZWwsIHNldENvbHVtblZpc2liaWxpdHlNb2RlbF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgaGFuZGVsSGlkZGVuQ29sdW1uID0gKG5ld0hpZGRlbikgPT4ge1xyXG4gICAgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsKG5ld0hpZGRlbilcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdIaWRkZW5Db2x1bW5zSW52b2ljZVBheW1lbnQnLEpTT04uc3RyaW5naWZ5KG5ld0hpZGRlbikpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUZpbHRlciA9IChuZXdNb2RlbCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyTW9kZWwobmV3TW9kZWwpXHJcbiAgICBcclxuICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1F1aWNrRmlsdGVySW52b2ljZVBheW1lbnRUc3QnLEpTT04uc3RyaW5naWZ5KG5ld01vZGVsKSlcclxuICB9XHJcbiAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3Qgc3RvcmVkUXVpY2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlckludm9pY2VQYXltZW50VHN0JykpXHJcbiAgICBpZiAoc3RvcmVkUXVpY2spIHtcclxuICAgICAgc2V0RmlsdGVyTW9kZWwoc3RvcmVkUXVpY2spXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdG9yZWRDb2x1bW5zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnSGlkZGVuQ29sdW1uc0ludm9pY2VQYXltZW50JykpXHJcbiAgICBpZiAoc3RvcmVkQ29sdW1ucykge1xyXG4gICAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwoc3RvcmVkQ29sdW1ucylcclxuICAgIH1cclxuXHJcbiAgIH0sW3NlYXJjaEludm9pY2VdKVxyXG57LyoqIHNlYXJjaCBlbmQgKi99ICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgey8qKiBQYXltZW50IFJlY2VpdmVkIHN0YXJ0ICovfVxyXG5jb25zdCBbc2VhcmNoUGF5bWVudCwgc2V0UGF5bWVudEluZm9dID0gdXNlU3RhdGUoXCJcIik7XHJcbnVzZVN0YXRlKCgpPT57XHJcbiAgY29uc3Qgc3RvcmVkVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUXVpY2tGaWx0ZXJQYXltZW50JylcclxuICBpZiAoc3RvcmVkVmFsdWUpIHtcclxuICAgIHNldFBheW1lbnRJbmZvKHN0b3JlZFZhbHVlKVxyXG4gIH1cclxuICBcclxufSlcclxuY29uc3QgW2ZpbHRlck1vZGVsUGF5bWVudCwgc2V0RmlsdGVyTW9kZWxQYXltZW50XSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICBpdGVtczogW10sXHJcbiAgcXVpY2tGaWx0ZXJFeGNsdWRlSGlkZGVuQ29sdW1uczogdHJ1ZSxcclxuICBxdWlja0ZpbHRlclZhbHVlczogW10sXHJcbn0pO1xyXG4gIGNvbnN0IFtjb2x1bW5WaXNpYmlsaXR5TW9kZWxQYXltZW50LCBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWxQYXltZW50XSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBoYW5kZWxIaWRkZW5Db2x1bW5QYXltZW50ID0gKG5ld0hpZGRlbikgPT4ge1xyXG4gICAgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsUGF5bWVudChuZXdIaWRkZW4pXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnSGlkZGVuQ29sdW1uc1BheW1lbnQnLEpTT04uc3RyaW5naWZ5KG5ld0hpZGRlbikpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUZpbHRlclBheW1lbnQgPSAobmV3TW9kZWwpID0+IHtcclxuICAgIHNldEZpbHRlck1vZGVsUGF5bWVudChuZXdNb2RlbClcclxuICAgIFxyXG4gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUXVpY2tGaWx0ZXJQYXltZW50SW5mbzFUc3QnLEpTT04uc3RyaW5naWZ5KG5ld01vZGVsKSlcclxuICB9XHJcbiAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3Qgc3RvcmVkUXVpY2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlclBheW1lbnRJbmZvMVRzdCcpKVxyXG4gICAgaWYgKHN0b3JlZFF1aWNrKSB7XHJcbiAgICAgIHNldEZpbHRlck1vZGVsUGF5bWVudChzdG9yZWRRdWljaylcclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3JlZENvbHVtbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdIaWRkZW5Db2x1bW5zUGF5bWVudCcpKVxyXG4gICAgaWYgKHN0b3JlZENvbHVtbnMpIHtcclxuICAgICAgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsUGF5bWVudChzdG9yZWRDb2x1bW5zKVxyXG4gICAgfVxyXG5cclxuICAgfSxbXSlcclxuICAgY29uc3QgW29wZW5SZWFzb25EZWxldGUsIHNldE9wZW5SZWFzb25EZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuY29uc3QgaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSA9IChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgc2V0T3BlblJlYXNvbkRlbGV0ZSh0cnVlKTtcclxufTtcclxuY29uc3QgaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUgPSAoKSA9PiB7XHJcbiAgc2V0T3BlblJlYXNvbkRlbGV0ZShmYWxzZSk7XHJcbn07XHJcbmNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuY29uc3QgW0RlbGV0ZUlkLCBzZXREZWxldGVJZF09IHVzZVN0YXRlKG51bGwpXHJcbmNvbnN0IFtyZWxhdGVkSW52b2ljZSxzZXRSZWxhdGVkSW52b2ljZV0gPSB1c2VTdGF0ZShbXSlcclxuY29uc3QgW3JlbGF0ZWRDcmVkaXQsc2V0UmVsYXRlZENyZWRpdF0gPSB1c2VTdGF0ZSgwKTtcclxuY29uc3QgW21vZGVzLHNldE1vZGVzXSA9IHVzZVN0YXRlKDApXHJcbmNvbnN0IFthbW91bnQsc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApXHJcbmNvbnN0IFtyZWxhdGVkQ3VzdG9tZXJJRCxzZXRSZWxhdGVkQ3VzdG9tZXJJRF0gPSB1c2VTdGF0ZSgnJylcclxuY29uc3QgW3JlYXNvbixzZXRSZWFzb25dPSB1c2VTdGF0ZShcIlwiKTtcclxuY29uc3QgaGFuZGxlT3BlbiA9IChpZCkgPT4ge1xyXG4gIHNldE9wZW4odHJ1ZSk7XHJcbiAgc2V0RGVsZXRlSWQoaWQpXHJcbn07XHJcbmNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gIHNldE9wZW4oZmFsc2UpO1xyXG4gIHNldFJlbGF0ZWRJbnZvaWNlKFtdKVxyXG59O1xyXG5jb25zdCBbcmVsYXRlZE51bWJlciwgc2V0UmVsYXRlZE51bWJlcl0gPSB1c2VTdGF0ZSgwKVxyXG51c2VFZmZlY3QoKCk9PntcclxuICBjb25zdCBmZXRjaElkID0gYXN5bmMgKCkgPT4ge1xyXG4gICBpZiAoRGVsZXRlSWQpIHtcclxuICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1wYXltZW50LyR7RGVsZXRlSWR9YClcclxuICAgICAgICBzZXRSZWxhdGVkSW52b2ljZShyZXMuZGF0YS5kYXRhLlRvdGFsQW1vdW50KTtcclxuICAgICAgICBzZXRSZWxhdGVkQ3JlZGl0KHJlcy5kYXRhLmRhdGEucmVtYWluaW5nKTtcclxuICAgICAgICBzZXRNb2RlcyhyZXMuZGF0YS5kYXRhLm1vZGVzKTtcclxuICAgICAgICBzZXRBbW91bnQocmVzLmRhdGEuZGF0YS5hbW91bnQpO1xyXG4gICAgICAgIHNldFJlbGF0ZWRDdXN0b21lcklEKHJlcy5kYXRhLmRhdGEuY3VzdG9tZXJOYW1lLl9pZCk7XHJcbiAgICAgICAgc2V0UmVsYXRlZE51bWJlcihOdW1iZXIocmVzLmRhdGE/LmRhdGE/LnBheW1lbnROdW1iZXIgfHwgcmVzLmRhdGE/LnBheW1lbnROdW1iZXIgfHwgMCkpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmVzTG9jYWwgPSBhd2FpdCBkYi5wYXltZW50U2NoZW1hLmdldCh7X2lkOkRlbGV0ZUlkfSk7XHJcbiAgICAgIHNldFJlbGF0ZWRJbnZvaWNlKHJlc0xvY2FsLlRvdGFsQW1vdW50KTtcclxuICAgICAgICBzZXRSZWxhdGVkQ3JlZGl0KHJlc0xvY2FsLnJlbWFpbmluZyk7XHJcbiAgICAgICAgc2V0UmVsYXRlZEN1c3RvbWVySUQocmVzTG9jYWwuY3VzdG9tZXJOYW1lLl9pZCk7XHJcbiAgICAgICAgc2V0UmVsYXRlZE51bWJlcihyZXNMb2NhbC5wYXltZW50TnVtYmVyKTtcclxuICAgICAgICBzZXRNb2RlcyhyZXNMb2NhbC5tb2Rlcyk7XHJcbiAgICAgICAgc2V0QW1vdW50KHJlc0xvY2FsLmFtb3VudCk7XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgfVxyXG4gIGZldGNoSWQoKVxyXG59LFtEZWxldGVJZF0pXHJcbmNvbnN0IFtpbnZvaWNlSW5mbyxzZXRJbnZvaWNlSW5mb10gPSB1c2VTdGF0ZShbXSlcclxudXNlRWZmZWN0KCgpPT57XHJcbiAgY29uc3QgZmV0Y2hJbnZvaWNlID0gYXN5bmMgKCkgPT4ge1xyXG5pZiAocmVsYXRlZEludm9pY2UubGVuZ3RoID4gMCkge1xyXG4gIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICBjb25zdCBnZXRJbnZvaWNlID0gcmVsYXRlZEludm9pY2UubWFwKChyb3cpPT57XHJcbiAgICAgIHJldHVybiBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaW52b2ljZS8ke3Jvdy5pZH1gKVxyXG4gICAgfSlcclxuICAgIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwoZ2V0SW52b2ljZSk7XHJcbiAgICAgc2V0SW52b2ljZUluZm8ocmVzLm1hcCgocm93KT0+IHJvdy5kYXRhLmRhdGEpKVxyXG4gICAgfWNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnQW4gZXJyb3IgYXMgb2NjdXInKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgZ2V0SW52b2ljZSA9IHJlbGF0ZWRJbnZvaWNlLm1hcCgocm93KT0+e1xyXG4gICAgICByZXR1cm4gZGIuaW52b2ljZVNjaGVtYS5nZXQoe19pZDpyb3cuaWR9KVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKGdldEludm9pY2UpO1xyXG4gICAgc2V0SW52b2ljZUluZm8ocmVzKVxyXG4gIH1cclxufVxyXG4gIH1cclxuICBmZXRjaEludm9pY2UoKVxyXG59LFtyZWxhdGVkSW52b2ljZV0pXHJcbmNvbnN0IFtvbGRDcmVkaXQsc2V0T2xkQ3JlZGl0XSA9IHVzZVN0YXRlKG51bGwpXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gIGNvbnN0IGZldGNoQ3VzdG9tZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAocmVsYXRlZEN1c3RvbWVySUQpIHtcclxuICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgdHJ5IHtcclxuICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWN1c3RvbWVyLyR7cmVsYXRlZEN1c3RvbWVySUR9YClcclxuICAgICAgICAgc2V0T2xkQ3JlZGl0KHJlcy5kYXRhLmRhdGEuY3JlZGl0ICE9PSBudWxsIHx8IHJlcy5kYXRhLmRhdGEuY3JlZGl0ICE9PSB1bmRlZmluZWQ/cmVzLmRhdGEuZGF0YS5jcmVkaXQ6IDApXHJcbiAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgIH1cclxuICAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZXNMb2NhbCA9IGF3YWl0IGRiLmN1c3RvbWVyU2NoZW1hLmdldCh7X2lkOnJlbGF0ZWRDdXN0b21lcklEfSlcclxuICAgICAgc2V0T2xkQ3JlZGl0KHJlc0xvY2FsLmNyZWRpdCAhPT0gbnVsbCB8fCByZXNMb2NhbC5jcmVkaXQgIT09IHVuZGVmaW5lZD9yZXNMb2NhbC5jcmVkaXQ6IDApXHJcbiAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmZXRjaEN1c3RvbWVyKClcclxufSxbcmVsYXRlZEN1c3RvbWVySURdKVxyXG5jb25zdCB0b3RhbFIgPSBtb2RlcyA9PT0gJ0NyZWRpdC1BY2NvdW50JyA/cGFyc2VGbG9hdChvbGRDcmVkaXQgKyBhbW91bnQpOnBhcnNlRmxvYXQob2xkQ3JlZGl0IC0gcmVsYXRlZENyZWRpdClcclxuY29uc3QgdXBkYXRlSW52b2ljZUFtb3VudCA9IHJlbGF0ZWRJbnZvaWNlID8gXHJcbnJlbGF0ZWRJbnZvaWNlLm1hcCgocm93KT0+XHJcbiAgIHtcclxuICAgIGxldCBzdGF0dXMgPSAnJ1xyXG4gICBjb25zdCByZWxhdGVkSSA9ICBpbnZvaWNlSW5mbz8uZmluZCgocm93Mik9PnJvdzI/Ll9pZCA9PT0gcm93LmlkIClcclxuICBpZiAocmVsYXRlZEkpIHtcclxuICAgICBjb25zdCByYXdUb3RhbCA9IHBhcnNlRmxvYXQocmVsYXRlZEkudG90YWwpIC0gcGFyc2VGbG9hdChyb3cudG90YWwpO1xyXG4gICAgIGNvbnN0IHRvdGFsID0gTWF0aC5yb3VuZChyYXdUb3RhbCAqIDEwMCkgLyAxMDA7XHJcbiAgICAgY29uc3QgYmFsYW5jZUR1ZVJhdyA9IHBhcnNlRmxvYXQocmVsYXRlZEkudG90YWxJbnZvaWNlKSAtIHRvdGFsO1xyXG4gICAgIGNvbnN0IGJhbGFuY2VEdWUgPSBNYXRoLnJvdW5kKGJhbGFuY2VEdWVSYXcgKiAxMDApIC8gMTAwO1xyXG4gICAgIGlmICh0b3RhbCA+IDApIHtcclxuICAgICAgIHN0YXR1cyA9ICdQYXJ0aWFsbHktUGFpZCdcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHN0YXR1cyA9ICdTZW50J1xyXG4gICAgICB9XHJcbiAgICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiByb3cuaWQsXHJcbiAgICAgICAgbnVtYmVyOnJlbGF0ZWRJLmludm9pY2VOdW1iZXIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdG90YWw6IHRvdGFsIDw9IDAgPyBcIjBcIiA6IHRvdGFsLCBcclxuICAgICAgICAgIGJhbGFuY2VEdWUsXHJcbiAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbiAgIH1cclxuICApXHJcbjpudWxsXHJcbmNvbnN0IGhhbmRsZVVwZGF0ZUludm9pY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKCFuYXZpZ2F0b3Iub25MaW5lKSByZXR1cm47XHJcbiAgaWYgKCFyZWxhdGVkSW52b2ljZSB8fCByZWxhdGVkSW52b2ljZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICB0cnkge1xyXG4gICAgLy8gRmV0Y2ggQUxMIHJlbWFpbmluZyBwYXltZW50cyBhbmQgZWFjaCBpbnZvaWNlJ3MgY3VycmVudCBzdGF0ZVxyXG4gICAgY29uc3QgW2FsbFBheW1lbnRzUmVzLCAuLi5mcmVzaEludm9pY2VSZXNwb25zZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wYXltZW50YCksXHJcbiAgICAgIC4uLnJlbGF0ZWRJbnZvaWNlLm1hcCgocm93KSA9PiBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaW52b2ljZS8ke3Jvdy5pZH1gKSlcclxuICAgIF0pO1xyXG5cclxuICAgIGNvbnN0IGFsbFBheW1lbnRzID0gYWxsUGF5bWVudHNSZXMuZGF0YT8uZGF0YSB8fCBbXTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVzID0gcmVsYXRlZEludm9pY2UubWFwKChyb3csIGlkeCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnZvaWNlID0gZnJlc2hJbnZvaWNlUmVzcG9uc2VzW2lkeF0/LmRhdGE/LmRhdGE7XHJcbiAgICAgIGlmICghaW52b2ljZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAvLyBTdW0gYWxsIHJlbWFpbmluZyBwYXltZW50cyBzdGlsbCBsaW5rZWQgdG8gdGhpcyBpbnZvaWNlXHJcbiAgICAgIGxldCB0b3RhbFBhaWQgPSAwO1xyXG4gICAgICBhbGxQYXltZW50cy5mb3JFYWNoKChwYXltZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHBheW1lbnQuVG90YWxBbW91bnQgJiYgQXJyYXkuaXNBcnJheShwYXltZW50LlRvdGFsQW1vdW50KSkge1xyXG4gICAgICAgICAgcGF5bWVudC5Ub3RhbEFtb3VudC5mb3JFYWNoKCh0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGEuaWQgPT09IHJvdy5pZCkge1xyXG4gICAgICAgICAgICAgIHRvdGFsUGFpZCArPSBwYXJzZUZsb2F0KHRhLnRvdGFsIHx8IDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdG90YWxQYWlkID0gTWF0aC5yb3VuZCh0b3RhbFBhaWQgKiAxMDApIC8gMTAwO1xyXG4gICAgICBjb25zdCBpbnZvaWNlVG90YWwgPSBwYXJzZUZsb2F0KGludm9pY2UudG90YWxJbnZvaWNlIHx8IDApO1xyXG4gICAgICBjb25zdCBiYWxhbmNlRHVlID0gTWF0aC5yb3VuZCgoaW52b2ljZVRvdGFsIC0gdG90YWxQYWlkKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHRvdGFsUGFpZCA8PSAwID8gJ1NlbnQnIDogKHRvdGFsUGFpZCA+PSBpbnZvaWNlVG90YWwgPyAnUGFpZCcgOiAnUGFydGlhbGx5LVBhaWQnKTtcclxuXHJcbiAgICAgIHJldHVybiB7IGlkOiByb3cuaWQsIGRhdGE6IHsgdG90YWw6IHRvdGFsUGFpZCwgYmFsYW5jZUR1ZSwgc3RhdHVzIH0gfTtcclxuICAgIH0pLmZpbHRlcihCb29sZWFuKTtcclxuXHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbCh1cGRhdGVzLm1hcCgoeyBpZCwgZGF0YSB9KSA9PlxyXG4gICAgICBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtaW52b2ljZS8ke2lkfWAsIGRhdGEpXHJcbiAgICApKTtcclxuICAgIGF3YWl0IFByb21pc2UuYWxsKHVwZGF0ZXMubWFwKGFzeW5jICh7IGlkLCBkYXRhIH0pID0+IHtcclxuICAgICAgYXdhaXQgZGIuaW52b2ljZVNjaGVtYS51cGRhdGUoaWQsIHsgLi4uZGF0YSwgdXBkYXRlUzogdHJ1ZSB9KTtcclxuICAgIH0pKTtcclxuICAgIGludmFsaWRhdGVDYWNoZSgnL2ludm9pY2UnKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coJ0FuIGVycm9yIG9jY3VycmVkIGR1cmluZyBpbnZvaWNlIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgfVxyXG59XHJcbmNvbnN0IGhhbmRsZVVwZGF0ZUNyZWRpdCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgY3JlZGl0OnRvdGFsUlxyXG4gIH1cclxuaWYgKG5hdmlnYXRvci5vbkxpbmUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLWN1c3RvbWVyLyR7cmVsYXRlZEN1c3RvbWVySUR9YCxkYXRhKSBcclxuICAgICBhd2FpdCBkYi5jdXN0b21lclNjaGVtYS51cGRhdGUocmVsYXRlZEN1c3RvbWVySUQsey4uLmRhdGEsdXBkYXRlUzp0cnVlfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbn0gXHJcbnsvKiogZGVsZXRlIG11bHRpcGxlICYmIGFsbCBtb2RhbCBlbmQgKi99XHJcbmNvbnN0IFttb2RhbERlbGV0ZU9wZW5Mb2FkaW5nLHNldE1vZGFsRGVsZXRlT3BlbkxvYWRpbmddPSB1c2VTdGF0ZShmYWxzZSk7XHJcbnsvKiogTG9hZGluZyBEZWxldGUgVmlldyBTdGFydCAqL31cclxuY29uc3QgaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgc2V0TW9kYWxEZWxldGVPcGVuTG9hZGluZyh0cnVlKTtcclxuICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gIGhhbmRsZUNsb3NlKCk7XHJcblxyXG4gIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9LCA1MDApXHJcbn1cclxuY29uc3QgaGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbn1cclxuey8qKiBMb2FkaW5nIERlbGV0ZSBWaWV3IEVuZCAqL31cclxuY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBpZEluZm86ICcnLFxyXG4gICAgcGVyc29uOnVzZXIuZGF0YS51c2VyTmFtZSArICcgRGVsZXRlZCAnICsgYFBBWS0ke1N0cmluZyhyZWxhdGVkTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfWAsXHJcbiAgICByZWFzb24sXHJcbiAgICBkYXRlTm90aWZpY2F0aW9uOm5ldyBEYXRlKClcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCxkYXRhKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9XHJcbn1cclxuY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuaWYgKG5hdmlnYXRvci5vbkxpbmUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLXBheW1lbnQvJHtEZWxldGVJZH1gKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgYXdhaXQgaGFuZGxlVXBkYXRlSW52b2ljZSgpO1xyXG4gICAgICAgICAgYXdhaXQgaGFuZGxlVXBkYXRlQ3JlZGl0KCk7XHJcbiAgICAgICAgICBhd2FpdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oKTtcclxuICAgICAgICAgIGludmFsaWRhdGVDYWNoZSgnL3BheW1lbnQnKTtcclxuICAgICAgICAgIGhhbmRsZURlbGV0ZU9wZW5Mb2FkaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbiAgfTtcclxuey8qKiBzZWFyY2ggZW5kICovfSAgICBcclxuY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbmNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG59OyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgY29uc3QgZmlsdGVyZWRSb3dzID0gaW52b2ljZVBheW1lbnRSb3cuZmlsdGVyKHJvdz0+ICFoaWRkZW4uc29tZSgocm93Mik9PiByb3cyLmlkUm93ID09PSByb3cuX2lkKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmllbGQ6ICdpbnZvaWNlTnVtYmVyJywgaGVhZGVyTmFtZTogJ0ludm9pY2UjJywgd2lkdGg6MTQwfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpZWxkOiAnY3VzdG9tZXInLCBoZWFkZXJOYW1lOiAnQ3VzdG9tZXIgTmFtZScsIHdpZHRoOnNpZGVCYXI/MjQwOjM1MCwgdmFsdWVHZXR0ZXI6KHBhcmFtcyk9PiBwYXJhbXMucm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9VcHBlckNhc2UoKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZDogJ3N0YXR1cycsIGhlYWRlck5hbWU6ICdTdGF0dXMnLCB3aWR0aDoxNDAsIHJlbmRlckNlbGw6IChwYXJhbXMpPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJvdy5zdGF0dXMgPT09IFwiRHJhZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyYXlcIjpwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJTZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJibHVlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJEZWNsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIlBlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiM4MDEzMTNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIlBhaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiMzMzliYTVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIlBhcnRpYWxseS1QYWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjZmI4YzAwXCI6XCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcmFtcy5yb3cuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZDogJ2RheXNQYXN0RHVlJywgaGVhZGVyTmFtZTogJ1BlcmlvZCcsIHdpZHRoOjI0MCxyZW5kZXJDZWxsOiAocGFyYW1zKT0+IHBhcmFtcy5yb3cub3ZlcmR1ZSA9PT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtwYXJhbXMucm93LmRheXNQYXN0RHVlID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZWRcIjpcImJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdmVyZHVlOiB7cGFyYW1zLnJvdy5kYXlzUGFzdER1ZX0gRGF5cyBQYXN0IER1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6J09OIFRJTUUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZDogJ3N1YlRvdGFsJywgaGVhZGVyTmFtZTogJ0ktQW1vdW50Jywgd2lkdGg6MTIwLHJlbmRlckNlbGw6IChwYXJhbXMpPT4gYCQke3BhcmFtcy5yb3cuc3ViVG90YWw/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywnLCcpfWAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpZWxkOiAndG90YWwnLCBoZWFkZXJOYW1lOiAnQS1QYWlkJywgd2lkdGg6MTIwLHJlbmRlckNlbGw6IChwYXJhbXMpPT4gYCQke3BhcmFtcy5yb3cudG90YWw/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywnLCcpfWAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpZWxkOiAnYmFsYW5jZUR1ZScsIGhlYWRlck5hbWU6ICdCLUR1ZScsIHdpZHRoOjEyMCxyZW5kZXJDZWxsOiAocGFyYW1zKT0+IGAkJHtwYXJhbXMucm93LmJhbGFuY2VEdWU/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywnLCcpfWAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5zUGF5bWVudCA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpZWxkOiAncGF5bWVudE51bWJlcicsIGhlYWRlck5hbWU6ICdQYXltZW50IycsIHdpZHRoOjEzMCwgcmVuZGVyQ2VsbDogKHBhcmFtcyk9PiBgUEFZLSR7U3RyaW5nKHBhcmFtcy5yb3cucGF5bWVudE51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1gIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZDogJ2N1c3RvbWVyJywgaGVhZGVyTmFtZTogJ0N1c3RvbWVyIE5hbWUnLCB3aWR0aDpzaWRlQmFyPzM2MDo0NjAsIHZhbHVlR2V0dGVyOihwYXJhbXMpPT4gcGFyYW1zLnJvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lICE9PSB1bmRlZmluZWQ/cGFyYW1zLnJvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvVXBwZXJDYXNlKCk6bnVsbH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZDogJ2Rlc2NyaXB0aW9uJywgaGVhZGVyTmFtZTogJ0Rlc2NyaXB0aW9uJywgd2lkdGg6c2lkZUJhcj8yMDA6MjUwfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpZWxkOiAnZGF0ZUZpZWxkJywgaGVhZGVyTmFtZTogJ0RhdGUnLCB3aWR0aDoxNDB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmllbGQ6ICdhbW91bnQnLCBoZWFkZXJOYW1lOiAnQS1QYWlkJywgd2lkdGg6MTMwLHJlbmRlckNlbGw6IChwYXJhbXMpPT4gYCQke3BhcmFtcy5yb3cuYW1vdW50Py50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csJywnKX1gIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZDogJ3ZpZXcnLCBoZWFkZXJOYW1lOiAnVmlldycsIHdpZHRoOjUwLCByZW5kZXJDZWxsOihwYXJhbXMpPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIlZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17UGF5bWVudEluZm9WLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL1BheW1lbnRJbmZvcm1hdGlvblZpZXcvJHtwYXJhbXMucm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gc3R5bGU9e3tjb2xvcjonIzIwMmE1YSd9fS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZDogJ2VkaXQnLCBoZWFkZXJOYW1lOiAnRWRpdCcsIHdpZHRoOjUwLCByZW5kZXJDZWxsOihwYXJhbXMpPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0VG9vbHRpcCB0aXRsZT1cIkVkaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17UGF5bWVudEluZm9VLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvUGF5bWVudEluZm9ybWF0aW9uVXBkYXRlLyR7cGFyYW1zLnJvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gc3R5bGU9e3tjb2xvcjonZ3JheSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0VkaXRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9LCAge2ZpZWxkOiAnRGVsZXRlJywgaGVhZGVyTmFtZTogJ0RlbGV0ZScsIHdpZHRoOjUwLCByZW5kZXJDZWxsOihwYXJhbXMpPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuKHBhcmFtcy5yb3cuX2lkKX0gaGlkZGVuPXtQYXltZW50SW5mb0QubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInLGNvbG9yOidyZWQnfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RlbGV0ZVRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1uQ3VzdG9tZXIgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZDogJ2N1c3RvbWVyJywgaGVhZGVyTmFtZTogJ0N1c3RvbWVyIE5hbWUnLCB3aWR0aDpvcGVuPzYwMDo3MDAsIHZhbHVlR2V0dGVyOihwYXJhbXMpPT4gcGFyYW1zLnJvdy5DdXN0b21lcn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZDogJ2NyZWRpdCcsIGhlYWRlck5hbWU6ICdDcmVkaXQnLCB3aWR0aDozMDAscmVuZGVyQ2VsbDogKHBhcmFtcyk9PiBgJCR7cGFyYW1zLnJvdy5jcmVkaXQ/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywnLCcpfWAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZDogJ3ZpZXcnLCBoZWFkZXJOYW1lOiAnVmlldycsIHdpZHRoOjQwLCByZW5kZXJDZWxsOihwYXJhbXMpPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIlZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvQ3VzdG9tZXJJbmZvcm1hdGlvblZpZXcvJHtwYXJhbXMucm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gc3R5bGU9e3tjb2xvcjonIzIwMmE1YSd9fS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG48Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3tiYWNrZ3JvdW5kQ29sb3I6JyMzMDM2OGEnfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQYXltZW50XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvLz5cclxuICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfS8+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3tjb2xvcjond2hpdGUnfX0gLz4gXHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3toZWlnaHQ6JzcwMHB4J319PlxyXG4gICAgICAgICAgPFNpZGViYXJEYXNoLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhci8+XHJcbiAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDF9fSA+XHJcbiAgICA8Qm94PlxyXG4gICAge1xyXG4gICAgICBsb2FkaW5nRGF0YT88ZGl2ID5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246J3JlbGF0aXZlJywgdG9wOicxMjBweCd9fT5cclxuICAgICAgICAgIDxMb2FkZXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj46KFxyXG4gICAgICA8VGFiQ29udGV4dCAgdmFsdWU9e3ZhbHVlM31cclxuICAgICAgICAgICAgICAgPlxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICA8VGFiTGlzdFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTN9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwibGFiIEFQSSB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzp7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOid3aGl0ZScsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OicwcHgnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8VGFiIFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXltZW50XCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzp7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6J3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czonMTBweCdcclxuICAgICAgICAgICAgICAgICAgfSwgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6J2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJnY29sb3I6J3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6JzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6JzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDxUYWIgXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBheW1lbnQgUmVjZWl2ZWRcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiMlwiXHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjond2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjonZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOicxMHB4J1xyXG4gICAgICAgICAgICAgICAgICB9LCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjonZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjond2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjonMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czonMTBweCdcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nICYmKDxUYWIgXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNyZWRpdFwiIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCIzXCJcclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOidncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6JzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgIH0sICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOidncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOid3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOicxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOicxMHB4J1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgIC8+KX1cclxuICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8VGFiUGFuZWwgdmFsdWU9XCIxXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDonLTQwcHgnfX0+XHJcbiAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3twb3NpdGlvbjoncmVsYXRpdmUnLGZsb2F0OidyaWdodCcsbWFyZ2luOicxMHB4J319PlxyXG4gICAgICA8Vmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgIDxJY29uQnV0dG9uIGhpZGRlbj17UGF5bWVudEluZm9DLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgPE5hdkxpbmsgdG89eycvUGF5bWVudEluZm9ybWF0aW9uRm9ybSd9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdidG5DdXN0b21lckFkZGluZyc+XHJcbiAgICAgICAgICAgICA8QWRkIC8+IFxyXG4gICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICB7aW52b2ljZVBheW1lbnRSb3cubGVuZ3RoID4gMCA/IChcclxuICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiA1NjAsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTyc/KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17aW52b2ljZVBheW1lbnRSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RzPXt7dG9vbGJhcjogR3JpZFRvb2xiYXJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1F1aWNrRmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludE9wdGlvbnM6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVRvb2xiYXJCdXR0b246IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRGVuc2l0eVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck1vZGVsPXtmaWx0ZXJNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GaWx0ZXJNb2RlbENoYW5nZT17KG5ld01vZGVsKSA9PiBoYW5kbGVGaWx0ZXIobmV3TW9kZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WaXNpYmlsaXR5TW9kZWwgPSB7Y29sdW1uVmlzaWJpbGl0eU1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZT17aGFuZGVsSGlkZGVuQ29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e3dpZHRoOicxMDAlJyxiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJywgcGFkZGluZzonMTBweCd9fVxyXG4gICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICk6KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17ZmlsdGVyZWRSb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90cz17e3Rvb2xiYXI6IEdyaWRUb29sYmFyfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dRdWlja0ZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRPcHRpb25zOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVUb29sYmFyQnV0dG9uOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVEZW5zaXR5U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJNb2RlbD17ZmlsdGVyTW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25GaWx0ZXJNb2RlbENoYW5nZT17KG5ld01vZGVsKSA9PiBoYW5kbGVGaWx0ZXIobmV3TW9kZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZpc2liaWxpdHlNb2RlbCA9IHtjb2x1bW5WaXNpYmlsaXR5TW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25Db2x1bW5WaXNpYmlsaXR5TW9kZWxDaGFuZ2U9e2hhbmRlbEhpZGRlbkNvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3t3aWR0aDonMTAwJScsYmFja2dyb3VuZENvbG9yOid3aGl0ZScsIHBhZGRpbmc6JzEwcHgnfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgPC9Cb3g+IFxyXG4gICApIDogXHJcbiAgIDxkaXY+XHJcbiAgIDxpbWcgc3JjPXtJbWFnZX0gc3R5bGU9e3twb3NpdGlvbjoncmVsYXRpdmUnLG1hcmdpbkxlZnQ6JzE5JScscGFkZGluZzonMjVweCcsIGhlaWdodDonMzUlJyx0b3A6JzQwcHgnLCB3aWR0aDonNTAlJywgYm94U2hhZG93OicwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSd9fS8+XHJcbiAgIDwvZGl2PlxyXG4gICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICA8VGFiUGFuZWwgdmFsdWU9XCIyXCI+XHJcbiAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICB7cGF5bWVudC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDYzMCwgd2lkdGg6ICcxMDAlJyxtYXJnaW5Ub3A6Jy00MHB4JyB9fT5cclxuICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxEYXRhR3JpZFxyXG4gICAgICAgICAgICAgICAgICByb3dzPXtwYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zUGF5bWVudH1cclxuICAgICAgICAgICAgICAgICAgc2xvdHM9e3t0b29sYmFyOiBHcmlkVG9vbGJhcn19XHJcbiAgICAgICAgICAgICAgICAgIHNsb3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNob3dRdWlja0ZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHByaW50T3B0aW9uczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVRvb2xiYXJCdXR0b246IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjaGVja2JveFNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlRGVuc2l0eVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgIGZpbHRlck1vZGVsPXtmaWx0ZXJNb2RlbFBheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgIG9uRmlsdGVyTW9kZWxDaGFuZ2U9eyhuZXdNb2RlbCkgPT4gaGFuZGxlRmlsdGVyUGF5bWVudChuZXdNb2RlbCl9XHJcbiAgICAgICAgICAgICAgICAgIGNvbHVtblZpc2liaWxpdHlNb2RlbCA9IHtjb2x1bW5WaXNpYmlsaXR5TW9kZWxQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICBvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZT17aGFuZGVsSGlkZGVuQ29sdW1uUGF5bWVudH1cclxuICAgICAgICAgICAgICAgICAgc3g9e3t3aWR0aDonMTAwJScsYmFja2dyb3VuZENvbG9yOid3aGl0ZScsIHBhZGRpbmc6JzEwcHgnfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0JveD4gXHJcbiAgICAgICAgICApIDogPGRpdj5cclxuICAgICAgICAgPGltZyBzcmM9e0ltYWdlfSBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZScsbWFyZ2luTGVmdDonMTklJyxwYWRkaW5nOicyNXB4JywgaGVpZ2h0OiczNSUnLHRvcDonNDBweCcsIHdpZHRoOic1MCUnLCBib3hTaGFkb3c6JzAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpJ319Lz5cclxuICAgICAgICAgPC9kaXY+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjNcIj5cclxuICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgIHtwYXltZW50Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICA8Qm94IHN4PXt7IGhlaWdodDogNjMwLCB3aWR0aDogJzEwMCUnLG1hcmdpblRvcDonLTQwcHgnIH19PlxyXG4gICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxEYXRhR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e2N1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbkN1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7Ym9yZGVyUmFkaXVzOic1cHgnLGJhY2tncm91bmRDb2xvcjonI2ZmZid9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+IFxyXG4gICAgICAgICAgKSA6IDxkaXY+XHJcbiAgICAgICAgIDxpbWcgc3JjPXtJbWFnZX0gc3R5bGU9e3twb3NpdGlvbjoncmVsYXRpdmUnLG1hcmdpbkxlZnQ6JzE5JScscGFkZGluZzonMjVweCcsIGhlaWdodDonMzUlJyx0b3A6JzQwcHgnLCB3aWR0aDonNTAlJywgYm94U2hhZG93OicwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSd9fS8+XHJcbiAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgPC9UYWJDb250ZXh0PilcclxuICAgICAgfVxyXG4gICAgPC9Cb3g+ICAgXHJcbiAgICAgPC9Db250YWluZXI+PC9Cb3g+PC9Cb3g+XHJcbiAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUludm9pY2VBbW91bnQgIT09IG51bGwgfHwgcmVsYXRlZEN1c3RvbWVySUQgIT09ICcnP1xyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3thbGlnbkl0ZW1zOidjZW50ZXInLHBhZGRpbmc6JzE1cHgnfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCB0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgRG8geW91IFdhbnQgdG8gZGVsZXRlP1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuUmVhc29uRGVsZXRlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+OicnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+ICBcclxuICAgICAgPE1vZGFsXHJcbiAgICAgIG9wZW49e21vZGFsRGVsZXRlT3BlbkxvYWRpbmd9XHJcbiAgICAgIG9uQ2xvc2U9e2hhbmRsZURlbGV0ZUNsb3NlTG9hZGluZ31cclxuICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICAgICB9fVxyXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICA+XHJcbiAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2xvYWRpbmc/KDxMb2FkZXIvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICA6KCBcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3tjb2xvcjonZ3JlZW4nLGhlaWdodDonNDBweCcsIHdpZHRoOic0MHB4J319Lz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj4gRGF0YSBzdWNjZXNzZnVsbHkgZGVsZXRlZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZ2FwOic2MHB4JyxqdXN0aWZ5Q29udGVudDonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICA8L0JveD5cclxuICAgIDwvTW9kYWw+IFxyXG4gICAgPE1vZGFsICBcclxuICAgICAgICBvcGVuPXtvcGVuUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZX0gc3R5bGU9e3sgcG9zaXRpb246J3JlbGF0aXZlJywgZmxvYXQ6J3JpZ2h0J319PiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17e2NvbG9yOicjMjAyYTVhJ319Lz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9WaWV3VG9vbHRpcD4gIFxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgV2h5IGRvIHlvdSB3YW50IHRvIGRlbGV0ZTogUEFZLXtyZWxhdGVkTnVtYmVyfT9cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVEZWxldGV9PlxyXG4gICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7YWxpZ25JdGVtczonY2VudGVyJyxwYWRkaW5nOicxNXB4J319IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3JlYXNvbicgXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRSZWFzb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nUmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDonMTAwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19ICAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+IFxyXG4gICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgICAgIH19XHJcbiAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nPyg8TG9hZGVyLz5cclxuICAgICAgICAgICAgICAgICk6KFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJyx0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17e2NvbG9yOidncmVlbicsaGVpZ2h0Oic0MHB4Jywgd2lkdGg6JzQwcHgnfX0vPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgZ2FwOic2MHB4JyxqdXN0aWZ5Q29udGVudDonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvTW9kYWw+XHJcbjwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFZpZXdcclxuIiwiaW1wb3J0IERleGllIGZyb20gXCJkZXhpZVwiO1xyXG5cclxuY29uc3QgZGIgPSBuZXcgRGV4aWUoJ0dsb2JhbEdhdGUnKTtcclxuXHJcbmRiLnZlcnNpb24oMSkuc3RvcmVzKHtcclxuICAgIGN1c3RvbWVyU2NoZW1hOiAnKytpZCxDdXN0b21lcixfaWQsY3VzdG9tZXJUeXBlLGRlc2lnbmF0aW9uLGN1c3RvbWVyRmlyc3ROYW1lLCBjdXN0b21lckxhc3ROYW1lLGN1c3RvbWVyRnVsbE5hbWUsY29tcGFueU5hbWUsY3VzdG9tZXJFbWFpbCxjdXN0b21lckNvbXBhbnlQaG9uZSxjdXN0b21lclBob25lLGN1cnJlbmN5LHBheW1lbnRUZXJtcywgYmlsbGluZ0FkZHJlc3MsYmlsbGluZ0NpdHksY3JlZGl0LHNoaXBwaW5nQWRkcmVzcyxzaGlwcGluZ0NpdHksY3VzdG9tZXJEZXNjcmlwdGlvbixzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBzdXBwbGllclNjaGVtYTogJysraWQsX2lkLHN1cHBsaWVyTmFtZSxzdG9yZU5hbWUsY3VzdG9tZXJQaG9uZTEsY3VzdG9tZXJQaG9uZTIsYWRkcmVzcyxkZXNjcmlwdGlvbixzeW5jZWQnLFxyXG4gICAgaXRlbVNjaGVtYTogJysraWQsaXRlbU5hbWUsX2lkLGl0ZW1VcGMsdHlwZUl0ZW0saXRlbVN0b3JlLHVuaXQsaXRlbURpbWVuc2lvbixpdGVtV2VpZ2h0LGl0ZW1DYXRlZ29yeSxpdGVtTWFudWZhY3R1cmVyLGl0ZW1CcmFuZCxpdGVtQ29zdFByaWNlLGl0ZW1RdWFudGl0eSxpdGVtU2VsbGluZ1ByaWNlLGl0ZW1EZXNjcmlwdGlvbixzdG9ja09uSGFuZCxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBpdGVtU2NoZW1hVmlldzogJysraWQsX2lkJyxcclxuICAgIGRhaWx5RXhwZW5zZVNjaGVtYTogJysrZXhwZW5zZU51bWJlcixfaWQsZXhwZW5zZUNhdGVnb3J5LGFjY291bnROYW1lLGRlc2NyaXB0aW9uLGV4cGVuc2VEYXRlLGFtb3VudCxlbXBsb3llZU5hbWUscmF0ZSx0b3RhbCxhY2NvdW50TmFtZUluZm8scmVhc29uLENyZWF0ZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBkYWlseUV4cGVuc2VWaWV3U2NoZW1hOiAnKytleHBlbnNlTnVtYmVyLF9pZCcsXHJcbiAgICBoaWRkZW5TY2hlbWE6ICcrK2lkLF9pZCxpZFJvdyxoaWRkZW5CeUNFTycsXHJcbiAgICBpdGVtQ29kZVNjaGVtYTogJysraWQsaXRlbUNhdGVnb3J5LF9pZCxpdGVtQ29kZScsXHJcbiAgICBpdGVtVW5pdFNjaGVtYTogJysraWQsaXRlbVVuaXQsX2lkJyxcclxuICAgIGRlcGFydG1lbnRTY2hlbWE6ICcrK2lkLGRlcGFydG1lbnQsX2lkJyxcclxuICAgIGVzdGltYXRlU2NoZW1hOiAnKytlc3RpbWF0ZU51bWJlcixfaWQsY3VzdG9tZXJOYW1lLGVzdGltYXRlRGF0ZSxlc3RpbWF0ZURlZmVjdCxlc3RpbWF0ZVN1YmplY3Qsc3RhdHVzLGl0ZW1zLHN1YlRvdGFsLHRvdGFsLHRvdGFsVyxub3RlLGVzdGltYXRlTmFtZSxDcmVhdGUsYmFsYW5jZUR1ZSx0ZXJtcyxzaGlwcGluZyxub3RlSW5mbyxhZGp1c3RtZW50LGFkanVzdG1lbnROdW1iZXIsdG90YWxJbnZvaWNlLFJlZixSZWZlcmVuY2VOYW1lLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIGludm9pY2VTY2hlbWE6ICcrK2ludm9pY2VOdW1iZXIsX2lkLGN1c3RvbWVyTmFtZSxpbnZvaWNlRGF0ZSxpbnZvaWNlRHVlRGF0ZSxpbnZvaWNlU3ViamVjdCxpbnZvaWNlUHVyY2hhc2UsaW52b2ljZURlZmVjdCxzdGF0dXMsaXRlbXMsc3ViVG90YWwsUmVmZXJlbmNlTmFtZSxSZWZlcmVuY2VOYW1lMix0b3RhbCxub3RlSW5mbyxiYWxhbmNlRHVlLHRvdGFsVyxhY3Rpb25UYWtlbixpbnZvaWNlTmFtZSxQb3NpdGlvbixub3RlLENyZWF0ZSxzaGlwcGluZyxhZGp1c3RtZW50LGFkanVzdG1lbnROdW1iZXIsdG90YWxJbnZvaWNlLHRlcm1zLFJlZixzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBpbnZvaWNlVmlld1NjaGVtYTogJysraW52b2ljZU51bWJlcixfaWQnLFxyXG4gICAgcG9zU2NoZW1hOiAnKytmYWN0dXJlTnVtYmVyLF9pZCxjdXN0b21lck5hbWUsaW52b2ljZURhdGUsdGltZSxzdGF0dXMsaXRlbXMsc3ViVG90YWwsdG90YWxGQyx0b3RhbFVTRCxyYXRlLENyZWF0ZSxiYWxhbmNlRHVlLG5vdGUsdG90YWxJbnZvaWNlLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHBheW1lbnRTY2hlbWE6ICcrK3BheW1lbnROdW1iZXIsX2lkLGN1c3RvbWVyTmFtZSxhbW91bnQsYmFua0NoYXJnZSxtb2RlcyxwYXltZW50RGF0ZSxyZWZlcmVuY2VOdW1iZXIsZGVzY3JpcHRpb24scmVtYWluaW5nLENyZWF0ZSxQYXltZW50UmVjZWl2ZWRGQyxQYXltZW50UmVjZWl2ZWRVU0QsVG90YWxBbW91bnQsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgcHJvamVjdFNjaGVtYTogJysrcHJvamVjdE51bWJlcixfaWQsY3VzdG9tZXJOYW1lLHByb2plY3ROYW1lLHN0YXR1cyxwaGFzZSxkZXNjcmlwdGlvbixzdGFydERhdGUsdmlzaXREYXRlLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIHB1cmNoYXNlU2NoZW1hOiAnKytwdXJjaGFzZU51bWJlcixfaWQsY3VzdG9tZXJOYW1lLG5vdGVJbmZvLGVzdGltYXRlRGVmZWN0LGVzdGltYXRlU3ViamVjdCxwdXJjaGFzZU5hbWUscHJvamVjdE5hbWUsZGVzY3JpcHRpb24sUG9zaXRpb24scHVyY2hhc2VEYXRlLHN0YXR1cyxzdGF0dXNJbmZvLGl0ZW1zLHB1cmNoYXNlQW1vdW50MSxwdXJjaGFzZUFtb3VudDIsUmVmZXJlbmNlTmFtZSxSZWZlcmVuY2VOYW1lMixzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBwdXJjaGFzZVNjaGVtYVZpZXc6ICcrK3B1cmNoYXNlTnVtYmVyLF9pZCcsXHJcbiAgICBtYWludGVuYW5jZVNjaGVtYTogJysrc2VydmljZU51bWJlcixjdXN0b21lck5hbWUsX2lkLGFjdGlvbixzZXJ2aWNlTmFtZSxzZXJ2aWNlRGF0ZSxsYWJvclF0eSx0b3RhbExhYm9yRmVlc0dlbmVyYWxlLHRlY2huaWNpYW5Bc3NpZ24sbm90ZSx0b3RhbExhYm9yRmVlcyxsYWJvclBlcmNlbnRhZ2UsdG90YWxEaXNjb3VudCxsYWJvckRpc2NvdW50LHZpc2l0RGF0ZSxzdGF0dXMsaXRlbXMsaXRlbURlc2NyaXB0aW9uSW5mbyxicmFuZCxhY3Rpb25UYWtlbixtb2RlbCx3YXJyYW50eSxzZXJpYWxObyxkZWZlY3REZXNjcmlwdGlvbixhZGp1c3RtZW50LGFkanVzdG1lbnROdW1iZXIsdG90YWxJbnZvaWNlLHN1YlRvdGFsLENvbnZlcnRlZCxSZWZlcmVuY2VOYW1lLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIG1haW50ZW5hbmNlVmlld1NjaGVtYTogJysrc2VydmljZU51bWJlcixfaWQnLFxyXG4gICAgZW1wbG95ZWVTY2hlbWE6ICcrK2VtcGxveWVlSWQsX2lkLGpvaW5EYXRlLGVtcGxveWVlTmFtZSxlbXBsb3llZUFkZHJlc3MsZW1wbG95ZWVFbWFpbCxlbXBsb3llZVBob25lLGVtcGxveWVlUm9sZSxkZXBhcnRtZW50LGRhdGVPZkJpcnRoLEdlbmRlcixzdGF0dXMsc3RhdHVzTWFyaXRhbCxpZGVudGlmaWVyLGlkZW50aWZpZXJOdW1iZXIsZXhwaXJlRGF0ZSxzYWxhcnkscmVhc29uMSxkZXNjcmlwdGlvbixiYW5rQWNjb3VudE51bWJlcixiYW5rTmFtZSxvdGhlcixib3VuY2VBbGxvd2FuY2VzLGZvb2RCYXNpYyxiYXNpY1RyYW5zcG9ydCxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBwYXlSb2xsU2NoZW1hOiAnKytwYXlOdW1iZXIsX2lkLHBheURhdGUsbW9udGgsZGF5c1csc3RhdHVzLGRheXNPcGVuLExvcHMsYmFzaWNTYWxhcnksZWFybmluZ1NhbGFyeSxhZHZhbmNlZFNhbGFyeSxiYXNpY1RyYW5zcG9ydCx0cmFuc3BvcnRFYXJuaW5nLHRyYW5zcG9ydERlZHVjdGlvbixmb29kQmFzaWMsZm9vZEVhcm5pbmcsaXRlbUxvc3QsZm9vZERlZHVjdGlvbixib3VuY2VBbGxvd2FuY2VzLGJvdW5jZUFsbG93YW5jZXNFYXJuaW5nLG90aGVyLG90aGVyRWFybmluZyxsb2FuLGJvbnVzLHRvdGFsQWN0dWFsU2FsYXJ5LHRvdGFsQWN0dWFsRWFybmluZyx0b3RhbEFjdHVhbERlZHVjdGlvbix0b3RhbE5ldCx0b3RhbFBhaWQscmF0ZSx0b3RhbFBhaWREb2xsYXJzLHdvcmRzLGVtcGxveWVlTmFtZSxhbW91bnRQYXlVU0QsYW1vdW50UGF5RkMsQ3JlZGl0RkMsQ3JlZGl0VVNELHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIGVtcGxveWVlVXNlclNjaGVtYTogJ19pZCxlbXBsb3llZU5hbWUsZW1wbG95ZWVFbWFpbCxyb2xlLHBhc3N3b3JkLHZlcmlmaWNhdGlvbkNvZGUsY29kZUV4cGlyYXRpb24sc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgdXNlckFjY291bnQ6ICdpZEluZm8sZW1wbG95ZWVOYW1lLHBhc3N3b3JkJyxcclxuICAgIGdyYW50QWNjZXNzU2NoZW1hOiAnKytpZCxlbXBsb3llZU5hbWUsX2lkLHVzZXJJRCxtb2R1bGVzJyxcclxuICAgIGNhc2hTY2hlbWE6ICcrK2Nhc2hOdW1iZXIsX2lkLGNhc2hEYXRlLHN0YXR1cyx0b3RhbENhc2gsYW1vdW50LHRvdGFsSXRlbVB1cmNoYXNlVVNELHRvdGFsUGF5cm9sbFVTRCx0b3RhbEV4cGVuc2VzVVNELHRvdGFsRXhwZW5zZXNGQyx0b3RhbENhc2hVU0QsdG90YWxDYXNoRkMscmV0dXJuQW1vdW50RkMscmV0dXJuQW1vdW50VVNELFJlbWFpbmluZ0Ftb3VudEZDLFJlbWFpbmluZ0Ftb3VudFVTRCxDcmVhdGUsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgcmF0ZVNjaGVtYTogJysraWQsX2lkLHJhdGUnLFxyXG4gICAgcGF5bWVudFJhdGVTY2hlbWE6ICcrK2lkLF9pZCxwYXltZW50UmF0ZScsXHJcbiAgICBkYWlseUV4cGVuc2VzQ2F0ZWdvcnlTY2hlbWE6ICcrK2lkLF9pZCxleHBlbnNlc0NhdGVnb3J5JyxcclxuICAgIGVtcGxveWVlQXR0ZW5kYW5jZVNjaGVtYTogJysraWRJbmZvLF9pZCxpZCx0aW1lSW4sdGltZU91dCxuYW1lLG9ic2VydmF0aW9uLG5vdGUsZGF5c1dOLHN5bmNlZCx1cGRhdGVTJyxcclxuICAgIGl0ZW1QdXJjaGFzZVNjaGVtYTogJysraXRlbVB1cmNoYXNlTnVtYmVyLF9pZCxpdGVtUHVyY2hhc2VEYXRlLG1hbnVmYWN0dXJlcixtYW51ZmFjdHVyZXJOdW1iZXIsZGVzY3JpcHRpb24sbm90ZSxDcmVhdGUsdG90YWwsdG90YWxGQyxpdGVtcyxyZWFzb24scHJvamVjdE5hbWUnLFxyXG4gICAgaXRlbVB1cmNoYXNlVmlld1NjaGVtYTogJysraXRlbVB1cmNoYXNlTnVtYmVyLF9pZCcsXHJcbiAgICBpdGVtUmV0dXJuOiAnKytvdXROdW1iZXIsX2lkLGl0ZW1PdXREYXRlLHJlYXNvbixyZWZlcmVuY2UsaXRlbXNRdHlBcnJheSxkZXNjcmlwdGlvbixDcmVhdGUsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgaXRlbVJldHVyblZpZXc6ICcrK291dE51bWJlcixfaWQnLFxyXG4gICAgaXRlbU91dFNjaGVtYTogJysraWRJbmZvLG91dE51bWJlcixfaWQsaXRlbU91dERhdGUscmVhc29uLHJlZmVyZW5jZSxpdGVtc1F0eUFycmF5LGRlc2NyaXB0aW9uLENyZWF0ZSxzeW5jZWQsdXBkYXRlUycsXHJcbiAgICBpdGVtT3V0Vmlld1NjaGVtYTogJysraWRJbmZvLF9pZCcsXHJcbiAgICBwdXJjaGFzZU9yZGVyOiAnKytvdXROdW1iZXIsX2lkLHRvdGFsVVNELHRvdGFsLHRvdGFsRkMsaXRlbU91dERhdGUscmVhc29uLHJlZmVyZW5jZSxpdGVtc1F0eUFycmF5LG1hbnVmYWN0dXJlcixzdGF0dXMsQ29udmVydGVkLG1hbnVmYWN0dXJlck51bWJlcixkZXNjcmlwdGlvbixJcFJlbGF0ZWQsc3luY2VkLHVwZGF0ZVMnLFxyXG4gICAgcHVyY2hhc2VPcmRlclZpZXc6ICcrK291dE51bWJlcixfaWQnLFxyXG4gICAgcGxhbmluZ1NjaGVtYTogJysraWRJbmZvLHBsYW5pbmdEYXRlLGVtcGxveWVlTmFtZSxlbXBsb3llZUlELHByb2plY3ROYW1lLGRheVBheVVTZCx3b3JrTnVtYmVyLHN0YXR1cyxwbGFuaW5nRGVzY3JpcHRpb24scGxhbmluZ1Rhc2snLFxyXG4gICAgcmF0ZVJldHVyblNjaGVtYTogJysraWQsIF9pZCwgcmF0ZVInLFxyXG5cclxuICAgIC8vIENhY2hlIHRhYmxlcyBmb3IgaHlicmlkIGFyY2hpdGVjdHVyZSAodjIuNC4wKVxyXG4gICAgLy8gVGhlc2Ugc3RvcmUgZnVsbCBkYXRhc2V0cyBsb2NhbGx5IGZvciBpbnN0YW50IHF1ZXJpZXNcclxuICAgIGl0ZW1QdXJjaGFzZUNhY2hlOiAnX2lkLCBpdGVtUHVyY2hhc2VEYXRlLCBpdGVtcywgbWFudWZhY3R1cmVyJyxcclxuICAgIGl0ZW1PdXRDYWNoZTogJ19pZCwgaXRlbU91dERhdGUsIGl0ZW1zUXR5QXJyYXknLFxyXG4gICAgcG9zQ2FjaGU6ICdfaWQsIGludm9pY2VEYXRlLCBpdGVtcywgY3VzdG9tZXJOYW1lJyxcclxuICAgIGl0ZW1SZXR1cm5DYWNoZTogJ19pZCwgaXRlbU91dERhdGUsIGl0ZW1zUXR5QXJyYXknLFxyXG4gICAgaW52b2ljZUNhY2hlOiAnX2lkLCBpbnZvaWNlTnVtYmVyLCBjdXN0b21lck5hbWUsIGludm9pY2VEYXRlLCBpdGVtcycsXHJcbiAgICBlc3RpbWF0ZUNhY2hlOiAnX2lkLCBlc3RpbWF0ZU51bWJlciwgY3VzdG9tZXJOYW1lLCBlc3RpbWF0ZURhdGUsIGl0ZW1zJyxcclxuICAgIGN1c3RvbWVyQ2FjaGU6ICdfaWQsIGN1c3RvbWVyRnVsbE5hbWUsIGNvbXBhbnlOYW1lLCBjdXN0b21lckVtYWlsJyxcclxuICAgIHN1cHBsaWVyQ2FjaGU6ICdfaWQsIHN1cHBsaWVyTmFtZSwgc3RvcmVOYW1lJyxcclxuICAgIHByb2plY3RDYWNoZTogJ19pZCwgcHJvamVjdE51bWJlciwgcHJvamVjdE5hbWUsIGN1c3RvbWVyTmFtZScsXHJcbiAgICBtYWludGVuYW5jZUNhY2hlOiAnX2lkLCBzZXJ2aWNlTnVtYmVyLCBzZXJ2aWNlTmFtZSwgY3VzdG9tZXJOYW1lLCBpdGVtcycsXHJcbiAgICBlbXBsb3llZUNhY2hlOiAnX2lkLCBlbXBsb3llZU5hbWUsIGVtcGxveWVlRW1haWwsIGVtcGxveWVlUm9sZSwgZGVwYXJ0bWVudCcsXHJcbiAgICBwYXlyb2xsQ2FjaGU6ICdfaWQsIHBheU51bWJlciwgcGF5RGF0ZSwgbW9udGgsIGVtcGxveWVlTmFtZScsXHJcbiAgICByYXRlQ2FjaGU6ICdfaWQsIHJhdGUnLFxyXG4gICAgdXNlckNhY2hlOiAnX2lkLCBlbXBsb3llZU5hbWUsIHJvbGUnLFxyXG4gICAgZ3JhbnRBY2Nlc3NDYWNoZTogJ19pZCwgdXNlcklELCBlbXBsb3llZU5hbWUsIG1vZHVsZXMnLFxyXG4gICAgY29tcGFueVByb2ZpbGVDYWNoZTogJ19pZCcsXHJcbiAgICBwdXJjaGFzZU9yZGVyQ2FjaGU6ICdfaWQsIG91dE51bWJlciwgbWFudWZhY3R1cmVyLCBzdGF0dXMnLFxyXG4gICAgcGF5bWVudENhY2hlOiAnX2lkLCBwYXltZW50TnVtYmVyLCBjdXN0b21lck5hbWUsIHBheW1lbnREYXRlJyxcclxuICAgIGNhc2hDYWNoZTogJ19pZCwgY2FzaE51bWJlciwgY2FzaERhdGUsIHN0YXR1cycsXHJcbiAgICBkYWlseUV4cGVuc2VDYWNoZTogJ19pZCwgZXhwZW5zZU51bWJlciwgZXhwZW5zZUNhdGVnb3J5LCBleHBlbnNlRGF0ZScsXHJcbiAgICAvLyBTeW5jIG1ldGFkYXRhXHJcbiAgICBzeW5jTWV0YWRhdGE6ICcrK2lkLCB0YWJsZU5hbWUsIGxhc3RTeW5jLCByZWNvcmRDb3VudCdcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIlZpc2liaWxpdHlJY29uIiwiRWRpdEljb24iLCJEZWxldGVJY29uIiwiTmF2TGluayIsInVzZU5hdmlnYXRlIiwiVGFibGUiLCJNb2RhbCIsIkljb25CdXR0b24iLCJzdHlsZWQiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIkNoZWNrYm94IiwiVGFibGVDb250YWluZXIiLCJQYXBlciIsIlR5cG9ncmFwaHkiLCJCb3giLCJBdXRvY29tcGxldGUiLCJUZXh0RmllbGQiLCJCYWNrZHJvcCIsIkdyaWQiLCJUYWIiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJEaXZpZGVyIiwiaW52YWxpZGF0ZUNhY2hlIiwiQ29udGFpbmVyIiwiTGluayIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkFkZCIsIkNsb3NlIiwiTWFpbE91dGxpbmUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9hZGVyIiwiY2FjaGVkR2V0IiwiQ2hlY2tDaXJjbGVJY29uIiwiTG9nb3V0IiwiZGF5anMiLCJJbWFnZSIsIkRhdGFHcmlkIiwiR3JpZFRvb2xiYXIiLCJNZXNzYWdlQWRtaW5WaWV3IiwiVGFiQ29udGV4dCIsIlRhYkxpc3QiLCJUYWJQYW5lbCIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiZGIiLCJFTkRQT0lOVF9VUkwiLCJEZWxldGVUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJWaWV3VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiRWRpdFRvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjciLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsIndpZHRoIiwiZW50ZXJpbmdTY3JlZW4iLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJEcmF3ZXIiLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIlBheW1lbnRWaWV3IiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsIm5hdmlnYXRvciIsIm9uTGluZSIsInJlcyIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImlkIiwiX2lkIiwiZXJyb3IiLCJjb25zb2xlIiwicmVzTG9jYWxJbmZvIiwiZW1wbG95ZWVVc2VyU2NoZW1hIiwiZ2V0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJncmFudEFjY2VzcyIsInNldEdyYW50QWNjZXNzIiwiZmV0Y2hOdW1iZXIiLCJfcmVmMCIsIl9yZXMkZGF0YSIsImZpbHRlciIsInJvdyIsInVzZXJJRCIsIm1hcCIsIm1vZHVsZXMiLCJvZmZMaW5lQ3VzdG9tZXIxIiwiZ3JhbnRBY2Nlc3NTY2hlbWEiLCJ0b0FycmF5IiwiUGF5bWVudEluZm9DIiwibW9kdWxlTmFtZSIsImFjY2VzcyIsImNyZWF0ZU0iLCJQYXltZW50SW5mb1YiLCJ2aWV3TSIsIlBheW1lbnRJbmZvVSIsImVkaXRNIiwiUGF5bWVudEluZm9EIiwiZGVsZXRlTSIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwidmFsdWUzIiwic2V0VmFsdWUzIiwicmVzdWx0IiwiaGFuZGxlQ2hhbmdlMyIsImV2ZW50IiwibmV3VmFsdWUiLCJjaGFuZ2VWYWx1ZSIsInNldEl0ZW0iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBheW1lbnQiLCJzZXRQYXltZW50IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJjdXN0b21lciIsInNldEN1c3RvbWVyIiwiZmV0Y2hEYXRhIiwiX3JlZjEiLCJmb3JtYXREYXRlIiwiaXRlbSIsIl9pdGVtJHJlZmVyZW5jZU51bWJlciIsImRhdGVGaWVsZCIsInBheW1lbnREYXRlIiwiZm9ybWF0IiwicmVmZXJlbmNlIiwiVG90YWxBbW91bnQiLCJsZW5ndGgiLCJyb3cxIiwicHJlZml4IiwicmVwbGFjZSIsInJlYXNvbiIsIlN0cmluZyIsIlJlZiIsInBhZFN0YXJ0IiwicmVmZXJlbmNlTnVtYmVyIiwicmV2ZXJzZSIsInZhbGlkSXRlbXMiLCJwYXltZW50TnVtYmVyIiwic3luY2VkIiwidXBkYXRlUyIsInBheW1lbnRTY2hlbWEiLCJjbGVhciIsImJ1bGtQdXQiLCJzZXRMb2FkaW5nRGF0YSIsIl9pdGVtJHJlZmVyZW5jZU51bWJlcjIiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuT2ZmbGluZSIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVDcmVhdGVOb3RpZmljYXRpb25PZmZsaW5lIiwiX3JlZjEwIiwiUmVmZXJlbmNlSW5mbyIsIlJlZmVyZW5jZUluZm9OdW1iZXIiLCJSZWZlcmVuY2VJbmZvTmFtZSIsImlkSW5mbyIsInBlcnNvbiIsImRhdGVOb3RpZmljYXRpb24iLCJEYXRlIiwicG9zdCIsImxvZyIsIl94IiwiX3gyIiwiX3gzIiwic3luY09mZiIsIl9yZWYxMSIsInN5bmNlZFBheW1lbnQiLCJwYXltZW50VG9TeW5jZWQiLCJwYXltZW50SW5mbyIsImN1c3RvbWVyTmFtZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImxvYWRpbmdEYXRhIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImludm9pY2UiLCJzZXRJbnZvaWNlIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsImhpZGRlbiIsInNldEhpZGRlbiIsIl9yZWYxMiIsIkN1c3RvbWVySW5mbyIsImNyZWRpdCIsInVuZGVmaW5lZCIsInJlc092ZXJkdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiXyIsInN0b3JlZEN1c3RvbWVyIiwicGFyc2UiLCJBcnJheSIsImlzQXJyYXkiLCJmZXRjaERhdGFIaWRkZW4iLCJfcmVmMTMiLCJoaWRkZW5TY2hlbWEiLCJoaWRkZW5OdW1iZXIiLCJpbnZvaWNlUGF5bWVudFJvdyIsInN0YXR1cyIsImludm9pY2VOdW1iZXIiLCJpbnZvaWNlRGF0ZSIsImR1ZURhdGVGaWVsZCIsImludm9pY2VEdWVEYXRlIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInNlYXJjaEludm9pY2UiLCJzZXRTZWFyY2hJbnZvaWNlIiwic3RvcmVkVmFsdWUiLCJfUmVhY3QkdXNlU3RhdGUzIiwiaXRlbXMiLCJxdWlja0ZpbHRlckV4Y2x1ZGVIaWRkZW5Db2x1bW5zIiwicXVpY2tGaWx0ZXJWYWx1ZXMiLCJfUmVhY3QkdXNlU3RhdGU0IiwiZmlsdGVyTW9kZWwiLCJzZXRGaWx0ZXJNb2RlbCIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJjb2x1bW5WaXNpYmlsaXR5TW9kZWwiLCJzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwiLCJoYW5kZWxIaWRkZW5Db2x1bW4iLCJuZXdIaWRkZW4iLCJoYW5kbGVGaWx0ZXIiLCJuZXdNb2RlbCIsInN0b3JlZFF1aWNrIiwic3RvcmVkQ29sdW1ucyIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJzZWFyY2hQYXltZW50Iiwic2V0UGF5bWVudEluZm8iLCJfUmVhY3QkdXNlU3RhdGU1IiwiX1JlYWN0JHVzZVN0YXRlNiIsImZpbHRlck1vZGVsUGF5bWVudCIsInNldEZpbHRlck1vZGVsUGF5bWVudCIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJjb2x1bW5WaXNpYmlsaXR5TW9kZWxQYXltZW50Iiwic2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsUGF5bWVudCIsImhhbmRlbEhpZGRlbkNvbHVtblBheW1lbnQiLCJoYW5kbGVGaWx0ZXJQYXltZW50IiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsIm9wZW5SZWFzb25EZWxldGUiLCJzZXRPcGVuUmVhc29uRGVsZXRlIiwiaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlUmVhc29uRGVsZXRlIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsInNldE9wZW4iLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwiRGVsZXRlSWQiLCJzZXREZWxldGVJZCIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJyZWxhdGVkSW52b2ljZSIsInNldFJlbGF0ZWRJbnZvaWNlIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsInJlbGF0ZWRDcmVkaXQiLCJzZXRSZWxhdGVkQ3JlZGl0IiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsIm1vZGVzIiwic2V0TW9kZXMiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwiYW1vdW50Iiwic2V0QW1vdW50IiwiX3VzZVN0YXRlMzkiLCJfdXNlU3RhdGU0MCIsInJlbGF0ZWRDdXN0b21lcklEIiwic2V0UmVsYXRlZEN1c3RvbWVySUQiLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwic2V0UmVhc29uIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsInJlbGF0ZWROdW1iZXIiLCJzZXRSZWxhdGVkTnVtYmVyIiwiZmV0Y2hJZCIsIl9yZWYxNCIsIl9yZXMkZGF0YTIiLCJfcmVzJGRhdGEzIiwicmVtYWluaW5nIiwiTnVtYmVyIiwicmVzTG9jYWwiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2IiwiaW52b2ljZUluZm8iLCJzZXRJbnZvaWNlSW5mbyIsImZldGNoSW52b2ljZSIsIl9yZWYxNSIsImdldEludm9pY2UiLCJQcm9taXNlIiwiYWxsIiwiaW52b2ljZVNjaGVtYSIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJvbGRDcmVkaXQiLCJzZXRPbGRDcmVkaXQiLCJmZXRjaEN1c3RvbWVyIiwiX3JlZjE2IiwiY3VzdG9tZXJTY2hlbWEiLCJ0b3RhbFIiLCJwYXJzZUZsb2F0IiwidXBkYXRlSW52b2ljZUFtb3VudCIsInJlbGF0ZWRJIiwiZmluZCIsInJvdzIiLCJyYXdUb3RhbCIsInRvdGFsIiwiTWF0aCIsInJvdW5kIiwiYmFsYW5jZUR1ZVJhdyIsInRvdGFsSW52b2ljZSIsImJhbGFuY2VEdWUiLCJudW1iZXIiLCJoYW5kbGVVcGRhdGVJbnZvaWNlIiwiX3JlZjE3IiwiX2FsbFBheW1lbnRzUmVzJGRhdGEiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwiX3RvQXJyYXkiLCJhbGxQYXltZW50c1JlcyIsImZyZXNoSW52b2ljZVJlc3BvbnNlcyIsIl9hcnJheUxpa2VUb0FycmF5Iiwic2xpY2UiLCJhbGxQYXltZW50cyIsInVwZGF0ZXMiLCJpZHgiLCJfZnJlc2hJbnZvaWNlUmVzcG9uc2UiLCJ0b3RhbFBhaWQiLCJmb3JFYWNoIiwidGEiLCJpbnZvaWNlVG90YWwiLCJCb29sZWFuIiwiX3JlZjE4IiwicHV0IiwiX3JlZjIwIiwiX3JlZjE5IiwidXBkYXRlIiwiX3g0IiwiaGFuZGxlVXBkYXRlQ3JlZGl0IiwiX3JlZjIxIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsIm1vZGFsRGVsZXRlT3BlbkxvYWRpbmciLCJzZXRNb2RhbERlbGV0ZU9wZW5Mb2FkaW5nIiwiaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmciLCJoYW5kbGVEZWxldGVDbG9zZUxvYWRpbmciLCJoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24iLCJfcmVmMjIiLCJoYW5kbGVEZWxldGUiLCJfcmVmMjMiLCJkZWxldGUiLCJfeDUiLCJfUmVhY3QkdXNlU3RhdGU3IiwiX1JlYWN0JHVzZVN0YXRlOCIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiZmlsdGVyZWRSb3dzIiwic29tZSIsImlkUm93IiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsInZhbHVlR2V0dGVyIiwicGFyYW1zIiwidG9VcHBlckNhc2UiLCJyZW5kZXJDZWxsIiwib3ZlcmR1ZSIsImRheXNQYXN0RHVlIiwiX3BhcmFtcyRyb3ckc3ViVG90YWwiLCJzdWJUb3RhbCIsInRvRml4ZWQiLCJfcGFyYW1zJHJvdyR0b3RhbCIsIl9wYXJhbXMkcm93JGJhbGFuY2VEdSIsImNvbHVtbnNQYXltZW50IiwiX3BhcmFtcyRyb3ckYW1vdW50IiwidG9TdHJpbmciLCJ0aXRsZSIsImRpc2FibGVkIiwidG8iLCJvbkNsaWNrIiwiY3Vyc29yIiwiY29sdW1uQ3VzdG9tZXIiLCJDdXN0b21lciIsIl9wYXJhbXMkcm93JGNyZWRpdCIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93IiwibmFtZSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsInZhbHVlIiwib25DaGFuZ2UiLCJsYWJlbCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsIm1hcmdpblRvcCIsImZsb2F0IiwibWFyZ2luIiwicm93cyIsInNsb3RzIiwidG9vbGJhciIsInNsb3RQcm9wcyIsInNob3dRdWlja0ZpbHRlciIsInByaW50T3B0aW9ucyIsImRpc2FibGVUb29sYmFyQnV0dG9uIiwiY2hlY2tib3hTZWxlY3Rpb24iLCJkaXNhYmxlRGVuc2l0eVNlbGVjdG9yIiwib25GaWx0ZXJNb2RlbENoYW5nZSIsIm9uQ29sdW1uVmlzaWJpbGl0eU1vZGVsQ2hhbmdlIiwicGFkZGluZyIsInNyYyIsIm9uQ2xvc2UiLCJjb250YWluZXIiLCJ4cyIsInRleHRBbGlnbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJnYXAiLCJwbGFjZW1lbnQiLCJvblN1Ym1pdCIsInJlcXVpcmVkIiwibXVsdGlsaW5lIiwicGxhY2Vob2xkZXIiLCJ0YXJnZXQiLCJ0eXBlIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJEZXhpZSIsInZlcnNpb24iLCJzdG9yZXMiLCJzdXBwbGllclNjaGVtYSIsIml0ZW1TY2hlbWEiLCJpdGVtU2NoZW1hVmlldyIsImRhaWx5RXhwZW5zZVNjaGVtYSIsImRhaWx5RXhwZW5zZVZpZXdTY2hlbWEiLCJpdGVtQ29kZVNjaGVtYSIsIml0ZW1Vbml0U2NoZW1hIiwiZGVwYXJ0bWVudFNjaGVtYSIsImVzdGltYXRlU2NoZW1hIiwiaW52b2ljZVZpZXdTY2hlbWEiLCJwb3NTY2hlbWEiLCJwcm9qZWN0U2NoZW1hIiwicHVyY2hhc2VTY2hlbWEiLCJwdXJjaGFzZVNjaGVtYVZpZXciLCJtYWludGVuYW5jZVNjaGVtYSIsIm1haW50ZW5hbmNlVmlld1NjaGVtYSIsImVtcGxveWVlU2NoZW1hIiwicGF5Um9sbFNjaGVtYSIsInVzZXJBY2NvdW50IiwiY2FzaFNjaGVtYSIsInJhdGVTY2hlbWEiLCJwYXltZW50UmF0ZVNjaGVtYSIsImRhaWx5RXhwZW5zZXNDYXRlZ29yeVNjaGVtYSIsImVtcGxveWVlQXR0ZW5kYW5jZVNjaGVtYSIsIml0ZW1QdXJjaGFzZVNjaGVtYSIsIml0ZW1QdXJjaGFzZVZpZXdTY2hlbWEiLCJpdGVtUmV0dXJuIiwiaXRlbVJldHVyblZpZXciLCJpdGVtT3V0U2NoZW1hIiwiaXRlbU91dFZpZXdTY2hlbWEiLCJwdXJjaGFzZU9yZGVyIiwicHVyY2hhc2VPcmRlclZpZXciLCJwbGFuaW5nU2NoZW1hIiwicmF0ZVJldHVyblNjaGVtYSIsIml0ZW1QdXJjaGFzZUNhY2hlIiwiaXRlbU91dENhY2hlIiwicG9zQ2FjaGUiLCJpdGVtUmV0dXJuQ2FjaGUiLCJpbnZvaWNlQ2FjaGUiLCJlc3RpbWF0ZUNhY2hlIiwiY3VzdG9tZXJDYWNoZSIsInN1cHBsaWVyQ2FjaGUiLCJwcm9qZWN0Q2FjaGUiLCJtYWludGVuYW5jZUNhY2hlIiwiZW1wbG95ZWVDYWNoZSIsInBheXJvbGxDYWNoZSIsInJhdGVDYWNoZSIsInVzZXJDYWNoZSIsImdyYW50QWNjZXNzQ2FjaGUiLCJjb21wYW55UHJvZmlsZUNhY2hlIiwicHVyY2hhc2VPcmRlckNhY2hlIiwicGF5bWVudENhY2hlIiwiY2FzaENhY2hlIiwiZGFpbHlFeHBlbnNlQ2FjaGUiLCJzeW5jTWV0YWRhdGEiXSwic291cmNlUm9vdCI6IiJ9