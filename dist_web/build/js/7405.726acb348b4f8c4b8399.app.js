"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[7405,9220],{

/***/ 9483
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(24994);
__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(42032));
var _jsxRuntime = __webpack_require__(74848);
var _default = exports.A = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
}), 'KeyboardArrowDown');

/***/ },

/***/ 29220
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71510);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27558);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17532);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11848);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84976);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17809);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(58331);
var _excluded = ["className"];
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






var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
function PaymentInformation(_ref3) {
  var onId = _ref3.onId;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    payment = _useState2[0],
    setPayment = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    payment2 = _useState4[0],
    SetPayment2 = _useState4[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_2__/* .ENDPOINT_URL */ .m, "/payment");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchPayment = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* () {
        if (true) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get(apiUrl);
            setPayment(res.data.data.reverse());
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchPayment() {
        return _ref4.apply(this, arguments);
      };
    }();
    fetchPayment();
  }, []);
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    show = _useState6[0],
    setShow = _useState6[1];
  var handleShow = e => {
    setShow(e);
  };
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    value = _useState8[0],
    setValue = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    value2 = _useState0[0],
    setValue2 = _useState0[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var selectedIndex = payment.findIndex(row => row._id === onId);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [payment, onId]);
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    search = _useState10[0],
    setSearch = _useState10[1];
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
  };
  var newArray = search !== '' ? payment.filter(row => row.paymentNumber.toString().includes(search) || row.customerName.customerName.toLowerCase().includes(search.toLowerCase())) : payment;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, show === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      padding: '5px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    variant: "h6"
  }, "All Payment")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow(2)
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, payment === null || payment === void 0 ? void 0 : payment.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    key: index,
    label: row.customerName.customerName + ' | ' + row.paymentNumber,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__/* .Link */ .N_,
    to: "/PaymentInformationView/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: 'calc(100vh - 125px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    key: index,
    label: row.customerName.customerName + ' | ' + row.paymentNumber,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__/* .Link */ .N_,
    to: "/PaymentInformationView/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : '');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentInformation);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 97405
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_useLayoutConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99076);
/* harmony import */ var _component_PrintHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77438);
/* harmony import */ var _component_PrintFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61296);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55746);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4640);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71543);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94405);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20973);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(58331);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(14519);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(97834);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(8451);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(99380);
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(46986);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(71510);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(84976);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(47767);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(40301);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _PaymentInformation__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(29220);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(65821);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(82299);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(39781);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(92659);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(9483);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(57240);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(41845);
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(19873);
/* harmony import */ var _mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(67415);
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(72761);
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_img_images_png__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(3100);
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(95236);
/* harmony import */ var _mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(8659);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(28597);
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













































