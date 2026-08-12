"use strict";
exports.id = "src_js_AdminView1_PageView_ItemView_ItemFormUpdate_js";
exports.ids = ["src_js_AdminView1_PageView_ItemView_ItemFormUpdate_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/ArrowBack.js"
/*!*******************************************************!*\
  !*** ./node_modules/@mui/icons-material/ArrowBack.js ***!
  \*******************************************************/
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
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
}), 'ArrowBack');

/***/ },

/***/ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M7 11v2h10v-2zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}), 'RemoveCircleOutline'));

/***/ },

/***/ "./src/js/AdminView1/PageView/ItemView/ItemFormUpdate.js"
/*!***************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ItemView/ItemFormUpdate.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SideMaintenance2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SideMaintenance2 */ "./src/js/component/SideMaintenance2.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormLabel/FormLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/RadioGroup/RadioGroup.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Radio/Radio.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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

































var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_29__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_32__["default"], {
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
function ItemFormUpdate() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_39__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_39__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__.setUser)({
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    unitInfo = _useState2[0],
    setUnitInfo = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    unit1 = _useState4[0],
    setUnit1 = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    itemUnit = _useState6[0],
    setItemUnit = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    typeItem = _useState8[0],
    setTypeItem = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    itemName = _useState0[0],
    setItemName = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    itemStore = _useState10[0],
    setItemStore = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    unit = _useState12[0],
    setUnit = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    unit2 = _useState14[0],
    setUnit2 = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    itemDimension = _useState16[0],
    setItemDimension = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    itemWeight = _useState18[0],
    setItemWeight = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    itemBox = _useState20[0],
    setItemBox = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    itemCategory = _useState22[0],
    setItemCategory = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    itemCategory1 = _useState24[0],
    setItemCategory1 = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    itemNumber = _useState26[0],
    setItemNumber = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    itemNumber1 = _useState28[0],
    setItemNumber1 = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    itemBrand = _useState30[0],
    setItemBrand = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    itemManufacturer = _useState32[0],
    setItemManufacturer = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    itemCostPrice = _useState34[0],
    setItemCostPrice = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    itemSellingPrice = _useState36[0],
    setItemSellingPrice = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState38 = _slicedToArray(_useState37, 2),
    itemDescription = _useState38[0],
    setItemDescription = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState40 = _slicedToArray(_useState39, 2),
    qtyBuy = _useState40[0],
    setQtyBuy = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState42 = _slicedToArray(_useState41, 2),
    itemQuantity = _useState42[0],
    setItemQuantity = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState44 = _slicedToArray(_useState43, 2),
    stockOnHand = _useState44[0],
    setStockOnHand = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState46 = _slicedToArray(_useState45, 2),
    newCode = _useState46[0],
    setNewCode = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState48 = _slicedToArray(_useState47, 2),
    indexId = _useState48[0],
    setIndexID = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState50 = _slicedToArray(_useState49, 2),
    newCode1 = _useState50[0],
    setNewCode1 = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState52 = _slicedToArray(_useState51, 2),
    reason = _useState52[0],
    setReason = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState54 = _slicedToArray(_useState53, 2),
    itemCode = _useState54[0],
    setItemCode = _useState54[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetchInitialData = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/itemUnit")), axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/itemCode")), axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/get-item/").concat(id))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3),
            resItemUnit = _yield$Promise$all2[0],
            resCode = _yield$Promise$all2[1],
            resSingleItem = _yield$Promise$all2[2];
          setUnitInfo(resItemUnit.data.data || []);
          setItemCode(resCode.data.data || []);
          var itemData = resSingleItem.data.data;
          if (itemData) {
            setTypeItem(itemData.typeItem || "");
            setItemName(itemData.itemName || "");
            setItemStore(itemData.itemStore || "");
            setUnit(itemData.unit || "");
            setUnit2(itemData.unit || "");
            setItemDimension(itemData.itemDimension || "");
            setItemWeight(itemData.itemWeight || "");
            setItemBox(itemData.itemBox || "");
            setItemCategory(itemData.itemCategory || "");
            setItemCategory1(itemData.itemCategory || "");
            if (itemData.itemUpc) {
              setItemNumber(itemData.itemUpc.itemNumber || 0);
              setItemNumber1(itemData.itemUpc.itemNumber || 0);
              setNewCode(itemData.itemUpc.newCode || "");
              setNewCode1(itemData.itemUpc.newCode || "");
            }
            setItemBrand(itemData.itemBrand || "");
            setItemManufacturer(itemData.itemManufacturer || "");
            setItemCostPrice(itemData.itemCostPrice || 0);
            setItemSellingPrice(itemData.itemSellingPrice || 0);
            setItemDescription(itemData.itemDescription || "");
            setItemQuantity(itemData.itemQuantity || 0);
            setStockOnHand(itemData.stockOnHand || 0);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetchInitialData() {
        return _ref8.apply(this, arguments);
      };
    }();
    handleFetchInitialData();
  }, [id]);
  // Merged with initial fetch above.
  var total = Number(itemQuantity) + Number(qtyBuy);
  var total1 = Number(stockOnHand) + Number(qtyBuy);
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState56 = _slicedToArray(_useState55, 2),
    open1 = _useState56[0],
    setOpen1 = _useState56[1];
  var handleOpenUpdate = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
  };
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    openAutocomplete2 = _useState58[0],
    setOpenAutocomplete2 = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState60 = _slicedToArray(_useState59, 2),
    modalOpenLoading = _useState60[0],
    setModalOpenLoading = _useState60[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
    setModalOpenLoading(false);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    itemCode.filter(row => row.itemCategory === itemCategory).map(row => setNewCode(row.itemCode));
  }, [itemCategory]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (newCode !== newCode1) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/get-last-saved-item/").concat(newCode));
            setItemNumber(res.data.itemUpc.itemNumber + 1);
          } catch (error) {
            console.error('Error fetching data:', error);
            setItemNumber(1);
          }
        }
      });
      return function fetchNumber() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [newCode]);
  {/** Loading Start */}
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState64 = _slicedToArray(_useState63, 2),
    loading = _useState64[0],
    setLoading = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    loadingOpenModal = _useState66[0],
    setLoadingOpenModal = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    ErrorOpenModal = _useState68[0],
    setErrorOpenModal = _useState68[1];
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setOpenAutocomplete2(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setOpen1(false);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
    setOpen1(false);
  };
  {/** Loading End */}
  var handleSubmitCategory = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        itemUnit
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/create-itemUnit"), data);
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
      return _ref0.apply(this, arguments);
    };
  }();
  var handleClear = e => {
    e.preventDefault();
    setItemNumber(itemNumber1);
    setNewCode(newCode1);
    setItemCategory(itemCategory1);
  };
  var handleClearUnits = e => {
    e.preventDefault();
    setUnit('');
  };
  var handleGiveUnits = e => {
    e.preventDefault();
    setUnit(unit2);
  };
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState70 = _slicedToArray(_useState69, 2),
    hideBack = _useState70[0],
    setHideBack = _useState70[1];
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState72 = _slicedToArray(_useState71, 2),
    numberInfo = _useState72[0],
    setNumberInfo = _useState72[1];
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (ReferenceInfoCode, ReferenceInfoNumber) {
      var data = {
        idInfo: id,
        person: user.data.userName + ' Modify ' + ReferenceInfoCode + '-' + ReferenceInfoNumber,
        reason,
        dateNotification: new Date()
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/create-notification/"), data);
        if (res) {
          setReason("");
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleCreateComment(_x2, _x3) {
      return _ref1.apply(this, arguments);
    };
  }();
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        typeItem,
        itemName,
        itemStore,
        unit: unit1.itemUnit,
        itemDimension,
        itemWeight,
        itemBox,
        itemManufacturer,
        itemCategory,
        updateS: false,
        itemBrand,
        itemCostPrice,
        itemUpc: {
          itemNumber,
          newCode
        },
        itemQuantity: total,
        itemSellingPrice,
        itemDescription,
        stockOnHand: total1
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/update-item/").concat(id), data);
        if (res) {
          var ReferenceInfoCode = res.data.data.itemUpc.newCode;
          var ReferenceInfoNumber = res.data.data.itemUpc.itemNumber;
          handleCreateComment(ReferenceInfoCode, ReferenceInfoNumber);
          handleOpen();
          // await db.itemSchema.update(indexId, { ...data, updateS: true })
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmitEdit(_x4) {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__.logOut)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_31__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "update Item"), hideBack === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      color: 'white'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_49__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_48__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_44__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_36__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_33__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SideMaintenance2__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_34__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleOpenUpdate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '20px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    row: true,
    name: "typeItem",
    value: typeItem,
    onChange: e => setTypeItem(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: "Goods",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null),
    label: "Goods"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: "Services",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null),
    label: "Services"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, typeItem)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "itemName",
    name: "itemName",
    value: itemName,
    label: "Item Name",
    onChange: e => setItemName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "itemBrand",
    name: "itemBrand",
    value: itemBrand,
    label: "Brand",
    onChange: e => setItemBrand(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, unit !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    label: "Unit",
    value: unit,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Clear",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleClearUnits
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "unit",
    options: unitInfo,
    getOptionLabel: Option => Option.itemUnit.toUpperCase(),
    onChange: (e, newValue) => setUnit1(newValue),
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
      }, "ADD NEW Unit")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, params, {
      label: "Unit",
      required: true
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Clear",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleGiveUnits
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    htmlFor: "itemDimension"
  }, "Dimension"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "itemDimension",
    name: "itemDimension",
    value: itemDimension,
    type: "number",
    label: "Dimension",
    onChange: e => setItemDimension(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      position: "start"
    }, "M")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    htmlFor: "itemWeight"
  }, "Weight"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "itemWeight",
    name: "itemWeight",
    value: itemWeight,
    type: "number",
    label: "Weight",
    onChange: e => setItemWeight(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      position: "start"
    }, "Kg")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "unit"
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    id: "itemCategory",
    value: itemCategory,
    onChange: e => setItemCategory(e.target.value),
    name: "itemCategory",
    label: "Category"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "HA"
  }, "HA (HA)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "ELECTRICITY"
  }, "ELECTRICITY (EL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "SOLAR SYSTEM"
  }, "SOLAR SYSTEM (SS)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "IT"
  }, "IT (IT)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "PLUMBING"
  }, "PLUMBING (PL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "ELECTRONIC"
  }, "ELECTRONIC (ELN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "FENCE ELECTRIC"
  }, "FENCE ELECTRIC (FE)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "ACCESSORY"
  }, "ACCESSORY (ACC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "WELDING"
  }, "WELDING (WLN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "GENERATOR"
  }, "GENERATOR (GA)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "TOOLS"
  }, "TOOLS (TL)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "CONSTRUCTION"
  }, "CONSTRUCTION (CTN)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: "OTHERS"
  }, "OTHERS (OT)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Clear",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleClear
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    htmlFor: "itemNumber"
  }, "Item Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    type: "number",
    id: "itemNumber",
    value: String(itemNumber).padStart(6, '0'),
    onChange: e => setItemNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      position: "start"
    }, newCode + '-'),
    label: "Item Number"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "itemStore",
    name: "itemStore",
    value: itemStore,
    label: "Store Name",
    onChange: e => setItemStore(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "itemManufacturer",
    name: "itemManufacturer",
    value: itemManufacturer,
    label: "Manufacturer",
    onChange: e => setItemManufacturer(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    htmlFor: "itemCostPrice"
  }, "Cost Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "itemCostPrice",
    name: "itemCostPrice",
    type: "number",
    value: itemCostPrice,
    label: "Cost Unit Price",
    onChange: e => setItemCostPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      position: "start"
    }, "$")
  })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    htmlFor: "itemSellingPrice"
  }, "Selling Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "itemSellingPrice",
    name: "itemSellingPrice",
    type: "number",
    value: itemSellingPrice,
    label: "Selling Unit Price",
    onChange: e => setItemSellingPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      position: "start"
    }, "$")
  })) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "itemDescription",
    name: "itemDescription",
    multiline: true,
    value: itemDescription,
    rows: 4,
    label: "Item Description",
    onChange: e => setItemDescription(e.target.value),
    sx: {
      width: '50%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_45__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Do you want to stop updating Item ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop updating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate('/ItemViewAdmin'),
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
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_45__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Reason Of Updating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitEdit
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_22__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_41__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_42__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_22__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_41__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_43__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_45__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Create Unit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "itemUnit",
    name: "itemUnit",
    value: itemUnit,
    label: "Unit",
    onChange: e => setItemUnit(e.target.value),
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
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: modalOpenLoading,
    onClose: handleCloseOpenAutocomplete2,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_22__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_41__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_42__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemFormUpdate);

