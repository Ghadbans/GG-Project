"use strict";
exports.id = "src_js_AdminView1_PageView_ItemView_ItemViewLayout_js";
exports.ids = ["src_js_AdminView1_PageView_ItemView_ItemViewLayout_js"];
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

/***/ "./src/js/AdminView1/PageView/ItemView/ItemNameInfo.js"
/*!*************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ItemView/ItemNameInfo.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
var _excluded = ["className"];
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





var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"].tooltip)]: {
      backgroundColor: '#30368a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
function ItemNameInfo(_ref3) {
  var onId = _ref3.onId,
    item = _ref3.item,
    search = _ref3.search,
    debouncedSearch = _ref3.debouncedSearch,
    handleSearch = _ref3.handleSearch;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var handleShow = e => {
    setShow(e);
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    value2 = _useState6[0],
    setValue2 = _useState6[1];
  var newArray = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return debouncedSearch !== '' ? item.filter(row => row.typeItem.toLowerCase().includes(debouncedSearch.toLowerCase()) || row.itemDescription && row.itemDescription.toLowerCase().includes(debouncedSearch.toLowerCase()) || row.itemName.toLowerCase().includes(debouncedSearch.toLowerCase()) || row.itemBrand && row.itemBrand.toLowerCase().includes(debouncedSearch.toLowerCase()) || row.itemManufacturer && row.itemManufacturer.toLowerCase().includes(debouncedSearch.toLowerCase()) || row.itemStore && row.itemStore.toLowerCase().includes(debouncedSearch.toLowerCase())) : item;
  }, [item, debouncedSearch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var selectedIndex = item.findIndex(row => row._id === onId);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
    var selectedIndex2 = newArray.findIndex(row => row._id === onId);
    if (selectedIndex2 !== -1) {
      setValue2(selectedIndex2);
    }
  }, [item, onId]);
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h5"
  }, "All Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow(2)
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '512px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, item === null || item === void 0 ? void 0 : item.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    label: row.itemName.toUpperCase(),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
    to: "/ItemInfo/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#30368a',
        borderRadius: '10px'
      }
    }
  }))))) : '', show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    label: row.itemName.toUpperCase(),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
    to: "/ItemInfo/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : '');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemNameInfo);

/***/ },

/***/ "./src/js/AdminView1/PageView/ItemView/ItemViewLayout.js"
/*!***************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ItemView/ItemViewLayout.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _component_SideMaintenance__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../component/SideMaintenance */ "./src/js/component/SideMaintenance.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _ItemNameInfo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ItemNameInfo */ "./src/js/AdminView1/PageView/ItemView/ItemNameInfo.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_28__);
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
;




















