"use strict";
exports.id = "src_js_AdminView1_PageView_ItemView_ItemInformationVIew_js";
exports.ids = ["src_js_AdminView1_PageView_ItemView_ItemInformationVIew_js"];
exports.modules = {

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

/***/ "./node_modules/@mui/icons-material/RemoveCircleOutline.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@mui/icons-material/RemoveCircleOutline.js ***!
  \*****************************************************************/
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
  d: "M7 11v2h10v-2zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}), 'RemoveCircleOutline');

/***/ },

/***/ "./node_modules/@mui/icons-material/esm/FileCopy.js"
/*!**********************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/FileCopy.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2zm-1 7h5.5L14 6.5z"
}), 'FileCopy'));

/***/ },

/***/ "./src/js/AdminView1/PageView/ItemView/ItemInformationVIew.js"
/*!********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ItemView/ItemInformationVIew.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabContext/TabContext.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabList/TabList.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabPanel/TabPanel.js");
/* harmony import */ var _mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-charts/PieChart */ "./node_modules/@mui/x-charts/PieChart/PieChart.js");
/* harmony import */ var _mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-charts/PieChart */ "./node_modules/@mui/x-charts/PieChart/PieArcLabel.js");
/* harmony import */ var _mui_x_charts_hooks__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-charts/hooks */ "./node_modules/@mui/x-charts/hooks/useDrawingArea.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/FileCopy.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/RemoveCircleOutline */ "./node_modules/@mui/icons-material/RemoveCircleOutline.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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




























