"use strict";
exports.id = "src_js_AdminView1_PageView_ItemView_ItemFormClone_js";
exports.ids = ["src_js_AdminView1_PageView_ItemView_ItemFormClone_js"];
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

/***/ "./src/js/AdminView1/PageView/ItemView/ItemFormClone.js"
/*!**************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ItemView/ItemFormClone.js ***!
  \**************************************************************/
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
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"].tooltip)]: {
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
function ItemFormClone() {
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
            var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    typeItem = _useState4[0],
    setTypeItem = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    itemName = _useState6[0],
    setItemName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    itemStore = _useState8[0],
    setItemStore = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    unit = _useState0[0],
    setUnit = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    itemUnit = _useState10[0],
    setItemUnit = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    itemDimension = _useState12[0],
    setItemDimension = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    itemWeight = _useState14[0],
    setItemWeight = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    itemCategory = _useState16[0],
    setItemCategory = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    itemNumber = _useState18[0],
    setItemNumber = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    itemBrand = _useState20[0],
    setItemBrand = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    itemManufacturer = _useState22[0],
    setItemManufacturer = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    itemCostPrice = _useState24[0],
    setItemCostPrice = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    itemSellingPrice = _useState26[0],
    setItemSellingPrice = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    itemDescription = _useState28[0],
    setItemDescription = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    itemQuantity = _useState30[0],
    setItemQuantity = _useState30[1];
  var stockOnHand = itemQuantity;
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    loading = _useState32[0],
    setLoading = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    loadingOpenModal = _useState34[0],
    setLoadingOpenModal = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    ErrorOpenModal = _useState36[0],
    setErrorOpenModal = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    itemCode = _useState38[0],
    setItemCode = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState40 = _slicedToArray(_useState39, 2),
    message = _useState40[0],
    setMessage = _useState40[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchAll = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-item/").concat(id));
          setTypeItem(res.data.data.typeItem);
          setItemName(res.data.data.itemName);
          setItemStore(res.data.data.itemStore);
          setUnit(res.data.data.unit);
          setItemDimension(res.data.data.itemDimension);
          setItemWeight(res.data.data.itemWeight);
          setItemCategory(res.data.data.itemCategory);
          setItemBrand(res.data.data.itemBrand);
          setItemManufacturer(res.data.data.itemManufacturer);
          setItemCostPrice(res.data.data.itemCostPrice);
          setItemSellingPrice(res.data.data.itemSellingPrice);
          setItemDescription(res.data.data.itemDescription);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchAll() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchAll();
  }, [id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var resItemUnit = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/itemUnit"));
          setUnitInfo(resItemUnit.data.data);
          var resCode = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/itemCode"));
          setItemCode(resCode.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetch() {
        return _ref9.apply(this, arguments);
      };
    }();
    handleFetch();
  }, []);
  var newCode = '';
  itemCode.filter(row => row.itemCategory === itemCategory).map(row => {
    newCode = row.itemCode;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        if (newCode) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-last-saved-item/").concat(newCode));
            setItemNumber(res.data.itemUpc.itemNumber + 1);
          } catch (error) {
            console.error('Error fetching data:', error);
            setItemNumber(1);
          }
        }
      });
      return function fetchNumber() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [newCode]);
  var handleChangeUnits = newValue => {
    setUnit(newValue.itemUnit);
  };
  var handleClearUnits = e => {
    e.preventDefault();
    setUnit('');
  };
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    openAutocomplete2 = _useState42[0],
    setOpenAutocomplete2 = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    modalOpenLoading = _useState44[0],
    setModalOpenLoading = _useState44[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
    setModalOpenLoading(false);
  };
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    openBack = _useState46[0],
    setOpenBack = _useState46[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  //open loading modal when submit is true
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  //open loading modal when error
  var handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  //close loading modal
  var handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
  };
  var handleCloseAdd = () => {
    setLoadingOpenModal(false);
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  //Decision When loading finish
  var handleDecision = navigate => {
    //Navigate Based on th Decision
    if (navigate === 'previous') {
      window.history.back();
    } else if (navigate === 'stay') {
      handleClose();
    }
  };
  var handleSubmitCategory = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        itemUnit
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/create-itemUnit"), data);
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
      return _ref1.apply(this, arguments);
    };
  }();
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoCode, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: ReferenceInfoCode + '-' + ReferenceInfoNumber + ' / ' + itemName,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2, _x3, _x4) {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_45__["default"])(),
        typeItem,
        itemName,
        itemStore,
        unit: unit,
        itemDimension,
        itemWeight,
        itemCategory,
        itemUpc: {
          itemNumber,
          newCode
        },
        itemManufacturer,
        itemBrand,
        itemCostPrice,
        itemQuantity,
        itemSellingPrice,
        itemDescription,
        stockOnHand,
        synced: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_35__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/create-item"), data);
        if (res) {
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoCode = res.data.data.itemUpc.newCode;
          var ReferenceInfoNumber = res.data.data.itemUpc.itemNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoCode, ReferenceInfoNumber);
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmit(_x5) {
      return _ref11.apply(this, arguments);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_33__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Add new Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_49__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_50__["default"], {
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
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_34__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_31__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_28__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_32__["default"], {
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
      padding: '20px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    required: true,
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, typeItem))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    required: true,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_48__["default"], {
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
    onChange: (e, newValue) => handleChangeUnits(newValue),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    PaperComponent: _ref12 => {
      var children = _ref12.children,
        other = _objectWithoutProperties(_ref12, _excluded3);
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "unit"
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    required: true,
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
    value: "OTHERS"
  }, "OTHERS (OT)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    required: true,
    type: "number",
    id: "itemNumber",
    value: itemNumber,
    onChange: e => setItemNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      position: "start"
    }, newCode, " - 00"),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    htmlFor: "itemCostPrice"
  }, "Cost Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "itemCostPrice",
    name: "itemCostPrice",
    label: "Cost Unit Price",
    value: itemCostPrice,
    onChange: e => setItemCostPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    htmlFor: "itemSellingPrice"
  }, "Selling Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "itemSellingPrice",
    name: "itemSellingPrice",
    label: "Selling Unit Price",
    value: itemSellingPrice,
    onChange: e => setItemSellingPrice(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "itemDescription",
    name: "itemDescription",
    multiline: true,
    rows: 4,
    value: itemDescription,
    label: "Item Description",
    onChange: e => setItemDescription(e.target.value),
    sx: {
      width: '50%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "number",
    id: "itemQuantity",
    name: "itemQuantity",
    label: "Quantity",
    disabled: true,
    onChange: e => setItemQuantity(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "stockOnHand",
    name: "stockOnHand",
    value: stockOnHand,
    label: "Stock Hand",
    sx: {
      width: '100%',
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_47__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Do you want to stop creating Item ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_42__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_47__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemFormClone);

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

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/native.js"
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/native.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID: (crypto__WEBPACK_IMPORTED_MODULE_0___default().randomUUID)
});

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/regex.js"
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/regex.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/rng.js"
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/rng.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/stringify.js"
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/stringify.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/v4.js"
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v4.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-node/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/validate.js"
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/validate.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-node/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfSXRlbVZpZXdfSXRlbUZvcm1DbG9uZV9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiOztBQUVBLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUF1QjtBQUMzRSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7QUFDN0MsZUFBZSxrQkFBZTtBQUM5QjtBQUNBLENBQUMsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyx5QkFBeUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMUIsQ0FBbUQ7QUFDZ0I7QUFDM0M7QUFDRTtBQUMwQjtBQUNzQjtBQUNSO0FBQ3dNO0FBQzFNO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNRO0FBQ0E7QUFDYztBQUNJO0FBQ3hDO0FBQ3dCO0FBQ1E7QUFDSjtBQUNDO0FBQytCO0FBQ3hCO0FBQ1Y7QUFDTDtBQUNDO0FBQ3RCO0FBQ0E7QUFDb0I7QUFDWTtBQUNJO0FBQ1I7QUFHdEQsSUFBTThELFlBQVksR0FBRzdDLDBEQUFNLENBQUM4QyxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDaERuRSwwREFBQSxDQUFDOEIsOERBQU8sRUFBQXVDLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQs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WHFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLHdEQUFRO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ1M7QUFDTjtBQUNzQjs7QUFFakQ7QUFDQSxNQUFNLGtEQUFNO0FBQ1osV0FBVyxrREFBTTtBQUNqQjs7QUFFQTtBQUNBLGlEQUFpRCwrQ0FBRyxLQUFLOztBQUV6RDtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUyw4REFBZTtBQUN4Qjs7QUFFQSxpRUFBZSxFQUFFLEU7Ozs7Ozs7Ozs7Ozs7OztBQzVCYzs7QUFFL0I7QUFDQSxxQ0FBcUMsaURBQUs7QUFDMUM7O0FBRUEsaUVBQWUsUUFBUSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjay5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1JlbW92ZUNpcmNsZU91dGxpbmUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0l0ZW1WaWV3L0l0ZW1Gb3JtQ2xvbmUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvU2lkZU1haW50ZW5hbmNlMi5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLW5vZGUvcmVnZXguanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLW5vZGUvcm5nLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS92NC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS92YWxpZGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHpcIlxufSksICdBcnJvd0JhY2snKTsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk03IDExdjJoMTB2LTJ6bTUtOUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOFwiXG59KSwgJ1JlbW92ZUNpcmNsZU91dGxpbmUnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGVNYWludGVuYW5jZTIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGVNYWludGVuYW5jZTInO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlLCBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgUGFwZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgc3R5bGVkLCBGb3JtTGFiZWwsIFJhZGlvR3JvdXAsIEZvcm1Db250cm9sTGFiZWwsIFJhZGlvLCBJbnB1dCwgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIE1vZGFsLCBCYWNrZHJvcCwgRmFkZSwgQm94LCBEaXZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IHsgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuXHJcblxyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuXHJcbmZ1bmN0aW9uIEl0ZW1Gb3JtQ2xvbmUoKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKClcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuICBjb25zdCBbdW5pdEluZm8sIHNldFVuaXRJbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdHlwZUl0ZW0sIHNldFR5cGVJdGVtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtTmFtZSwgc2V0SXRlbU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2l0ZW1TdG9yZSwgc2V0SXRlbVN0b3JlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1bml0LCBzZXRVbml0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtVW5pdCwgc2V0SXRlbVVuaXRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpdGVtRGltZW5zaW9uLCBzZXRJdGVtRGltZW5zaW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtV2VpZ2h0LCBzZXRJdGVtV2VpZ2h0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtQ2F0ZWdvcnksIHNldEl0ZW1DYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXRlbU51bWJlciwgc2V0SXRlbU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXRlbUJyYW5kLCBzZXRJdGVtQnJhbmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2l0ZW1NYW51ZmFjdHVyZXIsIHNldEl0ZW1NYW51ZmFjdHVyZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2l0ZW1Db3N0UHJpY2UsIHNldEl0ZW1Db3N0UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2l0ZW1TZWxsaW5nUHJpY2UsIHNldEl0ZW1TZWxsaW5nUHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2l0ZW1EZXNjcmlwdGlvbiwgc2V0SXRlbURlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtUXVhbnRpdHksIHNldEl0ZW1RdWFudGl0eV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBzdG9ja09uSGFuZCA9IGl0ZW1RdWFudGl0eTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpdGVtQ29kZSwgc2V0SXRlbUNvZGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEFsbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2lkfWApXHJcbiAgICAgICAgc2V0VHlwZUl0ZW0ocmVzLmRhdGEuZGF0YS50eXBlSXRlbSk7XHJcbiAgICAgICAgc2V0SXRlbU5hbWUocmVzLmRhdGEuZGF0YS5pdGVtTmFtZSk7XHJcbiAgICAgICAgc2V0SXRlbVN0b3JlKHJlcy5kYXRhLmRhdGEuaXRlbVN0b3JlKTtcclxuICAgICAgICBzZXRVbml0KHJlcy5kYXRhLmRhdGEudW5pdCk7XHJcbiAgICAgICAgc2V0SXRlbURpbWVuc2lvbihyZXMuZGF0YS5kYXRhLml0ZW1EaW1lbnNpb24pO1xyXG4gICAgICAgIHNldEl0ZW1XZWlnaHQocmVzLmRhdGEuZGF0YS5pdGVtV2VpZ2h0KTtcclxuICAgICAgICBzZXRJdGVtQ2F0ZWdvcnkocmVzLmRhdGEuZGF0YS5pdGVtQ2F0ZWdvcnkpO1xyXG4gICAgICAgIHNldEl0ZW1CcmFuZChyZXMuZGF0YS5kYXRhLml0ZW1CcmFuZCk7XHJcbiAgICAgICAgc2V0SXRlbU1hbnVmYWN0dXJlcihyZXMuZGF0YS5kYXRhLml0ZW1NYW51ZmFjdHVyZXIpO1xyXG4gICAgICAgIHNldEl0ZW1Db3N0UHJpY2UocmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlKTtcclxuICAgICAgICBzZXRJdGVtU2VsbGluZ1ByaWNlKHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSk7XHJcbiAgICAgICAgc2V0SXRlbURlc2NyaXB0aW9uKHJlcy5kYXRhLmRhdGEuaXRlbURlc2NyaXB0aW9uKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hBbGwoKVxyXG4gIH0sIFtpZF0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUZldGNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc0l0ZW1Vbml0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbVVuaXRgKVxyXG4gICAgICAgIHNldFVuaXRJbmZvKHJlc0l0ZW1Vbml0LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzQ29kZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1Db2RlYClcclxuICAgICAgICBzZXRJdGVtQ29kZShyZXNDb2RlLmRhdGEuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUZldGNoKClcclxuICB9LCBbXSlcclxuICBsZXQgbmV3Q29kZSA9ICcnXHJcbiAgaXRlbUNvZGUuZmlsdGVyKChyb3cpID0+IHJvdy5pdGVtQ2F0ZWdvcnkgPT09IGl0ZW1DYXRlZ29yeSlcclxuICAgIC5tYXAoKHJvdykgPT4ge1xyXG4gICAgICBuZXdDb2RlID0gcm93Lml0ZW1Db2RlXHJcbiAgICB9KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hOdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChuZXdDb2RlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1sYXN0LXNhdmVkLWl0ZW0vJHtuZXdDb2RlfWApXHJcbiAgICAgICAgICBzZXRJdGVtTnVtYmVyKHJlcy5kYXRhLml0ZW1VcGMuaXRlbU51bWJlciArIDEpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgc2V0SXRlbU51bWJlcigxKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hOdW1iZXIoKVxyXG4gIH0sIFtuZXdDb2RlXSlcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VVbml0cyA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VW5pdChuZXdWYWx1ZS5pdGVtVW5pdClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xlYXJVbml0cyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldFVuaXQoJycpO1xyXG4gIH1cclxuICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTIsIHNldE9wZW5BdXRvY29tcGxldGUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxPcGVuTG9hZGluZywgc2V0TW9kYWxPcGVuTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMiA9ICgpID0+IHtcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKGZhbHNlKTtcclxuICAgIHNldE1vZGFsT3BlbkxvYWRpbmcoZmFsc2UpXHJcbiAgfTtcclxuICBjb25zdCBbb3BlbkJhY2ssIHNldE9wZW5CYWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkJhY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuQmFjayh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQmFjayA9ICgpID0+IHtcclxuICAgIHNldE9wZW5CYWNrKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbE9wZW5Mb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfTtcclxuICAvL29wZW4gbG9hZGluZyBtb2RhbCB3aGVuIHN1Ym1pdCBpcyB0cnVlXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICAvL29wZW4gbG9hZGluZyBtb2RhbCB3aGVuIGVycm9yXHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIC8vY2xvc2UgbG9hZGluZyBtb2RhbFxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQWRkID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIC8vRGVjaXNpb24gV2hlbiBsb2FkaW5nIGZpbmlzaFxyXG4gIGNvbnN0IGhhbmRsZURlY2lzaW9uID0gKG5hdmlnYXRlKSA9PiB7XHJcbiAgICAvL05hdmlnYXRlIEJhc2VkIG9uIHRoIERlY2lzaW9uXHJcbiAgICBpZiAobmF2aWdhdGUgPT09ICdwcmV2aW91cycpIHtcclxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0ZSA9PT0gJ3N0YXknKSB7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdENhdGVnb3J5ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGl0ZW1Vbml0XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLWl0ZW1Vbml0YCwgZGF0YSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBoYW5kbGVPcGVuTW9kYWwoKTtcclxuICAgICAgICBzZXRVbml0SW5mbyhbLi4udW5pdEluZm8sIHJlcy5kYXRhLmRhdGFdKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydCgnQW4gZXJyb3IgYXMgT2NjdXInKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoUmVmZXJlbmNlSW5mbywgUmVmZXJlbmNlSW5mb0NvZGUsIFJlZmVyZW5jZUluZm9OdW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogUmVmZXJlbmNlSW5mbyxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIENyZWF0ZWQgJyxcclxuICAgICAgcmVhc29uOiBSZWZlcmVuY2VJbmZvQ29kZSArICctJyArIFJlZmVyZW5jZUluZm9OdW1iZXIgKyAnIC8gJyArIGl0ZW1OYW1lLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIF9pZDogdjQoKSxcclxuICAgICAgdHlwZUl0ZW0sIGl0ZW1OYW1lLCBpdGVtU3RvcmUsIHVuaXQ6IHVuaXRcclxuICAgICAgLCBpdGVtRGltZW5zaW9uLFxyXG4gICAgICBpdGVtV2VpZ2h0LCBpdGVtQ2F0ZWdvcnksIGl0ZW1VcGM6IHtcclxuICAgICAgICBpdGVtTnVtYmVyLFxyXG4gICAgICAgIG5ld0NvZGVcclxuICAgICAgfSwgaXRlbU1hbnVmYWN0dXJlcixcclxuICAgICAgaXRlbUJyYW5kLCBpdGVtQ29zdFByaWNlLFxyXG4gICAgICBpdGVtUXVhbnRpdHksIGl0ZW1TZWxsaW5nUHJpY2UsIGl0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgc3RvY2tPbkhhbmQsIHN5bmNlZDogZmFsc2VcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtaXRlbWAsIGRhdGEpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mbyA9IHJlcy5kYXRhLmRhdGEuX2lkXHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mb0NvZGUgPSByZXMuZGF0YS5kYXRhLml0ZW1VcGMubmV3Q29kZVxyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm9OdW1iZXIgPSByZXMuZGF0YS5kYXRhLml0ZW1VcGMuaXRlbU51bWJlclxyXG4gICAgICAgIGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbihSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvQ29kZSwgUmVmZXJlbmNlSW5mb051bWJlcilcclxuICAgICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkIG5ldyBJdGVtXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlTWFpbnRlbmFuY2UyIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiA0IH19ID5cclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcyMHB4JyB9fSBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlR5cGU8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZUl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHlwZUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFR5cGVJdGVtKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPSdHb29kcycgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIkdvb2RzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9J1NlcnZpY2VzJyBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiU2VydmljZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMj57dHlwZUl0ZW19PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2l0ZW1OYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbU5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSXRlbSBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtTmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdpdGVtQnJhbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtQnJhbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbUJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0JyYW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtQnJhbmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB1bml0ICE9PSAnJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdVbml0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dW5pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsZWFyVW5pdHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidW5pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3VuaXRJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KE9wdGlvbikgPT4gT3B0aW9uLml0ZW1Vbml0LnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZVVuaXRzKG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5vdGhlcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBsZWZ0OiAnMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyKGUpfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30gb25Nb3VzZURvd249eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI3JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERCBORVcgVW5pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIlVuaXRcIiByZXF1aXJlZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0naXRlbURpbWVuc2lvbic+RGltZW5zaW9uPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2l0ZW1EaW1lbnNpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EaW1lbnNpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtRGltZW5zaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEaW1lbnNpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbURpbWVuc2lvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249J3N0YXJ0Jz5NPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdpdGVtV2VpZ2h0Jz5XZWlnaHQ8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0naXRlbVdlaWdodCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVdlaWdodCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1XZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1dlaWdodCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtV2VpZ2h0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj0nc3RhcnQnPktnPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInVuaXRcIj5DYXRlZ29yeTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpdGVtQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1DYXRlZ29yeShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpdGVtQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiSEFcIj5IQSAoSEEpPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRUxFQ1RSSUNJVFlcIj5FTEVDVFJJQ0lUWSAoRUwpPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiU09MQVIgU1lTVEVNXCI+U09MQVIgU1lTVEVNIChTUyk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJJVFwiPklUIChJVCk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJQTFVNQklOR1wiPlBMVU1CSU5HIChQTCk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJFTEVDVFJPTklDXCI+RUxFQ1RST05JQyAoRUxOKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkZFTkNFIEVMRUNUUklDXCI+RkVOQ0UgRUxFQ1RSSUMgKEZFKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkFDQ0VTU09SWVwiPkFDQ0VTU09SWSAoQUNDKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIldFTERJTkdcIj5XRUxESU5HIChXTE4pPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiR0VORVJBVE9SXCI+R0VORVJBVE9SIChHQSk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJUT09MU1wiPlRPT0xTIChUTCk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJPVEhFUlNcIj5PVEhFUlMgKE9UKTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdpdGVtTnVtYmVyJz5JdGVtIE51bWJlcjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2l0ZW1OdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1OdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj57bmV3Q29kZX0gLSAwMDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkl0ZW0gTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0naXRlbVN0b3JlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVN0b3JlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1TdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTdG9yZSBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtU3RvcmUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2l0ZW1NYW51ZmFjdHVyZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtTWFudWZhY3R1cmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1NYW51ZmFjdHVyZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTWFudWZhY3R1cmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJdGVtTWFudWZhY3R1cmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdpdGVtQ29zdFByaWNlJz5Db3N0IFVuaXQgUHJpY2U8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0naXRlbUNvc3RQcmljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbUNvc3RQcmljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Nvc3QgVW5pdCBQcmljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1Db3N0UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbUNvc3RQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249J3N0YXJ0Jz4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdpdGVtU2VsbGluZ1ByaWNlJz5TZWxsaW5nIFVuaXQgUHJpY2U8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0naXRlbVNlbGxpbmdQcmljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVNlbGxpbmdQcmljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NlbGxpbmcgVW5pdCBQcmljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW1TZWxsaW5nUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbVNlbGxpbmdQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249J3N0YXJ0Jz4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdpdGVtRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0l0ZW0gRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1EZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzUwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2l0ZW1RdWFudGl0eSdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1RdWFudGl0eSdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdRdWFudGl0eSdcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1RdWFudGl0eShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdzdG9ja09uSGFuZCdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0b2NrT25IYW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0b2NrT25IYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1N0b2NrIEhhbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkJhY2t9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VCYWNrfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkRvIHlvdSB3YW50IHRvIHN0b3AgY3JlYXRpbmcgSXRlbSA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGUgOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiPiBJZiB5b3Ugc3RvcCBjcmVhdGluZyB3aXRob3V0IHNhdmluZywgYWxsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3Q8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9JdGVtVmlld0FkbWluJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+WWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ObzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdzdGF5Jyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBBZGQgTmV3XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3ByZXZpb3VzJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIEZhaWxlZCB0byBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIENyZWF0ZSBVbml0XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0Q2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdpdGVtVW5pdCdcclxuICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVVuaXQnXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtVW5pdH1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J1VuaXQnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbVVuaXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXttb2RhbE9wZW5Mb2FkaW5nfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+IERhdGEgc3VjY2Vzc2Z1bGx5IFNhdmVkPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtRm9ybUNsb25lXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3MvU2lkZWJhck5ldy5zY3NzJ1xyXG5pbXBvcnQgeyBPdXRsZXQsIE5hdkxpbmssIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyBBY2NvdW50Qm94LCBBbGxJbmNsdXNpdmUsIEhvbWUsIEludmVudG9yeU91dGxpbmVkLCBTdXBlcnZpc2VkVXNlckNpcmNsZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3MnO1xyXG5pbXBvcnQgRW5naW5lZXJpbmdJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW5naW5lZXJpbmcnO1xyXG5pbXBvcnQgUm9vbVByZWZlcmVuY2VzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jvb21QcmVmZXJlbmNlcyc7XHJcbmltcG9ydCBDYXRlZ29yeUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYXRlZ29yeSc7XHJcbmltcG9ydCBTdG9yZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TdG9yZSc7XHJcbmltcG9ydCBMaXN0QWx0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xpc3RBbHQnO1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBQb3N0QWRkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Bvc3RBZGQnO1xyXG5pbXBvcnQgQ29udGVudFBhc3RlR29JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ29udGVudFBhc3RlR28nO1xyXG5pbXBvcnQgeyBMaXN0SXRlbUJ1dHRvbiwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQsIG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuZnVuY3Rpb24gU2lkZU1haW50ZW5hbmNlMigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TGlzdEFsdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJdGVtXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8Q29udGVudFBhc3RlR29JY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSXRlbSBPdXRcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxQb3N0QWRkSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkl0ZW0gUmV0dXJuXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8U3RvcmVJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSXRlbSBQdXJjaGFzZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8SW52ZW50b3J5T3V0bGluZWQgLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQdXJjaGFzZSBPcmRlclwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxPdXRsZXQ+PC9PdXRsZXQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVNYWludGVuYW5jZTIiLCJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSUQ6IGNyeXB0by5yYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5jb25zdCBybmRzOFBvb2wgPSBuZXcgVWludDhBcnJheSgyNTYpOyAvLyAjIG9mIHJhbmRvbSB2YWx1ZXMgdG8gcHJlLWFsbG9jYXRlXG5cbmxldCBwb29sUHRyID0gcm5kczhQb29sLmxlbmd0aDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgaWYgKHBvb2xQdHIgPiBybmRzOFBvb2wubGVuZ3RoIC0gMTYpIHtcbiAgICBjcnlwdG8ucmFuZG9tRmlsbFN5bmMocm5kczhQb29sKTtcbiAgICBwb29sUHRyID0gMDtcbiAgfVxuXG4gIHJldHVybiBybmRzOFBvb2wuc2xpY2UocG9vbFB0ciwgcG9vbFB0ciArPSAxNik7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV07XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTaWRlTWFpbnRlbmFuY2UyIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiQXV0b2NvbXBsZXRlIiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlBhcGVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkZvcm1MYWJlbCIsIlJhZGlvR3JvdXAiLCJGb3JtQ29udHJvbExhYmVsIiwiUmFkaW8iLCJJbnB1dCIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJGYWRlIiwiQm94IiwiRGl2aWRlciIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwiQXJyb3dCYWNrIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2FkZXIiLCJMb2dvdXQiLCJ2NCIsImRheWpzIiwiQ2xvc2UiLCJSZW1vdmVDaXJjbGVPdXRsaW5lIiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJNZXNzYWdlQWRtaW5WaWV3IiwiQmxhY2tUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJWaWV3VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY1Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWY2Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiSXRlbUZvcm1DbG9uZSIsIl91c2VQYXJhbXMiLCJpZCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY3IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInVuaXRJbmZvIiwic2V0VW5pdEluZm8iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInR5cGVJdGVtIiwic2V0VHlwZUl0ZW0iLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIml0ZW1OYW1lIiwic2V0SXRlbU5hbWUiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIml0ZW1TdG9yZSIsInNldEl0ZW1TdG9yZSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwidW5pdCIsInNldFVuaXQiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJpdGVtVW5pdCIsInNldEl0ZW1Vbml0IiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsIml0ZW1EaW1lbnNpb24iLCJzZXRJdGVtRGltZW5zaW9uIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsIml0ZW1XZWlnaHQiLCJzZXRJdGVtV2VpZ2h0IiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsIml0ZW1DYXRlZ29yeSIsInNldEl0ZW1DYXRlZ29yeSIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJpdGVtTnVtYmVyIiwic2V0SXRlbU51bWJlciIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJpdGVtQnJhbmQiLCJzZXRJdGVtQnJhbmQiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwiaXRlbU1hbnVmYWN0dXJlciIsInNldEl0ZW1NYW51ZmFjdHVyZXIiLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0IiwiaXRlbUNvc3RQcmljZSIsInNldEl0ZW1Db3N0UHJpY2UiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwiaXRlbVNlbGxpbmdQcmljZSIsInNldEl0ZW1TZWxsaW5nUHJpY2UiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwiaXRlbURlc2NyaXB0aW9uIiwic2V0SXRlbURlc2NyaXB0aW9uIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsIml0ZW1RdWFudGl0eSIsInNldEl0ZW1RdWFudGl0eSIsInN0b2NrT25IYW5kIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwiaXRlbUNvZGUiLCJzZXRJdGVtQ29kZSIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImZldGNoQWxsIiwiX3JlZjgiLCJoYW5kbGVGZXRjaCIsIl9yZWY5IiwicmVzSXRlbVVuaXQiLCJyZXNDb2RlIiwibmV3Q29kZSIsImZpbHRlciIsInJvdyIsIm1hcCIsImZldGNoTnVtYmVyIiwiX3JlZjAiLCJpdGVtVXBjIiwiaGFuZGxlQ2hhbmdlVW5pdHMiLCJuZXdWYWx1ZSIsImhhbmRsZUNsZWFyVW5pdHMiLCJlIiwicHJldmVudERlZmF1bHQiLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwib3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMiIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJtb2RhbE9wZW5Mb2FkaW5nIiwic2V0TW9kYWxPcGVuTG9hZGluZyIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2Iiwib3BlbkJhY2siLCJzZXRPcGVuQmFjayIsImhhbmRsZU9wZW5CYWNrIiwiaGFuZGxlQ2xvc2VCYWNrIiwiaGFuZGxlT3Blbk1vZGFsIiwic2V0VGltZW91dCIsImhhbmRsZU9wZW4iLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVDbG9zZUFkZCIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVEZWNpc2lvbiIsImhpc3RvcnkiLCJiYWNrIiwiaGFuZGxlU3VibWl0Q2F0ZWdvcnkiLCJfcmVmMSIsInBvc3QiLCJhbGVydCIsIl94IiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjEwIiwiUmVmZXJlbmNlSW5mbyIsIlJlZmVyZW5jZUluZm9Db2RlIiwiUmVmZXJlbmNlSW5mb051bWJlciIsImlkSW5mbyIsInBlcnNvbiIsInJlYXNvbiIsImRhdGVOb3RpZmljYXRpb24iLCJEYXRlIiwibG9nIiwiX3gyIiwiX3gzIiwiX3g0IiwiaGFuZGxlU3VibWl0IiwiX3JlZjExIiwiX2lkIiwic3luY2VkIiwiX3g1IiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl9SZWFjdCR1c2VTdGF0ZSIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJzaWRlQmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZURyYXdlciIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm9uQ2xpY2siLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsIm5hbWUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJpdGVtIiwieHMiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJjb250cm9sIiwibGFiZWwiLCJnYXAiLCJ0aXRsZSIsInBsYWNlbWVudCIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIk9wdGlvbiIsInRvVXBwZXJDYXNlIiwiUGFwZXJDb21wb25lbnQiLCJfcmVmMTIiLCJjaGlsZHJlbiIsIm90aGVyIiwiX2V4Y2x1ZGVkMyIsIm1hcmdpblRvcCIsImRpc2FibGVkIiwib25Nb3VzZURvd24iLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsImh0bWxGb3IiLCJ0eXBlIiwic3RhcnRBZG9ybm1lbnQiLCJtdWx0aWxpbmUiLCJyb3dzIiwib25DbG9zZSIsImZsb2F0IiwidGV4dEFsaWduIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwiT3V0bGV0IiwiTmF2TGluayIsIkxpbmsiLCJBY2NvdW50Qm94IiwiQWxsSW5jbHVzaXZlIiwiSG9tZSIsIkludmVudG9yeU91dGxpbmVkIiwiU3VwZXJ2aXNlZFVzZXJDaXJjbGUiLCJTZXR0aW5nc0ljb24iLCJFbmdpbmVlcmluZ0ljb24iLCJSb29tUHJlZmVyZW5jZXNJY29uIiwiQ2F0ZWdvcnlJY29uIiwiU3RvcmVJY29uIiwiTGlzdEFsdEljb24iLCJEYXNoYm9hcmRJY29uIiwiUG9zdEFkZEljb24iLCJDb250ZW50UGFzdGVHb0ljb24iLCJMaXN0SXRlbUJ1dHRvbiIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIm1ha2VTdHlsZXMiLCJGcmFnbWVudCIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9