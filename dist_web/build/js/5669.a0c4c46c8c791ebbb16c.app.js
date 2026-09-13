"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[5669],{

/***/ 6783
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20561);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z"
}), 'LocalPrintshop'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 46831
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34164);
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75659);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14073);
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11848);
/* harmony import */ var _DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15607);
/* harmony import */ var _dialogTitleClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61435);
/* harmony import */ var _Dialog_DialogContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28102);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74848);
'use client';



const _excluded = ["className", "id"];










const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(slots, _dialogTitleClasses__WEBPACK_IMPORTED_MODULE_8__/* .getDialogTitleUtilityClass */ .t, classes);
};
const DialogTitleRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay)(_Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
  name: 'MuiDialogTitle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  padding: '16px 24px',
  flex: '0 0 auto'
});
const DialogTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogTitle(inProps, ref) {
  const props = (0,_DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_7__/* .useDefaultProps */ .b)({
    props: inProps,
    name: 'MuiDialogTitle'
  });
  const {
      className,
      id: idProp
    } = props,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const {
    titleId = idProp
  } = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_Dialog_DialogContext__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DialogTitleRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    component: "h2",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    variant: "h6",
    id: idProp != null ? idProp : titleId
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogTitle);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 75669
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdminView1_ReportsViewAdmin)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./src/js/AdminView1/view.css
var view = __webpack_require__(68525);
// EXTERNAL MODULE: ./src/js/component/SidebarDash.js
var SidebarDash = __webpack_require__(4640);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(14977);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(37636);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(69067);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(14073);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(37211);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(57873);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(82241);
// EXTERNAL MODULE: ./node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(52848);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(49799);
// EXTERNAL MODULE: ./node_modules/@mui/material/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(14519);
// EXTERNAL MODULE: ./node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(8532);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(11641);
// EXTERNAL MODULE: ./node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(71543);
// EXTERNAL MODULE: ./node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(97834);
// EXTERNAL MODULE: ./node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(73357);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(844);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(8239);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListSubheader/ListSubheader.js + 1 modules
var ListSubheader = __webpack_require__(48158);
// EXTERNAL MODULE: ./node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(30995);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(86990);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(20561);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/icons-material/esm/ExpandLess.js
"use client";



/* harmony default export */ const ExpandLess = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), 'ExpandLess'));
;// ./node_modules/@mui/icons-material/esm/ExpandMore.js
"use client";



/* harmony default export */ const ExpandMore = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore'));
;// ./node_modules/@mui/icons-material/esm/StarBorder.js
"use client";



/* harmony default export */ const StarBorder = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"
}), 'StarBorder'));
;// ./node_modules/@mui/icons-material/esm/Menu.js
"use client";



/* harmony default export */ const Menu = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), 'Menu'));
;// ./node_modules/@mui/icons-material/esm/Logout.js
"use client";



/* harmony default export */ const Logout = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
}), 'Logout'));
;// ./node_modules/@mui/icons-material/esm/ChevronLeft.js
"use client";



/* harmony default export */ const ChevronLeft = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'ChevronLeft'));
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/MonetizationOn.js
var MonetizationOn = __webpack_require__(21333);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Receipt.js
var Receipt = __webpack_require__(79381);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Assessment.js
var Assessment = __webpack_require__(6119);
;// ./node_modules/@mui/icons-material/esm/Inventory.js
"use client";



/* harmony default export */ const Inventory = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2m-5 12H9v-2h6zm5-7H4V4l16-.02z"
}), 'Inventory'));
;// ./node_modules/@mui/icons-material/esm/Engineering.js
"use client";



/* harmony default export */ const Engineering = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m13.1-8.16c.01-.11.02-.22.02-.34 0-.12-.01-.23-.03-.34l.74-.58c.07-.05.08-.15.04-.22l-.7-1.21c-.04-.08-.14-.1-.21-.08l-.86.35c-.18-.14-.38-.25-.59-.34l-.13-.93c-.02-.09-.09-.15-.18-.15h-1.4c-.09 0-.16.06-.17.15l-.13.93c-.21.09-.41.21-.59.34l-.87-.35c-.08-.03-.17 0-.21.08l-.7 1.21c-.04.08-.03.17.04.22l.74.58c-.02.11-.03.23-.03.34 0 .11.01.23.03.34l-.74.58c-.07.05-.08.15-.04.22l.7 1.21c.04.08.14.1.21.08l.87-.35c.18.14.38.25.59.34l.13.93c.01.09.08.15.17.15h1.4c.09 0 .16-.06.17-.15l.13-.93c.21-.09.41-.21.59-.34l.87.35c.08.03.17 0 .21-.08l.7-1.21c.04-.08.03-.17-.04-.22zm-2.6.91c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25m.42 3.93-.5-.87c-.03-.06-.1-.08-.15-.06l-.62.25c-.13-.1-.27-.18-.42-.24l-.09-.66c-.02-.06-.08-.1-.14-.1h-1c-.06 0-.11.04-.12.11l-.09.66c-.15.06-.29.15-.42.24l-.62-.25c-.06-.02-.12 0-.15.06l-.5.87c-.03.06-.02.12.03.16l.53.41c-.01.08-.02.16-.02.24 0 .08.01.17.02.24l-.53.41c-.05.04-.06.11-.03.16l.5.87c.03.06.1.08.15.06l.62-.25c.13.1.27.18.42.24l.09.66c.01.07.06.11.12.11h1c.06 0 .12-.04.12-.11l.09-.66c.15-.06.29-.15.42-.24l.62.25c.06.02.12 0 .15-.06l.5-.87c.03-.06.02-.12-.03-.16l-.52-.41c.01-.08.02-.16.02-.24 0-.08-.01-.17-.02-.24l.53-.41c.05-.04.06-.11.04-.17m-2.42 1.65c-.46 0-.83-.38-.83-.83 0-.46.38-.83.83-.83s.83.38.83.83c0 .46-.37.83-.83.83M4.74 9h8.53c.27 0 .49-.22.49-.49v-.02c0-.27-.22-.49-.49-.49H13c0-1.48-.81-2.75-2-3.45v.95c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.14C9.68 4.06 9.35 4 9 4s-.68.06-1 .14V5.5c0 .28-.22.5-.5.5S7 5.78 7 5.5v-.95C5.81 5.25 5 6.52 5 8h-.26c-.27 0-.49.22-.49.49v.03c0 .26.22.48.49.48M9 13c1.86 0 3.41-1.28 3.86-3H5.14c.45 1.72 2 3 3.86 3"
}), 'Engineering'));
;// ./node_modules/@mui/icons-material/esm/Groups.js
"use client";



/* harmony default export */ const Groups = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91M4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3"
}), 'Groups'));
;// ./node_modules/@mui/icons-material/esm/Description.js
"use client";



/* harmony default export */ const Description = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"
}), 'Description'));
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/LocalPrintshop.js
var LocalPrintshop = __webpack_require__(6783);
// EXTERNAL MODULE: ./node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar = __webpack_require__(89828);
// EXTERNAL MODULE: ./node_modules/@mui/material/Drawer/Drawer.js + 1 modules
var Drawer = __webpack_require__(88248);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__(13561);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(99380);
// EXTERNAL MODULE: ./src/js/utils/apiCache.js
var apiCache = __webpack_require__(46986);
// EXTERNAL MODULE: ./src/js/apiConfig.js
var apiConfig = __webpack_require__(71510);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(74353);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/customParseFormat.js
var customParseFormat = __webpack_require__(90445);
var customParseFormat_default = /*#__PURE__*/__webpack_require__.n(customParseFormat);
// EXTERNAL MODULE: ./src/js/features/auth/authSlice.js
var authSlice = __webpack_require__(32005);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(47767);
// EXTERNAL MODULE: ./src/js/AdminView1/MessageAdminView.js + 1 modules
var MessageAdminView = __webpack_require__(3100);
// EXTERNAL MODULE: ./src/js/AdminView1/NotificationVIewInfo.js
var NotificationVIewInfo = __webpack_require__(95236);
// EXTERNAL MODULE: ./node_modules/react-to-print/lib/index.js
var lib = __webpack_require__(57240);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./src/js/component/Loader.js + 1 modules
var Loader = __webpack_require__(65821);
// EXTERNAL MODULE: ./src/js/AdminView1/PageView/DashboardInfo/RevenueExpensesAll.js
var RevenueExpensesAll = __webpack_require__(8914);
// EXTERNAL MODULE: ./src/js/AdminView1/PageView/DashboardInfo/ItemReportInfo.js
var ItemReportInfo = __webpack_require__(55771);
// EXTERNAL MODULE: ./src/js/AdminView1/PageView/DashboardInfo/MaintenanceReportInfo.js
var MaintenanceReportInfo = __webpack_require__(7065);
// EXTERNAL MODULE: ./src/js/AdminView1/PageView/DashboardInfo/InvoiceReportInfo.js
var InvoiceReportInfo = __webpack_require__(58905);
// EXTERNAL MODULE: ./src/js/AdminView1/PageView/DashboardInfo/PayRollReportInfo.js
var PayRollReportInfo = __webpack_require__(91495);
// EXTERNAL MODULE: ./src/js/AdminView1/PageView/DashboardInfo/ProjectReportInfo.js
var ProjectReportInfo = __webpack_require__(49059);
// EXTERNAL MODULE: ./src/js/AdminView1/PageView/DashboardInfo/DailyExpensesReportInfo.js
var DailyExpensesReportInfo = __webpack_require__(31342);
// EXTERNAL MODULE: ./node_modules/@mui/material/Slide/Slide.js
var Slide = __webpack_require__(48875);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(50779);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(29571);
// EXTERNAL MODULE: ./node_modules/@mui/material/Select/Select.js + 4 modules
var Select = __webpack_require__(2071);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(73896);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(33198);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 2 modules
var Paper = __webpack_require__(60538);
// EXTERNAL MODULE: ./node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(64137);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(96627);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(86798);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableCell/TableCell.js
var TableCell = __webpack_require__(70691);
// EXTERNAL MODULE: ./node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(43884);
// EXTERNAL MODULE: ./node_modules/@mui/material/Dialog/Dialog.js
var Dialog = __webpack_require__(77037);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(22477);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(17809);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/isBetween.js
var isBetween = __webpack_require__(37872);
var isBetween_default = /*#__PURE__*/__webpack_require__.n(isBetween);
// EXTERNAL MODULE: ./node_modules/exceljs/dist/exceljs.min.js
var exceljs_min = __webpack_require__(24974);
var exceljs_min_default = /*#__PURE__*/__webpack_require__.n(exceljs_min);
// EXTERNAL MODULE: ./node_modules/file-saver/dist/FileSaver.min.js
var FileSaver_min = __webpack_require__(4213);
;// ./node_modules/@mui/icons-material/esm/FileDownload.js
"use client";



/* harmony default export */ const FileDownload = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"
}), 'FileDownload'));
;// ./src/js/AdminView1/PageView/DashboardInfo/SalesByCustomerReport.js
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
;









