"use strict";
exports.id = "src_js_AdminView1_PageView_PurchasesView_ConvertToEstimate_js";
exports.ids = ["src_js_AdminView1_PageView_PurchasesView_ConvertToEstimate_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/NotificationsNone.js"
/*!***************************************************************!*\
  !*** ./node_modules/@mui/icons-material/NotificationsNone.js ***!
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
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"
}), 'NotificationsNone');

/***/ },

/***/ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), 'DragIndicatorRounded'));

/***/ },

/***/ "./node_modules/@mui/icons-material/esm/Edit.js"
/*!******************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Edit.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
}), 'Edit'));

/***/ },

/***/ "./src/js/AdminView1/PageView/PurchasesView/ConvertToEstimate.js"
/*!***********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/PurchasesView/ConvertToEstimate.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_NotificationsNone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/NotificationsNone */ "./node_modules/@mui/icons-material/NotificationsNone.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../utils/apiCache */ "./src/js/utils/apiCache.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../component/ItemThumbnail */ "./src/js/component/ItemThumbnail.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["children"];
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;


































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"].tooltip)]: {
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
function ConvertToEstimate() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    if (storesUserId) {
      axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId)).then(res => {
        // Handle the response data here
        var Name = res.data.data.employeeName;
        var Role = res.data.data.role;
        dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__.setUser)({
          userName: Name,
          role: Role
        }));
      }).catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
        dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__.logOut)());
      });
    } else {
      console.log('no id');
      navigate('/');
    }
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__.logOut)());
    navigate('/');
  };
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/create-estimation");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    purchaseName = _useState2[0],
    setPurchaseName = _useState2[1];
  var estimateDate = dayjs__WEBPACK_IMPORTED_MODULE_38___default()(Date.now());
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    estimateSubject = _useState4[0],
    setEstimateSubject = _useState4[1];
  var status = "Draft";
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    customerName1 = _useState6[0],
    setCustomerName1 = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    estimateDefect = _useState8[0],
    setEstimateDefect = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    ItemInformation = _useState0[0],
    setItemInformation = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Thanks For your Business."),
    _useState10 = _slicedToArray(_useState1, 2),
    note = _useState10[0],
    setNote = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("QUOTATIONS ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED PARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL. "),
    _useState12 = _slicedToArray(_useState11, 2),
    terms = _useState12[0],
    setTerms = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    projectName = _useState14[0],
    setProjectName = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    items = _useState16[0],
    SetItems = _useState16[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    subTotal = _useState18[0],
    setSubTotal = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    total = _useState20[0],
    setTotal = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    shipping = _useState22[0],
    setShipping = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Adjustment'),
    _useState24 = _slicedToArray(_useState23, 2),
    adjustment = _useState24[0],
    setAdjustment = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    adjustmentNumber = _useState26[0],
    setAdjustmentNumber = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    totalInvoice = _useState28[0],
    setTotalInvoice = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    balanceDue = _useState30[0],
    setBalanceDue = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    totalW = _useState32[0],
    setTotalW = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    estimateNumber = _useState34[0],
    setEstimateNumber = _useState34[1];
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_38___default()(Date.now()).format('DD/MM/YYYY');
  var Create = {
    person: user.data.userName + ' CREATED ',
    dateComment
  };
  var estimateName = "QUO-" + String(estimateNumber).padStart(6, '0');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var newNumber = 0;
    axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/estimation?summary=true")).then(res => {
      // Handle the response data here
      res.data.data.map(row => {
        newNumber = row.estimateNumber;
      });
      var result = newNumber + 1;
      setEstimateNumber(result);
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/item")).then(res => {
      // Handle the response data here
      setItemInformation(res.data.data.reverse());
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  }, []);
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
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState36 = _slicedToArray(_useState35, 2),
    customerName = _useState36[0],
    setCustomerName = _useState36[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/get-purchase/").concat(id)).then(res => {
      // Handle the response data here
      setCustomerName1(res.data.data.customerName);
      setProjectName(res.data.data.projectName);
      SetItems(res.data.data.items);
      setPurchaseName(res.data.data.purchaseName);
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/customer")).then(res => {
      var _res$data;
      // Handle the response data here
      (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row._id === customerName1._id).map(row => setCustomerName({
        _id: row._id,
        customerName: row.customerFullName || row.companyName,
        billingAddress: row.billingAddress,
        billingCity: row.billingCity
      }));
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  }, [customerName1]);
  //addItem
  var addItem = () => {
    SetItems([...items, {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_31__["default"])(),
      itemName: {},
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemAmount: 0,
      totalAmount: 0,
      discount: 0,
      percentage: 0,
      itemBuy: 0,
      itemWeight: "",
      totalGenerale: 0,
      stock: 0,
      itemOut: 0,
      newItemOut: 0
    }]);
  };
  var addItemWhite = () => {
    SetItems([...items, {
      newDescription: "",
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_31__["default"])(),
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result1 = items.reduce((sum, row) => sum + row.itemAmount, 0);
    setSubTotal(result1.toFixed(2));
    var newTotal = Number(subTotal) + Number(shipping) + Number(adjustmentNumber);
    setTotalInvoice(newTotal);
    var newBalance = totalInvoice - total;
    setBalanceDue(newBalance);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (totalInvoice) {
      var wholePart = Math.floor(totalInvoice);
      var fractionalPart = (totalInvoice % 1).toFixed(2).split('.')[1];
      var wholeWords = number_to_words__WEBPACK_IMPORTED_MODULE_49___default().toWords(wholePart);
      var fractionalWords = number_to_words__WEBPACK_IMPORTED_MODULE_49___default().toWords(fractionalPart);
      console.log(fractionalWords);
      setTotalW("".concat(wholeWords, " and ").concat(fractionalWords, " cents"));
    }
  }, [totalInvoice]);
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    open1 = _useState38[0],
    setOpen1 = _useState38[1];
  var handleOpenUpdate = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
  };
  {/** Modal Item Show */}
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState40 = _slicedToArray(_useState39, 2),
    selectedRowId = _useState40[0],
    setSelectedRowId = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    showModal = _useState42[0],
    setShowModal = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState44 = _slicedToArray(_useState43, 2),
    targetRowId = _useState44[0],
    setTargetRowId = _useState44[1];
  var handleDelete = idRow => {
    setSelectedRowId(idRow);
    setShowModal(true);
  };
  var handleCloseRowId = () => {
    setShowModal(false);
  };
  var deleteItem = () => {
    var newRowId = targetRowId;
    if (newRowId) {
      var selectRow = items.find(item => item.idRow === selectedRowId);
      var targetRow = items.find(item => item.idRow === newRowId);
      if (selectRow && targetRow) {
        var newTotal = targetRow.totalAmount += selectRow.totalAmount;
        var newRate = newTotal / targetRow.itemQty;
        var newTotalAmount = targetRow.itemQty * newRate;
        var discountTarget = targetRow.itemDiscount * newTotalAmount;
        var newPercentage = discountTarget / 100;
        var newTotalG = newTotalAmount - newPercentage;
        //update rate
        var updateRate = items.map(item => {
          if (item.idRow === targetRow.idRow) {
            return _objectSpread(_objectSpread({}, item), {}, {
              itemRate: newRate,
              totalAmount: newTotalAmount,
              discount: discountTarget,
              percentage: newPercentage,
              itemAmount: newTotalG
            });
          }
          return item;
        });
        SetItems(updateRate);
      }
    }
    SetItems(items => items.filter(Item => Item.idRow !== selectedRowId));
    setSelectedRowId('');
    setShowModal(false);
    setTargetRowId('');
  };
  {/** Modal Item Show End */}
  {/** Item InFO */}
  var handleChangeItem = (idRow, newValue) => {
    var selectedOptions = ItemInformation.find(option => option === newValue);
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
        itemName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemName
      },
      itemCost: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemCostPrice,
      itemDescription: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemDescription,
      itemRate: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemSellingPrice,
      stock: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.stockOnHand
    }) : row));
  };
  var handleShowAutocomplete = idRow => {
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: null,
        itemName: null
      }
    }) : row));
  };
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    openItemUpdate = _useState46[0],
    setOpenItemUpdate = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState48 = _slicedToArray(_useState47, 2),
    idItem = _useState48[0],
    setIdItem = _useState48[1];
  var handleOpenItemUpdate = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(function* (id) {
      setOpenItemUpdate(true);
      setIdItem(id);
    });
    return function handleOpenItemUpdate(_x) {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleCloseItemUpdate = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(function* () {
      setOpenItemUpdate(false);
      if (idItem) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/get-item/").concat(idItem));
          SetItems(items => items.map(row => {
            var _row$itemName;
            return ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName._id) === res.data.data._id ? _objectSpread(_objectSpread({}, row), {}, {
              itemDescription: res.data.data.itemDescription,
              costRate: res.data.data.itemCostPrice,
              itemRate: res.data.data.itemSellingPrice,
              stock: res.data.data.stockOnHand
            }) : row;
          }));
        } catch (error) {}
      }
    });
    return function handleCloseItemUpdate() {
      return _ref6.apply(this, arguments);
    };
  }();
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    openAutocomplete2 = _useState50[0],
    setOpenAutocomplete2 = _useState50[1];
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
  {/** Item InFO End */}
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState52 = _slicedToArray(_useState51, 2),
    loading = _useState52[0],
    setLoading = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState54 = _slicedToArray(_useState53, 2),
    loadingOpenModal = _useState54[0],
    setLoadingOpenModal = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState56 = _slicedToArray(_useState55, 2),
    ErrorOpenModal = _useState56[0],
    setErrorOpenModal = _useState56[1];
  var handleOpen = () => {
    setOpen1(false);
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleError = () => {
    setOpen1(false);
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
  var handleUpdateQty = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(function* () {
      var initialStateId = {};
      var QtyUpdate = {};
      //Get Qty Arrays
      var QtyNew = items.map(Item => Item.itemQty);
      //Get ItemName Id
      items.forEach((Item, index) => {
        initialStateId["id".concat(index + 1)] = {
          ids: Item.itemName._id
        };
      });
      // Get Value
      var getRequestId = Object.values(initialStateId).map(_ref8 => {
        var ids = _ref8.ids;
        return axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/get-item/").concat(ids));
      });
      try {
        var res = yield Promise.all(getRequestId);
        res.forEach((resp, index) => {
          QtyUpdate["id".concat(index + 1)] = {
            ids: resp.data.data._id,
            data: {
              stockOnHand: resp.data.data.stockOnHand - QtyNew[index]
            }
          };
        });
      } catch (error) {}
      // Update Value 
      var updateRequest = Object.values(QtyUpdate).map(_ref9 => {
        var ids = _ref9.ids,
          data = _ref9.data;
        return axios__WEBPACK_IMPORTED_MODULE_25__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/update-item/").concat(ids), data);
      });
      try {
        yield Promise.all(updateRequest);
      } catch (error) {}
    });
    return function handleUpdateQty() {
      return _ref7.apply(this, arguments);
    };
  }();
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState58 = _slicedToArray(_useState57, 2),
    idInvoice = _useState58[0],
    setIdInvoice = _useState58[1];
  var statusPurchase = 'Estimated';
  var handleSubmitStatusUpdate = ReferenceInfo => {
    var data = {
      status: statusPurchase,
      ReferenceName: ReferenceInfo
    };
    axios__WEBPACK_IMPORTED_MODULE_25__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/update-purchase/").concat(id), data);
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].post(apiUrl, {
          customerName,
          estimateNumber,
          estimateDate,
          estimateDefect,
          estimateSubject,
          estimateName,
          status,
          items,
          subTotal,
          total,
          totalW,
          note,
          Create,
          Ref: projectName,
          shipping,
          adjustment,
          adjustmentNumber,
          totalInvoice,
          terms
        });
        if (res) {
          (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_33__.invalidateCache)('/estimation');
          // Open Loading View
          var ReferenceInfo = res.data.data.estimateName;
          handleSubmitStatusUpdate(ReferenceInfo);
          handleOpen();
          setIdInvoice(res.data.data._id);
          //Reset form
        } else {
          alert('An Error as Occur');
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmit(_x2) {
      return _ref0.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sidemnuandcontent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "headername"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h5"
  }, "Convert Purchase to Quotation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rightcontent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_NotificationsNone__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "iconesize"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Logout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_45__["default"], {
    style: {
      color: 'white'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "invoice2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Back",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleOpenUpdate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_39__["default"], {
    className: "btnCustomer6"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disabled: true,
    id: "customerName",
    name: "customerName",
    label: "Customer Name",
    value: customerName1 ? customerName1.customerName : '',
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    htmlFor: "estimateNumber"
  }, "Quotation Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    required: true,
    disabled: true,
    type: "number",
    id: "estimateNumber",
    label: "Quotation Number",
    value: '00' + estimateNumber,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      position: "start"
    }, "QUO-")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_35__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_36__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_34__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_37__.DatePicker, {
    required: true,
    name: "estimateDate",
    label: "Date",
    value: estimateDate,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "estimateSubject",
    name: "estimateSubject",
    label: "Subject",
    value: estimateSubject,
    onChange: e => setEstimateSubject(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "estimateDefect",
    name: "estimateDefect",
    label: "Defect",
    value: estimateDefect,
    onChange: e => setEstimateDefect(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'block',
      position: 'fixed',
      zIndex: 1,
      float: 'right',
      right: '-5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: addItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    className: "btn1"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: addItemWhite
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    className: "btn1",
    style: {
      backgroundColor: 'gray'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_50__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_50__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_50__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => {
    var _Item$itemName, _Item$itemName2, _Item$itemName3;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_27__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      required: true,
      name: "newDescription",
      id: "newDescription",
      value: Item.newDescription,
      onChange: e => handleChange(e, i),
      size: "small",
      disabled: user.data.role === 'User',
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
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_27__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        height: '100px'
      }
    }, Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      sx: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '15px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_51__["default"], {
      itemId: (_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName._id,
      initialData: Item.data,
      initialType: Item.contentType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      sx: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      hidden: Item.itemName ? Item.itemName.itemName === 'empty' : '',
      sx: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    }, ((_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 || (_Item$itemName2 = _Item$itemName2.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2.toUpperCase()) || ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      required: true,
      name: "itemDescription",
      id: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      rows: 3,
      onChange: e => handleChange(e, i),
      size: "small",
      disabled: user.data.role !== 'CEO',
      sx: {
        width: '440px',
        backgroundColor: 'white',
        fontSize: 12
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => handleShowAutocomplete(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_29__["default"], {
      style: {
        color: '#202a5a'
      }
    }))), ((_Item$itemName3 = Item.itemName) === null || _Item$itemName3 === void 0 ? void 0 : _Item$itemName3._id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Edit",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: () => {
        var _Item$itemName4;
        return handleOpenItemUpdate((_Item$itemName4 = Item.itemName) === null || _Item$itemName4 === void 0 ? void 0 : _Item$itemName4._id);
      },
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_28__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      disableClearable: true,
      options: ItemInformation,
      getOptionLabel: option => option.itemName + '/' + option.itemBrand,
      renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], props, option.itemName + '/' + option.itemBrand),
      renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
        multiline: true,
        rows: 4
      }, params, {
        required: true
      })),
      inputValue: inputValue,
      onInputChange: (event, newInputValue) => {
        setInputValue(newInputValue);
      },
      filterOptions: (options, _ref1) => {
        var inputValue = _ref1.inputValue;
        return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
      },
      onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
      size: "small",
      PaperComponent: _ref10 => {
        var children = _ref10.children,
          other = _objectWithoutProperties(_ref10, _excluded3);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, other, {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_29__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      disabled: true,
      name: "stock",
      id: "stock",
      value: Item.stock,
      type: "number",
      onChange: e => handleChange(e, i),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: "itemQty",
      id: "itemQty",
      onChange: e => handleChange(e, i),
      size: "small",
      type: "number",
      value: Item.itemQty,
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: "itemRate",
      id: "itemRate",
      value: Item.itemRate,
      type: "number",
      disabled: user.data.role !== 'CEO',
      onChange: e => handleChange(e, i),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      onClick: () => handleDelete(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))));
  })), provided.placeholder)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "note",
    name: "note",
    multiline: true,
    rows: 4,
    value: note,
    label: "Invoice Note",
    onChange: e => setNote(e.target.value),
    sx: {
      width: '50%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "firstTable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Sub-Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disabled: true,
    type: "number",
    id: "subTotal",
    size: "small",
    name: "subTotal",
    value: subTotal,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Shipping Fees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    type: "number",
    id: "shipping",
    size: "small",
    name: "shipping",
    value: shipping,
    onChange: e => setShipping(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "      ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "adjustment",
    id: "adjustment",
    size: "small",
    value: adjustment,
    onChange: e => setAdjustment(e.target.value),
    sx: {
      width: '250px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    type: "number",
    id: "adjustmentNumber",
    size: "small",
    name: "adjustmentNumber",
    value: adjustmentNumber,
    onChange: e => setAdjustmentNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disabled: true,
    type: "number",
    id: "totalInvoice",
    size: "small",
    name: "totalInvoice",
    value: totalInvoice,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Amount Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    type: "number",
    id: "total",
    size: "small",
    name: "total",
    value: total,
    onChange: e => setTotal(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    type: "number",
    id: "balanceDue",
    size: "small",
    name: "balanceDue",
    value: balanceDue,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Total In Words"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    required: true,
    name: "totalW",
    id: "totalW",
    value: totalW,
    multiline: true,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    maxRows: 3
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "terms",
    name: "terms",
    multiline: true,
    rows: 4,
    value: terms,
    label: "Invoice Terms",
    onChange: e => setTerms(e.target.value),
    sx: {
      width: '60%',
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
  }, "Save"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: showModal,
    onClose: handleCloseRowId,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleCloseRowId,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Please select the row to assign the total to: ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, "Item Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "itemNameRow",
    value: targetRowId,
    onChange: e => setTargetRowId(e.target.value),
    name: "itemNameRow",
    label: "Item Name"
  }, items.map(item => item.idRow !== selectedRowId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    key: item.idRow,
    value: item.idRow
  }, item.itemName.itemName))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    style: {
      width: '100%'
    },
    onClick: deleteItem
  }, " Confirm "))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Do you want to stop creating Quotation ? ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate(-1),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handleCloseUpdate,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: loadingOpenModal,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_42__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_40__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.NavLink, {
    to: "/EstimateViewAdminAll/".concat(idInvoice),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_42__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_41__["default"], {
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
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: openAutocomplete2,
    onClose: handleCloseOpenAutocomplete2,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_47__["default"], {
    onCreateOption: handleCreateItem,
    onClose: handleCloseOpenAutocomplete2
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: openItemUpdate,
    onClose: handleCloseItemUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: _objectSpread(_objectSpread({}, style2), {}, {
      width: 800
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleCloseItemUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_48__["default"], {
    onClose: handleCloseItemUpdate,
    id: idItem
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConvertToEstimate);

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

/***/ "./node_modules/number-to-words/src/index.js"
/*!***************************************************!*\
  !*** ./node_modules/number-to-words/src/index.js ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

 

module.exports = {
    toOrdinal: __webpack_require__(/*! ./toOrdinal */ "./node_modules/number-to-words/src/toOrdinal.js"),
    toWords: __webpack_require__(/*! ./toWords */ "./node_modules/number-to-words/src/toWords.js"),
    toWordsOrdinal: __webpack_require__(/*! ./toWordsOrdinal */ "./node_modules/number-to-words/src/toWordsOrdinal.js")
};


/***/ },

/***/ "./node_modules/number-to-words/src/isFinite.js"
/*!******************************************************!*\
  !*** ./node_modules/number-to-words/src/isFinite.js ***!
  \******************************************************/
(module) {



// Simplified https://gist.github.com/marlun78/885eb0021e980c6ce0fb
function isFinite(value) {
    return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
}

module.exports = isFinite;


/***/ },

/***/ "./node_modules/number-to-words/src/isSafeNumber.js"
/*!**********************************************************!*\
  !*** ./node_modules/number-to-words/src/isSafeNumber.js ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var MAX_SAFE_INTEGER = __webpack_require__(/*! ./maxSafeInteger */ "./node_modules/number-to-words/src/maxSafeInteger.js");

function isSafeNumber(value) {
    return typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER;
}

module.exports = isSafeNumber;


/***/ },