var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref => {
  var theme = _ref.theme,
    open = _ref.open;
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_12__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref2 => {
  var theme = _ref2.theme,
    open = _ref2.open;
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
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
function ItemViewLayout() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_19__.selectCurrentUser);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    sideBar = _useState2[0],
    setSideBar = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    item = _useState4[0],
    setItems = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem('ItemSidebarSearch') || ''),
    _useState6 = _slicedToArray(_useState5, 2),
    search = _useState6[0],
    setSearch = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(search),
    _useState8 = _slicedToArray(_useState7, 2),
    debouncedSearch = _useState8[0],
    setDebouncedSearch = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchItem = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_20__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/item"));
          setItems(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchItem() {
        return _ref5.apply(this, arguments);
      };
    }();
    fetchItem();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
    localStorage.setItem('ItemSidebarSearch', value);
  };
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_19__.logOut)());
    navigate('/');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      pr: '24px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_13__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Item Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => navigate('/ItemViewAdmin')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_16__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_23__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_24__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_14__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SideMaintenance__WEBPACK_IMPORTED_MODULE_22__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemNameInfo__WEBPACK_IMPORTED_MODULE_25__["default"], {
    onId: id,
    item: item,
    search: search,
    debouncedSearch: debouncedSearch,
    handleSearch: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Outlet, null))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemViewLayout);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfSXRlbVZpZXdfSXRlbVZpZXdMYXlvdXRfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pELENBQTJEO0FBQ2tNO0FBQ25PO0FBQ3VCO0FBQ087QUFDUTtBQUVoRSxJQUFNbUMsV0FBVyxHQUFHN0IseURBQU0sQ0FBQzhCLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUMvQ3hDLDBEQUFBLENBQUNpQyw4REFBTyxFQUFBUyxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU9iLDhEQUFjLENBQUNjLE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLFNBQVM7TUFDMUJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzNCQyxRQUFRLEVBQUU7SUFDWjtFQUNGLENBQUM7QUFBQSxDQUFDLENBQUM7QUFDSCxTQUFTQyxZQUFZQSxDQUFBQyxLQUFBLEVBQXdEO0VBQUEsSUFB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Q2lCLHFEQUFJO0lBQUN3QyxJQUFJO0lBQUM2RCxFQUFFLEVBQUU7RUFBRSxnQkFDYnRILDBEQUFBLENBQUM4QixxREFBTSxNQUFFLENBQ1AsQ0FDSixDQUNDLENBQ1YsQ0FDSixDQUFDO0FBRWQ7QUFFQSxpRUFBZWdKLGNBQWMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2suanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0l0ZW1WaWV3L0l0ZW1OYW1lSW5mby5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvSXRlbVZpZXcvSXRlbVZpZXdMYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cInVzZSBjbGllbnRcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTIwIDExSDcuODNsNS41OS01LjU5TDEyIDRsLTggOCA4IDggMS40MS0xLjQxTDcuODMgMTNIMjB6XCJcbn0pLCAnQXJyb3dCYWNrJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVGFibGUsIEljb25CdXR0b24sIHN0eWxlZCwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlSGVhZCwgVGFibGVSb3csIENoZWNrYm94LCBUYWJsZUNvbnRhaW5lciwgUGFwZXIsIFR5cG9ncmFwaHksIE1vZGFsLCBCb3gsIEdyaWQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIE1lbnVJdGVtLCBCYWNrZHJvcCwgQXV0b2NvbXBsZXRlLCBUZXh0RmllbGQsIFRhYnMsIFRhYiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBZGQsIENsb3NlIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuXHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuZnVuY3Rpb24gSXRlbU5hbWVJbmZvKHsgb25JZCwgaXRlbSwgc2VhcmNoLCBkZWJvdW5jZWRTZWFyY2gsIGhhbmRsZVNlYXJjaCB9KSB7XHJcblxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKDIpO1xyXG4gIGNvbnN0IGhhbmRsZVNob3cgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvdyhlKTtcclxuICB9XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdmFsdWUyLCBzZXRWYWx1ZTJdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IG5ld0FycmF5ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gZGVib3VuY2VkU2VhcmNoICE9PSAnJyA/IGl0ZW0uZmlsdGVyKChyb3cpID0+XHJcbiAgICAgIHJvdy50eXBlSXRlbS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAocm93Lml0ZW1EZXNjcmlwdGlvbiAmJiByb3cuaXRlbURlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZGVib3VuY2VkU2VhcmNoLnRvTG93ZXJDYXNlKCkpKSB8fFxyXG4gICAgICByb3cuaXRlbU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhkZWJvdW5jZWRTZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgKHJvdy5pdGVtQnJhbmQgJiYgcm93Lml0ZW1CcmFuZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaC50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgICAgKHJvdy5pdGVtTWFudWZhY3R1cmVyICYmIHJvdy5pdGVtTWFudWZhY3R1cmVyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZGVib3VuY2VkU2VhcmNoLnRvTG93ZXJDYXNlKCkpKSB8fFxyXG4gICAgICAocm93Lml0ZW1TdG9yZSAmJiByb3cuaXRlbVN0b3JlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZGVib3VuY2VkU2VhcmNoLnRvTG93ZXJDYXNlKCkpKVxyXG4gICAgKSA6IGl0ZW07XHJcbiAgfSwgW2l0ZW0sIGRlYm91bmNlZFNlYXJjaF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGl0ZW0uZmluZEluZGV4KHJvdyA9PiByb3cuX2lkID09PSBvbklkKTtcclxuICAgIGlmIChzZWxlY3RlZEluZGV4ICE9PSAtMSkge1xyXG4gICAgICBzZXRWYWx1ZShzZWxlY3RlZEluZGV4KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleDIgPSBuZXdBcnJheS5maW5kSW5kZXgocm93ID0+IHJvdy5faWQgPT09IG9uSWQpO1xyXG4gICAgaWYgKHNlbGVjdGVkSW5kZXgyICE9PSAtMSkge1xyXG4gICAgICBzZXRWYWx1ZTIoc2VsZWN0ZWRJbmRleDIpXHJcbiAgICB9XHJcbiAgfSwgW2l0ZW0sIG9uSWRdKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UyID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZTIobmV3VmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7c2hvdyA9PT0gMSA/XHJcbiAgICAgICAgKDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBwYWRkaW5nOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94IC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPkFsbCBJdGVtPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjEnIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3coMil9PkZpbHRlcjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNTEycHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICcmIC5NdWlUYWJzLWluZGljYXRvcic6IHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpdGVtPy5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9e3Jvdy5pdGVtTmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIHRvPXtgL0l0ZW1JbmZvLyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgICAgICA6ICcnXHJcbiAgICAgIH1cclxuICAgICAge3Nob3cgPT09IDIgP1xyXG4gICAgICAgICg8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTBweCcgfX0gc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgaWQ9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdygxKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMzAzNjhhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJ2NhbGMoMTAwdmggLSAxMjVweCknLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlMn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlMn1cclxuICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bmV3QXJyYXk/Lm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD17cm93Lml0ZW1OYW1lLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICAgICAgdG89e2AvSXRlbUluZm8vJHtyb3cuX2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMzAzNjhhJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgICAgICA6ICcnXHJcbiAgICAgIH1cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1OYW1lSW5mb1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBDc3NCYXNlbGluZSwgR3JpZCwgVG9vbGJhciwgQ29udGFpbmVyLCBEaXZpZGVyLCBMaXN0LCBJY29uQnV0dG9uLCBUeXBvZ3JhcGh5LCBzdHlsZWQsIEZhZGUsIE1lbnUsIE1lbnVJdGVtLCBUYWIsIFRhYnMgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IHsgQ2xvc2UgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcywgT3V0bGV0LCBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IFNpZGVNYWludGVuYW5jZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZU1haW50ZW5hbmNlJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBJdGVtTmFtZUluZm8gZnJvbSAnLi9JdGVtTmFtZUluZm8nO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gICAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gICAgLi4uKG9wZW4gJiYge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSxcclxufSkpO1xyXG5cclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAgICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAgICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAgICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSxcclxuICAgIH0pLFxyXG4pO1xyXG5cclxuY29uc3QgVmlld1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICAgIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgICAgIGZvbnRTaXplOiAxMSxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIEl0ZW1WaWV3TGF5b3V0KCkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gICAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbaXRlbSwgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdJdGVtU2lkZWJhclNlYXJjaCcpIHx8ICcnKTtcclxuICAgIGNvbnN0IFtkZWJvdW5jZWRTZWFyY2gsIHNldERlYm91bmNlZFNlYXJjaF0gPSB1c2VTdGF0ZShzZWFyY2gpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hJdGVtID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbWApO1xyXG4gICAgICAgICAgICAgICAgc2V0SXRlbXMocmVzLmRhdGEuZGF0YS5yZXZlcnNlKCkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGZldGNoSXRlbSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXREZWJvdW5jZWRTZWFyY2goc2VhcmNoKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlcik7XHJcbiAgICB9LCBbc2VhcmNoXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldFNlYXJjaCh2YWx1ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0l0ZW1TaWRlYmFyU2VhcmNoJywgdmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciBzeD17eyBwcjogJzI0cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIG5vV3JhcCBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSXRlbSBJbmZvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL0l0ZW1WaWV3QWRtaW4nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJywgcHg6IFsxXSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZU1haW50ZW5hbmNlIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbU5hbWVJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJvdW5jZWRTZWFyY2g9e2RlYm91bmNlZFNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWFyY2g9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtVmlld0xheW91dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwiVGFibGUiLCJJY29uQnV0dG9uIiwic3R5bGVkIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJDaGVja2JveCIsIlRhYmxlQ29udGFpbmVyIiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiTW9kYWwiLCJCb3giLCJHcmlkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiTWVudUl0ZW0iLCJCYWNrZHJvcCIsIkF1dG9jb21wbGV0ZSIsIlRleHRGaWVsZCIsIlRhYnMiLCJUYWIiLCJheGlvcyIsIkFkZCIsIkNsb3NlIiwiT3V0bGV0IiwiTmF2TGluayIsIkxpbmsiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJWaWV3VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiSXRlbU5hbWVJbmZvIiwiX3JlZjMiLCJvbklkIiwiaXRlbSIsInNlYXJjaCIsImRlYm91bmNlZFNlYXJjaCIsImhhbmRsZVNlYXJjaCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlU2hvdyIsImUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInZhbHVlIiwic2V0VmFsdWUiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInZhbHVlMiIsInNldFZhbHVlMiIsIm5ld0FycmF5IiwiZmlsdGVyIiwicm93IiwidHlwZUl0ZW0iLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaXRlbURlc2NyaXB0aW9uIiwiaXRlbU5hbWUiLCJpdGVtQnJhbmQiLCJpdGVtTWFudWZhY3R1cmVyIiwiaXRlbVN0b3JlIiwic2VsZWN0ZWRJbmRleCIsImZpbmRJbmRleCIsIl9pZCIsInNlbGVjdGVkSW5kZXgyIiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJoYW5kbGVDaGFuZ2UyIiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJvdmVyZmxvd1kiLCJ3aWR0aCIsIm9uQ2hhbmdlIiwib3JpZW50YXRpb24iLCJzeCIsIm1hcCIsImluZGV4Iiwia2V5IiwibGFiZWwiLCJ0b1VwcGVyQ2FzZSIsImNvbXBvbmVudCIsInRvIiwiYm9yZGVyUmFkaXVzIiwiY29udGFpbmVyIiwic3BhY2luZyIsInhzIiwiaWQiLCJ0aXRsZSIsInBsYWNlbWVudCIsInBvc2l0aW9uIiwiZmxvYXQiLCJDc3NCYXNlbGluZSIsIlRvb2xiYXIiLCJDb250YWluZXIiLCJEaXZpZGVyIiwiTGlzdCIsIkZhZGUiLCJNZW51IiwiTXVpQXBwQmFyIiwiTXVpRHJhd2VyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsIkxvZ291dCIsIkFycm93QmFjayIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkVORFBPSU5UX1VSTCIsIlNpZGVNYWludGVuYW5jZSIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiTWVzc2FnZUFkbWluVmlldyIsImRheWpzIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsImJyZWFrcG9pbnRzIiwidXAiLCJfcmVmNCIsIkl0ZW1WaWV3TGF5b3V0IiwiX3VzZVBhcmFtcyIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJzZXRJdGVtcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRTZWFyY2giLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInNldERlYm91bmNlZFNlYXJjaCIsImZldGNoSXRlbSIsIl9yZWY1IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJkYXRhIiwicmV2ZXJzZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJ0YXJnZXQiLCJzZXRJdGVtIiwidG9nZ2xlRHJhd2VyIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsInByIiwiZWRnZSIsIm1hcmdpblJpZ2h0Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJuYW1lIiwidXNlck5hbWUiLCJyb2xlIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwicHgiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJtYXhXaWR0aCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==