dayjs_min_default().extend((isBetween_default()));
dayjs_min_default().extend((customParseFormat_default()));
dayjs_min_default().extend((isBetween_default()));
dayjs_min_default().extend((customParseFormat_default()));
var Transition = /*#__PURE__*/react.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/react.createElement(Slide/* default */.A, _extends({
    direction: "up",
    ref: ref
  }, props));
});
function SalesByCustomerReport(_ref) {
  var onInvoice = _ref.onInvoice,
    onPos = _ref.onPos,
    onPayment = _ref.onPayment;
  var _useState = (0,react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var _useState3 = (0,react.useState)('All'),
    _useState4 = _slicedToArray(_useState3, 2),
    dateRange = _useState4[0],
    setDateRange = _useState4[1];
  var _useState5 = (0,react.useState)(dayjs_min_default()().startOf('month').format('YYYY-MM-DD')),
    _useState6 = _slicedToArray(_useState5, 2),
    customStart = _useState6[0],
    setCustomStart = _useState6[1];
  var _useState7 = (0,react.useState)(dayjs_min_default()().endOf('month').format('YYYY-MM-DD')),
    _useState8 = _slicedToArray(_useState7, 2),
    customEnd = _useState8[0],
    setCustomEnd = _useState8[1];
  var _useState9 = (0,react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedCustomer = _useState0[0],
    setSelectedCustomer = _useState0[1];
  var _useState1 = (0,react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    openDetails = _useState10[0],
    setOpenDetails = _useState10[1];
  var processedData = (0,react.useMemo)(() => {
    var allTransactions = [];

    // 1. Process Invoices
    if (onInvoice && Array.isArray(onInvoice)) {
      allTransactions = [...allTransactions, ...onInvoice.filter(inv => inv.status && !['Draft', 'Decline', 'Void'].includes(inv.status)).map(inv => _objectSpread(_objectSpread({}, inv), {}, {
        type: 'Invoice',
        date: inv.invoiceDate,
        amount: inv.totalInvoice || 0,
        paid: 0,
        // Do not add invoice's paid amount to avoid double counting with Payments
        due: inv.balanceDue || 0
      }))];
    }

    // 2. Process POS Sales (if customer is attached)
    if (onPos && Array.isArray(onPos)) {
      allTransactions = [...allTransactions, ...onPos.filter(p => p.customerName && (p.customerName.customerName || typeof p.customerName === 'string')) // Only named customers
      .map(pos => _objectSpread(_objectSpread({}, pos), {}, {
        type: 'POS',
        date: pos.invoiceDate || pos.paymentDate,
        amount: (pos.TotalAmountPaid || pos.totalInvoice || 0) / (pos.rate || 1),
        paid: (pos.TotalAmountPaid || pos.totalInvoice || 0) / (pos.rate || 1),
        // POS is fully paid
        due: 0
      }))];
    }

    // 3. Process Payments
    if (onPayment && Array.isArray(onPayment)) {
      allTransactions = [...allTransactions, ...onPayment.filter(pay => pay.modes !== 'Credit-Account') // Prevent double counting credit usages
      .map(pay => {
        var pAmount = parseFloat(pay.amount || 0);
        if (pay.modes === 'Credit') {
          pAmount = parseFloat(pay.PaymentReceivedUSD || 0) + parseFloat(pay.PaymentReceivedFC || 0) / parseFloat(pay.rate || 1);
        } else if (pAmount === 0 && (pay.amountFC || pay.PaymentReceivedFC)) {
          pAmount = parseFloat(pay.totalUSD || 0) || parseFloat(pay.amount || 0) + parseFloat(pay.amountFC || pay.PaymentReceivedFC || 0) / parseFloat(pay.rate || 1);
        }

        // Exclude Credit balance that hasn't been applied if we want true collections, 
        // but since it's a customer statement, advanced payments SHOULD reduce their balance!

        if (pay.transactionType === 'Refund') {
          pAmount = -Math.abs(pAmount);
        }
        return _objectSpread(_objectSpread({}, pay), {}, {
          type: 'Payment',
          date: pay.paymentDate,
          amount: 0,
          paid: pAmount,
          due: 0
        });
      })];
    }
    var filteredTransactions = [...allTransactions];
    // Date Filtering
    if (dateRange !== 'All') {
      var now = dayjs_min_default()();
      var start, end;
      if (dateRange === 'Month') {
        start = now.startOf('month');
        end = now.endOf('month');
      } else if (dateRange === 'Year') {
        start = now.startOf('year');
        end = now.endOf('year');
      } else if (dateRange === 'Custom') {
        start = dayjs_min_default()(customStart);
        end = dayjs_min_default()(customEnd);
      }
      filteredTransactions = filteredTransactions.filter(item => {
        var d = dayjs_min_default()(item.date, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
        if (!d.isValid()) d = dayjs_min_default()(item.date);
        return d.isValid() && d.isBetween(start, end, 'day', '[]');
      });
    }

    // Aggregation
    var customerMap = {};
    filteredTransactions.forEach(item => {
      var _item$customerName, _item$customerName2;
      var custId = ((_item$customerName = item.customerName) === null || _item$customerName === void 0 ? void 0 : _item$customerName._id) || item.customerId;
      var custName = ((_item$customerName2 = item.customerName) === null || _item$customerName2 === void 0 ? void 0 : _item$customerName2.customerName) || item.customerName || 'Unknown Customer';

      // Fallback for missing ID but having name
      if (!custId && typeof item.customerName === 'string') {
        custId = item.customerName;
      }
      if (!custId && item.type !== 'POS') return;
      var id = custId || 'pos_unnamed';
      if (!customerMap[id]) {
        customerMap[id] = {
          id: id,
          name: typeof custName === 'string' ? custName : 'Unknown Customer',
          invoiceCount: 0,
          totalSales: 0,
          totalPaid: 0,
          balance: 0,
          transactions: []
        };
      }

      // Exclude voided payments from statement
      if (item.type === 'Payment' && item.status === 'Voided') return;
      customerMap[id].transactions.push(item);
      if (item.type === 'Invoice') {
        customerMap[id].invoiceCount += 1;
        customerMap[id].totalSales += item.amount || 0;
        customerMap[id].totalPaid += item.paid || 0;
      } else if (item.type === 'POS') {
        customerMap[id].invoiceCount += 1;
        customerMap[id].totalSales += item.amount || 0;
        customerMap[id].totalPaid += item.paid || 0;
      } else if (item.type === 'Payment') {
        customerMap[id].totalPaid += item.paid || 0;
      }
    });

    // Finalize balance calculation for each customer
    Object.values(customerMap).forEach(c => {
      c.balance = c.totalSales - c.totalPaid;
    });
    return Object.values(customerMap).filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).sort((a, b) => b.totalSales - a.totalSales);
  }, [onInvoice, onPos, onPayment, searchTerm, dateRange, customStart, customEnd]);
  var totals = (0,react.useMemo)(() => {
    return processedData.reduce((acc, curr) => ({
      sales: acc.sales + curr.totalSales,
      paid: acc.paid + curr.totalPaid,
      balance: acc.balance + curr.balance
    }), {
      sales: 0,
      paid: 0,
      balance: 0
    });
  }, [processedData]);
  var handleOpenDetails = customer => {
    setSelectedCustomer(customer);
    setOpenDetails(true);
  };
  var handleCloseDetails = () => {
    setOpenDetails(false);
    setSelectedCustomer(null);
  };
  var exportToExcel = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* () {
      var workbook = new (exceljs_min_default()).Workbook();
      var worksheet = workbook.addWorksheet('Sales by Customer');
      worksheet.columns = [{
        header: 'Customer Name',
        key: 'name',
        width: 30
      }, {
        header: 'Invoices',
        key: 'count',
        width: 10
      }, {
        header: 'Total Sales',
        key: 'sales',
        width: 15
      }, {
        header: 'Total Paid',
        key: 'paid',
        width: 15
      }, {
        header: 'Balance Due',
        key: 'balance',
        width: 15
      }];
      processedData.forEach(row => {
        worksheet.addRow({
          name: row.name,
          count: row.invoiceCount,
          sales: row.totalSales,
          paid: row.totalPaid,
          balance: row.balance
        });
      });
      worksheet.getRow(1).font = {
        bold: true
      };
      worksheet.addRow([]);
      worksheet.addRow({
        name: 'TOTALS',
        sales: totals.sales,
        paid: totals.paid,
        balance: totals.balance
      }).font = {
        bold: true
      };
      var buffer = yield workbook.xlsx.writeBuffer();
      (0,FileSaver_min.saveAs)(new Blob([buffer]), "Sales_By_Customer_".concat(dayjs_min_default()().format('YYYY-MM-DD'), ".xlsx"));
    });
    return function exportToExcel() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      mb: 3,
      display: 'flex',
      gap: 2,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement(TextField/* default */.A, {
    label: "Search Customer",
    size: "small",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    sx: {
      width: 250
    }
  }), /*#__PURE__*/react.createElement(FormControl/* default */.A, {
    size: "small",
    sx: {
      width: 150
    }
  }, /*#__PURE__*/react.createElement(InputLabel/* default */.A, null, "Period"), /*#__PURE__*/react.createElement(Select/* default */.A, {
    value: dateRange,
    label: "Period",
    onChange: e => setDateRange(e.target.value)
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "All"
  }, "All Time"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Month"
  }, "This Month"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Year"
  }, "This Year"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Custom"
  }, "Custom Range"))), dateRange === 'Custom' && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(TextField/* default */.A, {
    type: "date",
    label: "From",
    size: "small",
    value: customStart,
    onChange: e => setCustomStart(e.target.value),
    InputLabelProps: {
      shrink: true
    }
  }), /*#__PURE__*/react.createElement(TextField/* default */.A, {
    type: "date",
    label: "To",
    size: "small",
    value: customEnd,
    onChange: e => setCustomEnd(e.target.value),
    InputLabelProps: {
      shrink: true
    }
  })), /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "contained",
    startIcon: /*#__PURE__*/react.createElement(FileDownload, null),
    onClick: exportToExcel,
    sx: {
      ml: 'auto',
      backgroundColor: '#30368a'
    }
  }, "Export Excel")), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    spacing: 2,
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      backgroundColor: '#e8f5e9'
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Sales"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", totals.sales.toLocaleString())))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      backgroundColor: '#e3f2fd'
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Collected"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", totals.paid.toLocaleString())))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      backgroundColor: '#fff3e0'
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Outstanding"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold',
      color: '#e65100'
    }
  }, "$", totals.balance.toLocaleString()))))), /*#__PURE__*/react.createElement(TableContainer/* default */.A, {
    component: Paper/* default */.A,
    sx: {
      boxShadow: 'none',
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react.createElement(Table/* default */.A, {
    stickyHeader: true
  }, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Customer Name"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "center",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Invoices"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Total Sales"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Total Paid"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Balance Due"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, processedData.map(row => /*#__PURE__*/react.createElement(TableRow/* default */.A, {
    key: row.id,
    hover: true
  }, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'medium',
      cursor: 'pointer',
      color: '#30368a',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    onClick: () => handleOpenDetails(row)
  }, row.name), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "center"
  }, row.invoiceCount), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right"
  }, "$", row.totalSales.toLocaleString()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      color: 'success.main'
    }
  }, "$", row.totalPaid.toLocaleString()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      color: row.balance > 0 ? 'error.main' : 'inherit'
    }
  }, "$", row.balance.toLocaleString()))), processedData.length === 0 && /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    colSpan: 5,
    align: "center",
    sx: {
      py: 3
    }
  }, "No data found for the selected criteria"))), /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "TOTALS"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "center",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, processedData.reduce((a, b) => a + b.invoiceCount, 0)), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "$", totals.sales.toLocaleString()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "$", totals.paid.toLocaleString()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "$", totals.balance.toLocaleString()))))), /*#__PURE__*/react.createElement(Dialog/* default */.A, {
    fullScreen: true,
    open: openDetails,
    onClose: handleCloseDetails,
    TransitionComponent: Transition
  }, /*#__PURE__*/react.createElement(AppBar/* default */.A, {
    sx: {
      position: 'relative',
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react.createElement(Toolbar/* default */.A, null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    edge: "start",
    color: "inherit",
    onClick: handleCloseDetails,
    "aria-label": "close"
  }, /*#__PURE__*/react.createElement(Close/* default */.A, null)), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    sx: {
      ml: 2,
      flex: 1
    },
    variant: "h6",
    component: "div"
  }, "Transaction Details: ", selectedCustomer === null || selectedCustomer === void 0 ? void 0 : selectedCustomer.name), /*#__PURE__*/react.createElement(Button/* default */.A, {
    autoFocus: true,
    color: "inherit",
    onClick: handleCloseDetails
  }, "Close"))), /*#__PURE__*/react.createElement(DialogContent/* default */.A, {
    sx: {
      p: 4,
      backgroundColor: '#f5f5f5'
    }
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    spacing: 4
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "overline",
    color: "textSecondary"
  }, "Total Sales"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      color: '#2e7d32',
      fontWeight: 'bold'
    }
  }, "$", ((selectedCustomer === null || selectedCustomer === void 0 ? void 0 : selectedCustomer.totalSales) || 0).toLocaleString())), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "overline",
    color: "textSecondary"
  }, "Total Paid"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      color: '#0288d1',
      fontWeight: 'bold'
    }
  }, "$", ((selectedCustomer === null || selectedCustomer === void 0 ? void 0 : selectedCustomer.totalPaid) || 0).toLocaleString())), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "overline",
    color: "textSecondary"
  }, "Balance Due"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, "$", ((selectedCustomer === null || selectedCustomer === void 0 ? void 0 : selectedCustomer.balance) || 0).toLocaleString()))))), /*#__PURE__*/react.createElement(TableContainer/* default */.A, {
    component: Paper/* default */.A,
    sx: {
      boxShadow: 'none',
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react.createElement(Table/* default */.A, {
    stickyHeader: true
  }, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Date"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Type"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Reference"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Amount"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Paid"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Balance"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, (_selectedCustomer$tra => {
    var runningBalance = 0;
    return selectedCustomer === null || selectedCustomer === void 0 || (_selectedCustomer$tra = selectedCustomer.transactions) === null || _selectedCustomer$tra === void 0 ? void 0 : _selectedCustomer$tra.sort((a, b) => new Date(a.date) - new Date(b.date)).map((item, idx) => {
      if (item.type === 'Invoice' || item.type === 'POS') {
        runningBalance += item.amount || 0;
      }
      runningBalance -= item.paid || 0;
      return /*#__PURE__*/react.createElement(TableRow/* default */.A, {
        key: idx
      }, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, dayjs_min_default()(item.date).format('DD/MM/YYYY')), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, /*#__PURE__*/react.createElement("span", {
        style: {
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '0.75rem',
          backgroundColor: item.type === 'Invoice' ? '#e8f5e9' : item.type === 'POS' ? '#e3f2fd' : '#fff3e0',
          color: item.type === 'Invoice' ? '#2e7d32' : item.type === 'POS' ? '#0288d1' : '#e65100'
        }
      }, item.type)), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, item.type === 'Invoice' ? "INV-".concat(item.invoiceNumber) : item.type === 'POS' ? "POS-".concat(item.factureNumber) : "PAY-".concat(item.paymentNumber)), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
        align: "right"
      }, "$", (item.amount || 0).toLocaleString()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
        align: "right"
      }, "$", (item.paid || 0).toLocaleString()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
        align: "right",
        sx: {
          fontWeight: 'bold'
        }
      }, "$", runningBalance.toLocaleString()));
    });
  })()))))));
}
/* harmony default export */ const DashboardInfo_SalesByCustomerReport = (SalesByCustomerReport);
// EXTERNAL MODULE: ./node_modules/@mui/x-charts/LineChart/LineChart.js + 22 modules
var LineChart = __webpack_require__(75937);
;// ./node_modules/@mui/icons-material/esm/PointOfSale.js
"use client";



