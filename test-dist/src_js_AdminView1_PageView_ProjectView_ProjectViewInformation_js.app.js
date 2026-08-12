"use strict";
exports.id = "src_js_AdminView1_PageView_ProjectView_ProjectViewInformation_js";
exports.ids = ["src_js_AdminView1_PageView_ProjectView_ProjectViewInformation_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/ProjectView/ProjectPhase.js"
/*!****************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ProjectView/ProjectPhase.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Stepper */ "./node_modules/@mui/material/Stepper/Stepper.js");
/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Step */ "./node_modules/@mui/material/Step/Step.js");
/* harmony import */ var _mui_material_StepButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/StepButton */ "./node_modules/@mui/material/StepButton/StepButton.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;









function ProjectPhase() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useParams)(),
    id = _useParams.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    steps = _useState2[0],
    setSteps = _useState2[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activeStep = _React$useState2[0],
    setActiveStep = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState({}),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    completed = _React$useState4[0],
    setCompleted = _React$useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_8__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_9__.ENDPOINT_URL, "/get-projects/").concat(id)).then(res => {
      // Handle the response data here
      var formatDate = res.data.data.phase;
      setSteps(formatDate);
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  }, []);
  var totalSteps = () => {
    return steps.length;
  };
  var completedSteps = () => {
    return Object.keys(completed).length;
  };
  var isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  var allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  var handleNext = () => {
    var newActiveStep = isLastStep() && !allStepsCompleted() ?
    // It's the last step, but not all steps have been completed,
    // find the first step that has been completed
    steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  var handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  var handleStep = step => () => {
    setActiveStep(step);
  };
  var handleComplete = () => {
    var newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    nonLinear: true,
    activeStep: activeStep
  }, steps.map((label, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Step__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: label,
    completed: completed[index]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_StepButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "inherit",
    onClick: handleStep(index)
  }, label)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, allStepsCompleted() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      mt: 2,
      mb: 1
    }
  }, "Completed")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      mt: 2,
      mb: 1,
      py: 1
    }
  }, "Phase ", activeStep + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      pt: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "inherit",
    disabled: activeStep === 0,
    onClick: handleBack,
    sx: {
      mr: 1
    }
  }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      flex: '1 1 auto'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleNext,
    sx: {
      mr: 1
    }
  }, "Next"), activeStep !== steps.length && (completed[activeStep] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "caption",
    sx: {
      display: 'inline-block'
    }
  }, "Phase ", activeStep + 1, " already completed") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleComplete
  }, completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Phase'))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectPhase);

/***/ },

/***/ "./src/js/AdminView1/PageView/ProjectView/ProjectViewInformation.js"
/*!**************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ProjectView/ProjectViewInformation.js ***!
  \**************************************************************************/
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
/* harmony import */ var _InvoiceView_AdminView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InvoiceView/AdminView.css */ "./src/js/AdminView1/PageView/InvoiceView/AdminView.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/LinearProgress/LinearProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/LocalPrintshop */ "./node_modules/@mui/icons-material/LocalPrintshop.js");
/* harmony import */ var _ProjectPhase__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ProjectPhase */ "./src/js/AdminView1/PageView/ProjectView/ProjectPhase.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ "./node_modules/@mui/icons-material/KeyboardArrowUp.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material/Email */ "./node_modules/@mui/icons-material/Email.js");
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/Phone */ "./node_modules/@mui/icons-material/Phone.js");
/* harmony import */ var _mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material/Web */ "./node_modules/@mui/icons-material/Web.js");
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../../img/images.png */ "./src/js/img/images.png");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabContext/TabContext.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabList/TabList.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabPanel/TabPanel.js");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/excel.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Explicit.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
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























