var palette = ['blue', 'red', 'orange'];
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_ref7 => {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded4);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref8 => {
  var theme = _ref8.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"].tooltip)]: {
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
var size = {
  width: 400,
  height: 200
};
var StyledText = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])('text')(_ref9 => {
  var theme = _ref9.theme;
  return {
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 15
  };
});
function PieCenterLabel(_ref0) {
  var children = _ref0.children;
  var _useDrawingArea = (0,_mui_x_charts_hooks__WEBPACK_IMPORTED_MODULE_42__.useDrawingArea)(),
    width = _useDrawingArea.width,
    height = _useDrawingArea.height,
    left = _useDrawingArea.left,
    top = _useDrawingArea.top;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledText, {
    x: left + width / 2,
    y: top + height / 2
  }, children);
}
function ItemInformationVIew() {
  var _item$filter;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_30__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_31__.selectCurrentUser);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var ItemInfoU = grantAccess.filter(row => row.moduleName === "Item" && row.access.editM === true);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    itemPurchase = _useState4[0],
    setItemPurchase = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    itemOut = _useState6[0],
    setItemOut = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    posOut = _useState8[0],
    setPosOut = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    itemReturn = _useState0[0],
    setItemReturn = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState10 = _slicedToArray(_useState1, 2),
    loadingData = _useState10[0],
    setLoadingData = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    month = _useState12[0],
    setMonth = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    selectOptions = _useState14[0],
    setSelectOptions = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    startDate = _useState16[0],
    setStartDate = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    fromDate = _useState18[0],
    setFromDate = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    endDate = _useState20[0],
    setEndDate = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    filteredData = _useState22[0],
    setFilteredData = _useState22[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var headers = [];
    var currentDate = new Date(fromDate);
    while (currentDate <= endDate) {
      headers.push(currentDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setFilteredData(headers);
  }, [fromDate, endDate]);
  var handleChangeSelected = e => {
    setSelectOptions(e.target.value);
  };
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    loadingData2 = _useState24[0],
    setLoadingData2 = _useState24[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var resItemOut = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/itemOut"));
          var formatDate1 = resItemOut.data.data.map(row => _objectSpread(_objectSpread({}, row), {}, {
            itemsQtyArray: row.itemsQtyArray.filter(Item => Item.itemName._id === id && parseFloat(Item.newItemOut) > 0)
          })).filter(row => row.itemsQtyArray.length > 0);
          setItemOut(formatDate1.sort((a, b) => b.outNumber - a.outNumber));
          var resItemPurchase = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/itemPurchase?summary=true"));
          var formatDate = resItemPurchase.data.data.map(row => _objectSpread(_objectSpread({}, row), {}, {
            items: row.items.filter(Item => Item.itemName._id === id)
          })).filter(row => row.items.length > 0);
          setItemPurchase(formatDate.sort((a, b) => b.itemPurchaseNumber - a.itemPurchaseNumber));
          var resPosOut = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/pos?summary=true"));
          var formatDate3 = resPosOut.data.data.map(row => _objectSpread(_objectSpread({}, row), {}, {
            items: row.items.filter(Item => Item.itemName._id === id && parseFloat(Item.itemQty) >= 0)
          })).filter(row => row.items.length > 0);
          setPosOut(formatDate3.reverse());
          var resIReturn = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/itemReturn"));
          var formatDate2 = resIReturn.data.data.map(row => _objectSpread(_objectSpread({}, row), {}, {
            itemsQtyArray: row.itemsQtyArray.filter(Item => Item.itemName._id === id && parseFloat(Item.newItemOut) > 0)
          })).filter(row => row.itemsQtyArray.length > 0);
          setItemReturn(formatDate2);
          setLoadingData2(true);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData2(true);
        }
      });
      return function handleFetch() {
        return _ref10.apply(this, arguments);
      };
    }();
    handleFetch();
  }, [id]);
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    stock = _useState26[0],
    setStock = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    totalPurchase = _useState28[0],
    settotalPurchase = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    totalGeneralOut = _useState30[0],
    settotalGeneralOut2 = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    completed = _useState32[0],
    setCompleted = _useState32[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (loadingData2) {
      var totalPosOut = posOut === null || posOut === void 0 ? void 0 : posOut.reduce((acc, row) => {
        return acc + row.items.reduce((sum, Item) => sum + parseFloat(Item.itemQty), 0);
      }, 0);
      var totalOut = itemOut === null || itemOut === void 0 ? void 0 : itemOut.reduce((acc, row) => {
        return acc + row.itemsQtyArray.reduce((sum, Item) => sum + parseFloat(Item.newItemOut), 0);
      }, 0);
      var totalReturn = itemReturn === null || itemReturn === void 0 ? void 0 : itemReturn.reduce((acc, row) => {
        return acc + row.itemsQtyArray.reduce((sum, Item) => sum + parseFloat(Item.newItemOut), 0);
      }, 0);
      var totalGeneralOut2 = Number(totalPosOut) + Number(totalOut) - totalReturn;
      var totalPurchase2 = itemPurchase === null || itemPurchase === void 0 ? void 0 : itemPurchase.reduce((acc, row) => {
        return acc + row.items.reduce((sum, Item) => sum + parseFloat(Item.itemQty), 0);
      }, 0);
      settotalPurchase(totalPurchase2);
      settotalGeneralOut2(totalGeneralOut2);
      var stock1 = parseFloat(totalPurchase2 - totalGeneralOut2).toFixed(2);
      setStock(Math.round(stock1 * 100) / 100);
      setCompleted(true);
    }
  }, [itemPurchase, posOut, itemOut, itemReturn, loadingData2]);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null),
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
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState34 = _slicedToArray(_useState33, 2),
    show = _useState34[0],
    setShow = _useState34[1];
  var handleShow = e => {
    setShow(e);
    setAnchorEl(null);
  };
  var fetchStock = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/update-item/").concat(id), {
          itemQuantity: stock
        });
      } catch (error) {
        console.log(error);
      }
    });
    return function fetchStock() {
      return _ref11.apply(this, arguments);
    };
  }();
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState36 = _slicedToArray(_useState35, 2),
    item = _useState36[0],
    SetItems = _useState36[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/item");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchItem = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get(apiUrl);
          SetItems(res.data.data.reverse());
          setLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchItem() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchItem();
  }, []);
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState38 = _slicedToArray(_useState37, 2),
    reason = _useState38[0],
    setReason = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState40 = _slicedToArray(_useState39, 2),
    Comments1 = _useState40[0],
    setComments = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    notification = _useState42[0],
    setNotification = _useState42[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchComment = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        try {
          var _res$data2, _resNotification$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/comment"));
          var resp = (_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.filter(row => row.CommentInfo.idInfo === id);
          setComments(resp.reverse());
          var resNotification = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/notification"));
          setNotification((_resNotification$data = resNotification.data) === null || _resNotification$data === void 0 || (_resNotification$data = _resNotification$data.data) === null || _resNotification$data === void 0 ? void 0 : _resNotification$data.filter(row => row.idInfo === id));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchComment() {
        return _ref13.apply(this, arguments);
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
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    loading = _useState44[0],
    setLoading = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    loadingOpenModal = _useState46[0],
    setLoadingOpenModal = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    ErrorOpenModal = _useState48[0],
    setErrorOpenModal = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState50 = _slicedToArray(_useState49, 2),
    errorMessage = _useState50[0],
    setErrorMessage = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState52 = _slicedToArray(_useState51, 2),
    loadingOpenModalPicture = _useState52[0],
    setLoadingOpenModalPicture = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState54 = _slicedToArray(_useState53, 2),
    loadingOpenModalDelete = _useState54[0],
    setLoadingOpenModalDelete = _useState54[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleOpenPicture = () => {
    setLoadingOpenModalPicture(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleOpenDelete = () => {
    setLoadingOpenModalDelete(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClosePicture = () => {
    setLoadingOpenModalPicture(false);
    window.location.reload();
  };
  var handleCloseDelete = () => {
    setLoadingOpenModalDelete(false);
    window.location.reload();
  };
  var handleError = msg => {
    setErrorMessage(typeof msg === 'string' ? msg : "Unknown Error");
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    setLoadingOpenModal(false);
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  {/** Loading End */}
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState56 = _slicedToArray(_useState55, 2),
    ItemName = _useState56[0],
    setItemName = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState58 = _slicedToArray(_useState57, 2),
    imagesURL = _useState58[0],
    setImagesURL = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState60 = _slicedToArray(_useState59, 2),
    loadingData1 = _useState60[0],
    setLoadingData1 = _useState60[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchEId = /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator(function* () {
        try {
          if (id) {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/get-item/").concat(id));
            setItemName(res.data.data.itemName);
            if (res.data.data && res.data.data.data != null) {
              var buffer = new Uint8Array(res.data.data.data.data);
              var bold = new Blob([buffer], {
                type: "".concat(res.data.data.contentType)
              });
              var reader = new FileReader();
              reader.readAsDataURL(bold);
              reader.onloadend = () => {
                setImagesURL(reader.result);
              };
            } else {
              setImagesURL(null);
            }
          }
          setLoadingData1(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData1(false);
        }
      });
      return function fetchEId() {
        return _ref14.apply(this, arguments);
      };
    }();
    fetchEId();
  }, [id]);
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState62 = _slicedToArray(_useState61, 2),
    images = _useState62[0],
    setImages = _useState62[1];
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState64 = _slicedToArray(_useState63, 2),
    images1 = _useState64[0],
    setImages1 = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState66 = _slicedToArray(_useState65, 2),
    imagesURL1 = _useState66[0],
    setImagesURL1 = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState68 = _slicedToArray(_useState67, 2),
    uploadedImage = _useState68[0],
    setUploadedImage = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState70 = _slicedToArray(_useState69, 2),
    uploadedImageURL = _useState70[0],
    setUploadedImageURL = _useState70[1];
  function handleBase64(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.onerror = error => {
      console.log("error", error);
    };
    setUploadedImageURL(e.target.files[0]);
  }
  var handleShowInput = () => {
    setUploadedImage('');
  };
  var handleImageSubmit = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var formData = new FormData();
      formData.append('image', uploadedImageURL);
      formData.append('employeeName', id);
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/upload-image-item/").concat(id), formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        handleOpenPicture();
      } catch (error) {
        handleError(error.response ? JSON.stringify(error.response.data) : error.message);
      }
    });
    return function handleImageSubmit(_x) {
      return _ref15.apply(this, arguments);
    };
  }();
  var handleDeleteImage = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* () {
      try {
        console.log("Deleting image for item:", id);
        var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/update-item/").concat(id), {
          data: null,
          contentType: null
        });
        console.log("Delete response:", res.data);
        setImagesURL(null);
        handleOpenDelete();
      } catch (error) {
        console.error("Delete error:", error);
        handleError(error.response ? JSON.stringify(error.response.data) : error.message);
      }
    });
    return function handleDeleteImage() {
      return _ref16.apply(this, arguments);
    };
  }();
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_34___default()(Date.now());
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo,
        dateComment
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/create-comment/"), data);
        if (res) {
          setReason("");
          handleOpen();
          var newData = res.data.data;
          setComments([newData, ...Comments1]);
        }
      } catch (error) {
        if (error) {
          handleError(error.response ? JSON.stringify(error.response.data) : error.message);
        }
      }
    });
    return function handleSubmitEdit(_x2) {
      return _ref17.apply(this, arguments);
    };
  }();
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState('1'),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    value3 = _React$useState4[0],
    setValue3 = _React$useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result = localStorage.getItem('TabItemView');
    if (result) {
      setValue3(result);
    }
  }, []);
  var handleChange3 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('TabItemView', changeValue);
  };
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState72 = _slicedToArray(_useState71, 2),
    search = _useState72[0],
    setSearch = _useState72[1];
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState74 = _slicedToArray(_useState73, 2),
    debouncedSearch = _useState74[0],
    setDebouncedSearch = _useState74[1];
  var _useState75 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState76 = _slicedToArray(_useState75, 2),
    search2 = _useState76[0],
    setSearch2 = _useState76[1];
  var _useState77 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState78 = _slicedToArray(_useState77, 2),
    debouncedSearch2 = _useState78[0],
    setDebouncedSearch2 = _useState78[1];
  var _useState79 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState80 = _slicedToArray(_useState79, 2),
    search3 = _useState80[0],
    setSearch3 = _useState80[1];
  var _useState81 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState82 = _slicedToArray(_useState81, 2),
    debouncedSearch3 = _useState82[0],
    setDebouncedSearch3 = _useState82[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handler = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(handler);
  }, [search]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handler = setTimeout(() => setDebouncedSearch2(search2), 300);
    return () => clearTimeout(handler);
  }, [search2]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handler = setTimeout(() => setDebouncedSearch3(search3), 300);
    return () => clearTimeout(handler);
  }, [search3]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result = localStorage.getItem('QuickFilterItemPurchaseItem-Summary');
    if (result) {
      setSearch(result);
    }
  }, []);
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
    localStorage.setItem('QuickFilterItemPurchaseItem-Summary', value);
  };
  var newArray = (debouncedSearch !== '' ? itemPurchase.filter(row => {
    var _row$description, _row$manufacturer, _row$manufacturerNumb;
    return row.itemPurchaseNumber.toString().includes(debouncedSearch) || (((_row$description = row.description) === null || _row$description === void 0 ? void 0 : _row$description.toString()) || "").toLowerCase().includes(debouncedSearch.toLowerCase()) || row.projectName && row.projectName.name.toLowerCase().includes(debouncedSearch.toLowerCase()) || (((_row$manufacturer = row.manufacturer) === null || _row$manufacturer === void 0 ? void 0 : _row$manufacturer.toString()) || "").toLowerCase().includes(debouncedSearch.toLowerCase()) || (((_row$manufacturerNumb = row.manufacturerNumber) === null || _row$manufacturerNumb === void 0 ? void 0 : _row$manufacturerNumb.toString()) || "").toLowerCase().includes(debouncedSearch.toLowerCase()) || row.items.some(Item => {
      var _Item$itemName$itemNa;
      return Item.itemName !== undefined && (((_Item$itemName$itemNa = Item.itemName.itemName) === null || _Item$itemName$itemNa === void 0 ? void 0 : _Item$itemName$itemNa.toString()) || "").toLowerCase().includes(debouncedSearch.toLowerCase());
    }) || row.items.some(Item => {
      var _Item$itemDescription;
      return Item.itemDescription !== undefined && (((_Item$itemDescription = Item.itemDescription) === null || _Item$itemDescription === void 0 ? void 0 : _Item$itemDescription.toString()) || "").toLowerCase().includes(debouncedSearch.toLowerCase());
    }) || row.items.some(Item => {
      var _Item$newDescription;
      return Item.newDescription !== undefined && (((_Item$newDescription = Item.newDescription) === null || _Item$newDescription === void 0 ? void 0 : _Item$newDescription.toString()) || "").toLowerCase().includes(debouncedSearch.toLowerCase());
    }) || dayjs__WEBPACK_IMPORTED_MODULE_34___default()(row.itemPurchaseDate).format('DD/MM/YYYY').includes(debouncedSearch);
  }) : itemPurchase).sort((a, b) => new Date(b.itemPurchaseDate || b.date) - new Date(a.itemPurchaseDate || a.date));
  var totalPurChaseTotal = newArray.length > 0 ? newArray.reduce((acc, row) => {
    return acc + row.items.reduce((sum, item) => sum + parseFloat(item.itemQty), 0);
  }, 0) : 0;
  var totalBuyPurChaseTotal = newArray.length > 0 ? newArray.filter(row => row.items.find(Item => parseFloat(Item.itemRate) !== 0)).reduce((acc, row) => {
    return acc + row.items.reduce((sum, item) => sum + parseFloat(item.itemQty), 0);
  }, 0) : 0;
  var totalAmountPurchase = newArray.map(row => _objectSpread(_objectSpread({}, row), {}, {
    items: row.items.map(Item => _objectSpread(_objectSpread({}, Item), {}, {
      totalCostInfo: Item.itemRate * Item.itemQty
    }))
  }));
  var totalPurChaseTotalAmount = totalAmountPurchase.length > 0 ? totalAmountPurchase.reduce((acc, row) => {
    return acc + row.items.reduce((sum, item) => sum + parseFloat(item.totalCostInfo), 0);
  }, 0) : 0;
  var averageCost = Math.round(totalPurChaseTotalAmount / totalBuyPurChaseTotal * 100) / 100;
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newItemOut = [];
  posOut.forEach(row => {
    newItemOut.push({
      _id: row._id,
      outNumber: 'S-' + String(row.factureNumber).padStart(6, '0'),
      itemOutDate: row.invoiceDate,
      reason: "Shop",
      reference: {
        _id: '',
        referenceName: row.customerName.customerName
      },
      itemsQtyArray: row.items.map(row1 => _objectSpread(_objectSpread({}, row1), {}, {
        newItemOut: row1.itemQty
      }))
    });
  });
  itemOut.forEach(row => {
    newItemOut.push({
      _id: row._id,
      outNumber: 'O-' + row.outNumber,
      itemOutDate: row.itemOutDate,
      reason: row.reason,
      reference: row.reference,
      itemsQtyArray: row.itemsQtyArray
    });
  });
  var _useState83 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState84 = _slicedToArray(_useState83, 2),
    filterItemOut = _useState84[0],
    setFilterItemOut = _useState84[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selectOptions === 'Month') {
      setFilterItemOut(newItemOut === null || newItemOut === void 0 ? void 0 : newItemOut.filter(row => dayjs__WEBPACK_IMPORTED_MODULE_34___default()(row.itemOutDate).format('MMMM') === month));
    } else if (selectOptions === 'Year') {
      setFilterItemOut(newItemOut === null || newItemOut === void 0 ? void 0 : newItemOut.filter(row => dayjs__WEBPACK_IMPORTED_MODULE_34___default()(row.itemOutDate).format('YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_34___default()(startDate).format('YYYY')));
    } else if (selectOptions === 'Custom') {
      setFilterItemOut(newItemOut === null || newItemOut === void 0 ? void 0 : newItemOut.filter(row => filteredData.find(Item => dayjs__WEBPACK_IMPORTED_MODULE_34___default()(Item).format('DD/MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_34___default()(row.itemOutDate).format('DD/MM/YYYY'))));
    } else if (selectOptions === 'All') {
      setFilterItemOut(newItemOut);
    }
  }, [selectOptions, month, startDate, filteredData]);
  var parseDate = dStr => {
    if (!dStr) return 0;
    var parts = String(dStr).split('/');
    if (parts.length === 3) return new Date(parts[2], parts[1] - 1, parts[0]).getTime();
    return new Date(dStr).getTime();
  };
  var newArray2 = (debouncedSearch2 !== '' ? newItemOut.filter(row => {
    var _row$reason, _row$outNumber;
    return (((_row$reason = row.reason) === null || _row$reason === void 0 ? void 0 : _row$reason.toString()) || "").toLowerCase().includes(debouncedSearch2.toLowerCase()) || (((_row$outNumber = row.outNumber) === null || _row$outNumber === void 0 ? void 0 : _row$outNumber.toString()) || "").toLowerCase().includes(debouncedSearch2.toLowerCase()) || row.reference && row.reference.referenceName && row.reference.referenceName.toLowerCase().includes(debouncedSearch2.toLowerCase()) || row.itemsQtyArray.some(Item => {
      var _Item$itemName$itemNa2;
      return Item.itemName !== undefined && (((_Item$itemName$itemNa2 = Item.itemName.itemName) === null || _Item$itemName$itemNa2 === void 0 ? void 0 : _Item$itemName$itemNa2.toString()) || "").toLowerCase().includes(debouncedSearch2.toLowerCase());
    }) || row.itemsQtyArray.some(Item => {
      var _Item$itemDescription2;
      return Item.itemDescription !== undefined && (((_Item$itemDescription2 = Item.itemDescription) === null || _Item$itemDescription2 === void 0 ? void 0 : _Item$itemDescription2.toString()) || "").toLowerCase().includes(debouncedSearch2.toLowerCase());
    }) || row.itemsQtyArray.some(Item => {
      var _Item$newDescription2;
      return Item.newDescription !== undefined && (((_Item$newDescription2 = Item.newDescription) === null || _Item$newDescription2 === void 0 ? void 0 : _Item$newDescription2.toString()) || "").toLowerCase().includes(debouncedSearch2.toLowerCase());
    }) || dayjs__WEBPACK_IMPORTED_MODULE_34___default()(row.itemOutDate).format('DD/MM/YYYY').includes(debouncedSearch2);
  }) : newItemOut).sort((a, b) => parseDate(b.itemOutDate || b.date) - parseDate(a.itemOutDate || a.date));
  var totalOutTotal = newArray2.length > 0 ? newArray2.reduce((acc, row) => {
    return acc + row.itemsQtyArray.reduce((sum, item) => sum + (item.newItemOut !== undefined ? parseFloat(item.newItemOut) : 0), 0);
  }, 0) : 0;
  var handleSearch3 = e => {
    var value = e.target.value;
    setSearch3(value);
  };
  var newArray3 = (debouncedSearch3 !== '' ? itemReturn.filter(row => {
    var _row$reason2, _row$outNumber2;
    return (((_row$reason2 = row.reason) === null || _row$reason2 === void 0 ? void 0 : _row$reason2.toString()) || "").toLowerCase().includes(debouncedSearch3.toLowerCase()) || (((_row$outNumber2 = row.outNumber) === null || _row$outNumber2 === void 0 ? void 0 : _row$outNumber2.toString()) || "").toLowerCase().includes(debouncedSearch3.toLowerCase()) || row.reference && row.reference.referenceName && row.reference.referenceName.toLowerCase().includes(debouncedSearch3.toLowerCase()) || row.itemsQtyArray.some(Item => Item.itemName.itemName.toLowerCase().includes(debouncedSearch3.toLowerCase())) || row.itemsQtyArray.some(Item => Item.itemDescription.toLowerCase().includes(debouncedSearch3.toLowerCase())) || dayjs__WEBPACK_IMPORTED_MODULE_34___default()(row.itemOutDate).format('DD/MM/YYYY').includes(debouncedSearch3);
  }) : itemReturn).sort((a, b) => parseDate(b.itemReturnDate || b.date) - parseDate(a.itemReturnDate || a.date));
  var totalReturnTotal = newArray3.length > 0 ? newArray3.reduce((acc, row) => {
    return acc + row.itemsQtyArray.reduce((sum, item) => sum + parseFloat(item.newItemOut), 0);
  }, 0) : 0;
  var _useState85 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState86 = _slicedToArray(_useState85, 2),
    openView = _useState86[0],
    setOpenView = _useState86[1];
  var _useState87 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState88 = _slicedToArray(_useState87, 2),
    idView = _useState88[0],
    setIdView = _useState88[1];
  var _useState89 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState90 = _slicedToArray(_useState89, 2),
    itemPurchaseView = _useState90[0],
    setItemPurchaseView = _useState90[1];
  var handleOpenView = id => {
    setOpenView(true);
    setIdView(id);
  };
  var handleCloseView = () => {
    setOpenView(false);
    setIdView(null);
    setItemPurchaseView(null);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref18 = _asyncToGenerator(function* () {
        if (idView !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/get-itemPurchase/").concat(idView));
            setItemPurchaseView(res.data.data);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchData2() {
        return _ref18.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [idView]);
  var _useState91 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState92 = _slicedToArray(_useState91, 2),
    openView2 = _useState92[0],
    setOpenView2 = _useState92[1];
  var _useState93 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState94 = _slicedToArray(_useState93, 2),
    idView2 = _useState94[0],
    setIdView2 = _useState94[1];
  var _useState95 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState96 = _slicedToArray(_useState95, 2),
    itemPurchaseView2 = _useState96[0],
    setItemPurchaseView2 = _useState96[1];
  var handleOpenView2 = id => {
    setOpenView2(true);
    setIdView2(id);
  };
  var handleCloseView2 = () => {
    setOpenView2(false);
    setIdView2(null);
    setItemPurchaseView2(null);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref19 = _asyncToGenerator(function* () {
        if (idView2 !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_26__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_27__.ENDPOINT_URL, "/get-itemOut/").concat(idView2));
            setItemPurchaseView2(res.data.data);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchData2() {
        return _ref19.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [idView2]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: show === 1 ? 12 : 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      background: 'white'
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_32__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, item === null || item === void 0 || (_item$filter = item.filter(row => row._id === id)) === null || _item$filter === void 0 ? void 0 : _item$filter.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      fontWeight: 'bold',
      fontSize: '20px'
    }
  }, row.itemName.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, row.typeItem)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-controls": open ? 'demo-customized-menu' : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? 'true' : undefined,
    variant: "contained",
    disableElevation: true,
    onClick: handleClick,
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_36__["default"], null),
    sx: {
      bgcolor: 'gray',
      '&:hover': {
        color: 'gray',
        bgcolor: 'white',
        border: '1px solid gray'
      }
    }
  }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "demo-customized-menu",
    MenuListProps: {
      'aria-labelledby': 'demo-customized-button'
    },
    anchorEl: anchorEl,
    open: open,
    onClose: handleCloseMenu,
    TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: ItemInfoU.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.NavLink, {
    to: "/ItemFormUpdate/".concat(row._id),
    className: "LinkName",
    style: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_44__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.NavLink, {
    to: "/ItemFormClone/".concat(row._id),
    className: "LinkName",
    style: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_43__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Clone"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => {
      handleShow(2);
      handleCloseMenu();
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'gray'
    }
  }, "Comments"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => {
      handleShow(3);
      handleCloseMenu();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'gray'
    }
  }, "History")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_37__["default"], {
    value: value3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      borderBottom: 1,
      borderColor: 'divider'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_38__["default"], {
    onChange: handleChange3,
    "aria-label": "lab API tabs example",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "In-Summary",
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Out-Summary",
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Return-Summary",
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Total-Summary",
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_39__["default"], {
    value: "1",
    sx: {
      height: '500px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '15px',
      padding: '20px',
      fontSize: '20px',
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    style: {
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'gray'
    }
  }, row.itemName.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Store")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'gray'
    }
  }, row.itemStore.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'gray'
    }
  }, row.itemCategory.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Brand")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.itemBrand.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Item #")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.itemUpc.newCode), "-", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, String(row.itemUpc.itemNumber).padStart(6, '0')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Action")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      color: 'gray'
    }
  }, "   ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
    title: "Delete-Image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disabled: user.data.role !== 'CEO',
    onClick: handleDeleteImage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '250px',
      width: '500px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%'
    }
  }, loadingData1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_32__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, imagesURL !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    style: {
      height: '250px',
      width: '300px'
    },
    src: imagesURL,
    alt: row.itemName
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, uploadedImage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    width: 400,
    height: 200,
    src: uploadedImage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "left",
    style: {
      position: 'absolute'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleShowInput,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_48__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    onClick: handleImageSubmit
  }, "Upload")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    onChange: handleBase64,
    type: "file"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '15px',
      padding: '20px',
      justifyContent: 'space-between',
      fontSize: '20px',
      marginTop: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Manufacturer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'gray'
    }
  }, row.itemManufacturer.toUpperCase())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, row.itemDimension ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Dimension")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.itemDimension), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " MTR"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Dimension")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "MTR")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Cost Unit Price")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    hidden: user.data.role !== 'CEO',
    style: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    "data-prefix": true
  }, "$"), row.itemCostPrice)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Unit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.unit.toUpperCase())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, row.itemWeight ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Weight")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.itemWeight), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Kg"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Weight")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Kg")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Sale Unit Price")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    "data-prefix": true
  }, "$"), row.itemSellingPrice))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Stock")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "left",
    style: {
      color: 'gray',
      textAlign: 'left'
    }
  }, " ", row.itemQuantity, " ", completed === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, " ", row.itemQuantity !== stock ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: fetchStock,
    className: "btnCustomer"
  }, "  sync") : '') : "", " ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", {
    style: {
      display: 'inline-block',
      fontFamily: 'system-ui',
      width: '100%',
      lineHeight: '20px',
      color: 'gray'
    }
  }, row.itemDescription.toUpperCase())))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_39__["default"], {
    value: "2",
    sx: {
      height: '500px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      position: 'relative',
      width: '200px',
      backgroundColor: '#202a5a',
      color: 'white',
      marginBottom: '10px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      textAlign: 'center',
      width: '100%'
    }
  }, "Total Purchase: ", totalPurChaseTotal !== undefined ? totalPurChaseTotal : 0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    hidden: user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_40__.PieChart, _extends({
    series: [{
      data: [{
        "id": 1,
        "label": "Quantity Buy",
        "value": totalBuyPurChaseTotal
      }, {
        "id": 2,
        "label": "Total Cost",
        "value": totalPurChaseTotalAmount
      }, {
        "id": 3,
        "label": "Average Cost",
        "value": averageCost
      }],
      innerRadius: 80
    }]
  }, size), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PieCenterLabel, null, "Average Cost $", averageCost))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "secondTable",
    style: {
      fontSize: '80%',
      marginBottom: '5px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Manufacturer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, " Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, " Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, newArray.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '30px'
    }
  }, row.itemPurchaseNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '30px',
      borderLeft: '1px solid #DDD'
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_34___default()(row.itemPurchaseDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '100px',
      borderLeft: '1px solid #DDD'
    }
  }, row.manufacturer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '50px',
      borderLeft: '1px solid #DDD'
    }
  }, row.manufacturerNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '250px',
      borderLeft: '1px solid #DDD'
    }
  }, row.projectName !== undefined ? row.projectName.name : row.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '40px',
      borderLeft: '1px solid #DDD'
    }
  }, row.items.filter(Item => parseFloat(Item.itemQty) >= 0).map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$", Item.itemRate)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '40px',
      borderLeft: '1px solid #DDD'
    }
  }, row.items.filter(Item => {
    var _Item$itemName;
    return ((_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName._id) === id;
  }).map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.itemQty)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '40px',
      borderLeft: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "View"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: () => handleOpenView(row._id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_47__["default"], {
    style: {
      color: '#202a5a'
    }
  })))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_39__["default"], {
    value: "3",
    sx: {
      height: '500px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      position: 'relative',
      width: '200px',
      backgroundColor: '#202a5a',
      color: 'white',
      marginBottom: '10px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      textAlign: 'center',
      width: '100%'
    }
  }, "Total Out: ", totalOutTotal !== undefined ? totalOutTotal : 0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "search",
    id: "search2",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "secondTable",
    style: {
      fontSize: '80%',
      marginBottom: '5px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, " Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, " Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, newArray2.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '30px'
    }
  }, row.outNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '30px',
      borderLeft: '1px solid #DDD'
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_34___default()(row.itemOutDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '100px',
      borderLeft: '1px solid #DDD'
    }
  }, row.reason), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '250px',
      borderLeft: '1px solid #DDD'
    }
  }, row.reference !== undefined ? row.reference.referenceName : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '40px',
      borderLeft: '1px solid #DDD'
    }
  }, row.itemsQtyArray.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.newItemOut)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '40px',
      borderLeft: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "View"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: () => handleOpenView2(row._id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_47__["default"], {
    style: {
      color: '#202a5a'
    }
  })))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_39__["default"], {
    value: "4",
    sx: {
      height: '500px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      position: 'relative',
      width: '200px',
      backgroundColor: '#202a5a',
      color: 'white',
      marginBottom: '10px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      textAlign: 'center',
      width: '100%'
    }
  }, "Total Return: ", totalReturnTotal !== undefined ? totalReturnTotal : 0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "search",
    id: "search2",
    value: search3,
    variant: "standard",
    onChange: handleSearch3
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "secondTable",
    style: {
      fontSize: '80%',
      marginBottom: '5px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, " Qty"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, newArray3.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '60px'
    }
  }, row.outNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '30px',
      borderLeft: '1px solid #DDD'
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_34___default()(row.itemOutDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '100px',
      borderLeft: '1px solid #DDD'
    }
  }, row.reason), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '200px',
      borderLeft: '1px solid #DDD'
    }
  }, row.reference !== undefined ? row.reference.referenceName : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      width: '40px',
      borderLeft: '1px solid #DDD'
    }
  }, row.itemsQtyArray.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.newItemOut))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_39__["default"], {
    value: "5",
    sx: {
      height: '500px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      position: 'relative',
      top: '90px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      textAlign: 'center',
      color: 'gray'
    }
  }, "Summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_40__.PieChart, {
    colors: palette,
    series: [{
      arcLabel: item => "".concat(item.label, "(").concat(item.value, ")"),
      arcLabelMinAngle: 35,
      highlightScope: {
        faded: 'global',
        highlighted: 'item'
      },
      faded: {
        innerRadius: 30,
        additionalRadius: -30,
        color: 'gray'
      },
      data: [{
        "id": 1,
        "label": "I-Purchase",
        "value": totalPurchase
      }, {
        "id": 2,
        "label": "I-Out",
        "value": totalGeneralOut
      }, {
        "id": 3,
        "label": "Stock",
        "value": stock
      }]
    }],
    width: 450,
    height: 250,
    sx: {
      ["& .".concat(_mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_41__.pieArcLabelClasses.root)]: {
        fill: 'white',
        fontWeight: 'bold'
      }
    }
  }))))))))))))), show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "COMMENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "Message",
    id: "Message",
    value: reason,
    onChange: e => setReason(e.target.value),
    multiline: true,
    rows: 4,
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer"
  }, "Post Comment")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '500px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, Comments1.map((row, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '20px',
      padding: '10px',
      borderBottom: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'gray',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }
  }, row.CommentInfo.person.charAt(0).toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      fontWeight: 'bold'
    }
  }, row.CommentInfo.person), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      color: 'gray',
      fontSize: '12px'
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_34___default()(row.dateComment).format('DD MMMM YYYY [at] HH:mm')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", {
    style: {
      fontFamily: 'inherit',
      whiteSpace: 'pre-wrap'
    }
  }, row.CommentInfo.reason)))))))) : '', show === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "HISTORY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '600px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, notification.map((row, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '20px',
      padding: '10px',
      borderBottom: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#202a5a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }
  }, row.person.charAt(0).toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      fontWeight: 'bold'
    }
  }, row.person), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      color: 'gray',
      fontSize: '12px'
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_34___default()(row.dateNotification).format('DD MMMM YYYY [at] HH:mm')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, row.notification)))))))) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_15__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_32__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_33__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_15__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_32__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      color: 'red',
      fontSize: '14px'
    }
  }, errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: loadingOpenModalPicture,
    onClose: handleClosePicture,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_15__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_32__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Image Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClosePicture,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: loadingOpenModalDelete,
    onClose: handleCloseDelete,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_15__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_32__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Image Deleted successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseDelete,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: openView,
    onClose: handleCloseView,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 900
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleCloseView,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), itemPurchaseView !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, itemPurchaseView.Create.person, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "IP-", itemPurchaseView.itemPurchaseNumber), " on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, itemPurchaseView.Create.dateComment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    style: {
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Expense Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 3
  }, dayjs__WEBPACK_IMPORTED_MODULE_34___default()(itemPurchaseView.itemPurchaseDate).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 3
  }, itemPurchaseView.projectName !== undefined ? itemPurchaseView.projectName.name : itemPurchaseView.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 3
  }, itemPurchaseView.manufacturer + ' / ' + itemPurchaseView.manufacturerNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 3
  }, itemPurchaseView.note)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      maxHeight: 400,
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    "aria-label": "collapsible table",
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Price($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Amount Paid(FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Rate "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Amount Paid($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Total($)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, itemPurchaseView.items.filter(row => parseFloat(row.itemQty) > 0 || row.newDescription !== undefined).map((row, i) => {
    var _row$itemName, _row$itemName2, _row$itemName3, _row$itemName4, _row$itemName5, _row$itemName6, _row$itemName7, _row$itemName8, _row$itemName9, _row$itemName0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      key: row.idRow
    }, row.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      colSpan: 9,
      align: "center",
      sx: {
        fontWeight: 'bold'
      }
    }, row.newDescription) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: id === ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: id === ((_row$itemName2 = row.itemName) === null || _row$itemName2 === void 0 ? void 0 : _row$itemName2._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, (_row$itemName3 = row.itemName) === null || _row$itemName3 === void 0 ? void 0 : _row$itemName3.itemName, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: id === ((_row$itemName4 = row.itemName) === null || _row$itemName4 === void 0 ? void 0 : _row$itemName4._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, row.itemDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: id === ((_row$itemName5 = row.itemName) === null || _row$itemName5 === void 0 ? void 0 : _row$itemName5._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, row.itemQty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: id === ((_row$itemName6 = row.itemName) === null || _row$itemName6 === void 0 ? void 0 : _row$itemName6._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, parseFloat(row.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: id === ((_row$itemName7 = row.itemName) === null || _row$itemName7 === void 0 ? void 0 : _row$itemName7._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, "FC", row.totalAmountFC !== undefined ? parseFloat(row.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: id === ((_row$itemName8 = row.itemName) === null || _row$itemName8 === void 0 ? void 0 : _row$itemName8._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, row.Taux !== undefined ? parseFloat(row.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: id === ((_row$itemName9 = row.itemName) === null || _row$itemName9 === void 0 ? void 0 : _row$itemName9._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, "$", parseFloat(row.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: id === ((_row$itemName0 = row.itemName) === null || _row$itemName0 === void 0 ? void 0 : _row$itemName0._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, row.fcConvertToUsdTotal !== undefined ? parseFloat(row.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 2
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "FC", itemPurchaseView.totalFC !== undefined ? parseFloat(itemPurchaseView.totalFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "$", itemPurchaseView.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "$", itemPurchaseView.totalUSD !== undefined ? parseFloat(itemPurchaseView.totalUSD).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))))))))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: openView2,
    onClose: handleCloseView2,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 850
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleCloseView2,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), itemPurchaseView2 !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, itemPurchaseView2.Create.person, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Create O-0", itemPurchaseView2.outNumber), " on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, itemPurchaseView2.Create.dateComment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    style: {
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Return Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 3
  }, dayjs__WEBPACK_IMPORTED_MODULE_34___default()(itemPurchaseView2.itemOutDate).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 3
  }, itemPurchaseView2.reason !== undefined ? itemPurchaseView2.reason : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 3
  }, itemPurchaseView2.reference !== undefined ? itemPurchaseView2.reference.referenceName : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    colSpan: 3
  }, itemPurchaseView2.description !== undefined ? itemPurchaseView2.description : '')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      maxHeight: 400,
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    "aria-label": "collapsible table",
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, "Qty"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, itemPurchaseView2.itemsQtyArray.filter(row => parseFloat(row.newItemOut) > 0 || row.newDescription !== undefined).map((row, i) => {
    var _row$itemName1, _row$itemName10, _row$itemName11, _row$itemName12, _row$itemName13;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      key: row.idRow
    }, row.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      colSpan: 4,
      align: "center",
      sx: {
        fontWeight: 'bold'
      }
    }, row.newDescription) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: id === ((_row$itemName1 = row.itemName) === null || _row$itemName1 === void 0 ? void 0 : _row$itemName1._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: id === ((_row$itemName10 = row.itemName) === null || _row$itemName10 === void 0 ? void 0 : _row$itemName10._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, (_row$itemName11 = row.itemName) === null || _row$itemName11 === void 0 ? void 0 : _row$itemName11.itemName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: id === ((_row$itemName12 = row.itemName) === null || _row$itemName12 === void 0 ? void 0 : _row$itemName12._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, row.itemDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sx: id === ((_row$itemName13 = row.itemName) === null || _row$itemName13 === void 0 ? void 0 : _row$itemName13._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, row.newItemOut)));
  }))))))))) : null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemInformationVIew);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfSXRlbVZpZXdfSXRlbUluZm9ybWF0aW9uVklld19qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiOztBQUVBLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUF1QjtBQUMzRSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7QUFDN0MsZUFBZSxrQkFBZTtBQUM5QjtBQUNBLENBQUMsd0I7Ozs7Ozs7Ozs7QUNaWTtBQUNiOztBQUVBLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUF1QjtBQUMzRSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7QUFDN0MsZUFBZSxrQkFBZTtBQUM5QjtBQUNBLENBQUMsMEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxjQUFjLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZixDQUFrRDtBQUN6QjtBQUN5VjtBQUNsVDtBQUNwQjtBQUNsQjtBQUN3QjtBQUMwQjtBQUNqQztBQUNZO0FBQ2M7QUFDdEI7QUFDZTtBQUNwQztBQUNvQjtBQUN3QjtBQUNiO0FBQ2E7QUFDakI7QUFDTjtBQUNDO0FBQ0k7QUFDQTtBQUNtQjtBQUNYO0FBQ007QUFDUTtBQUNQO0FBQ0g7QUFFaEUsSUFBTXVFLE9BQU8sR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDO0FBQ3pDLElBQU1DLFdBQVcsR0FBRzVE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S2V5Ym9hcmRBcnJvd0Rvd24uanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL1JlbW92ZUNpcmNsZU91dGxpbmUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9GaWxlQ29weS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvSXRlbVZpZXcvSXRlbUluZm9ybWF0aW9uVklldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNNy40MSA4LjU5IDEyIDEzLjE3bDQuNTktNC41OEwxOCAxMGwtNiA2LTYtNnpcIlxufSksICdLZXlib2FyZEFycm93RG93bicpOyIsIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk03IDExdjJoMTB2LTJ6bTUtOUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOFwiXG59KSwgJ1JlbW92ZUNpcmNsZU91dGxpbmUnKTsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xNiAxSDRjLTEuMSAwLTIgLjktMiAydjE0aDJWM2gxMnptLTEgNCA2IDZ2MTBjMCAxLjEtLjkgMi0yIDJINy45OUM2Ljg5IDIzIDYgMjIuMSA2IDIxbC4wMS0xNGMwLTEuMS44OS0yIDEuOTktMnptLTEgN2g1LjVMMTQgNi41elwiXG59KSwgJ0ZpbGVDb3B5Jyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJ1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgUGFwZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgc3R5bGVkLCBGb3JtTGFiZWwsIFJhZGlvR3JvdXAsIEZvcm1Db250cm9sTGFiZWwsIFJhZGlvLCBJbnB1dCwgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIE1vZGFsLCBCYWNrZHJvcCwgRmFkZSwgQm94LCBBdXRvY29tcGxldGUsIEJ1dHRvbiwgTWVudSwgRGl2aWRlciwgVGFiLCBDYXJkLCBDYXJkQ29udGVudCwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVIZWFkLCBUYWJsZUNlbGwsIFRhYmxlUm93LCBUYWJsZUNvbnRhaW5lciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcywgdXNlT3V0bGV0Q29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2VsZWN0Q3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd24nO1xyXG5pbXBvcnQgeyBUYWJDb250ZXh0LCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ0BtdWkvbGFiJztcclxuaW1wb3J0IHsgUGllQ2hhcnQsIHBpZUFyY0xhYmVsQ2xhc3NlcyB9IGZyb20gJ0BtdWkveC1jaGFydHMvUGllQ2hhcnQnO1xyXG5pbXBvcnQgeyB1c2VEcmF3aW5nQXJlYSB9IGZyb20gJ0BtdWkveC1jaGFydHMvaG9va3MnO1xyXG5pbXBvcnQgeyBGaWxlQ29weSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0JztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycyc7XHJcbmltcG9ydCBWaXNpYmlsaXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHknO1xyXG5pbXBvcnQgVmlzaWJpbGl0eU9mZkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5T2ZmJztcclxuaW1wb3J0IFJlbW92ZUNpcmNsZU91dGxpbmUgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZW1vdmVDaXJjbGVPdXRsaW5lJztcclxuaW1wb3J0IHsgRGVtb0NvbnRhaW5lciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvaW50ZXJuYWxzL2RlbW8nO1xyXG5pbXBvcnQgeyBBZGFwdGVyRGF5anMgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0FkYXB0ZXJEYXlqcyc7XHJcblxyXG5jb25zdCBwYWxldHRlID0gWydibHVlJywgJ3JlZCcsICdvcmFuZ2UnXTtcclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IERlbGV0ZVRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBzaXplID0ge1xyXG4gIHdpZHRoOiA0MDAsXHJcbiAgaGVpZ2h0OiAyMDAsXHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRUZXh0ID0gc3R5bGVkKCd0ZXh0JykoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBmaWxsOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICB0ZXh0QW5jaG9yOiAnbWlkZGxlJyxcclxuICBkb21pbmFudEJhc2VsaW5lOiAnY2VudHJhbCcsXHJcbiAgZm9udFNpemU6IDE1LFxyXG59KSk7XHJcbmZ1bmN0aW9uIFBpZUNlbnRlckxhYmVsKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgbGVmdCwgdG9wIH0gPSB1c2VEcmF3aW5nQXJlYSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkVGV4dCB4PXtsZWZ0ICsgd2lkdGggLyAyfSB5PXt0b3AgKyBoZWlnaHQgLyAyfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdHlsZWRUZXh0PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEl0ZW1JbmZvcm1hdGlvblZJZXcoKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICBjb25zdCBbZ3JhbnRBY2Nlc3MsIHNldEdyYW50QWNjZXNzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hOdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ3JhbnRBY2Nlc3NgKTtcclxuICAgICAgICByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy51c2VySUQgPT09IHVzZXIuZGF0YS5pZClcclxuICAgICAgICAgIC5tYXAoKHJvdykgPT4gc2V0R3JhbnRBY2Nlc3Mocm93Lm1vZHVsZXMpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaE51bWJlcigpXHJcbiAgfSwgW3VzZXJdKVxyXG4gIGNvbnN0IEl0ZW1JbmZvVSA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJJdGVtXCIgJiYgcm93LmFjY2Vzcy5lZGl0TSA9PT0gdHJ1ZSk7XHJcblxyXG5cclxuICBjb25zdCBbaXRlbVB1cmNoYXNlLCBzZXRJdGVtUHVyY2hhc2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpdGVtT3V0LCBzZXRJdGVtT3V0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcG9zT3V0LCBzZXRQb3NPdXRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpdGVtUmV0dXJuLCBzZXRJdGVtUmV0dXJuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFttb250aCwgc2V0TW9udGhdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzZWxlY3RPcHRpb25zLCBzZXRTZWxlY3RPcHRpb25zXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Zyb21EYXRlLCBzZXRGcm9tRGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgcmV0dXJuIGRhdGVcclxuICB9KTtcclxuICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgcmV0dXJuIGRhdGVcclxuICB9KTtcclxuICBjb25zdCBbZmlsdGVyZWREYXRhLCBzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IFtdO1xyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShmcm9tRGF0ZSk7XHJcbiAgICB3aGlsZSAoY3VycmVudERhdGUgPD0gZW5kRGF0ZSkge1xyXG4gICAgICBoZWFkZXJzLnB1c2goY3VycmVudERhdGUudG9EYXRlU3RyaW5nKCkpO1xyXG4gICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIDEpO1xyXG4gICAgfVxyXG4gICAgc2V0RmlsdGVyZWREYXRhKGhlYWRlcnMpXHJcbiAgfSwgW2Zyb21EYXRlLCBlbmREYXRlXSlcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VTZWxlY3RlZCA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RPcHRpb25zKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBbbG9hZGluZ0RhdGEyLCBzZXRMb2FkaW5nRGF0YTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlRmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzSXRlbU91dCA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1PdXRgKVxyXG4gICAgICAgIGNvbnN0IGZvcm1hdERhdGUxID0gcmVzSXRlbU91dC5kYXRhLmRhdGEubWFwKChyb3cpID0+ICh7XHJcbiAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICBpdGVtc1F0eUFycmF5OiByb3cuaXRlbXNRdHlBcnJheS5maWx0ZXIoKEl0ZW0pID0+IEl0ZW0uaXRlbU5hbWUuX2lkID09PSBpZCAmJiBwYXJzZUZsb2F0KEl0ZW0ubmV3SXRlbU91dCkgPiAwKVxyXG4gICAgICAgIH0pKS5maWx0ZXIocm93ID0+IHJvdy5pdGVtc1F0eUFycmF5Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgc2V0SXRlbU91dChmb3JtYXREYXRlMS5zb3J0KChhLGIpID0+IGIub3V0TnVtYmVyIC0gYS5vdXROdW1iZXIpKTtcclxuICAgICAgICBjb25zdCByZXNJdGVtUHVyY2hhc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtUHVyY2hhc2U/c3VtbWFyeT10cnVlYClcclxuICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gcmVzSXRlbVB1cmNoYXNlLmRhdGEuZGF0YS5tYXAocm93ID0+ICh7XHJcbiAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICBpdGVtczogcm93Lml0ZW1zLmZpbHRlcigoSXRlbSkgPT4gSXRlbS5pdGVtTmFtZS5faWQgPT09IGlkKVxyXG4gICAgICAgIH0pKS5maWx0ZXIocm93ID0+IHJvdy5pdGVtcy5sZW5ndGggPiAwKVxyXG4gICAgICAgIHNldEl0ZW1QdXJjaGFzZShmb3JtYXREYXRlLnNvcnQoKGEsYikgPT4gYi5pdGVtUHVyY2hhc2VOdW1iZXIgLSBhLml0ZW1QdXJjaGFzZU51bWJlcikpXHJcbiAgICAgICAgY29uc3QgcmVzUG9zT3V0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcG9zP3N1bW1hcnk9dHJ1ZWApXHJcbiAgICAgICAgY29uc3QgZm9ybWF0RGF0ZTMgPSByZXNQb3NPdXQuZGF0YS5kYXRhLm1hcCgocm93KSA9PiAoe1xyXG4gICAgICAgICAgLi4ucm93LFxyXG4gICAgICAgICAgaXRlbXM6IHJvdy5pdGVtcy5maWx0ZXIoKEl0ZW0pID0+IEl0ZW0uaXRlbU5hbWUuX2lkID09PSBpZCAmJiBwYXJzZUZsb2F0KEl0ZW0uaXRlbVF0eSkgPj0gMClcclxuICAgICAgICB9KSkuZmlsdGVyKHJvdyA9PiByb3cuaXRlbXMubGVuZ3RoID4gMClcclxuICAgICAgICBzZXRQb3NPdXQoZm9ybWF0RGF0ZTMucmV2ZXJzZSgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzSVJldHVybiA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1SZXR1cm5gKVxyXG4gICAgICAgIGNvbnN0IGZvcm1hdERhdGUyID0gcmVzSVJldHVybi5kYXRhLmRhdGEubWFwKChyb3cpID0+ICh7XHJcbiAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICBpdGVtc1F0eUFycmF5OiByb3cuaXRlbXNRdHlBcnJheS5maWx0ZXIoKEl0ZW0pID0+IEl0ZW0uaXRlbU5hbWUuX2lkID09PSBpZCAmJiBwYXJzZUZsb2F0KEl0ZW0ubmV3SXRlbU91dCkgPiAwKVxyXG4gICAgICAgIH0pKS5maWx0ZXIocm93ID0+IHJvdy5pdGVtc1F0eUFycmF5Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgc2V0SXRlbVJldHVybihmb3JtYXREYXRlMik7XHJcbiAgICAgICAgc2V0TG9hZGluZ0RhdGEyKHRydWUpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgc2V0TG9hZGluZ0RhdGEyKHRydWUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUZldGNoKClcclxuICB9LCBbaWRdKVxyXG4gIGNvbnN0IFtzdG9jaywgc2V0U3RvY2tdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbdG90YWxQdXJjaGFzZSwgc2V0dG90YWxQdXJjaGFzZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt0b3RhbEdlbmVyYWxPdXQsIHNldHRvdGFsR2VuZXJhbE91dDJdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZ0RhdGEyKSB7XHJcbiAgICAgIGNvbnN0IHRvdGFsUG9zT3V0ID0gcG9zT3V0Py5yZWR1Y2UoKGFjYywgcm93KSA9PiB7IHJldHVybiBhY2MgKyByb3cuaXRlbXMucmVkdWNlKChzdW0sIEl0ZW0pID0+IHN1bSArIHBhcnNlRmxvYXQoSXRlbS5pdGVtUXR5KSwgMCkgfSwgMClcclxuICAgICAgY29uc3QgdG90YWxPdXQgPSBpdGVtT3V0Py5yZWR1Y2UoKGFjYywgcm93KSA9PiB7IHJldHVybiBhY2MgKyByb3cuaXRlbXNRdHlBcnJheS5yZWR1Y2UoKHN1bSwgSXRlbSkgPT4gc3VtICsgcGFyc2VGbG9hdChJdGVtLm5ld0l0ZW1PdXQpLCAwKSB9LCAwKVxyXG4gICAgICBjb25zdCB0b3RhbFJldHVybiA9IGl0ZW1SZXR1cm4/LnJlZHVjZSgoYWNjLCByb3cpID0+IHsgcmV0dXJuIGFjYyArIHJvdy5pdGVtc1F0eUFycmF5LnJlZHVjZSgoc3VtLCBJdGVtKSA9PiBzdW0gKyBwYXJzZUZsb2F0KEl0ZW0ubmV3SXRlbU91dCksIDApIH0sIDApXHJcbiAgICAgIGNvbnN0IHRvdGFsR2VuZXJhbE91dDIgPSAoTnVtYmVyKHRvdGFsUG9zT3V0KSArIE51bWJlcih0b3RhbE91dCkpIC0gdG90YWxSZXR1cm5cclxuICAgICAgY29uc3QgdG90YWxQdXJjaGFzZTIgPSBpdGVtUHVyY2hhc2U/LnJlZHVjZSgoYWNjLCByb3cpID0+IHsgcmV0dXJuIGFjYyArIHJvdy5pdGVtcy5yZWR1Y2UoKHN1bSwgSXRlbSkgPT4gc3VtICsgcGFyc2VGbG9hdChJdGVtLml0ZW1RdHkpLCAwKSB9LCAwKVxyXG4gICAgICBzZXR0b3RhbFB1cmNoYXNlKHRvdGFsUHVyY2hhc2UyKVxyXG4gICAgICBzZXR0b3RhbEdlbmVyYWxPdXQyKHRvdGFsR2VuZXJhbE91dDIpXHJcbiAgICAgIGNvbnN0IHN0b2NrMSA9IHBhcnNlRmxvYXQodG90YWxQdXJjaGFzZTIgLSB0b3RhbEdlbmVyYWxPdXQyKS50b0ZpeGVkKDIpO1xyXG4gICAgICBzZXRTdG9jayhNYXRoLnJvdW5kKChzdG9jazEpICogMTAwKSAvIDEwMClcclxuICAgICAgc2V0Q29tcGxldGVkKHRydWUpXHJcbiAgICB9XHJcbiAgfSwgW2l0ZW1QdXJjaGFzZSwgcG9zT3V0LCBpdGVtT3V0LCBpdGVtUmV0dXJuLCBsb2FkaW5nRGF0YTJdKVxyXG5cclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBoYW5kbGVTaG93ID0gKGUpID0+IHtcclxuICAgIHNldFNob3coZSk7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIGNvbnN0IGZldGNoU3RvY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtaXRlbS8ke2lkfWAsIHtcclxuICAgICAgICBpdGVtUXVhbnRpdHk6IHN0b2NrXHJcbiAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFtpdGVtLCBTZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgYXBpVXJsID0gYCR7RU5EUE9JTlRfVVJMfS9pdGVtYDtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hJdGVtID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChhcGlVcmwpXHJcbiAgICAgICAgU2V0SXRlbXMocmVzLmRhdGEuZGF0YS5yZXZlcnNlKCkpXHJcbiAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoSXRlbSgpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbQ29tbWVudHMxLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25vdGlmaWNhdGlvbiwgc2V0Tm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2NvbW1lbnRgKVxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5Db21tZW50SW5mby5pZEluZm8gPT09IGlkKVxyXG4gICAgICAgIHNldENvbW1lbnRzKHJlc3AucmV2ZXJzZSgpKVxyXG4gICAgICAgIGNvbnN0IHJlc05vdGlmaWNhdGlvbiA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L25vdGlmaWNhdGlvbmApXHJcbiAgICAgICAgc2V0Tm90aWZpY2F0aW9uKHJlc05vdGlmaWNhdGlvbi5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LmlkSW5mbyA9PT0gaWQpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaENvbW1lbnQoKVxyXG4gIH0sIFtpZF0pXHJcblxyXG4gIGNvbnN0IENvbW1lbnRJbmZvID1cclxuICB7XHJcbiAgICBpZEluZm86IGlkLFxyXG4gICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUsXHJcbiAgICByZWFzb25cclxuICB9XHJcblxyXG4gIHsvKiogTG9hZGluZyBTdGFydCAqLyB9XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsUGljdHVyZSwgc2V0TG9hZGluZ09wZW5Nb2RhbFBpY3R1cmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsRGVsZXRlLCBzZXRMb2FkaW5nT3Blbk1vZGFsRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG5cclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZU9wZW5QaWN0dXJlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbFBpY3R1cmUodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVPcGVuRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbERlbGV0ZSh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlUGljdHVyZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWxQaWN0dXJlKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VEZWxldGUgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsRGVsZXRlKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAobXNnKSA9PiB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UodHlwZW9mIG1zZyA9PT0gJ3N0cmluZycgPyBtc2cgOiBcIlVua25vd24gRXJyb3JcIik7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIHsvKiogTG9hZGluZyBFbmQgKi8gfVxyXG4gIGNvbnN0IFtJdGVtTmFtZSwgc2V0SXRlbU5hbWVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2ltYWdlc1VSTCwgc2V0SW1hZ2VzVVJMXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nRGF0YTEsIHNldExvYWRpbmdEYXRhMV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hFSWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2lkfWApXHJcbiAgICAgICAgICBzZXRJdGVtTmFtZShyZXMuZGF0YS5kYXRhLml0ZW1OYW1lKVxyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEgJiYgcmVzLmRhdGEuZGF0YS5kYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkocmVzLmRhdGEuZGF0YS5kYXRhLmRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IGJvbGQgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBgJHtyZXMuZGF0YS5kYXRhLmNvbnRlbnRUeXBlfWAgfSlcclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYm9sZClcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRJbWFnZXNVUkwocmVhZGVyLnJlc3VsdClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEltYWdlc1VSTChudWxsKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nRGF0YTEoZmFsc2UpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgc2V0TG9hZGluZ0RhdGExKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaEVJZCgpXHJcbiAgfSwgW2lkXSlcclxuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2ltYWdlczEsIHNldEltYWdlczFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2ltYWdlc1VSTDEsIHNldEltYWdlc1VSTDFdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBbdXBsb2FkZWRJbWFnZSwgc2V0VXBsb2FkZWRJbWFnZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbdXBsb2FkZWRJbWFnZVVSTCwgc2V0VXBsb2FkZWRJbWFnZVVSTF0gPSB1c2VTdGF0ZSgnJylcclxuICBmdW5jdGlvbiBoYW5kbGVCYXNlNjQoZSkge1xyXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBzZXRVcGxvYWRlZEltYWdlKHJlYWRlci5yZXN1bHQpXHJcbiAgICB9XHJcbiAgICByZWFkZXIub25lcnJvciA9IGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcilcclxuICAgIH1cclxuICAgIHNldFVwbG9hZGVkSW1hZ2VVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG93SW5wdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRVcGxvYWRlZEltYWdlKCcnKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVJbWFnZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgdXBsb2FkZWRJbWFnZVVSTCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtcGxveWVlTmFtZScsIGlkKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwbG9hZC1pbWFnZS1pdGVtLyR7aWR9YCwgZm9ybURhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBoYW5kbGVPcGVuUGljdHVyZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaGFuZGxlRXJyb3IoZXJyb3IucmVzcG9uc2UgPyBKU09OLnN0cmluZ2lmeShlcnJvci5yZXNwb25zZS5kYXRhKSA6IGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEZWxldGVJbWFnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRpbmcgaW1hZ2UgZm9yIGl0ZW06XCIsIGlkKTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLWl0ZW0vJHtpZH1gLCB7XHJcbiAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICBjb250ZW50VHlwZTogbnVsbFxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIkRlbGV0ZSByZXNwb25zZTpcIiwgcmVzLmRhdGEpO1xyXG4gICAgICBzZXRJbWFnZXNVUkwobnVsbClcclxuICAgICAgaGFuZGxlT3BlbkRlbGV0ZSgpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRGVsZXRlIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIGhhbmRsZUVycm9yKGVycm9yLnJlc3BvbnNlID8gSlNPTi5zdHJpbmdpZnkoZXJyb3IucmVzcG9uc2UuZGF0YSkgOiBlcnJvci5tZXNzYWdlKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBkYXRlQ29tbWVudCA9IGRheWpzKERhdGUubm93KCkpO1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEVkaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgQ29tbWVudEluZm8sXHJcbiAgICAgIGRhdGVDb21tZW50XHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1jb21tZW50L2AsIGRhdGEpXHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBzZXRSZWFzb24oXCJcIik7XHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgc2V0Q29tbWVudHMoW25ld0RhdGEsIC4uLkNvbW1lbnRzMV0pXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGhhbmRsZUVycm9yKGVycm9yLnJlc3BvbnNlID8gSlNPTi5zdHJpbmdpZnkoZXJyb3IucmVzcG9uc2UuZGF0YSkgOiBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbdmFsdWUzLCBzZXRWYWx1ZTNdID0gUmVhY3QudXNlU3RhdGUoJzEnKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RhYkl0ZW1WaWV3JylcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgc2V0VmFsdWUzKHJlc3VsdClcclxuICAgIH1cclxuICB9LCBbXSlcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UzID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSBuZXdWYWx1ZVxyXG4gICAgc2V0VmFsdWUzKGNoYW5nZVZhbHVlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUYWJJdGVtVmlldycsIGNoYW5nZVZhbHVlKVxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkZWJvdW5jZWRTZWFyY2gsIHNldERlYm91bmNlZFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NlYXJjaDIsIHNldFNlYXJjaDJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkZWJvdW5jZWRTZWFyY2gyLCBzZXREZWJvdW5jZWRTZWFyY2gyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2VhcmNoMywgc2V0U2VhcmNoM10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RlYm91bmNlZFNlYXJjaDMsIHNldERlYm91bmNlZFNlYXJjaDNdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHNldFRpbWVvdXQoKCkgPT4gc2V0RGVib3VuY2VkU2VhcmNoKHNlYXJjaCksIDMwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZXIpO1xyXG4gIH0sIFtzZWFyY2hdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHNldERlYm91bmNlZFNlYXJjaDIoc2VhcmNoMiksIDMwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZXIpO1xyXG4gIH0sIFtzZWFyY2gyXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiBzZXREZWJvdW5jZWRTZWFyY2gzKHNlYXJjaDMpLCAzMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChoYW5kbGVyKTtcclxuICB9LCBbc2VhcmNoM10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1F1aWNrRmlsdGVySXRlbVB1cmNoYXNlSXRlbS1TdW1tYXJ5JylcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgc2V0U2VhcmNoKHJlc3VsdClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgIHNldFNlYXJjaCh2YWx1ZSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdRdWlja0ZpbHRlckl0ZW1QdXJjaGFzZUl0ZW0tU3VtbWFyeScsIHZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBuZXdBcnJheSA9IChkZWJvdW5jZWRTZWFyY2ggIT09ICcnID8gaXRlbVB1cmNoYXNlLmZpbHRlcigocm93KSA9PlxyXG4gICAgcm93Lml0ZW1QdXJjaGFzZU51bWJlci50b1N0cmluZygpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaCkgfHxcclxuICAgIChyb3cuZGVzY3JpcHRpb24/LnRvU3RyaW5nKCkgfHwgXCJcIikudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhkZWJvdW5jZWRTZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIChyb3cucHJvamVjdE5hbWUgJiYgcm93LnByb2plY3ROYW1lLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhkZWJvdW5jZWRTZWFyY2gudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICAocm93Lm1hbnVmYWN0dXJlcj8udG9TdHJpbmcoKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgKHJvdy5tYW51ZmFjdHVyZXJOdW1iZXI/LnRvU3RyaW5nKCkgfHwgXCJcIikudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhkZWJvdW5jZWRTZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIHJvdy5pdGVtcy5zb21lKChJdGVtKSA9PiBJdGVtLml0ZW1OYW1lICE9PSB1bmRlZmluZWQgJiYgKEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWU/LnRvU3RyaW5nKCkgfHwgXCJcIikudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhkZWJvdW5jZWRTZWFyY2gudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICByb3cuaXRlbXMuc29tZSgoSXRlbSkgPT4gSXRlbS5pdGVtRGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCAmJiAoSXRlbS5pdGVtRGVzY3JpcHRpb24/LnRvU3RyaW5nKCkgfHwgXCJcIikudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhkZWJvdW5jZWRTZWFyY2gudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICByb3cuaXRlbXMuc29tZSgoSXRlbSkgPT4gSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIChJdGVtLm5ld0Rlc2NyaXB0aW9uPy50b1N0cmluZygpIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZGVib3VuY2VkU2VhcmNoLnRvTG93ZXJDYXNlKCkpKSB8fFxyXG4gICAgZGF5anMocm93Lml0ZW1QdXJjaGFzZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaClcclxuICApIDogaXRlbVB1cmNoYXNlKS5zb3J0KChhLGIpID0+IG5ldyBEYXRlKGIuaXRlbVB1cmNoYXNlRGF0ZSB8fCBiLmRhdGUpIC0gbmV3IERhdGUoYS5pdGVtUHVyY2hhc2VEYXRlIHx8IGEuZGF0ZSkpXHJcblxyXG4gIGNvbnN0IHRvdGFsUHVyQ2hhc2VUb3RhbCA9IG5ld0FycmF5Lmxlbmd0aCA+IDAgPyBuZXdBcnJheS5yZWR1Y2UoKGFjYywgcm93KSA9PiB7IHJldHVybiBhY2MgKyByb3cuaXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIHBhcnNlRmxvYXQoaXRlbS5pdGVtUXR5KSwgMCkgfSwgMCkgOiAwXHJcbiAgY29uc3QgdG90YWxCdXlQdXJDaGFzZVRvdGFsID0gbmV3QXJyYXkubGVuZ3RoID4gMCA/IG5ld0FycmF5LmZpbHRlcigocm93KSA9PiByb3cuaXRlbXMuZmluZCgoSXRlbSkgPT4gcGFyc2VGbG9hdChJdGVtLml0ZW1SYXRlKSAhPT0gMCkpLnJlZHVjZSgoYWNjLCByb3cpID0+IHsgcmV0dXJuIGFjYyArIHJvdy5pdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgcGFyc2VGbG9hdChpdGVtLml0ZW1RdHkpLCAwKSB9LCAwKSA6IDBcclxuICBjb25zdCB0b3RhbEFtb3VudFB1cmNoYXNlID0gbmV3QXJyYXkubWFwKChyb3cpID0+ICh7IC4uLnJvdywgaXRlbXM6IHJvdy5pdGVtcy5tYXAoKEl0ZW0pID0+ICh7IC4uLkl0ZW0sIHRvdGFsQ29zdEluZm86IEl0ZW0uaXRlbVJhdGUgKiBJdGVtLml0ZW1RdHkgfSkpIH0pKVxyXG5cclxuICBjb25zdCB0b3RhbFB1ckNoYXNlVG90YWxBbW91bnQgPSB0b3RhbEFtb3VudFB1cmNoYXNlLmxlbmd0aCA+IDAgPyB0b3RhbEFtb3VudFB1cmNoYXNlLnJlZHVjZSgoYWNjLCByb3cpID0+IHsgcmV0dXJuIGFjYyArIHJvdy5pdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgcGFyc2VGbG9hdChpdGVtLnRvdGFsQ29zdEluZm8pLCAwKSB9LCAwKSA6IDBcclxuXHJcbiAgY29uc3QgYXZlcmFnZUNvc3QgPSBNYXRoLnJvdW5kKCh0b3RhbFB1ckNoYXNlVG90YWxBbW91bnQgLyB0b3RhbEJ1eVB1ckNoYXNlVG90YWwpICogMTAwKSAvIDEwMDtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoMiA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRTZWFyY2gyKHZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBuZXdJdGVtT3V0ID0gW107XHJcblxyXG4gIHBvc091dC5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICBuZXdJdGVtT3V0LnB1c2goe1xyXG4gICAgICBfaWQ6IHJvdy5faWQsXHJcbiAgICAgIG91dE51bWJlcjogJ1MtJyArIFN0cmluZyhyb3cuZmFjdHVyZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKSxcclxuICAgICAgaXRlbU91dERhdGU6IHJvdy5pbnZvaWNlRGF0ZSxcclxuICAgICAgcmVhc29uOiBcIlNob3BcIixcclxuICAgICAgcmVmZXJlbmNlOiB7XHJcbiAgICAgICAgX2lkOiAnJyxcclxuICAgICAgICByZWZlcmVuY2VOYW1lOiByb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZVxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtc1F0eUFycmF5OiByb3cuaXRlbXMubWFwKChyb3cxKSA9PiAoeyAuLi5yb3cxLCBuZXdJdGVtT3V0OiByb3cxLml0ZW1RdHkgfSkpXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGl0ZW1PdXQuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgbmV3SXRlbU91dC5wdXNoKHtcclxuICAgICAgX2lkOiByb3cuX2lkLFxyXG4gICAgICBvdXROdW1iZXI6ICdPLScgKyByb3cub3V0TnVtYmVyLFxyXG4gICAgICBpdGVtT3V0RGF0ZTogcm93Lml0ZW1PdXREYXRlLFxyXG4gICAgICByZWFzb246IHJvdy5yZWFzb24sXHJcbiAgICAgIHJlZmVyZW5jZTogcm93LnJlZmVyZW5jZSxcclxuICAgICAgaXRlbXNRdHlBcnJheTogcm93Lml0ZW1zUXR5QXJyYXlcclxuICAgIH0pXHJcbiAgfSlcclxuICBjb25zdCBbZmlsdGVySXRlbU91dCwgc2V0RmlsdGVySXRlbU91dF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZWxlY3RPcHRpb25zID09PSAnTW9udGgnKSB7XHJcbiAgICAgIHNldEZpbHRlckl0ZW1PdXQobmV3SXRlbU91dD8uZmlsdGVyKChyb3cpID0+IGRheWpzKHJvdy5pdGVtT3V0RGF0ZSkuZm9ybWF0KCdNTU1NJykgPT09IG1vbnRoKSlcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0T3B0aW9ucyA9PT0gJ1llYXInKSB7XHJcbiAgICAgIHNldEZpbHRlckl0ZW1PdXQobmV3SXRlbU91dD8uZmlsdGVyKChyb3cpID0+IGRheWpzKHJvdy5pdGVtT3V0RGF0ZSkuZm9ybWF0KCdZWVlZJykgPT09IGRheWpzKHN0YXJ0RGF0ZSkuZm9ybWF0KCdZWVlZJykpKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2VsZWN0T3B0aW9ucyA9PT0gJ0N1c3RvbScpIHtcclxuICAgICAgc2V0RmlsdGVySXRlbU91dChuZXdJdGVtT3V0Py5maWx0ZXIoKHJvdykgPT4gZmlsdGVyZWREYXRhLmZpbmQoKEl0ZW0pID0+IGRheWpzKEl0ZW0pLmZvcm1hdCgnREQvTU0vWVlZWScpID09PSBkYXlqcyhyb3cuaXRlbU91dERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpKSkpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzZWxlY3RPcHRpb25zID09PSAnQWxsJykge1xyXG4gICAgICBzZXRGaWx0ZXJJdGVtT3V0KG5ld0l0ZW1PdXQpXHJcbiAgICB9XHJcbiAgfSwgW3NlbGVjdE9wdGlvbnMsIG1vbnRoLCBzdGFydERhdGUsIGZpbHRlcmVkRGF0YV0pXHJcblxyXG4gIGNvbnN0IHBhcnNlRGF0ZSA9IChkU3RyKSA9PiB7XHJcbiAgICBpZiAoIWRTdHIpIHJldHVybiAwO1xyXG4gICAgY29uc3QgcGFydHMgPSBTdHJpbmcoZFN0cikuc3BsaXQoJy8nKTtcclxuICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDMpIHJldHVybiBuZXcgRGF0ZShwYXJ0c1syXSwgcGFydHNbMV0gLSAxLCBwYXJ0c1swXSkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRTdHIpLmdldFRpbWUoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBuZXdBcnJheTIgPSAoZGVib3VuY2VkU2VhcmNoMiAhPT0gJycgPyBuZXdJdGVtT3V0LmZpbHRlcigocm93KSA9PlxyXG4gICAgKHJvdy5yZWFzb24/LnRvU3RyaW5nKCkgfHwgXCJcIikudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhkZWJvdW5jZWRTZWFyY2gyLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAocm93Lm91dE51bWJlcj8udG9TdHJpbmcoKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaDIudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIChyb3cucmVmZXJlbmNlICYmIHJvdy5yZWZlcmVuY2UucmVmZXJlbmNlTmFtZSAmJiByb3cucmVmZXJlbmNlLnJlZmVyZW5jZU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhkZWJvdW5jZWRTZWFyY2gyLnRvTG93ZXJDYXNlKCkpKSB8fFxyXG4gICAgcm93Lml0ZW1zUXR5QXJyYXkuc29tZSgoSXRlbSkgPT4gSXRlbS5pdGVtTmFtZSAhPT0gdW5kZWZpbmVkICYmIChJdGVtLml0ZW1OYW1lLml0ZW1OYW1lPy50b1N0cmluZygpIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZGVib3VuY2VkU2VhcmNoMi50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgIHJvdy5pdGVtc1F0eUFycmF5LnNvbWUoKEl0ZW0pID0+IEl0ZW0uaXRlbURlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgKEl0ZW0uaXRlbURlc2NyaXB0aW9uPy50b1N0cmluZygpIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZGVib3VuY2VkU2VhcmNoMi50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgIHJvdy5pdGVtc1F0eUFycmF5LnNvbWUoKEl0ZW0pID0+IEl0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCAmJiAoSXRlbS5uZXdEZXNjcmlwdGlvbj8udG9TdHJpbmcoKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaDIudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICBkYXlqcyhyb3cuaXRlbU91dERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaDIpXHJcbiAgKSA6IG5ld0l0ZW1PdXQpLnNvcnQoKGEsYikgPT4gcGFyc2VEYXRlKGIuaXRlbU91dERhdGUgfHwgYi5kYXRlKSAtIHBhcnNlRGF0ZShhLml0ZW1PdXREYXRlIHx8IGEuZGF0ZSkpXHJcblxyXG4gIGNvbnN0IHRvdGFsT3V0VG90YWwgPSBuZXdBcnJheTIubGVuZ3RoID4gMCA/IG5ld0FycmF5Mi5yZWR1Y2UoKGFjYywgcm93KSA9PiB7IHJldHVybiBhY2MgKyByb3cuaXRlbXNRdHlBcnJheS5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgKGl0ZW0ubmV3SXRlbU91dCAhPT0gdW5kZWZpbmVkID8gcGFyc2VGbG9hdChpdGVtLm5ld0l0ZW1PdXQpIDogMCksIDApIH0sIDApIDogMFxyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2gzID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgIHNldFNlYXJjaDModmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IG5ld0FycmF5MyA9IChkZWJvdW5jZWRTZWFyY2gzICE9PSAnJyA/IGl0ZW1SZXR1cm4uZmlsdGVyKChyb3cpID0+XHJcbiAgICAocm93LnJlYXNvbj8udG9TdHJpbmcoKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaDMudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIChyb3cub3V0TnVtYmVyPy50b1N0cmluZygpIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZGVib3VuY2VkU2VhcmNoMy50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgKHJvdy5yZWZlcmVuY2UgJiYgcm93LnJlZmVyZW5jZS5yZWZlcmVuY2VOYW1lICYmIHJvdy5yZWZlcmVuY2UucmVmZXJlbmNlTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaDMudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICByb3cuaXRlbXNRdHlBcnJheS5zb21lKChJdGVtKSA9PiBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZGVib3VuY2VkU2VhcmNoMy50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgIHJvdy5pdGVtc1F0eUFycmF5LnNvbWUoKEl0ZW0pID0+IEl0ZW0uaXRlbURlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZGVib3VuY2VkU2VhcmNoMy50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgIGRheWpzKHJvdy5pdGVtT3V0RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJykuaW5jbHVkZXMoZGVib3VuY2VkU2VhcmNoMylcclxuICApIDogaXRlbVJldHVybikuc29ydCgoYSxiKSA9PiBwYXJzZURhdGUoYi5pdGVtUmV0dXJuRGF0ZSB8fCBiLmRhdGUpIC0gcGFyc2VEYXRlKGEuaXRlbVJldHVybkRhdGUgfHwgYS5kYXRlKSlcclxuICBjb25zdCB0b3RhbFJldHVyblRvdGFsID0gbmV3QXJyYXkzLmxlbmd0aCA+IDAgPyBuZXdBcnJheTMucmVkdWNlKChhY2MsIHJvdykgPT4geyByZXR1cm4gYWNjICsgcm93Lml0ZW1zUXR5QXJyYXkucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIHBhcnNlRmxvYXQoaXRlbS5uZXdJdGVtT3V0KSwgMCkgfSwgMCkgOiAwXHJcbiAgY29uc3QgW29wZW5WaWV3LCBzZXRPcGVuVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lkVmlldywgc2V0SWRWaWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpdGVtUHVyY2hhc2VWaWV3LCBzZXRJdGVtUHVyY2hhc2VWaWV3XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgaGFuZGxlT3BlblZpZXcgPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW5WaWV3KHRydWUpO1xyXG4gICAgc2V0SWRWaWV3KGlkKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZVZpZXcgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuVmlldyhmYWxzZSk7XHJcbiAgICBzZXRJZFZpZXcobnVsbCk7XHJcbiAgICBzZXRJdGVtUHVyY2hhc2VWaWV3KG51bGwpO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YTIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChpZFZpZXcgIT09IG51bGwpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWl0ZW1QdXJjaGFzZS8ke2lkVmlld31gKVxyXG4gICAgICAgICAgc2V0SXRlbVB1cmNoYXNlVmlldyhyZXMuZGF0YS5kYXRhKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YTIoKVxyXG4gIH0sIFtpZFZpZXddKVxyXG4gIGNvbnN0IFtvcGVuVmlldzIsIHNldE9wZW5WaWV3Ml0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lkVmlldzIsIHNldElkVmlldzJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2l0ZW1QdXJjaGFzZVZpZXcyLCBzZXRJdGVtUHVyY2hhc2VWaWV3Ml0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IGhhbmRsZU9wZW5WaWV3MiA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3BlblZpZXcyKHRydWUpO1xyXG4gICAgc2V0SWRWaWV3MihpZClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VWaWV3MiA9ICgpID0+IHtcclxuICAgIHNldE9wZW5WaWV3MihmYWxzZSk7XHJcbiAgICBzZXRJZFZpZXcyKG51bGwpO1xyXG4gICAgc2V0SXRlbVB1cmNoYXNlVmlldzIobnVsbCk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhMiA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgIGlmIChpZFZpZXcyICE9PSBudWxsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtT3V0LyR7aWRWaWV3Mn1gKVxyXG4gICAgICAgICAgc2V0SXRlbVB1cmNoYXNlVmlldzIocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEyKClcclxuICB9LCBbaWRWaWV3Ml0pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXtzaG93ID09PSAxID8gMTIgOiA5fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcjInPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmQ6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAge2xvYWRpbmdEYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnMTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0/LmZpbHRlcihyb3cgPT4gcm93Ll9pZCA9PT0gaWQpPy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogJzIwcHgnIH19Pntyb3cuaXRlbU5hbWUudG9VcHBlckNhc2UoKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e3Jvdy50eXBlSXRlbX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17b3BlbiA/ICdkZW1vLWN1c3RvbWl6ZWQtbWVudScgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e29wZW4gPyAndHJ1ZScgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUVsZXZhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxLZXlib2FyZEFycm93RG93biAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ2dyYXknLCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1jdXN0b21pemVkLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnVMaXN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiAnZGVtby1jdXN0b21pemVkLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17RmFkZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17SXRlbUluZm9VLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvSXRlbUZvcm1VcGRhdGUvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RWRpdDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvSXRlbUZvcm1DbG9uZS8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZScgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcyMHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWxlQ29weSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5DbG9uZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlU2hvdygyKTsgaGFuZGxlQ2xvc2VNZW51KCk7IH19PiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19PkNvbW1lbnRzPC9zcGFuPiA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVNob3coMyk7IGhhbmRsZUNsb3NlTWVudSgpOyB9fT48c3BhbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19Pkhpc3Rvcnk8L3NwYW4+PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJDb250ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgYm9yZGVyQm90dG9tOiAxLCBib3JkZXJDb2xvcjogJ2RpdmlkZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsYWIgQVBJIHRhYnMgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT3ZlcnZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbi1TdW1tYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT3V0LVN1bW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXR1cm4tU3VtbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRvdGFsLVN1bW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjFcIiBzeD17eyBoZWlnaHQ6ICc1MDBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE1cHgnLCBwYWRkaW5nOiAnMjBweCcsIGZvbnRTaXplOiAnMjBweCcsIG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGFsaWduPSdsZWZ0JyBzdHlsZT17eyBoZWlnaHQ6ICczMHB4JyB9fT48c3BhbiA+TmFtZTwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT57cm93Lml0ZW1OYW1lLnRvVXBwZXJDYXNlKCl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249J2xlZnQnIHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19PjxzcGFuID5TdG9yZTwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT57cm93Lml0ZW1TdG9yZS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGFsaWduPSdsZWZ0JyBzdHlsZT17eyBoZWlnaHQ6ICczMHB4JyB9fT48c3BhbiA+Q2F0ZWdvcnk8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+e3Jvdy5pdGVtQ2F0ZWdvcnkudG9VcHBlckNhc2UoKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj0nbGVmdCcgc3R5bGU9e3sgaGVpZ2h0OiAnMzBweCcgfX0+PHNwYW4gPkJyYW5kPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19PjxzcGFuPntyb3cuaXRlbUJyYW5kLnRvVXBwZXJDYXNlKCl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249J2xlZnQnIHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19PjxzcGFuID5JdGVtICM8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+PHNwYW4+e3Jvdy5pdGVtVXBjLm5ld0NvZGV9PC9zcGFuPi08c3Bhbj57U3RyaW5nKHJvdy5pdGVtVXBjLml0ZW1OdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249J2xlZnQnIHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19PjxzcGFuID5BY3Rpb248L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+ICAgPERlbGV0ZVRvb2x0aXAgdGl0bGU9XCJEZWxldGUtSW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfSBvbkNsaWNrPXtoYW5kbGVEZWxldGVJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EZWxldGVUb29sdGlwPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzI1MHB4Jywgd2lkdGg6ICc1MDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nRGF0YTEgPyA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXNVUkwgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnMjUwcHgnLCB3aWR0aDogJzMwMHB4JyB9fSBzcmM9e2ltYWdlc1VSTH0gYWx0PXtyb3cuaXRlbU5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXBsb2FkZWRJbWFnZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9ezQwMH0gaGVpZ2h0PXsyMDB9IHNyYz17dXBsb2FkZWRJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSdsZWZ0JyBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTaG93SW5wdXR9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgb25DbGljaz17aGFuZGxlSW1hZ2VTdWJtaXR9PlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlQmFzZTY0fSB0eXBlPSdmaWxlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTVweCcsIHBhZGRpbmc6ICcyMHB4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgZm9udFNpemU6ICcyMHB4JywgbWFyZ2luVG9wOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGFsaWduPSdsZWZ0JyBzdHlsZT17eyBoZWlnaHQ6ICczMHB4JyB9fT48c3BhbiA+TWFudWZhY3R1cmVyPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19Pntyb3cuaXRlbU1hbnVmYWN0dXJlci50b1VwcGVyQ2FzZSgpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Lml0ZW1EaW1lbnNpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGFsaWduPSdsZWZ0JyBzdHlsZT17eyBoZWlnaHQ6ICczMHB4JyB9fT48c3BhbiA+RGltZW5zaW9uPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT48c3Bhbj57cm93Lml0ZW1EaW1lbnNpb259PC9zcGFuPjxzcGFuPiBNVFI8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj0nbGVmdCcgc3R5bGU9e3sgaGVpZ2h0OiAnMzBweCcgfX0+PHNwYW4gPkRpbWVuc2lvbjwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19PjxzcGFuPjA8L3NwYW4+PHNwYW4+TVRSPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj0nbGVmdCcgPjxzcGFuID5Db3N0IFVuaXQgUHJpY2U8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGhpZGRlbj17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfSBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19PjxzcGFuIGRhdGEtcHJlZml4ID4kPC9zcGFuPntyb3cuaXRlbUNvc3RQcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj0nbGVmdCcgc3R5bGU9e3sgaGVpZ2h0OiAnMzBweCcgfX0+PHNwYW4gPlVuaXQ8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+PHNwYW4+e3Jvdy51bml0LnRvVXBwZXJDYXNlKCl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuaXRlbVdlaWdodCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249J2xlZnQnIHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19PjxzcGFuID5XZWlnaHQ8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19PjxzcGFuPntyb3cuaXRlbVdlaWdodH08L3NwYW4+PHNwYW4+IEtnPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249J2xlZnQnIHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19PjxzcGFuID5XZWlnaHQ8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT48c3Bhbj57MH08L3NwYW4+PHNwYW4+IEtnPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj0nbGVmdCc+PHNwYW4gPlNhbGUgVW5pdCBQcmljZTwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT48c3BhbiBkYXRhLXByZWZpeCA+JDwvc3Bhbj57cm93Lml0ZW1TZWxsaW5nUHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcsIGZvbnRTaXplOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249J2xlZnQnIHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19PjxzcGFuID5TdG9jazwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249J2xlZnQnIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScsIHRleHRBbGlnbjogJ2xlZnQnIH19PiB7cm93Lml0ZW1RdWFudGl0eX0ge2NvbXBsZXRlZCA9PT0gdHJ1ZSA/IDw+IHtyb3cuaXRlbVF1YW50aXR5ICE9PSBzdG9jayA/IDxidXR0b24gb25DbGljaz17ZmV0Y2hTdG9ja30gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+ICBzeW5jPC9idXR0b24+IDogJyd9PC8+IDogXCJcIn0gPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj0nbGVmdCcgc3R5bGU9e3sgaGVpZ2h0OiAnMzBweCcgfX0+PHNwYW4gPkRlc2NyaXB0aW9uPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cHJlIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBmb250RmFtaWx5OiAnc3lzdGVtLXVpJywgd2lkdGg6ICcxMDAlJywgbGluZUhlaWdodDogJzIwcHgnLCBjb2xvcjogJ2dyYXknIH19Pntyb3cuaXRlbURlc2NyaXB0aW9uLnRvVXBwZXJDYXNlKCl9PC9wcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9XCIyXCIgc3g9e3sgaGVpZ2h0OiAnNTAwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLCBjb2xvcjogJ3doaXRlJywgbWFyZ2luQm90dG9tOiAnMTBweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzEwMCUnIH19PlRvdGFsIFB1cmNoYXNlOiB7dG90YWxQdXJDaGFzZVRvdGFsICE9PSB1bmRlZmluZWQgPyB0b3RhbFB1ckNoYXNlVG90YWwgOiAwfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGhpZGRlbj17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWVDaGFydCBzZXJpZXM9e1t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlF1YW50aXR5IEJ1eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdG90YWxCdXlQdXJDaGFzZVRvdGFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJUb3RhbCBDb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB0b3RhbFB1ckNoYXNlVG90YWxBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkF2ZXJhZ2UgQ29zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogYXZlcmFnZUNvc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIGlubmVyUmFkaXVzOiA4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dfSB7Li4uc2l6ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGllQ2VudGVyTGFiZWwgPkF2ZXJhZ2UgQ29zdCAke2F2ZXJhZ2VDb3N0fTwvUGllQ2VudGVyTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QaWVDaGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgZm9udFNpemU6ICc4MCUnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5NYW51ZmFjdHVyZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+UmVmZXJlbmNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PnJlYXNvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5SYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PiBRdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+IEFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMzBweCcgfX0+e3Jvdy5pdGVtUHVyY2hhc2VOdW1iZXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzMwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PntkYXlqcyhyb3cuaXRlbVB1cmNoYXNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzEwMHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT57cm93Lm1hbnVmYWN0dXJlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnNTBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+e3Jvdy5tYW51ZmFjdHVyZXJOdW1iZXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzI1MHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT57cm93LnByb2plY3ROYW1lICE9PSB1bmRlZmluZWQgPyByb3cucHJvamVjdE5hbWUubmFtZSA6IHJvdy5kZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnNDBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pdGVtcy5maWx0ZXIoSXRlbSA9PiBwYXJzZUZsb2F0KEl0ZW0uaXRlbVF0eSkgPj0gMCkubWFwKChJdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke0l0ZW0uaXRlbVJhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnNDBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pdGVtcy5maWx0ZXIoSXRlbSA9PiBJdGVtLml0ZW1OYW1lPy5faWQgPT09IGlkKS5tYXAoKEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntJdGVtLml0ZW1RdHl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnNDBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiVmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5WaWV3KHJvdy5faWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiM1wiIHN4PXt7IGhlaWdodDogJzUwMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLCBjb2xvcjogJ3doaXRlJywgbWFyZ2luQm90dG9tOiAnMTBweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTAwJScgfX0+VG90YWwgT3V0OiB7dG90YWxPdXRUb3RhbCAhPT0gdW5kZWZpbmVkID8gdG90YWxPdXRUb3RhbCA6IDB9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHBhZGRpbmc6ICcxMHB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzgwJScsIG1hcmdpbkJvdHRvbTogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PnJlYXNvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT4gUXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PiBBY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5Mi5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICczMHB4JyB9fT57cm93Lm91dE51bWJlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMzBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+e2RheWpzKHJvdy5pdGVtT3V0RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzEwMHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT57cm93LnJlYXNvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjUwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cucmVmZXJlbmNlICE9PSB1bmRlZmluZWQgPyByb3cucmVmZXJlbmNlLnJlZmVyZW5jZU5hbWUgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnNDBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pdGVtc1F0eUFycmF5Lm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e0l0ZW0ubmV3SXRlbU91dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICc0MHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJWaWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3BlblZpZXcyKHJvdy5faWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiNFwiIHN4PXt7IGhlaWdodDogJzUwMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLCBjb2xvcjogJ3doaXRlJywgbWFyZ2luQm90dG9tOiAnMTBweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTAwJScgfX0+VG90YWwgUmV0dXJuOiB7dG90YWxSZXR1cm5Ub3RhbCAhPT0gdW5kZWZpbmVkID8gdG90YWxSZXR1cm5Ub3RhbCA6IDB9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaDN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzgwJScsIG1hcmdpbkJvdHRvbTogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PnJlYXNvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT4gUXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheTMubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnNjBweCcgfX0+e3Jvdy5vdXROdW1iZXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzMwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PntkYXlqcyhyb3cuaXRlbU91dERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICcxMDBweCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+e3Jvdy5yZWFzb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT57cm93LnJlZmVyZW5jZSAhPT0gdW5kZWZpbmVkID8gcm93LnJlZmVyZW5jZS5yZWZlcmVuY2VOYW1lIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzQwcHgnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXRlbXNRdHlBcnJheS5tYXAoKEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntJdGVtLm5ld0l0ZW1PdXR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9XCI1XCIgc3g9e3sgaGVpZ2h0OiAnNTAwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnOTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBjb2xvcjogJ2dyYXknIH19PlN1bW1hcnk8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpZUNoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycz17cGFsZXR0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJjTGFiZWw6IChpdGVtKSA9PiBgJHtpdGVtLmxhYmVsfSgke2l0ZW0udmFsdWV9KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNMYWJlbE1pbkFuZ2xlOiAzNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodFNjb3BlOiB7IGZhZGVkOiAnZ2xvYmFsJywgaGlnaGxpZ2h0ZWQ6ICdpdGVtJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFkZWQ6IHsgaW5uZXJSYWRpdXM6IDMwLCBhZGRpdGlvbmFsUmFkaXVzOiAtMzAsIGNvbG9yOiAnZ3JheScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiSS1QdXJjaGFzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdG90YWxQdXJjaGFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiSS1PdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHRvdGFsR2VuZXJhbE91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiU3RvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHN0b2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgJiAuJHtwaWVBcmNMYWJlbENsYXNzZXMucm9vdH1gXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYkNvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICB7c2hvdyA9PT0gMiA/XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyMic+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkNPTU1FTlRTPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdygxKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRFZGl0fT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInIH19IHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5Qb3N0IENvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc1MDBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAge0NvbW1lbnRzMS5tYXAoKHJvdywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBwYWRkaW5nOiAnMTBweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc0MHB4JywgaGVpZ2h0OiAnNDBweCcsIGJvcmRlclJhZGl1czogJzUwJScsIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGNvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cm93LkNvbW1lbnRJbmZvLnBlcnNvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19Pntyb3cuQ29tbWVudEluZm8ucGVyc29ufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgY29sb3I6ICdncmF5JywgZm9udFNpemU6ICcxMnB4JyB9fT57ZGF5anMocm93LmRhdGVDb21tZW50KS5mb3JtYXQoJ0REIE1NTU0gWVlZWSBbYXRdIEhIOm1tJyl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cHJlIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdpbmhlcml0Jywgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyB9fT57cm93LkNvbW1lbnRJbmZvLnJlYXNvbn08L3ByZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDogJydcclxuICAgICAgICB9XHJcbiAgICAgICAge3Nob3cgPT09IDMgP1xyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcjInPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cD5ISVNUT1JZPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdygxKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24ubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcyMHB4JywgcGFkZGluZzogJzEwcHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNDBweCcsIGhlaWdodDogJzQwcHgnLCBib3JkZXJSYWRpdXM6ICc1MCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBjb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5wZXJzb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT57cm93LnBlcnNvbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGNvbG9yOiAnZ3JheScsIGZvbnRTaXplOiAnMTJweCcgfX0+e2RheWpzKHJvdy5kYXRlTm90aWZpY2F0aW9uKS5mb3JtYXQoJ0REIE1NTU0gWVlZWSBbYXRdIEhIOm1tJyl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57cm93Lm5vdGlmaWNhdGlvbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e0Vycm9yT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENhbmNlbEljb24gc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgRmFpbGVkIHRvIFNhdmVkPC9oMj5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGZvbnRTaXplOiAnMTRweCcgfX0+e2Vycm9yTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWxQaWN0dXJlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlUGljdHVyZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IEltYWdlIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlUGljdHVyZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsRGVsZXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRGVsZXRlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gSW1hZ2UgRGVsZXRlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZURlbGV0ZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuVmlld31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVZpZXd9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogOTAwIH19PlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVZpZXd9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtUHVyY2hhc2VWaWV3ICE9PSBudWxsID9cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtUHVyY2hhc2VWaWV3LkNyZWF0ZS5wZXJzb259IDwvc3Bhbj48c3Bhbj5JUC17aXRlbVB1cmNoYXNlVmlldy5pdGVtUHVyY2hhc2VOdW1iZXJ9PC9zcGFuPiBvbiA8c3Bhbj57aXRlbVB1cmNoYXNlVmlldy5DcmVhdGUuZGF0ZUNvbW1lbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gc3BhY2luZz17Mn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiA2MDAsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RXhwZW5zZSBEYXRlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17M30+e2RheWpzKGl0ZW1QdXJjaGFzZVZpZXcuaXRlbVB1cmNoYXNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkRlc2NyaXB0aW9uPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17M30+e2l0ZW1QdXJjaGFzZVZpZXcucHJvamVjdE5hbWUgIT09IHVuZGVmaW5lZCA/IGl0ZW1QdXJjaGFzZVZpZXcucHJvamVjdE5hbWUubmFtZSA6IGl0ZW1QdXJjaGFzZVZpZXcuZGVzY3JpcHRpb259PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlJlZmVyZW5jZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PntpdGVtUHVyY2hhc2VWaWV3Lm1hbnVmYWN0dXJlciArICcgLyAnICsgaXRlbVB1cmNoYXNlVmlldy5tYW51ZmFjdHVyZXJOdW1iZXJ9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPk5vdGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXszfT57aXRlbVB1cmNoYXNlVmlldy5ub3RlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIHN4PXt7IG1heEhlaWdodDogNDAwLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBhcmlhLWxhYmVsPVwiY29sbGFwc2libGUgdGFibGVcIiBzdGlja3lIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4jPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5JdGVtPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZXNjcmlwdGlvbjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UXR5PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5QcmljZSgkKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+QW1vdW50IFBhaWQoRkMpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5SYXRlIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+QW1vdW50IFBhaWQoJCk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlRvdGFsKCQpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtUHVyY2hhc2VWaWV3Lml0ZW1zLmZpbHRlcihyb3cgPT4gcGFyc2VGbG9hdChyb3cuaXRlbVF0eSkgPiAwIHx8IHJvdy5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKS5tYXAoKHJvdywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93LmlkUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17OX0gYWxpZ249XCJjZW50ZXJcIiBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e3Jvdy5uZXdEZXNjcmlwdGlvbn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCA/IHsgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsIGNvbG9yOiAnd2hpdGUnIH0gOiBudWxsfT57aSArIDF9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCA/IHsgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsIGNvbG9yOiAnd2hpdGUnIH0gOiBudWxsfT57cm93Lml0ZW1OYW1lPy5pdGVtTmFtZX0gPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCA/IHsgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsIGNvbG9yOiAnd2hpdGUnIH0gOiBudWxsfT57cm93Lml0ZW1EZXNjcmlwdGlvbn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17aWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkID8geyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJywgY29sb3I6ICd3aGl0ZScgfSA6IG51bGx9Pntyb3cuaXRlbVF0eX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17aWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkID8geyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJywgY29sb3I6ICd3aGl0ZScgfSA6IG51bGx9PntwYXJzZUZsb2F0KHJvdy5pdGVtUmF0ZSkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXtpZCA9PT0gcm93Lml0ZW1OYW1lPy5faWQgPyB7IGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLCBjb2xvcjogJ3doaXRlJyB9IDogbnVsbH0+RkN7cm93LnRvdGFsQW1vdW50RkMgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQocm93LnRvdGFsQW1vdW50RkMpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCA/IHsgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsIGNvbG9yOiAnd2hpdGUnIH0gOiBudWxsfT57cm93LlRhdXggIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQocm93LlRhdXgpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCA/IHsgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsIGNvbG9yOiAnd2hpdGUnIH0gOiBudWxsfT4ke3BhcnNlRmxvYXQocm93LnRvdGFsQW1vdW50KS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCA/IHsgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsIGNvbG9yOiAnd2hpdGUnIH0gOiBudWxsfT57cm93LmZjQ29udmVydFRvVXNkVG90YWwgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQocm93LmZjQ29udmVydFRvVXNkVG90YWwpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXsyfT5Ub3RhbDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezJ9IHN4PXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5GQ3tpdGVtUHVyY2hhc2VWaWV3LnRvdGFsRkMgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQoaXRlbVB1cmNoYXNlVmlldy50b3RhbEZDKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezJ9IHN4PXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT4ke2l0ZW1QdXJjaGFzZVZpZXcudG90YWwudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezJ9IHN4PXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT4ke2l0ZW1QdXJjaGFzZVZpZXcudG90YWxVU0QgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQoaXRlbVB1cmNoYXNlVmlldy50b3RhbFVTRCkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5WaWV3Mn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVZpZXcyfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDg1MCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VWaWV3Mn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW1QdXJjaGFzZVZpZXcyICE9PSBudWxsID9cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtUHVyY2hhc2VWaWV3Mi5DcmVhdGUucGVyc29ufSA8L3NwYW4+PHNwYW4+IENyZWF0ZSBPLTB7aXRlbVB1cmNoYXNlVmlldzIub3V0TnVtYmVyfTwvc3Bhbj4gb24gPHNwYW4+e2l0ZW1QdXJjaGFzZVZpZXcyLkNyZWF0ZS5kYXRlQ29tbWVudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGhlaWdodDogNjAwLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlJldHVybiBEYXRlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17M30+e2RheWpzKGl0ZW1QdXJjaGFzZVZpZXcyLml0ZW1PdXREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UmVhc29uPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17M30+e2l0ZW1QdXJjaGFzZVZpZXcyLnJlYXNvbiAhPT0gdW5kZWZpbmVkID8gaXRlbVB1cmNoYXNlVmlldzIucmVhc29uIDogJyd9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlJlZmVyZW5jZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PntpdGVtUHVyY2hhc2VWaWV3Mi5yZWZlcmVuY2UgIT09IHVuZGVmaW5lZCA/IGl0ZW1QdXJjaGFzZVZpZXcyLnJlZmVyZW5jZS5yZWZlcmVuY2VOYW1lIDogJyd9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkRlc2NyaXB0aW9uPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17M30+e2l0ZW1QdXJjaGFzZVZpZXcyLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgPyBpdGVtUHVyY2hhc2VWaWV3Mi5kZXNjcmlwdGlvbiA6ICcnfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIHN4PXt7IG1heEhlaWdodDogNDAwLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBhcmlhLWxhYmVsPVwiY29sbGFwc2libGUgdGFibGVcIiBzdGlja3lIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4jPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5JdGVtPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZXNjcmlwdGlvbjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UXR5PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtUHVyY2hhc2VWaWV3Mi5pdGVtc1F0eUFycmF5LmZpbHRlcigocm93KSA9PiBwYXJzZUZsb2F0KHJvdy5uZXdJdGVtT3V0KSA+IDAgfHwgcm93Lm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpLm1hcCgocm93LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuaWRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Lm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs0fSBhbGlnbj1cImNlbnRlclwiIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT57cm93Lm5ld0Rlc2NyaXB0aW9ufTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17aWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkID8geyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJywgY29sb3I6ICd3aGl0ZScgfSA6IG51bGx9PntpICsgMX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17aWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkID8geyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJywgY29sb3I6ICd3aGl0ZScgfSA6IG51bGx9Pntyb3cuaXRlbU5hbWU/Lml0ZW1OYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXtpZCA9PT0gcm93Lml0ZW1OYW1lPy5faWQgPyB7IGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLCBjb2xvcjogJ3doaXRlJyB9IDogbnVsbH0+e3Jvdy5pdGVtRGVzY3JpcHRpb259PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCA/IHsgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsIGNvbG9yOiAnd2hpdGUnIH0gOiBudWxsfT57cm93Lm5ld0l0ZW1PdXR9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUluZm9ybWF0aW9uVklld1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNZW51SXRlbSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiUGFwZXIiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJUeXBvZ3JhcGh5Iiwic3R5bGVkIiwiRm9ybUxhYmVsIiwiUmFkaW9Hcm91cCIsIkZvcm1Db250cm9sTGFiZWwiLCJSYWRpbyIsIklucHV0IiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiTW9kYWwiLCJCYWNrZHJvcCIsIkZhZGUiLCJCb3giLCJBdXRvY29tcGxldGUiLCJCdXR0b24iLCJNZW51IiwiRGl2aWRlciIsIlRhYiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVIZWFkIiwiVGFibGVDZWxsIiwiVGFibGVSb3ciLCJUYWJsZUNvbnRhaW5lciIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIlRvb2xiYXIiLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwidXNlT3V0bGV0Q29udGV4dCIsIk5hdkxpbmsiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2VsZWN0Q3VycmVudFVzZXIiLCJMb2FkZXIiLCJDaGVja0NpcmNsZUljb24iLCJkYXlqcyIsIkNsb3NlIiwiS2V5Ym9hcmRBcnJvd0Rvd24iLCJUYWJDb250ZXh0IiwiVGFiTGlzdCIsIlRhYlBhbmVsIiwiUGllQ2hhcnQiLCJwaWVBcmNMYWJlbENsYXNzZXMiLCJ1c2VEcmF3aW5nQXJlYSIsIkZpbGVDb3B5IiwiRWRpdEljb24iLCJDYW5jZWxJY29uIiwiRGVsZXRlSWNvbiIsIkRhdGVQaWNrZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIlZpc2liaWxpdHlJY29uIiwiVmlzaWJpbGl0eU9mZkljb24iLCJSZW1vdmVDaXJjbGVPdXRsaW5lIiwiRGVtb0NvbnRhaW5lciIsIkFkYXB0ZXJEYXlqcyIsInBhbGV0dGUiLCJFZGl0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiVmlld1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIkRlbGV0ZVRvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsIkJsYWNrVG9vbHRpcCIsIl9yZWY3IiwiX2V4Y2x1ZGVkNCIsIl9yZWY4Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJzaXplIiwiaGVpZ2h0IiwiU3R5bGVkVGV4dCIsIl9yZWY5IiwiZmlsbCIsInRleHQiLCJwcmltYXJ5IiwidGV4dEFuY2hvciIsImRvbWluYW50QmFzZWxpbmUiLCJQaWVDZW50ZXJMYWJlbCIsIl9yZWYwIiwiY2hpbGRyZW4iLCJfdXNlRHJhd2luZ0FyZWEiLCJ4IiwieSIsIkl0ZW1JbmZvcm1hdGlvblZJZXciLCJfaXRlbSRmaWx0ZXIiLCJfdXNlUGFyYW1zIiwiaWQiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImdyYW50QWNjZXNzIiwic2V0R3JhbnRBY2Nlc3MiLCJmZXRjaE51bWJlciIsIl9yZWYxIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVzJGRhdGEiLCJyZXMiLCJnZXQiLCJkYXRhIiwiZmlsdGVyIiwicm93IiwidXNlcklEIiwibWFwIiwibW9kdWxlcyIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiSXRlbUluZm9VIiwibW9kdWxlTmFtZSIsImFjY2VzcyIsImVkaXRNIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJpdGVtUHVyY2hhc2UiLCJzZXRJdGVtUHVyY2hhc2UiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIml0ZW1PdXQiLCJzZXRJdGVtT3V0IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJwb3NPdXQiLCJzZXRQb3NPdXQiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsIml0ZW1SZXR1cm4iLCJzZXRJdGVtUmV0dXJuIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJtb250aCIsInNldE1vbnRoIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInNlbGVjdE9wdGlvbnMiLCJzZXRTZWxlY3RPcHRpb25zIiwiX3VzZVN0YXRlMTUiLCJkYXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTE2Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsImZyb21EYXRlIiwic2V0RnJvbURhdGUiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwiZmlsdGVyZWREYXRhIiwic2V0RmlsdGVyZWREYXRhIiwiaGVhZGVycyIsImN1cnJlbnREYXRlIiwicHVzaCIsInRvRGF0ZVN0cmluZyIsInNldERhdGUiLCJnZXREYXRlIiwiaGFuZGxlQ2hhbmdlU2VsZWN0ZWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0IiwibG9hZGluZ0RhdGEyIiwic2V0TG9hZGluZ0RhdGEyIiwiaGFuZGxlRmV0Y2giLCJfcmVmMTAiLCJyZXNJdGVtT3V0IiwiZm9ybWF0RGF0ZTEiLCJfb2JqZWN0U3ByZWFkIiwiaXRlbXNRdHlBcnJheSIsIkl0ZW0iLCJpdGVtTmFtZSIsIl9pZCIsInBhcnNlRmxvYXQiLCJuZXdJdGVtT3V0IiwibGVuZ3RoIiwic29ydCIsImEiLCJiIiwib3V0TnVtYmVyIiwicmVzSXRlbVB1cmNoYXNlIiwiZm9ybWF0RGF0ZSIsIml0ZW1zIiwiaXRlbVB1cmNoYXNlTnVtYmVyIiwicmVzUG9zT3V0IiwiZm9ybWF0RGF0ZTMiLCJpdGVtUXR5IiwicmV2ZXJzZSIsInJlc0lSZXR1cm4iLCJmb3JtYXREYXRlMiIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJzdG9jayIsInNldFN0b2NrIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsInRvdGFsUHVyY2hhc2UiLCJzZXR0b3RhbFB1cmNoYXNlIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsInRvdGFsR2VuZXJhbE91dCIsInNldHRvdGFsR2VuZXJhbE91dDIiLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwiY29tcGxldGVkIiwic2V0Q29tcGxldGVkIiwidG90YWxQb3NPdXQiLCJyZWR1Y2UiLCJhY2MiLCJzdW0iLCJ0b3RhbE91dCIsInRvdGFsUmV0dXJuIiwidG90YWxHZW5lcmFsT3V0MiIsIk51bWJlciIsInRvdGFsUHVyY2hhc2UyIiwic3RvY2sxIiwidG9GaXhlZCIsIk1hdGgiLCJyb3VuZCIsIl9SZWFjdCR1c2VTdGF0ZSIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwib3BlbiIsIkJvb2xlYW4iLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlTWVudSIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJzaG93Iiwic2V0U2hvdyIsImhhbmRsZVNob3ciLCJmZXRjaFN0b2NrIiwiX3JlZjExIiwicHV0IiwiaXRlbVF1YW50aXR5IiwibG9nIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsIml0ZW0iLCJTZXRJdGVtcyIsImFwaVVybCIsImZldGNoSXRlbSIsIl9yZWYxMiIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwiQ29tbWVudHMxIiwic2V0Q29tbWVudHMiLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwibm90aWZpY2F0aW9uIiwic2V0Tm90aWZpY2F0aW9uIiwiZmV0Y2hDb21tZW50IiwiX3JlZjEzIiwiX3JlcyRkYXRhMiIsIl9yZXNOb3RpZmljYXRpb24kZGF0YSIsInJlc3AiLCJDb21tZW50SW5mbyIsImlkSW5mbyIsInJlc05vdGlmaWNhdGlvbiIsInBlcnNvbiIsInVzZXJOYW1lIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsImxvYWRpbmdPcGVuTW9kYWxQaWN0dXJlIiwic2V0TG9hZGluZ09wZW5Nb2RhbFBpY3R1cmUiLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0IiwibG9hZGluZ09wZW5Nb2RhbERlbGV0ZSIsInNldExvYWRpbmdPcGVuTW9kYWxEZWxldGUiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZU9wZW5QaWN0dXJlIiwiaGFuZGxlT3BlbkRlbGV0ZSIsImhhbmRsZUNsb3NlUGljdHVyZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlQ2xvc2VEZWxldGUiLCJoYW5kbGVFcnJvciIsIm1zZyIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xvc2VFcnJvciIsIl91c2VTdGF0ZTU1IiwiX3VzZVN0YXRlNTYiLCJJdGVtTmFtZSIsInNldEl0ZW1OYW1lIiwiX3VzZVN0YXRlNTciLCJfdXNlU3RhdGU1OCIsImltYWdlc1VSTCIsInNldEltYWdlc1VSTCIsIl91c2VTdGF0ZTU5IiwiX3VzZVN0YXRlNjAiLCJsb2FkaW5nRGF0YTEiLCJzZXRMb2FkaW5nRGF0YTEiLCJmZXRjaEVJZCIsIl9yZWYxNCIsImJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJib2xkIiwiQmxvYiIsInR5cGUiLCJjb250ZW50VHlwZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkZW5kIiwicmVzdWx0IiwiX3VzZVN0YXRlNjEiLCJfdXNlU3RhdGU2MiIsImltYWdlcyIsInNldEltYWdlcyIsIl91c2VTdGF0ZTYzIiwiX3VzZVN0YXRlNjQiLCJpbWFnZXMxIiwic2V0SW1hZ2VzMSIsIl91c2VTdGF0ZTY1IiwiX3VzZVN0YXRlNjYiLCJpbWFnZXNVUkwxIiwic2V0SW1hZ2VzVVJMMSIsIl91c2VTdGF0ZTY3IiwiX3VzZVN0YXRlNjgiLCJ1cGxvYWRlZEltYWdlIiwic2V0VXBsb2FkZWRJbWFnZSIsIl91c2VTdGF0ZTY5IiwiX3VzZVN0YXRlNzAiLCJ1cGxvYWRlZEltYWdlVVJMIiwic2V0VXBsb2FkZWRJbWFnZVVSTCIsImhhbmRsZUJhc2U2NCIsImZpbGVzIiwib25sb2FkIiwib25lcnJvciIsImhhbmRsZVNob3dJbnB1dCIsImhhbmRsZUltYWdlU3VibWl0IiwiX3JlZjE1IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsIl94IiwiaGFuZGxlRGVsZXRlSW1hZ2UiLCJfcmVmMTYiLCJkYXRlQ29tbWVudCIsIm5vdyIsImhhbmRsZVN1Ym1pdEVkaXQiLCJfcmVmMTciLCJwb3N0IiwibmV3RGF0YSIsIl94MiIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0IiwidmFsdWUzIiwic2V0VmFsdWUzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUNoYW5nZTMiLCJuZXdWYWx1ZSIsImNoYW5nZVZhbHVlIiwic2V0SXRlbSIsIl91c2VTdGF0ZTcxIiwiX3VzZVN0YXRlNzIiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJfdXNlU3RhdGU3MyIsIl91c2VTdGF0ZTc0IiwiZGVib3VuY2VkU2VhcmNoIiwic2V0RGVib3VuY2VkU2VhcmNoIiwiX3VzZVN0YXRlNzUiLCJfdXNlU3RhdGU3NiIsInNlYXJjaDIiLCJzZXRTZWFyY2gyIiwiX3VzZVN0YXRlNzciLCJfdXNlU3RhdGU3OCIsImRlYm91bmNlZFNlYXJjaDIiLCJzZXREZWJvdW5jZWRTZWFyY2gyIiwiX3VzZVN0YXRlNzkiLCJfdXNlU3RhdGU4MCIsInNlYXJjaDMiLCJzZXRTZWFyY2gzIiwiX3VzZVN0YXRlODEiLCJfdXNlU3RhdGU4MiIsImRlYm91bmNlZFNlYXJjaDMiLCJzZXREZWJvdW5jZWRTZWFyY2gzIiwiaGFuZGxlciIsImNsZWFyVGltZW91dCIsImhhbmRsZVNlYXJjaCIsIm5ld0FycmF5IiwiX3JvdyRkZXNjcmlwdGlvbiIsIl9yb3ckbWFudWZhY3R1cmVyIiwiX3JvdyRtYW51ZmFjdHVyZXJOdW1iIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsImRlc2NyaXB0aW9uIiwidG9Mb3dlckNhc2UiLCJwcm9qZWN0TmFtZSIsIm5hbWUiLCJtYW51ZmFjdHVyZXIiLCJtYW51ZmFjdHVyZXJOdW1iZXIiLCJzb21lIiwiX0l0ZW0kaXRlbU5hbWUkaXRlbU5hIiwidW5kZWZpbmVkIiwiX0l0ZW0kaXRlbURlc2NyaXB0aW9uIiwiaXRlbURlc2NyaXB0aW9uIiwiX0l0ZW0kbmV3RGVzY3JpcHRpb24iLCJuZXdEZXNjcmlwdGlvbiIsIml0ZW1QdXJjaGFzZURhdGUiLCJmb3JtYXQiLCJ0b3RhbFB1ckNoYXNlVG90YWwiLCJ0b3RhbEJ1eVB1ckNoYXNlVG90YWwiLCJmaW5kIiwiaXRlbVJhdGUiLCJ0b3RhbEFtb3VudFB1cmNoYXNlIiwidG90YWxDb3N0SW5mbyIsInRvdGFsUHVyQ2hhc2VUb3RhbEFtb3VudCIsImF2ZXJhZ2VDb3N0IiwiaGFuZGxlU2VhcmNoMiIsImZvckVhY2giLCJTdHJpbmciLCJmYWN0dXJlTnVtYmVyIiwicGFkU3RhcnQiLCJpdGVtT3V0RGF0ZSIsImludm9pY2VEYXRlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTmFtZSIsImN1c3RvbWVyTmFtZSIsInJvdzEiLCJfdXNlU3RhdGU4MyIsIl91c2VTdGF0ZTg0IiwiZmlsdGVySXRlbU91dCIsInNldEZpbHRlckl0ZW1PdXQiLCJwYXJzZURhdGUiLCJkU3RyIiwicGFydHMiLCJzcGxpdCIsImdldFRpbWUiLCJuZXdBcnJheTIiLCJfcm93JHJlYXNvbiIsIl9yb3ckb3V0TnVtYmVyIiwiX0l0ZW0kaXRlbU5hbWUkaXRlbU5hMiIsIl9JdGVtJGl0ZW1EZXNjcmlwdGlvbjIiLCJfSXRlbSRuZXdEZXNjcmlwdGlvbjIiLCJ0b3RhbE91dFRvdGFsIiwiaGFuZGxlU2VhcmNoMyIsIm5ld0FycmF5MyIsIl9yb3ckcmVhc29uMiIsIl9yb3ckb3V0TnVtYmVyMiIsIml0ZW1SZXR1cm5EYXRlIiwidG90YWxSZXR1cm5Ub3RhbCIsIl91c2VTdGF0ZTg1IiwiX3VzZVN0YXRlODYiLCJvcGVuVmlldyIsInNldE9wZW5WaWV3IiwiX3VzZVN0YXRlODciLCJfdXNlU3RhdGU4OCIsImlkVmlldyIsInNldElkVmlldyIsIl91c2VTdGF0ZTg5IiwiX3VzZVN0YXRlOTAiLCJpdGVtUHVyY2hhc2VWaWV3Iiwic2V0SXRlbVB1cmNoYXNlVmlldyIsImhhbmRsZU9wZW5WaWV3IiwiaGFuZGxlQ2xvc2VWaWV3IiwiZmV0Y2hEYXRhMiIsIl9yZWYxOCIsIl91c2VTdGF0ZTkxIiwiX3VzZVN0YXRlOTIiLCJvcGVuVmlldzIiLCJzZXRPcGVuVmlldzIiLCJfdXNlU3RhdGU5MyIsIl91c2VTdGF0ZTk0IiwiaWRWaWV3MiIsInNldElkVmlldzIiLCJfdXNlU3RhdGU5NSIsIl91c2VTdGF0ZTk2IiwiaXRlbVB1cmNoYXNlVmlldzIiLCJzZXRJdGVtUHVyY2hhc2VWaWV3MiIsImhhbmRsZU9wZW5WaWV3MiIsImhhbmRsZUNsb3NlVmlldzIiLCJfcmVmMTkiLCJGcmFnbWVudCIsImNvbnRhaW5lciIsInNwYWNpbmciLCJ4cyIsImJhY2tncm91bmQiLCJrZXkiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsImZvbnRXZWlnaHQiLCJ0b1VwcGVyQ2FzZSIsInR5cGVJdGVtIiwidmFyaWFudCIsImRpc2FibGVFbGV2YXRpb24iLCJvbkNsaWNrIiwiZW5kSWNvbiIsInN4IiwiYm9yZGVyIiwiTWVudUxpc3RQcm9wcyIsIm9uQ2xvc2UiLCJUcmFuc2l0aW9uQ29tcG9uZW50IiwiZGlzYWJsZWQiLCJyb2xlIiwidG8iLCJnYXAiLCJib3JkZXJCb3R0b20iLCJib3JkZXJDb2xvciIsIm9uQ2hhbmdlIiwibGFiZWwiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsIm92ZXJmbG93WSIsIm1hcmdpbkJvdHRvbSIsImFsaWduIiwiaXRlbVN0b3JlIiwiaXRlbUNhdGVnb3J5IiwiaXRlbUJyYW5kIiwiaXRlbVVwYyIsIm5ld0NvZGUiLCJpdGVtTnVtYmVyIiwidGl0bGUiLCJjdXJzb3IiLCJzcmMiLCJhbHQiLCJwbGFjZW1lbnQiLCJmbG9hdCIsIm1hcmdpblRvcCIsIml0ZW1NYW51ZmFjdHVyZXIiLCJpdGVtRGltZW5zaW9uIiwiaGlkZGVuIiwiaXRlbUNvc3RQcmljZSIsInVuaXQiLCJpdGVtV2VpZ2h0IiwiaXRlbVNlbGxpbmdQcmljZSIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJsaW5lSGVpZ2h0Iiwic2VyaWVzIiwiaW5uZXJSYWRpdXMiLCJib3JkZXJMZWZ0IiwiaSIsIl9JdGVtJGl0ZW1OYW1lIiwiY29sb3JzIiwiYXJjTGFiZWwiLCJhcmNMYWJlbE1pbkFuZ2xlIiwiaGlnaGxpZ2h0U2NvcGUiLCJmYWRlZCIsImhpZ2hsaWdodGVkIiwiYWRkaXRpb25hbFJhZGl1cyIsInJvb3QiLCJvblN1Ym1pdCIsIm11bHRpbGluZSIsInJvd3MiLCJmdWxsV2lkdGgiLCJjaGFyQXQiLCJ3aGl0ZVNwYWNlIiwiZGF0ZU5vdGlmaWNhdGlvbiIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsImNvbXBvbmVudCIsIkNyZWF0ZSIsImNvbFNwYW4iLCJub3RlIiwibWF4SGVpZ2h0Iiwic3RpY2t5SGVhZGVyIiwiX3JvdyRpdGVtTmFtZSIsIl9yb3ckaXRlbU5hbWUyIiwiX3JvdyRpdGVtTmFtZTMiLCJfcm93JGl0ZW1OYW1lNCIsIl9yb3ckaXRlbU5hbWU1IiwiX3JvdyRpdGVtTmFtZTYiLCJfcm93JGl0ZW1OYW1lNyIsIl9yb3ckaXRlbU5hbWU4IiwiX3JvdyRpdGVtTmFtZTkiLCJfcm93JGl0ZW1OYW1lMCIsImlkUm93IiwicmVwbGFjZSIsInRvdGFsQW1vdW50RkMiLCJUYXV4IiwidG90YWxBbW91bnQiLCJmY0NvbnZlcnRUb1VzZFRvdGFsIiwidG90YWxGQyIsInRvdGFsIiwidG90YWxVU0QiLCJfcm93JGl0ZW1OYW1lMSIsIl9yb3ckaXRlbU5hbWUxMCIsIl9yb3ckaXRlbU5hbWUxMSIsIl9yb3ckaXRlbU5hbWUxMiIsIl9yb3ckaXRlbU5hbWUxMyJdLCJzb3VyY2VSb290IjoiIn0=