/* harmony default export */ const PointOfSale = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M17 2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 4H7V4h10zm3 16H4c-1.1 0-2-.9-2-2v-1h20v1c0 1.1-.9 2-2 2m-1.47-11.81C18.21 9.47 17.49 9 16.7 9H7.3c-.79 0-1.51.47-1.83 1.19L2 18h20zM9.5 16h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5"
}), 'PointOfSale'));
;// ./node_modules/@mui/icons-material/esm/TrendingUp.js
"use client";



/* harmony default export */ const TrendingUp = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
}), 'TrendingUp'));
;// ./src/js/AdminView1/PageView/DashboardInfo/POSAnalyticsReport.js
function POSAnalyticsReport_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function POSAnalyticsReport_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { POSAnalyticsReport_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { POSAnalyticsReport_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function POSAnalyticsReport_slicedToArray(r, e) { return POSAnalyticsReport_arrayWithHoles(r) || POSAnalyticsReport_iterableToArrayLimit(r, e) || POSAnalyticsReport_unsupportedIterableToArray(r, e) || POSAnalyticsReport_nonIterableRest(); }
function POSAnalyticsReport_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function POSAnalyticsReport_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return POSAnalyticsReport_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? POSAnalyticsReport_arrayLikeToArray(r, a) : void 0; } }
function POSAnalyticsReport_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function POSAnalyticsReport_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function POSAnalyticsReport_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;









dayjs_min_default().extend((isBetween_default()));
dayjs_min_default().extend((customParseFormat_default()));
function POSAnalyticsReport(_ref) {
  var onPos = _ref.onPos;
  var _useState = (0,react.useState)('Month'),
    _useState2 = POSAnalyticsReport_slicedToArray(_useState, 2),
    dateRange = _useState2[0],
    setDateRange = _useState2[1];
  var _useState3 = (0,react.useState)(dayjs_min_default()().startOf('month').format('YYYY-MM-DD')),
    _useState4 = POSAnalyticsReport_slicedToArray(_useState3, 2),
    customStart = _useState4[0],
    setCustomStart = _useState4[1];
  var _useState5 = (0,react.useState)(dayjs_min_default()().endOf('month').format('YYYY-MM-DD')),
    _useState6 = POSAnalyticsReport_slicedToArray(_useState5, 2),
    customEnd = _useState6[0],
    setCustomEnd = _useState6[1];
  var processedData = (0,react.useMemo)(() => {
    if (!onPos || !Array.isArray(onPos)) return {
      items: [],
      chartData: [],
      stats: {
        revenue: 0,
        count: 0,
        profit: 0
      }
    };
    var now = dayjs_min_default()();
    var start, end;
    if (dateRange === 'Month') {
      start = now.startOf('month');
      end = now.endOf('month');
    } else if (dateRange === 'Year') {
      start = now.startOf('year');
      end = now.endOf('year');
    } else if (dateRange === 'Custom') {
      start = dayjs_min_default()(customStart);
      end = dayjs_min_default()(customEnd);
    }
    var filtered = onPos.filter(inv => {
      if (dateRange === 'All') return true;
      var d = dayjs_min_default()(inv.invoiceDate, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
      if (!d.isValid()) d = dayjs_min_default()(inv.invoiceDate);
      return d.isValid() && d.isBetween(start, end, 'day', '[]');
    });
    var stats = filtered.reduce((acc, curr) => {
      var _curr$items;
      var sell = (curr.TotalAmountPaid || 0) / (curr.rate || 1);
      var cost = ((_curr$items = curr.items) === null || _curr$items === void 0 ? void 0 : _curr$items.reduce((sum, it) => sum + (it.itemQty || 0) * (it.itemCost || 0), 0)) / (curr.rate || 1);
      return {
        revenue: acc.revenue + sell,
        count: acc.count + 1,
        profit: acc.profit + (sell - cost)
      };
    }, {
      revenue: 0,
      count: 0,
      profit: 0
    });

    // Chart Data (Last 12 months)
    var months = [];
    var _loop = function _loop() {
      var m = now.subtract(i, 'month');
      var startM = m.startOf('month');
      var endM = m.endOf('month');
      var monthLabel = m.format('MMM');
      var monthSales = onPos.filter(inv => dayjs_min_default()(inv.invoiceDate).isBetween(startM, endM, 'day', '[]')).reduce((sum, inv) => sum + (inv.TotalAmountPaid || 0) / (inv.rate || 1), 0);
      months.push({
        label: monthLabel,
        value: monthSales
      });
    };
    for (var i = 11; i >= 0; i--) {
      _loop();
    }
    return {
      items: filtered,
      chartData: months,
      stats
    };
  }, [onPos, dateRange, customStart, customEnd]);
  var exportToExcel = /*#__PURE__*/function () {
    var _ref2 = POSAnalyticsReport_asyncToGenerator(function* () {
      var workbook = new (exceljs_min_default()).Workbook();
      var worksheet = workbook.addWorksheet('POS Sales');
      worksheet.columns = [{
        header: 'Invoice #',
        key: 'facture',
        width: 15
      }, {
        header: 'Date',
        key: 'date',
        width: 15
      }, {
        header: 'Customer',
        key: 'customer',
        width: 25
      }, {
        header: 'Total Paid (USD)',
        key: 'amount',
        width: 15
      }];
      processedData.items.forEach(row => {
        var _row$customerName;
        worksheet.addRow({
          facture: "S-".concat(String(row.factureNumber).padStart(5, '0')),
          date: dayjs_min_default()(row.invoiceDate).format('YYYY-MM-DD'),
          customer: ((_row$customerName = row.customerName) === null || _row$customerName === void 0 ? void 0 : _row$customerName.customerName) || 'Walk-in',
          amount: (row.TotalAmountPaid || 0) / (row.rate || 1)
        });
      });
      var buffer = yield workbook.xlsx.writeBuffer();
      (0,FileSaver_min.saveAs)(new Blob([buffer]), "POS_Sales_".concat(dayjs_min_default()().format('YYYY-MM-DD'), ".xlsx"));
    });
    return function exportToExcel() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      mb: 3,
      display: 'flex',
      gap: 2,
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h6",
    sx: {
      fontWeight: 'bold',
      color: '#30368a'
    }
  }, "POS Performance Overview"), /*#__PURE__*/react.createElement(FormControl/* default */.A, {
    size: "small",
    sx: {
      width: 150,
      ml: 'auto'
    }
  }, /*#__PURE__*/react.createElement(InputLabel/* default */.A, null, "Period"), /*#__PURE__*/react.createElement(Select/* default */.A, {
    value: dateRange,
    label: "Period",
    onChange: e => setDateRange(e.target.value)
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "All"
  }, "All Time"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Month"
  }, "This Month"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Year"
  }, "This Year"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Custom"
  }, "Custom Range"))), dateRange === 'Custom' && /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      gap: 1,
      ml: 2
    }
  }, /*#__PURE__*/react.createElement(TextField/* default */.A, {
    type: "date",
    label: "From",
    size: "small",
    value: customStart,
    onChange: e => setCustomStart(e.target.value),
    InputLabelProps: {
      shrink: true
    }
  }), /*#__PURE__*/react.createElement(TextField/* default */.A, {
    type: "date",
    label: "To",
    size: "small",
    value: customEnd,
    onChange: e => setCustomEnd(e.target.value),
    InputLabelProps: {
      shrink: true
    }
  })), /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "contained",
    startIcon: /*#__PURE__*/react.createElement(FileDownload, null),
    onClick: exportToExcel,
    sx: {
      backgroundColor: '#30368a'
    }
  }, "Export Excel")), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    spacing: 2,
    sx: {
      mb: 4
    }
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    variant: "outlined"
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mb: 1
    }
  }, /*#__PURE__*/react.createElement(PointOfSale, {
    color: "primary"
  }), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Sales Volume")), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, processedData.stats.count, " Transactions")))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    variant: "outlined"
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mb: 1
    }
  }, /*#__PURE__*/react.createElement(TrendingUp, {
    color: "success"
  }), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "subtitle2"
  }, "POS Revenue")), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", processedData.stats.revenue.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    variant: "outlined"
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mb: 1
    }
  }, /*#__PURE__*/react.createElement(Receipt/* default */.A, {
    color: "secondary"
  }), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Gross Profit")), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold',
      color: 'success.main'
    }
  }, "+$", processedData.stats.profit.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))))), /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      height: 350,
      mb: 4,
      p: 2,
      border: '1px solid #eee',
      borderRadius: 2
    }
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "subtitle2",
    sx: {
      mb: 2,
      fontWeight: 'bold'
    }
  }, "Sales Trend (Last 12 Months)"), /*#__PURE__*/react.createElement(LineChart/* LineChart */.b, {
    height: 280,
    series: [{
      data: processedData.chartData.map(d => d.value),
      label: 'Monthly Sales ($)',
      color: '#30368a',
      area: true
    }],
    xAxis: [{
      scaleType: 'point',
      data: processedData.chartData.map(d => d.label)
    }],
    margin: {
      top: 10,
      bottom: 30,
      left: 60,
      right: 10
    }
  })), /*#__PURE__*/react.createElement(TableContainer/* default */.A, {
    component: Paper/* default */.A,
    elevation: 0,
    sx: {
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react.createElement(Table/* default */.A, {
    stickyHeader: true,
    size: "small"
  }, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Invoice #"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Date"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Customer"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Total USD"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, processedData.items.slice(0, 10).map(row => {
    var _row$customerName2;
    return /*#__PURE__*/react.createElement(TableRow/* default */.A, {
      key: row._id,
      hover: true
    }, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, "S-", String(row.factureNumber).padStart(5, '0')), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, dayjs_min_default()(row.invoiceDate).format('DD MMM YYYY')), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, ((_row$customerName2 = row.customerName) === null || _row$customerName2 === void 0 ? void 0 : _row$customerName2.customerName) || 'Walk-in'), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "right"
    }, "$", ((row.TotalAmountPaid || 0) / (row.rate || 1)).toLocaleString()));
  }), processedData.items.length > 10 && /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    colSpan: 4,
    align: "center",
    sx: {
      color: 'text.secondary',
      fontStyle: 'italic'
    }
  }, "Viewing last 10 transactions. Export to Excel for full history.")), processedData.items.length === 0 && /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    colSpan: 4,
    align: "center",
    sx: {
      py: 3
    }
  }, "No data for selected period"))))));
}
/* harmony default export */ const DashboardInfo_POSAnalyticsReport = (POSAnalyticsReport);
;// ./src/js/AdminView1/PageView/DashboardInfo/InventoryMovementReport.js
function InventoryMovementReport_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function InventoryMovementReport_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { InventoryMovementReport_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { InventoryMovementReport_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function InventoryMovementReport_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function InventoryMovementReport_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? InventoryMovementReport_ownKeys(Object(t), !0).forEach(function (r) { InventoryMovementReport_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : InventoryMovementReport_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function InventoryMovementReport_defineProperty(e, r, t) { return (r = InventoryMovementReport_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function InventoryMovementReport_toPropertyKey(t) { var i = InventoryMovementReport_toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function InventoryMovementReport_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function InventoryMovementReport_slicedToArray(r, e) { return InventoryMovementReport_arrayWithHoles(r) || InventoryMovementReport_iterableToArrayLimit(r, e) || InventoryMovementReport_unsupportedIterableToArray(r, e) || InventoryMovementReport_nonIterableRest(); }
function InventoryMovementReport_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function InventoryMovementReport_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return InventoryMovementReport_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? InventoryMovementReport_arrayLikeToArray(r, a) : void 0; } }
function InventoryMovementReport_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function InventoryMovementReport_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function InventoryMovementReport_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;








dayjs_min_default().extend((isBetween_default()));
dayjs_min_default().extend((customParseFormat_default()));
function InventoryMovementReport(_ref) {
  var onInventoryIn = _ref.onInventoryIn,
    onInventoryOut = _ref.onInventoryOut;
  var _useState = (0,react.useState)('Month'),
    _useState2 = InventoryMovementReport_slicedToArray(_useState, 2),
    dateRange = _useState2[0],
    setDateRange = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = InventoryMovementReport_slicedToArray(_useState3, 2),
    searchTerm = _useState4[0],
    setSearchTerm = _useState4[1];
  var processedData = (0,react.useMemo)(() => {
    var movement = {};
    var now = dayjs_min_default()();
    var start = dateRange === 'Month' ? now.startOf('month') : now.startOf('year');
    var end = now.endOf('day');

    // Process Purchases (In)
    if (Array.isArray(onInventoryIn)) {
      onInventoryIn.forEach(proc => {
        // Try parsing robustly
        var d = dayjs_min_default()(proc.itemPurchaseDate, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
        if (!d.isValid()) d = dayjs_min_default()(proc.itemPurchaseDate);
        if (dateRange !== 'All' && (!d.isValid() || !d.isBetween(start, end, 'day', '[]'))) return;
        (proc.items || []).forEach(it => {
          var _it$itemName;
          var sku = ((_it$itemName = it.itemName) === null || _it$itemName === void 0 ? void 0 : _it$itemName.itemName) || (typeof it.itemName === 'string' ? it.itemName : 'Unknown');
          if (!movement[sku]) movement[sku] = {
            name: sku,
            in: 0,
            out: 0,
            balance: 0
          };
          movement[sku].in += Number(it.itemQty || 0);
        });
      });
    }

    // Process Item Outs
    if (Array.isArray(onInventoryOut)) {
      onInventoryOut.forEach(out => {
        if (dateRange !== 'All') {
          // Try parsing robustly
          var d = dayjs_min_default()(out.itemOutDate, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
          if (!d.isValid()) d = dayjs_min_default()(out.itemOutDate);
          if (!d.isValid() || !d.isBetween(start, end, 'day', '[]')) return;
        }
        (out.itemsQtyArray || []).forEach(it => {
          var _it$itemName2;
          var sku = ((_it$itemName2 = it.itemName) === null || _it$itemName2 === void 0 ? void 0 : _it$itemName2.itemName) || (typeof it.itemName === 'string' ? it.itemName : 'Unknown');
          if (!movement[sku]) movement[sku] = {
            name: sku,
            in: 0,
            out: 0,
            balance: 0
          };
          // Use newItemOut (from ItemOut) or itemOut (fallback)
          movement[sku].out += Number(it.newItemOut || it.itemOut || 0);
        });
      });
    }
    return Object.values(movement).filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map(item => InventoryMovementReport_objectSpread(InventoryMovementReport_objectSpread({}, item), {}, {
      balance: item.in - item.out
    })).sort((a, b) => b.in + b.out - (a.in + a.out));
  }, [onInventoryIn, onInventoryOut, dateRange, searchTerm]);
  var exportToExcel = /*#__PURE__*/function () {
    var _ref2 = InventoryMovementReport_asyncToGenerator(function* () {
      var workbook = new (exceljs_min_default()).Workbook();
      var worksheet = workbook.addWorksheet('Inventory Movement');
      worksheet.columns = [{
        header: 'Item Name',
        key: 'name',
        width: 30
      }, {
        header: 'Total In',
        key: 'in',
        width: 15
      }, {
        header: 'Total Out',
        key: 'out',
        width: 15
      }, {
        header: 'Net Movement',
        key: 'balance',
        width: 15
      }];
      processedData.forEach(row => worksheet.addRow(row));
      var buffer = yield workbook.xlsx.writeBuffer();
      (0,FileSaver_min.saveAs)(new Blob([buffer]), "Inventory_Movement_".concat(dayjs_min_default()().format('YYYY-MM-DD'), ".xlsx"));
    });
    return function exportToExcel() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      mb: 3,
      display: 'flex',
      gap: 2,
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement(TextField/* default */.A, {
    label: "Search Item",
    size: "small",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value)
  }), /*#__PURE__*/react.createElement(FormControl/* default */.A, {
    size: "small",
    sx: {
      width: 150
    }
  }, /*#__PURE__*/react.createElement(InputLabel/* default */.A, null, "Period"), /*#__PURE__*/react.createElement(Select/* default */.A, {
    value: dateRange,
    label: "Period",
    onChange: e => setDateRange(e.target.value)
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Month"
  }, "This Month"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Year"
  }, "This Year"))), /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "contained",
    startIcon: /*#__PURE__*/react.createElement(FileDownload, null),
    onClick: exportToExcel,
    sx: {
      ml: 'auto',
      backgroundColor: '#30368a'
    }
  }, "Export Excel")), /*#__PURE__*/react.createElement(TableContainer/* default */.A, {
    component: Paper/* default */.A,
    elevation: 0,
    sx: {
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react.createElement(Table/* default */.A, {
    stickyHeader: true
  }, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold'
    }
  }, "Item Name"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      color: 'success.main'
    }
  }, "Stock In"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      color: 'error.main'
    }
  }, "Stock Out"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "Net Movement"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, processedData.map(row => /*#__PURE__*/react.createElement(TableRow/* default */.A, {
    key: row.name,
    hover: true
  }, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, row.name), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right"
  }, row.in.toLocaleString()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right"
  }, row.out.toLocaleString()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, row.balance > 0 ? "+".concat(row.balance) : row.balance)))))));
}
/* harmony default export */ const DashboardInfo_InventoryMovementReport = (InventoryMovementReport);
;// ./src/js/AdminView1/PageView/DashboardInfo/InventoryValuationReport.js
function InventoryValuationReport_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function InventoryValuationReport_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { InventoryValuationReport_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { InventoryValuationReport_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function InventoryValuationReport_slicedToArray(r, e) { return InventoryValuationReport_arrayWithHoles(r) || InventoryValuationReport_iterableToArrayLimit(r, e) || InventoryValuationReport_unsupportedIterableToArray(r, e) || InventoryValuationReport_nonIterableRest(); }
function InventoryValuationReport_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function InventoryValuationReport_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return InventoryValuationReport_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? InventoryValuationReport_arrayLikeToArray(r, a) : void 0; } }
function InventoryValuationReport_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function InventoryValuationReport_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function InventoryValuationReport_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;






