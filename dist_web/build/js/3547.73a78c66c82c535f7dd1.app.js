"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[3547],{

/***/ 15542
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
var _default = exports.A = (0, _createSvgIcon.default)([/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12 5.99 19.53 19H4.47zM12 2 1 21h22z"
}, "0"), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M13 16h-2v2h2zm0-6h-2v5h2z"
}, "1")], 'WarningAmber');

/***/ },

/***/ 99682
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20561);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), 'Add'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 53547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _component_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80542);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55746);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5673);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28597);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67034);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84976);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33198);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64137);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96627);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(70691);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27558);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(43884);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(58331);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(99380);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(71510);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(99682);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(74353);
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












var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay)(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay)(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.tooltip)]: {
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
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__/* .ENDPOINT_URL */ .m, "/invoice");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A.get(apiUrl).then(res => {
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
    axios__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__/* .ENDPOINT_URL */ .m, "/dailyexpense")).then(res => {
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
          yield axios__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A.delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__/* .ENDPOINT_URL */ .m, "/delete-dailyexpense/").concat(RefId));
        }
        var res = yield axios__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A.delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_21__/* .ENDPOINT_URL */ .m, "/delete-invoice/").concat(id));
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "allTableContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .k2, {
    to: "/InvoiceForm",
    className: "ItemsName",
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "Add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
    className: "btnCustomer"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    style: {
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    align: "center"
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    align: "center"
  }, "Invoice #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    align: "center"
  }, "Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    align: "center"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    align: "center"
  }, "Due Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    align: "center"
  }, "Invoice Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    align: "left"
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null, invoice === null || invoice === void 0 ? void 0 : invoice.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    align: "center"
  }, dayjs__WEBPACK_IMPORTED_MODULE_23___default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    align: "center"
  }, row.invoiceNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, row.customerName.customerFullName ? row.customerName.customerFullName : row.customerName.companyName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    align: "center"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    color: row.status === "Draft" ? "gray" : row.status === "Sent" ? "blue" : row.status === "Decline" ? "red" : row.status === "Pending" ? "green" : "black"
  }, row.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    align: "center"
  }, dayjs__WEBPACK_IMPORTED_MODULE_23___default()(row.invoiceDueDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "data-prefix": true
  }, "$"), " ", row.subTotal), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    align: "center",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .k2, {
    to: "/InvoiceViewAdminAll/".concat(row._id),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTooltip, {
    title: "View"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      display: 'flex',
      gap: '10px',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .k2, {
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditTooltip, {
    title: "Edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DeleteTooltip, {
    title: "Delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    onClick: () => handleDeleteAttempt(row._id, row.invoiceNumber)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  }))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    open: openConfirm,
    handleClose: () => setOpenConfirm(false),
    handleDelete: handleFinalDelete,
    itemName: itemToDelete ? "Invoice #".concat(itemToDelete.invoiceNumber) : ''
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvoiceAllViewTable);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 80542
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35406);
/* harmony import */ var _mui_icons_material_WarningAmber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15542);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39781);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    open: open,
    onClose: onClose,
    "aria-labelledby": "confirm-delete-title",
    "aria-describedby": "confirm-delete-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    sx: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    id: "confirm-delete-title",
    variant: "h5",
    component: "h2",
    sx: {
      display: 'flex',
      alignItems: 'center',
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_WarningAmber__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      mr: 1
    }
  }), " Confirm Deletion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 2,
    sx: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    onClick: onClose,
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    variant: "body1",
    sx: {
      mt: 2,
      mb: 1
    }
  }, "Are you sure you want to delete ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, itemName || 'this record'), "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    variant: "body2",
    color: "text.secondary",
    sx: {
      mb: 3
    }
  }, "This action is irreversible and may affect linked data.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    variant: "body2",
    sx: {
      mb: 1,
      fontWeight: 'medium'
    }
  }, "Please type ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, "DELETE"), " to confirm:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    variant: "outlined",
    placeholder: "Type DELETE here",
    value: confirmText,
    onChange: e => setConfirmText(e.target.value),
    autoFocus: true,
    error: confirmText !== '' && confirmText !== 'DELETE'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sx: {
      mt: 3,
      display: 'flex',
      gap: 2,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
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
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);