var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'gray',
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Ay, {
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
function PaymentInformationView() {
  var _payment$filter;
  var _useLayoutConfig = (0,_hooks_useLayoutConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(),
    config = _useLayoutConfig.config;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_33__/* .useParams */ .g)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_33__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_34__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_34__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__/* .setUser */ .gV)({
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_30__/* .cachedGet */ .Fe)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__/* .ENDPOINT_URL */ .m, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var PaymentInfoU = grantAccess.filter(row => row.moduleName === "Payment" && row.access.editM === true);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__/* .logOut */ .je)());
    navigate('/');
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    payment = _useState4[0],
    setPayment = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    invoice = _useState6[0],
    setInvoice = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    paymentArray = _useState8[0],
    setPaymentArray = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
    _useState0 = _slicedToArray(_useState9, 2),
    loadingData = _useState0[0],
    setLoadingData = _useState0[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__/* .ENDPOINT_URL */ .m, "/payment");
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A.get(apiUrl);
          setPayment(res.data.data);
          var resInvoice = yield axios__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__/* .ENDPOINT_URL */ .m, "/invoice?summary=true"));
          setInvoice(resInvoice.data.data);
          var resPaymentArray = yield axios__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__/* .ENDPOINT_URL */ .m, "/get-payment/").concat(id));
          setPaymentArray(resPaymentArray.data.data.TotalAmount !== undefined ? resPaymentArray.data.data.TotalAmount : null);
          setLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchData() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchData();
  }, [id]);
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    reason = _useState10[0],
    setReason = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    Comments1 = _useState12[0],
    setComments = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    notification = _useState14[0],
    setNotification = _useState14[1];
  var PaymentInfo = paymentArray !== null ? paymentArray.reduce((sum, row) => sum + parseFloat(row.total), 0) : 0;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    var fetchComment = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data2, _resNotification$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__/* .ENDPOINT_URL */ .m, "/comment"));
          var resp = (_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.filter(row => row.CommentInfo.idInfo === id);
          setComments(resp.reverse());
          var resNotification = yield axios__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__/* .ENDPOINT_URL */ .m, "/notification"));
          setNotification((_resNotification$data = resNotification.data) === null || _resNotification$data === void 0 || (_resNotification$data = _resNotification$data.data) === null || _resNotification$data === void 0 ? void 0 : _resNotification$data.filter(row => row.idInfo === id));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchComment() {
        return _ref0.apply(this, arguments);
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
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    loading = _useState16[0],
    setLoading = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    loadingOpenModal = _useState18[0],
    setLoadingOpenModal = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    ErrorOpenModal = _useState20[0],
    setErrorOpenModal = _useState20[1];
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
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  {/** Loading End */}
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_37___default()(Date.now());
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo,
        dateComment
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__/* .ENDPOINT_URL */ .m, "/create-comment/"), data);
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
    return function handleSubmitEdit(_x) {
      return _ref1.apply(this, arguments);
    };
  }();
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__.useState(null),
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
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_45__.useReactToPrint)({
    content: () => componentRef.current,
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
  var handleOpenPrint = () => {
    handlePrint();
    setAnchorEl(null);
  };
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1),
    _useState22 = _slicedToArray(_useState21, 2),
    show1 = _useState22[0],
    setShow1 = _useState22[1];
  var handleShow1 = e => {
    setShow1(e);
    setAnchorEl(null);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Payment Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    onClick: () => navigate('/PaymentView')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A, null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2
  }, show1 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_PaymentInformation__WEBPACK_IMPORTED_MODULE_38__["default"], {
    onId: id
  })) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, payment === null || payment === void 0 || (_payment$filter = payment.filter(row => row._id === id)) === null || _payment$filter === void 0 ? void 0 : _payment$filter.map(row => {
    var _row$modes, _row$TotalAmount, _row$TotalAmount2, _row$TotalAmount3, _row$amount, _row$PaymentReceivedF, _row$PaymentReceivedU, _row$remaining, _data, _row$modes2, _row$TotalAmount5, _row$TotalAmount6, _row$TotalAmount7, _row$amount2, _row$PaymentReceivedF2, _row$PaymentReceivedU2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("header", {
      style: {
        display: 'block',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      sx: {
        fontWeight: 'bold',
        fontSize: '20px'
      }
    }, row.customerName.customerName !== undefined ? row.customerName.customerName.toUpperCase() : '', " | PAY-", String(row.paymentNumber).padStart(6, '0'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        marginLeft: '15px',
        padding: '2px 8px',
        borderRadius: '4px',
        backgroundColor: row.transactionType === 'Refund' ? '#ffcdd2' : '#c8e6c9',
        color: row.transactionType === 'Refund' ? '#c62828' : '#2e7d32',
        fontSize: '14px',
        verticalAlign: 'middle'
      }
    }, row.transactionType || 'Payment'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        marginLeft: '8px',
        padding: '2px 8px',
        borderRadius: '4px',
        backgroundColor: row.status === 'Cleared' ? '#bbdefb' : '#fff9c4',
        color: row.status === 'Cleared' ? '#1565c0' : '#fbc02d',
        fontSize: '14px',
        verticalAlign: 'middle'
      }
    }, row.status || 'Cleared'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      "aria-controls": open ? 'demo-customized-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open ? 'true' : undefined,
      variant: "contained",
      disableElevation: true,
      onClick: handleClick,
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .A, null),
      sx: {
        bgcolor: 'gray',
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray'
        }
      }
    }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      id: "demo-customized-menu",
      MenuListProps: {
        'aria-labelledby': 'demo-customized-button'
      },
      anchorEl: anchorEl,
      open: open,
      onClose: handleCloseMenu,
      TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      disabled: PaymentInfoU.length === 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__/* .NavLink */ .k2, {
      to: "/PaymentInformationUpdate/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      onClick: handleOpenPrint,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Print")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      onClick: () => handleShow1(2)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        color: 'gray'
      }
    }, "Comments"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      onClick: () => handleShow1(3)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        color: 'gray'
      }
    }, "History")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        height: 'calc(100vh - 230px)',
        overflow: 'hidden',
        overflowY: 'auto',
        width: '100%',
        background: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      hidden: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", {
      ref: componentRef,
      className: "invoicedetails",
      style: {
        position: 'relative',
        marginLeft: '40px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "invoiceTest"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : ""
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
      className: "invoicehr"
    }, "PAYMENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "content",
      style: {
        marginBottom: '20px',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("section", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        padding: '0px',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("address", {
      style: {
        marginLeft: config['--client-block-left-offset'] || '0px',
        position: 'relative',
        lineHeight: 1.35,
        width: 'fit-content',
        minWidth: '200px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, "Payment From", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, row.customerName.customerName.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        marginLeft: 'auto',
        marginRight: config['--metadata-block-right-offset'] || '0px',
        width: 'fit-content',
        display: 'block',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: '24px',
        rowGap: '6px',
        fontSize: '70%',
        alignContent: 'start',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "PAY #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, "PAY-", String(row.paymentNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row.paymentDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, row.modes === 'Credit-Account' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        backgroundColor: '#e0e7ff',
        color: '#3730a3',
        padding: '2px 6px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 'bold',
        display: 'inline-block',
        whiteSpace: 'nowrap'
      }
    }, "CREDIT APPLIED") : row.modes === 'Credit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        backgroundColor: '#dcfce7',
        color: '#166534',
        padding: '2px 6px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 'bold',
        display: 'inline-block',
        whiteSpace: 'nowrap'
      }
    }, "CREDIT DEPOSIT") : row.modes === 'Cash' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        backgroundColor: '#fef3c7',
        color: '#92400e',
        padding: '2px 6px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 'bold',
        display: 'inline-block',
        whiteSpace: 'nowrap'
      }
    }, "CASH") : row.modes === 'Bank Transfer' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        backgroundColor: '#e0f2fe',
        color: '#0369a1',
        padding: '2px 6px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 'bold',
        display: 'inline-block',
        whiteSpace: 'nowrap'
      }
    }, "BANK TRANSFER") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        backgroundColor: '#f1f5f9',
        color: '#334155',
        padding: '2px 6px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 'bold',
        display: 'inline-block',
        whiteSpace: 'nowrap'
      }
    }, (_row$modes = row.modes) === null || _row$modes === void 0 ? void 0 : _row$modes.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, row.reason || (((_row$TotalAmount = row.TotalAmount) === null || _row$TotalAmount === void 0 || (_row$TotalAmount = _row$TotalAmount[0]) === null || _row$TotalAmount === void 0 ? void 0 : _row$TotalAmount.prefix) === 'P-' ? 'Project' : 'Invoice')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        textAlign: 'left',
        color: row.transactionType === 'Refund' ? 'red' : 'green'
      }
    }, row.transactionType || 'Payment'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, row.status || 'Cleared')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("section", {
      style: {}
    }, row.description !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", {
      style: {
        position: 'relative',
        fontSize: '80%',
        width: '100%',
        marginBottom: '15px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        textAlign: 'left',
        width: '100px',
        verticalAlign: 'top'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        textAlign: 'left'
      }
    }, row.description)))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", {
      className: "secondTable",
      style: {
        width: '100%',
        fontSize: '70%',
        marginBottom: '5px',
        border: '1px solid #DDD',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Subject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, row.reason === 'Project' || ((_row$TotalAmount2 = row.TotalAmount) === null || _row$TotalAmount2 === void 0 || (_row$TotalAmount2 = _row$TotalAmount2[0]) === null || _row$TotalAmount2 === void 0 ? void 0 : _row$TotalAmount2.prefix) === 'P-' ? 'Project Amount' : 'Invoice Amount'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Amount Paid"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tbody", null, (_row$TotalAmount3 = row.TotalAmount) === null || _row$TotalAmount3 === void 0 ? void 0 : _row$TotalAmount3.map((Item, i) => {
      var _row$TotalAmount4, _relatedInvoice$invoi, _Item$invoiceAmount, _Item$total;
      var relatedInvoice = invoice === null || invoice === void 0 ? void 0 : invoice.find(row1 => row1._id === Item.id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", {
        key: Item.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        }
      }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        }
      }, " ", Item.prefix || (relatedInvoice !== null && relatedInvoice !== void 0 && relatedInvoice.ReferenceName2 || (relatedInvoice === null || relatedInvoice === void 0 ? void 0 : relatedInvoice.invoicePurchase) === 'Purchased' ? "P-" : row.reason === "Project" || ((_row$TotalAmount4 = row.TotalAmount) === null || _row$TotalAmount4 === void 0 || (_row$TotalAmount4 = _row$TotalAmount4[0]) === null || _row$TotalAmount4 === void 0 ? void 0 : _row$TotalAmount4.prefix) === 'P-' ? "P-" : "INV-"), String(Item.Ref).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        }
      }, Item.days > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        color: Item.days > 0 ? "red" : "black"
      }, "Overdue: ", Item.days, " Days Past Due") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_37___default()(Item.invoiceDate).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, relatedInvoice === null || relatedInvoice === void 0 || (_relatedInvoice$invoi = relatedInvoice.invoiceSubject) === null || _relatedInvoice$invoi === void 0 ? void 0 : _relatedInvoice$invoi.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
        style: {
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, "$", Item.invoiceAmount !== undefined ? (_Item$invoiceAmount = Item.invoiceAmount) === null || _Item$invoiceAmount === void 0 ? void 0 : _Item$invoiceAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
        style: {
          textAlign: 'right',
          border: '1px solid #DDD'
        }
      }, "$", (_Item$total = Item.total) === null || _Item$total === void 0 ? void 0 : _Item$total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", {
      style: {
        width: '100%',
        position: 'relative',
        fontSize: '70%',
        pageBreakInside: 'avoid',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Amount Received")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, row.amount ? (_row$amount = row.amount) === null || _row$amount === void 0 ? void 0 : _row$amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))), row.bankCharge && parseFloat(row.bankCharge) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Bank Charge")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, parseFloat(row.bankCharge).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.PaymentReceivedFC !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Amount Paid FC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      "data-prefix": true
    }, "FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, (_row$PaymentReceivedF = row.PaymentReceivedFC) === null || _row$PaymentReceivedF === void 0 ? void 0 : _row$PaymentReceivedF.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.PaymentReceivedUSD !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Amount Paid $")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, (_row$PaymentReceivedU = row.PaymentReceivedUSD) === null || _row$PaymentReceivedU === void 0 ? void 0 : _row$PaymentReceivedU.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Total Paid USD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, PaymentInfo ? PaymentInfo === null || PaymentInfo === void 0 ? void 0 : PaymentInfo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))), row.excessAction === 'Return' || row.returnUSD > 0 || row.returnFC > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, row.returnUSD > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Cash Return USD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, row.returnUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), row.returnFC > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Cash Return FC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "FC "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, row.returnFC.toLocaleString())))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Credit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, row.remaining ? (_row$remaining = row.remaining) === null || _row$remaining === void 0 ? void 0 : _row$remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("address", {
      style: {
        float: 'left',
        fontSize: '70%',
        textAlign: 'left',
        width: '700px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
      style: {
        lineHeight: '14px',
        fontWeight: 'bold'
      }
    }, "Bank: SOFIBANQUE SA ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), "Entitled: GLOBAL GATE SARL", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), "Bank Account: 00023233330214247020073", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), "Code Swift: SFBXCDKIXXX")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        position: 'relative',
        marginTop: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_component_PrintFooter__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data = data) === null || _data === void 0 ? void 0 : _data.branchId : ""
    }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "invoicedetails"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
      className: "invoicehr"
    }, "PAYMENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("section", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        padding: '0px',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("address", {
      style: {
        marginLeft: config['--client-block-left-offset'] || '0px',
        lineHeight: 1.35,
        width: 'fit-content',
        minWidth: '200px',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, "Payment From", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, row.customerName.customerName !== undefined ? row.customerName.customerName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), row.customerName.billingAddress !== undefined ? row.customerName.billingAddress.toUpperCase() : '', ",", row.customerName.billingCity !== undefined ? row.customerName.billingCity.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        marginLeft: 'auto',
        marginRight: config['--metadata-block-right-offset'] || '0px',
        width: 'fit-content',
        display: 'block',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: '24px',
        rowGap: '6px',
        fontSize: '80%',
        alignContent: 'start',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "PAY #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, "PAY-", String(row.paymentNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row.paymentDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, row.modes === 'Credit-Account' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        backgroundColor: '#e0e7ff',
        color: '#3730a3',
        padding: '2px 6px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 'bold',
        display: 'inline-block',
        whiteSpace: 'nowrap'
      }
    }, "CREDIT APPLIED") : row.modes === 'Credit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        backgroundColor: '#dcfce7',
        color: '#166534',
        padding: '2px 6px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 'bold',
        display: 'inline-block',
        whiteSpace: 'nowrap'
      }
    }, "CREDIT DEPOSIT") : row.modes === 'Cash' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        backgroundColor: '#fef3c7',
        color: '#92400e',
        padding: '2px 6px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 'bold',
        display: 'inline-block',
        whiteSpace: 'nowrap'
      }
    }, "CASH") : row.modes === 'Bank Transfer' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        backgroundColor: '#e0f2fe',
        color: '#0369a1',
        padding: '2px 6px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 'bold',
        display: 'inline-block',
        whiteSpace: 'nowrap'
      }
    }, "BANK TRANSFER") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      style: {
        backgroundColor: '#f1f5f9',
        color: '#334155',
        padding: '2px 6px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 'bold',
        display: 'inline-block',
        whiteSpace: 'nowrap'
      }
    }, (_row$modes2 = row.modes) === null || _row$modes2 === void 0 ? void 0 : _row$modes2.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, row.reason || (((_row$TotalAmount5 = row.TotalAmount) === null || _row$TotalAmount5 === void 0 || (_row$TotalAmount5 = _row$TotalAmount5[0]) === null || _row$TotalAmount5 === void 0 ? void 0 : _row$TotalAmount5.prefix) === 'P-' ? 'Project' : 'Invoice')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        textAlign: 'left',
        color: row.transactionType === 'Refund' ? 'red' : 'green'
      }
    }, row.transactionType || 'Payment'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, row.status || 'Cleared')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("section", null, row.description !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", {
      style: {
        position: 'relative',
        fontSize: '80%',
        float: 'left',
        left: '0',
        width: '50%',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        textAlign: 'left',
        width: '30px'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        textAlign: 'left'
      }
    }, row.description)))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", {
      className: "secondTable",
      style: {
        width: '100%',
        clear: 'both',
        fontSize: '80%',
        marginBottom: '5px',
        border: '1px solid #DDD',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'left',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Subject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, row.reason === 'Project' || ((_row$TotalAmount6 = row.TotalAmount) === null || _row$TotalAmount6 === void 0 || (_row$TotalAmount6 = _row$TotalAmount6[0]) === null || _row$TotalAmount6 === void 0 ? void 0 : _row$TotalAmount6.prefix) === 'P-' ? 'Project Amount' : 'Invoice Amount'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Amount Paid"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tbody", null, (_row$TotalAmount7 = row.TotalAmount) === null || _row$TotalAmount7 === void 0 ? void 0 : _row$TotalAmount7.map((Item, i) => {
      var _row$TotalAmount8, _relatedInvoice$invoi2, _Item$invoiceAmount2, _Item$total2;
      var relatedInvoice = invoice === null || invoice === void 0 ? void 0 : invoice.find(row1 => row1._id === Item.id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", {
        key: Item.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'center',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__/* .NavLink */ .k2, {
        to: "/InvoiceViewAdminAll/".concat(Item.id),
        className: "LinkName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "View"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'center',
          borderLeft: '1px solid #DDD'
        }
      }, " ", Item.prefix || (relatedInvoice !== null && relatedInvoice !== void 0 && relatedInvoice.ReferenceName2 || (relatedInvoice === null || relatedInvoice === void 0 ? void 0 : relatedInvoice.invoicePurchase) === 'Purchased' ? "P-" : row.reason === "Project" || ((_row$TotalAmount8 = row.TotalAmount) === null || _row$TotalAmount8 === void 0 || (_row$TotalAmount8 = _row$TotalAmount8[0]) === null || _row$TotalAmount8 === void 0 ? void 0 : _row$TotalAmount8.prefix) === 'P-' ? "P-" : "INV-"), String(Item.Ref).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'center',
          borderLeft: '1px solid #DDD'
        }
      }, Item.days > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        color: Item.days > 0 ? "red" : "black"
      }, "Overdue: ", Item.days, " Days Past Due") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_37___default()(Item.invoiceDate).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          borderLeft: '1px solid #DDD'
        }
      }, relatedInvoice === null || relatedInvoice === void 0 || (_relatedInvoice$invoi2 = relatedInvoice.invoiceSubject) === null || _relatedInvoice$invoi2 === void 0 ? void 0 : _relatedInvoice$invoi2.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          borderLeft: '1px solid #DDD'
        }
      }, "$", Item.invoiceAmount !== undefined ? (_Item$invoiceAmount2 = Item.invoiceAmount) === null || _Item$invoiceAmount2 === void 0 ? void 0 : _Item$invoiceAmount2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          borderLeft: '1px solid #DDD'
        }
      }, "$", (_Item$total2 = Item.total) === null || _Item$total2 === void 0 ? void 0 : _Item$total2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", {
      style: {
        width: '100%',
        clear: 'both',
        fontSize: '80%',
        pageBreakInside: 'avoid'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Amount Received")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, row.amount ? (_row$amount2 = row.amount) === null || _row$amount2 === void 0 ? void 0 : _row$amount2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))), row.bankCharge && parseFloat(row.bankCharge) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Bank Charge")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, parseFloat(row.bankCharge).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.PaymentReceivedFC !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Amount Paid FC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      "data-prefix": true
    }, "FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, (_row$PaymentReceivedF2 = row.PaymentReceivedFC) === null || _row$PaymentReceivedF2 === void 0 ? void 0 : _row$PaymentReceivedF2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.PaymentReceivedUSD !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Amount Paid $")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, (_row$PaymentReceivedU2 = row.PaymentReceivedUSD) === null || _row$PaymentReceivedU2 === void 0 ? void 0 : _row$PaymentReceivedU2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Total Paid USD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, PaymentInfo ? PaymentInfo === null || PaymentInfo === void 0 ? void 0 : PaymentInfo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))), row.excessAction === 'Return' || row.returnUSD > 0 || row.returnFC > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, row.returnUSD > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Cash Return USD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, row.returnUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), row.returnFC > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Cash Return FC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "FC "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, row.returnFC.toLocaleString())))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Credit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, row.remaining ? row.remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", {
      style: {
        position: 'relative',
        marginTop: '-40px',
        fontSize: '80%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Bank"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "SOFIBANQUE SA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Entitled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "GLOBAL GATE SARL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        backgroundColor: 'white',
        width: '100px',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Bank Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "00023233330214247020073")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Code Swift"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "SFBXCDKIXXX")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      className: "footerinvoice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "contact@globalgate.sarl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "+243 827722222")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "www.GlobalGate.sarl"))))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null)))), show1 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, "COMMENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    required: true,
    id: "comments",
    name: "comments",
    multiline: true,
    rows: 4,
    value: reason,
    onChange: e => setReason(e.target.value),
    label: "Comments",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "submit",
    style: {
      width: '100%'
    },
    className: "btnCustomer6"
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      height: '355px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tbody", null, Comments1.map(Item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", {
    key: Item._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
    style: {
      width: '100%',
      borderBottom: '1px solid black'
    }
  }, Item.dateComment ? dayjs__WEBPACK_IMPORTED_MODULE_37___default()(Item.dateComment).format('DD/MM') : '', " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "", show1 === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, "HISTORY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      height: '518px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      padding: '10px'
    }
  }, payment.filter(row => row._id === id).map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    key: row._id
  }, row.Create ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, row.Create.dateComment, " ", row.Create.person, " ", 'PAY-' + String(row.Create.paymentNumber).padStart(6, '0')) : '')), notification.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, row.person + ' on ' + dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row.dateNotification).format('DD/MMMM'), ": ", row.reason))))))) : "")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .A, {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    onClick: handleClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .A, {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentInformationView);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);