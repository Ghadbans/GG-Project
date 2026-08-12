"use strict";
exports.id = "src_js_AdminView1_PageView_CustomerVIew_CustomerInformationView_js";
exports.ids = ["src_js_AdminView1_PageView_CustomerVIew_CustomerInformationView_js"];
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

/***/ "./node_modules/@mui/icons-material/esm/Cached.js"
/*!********************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Cached.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z"
}), 'Cached'));

/***/ },

/***/ "./src/js/AdminView1/PageView/CustomerVIew/CustomerInformationView.js"
/*!****************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/CustomerVIew/CustomerInformationView.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/PrintHeader */ "./src/js/component/PrintHeader.js");
/* harmony import */ var _component_PrintFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/PrintFooter */ "./src/js/component/PrintFooter.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/Accordion */ "./node_modules/@mui/material/Accordion/Accordion.js");
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/material/AccordionSummary */ "./node_modules/@mui/material/AccordionSummary/AccordionSummary.js");
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/material/AccordionDetails */ "./node_modules/@mui/material/AccordionDetails/AccordionDetails.js");
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @mui/icons-material/Phone */ "./node_modules/@mui/icons-material/Phone.js");
/* harmony import */ var _mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @mui/icons-material/Web */ "./node_modules/@mui/icons-material/Web.js");
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @mui/icons-material/Email */ "./node_modules/@mui/icons-material/Email.js");
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../../../img/images.png */ "./src/js/img/images.png");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabContext/TabContext.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabList/TabList.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabPanel/TabPanel.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @mui/icons-material/LocalPrintshop */ "./node_modules/@mui/icons-material/LocalPrintshop.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/excel.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_79__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Cached.js");
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


























































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_32__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_42__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_43__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_32__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_42__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_43__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_32__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_42__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_43__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_32__["default"])(_ref7 => {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded4);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_42__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref8 => {
  var theme = _ref8.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_43__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_32__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_32__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_47__["default"], {
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
function CustomerInformationView() {
  var _customer$filter;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_38__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_38__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_56__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_56__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_57__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
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
        return _ref1.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var customerInfoU = grantAccess.filter(row => row.moduleName === "Customer" && row.access.editM === true);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    customer = _useState4[0],
    setCustomer = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loadingData = _useState6[0],
    setLoadingData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    selectOptions = _useState8[0],
    setSelectOptions = _useState8[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/customer");
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/customer"));
          setCustomer(res.data.data.reverse());
          setLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchData() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState0 = _slicedToArray(_useState9, 2),
    show = _useState0[0],
    setShow = _useState0[1];
  var handleShow = e => {
    setShow(e);
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    expanded = _React$useState2[0],
    setExpanded = _React$useState2[1];
  var handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  {/** search && Tab */}
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    value = _useState10[0],
    setValue = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    value2 = _useState12[0],
    setValue2 = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var selectedIndex = customer.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [customer, id]);
  var handleChange3 = (e, newValue) => {
    setValue(newValue);
    setSelectOptions('');
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
    setSelectOptions('');
  };
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    search = _useState14[0],
    setSearch = _useState14[1];
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
  };
  var newArray = search !== '' ? customer.filter(row => row.customerType.toLowerCase().includes(search.toLowerCase()) || row.Customer && row.Customer.toLowerCase().includes(search.toLowerCase()) || row.customerEmail && row.customerEmail.toLowerCase().includes(search.toLowerCase()) || row.customerDescription && row.customerDescription.toLowerCase().includes(search.toLowerCase())) : customer;
  {/** search && Tab End */}
  {/* Start Estimate Transaction Information */}
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    estimate = _useState16[0],
    setEstimate = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    purchase = _useState18[0],
    setPurchase = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    invoice = _useState20[0],
    setInvoice = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    invoice1 = _useState22[0],
    setInvoice1 = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    maintenance = _useState24[0],
    setMaintenance = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    payment = _useState26[0],
    setPayment = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    posHistory = _useState28[0],
    setPosHistory = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState30 = _slicedToArray(_useState29, 2),
    CustomerInfo = _useState30[0],
    setCustomerInfo = _useState30[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        try {
          var _estimateResponse$dat, _invoiceResponse$data, _invoiceResponse$data2, _purChaseResponse$dat, _maintenanceResponse$, _resPayment$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/get-customer/").concat(id));
          setCustomerInfo(res.data.data.Customer);
          var estimateResponse = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/estimation?summary=true"));
          setEstimate((_estimateResponse$dat = estimateResponse.data) === null || _estimateResponse$dat === void 0 || (_estimateResponse$dat = _estimateResponse$dat.data) === null || _estimateResponse$dat === void 0 ? void 0 : _estimateResponse$dat.filter(row => row.customerName._id === id).reverse());
          var invoiceResponse = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/invoice?summary=true"));
          setInvoice((_invoiceResponse$data = invoiceResponse.data) === null || _invoiceResponse$data === void 0 || (_invoiceResponse$data = _invoiceResponse$data.data) === null || _invoiceResponse$data === void 0 ? void 0 : _invoiceResponse$data.filter(row => row.customerName._id === id).reverse());
          setInvoice1((_invoiceResponse$data2 = invoiceResponse.data) === null || _invoiceResponse$data2 === void 0 || (_invoiceResponse$data2 = _invoiceResponse$data2.data) === null || _invoiceResponse$data2 === void 0 ? void 0 : _invoiceResponse$data2.filter(row => row.customerName._id === id && (row.status === 'Sent' || row.status === 'Paid' || row.status === 'Partially-Paid')));
          var purChaseResponse = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/purchase?summary=true"));
          setPurchase((_purChaseResponse$dat = purChaseResponse.data) === null || _purChaseResponse$dat === void 0 || (_purChaseResponse$dat = _purChaseResponse$dat.data) === null || _purChaseResponse$dat === void 0 ? void 0 : _purChaseResponse$dat.filter(row => row.customerName._id === id).reverse());
          var maintenanceResponse = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/maintenance?summary=true"));
          setMaintenance((_maintenanceResponse$ = maintenanceResponse.data) === null || _maintenanceResponse$ === void 0 || (_maintenanceResponse$ = _maintenanceResponse$.data) === null || _maintenanceResponse$ === void 0 ? void 0 : _maintenanceResponse$.filter(row => row.customerName._id === id).reverse());
          var resPayment = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/payment"));
          setPayment((_resPayment$data = resPayment.data) === null || _resPayment$data === void 0 || (_resPayment$data = _resPayment$data.data) === null || _resPayment$data === void 0 ? void 0 : _resPayment$data.filter(row => row.customerName._id === id));
          // Fetch POS
          var resPos = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/pos?summary=true"));
          if (resPos.data && resPos.data.data) {
            var _resPos$data;
            setPosHistory((_resPos$data = resPos.data) === null || _resPos$data === void 0 || (_resPos$data = _resPos$data.data) === null || _resPos$data === void 0 ? void 0 : _resPos$data.filter(row => row.customerName && row.customerName._id === id).reverse());
          }
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchData() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchData();
  }, [id]);
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(() => {
      var storedQuick = JSON.parse(localStorage.getItem('StartDateStatement'));
      return new Date(storedQuick);
    }),
    _useState32 = _slicedToArray(_useState31, 2),
    startDate = _useState32[0],
    setStartDate = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(() => {
      var storedQuickFrom = JSON.parse(localStorage.getItem('FromDateStatement'));
      return new Date(storedQuickFrom);
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    fromDate = _useState34[0],
    setFromDate = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(() => {
      var storedQuickEnd = JSON.parse(localStorage.getItem('EndDateStatement'));
      return new Date(storedQuickEnd);
    }),
    _useState36 = _slicedToArray(_useState35, 2),
    endDate = _useState36[0],
    setEndDate = _useState36[1];
  var handleChangeDate = date => {
    setStartDate(date);
    localStorage.setItem('StartDateStatement', JSON.stringify(date));
  };
  var handleChangeDateFrom = date => {
    setFromDate(date);
    localStorage.setItem('FromDateStatement', JSON.stringify(date));
  };
  var handleChangeDateEnd = date => {
    setEndDate(date);
    localStorage.setItem('EndDateStatement', JSON.stringify(date));
  };
  {/** Year Statement start */}
  var statement = [];
  invoice1.forEach(row => {
    statement.push({
      type: 'Invoice',
      date: row.invoiceDate,
      number: row.invoiceNumber,
      defect: row.invoiceDefect + ' / ' + row.invoiceSubject,
      amount: row.totalInvoice,
      balance: row.balanceDue,
      paidAmount: row.total,
      due: row.invoiceDueDate,
      status: row.status
    });
  });
  payment.forEach(row => {
    statement.push({
      type: 'Payment',
      date: row.paymentDate,
      number: row.paymentNumber,
      numberArray: row.TotalAmount,
      defect: row.modes,
      payment: row.amount - row.remaining,
      status: '',
      credit: row.remaining
    });
  });
  posHistory.forEach(row => {
    var usdAmount = row.rate > 0 ? row.totalInvoice / row.rate : 0;
    statement.push({
      type: 'POS',
      date: row.invoiceDate || row.paymentDate,
      number: row.factureNumber,
      defect: 'POS Sale',
      amount: usdAmount,
      payment: row.status === 'Paid' ? usdAmount : row.TotalAmountPaid / row.rate,
      status: row.status
    });
  });
  var balanceDue = 0;
  var filteredStatement = statement.filter(row => {
    var transactionYear = dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.date).format('YYYY');
    return transactionYear === dayjs__WEBPACK_IMPORTED_MODULE_53___default()(startDate).format('YYYY');
  });
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    filteredData = _useState38[0],
    setFilteredData = _useState38[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var headers = [];
    var currentDate = new Date(fromDate);
    while (currentDate <= endDate) {
      headers.push(currentDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setFilteredData(headers);
  }, [fromDate, endDate]);
  var previousYear = new Date(startDate).getFullYear() - 1;
  var prevBalance = 0;
  statement.forEach(row => {
    var credit = 0;
    var transaction = new Date(row.date).getFullYear();
    if (transaction <= previousYear) {
      if (row.type === 'Invoice') {
        prevBalance += parseFloat(row.amount);
      } else if (row.type === 'Payment') {
        prevBalance -= parseFloat(row.payment);
        credit = prevBalance;
        prevBalance = Math.max(prevBalance, 0);
      } else if (row.type === 'POS') {
        prevBalance += parseFloat(row.amount);
        prevBalance -= parseFloat(row.payment || 0);
      }
    }
  });
  var transactionYears = new Date(startDate).getFullYear();
  var lastYearInfo = {
    type: '***Opening Balance***',
    date: new Date(transactionYears, 0, 1),
    number: '',
    numberArray: [],
    defect: '',
    amount: prevBalance,
    status: ''
  };
  var newStatementInfo = [lastYearInfo, ...filteredStatement];
  var credit1 = 0;
  payment === null || payment === void 0 || payment.map((row, i) => {
    if (row.modes === 'Credit' || row.modes === 'Cash' && row.remaining > 0 || row.modes === 'Bank Transfer' && row.remaining > 0) {
      credit1 += parseFloat(row.remaining);
    } else if (row.modes === 'Credit-Account') {
      credit1 -= parseFloat(row.amount);
    }
    return credit1 < 0 ? 0 : credit1;
  });
  var credit2 = credit1.toFixed(2);
  console.log(credit2);
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState40 = _slicedToArray(_useState39, 2),
    isCredit = _useState40[0],
    setIsCredit = _useState40[1];
  var handleUpdateCredit = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        credit: credit2
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/update-customer/").concat(id), data);
        if (res) {
          setIsCredit('true');
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleUpdateCredit(_x) {
      return _ref13.apply(this, arguments);
    };
  }();
  {/** Year Statement end */}
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    newStatement = _useState42[0],
    setNewStatement = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState44 = _slicedToArray(_useState43, 2),
    AllStatement = _useState44[0],
    AllNewStatement = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState46 = _slicedToArray(_useState45, 2),
    OutStandStatement = _useState46[0],
    setOutStandNewStatement = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState48 = _slicedToArray(_useState47, 2),
    customStatement = _useState48[0],
    setCustomNewStatement = _useState48[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (selectOptions === 'Year') {
      AllNewStatement([]);
      setOutStandNewStatement([]);
      setCustomNewStatement([]);
      setNewStatement(newStatementInfo === null || newStatementInfo === void 0 ? void 0 : newStatementInfo.sort((a, b) => new Date(a.date) - new Date(b.date)));
    } else if (selectOptions === 'All') {
      setNewStatement([]);
      setOutStandNewStatement([]);
      setCustomNewStatement([]);
      AllNewStatement(statement === null || statement === void 0 ? void 0 : statement.sort((a, b) => new Date(a.date) - new Date(b.date)));
    } else if (selectOptions === 'All Outstanding') {
      setNewStatement([]);
      AllNewStatement([]);
      setCustomNewStatement([]);
      setOutStandNewStatement(statement.filter(row => row.status === 'Sent' || row.status === 'Partially-Paid').sort((a, b) => new Date(a.date) - new Date(b.date)));
    } else if (selectOptions === 'Custom') {
      setNewStatement([]);
      AllNewStatement([]);
      setOutStandNewStatement([]);
      setCustomNewStatement(statement.filter(row => filteredData.find(Item => dayjs__WEBPACK_IMPORTED_MODULE_53___default()(Item).format('DD/MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.date).format('DD/MM/YYYY'))).sort((a, b) => new Date(a.date) - new Date(b.date)));
    } else {
      setNewStatement([]);
      AllNewStatement([]);
      setOutStandNewStatement([]);
      setCustomNewStatement([]);
    }
  }, [selectOptions, filteredData]);
  {/** total year Start */}
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState50 = _slicedToArray(_useState49, 2),
    openingBalanceTotal = _useState50[0],
    setOpeningBalanceTotal = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState52 = _slicedToArray(_useState51, 2),
    InvoiceTotal = _useState52[0],
    setInvoiceTotal = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState54 = _slicedToArray(_useState53, 2),
    PaymentTotal = _useState54[0],
    setPaymentTotal = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState56 = _slicedToArray(_useState55, 2),
    totalBalance = _useState56[0],
    setTotalBalance = _useState56[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (selectOptions === 'Year') {
      var openingBalanceTotal1 = newStatement.length > 0 ? newStatement.filter(row => row.type === '***Opening Balance***').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0;
      setOpeningBalanceTotal(openingBalanceTotal1);
      var InvoiceTotal1 = newStatement.length > 0 ? newStatement.filter(row => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0;
      setInvoiceTotal(InvoiceTotal1);
      var PaymentTotal1 = newStatement.length > 0 ? newStatement.filter(row => row.type === 'Payment').reduce((sum, row) => sum + parseFloat(row.payment), 0) : 0;
      setPaymentTotal(PaymentTotal1);
      var totalBalance1 = openingBalanceTotal1 + InvoiceTotal1 - PaymentTotal1;
      setTotalBalance(totalBalance1);
    } else if (selectOptions === 'All') {
      setOpeningBalanceTotal(0);
      var _InvoiceTotal = AllStatement.length > 0 ? AllStatement.filter(row => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0;
      setInvoiceTotal(_InvoiceTotal);
      var _PaymentTotal = AllStatement.length > 0 ? AllStatement.filter(row => row.type === 'Payment').reduce((sum, row) => sum + parseFloat(row.payment), 0) : 0;
      setPaymentTotal(_PaymentTotal);
      var _totalBalance = _InvoiceTotal - _PaymentTotal;
      setTotalBalance(_totalBalance);
    } else if (selectOptions === 'All Outstanding') {
      setOpeningBalanceTotal(0);
      var _InvoiceTotal2 = OutStandStatement.length > 0 ? OutStandStatement.filter(row => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0;
      var InvoiceTotal2 = OutStandStatement.length > 0 ? OutStandStatement.filter(row => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.balance), 0) : 0;
      var InvoiceTotal3 = OutStandStatement.length > 0 ? OutStandStatement.filter(row => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.paidAmount), 0) : 0;
      setInvoiceTotal(_InvoiceTotal2);
      setPaymentTotal(InvoiceTotal3);
      setTotalBalance(InvoiceTotal2);
    } else if (selectOptions === 'Custom') {
      setOpeningBalanceTotal(0);
      var _InvoiceTotal3 = customStatement.length > 0 ? customStatement.filter(row => row.type === 'Invoice').reduce((sum, row) => sum + parseFloat(row.amount), 0) : 0;
      setInvoiceTotal(_InvoiceTotal3);
      var _PaymentTotal2 = customStatement.length > 0 ? customStatement.filter(row => row.type === 'Payment').reduce((sum, row) => sum + parseFloat(row.payment), 0) : 0;
      setPaymentTotal(_PaymentTotal2);
      var _totalBalance2 = _InvoiceTotal3 - _PaymentTotal2;
      setTotalBalance(_totalBalance2);
    }
  }, [selectOptions, newStatement, AllStatement, OutStandStatement, customStatement]);
  {/** total year end */}
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_57__.logOut)());
    navigate('/');
  };
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    anchorEl = _React$useState4[0],
    setAnchorEl = _React$useState4[1];
  var open = Boolean(anchorEl);
  var handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  var handleCloseMenu = () => {
    setAnchorEl(null);
  };
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_54__.useReactToPrint)({
    content: () => componentRef.current,
    documentTitle: 'Statement For ' + CustomerInfo,
    onBeforeGetContent: () => {
      var PAGE_HEIGHT = 1045;
      var printElement = componentRef.current;
      if (printElement) {
        printElement.classList.add("temp-class-for-height");
        var height = printElement.clientHeight;
        var numberOfPage = Math.ceil(height / PAGE_HEIGHT);
        if (numberOfPage > 1) {
          var _printElement$getElem, _printElement$getElem2;
          var heightWithSingleHeader = numberOfPage * PAGE_HEIGHT;
          var requiredHeight = heightWithSingleHeader;
          var headerHeight = (_printElement$getElem = printElement.getElementsByTagName("thead")) === null || _printElement$getElem === void 0 || (_printElement$getElem = _printElement$getElem[0]) === null || _printElement$getElem === void 0 ? void 0 : _printElement$getElem.clientHeight;
          var footerHeight = (_printElement$getElem2 = printElement.getElementsByTagName("tfoot")) === null || _printElement$getElem2 === void 0 || (_printElement$getElem2 = _printElement$getElem2[0]) === null || _printElement$getElem2 === void 0 ? void 0 : _printElement$getElem2.clientHeight;
          requiredHeight -= (numberOfPage - 1) * (headerHeight + footerHeight);
          printElement.style.height = "".concat(requiredHeight, "px");
        }
        printElement.classList.remove("temp-class-for-height");
      }
    },
    onAfterPrint: () => {
      var printElement = componentRef.current;
      if (printElement) {
        printElement.style.height = "auto";
      }
    }
  });
  var componentRef1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var handlePrint1 = (0,react_to_print__WEBPACK_IMPORTED_MODULE_54__.useReactToPrint)({
    content: () => componentRef1.current,
    documentTitle: 'Statement For ' + CustomerInfo,
    onBeforeGetContent: () => {
      var PAGE_HEIGHT = 1045;
      var printElement = componentRef1.current;
      if (printElement) {
        printElement.classList.add("temp-class-for-height");
        var height = printElement.clientHeight;
        var numberOfPage = Math.ceil(height / PAGE_HEIGHT);
        if (numberOfPage > 1) {
          var _printElement$getElem3, _printElement$getElem4;
          var heightWithSingleHeader = numberOfPage * PAGE_HEIGHT;
          var requiredHeight = heightWithSingleHeader;
          var headerHeight = (_printElement$getElem3 = printElement.getElementsByTagName("thead")) === null || _printElement$getElem3 === void 0 || (_printElement$getElem3 = _printElement$getElem3[0]) === null || _printElement$getElem3 === void 0 ? void 0 : _printElement$getElem3.clientHeight;
          var footerHeight = (_printElement$getElem4 = printElement.getElementsByTagName("tfoot")) === null || _printElement$getElem4 === void 0 || (_printElement$getElem4 = _printElement$getElem4[0]) === null || _printElement$getElem4 === void 0 ? void 0 : _printElement$getElem4.clientHeight;
          requiredHeight -= (numberOfPage - 1) * (headerHeight + footerHeight);
          printElement.style.height = "".concat(requiredHeight, "px");
        }
        printElement.classList.remove("temp-class-for-height");
      }
    },
    onAfterPrint: () => {
      var printElement = componentRef1.current;
      if (printElement) {
        printElement.style.height = "auto";
      }
    }
  });
  var handleOpenPrint = () => {
    handlePrint();
    setAnchorEl(null);
  };
  var handleOpenPrint1 = () => {
    handlePrint1();
    setAnchorEl(null);
  };
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState58 = _slicedToArray(_useState57, 2),
    show1 = _useState58[0],
    setShow1 = _useState58[1];
  var handleShow1 = e => {
    setShow1(e);
    setAnchorEl(null);
  };
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState60 = _slicedToArray(_useState59, 2),
    reason = _useState60[0],
    setReason = _useState60[1];
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState62 = _slicedToArray(_useState61, 2),
    Comments1 = _useState62[0],
    setComments = _useState62[1];
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState64 = _slicedToArray(_useState63, 2),
    notification = _useState64[0],
    setNotification = _useState64[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchComment = /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator(function* () {
        try {
          var _res$data2, _resNotification$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/comment"));
          var resp = (_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.filter(row => row.CommentInfo.idInfo === id);
          setComments(resp.reverse());
          var resNotification = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/notification"));
          setNotification((_resNotification$data = resNotification.data) === null || _resNotification$data === void 0 || (_resNotification$data = _resNotification$data.data) === null || _resNotification$data === void 0 ? void 0 : _resNotification$data.filter(row => row.idInfo === id));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchComment() {
        return _ref14.apply(this, arguments);
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
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    loading = _useState66[0],
    setLoading = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    loadingOpenModal = _useState68[0],
    setLoadingOpenModal = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState70 = _slicedToArray(_useState69, 2),
    ErrorOpenModal = _useState70[0],
    setErrorOpenModal = _useState70[1];
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
    if (isCredit === 'true') {
      window.location.reload();
    } else {
      setLoadingOpenModal(false);
    }
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  {/** Loading End */}
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_53___default()(Date.now());
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo,
        dateComment
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_39__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_40__.ENDPOINT_URL, "/create-comment/"), data);
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
    return function handleSubmitEdit(_x2) {
      return _ref15.apply(this, arguments);
    };
  }();
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState72 = _slicedToArray(_useState71, 2),
    customer2 = _useState72[0],
    SetCustomer2 = _useState72[1];
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState74 = _slicedToArray(_useState73, 2),
    show2 = _useState74[0],
    setShow2 = _useState74[1];
  var handleShow2 = e => {
    setShow2(e);
  };
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default().useState('1'),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    value3 = _React$useState6[0],
    setValue3 = _React$useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var result = localStorage.getItem('TabPanelCustomerView');
    if (result) {
      setValue3(result);
    }
  });
  var handleChange4 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('TabPanelCustomerView', changeValue);
  };
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    sideBar = _React$useState8[0],
    setSideBar = _React$useState8[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var amount1 = 0;
  var customRow = customStatement === null || customStatement === void 0 ? void 0 : customStatement.map((row, i) => {
    var _row$numberArray;
    var credit = 0;
    if (row.type === 'Invoice' || row.type === '***Opening Balance***') {
      amount1 += parseFloat(row.amount);
    } else if (row.type === 'Payment') {
      amount1 -= parseFloat(row.payment);
    } else if (row.type === 'POS') {
      amount1 += parseFloat(row.amount);
      amount1 -= parseFloat(row.payment || 0);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'Invoice' && 'Ref ' + row.defect + ' INV-' + String(row.number).padStart(6, '0') + ' - due on ' + dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.due).format('DD MMMM YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'Payment' && row.numberArray.length === 0 && row.credit > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.credit + ' In Advanced Payment (Credit) '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'Payment' && row.numberArray.length > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.payment + ' for payment of ' + ((_row$numberArray = row.numberArray) === null || _row$numberArray === void 0 ? void 0 : _row$numberArray.map(row2 => 'INV-' + String(row2.Ref).padStart(6, '0'))) + ' / Mode: ' + row.defect), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'POS' && 'POS-' + String(row.number).padStart(6, '0') + ' - ' + row.defect)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Invoice' || row.type === '***Opening Balance***' || row.type === 'POS' ? "$".concat((row.amount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Payment' || row.type === 'POS' ? "$".concat((row.payment || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, "$".concat(amount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))));
  });
  var amount2 = 0;
  var allStandingRow = OutStandStatement === null || OutStandStatement === void 0 ? void 0 : OutStandStatement.map((row, i) => {
    var _row$numberArray2, _row$numberArray3;
    if (row.type === 'Invoice' || row.type === '***Opening Balance***') {
      amount2 += parseFloat(row.balance);
    } else if (row.type === 'Payment') {
      amount2 -= parseFloat(row.payment);
    } else if (row.type === 'POS') {
      // For outstanding, POS is usually fully paid, so amount - payment = 0 if status is Paid.
      // If partially paid, balance should be row.amount - row.payment
      var posBalance = (row.amount || 0) - (row.payment || 0);
      amount2 += posBalance;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'Invoice' && 'Ref ' + row.defect + ' INV-' + String(row.number).padStart(6, '0') + ' - due on ' + dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.due).format('DD MMMM YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'Payment' && row.credit > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.credit + ' In Advanced Payment (Credit) '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'Payment' && ((_row$numberArray2 = row.numberArray) === null || _row$numberArray2 === void 0 ? void 0 : _row$numberArray2.length) > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.payment + ' for payment of ' + row.re + ((_row$numberArray3 = row.numberArray) === null || _row$numberArray3 === void 0 ? void 0 : _row$numberArray3.map(row2 => 'INV-' + String(row2.Ref).padStart(6, '0'))) + ' / Mode: ' + row.defect), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'POS' && 'POS-' + String(row.number).padStart(6, '0') + ' - ' + row.defect)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Invoice' || row.type === '***Opening Balance***' || row.type === 'POS' ? "$".concat((row.amount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Payment' || row.type === 'POS' ? "$".concat((row.payment || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : "$".concat((row.paidAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, "$".concat(amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))));
  });
  var amount3 = 0;
  var allRow = AllStatement === null || AllStatement === void 0 ? void 0 : AllStatement.map((row, i) => {
    var _row$numberArray4, _row$numberArray5;
    if (row.type === 'Invoice' || row.type === '***Opening Balance***') {
      amount3 += parseFloat(row.amount);
    } else if (row.type === 'Payment') {
      amount3 -= parseFloat(row.payment);
    } else if (row.type === 'POS') {
      amount3 += parseFloat(row.amount);
      amount3 -= parseFloat(row.payment || 0);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'Invoice' && 'Ref ' + row.defect + ' INV-' + String(row.number).padStart(6, '0') + ' - due on ' + dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.due).format('DD MMMM YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'Payment' && row.credit > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.credit + ' In Advanced Payment (Credit) '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'Payment' && ((_row$numberArray4 = row.numberArray) === null || _row$numberArray4 === void 0 ? void 0 : _row$numberArray4.length) > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.payment + ' for payment of ' + row.re + ((_row$numberArray5 = row.numberArray) === null || _row$numberArray5 === void 0 ? void 0 : _row$numberArray5.map(row2 => 'INV-' + String(row2.Ref).padStart(6, '0'))) + ' / Mode: ' + row.defect), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'POS' && 'POS-' + String(row.number).padStart(6, '0') + ' - ' + row.defect)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Invoice' || row.type === '***Opening Balance***' || row.type === 'POS' ? "$".concat((row.amount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Payment' || row.type === 'POS' ? "$".concat((row.payment || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, "$".concat(amount3.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))));
  });
  var amount4 = 0;
  var yearRow = newStatement === null || newStatement === void 0 ? void 0 : newStatement.map((row, i) => {
    var _row$numberArray6;
    var credit = 0;
    if (row.type === 'Invoice' || row.type === '***Opening Balance***') {
      amount4 += parseFloat(row.amount);
    } else if (row.type === 'Payment') {
      amount4 -= parseFloat(row.payment);
    } else if (row.type === 'POS') {
      amount4 += parseFloat(row.amount);
      amount4 -= parseFloat(row.payment || 0);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'Invoice' && 'Ref ' + row.defect + ' INV-' + String(row.number).padStart(6, '0') + ' - due on ' + dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.due).format('DD MMMM YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'Payment' && row.numberArray.length === 0 && row.credit > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.credit + ' In Advanced Payment (Credit) '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'Payment' && row.numberArray.length > 0 && 'PAY-' + String(row.number).padStart(6, '0') + ' $' + row.payment + ' for payment of ' + ((_row$numberArray6 = row.numberArray) === null || _row$numberArray6 === void 0 ? void 0 : _row$numberArray6.map(row2 => 'INV-' + String(row2.Ref).padStart(6, '0'))) + ' / Mode: ' + row.defect), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.type === 'POS' && 'POS-' + String(row.number).padStart(6, '0') + ' - ' + row.defect)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Invoice' || row.type === '***Opening Balance***' || row.type === 'POS' ? "$".concat((row.amount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, row.type === 'Payment' || row.type === 'POS' ? "$".concat((row.payment || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        borderBottom: '1px solid #DDD'
      }
    }, "$".concat(amount4.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_46__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_45__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_51__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Customer View"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => navigate('/CustomerViewAdmin')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_63__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_65__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_64__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_58__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_45__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_52__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_49__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_48__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_45__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_50__["default"], {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_59__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    spacing: 2
  }, show1 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h6"
  }, "All Customer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    value: value,
    onChange: handleChange3,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, customer === null || customer === void 0 ? void 0 : customer.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    key: index,
    label: row.Customer ? row.Customer : '',
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_41__.Link,
    to: "/CustomerInformationView/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show2 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => handleShow2(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_62__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    key: index,
    label: row.Customer ? row.Customer : '',
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_41__.Link,
    to: "/CustomerInformationView/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : '') : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      width: '100%',
      background: 'white'
    }
  }, customer === null || customer === void 0 || (_customer$filter = customer.filter(i => i._id === id)) === null || _customer$filter === void 0 ? void 0 : _customer$filter.map(i => {
    var _row, _row2, _data, _row3, _row4, _data2, _row5, _data3;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      key: i._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "itemInfoContainer2Head"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      sx: {
        fontWeight: 'bold'
      }
    }, i.customerFullName ? i.customerFullName.toUpperCase() : i.companyName.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      "aria-controls": open ? 'demo-customized-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open ? 'true' : undefined,
      variant: "contained",
      disableElevation: true,
      onClick: handleClick,
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_70__["default"], null),
      sx: {
        bgcolor: 'gray',
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray'
        }
      }
    }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      id: "demo-customized-menu",
      MenuListProps: {
        'aria-labelledby': 'demo-customized-button'
      },
      anchorEl: anchorEl,
      open: open,
      onClose: handleCloseMenu,
      TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_16__["default"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      disabled: customerInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
      to: "/CustomerFormUpdate/".concat(i._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_33__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_49__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      onClick: handleOpenPrint,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_78__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Print")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      onClick: handleOpenPrint1,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_78__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Print Payment")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_49__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      onClick: () => handleShow1(2)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "Comments"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      onClick: () => handleShow1(3)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "History"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_71__["default"], {
      value: value3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        borderBottom: 1,
        borderColor: 'divider'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_72__["default"], {
      onChange: handleChange4,
      "aria-label": "lab API tabs example",
      sx: {
        '& .MuiTabs-indicator': {
          backgroundColor: 'white',
          height: '0px'
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: "Transaction",
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: "Payment",
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: "Statement",
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: "POS History",
      value: "6"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_73__["default"], {
      value: "1",
      sx: {
        height: '550px',
        overflow: 'hidden',
        overflowY: 'scroll'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        textAlign: 'center'
      }
    }, "Customer Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, i.customerFullName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Company Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, i.companyName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, i.customerEmail)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, i.customerCompanyPhone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Phone2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, i.customerPhone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Billing Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, i.billingAddress.toUpperCase(), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, i.billingCity.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Shipping Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, i.shippingAddress.toUpperCase(), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, i.shippingCity.toUpperCase())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        textAlign: 'center'
      }
    }, "Currency & Terms")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Currency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, i.currency)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Terms"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, i.paymentTerms)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      style: {
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'center'
      }
    }, "Description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("pre", {
      style: {
        fontFamily: 'system-ui',
        color: 'black',
        fontSize: '15px'
      }
    }, i.customerDescription.toUpperCase()))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_73__["default"], {
      value: "2",
      sx: {
        height: '550px',
        overflow: 'hidden',
        overflowY: 'scroll'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_34__["default"], {
      expanded: expanded === 'panel1',
      onChange: handleChange('panel1'),
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_35__["default"], {
      expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_37__["default"], null)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Quotation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_36__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Quotation#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Quotation Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "left"
    }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], null, estimate === null || estimate === void 0 ? void 0 : estimate.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.estimateDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Q-", String(row.estimateNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, row.customerName.customerName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: row.status === "Draft" ? "gray" : row.status === "Sent" ? "blue" : row.status === "Decline" ? "red" : row.status === "Approved" ? "#339ba5" : row.status === "Invoiced" ? "#6a1b9a" : "black"
    }, row.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$"), " ", row.subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
      to: "/EstimateViewAdminAll/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_55__["default"], {
      style: {
        color: '#202a5a'
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      disabled: row.status !== 'Draft' && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
      to: "/EstimateInvoiceFormUpdate/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_33__["default"], {
      style: {
        color: 'gray'
      }
    })))))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_34__["default"], {
      expanded: expanded === 'panel2',
      onChange: handleChange('panel2'),
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_35__["default"], {
      expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_37__["default"], null)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Purchase Request")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_36__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Purchase#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Purchase Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "left"
    }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], null, purchase === null || purchase === void 0 ? void 0 : purchase.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.purchaseDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "PUR-", String(row.purchaseNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, row.customerName.customerName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: row.statusInfo !== undefined && row.statusInfo === "Pending" ? "gray" : row.statusInfo !== undefined && row.statusInfo === "On-Going" ? "blue" : row.statusInfo !== undefined && row.statusInfo === "Stopped" ? "red" : row.statusInfo !== undefined && row.statusInfo === "Pending" ? "Orange" : row.statusInfo !== undefined && row.statusInfo === "Completed" ? "green" : "black"
    }, row.statusInfo !== undefined ? row.statusInfo : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$"), " ", row.purchaseAmount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
      to: "/PurchasesViewAdminAll/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_55__["default"], {
      style: {
        color: '#202a5a'
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      disabled: row.status !== 'On-Going' && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
      to: "/PurchaseFormUpdate/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_33__["default"], {
      style: {
        color: 'gray'
      }
    })))))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_34__["default"], {
      expanded: expanded === 'panel3',
      onChange: handleChange('panel3'),
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_35__["default"], {
      expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_37__["default"], null)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Maintenance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_36__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Maintenance#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Maintenance Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "left"
    }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], null, maintenance === null || maintenance === void 0 ? void 0 : maintenance.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.serviceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "M-", String(row.serviceNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, row.customerName.customerName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: row.status === "Open" ? "blue" : row.status === "Pending" ? "#801313" : row.status === "Reschedule" ? "Orange" : row.status === "Cancel" ? "red" : row.status === "Close" ? "green" : "black"
    }, row.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$"), " ", row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
      to: "/MaintenanceViewInformation/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_55__["default"], {
      style: {
        color: '#202a5a'
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      disabled: row.status !== 'On-Going' && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
      to: "/MaintenanceUpdateView/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_33__["default"], {
      style: {
        color: 'gray'
      }
    })))))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_34__["default"], {
      expanded: expanded === 'panel4',
      onChange: handleChange('panel4'),
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_35__["default"], {
      expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_37__["default"], null)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Invoice")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_36__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Invoice #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "Invoice Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "left"
    }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], null, invoice === null || invoice === void 0 ? void 0 : invoice.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, "INV-", String(row.invoiceNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, row.customerName.customerName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: row.status === "Draft" ? "gray" : row.status === "Sent" ? "blue" : row.status === "Decline" ? "red" : row.status === "Pending" ? "#801313" : row.status === "Paid" ? "#4caf50" : row.status === "Partially-Paid" ? "#fb8c00" : "black"
    }, row.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center"
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$"), " ", row.subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      align: "center",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
      to: "/InvoiceViewAdminAll/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_55__["default"], {
      style: {
        color: '#202a5a'
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      disabled: row.status !== 'Draft' && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
      to: "/InvoiceFormUpdate/".concat(row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_33__["default"], {
      style: {
        color: 'gray'
      }
    }))))))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_73__["default"], {
      value: "3",
      sx: {
        height: '550px',
        overflow: 'hidden',
        overflowY: 'scroll'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      hidden: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      ref: componentRef1,
      className: "invoicedetails"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "invoiceTest"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      branchId: typeof row !== "undefined" ? (_row = row) === null || _row === void 0 ? void 0 : _row.branchId : ""
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "invoicehr"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "content",
      style: {
        marginBottom: '20px',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("address", {
      style: {
        position: 'relative',
        lineHeight: 1.35,
        width: '60%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '13px'
      }
    }, "TO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '13px'
      }
    }, i.Customer.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontSize: '13px'
      }
    }, i.billingAddress.toUpperCase(), ", ", i.billingCity.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
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
    }, "Payment Summary"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "All Transaction")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
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
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, " Amount Received"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, " Amount Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Credit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, payment.map(row => {
      var _row$TotalAmount;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: row._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left'
        }
      }, "PAY-", String(row.paymentNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          borderLeft: '1px solid #DDD'
        }
      }, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.paymentDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          borderLeft: '1px solid #DDD'
        }
      }, row.modes.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          borderLeft: '1px solid #DDD'
        }
      }, row.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          borderLeft: '1px solid #DDD'
        }
      }, (_row$TotalAmount = row.TotalAmount) === null || _row$TotalAmount === void 0 ? void 0 : _row$TotalAmount.map((Item, i) => {
        var _relatedInvoice$invoi;
        var relatedInvoice = invoice === null || invoice === void 0 ? void 0 : invoice.find(row1 => row1._id === Item.id);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.reason === "Project" ? "P-" : "INV-", String(Item.Ref).padStart(6, '0'), " / ", relatedInvoice === null || relatedInvoice === void 0 || (_relatedInvoice$invoi = relatedInvoice.invoiceSubject) === null || _relatedInvoice$invoi === void 0 ? void 0 : _relatedInvoice$invoi.toUpperCase(), ":  $", Item.total));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, row.remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 4
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "Total Credit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "$", i.credit !== undefined ? i.credit : 0))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        position: 'relative',
        marginTop: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintFooter__WEBPACK_IMPORTED_MODULE_1__["default"], {
      branchId: typeof row !== "undefined" ? (_row2 = row) === null || _row2 === void 0 ? void 0 : _row2.branchId : typeof data !== "undefined" ? (_data = data) === null || _data === void 0 ? void 0 : _data.branchId : ""
    }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      sx: {
        position: 'relative',
        float: 'right',
        width: '170px',
        height: '55px',
        backgroundColor: '#202a5a',
        color: 'white',
        marginBottom: '10px',
        textAlign: 'center',
        width: '300px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: {
        display: 'flex',
        gap: '40px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_81__["default"], {
      sx: {
        cursor: 'pointer'
      },
      onClick: handleUpdateCredit
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Credit: $", i.credit !== undefined ? i.credit : 0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
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
    }, "Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, " Amount Received"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, " Amount Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Credit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, " Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, payment.map(row => {
      var _row$TotalAmount2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: row._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '50px'
        }
      }, "PAY-", String(row.paymentNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '30px',
          borderLeft: '1px solid #DDD'
        }
      }, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.paymentDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '50px',
          borderLeft: '1px solid #DDD'
        }
      }, row.modes.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, row.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, (_row$TotalAmount2 = row.TotalAmount) === null || _row$TotalAmount2 === void 0 ? void 0 : _row$TotalAmount2.map((Item, i) => {
        var _relatedInvoice$invoi2;
        var relatedInvoice = invoice === null || invoice === void 0 ? void 0 : invoice.find(row1 => row1._id === Item.id);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.prefix || (relatedInvoice !== null && relatedInvoice !== void 0 && relatedInvoice.ReferenceName2 || (relatedInvoice === null || relatedInvoice === void 0 ? void 0 : relatedInvoice.invoicePurchase) === 'Purchased' ? "P-" : row.reason === "Project" ? "P-" : "INV-"), String(Item.Ref).padStart(6, '0'), " / ", relatedInvoice === null || relatedInvoice === void 0 || (_relatedInvoice$invoi2 = relatedInvoice.invoiceSubject) === null || _relatedInvoice$invoi2 === void 0 ? void 0 : _relatedInvoice$invoi2.toUpperCase(), ":  $", Item.total));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '100px',
          borderLeft: '1px solid #DDD'
        }
      }, row.remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          width: '40px',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
        title: "View"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        disabled: user.data.role === 'User'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
        to: "/PaymentInformationView/".concat(row._id),
        className: "LinkName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_55__["default"], {
        style: {
          color: '#202a5a'
        }
      })))))));
    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_73__["default"], {
      value: "5",
      sx: {
        height: '550px',
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
      id: "select"
    }, "select"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: "selectOptions",
      value: selectOptions,
      onChange: e => setSelectOptions(e.target.value),
      name: "selectOptions",
      label: "select"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      value: "Year"
    }, "Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      value: "Custom"
    }, "Custom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      value: "All Outstanding"
    }, "All Outstanding"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      value: "All"
    }, "All"))), selectOptions === 'Year' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_74__.LocalizationProvider, {
      dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_76__.AdapterDayjs
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_77__.DemoContainer, {
      components: ['DatePicker', 'DatePicker']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_75__.DatePicker, {
      required: true,
      name: "startDate",
      value: dayjs__WEBPACK_IMPORTED_MODULE_53___default()(startDate),
      onChange: date => handleChangeDate(date),
      format: "YYYY",
      label: '"year"',
      views: ['year']
    }))), selectOptions === 'Custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_74__.LocalizationProvider, {
      dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_76__.AdapterDayjs
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_77__.DemoContainer, {
      components: ['DatePicker', 'DatePicker']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_75__.DatePicker, {
      required: true,
      name: "fromDate",
      label: "From Date",
      value: dayjs__WEBPACK_IMPORTED_MODULE_53___default()(fromDate),
      onChange: date => handleChangeDateFrom(date),
      format: "DD/MM/YYYY"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_74__.LocalizationProvider, {
      dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_76__.AdapterDayjs
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_77__.DemoContainer, {
      components: ['DatePicker', 'DatePicker']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_75__.DatePicker, {
      required: true,
      name: "endDate",
      label: "To Date",
      value: dayjs__WEBPACK_IMPORTED_MODULE_53___default()(endDate),
      onChange: date => handleChangeDateEnd(date),
      format: "DD/MM/YYYY"
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      hidden: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      ref: componentRef,
      className: "invoicedetails"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "invoiceTest"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      branchId: typeof row !== "undefined" ? (_row3 = row) === null || _row3 === void 0 ? void 0 : _row3.branchId : ""
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "invoicehr"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "content",
      style: {
        marginBottom: '20px',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("address", {
      style: {
        position: 'relative',
        lineHeight: 1.35,
        width: '60%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '13px'
      }
    }, "TO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '13px'
      }
    }, i.Customer.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontSize: '13px'
      }
    }, i.billingAddress.toUpperCase(), ", ", i.billingCity.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
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
    }, selectOptions === 'Year' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(new Date(transactionYears, 0, 1)).format('DD/MM/YYYY'), " To ", dayjs__WEBPACK_IMPORTED_MODULE_53___default()(new Date(transactionYears, 11, 31)).format('DD/MM/YYYY')), selectOptions === 'Custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(fromDate).format('DD/MM/YYYY'), " To ", dayjs__WEBPACK_IMPORTED_MODULE_53___default()(endDate).format('DD/MM/YYYY')), selectOptions === 'All' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "All Transaction"), selectOptions === 'All Outstanding' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "All Outstanding Invoice")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Opening Balance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$".concat(openingBalanceTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Invoiced Amount")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$".concat(InvoiceTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Amount Paid")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$".concat(PaymentTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Balance Due")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$".concat(totalBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
      style: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
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
        width: '400px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100px',
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
    }, "Balance"))), selectOptions === 'Year' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, yearRow, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "$".concat(amount4.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), selectOptions === 'All' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, allRow, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "$".concat(amount3.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), selectOptions === 'All Outstanding' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, allStandingRow, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "$".concat(amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), selectOptions === 'Custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, customRow, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "$".concat(amount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        position: 'relative',
        marginTop: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintFooter__WEBPACK_IMPORTED_MODULE_1__["default"], {
      branchId: typeof row !== "undefined" ? (_row4 = row) === null || _row4 === void 0 ? void 0 : _row4.branchId : typeof data !== "undefined" ? (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.branchId : ""
    }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        padding: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        padding: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      branchId: typeof row !== "undefined" ? (_row5 = row) === null || _row5 === void 0 ? void 0 : _row5.branchId : typeof data !== "undefined" ? (_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.branchId : ""
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '13px'
      }
    }, "TO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold',
        fontSize: '13px'
      }
    }, i.Customer.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontSize: '13px'
      }
    }, i.billingAddress.toUpperCase(), ", ", i.billingCity.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
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
    }, selectOptions === 'Year' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(new Date(transactionYears, 0, 1)).format('DD/MM/YYYY'), " To ", dayjs__WEBPACK_IMPORTED_MODULE_53___default()(new Date(transactionYears, 11, 31)).format('DD/MM/YYYY')), selectOptions === 'Custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(fromDate).format('DD/MM/YYYY'), " To ", dayjs__WEBPACK_IMPORTED_MODULE_53___default()(endDate).format('DD/MM/YYYY')), selectOptions === 'All' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "All Transaction"), selectOptions === 'All Outstanding' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "All Outstanding Invoice")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Opening Balance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$".concat(openingBalanceTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Invoiced Amount")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$".concat(InvoiceTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Amount Paid")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$".concat(PaymentTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Balance Due")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$".concat(totalBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
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
        width: '400px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100px',
        borderBottom: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100px',
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
    }, "Balance"))), selectOptions === 'Year' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, yearRow, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "$".concat(amount4.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), selectOptions === 'All' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, allRow, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "$".concat(amount3.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), selectOptions === 'All Outstanding' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, allStandingRow, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "$".concat(amount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), selectOptions === 'Custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, customRow, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2
    }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "$".concat(amount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "footerinvoice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_68__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Contact@GlobalGate.Sarl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_66__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "+243 827 722 222")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_67__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "www.GlobalGate.sarl")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_73__["default"], {
      value: "6"
    }, (() => {
      var grandTotal = posHistory.reduce((sum, row) => {
        var usdAmount = row.rate > 0 ? row.totalInvoice / row.rate : 0;
        return sum + usdAmount;
      }, 0);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        style: {
          padding: '10px',
          textAlign: 'right',
          backgroundColor: '#f5f5f5',
          borderRadius: '5px',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "h6",
        style: {
          color: '#202a5a',
          fontWeight: 'bold'
        }
      }, "Grand Total: $", grandTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    })(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      component: _mui_material__WEBPACK_IMPORTED_MODULE_29__["default"],
      style: {
        boxShadow: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, "Invoice #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, "Total (USD)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], null, posHistory.length > 0 ? posHistory.map(row => {
      var usdAmount = row.rate > 0 ? row.totalInvoice / row.rate : 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
        key: row._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, row.factureNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        style: {
          padding: '5px',
          borderRadius: '5px',
          backgroundColor: row.status === 'Paid' ? 'green' : row.status === 'Partially-Paid' ? 'orange' : 'red',
          color: 'white'
        }
      }, row.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, "$", usdAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
      colSpan: 4,
      align: "center"
    }, "No POS History Found")))))))));
  })))), show1 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_62__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, Item.dateComment ? dayjs__WEBPACK_IMPORTED_MODULE_53___default()(Item.dateComment).format('DD/MM') : '', " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "", show1 === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_62__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.person + ' on ' + dayjs__WEBPACK_IMPORTED_MODULE_53___default()(row.dateNotification).format('DD/MMMM'), ": ", row.reason))))))) : ""))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_30__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_59__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_60__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), isCredit === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Data Updated successfully") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_30__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_59__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_61__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerInformationView);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfQ3VzdG9tZXJWSWV3X0N1c3RvbWVySW5mb3JtYXRpb25WaWV3X2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyxnQjs7Ozs7Ozs7OztBQ1pZO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyx3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ1pEOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLFlBQVksRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05iLENBQXlEO0FBQ0E7QUFDQztBQUNEO0FBQ2xDO0FBQ0U7QUFDMkI7QUFDYztBQUNRO0FBQytTO0FBQ3pVO0FBQ0E7QUFDYztBQUNBO0FBQ0Y7QUFDZjtBQUNuQjtBQUN3QjtBQUNXO0FBQ0c7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ0k7QUFDSTtBQUNBO0FBQ2M7QUFDSTtBQUN4QztBQUNxQztBQUNIO0FBQ0w7QUFDK0I7QUFDdEM7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O0lBQU87RUFBRSxDQUFFLENBQUksQ0FBQyxlQUM3RTNJLDBEQUFBLGFBQUksdUJBQXlCLENBQUMsZUFDOUJBLDBEQUFBO0lBQVF5RyxTQUFTLEVBQUMsYUFBYTtJQUFDd2UsT0FBTyxFQUFFekQ7RUFBaUIsR0FBQyxXQUVuRCxDQUNMLENBRUosQ0FDQSxDQUNILENBQUM7QUFFWDtBQUVBLGlFQUFlOVcsdUJBQXVCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93bi5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0NhY2hlZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvQ3VzdG9tZXJWSWV3L0N1c3RvbWVySW5mb3JtYXRpb25WaWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwelwiXG59KSwgJ0Fycm93QmFjaycpOyIsIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk03LjQxIDguNTkgMTIgMTMuMTdsNC41OS00LjU4TDE4IDEwbC02IDYtNi02elwiXG59KSwgJ0tleWJvYXJkQXJyb3dEb3duJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJtMTkgOC00IDRoM2MwIDMuMzEtMi42OSA2LTYgNi0xLjAxIDAtMS45Ny0uMjUtMi44LS43bC0xLjQ2IDEuNDZDOC45NyAxOS41NCAxMC40MyAyMCAxMiAyMGM0LjQyIDAgOC0zLjU4IDgtOGgzek02IDEyYzAtMy4zMSAyLjY5LTYgNi02IDEuMDEgMCAxLjk3LjI1IDIuOC43bDEuNDYtMS40NkMxNS4wMyA0LjQ2IDEzLjU3IDQgMTIgNGMtNC40MiAwLTggMy41OC04IDhIMWw0IDQgNC00elwiXG59KSwgJ0NhY2hlZCcpOyIsImltcG9ydCBQcmludEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvUHJpbnRIZWFkZXInO1xyXG5pbXBvcnQgUHJpbnRGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1ByaW50Rm9vdGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2lkZWJhckRhc2ggZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcydcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJ1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbnRhaW5lciwgQ2hlY2tib3gsIE1lbnUsIE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBQYXBlciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBzdHlsZWQsIEZvcm1MYWJlbCwgUmFkaW9Hcm91cCwgRm9ybUNvbnRyb2xMYWJlbCwgUmFkaW8sIElucHV0LCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgTW9kYWwsIEJhY2tkcm9wLCBGYWRlLCBCb3gsIEF1dG9jb21wbGV0ZSwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZVJvdywgVGFibGVIZWFkLCBUYWJzLCBUYWIsIEJ1dHRvbiwgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0JztcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvbic7XHJcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uU3VtbWFyeSc7XHJcbmltcG9ydCBBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uRGV0YWlscyc7XHJcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmUnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIE5hdkxpbmssIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGl2aWRlcic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBSZWFjdFRvUHJpbnQsIHsgdXNlUmVhY3RUb1ByaW50IH0gZnJvbSAncmVhY3QtdG8tcHJpbnQnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuaW1wb3J0IFBob25lIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGhvbmUnO1xyXG5pbXBvcnQgV2ViSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1dlYic7XHJcbmltcG9ydCBFbWFpbCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VtYWlsJztcclxuaW1wb3J0IEVtYWlsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VtYWlsJztcclxuaW1wb3J0IFBob25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Bob25lJztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uLy4uL2ltZy9pbWFnZXMucG5nJ1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd24nO1xyXG5pbXBvcnQgeyBUYWJDb250ZXh0LCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ0BtdWkvbGFiJztcclxuXHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycyc7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGVtb0NvbnRhaW5lciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvaW50ZXJuYWxzL2RlbW8nO1xyXG5pbXBvcnQgTG9jYWxQcmludHNob3AgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2NhbFByaW50c2hvcCc7XHJcbmltcG9ydCBFeGNlbEpTIGZyb20gJ2V4Y2VsanMnXHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyBDYWNoZWQsIEV4cGxpY2l0IH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcblxyXG5jb25zdCBEZWxldGVUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gQ3VzdG9tZXJJbmZvcm1hdGlvblZpZXcoKSB7XHJcbiAgbGV0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IFtncmFudEFjY2Vzcywgc2V0R3JhbnRBY2Nlc3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ncmFudEFjY2Vzc2ApO1xyXG4gICAgICAgIHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnVzZXJJRCA9PT0gdXNlci5kYXRhLmlkKVxyXG4gICAgICAgICAgLm1hcCgocm93KSA9PiBzZXRHcmFudEFjY2Vzcyhyb3cubW9kdWxlcykpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoTnVtYmVyKClcclxuICB9LCBbdXNlcl0pXHJcbiAgY29uc3QgY3VzdG9tZXJJbmZvVSA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJDdXN0b21lclwiICYmIHJvdy5hY2Nlc3MuZWRpdE0gPT09IHRydWUpO1xyXG5cclxuICBjb25zdCBbY3VzdG9tZXIsIHNldEN1c3RvbWVyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzZWxlY3RPcHRpb25zLCBzZXRTZWxlY3RPcHRpb25zXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGFwaVVybCA9IGAke0VORFBPSU5UX1VSTH0vY3VzdG9tZXJgO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vY3VzdG9tZXJgKVxyXG4gICAgICAgIHNldEN1c3RvbWVyKHJlcy5kYXRhLmRhdGEucmV2ZXJzZSgpKTtcclxuICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3cgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvdyhlKTtcclxuICB9XHJcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBpc0V4cGFuZGVkKSA9PiB7XHJcbiAgICBzZXRFeHBhbmRlZChpc0V4cGFuZGVkID8gcGFuZWwgOiBmYWxzZSk7XHJcbiAgfTtcclxuICB7LyoqIHNlYXJjaCAmJiBUYWIgKi8gfVxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3ZhbHVlMiwgc2V0VmFsdWUyXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gY3VzdG9tZXIuZmluZEluZGV4KHJvdyA9PiByb3cuX2lkID09PSBpZCk7XHJcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgc2V0VmFsdWUoc2VsZWN0ZWRJbmRleClcclxuICAgIH1cclxuICB9LCBbY3VzdG9tZXIsIGlkXSlcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UzID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSlcclxuICAgIHNldFNlbGVjdE9wdGlvbnMoJycpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UyID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZTIobmV3VmFsdWUpO1xyXG4gICAgc2V0U2VsZWN0T3B0aW9ucygnJyk7XHJcbiAgfVxyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgIHNldFNlYXJjaCh2YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgbmV3QXJyYXkgPSBzZWFyY2ggIT09ICcnID8gY3VzdG9tZXIuZmlsdGVyKChyb3cpID0+XHJcbiAgICByb3cuY3VzdG9tZXJUeXBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICByb3cuQ3VzdG9tZXIgJiYgcm93LkN1c3RvbWVyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICByb3cuY3VzdG9tZXJFbWFpbCAmJiByb3cuY3VzdG9tZXJFbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgcm93LmN1c3RvbWVyRGVzY3JpcHRpb24gJiYgcm93LmN1c3RvbWVyRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcclxuICApIDogY3VzdG9tZXJcclxuICB7LyoqIHNlYXJjaCAmJiBUYWIgRW5kICovIH1cclxuICB7LyogU3RhcnQgRXN0aW1hdGUgVHJhbnNhY3Rpb24gSW5mb3JtYXRpb24gKi8gfVxyXG4gIGNvbnN0IFtlc3RpbWF0ZSwgc2V0RXN0aW1hdGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwdXJjaGFzZSwgc2V0UHVyY2hhc2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbnZvaWNlLCBzZXRJbnZvaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW52b2ljZTEsIHNldEludm9pY2UxXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbWFpbnRlbmFuY2UsIHNldE1haW50ZW5hbmNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGF5bWVudCwgc2V0UGF5bWVudF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Bvc0hpc3RvcnksIHNldFBvc0hpc3RvcnldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtDdXN0b21lckluZm8sIHNldEN1c3RvbWVySW5mb10gPSB1c2VTdGF0ZSgnJylcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1jdXN0b21lci8ke2lkfWApXHJcbiAgICAgICAgc2V0Q3VzdG9tZXJJbmZvKHJlcy5kYXRhLmRhdGEuQ3VzdG9tZXIpXHJcbiAgICAgICAgY29uc3QgZXN0aW1hdGVSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VzdGltYXRpb24/c3VtbWFyeT10cnVlYCk7XHJcbiAgICAgICAgc2V0RXN0aW1hdGUoZXN0aW1hdGVSZXNwb25zZS5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LmN1c3RvbWVyTmFtZS5faWQgPT09IGlkKS5yZXZlcnNlKCkpO1xyXG4gICAgICAgIGNvbnN0IGludm9pY2VSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2ludm9pY2U/c3VtbWFyeT10cnVlYCk7XHJcbiAgICAgICAgc2V0SW52b2ljZShpbnZvaWNlUmVzcG9uc2UuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5jdXN0b21lck5hbWUuX2lkID09PSBpZCkucmV2ZXJzZSgpKTtcclxuICAgICAgICBzZXRJbnZvaWNlMShpbnZvaWNlUmVzcG9uc2UuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5jdXN0b21lck5hbWUuX2lkID09PSBpZCAmJiAocm93LnN0YXR1cyA9PT0gJ1NlbnQnIHx8IHJvdy5zdGF0dXMgPT09ICdQYWlkJyB8fCByb3cuc3RhdHVzID09PSAnUGFydGlhbGx5LVBhaWQnKSkpO1xyXG4gICAgICAgIGNvbnN0IHB1ckNoYXNlUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wdXJjaGFzZT9zdW1tYXJ5PXRydWVgKTtcclxuICAgICAgICBzZXRQdXJjaGFzZShwdXJDaGFzZVJlc3BvbnNlLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuY3VzdG9tZXJOYW1lLl9pZCA9PT0gaWQpLnJldmVyc2UoKSk7XHJcbiAgICAgICAgY29uc3QgbWFpbnRlbmFuY2VSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L21haW50ZW5hbmNlP3N1bW1hcnk9dHJ1ZWApO1xyXG4gICAgICAgIHNldE1haW50ZW5hbmNlKG1haW50ZW5hbmNlUmVzcG9uc2UuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5jdXN0b21lck5hbWUuX2lkID09PSBpZCkucmV2ZXJzZSgpKTtcclxuICAgICAgICBjb25zdCByZXNQYXltZW50ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcGF5bWVudGApXHJcbiAgICAgICAgc2V0UGF5bWVudChyZXNQYXltZW50LmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuY3VzdG9tZXJOYW1lLl9pZCA9PT0gaWQpKTtcclxuICAgICAgICAvLyBGZXRjaCBQT1NcclxuICAgICAgICBjb25zdCByZXNQb3MgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wb3M/c3VtbWFyeT10cnVlYCk7XHJcbiAgICAgICAgaWYgKHJlc1Bvcy5kYXRhICYmIHJlc1Bvcy5kYXRhLmRhdGEpIHtcclxuICAgICAgICAgIHNldFBvc0hpc3RvcnkocmVzUG9zLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuY3VzdG9tZXJOYW1lICYmIHJvdy5jdXN0b21lck5hbWUuX2lkID09PSBpZCkucmV2ZXJzZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW2lkXSlcclxuXHJcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFF1aWNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3RhcnREYXRlU3RhdGVtZW50JykpXHJcbiAgICByZXR1cm4gbmV3IERhdGUoc3RvcmVkUXVpY2spXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Zyb21EYXRlLCBzZXRGcm9tRGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRRdWlja0Zyb20gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdGcm9tRGF0ZVN0YXRlbWVudCcpKVxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHN0b3JlZFF1aWNrRnJvbSlcclxuICB9KTtcclxuICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRRdWlja0VuZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0VuZERhdGVTdGF0ZW1lbnQnKSlcclxuICAgIHJldHVybiBuZXcgRGF0ZShzdG9yZWRRdWlja0VuZClcclxuICB9KTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgc2V0U3RhcnREYXRlKGRhdGUpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnU3RhcnREYXRlU3RhdGVtZW50JywgSlNPTi5zdHJpbmdpZnkoZGF0ZSkpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURhdGVGcm9tID0gKGRhdGUpID0+IHtcclxuICAgIHNldEZyb21EYXRlKGRhdGUpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRnJvbURhdGVTdGF0ZW1lbnQnLCBKU09OLnN0cmluZ2lmeShkYXRlKSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRGF0ZUVuZCA9IChkYXRlKSA9PiB7XHJcbiAgICBzZXRFbmREYXRlKGRhdGUpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRW5kRGF0ZVN0YXRlbWVudCcsIEpTT04uc3RyaW5naWZ5KGRhdGUpKVxyXG4gIH1cclxuICB7LyoqIFllYXIgU3RhdGVtZW50IHN0YXJ0ICovIH1cclxuICBjb25zdCBzdGF0ZW1lbnQgPSBbXTtcclxuICBpbnZvaWNlMS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICBzdGF0ZW1lbnQucHVzaCh7XHJcbiAgICAgIHR5cGU6ICdJbnZvaWNlJyxcclxuICAgICAgZGF0ZTogcm93Lmludm9pY2VEYXRlLFxyXG4gICAgICBudW1iZXI6IHJvdy5pbnZvaWNlTnVtYmVyLFxyXG4gICAgICBkZWZlY3Q6IHJvdy5pbnZvaWNlRGVmZWN0ICsgJyAvICcgKyByb3cuaW52b2ljZVN1YmplY3QsXHJcbiAgICAgIGFtb3VudDogcm93LnRvdGFsSW52b2ljZSxcclxuICAgICAgYmFsYW5jZTogcm93LmJhbGFuY2VEdWUsXHJcbiAgICAgIHBhaWRBbW91bnQ6IHJvdy50b3RhbCxcclxuICAgICAgZHVlOiByb3cuaW52b2ljZUR1ZURhdGUsXHJcbiAgICAgIHN0YXR1czogcm93LnN0YXR1c1xyXG4gICAgfSlcclxuICB9KVxyXG4gIHBheW1lbnQuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgc3RhdGVtZW50LnB1c2goe1xyXG4gICAgICB0eXBlOiAnUGF5bWVudCcsXHJcbiAgICAgIGRhdGU6IHJvdy5wYXltZW50RGF0ZSxcclxuICAgICAgbnVtYmVyOiByb3cucGF5bWVudE51bWJlcixcclxuICAgICAgbnVtYmVyQXJyYXk6IHJvdy5Ub3RhbEFtb3VudCxcclxuICAgICAgZGVmZWN0OiByb3cubW9kZXMsXHJcbiAgICAgIHBheW1lbnQ6IHJvdy5hbW91bnQgLSByb3cucmVtYWluaW5nLFxyXG4gICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICBjcmVkaXQ6IHJvdy5yZW1haW5pbmdcclxuICAgIH0pXHJcbiAgfSlcclxuICBwb3NIaXN0b3J5LmZvckVhY2gocm93ID0+IHtcclxuICAgIGNvbnN0IHVzZEFtb3VudCA9IHJvdy5yYXRlID4gMCA/IChyb3cudG90YWxJbnZvaWNlIC8gcm93LnJhdGUpIDogMDtcclxuICAgIHN0YXRlbWVudC5wdXNoKHtcclxuICAgICAgdHlwZTogJ1BPUycsXHJcbiAgICAgIGRhdGU6IHJvdy5pbnZvaWNlRGF0ZSB8fCByb3cucGF5bWVudERhdGUsXHJcbiAgICAgIG51bWJlcjogcm93LmZhY3R1cmVOdW1iZXIsXHJcbiAgICAgIGRlZmVjdDogJ1BPUyBTYWxlJyxcclxuICAgICAgYW1vdW50OiB1c2RBbW91bnQsXHJcbiAgICAgIHBheW1lbnQ6IHJvdy5zdGF0dXMgPT09ICdQYWlkJyA/IHVzZEFtb3VudCA6IChyb3cuVG90YWxBbW91bnRQYWlkIC8gcm93LnJhdGUpLFxyXG4gICAgICBzdGF0dXM6IHJvdy5zdGF0dXNcclxuICAgIH0pXHJcbiAgfSlcclxuICBsZXQgYmFsYW5jZUR1ZSA9IDA7XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkU3RhdGVtZW50ID0gc3RhdGVtZW50LmZpbHRlcigocm93KSA9PiB7XHJcbiAgICBjb25zdCB0cmFuc2FjdGlvblllYXIgPSBkYXlqcyhyb3cuZGF0ZSkuZm9ybWF0KCdZWVlZJylcclxuICAgIHJldHVybiB0cmFuc2FjdGlvblllYXIgPT09IGRheWpzKHN0YXJ0RGF0ZSkuZm9ybWF0KCdZWVlZJylcclxuICB9KVxyXG4gIGNvbnN0IFtmaWx0ZXJlZERhdGEsIHNldEZpbHRlcmVkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBbXTtcclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoZnJvbURhdGUpO1xyXG4gICAgd2hpbGUgKGN1cnJlbnREYXRlIDw9IGVuZERhdGUpIHtcclxuICAgICAgaGVhZGVycy5wdXNoKGN1cnJlbnREYXRlLnRvRGF0ZVN0cmluZygpKTtcclxuICAgICAgY3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuICAgIH1cclxuICAgIHNldEZpbHRlcmVkRGF0YShoZWFkZXJzKVxyXG4gIH0sIFtmcm9tRGF0ZSwgZW5kRGF0ZV0pXHJcblxyXG4gIGNvbnN0IHByZXZpb3VzWWVhciA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSkuZ2V0RnVsbFllYXIoKSAtIDE7XHJcbiAgbGV0IHByZXZCYWxhbmNlID0gMDtcclxuXHJcbiAgc3RhdGVtZW50LmZvckVhY2gocm93ID0+IHtcclxuICAgIGxldCBjcmVkaXQgPSAwXHJcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyBEYXRlKHJvdy5kYXRlKS5nZXRGdWxsWWVhcigpXHJcbiAgICBpZiAodHJhbnNhY3Rpb24gPD0gcHJldmlvdXNZZWFyKSB7XHJcbiAgICAgIGlmIChyb3cudHlwZSA9PT0gJ0ludm9pY2UnKSB7XHJcbiAgICAgICAgcHJldkJhbGFuY2UgKz0gcGFyc2VGbG9hdChyb3cuYW1vdW50KVxyXG4gICAgICB9IGVsc2UgaWYgKHJvdy50eXBlID09PSAnUGF5bWVudCcpIHtcclxuICAgICAgICBwcmV2QmFsYW5jZSAtPSBwYXJzZUZsb2F0KHJvdy5wYXltZW50KVxyXG4gICAgICAgIGNyZWRpdCA9IHByZXZCYWxhbmNlXHJcbiAgICAgICAgcHJldkJhbGFuY2UgPSBNYXRoLm1heChwcmV2QmFsYW5jZSwgMClcclxuICAgICAgfSBlbHNlIGlmIChyb3cudHlwZSA9PT0gJ1BPUycpIHtcclxuICAgICAgICBwcmV2QmFsYW5jZSArPSBwYXJzZUZsb2F0KHJvdy5hbW91bnQpXHJcbiAgICAgICAgcHJldkJhbGFuY2UgLT0gcGFyc2VGbG9hdChyb3cucGF5bWVudCB8fCAwKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgdHJhbnNhY3Rpb25ZZWFycyA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSkuZ2V0RnVsbFllYXIoKVxyXG4gIGNvbnN0IGxhc3RZZWFySW5mbyA9IHtcclxuICAgIHR5cGU6ICcqKipPcGVuaW5nIEJhbGFuY2UqKionLFxyXG4gICAgZGF0ZTogbmV3IERhdGUodHJhbnNhY3Rpb25ZZWFycywgMCwgMSksXHJcbiAgICBudW1iZXI6ICcnLFxyXG4gICAgbnVtYmVyQXJyYXk6IFtdLFxyXG4gICAgZGVmZWN0OiAnJyxcclxuICAgIGFtb3VudDogcHJldkJhbGFuY2UsXHJcbiAgICBzdGF0dXM6ICcnXHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdTdGF0ZW1lbnRJbmZvID0gW2xhc3RZZWFySW5mbywgLi4uZmlsdGVyZWRTdGF0ZW1lbnRdXHJcblxyXG5cclxuICBsZXQgY3JlZGl0MSA9IDBcclxuICBwYXltZW50Py5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgaWYgKHJvdy5tb2RlcyA9PT0gJ0NyZWRpdCcgfHwgKHJvdy5tb2RlcyA9PT0gJ0Nhc2gnICYmIHJvdy5yZW1haW5pbmcgPiAwKSB8fCAocm93Lm1vZGVzID09PSAnQmFuayBUcmFuc2ZlcicgJiYgcm93LnJlbWFpbmluZyA+IDApKSB7XHJcbiAgICAgIGNyZWRpdDEgKz0gcGFyc2VGbG9hdChyb3cucmVtYWluaW5nKVxyXG4gICAgfSBlbHNlIGlmIChyb3cubW9kZXMgPT09ICdDcmVkaXQtQWNjb3VudCcpIHtcclxuICAgICAgY3JlZGl0MSAtPSBwYXJzZUZsb2F0KHJvdy5hbW91bnQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3JlZGl0MSA8IDAgPyAwIDogY3JlZGl0MVxyXG4gIH0pXHJcbiAgY29uc3QgY3JlZGl0MiA9IGNyZWRpdDEudG9GaXhlZCgyKVxyXG4gIGNvbnNvbGUubG9nKGNyZWRpdDIpXHJcblxyXG4gIGNvbnN0IFtpc0NyZWRpdCwgc2V0SXNDcmVkaXRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZUNyZWRpdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBjcmVkaXQ6IGNyZWRpdDJcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtY3VzdG9tZXIvJHtpZH1gLCBkYXRhKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgc2V0SXNDcmVkaXQoJ3RydWUnKVxyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICB7LyoqIFllYXIgU3RhdGVtZW50IGVuZCAqLyB9XHJcblxyXG4gIGNvbnN0IFtuZXdTdGF0ZW1lbnQsIHNldE5ld1N0YXRlbWVudF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW0FsbFN0YXRlbWVudCwgQWxsTmV3U3RhdGVtZW50XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbT3V0U3RhbmRTdGF0ZW1lbnQsIHNldE91dFN0YW5kTmV3U3RhdGVtZW50XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3VzdG9tU3RhdGVtZW50LCBzZXRDdXN0b21OZXdTdGF0ZW1lbnRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdE9wdGlvbnMgPT09ICdZZWFyJykge1xyXG4gICAgICBBbGxOZXdTdGF0ZW1lbnQoW10pXHJcbiAgICAgIHNldE91dFN0YW5kTmV3U3RhdGVtZW50KFtdKVxyXG4gICAgICBzZXRDdXN0b21OZXdTdGF0ZW1lbnQoW10pXHJcbiAgICAgIHNldE5ld1N0YXRlbWVudChuZXdTdGF0ZW1lbnRJbmZvPy5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmRhdGUpIC0gbmV3IERhdGUoYi5kYXRlKSkpXHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdE9wdGlvbnMgPT09ICdBbGwnKSB7XHJcbiAgICAgIHNldE5ld1N0YXRlbWVudChbXSlcclxuICAgICAgc2V0T3V0U3RhbmROZXdTdGF0ZW1lbnQoW10pXHJcbiAgICAgIHNldEN1c3RvbU5ld1N0YXRlbWVudChbXSlcclxuICAgICAgQWxsTmV3U3RhdGVtZW50KHN0YXRlbWVudD8uc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYS5kYXRlKSAtIG5ldyBEYXRlKGIuZGF0ZSkpKVxyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RPcHRpb25zID09PSAnQWxsIE91dHN0YW5kaW5nJykge1xyXG4gICAgICBzZXROZXdTdGF0ZW1lbnQoW10pXHJcbiAgICAgIEFsbE5ld1N0YXRlbWVudChbXSlcclxuICAgICAgc2V0Q3VzdG9tTmV3U3RhdGVtZW50KFtdKVxyXG4gICAgICBzZXRPdXRTdGFuZE5ld1N0YXRlbWVudChzdGF0ZW1lbnQuZmlsdGVyKChyb3cpID0+IHJvdy5zdGF0dXMgPT09ICdTZW50JyB8fCByb3cuc3RhdHVzID09PSAnUGFydGlhbGx5LVBhaWQnKS5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmRhdGUpIC0gbmV3IERhdGUoYi5kYXRlKSkpXHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdE9wdGlvbnMgPT09ICdDdXN0b20nKSB7XHJcbiAgICAgIHNldE5ld1N0YXRlbWVudChbXSlcclxuICAgICAgQWxsTmV3U3RhdGVtZW50KFtdKVxyXG4gICAgICBzZXRPdXRTdGFuZE5ld1N0YXRlbWVudChbXSlcclxuICAgICAgc2V0Q3VzdG9tTmV3U3RhdGVtZW50KHN0YXRlbWVudC5maWx0ZXIoKHJvdykgPT4gZmlsdGVyZWREYXRhLmZpbmQoKEl0ZW0pID0+IGRheWpzKEl0ZW0pLmZvcm1hdCgnREQvTU0vWVlZWScpID09PSBkYXlqcyhyb3cuZGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJykpKS5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmRhdGUpIC0gbmV3IERhdGUoYi5kYXRlKSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXROZXdTdGF0ZW1lbnQoW10pXHJcbiAgICAgIEFsbE5ld1N0YXRlbWVudChbXSlcclxuICAgICAgc2V0T3V0U3RhbmROZXdTdGF0ZW1lbnQoW10pXHJcbiAgICAgIHNldEN1c3RvbU5ld1N0YXRlbWVudChbXSlcclxuICAgIH1cclxuICB9LCBbc2VsZWN0T3B0aW9ucywgZmlsdGVyZWREYXRhXSlcclxuICB7LyoqIHRvdGFsIHllYXIgU3RhcnQgKi8gfVxyXG4gIGNvbnN0IFtvcGVuaW5nQmFsYW5jZVRvdGFsLCBzZXRPcGVuaW5nQmFsYW5jZVRvdGFsXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW0ludm9pY2VUb3RhbCwgc2V0SW52b2ljZVRvdGFsXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW1BheW1lbnRUb3RhbCwgc2V0UGF5bWVudFRvdGFsXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3RvdGFsQmFsYW5jZSwgc2V0VG90YWxCYWxhbmNlXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0T3B0aW9ucyA9PT0gJ1llYXInKSB7XHJcbiAgICAgIGNvbnN0IG9wZW5pbmdCYWxhbmNlVG90YWwxID0gbmV3U3RhdGVtZW50Lmxlbmd0aCA+IDAgPyBuZXdTdGF0ZW1lbnQuZmlsdGVyKChyb3cpID0+IHJvdy50eXBlID09PSAnKioqT3BlbmluZyBCYWxhbmNlKioqJykucmVkdWNlKChzdW0sIHJvdykgPT4gc3VtICsgcGFyc2VGbG9hdChyb3cuYW1vdW50KSwgMCkgOiAwXHJcbiAgICAgIHNldE9wZW5pbmdCYWxhbmNlVG90YWwob3BlbmluZ0JhbGFuY2VUb3RhbDEpXHJcbiAgICAgIGNvbnN0IEludm9pY2VUb3RhbDEgPSBuZXdTdGF0ZW1lbnQubGVuZ3RoID4gMCA/IG5ld1N0YXRlbWVudC5maWx0ZXIoKHJvdykgPT4gcm93LnR5cGUgPT09ICdJbnZvaWNlJykucmVkdWNlKChzdW0sIHJvdykgPT4gc3VtICsgcGFyc2VGbG9hdChyb3cuYW1vdW50KSwgMCkgOiAwXHJcbiAgICAgIHNldEludm9pY2VUb3RhbChJbnZvaWNlVG90YWwxKVxyXG4gICAgICBjb25zdCBQYXltZW50VG90YWwxID0gbmV3U3RhdGVtZW50Lmxlbmd0aCA+IDAgPyBuZXdTdGF0ZW1lbnQuZmlsdGVyKChyb3cpID0+IHJvdy50eXBlID09PSAnUGF5bWVudCcpLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHBhcnNlRmxvYXQocm93LnBheW1lbnQpLCAwKSA6IDBcclxuICAgICAgc2V0UGF5bWVudFRvdGFsKFBheW1lbnRUb3RhbDEpXHJcbiAgICAgIGNvbnN0IHRvdGFsQmFsYW5jZTEgPSAob3BlbmluZ0JhbGFuY2VUb3RhbDEgKyBJbnZvaWNlVG90YWwxKSAtIFBheW1lbnRUb3RhbDFcclxuICAgICAgc2V0VG90YWxCYWxhbmNlKHRvdGFsQmFsYW5jZTEpXHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdE9wdGlvbnMgPT09ICdBbGwnKSB7XHJcbiAgICAgIHNldE9wZW5pbmdCYWxhbmNlVG90YWwoMClcclxuICAgICAgY29uc3QgSW52b2ljZVRvdGFsMSA9IEFsbFN0YXRlbWVudC5sZW5ndGggPiAwID8gQWxsU3RhdGVtZW50LmZpbHRlcigocm93KSA9PiByb3cudHlwZSA9PT0gJ0ludm9pY2UnKS5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyBwYXJzZUZsb2F0KHJvdy5hbW91bnQpLCAwKSA6IDBcclxuICAgICAgc2V0SW52b2ljZVRvdGFsKEludm9pY2VUb3RhbDEpXHJcbiAgICAgIGNvbnN0IFBheW1lbnRUb3RhbDEgPSBBbGxTdGF0ZW1lbnQubGVuZ3RoID4gMCA/IEFsbFN0YXRlbWVudC5maWx0ZXIoKHJvdykgPT4gcm93LnR5cGUgPT09ICdQYXltZW50JykucmVkdWNlKChzdW0sIHJvdykgPT4gc3VtICsgcGFyc2VGbG9hdChyb3cucGF5bWVudCksIDApIDogMFxyXG4gICAgICBzZXRQYXltZW50VG90YWwoUGF5bWVudFRvdGFsMSlcclxuICAgICAgY29uc3QgdG90YWxCYWxhbmNlMSA9IEludm9pY2VUb3RhbDEgLSBQYXltZW50VG90YWwxXHJcbiAgICAgIHNldFRvdGFsQmFsYW5jZSh0b3RhbEJhbGFuY2UxKVxyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RPcHRpb25zID09PSAnQWxsIE91dHN0YW5kaW5nJykge1xyXG4gICAgICBzZXRPcGVuaW5nQmFsYW5jZVRvdGFsKDApXHJcbiAgICAgIGNvbnN0IEludm9pY2VUb3RhbDEgPSBPdXRTdGFuZFN0YXRlbWVudC5sZW5ndGggPiAwID8gT3V0U3RhbmRTdGF0ZW1lbnQuZmlsdGVyKChyb3cpID0+IHJvdy50eXBlID09PSAnSW52b2ljZScpLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHBhcnNlRmxvYXQocm93LmFtb3VudCksIDApIDogMFxyXG4gICAgICBjb25zdCBJbnZvaWNlVG90YWwyID0gT3V0U3RhbmRTdGF0ZW1lbnQubGVuZ3RoID4gMCA/IE91dFN0YW5kU3RhdGVtZW50LmZpbHRlcigocm93KSA9PiByb3cudHlwZSA9PT0gJ0ludm9pY2UnKS5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyBwYXJzZUZsb2F0KHJvdy5iYWxhbmNlKSwgMCkgOiAwXHJcbiAgICAgIGNvbnN0IEludm9pY2VUb3RhbDMgPSBPdXRTdGFuZFN0YXRlbWVudC5sZW5ndGggPiAwID8gT3V0U3RhbmRTdGF0ZW1lbnQuZmlsdGVyKChyb3cpID0+IHJvdy50eXBlID09PSAnSW52b2ljZScpLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHBhcnNlRmxvYXQocm93LnBhaWRBbW91bnQpLCAwKSA6IDBcclxuICAgICAgc2V0SW52b2ljZVRvdGFsKEludm9pY2VUb3RhbDEpXHJcbiAgICAgIHNldFBheW1lbnRUb3RhbChJbnZvaWNlVG90YWwzKVxyXG4gICAgICBzZXRUb3RhbEJhbGFuY2UoSW52b2ljZVRvdGFsMilcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0T3B0aW9ucyA9PT0gJ0N1c3RvbScpIHtcclxuICAgICAgc2V0T3BlbmluZ0JhbGFuY2VUb3RhbCgwKVxyXG4gICAgICBjb25zdCBJbnZvaWNlVG90YWwxID0gY3VzdG9tU3RhdGVtZW50Lmxlbmd0aCA+IDAgPyBjdXN0b21TdGF0ZW1lbnQuZmlsdGVyKChyb3cpID0+IHJvdy50eXBlID09PSAnSW52b2ljZScpLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHBhcnNlRmxvYXQocm93LmFtb3VudCksIDApIDogMFxyXG4gICAgICBzZXRJbnZvaWNlVG90YWwoSW52b2ljZVRvdGFsMSlcclxuICAgICAgY29uc3QgUGF5bWVudFRvdGFsMSA9IGN1c3RvbVN0YXRlbWVudC5sZW5ndGggPiAwID8gY3VzdG9tU3RhdGVtZW50LmZpbHRlcigocm93KSA9PiByb3cudHlwZSA9PT0gJ1BheW1lbnQnKS5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyBwYXJzZUZsb2F0KHJvdy5wYXltZW50KSwgMCkgOiAwXHJcbiAgICAgIHNldFBheW1lbnRUb3RhbChQYXltZW50VG90YWwxKVxyXG4gICAgICBjb25zdCB0b3RhbEJhbGFuY2UxID0gSW52b2ljZVRvdGFsMSAtIFBheW1lbnRUb3RhbDFcclxuICAgICAgc2V0VG90YWxCYWxhbmNlKHRvdGFsQmFsYW5jZTEpXHJcbiAgICB9XHJcbiAgfSwgW3NlbGVjdE9wdGlvbnMsIG5ld1N0YXRlbWVudCwgQWxsU3RhdGVtZW50LCBPdXRTdGFuZFN0YXRlbWVudCwgY3VzdG9tU3RhdGVtZW50XSlcclxuXHJcbiAgey8qKiB0b3RhbCB5ZWFyIGVuZCAqLyB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTWVudSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH07XHJcbiAgY29uc3QgY29tcG9uZW50UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByaW50ID0gdXNlUmVhY3RUb1ByaW50KHtcclxuICAgIGNvbnRlbnQ6ICgpID0+IGNvbXBvbmVudFJlZi5jdXJyZW50LFxyXG4gICAgZG9jdW1lbnRUaXRsZTogJ1N0YXRlbWVudCBGb3IgJyArIEN1c3RvbWVySW5mbyxcclxuICAgIG9uQmVmb3JlR2V0Q29udGVudDogKCkgPT4ge1xyXG4gICAgICBjb25zdCBQQUdFX0hFSUdIVCA9IDEwNDU7XHJcbiAgICAgIGNvbnN0IHByaW50RWxlbWVudCA9IGNvbXBvbmVudFJlZi5jdXJyZW50O1xyXG4gICAgICBpZiAocHJpbnRFbGVtZW50KSB7XHJcbiAgICAgICAgcHJpbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLWNsYXNzLWZvci1oZWlnaHRcIilcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBwcmludEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZQYWdlID0gTWF0aC5jZWlsKGhlaWdodCAvIFBBR0VfSEVJR0hUKVxyXG4gICAgICAgIGlmIChudW1iZXJPZlBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICBjb25zdCBoZWlnaHRXaXRoU2luZ2xlSGVhZGVyID0gbnVtYmVyT2ZQYWdlICogUEFHRV9IRUlHSFRcclxuICAgICAgICAgIGxldCByZXF1aXJlZEhlaWdodCA9IGhlaWdodFdpdGhTaW5nbGVIZWFkZXJcclxuICAgICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHByaW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRoZWFkXCIpPy5bMF0/LmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgY29uc3QgZm9vdGVySGVpZ2h0ID0gcHJpbnRFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGZvb3RcIik/LlswXT8uY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICByZXF1aXJlZEhlaWdodCAtPSAobnVtYmVyT2ZQYWdlIC0gMSkgKiAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KVxyXG4gICAgICAgICAgcHJpbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke3JlcXVpcmVkSGVpZ2h0fXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZW1wLWNsYXNzLWZvci1oZWlnaHRcIilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQWZ0ZXJQcmludDogKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcmludEVsZW1lbnQgPSBjb21wb25lbnRSZWYuY3VycmVudDtcclxuICAgICAgaWYgKHByaW50RWxlbWVudCkge1xyXG4gICAgICAgIHByaW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgYXV0b2BcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgY29tcG9uZW50UmVmMSA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmludDEgPSB1c2VSZWFjdFRvUHJpbnQoe1xyXG4gICAgY29udGVudDogKCkgPT4gY29tcG9uZW50UmVmMS5jdXJyZW50LFxyXG4gICAgZG9jdW1lbnRUaXRsZTogJ1N0YXRlbWVudCBGb3IgJyArIEN1c3RvbWVySW5mbyxcclxuICAgIG9uQmVmb3JlR2V0Q29udGVudDogKCkgPT4ge1xyXG4gICAgICBjb25zdCBQQUdFX0hFSUdIVCA9IDEwNDU7XHJcbiAgICAgIGNvbnN0IHByaW50RWxlbWVudCA9IGNvbXBvbmVudFJlZjEuY3VycmVudDtcclxuICAgICAgaWYgKHByaW50RWxlbWVudCkge1xyXG4gICAgICAgIHByaW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGVtcC1jbGFzcy1mb3ItaGVpZ2h0XCIpXHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gcHJpbnRFbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgICAgIGNvbnN0IG51bWJlck9mUGFnZSA9IE1hdGguY2VpbChoZWlnaHQgLyBQQUdFX0hFSUdIVClcclxuICAgICAgICBpZiAobnVtYmVyT2ZQYWdlID4gMSkge1xyXG4gICAgICAgICAgY29uc3QgaGVpZ2h0V2l0aFNpbmdsZUhlYWRlciA9IG51bWJlck9mUGFnZSAqIFBBR0VfSEVJR0hUXHJcbiAgICAgICAgICBsZXQgcmVxdWlyZWRIZWlnaHQgPSBoZWlnaHRXaXRoU2luZ2xlSGVhZGVyXHJcbiAgICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBwcmludEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aGVhZFwiKT8uWzBdPy5jbGllbnRIZWlnaHRcclxuICAgICAgICAgIGNvbnN0IGZvb3RlckhlaWdodCA9IHByaW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRmb290XCIpPy5bMF0/LmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgcmVxdWlyZWRIZWlnaHQgLT0gKG51bWJlck9mUGFnZSAtIDEpICogKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodClcclxuICAgICAgICAgIHByaW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtyZXF1aXJlZEhlaWdodH1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGVtcC1jbGFzcy1mb3ItaGVpZ2h0XCIpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkFmdGVyUHJpbnQ6ICgpID0+IHtcclxuICAgICAgY29uc3QgcHJpbnRFbGVtZW50ID0gY29tcG9uZW50UmVmMS5jdXJyZW50O1xyXG4gICAgICBpZiAocHJpbnRFbGVtZW50KSB7XHJcbiAgICAgICAgcHJpbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGBhdXRvYFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblByaW50ID0gKCkgPT4ge1xyXG4gICAgaGFuZGxlUHJpbnQoKVxyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPcGVuUHJpbnQxID0gKCkgPT4ge1xyXG4gICAgaGFuZGxlUHJpbnQxKClcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH07XHJcbiAgY29uc3QgW3Nob3cxLCBzZXRTaG93MV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBoYW5kbGVTaG93MSA9IChlKSA9PiB7XHJcbiAgICBzZXRTaG93MShlKTtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH1cclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0NvbW1lbnRzMSwgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtub3RpZmljYXRpb24sIHNldE5vdGlmaWNhdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaENvbW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2NvbW1lbnRgKVxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5Db21tZW50SW5mby5pZEluZm8gPT09IGlkKVxyXG4gICAgICAgIHNldENvbW1lbnRzKHJlc3AucmV2ZXJzZSgpKVxyXG4gICAgICAgIGNvbnN0IHJlc05vdGlmaWNhdGlvbiA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L25vdGlmaWNhdGlvbmApXHJcbiAgICAgICAgc2V0Tm90aWZpY2F0aW9uKHJlc05vdGlmaWNhdGlvbi5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LmlkSW5mbyA9PT0gaWQpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaENvbW1lbnQoKVxyXG4gIH0sIFtpZF0pXHJcblxyXG4gIGNvbnN0IENvbW1lbnRJbmZvID1cclxuICB7XHJcbiAgICBpZEluZm86IGlkLFxyXG4gICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUsXHJcbiAgICByZWFzb25cclxuICB9XHJcblxyXG4gIHsvKiogTG9hZGluZyBTdGFydCAqLyB9XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcblxyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG5cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzQ3JlZGl0ID09PSAndHJ1ZScpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgey8qKiBMb2FkaW5nIEVuZCAqLyB9XHJcbiAgY29uc3QgZGF0ZUNvbW1lbnQgPSBkYXlqcyhEYXRlLm5vdygpKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0RWRpdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBDb21tZW50SW5mbyxcclxuICAgICAgZGF0ZUNvbW1lbnRcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLWNvbW1lbnQvYCwgZGF0YSlcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHNldFJlYXNvbihcIlwiKTtcclxuICAgICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICBzZXRDb21tZW50cyhbbmV3RGF0YSwgLi4uQ29tbWVudHMxXSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbY3VzdG9tZXIyLCBTZXRDdXN0b21lcjJdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW3Nob3cyLCBzZXRTaG93Ml0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBoYW5kbGVTaG93MiA9IChlKSA9PiB7XHJcbiAgICBzZXRTaG93MihlKTtcclxuICB9XHJcbiAgY29uc3QgW3ZhbHVlMywgc2V0VmFsdWUzXSA9IFJlYWN0LnVzZVN0YXRlKCcxJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFiUGFuZWxDdXN0b21lclZpZXcnKVxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBzZXRWYWx1ZTMocmVzdWx0KVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlNCA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gbmV3VmFsdWVcclxuICAgIHNldFZhbHVlMyhjaGFuZ2VWYWx1ZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVGFiUGFuZWxDdXN0b21lclZpZXcnLCBjaGFuZ2VWYWx1ZSlcclxuICB9O1xyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgbGV0IGFtb3VudDEgPSAwXHJcbiAgY29uc3QgY3VzdG9tUm93ID0gY3VzdG9tU3RhdGVtZW50Py5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgbGV0IGNyZWRpdCA9IDBcclxuICAgIGlmIChyb3cudHlwZSA9PT0gJ0ludm9pY2UnIHx8IHJvdy50eXBlID09PSAnKioqT3BlbmluZyBCYWxhbmNlKioqJykge1xyXG4gICAgICBhbW91bnQxICs9IHBhcnNlRmxvYXQocm93LmFtb3VudClcclxuICAgIH0gZWxzZSBpZiAocm93LnR5cGUgPT09ICdQYXltZW50Jykge1xyXG4gICAgICBhbW91bnQxIC09IHBhcnNlRmxvYXQocm93LnBheW1lbnQpXHJcbiAgICB9IGVsc2UgaWYgKHJvdy50eXBlID09PSAnUE9TJykge1xyXG4gICAgICBhbW91bnQxICs9IHBhcnNlRmxvYXQocm93LmFtb3VudClcclxuICAgICAgYW1vdW50MSAtPSBwYXJzZUZsb2F0KHJvdy5wYXltZW50IHx8IDApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT57ZGF5anMocm93LmRhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvdGQ+XHJcbiAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0+e3Jvdy50eXBlfTwvdGQ+XHJcbiAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICA8c3Bhbj57cm93LnR5cGUgPT09ICdJbnZvaWNlJyAmJiAoJ1JlZiAnICsgcm93LmRlZmVjdCArICcgSU5WLScgKyBTdHJpbmcocm93Lm51bWJlcikucGFkU3RhcnQoNiwgJzAnKSArICcgLSBkdWUgb24gJyArIGRheWpzKHJvdy5kdWUpLmZvcm1hdCgnREQgTU1NTSBZWVlZJykpfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntyb3cudHlwZSA9PT0gJ1BheW1lbnQnICYmIHJvdy5udW1iZXJBcnJheS5sZW5ndGggPT09IDAgJiYgcm93LmNyZWRpdCA+IDAgJiYgKCdQQVktJyArIFN0cmluZyhyb3cubnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyAkJyArIHJvdy5jcmVkaXQgKyAnIEluIEFkdmFuY2VkIFBheW1lbnQgKENyZWRpdCkgJyl9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e3Jvdy50eXBlID09PSAnUGF5bWVudCcgJiYgcm93Lm51bWJlckFycmF5Lmxlbmd0aCA+IDAgJiYgKCdQQVktJyArIFN0cmluZyhyb3cubnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyAkJyArIHJvdy5wYXltZW50ICsgJyBmb3IgcGF5bWVudCBvZiAnICsgcm93Lm51bWJlckFycmF5Py5tYXAoKHJvdzIpID0+ICdJTlYtJyArIFN0cmluZyhyb3cyLlJlZikucGFkU3RhcnQoNiwgJzAnKSkgKyAnIC8gTW9kZTogJyArIHJvdy5kZWZlY3QpfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntyb3cudHlwZSA9PT0gJ1BPUycgJiYgKCdQT1MtJyArIFN0cmluZyhyb3cubnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyAtICcgKyByb3cuZGVmZWN0KX08L3NwYW4+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT57cm93LnR5cGUgPT09ICdJbnZvaWNlJyB8fCByb3cudHlwZSA9PT0gJyoqKk9wZW5pbmcgQmFsYW5jZSoqKicgfHwgcm93LnR5cGUgPT09ICdQT1MnID8gYCQkeyhyb3cuYW1vdW50IHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gIDogJyd9PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT57cm93LnR5cGUgPT09ICdQYXltZW50JyB8fCByb3cudHlwZSA9PT0gJ1BPUycgPyBgJCR7KHJvdy5wYXltZW50IHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gIDogJyd9PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT57YCQke2Ftb3VudDEudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWB9PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIClcclxuICB9KVxyXG4gIGxldCBhbW91bnQyID0gMFxyXG4gIGNvbnN0IGFsbFN0YW5kaW5nUm93ID0gT3V0U3RhbmRTdGF0ZW1lbnQ/Lm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICBpZiAocm93LnR5cGUgPT09ICdJbnZvaWNlJyB8fCByb3cudHlwZSA9PT0gJyoqKk9wZW5pbmcgQmFsYW5jZSoqKicpIHtcclxuICAgICAgYW1vdW50MiArPSBwYXJzZUZsb2F0KHJvdy5iYWxhbmNlKVxyXG4gICAgfSBlbHNlIGlmIChyb3cudHlwZSA9PT0gJ1BheW1lbnQnKSB7XHJcbiAgICAgIGFtb3VudDIgLT0gcGFyc2VGbG9hdChyb3cucGF5bWVudClcclxuICAgIH0gZWxzZSBpZiAocm93LnR5cGUgPT09ICdQT1MnKSB7XHJcbiAgICAgIC8vIEZvciBvdXRzdGFuZGluZywgUE9TIGlzIHVzdWFsbHkgZnVsbHkgcGFpZCwgc28gYW1vdW50IC0gcGF5bWVudCA9IDAgaWYgc3RhdHVzIGlzIFBhaWQuXHJcbiAgICAgIC8vIElmIHBhcnRpYWxseSBwYWlkLCBiYWxhbmNlIHNob3VsZCBiZSByb3cuYW1vdW50IC0gcm93LnBheW1lbnRcclxuICAgICAgY29uc3QgcG9zQmFsYW5jZSA9IChyb3cuYW1vdW50IHx8IDApIC0gKHJvdy5wYXltZW50IHx8IDApO1xyXG4gICAgICBhbW91bnQyICs9IHBvc0JhbGFuY2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT57ZGF5anMocm93LmRhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvdGQ+XHJcbiAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0+e3Jvdy50eXBlfTwvdGQ+XHJcbiAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICA8c3Bhbj57cm93LnR5cGUgPT09ICdJbnZvaWNlJyAmJiAoJ1JlZiAnICsgcm93LmRlZmVjdCArICcgSU5WLScgKyBTdHJpbmcocm93Lm51bWJlcikucGFkU3RhcnQoNiwgJzAnKSArICcgLSBkdWUgb24gJyArIGRheWpzKHJvdy5kdWUpLmZvcm1hdCgnREQgTU1NTSBZWVlZJykpfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntyb3cudHlwZSA9PT0gJ1BheW1lbnQnICYmIHJvdy5jcmVkaXQgPiAwICYmICgnUEFZLScgKyBTdHJpbmcocm93Lm51bWJlcikucGFkU3RhcnQoNiwgJzAnKSArICcgJCcgKyByb3cuY3JlZGl0ICsgJyBJbiBBZHZhbmNlZCBQYXltZW50IChDcmVkaXQpICcpfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntyb3cudHlwZSA9PT0gJ1BheW1lbnQnICYmIHJvdy5udW1iZXJBcnJheT8ubGVuZ3RoID4gMCAmJiAoJ1BBWS0nICsgU3RyaW5nKHJvdy5udW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnICQnICsgcm93LnBheW1lbnQgKyAnIGZvciBwYXltZW50IG9mICcgKyByb3cucmUgKyByb3cubnVtYmVyQXJyYXk/Lm1hcCgocm93MikgPT4gJ0lOVi0nICsgU3RyaW5nKHJvdzIuUmVmKS5wYWRTdGFydCg2LCAnMCcpKSArICcgLyBNb2RlOiAnICsgcm93LmRlZmVjdCl9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e3Jvdy50eXBlID09PSAnUE9TJyAmJiAoJ1BPUy0nICsgU3RyaW5nKHJvdy5udW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIC0gJyArIHJvdy5kZWZlY3QpfTwvc3Bhbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cudHlwZSA9PT0gJ0ludm9pY2UnIHx8IHJvdy50eXBlID09PSAnKioqT3BlbmluZyBCYWxhbmNlKioqJyB8fCByb3cudHlwZSA9PT0gJ1BPUycgPyBgJCR7KHJvdy5hbW91bnQgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWAgOiAnJ308L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cudHlwZSA9PT0gJ1BheW1lbnQnIHx8IHJvdy50eXBlID09PSAnUE9TJyA/IGAkJHsocm93LnBheW1lbnQgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWAgOiBgJCR7KHJvdy5wYWlkQW1vdW50IHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gfTwvdGQ+XHJcbiAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0+e2AkJHthbW91bnQyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gfTwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICApXHJcbiAgfSlcclxuICBsZXQgYW1vdW50MyA9IDBcclxuICBjb25zdCBhbGxSb3cgPSBBbGxTdGF0ZW1lbnQ/Lm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICBpZiAocm93LnR5cGUgPT09ICdJbnZvaWNlJyB8fCByb3cudHlwZSA9PT0gJyoqKk9wZW5pbmcgQmFsYW5jZSoqKicpIHtcclxuICAgICAgYW1vdW50MyArPSBwYXJzZUZsb2F0KHJvdy5hbW91bnQpXHJcbiAgICB9IGVsc2UgaWYgKHJvdy50eXBlID09PSAnUGF5bWVudCcpIHtcclxuICAgICAgYW1vdW50MyAtPSBwYXJzZUZsb2F0KHJvdy5wYXltZW50KVxyXG4gICAgfSBlbHNlIGlmIChyb3cudHlwZSA9PT0gJ1BPUycpIHtcclxuICAgICAgYW1vdW50MyArPSBwYXJzZUZsb2F0KHJvdy5hbW91bnQpXHJcbiAgICAgIGFtb3VudDMgLT0gcGFyc2VGbG9hdChyb3cucGF5bWVudCB8fCAwKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0+e2RheWpzKHJvdy5kYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cudHlwZX08L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgPHNwYW4+e3Jvdy50eXBlID09PSAnSW52b2ljZScgJiYgKCdSZWYgJyArIHJvdy5kZWZlY3QgKyAnIElOVi0nICsgU3RyaW5nKHJvdy5udW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIC0gZHVlIG9uICcgKyBkYXlqcyhyb3cuZHVlKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpKX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57cm93LnR5cGUgPT09ICdQYXltZW50JyAmJiByb3cuY3JlZGl0ID4gMCAmJiAoJ1BBWS0nICsgU3RyaW5nKHJvdy5udW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnICQnICsgcm93LmNyZWRpdCArICcgSW4gQWR2YW5jZWQgUGF5bWVudCAoQ3JlZGl0KSAnKX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57cm93LnR5cGUgPT09ICdQYXltZW50JyAmJiByb3cubnVtYmVyQXJyYXk/Lmxlbmd0aCA+IDAgJiYgKCdQQVktJyArIFN0cmluZyhyb3cubnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyAkJyArIHJvdy5wYXltZW50ICsgJyBmb3IgcGF5bWVudCBvZiAnICsgcm93LnJlICsgcm93Lm51bWJlckFycmF5Py5tYXAoKHJvdzIpID0+ICdJTlYtJyArIFN0cmluZyhyb3cyLlJlZikucGFkU3RhcnQoNiwgJzAnKSkgKyAnIC8gTW9kZTogJyArIHJvdy5kZWZlY3QpfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntyb3cudHlwZSA9PT0gJ1BPUycgJiYgKCdQT1MtJyArIFN0cmluZyhyb3cubnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyAtICcgKyByb3cuZGVmZWN0KX08L3NwYW4+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT57cm93LnR5cGUgPT09ICdJbnZvaWNlJyB8fCByb3cudHlwZSA9PT0gJyoqKk9wZW5pbmcgQmFsYW5jZSoqKicgfHwgcm93LnR5cGUgPT09ICdQT1MnID8gYCQkeyhyb3cuYW1vdW50IHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gIDogJyd9PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT57cm93LnR5cGUgPT09ICdQYXltZW50JyB8fCByb3cudHlwZSA9PT0gJ1BPUycgPyBgJCR7KHJvdy5wYXltZW50IHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gIDogJyd9PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT57YCQke2Ftb3VudDMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWB9PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIClcclxuICB9KVxyXG4gIGxldCBhbW91bnQ0ID0gMFxyXG4gIGNvbnN0IHllYXJSb3cgPSBuZXdTdGF0ZW1lbnQ/Lm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICBsZXQgY3JlZGl0ID0gMFxyXG4gICAgaWYgKHJvdy50eXBlID09PSAnSW52b2ljZScgfHwgcm93LnR5cGUgPT09ICcqKipPcGVuaW5nIEJhbGFuY2UqKionKSB7XHJcbiAgICAgIGFtb3VudDQgKz0gcGFyc2VGbG9hdChyb3cuYW1vdW50KVxyXG4gICAgfSBlbHNlIGlmIChyb3cudHlwZSA9PT0gJ1BheW1lbnQnKSB7XHJcbiAgICAgIGFtb3VudDQgLT0gcGFyc2VGbG9hdChyb3cucGF5bWVudClcclxuICAgIH0gZWxzZSBpZiAocm93LnR5cGUgPT09ICdQT1MnKSB7XHJcbiAgICAgIGFtb3VudDQgKz0gcGFyc2VGbG9hdChyb3cuYW1vdW50KVxyXG4gICAgICBhbW91bnQ0IC09IHBhcnNlRmxvYXQocm93LnBheW1lbnQgfHwgMClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19PntkYXlqcyhyb3cuZGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT57cm93LnR5cGV9PC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgIDxzcGFuPntyb3cudHlwZSA9PT0gJ0ludm9pY2UnICYmICgnUmVmICcgKyByb3cuZGVmZWN0ICsgJyBJTlYtJyArIFN0cmluZyhyb3cubnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyAtIGR1ZSBvbiAnICsgZGF5anMocm93LmR1ZSkuZm9ybWF0KCdERCBNTU1NIFlZWVknKSl9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e3Jvdy50eXBlID09PSAnUGF5bWVudCcgJiYgcm93Lm51bWJlckFycmF5Lmxlbmd0aCA9PT0gMCAmJiByb3cuY3JlZGl0ID4gMCAmJiAoJ1BBWS0nICsgU3RyaW5nKHJvdy5udW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnICQnICsgcm93LmNyZWRpdCArICcgSW4gQWR2YW5jZWQgUGF5bWVudCAoQ3JlZGl0KSAnKX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57cm93LnR5cGUgPT09ICdQYXltZW50JyAmJiByb3cubnVtYmVyQXJyYXkubGVuZ3RoID4gMCAmJiAoJ1BBWS0nICsgU3RyaW5nKHJvdy5udW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnICQnICsgcm93LnBheW1lbnQgKyAnIGZvciBwYXltZW50IG9mICcgKyByb3cubnVtYmVyQXJyYXk/Lm1hcCgocm93MikgPT4gJ0lOVi0nICsgU3RyaW5nKHJvdzIuUmVmKS5wYWRTdGFydCg2LCAnMCcpKSArICcgLyBNb2RlOiAnICsgcm93LmRlZmVjdCl9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e3Jvdy50eXBlID09PSAnUE9TJyAmJiAoJ1BPUy0nICsgU3RyaW5nKHJvdy5udW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIC0gJyArIHJvdy5kZWZlY3QpfTwvc3Bhbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cudHlwZSA9PT0gJ0ludm9pY2UnIHx8IHJvdy50eXBlID09PSAnKioqT3BlbmluZyBCYWxhbmNlKioqJyB8fCByb3cudHlwZSA9PT0gJ1BPUycgPyBgJCR7KHJvdy5hbW91bnQgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWAgOiAnJ308L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cudHlwZSA9PT0gJ1BheW1lbnQnIHx8IHJvdy50eXBlID09PSAnUE9TJyA/IGAkJHsocm93LnBheW1lbnQgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWAgOiAnJ308L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19PntgJCR7YW1vdW50NC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9YH08L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ3VzdG9tZXIgVmlld1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvQ3VzdG9tZXJWaWV3QWRtaW4nKX0+XHJcbiAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaWRlQmFyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNpZGVCYXIoZmFsc2UpfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRhc2ggLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDIgfX0gPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbG9hZGluZ0RhdGEgPyA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJzEyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93MSA9PT0gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cyID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBwYWRkaW5nOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz5BbGwgQ3VzdG9tZXI8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMScgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdzIoMil9PkZpbHRlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNTU1cHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VzdG9tZXI/Lm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cm93LkN1c3RvbWVyID8gcm93LkN1c3RvbWVyIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL0N1c3RvbWVySW5mb3JtYXRpb25WaWV3LyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93MiA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzEwcHgnIH19IHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cyKDEpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzMwMzY4YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNTgwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld0FycmF5Py5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jvdy5DdXN0b21lciA/IHJvdy5DdXN0b21lciA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9DdXN0b21lckluZm9ybWF0aW9uVmlldy8ke3Jvdy5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMzMDM2OGEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcjInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmQ6ICd3aGl0ZScgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXN0b21lcj8uZmlsdGVyKGkgPT4gaS5faWQgPT09IGlkKT8ubWFwKChpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aS5faWR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyMkhlYWQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e2kuY3VzdG9tZXJGdWxsTmFtZSA/IGkuY3VzdG9tZXJGdWxsTmFtZS50b1VwcGVyQ2FzZSgpIDogaS5jb21wYW55TmFtZS50b1VwcGVyQ2FzZSgpfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtvcGVuID8gJ2RlbW8tY3VzdG9taXplZC1tZW51JyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuID8gJ3RydWUnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUVsZXZhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEtleWJvYXJkQXJyb3dEb3duSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnZ3JheScsICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1jdXN0b21pemVkLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW51TGlzdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6ICdkZW1vLWN1c3RvbWl6ZWQtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zaXRpb25Db21wb25lbnQ9e0ZhZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17Y3VzdG9tZXJJbmZvVS5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9DdXN0b21lckZvcm1VcGRhdGUvJHtpLl9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RWRpdDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVPcGVuUHJpbnR9IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsUHJpbnRzaG9wIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJpbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVPcGVuUHJpbnQxfSBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbFByaW50c2hvcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlByaW50IFBheW1lbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93MSgyKX0+IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+Q29tbWVudHM8L3NwYW4+IDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93MSgzKX0+IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+SGlzdG9yeTwvc3Bhbj48L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJDb250ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgYm9yZGVyQm90dG9tOiAxLCBib3JkZXJDb2xvcjogJ2RpdmlkZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiTGlzdCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGFiIEFQSSB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk92ZXJ2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUcmFuc2FjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGF5bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdGVtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIlBPUyBIaXN0b3J5XCIgdmFsdWU9XCI2XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9XCIxXCIgc3g9e3sgaGVpZ2h0OiAnNTUwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkN1c3RvbWVyIENvbnRhY3Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkN1c3RvbWVyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aS5jdXN0b21lckZ1bGxOYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q29tcGFueSBOYW1lPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aS5jb21wYW55TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkVtYWlsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aS5jdXN0b21lckVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UGhvbmU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpLmN1c3RvbWVyQ29tcGFueVBob25lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UGhvbmUyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aS5jdXN0b21lclBob25lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QmlsbGluZyBBZGRyZXNzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aS5iaWxsaW5nQWRkcmVzcy50b1VwcGVyQ2FzZSgpfSwgPHNwYW4+e2kuYmlsbGluZ0NpdHkudG9VcHBlckNhc2UoKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TaGlwcGluZyBBZGRyZXNzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aS5zaGlwcGluZ0FkZHJlc3MudG9VcHBlckNhc2UoKX0sIDxzcGFuPntpLnNoaXBwaW5nQ2l0eS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5DdXJyZW5jeSAmIFRlcm1zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DdXJyZW5jeTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2kuY3VycmVuY3l9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UZXJtczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2kucGF5bWVudFRlcm1zfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkRlc2NyaXB0aW9uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHByZSBzdHlsZT17eyBmb250RmFtaWx5OiAnc3lzdGVtLXVpJywgY29sb3I6ICdibGFjaycsIGZvbnRTaXplOiAnMTVweCcgfX0+e2kuY3VzdG9tZXJEZXNjcmlwdGlvbi50b1VwcGVyQ2FzZSgpfTwvcHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9XCIyXCIgc3g9e3sgaGVpZ2h0OiAnNTUwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gZXhwYW5kZWQ9e2V4cGFuZGVkID09PSAncGFuZWwxJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFuZWwxJyl9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5RdW90YXRpb248L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qKiBRdW90YXRpb24gVGFibGUgU3RhcnQqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD48Q2hlY2tib3ggLz48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+RGF0ZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5RdW90YXRpb24jPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkN1c3RvbWVyPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlN0YXR1czwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5RdW90YXRpb24gQW1vdW50PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj5BY3Rpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VzdGltYXRlPy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD48Q2hlY2tib3ggLz48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57ZGF5anMocm93LmVzdGltYXRlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlEte1N0cmluZyhyb3cuZXN0aW1hdGVOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+e3Jvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvVXBwZXJDYXNlKCl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyA9PT0gXCJEcmFmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJncmF5XCIgOiByb3cuc3RhdHVzID09PSBcIlNlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJibHVlXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0dXMgPT09IFwiRGVjbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmVkXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyA9PT0gXCJBcHByb3ZlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjMzM5YmE1XCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIkludm9pY2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiIzZhMWI5YVwiIDogXCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj4gPHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj4ge3Jvdy5zdWJUb3RhbC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9IDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9Fc3RpbWF0ZVZpZXdBZG1pbkFsbC8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiVmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5SWNvbiBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdFRvb2x0aXAgdGl0bGU9XCJFZGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17cm93LnN0YXR1cyAhPT0gJ0RyYWZ0JyAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9Fc3RpbWF0ZUludm9pY2VGb3JtVXBkYXRlLyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0VkaXRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyoqIFF1b3RhdGlvbiBUYWJsZSBFbmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gJ3BhbmVsMid9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3BhbmVsMicpfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+UHVyY2hhc2UgUmVxdWVzdDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyoqIFF1b3RhdGlvbiBUYWJsZSBTdGFydCovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPjxDaGVja2JveCAvPjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5EYXRlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlB1cmNoYXNlIzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5DdXN0b21lcjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5TdGF0dXM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+UHVyY2hhc2UgQW1vdW50PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj5BY3Rpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3B1cmNoYXNlPy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD48Q2hlY2tib3ggLz48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57ZGF5anMocm93LnB1cmNoYXNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlBVUi17U3RyaW5nKHJvdy5wdXJjaGFzZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9VcHBlckNhc2UoKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzSW5mbyAhPT0gdW5kZWZpbmVkICYmIHJvdy5zdGF0dXNJbmZvID09PSBcIlBlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZ3JheVwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1c0luZm8gIT09IHVuZGVmaW5lZCAmJiByb3cuc3RhdHVzSW5mbyA9PT0gXCJPbi1Hb2luZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1c0luZm8gIT09IHVuZGVmaW5lZCAmJiByb3cuc3RhdHVzSW5mbyA9PT0gXCJTdG9wcGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZWRcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzSW5mbyAhPT0gdW5kZWZpbmVkICYmIHJvdy5zdGF0dXNJbmZvID09PSBcIlBlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiT3JhbmdlXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzSW5mbyAhPT0gdW5kZWZpbmVkICYmIHJvdy5zdGF0dXNJbmZvID09PSBcIkNvbXBsZXRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyZWVuXCIgOiBcImJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnN0YXR1c0luZm8gIT09IHVuZGVmaW5lZCA/IHJvdy5zdGF0dXNJbmZvIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj4gPHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj4ge3Jvdy5wdXJjaGFzZUFtb3VudDEudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvUHVyY2hhc2VzVmlld0FkbWluQWxsLyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJWaWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHlJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0VG9vbHRpcCB0aXRsZT1cIkVkaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGRpc2FibGVkPXtyb3cuc3RhdHVzICE9PSAnT24tR29pbmcnICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL1B1cmNoYXNlRm9ybVVwZGF0ZS8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9FZGl0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qKiBRdW90YXRpb24gVGFibGUgRW5kICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiBleHBhbmRlZD17ZXhwYW5kZWQgPT09ICdwYW5lbDMnfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYW5lbDMnKX0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pk1haW50ZW5hbmNlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiogUXVvdGF0aW9uIFRhYmxlIFN0YXJ0Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+PENoZWNrYm94IC8+PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkRhdGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+TWFpbnRlbmFuY2UjPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkN1c3RvbWVyPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlN0YXR1czwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5NYWludGVuYW5jZSBBbW91bnQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwibGVmdFwiPkFjdGlvbjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWFpbnRlbmFuY2U/Lm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPjxDaGVja2JveCAvPjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntkYXlqcyhyb3cuc2VydmljZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5NLXtTdHJpbmcocm93LnNlcnZpY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+e3Jvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvVXBwZXJDYXNlKCl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyA9PT0gXCJPcGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0dXMgPT09IFwiUGVuZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiM4MDEzMTNcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyA9PT0gXCJSZXNjaGVkdWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJPcmFuZ2VcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIkNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZWRcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0dXMgPT09IFwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJncmVlblwiIDogXCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj4gPHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj4ge3Jvdy50b3RhbEludm9pY2UudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvTWFpbnRlbmFuY2VWaWV3SW5mb3JtYXRpb24vJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIlZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRUb29sdGlwIHRpdGxlPVwiRWRpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e3Jvdy5zdGF0dXMgIT09ICdPbi1Hb2luZycgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvTWFpbnRlbmFuY2VVcGRhdGVWaWV3LyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0VkaXRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyoqIFF1b3RhdGlvbiBUYWJsZSBFbmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gJ3BhbmVsNCd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3BhbmVsNCcpfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+SW52b2ljZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyoqIEludm9pY2UgVGFibGUgU3RhcnQqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD48Q2hlY2tib3ggLz48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+RGF0ZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5JbnZvaWNlICM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+Q3VzdG9tZXI8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+U3RhdHVzPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkludm9pY2UgQW1vdW50PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj5BY3Rpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ludm9pY2U/Lm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPjxDaGVja2JveCAvPjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntkYXlqcyhyb3cuaW52b2ljZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5JTlYte1N0cmluZyhyb3cuaW52b2ljZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgPntyb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZS50b1VwcGVyQ2FzZSgpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPiA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyA9PT0gXCJEcmFmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZ3JheVwiIDogcm93LnN0YXR1cyA9PT0gXCJTZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0dXMgPT09IFwiRGVjbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJlZFwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIlBlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiM4MDEzMTNcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIlBhaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiIzRjYWY1MFwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyA9PT0gXCJQYXJ0aWFsbHktUGFpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiNmYjhjMDBcIiA6IFwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+IDxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+IHtyb3cuc3ViVG90YWwudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvSW52b2ljZVZpZXdBZG1pbkFsbC8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiVmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5SWNvbiBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdFRvb2x0aXAgdGl0bGU9XCJFZGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17cm93LnN0YXR1cyAhPT0gJ0RyYWZ0JyAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9JbnZvaWNlRm9ybVVwZGF0ZS8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9FZGl0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qKiBJbnZvaWNlIFRhYmxlIEVuZCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiM1wiIHN4PXt7IGhlaWdodDogJzU1MHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGhpZGRlbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgcmVmPXtjb21wb25lbnRSZWYxfSBjbGFzc05hbWU9J2ludm9pY2VkZXRhaWxzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludm9pY2VUZXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaW50SGVhZGVyIGJyYW5jaElkPXt0eXBlb2Ygcm93ICE9PSBcInVuZGVmaW5lZFwiID8gcm93Py5icmFuY2hJZCA6IFwiXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naW52b2ljZWhyJz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50JyBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyMHB4JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFkZHJlc3Mgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxpbmVIZWlnaHQ6IDEuMzUsIHdpZHRoOiAnNjAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGZvbnRTaXplOiAnMTNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGZvbnRTaXplOiAnMTNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aS5DdXN0b21lci50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzEzcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2kuYmlsbGluZ0FkZHJlc3MudG9VcHBlckNhc2UoKX0sIHtpLmJpbGxpbmdDaXR5LnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlyc3RUYWJsZVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmb250U2l6ZTogJzcwJScsIGxlZnQ6ICc4M3B4JywgbWFyZ2luQm90dG9tOiAnMTBweCcsIHBhZ2VCcmVha0luc2lkZTogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+UGF5bWVudCBTdW1tYXJ5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJywgdGV4dEFsaWduOiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGwgVHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgZm9udFNpemU6ICc3MCUnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIG1heEhlaWdodDogJzQwMHB4Jywgb3ZlcmZsb3c6ICdhdXRvJywgcGFnZUJyZWFrSW5zaWRlOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5Nb2RlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT4gQW1vdW50IFJlY2VpdmVkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT4gQW1vdW50IFBhaWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PkNyZWRpdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudC5tYXAoKHJvdykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5QQVkte1N0cmluZyhyb3cucGF5bWVudE51bWJlcikucGFkU3RhcnQoNiwgJzAnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT57ZGF5anMocm93LnBheW1lbnREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT57cm93Lm1vZGVzLnRvVXBwZXJDYXNlKCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+e3Jvdy5hbW91bnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5Ub3RhbEFtb3VudD8ubWFwKChJdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRJbnZvaWNlID0gaW52b2ljZT8uZmluZCgocm93MSkgPT4gcm93MS5faWQgPT09IEl0ZW0uaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntyb3cucmVhc29uID09PSBcIlByb2plY3RcIiA/IFwiUC1cIiA6IFwiSU5WLVwifXtTdHJpbmcoSXRlbS5SZWYpLnBhZFN0YXJ0KDYsICcwJyl9IC8ge3JlbGF0ZWRJbnZvaWNlPy5pbnZvaWNlU3ViamVjdD8udG9VcHBlckNhc2UoKX06ICAke0l0ZW0udG90YWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMTAwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cucmVtYWluaW5nLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NH0+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VG90YWwgQ3JlZGl0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpLmNyZWRpdCAhPT0gdW5kZWZpbmVkID8gaS5jcmVkaXQgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW5Ub3A6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaGlkZGVuPi4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaGlkZGVuPi4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludEZvb3RlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiB0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIiA/IGRhdGE/LmJyYW5jaElkIDogXCJcIn0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCB3aWR0aDogJzE3MHB4JywgaGVpZ2h0OiAnNTVweCcsIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLCBjb2xvcjogJ3doaXRlJywgbWFyZ2luQm90dG9tOiAnMTBweCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMzAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc0MHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FjaGVkIHN4PXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZUNyZWRpdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5DcmVkaXQ6ICR7aS5jcmVkaXQgIT09IHVuZGVmaW5lZCA/IGkuY3JlZGl0IDogMH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzgwJScsIG1hcmdpbkJvdHRvbTogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+TW9kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PiBBbW91bnQgUmVjZWl2ZWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT4gQW1vdW50IFBhaWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5DcmVkaXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT4gQWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudC5tYXAoKHJvdykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICc1MHB4JyB9fT5QQVkte1N0cmluZyhyb3cucGF5bWVudE51bWJlcikucGFkU3RhcnQoNiwgJzAnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzMwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PntkYXlqcyhyb3cucGF5bWVudERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnNTBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+e3Jvdy5tb2Rlcy50b1VwcGVyQ2FzZSgpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMTAwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cuYW1vdW50LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzEwMHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5Ub3RhbEFtb3VudD8ubWFwKChJdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRlZEludm9pY2UgPSBpbnZvaWNlPy5maW5kKChyb3cxKSA9PiByb3cxLl9pZCA9PT0gSXRlbS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e0l0ZW0ucHJlZml4IHx8IChyZWxhdGVkSW52b2ljZT8uUmVmZXJlbmNlTmFtZTIgfHwgcmVsYXRlZEludm9pY2U/Lmludm9pY2VQdXJjaGFzZSA9PT0gJ1B1cmNoYXNlZCcgPyBcIlAtXCIgOiAocm93LnJlYXNvbiA9PT0gXCJQcm9qZWN0XCIgPyBcIlAtXCIgOiBcIklOVi1cIikpfXtTdHJpbmcoSXRlbS5SZWYpLnBhZFN0YXJ0KDYsICcwJyl9IC8ge3JlbGF0ZWRJbnZvaWNlPy5pbnZvaWNlU3ViamVjdD8udG9VcHBlckNhc2UoKX06ICAke0l0ZW0udG90YWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzEwMHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT57cm93LnJlbWFpbmluZy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICc0MHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiVmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9QYXltZW50SW5mb3JtYXRpb25WaWV3LyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjVcIiBzeD17eyBoZWlnaHQ6ICc1NTBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1cHgnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICcwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwic2VsZWN0XCI+c2VsZWN0PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlbGVjdE9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0T3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RPcHRpb25zKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGVjdE9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlllYXJcIj5ZZWFyPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiQ3VzdG9tXCI+Q3VzdG9tPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiQWxsIE91dHN0YW5kaW5nXCI+QWxsIE91dHN0YW5kaW5nPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiQWxsXCI+QWxsPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0T3B0aW9ucyA9PT0gJ1llYXInICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlcicsICdEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RhcnREYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoc3RhcnREYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBoYW5kbGVDaGFuZ2VEYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnXCJ5ZWFyXCInfSB2aWV3cz17Wyd5ZWFyJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0T3B0aW9ucyA9PT0gJ0N1c3RvbScgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGdhcDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlcicsICdEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZnJvbURhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Zyb20gRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoZnJvbURhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gaGFuZGxlQ2hhbmdlRGF0ZUZyb20oZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJywgJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbmREYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdUbyBEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhlbmREYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IGhhbmRsZUNoYW5nZURhdGVFbmQoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggaGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSByZWY9e2NvbXBvbmVudFJlZn0gY2xhc3NOYW1lPSdpbnZvaWNlZGV0YWlscyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnZvaWNlVGVzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludEhlYWRlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiBcIlwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ludm9pY2Vocic+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCcgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMjBweCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsaW5lSGVpZ2h0OiAxLjM1LCB3aWR0aDogJzYwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogJzEzcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVE9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogJzEzcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2kuQ3VzdG9tZXIudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpLmJpbGxpbmdBZGRyZXNzLnRvVXBwZXJDYXNlKCl9LCB7aS5iaWxsaW5nQ2l0eS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hZGRyZXNzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaXJzdFRhYmxlXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZvbnRTaXplOiAnNzAlJywgbGVmdDogJzgzcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgcGFnZUJyZWFrSW5zaWRlOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17Mn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5TdGF0ZW1lbnQgb2YgQWNjb3VudHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RPcHRpb25zID09PSAnWWVhcicgJiYgKDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RheWpzKG5ldyBEYXRlKHRyYW5zYWN0aW9uWWVhcnMsIDAsIDEpKS5mb3JtYXQoJ0REL01NL1lZWVknKX0gVG8ge2RheWpzKG5ldyBEYXRlKHRyYW5zYWN0aW9uWWVhcnMsIDExLCAzMSkpLmZvcm1hdCgnREQvTU0vWVlZWScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMgPT09ICdDdXN0b20nICYmICg8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXlqcyhmcm9tRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9IFRvIHtkYXlqcyhlbmREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RPcHRpb25zID09PSAnQWxsJyAmJiAoPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGwgVHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RPcHRpb25zID09PSAnQWxsIE91dHN0YW5kaW5nJyAmJiAoPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGwgT3V0c3RhbmRpbmcgSW52b2ljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ2xlZnQnIH19PkFjY291bnQgU3VtbWFyeTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPk9wZW5pbmcgQmFsYW5jZTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT48c3BhbiA+e2AkJHtvcGVuaW5nQmFsYW5jZVRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuID5JbnZvaWNlZCBBbW91bnQ8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+PHNwYW4gPntgJCR7SW52b2ljZVRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPkFtb3VudCBQYWlkPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+PHNwYW4gPntgJCR7UGF5bWVudFRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuID5CYWxhbmNlIER1ZTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT48c3BhbiA+e2AkJHt0b3RhbEJhbGFuY2UudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWB9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzcwJScsIG1hcmdpbkJvdHRvbTogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbWF4SGVpZ2h0OiAnNDAwcHgnLCBvdmVyZmxvdzogJ2F1dG8nLCBwYWdlQnJlYWtJbnNpZGU6ICdhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzE1MHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5UcmFuc2FjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICc0MDBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+RGV0YWlsczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5QYXltZW50czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+QmFsYW5jZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMgPT09ICdZZWFyJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt5ZWFyUm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9PkJhbGFuY2UgRHVlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2AkJHthbW91bnQ0LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0T3B0aW9ucyA9PT0gJ0FsbCcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWxsUm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9PkJhbGFuY2UgRHVlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2AkJHthbW91bnQzLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0T3B0aW9ucyA9PT0gJ0FsbCBPdXRzdGFuZGluZycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWxsU3RhbmRpbmdSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0+QmFsYW5jZSBEdWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YCQke2Ftb3VudDIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RPcHRpb25zID09PSAnQ3VzdG9tJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXN0b21Sb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0+QmFsYW5jZSBEdWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YCQke2Ftb3VudDEudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW5Ub3A6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaGlkZGVuPi4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaGlkZGVuPi4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludEZvb3RlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiB0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIiA/IGRhdGE/LmJyYW5jaElkIDogXCJcIn0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpbnRIZWFkZXIgYnJhbmNoSWQ9e3R5cGVvZiByb3cgIT09IFwidW5kZWZpbmVkXCIgPyByb3c/LmJyYW5jaElkIDogdHlwZW9mIGRhdGEgIT09IFwidW5kZWZpbmVkXCIgPyBkYXRhPy5icmFuY2hJZCA6IFwiXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz48cCBjbGFzc05hbWU9J2ludm9pY2Vocic+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luVG9wOiAnMjVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFkZHJlc3Mgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxpbmVIZWlnaHQ6IDEuMzUsIHdpZHRoOiAnNjAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcxM3B4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGZvbnRTaXplOiAnMTNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2kuQ3VzdG9tZXIudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aS5iaWxsaW5nQWRkcmVzcy50b1VwcGVyQ2FzZSgpfSwge2kuYmlsbGluZ0NpdHkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlyc3RUYWJsZVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmb250U2l6ZTogJzcwJScsIGxlZnQ6ICc4M3B4JywgbWFyZ2luQm90dG9tOiAnMTBweCcsIHBhZ2VCcmVha0luc2lkZTogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+U3RhdGVtZW50IG9mIEFjY291bnRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMgPT09ICdZZWFyJyAmJiAoPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RheWpzKG5ldyBEYXRlKHRyYW5zYWN0aW9uWWVhcnMsIDAsIDEpKS5mb3JtYXQoJ0REL01NL1lZWVknKX0gVG8ge2RheWpzKG5ldyBEYXRlKHRyYW5zYWN0aW9uWWVhcnMsIDExLCAzMSkpLmZvcm1hdCgnREQvTU0vWVlZWScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RPcHRpb25zID09PSAnQ3VzdG9tJyAmJiAoPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RheWpzKGZyb21EYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX0gVG8ge2RheWpzKGVuZERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RPcHRpb25zID09PSAnQWxsJyAmJiAoPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxsIFRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMgPT09ICdBbGwgT3V0c3RhbmRpbmcnICYmICg8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGwgT3V0c3RhbmRpbmcgSW52b2ljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+QWNjb3VudCBTdW1tYXJ5PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3BhbiA+T3BlbmluZyBCYWxhbmNlPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT48c3BhbiA+e2AkJHtvcGVuaW5nQmFsYW5jZVRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuID5JbnZvaWNlZCBBbW91bnQ8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAncmlnaHQnIH19PjxzcGFuID57YCQke0ludm9pY2VUb3RhbC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9YH08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycsIHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuID5BbW91bnQgUGFpZDwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT48c3BhbiA+e2AkJHtQYXltZW50VG90YWwudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWB9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPkJhbGFuY2UgRHVlPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT48c3BhbiA+e2AkJHt0b3RhbEJhbGFuY2UudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWB9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgZm9udFNpemU6ICc3MCUnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIG1heEhlaWdodDogJzQwMHB4Jywgb3ZlcmZsb3c6ICdhdXRvJywgcGFnZUJyZWFrSW5zaWRlOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzE1MHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5UcmFuc2FjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzQwMHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5EZXRhaWxzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5QYXltZW50czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzE1MHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5CYWxhbmNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RPcHRpb25zID09PSAnWWVhcicgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3llYXJSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0+QmFsYW5jZSBEdWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntgJCR7YW1vdW50NC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9YH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMgPT09ICdBbGwnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbGxSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0+QmFsYW5jZSBEdWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntgJCR7YW1vdW50My50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9YH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMgPT09ICdBbGwgT3V0c3RhbmRpbmcnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbGxTdGFuZGluZ1Jvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfT5CYWxhbmNlIER1ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2AkJHthbW91bnQyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0T3B0aW9ucyA9PT0gJ0N1c3RvbScgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1c3RvbVJvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfT5CYWxhbmNlIER1ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2AkJHthbW91bnQxLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcmludm9pY2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzVweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxFbWFpbCAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db250YWN0QEdsb2JhbEdhdGUuU2FybDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzVweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxQaG9uZSAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rMjQzIDgyNyA3MjIgMjIyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PFdlYkljb24gLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+d3d3Lkdsb2JhbEdhdGUuc2FybDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEdyYW5kIFRvdGFsIENhbGN1bGF0aW9uIGFuZCBEaXNwbGF5ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyYW5kVG90YWwgPSBwb3NIaXN0b3J5LnJlZHVjZSgoc3VtLCByb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNkQW1vdW50ID0gcm93LnJhdGUgPiAwID8gKHJvdy50b3RhbEludm9pY2UgLyByb3cucmF0ZSkgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtICsgdXNkQW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNScsIGJvcmRlclJhZGl1czogJzVweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyYW5kIFRvdGFsOiAke2dyYW5kVG90YWwudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfSBzdHlsZT17eyBib3hTaGFkb3c6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EYXRlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5JbnZvaWNlICM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlN0YXR1czwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+VG90YWwgKFVTRCk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc0hpc3RvcnkubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NIaXN0b3J5Lm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2RBbW91bnQgPSByb3cucmF0ZSA+IDAgPyAocm93LnRvdGFsSW52b2ljZSAvIHJvdy5yYXRlKSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntkYXlqcyhyb3cuaW52b2ljZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5mYWN0dXJlTnVtYmVyfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiByb3cuc3RhdHVzID09PSAnUGFpZCcgPyAnZ3JlZW4nIDogcm93LnN0YXR1cyA9PT0gJ1BhcnRpYWxseS1QYWlkJyA/ICdvcmFuZ2UnIDogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4ke3VzZEFtb3VudC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezR9IGFsaWduPVwiY2VudGVyXCI+Tm8gUE9TIEhpc3RvcnkgRm91bmQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93MSA9PT0gMiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q09NTUVOVFM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93MSgxKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRFZGl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInIH19IHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdjb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzM1NXB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtDb21tZW50czEubWFwKChJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtJdGVtLmRhdGVDb21tZW50ID8gZGF5anMoSXRlbS5kYXRlQ29tbWVudCkuZm9ybWF0KCdERC9NTScpIDogJyd9IHtJdGVtLkNvbW1lbnRJbmZvLnBlcnNvbiArICc6ICcgKyBJdGVtLkNvbW1lbnRJbmZvLnJlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93MSA9PT0gMyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SElTVE9SWTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdzEoMSl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc1MThweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cm93LnBlcnNvbiArICcgb24gJyArIGRheWpzKHJvdy5kYXRlTm90aWZpY2F0aW9uKS5mb3JtYXQoJ0REL01NTU0nKX06IHtyb3cucmVhc29ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNDcmVkaXQgPT09ICd0cnVlJyA/XHJcbiAgICAgICAgICAgICAgICAgIDxoMj4gRGF0YSBVcGRhdGVkIHN1Y2Nlc3NmdWxseTwvaDI+IDpcclxuICAgICAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIEZhaWxlZCB0byBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2RpdiA+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lckluZm9ybWF0aW9uVmlld1xyXG4iXSwibmFtZXMiOlsiUHJpbnRIZWFkZXIiLCJQcmludEZvb3RlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJTaWRlYmFyRGFzaCIsIlNlYXJjaEljb24iLCJBY2NvdW50Q2lyY2xlSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIlRhYmxlQ29udGFpbmVyIiwiQ2hlY2tib3giLCJNZW51IiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlBhcGVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkZvcm1MYWJlbCIsIlJhZGlvR3JvdXAiLCJGb3JtQ29udHJvbExhYmVsIiwiUmFkaW8iLCJJbnB1dCIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJGYWRlIiwiQm94IiwiQXV0b2NvbXBsZXRlIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZVJvdyIsIlRhYmxlSGVhZCIsIlRhYnMiLCJUYWIiLCJCdXR0b24iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJFZGl0SWNvbiIsIkFjY29yZGlvbiIsIkFjY29yZGlvblN1bW1hcnkiLCJBY2NvcmRpb25EZXRhaWxzIiwiRXhwYW5kTW9yZUljb24iLCJ1c2VQYXJhbXMiLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsInVzZU5hdmlnYXRlIiwiTmF2TGluayIsIkxpbmsiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJEaXZpZGVyIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImRheWpzIiwiUmVhY3RUb1ByaW50IiwidXNlUmVhY3RUb1ByaW50IiwiVmlzaWJpbGl0eUljb24iLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiTG9hZGVyIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkNsb3NlIiwiQXJyb3dCYWNrIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiUGhvbmUiLCJXZWJJY29uIiwiRW1haWwiLCJFbWFpbEljb24iLCJQaG9uZUljb24iLCJJbWFnZSIsIktleWJvYXJkQXJyb3dEb3duSWNvbiIsIlRhYkNvbnRleHQiLCJUYWJMaXN0IiwiVGFiUGFuZWwiLCJEYXRlUGlja2VyIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJBZGFwdGVyRGF5anMiLCJEZW1vQ29udGFpbmVyIiwiTG9jYWxQcmludHNob3AiLCJFeGNlbEpTIiwic2F2ZUFzIiwiQ2FjaGVkIiwiRXhwbGljaXQiLCJEZWxldGVUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJFZGl0VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsIkJsYWNrVG9vbHRpcCIsIl9yZWY3IiwiX2V4Y2x1ZGVkNCIsIl9yZWY4Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY5Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWYwIiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiQ3VzdG9tZXJJbmZvcm1hdGlvblZpZXciLCJfY3VzdG9tZXIkZmlsdGVyIiwiX3VzZVBhcmFtcyIsImlkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjEiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZ3JhbnRBY2Nlc3MiLCJzZXRHcmFudEFjY2VzcyIsImZldGNoTnVtYmVyIiwiX3JlZjEwIiwiX3JlcyRkYXRhIiwiZmlsdGVyIiwicm93IiwidXNlcklEIiwibWFwIiwibW9kdWxlcyIsImN1c3RvbWVySW5mb1UiLCJtb2R1bGVOYW1lIiwiYWNjZXNzIiwiZWRpdE0iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInNlbGVjdE9wdGlvbnMiLCJzZXRTZWxlY3RPcHRpb25zIiwiYXBpVXJsIiwiZmV0Y2hEYXRhIiwiX3JlZjExIiwicmV2ZXJzZSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwic2hvdyIsInNldFNob3ciLCJoYW5kbGVTaG93IiwiZSIsIl9SZWFjdCR1c2VTdGF0ZSIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiaGFuZGxlQ2hhbmdlIiwicGFuZWwiLCJldmVudCIsImlzRXhwYW5kZWQiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJ2YWx1ZSIsInNldFZhbHVlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInZhbHVlMiIsInNldFZhbHVlMiIsInNlbGVjdGVkSW5kZXgiLCJmaW5kSW5kZXgiLCJfaWQiLCJoYW5kbGVDaGFuZ2UzIiwibmV3VmFsdWUiLCJoYW5kbGVDaGFuZ2UyIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInNlYXJjaCIsInNldFNlYXJjaCIsImhhbmRsZVNlYXJjaCIsInRhcmdldCIsIm5ld0FycmF5IiwiY3VzdG9tZXJUeXBlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIkN1c3RvbWVyIiwiY3VzdG9tZXJFbWFpbCIsImN1c3RvbWVyRGVzY3JpcHRpb24iLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiZXN0aW1hdGUiLCJzZXRFc3RpbWF0ZSIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJwdXJjaGFzZSIsInNldFB1cmNoYXNlIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsImludm9pY2UiLCJzZXRJbnZvaWNlIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsImludm9pY2UxIiwic2V0SW52b2ljZTEiLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0IiwibWFpbnRlbmFuY2UiLCJzZXRNYWludGVuYW5jZSIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJwYXltZW50Iiwic2V0UGF5bWVudCIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJwb3NIaXN0b3J5Iiwic2V0UG9zSGlzdG9yeSIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJDdXN0b21lckluZm8iLCJzZXRDdXN0b21lckluZm8iLCJfcmVmMTIiLCJfZXN0aW1hdGVSZXNwb25zZSRkYXQiLCJfaW52b2ljZVJlc3BvbnNlJGRhdGEiLCJfaW52b2ljZVJlc3BvbnNlJGRhdGEyIiwiX3B1ckNoYXNlUmVzcG9uc2UkZGF0IiwiX21haW50ZW5hbmNlUmVzcG9uc2UkIiwiX3Jlc1BheW1lbnQkZGF0YSIsImVzdGltYXRlUmVzcG9uc2UiLCJjdXN0b21lck5hbWUiLCJpbnZvaWNlUmVzcG9uc2UiLCJzdGF0dXMiLCJwdXJDaGFzZVJlc3BvbnNlIiwibWFpbnRlbmFuY2VSZXNwb25zZSIsInJlc1BheW1lbnQiLCJyZXNQb3MiLCJfcmVzUG9zJGRhdGEiLCJsb2ciLCJfdXNlU3RhdGUzMSIsInN0b3JlZFF1aWNrIiwiSlNPTiIsInBhcnNlIiwiRGF0ZSIsIl91c2VTdGF0ZTMyIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiX3VzZVN0YXRlMzMiLCJzdG9yZWRRdWlja0Zyb20iLCJfdXNlU3RhdGUzNCIsImZyb21EYXRlIiwic2V0RnJvbURhdGUiLCJfdXNlU3RhdGUzNSIsInN0b3JlZFF1aWNrRW5kIiwiX3VzZVN0YXRlMzYiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsImhhbmRsZUNoYW5nZURhdGUiLCJkYXRlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZUNoYW5nZURhdGVGcm9tIiwiaGFuZGxlQ2hhbmdlRGF0ZUVuZCIsInN0YXRlbWVudCIsImZvckVhY2giLCJwdXNoIiwidHlwZSIsImludm9pY2VEYXRlIiwibnVtYmVyIiwiaW52b2ljZU51bWJlciIsImRlZmVjdCIsImludm9pY2VEZWZlY3QiLCJpbnZvaWNlU3ViamVjdCIsImFtb3VudCIsInRvdGFsSW52b2ljZSIsImJhbGFuY2UiLCJiYWxhbmNlRHVlIiwicGFpZEFtb3VudCIsInRvdGFsIiwiZHVlIiwiaW52b2ljZUR1ZURhdGUiLCJwYXltZW50RGF0ZSIsInBheW1lbnROdW1iZXIiLCJudW1iZXJBcnJheSIsIlRvdGFsQW1vdW50IiwibW9kZXMiLCJyZW1haW5pbmciLCJjcmVkaXQiLCJ1c2RBbW91bnQiLCJyYXRlIiwiZmFjdHVyZU51bWJlciIsIlRvdGFsQW1vdW50UGFpZCIsImZpbHRlcmVkU3RhdGVtZW50IiwidHJhbnNhY3Rpb25ZZWFyIiwiZm9ybWF0IiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsImZpbHRlcmVkRGF0YSIsInNldEZpbHRlcmVkRGF0YSIsImhlYWRlcnMiLCJjdXJyZW50RGF0ZSIsInRvRGF0ZVN0cmluZyIsInNldERhdGUiLCJnZXREYXRlIiwicHJldmlvdXNZZWFyIiwiZ2V0RnVsbFllYXIiLCJwcmV2QmFsYW5jZSIsInRyYW5zYWN0aW9uIiwicGFyc2VGbG9hdCIsIk1hdGgiLCJtYXgiLCJ0cmFuc2FjdGlvblllYXJzIiwibGFzdFllYXJJbmZvIiwibmV3U3RhdGVtZW50SW5mbyIsImNyZWRpdDEiLCJpIiwiY3JlZGl0MiIsInRvRml4ZWQiLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwiaXNDcmVkaXQiLCJzZXRJc0NyZWRpdCIsImhhbmRsZVVwZGF0ZUNyZWRpdCIsIl9yZWYxMyIsInByZXZlbnREZWZhdWx0IiwicHV0IiwiaGFuZGxlT3BlbiIsImhhbmRsZUVycm9yIiwiX3giLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwibmV3U3RhdGVtZW50Iiwic2V0TmV3U3RhdGVtZW50IiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsIkFsbFN0YXRlbWVudCIsIkFsbE5ld1N0YXRlbWVudCIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJPdXRTdGFuZFN0YXRlbWVudCIsInNldE91dFN0YW5kTmV3U3RhdGVtZW50IiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsImN1c3RvbVN0YXRlbWVudCIsInNldEN1c3RvbU5ld1N0YXRlbWVudCIsInNvcnQiLCJhIiwiYiIsImZpbmQiLCJJdGVtIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsIm9wZW5pbmdCYWxhbmNlVG90YWwiLCJzZXRPcGVuaW5nQmFsYW5jZVRvdGFsIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsIkludm9pY2VUb3RhbCIsInNldEludm9pY2VUb3RhbCIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJQYXltZW50VG90YWwiLCJzZXRQYXltZW50VG90YWwiLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2IiwidG90YWxCYWxhbmNlIiwic2V0VG90YWxCYWxhbmNlIiwib3BlbmluZ0JhbGFuY2VUb3RhbDEiLCJsZW5ndGgiLCJyZWR1Y2UiLCJzdW0iLCJJbnZvaWNlVG90YWwxIiwiUGF5bWVudFRvdGFsMSIsInRvdGFsQmFsYW5jZTEiLCJJbnZvaWNlVG90YWwyIiwiSW52b2ljZVRvdGFsMyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJCb29sZWFuIiwiaGFuZGxlQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2VNZW51IiwiY29tcG9uZW50UmVmIiwiaGFuZGxlUHJpbnQiLCJjb250ZW50IiwiY3VycmVudCIsImRvY3VtZW50VGl0bGUiLCJvbkJlZm9yZUdldENvbnRlbnQiLCJQQUdFX0hFSUdIVCIsInByaW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIm51bWJlck9mUGFnZSIsImNlaWwiLCJfcHJpbnRFbGVtZW50JGdldEVsZW0iLCJfcHJpbnRFbGVtZW50JGdldEVsZW0yIiwiaGVpZ2h0V2l0aFNpbmdsZUhlYWRlciIsInJlcXVpcmVkSGVpZ2h0IiwiaGVhZGVySGVpZ2h0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmb290ZXJIZWlnaHQiLCJyZW1vdmUiLCJvbkFmdGVyUHJpbnQiLCJjb21wb25lbnRSZWYxIiwiaGFuZGxlUHJpbnQxIiwiX3ByaW50RWxlbWVudCRnZXRFbGVtMyIsIl9wcmludEVsZW1lbnQkZ2V0RWxlbTQiLCJoYW5kbGVPcGVuUHJpbnQiLCJoYW5kbGVPcGVuUHJpbnQxIiwiX3VzZVN0YXRlNTciLCJfdXNlU3RhdGU1OCIsInNob3cxIiwic2V0U2hvdzEiLCJoYW5kbGVTaG93MSIsIl91c2VTdGF0ZTU5IiwiX3VzZVN0YXRlNjAiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJfdXNlU3RhdGU2MSIsIl91c2VTdGF0ZTYyIiwiQ29tbWVudHMxIiwic2V0Q29tbWVudHMiLCJfdXNlU3RhdGU2MyIsIl91c2VTdGF0ZTY0Iiwibm90aWZpY2F0aW9uIiwic2V0Tm90aWZpY2F0aW9uIiwiZmV0Y2hDb21tZW50IiwiX3JlZjE0IiwiX3JlcyRkYXRhMiIsIl9yZXNOb3RpZmljYXRpb24kZGF0YSIsInJlc3AiLCJDb21tZW50SW5mbyIsImlkSW5mbyIsInJlc05vdGlmaWNhdGlvbiIsInBlcnNvbiIsIl91c2VTdGF0ZTY1IiwiX3VzZVN0YXRlNjYiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTY3IiwiX3VzZVN0YXRlNjgiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTY5IiwiX3VzZVN0YXRlNzAiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwic2V0VGltZW91dCIsImhhbmRsZUNsb3NlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVDbG9zZUVycm9yIiwiZGF0ZUNvbW1lbnQiLCJub3ciLCJoYW5kbGVTdWJtaXRFZGl0IiwiX3JlZjE1IiwicG9zdCIsIm5ld0RhdGEiLCJfeDIiLCJfdXNlU3RhdGU3MSIsIl91c2VTdGF0ZTcyIiwiY3VzdG9tZXIyIiwiU2V0Q3VzdG9tZXIyIiwiX3VzZVN0YXRlNzMiLCJfdXNlU3RhdGU3NCIsInNob3cyIiwic2V0U2hvdzIiLCJoYW5kbGVTaG93MiIsIl9SZWFjdCR1c2VTdGF0ZTUiLCJfUmVhY3QkdXNlU3RhdGU2IiwidmFsdWUzIiwic2V0VmFsdWUzIiwicmVzdWx0IiwiaGFuZGxlQ2hhbmdlNCIsImNoYW5nZVZhbHVlIiwiX1JlYWN0JHVzZVN0YXRlNyIsIl9SZWFjdCR1c2VTdGF0ZTgiLCJzaWRlQmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZURyYXdlciIsImFtb3VudDEiLCJjdXN0b21Sb3ciLCJfcm93JG51bWJlckFycmF5Iiwia2V5IiwidGV4dEFsaWduIiwiYm9yZGVyQm90dG9tIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJyb3cyIiwiUmVmIiwicmVwbGFjZSIsImFtb3VudDIiLCJhbGxTdGFuZGluZ1JvdyIsIl9yb3ckbnVtYmVyQXJyYXkyIiwiX3JvdyRudW1iZXJBcnJheTMiLCJwb3NCYWxhbmNlIiwicmUiLCJhbW91bnQzIiwiYWxsUm93IiwiX3JvdyRudW1iZXJBcnJheTQiLCJfcm93JG51bWJlckFycmF5NSIsImFtb3VudDQiLCJ5ZWFyUm93IiwiX3JvdyRudW1iZXJBcnJheTYiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJuYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10IiwiY29udGFpbmVyIiwiaXRlbSIsInhzIiwicGFkZGluZyIsIm92ZXJmbG93WSIsIm9uQ2hhbmdlIiwib3JpZW50YXRpb24iLCJpbmRleCIsImxhYmVsIiwidG8iLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsInBsYWNlbWVudCIsImZsb2F0IiwiYmFja2dyb3VuZCIsIl9yb3ciLCJfcm93MiIsIl9kYXRhIiwiX3JvdzMiLCJfcm93NCIsIl9kYXRhMiIsIl9yb3c1IiwiX2RhdGEzIiwiZm9udFdlaWdodCIsImN1c3RvbWVyRnVsbE5hbWUiLCJ0b1VwcGVyQ2FzZSIsImNvbXBhbnlOYW1lIiwidW5kZWZpbmVkIiwiZGlzYWJsZUVsZXZhdGlvbiIsImVuZEljb24iLCJib3JkZXIiLCJNZW51TGlzdFByb3BzIiwib25DbG9zZSIsIlRyYW5zaXRpb25Db21wb25lbnQiLCJkaXNhYmxlZCIsImdhcCIsImJvcmRlckNvbG9yIiwiY29sU3BhbiIsImN1c3RvbWVyQ29tcGFueVBob25lIiwiY3VzdG9tZXJQaG9uZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0NpdHkiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0NpdHkiLCJjdXJyZW5jeSIsInBheW1lbnRUZXJtcyIsIm1hcmdpbkJvdHRvbSIsImZvbnRGYW1pbHkiLCJleHBhbmRJY29uIiwiYWxpZ24iLCJlc3RpbWF0ZURhdGUiLCJlc3RpbWF0ZU51bWJlciIsInN1YlRvdGFsIiwicHVyY2hhc2VEYXRlIiwicHVyY2hhc2VOdW1iZXIiLCJzdGF0dXNJbmZvIiwicHVyY2hhc2VBbW91bnQxIiwic2VydmljZURhdGUiLCJzZXJ2aWNlTnVtYmVyIiwiaGlkZGVuIiwicmVmIiwiYnJhbmNoSWQiLCJsaW5lSGVpZ2h0IiwicGFnZUJyZWFrSW5zaWRlIiwibWF4SGVpZ2h0IiwiX3JvdyRUb3RhbEFtb3VudCIsImJvcmRlckxlZnQiLCJfcmVsYXRlZEludm9pY2UkaW52b2kiLCJyZWxhdGVkSW52b2ljZSIsInJvdzEiLCJtYXJnaW5Ub3AiLCJjdXJzb3IiLCJfcm93JFRvdGFsQW1vdW50MiIsIl9yZWxhdGVkSW52b2ljZSRpbnZvaTIiLCJwcmVmaXgiLCJSZWZlcmVuY2VOYW1lMiIsImludm9pY2VQdXJjaGFzZSIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsInJlcXVpcmVkIiwidmlld3MiLCJncmFuZFRvdGFsIiwib25TdWJtaXQiLCJtdWx0aWxpbmUiLCJyb3dzIiwiZGF0ZU5vdGlmaWNhdGlvbiIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=