function InventoryValuationReport(_ref) {
  var items = _ref.items;
  var _useState = (0,react.useState)(''),
    _useState2 = InventoryValuationReport_slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var processedData = (0,react.useMemo)(() => {
    if (!items || !Array.isArray(items)) return [];
    return items.filter(item => item.typeItem === 'Goods').filter(item => {
      var _item$itemName, _item$itemDescription;
      return ((_item$itemName = item.itemName) === null || _item$itemName === void 0 ? void 0 : _item$itemName.toLowerCase().includes(searchTerm.toLowerCase())) || ((_item$itemDescription = item.itemDescription) === null || _item$itemDescription === void 0 ? void 0 : _item$itemDescription.toLowerCase().includes(searchTerm.toLowerCase()));
    }).map(item => ({
      id: item._id,
      name: item.itemName || 'Unnamed Item',
      description: item.itemDescription || '-',
      quantity: item.itemQuantity || 0,
      costPrice: item.itemCostPrice || 0,
      valuation: (item.itemQuantity || 0) * (item.itemCostPrice || 0)
    })).sort((a, b) => b.valuation - a.valuation);
  }, [items, searchTerm]);
  var totals = (0,react.useMemo)(() => {
    return processedData.reduce((acc, curr) => ({
      qty: acc.qty + curr.quantity,
      value: acc.value + curr.valuation
    }), {
      qty: 0,
      value: 0
    });
  }, [processedData]);
  var exportToExcel = /*#__PURE__*/function () {
    var _ref2 = InventoryValuationReport_asyncToGenerator(function* () {
      var workbook = new (exceljs_min_default()).Workbook();
      var worksheet = workbook.addWorksheet('Inventory Valuation');
      worksheet.columns = [{
        header: 'Item Name',
        key: 'name',
        width: 30
      }, {
        header: 'Description',
        key: 'description',
        width: 40
      }, {
        header: 'Quantity',
        key: 'quantity',
        width: 12
      }, {
        header: 'Unit Cost ($)',
        key: 'costPrice',
        width: 15
      }, {
        header: 'Total Value ($)',
        key: 'valuation',
        width: 15
      }];
      processedData.forEach(row => worksheet.addRow(row));
      worksheet.getRow(1).font = {
        bold: true
      };
      worksheet.addRow([]);
      worksheet.addRow({
        name: 'TOTALS',
        quantity: totals.qty,
        valuation: totals.value
      }).font = {
        bold: true
      };
      var buffer = yield workbook.xlsx.writeBuffer();
      (0,FileSaver_min.saveAs)(new Blob([buffer]), "Inventory_Valuation_".concat(dayjs_min_default()().format('YYYY-MM-DD'), ".xlsx"));
    });
    return function exportToExcel() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      mb: 3,
      display: 'flex',
      gap: 2,
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement(TextField/* default */.A, {
    label: "Search Inventory",
    size: "small",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    sx: {
      width: 300
    }
  }), /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "contained",
    startIcon: /*#__PURE__*/react.createElement(FileDownload, null),
    onClick: exportToExcel,
    sx: {
      ml: 'auto',
      backgroundColor: '#30368a'
    }
  }, "Export Excel")), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    spacing: 2,
    sx: {
      mb: 4
    }
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    variant: "outlined",
    sx: {
      borderLeft: '5px solid #30368a'
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mb: 1
    }
  }, /*#__PURE__*/react.createElement(Inventory, {
    color: "primary"
  }), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Units in Stock")), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h4",
    sx: {
      fontWeight: 'bold'
    }
  }, totals.qty.toLocaleString())))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    variant: "outlined",
    sx: {
      borderLeft: '5px solid #2e7d32'
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mb: 1
    }
  }, /*#__PURE__*/react.createElement(MonetizationOn/* default */.A, {
    color: "success"
  }), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Inventory Assets")), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h4",
    sx: {
      fontWeight: 'bold',
      color: '#2e7d32'
    }
  }, "$", totals.value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))))), /*#__PURE__*/react.createElement(TableContainer/* default */.A, {
    component: Paper/* default */.A,
    elevation: 0,
    sx: {
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react.createElement(Table/* default */.A, {
    stickyHeader: true,
    size: "small"
  }, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Item Name"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Description"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "center",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Qty"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Unit Cost"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Subtotal Value"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, processedData.map(row => /*#__PURE__*/react.createElement(TableRow/* default */.A, {
    key: row.id,
    hover: true
  }, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'medium'
    }
  }, row.name), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      color: 'text.secondary',
      fontSize: '0.85rem'
    }
  }, row.description), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "center"
  }, row.quantity), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right"
  }, "$", row.costPrice.toLocaleString()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", row.valuation.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))), processedData.length === 0 && /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    colSpan: 5,
    align: "center",
    sx: {
      py: 5
    }
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary"
  }, "No items found matching your search.")))), /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    colSpan: 2,
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "TOTAL INVENTORY VALUATION"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "center",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, totals.qty), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      backgroundColor: '#f8f9fa'
    }
  }), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa',
      fontSize: '1rem',
      color: '#2e7d32'
    }
  }, "$", totals.value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))))));
}
/* harmony default export */ const DashboardInfo_InventoryValuationReport = (InventoryValuationReport);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(56655);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(46831);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(82022);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(58763);
;// ./node_modules/@mui/icons-material/esm/InfoOutlined.js
"use client";



/* harmony default export */ const InfoOutlined = ((0,createSvgIcon/* default */.A)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}), 'InfoOutlined'));
;// ./src/js/AdminView1/PageView/DashboardInfo/ARAgingReport.js
function ARAgingReport_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function ARAgingReport_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { ARAgingReport_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { ARAgingReport_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ARAgingReport_slicedToArray(r, e) { return ARAgingReport_arrayWithHoles(r) || ARAgingReport_iterableToArrayLimit(r, e) || ARAgingReport_unsupportedIterableToArray(r, e) || ARAgingReport_nonIterableRest(); }
function ARAgingReport_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ARAgingReport_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return ARAgingReport_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ARAgingReport_arrayLikeToArray(r, a) : void 0; } }
function ARAgingReport_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ARAgingReport_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function ARAgingReport_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;