var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_37__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_38__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var PrintTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_37__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_38__["default"].tooltip)]: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_37__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_38__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_39__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_40__["default"], {
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
function ProjectViewInformation() {
  var _Object$keys, _row, _printData$projectNam, _printData$items, _Object$keys3, _row2, _data3;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_35__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_35__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.setUser)({
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
        return _ref9.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var handleShow = e => {
    setShow(e);
  };
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.logOut)());
    navigate('/');
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    project = _useState4[0],
    setProject = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    project2 = _useState6[0],
    setProject2 = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
    _useState0 = _slicedToArray(_useState9, 2),
    loadingData = _useState0[0],
    setLoadingData = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    loadingTab = _useState10[0],
    setLoadingTab = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    item = _useState12[0],
    SetItems = _useState12[1];

  // Priority Data (Initial Load)
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
    _useState14 = _slicedToArray(_useState13, 2),
    loadingBase = _useState14[0],
    setLoadingBase = _useState14[1];

  // Priority Data (Initial Load)
  var fetchPriorityData = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* () {
      try {
        setLoadingBase(true);
        var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/projects")), axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-projects/").concat(id)), axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/hidden"))]),
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3),
          resProjects = _yield$Promise$all2[0],
          resProjectSpec = _yield$Promise$all2[1],
          resHidden = _yield$Promise$all2[2];
        var formatDate = resProjects.data.data.map(p => _objectSpread(_objectSpread({}, p), {}, {
          id: p._id,
          visitField: dayjs__WEBPACK_IMPORTED_MODULE_36___default()(p.visitDate).format('DD/MM/YYYY'),
          startField: dayjs__WEBPACK_IMPORTED_MODULE_36___default()(p.startDate).format('DD/MM/YYYY')
        }));
        setProject(formatDate.reverse());
        setProjectName(resProjectSpec.data.data.projectName);
        setCustomerName1(resProjectSpec.data.data.customerName.customerName.replace(/\s+/g, '_').replace(/\./g, ''));
        setHidden(resHidden.data.data);
        setLoadingBase(false);
        setLoadingData(true); // Still true until details are loaded if we want to wait, or false to show UI.
        // Let's set it to false so header shows up.
        setLoadingData(false);

        // Load all other data in background
        fetchDetailedData();
      } catch (error) {
        console.error('Error fetching priority data:', error);
        setLoadingBase(false);
        setLoadingData(false);
      }
    });
    return function fetchPriorityData() {
      return _ref0.apply(this, arguments);
    };
  }();
  var fetchDetailedData = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      try {
        var _yield$Promise$all3 = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/item"))]),
          _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 1),
          resAllItems = _yield$Promise$all4[0];
        SetItems(resAllItems.data.data);
        yield Promise.all([fetchInvoicesAndPurchases(), fetchExpenses(), fetchPayments(), fetchTimelineAndStaff(), fetchItemsMovement()]);
      } catch (error) {
        console.error('Error fetching detailed data:', error);
      }
    });
    return function fetchDetailedData() {
      return _ref1.apply(this, arguments);
    };
  }();

  // Tab-Specific Loaders
  var fetchInvoicesAndPurchases = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      try {
        var _resPurchases$data, _resInvoices$data;
        var _yield$Promise$all5 = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/purchase?summary=true")), axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/invoice?summary=true"))]),
          _yield$Promise$all6 = _slicedToArray(_yield$Promise$all5, 2),
          resPurchases = _yield$Promise$all6[0],
          resInvoices = _yield$Promise$all6[1];
        var relatedPurchases = (_resPurchases$data = resPurchases.data) === null || _resPurchases$data === void 0 || (_resPurchases$data = _resPurchases$data.data) === null || _resPurchases$data === void 0 ? void 0 : _resPurchases$data.filter(row => {
          var _row$projectName;
          return ((_row$projectName = row.projectName) === null || _row$projectName === void 0 ? void 0 : _row$projectName._id) === id;
        });
        var projectPurchaseIds = relatedPurchases.map(p => p._id);

        // Filter Invoices: linked either via Purchase ID or directly via Project ID
        var relatedInvoices = (_resInvoices$data = resInvoices.data) === null || _resInvoices$data === void 0 || (_resInvoices$data = _resInvoices$data.data) === null || _resInvoices$data === void 0 ? void 0 : _resInvoices$data.filter(inv => projectPurchaseIds.includes(inv.ReferenceName2) || inv.ReferenceName2 === id);
        var allProjectItems = relatedPurchases.flatMap(row => (row.items || []).map(Item => {
          var _Item$itemName, _Item$itemName2;
          return _objectSpread(_objectSpread({}, Item), {}, {
            totalCostOut: (((_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName._id) === undefined || ((_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2._id) === "") && (Number(Item.itemOut) || 0) === 0 ? Number(Item.totalGenerale) || 0 : (Number(Item.itemOut) || 0) * (Number(Item.itemCost) || 0)
          });
        }));
        setItem(allProjectItems);
        setPurchase(relatedPurchases);
        setInvoice(relatedInvoices.map(row => _objectSpread(_objectSpread({}, row), {}, {
          id: row._id
        })));
      } catch (error) {
        console.error('Error fetching Invoices/Purchases:', error);
      }
    });
    return function fetchInvoicesAndPurchases() {
      return _ref10.apply(this, arguments);
    };
  }();
  var fetchExpenses = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      try {
        var _resExpenses$data;
        var _yield$Promise$all7 = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/expensesCategory")), axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/expense?summary=true"))]),
          _yield$Promise$all8 = _slicedToArray(_yield$Promise$all7, 2),
          resExpCat = _yield$Promise$all8[0],
          resExpenses = _yield$Promise$all8[1];
        setCategories(resExpCat.data.data);
        setExpensesInfo((_resExpenses$data = resExpenses.data) === null || _resExpenses$data === void 0 || (_resExpenses$data = _resExpenses$data.data) === null || _resExpenses$data === void 0 ? void 0 : _resExpenses$data.filter(row => {
          var _row$accountNameInfo;
          return ((_row$accountNameInfo = row.accountNameInfo) === null || _row$accountNameInfo === void 0 ? void 0 : _row$accountNameInfo._id) === id;
        }).map(row => {
          var _row$expenseCategory;
          return {
            _id: row._id,
            category: (_row$expenseCategory = row.expenseCategory) === null || _row$expenseCategory === void 0 ? void 0 : _row$expenseCategory.expensesCategory,
            total: row.total,
            date: row.expenseDate,
            expenseNumber: row.expenseNumber,
            description: row.description
          };
        }));
      } catch (error) {
        console.error('Error fetching Expenses:', error);
      }
    });
    return function fetchExpenses() {
      return _ref11.apply(this, arguments);
    };
  }();
  var fetchPayments = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      try {
        var _res$data;
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/payment"));
        setAdvances((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.filter(pay => {
          var _pay$TotalAmount;
          return (_pay$TotalAmount = pay.TotalAmount) === null || _pay$TotalAmount === void 0 ? void 0 : _pay$TotalAmount.some(item => item.id === id);
        }));
      } catch (error) {
        console.error('Error fetching Payments:', error);
      }
    });
    return function fetchPayments() {
      return _ref12.apply(this, arguments);
    };
  }();
  var fetchItemsMovement = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* () {
      try {
        var _resOut$data, _resReturn$data, _resPrec$data;
        var _yield$Promise$all9 = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/itemOut")), axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/itemReturn")), axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/itemPurchase?summary=true"))]),
          _yield$Promise$all0 = _slicedToArray(_yield$Promise$all9, 3),
          resOut = _yield$Promise$all0[0],
          resReturn = _yield$Promise$all0[1],
          resPrec = _yield$Promise$all0[2];
        setItemOut((_resOut$data = resOut.data) === null || _resOut$data === void 0 || (_resOut$data = _resOut$data.data) === null || _resOut$data === void 0 ? void 0 : _resOut$data.filter(row => {
          var _row$reference;
          return ((_row$reference = row.reference) === null || _row$reference === void 0 ? void 0 : _row$reference._id) === id;
        }).map(row => _objectSpread(_objectSpread({}, row), {}, {
          outNumber: "O-" + String(row.outNumber).padStart(6, '0'),
          type: 'Item Out'
        })));
        setItemReturn((_resReturn$data = resReturn.data) === null || _resReturn$data === void 0 || (_resReturn$data = _resReturn$data.data) === null || _resReturn$data === void 0 ? void 0 : _resReturn$data.filter(row => {
          var _row$reference2;
          return ((_row$reference2 = row.reference) === null || _row$reference2 === void 0 ? void 0 : _row$reference2._id) === id;
        }).map(row => _objectSpread(_objectSpread({}, row), {}, {
          outNumber: "R-" + String(row.outNumber).padStart(6, '0'),
          type: 'Item return'
        })));
        setItemPurchase((_resPrec$data = resPrec.data) === null || _resPrec$data === void 0 || (_resPrec$data = _resPrec$data.data) === null || _resPrec$data === void 0 ? void 0 : _resPrec$data.filter(row => row.projectName && row.projectName._id === id));
      } catch (error) {
        console.error('Error fetching Item Movement:', error);
      }
    });
    return function fetchItemsMovement() {
      return _ref13.apply(this, arguments);
    };
  }();
  var fetchTimelineAndStaff = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* () {
      try {
        var _resNotif$data, _resPlaning$data;
        var _yield$Promise$all1 = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/notification")), axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/planing"))]),
          _yield$Promise$all10 = _slicedToArray(_yield$Promise$all1, 2),
          resNotif = _yield$Promise$all10[0],
          resPlaning = _yield$Promise$all10[1];
        setNotification((_resNotif$data = resNotif.data) === null || _resNotif$data === void 0 || (_resNotif$data = _resNotif$data.data) === null || _resNotif$data === void 0 ? void 0 : _resNotif$data.filter(row => row.idInfo === id));
        setPlaningInfo((_resPlaning$data = resPlaning.data) === null || _resPlaning$data === void 0 || (_resPlaning$data = _resPlaning$data.data) === null || _resPlaning$data === void 0 ? void 0 : _resPlaning$data.filter(row => {
          var _row$projectName2;
          return ((_row$projectName2 = row.projectName) === null || _row$projectName2 === void 0 ? void 0 : _row$projectName2._id) === id;
        }).map(row => _objectSpread(_objectSpread({}, row), {}, {
          totalWorkDay: parseFloat(Number(row.dayPayUSd || 0) * Number(row.workNumber || 0)).toFixed(2)
        })));
      } catch (error) {
        console.error('Error fetching Timeline/Staff:', error);
      }
    });
    return function fetchTimelineAndStaff() {
      return _ref14.apply(this, arguments);
    };
  }();

  // Maps for optimized lookups
  var itemMap = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => {
    var map = {};
    item.forEach(i => {
      map[i._id] = i;
    });
    return map;
  }, [item]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchPriorityData();
  }, [id]);
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    projectNumber = _useState16[0],
    setProjectNumber = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    projectName = _useState18[0],
    setProjectName = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    customerName1 = _useState20[0],
    setCustomerName1 = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    purchase = _useState22[0],
    setPurchase = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    items = _useState24[0],
    setItem = _useState24[1];
  var totalGeneralOutCost = items.length > 0 ? items.reduce((sum, row) => sum + row.totalCostOut, 0) : 0;
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    itemOut = _useState26[0],
    setItemOut = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    itemReturn = _useState28[0],
    setItemReturn = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    expenses = _useState30[0],
    setExpenses = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState32 = _slicedToArray(_useState31, 2),
    invoice = _useState32[0],
    setInvoice = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState34 = _slicedToArray(_useState33, 2),
    expensesInfo = _useState34[0],
    setExpensesInfo = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState36 = _slicedToArray(_useState35, 2),
    itemPurchase = _useState36[0],
    setItemPurchase = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    planingInfo = _useState38[0],
    setPlaningInfo = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState40 = _slicedToArray(_useState39, 2),
    categories = _useState40[0],
    setCategories = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    notification = _useState42[0],
    setNotification = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState44 = _slicedToArray(_useState43, 2),
    advances = _useState44[0],
    setAdvances = _useState44[1];
  {/** const resItemOut = await axios.get(`${ENDPOINT_URL}/itemOut`)
         const OutFilter = resItemOut.data.data.map((row)=>({...row, outNumber: "O-0" + row.outNumber,type:'Out', itemsQtyArray : row.itemsQtyArray.filter((Item)=> Item.itemName._id === id && parseFloat(Item.newItemOut) > 0) }))
         setItemOut(OutFilter.filter((row)=> row.reference._id === id && row.itemsQtyArray.length > 0 ))
         const resIReturn = await axios.get(`${ENDPOINT_URL}/itemReturn`)
         const returnFilter = resIReturn.data.data.map((row)=>({...row, outNumber: "R-0" + row.outNumber, type:'return', itemsQtyArray : row.itemsQtyArray.filter((Item)=> Item.itemName._id === id && parseFloat(Item.newItemOut) > 0) }))
         setItemReturn(returnFilter.filter((row)=> row.reference._id === id && row.itemsQtyArray.length > 0 )) */}
  var newOutR = [...itemOut, ...itemReturn];
  var formatDate2 = newOutR.map(row => _objectSpread(_objectSpread({}, row), {}, {
    itemsQtyArray: row.itemsQtyArray.filter(Item => parseFloat(Item.newItemOut) > 0)
  })).filter(row => row.itemsQtyArray.length > 0);
  var relatedItemPurchases = itemPurchase.length > 0 ? itemPurchase.reduce((acc, row) => {
    row.items.filter(item => parseFloat(item.itemQty) >= 0 && item.itemName._id !== undefined).forEach(item => {
      var ItemName = item.itemName.itemName;
      var Id = item.itemName._id;
      var description = item.itemDescription;
      if (!acc[Id]) {
        acc[Id] = {
          ItemName,
          Id,
          description,
          total: 0
        };
      }
      acc[Id].total += parseFloat(item.itemQty);
    });
    return acc;
  }, {}) : null;
  var relatedItemPurchases2 = itemPurchase.length > 0 ? itemPurchase.reduce((acc, row) => {
    row.items.filter(item => parseFloat(item.itemQty) >= 0 && item.itemName._id === undefined).forEach(item => {
      var ItemName = item.itemName.itemName;
      var Id = item.itemName._id;
      var description = item.itemDescription;
      // Capture price from the item purchase - fix property names and fallback
      var rate = parseFloat(item.itemRate) || 0;
      var cost = parseFloat(item.cost) || parseFloat(item.itemRate) || 0;
      if (!acc[description]) {
        acc[description] = {
          ItemName,
          Id,
          description,
          total: 0,
          rate: rate,
          cost: cost
        };
      } else {
        // Simple update to latest price
        acc[description].rate = rate;
        acc[description].cost = cost;
      }
      acc[description].total += parseFloat(item.itemQty);
    });
    return acc;
  }, {}) : null;
  var relatedItemPurchasesArray = relatedItemPurchases !== null ? Object.keys(relatedItemPurchases).map(row => relatedItemPurchases[row]) : [];
  var relatedItemPurchasesArray2 = relatedItemPurchases2 !== null ? Object.keys(relatedItemPurchases2).map(row => relatedItemPurchases2[row]) : [];
  var allItemPurchase = [...relatedItemPurchasesArray, ...relatedItemPurchasesArray2];
  //console.log(allItemPurchase)

  var purchaseInfo = purchase.map(PreviewPurchase => {
    var _updatedPurchase$item2, _updatedPurchase$item3;
    var updatedPurchase = _objectSpread({}, PreviewPurchase);
    // Fix: Filter itemPurchase to only include records that match the current purchase number
    var currentItemPurchases = itemPurchase.filter(ip => ip.itemPurchaseNumber === PreviewPurchase.purchaseNumber);
    var localRelated = currentItemPurchases.reduce((acc, row) => {
      row.items.filter(item => parseFloat(item.itemQty) >= 0 && item.itemName._id !== undefined).forEach(item => {
        var ItemName = item.itemName.itemName;
        var Id = item.itemName._id;
        var description = item.itemDescription;
        if (!acc[Id]) {
          acc[Id] = {
            ItemName,
            Id,
            description,
            total: 0
          };
        }
        acc[Id].total += parseFloat(item.itemQty);
      });
      return acc;
    }, {});
    var localRelated2 = currentItemPurchases.reduce((acc, row) => {
      row.items.filter(item => parseFloat(item.itemQty) >= 0 && item.itemName._id === undefined).forEach(item => {
        var ItemName = item.itemName.itemName;
        var Id = item.itemName._id;
        var description = item.itemDescription;
        var rate = parseFloat(item.itemRate) || 0;
        var cost = parseFloat(item.cost) || parseFloat(item.itemRate) || 0;
        if (!acc[description]) {
          acc[description] = {
            ItemName,
            Id,
            description,
            total: 0,
            rate: rate,
            cost: cost
          };
        } else {
          acc[description].rate = rate;
          acc[description].cost = cost;
        }
        acc[description].total += parseFloat(item.itemQty);
      });
      return acc;
    }, {});
    var localAll = [...Object.values(localRelated), ...Object.values(localRelated2)];
    localAll === null || localAll === void 0 || localAll.forEach(row2 => {
      var _updatedPurchase$item;
      var existingItem = (_updatedPurchase$item = updatedPurchase.items) === null || _updatedPurchase$item === void 0 ? void 0 : _updatedPurchase$item.findIndex(itemI => row2.Id ? itemI.itemName._id === row2.Id : itemI.itemDescription === row2.description);
      if (existingItem > -1) {
        updatedPurchase.items[existingItem].itemBuy = row2.total;
        // Update costs and rates for manual items if available from actual purchases
        if (!row2.Id) {
          updatedPurchase.items[existingItem].itemCost = row2.cost;
          updatedPurchase.items[existingItem].itemRate = row2.rate;
          updatedPurchase.items[existingItem].totalAmount = Math.round(row2.rate * updatedPurchase.items[existingItem].itemQty * 100) / 100;
          updatedPurchase.items[existingItem].itemAmount = updatedPurchase.items[existingItem].totalAmount; // Simplified, assuming no discount change
          updatedPurchase.items[existingItem].totalGenerale = Math.round(row2.cost * row2.total * 100) / 100;
        }
      } else {
        var itemDetails = itemMap[row2.Id];
        var rate = row2.Id ? (itemDetails === null || itemDetails === void 0 ? void 0 : itemDetails.itemSellingPrice) || 0 : row2.rate;
        var cost = row2.Id ? (itemDetails === null || itemDetails === void 0 ? void 0 : itemDetails.itemCostPrice) || 0 : row2.cost;
        updatedPurchase.items.push({
          idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_66__["default"])(),
          itemName: {
            _id: row2.Id || "",
            itemName: row2.ItemName
          },
          itemDescription: row2.description,
          itemDiscount: 0,
          itemQty: row2.total,
          itemRate: rate,
          itemCost: cost,
          totalAmount: Math.round(row2.total * rate * 100) / 100,
          discount: 0,
          percentage: 0,
          itemAmount: Math.round(row2.total * rate * 100) / 100,
          totalCost: Math.round(row2.total * cost * 100) / 100,
          totalGenerale: Math.round(cost * row2.total * 100) / 100,
          itemBuy: row2.total,
          itemWeight: "",
          stock: (itemDetails === null || itemDetails === void 0 ? void 0 : itemDetails.itemQuantity) || 0,
          itemOut: 0,
          newItemOut: 0
        });
      }
    });
    // Recalculate purchase amounts after all items are updated
    updatedPurchase.purchaseAmount1 = ((_updatedPurchase$item2 = updatedPurchase.items) === null || _updatedPurchase$item2 === void 0 ? void 0 : _updatedPurchase$item2.reduce((sum, item) => sum + (parseFloat(item.totalCost) || 0), 0)) || 0;
    updatedPurchase.purchaseAmount2 = ((_updatedPurchase$item3 = updatedPurchase.items) === null || _updatedPurchase$item3 === void 0 ? void 0 : _updatedPurchase$item3.reduce((sum, item) => sum + (parseFloat(item.totalGenerale) || 0), 0)) || 0;
    return updatedPurchase;
  });
  var related = itemOut.length > 0 ? itemOut.reduce((acc, row) => {
    row.itemsQtyArray.filter(item => parseFloat(item.newItemOut) > 0).forEach(item => {
      var ItemName = item.itemName.itemName;
      var Id = item.itemName._id;
      if (!acc[ItemName]) {
        acc[ItemName] = {
          ItemName,
          Id,
          total: 0
        };
      }
      acc[ItemName].total += parseFloat(item.newItemOut);
    });
    return acc;
  }, {}) : null;
  var relatedReturn = itemReturn.length > 0 ? itemReturn.reduce((acc, row) => {
    row.itemsQtyArray.filter(item => parseFloat(item.newItemOut) > 0).forEach(item => {
      var ItemName1 = item.itemName.itemName;
      var Id1 = item.itemName._id;
      if (!acc[ItemName1]) {
        acc[ItemName1] = {
          ItemName1,
          Id1,
          total1: 0
        };
      }
      acc[ItemName1].total1 += parseFloat(item.newItemOut);
    });
    return acc;
  }, {}) : null;
  var newAllOutReturn = related !== null ? Object.values(related).map(_ref15 => {
    var ItemName = _ref15.ItemName,
      Id = _ref15.Id,
      total = _ref15.total;
    var related1 = relatedReturn !== null ? Object.values(relatedReturn).find(_ref16 => {
      var ItemName1 = _ref16.ItemName1,
        Id1 = _ref16.Id1,
        total1 = _ref16.total1;
      return Id1 === Id;
    }) : null;
    return {
      ItemName,
      Id,
      total: related1 ? total - related1.total1 : total
    };
  }) : null;
  var relatedPurchase = purchase.map(row => _objectSpread(_objectSpread({}, row), {}, {
    items: row.items.map(Item => {
      var newAllOutReturnInfo = newAllOutReturn !== null ? newAllOutReturn.find(Item1 => {
        var _Item$itemName3;
        return Item1.Id === ((_Item$itemName3 = Item.itemName) === null || _Item$itemName3 === void 0 ? void 0 : _Item$itemName3._id);
      }) : null;
      return _objectSpread(_objectSpread({}, Item), {}, {
        itemOut: newAllOutReturnInfo ? newAllOutReturnInfo.total : 0
      });
    })
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var totalPerDay = {};
    expensesInfo.forEach(item => {
      var category = item.category,
        total = item.total;
      if (totalPerDay[category]) {
        totalPerDay[category] += parseFloat(total);
      } else {
        totalPerDay[category] = parseFloat(total);
      }
    });
    setExpenses(totalPerDay);
  }, [categories, expensesInfo]);
  var planingObject = planingInfo === null || planingInfo === void 0 ? void 0 : planingInfo.reduce((acc, item) => {
    var id = item.employeeID;
    var name = item.employeeName;
    var dayPay = item.dayPayUSd;
    if (!acc[id]) {
      acc[id] = {
        id,
        name,
        dayPay,
        workD: 0,
        total: 0
      };
    }
    acc[id].total += parseFloat(item.totalWorkDay);
    acc[id].workD += parseFloat(item.workNumber);
    return acc;
  }, {});
  var totalAmount2 = Object.keys(planingObject).map(row => planingObject[row]);
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState46 = _slicedToArray(_useState45, 2),
    totalAmount = _useState46[0],
    setTotalAmount = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState48 = _slicedToArray(_useState47, 2),
    totalAmountPlaning = _useState48[0],
    setTotalAmountPlaning = _useState48[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var totalAmount1 = Object.keys(expenses).reduce((sum, row) => sum + parseFloat(expenses[row]), 0);
    setTotalAmount(totalAmount1);
    var totalPayRoll = totalAmount2 === null || totalAmount2 === void 0 ? void 0 : totalAmount2.reduce((sum, row) => sum + row.total, 0);
    setTotalAmountPlaning(totalPayRoll);
  }, [expenses, totalAmount2]);
  var totalAdvances = advances.reduce((sum, pay) => {
    var _pay$TotalAmount2;
    var projectAmt = ((_pay$TotalAmount2 = pay.TotalAmount) === null || _pay$TotalAmount2 === void 0 ? void 0 : _pay$TotalAmount2.filter(item => item.id === id).reduce((s, i) => s + parseFloat(i.total), 0)) || 0;
    return sum + projectAmt;
  }, 0);
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState50 = _slicedToArray(_useState49, 2),
    show2 = _useState50[0],
    setShow2 = _useState50[1];
  var handleShow2 = e => {
    setShow2(e);
  };
  var filteredRows = project.filter(row => !hidden.some(row2 => row2.idRow === row._id));
  {/** Search start */}
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState52 = _slicedToArray(_useState51, 2),
    value = _useState52[0],
    setValue = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState54 = _slicedToArray(_useState53, 2),
    value2 = _useState54[0],
    setValue2 = _useState54[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var selectedIndex = project.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [project, id]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var selectedIndex = filteredRows.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [filteredRows, id]);
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState56 = _slicedToArray(_useState55, 2),
    search = _useState56[0],
    setSearch = _useState56[1];
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
  };
  var newArray = search !== '' ? project.filter(row => row.projectName.toLowerCase().includes(search.toLowerCase()) || row.projectNumber.toString().includes(search) || row.description.toLowerCase().includes(search.toLowerCase()) || row.customerName && row.customerName.customerName.toLowerCase().includes(search.toLowerCase())) : project;
  var newArray2 = search !== '' ? filteredRows.filter(row => row.projectName.toLowerCase().includes(search.toLowerCase()) || row.description.toLowerCase().includes(search.toLowerCase()) || row.projectNumber.toString().includes(search) || row.customerName && row.customerName.customerName.toLowerCase().includes(search.toLowerCase())) : filteredRows;
  {/** Search end */}
  {/** Comments starts */}
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    anchorEl = _React$useState2[0],
    setAnchorEl = _React$useState2[1];
  var open = Boolean(anchorEl);
  var handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  var handleCloseMenu = () => {
    setAnchorEl(null);
  };
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    anchorEl1 = _React$useState4[0],
    setAnchorEl1 = _React$useState4[1];
  var open1 = Boolean(anchorEl1);
  var handleClick2 = event => {
    setAnchorEl1(event.currentTarget);
  };
  var handleCloseMenu2 = () => {
    setAnchorEl1(null);
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
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchComment = /*#__PURE__*/function () {
      var _ref17 = _asyncToGenerator(function* () {
        try {
          var _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/comment"));
          var resp = (_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.filter(row => row.CommentInfo.idInfo === id);
          setComments(resp.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchComment() {
        return _ref17.apply(this, arguments);
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
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState64 = _slicedToArray(_useState63, 2),
    loading = _useState64[0],
    setLoading = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    loadingOpenModal = _useState66[0],
    setLoadingOpenModal = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    ErrorOpenModal = _useState68[0],
    setErrorOpenModal = _useState68[1];
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
    window.location.reload();
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  {/** Loading End */}
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_36___default()(Date.now());
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('false'),
    _useState70 = _slicedToArray(_useState69, 2),
    synchro = _useState70[0],
    setSynchro = _useState70[1];
  var handleSynced = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var updatePurchase = relatedPurchase.map(row => {
        return axios__WEBPACK_IMPORTED_MODULE_32__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/update-purchase/").concat(row._id), {
          items: row.items
        });
      });
      try {
        yield Promise.all(updatePurchase);
        setSynchro('true');
        handleOpen();
      } catch (error) {
        console.log('An error as occur');
      }
    });
    return function handleSynced(_x) {
      return _ref18.apply(this, arguments);
    };
  }();
  var updateForItemBuy = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var saveAttendance = purchaseInfo.map(row => {
        return axios__WEBPACK_IMPORTED_MODULE_32__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/update-purchase/").concat(row._id), row);
      });
      try {
        yield Promise.all(saveAttendance);
        setSynchro('true');
        handleOpen();
      } catch (error) {
        console.log('An error as occur');
      }
    });
    return function updateForItemBuy(_x2) {
      return _ref19.apply(this, arguments);
    };
  }();
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo,
        dateComment
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/create-comment/"), data);
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
      return _ref20.apply(this, arguments);
    };
  }();
  {/** Comments end */}
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_48__.useReactToPrint)({
    content: () => componentRef.current,
    documentTitle: 'P-' + String(projectNumber).padStart(6, '0') + ' For ' + customerName1 + ' (' + projectName + ')',
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
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState72 = _slicedToArray(_useState71, 2),
    printData = _useState72[0],
    setPrintData = _useState72[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (printData) {
      handlePrint();
    }
  }, [printData]);
  var handleOpenPrint = data => {
    setPrintData(data);
    setAnchorEl1(null);
  };
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default().useState('1'),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    value3 = _React$useState6[0],
    setValue3 = _React$useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var result = localStorage.getItem('TabProjectView');
    if (result) {
      setValue3(result);
    }
  });
  var handleChange3 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('TabProjectView', changeValue);
  };
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    sideBar = _React$useState8[0],
    setSideBar = _React$useState8[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var data1 = purchase.map(row => ({
    number: 'PUR-' + String(row.purchaseNumber).padStart(6, '0'),
    customer: row.customerName.customerName,
    projectName: row.projectName.projectName,
    purchaseDate: dayjs__WEBPACK_IMPORTED_MODULE_36___default()(row.purchaseDate).format('DD/MM/YYYY')
  }));
  var data5 = items.map((Item, i) => {
    return {
      no: i + 1,
      item: Item.itemName.itemName,
      itemDescription: Item.itemDescription,
      itemQty: Item.itemQty,
      itemCost: '$' + Item.itemCost,
      totalCost: '$' + Item.totalCost,
      itemBuy: Item.itemBuy,
      totalGenerale: '$' + Item.totalGenerale,
      itemOut: Item.itemOut,
      totalCost1: '$' + parseFloat(Item.itemOut * Item.itemCost).toFixed(2)
    };
  });
  var data7 = purchase.map(row => ({
    no: '',
    no1: 'SubTotal',
    description: '',
    laborQty: '',
    adjustmentNumber: '',
    purchaseAmount1: '$' + row.purchaseAmount1,
    purchaseAmount2: '$' + row.purchaseAmount2,
    purchaseAmount3: '$' + totalGeneralOutCost
  }));
  var data8 = expensesInfo.map((Item, i) => {
    return {
      no: 'D-' + String(Item.expenseNumber).padStart(6, '0'),
      date: dayjs__WEBPACK_IMPORTED_MODULE_36___default()(Item.date).format('DD-MMMM-YYYY'),
      category: Item.category,
      description: Item.description,
      itemCost: "",
      totalCost: "",
      itemBuy: "",
      totalGenerale: "",
      itemOut: "",
      totalCost1: '$' + Item.total
    };
  });
  var data9 = (_Object$keys = Object.keys(expenses)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map(row => ({
    no: '',
    no1: "".concat(row, " Total"),
    description: '',
    laborQty: '',
    adjustmentNumber: '',
    purchaseAmount1: '',
    purchaseAmount2: '',
    purchaseAmount3: '$' + expenses[row].toFixed(2)
  }));
  var data10 = [{
    no: '',
    no1: 'sub Total',
    description: '',
    laborQty: '',
    adjustmentNumber: '',
    purchaseAmount1: '',
    purchaseAmount2: '',
    purchaseAmount3: '$' + totalAmount.toFixed(2)
  }];
  var data11 = [{
    no: '',
    no1: 'Total General',
    description: '',
    laborQty: '',
    adjustmentNumber: '',
    purchaseAmount1: '',
    purchaseAmount2: '',
    purchaseAmount3: '$' + parseFloat(totalAmount + totalGeneralOutCost + totalAmountPlaning).toFixed(2)
  }];
  var exportToExcel = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(function* () {
      var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_63___default().Workbook)();
      var workSheet = workbook.addWorksheet('Sheet1');
      var columns1 = [{
        header: "#",
        key: 'number',
        width: 20
      }, {
        header: "Customer Name",
        key: 'customer',
        width: 20
      }, {
        header: "Project Name",
        key: 'projectName',
        width: 20
      }, {
        header: "Date",
        key: 'purchaseDate',
        width: 20
      }];
      var columns5 = [{
        header: "#",
        key: 'no',
        width: 20
      }, {
        header: "Item",
        key: 'item',
        width: 20
      }, {
        header: "Item Description",
        key: 'itemDescription',
        width: 20
      }, {
        header: "Qty",
        key: 'itemQty',
        width: 20
      }, {
        header: "Rate",
        key: 'itemCost',
        width: 20
      }, {
        header: "Total Cost",
        key: 'totalCost',
        width: 20
      }, {
        header: "Buy",
        key: 'itemBuy',
        width: 20
      }, {
        header: "Total Buy",
        key: 'totalGenerale',
        width: 20
      }, {
        header: "Qty Out",
        key: 'itemOut',
        width: 20
      }, {
        header: "Total Cost",
        key: 'totalCost1',
        width: 20
      }];
      var columns6 = [{
        header: "#",
        key: 'no',
        width: 20
      }, {
        header: "Date",
        key: 'date',
        width: 20
      }, {
        header: "Category",
        key: 'category',
        width: 20
      }, {
        header: "Description",
        key: 'description',
        width: 20
      }, {
        header: "",
        key: 'itemCost',
        width: 20
      }, {
        header: "",
        key: 'totalCost',
        width: 20
      }, {
        header: "",
        key: 'itemBuy',
        width: 20
      }, {
        header: "",
        key: 'totalGenerale',
        width: 20
      }, {
        header: "",
        key: 'itemOut',
        width: 20
      }, {
        header: "Total Cost",
        key: 'totalCost1',
        width: 20
      }];
      workSheet.addRow([]);
      workSheet.addRow(columns1.map(col => col.header));
      data1.forEach(item => {
        workSheet.addRow([item.number, item.customer, item.projectName, item.purchaseDate]);
      });
      workSheet.addRow([]);
      workSheet.addRow(['Item']);
      workSheet.addRow(columns5.map(col => col.header));
      data5.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemCost, item.totalCost, item.itemBuy, item.totalGenerale, item.itemOut, item.totalCost]);
      });
      workSheet.addRow([]);
      data7.forEach(item => {
        workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.purchaseAmount1, item.purchaseAmount2, item.purchaseAmount3]);
      });
      workSheet.addRow([]);
      workSheet.addRow(['Expenses']);
      workSheet.addRow(columns6.map(col => col.header));
      data8.forEach(item => {
        workSheet.addRow([item.no, item.date, item.category, item.description, item.itemCost, item.totalCost, item.itemBuy, item.totalGenerale, item.itemOut, item.totalCost1]);
      });
      workSheet.addRow([]);
      data9.forEach(item => {
        workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.purchaseAmount1, item.purchaseAmount2, item.purchaseAmount3]);
      });
      data10.forEach(item => {
        workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.purchaseAmount1, item.purchaseAmount2, item.purchaseAmount3]);
      });
      workSheet.addRow([]);
      data11.forEach(item => {
        workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.purchaseAmount1, item.purchaseAmount2, item.purchaseAmount3]);
      });
      var buffer = yield workbook.xlsx.writeBuffer();
      var bold = new Blob([buffer], {
        type: 'application/octet-stream'
      });
      (0,file_saver__WEBPACK_IMPORTED_MODULE_64__.saveAs)(bold, "".concat('P-' + String(projectNumber).padStart(6, '0') + ' For ' + customerName1 + ' (' + projectName + ')', ".xlsx"));
    });
    return function exportToExcel() {
      return _ref21.apply(this, arguments);
    };
  }();
  var handleExportCategoryExcel = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(function* (category, list, projectName) {
      var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_63___default().Workbook)();
      var workSheet = workbook.addWorksheet('Sheet1');
      var columns = [{
        header: "#",
        key: 'no',
        width: 20
      }, {
        header: "Date",
        key: 'date',
        width: 20
      }, {
        header: "Category",
        key: 'category',
        width: 20
      }, {
        header: "Description",
        key: 'description',
        width: 60
      }, {
        header: "Total",
        key: 'total',
        width: 20
      }];
      workSheet.addRow([]);
      workSheet.addRow(["Category: ".concat(category)]);
      workSheet.addRow(["Project: ".concat(projectName)]);
      workSheet.addRow([]);
      workSheet.addRow(columns.map(col => col.header));
      list.forEach((item, i) => {
        workSheet.addRow([item.expenseNumber ? "D-".concat(String(item.expenseNumber).padStart(6, '0')) : i + 1, dayjs__WEBPACK_IMPORTED_MODULE_36___default()(item.date).format('DD-MMMM-YYYY'), item.category, item.description, item.total.toFixed(2)]);
      });
      workSheet.addRow([]);
      var total = list.reduce((sum, item) => sum + parseFloat(item.total), 0);
      workSheet.addRow(['', '', '', 'Total', total.toFixed(2)]);
      var buffer = yield workbook.xlsx.writeBuffer();
      var bold = new Blob([buffer], {
        type: 'application/octet-stream'
      });
      (0,file_saver__WEBPACK_IMPORTED_MODULE_64__.saveAs)(bold, "".concat(category, "_Expenses_").concat(projectName.replace(/\s+/g, '_'), ".xlsx"));
    });
    return function handleExportCategoryExcel(_x4, _x5, _x6) {
      return _ref22.apply(this, arguments);
    };
  }();
  var handleExportEmployeeExcel = /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator(function* (list, projectName) {
      var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_63___default().Workbook)();
      var workSheet = workbook.addWorksheet('Sheet1');
      var columns = [{
        header: "Name",
        key: 'name',
        width: 30
      }, {
        header: "Days Works",
        key: 'workD',
        width: 20
      }, {
        header: "Total Pay Day",
        key: 'dayPay',
        width: 20
      }, {
        header: "Total Pay",
        key: 'total',
        width: 20
      }];
      workSheet.addRow([]);
      workSheet.addRow(["Category: Employee Expenses"]);
      workSheet.addRow(["Project: ".concat(projectName)]);
      workSheet.addRow([]);
      workSheet.addRow(columns.map(col => col.header));
      list.forEach(item => {
        workSheet.addRow([item.name, "".concat(item.workD, " days"), item.dayPay.toFixed(2), item.total.toFixed(2)]);
      });
      workSheet.addRow([]);
      var grandTotal = list.reduce((sum, item) => sum + parseFloat(item.total), 0);
      workSheet.addRow(['', '', 'Total', grandTotal.toFixed(2)]);
      var buffer = yield workbook.xlsx.writeBuffer();
      var bold = new Blob([buffer], {
        type: 'application/octet-stream'
      });
      (0,file_saver__WEBPACK_IMPORTED_MODULE_64__.saveAs)(bold, "Employee_Expenses_".concat(projectName.replace(/\s+/g, '_'), ".xlsx"));
    });
    return function handleExportEmployeeExcel(_x7, _x8) {
      return _ref23.apply(this, arguments);
    };
  }();
  function Row3(props) {
    var _row$itemName, _row$itemName2;
    var row = props.row;
    var index = props.index;
    var relatedUnit = props.relatedUnit;
    var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
      _React$useState0 = _slicedToArray(_React$useState9, 2),
      open = _React$useState0[0],
      setOpen = _React$useState0[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      style: {
        '& > *': {
          borderBottom: 'unset'
        }
      }
    }, row.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, index + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      },
      colSpan: 8
    }, row.newDescription)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '10px',
        border: '1px solid #DDD',
        cursor: 'pointer'
      },
      onClick: () => setOpen(!open)
    }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_47__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, index + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        width: '300px',
        textAlign: 'left',
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      hidden: row.itemName ? row.itemName.itemName === 'empty' : ''
    }, row.itemName.itemName ? row.itemName.itemName : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.itemDescription, " ( ", relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : '', " ) ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, row.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, row.itemCost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, (row.totalCost || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, row.itemBuy), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, (row.totalGenerale || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.itemOut, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, ((((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName._id) === undefined || ((_row$itemName2 = row.itemName) === null || _row$itemName2 === void 0 ? void 0 : _row$itemName2._id) === "") && (Number(row.itemOut) || 0) === 0 ? row.totalGenerale || 0 : row.itemOut * row.itemCost || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD',
        paddingBottom: 0,
        paddingTop: 0
      },
      colSpan: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      in: open,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      sx: {
        margin: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      gutterBottom: true,
      component: "div"
    }, "Item Out Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "secondTable"
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
    }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, " Qty"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, formatDate2 === null || formatDate2 === void 0 ? void 0 : formatDate2.filter(row1 => row1.itemsQtyArray.some(Item => {
      var _row$itemName3;
      return Item.itemName._id === ((_row$itemName3 = row.itemName) === null || _row$itemName3 === void 0 ? void 0 : _row$itemName3._id);
    })).map((row1, index1) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      key: index1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, row1.outNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_36___default()(row1.itemOutDate).format('DD/MM/YYYY-HH:mm')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, row1.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, row1.itemsQtyArray.filter(Item1 => {
      var _row$itemName4;
      return Item1.itemName._id === ((_row$itemName4 = row.itemName) === null || _row$itemName4 === void 0 ? void 0 : _row$itemName4._id);
    }).map((Item1, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item1.newItemOut)))))))))))));
  }
  function Row(props) {
    var row = props.row;
    var index = props.index;
    var _React$useState1 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
      _React$useState10 = _slicedToArray(_React$useState1, 2),
      open = _React$useState10[0],
      setOpen = _React$useState10[1];
    var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    var handlePrintLocal = (0,react_to_print__WEBPACK_IMPORTED_MODULE_48__.useReactToPrint)({
      content: () => componentRef.current
    });
    var categoryList = expensesInfo.filter(row1 => row1.category === row);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      style: {
        '& > *': {
          borderBottom: 'unset'
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD',
        cursor: 'pointer'
      },
      onClick: () => setOpen(!open)
    }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_47__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, index + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 4,
      align: "left",
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, row), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 4,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, expenses[row].toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD',
        paddingBottom: 0,
        paddingTop: 0
      },
      colSpan: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      in: open,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      sx: {
        margin: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      gutterBottom: true,
      component: "div"
    }, "Expenses Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        display: 'flex',
        gap: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      size: "small",
      onClick: () => handleExportCategoryExcel(row, categoryList, projectName),
      title: "Export to Excel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_65__["default"], {
      sx: {
        color: 'green'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      size: "small",
      onClick: handlePrintLocal,
      title: "Print PDF"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_44__["default"], {
      sx: {
        color: 'gray'
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      style: {
        marginBottom: '5px'
      },
      ref: componentRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD'
      }
    }, "Total"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, expensesInfo.filter(row1 => row1.category === row).map(row1 => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      key: row1._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD'
      }
    }, "D-", String(row1.expenseNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_36___default()(row1.date).format('DD-MMMM-YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, row1.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, row1.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD'
      }
    }, row1.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'right',
        border: '1px solid #DDD'
      },
      colSpan: 4
    }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        textAlign: 'right',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, expenses[row].toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))))))));
  }
  function Row2(props) {
    var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      open = _React$useState12[0],
      setOpen = _React$useState12[1];
    var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    var handlePrintLocal = (0,react_to_print__WEBPACK_IMPORTED_MODULE_48__.useReactToPrint)({
      content: () => componentRef.current
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      style: {
        '& > *': {
          borderBottom: 'unset'
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD',
        cursor: 'pointer'
      },
      onClick: () => setOpen(!open)
    }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_47__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 4,
      align: "left",
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 4,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, totalAmountPlaning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD',
        paddingBottom: 0,
        paddingTop: 0
      },
      colSpan: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      in: open,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      sx: {
        margin: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      gutterBottom: true,
      component: "div"
    }, "Expenses Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        display: 'flex',
        gap: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      size: "small",
      onClick: () => handleExportEmployeeExcel(totalAmount2, projectName),
      title: "Export to Excel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_65__["default"], {
      sx: {
        color: 'green'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      size: "small",
      onClick: handlePrintLocal,
      title: "Print PDF"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_44__["default"], {
      sx: {
        color: 'gray'
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      style: {
        marginBottom: '5px'
      },
      ref: componentRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Days Works"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Total Pay Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "Total Pay"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, totalAmount2 === null || totalAmount2 === void 0 ? void 0 : totalAmount2.map((row, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      align: "left",
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.workD, " days")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.dayPay.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))))))));
  }
  var _useOutletContext = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_35__.useOutletContext)(),
    layoutHandleShow1 = _useOutletContext.handleShow1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: show1 === 1 ? 12 : 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      width: '100%',
      background: 'white'
    }
  }, loadingBase ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_49__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, project.filter(i => i._id === id).map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      fontWeight: 'bold',
      fontSize: '20px'
    }
  }, " ", 'P-' + String(row.projectNumber).padStart(6, '0'), " | ", row.projectName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    "aria-controls": open ? 'demo-customized-menu' : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? 'true' : undefined,
    variant: "contained",
    disableElevation: true,
    onClick: handleClick,
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_46__["default"], null),
    sx: {
      bgcolor: 'gray',
      '&:hover': {
        color: 'gray',
        bgcolor: 'white',
        border: '1px solid gray'
      }
    }
  }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "demo-customized-menu",
    MenuListProps: {
      'aria-labelledby': 'demo-customized-button'
    },
    anchorEl: anchorEl,
    open: open,
    onClose: handleCloseMenu,
    TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_14__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
    to: "/ProjectUpdateView/".concat(row._id),
    className: "LinkName",
    style: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_43__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: () => handleShow1(2)
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    style: {
      color: 'gray'
    }
  }, "Comments"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: () => handleShow1(3)
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    style: {
      color: 'gray'
    }
  }, "History"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_57__["default"], {
    value: value3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      borderBottom: 1,
      borderColor: 'divider'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_58__["default"], {
    onChange: handleChange3,
    "aria-label": "lab API tabs example",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    label: "Invoice",
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    label: "Purchase",
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    label: "Advances",
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_59__["default"], {
    value: "1",
    sx: {
      height: '520px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, loadingTab && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      fontSize: '20px'
    }
  }, row.projectName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
    style: {
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    align: "left"
  }, "Visit Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, dayjs__WEBPACK_IMPORTED_MODULE_36___default()(row.visitDate).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    align: "left"
  }, "Start Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, dayjs__WEBPACK_IMPORTED_MODULE_36___default()(row.startDate).format('DD/MM/YYYY')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    align: "left"
  }, "Project Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, "P-", String(row.projectNumber).padStart(6, '0'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    align: "left"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: row.status === "Pending" ? "gray" : row.status === "On-Going" ? "blue" : row.status === "Stopped" ? "red" : row.status === "Pending" ? "Orange" : row.status === "Completed" ? "green" : "black"
  }, row.status))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    sx: {
      width: '450px',
      minHeight: '190px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    style: {
      position: 'relative',
      justifyContent: 'center',
      top: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
    style: {
      width: '100%',
      color: 'gray',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Budget"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(row.budget || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Material Expense"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(totalGeneralOutCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Labour Expense"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(totalAmountPlaning).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Overhead Expense"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(totalAmount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Total Expense"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "InvoiceTotal "
  }, parseFloat(totalAmount + totalGeneralOutCost + totalAmountPlaning).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), invoice && invoice.length > 0 ? invoice.map(row1 => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
    key: row1._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Invoiced Profit (", row1.invoiceNumber, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "InvoiceTotal "
  }, parseFloat(row1.totalInvoice - (totalAmount + totalGeneralOutCost + totalAmountPlaning)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Advances Received"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "InvoiceTotal "
  }, parseFloat(totalAdvances).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Balance Remaining"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    "data-prefix": true
  }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "InvoiceTotal "
  }, parseFloat(row.budget !== undefined ? row.budget - (totalAmount + totalGeneralOutCost + totalAmountPlaning) : 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
    style: {
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Customer Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, row.customerName.customerName))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
    style: {
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      textAlign: 'left',
      width: '200px'
    }
  }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, row.description)))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_59__["default"], {
    value: "2",
    sx: {
      height: '520px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, loadingTab && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, invoice ? invoice.map(row => {
    var _data, _row$items;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      key: row._id,
      className: "invoicedetails"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data = data) === null || _data === void 0 ? void 0 : _data.branchId : ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "invoicehr"
    }, "Invoice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '25px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("address", {
      style: {
        lineHeight: 1.35,
        width: '60%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "Bill To", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, row.customerName.customerName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), row.customerName.billingAddress, ",", row.customerName.billingCity)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '80%',
        left: '83px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Invoice #")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "INV-", String(row.invoiceNumber).padStart(6, '0')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_36___default()(row.invoiceDate).format('DD/MM/YYYY')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Subject")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.invoiceSubject))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Defect")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.invoiceDefect)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '80%'
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
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'right',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Total"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, (_row$items = row.items) === null || _row$items === void 0 ? void 0 : _row$items.map((Item, i) => {
      if (Item.newDescription !== undefined) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
          key: Item.idRow
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
          style: {
            padding: '10px',
            textAlign: 'center',
            border: '1px solid #DDD'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
          colSpan: 6,
          style: {
            padding: '10px',
            textAlign: 'center',
            border: '1px solid #DDD'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.newDescription)));
      }
      var relatedUnit = item.find(Item1 => Item1._id === Item.itemName._id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: Item.idRow
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'center',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          padding: '10px',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemName.itemName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemRate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        "data-prefix": true
      }, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemDiscount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        "data-prefix": true
      }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemAmount)));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        float: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, row.note)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "firstTable",
      style: {
        fontSize: '80%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, " Sub Total"), row.CheckTvA ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "txt1"
    }, "(Tax Inclusive)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.subTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), row.shipping ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Shipping")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.shipping.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.adjustmentNumber ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'center'
      }
    }, row.adjustment), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.adjustmentNumber.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Total")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), row.total ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Amount Paid")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'center',
        color: '#2f81b7'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Balance Due")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'right',
        color: '#2f81b7'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.balanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Total In Words")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.totalW))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
      style: {
        float: 'left',
        marginTop: '50px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      style: {
        fontSize: '80%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Bank")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "SOFIBANQUE SA")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Entitled")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "GLOBAL GATE SARL")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, " Bank Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "00023233330214247020073")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Code Swift")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "SFBXCDKIXXX")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("address", {
      style: {
        lineHeight: 1.30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        fontWeight: 'bold'
      }
    }, "Terms & Conditions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        fontSize: '12px'
      }
    }, row.terms)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "footerinvoice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_50__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Global@gmail.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_51__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "+243 827 722 222")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_52__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "www.GlobalGate.sarl"))));
  }) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_59__["default"], {
    value: "3",
    sx: {
      height: '520px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, loadingTab && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, purchaseInfo === null || purchaseInfo === void 0 ? void 0 : purchaseInfo.map(row => {
    var _data2, _row$items2, _Object$keys2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, "REFERENCE: "), "PUR-", String(row.purchaseNumber).padStart(6, '0'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      "aria-controls": open1 ? 'demo-customized-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open1 ? 'true' : undefined,
      variant: "contained",
      disableElevation: true,
      onClick: handleClick2,
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_46__["default"], null),
      sx: {
        bgcolor: 'gray',
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray'
        }
      }
    }, "More..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      id: "demo-customized-menu",
      MenuListProps: {
        'aria-labelledby': 'demo-customized-button'
      },
      anchorEl: anchorEl1,
      open: open1,
      onClose: handleCloseMenu2,
      TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_14__["default"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onClick: handleCloseMenu2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "Purchase Reference")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
      to: "/PurchaseFormUpdate/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_43__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
      to: "/PurchasesViewAdminAll/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_60__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, "View"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onClick: () => handleOpenPrint(row),
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_44__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Print")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onClick: exportToExcel,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_65__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Export to Excel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, (row.status === 'Draft' || row.status === 'Estimated') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
      to: "/ConvertToInvoice/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Convert To Invoice")), (row.status === 'Invoiced' || row.status === 'Make') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
      to: "/ConvertToInvoice/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Convert To Invoice (Again)")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      sx: {
        padding: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.branchId : ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "invoicehr"
    }, "Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, row.projectName.projectName.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "firstTable",
      style: {
        position: 'relative',
        fontSize: '80%',
        left: '83px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      colSpan: 2,
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, newAllOutReturn && newAllOutReturn.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
      onClick: handleSynced,
      className: "btnCustomer"
    }, "sync")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      colSpan: 2,
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, allItemPurchase && allItemPurchase.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
      onClick: updateForItemBuy,
      className: "btnCustomer"
    }, "IPU"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Pur #")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "PUR-", String(row.purchaseNumber).padStart(6, '0')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        textAlign: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_36___default()(row.purchaseDate).format('DD/MM/YYYY'))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 9,
      style: {
        border: '1px solid #DDD',
        textAlign: 'center'
      }
    }, "Items")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "N"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '300px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total-Need"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total-Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "I-Out"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      },
      align: "left"
    }, "Total-Cost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, (_row$items2 = row.items) === null || _row$items2 === void 0 ? void 0 : _row$items2.filter(Item => parseFloat(Item.itemQty) >= 0 || parseFloat(Item.itemBuy) > 0 || parseFloat(Item.itemOut) > 0 || Item.newDescription !== undefined).map((Item, i) => {
      var _Item$itemName4;
      var relatedUnit = itemMap[(_Item$itemName4 = Item.itemName) === null || _Item$itemName4 === void 0 ? void 0 : _Item$itemName4._id];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Row3, {
        key: i,
        row: Item,
        index: i,
        relatedUnit: relatedUnit
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, "SubTotal "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.purchaseAmount1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.purchaseAmount2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 2,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, totalGeneralOutCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), (_Object$keys2 = Object.keys(expenses)) === null || _Object$keys2 === void 0 ? void 0 : _Object$keys2.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Row, {
      key: Item,
      row: Item,
      index: i
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 5,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, "SubTotal 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 4,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, totalAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Row2, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 5,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, "Total Generale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 4,
      style: {
        border: '1px solid #DDD'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(totalAmount + totalGeneralOutCost + totalAmountPlaning).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "footerinvoice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_50__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Global@gmail.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_51__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "+243 827 722 222")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_52__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "www.GlobalGate.sarl"))))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_59__["default"], {
    value: "4",
    sx: {
      height: '520px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, loadingTab && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      position: 'sticky',
      top: 0,
      zIndex: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '20px',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    gutterBottom: true
  }, "Project Advances / Payments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_22__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], {
    sx: {
      backgroundColor: '#e8f7fe'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, "PAY #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, "Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    align: "right"
  }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], null, advances.map(pay => {
    var _pay$TotalAmount3;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: pay._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, dayjs__WEBPACK_IMPORTED_MODULE_36___default()(pay.paymentDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, "PAY-", String(pay.paymentNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, pay.modes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
      align: "right"
    }, "$", (_pay$TotalAmount3 = pay.TotalAmount) === null || _pay$TotalAmount3 === void 0 || (_pay$TotalAmount3 = _pay$TotalAmount3.find(i => i.id === id)) === null || _pay$TotalAmount3 === void 0 ? void 0 : _pay$TotalAmount3.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, pay.status || 'Cleared'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, pay.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.NavLink, {
      to: "/PaymentInformationView/".concat(pay._id),
      className: "LinkName"
    }, "View")));
  }), advances.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    colSpan: 7,
    align: "center"
  }, "No advances found for this project.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], {
    sx: {
      fontWeight: 'bold',
      backgroundColor: '#f5f5f5'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    colSpan: 3,
    align: "right"
  }, "Total Advances:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    align: "right"
  }, "$", totalAdvances.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    colSpan: 3
  }))))))))))))))), show1 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, Item.dateComment ? dayjs__WEBPACK_IMPORTED_MODULE_36___default()(Item.dateComment).format('DD/MM') : '', " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "", show1 === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      height: '510px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, project.filter(row => row._id === id).map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    key: row._id
  }, row.Create ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.Create.dateComment, " ", row.Create.person, " ", row.Create.projectName) : '')), notification.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.person + ' on ' + dayjs__WEBPACK_IMPORTED_MODULE_36___default()(row.dateNotification).format('DD/MMMM'), ": ", row.reason))))))) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_30__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_29__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_49__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_55__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), synchro === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Item Out Sync successfully") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleClose,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_49__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_56__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'none'
    }
  }, printData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
    ref: componentRef,
    className: "invoicedetails",
    style: {
      width: '100%'
    }
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
  }, "Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, (_printData$projectNam = printData.projectName) === null || _printData$projectNam === void 0 || (_printData$projectNam = _printData$projectNam.projectName) === null || _printData$projectNam === void 0 ? void 0 : _printData$projectNam.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
    className: "firstTable",
    style: {
      position: 'relative',
      fontSize: '80%',
      left: '83px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      backgroundColor: 'white',
      border: 'none',
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Pur #")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      backgroundColor: 'white',
      border: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "PUR-", String(printData.purchaseNumber).padStart(6, '0')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      backgroundColor: 'white',
      border: 'none',
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      backgroundColor: 'white',
      border: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_36___default()(printData.purchaseDate).format('DD/MM/YYYY'))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
    style: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
    className: "secondTable",
    style: {
      fontSize: '70%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      width: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "N"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      width: '250px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Unit Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Total-Need"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Total-Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "I-Out"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
    style: {
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    align: "left"
  }, "Total-Cost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, (_printData$items = printData.items) === null || _printData$items === void 0 ? void 0 : _printData$items.filter(Item => parseFloat(Item.itemQty) >= 0 || parseFloat(Item.itemBuy) > 0 || parseFloat(Item.itemOut) > 0).map((Item, i) => {
    var _Item$itemName5;
    var relatedUnit = itemMap[(_Item$itemName5 = Item.itemName) === null || _Item$itemName5 === void 0 ? void 0 : _Item$itemName5._id];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Row3, {
      key: i,
      row: Item,
      index: i,
      relatedUnit: relatedUnit
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 3,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, "SubTotal "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 2,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, (printData.purchaseAmount1 || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 2,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, (printData.purchaseAmount2 || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 2,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, totalGeneralOutCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), (_Object$keys3 = Object.keys(expenses)) === null || _Object$keys3 === void 0 ? void 0 : _Object$keys3.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Row, {
    key: Item,
    row: Item,
    index: i
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 5,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, "SubTotal 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 4,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, totalAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Row2, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 5,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, "Total Generale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    colSpan: 4,
    style: {
      border: '1px solid #DDD'
    },
    align: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, parseFloat(totalAmount + totalGeneralOutCost + totalAmountPlaning).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("address", {
    style: {
      float: 'left',
      fontSize: '70%',
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    style: {
      lineHeight: '14px',
      fontWeight: 'bold'
    }
  }, "Bank: SOFIBANQUE SA ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), "Entitled: GLOBAL GATE SARL", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), "Bank Account: 00023233330214247020073", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), "Code Swift: SFBXCDKIXXX"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    style: {
      fontWeight: 'bold'
    }
  }, "Terms & Conditions "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "     ESTIMATES ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED PARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL.")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      position: 'relative',
      marginTop: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    hidden: true
  }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    hidden: true
  }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintFooter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    branchId: typeof row !== "undefined" ? (_row2 = row) === null || _row2 === void 0 ? void 0 : _row2.branchId : typeof data !== "undefined" ? (_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.branchId : ""
  }))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectViewInformation);

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/js/AdminView1/PageView/InvoiceView/AdminView.css"
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/js/AdminView1/PageView/InvoiceView/AdminView.css ***!
  \*******************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* heading */
