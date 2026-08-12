"use strict";
exports.id = "src_js_AdminView1_PageView_Payment_PaymentInformationView_js";
exports.ids = ["src_js_AdminView1_PageView_Payment_PaymentInformationView_js"];
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

/***/ "./src/js/AdminView1/PageView/Payment/PaymentInformation.js"
/*!******************************************************************!*\
  !*** ./src/js/AdminView1/PageView/Payment/PaymentInformation.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
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






var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"].tooltip)]: {
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
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_2__.ENDPOINT_URL, "/payment");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchPayment = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* () {
        if (true) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(apiUrl);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, show === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      padding: '5px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "All Payment")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow(2)
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, payment === null || payment === void 0 ? void 0 : payment.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: index,
    label: row.customerName.customerName + ' | ' + row.paymentNumber,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: "/PaymentInformationView/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: 'calc(100vh - 125px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: index,
    label: row.customerName.customerName + ' | ' + row.paymentNumber,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: "/PaymentInformationView/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : '');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentInformation);

/***/ },

/***/ "./src/js/AdminView1/PageView/Payment/PaymentInformationView.js"
/*!**********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/Payment/PaymentInformationView.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useLayoutConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../hooks/useLayoutConfig */ "./src/js/hooks/useLayoutConfig.js");
/* harmony import */ var _component_PrintHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/PrintHeader */ "./src/js/component/PrintHeader.js");
/* harmony import */ var _component_PrintFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/PrintFooter */ "./src/js/component/PrintFooter.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _PaymentInformation__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./PaymentInformation */ "./src/js/AdminView1/PageView/Payment/PaymentInformation.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/Email */ "./node_modules/@mui/icons-material/Email.js");
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/Phone */ "./node_modules/@mui/icons-material/Phone.js");
/* harmony import */ var _mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/Web */ "./node_modules/@mui/icons-material/Web.js");
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../img/images.png */ "./src/js/img/images.png");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/LocalPrintshop */ "./node_modules/@mui/icons-material/LocalPrintshop.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
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












































