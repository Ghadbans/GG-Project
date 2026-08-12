"use strict";
exports.id = "src_js_AdminView1_PageView_Supplier_SupplierViewInformation_js";
exports.ids = ["src_js_AdminView1_PageView_Supplier_SupplierViewInformation_js"];
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

/***/ "./node_modules/@mui/icons-material/esm/KeyboardArrowUp.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/KeyboardArrowUp.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), 'KeyboardArrowUp'));

/***/ },

/***/ "./src/js/AdminView1/PageView/Supplier/SupplierName.js"
/*!*************************************************************!*\
  !*** ./src/js/AdminView1/PageView/Supplier/SupplierName.js ***!
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
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






var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref => {
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
      backgroundColor: '#30368a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
function SupplierName(_ref3) {
  var onId = _ref3.onId;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    item = _useState2[0],
    SetItems = _useState2[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_10__.ENDPOINT_URL, "/Supplier");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchItem = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_9__["default"].get(apiUrl);
          SetItems(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchItem() {
        return _ref4.apply(this, arguments);
      };
    }();
    fetchItem();
  }, []);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    show = _useState4[0],
    setShow = _useState4[1];
  var handleShow = e => {
    setShow(e);
  };
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    value = _useState6[0],
    setValue = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    value2 = _useState8[0],
    setValue2 = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var selectedIndex = item.findIndex(row => row._id === onId);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [item, onId]);
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    search = _useState0[0],
    setSearch = _useState0[1];
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
  };
  var newArray = search !== '' ? item.filter(row => row.supplierName.toLowerCase().includes(search.toLowerCase()) || row.storeName && row.storeName.toLowerCase().includes(search.toLowerCase()) || row.address.toLowerCase().includes(search.toLowerCase()) || row.description.toLowerCase().includes(search.toLowerCase())) : item;
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
  }, "All Supplier")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    label: row.storeName.toUpperCase(),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link,
    to: "/SupplierViewInformation/".concat(row._id),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
    label: row.storeName.toUpperCase(),
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link,
    to: "/SupplierViewInformation/".concat(row._id),
    sx: {
      '&.Mui-selected': {
        color: '#30368a'
      }
    }
  }))))) : '');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SupplierName);

/***/ },

/***/ "./src/js/AdminView1/PageView/Supplier/SupplierViewInformation.js"
/*!************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/Supplier/SupplierViewInformation.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _component_SideMaintenance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/SideMaintenance */ "./src/js/component/SideMaintenance.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/KeyboardArrowUp.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabContext/TabContext.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabList/TabList.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabPanel/TabPanel.js");
/* harmony import */ var _mui_x_charts_hooks__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @mui/x-charts/hooks */ "./node_modules/@mui/x-charts/hooks/useDrawingArea.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _SupplierName__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./SupplierName */ "./src/js/AdminView1/PageView/Supplier/SupplierName.js");
/* harmony import */ var _component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../../component/ItemThumbnail */ "./src/js/component/ItemThumbnail.js");
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

















































