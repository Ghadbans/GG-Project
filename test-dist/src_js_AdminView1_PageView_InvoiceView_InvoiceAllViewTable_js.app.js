"use strict";
exports.id = "src_js_AdminView1_PageView_InvoiceView_InvoiceAllViewTable_js";
exports.ids = ["src_js_AdminView1_PageView_InvoiceView_InvoiceAllViewTable_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/WarningAmber.js"
/*!**********************************************************!*\
  !*** ./node_modules/@mui/icons-material/WarningAmber.js ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


"use client";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));
var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _default = exports["default"] = (0, _createSvgIcon.default)([/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12 5.99 19.53 19H4.47zM12 2 1 21h22z"
}, "0"), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M13 16h-2v2h2zm0-6h-2v5h2z"
}, "1")], 'WarningAmber');

/***/ },

/***/ "./node_modules/@mui/icons-material/esm/Add.js"
/*!*****************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Add.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), 'Add'));

/***/ },

/***/ "./src/js/AdminView1/PageView/InvoiceView/InvoiceAllViewTable.js"
/*!***********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/InvoiceView/InvoiceAllViewTable.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/ConfirmDeleteModal */ "./src/js/component/ConfirmDeleteModal.js");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_23__);
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
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












var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
function InvoiceAllViewTable() {
  {/** Get Invoice */}
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    invoice = _useState2[0],
    setInvoice = _useState2[1];
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/invoice");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_20__["default"].get(apiUrl).then(res => {
      // Handle the response data here
      setInvoice(res.data.data);
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  }, []);
  {/** End Get Invoice */}
  {/** Get Expenses */}
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    expenses = _useState4[0],
    setExpenses = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_20__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/dailyexpense")).then(res => {
      // Handle the response data here
      setExpenses(res.data.data);
    }).catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  }, []);
  {/** End Get Expenses */}
  {/** Convert Date */}
  {/** Convert Date */}
  {/** Delete Function */}
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    openConfirm = _useState6[0],
    setOpenConfirm = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    itemToDelete = _useState8[0],
    setItemToDelete = _useState8[1];
  var handleDeleteAttempt = (id, invoiceNumber) => {
    setItemToDelete({
      id,
      invoiceNumber
    });
    setOpenConfirm(true);
  };
  var handleFinalDelete = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(function* () {
      if (!itemToDelete) return;
      var id = itemToDelete.id;
      try {
        var InvDelete = invoice.filter(row => row._id === id);
        var idRef = expenses === null || expenses === void 0 ? void 0 : expenses.filter(row => InvDelete === null || InvDelete === void 0 ? void 0 : InvDelete.find(name => {
          return name.invoiceNumber === row.referenceNumber;
        })).map(row => row._id);
        var RefId = idRef.toString();
        if (RefId) {
          yield axios__WEBPACK_IMPORTED_MODULE_20__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/delete-dailyexpense/").concat(RefId));
        }
        var res = yield axios__WEBPACK_IMPORTED_MODULE_20__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__.ENDPOINT_URL, "/delete-invoice/").concat(id));
        if (res) {
          alert("Invoice deleted successfully");
          setInvoice(invoice.filter(inv => inv._id !== id));
        }
      } catch (error) {
        console.error(error);
      }
      setOpenConfirm(false);
      setItemToDelete(null);
    });
    return function handleFinalDelete() {
      return _ref7.apply(this, arguments);
    };
  }();
  {/** End Delete Function */}
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "allTableContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    to: "/InvoiceForm",
    className: "ItemsName",
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: "btnCustomer"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    style: {
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center"
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center"
  }, "Invoice #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center"
  }, "Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center"
  }, "Due Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center"
  }, "Invoice Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "left"
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, invoice === null || invoice === void 0 ? void 0 : invoice.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center"
  }, dayjs__WEBPACK_IMPORTED_MODULE_23___default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center"
  }, row.invoiceNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, row.customerName.customerFullName ? row.customerName.customerFullName : row.customerName.companyName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: row.status === "Draft" ? "gray" : row.status === "Sent" ? "blue" : row.status === "Decline" ? "red" : row.status === "Pending" ? "green" : "black"
  }, row.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center"
  }, dayjs__WEBPACK_IMPORTED_MODULE_23___default()(row.invoiceDueDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    "data-prefix": true
  }, "$"), " ", row.subTotal), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    to: "/InvoiceViewAdminAll/".concat(row._id),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "View"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      display: 'flex',
      gap: '10px',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
    title: "Edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
    title: "Delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => handleDeleteAttempt(row._id, row.invoiceNumber)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  }))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    open: openConfirm,
    handleClose: () => setOpenConfirm(false),
    handleDelete: handleFinalDelete,
    itemName: itemToDelete ? "Invoice #".concat(itemToDelete.invoiceNumber) : ''
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvoiceAllViewTable);