.invoiceTest {
  margin: 0 0 3em;
  height: 75px;
}

h1 {
  font: bold 100% sans-serif;
  letter-spacing: 0.5em;
  text-align: center;
  text-transform: uppercase;
}

.invoiceTest address {
  float: right;
  font-size: 75%;
  font-style: normal;
  line-height: 1.25;
  margin: 0 0 1em 1em;
}

address {
  float: right;
  font-size: 75%;
  font-style: normal;
  margin: 0 0 1em 1em;
}

.invoiceTest h1 {
  background-color: black;
  border-color: #999;
  border-bottom-style: solid;
  border-bottom-width: 10%;
  font: bold 100% sans-serif;
  letter-spacing: 0.5em;
  text-align: center;
  text-transform: uppercase;
}

.invoiceTest address p {
  margin: 0 0 0.25em;
}

.invoiceTest span, .invoiceTest img {
  display: block;
  float: left;
}

.invoiceTest span {
  margin: 0 1em 1em 0;
  max-height: 25%;
  max-width: 90%;
  position: absolute;
}

.invoiceTest img {
  max-height: 80px;
  max-width: var(--header-logo-width, 240px);
  object-fit: contain;
  margin-top: 10px;
}

.invoiceTest:after {
  clear: both;
  content: "";
  display: table;
}

/* article */
article, article address, table {
  margin: 0 0 3em;
}

article h1 {
  clip: rect(0 0 0 0);
  position: absolute;
}

article address {
  float: left;
  font-size: 90%;
  float: left;
  line-height: 10px;
}

article:after {
  clear: both;
  content: "";
  display: table;
}

/* table */
table {
  table-layout: auto;
  width: 100%;
}

table {
  border-collapse: collapse;
}

/* table firstTable */
table.firstTable {
  float: right;
  width: 50%;
  height: 50%;
}

table.firstTable:after {
  clear: both;
  content: "";
  display: table;
}

/* table firstTable */
table.firstTable th {
  width: 40%;
}

table.firstTable td {
  width: 60%;
}

aside h1#notes {
  border: none;
  border-width: 0 0 1px;
  margin: 0 0 1em;
}