var palette = ['blue', 'red', 'orange'];
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
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
var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"])(_ref7 => {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded4);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref8 => {
  var theme = _ref8.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_31__["default"], {
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
var size = {
  width: 400,
  height: 200
};
var StyledText = (0,_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"])('text')(_ref1 => {
  var theme = _ref1.theme;
  return {
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 15
  };
});
function PieCenterLabel(_ref10) {
  var children = _ref10.children;
  var _useDrawingArea = (0,_mui_x_charts_hooks__WEBPACK_IMPORTED_MODULE_56__.useDrawingArea)(),
    width = _useDrawingArea.width,
    height = _useDrawingArea.height,
    left = _useDrawingArea.left,
    top = _useDrawingArea.top;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledText, {
    x: left + width / 2,
    y: top + height / 2
  }, children);
}
function SupplierViewInformation() {
  var _item$filter;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_40__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_40__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_42__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_42__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.setUser)({
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
        return _ref11.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loadingData = _useState4[0],
    setLoadingData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    item = _useState6[0],
    SetItems = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    StoreName = _useState8[0],
    SetStore = _useState8[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/Supplier");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchItem = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        try {
          var _res$data2, _res$data3;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get(apiUrl);
          SetItems((_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.filter(row => row._id === id));
          (_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 || _res$data3.filter(row => row._id === id).map(row => SetStore(row.storeName));
          setLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchItem() {
        return _ref13.apply(this, arguments);
      };
    }();
    fetchItem();
  }, [id]);
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    itemPurchase = _useState0[0],
    setItemPurchase = _useState0[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator(function* () {
        try {
          var resItemPurchase = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/itemPurchase?summary=true"));
          var formatDate = resItemPurchase.data.data;
          var filteredData = formatDate.filter(data => item.some(i => data.manufacturerID === i._id || i.storeName === data.manufacturer));
          setItemPurchase(filteredData.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetch() {
        return _ref14.apply(this, arguments);
      };
    }();
    handleFetch();
  }, [item]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.logOut)());
    navigate('/');
  };
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
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState10 = _slicedToArray(_useState1, 2),
    show = _useState10[0],
    setShow = _useState10[1];
  var handleShow = e => {
    setShow(e);
    setAnchorEl(null);
  };
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    reason = _useState12[0],
    setReason = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    Comments1 = _useState14[0],
    setComments = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    notification = _useState16[0],
    setNotification = _useState16[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchComment = /*#__PURE__*/function () {
      var _ref15 = _asyncToGenerator(function* () {
        try {
          var _res$data4, _resNotification$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/comment"));
          var resp = (_res$data4 = res.data) === null || _res$data4 === void 0 || (_res$data4 = _res$data4.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.filter(row => row.CommentInfo.idInfo === id);
          setComments(resp.reverse());
          var resNotification = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/notification"));
          setNotification((_resNotification$data = resNotification.data) === null || _resNotification$data === void 0 || (_resNotification$data = _resNotification$data.data) === null || _resNotification$data === void 0 ? void 0 : _resNotification$data.filter(row => row.idInfo === id));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchComment() {
        return _ref15.apply(this, arguments);
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
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    loading = _useState18[0],
    setLoading = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    loadingOpenModal = _useState20[0],
    setLoadingOpenModal = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    ErrorOpenModal = _useState22[0],
    setErrorOpenModal = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    loadingOpenModalPicture = _useState24[0],
    setLoadingOpenModalPicture = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    loadingOpenModalDelete = _useState26[0],
    setLoadingOpenModalDelete = _useState26[1];
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
    window.location.reload();
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
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_49___default()(Date.now());
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo,
        dateComment
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/create-comment/"), data);
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
      return _ref16.apply(this, arguments);
    };
  }();
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState('1'),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    value3 = _React$useState4[0],
    setValue3 = _React$useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result = localStorage.getItem('TabSupplierView');
    if (result) {
      setValue3(result);
    }
  });
  var handleChange3 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('TabSupplierView', changeValue);
  };
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState28 = _slicedToArray(_useState27, 2),
    search = _useState28[0],
    setSearch = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState30 = _slicedToArray(_useState29, 2),
    search4 = _useState30[0],
    setSearch4 = _useState30[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result = localStorage.getItem('QuickFilterItemPurchaseItemSupplier-Summary');
    if (result) {
      setSearch(result);
    }
  });
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
    localStorage.setItem('QuickFilterItemPurchaseItemSupplier-Summary', value);
  };
  var newArray = search !== '' ? itemPurchase.filter(row => row.itemPurchaseNumber.toString().includes(search) || row.description.toLowerCase().includes(search.toLowerCase()) || row.projectName && row.projectName.name.toLowerCase().includes(search.toLowerCase()) || row.manufacturer.toLowerCase().includes(search.toLowerCase()) || row.manufacturerNumber.toLowerCase().includes(search.toLowerCase()) || row.items.some(Item => {
    var _ref17;
    return Item.itemName !== undefined && ((_ref17 = typeof Item.itemName === 'string' ? Item.itemName : Item.itemName.itemName) === null || _ref17 === void 0 ? void 0 : _ref17.toLowerCase().includes(search.toLowerCase()));
  }) || row.items.some(Item => Item.itemDescription !== undefined && Item.itemDescription.toLowerCase().includes(search.toLowerCase())) || row.items.some(Item => Item.newDescription !== undefined && Item.newDescription.toLowerCase().includes(search.toLowerCase())) || dayjs__WEBPACK_IMPORTED_MODULE_49___default()(row.itemPurchaseDate).format('DD/MM/YYYY').includes(search)) : itemPurchase;
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    sideBar = _React$useState6[0],
    setSideBar = _React$useState6[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    openView = _useState32[0],
    setOpenView = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState34 = _slicedToArray(_useState33, 2),
    idView = _useState34[0],
    setIdView = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState36 = _slicedToArray(_useState35, 2),
    itemPurchaseView = _useState36[0],
    setItemPurchaseView = _useState36[1];
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
            var res = yield axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_39__.ENDPOINT_URL, "/get-itemPurchase/").concat(idView));
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
  var newArray1 = search !== '' ? itemPurchase.filter(row => row.itemPurchaseNumber.toString().includes(search) || row.status && row.status.toLowerCase().includes(search.toLowerCase()) || row.description.toLowerCase().includes(search.toLowerCase()) || row.projectName && row.projectName.name.toLowerCase().includes(search.toLowerCase()) || row.manufacturer.toLowerCase().includes(search.toLowerCase()) || row.manufacturerNumber.toLowerCase().includes(search.toLowerCase()) || row.items.some(Item => {
    var _ref19;
    return Item.itemName !== undefined && ((_ref19 = typeof Item.itemName === 'string' ? Item.itemName : Item.itemName.itemName) === null || _ref19 === void 0 ? void 0 : _ref19.toLowerCase().includes(search.toLowerCase()));
  }) || row.items.some(Item => Item.itemDescription !== undefined && Item.itemDescription.toLowerCase().includes(search.toLowerCase())) || row.items.some(Item => Item.newDescription !== undefined && Item.newDescription.toLowerCase().includes(search.toLowerCase())) || dayjs__WEBPACK_IMPORTED_MODULE_49___default()(row.itemPurchaseDate).format('DD/MM/YYYY').includes(search)) : itemPurchase;

  //const payFc = newArray1.filter((row1)=>  row1.manufacturerID === id || row1.manufacturer === StoreName).reduce((acc, row) => acc + (row.total || 0), 0)

  var relatedItemPurchases = itemPurchase.length > 0 ? itemPurchase.reduce((acc, row) => {
    row.items.filter(item => parseFloat(item.itemQty) >= 0).forEach(item => {
      var _item$itemName;
      var ItemName = typeof item.itemName === 'string' ? item.itemName : (_item$itemName = item.itemName) === null || _item$itemName === void 0 ? void 0 : _item$itemName.itemName;
      var Id = item.itemName._id;
      var description = item.itemDescription;
      if (!acc[ItemName]) {
        acc[ItemName] = {
          ItemName,
          Id,
          description,
          total: 0
        };
      }
    });
    return acc;
  }, {}) : null;
  var relatedItemPurchases2 = [];
  itemPurchase.filter(Item => Item.manufacturerID === id || item.find(row2 => row2.storeName === Item.manufacturer)).map(Item => Item.items.filter(item => parseFloat(item.itemQty) >= 0 || item.newDescription !== undefined).map(row => {
    relatedItemPurchases2.push(_objectSpread(_objectSpread({}, row), {}, {
      date: Item.itemPurchaseDate
    }));
  }));
  var newArray2 = search4 !== '' ? relatedItemPurchases2.filter(row => {
    var _row$itemName, _row$itemDescription, _row$newDescription;
    return ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName.itemName) && row.itemName.itemName.toString().includes(search4) || ((_row$itemDescription = row.itemDescription) === null || _row$itemDescription === void 0 ? void 0 : _row$itemDescription.toLowerCase().includes(search4.toLowerCase())) || ((_row$newDescription = row.newDescription) === null || _row$newDescription === void 0 ? void 0 : _row$newDescription.toLowerCase().includes(search4.toLowerCase())) || dayjs__WEBPACK_IMPORTED_MODULE_49___default()(row.date).format('DD/MM/YYYY').includes(search4);
  }) : relatedItemPurchases2;
  function Row(props) {
    var _row$status;
    var row = props.row,
      index = props.index,
      filterPaid = props.filterPaid;
    var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      open = _React$useState8[0],
      setOpen = _React$useState8[1];
    var totalVal = row.totalUSD !== undefined ? row.totalUSD : row.total || 0;
    var paidVal = (row.payments || []).reduce((sum, p) => sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || 1)), 0);
    var unpaidVal = Math.max(0, totalVal - paidVal);
    var displayTotal = totalVal;
    if (((_row$status = row.status) === null || _row$status === void 0 ? void 0 : _row$status.toLowerCase()) === 'partially-paid') {
      if (filterPaid === 'paid') {
        displayTotal = paidVal;
      } else if (filterPaid === 'unpaid') {
        displayTotal = unpaidVal;
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      style: {
        '& > *': {
          borderBottom: 'unset'
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD',
        cursor: 'pointer'
      },
      onClick: () => setOpen(!open)
    }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_48__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, index + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      align: "left",
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_49___default()(row.itemPurchaseDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      align: "left",
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, row.itemPurchaseNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      align: "left",
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, row.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      align: "left",
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, row.projectName !== undefined ? row.projectName.name : row.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      align: "left",
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, displayTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      align: "left",
      style: {
        textAlign: 'left',
        border: '1px solid #DDD'
      }
    }, "            ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: () => handleOpenView(row._id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_36__["default"], {
      style: {
        color: '#202a5a'
      }
    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid #DDD',
        paddingBottom: 0,
        paddingTop: 0
      },
      colSpan: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      in: open,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        margin: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      gutterBottom: true,
      component: "div"
    }, "---"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      "aria-label": "collapsible table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid #DDD'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid #DDD'
      }
    }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid #DDD'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid #DDD'
      }
    }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid #DDD'
      }
    }, "Price($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid #DDD'
      }
    }, "Amount Paid(FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid #DDD'
      }
    }, "Rate "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid #DDD'
      }
    }, "Amount Paid($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid #DDD'
      }
    }, "Total($)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, row.items.filter(row3 => parseFloat(row3.itemQty) > 0 || row3.newDescription !== undefined).map((row3, i) => {
      var _row3$itemName2;
      var relatedUnit = item.find(Item1 => {
        var _row3$itemName;
        return Item1._id === ((_row3$itemName = row3.itemName) === null || _row3$itemName === void 0 ? void 0 : _row3$itemName._id);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        key: row3.idRow
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        }
      }, i + 1), row3.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        colSpan: 8,
        align: "center",
        style: {
          border: '1px solid #DDD',
          fontWeight: 'bold'
        }
      }, row3.newDescription) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        }
      }, (_row3$itemName2 = row3.itemName) === null || _row3$itemName2 === void 0 ? void 0 : _row3$itemName2.itemName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        }
      }, row3.itemDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        }
      }, row3.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        }
      }, parseFloat(row3.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        }
      }, "FC", row3.totalAmountFC !== undefined ? parseFloat(row3.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        }
      }, row3.Taux !== undefined ? parseFloat(row3.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        }
      }, "$", parseFloat(row3.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid #DDD'
        }
      }, row3.fcConvertToUsdTotal !== undefined ? parseFloat(row3.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)));
    }))))))));
  }
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all'),
    _useState38 = _slicedToArray(_useState37, 2),
    filterPaid = _useState38[0],
    setFilterPaid = _useState38[1];
  var handleFilterChange = status => {
    setFilterPaid(status);
  };
  var filteredArray1 = newArray1.filter(row => {
    var _row$status2, _row$status3, _row$status4, _row$status5;
    if (filterPaid === 'all') return true;
    if (filterPaid === 'paid') return row.status === undefined || ((_row$status2 = row.status) === null || _row$status2 === void 0 ? void 0 : _row$status2.toLowerCase()) === 'paid' || ((_row$status3 = row.status) === null || _row$status3 === void 0 ? void 0 : _row$status3.toLowerCase()) === 'partially-paid';
    if (filterPaid === 'unpaid') return ((_row$status4 = row.status) === null || _row$status4 === void 0 ? void 0 : _row$status4.toLowerCase()) === 'unpaid' || ((_row$status5 = row.status) === null || _row$status5 === void 0 ? void 0 : _row$status5.toLowerCase()) === 'partially-paid';
    return true;
  });
  var payFc = filteredArray1.filter(row1 => row1.manufacturerID === id || row1.manufacturer === StoreName).reduce((acc, row) => {
    var _row$status6;
    var totalVal = row.totalUSD !== undefined ? row.totalUSD : row.total || 0;
    if (((_row$status6 = row.status) === null || _row$status6 === void 0 ? void 0 : _row$status6.toLowerCase()) === 'partially-paid') {
      var paidVal = (row.payments || []).reduce((sum, p) => sum + (p.totalUSD || parseFloat(p.amount || 0) + parseFloat(p.amountFC || 0) / parseFloat(p.rate || 1)), 0);
      if (filterPaid === 'paid') {
        return acc + paidVal;
      } else if (filterPaid === 'unpaid') {
        return acc + Math.max(0, totalVal - paidVal);
      }
    }
    return acc + totalVal;
  }, 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_30__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_29__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Supplier Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: () => navigate('/SupplierAdminView')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_51__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_58__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_57__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_29__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_35__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_32__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SideMaintenance__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_29__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_33__["default"], {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    spacing: 2
  }, show === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SupplierName__WEBPACK_IMPORTED_MODULE_59__["default"], {
    onId: id
  })) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      background: 'white'
    }
  }, item === null || item === void 0 || (_item$filter = item.filter(row => row._id === id)) === null || _item$filter === void 0 ? void 0 : _item$filter.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      fontWeight: 'bold',
      fontSize: '20px'
    }
  }, row.storeName.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    "aria-controls": open ? 'demo-customized-menu' : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? 'true' : undefined,
    variant: "contained",
    disableElevation: true,
    onClick: handleClick,
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_52__["default"], null),
    sx: {
      bgcolor: 'gray',
      '&:hover': {
        color: 'gray',
        bgcolor: 'white',
        border: '1px solid gray'
      }
    }
  }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "demo-customized-menu",
    MenuListProps: {
      'aria-labelledby': 'demo-customized-button'
    },
    anchorEl: anchorEl,
    open: open,
    onClose: handleCloseMenu,
    TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
    to: "/SupplierFormUpdate/".concat(row._id),
    className: "LinkName",
    style: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_37__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: () => handleShow(2)
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'gray'
    }
  }, "Comments"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: () => handleShow(3)
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'gray'
    }
  }, "History")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_53__["default"], {
    value: value3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      borderBottom: 1,
      borderColor: 'divider'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_54__["default"], {
    onChange: handleChange3,
    "aria-label": "lab API tabs example",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: "Item-Summary",
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_55__["default"], {
    value: "1",
    sx: {
      height: '500px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  }, row.supplierName.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Store")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'gray'
    }
  }, row.storeName.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Phone 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'gray'
    }
  }, row.customerPhone1.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Phone 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.customerPhone2.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.address.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    align: "left",
    style: {
      height: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.description.toUpperCase()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_55__["default"], {
    value: "2",
    sx: {
      height: '500px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'left',
      padding: '10px',
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    colSpan: 2
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "$", payFc === null || payFc === void 0 ? void 0 : payFc.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => handleFilterChange('all')
  }, "All"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => handleFilterChange('paid')
  }, "Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => handleFilterChange('unpaid')
  }, "Unpaid")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
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
  }, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '10px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, " Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, filteredArray1.filter(row1 => row1.manufacturerID === id || row1.manufacturer === row.storeName).map((row1, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Row, {
    key: row1._id,
    row: row1,
    index: i,
    filterPaid: filterPaid
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_55__["default"], {
    value: "3",
    sx: {
      height: '500px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: "search",
    id: "search4",
    value: search4,
    variant: "standard",
    onChange: e => setSearch4(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "secondTable",
    style: {
      fontSize: '80%',
      marginBottom: '5px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      border: '1px solid #DDD'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      border: '1px solid #DDD'
    }
  }, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      border: '1px solid #DDD'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      border: '1px solid #DDD'
    }
  }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      border: '1px solid #DDD'
    }
  }, "Price($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      border: '1px solid #DDD'
    }
  }, "Amount Paid(FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      border: '1px solid #DDD'
    }
  }, "Rate "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      border: '1px solid #DDD'
    }
  }, "Amount Paid($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      border: '1px solid #DDD'
    }
  }, "Total($)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, newArray2 === null || newArray2 === void 0 ? void 0 : newArray2.map((row3, i) => {
    var _row3$itemName3;
    var relatedUnit = item.find(Item1 => Item1._id === row3.itemName._id);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_60__["default"], {
      itemId: (_row3$itemName3 = row3.itemName) === null || _row3$itemName3 === void 0 ? void 0 : _row3$itemName3._id,
      initialData: row3.data,
      initialType: row3.contentType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        flexGrow: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    }, row3.itemName.itemName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        fontSize: '11px',
        color: 'gray'
      }
    }, row3.itemDescription)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_49___default()(row3.date).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, row3.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, parseFloat(row3.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, "FC", row3.totalAmountFC !== undefined ? parseFloat(row3.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, row3.Taux !== undefined ? parseFloat(row3.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, "$", parseFloat(row3.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid #DDD'
      }
    }, row3.fcConvertToUsdTotal !== undefined ? parseFloat(row3.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0));
  })))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)))), show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    style: {
      width: '100%'
    },
    className: "btnCustomer6"
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '355px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, Comments1.map(Item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: Item._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '100%',
      borderBottom: '1px solid black'
    }
  }, Item.dateComment ? dayjs__WEBPACK_IMPORTED_MODULE_49___default()(Item.dateComment).format('DD/MM') : '', " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "", show === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px'
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
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '518px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, item.filter(row => row._id === id).map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    key: row._id
  }, row.Creates !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.Creates.person + ' on ' + row.Creates.dateComment, ": ", row.Creates.item) : '')), notification.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, row.person + ' on ' + dayjs__WEBPACK_IMPORTED_MODULE_49___default()(row.dateNotification).format('DD/MMMM'), ": ", row.reason))))))) : ""), " "))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_17__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_17__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_47__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    open: openView,
    onClose: handleCloseView,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 900
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleCloseView,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), itemPurchaseView !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, itemPurchaseView.Create.person, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "IP-", itemPurchaseView.itemPurchaseNumber), " on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, itemPurchaseView.Create.dateComment)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    style: {
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Expense Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    colSpan: 3
  }, dayjs__WEBPACK_IMPORTED_MODULE_49___default()(itemPurchaseView.itemPurchaseDate).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    colSpan: 3
  }, itemPurchaseView.projectName !== undefined ? itemPurchaseView.projectName.name : itemPurchaseView.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    colSpan: 3
  }, itemPurchaseView.manufacturer + ' / ' + itemPurchaseView.manufacturerNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    colSpan: 3
  }, itemPurchaseView.note)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: {
      maxHeight: 400,
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    "aria-label": "collapsible table",
    stickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Price($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Amount Paid(FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Rate "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Amount Paid($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Total($)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, itemPurchaseView.items.filter(row => parseFloat(row.itemQty) > 0).map((row, i) => {
    var _row$itemName2, _row$itemName3, _row$itemName4, _row$itemName5, _row$itemName6, _row$itemName7, _row$itemName8, _row$itemName9, _row$itemName0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      key: row.idRow
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sx: id === ((_row$itemName2 = row.itemName) === null || _row$itemName2 === void 0 ? void 0 : _row$itemName2._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sx: id === ((_row$itemName3 = row.itemName) === null || _row$itemName3 === void 0 ? void 0 : _row$itemName3._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, row.itemName.itemName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sx: id === ((_row$itemName4 = row.itemName) === null || _row$itemName4 === void 0 ? void 0 : _row$itemName4._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, row.itemDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sx: id === ((_row$itemName5 = row.itemName) === null || _row$itemName5 === void 0 ? void 0 : _row$itemName5._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, row.itemQty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sx: id === ((_row$itemName6 = row.itemName) === null || _row$itemName6 === void 0 ? void 0 : _row$itemName6._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, parseFloat(row.itemRate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sx: id === ((_row$itemName7 = row.itemName) === null || _row$itemName7 === void 0 ? void 0 : _row$itemName7._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, "FC", row.totalAmountFC !== undefined ? parseFloat(row.totalAmountFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sx: id === ((_row$itemName8 = row.itemName) === null || _row$itemName8 === void 0 ? void 0 : _row$itemName8._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, row.Taux !== undefined ? parseFloat(row.Taux).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sx: id === ((_row$itemName9 = row.itemName) === null || _row$itemName9 === void 0 ? void 0 : _row$itemName9._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, "$", parseFloat(row.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sx: id === ((_row$itemName0 = row.itemName) === null || _row$itemName0 === void 0 ? void 0 : _row$itemName0._id) ? {
        backgroundColor: '#202a5a',
        color: 'white'
      } : null
    }, row.fcConvertToUsdTotal !== undefined ? parseFloat(row.fcConvertToUsdTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    colSpan: 2
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "FC", itemPurchaseView.totalFC !== undefined ? parseFloat(itemPurchaseView.totalFC).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "$", itemPurchaseView.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    colSpan: 2,
    sx: {
      textAlign: 'right'
    }
  }, "$", itemPurchaseView.totalUSD !== undefined ? parseFloat(itemPurchaseView.totalUSD).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))))))))) : null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SupplierViewInformation);

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

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfU3VwcGxpZXJfU3VwcGxpZXJWaWV3SW5mb3JtYXRpb25fanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLGdCOzs7Ozs7Ozs7O0FDWlk7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLHdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMscUJBQXFCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ050QixDQUFrRDtBQUMyTTtBQUNuTztBQUN3QjtBQUNEO0FBQ087QUFDUTtBQUVoRSxJQUFNbUMsV0FBVyxHQUFHOUIseURBQU0sQ0FBQytCLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUMvQ3hDLDBEQUFBLENBQUNpQyw4REFBTyxFQUFBUyxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFB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QUMsRUFBRSxDQUFDL0IsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsQ0FBQyxDQUFDO0VBR3RDLG9CQUNFdGhCLDBEQUFBLENBQUM2SixxREFBTTtJQUNMM0MsT0FBTyxFQUFDLFNBQVM7SUFDakIrYixHQUFHLEVBQUVBLEdBQUk7SUFDVHZiLEVBQUUsRUFBRTtNQUFFSCxLQUFLLEVBQUUsRUFBRTtNQUFFSCxNQUFNLEVBQUUsRUFBRTtNQUFFbkUsZUFBZSxFQUFFLFNBQVM7TUFBRXNhLE1BQU0sRUFBRTtJQUFpQjtFQUFFLEdBRW5GLENBQUMwRixHQUFHLGlCQUFJampCLDBEQUFBLENBQUMwTSxnRkFBd0I7SUFBQ2hGLEVBQUUsRUFBRTtNQUFFckUsUUFBUSxFQUFFLEVBQUU7TUFBRUgsS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQ25FLENBQUM7QUFFYixDQUFDO0FBRUQsaUVBQWV5SixhQUFhLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93bi5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0tleWJvYXJkQXJyb3dVcC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvU3VwcGxpZXIvU3VwcGxpZXJOYW1lLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9TdXBwbGllci9TdXBwbGllclZpZXdJbmZvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9JdGVtVGh1bWJuYWlsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwelwiXG59KSwgJ0Fycm93QmFjaycpOyIsIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk03LjQxIDguNTkgMTIgMTMuMTdsNC41OS00LjU4TDE4IDEwbC02IDYtNi02elwiXG59KSwgJ0tleWJvYXJkQXJyb3dEb3duJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNy40MSAxNS40MSAxMiAxMC44M2w0LjU5IDQuNThMMTggMTRsLTYtNi02IDZ6XCJcbn0pLCAnS2V5Ym9hcmRBcnJvd1VwJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVGFibGUsIEljb25CdXR0b24sIHN0eWxlZCwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlSGVhZCwgVGFibGVSb3csIENoZWNrYm94LCBUYWJsZUNvbnRhaW5lciwgUGFwZXIsIFR5cG9ncmFwaHksIE1vZGFsLCBCb3gsIEdyaWQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIE1lbnVJdGVtLCBCYWNrZHJvcCwgQXV0b2NvbXBsZXRlLCBUZXh0RmllbGQsIFRhYnMsIFRhYiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBBZGQsIENsb3NlIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuXHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuZnVuY3Rpb24gU3VwcGxpZXJOYW1lKHsgb25JZCB9KSB7XHJcblxyXG4gIGNvbnN0IFtpdGVtLCBTZXRJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgY29uc3QgYXBpVXJsID0gYCR7RU5EUE9JTlRfVVJMfS9TdXBwbGllcmA7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEl0ZW0gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGFwaVVybClcclxuICAgICAgICBTZXRJdGVtcyhyZXMuZGF0YS5kYXRhLnJldmVyc2UoKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hJdGVtKClcclxuICB9LCBbXSlcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBoYW5kbGVTaG93ID0gKGUpID0+IHtcclxuICAgIHNldFNob3coZSk7XHJcbiAgfVxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3ZhbHVlMiwgc2V0VmFsdWUyXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gaXRlbS5maW5kSW5kZXgocm93ID0+IHJvdy5faWQgPT09IG9uSWQpO1xyXG4gICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHNldFZhbHVlKHNlbGVjdGVkSW5kZXgpXHJcbiAgICB9XHJcbiAgfSwgW2l0ZW0sIG9uSWRdKVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZTIgPSAoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlMihuZXdWYWx1ZSlcclxuICB9XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U2VhcmNoKHZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBuZXdBcnJheSA9IHNlYXJjaCAhPT0gJycgPyBpdGVtLmZpbHRlcigocm93KSA9PlxyXG4gICAgcm93LnN1cHBsaWVyTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgcm93LnN0b3JlTmFtZSAmJiByb3cuc3RvcmVOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICByb3cuYWRkcmVzcy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgcm93LmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXHJcbiAgKSA6IGl0ZW1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3Nob3cgPT09IDEgP1xyXG4gICAgICAgICg8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgcGFkZGluZzogJzVweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveCAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5BbGwgU3VwcGxpZXI8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMScgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdygyKX0+RmlsdGVyPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc1MTJweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzBweCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2l0ZW0/Lm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD17cm93LnN0b3JlTmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIHRvPXtgL1N1cHBsaWVyVmlld0luZm9ybWF0aW9uLyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgICAgICA6ICcnXHJcbiAgICAgIH1cclxuICAgICAge3Nob3cgPT09IDIgP1xyXG4gICAgICAgICg8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTBweCcgfX0gc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgaWQ9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdygxKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMzAzNjhhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJ2NhbGMoMTAwdmggLSAxMjVweCknLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlMn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlMn1cclxuICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bmV3QXJyYXk/Lm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD17cm93LnN0b3JlTmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIHRvPXtgL1N1cHBsaWVyVmlld0luZm9ybWF0aW9uLyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMwMzY4YSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgOiAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN1cHBsaWVyTmFtZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnXHJcbmltcG9ydCBTaWRlTWFpbnRlbmFuY2UgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGVNYWludGVuYW5jZSc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudENpcmNsZSc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBQYXBlciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBzdHlsZWQsIEZvcm1MYWJlbCwgUmFkaW9Hcm91cCwgRm9ybUNvbnRyb2xMYWJlbCwgUmFkaW8sIElucHV0LCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgTW9kYWwsIEJhY2tkcm9wLCBGYWRlLCBCb3gsIEF1dG9jb21wbGV0ZSwgQnV0dG9uLCBNZW51LCBEaXZpZGVyLCBUYWIsIENhcmQsIENhcmRDb250ZW50LCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUhlYWQsIFRhYmxlQ2VsbCwgVGFibGVSb3csIFRhYmxlQ29udGFpbmVyLCBDb2xsYXBzZSwgQXZhdGFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCB7IEtleWJvYXJkQXJyb3dVcCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSwgU3luYyB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93bic7XHJcbmltcG9ydCB7IFRhYkNvbnRleHQsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSAnQG11aS9sYWInO1xyXG5pbXBvcnQgeyBQaWVDaGFydCwgcGllQXJjTGFiZWxDbGFzc2VzIH0gZnJvbSAnQG11aS94LWNoYXJ0cy9QaWVDaGFydCc7XHJcbmltcG9ydCB7IHVzZURyYXdpbmdBcmVhIH0gZnJvbSAnQG11aS94LWNoYXJ0cy9ob29rcyc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgeyBGaWxlQ29weSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5cclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyLCBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMnO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IFN1cHBsaWVyTmFtZSBmcm9tICcuL1N1cHBsaWVyTmFtZSc7XHJcbmltcG9ydCBTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TaG9wcGluZ0NhcnRPdXRsaW5lZCc7XHJcblxyXG5pbXBvcnQgSXRlbVRodW1ibmFpbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvSXRlbVRodW1ibmFpbCc7XHJcblxyXG5jb25zdCBwYWxldHRlID0gWydibHVlJywgJ3JlZCcsICdvcmFuZ2UnXTtcclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IERlbGV0ZVRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuY29uc3Qgc2l6ZSA9IHtcclxuICB3aWR0aDogNDAwLFxyXG4gIGhlaWdodDogMjAwLFxyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZCgndGV4dCcpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgZmlsbDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgdGV4dEFuY2hvcjogJ21pZGRsZScsXHJcbiAgZG9taW5hbnRCYXNlbGluZTogJ2NlbnRyYWwnLFxyXG4gIGZvbnRTaXplOiAxNSxcclxufSkpO1xyXG5mdW5jdGlvbiBQaWVDZW50ZXJMYWJlbCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGxlZnQsIHRvcCB9ID0gdXNlRHJhd2luZ0FyZWEoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFRleHQgeD17bGVmdCArIHdpZHRoIC8gMn0geT17dG9wICsgaGVpZ2h0IC8gMn0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3R5bGVkVGV4dD5cclxuICApO1xyXG59XHJcbmZ1bmN0aW9uIFN1cHBsaWVyVmlld0luZm9ybWF0aW9uKCkge1xyXG4gIGxldCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBbZ3JhbnRBY2Nlc3MsIHNldEdyYW50QWNjZXNzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hOdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ3JhbnRBY2Nlc3NgKTtcclxuICAgICAgICByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy51c2VySUQgPT09IHVzZXIuZGF0YS5pZClcclxuICAgICAgICAgIC5tYXAoKHJvdykgPT4gc2V0R3JhbnRBY2Nlc3Mocm93Lm1vZHVsZXMpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaE51bWJlcigpXHJcbiAgfSwgW3VzZXJdKVxyXG5cclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpdGVtLCBTZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW1N0b3JlTmFtZSwgU2V0U3RvcmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgYXBpVXJsID0gYCR7RU5EUE9JTlRfVVJMfS9TdXBwbGllcmA7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoSXRlbSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYXBpVXJsKVxyXG4gICAgICAgIFNldEl0ZW1zKHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIocm93ID0+IHJvdy5faWQgPT09IGlkKSlcclxuICAgICAgICByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKHJvdyA9PiByb3cuX2lkID09PSBpZCkubWFwKChyb3cpID0+IFNldFN0b3JlKHJvdy5zdG9yZU5hbWUpKVxyXG4gICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaEl0ZW0oKVxyXG4gIH0sIFtpZF0pXHJcblxyXG4gIGNvbnN0IFtpdGVtUHVyY2hhc2UsIHNldEl0ZW1QdXJjaGFzZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUZldGNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc0l0ZW1QdXJjaGFzZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1QdXJjaGFzZT9zdW1tYXJ5PXRydWVgKVxyXG4gICAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSByZXNJdGVtUHVyY2hhc2UuZGF0YS5kYXRhXHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gZm9ybWF0RGF0ZS5maWx0ZXIoZGF0YSA9PlxyXG4gICAgICAgICAgaXRlbS5zb21lKGkgPT4gZGF0YS5tYW51ZmFjdHVyZXJJRCA9PT0gaS5faWQgfHwgaS5zdG9yZU5hbWUgPT09IGRhdGEubWFudWZhY3R1cmVyKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0SXRlbVB1cmNoYXNlKGZpbHRlcmVkRGF0YS5yZXZlcnNlKCkpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUZldGNoKClcclxuICB9LCBbaXRlbV0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBoYW5kbGVTaG93ID0gKGUpID0+IHtcclxuICAgIHNldFNob3coZSk7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbQ29tbWVudHMxLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25vdGlmaWNhdGlvbiwgc2V0Tm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2NvbW1lbnRgKVxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5Db21tZW50SW5mby5pZEluZm8gPT09IGlkKVxyXG4gICAgICAgIHNldENvbW1lbnRzKHJlc3AucmV2ZXJzZSgpKVxyXG4gICAgICAgIGNvbnN0IHJlc05vdGlmaWNhdGlvbiA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L25vdGlmaWNhdGlvbmApXHJcbiAgICAgICAgc2V0Tm90aWZpY2F0aW9uKHJlc05vdGlmaWNhdGlvbi5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LmlkSW5mbyA9PT0gaWQpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaENvbW1lbnQoKVxyXG4gIH0sIFtpZF0pXHJcblxyXG4gIGNvbnN0IENvbW1lbnRJbmZvID1cclxuICB7XHJcbiAgICBpZEluZm86IGlkLFxyXG4gICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUsXHJcbiAgICByZWFzb25cclxuICB9XHJcblxyXG4gIHsvKiogTG9hZGluZyBTdGFydCAqLyB9XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWxQaWN0dXJlLCBzZXRMb2FkaW5nT3Blbk1vZGFsUGljdHVyZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWxEZWxldGUsIHNldExvYWRpbmdPcGVuTW9kYWxEZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcblxyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG5cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlT3BlblBpY3R1cmUgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsUGljdHVyZSh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZU9wZW5EZWxldGUgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsRGVsZXRlKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VQaWN0dXJlID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgey8qKiBMb2FkaW5nIEVuZCAqLyB9XHJcbiAgY29uc3QgZGF0ZUNvbW1lbnQgPSBkYXlqcyhEYXRlLm5vdygpKTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXRFZGl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIENvbW1lbnRJbmZvLFxyXG4gICAgICBkYXRlQ29tbWVudFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtY29tbWVudC9gLCBkYXRhKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgc2V0UmVhc29uKFwiXCIpO1xyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgIHNldENvbW1lbnRzKFtuZXdEYXRhLCAuLi5Db21tZW50czFdKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFt2YWx1ZTMsIHNldFZhbHVlM10gPSBSZWFjdC51c2VTdGF0ZSgnMScpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFiU3VwcGxpZXJWaWV3JylcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgc2V0VmFsdWUzKHJlc3VsdClcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZTMgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBjaGFuZ2VWYWx1ZSA9IG5ld1ZhbHVlXHJcbiAgICBzZXRWYWx1ZTMoY2hhbmdlVmFsdWUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RhYlN1cHBsaWVyVmlldycsIGNoYW5nZVZhbHVlKVxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzZWFyY2g0LCBzZXRTZWFyY2g0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlckl0ZW1QdXJjaGFzZUl0ZW1TdXBwbGllci1TdW1tYXJ5JylcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgc2V0U2VhcmNoKHJlc3VsdClcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U2VhcmNoKHZhbHVlKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1F1aWNrRmlsdGVySXRlbVB1cmNoYXNlSXRlbVN1cHBsaWVyLVN1bW1hcnknLCB2YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgbmV3QXJyYXkgPSBzZWFyY2ggIT09ICcnID8gaXRlbVB1cmNoYXNlLmZpbHRlcigocm93KSA9PlxyXG4gICAgcm93Lml0ZW1QdXJjaGFzZU51bWJlci50b1N0cmluZygpLmluY2x1ZGVzKHNlYXJjaCkgfHxcclxuICAgIHJvdy5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgKHJvdy5wcm9qZWN0TmFtZSAmJiByb3cucHJvamVjdE5hbWUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgIHJvdy5tYW51ZmFjdHVyZXIudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIHJvdy5tYW51ZmFjdHVyZXJOdW1iZXIudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIHJvdy5pdGVtcy5zb21lKChJdGVtKSA9PiBJdGVtLml0ZW1OYW1lICE9PSB1bmRlZmluZWQgJiYgKHR5cGVvZiBJdGVtLml0ZW1OYW1lID09PSAnc3RyaW5nJyA/IEl0ZW0uaXRlbU5hbWUgOiBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lKT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICByb3cuaXRlbXMuc29tZSgoSXRlbSkgPT4gSXRlbS5pdGVtRGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCAmJiBJdGVtLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgIHJvdy5pdGVtcy5zb21lKChJdGVtKSA9PiBJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgSXRlbS5uZXdEZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgIGRheWpzKHJvdy5pdGVtUHVyY2hhc2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKS5pbmNsdWRlcyhzZWFyY2gpXHJcbiAgKSA6IGl0ZW1QdXJjaGFzZVxyXG5cclxuXHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICBjb25zdCBbb3BlblZpZXcsIHNldE9wZW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaWRWaWV3LCBzZXRJZFZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2l0ZW1QdXJjaGFzZVZpZXcsIHNldEl0ZW1QdXJjaGFzZVZpZXddID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBoYW5kbGVPcGVuVmlldyA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3BlblZpZXcodHJ1ZSk7XHJcbiAgICBzZXRJZFZpZXcoaWQpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVmlldyA9ICgpID0+IHtcclxuICAgIHNldE9wZW5WaWV3KGZhbHNlKTtcclxuICAgIHNldElkVmlldyhudWxsKTtcclxuICAgIHNldEl0ZW1QdXJjaGFzZVZpZXcobnVsbCk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhMiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKGlkVmlldyAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbVB1cmNoYXNlLyR7aWRWaWV3fWApXHJcbiAgICAgICAgICBzZXRJdGVtUHVyY2hhc2VWaWV3KHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhMigpXHJcbiAgfSwgW2lkVmlld10pXHJcblxyXG4gIGNvbnN0IG5ld0FycmF5MSA9IHNlYXJjaCAhPT0gJycgPyBpdGVtUHVyY2hhc2UuZmlsdGVyKChyb3cpID0+XHJcbiAgICByb3cuaXRlbVB1cmNoYXNlTnVtYmVyLnRvU3RyaW5nKCkuaW5jbHVkZXMoc2VhcmNoKSB8fFxyXG4gICAgKHJvdy5zdGF0dXMgJiYgcm93LnN0YXR1cy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgIHJvdy5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgKHJvdy5wcm9qZWN0TmFtZSAmJiByb3cucHJvamVjdE5hbWUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgIHJvdy5tYW51ZmFjdHVyZXIudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIHJvdy5tYW51ZmFjdHVyZXJOdW1iZXIudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIHJvdy5pdGVtcy5zb21lKChJdGVtKSA9PiBJdGVtLml0ZW1OYW1lICE9PSB1bmRlZmluZWQgJiYgKHR5cGVvZiBJdGVtLml0ZW1OYW1lID09PSAnc3RyaW5nJyA/IEl0ZW0uaXRlbU5hbWUgOiBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lKT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICByb3cuaXRlbXMuc29tZSgoSXRlbSkgPT4gSXRlbS5pdGVtRGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCAmJiBJdGVtLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgIHJvdy5pdGVtcy5zb21lKChJdGVtKSA9PiBJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgSXRlbS5uZXdEZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSkgfHxcclxuICAgIGRheWpzKHJvdy5pdGVtUHVyY2hhc2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKS5pbmNsdWRlcyhzZWFyY2gpXHJcbiAgKSA6IGl0ZW1QdXJjaGFzZVxyXG5cclxuICAvL2NvbnN0IHBheUZjID0gbmV3QXJyYXkxLmZpbHRlcigocm93MSk9PiAgcm93MS5tYW51ZmFjdHVyZXJJRCA9PT0gaWQgfHwgcm93MS5tYW51ZmFjdHVyZXIgPT09IFN0b3JlTmFtZSkucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgKHJvdy50b3RhbCB8fCAwKSwgMClcclxuXHJcbiAgY29uc3QgcmVsYXRlZEl0ZW1QdXJjaGFzZXMgPSBpdGVtUHVyY2hhc2UubGVuZ3RoID4gMCA/IGl0ZW1QdXJjaGFzZS5yZWR1Y2UoKGFjYywgcm93KSA9PiB7XHJcbiAgICByb3cuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBwYXJzZUZsb2F0KGl0ZW0uaXRlbVF0eSkgPj0gMCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBJdGVtTmFtZSA9IHR5cGVvZiBpdGVtLml0ZW1OYW1lID09PSAnc3RyaW5nJyA/IGl0ZW0uaXRlbU5hbWUgOiBpdGVtLml0ZW1OYW1lPy5pdGVtTmFtZTtcclxuICAgICAgY29uc3QgSWQgPSBpdGVtLml0ZW1OYW1lLl9pZDtcclxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBpdGVtLml0ZW1EZXNjcmlwdGlvbjtcclxuICAgICAgaWYgKCFhY2NbSXRlbU5hbWVdKSB7XHJcbiAgICAgICAgYWNjW0l0ZW1OYW1lXSA9IHsgSXRlbU5hbWUsIElkLCBkZXNjcmlwdGlvbiwgdG90YWw6IDAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhY2NcclxuICB9LCB7fSkgOiBudWxsXHJcbiAgY29uc3QgcmVsYXRlZEl0ZW1QdXJjaGFzZXMyID0gW11cclxuICBpdGVtUHVyY2hhc2UuZmlsdGVyKChJdGVtKSA9PiBJdGVtLm1hbnVmYWN0dXJlcklEID09PSBpZCB8fCBpdGVtLmZpbmQoKHJvdzIpID0+IHJvdzIuc3RvcmVOYW1lID09PSBJdGVtLm1hbnVmYWN0dXJlcikpLm1hcCgoSXRlbSkgPT4gSXRlbS5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHBhcnNlRmxvYXQoaXRlbS5pdGVtUXR5KSA+PSAwIHx8IGl0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkubWFwKChyb3cpID0+IHsgcmVsYXRlZEl0ZW1QdXJjaGFzZXMyLnB1c2goeyAuLi5yb3csIGRhdGU6IEl0ZW0uaXRlbVB1cmNoYXNlRGF0ZSB9KSB9KSlcclxuXHJcbiAgY29uc3QgbmV3QXJyYXkyID0gc2VhcmNoNCAhPT0gJycgPyByZWxhdGVkSXRlbVB1cmNoYXNlczIuZmlsdGVyKChyb3cpID0+XHJcbiAgICAocm93Lml0ZW1OYW1lPy5pdGVtTmFtZSAmJiByb3cuaXRlbU5hbWUuaXRlbU5hbWUudG9TdHJpbmcoKS5pbmNsdWRlcyhzZWFyY2g0KSkgfHxcclxuICAgIChyb3cuaXRlbURlc2NyaXB0aW9uPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDQudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICAocm93Lm5ld0Rlc2NyaXB0aW9uPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaDQudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICBkYXlqcyhyb3cuZGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJykuaW5jbHVkZXMoc2VhcmNoNClcclxuICApIDogcmVsYXRlZEl0ZW1QdXJjaGFzZXMyXHJcblxyXG4gIGZ1bmN0aW9uIFJvdyhwcm9wcykge1xyXG4gICAgY29uc3QgeyByb3csIGluZGV4LCBmaWx0ZXJQYWlkIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b3RhbFZhbCA9IHJvdy50b3RhbFVTRCAhPT0gdW5kZWZpbmVkID8gcm93LnRvdGFsVVNEIDogcm93LnRvdGFsIHx8IDA7XHJcbiAgICBjb25zdCBwYWlkVmFsID0gKHJvdy5wYXltZW50cyB8fCBbXSkucmVkdWNlKChzdW0sIHApID0+IHN1bSArIChwLnRvdGFsVVNEIHx8IChwYXJzZUZsb2F0KHAuYW1vdW50IHx8IDApICsgKHBhcnNlRmxvYXQocC5hbW91bnRGQyB8fCAwKSAvIHBhcnNlRmxvYXQocC5yYXRlIHx8IDEpKSkpLCAwKTtcclxuICAgIGNvbnN0IHVucGFpZFZhbCA9IE1hdGgubWF4KDAsIHRvdGFsVmFsIC0gcGFpZFZhbCk7XHJcblxyXG4gICAgbGV0IGRpc3BsYXlUb3RhbCA9IHRvdGFsVmFsO1xyXG4gICAgaWYgKHJvdy5zdGF0dXM/LnRvTG93ZXJDYXNlKCkgPT09ICdwYXJ0aWFsbHktcGFpZCcpIHtcclxuICAgICAgaWYgKGZpbHRlclBhaWQgPT09ICdwYWlkJykge1xyXG4gICAgICAgIGRpc3BsYXlUb3RhbCA9IHBhaWRWYWw7XHJcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyUGFpZCA9PT0gJ3VucGFpZCcpIHtcclxuICAgICAgICBkaXNwbGF5VG90YWwgPSB1bnBhaWRWYWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPHRyIHN0eWxlPXt7ICcmID4gKic6IHsgYm9yZGVyQm90dG9tOiAndW5zZXQnIH0gfX0+XHJcbiAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9PlxyXG4gICAgICAgICAgICB7b3BlbiA/IDxLZXlib2FyZEFycm93VXAgLz4gOiA8c3Bhbj57aW5kZXggKyAxfTwvc3Bhbj59XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkIGFsaWduPVwibGVmdFwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+e2RheWpzKHJvdy5pdGVtUHVyY2hhc2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3RkPlxyXG4gICAgICAgICAgPHRkIGFsaWduPVwibGVmdFwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+e3Jvdy5pdGVtUHVyY2hhc2VOdW1iZXJ9PC90ZD5cclxuICAgICAgICAgIDx0ZCBhbGlnbj1cImxlZnRcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3cuc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICA8dGQgYWxpZ249XCJsZWZ0XCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT57cm93LnByb2plY3ROYW1lICE9PSB1bmRlZmluZWQgPyByb3cucHJvamVjdE5hbWUubmFtZSA6IHJvdy5kZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgPHRkIGFsaWduPVwibGVmdFwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+e2Rpc3BsYXlUb3RhbC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgIDx0ZCBhbGlnbj1cImxlZnRcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIlZpZXdcIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3BlblZpZXcocm93Ll9pZCl9PlxyXG4gICAgICAgICAgICAgICAgPFZpc2liaWxpdHlJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBwYWRkaW5nQm90dG9tOiAwLCBwYWRkaW5nVG9wOiAwIH19IGNvbFNwYW49ezl9PlxyXG4gICAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuXHJcbiAgICAgICAgICAgICAgPEJveCBzeD17eyBtYXJnaW46IDEgfX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgIC0tLVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGFyaWEtbGFiZWw9XCJjb2xsYXBzaWJsZSB0YWJsZVwiID5cclxuICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19Pkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlF0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlByaWNlKCQpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+QW1vdW50IFBhaWQoRkMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+UmF0ZSA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5BbW91bnQgUGFpZCgkKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlRvdGFsKCQpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcm93Lml0ZW1zLmZpbHRlcihyb3czID0+IHBhcnNlRmxvYXQocm93My5pdGVtUXR5KSA+IDAgfHwgcm93My5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKS5tYXAoKHJvdzMsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRlZFVuaXQgPSBpdGVtLmZpbmQoKEl0ZW0xKSA9PiBJdGVtMS5faWQgPT09IHJvdzMuaXRlbU5hbWU/Ll9pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtyb3czLmlkUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzMubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezh9IGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e3JvdzMubmV3RGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+e3JvdzMuaXRlbU5hbWU/Lml0ZW1OYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3czLml0ZW1EZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT57cm93My5pdGVtUXR5fSB7cmVsYXRlZFVuaXQgIT09IHVuZGVmaW5lZCA/IHJlbGF0ZWRVbml0LnVuaXQudG9VcHBlckNhc2UoKSA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PntwYXJzZUZsb2F0KHJvdzMuaXRlbVJhdGUpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5GQ3tyb3czLnRvdGFsQW1vdW50RkMgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQocm93My50b3RhbEFtb3VudEZDKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3czLlRhdXggIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQocm93My5UYXV4KS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiR7cGFyc2VGbG9hdChyb3czLnRvdGFsQW1vdW50KS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+e3JvdzMuZmNDb252ZXJ0VG9Vc2RUb3RhbCAhPT0gdW5kZWZpbmVkID8gcGFyc2VGbG9hdChyb3czLmZjQ29udmVydFRvVXNkVG90YWwpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW2ZpbHRlclBhaWQsIHNldEZpbHRlclBhaWRdID0gdXNlU3RhdGUoJ2FsbCcpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWx0ZXJDaGFuZ2UgPSAoc3RhdHVzKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJQYWlkKHN0YXR1cyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRBcnJheTEgPSBuZXdBcnJheTEuZmlsdGVyKChyb3cpID0+IHtcclxuICAgIGlmIChmaWx0ZXJQYWlkID09PSAnYWxsJykgcmV0dXJuIHRydWU7XHJcbiAgICBpZiAoZmlsdGVyUGFpZCA9PT0gJ3BhaWQnKSByZXR1cm4gcm93LnN0YXR1cyA9PT0gdW5kZWZpbmVkIHx8IHJvdy5zdGF0dXM/LnRvTG93ZXJDYXNlKCkgPT09ICdwYWlkJyB8fCByb3cuc3RhdHVzPy50b0xvd2VyQ2FzZSgpID09PSAncGFydGlhbGx5LXBhaWQnO1xyXG4gICAgaWYgKGZpbHRlclBhaWQgPT09ICd1bnBhaWQnKSByZXR1cm4gcm93LnN0YXR1cz8udG9Mb3dlckNhc2UoKSA9PT0gJ3VucGFpZCcgfHwgcm93LnN0YXR1cz8udG9Mb3dlckNhc2UoKSA9PT0gJ3BhcnRpYWxseS1wYWlkJztcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwYXlGYyA9IGZpbHRlcmVkQXJyYXkxLmZpbHRlcigocm93MSkgPT4gcm93MS5tYW51ZmFjdHVyZXJJRCA9PT0gaWQgfHwgcm93MS5tYW51ZmFjdHVyZXIgPT09IFN0b3JlTmFtZSkucmVkdWNlKChhY2MsIHJvdykgPT4ge1xyXG4gICAgY29uc3QgdG90YWxWYWwgPSByb3cudG90YWxVU0QgIT09IHVuZGVmaW5lZCA/IHJvdy50b3RhbFVTRCA6IHJvdy50b3RhbCB8fCAwO1xyXG4gICAgaWYgKHJvdy5zdGF0dXM/LnRvTG93ZXJDYXNlKCkgPT09ICdwYXJ0aWFsbHktcGFpZCcpIHtcclxuICAgICAgY29uc3QgcGFpZFZhbCA9IChyb3cucGF5bWVudHMgfHwgW10pLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyAocC50b3RhbFVTRCB8fCAocGFyc2VGbG9hdChwLmFtb3VudCB8fCAwKSArIChwYXJzZUZsb2F0KHAuYW1vdW50RkMgfHwgMCkgLyBwYXJzZUZsb2F0KHAucmF0ZSB8fCAxKSkpKSwgMCk7XHJcbiAgICAgIGlmIChmaWx0ZXJQYWlkID09PSAncGFpZCcpIHtcclxuICAgICAgICByZXR1cm4gYWNjICsgcGFpZFZhbDtcclxuICAgICAgfSBlbHNlIGlmIChmaWx0ZXJQYWlkID09PSAndW5wYWlkJykge1xyXG4gICAgICAgIHJldHVybiBhY2MgKyBNYXRoLm1heCgwLCB0b3RhbFZhbCAtIHBhaWRWYWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjICsgdG90YWxWYWw7XHJcbiAgfSwgMClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3VwcGxpZXIgSW5mb3JtYXRpb25cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL1N1cHBsaWVyQWRtaW5WaWV3Jyl9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGVNYWludGVuYW5jZSAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogMiB9fSA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsb2FkaW5nRGF0YSA/IDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Nob3cgPT09IDEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VwcGxpZXJOYW1lIG9uSWQ9e2lkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXIyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmQ6ICd3aGl0ZScgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/LmZpbHRlcihyb3cgPT4gcm93Ll9pZCA9PT0gaWQpPy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcyMHB4JyB9fT57cm93LnN0b3JlTmFtZS50b1VwcGVyQ2FzZSgpfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtvcGVuID8gJ2RlbW8tY3VzdG9taXplZC1tZW51JyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuID8gJ3RydWUnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUVsZXZhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEtleWJvYXJkQXJyb3dEb3duIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICdncmF5JywgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLWN1c3RvbWl6ZWQtbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnVMaXN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogJ2RlbW8tY3VzdG9taXplZC1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17RmFkZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9TdXBwbGllckZvcm1VcGRhdGUvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5FZGl0PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAgIC8qIDxNZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9JdGVtRm9ybUNsb25lLyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJyBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGdhcDonMjBweCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGNvbG9yOidncmF5J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsZUNvcHkvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5DbG9uZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93KDIpfT4gPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT5Db21tZW50czwvc3Bhbj4gPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3coMyl9PiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19Pkhpc3Rvcnk8L3NwYW4+PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGJvcmRlckJvdHRvbTogMSwgYm9yZGVyQ29sb3I6ICdkaXZpZGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGFiIEFQSSB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk92ZXJ2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkluLVN1bW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSXRlbS1TdW1tYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjFcIiBzeD17eyBoZWlnaHQ6ICc1MDBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNXB4JywgcGFkZGluZzogJzIwcHgnLCBmb250U2l6ZTogJzIwcHgnLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249J2xlZnQnIHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19PjxzcGFuID5OYW1lPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT57cm93LnN1cHBsaWVyTmFtZS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGFsaWduPSdsZWZ0JyBzdHlsZT17eyBoZWlnaHQ6ICczMHB4JyB9fT48c3BhbiA+U3RvcmU8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19Pntyb3cuc3RvcmVOYW1lLnRvVXBwZXJDYXNlKCl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249J2xlZnQnIHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19PjxzcGFuID5QaG9uZSAxPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT57cm93LmN1c3RvbWVyUGhvbmUxLnRvVXBwZXJDYXNlKCl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249J2xlZnQnIHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19PjxzcGFuID5QaG9uZSAyPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT48c3Bhbj57cm93LmN1c3RvbWVyUGhvbmUyLnRvVXBwZXJDYXNlKCl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249J2xlZnQnIHN0eWxlPXt7IGhlaWdodDogJzMwcHgnIH19PjxzcGFuID5BZGRyZXNzPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT48c3Bhbj57cm93LmFkZHJlc3MudG9VcHBlckNhc2UoKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj0nbGVmdCcgc3R5bGU9e3sgaGVpZ2h0OiAnMzBweCcgfX0+PHNwYW4gPkRlc2NyaXB0aW9uPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT48c3Bhbj57cm93LmRlc2NyaXB0aW9uLnRvVXBwZXJDYXNlKCl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjJcIiBzeD17eyBoZWlnaHQ6ICc1MDBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAnbGVmdCcsIHBhZGRpbmc6ICcxMHB4JywgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjb2xTcGFuPXsyfT5Ub3RhbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjb2xTcGFuPXsyfSBzeD17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3BheUZjPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDaGFuZ2UoJ2FsbCcpfT5BbGw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNoYW5nZSgncGFpZCcpfT5QYWlkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDaGFuZ2UoJ3VucGFpZCcpfT5VbnBhaWQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzgwJScsIG1hcmdpbkJvdHRvbTogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+UmVmZXJlbmNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PlJlYXNvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PiBBY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRBcnJheTEuZmlsdGVyKChyb3cxKSA9PiByb3cxLm1hbnVmYWN0dXJlcklEID09PSBpZCB8fCByb3cxLm1hbnVmYWN0dXJlciA9PT0gcm93LnN0b3JlTmFtZSkubWFwKChyb3cxLCBpKSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cga2V5PXtyb3cxLl9pZH0gcm93PXtyb3cxfSBpbmRleD17aX0gZmlsdGVyUGFpZD17ZmlsdGVyUGFpZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT0nMycgc3g9e3sgaGVpZ2h0OiAnNTAwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nc2VhcmNoNCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2g0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoNChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2Vjb25kVGFibGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzgwJScsIG1hcmdpbkJvdHRvbTogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+UXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5QcmljZSgkKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+QW1vdW50IFBhaWQoRkMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5SYXRlIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+QW1vdW50IFBhaWQoJCk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlRvdGFsKCQpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5Mj8ubWFwKChyb3czLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRlZFVuaXQgPSBpdGVtLmZpbmQoKEl0ZW0xKSA9PiBJdGVtMS5faWQgPT09IHJvdzMuaXRlbU5hbWUuX2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzE1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UaHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkPXtyb3czLml0ZW1OYW1lPy5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxEYXRhPXtyb3czLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUeXBlPXtyb3czLmNvbnRlbnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAnNXB4JywgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAnMjBweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93My5pdGVtTmFtZS5pdGVtTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogJzExcHgnLCBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3czLml0ZW1EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+e2RheWpzKHJvdzMuZGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT57cm93My5pdGVtUXR5fSB7cmVsYXRlZFVuaXQgIT09IHVuZGVmaW5lZCA/IHJlbGF0ZWRVbml0LnVuaXQudG9VcHBlckNhc2UoKSA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+e3BhcnNlRmxvYXQocm93My5pdGVtUmF0ZSkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+RkN7cm93My50b3RhbEFtb3VudEZDICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHJvdzMudG90YWxBbW91bnRGQykudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3czLlRhdXggIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQocm93My5UYXV4KS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+JHtwYXJzZUZsb2F0KHJvdzMudG90YWxBbW91bnQpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19Pntyb3czLmZjQ29udmVydFRvVXNkVG90YWwgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQocm93My5mY0NvbnZlcnRUb1VzZFRvdGFsKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYkNvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93ID09PSAyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q09NTUVOVFM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdygxKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0RWRpdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInIH19IHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nY29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nY29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzM1NXB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0NvbW1lbnRzMS5tYXAoKEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtJdGVtLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0l0ZW0uZGF0ZUNvbW1lbnQgPyBkYXlqcyhJdGVtLmRhdGVDb21tZW50KS5mb3JtYXQoJ0REL01NJykgOiAnJ30ge0l0ZW0uQ29tbWVudEluZm8ucGVyc29uICsgJzogJyArIEl0ZW0uQ29tbWVudEluZm8ucmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2hvdyA9PT0gMyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhJU1RPUlk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93KDEpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc1MThweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5maWx0ZXIoKHJvdykgPT4gcm93Ll9pZCA9PT0gaWQpLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LkNyZWF0ZXMgIT09IHVuZGVmaW5lZCA/IDxzcGFuPntyb3cuQ3JlYXRlcy5wZXJzb24gKyAnIG9uICcgKyByb3cuQ3JlYXRlcy5kYXRlQ29tbWVudH06IHtyb3cuQ3JlYXRlcy5pdGVtfTwvc3Bhbj4gOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Jvdy5wZXJzb24gKyAnIG9uICcgKyBkYXlqcyhyb3cuZGF0ZU5vdGlmaWNhdGlvbikuZm9ybWF0KCdERC9NTU1NJyl9OiB7cm93LnJlYXNvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBGYWlsZWQgdG8gU2F2ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlblZpZXd9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VWaWV3fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDkwMCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VWaWV3fSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbVB1cmNoYXNlVmlldyAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbVB1cmNoYXNlVmlldy5DcmVhdGUucGVyc29ufSA8L3NwYW4+PHNwYW4+SVAte2l0ZW1QdXJjaGFzZVZpZXcuaXRlbVB1cmNoYXNlTnVtYmVyfTwvc3Bhbj4gb24gPHNwYW4+e2l0ZW1QdXJjaGFzZVZpZXcuQ3JlYXRlLmRhdGVDb21tZW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInIH19IHNwYWNpbmc9ezJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGhlaWdodDogNjAwLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkV4cGVuc2UgRGF0ZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PntkYXlqcyhpdGVtUHVyY2hhc2VWaWV3Lml0ZW1QdXJjaGFzZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZXNjcmlwdGlvbjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PntpdGVtUHVyY2hhc2VWaWV3LnByb2plY3ROYW1lICE9PSB1bmRlZmluZWQgPyBpdGVtUHVyY2hhc2VWaWV3LnByb2plY3ROYW1lLm5hbWUgOiBpdGVtUHVyY2hhc2VWaWV3LmRlc2NyaXB0aW9ufTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5SZWZlcmVuY2U8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXszfT57aXRlbVB1cmNoYXNlVmlldy5tYW51ZmFjdHVyZXIgKyAnIC8gJyArIGl0ZW1QdXJjaGFzZVZpZXcubWFudWZhY3R1cmVyTnVtYmVyfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Ob3RlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17M30+e2l0ZW1QdXJjaGFzZVZpZXcubm90ZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBzeD17eyBtYXhIZWlnaHQ6IDQwMCwgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgYXJpYS1sYWJlbD1cImNvbGxhcHNpYmxlIHRhYmxlXCIgc3RpY2t5SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+IzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+SXRlbTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGVzY3JpcHRpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlF0eTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UHJpY2UoJCk8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkFtb3VudCBQYWlkKEZDKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UmF0ZSA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkFtb3VudCBQYWlkKCQpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Ub3RhbCgkKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVB1cmNoYXNlVmlldy5pdGVtcy5maWx0ZXIocm93ID0+IHBhcnNlRmxvYXQocm93Lml0ZW1RdHkpID4gMCkubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZFJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCA/IHsgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsIGNvbG9yOiAnd2hpdGUnIH0gOiBudWxsfT57aSArIDF9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCA/IHsgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsIGNvbG9yOiAnd2hpdGUnIH0gOiBudWxsfT57cm93Lml0ZW1OYW1lLml0ZW1OYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXtpZCA9PT0gcm93Lml0ZW1OYW1lPy5faWQgPyB7IGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLCBjb2xvcjogJ3doaXRlJyB9IDogbnVsbH0+e3Jvdy5pdGVtRGVzY3JpcHRpb259PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCA/IHsgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsIGNvbG9yOiAnd2hpdGUnIH0gOiBudWxsfT57cm93Lml0ZW1RdHl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCA/IHsgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsIGNvbG9yOiAnd2hpdGUnIH0gOiBudWxsfT57cGFyc2VGbG9hdChyb3cuaXRlbVJhdGUpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17aWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkID8geyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJywgY29sb3I6ICd3aGl0ZScgfSA6IG51bGx9PkZDe3Jvdy50b3RhbEFtb3VudEZDICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHJvdy50b3RhbEFtb3VudEZDKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXtpZCA9PT0gcm93Lml0ZW1OYW1lPy5faWQgPyB7IGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLCBjb2xvcjogJ3doaXRlJyB9IDogbnVsbH0+e3Jvdy5UYXV4ICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHJvdy5UYXV4KS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXtpZCA9PT0gcm93Lml0ZW1OYW1lPy5faWQgPyB7IGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLCBjb2xvcjogJ3doaXRlJyB9IDogbnVsbH0+JHtwYXJzZUZsb2F0KHJvdy50b3RhbEFtb3VudCkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXtpZCA9PT0gcm93Lml0ZW1OYW1lPy5faWQgPyB7IGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLCBjb2xvcjogJ3doaXRlJyB9IDogbnVsbH0+e3Jvdy5mY0NvbnZlcnRUb1VzZFRvdGFsICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHJvdy5mY0NvbnZlcnRUb1VzZFRvdGFsKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXsyfT5Ub3RhbDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezJ9IHN4PXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5GQ3tpdGVtUHVyY2hhc2VWaWV3LnRvdGFsRkMgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQoaXRlbVB1cmNoYXNlVmlldy50b3RhbEZDKS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezJ9IHN4PXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT4ke2l0ZW1QdXJjaGFzZVZpZXcudG90YWwudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezJ9IHN4PXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT4ke2l0ZW1QdXJjaGFzZVZpZXcudG90YWxVU0QgIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQoaXRlbVB1cmNoYXNlVmlldy50b3RhbFVTRCkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1cHBsaWVyVmlld0luZm9ybWF0aW9uXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0T3V0bGluZWQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uL2FwaUNvbmZpZyc7XG5cbmNvbnN0IEl0ZW1UaHVtYm5haWwgPSAoeyBpdGVtSWQsIGluaXRpYWxEYXRhLCBpbml0aWFsVHlwZSB9KSA9PiB7XG4gIGNvbnN0IFtzcmMsIHNldFNyY10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoSW1hZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAvLyAxLiBDaGVjayBmb3IgaW5pdGlhbERhdGEgKHBhc3NlZCBmcm9tIHNlYXJjaC9zaG9wKVxuICAgICAgaWYgKGluaXRpYWxEYXRhICYmIGluaXRpYWxUeXBlICYmIGluaXRpYWxEYXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGluaXRpYWxUeXBlICE9PSBcInVuZGVmaW5lZFwiICYmIGluaXRpYWxEYXRhICE9PSBcIm51bGxcIikge1xuICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxEYXRhID09PSAnc3RyaW5nJyAmJiBpbml0aWFsRGF0YS5sZW5ndGggPiA1MCkge1xuICAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGFscmVhZHkgYSBkYXRhIFVSTFxuICAgICAgICAgICBpZiAoaW5pdGlhbERhdGEuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgICBzZXRTcmMoaW5pdGlhbERhdGEpO1xuICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRTcmMoYGRhdGE6JHtpbml0aWFsVHlwZX07YmFzZTY0LCR7aW5pdGlhbERhdGF9YCk7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxEYXRhLmRhdGEpIHtcbiAgICAgICAgICAgLy8gSGFuZGxlIGJ1ZmZlciBvYmplY3QgaWYgaXQncyBub3QgY29udmVydGVkIHRvIHN0cmluZyB5ZXRcbiAgICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoaW5pdGlhbERhdGEuZGF0YSk7XG4gICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBpbml0aWFsVHlwZSB9KTtcbiAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHNldFNyYyhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyAyLiBGYWxsYmFjayB0byBmZXRjaCBpZiBubyBpbml0aWFsIGRhdGEgb3IgaWYgaXQgd2FzIGludmFsaWRcbiAgICAgIGlmICghaXRlbUlkIHx8IGl0ZW1JZCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBpdGVtSWQgPT09IFwibnVsbFwiKSB7XG4gICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaXRlbS8ke2l0ZW1JZH1gKTtcbiAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEgJiYgcmVzLmRhdGEuZGF0YS5kYXRhKSB7XG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkocmVzLmRhdGEuZGF0YS5kYXRhLmRhdGEpO1xuICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiByZXMuZGF0YS5kYXRhLmNvbnRlbnRUeXBlIH0pO1xuICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHNldFNyYyhyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgb25saW5lIGltYWdlOlwiLCBlcnIpO1xuICAgICAgICBzZXRTcmMobnVsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaEltYWdlKCk7XG4gIH0sIFtpdGVtSWQsIGluaXRpYWxEYXRhLCBpbml0aWFsVHlwZV0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8QXZhdGFyXG4gICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICBzcmM9e3NyY31cbiAgICAgIHN4PXt7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MCwgYmFja2dyb3VuZENvbG9yOiAnI2YwZjBmMCcsIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyB9fVxuICAgID5cbiAgICAgIHshc3JjICYmIDxTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gc3g9e3sgZm9udFNpemU6IDQwLCBjb2xvcjogJyM5OTknIH19IC8+fVxuICAgIDwvQXZhdGFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVRodW1ibmFpbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGFibGUiLCJJY29uQnV0dG9uIiwic3R5bGVkIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJDaGVja2JveCIsIlRhYmxlQ29udGFpbmVyIiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiTW9kYWwiLCJCb3giLCJHcmlkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiTWVudUl0ZW0iLCJCYWNrZHJvcCIsIkF1dG9jb21wbGV0ZSIsIlRleHRGaWVsZCIsIlRhYnMiLCJUYWIiLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkFkZCIsIkNsb3NlIiwiT3V0bGV0IiwiTmF2TGluayIsIkxpbmsiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJWaWV3VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiU3VwcGxpZXJOYW1lIiwiX3JlZjMiLCJvbklkIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaXRlbSIsIlNldEl0ZW1zIiwiYXBpVXJsIiwiZmV0Y2hJdGVtIiwiX3JlZjQiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsImRhdGEiLCJyZXZlcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlU2hvdyIsImUiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInZhbHVlIiwic2V0VmFsdWUiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInZhbHVlMiIsInNldFZhbHVlMiIsInNlbGVjdGVkSW5kZXgiLCJmaW5kSW5kZXgiLCJyb3ciLCJfaWQiLCJoYW5kbGVDaGFuZ2UiLCJuZXdWYWx1ZSIsImhhbmRsZUNoYW5nZTIiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsInNlYXJjaCIsInNldFNlYXJjaCIsImhhbmRsZVNlYXJjaCIsInRhcmdldCIsIm5ld0FycmF5IiwiZmlsdGVyIiwic3VwcGxpZXJOYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN0b3JlTmFtZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJ2YXJpYW50Iiwib25DbGljayIsImhlaWdodCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dZIiwid2lkdGgiLCJvbkNoYW5nZSIsIm9yaWVudGF0aW9uIiwic3giLCJtYXAiLCJpbmRleCIsImtleSIsImxhYmVsIiwidG9VcHBlckNhc2UiLCJjb21wb25lbnQiLCJ0byIsImJvcmRlclJhZGl1cyIsImNvbnRhaW5lciIsInNwYWNpbmciLCJ4cyIsImlkIiwidGl0bGUiLCJwbGFjZW1lbnQiLCJwb3NpdGlvbiIsImZsb2F0IiwiU2lkZU1haW50ZW5hbmNlIiwiU2VhcmNoSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiRm9ybUxhYmVsIiwiUmFkaW9Hcm91cCIsIkZvcm1Db250cm9sTGFiZWwiLCJSYWRpbyIsIklucHV0IiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiRmFkZSIsIkJ1dHRvbiIsIk1lbnUiLCJEaXZpZGVyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ29sbGFwc2UiLCJBdmF0YXIiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiVmlzaWJpbGl0eUljb24iLCJFZGl0SWNvbiIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsInY0IiwiTG9hZGVyIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIktleWJvYXJkQXJyb3dVcCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJTeW5jIiwiZGF5anMiLCJBcnJvd0JhY2siLCJLZXlib2FyZEFycm93RG93biIsIlRhYkNvbnRleHQiLCJUYWJMaXN0IiwiVGFiUGFuZWwiLCJQaWVDaGFydCIsInBpZUFyY0xhYmVsQ2xhc3NlcyIsInVzZURyYXdpbmdBcmVhIiwiTWVzc2FnZUFkbWluVmlldyIsIkZpbGVDb3B5IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJEZWxldGVJY29uIiwiRGF0ZVBpY2tlciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiRGVtb0NvbnRhaW5lciIsIkFkYXB0ZXJEYXlqcyIsIlNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiIsIkl0ZW1UaHVtYm5haWwiLCJwYWxldHRlIiwiRWRpdFRvb2x0aXAiLCJfZXhjbHVkZWQyIiwiRGVsZXRlVG9vbHRpcCIsIl9yZWY1IiwiX2V4Y2x1ZGVkMyIsIl9yZWY2IiwiQmxhY2tUb29sdGlwIiwiX3JlZjciLCJfZXhjbHVkZWQ0IiwiX3JlZjgiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjkiLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjAiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwiYnJlYWtwb2ludHMiLCJ1cCIsInNpemUiLCJTdHlsZWRUZXh0IiwiX3JlZjEiLCJmaWxsIiwidGV4dCIsInByaW1hcnkiLCJ0ZXh0QW5jaG9yIiwiZG9taW5hbnRCYXNlbGluZSIsIlBpZUNlbnRlckxhYmVsIiwiX3JlZjEwIiwiY2hpbGRyZW4iLCJfdXNlRHJhd2luZ0FyZWEiLCJ4IiwieSIsIlN1cHBsaWVyVmlld0luZm9ybWF0aW9uIiwiX2l0ZW0kZmlsdGVyIiwiX3VzZVBhcmFtcyIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWYxMSIsIk5hbWUiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZ3JhbnRBY2Nlc3MiLCJzZXRHcmFudEFjY2VzcyIsImZldGNoTnVtYmVyIiwiX3JlZjEyIiwiX3JlcyRkYXRhIiwidXNlcklEIiwibW9kdWxlcyIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJTdG9yZU5hbWUiLCJTZXRTdG9yZSIsIl9yZWYxMyIsIl9yZXMkZGF0YTIiLCJfcmVzJGRhdGEzIiwiaXRlbVB1cmNoYXNlIiwic2V0SXRlbVB1cmNoYXNlIiwiaGFuZGxlRmV0Y2giLCJfcmVmMTQiLCJyZXNJdGVtUHVyY2hhc2UiLCJmb3JtYXREYXRlIiwiZmlsdGVyZWREYXRhIiwic29tZSIsImkiLCJtYW51ZmFjdHVyZXJJRCIsIm1hbnVmYWN0dXJlciIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIkJvb2xlYW4iLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlTWVudSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiQ29tbWVudHMxIiwic2V0Q29tbWVudHMiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2Iiwibm90aWZpY2F0aW9uIiwic2V0Tm90aWZpY2F0aW9uIiwiZmV0Y2hDb21tZW50IiwiX3JlZjE1IiwiX3JlcyRkYXRhNCIsIl9yZXNOb3RpZmljYXRpb24kZGF0YSIsInJlc3AiLCJDb21tZW50SW5mbyIsImlkSW5mbyIsInJlc05vdGlmaWNhdGlvbiIsInBlcnNvbiIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImxvYWRpbmdPcGVuTW9kYWxQaWN0dXJlIiwic2V0TG9hZGluZ09wZW5Nb2RhbFBpY3R1cmUiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwibG9hZGluZ09wZW5Nb2RhbERlbGV0ZSIsInNldExvYWRpbmdPcGVuTW9kYWxEZWxldGUiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZU9wZW5QaWN0dXJlIiwiaGFuZGxlT3BlbkRlbGV0ZSIsImhhbmRsZUNsb3NlUGljdHVyZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNsb3NlRXJyb3IiLCJkYXRlQ29tbWVudCIsIkRhdGUiLCJub3ciLCJoYW5kbGVTdWJtaXRFZGl0IiwiX3JlZjE2IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwibmV3RGF0YSIsIl94IiwiX1JlYWN0JHVzZVN0YXRlMyIsIl9SZWFjdCR1c2VTdGF0ZTQiLCJ2YWx1ZTMiLCJzZXRWYWx1ZTMiLCJyZXN1bHQiLCJoYW5kbGVDaGFuZ2UzIiwiY2hhbmdlVmFsdWUiLCJzZXRJdGVtIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJzZWFyY2g0Iiwic2V0U2VhcmNoNCIsIml0ZW1QdXJjaGFzZU51bWJlciIsInRvU3RyaW5nIiwicHJvamVjdE5hbWUiLCJuYW1lIiwibWFudWZhY3R1cmVyTnVtYmVyIiwiaXRlbXMiLCJJdGVtIiwiX3JlZjE3IiwiaXRlbU5hbWUiLCJ1bmRlZmluZWQiLCJpdGVtRGVzY3JpcHRpb24iLCJuZXdEZXNjcmlwdGlvbiIsIml0ZW1QdXJjaGFzZURhdGUiLCJmb3JtYXQiLCJfUmVhY3QkdXNlU3RhdGU1IiwiX1JlYWN0JHVzZVN0YXRlNiIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsIm9wZW5WaWV3Iiwic2V0T3BlblZpZXciLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwiaWRWaWV3Iiwic2V0SWRWaWV3IiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsIml0ZW1QdXJjaGFzZVZpZXciLCJzZXRJdGVtUHVyY2hhc2VWaWV3IiwiaGFuZGxlT3BlblZpZXciLCJoYW5kbGVDbG9zZVZpZXciLCJmZXRjaERhdGEyIiwiX3JlZjE4IiwibG9nIiwibmV3QXJyYXkxIiwic3RhdHVzIiwiX3JlZjE5IiwicmVsYXRlZEl0ZW1QdXJjaGFzZXMiLCJsZW5ndGgiLCJyZWR1Y2UiLCJhY2MiLCJwYXJzZUZsb2F0IiwiaXRlbVF0eSIsImZvckVhY2giLCJfaXRlbSRpdGVtTmFtZSIsIkl0ZW1OYW1lIiwiSWQiLCJ0b3RhbCIsInJlbGF0ZWRJdGVtUHVyY2hhc2VzMiIsImZpbmQiLCJyb3cyIiwicHVzaCIsImRhdGUiLCJuZXdBcnJheTIiLCJfcm93JGl0ZW1OYW1lIiwiX3JvdyRpdGVtRGVzY3JpcHRpb24iLCJfcm93JG5ld0Rlc2NyaXB0aW9uIiwiUm93IiwiX3JvdyRzdGF0dXMiLCJmaWx0ZXJQYWlkIiwiX1JlYWN0JHVzZVN0YXRlNyIsIl9SZWFjdCR1c2VTdGF0ZTgiLCJzZXRPcGVuIiwidG90YWxWYWwiLCJ0b3RhbFVTRCIsInBhaWRWYWwiLCJwYXltZW50cyIsInN1bSIsInAiLCJhbW91bnQiLCJhbW91bnRGQyIsInJhdGUiLCJ1bnBhaWRWYWwiLCJNYXRoIiwibWF4IiwiZGlzcGxheVRvdGFsIiwiRnJhZ21lbnQiLCJib3JkZXJCb3R0b20iLCJ0ZXh0QWxpZ24iLCJib3JkZXIiLCJjdXJzb3IiLCJhbGlnbiIsInRvRml4ZWQiLCJyZXBsYWNlIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJjb2xTcGFuIiwiaW4iLCJ0aW1lb3V0IiwidW5tb3VudE9uRXhpdCIsIm1hcmdpbiIsImd1dHRlckJvdHRvbSIsInJvdzMiLCJfcm93MyRpdGVtTmFtZTIiLCJyZWxhdGVkVW5pdCIsIkl0ZW0xIiwiX3JvdzMkaXRlbU5hbWUiLCJpZFJvdyIsImZvbnRXZWlnaHQiLCJ1bml0IiwiaXRlbVJhdGUiLCJ0b3RhbEFtb3VudEZDIiwiVGF1eCIsInRvdGFsQW1vdW50IiwiZmNDb252ZXJ0VG9Vc2RUb3RhbCIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJzZXRGaWx0ZXJQYWlkIiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiZmlsdGVyZWRBcnJheTEiLCJfcm93JHN0YXR1czIiLCJfcm93JHN0YXR1czMiLCJfcm93JHN0YXR1czQiLCJfcm93JHN0YXR1czUiLCJwYXlGYyIsInJvdzEiLCJfcm93JHN0YXR1czYiLCJwciIsImVkZ2UiLCJtYXJnaW5SaWdodCIsIm5vV3JhcCIsImZsZXhHcm93Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwibW9kZSIsImdyZXkiLCJtYXhXaWR0aCIsIm10IiwiYmFja2dyb3VuZCIsImRpc2FibGVFbGV2YXRpb24iLCJlbmRJY29uIiwiTWVudUxpc3RQcm9wcyIsIm9uQ2xvc2UiLCJUcmFuc2l0aW9uQ29tcG9uZW50IiwiZ2FwIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJjdXN0b21lclBob25lMSIsImN1c3RvbWVyUGhvbmUyIiwiX3JvdzMkaXRlbU5hbWUzIiwiaXRlbUlkIiwiaW5pdGlhbERhdGEiLCJpbml0aWFsVHlwZSIsImNvbnRlbnRUeXBlIiwiZmxleERpcmVjdGlvbiIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJtdWx0aWxpbmUiLCJyb3dzIiwidHlwZSIsIkNyZWF0ZXMiLCJkYXRlTm90aWZpY2F0aW9uIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJDcmVhdGUiLCJub3RlIiwibWF4SGVpZ2h0Iiwic3RpY2t5SGVhZGVyIiwiX3JvdyRpdGVtTmFtZTIiLCJfcm93JGl0ZW1OYW1lMyIsIl9yb3ckaXRlbU5hbWU0IiwiX3JvdyRpdGVtTmFtZTUiLCJfcm93JGl0ZW1OYW1lNiIsIl9yb3ckaXRlbU5hbWU3IiwiX3JvdyRpdGVtTmFtZTgiLCJfcm93JGl0ZW1OYW1lOSIsIl9yb3ckaXRlbU5hbWUwIiwidG90YWxGQyIsInNyYyIsInNldFNyYyIsImZldGNoSW1hZ2UiLCJzdGFydHNXaXRoIiwiYnVmZmVyIiwiVWludDhBcnJheSIsImJsb2IiLCJCbG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlYWRBc0RhdGFVUkwiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9