/***/ "./node_modules/number-to-words/src/makeOrdinal.js"
/*!*********************************************************!*\
  !*** ./node_modules/number-to-words/src/makeOrdinal.js ***!
  \*********************************************************/
(module) {



var ENDS_WITH_DOUBLE_ZERO_PATTERN = /(hundred|thousand|(m|b|tr|quadr)illion)$/;
var ENDS_WITH_TEEN_PATTERN = /teen$/;
var ENDS_WITH_Y_PATTERN = /y$/;
var ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN = /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/;
var ordinalLessThanThirteen = {
    zero: 'zeroth',
    one: 'first',
    two: 'second',
    three: 'third',
    four: 'fourth',
    five: 'fifth',
    six: 'sixth',
    seven: 'seventh',
    eight: 'eighth',
    nine: 'ninth',
    ten: 'tenth',
    eleven: 'eleventh',
    twelve: 'twelfth'
};

/**
 * Converts a number-word into an ordinal number-word.
 * @example makeOrdinal('one') => 'first'
 * @param {string} words
 * @returns {string}
 */
function makeOrdinal(words) {
    // Ends with *00 (100, 1000, etc.) or *teen (13, 14, 15, 16, 17, 18, 19)
    if (ENDS_WITH_DOUBLE_ZERO_PATTERN.test(words) || ENDS_WITH_TEEN_PATTERN.test(words)) {
        return words + 'th';
    }
    // Ends with *y (20, 30, 40, 50, 60, 70, 80, 90)
    else if (ENDS_WITH_Y_PATTERN.test(words)) {
        return words.replace(ENDS_WITH_Y_PATTERN, 'ieth');
    }
    // Ends with one through twelve
    else if (ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN.test(words)) {
        return words.replace(ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN, replaceWithOrdinalVariant);
    }
    return words;
}

function replaceWithOrdinalVariant(match, numberWord) {
    return ordinalLessThanThirteen[numberWord];
}

module.exports = makeOrdinal;


/***/ },

/***/ "./node_modules/number-to-words/src/maxSafeInteger.js"
/*!************************************************************!*\
  !*** ./node_modules/number-to-words/src/maxSafeInteger.js ***!
  \************************************************************/
(module) {



var MAX_SAFE_INTEGER = 9007199254740991;

module.exports = MAX_SAFE_INTEGER;


/***/ },

/***/ "./node_modules/number-to-words/src/toOrdinal.js"
/*!*******************************************************!*\
  !*** ./node_modules/number-to-words/src/toOrdinal.js ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var isFinite = __webpack_require__(/*! ./isFinite */ "./node_modules/number-to-words/src/isFinite.js");
var isSafeNumber = __webpack_require__(/*! ./isSafeNumber */ "./node_modules/number-to-words/src/isSafeNumber.js");

/**
 * Converts an integer into a string with an ordinal postfix.
 * If number is decimal, the decimals will be removed.
 * @example toOrdinal(12) => '12th'
 * @param {number|string} number
 * @returns {string}
 */
function toOrdinal(number) {
    var num = parseInt(number, 10);

    if (!isFinite(num)) {
        throw new TypeError(
            'Not a finite number: ' + number + ' (' + typeof number + ')'
        );
    }
    if (!isSafeNumber(num)) {
        throw new RangeError(
            'Input is not a safe number, it’s either too large or too small.'
        );
    }
    var str = String(num);
    var lastTwoDigits = Math.abs(num % 100);
    var betweenElevenAndThirteen = lastTwoDigits >= 11 && lastTwoDigits <= 13;
    var lastChar = str.charAt(str.length - 1);
    return str + (betweenElevenAndThirteen ? 'th'
            : lastChar === '1' ? 'st'
            : lastChar === '2' ? 'nd'
            : lastChar === '3' ? 'rd'
            : 'th');
}

module.exports = toOrdinal;


/***/ },

/***/ "./node_modules/number-to-words/src/toWords.js"
/*!*****************************************************!*\
  !*** ./node_modules/number-to-words/src/toWords.js ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var makeOrdinal = __webpack_require__(/*! ./makeOrdinal */ "./node_modules/number-to-words/src/makeOrdinal.js");
var isFinite = __webpack_require__(/*! ./isFinite */ "./node_modules/number-to-words/src/isFinite.js");
var isSafeNumber = __webpack_require__(/*! ./isSafeNumber */ "./node_modules/number-to-words/src/isSafeNumber.js");

var TEN = 10;
var ONE_HUNDRED = 100;
var ONE_THOUSAND = 1000;
var ONE_MILLION = 1000000;
var ONE_BILLION = 1000000000;           //         1.000.000.000 (9)
var ONE_TRILLION = 1000000000000;       //     1.000.000.000.000 (12)
var ONE_QUADRILLION = 1000000000000000; // 1.000.000.000.000.000 (15)
var MAX = 9007199254740992;             // 9.007.199.254.740.992 (15)

var LESS_THAN_TWENTY = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

var TENTHS_LESS_THAN_HUNDRED = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

/**
 * Converts an integer into words.
 * If number is decimal, the decimals will be removed.
 * @example toWords(12) => 'twelve'
 * @param {number|string} number
 * @param {boolean} [asOrdinal] - Deprecated, use toWordsOrdinal() instead!
 * @returns {string}
 */
function toWords(number, asOrdinal) {
    var words;
    var num = parseInt(number, 10);

    if (!isFinite(num)) {
        throw new TypeError(
            'Not a finite number: ' + number + ' (' + typeof number + ')'
        );
    }
    if (!isSafeNumber(num)) {
        throw new RangeError(
            'Input is not a safe number, it’s either too large or too small.'
        );
    }
    words = generateWords(num);
    return asOrdinal ? makeOrdinal(words) : words;
}

function generateWords(number) {
    var remainder, word,
        words = arguments[1];

    // We’re done
    if (number === 0) {
        return !words ? 'zero' : words.join(' ').replace(/,$/, '');
    }
    // First run
    if (!words) {
        words = [];
    }
    // If negative, prepend “minus”
    if (number < 0) {
        words.push('minus');
        number = Math.abs(number);
    }

    if (number < 20) {
        remainder = 0;
        word = LESS_THAN_TWENTY[number];

    } else if (number < ONE_HUNDRED) {
        remainder = number % TEN;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
            word += '-' + LESS_THAN_TWENTY[remainder];
            remainder = 0;
        }

    } else if (number < ONE_THOUSAND) {
        remainder = number % ONE_HUNDRED;
        word = generateWords(Math.floor(number / ONE_HUNDRED)) + ' hundred';

    } else if (number < ONE_MILLION) {
        remainder = number % ONE_THOUSAND;
        word = generateWords(Math.floor(number / ONE_THOUSAND)) + ' thousand,';

    } else if (number < ONE_BILLION) {
        remainder = number % ONE_MILLION;
        word = generateWords(Math.floor(number / ONE_MILLION)) + ' million,';

    } else if (number < ONE_TRILLION) {
        remainder = number % ONE_BILLION;
        word = generateWords(Math.floor(number / ONE_BILLION)) + ' billion,';

    } else if (number < ONE_QUADRILLION) {
        remainder = number % ONE_TRILLION;
        word = generateWords(Math.floor(number / ONE_TRILLION)) + ' trillion,';

    } else if (number <= MAX) {
        remainder = number % ONE_QUADRILLION;
        word = generateWords(Math.floor(number / ONE_QUADRILLION)) +
        ' quadrillion,';
    }

    words.push(word);
    return generateWords(remainder, words);
}