var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_24__["default"], {
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
  var _useLayoutConfig = (0,_hooks_useLayoutConfig__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    config = _useLayoutConfig.config;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_32__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_32__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_33__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_33__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__.setUser)({
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/grantAccess"));
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_34__.logOut)());
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
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/payment");
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get(apiUrl);
          setPayment(res.data.data);
          var resInvoice = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/invoice?summary=true"));
          setInvoice(resInvoice.data.data);
          var resPaymentArray = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/get-payment/").concat(id));
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/comment"));
          var resp = (_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.filter(row => row.CommentInfo.idInfo === id);
          setComments(resp.reverse());
          var resNotification = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/notification"));
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
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_36___default()(Date.now());
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo,
        dateComment
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/create-comment/"), data);
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
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null),
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
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_44__.useReactToPrint)({
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_23__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_27__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Payment Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => navigate('/PaymentView')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_42__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_50__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_49__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_28__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_25__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_5__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_22__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_26__["default"], {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_38__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 2
  }, show1 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PaymentInformation__WEBPACK_IMPORTED_MODULE_37__["default"], {
    onId: id
  })) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, payment === null || payment === void 0 || (_payment$filter = payment.filter(row => row._id === id)) === null || _payment$filter === void 0 ? void 0 : _payment$filter.map(row => {
    var _row$TotalAmount, _row$TotalAmount2, _row$TotalAmount3, _row$amount, _row$PaymentReceivedF, _row$PaymentReceivedU, _row$remaining, _data, _row$TotalAmount5, _row$TotalAmount6, _row$TotalAmount7, _row$amount2, _row$PaymentReceivedF2, _row$PaymentReceivedU2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("header", {
      style: {
        display: 'block',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      sx: {
        fontWeight: 'bold',
        fontSize: '20px'
      }
    }, row.customerName.customerName !== undefined ? row.customerName.customerName.toUpperCase() : '', " | PAY-", String(row.paymentNumber).padStart(6, '0'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      style: {
        marginLeft: '15px',
        padding: '2px 8px',
        borderRadius: '4px',
        backgroundColor: row.transactionType === 'Refund' ? '#ffcdd2' : '#c8e6c9',
        color: row.transactionType === 'Refund' ? '#c62828' : '#2e7d32',
        fontSize: '14px',
        verticalAlign: 'middle'
      }
    }, row.transactionType || 'Payment'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      style: {
        marginLeft: '8px',
        padding: '2px 8px',
        borderRadius: '4px',
        backgroundColor: row.status === 'Cleared' ? '#bbdefb' : '#fff9c4',
        color: row.status === 'Cleared' ? '#1565c0' : '#fbc02d',
        fontSize: '14px',
        verticalAlign: 'middle'
      }
    }, row.status || 'Cleared'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      "aria-controls": open ? 'demo-customized-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open ? 'true' : undefined,
      variant: "contained",
      disableElevation: true,
      onClick: handleClick,
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_43__["default"], null),
      sx: {
        bgcolor: 'gray',
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray'
        }
      }
    }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: "demo-customized-menu",
      MenuListProps: {
        'aria-labelledby': 'demo-customized-button'
      },
      anchorEl: anchorEl,
      open: open,
      onClose: handleCloseMenu,
      TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_13__["default"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      disabled: PaymentInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_31__.NavLink, {
      to: "/PaymentInformationUpdate/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_52__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onClick: handleOpenPrint,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_51__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Print")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onClick: () => handleShow1(2)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "Comments"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onClick: () => handleShow1(3)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "History")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        height: '560px',
        overflow: 'hidden',
        overflowY: 'scroll',
        width: '100%',
        background: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      hidden: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("table", {
      ref: componentRef,
      className: "invoicedetails",
      style: {
        position: 'relative',
        marginLeft: '40px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        borderBottom: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: "invoiceTest"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : ""
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
      className: "invoicehr"
    }, "PAYMENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: "content",
      style: {
        marginBottom: '20px',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("section", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        padding: '0px',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("address", {
      style: {
        marginLeft: config['--client-block-left-offset'] || '0px',
        position: 'relative',
        lineHeight: 1.35,
        width: 'fit-content',
        minWidth: '200px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "Payment From", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, row.customerName.customerName.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        marginLeft: 'auto',
        marginRight: config['--metadata-block-right-offset'] || '0px',
        width: 'fit-content',
        display: 'block',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: '24px',
        rowGap: '6px',
        fontSize: '70%',
        alignContent: 'start',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "PAY #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, "PAY-", String(row.paymentNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_36___default()(row.paymentDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, row.modes.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, row.reason || (((_row$TotalAmount = row.TotalAmount) === null || _row$TotalAmount === void 0 || (_row$TotalAmount = _row$TotalAmount[0]) === null || _row$TotalAmount === void 0 ? void 0 : _row$TotalAmount.prefix) === 'P-' ? 'Project' : 'Invoice')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        textAlign: 'left',
        color: row.transactionType === 'Refund' ? 'red' : 'green'
      }
    }, row.transactionType || 'Payment'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, row.status || 'Cleared')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("section", {
      style: {}
    }, row.description !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("table", {
      style: {
        position: 'relative',
        fontSize: '80%',
        float: 'left',
        left: '0',
        width: '50%',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        textAlign: 'left',
        width: '30px'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        textAlign: 'left'
      }
    }, row.description)))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '70%',
        marginBottom: '5px',
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Subject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, row.reason === 'Project' || ((_row$TotalAmount2 = row.TotalAmount) === null || _row$TotalAmount2 === void 0 || (_row$TotalAmount2 = _row$TotalAmount2[0]) === null || _row$TotalAmount2 === void 0 ? void 0 : _row$TotalAmount2.prefix) === 'P-' ? 'Project Amount' : 'Invoice Amount'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Amount Paid"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tbody", null, (_row$TotalAmount3 = row.TotalAmount) === null || _row$TotalAmount3 === void 0 ? void 0 : _row$TotalAmount3.map((Item, i) => {
      var _row$TotalAmount4, _relatedInvoice$invoi, _Item$invoiceAmount, _Item$total;
      var relatedInvoice = invoice === null || invoice === void 0 ? void 0 : invoice.find(row1 => row1._id === Item.id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", {
        key: Item.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
        style: {
          textAlign: 'center',
          borderLeft: '1px solid #DDD'
        }
      }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
        style: {
          textAlign: 'center',
          borderLeft: '1px solid #DDD'
        }
      }, " ", Item.prefix || (relatedInvoice !== null && relatedInvoice !== void 0 && relatedInvoice.ReferenceName2 || (relatedInvoice === null || relatedInvoice === void 0 ? void 0 : relatedInvoice.invoicePurchase) === 'Purchased' ? "P-" : row.reason === "Project" || ((_row$TotalAmount4 = row.TotalAmount) === null || _row$TotalAmount4 === void 0 || (_row$TotalAmount4 = _row$TotalAmount4[0]) === null || _row$TotalAmount4 === void 0 ? void 0 : _row$TotalAmount4.prefix) === 'P-' ? "P-" : "INV-"), String(Item.Ref).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
        style: {
          textAlign: 'center',
          borderLeft: '1px solid #DDD'
        }
      }, Item.days > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
        color: Item.days > 0 ? "red" : "black"
      }, "Overdue: ", Item.days, " Days Past Due") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_36___default()(Item.invoiceDate).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          borderLeft: '1px solid #DDD'
        }
      }, relatedInvoice === null || relatedInvoice === void 0 || (_relatedInvoice$invoi = relatedInvoice.invoiceSubject) === null || _relatedInvoice$invoi === void 0 ? void 0 : _relatedInvoice$invoi.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
        style: {
          textAlign: 'right',
          borderLeft: '1px solid #DDD'
        }
      }, "$", Item.invoiceAmount !== undefined ? (_Item$invoiceAmount = Item.invoiceAmount) === null || _Item$invoiceAmount === void 0 ? void 0 : _Item$invoiceAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
        style: {
          textAlign: 'right',
          borderLeft: '1px solid #DDD'
        }
      }, "$", (_Item$total = Item.total) === null || _Item$total === void 0 ? void 0 : _Item$total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("table", {
      style: {
        position: 'relative',
        fontSize: '70%',
        pageBreakInside: 'avoid',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Amount Received")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, row.amount ? (_row$amount = row.amount) === null || _row$amount === void 0 ? void 0 : _row$amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))), row.bankCharge && parseFloat(row.bankCharge) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Bank Charge")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, parseFloat(row.bankCharge).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.PaymentReceivedFC !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Amount Paid FC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      "data-prefix": true
    }, "FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, (_row$PaymentReceivedF = row.PaymentReceivedFC) === null || _row$PaymentReceivedF === void 0 ? void 0 : _row$PaymentReceivedF.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.PaymentReceivedUSD !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Amount Paid $")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, (_row$PaymentReceivedU = row.PaymentReceivedUSD) === null || _row$PaymentReceivedU === void 0 ? void 0 : _row$PaymentReceivedU.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Total Paid USD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, PaymentInfo ? PaymentInfo === null || PaymentInfo === void 0 ? void 0 : PaymentInfo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Credit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, row.remaining ? (_row$remaining = row.remaining) === null || _row$remaining === void 0 ? void 0 : _row$remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("address", {
      style: {
        float: 'left',
        fontSize: '70%',
        textAlign: 'left',
        width: '700px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
      style: {
        lineHeight: '14px',
        fontWeight: 'bold'
      }
    }, "Bank: SOFIBANQUE SA ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("br", null), "Entitled: GLOBAL GATE SARL", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("br", null), "Bank Account: 00023233330214247020073", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("br", null), "Code Swift: SFBXCDKIXXX")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        position: 'relative',
        marginTop: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
      hidden: true
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_component_PrintFooter__WEBPACK_IMPORTED_MODULE_2__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data = data) === null || _data === void 0 ? void 0 : _data.branchId : ""
    }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: "invoicedetails"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
      className: "invoicehr"
    }, "PAYMENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("section", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        padding: '0px',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("address", {
      style: {
        marginLeft: config['--client-block-left-offset'] || '0px',
        lineHeight: 1.35,
        width: 'fit-content',
        minWidth: '200px',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "Payment From", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, row.customerName.customerName !== undefined ? row.customerName.customerName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("br", null), row.customerName.billingAddress !== undefined ? row.customerName.billingAddress.toUpperCase() : '', ",", row.customerName.billingCity !== undefined ? row.customerName.billingCity.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        marginLeft: 'auto',
        marginRight: config['--metadata-block-right-offset'] || '0px',
        width: 'fit-content',
        display: 'block',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: '24px',
        rowGap: '6px',
        fontSize: '80%',
        alignContent: 'start',
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "PAY #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, "PAY-", String(row.paymentNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_36___default()(row.paymentDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, row.modes.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, row.reason || (((_row$TotalAmount5 = row.TotalAmount) === null || _row$TotalAmount5 === void 0 || (_row$TotalAmount5 = _row$TotalAmount5[0]) === null || _row$TotalAmount5 === void 0 ? void 0 : _row$TotalAmount5.prefix) === 'P-' ? 'Project' : 'Invoice')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        textAlign: 'left',
        color: row.transactionType === 'Refund' ? 'red' : 'green'
      }
    }, row.transactionType || 'Payment'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, row.status || 'Cleared')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("section", null, row.description !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("table", {
      style: {
        position: 'relative',
        fontSize: '80%',
        float: 'left',
        left: '0',
        width: '50%',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        textAlign: 'left',
        width: '30px'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        textAlign: 'left'
      }
    }, row.description)))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("table", {
      className: "secondTable",
      style: {
        width: '100%',
        clear: 'both',
        fontSize: '80%',
        marginBottom: '5px',
        border: '1px solid #DDD',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'left',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        padding: '10px',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Subject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, row.reason === 'Project' || ((_row$TotalAmount6 = row.TotalAmount) === null || _row$TotalAmount6 === void 0 || (_row$TotalAmount6 = _row$TotalAmount6[0]) === null || _row$TotalAmount6 === void 0 ? void 0 : _row$TotalAmount6.prefix) === 'P-' ? 'Project Amount' : 'Invoice Amount'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #DDD',
        backgroundColor: '#e8f7fe'
      }
    }, "Amount Paid"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tbody", null, (_row$TotalAmount7 = row.TotalAmount) === null || _row$TotalAmount7 === void 0 ? void 0 : _row$TotalAmount7.map((Item, i) => {
      var _row$TotalAmount8, _relatedInvoice$invoi2, _Item$invoiceAmount2, _Item$total2;
      var relatedInvoice = invoice === null || invoice === void 0 ? void 0 : invoice.find(row1 => row1._id === Item.id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", {
        key: Item.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'center',
          borderLeft: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_31__.NavLink, {
        to: "/InvoiceViewAdminAll/".concat(Item.id),
        className: "LinkName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "View"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'center',
          borderLeft: '1px solid #DDD'
        }
      }, " ", Item.prefix || (relatedInvoice !== null && relatedInvoice !== void 0 && relatedInvoice.ReferenceName2 || (relatedInvoice === null || relatedInvoice === void 0 ? void 0 : relatedInvoice.invoicePurchase) === 'Purchased' ? "P-" : row.reason === "Project" || ((_row$TotalAmount8 = row.TotalAmount) === null || _row$TotalAmount8 === void 0 || (_row$TotalAmount8 = _row$TotalAmount8[0]) === null || _row$TotalAmount8 === void 0 ? void 0 : _row$TotalAmount8.prefix) === 'P-' ? "P-" : "INV-"), String(Item.Ref).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'center',
          borderLeft: '1px solid #DDD'
        }
      }, Item.days > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
        color: Item.days > 0 ? "red" : "black"
      }, "Overdue: ", Item.days, " Days Past Due") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, dayjs__WEBPACK_IMPORTED_MODULE_36___default()(Item.invoiceDate).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          borderLeft: '1px solid #DDD'
        }
      }, relatedInvoice === null || relatedInvoice === void 0 || (_relatedInvoice$invoi2 = relatedInvoice.invoiceSubject) === null || _relatedInvoice$invoi2 === void 0 ? void 0 : _relatedInvoice$invoi2.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          borderLeft: '1px solid #DDD'
        }
      }, "$", Item.invoiceAmount !== undefined ? (_Item$invoiceAmount2 = Item.invoiceAmount) === null || _Item$invoiceAmount2 === void 0 ? void 0 : _Item$invoiceAmount2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
        style: {
          padding: '10px',
          textAlign: 'right',
          borderLeft: '1px solid #DDD'
        }
      }, "$", (_Item$total2 = Item.total) === null || _Item$total2 === void 0 ? void 0 : _Item$total2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("table", {
      style: {
        width: '100%',
        clear: 'both',
        fontSize: '80%',
        pageBreakInside: 'avoid'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Amount Received")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, row.amount ? (_row$amount2 = row.amount) === null || _row$amount2 === void 0 ? void 0 : _row$amount2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))), row.bankCharge && parseFloat(row.bankCharge) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Bank Charge")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, parseFloat(row.bankCharge).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.PaymentReceivedFC !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Amount Paid FC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      "data-prefix": true
    }, "FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, (_row$PaymentReceivedF2 = row.PaymentReceivedFC) === null || _row$PaymentReceivedF2 === void 0 ? void 0 : _row$PaymentReceivedF2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', row.PaymentReceivedUSD !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Amount Paid $")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, (_row$PaymentReceivedU2 = row.PaymentReceivedUSD) === null || _row$PaymentReceivedU2 === void 0 ? void 0 : _row$PaymentReceivedU2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Total Paid USD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, PaymentInfo ? PaymentInfo === null || PaymentInfo === void 0 ? void 0 : PaymentInfo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'left',
        width: '200px'
      },
      colSpan: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Credit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        padding: '10px',
        textAlign: 'right',
        borderBottom: '1px solid #DDD'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      "data-prefix": true
    }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, row.remaining ? row.remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("table", {
      style: {
        position: 'relative',
        marginTop: '-40px',
        fontSize: '80%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Bank"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "SOFIBANQUE SA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Entitled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "GLOBAL GATE SARL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        width: '100px',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Bank Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "00023233330214247020073")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "Code Swift"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      style: {
        backgroundColor: 'white',
        border: 'none',
        fontWeight: 'bold',
        textAlign: 'left'
      }
    }, "SFBXCDKIXXX")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      className: "footerinvoice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_45__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "contact@globalgate.sarl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_46__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "+243 827722222")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
      style: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material_Web__WEBPACK_IMPORTED_MODULE_47__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "www.GlobalGate.sarl"))))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null)))), show1 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "COMMENTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_41__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    type: "submit",
    style: {
      width: '100%'
    },
    className: "btnCustomer6"
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    style: {
      height: '355px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("table", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tbody", null, Comments1.map(Item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", {
    key: Item._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
    style: {
      width: '100%',
      borderBottom: '1px solid black'
    }
  }, Item.dateComment ? dayjs__WEBPACK_IMPORTED_MODULE_36___default()(Item.dateComment).format('DD/MM') : '', " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "", show1 === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "HISTORY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => handleShow1(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_41__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    style: {
      height: '518px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, payment.filter(row => row._id === id).map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    key: row._id
  }, row.Create ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, row.Create.dateComment, " ", row.Create.person, " ", 'PAY-' + String(row.Create.paymentNumber).padStart(6, '0')) : '')), notification.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, row.person + ' on ' + dayjs__WEBPACK_IMPORTED_MODULE_36___default()(row.dateNotification).format('DD/MMMM'), ": ", row.reason))))))) : "")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_16__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_38__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_39__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    onClick: handleClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_16__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_38__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_40__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentInformationView);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUGF5bWVudF9QYXltZW50SW5mb3JtYXRpb25WaWV3X2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyxnQjs7Ozs7Ozs7OztBQ1pZO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyx3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsQ0FBa0Q7QUFDeEI7QUFDd0I7QUFDa1M7QUFDdFI7QUFDbEI7QUFDb0I7QUFHaEUsSUFBTTBDLFdBQVcsR0FBR3JCLDBEQUFNLENBQUNzQixJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDL0MvQywwREFBQSxDQUFDd0MsOERBQU8sRUFBQVMsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPYiw4REFBYyxDQUFDYyxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxTQUFTO01BQzFCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQztNQUMzQkMsUUFBUSxFQUFFO0lBQ1o7RUFDRixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBRUgsU0FBU0Msa0JBQWtCQSxDQUFBQyxLQUFBLEVBQVc7RUFBQSxJQUFSQyxJQUFJLEdBQUFELEtBQUEsQ0FBSkMsSUFBSTtFQUNoQyxJQUFBQyxTQUFBLEdBQThCOUQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQStELFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQW5DRyxPQUFPLEdBQUFGLFVBQUE7SUFBRUcsVUFBVSxHQUFBSCxVQUFBO0VBQzFCLElBQUFJLFVBQUEsR0FBZ0NuRSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUFvRSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUFyQ0UsUUFBUSxHQUFBRCxVQUFBO0lBQUVFLFdBQVcsR0FBQUYsVUFBQTtFQUM1QixJQUFNRyxNQUFNLE1BQUFuQixNQUFBLENBQU1sRCxvREFBWSxhQUFVO0VBQ3hDSCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNeUUsWUFBWTtNQUFBLElBQUFDLEtBQUEsR0FBQUMsaUJBQUEsQ0FBRyxhQUFZO1FBQy9CLElBQUksSUFBSSxFQUFFO1VBQ1IsSUFBSTtZQUNGLElBQU1DLEdBQUcsU0FBUzFFLDZDQUFLLENBQUMyRSxHQUFHLENBQUNMLE1BQU0sQ0FBQztZQUNuQ0wsVUFBVSxDQUFDUyxHQUFHLENBQUNFLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1VBQ3JDLENBQUMsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7WUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQztVQUM5QztRQUNGO01BQ0YsQ0FBQztNQUFBLGdCQVRLUCxZQUFZQSxDQUFBO1FBQUEsT0FBQUMsS0FBQSxDQUFBUSxLQUFBLE9BQUFDLFNBQUE7TUFBQTtJQUFBLEdBU2pCO0lBQ0RWLFlBQVksQ0FBQyxDQUFDO0VBQ2hCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixJQUFBVyxVQUFBLEdBQXdCbkYsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQW9GLFVBQUEsR0FBQXBCLGNBQUEsQ0FBQW1CLFVBQUE7SUFBNUJFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFDcEIsSUFBTUcsVUFBVSxHQUFJQyxDQUFDLElBQUs7SUFDeEJGLE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDO0VBQ1osQ0FBQztFQUNELElBQUFDLFVBQUEsR0FBMEJ6RiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBMEYsVUFBQSxHQUFBMUIsY0FBQSxDQUFBeUIsVUFBQTtJQUE5QkUsS0FBSyxHQUFBRCxVQUFBO0lBQUVFLFFBQVEsR0FBQUYsVUFBQTtFQUN0QixJQUFBRyxVQUFBLEdBQTRCN0YsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQThGLFVBQUEsR0FBQTlCLGNBQUEsQ0FBQTZCLFVBQUE7SUFBaENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFDeEIvRixnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNa0csYUFBYSxHQUFHaEMsT0FBTyxDQUFDaUMsU0FBUyxDQUFDQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsR0FBRyxLQUFLdkMsSUFBSSxDQUFDO0lBQ2hFLElBQUlvQyxhQUFhLEtBQUssQ0FBQyxDQUFDLEVBQUU7TUFDeEJMLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDO0lBQ3pCO0VBQ0YsQ0FBQyxFQUFFLENBQUNoQyxPQUFPLEVBQUVKLElBQUksQ0FBQyxDQUFDO0VBQ25CLElBQU13QyxZQUFZLEdBQUdBLENBQUNiLENBQUMsRUFBRWMsUUFBUSxLQUFLO0lBQ3BDVixRQUFRLENBQUNVLFFBQVEsQ0FBQztFQUNwQixDQUFDO0VBQ0QsSUFBTUMsYUFBYSxHQUFHQSxDQUFDZixDQUFDLEVBQUVjLFFBQVEsS0FBSztJQUNyQ04sU0FBUyxDQUFDTSxRQUFRLENBQUM7RUFDckIsQ0FBQztFQUVELElBQUFFLFVBQUEsR0FBNEJ4RywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBeUcsV0FBQSxHQUFBekMsY0FBQSxDQUFBd0MsVUFBQTtJQUFqQ0UsTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUN4QixJQUFNRyxZQUFZLEdBQUlwQixDQUFDLElBQUs7SUFDMUIsSUFBTUcsS0FBSyxHQUFHSCxDQUFDLENBQUNxQixNQUFNLENBQUNsQixLQUFLO0lBQzVCZ0IsU0FBUyxDQUFDaEIsS0FBSyxDQUFDO0VBQ2xCLENBQUM7RUFFRCxJQUFNbUIsUUFBUSxHQUFHSixNQUFNLEtBQUssRUFBRSxHQUFHekMsT0FBTyxDQUFDOEMsTUFBTSxDQUFFWixHQUFHLElBQ2xEQSxHQUFHLENBQUNhLGFBQWEsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDUixNQUFNLENBQUMsSUFDN0NQLEdBQUcsQ0FBQ2dCLFlBQVksQ0FBQ0EsWUFBWSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDRixRQUFRLENBQUNSLE1BQU0sQ0FBQ1UsV0FBVyxDQUFDLENBQUMsQ0FDM0UsQ0FBQyxHQUFHbkQsT0FBTztFQUNYLG9CQUNFbkUsMERBQUEsY0FDR3VGLElBQUksS0FBSyxDQUFDLGdCQUNUdkYsMERBQUE7SUFBSzRDLFNBQVMsRUFBQztFQUFtQixnQkFDaEM1QywwREFBQTtJQUFLdUgsS0FBSyxFQUFFO01BQUVDLE9BQU8sRUFBRSxNQUFNO01BQUVDLGNBQWMsRUFBRSxlQUFlO01BQUVDLFVBQVUsRUFBRTtJQUFTO0VBQUUsZ0JBQ3JGMUgsMERBQUE7SUFBS3VILEtBQUssRUFBRTtNQUFFQyxPQUFPLEVBQUUsTUFBTTtNQUFFRyxPQUFPLEVBQUUsS0FBSztNQUFFRCxVQUFVLEVBQUU7SUFBUztFQUFFLGdCQUNwRTFILDBEQUFBLENBQUM0QixxREFBUSxNQUFFLENBQUMsZUFDWjVCLDBEQUFBLENBQUNtQixxREFBVTtJQUFDeUcsT0FBTyxFQUFDO0VBQUksR0FBQyxhQUF1QixDQUM3QyxDQUFDLGVBQ041SCwwREFBQTtJQUFLdUgsS0FBSyxFQUFFO01BQUVJLE9BQU8sRUFBRTtJQUFPO0VBQUUsZ0JBQzlCM0gsMERBQUE7SUFBRzRDLFNBQVMsRUFBQyxjQUFjO0lBQUNpRixPQUFPLEVBQUVBLENBQUEsS0FBTXBDLFVBQVUsQ0FBQyxDQUFDO0VBQUUsR0FBQyxRQUFTLENBQ2hFLENBQ0YsQ0FBQyxlQUNOekYsMERBQUE7SUFBS3VILEtBQUssRUFBRTtNQUFFTyxNQUFNLEVBQUUscUJBQXFCO01BQUVDLFFBQVEsRUFBRSxRQUFRO01BQUVDLFNBQVMsRUFBRSxRQUFRO01BQUVDLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3BHakksMERBQUEsQ0FBQ2tDLHFEQUFJO0lBQ0gyRCxLQUFLLEVBQUVBLEtBQU07SUFDYnFDLFFBQVEsRUFBRTNCLFlBQWE7SUFDdkI0QixXQUFXLEVBQUMsVUFBVTtJQUN0QkMsRUFBRSxFQUFFO01BQ0Ysc0JBQXNCLEVBQUU7UUFDdEI1RSxlQUFlLEVBQUUsT0FBTztRQUN4QnNFLE1BQU0sRUFBRTtNQUNWO0lBQ0Y7RUFBRSxHQUVEM0QsT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUVrRSxHQUFHLENBQUMsQ0FBQ2hDLEdBQUcsRUFBRWlDLEtBQUssa0JBQ3ZCdEksMERBQUEsQ0FBQ21DLHFEQUFHO0lBQ0ZvRyxHQUFHLEVBQUVELEtBQU07SUFDWEUsS0FBSyxFQUFFbkMsR0FBRyxDQUFDZ0IsWUFBWSxDQUFDQSxZQUFZLEdBQUcsS0FBSyxHQUFHaEIsR0FBRyxDQUFDYSxhQUFjO0lBQ2pFdUIsU0FBUyxFQUFFbkcsbURBQUs7SUFDaEJvRyxFQUFFLDZCQUFBcEYsTUFBQSxDQUE2QitDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFHO0lBQ3pDOEIsRUFBRSxFQUFFO01BQ0YsZ0JBQWdCLEVBQUU7UUFDaEIzRSxLQUFLLEVBQUUsT0FBTztRQUNkRCxlQUFlLEVBQUUsU0FBUztRQUMxQm1GLFlBQVksRUFBRTtNQUNoQjtJQUNGO0VBQUUsQ0FDSCxDQUNGLENBQ0csQ0FDSCxDQUNGLENBQUMsR0FFSixFQUFFLEVBRUxwRCxJQUFJLEtBQUssQ0FBQyxnQkFDUnZGLDBEQUFBO0lBQUs0QyxTQUFTLEVBQUM7RUFBbUIsZ0JBQ2pDNUMsMERBQUEsQ0FBQ00scURBQUk7SUFBQ3NJLFNBQVM7SUFBQ3JCLEtBQUssRUFBRTtNQUFFRyxVQUFVLEVBQUUsUUFBUTtNQUFFQyxPQUFPLEVBQUU7SUFBTyxDQUFFO0lBQUNrQixPQUFPLEVBQUU7RUFBRSxnQkFDM0U3SSwwREFBQSxDQUFDTSxxREFBSTtJQUFDd0ksSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRyxnQkFDaEIvSSwwREFBQSxDQUFDZSxxREFBUztJQUNSeUgsS0FBSyxFQUFDLFFBQVE7SUFDZFEsRUFBRSxFQUFDLFFBQVE7SUFDWG5ELEtBQUssRUFBRWUsTUFBTztJQUNkZ0IsT0FBTyxFQUFDLFVBQVU7SUFDbEJNLFFBQVEsRUFBRXBCO0VBQWEsQ0FDeEIsQ0FDRyxDQUFDLGVBQ1A5RywwREFBQSxDQUFDTSxxREFBSTtJQUFDd0ksSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZi9JLDBEQUFBLENBQUMwQyxXQUFXO0lBQUN1RyxLQUFLLEVBQUMsT0FBTztJQUFDQyxTQUFTLEVBQUM7RUFBUSxnQkFDM0NsSiwwREFBQSxDQUFDTyxxREFBVTtJQUFDc0gsT0FBTyxFQUFFQSxDQUFBLEtBQU1wQyxVQUFVLENBQUMsQ0FBQyxDQUFFO0lBQUM4QixLQUFLLEVBQUU7TUFBRTRCLFFBQVEsRUFBRSxVQUFVO01BQUVDLEtBQUssRUFBRTtJQUFRO0VBQUUsZ0JBQ3hGcEosMERBQUEsQ0FBQ3VDLDREQUFLO0lBQUNnRixLQUFLLEVBQUU7TUFBRTlELEtBQUssRUFBRTtJQUFVO0VBQUUsQ0FBRSxDQUMzQixDQUNELENBQ1QsQ0FDRixDQUFDLGVBRVB6RCwwREFBQTtJQUFLdUgsS0FBSyxFQUFFO01BQUVPLE1BQU0sRUFBRSxxQkFBcUI7TUFBRUMsUUFBUSxFQUFFLFFBQVE7TUFBRUMsU0FBUyxFQUFFLFFBQVE7TUFBRUMsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEdqSSwwREFBQSxDQUFDa0MscURBQUk7SUFDSDJELEtBQUssRUFBRUksTUFBTztJQUNkaUMsUUFBUSxFQUFFekIsYUFBYztJQUN4QjBCLFdBQVcsRUFBQyxVQUFVO0lBQ3RCQyxFQUFFLEVBQUU7TUFDRixzQkFBc0IsRUFBRTtRQUN0QjVFLGVBQWUsRUFBRTtNQUNuQjtJQUNGO0VBQUUsR0FFRHdELFFBQVEsYUFBUkEsUUFBUSx1QkFBUkEsUUFBUSxDQUFFcUIsR0FBRyxDQUFDLENBQUNoQyxHQUFHLEVBQUVpQyxLQUFLLGtCQUN4QnRJLDBEQUFBLENBQUNtQyxxREFBRztJQUNGb0csR0FBRyxFQUFFRCxLQUFNO0lBQ1hFLEtBQUssRUFBRW5DLEdBQUcsQ0FBQ2dCLFlBQVksQ0FBQ0EsWUFBWSxHQUFHLEtBQUssR0FBR2hCLEdBQUcsQ0FBQ2EsYUFBYztJQUNqRXVCLFNBQVMsRUFBRW5HLG1EQUFLO0lBQ2hCb0csRUFBRSw2QkFBQXBGLE1BQUEsQ0FBNkIrQyxHQUFHLENBQUNDLEdBQUcsQ0FBRztJQUN6QzhCLEVBQUUsRUFBRTtNQUNGLGdCQUFnQixFQUFFO1FBQ2hCM0UsS0FBSyxFQUFFO01BQ1Q7SUFDRjtFQUFFLENBQ0gsQ0FDRixDQUNHLENBQ0gsQ0FDRixDQUFDLEdBQ0osRUFFRCxDQUFDO0FBRVY7QUFFQSxpRUFBZUksa0JBQWtCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0S2pDLENBQTZEO0FBQ0o7QUFDQTtBQUNDO0FBQ2pDO0FBQ2dDO0FBQ0w7QUFDc0I7QUFDMlI7QUFDclM7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDeEM7QUFDd0I7QUFDaUI7QUFDWjtBQUMrQjtBQUN0QztBQUN0QjtBQUM0QjtBQUNQO0FBQ2U7QUFDVjtBQUNOO0FBQ1E7QUFDTDtBQUNxQjtBQUNkO0FBQ087QUFDYjtBQUNBO0FBQ0o7QUFDSDtBQUNXO0FBQ1E7QUFFRTtBQUNwQjtBQUU1QyxJQUFNbkIsV0FBVyxHQUFHckIsMERBQU0sQ0FBQ3NCLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUMvQy9DLDBEQUFBLENBQUN3Qyw4REFBTyxFQUFBUyxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU9iLDhEQUFjLENBQUNjLE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLFNBQVM7TUFDMUJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzNCQyxRQUFRLEVBQUU7SUFDWjtFQUNGLENBQUM7QUFBQSxDQUFDLENBQUM7QUFDSCxJQUFNMEksV0FBVyxHQUFHakwsMERBQU0sQ0FBQ3lDLEtBQUE7RUFBQSxJQUFHbEIsU0FBUyxHQUFBa0IsS0FBQSxDQUFUbEIsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFnQixLQUFBLEVBQUF5SSxVQUFBO0VBQUEsb0JBQy9Ddk0sMERBQUEsQ0FBQ3dDLDhEQUFPLEVBQUFTLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDK0IsS0FBQTtFQUFBLElBQUd0QixLQUFLLEdBQUFzQixLQUFBLENBQUx0QixLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU9iLDhEQUFjLENBQUNjLE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLE1BQU07TUFDdkJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzNCQyxRQUFRLEVBQUU7SUFDWjtFQUNGLENBQUM7QUFBQSxDQUFDLENBQUM7QUFDSCxJQUFNMkQsS0FBSyxHQUFHO0VBQ1o0QixRQUFRLEVBQUUsVUFBVTtFQUNwQnFELEdBQUcsRUFBRSxLQUFLO0VBQ1ZDLElBQUksRUFBRSxLQUFLO0VBQ1hDLFNBQVMsRUFBRSx1QkFBdUI7RUFDbEN6RSxLQUFLLEVBQUUsR0FBRztFQUNWMEUsT0FBTyxFQUFFLGtCQUFrQjtFQUMzQmpKLFNBQVMsRUFBRSxFQUFFO0VBQ2JrSixFQUFFLEVBQUUsQ0FBQztFQUNMQyxFQUFFLEVBQUUsQ0FBQztFQUNMQyxFQUFFLEVBQUU7QUFDTixDQUFDO0FBQ0QsSUFBTUMsV0FBVyxHQUFHLEdBQUc7QUFDdkIsSUFBTUMsTUFBTSxHQUFHM0wsMERBQU0sQ0FBQzhJLDZEQUFTLEVBQUU7RUFDL0I4QyxpQkFBaUIsRUFBR0MsSUFBSSxJQUFLQSxJQUFJLEtBQUs7QUFDeEMsQ0FBQyxDQUFDLENBQUNDLEtBQUE7RUFBQSxJQUFHOUosS0FBSyxHQUFBOEosS0FBQSxDQUFMOUosS0FBSztJQUFFK0osSUFBSSxHQUFBRCxLQUFBLENBQUpDLElBQUk7RUFBQSxPQUFBQyxhQUFBO0lBQ2ZDLE1BQU0sRUFBRWpLLEtBQUssQ0FBQ2lLLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDL0JDLFVBQVUsRUFBRW5LLEtBQUssQ0FBQ29LLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO01BQ3hEQyxNQUFNLEVBQUV0SyxLQUFLLENBQUNvSyxXQUFXLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztNQUN0Q0MsUUFBUSxFQUFFeEssS0FBSyxDQUFDb0ssV0FBVyxDQUFDSSxRQUFRLENBQUNDO0lBQ3ZDLENBQUM7RUFBQyxHQUNFVixJQUFJLElBQUk7SUFDVlcsVUFBVSxFQUFFaEIsV0FBVztJQUN2QjlFLEtBQUssaUJBQUEzRSxNQUFBLENBQWlCeUosV0FBVyxRQUFLO0lBQ3RDUyxVQUFVLEVBQUVuSyxLQUFLLENBQUNvSyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRTtNQUN4REMsTUFBTSxFQUFFdEssS0FBSyxDQUFDb0ssV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7TUFDdENDLFFBQVEsRUFBRXhLLEtBQUssQ0FBQ29LLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDRztJQUN2QyxDQUFDO0VBQ0gsQ0FBQztBQUFBLENBQ0QsQ0FBQztBQUNILElBQU1DLE1BQU0sR0FBRzVNLDBEQUFNLENBQUNpSiw2REFBUyxFQUFFO0VBQUUyQyxpQkFBaUIsRUFBR0MsSUFBSSxJQUFLQSxJQUFJLEtBQUs7QUFBTyxDQUFDLENBQUMsQ0FDaEZnQixLQUFBO0VBQUEsSUFBRzdLLEtBQUssR0FBQTZLLEtBQUEsQ0FBTDdLLEtBQUs7SUFBRStKLElBQUksR0FBQWMsS0FBQSxDQUFKZCxJQUFJO0VBQUEsT0FBUTtJQUNwQixvQkFBb0IsRUFBQUMsYUFBQTtNQUNsQmxFLFFBQVEsRUFBRSxVQUFVO01BQ3BCZ0YsVUFBVSxFQUFFLFFBQVE7TUFDcEJsRyxLQUFLLEVBQUU4RSxXQUFXO01BQ2xCUyxVQUFVLEVBQUVuSyxLQUFLLENBQUNvSyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDNUNDLE1BQU0sRUFBRXRLLEtBQUssQ0FBQ29LLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1FBQ3RDQyxRQUFRLEVBQUV4SyxLQUFLLENBQUNvSyxXQUFXLENBQUNJLFFBQVEsQ0FBQ0c7TUFDdkMsQ0FBQyxDQUFDO01BQ0ZJLFNBQVMsRUFBRTtJQUFZLEdBQ25CLENBQUNoQixJQUFJLElBQUk7TUFDWGlCLFNBQVMsRUFBRSxRQUFRO01BQ25CYixVQUFVLEVBQUVuSyxLQUFLLENBQUNvSyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDNUNDLE1BQU0sRUFBRXRLLEtBQUssQ0FBQ29LLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1FBQ3RDQyxRQUFRLEVBQUV4SyxLQUFLLENBQUNvSyxXQUFXLENBQUNJLFFBQVEsQ0FBQ0M7TUFDdkMsQ0FBQyxDQUFDO01BQ0Y3RixLQUFLLEVBQUU1RSxLQUFLLENBQUN3RixPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ3ZCLENBQUN4RixLQUFLLENBQUNpTCxXQUFXLENBQUNDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRztRQUM1QnRHLEtBQUssRUFBRTVFLEtBQUssQ0FBQ3dGLE9BQU8sQ0FBQyxDQUFDO01BQ3hCO0lBQ0YsQ0FBQztFQUVMLENBQUM7QUFBQSxDQUNILENBQUM7QUFHRCxTQUFTMkYsc0JBQXNCQSxDQUFBLEVBQUc7RUFBQSxJQUFBQyxlQUFBO0VBQ2hDLElBQUFDLGdCQUFBLEdBQW1CckYsa0VBQWUsQ0FBQyxDQUFDO0lBQTVCc0YsTUFBTSxHQUFBRCxnQkFBQSxDQUFOQyxNQUFNO0VBQ2QsSUFBQUMsVUFBQSxHQUFhL0QsNERBQVMsQ0FBQyxDQUFDO0lBQWxCN0IsRUFBRSxHQUFBNEYsVUFBQSxDQUFGNUYsRUFBRTtFQUNSLElBQU02RixRQUFRLEdBQUd4TSw4REFBVyxDQUFDLENBQUM7RUFDOUIsSUFBTXlNLFFBQVEsR0FBR2hFLHlEQUFXLENBQUMsQ0FBQztFQUM5QixJQUFNaUUsSUFBSSxHQUFHaEUseURBQVcsQ0FBQ0Usd0VBQWlCLENBQUM7RUFDM0NoTCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNK08sWUFBWSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDakQsSUFBTUMsU0FBUztNQUFBLElBQUFDLEtBQUEsR0FBQXhLLGlCQUFBLENBQUcsYUFBWTtRQUM1QixJQUFJb0ssWUFBWSxFQUFFO1VBQ2hCLElBQUk7WUFDRixJQUFNbkssR0FBRyxTQUFTMUUsOENBQUssQ0FBQzJFLEdBQUcsSUFBQXhCLE1BQUEsQ0FBSWxELHFEQUFZLHdCQUFBa0QsTUFBQSxDQUFxQjBMLFlBQVksQ0FBRSxDQUFDO1lBQy9FLElBQU1LLElBQUksR0FBR3hLLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQSxJQUFJLENBQUN1SyxZQUFZO1lBQ3ZDLElBQU1DLElBQUksR0FBRzFLLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQSxJQUFJLENBQUN5SyxJQUFJO1lBQy9CVixRQUFRLENBQUM1RCxrRUFBTyxDQUFDO2NBQUV1RSxRQUFRLEVBQUVKLElBQUk7Y0FBRUcsSUFBSSxFQUFFRDtZQUFLLENBQUMsQ0FBQyxDQUFDO1VBQ25ELENBQUMsQ0FBQyxPQUFPdEssS0FBSyxFQUFFO1lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7VUFDOUM7UUFDRixDQUFDLE1BQU07VUFDTDRKLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDZjtNQUNGLENBQUM7TUFBQSxnQkFiS00sU0FBU0EsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQWpLLEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUEsR0FhZDtJQUNEK0osU0FBUyxDQUFDLENBQUM7RUFDYixDQUFDLEVBQUUsQ0FBQ0wsUUFBUSxDQUFDLENBQUM7RUFDZCxJQUFBOUssU0FBQSxHQUFzQzlELCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUErRCxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEzQzBMLFdBQVcsR0FBQXpMLFVBQUE7SUFBRTBMLGNBQWMsR0FBQTFMLFVBQUE7RUFDbENoRSxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNMlAsV0FBVztNQUFBLElBQUFDLEtBQUEsR0FBQWpMLGlCQUFBLENBQUcsYUFBWTtRQUM5QixJQUFJO1VBQUEsSUFBQWtMLFNBQUE7VUFDRixJQUFNakwsR0FBRyxTQUFTMUUsOENBQUssQ0FBQzJFLEdBQUcsSUFBQXhCLE1BQUEsQ0FBSWxELHFEQUFZLGlCQUFjLENBQUM7VUFDMUQsQ0FBQTBQLFNBQUEsR0FBQWpMLEdBQUcsQ0FBQ0UsSUFBSSxjQUFBK0ssU0FBQSxnQkFBQUEsU0FBQSxHQUFSQSxTQUFBLENBQVUvSyxJQUFJLGNBQUErSyxTQUFBLGVBQWRBLFNBQUEsQ0FBZ0I3SSxNQUFNLENBQUVaLEdBQUcsSUFBS0EsR0FBRyxDQUFDMEosTUFBTSxLQUFLaEIsSUFBSSxDQUFDaEssSUFBSSxDQUFDaUUsRUFBRSxDQUFDLENBQ3pEWCxHQUFHLENBQUVoQyxHQUFHLElBQUtzSixjQUFjLENBQUN0SixHQUFHLENBQUMySixPQUFPLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsT0FBTy9LLEtBQUssRUFBRTtVQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO1FBQzlDO01BQ0YsQ0FBQztNQUFBLGdCQVJLMkssV0FBV0EsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQTFLLEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUEsR0FRaEI7SUFDRHdLLFdBQVcsQ0FBQyxDQUFDO0VBQ2YsQ0FBQyxFQUFFLENBQUNiLElBQUksQ0FBQyxDQUFDO0VBQ1YsSUFBTWtCLFlBQVksR0FBR1AsV0FBVyxDQUFDekksTUFBTSxDQUFFWixHQUFHLElBQUtBLEdBQUcsQ0FBQzZKLFVBQVUsS0FBSyxTQUFTLElBQUk3SixHQUFHLENBQUM4SixNQUFNLENBQUNDLEtBQUssS0FBSyxJQUFJLENBQUM7RUFFM0csSUFBTUMsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDekJwQixZQUFZLENBQUNxQixVQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CeEIsUUFBUSxDQUFDOUQsaUVBQU0sQ0FBQyxDQUFDLENBQUM7SUFDbEI2RCxRQUFRLENBQUMsR0FBRyxDQUFDO0VBQ2YsQ0FBQztFQUNELElBQUF4SyxVQUFBLEdBQThCbkUsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQW9FLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQW5DRixPQUFPLEdBQUFHLFVBQUE7SUFBRUYsVUFBVSxHQUFBRSxVQUFBO0VBQzFCLElBQUFlLFVBQUEsR0FBOEJuRiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBb0YsVUFBQSxHQUFBcEIsY0FBQSxDQUFBbUIsVUFBQTtJQUFuQ2tMLE9BQU8sR0FBQWpMLFVBQUE7SUFBRWtMLFVBQVUsR0FBQWxMLFVBQUE7RUFDMUIsSUFBQUssVUFBQSxHQUF3Q3pGLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUEwRixVQUFBLEdBQUExQixjQUFBLENBQUF5QixVQUFBO0lBQTdDOEssWUFBWSxHQUFBN0ssVUFBQTtJQUFFOEssZUFBZSxHQUFBOUssVUFBQTtFQUNwQyxJQUFBRyxVQUFBLEdBQXNDN0YsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQThGLFVBQUEsR0FBQTlCLGNBQUEsQ0FBQTZCLFVBQUE7SUFBN0M0SyxXQUFXLEdBQUEzSyxVQUFBO0lBQUU0SyxjQUFjLEdBQUE1SyxVQUFBO0VBQ2xDLElBQU12QixNQUFNLE1BQUFuQixNQUFBLENBQU1sRCxxREFBWSxhQUFVO0VBQ3hDSCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNNFEsU0FBUztNQUFBLElBQUFDLEtBQUEsR0FBQWxNLGlCQUFBLENBQUcsYUFBWTtRQUM1QixJQUFJO1VBQ0YsSUFBTUMsR0FBRyxTQUFTMUUsOENBQUssQ0FBQzJFLEdBQUcsQ0FBQ0wsTUFBTSxDQUFDO1VBQ25DTCxVQUFVLENBQUNTLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQSxJQUFJLENBQUM7VUFDekIsSUFBTWdNLFVBQVUsU0FBUzVRLDhDQUFLLENBQUMyRSxHQUFHLElBQUF4QixNQUFBLENBQUlsRCxxREFBWSwwQkFBdUIsQ0FBQztVQUMxRW9RLFVBQVUsQ0FBQ08sVUFBVSxDQUFDaE0sSUFBSSxDQUFDQSxJQUFJLENBQUM7VUFDaEMsSUFBTWlNLGVBQWUsU0FBUzdRLDhDQUFLLENBQUMyRSxHQUFHLElBQUF4QixNQUFBLENBQUlsRCxxREFBWSxtQkFBQWtELE1BQUEsQ0FBZ0IwRixFQUFFLENBQUUsQ0FBQztVQUM1RTBILGVBQWUsQ0FBQ00sZUFBZSxDQUFDak0sSUFBSSxDQUFDQSxJQUFJLENBQUNrTSxXQUFXLEtBQUtDLFNBQVMsR0FBR0YsZUFBZSxDQUFDak0sSUFBSSxDQUFDQSxJQUFJLENBQUNrTSxXQUFXLEdBQUcsSUFBSSxDQUFDO1VBQ25ITCxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxPQUFPM0wsS0FBSyxFQUFFO1VBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7VUFDNUMyTCxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3ZCO01BQ0YsQ0FBQztNQUFBLGdCQWJLQyxTQUFTQSxDQUFBO1FBQUEsT0FBQUMsS0FBQSxDQUFBM0wsS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQWFkO0lBQ0R5TCxTQUFTLENBQUMsQ0FBQztFQUNiLENBQUMsRUFBRSxDQUFDN0gsRUFBRSxDQUFDLENBQUM7RUFDUixJQUFBdEMsVUFBQSxHQUE0QnhHLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUF5RyxXQUFBLEdBQUF6QyxjQUFBLENBQUF3QyxVQUFBO0lBQWpDeUssTUFBTSxHQUFBeEssV0FBQTtJQUFFeUssU0FBUyxHQUFBekssV0FBQTtFQUN4QixJQUFBMEssV0FBQSxHQUFpQ25SLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFvUixXQUFBLEdBQUFwTixjQUFBLENBQUFtTixXQUFBO0lBQXRDRSxTQUFTLEdBQUFELFdBQUE7SUFBRUUsV0FBVyxHQUFBRixXQUFBO0VBQzdCLElBQUFHLFdBQUEsR0FBd0N2UiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBd1IsV0FBQSxHQUFBeE4sY0FBQSxDQUFBdU4sV0FBQTtJQUE3Q0UsWUFBWSxHQUFBRCxXQUFBO0lBQUVFLGVBQWUsR0FBQUYsV0FBQTtFQUNwQyxJQUFNRyxXQUFXLEdBQUdwQixZQUFZLEtBQUssSUFBSSxHQUFHQSxZQUFZLENBQUNxQixNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFMUwsR0FBRyxLQUFLMEwsR0FBRyxHQUFHQyxVQUFVLENBQUMzTCxHQUFHLENBQUM0TCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ2pIaFMsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBTWlTLFlBQVk7TUFBQSxJQUFBQyxLQUFBLEdBQUF2TixpQkFBQSxDQUFHLGFBQVk7UUFDL0IsSUFBSTtVQUFBLElBQUF3TixVQUFBLEVBQUFDLHFCQUFBO1VBQ0YsSUFBTXhOLEdBQUcsU0FBUzFFLDhDQUFLLENBQUMyRSxHQUFHLElBQUF4QixNQUFBLENBQUlsRCxxREFBWSxhQUFVLENBQUM7VUFDdEQsSUFBTWtTLElBQUksSUFBQUYsVUFBQSxHQUFHdk4sR0FBRyxDQUFDRSxJQUFJLGNBQUFxTixVQUFBLGdCQUFBQSxVQUFBLEdBQVJBLFVBQUEsQ0FBVXJOLElBQUksY0FBQXFOLFVBQUEsdUJBQWRBLFVBQUEsQ0FBZ0JuTCxNQUFNLENBQUVaLEdBQUcsSUFBS0EsR0FBRyxDQUFDa00sV0FBVyxDQUFDQyxNQUFNLEtBQUt4SixFQUFFLENBQUM7VUFDM0V3SSxXQUFXLENBQUNjLElBQUksQ0FBQ3ROLE9BQU8sQ0FBQyxDQUFDLENBQUM7VUFDM0IsSUFBTXlOLGVBQWUsU0FBU3RTLDhDQUFLLENBQUMyRSxHQUFHLElBQUF4QixNQUFBLENBQUlsRCxxREFBWSxrQkFBZSxDQUFDO1VBQ3ZFd1IsZUFBZSxFQUFBUyxxQkFBQSxHQUFDSSxlQUFlLENBQUMxTixJQUFJLGNBQUFzTixxQkFBQSxnQkFBQUEscUJBQUEsR0FBcEJBLHFCQUFBLENBQXNCdE4sSUFBSSxjQUFBc04scUJBQUEsdUJBQTFCQSxxQkFBQSxDQUE0QnBMLE1BQU0sQ0FBRVosR0FBRyxJQUFLQSxHQUFHLENBQUNtTSxNQUFNLEtBQUt4SixFQUFFLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUMsT0FBTy9ELEtBQUssRUFBRTtVQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO1FBQzlDO01BQ0YsQ0FBQztNQUFBLGdCQVZLaU4sWUFBWUEsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQWhOLEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUEsR0FVakI7SUFDRDhNLFlBQVksQ0FBQyxDQUFDO0VBQ2hCLENBQUMsRUFBRSxDQUFDbEosRUFBRSxDQUFDLENBQUM7RUFDUixJQUFNdUosV0FBVyxHQUNqQjtJQUNFQyxNQUFNLEVBQUV4SixFQUFFO0lBQ1YwSixNQUFNLEVBQUUzRCxJQUFJLENBQUNoSyxJQUFJLENBQUMwSyxRQUFRO0lBQzFCMEI7RUFDRixDQUFDO0VBRUQsQ0FBQztFQUVELElBQUF3QixXQUFBLEdBQThCelMsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTBTLFdBQUEsR0FBQTFPLGNBQUEsQ0FBQXlPLFdBQUE7SUFBdENFLE9BQU8sR0FBQUQsV0FBQTtJQUFFRSxVQUFVLEdBQUFGLFdBQUE7RUFDMUIsSUFBQUcsV0FBQSxHQUFnRDdTLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE4UyxXQUFBLEdBQUE5TyxjQUFBLENBQUE2TyxXQUFBO0lBQXhERSxnQkFBZ0IsR0FBQUQsV0FBQTtJQUFFRSxtQkFBbUIsR0FBQUYsV0FBQTtFQUM1QyxJQUFBRyxXQUFBLEdBQTRDalQsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWtULFdBQUEsR0FBQWxQLGNBQUEsQ0FBQWlQLFdBQUE7SUFBcERFLGNBQWMsR0FBQUQsV0FBQTtJQUFFRSxpQkFBaUIsR0FBQUYsV0FBQTtFQUV4QyxJQUFNRyxVQUFVLEdBQUdBLENBQUEsS0FBTTtJQUV2QkwsbUJBQW1CLENBQUMsSUFBSSxDQUFDO0lBQ3pCSixVQUFVLENBQUMsSUFBSSxDQUFDO0lBRWhCVSxVQUFVLENBQUMsTUFBTTtNQUNmVixVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUMsRUFBRSxHQUFHLENBQUM7RUFFVCxDQUFDO0VBQ0QsSUFBTVcsV0FBVyxHQUFHQSxDQUFBLEtBQU07SUFDeEJILGlCQUFpQixDQUFDLElBQUksQ0FBQztJQUN2QlIsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNoQlUsVUFBVSxDQUFDLE1BQU07TUFDZlYsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1QsQ0FBQztFQUNELElBQU1ZLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0lBQ3hCUixtQkFBbUIsQ0FBQyxLQUFLLENBQUM7RUFDNUIsQ0FBQztFQUNELElBQU1TLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07SUFDN0JMLGlCQUFpQixDQUFDLEtBQUssQ0FBQztFQUMxQixDQUFDO0VBRUQsQ0FBQztFQUNELElBQU1NLFdBQVcsR0FBR3hJLDZDQUFLLENBQUN5SSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFFckMsSUFBTUMsZ0JBQWdCO0lBQUEsSUFBQUMsS0FBQSxHQUFBcFAsaUJBQUEsQ0FBRyxXQUFPYyxDQUFDLEVBQUs7TUFDcENBLENBQUMsQ0FBQ3VPLGNBQWMsQ0FBQyxDQUFDO01BQ2xCLElBQU1sUCxJQUFJLEdBQUc7UUFDWHdOLFdBQVc7UUFDWHFCO01BQ0YsQ0FBQztNQUNELElBQUk7UUFDRixJQUFNL08sR0FBRyxTQUFTMUUsOENBQUssQ0FBQytULElBQUksSUFBQTVRLE1BQUEsQ0FBSWxELHFEQUFZLHVCQUFvQjJFLElBQUksQ0FBQztRQUNyRSxJQUFJRixHQUFHLEVBQUU7VUFDUHVNLFNBQVMsQ0FBQyxFQUFFLENBQUM7VUFDYm1DLFVBQVUsQ0FBQyxDQUFDO1VBQ1osSUFBTVksT0FBTyxHQUFHdFAsR0FBRyxDQUFDRSxJQUFJLENBQUNBLElBQUk7VUFDN0J5TSxXQUFXLENBQUMsQ0FBQzJDLE9BQU8sRUFBRSxHQUFHNUMsU0FBUyxDQUFDLENBQUM7UUFDdEM7TUFDRixDQUFDLENBQUMsT0FBT3RNLEtBQUssRUFBRTtRQUNkLElBQUlBLEtBQUssRUFBRTtVQUNUd08sV0FBVyxDQUFDLENBQUM7UUFDZjtNQUNGO0lBQ0YsQ0FBQztJQUFBLGdCQW5CS00sZ0JBQWdCQSxDQUFBSyxFQUFBO01BQUEsT0FBQUosS0FBQSxDQUFBN08sS0FBQSxPQUFBQyxTQUFBO0lBQUE7RUFBQSxHQW1CckI7RUFDRCxJQUFBaVAsZUFBQSxHQUE4QnJVLHFEQUFjLENBQUMsSUFBSSxDQUFDO0lBQUFzVSxnQkFBQSxHQUFBcFEsY0FBQSxDQUFBbVEsZUFBQTtJQUEzQ0UsT0FBTyxHQUFBRCxnQkFBQTtJQUFFRSxVQUFVLEdBQUFGLGdCQUFBO0VBQzFCLElBQU1HLFlBQVksR0FBR0EsQ0FBQSxLQUFNO0lBQ3pCRCxVQUFVLENBQUMsQ0FBQ0QsT0FBTyxDQUFDO0VBQ3RCLENBQUM7RUFDRCxJQUFBRyxnQkFBQSxHQUFnQzFVLHFEQUFjLENBQUMsSUFBSSxDQUFDO0lBQUEyVSxnQkFBQSxHQUFBelEsY0FBQSxDQUFBd1EsZ0JBQUE7SUFBN0NFLFFBQVEsR0FBQUQsZ0JBQUE7SUFBRUUsV0FBVyxHQUFBRixnQkFBQTtFQUM1QixJQUFNdkgsSUFBSSxHQUFHMEgsT0FBTyxDQUFDRixRQUFRLENBQUM7RUFDOUIsSUFBTUcsV0FBVyxHQUFJQyxLQUFLLElBQUs7SUFDN0JILFdBQVcsQ0FBQ0csS0FBSyxDQUFDQyxhQUFhLENBQUM7RUFDbEMsQ0FBQztFQUNELElBQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0lBQzVCTCxXQUFXLENBQUMsSUFBSSxDQUFDO0VBQ25CLENBQUM7RUFDRCxJQUFNTSxZQUFZLEdBQUczTCw2Q0FBTSxDQUFDLENBQUM7RUFFN0IsSUFBTTRMLFdBQVcsR0FBR3ZKLGdFQUFlLENBQUM7SUFDbEN3SixPQUFPLEVBQUVBLENBQUEsS0FBTUYsWUFBWSxDQUFDRyxPQUFPO0lBQ25DQyxrQkFBa0IsRUFBRUEsQ0FBQSxLQUFNO01BQ3hCLElBQU1DLFdBQVcsR0FBRyxJQUFJO01BQ3hCLElBQU1DLFlBQVksR0FBR04sWUFBWSxDQUFDRyxPQUFPO01BQ3pDLElBQUlHLFlBQVksRUFBRTtRQUNoQkEsWUFBWSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztRQUNuRCxJQUFNN04sTUFBTSxHQUFHMk4sWUFBWSxDQUFDRyxZQUFZO1FBQ3hDLElBQU1DLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxJQUFJLENBQUNqTyxNQUFNLEdBQUcwTixXQUFXLENBQUM7UUFDcEQsSUFBSUssWUFBWSxHQUFHLENBQUMsRUFBRTtVQUFBLElBQUFHLHFCQUFBLEVBQUFDLHNCQUFBO1VBQ3BCLElBQU1DLHNCQUFzQixHQUFHTCxZQUFZLEdBQUdMLFdBQVc7VUFDekQsSUFBSVcsY0FBYyxHQUFHRCxzQkFBc0I7VUFDM0MsSUFBTUUsWUFBWSxJQUFBSixxQkFBQSxHQUFHUCxZQUFZLENBQUNZLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxjQUFBTCxxQkFBQSxnQkFBQUEscUJBQUEsR0FBMUNBLHFCQUFBLENBQTZDLENBQUMsQ0FBQyxjQUFBQSxxQkFBQSx1QkFBL0NBLHFCQUFBLENBQWlESixZQUFZO1VBQ2xGLElBQU1VLFlBQVksSUFBQUwsc0JBQUEsR0FBR1IsWUFBWSxDQUFDWSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsY0FBQUosc0JBQUEsZ0JBQUFBLHNCQUFBLEdBQTFDQSxzQkFBQSxDQUE2QyxDQUFDLENBQUMsY0FBQUEsc0JBQUEsdUJBQS9DQSxzQkFBQSxDQUFpREwsWUFBWTtVQUNsRk8sY0FBYyxJQUFJLENBQUNOLFlBQVksR0FBRyxDQUFDLEtBQUtPLFlBQVksR0FBR0UsWUFBWSxDQUFDO1VBQ3BFYixZQUFZLENBQUNsTyxLQUFLLENBQUNPLE1BQU0sTUFBQXhFLE1BQUEsQ0FBTTZTLGNBQWMsT0FBSTtRQUNuRDtRQUNBVixZQUFZLENBQUNDLFNBQVMsQ0FBQ2EsTUFBTSxDQUFDLHVCQUF1QixDQUFDO01BQ3hEO0lBQ0YsQ0FBQztJQUNEQyxZQUFZLEVBQUVBLENBQUEsS0FBTTtNQUNsQixJQUFNZixZQUFZLEdBQUdOLFlBQVksQ0FBQ0csT0FBTztNQUN6QyxJQUFJRyxZQUFZLEVBQUU7UUFDaEJBLFlBQVksQ0FBQ2xPLEtBQUssQ0FBQ08sTUFBTSxTQUFTO01BQ3BDO0lBQ0Y7RUFDRixDQUFDLENBQUM7RUFFRixJQUFNMk8sZUFBZSxHQUFHQSxDQUFBLEtBQU07SUFDNUJyQixXQUFXLENBQUMsQ0FBQztJQUNiUCxXQUFXLENBQUMsSUFBSSxDQUFDO0VBQ25CLENBQUM7RUFHRCxJQUFBNkIsV0FBQSxHQUEwQnhXLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUF5VyxXQUFBLEdBQUF6UyxjQUFBLENBQUF3UyxXQUFBO0lBQTlCRSxLQUFLLEdBQUFELFdBQUE7SUFBRUUsUUFBUSxHQUFBRixXQUFBO0VBQ3RCLElBQU1HLFdBQVcsR0FBSXBSLENBQUMsSUFBSztJQUN6Qm1SLFFBQVEsQ0FBQ25SLENBQUMsQ0FBQztJQUNYbVAsV0FBVyxDQUFDLElBQUksQ0FBQztFQUNuQixDQUFDO0VBQ0Qsb0JBQ0U3VSwwREFBQTtJQUFLNEMsU0FBUyxFQUFDO0VBQWMsZ0JBQzNCNUMsMERBQUEsQ0FBQ3lCLHFEQUFHO0lBQUMyRyxFQUFFLEVBQUU7TUFBRVosT0FBTyxFQUFFO0lBQU87RUFBRSxnQkFDM0J4SCwwREFBQSxDQUFDcUssa0VBQVcsTUFBRSxDQUFDLGVBQ2ZySywwREFBQSxDQUFDZ04sTUFBTTtJQUFDN0QsUUFBUSxFQUFDLFVBQVU7SUFBQ2lFLElBQUksRUFBRW1ILE9BQVE7SUFBQ25NLEVBQUUsRUFBRTtNQUFFNUUsZUFBZSxFQUFFO0lBQVU7RUFBRSxnQkFDNUV4RCwwREFBQSxDQUFDb0ssOERBQU87SUFDTmhDLEVBQUUsRUFBRTtNQUNGMk8sRUFBRSxFQUFFLE1BQU0sQ0FBRTtJQUNkO0VBQUUsZ0JBRUYvVywwREFBQSxDQUFDTyxxREFBVTtJQUNUeVcsSUFBSSxFQUFDLE9BQU87SUFDWnZULEtBQUssRUFBQyxTQUFTO0lBQ2YsY0FBVyxhQUFhO0lBQ3hCb0UsT0FBTyxFQUFFNE0sWUFBYTtJQUN0QnJNLEVBQUUsRUFBQWlGLGFBQUE7TUFDQTRKLFdBQVcsRUFBRTtJQUFNLEdBQ2YxQyxPQUFPLElBQUk7TUFBRS9NLE9BQU8sRUFBRTtJQUFPLENBQUM7RUFDbEMsZ0JBRUZ4SCwwREFBQSxDQUFDMEssaUVBQVEsTUFBRSxDQUNELENBQUMsZUFDYjFLLDBEQUFBLENBQUNtQixxREFBVTtJQUNUc0gsU0FBUyxFQUFDLElBQUk7SUFDZGIsT0FBTyxFQUFDLElBQUk7SUFDWm5FLEtBQUssRUFBQyxTQUFTO0lBQ2Z5VCxNQUFNO0lBQ045TyxFQUFFLEVBQUU7TUFBRStPLFFBQVEsRUFBRTtJQUFFO0VBQUUsR0FDckIscUJBRVcsQ0FBQyxlQUNiblgsMERBQUEsQ0FBQ08scURBQVU7SUFBQ3NILE9BQU8sRUFBRUEsQ0FBQSxLQUFNZ0gsUUFBUSxDQUFDLGNBQWM7RUFBRSxnQkFDbEQ3TywwREFBQSxDQUFDd0wsc0VBQVM7SUFBQ2pFLEtBQUssRUFBRTtNQUFFOUQsS0FBSyxFQUFFO0lBQVE7RUFBRSxDQUFFLENBQzdCLENBQUMsZUFDYnpELDBEQUFBLENBQUNtTSw4REFBb0IsTUFBRSxDQUFDLGVBQ3hCbk0sMERBQUEsQ0FBQ2tNLDBEQUFnQjtJQUFDa0wsSUFBSSxFQUFFckksSUFBSSxDQUFDaEssSUFBSSxDQUFDMEssUUFBUztJQUFDRCxJQUFJLEVBQUVULElBQUksQ0FBQ2hLLElBQUksQ0FBQ3lLO0VBQUssQ0FBRSxDQUFDLGVBQ3BFeFAsMERBQUEsQ0FBQ21CLHFEQUFVO0lBQUNpSCxFQUFFLEVBQUU7TUFBRTJGLFVBQVUsRUFBRSxNQUFNO01BQUVrSixXQUFXLEVBQUU7SUFBTztFQUFFLEdBQUVsSSxJQUFJLENBQUNoSyxJQUFJLENBQUMwSyxRQUFxQixDQUFDLGVBQzlGelAsMERBQUEsQ0FBQ08scURBQVU7SUFBQ2tELEtBQUssRUFBQyxTQUFTO0lBQUNvRSxPQUFPLEVBQUV3STtFQUFhLGdCQUNoRHJRLDBEQUFBLENBQUNtTCxtRUFBTTtJQUFDNUQsS0FBSyxFQUFFO01BQUU5RCxLQUFLLEVBQUU7SUFBUTtFQUFFLENBQUUsQ0FDMUIsQ0FDTCxDQUNILENBQUMsZUFDVHpELDBEQUFBLENBQUNpTyxNQUFNO0lBQUNyRyxPQUFPLEVBQUMsV0FBVztJQUFDd0YsSUFBSSxFQUFFbUgsT0FBUTtJQUFDOEMsWUFBWSxFQUFFQSxDQUFBLEtBQU03QyxVQUFVLENBQUMsSUFBSSxDQUFFO0lBQUM4QyxZQUFZLEVBQUVBLENBQUEsS0FBTTlDLFVBQVUsQ0FBQyxLQUFLO0VBQUUsZ0JBQ3JIeFUsMERBQUEsQ0FBQ29LLDhEQUFPO0lBQ05oQyxFQUFFLEVBQUU7TUFDRlosT0FBTyxFQUFFLE1BQU07TUFDZkUsVUFBVSxFQUFFLFFBQVE7TUFDcEJELGNBQWMsRUFBRSxVQUFVO01BQzFCb0YsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNSO0VBQUUsZ0JBRUY3TSwwREFBQSxDQUFDTyxxREFBVTtJQUFDc0gsT0FBTyxFQUFFNE07RUFBYSxnQkFDaEN6VSwwREFBQSxDQUFDMkssd0VBQWUsTUFBRSxDQUNSLENBQ0wsQ0FBQyxlQUNWM0ssMERBQUEsQ0FBQ2tLLHFEQUFPLE1BQUUsQ0FBQyxlQUNYbEssMERBQUEsQ0FBQ3VLLDJEQUFJO0lBQUNuQyxFQUFFLEVBQUU7TUFBRU4sTUFBTSxFQUFFO0lBQVE7RUFBRSxnQkFDNUI5SCwwREFBQSxDQUFDeUosOERBQVcsTUFBRSxDQUNWLENBQ0EsQ0FBQyxlQUNUekosMERBQUEsQ0FBQ3lCLHFEQUFHO0lBQ0ZnSCxTQUFTLEVBQUMsTUFBTTtJQUNoQkwsRUFBRSxFQUFFO01BQ0Y1RSxlQUFlLEVBQUdILEtBQUssSUFDckJBLEtBQUssQ0FBQ2tVLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLLE9BQU8sR0FDMUJuVSxLQUFLLENBQUNrVSxPQUFPLENBQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FDdkJwVSxLQUFLLENBQUNrVSxPQUFPLENBQUNFLElBQUksQ0FBQyxHQUFHLENBQUM7TUFDN0JOLFFBQVEsRUFBRSxDQUFDO01BQ1hsUCxLQUFLLEVBQUUsTUFBTTtNQUNiSCxNQUFNLEVBQUUsT0FBTztNQUNmQyxRQUFRLEVBQUU7SUFDWjtFQUFFLGdCQUVGL0gsMERBQUEsQ0FBQ29LLDhEQUFPLE1BQUUsQ0FBQyxlQUNYcEssMERBQUEsQ0FBQ3lLLGdFQUFTO0lBQUNpTixRQUFRLEVBQUMsTUFBTTtJQUFDdFAsRUFBRSxFQUFFO01BQUV1UCxFQUFFLEVBQUU7SUFBRTtFQUFFLEdBRXJDaEgsV0FBVyxnQkFBRzNRLDBEQUFBLDJCQUNaQSwwREFBQTtJQUFLdUgsS0FBSyxFQUFFO01BQUU0QixRQUFRLEVBQUUsVUFBVTtNQUFFcUQsR0FBRyxFQUFFO0lBQVE7RUFBRSxnQkFDakR4TSwwREFBQSxDQUFDcUwsMERBQU0sTUFBRSxDQUNOLENBQ0YsQ0FBQyxnQkFDSnJMLDBEQUFBLDJCQUNFQSwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ00sc0RBQUk7SUFBQ3NJLFNBQVM7SUFBQ0MsT0FBTyxFQUFFO0VBQUUsR0FDeEIrTixLQUFLLEtBQUssQ0FBQyxnQkFDVDVXLDBEQUFBLENBQUNNLHNEQUFJO0lBQUN3SSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNoQi9JLDBEQUFBLENBQUM2RCw0REFBa0I7SUFBQ0UsSUFBSSxFQUFFaUY7RUFBRyxDQUFFLENBQzNCLENBQUMsR0FBSSxFQUFFLGVBQ2ZoSiwwREFBQSxDQUFDTSxzREFBSTtJQUFDd0ksSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZi9JLDBEQUFBO0lBQUs0QyxTQUFTLEVBQUM7RUFBb0IsZ0JBRWpDNUMsMERBQUEsY0FDR21FLE9BQU8sYUFBUEEsT0FBTyxnQkFBQXNLLGVBQUEsR0FBUHRLLE9BQU8sQ0FBRThDLE1BQU0sQ0FBQ1osR0FBRyxJQUFJQSxHQUFHLENBQUNDLEdBQUcsS0FBSzBDLEVBQUUsQ0FBQyxjQUFBeUYsZUFBQSx1QkFBdENBLGVBQUEsQ0FBd0NwRyxHQUFHLENBQUVoQyxHQUFHO0lBQUEsSUFBQXVSLGdCQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGlCQUFBLEVBQUFDLFdBQUEsRUFBQUMscUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsY0FBQSxFQUFBQyxLQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGlCQUFBLEVBQUFDLFlBQUEsRUFBQUMsc0JBQUEsRUFBQUMsc0JBQUE7SUFBQSxvQkFDL0N6WSwwREFBQTtNQUFLdUksR0FBRyxFQUFFbEMsR0FBRyxDQUFDQztJQUFJLGdCQUNoQnRHLDBEQUFBO01BQVF1SCxLQUFLLEVBQUU7UUFBRUMsT0FBTyxFQUFFLE9BQU87UUFBRUUsVUFBVSxFQUFFLFFBQVE7UUFBRUQsY0FBYyxFQUFFO01BQWdCO0lBQUUsZ0JBQ3pGekgsMERBQUE7TUFBS3VILEtBQUssRUFBRTtRQUFFQyxPQUFPLEVBQUUsTUFBTTtRQUFFQyxjQUFjLEVBQUU7TUFBZ0I7SUFBRSxnQkFDL0R6SCwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ21CLHFEQUFVO01BQUNpSCxFQUFFLEVBQUU7UUFBRXNRLFVBQVUsRUFBRSxNQUFNO1FBQUU5VSxRQUFRLEVBQUU7TUFBTztJQUFFLEdBQ3REeUMsR0FBRyxDQUFDZ0IsWUFBWSxDQUFDQSxZQUFZLEtBQUs2SixTQUFTLEdBQUc3SyxHQUFHLENBQUNnQixZQUFZLENBQUNBLFlBQVksQ0FBQ3NSLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFDLFNBQU8sRUFBQ0MsTUFBTSxDQUFDdlMsR0FBRyxDQUFDYSxhQUFhLENBQUMsQ0FBQzJSLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLGVBQ2xKN1ksMERBQUE7TUFBTXVILEtBQUssRUFBRTtRQUFFd0csVUFBVSxFQUFFLE1BQU07UUFBRXBHLE9BQU8sRUFBRSxTQUFTO1FBQUVnQixZQUFZLEVBQUUsS0FBSztRQUFFbkYsZUFBZSxFQUFFNkMsR0FBRyxDQUFDeVMsZUFBZSxLQUFLLFFBQVEsR0FBRyxTQUFTLEdBQUcsU0FBUztRQUFFclYsS0FBSyxFQUFFNEMsR0FBRyxDQUFDeVMsZUFBZSxLQUFLLFFBQVEsR0FBRyxTQUFTLEdBQUcsU0FBUztRQUFFbFYsUUFBUSxFQUFFLE1BQU07UUFBRW1WLGFBQWEsRUFBRTtNQUFTO0lBQUUsR0FDalExUyxHQUFHLENBQUN5UyxlQUFlLElBQUksU0FDcEIsQ0FBQyxlQUNQOVksMERBQUE7TUFBTXVILEtBQUssRUFBRTtRQUFFd0csVUFBVSxFQUFFLEtBQUs7UUFBRXBHLE9BQU8sRUFBRSxTQUFTO1FBQUVnQixZQUFZLEVBQUUsS0FBSztRQUFFbkYsZUFBZSxFQUFFNkMsR0FBRyxDQUFDMlMsTUFBTSxLQUFLLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUztRQUFFdlYsS0FBSyxFQUFFNEMsR0FBRyxDQUFDMlMsTUFBTSxLQUFLLFNBQVMsR0FBRyxTQUFTLEdBQUcsU0FBUztRQUFFcFYsUUFBUSxFQUFFLE1BQU07UUFBRW1WLGFBQWEsRUFBRTtNQUFTO0lBQUUsR0FDaFAxUyxHQUFHLENBQUMyUyxNQUFNLElBQUksU0FDWCxDQUNJLENBQ1QsQ0FBQyxlQUNOaFosMERBQUEsMkJBQ0VBLDBEQUFBLENBQUNpQyxzREFBTTtNQUNMLGlCQUFlbUwsSUFBSSxHQUFHLHNCQUFzQixHQUFHOEQsU0FBVTtNQUN6RCxpQkFBYyxNQUFNO01BQ3BCLGlCQUFlOUQsSUFBSSxHQUFHLE1BQU0sR0FBRzhELFNBQVU7TUFDekN0SixPQUFPLEVBQUMsV0FBVztNQUNuQnFSLGdCQUFnQjtNQUNoQnBSLE9BQU8sRUFBRWtOLFdBQVk7TUFDckJtRSxPQUFPLGVBQUVsWiwwREFBQSxDQUFDMEwsOEVBQWlCLE1BQUUsQ0FBRTtNQUMvQnRELEVBQUUsRUFBRTtRQUNGdUUsT0FBTyxFQUFFLE1BQU07UUFBRSxTQUFTLEVBQUU7VUFDMUJsSixLQUFLLEVBQUUsTUFBTTtVQUNia0osT0FBTyxFQUFFLE9BQU87VUFDaEJ3TSxNQUFNLEVBQUU7UUFDVjtNQUNGO0lBQUUsR0FDSCxTQUVPLENBQUMsZUFDVG5aLDBEQUFBLENBQUNpSyxzREFBSTtNQUNIakIsRUFBRSxFQUFDLHNCQUFzQjtNQUN6Qm9RLGFBQWEsRUFBRTtRQUNiLGlCQUFpQixFQUFFO01BQ3JCLENBQUU7TUFDRnhFLFFBQVEsRUFBRUEsUUFBUztNQUNuQnhILElBQUksRUFBRUEsSUFBSztNQUNYaU0sT0FBTyxFQUFFbkUsZUFBZ0I7TUFDekJvRSxtQkFBbUIsRUFBRTlYLHNEQUFJQTtJQUFDLGdCQUUxQnhCLDBEQUFBLENBQUNLLHNEQUFRO01BQUNrWixRQUFRLEVBQUV0SixZQUFZLENBQUN1SixNQUFNLEtBQUssQ0FBQyxJQUFJekssSUFBSSxDQUFDaEssSUFBSSxDQUFDeUssSUFBSSxLQUFLO0lBQU0sZ0JBQ3hFeFAsMERBQUEsQ0FBQ29DLHNEQUFPO01BQUNzRyxFQUFFLCtCQUFBcEYsTUFBQSxDQUErQitDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFHO01BQUMxRCxTQUFTLEVBQUMsVUFBVTtNQUFDMkUsS0FBSyxFQUFFO1FBQUVDLE9BQU8sRUFBRSxNQUFNO1FBQUVpUyxHQUFHLEVBQUUsTUFBTTtRQUFFL1IsVUFBVSxFQUFFLFFBQVE7UUFBRWpFLEtBQUssRUFBRTtNQUFPO0lBQUUsZ0JBQ3JKekQsMERBQUEsQ0FBQ3FNLGlFQUFJLE1BQUUsQ0FBQyxlQUNSck0sMERBQUEsQ0FBQ21CLHFEQUFVLFFBQUMsTUFBZ0IsQ0FDckIsQ0FDRCxDQUFDLGVBQ1huQiwwREFBQSxDQUFDSyxzREFBUTtNQUFDd0gsT0FBTyxFQUFFNE8sZUFBZ0I7TUFBQ3JPLEVBQUUsRUFBRTtRQUFFWixPQUFPLEVBQUUsTUFBTTtRQUFFaVMsR0FBRyxFQUFFLE1BQU07UUFBRWhXLEtBQUssRUFBRTtNQUFPO0lBQUUsZ0JBQ3RGekQsMERBQUEsQ0FBQ29NLDJFQUFjLE1BQUUsQ0FBQyxlQUNsQnBNLDBEQUFBLGVBQU0sT0FBVyxDQUNULENBQUMsZUFDWEEsMERBQUEsQ0FBQ2tLLHFEQUFPLE1BQUUsQ0FBQyxlQUNYbEssMERBQUEsQ0FBQ0ssc0RBQVE7TUFBQ3dILE9BQU8sRUFBRUEsQ0FBQSxLQUFNaVAsV0FBVyxDQUFDLENBQUM7SUFBRSxHQUFDLEdBQUMsZUFBQTlXLDBEQUFBO01BQU11SCxLQUFLLEVBQUU7UUFBRTlELEtBQUssRUFBRTtNQUFPO0lBQUUsR0FBQyxVQUFjLENBQUMsS0FBVyxDQUFDLGVBQ3JHekQsMERBQUEsQ0FBQ0ssc0RBQVE7TUFBQ3dILE9BQU8sRUFBRUEsQ0FBQSxLQUFNaVAsV0FBVyxDQUFDLENBQUM7SUFBRSxHQUFDLEdBQUMsZUFBQTlXLDBEQUFBO01BQU11SCxLQUFLLEVBQUU7UUFBRTlELEtBQUssRUFBRTtNQUFPO0lBQUUsR0FBQyxTQUFhLENBQVcsQ0FDOUYsQ0FDSCxDQUNGLENBQ0MsQ0FBQyxlQUNUekQsMERBQUEsV0FBSyxDQUFDLGVBQ05BLDBEQUFBO01BQUt1SCxLQUFLLEVBQUU7UUFBRU8sTUFBTSxFQUFFLE9BQU87UUFBRUMsUUFBUSxFQUFFLFFBQVE7UUFBRUMsU0FBUyxFQUFFLFFBQVE7UUFBRUMsS0FBSyxFQUFFLE1BQU07UUFBRXlSLFVBQVUsRUFBRTtNQUFRO0lBQUUsZ0JBQzNHMVosMERBQUE7TUFBSzJaLE1BQU07SUFBQSxnQkFDVDNaLDBEQUFBO01BQU80WixHQUFHLEVBQUV6RSxZQUFhO01BQUN2UyxTQUFTLEVBQUMsZ0JBQWdCO01BQUMyRSxLQUFLLEVBQUU7UUFBRTRCLFFBQVEsRUFBRSxVQUFVO1FBQUU0RSxVQUFVLEVBQUU7TUFBTztJQUFFLGdCQUN2Ry9OLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUEsV0FBUyxDQUNQLENBQ0MsQ0FBQyxlQUNSQSwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRXNTLFlBQVksRUFBRTtNQUFrQjtJQUFFLGdCQUM3QzdaLDBEQUFBO01BQUs0QyxTQUFTLEVBQUM7SUFBYSxnQkFDMUI1QywwREFBQSxDQUFDc0osOERBQVc7TUFBQ3dRLFFBQVEsRUFBRSxPQUFPelQsR0FBRyxLQUFLLFdBQVcsR0FBR0EsR0FBRyxhQUFIQSxHQUFHLHVCQUFIQSxHQUFHLENBQUV5VCxRQUFRLEdBQUc7SUFBRyxDQUFFLENBQ3RFLENBQ0gsQ0FDRixDQUNDLENBQUMsZUFDUjlaLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBLDJCQUNFQSwwREFBQTtNQUFHNEMsU0FBUyxFQUFDO0lBQVcsR0FBQyxTQUFVLENBQUMsZUFDcEM1QywwREFBQTtNQUFLNEMsU0FBUyxFQUFDLFNBQVM7TUFBQzJFLEtBQUssRUFBRTtRQUFFd1MsWUFBWSxFQUFFLE1BQU07UUFBRTVRLFFBQVEsRUFBRTtNQUFXO0lBQUUsZ0JBQzdFbkosMERBQUE7TUFBU3VILEtBQUssRUFBRTtRQUFFVSxLQUFLLEVBQUUsTUFBTTtRQUFFVCxPQUFPLEVBQUUsTUFBTTtRQUFFQyxjQUFjLEVBQUUsZUFBZTtRQUFFQyxVQUFVLEVBQUUsWUFBWTtRQUFFMEcsU0FBUyxFQUFFLFlBQVk7UUFBRXpHLE9BQU8sRUFBRSxLQUFLO1FBQUVvUyxZQUFZLEVBQUU7TUFBTztJQUFFLGdCQUMzSy9aLDBEQUFBO01BQVN1SCxLQUFLLEVBQUU7UUFBRXdHLFVBQVUsRUFBRVksTUFBTSxDQUFDLDRCQUE0QixDQUFDLElBQUksS0FBSztRQUFFeEYsUUFBUSxFQUFFLFVBQVU7UUFBRTZRLFVBQVUsRUFBRSxJQUFJO1FBQUUvUixLQUFLLEVBQUUsYUFBYTtRQUFFZ1MsUUFBUSxFQUFFO01BQVE7SUFBRSxnQkFDN0pqYSwwREFBQSxZQUFHLGNBQVksZUFBQUEsMERBQUEsV0FBSyxDQUFDLGVBQUFBLDBEQUFBO01BQU11SCxLQUFLLEVBQUU7UUFBRW1SLFVBQVUsRUFBRTtNQUFPO0lBQUUsR0FBRXJTLEdBQUcsQ0FBQ2dCLFlBQVksQ0FBQ0EsWUFBWSxDQUFDc1IsV0FBVyxDQUFDLENBQVEsQ0FBSSxDQUMxRyxDQUFDLGVBRVYzWSwwREFBQTtNQUFLdUgsS0FBSyxFQUFFO1FBQUV3RyxVQUFVLEVBQUUsTUFBTTtRQUFFa0osV0FBVyxFQUFFdEksTUFBTSxDQUFDLCtCQUErQixDQUFDLElBQUksS0FBSztRQUFFMUcsS0FBSyxFQUFFLGFBQWE7UUFBRVQsT0FBTyxFQUFFLE9BQU87UUFBRXVTLFlBQVksRUFBRTtNQUFPO0lBQUUsZ0JBQzlKL1osMERBQUE7TUFBS3VILEtBQUssRUFBRTtRQUFFQyxPQUFPLEVBQUUsTUFBTTtRQUFFMFMsbUJBQW1CLEVBQUUsVUFBVTtRQUFFQyxTQUFTLEVBQUUsTUFBTTtRQUFFQyxNQUFNLEVBQUUsS0FBSztRQUFFeFcsUUFBUSxFQUFFLEtBQUs7UUFBRXlXLFlBQVksRUFBRSxPQUFPO1FBQUVsUixRQUFRLEVBQUU7TUFBVztJQUFFLGdCQUMvSm5KLDBEQUFBO01BQUt1SCxLQUFLLEVBQUU7UUFBRW1SLFVBQVUsRUFBRSxNQUFNO1FBQUU0QixTQUFTLEVBQUU7TUFBTztJQUFFLEdBQUMsT0FBVSxDQUFDLGVBQ2xFdGEsMERBQUE7TUFBS3VILEtBQUssRUFBRTtRQUFFK1MsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFDLE1BQUksRUFBQzFCLE1BQU0sQ0FBQ3ZTLEdBQUcsQ0FBQ2EsYUFBYSxDQUFDLENBQUMyUixRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBTyxDQUFDLGVBRXpGN1ksMERBQUE7TUFBS3VILEtBQUssRUFBRTtRQUFFbVIsVUFBVSxFQUFFLE1BQU07UUFBRTRCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxNQUFTLENBQUMsZUFDakV0YSwwREFBQTtNQUFLdUgsS0FBSyxFQUFFO1FBQUUrUyxTQUFTLEVBQUU7TUFBTztJQUFFLEdBQUVsUCw2Q0FBSyxDQUFDL0UsR0FBRyxDQUFDa1UsV0FBVyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQU8sQ0FBQyxlQUV0RnhhLDBEQUFBO01BQUt1SCxLQUFLLEVBQUU7UUFBRW1SLFVBQVUsRUFBRSxNQUFNO1FBQUU0QixTQUFTLEVBQUU7TUFBTztJQUFFLEdBQUMsTUFBUyxDQUFDLGVBQ2pFdGEsMERBQUE7TUFBS3VILEtBQUssRUFBRTtRQUFFK1MsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFFalUsR0FBRyxDQUFDb1UsS0FBSyxDQUFDOUIsV0FBVyxDQUFDLENBQU8sQ0FBQyxlQUVsRTNZLDBEQUFBO01BQUt1SCxLQUFLLEVBQUU7UUFBRW1SLFVBQVUsRUFBRSxNQUFNO1FBQUU0QixTQUFTLEVBQUU7TUFBTztJQUFFLEdBQUMsUUFBVyxDQUFDLGVBQ25FdGEsMERBQUE7TUFBS3VILEtBQUssRUFBRTtRQUFFK1MsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFFalUsR0FBRyxDQUFDOEssTUFBTSxLQUFLLEVBQUF5RyxnQkFBQSxHQUFBdlIsR0FBRyxDQUFDNEssV0FBVyxjQUFBMkcsZ0JBQUEsZ0JBQUFBLGdCQUFBLEdBQWZBLGdCQUFBLENBQWtCLENBQUMsQ0FBQyxjQUFBQSxnQkFBQSx1QkFBcEJBLGdCQUFBLENBQXNCOEMsTUFBTSxNQUFLLElBQUksR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFPLENBQUMsZUFFeEgxYSwwREFBQTtNQUFLdUgsS0FBSyxFQUFFO1FBQUVtUixVQUFVLEVBQUUsTUFBTTtRQUFFNEIsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFDLE1BQVMsQ0FBQyxlQUNqRXRhLDBEQUFBO01BQUt1SCxLQUFLLEVBQUU7UUFBRStTLFNBQVMsRUFBRSxNQUFNO1FBQUU3VyxLQUFLLEVBQUU0QyxHQUFHLENBQUN5UyxlQUFlLEtBQUssUUFBUSxHQUFHLEtBQUssR0FBRztNQUFRO0lBQUUsR0FBRXpTLEdBQUcsQ0FBQ3lTLGVBQWUsSUFBSSxTQUFlLENBQUMsZUFFdEk5WSwwREFBQTtNQUFLdUgsS0FBSyxFQUFFO1FBQUVtUixVQUFVLEVBQUUsTUFBTTtRQUFFNEIsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFDLFFBQVcsQ0FBQyxlQUNuRXRhLDBEQUFBO01BQUt1SCxLQUFLLEVBQUU7UUFBRStTLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBRWpVLEdBQUcsQ0FBQzJTLE1BQU0sSUFBSSxTQUFlLENBQzlELENBQ0YsQ0FDRSxDQUFDLGVBQ1ZoWiwwREFBQTtNQUFTdUgsS0FBSyxFQUFFLENBQUM7SUFBRSxHQUVmbEIsR0FBRyxDQUFDc1UsV0FBVyxLQUFLekosU0FBUyxnQkFDM0JsUiwwREFBQTtNQUFPdUgsS0FBSyxFQUFFO1FBQUU0QixRQUFRLEVBQUUsVUFBVTtRQUFFdkYsUUFBUSxFQUFFLEtBQUs7UUFBRXdGLEtBQUssRUFBRSxNQUFNO1FBQUVxRCxJQUFJLEVBQUUsR0FBRztRQUFFeEUsS0FBSyxFQUFFLEtBQUs7UUFBRThSLFlBQVksRUFBRTtNQUFNO0lBQUUsZ0JBQ25IL1osMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUUrUyxTQUFTLEVBQUUsTUFBTTtRQUFFclMsS0FBSyxFQUFFO01BQU87SUFBRSxHQUFDLGFBQWUsQ0FBQyxlQUNqRWpJLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRStTLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBRWpVLEdBQUcsQ0FBQ3NVLFdBQWdCLENBQ3JELENBQ0MsQ0FDRixDQUFDLEdBQ04sRUFBRSxlQUVSM2EsMERBQUE7TUFBTzRDLFNBQVMsRUFBQyxhQUFhO01BQUMyRSxLQUFLLEVBQUU7UUFBRTNELFFBQVEsRUFBRSxLQUFLO1FBQUVtVyxZQUFZLEVBQUUsS0FBSztRQUFFWixNQUFNLEVBQUU7TUFBaUI7SUFBRSxnQkFDdkduWiwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRStTLFNBQVMsRUFBRSxRQUFRO1FBQUVuQixNQUFNLEVBQUUsZ0JBQWdCO1FBQUUzVixlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUMsR0FBSyxDQUFDLGVBQ2hHeEQsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFK1MsU0FBUyxFQUFFLFFBQVE7UUFBRW5CLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRTNWLGVBQWUsRUFBRTtNQUFVO0lBQUUsR0FBQyxXQUFhLENBQUMsZUFDeEd4RCwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUUrUyxTQUFTLEVBQUUsUUFBUTtRQUFFbkIsTUFBTSxFQUFFLGdCQUFnQjtRQUFFM1YsZUFBZSxFQUFFO01BQVU7SUFBRSxHQUFDLE1BQVEsQ0FBQyxlQUNuR3hELDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxRQUFRO1FBQUVuQixNQUFNLEVBQUUsZ0JBQWdCO1FBQUUzVixlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUMsU0FBVyxDQUFDLGVBQ3ZIeEQsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFK1MsU0FBUyxFQUFFLFFBQVE7UUFBRW5CLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRTNWLGVBQWUsRUFBRTtNQUFVO0lBQUUsR0FBRTZDLEdBQUcsQ0FBQzhLLE1BQU0sS0FBSyxTQUFTLElBQUksRUFBQTBHLGlCQUFBLEdBQUF4UixHQUFHLENBQUM0SyxXQUFXLGNBQUE0RyxpQkFBQSxnQkFBQUEsaUJBQUEsR0FBZkEsaUJBQUEsQ0FBa0IsQ0FBQyxDQUFDLGNBQUFBLGlCQUFBLHVCQUFwQkEsaUJBQUEsQ0FBc0I2QyxNQUFNLE1BQUssSUFBSSxHQUFHLGdCQUFnQixHQUFHLGdCQUFxQixDQUFDLGVBQ3hNMWEsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFK1MsU0FBUyxFQUFFLFFBQVE7UUFBRW5CLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRTNWLGVBQWUsRUFBRTtNQUFVO0lBQUUsR0FBQyxhQUFlLENBQ3ZHLENBQ0MsQ0FBQyxlQUNSeEQsMERBQUEsaUJBQUE4WCxpQkFBQSxHQUNHelIsR0FBRyxDQUFDNEssV0FBVyxjQUFBNkcsaUJBQUEsdUJBQWZBLGlCQUFBLENBQWlCelAsR0FBRyxDQUFDLENBQUN1UyxJQUFJLEVBQUVDLENBQUMsS0FBSztNQUFBLElBQUFDLGlCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLG1CQUFBLEVBQUFDLFdBQUE7TUFDakMsSUFBTUMsY0FBYyxHQUFHM0ssT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUU0SyxJQUFJLENBQUVDLElBQUksSUFBS0EsSUFBSSxDQUFDOVUsR0FBRyxLQUFLc1UsSUFBSSxDQUFDNVIsRUFBRSxDQUFDO01BQ3BFLG9CQUNFaEosMERBQUE7UUFBSXVJLEdBQUcsRUFBRXFTLElBQUksQ0FBQzVSO01BQUcsZ0JBQ2ZoSiwwREFBQTtRQUFJdUgsS0FBSyxFQUFFO1VBQUUrUyxTQUFTLEVBQUUsUUFBUTtVQUFFZSxVQUFVLEVBQUU7UUFBaUI7TUFBRSxHQUFFUixDQUFDLEdBQUcsQ0FBTSxDQUFDLGVBQzlFN2EsMERBQUE7UUFBSXVILEtBQUssRUFBRTtVQUFFK1MsU0FBUyxFQUFFLFFBQVE7VUFBRWUsVUFBVSxFQUFFO1FBQWlCO01BQUUsR0FBQyxHQUFDLEVBQUNULElBQUksQ0FBQ0YsTUFBTSxLQUFLUSxjQUFjLGFBQWRBLGNBQWMsZUFBZEEsY0FBYyxDQUFFSSxjQUFjLElBQUksQ0FBQUosY0FBYyxhQUFkQSxjQUFjLHVCQUFkQSxjQUFjLENBQUVLLGVBQWUsTUFBSyxXQUFXLEdBQUcsSUFBSSxHQUFJbFYsR0FBRyxDQUFDOEssTUFBTSxLQUFLLFNBQVMsSUFBSSxFQUFBMkosaUJBQUEsR0FBQXpVLEdBQUcsQ0FBQzRLLFdBQVcsY0FBQTZKLGlCQUFBLGdCQUFBQSxpQkFBQSxHQUFmQSxpQkFBQSxDQUFrQixDQUFDLENBQUMsY0FBQUEsaUJBQUEsdUJBQXBCQSxpQkFBQSxDQUFzQkosTUFBTSxNQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTyxDQUFDLEVBQUU5QixNQUFNLENBQUNnQyxJQUFJLENBQUNZLEdBQUcsQ0FBQyxDQUFDM0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQU0sQ0FBQyxlQUM1UzdZLDBEQUFBO1FBQUl1SCxLQUFLLEVBQUU7VUFBRStTLFNBQVMsRUFBRSxRQUFRO1VBQUVlLFVBQVUsRUFBRTtRQUFpQjtNQUFFLEdBQUVULElBQUksQ0FBQ2EsSUFBSSxHQUFHLENBQUMsZ0JBQzlFemIsMERBQUEsQ0FBQ21CLHFEQUFVO1FBQ1RzQyxLQUFLLEVBQUVtWCxJQUFJLENBQUNhLElBQUksR0FBRyxDQUFDLEdBQ2hCLEtBQUssR0FBRztNQUNYLEdBQ0YsV0FDVSxFQUFDYixJQUFJLENBQUNhLElBQUksRUFBQyxnQkFDVixDQUFDLGdCQUNYemIsMERBQUEsZUFBT29MLDZDQUFLLENBQUN3UCxJQUFJLENBQUNjLFdBQVcsQ0FBQyxDQUFDbEIsTUFBTSxDQUFDLFlBQVksQ0FBUSxDQUFNLENBQUMsZUFDckV4YSwwREFBQTtRQUFJdUgsS0FBSyxFQUFFO1VBQUVJLE9BQU8sRUFBRSxNQUFNO1VBQUUyUyxTQUFTLEVBQUUsT0FBTztVQUFFZSxVQUFVLEVBQUU7UUFBaUI7TUFBRSxHQUFFSCxjQUFjLGFBQWRBLGNBQWMsZ0JBQUFILHFCQUFBLEdBQWRHLGNBQWMsQ0FBRVMsY0FBYyxjQUFBWixxQkFBQSx1QkFBOUJBLHFCQUFBLENBQWdDcEMsV0FBVyxDQUFDLENBQU0sQ0FBQyxlQUN0STNZLDBEQUFBO1FBQUl1SCxLQUFLLEVBQUU7VUFBRStTLFNBQVMsRUFBRSxPQUFPO1VBQUVlLFVBQVUsRUFBRTtRQUFpQjtNQUFFLEdBQUMsR0FBQyxFQUFDVCxJQUFJLENBQUNnQixhQUFhLEtBQUsxSyxTQUFTLElBQUE4SixtQkFBQSxHQUFHSixJQUFJLENBQUNnQixhQUFhLGNBQUFaLG1CQUFBLHVCQUFsQkEsbUJBQUEsQ0FBb0I3VCxRQUFRLENBQUMsQ0FBQyxDQUFDMFUsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQU0sQ0FBQyxlQUNwTDdiLDBEQUFBO1FBQUl1SCxLQUFLLEVBQUU7VUFBRStTLFNBQVMsRUFBRSxPQUFPO1VBQUVlLFVBQVUsRUFBRTtRQUFpQjtNQUFFLEdBQUMsR0FBQyxHQUFBSixXQUFBLEdBQUNMLElBQUksQ0FBQzNJLEtBQUssY0FBQWdKLFdBQUEsdUJBQVZBLFdBQUEsQ0FBWTlULFFBQVEsQ0FBQyxDQUFDLENBQUMwVSxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFNLENBRWxJLENBQUM7SUFFVCxDQUFDLENBQ0ksQ0FDRixDQUFDLGVBQ1I3YiwwREFBQTtNQUFPdUgsS0FBSyxFQUFFO1FBQUU0QixRQUFRLEVBQUUsVUFBVTtRQUFFdkYsUUFBUSxFQUFFLEtBQUs7UUFBRWtZLGVBQWUsRUFBRSxPQUFPO1FBQUUvQixZQUFZLEVBQUU7TUFBTTtJQUFFLGdCQUNyRy9aLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUEsV0FBUSxDQUFDLGVBQ1RBLDBEQUFBLFdBQVEsQ0FBQyxlQUNUQSwwREFBQSxXQUFRLENBQUMsZUFDVEEsMERBQUEsV0FBUSxDQUFDLGVBQ1RBLDBEQUFBLFdBQVEsQ0FBQyxlQUNUQSwwREFBQSxXQUFRLENBQ04sQ0FDQyxDQUFDLGVBQ1JBLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFSSxPQUFPLEVBQUUsTUFBTTtRQUFFMlMsU0FBUyxFQUFFLE1BQU07UUFBRXJTLEtBQUssRUFBRTtNQUFRLENBQUU7TUFBQzhULE9BQU8sRUFBRTtJQUFFLENBQUssQ0FBQyxlQUNwRi9iLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxPQUFPO1FBQUVULFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNrQyxPQUFPLEVBQUU7SUFBRSxnQkFBQy9iLDBEQUFBLGVBQU0saUJBQXFCLENBQUssQ0FBQyxlQUNqSUEsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFSSxPQUFPLEVBQUUsTUFBTTtRQUFFMlMsU0FBUyxFQUFFLE9BQU87UUFBRVQsWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2tDLE9BQU8sRUFBRTtJQUFFLGdCQUFDL2IsMERBQUE7TUFBTTtJQUFXLEdBQUMsR0FBTyxDQUFDLGVBQUFBLDBEQUFBLGVBQU9xRyxHQUFHLENBQUMyVixNQUFNLElBQUFqRSxXQUFBLEdBQUcxUixHQUFHLENBQUMyVixNQUFNLGNBQUFqRSxXQUFBLHVCQUFWQSxXQUFBLENBQVk1USxRQUFRLENBQUMsQ0FBQyxDQUFDMFUsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQVEsQ0FBSyxDQUV4TixDQUFDLEVBRUh4VixHQUFHLENBQUM0VixVQUFVLElBQUlqSyxVQUFVLENBQUMzTCxHQUFHLENBQUM0VixVQUFVLENBQUMsR0FBRyxDQUFDLGdCQUU1Q2pjLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUUyUyxTQUFTLEVBQUUsTUFBTTtRQUFFclMsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDOFQsT0FBTyxFQUFFO0lBQUUsQ0FBSyxDQUFDLGVBQ3BGL2IsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFSSxPQUFPLEVBQUUsTUFBTTtRQUFFMlMsU0FBUyxFQUFFLE9BQU87UUFBRVQsWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2tDLE9BQU8sRUFBRTtJQUFFLGdCQUFDL2IsMERBQUEsZUFBTSxhQUFpQixDQUFLLENBQUMsZUFDN0hBLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxPQUFPO1FBQUVULFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNrQyxPQUFPLEVBQUU7SUFBRSxnQkFBQy9iLDBEQUFBO01BQU07SUFBVyxHQUFDLEdBQU8sQ0FBQyxlQUFBQSwwREFBQSxlQUFPZ1MsVUFBVSxDQUFDM0wsR0FBRyxDQUFDNFYsVUFBVSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0wsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFLLENBQ3ROLENBQUMsR0FFTCxFQUFFLEVBR054VixHQUFHLENBQUM4VixpQkFBaUIsS0FBS2pMLFNBQVMsZ0JBRS9CbFIsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxNQUFNO1FBQUVyUyxLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUM4VCxPQUFPLEVBQUU7SUFBRSxDQUFLLENBQUMsZUFDcEYvYiwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUUyUyxTQUFTLEVBQUUsT0FBTztRQUFFVCxZQUFZLEVBQUU7TUFBaUIsQ0FBRTtNQUFDa0MsT0FBTyxFQUFFO0lBQUUsZ0JBQUMvYiwwREFBQSxlQUFNLGdCQUFvQixDQUFLLENBQUMsZUFDaElBLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxPQUFPO1FBQUVULFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNrQyxPQUFPLEVBQUU7SUFBRSxnQkFBQy9iLDBEQUFBO01BQU07SUFBVyxHQUFDLElBQVEsQ0FBQyxlQUFBQSwwREFBQSxnQkFBQWdZLHFCQUFBLEdBQU8zUixHQUFHLENBQUM4VixpQkFBaUIsY0FBQW5FLHFCQUFBLHVCQUFyQkEscUJBQUEsQ0FBdUJrRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNMLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBSyxDQUNuTixDQUFDLEdBRUwsRUFBRSxFQUdOeFYsR0FBRyxDQUFDK1Ysa0JBQWtCLEtBQUtsTCxTQUFTLGdCQUVoQ2xSLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUUyUyxTQUFTLEVBQUUsTUFBTTtRQUFFclMsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDOFQsT0FBTyxFQUFFO0lBQUUsQ0FBSyxDQUFDLGVBQ3BGL2IsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFSSxPQUFPLEVBQUUsTUFBTTtRQUFFMlMsU0FBUyxFQUFFLE9BQU87UUFBRVQsWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2tDLE9BQU8sRUFBRTtJQUFFLGdCQUFDL2IsMERBQUEsZUFBTSxlQUFtQixDQUFLLENBQUMsZUFDL0hBLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxPQUFPO1FBQUVULFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNrQyxPQUFPLEVBQUU7SUFBRSxnQkFBQy9iLDBEQUFBO01BQU07SUFBVyxHQUFDLEdBQU8sQ0FBQyxlQUFBQSwwREFBQSxnQkFBQWlZLHFCQUFBLEdBQU81UixHQUFHLENBQUMrVixrQkFBa0IsY0FBQW5FLHFCQUFBLHVCQUF0QkEscUJBQUEsQ0FBd0JpRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNMLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBSyxDQUNuTixDQUFDLEdBRUwsRUFBRSxlQUVSN2IsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxNQUFNO1FBQUVyUyxLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUM4VCxPQUFPLEVBQUU7SUFBRSxDQUFLLENBQUMsZUFDcEYvYiwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUUyUyxTQUFTLEVBQUUsT0FBTztRQUFFVCxZQUFZLEVBQUU7TUFBaUIsQ0FBRTtNQUFDa0MsT0FBTyxFQUFFO0lBQUUsZ0JBQUMvYiwwREFBQSxlQUFNLGdCQUFvQixDQUFLLENBQUMsZUFDaElBLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxPQUFPO1FBQUVULFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNrQyxPQUFPLEVBQUU7SUFBRSxnQkFBQy9iLDBEQUFBO01BQU07SUFBVyxHQUFDLEdBQU8sQ0FBQyxlQUFBQSwwREFBQSxlQUFPNlIsV0FBVyxHQUFHQSxXQUFXLGFBQVhBLFdBQVcsdUJBQVhBLFdBQVcsQ0FBRXFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0wsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQVEsQ0FBSyxDQUMxTixDQUFDLGVBQ0w3YiwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFSSxPQUFPLEVBQUUsTUFBTTtRQUFFMlMsU0FBUyxFQUFFLE1BQU07UUFBRXJTLEtBQUssRUFBRTtNQUFRLENBQUU7TUFBQzhULE9BQU8sRUFBRTtJQUFFLENBQUssQ0FBQyxlQUNwRi9iLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxPQUFPO1FBQUVULFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNrQyxPQUFPLEVBQUU7SUFBRSxnQkFBQy9iLDBEQUFBLGVBQU0sUUFBWSxDQUFLLENBQUMsZUFDeEhBLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxPQUFPO1FBQUVULFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNrQyxPQUFPLEVBQUU7SUFBRSxnQkFBQy9iLDBEQUFBO01BQU07SUFBVyxHQUFDLEdBQU8sQ0FBQyxlQUFBQSwwREFBQSxlQUFPcUcsR0FBRyxDQUFDZ1csU0FBUyxJQUFBbkUsY0FBQSxHQUFHN1IsR0FBRyxDQUFDZ1csU0FBUyxjQUFBbkUsY0FBQSx1QkFBYkEsY0FBQSxDQUFlZ0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDTCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBUSxDQUFLLENBRTlOLENBQ0MsQ0FDRixDQUFDLGVBQ1I3YiwwREFBQTtNQUFTdUgsS0FBSyxFQUFFO1FBQUU2QixLQUFLLEVBQUUsTUFBTTtRQUFFeEYsUUFBUSxFQUFFLEtBQUs7UUFBRTBXLFNBQVMsRUFBRSxNQUFNO1FBQUVyUyxLQUFLLEVBQUU7TUFBUTtJQUFFLGdCQUNwRmpJLDBEQUFBO01BQUd1SCxLQUFLLEVBQUU7UUFBRXlTLFVBQVUsRUFBRSxNQUFNO1FBQUV0QixVQUFVLEVBQUU7TUFBTztJQUFFLEdBQUMsc0JBQ2hDLGVBQUExWSwwREFBQSxXQUFLLENBQUMsOEJBQ0EsZUFBQUEsMERBQUEsV0FBSyxDQUFDLHlDQUNLLGVBQUFBLDBEQUFBLFdBQUssQ0FBQywyQkFFMUMsQ0FDSSxDQUNGLENBQ04sQ0FDRixDQUNILENBQ0YsQ0FDQyxDQUFDLGVBQ1JBLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUt1SCxLQUFLLEVBQUU7UUFBRTRCLFFBQVEsRUFBRSxVQUFVO1FBQUVtVCxTQUFTLEVBQUU7TUFBTztJQUFFLGdCQUN0RHRjLDBEQUFBO01BQUcyWixNQUFNO0lBQUEsR0FBQyxLQUFNLENBQUMsZUFDakIzWiwwREFBQTtNQUFHMlosTUFBTTtJQUFBLEdBQUMsS0FBTSxDQUFDLGVBQ2pCM1osMERBQUEsV0FBSyxDQUFDLGVBQ05BLDBEQUFBLENBQUN1Siw4REFBVztNQUFDdVEsUUFBUSxFQUFFLE9BQU96VCxHQUFHLEtBQUssV0FBVyxHQUFHQSxHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRXlULFFBQVEsR0FBRyxPQUFPL1UsSUFBSSxLQUFLLFdBQVcsSUFBQW9ULEtBQUEsR0FBR3BULElBQUksY0FBQW9ULEtBQUEsdUJBQUpBLEtBQUEsQ0FBTTJCLFFBQVEsR0FBRztJQUFHLENBQUUsQ0FFckgsQ0FDSCxDQUNGLENBQ0MsQ0FDRixDQUNKLENBQUMsZUFDTjlaLDBEQUFBO01BQUs0QyxTQUFTLEVBQUM7SUFBZ0IsZ0JBQzNCNUMsMERBQUEsQ0FBQ3NKLDhEQUFXO01BQUN3USxRQUFRLEVBQUUsT0FBT3pULEdBQUcsS0FBSyxXQUFXLEdBQUdBLEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFeVQsUUFBUSxHQUFHO0lBQUcsQ0FBRSxDQUFDLGVBQzVFOVosMERBQUEsV0FBSyxDQUFDLGVBQUFBLDBEQUFBO01BQUc0QyxTQUFTLEVBQUM7SUFBVyxHQUFDLFNBQVUsQ0FBQyxlQUMxQzVDLDBEQUFBLCtCQUNFQSwwREFBQTtNQUFTdUgsS0FBSyxFQUFFO1FBQUVVLEtBQUssRUFBRSxNQUFNO1FBQUVULE9BQU8sRUFBRSxNQUFNO1FBQUVDLGNBQWMsRUFBRSxlQUFlO1FBQUVDLFVBQVUsRUFBRSxZQUFZO1FBQUUwRyxTQUFTLEVBQUUsWUFBWTtRQUFFekcsT0FBTyxFQUFFLEtBQUs7UUFBRW9TLFlBQVksRUFBRTtNQUFPO0lBQUUsZ0JBQzNLL1osMERBQUE7TUFBU3VILEtBQUssRUFBRTtRQUFFd0csVUFBVSxFQUFFWSxNQUFNLENBQUMsNEJBQTRCLENBQUMsSUFBSSxLQUFLO1FBQUVxTCxVQUFVLEVBQUUsSUFBSTtRQUFFL1IsS0FBSyxFQUFFLGFBQWE7UUFBRWdTLFFBQVEsRUFBRSxPQUFPO1FBQUVGLFlBQVksRUFBRTtNQUFNO0lBQUUsZ0JBQzVKL1osMERBQUEsWUFBSSxjQUFZLGVBQUFBLDBEQUFBLFdBQUssQ0FBQyxlQUNwQkEsMERBQUE7TUFBTXVILEtBQUssRUFBRTtRQUFFbVIsVUFBVSxFQUFFO01BQU87SUFBRSxHQUFFclMsR0FBRyxDQUFDZ0IsWUFBWSxDQUFDQSxZQUFZLEtBQUs2SixTQUFTLEdBQUc3SyxHQUFHLENBQUNnQixZQUFZLENBQUNBLFlBQVksQ0FBQ3NSLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBUyxDQUFDLGVBQzVJM1ksMERBQUEsV0FBSyxDQUFDLEVBQ0xxRyxHQUFHLENBQUNnQixZQUFZLENBQUNrVixjQUFjLEtBQUtyTCxTQUFTLEdBQUc3SyxHQUFHLENBQUNnQixZQUFZLENBQUNrVixjQUFjLENBQUM1RCxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBQyxHQUFDLEVBQUN0UyxHQUFHLENBQUNnQixZQUFZLENBQUNtVixXQUFXLEtBQUt0TCxTQUFTLEdBQUc3SyxHQUFHLENBQUNnQixZQUFZLENBQUNtVixXQUFXLENBQUM3RCxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQy9MLENBQ0ksQ0FBQyxlQUVWM1ksMERBQUE7TUFBS3VILEtBQUssRUFBRTtRQUFFd0csVUFBVSxFQUFFLE1BQU07UUFBRWtKLFdBQVcsRUFBRXRJLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLEtBQUs7UUFBRTFHLEtBQUssRUFBRSxhQUFhO1FBQUVULE9BQU8sRUFBRSxPQUFPO1FBQUV1UyxZQUFZLEVBQUU7TUFBTTtJQUFFLGdCQUM3Si9aLDBEQUFBO01BQUt1SCxLQUFLLEVBQUU7UUFBRUMsT0FBTyxFQUFFLE1BQU07UUFBRTBTLG1CQUFtQixFQUFFLFVBQVU7UUFBRUMsU0FBUyxFQUFFLE1BQU07UUFBRUMsTUFBTSxFQUFFLEtBQUs7UUFBRXhXLFFBQVEsRUFBRSxLQUFLO1FBQUV5VyxZQUFZLEVBQUUsT0FBTztRQUFFbFIsUUFBUSxFQUFFO01BQVc7SUFBRSxnQkFDL0puSiwwREFBQTtNQUFLdUgsS0FBSyxFQUFFO1FBQUVtUixVQUFVLEVBQUUsTUFBTTtRQUFFNEIsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFDLE9BQVUsQ0FBQyxlQUNsRXRhLDBEQUFBO01BQUt1SCxLQUFLLEVBQUU7UUFBRStTLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxNQUFJLEVBQUMxQixNQUFNLENBQUN2UyxHQUFHLENBQUNhLGFBQWEsQ0FBQyxDQUFDMlIsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQU8sQ0FBQyxlQUV6RjdZLDBEQUFBO01BQUt1SCxLQUFLLEVBQUU7UUFBRW1SLFVBQVUsRUFBRSxNQUFNO1FBQUU0QixTQUFTLEVBQUU7TUFBTztJQUFFLEdBQUMsTUFBUyxDQUFDLGVBQ2pFdGEsMERBQUE7TUFBS3VILEtBQUssRUFBRTtRQUFFK1MsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFFbFAsNkNBQUssQ0FBQy9FLEdBQUcsQ0FBQ2tVLFdBQVcsQ0FBQyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFPLENBQUMsZUFFdEZ4YSwwREFBQTtNQUFLdUgsS0FBSyxFQUFFO1FBQUVtUixVQUFVLEVBQUUsTUFBTTtRQUFFNEIsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFDLE1BQVMsQ0FBQyxlQUNqRXRhLDBEQUFBO01BQUt1SCxLQUFLLEVBQUU7UUFBRStTLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBRWpVLEdBQUcsQ0FBQ29VLEtBQUssQ0FBQzlCLFdBQVcsQ0FBQyxDQUFPLENBQUMsZUFFbEUzWSwwREFBQTtNQUFLdUgsS0FBSyxFQUFFO1FBQUVtUixVQUFVLEVBQUUsTUFBTTtRQUFFNEIsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFDLFFBQVcsQ0FBQyxlQUNuRXRhLDBEQUFBO01BQUt1SCxLQUFLLEVBQUU7UUFBRStTLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBRWpVLEdBQUcsQ0FBQzhLLE1BQU0sS0FBSyxFQUFBaUgsaUJBQUEsR0FBQS9SLEdBQUcsQ0FBQzRLLFdBQVcsY0FBQW1ILGlCQUFBLGdCQUFBQSxpQkFBQSxHQUFmQSxpQkFBQSxDQUFrQixDQUFDLENBQUMsY0FBQUEsaUJBQUEsdUJBQXBCQSxpQkFBQSxDQUFzQnNDLE1BQU0sTUFBSyxJQUFJLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBTyxDQUFDLGVBRXhIMWEsMERBQUE7TUFBS3VILEtBQUssRUFBRTtRQUFFbVIsVUFBVSxFQUFFLE1BQU07UUFBRTRCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxNQUFTLENBQUMsZUFDakV0YSwwREFBQTtNQUFLdUgsS0FBSyxFQUFFO1FBQUUrUyxTQUFTLEVBQUUsTUFBTTtRQUFFN1csS0FBSyxFQUFFNEMsR0FBRyxDQUFDeVMsZUFBZSxLQUFLLFFBQVEsR0FBRyxLQUFLLEdBQUc7TUFBUTtJQUFFLEdBQUV6UyxHQUFHLENBQUN5UyxlQUFlLElBQUksU0FBZSxDQUFDLGVBRXRJOVksMERBQUE7TUFBS3VILEtBQUssRUFBRTtRQUFFbVIsVUFBVSxFQUFFLE1BQU07UUFBRTRCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxRQUFXLENBQUMsZUFDbkV0YSwwREFBQTtNQUFLdUgsS0FBSyxFQUFFO1FBQUUrUyxTQUFTLEVBQUU7TUFBTztJQUFFLEdBQUVqVSxHQUFHLENBQUMyUyxNQUFNLElBQUksU0FBZSxDQUM5RCxDQUNGLENBQ0UsQ0FBQyxlQUNWaFosMERBQUEsa0JBRUlxRyxHQUFHLENBQUNzVSxXQUFXLEtBQUt6SixTQUFTLGdCQUMzQmxSLDBEQUFBO01BQU91SCxLQUFLLEVBQUU7UUFBRTRCLFFBQVEsRUFBRSxVQUFVO1FBQUV2RixRQUFRLEVBQUUsS0FBSztRQUFFd0YsS0FBSyxFQUFFLE1BQU07UUFBRXFELElBQUksRUFBRSxHQUFHO1FBQUV4RSxLQUFLLEVBQUUsS0FBSztRQUFFOFIsWUFBWSxFQUFFO01BQU07SUFBRSxnQkFDbkgvWiwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRStTLFNBQVMsRUFBRSxNQUFNO1FBQUVyUyxLQUFLLEVBQUU7TUFBTztJQUFFLEdBQUMsYUFBZSxDQUFDLGVBQ2pFakksMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFK1MsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFFalUsR0FBRyxDQUFDc1UsV0FBZ0IsQ0FDckQsQ0FDQyxDQUNGLENBQUMsR0FDTixFQUFFLGVBRVIzYSwwREFBQTtNQUFPNEMsU0FBUyxFQUFDLGFBQWE7TUFBQzJFLEtBQUssRUFBRTtRQUFFVSxLQUFLLEVBQUUsTUFBTTtRQUFFd1UsS0FBSyxFQUFFLE1BQU07UUFBRTdZLFFBQVEsRUFBRSxLQUFLO1FBQUVtVyxZQUFZLEVBQUUsS0FBSztRQUFFWixNQUFNLEVBQUUsZ0JBQWdCO1FBQUV1RCxjQUFjLEVBQUU7TUFBVztJQUFFLGdCQUNqSzFjLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFSSxPQUFPLEVBQUUsTUFBTTtRQUFFMlMsU0FBUyxFQUFFLE1BQU07UUFBRW5CLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRTNWLGVBQWUsRUFBRTtNQUFVO0lBQUUsR0FBQyxRQUFVLENBQUMsZUFDcEh4RCwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUV3UixNQUFNLEVBQUUsZ0JBQWdCO1FBQUUzVixlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUMsR0FBSyxDQUFDLGVBQzVGeEQsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFSSxPQUFPLEVBQUUsTUFBTTtRQUFFMlMsU0FBUyxFQUFFLFFBQVE7UUFBRW5CLE1BQU0sRUFBRSxnQkFBZ0I7UUFBRTNWLGVBQWUsRUFBRTtNQUFVO0lBQUUsR0FBQyxNQUFRLENBQUMsZUFDcEh4RCwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUUyUyxTQUFTLEVBQUUsUUFBUTtRQUFFbkIsTUFBTSxFQUFFLGdCQUFnQjtRQUFFM1YsZUFBZSxFQUFFO01BQVU7SUFBRSxHQUFDLFNBQVcsQ0FBQyxlQUN2SHhELDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxRQUFRO1FBQUVuQixNQUFNLEVBQUUsZ0JBQWdCO1FBQUUzVixlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUU2QyxHQUFHLENBQUM4SyxNQUFNLEtBQUssU0FBUyxJQUFJLEVBQUFrSCxpQkFBQSxHQUFBaFMsR0FBRyxDQUFDNEssV0FBVyxjQUFBb0gsaUJBQUEsZ0JBQUFBLGlCQUFBLEdBQWZBLGlCQUFBLENBQWtCLENBQUMsQ0FBQyxjQUFBQSxpQkFBQSx1QkFBcEJBLGlCQUFBLENBQXNCcUMsTUFBTSxNQUFLLElBQUksR0FBRyxnQkFBZ0IsR0FBRyxnQkFBcUIsQ0FBQyxlQUN6TjFhLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxRQUFRO1FBQUVuQixNQUFNLEVBQUUsZ0JBQWdCO1FBQUUzVixlQUFlLEVBQUU7TUFBVTtJQUFFLEdBQUMsYUFBZSxDQUN4SCxDQUNDLENBQUMsZUFDUnhELDBEQUFBLGlCQUFBc1ksaUJBQUEsR0FDR2pTLEdBQUcsQ0FBQzRLLFdBQVcsY0FBQXFILGlCQUFBLHVCQUFmQSxpQkFBQSxDQUFpQmpRLEdBQUcsQ0FBQyxDQUFDdVMsSUFBSSxFQUFFQyxDQUFDLEtBQUs7TUFBQSxJQUFBOEIsaUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsb0JBQUEsRUFBQUMsWUFBQTtNQUNqQyxJQUFNNUIsY0FBYyxHQUFHM0ssT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUU0SyxJQUFJLENBQUVDLElBQUksSUFBS0EsSUFBSSxDQUFDOVUsR0FBRyxLQUFLc1UsSUFBSSxDQUFDNVIsRUFBRSxDQUFDO01BQ3BFLG9CQUNFaEosMERBQUE7UUFBSXVJLEdBQUcsRUFBRXFTLElBQUksQ0FBQzVSO01BQUcsZ0JBQ2ZoSiwwREFBQTtRQUFJdUgsS0FBSyxFQUFFO1VBQUVJLE9BQU8sRUFBRSxNQUFNO1VBQUUyUyxTQUFTLEVBQUUsUUFBUTtVQUFFZSxVQUFVLEVBQUU7UUFBaUI7TUFBRSxnQkFDaEZyYiwwREFBQSxDQUFDb0Msc0RBQU87UUFBQ3NHLEVBQUUsMEJBQUFwRixNQUFBLENBQTBCc1gsSUFBSSxDQUFDNVIsRUFBRSxDQUFHO1FBQUNwRyxTQUFTLEVBQUM7TUFBVSxnQkFDbEU1QywwREFBQSxlQUFNLE1BQVUsQ0FDVCxDQUNQLENBQUMsZUFDTEEsMERBQUE7UUFBSXVILEtBQUssRUFBRTtVQUFFSSxPQUFPLEVBQUUsTUFBTTtVQUFFMlMsU0FBUyxFQUFFLFFBQVE7VUFBRWUsVUFBVSxFQUFFO1FBQWlCO01BQUUsR0FBQyxHQUFDLEVBQUNULElBQUksQ0FBQ0YsTUFBTSxLQUFLUSxjQUFjLGFBQWRBLGNBQWMsZUFBZEEsY0FBYyxDQUFFSSxjQUFjLElBQUksQ0FBQUosY0FBYyxhQUFkQSxjQUFjLHVCQUFkQSxjQUFjLENBQUVLLGVBQWUsTUFBSyxXQUFXLEdBQUcsSUFBSSxHQUFJbFYsR0FBRyxDQUFDOEssTUFBTSxLQUFLLFNBQVMsSUFBSSxFQUFBd0wsaUJBQUEsR0FBQXRXLEdBQUcsQ0FBQzRLLFdBQVcsY0FBQTBMLGlCQUFBLGdCQUFBQSxpQkFBQSxHQUFmQSxpQkFBQSxDQUFrQixDQUFDLENBQUMsY0FBQUEsaUJBQUEsdUJBQXBCQSxpQkFBQSxDQUFzQmpDLE1BQU0sTUFBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU8sQ0FBQyxFQUFFOUIsTUFBTSxDQUFDZ0MsSUFBSSxDQUFDWSxHQUFHLENBQUMsQ0FBQzNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFNLENBQUMsZUFDN1Q3WSwwREFBQTtRQUFJdUgsS0FBSyxFQUFFO1VBQUVJLE9BQU8sRUFBRSxNQUFNO1VBQUUyUyxTQUFTLEVBQUUsUUFBUTtVQUFFZSxVQUFVLEVBQUU7UUFBaUI7TUFBRSxHQUFFVCxJQUFJLENBQUNhLElBQUksR0FBRyxDQUFDLGdCQUMvRnpiLDBEQUFBLENBQUNtQixxREFBVTtRQUNUc0MsS0FBSyxFQUFFbVgsSUFBSSxDQUFDYSxJQUFJLEdBQUcsQ0FBQyxHQUNoQixLQUFLLEdBQUc7TUFDWCxHQUNGLFdBQ1UsRUFBQ2IsSUFBSSxDQUFDYSxJQUFJLEVBQUMsZ0JBQ1YsQ0FBQyxnQkFDWHpiLDBEQUFBLGVBQU9vTCw2Q0FBSyxDQUFDd1AsSUFBSSxDQUFDYyxXQUFXLENBQUMsQ0FBQ2xCLE1BQU0sQ0FBQyxZQUFZLENBQVEsQ0FBTSxDQUFDLGVBQ3JFeGEsMERBQUE7UUFBSXVILEtBQUssRUFBRTtVQUFFSSxPQUFPLEVBQUUsTUFBTTtVQUFFMlMsU0FBUyxFQUFFLE9BQU87VUFBRWUsVUFBVSxFQUFFO1FBQWlCO01BQUUsR0FBRUgsY0FBYyxhQUFkQSxjQUFjLGdCQUFBMEIsc0JBQUEsR0FBZDFCLGNBQWMsQ0FBRVMsY0FBYyxjQUFBaUIsc0JBQUEsdUJBQTlCQSxzQkFBQSxDQUFnQ2pFLFdBQVcsQ0FBQyxDQUFNLENBQUMsZUFDdEkzWSwwREFBQTtRQUFJdUgsS0FBSyxFQUFFO1VBQUVJLE9BQU8sRUFBRSxNQUFNO1VBQUUyUyxTQUFTLEVBQUUsT0FBTztVQUFFZSxVQUFVLEVBQUU7UUFBaUI7TUFBRSxHQUFDLEdBQUMsRUFBQ1QsSUFBSSxDQUFDZ0IsYUFBYSxLQUFLMUssU0FBUyxJQUFBMkwsb0JBQUEsR0FBR2pDLElBQUksQ0FBQ2dCLGFBQWEsY0FBQWlCLG9CQUFBLHVCQUFsQkEsb0JBQUEsQ0FBb0IxVixRQUFRLENBQUMsQ0FBQyxDQUFDMFUsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQU0sQ0FBQyxlQUNyTTdiLDBEQUFBO1FBQUl1SCxLQUFLLEVBQUU7VUFBRUksT0FBTyxFQUFFLE1BQU07VUFBRTJTLFNBQVMsRUFBRSxPQUFPO1VBQUVlLFVBQVUsRUFBRTtRQUFpQjtNQUFFLEdBQUMsR0FBQyxHQUFBeUIsWUFBQSxHQUFDbEMsSUFBSSxDQUFDM0ksS0FBSyxjQUFBNkssWUFBQSx1QkFBVkEsWUFBQSxDQUFZM1YsUUFBUSxDQUFDLENBQUMsQ0FBQzBVLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQU0sQ0FFbkosQ0FBQztJQUVULENBQUMsQ0FDSSxDQUNGLENBQUMsZUFDUjdiLDBEQUFBO01BQU91SCxLQUFLLEVBQUU7UUFBRVUsS0FBSyxFQUFFLE1BQU07UUFBRXdVLEtBQUssRUFBRSxNQUFNO1FBQUU3WSxRQUFRLEVBQUUsS0FBSztRQUFFa1ksZUFBZSxFQUFFO01BQVE7SUFBRSxnQkFFeEY5YiwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxNQUFNO1FBQUVyUyxLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUM4VCxPQUFPLEVBQUU7SUFBRSxDQUFLLENBQUMsZUFDcEYvYiwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUUyUyxTQUFTLEVBQUUsT0FBTztRQUFFVCxZQUFZLEVBQUU7TUFBaUIsQ0FBRTtNQUFDa0MsT0FBTyxFQUFFO0lBQUUsZ0JBQUMvYiwwREFBQSxlQUFNLGlCQUFxQixDQUFLLENBQUMsZUFDaklBLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxPQUFPO1FBQUVULFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNrQyxPQUFPLEVBQUU7SUFBRSxnQkFBQy9iLDBEQUFBO01BQU07SUFBVyxHQUFDLEdBQU8sQ0FBQyxlQUFBQSwwREFBQSxlQUFPcUcsR0FBRyxDQUFDMlYsTUFBTSxJQUFBekQsWUFBQSxHQUFHbFMsR0FBRyxDQUFDMlYsTUFBTSxjQUFBekQsWUFBQSx1QkFBVkEsWUFBQSxDQUFZcFIsUUFBUSxDQUFDLENBQUMsQ0FBQzBVLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFRLENBQUssQ0FFeE4sQ0FBQyxFQUVIeFYsR0FBRyxDQUFDNFYsVUFBVSxJQUFJakssVUFBVSxDQUFDM0wsR0FBRyxDQUFDNFYsVUFBVSxDQUFDLEdBQUcsQ0FBQyxnQkFFNUNqYywwREFBQSwwQkFDRUEsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFSSxPQUFPLEVBQUUsTUFBTTtRQUFFMlMsU0FBUyxFQUFFLE1BQU07UUFBRXJTLEtBQUssRUFBRTtNQUFRLENBQUU7TUFBQzhULE9BQU8sRUFBRTtJQUFFLENBQUssQ0FBQyxlQUNwRi9iLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxPQUFPO1FBQUVULFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNrQyxPQUFPLEVBQUU7SUFBRSxnQkFBQy9iLDBEQUFBLGVBQU0sYUFBaUIsQ0FBSyxDQUFDLGVBQzdIQSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUUyUyxTQUFTLEVBQUUsT0FBTztRQUFFVCxZQUFZLEVBQUU7TUFBaUIsQ0FBRTtNQUFDa0MsT0FBTyxFQUFFO0lBQUUsZ0JBQUMvYiwwREFBQTtNQUFNO0lBQVcsR0FBQyxHQUFPLENBQUMsZUFBQUEsMERBQUEsZUFBT2dTLFVBQVUsQ0FBQzNMLEdBQUcsQ0FBQzRWLFVBQVUsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNMLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBSyxDQUN0TixDQUFDLEdBRUwsRUFBRSxFQUdOeFYsR0FBRyxDQUFDOFYsaUJBQWlCLEtBQUtqTCxTQUFTLGdCQUUvQmxSLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUUyUyxTQUFTLEVBQUUsTUFBTTtRQUFFclMsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDOFQsT0FBTyxFQUFFO0lBQUUsQ0FBSyxDQUFDLGVBQ3BGL2IsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFSSxPQUFPLEVBQUUsTUFBTTtRQUFFMlMsU0FBUyxFQUFFLE9BQU87UUFBRVQsWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2tDLE9BQU8sRUFBRTtJQUFFLGdCQUFDL2IsMERBQUEsZUFBTSxnQkFBb0IsQ0FBSyxDQUFDLGVBQ2hJQSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUUyUyxTQUFTLEVBQUUsT0FBTztRQUFFVCxZQUFZLEVBQUU7TUFBaUIsQ0FBRTtNQUFDa0MsT0FBTyxFQUFFO0lBQUUsZ0JBQUMvYiwwREFBQTtNQUFNO0lBQVcsR0FBQyxJQUFRLENBQUMsZUFBQUEsMERBQUEsZ0JBQUF3WSxzQkFBQSxHQUFPblMsR0FBRyxDQUFDOFYsaUJBQWlCLGNBQUEzRCxzQkFBQSx1QkFBckJBLHNCQUFBLENBQXVCMEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDTCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFRLENBQUssQ0FDbk4sQ0FBQyxHQUVMLEVBQUUsRUFHTnhWLEdBQUcsQ0FBQytWLGtCQUFrQixLQUFLbEwsU0FBUyxnQkFFaENsUiwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFSSxPQUFPLEVBQUUsTUFBTTtRQUFFMlMsU0FBUyxFQUFFLE1BQU07UUFBRXJTLEtBQUssRUFBRTtNQUFRLENBQUU7TUFBQzhULE9BQU8sRUFBRTtJQUFFLENBQUssQ0FBQyxlQUNwRi9iLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxPQUFPO1FBQUVULFlBQVksRUFBRTtNQUFpQixDQUFFO01BQUNrQyxPQUFPLEVBQUU7SUFBRSxnQkFBQy9iLDBEQUFBLGVBQU0sZUFBbUIsQ0FBSyxDQUFDLGVBQy9IQSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUUyUyxTQUFTLEVBQUUsT0FBTztRQUFFVCxZQUFZLEVBQUU7TUFBaUIsQ0FBRTtNQUFDa0MsT0FBTyxFQUFFO0lBQUUsZ0JBQUMvYiwwREFBQTtNQUFNO0lBQVcsR0FBQyxHQUFPLENBQUMsZUFBQUEsMERBQUEsZ0JBQUF5WSxzQkFBQSxHQUFPcFMsR0FBRyxDQUFDK1Ysa0JBQWtCLGNBQUEzRCxzQkFBQSx1QkFBdEJBLHNCQUFBLENBQXdCeUQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDTCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFRLENBQUssQ0FDbk4sQ0FBQyxHQUVMLEVBQUUsZUFFUjdiLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUUyUyxTQUFTLEVBQUUsTUFBTTtRQUFFclMsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDOFQsT0FBTyxFQUFFO0lBQUUsQ0FBSyxDQUFDLGVBQ3BGL2IsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFSSxPQUFPLEVBQUUsTUFBTTtRQUFFMlMsU0FBUyxFQUFFLE9BQU87UUFBRVQsWUFBWSxFQUFFO01BQWlCLENBQUU7TUFBQ2tDLE9BQU8sRUFBRTtJQUFFLGdCQUFDL2IsMERBQUEsZUFBTSxnQkFBb0IsQ0FBSyxDQUFDLGVBQ2hJQSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUUyUyxTQUFTLEVBQUUsT0FBTztRQUFFVCxZQUFZLEVBQUU7TUFBaUIsQ0FBRTtNQUFDa0MsT0FBTyxFQUFFO0lBQUUsZ0JBQUMvYiwwREFBQTtNQUFNO0lBQVcsR0FBQyxHQUFPLENBQUMsZUFBQUEsMERBQUEsZUFBTzZSLFdBQVcsR0FBR0EsV0FBVyxhQUFYQSxXQUFXLHVCQUFYQSxXQUFXLENBQUVxSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNMLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFRLENBQUssQ0FDMU4sQ0FBQyxlQUNMN2IsMERBQUEsMEJBQ0VBLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRUksT0FBTyxFQUFFLE1BQU07UUFBRTJTLFNBQVMsRUFBRSxNQUFNO1FBQUVyUyxLQUFLLEVBQUU7TUFBUSxDQUFFO01BQUM4VCxPQUFPLEVBQUU7SUFBRSxDQUFLLENBQUMsZUFDcEYvYiwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUUyUyxTQUFTLEVBQUUsT0FBTztRQUFFVCxZQUFZLEVBQUU7TUFBaUIsQ0FBRTtNQUFDa0MsT0FBTyxFQUFFO0lBQUUsZ0JBQUMvYiwwREFBQSxlQUFNLFFBQVksQ0FBSyxDQUFDLGVBQ3hIQSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUVJLE9BQU8sRUFBRSxNQUFNO1FBQUUyUyxTQUFTLEVBQUUsT0FBTztRQUFFVCxZQUFZLEVBQUU7TUFBaUIsQ0FBRTtNQUFDa0MsT0FBTyxFQUFFO0lBQUUsZ0JBQUMvYiwwREFBQTtNQUFNO0lBQVcsR0FBQyxHQUFPLENBQUMsZUFBQUEsMERBQUEsZUFBT3FHLEdBQUcsQ0FBQ2dXLFNBQVMsR0FBR2hXLEdBQUcsQ0FBQ2dXLFNBQVMsQ0FBQ0gsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDTCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBUSxDQUFLLENBRTdOLENBQ0MsQ0FDRixDQUFDLGVBQ1I3YiwwREFBQTtNQUFPdUgsS0FBSyxFQUFFO1FBQUU0QixRQUFRLEVBQUUsVUFBVTtRQUFFbVQsU0FBUyxFQUFFLE9BQU87UUFBRTFZLFFBQVEsRUFBRTtNQUFNO0lBQUUsZ0JBQzFFNUQsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUUvRCxlQUFlLEVBQUUsT0FBTztRQUFFMlYsTUFBTSxFQUFFLE1BQU07UUFBRVQsVUFBVSxFQUFFLE1BQU07UUFBRTRCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxNQUU1RixDQUFDLGVBQ0x0YSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUUvRCxlQUFlLEVBQUUsT0FBTztRQUFFMlYsTUFBTSxFQUFFLE1BQU07UUFBRVQsVUFBVSxFQUFFLE1BQU07UUFBRTRCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxlQUU1RixDQUNGLENBQUMsZUFDTHRhLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUUvRCxlQUFlLEVBQUUsT0FBTztRQUFFMlYsTUFBTSxFQUFFLE1BQU07UUFBRVQsVUFBVSxFQUFFLE1BQU07UUFBRTRCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxVQUU1RixDQUFDLGVBQ0x0YSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUUvRCxlQUFlLEVBQUUsT0FBTztRQUFFMlYsTUFBTSxFQUFFLE1BQU07UUFBRVQsVUFBVSxFQUFFLE1BQU07UUFBRTRCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxrQkFFNUYsQ0FDRixDQUFDLGVBQ0x0YSwwREFBQSwwQkFDRUEsMERBQUE7TUFBSXVILEtBQUssRUFBRTtRQUFFL0QsZUFBZSxFQUFFLE9BQU87UUFBRXlFLEtBQUssRUFBRSxPQUFPO1FBQUVrUixNQUFNLEVBQUUsTUFBTTtRQUFFVCxVQUFVLEVBQUUsTUFBTTtRQUFFNEIsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFDLGNBRTVHLENBQUMsZUFDTHRhLDBEQUFBO01BQUl1SCxLQUFLLEVBQUU7UUFBRS9ELGVBQWUsRUFBRSxPQUFPO1FBQUUyVixNQUFNLEVBQUUsTUFBTTtRQUFFVCxVQUFVLEVBQUUsTUFBTTtRQUFFNEIsU0FBUyxFQUFFO01BQU87SUFBRSxHQUFDLHlCQUU1RixDQUNGLENBQUMsZUFDTHRhLDBEQUFBLDBCQUNFQSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUUvRCxlQUFlLEVBQUUsT0FBTztRQUFFMlYsTUFBTSxFQUFFLE1BQU07UUFBRVQsVUFBVSxFQUFFLE1BQU07UUFBRTRCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxZQUU1RixDQUFDLGVBQ0x0YSwwREFBQTtNQUFJdUgsS0FBSyxFQUFFO1FBQUUvRCxlQUFlLEVBQUUsT0FBTztRQUFFMlYsTUFBTSxFQUFFLE1BQU07UUFBRVQsVUFBVSxFQUFFLE1BQU07UUFBRTRCLFNBQVMsRUFBRTtNQUFPO0lBQUUsR0FBQyxhQUU1RixDQUNGLENBQ0MsQ0FDRixDQUNBLENBQ0YsQ0FBQyxlQUNWdGEsMERBQUE7TUFBTTRDLFNBQVMsRUFBQztJQUFlLGdCQUM3QjVDLDBEQUFBO01BQUd1SCxLQUFLLEVBQUU7UUFBRUMsT0FBTyxFQUFFLE1BQU07UUFBRWlTLEdBQUcsRUFBRSxLQUFLO1FBQUUvUixVQUFVLEVBQUU7TUFBUztJQUFFLGdCQUM5RDFILDBEQUFBLDRCQUFNQSwwREFBQSxDQUFDOEwsa0VBQVMsTUFBRSxDQUFPLENBQUMsZUFDMUI5TCwwREFBQSxlQUFNLHlCQUE2QixDQUNsQyxDQUFDLGVBQ0pBLDBEQUFBO01BQUd1SCxLQUFLLEVBQUU7UUFBRUMsT0FBTyxFQUFFLE1BQU07UUFBRWlTLEdBQUcsRUFBRSxLQUFLO1FBQUUvUixVQUFVLEVBQUU7TUFBUztJQUFFLGdCQUM5RDFILDBEQUFBLDRCQUFNQSwwREFBQSxDQUFDK0wsa0VBQVMsTUFBRSxDQUFPLENBQUMsZUFDMUIvTCwwREFBQSxlQUFNLGdCQUFvQixDQUN6QixDQUFDLGVBQ0pBLDBEQUFBO01BQUd1SCxLQUFLLEVBQUU7UUFBRUMsT0FBTyxFQUFFLE1BQU07UUFBRWlTLEdBQUcsRUFBRSxLQUFLO1FBQUUvUixVQUFVLEVBQUU7TUFBUztJQUFFLGdCQUM5RDFILDBEQUFBLDRCQUFNQSwwREFBQSxDQUFDZ00sZ0VBQU8sTUFBRSxDQUFPLENBQUMsZUFDeEJoTSwwREFBQSxlQUFNLHFCQUF5QixDQUM5QixDQUNDLENBQ0gsQ0FDRixDQUNGLENBQUM7RUFBQSxDQUVSLENBQUMsZUFFREEsMERBQUEsWUFBTSxDQUNILENBQ0YsQ0FLRCxDQUFDLEVBQ040VyxLQUFLLEtBQUssQ0FBQyxnQkFDVjVXLDBEQUFBLENBQUNNLHNEQUFJO0lBQUN3SSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNmL0ksMERBQUE7SUFBSzRDLFNBQVMsRUFBQztFQUFtQixnQkFDaEM1QywwREFBQTtJQUFLdUgsS0FBSyxFQUFFO01BQUVJLE9BQU8sRUFBRTtJQUFPO0VBQUUsZ0JBQzlCM0gsMERBQUE7SUFBS3VILEtBQUssRUFBRTtNQUFFQyxPQUFPLEVBQUUsTUFBTTtNQUFFRSxVQUFVLEVBQUUsUUFBUTtNQUFFRCxjQUFjLEVBQUUsZUFBZTtNQUFFUSxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwR2pJLDBEQUFBLFlBQUcsVUFBVyxDQUFDLGVBQ2ZBLDBEQUFBLENBQUMwQyxXQUFXO0lBQUN1RyxLQUFLLEVBQUMsT0FBTztJQUFDQyxTQUFTLEVBQUM7RUFBTSxnQkFDekNsSiwwREFBQSxDQUFDTyxxREFBVTtJQUFDc0gsT0FBTyxFQUFFQSxDQUFBLEtBQU1pUCxXQUFXLENBQUMsQ0FBQyxDQUFFO0lBQUN2UCxLQUFLLEVBQUU7TUFBRTRCLFFBQVEsRUFBRSxVQUFVO01BQUVDLEtBQUssRUFBRTtJQUFRO0VBQUUsZ0JBQ3pGcEosMERBQUEsQ0FBQ3VDLGtFQUFLO0lBQUNnRixLQUFLLEVBQUU7TUFBRTlELEtBQUssRUFBRTtJQUFVO0VBQUUsQ0FBRSxDQUMzQixDQUNELENBQ1YsQ0FBQyxlQUNOekQsMERBQUE7SUFBTStjLFFBQVEsRUFBRWhKO0VBQWlCLGdCQUMvQi9ULDBEQUFBLENBQUNNLHNEQUFJO0lBQUNzSSxTQUFTO0lBQUNyQixLQUFLLEVBQUU7TUFBRUcsVUFBVSxFQUFFO0lBQVMsQ0FBRTtJQUFDbUIsT0FBTyxFQUFFO0VBQUUsZ0JBQzFEN0ksMERBQUEsQ0FBQ00sc0RBQUk7SUFBQ3dJLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCL0ksMERBQUEsQ0FBQ2Usc0RBQVM7SUFDUmljLFFBQVE7SUFDUmhVLEVBQUUsRUFBQyxVQUFVO0lBQ2JvTyxJQUFJLEVBQUMsVUFBVTtJQUNmNkYsU0FBUztJQUNUQyxJQUFJLEVBQUUsQ0FBRTtJQUNSclgsS0FBSyxFQUFFc0wsTUFBTztJQUNkakosUUFBUSxFQUFHeEMsQ0FBQyxJQUFLMEwsU0FBUyxDQUFDMUwsQ0FBQyxDQUFDcUIsTUFBTSxDQUFDbEIsS0FBSyxDQUFFO0lBQzNDMkMsS0FBSyxFQUFDLFVBQVU7SUFDaEJKLEVBQUUsRUFBRTtNQUFFSCxLQUFLLEVBQUUsTUFBTTtNQUFFekUsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNqRCxDQUNHLENBQUMsZUFDUHhELDBEQUFBLENBQUNNLHNEQUFJO0lBQUN3SSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNoQi9JLDBEQUFBO0lBQVFtZCxJQUFJLEVBQUMsUUFBUTtJQUFDNVYsS0FBSyxFQUFFO01BQUVVLEtBQUssRUFBRTtJQUFPLENBQUU7SUFBQ3JGLFNBQVMsRUFBQztFQUFjLEdBQUMsTUFBWSxDQUNqRixDQUNGLENBRUYsQ0FBQyxlQUNQNUMsMERBQUEsV0FBSyxDQUNGLENBQUMsZUFDTkEsMERBQUE7SUFBS3VILEtBQUssRUFBRTtNQUFFTyxNQUFNLEVBQUUsT0FBTztNQUFFQyxRQUFRLEVBQUUsUUFBUTtNQUFFQyxTQUFTLEVBQUUsUUFBUTtNQUFFQyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUN0RmpJLDBEQUFBO0lBQUt1SCxLQUFLLEVBQUU7TUFBRUksT0FBTyxFQUFFO0lBQU87RUFBRSxnQkFDOUIzSCwwREFBQTtJQUFPdUgsS0FBSyxFQUFFO01BQUVVLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQzlCakksMERBQUEsZ0JBQ0d1UixTQUFTLENBQUNsSixHQUFHLENBQUV1UyxJQUFJLGlCQUNsQjVhLDBEQUFBO0lBQUl1SSxHQUFHLEVBQUVxUyxJQUFJLENBQUN0VTtFQUFJLGdCQUNoQnRHLDBEQUFBO0lBQUl1SCxLQUFLLEVBQUU7TUFBRVUsS0FBSyxFQUFFLE1BQU07TUFBRTRSLFlBQVksRUFBRTtJQUFrQjtFQUFFLEdBQzNEZSxJQUFJLENBQUNoSCxXQUFXLEdBQUd4SSw2Q0FBSyxDQUFDd1AsSUFBSSxDQUFDaEgsV0FBVyxDQUFDLENBQUM0RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFDLEdBQUMsRUFBQ0ksSUFBSSxDQUFDckksV0FBVyxDQUFDRyxNQUFNLEdBQUcsSUFBSSxHQUFHa0ksSUFBSSxDQUFDckksV0FBVyxDQUFDcEIsTUFDbkgsQ0FDRixDQUNMLENBQ0ksQ0FDRixDQUNKLENBQ0YsQ0FDRixDQUNELENBQUMsR0FBRyxFQUFFLEVBQ2J5RixLQUFLLEtBQUssQ0FBQyxnQkFDVjVXLDBEQUFBLENBQUNNLHNEQUFJO0lBQUN3SSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNmL0ksMERBQUE7SUFBSzRDLFNBQVMsRUFBQztFQUFtQixnQkFDaEM1QywwREFBQTtJQUFLdUgsS0FBSyxFQUFFO01BQUVJLE9BQU8sRUFBRTtJQUFPO0VBQUUsZ0JBQzlCM0gsMERBQUE7SUFBS3VILEtBQUssRUFBRTtNQUFFQyxPQUFPLEVBQUUsTUFBTTtNQUFFRSxVQUFVLEVBQUUsUUFBUTtNQUFFRCxjQUFjLEVBQUUsZUFBZTtNQUFFUSxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwR2pJLDBEQUFBLFlBQUcsU0FBVSxDQUFDLGVBQ2RBLDBEQUFBLENBQUMwQyxXQUFXO0lBQUN1RyxLQUFLLEVBQUMsT0FBTztJQUFDQyxTQUFTLEVBQUM7RUFBUSxnQkFDM0NsSiwwREFBQSxDQUFDTyxxREFBVTtJQUFDc0gsT0FBTyxFQUFFQSxDQUFBLEtBQU1pUCxXQUFXLENBQUMsQ0FBQyxDQUFFO0lBQUN2UCxLQUFLLEVBQUU7TUFBRTRCLFFBQVEsRUFBRSxVQUFVO01BQUVDLEtBQUssRUFBRTtJQUFRO0VBQUUsZ0JBQ3pGcEosMERBQUEsQ0FBQ3VDLGtFQUFLO0lBQUNnRixLQUFLLEVBQUU7TUFBRTlELEtBQUssRUFBRTtJQUFVO0VBQUUsQ0FBRSxDQUMzQixDQUNELENBQ1YsQ0FBQyxlQUNOekQsMERBQUEsV0FBSyxDQUVGLENBQUMsZUFDTkEsMERBQUE7SUFBS3VILEtBQUssRUFBRTtNQUFFTyxNQUFNLEVBQUUsT0FBTztNQUFFQyxRQUFRLEVBQUUsUUFBUTtNQUFFQyxTQUFTLEVBQUUsUUFBUTtNQUFFQyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUN0RmpJLDBEQUFBO0lBQUt1SCxLQUFLLEVBQUU7TUFBRUksT0FBTyxFQUFFO0lBQU87RUFBRSxHQUU1QnhELE9BQU8sQ0FBQzhDLE1BQU0sQ0FBRVosR0FBRyxJQUFLQSxHQUFHLENBQUNDLEdBQUcsS0FBSzBDLEVBQUUsQ0FBQyxDQUNwQ1gsR0FBRyxDQUFFaEMsR0FBRyxpQkFDUHJHLDBEQUFBO0lBQUd1SSxHQUFHLEVBQUVsQyxHQUFHLENBQUNDO0VBQUksR0FBRUQsR0FBRyxDQUFDK1csTUFBTSxnQkFDMUJwZCwwREFBQSxlQUFPcUcsR0FBRyxDQUFDK1csTUFBTSxDQUFDeEosV0FBVyxFQUFDLEdBQUMsRUFBQ3ZOLEdBQUcsQ0FBQytXLE1BQU0sQ0FBQzFLLE1BQU0sRUFBQyxHQUFDLEVBQUMsTUFBTSxHQUFHa0csTUFBTSxDQUFDdlMsR0FBRyxDQUFDK1csTUFBTSxDQUFDbFcsYUFBYSxDQUFDLENBQUMyUixRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBUSxDQUFDLEdBQ3BILEVBQU0sQ0FDWCxDQUFDLEVBR0psSCxZQUFZLENBQUN0SixHQUFHLENBQUVoQyxHQUFHLGlCQUNuQnJHLDBEQUFBO0lBQUd1SSxHQUFHLEVBQUVsQyxHQUFHLENBQUNDO0VBQUksZ0JBQ2R0RywwREFBQSxlQUFPcUcsR0FBRyxDQUFDcU0sTUFBTSxHQUFHLE1BQU0sR0FBR3RILDZDQUFLLENBQUMvRSxHQUFHLENBQUNnWCxnQkFBZ0IsQ0FBQyxDQUFDN0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUUsRUFBQ25VLEdBQUcsQ0FBQzhLLE1BQWEsQ0FDOUYsQ0FDSixDQUVBLENBQ0YsQ0FDRixDQUNELENBQUMsR0FBRyxFQUNSLENBQ0gsQ0FDRixDQUVBLENBQ1IsQ0FDRixDQUFDLGVBQ05uUiwwREFBQSxDQUFDc0Isc0RBQUs7SUFDSjhMLElBQUksRUFBRTZGLGdCQUFpQjtJQUN2Qm9HLE9BQU8sRUFBRTNGLFdBQVk7SUFDckI0SixvQkFBb0I7SUFDcEJDLGlCQUFpQixFQUFFaGMsc0RBQVM7SUFDNUJpYyxhQUFhLEVBQUU7TUFDYkMsT0FBTyxFQUFFO0lBQ1gsQ0FBRTtJQUNGLG1CQUFnQixtQkFBbUI7SUFDbkMsb0JBQWlCO0VBQXlCLGdCQUUxQ3pkLDBEQUFBLENBQUN5QixxREFBRztJQUFDMkcsRUFBRSxFQUFBaUYsYUFBQSxDQUFBQSxhQUFBLEtBQU85RixLQUFLO01BQUVVLEtBQUssRUFBRTtJQUFHO0VBQUcsR0FFL0I0SyxPQUFPLGdCQUFJN1MsMERBQUEsQ0FBQ3FMLDBEQUFNLE1BQUUsQ0FBQyxnQkFFcEJyTCwwREFBQTtJQUFLdUgsS0FBSyxFQUFFO01BQUVFLGNBQWMsRUFBRSxRQUFRO01BQUU2UyxTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUM1RHRhLDBEQUFBLHlCQUFHQSwwREFBQSxDQUFDc0wsd0VBQWU7SUFBQy9ELEtBQUssRUFBRTtNQUFFOUQsS0FBSyxFQUFFLE9BQU87TUFBRXFFLE1BQU0sRUFBRSxNQUFNO01BQUVHLEtBQUssRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUFJLENBQUMsZUFDcEZqSSwwREFBQSxhQUFJLDBCQUE0QixDQUFDLGVBQ2pDQSwwREFBQTtJQUFLdUgsS0FBSyxFQUFFO01BQUVDLE9BQU8sRUFBRSxNQUFNO01BQUVpUyxHQUFHLEVBQUUsTUFBTTtNQUFFaFMsY0FBYyxFQUFFO0lBQVM7RUFBRSxnQkFDckV6SCwwREFBQTtJQUFRNkgsT0FBTyxFQUFFNkwsV0FBWTtJQUFDOVEsU0FBUyxFQUFDO0VBQWEsR0FBQyxPQUU5QyxDQUNMLENBQ0YsQ0FFSixDQUNBLENBQUMsZUFDUjVDLDBEQUFBLENBQUNzQixzREFBSztJQUNKOEwsSUFBSSxFQUFFaUcsY0FBZTtJQUNyQmdHLE9BQU8sRUFBRTFGLGdCQUFpQjtJQUMxQjJKLG9CQUFvQjtJQUNwQkMsaUJBQWlCLEVBQUVoYyxzREFBUztJQUM1QmljLGFBQWEsRUFBRTtNQUNiQyxPQUFPLEVBQUU7SUFDWCxDQUFFO0lBQ0YsbUJBQWdCLG1CQUFtQjtJQUNuQyxvQkFBaUI7RUFBeUIsZ0JBRTFDemQsMERBQUEsQ0FBQ3lCLHFEQUFHO0lBQUMyRyxFQUFFLEVBQUFpRixhQUFBLENBQUFBLGFBQUEsS0FBTzlGLEtBQUs7TUFBRVUsS0FBSyxFQUFFO0lBQUc7RUFBRyxHQUUvQjRLLE9BQU8sZ0JBQUk3UywwREFBQSxDQUFDcUwsMERBQU0sTUFBRSxDQUFDLGdCQUVwQnJMLDBEQUFBO0lBQUt1SCxLQUFLLEVBQUU7TUFBRUUsY0FBYyxFQUFFLFFBQVE7TUFBRTZTLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzVEdGEsMERBQUEseUJBQUdBLDBEQUFBLENBQUN1TCxtRUFBVTtJQUFDaEUsS0FBSyxFQUFFO01BQUU5RCxLQUFLLEVBQUUsS0FBSztNQUFFcUUsTUFBTSxFQUFFLE1BQU07TUFBRUcsS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQUksQ0FBQyxlQUM3RWpJLDBEQUFBLGFBQUksdUJBQXlCLENBQUMsZUFDOUJBLDBEQUFBO0lBQVE0QyxTQUFTLEVBQUMsYUFBYTtJQUFDaUYsT0FBTyxFQUFFOEw7RUFBaUIsR0FBQyxXQUVuRCxDQUNMLENBRUosQ0FDQSxDQUNKLENBQUM7QUFFVjtBQUVBLGlFQUFlbkYsc0JBQXNCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93bi5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvUGF5bWVudC9QYXltZW50SW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L1BheW1lbnQvUGF5bWVudEluZm9ybWF0aW9uVmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHpcIlxufSksICdBcnJvd0JhY2snKTsiLCJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNNy40MSA4LjU5IDEyIDEzLjE3bDQuNTktNC41OEwxOCAxMGwtNiA2LTYtNnpcIlxufSksICdLZXlib2FyZEFycm93RG93bicpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlUm93LCBUYWJsZUhlYWQsIFBhcGVyLCBUYWJsZUNvbnRhaW5lciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBBdXRvY29tcGxldGUsIHN0eWxlZCwgTW9kYWwsIEJhY2tkcm9wLCBGYWRlLCBCb3gsIE91dGxpbmVkSW5wdXQsIElucHV0QWRvcm5tZW50LCBDaGVja2JveCwgTGluZWFyUHJvZ3Jlc3MsIFN0ZXBwZXIsIFN0ZXAsIFN0ZXBMYWJlbCwgQnV0dG9uLCBUYWJzLCBUYWIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTmF2aWdhdGUsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQ2xvc2UgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5cclxuXHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFBheW1lbnRJbmZvcm1hdGlvbih7IG9uSWQgfSkge1xyXG4gIGNvbnN0IFtwYXltZW50LCBzZXRQYXltZW50XSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtwYXltZW50MiwgU2V0UGF5bWVudDJdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgYXBpVXJsID0gYCR7RU5EUE9JTlRfVVJMfS9wYXltZW50YDtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQYXltZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAodHJ1ZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYXBpVXJsKVxyXG4gICAgICAgICAgc2V0UGF5bWVudChyZXMuZGF0YS5kYXRhLnJldmVyc2UoKSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFBheW1lbnQoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3cgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvdyhlKTtcclxuICB9XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdmFsdWUyLCBzZXRWYWx1ZTJdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBwYXltZW50LmZpbmRJbmRleChyb3cgPT4gcm93Ll9pZCA9PT0gb25JZCk7XHJcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgc2V0VmFsdWUoc2VsZWN0ZWRJbmRleClcclxuICAgIH1cclxuICB9LCBbcGF5bWVudCwgb25JZF0pXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlMiA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUyKG5ld1ZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U2VhcmNoKHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbmV3QXJyYXkgPSBzZWFyY2ggIT09ICcnID8gcGF5bWVudC5maWx0ZXIoKHJvdykgPT5cclxuICAgIHJvdy5wYXltZW50TnVtYmVyLnRvU3RyaW5nKCkuaW5jbHVkZXMoc2VhcmNoKSB8fFxyXG4gICAgcm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcclxuICApIDogcGF5bWVudFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7c2hvdyA9PT0gMSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgcGFkZGluZzogJzVweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveCAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz5BbGwgUGF5bWVudDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIxJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93KDIpfT5GaWx0ZXI8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJ2NhbGMoMTAwdmggLSAxNzBweCknLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICcmIC5NdWlUYWJzLWluZGljYXRvcic6IHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtwYXltZW50Py5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lICsgJyB8ICcgKyByb3cucGF5bWVudE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICB0bz17YC9QYXltZW50SW5mb3JtYXRpb25WaWV3LyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICAgICAgOiAnJ1xyXG4gICAgICB9XHJcbiAgICAgIHtzaG93ID09PSAyID9cclxuICAgICAgICAoPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzEwcHgnIH19IHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3coMSl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzMwMzY4YScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTI1cHgpJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTJ9XHJcbiAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICcmIC5NdWlUYWJzLWluZGljYXRvcic6IHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge25ld0FycmF5Py5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lICsgJyB8ICcgKyByb3cucGF5bWVudE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICB0bz17YC9QYXltZW50SW5mb3JtYXRpb25WaWV3LyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMwMzY4YSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgOiAnJ1xyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRJbmZvcm1hdGlvblxyXG4iLCJpbXBvcnQgdXNlTGF5b3V0Q29uZmlnIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUxheW91dENvbmZpZyc7XHJcbmltcG9ydCBQcmludEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvUHJpbnRIZWFkZXInO1xyXG5pbXBvcnQgUHJpbnRGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1ByaW50Rm9vdGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnXHJcbmltcG9ydCBTaWRlYmFyRGFzaCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2gnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCB7IFRhYmxlQ29udGFpbmVyLCBDaGVja2JveCwgTWVudUl0ZW0sIEdyaWQsIEljb25CdXR0b24sIFBhcGVyLCBUZXh0RmllbGQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIFR5cG9ncmFwaHksIHN0eWxlZCwgRm9ybUxhYmVsLCBSYWRpb0dyb3VwLCBGb3JtQ29udHJvbExhYmVsLCBSYWRpbywgSW5wdXQsIE91dGxpbmVkSW5wdXQsIElucHV0QWRvcm5tZW50LCBNb2RhbCwgQmFja2Ryb3AsIEZhZGUsIEJveCwgQXV0b2NvbXBsZXRlLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlUm93LCBUYWJsZUhlYWQsIEJ1dHRvbiwgTWVudSwgRGl2aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IE5hdkxpbmssIHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IFBheW1lbnRJbmZvcm1hdGlvbiBmcm9tICcuL1BheW1lbnRJbmZvcm1hdGlvbic7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IHsgVmlzaWJpbGl0eSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93bic7XHJcbmltcG9ydCBMYW5ndWFnZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9MYW5ndWFnZSc7XHJcbmltcG9ydCBSZWFjdFRvUHJpbnQsIHsgdXNlUmVhY3RUb1ByaW50IH0gZnJvbSAncmVhY3QtdG8tcHJpbnQnO1xyXG5pbXBvcnQgRW1haWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW1haWwnO1xyXG5pbXBvcnQgUGhvbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGhvbmUnO1xyXG5pbXBvcnQgV2ViSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1dlYic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi8uLi9pbWcvaW1hZ2VzLnBuZydcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5pbXBvcnQgTG9jYWxQcmludHNob3AgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2NhbFByaW50c2hvcCc7XHJcbmltcG9ydCBFZGl0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcblxyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IEVkaXRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFBheW1lbnRJbmZvcm1hdGlvblZpZXcoKSB7XHJcbiAgY29uc3QgeyBjb25maWcgfSA9IHVzZUxheW91dENvbmZpZygpO1xyXG4gIGxldCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG4gIGNvbnN0IFtncmFudEFjY2Vzcywgc2V0R3JhbnRBY2Nlc3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ncmFudEFjY2Vzc2ApO1xyXG4gICAgICAgIHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnVzZXJJRCA9PT0gdXNlci5kYXRhLmlkKVxyXG4gICAgICAgICAgLm1hcCgocm93KSA9PiBzZXRHcmFudEFjY2Vzcyhyb3cubW9kdWxlcykpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoTnVtYmVyKClcclxuICB9LCBbdXNlcl0pXHJcbiAgY29uc3QgUGF5bWVudEluZm9VID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIlBheW1lbnRcIiAmJiByb3cuYWNjZXNzLmVkaXRNID09PSB0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW3BheW1lbnQsIHNldFBheW1lbnRdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2ludm9pY2UsIHNldEludm9pY2VdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3BheW1lbnRBcnJheSwgc2V0UGF5bWVudEFycmF5XSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgYXBpVXJsID0gYCR7RU5EUE9JTlRfVVJMfS9wYXltZW50YDtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChhcGlVcmwpXHJcbiAgICAgICAgc2V0UGF5bWVudChyZXMuZGF0YS5kYXRhKTtcclxuICAgICAgICBjb25zdCByZXNJbnZvaWNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaW52b2ljZT9zdW1tYXJ5PXRydWVgKVxyXG4gICAgICAgIHNldEludm9pY2UocmVzSW52b2ljZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc1BheW1lbnRBcnJheSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1wYXltZW50LyR7aWR9YClcclxuICAgICAgICBzZXRQYXltZW50QXJyYXkocmVzUGF5bWVudEFycmF5LmRhdGEuZGF0YS5Ub3RhbEFtb3VudCAhPT0gdW5kZWZpbmVkID8gcmVzUGF5bWVudEFycmF5LmRhdGEuZGF0YS5Ub3RhbEFtb3VudCA6IG51bGwpO1xyXG4gICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtpZF0pXHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtDb21tZW50czEsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbm90aWZpY2F0aW9uLCBzZXROb3RpZmljYXRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFBheW1lbnRJbmZvID0gcGF5bWVudEFycmF5ICE9PSBudWxsID8gcGF5bWVudEFycmF5LnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHBhcnNlRmxvYXQocm93LnRvdGFsKSwgMCkgOiAwXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoQ29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9jb21tZW50YClcclxuICAgICAgICBjb25zdCByZXNwID0gcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuQ29tbWVudEluZm8uaWRJbmZvID09PSBpZClcclxuICAgICAgICBzZXRDb21tZW50cyhyZXNwLnJldmVyc2UoKSlcclxuICAgICAgICBjb25zdCByZXNOb3RpZmljYXRpb24gPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ub3RpZmljYXRpb25gKVxyXG4gICAgICAgIHNldE5vdGlmaWNhdGlvbihyZXNOb3RpZmljYXRpb24uZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5pZEluZm8gPT09IGlkKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hDb21tZW50KClcclxuICB9LCBbaWRdKVxyXG4gIGNvbnN0IENvbW1lbnRJbmZvID1cclxuICB7XHJcbiAgICBpZEluZm86IGlkLFxyXG4gICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUsXHJcbiAgICByZWFzb25cclxuICB9XHJcblxyXG4gIHsvKiogTG9hZGluZyBTdGFydCAqLyB9XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcblxyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG5cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICB7LyoqIExvYWRpbmcgRW5kICovIH1cclxuICBjb25zdCBkYXRlQ29tbWVudCA9IGRheWpzKERhdGUubm93KCkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRFZGl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIENvbW1lbnRJbmZvLFxyXG4gICAgICBkYXRlQ29tbWVudFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtY29tbWVudC9gLCBkYXRhKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgc2V0UmVhc29uKFwiXCIpO1xyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgIHNldENvbW1lbnRzKFtuZXdEYXRhLCAuLi5Db21tZW50czFdKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuICBjb25zdCBjb21wb25lbnRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJpbnQgPSB1c2VSZWFjdFRvUHJpbnQoe1xyXG4gICAgY29udGVudDogKCkgPT4gY29tcG9uZW50UmVmLmN1cnJlbnQsXHJcbiAgICBvbkJlZm9yZUdldENvbnRlbnQ6ICgpID0+IHtcclxuICAgICAgY29uc3QgUEFHRV9IRUlHSFQgPSAxMDQ1O1xyXG4gICAgICBjb25zdCBwcmludEVsZW1lbnQgPSBjb21wb25lbnRSZWYuY3VycmVudDtcclxuICAgICAgaWYgKHByaW50RWxlbWVudCkge1xyXG4gICAgICAgIHByaW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGVtcC1jbGFzcy1mb3ItaGVpZ2h0XCIpXHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gcHJpbnRFbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgICAgIGNvbnN0IG51bWJlck9mUGFnZSA9IE1hdGguY2VpbChoZWlnaHQgLyBQQUdFX0hFSUdIVClcclxuICAgICAgICBpZiAobnVtYmVyT2ZQYWdlID4gMSkge1xyXG4gICAgICAgICAgY29uc3QgaGVpZ2h0V2l0aFNpbmdsZUhlYWRlciA9IG51bWJlck9mUGFnZSAqIFBBR0VfSEVJR0hUXHJcbiAgICAgICAgICBsZXQgcmVxdWlyZWRIZWlnaHQgPSBoZWlnaHRXaXRoU2luZ2xlSGVhZGVyXHJcbiAgICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBwcmludEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aGVhZFwiKT8uWzBdPy5jbGllbnRIZWlnaHRcclxuICAgICAgICAgIGNvbnN0IGZvb3RlckhlaWdodCA9IHByaW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRmb290XCIpPy5bMF0/LmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgcmVxdWlyZWRIZWlnaHQgLT0gKG51bWJlck9mUGFnZSAtIDEpICogKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodClcclxuICAgICAgICAgIHByaW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtyZXF1aXJlZEhlaWdodH1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGVtcC1jbGFzcy1mb3ItaGVpZ2h0XCIpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkFmdGVyUHJpbnQ6ICgpID0+IHtcclxuICAgICAgY29uc3QgcHJpbnRFbGVtZW50ID0gY29tcG9uZW50UmVmLmN1cnJlbnQ7XHJcbiAgICAgIGlmIChwcmludEVsZW1lbnQpIHtcclxuICAgICAgICBwcmludEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYGF1dG9gXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuUHJpbnQgPSAoKSA9PiB7XHJcbiAgICBoYW5kbGVQcmludCgpXHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgW3Nob3cxLCBzZXRTaG93MV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBoYW5kbGVTaG93MSA9IChlKSA9PiB7XHJcbiAgICBzZXRTaG93MShlKTtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUGF5bWVudCBJbmZvcm1hdGlvblxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvUGF5bWVudFZpZXcnKX0+XHJcbiAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaWRlQmFyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNpZGVCYXIoZmFsc2UpfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRhc2ggLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDIgfX0gPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbG9hZGluZ0RhdGEgPyA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnMTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93MSA9PT0gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGF5bWVudEluZm9ybWF0aW9uIG9uSWQ9e2lkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+KSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcjInPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BheW1lbnQ/LmZpbHRlcihyb3cgPT4gcm93Ll9pZCA9PT0gaWQpPy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlciBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZSAhPT0gdW5kZWZpbmVkID8gcm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9VcHBlckNhc2UoKSA6ICcnfSB8IFBBWS17U3RyaW5nKHJvdy5wYXltZW50TnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzE1cHgnLCBwYWRkaW5nOiAnMnB4IDhweCcsIGJvcmRlclJhZGl1czogJzRweCcsIGJhY2tncm91bmRDb2xvcjogcm93LnRyYW5zYWN0aW9uVHlwZSA9PT0gJ1JlZnVuZCcgPyAnI2ZmY2RkMicgOiAnI2M4ZTZjOScsIGNvbG9yOiByb3cudHJhbnNhY3Rpb25UeXBlID09PSAnUmVmdW5kJyA/ICcjYzYyODI4JyA6ICcjMmU3ZDMyJywgZm9udFNpemU6ICcxNHB4JywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cudHJhbnNhY3Rpb25UeXBlIHx8ICdQYXltZW50J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc4cHgnLCBwYWRkaW5nOiAnMnB4IDhweCcsIGJvcmRlclJhZGl1czogJzRweCcsIGJhY2tncm91bmRDb2xvcjogcm93LnN0YXR1cyA9PT0gJ0NsZWFyZWQnID8gJyNiYmRlZmInIDogJyNmZmY5YzQnLCBjb2xvcjogcm93LnN0YXR1cyA9PT0gJ0NsZWFyZWQnID8gJyMxNTY1YzAnIDogJyNmYmMwMmQnLCBmb250U2l6ZTogJzE0cHgnLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5zdGF0dXMgfHwgJ0NsZWFyZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17b3BlbiA/ICdkZW1vLWN1c3RvbWl6ZWQtbWVudScgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuID8gJ3RydWUnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRWxldmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxLZXlib2FyZEFycm93RG93biAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICdncmF5JywgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1jdXN0b21pemVkLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudUxpc3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogJ2RlbW8tY3VzdG9taXplZC1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtGYWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17UGF5bWVudEluZm9VLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9QYXltZW50SW5mb3JtYXRpb25VcGRhdGUvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RWRpdDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVPcGVuUHJpbnR9IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbFByaW50c2hvcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QcmludDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cxKDIpfT4gPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT5Db21tZW50czwvc3Bhbj4gPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93MSgzKX0+IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+SGlzdG9yeTwvc3Bhbj48L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzU2MHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBoaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSByZWY9e2NvbXBvbmVudFJlZn0gY2xhc3NOYW1lPSdpbnZvaWNlZGV0YWlscycgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpbkxlZnQ6ICc0MHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCA+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnZvaWNlVGVzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpbnRIZWFkZXIgYnJhbmNoSWQ9e3R5cGVvZiByb3cgIT09IFwidW5kZWZpbmVkXCIgPyByb3c/LmJyYW5jaElkIDogXCJcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbnZvaWNlaHInPlBBWU1FTlQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCcgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMjBweCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmc6ICcwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YWRkcmVzcyBzdHlsZT17eyBtYXJnaW5MZWZ0OiBjb25maWdbJy0tY2xpZW50LWJsb2NrLWxlZnQtb2Zmc2V0J10gfHwgJzBweCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBsaW5lSGVpZ2h0OiAxLjM1LCB3aWR0aDogJ2ZpdC1jb250ZW50JywgbWluV2lkdGg6ICcyMDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QYXltZW50IEZyb208YnIgLz48c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e3Jvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvVXBwZXJDYXNlKCl9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nLCBtYXJnaW5SaWdodDogY29uZmlnWyctLW1ldGFkYXRhLWJsb2NrLXJpZ2h0LW9mZnNldCddIHx8ICcwcHgnLCB3aWR0aDogJ2ZpdC1jb250ZW50JywgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ2F1dG8gMWZyJywgY29sdW1uR2FwOiAnMjRweCcsIHJvd0dhcDogJzZweCcsIGZvbnRTaXplOiAnNzAlJywgYWxpZ25Db250ZW50OiAnc3RhcnQnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19PlBBWSAjPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+UEFZLXtTdHJpbmcocm93LnBheW1lbnROdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+RGF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PntkYXlqcyhyb3cucGF5bWVudERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19Pk1vZGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT57cm93Lm1vZGVzLnRvVXBwZXJDYXNlKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+UmVhc29uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+e3Jvdy5yZWFzb24gfHwgKHJvdy5Ub3RhbEFtb3VudD8uWzBdPy5wcmVmaXggPT09ICdQLScgPyAnUHJvamVjdCcgOiAnSW52b2ljZScpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19PlR5cGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgY29sb3I6IHJvdy50cmFuc2FjdGlvblR5cGUgPT09ICdSZWZ1bmQnID8gJ3JlZCcgOiAnZ3JlZW4nIH19Pntyb3cudHJhbnNhY3Rpb25UeXBlIHx8ICdQYXltZW50J308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5TdGF0dXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT57cm93LnN0YXR1cyB8fCAnQ2xlYXJlZCd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmb250U2l6ZTogJzgwJScsIGZsb2F0OiAnbGVmdCcsIGxlZnQ6ICcwJywgd2lkdGg6ICc1MCUnLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzMwcHgnIH19PkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19Pntyb3cuZGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzcwJScsIG1hcmdpbkJvdHRvbTogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PlJlZmVyZW5jZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5TdWJqZWN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT57cm93LnJlYXNvbiA9PT0gJ1Byb2plY3QnIHx8IHJvdy5Ub3RhbEFtb3VudD8uWzBdPy5wcmVmaXggPT09ICdQLScgPyAnUHJvamVjdCBBbW91bnQnIDogJ0ludm9pY2UgQW1vdW50J308L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PkFtb3VudCBQYWlkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuVG90YWxBbW91bnQ/Lm1hcCgoSXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRJbnZvaWNlID0gaW52b2ljZT8uZmluZCgocm93MSkgPT4gcm93MS5faWQgPT09IEl0ZW0uaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0l0ZW0uaWR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PiB7SXRlbS5wcmVmaXggfHwgKHJlbGF0ZWRJbnZvaWNlPy5SZWZlcmVuY2VOYW1lMiB8fCByZWxhdGVkSW52b2ljZT8uaW52b2ljZVB1cmNoYXNlID09PSAnUHVyY2hhc2VkJyA/IFwiUC1cIiA6IChyb3cucmVhc29uID09PSBcIlByb2plY3RcIiB8fCByb3cuVG90YWxBbW91bnQ/LlswXT8ucHJlZml4ID09PSAnUC0nID8gXCJQLVwiIDogXCJJTlYtXCIpKX17U3RyaW5nKEl0ZW0uUmVmKS5wYWRTdGFydCg2LCAnMCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PntJdGVtLmRheXMgPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e0l0ZW0uZGF5cyA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJlZFwiIDogXCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3ZlcmR1ZToge0l0ZW0uZGF5c30gRGF5cyBQYXN0IER1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuPntkYXlqcyhJdGVtLmludm9pY2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3NwYW4+fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT57cmVsYXRlZEludm9pY2U/Lmludm9pY2VTdWJqZWN0Py50b1VwcGVyQ2FzZSgpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+JHtJdGVtLmludm9pY2VBbW91bnQgIT09IHVuZGVmaW5lZCA/IEl0ZW0uaW52b2ljZUFtb3VudD8udG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PiR7SXRlbS50b3RhbD8udG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZm9udFNpemU6ICc3MCUnLCBwYWdlQnJlYWtJbnNpZGU6ICdhdm9pZCcsIG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICcyMDBweCcgfX0gY29sU3Bhbj17M30+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5BbW91bnQgUmVjZWl2ZWQ8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntyb3cuYW1vdW50ID8gcm93LmFtb3VudD8udG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3NwYW4+PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYmFua0NoYXJnZSAmJiBwYXJzZUZsb2F0KHJvdy5iYW5rQ2hhcmdlKSA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19IGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4+QmFuayBDaGFyZ2U8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntwYXJzZUZsb2F0KHJvdy5iYW5rQ2hhcmdlKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5QYXltZW50UmVjZWl2ZWRGQyAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JyB9fSBjb2xTcGFuPXszfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PjxzcGFuPkFtb3VudCBQYWlkIEZDPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4gZGF0YS1wcmVmaXg+RkM8L3NwYW4+PHNwYW4+e3Jvdy5QYXltZW50UmVjZWl2ZWRGQz8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuUGF5bWVudFJlY2VpdmVkVVNEICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19IGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4+QW1vdW50IFBhaWQgJDwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+PHNwYW4+e3Jvdy5QYXltZW50UmVjZWl2ZWRVU0Q/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19IGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4+VG90YWwgUGFpZCBVU0Q8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntQYXltZW50SW5mbyA/IFBheW1lbnRJbmZvPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19IGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4+Q3JlZGl0PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3Bhbj57cm93LnJlbWFpbmluZyA/IHJvdy5yZW1haW5pbmc/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9zcGFuPjwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzIHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIGZvbnRTaXplOiAnNzAlJywgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbGluZUhlaWdodDogJzE0cHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhbms6IFNPRklCQU5RVUUgU0EgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudGl0bGVkOiBHTE9CQUwgR0FURSBTQVJMPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhbmsgQWNjb3VudDogMDAwMjMyMzMzMzAyMTQyNDcwMjAwNzM8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29kZSBTd2lmdDogU0ZCWENES0lYWFhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpblRvcDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaGlkZGVuPi4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGhpZGRlbj4uLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludEZvb3RlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiB0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIiA/IGRhdGE/LmJyYW5jaElkIDogXCJcIn0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnZvaWNlZGV0YWlscyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaW50SGVhZGVyIGJyYW5jaElkPXt0eXBlb2Ygcm93ICE9PSBcInVuZGVmaW5lZFwiID8gcm93Py5icmFuY2hJZCA6IFwiXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPjxwIGNsYXNzTmFtZT0naW52b2ljZWhyJz5QQVlNRU5UPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmc6ICcwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IGNvbmZpZ1snLS1jbGllbnQtYmxvY2stbGVmdC1vZmZzZXQnXSB8fCAnMHB4JywgbGluZUhlaWdodDogMS4zNSwgd2lkdGg6ICdmaXQtY29udGVudCcsIG1pbldpZHRoOiAnMjAwcHgnLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA+UGF5bWVudCBGcm9tPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19Pntyb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZSAhPT0gdW5kZWZpbmVkID8gcm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9VcHBlckNhc2UoKSA6ICcnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmN1c3RvbWVyTmFtZS5iaWxsaW5nQWRkcmVzcyAhPT0gdW5kZWZpbmVkID8gcm93LmN1c3RvbWVyTmFtZS5iaWxsaW5nQWRkcmVzcy50b1VwcGVyQ2FzZSgpIDogJyd9LHtyb3cuY3VzdG9tZXJOYW1lLmJpbGxpbmdDaXR5ICE9PSB1bmRlZmluZWQgPyByb3cuY3VzdG9tZXJOYW1lLmJpbGxpbmdDaXR5LnRvVXBwZXJDYXNlKCkgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hZGRyZXNzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nLCBtYXJnaW5SaWdodDogY29uZmlnWyctLW1ldGFkYXRhLWJsb2NrLXJpZ2h0LW9mZnNldCddIHx8ICcwcHgnLCB3aWR0aDogJ2ZpdC1jb250ZW50JywgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdhdXRvIDFmcicsIGNvbHVtbkdhcDogJzI0cHgnLCByb3dHYXA6ICc2cHgnLCBmb250U2l6ZTogJzgwJScsIGFsaWduQ29udGVudDogJ3N0YXJ0JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19PlBBWSAjPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5QQVkte1N0cmluZyhyb3cucGF5bWVudE51bWJlcikucGFkU3RhcnQoNiwgJzAnKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+RGF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+e2RheWpzKHJvdy5wYXltZW50RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19Pk1vZGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19Pntyb3cubW9kZXMudG9VcHBlckNhc2UoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+UmVhc29uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT57cm93LnJlYXNvbiB8fCAocm93LlRvdGFsQW1vdW50Py5bMF0/LnByZWZpeCA9PT0gJ1AtJyA/ICdQcm9qZWN0JyA6ICdJbnZvaWNlJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19PlR5cGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBjb2xvcjogcm93LnRyYW5zYWN0aW9uVHlwZSA9PT0gJ1JlZnVuZCcgPyAncmVkJyA6ICdncmVlbicgfX0+e3Jvdy50cmFuc2FjdGlvblR5cGUgfHwgJ1BheW1lbnQnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5TdGF0dXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19Pntyb3cuc3RhdHVzIHx8ICdDbGVhcmVkJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZvbnRTaXplOiAnODAlJywgZmxvYXQ6ICdsZWZ0JywgbGVmdDogJzAnLCB3aWR0aDogJzUwJScsIG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMzBweCcgfX0+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT57cm93LmRlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgY2xlYXI6ICdib3RoJywgZm9udFNpemU6ICc4MCUnLCBtYXJnaW5Cb3R0b206ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+YWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5TdWJqZWN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+e3Jvdy5yZWFzb24gPT09ICdQcm9qZWN0JyB8fCByb3cuVG90YWxBbW91bnQ/LlswXT8ucHJlZml4ID09PSAnUC0nID8gJ1Byb2plY3QgQW1vdW50JyA6ICdJbnZvaWNlIEFtb3VudCd9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+QW1vdW50IFBhaWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LlRvdGFsQW1vdW50Py5tYXAoKEl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRJbnZvaWNlID0gaW52b2ljZT8uZmluZCgocm93MSkgPT4gcm93MS5faWQgPT09IEl0ZW0uaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtJdGVtLmlkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0ludm9pY2VWaWV3QWRtaW5BbGwvJHtJdGVtLmlkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5WaWV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT4ge0l0ZW0ucHJlZml4IHx8IChyZWxhdGVkSW52b2ljZT8uUmVmZXJlbmNlTmFtZTIgfHwgcmVsYXRlZEludm9pY2U/Lmludm9pY2VQdXJjaGFzZSA9PT0gJ1B1cmNoYXNlZCcgPyBcIlAtXCIgOiAocm93LnJlYXNvbiA9PT0gXCJQcm9qZWN0XCIgfHwgcm93LlRvdGFsQW1vdW50Py5bMF0/LnByZWZpeCA9PT0gJ1AtJyA/IFwiUC1cIiA6IFwiSU5WLVwiKSl9e1N0cmluZyhJdGVtLlJlZikucGFkU3RhcnQoNiwgJzAnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+e0l0ZW0uZGF5cyA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e0l0ZW0uZGF5cyA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmVkXCIgOiBcImJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdmVyZHVlOiB7SXRlbS5kYXlzfSBEYXlzIFBhc3QgRHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuPntkYXlqcyhJdGVtLmludm9pY2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3NwYW4+fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNEREQnIH19PntyZWxhdGVkSW52b2ljZT8uaW52b2ljZVN1YmplY3Q/LnRvVXBwZXJDYXNlKCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckxlZnQ6ICcxcHggc29saWQgI0RERCcgfX0+JHtJdGVtLmludm9pY2VBbW91bnQgIT09IHVuZGVmaW5lZCA/IEl0ZW0uaW52b2ljZUFtb3VudD8udG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjREREJyB9fT4ke0l0ZW0udG90YWw/LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgY2xlYXI6ICdib3RoJywgZm9udFNpemU6ICc4MCUnLCBwYWdlQnJlYWtJbnNpZGU6ICdhdm9pZCcgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19IGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5BbW91bnQgUmVjZWl2ZWQ8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+PHNwYW4+e3Jvdy5hbW91bnQgPyByb3cuYW1vdW50Py50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvc3Bhbj48L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5iYW5rQ2hhcmdlICYmIHBhcnNlRmxvYXQocm93LmJhbmtDaGFyZ2UpID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICcyMDBweCcgfX0gY29sU3Bhbj17M30+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PjxzcGFuPkJhbmsgQ2hhcmdlPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntwYXJzZUZsb2F0KHJvdy5iYW5rQ2hhcmdlKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5QYXltZW50UmVjZWl2ZWRGQyAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JyB9fSBjb2xTcGFuPXszfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4+QW1vdW50IFBhaWQgRkM8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PjxzcGFuIGRhdGEtcHJlZml4PkZDPC9zcGFuPjxzcGFuPntyb3cuUGF5bWVudFJlY2VpdmVkRkM/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LlBheW1lbnRSZWNlaXZlZFVTRCAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ2xlZnQnLCB3aWR0aDogJzIwMHB4JyB9fSBjb2xTcGFuPXszfT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4+QW1vdW50IFBhaWQgJDwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+PHNwYW4gZGF0YS1wcmVmaXg+JDwvc3Bhbj48c3Bhbj57cm93LlBheW1lbnRSZWNlaXZlZFVTRD8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdsZWZ0Jywgd2lkdGg6ICcyMDBweCcgfX0gY29sU3Bhbj17M30+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PjxzcGFuPlRvdGFsIFBhaWQgVVNEPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3BhbiBkYXRhLXByZWZpeD4kPC9zcGFuPjxzcGFuPntQYXltZW50SW5mbyA/IFBheW1lbnRJbmZvPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAnMjAwcHgnIH19IGNvbFNwYW49ezN9PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5DcmVkaXQ8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+PHNwYW4+e3Jvdy5yZW1haW5pbmcgPyByb3cucmVtYWluaW5nLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9zcGFuPjwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW5Ub3A6ICctNDBweCcsIGZvbnRTaXplOiAnODAlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICdub25lJywgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTT0ZJQkFOUVVFIFNBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudGl0bGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdMT0JBTCBHQVRFIFNBUkxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCB3aWR0aDogJzEwMHB4JywgYm9yZGVyOiAnbm9uZScsIGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhbmsgQWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwMDAyMzIzMzMzMDIxNDI0NzAyMDA3M1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2RlIFN3aWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnbm9uZScsIGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNGQlhDREtJWFhYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Zvb3Rlcmludm9pY2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48RW1haWxJY29uIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Y29udGFjdEBnbG9iYWxnYXRlLnNhcmw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48UGhvbmVJY29uIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KzI0MyA4Mjc3MjIyMjI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48V2ViSWNvbiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnd3dy5HbG9iYWxHYXRlLnNhcmw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93MSA9PT0gMiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNPTU1FTlRTPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cxKDEpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRFZGl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdjb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdjb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzM1NXB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0NvbW1lbnRzMS5tYXAoKEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtJdGVtLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0l0ZW0uZGF0ZUNvbW1lbnQgPyBkYXlqcyhJdGVtLmRhdGVDb21tZW50KS5mb3JtYXQoJ0REL01NJykgOiAnJ30ge0l0ZW0uQ29tbWVudEluZm8ucGVyc29uICsgJzogJyArIEl0ZW0uQ29tbWVudEluZm8ucmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2hvdzEgPT09IDMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ISVNUT1JZPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdzEoMSl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzUxOHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50LmZpbHRlcigocm93KSA9PiByb3cuX2lkID09PSBpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtyb3cuX2lkfT57cm93LkNyZWF0ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntyb3cuQ3JlYXRlLmRhdGVDb21tZW50fSB7cm93LkNyZWF0ZS5wZXJzb259IHsnUEFZLScgKyBTdHJpbmcocm93LkNyZWF0ZS5wYXltZW50TnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogJyd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24ubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cm93LnBlcnNvbiArICcgb24gJyArIGRheWpzKHJvdy5kYXRlTm90aWZpY2F0aW9uKS5mb3JtYXQoJ0REL01NTU0nKX06IHtyb3cucmVhc29ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBGYWlsZWQgdG8gU2F2ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50SW5mb3JtYXRpb25WaWV3XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJNZW51SXRlbSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZVJvdyIsIlRhYmxlSGVhZCIsIlBhcGVyIiwiVGFibGVDb250YWluZXIiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJUeXBvZ3JhcGh5IiwiQXV0b2NvbXBsZXRlIiwic3R5bGVkIiwiTW9kYWwiLCJCYWNrZHJvcCIsIkZhZGUiLCJCb3giLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJDaGVja2JveCIsIkxpbmVhclByb2dyZXNzIiwiU3RlcHBlciIsIlN0ZXAiLCJTdGVwTGFiZWwiLCJCdXR0b24iLCJUYWJzIiwiVGFiIiwiTmF2TGluayIsInVzZU5hdmlnYXRlIiwiTGluayIsIkNsb3NlIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiVmlld1Rvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIlBheW1lbnRJbmZvcm1hdGlvbiIsIl9yZWYzIiwib25JZCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInBheW1lbnQiLCJzZXRQYXltZW50IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXltZW50MiIsIlNldFBheW1lbnQyIiwiYXBpVXJsIiwiZmV0Y2hQYXltZW50IiwiX3JlZjQiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsImRhdGEiLCJyZXZlcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlU2hvdyIsImUiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInZhbHVlIiwic2V0VmFsdWUiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsInZhbHVlMiIsInNldFZhbHVlMiIsInNlbGVjdGVkSW5kZXgiLCJmaW5kSW5kZXgiLCJyb3ciLCJfaWQiLCJoYW5kbGVDaGFuZ2UiLCJuZXdWYWx1ZSIsImhhbmRsZUNoYW5nZTIiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJoYW5kbGVTZWFyY2giLCJ0YXJnZXQiLCJuZXdBcnJheSIsImZpbHRlciIsInBheW1lbnROdW1iZXIiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwiY3VzdG9tZXJOYW1lIiwidG9Mb3dlckNhc2UiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwidmFyaWFudCIsIm9uQ2xpY2siLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WSIsIndpZHRoIiwib25DaGFuZ2UiLCJvcmllbnRhdGlvbiIsInN4IiwibWFwIiwiaW5kZXgiLCJrZXkiLCJsYWJlbCIsImNvbXBvbmVudCIsInRvIiwiYm9yZGVyUmFkaXVzIiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsImlkIiwidGl0bGUiLCJwbGFjZW1lbnQiLCJwb3NpdGlvbiIsImZsb2F0IiwidXNlTGF5b3V0Q29uZmlnIiwiUHJpbnRIZWFkZXIiLCJQcmludEZvb3RlciIsInVzZVJlZiIsIlNpZGViYXJEYXNoIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkZvcm1MYWJlbCIsIlJhZGlvR3JvdXAiLCJGb3JtQ29udHJvbExhYmVsIiwiUmFkaW8iLCJJbnB1dCIsIk1lbnUiLCJEaXZpZGVyIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsInVzZVBhcmFtcyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJkYXlqcyIsIkxvYWRlciIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJBcnJvd0JhY2siLCJWaXNpYmlsaXR5IiwiS2V5Ym9hcmRBcnJvd0Rvd24iLCJMYW5ndWFnZUljb24iLCJSZWFjdFRvUHJpbnQiLCJ1c2VSZWFjdFRvUHJpbnQiLCJFbWFpbEljb24iLCJQaG9uZUljb24iLCJXZWJJY29uIiwiSW1hZ2UiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJMb2NhbFByaW50c2hvcCIsIkVkaXQiLCJFZGl0VG9vbHRpcCIsIl9leGNsdWRlZDIiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjUiLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjYiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwiYnJlYWtwb2ludHMiLCJ1cCIsIlBheW1lbnRJbmZvcm1hdGlvblZpZXciLCJfcGF5bWVudCRmaWx0ZXIiLCJfdXNlTGF5b3V0Q29uZmlnIiwiY29uZmlnIiwiX3VzZVBhcmFtcyIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY3IiwiTmFtZSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJncmFudEFjY2VzcyIsInNldEdyYW50QWNjZXNzIiwiZmV0Y2hOdW1iZXIiLCJfcmVmOCIsIl9yZXMkZGF0YSIsInVzZXJJRCIsIm1vZHVsZXMiLCJQYXltZW50SW5mb1UiLCJtb2R1bGVOYW1lIiwiYWNjZXNzIiwiZWRpdE0iLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiaW52b2ljZSIsInNldEludm9pY2UiLCJwYXltZW50QXJyYXkiLCJzZXRQYXltZW50QXJyYXkiLCJsb2FkaW5nRGF0YSIsInNldExvYWRpbmdEYXRhIiwiZmV0Y2hEYXRhIiwiX3JlZjkiLCJyZXNJbnZvaWNlIiwicmVzUGF5bWVudEFycmF5IiwiVG90YWxBbW91bnQiLCJ1bmRlZmluZWQiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiQ29tbWVudHMxIiwic2V0Q29tbWVudHMiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0Iiwibm90aWZpY2F0aW9uIiwic2V0Tm90aWZpY2F0aW9uIiwiUGF5bWVudEluZm8iLCJyZWR1Y2UiLCJzdW0iLCJwYXJzZUZsb2F0IiwidG90YWwiLCJmZXRjaENvbW1lbnQiLCJfcmVmMCIsIl9yZXMkZGF0YTIiLCJfcmVzTm90aWZpY2F0aW9uJGRhdGEiLCJyZXNwIiwiQ29tbWVudEluZm8iLCJpZEluZm8iLCJyZXNOb3RpZmljYXRpb24iLCJwZXJzb24iLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNsb3NlRXJyb3IiLCJkYXRlQ29tbWVudCIsIkRhdGUiLCJub3ciLCJoYW5kbGVTdWJtaXRFZGl0IiwiX3JlZjEiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJuZXdEYXRhIiwiX3giLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJCb29sZWFuIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZU1lbnUiLCJjb21wb25lbnRSZWYiLCJoYW5kbGVQcmludCIsImNvbnRlbnQiLCJjdXJyZW50Iiwib25CZWZvcmVHZXRDb250ZW50IiwiUEFHRV9IRUlHSFQiLCJwcmludEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbGllbnRIZWlnaHQiLCJudW1iZXJPZlBhZ2UiLCJNYXRoIiwiY2VpbCIsIl9wcmludEVsZW1lbnQkZ2V0RWxlbSIsIl9wcmludEVsZW1lbnQkZ2V0RWxlbTIiLCJoZWlnaHRXaXRoU2luZ2xlSGVhZGVyIiwicmVxdWlyZWRIZWlnaHQiLCJoZWFkZXJIZWlnaHQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZvb3RlckhlaWdodCIsInJlbW92ZSIsIm9uQWZ0ZXJQcmludCIsImhhbmRsZU9wZW5QcmludCIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJzaG93MSIsInNldFNob3cxIiwiaGFuZGxlU2hvdzEiLCJwciIsImVkZ2UiLCJtYXJnaW5SaWdodCIsIm5vV3JhcCIsImZsZXhHcm93IiwibmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm1heFdpZHRoIiwibXQiLCJfcm93JFRvdGFsQW1vdW50IiwiX3JvdyRUb3RhbEFtb3VudDIiLCJfcm93JFRvdGFsQW1vdW50MyIsIl9yb3ckYW1vdW50IiwiX3JvdyRQYXltZW50UmVjZWl2ZWRGIiwiX3JvdyRQYXltZW50UmVjZWl2ZWRVIiwiX3JvdyRyZW1haW5pbmciLCJfZGF0YSIsIl9yb3ckVG90YWxBbW91bnQ1IiwiX3JvdyRUb3RhbEFtb3VudDYiLCJfcm93JFRvdGFsQW1vdW50NyIsIl9yb3ckYW1vdW50MiIsIl9yb3ckUGF5bWVudFJlY2VpdmVkRjIiLCJfcm93JFBheW1lbnRSZWNlaXZlZFUyIiwiZm9udFdlaWdodCIsInRvVXBwZXJDYXNlIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJ0cmFuc2FjdGlvblR5cGUiLCJ2ZXJ0aWNhbEFsaWduIiwic3RhdHVzIiwiZGlzYWJsZUVsZXZhdGlvbiIsImVuZEljb24iLCJib3JkZXIiLCJNZW51TGlzdFByb3BzIiwib25DbG9zZSIsIlRyYW5zaXRpb25Db21wb25lbnQiLCJkaXNhYmxlZCIsImxlbmd0aCIsImdhcCIsImJhY2tncm91bmQiLCJoaWRkZW4iLCJyZWYiLCJib3JkZXJCb3R0b20iLCJicmFuY2hJZCIsIm1hcmdpbkJvdHRvbSIsImxpbmVIZWlnaHQiLCJtaW5XaWR0aCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjb2x1bW5HYXAiLCJyb3dHYXAiLCJhbGlnbkNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJwYXltZW50RGF0ZSIsImZvcm1hdCIsIm1vZGVzIiwicHJlZml4IiwiZGVzY3JpcHRpb24iLCJJdGVtIiwiaSIsIl9yb3ckVG90YWxBbW91bnQ0IiwiX3JlbGF0ZWRJbnZvaWNlJGludm9pIiwiX0l0ZW0kaW52b2ljZUFtb3VudCIsIl9JdGVtJHRvdGFsIiwicmVsYXRlZEludm9pY2UiLCJmaW5kIiwicm93MSIsImJvcmRlckxlZnQiLCJSZWZlcmVuY2VOYW1lMiIsImludm9pY2VQdXJjaGFzZSIsIlJlZiIsImRheXMiLCJpbnZvaWNlRGF0ZSIsImludm9pY2VTdWJqZWN0IiwiaW52b2ljZUFtb3VudCIsInJlcGxhY2UiLCJwYWdlQnJlYWtJbnNpZGUiLCJjb2xTcGFuIiwiYW1vdW50IiwiYmFua0NoYXJnZSIsInRvRml4ZWQiLCJQYXltZW50UmVjZWl2ZWRGQyIsIlBheW1lbnRSZWNlaXZlZFVTRCIsInJlbWFpbmluZyIsIm1hcmdpblRvcCIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0NpdHkiLCJjbGVhciIsImJvcmRlckNvbGxhcHNlIiwiX3JvdyRUb3RhbEFtb3VudDgiLCJfcmVsYXRlZEludm9pY2UkaW52b2kyIiwiX0l0ZW0kaW52b2ljZUFtb3VudDIiLCJfSXRlbSR0b3RhbDIiLCJvblN1Ym1pdCIsInJlcXVpcmVkIiwibXVsdGlsaW5lIiwicm93cyIsInR5cGUiLCJDcmVhdGUiLCJkYXRlTm90aWZpY2F0aW9uIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==