aside h1#notes {
  border-color: #999;
  border-bottom-style: solid;
  border-bottom-width: 10%;
  font: bold 100% sans-serif;
  letter-spacing: 0.5em;
  text-align: center;
  text-transform: uppercase;
}`, "",{"version":3,"sources":["webpack://./src/js/AdminView1/PageView/InvoiceView/AdminView.css"],"names":[],"mappings":"AACA,YAAA;AAEA;EACI,eAAA;EACA,YAAA;AADJ;;AAIG;EACC,0BAAA;EACA,qBAAA;EACA,kBAAA;EACA,yBAAA;AADJ;;AAIE;EACE,YAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;AADJ;;AAGE;EACE,YAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;AAAJ;;AAEE;EACI,uBAAA;EACA,kBAAA;EAAoB,0BAAA;EAA4B,wBAAA;EAA0B,0BAAA;EAC1E,qBAAA;EACA,kBAAA;EACA,yBAAA;AAIN;;AADE;EACE,kBAAA;AAIJ;;AADE;EAAsC,cAAA;EAAgB,WAAA;AAMxD;;AALE;EAAqB,mBAAA;EAAqB,eAAA;EAAiB,cAAA;EAAgB,kBAAA;AAY7E;;AAXE;EAAmB,gBAAA;EAAkB,0CAAA;EAA4C,mBAAA;EAAqB,gBAAA;AAkBxG;;AAfE;EAAqB,WAAA;EAAa,WAAA;EAAa,cAAA;AAqBjD;;AAnBE,YAAA;AACA;EAAkC,eAAA;AAuBpC;;AAtBE;EAAa,mBAAA;EAAqB,kBAAA;AA2BpC;;AA1BE;EAAkB,WAAA;EAAa,cAAA;EAAgB,WAAA;EAAa,iBAAA;AAiC9D;;AA/BE;EAAgB,WAAA;EAAa,WAAA;EAAa,cAAA;AAqC5C;;AAnCE,UAAA;AAEA;EAAQ,kBAAA;EAAoB,WAAA;AAuC9B;;AAtCE;EAAQ,yBAAA;AA0CV;;AAzCE,qBAAA;AAEA;EAAmB,YAAA;EAAc,UAAA;EAAY,WAAA;AA8C/C;;AA7CE;EAAyB,WAAA;EAAa,WAAA;EAAa,cAAA;AAmDrD;;AAjDE,qBAAA;AAEA;EAAsB,UAAA;AAoDxB;;AAnDE;EAAsB,UAAA;AAuDxB;;AArDE;EAAiB,YAAA;EAAc,qBAAA;EAAuB,eAAA;AA2DxD;;AA1DE;EAAiB,kBAAA;EAAoB,0BAAA;EAA4B,wBAAA;EAA0B,0BAAA;EACzF,qBAAA;EACA,kBAAA;EACA,yBAAA;AAiEJ","sourcesContent":["\r\n/* heading */\r\n\r\n.invoiceTest {\r\n    margin: 0 0 3em;\r\n    height: 75px;\r\n  }\r\n  \r\n   h1 {\r\n    font: bold 100% sans-serif;\r\n    letter-spacing: 0.5em;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .invoiceTest address {\r\n    float: right;\r\n    font-size: 75%;\r\n    font-style: normal;\r\n    line-height: 1.25;\r\n    margin: 0 0 1em 1em;\r\n  }\r\n  address {\r\n    float: right;\r\n    font-size: 75%;\r\n    font-style: normal;\r\n    margin: 0 0 1em 1em;\r\n  }\r\n  .invoiceTest h1 {\r\n      background-color: black;\r\n      border-color: #999; border-bottom-style: solid; border-bottom-width: 10%; font: bold 100% sans-serif;\r\n      letter-spacing: 0.5em;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n    }\r\n  \r\n  .invoiceTest address p {\r\n    margin: 0 0 0.25em;\r\n  }\r\n  \r\n  .invoiceTest span, .invoiceTest img { display: block; float: left; }\r\n  .invoiceTest span {  margin: 0 1em 1em 0; max-height: 25%; max-width: 90%; position: absolute; }\r\n  .invoiceTest img { max-height: 80px; max-width: var(--header-logo-width, 240px); object-fit: contain; margin-top: 10px;}\r\n\r\n  \r\n  .invoiceTest:after { clear: both; content: \"\"; display: table; }\r\n  \r\n  /* article */\r\n  article, article address, table { margin: 0 0 3em; }\r\n  article h1 { clip: rect(0 0 0 0); position: absolute; }\r\n  article address { float: left; font-size: 90%; float: left; line-height: 10px; }\r\n  \r\n  article:after { clear: both; content: \"\"; display: table; }\r\n  \r\n  /* table */\r\n  \r\n  table { table-layout: auto; width: 100%; }\r\n  table { border-collapse: collapse;}\r\n  /* table firstTable */\r\n  \r\n  table.firstTable { float: right; width: 50%; height: 50%;}\r\n  table.firstTable:after { clear: both; content: \"\"; display: table; }\r\n  \r\n  /* table firstTable */\r\n  \r\n  table.firstTable th { width: 40%; }\r\n  table.firstTable td { width: 60%; }\r\n\r\n  aside h1#notes { border: none; border-width: 0 0 1px; margin: 0 0 1em; }\r\n  aside h1#notes { border-color: #999; border-bottom-style: solid; border-bottom-width: 10%; font: bold 100% sans-serif;\r\n    letter-spacing: 0.5em;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./src/js/AdminView1/PageView/InvoiceView/AdminView.css"
/*!**************************************************************!*\
  !*** ./src/js/AdminView1/PageView/InvoiceView/AdminView.css ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./AdminView.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/js/AdminView1/PageView/InvoiceView/AdminView.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_AdminView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUHJvamVjdFZpZXdfUHJvamVjdFZpZXdJbmZvcm1hdGlvbl9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUErQztBQUNYO0FBQ1E7QUFDTjtBQUNZO0FBQ1I7QUFDUTtBQUNMO0FBQ25CO0FBQ3dCO0FBSWxELFNBQVNZLFlBQVlBLENBQUEsRUFBRTtFQUNyQixJQUFBQyxVQUFBLEdBQVVKLDJEQUFTLENBQUMsQ0FBQztJQUFqQkssRUFBRSxHQUFBRCxVQUFBLENBQUZDLEVBQUU7RUFDTixJQUFBQyxTQUFBLEdBQXlCZCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBZSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE5QkcsS0FBSyxHQUFBRixVQUFBO0lBQUNHLFFBQVEsR0FBQUgsVUFBQTtFQUVyQixJQUFBSSxlQUFBLEdBQW9DcEIscURBQWMsQ0FBQyxDQUFDLENBQUM7SUFBQXFCLGdCQUFBLEdBQUFKLGNBQUEsQ0FBQUcsZUFBQTtJQUE5Q0UsVUFBVSxHQUFBRCxnQkFBQTtJQUFFRSxhQUFhLEdBQUFGLGdCQUFBO0VBQ2hDLElBQUFHLGdCQUFBLEdBQWtDeEIscURBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFBeUIsZ0JBQUEsR0FBQVIsY0FBQSxDQUFBTyxnQkFBQTtJQUE3Q0UsU0FBUyxHQUFBRCxnQkFBQTtJQUFFRSxZQUFZLEdBQUFGLGdCQUFBO0VBQzlCdkIsZ0RBQVMsQ0FBQyxNQUFLO0lBQ2JRLDZDQUFLLENBQUNrQixHQUFHLElBQUFDLE1BQUEsQ0FBSWxCLG9EQUFZLG9CQUFBa0IsTUFBQSxDQUFpQmYsRUFBRSxDQUFFLENBQUMsQ0FDOUNnQixJQUFJLENBQUNDLEdBQUcsSUFBSTtNQUNYO01BQ0EsSUFBTUMsVUFBVSxHQUFHRCxHQUFHLENBQUNFLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxLQUFLO01BQ3RDZixRQUFRLENBQUNh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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0SEFBNEgsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFlBQVksWUFBWSxZQUFZLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxZQUFZLFlBQVksUUFBUSxLQUFLLFdBQVcsVUFBVSxVQUFVLFFBQVEsV0FBVyxLQUFLLFdBQVcsUUFBUSxNQUFNLFdBQVcsWUFBWSxRQUFRLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxVQUFVLFVBQVUsUUFBUSxXQUFXLEtBQUssV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLE9BQU8sWUFBWSxLQUFLLFdBQVcsVUFBVSxVQUFVLFFBQVEsTUFBTSxXQUFXLFVBQVUsVUFBVSxRQUFRLFlBQVksS0FBSyxXQUFXLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsV0FBVyxRQUFRLE1BQU0sWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxpRUFBaUUsd0JBQXdCLHFCQUFxQixPQUFPLGlCQUFpQixtQ0FBbUMsOEJBQThCLDJCQUEyQixrQ0FBa0MsT0FBTyxrQ0FBa0MscUJBQXFCLHVCQUF1QiwyQkFBMkIsMEJBQTBCLDRCQUE0QixPQUFPLGVBQWUscUJBQXFCLHVCQUF1QiwyQkFBMkIsNEJBQTRCLE9BQU8sdUJBQXVCLGtDQUFrQyw4QkFBOEIsNEJBQTRCLDBCQUEwQiwyQkFBMkIsZ0NBQWdDLDZCQUE2QixvQ0FBb0MsU0FBUyxvQ0FBb0MsMkJBQTJCLE9BQU8sa0RBQWtELGdCQUFnQixjQUFjLDJCQUEyQixxQkFBcUIsaUJBQWlCLGdCQUFnQixxQkFBcUIseUJBQXlCLGtCQUFrQiw0Q0FBNEMscUJBQXFCLGtCQUFrQixxQ0FBcUMsYUFBYSxlQUFlLGlCQUFpQixpRUFBaUUsa0JBQWtCLG1CQUFtQixxQkFBcUIscUJBQXFCLHdCQUF3QixhQUFhLGdCQUFnQixhQUFhLG9CQUFvQiw0QkFBNEIsYUFBYSxlQUFlLGlCQUFpQiwyQ0FBMkMsb0JBQW9CLGNBQWMsY0FBYywyQkFBMkIsMkRBQTJELGNBQWMsWUFBWSxhQUFhLCtCQUErQixhQUFhLGVBQWUsaUJBQWlCLG9FQUFvRSxhQUFhLDRCQUE0QixhQUFhLDJCQUEyQixjQUFjLHVCQUF1QixrQkFBa0IsdUJBQXVCLG9CQUFvQiw0QkFBNEIsMEJBQTBCLDJCQUEyQiw4QkFBOEIsMkJBQTJCLGtDQUFrQyxPQUFPLG1CQUFtQjtBQUN0OEc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSXZDLE1BQTJHO0FBQzNHLE1BQWlHO0FBQ2pHLE1BQXdHO0FBQ3hHLE1BQTJIO0FBQzNILE1BQW9IO0FBQ3BILE1BQW9IO0FBQ3BILE1BQXVLO0FBQ3ZLO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsK0hBQU87Ozs7QUFJaUg7QUFDekksT0FBTyxpRUFBZSwrSEFBTyxJQUFJLCtIQUFPLFVBQVUsK0hBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvUHJvamVjdFZpZXcvUHJvamVjdFBoYXNlLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9Qcm9qZWN0Vmlldy9Qcm9qZWN0Vmlld0luZm9ybWF0aW9uLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9JbnZvaWNlVmlldy9BZG1pblZpZXcuY3NzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9JbnZvaWNlVmlldy9BZG1pblZpZXcuY3NzP2ViZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RlcHBlcic7XHJcbmltcG9ydCBTdGVwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RlcCc7XHJcbmltcG9ydCBTdGVwQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RlcEJ1dHRvbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdFBoYXNlKCl7XHJcbiAgbGV0e2lkfSA9IHVzZVBhcmFtcygpXHJcbiAgY29uc3QgW3N0ZXBzLHNldFN0ZXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XHJcbiAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LXByb2plY3RzLyR7aWR9YClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YSBoZXJlXHJcbiAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSByZXMuZGF0YS5kYXRhLnBoYXNlXHJcbiAgICAgIHNldFN0ZXBzKGZvcm1hdERhdGUpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgIC8vIEhhbmRsZSBlcnJvcnNcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9LFtdKVxyXG4gICAgY29uc3QgdG90YWxTdGVwcyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIHN0ZXBzLmxlbmd0aDtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBjb21wbGV0ZWRTdGVwcyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbXBsZXRlZCkubGVuZ3RoO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGlzTGFzdFN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBhY3RpdmVTdGVwID09PSB0b3RhbFN0ZXBzKCkgLSAxO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGFsbFN0ZXBzQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gY29tcGxldGVkU3RlcHMoKSA9PT0gdG90YWxTdGVwcygpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZVN0ZXAgPVxyXG4gICAgICAgIGlzTGFzdFN0ZXAoKSAmJiAhYWxsU3RlcHNDb21wbGV0ZWQoKVxyXG4gICAgICAgICAgPyAvLyBJdCdzIHRoZSBsYXN0IHN0ZXAsIGJ1dCBub3QgYWxsIHN0ZXBzIGhhdmUgYmVlbiBjb21wbGV0ZWQsXHJcbiAgICAgICAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IHN0ZXAgdGhhdCBoYXMgYmVlbiBjb21wbGV0ZWRcclxuICAgICAgICAgICAgc3RlcHMuZmluZEluZGV4KChzdGVwLCBpKSA9PiAhKGkgaW4gY29tcGxldGVkKSlcclxuICAgICAgICAgIDogYWN0aXZlU3RlcCArIDE7XHJcbiAgICAgIHNldEFjdGl2ZVN0ZXAobmV3QWN0aXZlU3RlcCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuICAgICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlU3RlcCA9IChzdGVwKSA9PiAoKSA9PiB7XHJcbiAgICAgIHNldEFjdGl2ZVN0ZXAoc3RlcCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0NvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgICAgbmV3Q29tcGxldGVkW2FjdGl2ZVN0ZXBdID0gdHJ1ZTtcclxuICAgICAgc2V0Q29tcGxldGVkKG5ld0NvbXBsZXRlZCk7XHJcbiAgICAgIGhhbmRsZU5leHQoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICA8U3RlcHBlciBub25MaW5lYXIgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH0+XHJcbiAgICAgICAgICB7c3RlcHMubWFwKChsYWJlbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFN0ZXAga2V5PXtsYWJlbH0gY29tcGxldGVkPXtjb21wbGV0ZWRbaW5kZXhdfT5cclxuICAgICAgICAgICAgICA8U3RlcEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVTdGVwKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9TdGVwQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1N0ZXA+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1N0ZXBwZXI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHthbGxTdGVwc0NvbXBsZXRlZCgpID8gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbXQ6IDIsIG1iOiAxIH19PlxyXG4gICAgICAgICAgICAgIENvbXBsZXRlZFxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtdDogMiwgbWI6IDEsIHB5OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgUGhhc2Uge2FjdGl2ZVN0ZXAgKyAxfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIHB0OiAyIH19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQmFja31cclxuICAgICAgICAgICAgICAgICAgc3g9e3sgbXI6IDEgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXg6ICcxIDEgYXV0bycgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlTmV4dH0gc3g9e3sgbXI6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgIT09IHN0ZXBzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAoY29tcGxldGVkW2FjdGl2ZVN0ZXBdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgc3g9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQaGFzZSB7YWN0aXZlU3RlcCArIDF9IGFscmVhZHkgY29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ29tcGxldGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbXBsZXRlZFN0ZXBzKCkgPT09IHRvdGFsU3RlcHMoKSAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnRmluaXNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdDb21wbGV0ZSBQaGFzZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RQaGFzZVxyXG4iLCJpbXBvcnQgUHJpbnRIZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1ByaW50SGVhZGVyJztcclxuaW1wb3J0IFByaW50Rm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9QcmludEZvb3Rlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2gnO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9JbnZvaWNlVmlldy9BZG1pblZpZXcuY3NzJ1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IENvbGxhcHNlLCBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZVJvdywgVGFibGVIZWFkLCBQYXBlciwgVGFibGVDb250YWluZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgQXV0b2NvbXBsZXRlLCBzdHlsZWQsIE1vZGFsLCBCYWNrZHJvcCwgRmFkZSwgQm94LCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgQ2hlY2tib3gsIExpbmVhclByb2dyZXNzLCBTdGVwcGVyLCBTdGVwLCBTdGVwTGFiZWwsIEJ1dHRvbiwgQWNjb3JkaW9uLCBBY2NvcmRpb25TdW1tYXJ5LCBBY2NvcmRpb25EZXRhaWxzLCBDYXJkLCBDYXJkQ29udGVudCwgVGFicywgVGFiLCBNZW51LCBEaXZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIE5hdkxpbmssIHVzZVBhcmFtcywgTGluaywgdXNlT3V0bGV0Q29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgSW9zU2hhcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW9zU2hhcmUnO1xyXG5pbXBvcnQgTG9jYWxQcmludHNob3BJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9jYWxQcmludHNob3AnO1xyXG5pbXBvcnQgQXR0YWNoRmlsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BdHRhY2hGaWxlJztcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VuZCc7XHJcbmltcG9ydCBQcm9qZWN0UGhhc2UgZnJvbSAnLi9Qcm9qZWN0UGhhc2UnO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd24nO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dVcCc7XHJcbmltcG9ydCBSZWFjdFRvUHJpbnQsIHsgdXNlUmVhY3RUb1ByaW50IH0gZnJvbSAncmVhY3QtdG8tcHJpbnQnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgRW1haWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW1haWwnO1xyXG5pbXBvcnQgUGhvbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGhvbmUnO1xyXG5pbXBvcnQgV2ViSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1dlYic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi8uLi9pbWcvaW1hZ2VzLnBuZydcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgeyBUYWJDb250ZXh0LCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ0BtdWkvbGFiJztcclxuaW1wb3J0IFZpc2liaWxpdHkgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5pbXBvcnQgRXhjZWxKUyBmcm9tICdleGNlbGpzJ1xyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IHsgRXhwbGljaXQsIFByZXZpZXcgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmNvbnN0IEVkaXRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFByaW50VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgY29sb3I6ICdibGFjaycsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gUHJvamVjdFZpZXdJbmZvcm1hdGlvbigpIHtcclxuICBsZXQgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3cgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvdyhlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW3Byb2plY3QsIHNldFByb2plY3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwcm9qZWN0Miwgc2V0UHJvamVjdDJdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtsb2FkaW5nVGFiLCBzZXRMb2FkaW5nVGFiXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXRlbSwgU2V0SXRlbXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG5cclxuICAvLyBQcmlvcml0eSBEYXRhIChJbml0aWFsIExvYWQpXHJcbiAgY29uc3QgW2xvYWRpbmdCYXNlLCBzZXRMb2FkaW5nQmFzZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy8gUHJpb3JpdHkgRGF0YSAoSW5pdGlhbCBMb2FkKVxyXG4gIGNvbnN0IGZldGNoUHJpb3JpdHlEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0TG9hZGluZ0Jhc2UodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IFtyZXNQcm9qZWN0cywgcmVzUHJvamVjdFNwZWMsIHJlc0hpZGRlbl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcHJvamVjdHNgKSxcclxuICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcHJvamVjdHMvJHtpZH1gKSxcclxuICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9oaWRkZW5gKVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSByZXNQcm9qZWN0cy5kYXRhLmRhdGEubWFwKChwKSA9PiAoe1xyXG4gICAgICAgIC4uLnAsXHJcbiAgICAgICAgaWQ6IHAuX2lkLFxyXG4gICAgICAgIHZpc2l0RmllbGQ6IGRheWpzKHAudmlzaXREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSxcclxuICAgICAgICBzdGFydEZpZWxkOiBkYXlqcyhwLnN0YXJ0RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyksXHJcbiAgICAgIH0pKTtcclxuICAgICAgc2V0UHJvamVjdChmb3JtYXREYXRlLnJldmVyc2UoKSk7XHJcbiAgICAgIHNldFByb2plY3ROYW1lKHJlc1Byb2plY3RTcGVjLmRhdGEuZGF0YS5wcm9qZWN0TmFtZSk7XHJcbiAgICAgIHNldEN1c3RvbWVyTmFtZTEocmVzUHJvamVjdFNwZWMuZGF0YS5kYXRhLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUucmVwbGFjZSgvXFxzKy9nLCAnXycpLnJlcGxhY2UoL1xcLi9nLCAnJykpO1xyXG4gICAgICBzZXRIaWRkZW4ocmVzSGlkZGVuLmRhdGEuZGF0YSk7XHJcblxyXG4gICAgICBzZXRMb2FkaW5nQmFzZShmYWxzZSk7XHJcbiAgICAgIHNldExvYWRpbmdEYXRhKHRydWUpOyAvLyBTdGlsbCB0cnVlIHVudGlsIGRldGFpbHMgYXJlIGxvYWRlZCBpZiB3ZSB3YW50IHRvIHdhaXQsIG9yIGZhbHNlIHRvIHNob3cgVUkuXHJcbiAgICAgIC8vIExldCdzIHNldCBpdCB0byBmYWxzZSBzbyBoZWFkZXIgc2hvd3MgdXAuXHJcbiAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcclxuXHJcbiAgICAgIC8vIExvYWQgYWxsIG90aGVyIGRhdGEgaW4gYmFja2dyb3VuZFxyXG4gICAgICBmZXRjaERldGFpbGVkRGF0YSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJpb3JpdHkgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmdCYXNlKGZhbHNlKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoRGV0YWlsZWREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgW3Jlc0FsbEl0ZW1zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtYClcclxuICAgICAgXSk7XHJcbiAgICAgIFNldEl0ZW1zKHJlc0FsbEl0ZW1zLmRhdGEuZGF0YSk7XHJcblxyXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgZmV0Y2hJbnZvaWNlc0FuZFB1cmNoYXNlcygpLFxyXG4gICAgICAgIGZldGNoRXhwZW5zZXMoKSxcclxuICAgICAgICBmZXRjaFBheW1lbnRzKCksXHJcbiAgICAgICAgZmV0Y2hUaW1lbGluZUFuZFN0YWZmKCksXHJcbiAgICAgICAgZmV0Y2hJdGVtc01vdmVtZW50KClcclxuICAgICAgXSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkZXRhaWxlZCBkYXRhOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBUYWItU3BlY2lmaWMgTG9hZGVyc1xyXG4gIGNvbnN0IGZldGNoSW52b2ljZXNBbmRQdXJjaGFzZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBbcmVzUHVyY2hhc2VzLCByZXNJbnZvaWNlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcHVyY2hhc2U/c3VtbWFyeT10cnVlYCksXHJcbiAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaW52b2ljZT9zdW1tYXJ5PXRydWVgKVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbGF0ZWRQdXJjaGFzZXMgPSByZXNQdXJjaGFzZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5wcm9qZWN0TmFtZT8uX2lkID09PSBpZCk7XHJcbiAgICAgIGNvbnN0IHByb2plY3RQdXJjaGFzZUlkcyA9IHJlbGF0ZWRQdXJjaGFzZXMubWFwKHAgPT4gcC5faWQpO1xyXG5cclxuICAgICAgLy8gRmlsdGVyIEludm9pY2VzOiBsaW5rZWQgZWl0aGVyIHZpYSBQdXJjaGFzZSBJRCBvciBkaXJlY3RseSB2aWEgUHJvamVjdCBJRFxyXG4gICAgICBjb25zdCByZWxhdGVkSW52b2ljZXMgPSByZXNJbnZvaWNlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKGludikgPT5cclxuICAgICAgICBwcm9qZWN0UHVyY2hhc2VJZHMuaW5jbHVkZXMoaW52LlJlZmVyZW5jZU5hbWUyKSB8fCBpbnYuUmVmZXJlbmNlTmFtZTIgPT09IGlkXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBhbGxQcm9qZWN0SXRlbXMgPSByZWxhdGVkUHVyY2hhc2VzLmZsYXRNYXAoKHJvdykgPT4gKHJvdy5pdGVtcyB8fCBbXSkubWFwKChJdGVtKSA9PiAoe1xyXG4gICAgICAgIC4uLkl0ZW0sXHJcbiAgICAgICAgdG90YWxDb3N0T3V0OiAoSXRlbS5pdGVtTmFtZT8uX2lkID09PSB1bmRlZmluZWQgfHwgSXRlbS5pdGVtTmFtZT8uX2lkID09PSBcIlwiKSAmJiAoTnVtYmVyKEl0ZW0uaXRlbU91dCkgfHwgMCkgPT09IDBcclxuICAgICAgICAgID8gKE51bWJlcihJdGVtLnRvdGFsR2VuZXJhbGUpIHx8IDApXHJcbiAgICAgICAgICA6IChOdW1iZXIoSXRlbS5pdGVtT3V0KSB8fCAwKSAqIChOdW1iZXIoSXRlbS5pdGVtQ29zdCkgfHwgMClcclxuICAgICAgfSkpKTtcclxuXHJcbiAgICAgIHNldEl0ZW0oYWxsUHJvamVjdEl0ZW1zKTtcclxuICAgICAgc2V0UHVyY2hhc2UocmVsYXRlZFB1cmNoYXNlcyk7XHJcbiAgICAgIHNldEludm9pY2UocmVsYXRlZEludm9pY2VzLm1hcChyb3cgPT4gKHsgLi4ucm93LCBpZDogcm93Ll9pZCB9KSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgSW52b2ljZXMvUHVyY2hhc2VzOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaEV4cGVuc2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgW3Jlc0V4cENhdCwgcmVzRXhwZW5zZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2V4cGVuc2VzQ2F0ZWdvcnlgKSxcclxuICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9leHBlbnNlP3N1bW1hcnk9dHJ1ZWApXHJcbiAgICAgIF0pO1xyXG4gICAgICBzZXRDYXRlZ29yaWVzKHJlc0V4cENhdC5kYXRhLmRhdGEpO1xyXG4gICAgICBzZXRFeHBlbnNlc0luZm8ocmVzRXhwZW5zZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5hY2NvdW50TmFtZUluZm8/Ll9pZCA9PT0gaWQpLm1hcCgocm93KSA9PiAoe1xyXG4gICAgICAgIF9pZDogcm93Ll9pZCxcclxuICAgICAgICBjYXRlZ29yeTogcm93LmV4cGVuc2VDYXRlZ29yeT8uZXhwZW5zZXNDYXRlZ29yeSxcclxuICAgICAgICB0b3RhbDogcm93LnRvdGFsLFxyXG4gICAgICAgIGRhdGU6IHJvdy5leHBlbnNlRGF0ZSxcclxuICAgICAgICBleHBlbnNlTnVtYmVyOiByb3cuZXhwZW5zZU51bWJlcixcclxuICAgICAgICBkZXNjcmlwdGlvbjogcm93LmRlc2NyaXB0aW9uXHJcbiAgICAgIH0pKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBFeHBlbnNlczonLCBlcnJvcik7IH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFBheW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcGF5bWVudGApO1xyXG4gICAgICBzZXRBZHZhbmNlcyhyZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChwYXkpID0+IHBheS5Ub3RhbEFtb3VudD8uc29tZSgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBQYXltZW50czonLCBlcnJvcik7IH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaEl0ZW1zTW92ZW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBbcmVzT3V0LCByZXNSZXR1cm4sIHJlc1ByZWNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1PdXRgKSxcclxuICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtUmV0dXJuYCksXHJcbiAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbVB1cmNoYXNlP3N1bW1hcnk9dHJ1ZWApXHJcbiAgICAgIF0pO1xyXG4gICAgICBzZXRJdGVtT3V0KHJlc091dC5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnJlZmVyZW5jZT8uX2lkID09PSBpZCkubWFwKChyb3cpID0+ICh7IC4uLnJvdywgb3V0TnVtYmVyOiBcIk8tXCIgKyBTdHJpbmcocm93Lm91dE51bWJlcikucGFkU3RhcnQoNiwgJzAnKSwgdHlwZTogJ0l0ZW0gT3V0JyB9KSkpO1xyXG4gICAgICBzZXRJdGVtUmV0dXJuKHJlc1JldHVybi5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnJlZmVyZW5jZT8uX2lkID09PSBpZCkubWFwKChyb3cpID0+ICh7IC4uLnJvdywgb3V0TnVtYmVyOiBcIlItXCIgKyBTdHJpbmcocm93Lm91dE51bWJlcikucGFkU3RhcnQoNiwgJzAnKSwgdHlwZTogJ0l0ZW0gcmV0dXJuJyB9KSkpO1xyXG4gICAgICBzZXRJdGVtUHVyY2hhc2UocmVzUHJlYy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnByb2plY3ROYW1lICYmIHJvdy5wcm9qZWN0TmFtZS5faWQgPT09IGlkKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBJdGVtIE1vdmVtZW50OicsIGVycm9yKTsgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoVGltZWxpbmVBbmRTdGFmZiA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IFtyZXNOb3RpZiwgcmVzUGxhbmluZ10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vbm90aWZpY2F0aW9uYCksXHJcbiAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcGxhbmluZ2ApXHJcbiAgICAgIF0pO1xyXG4gICAgICBzZXROb3RpZmljYXRpb24ocmVzTm90aWYuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5pZEluZm8gPT09IGlkKSk7XHJcbiAgICAgIHNldFBsYW5pbmdJbmZvKHJlc1BsYW5pbmcuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5wcm9qZWN0TmFtZT8uX2lkID09PSBpZCkubWFwKChyb3cpID0+ICh7XHJcbiAgICAgICAgLi4ucm93LFxyXG4gICAgICAgIHRvdGFsV29ya0RheTogcGFyc2VGbG9hdChOdW1iZXIocm93LmRheVBheVVTZCB8fCAwKSAqIE51bWJlcihyb3cud29ya051bWJlciB8fCAwKSkudG9GaXhlZCgyKVxyXG4gICAgICB9KSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgVGltZWxpbmUvU3RhZmY6JywgZXJyb3IpOyB9XHJcbiAgfTtcclxuXHJcbiAgLy8gTWFwcyBmb3Igb3B0aW1pemVkIGxvb2t1cHNcclxuICBjb25zdCBpdGVtTWFwID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGl0ZW0uZm9yRWFjaChpID0+IHsgbWFwW2kuX2lkXSA9IGk7IH0pO1xyXG4gICAgcmV0dXJuIG1hcDtcclxuICB9LCBbaXRlbV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hQcmlvcml0eURhdGEoKTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3QgW3Byb2plY3ROdW1iZXIsIHNldFByb2plY3ROdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2plY3ROYW1lLCBzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3VzdG9tZXJOYW1lMSwgc2V0Q3VzdG9tZXJOYW1lMV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW3B1cmNoYXNlLCBzZXRQdXJjaGFzZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1dID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGNvbnN0IHRvdGFsR2VuZXJhbE91dENvc3QgPSBpdGVtcy5sZW5ndGggPiAwID8gaXRlbXMucmVkdWNlKChzdW0sIHJvdykgPT4gc3VtICsgcm93LnRvdGFsQ29zdE91dCwgMCkgOiAwXHJcbiAgY29uc3QgW2l0ZW1PdXQsIHNldEl0ZW1PdXRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpdGVtUmV0dXJuLCBzZXRJdGVtUmV0dXJuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXhwZW5zZXMsIHNldEV4cGVuc2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW52b2ljZSwgc2V0SW52b2ljZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2V4cGVuc2VzSW5mbywgc2V0RXhwZW5zZXNJbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXRlbVB1cmNoYXNlLCBzZXRJdGVtUHVyY2hhc2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwbGFuaW5nSW5mbywgc2V0UGxhbmluZ0luZm9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbm90aWZpY2F0aW9uLCBzZXROb3RpZmljYXRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthZHZhbmNlcywgc2V0QWR2YW5jZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB7LyoqIGNvbnN0IHJlc0l0ZW1PdXQgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtT3V0YClcclxuICAgICAgICAgY29uc3QgT3V0RmlsdGVyID0gcmVzSXRlbU91dC5kYXRhLmRhdGEubWFwKChyb3cpPT4oey4uLnJvdywgb3V0TnVtYmVyOiBcIk8tMFwiICsgcm93Lm91dE51bWJlcix0eXBlOidPdXQnLCBpdGVtc1F0eUFycmF5IDogcm93Lml0ZW1zUXR5QXJyYXkuZmlsdGVyKChJdGVtKT0+IEl0ZW0uaXRlbU5hbWUuX2lkID09PSBpZCAmJiBwYXJzZUZsb2F0KEl0ZW0ubmV3SXRlbU91dCkgPiAwKSB9KSlcclxuICAgICAgICAgc2V0SXRlbU91dChPdXRGaWx0ZXIuZmlsdGVyKChyb3cpPT4gcm93LnJlZmVyZW5jZS5faWQgPT09IGlkICYmIHJvdy5pdGVtc1F0eUFycmF5Lmxlbmd0aCA+IDAgKSlcclxuICAgICAgICAgY29uc3QgcmVzSVJldHVybiA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1SZXR1cm5gKVxyXG4gICAgICAgICBjb25zdCByZXR1cm5GaWx0ZXIgPSByZXNJUmV0dXJuLmRhdGEuZGF0YS5tYXAoKHJvdyk9Pih7Li4ucm93LCBvdXROdW1iZXI6IFwiUi0wXCIgKyByb3cub3V0TnVtYmVyLCB0eXBlOidyZXR1cm4nLCBpdGVtc1F0eUFycmF5IDogcm93Lml0ZW1zUXR5QXJyYXkuZmlsdGVyKChJdGVtKT0+IEl0ZW0uaXRlbU5hbWUuX2lkID09PSBpZCAmJiBwYXJzZUZsb2F0KEl0ZW0ubmV3SXRlbU91dCkgPiAwKSB9KSlcclxuICAgICAgICAgc2V0SXRlbVJldHVybihyZXR1cm5GaWx0ZXIuZmlsdGVyKChyb3cpPT4gcm93LnJlZmVyZW5jZS5faWQgPT09IGlkICYmIHJvdy5pdGVtc1F0eUFycmF5Lmxlbmd0aCA+IDAgKSkgKi99XHJcblxyXG4gIGNvbnN0IG5ld091dFIgPSBbLi4uaXRlbU91dCwgLi4uaXRlbVJldHVybl1cclxuXHJcbiAgY29uc3QgZm9ybWF0RGF0ZTIgPSBuZXdPdXRSLm1hcCgocm93KSA9PiAoe1xyXG4gICAgLi4ucm93LFxyXG4gICAgaXRlbXNRdHlBcnJheTogcm93Lml0ZW1zUXR5QXJyYXkuZmlsdGVyKChJdGVtKSA9PiBwYXJzZUZsb2F0KEl0ZW0ubmV3SXRlbU91dCkgPiAwKVxyXG4gIH0pKS5maWx0ZXIocm93ID0+IHJvdy5pdGVtc1F0eUFycmF5Lmxlbmd0aCA+IDApXHJcblxyXG4gIGNvbnN0IHJlbGF0ZWRJdGVtUHVyY2hhc2VzID0gaXRlbVB1cmNoYXNlLmxlbmd0aCA+IDAgPyBpdGVtUHVyY2hhc2UucmVkdWNlKChhY2MsIHJvdykgPT4ge1xyXG4gICAgcm93Lml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gcGFyc2VGbG9hdChpdGVtLml0ZW1RdHkpID49IDAgJiYgaXRlbS5pdGVtTmFtZS5faWQgIT09IHVuZGVmaW5lZCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBJdGVtTmFtZSA9IGl0ZW0uaXRlbU5hbWUuaXRlbU5hbWU7XHJcbiAgICAgIGNvbnN0IElkID0gaXRlbS5pdGVtTmFtZS5faWQ7XHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaXRlbS5pdGVtRGVzY3JpcHRpb247XHJcbiAgICAgIGlmICghYWNjW0lkXSkge1xyXG4gICAgICAgIGFjY1tJZF0gPSB7IEl0ZW1OYW1lLCBJZCwgZGVzY3JpcHRpb24sIHRvdGFsOiAwIH1cclxuICAgICAgfVxyXG4gICAgICBhY2NbSWRdLnRvdGFsICs9IHBhcnNlRmxvYXQoaXRlbS5pdGVtUXR5KVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYWNjXHJcbiAgfSwge30pIDogbnVsbFxyXG4gIGNvbnN0IHJlbGF0ZWRJdGVtUHVyY2hhc2VzMiA9IGl0ZW1QdXJjaGFzZS5sZW5ndGggPiAwID8gaXRlbVB1cmNoYXNlLnJlZHVjZSgoYWNjLCByb3cpID0+IHtcclxuICAgIHJvdy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHBhcnNlRmxvYXQoaXRlbS5pdGVtUXR5KSA+PSAwICYmIGl0ZW0uaXRlbU5hbWUuX2lkID09PSB1bmRlZmluZWQpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgSXRlbU5hbWUgPSBpdGVtLml0ZW1OYW1lLml0ZW1OYW1lO1xyXG4gICAgICBjb25zdCBJZCA9IGl0ZW0uaXRlbU5hbWUuX2lkO1xyXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGl0ZW0uaXRlbURlc2NyaXB0aW9uO1xyXG4gICAgICAvLyBDYXB0dXJlIHByaWNlIGZyb20gdGhlIGl0ZW0gcHVyY2hhc2UgLSBmaXggcHJvcGVydHkgbmFtZXMgYW5kIGZhbGxiYWNrXHJcbiAgICAgIGNvbnN0IHJhdGUgPSBwYXJzZUZsb2F0KGl0ZW0uaXRlbVJhdGUpIHx8IDA7XHJcbiAgICAgIGNvbnN0IGNvc3QgPSBwYXJzZUZsb2F0KGl0ZW0uY29zdCkgfHwgcGFyc2VGbG9hdChpdGVtLml0ZW1SYXRlKSB8fCAwO1xyXG5cclxuICAgICAgaWYgKCFhY2NbZGVzY3JpcHRpb25dKSB7XHJcbiAgICAgICAgYWNjW2Rlc2NyaXB0aW9uXSA9IHsgSXRlbU5hbWUsIElkLCBkZXNjcmlwdGlvbiwgdG90YWw6IDAsIHJhdGU6IHJhdGUsIGNvc3Q6IGNvc3QgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNpbXBsZSB1cGRhdGUgdG8gbGF0ZXN0IHByaWNlXHJcbiAgICAgICAgYWNjW2Rlc2NyaXB0aW9uXS5yYXRlID0gcmF0ZTtcclxuICAgICAgICBhY2NbZGVzY3JpcHRpb25dLmNvc3QgPSBjb3N0O1xyXG4gICAgICB9XHJcbiAgICAgIGFjY1tkZXNjcmlwdGlvbl0udG90YWwgKz0gcGFyc2VGbG9hdChpdGVtLml0ZW1RdHkpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhY2NcclxuICB9LCB7fSkgOiBudWxsXHJcblxyXG4gIGNvbnN0IHJlbGF0ZWRJdGVtUHVyY2hhc2VzQXJyYXkgPSByZWxhdGVkSXRlbVB1cmNoYXNlcyAhPT0gbnVsbCA/IE9iamVjdC5rZXlzKHJlbGF0ZWRJdGVtUHVyY2hhc2VzKS5tYXAoKHJvdykgPT4gcmVsYXRlZEl0ZW1QdXJjaGFzZXNbcm93XSkgOiBbXVxyXG4gIGNvbnN0IHJlbGF0ZWRJdGVtUHVyY2hhc2VzQXJyYXkyID0gcmVsYXRlZEl0ZW1QdXJjaGFzZXMyICE9PSBudWxsID8gT2JqZWN0LmtleXMocmVsYXRlZEl0ZW1QdXJjaGFzZXMyKS5tYXAoKHJvdykgPT4gcmVsYXRlZEl0ZW1QdXJjaGFzZXMyW3Jvd10pIDogW11cclxuXHJcbiAgY29uc3QgYWxsSXRlbVB1cmNoYXNlID0gWy4uLnJlbGF0ZWRJdGVtUHVyY2hhc2VzQXJyYXksIC4uLnJlbGF0ZWRJdGVtUHVyY2hhc2VzQXJyYXkyXVxyXG4gIC8vY29uc29sZS5sb2coYWxsSXRlbVB1cmNoYXNlKVxyXG5cclxuICBjb25zdCBwdXJjaGFzZUluZm8gPSBwdXJjaGFzZS5tYXAoKFByZXZpZXdQdXJjaGFzZSkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZFB1cmNoYXNlID0geyAuLi5QcmV2aWV3UHVyY2hhc2UgfVxyXG4gICAgLy8gRml4OiBGaWx0ZXIgaXRlbVB1cmNoYXNlIHRvIG9ubHkgaW5jbHVkZSByZWNvcmRzIHRoYXQgbWF0Y2ggdGhlIGN1cnJlbnQgcHVyY2hhc2UgbnVtYmVyXHJcbiAgICBjb25zdCBjdXJyZW50SXRlbVB1cmNoYXNlcyA9IGl0ZW1QdXJjaGFzZS5maWx0ZXIoaXAgPT4gaXAuaXRlbVB1cmNoYXNlTnVtYmVyID09PSBQcmV2aWV3UHVyY2hhc2UucHVyY2hhc2VOdW1iZXIpO1xyXG4gICAgY29uc3QgbG9jYWxSZWxhdGVkID0gY3VycmVudEl0ZW1QdXJjaGFzZXMucmVkdWNlKChhY2MsIHJvdykgPT4ge1xyXG4gICAgICByb3cuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBwYXJzZUZsb2F0KGl0ZW0uaXRlbVF0eSkgPj0gMCAmJiBpdGVtLml0ZW1OYW1lLl9pZCAhPT0gdW5kZWZpbmVkKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgSXRlbU5hbWUgPSBpdGVtLml0ZW1OYW1lLml0ZW1OYW1lO1xyXG4gICAgICAgIGNvbnN0IElkID0gaXRlbS5pdGVtTmFtZS5faWQ7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBpdGVtLml0ZW1EZXNjcmlwdGlvbjtcclxuICAgICAgICBpZiAoIWFjY1tJZF0pIHtcclxuICAgICAgICAgIGFjY1tJZF0gPSB7IEl0ZW1OYW1lLCBJZCwgZGVzY3JpcHRpb24sIHRvdGFsOiAwIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYWNjW0lkXS50b3RhbCArPSBwYXJzZUZsb2F0KGl0ZW0uaXRlbVF0eSlcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBhY2NcclxuICAgIH0sIHt9KTtcclxuICAgIGNvbnN0IGxvY2FsUmVsYXRlZDIgPSBjdXJyZW50SXRlbVB1cmNoYXNlcy5yZWR1Y2UoKGFjYywgcm93KSA9PiB7XHJcbiAgICAgIHJvdy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHBhcnNlRmxvYXQoaXRlbS5pdGVtUXR5KSA+PSAwICYmIGl0ZW0uaXRlbU5hbWUuX2lkID09PSB1bmRlZmluZWQpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBJdGVtTmFtZSA9IGl0ZW0uaXRlbU5hbWUuaXRlbU5hbWU7XHJcbiAgICAgICAgY29uc3QgSWQgPSBpdGVtLml0ZW1OYW1lLl9pZDtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGl0ZW0uaXRlbURlc2NyaXB0aW9uO1xyXG4gICAgICAgIGNvbnN0IHJhdGUgPSBwYXJzZUZsb2F0KGl0ZW0uaXRlbVJhdGUpIHx8IDA7XHJcbiAgICAgICAgY29uc3QgY29zdCA9IHBhcnNlRmxvYXQoaXRlbS5jb3N0KSB8fCBwYXJzZUZsb2F0KGl0ZW0uaXRlbVJhdGUpIHx8IDA7XHJcbiAgICAgICAgaWYgKCFhY2NbZGVzY3JpcHRpb25dKSB7XHJcbiAgICAgICAgICBhY2NbZGVzY3JpcHRpb25dID0geyBJdGVtTmFtZSwgSWQsIGRlc2NyaXB0aW9uLCB0b3RhbDogMCwgcmF0ZTogcmF0ZSwgY29zdDogY29zdCB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFjY1tkZXNjcmlwdGlvbl0ucmF0ZSA9IHJhdGU7XHJcbiAgICAgICAgICBhY2NbZGVzY3JpcHRpb25dLmNvc3QgPSBjb3N0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhY2NbZGVzY3JpcHRpb25dLnRvdGFsICs9IHBhcnNlRmxvYXQoaXRlbS5pdGVtUXR5KVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwge30pO1xyXG4gICAgY29uc3QgbG9jYWxBbGwgPSBbLi4uT2JqZWN0LnZhbHVlcyhsb2NhbFJlbGF0ZWQpLCAuLi5PYmplY3QudmFsdWVzKGxvY2FsUmVsYXRlZDIpXTtcclxuICAgIGxvY2FsQWxsPy5mb3JFYWNoKChyb3cyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IHVwZGF0ZWRQdXJjaGFzZS5pdGVtcz8uZmluZEluZGV4KFxyXG4gICAgICAgIChpdGVtSSkgPT4gcm93Mi5JZCA/IGl0ZW1JLml0ZW1OYW1lLl9pZCA9PT0gcm93Mi5JZCA6IGl0ZW1JLml0ZW1EZXNjcmlwdGlvbiA9PT0gcm93Mi5kZXNjcmlwdGlvblxyXG4gICAgICApXHJcbiAgICAgIGlmIChleGlzdGluZ0l0ZW0gPiAtMSkge1xyXG4gICAgICAgIHVwZGF0ZWRQdXJjaGFzZS5pdGVtc1tleGlzdGluZ0l0ZW1dLml0ZW1CdXkgPSByb3cyLnRvdGFsXHJcbiAgICAgICAgLy8gVXBkYXRlIGNvc3RzIGFuZCByYXRlcyBmb3IgbWFudWFsIGl0ZW1zIGlmIGF2YWlsYWJsZSBmcm9tIGFjdHVhbCBwdXJjaGFzZXNcclxuICAgICAgICBpZiAoIXJvdzIuSWQpIHtcclxuICAgICAgICAgIHVwZGF0ZWRQdXJjaGFzZS5pdGVtc1tleGlzdGluZ0l0ZW1dLml0ZW1Db3N0ID0gcm93Mi5jb3N0O1xyXG4gICAgICAgICAgdXBkYXRlZFB1cmNoYXNlLml0ZW1zW2V4aXN0aW5nSXRlbV0uaXRlbVJhdGUgPSByb3cyLnJhdGU7XHJcbiAgICAgICAgICB1cGRhdGVkUHVyY2hhc2UuaXRlbXNbZXhpc3RpbmdJdGVtXS50b3RhbEFtb3VudCA9IE1hdGgucm91bmQoKHJvdzIucmF0ZSAqIHVwZGF0ZWRQdXJjaGFzZS5pdGVtc1tleGlzdGluZ0l0ZW1dLml0ZW1RdHkpICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgIHVwZGF0ZWRQdXJjaGFzZS5pdGVtc1tleGlzdGluZ0l0ZW1dLml0ZW1BbW91bnQgPSB1cGRhdGVkUHVyY2hhc2UuaXRlbXNbZXhpc3RpbmdJdGVtXS50b3RhbEFtb3VudDsgLy8gU2ltcGxpZmllZCwgYXNzdW1pbmcgbm8gZGlzY291bnQgY2hhbmdlXHJcbiAgICAgICAgICB1cGRhdGVkUHVyY2hhc2UuaXRlbXNbZXhpc3RpbmdJdGVtXS50b3RhbEdlbmVyYWxlID0gTWF0aC5yb3VuZCgocm93Mi5jb3N0ICogcm93Mi50b3RhbCkgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBpdGVtRGV0YWlscyA9IGl0ZW1NYXBbcm93Mi5JZF1cclxuICAgICAgICBjb25zdCByYXRlID0gcm93Mi5JZCA/IChpdGVtRGV0YWlscz8uaXRlbVNlbGxpbmdQcmljZSB8fCAwKSA6IHJvdzIucmF0ZTtcclxuICAgICAgICBjb25zdCBjb3N0ID0gcm93Mi5JZCA/IChpdGVtRGV0YWlscz8uaXRlbUNvc3RQcmljZSB8fCAwKSA6IHJvdzIuY29zdDtcclxuICAgICAgICB1cGRhdGVkUHVyY2hhc2UuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgICAgIF9pZDogcm93Mi5JZCB8fCBcIlwiLFxyXG4gICAgICAgICAgICBpdGVtTmFtZTogcm93Mi5JdGVtTmFtZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogcm93Mi5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgICAgIGl0ZW1RdHk6IHJvdzIudG90YWwsXHJcbiAgICAgICAgICBpdGVtUmF0ZTogcmF0ZSxcclxuICAgICAgICAgIGl0ZW1Db3N0OiBjb3N0LFxyXG4gICAgICAgICAgdG90YWxBbW91bnQ6IE1hdGgucm91bmQoKHJvdzIudG90YWwgKiByYXRlKSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgICBkaXNjb3VudDogMCxcclxuICAgICAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgICAgICBpdGVtQW1vdW50OiBNYXRoLnJvdW5kKChyb3cyLnRvdGFsICogcmF0ZSkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgICAgdG90YWxDb3N0OiBNYXRoLnJvdW5kKChyb3cyLnRvdGFsICogY29zdCkgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgICAgdG90YWxHZW5lcmFsZTogTWF0aC5yb3VuZCgoY29zdCAqIHJvdzIudG90YWwpICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgIGl0ZW1CdXk6IHJvdzIudG90YWwsXHJcbiAgICAgICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICAgICAgc3RvY2s6IGl0ZW1EZXRhaWxzPy5pdGVtUXVhbnRpdHkgfHwgMCxcclxuICAgICAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyBSZWNhbGN1bGF0ZSBwdXJjaGFzZSBhbW91bnRzIGFmdGVyIGFsbCBpdGVtcyBhcmUgdXBkYXRlZFxyXG4gICAgdXBkYXRlZFB1cmNoYXNlLnB1cmNoYXNlQW1vdW50MSA9IHVwZGF0ZWRQdXJjaGFzZS5pdGVtcz8ucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIChwYXJzZUZsb2F0KGl0ZW0udG90YWxDb3N0KSB8fCAwKSwgMCkgfHwgMDtcclxuICAgIHVwZGF0ZWRQdXJjaGFzZS5wdXJjaGFzZUFtb3VudDIgPSB1cGRhdGVkUHVyY2hhc2UuaXRlbXM/LnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyAocGFyc2VGbG9hdChpdGVtLnRvdGFsR2VuZXJhbGUpIHx8IDApLCAwKSB8fCAwO1xyXG5cclxuICAgIHJldHVybiB1cGRhdGVkUHVyY2hhc2VcclxuICB9KVxyXG5cclxuXHJcbiAgY29uc3QgcmVsYXRlZCA9IGl0ZW1PdXQubGVuZ3RoID4gMCA/IGl0ZW1PdXQucmVkdWNlKChhY2MsIHJvdykgPT4ge1xyXG4gICAgcm93Lml0ZW1zUXR5QXJyYXkuZmlsdGVyKChpdGVtKSA9PiBwYXJzZUZsb2F0KGl0ZW0ubmV3SXRlbU91dCkgPiAwKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IEl0ZW1OYW1lID0gaXRlbS5pdGVtTmFtZS5pdGVtTmFtZTtcclxuICAgICAgY29uc3QgSWQgPSBpdGVtLml0ZW1OYW1lLl9pZDtcclxuICAgICAgaWYgKCFhY2NbSXRlbU5hbWVdKSB7XHJcbiAgICAgICAgYWNjW0l0ZW1OYW1lXSA9IHsgSXRlbU5hbWUsIElkLCB0b3RhbDogMCB9XHJcbiAgICAgIH1cclxuICAgICAgYWNjW0l0ZW1OYW1lXS50b3RhbCArPSBwYXJzZUZsb2F0KGl0ZW0ubmV3SXRlbU91dClcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFjY1xyXG4gIH0sIHt9KSA6IG51bGxcclxuXHJcbiAgY29uc3QgcmVsYXRlZFJldHVybiA9IGl0ZW1SZXR1cm4ubGVuZ3RoID4gMCA/IGl0ZW1SZXR1cm4ucmVkdWNlKChhY2MsIHJvdykgPT4ge1xyXG4gICAgcm93Lml0ZW1zUXR5QXJyYXkuZmlsdGVyKChpdGVtKSA9PiBwYXJzZUZsb2F0KGl0ZW0ubmV3SXRlbU91dCkgPiAwKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IEl0ZW1OYW1lMSA9IGl0ZW0uaXRlbU5hbWUuaXRlbU5hbWU7XHJcbiAgICAgIGNvbnN0IElkMSA9IGl0ZW0uaXRlbU5hbWUuX2lkO1xyXG4gICAgICBpZiAoIWFjY1tJdGVtTmFtZTFdKSB7XHJcbiAgICAgICAgYWNjW0l0ZW1OYW1lMV0gPSB7IEl0ZW1OYW1lMSwgSWQxLCB0b3RhbDE6IDAgfVxyXG4gICAgICB9XHJcbiAgICAgIGFjY1tJdGVtTmFtZTFdLnRvdGFsMSArPSBwYXJzZUZsb2F0KGl0ZW0ubmV3SXRlbU91dClcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFjY1xyXG4gIH0sIHt9KSA6IG51bGxcclxuXHJcbiAgY29uc3QgbmV3QWxsT3V0UmV0dXJuID0gcmVsYXRlZCAhPT0gbnVsbCA/IE9iamVjdC52YWx1ZXMocmVsYXRlZCkubWFwKCh7IEl0ZW1OYW1lLCBJZCwgdG90YWwgfSkgPT4ge1xyXG4gICAgY29uc3QgcmVsYXRlZDEgPSByZWxhdGVkUmV0dXJuICE9PSBudWxsID8gT2JqZWN0LnZhbHVlcyhyZWxhdGVkUmV0dXJuKS5maW5kKCh7IEl0ZW1OYW1lMSwgSWQxLCB0b3RhbDEgfSkgPT4gSWQxID09PSBJZCkgOiBudWxsXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgSXRlbU5hbWUsXHJcbiAgICAgIElkLFxyXG4gICAgICB0b3RhbDogcmVsYXRlZDEgPyB0b3RhbCAtIHJlbGF0ZWQxLnRvdGFsMSA6IHRvdGFsXHJcbiAgICB9KVxyXG4gIH0pIDogbnVsbFxyXG5cclxuICBjb25zdCByZWxhdGVkUHVyY2hhc2UgPSBwdXJjaGFzZS5tYXAoKHJvdykgPT4gKHtcclxuICAgIC4uLnJvdyxcclxuICAgIGl0ZW1zOiByb3cuaXRlbXMubWFwKChJdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0FsbE91dFJldHVybkluZm8gPSBuZXdBbGxPdXRSZXR1cm4gIT09IG51bGwgPyBuZXdBbGxPdXRSZXR1cm4uZmluZCgoSXRlbTEpID0+IEl0ZW0xLklkID09PSBJdGVtLml0ZW1OYW1lPy5faWQpIDogbnVsbFxyXG4gICAgICByZXR1cm4gKHtcclxuICAgICAgICAuLi5JdGVtLFxyXG4gICAgICAgIGl0ZW1PdXQ6IG5ld0FsbE91dFJldHVybkluZm8gPyBuZXdBbGxPdXRSZXR1cm5JbmZvLnRvdGFsIDogMFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdG90YWxQZXJEYXkgPSB7fTtcclxuICAgIGV4cGVuc2VzSW5mby5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgY2F0ZWdvcnksIHRvdGFsIH0gPSBpdGVtO1xyXG4gICAgICBpZiAodG90YWxQZXJEYXlbY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgdG90YWxQZXJEYXlbY2F0ZWdvcnldICs9IHBhcnNlRmxvYXQodG90YWwpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG90YWxQZXJEYXlbY2F0ZWdvcnldID0gcGFyc2VGbG9hdCh0b3RhbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgc2V0RXhwZW5zZXModG90YWxQZXJEYXkpXHJcbiAgfSwgW2NhdGVnb3JpZXMsIGV4cGVuc2VzSW5mb10pXHJcblxyXG4gIGNvbnN0IHBsYW5pbmdPYmplY3QgPSBwbGFuaW5nSW5mbz8ucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGlkID0gaXRlbS5lbXBsb3llZUlEO1xyXG4gICAgY29uc3QgbmFtZSA9IGl0ZW0uZW1wbG95ZWVOYW1lO1xyXG4gICAgY29uc3QgZGF5UGF5ID0gaXRlbS5kYXlQYXlVU2Q7XHJcbiAgICBpZiAoIWFjY1tpZF0pIHtcclxuICAgICAgYWNjW2lkXSA9IHsgaWQsIG5hbWUsIGRheVBheSwgd29ya0Q6IDAsIHRvdGFsOiAwIH1cclxuICAgIH1cclxuICAgIGFjY1tpZF0udG90YWwgKz0gcGFyc2VGbG9hdChpdGVtLnRvdGFsV29ya0RheSlcclxuICAgIGFjY1tpZF0ud29ya0QgKz0gcGFyc2VGbG9hdChpdGVtLndvcmtOdW1iZXIpXHJcbiAgICByZXR1cm4gYWNjXHJcbiAgfSwge30pXHJcbiAgY29uc3QgdG90YWxBbW91bnQyID0gT2JqZWN0LmtleXMocGxhbmluZ09iamVjdCkubWFwKChyb3cpID0+IHBsYW5pbmdPYmplY3Rbcm93XSlcclxuXHJcbiAgY29uc3QgW3RvdGFsQW1vdW50LCBzZXRUb3RhbEFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG90YWxBbW91bnRQbGFuaW5nLCBzZXRUb3RhbEFtb3VudFBsYW5pbmddID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRvdGFsQW1vdW50MSA9IE9iamVjdC5rZXlzKGV4cGVuc2VzKS5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyBwYXJzZUZsb2F0KGV4cGVuc2VzW3Jvd10pLCAwKVxyXG4gICAgc2V0VG90YWxBbW91bnQodG90YWxBbW91bnQxKVxyXG4gICAgY29uc3QgdG90YWxQYXlSb2xsID0gdG90YWxBbW91bnQyPy5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyByb3cudG90YWwsIDApO1xyXG4gICAgc2V0VG90YWxBbW91bnRQbGFuaW5nKHRvdGFsUGF5Um9sbClcclxuICB9LCBbZXhwZW5zZXMsIHRvdGFsQW1vdW50Ml0pXHJcblxyXG4gIGNvbnN0IHRvdGFsQWR2YW5jZXMgPSBhZHZhbmNlcy5yZWR1Y2UoKHN1bSwgcGF5KSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0QW10ID0gcGF5LlRvdGFsQW1vdW50Py5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZCkucmVkdWNlKChzLCBpKSA9PiBzICsgcGFyc2VGbG9hdChpLnRvdGFsKSwgMCkgfHwgMFxyXG4gICAgcmV0dXJuIHN1bSArIHByb2plY3RBbXRcclxuICB9LCAwKVxyXG4gIGNvbnN0IFtzaG93Miwgc2V0U2hvdzJdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgaGFuZGxlU2hvdzIgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvdzIoZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGZpbHRlcmVkUm93cyA9IHByb2plY3QuZmlsdGVyKHJvdyA9PiAhaGlkZGVuLnNvbWUoKHJvdzIpID0+IHJvdzIuaWRSb3cgPT09IHJvdy5faWQpKVxyXG5cclxuICB7LyoqIFNlYXJjaCBzdGFydCAqLyB9XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdmFsdWUyLCBzZXRWYWx1ZTJdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBwcm9qZWN0LmZpbmRJbmRleChyb3cgPT4gcm93Ll9pZCA9PT0gaWQpO1xyXG4gICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHNldFZhbHVlKHNlbGVjdGVkSW5kZXgpXHJcbiAgICB9XHJcbiAgfSwgW3Byb2plY3QsIGlkXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGZpbHRlcmVkUm93cy5maW5kSW5kZXgocm93ID0+IHJvdy5faWQgPT09IGlkKTtcclxuICAgIGlmIChzZWxlY3RlZEluZGV4ICE9PSAtMSkge1xyXG4gICAgICBzZXRWYWx1ZShzZWxlY3RlZEluZGV4KVxyXG4gICAgfVxyXG4gIH0sIFtmaWx0ZXJlZFJvd3MsIGlkXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlMiA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUyKG5ld1ZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRTZWFyY2godmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IG5ld0FycmF5ID0gc2VhcmNoICE9PSAnJyA/IHByb2plY3QuZmlsdGVyKChyb3cpID0+XHJcbiAgICByb3cucHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIHJvdy5wcm9qZWN0TnVtYmVyLnRvU3RyaW5nKCkuaW5jbHVkZXMoc2VhcmNoKSB8fFxyXG4gICAgcm93LmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICByb3cuY3VzdG9tZXJOYW1lICYmIHJvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXHJcbiAgKSA6IHByb2plY3RcclxuICBjb25zdCBuZXdBcnJheTIgPSBzZWFyY2ggIT09ICcnID8gZmlsdGVyZWRSb3dzLmZpbHRlcigocm93KSA9PlxyXG4gICAgcm93LnByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICByb3cuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIHJvdy5wcm9qZWN0TnVtYmVyLnRvU3RyaW5nKCkuaW5jbHVkZXMoc2VhcmNoKSB8fFxyXG4gICAgcm93LmN1c3RvbWVyTmFtZSAmJiByb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxyXG4gICkgOiBmaWx0ZXJlZFJvd3NcclxuXHJcbiAgey8qKiBTZWFyY2ggZW5kICovIH1cclxuICB7LyoqIENvbW1lbnRzIHN0YXJ0cyAqLyB9XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuICBjb25zdCBbYW5jaG9yRWwxLCBzZXRBbmNob3JFbDFdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgb3BlbjEgPSBCb29sZWFuKGFuY2hvckVsMSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2syID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbDEoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU1lbnUyID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwxKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzaG93MSwgc2V0U2hvdzFdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgaGFuZGxlU2hvdzEgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvdzEoZSk7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0NvbW1lbnRzMSwgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaENvbW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vY29tbWVudGApXHJcbiAgICAgICAgY29uc3QgcmVzcCA9IHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LkNvbW1lbnRJbmZvLmlkSW5mbyA9PT0gaWQpXHJcbiAgICAgICAgc2V0Q29tbWVudHMocmVzcC5yZXZlcnNlKCkpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoQ29tbWVudCgpXHJcbiAgfSwgW2lkXSlcclxuICBjb25zdCBDb21tZW50SW5mbyA9XHJcbiAge1xyXG4gICAgaWRJbmZvOiBpZCxcclxuICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lLFxyXG4gICAgcmVhc29uXHJcbiAgfVxyXG4gIHsvKiogTG9hZGluZyBTdGFydCAqLyB9XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcblxyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG5cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuICB7LyoqIExvYWRpbmcgRW5kICovIH1cclxuICBjb25zdCBkYXRlQ29tbWVudCA9IGRheWpzKERhdGUubm93KCkpO1xyXG4gIGNvbnN0IFtzeW5jaHJvLCBzZXRTeW5jaHJvXSA9IHVzZVN0YXRlKCdmYWxzZScpXHJcbiAgY29uc3QgaGFuZGxlU3luY2VkID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgdXBkYXRlUHVyY2hhc2UgPSByZWxhdGVkUHVyY2hhc2UubWFwKChyb3cpID0+IHtcclxuICAgICAgcmV0dXJuIGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1wdXJjaGFzZS8ke3Jvdy5faWR9YCwge1xyXG4gICAgICAgIGl0ZW1zOiByb3cuaXRlbXNcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbCh1cGRhdGVQdXJjaGFzZSk7XHJcbiAgICAgIHNldFN5bmNocm8oJ3RydWUnKVxyXG4gICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnQW4gZXJyb3IgYXMgb2NjdXInKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgdXBkYXRlRm9ySXRlbUJ1eSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IHNhdmVBdHRlbmRhbmNlID0gcHVyY2hhc2VJbmZvLm1hcCgocm93KSA9PiB7XHJcbiAgICAgIHJldHVybiBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtcHVyY2hhc2UvJHtyb3cuX2lkfWAsIHJvdylcclxuICAgIH0pXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChzYXZlQXR0ZW5kYW5jZSk7XHJcbiAgICAgIHNldFN5bmNocm8oJ3RydWUnKVxyXG4gICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnQW4gZXJyb3IgYXMgb2NjdXInKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRFZGl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIENvbW1lbnRJbmZvLFxyXG4gICAgICBkYXRlQ29tbWVudFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtY29tbWVudC9gLCBkYXRhKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgc2V0UmVhc29uKFwiXCIpO1xyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgIHNldENvbW1lbnRzKFtuZXdEYXRhLCAuLi5Db21tZW50czFdKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHsvKiogQ29tbWVudHMgZW5kICovIH1cclxuXHJcbiAgY29uc3QgY29tcG9uZW50UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgaGFuZGxlUHJpbnQgPSB1c2VSZWFjdFRvUHJpbnQoe1xyXG4gICAgY29udGVudDogKCkgPT4gY29tcG9uZW50UmVmLmN1cnJlbnQsXHJcbiAgICBkb2N1bWVudFRpdGxlOiAnUC0nICsgU3RyaW5nKHByb2plY3ROdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIEZvciAnICsgY3VzdG9tZXJOYW1lMSArICcgKCcgKyBwcm9qZWN0TmFtZSArICcpJyxcclxuICAgIG9uQmVmb3JlR2V0Q29udGVudDogKCkgPT4ge1xyXG4gICAgICBjb25zdCBQQUdFX0hFSUdIVCA9IDEwNDU7XHJcbiAgICAgIGNvbnN0IHByaW50RWxlbWVudCA9IGNvbXBvbmVudFJlZi5jdXJyZW50O1xyXG4gICAgICBpZiAocHJpbnRFbGVtZW50KSB7XHJcbiAgICAgICAgcHJpbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLWNsYXNzLWZvci1oZWlnaHRcIilcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBwcmludEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZQYWdlID0gTWF0aC5jZWlsKGhlaWdodCAvIFBBR0VfSEVJR0hUKVxyXG4gICAgICAgIGlmIChudW1iZXJPZlBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICBjb25zdCBoZWlnaHRXaXRoU2luZ2xlSGVhZGVyID0gbnVtYmVyT2ZQYWdlICogUEFHRV9IRUlHSFRcclxuICAgICAgICAgIGxldCByZXF1aXJlZEhlaWdodCA9IGhlaWdodFdpdGhTaW5nbGVIZWFkZXJcclxuICAgICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHByaW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRoZWFkXCIpPy5bMF0/LmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgY29uc3QgZm9vdGVySGVpZ2h0ID0gcHJpbnRFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGZvb3RcIik/LlswXT8uY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICByZXF1aXJlZEhlaWdodCAtPSAobnVtYmVyT2ZQYWdlIC0gMSkgKiAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KVxyXG4gICAgICAgICAgcHJpbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke3JlcXVpcmVkSGVpZ2h0fXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZW1wLWNsYXNzLWZvci1oZWlnaHRcIilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQWZ0ZXJQcmludDogKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcmludEVsZW1lbnQgPSBjb21wb25lbnRSZWYuY3VycmVudDtcclxuICAgICAgaWYgKHByaW50RWxlbWVudCkge1xyXG4gICAgICAgIHByaW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgYXV0b2BcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgW3ByaW50RGF0YSwgc2V0UHJpbnREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByaW50RGF0YSkge1xyXG4gICAgICBoYW5kbGVQcmludCgpO1xyXG4gICAgfVxyXG4gIH0sIFtwcmludERhdGFdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblByaW50ID0gKGRhdGEpID0+IHtcclxuICAgIHNldFByaW50RGF0YShkYXRhKTtcclxuICAgIHNldEFuY2hvckVsMShudWxsKTtcclxuICB9O1xyXG4gIGNvbnN0IFt2YWx1ZTMsIHNldFZhbHVlM10gPSBSZWFjdC51c2VTdGF0ZSgnMScpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RhYlByb2plY3RWaWV3JylcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgc2V0VmFsdWUzKHJlc3VsdClcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZTMgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBjaGFuZ2VWYWx1ZSA9IG5ld1ZhbHVlXHJcbiAgICBzZXRWYWx1ZTMoY2hhbmdlVmFsdWUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RhYlByb2plY3RWaWV3JywgY2hhbmdlVmFsdWUpXHJcbiAgfTtcclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkYXRhMSA9IHB1cmNoYXNlLm1hcCgocm93KSA9PiAoe1xyXG4gICAgbnVtYmVyOiAnUFVSLScgKyBTdHJpbmcocm93LnB1cmNoYXNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpLFxyXG4gICAgY3VzdG9tZXI6IHJvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLFxyXG4gICAgcHJvamVjdE5hbWU6IHJvdy5wcm9qZWN0TmFtZS5wcm9qZWN0TmFtZSxcclxuICAgIHB1cmNoYXNlRGF0ZTogZGF5anMocm93LnB1cmNoYXNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyksXHJcbiAgfSkpXHJcbiAgY29uc3QgZGF0YTUgPSBpdGVtcy5tYXAoKEl0ZW0sIGkpID0+IHtcclxuICAgIHJldHVybiAoe1xyXG4gICAgICBubzogaSArIDEsXHJcbiAgICAgIGl0ZW06IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUsXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogSXRlbS5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgIGl0ZW1RdHk6IEl0ZW0uaXRlbVF0eSxcclxuICAgICAgaXRlbUNvc3Q6ICckJyArIEl0ZW0uaXRlbUNvc3QsXHJcbiAgICAgIHRvdGFsQ29zdDogJyQnICsgSXRlbS50b3RhbENvc3QsXHJcbiAgICAgIGl0ZW1CdXk6IEl0ZW0uaXRlbUJ1eSxcclxuICAgICAgdG90YWxHZW5lcmFsZTogJyQnICsgSXRlbS50b3RhbEdlbmVyYWxlLFxyXG4gICAgICBpdGVtT3V0OiBJdGVtLml0ZW1PdXQsXHJcbiAgICAgIHRvdGFsQ29zdDE6ICckJyArIHBhcnNlRmxvYXQoSXRlbS5pdGVtT3V0ICogSXRlbS5pdGVtQ29zdCkudG9GaXhlZCgyKSxcclxuICAgIH0pXHJcbiAgfSlcclxuICBjb25zdCBkYXRhNyA9IHB1cmNoYXNlLm1hcCgocm93KSA9PiAoe1xyXG4gICAgbm86ICcnLFxyXG4gICAgbm8xOiAnU3ViVG90YWwnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgbGFib3JRdHk6ICcnLFxyXG4gICAgYWRqdXN0bWVudE51bWJlcjogJycsXHJcbiAgICBwdXJjaGFzZUFtb3VudDE6ICckJyArIHJvdy5wdXJjaGFzZUFtb3VudDEsXHJcbiAgICBwdXJjaGFzZUFtb3VudDI6ICckJyArIHJvdy5wdXJjaGFzZUFtb3VudDIsXHJcbiAgICBwdXJjaGFzZUFtb3VudDM6ICckJyArIHRvdGFsR2VuZXJhbE91dENvc3QsXHJcbiAgfSkpXHJcblxyXG4gIGNvbnN0IGRhdGE4ID0gZXhwZW5zZXNJbmZvLm1hcCgoSXRlbSwgaSkgPT4ge1xyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIG5vOiAnRC0nICsgU3RyaW5nKEl0ZW0uZXhwZW5zZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKSxcclxuICAgICAgZGF0ZTogZGF5anMoSXRlbS5kYXRlKS5mb3JtYXQoJ0RELU1NTU0tWVlZWScpLFxyXG4gICAgICBjYXRlZ29yeTogSXRlbS5jYXRlZ29yeSxcclxuICAgICAgZGVzY3JpcHRpb246IEl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgIGl0ZW1Db3N0OiBcIlwiLFxyXG4gICAgICB0b3RhbENvc3Q6IFwiXCIsXHJcbiAgICAgIGl0ZW1CdXk6IFwiXCIsXHJcbiAgICAgIHRvdGFsR2VuZXJhbGU6IFwiXCIsXHJcbiAgICAgIGl0ZW1PdXQ6IFwiXCIsXHJcbiAgICAgIHRvdGFsQ29zdDE6ICckJyArIEl0ZW0udG90YWwsXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGRhdGE5ID0gT2JqZWN0LmtleXMoZXhwZW5zZXMpPy5tYXAoKHJvdykgPT4gKHtcclxuICAgIG5vOiAnJyxcclxuICAgIG5vMTogYCR7cm93fSBUb3RhbGAsXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICBsYWJvclF0eTogJycsXHJcbiAgICBhZGp1c3RtZW50TnVtYmVyOiAnJyxcclxuICAgIHB1cmNoYXNlQW1vdW50MTogJycsXHJcbiAgICBwdXJjaGFzZUFtb3VudDI6ICcnLFxyXG4gICAgcHVyY2hhc2VBbW91bnQzOiAnJCcgKyBleHBlbnNlc1tyb3ddLnRvRml4ZWQoMiksXHJcbiAgfSkpXHJcbiAgY29uc3QgZGF0YTEwID0gW1xyXG4gICAge1xyXG4gICAgICBubzogJycsXHJcbiAgICAgIG5vMTogJ3N1YiBUb3RhbCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgbGFib3JRdHk6ICcnLFxyXG4gICAgICBhZGp1c3RtZW50TnVtYmVyOiAnJyxcclxuICAgICAgcHVyY2hhc2VBbW91bnQxOiAnJyxcclxuICAgICAgcHVyY2hhc2VBbW91bnQyOiAnJyxcclxuICAgICAgcHVyY2hhc2VBbW91bnQzOiAnJCcgKyB0b3RhbEFtb3VudC50b0ZpeGVkKDIpLFxyXG4gICAgfVxyXG4gIF1cclxuICBjb25zdCBkYXRhMTEgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5vOiAnJyxcclxuICAgICAgbm8xOiAnVG90YWwgR2VuZXJhbCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgbGFib3JRdHk6ICcnLFxyXG4gICAgICBhZGp1c3RtZW50TnVtYmVyOiAnJyxcclxuICAgICAgcHVyY2hhc2VBbW91bnQxOiAnJyxcclxuICAgICAgcHVyY2hhc2VBbW91bnQyOiAnJyxcclxuICAgICAgcHVyY2hhc2VBbW91bnQzOiAnJCcgKyBwYXJzZUZsb2F0KHRvdGFsQW1vdW50ICsgdG90YWxHZW5lcmFsT3V0Q29zdCArIHRvdGFsQW1vdW50UGxhbmluZykudG9GaXhlZCgyKSxcclxuICAgIH1dXHJcblxyXG4gIGNvbnN0IGV4cG9ydFRvRXhjZWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB3b3JrYm9vayA9IG5ldyBFeGNlbEpTLldvcmtib29rKCk7XHJcbiAgICBjb25zdCB3b3JrU2hlZXQgPSB3b3JrYm9vay5hZGRXb3Jrc2hlZXQoJ1NoZWV0MScpO1xyXG4gICAgY29uc3QgY29sdW1uczEgPSBbXHJcbiAgICAgIHsgaGVhZGVyOiBcIiNcIiwga2V5OiAnbnVtYmVyJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIkN1c3RvbWVyIE5hbWVcIiwga2V5OiAnY3VzdG9tZXInLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiUHJvamVjdCBOYW1lXCIsIGtleTogJ3Byb2plY3ROYW1lJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIkRhdGVcIiwga2V5OiAncHVyY2hhc2VEYXRlJywgd2lkdGg6IDIwIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgY29sdW1uczUgPSBbXHJcbiAgICAgIHsgaGVhZGVyOiBcIiNcIiwga2V5OiAnbm8nLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiSXRlbVwiLCBrZXk6ICdpdGVtJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIkl0ZW0gRGVzY3JpcHRpb25cIiwga2V5OiAnaXRlbURlc2NyaXB0aW9uJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIlF0eVwiLCBrZXk6ICdpdGVtUXR5Jywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIlJhdGVcIiwga2V5OiAnaXRlbUNvc3QnLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiVG90YWwgQ29zdFwiLCBrZXk6ICd0b3RhbENvc3QnLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiQnV5XCIsIGtleTogJ2l0ZW1CdXknLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiVG90YWwgQnV5XCIsIGtleTogJ3RvdGFsR2VuZXJhbGUnLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiUXR5IE91dFwiLCBrZXk6ICdpdGVtT3V0Jywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIlRvdGFsIENvc3RcIiwga2V5OiAndG90YWxDb3N0MScsIHdpZHRoOiAyMCB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGNvbHVtbnM2ID0gW1xyXG4gICAgICB7IGhlYWRlcjogXCIjXCIsIGtleTogJ25vJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIkRhdGVcIiwga2V5OiAnZGF0ZScsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJDYXRlZ29yeVwiLCBrZXk6ICdjYXRlZ29yeScsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJEZXNjcmlwdGlvblwiLCBrZXk6ICdkZXNjcmlwdGlvbicsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJcIiwga2V5OiAnaXRlbUNvc3QnLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiXCIsIGtleTogJ3RvdGFsQ29zdCcsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJcIiwga2V5OiAnaXRlbUJ1eScsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJcIiwga2V5OiAndG90YWxHZW5lcmFsZScsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJcIiwga2V5OiAnaXRlbU91dCcsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJUb3RhbCBDb3N0XCIsIGtleTogJ3RvdGFsQ29zdDEnLCB3aWR0aDogMjAgfSxcclxuICAgIF07XHJcblxyXG4gICAgd29ya1NoZWV0LmFkZFJvdyhbXSk7XHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KGNvbHVtbnMxLm1hcChjb2wgPT4gY29sLmhlYWRlcikpO1xyXG4gICAgZGF0YTEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgd29ya1NoZWV0LmFkZFJvdyhbaXRlbS5udW1iZXIsIGl0ZW0uY3VzdG9tZXIsIGl0ZW0ucHJvamVjdE5hbWUsIGl0ZW0ucHVyY2hhc2VEYXRlXSlcclxuICAgIH0pO1xyXG4gICAgd29ya1NoZWV0LmFkZFJvdyhbXSk7XHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFsnSXRlbSddKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coY29sdW1uczUubWFwKGNvbCA9PiBjb2wuaGVhZGVyKSlcclxuICAgIGRhdGE1LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHdvcmtTaGVldC5hZGRSb3coW2l0ZW0ubm8sIGl0ZW0uaXRlbSwgaXRlbS5pdGVtRGVzY3JpcHRpb24sIGl0ZW0uaXRlbVF0eSwgaXRlbS5pdGVtQ29zdCwgaXRlbS50b3RhbENvc3QsIGl0ZW0uaXRlbUJ1eSwgaXRlbS50b3RhbEdlbmVyYWxlLCBpdGVtLml0ZW1PdXQsIGl0ZW0udG90YWxDb3N0XSlcclxuICAgIH0pO1xyXG4gICAgd29ya1NoZWV0LmFkZFJvdyhbXSk7XHJcbiAgICBkYXRhNy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB3b3JrU2hlZXQuYWRkUm93KFtpdGVtLm5vLCBpdGVtLm5vMSwgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS5sYWJvclF0eSwgaXRlbS5hZGp1c3RtZW50TnVtYmVyLCBpdGVtLnB1cmNoYXNlQW1vdW50MSwgaXRlbS5wdXJjaGFzZUFtb3VudDIsIGl0ZW0ucHVyY2hhc2VBbW91bnQzXSlcclxuICAgIH0pO1xyXG4gICAgd29ya1NoZWV0LmFkZFJvdyhbXSk7XHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFsnRXhwZW5zZXMnXSk7XHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KGNvbHVtbnM2Lm1hcChjb2wgPT4gY29sLmhlYWRlcikpXHJcbiAgICBkYXRhOC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB3b3JrU2hlZXQuYWRkUm93KFtpdGVtLm5vLCBpdGVtLmRhdGUsIGl0ZW0uY2F0ZWdvcnksIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0uaXRlbUNvc3QsIGl0ZW0udG90YWxDb3N0LCBpdGVtLml0ZW1CdXksIGl0ZW0udG90YWxHZW5lcmFsZSwgaXRlbS5pdGVtT3V0LCBpdGVtLnRvdGFsQ29zdDFdKVxyXG4gICAgfSk7XHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFtdKTtcclxuICAgIGRhdGE5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHdvcmtTaGVldC5hZGRSb3coW2l0ZW0ubm8sIGl0ZW0ubm8xLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLmxhYm9yUXR5LCBpdGVtLmFkanVzdG1lbnROdW1iZXIsIGl0ZW0ucHVyY2hhc2VBbW91bnQxLCBpdGVtLnB1cmNoYXNlQW1vdW50MiwgaXRlbS5wdXJjaGFzZUFtb3VudDNdKVxyXG4gICAgfSk7XHJcbiAgICBkYXRhMTAuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgd29ya1NoZWV0LmFkZFJvdyhbaXRlbS5ubywgaXRlbS5ubzEsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0ubGFib3JRdHksIGl0ZW0uYWRqdXN0bWVudE51bWJlciwgaXRlbS5wdXJjaGFzZUFtb3VudDEsIGl0ZW0ucHVyY2hhc2VBbW91bnQyLCBpdGVtLnB1cmNoYXNlQW1vdW50M10pXHJcbiAgICB9KTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coW10pO1xyXG4gICAgZGF0YTExLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHdvcmtTaGVldC5hZGRSb3coW2l0ZW0ubm8sIGl0ZW0ubm8xLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLmxhYm9yUXR5LCBpdGVtLmFkanVzdG1lbnROdW1iZXIsIGl0ZW0ucHVyY2hhc2VBbW91bnQxLCBpdGVtLnB1cmNoYXNlQW1vdW50MiwgaXRlbS5wdXJjaGFzZUFtb3VudDNdKVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCB3b3JrYm9vay54bHN4LndyaXRlQnVmZmVyKCk7XHJcbiAgICBjb25zdCBib2xkID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgfSk7XHJcbiAgICBzYXZlQXMoYm9sZCwgYCR7J1AtJyArIFN0cmluZyhwcm9qZWN0TnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpICsgJyBGb3IgJyArIGN1c3RvbWVyTmFtZTEgKyAnICgnICsgcHJvamVjdE5hbWUgKyAnKSd9Lnhsc3hgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRXhwb3J0Q2F0ZWdvcnlFeGNlbCA9IGFzeW5jIChjYXRlZ29yeSwgbGlzdCwgcHJvamVjdE5hbWUpID0+IHtcclxuICAgIGNvbnN0IHdvcmtib29rID0gbmV3IEV4Y2VsSlMuV29ya2Jvb2soKTtcclxuICAgIGNvbnN0IHdvcmtTaGVldCA9IHdvcmtib29rLmFkZFdvcmtzaGVldCgnU2hlZXQxJyk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgICB7IGhlYWRlcjogXCIjXCIsIGtleTogJ25vJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIkRhdGVcIiwga2V5OiAnZGF0ZScsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJDYXRlZ29yeVwiLCBrZXk6ICdjYXRlZ29yeScsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJEZXNjcmlwdGlvblwiLCBrZXk6ICdkZXNjcmlwdGlvbicsIHdpZHRoOiA2MCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJUb3RhbFwiLCBrZXk6ICd0b3RhbCcsIHdpZHRoOiAyMCB9LFxyXG4gICAgXTtcclxuXHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFtdKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coW2BDYXRlZ29yeTogJHtjYXRlZ29yeX1gXSk7XHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFtgUHJvamVjdDogJHtwcm9qZWN0TmFtZX1gXSk7XHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFtdKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coY29sdW1ucy5tYXAoY29sID0+IGNvbC5oZWFkZXIpKTtcclxuXHJcbiAgICBsaXN0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgd29ya1NoZWV0LmFkZFJvdyhbXHJcbiAgICAgICAgaXRlbS5leHBlbnNlTnVtYmVyID8gYEQtJHtTdHJpbmcoaXRlbS5leHBlbnNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfWAgOiBpICsgMSxcclxuICAgICAgICBkYXlqcyhpdGVtLmRhdGUpLmZvcm1hdCgnREQtTU1NTS1ZWVlZJyksXHJcbiAgICAgICAgaXRlbS5jYXRlZ29yeSxcclxuICAgICAgICBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGl0ZW0udG90YWwudG9GaXhlZCgyKVxyXG4gICAgICBdKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdvcmtTaGVldC5hZGRSb3coW10pO1xyXG4gICAgY29uc3QgdG90YWwgPSBsaXN0LnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBwYXJzZUZsb2F0KGl0ZW0udG90YWwpLCAwKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coWycnLCAnJywgJycsICdUb3RhbCcsIHRvdGFsLnRvRml4ZWQoMildKTtcclxuXHJcbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCB3b3JrYm9vay54bHN4LndyaXRlQnVmZmVyKCk7XHJcbiAgICBjb25zdCBib2xkID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgfSk7XHJcbiAgICBzYXZlQXMoYm9sZCwgYCR7Y2F0ZWdvcnl9X0V4cGVuc2VzXyR7cHJvamVjdE5hbWUucmVwbGFjZSgvXFxzKy9nLCAnXycpfS54bHN4YCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVFeHBvcnRFbXBsb3llZUV4Y2VsID0gYXN5bmMgKGxpc3QsIHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICBjb25zdCB3b3JrYm9vayA9IG5ldyBFeGNlbEpTLldvcmtib29rKCk7XHJcbiAgICBjb25zdCB3b3JrU2hlZXQgPSB3b3JrYm9vay5hZGRXb3Jrc2hlZXQoJ1NoZWV0MScpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgICAgeyBoZWFkZXI6IFwiTmFtZVwiLCBrZXk6ICduYW1lJywgd2lkdGg6IDMwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIkRheXMgV29ya3NcIiwga2V5OiAnd29ya0QnLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiVG90YWwgUGF5IERheVwiLCBrZXk6ICdkYXlQYXknLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiVG90YWwgUGF5XCIsIGtleTogJ3RvdGFsJywgd2lkdGg6IDIwIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHdvcmtTaGVldC5hZGRSb3coW10pO1xyXG4gICAgd29ya1NoZWV0LmFkZFJvdyhbYENhdGVnb3J5OiBFbXBsb3llZSBFeHBlbnNlc2BdKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coW2BQcm9qZWN0OiAke3Byb2plY3ROYW1lfWBdKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coW10pO1xyXG4gICAgd29ya1NoZWV0LmFkZFJvdyhjb2x1bW5zLm1hcChjb2wgPT4gY29sLmhlYWRlcikpO1xyXG5cclxuICAgIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB3b3JrU2hlZXQuYWRkUm93KFtcclxuICAgICAgICBpdGVtLm5hbWUsXHJcbiAgICAgICAgYCR7aXRlbS53b3JrRH0gZGF5c2AsXHJcbiAgICAgICAgaXRlbS5kYXlQYXkudG9GaXhlZCgyKSxcclxuICAgICAgICBpdGVtLnRvdGFsLnRvRml4ZWQoMilcclxuICAgICAgXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFtdKTtcclxuICAgIGNvbnN0IGdyYW5kVG90YWwgPSBsaXN0LnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBwYXJzZUZsb2F0KGl0ZW0udG90YWwpLCAwKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coWycnLCAnJywgJ1RvdGFsJywgZ3JhbmRUb3RhbC50b0ZpeGVkKDIpXSk7XHJcblxyXG4gICAgY29uc3QgYnVmZmVyID0gYXdhaXQgd29ya2Jvb2sueGxzeC53cml0ZUJ1ZmZlcigpO1xyXG4gICAgY29uc3QgYm9sZCA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nIH0pO1xyXG4gICAgc2F2ZUFzKGJvbGQsIGBFbXBsb3llZV9FeHBlbnNlc18ke3Byb2plY3ROYW1lLnJlcGxhY2UoL1xccysvZywgJ18nKX0ueGxzeGApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUm93Myhwcm9wcykge1xyXG4gICAgY29uc3QgeyByb3cgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgeyBpbmRleCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7IHJlbGF0ZWRVbml0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8dHIgc3R5bGU9e3sgJyYgPiAqJzogeyBib3JkZXJCb3R0b206ICd1bnNldCcgfSB9fT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcm93Lm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+PHNwYW4+e2luZGV4ICsgMX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXs4fT57cm93Lm5ld0Rlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT57b3BlbiA/IDxLZXlib2FyZEFycm93VXBJY29uIC8+IDogPHNwYW4+e2luZGV4ICsgMX08L3NwYW4+fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzMwMHB4JywgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBoaWRkZW49e3Jvdy5pdGVtTmFtZSA/IHJvdy5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JyA6ICcnfT57cm93Lml0ZW1OYW1lLml0ZW1OYW1lID8gcm93Lml0ZW1OYW1lLml0ZW1OYW1lIDogJyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntyb3cuaXRlbURlc2NyaXB0aW9ufSAoIHtyZWxhdGVkVW5pdCAhPT0gdW5kZWZpbmVkID8gcmVsYXRlZFVuaXQuaXRlbUJyYW5kLnRvVXBwZXJDYXNlKCkgOiAnJ30gKSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+e3Jvdy5pdGVtUXR5fSB7cmVsYXRlZFVuaXQgIT09IHVuZGVmaW5lZCA/IHJlbGF0ZWRVbml0LnVuaXQudG9VcHBlckNhc2UoKSA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+e3Jvdy5pdGVtQ29zdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPiQ8L3NwYW4+PHNwYW4+eyAocm93LnRvdGFsQ29zdCB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPntyb3cuaXRlbUJ1eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPiQ8L3NwYW4+PHNwYW4+eyAocm93LnRvdGFsR2VuZXJhbGUgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIH08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj1cImxlZnRcIj48c3Bhbj57cm93Lml0ZW1PdXR9IHtyZWxhdGVkVW5pdCAhPT0gdW5kZWZpbmVkID8gcmVsYXRlZFVuaXQudW5pdC50b1VwcGVyQ2FzZSgpIDogJyd9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+PHNwYW4+eyAoKHJvdy5pdGVtTmFtZT8uX2lkID09PSB1bmRlZmluZWQgfHwgcm93Lml0ZW1OYW1lPy5faWQgPT09IFwiXCIpICYmIChOdW1iZXIocm93Lml0ZW1PdXQpIHx8IDApID09PSAwID8gKHJvdy50b3RhbEdlbmVyYWxlIHx8IDApIDogKHJvdy5pdGVtT3V0ICogcm93Lml0ZW1Db3N0IHx8IDApKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIHBhZGRpbmdCb3R0b206IDAsIHBhZGRpbmdUb3A6IDAgfX0gY29sU3Bhbj17OX0+XHJcbiAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3sgbWFyZ2luOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICBJdGVtIE91dCBJbmZvXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PiBRdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtYXREYXRlMj8uZmlsdGVyKChyb3cxKSA9PiByb3cxLml0ZW1zUXR5QXJyYXkuc29tZSgoSXRlbSkgPT4gSXRlbS5pdGVtTmFtZS5faWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkKSkubWFwKChyb3cxLCBpbmRleDEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXgxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cxLm91dE51bWJlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+e2RheWpzKHJvdzEuaXRlbU91dERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWS1ISDptbScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT57cm93MS50eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cxLml0ZW1zUXR5QXJyYXkuZmlsdGVyKChJdGVtMSkgPT4gSXRlbTEuaXRlbU5hbWUuX2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCkubWFwKChJdGVtMSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntJdGVtMS5uZXdJdGVtT3V0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFJvdyhwcm9wcykge1xyXG4gICAgY29uc3QgeyByb3cgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgeyBpbmRleCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBoYW5kbGVQcmludExvY2FsID0gdXNlUmVhY3RUb1ByaW50KHtcclxuICAgICAgY29udGVudDogKCkgPT4gY29tcG9uZW50UmVmLmN1cnJlbnQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeUxpc3QgPSBleHBlbnNlc0luZm8uZmlsdGVyKChyb3cxKSA9PiByb3cxLmNhdGVnb3J5ID09PSByb3cpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8dHIgc3R5bGU9e3sgJyYgPiAqJzogeyBib3JkZXJCb3R0b206ICd1bnNldCcgfSB9fT5cclxuICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0+XHJcbiAgICAgICAgICAgIHtvcGVuID8gPEtleWJvYXJkQXJyb3dVcEljb24gLz4gOiA8c3Bhbj57aW5kZXggKyAxfTwvc3Bhbj59XHJcblxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBjb2xTcGFuPXs0fSBhbGlnbj1cImxlZnRcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3d9PC90ZD5cclxuICAgICAgICAgIDx0ZCBjb2xTcGFuPXs0fSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+PHNwYW4+JDwvc3Bhbj48c3Bhbj57ZXhwZW5zZXNbcm93XS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgcGFkZGluZ0JvdHRvbTogMCwgcGFkZGluZ1RvcDogMCB9fSBjb2xTcGFuPXs5fT5cclxuICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVufSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17eyBtYXJnaW46IDEgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICBFeHBlbnNlcyBJbmZvXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUV4cG9ydENhdGVnb3J5RXhjZWwocm93LCBjYXRlZ29yeUxpc3QsIHByb2plY3ROYW1lKX0gdGl0bGU9XCJFeHBvcnQgdG8gRXhjZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxFeHBsaWNpdCBzeD17eyBjb2xvcjogJ2dyZWVuJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwic21hbGxcIiBvbkNsaWNrPXtoYW5kbGVQcmludExvY2FsfSB0aXRsZT1cIlByaW50IFBERlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExvY2FsUHJpbnRzaG9wSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVweCcgfX0gcmVmPXtjb21wb25lbnRSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+Q2F0ZWdvcnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZXhwZW5zZXNJbmZvLmZpbHRlcigocm93MSkgPT4gcm93MS5jYXRlZ29yeSA9PT0gcm93KS5tYXAoKHJvdzEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cm93MS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+RC17U3RyaW5nKHJvdzEuZXhwZW5zZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PntkYXlqcyhyb3cxLmRhdGUpLmZvcm1hdCgnREQtTU1NTS1ZWVlZJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT57cm93MS5jYXRlZ29yeX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cxLmRlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cxLnRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezR9PlRvdGFsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT48c3Bhbj4kPC9zcGFuPjxzcGFuPntleHBlbnNlc1tyb3ddLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFJvdzIocHJvcHMpIHtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGhhbmRsZVByaW50TG9jYWwgPSB1c2VSZWFjdFRvUHJpbnQoe1xyXG4gICAgICBjb250ZW50OiAoKSA9PiBjb21wb25lbnRSZWYuY3VycmVudCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8dHIgc3R5bGU9e3sgJyYgPiAqJzogeyBib3JkZXJCb3R0b206ICd1bnNldCcgfSB9fT5cclxuICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0+XHJcbiAgICAgICAgICAgIHtvcGVuID8gPEtleWJvYXJkQXJyb3dVcEljb24gLz4gOiA8c3Bhbj4xPC9zcGFuPn1cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY29sU3Bhbj17NH0gYWxpZ249XCJsZWZ0XCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5FbXBsb3llZTwvdGQ+XHJcbiAgICAgICAgICA8dGQgY29sU3Bhbj17NH0gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPiQ8L3NwYW4+PHNwYW4+e3RvdGFsQW1vdW50UGxhbmluZy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgcGFkZGluZ0JvdHRvbTogMCwgcGFkZGluZ1RvcDogMCB9fSBjb2xTcGFuPXs5fT5cclxuICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVufSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17eyBtYXJnaW46IDEgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICBFeHBlbnNlcyBJbmZvXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUV4cG9ydEVtcGxveWVlRXhjZWwodG90YWxBbW91bnQyLCBwcm9qZWN0TmFtZSl9IHRpdGxlPVwiRXhwb3J0IHRvIEV4Y2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RXhwbGljaXQgc3g9e3sgY29sb3I6ICdncmVlbicgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCIgb25DbGljaz17aGFuZGxlUHJpbnRMb2NhbH0gdGl0bGU9XCJQcmludCBQREZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbFByaW50c2hvcEljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1cHgnIH19IHJlZj17Y29tcG9uZW50UmVmfT5cclxuICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19Pk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+RGF5cyBXb3JrczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5Ub3RhbCBQYXkgRGF5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlRvdGFsIFBheTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQW1vdW50Mj8ubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwibGVmdFwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+e3Jvdy5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj1cImxlZnRcIj48c3Bhbj48L3NwYW4+PHNwYW4+e3Jvdy53b3JrRH0gZGF5czwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+PHNwYW4+JDwvc3Bhbj48c3Bhbj57cm93LmRheVBheS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj1cImxlZnRcIj48c3Bhbj4kPC9zcGFuPjxzcGFuPntyb3cudG90YWwudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgaGFuZGxlU2hvdzE6IGxheW91dEhhbmRsZVNob3cxIH0gPSB1c2VPdXRsZXRDb250ZXh0KCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9e3Nob3cxID09PSAxID8gMTIgOiA5fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXIyJz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZDogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAge2xvYWRpbmdCYXNlID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJzEyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3QuZmlsdGVyKGkgPT4gaS5faWQgPT09IGlkKVxyXG4gICAgICAgICAgICAgICAgICAubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cm93Ll9pZH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcyMHB4JyB9fT4geydQLScgKyBTdHJpbmcocm93LnByb2plY3ROdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9IHwge3Jvdy5wcm9qZWN0TmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyAnZGVtby1jdXN0b21pemVkLW1lbnUnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17b3BlbiA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUVsZXZhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXs8S2V5Ym9hcmRBcnJvd0Rvd25JY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ2dyYXknLCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLWN1c3RvbWl6ZWQtbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW51TGlzdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiAnZGVtby1jdXN0b21pemVkLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zaXRpb25Db21wb25lbnQ9e0ZhZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9Qcm9qZWN0VXBkYXRlVmlldy8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZScgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcyMHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RWRpdDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdzEoMil9PiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19PkNvbW1lbnRzPC9zcGFuPiA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cxKDMpfT4gPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT5IaXN0b3J5PC9zcGFuPjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGJvcmRlckJvdHRvbTogMSwgYm9yZGVyQ29sb3I6ICdkaXZpZGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJMaXN0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGFiIEFQSSB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmIC5NdWlUYWJzLWluZGljYXRvcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk92ZXJ2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW52b2ljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQdXJjaGFzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZHZhbmNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjFcIiBzeD17eyBoZWlnaHQ6ICc1MjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nVGFiICYmIDxMaW5lYXJQcm9ncmVzcyBzeD17eyBwb3NpdGlvbjogJ3N0aWNreScsIHRvcDogMCwgekluZGV4OiAxIH19IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogJzIwcHgnIH19Pntyb3cucHJvamVjdE5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyBmb250U2l6ZTogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGFsaWduPSdsZWZ0Jz5WaXNpdCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RheWpzKHJvdy52aXNpdERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249J2xlZnQnPlN0YXJ0IERhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF5anMocm93LnN0YXJ0RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249J2xlZnQnPlByb2plY3QgTnVtYmVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UC17U3RyaW5nKHJvdy5wcm9qZWN0TnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249J2xlZnQnPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0dXMgPT09IFwiUGVuZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyYXlcIiA6IHJvdy5zdGF0dXMgPT09IFwiT24tR29pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJsdWVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIlN0b3BwZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmVkXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIlBlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJPcmFuZ2VcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyA9PT0gXCJDb21wbGV0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyZWVuXCIgOiBcImJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyB3aWR0aDogJzQ1MHB4JywgbWluSGVpZ2h0OiAnMTkwcHgnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0b3A6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGNvbG9yOiAnZ3JheScsIGZvbnRTaXplOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19PkJ1ZGdldDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3BhbiA+e3BhcnNlRmxvYXQocm93LmJ1ZGdldCB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19Pk1hdGVyaWFsIEV4cGVuc2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+PHNwYW4gPntwYXJzZUZsb2F0KHRvdGFsR2VuZXJhbE91dENvc3QpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICcyMDBweCcgfX0+TGFib3VyIEV4cGVuc2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+PHNwYW4gPntwYXJzZUZsb2F0KHRvdGFsQW1vdW50UGxhbmluZykudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JyB9fT5PdmVyaGVhZCBFeHBlbnNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuID57cGFyc2VGbG9hdCh0b3RhbEFtb3VudCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19PlRvdGFsIEV4cGVuc2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPSdJbnZvaWNlVG90YWwgJz57cGFyc2VGbG9hdCh0b3RhbEFtb3VudCArIHRvdGFsR2VuZXJhbE91dENvc3QgKyB0b3RhbEFtb3VudFBsYW5pbmcpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludm9pY2UgJiYgaW52b2ljZS5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZvaWNlLm1hcCgocm93MSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cm93MS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19Pkludm9pY2VkIFByb2ZpdCAoe3JvdzEuaW52b2ljZU51bWJlcn0pPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT0nSW52b2ljZVRvdGFsICc+e3BhcnNlRmxvYXQocm93MS50b3RhbEludm9pY2UgLSAodG90YWxBbW91bnQgKyB0b3RhbEdlbmVyYWxPdXRDb3N0ICsgdG90YWxBbW91bnRQbGFuaW5nKSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JyB9fT5BZHZhbmNlcyBSZWNlaXZlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3BhbiBjbGFzc05hbWU9J0ludm9pY2VUb3RhbCAnPntwYXJzZUZsb2F0KHRvdGFsQWR2YW5jZXMpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JyB9fT5CYWxhbmNlIFJlbWFpbmluZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3BhbiBjbGFzc05hbWU9J0ludm9pY2VUb3RhbCAnPntwYXJzZUZsb2F0KHJvdy5idWRnZXQgIT09IHVuZGVmaW5lZCA/IHJvdy5idWRnZXQgLSAodG90YWxBbW91bnQgKyB0b3RhbEdlbmVyYWxPdXRDb3N0ICsgdG90YWxBbW91bnRQbGFuaW5nKSA6IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IGZvbnRTaXplOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19PkN1c3RvbWVyIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT57cm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyBmb250U2l6ZTogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JyB9fT5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19Pntyb3cuZGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjJcIiBzeD17eyBoZWlnaHQ6ICc1MjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nVGFiICYmIDxMaW5lYXJQcm9ncmVzcyBzeD17eyBwb3NpdGlvbjogJ3N0aWNreScsIHRvcDogMCwgekluZGV4OiAxIH19IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ludm9pY2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludm9pY2UubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyb3cuX2lkfSBjbGFzc05hbWU9J2ludm9pY2VkZXRhaWxzJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludEhlYWRlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiB0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIiA/IGRhdGE/LmJyYW5jaElkIDogXCJcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+PHAgY2xhc3NOYW1lPSdpbnZvaWNlaHInPkludm9pY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luVG9wOiAnMjVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YWRkcmVzcyBzdHlsZT17eyBsaW5lSGVpZ2h0OiAxLjM1LCB3aWR0aDogJzYwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwID5CaWxsIFRvPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19Pntyb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5jdXN0b21lck5hbWUuYmlsbGluZ0FkZHJlc3N9LHtyb3cuY3VzdG9tZXJOYW1lLmJpbGxpbmdDaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpcnN0VGFibGVcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZm9udFNpemU6ICc4MCUnLCBsZWZ0OiAnODNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPkludm9pY2UgIzwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScgfX0+PHNwYW4gPklOVi17U3RyaW5nKHJvdy5pbnZvaWNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuID5EYXRlPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJyB9fT48c3BhbiA+e2RheWpzKHJvdy5pbnZvaWNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPlN1YmplY3Q8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnIH19PjxzcGFuPntyb3cuaW52b2ljZVN1YmplY3R9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPkRlZmVjdDwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScgfX0+PHNwYW4+e3Jvdy5pbnZvaWNlRGVmZWN0fTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgZm9udFNpemU6ICc4MCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19Pkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PlJhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5EaXNjb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PlRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXRlbXM/Lm1hcCgoSXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0l0ZW0uaWRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT48c3Bhbj57aSArIDF9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezZ9IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PjxzcGFuPntJdGVtLm5ld0Rlc2NyaXB0aW9ufTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGVkVW5pdCA9IGl0ZW0uZmluZCgoSXRlbTEpID0+IEl0ZW0xLl9pZCA9PT0gSXRlbS5pdGVtTmFtZS5faWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0l0ZW0uaWRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+PHNwYW4+e2kgKyAxfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+PHNwYW4+e0l0ZW0uaXRlbU5hbWUuaXRlbU5hbWV9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+PHNwYW4+e0l0ZW0uaXRlbURlc2NyaXB0aW9ufTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT48c3Bhbj57SXRlbS5pdGVtUXR5fSB7cmVsYXRlZFVuaXQgIT09IHVuZGVmaW5lZCA/IHJlbGF0ZWRVbml0LnVuaXQudG9VcHBlckNhc2UoKSA6ICcnfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntJdGVtLml0ZW1SYXRlfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT48c3BhbiBkYXRhLXByZWZpeD4lPC9zcGFuPjxzcGFuPntJdGVtLml0ZW1EaXNjb3VudH08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3Bhbj57SXRlbS5pdGVtQW1vdW50fTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cm93Lm5vdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlyc3RUYWJsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAnODAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gU3ViIFRvdGFsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5DaGVja1R2QSA/ICcnIDogPD48YnIgLz48c3BhbiBjbGFzc05hbWU9J3R4dDEnPihUYXggSW5jbHVzaXZlKTwvc3Bhbj48Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+PHNwYW4+e3Jvdy5zdWJUb3RhbC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc2hpcHBpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48c3Bhbj5TaGlwcGluZzwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3Bhbj57cm93LnNoaXBwaW5nLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFkanVzdG1lbnROdW1iZXIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT57cm93LmFkanVzdG1lbnR9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+PHNwYW4+e3Jvdy5hZGp1c3RtZW50TnVtYmVyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48c3BhbiA+VG90YWw8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+PHNwYW4gPntyb3cudG90YWxJbnZvaWNlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy50b3RhbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48c3BhbiA+QW1vdW50IFBhaWQ8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuID57cm93LnRvdGFsLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAnIzJmODFiNycgfX0+PHNwYW4gPkJhbGFuY2UgRHVlPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgY29sb3I6ICcjMmY4MWI3JyB9fT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntyb3cuYmFsYW5jZUR1ZS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48c3BhbiA+VG90YWwgSW4gV29yZHM8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4+e3Jvdy50b3RhbFd9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JywgbWFyZ2luVG9wOiAnNTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgZm9udFNpemU6ICc4MCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPkJhbms8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+PHNwYW4gPlNPRklCQU5RVUUgU0E8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4gPkVudGl0bGVkPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgZm9udFdlaWdodDogJ2JvbGQnIH19PjxzcGFuID5HTE9CQUwgR0FURSBTQVJMPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuID4gQmFuayBBY2NvdW50PC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgZm9udFdlaWdodDogJ2JvbGQnIH19PjxzcGFuID4wMDAyMzIzMzMzMDIxNDI0NzAyMDA3Mzwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3BhbiA+Q29kZSBTd2lmdDwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT48c3Bhbj5TRkJYQ0RLSVhYWDwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IDEuMzAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5UZXJtcyAmIENvbmRpdGlvbnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnRlcm1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9vdGVyaW52b2ljZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc1cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxFbWFpbEljb24gLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5HbG9iYWxAZ21haWwuY29tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzVweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PFBob25lSWNvbiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPisyNDMgODI3IDcyMiAyMjI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48V2ViSWNvbiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnd3dy5HbG9iYWxHYXRlLnNhcmw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiM1wiIHN4PXt7IGhlaWdodDogJzUyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmdUYWIgJiYgPExpbmVhclByb2dyZXNzIHN4PXt7IHBvc2l0aW9uOiAnc3RpY2t5JywgdG9wOiAwLCB6SW5kZXg6IDEgfX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3B1cmNoYXNlSW5mbz8ubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cm93Ll9pZH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlciBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PjxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5SRUZFUkVOQ0U6IDwvc3Bhbj5QVVIte1N0cmluZyhyb3cucHVyY2hhc2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtvcGVuMSA/ICdkZW1vLWN1c3RvbWl6ZWQtbWVudScgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuMSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUVsZXZhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2syfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEtleWJvYXJkQXJyb3dEb3duSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICdncmF5JywgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3JlLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1jdXN0b21pemVkLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudUxpc3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogJ2RlbW8tY3VzdG9taXplZC1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVuMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTWVudTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtGYWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZU1lbnUyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT5QdXJjaGFzZSBSZWZlcmVuY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvUHVyY2hhc2VGb3JtVXBkYXRlLyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5FZGl0PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9QdXJjaGFzZXNWaWV3QWRtaW5BbGwvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+VmlldzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuUHJpbnQocm93KX0gc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcyMHB4JywgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsUHJpbnRzaG9wSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QcmludDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17ZXhwb3J0VG9FeGNlbH0gc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcyMHB4JywgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGxpY2l0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkV4cG9ydCB0byBFeGNlbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJvdy5zdGF0dXMgPT09ICdEcmFmdCcgfHwgcm93LnN0YXR1cyA9PT0gJ0VzdGltYXRlZCcpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0NvbnZlcnRUb0ludm9pY2UvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbnZlcnQgVG8gSW52b2ljZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyb3cuc3RhdHVzID09PSAnSW52b2ljZWQnIHx8IHJvdy5zdGF0dXMgPT09ICdNYWtlJykgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvQ29udmVydFRvSW52b2ljZS8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZScgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29udmVydCBUbyBJbnZvaWNlIChBZ2Fpbik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qKiAgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaW50SGVhZGVyIGJyYW5jaElkPXt0eXBlb2Ygcm93ICE9PSBcInVuZGVmaW5lZFwiID8gcm93Py5icmFuY2hJZCA6IHR5cGVvZiBkYXRhICE9PSBcInVuZGVmaW5lZFwiID8gZGF0YT8uYnJhbmNoSWQgOiBcIlwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPjxwIGNsYXNzTmFtZT0naW52b2ljZWhyJz5QdXJjaGFzZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luVG9wOiAnMjVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsaW5lSGVpZ2h0OiAxLjM1LCB3aWR0aDogJzYwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19Pntyb3cucHJvamVjdE5hbWUucHJvamVjdE5hbWUudG9VcHBlckNhc2UoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpcnN0VGFibGVcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZm9udFNpemU6ICc4MCUnLCBsZWZ0OiAnODNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17Mn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QWxsT3V0UmV0dXJuICYmIG5ld0FsbE91dFJldHVybi5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTeW5jZWR9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPnN5bmM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXsyfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWxsSXRlbVB1cmNoYXNlICYmIGFsbEl0ZW1QdXJjaGFzZS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dXBkYXRlRm9ySXRlbUJ1eX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+SVBVPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3BhbiA+UHVyICM8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScgfX0+PHNwYW4gPlBVUi17U3RyaW5nKHJvdy5wdXJjaGFzZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3BhbiA+RGF0ZTwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJyB9fT48c3BhbiA+e2RheWpzKHJvdy5wdXJjaGFzZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs5fSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gPkl0ZW1zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19Pk48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMzAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+UXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPlVuaXQgUHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+VG90YWwtTmVlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5CdXk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+VG90YWwtQnV5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPkktT3V0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPlRvdGFsLUNvc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pdGVtcz8uZmlsdGVyKEl0ZW0gPT4gcGFyc2VGbG9hdChJdGVtLml0ZW1RdHkpID49IDAgfHwgcGFyc2VGbG9hdChJdGVtLml0ZW1CdXkpID4gMCB8fCBwYXJzZUZsb2F0KEl0ZW0uaXRlbU91dCkgPiAwIHx8IEl0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkubWFwKChJdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGVkVW5pdCA9IGl0ZW1NYXBbSXRlbS5pdGVtTmFtZT8uX2lkXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdzMga2V5PXtpfSByb3c9e0l0ZW19IGluZGV4PXtpfSByZWxhdGVkVW5pdD17cmVsYXRlZFVuaXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPlN1YlRvdGFsIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPiQ8L3NwYW4+PHNwYW4+e3Jvdy5wdXJjaGFzZUFtb3VudDEudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj1cImxlZnRcIj48c3Bhbj4kPC9zcGFuPjxzcGFuPntyb3cucHVyY2hhc2VBbW91bnQyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+PHNwYW4+JDwvc3Bhbj48c3Bhbj57dG90YWxHZW5lcmFsT3V0Q29zdC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZXhwZW5zZXMpPy5tYXAoKEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cga2V5PXtJdGVtfSByb3c9e0l0ZW19IGluZGV4PXtpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs1fSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+U3ViVG90YWwgMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NH0gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPiQ8L3NwYW4+PHNwYW4+e3RvdGFsQW1vdW50LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cyIC8+IDogPHRyPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs1fSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+VG90YWwgR2VuZXJhbGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezR9IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj1cImxlZnRcIj48c3Bhbj4kPC9zcGFuPjxzcGFuPntwYXJzZUZsb2F0KHRvdGFsQW1vdW50ICsgdG90YWxHZW5lcmFsT3V0Q29zdCArIHRvdGFsQW1vdW50UGxhbmluZykudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyaW52b2ljZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzVweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48RW1haWxJY29uIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5HbG9iYWxAZ21haWwuY29tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc1cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PFBob25lSWNvbiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KzI0MyA4MjcgNzIyIDIyMjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxXZWJJY29uIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj53d3cuR2xvYmFsR2F0ZS5zYXJsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qKiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQdXJjaGFzZSBWaWV3IENyZWF0ZSBFbmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9XCI0XCIgc3g9e3sgaGVpZ2h0OiAnNTIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ1RhYiAmJiA8TGluZWFyUHJvZ3Jlc3Mgc3g9e3sgcG9zaXRpb246ICdzdGlja3knLCB0b3A6IDAsIHpJbmRleDogMSB9fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbT5Qcm9qZWN0IEFkdmFuY2VzIC8gUGF5bWVudHM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EYXRlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5QQVkgIzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+TW9kZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkFtb3VudDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+U3RhdHVzPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZXNjcmlwdGlvbjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+QWN0aW9uPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthZHZhbmNlcy5tYXAoKHBheSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3BheS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57ZGF5anMocGF5LnBheW1lbnREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UEFZLXtTdHJpbmcocGF5LnBheW1lbnROdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntwYXkubW9kZXN9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj4ke3BheS5Ub3RhbEFtb3VudD8uZmluZChpID0+IGkuaWQgPT09IGlkKT8udG90YWwudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cGF5LnN0YXR1cyB8fCAnQ2xlYXJlZCd9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntwYXkuZGVzY3JpcHRpb259PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9QYXltZW50SW5mb3JtYXRpb25WaWV3LyR7cGF5Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWR2YW5jZXMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezd9IGFsaWduPVwiY2VudGVyXCI+Tm8gYWR2YW5jZXMgZm91bmQgZm9yIHRoaXMgcHJvamVjdC48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9IGFsaWduPVwicmlnaHRcIj5Ub3RhbCBBZHZhbmNlczo8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj4ke3RvdGFsQWR2YW5jZXMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17M30+PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIHtcclxuICAgICAgICBzaG93MSA9PT0gMiA/XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPHA+Q09NTUVOVFM8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93MSgxKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRFZGl0fT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInIH19IHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdjb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzM1NXB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtDb21tZW50czEubWFwKChJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtJdGVtLmRhdGVDb21tZW50ID8gZGF5anMoSXRlbS5kYXRlQ29tbWVudCkuZm9ybWF0KCdERC9NTScpIDogJyd9IHtJdGVtLkNvbW1lbnRJbmZvLnBlcnNvbiArICc6ICcgKyBJdGVtLkNvbW1lbnRJbmZvLnJlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD4gOiBcIlwiXHJcbiAgICAgIH1cclxuICAgICAge1xyXG4gICAgICAgIHNob3cxID09PSAzID9cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cD5ISVNUT1JZPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93MSgxKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzUxMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmZpbHRlcigocm93KSA9PiByb3cuX2lkID09PSBpZClcclxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e3Jvdy5faWR9Pntyb3cuQ3JlYXRlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntyb3cuQ3JlYXRlLmRhdGVDb21tZW50fSB7cm93LkNyZWF0ZS5wZXJzb259IHtyb3cuQ3JlYXRlLnByb2plY3ROYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Jvdy5wZXJzb24gKyAnIG9uICcgKyBkYXlqcyhyb3cuZGF0ZU5vdGlmaWNhdGlvbikuZm9ybWF0KCdERC9NTU1NJyl9OiB7cm93LnJlYXNvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPiA6IFwiXCJcclxuICAgICAgfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIHtzeW5jaHJvID09PSAndHJ1ZScgPyA8aDI+IEl0ZW0gT3V0IFN5bmMgc3VjY2Vzc2Z1bGx5PC9oMj4gOiA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj59XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e0Vycm9yT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENhbmNlbEljb24gc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgRmFpbGVkIHRvIFNhdmVkPC9oMj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgVHJ5IEFnYWluXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxyXG4gICAgICAgIHtwcmludERhdGEgJiYgKFxyXG4gICAgICAgICAgPHRhYmxlIHJlZj17Y29tcG9uZW50UmVmfSBjbGFzc05hbWU9J2ludm9pY2VkZXRhaWxzJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW52b2ljZVRlc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmludEhlYWRlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiBcIlwifSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ludm9pY2Vocic+UHVyY2hhc2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFkZHJlc3Mgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxpbmVIZWlnaHQ6IDEuMzUsIHdpZHRoOiAnNjAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e3ByaW50RGF0YS5wcm9qZWN0TmFtZT8ucHJvamVjdE5hbWU/LnRvVXBwZXJDYXNlKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaXJzdFRhYmxlXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZvbnRTaXplOiAnODAlJywgbGVmdDogJzgzcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuID5QdXIgIzwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJyB9fT48c3BhbiA+UFVSLXtTdHJpbmcocHJpbnREYXRhLnB1cmNoYXNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuID5EYXRlPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnIH19PjxzcGFuID57ZGF5anMocHJpbnREYXRhLnB1cmNoYXNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzcwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5OPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMjUwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5RdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBhbGlnbj1cImxlZnRcIj5Vbml0IFByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+VG90YWwtTmVlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPkJ1eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPlRvdGFsLUJ1eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGFsaWduPVwibGVmdFwiPkktT3V0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gYWxpZ249XCJsZWZ0XCI+VG90YWwtQ29zdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByaW50RGF0YS5pdGVtcz8uZmlsdGVyKEl0ZW0gPT4gcGFyc2VGbG9hdChJdGVtLml0ZW1RdHkpID49IDAgfHwgcGFyc2VGbG9hdChJdGVtLml0ZW1CdXkpID4gMCB8fCBwYXJzZUZsb2F0KEl0ZW0uaXRlbU91dCkgPiAwKS5tYXAoKEl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRlZFVuaXQgPSBpdGVtTWFwW0l0ZW0uaXRlbU5hbWU/Ll9pZF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93MyBrZXk9e2l9IHJvdz17SXRlbX0gaW5kZXg9e2l9IHJlbGF0ZWRVbml0PXtyZWxhdGVkVW5pdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+U3ViVG90YWwgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBhbGlnbj1cImxlZnRcIj48c3Bhbj4kPC9zcGFuPjxzcGFuPnsocHJpbnREYXRhLnB1cmNoYXNlQW1vdW50MSB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+PHNwYW4+JDwvc3Bhbj48c3Bhbj57KHByaW50RGF0YS5wdXJjaGFzZUFtb3VudDIgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPiQ8L3NwYW4+PHNwYW4+e3RvdGFsR2VuZXJhbE91dENvc3QudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhleHBlbnNlcyk/Lm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IGtleT17SXRlbX0gcm93PXtJdGVtfSBpbmRleD17aX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NX0gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPlN1YlRvdGFsIDI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NH0gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPiQ8L3NwYW4+PHNwYW4+e3RvdGFsQW1vdW50LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdzIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs1fSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gYWxpZ249XCJsZWZ0XCI+VG90YWwgR2VuZXJhbGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NH0gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPiQ8L3NwYW4+PHNwYW4+e3BhcnNlRmxvYXQodG90YWxBbW91bnQgKyB0b3RhbEdlbmVyYWxPdXRDb3N0ICsgdG90YWxBbW91bnRQbGFuaW5nKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzIHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIGZvbnRTaXplOiAnNzAlJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbGluZUhlaWdodDogJzE0cHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYW5rOiBTT0ZJQkFOUVVFIFNBIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50aXRsZWQ6IEdMT0JBTCBHQVRFIFNBUkw8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhbmsgQWNjb3VudDogMDAwMjMyMzMzMzAyMTQyNDcwMjAwNzM8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvZGUgU3dpZnQ6IFNGQlhDREtJWFhYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5UZXJtcyAmIENvbmRpdGlvbnMgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiAgICAgRVNUSU1BVEVTIEFSRSBGT1IgTEFCT1IgQU5EIEFERElUSU9OQUwgTUFURVJJQUwgT05MWSwgTUFURVJJQUxTIFNPTEQgQVJFIE5FSVRIRVIgVEFLRU4gQkFDSyBPUiBFWENIQU5HRUQgV0UgV0lMTCBOT1QgQkUgUkVTUE9OU0lCTEUgRk9SIExPU1MgT1IgREFNQUdFIENBVVNFRCBCWSBGSVJFLCBUSEVGVCwgVEVTVElORywgREVGRUNURUQgUEFSRSBQQVJUUywgT1IgQU5ZIE9USEVSIENBVVNFIEJFWU9ORCBPVVIgQ09OVFJPTC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpblRvcDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGhpZGRlbj4uLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgaGlkZGVuPi4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpbnRGb290ZXIgYnJhbmNoSWQ9e3R5cGVvZiByb3cgIT09IFwidW5kZWZpbmVkXCIgPyByb3c/LmJyYW5jaElkIDogdHlwZW9mIGRhdGEgIT09IFwidW5kZWZpbmVkXCIgPyBkYXRhPy5icmFuY2hJZCA6IFwiXCJ9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9HcmlkID5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RWaWV3SW5mb3JtYXRpb25cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGhlYWRpbmcgKi9cbi5pbnZvaWNlVGVzdCB7XG4gIG1hcmdpbjogMCAwIDNlbTtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuXG5oMSB7XG4gIGZvbnQ6IGJvbGQgMTAwJSBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmludm9pY2VUZXN0IGFkZHJlc3Mge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBtYXJnaW46IDAgMCAxZW0gMWVtO1xufVxuXG5hZGRyZXNzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDc1JTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBtYXJnaW46IDAgMCAxZW0gMWVtO1xufVxuXG4uaW52b2ljZVRlc3QgaDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWNvbG9yOiAjOTk5O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTAlO1xuICBmb250OiBib2xkIDEwMCUgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pbnZvaWNlVGVzdCBhZGRyZXNzIHAge1xuICBtYXJnaW46IDAgMCAwLjI1ZW07XG59XG5cbi5pbnZvaWNlVGVzdCBzcGFuLCAuaW52b2ljZVRlc3QgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaW52b2ljZVRlc3Qgc3BhbiB7XG4gIG1hcmdpbjogMCAxZW0gMWVtIDA7XG4gIG1heC1oZWlnaHQ6IDI1JTtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmludm9pY2VUZXN0IGltZyB7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG4gIG1heC13aWR0aDogdmFyKC0taGVhZGVyLWxvZ28td2lkdGgsIDI0MHB4KTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmludm9pY2VUZXN0OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiBhcnRpY2xlICovXG5hcnRpY2xlLCBhcnRpY2xlIGFkZHJlc3MsIHRhYmxlIHtcbiAgbWFyZ2luOiAwIDAgM2VtO1xufVxuXG5hcnRpY2xlIGgxIHtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5hcnRpY2xlIGFkZHJlc3Mge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cblxuYXJ0aWNsZTphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLyogdGFibGUgKi9cbnRhYmxlIHtcbiAgdGFibGUtbGF5b3V0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4vKiB0YWJsZSBmaXJzdFRhYmxlICovXG50YWJsZS5maXJzdFRhYmxlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbn1cblxudGFibGUuZmlyc3RUYWJsZTphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLyogdGFibGUgZmlyc3RUYWJsZSAqL1xudGFibGUuZmlyc3RUYWJsZSB0aCB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbnRhYmxlLmZpcnN0VGFibGUgdGQge1xuICB3aWR0aDogNjAlO1xufVxuXG5hc2lkZSBoMSNub3RlcyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICBtYXJnaW46IDAgMCAxZW07XG59XG5cbmFzaWRlIGgxI25vdGVzIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTk5O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTAlO1xuICBmb250OiBib2xkIDEwMCUgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9JbnZvaWNlVmlldy9BZG1pblZpZXcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBLFlBQUE7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUc7RUFDQywwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVFO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUFvQiwwQkFBQTtFQUE0Qix3QkFBQTtFQUEwQiwwQkFBQTtFQUMxRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFJTjs7QUFERTtFQUNFLGtCQUFBO0FBSUo7O0FBREU7RUFBc0MsY0FBQTtFQUFnQixXQUFBO0FBTXhEOztBQUxFO0VBQXFCLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsY0FBQTtFQUFnQixrQkFBQTtBQVk3RTs7QUFYRTtFQUFtQixnQkFBQTtFQUFrQiwwQ0FBQTtFQUE0QyxtQkFBQTtFQUFxQixnQkFBQTtBQWtCeEc7O0FBZkU7RUFBcUIsV0FBQTtFQUFhLFdBQUE7RUFBYSxjQUFBO0FBcUJqRDs7QUFuQkUsWUFBQTtBQUNBO0VBQWtDLGVBQUE7QUF1QnBDOztBQXRCRTtFQUFhLG1CQUFBO0VBQXFCLGtCQUFBO0FBMkJwQzs7QUExQkU7RUFBa0IsV0FBQTtFQUFhLGNBQUE7RUFBZ0IsV0FBQTtFQUFhLGlCQUFBO0FBaUM5RDs7QUEvQkU7RUFBZ0IsV0FBQTtFQUFhLFdBQUE7RUFBYSxjQUFBO0FBcUM1Qzs7QUFuQ0UsVUFBQTtBQUVBO0VBQVEsa0JBQUE7RUFBb0IsV0FBQTtBQXVDOUI7O0FBdENFO0VBQVEseUJBQUE7QUEwQ1Y7O0FBekNFLHFCQUFBO0FBRUE7RUFBbUIsWUFBQTtFQUFjLFVBQUE7RUFBWSxXQUFBO0FBOEMvQzs7QUE3Q0U7RUFBeUIsV0FBQTtFQUFhLFdBQUE7RUFBYSxjQUFBO0FBbURyRDs7QUFqREUscUJBQUE7QUFFQTtFQUFzQixVQUFBO0FBb0R4Qjs7QUFuREU7RUFBc0IsVUFBQTtBQXVEeEI7O0FBckRFO0VBQWlCLFlBQUE7RUFBYyxxQkFBQTtFQUF1QixlQUFBO0FBMkR4RDs7QUExREU7RUFBaUIsa0JBQUE7RUFBb0IsMEJBQUE7RUFBNEIsd0JBQUE7RUFBMEIsMEJBQUE7RUFDekYscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBaUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi8qIGhlYWRpbmcgKi9cXHJcXG5cXHJcXG4uaW52b2ljZVRlc3Qge1xcclxcbiAgICBtYXJnaW46IDAgMCAzZW07XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgIGgxIHtcXHJcXG4gICAgZm9udDogYm9sZCAxMDAlIHNhbnMtc2VyaWY7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW52b2ljZVRlc3QgYWRkcmVzcyB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiA3NSU7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxuICAgIG1hcmdpbjogMCAwIDFlbSAxZW07XFxyXFxuICB9XFxyXFxuICBhZGRyZXNzIHtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDc1JTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBtYXJnaW46IDAgMCAxZW0gMWVtO1xcclxcbiAgfVxcclxcbiAgLmludm9pY2VUZXN0IGgxIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgICBib3JkZXItY29sb3I6ICM5OTk7IGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkOyBib3JkZXItYm90dG9tLXdpZHRoOiAxMCU7IGZvbnQ6IGJvbGQgMTAwJSBzYW5zLXNlcmlmO1xcclxcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVlbTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAuaW52b2ljZVRlc3QgYWRkcmVzcyBwIHtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMC4yNWVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW52b2ljZVRlc3Qgc3BhbiwgLmludm9pY2VUZXN0IGltZyB7IGRpc3BsYXk6IGJsb2NrOyBmbG9hdDogbGVmdDsgfVxcclxcbiAgLmludm9pY2VUZXN0IHNwYW4geyAgbWFyZ2luOiAwIDFlbSAxZW0gMDsgbWF4LWhlaWdodDogMjUlOyBtYXgtd2lkdGg6IDkwJTsgcG9zaXRpb246IGFic29sdXRlOyB9XFxyXFxuICAuaW52b2ljZVRlc3QgaW1nIHsgbWF4LWhlaWdodDogODBweDsgbWF4LXdpZHRoOiB2YXIoLS1oZWFkZXItbG9nby13aWR0aCwgMjQwcHgpOyBvYmplY3QtZml0OiBjb250YWluOyBtYXJnaW4tdG9wOiAxMHB4O31cXHJcXG5cXHJcXG4gIFxcclxcbiAgLmludm9pY2VUZXN0OmFmdGVyIHsgY2xlYXI6IGJvdGg7IGNvbnRlbnQ6IFxcXCJcXFwiOyBkaXNwbGF5OiB0YWJsZTsgfVxcclxcbiAgXFxyXFxuICAvKiBhcnRpY2xlICovXFxyXFxuICBhcnRpY2xlLCBhcnRpY2xlIGFkZHJlc3MsIHRhYmxlIHsgbWFyZ2luOiAwIDAgM2VtOyB9XFxyXFxuICBhcnRpY2xlIGgxIHsgY2xpcDogcmVjdCgwIDAgMCAwKTsgcG9zaXRpb246IGFic29sdXRlOyB9XFxyXFxuICBhcnRpY2xlIGFkZHJlc3MgeyBmbG9hdDogbGVmdDsgZm9udC1zaXplOiA5MCU7IGZsb2F0OiBsZWZ0OyBsaW5lLWhlaWdodDogMTBweDsgfVxcclxcbiAgXFxyXFxuICBhcnRpY2xlOmFmdGVyIHsgY2xlYXI6IGJvdGg7IGNvbnRlbnQ6IFxcXCJcXFwiOyBkaXNwbGF5OiB0YWJsZTsgfVxcclxcbiAgXFxyXFxuICAvKiB0YWJsZSAqL1xcclxcbiAgXFxyXFxuICB0YWJsZSB7IHRhYmxlLWxheW91dDogYXV0bzsgd2lkdGg6IDEwMCU7IH1cXHJcXG4gIHRhYmxlIHsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTt9XFxyXFxuICAvKiB0YWJsZSBmaXJzdFRhYmxlICovXFxyXFxuICBcXHJcXG4gIHRhYmxlLmZpcnN0VGFibGUgeyBmbG9hdDogcmlnaHQ7IHdpZHRoOiA1MCU7IGhlaWdodDogNTAlO31cXHJcXG4gIHRhYmxlLmZpcnN0VGFibGU6YWZ0ZXIgeyBjbGVhcjogYm90aDsgY29udGVudDogXFxcIlxcXCI7IGRpc3BsYXk6IHRhYmxlOyB9XFxyXFxuICBcXHJcXG4gIC8qIHRhYmxlIGZpcnN0VGFibGUgKi9cXHJcXG4gIFxcclxcbiAgdGFibGUuZmlyc3RUYWJsZSB0aCB7IHdpZHRoOiA0MCU7IH1cXHJcXG4gIHRhYmxlLmZpcnN0VGFibGUgdGQgeyB3aWR0aDogNjAlOyB9XFxyXFxuXFxyXFxuICBhc2lkZSBoMSNub3RlcyB7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXdpZHRoOiAwIDAgMXB4OyBtYXJnaW46IDAgMCAxZW07IH1cXHJcXG4gIGFzaWRlIGgxI25vdGVzIHsgYm9yZGVyLWNvbG9yOiAjOTk5OyBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDsgYm9yZGVyLWJvdHRvbS13aWR0aDogMTAlOyBmb250OiBib2xkIDEwMCUgc2Fucy1zZXJpZjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNWVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQWRtaW5WaWV3LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FkbWluVmlldy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIlN0ZXBwZXIiLCJTdGVwIiwiU3RlcEJ1dHRvbiIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJ1c2VQYXJhbXMiLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIlByb2plY3RQaGFzZSIsIl91c2VQYXJhbXMiLCJpZCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInN0ZXBzIiwic2V0U3RlcHMiLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsImNvbXBsZXRlZCIsInNldENvbXBsZXRlZCIsImdldCIsImNvbmNhdCIsInRoZW4iLCJyZXMiLCJmb3JtYXREYXRlIiwiZGF0YSIsInBoYXNlIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJ0b3RhbFN0ZXBzIiwibGVuZ3RoIiwiY29tcGxldGVkU3RlcHMiLCJPYmplY3QiLCJrZXlzIiwiaXNMYXN0U3RlcCIsImFsbFN0ZXBzQ29tcGxldGVkIiwiaGFuZGxlTmV4dCIsIm5ld0FjdGl2ZVN0ZXAiLCJmaW5kSW5kZXgiLCJzdGVwIiwiaSIsImhhbmRsZUJhY2siLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZVN0ZXAiLCJoYW5kbGVDb21wbGV0ZSIsIm5ld0NvbXBsZXRlZCIsImNyZWF0ZUVsZW1lbnQiLCJzeCIsIndpZHRoIiwibm9uTGluZWFyIiwibWFwIiwibGFiZWwiLCJpbmRleCIsImtleSIsImNvbG9yIiwib25DbGljayIsIkZyYWdtZW50IiwibXQiLCJtYiIsInB5IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwdCIsImRpc2FibGVkIiwibXIiLCJmbGV4IiwidmFyaWFudCIsIlByaW50SGVhZGVyIiwiUHJpbnRGb290ZXIiLCJ1c2VSZWYiLCJTaWRlYmFyRGFzaCIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJBY2NvdW50Q2lyY2xlSWNvbiIsIkRlbGV0ZUljb24iLCJDb2xsYXBzZSIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlUm93IiwiVGFibGVIZWFkIiwiUGFwZXIiLCJUYWJsZUNvbnRhaW5lciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIkF1dG9jb21wbGV0ZSIsInN0eWxlZCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJGYWRlIiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiQ2hlY2tib3giLCJMaW5lYXJQcm9ncmVzcyIsIlN0ZXBMYWJlbCIsIkFjY29yZGlvbiIsIkFjY29yZGlvblN1bW1hcnkiLCJBY2NvcmRpb25EZXRhaWxzIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiVGFicyIsIlRhYiIsIk1lbnUiLCJEaXZpZGVyIiwidXNlTmF2aWdhdGUiLCJOYXZMaW5rIiwiTGluayIsInVzZU91dGxldENvbnRleHQiLCJkYXlqcyIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiRWRpdEljb24iLCJJb3NTaGFyZUljb24iLCJMb2NhbFByaW50c2hvcEljb24iLCJBdHRhY2hGaWxlSWNvbiIsIlNlbmRJY29uIiwiS2V5Ym9hcmRBcnJvd0Rvd25JY29uIiwiS2V5Ym9hcmRBcnJvd1VwSWNvbiIsIlJlYWN0VG9QcmludCIsInVzZVJlYWN0VG9QcmludCIsIkxvYWRlciIsIkVtYWlsSWNvbiIsIlBob25lSWNvbiIsIldlYkljb24iLCJJbWFnZSIsIkNsb3NlIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkFycm93QmFjayIsIlRhYkNvbnRleHQiLCJUYWJMaXN0IiwiVGFiUGFuZWwiLCJWaXNpYmlsaXR5IiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiRXhjZWxKUyIsInNhdmVBcyIsIkV4cGxpY2l0IiwiUHJldmlldyIsInY0IiwiRWRpdFRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIlByaW50VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiYmdjb2xvciIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY3Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWY4Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiUHJvamVjdFZpZXdJbmZvcm1hdGlvbiIsIl9PYmplY3Qka2V5cyIsIl9yb3ciLCJfcHJpbnREYXRhJHByb2plY3ROYW0iLCJfcHJpbnREYXRhJGl0ZW1zIiwiX09iamVjdCRrZXlzMyIsIl9yb3cyIiwiX2RhdGEzIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsIk5hbWUiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzaG93Iiwic2V0U2hvdyIsImhhbmRsZVNob3ciLCJlIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicHJvamVjdCIsInNldFByb2plY3QiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInByb2plY3QyIiwic2V0UHJvamVjdDIiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImhpZGRlbiIsInNldEhpZGRlbiIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImxvYWRpbmdUYWIiLCJzZXRMb2FkaW5nVGFiIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsIml0ZW0iLCJTZXRJdGVtcyIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJsb2FkaW5nQmFzZSIsInNldExvYWRpbmdCYXNlIiwiZmV0Y2hQcmlvcml0eURhdGEiLCJfcmVmMCIsIl95aWVsZCRQcm9taXNlJGFsbCIsIlByb21pc2UiLCJhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwicmVzUHJvamVjdHMiLCJyZXNQcm9qZWN0U3BlYyIsInJlc0hpZGRlbiIsInAiLCJfaWQiLCJ2aXNpdEZpZWxkIiwidmlzaXREYXRlIiwiZm9ybWF0Iiwic3RhcnRGaWVsZCIsInN0YXJ0RGF0ZSIsInJldmVyc2UiLCJzZXRQcm9qZWN0TmFtZSIsInByb2plY3ROYW1lIiwic2V0Q3VzdG9tZXJOYW1lMSIsImN1c3RvbWVyTmFtZSIsInJlcGxhY2UiLCJmZXRjaERldGFpbGVkRGF0YSIsIl9yZWYxIiwiX3lpZWxkJFByb21pc2UkYWxsMyIsIl95aWVsZCRQcm9taXNlJGFsbDQiLCJyZXNBbGxJdGVtcyIsImZldGNoSW52b2ljZXNBbmRQdXJjaGFzZXMiLCJmZXRjaEV4cGVuc2VzIiwiZmV0Y2hQYXltZW50cyIsImZldGNoVGltZWxpbmVBbmRTdGFmZiIsImZldGNoSXRlbXNNb3ZlbWVudCIsIl9yZWYxMCIsIl9yZXNQdXJjaGFzZXMkZGF0YSIsIl9yZXNJbnZvaWNlcyRkYXRhIiwiX3lpZWxkJFByb21pc2UkYWxsNSIsIl95aWVsZCRQcm9taXNlJGFsbDYiLCJyZXNQdXJjaGFzZXMiLCJyZXNJbnZvaWNlcyIsInJlbGF0ZWRQdXJjaGFzZXMiLCJmaWx0ZXIiLCJyb3ciLCJfcm93JHByb2plY3ROYW1lIiwicHJvamVjdFB1cmNoYXNlSWRzIiwicmVsYXRlZEludm9pY2VzIiwiaW52IiwiaW5jbHVkZXMiLCJSZWZlcmVuY2VOYW1lMiIsImFsbFByb2plY3RJdGVtcyIsImZsYXRNYXAiLCJpdGVtcyIsIkl0ZW0iLCJfSXRlbSRpdGVtTmFtZSIsIl9JdGVtJGl0ZW1OYW1lMiIsInRvdGFsQ29zdE91dCIsIml0ZW1OYW1lIiwidW5kZWZpbmVkIiwiTnVtYmVyIiwiaXRlbU91dCIsInRvdGFsR2VuZXJhbGUiLCJpdGVtQ29zdCIsInNldEl0ZW0iLCJzZXRQdXJjaGFzZSIsInNldEludm9pY2UiLCJfcmVmMTEiLCJfcmVzRXhwZW5zZXMkZGF0YSIsIl95aWVsZCRQcm9taXNlJGFsbDciLCJfeWllbGQkUHJvbWlzZSRhbGw4IiwicmVzRXhwQ2F0IiwicmVzRXhwZW5zZXMiLCJzZXRDYXRlZ29yaWVzIiwic2V0RXhwZW5zZXNJbmZvIiwiX3JvdyRhY2NvdW50TmFtZUluZm8iLCJhY2NvdW50TmFtZUluZm8iLCJfcm93JGV4cGVuc2VDYXRlZ29yeSIsImNhdGVnb3J5IiwiZXhwZW5zZUNhdGVnb3J5IiwiZXhwZW5zZXNDYXRlZ29yeSIsInRvdGFsIiwiZGF0ZSIsImV4cGVuc2VEYXRlIiwiZXhwZW5zZU51bWJlciIsImRlc2NyaXB0aW9uIiwiX3JlZjEyIiwiX3JlcyRkYXRhIiwic2V0QWR2YW5jZXMiLCJwYXkiLCJfcGF5JFRvdGFsQW1vdW50IiwiVG90YWxBbW91bnQiLCJzb21lIiwiX3JlZjEzIiwiX3Jlc091dCRkYXRhIiwiX3Jlc1JldHVybiRkYXRhIiwiX3Jlc1ByZWMkZGF0YSIsIl95aWVsZCRQcm9taXNlJGFsbDkiLCJfeWllbGQkUHJvbWlzZSRhbGwwIiwicmVzT3V0IiwicmVzUmV0dXJuIiwicmVzUHJlYyIsInNldEl0ZW1PdXQiLCJfcm93JHJlZmVyZW5jZSIsInJlZmVyZW5jZSIsIm91dE51bWJlciIsIlN0cmluZyIsInBhZFN0YXJ0IiwidHlwZSIsInNldEl0ZW1SZXR1cm4iLCJfcm93JHJlZmVyZW5jZTIiLCJzZXRJdGVtUHVyY2hhc2UiLCJfcmVmMTQiLCJfcmVzTm90aWYkZGF0YSIsIl9yZXNQbGFuaW5nJGRhdGEiLCJfeWllbGQkUHJvbWlzZSRhbGwxIiwiX3lpZWxkJFByb21pc2UkYWxsMTAiLCJyZXNOb3RpZiIsInJlc1BsYW5pbmciLCJzZXROb3RpZmljYXRpb24iLCJpZEluZm8iLCJzZXRQbGFuaW5nSW5mbyIsIl9yb3ckcHJvamVjdE5hbWUyIiwidG90YWxXb3JrRGF5IiwicGFyc2VGbG9hdCIsImRheVBheVVTZCIsIndvcmtOdW1iZXIiLCJ0b0ZpeGVkIiwiaXRlbU1hcCIsInVzZU1lbW8iLCJmb3JFYWNoIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsInByb2plY3ROdW1iZXIiLCJzZXRQcm9qZWN0TnVtYmVyIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJjdXN0b21lck5hbWUxIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsInB1cmNoYXNlIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsInRvdGFsR2VuZXJhbE91dENvc3QiLCJyZWR1Y2UiLCJzdW0iLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsIml0ZW1SZXR1cm4iLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwiZXhwZW5zZXMiLCJzZXRFeHBlbnNlcyIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJpbnZvaWNlIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsImV4cGVuc2VzSW5mbyIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJpdGVtUHVyY2hhc2UiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwicGxhbmluZ0luZm8iLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwiY2F0ZWdvcmllcyIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJub3RpZmljYXRpb24iLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0IiwiYWR2YW5jZXMiLCJuZXdPdXRSIiwiZm9ybWF0RGF0ZTIiLCJpdGVtc1F0eUFycmF5IiwibmV3SXRlbU91dCIsInJlbGF0ZWRJdGVtUHVyY2hhc2VzIiwiYWNjIiwiaXRlbVF0eSIsIkl0ZW1OYW1lIiwiSWQiLCJpdGVtRGVzY3JpcHRpb24iLCJyZWxhdGVkSXRlbVB1cmNoYXNlczIiLCJyYXRlIiwiaXRlbVJhdGUiLCJjb3N0IiwicmVsYXRlZEl0ZW1QdXJjaGFzZXNBcnJheSIsInJlbGF0ZWRJdGVtUHVyY2hhc2VzQXJyYXkyIiwiYWxsSXRlbVB1cmNoYXNlIiwicHVyY2hhc2VJbmZvIiwiUHJldmlld1B1cmNoYXNlIiwiX3VwZGF0ZWRQdXJjaGFzZSRpdGVtMiIsIl91cGRhdGVkUHVyY2hhc2UkaXRlbTMiLCJ1cGRhdGVkUHVyY2hhc2UiLCJjdXJyZW50SXRlbVB1cmNoYXNlcyIsImlwIiwiaXRlbVB1cmNoYXNlTnVtYmVyIiwicHVyY2hhc2VOdW1iZXIiLCJsb2NhbFJlbGF0ZWQiLCJsb2NhbFJlbGF0ZWQyIiwibG9jYWxBbGwiLCJ2YWx1ZXMiLCJyb3cyIiwiX3VwZGF0ZWRQdXJjaGFzZSRpdGVtIiwiZXhpc3RpbmdJdGVtIiwiaXRlbUkiLCJpdGVtQnV5IiwidG90YWxBbW91bnQiLCJNYXRoIiwicm91bmQiLCJpdGVtQW1vdW50IiwiaXRlbURldGFpbHMiLCJpdGVtU2VsbGluZ1ByaWNlIiwiaXRlbUNvc3RQcmljZSIsInB1c2giLCJpZFJvdyIsIml0ZW1EaXNjb3VudCIsImRpc2NvdW50IiwicGVyY2VudGFnZSIsInRvdGFsQ29zdCIsIml0ZW1XZWlnaHQiLCJzdG9jayIsIml0ZW1RdWFudGl0eSIsInB1cmNoYXNlQW1vdW50MSIsInB1cmNoYXNlQW1vdW50MiIsInJlbGF0ZWQiLCJyZWxhdGVkUmV0dXJuIiwiSXRlbU5hbWUxIiwiSWQxIiwidG90YWwxIiwibmV3QWxsT3V0UmV0dXJuIiwiX3JlZjE1IiwicmVsYXRlZDEiLCJmaW5kIiwiX3JlZjE2IiwicmVsYXRlZFB1cmNoYXNlIiwibmV3QWxsT3V0UmV0dXJuSW5mbyIsIkl0ZW0xIiwiX0l0ZW0kaXRlbU5hbWUzIiwidG90YWxQZXJEYXkiLCJwbGFuaW5nT2JqZWN0IiwiZW1wbG95ZWVJRCIsIm5hbWUiLCJkYXlQYXkiLCJ3b3JrRCIsInRvdGFsQW1vdW50MiIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJzZXRUb3RhbEFtb3VudCIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJ0b3RhbEFtb3VudFBsYW5pbmciLCJzZXRUb3RhbEFtb3VudFBsYW5pbmciLCJ0b3RhbEFtb3VudDEiLCJ0b3RhbFBheVJvbGwiLCJ0b3RhbEFkdmFuY2VzIiwiX3BheSRUb3RhbEFtb3VudDIiLCJwcm9qZWN0QW10IiwicyIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJzaG93MiIsInNldFNob3cyIiwiaGFuZGxlU2hvdzIiLCJmaWx0ZXJlZFJvd3MiLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwidmFsdWUiLCJzZXRWYWx1ZSIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJ2YWx1ZTIiLCJzZXRWYWx1ZTIiLCJzZWxlY3RlZEluZGV4IiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJoYW5kbGVDaGFuZ2UyIiwiX3VzZVN0YXRlNTUiLCJfdXNlU3RhdGU1NiIsInNlYXJjaCIsInNldFNlYXJjaCIsImhhbmRsZVNlYXJjaCIsInRhcmdldCIsIm5ld0FycmF5IiwidG9Mb3dlckNhc2UiLCJ0b1N0cmluZyIsIm5ld0FycmF5MiIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJCb29sZWFuIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZU1lbnUiLCJhbmNob3JFbDEiLCJzZXRBbmNob3JFbDEiLCJvcGVuMSIsImhhbmRsZUNsaWNrMiIsImhhbmRsZUNsb3NlTWVudTIiLCJfdXNlU3RhdGU1NyIsIl91c2VTdGF0ZTU4Iiwic2hvdzEiLCJzZXRTaG93MSIsImhhbmRsZVNob3cxIiwiX3VzZVN0YXRlNTkiLCJfdXNlU3RhdGU2MCIsInJlYXNvbiIsInNldFJlYXNvbiIsIl91c2VTdGF0ZTYxIiwiX3VzZVN0YXRlNjIiLCJDb21tZW50czEiLCJzZXRDb21tZW50cyIsImZldGNoQ29tbWVudCIsIl9yZWYxNyIsIl9yZXMkZGF0YTIiLCJyZXNwIiwiQ29tbWVudEluZm8iLCJwZXJzb24iLCJfdXNlU3RhdGU2MyIsIl91c2VTdGF0ZTY0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGU2NSIsIl91c2VTdGF0ZTY2IiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU2NyIsIl91c2VTdGF0ZTY4IiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlQ2xvc2VFcnJvciIsImRhdGVDb21tZW50IiwiRGF0ZSIsIm5vdyIsIl91c2VTdGF0ZTY5IiwiX3VzZVN0YXRlNzAiLCJzeW5jaHJvIiwic2V0U3luY2hybyIsImhhbmRsZVN5bmNlZCIsIl9yZWYxOCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlUHVyY2hhc2UiLCJwdXQiLCJsb2ciLCJfeCIsInVwZGF0ZUZvckl0ZW1CdXkiLCJfcmVmMTkiLCJzYXZlQXR0ZW5kYW5jZSIsIl94MiIsImhhbmRsZVN1Ym1pdEVkaXQiLCJfcmVmMjAiLCJwb3N0IiwibmV3RGF0YSIsIl94MyIsImNvbXBvbmVudFJlZiIsImhhbmRsZVByaW50IiwiY29udGVudCIsImN1cnJlbnQiLCJkb2N1bWVudFRpdGxlIiwib25CZWZvcmVHZXRDb250ZW50IiwiUEFHRV9IRUlHSFQiLCJwcmludEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJudW1iZXJPZlBhZ2UiLCJjZWlsIiwiX3ByaW50RWxlbWVudCRnZXRFbGVtIiwiX3ByaW50RWxlbWVudCRnZXRFbGVtMiIsImhlaWdodFdpdGhTaW5nbGVIZWFkZXIiLCJyZXF1aXJlZEhlaWdodCIsImhlYWRlckhlaWdodCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZm9vdGVySGVpZ2h0IiwicmVtb3ZlIiwib25BZnRlclByaW50IiwiX3VzZVN0YXRlNzEiLCJfdXNlU3RhdGU3MiIsInByaW50RGF0YSIsInNldFByaW50RGF0YSIsImhhbmRsZU9wZW5QcmludCIsIl9SZWFjdCR1c2VTdGF0ZTUiLCJfUmVhY3QkdXNlU3RhdGU2IiwidmFsdWUzIiwic2V0VmFsdWUzIiwicmVzdWx0IiwiaGFuZGxlQ2hhbmdlMyIsImNoYW5nZVZhbHVlIiwiX1JlYWN0JHVzZVN0YXRlNyIsIl9SZWFjdCR1c2VTdGF0ZTgiLCJzaWRlQmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZURyYXdlciIsImRhdGExIiwibnVtYmVyIiwiY3VzdG9tZXIiLCJwdXJjaGFzZURhdGUiLCJkYXRhNSIsIm5vIiwidG90YWxDb3N0MSIsImRhdGE3Iiwibm8xIiwibGFib3JRdHkiLCJhZGp1c3RtZW50TnVtYmVyIiwicHVyY2hhc2VBbW91bnQzIiwiZGF0YTgiLCJkYXRhOSIsImRhdGExMCIsImRhdGExMSIsImV4cG9ydFRvRXhjZWwiLCJfcmVmMjEiLCJ3b3JrYm9vayIsIldvcmtib29rIiwid29ya1NoZWV0IiwiYWRkV29ya3NoZWV0IiwiY29sdW1uczEiLCJoZWFkZXIiLCJjb2x1bW5zNSIsImNvbHVtbnM2IiwiYWRkUm93IiwiY29sIiwiYnVmZmVyIiwieGxzeCIsIndyaXRlQnVmZmVyIiwiYm9sZCIsIkJsb2IiLCJoYW5kbGVFeHBvcnRDYXRlZ29yeUV4Y2VsIiwiX3JlZjIyIiwibGlzdCIsImNvbHVtbnMiLCJfeDQiLCJfeDUiLCJfeDYiLCJoYW5kbGVFeHBvcnRFbXBsb3llZUV4Y2VsIiwiX3JlZjIzIiwiZ3JhbmRUb3RhbCIsIl94NyIsIl94OCIsIlJvdzMiLCJfcm93JGl0ZW1OYW1lIiwiX3JvdyRpdGVtTmFtZTIiLCJyZWxhdGVkVW5pdCIsIl9SZWFjdCR1c2VTdGF0ZTkiLCJfUmVhY3QkdXNlU3RhdGUwIiwic2V0T3BlbiIsImJvcmRlckJvdHRvbSIsIm5ld0Rlc2NyaXB0aW9uIiwidGV4dEFsaWduIiwiYm9yZGVyIiwiY29sU3BhbiIsImN1cnNvciIsImFsaWduIiwiaXRlbUJyYW5kIiwidG9VcHBlckNhc2UiLCJ1bml0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJpbiIsInRpbWVvdXQiLCJ1bm1vdW50T25FeGl0IiwibWFyZ2luIiwiZ3V0dGVyQm90dG9tIiwiY29tcG9uZW50Iiwicm93MSIsIl9yb3ckaXRlbU5hbWUzIiwiaW5kZXgxIiwiaXRlbU91dERhdGUiLCJfcm93JGl0ZW1OYW1lNCIsIlJvdyIsIl9SZWFjdCR1c2VTdGF0ZTEiLCJfUmVhY3QkdXNlU3RhdGUxMCIsImhhbmRsZVByaW50TG9jYWwiLCJjYXRlZ29yeUxpc3QiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJnYXAiLCJzaXplIiwidGl0bGUiLCJtYXJnaW5Cb3R0b20iLCJyZWYiLCJSb3cyIiwiX1JlYWN0JHVzZVN0YXRlMTEiLCJfUmVhY3QkdXNlU3RhdGUxMiIsIl91c2VPdXRsZXRDb250ZXh0IiwibGF5b3V0SGFuZGxlU2hvdzEiLCJjb250YWluZXIiLCJ4cyIsImJhY2tncm91bmQiLCJmb250V2VpZ2h0IiwiZGlzYWJsZUVsZXZhdGlvbiIsImVuZEljb24iLCJNZW51TGlzdFByb3BzIiwib25DbG9zZSIsIlRyYW5zaXRpb25Db21wb25lbnQiLCJ0byIsImJvcmRlckNvbG9yIiwib25DaGFuZ2UiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsIm92ZXJmbG93WSIsInBhZGRpbmciLCJzdGF0dXMiLCJtaW5IZWlnaHQiLCJidWRnZXQiLCJpbnZvaWNlTnVtYmVyIiwidG90YWxJbnZvaWNlIiwiX2RhdGEiLCJfcm93JGl0ZW1zIiwiYnJhbmNoSWQiLCJtYXJnaW5Ub3AiLCJsaW5lSGVpZ2h0IiwiYmlsbGluZ0FkZHJlc3MiLCJiaWxsaW5nQ2l0eSIsImludm9pY2VEYXRlIiwiaW52b2ljZVN1YmplY3QiLCJpbnZvaWNlRGVmZWN0IiwiZmxvYXQiLCJub3RlIiwiQ2hlY2tUdkEiLCJzdWJUb3RhbCIsInNoaXBwaW5nIiwiYWRqdXN0bWVudCIsImJhbGFuY2VEdWUiLCJ0b3RhbFciLCJ0ZXJtcyIsIl9kYXRhMiIsIl9yb3ckaXRlbXMyIiwiX09iamVjdCRrZXlzMiIsIl9JdGVtJGl0ZW1OYW1lNCIsIl9wYXkkVG90YWxBbW91bnQzIiwicGF5bWVudERhdGUiLCJwYXltZW50TnVtYmVyIiwibW9kZXMiLCJwbGFjZW1lbnQiLCJvblN1Ym1pdCIsInJlcXVpcmVkIiwibXVsdGlsaW5lIiwicm93cyIsIkNyZWF0ZSIsImRhdGVOb3RpZmljYXRpb24iLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsIl9JdGVtJGl0ZW1OYW1lNSJdLCJzb3VyY2VSb290IjoiIn0=