/***/ },

/***/ "./src/js/component/SideMaintenance2.js"
/*!**********************************************!*\
  !*** ./src/js/component/SideMaintenance2.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_SidebarNew_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/SidebarNew.scss */ "./src/js/css/SidebarNew.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/InventoryOutlined.js");
/* harmony import */ var _mui_icons_material_Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Store */ "./node_modules/@mui/icons-material/Store.js");
/* harmony import */ var _mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ListAlt */ "./node_modules/@mui/icons-material/ListAlt.js");
/* harmony import */ var _mui_icons_material_PostAdd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/PostAdd */ "./node_modules/@mui/icons-material/PostAdd.js");
/* harmony import */ var _mui_icons_material_ContentPasteGo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ContentPasteGo */ "./node_modules/@mui/icons-material/ContentPasteGo.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");














function SideMaintenance2() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Item"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ContentPasteGo__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Item Out"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_PostAdd__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Item Return"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Store__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Item Purchase"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Purchase Order"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideMaintenance2);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfSXRlbVZpZXdfSXRlbUZvcm1VcGRhdGVfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLGdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMseUJBQXlCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMUIsQ0FBa0Q7QUFDaUI7QUFDNUM7QUFDRTtBQUMyQjtBQUNzQjtBQUNSO0FBQ3dNO0FBQ2hQO0FBQ3dCO0FBQ2M7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDUjtBQUNKO0FBQ0M7QUFDK0I7QUFDdkM7QUFDZTtBQUNWO0FBQ0o7QUFDaUI7QUFDdkM7QUFDQTtBQUM0QjtBQUNRO0FBSTlELElBQU04RCxZQUFZLEdBQUc3QywwREFBTSxDQUFDOEMsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2hEbkUsMERBQUEsQ0FBQ2dDLDhEQUFPLEVBQUFxQyxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMs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Q0FBQyxlQUNqQjdiLDBEQUFBLENBQUN3YixxREFBYztJQUFDbEYsRUFBRSxFQUFFO01BQUV6UixLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQzdFLDBEQUFBLENBQUN5YixxREFBWTtJQUFDbkYsRUFBRSxFQUFFO01BQUV6UixLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQzdFLDBEQUFBLENBQUNzYixtRUFBVyxNQUFFLENBQ0YsQ0FBQyxlQUNmdGIsMERBQUEsQ0FBQzBiLHNEQUFZO0lBQUNHLE9BQU8sRUFBQztFQUFhLENBQUUsQ0FDdkIsQ0FBQyxlQUNqQjdiLDBEQUFBLENBQUN3YixxREFBYztJQUFDbEYsRUFBRSxFQUFFO01BQUV6UixLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQzdFLDBEQUFBLENBQUN5YixxREFBWTtJQUFDbkYsRUFBRSxFQUFFO01BQUV6UixLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQzdFLDBEQUFBLENBQUNtYixpRUFBUyxNQUFFLENBQ0EsQ0FBQyxlQUNmbmIsMERBQUEsQ0FBQzBiLHNEQUFZO0lBQUNHLE9BQU8sRUFBQztFQUFlLENBQUUsQ0FDekIsQ0FBQyxlQUNqQjdiLDBEQUFBLENBQUN3YixxREFBYztJQUFDbEYsRUFBRSxFQUFFO01BQUV6UixLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQzdFLDBEQUFBLENBQUN5YixxREFBWTtJQUFDbkYsRUFBRSxFQUFFO01BQUV6UixLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQzdFLDBEQUFBLENBQUM2YSwyREFBaUIsTUFBRSxDQUNSLENBQUMsZUFDZjdhLDBEQUFBLENBQUMwYixzREFBWTtJQUFDRyxPQUFPLEVBQUM7RUFBZ0IsQ0FBRSxDQUMxQixDQUFDLGVBQ2pCN2IsMERBQUEsQ0FBQ3VhLG9EQUFNLE1BQVMsQ0FDaEIsQ0FBQztBQUVQO0FBRUEsaUVBQWVwYSxnQkFBZ0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2suanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9SZW1vdmVDaXJjbGVPdXRsaW5lLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9JdGVtVmlldy9JdGVtRm9ybVVwZGF0ZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9TaWRlTWFpbnRlbmFuY2UyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwelwiXG59KSwgJ0Fycm93QmFjaycpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTcgMTF2MmgxMHYtMnptNS05QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAybTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4XCJcbn0pLCAnUmVtb3ZlQ2lyY2xlT3V0bGluZScpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaWRlTWFpbnRlbmFuY2UyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlTWFpbnRlbmFuY2UyJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcydcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJ1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUsIE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBQYXBlciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBzdHlsZWQsIEZvcm1MYWJlbCwgUmFkaW9Hcm91cCwgRm9ybUNvbnRyb2xMYWJlbCwgUmFkaW8sIElucHV0LCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgTW9kYWwsIEJhY2tkcm9wLCBGYWRlLCBCb3gsIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IHsgQ2xvc2UsIFJlbW92ZUNpcmNsZU91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5mdW5jdGlvbiBJdGVtRm9ybVVwZGF0ZSgpIHtcclxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuICBjb25zdCBbdW5pdEluZm8sIHNldFVuaXRJbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdW5pdDEsIHNldFVuaXQxXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbaXRlbVVuaXQsIHNldEl0ZW1Vbml0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdHlwZUl0ZW0sIHNldFR5cGVJdGVtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtTmFtZSwgc2V0SXRlbU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2l0ZW1TdG9yZSwgc2V0SXRlbVN0b3JlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1bml0LCBzZXRVbml0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1bml0Miwgc2V0VW5pdDJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2l0ZW1EaW1lbnNpb24sIHNldEl0ZW1EaW1lbnNpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2l0ZW1XZWlnaHQsIHNldEl0ZW1XZWlnaHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2l0ZW1Cb3gsIHNldEl0ZW1Cb3hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2l0ZW1DYXRlZ29yeSwgc2V0SXRlbUNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtQ2F0ZWdvcnkxLCBzZXRJdGVtQ2F0ZWdvcnkxXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtTnVtYmVyLCBzZXRJdGVtTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpdGVtTnVtYmVyMSwgc2V0SXRlbU51bWJlcjFdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2l0ZW1CcmFuZCwgc2V0SXRlbUJyYW5kXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtTWFudWZhY3R1cmVyLCBzZXRJdGVtTWFudWZhY3R1cmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtQ29zdFByaWNlLCBzZXRJdGVtQ29zdFByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpdGVtU2VsbGluZ1ByaWNlLCBzZXRJdGVtU2VsbGluZ1ByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpdGVtRGVzY3JpcHRpb24sIHNldEl0ZW1EZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcXR5QnV5LCBzZXRRdHlCdXldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2l0ZW1RdWFudGl0eSwgc2V0SXRlbVF1YW50aXR5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzdG9ja09uSGFuZCwgc2V0U3RvY2tPbkhhbmRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW25ld0NvZGUsIHNldE5ld0NvZGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2luZGV4SWQsIHNldEluZGV4SURdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW25ld0NvZGUxLCBzZXROZXdDb2RlMV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2l0ZW1Db2RlLCBzZXRJdGVtQ29kZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUZldGNoSW5pdGlhbERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW3Jlc0l0ZW1Vbml0LCByZXNDb2RlLCByZXNTaW5nbGVJdGVtXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1Vbml0YCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtQ29kZWApLFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWl0ZW0vJHtpZH1gKVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBzZXRVbml0SW5mbyhyZXNJdGVtVW5pdC5kYXRhLmRhdGEgfHwgW10pO1xyXG4gICAgICAgIHNldEl0ZW1Db2RlKHJlc0NvZGUuZGF0YS5kYXRhIHx8IFtdKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbURhdGEgPSByZXNTaW5nbGVJdGVtLmRhdGEuZGF0YTtcclxuICAgICAgICBpZiAoaXRlbURhdGEpIHtcclxuICAgICAgICAgIHNldFR5cGVJdGVtKGl0ZW1EYXRhLnR5cGVJdGVtIHx8IFwiXCIpO1xyXG4gICAgICAgICAgc2V0SXRlbU5hbWUoaXRlbURhdGEuaXRlbU5hbWUgfHwgXCJcIik7XHJcbiAgICAgICAgICBzZXRJdGVtU3RvcmUoaXRlbURhdGEuaXRlbVN0b3JlIHx8IFwiXCIpO1xyXG4gICAgICAgICAgc2V0VW5pdChpdGVtRGF0YS51bml0IHx8IFwiXCIpO1xyXG4gICAgICAgICAgc2V0VW5pdDIoaXRlbURhdGEudW5pdCB8fCBcIlwiKTtcclxuICAgICAgICAgIHNldEl0ZW1EaW1lbnNpb24oaXRlbURhdGEuaXRlbURpbWVuc2lvbiB8fCBcIlwiKTtcclxuICAgICAgICAgIHNldEl0ZW1XZWlnaHQoaXRlbURhdGEuaXRlbVdlaWdodCB8fCBcIlwiKTtcclxuICAgICAgICAgIHNldEl0ZW1Cb3goaXRlbURhdGEuaXRlbUJveCB8fCBcIlwiKTtcclxuICAgICAgICAgIHNldEl0ZW1DYXRlZ29yeShpdGVtRGF0YS5pdGVtQ2F0ZWdvcnkgfHwgXCJcIik7XHJcbiAgICAgICAgICBzZXRJdGVtQ2F0ZWdvcnkxKGl0ZW1EYXRhLml0ZW1DYXRlZ29yeSB8fCBcIlwiKTtcclxuICAgICAgICAgIGlmIChpdGVtRGF0YS5pdGVtVXBjKSB7XHJcbiAgICAgICAgICAgIHNldEl0ZW1OdW1iZXIoaXRlbURhdGEuaXRlbVVwYy5pdGVtTnVtYmVyIHx8IDApO1xyXG4gICAgICAgICAgICBzZXRJdGVtTnVtYmVyMShpdGVtRGF0YS5pdGVtVXBjLml0ZW1OdW1iZXIgfHwgMCk7XHJcbiAgICAgICAgICAgIHNldE5ld0NvZGUoaXRlbURhdGEuaXRlbVVwYy5uZXdDb2RlIHx8IFwiXCIpO1xyXG4gICAgICAgICAgICBzZXROZXdDb2RlMShpdGVtRGF0YS5pdGVtVXBjLm5ld0NvZGUgfHwgXCJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRJdGVtQnJhbmQoaXRlbURhdGEuaXRlbUJyYW5kIHx8IFwiXCIpO1xyXG4gICAgICAgICAgc2V0SXRlbU1hbnVmYWN0dXJlcihpdGVtRGF0YS5pdGVtTWFudWZhY3R1cmVyIHx8IFwiXCIpO1xyXG4gICAgICAgICAgc2V0SXRlbUNvc3RQcmljZShpdGVtRGF0YS5pdGVtQ29zdFByaWNlIHx8IDApO1xyXG4gICAgICAgICAgc2V0SXRlbVNlbGxpbmdQcmljZShpdGVtRGF0YS5pdGVtU2VsbGluZ1ByaWNlIHx8IDApO1xyXG4gICAgICAgICAgc2V0SXRlbURlc2NyaXB0aW9uKGl0ZW1EYXRhLml0ZW1EZXNjcmlwdGlvbiB8fCBcIlwiKTtcclxuICAgICAgICAgIHNldEl0ZW1RdWFudGl0eShpdGVtRGF0YS5pdGVtUXVhbnRpdHkgfHwgMCk7XHJcbiAgICAgICAgICBzZXRTdG9ja09uSGFuZChpdGVtRGF0YS5zdG9ja09uSGFuZCB8fCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBoYW5kbGVGZXRjaEluaXRpYWxEYXRhKCk7XHJcbiAgfSwgW2lkXSk7XHJcbiAgLy8gTWVyZ2VkIHdpdGggaW5pdGlhbCBmZXRjaCBhYm92ZS5cclxuICBjb25zdCB0b3RhbCA9IE51bWJlcihpdGVtUXVhbnRpdHkpICsgTnVtYmVyKHF0eUJ1eSk7XHJcbiAgY29uc3QgdG90YWwxID0gTnVtYmVyKHN0b2NrT25IYW5kKSArIE51bWJlcihxdHlCdXkpO1xyXG5cclxuICBjb25zdCBbb3BlbjEsIHNldE9wZW4xXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW4xKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTIsIHNldE9wZW5BdXRvY29tcGxldGUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxPcGVuTG9hZGluZywgc2V0TW9kYWxPcGVuTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMiA9ICgpID0+IHtcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKGZhbHNlKTtcclxuICAgIHNldE1vZGFsT3BlbkxvYWRpbmcoZmFsc2UpXHJcbiAgfTtcclxuICBjb25zdCBbb3BlbkJhY2ssIHNldE9wZW5CYWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkJhY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuQmFjayh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQmFjayA9ICgpID0+IHtcclxuICAgIHNldE9wZW5CYWNrKGZhbHNlKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpdGVtQ29kZS5maWx0ZXIoKHJvdykgPT4gcm93Lml0ZW1DYXRlZ29yeSA9PT0gaXRlbUNhdGVnb3J5KVxyXG4gICAgICAubWFwKChyb3cpID0+IHNldE5ld0NvZGUocm93Lml0ZW1Db2RlKSlcclxuICB9LCBbaXRlbUNhdGVnb3J5XSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hOdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChuZXdDb2RlICE9PSBuZXdDb2RlMSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbGFzdC1zYXZlZC1pdGVtLyR7bmV3Q29kZX1gKVxyXG4gICAgICAgICAgc2V0SXRlbU51bWJlcihyZXMuZGF0YS5pdGVtVXBjLml0ZW1OdW1iZXIgKyAxKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgIHNldEl0ZW1OdW1iZXIoMSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoTnVtYmVyKClcclxuICB9LCBbbmV3Q29kZV0pXHJcbiAgey8qKiBMb2FkaW5nIFN0YXJ0ICovIH1cclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbE9wZW5Mb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIoZmFsc2UpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG5cclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDEwMDApXHJcblxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0ZSgtMSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgfVxyXG4gIHsvKiogTG9hZGluZyBFbmQgKi8gfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRDYXRlZ29yeSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpdGVtVW5pdFxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1pdGVtVW5pdGAsIGRhdGEpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlT3Blbk1vZGFsKCk7XHJcbiAgICAgICAgc2V0VW5pdEluZm8oWy4uLnVuaXRJbmZvLCByZXMuZGF0YS5kYXRhXSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoJ0FuIGVycm9yIGFzIE9jY3VyJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0SXRlbU51bWJlcihpdGVtTnVtYmVyMSk7XHJcbiAgICBzZXROZXdDb2RlKG5ld0NvZGUxKTtcclxuICAgIHNldEl0ZW1DYXRlZ29yeShpdGVtQ2F0ZWdvcnkxKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xlYXJVbml0cyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldFVuaXQoJycpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVHaXZlVW5pdHMgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRVbml0KHVuaXQyKTtcclxuICB9XHJcbiAgY29uc3QgW2hpZGVCYWNrLCBzZXRIaWRlQmFja10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW251bWJlckluZm8sIHNldE51bWJlckluZm9dID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUNvbW1lbnQgPSBhc3luYyAoUmVmZXJlbmNlSW5mb0NvZGUsIFJlZmVyZW5jZUluZm9OdW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogaWQsXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBNb2RpZnkgJyArIFJlZmVyZW5jZUluZm9Db2RlICsgJy0nICsgUmVmZXJlbmNlSW5mb051bWJlcixcclxuICAgICAgcmVhc29uLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb24vYCwgZGF0YSlcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHNldFJlYXNvbihcIlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTdWJtaXRFZGl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHR5cGVJdGVtLCBpdGVtTmFtZSwgaXRlbVN0b3JlLCB1bml0OiB1bml0MS5pdGVtVW5pdCwgaXRlbURpbWVuc2lvbixcclxuICAgICAgaXRlbVdlaWdodCwgaXRlbUJveCwgaXRlbU1hbnVmYWN0dXJlciwgaXRlbUNhdGVnb3J5LCB1cGRhdGVTOiBmYWxzZVxyXG4gICAgICAsIGl0ZW1CcmFuZCwgaXRlbUNvc3RQcmljZSwgaXRlbVVwYzoge1xyXG4gICAgICAgIGl0ZW1OdW1iZXIsXHJcbiAgICAgICAgbmV3Q29kZVxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtUXVhbnRpdHk6IHRvdGFsLCBpdGVtU2VsbGluZ1ByaWNlLCBpdGVtRGVzY3JpcHRpb24sIHN0b2NrT25IYW5kOiB0b3RhbDFcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtaXRlbS8ke2lkfWAsIGRhdGEpXHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvQ29kZSA9IHJlcy5kYXRhLmRhdGEuaXRlbVVwYy5uZXdDb2RlXHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mb051bWJlciA9IHJlcy5kYXRhLmRhdGEuaXRlbVVwYy5pdGVtTnVtYmVyXHJcbiAgICAgICAgaGFuZGxlQ3JlYXRlQ29tbWVudChSZWZlcmVuY2VJbmZvQ29kZSwgUmVmZXJlbmNlSW5mb051bWJlcilcclxuICAgICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICAgICAgLy8gYXdhaXQgZGIuaXRlbVNjaGVtYS51cGRhdGUoaW5kZXhJZCwgeyAuLi5kYXRhLCB1cGRhdGVTOiB0cnVlIH0pXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB1cGRhdGUgSXRlbVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBoaWRlQmFjayA9PT0gJ3RydWUnID9cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+IDpcclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5CYWNrfT5cclxuICAgICAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaWRlQmFyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNpZGVCYXIoZmFsc2UpfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZU1haW50ZW5hbmNlMiAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogNCB9fSA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9wZW5VcGRhdGV9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMjBweCcgfX0gc3BhY2luZz17Mn0gY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlR5cGU8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZUl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHlwZUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFR5cGVJdGVtKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPSdHb29kcycgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIkdvb2RzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9J1NlcnZpY2VzJyBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiU2VydmljZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e3R5cGVJdGVtfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2l0ZW1OYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbU5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSXRlbSBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtTmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdpdGVtQnJhbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtQnJhbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbUJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0JyYW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtQnJhbmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB1bml0ICE9PSAnJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdVbml0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dW5pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsZWFyVW5pdHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidW5pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3VuaXRJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KE9wdGlvbikgPT4gT3B0aW9uLml0ZW1Vbml0LnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IHNldFVuaXQxKG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5vdGhlcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBsZWZ0OiAnMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyKGUpfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30gb25Nb3VzZURvd249eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI3JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERCBORVcgVW5pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIlVuaXRcIiByZXF1aXJlZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUdpdmVVbml0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9J2l0ZW1EaW1lbnNpb24nPkRpbWVuc2lvbjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdpdGVtRGltZW5zaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGltZW5zaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbURpbWVuc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGltZW5zaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1EaW1lbnNpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPSdzdGFydCc+TTwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0naXRlbVdlaWdodCc+V2VpZ2h0PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2l0ZW1XZWlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1XZWlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtV2VpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdXZWlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbVdlaWdodChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249J3N0YXJ0Jz5LZzwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInVuaXRcIj5DYXRlZ29yeTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpdGVtQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1DYXRlZ29yeShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpdGVtQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiSEFcIj5IQSAoSEEpPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRUxFQ1RSSUNJVFlcIj5FTEVDVFJJQ0lUWSAoRUwpPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiU09MQVIgU1lTVEVNXCI+U09MQVIgU1lTVEVNIChTUyk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJJVFwiPklUIChJVCk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJQTFVNQklOR1wiPlBMVU1CSU5HIChQTCk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJFTEVDVFJPTklDXCI+RUxFQ1RST05JQyAoRUxOKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkZFTkNFIEVMRUNUUklDXCI+RkVOQ0UgRUxFQ1RSSUMgKEZFKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkFDQ0VTU09SWVwiPkFDQ0VTU09SWSAoQUNDKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIldFTERJTkdcIj5XRUxESU5HIChXTE4pPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiR0VORVJBVE9SXCI+R0VORVJBVE9SIChHQSk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJUT09MU1wiPlRPT0xTIChUTCk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJDT05TVFJVQ1RJT05cIj5DT05TVFJVQ1RJT04gKENUTik8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJPVEhFUlNcIj5PVEhFUlMgKE9UKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0naXRlbU51bWJlcic+SXRlbSBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdpdGVtTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17U3RyaW5nKGl0ZW1OdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbU51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPntuZXdDb2RlICsgJy0nfTwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkl0ZW0gTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0naXRlbVN0b3JlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVN0b3JlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1TdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTdG9yZSBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtU3RvcmUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2l0ZW1NYW51ZmFjdHVyZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtTWFudWZhY3R1cmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1NYW51ZmFjdHVyZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTWFudWZhY3R1cmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtTWFudWZhY3R1cmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0naXRlbUNvc3RQcmljZSc+Q29zdCBVbml0IFByaWNlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0naXRlbUNvc3RQcmljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1Db3N0UHJpY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbUNvc3RQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb3N0IFVuaXQgUHJpY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1Db3N0UHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj0nc3RhcnQnPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9J2l0ZW1TZWxsaW5nUHJpY2UnPlNlbGxpbmcgVW5pdCBQcmljZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2l0ZW1TZWxsaW5nUHJpY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtU2VsbGluZ1ByaWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1TZWxsaW5nUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU2VsbGluZyBVbml0IFByaWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtU2VsbGluZ1ByaWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249J3N0YXJ0Jz4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD4gOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdpdGVtRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0l0ZW0gRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1EZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzUwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQmFja31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUJhY2t9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCB1cGRhdGluZyBJdGVtID8gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZSA6PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+IElmIHlvdSBzdG9wIHVwZGF0aW5nIHdpdGhvdXQgc2F2aW5nLCBhbGwgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL0l0ZW1WaWV3QWRtaW4nKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19Pk5vPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbjF9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VVcGRhdGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVVwZGF0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgUmVhc29uIE9mIFVwZGF0aW5nXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0RWRpdH0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgaWQ9J3JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgbmFtZT0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nQ29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIEZhaWxlZCB0byBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIENyZWF0ZSBVbml0XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0Q2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdpdGVtVW5pdCdcclxuICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVVuaXQnXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtVW5pdH1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J1VuaXQnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbVVuaXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXttb2RhbE9wZW5Mb2FkaW5nfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+IERhdGEgc3VjY2Vzc2Z1bGx5IFNhdmVkPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtRm9ybVVwZGF0ZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi4vY3NzL1NpZGViYXJOZXcuc2NzcydcclxuaW1wb3J0IHsgT3V0bGV0LCBOYXZMaW5rLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgQWNjb3VudEJveCwgQWxsSW5jbHVzaXZlLCBIb21lLCBJbnZlbnRvcnlPdXRsaW5lZCwgU3VwZXJ2aXNlZFVzZXJDaXJjbGUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NldHRpbmdzJztcclxuaW1wb3J0IEVuZ2luZWVyaW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VuZ2luZWVyaW5nJztcclxuaW1wb3J0IFJvb21QcmVmZXJlbmNlc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Sb29tUHJlZmVyZW5jZXMnO1xyXG5pbXBvcnQgQ2F0ZWdvcnlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2F0ZWdvcnknO1xyXG5pbXBvcnQgU3RvcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU3RvcmUnO1xyXG5pbXBvcnQgTGlzdEFsdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9MaXN0QWx0JztcclxuaW1wb3J0IERhc2hib2FyZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgUG9zdEFkZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Qb3N0QWRkJztcclxuaW1wb3J0IENvbnRlbnRQYXN0ZUdvSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NvbnRlbnRQYXN0ZUdvJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1CdXR0b24sIExpc3RJdGVtSWNvbiwgTGlzdEl0ZW1UZXh0LCBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmZ1bmN0aW9uIFNpZGVNYWludGVuYW5jZTIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPExpc3RBbHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSXRlbVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPENvbnRlbnRQYXN0ZUdvSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkl0ZW0gT3V0XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UG9zdEFkZEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJdGVtIFJldHVyblwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFN0b3JlSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkl0ZW0gUHVyY2hhc2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgPEludmVudG9yeU91dGxpbmVkIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHVyY2hhc2UgT3JkZXJcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8T3V0bGV0PjwvT3V0bGV0PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlTWFpbnRlbmFuY2UyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlTWFpbnRlbmFuY2UyIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiQXV0b2NvbXBsZXRlIiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlBhcGVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkZvcm1MYWJlbCIsIlJhZGlvR3JvdXAiLCJGb3JtQ29udHJvbExhYmVsIiwiUmFkaW8iLCJJbnB1dCIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJGYWRlIiwiQm94IiwiRGl2aWRlciIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwiQXJyb3dCYWNrIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvYWRlciIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2dvdXQiLCJDbG9zZSIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJ2NCIsImRheWpzIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiQmxhY2tUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJWaWV3VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY1Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWY2Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiSXRlbUZvcm1VcGRhdGUiLCJfdXNlUGFyYW1zIiwiaWQiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmNyIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1bml0SW5mbyIsInNldFVuaXRJbmZvIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJ1bml0MSIsInNldFVuaXQxIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJpdGVtVW5pdCIsInNldEl0ZW1Vbml0IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJ0eXBlSXRlbSIsInNldFR5cGVJdGVtIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJpdGVtTmFtZSIsInNldEl0ZW1OYW1lIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwiaXRlbVN0b3JlIiwic2V0SXRlbVN0b3JlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInVuaXQiLCJzZXRVbml0IiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInVuaXQyIiwic2V0VW5pdDIiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiaXRlbURpbWVuc2lvbiIsInNldEl0ZW1EaW1lbnNpb24iLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwiaXRlbVdlaWdodCIsInNldEl0ZW1XZWlnaHQiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiaXRlbUJveCIsInNldEl0ZW1Cb3giLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwiaXRlbUNhdGVnb3J5Iiwic2V0SXRlbUNhdGVnb3J5IiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsIml0ZW1DYXRlZ29yeTEiLCJzZXRJdGVtQ2F0ZWdvcnkxIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsIml0ZW1OdW1iZXIiLCJzZXRJdGVtTnVtYmVyIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsIml0ZW1OdW1iZXIxIiwic2V0SXRlbU51bWJlcjEiLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwiaXRlbUJyYW5kIiwic2V0SXRlbUJyYW5kIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsIml0ZW1NYW51ZmFjdHVyZXIiLCJzZXRJdGVtTWFudWZhY3R1cmVyIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsIml0ZW1Db3N0UHJpY2UiLCJzZXRJdGVtQ29zdFByaWNlIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsIml0ZW1TZWxsaW5nUHJpY2UiLCJzZXRJdGVtU2VsbGluZ1ByaWNlIiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsIml0ZW1EZXNjcmlwdGlvbiIsInNldEl0ZW1EZXNjcmlwdGlvbiIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJxdHlCdXkiLCJzZXRRdHlCdXkiLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwiaXRlbVF1YW50aXR5Iiwic2V0SXRlbVF1YW50aXR5IiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsInN0b2NrT25IYW5kIiwic2V0U3RvY2tPbkhhbmQiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2IiwibmV3Q29kZSIsInNldE5ld0NvZGUiLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4IiwiaW5kZXhJZCIsInNldEluZGV4SUQiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwibmV3Q29kZTEiLCJzZXROZXdDb2RlMSIsIl91c2VTdGF0ZTUxIiwiX3VzZVN0YXRlNTIiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0IiwiaXRlbUNvZGUiLCJzZXRJdGVtQ29kZSIsImhhbmRsZUZldGNoSW5pdGlhbERhdGEiLCJfcmVmOCIsIl95aWVsZCRQcm9taXNlJGFsbCIsIlByb21pc2UiLCJhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwicmVzSXRlbVVuaXQiLCJyZXNDb2RlIiwicmVzU2luZ2xlSXRlbSIsIml0ZW1EYXRhIiwiaXRlbVVwYyIsInRvdGFsIiwiTnVtYmVyIiwidG90YWwxIiwiX3VzZVN0YXRlNTUiLCJfdXNlU3RhdGU1NiIsIm9wZW4xIiwic2V0T3BlbjEiLCJoYW5kbGVPcGVuVXBkYXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VVcGRhdGUiLCJfdXNlU3RhdGU1NyIsIl91c2VTdGF0ZTU4Iiwib3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMiIsIl91c2VTdGF0ZTU5IiwiX3VzZVN0YXRlNjAiLCJtb2RhbE9wZW5Mb2FkaW5nIiwic2V0TW9kYWxPcGVuTG9hZGluZyIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIiLCJfdXNlU3RhdGU2MSIsIl91c2VTdGF0ZTYyIiwib3BlbkJhY2siLCJzZXRPcGVuQmFjayIsImhhbmRsZU9wZW5CYWNrIiwiaGFuZGxlQ2xvc2VCYWNrIiwiZmlsdGVyIiwicm93IiwibWFwIiwiZmV0Y2hOdW1iZXIiLCJfcmVmOSIsIl91c2VTdGF0ZTYzIiwiX3VzZVN0YXRlNjQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTY1IiwiX3VzZVN0YXRlNjYiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTY3IiwiX3VzZVN0YXRlNjgiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3Blbk1vZGFsIiwic2V0VGltZW91dCIsImhhbmRsZU9wZW4iLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xvc2VFcnJvciIsImhhbmRsZVN1Ym1pdENhdGVnb3J5IiwiX3JlZjAiLCJwb3N0IiwiYWxlcnQiLCJfeCIsImhhbmRsZUNsZWFyIiwiaGFuZGxlQ2xlYXJVbml0cyIsImhhbmRsZUdpdmVVbml0cyIsIl91c2VTdGF0ZTY5IiwiX3VzZVN0YXRlNzAiLCJoaWRlQmFjayIsInNldEhpZGVCYWNrIiwiX3VzZVN0YXRlNzEiLCJfdXNlU3RhdGU3MiIsIm51bWJlckluZm8iLCJzZXROdW1iZXJJbmZvIiwiaGFuZGxlQ3JlYXRlQ29tbWVudCIsIl9yZWYxIiwiUmVmZXJlbmNlSW5mb0NvZGUiLCJSZWZlcmVuY2VJbmZvTnVtYmVyIiwiaWRJbmZvIiwicGVyc29uIiwiZGF0ZU5vdGlmaWNhdGlvbiIsIkRhdGUiLCJfeDIiLCJfeDMiLCJoYW5kbGVTdWJtaXRFZGl0IiwiX3JlZjEwIiwidXBkYXRlUyIsInB1dCIsIl94NCIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJuYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJwYWRkaW5nIiwiaXRlbSIsInhzIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImNvbnRyb2wiLCJsYWJlbCIsImdhcCIsInRpdGxlIiwicGxhY2VtZW50Iiwib3B0aW9ucyIsImdldE9wdGlvbkxhYmVsIiwiT3B0aW9uIiwidG9VcHBlckNhc2UiLCJuZXdWYWx1ZSIsIlBhcGVyQ29tcG9uZW50IiwiX3JlZjExIiwiY2hpbGRyZW4iLCJvdGhlciIsIl9leGNsdWRlZDMiLCJtYXJnaW5Ub3AiLCJkaXNhYmxlZCIsIm9uTW91c2VEb3duIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJyZXF1aXJlZCIsImh0bWxGb3IiLCJ0eXBlIiwic3RhcnRBZG9ybm1lbnQiLCJTdHJpbmciLCJwYWRTdGFydCIsIm11bHRpbGluZSIsInJvd3MiLCJvbkNsb3NlIiwiZmxvYXQiLCJ0ZXh0QWxpZ24iLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJPdXRsZXQiLCJOYXZMaW5rIiwiTGluayIsIkFjY291bnRCb3giLCJBbGxJbmNsdXNpdmUiLCJIb21lIiwiSW52ZW50b3J5T3V0bGluZWQiLCJTdXBlcnZpc2VkVXNlckNpcmNsZSIsIlNldHRpbmdzSWNvbiIsIkVuZ2luZWVyaW5nSWNvbiIsIlJvb21QcmVmZXJlbmNlc0ljb24iLCJDYXRlZ29yeUljb24iLCJTdG9yZUljb24iLCJMaXN0QWx0SWNvbiIsIkRhc2hib2FyZEljb24iLCJQb3N0QWRkSWNvbiIsIkNvbnRlbnRQYXN0ZUdvSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsIkZyYWdtZW50IiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=