function ARAgingReport(_ref) {
  var _selectedCustomer$tot;
  var onInvoice = _ref.onInvoice,
    onPayment = _ref.onPayment;
  var _useState = (0,react.useState)(''),
    _useState2 = ARAgingReport_slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = ARAgingReport_slicedToArray(_useState3, 2),
    selectedCustomer = _useState4[0],
    setSelectedCustomer = _useState4[1];
  var componentRef = (0,react.useRef)();
  var handlePrint = (0,lib.useReactToPrint)({
    content: () => componentRef.current,
    documentTitle: "Statement_Of_Accounts_".concat((selectedCustomer === null || selectedCustomer === void 0 ? void 0 : selectedCustomer.name) || 'Customer')
  });
  var customerInvoices = (0,react.useMemo)(() => {
    if (!selectedCustomer || !onInvoice || !Array.isArray(onInvoice)) return [];
    return onInvoice.filter(inv => {
      var _inv$customerName;
      if (['Draft', 'Voided', 'Void', 'Decline'].includes(inv.status)) return false;
      var balance = Number(inv.balanceDue || 0);
      if (balance <= 0) return false;
      var custId = ((_inv$customerName = inv.customerName) === null || _inv$customerName === void 0 ? void 0 : _inv$customerName._id) || inv.customerId || 'unknown';
      return custId === selectedCustomer.id;
    }).sort((a, b) => new Date(a.invoiceDate) - new Date(b.invoiceDate));
  }, [selectedCustomer, onInvoice]);
  var agingData = (0,react.useMemo)(() => {
    if (!onInvoice || !Array.isArray(onInvoice)) return [];
    var customerMap = {};
    onInvoice.forEach(inv => {
      var _inv$customerName2, _inv$customerName3;
      // Only consider invoices with a balance due and not voided/draft
      if (['Draft', 'Voided', 'Void', 'Decline'].includes(inv.status)) return;
      var balance = Number(inv.balanceDue || 0);
      if (balance <= 0) return;
      var custId = ((_inv$customerName2 = inv.customerName) === null || _inv$customerName2 === void 0 ? void 0 : _inv$customerName2._id) || inv.customerId || 'unknown';
      var custName = ((_inv$customerName3 = inv.customerName) === null || _inv$customerName3 === void 0 ? void 0 : _inv$customerName3.customerName) || 'Unknown Customer';
      if (!customerMap[custId]) {
        customerMap[custId] = {
          id: custId,
          name: custName,
          '0-30': 0,
          '31-60': 0,
          '61-90': 0,
          '90+': 0,
          total: 0
        };
      }
      var invDate = dayjs_min_default()(inv.invoiceDate);
      var today = dayjs_min_default()();
      var daysOverdue = today.diff(invDate, 'day');
      if (daysOverdue <= 30) {
        customerMap[custId]['0-30'] += balance;
      } else if (daysOverdue <= 60) {
        customerMap[custId]['31-60'] += balance;
      } else if (daysOverdue <= 90) {
        customerMap[custId]['61-90'] += balance;
      } else {
        customerMap[custId]['90+'] += balance;
      }
      customerMap[custId].total += balance;
    });
    return Object.values(customerMap).filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).sort((a, b) => b.total - a.total);
  }, [onInvoice, searchTerm]);
  var totals = (0,react.useMemo)(() => {
    return agingData.reduce((acc, curr) => ({
      '0-30': acc['0-30'] + curr['0-30'],
      '31-60': acc['31-60'] + curr['31-60'],
      '61-90': acc['61-90'] + curr['61-90'],
      '90+': acc['90+'] + curr['90+'],
      total: acc.total + curr.total
    }), {
      '0-30': 0,
      '31-60': 0,
      '61-90': 0,
      '90+': 0,
      total: 0
    });
  }, [agingData]);
  var exportToExcel = /*#__PURE__*/function () {
    var _ref2 = ARAgingReport_asyncToGenerator(function* () {
      var workbook = new (exceljs_min_default()).Workbook();
      var worksheet = workbook.addWorksheet('A-R Aging Report');
      worksheet.columns = [{
        header: 'Customer Name',
        key: 'name',
        width: 30
      }, {
        header: '0-30 Days',
        key: '0-30',
        width: 15
      }, {
        header: '31-60 Days',
        key: '31-60',
        width: 15
      }, {
        header: '61-90 Days',
        key: '61-90',
        width: 15
      }, {
        header: '90+ Days',
        key: '90+',
        width: 15
      }, {
        header: 'Total Balance',
        key: 'total',
        width: 18
      }];
      agingData.forEach(row => {
        worksheet.addRow(row);
      });
      worksheet.getRow(1).font = {
        bold: true
      };
      worksheet.addRow([]);
      worksheet.addRow({
        name: 'TOTALS',
        '0-30': totals['0-30'],
        '31-60': totals['31-60'],
        '61-90': totals['61-90'],
        '90+': totals['90+'],
        total: totals.total
      }).font = {
        bold: true
      };
      var buffer = yield workbook.xlsx.writeBuffer();
      (0,FileSaver_min.saveAs)(new Blob([buffer]), "AR_Aging_Report_".concat(dayjs_min_default()().format('YYYY-MM-DD'), ".xlsx"));
    });
    return function exportToExcel() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      mb: 3,
      display: 'flex',
      gap: 2,
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement(TextField/* default */.A, {
    label: "Search Customer",
    size: "small",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    sx: {
      width: 300
    }
  }), /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    title: "Aging is calculated based on Invoice Date vs Today"
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    size: "small"
  }, /*#__PURE__*/react.createElement(InfoOutlined, null))), /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "contained",
    startIcon: /*#__PURE__*/react.createElement(FileDownload, null),
    onClick: exportToExcel,
    sx: {
      ml: 'auto',
      backgroundColor: '#30368a'
    }
  }, "Export Excel")), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    spacing: 2,
    sx: {
      mb: 4
    }
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 3
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      borderTop: '4px solid #4caf50'
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "caption",
    sx: {
      fontWeight: 'bold'
    }
  }, "0-30 DAYS (CURRENT)"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", totals['0-30'].toLocaleString())))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 3
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      borderTop: '4px solid #ff9800'
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "caption",
    sx: {
      fontWeight: 'bold'
    }
  }, "31-60 DAYS"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", totals['31-60'].toLocaleString())))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 3
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      borderTop: '4px solid #f44336'
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "caption",
    sx: {
      fontWeight: 'bold'
    }
  }, "61-90 DAYS"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", totals['61-90'].toLocaleString())))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 3
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      borderTop: '4px solid #b71c1c',
      backgroundColor: '#fff5f5'
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "caption",
    sx: {
      fontWeight: 'bold'
    }
  }, "OVER 90 DAYS"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold',
      color: '#b71c1c'
    }
  }, "$", totals['90+'].toLocaleString()))))), /*#__PURE__*/react.createElement(TableContainer/* default */.A, {
    component: Paper/* default */.A,
    sx: {
      boxShadow: 'none',
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react.createElement(Table/* default */.A, {
    stickyHeader: true
  }, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Customer Name"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "0-30 Days"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "31-60 Days"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "61-90 Days"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "90+ Days"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#30368a',
      color: 'white'
    }
  }, "Total Balance"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, agingData.map(row => /*#__PURE__*/react.createElement(TableRow/* default */.A, {
    key: row.id,
    hover: true
  }, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: '500',
      color: '#1976d2',
      cursor: 'pointer',
      textDecoration: 'underline'
    },
    onClick: () => setSelectedCustomer(row)
  }, row.name), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      color: row['0-30'] > 0 ? '#4caf50' : '#ccc'
    }
  }, row['0-30'] > 0 ? "$".concat(row['0-30'].toLocaleString()) : '-'), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      color: row['31-60'] > 0 ? '#ff9800' : '#ccc'
    }
  }, row['31-60'] > 0 ? "$".concat(row['31-60'].toLocaleString()) : '-'), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      color: row['61-90'] > 0 ? '#f44336' : '#ccc'
    }
  }, row['61-90'] > 0 ? "$".concat(row['61-90'].toLocaleString()) : '-'), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      color: row['90+'] > 0 ? '#b71c1c' : '#ccc',
      fontWeight: row['90+'] > 0 ? '700' : '400'
    }
  }, row['90+'] > 0 ? "$".concat(row['90+'].toLocaleString()) : '-'), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", row.total.toLocaleString()))), agingData.length === 0 && /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    colSpan: 6,
    align: "center",
    sx: {
      py: 3
    }
  }, "No outstanding balances found."))), /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "GRAND TOTALS"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "$", totals['0-30'].toLocaleString()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "$", totals['31-60'].toLocaleString()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "$", totals['61-90'].toLocaleString()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "$", totals['90+'].toLocaleString()), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4',
      fontSize: '1.1rem'
    }
  }, "$", totals.total.toLocaleString()))))), /*#__PURE__*/react.createElement(Dialog/* default */.A, {
    open: Boolean(selectedCustomer),
    onClose: () => setSelectedCustomer(null),
    maxWidth: "md",
    fullWidth: true
  }, /*#__PURE__*/react.createElement(DialogTitle/* default */.A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f8f9fa'
    }
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h6",
    sx: {
      fontWeight: 'bold'
    }
  }, "Statement of Accounts - ", selectedCustomer === null || selectedCustomer === void 0 ? void 0 : selectedCustomer.name), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: () => setSelectedCustomer(null)
  }, /*#__PURE__*/react.createElement(Close/* default */.A, null))), /*#__PURE__*/react.createElement(DialogContent/* default */.A, {
    dividers: true
  }, /*#__PURE__*/react.createElement("div", {
    ref: componentRef,
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold',
      mb: 3,
      display: 'none',
      '@media print': {
        display: 'block'
      }
    }
  }, "Statement of Accounts - ", selectedCustomer === null || selectedCustomer === void 0 ? void 0 : selectedCustomer.name), /*#__PURE__*/react.createElement(TableContainer/* default */.A, {
    component: Paper/* default */.A,
    sx: {
      boxShadow: 'none',
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react.createElement(Table/* default */.A, {
    size: "small"
  }, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "Date"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "Invoice #"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "Total Amount"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "Amount Paid"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "Balance Due"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "center",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f1f3f4'
    }
  }, "Overdue"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, customerInvoices.map(inv => {
    var invDate = dayjs_min_default()(inv.invoiceDate);
    var daysOverdue = Math.max(0, dayjs_min_default()().diff(invDate, 'day'));
    var total = Number(inv.totalInvoice || inv.total || 0);
    var balance = Number(inv.balanceDue || 0);
    var paid = total - balance;
    return /*#__PURE__*/react.createElement(TableRow/* default */.A, {
      key: inv._id,
      hover: true
    }, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, invDate.format('DD/MM/YYYY')), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, inv.invoiceNumber ? "INV-".concat(String(inv.invoiceNumber).padStart(6, '0')) : inv.factureNumber ? "INV-".concat(String(inv.factureNumber).padStart(6, '0')) : 'N/A'), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "right"
    }, "$", total.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "right"
    }, "$", paid.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "right",
      sx: {
        fontWeight: 'bold',
        color: '#d32f2f'
      }
    }, "$", balance.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, /*#__PURE__*/react.createElement(Chip/* default */.A, {
      label: "".concat(daysOverdue, " days"),
      size: "small",
      color: daysOverdue > 90 ? "error" : daysOverdue > 30 ? "warning" : "success",
      variant: "outlined"
    })));
  }), customerInvoices.length === 0 && /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    colSpan: 6,
    align: "center",
    sx: {
      py: 3
    }
  }, "No outstanding invoices found."))), /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    colSpan: 4,
    sx: {
      fontWeight: 'bold',
      textAlign: 'right',
      backgroundColor: '#f8f9fa'
    }
  }, "Total Outstanding Balance:"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      color: '#d32f2f',
      backgroundColor: '#f8f9fa',
      fontSize: '1.1rem'
    }
  }, "$", selectedCustomer === null || selectedCustomer === void 0 || (_selectedCustomer$tot = selectedCustomer.total) === null || _selectedCustomer$tot === void 0 ? void 0 : _selectedCustomer$tot.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      backgroundColor: '#f8f9fa'
    }
  }))))))), /*#__PURE__*/react.createElement(DialogActions/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: handlePrint,
    variant: "outlined",
    startIcon: /*#__PURE__*/react.createElement(LocalPrintshop/* default */.A, null),
    sx: {
      mr: 'auto',
      color: '#30368a',
      borderColor: '#30368a'
    }
  }, "Print"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => setSelectedCustomer(null),
    variant: "contained",
    sx: {
      backgroundColor: '#30368a'
    }
  }, "Close"))));
}
/* harmony default export */ const DashboardInfo_ARAgingReport = (ARAgingReport);
;// ./src/js/AdminView1/PageView/DashboardInfo/SupplierReportInfo.js
function SupplierReportInfo_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function SupplierReportInfo_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { SupplierReportInfo_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { SupplierReportInfo_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function SupplierReportInfo_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function SupplierReportInfo_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? SupplierReportInfo_ownKeys(Object(t), !0).forEach(function (r) { SupplierReportInfo_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : SupplierReportInfo_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function SupplierReportInfo_defineProperty(e, r, t) { return (r = SupplierReportInfo_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function SupplierReportInfo_toPropertyKey(t) { var i = SupplierReportInfo_toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function SupplierReportInfo_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function SupplierReportInfo_slicedToArray(r, e) { return SupplierReportInfo_arrayWithHoles(r) || SupplierReportInfo_iterableToArrayLimit(r, e) || SupplierReportInfo_unsupportedIterableToArray(r, e) || SupplierReportInfo_nonIterableRest(); }
function SupplierReportInfo_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function SupplierReportInfo_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return SupplierReportInfo_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? SupplierReportInfo_arrayLikeToArray(r, a) : void 0; } }
function SupplierReportInfo_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function SupplierReportInfo_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function SupplierReportInfo_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function SupplierReportInfo_extends() { return SupplierReportInfo_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, SupplierReportInfo_extends.apply(null, arguments); }
;







dayjs_min_default().extend((isBetween_default()));
dayjs_min_default().extend((customParseFormat_default()));
var SupplierReportInfo_Transition = /*#__PURE__*/react.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/react.createElement(Slide/* default */.A, SupplierReportInfo_extends({
    direction: "up",
    ref: ref
  }, props));
});
function SupplierReportInfo(_ref) {
  var _selectedSupplier$pur;
  var onSuppliers = _ref.onSuppliers,
    onItemPurchase = _ref.onItemPurchase;
  var _useState = (0,react.useState)(''),
    _useState2 = SupplierReportInfo_slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var _useState3 = (0,react.useState)('All'),
    _useState4 = SupplierReportInfo_slicedToArray(_useState3, 2),
    filterPaid = _useState4[0],
    setFilterPaid = _useState4[1];
  var _useState5 = (0,react.useState)(null),
    _useState6 = SupplierReportInfo_slicedToArray(_useState5, 2),
    selectedSupplier = _useState6[0],
    setSelectedSupplier = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = SupplierReportInfo_slicedToArray(_useState7, 2),
    openDetails = _useState8[0],
    setOpenDetails = _useState8[1];
  var processedData = (0,react.useMemo)(() => {
    var suppliersList = onSuppliers || [];
    var purchasesList = onItemPurchase || [];
    var supplierMap = {};

    // Initialize map with all suppliers
    suppliersList.forEach(supplier => {
      supplierMap[supplier._id] = {
        id: supplier._id,
        name: supplier.supplierName,
        storeName: supplier.storeName,
        totalBilled: 0,
        totalPaid: 0,
        balance: 0,
        status: 'Paid',
        purchases: []
      };
    });

    // Map purchases to suppliers and calculate
    purchasesList.forEach(purchase => {
      // Find supplier match (either by ID or storeName/manufacturer string match)
      var matchedSupplierId = purchase.manufacturerID;

      // Fallback if ID is missing but we have name match
      if (!matchedSupplierId) {
        var found = suppliersList.find(s => s.storeName === purchase.manufacturer || s.supplierName === purchase.manufacturer);
        if (found) matchedSupplierId = found._id;
      }
      if (matchedSupplierId && supplierMap[matchedSupplierId]) {
        var totalVal = purchase.totalUSD !== undefined ? purchase.totalUSD : purchase.total || 0;
        var purchaseStatus = purchase.status || 'Unpaid';
        if (purchaseStatus.toLowerCase() === 'partially-paid') {
          purchaseStatus = 'Partially-Paid';
        }
        var paidVal = 0;
        if (purchaseStatus.toLowerCase() === 'paid') {
          paidVal = totalVal;
        } else if (purchaseStatus === 'Partially-Paid') {
          paidVal = (purchase.payments || []).reduce((sum, p) => sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || 1)), 0);
        }
        var unpaidVal = Math.max(0, totalVal - paidVal);
        supplierMap[matchedSupplierId].purchases.push(SupplierReportInfo_objectSpread(SupplierReportInfo_objectSpread({}, purchase), {}, {
          calculatedTotal: totalVal,
          calculatedPaid: paidVal,
          calculatedBalance: unpaidVal,
          displayStatus: purchaseStatus
        }));
        supplierMap[matchedSupplierId].totalBilled += totalVal;
        supplierMap[matchedSupplierId].totalPaid += paidVal;
      }
    });

    // Finalize balance and overall status
    Object.values(supplierMap).forEach(s => {
      s.balance = s.totalBilled - s.totalPaid;
      if (s.totalBilled === 0) {
        s.status = '-';
      } else if (s.balance <= 0) {
        s.status = 'Paid';
      } else if (s.totalPaid > 0 && s.balance > 0) {
        s.status = 'Partially-Paid';
      } else {
        s.status = 'Unpaid';
      }
    });
    return Object.values(supplierMap).filter(s => {
      var matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.storeName.toLowerCase().includes(searchTerm.toLowerCase());
      var matchesStatus = filterPaid === 'All' || s.status === filterPaid;
      return matchesSearch && matchesStatus && s.purchases.length > 0; // only show suppliers with activity
    }).sort((a, b) => b.totalBilled - a.totalBilled);
  }, [onSuppliers, onItemPurchase, searchTerm, filterPaid]);
  var totals = (0,react.useMemo)(() => {
    return processedData.reduce((acc, curr) => ({
      billed: acc.billed + curr.totalBilled,
      paid: acc.paid + curr.totalPaid,
      balance: acc.balance + curr.balance
    }), {
      billed: 0,
      paid: 0,
      balance: 0
    });
  }, [processedData]);
  var handleOpenDetails = supplier => {
    setSelectedSupplier(supplier);
    setOpenDetails(true);
  };
  var handleCloseDetails = () => {
    setOpenDetails(false);
    setSelectedSupplier(null);
  };
  var exportToExcel = /*#__PURE__*/function () {
    var _ref2 = SupplierReportInfo_asyncToGenerator(function* () {
      var workbook = new (exceljs_min_default()).Workbook();
      var worksheet = workbook.addWorksheet('Supplier Payables');
      worksheet.columns = [{
        header: 'Supplier Name',
        key: 'name',
        width: 25
      }, {
        header: 'Store Name',
        key: 'store',
        width: 25
      }, {
        header: 'Total Billed',
        key: 'billed',
        width: 15
      }, {
        header: 'Total Paid',
        key: 'paid',
        width: 15
      }, {
        header: 'Balance Due',
        key: 'balance',
        width: 15
      }, {
        header: 'Status',
        key: 'status',
        width: 15
      }];
      processedData.forEach(row => {
        worksheet.addRow({
          name: row.name,
          store: row.storeName,
          billed: row.totalBilled,
          paid: row.totalPaid,
          balance: row.balance,
          status: row.status
        });
      });
      worksheet.getRow(1).font = {
        bold: true
      };
      worksheet.addRow([]);
      worksheet.addRow({
        name: 'TOTALS',
        billed: totals.billed,
        paid: totals.paid,
        balance: totals.balance
      }).font = {
        bold: true
      };
      var buffer = yield workbook.xlsx.writeBuffer();
      (0,FileSaver_min.saveAs)(new Blob([buffer]), "Supplier_Payables_".concat(dayjs_min_default()().format('YYYY-MM-DD'), ".xlsx"));
    });
    return function exportToExcel() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      mb: 3,
      display: 'flex',
      gap: 2,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement(TextField/* default */.A, {
    label: "Search Supplier / Store",
    size: "small",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    sx: {
      width: 250
    }
  }), /*#__PURE__*/react.createElement(FormControl/* default */.A, {
    size: "small",
    sx: {
      width: 180
    }
  }, /*#__PURE__*/react.createElement(InputLabel/* default */.A, null, "Status"), /*#__PURE__*/react.createElement(Select/* default */.A, {
    value: filterPaid,
    label: "Status",
    onChange: e => setFilterPaid(e.target.value)
  }, /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "All"
  }, "All Statuses"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Paid"
  }, "Fully Paid"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Partially-Paid"
  }, "Partially Paid"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    value: "Unpaid"
  }, "Unpaid"))), /*#__PURE__*/react.createElement(Button/* default */.A, {
    variant: "contained",
    startIcon: /*#__PURE__*/react.createElement(FileDownload, null),
    onClick: exportToExcel,
    sx: {
      ml: 'auto',
      backgroundColor: '#30368a'
    }
  }, "Export Excel")), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    spacing: 2,
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      backgroundColor: '#e8f5e9'
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Billed"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", totals.billed.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      backgroundColor: '#e3f2fd'
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Paid to Suppliers"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, "$", totals.paid.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      backgroundColor: '#fff3e0'
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Total Balance Due"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold',
      color: '#e65100'
    }
  }, "$", totals.balance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))))), /*#__PURE__*/react.createElement(TableContainer/* default */.A, {
    component: Paper/* default */.A,
    sx: {
      boxShadow: 'none',
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react.createElement(Table/* default */.A, {
    stickyHeader: true
  }, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Supplier Name"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Store Name"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Total Billed"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Total Paid"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Balance Due"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "center",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Status"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, processedData.map(row => /*#__PURE__*/react.createElement(TableRow/* default */.A, {
    key: row.id,
    hover: true
  }, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'medium',
      cursor: 'pointer',
      color: '#30368a',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    onClick: () => handleOpenDetails(row)
  }, row.name), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, row.storeName), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right"
  }, "$", row.totalBilled.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      color: 'success.main'
    }
  }, "$", row.totalPaid.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      color: row.balance > 0 ? 'error.main' : 'inherit'
    }
  }, "$", row.balance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "center"
  }, /*#__PURE__*/react.createElement("span", {
    style: {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      backgroundColor: row.status === 'Paid' ? '#e8f5e9' : row.status === 'Partially-Paid' ? '#fff3e0' : '#ffebee',
      color: row.status === 'Paid' ? '#2e7d32' : row.status === 'Partially-Paid' ? '#e65100' : '#c62828'
    }
  }, row.status)))), processedData.length === 0 && /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    colSpan: 6,
    align: "center",
    sx: {
      py: 3
    }
  }, "No data found for the selected criteria"))), /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    colSpan: 2,
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "TOTALS"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "$", totals.billed.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "$", totals.paid.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "$", totals.balance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      backgroundColor: '#f8f9fa'
    }
  }))))), /*#__PURE__*/react.createElement(Dialog/* default */.A, {
    fullScreen: true,
    open: openDetails,
    onClose: handleCloseDetails,
    TransitionComponent: SupplierReportInfo_Transition
  }, /*#__PURE__*/react.createElement(AppBar/* default */.A, {
    sx: {
      position: 'relative',
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react.createElement(Toolbar/* default */.A, null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    edge: "start",
    color: "inherit",
    onClick: handleCloseDetails,
    "aria-label": "close"
  }, /*#__PURE__*/react.createElement(Close/* default */.A, null)), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    sx: {
      ml: 2,
      flex: 1
    },
    variant: "h6",
    component: "div"
  }, "Supplier Breakdown: ", selectedSupplier === null || selectedSupplier === void 0 ? void 0 : selectedSupplier.name, " (", selectedSupplier === null || selectedSupplier === void 0 ? void 0 : selectedSupplier.storeName, ")"), /*#__PURE__*/react.createElement(Button/* default */.A, {
    autoFocus: true,
    color: "inherit",
    onClick: handleCloseDetails
  }, "Close"))), /*#__PURE__*/react.createElement(DialogContent/* default */.A, {
    sx: {
      p: 4,
      backgroundColor: '#f5f5f5'
    }
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    spacing: 4
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "overline",
    color: "textSecondary"
  }, "Total Billed"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      color: '#2e7d32',
      fontWeight: 'bold'
    }
  }, "$", ((selectedSupplier === null || selectedSupplier === void 0 ? void 0 : selectedSupplier.totalBilled) || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "overline",
    color: "textSecondary"
  }, "Total Paid"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      color: '#0288d1',
      fontWeight: 'bold'
    }
  }, "$", ((selectedSupplier === null || selectedSupplier === void 0 ? void 0 : selectedSupplier.totalPaid) || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "overline",
    color: "textSecondary"
  }, "Balance Due"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, "$", ((selectedSupplier === null || selectedSupplier === void 0 ? void 0 : selectedSupplier.balance) || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))))), /*#__PURE__*/react.createElement(TableContainer/* default */.A, {
    component: Paper/* default */.A,
    sx: {
      boxShadow: 'none',
      border: '1px solid #eee'
    }
  }, /*#__PURE__*/react.createElement(Table/* default */.A, {
    stickyHeader: true
  }, /*#__PURE__*/react.createElement(TableHead/* default */.A, null, /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Date"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Purchase Ref"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Description / Project"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Billed Amount"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Paid Amount"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "right",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Balance"), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    align: "center",
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f8f9fa'
    }
  }, "Status"))), /*#__PURE__*/react.createElement(TableBody/* default */.A, null, selectedSupplier === null || selectedSupplier === void 0 || (_selectedSupplier$pur = selectedSupplier.purchases) === null || _selectedSupplier$pur === void 0 ? void 0 : _selectedSupplier$pur.sort((a, b) => new Date(a.itemPurchaseDate) - new Date(b.itemPurchaseDate)).map((item, idx) => {
    return /*#__PURE__*/react.createElement(TableRow/* default */.A, {
      key: idx,
      hover: true
    }, /*#__PURE__*/react.createElement(TableCell/* default */.A, null, dayjs_min_default()(item.itemPurchaseDate).format('DD/MM/YYYY')), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, item.itemPurchaseNumber), /*#__PURE__*/react.createElement(TableCell/* default */.A, null, item.projectName ? item.projectName.name : item.description), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "right"
    }, "$", (item.calculatedTotal || 0).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "right"
    }, "$", (item.calculatedPaid || 0).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "right",
      sx: {
        fontWeight: 'bold',
        color: item.calculatedBalance > 0 ? '#d32f2f' : 'inherit'
      }
    }, "$", (item.calculatedBalance || 0).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), /*#__PURE__*/react.createElement(TableCell/* default */.A, {
      align: "center"
    }, /*#__PURE__*/react.createElement("span", {
      style: {
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '0.75rem',
        backgroundColor: item.displayStatus === 'Paid' ? '#e8f5e9' : item.displayStatus === 'Partially-Paid' ? '#fff3e0' : '#ffebee',
        color: item.displayStatus === 'Paid' ? '#2e7d32' : item.displayStatus === 'Partially-Paid' ? '#e65100' : '#c62828'
      }
    }, item.displayStatus)));
  }), (!(selectedSupplier !== null && selectedSupplier !== void 0 && selectedSupplier.purchases) || selectedSupplier.purchases.length === 0) && /*#__PURE__*/react.createElement(TableRow/* default */.A, null, /*#__PURE__*/react.createElement(TableCell/* default */.A, {
    colSpan: 7,
    align: "center",
    sx: {
      py: 3
    }
  }, "No purchases found for this supplier."))))))));
}
/* harmony default export */ const DashboardInfo_SupplierReportInfo = (SupplierReportInfo);
;// ./src/js/AdminView1/ReportsViewAdmin.js
function ReportsViewAdmin_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function ReportsViewAdmin_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { ReportsViewAdmin_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { ReportsViewAdmin_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ReportsViewAdmin_slicedToArray(r, e) { return ReportsViewAdmin_arrayWithHoles(r) || ReportsViewAdmin_iterableToArrayLimit(r, e) || ReportsViewAdmin_unsupportedIterableToArray(r, e) || ReportsViewAdmin_nonIterableRest(); }
function ReportsViewAdmin_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ReportsViewAdmin_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return ReportsViewAdmin_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ReportsViewAdmin_arrayLikeToArray(r, a) : void 0; } }
function ReportsViewAdmin_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ReportsViewAdmin_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function ReportsViewAdmin_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ReportsViewAdmin_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ReportsViewAdmin_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ReportsViewAdmin_ownKeys(Object(t), !0).forEach(function (r) { ReportsViewAdmin_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ReportsViewAdmin_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ReportsViewAdmin_defineProperty(e, r, t) { return (r = ReportsViewAdmin_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function ReportsViewAdmin_toPropertyKey(t) { var i = ReportsViewAdmin_toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function ReportsViewAdmin_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;













dayjs_min_default().extend((customParseFormat_default()));





// Import existing report components













var drawerWidth = 240;
var ReportsViewAdmin_AppBar = (0,styled/* default */.Ay)(AppBar/* default */.A, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref => {
  var theme = _ref.theme,
    open = _ref.open;
  return ReportsViewAdmin_objectSpread({
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
var ReportsViewAdmin_Drawer = (0,styled/* default */.Ay)(Drawer/* default */.Ay, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref2 => {
  var theme = _ref2.theme,
    open = _ref2.open;
  return {
    '& .MuiDrawer-paper': ReportsViewAdmin_objectSpread({
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
var KPICard = _ref3 => {
  var title = _ref3.title,
    value = _ref3.value,
    icon = _ref3.icon,
    color = _ref3.color;
  return /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      height: '100%',
      boxShadow: 3,
      borderLeft: "5px solid ".concat(color)
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement(Box/* default */.A, null, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: "textSecondary",
    gutterBottom: true,
    variant: "overline",
    sx: {
      fontSize: '0.7rem'
    }
  }, title), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold'
    }
  }, value)), /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      color: color
    }
  }, icon))));
};
var ReportSection = _ref4 => {
  var title = _ref4.title,
    icon = _ref4.icon,
    items = _ref4.items,
    open = _ref4.open,
    onToggle = _ref4.onToggle,
    activeReport = _ref4.activeReport,
    onSelect = _ref4.onSelect;
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      mb: 2
    }
  }, /*#__PURE__*/react.createElement(ListItemButton/* default */.A, {
    onClick: onToggle,
    sx: {
      borderRadius: 1,
      mb: 0.5,
      backgroundColor: open ? 'rgba(48, 54, 138, 0.04)' : 'transparent'
    }
  }, /*#__PURE__*/react.createElement(ListItemIcon/* default */.A, {
    sx: {
      color: '#30368a'
    }
  }, icon), /*#__PURE__*/react.createElement(ListItemText/* default */.A, {
    primary: title,
    sx: {
      fontWeight: 'bold'
    }
  }), open ? /*#__PURE__*/react.createElement(ExpandLess, null) : /*#__PURE__*/react.createElement(ExpandMore, null)), /*#__PURE__*/react.createElement(Collapse/* default */.A, {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/react.createElement(List/* default */.A, {
    component: "div",
    disablePadding: true
  }, items.map((item, index) => /*#__PURE__*/react.createElement(ListItemButton/* default */.A, {
    key: index,
    sx: {
      pl: 4,
      borderRadius: 1,
      backgroundColor: activeReport === item.id ? 'rgba(48, 54, 138, 0.1)' : 'transparent'
    },
    onClick: () => onSelect(item.id)
  }, /*#__PURE__*/react.createElement(ListItemIcon/* default */.A, null, /*#__PURE__*/react.createElement(StarBorder, {
    fontSize: "small",
    color: activeReport === item.id ? "primary" : "inherit"
  })), /*#__PURE__*/react.createElement(ListItemText/* default */.A, {
    primary: item.label,
    sx: {
      color: activeReport === item.id ? '#30368a' : 'inherit'
    }
  }))))));
};
function ReportsViewAdmin() {
  var _user$data2;
  var navigate = (0,dist/* useNavigate */.Zp)();
  var dispatch = (0,es/* useDispatch */.wA)();
  var user = (0,es/* useSelector */.d4)(authSlice/* selectCurrentUser */.xu);
  var componentRef = (0,react.useRef)();
  var _useState = (0,react.useState)(true),
    _useState2 = ReportsViewAdmin_slicedToArray(_useState, 2),
    sideBar = _useState2[0],
    setSideBar = _useState2[1];
  var _useState3 = (0,react.useState)('financials'),
    _useState4 = ReportsViewAdmin_slicedToArray(_useState3, 2),
    openSection = _useState4[0],
    setOpenSection = _useState4[1];
  var _useState5 = (0,react.useState)('revenue'),
    _useState6 = ReportsViewAdmin_slicedToArray(_useState5, 2),
    activeReport = _useState6[0],
    setActiveReport = _useState6[1];
  var _useState7 = (0,react.useState)({
      items: [],
      invoices: [],
      expenses: [],
      payroll: [],
      payments: [],
      itemPurchases: [],
      maintenance: [],
      projects: [],
      pos: [],
      itemOut: [],
      suppliers: []
    }),
    _useState8 = ReportsViewAdmin_slicedToArray(_useState7, 2),
    data = _useState8[0],
    setData = _useState8[1];
  var _useState9 = (0,react.useState)({
      revenue: 0,
      expenses: 0,
      profit: 0,
      inventoryValue: 0
    }),
    _useState0 = ReportsViewAdmin_slicedToArray(_useState9, 2),
    stats = _useState0[0],
    setStats = _useState0[1];
  var _useState1 = (0,react.useState)('All'),
    _useState10 = ReportsViewAdmin_slicedToArray(_useState1, 2),
    selectedYear = _useState10[0],
    setSelectedYear = _useState10[1];
  var availableYears = react.useMemo(() => {
    var years = new Set();
    var getYear = date => {
      if (!date) return null;
      // Try parsing common formats
      var d = dayjs_min_default()(date, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
      if (!d.isValid()) d = dayjs_min_default()(date);
      return d.isValid() ? d.format('YYYY') : null;
    };
    data.invoices.forEach(i => {
      var y = getYear(i.invoiceDate || i.dateInvoice || i.date);
      if (y) years.add(y);
    });
    data.expenses.forEach(e => {
      var y = getYear(e.expenseDate);
      if (y) years.add(y);
    });
    data.payroll.forEach(p => {
      var y = getYear(p.month);
      if (y) years.add(y);
    });
    data.pos.forEach(p => {
      var y = getYear(p.invoiceDate || p.paymentDate);
      if (y) years.add(y);
    });
    var finalYears = Array.from(years).sort((a, b) => b - a);
    return ['All', ...finalYears];
  }, [data]);
  (0,react.useEffect)(() => {
    var filterByYear = (items, dateField) => {
      if (selectedYear === 'All' || !items) return items || [];
      return items.filter(item => {
        var date = item[dateField];
        if (!date) return false;
        var d = dayjs_min_default()(date, ['YYYY-MM-DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'], true);
        if (!d.isValid()) d = dayjs_min_default()(date);
        return d.isValid() && d.format('YYYY') === selectedYear;
      });
    };
    var filteredInvoices = filterByYear(data.invoices, 'invoiceDate');
    var filteredPos = filterByYear(data.pos, 'invoiceDate');
    var filteredExpenses = filterByYear(data.expenses, 'expenseDate');
    var filteredPayroll = filterByYear(data.payroll, 'month');
    var filteredItemPurchases = filterByYear(data.itemPurchases, 'itemPurchaseDate');

    // For Inventory Value, we show total value regardless of selected year for the snapshot
    var filteredItems = data.items;

    // 1. INVOICES: Only count Invoices that have actually been PAID or PARTIALLY-PAID (Actual money received)
    var totalInvoiceRevenue = filteredInvoices.filter(inv => {
      var s = (inv.status || '').toUpperCase();
      return s === 'PAID' || s === 'FULL PAID' || s === 'PARTIALLY-PAID' || s === 'PARTIALLY PAID';
    }).reduce((sum, inv) => sum + Number(inv.total || 0), 0);

    // 2. POS SALES: Already counts 'TotalAmountPaid' (money actually collected)
    var totalPosRevenue = filteredPos.reduce((sum, p) => sum + Number(p.TotalAmountPaid || 0) / Number(p.rate || 1), 0);
    var totalRevenue = totalInvoiceRevenue + totalPosRevenue;

    // 3. EXPENSES: Add Daily Expenses, Payroll, AND Item Purchases
    var totalExp = filteredExpenses.reduce((sum, exp) => sum + Number(exp.total || 0), 0);
    var totalPayroll = filteredPayroll.reduce((sum, roll) => sum + Number(roll.totalPaidDollars || 0), 0);
    var totalItemPurchases = filteredItemPurchases.filter(item => {
      var s = (item.status || '').toUpperCase();
      return s === 'PAID' || s === 'FULL PAID' || s === 'PARTIALLY-PAID' || s === 'PARTIALLY PAID';
    }).reduce((sum, item) => {
      // Sum the actual money paid to suppliers for this item purchase
      var paidAmount = (item.payments || []).reduce((pSum, p) => {
        var rate = parseFloat(p.rate) || 2800;
        var pUSD = parseFloat(p.amount) || 0;
        var pFC = parseFloat(p.amountFC) || 0;
        return pSum + (parseFloat(p.totalUSD) || pUSD + pFC / rate);
      }, 0);
      return sum + paidAmount;
    }, 0);
    var totalExpenses = totalExp + totalPayroll + totalItemPurchases;
    var invVal = filteredItems.filter(item => item.typeItem === 'Goods').reduce((sum, item) => sum + Number(item.itemQuantity || 0) * Number(item.itemCostPrice || 0), 0);
    setStats({
      revenue: totalRevenue,
      expenses: totalExpenses,
      profit: totalRevenue - totalExpenses,
      inventoryValue: Number(invVal.toFixed(2))
    });
  }, [data, selectedYear]);
  (0,react.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref5 = ReportsViewAdmin_asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,authSlice/* setUser */.gV)({
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
        return _ref5.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch, navigate]);
  var _useState11 = (0,react.useState)([]),
    _useState12 = ReportsViewAdmin_slicedToArray(_useState11, 2),
    grantAccess = _useState12[0],
    setGrantAccess = _useState12[1];
  var _useState13 = (0,react.useState)(true),
    _useState14 = ReportsViewAdmin_slicedToArray(_useState13, 2),
    isFetchingAccess = _useState14[0],
    setIsFetchingAccess = _useState14[1];
  (0,react.useEffect)(() => {
    var _user$data;
    if (user !== null && user !== void 0 && (_user$data = user.data) !== null && _user$data !== void 0 && _user$data.id) {
      var fetchNumber = /*#__PURE__*/function () {
        var _ref6 = ReportsViewAdmin_asyncToGenerator(function* () {
          try {
            var _res$data;
            var res = yield (0,apiCache/* cachedGet */.Fe)("".concat(apiConfig/* ENDPOINT_URL */.m, "/grantAccess"));
            var userAccess = (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.filter(row => row.userID === user.data.id);
            if (userAccess.length > 0) {
              setGrantAccess(userAccess[0].modules);
            }
          } catch (error) {
            console.error('Error fetching access:', error);
          } finally {
            setIsFetchingAccess(false);
          }
        });
        return function fetchNumber() {
          return _ref6.apply(this, arguments);
        };
      }();
      fetchNumber();
    } else {
      // If user is not yet loaded into Redux, keep it loading
      setIsFetchingAccess(true);
    }
  }, [user]);
  var hasAccess = (user === null || user === void 0 || (_user$data2 = user.data) === null || _user$data2 === void 0 ? void 0 : _user$data2.userName) === 'GG' || grantAccess.some(m => m.moduleName === 'Reports' && m.access.readM);
  (0,react.useEffect)(() => {
    var _user$data3;
    if (!hasAccess && grantAccess.length > 0 && (user === null || user === void 0 || (_user$data3 = user.data) === null || _user$data3 === void 0 ? void 0 : _user$data3.userName) !== 'GG') {
      // If we've fetched permissions and user is not GG and doesn't have access
      // We could redirect or show a message.
    }
    var fetchAllData = /*#__PURE__*/function () {
      var _ref7 = ReportsViewAdmin_asyncToGenerator(function* () {
        try {
          var _resItemOut$data, _resSuppliers$data;
          var _yield$Promise$all = yield Promise.all([axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/item")), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/invoice?summary=true")), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/expense?summary=true")), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/payRoll")), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/payment")), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/itemPurchase?summary=true")), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/maintenance?summary=true")), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/projects")), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/pos?summary=true")), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/item-usage")), axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/Supplier"))]),
            _yield$Promise$all2 = ReportsViewAdmin_slicedToArray(_yield$Promise$all, 11),
            resItems = _yield$Promise$all2[0],
            resInvoices = _yield$Promise$all2[1],
            resExpenses = _yield$Promise$all2[2],
            resPayroll = _yield$Promise$all2[3],
            resPayments = _yield$Promise$all2[4],
            resItemPurchases = _yield$Promise$all2[5],
            resMaintenance = _yield$Promise$all2[6],
            resProjects = _yield$Promise$all2[7],
            resPos = _yield$Promise$all2[8],
            resItemOut = _yield$Promise$all2[9],
            resSuppliers = _yield$Promise$all2[10];
          var fetchedData = {
            items: resItems.data.data || [],
            invoices: resInvoices.data.data || [],
            expenses: resExpenses.data.data || [],
            payroll: resPayroll.data.data || [],
            payments: resPayments.data.data || [],
            itemPurchases: resItemPurchases.data.data || [],
            maintenance: resMaintenance.data.data || [],
            projects: resProjects.data.data || [],
            pos: resPos.data.data || [],
            itemOut: ((_resItemOut$data = resItemOut.data) === null || _resItemOut$data === void 0 ? void 0 : _resItemOut$data.data) || [],
            suppliers: ((_resSuppliers$data = resSuppliers.data) === null || _resSuppliers$data === void 0 ? void 0 : _resSuppliers$data.data) || []
          };
          setData(fetchedData);
        } catch (error) {
          console.error('Error fetching stats:', error);
        }
      });
      return function fetchAllData() {
        return _ref7.apply(this, arguments);
      };
    }();
    fetchAllData();
  }, []);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,authSlice/* logOut */.je)());
    navigate('/');
  };
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var handleToggleSection = section => {
    setOpenSection(openSection === section ? null : section);
  };
  var activeReportLabel = () => {
    var _allItems$find;
    var allItems = [{
      id: 'revenue',
      label: 'Revenue Centrals'
    }, {
      id: 'item_report',
      label: 'Item Inventory'
    }, {
      id: 'stock_val',
      label: 'Inventory Valuation'
    }, {
      id: 'maintenance',
      label: 'Maintenance Analysis'
    }, {
      id: 'projects',
      label: 'Project Profitability'
    }, {
      id: 'payroll',
      label: 'Payroll Summary'
    }, {
      id: 'daily_exp',
      label: 'Daily Expenses'
    }, {
      id: 'sales_customer',
      label: 'Sales by Customer'
    }, {
      id: 'pos_analysis',
      label: 'POS Sales Analysis'
    }, {
      id: 'inventory_movement',
      label: 'Inventory Movement'
    }, {
      id: 'ar_aging',
      label: 'A/R Aging Report'
    }, {
      id: 'supplier_payables',
      label: 'Supplier Payables'
    }];
    return ((_allItems$find = allItems.find(i => i.id === activeReport)) === null || _allItems$find === void 0 ? void 0 : _allItems$find.label) || 'Report';
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react.createElement(CssBaseline/* default */.Ay, null), /*#__PURE__*/react.createElement(ReportsViewAdmin_AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react.createElement(Toolbar/* default */.A, {
    sx: {
      pr: '24px'
    }
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: ReportsViewAdmin_objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react.createElement(Menu, null)), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Professional Report Center"), /*#__PURE__*/react.createElement(NotificationVIewInfo/* default */.A, null), /*#__PURE__*/react.createElement(MessageAdminView/* default */.A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react.createElement(Logout, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react.createElement(ReportsViewAdmin_Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react.createElement(Toolbar/* default */.A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react.createElement(ChevronLeft, null))), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(List/* default */.A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react.createElement(SidebarDash/* default */.A, null))), /*#__PURE__*/react.createElement(Box/* default */.A, {
    component: "main",
    sx: {
      backgroundColor: '#f4f5f7',
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react.createElement(Toolbar/* default */.A, null), /*#__PURE__*/react.createElement(Container/* default */.A, {
    maxWidth: "xl",
    sx: {
      mt: 4,
      mb: 4
    }
  }, isFetchingAccess ? /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      mt: 10
    }
  }, /*#__PURE__*/react.createElement(CircularProgress/* default */.A, null)) : !hasAccess ? /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      textAlign: 'center',
      mt: 10
    }
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h4",
    color: "error"
  }, "Access Denied"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "body1"
  }, "You do not have permission to view the Professional Report Center. Please contact GG for access.")) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 2
    }
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h5",
    sx: {
      fontWeight: 'bold',
      color: '#30368a'
    }
  }, "Performance Overview"), /*#__PURE__*/react.createElement(TextField/* default */.A, {
    select: true,
    size: "small",
    label: "Filter by Year",
    value: selectedYear,
    onChange: e => setSelectedYear(e.target.value),
    SelectProps: {
      native: true
    },
    sx: {
      width: 150
    }
  }, availableYears.map(year => /*#__PURE__*/react.createElement("option", {
    key: year,
    value: year
  }, year)))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    spacing: 3,
    sx: {
      mb: 4
    }
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/react.createElement(KPICard, {
    title: "Total Revenue",
    value: "$".concat(stats.revenue.toLocaleString()),
    icon: /*#__PURE__*/react.createElement(MonetizationOn/* default */.A, {
      fontSize: "large"
    }),
    color: "#2e7d32"
  })), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/react.createElement(KPICard, {
    title: "Total Expenses",
    value: "$".concat(stats.expenses.toLocaleString()),
    icon: /*#__PURE__*/react.createElement(Receipt/* default */.A, {
      fontSize: "large"
    }),
    color: "#d32f2f"
  })), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/react.createElement(KPICard, {
    title: "Net Profit",
    value: "$".concat(stats.profit.toLocaleString()),
    icon: /*#__PURE__*/react.createElement(Assessment/* default */.A, {
      fontSize: "large"
    }),
    color: "#0288d1"
  })), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/react.createElement(KPICard, {
    title: "Inventory Value",
    value: "$".concat(stats.inventoryValue.toLocaleString()),
    icon: /*#__PURE__*/react.createElement(Inventory, {
      fontSize: "large"
    }),
    color: "#ed6c02"
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 3
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      boxShadow: 2
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, {
    sx: {
      p: 0
    }
  }, /*#__PURE__*/react.createElement(ListSubheader/* default */.A, {
    component: "div",
    sx: {
      py: 2,
      fontWeight: 'bold',
      fontSize: '1rem',
      backgroundColor: '#fff',
      color: '#30368a'
    }
  }, "Operational Reports"), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(List/* default */.A, {
    sx: {
      p: 1
    }
  }, /*#__PURE__*/react.createElement(ReportSection, {
    title: "Financials",
    icon: /*#__PURE__*/react.createElement(MonetizationOn/* default */.A, null),
    open: openSection === 'financials',
    onToggle: () => handleToggleSection('financials'),
    activeReport: activeReport,
    onSelect: setActiveReport,
    items: [{
      id: 'revenue',
      label: 'Revenue Centrals'
    }, {
      id: 'daily_exp',
      label: 'Daily Expenses'
    }, {
      id: 'sales_customer',
      label: 'Sales by Customer'
    }, {
      id: 'ar_aging',
      label: 'A/R Aging View'
    }, {
      id: 'supplier_payables',
      label: 'Supplier Payables'
    }]
  }), /*#__PURE__*/react.createElement(ReportSection, {
    title: "Inventory",
    icon: /*#__PURE__*/react.createElement(Inventory, null),
    open: openSection === 'inventory',
    onToggle: () => handleToggleSection('inventory'),
    activeReport: activeReport,
    onSelect: setActiveReport,
    items: [{
      id: 'item_report',
      label: 'Item Inventory'
    }, {
      id: 'stock_val',
      label: 'Stock Valuation'
    }, {
      id: 'inventory_movement',
      label: 'Movement Analysis'
    }]
  }), /*#__PURE__*/react.createElement(ReportSection, {
    title: "Projects & Ops",
    icon: /*#__PURE__*/react.createElement(Engineering, null),
    open: openSection === 'ops',
    onToggle: () => handleToggleSection('ops'),
    activeReport: activeReport,
    onSelect: setActiveReport,
    items: [{
      id: 'maintenance',
      label: 'Maintenance'
    }, {
      id: 'projects',
      label: 'Project Info'
    }, {
      id: 'pos_analysis',
      label: 'POS Analysis'
    }]
  }), /*#__PURE__*/react.createElement(ReportSection, {
    title: "HR & Payroll",
    icon: /*#__PURE__*/react.createElement(Groups, null),
    open: openSection === 'hr',
    onToggle: () => handleToggleSection('hr'),
    activeReport: activeReport,
    onSelect: setActiveReport,
    items: [{
      id: 'payroll',
      label: 'Payroll summary'
    }]
  }))))), /*#__PURE__*/react.createElement(Grid/* default */.Ay, {
    item: true,
    xs: 12,
    md: 9
  }, /*#__PURE__*/react.createElement(Card/* default */.A, {
    sx: {
      height: '100%',
      minHeight: '650px',
      boxShadow: 2
    }
  }, /*#__PURE__*/react.createElement(CardContent/* default */.A, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 2
    }
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "h6",
    color: "primary",
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1
    }
  }, /*#__PURE__*/react.createElement(Description, {
    fontSize: "small"
  }), " ", activeReportLabel()), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    spacing: 1
  }, /*#__PURE__*/react.createElement((lib_default()), {
    trigger: () => /*#__PURE__*/react.createElement(Button/* default */.A, {
      variant: "outlined",
      startIcon: /*#__PURE__*/react.createElement(LocalPrintshop/* default */.A, null),
      size: "small"
    }, "Print Report"),
    content: () => componentRef.current
  }))), /*#__PURE__*/react.createElement(Divider/* default */.A, {
    sx: {
      mb: 2
    }
  }), /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      p: 1,
      backgroundColor: '#fff',
      minHeight: '550px'
    },
    ref: componentRef
  }, activeReport === 'revenue' && /*#__PURE__*/react.createElement(RevenueExpensesAll/* default */.A, {
    onMonth: "All",
    onPayment: data.payments,
    onPayRoll: data.payroll,
    onItemPurChase: data.itemPurchases,
    onExpenses: data.expenses,
    allInvoices: data.invoices,
    posInvoice: data.pos,
    customers: data.customers
  }), activeReport === 'item_report' && /*#__PURE__*/react.createElement(ItemReportInfo/* default */.A, {
    onMonth: "Category",
    onItem: data.items
  }), activeReport === 'maintenance' && /*#__PURE__*/react.createElement(MaintenanceReportInfo/* default */.A, {
    onMonth: "All",
    onMaintenance: data.maintenance
  }), activeReport === 'daily_exp' && /*#__PURE__*/react.createElement(DailyExpensesReportInfo/* default */.A, {
    onMonth: "All",
    onExpenses: data.expenses
  }), activeReport === 'ar_aging' && /*#__PURE__*/react.createElement(DashboardInfo_ARAgingReport, {
    onInvoice: data.invoices,
    onPayment: data.payments
  }), activeReport === 'payroll' && /*#__PURE__*/react.createElement(PayRollReportInfo/* default */.A, {
    onMonth: "",
    onPayRoll: data.payroll
  }), activeReport === 'projects' && /*#__PURE__*/react.createElement(ProjectReportInfo/* default */.A, {
    onMonth: "Revenue",
    onProjectName: data.projects,
    onPayment: data.payments
  }), activeReport === 'stock_val' && /*#__PURE__*/react.createElement(DashboardInfo_InventoryValuationReport, {
    items: data.items
  }), activeReport === 'sales_customer' && /*#__PURE__*/react.createElement(DashboardInfo_SalesByCustomerReport, {
    onInvoice: data.invoices,
    onPos: data.pos,
    onPayment: data.payments
  }), activeReport === 'pos_analysis' && /*#__PURE__*/react.createElement(DashboardInfo_POSAnalyticsReport, {
    onPos: data.pos
  }), activeReport === 'inventory_movement' && /*#__PURE__*/react.createElement(DashboardInfo_InventoryMovementReport, {
    onInventoryIn: data.itemPurchases,
    onInventoryOut: data.itemOut
  }), activeReport === 'supplier_payables' && /*#__PURE__*/react.createElement(DashboardInfo_SupplierReportInfo, {
    onSuppliers: data.suppliers,
    onItemPurchase: data.itemPurchases
  })))))))))));
}
/* harmony default export */ const AdminView1_ReportsViewAdmin = (ReportsViewAdmin);

/***/ }

}]);