module.exports = toWords;


/***/ },

/***/ "./node_modules/number-to-words/src/toWordsOrdinal.js"
/*!************************************************************!*\
  !*** ./node_modules/number-to-words/src/toWordsOrdinal.js ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var makeOrdinal = __webpack_require__(/*! ./makeOrdinal */ "./node_modules/number-to-words/src/makeOrdinal.js");
var toWords = __webpack_require__(/*! ./toWords */ "./node_modules/number-to-words/src/toWords.js");

/**
 * Converts a number into ordinal words.
 * @example toWordsOrdinal(12) => 'twelfth'
 * @param {number|string} number
 * @returns {string}
 */
function toWordsOrdinal(number) {
    var words = toWords(number);
    return makeOrdinal(words);
}

module.exports = toWordsOrdinal;


/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUHVyY2hhc2VzVmlld19Db252ZXJ0VG9Fc3RpbWF0ZV9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiOztBQUVBLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUF1QjtBQUMzRSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7QUFDN0MsZUFBZSxrQkFBZTtBQUM5QjtBQUNBLENBQUMsd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQywwQkFBMEIsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ04zQjs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxVQUFVLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOWCxDQUFrRDtBQUNPO0FBQ2pDO0FBQ0U7QUFDMEI7QUFDc0I7QUFDUjtBQUNkO0FBQ2dLO0FBQ3ZKO0FBQ2hCO0FBQ3BCO0FBQ3VGO0FBQzlEO0FBQ3hCO0FBQzhCO0FBQ0U7QUFDUztBQUNhO0FBQ2hCO0FBQ0o7QUFDbEM7QUFDNEI7QUFDUTtBQUNWO0FBQ0w7QUFDUTtBQUMrQjtBQUN0QztBQUNGO0FBQ1E7QUFDSTtBQUNmO0FBQ2lDO0FBQ2Y7QUFHN0QsSUFBTStELFlBQVksR0FBRzFDLDBEQUFNLENBQUMyQyxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDOUNwRSwwREFBQSxD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QUFDLENBQUNHLElBQUksQ0FBQyxHQUFHQyxLQUFLO0lBQ3JCQyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHTSxJQUFJLENBQUNDLEtBQUssQ0FBSUYsSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBQ0ssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRSxHQUFHLENBQUMsR0FBQyxHQUFHO0lBQ3ZGSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHTSxJQUFJLENBQUNDLEtBQUssQ0FBRUYsSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBQ0ssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRSxHQUFHLENBQUMsR0FBQyxHQUFHO0lBQ25GSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFDSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztJQUNwRUssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBR0ssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBQyxHQUFHO0lBQy9DSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHTSxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDRixJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFDSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFFLEdBQUcsQ0FBQyxHQUFDLEdBQUc7SUFDMUZLLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEdBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFFRixJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFDSyxJQUFJLENB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O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQy9HYTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQyx3RUFBZTtBQUN6QyxjQUFjLG1CQUFPLENBQUMsZ0VBQVc7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0RyYWdJbmRpY2F0b3JSb3VuZGVkLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRWRpdC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvUHVyY2hhc2VzVmlldy9Db252ZXJ0VG9Fc3RpbWF0ZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9JdGVtVGh1bWJuYWlsLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvaXNGaW5pdGUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL2lzU2FmZU51bWJlci5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvbWFrZU9yZGluYWwuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL21heFNhZmVJbnRlZ2VyLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy90b09yZGluYWwuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL3RvV29yZHMuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL3RvV29yZHNPcmRpbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0xMiAyMmMxLjEgMCAyLS45IDItMmgtNGMwIDEuMS45IDIgMiAybTYtNnYtNWMwLTMuMDctMS42My01LjY0LTQuNS02LjMyVjRjMC0uODMtLjY3LTEuNS0xLjUtMS41cy0xLjUuNjctMS41IDEuNXYuNjhDNy42NCA1LjM2IDYgNy45MiA2IDExdjVsLTIgMnYxaDE2di0xem0tMiAxSDh2LTZjMC0yLjQ4IDEuNTEtNC41IDQtNC41czQgMi4wMiA0IDQuNXpcIlxufSksICdOb3RpZmljYXRpb25zTm9uZScpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTExIDE4YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tMi04Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMm0wLTZjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTYgNGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJtMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMm0wIDZjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yXCJcbn0pLCAnRHJhZ0luZGljYXRvclJvdW5kZWQnKTsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0zIDE3LjI1VjIxaDMuNzVMMTcuODEgOS45NGwtMy43NS0zLjc1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGEuOTk1OS45OTU5IDAgMCAwLTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NXpcIlxufSksICdFZGl0Jyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaCc7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnO1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7T3V0bGluZWRJbnB1dCxJbnB1dEFkb3JubWVudCxNZW51SXRlbSxHcmlkLCBJY29uQnV0dG9uLCBQYXBlcixUYWJsZUNvbnRhaW5lciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBBdXRvY29tcGxldGUsc3R5bGVkLCBCb3gsIE1vZGFsLCBCYWNrZHJvcCwgRmFkZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBUb29sdGlwLHt0b29sdGlwQ2xhc3Nlc30gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkLCBEcmFnSW5kaWNhdG9yUm91bmRlZCwgRWRpdCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyAgdXNlTmF2aWdhdGUsTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBpbnZhbGlkYXRlQ2FjaGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9hcGlDYWNoZSc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0xvY2FsaXphdGlvblByb3ZpZGVyJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlUGlja2VyJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgSXRlbUZvcm1WaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtRm9ybVZpZXcyJztcclxuaW1wb3J0IEl0ZW1VcGRhdGVWaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtVXBkYXRlVmlldzInO1xyXG5pbXBvcnQgbnVtYmVyVG9Xb3JkcyBmcm9tICdudW1iZXItdG8td29yZHMnXHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5pbXBvcnQgSXRlbVRodW1ibmFpbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvSXRlbVRodW1ibmFpbCc7XHJcblxyXG5cclxuY29uc3QgTGlnaHRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gICAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbiAgKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICAgIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICAgIGZvbnRTaXplOiAxMSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG4gIFxyXG4gIGNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICAgIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4gICkpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgICAgZm9udFNpemU6IDExLFxyXG4gICAgfSxcclxuICB9KSk7XHJcbiAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzUwJScsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICB3aWR0aDogNDAwLFxyXG4gICAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gICAgYm94U2hhZG93OiAyNCxcclxuICAgIHB0OiAyLFxyXG4gICAgcHg6IDQsXHJcbiAgICBwYjogMyxcclxuICB9O1xyXG4gIGNvbnN0IHN0eWxlMiA9IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnNTAlJyxcclxuICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIHdpZHRoOiA4MDAsXHJcbiAgICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgICBib3hTaGFkb3c6IDI0LFxyXG4gICAgcHQ6IDIsXHJcbiAgICBweDogNCxcclxuICAgIHBiOiAzLFxyXG4gIH07XHJcbmZ1bmN0aW9uIENvbnZlcnRUb0VzdGltYXRlKCkge1xyXG4gICAgbGV0IHtpZH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBkYXRhIGhlcmVcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHt1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZX0pKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdubyBpZCcpO1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH0sW2Rpc3BhdGNoXSlcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYXBpVXJsID0gYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtZXN0aW1hdGlvbmA7XHJcbiAgICAgIGNvbnN0IFtwdXJjaGFzZU5hbWUsc2V0UHVyY2hhc2VOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgICBjb25zdCBlc3RpbWF0ZURhdGUgPWRheWpzKERhdGUubm93KCkpO1xyXG4gICAgICBjb25zdCBbZXN0aW1hdGVTdWJqZWN0LHNldEVzdGltYXRlU3ViamVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgICAgY29uc3Qgc3RhdHVzPVwiRHJhZnRcIjtcclxuICAgICAgY29uc3QgW2N1c3RvbWVyTmFtZTEsc2V0Q3VzdG9tZXJOYW1lMV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAgIGNvbnN0IFtlc3RpbWF0ZURlZmVjdCxzZXRFc3RpbWF0ZURlZmVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgICAgY29uc3QgW0l0ZW1JbmZvcm1hdGlvbixzZXRJdGVtSW5mb3JtYXRpb25dPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAgIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IHVzZVN0YXRlKFwiVGhhbmtzIEZvciB5b3VyIEJ1c2luZXNzLlwiKTtcclxuICAgICAgY29uc3QgW3Rlcm1zLCBzZXRUZXJtc10gPSB1c2VTdGF0ZShcIlFVT1RBVElPTlMgQVJFIEZPUiBMQUJPUiBBTkQgQURESVRJT05BTCBNQVRFUklBTCBPTkxZLCBNQVRFUklBTFMgU09MRCBBUkUgTkVJVEhFUiBUQUtFTiBCQUNLIE9SIEVYQ0hBTkdFRCBXRSBXSUxMIE5PVCBCRSBSRVNQT05TSUJMRSBGT1IgTE9TUyBPUiBEQU1BR0UgQ0FVU0VEIEJZIEZJUkUsIFRIRUZULCBURVNUSU5HLCBERUZFQ1RFRCBQQVJFIFBBUlRTLCBPUiBBTlkgT1RIRVIgQ0FVU0UgQkVZT05EIE9VUiBDT05UUk9MLiBcIik7XHJcbiAgICAgIGNvbnN0IFtwcm9qZWN0TmFtZSxzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAgIGNvbnN0IFtpdGVtcywgU2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICAgIGNvbnN0IFtzdWJUb3RhbCwgc2V0U3ViVG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgICAgIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgICAgIGNvbnN0IFtzaGlwcGluZywgc2V0U2hpcHBpbmddPSB1c2VTdGF0ZSgwKTtcclxuICAgICAgY29uc3QgW2FkanVzdG1lbnQsc2V0QWRqdXN0bWVudF09dXNlU3RhdGUoJ0FkanVzdG1lbnQnKVxyXG4gICAgICBjb25zdCBbYWRqdXN0bWVudE51bWJlcixzZXRBZGp1c3RtZW50TnVtYmVyXT11c2VTdGF0ZSgwKVxyXG4gICAgICBjb25zdCBbdG90YWxJbnZvaWNlLCBzZXRUb3RhbEludm9pY2VdPSB1c2VTdGF0ZSgwKTtcclxuICAgICAgY29uc3QgW2JhbGFuY2VEdWUsIHNldEJhbGFuY2VEdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICAgIGNvbnN0IFt0b3RhbFcsc2V0VG90YWxXXSA9dXNlU3RhdGUoXCJcIik7XHJcbiAgICAgICBjb25zdCBbZXN0aW1hdGVOdW1iZXIsc2V0RXN0aW1hdGVOdW1iZXJdPSB1c2VTdGF0ZSgwKTtcclxuICBcclxuICAgICAgIGNvbnN0IGRhdGVDb21tZW50ID0gZGF5anMoRGF0ZS5ub3coKSkuZm9ybWF0KCdERC9NTS9ZWVlZJylcclxuICAgICAgIGNvbnN0IENyZWF0ZSA9IHtwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSsgJyBDUkVBVEVEICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRlQ29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgIGNvbnN0IGVzdGltYXRlTmFtZSA9IFwiUVVPLVwiICsgU3RyaW5nKGVzdGltYXRlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgbGV0IG5ld051bWJlciA9IDA7XHJcbiAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VzdGltYXRpb24/c3VtbWFyeT10cnVlYClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGEgaGVyZVxyXG4gICAgICAgICByZXMuZGF0YS5kYXRhLm1hcCgocm93KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdOdW1iZXIgPSByb3cuZXN0aW1hdGVOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3TnVtYmVyICsgMTtcclxuICAgICAgICAgICAgICBzZXRFc3RpbWF0ZU51bWJlcihyZXN1bHQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvcnNcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICB9KTtcclxuICAgIH0sW10pXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbWApXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBkYXRhIGhlcmVcclxuICAgICAgICAgICAgICBzZXRJdGVtSW5mb3JtYXRpb24ocmVzLmRhdGEuZGF0YS5yZXZlcnNlKCkpICAgICAgXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yc1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgICB9LFtdKVxyXG5jb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSxpKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBbLi4uaXRlbXNdO1xyXG4gICAgICAgIGxpc3RbaV1bbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICBsaXN0W2ldWyd0b3RhbEFtb3VudCddID0gTWF0aC5yb3VuZCgoICBsaXN0W2ldWydpdGVtUXR5J10qbGlzdFtpXVsnaXRlbVJhdGUnXSkqMTAwKS8xMDA7XHJcbiAgICAgICAgbGlzdFtpXVsndG90YWxDb3N0J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10qbGlzdFtpXVsnaXRlbUNvc3QnXSkqMTAwKS8xMDA7XHJcbiAgICAgICAgbGlzdFtpXVsnZGlzY291bnQnXSA9IGxpc3RbaV1bJ3RvdGFsQW1vdW50J10qbGlzdFtpXVsnaXRlbURpc2NvdW50J107XHJcbiAgICAgICAgbGlzdFtpXVsncGVyY2VudGFnZSddID0gbGlzdFtpXVsnZGlzY291bnQnXS8xMDA7XHJcbiAgICAgICAgbGlzdFtpXVsnaXRlbUFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsndG90YWxBbW91bnQnXS1saXN0W2ldWydwZXJjZW50YWdlJ10pKjEwMCkvMTAwO1xyXG4gICAgICAgIGxpc3RbaV1bJ3RvdGFsR2VuZXJhbGUnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1Db3N0J10qbGlzdFtpXVsnaXRlbUJ1eSddKSoxMDApLzEwMDtcclxuICAgICAgICBTZXRJdGVtcyhsaXN0KTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IFtjdXN0b21lck5hbWUsc2V0Q3VzdG9tZXJOYW1lXT0gdXNlU3RhdGUoe30pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcHVyY2hhc2UvJHtpZH1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YSBoZXJlXHJcbiAgICAgICAgICAgc2V0Q3VzdG9tZXJOYW1lMShyZXMuZGF0YS5kYXRhLmN1c3RvbWVyTmFtZSk7XHJcbiAgICAgICAgICAgc2V0UHJvamVjdE5hbWUocmVzLmRhdGEuZGF0YS5wcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgU2V0SXRlbXMocmVzLmRhdGEuZGF0YS5pdGVtcyk7XHJcbiAgICAgICAgICAgc2V0UHVyY2hhc2VOYW1lKHJlcy5kYXRhLmRhdGEucHVyY2hhc2VOYW1lKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICB9LFtdKVxyXG4gdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vY3VzdG9tZXJgKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBkYXRhIGhlcmVcclxuICAgICAgcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KT0+IHJvdy5faWQgPT09IGN1c3RvbWVyTmFtZTEuX2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyb3cpPT4gIHNldEN1c3RvbWVyTmFtZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiByb3cuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJOYW1lOiByb3cuY3VzdG9tZXJGdWxsTmFtZSB8fCByb3cuY29tcGFueU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWxsaW5nQWRkcmVzczogcm93LmJpbGxpbmdBZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlsbGluZ0NpdHk6IHJvdy5iaWxsaW5nQ2l0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yc1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxufSk7XHJcbiB9LFtjdXN0b21lck5hbWUxXSlcclxuICAgICAgLy9hZGRJdGVtXHJcbiAgICAgIGNvbnN0IGFkZEl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgU2V0SXRlbXMoWy4uLml0ZW1zLCB7XHJcbiAgICAgICAgICAgIGlkUm93OnY0KCksXHJcbiAgICAgICAgICAgIGl0ZW1OYW1lOnt9LFxyXG4gICAgICAgICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgIGl0ZW1EaXNjb3VudDowLFxyXG4gICAgICAgICAgICBpdGVtUXR5OjAsXHJcbiAgICAgICAgICAgIGl0ZW1SYXRlOjAsXHJcbiAgICAgICAgICAgIGl0ZW1BbW91bnQ6MCxcclxuICAgICAgICAgICAgdG90YWxBbW91bnQ6MCxcclxuICAgICAgICAgICAgZGlzY291bnQ6MCxcclxuICAgICAgICAgICAgcGVyY2VudGFnZTowLFxyXG4gICAgICAgICAgICBpdGVtQnV5OjAsXHJcbiAgICAgICAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHRvdGFsR2VuZXJhbGU6MCxcclxuICAgICAgICAgICAgc3RvY2s6IDAsXHJcbiAgICAgICAgICAgIGl0ZW1PdXQ6MCxcclxuICAgICAgICAgICAgbmV3SXRlbU91dDowLFxyXG4gICAgICAgICAgfV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGFkZEl0ZW1XaGl0ZSA9ICgpID0+IHtcclxuICAgICAgICBTZXRJdGVtcyhbLi4uaXRlbXMsIHtcclxuICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgaWRSb3c6djQoKSxcclxuICAgICAgICAgIGl0ZW1OYW1lOntcclxuICAgICAgICAgICAgX2lkOlwiXCIsXHJcbiAgICAgICAgICAgIGl0ZW1OYW1lOlwiXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICBpdGVtRGlzY291bnQ6MCxcclxuICAgICAgICAgIGl0ZW1RdHk6MCxcclxuICAgICAgICAgIGl0ZW1SYXRlOjAsXHJcbiAgICAgICAgICBpdGVtQW1vdW50OjAsXHJcbiAgICAgICAgICBpdGVtQ29zdDowLFxyXG4gICAgICAgICAgdG90YWxBbW91bnQ6MCxcclxuICAgICAgICAgIGRpc2NvdW50OjAsXHJcbiAgICAgICAgICBwZXJjZW50YWdlOjAsXHJcbiAgICAgICAgICBpdGVtQnV5OjAsXHJcbiAgICAgICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICAgICAgdG90YWxHZW5lcmFsZTowLFxyXG4gICAgICAgICAgdG90YWxDb3N0OjAsXHJcbiAgICAgICAgICBzdG9jazogMCxcclxuICAgICAgICAgIGl0ZW1PdXQ6MCxcclxuICAgICAgICAgIG5ld0l0ZW1PdXQ6MCxcclxuICAgICAgICAgIH1dKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoYW5kbGVEcmFnRW5kID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbmV3SXRlbXMgPSBbLi4uaXRlbXNdO1xyXG4gICAgICBjb25zdCBbcmVtb3ZlZF0gPSBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICAgIG5ld0l0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlbW92ZWQpO1xyXG4gICAgICBTZXRJdGVtcyhuZXdJdGVtcylcclxuICAgICAgfTtcclxuICB1c2VFZmZlY3QgKCgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdDEgPSBpdGVtcy5yZWR1Y2UoKHN1bSwgcm93KT0+ICBzdW0gKyByb3cuaXRlbUFtb3VudCwwKVxyXG4gICAgc2V0U3ViVG90YWwocmVzdWx0MS50b0ZpeGVkKDIpKVxyXG4gICAgbGV0IG5ld1RvdGFsID0gTnVtYmVyKHN1YlRvdGFsKSArIE51bWJlcihzaGlwcGluZykgKyBOdW1iZXIoYWRqdXN0bWVudE51bWJlcilcclxuICAgIHNldFRvdGFsSW52b2ljZShuZXdUb3RhbClcclxuICAgIGxldCBuZXdCYWxhbmNlID0gdG90YWxJbnZvaWNlLXRvdGFsXHJcbiAgICBzZXRCYWxhbmNlRHVlKG5ld0JhbGFuY2UpXHJcbiAgICB9KTtcclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgaWYgKHRvdGFsSW52b2ljZSkge1xyXG4gICAgICAgIGNvbnN0IHdob2xlUGFydCA9IE1hdGguZmxvb3IodG90YWxJbnZvaWNlKVxyXG4gICAgICAgIGNvbnN0IGZyYWN0aW9uYWxQYXJ0ID0gKHRvdGFsSW52b2ljZSAlIDEpLnRvRml4ZWQoMikuc3BsaXQoJy4nKVsxXTtcclxuICAgICAgICBjb25zdCB3aG9sZVdvcmRzID0gbnVtYmVyVG9Xb3Jkcy50b1dvcmRzKHdob2xlUGFydClcclxuICAgICAgICBjb25zdCBmcmFjdGlvbmFsV29yZHMgPSBudW1iZXJUb1dvcmRzLnRvV29yZHMoZnJhY3Rpb25hbFBhcnQpXHJcbiAgICAgICAgY29uc29sZS5sb2coZnJhY3Rpb25hbFdvcmRzKVxyXG4gICAgICAgIHNldFRvdGFsVyhgJHt3aG9sZVdvcmRzfSBhbmQgJHtmcmFjdGlvbmFsV29yZHN9IGNlbnRzYClcclxuICAgICAgfVxyXG4gICAgfSxbdG90YWxJbnZvaWNlXSlcclxuICAgIGNvbnN0IFtvcGVuMSwgc2V0T3BlbjFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICBzZXRPcGVuMSh0cnVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgICAgey8qKiBNb2RhbCBJdGVtIFNob3cgKi99XHJcbiAgY29uc3QgW3NlbGVjdGVkUm93SWQsIHNldFNlbGVjdGVkUm93SWQgXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0YXJnZXRSb3dJZCwgc2V0VGFyZ2V0Um93SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZFJvdykgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRSb3dJZChpZFJvdyk7XHJcbiAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlUm93SWQgPSAoKT0+IHtcclxuICAgIHNldFNob3dNb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoKSA9PntcclxuICAgIGNvbnN0IG5ld1Jvd0lkID0gdGFyZ2V0Um93SWRcclxuICAgIGlmIChuZXdSb3dJZCkge1xyXG4gICAgICBjb25zdCBzZWxlY3RSb3cgPSBpdGVtcy5maW5kKGl0ZW09PiBpdGVtLmlkUm93ID09PSBzZWxlY3RlZFJvd0lkKTtcclxuICAgICAgY29uc3QgdGFyZ2V0Um93ID0gaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaWRSb3cgPT09IG5ld1Jvd0lkKTtcclxuICAgICAgaWYgKHNlbGVjdFJvdyAmJiB0YXJnZXRSb3cpIHtcclxuICAgICAgIGNvbnN0IG5ld1RvdGFsID0gdGFyZ2V0Um93LnRvdGFsQW1vdW50ICs9IHNlbGVjdFJvdy50b3RhbEFtb3VudFxyXG4gICAgICAgY29uc3QgbmV3UmF0ZSA9IG5ld1RvdGFsIC8gdGFyZ2V0Um93Lml0ZW1RdHkgXHJcbiAgICAgICBjb25zdCBuZXdUb3RhbEFtb3VudCA9IHRhcmdldFJvdy5pdGVtUXR5ICogbmV3UmF0ZVxyXG4gICAgICAgY29uc3QgZGlzY291bnRUYXJnZXQgPSB0YXJnZXRSb3cuaXRlbURpc2NvdW50ICogbmV3VG90YWxBbW91bnRcclxuICAgICAgIGNvbnN0IG5ld1BlcmNlbnRhZ2UgPSBkaXNjb3VudFRhcmdldCAvIDEwMFxyXG4gICAgICAgY29uc3QgbmV3VG90YWxHID0gbmV3VG90YWxBbW91bnQgLSBuZXdQZXJjZW50YWdlIFxyXG4gICAgICAgLy91cGRhdGUgcmF0ZVxyXG4gICAgICAgY29uc3QgdXBkYXRlUmF0ZSA9IGl0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pZFJvdyA9PT0gdGFyZ2V0Um93LmlkUm93KSB7XHJcbiAgICAgICAgICByZXR1cm4gey4uLml0ZW0sIFxyXG4gICAgICAgICAgICBpdGVtUmF0ZTogbmV3UmF0ZSxcclxuICAgICAgICAgICAgdG90YWxBbW91bnQ6IG5ld1RvdGFsQW1vdW50LFxyXG4gICAgICAgICAgICBkaXNjb3VudDpkaXNjb3VudFRhcmdldCxcclxuICAgICAgICAgICAgcGVyY2VudGFnZTogbmV3UGVyY2VudGFnZSxcclxuICAgICAgICAgICAgaXRlbUFtb3VudDogbmV3VG90YWxHXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1cclxuICAgICAgIH0pXHJcbiAgICAgICBTZXRJdGVtcyh1cGRhdGVSYXRlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgU2V0SXRlbXMgKGl0ZW1zID0+IGl0ZW1zLmZpbHRlcigoSXRlbSk9PiBJdGVtLmlkUm93ICE9PXNlbGVjdGVkUm93SWQpKTtcclxuICBzZXRTZWxlY3RlZFJvd0lkKCcnKTtzZXRTaG93TW9kYWwoZmFsc2UpO3NldFRhcmdldFJvd0lkKCcnKTtcclxuICB9O1xyXG4gIHsvKiogTW9kYWwgSXRlbSBTaG93IEVuZCAqL31cclxuICAgICAgey8qKiBJdGVtIEluRk8gKi99XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSXRlbSA9IChpZFJvdywgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IEl0ZW1JbmZvcm1hdGlvbi5maW5kKChvcHRpb24pPT4gb3B0aW9uID09PSBuZXdWYWx1ZSlcclxuICAgIFNldEl0ZW1zKGl0ZW1zPT4gaXRlbXMubWFwKChyb3cpPT4gcm93LmlkUm93ID09PSBpZFJvdyA/IHsuLi5yb3csIFxyXG4gICAgICBpdGVtTmFtZTp7XHJcbiAgICAgICAgX2lkOnNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICAgIGl0ZW1OYW1lOnNlbGVjdGVkT3B0aW9ucz8uaXRlbU5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1Db3N0OiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjpzZWxlY3RlZE9wdGlvbnM/Lml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgaXRlbVJhdGU6c2VsZWN0ZWRPcHRpb25zPy5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICBzdG9jazpzZWxlY3RlZE9wdGlvbnM/LnN0b2NrT25IYW5kLFxyXG4gICAgIH06IHJvdykpXHJcbiAgfVxyXG5jb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlID0gKGlkUm93KSA9PiB7XHJcbiAgICBTZXRJdGVtcyhpdGVtcz0+IGl0ZW1zLm1hcCgocm93KT0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgP3suLi5yb3csIFxyXG4gICAgICBpdGVtTmFtZTp7XHJcbiAgICAgICAgX2lkOm51bGwsXHJcbiAgICAgICAgaXRlbU5hbWU6bnVsbFxyXG4gICAgIH0sIFxyXG4gICAgIH06IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IFtvcGVuSXRlbVVwZGF0ZSwgc2V0T3Blbkl0ZW1VcGRhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpZEl0ZW0sc2V0SWRJdGVtXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlT3Blbkl0ZW1VcGRhdGUgPSBhc3luYyhpZCkgPT4ge1xyXG4gICAgc2V0T3Blbkl0ZW1VcGRhdGUodHJ1ZSk7XHJcbiAgICBzZXRJZEl0ZW0oaWQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VJdGVtVXBkYXRlID0gYXN5bmMoKSA9PiB7XHJcbiAgICBzZXRPcGVuSXRlbVVwZGF0ZShmYWxzZSk7XHJcbiAgICBpZiAoaWRJdGVtKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWl0ZW0vJHtpZEl0ZW19YClcclxuICAgICAgICBTZXRJdGVtcyhpdGVtcz0+IGl0ZW1zLm1hcCgocm93KT0+IHJvdy5pdGVtTmFtZT8uX2lkID09PSByZXMuZGF0YS5kYXRhLl9pZCA/IHsuLi5yb3csIFxyXG4gICAgICAgICAgaXRlbURlc2NyaXB0aW9uOnJlcy5kYXRhLmRhdGEuaXRlbURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgY29zdFJhdGU6IHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSxcclxuICAgICAgICAgIGl0ZW1SYXRlOiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogcmVzLmRhdGEuZGF0YS5zdG9ja09uSGFuZFxyXG4gICAgICAgICAgfTogcm93KSkgXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgXHJcbiAgICAgIH19XHJcbiAgfTtcclxuICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTIsIHNldE9wZW5BdXRvY29tcGxldGUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbmNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiA9IChlKSA9PiB7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gc2V0T3BlbkF1dG9jb21wbGV0ZTIodHJ1ZSk7XHJcbn07XHJcbmNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIgPSAoKSA9PiB7XHJcbiAgc2V0T3BlbkF1dG9jb21wbGV0ZTIoZmFsc2UpO1xyXG59O1xyXG5jb25zdCBoYW5kbGVDcmVhdGVJdGVtID0gKG5ld0l0ZW0pPT4ge1xyXG4gIHNldEl0ZW1JbmZvcm1hdGlvbihbLi4uSXRlbUluZm9ybWF0aW9uLCBuZXdJdGVtXSlcclxufVxyXG4gIHsvKiogSXRlbSBJbkZPIEVuZCAqL31cclxuICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXT0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCxzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gIFxyXG4gICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgIH0sIDUwMClcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVjaXNpb24gPSAobmF2aWdhdGUpID0+IHtcclxuICAgIC8vTmF2aWdhdGUgQmFzZWQgb24gdGggRGVjaXNpb25cclxuICAgIGlmIChuYXZpZ2F0ZSA9PT0gJ3ByZXZpb3VzJykge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRlID09PSAnc3RheScpIHtcclxuICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIH0gXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZVF0eSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZUlkID0ge31cclxuICAgIGNvbnN0IFF0eVVwZGF0ZSA9IHt9XHJcbiAgICAvL0dldCBRdHkgQXJyYXlzXHJcbiAgICBjb25zdCBRdHlOZXcgPSBpdGVtcy5tYXAoKEl0ZW0pPT4gSXRlbS5pdGVtUXR5KVxyXG4gICAgLy9HZXQgSXRlbU5hbWUgSWRcclxuICAgICBpdGVtcy5mb3JFYWNoKChJdGVtLGluZGV4KT0+IHtcclxuICAgICAgaW5pdGlhbFN0YXRlSWRbYGlkJHtpbmRleCsxfWBdID0ge2lkcyA6IEl0ZW0uaXRlbU5hbWUuX2lkfVxyXG4gICAgfSlcclxuICAgICAgLy8gR2V0IFZhbHVlXHJcbiAgICAgIGNvbnN0IGdldFJlcXVlc3RJZCA9IE9iamVjdC52YWx1ZXMoaW5pdGlhbFN0YXRlSWQpLm1hcCgoe2lkc30pPT57XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtLyR7aWRzfWApXHJcbiAgICAgIH0pXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChnZXRSZXF1ZXN0SWQpO1xyXG4gICAgICByZXMuZm9yRWFjaCgocmVzcCwgaW5kZXgpPT4geyBRdHlVcGRhdGVbYGlkJHtpbmRleCsxfWBdID0ge2lkczogcmVzcC5kYXRhLmRhdGEuX2lkICxkYXRhIDogeyBzdG9ja09uSGFuZDogcmVzcC5kYXRhLmRhdGEuc3RvY2tPbkhhbmQgLSBRdHlOZXdbaW5kZXhdfX19KVxyXG4gICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgIH1cclxuICAgICAgLy8gVXBkYXRlIFZhbHVlIFxyXG4gICAgICBjb25zdCB1cGRhdGVSZXF1ZXN0ID0gT2JqZWN0LnZhbHVlcyhRdHlVcGRhdGUpLm1hcCgoe2lkcywgZGF0YX0pPT57XHJcbiAgICAgIHJldHVybiBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtaXRlbS8ke2lkc31gLGRhdGEpXHJcbiAgICAgfSkgXHJcbiAgICAgdHJ5IHtcclxuICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHVwZGF0ZVJlcXVlc3QpO1xyXG4gICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgIH1cclxuICB9IFxyXG4gIGNvbnN0IFtpZEludm9pY2Usc2V0SWRJbnZvaWNlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBzdGF0dXNQdXJjaGFzZSA9ICdFc3RpbWF0ZWQnXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0U3RhdHVzVXBkYXRlID0gKFJlZmVyZW5jZUluZm8pID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgIHN0YXR1czogc3RhdHVzUHVyY2hhc2UsXHJcbiAgICAgICBSZWZlcmVuY2VOYW1lOlJlZmVyZW5jZUluZm9cclxuICAgICAgfTsgXHJcbiAgICAgIGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1wdXJjaGFzZS8ke2lkfWAsZGF0YSlcclxuICAgfVxyXG4gICAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYXBpVXJsLHtcclxuICAgICAgICAgICAgY3VzdG9tZXJOYW1lLFxyXG4gICAgICAgICAgICBlc3RpbWF0ZU51bWJlcixcclxuICAgICAgICAgICAgZXN0aW1hdGVEYXRlLFxyXG4gICAgICAgICAgICBlc3RpbWF0ZURlZmVjdCxcclxuICAgICAgICAgICAgZXN0aW1hdGVTdWJqZWN0LFxyXG4gICAgICAgICAgICBlc3RpbWF0ZU5hbWUsXHJcbiAgICAgICAgICAgIHN0YXR1cyxcclxuICAgICAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgICAgIHN1YlRvdGFsLFxyXG4gICAgICAgICAgICB0b3RhbCxcclxuICAgICAgICAgICAgdG90YWxXLFxyXG4gICAgICAgICAgICBub3RlLFxyXG4gICAgICAgICAgICBDcmVhdGUsXHJcbiAgICAgICAgICAgIFJlZjpwcm9qZWN0TmFtZSxzaGlwcGluZyxhZGp1c3RtZW50LGFkanVzdG1lbnROdW1iZXIsdG90YWxJbnZvaWNlLHRlcm1zXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgaW52YWxpZGF0ZUNhY2hlKCcvZXN0aW1hdGlvbicpO1xyXG4gICAgICAgICAgICAvLyBPcGVuIExvYWRpbmcgVmlld1xyXG4gICAgICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvID0gcmVzLmRhdGEuZGF0YS5lc3RpbWF0ZU5hbWVcclxuICAgICAgICAgICAgaGFuZGxlU3VibWl0U3RhdHVzVXBkYXRlKFJlZmVyZW5jZUluZm8pO1xyXG4gICAgICAgICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICAgICAgICAgIHNldElkSW52b2ljZShyZXMuZGF0YS5kYXRhLl9pZCk7XHJcbiAgICAgICAgICAgIC8vUmVzZXQgZm9ybVxyXG4gIFxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdBbiBFcnJvciBhcyBPY2N1cicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlbW51YW5kY29udGVudCc+XHJcbjxTaWRlYmFyRGFzaC8+XHJcbjxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gPGRpdiBjbGFzc05hbWU9J2hlYWRlcm5hbWUnPlxyXG4gIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5Db252ZXJ0IFB1cmNoYXNlIHRvIFF1b3RhdGlvbjwvVHlwb2dyYXBoeT5cclxuIDwvZGl2PlxyXG4gPGRpdiBjbGFzc05hbWU9J3JpZ2h0Y29udGVudCc+XHJcbiAgIDxOb3RpZmljYXRpb25zTm9uZUljb24gY2xhc3NOYW1lPSdpY29uZXNpemUnLz5cclxuICAgPFR5cG9ncmFwaHk+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJMb2dvdXRcIj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgPExvZ291dCBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fSAvPiBcclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT0naW52b2ljZTInPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJ319PlxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQmFja1wiIHBsYWNlbWVudD0nbGVmdCc+IFxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlblVwZGF0ZX0+XHJcbiAgICAgICAgICA8QXJyb3dCYWNrIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgPC9kaXY+IFxyXG4gICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3thbGlnbkl0ZW1zOidjZW50ZXInLHBhZGRpbmc6JzE1cHgnfX0gc3BhY2luZz17Mn0gY29tcG9uZW50PXtQYXBlcn0+ICAgIFxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PiAgIFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdjdXN0b21lck5hbWUnXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J2N1c3RvbWVyTmFtZScgXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdDdXN0b21lciBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJOYW1lMT9jdXN0b21lck5hbWUxLmN1c3RvbWVyTmFtZTonJ31cclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+IFxyXG4gICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiZXN0aW1hdGVOdW1iZXJcIj5RdW90YXRpb24gTnVtYmVyPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgIGlkPSdlc3RpbWF0ZU51bWJlcidcclxuICAgICAgICAgICAgICAgICBsYWJlbD0nUXVvdGF0aW9uIE51bWJlcidcclxuICAgICAgICAgICAgICAgICB2YWx1ZT17JzAwJytlc3RpbWF0ZU51bWJlcn1cclxuICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlFVTy08L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+IFxyXG4gICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2VzdGltYXRlRGF0ZScgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VzdGltYXRlRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyB9fSAgICAgICBcclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PiBcclxuICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdlc3RpbWF0ZVN1YmplY3QnXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J2VzdGltYXRlU3ViamVjdCcgXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdTdWJqZWN0J1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZXN0aW1hdGVTdWJqZWN0fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRFc3RpbWF0ZVN1YmplY3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyB9fSAgICAgICBcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PiBcclxuICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdlc3RpbWF0ZURlZmVjdCdcclxuICAgICAgICAgICAgICAgICAgbmFtZT0nZXN0aW1hdGVEZWZlY3QnIFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nRGVmZWN0J1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZXN0aW1hdGVEZWZlY3R9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldEVzdGltYXRlRGVmZWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidibG9jaycscG9zaXRpb246J2ZpeGVkJyx6SW5kZXg6MSxmbG9hdDoncmlnaHQnLHJpZ2h0OictNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkFkZFwiIHBsYWNlbWVudD1cInRvcFwiPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtfT5cclxuICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnLz4gIFxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbVdoaXRlfT5cclxuICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidncmF5J319Lz4gIFxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnIHN0eWxlPXt7bWFyZ2luTGVmdDonLTIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RvY2stQTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRpc2NvdW50ICU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIiA+ICBcclxuICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoICBcclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHkgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZHJvcHBhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9ICBcclxuICAgICAgICAgICAgICAgICAgICA+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoSXRlbSwgaSkgPT4gKCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17SXRlbS5pZFJvd30gZHJhZ2dhYmxlSWQ9e2Bkcm9wcGFibGUke0l0ZW0uaWRSb3d9YH0gaW5kZXg9e2l9PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+ICggIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgPyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Nn0+PFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nbmV3RGVzY3JpcHRpb24nIGlkPSduZXdEZXNjcmlwdGlvbicgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5uZXdEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsaSl9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9XHJcbiAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJywgZm9udFNpemU6MTJ9fSAgICAgICBcclxuICAgICAgLz48L3RkPlxyXG4gICAgICAgICA8dGQgPlxyXG4gICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCk9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICA8RGVsZXRlSWNvbiAgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInLGNvbG9yOidyZWQnfX0vPiBcclxuICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+PERyYWdJbmRpY2F0b3JSb3VuZGVkLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3toZWlnaHQ6JzEwMHB4J319PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWU/IChcclxuICAgICAgICAgICAgKCAgXHJcbiAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JywgZ2FwOiAnMTVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8SXRlbVRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICBpdGVtSWQ9e0l0ZW0uaXRlbU5hbWU/Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgaW5pdGlhbERhdGE9e0l0ZW0uZGF0YX1cclxuICAgICAgICAgICAgICAgICAgaW5pdGlhbFR5cGU9e0l0ZW0uY29udGVudFR5cGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaGlkZGVuPXtJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JyA6ICcnfSBzeD17eyBmb250U2l6ZTogJzIwcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e0l0ZW0uaXRlbU5hbWU/Lml0ZW1OYW1lPy50b1VwcGVyQ2FzZSgpIHx8ICcnfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURlc2NyaXB0aW9uJyBpZD0naXRlbURlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ31cclxuICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzQ0MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGUoSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZT8uX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJFZGl0XCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuSXRlbVVwZGF0ZShJdGVtLml0ZW1OYW1lPy5faWQpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8L0JveD4pXHJcbiAgICAgICAgICApOihcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInfX0+XHJcbiAgIDxBdXRvY29tcGxldGVcclxuICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17SXRlbUluZm9ybWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5pdGVtTmFtZSsnLycrb3B0aW9uLml0ZW1CcmFuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLG9wdGlvbik9PiAoPEJveCB7Li4ucHJvcHN9PntvcHRpb24uaXRlbU5hbWUrJy8nK29wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH0gey4uLnBhcmFtc30gcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucyx7aW5wdXRWYWx1ZX0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbik9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1CcmFuZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsbmV3VmFsdWUpPT5oYW5kbGVDaGFuZ2VJdGVtKEl0ZW0uaWRSb3csIG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHtjaGlsZHJlbiwgLi4ub3RoZXJ9KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17e2JhY2tncm91bmRDb2xvcjond2hpdGUnLCBsZWZ0OicwJyxtYXJnaW5Ub3A6JzEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9PmhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMihlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSk9PmUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREIE5FVyBJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NzBweCcsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpPT5oYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24oSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOidyZWxhdGl2ZScsIGZsb2F0OidyaWdodCd9fT4gXHJcbiAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17e2NvbG9yOicjMjAyYTVhJ319Lz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RvY2snIGlkPSdzdG9jaycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uc3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUXR5JyBpZD0naXRlbVF0eScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSxpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyB9fSAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUmF0ZScgaWQ9J2l0ZW1SYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1SYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURpc2NvdW50JyBpZD0naXRlbURpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScxIHRvIDUgJSdcclxuICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgPC90ZD5cclxuICAgICAgPHRkIGlkPSdhbW91bnRUb3RhbEludm9pY2UnPntJdGVtLml0ZW1BbW91bnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCcsJyl9PC90ZD5cclxuICAgICA8dGQgPlxyXG4gICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCk9PiBoYW5kbGVEZWxldGUoSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgIDxEZWxldGVJY29uICBzdHlsZT17e2N1cnNvcjoncG9pbnRlcicsY29sb3I6J3JlZCd9fS8+IFxyXG4gICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT4gIFxyXG4gICAgICAgICAgICAgICAgKX0gIFxyXG4gICAgICAgICAgICA8L0Ryb3BwYWJsZT4gIFxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPiBcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZ2FwOicyMHB4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbid9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdub3RlJ1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdub3RlJyBcclxuICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nSW52b2ljZSBOb3RlJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXROb3RlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc1MCUnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyB9fSAgICAgICBcclxuICAgICAgICAgICAgICAvPlxyXG48dGFibGUgY2xhc3NOYW1lPVwiZmlyc3RUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3tib3JkZXJCb3R0b206JzFweCBzb2xpZCBibGFjayd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+U3ViLVRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICBpZD0nc3ViVG90YWwnXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT0nc3ViVG90YWwnIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N1YlRvdGFsfVxyXG4gICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e2JvcmRlckJvdHRvbTonMXB4IHNvbGlkIGJsYWNrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5TaGlwcGluZyBGZWVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgIGlkPSdzaGlwcGluZydcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdzaGlwcGluZycgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2hpcHBpbmd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRTaGlwcGluZyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPiAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nYWRqdXN0bWVudCcgaWQ9J2FkanVzdG1lbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRqdXN0bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldEFkanVzdG1lbnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzI1MHB4JywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3tib3JkZXJCb3R0b206JzFweCBzb2xpZCBibGFjayd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgaWQ9J2FkanVzdG1lbnROdW1iZXInXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT0nYWRqdXN0bWVudE51bWJlcidcclxuICAgICAgICAgICAgICAgIHZhbHVlPXthZGp1c3RtZW50TnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0QWRqdXN0bWVudE51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0J319PlRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICBpZD0ndG90YWxJbnZvaWNlJ1xyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9J3RvdGFsSW52b2ljZScgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWxJbnZvaWNlfVxyXG4gICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5BbW91bnQgUGFpZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgIDx0ZCAgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgIGlkPSd0b3RhbCdcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPSd0b3RhbCcgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvdGFsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7Ym9yZGVyQm90dG9tOicxcHggc29saWQgYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5CYWxhbmNlIER1ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgIDx0ZCAgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgIGlkPSdiYWxhbmNlRHVlJ1xyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9J2JhbGFuY2VEdWUnIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2JhbGFuY2VEdWV9XHJcbiAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjonbGVmdCd9fT5Ub3RhbCBJbiBXb3JkczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3RhbFdcIiBpZD1cInRvdGFsV1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsV30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Um93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvR3JpZD5cclxuICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgIGlkPSd0ZXJtcydcclxuICAgICAgICAgICAgICAgICAgbmFtZT0ndGVybXMnIFxyXG4gICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rlcm1zfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nSW52b2ljZSBUZXJtcydcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0VGVybXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzYwJScsIGJhY2tncm91bmRDb2xvcjond2hpdGUnIH19ICAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17e3dpZHRoOicxMDAlJ319PlNhdmU8L2J1dHRvbj5cclxuICAgIDwvR3JpZD4gICAgICAgXHJcbiAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxNb2RhbCAgXHJcbiAgICAgICAgb3Blbj17c2hvd01vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlUm93SWR9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVJvd0lkfSBzdHlsZT17eyBwb3NpdGlvbjoncmVsYXRpdmUnLCBmbG9hdDoncmlnaHQnfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7Y29sb3I6JyMyMDJhNWEnfX0vPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0JsYWNrVG9vbHRpcD4gIFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzeD17e2FsaWduSXRlbXM6J2NlbnRlcicscGFkZGluZzonMTVweCd9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgIDxUeXBvZ3JhcGh5PlBsZWFzZSBzZWxlY3QgdGhlIHJvdyB0byBhc3NpZ24gdGhlIHRvdGFsIHRvOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsPkl0ZW0gTmFtZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICBpZD1cIml0ZW1OYW1lUm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RhcmdldFJvd0lkfVxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRUYXJnZXRSb3dJZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpdGVtTmFtZVJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSXRlbSBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaXRlbXMubWFwKGl0ZW09PiAoXHJcbiAgICAgICAgICAgICAgICBpdGVtLmlkUm93ICE9PSBzZWxlY3RlZFJvd0lkICYmKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbS5pZFJvd30gdmFsdWU9e2l0ZW0uaWRSb3d9PntpdGVtLml0ZW1OYW1lLml0ZW1OYW1lfTwvTWVudUl0ZW0+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPiBcclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHMgPSB7MTJ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319IG9uQ2xpY2s9e2RlbGV0ZUl0ZW19PiBDb25maXJtIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgIDxNb2RhbCAgXHJcbiAgICAgICAgb3Blbj17b3BlbjF9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VVcGRhdGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVVwZGF0ZX0gc3R5bGU9e3sgcG9zaXRpb246J3JlbGF0aXZlJywgZmxvYXQ6J3JpZ2h0J319PiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17e2NvbG9yOicjMjAyYTVhJ319Lz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9CbGFja1Rvb2x0aXA+ICBcclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3thbGlnbkl0ZW1zOidjZW50ZXInLHBhZGRpbmc6JzE1cHgnfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICA8VHlwb2dyYXBoeT5EbyB5b3Ugd2FudCB0byBzdG9wIGNyZWF0aW5nIFF1b3RhdGlvbiA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgtMSl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319PlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VVcGRhdGV9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319Pk5vPC9idXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICAgICB9fVxyXG4gICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bG9hZGluZz8oPExvYWRlci8+XHJcbiAgICAgICAgICAgICAgICApOihcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3tjb2xvcjonZ3JlZW4nLGhlaWdodDonNDBweCcsIHdpZHRoOic0MHB4J319Lz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGdhcDonNjBweCcsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvRXN0aW1hdGVWaWV3QWRtaW5BbGwvJHtpZEludm9pY2V9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgIG9wZW49e0Vycm9yT3Blbk1vZGFsfVxyXG4gICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgICAgfX1cclxuICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xvYWRpbmc/KDxMb2FkZXIvPlxyXG4gICAgICAgICAgICAgICAgKTooXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJyx0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgPHA+PENhbmNlbEljb24gc3R5bGU9e3tjb2xvcjoncmVkJyxoZWlnaHQ6JzQwcHgnLCB3aWR0aDonNDBweCd9fS8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3tjb2xvcjoncmVkJ319PlNhdmluZyBGYWlsZWQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgIDxNb2RhbFxyXG4gICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgPlxyXG4gICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSBzdHlsZT17eyBwb3NpdGlvbjoncmVsYXRpdmUnLCBmbG9hdDoncmlnaHQnfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7Y29sb3I6JyMyMDJhNWEnfX0vPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzYwMHB4JywgcGFkZGluZzonMjBweCcsb3ZlcmZsb3c6J2hpZGRlbicsb3ZlcmZsb3dZOidzY3JvbGwnfX0+XHJcbiAgICAgICAgICAgIDxJdGVtRm9ybVZpZXcyIG9uQ3JlYXRlT3B0aW9uPXtoYW5kbGVDcmVhdGVJdGVtfSBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfS8+ICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L01vZGFsPlxyXG4gICAgPE1vZGFsXHJcbiAgICAgIG9wZW49e29wZW5JdGVtVXBkYXRlfVxyXG4gICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUl0ZW1VcGRhdGV9XHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgID5cclxuICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfSBzdHlsZT17eyBwb3NpdGlvbjoncmVsYXRpdmUnLCBmbG9hdDoncmlnaHQnfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7Y29sb3I6JyMyMDJhNWEnfX0vPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzYwMHB4JywgcGFkZGluZzonMjBweCcsb3ZlcmZsb3c6J2hpZGRlbicsb3ZlcmZsb3dZOidzY3JvbGwnfX0+XHJcbiAgICAgICAgICA8SXRlbVVwZGF0ZVZpZXcyIG9uQ2xvc2U9e2hhbmRsZUNsb3NlSXRlbVVwZGF0ZX0gaWQ9e2lkSXRlbX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnZlcnRUb0VzdGltYXRlXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uL2FwaUNvbmZpZyc7XG5cbmNvbnN0IEl0ZW1UaHVtYm5haWwgPSAoeyBpdGVtSWQsIGluaXRpYWxEYXRhLCBpbml0aWFsVHlwZSB9KSA9PiB7XG4gIGNvbnN0IFtzcmMsIHNldFNyY10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoSW1hZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAvLyAxLiBDaGVjayBmb3IgaW5pdGlhbERhdGEgKHBhc3NlZCBmcm9tIHNlYXJjaC9zaG9wKVxuICAgICAgaWYgKGluaXRpYWxEYXRhICYmIGluaXRpYWxUeXBlICYmIGluaXRpYWxEYXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGluaXRpYWxUeXBlICE9PSBcInVuZGVmaW5lZFwiICYmIGluaXRpYWxEYXRhICE9PSBcIm51bGxcIikge1xuICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxEYXRhID09PSAnc3RyaW5nJyAmJiBpbml0aWFsRGF0YS5sZW5ndGggPiA1MCkge1xuICAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGFscmVhZHkgYSBkYXRhIFVSTFxuICAgICAgICAgICBpZiAoaW5pdGlhbERhdGEuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgICBzZXRTcmMoaW5pdGlhbERhdGEpO1xuICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRTcmMoYGRhdGE6JHtpbml0aWFsVHlwZX07YmFzZTY0LCR7aW5pdGlhbERhdGF9YCk7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxEYXRhLmRhdGEpIHtcbiAgICAgICAgICAgLy8gSGFuZGxlIGJ1ZmZlciBvYmplY3QgaWYgaXQncyBub3QgY29udmVydGVkIHRvIHN0cmluZyB5ZXRcbiAgICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoaW5pdGlhbERhdGEuZGF0YSk7XG4gICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBpbml0aWFsVHlwZSB9KTtcbiAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHNldFNyYyhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAyLiBGYWxsYmFjayB0byBmZXRjaCBpZiBubyBpbml0aWFsIGRhdGEgb3IgaWYgaXQgd2FzIGludmFsaWRcbiAgICAgIGlmICghaXRlbUlkIHx8IGl0ZW1JZCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBpdGVtSWQgPT09IFwibnVsbFwiKSB7XG4gICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2l0ZW1JZH1gKTtcbiAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEgJiYgcmVzLmRhdGEuZGF0YS5kYXRhKSB7XG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkocmVzLmRhdGEuZGF0YS5kYXRhLmRhdGEpO1xuICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiByZXMuZGF0YS5kYXRhLmNvbnRlbnRUeXBlIH0pO1xuICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHNldFNyYyhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgb25saW5lIGltYWdlOlwiLCBlcnIpO1xuICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaEltYWdlKCk7XG4gIH0sIFtpdGVtSWQsIGluaXRpYWxEYXRhLCBpbml0aWFsVHlwZV0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8QXZhdGFyXG4gICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICBzcmM9e3NyY31cbiAgICAgIHN4PXt7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MCwgYmFja2dyb3VuZENvbG9yOiAnI2YwZjBmMCcsIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyB9fVxuICAgID5cbiAgICAgIHshc3JjICYmIDxTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gc3g9e3sgZm9udFNpemU6IDQwLCBjb2xvcjogJyM5OTknIH19IC8+fVxuICAgIDwvQXZhdGFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVRodW1ibmFpbDtcbiIsIid1c2Ugc3RyaWN0JzsgXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRvT3JkaW5hbDogcmVxdWlyZSgnLi90b09yZGluYWwnKSxcbiAgICB0b1dvcmRzOiByZXF1aXJlKCcuL3RvV29yZHMnKSxcbiAgICB0b1dvcmRzT3JkaW5hbDogcmVxdWlyZSgnLi90b1dvcmRzT3JkaW5hbCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBTaW1wbGlmaWVkIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL21hcmx1bjc4Lzg4NWViMDAyMWU5ODBjNmNlMGZiXG5mdW5jdGlvbiBpc0Zpbml0ZSh2YWx1ZSkge1xuICAgIHJldHVybiAhKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgdmFsdWUgIT09IHZhbHVlIHx8IHZhbHVlID09PSBJbmZpbml0eSB8fCB2YWx1ZSA9PT0gLUluZmluaXR5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Zpbml0ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSByZXF1aXJlKCcuL21heFNhZmVJbnRlZ2VyJyk7XG5cbmZ1bmN0aW9uIGlzU2FmZU51bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE1hdGguYWJzKHZhbHVlKSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2FmZU51bWJlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVORFNfV0lUSF9ET1VCTEVfWkVST19QQVRURVJOID0gLyhodW5kcmVkfHRob3VzYW5kfChtfGJ8dHJ8cXVhZHIpaWxsaW9uKSQvO1xudmFyIEVORFNfV0lUSF9URUVOX1BBVFRFUk4gPSAvdGVlbiQvO1xudmFyIEVORFNfV0lUSF9ZX1BBVFRFUk4gPSAveSQvO1xudmFyIEVORFNfV0lUSF9aRVJPX1RIUk9VR0hfVFdFTFZFX1BBVFRFUk4gPSAvKHplcm98b25lfHR3b3x0aHJlZXxmb3VyfGZpdmV8c2l4fHNldmVufGVpZ2h0fG5pbmV8dGVufGVsZXZlbnx0d2VsdmUpJC87XG52YXIgb3JkaW5hbExlc3NUaGFuVGhpcnRlZW4gPSB7XG4gICAgemVybzogJ3plcm90aCcsXG4gICAgb25lOiAnZmlyc3QnLFxuICAgIHR3bzogJ3NlY29uZCcsXG4gICAgdGhyZWU6ICd0aGlyZCcsXG4gICAgZm91cjogJ2ZvdXJ0aCcsXG4gICAgZml2ZTogJ2ZpZnRoJyxcbiAgICBzaXg6ICdzaXh0aCcsXG4gICAgc2V2ZW46ICdzZXZlbnRoJyxcbiAgICBlaWdodDogJ2VpZ2h0aCcsXG4gICAgbmluZTogJ25pbnRoJyxcbiAgICB0ZW46ICd0ZW50aCcsXG4gICAgZWxldmVuOiAnZWxldmVudGgnLFxuICAgIHR3ZWx2ZTogJ3R3ZWxmdGgnXG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyLXdvcmQgaW50byBhbiBvcmRpbmFsIG51bWJlci13b3JkLlxuICogQGV4YW1wbGUgbWFrZU9yZGluYWwoJ29uZScpID0+ICdmaXJzdCdcbiAqIEBwYXJhbSB7c3RyaW5nfSB3b3Jkc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbWFrZU9yZGluYWwod29yZHMpIHtcbiAgICAvLyBFbmRzIHdpdGggKjAwICgxMDAsIDEwMDAsIGV0Yy4pIG9yICp0ZWVuICgxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSlcbiAgICBpZiAoRU5EU19XSVRIX0RPVUJMRV9aRVJPX1BBVFRFUk4udGVzdCh3b3JkcykgfHwgRU5EU19XSVRIX1RFRU5fUEFUVEVSTi50ZXN0KHdvcmRzKSkge1xuICAgICAgICByZXR1cm4gd29yZHMgKyAndGgnO1xuICAgIH1cbiAgICAvLyBFbmRzIHdpdGggKnkgKDIwLCAzMCwgNDAsIDUwLCA2MCwgNzAsIDgwLCA5MClcbiAgICBlbHNlIGlmIChFTkRTX1dJVEhfWV9QQVRURVJOLnRlc3Qod29yZHMpKSB7XG4gICAgICAgIHJldHVybiB3b3Jkcy5yZXBsYWNlKEVORFNfV0lUSF9ZX1BBVFRFUk4sICdpZXRoJyk7XG4gICAgfVxuICAgIC8vIEVuZHMgd2l0aCBvbmUgdGhyb3VnaCB0d2VsdmVcbiAgICBlbHNlIGlmIChFTkRTX1dJVEhfWkVST19USFJPVUdIX1RXRUxWRV9QQVRURVJOLnRlc3Qod29yZHMpKSB7XG4gICAgICAgIHJldHVybiB3b3Jkcy5yZXBsYWNlKEVORFNfV0lUSF9aRVJPX1RIUk9VR0hfVFdFTFZFX1BBVFRFUk4sIHJlcGxhY2VXaXRoT3JkaW5hbFZhcmlhbnQpO1xuICAgIH1cbiAgICByZXR1cm4gd29yZHM7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VXaXRoT3JkaW5hbFZhcmlhbnQobWF0Y2gsIG51bWJlcldvcmQpIHtcbiAgICByZXR1cm4gb3JkaW5hbExlc3NUaGFuVGhpcnRlZW5bbnVtYmVyV29yZF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFrZU9yZGluYWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxubW9kdWxlLmV4cG9ydHMgPSBNQVhfU0FGRV9JTlRFR0VSO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNGaW5pdGUgPSByZXF1aXJlKCcuL2lzRmluaXRlJyk7XG52YXIgaXNTYWZlTnVtYmVyID0gcmVxdWlyZSgnLi9pc1NhZmVOdW1iZXInKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBpbnRlZ2VyIGludG8gYSBzdHJpbmcgd2l0aCBhbiBvcmRpbmFsIHBvc3RmaXguXG4gKiBJZiBudW1iZXIgaXMgZGVjaW1hbCwgdGhlIGRlY2ltYWxzIHdpbGwgYmUgcmVtb3ZlZC5cbiAqIEBleGFtcGxlIHRvT3JkaW5hbCgxMikgPT4gJzEydGgnXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9PcmRpbmFsKG51bWJlcikge1xuICAgIHZhciBudW0gPSBwYXJzZUludChudW1iZXIsIDEwKTtcblxuICAgIGlmICghaXNGaW5pdGUobnVtKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ05vdCBhIGZpbml0ZSBudW1iZXI6ICcgKyBudW1iZXIgKyAnICgnICsgdHlwZW9mIG51bWJlciArICcpJ1xuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAoIWlzU2FmZU51bWJlcihudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgJ0lucHV0IGlzIG5vdCBhIHNhZmUgbnVtYmVyLCBpdOKAmXMgZWl0aGVyIHRvbyBsYXJnZSBvciB0b28gc21hbGwuJ1xuICAgICAgICApO1xuICAgIH1cbiAgICB2YXIgc3RyID0gU3RyaW5nKG51bSk7XG4gICAgdmFyIGxhc3RUd29EaWdpdHMgPSBNYXRoLmFicyhudW0gJSAxMDApO1xuICAgIHZhciBiZXR3ZWVuRWxldmVuQW5kVGhpcnRlZW4gPSBsYXN0VHdvRGlnaXRzID49IDExICYmIGxhc3RUd29EaWdpdHMgPD0gMTM7XG4gICAgdmFyIGxhc3RDaGFyID0gc3RyLmNoYXJBdChzdHIubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIHN0ciArIChiZXR3ZWVuRWxldmVuQW5kVGhpcnRlZW4gPyAndGgnXG4gICAgICAgICAgICA6IGxhc3RDaGFyID09PSAnMScgPyAnc3QnXG4gICAgICAgICAgICA6IGxhc3RDaGFyID09PSAnMicgPyAnbmQnXG4gICAgICAgICAgICA6IGxhc3RDaGFyID09PSAnMycgPyAncmQnXG4gICAgICAgICAgICA6ICd0aCcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvT3JkaW5hbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1ha2VPcmRpbmFsID0gcmVxdWlyZSgnLi9tYWtlT3JkaW5hbCcpO1xudmFyIGlzRmluaXRlID0gcmVxdWlyZSgnLi9pc0Zpbml0ZScpO1xudmFyIGlzU2FmZU51bWJlciA9IHJlcXVpcmUoJy4vaXNTYWZlTnVtYmVyJyk7XG5cbnZhciBURU4gPSAxMDtcbnZhciBPTkVfSFVORFJFRCA9IDEwMDtcbnZhciBPTkVfVEhPVVNBTkQgPSAxMDAwO1xudmFyIE9ORV9NSUxMSU9OID0gMTAwMDAwMDtcbnZhciBPTkVfQklMTElPTiA9IDEwMDAwMDAwMDA7ICAgICAgICAgICAvLyAgICAgICAgIDEuMDAwLjAwMC4wMDAgKDkpXG52YXIgT05FX1RSSUxMSU9OID0gMTAwMDAwMDAwMDAwMDsgICAgICAgLy8gICAgIDEuMDAwLjAwMC4wMDAuMDAwICgxMilcbnZhciBPTkVfUVVBRFJJTExJT04gPSAxMDAwMDAwMDAwMDAwMDAwOyAvLyAxLjAwMC4wMDAuMDAwLjAwMC4wMDAgKDE1KVxudmFyIE1BWCA9IDkwMDcxOTkyNTQ3NDA5OTI7ICAgICAgICAgICAgIC8vIDkuMDA3LjE5OS4yNTQuNzQwLjk5MiAoMTUpXG5cbnZhciBMRVNTX1RIQU5fVFdFTlRZID0gW1xuICAgICd6ZXJvJywgJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsICduaW5lJywgJ3RlbicsXG4gICAgJ2VsZXZlbicsICd0d2VsdmUnLCAndGhpcnRlZW4nLCAnZm91cnRlZW4nLCAnZmlmdGVlbicsICdzaXh0ZWVuJywgJ3NldmVudGVlbicsICdlaWdodGVlbicsICduaW5ldGVlbidcbl07XG5cbnZhciBURU5USFNfTEVTU19USEFOX0hVTkRSRUQgPSBbXG4gICAgJ3plcm8nLCAndGVuJywgJ3R3ZW50eScsICd0aGlydHknLCAnZm9ydHknLCAnZmlmdHknLCAnc2l4dHknLCAnc2V2ZW50eScsICdlaWdodHknLCAnbmluZXR5J1xuXTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBpbnRlZ2VyIGludG8gd29yZHMuXG4gKiBJZiBudW1iZXIgaXMgZGVjaW1hbCwgdGhlIGRlY2ltYWxzIHdpbGwgYmUgcmVtb3ZlZC5cbiAqIEBleGFtcGxlIHRvV29yZHMoMTIpID0+ICd0d2VsdmUnXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlclxuICogQHBhcmFtIHtib29sZWFufSBbYXNPcmRpbmFsXSAtIERlcHJlY2F0ZWQsIHVzZSB0b1dvcmRzT3JkaW5hbCgpIGluc3RlYWQhXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1dvcmRzKG51bWJlciwgYXNPcmRpbmFsKSB7XG4gICAgdmFyIHdvcmRzO1xuICAgIHZhciBudW0gPSBwYXJzZUludChudW1iZXIsIDEwKTtcblxuICAgIGlmICghaXNGaW5pdGUobnVtKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ05vdCBhIGZpbml0ZSBudW1iZXI6ICcgKyBudW1iZXIgKyAnICgnICsgdHlwZW9mIG51bWJlciArICcpJ1xuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAoIWlzU2FmZU51bWJlcihudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgJ0lucHV0IGlzIG5vdCBhIHNhZmUgbnVtYmVyLCBpdOKAmXMgZWl0aGVyIHRvbyBsYXJnZSBvciB0b28gc21hbGwuJ1xuICAgICAgICApO1xuICAgIH1cbiAgICB3b3JkcyA9IGdlbmVyYXRlV29yZHMobnVtKTtcbiAgICByZXR1cm4gYXNPcmRpbmFsID8gbWFrZU9yZGluYWwod29yZHMpIDogd29yZHM7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlV29yZHMobnVtYmVyKSB7XG4gICAgdmFyIHJlbWFpbmRlciwgd29yZCxcbiAgICAgICAgd29yZHMgPSBhcmd1bWVudHNbMV07XG5cbiAgICAvLyBXZeKAmXJlIGRvbmVcbiAgICBpZiAobnVtYmVyID09PSAwKSB7XG4gICAgICAgIHJldHVybiAhd29yZHMgPyAnemVybycgOiB3b3Jkcy5qb2luKCcgJykucmVwbGFjZSgvLCQvLCAnJyk7XG4gICAgfVxuICAgIC8vIEZpcnN0IHJ1blxuICAgIGlmICghd29yZHMpIHtcbiAgICAgICAgd29yZHMgPSBbXTtcbiAgICB9XG4gICAgLy8gSWYgbmVnYXRpdmUsIHByZXBlbmQg4oCcbWludXPigJ1cbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICB3b3Jkcy5wdXNoKCdtaW51cycpO1xuICAgICAgICBudW1iZXIgPSBNYXRoLmFicyhudW1iZXIpO1xuICAgIH1cblxuICAgIGlmIChudW1iZXIgPCAyMCkge1xuICAgICAgICByZW1haW5kZXIgPSAwO1xuICAgICAgICB3b3JkID0gTEVTU19USEFOX1RXRU5UWVtudW1iZXJdO1xuXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPCBPTkVfSFVORFJFRCkge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBURU47XG4gICAgICAgIHdvcmQgPSBURU5USFNfTEVTU19USEFOX0hVTkRSRURbTWF0aC5mbG9vcihudW1iZXIgLyBURU4pXTtcbiAgICAgICAgLy8gSW4gY2FzZSBvZiByZW1haW5kZXIsIHdlIG5lZWQgdG8gaGFuZGxlIGl0IGhlcmUgdG8gYmUgYWJsZSB0byBhZGQgdGhlIOKAnC3igJ1cbiAgICAgICAgaWYgKHJlbWFpbmRlcikge1xuICAgICAgICAgICAgd29yZCArPSAnLScgKyBMRVNTX1RIQU5fVFdFTlRZW3JlbWFpbmRlcl07XG4gICAgICAgICAgICByZW1haW5kZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9USE9VU0FORCkge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfSFVORFJFRDtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfSFVORFJFRCkpICsgJyBodW5kcmVkJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX01JTExJT04pIHtcbiAgICAgICAgcmVtYWluZGVyID0gbnVtYmVyICUgT05FX1RIT1VTQU5EO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9USE9VU0FORCkpICsgJyB0aG91c2FuZCwnO1xuXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPCBPTkVfQklMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfTUlMTElPTjtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfTUlMTElPTikpICsgJyBtaWxsaW9uLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9UUklMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfQklMTElPTjtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfQklMTElPTikpICsgJyBiaWxsaW9uLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9RVUFEUklMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfVFJJTExJT047XG4gICAgICAgIHdvcmQgPSBnZW5lcmF0ZVdvcmRzKE1hdGguZmxvb3IobnVtYmVyIC8gT05FX1RSSUxMSU9OKSkgKyAnIHRyaWxsaW9uLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8PSBNQVgpIHtcbiAgICAgICAgcmVtYWluZGVyID0gbnVtYmVyICUgT05FX1FVQURSSUxMSU9OO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9RVUFEUklMTElPTikpICtcbiAgICAgICAgJyBxdWFkcmlsbGlvbiwnO1xuICAgIH1cblxuICAgIHdvcmRzLnB1c2god29yZCk7XG4gICAgcmV0dXJuIGdlbmVyYXRlV29yZHMocmVtYWluZGVyLCB3b3Jkcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Xb3JkcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1ha2VPcmRpbmFsID0gcmVxdWlyZSgnLi9tYWtlT3JkaW5hbCcpO1xudmFyIHRvV29yZHMgPSByZXF1aXJlKCcuL3RvV29yZHMnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIG51bWJlciBpbnRvIG9yZGluYWwgd29yZHMuXG4gKiBAZXhhbXBsZSB0b1dvcmRzT3JkaW5hbCgxMikgPT4gJ3R3ZWxmdGgnXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9Xb3Jkc09yZGluYWwobnVtYmVyKSB7XG4gICAgdmFyIHdvcmRzID0gdG9Xb3JkcyhudW1iZXIpO1xuICAgIHJldHVybiBtYWtlT3JkaW5hbCh3b3Jkcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Xb3Jkc09yZGluYWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiRGVsZXRlSWNvbiIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJQYXBlciIsIlRhYmxlQ29udGFpbmVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsIkF1dG9jb21wbGV0ZSIsInN0eWxlZCIsIkJveCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJGYWRlIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwidXNlUGFyYW1zIiwiYXhpb3MiLCJBZGQiLCJBcnJvd1Vwd2FyZE91dGxpbmVkIiwiRHJhZ0luZGljYXRvclJvdW5kZWQiLCJFZGl0IiwiUmVtb3ZlQ2lyY2xlT3V0bGluZSIsIkVORFBPSU5UX1VSTCIsInY0IiwidXNlTmF2aWdhdGUiLCJOYXZMaW5rIiwiaW52YWxpZGF0ZUNhY2hlIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImRheWpzIiwiQXJyb3dCYWNrIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkxvYWRlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJDbG9zZSIsIkl0ZW1Gb3JtVmlldzIiLCJJdGVtVXBkYXRlVmlldzIiLCJudW1iZXJUb1dvcmRzIiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJhZ2dhYmxlIiwiRHJvcHBhYmxlIiwiSXRlbVRodW1ibmFpbCIsIkxpZ2h0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiQmxhY2tUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsInN0eWxlMiIsIkNvbnZlcnRUb0VzdGltYXRlIiwiX3VzZVBhcmFtcyIsImlkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0IiwidGhlbiIsInJlcyIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsImFwaVVybCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInB1cmNoYXNlTmFtZSIsInNldFB1cmNoYXNlTmFtZSIsImVzdGltYXRlRGF0ZSIsIkRhdGUiLCJub3ciLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImVzdGltYXRlU3ViamVjdCIsInNldEVzdGltYXRlU3ViamVjdCIsInN0YXR1cyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiY3VzdG9tZXJOYW1lMSIsInNldEN1c3RvbWVyTmFtZTEiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImVzdGltYXRlRGVmZWN0Iiwic2V0RXN0aW1hdGVEZWZlY3QiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsIkl0ZW1JbmZvcm1hdGlvbiIsInNldEl0ZW1JbmZvcm1hdGlvbiIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIm5vdGUiLCJzZXROb3RlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInRlcm1zIiwic2V0VGVybXMiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwicHJvamVjdE5hbWUiLCJzZXRQcm9qZWN0TmFtZSIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJpdGVtcyIsIlNldEl0ZW1zIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInN1YlRvdGFsIiwic2V0U3ViVG90YWwiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwidG90YWwiLCJzZXRUb3RhbCIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJzaGlwcGluZyIsInNldFNoaXBwaW5nIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImFkanVzdG1lbnQiLCJzZXRBZGp1c3RtZW50IiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsImFkanVzdG1lbnROdW1iZXIiLCJzZXRBZGp1c3RtZW50TnVtYmVyIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsInRvdGFsSW52b2ljZSIsInNldFRvdGFsSW52b2ljZSIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJiYWxhbmNlRHVlIiwic2V0QmFsYW5jZUR1ZSIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJ0b3RhbFciLCJzZXRUb3RhbFciLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwiZXN0aW1hdGVOdW1iZXIiLCJzZXRFc3RpbWF0ZU51bWJlciIsImRhdGVDb21tZW50IiwiZm9ybWF0IiwiQ3JlYXRlIiwicGVyc29uIiwiZXN0aW1hdGVOYW1lIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJuZXdOdW1iZXIiLCJtYXAiLCJyb3ciLCJyZXN1bHQiLCJyZXZlcnNlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImkiLCJfZSR0YXJnZXQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsaXN0IiwiTWF0aCIsInJvdW5kIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsImN1c3RvbWVyTmFtZSIsInNldEN1c3RvbWVyTmFtZSIsIl9yZXMkZGF0YSIsImZpbHRlciIsIl9pZCIsImN1c3RvbWVyRnVsbE5hbWUiLCJjb21wYW55TmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0NpdHkiLCJhZGRJdGVtIiwiaWRSb3ciLCJpdGVtTmFtZSIsIml0ZW1EZXNjcmlwdGlvbiIsIml0ZW1EaXNjb3VudCIsIml0ZW1RdHkiLCJpdGVtUmF0ZSIsIml0ZW1BbW91bnQiLCJ0b3RhbEFtb3VudCIsImRpc2NvdW50IiwicGVyY2VudGFnZSIsIml0ZW1CdXkiLCJpdGVtV2VpZ2h0IiwidG90YWxHZW5lcmFsZSIsInN0b2NrIiwiaXRlbU91dCIsIm5ld0l0ZW1PdXQiLCJhZGRJdGVtV2hpdGUiLCJuZXdEZXNjcmlwdGlvbiIsIml0ZW1Db3N0IiwidG90YWxDb3N0IiwiaGFuZGxlRHJhZ0VuZCIsImRlc3RpbmF0aW9uIiwibmV3SXRlbXMiLCJfbmV3SXRlbXMkc3BsaWNlIiwic3BsaWNlIiwic291cmNlIiwiaW5kZXgiLCJfbmV3SXRlbXMkc3BsaWNlMiIsInJlbW92ZWQiLCJyZXN1bHQxIiwicmVkdWNlIiwic3VtIiwidG9GaXhlZCIsIm5ld1RvdGFsIiwiTnVtYmVyIiwibmV3QmFsYW5jZSIsIndob2xlUGFydCIsImZsb29yIiwiZnJhY3Rpb25hbFBhcnQiLCJzcGxpdCIsIndob2xlV29yZHMiLCJ0b1dvcmRzIiwiZnJhY3Rpb25hbFdvcmRzIiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsIm9wZW4xIiwic2V0T3BlbjEiLCJoYW5kbGVPcGVuVXBkYXRlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZVVwZGF0ZSIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJzZWxlY3RlZFJvd0lkIiwic2V0U2VsZWN0ZWRSb3dJZCIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0IiwidGFyZ2V0Um93SWQiLCJzZXRUYXJnZXRSb3dJZCIsImhhbmRsZURlbGV0ZSIsImhhbmRsZUNsb3NlUm93SWQiLCJkZWxldGVJdGVtIiwibmV3Um93SWQiLCJzZWxlY3RSb3ciLCJmaW5kIiwiaXRlbSIsInRhcmdldFJvdyIsIm5ld1JhdGUiLCJuZXdUb3RhbEFtb3VudCIsImRpc2NvdW50VGFyZ2V0IiwibmV3UGVyY2VudGFnZSIsIm5ld1RvdGFsRyIsInVwZGF0ZVJhdGUiLCJfb2JqZWN0U3ByZWFkIiwiSXRlbSIsImhhbmRsZUNoYW5nZUl0ZW0iLCJuZXdWYWx1ZSIsInNlbGVjdGVkT3B0aW9ucyIsIm9wdGlvbiIsIml0ZW1Db3N0UHJpY2UiLCJpdGVtU2VsbGluZ1ByaWNlIiwic3RvY2tPbkhhbmQiLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlIiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsIm9wZW5JdGVtVXBkYXRlIiwic2V0T3Blbkl0ZW1VcGRhdGUiLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4IiwiaWRJdGVtIiwic2V0SWRJdGVtIiwiaGFuZGxlT3Blbkl0ZW1VcGRhdGUiLCJfcmVmNSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUNsb3NlSXRlbVVwZGF0ZSIsIl9yZWY2IiwiX3JvdyRpdGVtTmFtZSIsImNvc3RSYXRlIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsIm9wZW5BdXRvY29tcGxldGUyIiwic2V0T3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlQ3JlYXRlSXRlbSIsIm5ld0l0ZW0iLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0IiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2IiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlQ2xvc2VFcnJvciIsImhhbmRsZURlY2lzaW9uIiwiaGlzdG9yeSIsImJhY2siLCJoYW5kbGVVcGRhdGVRdHkiLCJfcmVmNyIsImluaXRpYWxTdGF0ZUlkIiwiUXR5VXBkYXRlIiwiUXR5TmV3IiwiZm9yRWFjaCIsImlkcyIsImdldFJlcXVlc3RJZCIsIk9iamVjdCIsInZhbHVlcyIsIl9yZWY4IiwiUHJvbWlzZSIsImFsbCIsInJlc3AiLCJ1cGRhdGVSZXF1ZXN0IiwiX3JlZjkiLCJwdXQiLCJfdXNlU3RhdGU1NyIsIl91c2VTdGF0ZTU4IiwiaWRJbnZvaWNlIiwic2V0SWRJbnZvaWNlIiwic3RhdHVzUHVyY2hhc2UiLCJoYW5kbGVTdWJtaXRTdGF0dXNVcGRhdGUiLCJSZWZlcmVuY2VJbmZvIiwiUmVmZXJlbmNlTmFtZSIsImhhbmRsZVN1Ym1pdCIsIl9yZWYwIiwicG9zdCIsIlJlZiIsImFsZXJ0IiwiX3gyIiwidmFyaWFudCIsInRpdGxlIiwib25DbGljayIsIm9uU3VibWl0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBsYWNlbWVudCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJzcGFjaW5nIiwiY29tcG9uZW50IiwieHMiLCJkaXNhYmxlZCIsImxhYmVsIiwic3giLCJodG1sRm9yIiwicmVxdWlyZWQiLCJ0eXBlIiwic3RhcnRBZG9ybm1lbnQiLCJkYXRlQWRhcHRlciIsImNvbXBvbmVudHMiLCJvbkNoYW5nZSIsInpJbmRleCIsImZsb2F0IiwicmlnaHQiLCJvbkRyYWdFbmQiLCJtYXJnaW5MZWZ0IiwiZHJvcHBhYmxlSWQiLCJwcm92aWRlZCIsInNuYXBzaG90IiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsImtleSIsImRyYWdnYWJsZUlkIiwiX0l0ZW0kaXRlbU5hbWUiLCJfSXRlbSRpdGVtTmFtZTIiLCJfSXRlbSRpdGVtTmFtZTMiLCJkcmFnZ2FibGVQcm9wcyIsInVuZGVmaW5lZCIsIkZyYWdtZW50IiwiZHJhZ0hhbmRsZVByb3BzIiwiY29sU3BhbiIsInNpemUiLCJjdXJzb3IiLCJoZWlnaHQiLCJnYXAiLCJpdGVtSWQiLCJpbml0aWFsRGF0YSIsImluaXRpYWxUeXBlIiwiY29udGVudFR5cGUiLCJmbGV4R3JvdyIsImZsZXhEaXJlY3Rpb24iLCJoaWRkZW4iLCJmb250V2VpZ2h0IiwidG9VcHBlckNhc2UiLCJtdWx0aWxpbmUiLCJyb3dzIiwiX0l0ZW0kaXRlbU5hbWU0IiwiZGlzYWJsZUNsZWFyYWJsZSIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIml0ZW1CcmFuZCIsInJlbmRlck9wdGlvbiIsInJlbmRlcklucHV0IiwicGFyYW1zIiwib25JbnB1dENoYW5nZSIsImV2ZW50IiwibmV3SW5wdXRWYWx1ZSIsImZpbHRlck9wdGlvbnMiLCJfcmVmMSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJQYXBlckNvbXBvbmVudCIsIl9yZWYxMCIsImNoaWxkcmVuIiwib3RoZXIiLCJfZXhjbHVkZWQzIiwibWFyZ2luVG9wIiwib25Nb3VzZURvd24iLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24iLCJwbGFjZWhvbGRlciIsInJlcGxhY2UiLCJib3JkZXJCb3R0b20iLCJ0ZXh0QWxpZ24iLCJhbGlnbiIsIm1heFJvd3MiLCJvcGVuIiwib25DbG9zZSIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsInRvIiwib3ZlcmZsb3ciLCJvdmVyZmxvd1kiLCJvbkNyZWF0ZU9wdGlvbiIsIkF2YXRhciIsIlNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiIsInNyYyIsInNldFNyYyIsImZldGNoSW1hZ2UiLCJsZW5ndGgiLCJzdGFydHNXaXRoIiwiYnVmZmVyIiwiVWludDhBcnJheSIsImJsb2IiLCJCbG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlYWRBc0RhdGFVUkwiLCJlcnIiLCJib3JkZXIiXSwic291cmNlUm9vdCI6IiJ9