/***/ },

/***/ "./src/js/component/ConfirmDeleteModal.js"
/*!************************************************!*\
  !*** ./src/js/component/ConfirmDeleteModal.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_icons_material_WarningAmber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/WarningAmber */ "./node_modules/@mui/icons-material/WarningAmber.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;



var style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
  borderTop: '8px solid #d32f2f' // Red warning border
};
var ConfirmDeleteModal = _ref => {
  var open = _ref.open,
    handleClose = _ref.handleClose,
    handleDelete = _ref.handleDelete,
    itemName = _ref.itemName;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    confirmText = _useState2[0],
    setConfirmText = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isDisabled = _useState4[0],
    setIsDisabled = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (confirmText === 'DELETE') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [confirmText]);
  var onConfirm = () => {
    handleDelete();
    setConfirmText('');
    handleClose();
  };
  var onClose = () => {
    setConfirmText('');
    handleClose();
    handleClose();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: open,
    onClose: onClose,
    "aria-labelledby": "confirm-delete-title",
    "aria-describedby": "confirm-delete-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "confirm-delete-title",
    variant: "h5",
    component: "h2",
    sx: {
      display: 'flex',
      alignItems: 'center',
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_WarningAmber__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      mr: 1
    }
  }), " Confirm Deletion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 2,
    sx: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: onClose,
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1",
    sx: {
      mt: 2,
      mb: 1
    }
  }, "Are you sure you want to delete ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, itemName || 'this record'), "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body2",
    color: "text.secondary",
    sx: {
      mb: 3
    }
  }, "This action is irreversible and may affect linked data.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body2",
    sx: {
      mb: 1,
      fontWeight: 'medium'
    }
  }, "Please type ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, "DELETE"), " to confirm:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    size: "small",
    variant: "outlined",
    placeholder: "Type DELETE here",
    value: confirmText,
    onChange: e => setConfirmText(e.target.value),
    autoFocus: true,
    error: confirmText !== '' && confirmText !== 'DELETE'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    sx: {
      mt: 3,
      display: 'flex',
      gap: 2,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: onClose,
    variant: "outlined",
    sx: {
      color: 'gray',
      borderColor: 'gray',
      '&:hover': {
        borderColor: '#202a5a',
        color: '#202a5a'
      }
    }
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: onConfirm,
    variant: "contained",
    disabled: isDisabled,
    sx: {
      bgcolor: '#d32f2f',
      '&:hover': {
        bgcolor: '#b71c1c'
      },
      '&:disabled': {
        bgcolor: '#ef9a9a',
        color: 'white'
      }
    }
  }, "Delete Irreversibly")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmDeleteModal);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfSW52b2ljZVZpZXdfSW52b2ljZUFsbFZpZXdUYWJsZV9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiOztBQUVBLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUF1QjtBQUMzRSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7QUFDN0MsZUFBZSxrQkFBZTtBQUM5QjtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUMseUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxTQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05WLENBQWtEO0FBQ3FCO0FBQzlDO0FBQ21DO0FBQ1o7QUFDSTtBQUNEO0FBQ3lGO0FBQy9FO0FBQ25DO0FBQ3dCO0FBQ1I7QUFDaEI7QUFHMUIsSUFBTTBCLGFBQWEsR0FBR2YsMERBQU0sQ0FBQ2dCLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNqRC9CLDBEQUFBLENBQUNvQiw4REFBTyxFQUFBYSxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU9qQiw4REFBYyxDQUFDa0IsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUs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cGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9XYXJuaW5nQW1iZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BZGQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0ludm9pY2VWaWV3L0ludm9pY2VBbGxWaWV3VGFibGUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvQ29uZmlybURlbGV0ZU1vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoWy8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0xMiA1Ljk5IDE5LjUzIDE5SDQuNDd6TTEyIDIgMSAyMWgyMnpcIlxufSwgXCIwXCIpLCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTMgMTZoLTJ2Mmgyem0wLTZoLTJ2NWgyelwiXG59LCBcIjFcIildLCAnV2FybmluZ0FtYmVyJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnpcIlxufSksICdBZGQnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LHVzZVN0YXRlIH0gIGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29uZmlybURlbGV0ZU1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Db25maXJtRGVsZXRlTW9kYWwnO1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnXHJcbmltcG9ydCBWaXNpYmlsaXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHknO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0JztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBPdXRsZXQgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHtUYWJsZSxJY29uQnV0dG9uLCBzdHlsZWQsVGFibGVCb2R5LFRhYmxlQ2VsbCxUYWJsZUhlYWQsVGFibGVSb3csQ2hlY2tib3gsIFRhYmxlQ29udGFpbmVyLCBQYXBlciwgVHlwb2dyYXBoeSB9ICBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFRvb2x0aXAse3Rvb2x0aXBDbGFzc2VzfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBBZGQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuXHJcblxyXG5jb25zdCBEZWxldGVUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmZ1bmN0aW9uIEludm9pY2VBbGxWaWV3VGFibGUoKSB7XHJcbiAgey8qKiBHZXQgSW52b2ljZSAqL31cclxuICBjb25zdCBbaW52b2ljZSxzZXRJbnZvaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBhcGlVcmwgPSBgJHtFTkRQT0lOVF9VUkx9L2ludm9pY2VgO1xyXG4gIHVzZUVmZmVjdCgoKT0+IHtcclxuICBheGlvcy5nZXQoYXBpVXJsKVxyXG4gIC50aGVuKHJlcyA9PiB7XHJcbiAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGEgaGVyZVxyXG4gICAgc2V0SW52b2ljZShyZXMuZGF0YS5kYXRhKTtcclxuICB9KVxyXG4gIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAvLyBIYW5kbGUgZXJyb3JzXHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICB9KTtcclxufSxbXSlcclxuey8qKiBFbmQgR2V0IEludm9pY2UgKi99XHJcbnsvKiogR2V0IEV4cGVuc2VzICovfVxyXG5jb25zdCBbZXhwZW5zZXMsc2V0RXhwZW5zZXNdID0gdXNlU3RhdGUoW10pXHJcbnVzZUVmZmVjdCgoKT0+IHtcclxuYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZGFpbHlleHBlbnNlYClcclxuLnRoZW4ocmVzID0+IHtcclxuICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGEgaGVyZVxyXG4gIHNldEV4cGVuc2VzKHJlcy5kYXRhLmRhdGEpO1xyXG59KVxyXG4uY2F0Y2goZXJyb3IgPT4ge1xyXG4gIC8vIEhhbmRsZSBlcnJvcnNcclxuICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxufSk7XHJcbn0sW10pXHJcbnsvKiogRW5kIEdldCBFeHBlbnNlcyAqL31cclxuey8qKiBDb252ZXJ0IERhdGUgKi99XHJcbnsvKiogQ29udmVydCBEYXRlICovfVxyXG57LyoqIERlbGV0ZSBGdW5jdGlvbiAqL31cclxuICBjb25zdCBbb3BlbkNvbmZpcm0sIHNldE9wZW5Db25maXJtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXRlbVRvRGVsZXRlLCBzZXRJdGVtVG9EZWxldGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQXR0ZW1wdCA9IChpZCwgaW52b2ljZU51bWJlcikgPT4ge1xyXG4gICAgc2V0SXRlbVRvRGVsZXRlKHsgaWQsIGludm9pY2VOdW1iZXIgfSk7XHJcbiAgICBzZXRPcGVuQ29uZmlybSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUZpbmFsRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFpdGVtVG9EZWxldGUpIHJldHVybjtcclxuICAgIGNvbnN0IHsgaWQgfSA9IGl0ZW1Ub0RlbGV0ZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IEludkRlbGV0ZSA9IGludm9pY2UuZmlsdGVyKChyb3cpID0+IHJvdy5faWQgPT09IGlkKTtcclxuICAgICAgY29uc3QgaWRSZWYgPSBleHBlbnNlc1xyXG4gICAgICAgID8uZmlsdGVyKChyb3cpID0+XHJcbiAgICAgICAgICBJbnZEZWxldGU/LmZpbmQoKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hbWUuaW52b2ljZU51bWJlciA9PT0gcm93LnJlZmVyZW5jZU51bWJlcjtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5tYXAoKHJvdykgPT4gcm93Ll9pZCk7XHJcbiAgICAgIGNvbnN0IFJlZklkID0gaWRSZWYudG9TdHJpbmcoKTtcclxuICAgICAgaWYgKFJlZklkKSB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLWRhaWx5ZXhwZW5zZS8ke1JlZklkfWApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtFTkRQT0lOVF9VUkx9L2RlbGV0ZS1pbnZvaWNlLyR7aWR9YCk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBhbGVydChcIkludm9pY2UgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgc2V0SW52b2ljZShpbnZvaWNlLmZpbHRlcigoaW52KSA9PiBpbnYuX2lkICE9PSBpZCkpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICAgIHNldE9wZW5Db25maXJtKGZhbHNlKTtcclxuICAgIHNldEl0ZW1Ub0RlbGV0ZShudWxsKTtcclxuICB9O1xyXG57LyoqIEVuZCBEZWxldGUgRnVuY3Rpb24gKi99XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbjxkaXYgY2xhc3NOYW1lPSdhbGxUYWJsZUNvbnRhaW5lcic+XHJcbiAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgPE5hdkxpbmsgdG89XCIvSW52b2ljZUZvcm1cIiBjbGFzc05hbWU9J0l0ZW1zTmFtZScgc3R5bGU9e3twb3NpdGlvbjoncmVsYXRpdmUnLGZsb2F0OidyaWdodCcsbWFyZ2luOicxMHB4J319PjwvTmF2TGluaz5cclxuICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZScsZmxvYXQ6J3JpZ2h0JyxtYXJnaW46JzEwcHgnfX0+XHJcbiAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkFkZFwiPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJy8+IFxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFRhYmxlIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOid3aGl0ZSd9fT5cclxuICA8VGFibGVIZWFkPlxyXG4gICAgPFRhYmxlUm93PlxyXG4gICAgIDxUYWJsZUNlbGw+PENoZWNrYm94IC8+PC9UYWJsZUNlbGw+XHJcbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5EYXRlPC9UYWJsZUNlbGw+XHJcbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5JbnZvaWNlICM8L1RhYmxlQ2VsbD5cclxuICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkN1c3RvbWVyPC9UYWJsZUNlbGw+XHJcbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5TdGF0dXM8L1RhYmxlQ2VsbD5cclxuICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkR1ZSBEYXRlPC9UYWJsZUNlbGw+XHJcbiAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5JbnZvaWNlIEFtb3VudDwvVGFibGVDZWxsPlxyXG4gICAgICA8VGFibGVDZWxsIGFsaWduPVwibGVmdFwiPkFjdGlvbjwvVGFibGVDZWxsPlxyXG4gICAgPC9UYWJsZVJvdz5cclxuICA8L1RhYmxlSGVhZD5cclxuICA8VGFibGVCb2R5PlxyXG4gICAge2ludm9pY2U/Lm1hcCgocm93KSA9PiAoXHJcbiAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgIDxUYWJsZUNlbGw+PENoZWNrYm94IC8+PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntkYXlqcyhyb3cuaW52b2ljZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cm93Lmludm9pY2VOdW1iZXJ9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgPFRhYmxlQ2VsbCA+e3Jvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJGdWxsTmFtZT9yb3cuY3VzdG9tZXJOYW1lLmN1c3RvbWVyRnVsbE5hbWU6IHJvdy5jdXN0b21lck5hbWUuY29tcGFueU5hbWV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPiA8VHlwb2dyYXBoeVxyXG4gICAgICAgIGNvbG9yPXtcclxuICAgICAgICAgIHJvdy5zdGF0dXMgPT09IFwiRHJhZnRcIlxyXG4gICAgICAgICAgPyBcImdyYXlcIjpyb3cuc3RhdHVzID09PSBcIlNlbnRcIlxyXG4gICAgICAgICAgPyBcImJsdWVcIjpcclxuICAgICAgICAgIHJvdy5zdGF0dXMgPT09IFwiRGVjbGluZVwiXHJcbiAgICAgICAgICA/IFwicmVkXCI6XHJcbiAgICAgICAgICByb3cuc3RhdHVzID09PSBcIlBlbmRpbmdcIlxyXG4gICAgICAgICAgPyBcImdyZWVuXCI6XCJibGFja1wiXHJcbiAgICAgICB9XHJcbiAgICAgICAgPlxyXG57cm93LnN0YXR1c31cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+e2RheWpzKHJvdy5pbnZvaWNlRHVlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPjxzcGFuIGRhdGEtcHJlZml4PiQ8L3NwYW4+IHtyb3cuc3ViVG90YWx9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczonY2VudGVyJyxnYXA6JzEwcHgnfX0+XHJcbiAgICAgICAgICA8TmF2TGluayB0bz17YC9JbnZvaWNlVmlld0FkbWluQWxsLyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIlZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gc3R5bGU9e3tjb2xvcjonIzIwMmE1YSd9fS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGdhcDonMTBweCcscG9zaXRpb246J3JlbGF0aXZlJ319PlxyXG4gICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgIDxFZGl0VG9vbHRpcCB0aXRsZT1cIkVkaXRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgIDwvRWRpdFRvb2x0aXA+XHJcbiAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgIDxEZWxldGVUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlQXR0ZW1wdChyb3cuX2lkLCByb3cuaW52b2ljZU51bWJlcil9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInLGNvbG9yOidyZWQnfX0vPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVsZXRlVG9vbHRpcD4gXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICApKX1cclxuICA8L1RhYmxlQm9keT5cclxuXHJcbiAgICAgIFxyXG4gIDwvVGFibGU+XHJcbiAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q29uZmlybURlbGV0ZU1vZGFsIFxyXG4gICAgICAgICAgICBvcGVuPXtvcGVuQ29uZmlybX0gXHJcbiAgICAgICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRPcGVuQ29uZmlybShmYWxzZSl9IFxyXG4gICAgICAgICAgICBoYW5kbGVEZWxldGU9e2hhbmRsZUZpbmFsRGVsZXRlfSBcclxuICAgICAgICAgICAgaXRlbU5hbWU9e2l0ZW1Ub0RlbGV0ZSA/IGBJbnZvaWNlICMke2l0ZW1Ub0RlbGV0ZS5pbnZvaWNlTnVtYmVyfWAgOiAnJ30gXHJcbiAgICAgICAgLz5cclxuICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludm9pY2VBbGxWaWV3VGFibGVcclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vZGFsLCBCb3gsIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgQnV0dG9uLCBHcmlkLCBJY29uQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgV2FybmluZ0FtYmVySWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1dhcm5pbmdBbWJlcic7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgd2lkdGg6IDQ1MCxcbiAgICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXG4gICAgYm94U2hhZG93OiAyNCxcbiAgICBwOiA0LFxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgYm9yZGVyVG9wOiAnOHB4IHNvbGlkICNkMzJmMmYnIC8vIFJlZCB3YXJuaW5nIGJvcmRlclxufTtcblxuY29uc3QgQ29uZmlybURlbGV0ZU1vZGFsID0gKHsgb3BlbiwgaGFuZGxlQ2xvc2UsIGhhbmRsZURlbGV0ZSwgaXRlbU5hbWUgfSkgPT4ge1xuICAgIGNvbnN0IFtjb25maXJtVGV4dCwgc2V0Q29uZmlybVRleHRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtpc0Rpc2FibGVkLCBzZXRJc0Rpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGNvbmZpcm1UZXh0ID09PSAnREVMRVRFJykge1xuICAgICAgICAgICAgc2V0SXNEaXNhYmxlZChmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRJc0Rpc2FibGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW2NvbmZpcm1UZXh0XSk7XG5cbiAgICBjb25zdCBvbkNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIGhhbmRsZURlbGV0ZSgpO1xuICAgICAgICBzZXRDb25maXJtVGV4dCgnJyk7XG4gICAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHNldENvbmZpcm1UZXh0KCcnKTtcbiAgICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbmZpcm0tZGVsZXRlLXRpdGxlXCJcbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjb25maXJtLWRlbGV0ZS1kZXNjcmlwdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwiY29uZmlybS1kZWxldGUtdGl0bGVcIiB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiIHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGNvbG9yOiAnI2QzMmYyZicsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2FybmluZ0FtYmVySWNvbiBzeD17eyBtcjogMSB9fSAvPiBDb25maXJtIERlbGV0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3g9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17b25DbG9zZX0gc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgc3g9e3sgbXQ6IDIsIG1iOiAxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgPHN0cm9uZz57aXRlbU5hbWUgfHwgJ3RoaXMgcmVjb3JkJ308L3N0cm9uZz4/XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgc3g9e3sgbWI6IDMgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBhY3Rpb24gaXMgaXJyZXZlcnNpYmxlIGFuZCBtYXkgYWZmZWN0IGxpbmtlZCBkYXRhLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3g9e3sgbWI6IDEsIGZvbnRXZWlnaHQ6ICdtZWRpdW0nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSB0eXBlIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnI2QzMmYyZicsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5ERUxFVEU8L3NwYW4+IHRvIGNvbmZpcm06XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBERUxFVEUgaGVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpcm1UZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29uZmlybVRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtjb25maXJtVGV4dCAhPT0gJycgJiYgY29uZmlybVRleHQgIT09ICdERUxFVEUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyBtdDogMywgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDIsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBjb2xvcjogJ2dyYXknLCBib3JkZXJDb2xvcjogJ2dyYXknLCAnJjpob3Zlcic6IHsgYm9yZGVyQ29sb3I6ICcjMjAyYTVhJywgY29sb3I6ICcjMjAyYTVhJyB9IH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Db25maXJtfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICcjZDMyZjJmJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzogeyBiZ2NvbG9yOiAnI2I3MWMxYycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6ZGlzYWJsZWQnOiB7IGJnY29sb3I6ICcjZWY5YTlhJywgY29sb3I6ICd3aGl0ZScgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIElycmV2ZXJzaWJseVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybURlbGV0ZU1vZGFsO1xuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29uZmlybURlbGV0ZU1vZGFsIiwiVmlzaWJpbGl0eUljb24iLCJFZGl0SWNvbiIsIkRlbGV0ZUljb24iLCJOYXZMaW5rIiwiT3V0bGV0IiwiVGFibGUiLCJJY29uQnV0dG9uIiwic3R5bGVkIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJDaGVja2JveCIsIlRhYmxlQ29udGFpbmVyIiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJBZGQiLCJkYXlqcyIsIkRlbGV0ZVRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIkVkaXRUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJWaWV3VG9vbHRpcCIsIl9yZWY1IiwiX2V4Y2x1ZGVkMyIsIl9yZWY2IiwiSW52b2ljZUFsbFZpZXdUYWJsZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImludm9pY2UiLCJzZXRJbnZvaWNlIiwiYXBpVXJsIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZXhwZW5zZXMiLCJzZXRFeHBlbnNlcyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2Iiwib3BlbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiaXRlbVRvRGVsZXRlIiwic2V0SXRlbVRvRGVsZXRlIiwiaGFuZGxlRGVsZXRlQXR0ZW1wdCIsImlkIiwiaW52b2ljZU51bWJlciIsImhhbmRsZUZpbmFsRGVsZXRlIiwiX3JlZjciLCJfYXN5bmNUb0dlbmVyYXRvciIsIkludkRlbGV0ZSIsImZpbHRlciIsInJvdyIsIl9pZCIsImlkUmVmIiwiZmluZCIsIm5hbWUiLCJyZWZlcmVuY2VOdW1iZXIiLCJtYXAiLCJSZWZJZCIsInRvU3RyaW5nIiwiZGVsZXRlIiwiYWxlcnQiLCJpbnYiLCJhcHBseSIsImFyZ3VtZW50cyIsImNvbXBvbmVudCIsInRvIiwic3R5bGUiLCJwb3NpdGlvbiIsImZsb2F0IiwibWFyZ2luIiwidGl0bGUiLCJhbGlnbiIsImtleSIsImludm9pY2VEYXRlIiwiZm9ybWF0IiwiY3VzdG9tZXJOYW1lIiwiY3VzdG9tZXJGdWxsTmFtZSIsImNvbXBhbnlOYW1lIiwic3RhdHVzIiwiaW52b2ljZUR1ZURhdGUiLCJzdWJUb3RhbCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwib25DbGljayIsImN1cnNvciIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsImhhbmRsZURlbGV0ZSIsIml0ZW1OYW1lIiwiTW9kYWwiLCJCb3giLCJUZXh0RmllbGQiLCJCdXR0b24iLCJHcmlkIiwiV2FybmluZ0FtYmVySWNvbiIsIkNsb3NlSWNvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyVG9wIiwiY29uZmlybVRleHQiLCJzZXRDb25maXJtVGV4dCIsImlzRGlzYWJsZWQiLCJzZXRJc0Rpc2FibGVkIiwib25Db25maXJtIiwib25DbG9zZSIsInN4IiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsInZhcmlhbnQiLCJmb250V2VpZ2h0IiwibXIiLCJ0ZXh0QWxpZ24iLCJzaXplIiwibXQiLCJtYiIsImZ1bGxXaWR0aCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJhdXRvRm9jdXMiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlckNvbG9yIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9